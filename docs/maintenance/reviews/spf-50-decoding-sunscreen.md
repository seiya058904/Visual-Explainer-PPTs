# SPF 50不是 50 倍时间 — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。14 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`b5900e0d72f99067ddb2acc58735a30343ad4613af769f49e734933ad51d07eb`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/spf-50-decoding-sunscreen.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 14
- Style: A
- English editorial title: SPF 50: What the Sunscreen Number Means


## 2026-10-28 一手来源深审与源文件修订

14页全文已读；修订 `2026-08-15-spf-50-sunscreen-decoding/index.html`，未改成品。

- P1/P3“剂量比不是时间倍数”符合[FDA SPF定义](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/sun-protection-factor-spf)。
- **P4小修**：2mg/cm²正确；FDA等待要求为至少15分钟，页面已写≥15min/至少15分钟。[21CFR201.327(i)(4)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201/subpart-G/section-201.327)。
- **P5–7实修**：原“SPF50=1/50”把量纲/对象省掉。改“SPF50，约1/50通过”，正文与百分比明确为标准条件下的红斑加权紫外近似关系，不是所有波段光子数或现实中固定98%防护。97/98/99及3.3/2/1的算术关系正确；备注“不是两倍防护”过满，改为剂量防护倍数可翻倍，但不能说多挡100%紫外。
- P8广谱UVA+UVB的方向正确，不能扩展为任何标签都覆盖所有波段等量。P10少量使用会失去标称SPF正确；25–50%是研究概括，不是个体定律，当前[AAD页面](https://www.aad.org/media/stats-sunscreen)写20–50%，不同汇总区间存在差异，未把25–50判为统一硬错误。
- P11约2小时、游泳/出汗后补涂符合[FDA](https://www.fda.gov/drugs/understanding-over-counter-medicines/sunscreen-how-help-protect-your-skin-sun)。P12 40/80分钟限定为美国FDA规定水浸测试，防水禁词与真实物理绝不透水不同，正文补清监管辖区。[21CFR201.327(a),(g)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-201/subpart-G/section-201.327)。P13 SPF30+与广谱建议符合AAD。

预检和实际导出暂存通过：`.codex/approved-stage/2026-08-15-spf-50-sunscreen-decoding.html`；staged三档浏览器与交互复验由主任务执行。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P4 pipeline-complete、P5、P7、P12（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P7 lead末字“慢”孤行，重写为更高SPF仍有增益、过滤比例提升递减。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 14页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/spf-50-decoding-sunscreen.html`，测试结束后SHA256复核未变：`b5900e0d72f99067ddb2acc58735a30343ad4613af769f49e734933ad51d07eb`。三档逐页报告位于`.codex/qa-release-revision2/approved-spf-50-decoding-sunscreen.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P7；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。
