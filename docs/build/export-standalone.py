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
  5. project/index.html 输出为 project.html;普通 HTML 保留原名。
  6. 默认写入暂存目录;--stage 指定暂存目录,--out-dir 指定最终输出目录。
     组合使用时在 --stage 准备文件,最终写入 --out-dir;不改源项目。
  7. 整批预检命名冲突和本地依赖,写入失败回滚;--check-only 不创建目录或文件。

退出码: 0=全部成功; 1=冲突、依赖或读写失败; 2=参数用法错误。
"""
import argparse
import base64
import json
import mimetypes
import os
import pathlib
import re
import shutil
import sys
import tempfile

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


def output_name(source: pathlib.Path) -> str:
    return source.parent.name + '.html' if source.name == 'index.html' else source.name


def write_batch(outputs: list[tuple[pathlib.Path, str]], stage: pathlib.Path,
                out_dir: pathlib.Path) -> None:
    """Prepare every file before replacement; restore the prior batch on a write error."""
    stage.mkdir(parents=True, exist_ok=True)
    out_dir.mkdir(parents=True, exist_ok=True)
    prepared = pathlib.Path(tempfile.mkdtemp(prefix='.standalone-', dir=stage))
    transaction = None
    safe_to_discard = True
    try:
        for destination, html in outputs:
            (prepared / destination.name).write_text(html, encoding='utf-8', newline='\n')

        # Replacement files/backups must share the output filesystem for atomic rename.
        transaction = pathlib.Path(tempfile.mkdtemp(prefix='.standalone-', dir=out_dir))
        backups: dict[pathlib.Path, tuple[pathlib.Path | None, pathlib.Path]] = {}
        files = []
        for i, (destination, _) in enumerate(outputs):
            backup = transaction / f'{i}.backup' if destination.exists() else None
            if backup is not None:
                shutil.copy2(destination, backup)
            replacement = transaction / f'{i}.new'
            backups[destination] = (backup, replacement)
            shutil.copyfile(prepared / destination.name, replacement)
            files.append({'destination': str(destination.resolve()),
                          'backup': str(backup.resolve()) if backup is not None else None,
                          'replacement': str(replacement.resolve())})

        def record_recovery(state, committed, rollback_errors, commit_error=None):
            manifest = {'state': state, 'files': files,
                        'committed': [str(path.resolve()) for path in committed],
                        'rollback_errors': rollback_errors, 'commit_error': commit_error}
            pending = transaction / 'recovery.next.json'
            pending.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
            os.replace(pending, transaction / 'recovery.json')

        # A durable mapping exists before any destination can lose its old bytes.
        record_recovery('prepared', [], [])
        committed: list[pathlib.Path] = []
        safe_to_discard = False
        try:
            for i, (destination, _) in enumerate(outputs):
                os.replace(transaction / f'{i}.new', destination)
                committed.append(destination)
        except OSError as commit_error:
            rollback_errors = []
            for destination in reversed(committed):
                backup, replacement = backups[destination]
                try:
                    if backup is None:
                        # Restore absence by retaining the new output inside the transaction.
                        os.replace(destination, replacement)
                    else:
                        os.replace(backup, destination)
                except OSError as rollback_error:
                    rollback_errors.append({'destination': str(destination.resolve()),
                                            'error': str(rollback_error)})
            if rollback_errors:
                manifest_error = ''
                try:
                    record_recovery('rollback_failed', committed, rollback_errors, str(commit_error))
                except OSError as error:
                    manifest_error = f'; recovery manifest update failed: {error}'
                failures = '; '.join(f"{item['destination']}: {item['error']}"
                                     for item in rollback_errors)
                raise OSError(f'batch commit failed: {commit_error}; rollback failed: {failures}; '
                              f'recovery files retained at {transaction}{manifest_error}') from commit_error
            safe_to_discard = True
            raise
        safe_to_discard = True
    finally:
        cleanup = [prepared]
        if transaction is not None and safe_to_discard:
            cleanup.append(transaction)
        for directory in cleanup:
            try:
                shutil.rmtree(directory)
            except OSError as error:
                print(f'WARNING: temporary directory retained at {directory}: {error}', file=sys.stderr)


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('sources', nargs='+', help='source HTML files (relative to repo or absolute)')
    parser.add_argument('--stage', type=pathlib.Path, help='staging directory (relative to cwd or absolute)')
    parser.add_argument('--out-dir', type=pathlib.Path, help='final output directory (relative to repo or absolute)')
    parser.add_argument('--check-only', action='store_true', help='validate without writing files or directories')
    args = parser.parse_intermixed_args(argv)
    stage = (args.stage or REPO / '.codex' / 'audit-2026-09-10' / 'standalone-candidate').resolve()
    out_dir = (REPO / args.out_dir).resolve() if args.out_dir is not None else stage

    try:
        sources = [(REPO / name).resolve() for name in args.sources]
        names: dict[str, pathlib.Path] = {}
        destinations = []
        for source in sources:
            name = output_name(source)
            key = name.casefold()  # Reject case-only collisions on every platform.
            if key in names:
                raise ValueError(f'output conflict: {names[key]} and {source} -> {name}')
            names[key] = source
            destination = out_dir / name
            if destination.resolve() in sources:
                raise ValueError(f'output conflict with input source: {destination}')
            if destination.is_symlink() or (destination.exists() and not destination.is_file()):
                raise ValueError(f'output conflict with non-regular file: {destination}')
            destinations.append(destination)

        rc = 0
        outputs = []
        for source, destination in zip(sources, destinations):
            html = source.read_text(encoding='utf-8')
            missing: list[str] = []
            inlined: list[str] = []
            out_html = inline_html(html, source, missing, inlined, candidate_roots(source))
            print(f'== {source}')
            print(f'   inlined: {len(inlined)} refs -> {sorted(set(inlined)) if inlined else "[]"}')
            leftover = re.findall(
                r'''(?:src|href)\s*=\s*["']((?!https?:|data:|#|mailto:)[^"']+)["']''', out_html)
            leftover = [x for x in leftover if not x.startswith('//')]
            if missing or leftover:
                rc = 1
                if missing:
                    print(f'   MISSING (cannot inline): {sorted(set(missing))}')
                if leftover:
                    print(f'   LEFTOVER local deps: {sorted(set(leftover))}')
            else:
                print('   leftover local deps: none')
            outputs.append((destination, out_html))
        if rc or args.check_only:
            return rc
        for destination, _ in outputs:
            if destination.exists():
                print(f'   replacing existing output -> {destination}')
        write_batch(outputs, stage, out_dir)
        for destination, html in outputs:
            print(f'   wrote -> {destination} ({len(html)} chars)')
        return 0
    except (OSError, UnicodeError, ValueError) as error:
        print(f'ERROR: {error}', file=sys.stderr)
        return 1


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
