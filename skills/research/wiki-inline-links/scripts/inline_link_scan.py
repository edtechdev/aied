#!/usr/bin/env python3
"""Dictionary-driven inline-link scanner for the AI Ed Wiki.

Scans the NARRATIVE body (between frontmatter and ## Connected) of the given
article/concept pages and reports concept mentions that are mentioned in the
text but NOT yet wrapped in a [[wikilink]] — so the agent can add them.

Usage:
    python3 inline_link_scan.py <wiki_path> [slug1 slug2 ...]   # specific pages
    python3 inline_link_scan.py <wiki_path> --all               # every article+concept

Rules honoured:
  - Narrative-only (ignores frontmatter and ## Connected* sections)
  - Skips mentions already inside a [[...]] link
  - Skips the page's own slug (self-link)
  - Skips terms that resolve to a non-existent slug
  - First-occurrence suggestion only (avoid spam)

The output is advisory: the agent still must apply each [[slug|display]] link
tastefully, preserving capitalization and using plain [[slug]] when display==slug.
"""
import os, re, sys

def load_concepts(wiki):
    concepts = {}
    for f in os.listdir(f'{wiki}/concepts'):
        if not f.endswith('.md'):
            continue
        slug = f[:-3]
        txt = open(f'{wiki}/concepts/{f}', encoding='utf-8').read()
        m = re.search(r'^title:\s*["\']?(.*?)["\']?\s*$', txt, re.M)
        concepts[slug] = m.group(1) if m else slug
    return concepts

# term -> slug alias table (extend as concepts grow; slug must exist to be used)
ALIASES = {
    'critical-thinking': ['critical thinking', 'critical analysis', 'critical evaluation',
                          'higher-order thinking', 'independent thinking'],
    'ai-literacy': ['ai literacy', 'digital literacy', 'responsible ai use', 'conscious ai use'],
    'problem-based-learning': ['problem-based learning', 'problem based learning'],
    'project-based-learning': ['project-based learning', 'project based learning'],
    'self-directed-learning': ['self-directed learning', 'self-directed'],
    'self-regulated-learning': ['self-regulated learning', 'self-regulation', 'strategic regulation'],
    'self-efficacy': ['self-efficacy', 'self-confidence'],
    'cognitive-offloading': ['cognitive offloading', 'cognitive load', 'cognitive-load theory',
                             'over-reliance', 'overreliance'],
    'scaffolding': ['scaffolding', 'scaffold', 'adaptive scaffolding'],
    'generative-ai': ['generative ai', 'generative artificial intelligence', 'genai', 'gai'],
    'student-engagement': ['student engagement', 'engagement'],
    'feedback': ['feedback', 'feedback loops'],
    'assessment': ['assessment', 'assessments', 'take-home assessments'],
    'authentic-assessment': ['authentic assessment', 'authentic evaluation'],
    'formative-assessment': ['formative assessment'],
    'summative-assessment': ['summative assessment'],
    'automated-assessment': ['automated assessment', 'automated grading', 'automated scoring'],
    'peer-review': ['peer review', 'peer feedback'],
    'academic-integrity': ['academic integrity', 'scientific integrity', 'plagiarism', 'academic dishonesty'],
    'plagiarism-detection': ['plagiarism detection', 'ai text detection', 'detection'],
    'ethics': ['ethical', 'ethical considerations', 'ethics'],
    'agency': ['learner agency', 'agency'],
    'motivation': ['motivation'],
    'metacognition': ['metacognitive', 'metacognition'],
    'higher-ed': ['higher education', 'undergraduate', 'undergraduates', 'college students'],
    'k-12': ['k-12', 'secondary', 'junior high', 'eighth grade'],
    'pedagogical-agent': ['pedagogical agent', 'chatbot', 'chatbots', 'learning partner'],
    'simulation': ['simulation', 'simulations', 'virtual patient', 'virtual laboratory'],
    'medical-education': ['medical education', 'medical school'],
    'engineering-education': ['engineering education', 'biomedical engineering'],
    'computational-thinking': ['computational thinking'],
    'collaborative-learning': ['collaborative', 'collaborative learning', 'collaboration',
                               'interprofessional'],
    'active-learning': ['active learning'],
    'intelligent-tutoring': ['intelligent tutoring', 'intelligent tutoring systems', 'ai tutors', 'tutors'],
    'agentic-ai': ['agentic ai', 'ai agents', 'agent'],
    'constructivist': ['constructivism', 'constructivist'],
    'desirable-difficulties': ['desirable difficulties', 'desirable difficulty', 'productive struggle',
                              'productive friction', 'cognitive friction'],
    'prior-knowledge': ['prior knowledge', 'prior-knowledge', 'prior knowledge state', 'activate prior knowledge',
                        'activation of prior knowledge', 'prior knowledge activation'],
    'network-analysis': ['network analysis', 'epistemic network analysis', 'social network analysis',
                        'transition network analysis', 'epistemic network', 'transition network',
                        'social network', 'ena', 'sna', 'tna'],
    'ai-education': ['ai in education', 'ai education'],
    'privacy': ['privacy'],
    'trust': ['trust'],
    'bias-mitigation': ['bias mitigation'],
    'learning-analytics': ['learning analytics'],
    'technology-acceptance-model': ['technology acceptance model', 'technology adoption model', 'technology adoption', 'utaut', 'diffusion of innovation', 'technology organisation environment', 'theory of planned behavior'],
    'hallucination-risk': ['hallucination risk', 'hallucinations'],
    'educational-robotics': ['robotics', 'robotic tasks', 'educational robotics', 'robots'],
    'community-of-inquiry': ['community of inquiry', 'coi', 'cognitive presence', 'social presence', 'teaching presence', 'community of inquiry framework'],
    'curriculum-design': ['curriculum', 'curriculum design'],
    'human-ai-collaboration': ['human-ai collaboration', 'human-ai interaction',
                               'human-computer interaction', 'human collaboration'],
    'lifelong-learning': ['lifelong learning'],
    'pedagogy': ['pedagogy', 'pedagogical'],
    'business-education': ['business education', 'business schools', 'business school', 'business degree'],
    'eportfolio': ['e-portfolio', 'eportfolio', 'portfolio assessment', 'portfolios'],
    'educational-policy-ai': ['ai policy', 'ai policies', 'institutional policy', 'genai policy', 'policy'],
    'governance': ['governance', 'institutional'],
    'design-thinking': ['design thinking'],
    'creativity': ['creativity', 'creative'],
    'writing-education': ['academic writing', 'writing', 'composition'],
    'language-learning': ['english', 'efl', 'second language', 'foreign language'],
    'experiential-learning': ['experiential learning'],
    'adaptive-learning': ['adaptive testing', 'adaptive learning'],
    'personalized-learning': ['personalized learning', 'personalised learning'],
    'cs-education': ['computer science', 'computer science education'],
    'teacher-role': ['instructors', 'instructor', 'faculty', 'teachers', 'educators', 'role of educators'],
    'faculty-development': ['professional development', 'staff development', 'faculty development'],
    'digital-divide': ['digital divide', 'digital inequality', 'digital access'],
    'student-experience': ['student accountability', 'student experience', 'student experiences'],
    'equity-in-ai-education': ['equity', 'educational equity', 'equity concerns'],
}

