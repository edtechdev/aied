/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
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

const de: ConceptsStrings = {
  title: 'Konzepte',
  h1: 'Konzepte',
  introHtml:
    'Alle Konzeptseiten der Website, in denselben Abschnitten wie die linke Seitenleiste. Jede sagt, was eine Idee zu KI und Bildung bedeutet, was die Forschung dazu gefunden hat und auf welchen Studien sie beruht. <a href="/aied/concepts/ai-education/">KI in der Bildung</a> ist der Überbegriff, der sie zusammenhält.',
  browseHtml:
    'Die Konzeptseiten gibt es auch als <a href="/aied/aied.epub">EPUB</a> oder <a href="/aied/aied.pdf">PDF</a> zum Offline-Lesen. Wenn Sie stattdessen mit einer Frage, einer Arbeit, einem Werkzeug, einer Suche oder Ihrem eigenen Assistenten beginnen möchten, sehen Sie sich die <a href="/aied/faq">FAQs</a>, das <a href="/aied/journal">Journal</a>, die <a href="/aied/resources">Ressourcen</a>, die <a href="/aied/search">Suche</a> oder die <a href="/aied/ai">KI-Seite</a> an.',
  countTemplate: '{count} Konzeptseiten, in {strands} Abschnitten.',
  strandBlurbs: {
    'Foundations of AI in education':
      'Die übergeordnete Sicht auf das Feld selbst: was KI in der Bildung ist, wie sie sich entwickelt hat und welche übergreifenden Themen (KI-Kompetenz, Zusammenarbeit zwischen Mensch und KI, Handlungsfähigkeit) alle anderen Bereiche prägen.',
    'Learning and instruction':
      'Wie KI Lernen und Unterricht unterstützt, über die Pädagogiken, Lerntheorien und Prozesse, die sich an Lernende richten und in denen KI wirkt.',
    'Technologies and techniques':
      'Die technische Ebene: die KI-Modelle und -Verfahren, die Bildungstechnologie antreiben, und die darauf aufbauenden Systeme zur Lernendenmodellierung und zum Tutoring.',
    'AI in the disciplines':
      'Wie KI in den Fächern und auf den verschiedenen Bildungsstufen eingesetzt wird: die Abdeckung der Fachbereiche dieses Feldes.',
    'Assessment and measurement':
      'Wie KI sowohl Lernende beurteilt als auch verändert, wie wir KI-Systeme und ihre Wirkung bewerten.',
    'Equity, ethics, and responsible use':
      'Gerechtigkeit, Zugang und Verantwortung sind zentral für KI in der Bildung.',
  },
  empty: 'Noch keine Konzeptseiten.',
};

export default de;
