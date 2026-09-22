/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
import type { ResourcesStrings } from './resources.en';

const he: ResourcesStrings = {
  title: 'משאבים',
  h1: 'כלים ומשאבים חינמיים',
  introHtml: [
    'אוסף נבחר של <strong>כלים, אוספים, מכשירים ותבניות חינמיות</strong> לבינה מלאכותית בחינוך — דברים שאפשר להשתמש בהם כבר היום, ולא מחקר שנדרש לקרוא קודם. רובם נוצרו בידי אנשי חינוך, מעצבי למידה, ספרנים וחוקרים, ורבים מהם נבנו בעזרת בינה מלאכותית על ידי אנשים שאינם מפתחים מקצועיים.',
    'לא הכול כאן אינטראקטיבי. לצד כלים לדפדפן וחונכים מבוססי בינה מלאכותית תמצאו ספריות של הנחיות מוכנות ו"ג׳מים", אוספים של פעילויות כיתתיות, מסמכי תדרוך ומדיניות, מכשירי הערכה ותבניות קבצים פתוחות. כל רשומה היא תקציר קצר שמקשר לעמוד שמפרט מי יצר את הדבר, מאיזה סוג הוא, אם קוד המקור זמין, מה העלות של השימוש בו ומתי הקישור שלו נבדק לאחרונה.',
    'כל רשומה מקשרת לאתר חיצוני שמאגר הידע הזה אינו שולט בו, והקישורים נבדקים מחדש מעת לעת — כל עמוד מציג את התאריך שבו הקישור שלו אושר לאחרונה. אם כלי עבר מקום, נסגר, או ראוי להיות כאן וחסר, הדרך המהירה ביותר היא לפתוח דיווח (issue) במאגר הקוד.',
  ],
  empty: 'אין עדיין משאבים.',
  groupLabels: {
    software: 'תוכנה',
    'ai tutor': 'חונכים מבוססי בינה מלאכותית',
    'agent skill': 'כישורי סוכן (Agent Skills)',
    'prompt or gem library': 'ספריות הנחיות וג׳מים',
    'collection of tools': 'אוספי כלים',
    'collection of activities': 'אוספי פעילויות',
    'assessment instrument': 'מכשירי הערכה',
    'open format or specification': 'תבניות ומפרטים פתוחים',
    'ebook or guide': 'ספרים אלקטרוניים ומדריכים',
    'case study collection': 'אוספי מקרי בוחן',
    'dataset or benchmark': 'מערכי נתונים ומדדי השוואה',
  },
};

export default he;