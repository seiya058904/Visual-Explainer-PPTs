# -*- coding: utf-8 -*-
"""批级静态自检：字段、data-anim 数量、节奏、图片引用一致性。用法: python check.py <deck_dir> ..."""
import re, glob, sys, os

if len(sys.argv) < 2:
    sys.exit("Usage: python check.py <deck_dir> ...")
failed = False
for d in sys.argv[1:]:
    src = open(os.path.join(d, "index.html"), encoding="utf-8").read()
    ids = re.findall(r'data-slide-id="([^"]+)"', src)
    classes = re.findall(r'<section class="slide ([^"]+)"', src)
    themes = ['dark' if 'dark' in c.split() else 'light' if 'light' in c.split() else c for c in classes]
    runs, bad = 1, False
    for a, b in zip(themes, themes[1:]):
        runs = runs + 1 if a == b else 1
        if runs >= 3: bad = True
    imgs = set(re.findall(r'images/([^"\']+\.svg)', src))
    files = {os.path.basename(p) for p in glob.glob(os.path.join(d, "images", "*.svg"))}
    anim = src.count("data-anim")
    need = len(ids) * 3
    ok_anim = anim >= need
    print(f"{os.path.basename(d)}: pages={len(ids)} anim={anim}(need>={need},{'OK' if ok_anim else 'LOW'}) "
          f"no3run={not bad} heroD={classes.count('hero dark')} heroL={classes.count('hero light')} "
          f"imgs={len(imgs)} unused={sorted(files-imgs)} missing={sorted(imgs-files)}")

    failed |= bad or not ok_anim or bool(imgs-files) or len(ids)!=len(set(ids)) or not ids
sys.exit(1 if failed else 0)
