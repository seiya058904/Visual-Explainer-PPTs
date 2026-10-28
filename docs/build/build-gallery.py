"""Build an allowlisted static gallery. Never publish the repository root."""
import argparse
import html
import json
import pathlib
import shutil

ROOT = pathlib.Path(__file__).resolve().parents[2]
esc = lambda s: html.escape(str(s), quote=True)

def catalog_entries():
    data = json.loads((ROOT / 'site/catalog.json').read_text(encoding='utf-8'))
    return data if isinstance(data, list) else data['entries']

def validate(entries):
    ids = set()
    approved = []
    for e in entries:
        if e['id'] in ids: raise ValueError('Duplicate ID: '+e['id'])
        ids.add(e['id'])
        if e['status'] not in ('approved','pending'): raise ValueError('Unknown status')
        if e['status'] != 'approved': continue
        for field in ('artifact','cover'):
            p = (ROOT / e[field]).resolve()
            if not p.is_relative_to(ROOT) or not p.is_file(): raise ValueError(f'Missing/unsafe {field}: {e[field]}')
        if pathlib.PurePosixPath(e['artifact']).parent.as_posix() != 'ppt-collection': raise ValueError('Approved outside collection')
        approved.append(e)
    actual = {p.relative_to(ROOT).as_posix() for p in (ROOT/'ppt-collection').glob('*.html')}
    if actual != {e['artifact'] for e in approved}: raise ValueError('Catalog does not exactly cover collection')
    return approved

def image(e, eager=False):
    return f'<img src="{esc(e["cover"])}" width="960" height="540" alt="{esc(e["titleZh"])} presentation cover" '+('fetchpriority="high"' if eager else 'loading="lazy"')+' decoding="async">'

