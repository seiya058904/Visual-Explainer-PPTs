# 黄仁勋：把计算重新点燃的人 · Jensen Huang — 深度维护审阅

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`0ea09d94654210621432135709900076bfc77c1838638c5daf4f98b37baddc90`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。20 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`35f64b4a1dbae5463d2d3a31f97a9f28d2504d8c1f690ff0114f1181848c4f1b`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- 源文件：`2026-10-28-legacy-maintenance/jensen-huang.html`
- 发布产物：`ppt-collection/jensen-huang.html`（已由维护源规范导出，与验收字节一致）
- 原认可状态：Approved 保留；本记录不冒充新一轮用户认可。
- 页数：20。原件备份与 SHA-256：`.codex/baselines/jensen-huang.original.html*`。
- 保留原 Style A 配色、图文节奏与运行时；只做事实、措辞、标题与高风险局部维护。

## 逐页叙事与画面判断

| 页 | 本页作用 / 标题锚点 | 审阅决定 |
|---|---|---|
| 01 | 黄仁勋：把计算 重新点燃的人 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 02 | Before the company, there was engineering. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 03 | April 5, 1993. A company begins with a bet. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 04 | Graphics was the first language. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 05 | The GPU was not a product. It was a new computing model. | GeForce256为NVIDIA当时以GPU命名的产品；避免把全部图形处理发明归于1999。 |
| 06 | A graphics chip learned to compute. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 07 | CUDA opened the machine. | 2006为CUDA架构公布口径；不混同2007SDK发布。 |
| 08 | The future arrived through parallelism. | AlexNet为深度学习训练里程碑，不等于AI从此才存在。 |
| 09 | Graphics → Accelerated Computing → AI Infrastructure | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 10 | Light became computable. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 11 | The world suddenly needed what NVIDIA had been building. | 保留FY2025$130.5B/+114%历史财年，不写成自然年。 |
| 12 | The new factory is a data center. | FY2026$215.9B/+65%、Q4数据中心$62.3B经官方财报核对；财年截至2026.01。 |
| 13 | A company becomes powerful when its parts speak one language. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 14 | Recognition follows direction. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 15 | Leadership is not possession. It is stewardship. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 16 | The hardest bet is the one before the evidence is obvious. | “连续二十多年”改“近二十年”，与CUDA2006起点相容。 |
| 17 | Scale creates gravity. | 风险提示保留，避免人物赞颂遮蔽供应/政策/需求风险。 |
| 18 | 计算分工，扩展到 AI | 整页修正CPU串行/GPU并行替代论：CPU支持多核；GPU加速数值，二者协同；左右标题中性化。 |
| 19 | Long horizon. Single direction. Systemic execution. | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 20 | He did not predict the future. He prepared compute for it. | 1999改为GeForce256发布，避免GPU所有历史压成一人一刻。 |

## 事实证据与边界

| 页面 | 一手依据 / 核对对象 | 来源 |
|---|---|---|
| P05 | NVIDIA GeForce256 naming claim,1999 | [原始机构/论文](https://blogs.nvidia.com/blog/first-gpu-gaming-ai/) |
| P11–12 | Official FY2026 full-year and comparison | [原始机构/论文](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026) |

## 验证记录

- 原发布物375张基线中的本deck逐页contact sheet已人工阅读，识别其pipeline常规截图时序缺陷，未把重复页当成缺页。
- 本轮真实Chromium：每页在1000×560、1280×720、1600×900等待字体与2.15秒入场后截图；全部七份合计125页/375视图；浏览器无pageerror；初轮几何探针375视图0越界提示。
- 本deck三档稳定态全页contact sheet已人工检查，较大两档也核对构图、换行与底部留白。最后18个变更页面另外复截三档（共54视图、0几何提示、0pageerror），实际页码经 `__currentSlideIndex` 核对，记录在 `.codex/legacy-seven-shots/geometry-final-delta.json`。
- `export-standalone.py --check-only` 已通过；导出只写 `.codex/legacy-seven-stage/`。
- 固定字节的正式pipeline/翻页/ESC报告见本页末节；低功耗/全库断网和发布路径由主任务另行收口，不把静态截图冒充这些功能验收。
- 图片依赖仍有外部Unsplash/CDN增强项（若本deck使用）；标注示意只修复事实身份，不声称拥有历史照片或已经离线缓存。
- 本审阅为重点一手来源核对与逐页编辑审阅；未宣称每一修辞、所有历史旁支均已独立穷尽研究。

## 最终冻结产物的正式浏览器 QA

- 已核对 stage 与 `.codex/release-seven/jensen-huang.html` 字节相同，SHA-256：`35f64b4a1dbae5463d2d3a31f97a9f28d2504d8c1f690ff0114f1181848c4f1b`。
- 正式报告：`.codex/qa-release-seven/approved-jensen-huang.json`；三档×20页全部检查，console/pageerror/failed/badSlides均为0；1600档ESC总览通过。
- 该正式报告仅适用于上述固定字节；不把未运行的发布后公网验证或全38份离线测试写成通过。


## 宽矮窗口修复补充

触发页：2, 4, 6, 13, 15, 16。问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
