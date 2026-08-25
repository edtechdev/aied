#!/usr/bin/env python3
"""Dictionary-driven inline-link scanner + auto-applier for the AI Ed Wiki.

Scans the NARRATIVE body (between frontmatter and ## Connected) of the given
article/concept pages and reports concept mentions that are mentioned in the
text but NOT yet wrapped in a [[wikilink]].

Two modes:
    REPORT  (default) — prints suggestions so the agent can review them.
    --apply          — AUTOMATICALLY inserts the first clean occurrence of each
                       unlinked concept mention as a [[wikilink]]. Safe rules:
                       narrative-only, no links in headings, no self-links,
                       no re-linking already-linked terms, first-occurrence only,
                       capitalization preserved via piped links.

Usage:
    python3 inline_link_scan.py <wiki_path> [slug1 slug2 ...]   # specific pages
    python3 inline_link_scan.py <wiki_path> --all               # every article+concept
    python3 inline_link_scan.py <wiki_path> --all --apply       # auto-insert links
    python3 inline_link_scan.py <wiki_path> slug1 slug2 --apply

Rules honoured (both modes):
  - Narrative-only (ignores frontmatter and ## Connected* sections)
  - Skips mentions already inside a [[...]] link
  - Skips the page's own slug (self-link)
  - Skips terms that resolve to a non-existent slug
  - First-occurrence only (avoid spam)

Why --apply exists:
  The single most common reason inline links go missing is that the reporter
  output is advisory and the human/agent skips applying some suggestions.
  --apply makes the pass deterministic and complete: every unlinked concept
  mention that resolves to an existing page gets linked on its first clean
  occurrence. Run it after EVERY new/enriched page, before build/deploy.
"""
import os, re, sys, json

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

