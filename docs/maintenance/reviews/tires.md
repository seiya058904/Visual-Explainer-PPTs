# 轮胎：汽车文明真正接触世界的地方 — 维护审阅记录

> 最新布局复验：本项审查通过，无需改动。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`ebb25643ffc238bb8c30fa7590536322095dee78c5c9e29efdc08720a11bbfd4`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

- Artifact: `ppt-collection/tires.html`（基线保留于 Git；现已按源文件导出更新）
- Maintained source: `2026-10-28-legacy-maintenance/tires.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Slides / style: 15 / A

## 已核查并修正

- P2 全球轮胎市场数据的数量级从错误的 $1,430.6B / $1,739.3B 改为 Grand View Research 估算的 2024 年 $143.06B、2030 年预测 $173.93B；单一商业研究机构的市场模型不是统一行业统计。[Grand View Research](https://www.grandviewresearch.com/industry-analysis/tires-market-report)
- P7 AAA 测试结果限定为 60 mph 湿路面、4/32 英寸胎纹测试胎对新胎：乘用车平均增加 87 英尺（约 26.5 m），约 43%；不是任意车辆或轮胎的通用结果。[AAA test summary](https://newsroom.aaa.com/2018/06/tread-lightly-worn-tires-drivers-risk/)
- P8 NHTSA 的 55.6% 估计限定在其 2010–2011 评估和 2004–2007 车型样本，解释为 TPMS 与严重欠压轮胎出现概率降低相关；明确 TPMS 不代替定期测压。[NHTSA report summary](https://rosap.ntl.bts.gov/view/dot/80057), [NHTSA tire guidance](https://www.nhtsa.gov/vehicle-safety/tires)
- P13 JRC 给出的轮胎磨耗占无意释放环境微塑料约三分之一至一半、道路交通颗粒物约 5–30% 均保留为范围，不与一般塑料排放混为一谈。[JRC report](https://publications.jrc.ec.europa.eu/repository/handle/JRC135524)
- P11 的“轮胎几乎走到月球”仅作为 Pirelli 对 2024 F1 赛季的累计行驶距离比喻，原始统计约 334,942 km、月球近地点距离的 94%。[Pirelli 2024 season statistics](https://press.pirelli.com/all-the-2024-season-stats-from-the-earth-to-the-moon-almost-with-formula-1s-pirelli-tyres/)

## 验收边界

已对 15 页可见文字扫描并复核市场、湿地制动、TPMS、磨耗排放和 F1 数字。材料、配方取舍与电动车非尾气排放已补核如下；性能不是由软硬或动力形式单独决定。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, and opened the market, braking, pressure, TPMS, and microplastics pages at full size. The previously missing P12 capture was supplemented at all three viewports; it is a directional progression state, so its initial dimming is expected. No additional clipping or footer collision was confirmed in the reviewed content. Visual review does not verify every cited statistic.


## Final ancestor-clip and title correction — 2026-10-28

P3/P4/P5/P6/P9/P14: scoped figure grid now reserves an automatic caption row; the image can shrink within the remaining space and uses contain, preserving its content. This fixes captions previously below an overflow-clipped image region. No global overflow change. P3 title now breaks at its semantic comma; P9 is condensed to 滚动阻力：影响油耗与续航 and P14 to 未来轮胎：聪明、安静、可持续. These three titles remain at two lines without orphans under offline fallback fonts at 1280×720 and 1000×560. No data or scientific claims changed.

- Before source SHA-256: 74c015966b04f0ce6fb6601c60dcf674ec8ab063d272fe7787c91de03f982a20; original retained in .codex/clip-fixes-baseline/.
- Final frozen standalone: .codex/clip-fixes-candidates-v2/tires.html; SHA-256 1957055a45296fc633f99b455978012ac0ef8d4afc424b9ef818f3f9ff1229b3. Exporter has no remaining local dependencies. V1 is superseded for tires only; no collection artifact replaced.
- Official final-byte browser QA: .codex/qa-clip-tires-v2/approved-results.json, exit 0 at 13:02:58; all 15 pages × three viewports (45 settled page-viewports), zero overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed once each at 1600×900 only.
- Official blocked-network static QA: .codex/offline-clip-tires-v2/results.json, exit 0; all 15 pages at 1280×720, settle 1000ms, zero unreadable text including ancestor clips, page errors, local failures or unavailable external pictures.
- Actual visual inspection: all six corrected captions in the V1 blocked-network full-size 1280 screenshots; all six final V2 dynamic full-size 1000 screenshots; three final titles checked under blocked network/static fallback at both 1280 and 1000. Final snapshots are in .codex/qa-clip-tires-v2/shots/ and .codex/clip-after/tires-final-title-*.png. This is scoped visual acceptance, not renewed factual acceptance of every statistic.

## 最后事实边界复核

P10取消“燃油车要求温和/磨耗均匀、电动车一概更重”的二元断言，说明具体车型、胎压、驾驶及再生制动差异；依据 [OECD2020报告](https://www.oecd.org/en/publications/non-exhaust-particulate-emissions-from-road-transport_4a4dc6ca-en/full-report/component-7.html)。P12取消“越软抓地越好、永恒矛盾”等绝对说法，改为配方/结构/温度/路况共同决定；硅材料可同时改善若干性能。P14现代轮胎的百余组分为制造商说明，不当成每条胎的固定清单。依据 [Continental配方工程](https://www.continental-tires.com/about-us/stories/the-rubber-code/)、[Continental二氧化硅](https://www.continental-tires.com/about-us/stories/silica-a-filler-with-great-success/)、[Michelin材料技术](https://www.michelinman.com/motorcycle/technologies-motorcycle/michelin-rubber-compound-technologies)。


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `ebb25643ffc238bb8c30fa7590536322095dee78c5c9e29efdc08720a11bbfd4`
- Three-viewport all-page QA: `.codex/qa-tires-factual-final/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/tires.html`; pages: 15.


## 宽矮窗口修复补充

本轮未改源与成品；两档动态与两档静态逐页检查通过。
