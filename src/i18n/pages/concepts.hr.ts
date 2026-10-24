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
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const hr: ConceptsStrings = {
  title: 'Pojmovi',
  h1: 'Pojmovi',
  introHtml:
    'Sve stranice pojmova, u istim cjelinama kao u lijevoj bočnoj traci. Svaka kaže što jedna ideja u AI-ju i obrazovanju znači, što je istraživanje o njoj pokazalo i na kojim se studijama temelji. <a href="/aied/concepts/ai-education/">Umjetna inteligencija u edukaciji</a> krovni je pojam koji ih povezuje.',
  browseHtml:
    'Stranice pojmova dostupne su i kao <a href="/aied/aied.epub">EPUB</a> ili <a href="/aied/aied.pdf">PDF</a> za čitanje offline. Ako želite krenuti od pitanja, rada, alata, pretrage ili vlastitog asistenta, pogledajte <a href="/aied/faq">FAQ</a>, <a href="/aied/journal">časopis</a>, <a href="/aied/resources">resurse</a>, <a href="/aied/search">pretragu</a> ili <a href="/aied/ai">stranicu o AI-ju</a>.',
  countTemplate: '{count} stranica pojmova, raspoređenih u {strands} cjelina.',
  empty: 'Još nema stranica pojmova.',
};

export default hr;
