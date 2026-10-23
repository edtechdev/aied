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

const no: HomeStrings = {
  title: 'Hjem',
  h1: 'Kunnskapsbase om AI i utdanning',
  introHtml: `Velkommen til kunnskapsbasen om AI i utdanning, en gratis ressurs i det offentlige domene om <a href="/aied/concepts/ai-education/">kunstig intelligens i utdanning</a> for dem som underviser, studerer, utformer eller administrerer det. Den oppsummerer og syntetiserer ny forskning med åpen tilgang om utdanning. En AI-agent skriver og oppdaterer sidene med redaksjonell veiledning fra utvikleren av nettstedet.`,
  navHeading: 'Navigere på nettstedet',
  navHtml: `Bla i oversikten i sidepanelet til venstre, som er ordnet etter tråd, eller <a href="/aied/search">søk</a> etter et tema. Artikkelsidene pakker ett papir inn i dets formål, metoder og funn; begrepssidene samler det forskningen sier om én idé og lenker til studiene bak den. Vil du starte fra et spørsmål, dekker <a href="/aied/faq">FAQ</a> det besøkende spør om først, for eksempel retningslinjer for bruk av AI i et emne eller om man bør kjøre AI-detektorer. Vil du starte fra et verktøy, viser <a href="/aied/resources">ressurssiden</a> gratis verktøy og samlinger, med hvem som har laget hvert enkelt og hva det koster. Kartet ovenfor grupperer feltet i tolv tråder, med <a href="/aied/concepts/ai-education/">AI i utdanning</a> som den sentrale noden.`,
  chatHeading: 'Chat med kunnskapsbasen',
  chatHtml: `Hele kunnskapsbasen er også publisert som maskinlesbare filer, slik at du kan peke en AI-chatbot eller -agent mot den og få svar som siterer sidene. <a href="/aied/ai">Instruksjonene står her</a>. Nye sider kommer i <a href="/aied/journal">journalen</a>, som har en <a href="/aied/rss.xml">RSS-strøm</a>. Vil du lese uten nett, last ned <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Anbefalte startpunkter etter målgruppe',
  startingIntro: 'Start med gruppen som passer for din rolle.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Grunnleggende begreper',
      html: `<a href="/aied/concepts/ai-literacy/">AI-kompetanse</a>, <a href="/aied/concepts/misconceptions/">misforståelser om AI</a>, <a href="/aied/concepts/agentic-ai/">agentisk AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitiv avlasting</a> og <a href="/aied/concepts/interpreting-and-applying-aied-research/">hvordan tolke og bruke denne forskningen</a>, inkludert hvorfor én enkelt studie sjelden avgjør et spørsmål.`,
    },
    {
      id: 'instructors',
      heading: 'Instruktører',
      html: `<a href="/aied/concepts/teacher-role/">Den endrede underviserrollen</a>, <a href="/aied/concepts/learning-design/">læringsdesign</a>, <a href="/aied/concepts/assessment/">vurdering</a>, <a href="/aied/concepts/feedback/">tilbakemelding</a>, <a href="/aied/concepts/academic-integrity/">akademisk integritet</a>, <a href="/aied/concepts/framing-ai-use-for-students/">å ramme inn bruk av AI</a> og <a href="/aied/concepts/reducing-ai-misuse/">å redusere misbruk</a>. For fagspesifikke verktøy og eksempler, se <a href="/aied/concepts/discipline-specific-aied/">AI i ditt eget fag</a>.`,
    },
    {
      id: 'developers',
      heading: 'Utviklere',
      html: `<a href="/aied/concepts/educational-technology-developers/">å bygge for utdanning</a>, <a href="/aied/concepts/ai-technologies/">teknologiene under</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligent veiledning</a>, <a href="/aied/concepts/multimodal/">multimodal AI</a>, <a href="/aied/concepts/student-modeling/">modellering av den lærende</a> og <a href="/aied/concepts/llm-training-and-fine-tuning/">å trene og tilpasse en modell for undervisning</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratorer',
      html: `<a href="/aied/concepts/administrator/">administratorrollen</a>, <a href="/aied/concepts/governance/">AI-styring</a>, <a href="/aied/concepts/educational-policy-ai/">institusjonelle retningslinjer</a>, <a href="/aied/concepts/legal-issues-and-risks/">juridiske spørsmål og risikoer</a> og <a href="/aied/concepts/change-management/">endringsledelse</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Forskere',
      html: `<a href="/aied/concepts/research-methods-aied/">forskningsmetoder i AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorier og rammeverk</a>, <a href="/aied/concepts/ai-ed-evaluation/">å evaluere en AI-tiltak i utdanning</a>, <a href="/aied/concepts/educational-measurement/">utdanningsmessig måling</a>, <a href="/aied/concepts/learning-gains/">å måle læringsutbytte</a> og de <a href="/aied/concepts/limitations-in-aied-research/">tverrgående begrensningene i dette grunnlaget av kunnskap</a>.`,
    },
  ],
  statsHeading: 'Hva kunnskapsbasen inneholder',
  statsIntro:
    'Alle sider er datert, og tallene nedenfor gjenspeiler det som er publisert akkurat nå; datoen «sist oppdatert» nederst i listen er den nyeste endringen.',
  conceptMap: {
    title: 'Begrepskart over AI i utdanning',
    desc:
      'Et radialt kart med AI i utdanning i sentrum, knyttet til tolv overordnede begreper: ' +
      'modellering, læring, likestilling, tilbakemelding, AI-kompetanse, vurdering, fag, ' +
      'pedagogikk, etikk, teknologier, evaluering og forskning.',
    navLabel: 'Begreper innen AI i utdanning',
    center: 'AI i utdanning',
    nodes: {
      'student-modeling': 'Modellering',
      'learning-theories': 'Læring',
      'equity-in-ai-education': 'Likestilling',
      feedback: 'Tilbakemelding',
      'ai-literacy': 'AI-kompetanse',
      assessment: 'Vurdering',
      'discipline-specific-aied': 'Fag',
      pedagogy: 'Pedagogikk',
      ethics: 'Etikk',
      'ai-technologies': 'Teknologier',
      'ai-ed-evaluation': 'Evaluering',
      'research-methods-aied': 'Forskning',
    },
  },
  toc: [
    { text: 'Navigere på nettstedet', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chat med kunnskapsbasen', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Anbefalte startpunkter etter målgruppe', slug: 'starting-points', depth: 2 },
    { text: 'Grunnleggende begreper', slug: 'essential-concepts', depth: 3 },
    { text: 'Instruktører', slug: 'instructors', depth: 3 },
    { text: 'Utviklere', slug: 'developers', depth: 3 },
    { text: 'Administratorer', slug: 'administrators', depth: 3 },
    { text: 'Forskere', slug: 'researchers', depth: 3 },
    { text: 'Hva kunnskapsbasen inneholder', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default no;
