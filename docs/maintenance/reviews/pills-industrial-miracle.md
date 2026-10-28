# 药片 — 深审与交付记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；28 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`f548da83b0b234d9d391785051190b5206c1b9d4c8d83dc63ce1624a1cc5bb0c`。

- Artifact: `ppt-collection/pills-industrial-miracle.html`
- Status: approved artifact; this record does not constitute renewed acceptance
- Verified slide count: 28
- Style: A
- English editorial title: The Industrial Miracle Behind a Pill


## High-risk factual review and maintained-source changes (2026-10-28)

A hash-backed maintenance copy is at `2026-10-28-legacy-maintenance/pills-industrial-miracle.html`; baseline SHA-256 `ba1928e77d3df0b90596ef1d5f49cd4ee0cd9d11b89a75fa6acca286a87ef4a1`. Approved HTML remains unchanged.

- Slide 3 mixed up medicine-use volume with a count of swallowed tablets, said oral forms are 70% of prescriptions without scope, and labeled 180B as U.S. prescriptions. The maintained copy now uses IQVIA’s 3.8T defined daily doses (DDD) forecast for 2028, explicitly saying this is a statistical use unit and not pill count; replaces 180B with IQVIA’s 6.901B adjusted prescriptions dispensed in 2023; and removes the unsupported 70% figure. [IQVIA, Global Use of Medicines: Outlook to 2028](https://www.iqvia.com/-/media/iqvia/pdfs/china/viewpoints/iqvia-institute-general-use-of-medicines-2024-for-print.pdf), [IQVIA, Use of Medicines in the U.S. 2024](https://www.iqvia.com/insights/the-iqvia-institute/reports-and-publications/reports/the-use-of-medicines-in-the-us-2024)
- The old “one-third cannot access essential medicines” lacked a current medicines-specific denominator. The maintained source now removes the unsupported fraction and makes only a qualitative point: list inclusion does not guarantee reliable access, which also depends on price, supply, and health-service capacity. The $1.5T card is explicitly 2024 global prescription-pharmaceutical sales at ex-factory prices, $1.5285T (rounded to $1.53T). [WHO UHC monitoring report](https://www.who.int/teams/health-financing-and-economics/global-monitoring-report/2023), [EFPIA Key Data 2025 / IQVIA MIDAS FY2024](https://www.efpia.eu/media/uj0popel/the-pharmaceutical-industry-in-figures-2025.pdf)
- Slide 6’s unsupported universal 1–30% API range and “most of the pill is architecture” claim were removed; formulation proportions depend on active ingredient, dose, and dosage form.
- Slide 11’s 75% dissolution limit was presented as universal. FDA guidance describes product-specific criteria; for many immediate-release solid oral products it recommends a single point at Q=80%, but product criteria and time points still depend on the drug and specification. The maintained version removes a universal numeric threshold and says the product standard defines Q/time. [FDA ANDA dissolution guidance](https://www.fda.gov/media/110689/download), [USP dissolution submission guidance](https://www.usp.org/sites/default/files/usp/document/get-involved/submission-guidelines/supporting-info-for-dissolution.pdf)
- Slide 12 incorrectly described 40°C/75%RH as simulating exactly one year. ICH Q1A(R2) uses it as an accelerated condition (typically up to six months); long-term conditions vary by climatic zone and the approved shelf life must be supported by stability data. [ICH Q1A(R2)](https://www.ema.europa.eu/en/documents/scientific-guideline/ich-q-1-r2-stability-testing-new-drug-substances-and-products-step-5_en.pdf)
- Slides 15 and 19 now date and scope BIO/QLS success-rate data to 2011–2020: Phase II→III transition 28.9% (about 71% did not progress); Phase III→NDA/BLA 57.8% (about 42% did not progress); Phase I→approval 7.9% (roughly 9 in 10 did not reach approval). This is a historical dataset across indications, not a guarantee for every drug or a current-year prediction. [BIO / QLS clinical development success rates](https://www.bio.org/clinical-development-success-rates-and-contributing-factors-2011-2020)
- Slide 19’s $83B was mislabeled global 2024 R&D. IQVIA reports the largest pharma companies’ combined R&D spend was over $190B in 2024; the slide now scopes it to large companies. The $2.6B per approved drug estimate is retained only as a dated Tufts estimate in 2013 USD that includes abandoned candidates and the cost of capital. The 20-year patent term is now described as generally running from application filing, so market exclusivity may be shorter. [IQVIA R&D trends 2025](https://www.iqvia.com/-/media/iqvia/pdfs/institute-reports/rd-trends-2025.pdf), [Tufts 2014 cost study](https://ptacts.uspto.gov/ptacts/public-informations/petitions/1462899/download-documents?artifactId=Ri9sGqUdGsLIUxjMYSLLUCakpkv9fqHlklpiHkWENkNR55YA-xeYfBA), [USPTO patent term](https://www.uspto.gov/patents/basics/essentials)
- FDA estimates 8.5 years of new-drug study and testing; BIO/QLS found a 10.5-year average from Phase I to approval among successful 2011–2020 programs. Slide 18 now reports the bounded timeline and removes the unsupported “10,000→1 / 99%” discovery funnel. FDA review goals are now distinguished from elapsed time: generally 10 months standard and 6 months priority review, measured from the filing date after the 60-day filing review. [FDA drug development definitions](https://www.fda.gov/drugs/investigational-new-drug-application-ind/drug-development-and-review-definitions), [BIO / QLS timeline report](https://go.bio.org/rs/490-EHZ-999/images/ClinicalDevelopmentSuccessRates2011_2020.pdf), [FDA priority review](https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/priority-review)

These are source-backed content corrections, not a full visual or medical review. No post-edit browser QA has run; the multi-card slides 3 and 19 and text-dense slides 12, 15, 18, 20 require fresh settled browser inspection. This is not renewed acceptance.


## Final high-risk copy/visual edits (2026-10-28)

Slides 10, 14, 17, 18, 26, and 28 were refined in the hash-backed maintenance source: immediate- versus extended-release dosage forms are described as release-profile/dosing differences rather than different diseases; Phase I is framed as safety, tolerability, pharmacokinetics, and dose evaluation rather than an absolute “do no harm” promise; approval is described as evidence review and benefit-risk judgment with continued post-market monitoring; the slide 18 H1 is now two lines; the unsupported access fraction is removed; and the closing quotation is shortened to avoid an orphaned final line. No medical advice is implied. The approved artifact remains unchanged; fresh three-viewport browser QA is pending.

## 最终逐句复核

P10删除旧句残留，完整说明同成分的即释/缓释剂型与释放曲线，纠正Pharmacokinetics为药代动力学。P17/P26明确为FDA/WHO资料概述，去掉容易误认为机构逐字原话的引号；P26压成四个完整短句，消除“物/得”孤字。P28精简总结。仅这四页收紧本地文字宽高，取消强制80vh造成的裁切风险，保留原版式和动效。

## 最终验收证据

完整三档报告：`.codex/qa-pills-final/approved-pills-industrial-miracle.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
