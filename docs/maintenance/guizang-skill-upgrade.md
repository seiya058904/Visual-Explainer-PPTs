# Guizang skill version and compatibility gate

Date: 2026-10-28. G0: passed with documented legacy findings; not a deck acceptance.

- Official source: https://github.com/op7418/guizang-ppt-skill
- Official main: `c91369c449d34755d320a8b81d0734000d99d1ab`, rechecked with git ls-remote.
- Runtime-selected root: `D:/xia zai/AI project/ppt/.codex/skills/guizang-ppt-skill`.
- Before / after: same upstream content; no install or upgrade performed.
- Full official archive comparison: 41 files present, 10 byte-identical and 31 differing only in CRLF/LF. No substantive differences. This is a file installation, not an independent checkout; parent repository HEAD is not a skill SHA.
- SKILL.md and current checklist, presenter, layouts A/B and image guidance read from that root. The isolated worktree continues using this explicit external root.

## Preflight commands and results

- `node <skill>/scripts/check-presenter-runtime-sync.mjs`: PASS for CSS and JS across both templates.
- `node <skill>/scripts/validate-presenter-mode.mjs <skill>/assets/template.html`: 0 errors; no-slides warning expected for template.
- `node <skill>/scripts/validate-swiss-deck.mjs 2026-05-16-lithium-battery-ppt/index.html`: static PASS, 10 slides; rendered measurement SKIPPED because Playwright not resolved from the skill/project.
- `node <skill>/scripts/validate-presenter-mode.mjs 2026-08-30-soap-translating-oil/index.html`: FAIL, final note transition missing; 11 short-talk warnings. Track as a candidate issue, not an upgrade failure.

## Compatibility decisions

Preserve the repository transactional standalone exporter, three viewport gates, step/arrow-only pipeline dimming and explicit approval boundary. Existing runtimes are not replaced wholesale. New presenter requirements apply to implementations offering them; legacy capability gaps remain explicit. Last-slide transition must describe the closing action instead of inventing another slide.

The upstream is AGPL-3.0. No upstream installation is added to this repository. Existing template-derived distribution and media rights require a separate provenance review before public deployment; public access alone is not a license. Keep upstream attribution and applicable notices when distributing derived code. Do not relabel all deck media under a blanket license.

## Authorized exception

The user authorizes source-first refinement of 38 Approved works. The 10 Pending works remain Pending after technical QA and cannot be promoted without new explicit approval.

## Follow-up rendered preflight

After installing the project-pinned Playwright Chromium, Swiss validator rendered the historical lithium Swiss alternate: 0 errors, warnings for10 low nav-safe content bounds and8 title/lead gaps. This alternate is not the approved lithium artifact. Warnings are recorded, not called visual acceptance.
