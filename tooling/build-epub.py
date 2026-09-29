#!/usr/bin/env python3
"""Build the offline edition (EPUB + PDF) of the AI Ed Wiki: home intro +
use-with-AI + all concepts (organized into chapters by the umbrella groups) +
FAQs + a resources chapter.

`--locale <code>` builds a translated edition from that locale's own collections
and built pages, writing public/aied.<code>.epub, public/aied.<code>.pdf and
dist/aied-export.<code>.md. The default locale keeps the unprefixed names, the
English copy written in this file, and its existing notice.

Metadata: title from site.config.json, the editor name from site.config.json
(never hardcoded here), CC0 public-domain dedication, and the generation date.
Wiki [[wikilinks]] that resolve to concepts/FAQs present in the EPUB become
internal anchors so navigation works inside the reader.
"""
import argparse
import os
import sys, re, glob, subprocess, datetime, json, sys

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

# The public-domain mark shown on each edition's Notice page and cover: the CC0
# "circled zero", rasterized from src/assets/cc-zero.svg (the Creative Commons
# press kit icon, itself dedicated to the public domain under CC0 1.0) by
# tooling/gen-pd-mark.mjs. It replaces the old raster badge, whose lettering was
# the English words "PUBLIC DOMAIN" in every locale — the words beside the mark
# are now translated (see _pd_mark_html). Path comes from site.config.json.
PD_MARK_PATH = os.path.join(WIKI, 'public', os.path.basename(LICENSE['mark']))

# Contributors and the AI-use policy also come from site.config.json, so the notice
# page cannot drift from the evidence the pages carry. AI systems are never
# contributors: see AI-USE.md for why (COPE/ICMJE authorship position).
CONTRIBUTORS = SITE.get('contributors', [])
HUMAN_CONTRIBUTORS = [c for c in CONTRIBUTORS
                      if c.get('kind') == 'human' and c.get('name')]
CONTRIBUTOR_NAME_LIST = ' and '.join(c['name'] for c in HUMAN_CONTRIBUTORS) or EDITOR_NAME
AI_DISCLOSURE = SITE.get('aiDisclosure', {})
# Only the model currently in use is named in the offline editions: the offline
# notice carries the generation date and no model-by-model history (maintainer
# decision -- the date was asked for again after a rebuild dropped it).
AI_MODEL_IDS = [m['id'] for m in AI_DISCLOSURE.get('models', []) if m.get('id')]
AI_MODEL_CURRENT = AI_MODEL_IDS[0] if AI_MODEL_IDS else 'a large language model'
AI_POLICY = AI_DISCLOSURE.get('policy', 'AI-USE.md')
AI_HOW_MADE = (
    f'<p><strong>How this text was made:</strong> the pages are drafted by a large '
    f'language model ({AI_MODEL_CURRENT}) from the source documents, then reviewed, '
    f'corrected and published by the editor, who is accountable for what appears here. '
    f'Concept and FAQ pages are syntheses written across the article summaries '
    f'published on the site. No AI system is listed as an author or contributor. '
    f'Citations are checked against the publisher record, and figures in the text are '
    f'checked against the extracted source files. The full disclosure, including what '
    f'is not verified, is in '
    f'<code>{AI_POLICY}</code> in the source repository.</p>'
)
ORIGIN = SITE_URL[: -len(BASE)] if SITE_URL.endswith(BASE) else SITE_URL

# --- locale -----------------------------------------------------------------
# The default locale keeps the unprefixed artifact names (public/aied.epub,
# public/aied.pdf, dist/aied-export.md); every other locale carries its code as
# an infix, mirroring the route model and the llms files (llms.es.txt). The
# chapter copy, the collection content and the front-matter note all follow the
# requested locale.
def _parse_args():
    ap = argparse.ArgumentParser(
        description='Build the offline EPUB/PDF edition for one locale.')
    ap.add_argument('--locale', default=None,
                    help='locale code (default: the site default locale)')
    return ap.parse_args()


LOCALE = _parse_args().locale or content_paths.DEFAULT_DIR
IS_DEFAULT = LOCALE == content_paths.DEFAULT_DIR
if LOCALE not in content_paths.LOCALES:
    raise SystemExit(f'build-epub: unknown locale {LOCALE!r}; configured locales: '
                     f'{", ".join(content_paths.LOCALES)}')
SUFFIX = '' if IS_DEFAULT else f'.{LOCALE}'

# The locale's own metadata: the label that identifies the language in the book
# title, and the machine-translation note the front matter must carry. Both come
# from site.config.json so the note cannot drift from the site's.
LOCALE_ENTRY = next((e for e in ((SITE.get('i18n') or {}).get('locales') or [])
                     if e.get('code') == LOCALE), {})
LOCALE_LABEL = LOCALE_ENTRY.get('label') or LOCALE
OFFLINE_NOTE = LOCALE_ENTRY.get('offlineDescription') or ''
# The book's own title in the locale (the site's localized site name); it is the
# EPUB/PDF metadata title and the Notice page's lead line. The default edition
# keeps the site name and its existing chrome.
OFFLINE_TITLE = LOCALE_ENTRY.get('offlineTitle') or ''
BOOK_TITLE = (OFFLINE_TITLE if (not IS_DEFAULT and OFFLINE_TITLE)
              else (NAME if IS_DEFAULT else f'{NAME} ({LOCALE_LABEL})'))
BOOK_LANG = LOCALE
# The site's name as the locale writes it (the book's own title when the locale
# has one), so the notice prose reads in the locale throughout rather than
# dropping the English site name into a translated sentence.
LOCALE_SITE_NAME = OFFLINE_TITLE or NAME

# The locale's own chrome strings (notice page prose, nav landmarks, TOC title).
# One entry per string, all in site.config.json, so the book cannot drift from
# the site. A locale with no entry keeps the English literal written below.
NOTICE = LOCALE_ENTRY.get('offlineNotice') or {}


