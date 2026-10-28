#!/usr/bin/env node
/**
 * Offline core-content gate for frozen standalone decks.
 * node docs/build/test-offline.mjs --manifest paths.txt --out .codex/offline
 * Manifest: newline-delimited HTML paths, JSON string array, or {decks:[{path}]}.
 * External fonts/icons/scripts/images are deliberately blocked. External pictures
 * are reported as limitations; broken embedded/local images, unreadable core text,
 * failed navigation, local HTTP failures and uncaught page errors fail the gate.
 * No DOM styles/opacity are rewritten. Low-power uses the deck's public API/UI.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf('--' + name); return i < 0 ? fallback : args[i + 1]; };
const manifest = opt('manifest');
if (!manifest) throw new Error('Required: --manifest paths.txt (or .json)');
const out = path.resolve(opt('out', '.codex/offline'));
const settle = Number(opt('settle', '1900'));
const concurrency = Math.max(1, Number(opt('concurrency', '2')));
const viewport = opt('viewport', '1280x720').split('x').map(Number);
if (!viewport.every(n => Number.isInteger(n) && n > 0) || viewport.length !== 2 || !Number.isFinite(settle) || settle < 700) throw new Error('Invalid viewport or settle (minimum 700ms)');
const input = fs.readFileSync(path.resolve(manifest), 'utf8').replace(/^\uFEFF/, '').trim();
let entries;
if (/^[\[{]/.test(input)) {
  const parsed = JSON.parse(input); entries = Array.isArray(parsed) ? parsed : parsed.decks;
} else entries = input.split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'));
if (!Array.isArray(entries) || !entries.length) throw new Error('Manifest must contain HTML paths');
entries = entries.map((e, index) => {
  const name = typeof e === 'string' ? e : e.path || e.source || e.file;
  if (!name || !/\.html?$/i.test(name)) throw new Error(`Invalid HTML path at manifest entry ${index}`);
  const file = path.resolve(repo, name);
  const bytes = fs.readFileSync(file);
  return { index, file, deck: path.basename(file, '.html'), sha256: crypto.createHash('sha256').update(bytes).digest('hex') };
});
fs.mkdirSync(out, { recursive: true });
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/favicon.ico') { res.writeHead(204); res.end(); return; }
    const match = pathname.match(/^\/deck\/(\d+)\/(.*)$/);
    if (!match || !entries[Number(match[1])]) { res.writeHead(404); res.end(); return; }
    const entry = entries[Number(match[1])], dir = path.dirname(entry.file);
    const file = match[2] === 'index.html' ? entry.file : path.resolve(dir, match[2]);
    const relative = path.relative(dir, file);
    if (relative.startsWith('..') || path.isAbsolute(relative)) { res.writeHead(403); res.end(); return; }
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  } catch { res.writeHead(500); res.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
const results = [];
const currentIndex = page => page.evaluate(() => {
  if (Number.isInteger(window.__currentSlideIndex)) return window.__currentSlideIndex;
  const slides = [...document.querySelectorAll('.slide')];
  const active = slides.findIndex(s => s.classList.contains('active') || s.getAttribute('aria-current') === 'true');
  if (active >= 0) return active;
  return slides.findIndex(s => { const r = s.getBoundingClientRect(); return Math.abs(r.left) < 5; });
});
async function navigate(page, target) {
  for (let attempt = 0; attempt < 4; attempt++) {
    if (await currentIndex(page) === target) return;
    const usedAPI = await page.evaluate(i => {
      if (typeof go === 'function') { go(i); return true; }
      if (typeof window.goToSlide === 'function') { window.goToSlide(i); return true; }
      return false;
    }, target);
    if (!usedAPI) {
      for (let keys = 0; keys < 30; keys++) {
        const index = await currentIndex(page);
        if (index === target) break;
        await page.keyboard.press(index < target ? 'ArrowRight' : 'ArrowLeft');
        await page.waitForTimeout(settle);
      }
    } else await page.waitForTimeout(settle);
  }
  if (await currentIndex(page) !== target) throw new Error(`Navigation did not reach slide ${target + 1}`);
}
async function inspect(page, index) {
  return page.evaluate(index => {
    const slide = document.querySelectorAll('.slide')[index];
    const root = slide.querySelector('.frame') || slide;
    const unreadable = [], text = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const value = node.textContent.trim();
      if (!value || node.parentElement.closest('script,style,template,noscript,svg title,svg desc,.notes,.speaker-notes')) continue;
      let el = node.parentElement, opacity = 1, hidden = false;
      const clipping = [];
      while (el && el !== slide.parentElement) {
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.visibility === 'collapse') hidden = true;
        opacity *= Number(cs.opacity);
        if (/(hidden|clip)/.test(cs.overflowX + cs.overflowY)) clipping.push({box: el.getBoundingClientRect(), x: /(hidden|clip)/.test(cs.overflowX), y: /(hidden|clip)/.test(cs.overflowY)});
        el = el.parentElement;
      }
      const range = document.createRange(); range.selectNodeContents(node);
      const r = range.getBoundingClientRect();
      const clipped = clipping.some(c => (c.x && (r.left < c.box.left-2 || r.right > c.box.right+2)) || (c.y && (r.top < c.box.top-2 || r.bottom > c.box.bottom+2)));
      const reason = hidden ? 'hidden' : opacity < 0.1 ? 'opacity' : !r.width || !r.height ? 'zero-area' : r.left < -2 || r.right > innerWidth + 2 || r.top < -2 || r.bottom > innerHeight + 2 ? 'outside-viewport' : clipped ? 'clipped-by-ancestor' : null;
      text.push(value);
      if (reason) unreadable.push({ text: value.slice(0, 100), reason, opacity: +opacity.toFixed(3) });
    }
    const images = [...root.querySelectorAll('img')].map(img => {
      const src = img.currentSrc || img.getAttribute('src') || '';
      const external = /^https?:/i.test(src) && new URL(src, location.href).origin !== location.origin;
      return { alt: img.alt, kind: external ? 'external-blocked' : src.startsWith('data:') ? 'inline' : 'local', loaded: img.complete && img.naturalWidth > 0, source: src.startsWith('data:') ? src.slice(0, 65) : src };
    });
    return { page: index + 1, textNodes: text.length, textPreview: text.join(' ').slice(0, 240), unreadable, images, inlineSVGs: root.querySelectorAll('svg').length };
  }, index);
}
async function run(entry) {
  const result = { deck: entry.deck, path: entry.file, sha256: entry.sha256, viewport: viewport.join('x'), mode: 'external-network-blocked', staticMode: 'unavailable', pages: [], pageErrors: [], consoleErrors: [], localFailures: [], blockedExternal: [], limitations: [], errors: [], pass: false };
  const ctx = await browser.newContext({ viewport: { width: viewport[0], height: viewport[1] }, serviceWorkers: 'block' });
  const blocked = new Set();
  await ctx.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith('data:') || url.startsWith('about:') || new URL(url).origin === origin) return route.continue();
    blocked.add(url); return route.abort('blockedbyclient');
  });
  // WebSocket handshakes have a separate routing API in current Playwright.
  if (typeof ctx.routeWebSocket === 'function') await ctx.routeWebSocket('**/*', socket => {
    if (new URL(socket.url()).origin.replace(/^ws/, 'http') === origin) socket.connectToServer();
    else { blocked.add(socket.url()); socket.close(); }
  });
  const page = await ctx.newPage();
  page.on('pageerror', error => result.pageErrors.push(String(error)));
  page.on('console', msg => {
    if (msg.type() !== 'error') return;
    const url = msg.location().url;
    const deliberate = url && !url.startsWith('data:') && url !== origin && /^https?:/.test(url) && new URL(url).origin !== origin;
    const blockedNotice = /ERR_BLOCKED_BY_CLIENT/.test(msg.text());
    result.consoleErrors.push({ text: msg.text().slice(0, 300), url, classification: deliberate || blockedNotice ? 'deliberately-blocked-resource' : 'runtime-or-local' });
  });
  page.on('response', res => { if (res.url().startsWith(origin) && res.status() >= 400) result.localFailures.push(`${res.status()} ${res.url()}`); });
  page.on('requestfailed', req => { if (req.url().startsWith(origin)) result.localFailures.push(`${req.failure()?.errorText} ${req.url()}`); });
  try {
    await page.goto(`${origin}/deck/${entry.index}/index.html`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.evaluate(() => Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 7000))]));
    await page.waitForTimeout(settle);
    result.staticMode = await page.evaluate(() => {
      if (typeof window.__setLowPowerMode === 'function') { window.__setLowPowerMode(true); return 'public-api'; }
      return 'unavailable';
    });
    if (result.staticMode === 'unavailable' && await page.locator('#ppt-low-power-btn').count()) {
      await page.locator('#ppt-low-power-btn').click(); result.staticMode = 'button';
    }
    await page.waitForTimeout(settle);
    result.staticActive = await page.evaluate(() => window.__lowPowerMode === true || document.body.classList.contains('low-power'));
    if (result.staticMode !== 'unavailable' && !result.staticActive) result.errors.push('Offered static mode did not activate');
    const count = await page.locator('.slide').count();
    if (!count) throw new Error('No .slide elements found');
    for (let i = 0; i < count; i++) {
      await navigate(page, i);
      const rec = await inspect(page, i);
      rec.pass = rec.textNodes > 0 && !rec.unreadable.length && !rec.images.some(img => img.kind !== 'external-blocked' && !img.loaded);
      result.pages.push(rec);
    }
    result.blockedExternal = [...blocked];
    const pictures = result.pages.flatMap(p => p.images.filter(i => i.kind === 'external-blocked'));
    if (pictures.length) result.limitations.push(`${pictures.length} external picture placements unavailable offline; this gate certifies core text and embedded/local image decoding, not complete offline visual equivalence.`);
    result.pass = result.pages.every(p => p.pass) && !result.pageErrors.length && !result.localFailures.length && !result.errors.length && !result.consoleErrors.some(e => e.classification === 'runtime-or-local');
  } catch (error) { result.errors.push(String(error)); }
  finally {
    result.blockedExternal = [...blocked]; await ctx.close();
    fs.writeFileSync(path.join(out, `${String(entry.index + 1).padStart(2, '0')}-${entry.deck}.json`), JSON.stringify(result, null, 2));
    const externalPictures = result.pages.reduce((n, p) => n + p.images.filter(i => i.kind === 'external-blocked').length, 0);
    results.push(result); console.log(`${result.pass ? 'PASS' : 'FAIL'} ${entry.deck}: ${result.pages.length} pages, ${result.pageErrors.length} pageerrors, ${result.pages.reduce((n, p) => n + p.unreadable.length, 0)} unreadable text nodes, ${externalPictures} external pictures unavailable`);
  }
}
try {
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
  browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, entries.length) }, async () => { while (next < entries.length) await run(entries[next++]); }));
} finally {
  if (browser) await browser.close(); await new Promise(resolve => server.close(resolve));
  results.sort((a, b) => entries.findIndex(e => e.file === a.path) - entries.findIndex(e => e.file === b.path));
  const summary = { manifest: path.resolve(manifest), testedAt: new Date().toISOString(), externalNetwork: 'all blocked', offlineScope: 'Core text and embedded/local image decoding. External pictures are explicitly unavailable, and external fonts/icons may use fallbacks.', pass: results.length === entries.length && results.every(r => r.pass), deckCount: results.length, pageCount: results.reduce((n, r) => n + r.pages.length, 0), results };
  fs.writeFileSync(path.join(out, 'results.json'), JSON.stringify(summary, null, 2));
  if (!summary.pass) process.exitCode = 1;
}
