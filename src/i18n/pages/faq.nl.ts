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

const nl: FaqStrings = {
  title: 'FAQ',
  h1: 'Veelgestelde vragen',
  introHtml:
    'Deze sectie beantwoordt veelgestelde vragen over <strong>AI in het onderwijs</strong> — wat het onderzoek zegt over hoe AI lesgeven en leren beïnvloedt, en hoe docenten, instructeurs en ontwerpers van onderwijs dat bewijs in de praktijk kunnen brengen. Elk antwoord destilleert resultaten uit het onderzoek dat in deze kennisbank is samengevat, en verbindt de vraag met de relevante concepten en artikelen voor verdere lectuur.',
  assistantHtml:
    'Staat je vraag er niet bij? Vraag het aan je eigen AI-assistent via de pagina <a href="/aied/ai">Gebruik deze kennisbank met je eigen AI-assistent</a>, die laat zien hoe je een agent op de volledige catalogus richt voor onderbouwde antwoorden met bronvermeldingen.',
  empty: 'Nog geen FAQ\'s.',
  sectionHeadings: {
    "Start here": "Begin hier",
    "Course and institutional policy": "Cursus- en instellingsbeleid",
    "Designing courses and activities": "Cursussen en activiteiten ontwerpen",
    "Assessment, feedback and integrity": "Beoordeling, feedback en integriteit",
    "How students learn and use AI": "Studenten leren en AI gebruiken",
    "Particular learners, access and wellbeing": "Specifieke lerenden, toegang en welzijn",
    "Careers and AI literacy": "Loopbaan en AI-geletterdheid",
    "Building and evaluating educational AI": "Educatieve AI bouwen en evalueren",
    "Research practice": "Onderzoekspraktijk",
  },
  sectionBlurbs: {
    "Start here": "Twee brede vragen die de moeite waard zijn om te lezen voor de specifieke vragen, in welke rol je ook zit.",
    "Course and institutional policy": "Voor docenten die de regels schrijven die studenten lezen, en voor bestuurders en docentontwikkelaars die ze op programmaniveau vastleggen.",
    "Designing courses and activities": "Voor iedereen die bepaalt waar AI een taak, een semester of een online cursus binnenkomt, en voor docenten die de tijd terug willen die AI hun zou moeten geven.",
    "Assessment, feedback and integrity": "De grootste cluster, omdat hier het bewijs het scherpst is en de gevolgen neerslaan op het dossier van een student.",
    "How students learn and use AI": "Voor vragen over wat studenten echt winnen, wat ze riskeren te verliezen en hoe je het leren bij hen houdt.",
    "Particular learners, access and wellbeing": "Voor docenten en ondersteunend personeel die het ontwerp aanpassen aan wie er echt in de zaal zit, en voor bestuurders die nadenken over wie er niet is.",
    "Careers and AI literacy": "Voor curriculumontwerpers en opleidingsleiders die studenten antwoorden die vragen waar dit allemaal voor dient.",
    "Building and evaluating educational AI": "Voor ontwikkelaars, onderwijsontwerpers en onderzoekers die een tutor, een simulatie of een platform in een echte cursus brengen.",
    "Research practice": "Voor onderzoekers die werk in dit veld rapporteren, beoordelen of plannen.",
  },
};

export default nl;