# term -> slug alias table (extend as concepts grow; slug must exist to be used).
# Kept deliberately broad with conceptually-similar phrases so the scanner links
# not just exact concept names but the phrasings authors actually use.
ALIASES = {
    'critical-thinking': ['critical thinking', 'critical analysis', 'critical evaluation',
                          'higher-order thinking', 'higher order thinking', 'analytical thinking', 'reasoning'],
    'ai-literacy': ['ai literacy', 'artificial intelligence literacy', 'digital literacy',
                    'responsible ai use', 'conscious ai use', 'ai competence'],
    'problem-based-learning': ['problem-based learning', 'problem based learning', 'pbl'],
    'project-based-learning': ['project-based learning', 'project based learning'],
    'self-directed-learning': ['self-directed learning', 'self directed learning', 'self-directed'],
    'self-regulated-learning': ['self-regulated learning', 'self regulated learning', 'self-regulation',
                                'self regulated', 'strategic regulation'],
    'self-efficacy': ['self-efficacy', 'self efficacy', 'self-confidence', 'self confidence'],
    'cognitive-offloading': ['cognitive offloading', 'cognitive load', 'cognitive-load theory',
                             'over-reliance', 'overreliance', 'over reliance'],
    'scaffolding': ['scaffolding', 'scaffold', 'scaffolds', 'adaptive scaffolding', 'fading'],
    'generative-ai': ['generative ai', 'generative artificial intelligence', 'genai', 'gai'],
    'student-engagement': ['student engagement', 'engagement', 'learner engagement'],
    'feedback': ['feedback', 'feedback loop', 'feedback loops'],
    'assessment': ['assessment', 'assessments', 'take-home assessments'],
    'authentic-assessment': ['authentic assessment', 'authentic evaluation', 'authentic tasks'],
    'formative-assessment': ['formative assessment', 'formative'],
    'summative-assessment': ['summative assessment', 'summative'],
    'automated-assessment': ['automated assessment', 'automated grading', 'automated scoring', 'ai grading'],
    'peer-review': ['peer review', 'peer assessment', 'peer feedback'],
    'academic-integrity': ['academic integrity', 'scientific integrity', 'plagiarism', 'academic dishonesty'],
    'plagiarism-detection': ['plagiarism detection', 'ai text detection', 'detection', 'ai detection'],
    'ethics': ['ethical', 'ethical considerations', 'ethics'],
    'agency': ['learner agency', 'student agency', 'agency', 'user agency'],
    'motivation': ['motivation', 'motivational', 'intrinsic motivation', 'extrinsic motivation'],
    'metacognition': ['metacognitive', 'metacognition', 'meta-cognition', 'meta-cognitive'],
    'higher-ed': ['higher education', 'higher-ed', 'university', 'universities', 'postsecondary',
                  'post-secondary', 'college', 'undergraduate', 'undergraduates', 'college students', 'tertiary'],
    'k-12': ['k-12', 'secondary', 'junior high', 'eighth grade', 'primary school', 'elementary',
             'middle school', 'secondary school', 'high school'],
    'pedagogical-agent': ['pedagogical agent', 'learning partner', 'learning companion'],
    'simulation': ['simulation', 'simulations', 'virtual patient', 'virtual laboratory', 'virtual lab',
                   'virtual reality', 'augmented reality', 'virtual environment', 'immersive'],
    'medical-education': ['medical education', 'medical school', 'medicine', 'health professions', 'clinical'],
    'engineering-education': ['engineering education', 'biomedical engineering'],
    'computational-thinking': ['computational thinking', 'computational skills'],
    'collaborative-learning': ['collaborative', 'collaborative learning', 'collaboration', 'interprofessional'],
    'active-learning': ['active learning'],
    'intelligent-tutoring': ['intelligent tutoring', 'intelligent tutoring system', 'intelligent tutoring systems',
                             'ai tutors', 'ai tutor', 'tutoring system', 'tutors'],
    'agentic-ai': ['agentic ai', 'ai agents', 'ai agent', 'autonomous agents', 'agent', 'agents'],
    'constructivist': ['constructivism', 'constructivist', 'constructionism'],
    'desirable-difficulties': ['desirable difficulties', 'desirable difficulty', 'productive struggle',
                              'productive friction', 'cognitive friction'],
    'prior-knowledge': ['prior knowledge', 'prior-knowledge', 'prior knowledge state', 'activate prior knowledge',
                        'activation of prior knowledge', 'prior knowledge activation'],
    'network-analysis': ['network analysis', 'epistemic network analysis', 'social network analysis',
                        'transition network analysis', 'epistemic network', 'transition network',
                        'social network', 'ena', 'sna', 'tna'],
    'ai-education': ['ai in education', 'ai education', 'aied', 'artificial intelligence in education'],
    'privacy': ['privacy', 'data privacy'],
    'trust': ['trust', 'trustworthiness'],
    'bias-mitigation': ['bias mitigation', 'algorithmic bias', 'algorithmic fairness', 'bias', 'fairness'],
    'learning-analytics': ['learning analytics'],
    'technology-acceptance-model': ['technology acceptance model', 'technology adoption model', 'technology adoption',
                                    'utaut', 'diffusion of innovation', 'technology organisation environment',
                                    'theory of planned behavior'],
    'hallucination-risk': ['hallucination risk', 'hallucinations'],
    'community-of-inquiry': ['community of inquiry', 'coi', 'cognitive presence', 'social presence',
                             'teaching presence', 'community of inquiry framework'],
    'curriculum-design': ['curriculum', 'curriculum design', 'curricular'],
    'human-ai-collaboration': ['human-ai collaboration', 'human-ai interaction', 'human-AI interaction',
                               'human-computer interaction', 'human collaboration', 'human-machine collaboration'],
    'lifelong-learning': ['lifelong learning', 'life-long learning'],
    'pedagogy': ['pedagogy', 'pedagogical', 'pedagogies', 'teaching practice', 'teaching practices'],
    'business-education': ['business education', 'business schools', 'business school', 'business degree',
                           'management education', 'economics education'],
    'eportfolio': ['e-portfolio', 'eportfolio', 'portfolio assessment', 'portfolios', 'portfolio'],
    'educational-policy-ai': ['ai policy', 'ai policies', 'institutional policy', 'genai policy', 'policy',
                              'educational policy'],
    'governance': ['governance', 'institutional'],
    'design-thinking': ['design thinking'],
    'creativity': ['creativity', 'creative', 'creative thinking'],
    'writing-education': ['academic writing', 'writing', 'composition', 'writing quality', 'writing instruction'],
    'language-learning': ['english', 'efl', 'esl', 'tefl', 'second language', 'foreign language',
                          'second language acquisition', 'language acquisition', 'language learning'],
    'experiential-learning': ['experiential learning'],
    'adaptive-learning': ['adaptive testing', 'adaptive learning', 'adaptive systems'],
    'personalized-learning': ['personalized learning', 'personalised learning', 'personalization', 'adaptive learning path'],
    'cs-education': ['computer science', 'computer science education', 'programming education'],
    'teacher-role': ['instructors', 'instructor', 'faculty', 'teachers', 'educators', 'role of educators',
                     'teacher role', 'teaching role'],
    'faculty-development': ['professional development', 'staff development', 'faculty development'],
    'digital-divide': ['digital divide', 'digital inequality', 'digital access'],
    'student-experience': ['student accountability', 'student experience', 'student experiences', 'learner experience'],
    'equity-in-ai-education': ['equity', 'educational equity', 'equity concerns', 'equitable'],
    'educational-measurement': ['educational measurement', 'psychometrics', 'psychometric modeling',
                                'measurement theory', 'measurement practice', 'test theory'],
    'assessment-validity': ['construct validity', 'validity', 'validation'],
    'ai-ed-evaluation': ['ai evaluation', 'evaluation of ai', 'aied evaluation', 'efficacy evaluation'],
    'math-education': ['mathematics', 'math education'],
    'physics-education': ['physics'],
    'biology-education': ['biology', 'biological'],
    'chemistry-education': ['chemistry'],
    'english-education': ['english education', 'english as a foreign language'],
    'teacher-education': ['teacher training', 'teacher education', 'preservice teachers', 'preservice',
                          'initial teacher'],
    'professional-training': ['professional training', 'vocational training'],
    'learning-gains': ['learning gains', 'learning outcomes', 'achievement', 'academic achievement', 'academic performance'],
    'research-methods-aied': ['research methods', 'methodological', 'study design'],
    'limitations-in-aied-research': ['limitations', 'limitation'],
    'meta-analysis-systematic-review': ['systematic review', 'meta-analysis', 'meta-analytic', 'systematically review',
                                        'scoping review', 'literature review'],
    'student-misconceptions-ai': ['misconceptions', 'misconception'],
    'icap-framework': ['icap', 'interactive-constructive-active-passive'],
    'item-response-theory': ['item response theory', 'irt', 'classical test theory', 'ctt'],
    'psychometrically-aware-ai': ['psychometrically aware', 'psychometric awareness'],
    'automated-essay-scoring': ['automated essay scoring', 'automated writing evaluation', 'awe'],
    'automated-question-generation': ['item generation', 'question generation', 'item writing'],
    'cognitive-diagnosis': ['cognitive diagnosis', 'diagnostic inference', 'cognitive diagnostic'],
    'simulating-students': ['simulated students', 'student simulation', 'simulate learners'],
    'student-modeling': ['student modeling', 'learner modeling'],
    'knowledge-tracing': ['knowledge tracing', 'bayesian knowledge tracing'],
    'reinforcement-learning': ['reinforcement learning', 'machine learning', 'rl'],
    'multimodal': ['multimodal', 'multi-modal'],
    'educational-nlp': ['natural language processing', 'nlp', 'text analysis'],
    'knowledge-graph': ['knowledge graph'],
    'rag': ['retrieval-augmented', 'retrieval augmented', 'rag'],
    'prompt-engineering': ['prompt engineering', 'prompting', 'prompt design', 'prompting strategy'],
    'conversational-ai': ['conversational ai', 'conversational agent', 'dialogue system',
                          'chatbot', 'chatbots'],
    'pedagogical-llm-training': ['llm training', 'pedagogical training', 'model training'],
    'student-ai-interaction': ['student-ai interaction', 'student ai interaction', 'ai interaction'],
    'affective-computing': ['affective computing', 'emotion detection', 'affective'],
    'affective-tutoring': ['affective tutoring', 'emotion-aware'],
    'well-being': ['well-being', 'wellbeing', 'well being'],
    'social-emotional-learning': ['social-emotional learning', 'social emotional learning', 'sel'],
    'self-determination-theory': ['self-determination theory', 'self determination'],
    'tpack': ['tpack', 'technological pedagogical content knowledge'],
    'teacher-ai-competency': ['teacher ai competency', 'teacher ai competence', 'ai competency'],
    'socratic-method': ['socratic', 'socratic questioning', 'socratic method', 'socratic dialogue'],
    'inquiry-based-learning': ['inquiry-based learning', 'inquiry based learning', 'inquiry learning'],
    'storytelling-in-education': ['storytelling'],
    'game-based-learning': ['game-based learning', 'gamification', 'gamified', 'serious games', 'games'],
    'online-teaching-and-learning': ['online learning', 'online teaching', 'distance learning', 'e-learning', 'e learning'],
    'distributed-cognition': ['distributed cognition'],
    'embodied-learning': ['embodied', 'embodied learning'],
    'sociocultural-learning': ['sociocultural', 'socio-cultural', 'zone of proximal development', 'zpd'],
    'situated-learning': ['situated learning', 'situated'],
    'transfer-of-learning': ['transfer', 'knowledge transfer', 'learning transfer'],
    'help-seeking': ['help seeking', 'help-seeking', 'hint seeking'],
    'productive-failure': ['productive failure', 'productive persistence'],
    'reducing-ai-misuse': ['reduce ai misuse', 'reducing ai misuse', 'ai misuse prevention'],
    'ai-misuse-learning-harm': ['ai misuse', 'misuse of ai'],
    'framing-ai-use-for-students': ['framing ai', 'ai use framing'],
    'ai-sycophancy': ['sycophancy', 'sycophantic'],
    'philosophy-of-ai-in-education': ['philosophy of ai', 'philosophical'],
    'history-of-aied': ['history of aied', 'history of ai in education', 'decade'],
    'theory-development-aied': ['theory development', 'theory building'],
    'learning-theories': ['learning theories', 'learning theory', 'learning science'],
    'critical-pedagogy': ['critical pedagogy', 'critical education'],
    'culturally-relevant-pedagogy': ['culturally relevant', 'culturally responsive', 'culturally sustaining'],
    'universal-design-for-learning': ['universal design for learning', 'udl'],
    'accessibility': ['accessibility', 'accessible'],
    'inclusive-learning': ['inclusive', 'inclusive learning', 'inclusion'],
    'neurodiversity': ['neurodiversity', 'neurodivergent', 'autism', 'adhd'],
    'special-education': ['special education', 'special needs'],
    'global-south': ['global south', 'developing countries', 'low-income countries', 'majority world'],
    'multilingual-learning': ['multilingual', 'multilingualism', 'bilingual'],
    'regulation': ['regulation', 'regulatory'],
    'stakeholders': ['stakeholders', 'stakeholder'],
    'administrator': ['administrators', 'admin', 'administration'],
    'adult-learning': ['adult learning', 'adult education'],
    'stem-education': ['stem education', 'stem', 'science education'],
    'humanities-education': ['humanities'],
    'discipline-specific-aied': ['discipline-specific', 'domain-specific', 'subject-specific'],
    'mixed-methods-research': ['mixed methods', 'mixed-methods'],
    'qualitative-research': ['qualitative', 'qualitative research'],
    'quantitative-research': ['quantitative', 'quantitative research'],
    'design-based-research': ['design-based research', 'design based research', 'dbr'],
    'rct': ['randomized controlled trial', 'randomised controlled trial', 'randomized trial', 'rcts', 'rct'],
    'usability-research': ['usability', 'user experience', 'ux'],
    'edtech-platform': ['edtech platform', 'platform', 'lms'],
    'open-source': ['open source', 'open-source', 'open access'],
    'benchmark': ['benchmark', 'benchmarks'],
    'feedback-literacy': ['feedback literacy'],
    'ai-feedback-quality': ['feedback quality', 'ai feedback'],
    'human-in-the-loop-ai': ['human oversight', 'human in the loop', 'human-in-the-loop', 'human review',
                             'human moderation', 'human judgment'],
    'trust-calibration': ['trust calibration', 'calibrated trust', 'over-trust', 'overtrust'],
    'educational-robotics': ['educational robotics', 'robotics', 'robots', 'human-robot', 'robot'],
}

