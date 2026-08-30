#!/usr/bin/env python3
"""Build aied.epub of the AI Ed Wiki: home intro + use-with-AI + all concepts
(organized into chapters by the umbrella groups) + FAQs.

Metadata: title "AI in Education Knowledge Base", edited by Doug Holton,
CC0 public-domain dedication, and the generation date. Wiki [[wikilinks]]
that resolve to concepts/FAQs present in the EPUB become internal anchors so
navigation works inside the reader.
"""
import os, re, glob, subprocess, datetime

WIKI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONCEPTS_DIR = os.path.join(WIKI, 'concepts')
FAQS_DIR = os.path.join(WIKI, 'faqs')
INDEX_TS = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
OUT = os.path.join(WIKI, 'public', 'aied.epub')

def smart_title(label):
    KNOWN = {'ai':'AI','llm':'LLM','rag':'RAG','nlp':'NLP','k-12':'K-12','irt':'IRT','its':'ITS',
             'rct':'RCT','stem':'STEM','cs':'CS','ide':'IDE','api':'API','srl':'SRL','lms':'LMS',
             'mooc':'MOOC','vr':'VR','ar':'AR','ui':'UI','ux':'UX','sdk':'SDK','tpack':'TPACK',
             'asag':'ASAG','kt':'KT','rl':'RL','ml':'ML','xai':'XAI','genai':'GenAI','aied':'AIED',
             'pjbl':'PjBL','hci':'HCI','zpd':'ZPD'}
    return re.sub(r'\b\w+\b', lambda m: KNOWN.get(m.group(0).lower(), m.group(0)[0].upper()+m.group(0)[1:]), label)

# --- load slug sets + redirects ---
concept_slugs = {c[:-3] for c in os.listdir(CONCEPTS_DIR) if c.endswith('.md')}
faq_slugs = {f[:-3] for f in os.listdir(FAQS_DIR) if f.endswith('.md')}
article_slugs = {a[:-3] for a in os.listdir(os.path.join(WIKI,'articles')) if a.endswith('.md')}

# FAQ slug -> title map (for the Connected FAQs sections)
faq_titles = {}
for _f in os.listdir(FAQS_DIR):
    if not _f.endswith('.md'):
        continue
    _s = open(os.path.join(FAQS_DIR, _f), encoding='utf-8').read()
    _m = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', _s, re.M)
    faq_titles[_f[:-3]] = _m.group(1).strip() if _m else _f[:-3]

# redirects (mirror src/data/conceptRedirects.ts)
REDIRECTS = {
    'gamification':'game-based-learning','over-reliance':'cognitive-offloading','feedback-loop':'feedback',
    'ai-tutoring':'intelligent-tutoring','confidence-aware-ai-assessment':'automated-assessment',
    'automated-grading':'automated-assessment','cognitive-load-theory':'cognitive-offloading',
    'dual-process-theory':'critical-thinking','engagement-metrics':'student-engagement',
    'programming-education':'cs-education','block-programming':'cs-education',
    'zone-of-proximal-development':'sociocultural-learning','social-robots':'educational-robotics',
    'human-robot-interaction':'educational-robotics','mooc':'online-teaching-and-learning',
    'blended-learning':'online-teaching-and-learning','plagiarism-detection':'ai-detection',
    'student-misconceptions-ai':'misconceptions','accessible-learning':'inclusive-learning',
}

def resolve(slug):
    return REDIRECTS.get(slug, slug)

def strip_frontmatter(txt):
    if txt.startswith('---'):
        parts = txt.split('\n---\n', 1)
        if len(parts) > 1:
            return parts[1]
    return txt

def page_title(txt, slug):
    m = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', txt, re.M)
    return m.group(1).strip() if m else smart_title(slug.replace('-',' '))

def shift_headings(txt, add):
    out = []
    for line in txt.split('\n'):
        m = re.match(r'^(#{1,6})\s+(.*)$', line)
        if m:
            lvl = min(int(len(m.group(1))) + add, 6)
            out.append('#'*lvl + ' ' + m.group(2))
        else:
            out.append(line)
    return '\n'.join(out)