def _nt(key, default):
    """One localized notice/chrome string, falling back to English."""
    return NOTICE.get(key) or default


# Resource-chapter metadata labels (the same block the resource page renders).
RES_LABELS = LOCALE_ENTRY.get('offlineResourceLabels') or {}


def _rl(key, default):
    return RES_LABELS.get(key) or default


OPEN_IT_LABEL = _rl('open', 'Open it')
MADE_BY_LABEL = _rl('madeBy', 'Made by')
SOURCE_CODE_LABEL = _rl('sourceCode', 'Source code')
TYPE_LABEL = _rl('type', 'Type')
ACCESS_LABEL = _rl('access', 'Access')
LICENSE_LABEL = _rl('license', 'License')
LINK_CHECKED_LABEL = _rl('linkChecked', 'Link checked')

# The book's umbrella chapter headings are the site's taxonomy headings, keyed by
# the exact English heading. The SAME map the sidebar uses localizes them, so the
# book and the site cannot drift; a locale with no entry keeps the English
# heading. The heading keeps an explicit anchor derived from the English text so
# any link to the chapter survives translation.
TAXONOMY_HEADINGS = LOCALE_ENTRY.get('taxonomyHeadings') or {}


def chapter_heading(heading):
    """The locale's umbrella chapter heading (English when untranslated), with
    an explicit anchor so links to the chapter survive the translation."""
    translated = TAXONOMY_HEADINGS.get(heading) or heading
    if translated == heading:
        return heading
    anchor = re.sub(r'[^a-z0-9]+', '-', heading.lower()).strip('-')
    return f'{translated} {{#{anchor}}}'
# The note is the locale's own; the default edition's notice text stays as it is.
OFFLINE_NOTE_HTML = (f'\n    <p><em>{OFFLINE_NOTE}</em></p>'
                     if OFFLINE_NOTE and not IS_DEFAULT else '')


def _pd_mark_html(indent, b64, label, size=28):
    """The public-domain mark and the name of what it means, on one line.

    The image is the CC0 circled zero; `label` is the locale's own wording for
    "public domain". The image carries no alt text of its own (empty alt,
    aria-hidden): the visible label IS the accessible name, and unlike the old
    badge's fixed English lettering it is translated.

    The width/height attributes are only a fallback: WeasyPrint ignores them on
    an <img> and draws the 256px raster at its intrinsic size, which made the
    mark fill the PDF's notice page. The size is therefore set in CSS, in em so
    it tracks the surrounding text — see `.pd-mark img` in tooling/pdf-style.css
    and in the EPUB Notice page's own <style> block.
    """
    return (f'{indent}<p class="pd-mark">'
            f'<img src="data:image/png;base64,{b64}" alt="" aria-hidden="true"'
            f' width="{size}" height="{size}" /> <span>{label}</span></p>')


def localized_notice_body(indent, pd_b64):
    """The Notice page's prose, assembled from the locale's own strings
    (site.config.json). Only a translated edition calls this: the default
    edition keeps its English literals inline, so its bytes never change."""
    open_p, close_p = f'{indent}<p>', '</p>'
    note_html = OFFLINE_NOTE_HTML.replace('\n    ', '\n' + indent)
    rows = [
        f'{open_p}<strong>{BOOK_TITLE}</strong>{close_p}',
        open_p + _nt('editedBy', 'Edited by {editors}.').format(
            editors=CONTRIBUTOR_NAME_LIST) + close_p + note_html,
        open_p + _nt('produced', 'This ebook was produced by an AI agent.').format(
            license=LICENSE['name']) + close_p,
        f'{open_p}<strong>{_nt("generated", "Generated")}:</strong> {GENERATED_DATE}{close_p}',
        _pd_mark_html(indent, pd_b64, _nt('publicDomain', 'Public Domain')),
        f'{open_p}<strong>&#9888;&#65039; {_nt("disclaimerLabel", "Aviso")}:</strong> '
        + _nt('disclaimerText', 'AI-generated output may contain inaccuracies or errors.')
        + close_p,
        open_p + f'<strong>{_nt("howMadeLabel", "How this text was made")}:</strong> '
        + _nt('howMadeText', '{model}').format(model=AI_MODEL_CURRENT, policy=AI_POLICY)
        + close_p,
        open_p + _nt('contains', 'This document contains the concept and FAQ pages.')
        .format(name=LOCALE_SITE_NAME, url=SITE_URL) + close_p,
        open_p + _nt('sourceCode', 'The source code is available in the GitHub repository.')
        .format(repo=REPO_URL) + close_p,
        open_p + _nt('foundIssue', 'Found an issue? Please report it on GitHub.')
        .format(issues=ISSUES_URL, editorUrl=EDITOR_URL, editor=EDITOR_NAME) + close_p,
        open_p + '<em>' + _nt('latestEdition', 'The latest edition is available online at {url}/.')
        .format(name=LOCALE_SITE_NAME, url=SITE_URL) + f'</em>{close_p}',
    ]
    return '\n'.join(rows)


def _ui_label(key, default):
    """One chrome label from src/i18n/ui.<locale>.ts.

    The default locale keeps the English literal written in this file; a
    translated edition reads the label the site itself renders, so the book and
    the site cannot disagree."""
    if IS_DEFAULT:
        return default
    try:
        with open(os.path.join(WIKI, 'src', 'i18n', f'ui.{LOCALE}.ts'),
                  encoding='utf-8') as fh:
            txt = fh.read()
    except FileNotFoundError:
        return default
    m = re.search(r"^\s*" + re.escape(key) + r":\s*'((?:[^'\\]|\\.)*)'", txt, re.M)
    return m.group(1).replace("\\'", "'") if m else default


CONNECTED_FAQS_LABEL = _ui_label('connected_faqs', 'Connected FAQs')
CONNECTED_RESOURCES_LABEL = _ui_label('connected_resources', 'Connected Resources')