def get_narrative(txt):
    if txt.startswith('---'):
        parts = txt.split('\n---\n', 1)
        txt = parts[1] if len(parts) > 1 else txt
    m = re.search(r'\n## Connected', txt)
    return txt[:m.start()] if m else txt

def is_in_link(nar, pos):
    # True if position pos is inside an existing [[...]] link
    before = nar[:pos]
    return before.rfind('[[') > before.rfind(']]')

# Ambiguous generic terms that need human judgment in context. These are still
# REPORTED in default mode (so the agent can decide) but are NOT auto-applied by
# --apply, to avoid wrong links (e.g. "reasoning" usually ≠ critical-thinking;
# "transfer" may be file/credit transfer; "English" is often just the language).
# Each entry is the lowercased alias term.
AUTO_APPLY_DENYLIST = {
    'reasoning', 'transfer', 'english', 'games', 'bias', 'assessment', 'assessments',
    'feedback', 'policy', 'agency', 'trust', 'privacy', 'motivation', 'writing',
    'collaboration', 'collaborative', 'creative', 'inclusive', 'accessible',
    'limitations', 'limitation', 'decade', 'validity', 'validation', 'platform',
    'detection', 'agents', 'agent', 'tutors', 'robotics', 'robots', 'robot',
    'instructors', 'instructor', 'faculty', 'teachers', 'educators', 'secondary',
    'undergraduate', 'undergraduates', 'college students', 'tertiary', 'university',
    'universities', 'college', 'primary school', 'elementary', 'high school',
    'achievement', 'stakeholder', 'stakeholders', 'administrators', 'admin',
}

