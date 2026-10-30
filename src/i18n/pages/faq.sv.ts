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

const sv: FaqStrings = {
  title: 'Vanliga frågor',
  h1: 'Vanliga frågor',
  introHtml:
    'Det här avsnittet besvarar vanliga frågor om <strong>AI i utbildningen</strong> — vad forskningen säger om hur AI påverkar undervisning och lärande, och hur lärare, instruktörer och utbildningsdesigners kan omsätta den evidensen i praktik. Varje svar destillerar resultat från den forskning som sammanfattas i den här kunskapsbasen och kopplar frågan till relevanta begrepp och artiklar för vidare läsning.',
  assistantHtml:
    'Har du en fråga som inte besvaras här? Fråga din egen AI-assistent med hjälp av sidan <a href="/aied/ai">Använd den här kunskapsbasen med din egen AI-assistent</a>, som visar hur du riktar en agent mot hela katalogen för grundade svar med källhänvisningar.',
  empty: 'Inga vanliga frågor ännu.',
  sectionHeadings: {
    "Start here": "Börja här",
    "Course and institutional policy": "Kurs- och institutionspolicy",
    "Designing courses and activities": "Designa kurser och aktiviteter",
    "Assessment, feedback and integrity": "Bedömning, feedback och integritet",
    "How students learn and use AI": "Studenters lärande och AI-användning",
    "Particular learners, access and wellbeing": "Särskilda studerande, tillgång och välbefinnande",
    "Careers and AI literacy": "Karriär och AI-kompetens",
    "Building and evaluating educational AI": "Bygga och utvärdera utbildnings-AI",
    "Research practice": "Forskningspraxis",
  },
  sectionBlurbs: {
    "Start here": "Två breda frågor som är värda att läsa före de specifika, oavsett vilken roll du har.",
    "Course and institutional policy": "För lärare som skriver reglerna studenterna läser, och för administratörer och utbildningsutvecklare som sätter dem på programnivå.",
    "Designing courses and activities": "För alla som avgör var AI kommer in i en uppgift, en termin eller en onlinekurs, och för lärare som vill ha tillbaka tiden som AI skulle ha gett dem.",
    "Assessment, feedback and integrity": "Det största klustret, eftersom det är här evidensen är skarpast och där konsekvenserna landar i en students dokumentation.",
    "How students learn and use AI": "För frågor om vad studenter faktiskt vinner, vad de riskerar att förlora och hur lärandet stannar hos dem.",
    "Particular learners, access and wellbeing": "För lärare och stödpersonal som anpassar designen till vilka som faktiskt är i rummet, och för administratörer som tänker på vilka som inte är det.",
    "Careers and AI literacy": "För läroplansdesigners och programledare som svarar studenter som frågar vad allt detta är till för.",
    "Building and evaluating educational AI": "För utvecklare, instruktionsdesigner och forskare som sjösätter en handledare, en simulering eller en plattform i en riktig kurs.",
    "Research practice": "För forskare som rapporterar, granskar eller planerar arbete inom fältet.",
  },
};

export default sv;
