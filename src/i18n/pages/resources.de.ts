/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const de: ResourcesStrings = {
  title: 'Ressourcen',
  h1: 'Kostenlose Werkzeuge und Ressourcen',
  introHtml: [
    'Eine kuratierte Sammlung kostenloser Werkzeuge, Sammlungen, Instrumente und Formate für KI in der Bildung: Dinge, die Sie heute nutzen können, statt Forschung, die Sie erst lesen müssen. Die meisten stammen von Lehrkräften, Instructional Designern, Bibliothekarinnen und Bibliothekaren sowie Forschenden, und viele wurden mit KI-Unterstützung von Menschen erstellt, die keine professionellen Entwickler sind.',
    'Nicht alles hier ist interaktiv. Neben Browser-Werkzeugen und KI-Tutoren gibt es Bibliotheken mit fertigen Prompts, Sammlungen von Unterrichtsaktivitäten, Briefing- und Richtliniendokumente, Bewertungsinstrumente und offene Dateiformate. Jeder Eintrag verlinkt auf eine Seite über das Werkzeug: wer es erstellt hat, um welche Art von Sache es sich handelt, ob der Quellcode offen ist, was es kostet und wann der Link zuletzt geprüft wurde.',
    'Jeder Eintrag verweist auf eine externe Website, die diese Wissensbasis nicht kontrolliert, und die Links werden regelmäßig geprüft; jede Seite zeigt das Datum, an dem ihr Link zuletzt bestätigt wurde. Wenn ein Werkzeug umgezogen oder eingestellt worden ist oder fehlt und hier eigentlich stehen sollte, <a href=\"https://github.com/edtechdev/aied/issues\" target=\"_blank\" rel=\"noopener\">öffnen Sie ein Issue</a> im Repository.',
  ],
  empty: 'Noch keine Ressourcen.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'KI-Tutoren',
    'agent skill': 'Agent-Skills',
    'prompt or gem library': 'Prompt- und Gem-Bibliotheken',
    'collection of tools': 'Werkzeugsammlungen',
    'collection of activities': 'Aktivitätssammlungen',
    'assessment instrument': 'Bewertungsinstrumente',
    'open format or specification': 'Offene Formate und Spezifikationen',
    'ebook or guide': 'E-Books und Leitfäden',
    'case study collection': 'Fallstudiensammlungen',
    'dataset or benchmark': 'Datensätze und Benchmarks',
  },
};

export default de;