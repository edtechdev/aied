# Article-Ingestion Gate Battery

Per-page gates to run after drafting a new article page (and its concept enrichments), in the order
they are cheapest to fix. Run them on the new file only, not the whole corpus, except where noted.

## Order

1. `validate-facets.py <file>` — facet values must be enums from `src/content.config.ts`, not free
   text. `research_method: [fMRI]` and `level: [elementary]` are NOT enums; read the schema and use
   the real values (`experiment`, `primary education`, …). Grep the schema for the enum before
   guessing.
2. `audit-article-sections.py --slugs-file <(...)` — required section headings present.
3. `check-article-intros.py` — intro/summary rules.
4. `verify-number-grounding.py <slug>` — every number in the page must appear in the raw source text
   under `raw/papers/` (saved per the corpus rule). A "0 numbers to review" result on a page full of
   statistics means the raw file was not found — spot-check a few figures against the raw by hand.
5. `check-concept-screen.py --changed` — see below.
6. `check-concept-prose.py --changed` — added sentences over ~55 words are rejected; split them.
7. `check_list_formatting.py` — list-formatting sanity.
8. Inline links: `inline_link_scan.py` then review — see the false-link rule below.
9. Build (`npm run build`, ~2 min foreground) and the full gate suite (`run-gates.py`, >7 min — run
   it as a tracked background process and poll; never concurrently with a build).

## concept-screen.yaml records EVERY candidate, not just the pages you enriched

The gate fails an article with "N concept candidate(s) with no recorded decision" listing its facet
concepts AND its inline-linked concepts together. Record a decision for the full set: the enriched
pages under `integrated`, everything else under `no_change` with a one-line reason each. Enriching
three pages and recording only those three fails the gate on the other seven.

## The auto-linker's --apply needs a false-link review

`inline_link_scan.py --apply` matches concept-dictionary phrases case-insensitively, so a product or
brand name can collide with a concept slug — the scanner model "Prisma" got linked to
`meta-analysis-systematic-review` (PRISMA). Always grep the applied links after `--apply` and revert
any link whose target is not what the prose means; a wrong wikilink is worse than none.

## Provenance after enrichment

When enriching existing concept pages: bump their `updated:` timestamps, add the article to each
page's `Connected Articles` list, and carry the source study's caveats (sample size, no control
group, model vintage) into the weave — limits of the evidence travel with the finding.
