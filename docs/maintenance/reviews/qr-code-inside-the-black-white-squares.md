# 二维码为什么缺一块还能扫？ — 深审与交付记录

> 本轮交付：已从维护源重新导出至原有成品路径；Approved 状态保留。14 页三档逐页检查与断网核心阅读检查通过。最终 SHA-256：`a6205b0b1bc1b8f754d2c21a10e0cb59c6e7639e8c4e6ba8caa086d562b9411d`。事实和视觉变更见下文；旧阶段记录不替代这里的最终状态。

- Artifact: `ppt-collection/qr-code-inside-the-black-white-squares.html`
- Status: Approved retained under the user-authorized refinement scope
- Verified slide count: 14
- Style: A
- English editorial title: Inside the Black and White Squares of a QR Code


## 2026-10-28 深审与源文件事实精修

已逐页读取14页实际正文与讲稿中的高风险数字。源：`2026-08-15-qr-code-inside-the-black-white-squares/index.html`；本轮仅在源文件修订并导出暂存，未直接覆盖approved artifact。

P6 21×21到177×177、40版本、每级+4核对正确。P7数字7089/英数字4296补Version40-L理论上限；1817的Kanji模式限兼容字符集，不能等同任意Unicode汉字。P8保留7/15/25/30%并明确分母是全部码字恢复率，非任意遮盖面积。P10原Logo不保证可任意遮盖边界保留，P11四module白边与P13可读不等于可信保留。

本轮核对资料：

- [DENSO版本与容量](https://www.qrcode.com/en/about/version.html)
- [DENSO纠错及码字分母](https://www.qrcode.com/en/about/error_correction.html)
- [DENSO1994开发史与基础](https://www.denso-wave.com/en/system/qr/fundamental/qrcode/qrc/)

未完成/边界：适用标准QR Model2，不泛化MicroQR/rMQR。真实损坏与定位结构、码字分布和解码器有关；本轮没有实机生成并遮挡扫码测试，不能将表格百分比作扫描保证。

验证：依赖预检和实际standalone暂存导出均通过，无本地依赖遗漏。输出`.codex/approved-stage/2026-08-15-qr-code-inside-the-black-white-squares.html`；浏览器三档逐页复验由主任务统一运行，本卡不把静态或导出成功等同视觉验收。

- Presenter手势隔离：源文件提供`__pptPresenter`且全部运行时锚点精确匹配，已应用共享`runtime-compat.py`的`isolate_presenter_gestures`；仅此兼容补丁，最终演讲者回归由主任务执行。

## 最终快照实际视觉复核（2026-10-28）

- 实际查看`.codex/qa-release/contact-sheets/`本deck的1600×900、1280×720、1000×560全页contact sheets；13份共39张。pipeline仅依据initial/step/complete，不以常规pipeline.png误捕的后页判定。
- 另实际查看原尺寸高风险页：P7、P8、P9（未另标者为1000×560）。检查文字行数、图文平衡、图像裁切、页脚与导航遮挡；静态图不能证明动效流畅或物理投影距离。
- 上述视觉复核未发现需新增修改的构图/文字缺陷；整份机器QA结果以主任务最终报告为准。
