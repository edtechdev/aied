/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
import type { HomeStrings } from './home.en';

const he: HomeStrings = {
  title: 'דף הבית',
  h1: 'AI in Education Knowledge Base',
  introHtml: `ברוכים הבאים אל <strong>AI in Education Knowledge Base</strong> — משאב חופשי ונחלת הכלל בנושא <a href="/aied/concepts/ai-education/">בינה מלאכותית בחינוך</a>, למי שמלמד, לומד, מעצב או מנהל אותו. הוא מזקק מחקרים עדכניים בגישה פתוחה לעמודים קצרים ומובנים שאפשר לקרוא וליישם. הערה על אופן היצירה: את העמודים יוצר ומעדכן סוכן בינה מלאכותית, בליווי עריכתי של מפתח האתר. כל טענה מציינת את המאמר שעומד מאחוריה, כך שהמקורות זמינים לבדיקה.`,
  navHeading: 'ניווט באתר',
  navHtml: `עיינו באינדקס לפי אשכולות בסרגל הצד כדי לראות כיצד התחום מאורגן, או <a href="/aied/search">חפשו</a> בכל מאגר הידע אם כבר יש לכם נושא בראש. עמודי מאמרים ממצים מאמר אחד למטרתו, לשיטותיו ולממצאיו, עם ציטוט מלא וקישורים לעבודות קשורות; עמודי מושגים מכנסים את מה שהמחקר אומר על רעיון אחד ומקשרים למחקרים שמאחוריו. אם תעדיפו להתחיל משאלה, <a href="/aied/faq">אינדקס השאלות הנפוצות</a> מכנס את השאלות שנשאלות ראשונות, ממדיניות בינה מלאכותית בקורס ועד לשאלה אם להפעיל גלאי בינה מלאכותית; אם תעדיפו להתחיל מכלי, <a href="/aied/resources">עמוד המשאבים</a> מפרט כלים, אוספים ומכשירים חינמיים שתוכלו להשתמש בהם, וכל אחד מהם מציין מי יצר אותו וכמה הוא עולה. מפת המושגים שלמעלה מציגה מה מתחבר למה; <a href="/aied/concepts/ai-education/">AI in Education</a> הוא עמוד המפה שמאחוריה, שמקבץ את המושגים לתריסר בערך של אשכולות-על.`,
  chatHeading: 'שיחה עם מאגר הידע',
  chatHtml: `כל מה שכאן מתפרסם גם כקבצים קריאים למכונה, כך שתוכלו להפנות את צ׳אט הבינה המלאכותית או הסוכן המועדפים עליכם אל מאגר הידע ולקבל תשובות שמצטטות אותו במקום לנחש — <a href="/aied/ai">ההנחיות כאן</a>. עמודים חדשים מופיעים ב<a href="/aied/journal">יומן</a>, שיש לו <a href="/aied/rss.xml">פיד RSS</a> אם תרצו לעקוב. לקריאה לא מקוונת, קחו את <a href="/aied/aied.epub">EPUB</a> או את <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'נקודות פתיחה מומלצות לפי קהל יעד',
  startingIntro: 'להלן כמה מושגים מומלצים להתחלה במאגר הידע הזה.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'מושגי יסוד',
      html: `<a href="/aied/concepts/ai-literacy/">אוריינות בינה מלאכותית</a>, <a href="/aied/concepts/misconceptions/">תפיסות שגויות לגבי בינה מלאכותית</a>, <a href="/aied/concepts/agentic-ai/">בינה מלאכותית סוכנית (agentic AI)</a>, <a href="/aied/concepts/cognitive-offloading/">פריקת עומס קוגניטיבי (cognitive offloading)</a>, ו<a href="/aied/concepts/interpreting-and-applying-aied-research/">כיצד לפרש וליישם את המחקר הזה</a>: מה הממצאים יכולים לתמוך בו ומה לא, ומדוע מחקר בודד כמעט אינו מכריע בשאלה.`,
    },
    {
      id: 'instructors',
      heading: 'סגל הוראה',
      html: `<a href="/aied/concepts/teacher-role/">תפקיד ההוראה המשתנה</a>, <a href="/aied/concepts/learning-design/">עיצוב למידה</a>, <a href="/aied/concepts/assessment/">הערכה</a>, <a href="/aied/concepts/feedback/">משוב</a>, <a href="/aied/concepts/academic-integrity/">יושר אקדמי</a>, <a href="/aied/concepts/framing-ai-use-for-students/">הצגת השימוש בבינה מלאכותית</a> ו<a href="/aied/concepts/reducing-ai-misuse/">צמצום שימוש לרעה</a>. לכלים, לראיות ולדוגמאות בתחום הדעת שלכם, ראו <a href="/aied/concepts/discipline-specific-aied/">בינה מלאכותית בתחום הדעת שלכם</a>.`,
    },
    {
      id: 'developers',
      heading: 'מפתחים',
      html: `<a href="/aied/concepts/educational-technology-developers/">בנייה עבור החינוך</a>, <a href="/aied/concepts/ai-technologies/">הטכנולוגיות שמתחת לפני השטח</a>, <a href="/aied/concepts/intelligent-tutoring/">הוראה חכמה (intelligent tutoring)</a>, <a href="/aied/concepts/multimodal/">בינה מלאכותית רב-מודאלית (multimodal)</a>, <a href="/aied/concepts/student-modeling/">מודל הלומד (learner modeling)</a>, ו<a href="/aied/concepts/pedagogical-llm-training/">אימון והתאמה של מודל להוראה</a>.`,
    },
    {
      id: 'administrators',
      heading: 'מנהלים',
      html: `<a href="/aied/concepts/administrator/">תפקיד המנהל</a>, <a href="/aied/concepts/governance/">ממשל בינה מלאכותית (AI governance)</a>, <a href="/aied/concepts/educational-policy-ai/">מדיניות מוסדית</a>, <a href="/aied/concepts/legal-issues-and-risks/">סוגיות משפטיות וסיכונים</a>, ו<a href="/aied/concepts/change-management/">ניהול שינוי</a>.`,
    },
    {
      id: 'researchers',
      heading: 'חוקרים',
      html: `<a href="/aied/concepts/research-methods-aied/">שיטות מחקר ב-AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">תיאוריות ומסגרות</a>, <a href="/aied/concepts/ai-ed-evaluation/">הערכת התערבות של בינה מלאכותית בחינוך</a>, <a href="/aied/concepts/educational-measurement/">מדידה חינוכית</a>, <a href="/aied/concepts/learning-gains/">מדידת הישגי למידה</a>, ו<a href="/aied/concepts/limitations-in-aied-research/">המגבלות הרוחביות של בסיס הראיות הזה</a>.`,
    },
  ],
  statsHeading: 'מה יש במאגר הידע',
  statsIntro:
    'כל עמוד כאן מתוארך, ומאגר הידע גדל עם פרסומם וסקירתם של מחקרים חדשים בגישה פתוחה. המספרים שלהלן נקראים מהתוכן הנוכחי; התאריך הוא מועד העדכון האחרון של עמוד.',
  conceptMap: {
    title: 'מפת מושגים של בינה מלאכותית בחינוך',
    desc:
      'מפה רדיאלית שבה בינה מלאכותית בחינוך במרכז, מחוברת לשנים עשר מושגי על: ' +
      'מידול, למידה, שוויון, משוב, אוריינות AI, הערכה, תחומי דעת, פדגוגיה, ' +
      'אתיקה, טכנולוגיות, הערכת התערבויות ומחקר. בחירת כל צומת תפתח את העמוד שלו.',
    navLabel: 'מושגי בינה מלאכותית בחינוך',
    center: 'בינה מלאכותית בחינוך',
    nodes: {
      'student-modeling': 'מידול',
      'learning-theories': 'למידה',
      'equity-in-ai-education': 'שוויון',
      feedback: 'משוב',
      'ai-literacy': 'אוריינות AI',
      assessment: 'הערכה',
      'discipline-specific-aied': 'תחומי דעת',
      pedagogy: 'פדגוגיה',
      ethics: 'אתיקה',
      'ai-technologies': 'טכנולוגיות',
      'ai-ed-evaluation': 'הערכת התערבויות',
      'research-methods-aied': 'מחקר',
    },
  },
  toc: [
    { text: 'ניווט באתר', slug: 'navigating-the-site', depth: 2 },
    { text: 'שיחה עם מאגר הידע', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'נקודות פתיחה מומלצות לפי קהל יעד', slug: 'starting-points', depth: 2 },
    { text: 'מושגי יסוד', slug: 'essential-concepts', depth: 3 },
    { text: 'סגל הוראה', slug: 'instructors', depth: 3 },
    { text: 'מפתחים', slug: 'developers', depth: 3 },
    { text: 'מנהלים', slug: 'administrators', depth: 3 },
    { text: 'חוקרים', slug: 'researchers', depth: 3 },
    { text: 'מה יש במאגר הידע', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default he;