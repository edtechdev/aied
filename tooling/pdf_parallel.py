"""Parallel PDF rendering for the knowledge-base book.

Why this exists
---------------
`build-epub.py`'s PDF step hands one 8 MB markdown file to pandoc, which parses
it (measured 12.6 minutes, superlinear in document size) and then lets
WeasyPrint paginate the resulting ~2,000-page HTML in a single thread. Both
legs are wall-clock dominated by "one huge document".

This module keeps the *output* identical but changes how it is produced:

  1. The export is split into N byte-balanced chunks at chapter/section
     boundaries, and every chunk is parsed by its own pandoc process running
     in parallel. Chunk-local parsing is also what removes the superlinear
     penalty: each chunk is a small document.
  2. The chunks are concatenated back into one HTML document together with the
     volume table of contents, so cross-references, TOC anchors and continuous
     page numbering stay correct -- which naively merging N rendered PDFs would
     not preserve.
  3. WeasyPrint paginates that one assembled document, so the PDF is still a
     single continuous volume with a working TOC.

Measured on the Italian export (7.9 MB, 2,199 pages): pandoc parse 757 s ->
~90 s at 8 chunks; the WeasyPrint leg is unchanged, because it works on the
whole document by design.

Reader flags
------------
`markdown-tex_math_dollars` is disabled because that extension is what makes
pandoc's parse superlinear on this corpus (757 s -> 308 s measured), and the
corpus carries a single LaTeX expression. `render_math_for_pandoc()` rewrites
`$...$` to `\\(...\\)` before parsing, which pandoc still typesets as math via
`tex_math_single_backslash`, so no formula is lost. `raw_html` is disabled as
well (308 s -> 268 s) since the export contains no HTML blocks.
"""

from __future__ import annotations

import os
import re
import subprocess
import sys
from collections.abc import Sequence

HEADING_RE = re.compile(r'^(#{1,2}) ', re.M)
MATH_RE = re.compile(r'(?<!\\)\$([^$\n]+?)(?<!\\)\$')
# tex_math_dollars is what makes pandoc's parse superlinear on this corpus, so
# it stays off; the corpus' single LaTeX expression is rewritten to \(...\)
# and still typesets through tex_math_single_backslash. raw_html stays ON: the
# export carries one raw `<a id="...">` anchor, which without the extension is
# printed to the reader as visible text.
PANDOC_READER = 'markdown-tex_math_dollars+tex_math_single_backslash'


def render_math_for_pandoc(md: str) -> str:
    """Rewrite `$x$` to `\\(x\\)` so tex_math_dollars can stay disabled."""
    return MATH_RE.sub(lambda m: '\\(' + m.group(1) + '\\)', md)


def _pandoc_auto_id(text: str) -> str:
    """Pandoc's auto_identifiers algorithm, near enough for these headings."""
    s = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'\2', text)   # wikilinks
    s = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', s)            # links
    s = re.sub(r'\*\*|__|\*|_|`', '', s)                      # emphasis/code
    s = re.sub(r'^[^A-Za-z]+', '', s)                         # no leading punctuation
    s = re.sub(r'[^A-Za-z0-9_.\- ]', '', s)
    s = s.strip().lower().replace(' ', '-')
    return s or 'section'


