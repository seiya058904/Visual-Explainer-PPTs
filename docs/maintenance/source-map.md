# Source mapping evidence

The 38 approved artifacts and 10 pending records in `site/catalog.json` were inventoried from visible HTML and file paths. The 10 pending records are only the `2026-08-30-*` batch. `5.9/` was excluded. A title/topic match alone is not proof. `verified` means the candidate folder HTML and approved artifact have identical normalized non-SVG HTML text after scripts, styles, SVG, and markup are excluded; this verifies content equivalence, not authorship or upstream provenance. `candidate` denotes a plausible topic/variant without that identity; `orphan` has no approved topic candidate.

| Source candidate | HTML inspected | Possible approved target | Mapping status | Evidence |
|---|---|---|---|
| 2026-05-13-ai-impact-on-modern-life | 2026-05-13-ai-impact-on-modern-life/ai-impact-on-modern-life.html | ai-impact-on-modern-life | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-05-14-the-art-of-cinema | 2026-05-14-the-art-of-cinema/the-art-of-cinema.html | the-art-of-cinema | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-05-16-lithium-battery-ppt | 2026-05-16-lithium-battery-ppt/index.html | lithium-battery-tetherless-world | candidate | Topic/name points to this artifact, but visible-text identity is not established (normalized lengths 2156 vs 2233); treat as a candidate or alternate, not provenance proof. |
| 2026-08-14-ai-weather-learning-the-atmosphere | 2026-08-14-ai-weather-learning-the-atmosphere/index.html | ai-weather-learning-the-atmosphere | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-14-electric-grid-bottleneck | 2026-08-14-electric-grid-bottleneck/index.html | electric-grid-bottleneck | candidate | Topic/name points to this artifact, but visible-text identity is not established (normalized lengths 2484 vs 2773); treat as a candidate or alternate, not provenance proof. |
| 2026-08-14-electric-grid-bottleneck-magazine | 2026-08-14-electric-grid-bottleneck-magazine/index.html | electric-grid-bottleneck | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-14-glp-1-beyond-weight-loss | 2026-08-14-glp-1-beyond-weight-loss/index.html | glp-1-beyond-weight-loss | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-14-planetary-defense-changing-the-odds | 2026-08-14-planetary-defense-changing-the-odds/index.html | planetary-defense-changing-the-odds | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-active-noise-cancellation-fighting-sound-with-sound | 2026-08-15-active-noise-cancellation-fighting-sound-with-sound/index.html | active-noise-cancellation-fighting-sound-with-sound | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-display-how-images-are-made | 2026-08-15-display-how-images-are-made/index.html | display-how-images-are-made | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-microbial-chocolate-designing-flavour | 2026-08-15-microbial-chocolate-designing-flavour/index.html | microbial-chocolate-designing-flavour | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-microwave-where-heat-comes-from | 2026-08-15-microwave-where-heat-comes-from/index.html | microwave-where-heat-comes-from | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-qr-code-inside-the-black-white-squares | 2026-08-15-qr-code-inside-the-black-white-squares/index.html | qr-code-inside-the-black-white-squares | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-spf-50-sunscreen-decoding | 2026-08-15-spf-50-sunscreen-decoding/index.html | spf-50-decoding-sunscreen | verified | Normalized non-SVG HTML text (script/style/SVG content excluded) is identical to the approved artifact. |
| 2026-08-15-why-qr-codes-are-readable | 2026-08-15-why-qr-codes-are-readable/index.html | qr-code-inside-the-black-white-squares | candidate | Topic/name points to this artifact, but visible-text identity is not established (normalized lengths 41 vs 2129); treat as a candidate or alternate, not provenance proof. |

## Artifact mapping totals

- Approved artifacts: 38 total; 13 have verified source-file paths, none have candidate-only source mapping, and 25 have no mapped source file (`orphan`).
- Three verified mappings retain an additional historical or unresolved variant in catalog `sourceCandidates`: lithium battery (the 2026-05-16 draft), electric grid (the alternate non-magazine source), and QR codes (the alternate `why-qr-codes-are-readable` folder).
- Pending drafts: 10; each `source` points to its own existing preview/index file and is marked `verified` as a direct file-path mapping.

## Coverage notes

- Historical source candidate folders inspected: 15 (excluding the ten pending August 30 projects); the maintained lithium source was added afterward as a separate verified source path.
- No `5.9/` contents were used.
- Catalog `citationLabel` stores visible institution labels from HTML; it is not the source-file mapping. `source` stores a relative HTML file path, `sourceCandidates` stores unresolved alternatives, and `mappingStatus` applies per catalog record.
- The 25 approved `orphan` records have no mapped source file among the inspected dated project folders; this does not prove that no upstream source ever existed.

## Maintained lithium source evidence

- Catalog source: `2026-10-28-lithium-battery-maintenance/lithium-battery-tetherless-world.html`.
- The preserved baseline `.codex/baselines/lithium-battery-tetherless-world.original.html` and the approved artifact both hash to SHA-256 `6b557c82140b9cd6b98848ce53220bc8d559493c68bde80844786e0ef16ac108`.
- The maintained source is an intentional factual-text correction from that preserved baseline, so it is a verified derivation path rather than a byte-identical current artifact. The current artifact replacement remains parent-owned.
