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

const ar: UiStrings = {
  more: 'المزيد',
  toolsLink: 'الأدوات والموارد',
  journalLink: 'السجل',
  faqLink: 'الأسئلة الشائعة',
  language: 'اللغة',
  chooseLanguage: 'اختر لغة',
  notTranslated: 'بالإنجليزية فقط',
  notTranslatedHint:
    'لم تُترجم هذه الصفحة بعد، لذا يفتح الرابط الصفحة الرئيسية لتلك اللغة.',
  translationNoticeHtml:
    'هذه الصفحة مترجمة إلى العربية، أما قاعدة المعارف نفسها، بما في ذلك صفحات المقالات والمفاهيم والأسئلة الشائعة، فهي مكتوبة بالإنجليزية.',
  originalPageLabel: 'اقرأ هذه الصفحة بالإنجليزية',
};

export default ar;