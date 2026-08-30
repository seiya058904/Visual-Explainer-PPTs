# -*- coding: utf-8 -*-
"""压缩 directional 页垂直间距，消除 meta-row 被裁切。作用于 docs/build/deck-*-slides.html"""
import re, glob, pathlib

PATTERNS = [
    # frame padding-top 4vh → 2vh（仅 directional 页使用该写法）
    ('style="padding-top:4vh"', 'style="padding-top:2vh"'),
    # lead 下边距
    ('style="margin-bottom:4vh; max-width:70vw"', 'style="margin-bottom:2vh; max-width:70vw"'),
    # 底部 meta-row 上边距
    ('style="margin-top:4vh" data-anim>', 'style="margin-top:2vh" data-anim>'),
]

for f in sorted(glob.glob("docs/build/deck-*-slides.html")):
    src = pathlib.Path(f).read_text(encoding="utf-8")
    n = 0
    for old, new in PATTERNS:
        n += src.count(old)
        src = src.replace(old, new)
    pathlib.Path(f).write_text(src, encoding="utf-8")
    print(f"{f}: {n} replacements")
