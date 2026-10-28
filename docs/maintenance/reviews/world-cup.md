# 足球：世界为什么为一颗球停下 — 维护审阅记录

- Artifact: `ppt-collection/world-cup.html`（基线保留于 Git；现已按源文件导出更新）
- Maintained source: `2026-10-28-legacy-maintenance/world-cup.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Slides / style: 20 / A

## 已核查并修正

- P2 2022 FIFA 报告口径：约 5B 全媒体参与，决赛 1.42B 触达，2.87B 至少看过 1 分钟线性电视转播；去除无依据的 1.2 万亿分钟总观看时长，并把国家/语言数字改成不带精确数量的概述。[FIFA Qatar 2022 audience report](https://inside.fifa.com/tournament-organisation/audience-reports/qatar-2022)
- P5 2.68 球/场明确是 2022 年 64 场、172 球的平均值，不再称世界杯历史均值。FIFA 给出的 2026 历史赛均值为 2.84。[FIFA 2026 in numbers](https://inside.fifa.com/tournament-organisation/fifa-world-cup-2026-by-the-numbers)
- P10 将 Lionel Messi 金球奖数更新为 8（截至 2023），Ronaldo 明确为巴西 R9 的世界杯 15 球，Mbappé 的 8 球标为 2022 世界杯赛事进球，不再称决赛进球。
- P13 删除无出处的 VAR 准确率百分比、4K 摄像机数量和固定 40 秒复核耗时，改为多机位回看与主裁最终决定的机制说明。
- P14 更新为 2026 已结束赛事官方数据：6,810,966 人次、99.7% 上座率、104 场、16 个场馆。[FIFA 2026 in numbers](https://inside.fifa.com/tournament-organisation/fifa-world-cup-2026-by-the-numbers)
- P15 将 2022 FIFA/Nielsen 社媒数字标为历史范围：5.95B engagements、262B 累计触达。[FIFA publications 2022](https://publications.fifa.com/en/annual-report-2022/tournaments-and-events/fifa-world-cup-quatar-2022/fifa-world-cup-qatar-2022-in-numbers)
- P17 将 128,694 名男性职业球员、3,986 家俱乐部/135 国限定为 FIFA Professional Football Report 2023。[FIFA report announcement](https://inside.fifa.com/legal/news/fifa-publishes-professional-football-report-2023)
- P18 将 2026 扩军数据由未来式改为已完成事实：48 队、104 场、加拿大/墨西哥/美国共同承办；西班牙获得冠军。[FIFA 2026 champions announcement](https://ipt.fifa.com/organisation/news/spain-crowned-world-cup-2026-champions-new-york-new-jersey)

## 验收边界

已逐页扫描 20 页可见文本并改正明确的年份、分母与误标。其他难以建立原始出处的数据（预选赛总场数、VAR百分比、旧版跨平台统计）已删除或概述化。规则、赛事战术与情绪分析属于叙事说明；视觉检查与三档浏览器 QA 状态见下方更新；其余事实边界仍按本文记录。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, and opened high-risk quote, attendance, match, revenue, and 2026 expansion pages at full size. The previously missing P11 capture was supplemented at all three viewports; its pipeline steps are dim in the initial state by design, with progression checked separately by browser QA. No additional clipping or footer collision was confirmed in reviewed pages. This is not factual acceptance of tournament statistics.


## Final ancestor-clip correction — 2026-10-28

P12: removed the local forced 80vh minimum and reduced quote spacing/type locally, restoring the GOALKEEPER kicker and metadata. Quote and attribution retained.

- Before source SHA-256: dc477ef0ee33f7c6ff8491e89719280e06a3879fe84d6839328fcd7b0ae6fec9 (preserved in .codex/clip-fixes-baseline/).
- Final frozen standalone: .codex/clip-fixes-candidates-v1/world-cup.html; SHA-256 7ad264688fcdd1a0fa327bd70b57a277a7e1b355a46acc4021ed4b97667b50b5. Exporter: no remaining local dependencies. No collection artifact replaced.
- Official final-byte browser QA: .codex/qa-clip-fixes/approved-results.json, exit 0; 20 pages × 1600×900 / 1280×720 / 1000×560, zero overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed once each at 1600×900 only.
- External-network-blocked static QA: .codex/offline-clip-fixes/results.json, 1280×720, settle 1000ms; all 20 pages passed, including ancestor clipping checks; zero unreadable text, page errors or local dependency failures.
- Actual visual inspection: full-size blocked-network before/after target pages in .codex/clip-before/ and .codex/clip-after/, plus final-byte dynamic target pages at 1000×560 in .codex/qa-clip-fixes/shots/; target text is visible with bottom clearance. No claim of renewed whole-deck factual acceptance.


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `7ad264688fcdd1a0fa327bd70b57a277a7e1b355a46acc4021ed4b97667b50b5`
- Three-viewport all-page QA: `.codex/qa-clip-fixes/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/world-cup.html`; pages: 20.