def convert_links(txt):
    """Turn ^[[target|label]] / [[target]] / [[target]] into internal epub
    anchors when the target is a concept or FAQ present in this EPUB; into a
    link to the live site for article pages (not included in this EPUB);
    otherwise plain text. The leading '^' on a wikilink is a footnote-style
    citation marker in the source — we strip it so pandoc renders a normal
    hyperlink rather than a footnote."""
    def repl(m):
        target, label = m.group(1), m.group(2)
        raw = target.replace('.md','').strip()
        canon = resolve(raw)
        disp = label.strip() if label else smart_title(canon.replace('-',' '))
        if canon in concept_slugs or canon in faq_slugs:
            return f'[{disp}](#{canon})'
        if canon in article_slugs:
            # Article pages aren't in this EPUB — link out to the live wiki so
            # the reader can open the article page in a browser.
            url = f'https://edtechdev.github.io/aied/articles/{canon}/'
            return f'[{disp}]({url})'
        return disp  # unknown -> plain text
    return re.sub(r'\^?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]', repl, txt)

def process_md(path, slug, hlevel):
    raw = open(path, encoding='utf-8').read()
    title = page_title(raw, slug)
    body = strip_frontmatter(raw)
    body = convert_links(body)

    # Append a Connected FAQs section (from frontmatter connected_faqs) so the
    # EPUB concept/article pages link out to the FAQ chapter, like the site does.
    fm = raw.split('\n---\n', 1)[0]
    cfm = re.search(r'^connected_faqs:\s*\[(.*?)\]', fm, re.M)
    connected = []
    if cfm:
        for t in cfm.group(1).split(','):
            t = t.strip()
            if t and t in faq_slugs:
                connected.append(t)
    if connected:
        lines = ['\n## Connected FAQs\n']
        for t in connected:
            lines.append(f'- [{faq_titles.get(t, smart_title(t.replace("-", " ")))}](#{t})')
        body = body.rstrip('\n') + '\n' + '\n'.join(lines) + '\n'

    # Some concept pages contain stray empty heading lines (just '#' with no
    # text). pandoc turns these into phantom 'section' headings that break the
    # TOC nesting — drop them for the EPUB.
    body = '\n'.join(l for l in body.split('\n') if not re.match(r'^#{1,6}\s*$', l))
    # Many FAQ (and some concept) bodies open with an H1 that repeats the page
    # title. Drop it — we emit the title heading ourselves — otherwise the
    # shifted duplicate heading splits the page into two EPUB chapters and
    # duplicates it in the TOC. (Bodies may start with a blank line before the H1.)
    lines = body.split('\n')
    for idx, ln in enumerate(lines):
        m = re.match(r'^#\s+(.*)$', ln)
        if m is not None:
            h1 = m.group(1).strip()
            if h1.lower() == title.lower() or title.lower() in h1.lower():
                del lines[idx]
            break
        if ln.strip():
            break  # first non-blank line is not an H1
    body = shift_headings('\n'.join(lines), hlevel - 1)
    return title, body

# --- parse conceptIndex.ts for umbrella groups (order preserved) ---
ts = open(INDEX_TS, encoding='utf-8').read()
# Split into section blocks: heading + groups
# Each section: heading: 'X', ... groups: [ {label:'Y', items:[...]}, ... ]
sections = []
# find each `{` block starting with heading:
for m in re.finditer(r"heading:\s*'(.*?)'.*?groups:\s*\[(.*?)\]\s*,\s*\}", ts, re.S):
    heading = m.group(1)
    groups_block = m.group(2)
    groups = []
    for g in re.finditer(r"\{\s*label:\s*'(.*?)'.*?items:\s*\[(.*?)\]\s*\}", groups_block, re.S):
        label = g.group(1)
        items = re.findall(r"'([^']+)'", g.group(2))
        groups.append((label, items))
    sections.append((heading, groups))

# --- assemble markdown ---
parts = []

# Home intro (the front matter / title + copyright info now live in the
# dedicated Copyright page handled in build_epub() post-processing)
today = datetime.date.today().strftime('%B %d, %Y')
# --- assemble markdown ---
parts = []

import html as _html

