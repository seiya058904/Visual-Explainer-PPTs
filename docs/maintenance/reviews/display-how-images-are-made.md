# 画面其实不存在 — 深审与交付记录

> 最新布局复验：本项审查通过，无需改动。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`fbe35300bb744e7e4bd0c38f9c74ab4a327e2ffc234ff20f323f7e09e1dfe8e9`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。15 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`fbe35300bb744e7e4bd0c38f9c74ab4a327e2ffc234ff20f323f7e09e1dfe8e9`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/display-how-images-are-made.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: A
- English editorial title: How Screens Build an Image


## 2026-10-28 深审与源文件事实精修

已逐页读取15页实际正文与讲稿中的高风险数字。源：`2026-08-15-display-how-images-are-made/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P2算术3840×2160=8294400与刷新周期1000/60、/144、/240核算正确。P4改“三种光混出丰富颜色”，避免RGB覆盖全部可见世界；P6偏振片选择偏振方向，非光传播方向。P10将1ms限定具体GtG/MPRT测量，不能把所有标称1ms当像素灰阶转换，更不等于刷新或输入延迟。P3已用“典型”限定RGB结构；LCD/OLED、MiniLED背光、VRR与HDR主线保留。

本轮核对资料：

- [MSI原厂：GtG/MPRT是不同规格](https://www.msi.com/support/technical_details/MNT_Perf_Product_Responding_Speed)
- [VESA DisplayHDR](https://displayhdr.org/)

未完成/边界：4K这里指3840×2160 UHD，非所有电影4K格式；RGB子像素可有不同排列，HDR不只峰值亮度。未测具体面板的过冲、响应分布与色域。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-15-display-how-images-are-made.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P9、P10、P11（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 上述视觉复核未发现需新增修改的构图/文字缺陷；整份机器QA结果以主任务最终报告为准。

## Final overview-selection supplement — 2026-10-28

The earlier final three-viewport report recorded overview opening but predated the selection assertion. Targeted real Chromium testing at 1600×900 now opened ESC overview from the first page, closed it, advanced by keyboard to page 2, opened overview again and clicked the first card. The index returned from 1 to 0 and the overview closed; no page errors. Current artifact SHA-256 fbe35300bb744e7e4bd0c38f9c74ab4a327e2ffc234ff20f323f7e09e1dfe8e9 was unchanged and matched the tested publication receipt. Evidence: .codex/final-overview-selection/results.json. This supplements only overview interaction; no geometry or factual re-review is claimed.


## 宽矮窗口修复补充

本轮未改源与成品；两档动态与两档静态逐页检查通过。
