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
  introHtml: `Välkommen till <strong>kunskapsbasen om AI i utbildningen</strong> — en kostnadsfri resurs i allmän egendom om <a href="/aied/concepts/ai-education/">artificiell intelligens i utbildningen</a>, för dem som undervisar, studerar, utformar eller administrerar den. Den sammanfattar ny forskning med öppen tillgång till korta, strukturerade sidor som du kan läsa och handla efter. Ett påpekande om hur den är gjord: sidorna genereras och uppdateras av en AI-agent, med redaktionell vägledning från webbplatsens utvecklare. Varje påstående anger vilken studie som ligger bakom det, så källorna går att kontrollera.`,
  navHeading: 'Navigera på webbplatsen',
  navHtml: `Bläddra i förteckningen fält för fält i sidofältet till vänster för att se hur området är organiserat, eller <a href="/aied/search">sök</a> i hela kunskapsbasen om du redan har ett ämne i åtanke. Artikelsidor destillerar en studie till dess syfte, metoder och resultat, med fullständig källhänvisning och länkar till relaterade arbeten; begreppssidor samlar det forskningen säger om en idé och länkar till studierna bakom den. Vill du hellre utgå från en fråga samlar <a href="/aied/faq">förteckningen över vanliga frågor</a> de som besökare ställer först, från AI-policy för kurser till om man ska använda AI-detektorer; vill du hellre utgå från ett verktyg listar <a href="/aied/resources">resurssidan</a> kostnadsfria verktyg, samlingar och instrument du kan ta till dig och använda, vart och ett med uppgift om vem som gjort det och vad det kostar. Begreppskartan ovan visar vad som hänger ihop med vad; <a href="/aied/concepts/ai-education/">AI i utbildningen</a> är kartsidan bakom den, som grupperar begreppen i ett drygt dussin övergripande fält.`,
  chatHeading: 'Chatta med kunskapsbasen',
  chatHtml: `Allt här finns också publicerat som maskinläsbara filer, så du kan rikta din föredragna AI-chattbot eller AI-agent mot kunskapsbasen och få svar som citerar den i stället för att gissa — <a href="/aied/ai">prompterna finns här</a>. Nya sidor visas i <a href="/aied/journal">journalen</a>, som har ett <a href="/aied/rss.xml">RSS-flöde</a> om du vill följa med. För läsning utan internet, ta <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Rekommenderade startpunkter per målgrupp',
  startingIntro: 'Nedan följer några rekommenderade begrepp att börja med i den här kunskapsbasen.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Grundläggande begrepp',
      html: `<a href="/aied/concepts/ai-literacy/">AI-kompetens</a>, <a href="/aied/concepts/misconceptions/">missuppfattningar om AI</a>, <a href="/aied/concepts/agentic-ai/">agentisk AI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitiv avlastning</a> och <a href="/aied/concepts/interpreting-and-applying-aied-research/">hur man tolkar och tillämpar den här forskningen</a>: vad resultaten kan och inte kan stödja, och varför en enstaka studie sällan utreder en fråga.`,
    },
    {
      id: 'instructors',
      heading: 'Lärare',
      html: `<a href="/aied/concepts/teacher-role/">Den föränderliga lärarrollen</a>, <a href="/aied/concepts/learning-design/">lärdesign</a>, <a href="/aied/concepts/assessment/">bedömning</a>, <a href="/aied/concepts/feedback/">återkoppling</a>, <a href="/aied/concepts/academic-integrity/">akademisk redlighet</a>, <a href="/aied/concepts/framing-ai-use-for-students/">att rama in AI-användning</a> och <a href="/aied/concepts/reducing-ai-misuse/">att minska missbruk</a>. För verktyg, evidens och exempel inom ditt eget ämne, se <a href="/aied/concepts/discipline-specific-aied/">AI inom ditt eget ämnesområde</a>.`,
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
    'Varje sida här är daterad, och kunskapsbasen växer allteftersom ny forskning med öppen tillgång publiceras och granskas. Siffrorna nedan läses av från det aktuella innehållet; datumet är den senaste siduppdateringen.',
  conceptMap: {
    title: 'Begreppskarta över AI i utbildningen',
    desc:
      'En radiell karta med AI i utbildningen i mitten, förbunden med tolv övergripande begrepp: ' +
      'Modellering, Lärande, Jämlikhet, Återkoppling, AI-kompetens, Bedömning, Ämnesområden, Pedagogik, ' +
      'Etik, Tekniker, Utvärdering och Forskning. Välj en nod för att öppna dess sida.',
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
