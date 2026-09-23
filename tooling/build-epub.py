#!/usr/bin/env python3
"""Build aied.epub of the AI Ed Wiki: home intro + use-with-AI + all concepts
(organized into chapters by the umbrella groups) + FAQs.

Metadata: title from site.config.json, the editor name from site.config.json
(never hardcoded here), CC0 public-domain dedication, and the generation date.
Wiki [[wikilinks]] that resolve to concepts/FAQs present in the EPUB become
internal anchors so navigation works inside the reader.
"""
import os, re, glob, subprocess, datetime, json, sys

WIKI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

sys.path.insert(0, os.path.join(WIKI, 'tooling', 'scripts'))
import content_paths  # noqa: E402
from wikilink_text import smart_title, WIKILINK_RE  # noqa: E402

# Single source of truth for site-wide metadata — shared with the Astro site
# (src/config/siteConfig.ts) and the other tooling scripts.
with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as _cfg:
    SITE = json.load(_cfg)
NAME = SITE['name']
BASE = SITE['basePath']
SITE_URL = SITE['url']
REPO_URL = SITE['repoUrl']
ISSUES_URL = SITE['issuesUrl']
EDITOR_NAME = SITE['editor']['name']
EDITOR_URL = SITE['editor']['contactUrl']
LICENSE = SITE['license']

# Contributors and the AI-use policy also come from site.config.json, so the notice
# page cannot drift from the evidence the pages carry. AI systems are never
# contributors: see AI-USE.md for why (COPE/ICMJE authorship position).
CONTRIBUTORS = SITE.get('contributors', [])
HUMAN_CONTRIBUTORS = [c for c in CONTRIBUTORS
                      if c.get('kind') == 'human' and c.get('name')]
CONTRIBUTOR_NAME_LIST = ' and '.join(c['name'] for c in HUMAN_CONTRIBUTORS) or EDITOR_NAME
AI_DISCLOSURE = SITE.get('aiDisclosure', {})
AI_MODEL_IDS = [m['id'] for m in AI_DISCLOSURE.get('models', []) if m.get('id')]
AI_MODELS_TEXT = ', '.join(AI_MODEL_IDS) if AI_MODEL_IDS else 'a large language model'
AI_MODEL_HISTORY = '; '.join(f"{m['id']} from {m['since']}"
                             for m in AI_DISCLOSURE.get('models', [])
                             if m.get('id') and m.get('since'))
AI_POLICY = AI_DISCLOSURE.get('policy', 'AI-USE.md')
AI_HOW_MADE = (
    f'<p><strong>How this text was made:</strong> the pages are drafted by large '
    f'language models ({AI_MODELS_TEXT}) from the source documents, then reviewed, '
    f'corrected and published by the editor, who is accountable for what appears here. '
    f'Concept and FAQ pages are syntheses written across the article summaries '
    f'published on the site. No AI system is listed as an author or contributor. '
    f'Citations are checked against the publisher record, figures in the text are '
    f'checked against the extracted source files, and the models behind the corpus are '
    f'on record with the date each took over ({AI_MODEL_HISTORY}). The full disclosure, '
    f'including what is not verified, is in '
    f'<code>{AI_POLICY}</code> in the source repository.</p>'
)
ORIGIN = SITE_URL[: -len(BASE)] if SITE_URL.endswith(BASE) else SITE_URL

CONCEPTS_DIR = str(content_paths.collection('concepts'))
FAQS_DIR = str(content_paths.collection('faqs'))
RESOURCES_DIR = str(content_paths.collection('resources'))
INDEX_TS = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
OUT = os.path.join(WIKI, 'public', 'aied.epub')

# --- load slug sets + redirects ---
concept_slugs = {c[:-3] for c in os.listdir(CONCEPTS_DIR) if c.endswith('.md')}
faq_slugs = {f[:-3] for f in os.listdir(FAQS_DIR) if f.endswith('.md')}
article_slugs = {a[:-3] for a in os.listdir(content_paths.collection('articles')) if a.endswith('.md')}

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
            url = f'{SITE_URL}/articles/{canon}/'
            return f'[{disp}]({url})'
        return disp  # unknown -> plain text
    # Shared pattern (a label may contain brackets of its own); the optional
    # leading ^ is a footnote-style citation marker and must be swallowed.
    epub_wikilink = re.compile(r'\^?' + WIKILINK_RE.pattern)
    return epub_wikilink.sub(repl, txt)

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

