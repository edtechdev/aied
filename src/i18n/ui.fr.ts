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
  language: "Langue",
  chooseLanguage: "Choisir une langue",
  notTranslated: "Anglais seulement",
  notTranslatedHint: "Cette page n'est pas encore traduite, le lien ouvre donc la page d'accueil de cette langue.",
  translationNoticeHtml:
    "Cette page est traduite en français, mais la base de connaissances elle-même, y compris ses pages d'articles, de concepts et de FAQ, est rédigée en anglais.",
  originalPageLabel: 'Lire cette page en anglais',
};

export default en;
