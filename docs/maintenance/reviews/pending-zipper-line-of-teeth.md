# 待审核精修卡 · 拉链

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-zipper-line-of-teeth/`；共 11 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

保持几何互锁主线，纠正整条均匀承重和通道开合方向；把无人要改为逐步普及。

## 实际页内改动

P1–2：不称拉链独自承担背包全部重量；P3：互锁主要靠形状，不声称完全无关摩擦；P5：相邻链齿、布带、缝线共同传力，不宣称均匀受力、通用齿密度或几十公斤承载；P6：闭合由分开的两排齿进入Y通道汇合，反向拆开；P7–8：坏齿可能破坏闭合，不宣称任何一齿瞬坏等于数学串联；P9–10：1923命名有来源，1937时尚推广非此前从未用于衣服。

`docs/build/deck-05-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [YKK：链齿、滑块、布带与Y通道](https://www.ykk.com/english/ykk/tech/01.html)
- [Smithsonian：1913/1917和1937节点](https://blog.library.si.edu/blog/2010/05/03/the-up-an-down-history-of-the-zipper/)
- [MIT Lemelson：1923命名及一战用途](https://lemelson.mit.edu/resources/whitcomb-judson)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；11 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：具体型号承载力需产品测试；串联系统页仅保留“局部损坏可能破坏闭合”的教学模型，不能用于可靠度数值计算。

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
- 另以1000×560原尺寸查看 P5/P6 pipeline-complete、P8；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-zipper-line-of-teeth/index.html`; current source SHA-256 `5e26a1067afa38c6eef9d738799ce95f6dba70ec9837d0e73e58ca0ef460761d`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-zipper-line-of-teeth.html`; SHA-256 `7d19583592bd8e61b4bd406b44e68ef41bed1ea5129d375e2206855fd7be8da2`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 11 pages at 1600×900 / 1280×720 / 1000×560 (33 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 11 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 11 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).