def astro_body_markdown(astro_path, chapter_h1):
    """Extract the body content of a .astro page (between <BaseLayout> and
    </BaseLayout>) and convert its simple HTML to markdown, so the EPUB always
    reflects the current site pages instead of a hardcoded copy.
    Concept/FAQ/wiki links become internal EPUB anchors; external links stay."""
    src = open(astro_path, encoding='utf-8').read()
    m = re.search(r'<BaseLayout\b[^>]*>(.*?)</BaseLayout>', src, re.S)
    body = m.group(1) if m else src

    n_articles = len([f for f in os.listdir(os.path.join(WIKI,'articles')) if f.endswith('.md')])
    n_concepts = len(concept_slugs)
    body = body.replace('{articles.length}', str(n_articles))
    body = body.replace('{concepts.length}', str(n_concepts))

    # Drop a leading H1 that duplicates the chapter heading or the site title
    # (e.g. index.astro opens with the page-title H1).
    def _drop_first_h1(m):
        t = _html.unescape(m.group(1)).strip()
        if t == chapter_h1 or t == 'AI in Education Knowledge Base':
            return ''
        return m.group(0)
    body = re.sub(r'<h1\b[^>]*>(.*?)</h1>', _drop_first_h1, body, count=1, flags=re.S)

    body = re.sub(r'<style.*?</style>', '', body, flags=re.S)
    body = re.sub(r'<script.*?</script>', '', body, flags=re.S)
    body = re.sub(r'<[A-Z][A-Za-z]*\s*/>', '', body)  # self-closing components
    body = re.sub(r'<button\b.*?</button>', '', body, flags=re.S)

    def link(m):
        href, label = m.group(1), m.group(2)
        label = _html.unescape(label).strip()
        if href.startswith('/aied/concepts/'):
            slug = href.rstrip('/').split('/')[-1]
            return f'[{label}](#{slug})'
        if href in ('/aied/faq', '/aied/faq/'):
            return f'[{label}](#frequently-asked-questions)'
        if href in ('/aied/ai', '/aied/ai/'):
            return f'[{label}](#use-this-knowledge-base-with-your-own-ai-assistant)'
        if href.startswith('http'):
            return f'[{label}]({href})'
        return f'[{label}](https://edtechdev.github.io{href})'
    body = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>', link, body, flags=re.S)

    def heading(m, level):
        return '\n' + '#'*level + ' ' + _html.unescape(m.group(1)).strip() + '\n'
    body = re.sub(r'<h1\b[^>]*>(.*?)</h1>', lambda m: heading(m,1), body, flags=re.S)
    body = re.sub(r'<h2\b[^>]*>(.*?)</h2>', lambda m: heading(m,2), body, flags=re.S)

    def code(m):
        return '\n```\n' + _html.unescape(m.group(1)).strip() + '\n```\n'
    body = re.sub(r'<pre\b[^>]*>.*?<code>(.*?)</code>.*?</pre>', code, body, flags=re.S)

    def ul(m):
        items = re.findall(r'<li[^>]*>(.*?)</li>', m.group(1), flags=re.S)
        lines = ['- ' + _html.unescape(re.sub(r'<[^>]+>', '', it)).strip() for it in items]
        return '\n' + '\n'.join(lines) + '\n'
    body = re.sub(r'<ul\b[^>]*>(.*?)</ul>', ul, body, flags=re.S)

    body = re.sub(r'<strong>(.*?)</strong>', r'**\1**', body, flags=re.S)
    body = re.sub(r'<em>(.*?)</em>', r'*\1*', body, flags=re.S)
    body = re.sub(r'<br\s*/?>', '\n', body)

    def para(m):
        t = _html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip()
        return t + '\n\n' if t else ''
    body = re.sub(r'<p\b[^>]*>(.*?)</p>', para, body, flags=re.S)
    body = re.sub(r'<div\b[^>]*>(.*?)</div>', para, body, flags=re.S)

    body = re.sub(r'<[^>]+>', '', body)
    body = _html.unescape(body)
    body = re.sub(r'\n{3,}', '\n\n', body)
    body = re.sub(r'[ \t]+\n', '\n', body)
    return f"# {chapter_h1}\n\n{body.strip()}\n"

# Front-matter chapters are built from the live site pages so the EPUB stays in
# sync with the site (no hardcoded copies to drift).
parts.append(astro_body_markdown(os.path.join(WIKI, 'src', 'pages', 'index.astro'), 'Introduction'))
parts.append(astro_body_markdown(os.path.join(WIKI, 'src', 'pages', 'ai.astro'),
                                 'Use This Knowledge Base with Your Own AI Assistant'))

# Concepts organized by umbrella groups
for heading, groups in sections:
    parts.append(f"\n# {heading}\n")
    for label, items in groups:
        # H2 = sub-group label; H3 = each concept (kept under its group)
        parts.append(f"\n## {label}\n")
        for slug in items:
            path = os.path.join(CONCEPTS_DIR, slug + '.md')
            if not os.path.exists(path):
                continue
            title, body = process_md(path, slug, 3)  # concept at H3
            parts.append(f"\n### {title} {{#{slug}}}\n\n{body}")

