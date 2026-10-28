import {chromium} from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const input=process.env.PRESENTER_CATALOG || 'site/catalog.json';
const entries=JSON.parse(fs.readFileSync(input,'utf8')).filter(e=>e.status===(process.env.PRESENTER_STATUS || 'pending'));
const out=process.env.PRESENTER_QA_OUT || '.codex/presenter-qa';fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{})});
const rows=[];
for(const e of entries){
 const ctx=await browser.newContext({viewport:{width:1280,height:720},hasTouch:true});const page=await ctx.newPage();
 const row={id:e.id,checks:[],errors:[]};page.on('pageerror',err=>row.errors.push(String(err)));
 try{
  await page.goto(`http://127.0.0.1:8901/${e.previewPath}?mode=presenter`);await page.evaluate(()=>document.fonts.ready);
  if (!await page.evaluate(()=>!!window.__pptPresenter)) { row.passed=null; row.notApplicable='This runtime does not offer presenter mode'; rows.push(row); await ctx.close(); continue; }
  await page.locator('#ppt-note-editor').waitFor();
  const idx=()=>page.evaluate(()=>window.__currentSlideIndex);
  await page.locator('#ppt-note-editor').hover();await page.mouse.wheel(0,500);await page.waitForTimeout(1800);assert.equal(await idx(),0);
  await page.locator('#ppt-note-editor').focus();await page.keyboard.press('ArrowRight');assert.equal(await idx(),0);row.checks.push('notes wheel and keyboard isolation');
  await page.locator('#ppt-note-editor').fill('QA local note');await page.waitForTimeout(500);
  await page.locator('#ppt-next').click();assert.equal(await idx(),1);await page.locator('#ppt-prev').click();assert.equal(await page.locator('#ppt-note-editor').inputValue(),'QA local note');row.checks.push('notes remain attached to slide');
  const popup=page.waitForEvent('popup');await page.locator('#ppt-reopen').click();let audience=await popup;await audience.waitForLoadState();
  await page.waitForFunction(()=>window.__pptPresenter.debugState().syncState==='synced',{},{timeout:15000});
  await page.locator('#ppt-next').click();await audience.waitForFunction(()=>window.__currentSlideIndex===1);row.checks.push('audience page synchronization');
  await audience.close();await page.waitForTimeout(1500);
  const reconnect=page.waitForEvent('popup');await page.locator('#ppt-reopen').click();audience=await reconnect;await audience.waitForLoadState();await audience.waitForFunction(()=>window.__currentSlideIndex===1);row.checks.push('audience reconnect at current page');
  await page.locator('[data-ppt-tool=laser]').click();assert.equal(await page.evaluate(()=>window.__pptPresenter.debugState().annotationTool),'laser');
  await page.locator('[data-ppt-tool=circle]').click();assert.equal(await page.evaluate(()=>window.__pptPresenter.debugState().annotationTool),'circle');
  const ink=await page.locator('#ppt-presenter-ink').boundingBox();
  await page.mouse.move(ink.x+ink.width*.25,ink.y+ink.height*.3);await page.mouse.down();
  await page.mouse.move(ink.x+ink.width*.6,ink.y+ink.height*.65,{steps:8});await page.mouse.up();
  assert.equal(await page.evaluate(()=>window.__pptPresenter.debugState().circles.length),1);
  await audience.waitForFunction(()=>window.__pptPresenter.debugState().audienceCircles.length===1);
  await page.locator('#ppt-ink-clear').click();assert.equal(await page.evaluate(()=>window.__pptPresenter.debugState().circles.length),0);
  await audience.waitForFunction(()=>window.__pptPresenter.debugState().audienceCircles.length===0);
  await page.keyboard.press('Escape');
  await page.keyboard.press('b');await page.waitForTimeout(300);assert.equal(await page.evaluate(()=>window.__pptPresenter.debugState().screenMode),'black');
  await audience.waitForFunction(()=>getComputedStyle(document.querySelector('#ppt-audience-cover')).backgroundColor==='rgb(0, 0, 0)');
  await page.keyboard.press('b');
  await page.keyboard.press('w');await audience.waitForFunction(()=>getComputedStyle(document.querySelector('#ppt-audience-cover')).backgroundColor==='rgb(255, 255, 255)');await page.keyboard.press('w');
  await page.keyboard.press('f');await page.locator('#ppt-next').click();assert.equal(await idx(),2);
  await page.waitForTimeout(600);assert.equal(await audience.evaluate(()=>window.__currentSlideIndex),1);
  await page.keyboard.press('f');await audience.waitForFunction(()=>window.__currentSlideIndex===2);
  row.checks.push('draw/clear circles synchronized; black, white and frozen audience states');
  await page.locator('#ppt-timer-toggle').click();await page.waitForFunction(()=>document.querySelector('#ppt-clock').textContent!=='00:00',null,{timeout:8000});await page.locator('#ppt-timer-toggle').click();row.checks.push('timer start and pause');
  await page.locator('#ppt-grid').click();assert.ok(await page.locator('#ppt-presenter-overview').isVisible());await page.locator('.ppt-overview-page').first().click();assert.equal(await idx(),0);await audience.waitForFunction(()=>window.__currentSlideIndex===0);
  await page.waitForFunction(()=>document.querySelector('#ppt-current-frame').contentWindow.__currentSlideIndex===0 && document.querySelector('#ppt-next-frame').contentWindow.__currentSlideIndex===1);
  for(const id of ['ppt-current-frame','ppt-next-frame']){const box=await page.locator('#'+id).boundingBox();assert.ok(Math.abs(box.width/box.height-16/9)<.03);}
  await page.screenshot({path:`${out}/${e.id}.png`});row.checks.push('overview and 16:9 previews');
  await page.locator('#ppt-exit').click();assert.equal(await page.evaluate(()=>document.body.classList.contains('ppt-presenter')),false);
  await page.keyboard.press('Home');await page.waitForTimeout(1800);await page.mouse.move(500,350);await page.mouse.wheel(0,300);await page.waitForTimeout(1800);assert.equal(await idx(),1);row.checks.push('deck wheel still advances');
  await page.evaluate(()=>{const a=new Touch({identifier:1,target:document.body,clientX:800,clientY:300});document.body.dispatchEvent(new TouchEvent('touchstart',{touches:[a],bubbles:true}));const b=new Touch({identifier:1,target:document.body,clientX:500,clientY:300});document.body.dispatchEvent(new TouchEvent('touchend',{changedTouches:[b],bubbles:true}));});
  await page.waitForTimeout(1800);assert.equal(await idx(),2);row.checks.push('synthetic touch swipe advances');
  assert.deepEqual(row.errors,[]);row.passed=true;
 }catch(err){row.passed=false;row.failure=String(err);process.exitCode=1;}
 rows.push(row);fs.writeFileSync(`${out}/results.json`,JSON.stringify(rows,null,2));console.log(e.id,row.passed? 'PASS':row.failure);await ctx.close();
}
fs.writeFileSync(`${out}/results.json`,JSON.stringify(rows,null,2));
await browser.close();
