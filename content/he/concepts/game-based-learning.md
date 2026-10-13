---
title: למידה מבוססת משחק
created: "2026-10-12T19:40:00-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
reviewed_by: [editor]
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **למידה מבוססת משחק (GBL)** — השימוש במשחקים עצמם (דיגיטליים או פיזיים) כמדיה והקשר ללמידה, שבה המכניקה, האתגרים וההתקדמות של המשחק נושאים תוכן חינוכי. לומדים לומדים *דרך* משחק. באופן קשור, **מִש�וק** מיישם מרכיבי עיצוב-משחק (נקודות, תגים, רמות, טבלאות הישגיות) על פעילויות למידה שאינן-משחק ללא הפיכתן למשחקים שלמים. בחינוך בינה מלאכותית ו[[educational-robotics|רובוטיקה]], שתי הגישות משמשות להפיכת תוכן טכני למרתק ולמניע.

## שאלות למחשבה

- למידה מבוססת משחק משתמשת במשחק עצמו כמדיה ללמידה — אתם לומדים *דרך* משחק. מִשחוח רק מקנן נקודות, תגים ורמות על פעילות שאינה-משחק. כמה שונים אתם חושבים שהשניים הם בהשפעה על למידה אמיתית, אל מול על מעורבות קצרת-טווח?
- סקירה השוואתית מצאה למידה מבוססת משחק נפוצה יותר בהקשרים לא-פורמליים בעוד מִשחוח דומיננט בכיתות פורמליות ועדיף למידה מבוססת-פרויקטים. מדוע אתם חושבים שכל גישה מצאה בית שונה — ומה זה אומר לנו על היכן כל אחת עובדת בצורה הטובה ביותר?
- מִשחוח מעוגנת בתיאוריית ההגדרה העצמית — [[agency|אוטונומיה]], מיומנות, קרבה. אם מוטיבציה עוסקת בסיפוק הצרכים האלה, מדוע מערכת נקודות-ותגים עשויה להצליח או להיכשל לפי האופן שבו היא מעצבת מאמץ ותשומת-לב נתפסים?
- [[research-methods-aied|מחקר]] מציע שהתועלת המוטיבציונית של עיצובים דמויי-משחק ונתמכים-AI תלויה בהאופן שבו הם מעצבים עומס ותשומת-לב נתפסים, לא במִשחוח בלבד. מתי ראיתם משחק או תגים ממריאים מעורבות ללא שיפור למידה בפועל — או ההפך?

## מבוא

GBL מעוגנת בתיאוריות [[motivation|מוטיבציה]], [[student-engagement|מעורבות סטודנטים]] ו[[active-learning|למידה פעילה]]: משחקים מספקים מוטיבציה פנימית, משוב מיידי, והקשרי בעיה אותנטיים. היא חופפת עם [[simulation|סימולציה]], עם [[project-based-learning|למידה מבוססת-פרויקטים]], ועם [[educational-robotics|רובוטיקה]]. GBL רלוונטית במיוחד ל[[educational-robotics|רובוטיקה]], ל[[computational-thinking|חשיבה חישובית]], ול[[cs-education|מדעי המחשב]], שבהם משחקים יכולים להפוך מושגים טכניים מופשטים למוגדרים ומהנים.

### כיצד GBL מופיעה במחקר של מאגר הידע

- **חינוך רובוטיקה:** [[game-based-gamified-robotics-education-review-2026|סקירה שיטתית השוואתית]] של למידה מבוססת משחק ומִשחוח בחינוך רובוטיקה מצאה GBL נפוצה יותר בהקשרים לא-פורמליים, בעוד מִשחוח דומיננט בכיתות פורמליות ועדיף [[project-based-learning|למידה מבוססת-פרויקטים]].
- **משחקים מתווכי-רובוט:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] הוא משחק משחק-תפקידים מתווך-רובוט להתערבות אנטי-בריונות, ו[[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] משתמש ב[[storytelling-in-education|סיפור-סיפורים דיגיטלי]] אינטראקטיבי כדי להמריץ מוטיבציה.
- **סוכנים [[conversational-ai|שיחתיים]] של AI במשחקי סימולציה:** Wenzel, Geiger, ו-Liening (2026) מפיקים את מסגרת CAIS-GBL — ארבעה עקרונות עיצוב וחמש-עשרה תכונות עיצוב לסוכנים שיחתיים של AI בלמידה מבוססת-משחק דיגיטלית — ממטא-דרישות מונעות-תיאוריה החולמות על מעורבות קוגניטיבית, מוטיבציונית, [[affective-computing|אפקטיבית]], ו[[sociocultural-learning|סוציו-תרבותית]], עם עמדת שוויון ([[equity-in-ai-education]]) בעיצוב. הסוכן המומשטח שלהם (Lara) במשחק סימולציה עסקית קובל בחיוב למעורבות קוגניטיבית ול[[community-of-inquiry|נוכחות חברתית]] ולתמיכת [[self-regulated-learning|למידה עצמית-מוסדרת]], ומתייחס לפער הנפוץ של משוב [[formative-assessment|מעצב]] מוגבל ורפלקציה מובנית במשחקי סימולציה.


- **יעילות AI-GBL:** סקירה שיטתית של 55 מחקרי למידה מבוססת-משחק נתמכת-AI מוצאת השפעות חיוביות על ידע, מוטיבציה פנימית ומעורבות אפקטיבית, אך רק 4 מחקרים (7%) עמדו בסף האיכות-הגבוהה שלה ורק 4 (7%) היו [[rct|ניסויים מבוקרים אקראיים]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]). היעילות תלתה ביישור מנגנון ה-AI עם [[learning-theories|תיאוריית למידה]] מצוינת.

