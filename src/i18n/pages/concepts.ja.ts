/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
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

const ja: ConceptsStrings = {
  title: '概念',
  h1: '概念',
  introHtml:
    'サイト内のすべての概念ページを、左のサイドバーと同じセクションに並べています。各ページでは、AIと教育におけるある考えが何を意味するのか、研究で何がわかったのか、どの研究に基づいているのかを説明しています。<a href="/aied/concepts/ai-education/">教育におけるAI</a>は、それらをまとめる親概念です。',
  browseHtml:
    '概念ページは<a href="/aied/aied.epub">EPUB</a>と<a href="/aied/aied.pdf">PDF</a>でも読めるので、オフラインでも読めます。質問や論文、ツール、検索、あるいは自分のアシスタントから始めたい場合は、<a href="/aied/faq">FAQ</a>、<a href="/aied/journal">ジャーナル</a>、<a href="/aied/resources">リソース</a>、<a href="/aied/search">検索</a>、<a href="/aied/ai">AIページ</a>をご覧ください。',
  countTemplate: '{count}件の概念ページを、{strands}のセクションに分けて掲載しています。',
  strandBlurbs: {
    'Foundations of AI in education':
      'この分野そのものを俯瞰する見取り図として、教育におけるAIとは何か、どのように発展してきたか、そして他のすべてのセクションを形づくる横断的なテーマ（AIリテラシー、人間とAIの協働、主体性）を示します。',
    'Learning and instruction':
      'AIが教育と学習をどのように支えるかを、AIがその中で働く教授法、学習理論、学習者に向けたプロセスを通して示します。',
    'Technologies and techniques':
      '技術の層として、教育技術を支えるAIのモデルと手法、そしてそれらに基づいて構築された学習者モデリングと個別指導のシステムを扱います。',
    'AI in the disciplines':
      'AIが学問分野や教育段階をまたいでどのように応用されているか、つまりこの分野の対象領域の広がりを示します。',
    'Assessment and measurement':
      'AIが学習者を評価する一方で、AIシステムとその影響をどう評価するかをも変えていく様子を示します。',
    'Equity, ethics, and responsible use':
      '公平性、アクセス、責任は、教育におけるAIの中心にあります。',
  },
  empty: '概念ページはまだありません。',
};

export default ja;
