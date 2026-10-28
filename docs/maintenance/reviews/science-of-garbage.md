# 我们扔掉的东西，并没有离开世界 — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`bc1df174f01324b0d2d0b20a01edac6a1d83920528275c532bbd35ddf4fb052f`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；15 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`3ac20f7867200915bef0a309427fc6df516b8c9107c8de2d266be7696738b320`。

- Artifact: `ppt-collection/science-of-garbage.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: A
- English editorial title: The Science of Where Garbage Goes


## Fact review and maintained-source changes (2026-10-28)

A hash-backed maintenance copy is at `2026-10-28-legacy-maintenance/science-of-garbage.html`; the original artifact SHA-256 is `d977bb6187f0e597fc0744a7842ef4584ec5ce2d910aa1405587c230501cecf5`. The approved artifact remains unchanged.

- Slide 11’s “19% of production” denominator was inaccurate. UNEP’s Food Waste Index says 1.05 billion tonnes in 2022 equaled 19% of food available to consumers at retail, food-service, and household stages, in addition to supply-chain food loss. The maintained copy now says “available to consumers” and distinguishes those stages; it also dates the 783 million people facing hunger to 2022 and attributes that concurrent estimate to FAO and partner agencies. [UNEP Food Waste Index 2024](https://wedocs.unep.org/bitstream/handle/20.500.11822/45275/Food-Waste-Index-2024-key-messages.pdf?sequence=8)
- UNEP confirms global municipal solid-waste generation of 2.1 billion tonnes in 2023 and projection of 3.8 billion tonnes by 2050; 2020 direct management cost of $252B and total cost including hidden externalities of $361B; modeled circular-economy net gain of $108.5B/year. [UNEP Global Waste Management Outlook 2024](https://www.unep.org/en/publications/report/global-waste-management-outlook-2024)
- UNEP supports the 19–23 million tonnes/year plastics leakage to aquatic ecosystems and near-tripling projection by 2040. ITU/UNITAR support the 62Mt e-waste generated in 2022 and 22.3% documented formally collected/recycled. EPA identifies U.S. municipal-solid-waste landfills as 14.4% of U.S. anthropogenic methane in 2022. [UNEP plastics overview](https://www.unep.org/en/what-we-do/ocean-seas-and-coasts/ecosystem-degradation-pollution/plastic-pollution-marine-litter), [ITU Global E-waste Monitor 2024](https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-Waste-Monitor-2024.aspx), [U.S. EPA landfill-gas facts](https://www.epa.gov/lmop/frequent-questions-about-landfill-gas)
- The former review uncertainty on slides 3–5 is resolved against World Bank *What a Waste 2.0*: the 0.74 kg/person/day global mean and 1.57/0.43 income-group values are 2016-adjusted estimates (Figure 2.3, p. 23); collection figures are 96% for high-income and 39% for low-income countries (Figure 2.10, p. 32; collection inputs draw on multiple reporting years, so the deck labels them as report estimates, not a common-year snapshot); the global treatment split is 37% landfill (all types), 33% open dumping, 19% recycling/composting, and 11% modern incineration (Figure 2.12, p. 34). The maintained copy now names the report and fixes the per-capita date and values. Its rural note is explicitly qualitative and scoped as a general pattern. [World Bank, *What a Waste 2.0* (2018)](https://documents1.worldbank.org/curated/en/697271544470229584/pdf/What-a-Waste-2-0-A-Global-Snapshot-of-Solid-Waste-Management-to-2050.pdf), [World Bank, *What a Waste 3.0* (2026), updated context](https://www.worldbank.org/en/publication/what-a-waste). No post-edit browser QA has run yet. This is not renewed acceptance.


## Visual maintenance update (2026-10-28)

Slide 14’s closing statement is now split into two concise lines (“真正的答案，/是从源头少产生。”) to avoid a third-line orphan. The source copy has not yet received post-edit settled browser QA.

## 最终验收证据

完整三档报告：`.codex/qa-release-content-final/approved-science-of-garbage.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。


## 宽矮窗口修复补充

触发页：6, 7, 8, 9, 12。字号按可用高度约束；移除过大的 frame 最小高度；图片与图注分行，保留图注高度；问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
