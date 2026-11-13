---
name: source-duplicate-triage
description: "Use when an incoming source may already be in the corpus."
category: research
---

# Deciding whether an incoming source is already in the corpus

Every ingest starts here. Getting this wrong costs a full article page, its three archives, a concept
screen entry, and the cleanup — and the duplicate reads as good work in the report, which is why it is
worth two extra greps.

## Probes, in this order

1. **DOI, exact, over both trees.**
   `grep -rl --include='*.md' -F '<doi>' content/ raw/`
2. **A distinctive title fragment** — a noun phrase, not the whole title, case-insensitive, over the
   article pages.
3. **A phrase from the paper's finding** — a number, a named effect, or a sentence from the result,
   grepped over `content/en/`. A hit inside a concept page bullet is the strongest duplicate signal
   there is: the paper was ingested and already woven, so report the existing slug and write nothing.

Step 3 is what catches the cases steps 1 and 2 lose.

## Why the DOI probe misses

- **Preprints ingested after publication.** The corpus page carries the journal DOI (or the
  published version's), while the input PDF is the preprint with a different or absent identifier.
- **Journals that print no DOI.** Some put the identifier only in the filename, so the page correctly
  cites without one and the DOI grep returns nothing.
- **Identifier variants.** A bare `openpraxis.18.4.1322` and `10.55982/openpraxis.18.4.1322` are the
  same paper; so are `10.20944/preprints202611.0452` and a later `preprints202611.0452.v1` form.

## Confirm the match before calling it a duplicate

A title hit is not proof. Open the candidate page and compare the printed title, the journal, the
volume and one distinctive finding. Two files with the same title are often different papers; two
inputs of the same paper are often different filenames.

## After a duplicate is confirmed

- Remove the duplicate article and its archives in one step — `pdf-sources/<slug>.pdf`,
  `pdf-sources/<slug>.pdf.txt`, `raw/papers/<slug>.md`. A leftover archive makes a later grounding run
  read the source of a page that no longer exists.
- If a duplicate page was already written, compare its key findings with the existing page. When the
  existing page is thinner, enrich it; never keep two pages for one paper.
- Name the input as a duplicate in the final summary, with the slug it already lives on. The user
  counted that PDF and needs it accounted for, not silently dropped.

## Author list: byline only

Take authors from the byline block. A journal's editor-in-chief and its editorial board appear in the
same PDF, often a few pages later, and get absorbed into `## Citation` as extra authors; the citation
then looks plausible and is wrong about authorship for the life of the page. Check the byline against
the running header or the first page's author line before writing it.

## Related

Batch-level procedure, concept screening and gates live in `paper-batch-ingestion`; deletion and
back-link stripping in `wiki-article-deletion`.
