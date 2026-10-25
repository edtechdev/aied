#!/usr/bin/env python3
"""Render a newsletter markdown issue to a standalone preview page.

Reads an issue written in the house format (frontmatter, `# Name`, one issue line,
a `## Contents` list, then the sections) and writes an `index.html` styled like the
AIEd site: dark surface, sky-blue accent, Atkinson Hyperlegible Next with a system
fallback. The masthead takes the `# ` heading and the paragraph under it, the
`## Contents` section becomes a two-column box, and everything else passes through
pandoc unchanged.

    python3 render-newsletter-preview.py newsletters/2026-10-23.md \
        --outdir <AGENT>/cache/scratch/newsletter-preview \
        [--branch newsletter/2026-10-23-draft]

Then serve the output on a second port (never the site's own preview port):

    python3 -m http.server 4322 --bind 0.0.0.0 --directory <outdir>
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path

CSS = """
:root{--bg:#0d1418;--panel:#15212b;--text:hsl(205,16%,82%);--muted:hsl(205,12%,68%);
--accent:#7dd3fc;--border:#2c3a45;--mark:#ffe9a3}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:'Atkinson Hyperlegible Next',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:18px;line-height:1.65}
header.top{background:var(--panel);border-bottom:1px solid var(--border);padding:.65rem 1.2rem;font-size:.85rem;color:var(--muted)}
header.top b{color:var(--accent);font-weight:600}
.draft{background:#3a2f10;border:1px solid #7a6218;color:var(--mark);padding:.55rem .9rem;border-radius:6px;font-size:.85rem;margin:1.4rem auto 0;max-width:46rem}
main{max-width:46rem;margin:0 auto;padding:0 1.2rem 4rem}
.masthead{border-bottom:3px solid var(--accent);padding:2rem 0 .9rem;margin-bottom:1.4rem}
.masthead h1{font-size:2.5rem;line-height:1.1;margin:0;color:#fff;letter-spacing:-.02em}
.masthead p{color:var(--muted);margin:.7rem 0 0;font-size:1rem}
.toc{border:1px solid var(--border);background:var(--panel);border-radius:8px;padding:1rem 1.3rem 1.1rem;margin:0 0 2rem}
.toc h2{margin:.1rem 0 .6rem;border:0;padding:0;font-size:.8rem;text-transform:uppercase;letter-spacing:.09em;color:var(--muted)}
.toc ul{columns:2;column-gap:2rem;margin:0;padding-left:1.1rem}
.toc li{margin:.2rem 0;font-size:.95rem;break-inside:avoid}
h2{font-size:1.3rem;margin:2.4rem 0 .6rem;padding-bottom:.35rem;border-bottom:1px solid var(--border);color:#fff}
h3{font-size:1.05rem;margin:1.9rem 0 .35rem;line-height:1.4}
h3 a{color:var(--accent)}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
p{margin:.5rem 0 .9rem}
blockquote{margin:1.1rem 0 1.4rem;padding:.85rem 1.1rem;background:var(--panel);border-left:3px solid var(--accent);border-radius:0 6px 6px 0;font-size:1rem}
blockquote p{margin:0}
blockquote p+p{margin-top:.6rem}
.page-footer{border-top:1px solid var(--border);margin-top:3rem;padding-top:1.2rem;color:var(--muted);font-size:.86rem;line-height:1.6}
.page-footer p{margin:.4rem 0}
hr{border:0;border-top:1px solid var(--border);margin:2.5rem 0 1.2rem}
@media (max-width:640px){.toc ul{columns:1}.masthead h1{font-size:2rem}}
"""


def pandoc(markdown_text: str) -> str:
    result = subprocess.run(
        ["pandoc", "-f", "markdown", "-t", "html", "--no-highlight"],
        input=markdown_text,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        sys.exit(f"pandoc failed: {result.stderr.strip()}")
    return result.stdout


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("issue", type=Path, help="markdown issue file")
    ap.add_argument("--outdir", type=Path, required=True)
    ap.add_argument("--branch", default="", help="branch label shown in the banner")
    ap.add_argument("--title", default="", help="override the page title")
    args = ap.parse_args()

    raw = args.issue.read_text(encoding="utf-8")
    parts = raw.split("---", 2)
    front = parts[1] if len(parts) == 3 else ""
    body_md = parts[2].lstrip("\n") if len(parts) == 3 else raw

    def field(name: str) -> str:
        m = re.search(rf"^{name}:\s*(.+)$", front, re.M)
        return m.group(1).strip().strip('"').strip("'") if m else ""

    frag = pandoc(body_md)

    h1 = re.search(r"<h1[^>]*>.*?</h1>", frag, re.S)
    if h1:
        h1 = h1.group(0)
    else:
        # A published issue lets the page supply the heading from `title`, so the
        # markdown body has none; rebuild the masthead from the frontmatter.
        title_text = field("title") or args.issue.stem
        issue_no = field("issue")
        created = field("created") or field("date")
        meta = ""
        if issue_no and created:
            day = created.split("T")[0]
            try:
                y, mo, d = (int(x) for x in day.split("-"))
                from datetime import date as _d
                pretty = _d(y, mo, d).strftime("%B %-d, %Y")
            except Exception:
                pretty = day
            # Once the title carries its own "#N", repeating the issue number under it
            # is a duplicate; the date alone is what the line still adds.
            line = pretty if "#" in title_text else f"Issue {issue_no} &middot; {pretty}"
            meta = f'<p class="issue-line">{line}</p>'
        h1 = f"<h1>{title_text}</h1>{meta}"
    # When the issue has no h1 of its own (the page supplies it from `title`),
    # the body starts at the top of the fragment.
    head_end = frag.find("</h1>")
    body_start = head_end + len("</h1>") if head_end != -1 else 0
    lead_match = re.search(r"<p>.*?</p>", frag[body_start:], re.S)
    lead = lead_match.group(0) if lead_match else ""

    # the masthead carries everything between the h1 and the Contents section, so an
    # opening sentence plus its follow-up paragraph both stay above the contents box
    rest_start = frag.find('<h2 id="contents">')
    masthead_extra = ""
    if rest_start != -1:
        after_h1 = frag[body_start:rest_start]
        if lead and lead in after_h1:
            masthead_extra = after_h1.replace(lead, "", 1).strip()

    toc_start = frag.find('<h2 id="contents">')
    toc = ""
    if toc_start != -1:
        toc_end = frag.find("</ul>", toc_start)
        if toc_end != -1:
            toc = frag[toc_start:toc_end + len("</ul>")]

    # TOC anchors must resolve to a heading id in the same document
    ids = set(re.findall(r'id="([^"]+)"', frag))
    broken = [a for a in re.findall(r'href="#([a-z0-9-]+)"', frag) if a not in ids]

    rest = frag.replace(h1, "", 1)
    if lead:
        rest = rest.replace(lead, "", 1)
    if masthead_extra:
        rest = rest.replace(masthead_extra, "", 1)
    if toc:
        rest = rest.replace(toc, "", 1)

    # everything after the last horizontal rule is the provenance footer, set apart
    cut = rest.rfind("<hr />")
    footer_html = ""
    if cut != -1:
        footer_html = f'\n<footer class="page-footer">{rest[cut + len("<hr />"):]}</footer>\n'
        rest = rest[:cut]

    title = args.title or re.sub(r"<[^>]+>", "", h1).strip()
    branch = args.branch or "draft issue"
    html = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>{CSS}</style></head>
<body>
<header class="top"><b>AI in Education Knowledge Base</b> &nbsp;&middot;&nbsp; {branch}</header>
<div class="draft">Draft for review. Nothing is committed to main and nothing is published. All links go to the live knowledge base.</div>
<main>
<div class="masthead">{h1}{lead}{masthead_extra}</div>
<div class="toc">{toc}</div>
{rest}
{footer_html}</main>
</body></html>"""

    args.outdir.mkdir(parents=True, exist_ok=True)
    out = args.outdir / "index.html"
    out.write_text(html, encoding="utf-8")

    print(f"wrote {out} ({len(html)} bytes)")
    print(f"toc entries: {len(re.findall(r'href=\"#', toc))}  broken anchors: {broken or 'none'}")
    print(f"em dashes in output: {html.count(chr(8212))}")


if __name__ == "__main__":
    main()
