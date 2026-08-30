# -*- coding: utf-8 -*-
"""第二轮验收修复：沉底列加底部安全区 + directional 再收一档；并重建全部 10 套。"""
import glob, pathlib, subprocess, sys

DECKS = [
    ("air-conditioning-moving-heat", "deck-01", "空调：冷是一种被搬运的状态 · Air Conditioning", "indigo-porcelain"),
    ("soap-translating-oil", "deck-02", "肥皂：把油污拆成能冲走的碎片 · Soap", "dune"),
    ("glass-transparent-solid", "deck-03", "玻璃：一场能量的错身而过 · Glass", "indigo-porcelain"),
    ("caffeine-blocking-sleepiness", "deck-04", "咖啡因：它没有给你任何能量 · Caffeine", "ink-default"),
    ("zipper-line-of-teeth", "deck-05", "拉链：一行可以开合的牙齿 · Zipper", "kraft"),
    ("container-the-box", "deck-06", "集装箱：改变世界的不是船 · The Box", "indigo-porcelain"),
    ("fingerprints-not-for-grip", "deck-07", "指纹：皮肤上最著名的误解 · Fingerprints", "kraft"),
    ("tap-water-clean-process", "deck-08", "自来水：拧开龙头后的百年工程 · Tap Water", "forest-ink"),
    ("traffic-light-yellow-physics", "deck-09", "红绿灯：三秒钟的物理题 · Traffic Light", "indigo-porcelain"),
    ("bridges-always-moving", "deck-10", "桥梁：它从来不是静止的 · Bridges", "ink-default"),
]

if "--patch" in sys.argv:
    for f in sorted(glob.glob("docs/build/deck-*-slides.html")):
        p = pathlib.Path(f)
        src = p.read_text(encoding="utf-8")
        n1 = src.count('gap:3vh; align-self:stretch"')
        n2 = src.count('style="margin-top:1.6vh" data-anim>')
        n3 = src.count('style="margin-bottom:1.6vh; max-width:70vw"')
        src = src.replace('gap:3vh; align-self:stretch"', 'gap:3vh; align-self:stretch; padding-bottom:4.5vh"')
        src = src.replace('style="margin-top:1.6vh" data-anim>', 'style="margin-top:1vh" data-anim>')
        src = src.replace('style="margin-bottom:1.6vh; max-width:70vw"', 'style="margin-bottom:1.2vh; max-width:70vw"')
        p.write_text(src, encoding="utf-8")
        print(f"{pathlib.Path(f).name}: stretch+pad={n1} meta={n2} lead={n3}")

for slug, prefix, title, theme in DECKS:
    cmd = [sys.executable, "docs/build/inject.py", f"2026-08-30-{slug}",
           f"docs/build/{prefix}-slides.html", title, theme, f"docs/build/{prefix}-notes.json"]
    print(subprocess.run(cmd, capture_output=True, text=True).stdout.strip())
