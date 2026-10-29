> 当前状态（2026-10-29）：用户明确审核通过，已晋级正式成品库 `ppt-collection/air-conditioning-moving-heat.html`。下文保留 2026-10-28 原审查时点，待审核措辞不代表当前状态。

# 待审核精修卡 · 空调

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-air-conditioning-moving-heat/`；共 12 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

把“房间没变冷”改为可观察的降温事实，再解释热量搬运；能效例子用同一能量账闭合。

## 实际页内改动

P1–2：修正冷不存在/房间没变冷，明确出风与降温；P3–5：补热自发方向和排热中电能；P6–8：删除除湿占一半、蒸发永远第一等无依据比例，COP 三卡统一成输入 1 / 室内吸热 3–5 / 室外排热 4–6；P9：2018 情景预测与全球总用电约10%分母；P11：日本环境省制冷上调1℃约13%的限定示例；结尾与备注同步。

`docs/build/deck-01-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [DOE：制冷是室内移热到室外](https://www.energy.gov/energysaver/articles/energy-saver-101-home-cooling-infographic)
- [PNNL：循环与效率定义](https://basc.pnnl.gov/resource-guides/air-conditioning)
- [IEA：2018原报告，2016与2050基准情景](https://iea.blob.core.windows.net/assets/0bb45525-277f-4c9c-8d0c-9c0cb5e7d525/The_Future_of_Cooling.pdf)
- [日本环境省：制冷约13%与制热约10%不同](https://ondankataisaku.env.go.jp/coolchoice/setsuden/office/saving01.html)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；12 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：COP 3–5 是演算例，不承诺所有机型；26℃与30℃比较取决于风速、着衣及湿度。

## 经验判断

可复用问题为“数字需带年份、分母、对象及估算边界；SVG/备注与正文须同查同改”，属于现有事实纪律与验收规则的落实。具体修订建议交主任务统一收敛至 AGENTS.md，本卡不修改共享规范。

## 本轮浏览器证据（2026-10-28）

- 1600x900: 12页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1280x720: 12页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1000x560: 12页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 演讲者浏览器回归：PASS；备注滚轮与键盘隔离、备注按页保存、观众同步与重连、计时启停、宫格开关、16:9预览、普通滚轮与模拟触摸。
- 本地证据：`.codex/qa-pending-final/`、`.codex/presenter-qa/`。截图仍需逐页人工视觉复核，自动几何通过不等于最终批准。
- 观众投影物理连接、触控硬件手势和所有演讲标注工具不在上述自动化断言范围。
- 页面仍为 Pending Review，未复制到正式成品库。

## 实际截图视觉复核（2026-10-28）

- 已实际查看三档视口全部页面的30张 contact sheets 中本 deck 的3张；检查标题行数、主题节奏、图文平衡、页脚/导航安全区。pipeline 仅依据 initial / step02 / complete 三态，排除常规 pipeline.png 的翻页时序伪影。
- 另以1000×560原尺寸查看 P8、P9、P11；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- 可读性边界：1000px下SVG的次级标注/来源字较小；主体结论可读，但未把所有图内小字判为投影距离可读。图中文字尺寸的进一步改善及最终验收交主任务收敛。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-air-conditioning-moving-heat/index.html`; current source SHA-256 `be5d3c55200c99125998673518a164a884ed9113150538779327318f26841257`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-air-conditioning-moving-heat.html`; SHA-256 `8a9bf6940a5a49b44d1428acd4b1661c4ac3660fc4b999eaac5641e40e9f4993`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 12 pages at 1600×900 / 1280×720 / 1000×560 (36 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 12 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 12 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).


## Lower-content follow-up

Width-driven type is now capped by viewport height; oversized frame minima were removed. All pages passed four dynamic viewports, four lower-content regression viewports and the re-exported offline gate. Content and Pending status are unchanged. This source supersedes the earlier layout/hash snapshot; see [repair evidence](../pending-bottom-clipping.md).
