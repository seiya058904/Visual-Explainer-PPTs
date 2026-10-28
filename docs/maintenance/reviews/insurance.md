# 保险：人类如何给不确定性定价 · Insurance — 深度维护审阅

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`268a6c69fb813bcb482a6f60242cf167be0a02a72cffb7f6a8d8b6ed8367d7a6`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。15 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`0f2a990f79841f8754f930f6c110dc409d63203e3d6180d4ad584756ca31beab`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- 源文件：`2026-10-28-legacy-maintenance/insurance.html`
- 发布产物：`ppt-collection/insurance.html`（已由维护源规范导出，与验收字节一致）
- 原认可状态：Approved 保留；本记录不冒充新一轮用户认可。
- 页数：15。原件备份与 SHA-256：`.codex/baselines/insurance.original.html*`。
- 保留原 Style A 配色、图文节奏与运行时；只做事实、措辞、标题与高风险局部维护。

## 逐页叙事与画面判断

| 页 | 本页作用 / 标题锚点 | 审阅决定 |
|---|---|---|
| 01 | 保险：人类如何 给不确定性定价 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 02 | 机制 / 对比 / 结构页 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 03 | 个体不可预测， 群体可以统计。 | 大数法则补相似风险/相关性可控；灾害相关损失不能被简单平均掉。 |
| 04 | 保费不只覆盖赔款 | 整页纠错：保费≠概率×损失×时间；三卡改预期赔款、费用、风险资本。 |
| 05 | Ten thousand people. One shared shock absorber. | ¥100为一年期人均纯保费教学例，明确未含费用/波动。 |
| 06 | 为什么不是人人交一样的钱？ | 风险定价仅为机制概括，实际产品受合同/监管约束。 |
| 07 | If it is not defined, it cannot be priced. | 合同四要素保留；以条款限定而非绝对承诺。 |
| 08 | 保险不是为了覆盖所有小麻烦。 | 免赔额说明保留，不等于全部大损失必赔。 |
| 09 | A car is metal. Auto insurance prices behavior. | $1,438/+14.42%与NAIC2022/2023报告核对。 |
| 10 | When repair becomes expensive, risk becomes expensive. | $6,113/$7,191/+17.6%为碰撞险每次索赔损失，非保费。 |
| 11 | Health insurance prices biology, medicine and time. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 12 | Life is priceless. Dependents still need numbers. | 删除与寿险保障叙事无关、口径未核实的OECD增长数字，改保障责任。 |
| 13 | 当风险变成 城市尺度 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 14 | Uninsured loss does not disappear. | 3180亿/1810亿/57%明确仅自然灾害，不含人祸；181/318≈56.9%。 |
| 15 | 风险仍然存在， 损失可以分担。 | 三行结语改两行“风险仍然存在，损失可以分担”。 |

## 事实证据与边界

| 页面 | 一手依据 / 核对对象 | 来源 |
|---|---|---|
| P03–08 | NAIC pure premium,expenses,coverage glossary | [原始机构/论文](https://content.naic.org/glossary-insurance-terms) |
| P04 | CAS ratemaking losses+expenses+profit | [原始机构/论文](https://www.casact.org/sites/default/files/2021-03/5_complete_textref.pdf) |
| P09–10 | NAIC auto figures and definition | [原始机构/论文](https://content.naic.org/article/naic-releases-20222023-auto-insurance-database-report) |
| P14 | SwissRe sigma1/2025 natural catastrophe losses | [原始机构/论文](https://www.swissre.com/dam/jcr%3A46617c8b-98a4-4d54-b259-f4bdcbaab0b8/sri-sigma-natural-catastrophes-1-2025.pdf) |

## 验证记录

- 原发布物375张基线中的本deck逐页contact sheet已人工阅读，识别其pipeline常规截图时序缺陷，未把重复页当成缺页。
- 本轮真实Chromium：每页在1000×560、1280×720、1600×900等待字体与2.15秒入场后截图；全部七份合计125页/375视图；浏览器无pageerror；初轮几何探针375视图0越界提示。
- 本deck三档稳定态全页contact sheet已人工检查，较大两档也核对构图、换行与底部留白。最后18个变更页面另外复截三档（共54视图、0几何提示、0pageerror），实际页码经 `__currentSlideIndex` 核对，记录在 `.codex/legacy-seven-shots/geometry-final-delta.json`。
- `export-standalone.py --check-only` 已通过；导出只写 `.codex/legacy-seven-stage/`。
- 固定字节的正式pipeline/翻页/ESC报告见本页末节；低功耗/全库断网和发布路径由主任务另行收口，不把静态截图冒充这些功能验收。
- 图片依赖仍有外部Unsplash/CDN增强项（若本deck使用）；标注示意只修复事实身份，不声称拥有历史照片或已经离线缓存。
- 本审阅为重点一手来源核对与逐页编辑审阅；未宣称每一修辞、所有历史旁支均已独立穷尽研究。

## 最终冻结产物的正式浏览器 QA

- 已核对 stage 与 `.codex/release-seven/insurance.html` 字节相同，SHA-256：`0f2a990f79841f8754f930f6c110dc409d63203e3d6180d4ad584756ca31beab`。
- 正式报告：`.codex/qa-release-seven/approved-insurance.json`；三档×20页全部检查，console/pageerror/failed/badSlides均为0；1600档ESC总览通过。
- 该正式报告仅适用于上述固定字节；不把未运行的发布后公网验证或全38份离线测试写成通过。


## 宽矮窗口修复补充

触发页：9, 10, 11。字号按可用高度约束；移除过大的 frame 最小高度；问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
