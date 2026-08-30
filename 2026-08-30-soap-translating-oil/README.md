# 02 肥皂：把油污拆成能冲走的碎片

- 文案来源：`docs/copy-drafts/`（用户已审核通过）
- 风格：Style A 电子杂志 · 主题色：dune
- 页数：11 页 · 图片：02-oil-water、04-molecule、08-envelope（SVG 技术图解，可后续替换为照片）
- 字体：CDN（Noto Serif SC / Playfair Display 等，含本地回退栈）
- 状态：**待用户审核**（未认可前不得进入 `ppt-collection/`）

## 预览

```
python -m http.server 8123
# 浏览器打开 http://127.0.0.1:8123/2026-08-30-soap-translating-oil/index.html
```

直接双击 index.html 也可以（动效走 CDN 兜底）。

## 验收记录（2026-08-30）

- 静态检查：data-anim 数量达标、无 [必填] 残留、主题节奏合规（≥1 hero dark + ≥1 hero light、无连续 3 页同主题）
- 真实浏览器：1600×900 与 1280×720 双视口逐页几何测量全清；chrome/kicker/标题/lead/meta 无裁切
- Pipeline 页：初始态 step 低亮、pipeAdvance 推进逻辑、全点亮完成态均已验证
- ESC 总览、低功耗降级（revealStatic）已验证
- 控制台无报错；动效运行时 motion-ready 正常

## 待核实项

见 `docs/copy-drafts/` 对应文案文件的数据底稿表（标「待核实」的数字在认可前需确认来源或改为定性表述）。
