# 发动机消失了，人声却还在 — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。15 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`7a552eb77bc240e19dad0a6f6f8b682c61e17e44a08d464c462d213f02b42cdf`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/active-noise-cancellation-fighting-sound-with-sound.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: A
- English editorial title: How Noise Cancelling Headphones Make Silence


## 2026-10-28 深审与源文件事实精修

已逐页读取15页实际正文与讲稿中的高风险数字。源：`2026-08-15-active-noise-cancellation-fighting-sound-with-sound/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P6核实≤20μs源自Sony早期数字降噪研发，改掉“开发中”时态；P10的2×改为2层，避免暗示性能翻倍；P11改为密封泄漏会削弱控制、算法只能有限适应。其余逐页机制叙事保持。

本轮核对资料：

- [Sony原始研发访谈：20μs设计目标与2008数字化](https://www.sony.com/en/SonyInfo/technology/stories/entries/interview_de_asada/)

未完成/边界：该延迟目标不是所有耳机实测规格；普通ANC不能自动视为认证听力防护，原P14边界保留。未做具体产品分频衰减或延迟实测。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-15-active-noise-cancellation-fighting-sound-with-sound.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P1、P3、P6、P10（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P3原h2三行，改为“两个声音，/也能更安静”。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 15页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/active-noise-cancellation-fighting-sound-with-sound.html`，测试结束后SHA256复核未变：`7a552eb77bc240e19dad0a6f6f8b682c61e17e44a08d464c462d213f02b42cdf`。三档逐页报告位于`.codex/qa-release-revision2/approved-active-noise-cancellation-fighting-sound-with-sound.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P3；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。
