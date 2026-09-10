#!/usr/bin/env node
/**
 * browser-qa.mjs — 全仓 deck 真实浏览器 QA
 *
 * 用法:
 *   node docs/build/browser-qa.mjs --mode pending  --base http://127.0.0.1:8901 --out .codex/audit-2026-09-10/qa
 *   node docs/build/browser-qa.mjs --mode approved --base http://127.0.0.1:8901 --out .codex/audit-2026-09-10/qa
 *   node docs/build/browser-qa.mjs --mode standalone --base http://127.0.0.1:8902 --out .codex/audit-2026-09-10/qa
 *   node docs/build/browser-qa.mjs --mode lowpower-cross --base http://127.0.0.1:8901 --out .codex/audit-2026-09-10/qa
 *
 * 输出: <out>/<mode>-<deck>.json + <out>/<mode>-summary.md
 *
 * 检查项: console/page errors, failed resources(404), broken images,
 *         视口几何(文本 bbox 越界/foot/nav 遮挡), 动画真实运行(min/max opacity),
 *         pipeline 三态(step 低亮→推进→完成→翻页), keyboard nav, ESC overview,
 *         low-power(含跨 deck 污染), reduced-motion fallback, standalone 依赖。
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const CHROME = 'C:/Users/admin/AppData/Local/ms-playwright/chromium-1237/chrome-win64/chrome.exe';
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const has = k => args.includes('--' + k);
const MODE = opt('mode', 'pending');
const BASE = opt('base', 'http://127.0.0.1:8901');
const OUT = opt('out', '.codex/audit-2026-09-10/qa');
const SHOTS = opt('shots', '.codex/audit-2026-09-10/shots');
const ONLY = opt('only', '');            // 逗号分隔 deck 过滤(子串)
const VIEWPORTS = (opt('viewports', '') || '').split(',').filter(Boolean)
  .map(s => { const [w, h] = s.split('x').map(Number); return { w, h, name: `${w}x${h}` }; });
const CONCURRENCY = Number(opt('concurrency', '3'));

const PENDING_DECKS = [
  'air-conditioning-moving-heat', 'bridges-always-moving', 'caffeine-blocking-sleepiness',
  'container-the-box', 'fingerprints-not-for-grip', 'glass-transparent-solid',
  'soap-translating-oil', 'tap-water-clean-process', 'traffic-light-yellow-physics',
  'zipper-line-of-teeth',
].map(d => ({ deck: d, url: `${BASE}/2026-08-30-${d}/index.html` }));

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(SHOTS, { recursive: true });

const V1600 = { w: 1600, h: 900, name: '1600x900' };
const V1280 = { w: 1280, h: 720, name: '1280x720' };
const V1000 = { w: 1000, h: 560, name: '1000x560' };
const ANIM_SETTLE = 1900;   // 入场动画稳定等待
const TRANSITION = 1700;    // 翻页过渡等待

function log(...a) { console.log(new Date().toISOString().slice(11, 19), ...a); }

/* ---------- 页面内辅助 ---------- */
const PAGE_HELPERS = `
  window.__qa = {
    slideCount(){ return document.querySelectorAll('.slide').length; },
    idx(){ return window.__currentSlideIndex || 0; },
    activeSlide(){ return document.querySelectorAll('.slide')[this.idx()]; },
    animEls(slide){ return [...slide.querySelectorAll('[data-anim]')]; },
    textEls(slide){
      const out = [];
      for (const el of slide.querySelectorAll('h1,h2,h3,h4,h5,p,li,span,div,figcaption,td,th')) {
        if (el.childElementCount === 0 && el.textContent.trim().length > 0) {
          const cs = getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.5) continue;
          if (el.closest('.chrome, .foot, [data-qa-ignore]')) continue;
          out.push(el);
        }
      }
      return out;
    },
    foot(){ return this.activeSlide().querySelector('.foot'); },
    navBox(){
      const btn = document.querySelector('#ppt-low-power-btn');
      if (!btn) return null;
      const bar = btn.closest('div');
      const r = bar.getBoundingClientRect();
      return { x: r.x, y: r.y, w: r.width, h: r.height };
    },
  };
`;

