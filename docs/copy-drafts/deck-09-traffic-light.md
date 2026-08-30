# Deck 09 · 红绿灯：三秒钟的物理题

> 选题slug（建议）：`traffic-light-the-physics-of-yellow`
> 状态：文案待审阅

## 认知缺口

流行解释：「黄灯就是'抓紧冲过去'的信号」。
准确解释：黄灯时长是一道刹车物理题——它按路口速度、驾驶员反应时间和制动能力计算，目标是让"既停不下来、又过不去"的两难区消失。红绿灯分配的从来不是时间，是路权。

## 数据底稿

| 数字/事实 | 来源 | 口径备注 |
|---|---|---|
| 1868 年伦敦议会街出现燃气信号灯，次年爆炸致伤 | BBC / 交通工程史一般叙述 | **待核实**：细节口径 |
| 1914 年克利夫兰出现电动交通信号 | American Traffic Signal Co. · 交通工程史 | **待核实**：年份口径 |
| 1923 年 Garrett Morgan 获得 T 形信号专利 | 美国专利档案（US Patent 1,475,024） | 无争议 |
| 黄灯时长公式 t = 1 + v/(2a+2gG)（反应 1 s + 制动项），典型结果 3–6 秒 | ITE 交通工程惯例（Kinematic formula） | 公式为美式惯例；各地区规范有差异 |
| 两难区（dilemma zone）：既无法舒适刹停、也无法清空路口的速度区间 | 交通工程教科书 | 无争议 |
| 信号周期包含全红清空间隔（all-red interval），专供路口清空 | MUTCD 等规范 | 无争议 |

## 分幕表

| 页 | 幕 | 节奏 | 标题句式 | 布局 |
|---|---|---|---|---|
| P1 | 封面 | hero dark | 定义式 | hero |
| P2 | 钩子 | dark | 反差悬念式 | full-width |
| P3 | 定调 | light | 纠偏式 | full-width |
| P4 | ACT I · 物理 | light | 数字具象式 | 数字卡 |
| P5 | ACT II · 公式 | light | 数字具象式 | full-width |
| P6 | ACT II · 两难区 | dark | 揭秘式 | full-width |
| P7 | ACT III · 误解 | light | 纠偏式 | contrast |
| P8 | ACT III · 事故类型 | light | 揭秘式 | contrast |
| P9 | ACT IV · 历史 | dark | 数字具象式 | 时间线 |
| P10 | ACT IV · 行人 | light | 揭秘式 | full-width |
| P11 | 收束 | hero dark | 收束定义式 | hero |

---

## 页面文案

### P1 · hero页
```
chrome:  THE THREE-COLOR MACHINE · 01
kicker:  The Physics of Yellow · 红绿灯
title:   三秒钟<br>的物理题
lead:    黄灯亮起的每一秒，都是用反应时间、刹车距离和路口速度算出来的。它不是让你冲，也不是让你慌——它是一道提前算好的题。
主体:
  - 11 pages · 一场关于物理 · 规则 · 路权的科普
callout: 黄灯不是"快一点"，是"做决定"
source:  ITE · MUTCD · 交通工程史
备注:    hero
```

### P2 · full-width flex
```
chrome:  EVERYDAY PHYSICS · 02
kicker:  The Bet · 赌注
title:   黄灯结束那一秒<br>你赌过什么
lead:    每个驾驶员都体验过那个瞬间：黄灯亮起，油门和刹车之间只剩一次选择。交通工程师的工作，是让这个选择永远有解。
主体:
  - 直觉 [黄灯是催促]
  - 设计 [黄灯是一道算好的缓冲]
callout: 它给的不是时间，是选项
source:  ITE Traffic Engineering Handbook
备注:    contrast
```

### P3 · full-width flex
```
chrome:  ACT I · THE RIGHT · 03
kicker:  Right of Way · 路权
title:   灯分配的<br>不是时间
lead:    好记但不准确的理解是"红绿灯控制时间"。准确的说法是：它把路口这个天然冲突点，按方向切成互不重叠的路权片段。
主体:
  - 冲突点 [两条车流在同一片空间交叉]
  - 切片 [红灯让行、绿灯通行、黄灯过渡]
callout: 红绿灯是路权的分配器
source:  交通工程教科书 · 通行权概念
备注:    myth 铺垫
```

