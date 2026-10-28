import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { chromium } from 'playwright';
const base = process.env.GALLERY_BASE || 'http://127.0.0.1:8901';
const catalog = JSON.parse(fs.readFileSync('site/catalog.json','utf8'));
const entries = Array.isArray(catalog) ? catalog : catalog.entries;
fs.mkdirSync('site/covers',{recursive:true});
fs.mkdirSync('.codex/gallery-captures',{recursive:true});
const manifestPath = 'site/covers/manifest.json';
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath,'utf8')) : {};
const browser = await chromium.launch({headless:true, ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? {executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}: {})});
try {
 for(const e of entries.filter(e=>e.status==='approved')) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(e.artifact)).digest('hex');
  if(manifest[e.id]?.sha256===hash && fs.existsSync(e.cover)) continue;
  const page=await browser.newPage({viewport:{width:1600,height:900},deviceScaleFactor:1});
  const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(`${base}/${e.artifact}`,{waitUntil:'load',timeout:60000});
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(3000);
  const slide=page.locator('.slide').first();
  if(!await slide.count()) throw new Error(`${e.id}: no slide`);
  const png=path.resolve(`.codex/gallery-captures/${e.id}.png`);
  await page.screenshot({path:png});
  const result=spawnSync('python',['-c','from PIL import Image; import sys; im=Image.open(sys.argv[1]); im.resize((960,540),Image.Resampling.LANCZOS).save(sys.argv[2],"WEBP",quality=85,method=6)',png,e.cover],{encoding:'utf8'});
  if(result.status) throw new Error(result.stderr);
  manifest[e.id]={source:e.artifact,sha256:hash,page:1,viewport:'1600x900',output:'960x540',pageErrors:errors};
  fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
  console.log(`Captured ${e.id}${errors.length?' WITH PAGE ERRORS':''}`);
  await page.close();
 }
} finally { await browser.close(); }
