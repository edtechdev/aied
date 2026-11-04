---
name: kb-question-answering
description: Use when answering questions from a markdown KB.
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [knowledge-base, retrieval, wiki, links, aied]
    related_skills: [research-wiki, wiki-inline-links, research]
---

# Knowledge-Base Question Answering

Answer questions **out of** a markdown knowledge base instead of from memory, and cite the pages you used with live hyperlinks. Applies to the AIEd wiki at `<WIKI>` (Astro, deployed at `https://edtechdev.github.io/aied`) and generalises to similar content-collection sites.

This is the retrieval/answer half of wiki work. Ingestion, page authoring, translation and export live in `research-wiki`; link *editing inside pages* lives in `wiki-inline-links`.

## Hard rules

1. **Every page you mention carries a live hyperlink.** Markdown `[Title](url)` as the bullet lead, never a bare slug or path like `/articles/foo`. A slug list is an incomplete answer — the user will send it back asking for links.
2. **Never ship an unverified URL.** Check each one's HTTP status before replying (see `scripts/verify-links.sh`). Cite only 200s; silently dropping a 404 is fine, quoting it as a page is not.
3. **Quote the corpus, not your prior.** Take findings, sample sizes, effect sizes and design details from the page's synthesis block. If the KB does not cover something, say so plainly and name the gap; never fill it from general knowledge in a way that implies it is in the corpus.
4. **Group by the question's own facets**, not by file order: directly-relevant core work, then counter-evidence or limitations, then adjacent methodology, then concept/FAQ anchors.

## Procedure

1. **Orient on the content tree.** English content is under `content/en/{articles,concepts,faqs,resources,newsletters}/`; the `content/` root holds only locale directories. List the sub-collections so you know what kinds of pages can be cited.
2. **Two-pass keyword search.** A broad `grep -rilE` first, to see the candidate set and its size. In a large KB a real topic matches 150+ files, so raw hit counts are useless — score for **co-occurrence** instead: rank files by how many independent keyword families collide in them.
3. **Read the synthesis block, not the file.** Each article opens with a `> Synthesis:` / `> Synthesis.` blockquote that is the de facto abstract, and frontmatter carries `title`. Read ~700 chars of that plus the title to judge relevance and harvest concrete numbers — in one Python pass over all candidates, not one file at a time.
4. **Check concept and FAQ pages as first-class answers.** `ls content/en/concepts | grep -iE '<family>|...'`, same over `faqs`. The concept page is the orientation anchor; the FAQ is the practical answer.
5. **Resolve slugs and verify.** Slug = filename minus `.md`. Build the URL from the site config, confirm the slug appears under `dist/` as a directory, then curl every URL and keep only 200s.
6. **Write the answer:** a short caveat line when the KB's framing differs from the question, themed sections of hyperlinked bullets with the specific finding, concept/FAQ anchors, then an explicit gap note with an offer to fill it.

## URL scheme

Read `site.config.json` for `url` (`https://edtechdev.github.io/aied`) and `basePath` (`/aied`). Published path is basePath + collection + slug:

```
https://edtechdev.github.io/aied/articles/<slug>/
https://edtechdev.github.io/aied/concepts/<slug>/
https://edtechdev.github.io/aied/faqs/<slug>/
```

## Pitfalls

- **`content/` root is not the English content.** Root holds locale directories plus a README; English pages are in `content/en/`. Grepping `content/` mixes 30+ translations into the results and buries the English page.
- **One keyword family finds mentions, not the topic.** `IRT` alone hits every paper that runs a psychometric check. Require a second family (difficulty estimation, LLM) before calling a study relevant.
- **`dist/` can lag `content/`.** A new article's slug may be absent from `dist/` yet publishable; a deleted one may still be there. Treat `dist/` as a cheap existence hint, and the curl check as the verdict.
- **Concept pages do not always exist.** A plausible concept name can be missing from `concepts/` and the live site. Check the directory listing; if the gap is real, report it and offer to draft the page rather than inventing a link.
- **Do not pad the answer** with pages that merely share vocabulary — that dilutes the answer to "which pages address this".

## Supporting files

- `scripts/verify-links.sh` — batch HTTP status check for candidate KB URLs; prints `code url` per line so you keep only 200s.
- `references/aied-wiki-map.md` — AIEd wiki layout, URL scheme, file shape, and the answer format the user expects.