async function sampleAnimRange(page, ms = 2600) {
  return page.evaluate(async (ms) => {
    const t0 = performance.now();
    const bySlide = {};
    while (performance.now() - t0 < ms) {
      // 每轮重新解析活动页,并按页分组:翻页过渡中相邻页的动画互不污染
      const idx = window.__currentSlideIndex || 0;
      const slide = document.querySelectorAll('.slide')[idx];
      if (!slide) continue;
      const bucket = bySlide[idx] || (bySlide[idx] = { n: 0, min: 1, max: 0, transformed: false });
      const els = [...slide.querySelectorAll('[data-anim]')];
      bucket.n = Math.max(bucket.n, els.length);
      for (const el of els) {
        const cs = getComputedStyle(el);
        const o = +cs.opacity;
        if (o < bucket.min) bucket.min = o;
        if (o > bucket.max) bucket.max = o;
        if (cs.transform && cs.transform !== 'none') bucket.transformed = true;
      }
      await new Promise(r => setTimeout(r, 60));
    }
    return bySlide;
  }, ms);
}

async function collectIssues(page) {
  return page.evaluate(() => {
    const vw = innerWidth, vh = innerHeight, TOL = 2;
    const res = { overflow: [], footOverlap: [], navOverlap: [], brokenImages: [] };
    const slide = window.__qa.activeSlide();
    if (!slide) return res;
    const foot = window.__qa.foot();
    const footBox = foot ? foot.getBoundingClientRect() : null;
    const navBox = window.__qa.navBox();
    for (const el of window.__qa.textEls(slide)) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.left < -TOL || r.right > vw + TOL || r.top < -TOL || r.bottom > vh + TOL) {
        res.overflow.push({
          text: el.textContent.trim().slice(0, 40),
          box: { l: +r.left.toFixed(1), t: +r.top.toFixed(1), r: +r.right.toFixed(1), b: +r.bottom.toFixed(1) },
          tag: el.tagName, cls: el.className && String(el.className).slice(0, 40),
        });
        continue;
      }
      if (footBox && footBox.height > 0) {
        const ix = Math.max(0, Math.min(r.right, footBox.right) - Math.max(r.left, footBox.left));
        const iy = Math.max(0, Math.min(r.bottom, footBox.bottom) - Math.max(r.top, footBox.top));
        if (ix > 4 && iy > 4) res.footOverlap.push({ text: el.textContent.trim().slice(0, 40), tag: el.tagName });
      }
      if (navBox && navBox.h > 0) {
        const nb = { l: navBox.x, t: navBox.y, r: navBox.x + navBox.w, b: navBox.y + navBox.h };
        const ix = Math.max(0, Math.min(r.right, nb.r) - Math.max(r.left, nb.l));
        const iy = Math.max(0, Math.min(r.bottom, nb.b) - Math.max(r.top, nb.t));
        if (ix > 4 && iy > 4) res.navOverlap.push({ text: el.textContent.trim().slice(0, 40), tag: el.tagName });
      }
    }
    for (const img of slide.querySelectorAll('img')) {
      if (img.complete && img.naturalWidth === 0) res.brokenImages.push(img.getAttribute('src'));
    }
    return res;
  });
}

async function pipelineState(page) {
  return page.evaluate(() => {
    const slide = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
    if (!slide || slide.dataset.animate !== 'pipeline') return null;
    const op = sel => [...slide.querySelectorAll(sel)].map(el => +getComputedStyle(el).opacity);
    const vis = sel => {
      const el = slide.querySelector(sel);
      if (!el) return null;
      const o = +getComputedStyle(el).opacity;
      return o;
    };
    return {
      isPipeline: true,
      steps: op('[data-anim="step"]'),
      arrows: op('[data-anim="arrow"]'),
      otherAnim: op('[data-anim]:not([data-anim="step"]):not([data-anim="arrow"])'),
      kicker: vis('.kicker'), title: vis('h2, .h-xl, h1'), lead: vis('.lead'),
    };
  });
}

