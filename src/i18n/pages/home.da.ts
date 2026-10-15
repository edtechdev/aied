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

const da: HomeStrings = {
  title: 'Forside',
  h1: 'Vidensbase om kunstig intelligens i uddannelse',
  introHtml: `Velkommen til <strong>vidensbasen om kunstig intelligens i uddannelse</strong> — en gratis ressource i det offentlige domæne om <a href=\"/aied/concepts/ai-education/\">kunstig intelligens i uddannelse</a>, til de mennesker, der underviser i, studerer, designer eller administrerer det. Den destillerer ny, åben adgangsforskning til korte, strukturerede sider, du kan læse og handle ud fra. En bemærkning om, hvordan den er lavet: siderne genereres og opdateres af en AI-agent med redaktionel vejledning fra udvikleren bag hjemmesiden. Hvert påstand nævner den artikel, den bygger på, så kilderne er til at kontrollere.`,
  navHeading: 'Sådan finder du rundt på hjemmesiden',
  navHtml: `Gennemse det trinvise indeks i sidepanelet til venstre for at se, hvordan feltet er organiseret, eller <a href=\"/aied/search\">søg</a> i hele vidensbasen, hvis du allerede har et emne i tankerne. Artikelsider gengiver én artikel i dens formål, metoder og resultater med en fuld kildeangivelse og links til relateret arbejde; begrebssider samler, hvad forskningen siger om én idé, og linker til de undersøgelser, der ligger bag. Vil du hellere starte med et spørgsmål, samler <a href=\"/aied/faq\">FAQ-indekset</a> dem, besøgende stiller først, fra AI-politik i et enkelt kursus til, om man skal bruge AI-detektorer; vil du hellere starte med et værktøj, opregner <a href=\"/aied/resources\">ressourcesiden</a> gratis værktøjer, samlinger og instrumenter, du kan gå i gang med at bruge, hvor hvert viser, hvem der har lavet det, og hvad det koster. Begrebskortet ovenfor viser, hvad der hænger sammen med hvad; <a href=\"/aied/concepts/ai-education/\">AI i uddannelse</a> er kortets bagvedliggende side, der grupperer begreberne i omkring en snes overordnede spor.`,
  chatHeading: 'Chat med vidensbasen',
  chatHtml: `Alt her er også udgivet som maskinlæsbare filer, så du kan pege din foretrukne AI-chatbot eller -agent på vidensbasen og få svar, der citerer den, i stedet for at gætte — <a href=\"/aied/ai\">prompterne står her</a>. Nye sider dukker op i <a href=\"/aied/journal\">journalen</a>, som har et <a href=\"/aied/rss.xml\">RSS-feed</a>, hvis du vil følge med. Vil du læse uden net, kan du tage <a href=\"/aied/aied.epub\">EPUB-udgaven</a> eller <a href=\"/aied/aied.pdf\">PDF-udgaven</a>.`,
  startingHeading: 'Anbefalede startpunkter efter målgruppe',
  startingIntro: 'Nedenfor er der nogle anbefalede begreber at starte med i denne vidensbase.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Grundlæggende begreber',
      html: `<a href=\"/aied/concepts/ai-literacy/\">AI-dannelse</a>, <a href=\"/aied/concepts/misconceptions/\">misforståelser om AI</a>, <a href=\"/aied/concepts/agentic-ai/\">agentisk AI</a>, <a href=\"/aied/concepts/cognitive-offloading/\">kognitiv udflytning</a> og <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">hvordan man fortolker og anvender denne forskning</a>: hvad resultaterne kan og ikke kan bære, og hvorfor en enkelt undersøgelse sjældent afgør et spørgsmål.`,
    },
    {
      id: 'instructors',
      heading: 'Undervisere',
      html: `<a href=\"/aied/concepts/teacher-role/\">Den skiftende underviserrolle</a>, <a href=\"/aied/concepts/learning-design/\">læringsdesign</a>, <a href=\"/aied/concepts/assessment/\">vurdering</a>, <a href=\"/aied/concepts/feedback/\">feedback</a>, <a href=\"/aied/concepts/academic-integrity/\">akademisk redelighed</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">hvordan man formidler AI-brug</a> og <a href=\"/aied/concepts/reducing-ai-misuse/\">at reducere misbrug</a>. Vil du have værktøjerne, evidensen og eksemplerne inden for dit eget fag, se <a href=\"/aied/concepts/discipline-specific-aied/\">AI i dit eget fag</a>.`,
    },
    {
      id: 'developers',
      heading: 'Udviklere',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">At bygge til undervisning</a>, <a href=\"/aied/concepts/ai-technologies/\">teknologierne bag</a>, <a href=\"/aied/concepts/intelligent-tutoring/\">intelligent vejledning</a>, <a href=\"/aied/concepts/multimodal/\">multimodal AI</a>, <a href=\"/aied/concepts/student-modeling/\">modellering af den studerende</a> og <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">at træne og tilpasse en model til undervisning</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratorer',
      html: `<a href=\"/aied/concepts/administrator/\">Administratorrollen</a>, <a href=\"/aied/concepts/governance/\">AI-styring</a>, <a href=\"/aied/concepts/educational-policy-ai/\">institutionel politik</a>, <a href=\"/aied/concepts/legal-issues-and-risks/\">juridiske spørgsmål og risici</a> og <a href=\"/aied/concepts/change-management/\">forandringsledelse</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Forskere',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">Forskningsmetoder i AIED</a>, <a href=\"/aied/concepts/theories-and-frameworks/\">teorier og rammer</a>, <a href=\"/aied/concepts/ai-ed-evaluation/\">at evaluere en AI-i-uddannelse-intervention</a>, <a href=\"/aied/concepts/educational-measurement/\">pædagogisk måling</a>, <a href=\"/aied/concepts/learning-gains/\">måling af læringsudbytte</a> og <a href=\"/aied/concepts/limitations-in-aied-research/\">de tværgående grænser for denne evidensbase</a>.`,
    },
  ],
  statsHeading: 'Hvad vidensbasen indeholder',
  statsIntro:
    'Hver side her er dateret, og vidensbasen vokser, efterhånden som ny forskning med åben adgang bliver offentliggjort og gennemgået. Tallene nedenfor aflæses af det aktuelle indhold; datoen er den seneste opdatering af en side.',
  conceptMap: {
    title: 'Begrebskort over AI i uddannelse',
    desc:
      'Et radielt kort med AI i uddannelse i midten, forbundet med tolv begreber på øverste niveau: ' +
      'modellering, læring, ligestilling, feedback, AI-dannelse, vurdering, fag, pædagogik, ' +
      'etik, teknologier, evaluering og forskning. Vælg en knude for at åbne dens side.',
    navLabel: 'Begreber om AI i uddannelse',
    center: 'AI i uddannelse',
    nodes: {
      'student-modeling': 'Modellering',
      'learning-theories': 'Læring',
      'equity-in-ai-education': 'Ligestilling',
      feedback: 'Feedback',
      'ai-literacy': 'AI-dannelse',
      assessment: 'Vurdering',
      'discipline-specific-aied': 'Fag',
      pedagogy: 'Pædagogik',
      ethics: 'Etik',
      'ai-technologies': 'Teknologier',
      'ai-ed-evaluation': 'Evaluering',
      'research-methods-aied': 'Forskning',
    },
  },
  toc: [
    { text: 'Sådan finder du rundt på hjemmesiden', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chat med vidensbasen', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Anbefalede startpunkter efter målgruppe', slug: 'starting-points', depth: 2 },
    { text: 'Grundlæggende begreber', slug: 'essential-concepts', depth: 3 },
    { text: 'Undervisere', slug: 'instructors', depth: 3 },
    { text: 'Udviklere', slug: 'developers', depth: 3 },
    { text: 'Administratorer', slug: 'administrators', depth: 3 },
    { text: 'Forskere', slug: 'researchers', depth: 3 },
    { text: 'Hvad vidensbasen indeholder', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default da;
