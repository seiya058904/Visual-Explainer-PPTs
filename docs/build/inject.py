# -*- coding: utf-8 -*-
"""把 slides 片段 + 演讲备注 + 主题色注入 guizang template.html。
用法: python inject.py <deck_dir> <slides_file> <html_title> <theme_name> <notes_file>
theme: ink-default | indigo-porcelain | forest-ink | kraft | dune
"""
import sys, re, json, pathlib

REPO_ROOT = pathlib.Path(__file__).resolve().parents[2]
SKILL = REPO_ROOT / ".codex" / "skills" / "guizang-ppt-skill"
THEMES = {
    "ink-default":        {"--ink":"#0a0a0b","--ink-rgb":"10,10,11","--paper":"#f1efea","--paper-rgb":"241,239,234","--paper-tint":"#e8e5de","--ink-tint":"#18181a"},
    "indigo-porcelain":   {"--ink":"#0a1f3d","--ink-rgb":"10,31,61","--paper":"#f1f3f5","--paper-rgb":"241,243,245","--paper-tint":"#e4e8ec","--ink-tint":"#152a4a"},
    "forest-ink":         {"--ink":"#1a2e1f","--ink-rgb":"26,46,31","--paper":"#f5f1e8","--paper-rgb":"245,241,232","--paper-tint":"#ece7da","--ink-tint":"#253d2c"},
    "kraft":              {"--ink":"#2a1e13","--ink-rgb":"42,30,19","--paper":"#eedfc7","--paper-rgb":"238,223,199","--paper-tint":"#e0d0b6","--ink-tint":"#3a2a1d"},
    "dune":               {"--ink":"#1f1a14","--ink-rgb":"31,26,20","--paper":"#f0e6d2","--paper-rgb":"240,230,210","--paper-tint":"#e3d7bf","--ink-tint":"#2d2620"},
}

def main():
    deck_dir, slides_file, html_title, theme, notes_file = sys.argv[1:6]
    deck = pathlib.Path(deck_dir)
    tpl = (SKILL / "assets" / "template.html").read_text(encoding="utf-8")
    slides = pathlib.Path(slides_file).read_text(encoding="utf-8").strip()
    notes = pathlib.Path(notes_file).read_text(encoding="utf-8").strip()
    # 校验 notes 是合法 JSON 数组
    json.loads(notes)

    # 1. 标题
    tpl = re.sub(r"<title>.*?</title>", f"<title>{html_title}</title>", tpl, count=1, flags=re.S)
    # 2. 主题色（整块替换 :root 前几个变量）
    th = THEMES[theme]
    for k, v in th.items():
        tpl = re.sub(re.escape(k) + r":[^;]+;", f"{k}:{v};", tpl, count=1)
    # 3. slides
    tpl = tpl.replace("<!-- SLIDES_HERE -->", slides)
    # 4. notes
    tpl = re.sub(r"const SPEAKER_NOTES = \[[\s\S]*?\];", f"const SPEAKER_NOTES = {notes};", tpl, count=1)
    # 3.5 小视口/高缩放降级：缩小标题与数字，防固定最小字号撑爆 vh 框架
    override = """<style>/* RESPONSIVE-OVERRIDE */
@media (max-height:700px), (max-width:1100px){
  .h-hero{font-size:8.4vw}
  .h-xl{font-size:5vw}
  .h-sub{font-size:2.6vw}
  .lead{font-size:max(14px,1.6vw)}
  .stat-nb{font-size:4.6vw}
  .grid-3 .stat-card .stat-nb{font-size:5.2vw}
  .callout{font-size:max(13px,1.05vw)}
}
</style>
"""
    tpl = tpl.replace("</head>", override + "</head>")
    # 校验没有残留
    assert "<!-- SLIDES_HERE -->" not in tpl, "SLIDES_HERE 未被替换"
    assert "[必填]" not in tpl, "存在 [必填] 残留"
    out = deck / "index.html"
    out.write_text(tpl, encoding="utf-8")
    print(f"OK {out} ({len(tpl)} bytes, theme={theme})")

if __name__ == "__main__":
    main()
