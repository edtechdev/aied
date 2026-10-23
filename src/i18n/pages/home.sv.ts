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

const sv: HomeStrings = {
  title: 'Hem',
  h1: 'Kunskapsbas om AI i utbildningen',
  introHtml: `Välkommen till kunskapsbasen om AI i utbildningen, en kostnadsfri resurs i allmän egendom om <a href="/aied/concepts/ai-education/">artificiell intelligens i utbildningen</a> för dem som undervisar, studerar, utformar eller administrerar den. Den sammanfattar och syntetiserar aktuell utbildningsforskning med öppen tillgång. En AI-agent skriver och uppdaterar sidorna med redaktionell vägledning från webbplatsens utvecklare.`,
  navHeading: 'Navigera på webbplatsen',
  navHtml: `Bläddra i förteckningen i sidofältet till vänster, som är ordnad efter fält, eller <a href="/aied/search">sök</a> efter ett ämne. Artikelsidor destillerar en studie till dess syfte, metoder och resultat; begreppssidor samlar det forskningen säger om en idé och länkar till studierna bakom den. Vill du börja från en fråga täcker <a href="/aied/faq">de vanliga frågorna</a> det besökare frågar först, till exempel AI-policy för kurser eller om man ska använda AI-detektorer. Vill du börja från ett verktyg listar <a href="/aied/resources">resurssidan</a> kostnadsfria verktyg och samlingar, med uppgift om vem som gjort varje och vad det kostar. Kartan ovan grupperar området i tolv fält, med <a href="/aied/concepts/ai-education/">AI i utbildningen</a> som central nod.`,
  chatHeading: 'Chatta med kunskapsbasen',
  chatHtml: `Hela kunskapsbasen finns också publicerad som maskinläsbara filer, så du kan rikta en AI-chattbot eller AI-agent mot den och få svar som citerar sidorna. <a href="/aied/ai">Prompterna finns här</a>. Nya sidor hamnar i <a href="/aied/journal">journalen</a>, som har ett <a href="/aied/rss.xml">RSS-flöde</a>. För att läsa utan internet, ladda ner <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Rekommenderade startpunkter per målgrupp',
  startingIntro: 'Börja med den grupp som motsvarar din roll.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Grundläggande begrepp',
      html: `<a href="/aied/concepts/ai-literacy/">AI-kompetens</a>, <a href="/aied/concepts/misconceptions/">missuppfattningar om AI</a>, <a href="/aied/concepts/agentic-ai/">agentisk AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitiv avlastning</a> och <a href="/aied/concepts/interpreting-and-applying-aied-research/">hur man tolkar och tillämpar den här forskningen</a>, inklusive varför en enstaka studie sällan avgör en fråga.`,
    },
    {
      id: 'instructors',
      heading: 'Lärare',
      html: `<a href="/aied/concepts/teacher-role/">Den föränderliga lärarrollen</a>, <a href="/aied/concepts/learning-design/">lärdesign</a>, <a href="/aied/concepts/assessment/">bedömning</a>, <a href="/aied/concepts/feedback/">återkoppling</a>, <a href="/aied/concepts/academic-integrity/">akademisk redlighet</a>, <a href="/aied/concepts/framing-ai-use-for-students/">att rama in AI-användning</a> och <a href="/aied/concepts/reducing-ai-misuse/">att minska missbruk</a>. För verktyg och exempel som är specifika för ditt ämne, se <a href="/aied/concepts/discipline-specific-aied/">AI inom ditt eget ämnesområde</a>.`,
    },
    {
      id: 'developers',
      heading: 'Utvecklare',
      html: `<a href="/aied/concepts/educational-technology-developers/">Att bygga för utbildningen</a>, <a href="/aied/concepts/ai-technologies/">teknologierna under ytan</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligent handledning</a>, <a href="/aied/concepts/multimodal/">multimodal AI</a>, <a href="/aied/concepts/student-modeling/">modellering av lärandet</a> och <a href="/aied/concepts/llm-training-and-fine-tuning/">att träna och anpassa en modell för undervisning</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratörer',
      html: `<a href="/aied/concepts/administrator/">Administratörsrollen</a>, <a href="/aied/concepts/governance/">styrning av AI</a>, <a href="/aied/concepts/educational-policy-ai/">institutionell policy</a>, <a href="/aied/concepts/legal-issues-and-risks/">rättsliga frågor och risker</a> och <a href="/aied/concepts/change-management/">förändringsledning</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Forskare',
      html: `<a href="/aied/concepts/research-methods-aied/">Forskningsmetoder inom AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorier och ramverk</a>, <a href="/aied/concepts/ai-ed-evaluation/">att utvärdera en AI-intervention i utbildningen</a>, <a href="/aied/concepts/educational-measurement/">mätningar inom utbildning</a>, <a href="/aied/concepts/learning-gains/">att mäta inlärningsvinster</a> och <a href="/aied/concepts/limitations-in-aied-research/">den övergripande evidensbasens begränsningar</a>.`,
    },
  ],
  statsHeading: 'Vad kunskapsbasen innehåller',
  statsIntro:
    'Varje sida är daterad, och siffrorna nedan speglar vad som är publicerat just nu; datumet för ”senast uppdaterad” i slutet av listan är den senaste ändringen.',
  conceptMap: {
    title: 'Begreppskarta över AI i utbildningen',
    desc:
      'En radiell karta med AI i utbildningen i mitten, förbunden med tolv övergripande begrepp: ' +
      'Modellering, Lärande, Jämlikhet, Återkoppling, AI-kompetens, Bedömning, Ämnesområden, Pedagogik, ' +
      'Etik, Tekniker, Utvärdering och Forskning.',
    navLabel: 'Begrepp om AI i utbildningen',
    center: 'AI i utbildningen',
    nodes: {
      'student-modeling': 'Modellering',
      'learning-theories': 'Lärande',
      'equity-in-ai-education': 'Jämlikhet',
      feedback: 'Återkoppling',
      'ai-literacy': 'AI-kompetens',
      assessment: 'Bedömning',
      'discipline-specific-aied': 'Ämnesområden',
      pedagogy: 'Pedagogik',
      ethics: 'Etik',
      'ai-technologies': 'Tekniker',
      'ai-ed-evaluation': 'Utvärdering',
      'research-methods-aied': 'Forskning',
    },
  },
  toc: [
    { text: 'Navigera på webbplatsen', slug: 'navigating-the-site', depth: 2 },
    { text: 'Chatta med kunskapsbasen', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Rekommenderade startpunkter per målgrupp', slug: 'starting-points', depth: 2 },
    { text: 'Grundläggande begrepp', slug: 'essential-concepts', depth: 3 },
    { text: 'Lärare', slug: 'instructors', depth: 3 },
    { text: 'Utvecklare', slug: 'developers', depth: 3 },
    { text: 'Administratörer', slug: 'administrators', depth: 3 },
    { text: 'Forskare', slug: 'researchers', depth: 3 },
    { text: 'Vad kunskapsbasen innehåller', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default sv;
