# Refreshing an Already-Ingested Paper to a Newer Version

Validated 2026-07-14: user asked to "update the file to the new version" for
arXiv:2605.21629, ingested as v1 on 2026-05-23, revised to v3 on 2026-07-13.

## Why a separate path from ingestion

`research-wiki` dedup logic *skips* papers whose `raw/papers/<id>.md` exists.
A version refresh is the deliberate opposite: the file exists, so rewrite it in
place. The raw-frontmatter `sha256` field is the drift detector that makes this
safe — recomputing it on update surfaces the change.

## Detection

- Current version: `grep "arXiv:<id>v\d"` in the raw file.
- Latest version: `web_extract` on `https://arxiv.org/abs/<id>` → submission-history
  block shows `vN [last revised <date>]`.
- latest > current → refresh. Equal → report "already current", no change.

## Procedure

1. Fetch NEW-version full text from the PDF (NOT /html — see caveat):
   ```bash
   curl -sL --retry 3 --retry-delay 2 "https://arxiv.org/pdf/<id>" -o /tmp/<id>.pdf
   pdftotext /tmp/<id>.pdf /tmp/<id>.txt
   ```
2. In Python:
   ```python
   import hashlib
   body = open("/tmp/<id>.txt").read()[:50000]   # slice, not truncate
   sha = hashlib.sha256(body.encode()).hexdigest()
   fm = ("---\n"
         "source_url: https://arxiv.org/abs/<id>\n"
         "ingested: <original date>\n"
         "updated: <today>\n"
         "version: vN (last revised <date>)\n"
         f"sha256: {sha}\n"
         "---\n\n")
   open("/home/doug/wiki/raw/papers/<id>.md", "w").write(fm + body)
   ```
3. Bump concept page: `updated: <today>` + a "updated to **vN**" note by the
   source link. Only touch the synthesis body if headline findings changed.
4. Regenerate static site (absolute output path!):
   ```bash
   cd /home/doug/.hermes/skills/research-wiki
   python3 scripts/generate-static-site.py --wiki-path /home/doug/wiki \
       --output-path /home/doug/wiki/static-site --wiki-title 'AI Ed Wiki'
   ```
5. Verify + restart server if down:
   ```bash
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/pages/<slug>.html
   # HTTP 000 means server died; restart:
   # (background) python3 -m http.server 8080  # workdir=/home/doug/wiki/static-site
   ```

## Caveat: /html/<id>vN extraction is noisy

`web_extract` on `https://arxiv.org/html/<id>v3` returns duplicated glyph runs
and escaped LaTeX (`3.23.2 million`, `26.9%26.9\\%`, `p<0.001p<0.001`). Always
prefer PDF to pdftotext for the refresh body.

## Version drift usually is NOT a findings change

In 2605.21629, v1 to v3 left all headline numbers identical (26.9% college
study-time decline, 25% retention-odds drop, 85% non-proctored reversal). v3
added methodology/appendix material (LLM item-classification validation at 86%
agreement kappa=0.79, expanded robustness appendices R6 to R10, deeper
cognitive-surrender-vs-offloading discussion). So "version changed" rarely means
"concept page wrong" — refresh raw + metadata; touch synthesis only if claims moved.
