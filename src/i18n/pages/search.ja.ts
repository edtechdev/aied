/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const ja: SearchStrings = {
  title: '検索',
  h1: '検索',
  intro: '記事と概念を横断して検索できます。フィルターで結果を絞り込んでください。',
  corpusIntro:
    'ナレッジベースの内容はすべて検索できます。FAQや無料のツール・リソースのページも含まれます。現在の収録数は次のとおりです：',
  placeholder: '記事、概念、FAQを検索...',
  filterLabels: {
    page_type: '種類',
    discipline: '分野',
    level: 'レベル',
    audience: '対象読者',
    research_method: '研究デザイン',
    page_kind: 'ページ種別',
  },
};

export default ja;
