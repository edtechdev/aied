/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const en: ConceptsStrings = {
  title: 'Concepts',
  h1: 'Concepts',
  introHtml:
    'Every concept page on the site, in the same sections as the left sidebar. Each one says what an idea in AI and education means, what the research found about it, and which studies it draws on. <a href="/aied/concepts/ai-education/">AI in Education</a> is the umbrella that ties them together.',
  browseHtml:
    'The concept pages also come as an <a href="/aied/aied.epub">EPUB</a> or <a href="/aied/aied.pdf">PDF</a> for reading offline. To start from a question, a paper, a tool, a search, or your own assistant instead, see the <a href="/aied/faq">FAQ</a>, the <a href="/aied/journal">journal</a>, the <a href="/aied/resources">resources</a>, <a href="/aied/search">search</a>, or the <a href="/aied/ai">AI page</a>.',
  countTemplate: '{count} concept pages, grouped into {strands} sections.',
  strandBlurbs: {
    'Foundations of AI in education':
      'The umbrella view of the field itself: what AI in education is, how it evolved, and the cross-cutting themes (AI literacy, human-AI collaboration, agency) that shape every other strand.',
    'Learning and instruction':
      'How AI supports teaching and learning, through the pedagogies, learning theories, and learner-facing processes AI operates within.',
    'Technologies and techniques':
      'The technical layer: the AI models and methods that power education technology, and the learner-modeling and tutoring systems built on them.',
    'AI in the disciplines':
      'How AI is applied across academic subjects and educational levels: the field\u2019s subject-area coverage.',
    'Assessment and measurement':
      'How AI both assesses learners and reshapes how we evaluate AI systems and their impact.',
    'Equity, ethics, and responsible use':
      'Fairness, access, and responsibility are central to AI in education.',
  },
  empty: 'No concept pages yet.',
};

export default en;
