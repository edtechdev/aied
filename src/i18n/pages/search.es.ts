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
  title: 'Buscar',
  h1: 'Buscar',
  intro: 'Busca en artículos y conceptos. Usa los filtros para acotar los resultados.',
  corpusIntro:
    'Todo el contenido de la base de conocimiento se puede buscar, incluidas las preguntas frecuentes y las páginas de herramientas y recursos gratuitos. En la actualidad contiene:',
  placeholder: 'Busca artículos, conceptos y preguntas frecuentes...',
  filterLabels: {
    page_type: 'Tipo',
    discipline: 'Disciplina',
    level: 'Nivel',
    audience: 'Público destinatario',
    research_method: 'Diseño del estudio',
    page_kind: 'Tipo de página',
  },
};

export default en;