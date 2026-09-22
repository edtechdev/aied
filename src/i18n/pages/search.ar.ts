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

const ar: SearchStrings = {
  title: 'البحث',
  h1: 'البحث',
  intro: 'ابحث في المقالات والمفاهيم. واستخدم المرشّحات لتضييق النتائج.',
  corpusIntro:
    'كل ما في قاعدة المعارف قابل للبحث — بما في ذلك الأسئلة الشائعة وصفحات الأدوات والموارد المجانية. وتضم الآن:',
  placeholder: 'ابحث في المقالات والمفاهيم والأسئلة الشائعة...',
  filterLabels: {
    page_type: 'النوع',
    discipline: 'التخصص',
    level: 'المستوى',
    audience: 'الجمهور المستهدَف',
    research_method: 'تصميم الدراسة',
    page_kind: 'نوع الصفحة',
  },
};

export default ar;