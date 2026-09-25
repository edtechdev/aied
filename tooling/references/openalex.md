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
3. `~/.hermes/openalex.key` — this repository's convention.
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
# discovery: the scan's main query. Relevance sorting is the default and matters.
python3 tooling/scripts/openalex_fetch.py --search "generative AI in education" \
    --edu-only --oa-only --since 2026-09-01 --max 25

# only works that expose a downloadable PDF
python3 tooling/scripts/openalex_fetch.py --search "AI literacy" --edu-only --oa-only \
    --since 2026-06-01 --with-pdf-only --max 25

# one work by DOI (what the source-acquisition path uses)
python3 tooling/scripts/openalex_fetch.py --doi 10.1007/s11858-026-01827-y

# candidates for a title, scored by similarity (accept none below ~0.85)
python3 tooling/scripts/openalex_fetch.py --title "Generative AI in mathematics education" --max 5
```

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
