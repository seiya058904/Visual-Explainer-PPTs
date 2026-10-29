> 当前状态（2026-10-29）：用户明确审核通过，已晋级正式成品库 `ppt-collection/bridges-always-moving.html`。下文保留 2026-10-28 原审查时点，待审核措辞不代表当前状态。

# 待审核精修卡 · 桥梁

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-bridges-always-moving/`；共 11 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

保留“让运动在预料内”主题，补足强度与路径、风输入能量和材料受力的具体关系。

## 实际页内改动

P3：导力也需要强度；P4：压拉是入口，不排除弯剪扭；P5：基础传给地基，不保证所有桥都落基岩；P7：气动颤振解释为运动改变气动力、风持续注入能量，不否认风参与；P8：加阻尼后重开，不强求存在来源差异的闭桥相隔天数；P9：钢筋既可抗拉也可抗压；P10图与备注：每缆27572根/61股，两缆共12.9万km。

`docs/build/deck-10-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [WSDOT：Tacoma失效与自激运动](https://wsdot.wa.gov/TNBhistory/bridges-failure.htm)
- [Arup：千禧桥与阻尼改造](https://www.arup.com/globalassets/downloads/arup-journal/the-arup-journal-2008-issue-3.pdf)
- [金门大桥官方：每缆钢丝、股数与两缆总长](https://www.goldengate.org/bridge/history-research/statistics-data/design-construction-stats/)
- [Foster+Partners：2002重开与关闭日期叙述](https://www.fosterandpartners.com/news/millennium-bridge-reopens)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；11 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：未把课堂压拉示意提升为完整结构分析；具体桥型的荷载与基础不同。千禧桥关闭日期不同一手叙述存在差异，本轮避免给出精确相隔天数。

## 经验判断

可复用问题为“数字需带年份、分母、对象及估算边界；SVG/备注与正文须同查同改”，属于现有事实纪律与验收规则的落实。具体修订建议交主任务统一收敛至 AGENTS.md，本卡不修改共享规范。

## 本轮浏览器证据（2026-10-28）

- 1600x900: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1280x720: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1000x560: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 演讲者浏览器回归：PASS；备注滚轮与键盘隔离、备注按页保存、观众同步与重连、计时启停、宫格开关、16:9预览、普通滚轮与模拟触摸。
- 本地证据：`.codex/qa-pending-final/`、`.codex/presenter-qa/`。截图仍需逐页人工视觉复核，自动几何通过不等于最终批准。
- 观众投影物理连接、触控硬件手势和所有演讲标注工具不在上述自动化断言范围。
- 页面仍为 Pending Review，未复制到正式成品库。

## 实际截图视觉复核（2026-10-28）

- 已实际查看三档视口全部页面的30张 contact sheets 中本 deck 的3张；检查标题行数、主题节奏、图文平衡、页脚/导航安全区。pipeline 仅依据 initial / step02 / complete 三态，排除常规 pipeline.png 的翻页时序伪影。
- 另以1000×560原尺寸查看 P7、P10；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- P10 原截图 lead 最末单字“丝。”孤行，已将末句压缩为“把拉力分散到钢丝”，同步源与 deck-10 片段。重新等待字体和动画后拍摄 `bridge-p10-final.png`，实际查看确认回到两行。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-bridges-always-moving/index.html`; current source SHA-256 `a6ad15d7dda3dc312a3785ae5295f4de785ddada9e5d41536101c01a5a2e0f11`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-bridges-always-moving.html`; SHA-256 `49d5144635713257180214ff6e80a98995b4f47718acaab7122b2a065b45bd31`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 11 pages at 1600×900 / 1280×720 / 1000×560 (33 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 11 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 11 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).


## Lower-content follow-up

Width-driven type is now capped by viewport height; oversized frame minima were removed. All pages passed four dynamic viewports, four lower-content regression viewports and the re-exported offline gate. Content and Pending status are unchanged. This source supersedes the earlier layout/hash snapshot; see [repair evidence](../pending-bottom-clipping.md).
