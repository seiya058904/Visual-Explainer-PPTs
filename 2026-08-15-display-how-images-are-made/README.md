# 显示器到底是怎么制造画面的？

Style A「电子杂志 × 电子墨水」网页科普 PPT，主题色为“靛蓝瓷”。

## 内容

这份 15 页 deck 面向大众科普，从像素和 RGB 开始，依次解释 LCD、OLED、黑位、刷新率、响应时间、画面撕裂、VRR、HDR 和 MiniLED，最后将规格参数归回“位置、光、时间、同步”四类问题。

## 图片来源

- `01-display-pixels.jpg`：Unsplash 像素微距图，来源页为 `unsplash.com/photos/a-close-up-of-a-television-screen-with-different-colors-6YpwRf0iUa4`。
- `03-rgb-subpixels.jpg`：Samsung Display，[Learn Display · Pixel](https://global.samsungdisplay.com/27669)。
- `06-lcd-layer.jpg`：Samsung Display，[LCD Display Layer Diagram](https://global.samsungdisplay.com/28861/)。
- `07-oled-lcd-structure.jpg`：LG OLED / LCD 结构对比图，来源页为 Tinhte 的技术说明文章。
- `11-vrr-sync.svg`：本项目自制 SVG，依据 VESA Adaptive-Sync 的 GPU/显示器同步概念绘制。
- `13-hdr-night.jpg`：Unsplash 夜景图，用于说明高光、黑位和暗部细节，不代表独立的 HDR 测量结果。

## 项目状态

用户已审核通过。最终单 HTML 已晋级至 `ppt-collection/display-how-images-are-made.html`；制作目录保留源文件和图片资源。本项目的视觉结构由 HTML/CSS、数字卡、对比栏、Pipeline 和精选图片共同表达。

## 本地预览

直接打开 `index.html`，或在项目目录运行：

```powershell
start .\index.html
```

`assets/motion.min.js` 是模板所需的本地动效运行时，用于离线预览和无动画降级。

## 验收

正式审核前需在 1600×900 和 1280×720 下逐页检查中文字体、断行、底部安全区、Pipeline 三种状态、键盘/滚轮/触屏翻页、ESC 总览、演讲者模式和控制台错误。
