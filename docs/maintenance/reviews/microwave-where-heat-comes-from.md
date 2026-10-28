# 饭热了，盘子呢？ — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`0374d3e25dc0fe4556911950c3d5aca785992c96608912b704e985c3ba3eba9b`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。14 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`52669e3024812db5de54f47ec4eaeb8fd3b43c64c2004ba92b1a72d5b6983b56`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/microwave-where-heat-comes-from.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 14
- Style: A
- English editorial title: Where the Microwave Heat Comes From


## 2026-10-28 深审与源文件事实精修

已逐页读取14页实际正文与讲稿中的高风险数字。源：`2026-08-15-microwave-where-heat-comes-from/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P3 2.45GHz对应自由空间波长约12.24cm，原12.2cm正确。P11将“盘子必须转”改“转盘帮助平均差异”，不排除无转盘设计；P10热点不只由场决定，也受形状组成影响。P9表面先/中心后改为受尺寸和组成限制的较深处传导，不宣称所有食品固定从表面依次加热。P12传统占空比而非所有变频机型的限定保留。

本轮核对资料：

- [FDA微波炉材料与安全](https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-ovens)
- [USDA微波食品安全原资料](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/microwave-ovens-and-food-safety)
- [原建模研究作者稿索引](https://www.researchgate.net/publication/248515349_Modeling_the_heating_uniformity_contributed_by_a_rotating_turntable_in_microwave_ovens)

未完成/边界：35秒/+40%限特定模型，不能泛化家用效果；本轮找到原论文摘要与后续论文引用，未完整复算模型。水10.3/冰0.003与温度条件可追到食品材料资料表，但未独立取得最初介电测量原始数据；保留为单组数据，不称材料常数。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-15-microwave-where-heat-comes-from.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

## 浏览器发现后的局部几何复修

- P9压缩图注与行距，重写callout；P11限制图像为17vh、缩短对比行与35秒模型边界行，保留约40%特定模型口径。
- 基于主任务最终暂存截图中实际页脚遮挡/溢出修复；未以全局CSS或隐藏溢出来掩盖。已对改动页从源重新加载、等待字体/动效稳定，生成三档本地截图并核对目标页码；证据 `.codex/qa-approved-final/*-fixed.png`。
- 本地探针检查相关内容与foot安全区；最终standalone整份三档与交互回归由主任务在下一版暂存上复跑，本卡不提前宣称通过。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P9、P11（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 上述视觉复核未发现需新增修改的构图/文字缺陷；整份机器QA结果以主任务最终报告为准。

## Final overview-selection supplement — 2026-10-28

The earlier final three-viewport report recorded overview opening but predated the selection assertion. Targeted real Chromium testing at 1600×900 now opened ESC overview from the first page, closed it, advanced by keyboard to page 2, opened overview again and clicked the first card. The index returned from 1 to 0 and the overview closed; no page errors. Current artifact SHA-256 52669e3024812db5de54f47ec4eaeb8fd3b43c64c2004ba92b1a72d5b6983b56 was unchanged and matched the tested publication receipt. Evidence: .codex/final-overview-selection/results.json. This supplements only overview interaction; no geometry or factual re-review is claimed.


## 宽矮窗口修复补充

触发页：10。问题页保留底部安全距离；P10 标题高度上限、压缩结论条内外间距。共享字号规则覆盖整份作品，已整份复测，正文未改。
