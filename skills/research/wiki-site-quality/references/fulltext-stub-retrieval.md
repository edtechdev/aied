# When the raw source is only an abstract stub — retrieving the full text

Enriching an article page can stall when `raw/papers/<file>.md` contains **only the abstract**, not the paper's full text. This is common for OSF/EdArXiv preprint ingestion, where the ingestion step captured the abstract page rather than the PDF.

## Detect

Before enriching a thin article, check whether the raw file is a stub:

```bash
wc -l raw/papers/<slug>.md        # e.g. 18 lines / ~1KB => almost certainly abstract-only
```

If the raw file ends right after an `## Abstract` block with no body sections (Introduction, Methods, Results, Discussion), the full text is missing — you cannot enrich from it.

## Recover the full text from OSF/EdArXiv

1. Resolve the source DOI with `web_extract` (e.g. `https://doi.org/10.35542/osf.io/<id>_v5`). This returns the OSF preprint page and usually names the PDF file (e.g. `ACB_Jia_Xu_2026.pdf`).

2. Get the OSF preprint ID. The DOI's `osf.io/<id>` segment is the preprint node id (e.g. `4cr8j`).

3. Download the actual PDF — note the two URL forms behave differently:
   - `https://osf.io/preprints/edarxiv/<id>/download` → often returns an **HTML page, not the PDF** (server-side redirect/JS).
   - `https://osf.io/download/<id>` → returns the **real PDF** (worked here, 314KB).
   ```bash
   curl -sL -A "Mozilla/5.0" -o paper.pdf -w "HTTP %{http_code} size %{size_download}\n" "https://osf.io/download/<id>"
   file paper.pdf   # confirm "PDF document"
   ```

4. Extract text with pymupdf:
   ```python
   import fitz   # or pymupdf
   doc = fitz.open('paper.pdf')
   text = ''.join(p.get_text() for p in doc)
   open('paper_full.txt','w').write(text)
   ```

5. **Update the raw file** with the full text (preserve its YAML frontmatter; append the extracted text under a `## Full text` section), so the enrichment is grounded and future sessions have the source.

6. Enrich the article from the extracted text, then run the standard link checks.

## Pitfalls

- The OSF "Download" button may require the `/download/<id>` form; the preprint-paths `/download` variant can hand back HTML. Check `file` output before trusting a "200".
- Confirm the extraction page count (e.g. `PAGES: 22`) to verify you got the whole paper, not a partial.
- EdArXiv preprints are usually CC-BY (open access) — per the maintainer's convention, OA PDFs are fine to fetch; still flag if a source is paywalled.
