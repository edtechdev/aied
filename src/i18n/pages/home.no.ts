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
  introHtml: `Velkommen til <strong>kunnskapsbasen om AI i utdanning</strong> — en gratis ressurs i det offentlige domene om <a href="/aied/concepts/ai-education/">kunstig intelligens i utdanning</a>, for dem som underviser, studerer, utformer eller administrerer det. Den destillerer ny, åpen tilgang-forskning til korte, strukturerte sider du kan lese og handle etter. En merknad om hvordan den er laget: sidene genereres og oppdateres av en AI-agent, med redaksjonell veiledning fra utvikleren av nettstedet. Hver påstand oppgir artikkelen den bygger på, slik at kildene kan kontrolleres.`,
  navHeading: 'Navigere på nettstedet',
  navHtml: `Bla i tråd-for-tråd-oversikten i sidepanelet til venstre for å se hvordan feltet er organisert, eller <a href="/aied/search">søk</a> i hele kunnskapsbasen hvis du allerede har et tema i tankene. Artikkelsidene pakker ett papir inn i dets formål, metoder og funn, med full kildeliste og lenker til relatert arbeid; begrepssidene samler det forskningen sier om én idé og lenker til studiene bak den. Hvis du heller vil starte fra et spørsmål, samler <a href="/aied/faq">FAQ-oversikten</a> de besøkende stiller først, fra retningslinjer for bruk av AI i et emne til om man bør kjøre AI-detektorer; hvis du heller vil starte fra et verktøy, viser <a href="/aied/resources">ressurssiden</a> gratis verktøy, samlinger og instrumenter du kan gå i gang med å bruke, der hvert enkelt oppgir hvem som har laget det og hva det koster. Begrepskartet ovenfor viser hva som henger sammen med hva; <a href="/aied/concepts/ai-education/">AI i utdanning</a> er kartsiden bak det, og grupperer begrepene i omkring et dusin overordnede tråder.`,
  chatHeading: 'Chat med kunnskapsbasen',
  chatHtml: `Alt her er også publisert som maskinlesbare filer, slik at du kan peke din foretrukne AI-chatbot eller -agent mot kunnskapsbasen og få svar som siterer den i stedet for å gjette — <a href="/aied/ai">instruksjonene står her</a>. Nye sider dukker opp i <a href="/aied/journal">journalen</a>, som har en <a href="/aied/rss.xml">RSS-strøm</a> hvis du vil følge med. For lesing uten nett kan du ta med deg <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Anbefalte startpunkter etter målgruppe',
  startingIntro: 'Nedenfor er noen anbefalte begreper å starte med i denne kunnskapsbasen.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Grunnleggende begreper',
      html: `<a href="/aied/concepts/ai-literacy/">AI-kompetanse</a>, <a href="/aied/concepts/misconceptions/">misforståelser om AI</a>, <a href="/aied/concepts/agentic-ai/">agentisk AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitiv avlasting</a> og <a href="/aied/concepts/interpreting-and-applying-aied-research/">hvordan tolke og bruke denne forskningen</a>: hva funnene kan og ikke kan underbygge, og hvorfor én enkelt studie sjelden avgjør et spørsmål.`,
    },
    {
      id: 'instructors',
      heading: 'Instruktører',
      html: `<a href="/aied/concepts/teacher-role/">Den endrede underviserrollen</a>, <a href="/aied/concepts/learning-design/">læringsdesign</a>, <a href="/aied/concepts/assessment/">vurdering</a>, <a href="/aied/concepts/feedback/">tilbakemelding</a>, <a href="/aied/concepts/academic-integrity/">akademisk integritet</a>, <a href="/aied/concepts/framing-ai-use-for-students/">å ramme inn bruk av AI</a> og <a href="/aied/concepts/reducing-ai-misuse/">å redusere misbruk</a>. For verktøy, dokumentasjon og eksempler fra ditt eget fag, se <a href="/aied/concepts/discipline-specific-aied/">AI i ditt eget fag</a>.`,
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
    'Alle sider her er datert, og kunnskapsbasen vokser etter hvert som ny forskning med åpen tilgang publiseres og vurderes. Tallene nedenfor leses av det nåværende innholdet; datoen er den nyeste sideoppdateringen.',
  conceptMap: {
    title: 'Begrepskart over AI i utdanning',
    desc:
      'Et radialt kart med AI i utdanning i sentrum, knyttet til tolv overordnede begreper: ' +
      'modellering, læring, likestilling, tilbakemelding, AI-kompetanse, vurdering, fag, ' +
      'pedagogikk, etikk, teknologier, evaluering og forskning. Velg en node for å åpne dens side.',
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
