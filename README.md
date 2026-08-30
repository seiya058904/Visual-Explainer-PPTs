# 网页 HTML PPT 素材仓库

这个仓库用于使用 [`guizang-ppt-skill`](C:\Users\admin\.codex\skills\guizang-ppt-skill\SKILL.md) 制作、保存和迭代单文件 HTML 网页演示文稿。

规范来源：<https://github.com/op7418/guizang-ppt-skill>

## 仓库目标

- 以 HTML deck 作为主要交付物。
- 每个制作中的项目独立放在一个有日期和英文语义名称的目录中。
- 保留图片、局部运行资源和必要的参考素材，确保 deck 可以离线打开或复现。
- 不把 skill 源码复制进本仓库；制作时直接使用本机已安装的 skill。
- 新作品必须经过真实浏览器逐页检查和用户审核，才可以进入成品合集。

## 当前目录

| 路径 | 用途 |
| --- | --- |
| `ppt-collection/` | 用户认可后的单 HTML 成品合集；只作为参考样本，不代表所有做法都优秀 |
| `2026-05-13-ai-impact-on-modern-life/` | 独立 HTML deck |
| `2026-05-14-the-art-of-cinema/` | 独立 HTML deck |
| `2026-05-16-lithium-battery-ppt/` | 含模板运行资源的独立 HTML deck |
| `2026-08-15-spf-50-sunscreen-decoding/` | 已审核通过的 Style A 防晒科普 deck |
| `2026-08-15-microwave-where-heat-comes-from/` | 已审核通过的 Style A 微波炉材料选择性加热科普 deck |
| `5.9/` | 已标记的失败品和历史 PPTX/预览素材，不作为参考或质量基准 |

## 新项目约定

推荐目录格式：

```text
YYYY-MM-DD-topic/
├── index.html
├── images/
└── assets/       # 仅放运行所需的本地资源
```

文件夹、HTML、图片和资源文件命名使用英文小写短横线；图片使用 `{页号}-{语义}.{ext}`。HTML deck 应优先保持单文件，只有确实需要离线资源时才添加 `images/` 或 `assets/`。

制作中的项目必须使用：

```text
YYYY-MM-DD-topic-slug/
├── index.html
├── images/
└── assets/
```

完成后先留在日期目录中等待审核。只有用户明确认可，才将最终单 HTML 复制到 `ppt-collection/`。

## 制作流程

1. 先确认风格 A（电子杂志 × 电子墨水）或风格 B（瑞士国际主义）。
2. 使用 skill 中对应的模板、主题和 layout 文档。
3. 生成后检查标题闭合、占位符、主题节奏、图片安全区和底部分页区域。
4. Swiss 风格 deck 运行 skill 提供的 `validate-swiss-deck.mjs`；使用演讲者视图时运行 `validate-presenter-mode.mjs`。
5. 在真实浏览器中逐页检查字体、中文显示、断行、裁切、溢出、构图、动效完成态和翻页交互。
6. 通过用户审核后，才将最终单 HTML 放入 `ppt-collection/`。

## 从成品合集提炼的制作原则

合集只是参考，不是无条件照抄的标准。目前最稳定、最值得复用的是：

- Style A 可以沿着“对象/现象 → 组成系统 → 工作机制 → 历史或社会影响 → 结论/问题”组织叙事。
- 每页只承担一个核心观点，优先根据内容形态选择 `hero`、`stat-card`、`grid`、`callout`、`pipeline` 等已有组件。
- 标题、正文和元数据使用不同字体层级；中文标题主动断行，避免浏览器自动产生孤行。
- 动效服务内容顺序，不为了装饰堆动效；每页必须在静态状态下可读。
- 图片缺失时使用纯文字或结构化布局，不伪造图片效果。
- 不复制某个成品的表面样式，应根据内容形态重新选择模板、主题和 layout。

## 成品进入合集前的浏览器验收

真实浏览器检查是硬门槛，不能由静态代码检查替代：

- 逐页确认标题、正文、数字和中文字体完整显示。
- 确认无缺字、乱码、字体回退异常、标题孤行、图片裁切、内容溢出或导航遮挡。
- 确认留白、左右平衡、信息层级和页面节奏，没有明显拥挤、偏斜或不雅观的构图。
- 等动效完成后再检查最终视觉状态。
- 检查键盘翻页、滚轮/触屏翻页和 ESC 总览。
- Style B 运行 Swiss validator；使用 presenter mode 时运行 presenter validator。

验收未通过时，继续在日期目录中迭代，不得进入 `ppt-collection/`。

## Git 约定

- HTML、图片和 deck 所需的本地资源属于交付物，应纳入版本控制。
- 不提交编辑器配置、依赖目录、测试报告和临时日志。
- 每次提交聚焦一个 deck 或一个明确的仓库维护事项。
