---
name: wiki-ingest-orchestration
description: "Use when running a multi-source wiki ingest batch."
category: research
---

# Orchestrating a wiki ingest batch

For batches where several sources arrive at once (PDFs by chat, a cron drop, a folder) and article pages are
written by fan-out subagents. The judgment calls live in the user-owned `paper-batch-ingestion` and
`concept-weave-screening` skills — read both first. This skill carries the orchestration mechanics that decide
whether the batch lands clean on the first pass: what to verify yourself, the literal formats the gates demand,
and the traps in dispatch and build.

## Procedure

1. **Reconcile the inputs before identifying them.** Chat-delivered files land in the document cache; some
deliveries never appear as messages at all, so enumerate the cache by mtime rather than counting messages:

   ```bash
   find <DOCUMENT_CACHE> -maxdepth 1 -name '*.pdf' -newermt '<batch start>' -printf '%T@ %f\n' | sort -n
   ```

   Report the reconciled count against the count the user stated. A batch that silently loses inputs is worse
   than a slow one.
2. **Identify one file at a time** from page 1, not from the filename, and capture the journal's own `TYPE:`
   line — it decides empirical vs conceptual before you read any results.
3. **Dedupe by DOI across `content/` and `raw/`.** A duplicate whose `pdf-sources/` copy is missing is a real
   finding: backfill it and say so, because the grounding gate fails open on a missing source.
4. **Screen scope before significance** (see below), then land sources and dispatch page writers.
5. **Verify the children yourself**, run the gates, record the screen, wire lists, build, commit.

## Screen scope before significance

A batch can contain a source that is AI but not education. Extract the full text, lowercase it and count the
education vocabulary against the word total:

```bash
pdftotext -layout <file>.pdf - | tr 'A-Z' 'a-z' > /tmp/w.txt
for k in education students learner classroom teacher curriculum learning teaching school pedagogy; do
  printf '%-12s %s\n' "$k" "$(grep -o "$k" /tmp/w.txt | wc -l)"; done; wc -w /tmp/w.txt
```

- Out of scope when a page built from the study would carry no AI-in-education term outside its Citation — the
  `scan.relevance_filter` rule in `wiki.config.yaml`. Ten thousand words with `classroom` 0, `teacher` 0,
  `curriculum` 0 and `education` 4 is an AI-ethics paper that does not belong here.
- **Reject before writing, not after.** Append the decision to `AIED-REJECTED.md` (gitignored) with title,
  venue, DOI, the counts and one paragraph saying the argument is real but answers a question this KB does not
  ask, so a later keyword sweep does not re-propose it. Write nothing into `content/`.
- Report the rejection separately from the ingests. "10 in, 8 pages" without the reason reads as a dropped
  input.

## Briefing page writers

- **Copy every name, acronym expansion, coefficient direction and group label from the source.** A child treats
  the brief as ground truth, so an error you typed from memory is written into the page and its "gates clean"
  report will be true about a false fact. Where the child can check the fact, add "verify this against the paper
  and flag any disagreement rather than writing it" — asked to look, children do catch inversions.
- Give each child: the raw path, the template page, the facet command, the word budget WITH a target below the
  cap, and the ceiling on limitation bullets. Nothing else — no voice sample, no headings you invented.
- Say the child owns exactly one file and must not touch `concept-screen.yaml`, `Connected Articles` lists or
  sibling pages; concurrent children collide on shared files and the parent applies those edits once, centrally.

## What to verify yourself, and what the child's report is worth

- **Re-run the section auditor; its word count beats the child's.** Children report naive splits that run
  below the gate's count, so a page they report at 1,743 words can audit at 1,830. Trim to a few words under
  the cap by tightening prose, never by deleting numerals.
- **A limitation list over six bullets is a hard defect.** Merge or drop, do not append.
- **A no-data notice belongs immediately AFTER the `> **Synthesis:**` blockquote.** Placed before it, the intro
  gate fails, and children reproduce that ordering when the template they copied has it.
- **Check every weave actually landed** by diffing the concept pages, and check the pages the batch did not
  touch are untouched.
- **Compare link and numeral multisets against `HEAD:`**, ignoring `updated:` lines:

  ```python
  for f in changed_md_files:
      head = git_show(f'HEAD:{f}'); cur = open(f).read()
      strip = lambda t: '\n'.join(l for l in t.split('\n') if not l.startswith('updated:'))
      # Counter of [[links]] and of \d[\d,.]* tokens, report anything that decreased
  ```

  Timestamp replacement removes numeral fragments like `05` and `12` from the old value; excluding
  `updated:` lines is what stops that reading as lost content.

## The concept-screen record format is literal

`check-concept-screen.py` matches text, not meaning:

- `was missing` (or `were missing`) must appear within ~320 characters after each integrated slug; a gap
  phrased as "the page runs 4,990 words and so it lacked X" FAILS;
- each dismissed slug that is one of the article's own declared `discipline:`/`level:` labels needs
  `('keyword' N)` within ~220 characters after it;
- every candidate the gate derives (facets plus inline links, ~13-20 per article) needs a decision.

Compose each entry programmatically as
`<slug> ('<kw>' N): was missing <gap>. ... Dismissed: <slug> (<article-grounded reason>), ...` and take counts
from the PRE-weave file with `git show HEAD:content/en/concepts/<slug>.md`; the working copy after a weave
reports the post-weave count and inflates the evidence. Expect ~10 percent acceptance of candidates.

The gate also flags bare `article:` stubs — entries with no integrations, no `no_change`, no reason — which is
what pages from an earlier batch look like when their screen was never done. Fix those (write the screen and
weave the qualifying pages); do not delete the stub.

## The site build

- **Run it as a tracked background process, never under a foreground tool timeout.** The build takes eight to
  nine minutes; when a foreground call dies on its timeout the `systemd-run --user --scope` build dies with it
  and the log stops mid-render at `generating static routes` with no process left.
- Poll the log tail, not the process list: a `pgrep -f 'astro build'` pattern matches the polling command's own
  command line and reports a build that no longer exists.
- Keep the memory scope (`-p MemoryMax=12G`) and the `NODE_OPTIONS` heap flag, then commit only after
  `page(s) built` and `Complete!` both appear.

## Reporting the batch

- Reconciled input count, duplicates with where each already lives, rejections with the reason.
- Per paper: empirical or conceptual, and the evidence for that call.
- Per weave: the claim in one line; per drop: that it was screened on evidence.
- Corrections you made to your own briefs, reported as corrections rather than hidden.
- That every woven concept page and new article is now stale in each translating locale, so a refresh wave is
  queued work.
