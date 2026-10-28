# 电梯：让城市向天空生长 · Elevator Civilization — 深度维护审阅

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。10 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`3fa3de236560b5fffb85a21edae0d5d13eb1b90cbb894608cf3d48216b6e0939`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- 源文件：`2026-10-28-legacy-maintenance/elevator.html`
- 发布产物：`ppt-collection/elevator.html`（已由维护源规范导出，与验收字节一致）
- 原认可状态：Approved 保留；本记录不冒充新一轮用户认可。
- 页数：10。原件备份与 SHA-256：`.codex/baselines/elevator.original.html*`。
- 保留原 Style A 配色、图文节奏与运行时；只做事实、措辞、标题与高风险局部维护。

## 逐页叙事与画面判断

| 页 | 本页作用 / 标题锚点 | 审阅决定 |
|---|---|---|
| 01 | 垂直城市的 发动机 | 删除2060亿/317倍无可靠统一口径比较；从上下楼日常现象开场。 |
| 02 | 高度曾经是一种负担 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 03 | 伊莱沙·奥蒂斯站在升降平台上， 让人用斧头砍断了 唯一一根悬挂绳索。 | 1854示范与Otis官方历史核对；长篇quote改两行叙述“砍断绳索后 / 平台没有坠落”，细节由lead承载。 |
| 04 | 第一部商用客梯， 不在摩天楼里 | 第一客梯限定为Otis首台商用客梯，避免全历史无条件第一。 |
| 05 | 摩天楼时代 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |
| 06 | 电梯如何工作 | 末项改安全钳，区分安全钳与正常制动器。 |
| 07 | 电梯真正发明的不是升降， 而是信任。 | 缓冲器限定底坑越程冲击，不能兜住任意坠落。 |
| 08 | 数据里的安全感 | 六卡整体重写：31人/年为美国历史电梯+扶梯、工作与非工作事故；报告2013、数据1992—2010；删除全球死亡率与最安全排名。 |
| 09 | 每秒 10 米， 60 秒抵达 124 层 | 57台/10m/s/124层与Burj官方资料核对；不把所有电梯都说成相同速度。 |
| 10 | 当电梯学会 预测你的目的地 | 保留；已逐页检查叙事承接、信息主次与1000档稳定画面，未发现需要扩张改动的局部问题。 |

## 事实证据与边界

| 页面 | 一手依据 / 核对对象 | 来源 |
|---|---|---|
| P03–04 | Otis1854/1857 history | [原始机构/论文](https://www.otis.com/en/us/our-company/history) |
| P08 | CPWR2013 US elevators+escalators report | [原始机构/论文](https://stacks.cdc.gov/view/cdc/221302) |
| P09 | Burj official elevator fact sheet | [原始机构/论文](https://www.burjkhalifa.ae/img/fact-sheet.pdf) |

## 验证记录

- 原发布物375张基线中的本deck逐页contact sheet已人工阅读，识别其pipeline常规截图时序缺陷，未把重复页当成缺页。
- 本轮真实Chromium：每页在1000×560、1280×720、1600×900等待字体与2.15秒入场后截图；全部七份合计125页/375视图；浏览器无pageerror；初轮几何探针375视图0越界提示。
- 本deck三档稳定态全页contact sheet已人工检查，较大两档也核对构图、换行与底部留白。最后18个变更页面另外复截三档（共54视图、0几何提示、0pageerror），实际页码经 `__currentSlideIndex` 核对，记录在 `.codex/legacy-seven-shots/geometry-final-delta.json`。
- `export-standalone.py --check-only` 已通过；导出只写 `.codex/legacy-seven-stage/`。
- 固定字节的正式pipeline/翻页/ESC报告见本页末节；低功耗/全库断网和发布路径由主任务另行收口，不把静态截图冒充这些功能验收。
- 图片依赖仍有外部Unsplash/CDN增强项（若本deck使用）；标注示意只修复事实身份，不声称拥有历史照片或已经离线缓存。
- 本审阅为重点一手来源核对与逐页编辑审阅；未宣称每一修辞、所有历史旁支均已独立穷尽研究。

## 最终冻结产物的正式浏览器 QA

- 固定副本：`.codex/release-seven-final/elevator.html`；SHA-256：`3fa3de236560b5fffb85a21edae0d5d13eb1b90cbb894608cf3d48216b6e0939`；已与最终stage逐字节核对。
- 正式报告：`.codex/qa-release-seven-final/approved-elevator.json`；三档有效视口共30页视图，console/pageerror/failed/越界/foot-nav遮挡/不可见正文/坏图均为0。
- 1600档 ESC 总览打开与缩略图选页均通过；pipeline页完成与退出状态已纳入报告（若本deck存在）。
- 完整离线视觉等价不在本项声明范围；全库外网隔绝测试及最终发布后证据由主任务汇总。
