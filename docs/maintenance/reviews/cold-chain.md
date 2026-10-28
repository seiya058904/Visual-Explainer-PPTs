# 冷链：现代食物背后的低温文明 — 静态审阅记录

- Artifact: `ppt-collection/cold-chain.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Inferred slide count: 10
- Style: A
- English editorial title: The Cold Chain Behind Modern Food


## Factual and visual review — high-risk claims

- **Slide 3:** 13.2% is FAO's 2021 post-harvest-to-retail loss estimate. UNEP's 19% is food waste at retail, food service and household stages in 2022, based on food available to consumers. Added separate years/populations; they are not a single cold-chain-specific comparison. Sources: [FAO food loss](https://www.fao.org/policy-support/policy-themes/food-loss-and-food-waste/fao-policy-series--food-loss---food-waste/en), [UNEP Food Waste Index 2024](https://wedocs.unep.org/bitstream/handle/20.500.11822/45275/Food-Waste-Index-2024-key-messages.pdf).
- **Slide 6:** 526M tonnes / ~12% is UNEP–FAO's 2017 estimate of food loss associated with lack of cold-chain infrastructure, not all food loss in an unspecified year. The card now dates and scopes the claim. [UNEP Sustainable Cold Chains](https://www.unep.org/en/what-we-do/food-systems/food-loss-and-waste/sustainable-cold-chains).
- **Slide 7:** 2–8°C is the routine refrigerated range for most vaccines, not all products; WHO notes some require freezing or ultra-cold storage. Added the population and product-label caveat. [WHO vaccine storage](https://www.who.int/news-room/feature-stories/detail/manufacturing-safety-and-quality-control).
- **Slide 8:** 20% electricity and ~7.5% CO₂ apply to the broad refrigeration sector (which includes air conditioning, not only food cold chains). Added sector scope and IIR 2025 attribution. [IIR 2025 technical brief](https://iifiir.org/en/fridoc/the-role-of-refrigeration-in-the-global-economy-3-lt-sup-gt-rd-lt-sup-gt-150413).
- **Slide 10 visual:** The original 1000×560 screenshot showed the four-line Chinese closing quote wrapping into many lines and overlapping/cropping at the footer. Reduced quote size, increased width, and tightened grid gaps in the maintenance copy. Remaining pages were reviewed in the preliminary contact sheet; this is not settled visual acceptance.

The dated maintenance copy preserves the original baseline hash. Approved artifact remains unchanged pending QA.


## Visual correction update (2026-10-28)

The maintained source shortens the cover title to “冷链：/低温如何改变餐桌” to prevent the prior 背/后 split at 1000×560. No other page was changed. The approved artifact is unchanged; refreshed settled three-viewport review is pending.


## Three-viewport QA update — 2026-10-28

The maintained standalone stage completed official browser QA across all 10 slides at 1600×900, 1280×720, and 1000×560: zero geometry flags, page errors, console errors, or failed resources; the 1600×900 overview check passed. I inspected the updated cover at all three sizes; the title remains on two semantic lines without splitting “背后”. This is a visual/browser result, not full factual acceptance.

## Offline fallback repair — 2026-10-28

The blocked-network 1280×720 capture showed P2 “Freshness Is Engineered” extending beyond its stat card without the external typeface. Shortened the English value to “Freshness” and set a scoped fallback-safe size; the Chinese note retains the design meaning. Final offline gate: all 10 slides pass, with zero unreadable text, page errors, or local failures. Final stage SHA-256: `084D0CA837E3B6A4BA1E825106366A45C7F6601ADA64E3C91EA1FCAC6C8569E8`. Actual blocked-network screenshot: `.codex/qa-inventory-fixes/offline-shots/cold-chain-p02-1280x720-offline.png`.


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `084d0ca837e3b6a4ba1e825106366a45c7f6601ada64e3c91ea1fcac6c8569e8`
- Three-viewport all-page QA: `.codex/qa-inventory-fixes/chips-cold-final-qa/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/cold-chain.html`; pages: 10.
