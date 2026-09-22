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

const ko: SearchStrings = {
  title: '검색',
  h1: '검색',
  intro: '문서와 개념을 검색합니다. 필터를 사용해 결과를 좁히십시오.',
  corpusIntro:
    '지식베이스의 모든 내용을 검색하실 수 있습니다. FAQ와 무료 도구 및 리소스 페이지도 포함됩니다. 현재 수록된 항목은 다음과 같습니다:',
  placeholder: '문서, 개념, FAQ 검색...',
  filterLabels: {
    page_type: '유형',
    discipline: '분야',
    level: '수준',
    audience: '대상 독자',
    research_method: '연구 설계',
    page_kind: '페이지 종류',
  },
};

export default ko;