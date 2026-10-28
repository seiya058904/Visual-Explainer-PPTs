# Pending decks: lower-content clipping repair

The user reported clipped lower content when opening a deck directly. Reproduced on air-conditioning P5 at 1920×900: the frame was 718px high with 780px of content; the final note was clipped and lower bullets approached the footer. Previous near-16:9 checks did not cover this wide/short viewport.

## Repair

- Cap each viewport-width font size by the equivalent 16:9 viewport-height size, retaining existing pixel readability floors and deck themes. This addresses the shared responsive sizing defect, not a visual reskin.
- Remove inline 80vh minimum heights from frame containers, so they share available space with chrome and footers.
- No visible copy or scientific claims changed (HTML text-node comparison against the previous commit). No candidates promoted.
- Review links now include a source-content hash to bypass stale HTML caches.

## Actual validation

- Dynamic Chromium: all 111 pages at 1600×900, 1280×720, 1000×560 and 1920×900 (444 page-viewports), exit 0; pipeline/overview/navigation and existing geometry gates passed.
- Static lower-content regression: all 111 pages at 1920×900, 1536×730, 1280×600 and 1000×560 (444 page-viewports), zero ancestor clips or footer-clearance failures. Navigation index is asserted before measurement.
- Re-exported standalone files: all 111 pages passed network-blocked core reading.
- Visually inspected all ten 1920×900 contact sheets and full-size air-conditioning before/after pages. Contact sheets are not used as proof of small-text legibility.
- Catalog audit: 48 entries, zero errors. Skill upstream remains c91369c449d34755d320a8b81d0734000d99d1ab.

```text
node docs/build/browser-qa.mjs --mode pending --base http://127.0.0.1:8901 --out .codex/bottom-fix/dynamic --shots .codex/bottom-fix/dynamic/shots --viewports 1600x900,1280x720,1000x560,1920x900 --concurrency 5
node docs/build/test-pending-layout.mjs .codex/bottom-fix/layout-regression
node docs/build/test-offline.mjs --manifest .codex/bottom-fix/standalone-manifest.txt --out .codex/bottom-fix/offline --concurrency 4
python docs/build/build-review.py
```

## Changed source evidence

| Pending work | Pages | Source SHA-256 |
|---|---:|---|
| air-conditioning-moving-heat | 12 | `96a7fd205fe5b73118ed9ee0d5dd61e320d050640788a5241c3ea95f6b4ee180` |
| bridges-always-moving | 11 | `af7a8caa258675a8289dc423999e369fa0f5c220676865a01c88617e8084dd53` |
| caffeine-blocking-sleepiness | 11 | `b6b4e12f287b53abb4cf99e51a540b10f4d397d38b15400a8bb23d79a4c12a3a` |
| container-the-box | 12 | `6bb94d22ae56eea330f24ab541ccb2ac286b978c8761751b185d063a58f21bb8` |
| fingerprints-not-for-grip | 10 | `1423d10cb537623a6277cc7183c521fd5782fb8ba96861b1ada3cc66c151c74c` |
| glass-transparent-solid | 11 | `e4e95b99b0d18ef20700d617bb1b5240be6c202f219f39c3f3ed8f05d8e26990` |
| soap-translating-oil | 11 | `7f8773eb11a8a2b80680b9a5304957bcc01596a31704b5281764b34fe362aa9d` |
| tap-water-clean-process | 11 | `92eead18fa28769df36f3fe9cf5ec639bb0cfb06f61f65cee0cb07e0d1e71062` |
| traffic-light-yellow-physics | 11 | `c1a14b3eb495a186f48c5680a21c3041a5cf08b5ea10de2f1eca7cb2f5e73eb7` |
| zipper-line-of-teeth | 11 | `9f5d68c18cba9bd34d5a67c93da74d2fcfb196e545308d8068b8e8ce62d6a74f` |

## Before / after

Air-conditioning P5, same 1920×900 browser viewport:

![Before: bottom note clipped](../images/pending-ac-bottom-before.webp)

![After: note and footer separated](../images/pending-ac-bottom-after.webp)

Scope: desktop direct-reading windows tested above; this repair does not claim mobile portrait or every possible browser zoom. Raw evidence remains under `.codex/bottom-fix/`.
