# AI是如何影响我们生活的 — 深审与交付记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`2d6da8aa90fc5f48cb7bdf7f1544be81b335e7acca76bd72dd7524f9246447c4`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；10 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`642c8e8a9afa3ad8bfdbaec940eaec847a600a5656b33e142c233b44e2da2efc`。

- Artifact: `ppt-collection/ai-and-life.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 10
- Style: A
- English editorial title: How AI Is Changing Everyday Life


## Factual review — high-risk claims

- **Slide 2, organization adoption (78%, +23 pp):** McKinsey's July 2024 survey reports 78% of respondents' organizations use AI in at least one function; the survey spans 1,491 respondents in 101 countries and the report says “adoption” ranges from experimentation to embedded use. Keep it as respondent-reported, dated survey data rather than a census of all organizations. Source: [McKinsey, The state of AI in early 2024](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value).
- **Slide 2, China GenAI users:** 602 million / 42.8% is the Dec 2025 figure; the prior Jun 2025 report was 515 million / 36.5%. The card now explicitly dates the newer number. Source: [Digital China, citing CNNIC's 57th report](https://www.digitalchina.gov.cn/2025/xwzx/qwfb/202602/t20260209_5283123.htm).
- **Slide 2, UK student usage:** 92% vs 66% comes from HEPI's full-time undergraduate survey (n=1,041), not all UK students; the card now names that population. Source: [HEPI 2025 Policy Note 61](https://www.hepi.ac.uk/wp-content/uploads/2025/02/HEPI-Policy-Note-61-1.pdf).
- **Slide 2, AI awareness:** Removed 81% “global adults” because it added separate country medians as if they were a global weighted estimate. The replacement uses Pew's 34% median across 25 countries who had heard/read a lot about AI. Source: [Pew Research Center, 2025](https://www.pewresearch.org/global/2025/10/15/how-people-around-the-world-view-ai/).
- **Slide 3, concerns/awareness:** Pew reports country medians (34% more concerned, 16% more excited; 34% heard a lot, 47% a little, 14% none). Do not label them global-population shares. Same Pew source above.
- **Slides 8–9:** FDA device counts refer to authorizations/list entries, and FDA says its list is not comprehensive. Gartner’s 62% applies to a 302-leader survey of organizations reporting a deepfake attack in the prior 12 months; Deloitte’s 82% is U.S. GenAI users/experimenters reporting misuse concern. IEA’s more-than-doubling projection refers to total data-centre electricity by 2030; the ~30% annual growth figure is scoped to accelerated-server electricity in its base case. [FDA](https://www.fda.gov/medical-devices/artificial-intelligence-enabled-medical-devices/list-artificial-intelligence-enabled-medical-devices), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-09-22-gartner-survey-reveals-generative-artificial-intelligence-attacks-are-on-the-rise), [Deloitte](https://www.deloitte.com/us/en/about/press-room/connectivity-mobile-trends-survey.html), [IEA](https://www.iea.org/reports/energy-and-ai/executive-summary%C2%A0).


- **Slide 9 risk figures now have usable scope:** Gartner's 62% is from a March–May 2025 survey of 302 cybersecurity leaders in North America, EMEA and APAC, where respondents' organizations experienced at least one deepfake attack involving social engineering or automated processes in the prior 12 months. Deloitte's 82% is U.S. GenAI users/experimenters saying the technology could be misused. IEA projects data-centre electricity at ~945 TWh by 2030, more than double 2024's ~415 TWh; its ~30% annual figure applies to accelerated-server electricity in the base case, not all AI server energy. Cards now carry these boundaries. Sources: [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-09-22-gartner-survey-reveals-generative-artificial-intelligence-attacks-are-on-the-rise), [Deloitte](https://www.deloitte.com/us/en/about/press-room/connectivity-mobile-trends-survey.html), [IEA Energy and AI](https://www.iea.org/reports/energy-and-ai/executive-summary%C2%A0).

At the initial factual checkpoint only the maintenance copy had changed. The final verified export now replaces the approved artifact; final evidence below supersedes that checkpoint.


## Visual maintenance update (2026-10-28)

The maintained source increases contrast on slide 3’s Pew country-median figures and routes the slide 8 quotation through the standard reveal so the quote is visible. The initial contact-sheet capture showed it almost entirely hidden; a fresh settled browser pass is still required.

## 最终验收证据

完整三档报告：`.codex/qa-ai-legacy-final/approved-ai-and-life.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。


## 宽矮窗口修复补充

触发页：6, 7, 10。字号按可用高度约束；移除过大的 frame 最小高度；问题页保留底部安全距离；P7 双列改为内容高度，留出下方数据行。共享字号规则覆盖整份作品，已整份复测，正文未改。
