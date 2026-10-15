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
  introHtml: `Welkom bij de <strong>Kennisbank over AI in het onderwijs</strong> — een gratis, publieke bron over <a href="/aied/concepts/ai-education/">AI in het onderwijs</a>, voor de mensen die lesgeven, studeren, ontwerpen of het beheren. Zij destilleert recent openbaar onderzoek tot korte, gestructureerde pagina's die je kunt lezen en gebruiken. Een toelichting over hoe het is gemaakt: de pagina's worden gegenereerd en bijgewerkt door een AI-agent, onder redactionele begeleiding van de ontwikkelaar van de site. Elke bewering verwijst naar het artikel waarop het berust, zodat je de bronnen zelf kunt controleren.`,
  navHeading: 'Navigeren door de site',
  navHtml: `Blader door de index per strand in de linker zijbalk om te zien hoe het veld is georganiseerd, of <a href="/aied/search">zoek</a> in de hele kennisbank als je al een onderwerp in gedachten hebt. Artikelpagina's vatten één artikel samen tot zijn doel, methoden en resultaten, met een volledige bronvermelding en links naar gerelateerd werk; conceptpagina's brengen samen wat het onderzoek zegt over één idee en linken naar de studies die eraan ten grondslag liggen. Als je liever met een vraag begint, verzamelt de <a href="/aied/faq">FAQ-index</a> de vragen die bezoekers het vaakst stellen, van AI-beleid voor een cursus tot de vraag of je AI-detectoren moet gebruiken; als je liever met een tool begint, somt de <a href="/aied/resources">bronnenpagina</a> gratis tools, collecties en instrumenten op die je direct kunt gebruiken, elk met wie het heeft gemaakt en wat het kost. De conceptkaart hierboven laat zien wat met wat verbonden is; <a href="/aied/concepts/ai-education/">AI in het onderwijs</a> is de kaartpagina die eraan ten grondslag ligt, die de concepten groepeert in ongeveer een dozijn overkoepelende stranden.`,
  chatHeading: 'Chat met de kennisbank',
  chatHtml: `Alles hier is ook gepubliceerd als machineleesbare bestanden, zodat je je favoriete AI-chatbot of -agent op de kennisbank kunt richten en antwoorden krijgt die ernaar verwijzen in plaats van te gokken — <a href="/aied/ai">de prompts vind je hier</a>. Nieuwe pagina's verschijnen in het <a href="/aied/journal">journaal</a>, dat een <a href="/aied/rss.xml">RSS-feed</a> heeft als je op de hoogte wilt blijven. Om offline te lezen, neem de <a href="/aied/aied.epub">EPUB</a> of het <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Aanbevolen startpunten per doelgroep',
  startingIntro:
    'Hieronder staan enkele aanbevolen concepten om mee te beginnen in deze kennisbank.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Essentiële concepten',
      html: `<a href="/aied/concepts/ai-literacy/">AI-geletterdheid</a>, <a href="/aied/concepts/misconceptions/">misvattingen over AI</a>, <a href="/aied/concepts/agentic-ai/">agentische AI</a>, <a href="/aied/concepts/cognitive-offloading/">cognitief uitbesteden</a> en <a href="/aied/concepts/interpreting-and-applying-aied-research/">hoe je dit onderzoek moet interpreteren en toepassen</a>: wat de resultaten wel en niet kunnen onderbouwen, en waarom één studie zelden een vraag beslecht.`,
    },
    {
      id: 'instructors',
      heading: 'Docenten',
      html: `<a href="/aied/concepts/teacher-role/">de veranderende rol van de docent</a>, <a href="/aied/concepts/learning-design/">lesontwerp</a>, <a href="/aied/concepts/assessment/">toetsing</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">academische integriteit</a>, <a href="/aied/concepts/framing-ai-use-for-students/">het kaderen van AI-gebruik</a> en <a href="/aied/concepts/reducing-ai-misuse/">het verminderen van misbruik</a>. Voor de tools, het bewijs en de voorbeelden binnen je eigen vakgebied, zie <a href="/aied/concepts/discipline-specific-aied/">AI in je eigen vakgebied</a>.`,
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
    'Elke pagina hier is gedateerd, en de kennisbank groeit naarmate nieuw openbaar onderzoek wordt gepubliceerd en beoordeeld. De aantallen hieronder worden uit de huidige inhoud gelezen; de datum is de meest recente paginawijziging.',
  conceptMap: {
    title: 'Conceptkaart van AI in het onderwijs',
    desc:
      'Een radiale kaart met AI in het onderwijs in het centrum, verbonden met twaalf concepten op het hoogste niveau: ' +
      'modelleren, leren, gelijkheid, feedback, AI-geletterdheid, toetsing, vakgebieden, ' +
      'didactiek, ethiek, technologieën, evaluatie en onderzoek. Selecteer een knooppunt om de bijbehorende pagina te openen.',
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
