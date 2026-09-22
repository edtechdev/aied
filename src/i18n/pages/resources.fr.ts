/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const fr: ResourcesStrings = {
  title: 'Ressources',
  h1: 'Outils et ressources gratuits',
  introHtml: [
    'Une sélection de <strong>ressources gratuites : outils, collections, instruments et formats</strong> pour l\'IA en éducation — des choses que vous pouvez aller utiliser dès aujourd\'hui plutôt que des recherches qu\'il faut d\'abord lire. Elles sont majoritairement créées par des enseignants, des concepteurs pédagogiques, des bibliothécaires et des chercheurs, et beaucoup ont été réalisées avec l\'aide de l\'IA par des personnes qui ne sont pas développeurs professionnels.',
    'Tout ce qui figure ici n\'est pas interactif. À côté des outils utilisables dans un navigateur et des tuteurs d\'IA, vous trouverez des bibliothèques de consignes et de « gems » prêtes à l\'emploi, des collections d\'activités de classe, des documents d\'information et de politique, des instruments d\'évaluation et des formats de fichiers ouverts. Chaque entrée est un court résumé qui renvoie à une page indiquant qui l\'a créée, de quel type de ressource il s\'agit, si le code source est disponible, ce que coûte son utilisation et quand son lien a été vérifié pour la dernière fois.',
    'Chaque entrée renvoie à un site externe que cette base de connaissances ne contrôle pas, et les liens sont revérifiés périodiquement — chaque page affiche la date de la dernière vérification de son lien. Si un outil a déménagé, est passé en logiciel fermé, ou mérite de figurer ici et en est absent, le plus rapide est d\'ouvrir une issue sur le dépôt.',
  ],
  empty: 'Aucune ressource pour le moment.',
  groupLabels: {
    software: 'Logiciels',
    'ai tutor': 'Tuteurs d\'IA',
    'agent skill': 'Compétences d\'agent',
    'prompt or gem library': 'Bibliothèques de consignes et de gems',
    'collection of tools': 'Collections d\'outils',
    'collection of activities': 'Collections d\'activités',
    'assessment instrument': 'Instruments d\'évaluation',
    'open format or specification': 'Formats et spécifications ouverts',
    'ebook or guide': 'Ebooks et guides',
    'case study collection': 'Collections d\'études de cas',
    'dataset or benchmark': 'Jeux de données et benchmarks',
  },
};

export default fr;