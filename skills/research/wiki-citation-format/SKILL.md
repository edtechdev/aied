---
name: wiki-citation-format
description: "Use when writing, fixing, or auditing the bottom-of-page citation on any wiki article. The single rule: APA format with the article title hyperlinked to the source URL. Covers author formatting, title italics+link, venue, and the arXiv-strip rules."
category: research
---

# Wiki Article Citation Format

The bottom of every wiki **article** page ends with a `## Citation` section. There is exactly **one** rule, and it is non-negotiable:

> **APA format, with the article title hyperlinked to the source URL.**

## The canonical form

```
## Citation

Lastname, F. M., Lastname2, F. M., & Lastname3, F. (2026). [*Exact Title of the Article*](https://source-url). Venue.
```

Concrete example (correct):

```
Ganguly, A., Garika, S. S., & Johri, A. (2026). [*Uncovering Students' Mental Models of Generative Artificial Intelligence*](https://arxiv.org/abs/2607.11692). arXiv preprint.
```

## The rules, one by one

1. **Authors in APA "Last, I." form.** `Ganguly, A., Garika, S. S., & Johri, A.` — NOT `Amrita Ganguly, Sai Sharanya Garika, Aditya Johri`. Surname first, initials only, `&` before the final author. Use `et al.` after roughly 6 authors.
2. **Year in parentheses** after the author list: `(2026).`
3. **Title italicized AND hyperlinked.** The title is wrapped in `[*…*](url)` — italics inside the link. The hyperlink goes on the **title only**, never on the authors, year, or venue.
4. **Hyperlink ONLY the title.** No other text in the citation is a link. One hyperlink per citation.
5. **Never fabricate a DOI/URL.** If there is no public source link, leave the title unlinked (still italicized). Pull the real URL from the article's `sources:` raw file (`raw/papers/<slug>.md`, its `source_url:` field) or the existing citation.
6. **Venue after the link.** Keep a real venue if one exists (journal, conference, "arXiv preprint"). Do NOT append a redundant `arXiv:2607.28210.` / `(arXiv:xxxx)` / `arXiv:xxxx [cs.CY; cs.AI]` after the link — the URL already identifies arXiv. Strip it, but keep real venues like "EDM 2026", "Accepted at CSCW 2026".

## Common mistakes (all wrong)

- `Amrita Ganguly, Sai Sharanya Garika, Aditya Johri (2026). [Title](url).` — full names, not APA; title not italicized.
- `Ganguly, A., et al. (2026). [*Title*](url). arXiv preprint arXiv:2607.11692.` — redundant arXiv ID after the link.
- `Ganguly, A., Garika, S. S., & Johri, A. (2026). [*Title*](url).` — fine, but missing venue is acceptable only if none exists.
- `[Ganguly, A., Garika, S. S., & Johri, A. (2026). *Title*](url).` — hyperlink on the whole citation, not just the title.

## Where the source of truth lives

- The article's `sources:` frontmatter names the raw file at `raw/papers/<slug>.md`. Read it for the **real** author names (frontmatter `authors:`, a `**Authors:**` line, or the paper byline) and the `source_url:`.
- Never invent authors, titles, or URLs — always pull from the raw source.

## Related

- `wiki-page-deepening` — HARD RULE #3: `## Citation` at BOTTOM, title-only hyperlink, never fabricate a DOI/URL.
- `wiki-astro-frontend/references/article-citation-audit.md` — the class-level sweep for mangled citations across many articles (author-garbage regexes, arXiv-strip order, re-audit pitfalls).