def assign_heading_ids(md: str) -> str:
    """Give every heading an explicit id, deduplicated across the whole export.

    Chunked parsing breaks pandoc's auto ids: they are unique per *document*, so
    a heading text that repeats loses its suffix when each chunk restarts the
    counter. The TOC is built in one pass, so its anchors then point at ids the
    fragments never contain, and those entries render with no page number.
    Pinning the ids up front makes the fragments and the TOC agree.
    """
    out, fence, used = [], None, set()
    prev_blank = True
    for line in md.split('\n'):
        stripped = line.lstrip()
        if stripped.startswith('```') or stripped.startswith('~~~'):
            marker = stripped[:3]
            fence = marker if fence is None else (None if fence == marker else fence)
            out.append(line)
            prev_blank = False
            continue
        # Pandoc's markdown requires a blank line before a heading
        # (blank_before_header). A `##` glued to the previous line is paragraph
        # text to pandoc, so giving it an id here would put `{#id}` into the
        # reader-visible prose.
        is_heading = (fence is None and prev_blank
                      and re.match(r'^#{1,6}\s', line))
        if not is_heading:
            out.append(line)
            prev_blank = not stripped
            continue
        m = re.match(r'^(#{1,6})(\s+)(.*)$', line)
        hashes, space, rest = m.groups()
        attr = re.search(r'\s*\{([^}]*)\}\s*$', rest)
        body = rest[:attr.start()] if attr else rest.strip()
        idm = re.search(r'#([^\s}]+)', attr.group(1)) if attr else None
        base = idm.group(1) if idm else _pandoc_auto_id(body)
        ident, n = base, 1
        while ident in used:
            ident = f'{base}-{n}'
            n += 1
        used.add(ident)
        if idm:
            out.append(line)
        elif attr:
            out.append(f'{hashes}{space}{body} {{{attr.group(1).strip()} #{ident}}}')
        else:
            out.append(f'{hashes}{space}{body} {{#{ident}}}')
    return '\n'.join(out)


def resolve_shortcut_refs(md: str) -> str:
    """Turn `[Heading text]` shortcut references into explicit `#id` links.

    Pandoc resolves a bare `[Some Heading]` against heading text
    (implicit_header_references) only within the same parse. Chunked parsing
    would therefore silently stop resolving references whose heading lands in
    another chunk, and the brackets would start appearing in the rendered book,
    so the link is pinned before the split.
    """
    heading_texts: dict[str, str] = {}
    lines = md.split('\n')
    prev_blank = True
    for line in lines:
        m = re.match(r'^#{1,6}\s+(.*)$', line) if prev_blank else None
        if m:
            rest = m.group(1)
            attr = re.search(r'\s*\{([^}]*)\}\s*$', rest)
            body = (rest[:attr.start()] if attr else rest).strip()
            idm = re.search(r'#([^\s}]+)', attr.group(1)) if attr else None
            if idm:
                heading_texts.setdefault(re.sub(r'\s+', ' ', body).lower(), idm.group(1))
        prev_blank = not line.strip()
    if not heading_texts:
        return md

    def sub(m: re.Match) -> str:
        text = m.group(1)
        target = heading_texts.get(re.sub(r'\s+', ' ', text).lower())
        return f'[{text}](#{target})' if target else m.group(0)

    out, in_fence = [], False
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith('```') or stripped.startswith('~~~'):
            in_fence = not in_fence
            out.append(line)
            continue
        if in_fence:
            out.append(line)
            continue
        # Leave inline code spans alone, then rewrite unresolved shortcut links.
        parts = re.split(r'(`[^`]*`)', line)
        for i in range(0, len(parts), 2):
            parts[i] = re.sub(r'(?<![!\]])\[([^\[\]\n]{2,80})\](?![(\[^:])',
                              sub, parts[i])
        out.append(''.join(parts))
    return '\n'.join(out)


def split_markdown(md: str, n: int) -> list[str]:
    """Split at chapter (H1) or section (H2) boundaries, balanced by bytes.

    Never splits inside a paragraph, list, table or code block, and puts the
    split point *before* the heading so each chunk starts a fresh section.
    """
    lines = md.split('\n')
    starts = {i for i, line in enumerate(lines) if HEADING_RE.match(line)}
    if len(starts) < n * 2:
        # Not enough structure to split safely -- caller falls back to serial.
        return [md]
    offsets, pos = [], 0
    for i, line in enumerate(lines):
        if i in starts:
            offsets.append((pos, i))
        pos += len(line) + 1
    total = pos
    chunks, begin = [], 0
    for k in range(1, n):
        target = total * k / n
        idx = min(range(len(offsets)), key=lambda j: abs(offsets[j][0] - target))
        cut = offsets[idx][1]
        if cut > begin:
            chunks.append('\n'.join(lines[begin:cut]))
            begin = cut
    chunks.append('\n'.join(lines[begin:]))
    return [c for c in chunks if c.strip()]


