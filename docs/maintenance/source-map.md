# Source mapping evidence

The 38 approved artifacts and 10 pending records in `site/catalog.json` were inventoried from visible HTML and file paths. The 10 pending records are only the `2026-08-30-*` batch. `5.9/` was excluded. The slide-count audit found 569 approved slides and 111 pending slides (680 total); four catalog counts were corrected on 2026-10-28 (elevator 10, insurance 15, cinema 15, weather forecast 15). A title/topic match alone is not proof. For original dated-project mappings, `verified` means the candidate HTML and artifact have identical normalized non-SVG text; for maintenance mappings, it means a hash-backed local derivation exists. Neither establishes external authorship or upstream provenance. `candidate` denotes a plausible topic/variant without identity evidence; `orphan` means no local source-file path is mapped.

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

- Approved artifacts: 38 total; all 38 now have verified local source-file paths (including hash-backed maintained derivations). No artifacts remain orphaned in this inventory. `verified` here means a path to the inspected original source or a documented local derivation; it does not establish external authorship.
- Three verified mappings retain an additional historical or unresolved variant in catalog `sourceCandidates`: lithium battery (the 2026-05-16 draft), electric grid (the alternate non-magazine source), and QR codes (the alternate `why-qr-codes-are-readable` folder).
- Pending drafts: 10; each `source` points to its own existing preview/index file and is marked `verified` as a direct file-path mapping.

## Coverage notes

- Historical source candidate folders inspected: 15 (excluding the ten pending August 30 projects); the maintained lithium source was added afterward as a separate verified source path.
- No `5.9/` contents were used.
- Catalog `citationLabel` stores visible institution labels from HTML; it is not the source-file mapping. `source` stores a relative HTML file path, `sourceCandidates` stores unresolved alternatives, and `mappingStatus` applies per catalog record.
- At the initial inventory, 25 approved artifacts had no source path among inspected dated folders. All 38 artifacts now have a mapped original or hash-backed maintained derivation; this does not prove that no other upstream source ever existed.

## Maintained lithium source evidence

- Catalog source: `2026-10-28-lithium-battery-maintenance/lithium-battery-tetherless-world.html`.
- The preserved baseline `.codex/baselines/lithium-battery-tetherless-world.original.html` and the approved artifact both hash to SHA-256 `6b557c82140b9cd6b98848ce53220bc8d559493c68bde80844786e0ef16ac108`.
- The maintained source is an intentional factual-text correction from that preserved baseline, so it is a verified derivation path rather than a byte-identical current artifact. The current artifact replacement remains parent-owned.


## Factual-review maintenance copies

Five former orphan artifacts now have explicit, hash-backed maintenance derivation sources. For each, the dated source was copied from the approved artifact; `.codex/baselines/<id>.original.html` preserves the original SHA-256, which matched the approved artifact before edits. The maintained source is a corrected derivation, not a claim of byte-identical upstream provenance. `site/catalog.json` points to these paths and marks mapping `verified` as a local derivation path.

| Approved artifact | Maintained source | Baseline SHA-256 |
|---|---|---|
| `ai-and-life` | `2026-10-28-legacy-maintenance/ai-and-life.html` | `daaec50bc0782429345a599239377eeee227ef91919572d94d211d13b0d80c39` |
| `chips` | `2026-10-28-legacy-maintenance/chips.html` | `28104e9d5735319a6b5812c69e9e8fbf5000a7e70de04d6746cb1cf6c1e42cbd` |
| `canned-civilization` | `2026-10-28-legacy-maintenance/canned-civilization.html` | `ae72d37831da5d99017d5600b04dd86d479bf62125b6c80ad6af1a25b78a3d53` |
| `medical-longevity` | `2026-10-28-legacy-maintenance/medical-longevity.html` | `db1b1c2a0e275eebb36440ea407fa5b0c0c0b9437bc5177951a70f5865eae2c4` |
| `clocks` | `2026-10-28-legacy-maintenance/clocks.html` | `cb6cf34a22530d89714c7b86a9561dbcf7eaded9601834e2cb3faf1677500dcc` |

Standalone exports for these five sources are staged under `.codex/legacy-stage/`; the approved artifacts remain unchanged pending parent-owned QA/integration.

| `cold-chain` | `2026-10-28-legacy-maintenance/cold-chain.html` | `2f9734c6b8b87edd00fa8f077e569343ec5c2ed41f013cfb889970d2eb8fc468` |

| `concrete-liquid-skeleton` | `2026-10-28-legacy-maintenance/concrete-liquid-skeleton.html` | `0ad01f00d4f2d76a7cb9085a803b20e63165eefe0f6b14351fd1012f490f393d` |

| `keys-and-locks` | `2026-10-28-legacy-maintenance/keys-and-locks.html` | `keys-and-locks` | verified | Hash-backed maintenance derivation copied from the approved artifact; factual text corrections recorded in the review. |
| `wifi` | `2026-10-28-legacy-maintenance/wifi.html` | `wifi` | verified | Hash-backed maintenance derivation copied from the approved artifact; verified IEEE/Wi-Fi Alliance evidence and scoped fixes recorded in the review. |

