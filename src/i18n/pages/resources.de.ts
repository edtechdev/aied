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
    'Eine kuratierte Sammlung <strong>kostenloser Werkzeuge, Sammlungen, Instrumente und Formate</strong> für KI in der Bildung – Dinge, die Sie heute nutzen können, statt Forschung, die Sie erst lesen müssen. Sie stammen überwiegend von Lehrkräften, Instructional Designern, Bibliothekarinnen und Bibliothekaren sowie Forschenden, und viele wurden mit KI-Unterstützung von Menschen erstellt, die keine professionellen Entwickler sind.',
    'Nicht alles hier ist interaktiv. Neben Browser-Werkzeugen und KI-Tutoren finden Sie Bibliotheken mit fertigen Prompts und „Gems“, Sammlungen von Unterrichtsaktivitäten, Briefing- und Richtliniendokumente, Bewertungsinstrumente und offene Dateiformate. Jeder Eintrag ist eine kurze Zusammenfassung mit einem Link zu einer Seite, die angibt, wer ihn erstellt hat, um welche Art von Sache es sich handelt, ob der Quellcode verfügbar ist, was die Nutzung kostet und wann der Link zuletzt geprüft wurde.',
    'Jeder Eintrag verweist auf eine externe Website, die diese Wissensbasis nicht kontrolliert, und die Links werden regelmäßig erneut geprüft – jede Seite zeigt das Datum, an dem ihr Link zuletzt bestätigt wurde. Wenn ein Werkzeug umgezogen, eingestellt worden oder hier richtigerweise zu finden, aber noch nicht vorhanden ist, öffnen Sie am schnellsten ein Issue im Repository.',
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