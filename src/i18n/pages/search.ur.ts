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

const ur: SearchStrings = {
  title: 'تلاش',
  h1: 'تلاش',
  intro: 'مضامین اور تصورات میں تلاش کریں۔ نتائج کو محدود کرنے کے لیے فلٹر استعمال کریں۔',
  corpusIntro:
    'علمی ذخیرے میں موجود ہر چیز تلاش کے قابل ہے — بشمول عمومی سوالات اور مفت اوزار و وسائل کے صفحات۔ اس میں اس وقت یہ شامل ہے:',
  placeholder: 'مضامین، تصورات اور عمومی سوالات میں تلاش کریں…',
  filterLabels: {
    page_type: 'قسم',
    discipline: 'شعبہ',
    level: 'درجہ',
    audience: 'مطلوبہ سامعین',
    research_method: 'تحقیقی ڈیزائن',
    page_kind: 'صفحے کی قسم',
  },
};

export default ur;
