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
  h1: 'מאגר הידע לבינה מלאכותית בחינוך',
  introHtml: `ברוכים הבאים אל מאגר הידע לבינה מלאכותית בחינוך, משאב חופשי ונחלת הכלל בנושא <a href="/aied/concepts/ai-education/">בינה מלאכותית בחינוך</a>, למי שמלמד, לומד, מעצב או מנהל אותו. הוא מסכם ומסנתז מחקרים חינוכיים עדכניים בגישה פתוחה. סוכן בינה מלאכותית כותב ומעדכן את העמודים, בליווי עריכתי של מפתח האתר.`,
  navHeading: 'ניווט באתר',
  navHtml: `עיינו באינדקס בסרגל הצד, המאורגן לפי אשכולות, או <a href="/aied/search">חפשו</a> נושא. עמודי מאמרים ממצים מאמר אחד למטרתו, לשיטותיו ולממצאיו; עמודי מושגים מכנסים את מה שהמחקר אומר על רעיון אחד ומקשרים למחקרים שמאחוריו. כדי להתחיל משאלה, <a href="/aied/faq">השאלות הנפוצות</a> מכסות את מה שנשאל ראשון, כמו מדיניות בינה מלאכותית בקורס או השאלה אם להפעיל גלאי בינה מלאכותית. כדי להתחיל מכלי, <a href="/aied/resources">עמוד המשאבים</a> מפרט כלים ואוספים חינמיים, עם מי שיצר כל אחד מהם וכמה הוא עולה. המפה שלמעלה מקבצת את התחום לשנים עשר אשכולות, כש<a href="/aied/concepts/ai-education/">AI in Education</a> הוא הצומת המרכזי.`,
  chatHeading: 'שיחה עם מאגר הידע',
  chatHtml: `כל מאגר הידע מתפרסם גם כקבצים קריאים למכונה, כך שתוכלו להפנות אליו צ׳אט בינה מלאכותית או סוכן ולקבל תשובות שמצטטות את העמודים. <a href="/aied/ai">ההנחיות כאן</a>. עמודים חדשים נכנסים ל<a href="/aied/journal">יומן</a>, שיש לו <a href="/aied/rss.xml">פיד RSS</a>. לקריאה לא מקוונת, הורידו את <a href="/aied/aied.epub">EPUB</a> או את <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'נקודות פתיחה מומלצות לפי קהל יעד',
  startingIntro: 'התחילו בקבוצה שמתאימה לתפקיד שלכם.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'מושגי יסוד',
      html: `<a href="/aied/concepts/ai-literacy/">אוריינות בינה מלאכותית</a>, <a href="/aied/concepts/misconceptions/">תפיסות שגויות לגבי בינה מלאכותית</a>, <a href="/aied/concepts/agentic-ai/">בינה מלאכותית סוכנית (agentic AI)</a>, <a href="/aied/concepts/cognitive-offloading/">פריקת עומס קוגניטיבי (cognitive offloading)</a>, ו<a href="/aied/concepts/interpreting-and-applying-aied-research/">כיצד לפרש וליישם את המחקר הזה</a>, כולל מדוע מחקר בודד כמעט אינו מכריע בשאלה.`,
    },
    {
      id: 'instructors',
      heading: 'סגל הוראה',
      html: `<a href="/aied/concepts/teacher-role/">תפקיד ההוראה המשתנה</a>, <a href="/aied/concepts/learning-design/">עיצוב למידה</a>, <a href="/aied/concepts/assessment/">הערכה</a>, <a href="/aied/concepts/feedback/">משוב</a>, <a href="/aied/concepts/academic-integrity/">יושר אקדמי</a>, <a href="/aied/concepts/framing-ai-use-for-students/">הצגת השימוש בבינה מלאכותית</a> ו<a href="/aied/concepts/reducing-ai-misuse/">צמצום שימוש לרעה</a>. לכלים ולדוגמאות בתחום הדעת שלכם, ראו <a href="/aied/concepts/discipline-specific-aied/">בינה מלאכותית בתחום הדעת שלכם</a>.`,
    },
    {
      id: 'developers',
      heading: 'מפתחים',
      html: `<a href="/aied/concepts/educational-technology-developers/">בנייה עבור החינוך</a>, <a href="/aied/concepts/ai-technologies/">הטכנולוגיות שמתחת לפני השטח</a>, <a href="/aied/concepts/intelligent-tutoring/">הוראה חכמה (intelligent tutoring)</a>, <a href="/aied/concepts/multimodal/">בינה מלאכותית רב-מודאלית (multimodal)</a>, <a href="/aied/concepts/student-modeling/">מודל הלומד (learner modeling)</a>, ו<a href="/aied/concepts/llm-training-and-fine-tuning/">אימון והתאמה של מודל להוראה</a>.`,
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
    'כל עמוד מתוארך, והמספרים שלהלן משקפים את מה שמפורסם כרגע; תאריך "העדכון האחרון" שבסוף הרשימה הוא העריכה האחרונה.',
  conceptMap: {
    title: 'מפת מושגים של בינה מלאכותית בחינוך',
    desc:
      'מפה רדיאלית שבה בינה מלאכותית בחינוך במרכז, מחוברת לשנים עשר מושגי על: ' +
      'מידול, למידה, שוויון, משוב, אוריינות AI, הערכה, תחומי דעת, פדגוגיה, ' +
      'אתיקה, טכנולוגיות, הערכת התערבויות ומחקר.',
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