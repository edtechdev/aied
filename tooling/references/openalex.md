# OpenAlex: finding open-access articles outside the preprint servers

arXiv carries preprints in a handful of categories. Plenty of AI-in-education
research never appears there: it is published gold or diamond open access in a
journal, or deposited in an institutional repository. OpenAlex is the index that
finds those, and it reports where the free full text actually lives.

All access goes through `tooling/scripts/openalex_fetch.py`.

## The API key is optional

The API answers with no key at all. If a key is missing or unreadable the client
falls back to the anonymous API automatically and says so on stderr; nothing
breaks, the daily budget is just smaller (1,000 credits instead of 10,000, and
shared with every other anonymous caller rather than your own account).

A free key raises the budget roughly tenfold. Get one at
<https://openalex.org/settings/api> (free account, then Settings -> API key).

## Supplying a key (forks: pick any one of these)

Resolved in this order, first hit wins:

1. `OPENALEX_API_KEY` — an environment variable.
2. `OPENALEX_API_KEY_FILE` — path to a file containing the key.
3. `<AGENT>/openalex.key` — this repository's convention.
4. `<clone>/.openalex.key` — a file in your clone, already gitignored.

The key never appears in a URL, never in the output, and never in this repository.
It travels in an `Authorization` header only. Confirm what the client found with:

```bash
python3 tooling/scripts/openalex_fetch.py --selftest
```

It reports the key's *source* and length, never the key, along with your remaining
budget.

## The polite pool

Set your contact address and OpenAlex puts you in the polite pool:

```bash
export OPENALEX_MAILTO="you@example.org"     # or pass --mailto
```

Without it the request carries only a generic client name. Do not enter someone
else's address.

## Usage

```bash
# discovery: one AI term per request, unioned across requests. Relevance sorting is the
# default and matters.
python3 tooling/scripts/openalex_fetch.py --search "generative AI" \
    --oa-only --since 2026-09-01 --max 200 --pages 2

# journal watch: the outlets this corpus actually draws from
python3 tooling/scripts/openalex_fetch.py --search "artificial intelligence" \
    --oa-only --require-ai --filter "primary_location.source.id:S9692511|S2596526815" \
    --since 2026-09-01 --max 200 --pages 2

# topic sweep: broad topics.id filter, learners required, high volume
python3 tooling/scripts/openalex_fetch.py --search "AI literacy" --oa-only --require-ai \
    --require-learners --filter "topics.id:T14414|T11636|T11902" \
    --since 2026-10-17 --max 200

# only works that expose a downloadable PDF (avoid for discovery -- see the note below)
python3 tooling/scripts/openalex_fetch.py --search "AI literacy" --oa-only \
    --since 2026-06-01 --with-pdf-only --max 25

# one work by DOI (what the source-acquisition path uses)
python3 tooling/scripts/openalex_fetch.py --doi 10.1007/s11858-026-01827-y

# candidates for a title, scored by similarity (accept none below ~0.85)
python3 tooling/scripts/openalex_fetch.py --title "Generative AI in mathematics education" --max 5
```

## Paging

A date-windowed filter matches thousands of works, so one page is never the window. Three flags
control the request:

- `--per-page` records per request (OpenAlex caps it at 200; default is `--max` when that fits).
- `--pages` how many cursor pages to request (default 1).
- `--max` the total across pages, `-1` for no cap.

```bash
# walk a whole fortnight of one topic, newest first, with no free-text query
python3 tooling/scripts/openalex_fetch.py --filter "topics.id:T14414" --oa-only \
    --since 2026-10-17 --until 2026-10-31 --max -1 --per-page 200 --pages 40
```

`stderr` reports `total_matching`, `returned`, `requests` and `per_page`, so a truncated run is
visible rather than silent.

## Two filters that look like precision and cost recall

- **`--edu-only`** restricts to `primary_topic.subfield.id:subfields/3304`. OpenAlex files roughly
  half of education-technology work outside that subfield -- information systems, computer science
  applications, language and linguistics, psychology -- so the filter drops relevant papers with
  nothing offered in exchange.
