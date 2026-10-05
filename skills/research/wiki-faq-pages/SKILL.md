---
name: wiki-faq-pages
description: "Add/manage FAQ pages in the AI-ed wiki."
category: research
---

# Wiki FAQ Pages (AI in Education research wiki)

Use when the user sends a FAQ **question + draft answer** (markdown or text) to add to the AI-ed wiki at `<WIKI>`, or asks to extend the FAQ page type, wire FAQ↔concept links, or fix FAQ rendering/search/indexing. Complements the user-owned wiki skills (`research-wiki`, `wiki-inline-links`, `wiki-article-quality` — those govern articles and concepts/inline links; THIS skill owns the FAQ page type).

## The FAQ page type (architecture added 2026-08-24)

- **Content collection** `content/en/faqs/` registered in `src/content.config.ts` (glob `content/en/faqs/*.md`; the schema spreads `structuredMeta` and `provenance`, so FAQs carry the same typed facets, `contributors` and `ai_assist` as articles and concepts — and `connected_faqs`/`connected_resources`). **`tags` is not used on FAQ pages**: 0 of 37 carry it, and `structuredMeta` supersedes it, so do not add a `tags:` line to a new FAQ. FAQ slugs live alongside `content/en/articles/` and `content/en/concepts/`.
- **Page template** `src/pages/faqs/[slug].astro` — mirrors the article/concept templates. Its `renderInline` resolves `[[wikilink]]`s across ALL THREE sets (concept → `/aied/concepts`, article → `/aied/articles`, faq → `/aied/faqs`), so a FAQ body can link to other FAQs.
- **Ordering (2026-09-04): FAQs are ranked by a `weight` frontmatter integer, NOT `created`.** the maintainer wants the FAQ page + left-sidebar list to surface the *most useful/important* FAQs first (not newest/oldest). `weight` is a field in the faqs schema (`z.number().catch(0).transform(...).optional()`). `faq.astro` and `BaseLayout.astro` (sidebarFaqs) sort by `weight` **descending**, tie-break by `created` ascending. Assign each FAQ a weight proportional to its visitor usefulness; current anchors: top-10-findings = 100 (#1), misconceptions-by-stakeholder FAQ = 95 (#2). When adding a NEW FAQ, give it a weight you deem appropriate — top-10-findings should stay #1 unless you override. The **journal** still groups by `created` (its purpose); weight does NOT affect journal ordering.
- **Index page** `src/pages/faq.astro` → `/aied/faq` lists all FAQs by weight desc (❓ title + date).
- **Header icon** ❓ in `src/layouts/BaseLayout.astro` (`.header-icons` group) → `/aied/faq`, `title`/`aria-label` = "FAQ".
- **Journal** `src/pages/journal.astro` merges FAQs into the reverse-chron index with a ❓ badge and their own `/aied/faqs/<slug>` route.
- **PageFind** auto-indexes FAQ pages at build (any page with `data-pagefind-body` is indexed by astro-pagefind — no extra config). Each FAQ template sets `data-pagefind-filter="page_type:faq"`.
- **llms files** `tooling/scripts/generate-llms-files.py` collects `content/en/faqs/` too — `llms.txt` gets a `## FAQs` section, `llms-full.txt` a `# FAQs` section. Re-run after every FAQ add.

## Adding a new FAQ

1. **Clean the draft**: replace hard URLs with `[[slug|Display text]]` wikilinks; add aggressive inline links to every concept/article mentioned in the narrative (same standard as article bodies). Keep the "productive struggle → productive failure" terminology per the maintainer's standing preference.
2. **Frontmatter**: `title` = the question; `created`/`updated` = the **actual creation time** (full ISO `-04:00`, NOT future-dated — see Pitfall 1); the typed facets (NOT a `tags:` field — see the collection note above); **`weight`** = usefulness integer for FAQ list ordering (required — see the Ordering bullet above).
3. **Verify links**: every `[[slug]]` must exist in `content/en/concepts/` ∪ `content/en/articles/` ∪ `content/en/faqs/` (plus redirects). No same-text pipes, no self-links, no broken slugs.
4. **Numbered lists**: if an answer has a numbered list where items carry nested paragraphs, use manual bold numbering `**1.**`… (see Pitfall 2).
5. **Wire Connected FAQs**: add `connected_faqs: [<faq-slug>, ...]` to the frontmatter of each concept (or article) page the FAQ substantially relates to. Judge relevance — a FAQ usually connects to 2–4 concepts. The `## Connected FAQs` section auto-renders at the bottom of concept/article pages ONLY when `connected_faqs` is non-empty (conditional block in the `[slug].astro` templates). Bump `updated:` on every concept page you touch.
6. **Deploy**: regen `llms*.txt` → `npm run build` → commit+push → verify `gh run list` green AND curl the live FAQ URL for HTTP 200 (green build ≠ deployed).

## FAQ titles (user rule, 2026-10-02)

A FAQ title has to be readable by the audience it is written for, and it has to show its educational connection on its own. Two failure modes, both flagged by the user on a developer-facing FAQ:

- **Do not name a specialized technique in the title.** "Should we fine-tune a model, or is prompting or retrieval enough?" is precise and unreadable to an education developer who does not know those terms. Rewrite in plain language ("How can we make AI better at supporting learning in our own subject?") and put the technical vocabulary in the body, where it can be defined. "Train" is acceptable — everyday English; "fine-tune", "LoRA", "PEFT" and "RAG" are not.
- **Name the educational context in the question.** A title that could sit on a generic ML blog gives the reader no reason to click. Add the subject, the students, or the teaching situation.

When a title carries one of these defects, check the rest of the batch: the same defect tends to appear in every question written in the same pass. (In the 2026-10-02 batch, the evaluation question had it too and was retitled.)

A title may need a technical word to stay distinct from a neighbouring FAQ. That exception is deliberate, not an oversight: "How do we **train** an AI tutor to guide students rather than answer them?" keeps "train" because it is the only thing separating it from the existing tutor-design FAQ, which pursues the same guiding behaviour through hint ladders. Say so in the commit message.

## Wiring a batch of new FAQs

- **`connected_faqs` works on FAQ pages too (as of 2026-10-02).** It did not originally: the faqs collection declared only `connected_resources` and the FAQ template had no rendering block, so all 99 pages carrying the field were concepts, articles or resources. If you need FAQ-to-FAQ links rendered as a section rather than inline, add `connected_faqs: connectedFaqs` to the `faqs` collection in `src/content.config.ts` and the conditional `ConnectedList` block to `src/pages/faqs/[slug].astro` (mirroring `concepts/[slug].astro`), including the TOC push. Filter out the page's own slug — a FAQ listing itself is a defect the concept template does not guard against.
- **Append, do not replace.** Check for an existing `connected_faqs:` and merge the new slugs in; six of the thirteen concept pages wired for one batch already had one, including `pedagogical-safety` with four entries. Anchor the insert on `updated:` rather than `type:` — 17 of the 35 FAQs have no `type:` line.
- **Derive candidates, then curate.** Rank pairs by shared structured metadata (`technology` and `assessment` carry the most signal, then `pedagogy`/`foundations`/`ethics`) plus existing inline cross-links, then review the picks by hand. Cap at four links per page. Reciprocity is a nice property but not a requirement: 51 of 112 links came out reciprocal in the 2026-10-02 pass, and eight of the ten one-way ones were simply at the cap. Do not pad a list to force symmetry.
- **Bump `updated:` on every page you touch.**
- **Weight the batch as a cluster** so it surfaces together in the sidebar rather than scattered. A developer-facing batch belongs beside `developing-ai-tutor` (weight 74) — 74 / 73 / 72 placed all three directly under it, which is what makes them read as a set.
- **Expect gate 11 (US English) to catch British spellings in fresh prose**: `analyser`, `behaviour`, `labelling` were all flagged in one batch. The gate scans every content file, so a re-run takes about a minute.
- **FAQ pages are covered by `check-ai-disclosure.py`** (`COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')`), so a FAQ created on or after 2026-09-22 needs `contributors` and an `ai_assist` block.

## Pitfalls

### 1. Future-dated `created`/`updated` mis-orders the journal (the maintainer caught this)
The journal page sorts items by the **`created` frontmatter timestamp**, NOT file mtime. Subagent-created pages historically carried **arbitrary future timestamps** (e.g. `14:30` stamped when the file was actually written at `05:31`), so they sorted at the TOP of the day even though they were created earliest. **Always set `created` (and `updated`) to the real creation time** — when a subagent made the file, normalize its frontmatter to the actual mtime before building. Fix pattern: read `os.path.getmtime` for the true time and rewrite `created`/`updated`. (Existing note about normalizing subagent `updated` also applies to `created` — the journal depends on it.)

### 2. Custom renderer restarts numbered lists at "1" when items have nested paragraphs
`renderMarkdown` in the `[slug].astro` templates only renders a **single-line** ordered list. If each `1.` item is followed by a blank line + an indented second paragraph, the renderer closes the `<ol>` and the next item opens a fresh list starting at "1" → every item shows "1.". **Fix:** for FAQ answers (and any content with multi-paragraph numbered items), number manually with bold labels — `**1.** …`, `**2.** …`, each a separate paragraph. Verify the built HTML has no `<ol>` and that `1.`…`N.` are all present.

### 3. `connected_faqs` is optional and conditional
The schema field is optional (`z.any().transform(...).optional()`); only pages that list at least one FAQ render the section. Adding the field to a page is what makes its "Connected FAQs" appear — no template change needed per-FAQ.

## Support files
- (none yet) — consider adding `scripts/normalize-timestamps.py` if the future-dating pitfall recurs.
