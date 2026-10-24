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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      'המבט הכולל על התחום עצמו: מהי בינה מלאכותית בחינוך, כיצד התפתחה, ואילו נושאים חוצי תחומים (אוריינות בינה מלאכותית, שיתוף פעולה בין אדם לבינה מלאכותית, יכולת פעולה) מעצבים כל אשכול אחר.',
    'Learning and instruction':
      'כיצד בינה מלאכותית תומכת בלמידה ובהוראה, דרך הגישות הפדגוגיות, תאוריות הלמידה והתהליכים הממוקדים בלומד שבתוכם היא פועלת.',
    'Technologies and techniques':
      'השכבה הטכנית: מודלי הבינה המלאכותית והשיטות שמפעילים את טכנולוגיית החינוך, ומערכות מידול הלומד והנחיה אישית שנבנו עליהן.',
    'AI in the disciplines':
      'כיצד בינה מלאכותית מיושמת במקצועות הלימוד וברמות החינוך השונות: היקף הכיסוי של התחום על פני תחומי לימוד.',
    'Assessment and measurement':
      'כיצד בינה מלאכותית גם מעריכה לומדים וגם מעצבת מחדש את האופן שבו אנו מעריכים מערכות בינה מלאכותית ואת השפעתן.',
    'Equity, ethics, and responsible use':
      'שוויון, נגישות ואחריות הם בליבה של הבינה המלאכותית בחינוך.',
  },
  empty: 'אין עדיין עמודי מושגים.',
};

export default he;
