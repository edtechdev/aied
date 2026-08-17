# arXiv Listing-Page Extraction Strategy

When the arXiv API is unavailable (HTTP block, 429 rate limit, 500 error, or HTTP-only URL blocked by terminal security scanner), use this listing-page extraction pattern.

## 0. Browser Console Extraction (Fastest First Pass)

When browser tools are available (interactive or cron), `browser_navigate` + `browser_console` with a JavaScript query is the simplest way to get arXiv IDs and titles — no HTML parsing needed.

**JavaScript query for paper ID + title extraction:**

```javascript
Array.from(document.querySelectorAll('dt')).slice(0,50).map((dt, i) => {
  const id = dt.querySelector('a[href*="/abs/"]')?.textContent?.trim() || '';
  const dd = dt.nextElementSibling;
  const title_el = dd?.querySelector('.list-title');
  const title = title_el?.textContent?.replace('Title:','').trim() || dd?.firstChild?.textContent?.trim() || '';
  return (i+1) + '|' + id + '|' + title;
}).join('\\n')
```

**Workflow:**
1. `browser_navigate(url="https://arxiv.org/list/<cat>/recent")` — loads the listing
2. `browser_console(expression="<JS query above>")` — returns pipe-delimited lines: `1|arXiv:2606.23315|Paper Title`
3. Parse in Python: split on `|` for `(index, arxiv_id, title)` — arXiv IDs are clean (no prefix trimming needed)
4. For the remaining arXiv IDs that appear AIED-relevant, fetch metadata individually via `web_extract(urls=["https://arxiv.org/abs/ID"])`

**Why this beats HTML parsing:**
- **No single-quote attribute gotchas** — the browser's native CSS selector engine handles the DOM
- **No regex debugging** — `querySelectorAll` + `textContent` is deterministic
- **No temp files** — data goes straight to your context via `browser_console()` return value
- **Cron-safe** — works in cron contexts where browser tools are available (but `execute_code` is blocked)
- **Instant sanity check** — the JSON output is immediately in your context window; no parsing script needed

**Limitation:** Only the first 50 entries are loaded by default. For categories with 100+ entries (cs.AI has 569+), either scroll down and call `browser_console` again, or use the curl-HTML approach below for the full batch. The browser approach is best for the rapid "find AIED papers" pass on manageable categories (cs.CY ~77, cs.HC ~46).

**Titles with special characters:** The `.textContent` approach may include whitespace artifacts. Strip with `.trim()` and handle the `Title:` prefix that appears in `.list-title` elements.

## 1. Fetch Listing HTML (Batch / Full Extraction)

Curl the listing pages directly (works in both interactive and cron contexts):

```bash
# Page 1 (first 50 entries)
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.CY/recent" -o /tmp/cy_listing.html
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.HC/recent" -o /tmp/hc_listing.html

# Page 2 (entries 51-100) — essential; June 9 papers span multiple pages
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.CY/recent?skip=50&show=50" -o /tmp/cy_listing_p2.html
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.HC/recent?skip=50&show=50" -o /tmp/hc_listing_p2.html

# Page 3 (entries 101-150) — needed for full coverage; listings are ~127-144 entries
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.CY/recent?skip=100&show=50" -o /tmp/cy_listing_p3.html
curl -sL --retry 5 --retry-delay 2 "https://arxiv.org/list/cs.HC/recent?skip=100&show=50" -o /tmp/hc_listing_p3.html
```

## 2. HTML Structure

The listing page has a single `<dl>` containing all entries. Key patterns:

```html
<dl>
  <h3>Wed, 10 Jun 2026 (showing 33 of 33 entries )</h3>
  <dt>
    <a name="item1">[1]</a>
    <a href="/abs/2606.11116" title="Abstract" id="2606.11116">arXiv:2606.11116</a>
    [<a href="/pdf/2606.11116" ...>pdf</a>, ...]
  </dt>
  <dd>
    <div class='meta'>   <!-- Note: SINGLE-QUOTED class attributes -->
      <div class='list-title mathjax'><span class='descriptor'>Title:</span>
        Paper Title Here
      </div>
      <div class='list-authors'><a href="...">Author Name</a></div>
      <div class='list-subjects'><span class='descriptor'>Subjects:</span>
        <span class="primary-subject">Category (cs.CY)</span>; More (cs.AI)
      </div>
    </div>
  </dd>
  <h3>Tue, 9 Jun 2026 (showing first 17 of 44 entries )</h3>
  ...more <dt><dd> pairs...
</dl>
```

