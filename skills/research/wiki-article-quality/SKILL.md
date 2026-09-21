---
name: wiki-article-quality
description: "Repair + enrich wiki article pages: escaped chars, lists."
category: research
---

# Wiki Article Page Quality & Repair

Use when the user asks to **repair, enrich, or fix defects in an existing article page** in the AI-ed research wiki (`<WIKI>`) — e.g. "this article is broken/thin/corrupted", "the numbering is wrong", "there are escaped character codes", "enrich this article", or "let me know if the full text is missing". Distinct from `wiki-concept-page-design` (create-vs-enrich concept pages), `wiki-link-bulk-editing` (bulk link sweeps), and the user-owned `wiki-inline-links` / `research-wiki` (per-page inline links and full ingestion). This skill is the **repair/enrichment QA layer** for article pages.

## Workflow

1. **Read the article page** (`articles/<slug>.md`) to find defects and gauge thickness. Also check the raw source path in its `sources:` frontmatter.
2. **If the raw source is missing or abstract-only**, retrieve the full text before enriching (see Full-text retrieval below). Tell the user whether the full text was found; an abstract-only page can only be enriched to the depth the source allows.
3. **Fix structural defects** (see Pitfalls): escaped character codes, ordered-list numbering, same-text pipes, frontmatter integrity (see Pitfall #11 for the frontmatter checklist; it is the typed-metadata model, with no `tags` field).
4. **Enrich from the full text**: add a Synthesis blockquote, a `Key Findings` numbered list (CONTIGUOUS — see Pitfall #1), body sections, and connect to wiki concepts.
5. **Add inline `[[slug]]` links** for every concept mentioned in the narrative body (aggressive per the maintainer's standing rule — including conceptually-similar phrases). Use the `wiki-inline-links` scanner (user-owned but its script still runs): `python3 <AGENT>/research/wiki-inline-links/scripts/inline_link_scan.py <WIKI> <slug>`. Verify every suggested concept slug exists first.
6. **Add back-links** from connected concept pages (reciprocal Connected Articles entry + optionally a research bullet).
7. **Verify** — link integrity must PASS: no same-text pipes `[[x|x]]`, no heading links, balanced `[[`/`]]`, no broken slugs (check against `concepts/` + `articles/` filenames + `conceptRedirects.ts`), no escape sequences. Then run the typed-metadata gate: `python3 tooling/scripts/validate-facets.py` (or `python3 tooling/scripts/run-gates.py` to run every gate). It is a hard gate, not a suggestion, and it lives in `wiki.config.yaml` under `build.gates`.
8. **Deploy** per the wiki pipeline: bump `updated` timestamp → regen `index.md`/`journal.md` + `llms*.txt` → `npm run build` → `log.md` → commit+push → **verify deploy via `gh run list`** (green build ≠ deployed) and curl the live URL for HTTP 200.

### Scheduled section sweep

A nightly cron job (`AIEd article sections sweep (gated)`) runs the same work unattended, and its guards are the
point of it: `tooling/scripts/section-sweep-queue.py` builds batch list files from the filesystem (never
transcribed slugs), `tooling/prompts/section-sweep-brief.md` is the single brief every worker reads, and
`tooling/scripts/audit-article-sections.py --slugs-file <batch>` gates each batch before anything is committed —
a batch that fails is discarded with `git checkout --` and reported, never committed. The job commits locally
and never pushes, so the push approval stays with the maintainer, which is the only review gate that catches
prose that is structurally valid but reads wrong.

## Pitfalls
- **Adding a canonical section next to a legacy heading creates the duplicate.** Before writing
  `## What this means for practice` or `## Limitations` onto a page, check for an older heading covering the
  same ground (`## Implications`, `## Implications for AI in Education`, `## Implications for practice`,
  `## Limits`, `## Limitations and Open Questions`). The right move is a MERGE into the canonical section with
  the legacy heading deleted, keeping every substantive point; writing a second canonical section beside it
  leaves the page saying the same thing twice under two names. A batch that added sections without checking
  produced 86 such pages. Note the legacy heading may also sit *after* practice in the page order, which is
  what a merged page must correct.
- **Run the gates before the commit, not in the same batch as it.** A gate that fails after the commit puts a
  known defect into history and costs a second commit to repair. Two batches in one session committed first
  and discovered afterwards that a subagent had written a British spelling (`grey`, `modelled`) — caught only
  because the gate ran, but the fix then needed its own commit and the branch carries a commit that failed the
  gate at the moment it was made.
- **Never hand-type the page list when delegating a batch.** Generate the work list from the filesystem
  (enumerate the pages that actually lack the section), verify every slug resolves to a file, write the list
  to a file, and tell each subagent to read that file. Slugs transcribed by hand into a delegation prompt do
  not stay attached to reality: a batch went out with mostly non-existent slugs, eight children correctly
  refused to guess, and the run produced three pages out of fifty-six. The children's refusal was right — a
  subagent that "finds" a plausible nearby page and edits it is worse than one that stops.
- **A child's claim that a page is missing is evidence about the prompt, not about the wiki.** When children
  report assigned files absent, check the assignment against disk before re-dispatching; if the paths are real,
  the list was mangled in transit.

### 0. ALWAYS bump `updated` on significant edits — including concept pages (the maintainer corrected this)
When you make a substantive edit or addition to ANY page — enriching an article, adding a section to a concept page, cross-linking, adding Connected Articles/bullets — you **must bump the `updated:` frontmatter timestamp** to a current full date+time ISO value (`2026-08-23T12:15:00-04:00`), not just articles. the maintainer flagged this explicitly when I edited the UDL, Special Education, and Inclusive Learning concept pages but left their `updated:` stale (UDL was still `2026-08-15`). This matters because the right-sidebar "Recently Updated Concepts" and RSS sort by `updated` via string compare — a stale timestamp hides the page from "recently updated" and mis-orders it. **Bump it in the SAME edit pass as the content change**, not as an afterthought, and bump every page you touched in the batch (a multi-page enrichment should touch many `updated:` fields). Full date+time (not date-only) — date-only values tie within a day and fall back to alphabetical order.

### 1. Ordered-list numbering breaks when items are separated by blank lines (bit the maintainer TWICE)
In CommonMark, a blank line between ordered-list items splits the list, so every item restarts at `1.` — the rendered page shows "1. 1. 1. ...". **Fix:** remove the blank lines so items `1. 2. 3. 4. 5.` are contiguous. This bit two articles this session (`credential-cognitive-stewardship-ai-assessment`, `strydom-human-gai-paradigms-2026`). When writing a Key Findings list, write items back-to-back with NO blank lines between them. Detection: `grep -rlP '^\d+\. .*\n\n^\d+\. ' articles/ concepts/` finds affected pages.

### 2. Literal escape-sequence corruption from PDF extraction
Article bodies sometimes contain literal `\u2014` (em-dash), `\n` / `\n\n` (paragraph breaks), `\u00e1` (accented char) — the escape codes written literally instead of rendered, from text-extraction that preserved escapes. **Scan** the whole wiki: `grep -rlP '\\u[0-9a-fA-F]{4}|\\n|\\t|\\r' articles/ concepts/`. **Fix:** replace `\u2014`→em-dash, `\n\n`→real paragraph break, `\u00e1`→á, etc. Check authors/names in the Citation too (e.g. `Hern\u00e1ndez-Leo`→`Hernández-Leo`). Always re-scan after fixing to confirm clean.

### 3. Same-text pipes introduced while adding inline links
When the scanner suggests a link and you write `[[slug|slug]]` (e.g. `[[feedback|feedback]]`, `[[assessment|assessment]]`, `[[learning-gains|learning-gains]]`), the verifier flags it. **Fix:** if display text equals the slug, use bare `[[slug]]`; only pipe when the visible text differs (e.g. `[[cognitive-offloading|over-reliance]]`). Double-check after every patch round.

### 4. Link-target specificity — don't over-match to umbrella concepts (the maintainer corrected this)
When adding inline links, the scanner dictionary and aggressive matching will happily link a **concept-specific phrase to a broad umbrella concept**. Confirmed instances (2026-08-23) of the SAME class on multiple articles:
- "constructivist principles" → `[[learning-theories]]` instead of `[[constructivist]]` (a `constructivist` concept page exists)
- "student engagement" → `[[student-experience]]` instead of `[[student-engagement]]`
- "self-efficacy" → `[[self-regulated-learning]]` instead of `[[self-efficacy]]`
- "assessment design" → `[[ai-education]]` (earlier) AND → `[[authentic-assessment]]` (2nd occurrence on `bassett-ai-detectors-education-2026`) instead of `[[assessment]]` — the maintainer: "why is 'assessment design' linking to the AI in Education concept page instead of the Assessment concept page?"

**Fix:** when a phrase names a concrete concept, link it to that SPECIFIC concept slug (verify the specific slug exists first: `constructivist`, `student-engagement`, `self-efficacy`, `assessment`, `feedback`, `scaffolding`, `governance`, `trust` are all real pages). Don't fall back to an umbrella (`learning-theories`, `student-experience`, `self-regulated-learning`, `ai-education`, `authentic-assessment`). A phrase in the same article may need fixing at MULTIPLE occurrences — scan `re.findall` for every piped link whose display text is a specific-concept name and check each target. This is the flip side of Pitfall #3 (both are about putting the right target slug on the visible text). Grep for over-broad matches before finalizing: `grep -rn "ai-education|\|learning-theories|\|student-experience|\|authentic-assessment|" articles/ concepts/` and check each.

### 4b. Subagent inline-link pass timing out mid-write corrupts frontmatter (repair pattern)
When a `delegate_task` fan-out does inline-link enrichment on many articles in parallel and one subagent **times out mid-write**, it can leave files with **truncated frontmatter**: missing the closing `---`, and cut-off field lines (`confidence:` → `confi`, or a facet field cut off mid-value). The enriched body below is usually intact. **Repair pattern (proven this session, 9 files):**
- Detect: for each modified `articles/*.md`, check the first ~40 lines for a closing `---` and for each required field (`title:`, `created:`, `updated:`, `type:`, `sources:`, `confidence:`). Restore the page's typed fields too (`pedagogy`, `technology`, `assessment`, `methods`, `stakeholders`, `institutions`, `ethics`, `foundations`, plus `research_method`, `discipline`, `level`, `audience`, `page_kind`). There is no `tags:` line any more: the field is retired and the schema no longer accepts it (see Pitfall #11).
- Repair: `git show HEAD:articles/<slug>.md` to get the intact frontmatter, then rebuild = HEAD frontmatter (with the new `updated` timestamp) + the current file's body from the `# title` heading onward. If the file has no `# title` heading, instead just fix the truncated tail (replace `confi\n` → `confidence: high\n---\n`).
- Always re-verify ALL touched files afterward (frontmatter fields, broken slugs, same-text pipes, balanced `[[`/`]]`), because a timed-out subagent may also have left same-text pipes like `[[assessment|assessment]]` that its own verify step never ran.

### 5. Full text may be missing from raw source
The `raw/papers/*.md` file may hold only the abstract (the page is then thin and can't be deeply enriched). **HARD RULE (maintainer, 2026-08-24) — never enrich or retain an abstract-only page.** Retrieve the real PDF before enriching (see Full-text retrieval below); a page whose raw source is abstract-only must NOT be passed off as enriched, and an article should not be in the wiki at all unless its full text is permanently saved to `raw/papers/`. If full text cannot be retrieved (paywall/CAPTCHA block), do NOT enrich from the abstract — move the article to `<WIKI>/AIED-BACKLOG.md` under its journal section, list it in the report's FULL_TEXT_PENDING, and ask the maintainer to send the PDF. Also: an abstract-only page that just repeats the abstract as "Key Findings" is a signal the full text wasn't ingested.

### 6. Uncurated Connected Articles lists (alphabetical dumps)
Some article pages carry a **Connected Articles list that is an uncurated alphabetical dump** — every article in the corpus whose slug sorts near it, regardless of relevance (e.g. a cognitive-offloading article listing analytics pipelines, health sensing, agentic-education). the maintainer flags this. **Fix:** curate to only the **genuinely-related** articles (typically 3–6) that share the paper's specific mechanism or thread (e.g. efficiency-gain illusion, productive struggle, absent cognitive baseline). Trim the rest. Do the same for Connected Concepts — keep only concepts the narrative actually engages, not a blanket dump.

### 7. Redundant / repetitive sections (the maintainer flags)
the maintainer expects articles checked for **redundant sections that repeat the same points** — e.g. Key Findings restating each detail section verbatim, or a Key Finding previewing the Implications section. **Fix:** trim Key Findings to true headline findings (3–4) and let the detail section carry the full specifics; remove findings that merely preview Implications. Signal: same content appearing in 2+ of {Key Findings, a detail section, Implications}.

### 8. Thin articles / no inline links in narrative — backlog scan
the maintainer periodically asks to find **articles that are thin or have no inline links in the narrative body**. Reusable scan (Python, in `execute_code`): for each `articles/*.md`, strip frontmatter and the `## Connected*` sections, then flag pages with `nlinks==0` OR (`nchars<~1200` AND `nheadings==0`). This finds the backlog (observed ~144 pages). Order by thinness; enrich the thinnest first. When enriching, follow Workflow steps 4–6 (add sections + inline links + back-links) and always run `check_list_formatting.py --all` before build (a patch can re-introduce blank lines between list items even on a previously-clean page — re-verify).

### 9. Article `title:` must NOT carry a parenthetical citation (the maintainer corrected this)
The `title:` frontmatter (which renders as the page `<h1>` AND in the right-sidebar "Recently Added" list) should be **only the real paper title** — NO trailing ` (Author et al. 2026)` / ` (Author & Author 2026)`. the maintainer flagged all 5 productive-failure articles on 2026-08-23 for this. **Fix:** set `title:` to the clean paper title; keep the author/date citation exclusively in the `## Citation` section. When stripping the suffix, ALSO clean the Connected Articles display labels in every concept page that references the article with the parenthetical after the em-dash (`- [[slug]] — Title (Author 2026)` → `- [[slug]] — Title`) — a bulk `re.sub` across `concepts/*.md` (observed 60 labels / 25 files). Do NOT strip legitimate inline prose citations like `[[slug|Kim et al. (2026)]]` in narrative body — those are correct academic citations, not titles. Ingesting rule going forward: set the clean title from the start; never put the citation in the title.

### 10. Citation hyperlink must wrap ONLY the title (the maintainer corrected this)
In the `## Citation` section, **only the article title is hyperlinked** to the source — the journal must NOT be inside the link, and there must be a single link (no redundant trailing DOI). the maintainer's rule: "Only the title of the article should be hyperlinked to the source, not the title plus the journal title." Recurring subagent-draft patterns that violate it (site-wide audit found ~448 candidates, 34 actually needed fixing):
- **Journal (or title+journal) inside the link:** `Title. [*Journal*](url)` → `[*Title*](url). *Journal*`. (Observed on bassett-ai-detectors, care-full-feedback-genai, agency-gap-ai-writing, ai-making-us-stupid, xai-education-framework, civic-education-ai-lesson-plans, and ~12 more.)
- **Title not hyperlinked at all** (DOI/URL left as bare trailing text): `Title. *Journal*. https://doi.org/...` → `[*Title*](url). *Journal*`. (Observed on ssaho, benzion, zhou, alrahmi, jost, rethinking, liu-deris, ~18 more.)
- **Redundant trailing DOI** after the linked title (drop it).
- **Wikilink leaked into the citation title:** `[*...[[learning-gains|Learning Gains]]...*](url)` — citations must contain no internal `[[wikilink]]`; replace with plain text.

**Fix recipe (deterministic, Python):** in the Citation line, `re.search(r"\[([^\]]+)\]\((https?://[^)]+)\)")`; if the link text contains an italic journal (`*Journal*`) or ends with `.` (title+journal merged), split it — hyperlink only the title, put `*journal*` after, preserve vol/issue/pages as plain trailing text. For no-link cases, wrap the title in `[title](doi-url)`. Always verify: link text contains no journal name and no `.` at end, and no `[[ ]]`. Use a journal-name allowlist to detect the journal-in-link case (Assessment & Evaluation, Computers and Education, Smart Learning Environments, Trends in Cognitive, etc.).

### 12. Article pages have a LENGTH BUDGET — the raw file is where detail lives (maintainer-flagged 2026-09-18)

The maintainer asked why some article summaries are "so very long", naming the faculty-development case study (1,520 words with a 363-word Key Findings block) as an example, and said much of the detail was not necessary even though the paper mattered. Measured across 1,315 articles: **median body ~556 words, 75th percentile ~929, 90th ~1,525**. Long pages are therefore outliers produced by the template, not the house style. Nothing in any brief, skill or cron prompt had ever stated a length, so writers defaulted to comprehensive and restated every statistic the source offered.

**Budget for `articles/<slug>.md` — body = frontmatter end to `## Connected Concepts`:**
- Whole body: **~600-900 words** (a very rich study may reach ~1,100; anything past ~1,500 is a defect to trim).
- `> **Synthesis:**` 60-120 words, 3-5 sentences — unchanged (the gate fails a page over 130).
- `## Key Findings`: **5-7 items, each ~25-35 words** — one claim plus the one or two numbers that decide it, not every statistic, method detail or participant quote. A 50-70-word item is a paragraph in disguise; split it into prose or cut it.
- Prose sections: **3-4 `##` sections of ~120-180 words**, not 5-6 of ~200. Merge related ones (framing + method; themes + framework; barriers + limits).
- Enforced by two gates: `python3 tooling/scripts/audit-article-sections.py --changed` (section order, practice immediately before Limitations, practice 3-5 bullets, **Limitations 2-4 bullets**, Citation last) and `python3 tooling/scripts/verify-number-grounding.py --changed` (every number in the body must appear in the page's raw source). Both run inside `bash tooling/scripts/commit-if-green.sh`, so a page that ignores this budget fails at commit time rather than at review.

**What to cut first:** exhaustive itemised statistics, restated definitions, the source's own literature review, methodological minutiae (software, IRB category, analysis phases), decorative quotes beyond one per section, and any sentence that repeats a Key Finding.

**What must survive a trim:** every distinct `[[wikilink]]` target already on the page (measure before/after: `set(re.findall(r'\[\[([^\]|]+)', body))` must not shrink — re-home dropped links into a nearby sentence rather than deleting them), the Connected lists verbatim, the Citation line, list contiguity, and the `updated` bump.

**Measure before committing** (this is cheap and catches the whole class):
```python
import re
raw = open('articles/<slug>.md', encoding='utf-8').read()
body = re.split(r'^## Connected', raw.split('---', 2)[2], flags=re.M)[0]
print(len(body.split()), 'body words')
```

Full detail belongs in `raw/papers/<slug>.md`, which is local, complete, and never has to be short. An article is a wayfinding page, not a replacement for the source.

### 13. Article `title:` must be the paper's REAL title, truncated at ~120 characters (maintainer, 2026-09-18)

The maintainer asked for article page titles to match the actual article titles, "although sometimes it should be truncated". Measured across the corpus: 1,189 of 1,308 pages (91%) already carried the exact paper title, 95 carried a shortened version and 86 a reworded one — 105 pages were retitled in that pass.

Rules for picking the title:
- **A published record beats the page's own Citation string**, because it carries the publisher's casing and subtitle: Crossref (`https://api.crossref.org/works/<doi>`, title + subtitle) for a DOI, arXiv (`http://export.arxiv.org/api/query?id_list=<id>`) for a preprint id, both falling back to the Citation title when they do not resolve.
- **Truncate at ~120 characters on a word boundary.** Prefer dropping the subtitle at a colon when only a fragment of it would survive, or when the main title alone is already ≥90 characters; otherwise keep the subtitle as far as it fits. Strip a dangling `, x` fragment and trailing function words after cutting.
- **Never shorten a title that already carries more of the paper's title than the parsed citation string** (the citation abbreviation is the weaker source).
- **Compare on words, not characters:** a page whose title differs from the paper's only in capitalisation or punctuation is not a mismatch, and should keep its own capitalisation.
- Update `index.md` and `journal.md` entry text in the same pass. The `## Citation` block stays untouched — it keeps the full title and the source link.

Full paper titles are long (median 101 characters, 314 over 120, 78 over 150), so truncation is the normal case, not the exception.

### 14. Standard article page structure — fixed order, two optional sections (maintainer, 2026-09-19)

Every `articles/<slug>.md` body follows this order:

1. `> **Synthesis:**` blockquote (the summary a reader sees first)
2. `## Key Findings` — contiguous numbered list, 5-7 items
3. 3-4 `##` prose sections
4. `## What this means for practice`
5. `## Limitations`
6. `## Connected Concepts`, then `## Connected Articles`
7. `## Citation` (single APA line, hyperlinked title) — **LAST**, per the standing hard rule (see `wiki-citation-format`; never top or mid-page)

The page template appends Connected FAQs, the metadata table and source buttons after the body — never write those by hand, and never insert content after `## Connected Concepts`.

Why: a census of the corpus found Citation 1,308 / Connected Concepts 1,307 / Connected Articles 1,298 / Key Findings 875, but implications were spread across six heading names (`Implications` 291, `Implications for AI in Education` 256, `Implications for Practice` 35, `Practical Implications` 17, `Design Implications` 12, lowercase variants 15+) and only 153 pages carried `Limitations`. The two sections that make a page useful to a reader who will never open the paper were the ones most often missing or misnamed. Standardize the names, not the volume.

**`## What this means for practice`**
- Lead with **Instructors.** Add a labeled bullet for **Faculty developers / programme designers**, **Administrators and institutions**, **Researchers** or **Developers** only when the paper supports a genuinely distinct implication for that audience. Match the labels to the page's own `audience:` facet; do not stamp five audience rows on every page.
- 3-5 bullets, one or two sentences each, imperative and derived: "Test each AI use against the learning objective it serves." Never hedge ("this could potentially suggest that instructors might consider...").
- Every bullet must be traceable to a finding stated on the same page, with no new numbers introduced.

**`## Limitations`**
- 2-4 bullets, each carrying a concrete fact from the paper: the sample (n=10, purposive volunteers), the site (one institution), the incentive (stipends), the measure (self-report), the role conflict (researcher-as-facilitator), the horizon (six weeks, no follow-up, students never consulted).
- **Boilerplate is a defect.** "Small sample, single institution, results may not generalise" with no numbers adds nothing — either make it specific or drop the section. If the paper states no limitations and none is self-evident, omit the heading entirely.
- When the limitation is the measurement, link `[[self-report-measures]]` and let the concept page carry the explanation rather than restating it.
- Do **not** backfill the ~1,050 pages that lack the section. Write it when ingesting, deepening or otherwise editing a page.

**Length budget (revised 2026-09-19): 750-1,000 words** for the body (frontmatter end → `## Connected Concepts`), up from 600-900 in Pitfall 12. The two new sections are paid for out of the existing body, never bolted on top — trim the detail sections when you add them. Measure before committing (`len(re.split(r'^## Connected', body, flags=re.M)[0].split())`) and never drop a distinct `[[wikilink]]` target to make the cut.

Worked example: `chick-faculty-development-ethical-ai-2026` (faculty-development case study) — 997-word body, four body sections plus practice and limitations, all prior link targets preserved.

### 15. A wrong link target is usually the alias registry, not the writer (maintainer, 2026-09-19)

The maintainer asked why "inclusive design" on an article page linked to `accessibility` rather than `inclusive-learning`. Root cause: `concepts.registry.yaml` listed `inclusive design` as an **alias of `accessibility`** (beside `accessible`, `accessible design`, `accessible learning`), and the inline-link pass resolves phrases through that map — so every page using the phrase pointed at the accessibility page. The same page simultaneously wrote `[[inclusive-learning|inclusive]] design`, i.e. the same phrase with two targets.

Diagnosis order when a link target looks wrong:
1. `grep -n '<phrase>' concepts.registry.yaml` — is the phrase registered as an alias of the *wrong* concept?
2. Check whether the same phrase is linked to *different* concepts on the same page (an inconsistency signal).
3. Read the source's own framing (`raw/papers/<slug>.md`) before deciding: in the example the paper's keyword list said "Inclusive pedagogy" and its theme was UDL-grounded equity, with accessibility only one thread inside it.
4. Fix the registry, fix every page already mis-linked (`grep -rn '\[\[<wrong-slug>|<phrase>\]\]' articles/ concepts/`), then `python3 tooling/scripts/gen-concept-artifacts.py` and `python3 tooling/scripts/check_concepts.py`.

**Aliases are exact strings, so plurals and gerunds never match.** `self-report-measures` was registered with `self-report`, `survey instrument` and `questionnaire(s)` — but not `surveys`, so an article's "Surveys, reflections and ten capstone redesigns" was invisible to the scanner. When a concept page exists and obvious mentions still go unlinked, check for missing plural/gerund forms and add them (`surveys`, `policies`, `schools`, `platforms`, `biases`, `evaluations`, `visualizations`, `language models`, `tutoring systems` were all added in this pass, each verified absent from every other entry — no alias may map to two concepts). Prefer adding an alias over inventing a near-synonym concept page: "equitable teaching" and "equitable learning" became aliases of `inclusive-learning` rather than a new node.

### 16. House style is US English — and never bulk-respell with a suffix rule (maintainer, 2026-09-19)

The maintainer asked "why are you still using British spelling?" after reading a rewritten article. Cause: no house style was ever stated, most page prose is agent-drafted, and each page copied the spelling of the pages around it — so British forms (behaviour, programme, modelling, judgement, organisation, centre, artefact, -ise verbs) spread through the corpus. Measured before cleaning: ~850 British forms in body prose across ~300 pages, plus AGENTS.md, the tooling docs, the cron prompts and the skills.

**Rule: US English in body prose, section headings and Connected-list blurbs.** behavior, program, modeling, judgment, organization, center, artifact, generalize, analyze, and -ize verbs (organize, prioritize, standardize, personalize). Never respell: the `## Citation` section, a quoted paper title, or quoted participant text — those reproduce the published record verbatim. Check with `python3 tooling/scripts/check-us-english.py` (content) or `--include-docs` (AGENTS.md, tooling/*.md, skills/*.md). It is a build gate in `wiki.config.yaml`.

**Two hard lessons from doing this sweep by hand:**

1. **Never convert with a generic -ise suffix rule.** A rule that rewrites `(stem)(ise|ised|ising|isation)` mangles words whose stem merely ends that way, and produced real corruption twice in one session: `revising`→revizing, `promising`→promizing, `supervised`→unsupervized, `pairwise`→pairwize, `enterprise`→enterprize, `adviser`→advizer, `practising`→practizing (should be practicing). Use an explicit word map — `WORDS` in `tooling/scripts/check-us-english.py` is the curated list — and only ever replace whole words with `(?<![A-Za-z])word(?![A-Za-z])`.
2. **Never let a prose sweep touch machine-readable values.** Sweeping every line except `title:`/`sources:`/`created:`/`updated:` silently respelled frontmatter facet slugs (`assessment: [evaluative-judgement]` → `evaluative-judgment`; that slug has since been renamed to `evaluative-judgment` on purpose), which `validate-facets.py` then fails, and rewrote generated views (`src/data/conceptIndex.ts`, `src/data/facetVocab.ts`, `tooling/concept-index.md`) so `gen-concept-artifacts.py --check` went stale. Protect the whole frontmatter block and the Citation section, skip generated files, then run `validate-facets.py` + `gen-concept-artifacts.py --check` to prove nothing machine-readable moved.
3. **The sweep must not rewrite wikilink TARGETS either.** A slug is an identifier, not prose: rewriting `[[walton-bearman-assessment-judgement-2025]]` (or a slug inside `[[…|display]]` / inline code) breaks the link the moment the page file is still named with the British spelling. One sweep broke 104 links across nine pages this way, and nothing in the build complained — the link simply rendered as text. `tooling/scripts/check-us-english.py` now strips wikilink targets, existing page slugs and inline code before scanning, so the gate stays green while slugs wait for a rename; when you do rename a slug, update the link targets in the same pass and re-run a broken-link scan (`inline_link_scan.py --all` plus a scripted `[[target not in articles|concepts|faqs]]` check), because that is the only thing that catches it.

**Verify a respelling pass like any other bulk edit:** `git diff --numstat` must show no line-count deltas, no `title:`/`created:`/`updated:`/`sources:` lines in the diff, no `https://` inside a changed Citation, and no capitalized proper noun (a research centre's name) rewritten. Details live in `raw/papers/`; a US-spelling pass is orthography only and is NOT a reason to bump `updated`.

Registry aliases intentionally keep both spellings (e.g. `evaluative judgement` and `evaluative judgment`) so older text still matches; `tooling/concept-index.md` is generated from them and is excluded from the spelling checker.

### 11. Frontmatter checklist for a repaired page (typed metadata, no `tags`)
The frontmatter model changed on 2026-09-17. **`tags:` is retired**: the schema in `src/content.config.ts` no longer accepts it, every page lost the line, and the page templates no longer render tag chips. A repair that leaves a `tags:` line behind, or re-adds one, fails the build. The JSON-LD keywords now come from the typed fields.

Required fields: `title`, `created`, `updated`, `type`, `sources`, `confidence`.

Plus the typed fields, which are now the only place a page names the concepts it touches:
- **Facet fields**, one per registry section, whose values must be concept slugs filed under THAT section: `pedagogy` (Learning and instruction), `technology` (Technologies and techniques), `assessment` (Assessment and measurement), `methods` (Research methods and evaluation), `stakeholders` (People), `institutions` (Institutions and policy), `ethics` (Equity, ethics, and responsible use), `foundations` (Foundations of AI in education). A value of the wrong kind (a technology slug in `pedagogy`) fails the build. The allowed values are generated from `concepts.registry.yaml` into `src/data/facetVocab.ts`.
- **Phrase fields**: `research_method` (UI label "Study design": how the page's own study was done, e.g. survey, experiment, case study, system development), `discipline`, `level`, `audience` (UI label "Intended audience"), and `page_kind` (framework / synthesis / evaluation: what kind of page it is, never what it is about). `page_kind` is the renamed, re-scoped `category`; its ten topic values were retired because every one of them already had a concept home.

`tooling/scripts/validate-facets.py` is the **gate** and the replacement for the deleted `derive-facets.py`. The old script projected the facets FROM `tags`; with tags gone the fields are authored directly and validated instead: every facet value must be a concept in that field's registry section, no concept may appear in two facet fields on one page, and every page must carry at least one typed value (a page with none is warned about, since some pages genuinely are cross-cutting).

At the foot of every article page the **Metadata table** (`src/components/MetadataTable.astro`) renders those typed fields, one row per field, with each value hyperlinked to its concept page when one exists. Facet values link directly (they ARE slugs); phrase fields resolve through `src/data/metadataLinks.ts`, generated from the registry, so `cs education` reaches `cs-education`. The table states what a page IS; the curated `## Connected Concepts` list is the other job, what the page relates to beyond that. So do not answer a "this page is missing a link to X" report by dropping X into a facet field unless X really is one of the page's topics.

Labels come from one place: the generator emits `FACET_FIELDS` (field + label) and `FACET_DISPLAY_ORDER` into `src/data/facetVocab.ts`, and each facet's label IS its registry section heading. The sidebar, the search filters and the Metadata table all read them, so adding a facet means editing `FACET_SECTIONS` in `tooling/scripts/gen-concept-artifacts.py`, never the .astro files.

## Wikilink routing (site architecture — how `[[slug]]` renders to URLs)
As of 2026-08-23 the Astro templates render inline `[[wikilink]]`s to **canonical URLs directly** (`/aied/concepts/{slug}` for concept slugs, `/aied/articles/{slug}` for article slugs) — NOT to the legacy `/aied/pages/{slug}` route. The `/pages/` route still exists but only as a 301-redirect stub for backward compat. When diagnosing "broken link" reports: a `/aied/pages/<slug>` link is a working redirect (old-URL compat), not a defect; a canonical link that 404s means the slug genuinely doesn't exist (check `concepts/` + `articles/` + `conceptRedirects.ts`). This routing lives in `src/pages/articles/[slug].astro` and `src/pages/concepts/[slug].astro` (`renderInline`), each resolving the slug against the opposite collection set — do not re-add `/pages/` output.

## Full-text retrieval (EdArXiv / OSF)
When the source is EdArXiv/OSF and the raw file is abstract-only:
- The OSF page HTML (via `web_extract` on the DOI or `osf.io/preprints/edarxiv/<id>`) contains the full abstract + a PDF viewer name (e.g. `ACB_Jia_Xu_2026.pdf`).
- **Download the PDF:** `https://osf.io/download/<id>` returns the real PDF. (`https://osf.io/preprints/edarxiv/<id>/download` returns an HTML page — use `/download/<id>` instead.)
- If the auto-download fails (SSL error `exit 60`, HTTP 202 async prep, empty file, captcha/bot-blocking), **ask the maintainer to send the full-text PDF directly** — he routinely provides it and it unblocks enrichment. He will send it as a message attachment to `<AGENT>/cache/documents/`.
- **Extract text:** `pip install pymupdf`, then `import pymupdf; doc=pymupdf.open('file.pdf'); text=''.join(p.get_text() for p in doc)` (or the deprecated `fitz` alias).
- Save the full text back into `raw/papers/<slug>.md` (preserving the frontmatter) so future enrichment has it.
- Papers are CC-BY 4.0 (open) — fine to ingest.

## Support files
- `skills/research/wiki-inline-links/scripts/check_list_formatting.py` (run as `python3 ... <WIKI> --all`) — the ordered-list blank-line defect scanner, also gate 5 of `run-gates.py`.
- `scripts/detect-readfile-corruption.py` in the wiki-management skill (mirrored at `tooling/scripts/detect-readfile-corruption.py`) — escape-sequence and truncation damage from full-file reads.
- `tooling/scripts/validate-facets.py` (repo tooling, not bundled here): the typed-metadata gate. Run it after any frontmatter repair.

## Re-fetching a saved full text

Never infer which paper a saved source holds from a URL found inside its body: bodies are full of citations, and
the first arXiv link in a file is usually a reference. On 2026-09-19 a re-fetch built that way overwrote thirty
saved sources with unrelated articles, and half of them could not be recovered. Rules:

- Read the paper's own `source_url` (or `doi`) from the file's frontmatter and fetch that document, nothing else.
- Copy the file aside before overwriting it. `raw/` is gitignored, so an overwrite with no backup is final.
- Verify the fetched text before keeping it: the page title's significant words must appear in it. Reject and report
  a mismatch rather than saving it - a wrong paper is worse than a truncated right one.
- Prefer the largest correct copy, but only among copies of the same paper.
- Publisher hosts (ScienceDirect, Springer, Wiley, Taylor & Francis, SAGE, IEEE, ACM) answer automated requests
  with a robot check. Do not fight it: record the page in `AIED-BACKLOG.md` so the PDF can be supplied, and leave a
  marker in the source file rather than a wrong paper.
