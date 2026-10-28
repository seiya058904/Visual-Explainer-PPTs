# Gallery maintenance

The source of directory truth is `site/catalog.json`. Public output contains only
Approved works. Pending remains local even after technical QA. Existing standalone
paths are stable public interfaces; do not rename them casually.

## Build and inspect

1. `npm ci`
2. `npm test`
3. `npm run build` (rebuilds only allowlisted files; for a separate build use `python docs/build/build-gallery.py --out .codex/build-02`)
4. `python -m http.server 8901 --bind 127.0.0.1`
5. Open `http://127.0.0.1:8901/dist/`.
6. `npm run test:site`

Browser tools resolve Playwright normally. If using an existing compatible browser,
set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to its verified executable. Otherwise run
`npx playwright install chromium`. Do not hardcode a user's machine into scripts.

## Add or refine an explainer

1. Establish the source-to-artifact mapping and explicit approval status.
2. Edit the source; preserve factual citations, custom runtime behavior and imagery.
3. Run `python docs/build/export-standalone.py <source> --check-only`.
4. Export into staging, inspect at all three deck viewports, then replace the approved
   artifact using the exporter's transaction. Pending never enters the collection.
5. Update its catalog metadata. `source` is a file path; `citationLabel` is only a
   displayed citation label, not a fact-check result.
6. Run `python docs/build/build-gallery.py --sync-readme` to refresh README navigation. With the source server running, `npm run covers` captures changed approved files.
   Requires Python Pillow. Captures cache by artifact SHA; inspect changed images.
7. Rebuild, run tests and inspect responsive screenshots. Record meaningful facts
   and page changes in the work's review card. Update reusable existing rules only.

## Local candidate review

`python docs/build/build-review.py` creates `.codex/review/index.html`.
Open it on the source server, not the public build. It links the ten candidate sources
and their review records. This page must never be copied to the Pages artifact.

## Deployment boundary

GitHub Pages was not configured at the live baseline (`has_pages: false`). The CI
workflow builds an allowlisted artifact and tests `/Visual-Explainer-PPTs/` locally.
It does not publish while the per-deck and third-party provenance review is open.
Enable Pages and add deployment only after the acceptance ledger has no blocking
items; do not replace that decision with a successful static build.

## Rights

Guizang's upstream template code is AGPL-3.0. Keep applicable notices and provide
corresponding source for derived code when distributed. Deck imagery has independent
rights: the repository's public availability is not a blanket reuse license. Fonts
and GSAP notices are included with the generated gallery's assets. This document
does not claim all existing deck assets have cleared provenance.
