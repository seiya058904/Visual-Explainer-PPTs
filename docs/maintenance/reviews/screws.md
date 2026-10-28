# 螺丝：把世界固定在一起 — 维护审阅记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；20 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`591c3ceae055bd5b79bdf8a11f1d2aab0850026956b2734b1e685c86c1b31909`。

- Artifact: `ppt-collection/screws.html`（基线保留，尚未替换）
- Maintained source: `2026-10-28-legacy-maintenance/screws.html`
- Status: 高风险数字与绝对因果表述已修正并导出至 `.codex/legacy-stage/`；不代表重新接受或视觉通过
- Slides / style: 20 / A

## 已核查并修正

- P8 删除通用的 80–90% 扭矩损耗和 ±30% 预紧偏差数字，改为说明摩擦占用扭矩、结果取决于润滑/表面/连接设计；扭矩角度法不再宣称通用“最佳”。
- P13 删除“疲劳是紧固件失效第一原因”无范围排名，改为循环载荷可使裂纹逐步扩展的机制表述。
- P16 修正波音 787 数字：波音说的是约 230 万个整机零部件，包含紧固件到大型结构件，不是 230 万个紧固件。[Boeing supplier-quality backgrounder](https://787updates.newairplane.com/Boeing787Updates/media/Boeing787Updates/Aviation%20Experts/BKG_Managing-supplier-quality_1.pdf)
- P17 NASA-STD-5020 是螺栓连接设计与分析标准；“每颗螺丝独自承担密封、安全”一类修辞不能代替适用连接分析，页面仍以原则性说明为主。[NASA-STD-5020](https://standards.nasa.gov/standard/NASA/NASA-STD-5020)
- 历史页 Whitworth/Sellers 的 1841/1864 时间与 55°/60°几何主张保留为进一步逐项核查目标；本轮未发现需要改动的明显冲突。[ASME Whitworth landmark](https://www.asme.org/about-asme/engineering-history/landmarks/226-whitworth-standard-screw-thread-system), [ASME Sellers landmark](https://www.asme.org/about-asme/engineering-history/landmarks/211-sellers-standard-screw-thread-system)

## 验收边界

已对 20 页可见文字作一次全页扫描并深入复核 P8、P13、P16–17。其余标准尺寸、材料温度、疲劳案例及工程建议仍需逐项核对对应版本和适用范围。视觉检查与三档浏览器 QA 状态见下方更新；其余事实边界仍按本文记录。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, including full-size review of the quote, fatigue, and aerospace/standard pages. The P6 quote was locally resized to fit fallback fonts; official three-viewport stage QA found zero geometry flags, page/console errors, or failed resources across all 20 pages. Remaining engineering claims and standards applicability still require the cited-source checks described above; this is not blanket factual acceptance.


## Three-viewport QA update — 2026-10-28

The maintained standalone stage completed official browser QA across all 20 slides at 1600×900, 1280×720, and 1000×560: zero geometry flags, page errors, console errors, or failed resources; the 1600×900 overview check passed. Full-size review confirms the resized P6 quote is centered and fully readable at all three sizes. Factual and engineering-scope checks remain as described above.

## 最终验收证据

完整三档报告：`.codex/qa-inventory-fixes/stage-qa/approved-screws.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
