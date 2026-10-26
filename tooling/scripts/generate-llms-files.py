#!/usr/bin/env python3
"""Regenerate llms.txt and llms-full.txt from the wiki markdown sources."""
import os
import re
import html
import argparse
import json
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wikilink_text import resolve_wikilinks, strip_md_links  # noqa: E402

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths
import pathlib


# Single source of truth for site-wide metadata (shared with the Astro site
# and build-epub.py via site.config.json at the repo root).
with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as _cfg:
    SITE = json.load(_cfg)
SITE_URL = SITE['url']
BASE = SITE_URL
OUT = os.path.join(WIKI, "public")

def parse_md(path):
    """Return (frontmatter_dict, body_markdown) from a markdown file."""
    with open(path, encoding='utf-8') as fh:
        content = fh.read()
    if not content.startswith('---'):
        return {}, content
    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, content
    fm_text = parts[1].strip()
    fm = {}
    for line in fm_text.split('\n'):
        if ':' in line:
            key, _, val = line.partition(':')
            fm[key.strip()] = val.strip().strip('"\'')
    return fm, parts[2].strip()

def load_titles(locale):
    """slug -> page title for every collection, in one locale.

    Wikilinks must flatten to what the site shows for the target, which is its
    title, not its slug. A translated page carries the translated title, so this
    must be built from the requested locale or the links contradict the prose.
    """
    titles = {}
    for d in ('concepts', 'articles', 'faqs'):
        dirpath = str(content_paths.collection(d, locale))
        if not os.path.isdir(dirpath):
            continue
        for f in os.listdir(dirpath):
            if f.endswith('.md'):
                fm, _ = parse_md(os.path.join(dirpath, f))
                titles[f[:-3]] = str(fm.get('title', '')).strip('"\'')
    return titles


# Filled per locale in main(): resolve_wikilinks reads this module global.
TITLES = {}


def first_para(md):
    """Extract first meaningful paragraph as description."""
    # Skip blockquote synthesis marker
    text = re.sub(r'^>\s*', '', md, flags=re.MULTILINE)
    # Take first non-empty, non-heading paragraph
    for para in re.split(r'\n\s*\n', text):
        para = para.strip()
        if not para or para.startswith('#'):
            continue
        # Flat text: a piped wikilink keeps its label, a bare one becomes the
        # target's page title, so no raw slug can reach the output.
        para = resolve_wikilinks(para, title_of=TITLES.get)
        para = strip_md_links(para)
        para = re.sub(r'\s+', ' ', para).strip()
        if len(para) > 30:
            return para[:400]
    return ''

def concept_order():
    """Return the ordered list of concept slugs per the sidebar taxonomy in
    src/data/conceptIndex.ts. Concepts not listed (none currently) sort last
    alphabetically. This keeps llms.txt / llms-full.txt aligned with the
    site-wide sidebar navigation order."""
    idx_path = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
    order = []
    try:
        with open(idx_path, encoding='utf-8') as fh:
            ts = fh.read()
        # Collect slug strings in the order the sections/groups declare them.
        for m in re.finditer(r"'([a-z0-9-]+)'", ts):
            slug = m.group(1)
            if slug not in order:
                order.append(slug)
    except FileNotFoundError:
        pass
    return order

def collect(locale):
    articles, concepts, faqs = [], [], []
    for d, store in [('articles', articles), ('concepts', concepts), ('faqs', faqs)]:
        dirpath = str(content_paths.collection(d, locale))
        if not os.path.isdir(dirpath):
            continue
        for f in sorted(os.listdir(dirpath)):
            if not f.endswith('.md'):
                continue
            slug = f[:-3]
            fm, body = parse_md(os.path.join(dirpath, f))
            title = fm.get('title', slug)
            desc = first_para(body)
            store.append({
                'slug': slug,
                'title': title,
                'desc': desc,
                'url': f"{BASE}/{d}/{slug}/",
                'body': body,
                'fm': fm,
            })
    # Order concepts by the sidebar taxonomy (new concept hierarchy), not alphabetically.
    order = concept_order()
    order_index = {slug: i for i, slug in enumerate(order)}
    concepts.sort(key=lambda c: order_index.get(c['slug'], len(order) + 1))
    return articles, concepts, faqs

