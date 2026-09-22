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
  /** Label of the GitHub entry in the overflow menu. */
  githubLink: string;
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

const es: UiStrings = {
  more: 'Más',
  toolsLink: 'Herramientas y recursos',
  journalLink: 'Diario',
  faqLink: 'Preguntas frecuentes',
  githubLink: 'GitHub',
  language: 'Idioma',
  chooseLanguage: 'Elige un idioma',
  notTranslated: 'Solo en inglés',
  notTranslatedHint:
    'Esta página aún no está traducida, así que el enlace abre la página de inicio de ese idioma.',
  translationNoticeHtml:
    'Esta página está traducida al español, pero la base de conocimiento y sus páginas de artículo, de concepto y de preguntas frecuentes están escritas en inglés.',
  originalPageLabel: 'Leer esta página en inglés',
};

export default es;
