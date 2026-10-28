# 减肥药为什么改变了医学 — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。13 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`e7679b373c951fdba995e4645ead392e104818773ceb519059979ea6abe2164c`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/glp-1-beyond-weight-loss.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 13
- Style: A
- English editorial title: GLP-1: Beyond Weight Loss


## 2026-10-28 一手来源深审与源文件修订

已逐页读取13页实际文案。修订源为 `2026-08-14-glp-1-beyond-weight-loss/index.html`；未直接改 approved artifact。

- P5 STEP1 −14.9% vs −2.4%、68周；P6 SURMOUNT1 15mg −20.9% vs −3.1%、72周，均与原研究相符：[STEP1](https://www.nejm.org/doi/full/10.1056/NEJMoa2032183)、[SURMOUNT1](https://www.nejm.org/doi/full/10.1056/NEJMoa2206038)。特定人群/剂量边界保留。
- **P7实修**：SELECT原数6.5% vs 8.0%、HR0.80正确，但页面未限定研究对象。补≥45岁、既有心血管病、BMI≥27且无糖尿病；相对风险与约1.5个百分点绝对事件率差分开，不推广成全部减重人群。[SELECT原研究摘要](https://pubmed.ncbi.nlm.nih.gov/37952131/?format=pubmed)；NEJM全文直接访问403，未伪称完整读到。
- **P8实修**：63% vs34%的72周肝活检终点正确。补semaglutide用于非肝硬化、F2–F3人群，明确加速批准依赖替代终点，肝死亡/移植硬结局仍待240周随访；OSA药物为tirzepatide，不把不同药和适应证混为一谈。[FDA MASH](https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-serious-liver-disease-known-mash)、[FDA OSA](https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea)。
- **P9实修**：−17.3%、回升11.6个百分点和约三分之二正确，但属327人延长期子样本，且同时停止生活方式干预；已补上，不与全体STEP1均值混用。[原研究](https://pubmed.ncbi.nlm.nih.gov/35441470/)。
- P10永久停药16.6% vs8.2%与SELECT一致。P12 <10%是WHO2030可及性预测，不是实测覆盖率；[WHO2025新闻稿](https://www.who.int/news/item/01-12-2025-who-issues-global-guideline-on-the-use-of-glp-1-medicines-in-treating-obesity)支持。
- **P2来源修订**：370万/2024来自上述WHO2025指南新闻稿，原来源却写肥胖事实表。当前WHO2026事实表另列2023高BMI死亡与2024成人9.4亿，不能混年份/版本；保留历史口径并改来源定位，未把差异直接判成错误。

导出预检及实际暂存通过；输出 `.codex/approved-stage/2026-08-14-glp-1-beyond-weight-loss.html`。三档staged浏览器复验由主任务负责，未在此宣称通过。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P7、P8、P9（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P7/P8 lead末尾“中/亡”孤行，局部max-width由72vw放至80vw，保留试验人群和肝病硬结局边界。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 13页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/glp-1-beyond-weight-loss.html`，测试结束后SHA256复核未变：`e7679b373c951fdba995e4645ead392e104818773ceb519059979ea6abe2164c`。三档逐页报告位于`.codex/qa-release-revision2/approved-glp-1-beyond-weight-loss.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P7、P8；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。
