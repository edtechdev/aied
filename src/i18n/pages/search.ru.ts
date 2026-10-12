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

const ru: SearchStrings = {
  title: 'Поиск',
  h1: 'Поиск',
  intro: 'Поиск по статьям и концепциям. Используйте фильтры, чтобы сузить результаты.',
  corpusIntro:
    'В базе знаний можно найти всё — включая раздел FAQ, а также страницы бесплатных инструментов и ресурсов. Сейчас в ней есть:',
  placeholder: 'Поиск по статьям, концепциям и FAQ...',
  filterLabels: {
    page_type: 'Тип',
    discipline: 'Дисциплина',
    level: 'Уровень',
    audience: 'Целевая аудитория',
    research_method: 'Дизайн исследования',
    page_kind: 'Вид страницы',
  },
};

export default ru;
