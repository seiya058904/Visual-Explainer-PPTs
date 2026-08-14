# AI Weather · Learning the Atmosphere Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with verification checkpoints.

**Goal:** Build a self-contained Style A web presentation that explains how AI and physics-based forecasting can work in parallel for a non-specialist audience.

**Architecture:** Start from the Style A `template.html`, replace its theme tokens with Indigo Porcelain, and fill the existing single-page deck shell with 13 semantic slides plus stable presenter notes. Remove external font, icon, and motion imports so the deck runs without network access; keep the template’s inline navigation, presenter mode, WebGL background, and a small inline static/pipeline reveal fallback.

**Tech Stack:** One HTML file, inline CSS/JavaScript inherited from the Guizang template, system font fallbacks, no external images, no CDN, no added dependencies.

## Global Constraints

- Style A「电子杂志 × 电子墨水」only.
- Theme is the preset Indigo Porcelain; do not introduce custom colors.
- Audience is non-meteorology/non-AI listeners; target talk length is 20–30 minutes.
- Exactly 13 slides unless browser validation proves a local split is required.
- Use the user-provided copy, numbers, and sources as the content baseline; do not independently research or expand facts.
- Do not use external images, fonts, CDN URLs, or network resources.
- Keep the project in `2026-08-14-ai-weather-learning-the-atmosphere/`; do not promote to `ppt-collection/`.
- Preserve unrelated existing worktree changes.

---

### Task 1: Scaffold the offline Style A deck shell

**Files:**
- Create: `2026-08-14-ai-weather-learning-the-atmosphere/index.html`
- Create: `2026-08-14-ai-weather-learning-the-atmosphere/README.md`

**Interfaces:**
- Produces a runnable HTML deck containing the template’s navigation, overview, presenter mode, WebGL background, and empty slide insertion point.
- The later slide tasks consume the `<!-- SLIDES_HERE -->` marker and `window.__SPEAKER_NOTES__` array.

- [ ] Create the dated project directory and copy `C:\Users\admin\.codex\skills\guizang-ppt-skill\assets\template.html` to `index.html`; do not copy the Swiss template.
- [ ] Replace the document title with `天气预报开始不再只靠方程 · AI Weather` and replace the six theme variables with the Indigo Porcelain preset:

```css
--ink:#0a1f3d;
--ink-rgb:10,31,61;
--paper:#f1f3f5;
--paper-rgb:241,243,245;
--paper-tint:#e4e8ec;
--ink-tint:#152a4a;
```

- [ ] Remove the Google Fonts preconnect and stylesheet tags; update the font variables to system fallbacks beginning with `Georgia`, `"Microsoft YaHei UI"`, `"Cascadia Mono"`, and `"Consolas"`.
- [ ] Remove the `unpkg.com/lucide` script and its `lucide.createIcons()` call; use no icon markup in the slides.
- [ ] Replace the Motion One module block with an inline no-network controller that keeps all non-pipeline content readable, dims only `[data-anim="step"]` and `[data-anim="arrow"]` on pipeline slides, and returns `true` from `window.__pipeAdvance` only when it reveals the next step.
- [ ] Write `README.md` with the selected style/theme, no-external-resource constraint, source-baseline note, and the current state `待审核前制作中`.
- [ ] Confirm `rg -n 'fonts.googleapis|fonts.gstatic|unpkg.com|jsdelivr.net|cdn.jsdelivr|\[必填\]' index.html` returns no matches.

### Task 2: Add the 13 semantic slides and stable presenter notes

**Files:**
- Modify: `2026-08-14-ai-weather-learning-the-atmosphere/index.html` at `<!-- SLIDES_HERE -->` and `SPEAKER_NOTES`

**Interfaces:**
- Each slide is `<section class="slide ..." data-slide-id="semantic-slug">` with a unique semantic ID and one of `hero dark`, `dark`, `light`, or `hero light`.
- `window.__SPEAKER_NOTES__` contains one record per slide in the same order; every record includes `id`, `title`, `purpose`, `talk`, and `transition`.

