# 钥匙与锁：安全感的技术史 — 静态审阅记录

- Artifact: `ppt-collection/keys-and-locks.html`
- Status: approved artifact; this record does not constitute renewed acceptance
- Inferred slide count: 20
- Style: A
- English editorial title: Keys, Locks, and the History of Security


## Fact review and maintained-source changes (2026-10-28)

The dated source is a copy of the approved HTML with a preserved baseline at `.codex/baselines/keys-and-locks.original.html` (SHA-256 `e14512da651d33ec1104c010c57198b65219ba987c4a398d30fd9a45d6545eda`). The approved artifact was not edited.

- Ancient wooden locks: the original combined an “oldest known” superlative with a Nineveh location and an approximate 4,000-year date. The cited ASME history supports ancient Egyptian wooden pin-tumbler locks at about 4,000 years, but not the specific Nineveh attribution or global superlative. The maintained source now identifies ancient Egyptian examples and avoids assigning a unique origin site. [ASME, Linus Yale Jr.](https://www.asme.org/topics-resources/content/linus-yale-jr)
- Bramah lock: the original misstated the prize as £200 and said the lock remained unopened for 50+ years. Bramah’s own company history supports first manufacture in 1784 and patent in 1787; its lock-history material says the 1801 shop-window challenge offered 200 guineas and that Alfred Hobbs opened the challenge lock at the 1851 Great Exhibition. The revised copy corrects currency and dates, avoids the “unopened” phrasing, and notes that accounts differ on elapsed opening time. [Bramah UK history](https://www.bramah.co.uk/default.asp?lnc=about_history), [Bramah lock brochure](https://www.bramah.com.au/wp-content/uploads/2014/06/Bramah-Kaye-Padlock-Brochure-Draft-2013.pdf)
- Yale timeline: the original placed Linus Yale Sr.’s pin-tumbler patent in 1848. Yale’s company history dates Sr.’s door-lock patent to 1844 and Jr.’s cylinder/flat-key patent to 1865; the maintained source uses those dates and describes the mechanism more precisely. [Yale heritage](https://www.yalehome.com/in/en/campaigns/our-heritage), [US Patent 48,475](https://patents.google.com/patent/US48475A/en)
- Smart-lock figures: the original $27.7B (2024) and $81.4B (2030) revenue figures were out of scale with other industry estimates and lacked an identifiable source. A 2026 HKEX prospectus, citing Frost & Sullivan, reports global shipments of 59.9M units in 2024 and projects 89.9M in 2029. The maintained slide switches to these unit figures and labels the second as a forecast. [HKEX prospectus](https://www1.hkexnews.hk/app/sehk/2026/108186/a130197/sehk26020601302.pdf)
- Other narrative claims were checked against the cited organizations; no additional changes were made where statements were broadly framed or source-supported. This was a source/factual pass, not a complete verification of every depicted historical artifact.

## Visual review boundary

A 1000×560 contact sheet of all 20 slides showed no obvious clipping in this deck. The approved browser baseline reports footer-overlap flags on slides 14 and 20 at all three viewports; these overlap flags appear to be sensitive to lower-page geometry and are not resolved by the static contact sheet. Treat visual status as preliminary pending post-edit browser QA and direct settled inspection of those pages. No fresh three-viewport QA has yet been run on the maintained copy.

## Final ancestor-clip correction — 2026-10-28

P3/P9/P19: tightened only those pages’ lead/grid spacing and prevented stat number/unit wrapping, restoring 古埃及木制锁具、英国工程师、不再只是铁匠的手艺、CSA 统一数字访问标准 and 钥匙不再被握在手里. Facts and text retained.

- Before source SHA-256: 9dd1dd600e1f1e27f5b9689abcd5ac4559cf9157758ca277cd88ab9b586e7892 (preserved in .codex/clip-fixes-baseline/).
- Final frozen standalone: .codex/clip-fixes-candidates-v1/keys-and-locks.html; SHA-256 da273c2c53688842ffabf436dbdbf50fed6e91d01752833781058cd31fec5c7d. Exporter: no remaining local dependencies. No collection artifact replaced.
- Official final-byte browser QA: .codex/qa-clip-fixes/approved-results.json, exit 0; 20 pages × 1600×900 / 1280×720 / 1000×560, zero overflow, footer/nav overlap, invisible text, broken images, console/page errors or failed requests. ESC overview and selection passed once each at 1600×900 only.
- External-network-blocked static QA: .codex/offline-clip-fixes/results.json, 1280×720, settle 1000ms; all 20 pages passed, including ancestor clipping checks; zero unreadable text, page errors or local dependency failures.
- Actual visual inspection: full-size blocked-network before/after target pages in .codex/clip-before/ and .codex/clip-after/, plus final-byte dynamic target pages at 1000×560 in .codex/qa-clip-fixes/shots/; target text is visible with bottom clearance. No claim of renewed whole-deck factual acceptance.


## Integrated verification

Approved status retained. Source exported through the repository exporter; published bytes match the tested standalone exactly. Earlier intermediate-state notes above are superseded by this result.

- Artifact SHA-256: `da273c2c53688842ffabf436dbdbf50fed6e91d01752833781058cd31fec5c7d`
- Three-viewport all-page QA: `.codex/qa-clip-fixes/approved-results.json`.
- Source: `2026-10-28-legacy-maintenance/keys-and-locks.html`; pages: 20.
