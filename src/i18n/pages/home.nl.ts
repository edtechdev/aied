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

const nl: HomeStrings = {
  title: 'Startpagina',
  h1: 'Kennisbank over AI in het onderwijs',
  introHtml: `Welkom bij de Kennisbank over AI in het onderwijs, een gratis, publieke bron over <a href="/aied/concepts/ai-education/">AI in het onderwijs</a> voor de mensen die lesgeven, studeren, ontwerpen of het beheren. Zij vat recent open access-onderzoek in het onderwijs samen en synthetiseert dat. Een AI-agent schrijft en werkt de pagina's bij, onder redactionele begeleiding van de ontwikkelaar van de site.`,
  navHeading: 'Navigeren door de site',
  navHtml: `Blader door de index in de linker zijbalk, die per strand is geordend, of <a href="/aied/search">zoek</a> op een onderwerp. Artikelpagina's vatten één artikel samen tot zijn doel, methoden en resultaten; conceptpagina's brengen samen wat het onderzoek zegt over één idee en linken naar de studies die eraan ten grondslag liggen. Om met een vraag te beginnen behandelt de <a href="/aied/faq">FAQ</a> wat bezoekers het eerst vragen, zoals AI-beleid voor een cursus of de vraag of je AI-detectoren moet gebruiken. Om met een tool te beginnen somt de <a href="/aied/resources">bronnenpagina</a> gratis tools en collecties op, met wie elk ervan heeft gemaakt en wat het kost. De kaart hierboven groepeert het veld in twaalf stranden, met <a href="/aied/concepts/ai-education/">AI in het onderwijs</a> als het centrale knooppunt.`,
  chatHeading: 'Chat met de kennisbank',
  chatHtml: `De hele kennisbank is ook gepubliceerd als machineleesbare bestanden, zodat je een AI-chatbot of -agent erop kunt richten en antwoorden krijgt die naar de pagina's verwijzen. <a href="/aied/ai">De prompts vind je hier</a>. Nieuwe pagina's verschijnen in het <a href="/aied/journal">journaal</a>, dat een <a href="/aied/rss.xml">RSS-feed</a> heeft. Om offline te lezen, download de <a href="/aied/aied.epub">EPUB</a> of het <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Aanbevolen startpunten per doelgroep',
  startingIntro:
    'Begin met de groep die bij je rol past.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Essentiële concepten',
      html: `<a href="/aied/concepts/ai-literacy/">AI-geletterdheid</a>, <a href="/aied/concepts/misconceptions/">misvattingen over AI</a>, <a href="/aied/concepts/agentic-ai/">agentische AI</a>, <a href="/aied/concepts/cognitive-offloading/">cognitief uitbesteden</a> en <a href="/aied/concepts/interpreting-and-applying-aied-research/">hoe je dit onderzoek moet interpreteren en toepassen</a>, inclusief waarom één studie zelden een vraag beslecht.`,
    },
    {
      id: 'instructors',
      heading: 'Docenten',
      html: `<a href="/aied/concepts/teacher-role/">de veranderende rol van de docent</a>, <a href="/aied/concepts/learning-design/">lesontwerp</a>, <a href="/aied/concepts/assessment/">toetsing</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">academische integriteit</a>, <a href="/aied/concepts/framing-ai-use-for-students/">het kaderen van AI-gebruik</a> en <a href="/aied/concepts/reducing-ai-misuse/">het verminderen van misbruik</a>. Voor vakspecifieke tools en voorbeelden, zie <a href="/aied/concepts/discipline-specific-aied/">AI in je eigen vakgebied</a>.`,
    },
    {
      id: 'developers',
      heading: 'Ontwikkelaars',
      html: `<a href="/aied/concepts/educational-technology-developers/">bouwen voor het onderwijs</a>, <a href="/aied/concepts/ai-technologies/">de onderliggende technologieën</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligente tutoring</a>, <a href="/aied/concepts/multimodal/">multimodale AI</a>, <a href="/aied/concepts/student-modeling/">leermodellering</a> en <a href="/aied/concepts/llm-training-and-fine-tuning/">een model trainen en aanpassen voor het lesgeven</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Bestuurders',
      html: `<a href="/aied/concepts/administrator/">de rol van de bestuurder</a>, <a href="/aied/concepts/governance/">AI-governance</a>, <a href="/aied/concepts/educational-policy-ai/">institutioneel beleid</a>, <a href="/aied/concepts/legal-issues-and-risks/">juridische kwesties en risico's</a> en <a href="/aied/concepts/change-management/">veranderingsmanagement</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Onderzoekers',
      html: `<a href="/aied/concepts/research-methods-aied/">onderzoeksmethoden in AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">theorieën en kaders</a>, <a href="/aied/concepts/ai-ed-evaluation/">het evalueren van een AI-interventie in het onderwijs</a>, <a href="/aied/concepts/educational-measurement/">meting in het onderwijs</a>, <a href="/aied/concepts/learning-gains/">het meten van leerwinst</a> en de <a href="/aied/concepts/limitations-in-aied-research/">overkoepelende grenzen van deze kennisbasis</a>.`,
    },
  ],
  statsHeading: 'Wat zit er in de kennisbank',
  statsIntro:
    'Elke pagina is gedateerd, en de aantallen hieronder weerspiegelen wat er nu gepubliceerd is; de datum "laatst bijgewerkt" aan het einde van de lijst is de meest recente wijziging.',
  conceptMap: {
    title: 'Conceptkaart van AI in het onderwijs',
    desc:
      'Een radiale kaart met AI in het onderwijs in het centrum, verbonden met twaalf concepten op het hoogste niveau: ' +
      'modelleren, leren, gelijkheid, feedback, AI-geletterdheid, toetsing, vakgebieden, ' +
      'didactiek, ethiek, technologieën, evaluatie en onderzoek.',
    navLabel: 'Concepten over AI in het onderwijs',
    center: 'AI in het onderwijs',
    nodes: {
      'student-modeling': 'Modelleren',
      'learning-theories': 'Leren',
      'equity-in-ai-education': 'Gelijkheid',
      feedback: 'Feedback',
      'ai-literacy': 'AI-geletterdheid',
      assessment: 'Toetsing',
      'discipline-specific-aied': 'Vakgebieden',
      pedagogy: 'Didactiek',
      ethics: 'Ethiek',
      'ai-technologies': 'Technologieën',
      'ai-ed-evaluation': 'Evaluatie',
      'research-methods-aied': 'Onderzoek',
    },
  },
  toc: [
    { text: 'Navigeren door de site', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chat met de kennisbank', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Aanbevolen startpunten per doelgroep', slug: 'starting-points', depth: 2 },
    { text: 'Essentiële concepten', slug: 'essential-concepts', depth: 3 },
    { text: 'Docenten', slug: 'instructors', depth: 3 },
    { text: 'Ontwikkelaars', slug: 'developers', depth: 3 },
    { text: 'Bestuurders', slug: 'administrators', depth: 3 },
    { text: 'Onderzoekers', slug: 'researchers', depth: 3 },
    { text: 'Wat zit er in de kennisbank', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default nl;
