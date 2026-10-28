# 螺丝：把世界固定在一起 — 事实复核与维护记录

- 原状态：Approved保留；本轮修订产物尚未写入`ppt-collection/screws.html`，由主任务在新SHA验收后替换。
- 维护源：`2026-10-28-legacy-maintenance/screws.html`。
- 新候选：`.codex/screws-factual-final/screws.html`。
- 冻结SHA-256：`434f0975192ebd99b55d1c9cbf3b752b47950b63e205d74d27dcace07b7ee9fd`。
- 修订前源及校验值保留`.codex/baselines/screws-factual-before.html*`；旧版QA不冒充该新SHA的验收。

## 逐页判断（20页）

| 页 | 主题 | 本轮判断与处理 |
|---|---|---|
| 01 | 封面 | 保留“最小的信任单位”作为编辑性比喻，不增加尺寸/强度数据。 |
| 02 | 术语 | screw/bolt定义改为常见用途，避免把简化用途说成无例外分类。 |
| 03 | 螺纹几何 | 每转前进量明确单线螺纹条件；直径、啮合、牙型共同影响承载，不以单一参数保证抗拉脱。H28明确1944历史资料。 |
| 04 | Whitworth | ASME #234与NBS历史资料确认1841、55°；删除“第一次拥有互换能力”的过度历史归因。 |
| 05 | Sellers | ASME #234确认1864年4月提出60°；NBS螺纹委员会报告确认牙顶/牙底平面。不是当年瞬间完成全美普及。 |
| 06 | 标准化引文 | 保留编辑性概括与既有局部字号；不伪装成ASME逐字引文。 |
| 07 | 预紧力 | 保留弹性伸长/夹紧机理；这是一种预紧螺栓连接的解释，不宣称覆盖每类紧固件。 |
| 08 | 扭矩 | 保留既有摩擦/装配条件边界；卡片Best Method改Optional Method，彻底取消扭矩角法通用最佳暗示。 |
| 09 | 松动 | 删除最常见/最危险排名；改为横向循环滑移可诱发自松动。来源改NASA-STD-5020B，避免无定位Junker机构署名。 |
| 10 | 锁紧 | 英文不再把可拆螺纹说成永久连接；区分抑制松脱与保持预紧，去除普通弹簧垫圈当然有效暗示；按环境验证。 |
| 11 | 材料 | 删除镍基合金700°C通用温度；温度受牌号/涂层/连接设计限制；不锈钢不再一律牺牲强度。撤下已废止ASTM F568，改具年份NASA历史材料指南。 |
| 12 | 表面处理 | 把决定寿命改为影响耐蚀性；镀镉不再笼统宣称更好。旧QQ-P-416/无版本ASTM组合不充当现行依据，改NASA1990概览。 |
| 13 | 疲劳 | 删除每一百万次必然长裂纹的虚构节拍；改足够循环应力下可能萌生/扩展，寿命依载荷、材料、设计。 |
| 14 | 公差 | 删除4g/4H适合精密、8g/8H建筑足够的行业保证；6g/6H只作等级示例，量规通过条件以具体规范判断。标ISO965-6:2025与ISO1502:1996。 |
| 15 | 防拆槽型 | 删除维修授权/任何人都能打开/专利控制等法律或动机判断；改提高拆卸工具门槛，可用于安全与防篡改，可维修性还取决于结构和资料。 |
| 16 | 航空 | 230万个为787整机零部件，保留明确分母；删除每颗紧固件都有固定到期更换周期；依适用维修资料决定更换/复用，不再伪引Boeing Fastener Manual。 |
| 17 | 航天 | 按NASA-STD-5020B2021及2026再确认核对；改强度/寿命/有害分离的连接级评估，允许试验或分析；删除无冗余、单颗承担全部安全、预紧>分离力万能公式。 |
| 18 | 失效模式 | 删除松动最常见/疲劳最危险的无范围排名；保留各失效机理的可辨识描述。 |
| 19 | 维修入口 | 保留可拆性作为一般设计差异，不增加所有螺纹必能复用或所有焊接永不可维修的工程承诺。 |
| 20 | 结语 | 保留原叙事收束、色彩和页序，不新增事实或改模板。 |

## 一手证据与版本边界

