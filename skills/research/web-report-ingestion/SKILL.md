---
name: web-report-ingestion
description: "Use when a source exists only as a web report, with no PDF."
category: research
---

# Ingesting a source that exists only on the web

Use when the user hands you a research release, benchmark report or institutional publication
that has no PDF: an HTML report site, a versioned `/report/` page, a GitHub repository and a
results dashboard instead of a journal article. The article machinery, the gates and the concept
screen are the same as for a PDF batch; what changes is that **the grounding archive has to be
built rather than copied**, and that the source's own release record becomes part of what the
page says.

## Procedure

1. **Dedupe before extracting.** Search the corpus for the DOI, the report title's distinctive
   phrase, the release slug and the organization, because a web report is often cited in the
   reference list of a paper already in the corpus and an org name alone returns false hits
   (a `learning-design-wiki` resource page is not the grading benchmark).
   ```bash
   grep -ril '<doi-or-slug-or-org>' content/ raw/
   ```
   Read every hit before concluding: a hit in `raw/papers/` means the full text was fetched but
   never written up, a hit in `content/` means it is already a page.
2. **Build the raw archive with the script, then finish its header by hand.** Run
   `scripts/extract_web_report.py <url> <slug>` (see the file for the flags). It keeps only the
   article element, drops the per-number provenance tooltips, review widgets, images and embedded
   notebook cell source, and writes `raw/papers/<slug>.md` plus the raw HTML under
   `raw/prefetch/`. Both are gitignored.
3. **State the release exactly as the source states it, including what is missing.** Read the
   extracted text for the release name and version, the series position (a report may call itself
   "Paper VI"), the corrections log and the AI-use section. Then on the page:
   - cite no DOI the page in hand does not print; a revision can carry none while the version it
     corrects has one, and that fact belongs in the Citation sentence;
   - if the report publishes a corrections log, say how many corrections and scope audits it lists
     at that version, as a documented property;
   - if the source states AI authorship of itself, report that sentence plainly, in one clause.
4. **Classify it like any other source.** A benchmark or evaluation release is empirical: its
   numbers go in the body only as the report prints them, and `research_method` comes from the
   repo enum (`design and evaluation study`, `experiment`, `secondary analysis`). A dashboard's
   headline statistics are not the report's numbers: cite the report, and if you mention the
   dashboard, say that its weighted ranking is a presentation choice the report itself declines to
   make.
5. **Write the article, then run the same gates as a PDF batch:** `validate-facets.py`,
   `verify-number-grounding.py --changed`, `audit-article-sections.py --changed`,
   `check-us-english.py` on every file touched, `check-list-formatting` where it exists, and the
   inline-link pass below. Then the concept screen, then the build, then one commit.

## A series is one body of work, not two versions

When two related releases arrive (a benchmark and a within-item ablation on one of its strands),
check each report's reference list: the later one usually cites the earlier as a predecessor, and
the pair cross-link. Decide before drafting which page each finding lands on, because the
duplication check rejects the same claim written twice, and a finding belongs on the page whose
subject it is, not on both.

## Delegated writers return link-thin, over-budget pages

A subagent writing the article will pass the section audit and come back with one wikilink or
none, against a corpus norm of four to seven. Fix in this order:

1. Run the scanner to see its suggestions, but hand-pick: it maps surface words to concepts and
   produces false pairs (a `reasoning` effort setting is not critical thinking, `English` as the
   corpora's language is not language learning, `agents` in an audit process is not agentic AI).
2. Link the genuine first mentions in the body, never inside headings, never a self-link.
3. **Re-run the section audit afterwards.** Adding links changes nothing about word counts by
   itself, but the trims that made room for them do, and the body budget is counted on body words,
   not file words: a page that passed at 1,709 can fail at 1,758 after a link pass.
4. Re-grep every number the writer added beyond your brief. Child reports are honest and their
   gates are green, but the figures they introduced are the ones nobody asked you to check.

## Facet fields are not interchangeable

`validate-facets.py` names the correct field, and it is the arbiter: a concept such as
`automated-essay-scoring` belongs under `assessment`, not under `technology`, and putting it in the
technology field passes nothing. When two writers run in parallel, a facet failure you see may be
the sibling's page mid-edit; re-run before chasing it.

## Screen record hygiene

- `concept-screen.yaml` is append-only and gitignored, so it has no git recovery. Never rebuild it
  from a text split; copy it to /tmp, extend the parsed list, re-emit every entry, and re-parse with
  a count assertion.
- `integrated:` is dereferenced into the page body: a slug listed there must mention the article in
  its narrative, and a `## Connected Articles` line does not count. Add the inline wikilink in the
  same edit as the Connected entry.
- Screens for a released report run big: ten or eleven integrated pages is credible for a six
  question benchmark across three tasks, media and fairness strands, where an ordinary single-study
  article integrates two or three. Judge each pair on whether it changes what that page says.

## What to tell the user

- That the source had no PDF, and therefore no `pdf-sources/` entry: the grounding archive was
  extracted and what was stripped from it.
- The release identity, its DOI or the fact that this revision has none, and the corrections count.
- Per weave: the distinguishing claim in one line; per drop: that it was screened on evidence.
- That every woven concept page is stale in the locales that translate it.
- Whether the source's companion is also in the corpus, and how the two pages cross-link.