# FAQs
parts.append("""# Frequently Asked Questions

This section answers common questions about **AI in education** — what the research says about how AI affects teaching and learning, and how educators, instructors, and instructional designers can put that evidence into practice. Each answer distills findings from the research summarized across this knowledge base, connecting the question to the relevant concepts and articles for deeper reading.

""")
def _faq_created(path):
    s = open(path, encoding='utf-8').read()
    m = re.search(r'^created:\s*["\']?([^"\'\n]+)', s, re.M)
    return m.group(1).strip() if m else os.path.basename(path)
faq_paths = sorted(glob.glob(os.path.join(FAQS_DIR, '*.md')), key=_faq_created)
for path in faq_paths:
    slug = os.path.basename(path)[:-3]
    title, body = process_md(path, slug, 3)  # FAQ at H3
    parts.append(f"\n### {title} {{#{slug}}}\n\n{body}")

combined = '\n\n'.join(parts)
md_path = os.path.join(WIKI, 'dist', 'aied-export.md')
os.makedirs(os.path.dirname(md_path), exist_ok=True)
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(combined)
print(f"Wrote {md_path}: {len(combined.splitlines())} lines")


def build_epub():
    """Run pandoc to produce aied.epub, then post-process to left-align the TOC."""
    today = datetime.date.today()
    date_str = today.strftime('%B %d, %Y')
    cmd = [
        'pandoc', md_path, '-o', OUT,
        '--metadata', 'title=AI in Education Knowledge Base',
        '--metadata', 'author=Edited by Doug Holton',
        '--metadata', 'rights=CC0 1.0 Universal Public Domain Dedication',
        '--metadata', 'lang=en',
        '--metadata', f'date={date_str}',
        '--split-level=3',
        '--epub-cover-image=' + os.path.join(WIKI, 'public', 'epub-cover.png'),
        '--toc', '--toc-depth=3',
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print('pandoc error:', r.stderr)
        return False

    # Post-process: hard-code hierarchical TOC numbering, build a Copyright
    # page (with CC0 image), rename the TOC title, and remove Back-to-Contents.
    import zipfile, shutil, re as _re, base64

    css_rule = """
/* ===== EPUB table of contents styling ===== */

/* Left-align the TOC (some readers center it by default). */
nav#toc { text-align: left; }
nav#toc * { text-align: left !important; }
nav#toc ol, nav#toc ul { list-style: none; margin: 0; }
nav#toc li { margin: 0.25em 0; display: block; }
nav#toc a { display: inline-block; }

/* Top-level (chapter) sections: larger and bold. */
nav#toc > ol > li > a {
  font-weight: bold;
  font-size: 1.12em;
  margin-top: 0.4em;
}
/* Second-level (group) labels: medium bold. */
nav#toc > ol > li > ol > li > a { font-weight: 600; }
"""

    def number_toc(nav_html):
        """Inject hard-coded hierarchical numbers (1 / 1.1 / 1.2.1) into every
        TOC entry's first <a>, based on nested <ol>/<li> structure."""
        token_re = _re.compile(r'(<ol[^>]*>|</ol>|<li(?:\s[^>]*)?>|</li>|<a(?:\s[^>]*)?>)')
        depth = 0
        counts = []
        pending_inject = None
        out = []
        last_end = 0
        for m in token_re.finditer(nav_html):
            out.append(nav_html[last_end:m.start()])
            tok = m.group(0)
            if tok.startswith('<ol'):
                depth += 1
                counts.append(0)
            elif tok == '</ol>':
                depth -= 1
                counts.pop()
            elif tok.startswith('<li'):
                counts[depth - 1] += 1
                pending_inject = '.'.join(str(c) for c in counts) + '. '
            elif tok == '</li>':
                pending_inject = None
            elif tok.startswith('<a'):
                gt = tok.find('>')
                out.append(tok[:gt + 1])
                if pending_inject is not None:
                    out.append(pending_inject)
                    pending_inject = None
                last_end = m.end()
                continue
            out.append(tok)
            last_end = m.end()
        out.append(nav_html[last_end:])
        return ''.join(out)

    tmp = OUT + '.tmp'
    with zipfile.ZipFile(OUT, 'r') as zin, zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith('.css'):
                data += css_rule.encode('utf-8')
            elif item.filename == 'EPUB/nav.xhtml':
                text = data.decode('utf-8', errors='ignore')
                # Rename the TOC title to "Table of Contents".
                text = _re.sub(r'<h1 id="toc-title">[^<]*</h1>',
                               '<h1 id="toc-title">Table of Contents</h1>', text)
                # The second page is a Notice page: relabel it in the landmarks
                # nav so the reader's outline/progress list shows "Notice"
                # instead of the book title.
                text = _re.sub(r'epub:type="titlepage">[^<]*</a>',
                               'epub:type="titlepage">Notice</a>', text)
                # Hard-code the hierarchical numbers into the TOC entries.
                text = number_toc(text)
                data = text.encode('utf-8')
            elif item.filename == 'EPUB/text/title_page.xhtml':
                # Turn the pandoc title page into a Notice page with CC0 image,
                # AI-generated disclaimer, and how-to-report-issues info.
                cc0 = open(os.path.join(WIKI, 'public', 'cc0.png'), 'rb').read()
                cc0_b64 = base64.b64encode(cc0).decode('ascii')
                copyright_html = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en" xml:lang="en">
<head>
  <meta charset="utf-8" />
  <title>Notice</title>
  <style>
    body {{ font-family: Georgia, serif; margin: 3em 2em; }}
    h1 {{ font-size: 1.6em; }}
    .cc0 {{ margin-top: 1.5em; }}
    p {{ margin: 0.8em 0; }}
  </style>
  <link rel="stylesheet" type="text/css" href="../styles/stylesheet1.css" />
</head>
<body epub:type="copyright-page">
  <section epub:type="copyright-page">
    <h1>Notice</h1>
    <p><strong>AI in Education Knowledge Base</strong></p>
    <p>Edited by Doug Holton.</p>
    <p>This ebook was generated by an <strong>AI agent</strong> and is dedicated to the
    public domain under a <strong>Creative Commons CC0 1.0 Universal (CC0)</strong>
    license &mdash; no rights reserved. You may copy, modify, distribute, and use the
    content for any purpose without asking permission.</p>
    <p class="cc0"><img src="data:image/png;base64,{cc0_b64}" alt="CC0 Public Domain" width="88" height="31" /></p>
    <p><strong>&#9888;&#65039; Disclaimer:</strong> AI-generated output may contain
    inaccuracies or errors.</p>
    <p>Found an issue with the content? Please
    <a href="https://github.com/edtechdev/aied/issues">report it on GitHub</a>, or
    contact the site developer,
    <a href="https://mastodon.social/@dougholton">Doug Holton</a>.</p>
    <p><em>Generated {date_str} from the AI in Education Knowledge Base
    (https://edtechdev.github.io/aied/).</em></p>
  </section>
</body>
</html>"""
                data = copyright_html.encode('utf-8')
            # (no more Back-to-Contents injection into chapter files)
            zout.writestr(item, data)
    shutil.move(tmp, OUT)
    print(f"Built {OUT} ({os.path.getsize(OUT)} bytes)")
    return True


PDF_OUT = os.path.join(WIKI, 'public', 'aied.pdf')
PDF_CSS = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pdf-style.css')


def build_pdf():
    """Generate aied.pdf from the same markdown export + cover as the EPUB,
    using weasyprint. The pandoc --toc creates a clickable table of contents
    (internal jump links) and internal/external links are preserved."""
    import pathlib
    today = datetime.date.today()
    date_str = today.strftime('%B %d, %Y')

    # A full-page cover as an HTML fragment injected before the body.
    cover_src = os.path.join(WIKI, 'public', 'epub-cover.png')
    cover_file = pathlib.Path(cover_src).as_uri()
    cover_html = os.path.join(WIKI, 'dist', 'pdf-cover.html')
    os.makedirs(os.path.dirname(cover_html), exist_ok=True)
    with open(cover_html, 'w', encoding='utf-8') as f:
        f.write('<div class="cover-page"><img src="%s" alt="AI in Education Knowledge Base" /></div>' % cover_file)

    cmd = [
        'pandoc', md_path, '-o', PDF_OUT,
        '--pdf-engine=weasyprint',
        '--metadata', 'title=AI in Education Knowledge Base',
        '--metadata', 'author=Edited by Doug Holton',
        '--metadata', 'lang=en',
        '--metadata', f'date={date_str}',
        '--toc', '--toc-depth=3',
        '--include-before-body=' + cover_html,
        '--css=' + PDF_CSS,
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print('pandoc/pdf error:', r.stderr[-2000:])
        return False
    if os.path.exists(PDF_OUT):
        print(f"Built {PDF_OUT} ({os.path.getsize(PDF_OUT)} bytes)")
        return True
    print('pdf output missing')
    return False


if __name__ == '__main__':
    build_epub()
    build_pdf()


