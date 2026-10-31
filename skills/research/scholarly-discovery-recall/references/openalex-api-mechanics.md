# OpenAlex API mechanics that bite a discovery scan

Distilled from measuring a real scan against hand-picked items. All examples assume a key in
`~/.hermes/openalex.key`; the key travels in an `Authorization: Bearer` header, never in the URL.

## Request shape

```bash
K=$(cat ~/.hermes/openalex.key)
curl -s -G -H "Authorization: Bearer $K" https://api.openalex.org/works \
  --data-urlencode "filter=is_oa:true,from_publication_date:2026-10-17,to_publication_date:2026-10-31" \
  --data-urlencode "select=doi,title,publication_date,type,open_access,best_oa_location,primary_location,abstract_inverted_index,primary_topic,topics" \
  --data-urlencode "per-page=200" --data-urlencode "cursor=*"
```

- `per-page` maxes at 200; anything higher is refused. Use `cursor` (`*` to start, then
  `meta.next_cursor`) to page; `page=` deep-pages badly.
- `select` must name real field names. `is_oa` is **not** selectable — use `open_access`, and read
  `.open_access.oa_status`. Asking for a bad field returns HTTP 400 with the full valid-field list,
  which is the fastest way to discover the current schema.
- The abstract arrives as `abstract_inverted_index`, not text. Rebuild it by sorting tokens by
  position; the repo client's `abstract_of()` already does this.

## Filter syntax traps

- **DOIs:** `filter=doi:10.3389/feduc.2026.1953305` with a literal `/` works. Percent-encoding the
  slash (`%2F`, which `urllib.parse.quote` does by default) returns HTTP 400. Normalise both sides
  for comparison, since results echo `https://doi.org/...`.
- Fetching one work: `filter=doi:<doi>` beats the `/works/https://doi.org/<doi>` path form, which
  needs the identifier encoded in a way that is easy to get wrong.
- Multiple values in one filter are ORed with `|`: `doi:a|b|c`, `topics.id:T1|T2`,
  `primary_location.source.id:S1|S2`.
- Different filters are ANDed. You cannot OR across filter fields, so a shape that needs "topic set
  OR discipline set" is two requests whose results you union.
- `title_and_abstract.search` accepts a phrase in quotes, but long pipe-joined OR-lists are
  unreliable: a long list returned 0 for a work where a single term returned 1. Issue one term per
  request and union. Quoted multi-word phrases are strict — a flagship phrase can match none of the
  known in-scope papers.
- The `search=` parameter searches more than title and abstract and is relevance-ranked, so with a
  small `per-page` you see only the top slice. Do not mistake ``search`` truncation for a query bug.

## Useful identifier sets

Topic IDs (subject classifications, `topics.id`), Education-adjacent:

- `T14414` Artificial Intelligence in Education
- `T11636` Artificial Intelligence in Healthcare and Education
- `T11902` Intelligent Tutoring Systems and Adaptive Learning
- `T12338` Digital literacy in education
- `T11492` Academic integrity and plagiarism
- `T10254` Innovations in Medical Education
- `T10021` EFL/ESL Teaching and Learning; `T10130` Mathematics Education and Teaching Techniques;
  `T12070` Writing and Handwriting Education — the discipline topics AI-in-education work gets
  mis-filed into

Subfield: `primary_topic.subfield.id:subfields/3304` is Education. As a recall filter it is a trap
(half of relevant work is filed elsewhere); as a precision filter with an AI-term requirement it
returns a small, clean set.

Source IDs are per journal and stable, e.g. `S9692511` Frontiers in Psychology, `S2596526815`
Frontiers in Education, `S146239864` Assessing Writing, `S4210183364` Computers and Education
Artificial Intelligence. Look them up once with `/sources?search=<name>&select=id,display_name` and
store the IDs, not the names.

## Pacing and backoff

429s appear within a few dozen requests when paging. Pace about 1 second between requests and retry
the 429 with exponential backoff (3s, 6s, 9s); do not treat a 429 as a hard failure. A 15-day sweep
over a wide topic set is tens of requests — budget a couple of minutes, not seconds.

```python
import time, urllib.error, urllib.request, json, urllib.parse
def get(urlparams, key, tries=6):
    for t in range(tries):
        try:
            req = urllib.request.Request('https://api.openalex.org/works?' + urllib.parse.urlencode(urlparams),
                                         headers={'User-Agent': 'discovery-scan'})
            req.add_header('Authorization', f'Bearer {key}')
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(3 * (t + 1)); continue
            raise
    raise RuntimeError('rate limited past retries')
```

## Measuring recall without hammering the API

Testing "would this query have found that paper" for N queries x M known papers is N requests, not
N x M: combine the DOIs into one OR filter and add the query, then read `meta.count`.

```
filter=doi:<doi1>|<doi2>|...,title_and_abstract.search:<one term>
```

This also tells you which of the known papers each term covers, which is how the per-term term list
gets built instead of guessed.
