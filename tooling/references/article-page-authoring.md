# Authoring a new article page

A new article page passes or fails on four things that are cheap at write time and expensive afterwards: the
source copies, the frontmatter enums, the house prose rules, and the screen record. Get them in this order.

## 1. Dedupe before drafting

The same paper often arrives twice — as an arXiv link in one batch and as the publisher PDF in another. Match
on `source_url`, on the arXiv id and on the DOI across `content/en/articles/`, `raw/papers/` and `raw/` before
writing a word:

```
grep -rl '<arxiv-id-or-doi>' content/en/articles/ raw/
```

A match means the batch item is already ingested; report it and screen only the genuinely new ones. Say which
source was the duplicate and what page it already lives on, rather than silently dropping an input the user
counted.

## 2. Source copies land with the page, not after it

For every ingested source, in the same step that writes the page:

- `pdf-sources/<slug>.pdf` — the PDF as delivered
- `pdf-sources/<slug>.pdf.txt` — the `pdftotext -layout` extraction
- `raw/papers/<slug>.md` — the same extraction, which is what the gates read

`pdf-sources/` and `raw/` are gitignored, so they never enter a commit and cannot be recovered from one. The
page's `sources: ['raw/papers/<slug>.md']` is the only pointer to them, and `verify-number-grounding.py`
silently skips a page whose raw file is missing — it prints `[no raw source found - cannot verify]` and the
gate exits 0. A half-finished batch therefore looks fully verified. If a turn is interrupted between writing
the page and copying the extraction, the page ships ungrounded; check that every `sources:` path resolves.

## 3. Frontmatter enums are closed and section-scoped

`validate-facets.py` is the arbiter and names the correct home when a value is misplaced:

```
python3 tooling/scripts/validate-facets.py
```

- **Facet values belong to one registry section.** The same slug cannot be filed under whichever field reads
  naturally: `design-thinking` lives in `foundations`, not `pedagogy`; `trust` and `trust-calibration` live in
  `ethics`; `academic-integrity` is `foundations`; `authentic-assessment`, `oral-assessment`,
  `process-oriented-assessment`, `ai-detection` are `assessment`. When the gate objects, move the slug to the
  section it names and read the error as a placement bug, not a wording bug.
- **`audience` is a short closed list.** `teachers` and `teacher educators` are rejected; `instructors`,
  `curriculum designers`, `instructional designers`, `researchers` and `administrators` are accepted. When in
  doubt use `instructors` and let the schema reject you once rather than guessing at near-misses.
- **`level` and `discipline` feed the concept screen.** Their labels are slugified into candidates (`primary
  education` also implies `k-12`; `higher ed` implies `higher-ed`), so the screen record needs a verdict for
  each of those too, not only for the facet slugs.
- Schema fields are `published` and `source_url` (not `date`/`url`), and multi-value enum fields are
  space-separated inside the bracket.

## 4. House prose rules

- Body target 750–1750 words, `## Key Findings` with 5–7 numbered items, 3–5 practice items, 2–6 limitations.
- `check-us-english.py` has no `--changed`; pass the explicit paths. Respell the body and never the Citation.
  Repeated offenders in drafted prose: artifact, personalization, organizing, program, behavior, favored,
  optimization, signaling, generalize, organized.
- A source with no data gets an italic notice saying so and no invented figures from it; report the numbers it
  cites about other studies as attributed claims, not as its findings.
- Give every paper a distinct author-year slug, and when no public DOI exists, drop the link from the Citation
  title rather than inventing one.

## 5. Screen only after the weaves and links exist

Writing the page, weaving into concept pages, adding inline links and recording the screen are one sequence in
that order: links and fronts count as declarations, so a record written from the frontmatter alone comes back
short. See the `concept-weave-audit` skill for the audit side of the same workflow.
