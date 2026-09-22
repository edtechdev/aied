/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const en: HomeStrings = {
  title: "Accueil",
  h1: "AI in Education Knowledge Base",
  introHtml: `Bienvenue dans la <strong>AI in Education Knowledge Base</strong>, une ressource gratuite et du domaine public sur <a href="/aied/concepts/ai-education/">l'intelligence artificielle en éducation</a>, destinée aux personnes qui l'enseignent, l'étudient, la conçoivent ou l'administrent. Elle condense des travaux de recherche récents en libre accès en pages courtes et structurées, que vous pouvez lire et utiliser directement. Un mot sur sa fabrication : les pages sont générées et mises à jour par un agent d'IA, sous la direction éditoriale du développeur du site. Chaque affirmation nomme l'article sur lequel elle repose, et les sources sont donc là pour être vérifiées.`,
  navHeading: "Naviguer dans le site",
  navHtml: `Parcourez l'index par thématique dans la barre latérale de gauche pour voir comment le domaine est organisé, ou <a href="/aied/search">effectuez une recherche</a> dans l'ensemble de la base de connaissances si vous avez déjà un sujet en tête. Les pages d'articles condensent un article de recherche en son objet, ses méthodes et ses résultats, avec la référence complète et des liens vers des travaux connexes ; les pages de concepts rassemblent ce que la recherche dit d'une notion et renvoient aux études qui la sous-tendent. Si vous préférez partir d'une question, l'<a href="/aied/faq">index des FAQ</a> regroupe celles que les visiteurs posent en premier, de la politique d'usage de l'IA dans un cours à l'opportunité d'utiliser des détecteurs d'IA ; si vous préférez partir d'un outil, la <a href="/aied/resources">page de ressources</a> recense des outils, des collections et des instruments gratuits que vous pouvez utiliser, en indiquant à chaque fois qui les a créés et ce qu'ils coûtent. La carte conceptuelle ci-dessus montre ce qui est relié à quoi ; <a href="/aied/concepts/ai-education/">L'IA en éducation</a> est la page qui la sous-tend, et regroupe les concepts en une douzaine de grands domaines.`,
  chatHeading: "Discuter avec la base de connaissances",
  chatHtml: `Tout le contenu est également publié sous forme de fichiers lisibles par machine, ce qui vous permet d'orienter votre agent conversationnel ou votre assistant d'IA préféré vers la base de connaissances et d'obtenir des réponses qui la citent au lieu de deviner : <a href="/aied/ai">les consignes se trouvent ici</a>. Les nouvelles pages apparaissent dans le <a href="/aied/journal">journal</a>, qui dispose d'un <a href="/aied/rss.xml">flux RSS</a> si vous souhaitez suivre les publications. Pour lire hors ligne, prenez l'<a href="/aied/aied.epub">EPUB</a> ou le <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: "Points de départ recommandés selon le public",
  startingIntro: "Voici quelques concepts recommandés pour commencer dans cette base de connaissances.",
  groups: [
    {
      id: 'essential-concepts',
      heading: "Concepts essentiels",
      html: `<a href="/aied/concepts/ai-literacy/">La littératie en IA</a>, <a href="/aied/concepts/misconceptions/">les idées fausses sur l'IA</a>, <a href="/aied/concepts/agentic-ai/">l'IA agentique</a>, <a href="/aied/concepts/cognitive-offloading/">le délestage cognitif</a>, et <a href="/aied/concepts/interpreting-and-applying-aied-research/">comment interpréter et appliquer cette recherche</a> : ce que les résultats permettent ou non d'affirmer, et pourquoi une seule étude tranche rarement une question.`,
    },
    {
      id: 'instructors',
      heading: "Enseignants",
      html: `<a href="/aied/concepts/teacher-role/">L'évolution du rôle d'enseignant</a>, <a href="/aied/concepts/learning-design/">la conception pédagogique</a>, <a href="/aied/concepts/assessment/">l'évaluation</a>, <a href="/aied/concepts/feedback/">la rétroaction</a>, <a href="/aied/concepts/academic-integrity/">l'intégrité académique</a>, <a href="/aied/concepts/framing-ai-use-for-students/">comment encadrer l'usage de l'IA</a> et <a href="/aied/concepts/reducing-ai-misuse/">comment réduire les usages abusifs</a>. Pour les outils, les données probantes et les exemples propres à votre discipline, voir <a href="/aied/concepts/discipline-specific-aied/">l'IA dans votre discipline</a>.`,
    },
    {
      id: 'developers',
      heading: "Développeurs",
      html: `<a href="/aied/concepts/educational-technology-developers/">Concevoir pour l'éducation</a>, <a href="/aied/concepts/ai-technologies/">les technologies sous-jacentes</a>, <a href="/aied/concepts/intelligent-tutoring/">le tutorat intelligent</a>, <a href="/aied/concepts/multimodal/">l'IA multimodale</a>, <a href="/aied/concepts/student-modeling/">la modélisation de l'apprenant</a>, et <a href="/aied/concepts/pedagogical-llm-training/">l'entraînement et l'adaptation d'un modèle à l'enseignement</a>.`,
    },
    {
      id: 'administrators',
      heading: "Administrateurs",
      html: `<a href="/aied/concepts/administrator/">Le rôle de l'administrateur</a>, <a href="/aied/concepts/governance/">la gouvernance de l'IA</a>, <a href="/aied/concepts/educational-policy-ai/">les politiques institutionnelles</a>, <a href="/aied/concepts/legal-issues-and-risks/">les questions juridiques et les risques</a>, et <a href="/aied/concepts/change-management/">la conduite du changement</a>.`,
    },
    {
      id: 'researchers',
      heading: "Chercheurs",
      html: `<a href="/aied/concepts/research-methods-aied/">Les méthodes de recherche en IAED</a>, <a href="/aied/concepts/theories-and-frameworks/">les théories et les cadres d'analyse</a>, <a href="/aied/concepts/ai-ed-evaluation/">l'évaluation d'une intervention d'IA en éducation</a>, <a href="/aied/concepts/educational-measurement/">la mesure en éducation</a>, <a href="/aied/concepts/learning-gains/">la mesure des gains d'apprentissage</a>, et les <a href="/aied/concepts/limitations-in-aied-research/">limites transversales de ce corpus de données probantes</a>.`,
    },
  ],
  statsHeading: "Ce que contient la base de connaissances",
  statsIntro:
    "Chaque page est datée, et la base de connaissances s'enrichit à mesure que de nouvelles recherches en libre accès sont publiées et examinées. Les chiffres ci-dessous proviennent du contenu actuel ; la date correspond à la mise à jour la plus récente d'une page.",
  conceptMap: {
    title: "Carte conceptuelle de l'IA en éducation",
    desc:
      "Une carte radiale avec l'IA en éducation au centre, reliée à douze concepts de premier niveau : " +
      "Modélisation, Apprentissage, Équité, Rétroaction, Littératie en IA, Évaluation, Disciplines, " +
      "Pédagogie, Éthique, Technologies, Évaluation IAED et Recherche. Sélectionnez un nœud pour " +
      "ouvrir sa page.",
    navLabel: "Concepts de l'IA en éducation",
    center: "L'IA en éducation",
    nodes: {
      'student-modeling': 'Modélisation',
      'learning-theories': 'Apprentissage',
      'equity-in-ai-education': 'Équité',
      feedback: 'Rétroaction',
      'ai-literacy': 'Littératie en IA',
      assessment: 'Évaluation',
      'discipline-specific-aied': 'Disciplines',
      pedagogy: 'Pédagogie',
      ethics: 'Éthique',
      'ai-technologies': 'Technologies',
      'ai-ed-evaluation': 'Évaluation IAED',
      'research-methods-aied': 'Recherche',
    },
  },
  toc: [
    { text: "Naviguer dans le site", slug: 'navigating-the-site', depth: 2 },
    { text: "Discuter avec la base de connaissances", slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: "Points de départ recommandés selon le public", slug: 'starting-points', depth: 2 },
    { text: "Concepts essentiels", slug: 'essential-concepts', depth: 3 },
    { text: "Enseignants", slug: 'instructors', depth: 3 },
    { text: "Développeurs", slug: 'developers', depth: 3 },
    { text: "Administrateurs", slug: 'administrators', depth: 3 },
    { text: "Chercheurs", slug: 'researchers', depth: 3 },
    { text: "Ce que contient la base de connaissances", slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default en;
