# AI Weather · Learning the Atmosphere — 设计说明

## 项目状态

- 状态：计划已获批准，待设计说明复核后进入制作
- 工作目录：`2026-08-14-ai-weather-learning-the-atmosphere/`
- 成品入口：`index.html`
- 正式合集：本阶段不进入 `ppt-collection/`

## 目标与受众

这是一份面向非气象、非 AI 专业听众的 20–30 分钟科普网页 PPT。核心不是宣传“AI 打败物理模型”，而是解释天气预报正在从单一的高成本物理模拟，转向物理模型与 AI 模型并行、互补的预测体系。

听众应在不具备专业背景的情况下理解三件事：

1. 天气预报首先要重建“现在的大气状态”。
2. 传统 NWP 通过方程逐步推进未来，AI 模型学习状态之间的演化关系。
3. AI 的主要改变是降低预测一次未来的成本，但它仍依赖观测、数据同化和物理模型建立的数据基础。

## 内容基线与边界

- 使用用户提供的 13 页文案、数字、关键句和来源作为内容基线。
- 不在本项目中独立核验或扩展来源；如需事实核验，另行执行。
- 保留 GraphCast、AIFS、AIFS ENS、NOAA AIGFS、ERA5、热带气旋路径/强度和混合系统等核心概念。
- 不引入新的产品功能、外部图片、外部字体、CDN、联网资源或额外依赖。
- 不修改 `ppt-collection/` 及其他已有项目。

## 视觉与交互方向

- 生产风格：Style A「电子杂志 × 电子墨水」。
- 主题：靛蓝瓷。
- 视觉语言：深靛蓝作为叙事转折和 Hero 背景，浅色页面承载解释、数据和流程；用 CSS 线条、网格、箭头、数据卡和文字层级替代图片。
- 标题使用手动断行，避免中文标题孤行；高密度页面采用紧凑间距并保留底部安全区。
- 每页至少规划 4 个独立入场对象，kicker、标题、lead、数据、卡片、引用和步骤不把动画挂在大容器上。
- 所有逐步 Pipeline 只让 `data-anim="step"` 与 arrow 初始降亮；kicker、标题、lead 和 meta 保持可读并正常 cascade 入场。
- 支持键盘翻页、滚轮/触屏翻页和 ESC 总览；如模板包含演讲者模式，保留备注与预览能力。

## 13 页叙事与版式映射

| 页 | 认知任务 | 视觉节奏 | 主要结构 |
|---|---|---|---|
| 01 | 先提出“现在是什么状态” | Hero dark | Hero Cover + Initial Conditions |
| 02 | 解释数据同化 | Light | 观测来源 + 数据卡 + 双输入关系 |
| 03 | 解释传统 NWP | Dark | Pipeline：Initial State → Physics → Next State |
| 04 | 建立计算瓶颈 | Light | 计算成本拆解 + 结论引用 |
| 05 | 完成 AI 机制转折 | Dark | Physics Solver vs Learned Transition Model |
| 06 | 展示 GraphCast 突破 | Light | 10 days / <60 s / 89.3% 数据组合 |
| 07 | 说明 AIFS 进入业务系统 | Hero light | 日期、AIFS、并行运行与能耗数字 |
| 08 | 解释集合预测 | Dark | 51 个未来的分裂/收敛流程 |
| 09 | 建立 NOAA 效率尺度 | Light | 16 days / 40 minutes / 0.3% |
| 10 | 展示 AI 的具体优势 | Dark | Track ≠ Intensity 对比 |
| 11 | 说明强度偏弱与平滑问题 | Light | Better Track ≠ Better Intensity |
| 12 | 纠正“AI 不需要物理” | Dark | Observations → Assimilation → Initial State → Forecast |
| 13 | 收束为并行与混合系统 | Hero light | Physics + AI + Hybrid Forecasting |

节奏遵守：不连续 3 页使用同一底色；至少包含 Hero dark 与 Hero light；第 13 页承担结论和情绪收束。

## 实现与验收

实现阶段将调用 `guizang-ppt-skill`，只读取本次需要的模板、布局说明和靛蓝瓷主题规则，然后一次性写入 13 页内容。

静态检查包括：

- `<title>` 闭合；无模板必填标记残留；`data-animate` 位于 section；动画对象数量达到每页最低要求。
- Pipeline 选择器只匹配 step/arrow，且没有宽泛的 `[data-anim]` 降亮规则。
- 检查 `git diff --check`、`git status --short` 和最终 diff，保留开始前已有的无关修改。

真实浏览器检查包括：

- 在 1600×900 和 1280×720 等目标视口逐页等待字体和动效稳定后检查。
- 检查中文显示、标题断行、正文/数字/来源边界、底部 foot/nav 安全区和页面构图。
- 检查键盘、滚轮/触屏、ESC 总览；Pipeline 页检查初始态、单步态、全部完成态和下一页切换。

## 非目标与晋级规则

- 本轮不制作外部图片，不做事实研究，不更新依赖，不部署，不发布。
- 通过静态与浏览器检查后，项目状态为“待审核”，仍留在日期目录。
- 只有用户明确说“审核通过”“进入成品库”或等价表达，才执行到 `ppt-collection/` 的晋级流程，并在晋级前比较源文件与目标文件哈希。