def build_term2slug(concepts, slug):
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
    return term2slug

def line_has_heading_at(nar, pos):
    # True if the line containing pos starts with '#' (heading line) — such
    # positions must never be linked.
    ls = nar.rfind('\n', 0, pos) + 1
    le = nar.find('\n', pos)
    le = len(nar) if le == -1 else le
    return nar[ls:le].lstrip().startswith('#')

def find_mentions(nar, slug, concepts, apply_mode=False):
    term2slug = build_term2slug(concepts, slug)
    linked = set(re.findall(r'\[\[([^\]|]+)', nar))
    found = {}
    for term in sorted(term2slug, key=lambda x: -len(x)):
        tgt = term2slug[term]
        if tgt == slug or tgt in linked:
            continue
        if apply_mode and term in AUTO_APPLY_DENYLIST:
            continue
        for m in re.finditer(r'(?<![a-zA-Z])' + re.escape(term) + r'(?![a-zA-Z])', nar, re.I):
            if line_has_heading_at(nar, m.start()):
                continue
            if is_in_link(nar, m.start()):
                continue
            found.setdefault(tgt, []).append((term, m.start()))
            break  # first occurrence only
    return found

def apply_links(path, slug, concepts, dry_run=True):
    txt = open(path, encoding='utf-8').read()
    if not txt.startswith('---'):
        return 0, [], txt
    parts = txt.split('\n---\n', 1)
    if len(parts) < 2:
        return 0, [], txt
    fm, body = parts[0] + '\n---\n', parts[1]
    m = re.search(r'\n## Connected', body)
    nar_end = m.start() if m else len(body)
    nar = body[:nar_end]
    tail = body[nar_end:]
    found = find_mentions(nar, slug, concepts, apply_mode=not dry_run)
    # apply replacements from END to START to keep positions valid
    edits = []
    for tgt, occs in found.items():
        term, pos = occs[0]
        # re-check not in link in the live nar
        if is_in_link(nar, pos):
            continue
        # determine display: use the actual matched text preserving case
        match = re.match(r'(?<![a-zA-Z])' + re.escape(term) + r'(?![a-zA-Z])', nar[pos:], re.I)
        disp = match.group(0) if match else term
        new = f'[[{tgt}|{disp}]]' if disp.lower() != tgt.lower() else f'[[{tgt}]]'
        edits.append((pos, len(term), new, disp, tgt))
    edits.sort(key=lambda e: -e[0])
    if dry_run:
        return len(edits), edits, txt
    for pos, length, new, disp, tgt in edits:
        nar = nar[:pos] + new + nar[pos+length:]
    open(path, 'w', encoding='utf-8').write(fm + nar + tail)
    return len(edits), edits, txt