CONCEPTS_DIR = str(content_paths.collection('concepts', LOCALE))
FAQS_DIR = str(content_paths.collection('faqs', LOCALE))
RESOURCES_DIR = str(content_paths.collection('resources', LOCALE))
INDEX_TS = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
OUT = os.path.join(WIKI, 'public', f'aied{SUFFIX}.epub')

# --- load slug sets + redirects ---
concept_slugs = {c[:-3] for c in os.listdir(CONCEPTS_DIR) if c.endswith('.md')}
faq_slugs = {f[:-3] for f in os.listdir(FAQS_DIR) if f.endswith('.md')}
# Articles are the one collection that is not translated: a translated edition
# still links its article wikilinks to the English article pages, which are the
# only ones that exist. A locale that does translate them is picked up here.
_ARTICLES_DIR = content_paths.collection('articles', LOCALE)
if not _ARTICLES_DIR.is_dir():
    _ARTICLES_DIR = content_paths.collection('articles')
article_slugs = {a[:-3] for a in os.listdir(_ARTICLES_DIR) if a.endswith('.md')}

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

def _site_link(href, label):
    """One link from a site page -> an EPUB internal anchor when the target is in
    this book, else a link to the live site.

    The default edition carries every concept, so every concept URL is an
    internal anchor; a translated edition only anchors the concepts it actually
    holds, and links the rest out to the live site. The FAQ and use-with-AI
    chapters keep their anchors in every edition, so links to them survive the
    translated heading."""
    for prefix in ('/aied/concepts/', f'/aied/{LOCALE}/concepts/'):
        if href.startswith(prefix):
            slug = href[len(prefix):].rstrip('/').split('/')[0]
            if slug and (IS_DEFAULT or slug in concept_slugs):
                return f'[{label}](#{slug})'
            return f'[{label}]({ORIGIN}{href})'
    if href.rstrip('/') in ('/aied/faq', f'/aied/{LOCALE}/faq'):
        return f'[{label}](#frequently-asked-questions)'
    if href.rstrip('/') in ('/aied/ai', f'/aied/{LOCALE}/ai'):
        return f'[{label}](#use-this-knowledge-base-with-your-own-ai-assistant)'
    if href.startswith('http'):
        return f'[{label}]({href})'
    return f'[{label}]({ORIGIN}{href})'


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
        lines = ['\n## ' + CONNECTED_FAQS_LABEL + '\n']
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
# The generation date shown on the notice page. Kept in its own constant because
# build_epub() binds a local `today` as a date object and a local `date_str` for the
# pandoc metadata, so reusing those names here would silently change the format.
GENERATED_DATE = datetime.date.today().strftime('%B %d, %Y')
# A translated edition carries the date in its own language. Only the locales
# that name their months here are reformatted; every other locale keeps the
# English strftime output exactly as before.
_LOCALIZED_MONTHS = {
    'es': ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
           'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
}
if LOCALE in _LOCALIZED_MONTHS:
    _d = datetime.date.today()
    GENERATED_DATE = f'{_d.day} de {_LOCALIZED_MONTHS[LOCALE][_d.month - 1]} de {_d.year}'
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