## Recovered orphan derivations added 2026-10-28

Seven artifacts initially classed as orphans now have hash-backed local maintenance derivations created by the separate legacy review. These are derivative source files, not proof of upstream authorship or external-source provenance. The approved artifact remains the immutable baseline until the parent integrates a QA-approved replacement.

| Approved artifact | Maintained source | Mapping status | Citation labels |
|---|---|---|---|
| `airplane` | `2026-10-28-legacy-maintenance/airplane.html` | verified derivation | NASA / FAA / IATA / Airbus / Boeing |
| `bill-gates-biography` | `2026-10-28-legacy-maintenance/bill-gates-biography.html` | verified derivation | Gates Foundation / Lakeside / Microsoft |
| `credit` | `2026-10-28-legacy-maintenance/credit.html` | verified derivation | World Bank / FICO / CFPB / IMF / NY Fed |
| `elevator` | `2026-10-28-legacy-maintenance/elevator.html` | verified derivation | Otis / CDC-CPWR / Burj Khalifa |
| `insurance` | `2026-10-28-legacy-maintenance/insurance.html` | verified derivation | NAIC / Swiss Re / OECD |
| `jensen-huang` | `2026-10-28-legacy-maintenance/jensen-huang.html` | verified derivation | NVIDIA / Stanford / SIA / IEEE |
| `navigation` | `2026-10-28-legacy-maintenance/navigation.html` | verified derivation | GPS.gov / USCG / Google / Scientific Reports |

## Remaining orphan derivations added 2026-10-28

Six final artifacts now have maintained sources copied from their approved baselines. Each baseline SHA-256 below matched the approved artifact before source edits; the maintained copies are intentional derivations, not byte-identical provenance claims.

| Approved artifact | Maintained source | Baseline SHA-256 |
|---|---|---|
| `fiber-optics-glass-nervous-system` | `2026-10-28-legacy-maintenance/fiber-optics-glass-nervous-system.html` | `c60c1374d0e8a8ec782c60d3d998f2ec891f3aff93bc598f5e0494c5c9ad6618` |
| `queueing` | `2026-10-28-legacy-maintenance/queueing.html` | `0512309a363b93ebffaf5d9d72ec7f0af06a62b1af0fea0a72d0c01df399ce8f` |
| `screws` | `2026-10-28-legacy-maintenance/screws.html` | `93564f7e3cc6417d0022f9f4e1f41feb3d60acb875743724abf9588c209f5f00` |
| `tires` | `2026-10-28-legacy-maintenance/tires.html` | `757e32106e12c75ddbeef8ec2ea1a828e33a26f9ea89ee74bba8f51a9e03d9f4` |
| `twenty-years` | `2026-10-28-legacy-maintenance/twenty-years.html` | `ade0dfd68b7fb6f11c469766350c6af371e9383a6fed4dd9cd52e5e5709c7d41` |
| `world-cup` | `2026-10-28-legacy-maintenance/world-cup.html` | `ff8c3a53b603a3398b32d9245ed4851e8c286ff09f46f2730496d5e30cfd9964` |

## Maintained-source baselines added 2026-10-28

| Approved artifact | Maintained source | Baseline SHA-256 |
|---|---|---|
| `keys-and-locks` | `2026-10-28-legacy-maintenance/keys-and-locks.html` | `e14512da651d33ec1104c010c57198b65219ba987c4a398d30fd9a45d6545eda` |
| `wifi` | `2026-10-28-legacy-maintenance/wifi.html` | `05346a62ca357e3640f3f2e39631ea8d9d8cb4592503f6cc706cc3145b6beb23` |

| `weather-forecast` | `2026-10-28-legacy-maintenance/weather-forecast.html` | `weather-forecast` | verified | Hash-backed maintenance copy; WMO source counts reconciled in the review. |

| `weather-forecast` | `2026-10-28-legacy-maintenance/weather-forecast.html` | SHA-256 baseline | `7031fbfb7176c24ed3c03967cf35716d970fc2a28827954657c416d6516837da` |

| `science-of-garbage` | `2026-10-28-legacy-maintenance/science-of-garbage.html` | `science-of-garbage` | verified | Hash-backed maintenance derivation; corrected UNEP denominator and date context are recorded in the review. |

| `science-of-garbage` | `2026-10-28-legacy-maintenance/science-of-garbage.html` | SHA-256 baseline | `d977bb6187f0e597fc0744a7842ef4584ec5ce2d910aa1405587c230501cecf5` |

| `pills-industrial-miracle` | `2026-10-28-legacy-maintenance/pills-industrial-miracle.html` | `pills-industrial-miracle` | verified | Hash-backed factual maintenance derivation; see review for source-specific claim replacements. |

| `pills-industrial-miracle` | `2026-10-28-legacy-maintenance/pills-industrial-miracle.html` | SHA-256 baseline | `ba1928e77d3df0b90596ef1d5f49cd4ee0cd9d11b89a75fa6acca286a87ef4a1` |
