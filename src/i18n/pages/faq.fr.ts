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
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const fr: FaqStrings = {
  title: 'FAQ',
  h1: 'Questions fréquentes',
  introHtml:
    'Cette section répond aux questions courantes sur <strong>l\'IA en éducation</strong> : ce que dit la recherche sur les effets de l\'IA sur l\'enseignement et l\'apprentissage, et comment les enseignants, le corps professoral et les concepteurs pédagogiques peuvent mettre ces données probantes en pratique. Chaque réponse condense les résultats des recherches résumées dans cette base de connaissances, en reliant la question aux concepts et aux articles pertinents pour aller plus loin.',
  assistantHtml:
    'Vous avez une question qui n\'est pas traitée ici ? Interrogez votre propre assistant d\'IA à l\'aide de la page <a href="/aied/ai">Utiliser cette base de connaissances avec votre propre assistant d\'IA</a>, qui explique comment orienter un agent vers le catalogue complet pour obtenir des réponses fondées et citées.',
  empty: 'Aucune FAQ pour le moment.',
  sectionHeadings: {
    "Start here": "Commencez ici",
    "Course and institutional policy": "Politique de cours et d'établissement",
    "Designing courses and activities": "Conception de cours et d'activités",
    "Assessment, feedback and integrity": "Évaluation, rétroaction et intégrité",
    "How students learn and use AI": "Apprentissage et usage de l'IA",
    "Particular learners, access and wellbeing": "Diversité, accès et bien-être",
    "Careers and AI literacy": "Carrières et littératie en IA",
    "Building and evaluating educational AI": "Concevoir et évaluer l'IA éducative",
    "Research practice": "Pratique de recherche",
  },
  sectionBlurbs: {
    "Start here": "Deux questions générales à lire avant les questions précises, quel que soit votre rôle.",
    "Course and institutional policy": "Pour les enseignants qui rédigent les règles que liront les étudiants, et pour l'administration et le développement pédagogique qui les fixent à l'échelle du programme.",
    "Designing courses and activities": "Pour quiconque décide où l'IA entre dans une tâche, un semestre ou un cours en ligne, et pour les enseignants qui veulent récupérer le temps que l'IA devait leur faire gagner.",
    "Assessment, feedback and integrity": "Le groupe le plus fourni, parce que c'est là que les données probantes sont les plus nettes et que les conséquences pèsent sur le dossier de l'étudiant.",
    "How students learn and use AI": "Pour les questions sur ce que les étudiants gagnent vraiment, ce qu'ils risquent de perdre et comment garder l'apprentissage de leur côté.",
    "Particular learners, access and wellbeing": "Pour les enseignants et le personnel d'accompagnement qui adaptent la conception à ceux qui sont réellement dans la salle, et pour l'administration qui pense à ceux qui n'y sont pas.",
    "Careers and AI literacy": "Pour les concepteurs de programmes et les responsables de programme qui répondent aux étudiants demandant à quoi tout cela sert.",
    "Building and evaluating educational AI": "Pour les développeurs, les concepteurs pédagogiques et les chercheurs qui déploient un tuteur, une simulation ou une plateforme dans un cours réel.",
    "Research practice": "Pour les chercheurs qui rapportent, évaluent ou planifient des travaux dans ce domaine.",
  },
};

export default fr;