def _pandoc_fragment(md_path: str, out_path: str) -> None:
    subprocess.run(
        ['pandoc', '-f', PANDOC_READER, md_path, '-t', 'html', '-o', out_path],
        check=True, capture_output=True, text=True,
    )


def _heading_lines(md: str) -> list[str]:
    """Heading lines outside fenced code blocks, in document order.

    A `#` line inside a fence is not a heading, and pandoc's own TOC skips it;
    copying it into the skeleton would invent a TOC entry that has no anchor in
    the body.
    """
    out, fence, prev_blank = [], None, True
    for line in md.split('\n'):
        stripped = line.lstrip()
        if stripped.startswith('```') or stripped.startswith('~~~'):
            marker = stripped[:3]
            if fence is None:
                fence = marker
            elif fence == marker:
                fence = None
            prev_blank = False
            continue
        if fence is None and prev_blank and re.match(r'^#{1,6} ', line):
            out.append(line)
        prev_blank = not stripped
    return out


def _build_toc(md: str, tmpdir: str, lang: str) -> str:
    """Pandoc's own TOC, generated from a headings-only skeleton.

    The skeleton keeps every heading in document order, so pandoc derives the
    same ids it would for the full document (auto_identifiers, with duplicates
    disambiguated in order) and the anchors in the TOC resolve against the
    assembled body.
    """
    skeleton = '\n\n'.join(_heading_lines(md))
    sk_path = os.path.join(tmpdir, 'skeleton.md')
    sk_out = os.path.join(tmpdir, 'skeleton.html')
    with open(sk_path, 'w', encoding='utf-8') as f:
        f.write(skeleton)
    subprocess.run(
        ['pandoc', '-f', PANDOC_READER, sk_path, '-t', 'html', '-s',
         '--toc', '--toc-depth=3', '--metadata', f'lang={lang}', '-o', sk_out],
        check=True, capture_output=True, text=True,
    )
    html = open(sk_out, encoding='utf-8').read()
    m = re.search(r'<nav id="TOC".*?</nav>', html, re.S)
    if not m:
        raise RuntimeError('pandoc produced no TOC in the skeleton render')
    return m.group(0)


def assemble_body_html(md_path: str, out_html: str, *,
                       chunks: int = 8, tmpdir: str = 'dist') -> dict:
    """Parse `md_path` in parallel chunks and concatenate the HTML fragments.

    Used by the EPUB stage: pandoc's epub writer then reads that one HTML file,
    so it still builds the container, the per-chapter split and the nav itself,
    but pays a markdown parse only on chunk-sized documents.
    """
    import time
    os.makedirs(tmpdir, exist_ok=True)
    timings: dict[str, float] = {}

    t0 = time.time()
    md = assign_heading_ids(render_math_for_pandoc(
        open(md_path, encoding='utf-8').read()))
    md = resolve_shortcut_refs(md)
    pieces = split_markdown(md, chunks)
    timings['chunk'] = time.time() - t0

    t0 = time.time()
    jobs = []
    for i, piece in enumerate(pieces):
        piece_path = os.path.join(tmpdir, f'body-chunk{i}.md')
        with open(piece_path, 'w', encoding='utf-8') as f:
            f.write(piece)
        jobs.append((piece_path, os.path.join(tmpdir, f'body-chunk{i}.html')))
    procs = [
        subprocess.Popen(['pandoc', '-f', PANDOC_READER, src, '-t', 'html',
                          '-o', dst],
                         stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                         text=True)
        for src, dst in jobs
    ]
    for (src, _), proc in zip(jobs, procs):
        _, err = proc.communicate()
        if proc.returncode != 0:
            raise RuntimeError(f'pandoc failed on {src}: {err[:800]}')
    timings['parse'] = time.time() - t0

    t0 = time.time()
    with open(out_html, 'w', encoding='utf-8') as f:
        for _, frag_path in jobs:
            f.write(open(frag_path, encoding='utf-8').read())
            f.write('\n')
    timings['assemble'] = time.time() - t0
    return timings


