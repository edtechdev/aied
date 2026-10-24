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
  empty: '概念ページはまだありません。',
};

export default ja;
