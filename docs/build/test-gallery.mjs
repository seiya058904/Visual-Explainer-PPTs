import {chromium} from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const url=process.env.GALLERY_URL || 'http://127.0.0.1:8902/Visual-Explainer-PPTs/';
const out=process.env.GALLERY_QA_OUT || '.codex/gallery-qa';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{})});
const result={url,viewports:[],links:0};
try {
 for(const [width,height] of [[1600,900],[1280,720],[1000,560],[768,1024],[390,844]]) {
  const page=await browser.newPage({viewport:{width,height}});const errors=[];const decks=[];
  page.on('pageerror',e=>errors.push(String(e)));page.on('request',r=>{if(r.url().includes('/ppt-collection/'))decks.push(r.url());});
  await page.goto(url);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1000);
  assert.match(await page.title(),/Visual Explainer/);assert.equal(await page.locator('.entry').count(),38);
  assert.equal(decks.length,0,'gallery must not fetch deck HTML');
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
  assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&!i.naturalWidth).length),0);
  await page.screenshot({path:`${out}/${width}x${height}-home.png`,fullPage:false});
  await page.locator('#search').fill('lithium');await page.locator('#library').scrollIntoViewIfNeeded();
  assert.ok(await page.locator('.entry:visible').count()>=1);
  await page.screenshot({path:`${out}/${width}x${height}-search.png`});
  await page.reload();assert.equal(await page.locator('#search').inputValue(),'lithium');
  await page.locator('#search').fill('zzznomatch');assert.ok(await page.locator('#empty').isVisible());assert.equal(await page.locator('.entry:visible').count(),0);
  await page.locator('#empty [data-clear]').click();assert.equal(await page.locator('.entry:visible').count(),38);
  const categories=await page.locator('#category option').allTextContents();
  for(const c of categories.slice(1)){await page.selectOption('#category',{label:c});assert.ok(await page.locator('.entry:visible').count()>0);}
  await page.selectOption('#category','');
  await page.locator('#search').fill('lithium');const href=await page.locator('.entry:visible a').first().getAttribute('href');
  await page.locator('.entry:visible a').first().click();assert.ok(page.url().includes(href));await page.goBack();
  assert.equal(await page.locator('#search').inputValue(),'lithium');
  assert.deepEqual(errors,[]);result.viewports.push({width,height,passed:true});await page.close();
 }
 const page=await browser.newPage();await page.goto(url);
 const links=await page.locator('.entry a').evaluateAll(as=>as.map(a=>a.href));
 for(const link of links){const r=await page.request.get(link);assert.equal(r.status(),200,link);result.links++;}
 const ctx=await browser.newContext({javaScriptEnabled:false});const noscript=await ctx.newPage();await noscript.goto(url);assert.equal(await noscript.locator('.entry').count(),38);await ctx.close();
 const reduce=await browser.newPage({reducedMotion:'reduce'});await reduce.goto(url);assert.equal(await reduce.locator('h1').evaluate(e=>getComputedStyle(e).opacity),'1');await reduce.close();
 const publicText=await page.content();assert.ok(!publicText.includes('2026-08-30-'));await page.close();
 const errorPage=await browser.newPage();await errorPage.goto(new URL('404.html',url).href);
 assert.match(await errorPage.locator('h1').textContent(),/not in the library/);
 const missing=await errorPage.request.get(new URL('not-a-real-deck.html',url).href);assert.equal(missing.status(),404);
 await errorPage.getByRole('link',{name:'Return to the library'}).click();assert.equal(await errorPage.locator('.entry').count(),38);await errorPage.close();
 result.notFoundRecovery=true;
 result.passed=true;
}catch(error){result.passed=false;result.error=String(error);process.exitCode=1;}finally{fs.writeFileSync(`${out}/results.json`,JSON.stringify(result,null,2));await browser.close();console.log(JSON.stringify(result));}