def build(out):
    entries = catalog_entries(); approved = validate(entries)
    featured = sorted((e for e in approved if e.get('featuredRank') is not None),key=lambda e:e['featuredRank'])[:6]
    if len(featured)!=6: raise ValueError('Exactly six featured selections required')
    hero=featured[0]
    categories=sorted({c for e in approved for c in e['categories']})
    features=''.join(f'<article class="feature"><a href="{esc(e["artifact"])}">{image(e)}<h3 lang="zh-CN">{esc(e["titleZh"])}</h3><p>{esc(e["titleEn"])}</p><span class="subject">{esc(e["categories"][0])}</span></a></article>' for e in featured)
    cards=''.join(f'<article class="entry" data-entry="{esc(e["id"])}"><a href="{esc(e["artifact"])}">{image(e)}<div><h3 lang="zh-CN">{esc(e["titleZh"])}</h3><p class="en">{esc(e["titleEn"])}</p><p class="summary" lang="zh-CN">{esc(e["summaryZh"])}</p><div class="meta">{esc(e["categories"][0])} / {e["slideCount"]} slides</div></div></a></article>' for e in approved)
    public_data=[{k:e[k] for k in ('id','status','titleZh','titleEn','summaryZh','categories','keywords')} for e in approved]
    data=json.dumps(public_data,ensure_ascii=False).replace('<','\\u003c')
    page=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Visual Explainer Library: Everyday questions, visual answers</title><meta name="description" content="Explore {len(approved)} interactive Chinese presentations about science, technology, and everyday life."><link rel="icon" href="data:,"><link rel="stylesheet" href="site/gallery.css"><script src="site/vendor/gsap.min.js" defer></script><script type="module" src="site/gallery.mjs"></script></head><body id="top"><a class="skip" href="#library">Skip to the library</a><div class="wrap"><header class="masthead"><a class="brand" href="./">Visual Explainer<span>A library of ideas, made visible.</span></a><nav aria-label="Main"><a href="#selected">Selected</a><a href="#library">Library</a><a href="#about">About</a></nav></header><main>
    <section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><h1 id="hero-title">Look closer.<br>Understand more.</h1><p>Everyday questions, explored through carefully crafted interactive presentations.</p><a class="button" href="#library">Browse the library</a><span class="hero-count">{len(approved)} visual explainers / Read in Chinese</span></div><figure class="hero-art"><a href="{esc(hero['artifact'])}" aria-label="Open {esc(hero['titleEn'])}">{image(hero,True)}</a><figcaption><strong lang="zh-CN">{esc(hero['titleZh'])}</strong><span>Inside the collection</span></figcaption></figure></section>
    <section id="selected" class="selected" aria-labelledby="selected-title"><div class="section-head"><h2 id="selected-title">A few places to begin</h2><p>Six perspectives on the world around us.</p></div><div class="selected-grid">{features}</div></section>
    <section id="library" class="library" aria-labelledby="library-title"><div class="section-head"><h2 id="library-title">The complete library</h2><p>Follow a question. Find a new connection.</p></div><div class="filters"><div class="field"><label for="search">Search in English or Chinese</label><input id="search" type="search" placeholder="Try batteries, 降噪, or everyday life" autocomplete="off"></div><div class="field"><label for="category">Subject</label><select id="category"><option value="">All subjects</option>{''.join(f'<option>{esc(c)}</option>' for c in categories)}</select></div><button class="clear" data-clear>Clear filters</button></div><div class="results-line"><span id="result-count" role="status" aria-live="polite">{len(approved)} explainers</span><span>Open any cover to read</span></div><div id="empty" class="empty" hidden><h3>No matching explainers</h3><p>Try a broader subject or another keyword.</p><button class="clear" data-clear>Clear filters</button></div><div class="index-grid">{cards}</div></section>
    <section id="about" class="about" aria-labelledby="about-title"><h2 id="about-title">An idea deserves<br>room to unfold.</h2><div><p>These are presentations you can move through, not a stack of static images. Each one follows a question through evidence, diagrams and a visual narrative.</p><p>Open a work and use the arrow keys to explore. Available controls vary by presentation; some include step-by-step diagrams and presenter tools.</p><a href="https://github.com/seiya058904/Visual-Explainer-PPTs">Explore the source repository</a></div></section></main><footer class="footer"><span>Visual Explainer Library<br>Chinese stories. Shared curiosity.</span><a href="#top">Back to top</a></footer></div><script type="application/json" id="catalog-data">{data}</script></body></html>'''
    # Fail before writing when a required build dependency is missing.
    for dependency in ['node_modules/gsap/dist/gsap.min.js', 'node_modules/gsap/README.md'] + [f'node_modules/@fontsource/{font}/{suffix}' for font in ('newsreader','dm-sans') for suffix in ('LICENSE',f'files/{font}-latin-400-normal.woff2')]:
        if not (ROOT/dependency).is_file(): raise ValueError('Missing dependency: '+dependency)
    allowed={'index.html','404.html','.nojekyll','site/gallery.css','site/gallery.mjs','site/filter.mjs','site/vendor/gsap.min.js','site/vendor/GSAP-README.md'}
    allowed.update(f'site/fonts/{font}{suffix}' for font in ('newsreader','dm-sans') for suffix in ('-latin-400-normal.woff2','-LICENSE.txt'))
    allowed.update(e[key] for e in approved for key in ('artifact','cover'))
    existing={p.relative_to(out).as_posix() for p in out.rglob('*') if p.is_file()} if out.exists() else set()
    if existing-allowed: raise ValueError('Stale/unexpected output files; use a fresh directory: '+str(sorted(existing-allowed)))
    out.mkdir(parents=True,exist_ok=True)
    (out/'index.html').write_text(page,encoding='utf-8')
    for name in ('gallery.css','gallery.mjs','filter.mjs'):
        (out/'site').mkdir(exist_ok=True);shutil.copy2(ROOT/'site'/name,out/'site'/name)
    (out/'site/vendor').mkdir(parents=True,exist_ok=True)
    shutil.copy2(ROOT/'node_modules/gsap/dist/gsap.min.js',out/'site/vendor/gsap.min.js')
    shutil.copy2(ROOT/'node_modules/gsap/README.md',out/'site/vendor/GSAP-README.md')
    (out/'site/fonts').mkdir(parents=True,exist_ok=True)
    for font in ('newsreader','dm-sans'):
        package=ROOT/'node_modules/@fontsource'/font
        shutil.copy2(package/'files'/f'{font}-latin-400-normal.woff2',out/'site/fonts')
        shutil.copy2(package/'LICENSE',out/'site/fonts'/f'{font}-LICENSE.txt')
    for e in approved:
        for key in ('artifact','cover'):
            dest=out/e[key];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(ROOT/e[key],dest)
    (out/'404.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found</title><body><main><h1>This page is not in the library.</h1><p>The address may have changed.</p><a href="/Visual-Explainer-PPTs/">Return to the library</a></main></body></html>',encoding='utf-8')
    (out/'.nojekyll').write_text('')
    print(f'Built {len(approved)} approved entries into {out}')


def sync_readme():
    entries=[e for e in catalog_entries() if e['status']=='approved']
    p=ROOT/'README.md';text=p.read_text(encoding='utf-8')
    start=text.index('<!-- catalog:start -->');end=text.index('<!-- catalog:end -->',start)
    block='<!-- catalog:start -->\n'+'\n'.join(f'- [{e["titleEn"]}]({e["artifact"]}) — {e["titleZh"]}' for e in entries)+'\n'
    p.write_text(text[:start]+block+text[end:],encoding='utf-8')

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--out',type=pathlib.Path,default=ROOT/'dist');parser.add_argument('--sync-readme',action='store_true');args=parser.parse_args()
    if args.sync_readme: sync_readme()
    else: build(args.out.resolve())
