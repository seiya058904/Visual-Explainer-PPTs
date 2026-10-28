# 天气预报：人类如何预测明天 · Weather Forecast — 深审与交付记录

> 最终交付：已从维护源规范导出至原成品路径，Approved 状态保留；15 页三档逐页检查通过，断网静态阅读（含祖先裁切边界）通过。SHA-256：`be1ccd57788d76fa455011deaa288aa75f79fed9cf7099d98ba369c69b0b5b52`。

- Artifact: `ppt-collection/weather-forecast.html`
- Status: Approved retained; source-first refinement integrated after final-byte browser QA. See the final verification section and release ledger.
- Verified slide count: 15
- Style: A
- English editorial title: How Weather Forecasts Work


## Fact review and maintained-source changes (2026-10-28)

A hash-backed maintenance copy is stored at `2026-10-28-legacy-maintenance/weather-forecast.html`; the original approved artifact hash is `7031fbfb7176c24ed3c03967cf35716d970fc2a28827954657c416d6516837da`. The approved artifact remains unchanged.

- The observing-system cards had inconsistent and not clearly defined counts: 11,500 “land stations,” 1,000 “weather radars,” and 1,300 “upper-air stations,” while the next page gave 1,000 upper-air stations. The maintained copy now uses WMO’s approximate 17,500 surface stations/platforms and about 1,000 upper-air stations, and aligns the radiosonde page to 1,000. The radar network estimate is rounded to about 1,100, consistent with the WMO President site’s 1,111 radar networks. These are network-scale context counts, not a fully current live inventory. [WMO Global Observing System](https://public.wmo.int/activities/global-observing-system-gos/global-observing-system-gos), [WMO President: WMO community metrics](https://wmopresident.com/)
- NOAA/NCEI confirms the U.S. NEXRAD system has 160 high-resolution S-band Doppler weather radars. NOAA GOES-R documentation supports the cited 30-second scan interval, 4× resolution, and 5× scan speed relative to previous GOES satellites. [NOAA NCEI NEXRAD](https://www.ncei.noaa.gov/products/radar/next-generation-weather-radar), [NOAA GOES-R](https://www.weather.gov/news/160711-goes-r-weather-satellite)
- No other source change was made in this batch; daily observation counts and ensemble claims remain source labels to check if this deck receives a full scientific copy edit.

No post-edit browser QA has been run yet. This fact correction does not constitute renewed acceptance.

## 最终验收证据

完整三档报告：`.codex/qa-release-batch2/approved-weather-forecast.json`。所有页面的实际文字边界、页脚、缺图、脚本及请求检查通过；pipeline适用时覆盖初始/推进/完成/继续翻页。ESC首档验证。离线完整逐页报告：`.codex/offline-final38/results.json`，按上方相同SHA核对。网络照片限制见目录字段；本记录不等于物理投影或所有浏览器认证。
