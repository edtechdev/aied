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
3. **Fix structural defects** (see Pitfalls): escaped character codes, ordered-list numbering, same-text pipes, frontmatter integrity.
4. **Enrich from the full text**: add a Synthesis blockquote, a `Key Findings` numbered list (CONTIGUOUS — see Pitfall #1), body sections, and connect to wiki concepts.
5. **Add inline `[[slug]]` links** for every concept mentioned in the narrative body (aggressive per the maintainer's standing rule — including conceptually-similar phrases). Use the `wiki-inline-links` scanner (user-owned but its script still runs): `python3 skills/research/wiki-inline-links/scripts/inline_link_scan.py <WIKI> <slug>`. Verify every suggested concept slug exists first.
6. **Add back-links** from connected concept pages (reciprocal Connected Articles entry + optionally a research bullet).
7. **Verify** — link integrity must PASS: no same-text pipes `[[x|x]]`, no heading links, balanced `[[`/`]]`, no broken slugs (check against `concepts/` + `articles/` filenames + `conceptRedirects.ts`), no escape sequences.
8. **Deploy** per the wiki pipeline: bump `updated` timestamp → regen `index.md`/`journal.md` + `llms*.txt` → `npm run build` → `log.md` → commit+push → **verify deploy via `gh run list`** (green build ≠ deployed) and curl the live URL for HTTP 200.

## Pitfalls

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
When a `delegate_task` fan-out does inline-link enrichment on many articles in parallel and one subagent **times out mid-write**, it can leave files with **truncated frontmatter**: missing the closing `---`, and cut-off fields (`confidence:` → `confi`, truncated `tags:`). The enriched body below is usually intact. **Repair pattern (proven this session, 9 files):**
- Detect: for each modified `articles/*.md`, check the first ~40 lines for a closing `---` and for each required field (`title:`, `created:`, `updated:`, `type:`, `tags:`, `confidence:`).
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

## Wikilink routing (site architecture — how `[[slug]]` renders to URLs)
As of 2026-08-23 the Astro templates render inline `[[wikilink]]`s to **canonical URLs directly** (`/aied/concepts/{slug}` for concept slugs, `/aied/articles/{slug}` for article slugs) — NOT to the legacy `/aied/pages/{slug}` route. The `/pages/` route still exists but only as a 301-redirect stub for backward compat. When diagnosing "broken link" reports: a `/aied/pages/<slug>` link is a working redirect (old-URL compat), not a defect; a canonical link that 404s means the slug genuinely doesn't exist (check `concepts/` + `articles/` + `conceptRedirects.ts`). This routing lives in `src/pages/articles/[slug].astro` and `src/pages/concepts/[slug].astro` (`renderInline`), each resolving the slug against the opposite collection set — do not re-add `/pages/` output.

## Full-text retrieval (EdArXiv / OSF)
When the source is EdArXiv/OSF and the raw file is abstract-only:
- The OSF page HTML (via `web_extract` on the DOI or `osf.io/preprints/edarxiv/<id>`) contains the full abstract + a PDF viewer name (e.g. `ACB_Jia_Xu_2026.pdf`).
- **Download the PDF:** `https://osf.io/download/<id>` returns the real PDF. (`https://osf.io/preprints/edarxiv/<id>/download` returns an HTML page — use `/download/<id>` instead.)
- If the auto-download fails (SSL error `exit 60`, HTTP 202 async prep, empty file, captcha/bot-blocking), **ask the maintainer to send the full-text PDF directly** — he routinely provides it and it unblocks enrichment. He will send it as a message attachment to `<HOME>/.ai-agent/cache/documents/`.
- **Extract text:** `pip install pymupdf`, then `import pymupdf; doc=pymupdf.open('file.pdf'); text=''.join(p.get_text() for p in doc)` (or the deprecated `fitz` alias).
- Save the full text back into `raw/papers/<slug>.md` (preserving the frontmatter) so future enrichment has it.
- Papers are CC-BY 4.0 (open) — fine to ingest.

## Support files
- `scripts/scan-article-defects.py` — scan all article/concept pages for escape sequences and ordered-list blank-line defects.