### P4 · 数字卡页
```
chrome:  ACT I · THE BRAKE · 04
kicker:  Stopping Distance · 刹车
title:   停下来<br>需要两段距离
lead:    从看见黄灯到完全停住，车要走两段路：反应距离和制动距离。速度翻倍，两段路都变长——刹停距离远不止翻倍。
主体:
  - ≈1 秒 [驾驶员反应时间（公式默认值）]
  - v²/2a [制动距离随速度平方增长]
  - 两段之和 [真正的刹停需求]
callout: 速度平方级的代价，藏在每个路口
source:  ITE 黄灯时长 kinematic formula 口径
备注:    数字卡
```

### P5 · full-width flex
```
chrome:  ACT II · THE FORMULA · 05
kicker:  3–6 Seconds · 黄灯时长
title:   黄灯秒数<br>是算出来的
lead:    经典公式：黄灯时长 = 1 秒反应 + 制动项 v/(2a+2gG)。速度越高的路口，黄灯越长——典型结果落在 3 到 6 秒之间。
主体:
  - 1 s [反应时间项]
  - v/(2a+2gG) [制动与坡度修正项]
  - 3–6 s [常见路口的黄灯区间]
callout: 它不是拍脑袋，是一道运动学题
source:  ITE kinematic formula（各地区规范有差异）
备注:    full-width
```

### P6 · full-width flex
```
chrome:  ACT II · THE TRAP · 06
kicker:  Dilemma Zone · 两难区
title:   一段<br>进退两难的距离
lead:    如果黄灯太短，会出现一段"两难区"：刹停来不及、通过又闯灯。好的配时让两难区消失——这就是黄灯必须逐路口计算的原因。
主体:
  - 黄灯过短 [既停不下，又过不去]
  - 黄灯合理 [停与走都有解]
callout: 配时的目标，是让每个选择都有解
source:  交通工程教科书 · Dilemma Zone
备注:    dark
```

### P7 · 对比页
```
chrome:  ACT III · THE MYTH · 07
kicker:  Not "Safe" · 误解
title:   红灯<br>不等于安全
lead:    好记但不准确的理解是"红灯最安全"。准确的说法是：红灯只是把冲突分离了——事故类型随之改变：侧撞减少，追尾增多。
主体:
  - 侧撞 [被信号分离，显著减少]
  - 追尾 [突然制动带来的新风险]
callout: 信号改变冲突的种类，不消灭风险
source:  交通安全研究综述（口径待核实）
备注:    myth 页
```

### P8 · 对比页
```
chrome:  ACT III · CRASH TYPES · 08
kicker:  Trade-offs · 风险转移
title:   消灭一种事故<br>制造另一种
lead:    信号灯把最致命的侧撞换成了较轻的追尾。这是工程里常见的交换：风险不会被消灭，只会被重新分配——关键看分配得是否划算。
主体:
  - 信号前 [交叉冲突，后果严重]
  - 信号后 [纵向冲突，后果较轻]
callout: 安全是一笔交换，不是一张证书
source:  交通安全研究综述（口径待核实）
备注:    contrast
```

### P9 · 时间线页
```
chrome:  ACT IV · HISTORY · 09
kicker:  1868 → 1923 · 历史
title:   第一个信号灯<br>先炸了
lead:    1868 年伦敦的燃气信号灯次年爆炸伤人；1914 年电动信号登场；1923 年 Garrett Morgan 的 T 形专利让信号灯拥有了中间档。
主体:
  - 1868 [伦敦燃气信号灯，次年爆炸]
  - 1914 [克利夫兰电动信号]
  - 1923 [Garrett Morgan T 形信号专利]
callout: 秩序工具，也经历过野蛮生长期
source:  美国专利档案 · 交通工程史（细节口径待核实）
备注:    dark
```

### P10 · full-width flex
```
chrome:  ACT IV · WALKING · 10
kicker:  Pedestrian · 行人
title:   绿灯亮了<br>路还没清完
lead:    行人绿灯与车辆绿灯并不完全同步：信号周期里还藏着一段全红间隔，专供最后一辆车清空路口。过街的安全，也被切成了独立的路权。
主体:
  - 行人绿灯 [过街的专属时段]
  - 全红间隔 [所有方向同时禁止，清空路口]
callout: 秩序的细节，都在你看不见的秒数里
source:  MUTCD · all-red interval 规范
备注:    light
```

### P11 · hero页
```
chrome:  THE TAKEAWAY · 11
kicker:  Answer · 收束
title:   红绿灯真正卖的<br>是排队权
lead:    它用三盏灯把冲突切成互不重叠的片段，用一道运动学公式保证每个选择都有解。路口的秩序，本质是让所有人排队，而不是让任何人冒险。
主体:
  - 红让行 · 黄决定 · 绿通行 —— 加一段全红清空
callout: 黄灯不是"快一点"，是"做决定"
source:  ITE · MUTCD · 美国专利档案
备注:    hero
```
