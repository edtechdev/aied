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
OUT = os.path.join(WIKI, 'dist', 'aied.epub')

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
    """Turn [[target|label]] / [[target]] into internal epub anchors when the
    target is a concept or FAQ present in this EPUB; into a link to the live
    site for article pages (not included in this EPUB); otherwise plain text."""
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
    return re.sub(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]', repl, txt)

def process_md(path, slug, hlevel):
    raw = open(path, encoding='utf-8').read()
    title = page_title(raw, slug)
    body = strip_frontmatter(raw)
    body = convert_links(body)
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

# Front / colophon
today = datetime.date.today().strftime('%B %d, %Y')
parts.append(f"""# AI in Education Knowledge Base

**Edited by Doug Holton.**

This volume is licensed under the **Creative Commons CC0 1.0 Universal
(CC0) Public Domain Dedication** — no rights reserved. You may copy, modify,
distribute, and use the content for any purpose without asking permission.

*Generated {today} from the AI in Education Knowledge Base
(https://edtechdev.github.io/aied/).*
""")

# Home intro
parts.append("""# Introduction

Welcome to the **AI in Education Knowledge Base** — a living, open knowledge base on artificial intelligence in education, built for educators, researchers, and developers who want to keep pace with a fast-moving field. Whether you teach in higher education or K-12, design courses and learning experiences, develop educational software, administer programs, or study teaching and learning, this knowledge base distills recent open-access research into concise, structured summaries you can read and apply quickly. The site is **generated and maintained by an AI agent**, and is updated regularly as new open-access research is published.

Each article page condenses a paper into its purpose, methods, and practical findings, with an APA citation and links to related work. The knowledge base continuously **ingests open-access research** from arXiv, EdArXiv, and peer-reviewed journals — so you can track emerging findings on topics such as AI tutoring, assessment, AI literacy, feedback, and equity in AI education.

**AI in Education (AIED)** is the broad, interdisciplinary field that applies artificial intelligence to teaching and learning, and studies its design, use, evaluation, and consequences. It spans **AI for education** — using AI to improve instruction, assessment, and administration — and **education about AI** — building the AI literacy and critical understanding learners and educators need.
""")

# Use with AI
parts.append("""# Use This Knowledge Base with Your Own AI Assistant

This knowledge base is **agent-ready**: the full catalog and content are published as machine-readable text files that any AI chatbot, coding agent, or LLM tool can ingest. Give your assistant a link to the knowledge base and it can answer questions about AI in education research with citations back to the knowledge base. Before asking, check the FAQ section — it may already have answers to common questions.

**Quick start.** Point your AI assistant at one of these files — most tools can read a URL directly:

- `llms.txt` — complete catalog: every article and concept, one line each, with description
- `llms-full.txt` — full text of every article and concept page
- Sitemap — all page URLs
- RSS feed — latest additions

**Copy-paste prompt.** Paste this into your AI chatbot or agent to use the knowledge base as a research reference:

> You are a research assistant for AI in education. Use the AI in Education Knowledge Base as your knowledge base.
> 1. First fetch the catalog: https://edtechdev.github.io/aied/llms.txt (If you need full text of specific pages, fetch them from https://edtechdev.github.io/aied/llms-full.txt or the individual page URLs.)
> 2. When answering questions about AI in education research, ground your answer in articles and concepts from this knowledge base. Cite the knowledge base page title and URL for every claim you make from it.
> 3. If asked about a topic, synthesize across multiple related articles and concepts rather than relying on a single page. Mention when the knowledge base does not cover a topic instead of guessing.
> 4. Recommend related articles and concepts when relevant.

**Notes for agents.** The knowledge base covers AI in education research: tutoring, assessment, feedback, AI literacy, teacher AI competency, policy, and more. Articles include APA citations; the original paper links are in each citation. Concept pages synthesize the related articles — start there for overviews.
""")

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

The questions are grouped by the kinds of decisions people actually face: designing AI into the learning experience, developing educational AI software, incorporating AI literacy, redesigning assessment, reducing misuse, evaluating AI-related interventions, and the competencies faculty need. If you are new to the field, the FAQ on the top ten findings is a good place to start.

""")
for path in sorted(glob.glob(os.path.join(FAQS_DIR, '*.md'))):
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

    # Post-process: left-align TOC page/section names. Some readers center
    # nav.toc list items by default; force left alignment and undent lists.
    import zipfile, shutil
    css_rule = """

/* Left-align the EPUB table of contents (some readers center it by default). */
nav#toc, nav#toc ol, nav#toc li, nav#toc a {
  text-align: left;
}
nav#toc ol {
  list-style: none;
  margin: 0;
  padding-left: 1.2em;
}
nav#toc li {
  margin: 0.15em 0;
}
nav#toc > ol {
  padding-left: 0;
}
"""
    tmp = OUT + '.tmp'
    with zipfile.ZipFile(OUT, 'r') as zin, zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith('.css'):
                data += css_rule.encode('utf-8')
            zout.writestr(item, data)
    shutil.move(tmp, OUT)
    print(f"Built {OUT} ({os.path.getsize(OUT)} bytes)")
    return True


if __name__ == '__main__':
    build_epub()

