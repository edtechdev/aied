# Keeping the article backlog honest

`AIED-BACKLOG.md` is a work-in-progress ledger, not a history. Every entry is a claim
that an article is **not** in the corpus, and the maintainer downloads PDFs from it. A
stale entry costs a download and an ingestion review of a paper that is already a live
page; a missing entry costs nothing. So the file is maintained toward under-claiming.

Ingestion runs write article pages; they do not reliably write the backlog. Daily scans,
crons and manual batches each touch one side only, so entries rot in both directions and
the header count drifts from the bullet count.

## Before sharing backlog links with the maintainer

Verify every entry, every time. The links are about to become the maintainer's to-do
list, so an unverified list is a duplicate-delivery bug waiting a session to surface.

1. **Extract the identifiers** from each entry: title, arXiv id, DOI, and any second URL
   (an entry often repeats its DOI as a link inside its own note).
2. **Grep each identifier** across `content/` and `raw/papers/` — not the whole repo,
   which matches the backlog file itself.
3. **Read which file matched, not just the count.** The two hits mean different things:
   - a hit in `content/en/articles/<slug>.md` means the page exists: **already ingested**,
     drop the entry.
   - a hit only in `raw/papers/<slug>.md` means the full text was fetched and saved but no
     article page was written: **still pending**, and stronger than the entry claims,
     because ingestion needs no re-fetch. Say that to the maintainer.
4. **Then list the items in the reply itself**, with the one-line relevance note the
   backlog carries (sample size, design, why it ranked below the ingested set), and check
   the links resolve (`curl -sL -o /dev/null -w '%{http_code}'`). The maintainer triages on
   those notes; a bare list of URLs makes them open every tab.

## When an entry turns out to be ingested

- Remove the bullet. Do not leave it with a "done" marker: the file's scope is missing
  work only, and that scope is a standing instruction.
- Fix the arithmetic in the same edit: the section's prose count ("the four below" becomes
  "the three below") and the `**Total backlog:** N articles awaiting ingest` header.
- Record the ingested slug in place, in one clause, so the decision survives without the
  bullet: a future reader needs to know the entry was resolved rather than forgotten.
- Commit the ledger change on its own with `AI-Role: drafting`, and say in the reply that
  it was corrected — a silent cleanup looks like the list was always right.

## Reading the file

- Sections are per-scan and newest-first; the header total is the live count and everything
  below the newest section is context for why earlier items were dropped.
- A section's prose count and its bullet count are written by hand and drift apart. Trust
  the bullets; correct the prose whenever you touch the section.
- Rejected items are not here at all (they live in `rejected-sources.yaml`), so an item's
  absence from the backlog is not evidence it was rejected.
