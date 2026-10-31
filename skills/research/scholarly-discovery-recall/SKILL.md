---
name: scholarly-discovery-recall
description: "Use when a paper scan keeps missing relevant work."
category: research
version: 1.0.0
license: MIT
metadata:
  tags: [openalex, literature-discovery, cron-scans, recall]
  related_skills: [research-wiki, paper-batch-ingestion, recency-pulse-research]
---

# Raising the recall of an automated scholarly scan

This is the procedure for answering "why does the daily/weekly scan keep missing papers I find by
hand, and how do I fix it". The answer is almost never query wording. It is usually paging, a
taxonomy filter, or an availability filter, and the only way to know which is to measure.

## When to Use

- The curator says a scheduled scan keeps missing papers they find by hand.
- A discovery source returns suspiciously few candidates relative to what the field publishes.
- You are about to widen, re-word or add queries to a paper-fetching cron job.
- You need to justify a recall/precision trade to the owner before touching a job that writes into a
  corpus.

## Measure before changing anything

1. **Build ground truth from the curator's own finds.** Take the pages added in the last week or so,
   keep those with a DOI whose publication year falls inside the scan window, and write the DOI list
   to a scratch file. Exclude older papers the curator back-filled from their own reading list: they
   were never in scope for a date-windowed scan, and including them makes recall look broken when it
   is not.
2. **Replay the real pipeline**, not a paraphrase of it. Call the repo's own fetch script with the
   production flag set, once per configured query, for the same window, and union the DOIs returned.
3. **Compute two numbers**: recall (`|returned and ground truth| / |ground truth|`) and candidate
   volume per day after the pipeline's own screening. Recall alone will tempt you into a shape that
   surfaces hundreds of irrelevant records a day, which nobody can maintain.
4. **Then vary one structural thing at a time** — availability filter, taxonomy filter, page size,
   query shape — re-measuring both numbers. Report the table, not a recommendation.
5. **Get ceilings, not guesses.** Page a wide filter to exhaustion to learn what the shape *could*
   return, then decide what to cap.

Report recall %, candidates per day after screening, and how many days back the scan actually
reaches. Never change what a scheduled job ingests without saying so first: the curator owns the
precision/recall trade for their own knowledge base.

## The failure modes, in the order they usually bind

- **One page per query.** Check the client's `per-page` arithmetic before touching queries. A client
  that sets `per-page = min(max_results, 100)` plus a config of `max_results: 25` reads 25 records
  per query and stops — well under 1% of the matches in a two-week window. Cursor paging is worth
  more than any rewrite of the query strings.
- **A discipline taxonomy used as a topical filter.** An `Education` subfield filter discards roughly
  half of education-technology papers, which are filed under information systems, computer science
  applications or language and linguistics instead. Taxonomy assignment records where a work sits in
  the journal landscape, not whether it is relevant to you.
- **An availability filter standing in for open access.** Open-access records frequently carry
  `is_oa: true` with no direct PDF URL, especially hybrid Elsevier and some Springer titles. Dropping
  those silently loses about a quarter of the open-access hits. Filter on OA status, then resolve the
  PDF at ingest and record the failure.
- **Phrase queries under a relevance ranking.** Multi-word phrases matched against title and abstract
  recover almost nothing (a flagship phrase matched none of twenty-five known in-scope papers). One
  term per request, unioned, beats an OR-list: long OR lists are unreliable and can return zero where
  a single term returns one.
- **A significance screen that encodes the wrong literature.** A "drop self-report, small-sample,
  single-site" heuristic removes about a fifth of the recoverable set and is biased against exactly
  the perception, case-study and survey work many curators collect deliberately. Report those records
  separately rather than dropping them, or apply the screen only to the cheap preprint feed. The
  curator may choose to keep the screen anyway; if so, record the measured cost in a comment beside
  the flag so the next pass can argue with a number instead of re-litigating it.

## Retrieval shapes that work