### מִשחוח

**מִשחוח** הוא היישום של מרכיבי עיצוב-משחק (נקודות, תגים, רמות, טבלאות הישגיות, אתגרים, מוטות התקדמות) על הקשרים שאינם-משחק כדי למנף ולהעסיק משתמשים. שלא כמו למידה מבוססת משחק — שבה למידה מתרחשת *דרך* משחק — מִשחוח מקנן מכניקת משחק על פעילות למידה קיימת ללא הפיכתה למשחק שלם. הוא משמש בחינוך כדי להמריץ מוטיבציה, [[student-engagement|מעורבות]], והתמדה, ומיושם בקנה רחב בהקשרי כיתה פורמליים.

מִשחוח מעוגן בתיאוריה מוטיבציונית, במיוחד ב[[self-determination-theory|תיאוריית ההגדרה העצמית]] (תומכת באוטונומיה, במיומנות ובקרבה) ובמסגרות שינוי-התנהגות. הוא הראה סינרגיה מיוחדת עם [[project-based-learning|למידה מבוססת-פרויקטים]] בתחומים יישומיים כמו רובוטיקה. במחקר של מאגר הידע:

- **חינוך רובוטיקה:** הסקירה ההשוואתית מצאה מִשחוח דומיננט בכיתות פורמליים בחינוך רובוטיקה (p < .001) ועדיף בחוזק [[project-based-learning|למידה מבוססת-פרויקטים]] (p = .009), בעוד למידה מבוססת משחק הייתה נפוצה יותר בהקשרים לא-פורמליים.
- **מעורבות ומוטיבציה:** מִשחוח משמש לאורך כל מאגר הידע כדי להגדיל מעורבות ומוטיבציה של לומדים בהקשרי למידה של AI, [[cs-education|תכנות]], ו[[stem-education|STEM]]. מחקר ה[[genai-motivation-engagement-2026|בינה המלאכותית היוצרת, המוטיבציה, והמעורבות]] בוחן כיצד מרכיבים דמויי-משחק משולבים עם AI כדי לקיים עניין לומד. שני מחקרי 2026 מרחיבים זאת על ידי השוואת תנאים ממושחקים ונתמכים-AI אל מול הוראה מסורתית: [[nasa-tlx-workload-gamified-ai-2026|מחקר NASA-TLX]] מדד עומס נתפס לאורך תנאי למידה מסורתיים, ממושחקים ונתמכים-AI, ו[[arcs-motivational-ergonomics-gamified-ai-2026|מחקר ARCS]] בחן "ארגונומיה מוטיבציונית" בלמידה ממושחקת ונתמכת-AI עם השלכות ל[[professional-training|אימון מקום-עבודה]]. יחד הם מבהירים שהתועלת המוטיבציונית של עיצובים דמויי-משחק ונתמכים-AI תלויה בהאופן שבו הם מעצבים [[motivation|מאמץ נתפס]], עומס, ותשומת-לב (למשל, ממדי תשומת-לב/רלוונטיות של ARCS), לא במִשחוח בלבד.

GBL ומִשחוח יחד מתחברים ל[[educational-robotics|רובוטיקה]], ל[[student-engagement|מעורבות סטודנטים]], ל[[motivation|מוטיבציה]], ל[[self-determination-theory|תיאוריית ההגדרה העצמית]], ל[[active-learning|למידה פעילה]], ל[[simulation|סימולציה]], ל[[project-based-learning|למידה מבוססת-פרויקטים]], ול[[computational-thinking|חשיבה חישובית]].

## מושגים מחוברים
- [[educational-robotics|רובוטיקה חינוכית]]
- [[student-engagement|מעורבות סטודנטים]]
- [[motivation|מוטיבציה]]
- [[self-determination-theory|תיאוריית ההגדרה העצמית]]
- [[active-learning|למידה פעילה]]
- [[simulation|סימולציה]]
- [[project-based-learning|למידה מבוססת פרויקטים]]
- [[computational-thinking|חשיבה חישובית]]
- [[cs-education|מדעי המחשב]]
- [[pedagogy|פדגוגיה]] — מטרייה: פדגוגיות ואסטרטגיות הוראה בחינוך בינה מלאכותית
- [[virtual-and-augmented-reality|מציאות מדומה ומוגברת]] — תרגול סוחף וממושחק חופף בעיצוב ובראיה

## מאמרים מחוברים
- [[ai-game-based-learning-systematic-review-2026]] — Systematic review of 55 AI-supported game-based learning studies: positive outcomes, a thin evidence base

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — NASA-TLX workload across gamified/AI conditions
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS motivation and AI-supported gamification
