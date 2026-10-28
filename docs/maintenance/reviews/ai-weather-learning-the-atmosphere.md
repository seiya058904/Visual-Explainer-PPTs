# 天气预报开始不再只靠方程 — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`49a36e76bcc339f55e61437c07c9843041d1206c577acf2ec61aa810a52af484`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。13 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`e775612d3f1470dd73975b89438b75d216015e35b51a1da206f85846f02745e4`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/ai-weather-learning-the-atmosphere.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 13
- Style: A
- English editorial title: How AI Learns the Atmosphere


## 2026-10-28 深审与源文件事实精修

已逐页读取13页实际正文与讲稿中的高风险数字。源：`2026-08-14-ai-weather-learning-the-atmosphere/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P2给6000万质控观测补“每日”分母；P6采用正式Science论文90%/1380检验目标，替换未定位到同版本的89.3%/2760；讲稿同改。P7将约千倍能耗优势限定单次预报，不包含训练与数据同化；P8成员一致不保证准确，补集合校准边界。P9 NOAA16天/约40分钟/0.3%核到原机构发布，保持；气旋路径与强度区分保留。

本轮核对资料：

- [ECMWF观测统计](https://www.ecmwf.int/en/about/media-centre/key-facts-and-figures)
- [GraphCast原论文摘要](https://pubmed.ncbi.nlm.nih.gov/37962497/)
- [ECMWF2025业务化与能耗](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)
- [ECMWF51成员与2025业务化日期](https://www.ecmwf.int/en/about/media-centre/stories/news-highlights-2025)
- [NOAA AIGFS原发布](https://www.noaa.gov/news-release/noaa-deploys-new-generation-of-ai-driven-global-weather-models)

未完成/边界：性能与能耗均属当时版本、硬件和基线；不是所有区域天气/风暴强度都超过传统模型。论文版本差异可导致指标不同，本轮统一到正式发表摘要，未将两个分母硬拼。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-14-ai-weather-learning-the-atmosphere.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

## 浏览器发现后的局部几何复修

- P10收紧本页顶部、双栏内边距与meta间距，保留路径/强度边界。
- 基于主任务最终暂存截图中实际页脚遮挡/溢出修复；未以全局CSS或隐藏溢出来掩盖。已对改动页从源重新加载、等待字体/动效稳定，生成三档本地截图并核对目标页码；证据 `.codex/qa-approved-final/*-fixed.png`。
- 本地探针检查相关内容与foot安全区；最终standalone整份三档与交互回归由主任务在下一版暂存上复跑，本卡不提前宣称通过。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P3 pipeline-complete（1600）、P6、P9、P10（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P6统计卡说明末字“例”孤行，压缩为“1380项检验中优于HRES的比例”，分母与比较对象保留。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 13页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/ai-weather-learning-the-atmosphere.html`，测试结束后SHA256复核未变：`e775612d3f1470dd73975b89438b75d216015e35b51a1da206f85846f02745e4`。三档逐页报告位于`.codex/qa-release-revision2/approved-ai-weather-learning-the-atmosphere.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P6；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。


## 宽矮窗口修复补充

触发页：2, 6, 8, 11, 13。字号按可用高度约束；移除过大的 frame 最小高度；问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
