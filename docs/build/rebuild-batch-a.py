# -*- coding: utf-8 -*-
"""重新注入全部已制作的 deck（片段与 notes 均在 docs/build/）。"""
import subprocess, sys

DECKS = [
    ("2026-08-30-air-conditioning-moving-heat", "deck-01", "空调：冷是一种被搬运的状态 · Air Conditioning", "indigo-porcelain"),
    ("2026-08-30-glass-transparent-solid", "deck-03", "玻璃：一场能量的错身而过 · Glass", "indigo-porcelain"),
    ("2026-08-30-caffeine-blocking-sleepiness", "deck-04", "咖啡因：它没有给你任何能量 · Caffeine", "ink-default"),
    ("2026-08-30-container-the-box", "deck-06", "集装箱：改变世界的不是船 · The Box", "indigo-porcelain"),
]

for slug, prefix, title, theme in DECKS:
    cmd = [
        sys.executable, "docs/build/inject.py",
        f"{slug}", f"docs/build/{prefix}-slides.html", title, theme, f"docs/build/{prefix}-notes.json",
    ]
    print(subprocess.run(cmd, capture_output=True, text=True).stdout.strip())
