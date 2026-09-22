/**
 * Interface strings (chrome) per locale: the header's more menu, the language
 * switcher and the notice shown on a translated page. Docs-site generators ship
 * translated UI packs for their own chrome; this is the equivalent for the pages
 * translated here.
 */
export interface UiStrings {
  /** Accessible name of the overflow ("more") button in the header. */
  more: string;
  /** Label of the tools and resources entry in the overflow menu. */
  toolsLink: string;
  /** Label of the journal entry in the overflow menu. */
  journalLink: string;
  /** Label of the FAQ entry in the overflow menu. */
  faqLink: string;
  /** Label and accessible name of the language switcher button. */
  language: string;
  /** Heading inside the switcher popover. */
  chooseLanguage: string;
  /** Suffix shown for a locale that has no translation of the current page. */
  notTranslated: string;
  /** Tooltip on the entry that is not translated. */
  notTranslatedHint: string;
  /** HTML notice shown at the top of a translated page. */
  translationNoticeHtml: string;
  /** Link text that points back at the English page a translation came from. */
  originalPageLabel: string;
}

const de: UiStrings = {
  more: 'Mehr',
  toolsLink: 'Werkzeuge und Ressourcen',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  language: 'Sprache',
  chooseLanguage: 'Sprache wählen',
  notTranslated: 'Nur auf Englisch',
  notTranslatedHint:
    'Diese Seite ist noch nicht übersetzt, der Link öffnet daher die Startseite dieser Sprache.',
  translationNoticeHtml:
    'Diese Seite wurde maschinell ins Deutsche übersetzt; die Wissensbasis selbst und ihre Artikel-, Konzept- und FAQ-Seiten sind auf Englisch verfasst.',
  originalPageLabel: 'Diese Seite auf Englisch lesen',
};

export default de;