- **`--with-pdf-only`** drops records with `is_oa: true` and no `pdf_url`. That is about a quarter
  of open-access hits (hybrid Elsevier, some Springer). Filter on `is_oa`, then resolve the PDF at
  ingest and record the failure.

## Abstract screening

`--require-ai` keeps only records with an AI term in title or abstract. `--require-learners`
additionally requires a learner, teacher or institution term, which is what makes a broad
`topics.id` sweep readable. `--drop-low-impact` applies the significance bar and prints a reason
per dropped record; it is biased against perception, case-study and survey work, so report those
separately rather than letting the bar decide silently.

Output is one JSON object per line, with `dedupe_key` (DOI, else OpenAlex id),
`pdf_url`, `oa_status`, `venue`, `authors`, `arxiv_id` when the work is also on
arXiv, and `title_similarity` for `--title`.

## Three traps

**Do not date-sort a free-text search.** Sorting newest-first with a search makes
OpenAlex return whatever newest work matched any single term, which is mostly
off-topic. Relevance is the default for a reason; the client silently falls back
to a date sort only when there is no query at all.

**Future publication dates are not available papers.** OpenAlex carries preprints
with projected dates years out, and they have no text yet. The client excludes
anything dated after today unless you pass `--include-future`.

**A `pdf_url` is a promise, not a PDF.** Publisher links for Springer, ACM and
Elsevier frequently return an HTML landing page or a 403. Validate the magic bytes
(`%PDF`) before ingesting, as `wiki-source-acquisition` describes, and expect some
links to fail.

**Beware near-duplicates.** Zenodo and repository records repeat the same paper
under different DOIs, so deduplicating on `dedupe_key` alone is not enough: also
compare titles across recent results before ingesting.

## The inclusion bar in the client (`--require-ai`, `--drop-low-impact`)

The scan asks a broad engine for a narrow thing, so two client-side filters do the narrowing. Both
are heuristics over the title and abstract, deliberately conservative: they drop only on a clear
signal, always print the reason, and never judge quality -- they decide what is worth spending
full-text retrieval and writing effort on.

- **`--require-ai`** drops any record with no AI/generative-AI term in title or abstract. Needed
  because `--edu-only` only pins the OpenAlex education subfield: over a one-week window
  (2026-09-20 to 09-27) it left 36 of 72 records with no AI content at all -- teacher job
  satisfaction, grade-3 number contexts, mathematics-teaching indicators. `--search` matches full
  text, so a paper that mentions AI once in its discussion can outrank an AI paper.
- **`--drop-low-impact`** applies the knowledge base's significance bar, in this order:
  1. a review or synthesis is always kept;
  2. a perception/attitude/survey/needs-analysis study in the **title** is dropped as self-report
     by construction -- an outcome word in the abstract ("academic achievement" correlated with
     attitudes) does not rescue it, which is why this test runs before the outcome check;
  3. otherwise, self-report with no measured outcome and no design strength is dropped;
  4. a stated sample under 100 with no outcome and no design strength is dropped;
  5. a single-site/single-institution scope with no design strength is dropped.
  Kept records carry `scope_verdict` and `scope_reason` so the triage list explains itself.

Measured on that week: 63 records dropped for having no AI term, 17 dropped as low impact, 29 kept
from six query shapes. Roughly a third of what survives is still weak -- the screen is a filter,
not a reviewer, and the ambiguous ones are meant to reach triage.

**Do not use `--title-abstract-search` as the default.** It is a tighter server-side filter, but it
requires every term of the query: the same window went from 134 matches to 7, and after screening
the 29 records became 2. Use it only for short queries where precision matters more than recall.

## Budget and limits

| | keyless | free key |
|---|---|---|
| credits/day | 1,000 | 10,000 |
| daily budget | $0.10 | $1.00 |
| requests/second | low | up to 100 |

Response headers `X-RateLimit-Remaining` and `X-RateLimit-Cost-USD` report usage;
`--selftest` prints them. The client paces at 0.2s between requests and retries
with backoff on 429/5xx, so an ordinary scan never approaches the limit.

Cite OpenAlex as: Priem, J., Piwowar, H., & Orr, R. (2022). *OpenAlex: A
fully-open index of scholarly works, authors, venues, institutions, and concepts*.
arXiv:2205.01833.
