# How this knowledge base is made, and who is accountable for it

This document is the standing disclosure for the AI in Education Knowledge Base:
which AI systems are used to produce it, what they do, what human oversight covers,
and what a reader can check. It is written for the repository, for the offline
editions, and for anyone who needs to restate how the text was produced (a
publisher, a reviewer, or a system that asks whether a work contains AI-generated
content).

The short version: page text is drafted by large language models from source
documents, a human editor reviews, corrects and publishes, the sources behind every
page are recorded and the citations are checked against the publisher record. No AI
system is listed as an author or contributor, because no AI system can be
accountable for what is published.

## Who is accountable

The people accountable for this knowledge base are recorded in
`site.config.json` under `contributors`, and every page names its own contributors
in its frontmatter `contributors` field (by id, so the names live in one place).
When more than one person works on the corpus, each page lists the people who
produced or reviewed it, and the record grows by addition rather than replacement.

AI systems are never listed there. This follows the position taken by COPE, ICMJE
and the major publishers: an AI tool cannot be an author, because authorship
requires taking responsibility for the work. Their contribution is recorded
separately, in the `ai_assist` field described below.

## What the AI systems do

| Role | What it covers |
| --- | --- |
| drafting | writing a page's prose from the source document |
| revision | rewriting, enriching or restructuring existing page text |
| link classification | proposing inline wiki links between pages (proposals only; a human accepts or reverts each one) |
| summarization | condensing a source into the synthesis and key findings on an article page |
| translation | rendering source or page text across languages, where used |
| none | the page is human-written |

The models in use are listed in `site.config.json` under `aiDisclosure.models`,
with the date each came into use. Model names and versions change over time, and
different models have produced different parts of this corpus.

## What a human does

The editor commissions pages, supplies or approves the source documents, reviews
the drafted text, corrects errors of substance and tone, and approves publication.
Corrections during review are not always visible in the page history, so the
`reviewed_by` field records which pages a person has actually read, and it is left
empty where that has not happened. An empty field is not a claim that the page is
unreviewed; it means the record does not assert a review.

## What is recorded on each page

Pages carry a provenance block in their frontmatter. It is not displayed on the
site; it exists so that anyone reading the markdown, the repository history, or a
harvested copy of the corpus can see how the page was produced.

- `contributors` — ids of the people accountable for the page (see above)
- `reviewed_by` — ids of the people who have read and checked the page
- `ai_assist` — an ordered record of AI contributions to the current text, each with `model`, `role` and `date`
- `source_depth` — whether the page was written from the full text of its source, from an abstract only, or from metadata alone
- `verified` — which checks were run: `citation` (the reference resolves and matches the publisher record), `numbers` (figures in the page appear in the extracted source text), `quotes` (quoted wording matches the source)

`ai_assist` describes the text as it now stands, not every edit ever made to it, and it records material contributions: prose that was drafted or rewritten. Mechanical passes over a page — wiring a back-link, refreshing a count, fixing a spelling — carry no substantive claim and are not recorded there. The
per-change record is in the repository history: each commit carries trailers naming
the model and role behind that change (`AI-Model:`, `AI-Role:`), and human
co-authorship uses git's own `Co-authored-by:` convention. Commit trailers are
immutable and survive page rewrites, which a frontmatter field alone cannot do.

## What is verified, and how

- **Citations** are checked against the publisher's record — the DOI resolves, or the journal page carries the article. A citation is never fabricated, and a paper with no registered DOI is cited by its journal landing page instead.
- **Numbers** are checked mechanically: a gate compares every figure in a page against the extracted full text of its source, and flags any that cannot be found.
- **Sources** are stored as extracted text under `raw/` (git-ignored) with the URL, DOI, extraction method and a SHA-256 hash of the supplied file, so a claim can be traced back to what the model was given.
- **Inline links** are proposed by a classifier and then reviewed: the pipeline reports each proposal, a deterministic scanner rejects known bad pairings, and a human reverts anything remaining that reads wrong.

## What is not verified

Nothing here is peer reviewed. An article page summarizes one paper; it is not a
replication, and it inherits every limitation of that paper. Concept pages are
syntheses written across many articles, so their claims are only as good as the
corpus they draw on. AI-generated text can be wrong in ways that read fluently, and
the disclaimer in the offline editions says so plainly. Where a page's evidence is
contested, the page says so rather than resolving it.

## Images and the cover

Illustrations, diagrams and the book cover are produced by code from the site's own
data and geometry (for example `tooling/gen-epub-cover.mjs` draws the cover from the
concept map), not by an image-generation model. Where a figure is ever produced by a
generative image model, that will be disclosed on the page that uses it, since
publishers and platform disclosure rules treat generated images as their own
category.

## Records start here

Per-page AI records begin on **2026-09-22**. Pages created before that date were
produced by a mix of models over several months, and the model behind any individual
page from that period cannot be reconstructed reliably, so those pages carry no
`ai_assist` entry rather than a guess. The corpus-level statement above still
applies to them: they were drafted by AI systems and reviewed by a human editor.

## Reusing this disclosure

Anyone who republishes this corpus, in whole or in part, is welcome to reuse this
statement and should keep the parts that remain true of what they publish: the
models used, the role of any AI system, the extent of human review, and the fact
that the text is AI-generated. The license is CC0, so no permission is needed.
