# 待审核精修卡 · 指纹

- 状态：**待用户审核**，不晋级成品库。
- 源目录：`2026-08-30-fingerprints-not-for-grip/`；共 10 页。
- 制作基准：G0 已由主任务核对最新外部 `guizang-ppt-skill`，本轮沿用既有 Style A 主题、页面顺序与动效运行时。
- 审计日期：2026-10-28；范围为实际可见文案、SVG、讲稿备注与可编辑构建片段。

## 叙事精修

把“实验推翻全部防滑”和“唯一不可证明”转为具体条件与实际误差，让科学边界成为同一条叙事。

## 实际页内改动

P2：删除湿手/乳胶手套伪反例，限定干燥亚克力；P4与接触图：真实指尖实验，不是橡胶垫实验；P5–6：排水与振动候选机制保留研究边界，补原研究锚点；P7：个体差异不保证模糊局部指印零误配；P8：PCAST2016认为潜指纹有基础有效性，并报告错误，纠正“无量化基础”泛化；P9：不写演化已先解决触觉。

`docs/build/deck-07-slides.html` 逐节与最终渲染源同步，保留已存在的局部几何修补及封面来源行；未通过 inject.py 重新套模。对应 notes JSON 与运行时备注完全一致，末页均有结束转场。

## 本轮核对来源

- [Warman/Ennos原论文：真实指尖、干亚克力](https://journals.biologists.com/jeb/article-pdf/212/13/2016/1267048/2016.pdf)
- [Scheibert等原论文：仿生触觉研究](https://www.allpsych.uni-giessen.de/journalclub/pdf/Scheibert%20et%20al%202009.pdf)
- [PCAST2016原报告](https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/PCAST/pcast_forensic_science_report_final.pdf)

## 验证与边界

- 已执行 `docs/build/check.py`：图片引用完整、动画对象数量足够、主题无连续三页同类，dark/light hero 均存在。
- 已执行最新外部 skill 的 `validate-presenter-mode.mjs`：0 errors；10 个备注的 talk 项为1–2条，少于默认3–5条的 warning 如实保留。
- 已解析全部本地 SVG XML；已验证幻灯片片段逐节一致、notes JSON 与内嵌运行时一致。
- 三档真实浏览器逐页视觉与交互复验由主任务统一运行；本卡不把静态通过写成视觉通过，也不宣称已获用户认可。
- 剩余边界：2009单一摩擦研究不能证明指纹没有抓握功能；本轮未加入新生物机制或现代算法错误率，报告结论明确属于2016年的评估。

## 经验判断

可复用问题为“数字需带年份、分母、对象及估算边界；SVG/备注与正文须同查同改”，属于现有事实纪律与验收规则的落实。具体修订建议交主任务统一收敛至 AGENTS.md，本卡不修改共享规范。

## 本轮浏览器证据（2026-10-28）

- 1600x900: 10页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1280x720: 10页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 1000x560: 10页；几何/资源异常页 0；页码不符 0；脚本异常 0。已等待字体及入场稳定。
- 演讲者浏览器回归：PASS；备注滚轮与键盘隔离、备注按页保存、观众同步与重连、计时启停、宫格开关、16:9预览、普通滚轮与模拟触摸。
- 本地证据：`.codex/qa-pending-final/`、`.codex/presenter-qa/`。截图仍需逐页人工视觉复核，自动几何通过不等于最终批准。
- 观众投影物理连接、触控硬件手势和所有演讲标注工具不在上述自动化断言范围。
- 页面仍为 Pending Review，未复制到正式成品库。

## 实际截图视觉复核（2026-10-28）

- 已实际查看三档视口全部页面的30张 contact sheets 中本 deck 的3张；检查标题行数、主题节奏、图文平衡、页脚/导航安全区。pipeline 仅依据 initial / step02 / complete 三态，排除常规 pipeline.png 的翻页时序伪影。
- 另以1000×560原尺寸查看 P4、P7、P8；上述截图未见遮挡、真实裁切或标题异常换行。证据：`.codex/qa-pending-final/contact-sheets/`、`shots/`。
- 静态截图不证明动效流畅度或实际投影硬件表现；交互证据沿用上节独立浏览器测试，不宣称用户认可，继续 Pending Review。

## Final standalone evidence — 2026-10-28

- Status remains **Pending Review**; no collection artifact or public promotion.
- Maintained source: `2026-08-30-fingerprints-not-for-grip/index.html`; current source SHA-256 `b124c6b5edecb02ffbf230cbc280cde5ac10e4b9bfc18d8af5e36364cc6ff90d`.
- Final standalone tested file: `.codex/pending-standalone-final/2026-08-30-fingerprints-not-for-grip.html`; SHA-256 `f05fb51af4f7e68b62ec249f728d8d438fad18f747b822a26a2d618be824de60`.
- Final-byte official Chromium evidence: `.codex/qa-pending-standalone-final/pending-results.json`; all 10 pages at 1600×900 / 1280×720 / 1000×560 (30 settled page-viewports), zero recorded overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed at the first viewport, 1600×900, once each.
- Exact-hash offline evidence: `.codex/offline-pending/results.json`; 10 pages at 1280×720 with external network blocked and offered static mode; zero unreadable text (including ancestor clipping), page errors or local failures. No external picture placement in this deck is required.
- Expanded presenter interaction evidence: `.codex/presenter-pending-expanded/results.json`, passed. Final presenter schema validation has zero errors and 10 short-talk warnings; these remain concise speaking cues. This does not certify physical touch or HDMI hardware.
- This append records final byte-bound machine evidence. Actual visual inspection scope and factual boundaries remain in earlier sections; it does not claim a new visual review occurred during ledger reconciliation. Full register: [final audit](../iteration-2026-10-28.md), [release ledger](../release-ledger.json).


## Lower-content follow-up

Width-driven type is now capped by viewport height; oversized frame minima were removed. All pages passed four dynamic viewports, four lower-content regression viewports and the re-exported offline gate. Content and Pending status are unchanged. This source supersedes the earlier layout/hash snapshot; see [repair evidence](../pending-bottom-clipping.md).