- **Journal watch.** Filter on the sources the corpus already draws from
  (`primary_location.source.id` over the top ~30-40 outlets by recent ingest), queried one AI term at
  a time. Measured on a 15-day window of this corpus: ~11 candidates a day raw, ~7 a day after
  screening, and about three quarters of the hand-found items recovered.
- **Weekly topic sweep.** Filter on the handful of real subject topics (`topics.id`) and page fully
  with a cap. Much higher volume (hundreds a day), so run it weekly, not daily, and rank before
  ingesting.
- **Union the two.** Neither dominates: the journal watch catches items mis-filed by topic, the topic
  sweep catches items in journals nobody watches.

Accept a residue. Works filed under an unrelated topic — a psychology-of-AI paper under sports
motivation, a computing-education paper under computer science applications — cannot be retrieved by
taxonomy at all. Say so instead of promising complete coverage.

## Derive the watchlist from the corpus, do not guess it

Resolve recent articles' DOIs to their `primary_location.source`, count by source, and take the head
of that distribution. On this corpus two journals alone accounted for half the hand-found papers,
which is why a phrase-query scan could never see them. Re-derive the list periodically rather than
freezing it, and record source IDs, not journal names.

## Ship the fix into the scheduled scan

Measuring is half the job; the shape has to live in config and in the job that runs it, or the next
run reverts to the old behavior.

1. **Give the client an explicit paging contract** before touching any query: `--per-page` (the
   provider's page ceiling), `--pages` (how many cursor requests), and `--max` as the TOTAL across
   pages with `-1` for no cap. Print `total_matching`, `returned`, `requests` and `per_page` to
   stderr so a truncated run is visible instead of silent. Keep `--max` meaning what the caller
   thinks it means; do not overload it as the page size.
2. **Keep retrieval shapes in config, not code.** One source entry per shape, each with the query
   list (one term per entry), the filter in `args`, `max_results`, `per_query_pages`, and a
   `cadence`. Add a `--cadence daily|weekly` flag to the prefetch runner and treat a missing
   `cadence` as daily, so an existing source list keeps running unchanged. Let a source override the
   window with its own `window_days` for the same reason.
3. **Buy precision with text, not taxonomy, when the filter is broad.** A `topics.id` set matches
   every work filed under the topic, including ones with no learners in them; requiring a learner,
   teacher or institution term in title or abstract cut a measured sweep from ~231 to ~112
   records/day while keeping the recall that mattered.
4. **Attach the high-volume shape to the job that can afford it, as an injected script, not a prompt
   edit.** A weekly-scan prompt is often tens of kilobytes and hand-editing it through a tool call is
   error-prone. Put a wrapper under the scheduler's script directory whose stdout is the injected
   context, print the usage rules in its own header ("this is a shortlist, pick at most N, do not
   bulk-append to the backlog"), and also tell it what to do when the fetch fails — print a
   diagnostic and exit 0 so the rest of the job still runs.
5. **Edit a long prompt from a file through the CLI, then read it back.** `hermes cron edit <job_id>
   --prompt "$(cat new-prompt.md)"` avoids quoting the body into a tool call; afterwards load the
   job store and assert the new sentence is present and the stale command is gone. A prompt edit you
   did not verify is a prompt edit that did not happen.
6. **Mirror the change into the repo's copy of the prompt** (`tooling/cron/*.md`) and any reference
   doc that quotes the old command, then grep for the removed flags to prove no example still
   teaches them.
7. **Re-run both passes end to end** and report real numbers: candidates per pass, wall time, and
   which sources each pass selected. A cadence flag that does not actually separate the passes is
   the most likely silent bug.

Balance the shapes against each other before shipping: a daily watch at ~11 candidates/day and a
weekly sweep at ~500 candidates/week is a job an agent can finish; one shape at 230/day is not, no
matter how good its recall.

API specifics — selectable fields, filter syntax, topic IDs, the HTTP 400/429 traps, and a paced
paging recipe — are in `references/openalex-api-mechanics.md`.
