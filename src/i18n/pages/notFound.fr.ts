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

const fr: NotFoundStrings = {
  title: 'Page introuvable',
  h1: 'Page introuvable',
  messageHtml:
    'Nous n’avons pas trouvé la page demandée. Le lien qui vous a conduit ici est peut-être obsolète, ou bien la page a été renommée. Vous pouvez repartir de la <a href="/aied/">page d’accueil</a>.',
  searchHtml:
    'Ou effectuez une recherche dans toute la base de connaissances ci-dessous. Chaque article, concept, FAQ et ressource y est indexé, et les filtres restreignent la recherche par discipline, niveau, public ou méthode de recherche.',
};

export default fr;
