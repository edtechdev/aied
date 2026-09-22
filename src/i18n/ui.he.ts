/**
 * Interface strings (chrome) per locale: the header's more menu, the language
 * switcher and the notice shown on a translated page. Docs-site generators ship
 * translated UI packs for their own chrome; this is the equivalent for the pages
 * translated here.
 */
import type { UiStrings } from './ui.en';

const he: UiStrings = {
  more: 'עוד',
  toolsLink: 'כלים ומשאבים',
  journalLink: 'יומן',
  faqLink: 'שאלות נפוצות',
  language: 'שפה',
  chooseLanguage: 'בחירת שפה',
  notTranslated: 'רק באנגלית',
  notTranslatedHint:
    'העמוד הזה עדיין אינו מתורגם, ולכן הקישור יפתח את דף הבית של אותה שפה.',
  translationNoticeHtml:
    'העמוד הזה מתורגם לעברית, אך מאגר הידע ועמודי המאמרים, המושגים והשאלות הנפוצות שלו כתובים באנגלית.',
  originalPageLabel: 'קראו את העמוד הזה באנגלית',
};

export default he;