def _strip_element(html_text, class_fragment):
    """Remove every element whose class contains class_fragment, with its content.

    Non-greedy regexes stop at the first closing tag, which leaves orphaned markup
    behind for nested widgets (the concept map nests several levels). Count nesting
    of the same tag name instead."""
    out, pos = [], 0
    open_re = re.compile(r'<([a-z][a-z0-9]*)\b[^>]*class="[^"]*' + re.escape(class_fragment) + r'[^"]*"[^>]*>',
                         re.I)
    while True:
        m = open_re.search(html_text, pos)
        if not m:
            out.append(html_text[pos:])
            break
        tag = m.group(1)
        out.append(html_text[pos:m.start()])
        depth, i = 1, m.end()
        step = re.compile(rf'<(/?){tag}\b[^>]*?(/?)>', re.I)
        while depth and i < len(html_text):
            n = step.search(html_text, i)
            if not n:
                i = len(html_text)
                break
            if n.group(1) == '/':
                depth -= 1
            elif not n.group(2):
                depth += 1
            i = n.end()
        pos = i
    return ''.join(out)


def _built_page_html(astro_path):
    """Map a page under src/pages to its built file under dist/ (or None).

    Used when a page's chapter copy cannot be read from the .astro source, e.g.
    index.astro now renders <HomePage locale="en" /> and the text lives in the
    i18n modules. The built page is the same copy with those expressions already
    resolved."""
    rel = os.path.relpath(astro_path, os.path.join(WIKI, 'src', 'pages'))
    stem = rel[:-len('.astro')] if rel.endswith('.astro') else rel
    candidates = [
        os.path.join(WIKI, 'dist', stem + '.html'),
        os.path.join(WIKI, 'dist', stem, 'index.html'),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def astro_body_markdown(astro_path, chapter_h1):
    """Extract the body content of a .astro page (between <BaseLayout> and
    </BaseLayout>) and convert its simple HTML to markdown, so the EPUB always
    reflects the current site pages instead of a hardcoded copy.
    Concept/FAQ/wiki links become internal EPUB anchors; external links stay."""
    src = open(astro_path, encoding='utf-8').read()
    m = re.search(r'<BaseLayout\b[^>]*>(.*?)</BaseLayout>', src, re.S)
    body = m.group(1) if m else None
    if body is None:
        # The page may delegate its markup to a component (index.astro renders
        # <HomePage locale="en" />), in which case there is no literal body to
        # read here and the chapter copy comes from the built page instead,
        # where the i18n expressions are already resolved.
        built = _built_page_html(astro_path)
        if built:
            html = open(built, encoding='utf-8').read()
            bm = re.search(r'<!--\s*export:page:start\s*-->(.*?)<!--\s*export:page:end\s*-->',
                           html, re.S)
            body = bm.group(1) if bm else None
            if body:
                # Site widgets that belong to the web page, not to the book.
                body = _strip_element(body, 'concept-map')
    if body is None:
        # Never fall back to the raw .astro source: it exports TS and a
        # frontmatter block, which pandoc then fails to parse as YAML.
        raise SystemExit(
            f'build-epub: no chapter body for {os.path.relpath(astro_path, WIKI)}. '
            'Expected <BaseLayout>...</BaseLayout> in the page or in the component it '
            'renders, or a built page under dist/. Run the site build first. '
            'Refusing to export the raw source.'
        )

    n_articles = len([f for f in os.listdir(content_paths.collection('articles')) if f.endswith('.md')])
    n_concepts = len(concept_slugs)
    body = body.replace('{articles.length}', str(n_articles))
    body = body.replace('{concepts.length}', str(n_concepts))
    body = body.replace('{siteConfig.name}', NAME)
    # Guard against other Astro template expressions leaking into the export.
    body = body.replace('{siteConfig.shortName}', SITE.get('shortName', NAME))
    body = body.replace('{siteConfig.', '{')  # safest catch-all for any remaining siteConfig access

    # Drop a leading H1 that duplicates the chapter heading or the site title
    # (e.g. index.astro opens with the page-title H1).
    def _drop_first_h1(m):
        t = _html.unescape(m.group(1)).strip()
        if t == chapter_h1 or t == NAME:
            return ''
        return m.group(0)
    body = re.sub(r'<h1\b[^>]*>(.*?)</h1>', _drop_first_h1, body, count=1, flags=re.S)

    body = re.sub(r'<style.*?</style>', '', body, flags=re.S)
    body = re.sub(r'<script.*?</script>', '', body, flags=re.S)
    body = re.sub(r'<[A-Z][A-Za-z]*\s*/>', '', body)  # self-closing components
    body = re.sub(r'<button\b.*?</button>', '', body, flags=re.S)

    # Strip the leading indentation of the .astro source. Astro pages are
    # written indented, and in markdown a 4-space-indented line is a CODE BLOCK,
    # so any line that survives to the end of this conversion (list items whose
    # parent element has no handler, a <summary>, continuation lines) would come
    # out as preformatted monospace text. Lines inside <pre> keep their own
    # indentation.
    def _deindent(text):
        parts = re.split(r'(<pre\b.*?</pre>)', text, flags=re.S)
        return ''.join(part if i % 2 else re.sub(r'(?m)^[ \t]+', '', part)
                       for i, part in enumerate(parts))
    body = _deindent(body)

    # <details>/<summary> (collapsible sections): keep the summary text as a
    # bold lead-in line, drop the disclosure wrapper.
    def summary(m):
        t = _html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip()
        return f'\n**{t}**\n\n' if t else '\n'
    body = re.sub(r'<summary\b[^>]*>(.*?)</summary>', summary, body, flags=re.S)
    body = re.sub(r'</?details\b[^>]*>', '\n', body)

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
        return f'[{label}]({ORIGIN}{href})'
    body = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>', link, body, flags=re.S)

    def heading(m, level):
        return '\n' + '#'*level + ' ' + _html.unescape(m.group(1)).strip() + '\n'
    body = re.sub(r'<h1\b[^>]*>(.*?)</h1>', lambda m: heading(m,1), body, flags=re.S)
    body = re.sub(r'<h2\b[^>]*>(.*?)</h2>', lambda m: heading(m,2), body, flags=re.S)

    def code(m):
        return '\n```\n' + _html.unescape(m.group(1)).strip() + '\n```\n'
    body = re.sub(r'<pre\b[^>]*>.*?<code>(.*?)</code>.*?</pre>', code, body, flags=re.S)

    def _inline(t):
        """Inline HTML inside a list item / summary -> markdown (bold/italic
        preserved; links were already converted above)."""
        t = re.sub(r'<strong>(.*?)</strong>', r'**\1**', t, flags=re.S)
        t = re.sub(r'<em>(.*?)</em>', r'*\1*', t, flags=re.S)
        return _html.unescape(re.sub(r'<[^>]+>', '', t)).strip()

    def ul(m):
        items = re.findall(r'<li[^>]*>(.*?)</li>', m.group(1), flags=re.S)
        lines = ['- ' + _inline(it) for it in items]
        return '\n' + '\n'.join(lines) + '\n'
    body = re.sub(r'<ul\b[^>]*>(.*?)</ul>', ul, body, flags=re.S)

    # Ordered lists: same handling as <ul>, but numbered. Without this handler
    # the <li> tags were merely stripped and the "How to use it" steps reached
    # pandoc as loose text (and, before the de-indent above, as a code block).
    def ol(m):
        items = re.findall(r'<li[^>]*>(.*?)</li>', m.group(1), flags=re.S)
        lines = [f'{i}. ' + _inline(it) for i, it in enumerate(items, 1)]
        return '\n\n' + '\n'.join(lines) + '\n\n'
    body = re.sub(r'<ol\b[^>]*>(.*?)</ol>', ol, body, flags=re.S)

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
def _faq_weight(path):
    s = open(path, encoding='utf-8').read()
    m = re.search(r'^weight:\s*([0-9]+)', s, re.M)
    return int(m.group(1)) if m else 0

def _faq_created(path):
    s = open(path, encoding='utf-8').read()
    m = re.search(r'^created:\s*["\']?([^"\'\n]+)', s, re.M)
    return m.group(1).strip() if m else os.path.basename(path)

# Order FAQs by weight (most useful/important first), tie-breaking by creation
# date -- matching the site's FAQ index and sidebar (see faq.astro / BaseLayout).
faq_paths = sorted(glob.glob(os.path.join(FAQS_DIR, '*.md')),
                   key=lambda p: (-_faq_weight(p), _faq_created(p)))
for path in faq_paths:
    slug = os.path.basename(path)[:-3]
    title, body = process_md(path, slug, 3)  # FAQ at H3
    parts.append(f"\n### {title} {{#{slug}}}\n\n{body}")

# --- Resources chapter (2026-09-20) ---
# Free tools, collections, instruments and open formats, listed LAST: they point
# outside the knowledge base, so they belong at the back of the book as a toolbox
# rather than inside the argument. Grouping mirrors src/pages/resources.astro
# (by the FIRST declared resource_type) so the site page and the exports agree.
resources_intro = """# Free Tools and Resources

A curated set of **free tools, collections, instruments and formats** for AI in education — things a reader can go and use, rather than research to read first. They are made mostly by educators, instructional designers, librarians and researchers, and many were built with AI assistance by people who are not professional developers.

Not everything here is interactive. Alongside browser tools you will find libraries of ready-made prompts and "gems", collections of classroom activities, briefing and policy documents, assessment instruments, and open file formats. Each entry says who made it, what kind of thing it is, whether the source code is available, and what it costs to use. Every entry links to an external site this knowledge base does not control; the link-checked date records when a link was last confirmed to work. The same list lives at the knowledge base site under Resources.

"""
parts.append(resources_intro)

RESOURCE_GROUP_ORDER = [
    'software', 'ai tutor', 'agent skill', 'prompt or gem library',
    'collection of tools', 'collection of activities', 'assessment instrument',
    'open format or specification', 'ebook or guide', 'case study collection',
    'dataset or benchmark',
]


def _rf(fm, name):
    """Read one scalar frontmatter field, quoted or bare."""
    m = re.search(r'^' + name + r':\s*(?:"([^"]*)"|(.+?))\s*$', fm, re.M)
    if not m:
        return ''
    return (m.group(1) or m.group(2) or '').strip()


def _rlist(fm, name):
    m = re.search(r'^' + name + r':\s*\[(.*?)\]', fm, re.M)
    if not m:
        return []
    return [t.strip().strip('"') for t in m.group(1).split(',') if t.strip()]


resource_paths = sorted(glob.glob(os.path.join(RESOURCES_DIR, '*.md')))
resource_titles = {}
resource_fields = {}
for path in resource_paths:
    slug = os.path.basename(path)[:-3]
    fm = open(path, encoding='utf-8').read().split('\n---\n', 1)[0]
    resource_titles[slug] = page_title(open(path, encoding='utf-8').read(), slug)
    resource_fields[slug] = {
        'url': _rf(fm, 'url'),
        'source_code': _rf(fm, 'source_code'),
        'author': _rf(fm, 'author'),
        'author_url': _rf(fm, 'author_url'),
        'type': _rlist(fm, 'resource_type'),
        'access': _rlist(fm, 'access'),
        'license': _rf(fm, 'license'),
        'checked': _rf(fm, 'last_verified'),
        'connected': _rlist(fm, 'connected_resources'),
    }

for group_type in RESOURCE_GROUP_ORDER:
    members = [os.path.basename(p)[:-3] for p in resource_paths
               if (resource_fields[os.path.basename(p)[:-3]]['type'] or [''])[0] == group_type]
    if not members:
        continue
    parts.append("\n## " + group_type.title() + "\n")
    for slug in sorted(members, key=lambda s: resource_titles[s]):
        f = resource_fields[slug]
        title, body = process_md(os.path.join(RESOURCES_DIR, slug + '.md'), slug, 3)
        head = []
        if f['url']:
            head.append("- **Open it:** [" + f['url'] + "](" + f['url'] + ")")
        if f['author']:
            who = "[" + f['author'] + "](" + f['author_url'] + ")" if f['author_url'] else f['author']
            head.append("- **Made by:** " + who)
        if f['source_code']:
            head.append("- **Source code:** [" + f['source_code'] + "](" + f['source_code'] + ")")
        bits = []
        if f['type']:
            bits.append('Type: ' + ', '.join(t.title() for t in f['type']))
        if f['access']:
            bits.append('Access: ' + ', '.join(a.title() for a in f['access']))
        if f['license']:
            bits.append('License: ' + f['license'])
        if bits:
            head.append('- ' + ' · '.join(bits))
        if f['checked']:
            head.append("- **Link checked:** " + f['checked'])
        extra = ''
        if f['connected']:
            # H4, not H2. A resource entry is an H3, so an H2 heading here became
            # a TOC entry in its own right and captured the resources that
            # followed it (the PDF numbering ran 14.1 Software, 14.2 Connected
            # Resources, 14.3 Connected Resources... and the EPUB nav repeated
            # it ten times). H4 matches the level the resource page's own
            # subheadings are shifted to, and stays out of the TOC at
            # --toc-depth=3 while remaining visible in the body.
            lines = ['\n#### Connected Resources\n']
            for other in f['connected']:
                if other in resource_titles:
                    lines.append("- [" + resource_titles[other] + "](#" + other + ")")
            if len(lines) > 1:
                extra = '\n' + '\n'.join(lines) + '\n'
        parts.append("\n### " + title + " {#" + slug + "}\n\n" + '\n'.join(head) + '\n\n' + body.rstrip() + extra)

combined = '\n\n'.join(parts)

# Exclude the H2 subheadings under the "Use This Knowledge Base with Your Own
# AI Assistant" chapter from the TOC (EPUB + PDF). Mark them {.unlisted} so
# pandoc's --toc omits them, while keeping the headings in the body text.
use_chap = re.compile(
    r'(?ms)^(# Use This Knowledge Base with Your Own AI Assistant\n)(.*?)(?=\n# )')
def _unlist_use(m):
    body = re.sub(r'(?m)^(## .+)$', r'\1 {.unlisted}', m.group(2))
    return m.group(1) + body
combined = use_chap.sub(_unlist_use, combined)

# A bare `---` line (a page's <hr>) is read by pandoc as the START of a YAML
# metadata block, so the following prose is then parsed as YAML and the build
# dies with "mapping values are not allowed in this context". Emit an explicit
# thematic break instead.
combined = re.sub(r'(?m)^-{3,}[ \t]*$', '***', combined)

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
        '--metadata', f'title={NAME}',
        '--metadata', f'rights={LICENSE["fullName"]}',
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
                cc0 = open(os.path.join(WIKI, 'public', os.path.basename(LICENSE['image'])), 'rb').read()
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
    <p><strong>{NAME}</strong></p>
    <p>Edited by {CONTRIBUTOR_NAME_LIST}.</p>
    <p><strong>Publication date:</strong> {date_str}</p>
    <p>This ebook was produced by an <strong>AI agent</strong> working for a human
    editor, and is dedicated to the
    public domain under a <strong>{LICENSE['name']}</strong> license - no rights reserved. You may copy, modify, distribute, and use the
    content for any purpose without asking permission.</p>
    <p class="cc0"><img src="data:image/png;base64,{cc0_b64}" alt="" aria-hidden="true" width="88" height="31" /></p>
    <p><strong>&#9888;&#65039; Disclaimer:</strong> AI-generated output may contain
    inaccuracies or errors.</p>
    {AI_HOW_MADE}
    <p>This document contains the concept and FAQ pages, but not the hundreds of
    article summaries available on the {NAME} website
    (<a href="{SITE_URL}/">{SITE_URL}/</a>).</p>
    <p>The source code for the website and these documents is available in the
    <a href="{REPO_URL}">GitHub repository</a>.</p>
    <p>Found an issue with the content? Please
    <a href="{ISSUES_URL}">report it on GitHub</a>, or
    contact the site developer,
    <a href="{EDITOR_URL}">{EDITOR_NAME}</a>.</p>
    <p><em>The latest edition of the {NAME} is available online at
    {SITE_URL}/.</em></p>
  </section>
</body>
</html>"""
                data = copyright_html.encode('utf-8')
            elif item.filename == 'EPUB/text/cover.xhtml':
                # Replace pandoc's SVG-wrapped <image> (no alt text, not
                # readable by screen readers) with an accessible <img> carrying
                # an alt description of the cover and the EPUB-3 doc-cover role.
                cover_alt = (
                    "Cover of the open AI in Education Knowledge Base resource: "
                    "minimalist white background with bright blue bars at top and "
                    "bottom; title in large dark serif font; a radial concept map "
                    "showing the resource's scope with the central node 'AI in "
                    "Education' connected to twelve surrounding sub-topic nodes "
                    "(Evaluation, AI Literacy, Research, Assessment, Disciplines, "
                    "Modeling, Pedagogy, Learning, Ethics, Equity, Technologies, "
                    "Feedback); public domain (CC0) mark at the bottom."
                )
                text = data.decode('utf-8', errors='ignore')
                m = _re.search(r'<image\b[^>]*\bxlink:href="([^"]+)"', text)
                src = m.group(1) if m else '../media/file0.png'
                new_cover = (
                    f'<div id="cover-image">'
                    f'<img src="{src}" alt="{cover_alt}" role="doc-cover" '
                    f'style="width:100%; height:auto;" />'
                    f'</div>'
                )
                text = _re.sub(r'<div id="cover-image">.*?</div>',
                               new_cover, text, flags=_re.S)
                data = text.encode('utf-8')
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
    (internal jump links) and internal/external links are preserved. The TOC is
    numbered via CSS counters (scoped to #TOC), so body headings stay clean —
    matching the EPUB, where numbering appears only in the TOC. A Notice page
    (same content as the EPUB's) is injected after the cover."""
    import pathlib, base64
    today = datetime.date.today()
    date_str = today.strftime('%B %d, %Y')

    # Full-page cover + Notice page as HTML fragments injected before the body.
    cover_src = os.path.join(WIKI, 'public', 'epub-cover.png')
    cover_file = pathlib.Path(cover_src).as_uri()
    cc0 = open(os.path.join(WIKI, 'public', os.path.basename(LICENSE['image'])), 'rb').read()
    cc0_b64 = base64.b64encode(cc0).decode('ascii')
    pre_html = os.path.join(WIKI, 'dist', 'pdf-prefront.html')
    os.makedirs(os.path.dirname(pre_html), exist_ok=True)
    notice = f"""<div class="cover-page"><img src="{cover_file}" alt="{NAME}" /></div>
<section class="notice-page">
  <h1>Notice</h1>
  <p><strong>{NAME}</strong></p>
  <p>Edited by {CONTRIBUTOR_NAME_LIST}.</p>
  <p><strong>Publication date:</strong> {date_str}</p>
  <p>This ebook was produced by an <strong>AI agent</strong> working for a human
  editor, and is dedicated to the
  public domain under a <strong>{LICENSE['name']}</strong> license - no rights reserved. You may copy, modify, distribute, and use the
  content for any purpose without asking permission.</p>
  <p class="cc0"><img src="data:image/png;base64,{cc0_b64}" alt="" aria-hidden="true" width="88" height="31" /></p>
  <p><strong>&#9888;&#65039; Disclaimer:</strong> AI-generated output may contain
  inaccuracies or errors.</p>
  {AI_HOW_MADE}
  <p>This document contains the concept and FAQ pages, but not the hundreds of
  article summaries available on the {NAME} website
  (<a href="{SITE_URL}/">{SITE_URL}/</a>).</p>
  <p>The source code for the website and these documents is available in the
  <a href="{REPO_URL}">GitHub repository</a>.</p>
  <p>Found an issue with the content? Please
  <a href="{ISSUES_URL}">report it on GitHub</a>, or
  contact the site developer,
  <a href="{EDITOR_URL}">{EDITOR_NAME}</a>.</p>
  <p><em>The latest edition of the {NAME} is available online at
  {SITE_URL}/.</em></p>
</section>"""
    with open(pre_html, 'w', encoding='utf-8') as f:
        f.write(notice)

    # --- PDF-only page breaks before each concept and each FAQ ---
    # Both the EPUB and PDF are built from the SAME `dist/aied-export.md`, so
    # we must not inject page-break markers there (they'd also break the EPUB).
    # Instead, produce a PDF-specific variant of the markdown that tags every
    # concept/FAQ title (H3 heading with a {#slug} attribute — concepts and
    # FAQs are the ONLY H3s; 183 concepts + 16 FAQs = 199) with a
    # `.conceptpage` class, and add a header CSS that starts each on a new
    # page via `break-before: page`. WeasyPrint honors this reliably.
    src_md = open(md_path, encoding='utf-8').read()

    def _tag_concept_heading(line):
        # e.g. "### Title {#slug}" -> "### Title {#slug .conceptpage}"
        m = re.match(r'^(### .+?)(\s*\{#[^}]*\})\s*$', line)
        if m:
            return m.group(1) + m.group(2).rstrip('}') + ' .conceptpage}'
        # A bare H3 without an attribute is not a concept/FAQ — leave it.
        return line

    pdf_md = os.path.join(WIKI, 'dist', 'aied-export-pdf.md')
    with open(pdf_md, 'w', encoding='utf-8') as f:
        f.write('\n'.join(_tag_concept_heading(l) for l in src_md.split('\n')))

    # Header CSS injected into the PDF <head> (PDF-only — never touches EPUB).
    pdf_header = os.path.join(WIKI, 'dist', 'pdf-header.html')
    with open(pdf_header, 'w', encoding='utf-8') as f:
        f.write(
            '<style>\n'
            '/* Start each concept and each FAQ on a new page. */\n'
            'h3.conceptpage { break-before: page; }\n'
            '</style>\n'
        )

    cmd = [
        'pandoc', pdf_md, '-o', PDF_OUT,
        '--pdf-engine=weasyprint',
        '--metadata', f'title={NAME}',
        '--metadata', 'lang=en',
        '--toc', '--toc-depth=3',
        '--include-before-body=' + pre_html,
        '--include-in-header=' + pdf_header,
        '--css=' + PDF_CSS,
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print('pandoc/pdf error:', r.stderr[-2000:])
        return False
    if os.path.exists(PDF_OUT):
        print(f"Built {PDF_OUT} ({os.path.getsize(PDF_OUT)} bytes)")
    else:
        print('pdf output missing')
        return False

    # Set PDF language metadata. WeasyPrint 69 does not write a /Lang key even
    # with an <html lang> attribute, so set it (and re-affirm the document
    # title) directly on the PDF catalog/Info via pikepdf — required for
    # screen-reader and PDF/UA accessibility. Best-effort: never fail the build
    # if pikepdf is unavailable.
    try:
        import pikepdf
        with pikepdf.open(PDF_OUT, allow_overwriting_input=True) as pdf:
            pdf.Root.Lang = pikepdf.String('en-US')
            pdf.docinfo.Title = NAME
            pdf.save()
        print(f"PDF metadata set: /Lang=en-US, Title={NAME!r}")
    except Exception as e:  # pragma: no cover - best-effort metadata
        print(f"Warning: could not set PDF metadata ({e})")
    return True


if __name__ == '__main__':
    build_epub()
    build_pdf()


