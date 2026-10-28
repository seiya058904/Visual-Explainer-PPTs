# Wi‑Fi空气中的互联网秩序 — 深审与交付记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；15 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`555de38d641e80fbf4cdda304def7c72f454e9b7a56b786a2fe248e5627871cd`。

- Artifact: `ppt-collection/wifi.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: B
- English editorial title: Wi-Fi: The Last Few Meters of Connection


## Fact review and maintained-source changes (2026-10-28)

The dated source is a copy of the approved HTML with a preserved baseline at `.codex/baselines/wifi.original.html` (SHA-256 `05346a62ca357e3640f3f2e39631ea8d9d8cb4592503f6cc706cc3145b6beb23`). The approved artifact was not edited.

- The 2024 figure of 4.1B annual Wi-Fi device shipments and $4.9T 2025 economic value are industry estimates from different research inputs. The 2025 value traces to a Wi-Fi Alliance-commissioned 2021 forecast; wording now identifies these as estimates and separates the forecast date from the historical shipment figure. [Wi-Fi Alliance announcement](https://www.globenewswire.com/news-release/2021/02/03/2169024/0/en/Wi-Fi-global-economic-value-to-reach-5-trillion-in-2025.html), [Wi-Fi Alliance “by the numbers” source context](https://www.mediatek.com/hubfs/MediaTek%20Assets/Pdfs/White_Papers/Pioneering%20the%20Future%20with%20Wi-Fi%208_%20Part%203.pdf?hsLang=en)
- Wi-Fi 7 maximum throughput: the original slide said a maximum of 20 Gbps. IEEE 802.11be-2024 specifies at least one operating mode capable of at least 30 Gbit/s at the MAC service access point. The maintained version updates the metric and explicitly distinguishes this standard-layer throughput from a device’s real-world speed. [IEEE 802.11be-2024](https://standards.ieee.org/ieee/802.11be/7516/)
- The 2025–2027 14%→51% Wi-Fi 7 traffic shares are model estimates, not observed adoption: the cited 2024 analysis estimates the Wi-Fi 7 share of U.S. free-hotspot traffic. The maintained wording now makes the geography, setting, model, and forecast status explicit. [Telecom Advisory Services analysis (PDF)](https://wififorward.org/wp-content/uploads/2024/09/Assessing-the-Economic-Value-of-Wi-Fi.pdf)
- The 6 GHz allocation is explicitly marked as the U.S. FCC rule; 2.4 GHz channel guidance is limited to common 20 MHz configurations and notes regional variation. [FCC 6 GHz order](https://www.fcc.gov/document/fcc-opens-6-ghz-band-wi-fi-and-other-unlicensed-uses)

## Visual findings

The approved browser baseline identified real lower-edge clipping on slide 8 (“Shared Air, Shared Time” and “HALF-DUPLEX”) and slide 11 (“TARGET MAXIMUM THROUGHPUT”) at 1600×900, 1280×720, and 1000×560. The contact sheet corroborates the cut lower bands at the smallest viewport. The maintained source reduces the slide 8 band height and compresses slide 11’s bottom metric row; these fixes remain unverified until a fresh settled three-viewport run. Other pages in the 1000×560 contact sheet showed no obvious clipping, but screenshots were sampled during baseline animation and do not constitute visual acceptance.

## 最终验收证据

完整三档报告：`.codex/qa-release-legacy-revision/approved-wifi.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
