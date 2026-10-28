# 电影的艺术：把时间制造成梦 — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。15 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`fd34bc268eeff06ba026066c8cbcfe39926d65f21a4d81caa6f11896fb6d7d67`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/the-art-of-cinema.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: A
- English editorial title: The Art and System of Cinema


## 2026-10-28 深审与源文件事实精修

已逐页读取15页实际正文与讲稿中的高风险数字。源：`2026-05-14-the-art-of-cinema/the-art-of-cinema.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P3与P15修正“完整美国默片不足20%”：2013 LOC研究1912–1929美国默片长片约25%完整存世；14%是原始35mm版本口径，不能混用。P15删除未追到相同统计总体的1950年前一半电影散失数。P14明确2022《让娜·迪尔曼》第一是影评人榜，非导演榜。其余为制作流程与艺术阐释，无伪造新增数字。

本轮核对资料：

- [LOC原始存世研究](https://www.loc.gov/static/programs/national-film-preservation-board/documents/pub158.final_version_sept_2013.pdf)
- [BFI2022官方影评人榜](https://www.bfi.org.uk/sight-and-sound/greatest-films-all-time)

未完成/边界：25%是2013调查定义下完整存世，包括不同格式，不是原始胶片保存率或2026实时追踪。艺术判断不作为可量化科学结论验收。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/the-art-of-cinema.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

## 浏览器发现后的局部几何复修

- P1副标题重写为一行并放宽可用宽度，收紧封面间距；P2压缩右栏段落/引用；P3缩短LOC完整存世口径来源行并减少间距；P4局部行距；P6四卡改一排、引用简写；P8卡片大字与区块间距局部收紧。
- 基于主任务最终暂存截图中实际页脚遮挡/溢出修复；未以全局CSS或隐藏溢出来掩盖。已对改动页从源重新加载、等待字体/动效稳定，生成三档本地截图并核对目标页码；证据 `.codex/qa-approved-final/*-fixed.png`。
- 本地探针检查相关内容与foot安全区；最终standalone整份三档与交互回归由主任务在下一版暂存上复跑，本卡不提前宣称通过。

- Presenter手势隔离补丁未应用：此源不提供`__pptPresenter`，不能按新一代运行时锚点强套；保留原运行时并明确跳过该补丁。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P6、P8 pipeline-complete、P15，及下列新修页（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P5/P13 h1三行重写为两行；P9“决/定”语义断开改为“摄影决定/你看见什么”；P12 h2第三行孤字“前”改为两行；P10长引用的自动“变成”孤行重写为三个完整语义段；P15压缩正文，保留LOC2013、1912–1929、25%完整存世的统计范围，14%格式分母差异留在审计边界中。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 15页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/the-art-of-cinema.html`，测试结束后SHA256复核未变：`fd34bc268eeff06ba026066c8cbcfe39926d65f21a4d81caa6f11896fb6d7d67`。三档逐页报告位于`.codex/qa-release-revision2/approved-the-art-of-cinema.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P5、P9、P10、P12、P13、P15；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。
