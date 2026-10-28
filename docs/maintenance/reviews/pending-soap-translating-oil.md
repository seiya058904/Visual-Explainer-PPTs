# 待审核精修卡 · 肥皂

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-soap-translating-oil/`；共 11 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

把“移除”和“杀灭”从绝对对立改为主要机制的区分；20秒回到充分覆盖搓洗。

## 实际页内改动

P3：普通皂不需额外抗菌配方，但不说绝不破坏微生物；P5：胶束/乳化示意不称油滴变成可溶球；P6：纠正20秒是胶束形成阈值的虚构机制；P7：删除细菌死于下水道，限定FDA2016规则；P8备注与SVG保留包膜机制边界；P9：数千年措辞；P10：删酒精必被有机物消耗及移除不挑所有污物的绝对话；最后页补有意义的结束转场。

`docs/build/deck-02-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [CDC：洗手时长、移除与皂液作用](https://www.cdc.gov/clean-hands/faq/)
- [CDC：20秒证据与FDA2016规则范围](https://www.cdc.gov/clean-hands/data-research/facts-stats/)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；11 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：胶束图为教学示意，不代表所有油滴尺寸或包膜病毒都在任意皂液浓度下即时失活；公元前2800年历史叙述未在本轮重查原始考古文献。

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
- 另以1000×560原尺寸查看 P5 pipeline-complete、P6、P8；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- 可读性边界：1000px下SVG的次级标注/来源字较小；主体结论可读，但未把所有图内小字判为投影距离可读。图中文字尺寸的进一步改善及最终验收交主任务收敛。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

### 图内小字复修

- 实际1000×560截图发现P8次级标注偏小后，逐张调整对应SVG：机制/数据字提升至30px viewBox字号，缩短标签并保留关键数值和适用条件；非批量全局CSS替换。
- 已实际查看新的1000px原图 `.codex/qa-approved-final/soap-p8-1000-fixed.png`，机制标签清楚、无裁边；此证据替代前述对应页小字可读性的遗留项。图内来源仍按次级层级呈现，不等于投影硬件认证。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-soap-translating-oil/index.html`; current source SHA-256 `a3bfb0ac456b55c7c816554f910641efb9dc9a97489e8f5cea57c1edfd8a0af4`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-soap-translating-oil.html`; SHA-256 `47f14214f61f16ac67435fa5b5f5d8b0830eb8c1a88aa7702f2e2db9d73a96b7`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 11 pages at 1600×900 / 1280×720 / 1000×560 (33 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 11 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 11 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).


## Lower-content follow-up

Width-driven type is now capped by viewport height; oversized frame minima were removed. All pages passed four dynamic viewports, four lower-content regression viewports and the re-exported offline gate. Content and Pending status are unchanged. This source supersedes the earlier layout/hash snapshot; see [repair evidence](../pending-bottom-clipping.md).
