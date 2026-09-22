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

const en: SearchStrings = {
  title: '搜索',
  h1: '搜索',
  intro: '在文章和概念中搜索。用筛选项缩小结果范围。',
  corpusIntro:
    '知识库中的所有内容都可以搜索，包括常见问题页面和免费工具与资源页面。它目前包含：',
  placeholder: '搜索文章、概念和常见问题……',
  filterLabels: {
    page_type: '类型',
    discipline: '学科',
    level: '层次',
    audience: '目标读者',
    research_method: '研究设计',
    page_kind: '页面类别',
  },
};

export default en;