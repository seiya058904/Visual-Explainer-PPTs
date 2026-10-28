# 待审核精修卡 · 红绿灯

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-traffic-light-yellow-physics/`；共 11 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

从“保证每次选择都有解”改为工程降低风险，并使图上的数值服从同一反应与减速假设。

## 实际页内改动

P2/6：缩小两难区，不承诺彻底消失；P4图：1秒反应、3m/s²减速，30km/h为8.3+11.6m，60km/h为16.7+46.3m，约3.2倍；P7–8：可能减少直角碰撞、增加追尾，依条件而异，不宣称消灭或必然以轻换重；P10：红灯清空为延后冲突交通，行人绿灯仍需注意允许转弯；结尾删除万能保证。

`docs/build/deck-09-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [FHWA：黄灯配时风险与影响因素](https://highways.dot.gov/safety/proven-safety-countermeasures/yellow-change-intervals)
- [MUTCD11版：黄色与红灯清空间隔](https://mutcd.fhwa.dot.gov/pdfs/11th_Edition/mutcd11theditionhl.pdf)
- [Florida DOT：信号设置可能增加追尾](https://fdot.gov/Safety/resources/faq.shtm)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；11 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：刹车示例为恒减速教学计算，不构成驾驶指令；黄灯法律与公式参数随地区不同。历史页保留既有故事，未在本轮追到1868/1914的全部原始档案。

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
- 另以1000×560原尺寸查看 P4、P5、P10；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- 可读性边界：1000px下SVG的次级标注/来源字较小；主体结论可读，但未把所有图内小字判为投影距离可读。图中文字尺寸的进一步改善及最终验收交主任务收敛。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

### 图内小字复修

- 实际1000×560截图发现P4次级标注偏小后，逐张调整对应SVG：机制/数据字提升至30px viewBox字号，缩短标签并保留关键数值和适用条件；非批量全局CSS替换。
- 已实际查看新的1000px原图 `.codex/qa-approved-final/traffic-p4-1000-fixed.png`，机制标签清楚、无裁边；此证据替代前述对应页小字可读性的遗留项。图内来源仍按次级层级呈现，不等于投影硬件认证。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-traffic-light-yellow-physics/index.html`; current source SHA-256 `1cfcd153d9b903cc2140ef5c3738f94272f570514b55a849f7aeb6f20c2bc35a`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-traffic-light-yellow-physics.html`; SHA-256 `9e2fadd44a7c30f386008a77f7a8760cb47b808ed96b9d85a34f128c61298f0d`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 11 pages at 1600×900 / 1280×720 / 1000×560 (33 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 11 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 11 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).
