# 二十年，世界被重新编译 — 维护审阅记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；10 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`ab463739bba28b4b64a0609deb5a285ffc9a6604b2df10dc574a2b6f092c1788`。

- Artifact: `ppt-collection/twenty-years.html`（基线保留，尚未替换）
- Maintained source: `2026-10-28-legacy-maintenance/twenty-years.html`
- Status: 多项指标的口径/年份已修正并导出至 `.codex/legacy-stage/`；不代表重新接受或视觉通过
- Slides / style: 10 / A

## 已核查并修正

- P2 ITU 2025 估计约 60 亿人上网、占全球人口 74%；2005 年约 10 亿量级。[ITU statistics](https://www.itu.int/en/ITU-D/Statistics/pages/stat/default.aspx)
- P3 把 4.7B 写为 GSMA 截至 2024 年底的移动互联网用户，不再称智能手机所有者；5G 55% 是 2024 年底人口覆盖，2.9B 是 Ericsson 对 2025 年底 5G 订阅数的预测，三者不混作同一分母。[GSMA Mobile Economy 2025](https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-economy/wp-content/uploads/2026/01/The-Mobile-Economy-2025.pdf), [Ericsson Mobility Report June 2025](https://www.ericsson.com/49e9b6/assets/local/reports-papers/mobility-report/documents/2025/ericsson-mobility-report-june-2025.pdf)
- P4 Synergy 2024 年全球云基础设施服务收入约 $330.4B，定义包括 IaaS、PaaS 与托管私有云。[Synergy Research](https://www.srgresearch.com/articles/cloud-market-jumped-to-330-billion-in-2024-genai-is-now-driving-half-of-the-growth)
- P5 78% 是 2024 年受访组织报告采用 AI 的比例；$33.9B 是 2024 年生成式 AI 私人投资额，而非所有 AI 投资。[Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report/economy)
- P6 模型调用成本比较限定为达到 GPT‑3.5 等效 MMLU 得分的最低价格：2022-11 $20/百万 tokens，2024-10 $0.07；约 280 倍、约 18 个月。[Stanford AI Index 2025 chart summary](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts)
- P7 将 90% 下降限定为公用事业级光伏 2010–2024 全球加权平均 LCOE；电池储能另写 93% 的 utility-scale cost decline。EV 销量 2024 超过 1,700 万、占新车超 20%。[IRENA](https://www.irena.org/Digital-Report/Renewable-Power-Generation-Costs-in-2024), [IEA](https://www.iea.org/reports/global-ev-outlook-2025/executive-summary)
- P8 NHGRI 图表估算由 2001 年约 $95M 降至 2022 年约 $525–560；明确是 NHGRI 资助测序中心成本口径，不是消费者临床检测报价。[NHGRI sequencing cost data](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data)
- P9 4,664,000 台运行中的工业机器人及同比约 9% 为 IFR 2024 年末存量统计。[IFR World Robotics 2025](https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years)

## 验收边界

已对 10 页可见文本作定向事实复核；章节中的趋势性修辞仍是叙事判断。NHGRI 图表日期/精确点值、云市场年份比较等须以相应原始图表/脚注为准。视觉检查与三档浏览器 QA 状态见下方更新；其余事实边界仍按本文记录。

## Visual review update — 2026-10-28

Manually inspected the full-deck contact sheets at 1600×900, 1280×720, and 1000×560, and opened the connectivity, mobile, cloud, AI, energy, biology, and automation pages at full size. No additional clipping, footer collision, or broken-image issue was confirmed. This records a visual review only; time-sensitive numeric claims remain subject to source and date verification.


## 最终验收证据

完整三档报告：`.codex/qa-release-last6/approved-twenty-years.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
