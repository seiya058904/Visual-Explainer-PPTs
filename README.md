# 📐 Visual Explainer PPTs

**Ideas you can see, not just read.**

A growing collection of browser-native, visually structured explainers for science, engineering, technology and everyday phenomena.

[**Browse explainers ↓**](#pick-a-question) · [Approved standalone decks](ppt-collection/) · [Production rules](AGENTS.md) · [Writing guide](PPT%20高质量文案生成%20Prompt｜精简优化版.md)


> **One production language. Many subjects.** Every project is made using the **`guizang-ppt-skill`** web-HTML-PPT framework; its visual systems, slide schema, motion discipline and acceptance workflow are the shared standard.

## Pick a question

Start with the *question*, then follow the deck. Every item below is a directory actually present in this repository; it is a small curated selection rather than a claim that every folder is a released deck.

这些项目不是单张静态海报，而是围绕一个问题组织的可视化讲解。下面是仓库中已有的部分主题入口：

| Theme | Project |
| --- | --- |
| 🧼 Everyday science | [How soap works](2026-08-30-soap-translating-oil/) · [Why glass is transparent](2026-08-30-glass-transparent-solid/) |
| 🔍 Digital systems | [Why QR codes are readable](2026-08-15-why-qr-codes-are-readable/) · [How displays make images](2026-08-15-display-how-images-are-made/) |
| ⚙️ Engineering | [Why bridges move](2026-08-30-bridges-always-moving/) · [The electric-grid bottleneck](2026-08-14-electric-grid-bottleneck/) |
| ☕ Science of everyday life | [How caffeine affects sleep](2026-08-30-caffeine-blocking-sleepiness/) · [How microwaves heat](2026-08-15-microwave-where-heat-comes-from/) |
| 🌍 Systems and the world | [Tap water as a process](2026-08-30-tap-water-clean-process/) · [Planetary defense](2026-08-14-planetary-defense-changing-the-odds/) |
| 🎬 Culture and society | [The art of cinema](2026-05-14-the-art-of-cinema/) · [The container as infrastructure](2026-08-30-container-the-box/) |

目录会随着真实项目增加而扩展；此处仅列已存在的部分主题，不代表所有文件夹都处于同一验收阶段。

## 🎨 One visual grammar

| System | Character |
| --- | --- |
| **Style A** | E-magazine / 电子杂志：叙事节奏、信息与视觉结构并重 |
| **Style B** | Swiss International / 瑞士国际主义：网格、字阶、留白和清晰的信息层级 |
| **Authoring** | 结构化页面 schema、受控主题色、可读的中文排版与有证据的事实表达 |
| **Motion & QA** | 有意义的动效、浏览器真实渲染、布局和溢出验收 |

视觉主题可以变化，但项目必须遵守同一生产规范，不把任意模板混入既有体系。不要仅根据 `5.9/` 中的失败实验来定义成品质量。

## How the archive is organized

```text
YYYY-MM-DD-topic-name/  One project per topic
ppt-collection/         Approved, standalone HTML exports
docs/                   Build tools, analyses and process records
5.9/                    Historical/failed experiments (not a quality reference)
AGENTS.md               Project and visual-production rules
```

- **`ppt-collection/`** 保存已认可的单文件 HTML 成品；不应为了补资源而添加与其绑定的额外图片目录。
- **项目文件夹** 可包含演示 HTML、源素材与过程文件；不是所有工作目录都是最终交付。
- **`docs/`** 存放构建与验收依据，而不是另一套相互冲突的视觉规范。

## Creating a new explainer

1. 先明确一个值得解释的真实问题与可核实的事实依据。
2. 按 [文案制作规范](PPT%20高质量文案生成%20Prompt｜精简优化版.md) 建立清晰叙事。
3. 以 `guizang-ppt-skill` 的 Style A / B、布局与动效契约制作网页 PPT。
4. 通过浏览器检查文字、配图、动效、视口适配及所有溢出。
5. 获得认可后再由规定的独立导出流程进入 `ppt-collection/`。

仓库内的强制流程、排版红线和质量验收见 [`AGENTS.md`](AGENTS.md)。无关的全局格式化不得覆盖这些约束。

## License

当前仓库**未指定整体开源许可证**。公开展示不自动授予复制、改编或再分发所有成品与素材的权利；各主题使用的资料与第三方媒体应分别核对来源。
