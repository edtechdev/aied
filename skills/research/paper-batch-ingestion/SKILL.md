---
name: paper-batch-ingestion
description: "Use when a batch of PDFs arrives to ingest into the wiki."
category: research
---

# Ingesting a batch of papers

The wiki's full ingestion procedure lives in the user-owned wiki skills (`research-wiki`,
`wiki-concept-narrative`, `research/wiki-faq-pages`, `wiki-batch-ingestion-qa`) and cannot be edited by
a curator-managed agent. This skill carries only the rules that decide whether a batch comes out right,
written where they can be kept current.

## Order of operations

1. **Identify before archiving.** For each PDF: `pdfinfo` for page count, then `pdftotext` page 1 for title,
authors, journal and DOI. Do not start work from the filename.

   **The page `title:` is that verbatim title, never a headline you write.** The failure mode is subtle
   because a descriptive title reads better: one batch produced "Forensic AI Is Ahead of Forensic Teaching:
   A Systematic Review That Says So" for a paper actually titled "Artificial intelligence applications in
   forensic science and their implications for education and training", and 19 of 20 pages in that batch
   carried invented headlines while their own `## Citation` block held the real title. Treat the citation
   link text as the authority and copy it byte-for-byte into `title:` — then the H1, the citation, the RSS
   entry and the llms files all agree. A machine check is cheap: for every article, compare `title:` against
   the text of the first `[..](https://…)` in `## Citation`; anything beyond case differences is a rewrite.

2. **Dedupe by DOI across the whole corpus**, not just by title:

   ```bash
   grep -rl --include='*.md' -F '<doi>' content/ raw/
   ```

   A hit means the paper is already ingested; report which page it lives on rather than silently
dropping an input the user counted. Two files with the same title are often different papers; two
batches of the same paper are often different filenames.
3. **Land the source copies in the same step as the page**, because the gates read them and their absence
is silent: `pdf-sources/<slug>.pdf`, `pdf-sources/<slug>.pdf.txt` (`pdftotext -layout`), and
`raw/papers/<slug>.md` (the same extraction). Both directories are gitignored. `verify-number-grounding.py`
prints `[no raw source found - cannot verify]` and exits 0 for a page whose raw file is missing, so a
half-copied batch reads as fully verified.
4. **Slug as `<first-author>-<claim>-<year>`,** and give the article page only that one file to write.
5. **Screen concepts and FAQs after the prose exists,** then record the screen. Links and facets count as
declarations, so a record written from frontmatter alone comes back short.
6. **Gates, then one commit.** See "Gates that matter for a batch" below.

## Classify the paper before writing anything about it

- **Empirical:** numbers go in the body only if they appear in the raw text. State figures exactly as the
  source prints them; a rounded value can fail grounding when the source gives three significant figures.
- **Conceptual, or a design proposal:** add the italic no-data notice and present every figure it cites about
  other studies as an attributed claim, not as its finding. Say in the page (and the report) why you called
  it conceptual, ideally quoting the authors' own description of their contribution.
- **Proof-of-concept evidence deferred elsewhere** ("detailed in manuscripts under review") is not a result.
  Treat such a paper as conceptual.

## The concept screen: expect to skip most pairs

- Candidate set = every typed facet the article declares (slugified) plus every inline wikilink. Enumerate
  both in one pass; a screen built from its own reading of the article misses pairs the gate counts.
- Acceptance runs near 10 percent. A batch that integrates most of its candidates is padding.
- A pair qualifies when it changes what the page says: a property the page treats as a byproduct becomes a
  designed layer, a study quantifies a gap the page only asserts, or it replaces the axis the page sorts on.
- **A conceptual paper qualifies through the framing it changes and only there.** It cannot qualify where the
  page's claim is empirical: with no results the honest sentence is a proposal, which weakens a page built on
  measured findings.
- Every `no_change` verdict carries grep evidence from THAT page (`'unnatural attentiveness' -> 1 hit`). A
  dismissal without a matching line is a claim nobody checked.
- **A declared discipline or level is a candidate on the same standard, never a "setting".**
  When `discipline:` or `level:` names a concept page, the finding may belong on that page.
  `teacher-education` was dismissed from a study of 52 pre-service teachers as "a population",
  although that page's own bullets describe what pre-service teachers learn and the paper's
  practitioner note (compose groups on preconception diversity) belonged there and nowhere else.
  Dismiss one only with a coverage count from THAT page, written as
  `teacher-education ('group formation' 0)`; `check-concept-screen.py` now fails a discipline or
  level dismissal that lacks one.