def build_llms_txt(articles, concepts, faqs):
    lines = []
    lines.append("# AI in Education Knowledge Base")
    lines.append(f"> A comprehensive knowledge base of {len(concepts)} concepts, {len(articles)} research articles, and {len(faqs)} FAQs covering AI in education — frameworks, methodologies, and papers.")
    lines.append("")
    lines.append("## Concepts")
    lines.append("")
    for c in concepts:
        desc = c['desc'].replace('\n', ' ')
        lines.append(f"- [{c['title']}]({c['url']}): {desc}")
    lines.append("")
    lines.append("## FAQs")
    lines.append("")
    for f in faqs:
        desc = f['desc'].replace('\n', ' ')
        lines.append(f"- [{f['title']}]({f['url']}): {desc}")
    lines.append("")
    lines.append("## Articles")
    lines.append("")
    for a in articles:
        desc = a['desc'].replace('\n', ' ')
        lines.append(f"- [{a['title']}]({a['url']}): {desc}")
    return "\n".join(lines) + "\n"

def build_llms_full(articles, concepts, faqs):
    lines = []
    lines.append("# AI in Education Knowledge Base — Full Content")
    lines.append(f"> Complete text of {len(concepts)} concepts, {len(articles)} articles, and {len(faqs)} FAQs.")
    lines.append("")
    lines.append("# Concepts")
    lines.append("")
    for c in concepts:
        lines.append(f"## [{c['title']}]({c['url']})")
        lines.append("")
        lines.append(c['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    lines.append("# FAQs")
    lines.append("")
    for f in faqs:
        lines.append(f"## [{f['title']}]({f['url']})")
        lines.append("")
        lines.append(f['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    lines.append("# Articles")
    lines.append("")
    for a in articles:
        lines.append(f"## [{a['title']}]({a['url']})")
        lines.append("")
        # Strip synthesis blockquote markers for readability
        body = a['body']
        lines.append(body)
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines) + "\n"

# Ceiling for llms*-concepts.txt, in words. Several chat products and agent
# ingesters cap what they will accept, and the concept corpus alone runs past this
# without the navigation sections (see strip_nav_sections).
CONCEPTS_WORD_BUDGET = 500_000


def strip_nav_sections(body):
    """Drop the navigation-only sections from a concept page body.

    Two kinds of `##` section carry no synthesis and exist to help a reader move
    around the site: the question prompts ("Questions to Consider", translated
    per locale) and the link indexes ("Connected Concepts", "Connected
    Articles"). Together they are ~110k words of the English corpus, which is
    what keeps the concepts-only file inside CONCEPTS_WORD_BUDGET.

    Detected by SHAPE, not by heading text, because every locale translates the
    headings: a link index is two or more bullets that each open with a bare
    wikilink (`- [[slug]]`), and the question list is four or more bullets that
    each end in a question mark. The `n>=2` and `n>=4` floors and the
    bare-wikilink anchor matter — without them the rule also eats a one-bullet
    Introduction, a three-question "Open Questions" section, and the bolded
    glossary entries (`- **[[term]]** — gloss`) that a section of links would
    otherwise resemble.
    """
    parts = re.split(r'^## (.+)$', body, flags=re.M)
    if len(parts) == 1:
        return body
    kept = [parts[0]]
    for i in range(1, len(parts), 2):
        title, content = parts[i], parts[i + 1]
        lines = [ln for ln in content.split("\n") if ln.strip()]
        bullets = [ln.strip() for ln in lines]
        if lines and all(ln.startswith("-") for ln in bullets):
            link_index = len(bullets) >= 2 and all(re.match(r'^-\s*\[\[', b) for b in bullets)
            questions = (len(bullets) >= 4 and
                         sum(1 for b in bullets if b.rstrip().endswith("?")) / len(bullets) >= 0.8)
            if link_index or questions:
                continue
        kept.append("## " + title)
        kept.append(content)
    return "".join(kept)


DEFAULT_TRUNCATED_NOTE = (
    "This file includes the first {included} of {total} concept pages so it stays "
    "under the 500,000-word limit that chat products and ingesters enforce; the "
    "remaining pages are published on the site.")


def build_llms_concepts(concepts, notice=None, truncated_note=None,
                        budget=CONCEPTS_WORD_BUDGET):
    """Concept pages with their navigation sections removed, capped at a word budget.

    `llms-full.txt` carries every article, concept and FAQ and has grown past 19 MB,
    which several chat products refuse to accept as an attachment or paste. The
    concept pages are the part worth handing a general assistant: they are the
    knowledge base's synthesis rather than one paper's findings, and they carry the
    wikilinks that let an assistant follow a thread. Articles stay out on purpose —
    a reader who wants a specific study can point the assistant at that page's URL.

    FAQs and resources are deliberately NOT included (2026-10-26): they pushed the
    file past the size an ingester will take. The concepts alone clear that limit
    only once their question prompts and link indexes are stripped, so the file
    carries each page's synthesis and none of its navigation.

    Translated prose runs longer than English — Spanish and French concepts run
    ~1.2x — so five locales still exceed the budget after the navigation sections
    go. There is nothing left to strip at that point: Introduction, the body
    sections, Common Misconceptions and Implications for Practice are all
    substance. Rather than mangle prose mid-sentence or blow the limit, pages are
    included in taxonomy order (the sidebar's order, foundational first) until the
    budget is reached and the remainder is dropped whole, with a closing note
    stating how many were included. Dropping a page is honest; truncating a
    sentence is not. Returns (text, included_count, total_count).
    """
    bodies = [(c, strip_nav_sections(c['body']).strip()) for c in concepts]

    def header(included):
        return [
            "# AI in Education Knowledge Base — Concepts",
            f"> Full text of {included} concept pages from the AI in "
            "Education Knowledge Base: the syntheses of what the research shows. "
            "Small enough to attach to a chat or ingester that will not take the "
            "complete file.",
            "",
            notice or ("Each page below is linked at its address on the site, so an assistant that can browse "
                       "may prefer to follow the link; the text is included so an assistant that cannot browse "
                       "can still answer from it. The individual research papers behind these syntheses are "
                       "linked from each page and are not reproduced here. Each page's cross-references and "
                       "question prompts are omitted to keep this file small."),
            "",
            "# Concepts",
            "",
        ]

    def block(c, body):
        return f"## [{c['title']}]({c['url']})\n\n{body}\n\n---\n"

    total_words = (len("\n".join(header(len(bodies))).split())
                   + sum(len(block(c, b).split()) for c, b in bodies))
    if total_words <= budget:
        selected, truncated = bodies, False
    else:
        # Reserve room for the truncation note itself, so adding it cannot push
        # the file back over the budget it exists to keep.
        reserve = len(DEFAULT_TRUNCATED_NOTE.split()) + 20
        selected, used = [], len("\n".join(header(0)).split())
        for c, b in bodies:
            w = len(block(c, b).split())
            if used + w + reserve > budget:
                break
            selected.append((c, b))
            used += w
        truncated = True

    lines = header(len(selected))
    for c, b in selected:
        lines.append(block(c, b))
    text = "\n".join(lines) + "\n"
    if truncated:
        note = truncated_note or DEFAULT_TRUNCATED_NOTE
        text += "\n" + note.format(included=len(selected), total=len(bodies)) + "\n"
    return text, len(selected), len(bodies)


def buildable_locales(min_pages=20):
    """Locale codes with enough translated content to be worth an offline build.

    A locale folder exists for every configured language as soon as its chrome is
    translated, so folder existence says nothing about content. Only locales whose
    translated concept+FAQ pages reach the threshold get artifacts, which means a
    new language starts producing them on its own once its pages land.
    """
    out = [content_paths.DEFAULT_DIR]
    for code in content_paths.LOCALES:
        if code == content_paths.DEFAULT_DIR:
            continue
        n = 0
        for d in ('concepts', 'faqs'):
            p = pathlib.Path(str(content_paths.collection(d, code)))
            if p.is_dir():
                n += len(list(p.glob('*.md')))
        if n >= min_pages:
            out.append(code)
    return out


def locale_note(locale):
    """The locale's own description line for the header, from src/i18n/locales.json."""
    return content_paths.locale_strings(locale).get('offlineDescription') or ''


def first_sentence(text):
    """The leading sentence of a description, terminator included.

    `offlineDescription` says two things: that the text is an unreviewed machine
    translation, then that the offline edition "includes the concept pages and
    the FAQ pages; article pages remain in English". Only the first is true of
    `llms*-concepts.txt`, which now carries concepts alone. Rather than hand-write
    a concepts-only variant in sixteen languages, keep the disclosure sentence —
    already translated, still accurate — and drop the rest, which the `# Concepts`
    heading and the file's own contents already state.

    Splits on the sentence terminators the catalogs actually use: '. ', the CJK
    ideographic full stop, and the Devanagari danda.
    """
    best = None
    for term in ('. ', '。', '।'):
        i = text.find(term)
        if i != -1 and (best is None or i < best[0]):
            best = (i, len(term))
    if best is None:
        return text
    return text[:best[0] + best[1]].strip()


def locale_notice(locale):
    """The locale's own 'Each page below...' paragraph, from src/i18n/locales.json.

    The English literal in build_llms_concepts stays as the default-locale text
    and the fallback for a locale with no entry.
    """
    return content_paths.locale_strings(locale).get('llmsNotice') or ''


def main():
    ap = argparse.ArgumentParser(description='Regenerate the llms files for one locale.')
    ap.add_argument('--locale', default=None,
                    help='locale code (default: the site default locale)')
    ap.add_argument('--all-buildable', action='store_true',
                    help='regenerate for every locale with enough translated content')
    args = ap.parse_args()

    if args.all_buildable:
        codes = buildable_locales()
    else:
        codes = [args.locale or content_paths.DEFAULT_DIR]

    for code in codes:
        build_one(code)


def build_one(locale):
    """Write this locale's llms files. Naming mirrors the route model: the default
    locale is unprefixed, every other locale carries its code as an infix."""
    global TITLES
    TITLES = load_titles(locale)

    is_default = locale == content_paths.DEFAULT_DIR
    articles, concepts, faqs = collect(locale)
    os.makedirs(OUT, exist_ok=True)

    suffix = '' if is_default else f'.{locale}'
    names = {
        'catalog': f'llms{suffix}.txt',
        'concepts': f'llms{suffix}-concepts.txt',
        'full': f'llms{suffix}-full.txt',
    }

    note = locale_note(locale)
    # The concepts file carries concepts alone, so only the machine-translation
    # disclosure half of `offlineDescription` is true of it; see first_sentence.
    note_concepts = first_sentence(note) if note else ''
    notice = locale_notice(locale)
    def _decorate(text, replacement):
        """For a translated file, REPLACE the generated English description with the
        locale's own note. Adding a second line instead leaves the English description
        below it, which then advertises other-language counts in the wrong language."""
        if is_default or not replacement:
            return text
        lines = text.split('\n')
        for i, ln in enumerate(lines):
            if ln.startswith('> '):
                lines[i] = f'> {replacement}'
                return '\n'.join(lines)
        return text

    def decorate(text):
        return _decorate(text, note)

    def decorate_concepts(text):
        return _decorate(text, note_concepts)

    with open(os.path.join(OUT, names['catalog']), 'w', encoding='utf-8') as fh:
        fh.write(decorate(build_llms_txt(articles, concepts, faqs)))
    concepts_text, n_included, n_total = build_llms_concepts(
        concepts, notice=notice,
        truncated_note=content_paths.locale_strings(locale).get('llmsTruncated'))
    concepts_text = decorate_concepts(concepts_text)
    with open(os.path.join(OUT, names['concepts']), 'w', encoding='utf-8') as fh:
        fh.write(concepts_text)
    words = len(concepts_text.split())
    if n_included < n_total:
        print(f"  {names['concepts']}: truncated to {n_included}/{n_total} pages, "
              f"{words:,} words (budget {CONCEPTS_WORD_BUDGET:,})")
    if words > CONCEPTS_WORD_BUDGET:
        print(f"  WARNING {names['concepts']}: {words:,} words, over the "
              f"{CONCEPTS_WORD_BUDGET:,} budget")
    # A full dump for a non-default locale would be mostly English articles wearing a
    # translated filename, which is exactly the kind of dishonesty the disclosure
    # fields exist to prevent. Articles are not translated, so it is not written.
    if is_default:
        with open(os.path.join(OUT, names['full']), 'w', encoding='utf-8') as fh:
            fh.write(build_llms_full(articles, concepts, faqs))

    print(f"[{locale}] Articles: {len(articles)}, Concepts: {len(concepts)}, FAQs: {len(faqs)}")
    for key in ('catalog', 'concepts', 'full'):
        p = os.path.join(OUT, names[key])
        if os.path.exists(p):
            print(f"  {names[key]}: {os.path.getsize(p)} bytes")
    concepts_bytes = os.path.getsize(os.path.join(OUT, names['concepts']))
    if concepts_bytes > 9_500_000:
        print(f"  WARNING: {names['concepts']} is {concepts_bytes / 1024 / 1024:.1f} MB, over the 10 MB "
              "attachment limit it exists to stay under — trim or split the file.")


if __name__ == '__main__':
    main()
