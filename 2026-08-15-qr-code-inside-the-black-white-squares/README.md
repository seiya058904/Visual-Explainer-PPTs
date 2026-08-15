# 二维码为什么缺一块还能扫？

状态：已认可（2026-08-15）

- 风格：Style A · 电子杂志 × 电子墨水
- 主题：🌊 靛蓝瓷（技术 / 研究主题）
- 页数：14
- 素材：无外部配图，使用结构化文字、数字卡和 Pipeline
- 主题节奏：hero dark → light → dark → light → hero light → light → dark → hero dark → light → dark → light → dark → hero light

## 页面映射

01 封面 / 02 诞生原因 / 03 定位方框 / 04 方向与形变 / 05 modules / 06 versions / 07 capacity / 08 error correction / 09 Reed–Solomon / 10 Logo / 11 Quiet Zone / 12 读取 Pipeline / 13 安全边界 / 14 收束。

## 事实来源

- [DENSO WAVE · History of QR Code](https://www.qrcode.com/en/history/)
- [DENSO WAVE · Information capacity and versions](https://www.qrcode.com/en/about/version.html)
- [DENSO WAVE · Error correction feature](https://www.qrcode.com/en/about/error_correction.html)
- [DENSO WAVE · Reading problems](https://www.qrcode.com/en/howto/trouble.html)
- [DENSO WAVE · Model 1 and Model 2](https://www.qrcode.com/en/codes/model12.html)
- [DENSO WAVE · Code area / Quiet Zone](https://www.qrcode.com/en/howto/code.html)
- [FTC · Scammers hide harmful links in QR codes](https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information)

## 验收

- [x] `title`、页面 ID、备注和主题节奏静态检查
- [x] 1600×900 与 1280×720 真实浏览器逐页检查
- [x] 等待动效稳定后检查标题、中文、foot、nav 安全区
- [x] 键盘、滚轮、触屏翻页与 ESC 总览
- [x] 第 12 页 Pipeline：初始态、单步态、全部完成态
- [x] `P` 演讲者模式与备注保存

成品库：`ppt-collection/qr-code-inside-the-black-white-squares.html`
