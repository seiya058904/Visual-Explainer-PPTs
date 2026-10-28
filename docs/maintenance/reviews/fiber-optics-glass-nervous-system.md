# 光纤：在玻璃微丝中奔跑的文明 — 维护审阅记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`947b9e44c22f84bf42d2c076f74a55086be6612d40eb043c7c70159af05c9db7`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；10 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`811c2363dfcfde28f0edb9ee57f8655705abae30bf2e4b7555fdb8c29d065c31`。

- Artifact: `ppt-collection/fiber-optics-glass-nervous-system.html`（基线保留于 Git；现已按源文件导出更新）
- Maintained source: `2026-10-28-legacy-maintenance/fiber-optics-glass-nervous-system.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Slides / style: 10 / A

## 已核查并修正

- P1 的国际数据流量比例改为 ITU 对国际数据传输的口径（超过 99%）；不再混称所有互联网流量。[ITU Global Connectivity Report 2025](https://www.itu.int/dms_pub/itu-d/opb/ind/D-IND-ICT_MDD.GCR-2025-4-PDF-E.pdf)
- P3 删除“海水过滤后可在万米海沟见海面”和 20 km 绝对视距类比，改为杂质/结构造成吸收与散射损耗、链路仍需放大或中继的机制说明。
- P4 将 G.652 常见单模光纤的零色散波长限定为“约 1310 nm”；1550 nm 的较低衰减表述限定于常见规格并保留系统条件。[ITU-T G.652](https://www.itu.int/epublications/publication/itu-t-g-652-2024-08-characteristics-of-a-single-mode-optical-fibre-and-cable)
- P6 的 500+ 系统与 140 万 km 作为 2025 年网络量级，避免写成恒定总量。[ITU Global Connectivity Report 2025](https://www.itu.int/dms_pub/itu-d/opb/ind/D-IND-ICT_MDD.GCR-2025-4-PDF-E.pdf)
- P7 删除 EDFA“量子级放大/光子对光子”误述，改为掺铒介质受激辐射与泵浦光机制。
- P8 删除无适用范围的“数千亿次/秒”探测速率，改为探测器把光信号转换为电信号并由接收电路恢复数据。
- P9 将约 30% 限定为特定空心光纤研究中的光纤传播时延下降，不外推为端到端网络时延。[Nature, hollow-core fiber link](https://www.nature.com/articles/s41377-022-00908-3)

## 验收边界

已对 10 页可见文本作定向静态复核。公式、来源栏、SVG/图片文字、所有器件规格仍需结合实际引用逐条审阅；当前阶段没有视觉验收结论。浏览器三档检查由父任务安排。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, then opened the high-density mechanism/stat pages at full size. No additional clipping, footer collision, or broken-image issue was confirmed. Directional pages were reviewed in the captured directional state; the browser QA run checks navigation and motion separately. This is a visual review record, not factual acceptance of every claim.


## 最终验收证据

完整三档报告：`.codex/qa-release-last6/approved-fiber-optics-glass-nervous-system.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。


## 宽矮窗口修复补充

触发页：3, 4, 6, 8, 9。字号按可用高度约束；移除过大的 frame 最小高度。共享字号规则覆盖整份作品，已整份复测，正文未改。
