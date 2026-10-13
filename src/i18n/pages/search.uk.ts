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

const uk: SearchStrings = {
  title: 'Пошук',
  h1: 'Пошук',
  intro: 'Пошук по статтях і концепціях. Використовуйте фільтри, щоб звузити результати.',
  corpusIntro:
    'Усе в базі знань доступне для пошуку — зокрема поширені питання та сторінки безкоштовних інструментів і ресурсів. Зараз вона містить:',
  placeholder: 'Пошук статей, концепцій і поширених питань...',
  filterLabels: {
    page_type: 'Тип',
    discipline: 'Дисципліна',
    level: 'Рівень',
    audience: 'Цільова аудиторія',
    research_method: 'Дизайн дослідження',
    page_kind: 'Вид сторінки',
  },
};

export default uk;
