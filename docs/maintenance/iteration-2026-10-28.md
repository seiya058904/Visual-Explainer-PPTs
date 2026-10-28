# 2026-10-28 refinement and final audit

Follow-up: user-reported lower-content clipping in wide/short windows was reproduced and repaired for all ten Pending decks. [Current layout evidence](pending-bottom-clipping.md) supersedes their source hashes and layout coverage below; the original release ledger remains a historical snapshot.

The final inventory contains **38 Approved decks / 569 pages** and **10 Pending decks / 111 pages**. Current artifacts, maintained sources and frozen test files match all 38 publication receipts. The Pending works remain local and unpromoted. **Release verification is tracked by [PR #3](https://github.com/seiya058904/Visual-Explainer-PPTs/pull/3) and the commit-bound [Pages workflow runs](https://github.com/seiya058904/Visual-Explainer-PPTs/actions/workflows/gallery.yml).** The configured public address is https://seiya058904.github.io/Visual-Explainer-PPTs/; source audit results are distinct from deployment results.

This report verifies the stated technical gates. Factual corrections, source citations, actual visual-review scope and unresolved content boundaries are documented per work; it does not assign a blanket factual or media-rights PASS.

## Final evidence

| Gate | Actual result | Evidence |
|---|---|---|
| Inventory / byte identity | 48 records; 38/38 Approved source, artifact, receipt and frozen-test hashes match; no mismatches | [Release ledger](release-ledger.json), `.codex/publication-receipts.json` |
| Settled browser pages | Approved 1,707 + Pending 333 page-viewports at 1600×900, 1280×720 and 1000×560; zero recorded content overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests | Per-entry `browserEvidence` in ledger; Pending `.codex/qa-pending-standalone-final/pending-results.json` |
| ESC overview / selection | 48 + 48 checks at 1600×900 only; five older selection fields supplemented against current artifact bytes | `.codex/final-overview-selection/results.json` plus per-entry browser reports |
| Offline core reading | Exact current-byte evidence for all 38 Approved / 569 pages and 10 Pending / 111 pages; external network blocked, static mode; zero unreadable text, page errors or local failures | Offline evidence selection below |
| Presenter / notes | 20 offered runtimes passed expanded interaction checks and schema validation; 28 legacy runtimes N/A; 111 Pending short-talk warnings retained | `.codex/presenter-approved-expanded/results.json`, `.codex/presenter-pending-expanded/results.json`, `.codex/skill-validators-final.json` |
| Real `file://` sample | 3 decks / 36 pages: elevator 10, ANC 15, Pending soap 11; current hash matches, core reading, keyboard and wheel passed; presenter shell checked where offered | `.codex/file-url-smoke/results.json` |

The offline selection uses matching **per-deck SHA-256 records**, rather than treating older aggregate reports as all-green. Final evidence comes from `.codex/offline-final38/results.json` (31 Approved), `offline-chips-cold-final2` (2), `offline-clip-fixes` (3), `offline-tires-factual-final` (1), `offline-screws-factual-final-canonical` (1), and `offline-pending` (10). The ledger stores each exact report path and hash. Ten browser receipts name a canonical frozen copy rather than the original browser URL; both paths and equal hashes are recorded.

## Limits that remain

- Twelve external picture placements across three Approved decks are unavailable with network blocked: Bill Gates 9, medical longevity 1, science of garbage 2. Offline core readability does not certify full offline visual equivalence; network fonts/icons may use fallbacks.
- Twenty presenter passes cover notes input isolation, slide attachment, audience sync/reconnect, draw/clear and black/white/frozen states, timer, overview/previews, wheel and synthetic touch. The 28 runtimes without this feature are N/A. Short Pending notes are speaking cues, not full scripts.
- Actual Chromium was used. Physical touch devices and HDMI/projector hardware were not tested. The three-deck file-origin sample does not certify all 48 decks or end-to-end file-origin audience synchronization.
- Individual review cards retain factual uncertainties and citation scope. Public availability is not third-party image reuse permission. Rights and publication decisions are not replaced by browser test success.

## Final 48-work register

Every title links its review card. “3vp” counts settled page-viewports; offline counts pages with exact-hash core-reading evidence. Presenter “N/A” means absent runtime, not a pass. Complete source/artifact paths, SHA-256 values and individual evidence paths are in [release-ledger.json](release-ledger.json).

| Work / review card | Status | Pages | 3vp | Offline | Presenter |
|---|---|---:|---:|---:|---|
| [主动降噪：发动机消失了，人声却还在](reviews/active-noise-cancellation-fighting-sound-with-sound.md) (`active-noise-cancellation-fighting-sound-with-sound`) | Approved | 15 | 45 | 15 | Passed |
| [AI是如何影响我们生活的](reviews/ai-and-life.md) (`ai-and-life`) | Approved | 10 | 30 | 10 | N/A |
| [AI如何影响现代人类生活](reviews/ai-impact-on-modern-life.md) (`ai-impact-on-modern-life`) | Approved | 10 | 30 | 10 | N/A |
| [AI 天气预报：天气预报开始不再只靠方程](reviews/ai-weather-learning-the-atmosphere.md) (`ai-weather-learning-the-atmosphere`) | Approved | 13 | 39 | 13 | Passed |
| [飞机](reviews/airplane.md) (`airplane`) | Approved | 20 | 60 | 20 | N/A |
| [比尔·盖茨：把好奇心写进时代的人](reviews/bill-gates-biography.md) (`bill-gates-biography`) | Approved | 20 | 60 | 20 | N/A |
| [罐头：把季节封存在金属里](reviews/canned-civilization.md) (`canned-civilization`) | Approved | 15 | 45 | 15 | N/A |
| [芯片：现代科技背后的隐形心脏](reviews/chips.md) (`chips`) | Approved | 24 | 72 | 24 | N/A |
| [钟表：人类如何把时间变成制度](reviews/clocks.md) (`clocks`) | Approved | 10 | 30 | 10 | N/A |
| [冷链：现代食物背后的低温文明](reviews/cold-chain.md) (`cold-chain`) | Approved | 10 | 30 | 10 | N/A |
| [混凝土：流动的母体](reviews/concrete-liquid-skeleton.md) (`concrete-liquid-skeleton`) | Approved | 15 | 45 | 15 | N/A |
| [信用](reviews/credit.md) (`credit`) | Approved | 20 | 60 | 20 | N/A |
| [显示屏：画面其实不存在](reviews/display-how-images-are-made.md) (`display-how-images-are-made`) | Approved | 15 | 45 | 15 | Passed |
| [电网：电力时代看不见的瓶颈](reviews/electric-grid-bottleneck.md) (`electric-grid-bottleneck`) | Approved | 13 | 39 | 13 | Passed |
| [电梯：让城市向天空生长 · Elevator Civilization](reviews/elevator.md) (`elevator`) | Approved | 10 | 30 | 10 | N/A |
| [光纤：在玻璃微丝中奔跑的文明](reviews/fiber-optics-glass-nervous-system.md) (`fiber-optics-glass-nervous-system`) | Approved | 10 | 30 | 10 | N/A |
| [GLP-1 减肥药：减肥药为什么改变了医学](reviews/glp-1-beyond-weight-loss.md) (`glp-1-beyond-weight-loss`) | Approved | 13 | 39 | 13 | Passed |
| [保险：人类如何给不确定性定价 · Insurance](reviews/insurance.md) (`insurance`) | Approved | 15 | 45 | 15 | N/A |
| [黄仁勋：把计算重新点燃的人](reviews/jensen-huang.md) (`jensen-huang`) | Approved | 20 | 60 | 20 | N/A |
| [钥匙与锁：安全感的技术史](reviews/keys-and-locks.md) (`keys-and-locks`) | Approved | 20 | 60 | 20 | N/A |
| [锂电池：被驯服的移动能量密度](reviews/lithium-battery-tetherless-world.md) (`lithium-battery-tetherless-world`) | Approved | 10 | 30 | 10 | N/A |
| [现代医学：让生命拥有更多时间](reviews/medical-longevity.md) (`medical-longevity`) | Approved | 10 | 30 | 10 | N/A |
| [巧克力发酵：它还不是巧克力](reviews/microbial-chocolate-designing-flavour.md) (`microbial-chocolate-designing-flavour`) | Approved | 13 | 39 | 13 | Passed |
| [微波炉：饭热了，盘子呢？](reviews/microwave-where-heat-comes-from.md) (`microwave-where-heat-comes-from`) | Approved | 14 | 42 | 14 | Passed |
| [导航](reviews/navigation.md) (`navigation`) | Approved | 20 | 60 | 20 | N/A |
| [药片](reviews/pills-industrial-miracle.md) (`pills-industrial-miracle`) | Approved | 28 | 84 | 28 | N/A |
| [小行星防御：它只需要 20 米](reviews/planetary-defense-changing-the-odds.md) (`planetary-defense-changing-the-odds`) | Approved | 13 | 39 | 13 | Passed |
| [二维码：为什么缺一块还能扫？](reviews/qr-code-inside-the-black-white-squares.md) (`qr-code-inside-the-black-white-squares`) | Approved | 14 | 42 | 14 | Passed |
| [排队：现代社会最安静的公平机制](reviews/queueing.md) (`queueing`) | Approved | 10 | 30 | 10 | N/A |
| [垃圾：我们扔掉的东西，并没有离开世界](reviews/science-of-garbage.md) (`science-of-garbage`) | Approved | 15 | 45 | 15 | N/A |
| [螺丝](reviews/screws.md) (`screws`) | Approved | 20 | 60 | 20 | N/A |
| [防晒指数：SPF 50 不是 50 倍时间](reviews/spf-50-decoding-sunscreen.md) (`spf-50-decoding-sunscreen`) | Approved | 14 | 42 | 14 | Passed |
| [电影的艺术：把时间制造成梦](reviews/the-art-of-cinema.md) (`the-art-of-cinema`) | Approved | 15 | 45 | 15 | N/A |
| [轮胎](reviews/tires.md) (`tires`) | Approved | 15 | 45 | 15 | N/A |
| [科技二十年：世界被重新编译](reviews/twenty-years.md) (`twenty-years`) | Approved | 10 | 30 | 10 | N/A |
| [天气预报：人类如何预测明天 · Weather Forecast](reviews/weather-forecast.md) (`weather-forecast`) | Approved | 15 | 45 | 15 | N/A |
| [Wi-Fi：空气中的互联网秩序](reviews/wifi.md) (`wifi`) | Approved | 15 | 45 | 15 | N/A |
| [足球：世界为什么为一颗球停下](reviews/world-cup.md) (`world-cup`) | Approved | 20 | 60 | 20 | N/A |
| [空调：冷下来靠搬走热量](reviews/pending-air-conditioning-moving-heat.md) (`air-conditioning-moving-heat`) | Pending | 12 | 36 | 12 | Passed |
| [桥梁：它从来不是静止的](reviews/pending-bridges-always-moving.md) (`bridges-always-moving`) | Pending | 11 | 33 | 11 | Passed |
| [咖啡因：它没有给你任何能量](reviews/pending-caffeine-blocking-sleepiness.md) (`caffeine-blocking-sleepiness`) | Pending | 11 | 33 | 11 | Passed |
| [集装箱：改变世界的不是船](reviews/pending-container-the-box.md) (`container-the-box`) | Pending | 12 | 36 | 12 | Passed |
| [指纹：皮肤上最著名的误解](reviews/pending-fingerprints-not-for-grip.md) (`fingerprints-not-for-grip`) | Pending | 10 | 30 | 10 | Passed |
| [玻璃：一场能量的错身而过](reviews/pending-glass-transparent-solid.md) (`glass-transparent-solid`) | Pending | 11 | 33 | 11 | Passed |
| [肥皂：一块皂里的分子工程](reviews/pending-soap-translating-oil.md) (`soap-translating-oil`) | Pending | 11 | 33 | 11 | Passed |
| [自来水：拧开龙头后的百年工程](reviews/pending-tap-water-clean-process.md) (`tap-water-clean-process`) | Pending | 11 | 33 | 11 | Passed |
| [黄灯：三秒钟的物理题](reviews/pending-traffic-light-yellow-physics.md) (`traffic-light-yellow-physics`) | Pending | 11 | 33 | 11 | Passed |
| [拉链：一行可以开合的牙齿](reviews/pending-zipper-line-of-teeth.md) (`zipper-line-of-teeth`) | Pending | 11 | 33 | 11 | Passed |

## Recorded mismatch state

No receipt, final-byte browser or exact-hash offline mismatch was found in this reconciliation.

Raw screenshots and test reports remain local process evidence in `.codex/`; this audit and the review cards preserve the scope and limits. No new approval of Pending works is implied.

## Gallery and reproducibility

The gallery uses a paper/ink editorial composition, large serif hierarchy, restrained GSAP entry animation and individually captured deck covers. Hallmark, Impeccable and GSAP guidance informed the gallery; the deck system remains guizang. [Desktop screenshot](../images/gallery-1600x900.webp), [mobile screenshot](../images/gallery-390x844.webp), [maintenance workflow](gallery-maintenance.md).

G0: [Skill verification](guizang-skill-upgrade.md) records the actual loaded path `D:/xia zai/AI project/ppt/.codex/skills/guizang-ppt-skill`. Before and after are the same upstream main commit `c91369c449d34755d320a8b81d0734000d99d1ab`; an unnecessary reinstall was skipped. Official main was rechecked before release.

Commands actually run (raw output remains local):

```text
python docs/build/audit-catalog.py                         # 48 entries, 0 failed
npm test                                                # 2 tests passed
python -m unittest discover -s docs/build -p 'test_*.py'  # 26 existing passed; 2 new SVG-title regression tests separately passed, CI total 28
python docs/build/export-standalone.py SOURCE --output-name ID.html --stage STAGE --out-dir ppt-collection
node docs/build/browser-qa.mjs --mode approved --base http://127.0.0.1:8901 --manifest MANIFEST --out QA_FOLDER
node docs/build/browser-qa.mjs --mode pending --base http://127.0.0.1:8901 --manifest .codex/pending-offline-manifest.txt --out .codex/qa-pending-standalone-final
node docs/build/test-offline.mjs --manifest MANIFEST --out QA_FOLDER
npm run covers                                          # 38 final artifact hashes, 0 capture errors
python docs/build/build-gallery.py --out .codex/public/Visual-Explainer-PPTs
npm run test:site                                        # 5 viewports, 38 links, 404 recovery, passed
python docs/build/build-review.py
```

`SOURCE`, `ID`, `STAGE`, `MANIFEST` and `QA_FOLDER` denote the per-batch values recorded in the ledger and review cards, not one fictional all-at-once run. The public build contains Approved assets only. The local candidate review entry is http://127.0.0.1:8901/.codex/review/ while the repository source server is running; its ten links remain Pending.
