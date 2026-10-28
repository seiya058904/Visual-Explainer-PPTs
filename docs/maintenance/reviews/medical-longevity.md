# 让生命拥有更多时间 — 静态审阅记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`d5aa96300e52eac61f81e2d2e0f8fc781e28e032c2c1cd880447040d2fe3337e`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

- Artifact: `ppt-collection/medical-longevity.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Inferred slide count: 10
- Style: A
- English editorial title: Modern Medicine and Human Longevity


## Factual review — high-risk claims

- **Slide 2:** WHO 2024 reports global life expectancy rose from 66.8 years (2000) to 73.1 (2019). Updated the displayed difference to +6.3; the +1.7 per five years is arithmetic from rounded endpoints and labeled accordingly. Source: [WHO World Health Statistics 2024](https://iris.who.int/bitstream/handle/10665/376869/9789240094703-eng.pdf?sequence=1%2CISBN).
- **Slide 3:** Latest UNICEF/UN IGME estimate is 12.97M under-five deaths in 1990 and 4.86M in 2024, about a 63% decrease in counts. Updated values/period and changed “mortality rate” to “deaths” so the metric matches. Source: [UN IGME Child Mortality Report 2025, released 2026](https://data.unicef.org/wp-content/uploads/2026/05/UNIGME-Child-Mortality-Report-2025.pdf).
- **Slide 4:** WHO's 2024 analysis estimates immunization saved at least 154M lives over 50 years. Annual 3.5–5M range should remain attributed to WHO and identified as an estimate. [WHO release](https://www.who.int/news/item/24-04-2024-global-immunization-efforts-have-saved-at-least-154-million-lives-over-the-past-50-years).
- **Slide 6:** 2.1M AIDS-related deaths refers to the 2004 peak and 630K is a later estimate; the year for the endpoint is not shown in the artifact. Add a source/year or treat as a historical comparison, not a same-vintage series. [UN SDG Goal 3 report](https://unstats.un.org/sdgs/report/2026/goal-03/).
- **Slide 7:** ACS now estimates 4.8M US cancer deaths averted through 2023 (34% decline in cancer mortality rate since 1991); corrected 4.5M to 4.8M and added year/scope. [American Cancer Society](https://www.cancer.org/research/acs-research-news/people-are-now-living-longer-after-a-cancer-diagnosis.html).
- **Slide 8:** The $300M figure describes the globally completed initial draft sequence around 2000, not a per-person 2003 genome; $1,500 is a later per-genome cost. Reworded the caption to disclose differing stages/scope. Sources: [NHGRI sequencing-cost history](https://www.genome.gov/es/node/17326), [NHGRI Genome Project anniversary](https://www.genome.gov/27555238/april-2013-the-10year-anniversary-of-the-human-genome-project-commemorating-and-reflecting).
- **Slide 9:** Remote monitoring/hospitalization and all-cause mortality wording is too broad for a generic review citation; source/clinical population and causal boundary remain to be verified.


- **Slide 9 remote monitoring:** Replaced the broad claim of lower hospitalization and all-cause mortality with a bounded statement about monitoring feeding home-care workflows and outcomes depending on disease, protocol and clinician response. A 2024 systematic review found safety/adherence benefits, while effects on other clinical/quality-of-life measures were inconclusive; more focused heart-failure reviews report benefit, so avoid generalizing to all patients. Sources: [Nature Digital Medicine systematic review](https://pubmed.ncbi.nlm.nih.gov/39025937/), [Lancet Digital Health cardiovascular review](https://www.thelancet.com/article/S2589750022001248/pdf).

At the initial factual checkpoint only the maintenance copy had changed. The final verified export now replaces the approved artifact; final evidence below supersedes that checkpoint.


## Visual correction update (2026-10-28)

The maintained source now breaks the cover title into two balanced lines, aligns slide 3’s period card to 1990–2024 (34 years) to match its other figures, and replaces the unrelated hotel-room image on slide 8 with an inline DNA double-helix schematic, shortens that heading to avoid an orphaned final word, and keeps slide 3’s 1990/2024 comparison on a single line at the smallest viewport. The approved artifact is unchanged; refreshed settled three-viewport review is pending.


## Three-viewport QA update — 2026-10-28

The maintained standalone stage completed official browser QA across all 10 slides at 1600×900, 1280×720, and 1000×560: zero geometry flags, page errors, console errors, or failed resources; the 1600×900 overview check passed. I also inspected the changed cover, child-deaths comparison, and DNA illustration at all three sizes; no clipping or awkward orphaning was visible. This validates rendering/navigation behavior only, not every medical claim.

## Final ancestor-clip correction — 2026-10-28

P8: changed its figure to a constrained flex column so the inline gene SVG yields height to its caption. The caption is now inside the visible figure; text and facts retained.

- Before source SHA-256: ee5e9d7fad8b9980b94357aeabd54579b56614068cd75d55ad6b5f369c129fe4 (preserved in .codex/clip-fixes-baseline/).
- Final frozen standalone: .codex/clip-fixes-candidates-v1/medical-longevity.html; SHA-256 6301c8f32bd5de70143a4ce71139b0df7a9656cb5b665823a51368a2d1c5edb0. Exporter: no remaining local dependencies. No collection artifact replaced.
- Official final-byte browser QA: .codex/qa-clip-fixes/approved-results.json, exit 0; 10 pages × 1600×900 / 1280×720 / 1000×560, zero overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed once each at 1600×900 only.
- External-network-blocked static QA: .codex/offline-clip-fixes/results.json, 1280×720, settle 1000ms; all 10 pages passed, including ancestor clipping checks; zero unreadable text, page errors or local dependency failures.
- Actual visual inspection: full-size blocked-network before/after target pages in .codex/clip-before/ and .codex/clip-after/, plus final-byte dynamic target pages at 1000×560 in .codex/qa-clip-fixes/shots/; target text is visible with bottom clearance. No claim of renewed whole-deck factual acceptance.
- Remaining offline limitation: one external picture placement elsewhere is unavailable with external network blocked; full offline visual equivalence is not certified.


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `6301c8f32bd5de70143a4ce71139b0df7a9656cb5b665823a51368a2d1c5edb0`
- Three-viewport all-page QA: `.codex/qa-clip-fixes/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/medical-longevity.html`; pages: 10.


## 宽矮窗口修复补充

触发页：9。图片与图注分行，保留图注高度；问题页保留底部安全距离。共享字号规则覆盖整份作品，已整份复测，正文未改。
