# Citation Format — Only the Title Is Hyperlinked (the maintainer's rule)

the maintainer's rule (verbatim): *"Only the title of the article should be hyperlinked to the
source, not the title plus the journal title."* Confirmed 2026-08-23 when 34 files were
fixed across the wiki — this is a site-wide standard, not a one-off.

## Correct shape

```
Authors, A. B., & Author, C. D. (Year). [*Paper title*](https://doi.org/10.xxxx/yyyy). *Journal Name*, vol(issue), pages.
```

- Only the **title** is wrapped in the link. Journal is plain italic AFTER the link.
- The DOI/URL lives ONLY inside the title's link.

## Three recurring defects (all fixed 2026-08-23, 34 files)

1. **Journal hyperlinked instead of / in addition to the title**
   - `Title. [*Journal*](url)` — journal carries the link, title plain.
   - `[*Title*. *Journal*](url)` or `Title. *Journal*](url)` — journal merged inside the link.
   - Fix: move the link onto the title, journal becomes plain italic after: `[*Title*](url). *Journal*`.

2. **Redundant trailing DOI** — `[...](https://doi.org/10.xxx). *Journal*. https://doi.org/10.xxx`
   or `... DOI: 10.xxx`. The DOI belongs ONLY in the title's link URL; drop the duplicate.

3. **Wikilink inside the citation title** — e.g. `*...[[learning-gains|Learning Gains]]...*`
   inside the link text. Citations must NOT contain internal `[[wikilinks]]`; replace with plain text.

## Detection (Python in execute_code, over articles/*.md)

For each `## Citation` section, extract the `[text](url)` link and flag if:
- link text (minus `*`) matches a journal name (Assessment & Evaluation in Higher
  Education, Computers and Education, Smart Learning Environments, Trends in Cognitive
  Sciences, Educational Technology Research, etc.), OR ends with a period (title+journal merged).
- `[[` appears anywhere in the citation.
- a second `https://doi.org` / `DOI:` appears after the link.

## Transform (journal-linked → correct)

Keep `Authors (Year).`, hyperlink the title `[*Title*](url)`, then `. *Journal*`, and
re-append any trailing content that followed the original link (`, vol(issue), pages` /
`, pages` / `. Advance online publication`). Strip redundant trailing DOI. Always read the
resulting full line back before writing — a fragile regex can drop the `(Year).` or mangle
italic (seen twice this session).

## Related pitfalls
- Subagent-drafted citations are the main source of all three defects — run this check on
  EVERY delegated ingestion batch, never trust the subagent's "verified" claim.
- Same class of over-linking: keep the title `title:` field clean too (no parenthetical
  citation in the H1/`title:`), per the article-quality rule.