def _built_page_html(astro_path, locale=None):
    """Map a page under src/pages to its built file under dist/ (or None).

    Used when a page's chapter copy cannot be read from the .astro source, e.g.
    index.astro now renders <HomePage locale="en" /> and the text lives in the
    i18n modules. The built page is the same copy with those expressions already
    resolved. A non-default locale reads that locale's own build under
    dist/<locale>/, where the translated copy is resolved."""
    rel = os.path.relpath(astro_path, os.path.join(WIKI, 'src', 'pages'))
    stem = rel[:-len('.astro')] if rel.endswith('.astro') else rel
    root = os.path.join(WIKI, 'dist')
    if locale and locale != content_paths.DEFAULT_DIR:
        root = os.path.join(root, locale)
    candidates = [
        os.path.join(root, stem + '.html'),
        os.path.join(root, stem, 'index.html'),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def astro_body_markdown(astro_path, chapter_h1, locale=None, anchor=None):
    """Extract the body content of a .astro page (between <BaseLayout> and
    </BaseLayout>) and convert its simple HTML to markdown, so the EPUB always
    reflects the current site pages instead of a hardcoded copy.
    Concept/FAQ/wiki links become internal EPUB anchors; external links stay.

    For a translated edition (`locale` other than the default) the chapter copy
    comes from that locale's built page under dist/<locale>/, where the i18n
    expressions are resolved, never from the English page source. `anchor`
    attaches an explicit id to the chapter heading, so internal links keep
    working once the heading itself is translated."""
    src = open(astro_path, encoding='utf-8').read()
    m = re.search(r'<BaseLayout\b[^>]*>(.*?)</BaseLayout>', src, re.S)
    body = m.group(1) if m else None
    if locale and locale != content_paths.DEFAULT_DIR:
        # A translated edition never reads the English page source: its copy is
        # that locale's built page.
        body = None
    if body is None:
        # The page may delegate its markup to a component (index.astro renders
        # <HomePage locale="en" />), in which case there is no literal body to
        # read here and the chapter copy comes from the built page instead,
        # where the i18n expressions are already resolved.
        built = _built_page_html(astro_path, locale)
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
        # Compare the heading's TEXT, not its raw markup: the site pages put an
        # inline <svg> icon inside the H1 (before the words), so a raw comparison
        # never matches and the chapter title is emitted twice -- once by the
        # chapter prefix below and once by the page body -- which shows up as a
        # duplicate entry in the EPUB and PDF table of contents.
        t = _html.unescape(re.sub(r'<[^>]+>', '', m.group(1)))
        t = re.sub(r'\s+', ' ', t).strip()
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
        return _site_link(href, _html.unescape(label).strip())
    body = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>', link, body, flags=re.S)

    def heading(m, level):
        return '\n' + '#'*level + ' ' + _html.unescape(m.group(1)).strip() + '\n'
    body = re.sub(r'<h1\b[^>]*>(.*?)</h1>', lambda m: heading(m,1), body, flags=re.S)
    body = re.sub(r'<h2\b[^>]*>(.*?)</h2>', lambda m: heading(m,2), body, flags=re.S)
    # H3 (and H4) need the same handler as H1/H2. Without it the tag was merely
    # stripped by the catch-all below, so a heading's text stayed inline and ran
    # into whatever followed it -- the home page's per-audience labels reached the
    # books as "Essential concepts[AI literacy](#ai-literacy), ...", a glued
    # heading. The site hid the bug: its CSS puts the label on its own line, the
    # book stylesheets do not. Emitting a heading keeps the label a block of its
    # own in the EPUB and the PDF, matching the site's H3 structure.
    body = re.sub(r'<h3\b[^>]*>(.*?)</h3>', lambda m: heading(m,3), body, flags=re.S)
    body = re.sub(r'<h4\b[^>]*>(.*?)</h4>', lambda m: heading(m,4), body, flags=re.S)

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
    heading_line = f"# {chapter_h1}" + (f" {{#{anchor}}}" if anchor else "")
    return f"{heading_line}\n\n{body.strip()}\n"

def _export_region(built_path):
    """The chapter-copy slot of a built page, between the export markers."""
    try:
        with open(built_path, encoding='utf-8') as fh:
            html_text = fh.read()
    except OSError:
        return None
    m = re.search(r'<!--\s*export:page:start\s*-->(.*?)<!--\s*export:page:end\s*-->',
                  html_text, re.S)
    return m.group(1) if m else None


def _first_h1(html_text):
    """The text of the first <h1> in a fragment, tags stripped."""
    m = re.search(r'<h1\b[^>]*>(.*?)</h1>', html_text, re.S)
    if not m:
        return None
    t = _html.unescape(re.sub(r'<[^>]+>', '', m.group(1)))
    return re.sub(r'\s+', ' ', t).strip() or None


def _extract_element(html_text, class_fragment):
    """Inner HTML of the first element whose class contains class_fragment.

    Counts nesting of the same tag name, like _strip_element: a non-greedy regex
    stops at the first closing tag and would truncate a nested widget."""
    open_re = re.compile(r'<([a-z][a-z0-9]*)\b[^>]*class="[^"]*'
                         + re.escape(class_fragment) + r'[^"]*"[^>]*>', re.I)
    m = open_re.search(html_text)
    if not m:
        return None
    tag = m.group(1)
    depth, i, end = 1, m.end(), None
    step = re.compile(rf'<(/?){tag}\b[^>]*?(/?)>', re.I)
    while depth and i < len(html_text):
        n = step.search(html_text, i)
        if not n:
            break
        if n.group(1) == '/':
            depth -= 1
            if depth == 0:
                end = n.start()
                break
        elif not n.group(2):
            depth += 1
        i = n.end()
    return html_text[m.end():end if end is not None else len(html_text)]


def _fragment_markdown(fragment):
    """Minimal HTML -> markdown for a page's intro block: paragraphs, inline
    emphasis and links, which is all the FAQ/resources openers use."""
    t = re.sub(r'<style.*?</style>', '', fragment, flags=re.S)
    t = re.sub(r'<script.*?</script>', '', t, flags=re.S)
    t = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>',
               lambda m: _site_link(m.group(1), _html.unescape(m.group(2)).strip()),
               t, flags=re.S)
    t = re.sub(r'<strong>(.*?)</strong>', r'**\1**', t, flags=re.S)
    t = re.sub(r'<em>(.*?)</em>', r'*\1*', t, flags=re.S)
    t = re.sub(r'<br\s*/?>', '\n', t)
    t = re.sub(r'</p>', '\n\n', t)
    t = re.sub(r'<[^>]+>', '', t)
    t = _html.unescape(t)
    t = re.sub(r'[ \t]+', ' ', t)
    t = re.sub(r'\n{3,}', '\n\n', t)
    return t.strip()


def built_chapter_intro(stem, default_h1):
    """(chapter title, intro markdown) from this locale's built page under dist/.

    The copy a reader sees above a collection (the FAQ and resources openers)
    lives on the site page, not in the collection, so a translated edition takes
    its localized heading and intro from that locale's built page instead of
    re-using the English copy written in this file."""
    path = os.path.join(WIKI, 'dist', LOCALE, stem, 'index.html')
    region = _export_region(path) if os.path.exists(path) else None
    if region is None:
        return default_h1, None
    intro = _fragment_markdown(_extract_element(region, 'page-intro') or '')
    return (_first_h1(region) or default_h1), (intro or None)


def built_group_headings(stem):
    """The resource group labels, in page order, from this locale's built page."""
    region = _export_region(os.path.join(WIKI, 'dist', LOCALE, stem, 'index.html'))
    if not region:
        return []
    out = []
    for raw in re.findall(r'<h2[^>]*class="[^"]*group-heading[^"]*"[^>]*>(.*?)</h2>',
                          region, re.S):
        out.append(re.sub(r'\s+', ' ', _html.unescape(re.sub(r'<[^>]+>', '', raw))).strip())
    return out


# Front-matter chapters are built from the live site pages so the EPUB stays in
# sync with the site (no hardcoded copies to drift). A translated edition reads
# that locale's built pages under dist/<locale>/ and takes each chapter title
# from the page's own localized H1, so the heading and the body agree.
INDEX_ASTRO = os.path.join(WIKI, 'src', 'pages', 'index.astro')
AI_ASTRO = os.path.join(WIKI, 'src', 'pages', 'ai.astro')
# The site's own links point at this anchor, so a translated heading keeps it.
AI_CHAPTER_ANCHOR = 'use-this-knowledge-base-with-your-own-ai-assistant'
if IS_DEFAULT:
    INDEX_H1 = 'Introduction'
    AI_H1 = 'Use This Knowledge Base with Your Own AI Assistant'
    AI_ANCHOR = None
