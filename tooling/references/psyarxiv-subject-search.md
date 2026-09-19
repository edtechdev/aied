# PsyArXiv by subject: why the obvious APIs fail

Goal: poll the newest **PsyArXiv** preprints in a specific **subject** (e.g.
Educational Psychology, subject id `584240d954be81056ceca992`).

## What does not work

1. **RSS** — PsyArXiv does not publish a feed for subject-filtered listings.
2. **OSF REST API, subjects + anything else** — `filter[subjects]` works *only*
   on its own:

   ```
   curl -g -s 'https://api.osf.io/v2/preprints/?filter%5Bsubjects%5D=584240d954be81056ceca992&sort=-date_published&page%5Bsize%5D=5'
   ```

   Adding `filter[provider]=psyarxiv`, `filter[date_published][gte]=…`, or any
   other filter returns `links.meta.total = 0` — not an error, an empty set.
   The subjects filter is served by a different index than the other filters, so
   the combination silently matches nothing. (Verified 2026-09-18.)
3. **Client-side filtering of the provider query** — `filter[provider]=psyarxiv`
   alone works (60k+ preprints) but the list response carries no subject data,
   so you cannot select Educational Psychology without a request per preprint.

## What works: the SHARE/Trove search the discover page itself calls

The OSF discover page (`https://osf.io/preprints/psyarxiv/discover`) is backed by
`https://share.osf.io/trove/index-card-search`. Open the page with devtools (or
read `performance.getEntriesByType('resource')`) and the request it makes is:

```
https://share.osf.io/trove/index-card-search
  ?cardSearchFilter[publisher][]=https://osf.io/preprints/psyarxiv
  &cardSearchFilter[subject][any-of]=https://api.osf.io/v2/subjects/584240d954be81056ceca992
  &cardSearchFilter[resourceType]=Preprint
  &cardSearchFilter[accessService]=https://osf.io/
  &cardSearchText[*,creator.name,isContainedBy.creator.name]=
  &page[size]=10
  &sort=-relevance
```

Notes that cost time to rediscover:

- **Sort must be `-dateCreated`.** `-datePublished`, `-date_updated`,
  `datePublished`, and `-indexCard.datePublished` all fail with
  `InvalidSort: may not sort by date on a path leading to a non-date property`.
  `-relevance` (the discover page default) is useless for a nightly scan.
- **Encoding matters.** Percent-encode the bracketed parameter names
  (`cardSearchFilter%5Bpublisher%5D%5B%5D=…`) or use `urllib.parse.urlencode`,
  which does it for you.
- The response is a JSON-LD card list at the top level (`data`, `meta`, `links`),
  *not* the OSF `{data: [{attributes: …}]}` envelope. Values are
  `[{"@value": "…"}]`; the preprint's landing page is the card's `@id`
  (`https://osf.io/xw4vr`).
- `meta.total` for PsyArXiv + Educational Psychology was 2739 preprints.
- Pagination is cursor-based: pass back `page[cursor]` from `links.next`.

## Full text

Every PsyArXiv preprint is open. Resolve the primary file and download it:

```
curl -g -s 'https://api.osf.io/v2/preprints/<osf_id>/files/osfstorage/'
# → data[].links.download  (https://osf.io/download/<file-guid>/)
pdftotext -layout <file>.pdf <out>.txt
```

`tooling/scripts/fetch-psyarxiv-edpsych.py --text <osf_id> --out <path>` does
both steps.

## DOIs

`attributes.doi` on the OSF API record is usually `null` for preprints posted in
the last days or weeks — PsyArXiv mints DOIs later. `--dateCreated` is the
posting date the scan window should use. Never synthesize a DOI; cite
`https://osf.io/<id>` until the API reports a real one.

## Fetcher

`tooling/scripts/fetch-psyarxiv-edpsych.py` — reads the `trove_search` source
from `wiki.config.yaml` → `scan.sources`, emits one JSON record per line
(newest first, versions collapsed by normalized title).
