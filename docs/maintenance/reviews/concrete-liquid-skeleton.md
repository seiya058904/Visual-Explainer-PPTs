# 流动的母体 — 深审与交付记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；15 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`2f91d9b81fb6393ba0656210e21e2bcfdc240929e5d0cb84340fbd03f7aaf47c`。

- Artifact: `ppt-collection/concrete-liquid-skeleton.html`
- Status: approved artifact; this record does not constitute renewed acceptance
- Verified slide count: 15
- Style: A
- English editorial title: Concrete: The Liquid Skeleton of Modern Life


## Factual and visual review — high-risk claims

- **Slide 2:** Changed 44 Gt to an approximate ~30 Gt annual concrete-use scale (published estimates are roughly 25–30 Gt/year); retained “second only to water” as a qualitative ranking. Removed an unsupported comparison claiming concrete exceeds the annual output of plastic, steel and wood combined. Sources: [UNFCCC](https://unfccc.int/news/building-blocks), [peer-reviewed concrete demand study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10214720/), [NIST](https://www.nist.gov/concretecement).
- **Slide 2, Anthropocene:** Qualified it as a discussion term; the Anthropocene has not been formally ratified as a geological epoch.
- **Slide 3:** 56.2% is UN-Habitat's 2020 estimate, not an undated current rate; added year. [UN World Cities Report 2020](https://digitallibrary.un.org/record/3905819/files/wcr_2020_report.pdf).
- **Slide 7:** Replaced “water permanently locked in crystals” with the accurate mechanism: water participates in cement hydration, forming hydration products as concrete hardens.
- **Slide 9:** Replaced categorical “desert sand is useless” and “second-largest resource” claims. The copy now distinguishes unsuitable particle shape/grading from universal unusability and keeps UNEP's ~50 Gt/year sand-use estimate. [UNEP Sand and Sustainability](https://www.unep.org/en/news-and-stories/press-release/sand-wanted-dead-and-alive-use-it-wisely-warns-un).
- **Slide 10:** Corrected Burj Khalifa concrete pumping height from the building's 828 m tower height to 605 m; source is the official fact sheet. [Burj Khalifa fact sheet](https://www.burjkhalifa.ae/en/assets/FACT-SHEET.pdf).
- **Slide 11:** Reframed cement emissions as an estimated 7–8% of global CO₂ emissions and removed unsupported “third-largest emitter” ranking. Source: [GIZ cement-industry analysis](https://www.international-climate-initiative.com/fileadmin/iki/Dokumente/Publikationen/Projekte/20_I_423/20250918_giz_China-Cement-Emissions-2025.pdf).
- **Slide 12:** Reframed 50–100 years as common design-life targets, not a universal real-world life limit; corrosion and service life depend on exposure, protective cover and maintenance. Sources: [European Commission Eurocodes](https://eurocodes.jrc.ec.europa.eu/en-eurocodes-about-en-eurocodes/major-concepts-en-eurocodes), [ACI service-life report](https://www.concrete.org/Portals/0/Files/PDF/Previews/365.1R-17_preview.pdf).
- **Slide 14:** Removed the claim that CCUS makes concrete the world's largest carbon sink. GCCA identifies CCUS as one decarbonization lever for cement/concrete; that does not make concrete as a whole a net carbon sink. [GCCA roadmap scope](https://gccassociation.org/concretefuture/carbon-capture-utilisation-and-storage/).
- **Visual check:** Preliminary 1000×560 contact sheet showed no confirmed clipped content in the original pages. Source copy text edits may alter wrapping; renewed browser geometry/visual QA remains pending.

Maintenance source is a hash-backed copy of the original approved artifact. The approved artifact remains unchanged pending parent QA. Claims about concrete tensile strength, steel/concrete thermal expansion, and Chinese/U.S. cement-consumption comparison remain scoped to their cited sources and should be rechecked before public reuse.


## Final P4 visual and browser QA — 2026-10-28

A 1000×560 screenshot showed the stat card clipped because the P4 frame had a forced viewport-height minimum while `.frame` also clips overflow. Removed that minimum, shortened the explanation, and tightened the callout while preserving the historical mechanism. The final standalone stage passed official QA across all 15 slides at 1600×900, 1280×720, and 1000×560: zero geometry flags, page/console errors, or failed resources; the 1600×900 overview check passed. Opened P4 at all three sizes; the full 2000-year figure and note now remain visible above the footer.


## 最终验收证据

完整三档报告：`.codex/qa-inventory-fixes/concrete-final/approved-concrete-liquid-skeleton.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
