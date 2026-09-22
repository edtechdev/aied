/**
 * Interface strings (chrome) per locale: the language switcher and the notice
 * shown on a translated page. Docs-site generators ship translated UI packs for
 * their own chrome; this is the equivalent for the pages translated here.
 */
export interface UiStrings {
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

const en: UiStrings = {
  language: 'Language',
  chooseLanguage: 'Choose a language',
  notTranslated: 'English only',
  notTranslatedHint: 'This page is not translated yet, so the link opens that language home page.',
  translationNoticeHtml: '',
  originalPageLabel: 'Read this page in English',
};

export default en;