- The implication often belongs on the discipline or level page rather than the process page. A
  process finding ("uptake differed by group composition") and a domain finding ("energy
  preconceptions decided whether the AI became concept talk") are different sentences on
  different pages, and a batch that writes only the first has skipped the disciplines.

- **A source with no PDF still gets a `raw/papers/` archive, and it has to be built, not saved.**
  A web research release has no `pdf-sources/` entry, so grounding has nothing to read unless you
  extract the page yourself. Fetch the HTML, keep only the article element, drop the per-number
  provenance tooltips (`span.prov-pop`), review forms, buttons and embedded notebook cell source,
  and preserve the printed values: those are what `verify-number-grounding.py` matches. Write
  `raw/papers/<slug>.md` with a header giving the title, author, release name and version, the URL,
  the DOI (or a statement that this revision has none), the retrieval timestamp and the source page's
  sha256, and keep the raw HTML under `raw/prefetch/` for provenance. A revision can lack a DOI
  while the version it corrects has one: record that, and cite no DOI the page in hand does not print.

- A page that already carries the finding from the same source is a drop, even when the source is new to the
  wiki: check whether the *finding* is on the page, not whether the article is.

## The significance bar, and what it costs to ignore it

- **Most weaves are padding, and over-correcting after a missed discipline is the usual cause.**
  A single empirical paper typically changes one to three concept pages, and a broad multi-strand
  report four to six. More than that is annotation: the batch starts listing every page the paper
  touches rather than the pages whose claims it moves. Screening a discipline or level page properly
  means giving it the same evidentiary standard, not compensating by wiring in everything nearby.
- **Every integration has to name the gap.** In the record, each integrated slug is followed by what
  the page was missing before the weave (`was missing the distinction between ...`). If that sentence
  cannot be written, the weave does not belong: `check-concept-screen.py` fails an integration that
  does not state it, which is the check that caught a 10-page weave of one paper.
- **A page that would only gain an example, an analogy, or a name is a no_change.** A naming parallel
  (writing borrowed from coding), a second taxonomy in a field that counts its taxonomies, or a
  corroborating case beside a claim the page already makes with better evidence all fail the test.

## The FAQ screen is a separate pass

One or two FAQs per batch is normal; four plausible candidates yielding one edit is normal too.

- **A paper that introduces a DESIGN AXIS the FAQ never mentions qualifies.** Grep the FAQ for that axis's
  own vocabulary (`pacing`, `deadline`, `schedule`, `notification` -> 0 hits) before claiming coverage.
- **An unvalidated design proposal does not qualify for a FAQ built on measured results.**
- **Same subject is not same claim:** a study of post-training a tutor's reward signals does not change a
  FAQ about whether to design a tutor that withholds answers. Check the object of the study.
- **Put the limits in the FAQ prose.** Cross-course comparisons, uncontrolled cohorts and the privacy
  question raised by nudging study timing belong in the answer, not only on the article page.
- House style holds: zero external URLs, zero tables, wikilinks only, `updated` bumped, `ai_assist` entry
  appended INSIDE the list.

## Gates that matter for a batch

```bash
tooling/scripts/validate-facets.py                       # facet placement, names the correct section
python3 tooling/scripts/verify-number-grounding.py --changed
tooling/scripts/audit-article-sections.py --changed       # word budget + canonical section names
tooling/scripts/check-concept-screen.py --changed         # fails until every pair is recorded
tooling/scripts/check-concept-prose.py --changed          # weave length and duplication
python3 tooling/scripts/check-us-english.py <article> <every woven concept page> <every revised FAQ>
python3 tooling/scripts/check-citation-attribution.py
```

- `audit-article-sections.py` requires its canonical practice heading (e.g. `What this means for practice`);
  a heading invented as "What this means for teachers" fails even when the section is correct.
- `validate-facets.py` is the arbiter of which field a slug belongs in, and `level: teacher education` is
  valid while a hyphenated `teacher-education` is not.
- US English must be run on the WOVEN CONCEPT PAGES and the revised FAQ, not only the article: a weave is new
  prose that `check-us-english.py <article>` never reads.
- Before the build, parse every changed file with a YAML loader that rejects duplicate keys at any depth. An
  appended `ai_assist` entry that leaves two `agent:` lines in one item passes a top-level key scan and then
  fails `astro check` with `Map keys must be unique`, after the content is finished.

## What to tell the user

- Which inputs were duplicates and where each already lives.
- Per paper: empirical or conceptual, and the evidence for that call.
- Per weave: the distinguishing claim in one line. Per drop: that it was screened, not forgotten.
- That a woven concept page or revised FAQ is now stale in every locale that translates it, so a locale
  refresh is queued work rather than a surprise.
- Commit subject-line only, from a message file (`git commit -F` or the repo's commit wrapper), never `-m`:
  backticks and `$` in the string are evaluated by the shell and truncate the message mid-sentence.
