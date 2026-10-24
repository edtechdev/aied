/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the section headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const no: ConceptsStrings = {
  title: 'Begreper',
  h1: 'Begreper',
  introHtml:
    'Alle begrepssidene på nettstedet, i de samme seksjonene som sidepanelet til venstre. Hver side sier hva en idé innen AI og utdanning betyr, hva forskningen fant om den, og hvilke studier den bygger på. <a href="/aied/concepts/ai-education/">AI i utdanning</a> er paraplyen som binder dem sammen.',
  browseHtml:
    'Begrepssidene finnes også som <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a> for lesing offline. Vil du heller starte fra et spørsmål, en artikkel, et verktøy, et søk eller din egen assistent, se <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">journalen</a>, <a href="/aied/resources">ressursene</a>, <a href="/aied/search">søk</a> eller <a href="/aied/ai">AI-siden</a>.',
  countTemplate: '{count} begrepssider, gruppert i {strands} seksjoner.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Det brede blikket på feltet selv: hva AI i utdanning er, hvordan det har utviklet seg, og de tverrgående temaene (AI-kompetanse, samarbeid mellom menneske og AI, handlingskraft) som former alle andre seksjoner.',
    'Learning and instruction':
      'Hvordan AI støtter læring og undervisning, gjennom pedagogikken, læringsteoriene og de lærendeorienterte prosessene AI virker innenfor.',
    'Technologies and techniques':
      'Det tekniske laget: AI-modellene og metodene som driver utdanningsteknologi, og systemene for modellering av den lærende og veiledning som er bygget på dem.',
    'AI in the disciplines':
      'Hvordan AI brukes på tvers av fag og utdanningsnivåer: feltets dekning av fagområder.',
    'Assessment and measurement':
      'Hvordan AI både vurderer lærende og endrer hvordan vi evaluerer AI-systemer og virkningen deres.',
    'Equity, ethics, and responsible use':
      'Likestilling, tilgang og ansvar står sentralt i AI i utdanning.',
  },
  empty: 'Ingen begrepssider ennå.',
};

export default no;
