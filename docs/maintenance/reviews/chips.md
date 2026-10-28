# 芯片：现代科技背后的隐形心脏 — 静态审阅记录

> 最新布局复验：已修复；四档动态全页通过。1920×900、1280×600 逐页文字裁切/页脚检查通过。当前成品 SHA-256：`0fcd0f924d0cceacab85ab0f1f0fff877a0d222252b777994e6889fae80c7231`。见[宽矮窗口专项记录](../approved-bottom-clipping.md)；下文首轮发布哈希为历史快照。

- Artifact: `ppt-collection/chips.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Inferred slide count: 24
- Style: A
- English editorial title: The Invisible World of Semiconductors


## Factual review — high-risk claims

- **Slide 2:** Replaced “20 years ago (2001)” with “Since 2001 (23 years)” for the 2001-to-2024 comparison. $630.5B is SIA's revised 2024 total; $139B is the SIA 2001 value, giving about 4.5x. Sources: [SIA 2024 sales](https://www.semiconductors.org/global-semiconductor-sales-increase-19-1-in-2024-double-digit-growth-projected-in-2025/) and [SIA 2022 Factbook](https://www.semiconductors.org/wp-content/uploads/2022/05/SIA-2022-Factbook_May-2022.pdf).
- **Slide 10:** Replaced “2nm scale = DNA thickness” with a note that 2nm is a process-node label, not literal transistor dimension.
- **Slide 14:** Updated TSMC Arizona figure to $265B in announced planned investment and explicitly says this is not actual spending. Current company page: [TSMC Arizona](https://www.tsmc.com/static/abouttsmcaz/index.htm).
- **Slide 8:** EUV uses 13.5 nm light; the approximately 100,000-part / 5,000-supplier system-complexity claim is supported by the cited European Commission JRC report (whose note points to the semiconductor supply-chain study) and is qualified as approximate. ASML supports the development-history wording. [JRC report](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC133850/JRC133850_01.pdf), [ASML EUV](https://www.asml.com/en/products/euv-lithography-systems).
- **Other reviewed figures:** 2024 semiconductor equipment billings $117.1B, assembly/packaging +25%, test +20% match SEMI; TSMC 2024 customer/product/process figures and 7nm+ revenue share match its annual report; Apple M4 38 TOPS/28B transistors and NVIDIA RTX 5090 92B transistors/3,352 AI TOPS match company releases. AI TOPS is a peak, precision-dependent vendor specification. Sources: [SEMI](https://www.semi.org/en/semi-press-release/global-semiconductor-equipment-billings-surged-to-117-billion-in-2024-semi-reports), [TSMC 2024 annual report](https://investor.tsmc.com/sites/ir/annual-report/2024/2024%20Annual%20Report-E.pdf), [Apple M4](https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/), [NVIDIA RTX 50 series](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics).


- **Slide 8 EUV complexity:** Verified the approximate 100,000-part / 5,000-supplier claim in an EU Joint Research Centre report (its source note cites the semiconductor supply-chain study); ASML itself describes its systems as thousands of parts and a 5,000-partner supplier ecosystem. Reworded the source attribution and “about” qualifier. ASML says EUV development took more than two decades. Sources: [European Commission JRC report](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC133850/JRC133850_01.pdf), [ASML supplier ecosystem](https://www.asml.com/technology/how-we-innovate), [ASML EUV systems](https://www.asml.com/en/products/euv-lithography-systems).

At the initial factual checkpoint only the maintenance copy had changed. The final verified export now replaces the approved artifact; final evidence below supersedes that checkpoint.


## Visual maintenance update (2026-10-28)

P21/P24 lower-band/footer spacing was repaired locally. P17/P18 fallback font repairs are documented below.

## Offline fallback repair — 2026-10-28

The blocked-network 1280×720 capture showed P17 “Invisible Manager” and P18 “Orchestra” clipped at the stat-card bounds when external fonts were unavailable. Replaced the labels with “Manager” and “Workers” and applied a scoped fallback-safe font size. Final offline gate: all 24 slides pass, with zero unreadable text, page errors, or local failures. Final stage SHA-256: `63F70E2B6307739ACCC8AED9E6A814426510E99E4C4BFB9ED59E7BA0995A088A`. Actual blocked-network screenshots: `.codex/qa-inventory-fixes/offline-shots/chips-p17-1280x720-offline.png` and `chips-p18-1280x720-offline.png`.


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `63f70e2b6307739accc8aed9e6a814426510e99e4c4bfb9ed59e7ba0995a088a`
- Three-viewport all-page QA: `.codex/qa-inventory-fixes/chips-cold-final-qa/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/chips.html`; pages: 24.


## 宽矮窗口修复补充

触发页：10, 21。字号按可用高度约束；移除过大的 frame 最小高度。共享字号规则覆盖整份作品，已整份复测，正文未改。
