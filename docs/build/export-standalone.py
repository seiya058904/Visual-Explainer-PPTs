#!/usr/bin/env python3
"""export-standalone.py — 把 deck HTML 打包为真正可单独发布的单文件 HTML。

用法:
  python docs/build/export-standalone.py <source.html>... [--out-dir ppt-collection] [--stage DIR] [--check-only]

行为:
  1. 内联 repo 相对图片(src/href="images/...", url(images/...))为 data URI。
  2. 内联 ./assets/motion.min.js 引用为 data: 模块(import('./assets/motion.min.js')
     -> import('data:text/javascript;base64,...')),本地动效引擎随文件走,离线可用。
  3. 保留网络字体/CDN 作为增强项;任何无法内联的本地依赖会在 --check-only 下报错。
  4. deterministic: 同一输入产出逐字节一致的输出。
  5. 默认写入 --stage 暂存目录(--out-dir 时才覆盖正式目录),不改源项目。

退出码: 0=全部成功; 1=存在未内联的本地依赖(check-only 发现问题)。
"""
import base64
import mimetypes
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parents[2]
LOCAL_REF = re.compile(
    r'''(?P<attr>(?:src|href)\s*=\s*)(?P<q>["'])((?:\./)?(?:images|assets)/[^"']+)(?P=q)'''
)
ICON_REF = re.compile(
    r'''(?P<attr>(?:src|href)\s*=\s*)(?P<q>["'])((?!https?:|data:|#|//|mailto:)[^"']+?\.(?:svg|png|jpe?g|webp|ico|gif))(?P=q)'''
)
CSS_URL = re.compile(r'url\(\s*(?P<q>["\']?)((?:\./)?(?:images|assets)/[^)"\']+)(?P=q)\s*\)')
MOTION_IMPORT = re.compile(r'''import\(\s*(?P<q>['"])(?P<p>\./assets/motion\.min\.js)(?P=q)\s*\)''')
LUCIDE_CALL = re.compile(r'<script>\s*lucide\.createIcons\(\);\s*</script>')


def data_uri(path: pathlib.Path) -> str:
    mime = mimetypes.guess_type(str(path))[0] or 'application/octet-stream'
    raw = path.read_bytes()
    if mime.startswith('image/svg'):
        # svg 用 utf8 data uri,体积更小且确定性更好
        from urllib.parse import quote
        return 'data:image/svg+xml;charset=utf-8,' + quote(raw.decode('utf-8'))
    return f'data:{mime};base64,' + base64.b64encode(raw).decode('ascii')


def candidate_roots(src: pathlib.Path) -> list[pathlib.Path]:
    """引用解析根:文件自身目录 + 同名源项目目录。
    名称匹配:后缀匹配(display-*.html -> 2026-08-15-display-*/)或词集匹配
    (spf-50-decoding-sunscreen -> 2026-08-15-spf-50-sunscreen-decoding)。"""
    roots = [src.parent]
    stem = src.stem
    tokens = set(stem.split('-'))
    for d in sorted(REPO.iterdir()):
        if not d.is_dir():
            continue
        if d.name == stem or d.name.endswith('-' + stem):
            roots.append(d)
        elif set(d.name.split('-')) >= tokens:
            roots.append(d)
    return roots


# 缺失 ./assets/motion.min.js 时的统一回退副本(仓库内 19 处 md5 一致:0d19eda5...)
MOTION_FALLBACK = REPO / '2026-08-14-electric-grid-bottleneck-magazine' / 'assets' / 'motion.min.js'


def resolve_local(ref: str, source: pathlib.Path, roots: list[pathlib.Path]) -> pathlib.Path | None:
    for root in roots:
        p = (root / ref).resolve()
        if p.exists() and p.is_file():
            return p
    if ref.endswith('motion.min.js') and MOTION_FALLBACK.exists():
        return MOTION_FALLBACK
    return None


def inline_html(html: str, source: pathlib.Path, missing: list[str], inlined: list[str],
                roots: list[pathlib.Path]) -> str:
    def sub_attr(m):
        ref = m.group(3)
        p = resolve_local(ref, source, roots)
        if p is None:
            missing.append(ref)
            return m.group(0)
        inlined.append(ref)
        return f'{m.group(1)}{m.group(2)}{data_uri(p)}{m.group(2)}'

    def sub_css(m):
        ref = m.group(2)
        p = resolve_local(ref, source, roots)
        if p is None:
            missing.append(ref)
            return m.group(0)
        inlined.append(ref)
        return f'url({m.group(1)}{data_uri(p)}{m.group(1)})'

    def sub_motion(m):
        p = resolve_local(m.group(2), source, roots)
        if p is None:
            missing.append(m.group(2))
            return m.group(0)
        inlined.append(m.group(2))
        b64 = base64.b64encode(p.read_bytes()).decode('ascii')
        return f"import('data:text/javascript;base64,{b64}')"

    html = MOTION_IMPORT.sub(sub_motion, html)
    html = LOCAL_REF.sub(sub_attr, html)
    html = ICON_REF.sub(sub_attr, html)
    html = CSS_URL.sub(sub_css, html)
    # CDN 图标库不可用时不抛 ReferenceError(CDN 降级为静态可读)
    html = LUCIDE_CALL.sub(
        '<script>try{if(window.lucide)lucide.createIcons();}catch(e){/* CDN unavailable: static fallback */}</script>',
        html)
    return html


def main(argv: list[str]) -> int:
    args = [a for a in argv if not a.startswith('--')]
    flags = {a for a in argv if a.startswith('--')}
    check_only = '--check-only' in flags
    out_dir = REPO / 'ppt-collection'
    stage = REPO / '.codex' / 'audit-2026-09-10' / 'standalone-candidate'
    if '--out-dir' in flags:
        out_dir = REPO / argv[argv.index('--out-dir') + 1]
    if '--stage' in flags:
        stage = pathlib.Path(argv[argv.index('--stage') + 1])
    stage.mkdir(parents=True, exist_ok=True)

    rc = 0
    for src_name in args:
        src = (REPO / src_name).resolve() if not pathlib.Path(src_name).is_absolute() else pathlib.Path(src_name)
        html = src.read_text(encoding='utf-8')
        missing: list[str] = []
        inlined: list[str] = []
        out_html = inline_html(html, src, missing, inlined, candidate_roots(src))
        name = src.stem if src.name == 'index.html' else src.name
        dest = out_dir / (src.stem + '.html' if src.name == 'index.html' else src.name)
        print(f'== {src_name}')
        print(f'   inlined: {len(inlined)} refs -> {sorted(set(inlined)) if inlined else "[]"}')
        if missing:
            rc = 1
            print(f'   MISSING (cannot inline): {sorted(set(missing))}')
        else:
            # 残余本地依赖扫描:除 http(s)/data/# 外的相对引用
            leftover = re.findall(
                r'''(?:src|href)\s*=\s*["']((?!https?:|data:|#|mailto:)[^"']+)["']''', out_html)
            leftover = [x for x in leftover if not x.startswith('//')]
            if leftover:
                rc = 1
                print(f'   LEFTOVER local deps: {sorted(set(leftover))}')
            else:
                print('   leftover local deps: none')
        if not check_only:
            dest.parent.mkdir(parents=True, exist_ok=True)
            (stage / dest.name).write_text(out_html, encoding='utf-8', newline='\n')
            print(f'   staged -> {stage / dest.name} ({len(out_html)} chars)')
    return rc


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
