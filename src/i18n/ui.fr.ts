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

const fr: UiStrings = {
  more: 'Plus',
  toolsLink: 'Outils et ressources',
  journalLink: 'Journal',
  faqLink: 'FAQ',
  githubLink: 'GitHub',
  language: 'Langue',
  chooseLanguage: 'Choisir une langue',
  notTranslated: 'Anglais seulement',
  notTranslatedHint:
    'Cette page n\'est pas encore traduite, le lien ouvre donc la page d\'accueil de cette langue.',
  translationNoticeHtml:
    'Cette page est traduite en français, mais la base de connaissances elle-même, y compris ses pages d\'articles, de concepts et de FAQ, est rédigée en anglais.',
  originalPageLabel: 'Lire cette page en anglais',
};

export default fr;