async function shot(page, file) {
  await page.screenshot({ path: path.join(SHOTS, file) });
}

/* ---------- 单 deck QA ---------- */
async function qaDeck(browser, deck, url, mode) {
  const result = { deck, url, mode, viewports: {}, animations: {}, notes: [] };
  const viewports = mode === 'pending' ? (VIEWPORTS.length ? VIEWPORTS : [V1600, V1280, V1000])
    : mode === 'approved' ? (VIEWPORTS.length ? VIEWPORTS : [V1600])
    : [V1600];

  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();
    const errors = [], pageErrors = [], failed = [];
    page.on('console', m => { if (m.type() === 'error') errors.push(`${m.text().slice(0, 140)} @ ${m.location()?.url?.split('/').pop() || '?'}`); });
    page.on('pageerror', e => pageErrors.push(String(e).slice(0, 200)));
    page.on('response', r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url().split('/').pop()}`); });
    page.on('requestfailed', r => {
      const u = r.url();
      if (!u.startsWith('data:')) failed.push(`REQFAIL ${u.split('/').pop()}`);
    });

    const vpRes = { viewport: vp.name, slides: [], console: errors, pageErrors, failed };
    // favicon 缺失属服务器环境噪音,不作为 deck 缺陷
    await page.route('**/favicon.ico', route => route.fulfill({ status: 204, body: '' }));
    const bust = `?qa=${Date.now()}`;
    await page.goto(url + bust, { waitUntil: 'domcontentloaded' });
    await page.addScriptTag({ content: PAGE_HELPERS }).catch(() => {});
    await page.waitForFunction(() => document.body.classList.contains('motion-ready'), null, { timeout: 6000 }).catch(() => {});

    // motion-ready?
    vpRes.motionReady = await page.evaluate(() => document.body.classList.contains('motion-ready'));

    const total = await page.evaluate(() => window.__qa.slideCount());
    const deep = mode === 'pending';
    const types = await page.evaluate(() => [...document.querySelectorAll('.slide')].map(s => s.dataset.animate || (s.classList.contains('hero') ? 'hero' : 'cascade')));
    // approved 非首视口只扫高风险页
    const isHighRisk = i => ['pipeline', 'directional', 'hero'].includes(types[i]) || i === 0 || i === total - 1;
    const slideRecAnimHolder = {};
    for (let i = 0; i < total; i++) {
      if (mode === 'approved' && vp.name !== viewports[0].name && !isHighRisk(i)) continue;
      if (i > 0) {
        // 按键直到到达第 i 页;记录“到达页自身”的动画采样(pipeline 页会吞键推进 step)
        let idxNow0 = await page.evaluate(() => window.__qa.idx());
        let arrived = idxNow0 === i;
        for (let g = 0; g < 12 && !arrived; g++) {
          await page.keyboard.press('ArrowRight');
          const anim = await sampleAnimRange(page, 1600);
          const idxNow = await page.evaluate(() => window.__qa.idx());
          arrived = idxNow === i;
          if (arrived && anim[i]) slideRecAnimHolder.anim = { elements: anim[i].n, minOpacity: +anim[i].min.toFixed(2), maxOpacity: +anim[i].max.toFixed(2), transformed: anim[i].transformed };
          if (idxNow > i) break;
        }
        if (arrived && idxNow0 === i && i > 0) slideRecAnimHolder.anim = { skipped: 'arrived via pipeline exit press' };
      } else {
        // 第一页:立即采样,motion-ready 出现后动画随即开始
        const anim = await sampleAnimRange(page, 2200);
        if (anim[0]) slideRecAnimHolder.anim = { elements: anim[0].n, minOpacity: +anim[0].min.toFixed(2), maxOpacity: +anim[0].max.toFixed(2), transformed: anim[0].transformed };
      }
      const slideRec = { page: i, actualIndex: await page.evaluate(() => window.__qa.idx()), ...slideRecAnimHolder };
      const isPipeline = await page.evaluate(() => {
        const s = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
        return !!s && s.dataset.animate === 'pipeline';
      });
      const isDirectional = await page.evaluate(() => {
        const s = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
        return !!s && s.dataset.animate === 'directional';
      });
      slideRec.pipeline = isPipeline; slideRec.directional = isDirectional;

      // 几何
      const geo = await collectIssues(page);
      slideRec.overflow = geo.overflow; slideRec.footOverlap = geo.footOverlap;
      slideRec.navOverlap = geo.navOverlap; slideRec.brokenImages = geo.brokenImages;

      // pipeline 深检
      if (isPipeline && deep) {
        const st0 = await pipelineState(page);
        slideRec.pipelineInitial = st0;
        await shot(page, `${deck}-p${String(i).padStart(2, '0')}-pipeline-initial.png`).catch(() => {});
        const steps = st0 ? st0.steps.length : 0;
        const mid = Math.floor(steps / 2);
        for (let s = 0; s < steps; s++) {
          await page.keyboard.press('ArrowRight');
          await page.waitForTimeout(650);
          if (s === mid - 1) await shot(page, `${deck}-p${String(i).padStart(2, '0')}-pipeline-step${String(mid).padStart(2, '0')}.png`).catch(() => {});
        }
        const stN = await pipelineState(page);
        slideRec.pipelineComplete = stN;
        await shot(page, `${deck}-p${String(i).padStart(2, '0')}-pipeline-complete.png`).catch(() => {});
        // 再按一次应翻页(最后一页则停留)
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(TRANSITION);
        const idxAfter = await page.evaluate(() => window.__qa.idx());
        slideRec.pipelineAdvanceExits = (i + 1 < total) ? (idxAfter === i + 1) : (idxAfter === i);
      }

      // 截图策略
      if (deep) {
        const fname = `${deck}-p${String(i).padStart(2, '0')}${isPipeline ? '-pipeline' : isDirectional ? '-directional' : ''}.png`;
        await shot(page, fname).catch(() => {});
      } else if (geo.overflow.length || geo.footOverlap.length || geo.navOverlap.length || geo.brokenImages.length) {
        await shot(page, `${deck}-v${vp.name}-p${String(i).padStart(2, '0')}-ISSUE.png`).catch(() => {});
      }
      vpRes.slides.push(slideRec);
    }

    // ESC overview(仅首视口)
    if (vp.name === viewports[0].name) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(700);
      vpRes.overviewWorks = await page.evaluate(() => {
        const els = [...document.querySelectorAll('body *')];
        return els.some(el => {
          const cs = getComputedStyle(el);
          if (cs.display === 'none') return false;
          const r = el.getBoundingClientRect();
          return cs.position === 'fixed' && r.width > innerWidth * 0.8 && r.height > innerHeight * 0.6;
        });
      });
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);
    }

    await ctx.close();
    result.viewports[vp.name] = vpRes;
  }
  return result;
}

/* ---------- 动效矩阵(pending 深检;采样与 qaDeck 同源:按键即采样,按页分组) ---------- */
async function animationMatrix(browser, decks) {
  const rows = [];
  for (const d of decks) {
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
    const page = await ctx.newPage();
    const r = { deck: d.deck, hero: '?', cascade: '?', directional: '?', pipeline: '?', lowPower: '?', reducedMotion: '?' };
    const arrive = async (target) => {
      // 按键直到 idx===target;返回到达页的动画采样
      let anim = null;
      for (let g = 0; g < 14; g++) {
        const idx0 = await page.evaluate(() => window.__qa.idx());
        if (idx0 === target) break;
        if (idx0 > target) break;
        await page.keyboard.press('ArrowRight');
        const s = await sampleAnimRange(page, 1600);
        const idx = await page.evaluate(() => window.__qa.idx());
        if (idx === target && s[target]) { anim = s[target]; break; }
        if (idx > target) break;
      }
      return anim;
    };
    try {
      await page.goto(d.url + `?mx=${Date.now()}`, { waitUntil: 'domcontentloaded' });
      await page.addScriptTag({ content: PAGE_HELPERS }).catch(() => {});
      await page.waitForFunction(() => document.body.classList.contains('motion-ready'), null, { timeout: 6000 }).catch(() => {});
      const types = await page.evaluate(() => [...document.querySelectorAll('.slide')].map(s => s.dataset.animate || (s.classList.contains('hero') ? 'hero' : 'cascade')));
      // hero: 第 0 页,立即采样
      const heroAnim = (await sampleAnimRange(page, 2400))[0] || { min: 1, max: 1 };
      r.hero = (heroAnim.min < 0.9 && heroAnim.max >= 0.95) ? 'PASS' : `FAIL(${heroAnim.min},${heroAnim.max})`;
      // cascade: 第一个 cascade 页,到达键的采样
      const ci = types.findIndex(t => t === 'cascade');
      if (ci > 0) {
        const cAnim = await arrive(ci);
        r.cascade = (cAnim && cAnim.min < 0.9 && cAnim.max >= 0.95) ? 'PASS' : `FAIL(${JSON.stringify(cAnim || null).slice(0, 60)})`;
      } else r.cascade = 'N/A';
      // directional: 停在 di-1(若是 pipeline 则推满 step),先启动观察器再按键,在入场窗口内观察 left/divider/right 顺序
      const di = types.findIndex(t => t === 'directional');
      if (di > 0) {
        for (let g = 0; g < 14; g++) { const idx = await page.evaluate(() => window.__qa.idx()); if (idx >= di - 1) break; await page.keyboard.press('ArrowRight'); await page.waitForTimeout(650); }
        const prevIsPipe = await page.evaluate(() => { const s = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0]; return !!s && s.dataset.animate === 'pipeline'; });
        if (prevIsPipe) {
          // 推满 pipeline steps(不翻页):直到该页所有 step 都亮
          for (let g = 0; g < 8; g++) {
            const allLit = await page.evaluate(() => {
              const s = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
              if (!s || s.dataset.animate !== 'pipeline') return true;
              const steps = [...s.querySelectorAll('[data-anim="step"]')];
              return steps.length && steps.every(el => +getComputedStyle(el).opacity > 0.9);
            });
            if (allLit) break;
            await page.keyboard.press('ArrowRight');
            await page.waitForTimeout(500);
          }
        }
        // 翻页有过渡锁(约 1.2-1.7s 内按键被吞):先静置,再"启动观察器→按键→校验到达",失败重试
        await page.waitForTimeout(1600);
        let order = null;
        for (let attempt = 0; attempt < 4 && !order; attempt++) {
          const obsPromise = page.evaluate(async () => {
            const t0 = performance.now(); const seen = { left: null, divider: null, right: null, bareMin: 1, bareMax: 0, bareN: 0 };
            while (performance.now() - t0 < 3400) {
              const slide = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
              if (slide && slide.dataset.animate === 'directional') {
                for (const k of ['left', 'divider', 'right']) {
                  if (seen[k] === null) {
                    const el = slide.querySelector(`[data-anim="${k}"]`);
                    if (el && +getComputedStyle(el).opacity > 0.6) seen[k] = performance.now() - t0;
                  }
                }
                for (const el of slide.querySelectorAll('[data-anim]')) {
                  if (el.dataset.anim) continue; // 只统计 bare
                  const o = +getComputedStyle(el).opacity;
                  seen.bareMin = Math.min(seen.bareMin, o);
                  seen.bareMax = Math.max(seen.bareMax, o);
                  seen.bareN++;
                }
                if (seen.bareN > 0 && Object.values({ left: seen.left, right: seen.right }).every(v => v !== null)) break;
              }
              await new Promise(rr => setTimeout(rr, 50));
            }
            return seen;
          });
          await page.keyboard.press('ArrowRight');
          await page.waitForTimeout(400);
          const idxNow = await page.evaluate(() => window.__qa.idx());
          order = (idxNow === di) ? await obsPromise : await obsPromise.then(() => { page.waitForTimeout(1200); return null; });
          if (order && order.bareN === 0 && order.left === null && order.right === null) order = null; // 未观察到目标页
        }
        // 形态适配:部分 deck 的 directional 页只有 bare data-anim(走 cascade 路径),无 left/right 标记
        const hasMarks = await page.evaluate(() => {
          const s = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
          return !!s && (!!s.querySelector('[data-anim="left"]') || !!s.querySelector('[data-anim="right"]'));
        });
        if (!hasMarks) {
          // bare 形态:按 cascade 验收(入场透明度动画真实运行) — 用 order 观察器采集的 bare min/max
          const bOK = order.bareN > 0 && order.bareMin < 0.9 && order.bareMax >= 0.95;
          r.directional = bOK ? 'PASS(cascade-form)' : `PARTIAL(bare ${order.bareN},${order.bareMin},${order.bareMax})`;
        } else {
          r.directional = (order.left !== null && order.right !== null && order.left <= order.right) ? 'PASS' : `PARTIAL(${JSON.stringify(order)})`;
        }
      } else r.directional = 'N/A';
      // pipeline: 直达页(?slide= 支持 ?→键盘兜底),初始 step 低亮 + 标题/lead 常亮
      const pi = types.findIndex(t => t === 'pipeline');
      if (pi >= 0) {
        await page.goto(`${d.url}?slide=${pi + 1}&px=${Date.now()}`, { waitUntil: 'load' });
        await page.addScriptTag({ content: PAGE_HELPERS }).catch(() => {});
        // ?slide= 参数不被支持时退回键盘导航
        for (let g = 0; g < 14; g++) { const idx = await page.evaluate(() => window.__qa.idx()); if (idx >= pi) break; await page.keyboard.press('ArrowRight'); await page.waitForTimeout(650); }
        await page.waitForTimeout(2500);
        const st = await pipelineState(page);
        if (st) {
          const stepsDim = st.steps.every(o => o < 0.4);
          // kicker/lead 可能有设计级降透明(0.6/0.82),dim-all bug 的特征是 0.15,阈值取 0.4
          const headBright = (st.kicker === null || st.kicker > 0.4) && (st.title === null || st.title > 0.4) && (st.lead === null || st.lead > 0.4);
          const otherBright = st.otherAnim.every(o => o > 0.4);
          r.pipeline = (stepsDim && headBright && otherBright) ? 'PASS' : `FAIL(steps=${st.steps.map(o => o.toFixed(2)).join(',')} head=${headBright} other=${otherBright})`;
        } else r.pipeline = 'FAIL(no state)';
      } else r.pipeline = 'N/A';
      // low-power: B 开启→刷新保持→另一 deck 不继承
      await page.keyboard.press('b');
      await page.waitForTimeout(400);
      const lpOn = await page.evaluate(() => document.body.classList.contains('low-power'));
      await page.reload({ waitUntil: 'load' });
      await page.waitForTimeout(1200);
      const lpPersist = await page.evaluate(() => document.body.classList.contains('low-power'));
      const page2 = await ctx.newPage();
      await page2.goto(PENDING_DECKS.find(x => x.deck !== d.deck).url + `?lp=${Date.now()}`, { waitUntil: 'load' });
      await page2.waitForTimeout(1200);
      const lpCross = await page2.evaluate(() => document.body.classList.contains('low-power'));
      await page2.close();
      r.lowPower = (lpOn && lpPersist && !lpCross) ? 'PASS' : `FAIL(on=${lpOn},persist=${lpPersist},cross=${lpCross})`;
      // reduced-motion
      const ctx2 = await browser.newContext({ viewport: { width: 1600, height: 900 }, reducedMotion: 'reduce' });
      const p3 = await ctx2.newPage();
      await p3.goto(d.url + `?rm=${Date.now()}`, { waitUntil: 'load' });
      await p3.waitForTimeout(1200);
      r.reducedMotion = await p3.evaluate(() => {
        const slide = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0];
        const els = [...slide.querySelectorAll('[data-anim]')];
        const allVisible = els.every(el => +getComputedStyle(el).opacity > 0.9);
        return allVisible ? 'PASS' : `FAIL(${els.filter(el => +getComputedStyle(el).opacity <= 0.9).length} hidden)`;
      });
      await ctx2.close();
    } catch (e) { r.error = String(e).slice(0, 160); }
    await ctx.close();
    rows.push(r);
    log('matrix', d.deck, JSON.stringify(r));
  }
  return rows;
}

/* ---------- standalone 模式 ---------- */
async function standaloneAudit(browser, base) {
  const mf = opt('manifest', '');
  const files = mf.endsWith('.json') ? JSON.parse(fs.readFileSync(mf, 'utf-8'))
    : fs.readFileSync(mf, 'utf-8').split('\n').map(s => s.trim()).filter(Boolean);
  const rows = [];
  for (const f of files) {
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
    const page = await ctx.newPage();
    const failed = [], errors = [], pageErrors = [];
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text().slice(0, 160)); });
    page.on('pageerror', e => pageErrors.push(String(e).slice(0, 160)));
    page.on('response', r => { if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
    page.on('requestfailed', r => { if (!r.url().startsWith('data:')) failed.push(`REQFAIL ${r.url()}`); });
    // 屏蔽外网 CDN,验证"CDN 不可用时静态可读"
    await page.route('**/*', route => {
      const u = route.request().url();
      if (u.startsWith(base)) return route.continue();
      route.abort();
    });
    let contentVisible = false;
    try {
      await page.goto(`${base}/${f}`, { waitUntil: 'load', timeout: 20000 });
      await page.waitForTimeout(3400);
      contentVisible = await page.evaluate(() => {
        const slide = document.querySelectorAll('.slide')[window.__currentSlideIndex || 0] || document.body;
        const txt = slide.textContent.trim().length > 100;
        const els = [...slide.querySelectorAll('[data-anim]')];
        const visible = els.length === 0 || els.every(el => +getComputedStyle(el).opacity > 0.9 || el.style.opacity === '1');
        return txt && visible;
      });
    } catch (e) { pageErrors.push('NAV ' + String(e).slice(0, 120)); }
    const local404 = failed.filter(x => !x.includes('cdn') && !x.includes('unpkg') && !x.includes('jsdelivr') && !x.includes('fonts') && !x.includes('googleapis') && !x.includes('gstatic'));
    rows.push({ file: f, contentVisible, localDepsMissing: local404, cdnBlocked: failed.length > local404.length, errors, pageErrors });
    await ctx.close();
    log('standalone', f, contentVisible ? 'OK' : 'FAIL', local404.length ? `local404=${local404.length}` : '');
  }
  return rows;
}

/* ---------- low-power 跨 deck 污染专测 ---------- */
async function lowPowerCross(browser, base) {
  const a = PENDING_DECKS[0], b = PENDING_DECKS[1];
  const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 } });
  const p1 = await ctx.newPage();
  await p1.goto(a.url + `?x=${Date.now()}`, { waitUntil: 'load' });
  await p1.waitForTimeout(1200);
  await p1.keyboard.press('b');
  await p1.waitForTimeout(400);
  const onA = await p1.evaluate(() => document.body.classList.contains('low-power'));
  const keys = await p1.evaluate(() => Object.keys(localStorage));
  const p2 = await ctx.newPage();
  await p2.goto(b.url + `?x=${Date.now()}`, { waitUntil: 'load' });
  await p2.waitForTimeout(1200);
  const onB = await p2.evaluate(() => document.body.classList.contains('low-power'));
  await ctx.close();
  return { deckA_on: onA, deckB_inherits: onB, localStorageKeys: keys, contaminated: onA && onB };
}

/* ---------- main ---------- */
const browser = await chromium.launch({ executablePath: CHROME, headless: true });

if (MODE === 'pending' || MODE === 'approved') {
  let decks = MODE === 'pending' ? PENDING_DECKS
    : fs.readFileSync(opt('manifest', ''), 'utf-8').split('\n').map(s => s.trim()).filter(Boolean)
        .map(f => ({ deck: path.basename(f, '.html'), url: `${BASE}/${f}` }));
  if (ONLY) decks = decks.filter(d => d.deck.includes(ONLY));
  const results = [];
  const queue = [...decks];
  async function worker() {
    while (queue.length) {
      const d = queue.shift();
      log('start', d.deck);
      try { results.push(await qaDeck(browser, d.deck, d.url, MODE)); }
      catch (e) { results.push({ deck: d.deck, fatal: String(e).slice(0, 300) }); }
      log('done', d.deck);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  fs.writeFileSync(path.join(OUT, `${MODE}-results.json`), JSON.stringify(results, null, 1));
  // Markdown 摘要
  const md = ['# Browser QA — ' + MODE, ''];
  for (const r of results) {
    md.push(`## ${r.deck}`);
    if (r.fatal) { md.push(`- FATAL: ${r.fatal}`); continue; }
    for (const [vn, vp] of Object.entries(r.viewports || {})) {
      const bad = vp.slides.filter(s => s.overflow.length || s.footOverlap.length || s.navOverlap.length || s.brokenImages.length);
      md.push(`- ${vn}: slides=${vp.slides.length} console=${vp.console.length} pageErrors=${vp.pageErrors.length} failed=${vp.failed.length} badSlides=${bad.length} motionReady=${vp.motionReady} overview=${vp.overviewWorks}`);
      for (const s of bad) md.push(`  - p${s.page + 1}: overflow=${s.overflow.length} footOv=${s.footOverlap.length} navOv=${s.navOverlap.length} brokenImg=${s.brokenImages.length} ${JSON.stringify(s.overflow).slice(0, 200)}`);
      if (vp.console.length) md.push(`  - console: ${vp.console.slice(0, 3).join(' | ')}`);
      if (vp.pageErrors.length) md.push(`  - pageErrors: ${vp.pageErrors.slice(0, 3).join(' | ')}`);
      if (vp.failed.length) md.push(`  - failed: ${[...new Set(vp.failed)].slice(0, 5).join(' | ')}`);
    }
    md.push('');
  }
  fs.writeFileSync(path.join(OUT, `${MODE}-summary.md`), md.join('\n'));
  log('written', path.join(OUT, `${MODE}-results.json`));
}

if (MODE === 'matrix') {
  const rows = await animationMatrix(browser, PENDING_DECKS);
  fs.writeFileSync(path.join(OUT, 'animation-matrix.json'), JSON.stringify(rows, null, 1));
  log('matrix done');
}

if (MODE === 'standalone') {
  const rows = await standaloneAudit(browser, BASE);
  fs.writeFileSync(path.join(OUT, 'standalone-results.json'), JSON.stringify(rows, null, 1));
  log('standalone done');
}

if (MODE === 'lowpower-cross') {
  const r = await lowPowerCross(browser, BASE);
  fs.writeFileSync(path.join(OUT, 'lowpower-cross.json'), JSON.stringify(r, null, 1));
  log('lowpower-cross', JSON.stringify(r));
}

await browser.close();