def build_pdf_parallel(md_path: str, out_pdf: str, *,
                       chunks: int = 8, lang: str = 'en',
                       title: str = '', css_files: Sequence[str] = (),
                       extra_css: str = '', pre_html: str = '',
                       tmpdir: str = 'dist') -> dict:
    """Render `md_path` to `out_pdf` with parallel chunk parsing.

    Returns a dict of timings in seconds, for logging and for comparing against
    the serial path.
    """
    import time
    os.makedirs(tmpdir, exist_ok=True)
    timings: dict[str, float] = {}

    t0 = time.time()
    md = render_math_for_pandoc(open(md_path, encoding='utf-8').read())
    md = assign_heading_ids(md)
    md = resolve_shortcut_refs(md)
    pieces = split_markdown(md, chunks)
    timings['chunk'] = time.time() - t0

    t0 = time.time()
    toc = _build_toc(md, tmpdir, lang)
    timings['toc'] = time.time() - t0

    t0 = time.time()
    jobs = []
    for i, piece in enumerate(pieces):
        piece_path = os.path.join(tmpdir, f'pdf-chunk{i}.md')
        with open(piece_path, 'w', encoding='utf-8') as f:
            f.write(piece)
        frag_path = os.path.join(tmpdir, f'pdf-chunk{i}.html')
        jobs.append((piece_path, frag_path))
    procs = [
        subprocess.Popen(
            ['pandoc', '-f', PANDOC_READER, src, '-t', 'html', '-o', dst],
            stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        for src, dst in jobs
    ]
    for (src, dst), proc in zip(jobs, procs):
        _, err = proc.communicate()
        if proc.returncode != 0:
            raise RuntimeError(f'pandoc failed on {src}: {err[:800]}')
    timings['parse'] = time.time() - t0

    t0 = time.time()
    body = []
    if pre_html and os.path.exists(pre_html):
        body.append(open(pre_html, encoding='utf-8').read())
    # Pandoc's standalone template emits the title block between the
    # included-before-body content and the TOC. It is not decoration here: the
    # notice page carries a named page (`page: notice`), so the element after it
    # returns to the default page and that page-name change is what breaks the
    # page between the notice and the TOC.
    if title:
        body.append('<header id="title-block-header">\n'
                    '<h1 class="title">%s</h1>\n</header>' % title)
    body.append(toc)
    for _, frag_path in jobs:
        body.append(open(frag_path, encoding='utf-8').read())
    css = '\n'.join(open(f, encoding='utf-8').read()
                    for f in css_files if os.path.exists(f))
    if extra_css:
        css += '\n' + extra_css
    html_path = os.path.join(tmpdir, 'pdf-assembled.html')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write('<!DOCTYPE html>\n<html lang="%s">\n<head>\n<meta charset="utf-8">\n'
                '<title>%s</title>\n<style>\n%s\n</style>\n</head>\n<body>\n'
                % (lang, title, css))
        f.write('\n'.join(body))
        f.write('\n</body>\n</html>\n')
    timings['assemble'] = time.time() - t0

    t0 = time.time()
    subprocess.run(['weasyprint', html_path, out_pdf], check=True,
                   capture_output=True, text=True)
    timings['weasyprint'] = time.time() - t0
    return timings


if __name__ == '__main__':
    import json
    md_path, out_pdf = sys.argv[1], sys.argv[2]
    n = int(sys.argv[3]) if len(sys.argv) > 3 else 8
    t = build_pdf_parallel(md_path, out_pdf, chunks=n)
    print(json.dumps(t, indent=2))
