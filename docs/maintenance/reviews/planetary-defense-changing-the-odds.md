# 它只需要20 米 — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`2e11461e6d4e04a0ee1d7114189c4f88aeb1d09a916d0a3541c83526f1a94b67`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。13 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`d82a125dd4b2df41f2739fdc3774569ae29507b52e01e7a165f4d0ee609b6180`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/planetary-defense-changing-the-odds.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 13
- Style: A
- English editorial title: Planetary Defense: Changing the Odds


## 2026-10-28 一手来源深审与源文件修订

已逐页读取13页；修订 `2026-08-14-planetary-defense-changing-the-odds/index.html`，未直接改成品。

- P1–2的17–20m、440kt和太阳方向15°有[CNEOS原始2013分析](https://cneos.jpl.nasa.gov/news/fireball_130301.html)支持；均为约值。
- **P3–4实修**：39,123/873/11,343未追到对应2025.12官方快照，不能仅凭宽泛NASA标签核实。总数改为[ESA2026年1月公报](https://neo.ssa.esa.int/documents/d/guest/newsletter-january-2026)的40,529；大天体改[NASA CNEOS](https://cneos.jpl.nasa.gov/stats/)已发现>90%定性比例。140m目录改为[NASA PDCO2025演示](https://www.hou.usra.edu/meetings/sbagjune2025/presentations/Tuesday/1045_Fast.pdf)引用的2024年底约45%已发现、55%尚未发现，逐页标清年份，未伪造精确旧数。
- **P5实修**：标题不再把0.004%叫数学零；改降到可忽略。NASA当前资料支持无显著地球风险。[NASA YR4](https://science.nasa.gov/solar-system/asteroids/2024-yr4-facts/)。
- **P7–8实修**：初报32分钟更新为约33分钟，约11h55→11h22；撞击实测约579kg和6.1449km/s（22,122km/h），来自[NASA NTRS](https://ntrs.nasa.gov/citations/20230000707)。DART实测是双小行星轨道周期变化，不能说直接测得多年后避开地球；已纠正pipeline。[2024 NASA更新](https://www.nasa.gov/missions/dart/nasa-study-asteroids-orbit-shape-changed-after-dart-impact/)。
- P9 Hera改2024已发射、2026–2027调查，[ESA任务页](https://www.esa.int/Space_Safety/Hera/Hera_mission_overview)。
- **P11实修**：1%不是单一全球按钮。IAWN预警另有>10m尺寸；SMPAG任务规划是>50m、50年内、>1%；地面准备是>20m、20年内、>10%。[UN-SPIDER正式门槛](https://un-spider.org/disaster-type/near-earth-objects)。
- **P12实修**：五年发现≥2/3的分母是**尚未检出**的>140m总体，不是全部，依[NASA FY2027预算](https://www.nasa.gov/wp-content/uploads/2026/04/fiscal-year-2027-full-budget-request.pdf)。NET2027.09获[任务页](https://science.nasa.gov/mission/neo-surveyor/)支持；预算基线“最迟2028.06”是不同进度口径，非同义日期。

导出预检/暂存通过：`.codex/approved-stage/2026-08-14-planetary-defense-changing-the-odds.html`。精确计数若需恢复，必须保留其官方数据快照。staged视觉与交互由主任务复验。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P7、P10、P11 pipeline-complete、P12（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 上述视觉复核未发现需新增修改的构图/文字缺陷；整份机器QA结果以主任务最终报告为准。

## Final overview-selection supplement — 2026-10-28

The earlier final three-viewport report recorded overview opening but predated the selection assertion. Targeted real Chromium testing at 1600×900 now opened ESC overview from the first page, closed it, advanced by keyboard to page 2, opened overview again and clicked the first card. The index returned from 1 to 0 and the overview closed; no page errors. Current artifact SHA-256 d82a125dd4b2df41f2739fdc3774569ae29507b52e01e7a165f4d0ee609b6180 was unchanged and matched the tested publication receipt. Evidence: .codex/final-overview-selection/results.json. This supplements only overview interaction; no geometry or factual re-review is claimed.


## 宽矮窗口修复补充

触发页：13。字号按可用高度约束；移除过大的 frame 最小高度。共享字号规则覆盖整份作品，已整份复测，正文未改。