def main():
    if len(sys.argv) < 3:
        print(__doc__); sys.exit(1)
    wiki = sys.argv[1]
    concepts = load_concepts(wiki)
    args = sys.argv[2:]
    apply_mode = '--apply' in args
    args = [a for a in args if a != '--apply']
    pages = []
    if args and args[0] == '--all':
        for d in ['articles', 'concepts', 'faqs']:
            dd = f'{wiki}/{d}'
            if not os.path.isdir(dd):
                continue
            for f in os.listdir(dd):
                if f.endswith('.md'):
                    pages.append((f[:-3], d))
    else:
        for s in args:
            for d in ['articles', 'concepts', 'faqs']:
                if os.path.exists(f'{wiki}/{d}/{s}.md'):
                    pages.append((s, d))
                    break
            else:
                print(f"(skip {s}: not found)")
    total_applied = 0
    for slug, d in pages:
        path = f'{wiki}/{d}/{slug}.md'
        try:
            n, edits, _ = apply_links(path, slug, concepts, dry_run=not apply_mode)
        except Exception as e:
            print(f"ERROR {slug}: {e}"); continue
        if apply_mode:
            if n:
                print(f"  {slug}: applied {n} link(s)")
                total_applied += n
        else:
            if edits:
                print(f"\n=== {slug} ===")
                seen = {}
                for pos, length, new, disp, tgt in edits:
                    print(f"  -> [[{tgt}]]  from: {disp}")
    if apply_mode:
        print(f"\nTotal links applied across {len(pages)} page(s): {total_applied}")

if __name__ == '__main__':
    main()
