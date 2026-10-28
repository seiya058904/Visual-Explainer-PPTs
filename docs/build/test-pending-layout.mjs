// Static layout regression: all real text nodes, ancestor clipping and footer clearance.
// Usage: node docs/build/test-pending-layout.mjs [output-directory]
import { chromium } from 'playwright';
import fs from 'node:fs';

const out = process.argv[2] || '.codex/pending-layout';
const base = process.env.DECK_BASE || 'http://127.0.0.1:8901';
const catalog = JSON.parse(fs.readFileSync('site/catalog.json', 'utf8'))
  .filter(entry => entry.status === 'pending');
const browser = await chromium.launch();
const rows = [];
fs.mkdirSync(out, { recursive: true });

function inspect(index) {
  const slide = document.querySelectorAll('#deck > .slide')[index];
  const errors = [];
  const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
  const foot = slide.querySelector('.foot')?.getBoundingClientRect();
  let node;
  while ((node = walker.nextNode())) {
    if (!node.textContent.trim() || node.parentElement.closest('script,style,svg title,svg desc')) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    const rect = range.getBoundingClientRect();
    if (!rect.width || !rect.height) continue;
    const text = node.textContent.trim().slice(0, 70);
    let element = node.parentElement;
    while (element && element !== slide.parentElement) {
      const style = getComputedStyle(element);
      const box = element.getBoundingClientRect();
      if (/hidden|clip/.test(style.overflowY) && (rect.bottom > box.bottom + 2 || rect.top < box.top - 2)) {
        errors.push({ text, kind: 'ancestor-clip', by: element.className });
        break;
      }
      element = element.parentElement;
    }
    if (rect.bottom > innerHeight - 2) errors.push({ text, kind: 'viewport' });
    if (foot && !node.parentElement.closest('.foot') && rect.bottom > foot.top - 4
      && rect.top < foot.bottom && rect.left < foot.right && rect.right > foot.left) {
      errors.push({ text, kind: 'footer-clearance' });
    }
  }
  return errors;
}

try {
  for (const [width, height] of [[1920, 900], [1536, 730], [1280, 600], [1000, 560]]) {
    await Promise.all(catalog.map(async entry => {
      const page = await browser.newPage({ viewport: { width, height } });
      try {
        await page.goto(`${base}/${entry.source}`);
        await page.evaluate(() => document.fonts.ready);
        await page.evaluate(() => window.__setLowPowerMode(true));
        await page.waitForTimeout(1800);
        for (let index = 0; index < entry.slideCount; index++) {
          await page.evaluate(index => go(index), index);
          // Even static runtimes may retain the navigation lock; verify the actual page.
          await page.waitForTimeout(1800);
          if (await page.evaluate(() => window.__currentSlideIndex) !== index) {
            throw new Error(`Navigation failed: ${entry.id}, page ${index + 1}`);
          }
          const issues = await page.evaluate(inspect, index);
          rows.push({ id: entry.id, page: index + 1, width, height, issues });
          if (issues.length) {
            await page.screenshot({ path: `${out}/${entry.id}-${width}-${index + 1}.png` });
          }
        }
      } finally {
        await page.close();
      }
    }));
    console.log('checked', width, height);
  }
  fs.writeFileSync(`${out}/results.json`, JSON.stringify(rows, null, 2));
  const failures = rows.filter(row => row.issues.length).length;
  console.log(JSON.stringify({ pages: rows.length, failures }));
  if (failures) process.exitCode = 1;
} finally {
  await browser.close();
}