else:
    _index_region = _export_region(os.path.join(WIKI, 'dist', LOCALE, 'index.html'))
    _ai_region = _export_region(os.path.join(WIKI, 'dist', LOCALE, 'ai', 'index.html'))
    if _index_region is None or _ai_region is None:
        raise SystemExit(
            f'build-epub: no built {LOCALE} pages under dist/{LOCALE}/. '
            'Run the site build first (npm run build).')
    INDEX_H1 = _first_h1(_index_region) or 'Introduction'
    AI_H1 = _first_h1(_ai_region) or 'Use This Knowledge Base with Your Own AI Assistant'
    AI_ANCHOR = AI_CHAPTER_ANCHOR
AI_CHAPTER_LINE = AI_H1 + (f' {{#{AI_ANCHOR}}}' if AI_ANCHOR else '')
parts.append(astro_body_markdown(INDEX_ASTRO, INDEX_H1, locale=LOCALE))
parts.append(astro_body_markdown(AI_ASTRO, AI_H1, locale=LOCALE, anchor=AI_ANCHOR))

# Concepts organized by umbrella groups
for heading, groups in sections:
    parts.append(f"\n# {chapter_heading(heading)}\n")
    for label, items in groups:
        # H2 = sub-group label; H3 = each concept (kept under its group). The
        # sub-group labels come from the same taxonomy map as the chapter
        # headings (site.config.json), so the book and the site's sidebar agree;
        # a locale with no entry keeps the English label.
        parts.append(f"\n## {TAXONOMY_HEADINGS.get(label, label)}\n")
        for slug in items:
            path = os.path.join(CONCEPTS_DIR, slug + '.md')
            if not os.path.exists(path):
                continue
            title, body = process_md(path, slug, 3)  # concept at H3
            parts.append(f"\n### {title} {{#{slug}}}\n\n{body}")

# FAQs
if IS_DEFAULT:
    parts.append("""# Frequently Asked Questions

This section answers common questions about **AI in education** — what the research says about how AI affects teaching and learning, and how educators, instructors, and instructional designers can put that evidence into practice. Each answer distills findings from the research summarized across this knowledge base, connecting the question to the relevant concepts and articles for deeper reading.

""")
else:
    # Translated edition: the localized heading and intro come from the locale's
    # built FAQ page, and the anchor keeps the site's own
    # '#frequently-asked-questions' links working under the translated heading.
    _faq_h1, _faq_intro = built_chapter_intro('faq', 'Frequently Asked Questions')
    parts.append(f"# {_faq_h1} {{#frequently-asked-questions}}\n\n{_faq_intro or ''}\n")
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
if IS_DEFAULT:
    parts.append(resources_intro)
else:
    # Translated edition: the localized heading and intro come from the locale's
    # built resources page; the list itself is rendered below from the collection.
    _res_h1, _res_intro = built_chapter_intro('resources', 'Free Tools and Resources')
    parts.append(f"# {_res_h1} {{#free-tools-and-resources}}\n\n{_res_intro or ''}\n")

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

# Group labels: the default edition titles each group from its resource_type
# slug; a translated edition takes the localized labels from its built resources
# page, paired in order and guarded by the group count so a mismatch falls back
# to the English label rather than mislabelling a group.
_groups_present = [
    g for g in RESOURCE_GROUP_ORDER
    if any((resource_fields[os.path.basename(p)[:-3]]['type'] or [''])[0] == g
           for p in resource_paths)
]
_group_labels = [] if IS_DEFAULT else built_group_headings('resources')
if len(_group_labels) != len(_groups_present):
    _group_labels = []
_group_label_for = dict(zip(_groups_present, _group_labels))

for group_type in RESOURCE_GROUP_ORDER:
    members = [os.path.basename(p)[:-3] for p in resource_paths
               if (resource_fields[os.path.basename(p)[:-3]]['type'] or [''])[0] == group_type]
    if not members:
        continue
    parts.append("\n## " + (_group_label_for.get(group_type) or group_type.title()) + "\n")
    for slug in sorted(members, key=lambda s: resource_titles[s]):
        f = resource_fields[slug]
        title, body = process_md(os.path.join(RESOURCES_DIR, slug + '.md'), slug, 3)
        head = []
        if f['url']:
            head.append("- **" + OPEN_IT_LABEL + ":** [" + f['url'] + "](" + f['url'] + ")")
        if f['author']:
            who = "[" + f['author'] + "](" + f['author_url'] + ")" if f['author_url'] else f['author']
            head.append("- **" + MADE_BY_LABEL + ":** " + who)
        if f['source_code']:
            head.append("- **" + SOURCE_CODE_LABEL + ":** [" + f['source_code'] + "](" + f['source_code'] + ")")
        bits = []
        if f['type']:
            bits.append(TYPE_LABEL + ': ' + ', '.join(t.title() for t in f['type']))
        if f['access']:
            bits.append(ACCESS_LABEL + ': ' + ', '.join(a.title() for a in f['access']))
        if f['license']:
            bits.append(LICENSE_LABEL + ': ' + f['license'])
        if bits:
            head.append('- ' + ' · '.join(bits))
        if f['checked']:
            head.append("- **" + LINK_CHECKED_LABEL + ":** " + f['checked'])
        extra = ''
        if f['connected']:
            # H4, not H2. A resource entry is an H3, so an H2 heading here became
            # a TOC entry in its own right and captured the resources that
            # followed it (the PDF numbering ran 14.1 Software, 14.2 Connected
            # Resources, 14.3 Connected Resources... and the EPUB nav repeated
            # it ten times). H4 matches the level the resource page's own
            # subheadings are shifted to, and stays out of the TOC at
            # --toc-depth=3 while remaining visible in the body.
            lines = ['\n#### ' + CONNECTED_RESOURCES_LABEL + '\n']
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
    r'(?ms)^(# ' + re.escape(AI_CHAPTER_LINE) + r'\n)(.*?)(?=\n# )')
