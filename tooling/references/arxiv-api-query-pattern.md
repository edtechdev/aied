# arXiv Query Pattern (through the rate-limited client)

All arXiv access goes through **`tooling/scripts/arxiv_fetch.py`**. Do not write a
fresh `urllib` snippet: the pacing is enforced in that one place, and a hand-rolled
loop over categories is exactly how the limit gets broken.

## The rules (arXiv API terms of use)

<https://info.arxiv.org/help/api/tou.html>

- **No more than one request every three seconds, and requests limited to a single
  connection at a time.**
- The limit counts **all machines under your control as a whole**, so it is not
  per-process and not per-agent: five category queries in a loop, a retry storm, or
  two subagents each fetching their own arXiv page all violate it while looking
  innocent in isolation.
- Prefer the endpoint arXiv blesses for the job (see `bulk_data.html`): **OAI-PMH**
  to bulk-download or keep metadata up to date, **RSS** for new articles in a
  category, and the **legacy API** for a targeted query.
- Use `export.arxiv.org` and `rss.arxiv.org`. The main site is for interactive
  readers, so do not scrape its listing pages.
- Do not store and serve arXiv e-prints (PDFs, source) from your servers unless the
  licence permits it — link back to the **abstract page** instead. Saving a paper's
  full text locally for research use is fine (this repo's `raw/` is local-only and
  gitignored); redistributing it is not.
- Acknowledge arXiv: *"Thank you to arXiv for use of its open access
  interoperability."*

The client holds an exclusive cross-process lock for the duration of each request and
spaces requests at least 3 seconds apart, measured from the end of the previous one,
so the limit holds even when several processes or agents call it at once.

## Usage

```bash
# Targeted query (legacy API, export.arxiv.org)
python3 tooling/scripts/arxiv_fetch.py --query "cat:cs.CY AND ti:education AND submittedDate:[202607040000 TO 202607072359]" --max 20

# New articles in a category (RSS) — the right tool for "what's new"
python3 tooling/scripts/arxiv_fetch.py --rss cs.CY --rss cs.HC

# Catch-up metadata harvest (OAI-PMH), the documented bulk path
python3 tooling/scripts/arxiv_fetch.py --oai cs.CY --days 3
```

Each prints JSON lines. From Python, import it rather than re-implementing it:

```python
import sys; sys.path.insert(0, 'tooling/scripts')
from arxiv_fetch import query, rss, oai

rows = query("cat:cs.CY AND ti:education", max_results=20)   # costs 3s per call
# A multi-category scan is therefore 3s PER CATEGORY, by design. Dedupe by
# arxiv_id across categories, since one paper can be listed under several.
```

## Any other transport must claim the window first

The browser tool, a shell `curl`, or a script that fetches arXiv its own way cannot
use the lock implicitly, so it must claim it explicitly and hold it for the length of
its request:

```bash
python3 tooling/scripts/arxiv_fetch.py --reserve --hold 10   # then fetch; 10s covers it
```

Never run two arXiv fetches concurrently, and never hand a subagent its own arXiv work
while another is running: serialize them.

## Prove the pacing

```bash
python3 tooling/scripts/arxiv_fetch.py --selftest-rate   # 3 real requests, prints the gaps
```

It exits non-zero if any gap is under the interval, so a regression is visible rather
than assumed. The pacing can also be checked offline without touching arXiv: start
several `--reserve` calls at once and confirm their claim gaps are at least 3 seconds.
Measured on this host: five concurrent callers claim 3.0s apart (15s wall clock), and
a `--reserve --hold 4` blocks the next claim until 3s after it releases.

## Notes that still bite

- **Query syntax**: `urlencode` preserves `+` as the arXiv AND/space separator — do
  NOT use `quote(query, safe='')` (it encodes `+` as `%2B` and returns nothing).
- **Keyword false positives**: cs.CL / cs.AI hits are often pure-ML titles that
  merely contain "learning" (e.g. "Learning Gradient Flows"). Read the abstract and
  confirm the paper is education-applied before ingesting it.
- **Weekend windows**: a `submittedDate` filter over Sat–Mon can return 0 because
  arXiv does not process weekend submissions. Fall back to the **RSS feed** for the
  category (`--rss`), not to scraping listing pages.
- **Some hosts cannot reach arXiv from a shell at all**: an egress filter can answer
  with an immediate HTTP 406 (in about 0.25s, with no `Server` header) which is not an
  arXiv response — a raw TLS connection to `export.arxiv.org:443` returns 200 Atom
  XML from the same host, so the block is in the tool layer, not the network. The
  browser tool is the working transport there. `--reserve` still applies, because it
  makes no network call.