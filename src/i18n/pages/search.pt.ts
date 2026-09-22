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

const pt: SearchStrings = {
  title: 'Buscar',
  h1: 'Buscar',
  intro: 'Busque em artigos e conceitos. Use os filtros para refinar os resultados.',
  corpusIntro:
    'Tudo na base de conhecimento é pesquisável — incluindo as perguntas frequentes e as páginas de ferramentas e recursos gratuitos. Atualmente ela contém:',
  placeholder: 'Busque artigos, conceitos e perguntas frequentes...',
  filterLabels: {
    page_type: 'Tipo',
    discipline: 'Disciplina',
    level: 'Nível',
    audience: 'Público-alvo',
    research_method: 'Desenho do estudo',
    page_kind: 'Tipo de página',
  },
};

export default pt;
