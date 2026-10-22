/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const pt: NotFoundStrings = {
  title: 'Página não encontrada',
  h1: 'Página não encontrada',
  messageHtml:
    'Não encontramos a página que você pediu. O link que trouxe você até aqui pode estar desatualizado, ou a página pode ter sido renomeada. Você pode começar de novo a partir da <a href="/aied/">página inicial</a>.',
  searchHtml:
    'Ou pesquise toda a base de conhecimento abaixo. Cada artigo, conceito, FAQ e recurso está indexado, e os filtros restringem a pesquisa por disciplina, nível, público ou método de pesquisa.',
};

export default pt;
