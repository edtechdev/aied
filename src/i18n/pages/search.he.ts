/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
import type { SearchStrings } from './search.en';

const he: SearchStrings = {
  title: 'חיפוש',
  h1: 'חיפוש',
  intro: 'חפשו בכל המאמרים והמושגים. השתמשו במסננים כדי לצמצם את התוצאות.',
  corpusIntro:
    'כל מה שיש במאגר הידע ניתן לחיפוש — כולל השאלות הנפוצות ועמודי הכלים והמשאבים החינמיים. נכון לעכשיו יש בו:',
  placeholder: 'חיפוש מאמרים, מושגים ושאלות נפוצות...',
  filterLabels: {
    page_type: 'סוג',
    discipline: 'תחום דעת',
    level: 'רמה',
    audience: 'קהל יעד',
    research_method: 'עיצוב המחקר',
    page_kind: 'סוג העמוד',
  },
};

export default he;