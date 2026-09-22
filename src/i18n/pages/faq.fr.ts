/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
}

const fr: FaqStrings = {
  title: 'FAQ',
  h1: 'Questions fréquentes',
  introHtml:
    'Cette section répond aux questions courantes sur <strong>l\'IA en éducation</strong> : ce que dit la recherche sur les effets de l\'IA sur l\'enseignement et l\'apprentissage, et comment les enseignants, le corps professoral et les concepteurs pédagogiques peuvent mettre ces données probantes en pratique. Chaque réponse condense les résultats des recherches résumées dans cette base de connaissances, en reliant la question aux concepts et aux articles pertinents pour aller plus loin.',
  assistantHtml:
    'Vous avez une question qui n\'est pas traitée ici ? Interrogez votre propre assistant d\'IA à l\'aide de la page <a href="/aied/ai">Utiliser cette base de connaissances avec votre propre assistant d\'IA</a>, qui explique comment orienter un agent vers le catalogue complet pour obtenir des réponses fondées et citées.',
  empty: 'Aucune FAQ pour le moment.',
};

export default fr;