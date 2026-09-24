---
name: wiki-resource-pages
description: "Use when adding a resource page (tool or collection)."
category: research
---

# Resource Pages

A **resource page** (`content/en/resources/<slug>.md`) points readers at an external tool, collection, instrument
or open format they can go and use. It is not a paper summary: there is no study to ground, so the
page carries no `sources`, no `research_method`, no `page_kind`, no Citation and no
practice/Limitations pair. Everything about the page type lives in `tooling/SCHEMA.md`
(“Resource page structure”) — read that first; this skill is the procedure and the failure modes.

## When to create one

Create a resource page when the thing is (a) external, (b) usable by a reader today, and (c) worth a
one-page explanation of what it does, who it suits and what caveats it carries. A paper, a news
item, a vendor blog post or a tool the site itself ships is **not** a resource. Ten to twenty pages
is a healthy corpus: this is a curated shelf, not a directory.

An **open-source release of a paper already in the base is a resource, not a second article**: the
paper page keeps the study, the resource page carries what the code offers today, and the two are
joined by frontmatter (below). Check for an existing page on the topic first — the study is often
already there under a different slug, so the tool arrives as a resource plus a connection rather
than a new article.

## Procedure

1. **Open the resource before writing a word.** Fetch the landing page *and* its own about, pricing,
   get-started and FAQ pages. A search-result snippet is not a source: access terms, license,
   ownership and gating are usually stated on those secondary pages and nowhere else. For a code
   release, the raw README's feature and quick-start sections, the license badge and the repo's own
   paper link are the primary sources — fetch the raw README rather than GitHub's rendered page.
2. **Classify honestly.** `resource_type` comes from the closed list in `SCHEMA.md`; a creator
   platform that also hosts a gallery is `[software, collection of tools]`, not `[software]`.
3. **`access` is what the reader gives up**, from `free` / `free with account` / `freemium`. Do not
   write `free` because the marketing page is silent — check the FAQ or pricing page, and when a
   free tier exists behind a signup or a workshop, `free with account` is the honest value. Say in
   the body when "free" covers the software but not the inference bill (bring-your-own API keys).
4. **`license` only when the site states one.** Never infer a license from a Creative Commons badge
   on a neighbouring project; for code, take it from the repo's `LICENSE` or badge.
5. **`last_verified` is today's real date** (read it from the clock, never guess). The field is the
   audit hook for link rot.
6. **Write the body as encyclopedia prose**, US English, roughly 200–350 words, `[[wikilinks]]` to
   concepts in the prose, and a `## Connected Concepts` list naming the concepts the resource serves.
7. **Separate the platform's claims from facts.** Vendor comparisons, compliance badges and
   “current as of <month>” capability tables are the vendor's own marketing: attribute them and say
   where a district should verify them (the data processing agreement). Never restate a claim as a
   finding. Adoption counts (stars, forks) belong with the month they were read.

## Connecting it to the knowledge base

Resources are **not** in the markdown wikilink resolver: `src/lib/markdown.ts` routes `[[slug]]` as
articles > faqs > concepts, so a `[[resource-slug]]` written in any markdown body resolves to
`/concepts/<slug>/` and 404s. In markdown bodies, link a resource with a plain markdown link, or not
at all.

The supported connection is the **`connected_resources` frontmatter field**, which validates against
`content/en/resources/` and renders a *Connected Resources* section. It works on **article, concept and FAQ
pages as well as resource pages** — that is how a paper page points at the software release of the
same work, and how two sibling tools point at each other. Never hand-write a `## Connected
Resources` body section.

`index.md` and `journal.md` do use `[[slug]]` for resources, and are rendered by their own builders,
which do resolve resources — do not generalize that form to markdown bodies.

A resource may share a slug with an article (the routes differ: `/resources/<slug>/` vs
`/articles/<slug>/`). That is legal and `[[slug]]` keeps resolving to the article, but check the
outcome rather than assuming it.

## Wiring checklist

- `index.md` — add the page to `## Resources` **and** increment the `Resources:` count on the first
  line; the counts line and the section must agree. Rebuild the section by listing the actual
  `content/en/resources/*.md` slugs and sorting them rather than hand-inserting a line — a hand-inserted entry
  is easy to place out of order or duplicate, and it stays invisible until the page renders.
- `journal.md` — add the entry under today's date with the 🧰 badge and increment `Total entries`.
  Journal totals are **articles + concepts + resources** (FAQs are not journalled).
- The `/resources/` index and per-slug pages are generated by Astro — nothing to edit.
- `python3 tooling/scripts/check-resource-links.py` — re-checks every external URL and reports the
  `last_verified` dates to bump.
- EPUB/PDF exports include resources as a closing “Free Tools and Resources” chapter, but those are
  **committed artifacts built only on an explicit request** — never rebuild them because a page was
  added.
- `llms.txt` / `llms-full.txt` deliberately exclude resources (their content lives off-site); the
  READMEs say so. Regenerate the llms files only when articles, concepts or FAQs changed.
- When an article changed too, it still needs the standard gates: `audit-article-sections.py
  --changed`, US English, list formatting, facets.

## Pitfalls

- **Every new resource page needs the human-plus-AI disclosure pair.** Gate 8 requires both `contributors` (which must name a **human** id from `site.config.json`, e.g. `[editor]`) and an `ai_assist` entry (a `model` listed in `AI-USE.md`, a `role` from the fixed set: drafting, revision, link classification, summarization, translation, none) on any page created on or after the date per-page records began. `reviewed_by` alone does not satisfy it, and a resource page is easy to forget because the section does not read like a research page. Run `python3 tooling/scripts/check-ai-disclosure.py` before the full suite — it takes two seconds, while the suite takes fifteen minutes because the inline-link scan dominates.
- **A facet value can be a real enum member and still fail the gate.** `src/content.config.ts` decides whether a word is allowed at all; `validate-facets.py` additionally requires every `foundations` / `pedagogy` / `technology` / `ethics` / `assessment` / `methods` value to be a concept belonging to that field's registry section. `learning-design`, `design-thinking` and `academic-integrity` are all valid page metadata and all live under **foundations**, so writing them under `pedagogy` or `ethics` passes any enum check and then fails gate 2 with "is not a concept in that registry section". Read section membership from the generated `src/data/facetVocab.ts`, put each value in its own field, and never list one concept in two facet fields. When nothing fits, omit the field rather than guess.
- **Enumerating enum values from memory.** `access`, `resource_type`, `level`, `audience`,
  `discipline` and every facet field are validated against `src/content.config.ts`. An invented value
  fails the build; when no enum fits, omit the field instead.
- **Confirming a URL answers ≠ confirming what the page says.** `check-resource-links.py` proves the
  link resolves; it says nothing about access terms.
- **A green build is not evidence the page is wired.** The gates check facets, links and formatting,
  not whether a frontmatter connection rendered. After building, confirm the real hrefs in
  `dist/resources/<slug>/index.html`, the Connected Resources link on the connected article or
  concept page, and that the slug appears in `dist/resources/index.html` and in the EPUB nav.
- **Overwriting a page's caveats with enthusiasm.** The value of a resource page is the honest note —
  that access is gated, that the comparison is the vendor's, that the free tier needs a workshop.
- **Long resource pages drift.** A platform with many capability areas tempts a 500-word page; fold
  minor capabilities into one sentence instead. Only a genuinely many-featured platform sits at the
  top of the documented range.
- **Body prose in US English only** — “canceled”, “license” as a noun; `check-us-english.py` is the gate.
