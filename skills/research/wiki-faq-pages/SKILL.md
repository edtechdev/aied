---
name: wiki-faq-pages
description: "Add/manage FAQ pages in the AI-ed wiki."
category: research
---

# Wiki FAQ Pages (AI in Education research wiki)

Use when the user sends a FAQ **question + draft answer** (markdown or text) to add to the AI-ed wiki at `<WIKI>`, or asks to extend the FAQ page type, wire FAQ↔concept links, or fix FAQ rendering/search/indexing. Complements the user-owned wiki skills (`research-wiki`, `wiki-inline-links`, `wiki-article-quality` — those govern articles/concepts/inline links; THIS skill owns the FAQ page type).

## The FAQ page type (architecture added 2026-08-24)

- **Content collection** `faqs/` registered in `src/content.config.ts` (glob `faqs/*.md`; schema: `title`, `created`, `updated`, `tags`). FAQ slugs live alongside `articles/` and `concepts/`.
- **Page template** `src/pages/faqs/[slug].astro` — mirrors the article/concept templates. Its `renderInline` resolves `[[wikilink]]`s across ALL THREE sets (concept → `/aied/concepts`, article → `/aied/articles`, faq → `/aied/faqs`), so a FAQ body can link to other FAQs.
- **Index page** `src/pages/faq.astro` → `/aied/faq` lists all FAQs reverse-chron (❓ title + date).
- **Header icon** ❓ in `src/layouts/BaseLayout.astro` (`.header-icons` group) → `/aied/faq`, `title`/`aria-label` = "FAQ".
- **Journal** `src/pages/journal.astro` merges FAQs into the reverse-chron index with a ❓ badge and their own `/aied/faqs/<slug>` route.
- **PageFind** auto-indexes FAQ pages at build (any page with `data-pagefind-body` is indexed by astro-pagefind — no extra config). Each FAQ template sets `data-pagefind-filter="page_type:faq"`.
- **llms files** `tooling/scripts/generate-llms-files.py` collects `faqs/` too — `llms.txt` gets a `## FAQs` section, `llms-full.txt` a `# FAQs` section. Re-run after every FAQ add.

## Adding a new FAQ

1. **Clean the draft**: replace hard URLs with `[[slug|Display text]]` wikilinks; add aggressive inline links to every concept/article mentioned in the narrative (same standard as article bodies). Keep the "productive struggle → productive failure" terminology per the maintainer's standing preference.
2. **Frontmatter**: `title` = the question; `created`/`updated` = the **actual creation time** (full ISO `-04:00`, NOT future-dated — see Pitfall 1); `tags` = relevant concept slugs.
3. **Verify links**: every `[[slug]]` must exist in `concepts/` ∪ `articles/` ∪ `faqs/` (plus redirects). No same-text pipes, no self-links, no broken slugs.
4. **Numbered lists**: if an answer has a numbered list where items carry nested paragraphs, use manual bold numbering `**1.**`… (see Pitfall 2).
5. **Wire Connected FAQs**: add `connected_faqs: [<faq-slug>, ...]` to the frontmatter of each concept (or article) page the FAQ substantially relates to. Judge relevance — a FAQ usually connects to 2–4 concepts. The `## Connected FAQs` section auto-renders at the bottom of concept/article pages ONLY when `connected_faqs` is non-empty (conditional block in the `[slug].astro` templates). Bump `updated:` on every concept page you touch.
6. **Deploy**: regen `llms*.txt` → `npm run build` → commit+push → verify `gh run list` green AND curl the live FAQ URL for HTTP 200 (green build ≠ deployed).

## Pitfalls

### 1. Future-dated `created`/`updated` mis-orders the journal (the maintainer caught this)
The journal page sorts items by the **`created` frontmatter timestamp**, NOT file mtime. Subagent-created pages historically carried **arbitrary future timestamps** (e.g. `14:30` stamped when the file was actually written at `05:31`), so they sorted at the TOP of the day even though they were created earliest. **Always set `created` (and `updated`) to the real creation time** — when a subagent made the file, normalize its frontmatter to the actual mtime before building. Fix pattern: read `os.path.getmtime` for the true time and rewrite `created`/`updated`. (Existing note about normalizing subagent `updated` also applies to `created` — the journal depends on it.)

### 2. Custom renderer restarts numbered lists at "1" when items have nested paragraphs
`renderMarkdown` in the `[slug].astro` templates only renders a **single-line** ordered list. If each `1.` item is followed by a blank line + an indented second paragraph, the renderer closes the `<ol>` and the next item opens a fresh list starting at "1" → every item shows "1.". **Fix:** for FAQ answers (and any content with multi-paragraph numbered items), number manually with bold labels — `**1.** …`, `**2.** …`, each a separate paragraph. Verify the built HTML has no `<ol>` and that `1.`…`N.` are all present.

### 3. `connected_faqs` is optional and conditional
The schema field is optional (`z.any().transform(...).optional()`); only pages that list at least one FAQ render the section. Adding the field to a page is what makes its "Connected FAQs" appear — no template change needed per-FAQ.

## Support files
- (none yet) — consider adding `scripts/normalize-timestamps.py` if the future-dating pitfall recurs.
