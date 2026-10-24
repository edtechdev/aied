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

const hu: ConceptsStrings = {
  title: 'Fogalmak',
  h1: 'Fogalmak',
  introHtml:
    'A webhely összes fogalomoldala, ugyanazokban a fejezetekben, mint a bal oldali oldalsáv. Mindegyik elmondja, mit jelent egy gondolat az AI és az oktatás területén, mit talált róla a kutatás, és mely vizsgálatokra támaszkodik. Az <a href=\"/aied/concepts/ai-education/\">AI az oktatásban</a> oldal az a gyűjtőpont, amely összeköti őket.',
  browseHtml:
    'A fogalomoldalak <a href=\"/aied/aied.epub\">EPUB</a> vagy <a href=\"/aied/aied.pdf\">PDF</a> formában is elérhetők az offline olvasáshoz. Ha kérdésből, tanulmányból, eszközből, keresésből vagy saját asszisztenséből szeretne kiindulni, nézze meg a <a href=\"/aied/faq\">GYIK</a> oldalt, a <a href=\"/aied/journal\">naplót</a>, a <a href=\"/aied/resources\">forrásokat</a>, a <a href=\"/aied/search\">keresést</a> vagy az <a href=\"/aied/ai\">AI-oldalt</a>.',
  countTemplate: '{count} fogalomoldal, {strands} fejezetbe csoportosítva.',
  strandBlurbs: {
    'Foundations of AI in education':
      'A terület egészének átfogó képe: mi az AI az oktatásban, hogyan fejlődött, és mely átfogó témák (AI-műveltség, ember és AI együttműködése, cselekvőképesség) alakítják a többi fejezetet.',
    'Learning and instruction':
      'Hogyan támogatja az AI a tanulást és az oktatást azokon a pedagógiákon, tanuláselméleteken és tanulóra irányuló folyamatokon keresztül, amelyekben az AI működik.',
    'Technologies and techniques':
      'A technikai réteg: az oktatástechnológiát működtető AI-modellek és módszerek, valamint az ezekre épülő tanulómodellező és tutoráló rendszerek.',
    'AI in the disciplines':
      'Hogyan alkalmazzák az AI-t a tudományterületeken és tantárgyakban, valamint az oktatási szinteken: a terület tantárgyi lefedettsége.',
    'Assessment and measurement':
      'Hogyan értékeli az AI a tanulókat, és hogyan formálja át azt, ahogyan az AI-rendszereket és hatásukat megítéljük.',
    'Equity, ethics, and responsible use':
      'Az esélyegyenlőség, a hozzáférés és a felelősség központi kérdés az AI oktatásában.',
  },
  empty: 'Még nincsenek fogalomoldalak.',
};

export default hu;
