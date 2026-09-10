# Visual Explainer PPTs

A collection of visual explainer and educational presentation projects covering science, technology, engineering, everyday phenomena, and other knowledge topics.

> **Built with `guizang-ppt-skill` — the core of this repository.** Every project here (and every deck in `ppt-collection/`) is created with the `guizang-ppt-skill` web-HTML-PPT framework: its style systems (Style A e-magazine / Style B Swiss international), theme palettes, layouts, slide schema, motion rules, and QA workflow are the single production standard for the whole repo.

## About

This repository is a long-term maintained collection of visual knowledge-explainer presentation projects. Each project explains one topic through visual storytelling, breaking everyday and technical phenomena down into clear, well-designed slides. The collection grows over time: new topics are added as explainers are designed, reviewed, and approved. All decks are produced with `guizang-ppt-skill`, which defines the repository's shared visual language and quality bar.

## Projects

- One folder corresponds to one topic.
- Folders follow the `YYYY-MM-DD-topic-name` naming scheme (e.g. `2026-08-30-bridges-always-moving`).
- Each project may contain a single-file HTML deck (`index.html`), images, source assets, scripts, render resources, or related reference material.
- Approved final decks are also kept as standalone single HTML files in `ppt-collection/`.
- `docs/` holds process artifacts (drafts, build scripts, analysis, archives); `5.9/` holds historical and failed experiments kept for reference only.

## Topics

Current projects cover, among others:

- **Everyday science & phenomena** — soap, glass, microwave heating, caffeine, fingerprints, zippers, tap water, traffic-light physics, air conditioning, bridges, active noise cancellation, sunscreen (SPF).
- **Technology & engineering** — QR codes, how displays make images, electric-grid bottlenecks, lithium batteries, chips, Wi-Fi, fiber optics.
- **Artificial intelligence** — AI's impact on modern life, AI weather forecasting.
- **Health & biology** — GLP-1 beyond weight loss, microbial chocolate, longevity, industrial pills.
- **Society, economy & culture** — the art of cinema, credit, insurance, queueing, shipping containers, canned civilization, and biographies (Bill Gates, Jensen Huang).

## Repository Structure

```text
.
├── YYYY-MM-DD-topic-name/   # one folder per explainer project
├── ppt-collection/          # approved final single-HTML decks
├── docs/                    # drafts, build scripts, analysis, archive (process artifacts)
├── 5.9/                     # historical / failed experiments (reference only)
├── AGENTS.md                # project working rules
└── README.md
```

## Conventions

Project naming, the deck-making workflow, and Git conventions are documented in `AGENTS.md` (project rules) and `PPT 高质量文案生成 Prompt｜精简优化版.md` (copywriting standards). The workflow in both documents is built around `guizang-ppt-skill` — it is the foundation every project in this repository is made with.

## License

No license has been selected for this repository yet; no open-source grant is implied. All rights reserved unless explicitly stated otherwise.