def get_narrative(txt):
    if txt.startswith('---'):
        parts = txt.split('\n---\n', 1)
        txt = parts[1] if len(parts) > 1 else txt
    m = re.search(r'\n## Connected', txt)
    return txt[:m.start()] if m else txt

def scan(wiki, slug, is_article, concepts):
    path = f'{wiki}/{"articles" if is_article else "concepts"}/{slug}.md'
    txt = open(path, encoding='utf-8').read()
    nar = get_narrative(txt)
    linked = set(re.findall(r'\[\[([^\]|]+)', nar))
    term2slug = {}
    for tgt, terms in ALIASES.items():
        if tgt not in concepts:
            continue
        for t in terms:
            tl = t.lower().strip()
            if len(tl) >= 4:
                term2slug[tl] = tgt
    for tgt, title in concepts.items():
        term2slug[tgt.lower()] = tgt
        if title.lower() not in term2slug and len(title) >= 4:
            term2slug[title.lower()] = tgt
    found = {}
    for term in sorted(term2slug, key=lambda x: -len(x)):
        tgt = term2slug[term]
        if tgt == slug or tgt in linked:
            continue
        for m in re.finditer(r'(?<![a-zA-Z])' + re.escape(term) + r'(?![a-zA-Z])', nar, re.I):
            found.setdefault(tgt, []).append(term)
    return {k: sorted(set(v)) for k, v in found.items()}

def main():
    if len(sys.argv) < 3:
        print(__doc__); sys.exit(1)
    wiki = sys.argv[1]
    concepts = load_concepts(wiki)
    pages = []
    if sys.argv[2] == '--all':
        for d in ['articles', 'concepts']:
            for f in os.listdir(f'{wiki}/{d}'):
                if f.endswith('.md'):
                    pages.append((f[:-3], d == 'articles'))
    else:
        for s in sys.argv[2:]:
            is_art = os.path.exists(f'{wiki}/articles/{s}.md')
            is_con = os.path.exists(f'{wiki}/concepts/{s}.md')
            if is_art: pages.append((s, True))
            elif is_con: pages.append((s, False))
            else: print(f"(skip {s}: not found)")
    for slug, is_article in pages:
        try:
            found = scan(wiki, slug, is_article, concepts)
        except Exception as e:
            print(f"ERROR {slug}: {e}"); continue
        if found:
            print(f"\n=== {slug} ===")
            for tgt, terms in found.items():
                print(f"  -> [[{tgt}]]  from: {', '.join(terms)}")

if __name__ == '__main__':
    main()