**Critical details:**
- Class attributes in `<div>` use **single quotes**: `class='list-title mathjax'` not `class="list-title mathjax"`
- Date markers are `<h3>` tags embedded **inside** the `<dl>`, not outside it
- Each paper is a `<dt>`/`<dd>` pair
- The `<dd>` wraps content in `<div class='meta'>`

## 3. Date-Section Parsing (Python)

Use `re.finditer()` with section bounds — NOT `re.split()` — because `<h3>` tags inside `<dl>` produce unreliable split boundaries:

```python
import re
from datetime import datetime

def extract_arxiv_listing(files, cat, since_date, today_date):
    papers = []
    for path in files:
        with open(path) as f:
            html = f.read()
        
        dl_match = re.search(r'<dl[^>]*>(.*?)</dl>', html, re.DOTALL)
        if not dl_match:
            continue
        dl_content = dl_match.group(1)
        
        # Find all date <h3> boundary positions
        date_positions = []
        for m in re.finditer(
            r'<h3[^>]*>.*?((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s*(\d+)\s+(Jun)\s+(\d{4}))',
            dl_content, re.DOTALL
        ):
            date_positions.append((m.start(), m.group(1)))
        
        # Build sections from bounds
        for i in range(len(date_positions)):
            start = date_positions[i][0]
            date_str = date_positions[i][1]
            end = date_positions[i + 1][0] if i + 1 < len(date_positions) else len(dl_content)
            
            dt = datetime.strptime(date_str, "%a, %d %b %Y").strftime("%Y-%m-%d")
            if dt not in [since_date, today_date]:
                continue
            
            # Find content after </h3>
            h3_end = dl_content.find('</h3>', start)
            if h3_end == -1:
                continue
            sec_content = dl_content[h3_end + 5:end]
            
            # Extract <dt>/<dd> pairs
            entries = re.findall(
                r'<dt>(.*?)</dt>\s*<dd[^>]*>(.*?)</dd>',
                sec_content, re.DOTALL
            )
            
            for dt_html, dd_html in entries:
                id_match = re.search(r'(\d{4}\.\d{4,5})', dt_html)
                if not id_match:
                    continue
                arxiv_id = id_match.group(1)
                
                # Single-quoted class attributes!
                title_match = re.search(
                    r"class='list-title mathjax'>\s*<span class='descriptor'>Title:</span>\s*(.*?)\s*</div>",
                    dd_html, re.DOTALL
                )
                title = re.sub(r'\s+', ' ', title_match.group(1)).strip() if title_match else ""
                
                authors = []
                auth_match = re.search(r"class='list-authors'>(.*?)</div>", dd_html, re.DOTALL)
                if auth_match:
                    authors = re.findall(r'<a[^>]*>([^<]+)</a>', auth_match.group(1))
                
                cats = []
                cat_match = re.search(r"class='list-subjects'>(.*?)</div>", dd_html, re.DOTALL)
                if cat_match:
                    cats = re.findall(r'([a-z]+\.[A-Za-z_]+)', cat_match.group(1))
                
                papers.append({
                    "arxiv_id": arxiv_id,
                    "title": title,
                    "date": dt,
                    "authors": authors,
                    "venue": ", ".join(cats[:5]),
                })
    return papers
```

## 4. Why this is superior to web_search

- **Comprehensiveness:** Listing pages show *every* submission in the category, not search-engine-indexed subsets.
- **Deterministic:** Every paper in the category is listed; no search-engine ranking or relevance cutoff.
- **Bypasses API rate limits:** Listing pages are cached/static and rarely rate-limited.
- **Cross-listings visible:** Papers cross-listed from other categories (e.g., a cs.AI paper in cs.CY) appear in both categories' listings.
- **Exact submission dates:** Each section is labeled with the exact submission date, enabling precise date-range filtering.

## 5. Cron context

In cron jobs where `execute_code` is blocked:
1. Curl listing HTML to temp files (as above)
2. Write a Python script to `/tmp/parse_listings.py` via `write_file`
3. Run it with `terminal('python3 /tmp/parse_listings.py', workdir='~')`
4. The script outputs a JSON with all candidate papers for further processing

## 6. Common Pitfalls

- **Single quotes != double quotes:** The HTML uses `class='value'` not `class="value"`. Regex with double quotes silently returns zero matches.
- **Multi-page listings:** cs.CY and cs.HC each have 127–144 entries (3 pages at 50/page). Skipping page 2/3 misses June 9 papers.
- **Date headers inside `<dl>`:** The `<h3>` date markers are inside the `<dl>`, not at the top of the document. Using `re.split()` on them corrupts the `<dt>`/`<dd>` pairing; use bounded sections instead.
- **Initial HTML extraction:** The `web_extract` tool returns truncated/summarized listings for large pages. Always download raw HTML via `curl` for reliable extraction.