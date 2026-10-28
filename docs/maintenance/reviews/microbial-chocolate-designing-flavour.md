# 它还不是巧克力 — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`d91ed1aaf707b9be4bb17e197971e3d38919a6e581c74593e7e9448daf57d2b0`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。13 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`f6efdc4d58b20532cd136c713a1cc9d5b191840a475a54b5920f95b46012a6b7`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/microbial-chocolate-designing-flavour.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 13
- Style: A
- English editorial title: How Microbes Shape Chocolate


## 2026-10-28 深审与源文件事实精修

已逐页读取13页实际正文与讲稿中的高风险数字。源：`2026-08-15-microbial-chocolate-designing-flavour/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P2将144–168h限为所引农场研究，非所有自然发酵唯一范围。P6原“香味还没出现”过满，改发酵既生成部分风味又准备前体，后续烘焙继续生成香气。P7的1700+记录/440种/60篇核到2022综述摘要，保留摘要口径。P9 9株=5细菌+4真菌正确，94.9%补代表性基因组预测代谢覆盖，讲稿明确10组MAG，不等于94.9%全部风味。P10训练品鉴小组的细风味特征与Madagascar参考核到原实验，仍保留受控条件及P12风土边界。

本轮核对资料：

- [2025原研究：9株、94.9%与感官验证](https://www.nature.com/articles/s41564-025-02077-6.pdf)
- [2022原始系统综述与元分析](https://pmc.ncbi.nlm.nih.gov/articles/PMC9478497/)

未完成/边界：综述摘要440，正文列447且包含部分未定种记录，存在作者内部统计口径差异；不解释为每批同时含440个物种。受控微箱与品鉴不是所有产区产业规模已实现。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-15-microbial-chocolate-designing-flavour.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P5、P9、P10（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P5 lead末尾“始”孤行，改为“风味化学继续展开”，同时避免把发酵阶段的风味变化说成尚未开始。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 13页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/microbial-chocolate-designing-flavour.html`，测试结束后SHA256复核未变：`f6efdc4d58b20532cd136c713a1cc9d5b191840a475a54b5920f95b46012a6b7`。三档逐页报告位于`.codex/qa-release-revision2/approved-microbial-chocolate-designing-flavour.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P5；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。


## 宽矮窗口修复补充

触发页：5, 6, 9。字号按可用高度约束；移除过大的 frame 最小高度。共享字号规则覆盖整份作品，已整份复测，正文未改。