- P4–5：[ASME Landmark #234](https://www.asme.org/about-asme/engineering-history/landmarks/234-the-united-states-standard-screw-threads)明确Whitworth1841、Sellers1864年4月及55°/60°；[ASME原册PDF](https://www.asme.org/wwwasmeorg/media/resourcefiles/aboutasme/who%20we%20are/engineering%20history/landmarks/234-the-united-states-standard-screw-threads.pdf)印页3说明推广是长期过程。原卡211/226链接不再作为依据。
- P4–5：[NBS Handbook H28（1944）](https://nvlpubs.nist.gov/nistpubs/Legacy/hb/nbshandbook28-1944.pdf)为历史牙型资料；[NBS National Screw Thread Commission报告](https://nvlpubs.nist.gov/nistpubs/Legacy/MP/nbsmiscellaneouspub61.pdf)历史节明确Sellers60°及平牙顶/牙底。这里只用于历史，不是当前采购规范。
- P7–13：[NASA-RP-1228 Fastener Design Manual（1990）](https://ntrs.nasa.gov/api/citations/19900009424/downloads/19900009424.pdf)，材料、涂层、锁紧、疲劳、扭矩章节提供机理依据；2008勘误说明原手册以航空用途为主，不应把锌/镉涂层介绍自动套入真空航天应用。本deck不给材料额定温度/紧固扭矩/化学处理配方。
- P9–10/P17：[NASA-STD-5020当前官方目录](https://standards.nasa.gov/standard/NASA/NASA-STD-5020)显示B版、2021-08-06、2026-01-05再确认。[B版正式PDF](https://standards.nasa.gov/system/files/tmp/NASA-STD-5020B%20Revalidated%201-5-2026.pdf)§4.4.4允许试验或分析证明分离要求，§4.6及附录B.4区分锁紧与预紧保持。目录不将它列为全NASA强制标准，页面不宣称所有航天项目一律适用。
- P11：[ASTM F568M-07目录状态](https://store.astm.org/f0568m-07.html)明确2012撤销且无替代；本轮仅核对公开目录元数据，未把旧技术文本冒充现行条款，也不推断新版替代关系。
- P14：[ISO965-6:2025官方摘要](https://www.iso.org/standard/86908.html)列出包括6H/6g在内的公差等级；[ISO1502:1996官方目录](https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/00/60/6092.html)为量规/量检标准。未访问付费全文，故不保留具体允许转数或行业适用等级结论。
- P15：[Sandia SAND2021-6376M](https://www.sandia.gov/app/uploads/sites/223/2021/05/Tamper-Resistant-Fastener-SAND2021-6376-M.pdf)展示以延迟未经授权接近、保护资产为目的的防拆紧固件；[TR制造商安全应用说明](https://www.trfastenings.com/company/newsroom-and-media/product-news/security-fasteners-securing-our-safety)亦列安全用途。本deck不从槽型推断保修、专利或维修权法律结论。
- P16：[波音787供应商质量说明](https://787updates.newairplane.com/787-Suppliers/World-Class-Supplier-Quality)给出约230万整机部件；[FAA Aviation Maintenance Technician Handbook](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/amtg_handbook.pdf)紧固件/安装章节强调适用制造商资料。没有“所有紧固件固定到期换新”的通用结论。

## 审阅边界与新候选验收

- 已逐页重读全部20页。本轮列出的历史、温度、标准版本、锁紧、维修周期和NASA适用性疑点，已用一手依据核对，或改为有明确条件的机理表述；没有靠删除“待核实”字样代替核实。
- 保留原Style A、页序、视觉节奏和运行时；改动限定于具体不准确文本及其来源标签。不是针对实际机械连接的设计批准、维修指令或现行规范全文解读。
- 新SHA依赖预检与规范导出已通过；以下均为新SHA的独立验收，旧报告不移用。

## 新冻结字节的最终验收

- SHA-256：`434f0975192ebd99b55d1c9cbf3b752b47950b63e205d74d27dcace07b7ee9fd`。候选固定于`.codex/screws-factual-final/screws.html`，源文件与导出可追溯；未写入正式成品目录。
- 正式浏览器报告：`.codex/qa-screws-factual-final-canonical/approved-screws.json`；20页×1600×900、1280×720、1000×560共60视图，console/pageerror/failed/真实文字越界/foot-nav遮挡/不可见正文/坏图均为0；1600档ESC总览与缩略图选页通过。
- 已人工阅读修订全文及三档全页contact sheet，P9–18的修改保留原版式与层次；无因事实限定新增的裁切或遮挡。
- 独立全外网阻断报告：`.codex/offline-screws-factual-final-canonical/results.json`；逐页20/20，静态API真实激活，正文与内嵌/本地图像可读，0pageerror、0不可见节点、0外部图片位置，报告SHA与冻结文件一致。
- 最终源diff为49处文本行的精确替换，未改模板/运行时；`git diff --check`通过。主任务仍需负责正式成品替换及其后续全库构建，不在本卡预先宣称。


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `434f0975192ebd99b55d1c9cbf3b752b47950b63e205d74d27dcace07b7ee9fd`
- Three-viewport all-page QA: `.codex/qa-screws-factual-final-canonical/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/screws.html`; pages: 20.
