# 待审核精修卡 · 玻璃

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-glass-transparent-solid/`；共 11 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

把透明的能量解释与普通窗玻璃紫外截止分开，并用真实制造史拆解室温流动传闻。

## 实际页内改动

P2：反射限定为每面约4%及近垂直入射；P3：金属反射与吸收，不只消费光子；P4：纯SiO₂本征吸收边8–9eV量级，重绘SVG能量轴，移除UV大于3.1eV就跨禁带的错误；P5：普通窗玻璃UVB/UVA受组分厚度镀膜影响；P7–8：冕法中心可留厚牛眼、厚薄来自制造，删零变形与通用软化温度；P10–11：避免首次廉价制造和全部紫外皆拦截等过满结论。

`docs/build/deck-03-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [SiO₂光吸收原始研究：8–9eV吸收边](https://www.sciencedirect.com/science/article/pii/S0927025608000566)
- [WHO：窗玻璃与紫外波段](https://cdn.who.int/media/docs/default-source/radiation/protecting-workers-from-ultraviolet-radiation.pdf)
- [Corning：室温玻璃流动误解](https://info.cmog.org/node/631)
- [Corning：冕法及厚中心牛眼](https://allaboutglass.cmog.org/definition/crown-glass)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；11 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：8–9eV是纯SiO₂吸收边量级，不是所有玻璃统一禁带；本轮未对每个脆性/晶体类比做材料模型验证。

## 经验判断

可复用问题为“数字需带年份、分母、对象及估算边界；SVG/备注与正文须同查同改”，属于现有事实纪律与验收规则的落实。具体修订建议交主任务统一收敛至 AGENTS.md，本卡不修改共享规范。

## 本轮浏览器证据（2026-10-28）

- 1600x900: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1280x720: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1000x560: 11页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 演讲者浏览器回归：PASS；备注滚轮与键盘隔离、备注按页保存、观众同步与重连、计时启停、宫格开关、16:9预览、普通滚轮与模拟触摸。
- 本地证据：`.codex/qa-pending-final/`、`.codex/presenter-qa/`。截图仍需逐页人工视觉复核，自动几何通过不等于最终批准。
- 观众投影物理连接、触控硬件手势和所有演讲标注工具不在上述自动化断言范围。
- 页面仍为 Pending Review，未复制到正式成品库。

## 实际截图视觉复核（2026-10-28）

- 已实际查看三档视口全部页面的30张 contact sheets 中本 deck 的3张；检查标题行数、主题节奏、图文平衡、页脚/导航安全区。pipeline 仅依据 initial / step02 / complete 三态，排除常规 pipeline.png 的翻页时序伪影。
- 另以1000×560原尺寸查看 P4、P8；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- P8 原截图仍见“0变形”绝对化残留，已将源与 deck-03 片段改为“无下淌”；本 contact sheet 是修订前快照，最终P8截图与SVG小字修补由主任务另行复验，不能用旧图宣称最终接受。
- 可读性边界：1000px下SVG的次级标注/来源字较小；主体结论可读，但未把所有图内小字判为投影距离可读。图中文字尺寸的进一步改善及最终验收交主任务收敛。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-glass-transparent-solid/index.html`; current source SHA-256 `61cf9e949283f2f26ef31535924249169770682d5b667689203179fa6071ca7d`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-glass-transparent-solid.html`; SHA-256 `41e6392f1174b1180883d54779bef375b3b55023292ead0dc278ae15cc585320`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 11 pages at 1600×900 / 1280×720 / 1000×560 (33 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 11 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 11 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).
