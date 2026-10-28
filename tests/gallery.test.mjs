import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {matches, normalize} from '../site/filter.mjs';
const catalog=JSON.parse(fs.readFileSync(new URL('../site/catalog.json',import.meta.url),'utf8'));
test('catalog accounts for every approved file, with no pending public artifacts',()=>{
 const approved=catalog.filter(e=>e.status==='approved');
 assert.equal(approved.length,38);assert.equal(catalog.filter(e=>e.status==='pending').length,10);
 assert.equal(new Set(catalog.map(e=>e.id)).size,48);
 assert.deepEqual(approved.map(e=>e.artifact.split('/').pop()).sort(),fs.readdirSync('ppt-collection').filter(f=>f.endsWith('.html')).sort());
 for(const e of catalog){assert.ok(e.titleZh&&e.titleEn&&e.summaryZh);assert.ok(e.categories.length);assert.ok(fs.existsSync(e.previewPath));if(e.status==='pending')assert.equal(e.artifact,null);}
 assert.equal(approved.filter(e=>e.featuredRank!==null).length,6);
});
test('search matches Chinese, English, keywords, category and combined tokens',()=>{
 const e={status:'approved',titleZh:'电池的秘密',titleEn:'Lithium Batteries',summaryZh:'储存电能',categories:['Technology'],keywords:['battery']};
 for(const q of ['电池','LITHIUM','battery','储存','Lithium Batteries','Technology'])assert.ok(matches(e,q));
 assert.ok(!matches(e,'missing'));assert.ok(!matches(e,'','Arts'));assert.ok(matches(e,'电池','Technology'));
 assert.ok(!matches({...e,status:'pending'},''));assert.equal(normalize(' ＡＩ '),'ai');
});
