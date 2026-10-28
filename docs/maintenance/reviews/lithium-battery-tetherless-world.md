# 被驯服的移动能量密度 — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。10 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`397586f6fc8fbcee8aba124abf43795eaa2078387063ccdbecccd37d8613cae0`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/lithium-battery-tetherless-world.html`
- Status: Approved retained under the user-authorized refinement scope
- Verified slide count: 10
- Style: A
- English editorial title: Lithium Batteries and a Cordless World


## 2026-10-28 一手来源深审与维护源建立

全部10页实际文案已读。原候选`2026-05-16-lithium-battery-ppt/index.html`属另一版式，未覆盖。新可维护源：`2026-10-28-lithium-battery-maintenance/lithium-battery-tetherless-world.html`，先逐字复制原approved单HTML，再作下列事实修订。

原成品完整备份 `.codex/baselines/lithium-battery-tetherless-world.original.html`；SHA256：`6b557c82140b9cd6b98848ce53220bc8d559493c68bde80844786e0ef16ac108`。新源是有意修订的维护派生版，不声称与成品仍逐字一致。

- P1绝对自由/完全依赖降级。P2−3.04V是Li⁺/Li相对标准氢电极的标准还原电势，不是电池端电压；“极高电势”改极负，并限定密度最低固体金属。
- **P3–4实修**：插层并非纯物理无化学过程，寿命不保证数千次；300Wh/kg改部分高比能电芯，不能混为所有电池包。[IEA2026高比能电芯口径](https://www.iea.org/commentaries/global-battery-markets-are-growing-strongly-and-so-are-the-supply-risks)。
- **P6安全硬修**：shutdown减缓/切断离子传导不保证终止热失控。过热后隔膜仍可熔毁短路；删“连锁反应终止”保证。[Sandia隔膜研究](https://www.sandia.gov/research/publications/details/the-role-of-separators-in-lithium-ion-cell-safety-2012-07-01/)、[ORNL报告](https://www.osti.gov/servlets/purl/1963149)、[ACS实验](https://pubs.acs.org/doi/10.1021/ie900096z)。
- **P7口径硬修**：70%“全球钴资源”缺国家、年份且混淆储量/产量；改2024刚果（金）钴矿产量约76%。锂精炼60%缺对象，改2024中国锂化学品产量约70%。[USGS矿产分析](https://pubs.usgs.gov/publication/sir20255021/full)、[IEA2025关键矿产报告](https://iea.blob.core.windows.net/assets/ef5e9b70-3374-4caa-ba9d-19c72253bfc4/GlobalCriticalMineralsOutlook2025.pdf)。
- **P8实修**：“微秒级监控成百上千电芯的全部量”泛化不成立。TI具体14路电压112μs不能直接推出整包温度/通信/控制时序，改为按系统设计。[TI具体芯片示例](https://www.ti.com/lit/ml/slyp827/slyp827.pdf)。
- **P9安全硬修**：固态不能“根除枝晶起火”。2025原实验直接观察固态电池枝晶；改为可能提高比能、减少可燃液体，同时仍有枝晶/界面/热风险。未追到500Wh/kg对应实验条件，删除孤立数字，保留研究前沿而非量产承诺。[Nature Materials2025原研究](https://www.nature.com/articles/s41563-024-02094-6)。
- P10千万次/不竭动力改为往复穿梭/可反复充放。P5 LFP与高镍对比仍为定性趋势，具体寿命安全需完整设计与工况，未宣称单凭正极名称保证安全。

导出预检和实际暂存通过：`.codex/approved-stage/lithium-battery-tetherless-world.html`。原单HTML缺现代语义slide-id/讲稿结构属于历史运行时，不在本轮事实修复中重建；主任务须进行staged三档逐页视觉/交互，再决定替换成品。

- Presenter手势隔离补丁未应用：此源不提供`__pptPresenter`，不能按新一代运行时锚点强套；保留原运行时并明确跳过该补丁。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P3、P6、P7、P9（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 本轮视觉发现并修复：P3 kicker实际被截去上部；取消本页80vh最小高、压缩lead并加顶部安全区，重拍确认完整。lead改为一般正负极材料，避免层状晶格泛化及“主要是…而是在…”语病；P6安全引用短写，消除末尾“证”孤行。
- 修复后源文件重新真实浏览器加载，三档共48张局部截图中本deck的改动页均已检查，含1000px原图。证据`.codex/qa-release/visual-fixes/`及三张contact图；原冻结全页截图仍保留，不能混称为修复后的standalone。
- 下一步为整批一次重新导出暂存，由主任务更新对应不可变快照并复跑整份QA；本卡不提前写最终整份通过。

## 最终单HTML字节验收（revision2）

- 真实浏览器测试已完成，进程退出码0；本deck 10页×1600×900 / 1280×720 / 1000×560逐页验收。实际文本Range溢出、foot/nav遮挡、缺图、不可见正文、控制台/脚本/请求错误均为0；ESC仅在首档1600×900测试：本deck总览1次、选页1次均通过（本批8deck合计8次总览+8次选页）；适用pipeline的完成态几何与继续翻页断言通过。
- 测试对象为独立不可变副本`.codex/release-revision2/lithium-battery-tetherless-world.html`，测试结束后SHA256复核未变：`397586f6fc8fbcee8aba124abf43795eaa2078387063ccdbecccd37d8613cae0`。三档逐页报告位于`.codex/qa-release-revision2/approved-lithium-battery-tetherless-world.json`。
- 已实际查看最终导出字节的1000px全页contact sheet，并逐张原尺寸查看修订页P3、P6；未见源→导出后的裁切、断行或隐藏文字回归。三档新修页的source截图复核见上节，未把仅生成截图等同视觉接受。
- 这次自动化未覆盖物理投影/触控硬件，也未代替专门的presenter完整工具验收。正式成品替换由主任务统一执行；此代理未写入成品库。
