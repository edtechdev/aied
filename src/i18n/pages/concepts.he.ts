/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const he: ConceptsStrings = {
  title: 'מושגים',
  h1: 'מושגים',
  introHtml:
    'כל עמודי המושגים באתר, באותם אשכולות שבסרגל הצד השמאלי. כל עמוד אומר מה פירושו של רעיון בבינה מלאכותית ובחינוך, מה המחקר מצא לגביו, ועל אילו מחקרים הוא נשען. <a href="/aied/concepts/ai-education/">בינה מלאכותית בחינוך</a> היא המטרייה שמחברת ביניהם.',
  browseHtml:
    'עמודי המושגים מופיעים גם כ<a href="/aied/aied.epub">EPUB</a> או <a href="/aied/aied.pdf">PDF</a> לקריאה לא מקוונת. כדי להתחיל במקום זאת משאלה, ממאמר, מכלי, מחיפוש או מהעוזר שלכם, ראו <a href="/aied/faq">שאלות נפוצות</a>, <a href="/aied/journal">יומן</a>, <a href="/aied/resources">משאבים</a>, <a href="/aied/search">חיפוש</a> או <a href="/aied/ai">עמוד הבינה המלאכותית</a>.',
  countTemplate: '{count} עמודי מושגים, המחולקים ל-{strands} אשכולות.',
  empty: 'אין עדיין עמודי מושגים.',
};

export default he;
