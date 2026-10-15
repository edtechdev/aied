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

const bg: SearchStrings = {
  title: 'Търсене',
  h1: 'Търсене',
  intro: 'Търсете сред статии и понятия. Използвайте филтрите, за да ограничите резултатите.',
  corpusIntro:
    'Всичко в базата знания може да бъде търсено — включително ЧЗВ и страниците с безплатни инструменти и ресурси. В момента тя съдържа:',
  placeholder: 'Търсете статии, понятия и ЧЗВ...',
  filterLabels: {
    page_type: 'Тип',
    discipline: 'Дисциплина',
    level: 'Ниво',
    audience: 'Целева аудитория',
    research_method: 'Дизайн на проучването',
    page_kind: 'Вид страница',
  },
};

export default bg;