def _unlist_use(m):
    body = re.sub(r'(?m)^(## .+)$', r'\1 {.unlisted}', m.group(2))
    return m.group(1) + body
combined = use_chap.sub(_unlist_use, combined)

# A bare `---` line (a page's <hr>) is read by pandoc as the START of a YAML
# metadata block, so the following prose is then parsed as YAML and the build
# dies with "mapping values are not allowed in this context". Emit an explicit
# thematic break instead.
combined = re.sub(r'(?m)^-{3,}[ \t]*$', '***', combined)

md_path = os.path.join(WIKI, 'dist', f'aied-export{SUFFIX}.md')
os.makedirs(os.path.dirname(md_path), exist_ok=True)
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(combined)
print(f"Wrote {md_path}: {len(combined.splitlines())} lines")


# --- cover image ------------------------------------------------------------
# The committed public/epub-cover.png is a single English raster produced by
# tooling/gen-epub-cover.mjs (Node + sharp): white portrait page, the title,
# the radial concept map and the CC0 public-domain mark. The site renders the map
# once PER LOCALE (src/components/ConceptMap.astro, labels from
# src/i18n/pages/home.<locale>.ts), so a translated edition rasterizes its own
# cover here with Pillow from that locale's labels — same geometry, localized
# labels and title. The default edition keeps the committed file byte for byte.
_COVER_NODE_SLUGS = [
    # (slug, English label) — inner ring, then outer ring (ConceptMap order)
    ('student-modeling', 'Modeling'), ('learning-theories', 'Learning'),
    ('equity-in-ai-education', 'Equity'), ('feedback', 'Feedback'),
    ('ai-literacy', 'AI Literacy'), ('assessment', 'Assessment'),
    ('discipline-specific-aied', 'Disciplines'), ('pedagogy', 'Pedagogy'),
    ('ethics', 'Ethics'), ('ai-technologies', 'Technologies'),
    ('ai-ed-evaluation', 'Evaluation'), ('research-methods-aied', 'Research'),
]


def _cover_labels():
    """(center, {slug: label}) from the locale's home page copy, i.e. the exact
    labels the site's concept map renders. Falls back to the English labels."""
    center = 'AI in Education'
    labels = {slug: en for slug, en in _COVER_NODE_SLUGS}
    path = os.path.join(WIKI, 'src', 'i18n', 'pages', f'home.{LOCALE}.ts')
    try:
        txt = open(path, encoding='utf-8').read()
    except OSError:
        return center, labels
    block = re.search(r'conceptMap:\s*\{(.*?)\n\s{2}\},', txt, re.S)
    if not block:
        return center, labels
    body = block.group(1)
    m = re.search(r"\bcenter:\s*'([^']*)'", body)
    if m:
        center = m.group(1)
    nodes = re.search(r'\bnodes:\s*\{(.*?)\}', body, re.S)
    if nodes:
        for slug, label in re.findall(r"'?([A-Za-z0-9-]+)'?:\s*'([^']*)'",
                                      nodes.group(1)):
            labels[slug] = label.replace("\\'", "'")
    return center, labels


def _cover_title_lines():
    """The two title lines on the cover: the locale's own book title, split
    across two lines, or the English pair for the default edition."""
    if IS_DEFAULT or not OFFLINE_TITLE:
        return ['AI in Education', 'Knowledge Base']
    words = OFFLINE_TITLE.split()
    if len(words) < 2:
        return [OFFLINE_TITLE, '']
    best, best_diff = 1, None
    for i in range(1, len(words)):
        a = len(' '.join(words[:i]))
        b = len(' '.join(words[i:]))
        if best_diff is None or abs(a - b) < best_diff:
            best, best_diff = i, abs(a - b)
    return [' '.join(words[:best]), ' '.join(words[best:])]