- [ ] Add the following stable slide IDs in order: `initial-conditions`, `data-assimilation`, `numerical-weather-prediction`, `compute-cost`, `learned-forecasting`, `graphcast-breakthrough`, `aifs-operational`, `ensemble-forecasting`, `noaa-aigfs`, `cyclone-tracks`, `smoothing-problem`, `not-physics-free`, `hybrid-forecasting`.
- [ ] Apply the approved cadence: `hero dark`, `light`, `dark`, `light`, `dark`, `light`, `hero light`, `dark`, `light`, `dark`, `light`, `dark`, `hero light`.
- [ ] Use the Style A structures: Hero Cover for slide 1, stat cards for slides 2/6/7/8/9, Pipeline for slides 3 and 12, Before/After for slides 5 and 10/11, quote treatment for slides 4 and 13, and a compact explanatory flex/grid treatment where no image exists.
- [ ] Keep the visible copy concise for non-specialists while preserving the user’s key numbers and sources: approximately 60 million observations, GraphCast `<60 seconds`, 89.3%, AIFS 25 Feb 2025, 51 members, 16 days/40 minutes/0.3%, track versus intensity, ERA5, and Physics + AI.
- [ ] Use manual `<br>` breaks for long Chinese headings; do not use emoji; use no image paths or image placeholders.
- [ ] Mark at least 4 independent visual objects per slide with `data-anim`, except where a pipeline slide uses its explicit `data-anim="step"`/`data-anim="arrow"` objects.
- [ ] For pipeline slides, keep kicker/title/lead/meta outside step dimming and use only `[data-anim="step"]` and `[data-anim="arrow"]` for progressive reveal.
- [ ] Add 13 presenter note records with 1.5–2.0 minutes each, keeping the planned total under 90% of the 20–30 minute window; do not invent live interactions, demos, or external facts.

### Task 3: Run structural and content checks

**Files:**
- Test: `2026-08-14-ai-weather-learning-the-atmosphere/index.html`

- [ ] Count slides and stable IDs with PowerShell and confirm both equal 13:

```powershell
$p = '2026-08-14-ai-weather-learning-the-atmosphere/index.html'
$html = Get-Content -Raw -Encoding UTF8 $p
([regex]::Matches($html, '<section class="slide')).Count
([regex]::Matches($html, 'data-slide-id="[^"]+"')).Count
```

- [ ] Check the title, required-marker absence, theme cadence, and source labels:

```powershell
rg -n '<title>.*</title>|模板必填|\[必填\]|data-slide-id|class="slide' $p
```

- [ ] Confirm no three adjacent sections share the same `light`/`dark` theme and at least one `hero dark` and one `hero light` exist.
- [ ] Confirm every slide has a matching presenter note ID and every note has the five required fields.
- [ ] Confirm pipeline selectors do not contain a broad `[data-anim]` dimming rule and `window.__pipeAdvance` contains an explicit `return true` on successful reveal.
- [ ] Run `git diff --check` and `git status --short`; report unrelated pre-existing changes separately.

### Task 4: Perform real-browser visual and interaction validation

**Files:**
- Test: `2026-08-14-ai-weather-learning-the-atmosphere/index.html`

- [ ] Open the local file in the in-app browser and inspect every slide at 1600×900 after the page settles; repeat at 1280×720.
- [ ] Check Chinese glyph rendering, serif headline fallback, manual line breaks, lead/body contrast, stat-card explanations, bottom foot/nav clearance, and overall dark/light rhythm.
- [ ] Check keyboard, wheel/touch navigation, ESC overview, `B` static mode, and `P` presenter mode.
- [ ] On slides 3 and 12, verify initial state: kicker/title/lead/meta are readable, only steps/arrows are dimmed; verify one interaction reveals exactly one next step and the completed state leaves every step readable.
- [ ] Check browser console for errors and record any issue as Confirmed Bug, Needs Investigation, or verified clean.
- [ ] Run the presenter validator with a 30-minute target:

```powershell
node 'C:\Users\admin\.codex\skills\guizang-ppt-skill\scripts\validate-presenter-mode.mjs' '2026-08-14-ai-weather-learning-the-atmosphere/index.html' --target-minutes 30
```

- [ ] Only after all checks pass, report the project as `待审核`; do not copy it to `ppt-collection/`.
