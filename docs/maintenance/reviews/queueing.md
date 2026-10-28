# 排队：现代社会最安静的公平机制 — 维护审阅记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`6fa4968174f335a4bac8f47d6e573422f6d2fa0f36a0caf6d188bb4145dd1b6e`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；10 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`096eb75225470d4857a3788d5f1cc50c048e22e0721649fecfd505dc5320e710`。

- Artifact: `ppt-collection/queueing.html`（基线保留于 Git；现已按源文件导出更新）
- Maintained source: `2026-10-28-legacy-maintenance/queueing.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Slides / style: 10 / A

## 已核查并修正

- P5 的 Little 定律现写明稳定运行且相关平均值存在时，系统平均人数 = 平均到达率 × 平均系统逗留时间，避免把 W 误作单纯排队时间。[Little's law definition](https://mathworld.wolfram.com/LittlesLaw.html)
- P6 的英格兰 A&E 数据已核对：2024 年 10 月共 2,356,189 次就诊，73.0% 在 4 小时内入院、转院或离院。指标不是“4 小时内首次看诊”。[NHS England, December 2024 operational update](https://www.england.nhs.uk/long-read/operational-performance-update-december-2024/)
- 单队列减轻选择焦虑、队列规则帮助建立公平感等页面定位为设计论点/经验观察，不作为普适因果定律；静态文本未附实验效应量。
- Disney 虚拟队列内容描述为具体服务方式，不推断所有园区、时段或项目都可用。

## 验收边界

已对 10 页可见文字、定义和 NHS 数值作静态复核。来源标签 Columbia、OECD、ScienceDirect 与 Disney 的具体出处未在每页建立可点开的文献定位。视觉检查与三档浏览器 QA 状态见下方更新；其余事实边界仍按本文记录。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, and opened the Little’s Law, fairness, and queue-management pages at full size. No additional clipping, footer collision, or broken-image issue was confirmed. A few contact-sheet frames are directional states; browser QA checks navigation and motion separately. This is a visual review record, not factual acceptance of every claim.


## 最终验收证据

完整三档报告：`.codex/qa-release-last6/approved-queueing.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。


## 宽矮窗口修复补充

触发页：2, 3, 5, 7, 8, 9。问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