def _locale_cover_path():
    """The cover image for this edition (see the block comment above)."""
    default = os.path.join(WIKI, 'public', 'epub-cover.png')
    if IS_DEFAULT:
        return default
    out = os.path.join(WIKI, 'public', f'epub-cover{SUFFIX}.png')
    try:
        from PIL import Image, ImageDraw, ImageFont
    except Exception as e:  # pragma: no cover - Pillow is a build dependency
        print(f'Warning: Pillow unavailable ({e}); using the English cover')
        return default
    title_font_path = '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
    node_font_path = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    if not (os.path.exists(title_font_path) and os.path.exists(node_font_path)):
        print('Warning: cover fonts not found; using the English cover')
        return default

    center, labels = _cover_labels()
    W, H = 1200, 1800
    img = Image.new('RGB', (W, H), '#ffffff')
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, W, 18], fill='#3b82f6')
    d.rectangle([0, H - 18, W, H], fill='#3b82f6')

    # Title: two centred lines, stepping the size down until each fits.
    lines = _cover_title_lines()
    for y, line in zip((170, 248), lines):
        if not line:
            continue
        size = 64
        font = ImageFont.truetype(title_font_path, size)
        while font.getlength(line) > W - 100 and size > 24:
            size -= 2
            font = ImageFont.truetype(title_font_path, size)
        d.text((W // 2, y), line, font=font, fill='#0b1220', anchor='mm')

    # Concept map: same radial geometry as ConceptMap.astro / the cover script,
    # placed at its position on the page (900x750 at x=150, y=330).
    OX, OY = 150, 330
    CX, CY, RECT_W, RECT_H = 450, 375, 138, 48
    inner, outer = _COVER_NODE_SLUGS[:6], _COVER_NODE_SLUGS[6:]

    def ring(nodes, radius, start_deg):
        import math
        n = len(nodes)
        placed = []
        for i, (slug, _en) in enumerate(nodes):
            a = math.radians(start_deg + (360 / n) * i)
            placed.append((slug, CX + radius * math.cos(a),
                           CY + radius * math.sin(a)))
        return placed

    placed = ring(inner, 168, 30) + ring(outer, 280, 0)
    for _slug, x, y in placed:
        d.line([(OX + CX, OY + CY), (OX + x, OY + y)], fill='#2c3a45', width=2)

    def label_size(text):
        n = len(text)
        return 11 if n >= 17 else (13 if n >= 12 else 16)

    for slug, x, y in placed:
        text = labels.get(slug, '')
        d.rounded_rectangle([OX + x - RECT_W / 2, OY + y - RECT_H / 2,
                             OX + x + RECT_W / 2, OY + y + RECT_H / 2],
                            radius=14, fill='#dbeafe', outline='#3b82f6', width=2)
        d.text((OX + x, OY + y + 6), text,
               font=ImageFont.truetype(node_font_path, label_size(text)),
               fill='#0b1220', anchor='mm')

    csize = 15 if len(center) >= 16 else 20
    d.rounded_rectangle([OX + CX - 95, OY + CY - 31, OX + CX + 95, OY + CY + 31],
                        radius=16, fill='#3b82f6')
    d.text((OX + CX, OY + CY + 7), center,
           font=ImageFont.truetype(node_font_path, csize),
           fill='#ffffff', anchor='mm')

    # Public-domain mark: the CC0 circled zero, square, on the same baseline as
    # the old 140x49 "PUBLIC DOMAIN" badge it replaces, with this locale's own
    # wording for "public domain" under it — the mark alone does not say what it
    # means, and a translated edition must not print English there.
    if os.path.exists(PD_MARK_PATH):
        M = 64
        mark = Image.open(PD_MARK_PATH).convert('RGBA').resize((M, M))
        img.paste(mark, ((W - M) // 2, 1252), mark)
        pd_label = _nt('publicDomain', 'Public Domain')
        lsize = 34
        lfont = ImageFont.truetype(title_font_path, lsize)
        while lfont.getlength(pd_label) > W - 120 and lsize > 18:
            lsize -= 2
            lfont = ImageFont.truetype(title_font_path, lsize)
        d.text((W // 2, 1372), pd_label, font=lfont, fill='#0b1220', anchor='mm')

    img.save(out)
    print(f'Wrote {out} ({os.path.getsize(out)} bytes)')
    return out


def build_epub():
    """Run pandoc to produce aied.epub, then post-process to left-align the TOC."""
    today = datetime.date.today()
    date_str = today.strftime('%B %d, %Y')
    cmd = [
        'pandoc', md_path, '-o', OUT,
        '--metadata', f'title={BOOK_TITLE}',
        '--metadata', f'rights={LICENSE["fullName"]}',
        '--metadata', f'lang={BOOK_LANG}',
        '--metadata', f'date={date_str}',
        '--split-level=3',
        '--epub-cover-image=' + _locale_cover_path(),
        '--toc', '--toc-depth=3',
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print('pandoc error:', r.stderr)
        return False

    # Post-process: hard-code hierarchical TOC numbering, build a Copyright
    # page (with the CC0 mark), rename the TOC title, and remove Back-to-Contents.
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
                # Rename the TOC title (pandoc does not localize it for a
                # translated edition; the label comes from site.config.json).
                text = _re.sub(r'<h1 id="toc-title">[^<]*</h1>',
                               '<h1 id="toc-title">'
                               + _nt('tocLabel', 'Table of Contents') + '</h1>', text)
                # The second page is a Notice page: relabel it in the landmarks
                # nav so the reader's outline/progress list shows the notice label
                # instead of the book title. All three landmark labels are set
                # BEFORE number_toc() runs: number_toc injects its numbers into
                # every list in nav.xhtml, including the landmarks list, so a
                # label written afterwards would come out as "1. Notice".
                text = _re.sub(r'epub:type="titlepage">[^<]*</a>',
                               'epub:type="titlepage">'
                               + _nt('noticeLabel', 'Notice') + '</a>', text)
                text = _re.sub(r'epub:type="cover">[^<]*</a>',
                               'epub:type="cover">'
                               + _nt('coverLabel', 'Cover') + '</a>', text)
                # `epub:type="toc">` (the '>' immediately after) matches the toc
                # LANDMARK anchor, not <nav epub:type="toc" role=...>.
                text = _re.sub(r'epub:type="toc">[^<]*</a>',
                               'epub:type="toc">'
                               + _nt('tocLabel', 'Table of Contents') + '</a>', text)
                # Hard-code the hierarchical numbers into the TOC entries.
                text = number_toc(text)
                data = text.encode('utf-8')
            elif item.filename == 'EPUB/text/title_page.xhtml':
                # Turn the pandoc title page into a Notice page with the CC0 mark,
                # AI-generated disclaimer, and how-to-report-issues info.
                pd = open(PD_MARK_PATH, 'rb').read()
                pd_b64 = base64.b64encode(pd).decode('ascii')
                if IS_DEFAULT:
                    copyright_html = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="{BOOK_LANG}" xml:lang="{BOOK_LANG}">
<head>
  <meta charset="utf-8" />
  <title>Notice</title>
  <style>
    body {{ font-family: Georgia, serif; margin: 3em 2em; }}
    h1 {{ font-size: 1.6em; }}
    .pd-mark {{ margin-top: 1.5em; }}
    .pd-mark img {{ width: 1.15em; height: 1.15em; vertical-align: middle; }}
    p {{ margin: 0.8em 0; }}
  </style>
  <link rel="stylesheet" type="text/css" href="../styles/stylesheet1.css" />
</head>
<body epub:type="copyright-page">
  <section epub:type="copyright-page">
    <h1>Notice</h1>
    <p><strong>{BOOK_TITLE}</strong></p>
    <p>Edited by {CONTRIBUTOR_NAME_LIST}.</p>{OFFLINE_NOTE_HTML}
    <p>This ebook was produced by an <strong>AI agent</strong> working for a human
    editor, and is dedicated to the
    public domain under a <strong>{LICENSE['name']}</strong> license - no rights reserved. You may copy, modify, distribute, and use the
    content for any purpose without asking permission.</p>
    <p><strong>Generated:</strong> {GENERATED_DATE}</p>
    {_pd_mark_html('    ', pd_b64, 'Public Domain')}
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
                else:
                    # Translated edition: the whole page in the locale's language,
                    # strings from site.config.json (see localized_notice_body).
                    copyright_html = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="{BOOK_LANG}" xml:lang="{BOOK_LANG}">
<head>
  <meta charset="utf-8" />
  <title>{_nt('noticeLabel', 'Notice')}</title>
  <style>
    body {{ font-family: Georgia, serif; margin: 3em 2em; }}
    h1 {{ font-size: 1.6em; }}
    .pd-mark {{ margin-top: 1.5em; }}
    .pd-mark img {{ width: 1.15em; height: 1.15em; vertical-align: middle; }}
    p {{ margin: 0.8em 0; }}
  </style>
  <link rel="stylesheet" type="text/css" href="../styles/stylesheet1.css" />
</head>
<body epub:type="copyright-page">
  <section epub:type="copyright-page">
    <h1>{_nt('noticeLabel', 'Notice')}</h1>
{localized_notice_body('    ', pd_b64)}
  </section>
</body>
</html>"""
                data = copyright_html.encode('utf-8')
            elif item.filename == 'EPUB/text/cover.xhtml':
                # Replace pandoc's SVG-wrapped <image> (no alt text, not
                # readable by screen readers) with an accessible <img> carrying
                # an alt description of the cover and the EPUB-3 doc-cover role.
                cover_alt = _nt(
                    'coverAlt',
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


PDF_OUT = os.path.join(WIKI, 'public', f'aied{SUFFIX}.pdf')
PDF_CSS = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'pdf-style.css')


def build_pdf():
    """Generate aied.pdf from the same markdown export + cover as the EPUB,
    using weasyprint. The pandoc --toc creates a clickable table of contents
    (internal jump links) and internal/external links are preserved. The TOC is
    numbered via CSS counters (scoped to #TOC), so body headings stay clean —
    matching the EPUB, where numbering appears only in the TOC. A Notice page
    (same content as the EPUB's) is injected after the cover."""
    import pathlib, base64

    # Full-page cover + Notice page as HTML fragments injected before the body.
    cover_src = _locale_cover_path()
    cover_file = pathlib.Path(cover_src).as_uri()
    pd = open(PD_MARK_PATH, 'rb').read()
    pd_b64 = base64.b64encode(pd).decode('ascii')
    pre_html = os.path.join(WIKI, 'dist', f'pdf-prefront{SUFFIX}.html')
    os.makedirs(os.path.dirname(pre_html), exist_ok=True)
    if IS_DEFAULT:
        notice = f"""<div class="cover-page"><img src="{cover_file}" alt="{NAME}" /></div>
<section class="notice-page">
  <h1>Notice</h1>
  <p><strong>{BOOK_TITLE}</strong></p>
  <p>Edited by {CONTRIBUTOR_NAME_LIST}.</p>{OFFLINE_NOTE_HTML}
  <p>This ebook was produced by an <strong>AI agent</strong> working for a human
  editor, and is dedicated to the
  public domain under a <strong>{LICENSE['name']}</strong> license - no rights reserved. You may copy, modify, distribute, and use the
  content for any purpose without asking permission.</p>
  <p><strong>Generated:</strong> {GENERATED_DATE}</p>
  {_pd_mark_html('  ', pd_b64, 'Public Domain')}
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
    else:
        # Translated edition: the cover and the Notice page in the locale's
        # language (strings from site.config.json).
        notice = f"""<div class="cover-page"><img src="{cover_file}" alt="{BOOK_TITLE}" /></div>
<section class="notice-page">
  <h1>{_nt('noticeLabel', 'Notice')}</h1>
{localized_notice_body('  ', pd_b64)}
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

    pdf_md = os.path.join(WIKI, 'dist', f'aied-export-pdf{SUFFIX}.md')
    with open(pdf_md, 'w', encoding='utf-8') as f:
        f.write('\n'.join(_tag_concept_heading(l) for l in src_md.split('\n')))

    # Header CSS injected into the PDF <head> (PDF-only — never touches EPUB).
    pdf_header = os.path.join(WIKI, 'dist', f'pdf-header{SUFFIX}.html')
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
        '--metadata', f'title={BOOK_TITLE}',
        '--metadata', f'lang={BOOK_LANG}',
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

    # Set PDF language metadata. WeasyPrint 70 writes /Lang itself from the
    # <html lang> attribute (WeasyPrint 69 did not, which is why this step
    # exists), so what pikepdf does here is normalize the value to a region
    # subtag (en -> en-US) and re-affirm the document title on the catalog,
    # which is what screen-reader and PDF/UA checks read. Verify by reading the
    # catalog back, not with pdfinfo, which does not print /Lang.
    # Best-effort: never fail the build if pikepdf is unavailable.
    try:
        import pikepdf
        with pikepdf.open(PDF_OUT, allow_overwriting_input=True) as pdf:
            # The default edition normalizes to the en-US region subtag; a
            # translated edition carries its own locale code.
            pdf_lang = 'en-US' if IS_DEFAULT else LOCALE
            pdf.Root.Lang = pikepdf.String(pdf_lang)
            pdf.docinfo.Title = BOOK_TITLE
            pdf.save()
        print(f"PDF metadata set: /Lang={pdf_lang}, Title={BOOK_TITLE!r}")
    except Exception as e:  # pragma: no cover - best-effort metadata
        print(f"Warning: could not set PDF metadata ({e})")
    return True


if __name__ == '__main__':
    # build_pdf() returns False when pandoc or weasyprint fails - most often because
    # weasyprint is missing from the interpreter. Exiting 0 there once let a rebuild look
    # successful while leaving a stale aied.pdf on disk, so the failure is now loud.
    build_epub()
    if not build_pdf():
        sys.stderr.write('aied.pdf was NOT rebuilt - see the error above\n'); sys.exit(1)



