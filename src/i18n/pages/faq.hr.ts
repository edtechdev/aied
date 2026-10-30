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

const hr: FaqStrings = {
  title: 'FAQ',
  h1: 'Često postavljana pitanja',
  introHtml:
    'Ovaj odjeljak odgovara na česta pitanja o <strong>AI u edukaciji</strong> — što istraživanja pokazuju o tome kako AI utječe na poučavanje i učenje, te kako nastavnici, instruktori i dizajneri nastave mogu primijeniti te dokaze u praksi. Svaki odgovor izvlači nalaze iz istraživanja sažetih u ovoj bazi znanja, povezujući pitanje s relevantnim pojmovima i člancima za dublje čitanje.',
  assistantHtml:
    'Imate pitanje na koje ovdje nema odgovora? Pitajte vlastitog AI asistenta pomoću stranice <a href="/aied/ai">Upotreba ove baze znanja s vlastitim AI asistentom</a>, koja objašnjava kako usmjeriti agenta na cijeli katalog za utemeljene, citirane odgovore.',
  empty: 'Još nema FAQ-a.',
  sectionHeadings: {
    "Start here": "Počnite ovdje",
    "Course and institutional policy": "Pravila kolegija i institucije",
    "Designing courses and activities": "Oblikovanje kolegija i aktivnosti",
    "Assessment, feedback and integrity": "Vrednovanje, povratne informacije i čestitost",
    "How students learn and use AI": "Kako studenti uče i koriste AI",
    "Particular learners, access and wellbeing": "Različiti učenici, pristup i dobrobit",
    "Careers and AI literacy": "Karijere i AI pismenost",
    "Building and evaluating educational AI": "Izrada i vrednovanje obrazovne AI",
    "Research practice": "Istraživačka praksa",
  },
  sectionBlurbs: {
    "Start here": "Dva široka pitanja koja vrijedi pročitati prije konkretnih, bez obzira na vašu ulogu.",
    "Course and institutional policy": "Za nastavnike koji pišu pravila koja čitaju studenti te za administratore i stručnjake za razvoj nastave koji ih određuju na razini programa.",
    "Designing courses and activities": "Za svakoga tko odlučuje gdje AI ulazi u zadatak, semestar ili online kolegij, i za nastavnike koji žele vratiti vrijeme koje im je AI trebala dati.",
    "Assessment, feedback and integrity": "Najveći skup, jer su ovdje dokazi najoštriji i jer posljedice završavaju u studentskom dosjeu.",
    "How students learn and use AI": "Za pitanja o tome što studenti doista dobivaju, što riskiraju izgubiti i kako zadržati učenje uz njih.",
    "Particular learners, access and wellbeing": "Za nastavnike i stručnu službu koji dizajn prilagođavaju onima koji su doista u prostoriji, i za administratore koji razmišljaju o onima koji nisu.",
    "Careers and AI literacy": "Za dizajnere nastave i voditelje programa koji odgovaraju studentima koji pitaju čemu sve to služi.",
    "Building and evaluating educational AI": "Za razvijatelje, dizajnere nastave i istraživače koji tutor, simulaciju ili platformu uvode u stvarni kolegij.",
    "Research practice": "Za istraživače koji u ovom području izvještavaju, recenziraju ili planiraju rad.",
  },
};

export default hr;
