---
name: publisher-fulltext-acquisition
description: "Use when ingesting a paper from a publisher page."
category: research
---

# Getting and archiving the full text from a publisher site

Use when a paper arrives as a DOI or publisher URL and the wiki needs a `raw/papers/<slug>.md`
snapshot plus an article page. This procedure establishes (a) what the item actually is, (b) whether
the text may be read and archived, and (c) which claims in the page the archive can support. Page
mechanics live in `wiki-article-page-skeleton`; the weave lives in `wiki-concept-narrative`.

## Procedure

1. **Dedupe before anything else.** Grep the DOI across `content/` and `raw/`, then grep the paper's
distinctive program or model name - not only its topic word - across `content/en/`:

   ```bash
   grep -rl '<DOI>' content/ raw/ ; grep -rli '<program-or-model-name>' content/en/ | head
   ```

   A hit on an earlier study of the *same* intervention is the common case for qualitative papers: a
   second write-up of one deployment. That changes the page from "new topic" to "second analysis of a
   corpus the base already holds", and the siblings should be linked from the body rather than
   re-narrated.

2. **Take canonical metadata from Crossref, not from the rendered page.**
   `curl -s https://api.crossref.org/works/<DOI>` returns the verbatim title, the author list with given
   and family names, container title, volume and issue, published date-parts, item type, and `license`
   (an empty list means the publisher granted no reuse terms - say so, never "open access"). The abstract
   arrives as JATS XML; strip tags before quoting it.

3. **Treat Unpaywall as a hint, never a verdict.** `is_oa: false` / `oa_status: closed` is routinely
   wrong for an item the publisher renders free to anonymous readers. Load the page before deciding to
   ask the user for a PDF.

4. **Clear the bot interstitial, then read the page.** A Cloudflare challenge returns a title like
   "Just a moment..." with a ~250-character body. Load once, wait ten seconds, reload, and `page_info()`
   then returns the real article title. Read `document.body.innerText`; a `Free` label beside the
   article-type line is the access statement that matters.

5. **Extract the body, not the chrome.** Cut from the first sentence of the first body paragraph to the
   copyright line, strip the reference-widget artefacts (`Google Scholar`, `Google ScholarCrossref`) with
   a line-level regex, and collapse runs of blank lines. Keep Notes and Works Cited - they carry the
   context numbers a page may cite.

6. **Write the access basis into the snapshot header.** Authors, journal, volume and issue, DOI, URL,
   one line naming the access basis and the capture date, the item type, and the source's own keywords.
   A raw file with no access statement cannot answer later questions about why holding it is legitimate.

7. **Ask for the PDF only after the page has actually been tried.** If the text is genuinely gated, stop
   and ask. Never ingest from an abstract, and never expand Crossref's abstract into findings the paper
   may not report.

## Pitfalls

- **An essay and a study from the same issue need different page machinery.** Decide whether the item
  reports data before drafting. No sample, no instrument and no result means the labelled-perspective
  route (`non-empirical-source-ingest`), with "reports no empirical data" written into the Synthesis
  blockquote and a Limitations bullet naming what is missing.
- **A qualitative paper's percentages are shares of coded reflections, not outcome measures.** Quote them
  with the population attached ("51.7 percent of the reflections") so they cannot be read as a learning
  effect.
- **Reconcile a cohort figure against the sibling write-up instead of restating it differently.** Two
  papers describing one deployment may count it by course in one and by section in the other: report the
  framing each paper uses, name the discrepancy, and leave the older page alone.
- **Free to read is not licensed to reuse.** An empty Crossref `license` list means no reuse terms were
  granted even where the text is readable, so neither article nor resource frontmatter may claim one.
- **A second write-up of an existing deployment often contains the page's real contribution.** Where the
  base already carries the outcome data, the new paper's value is usually the mechanism - what students
  called the tool, how the sequence ordered the steps - so weave that, not the outcomes again.

## Related

`wiki-source-acquisition` (a source is truncated or wholly missing), `non-empirical-source-ingest`
(labelled perspectives), `wiki-citation-format` (the Citation line built from the Crossref record).
