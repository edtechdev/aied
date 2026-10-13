---
title: "Building Intelligent Textbooks"
created: "2026-10-12T19:08:00-04:00"
type: resource
summary: "המדריך בקוד פתוח של Dan McCreary לבניית ספרי הוראה חכמים — ספרי הוראה מקוונים עם חיפוש, ניווט, מילון מונחים, חידונים, גרפי מושגים וסימולציות מוטבעות — באמצעות MkDocs Material ובינה מלאכותית יוצרת, עם ספריית עזר של MicroSims אינטראקטיביים המיוצרים על ידי בינה מלאכותית."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

אתר **Intelligent Textbooks** הוא המדריך שלב-אחר-שלב של Dan McCreary לבניית *ספרי הוראה חכמים* — ספרי הוראה מקוונים החורגים מ-PDFs סטטיים על ידי הוספת חיפוש, ניווט באתר, מילון מונחים, תוכן עניינים, ניהול חידונים, נוסחאות מעובדות, תצוגות מקדימות של רשתות חברתיות, בדיקת קישורים, ו**גרף מושגים** קל-לויז'ואליזציה שמראה את כל המושגים בקורס ואת התלויות ביניהם. המדריך טוען שקורסים רבים כיום יכולים להפיק תועלת מספרי הוראה מקוונים באיכות גבוהה עם התכונות האלה, והוא מראה כיצד לבנות אותם באמצעות מערכת הבנייה [MkDocs](http://mkdocs.com/) בצירוף ערכת הנושא Material ובינה מלאכותית יוצרת ליצירת תחזוקת התוכן.

המהלך המגדיר הוא שספר ההוראה *מחובר ב-Markdown ומיוצר על ידי בינה מלאכותית*, מופע קונקרטי של תבנית [[vibe-coding|קידוד מחובר בסיוע בינה מלאכותית]] המיושמת על [[curriculum-design|תוכן קורס]]: במקום תחזוקה ידנית של אתר גדול, אתם מתארים את הקורס ומאפשרים לבינה מלאכותית יוצרת לייצר ולתחזק את הדפים, עם שרשרת הכלים המטפלת בניווט, חיפוש וגרף המושגים. ספריית עזר של [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) טוענת שהיא מאוטמטית למעלה מ-90% מהמשימות הנדרשות לבניית ספר הוראה מדרגה-2 מתיאור קורס.

## משאב עוקב: MicroSims

השותף הטבעי למדריך הזה היא ספריית **MicroSims** של McCreary בכתובת <https://dmccreary.github.io/microsims/> (מקור: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), המספקת את הסימולציות האינטראקטיביות שספר הוראה חכם מטמיע. *MicroSim* (מיקרו-סימולציה) היא סימולציה אינטראקטיבית פשוטה המיוצרת עם בינה מלאכותית כדי לעזור למורים להסביר מושג, והיא ניתנת להטמעה בספר הוראה חכם או בכל אתר שמקבל `iframe`. MicroSims ייחודיים בשלוש סיבות: **ייצור בסיוע בינה מלאכותית** (תבניות תכנון סטנדרטיות הופכות תיאור בשפה טבעית של סימולציה לנכס לשיתוף), **הטמעה אוניברסלית** (אלמנט `iframe` HTML בודד מטביע אותה בכל דף), ו**קוד שקוף וניתן-לשינוי** (אין קופסה שחורה — לחיצה אחת פותחת את הסימולציה בעורך רשת, ורישיון Creative Commons מאפשר לרוב המורים להשתמש בהם ללא עמלות רישיון). המונח נטבע על ידי Valerie Lockhart ב-2023 לאחר שגילתה שמורים וסטודנטים יכלו לבנות סימולציות עם ספריית JavaScript של p5.js עם אימון מעט או ללא אימון.

הפרויקט מפרסם גם JSON Schema למטא-דאטה של MicroSim כדי שכלי בינה מלאכותית יוכלו לייצר מתארים ניתנים-לחיפוש, עם רישום MicroSims מופשט במפת הדרכים. מאמר מחקר המתאר את המסגרת — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — נמצא ב-arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). סימולציות לדוגמה כוללות Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula, ותרשים תשואות שוק ההון, כל אחת פועלת בזמן אמת באתר.

## למי זה מתאים

מרצים ומעצבי הוראה שרוצים לבנות או לתחזק ספר הוראה לקורס, במיוחד בהשכלה גבוהה ובהכשרה מקצועית, בתוספת מפתחי סגל הוראה וכל מי שמשתמש בבינה מלאכותית יוצרת לחיבור תוכן חינוכי. זה מתאים למחנכים המרגישים בנוח עם תהליך עבודה של Markdown-and-Git (או מוכנים ללמוד אותו) ושרצונם שהבינה המלאכותית תטפל בצנרת האתר — חיפוש, ניווט, גרף מושגים — כדי שהם יוכלו להתמקד בפדגוגיה.

## הערות ואזהרות

זהו מדריך ושרשרת כלים של עוסק-מקצועי, לא מחקר שדורי-עמיתים — הוא מציג תהליך עבודה ואת הרציונל החינוכי שלו ("ספרי הוראה חכמים מנחים סטודנטים דרך מושגים במסעם אחר ידע") ולא ראיות לתוצאות למידה. מאמר המחקר של MicroSims הוא הדבר הקרוב ביותר לגיבוי אמפירי, והוא עצמו-מפורסם ב-arXiv. שני הפרויקטים הם בקוד פתוח (המאגר intelligent-textbooks מדווח על רישיון MIT ו-38 כוכבים; MicroSims מדווח על רישיון Creative Commons ו-13 כוכבים) ונשמרים באופן פעיל. גרפי מושגים ומבנה מילון-מונחים-תחילה מועילים באמת לגילוי, אך המדריך מניח תהליך חיבור טכני למדי — MkDocs, Git וכלי בינה מלאכותית יוצרת — שעשוי להוות חסם לסגל הוראה מסוים. נכון לתאריך ההפדה, הרישום ל-MicroSims נמצא עדיין רק במפת הדרכים, כך שמציאת סימולציה קיימת ספציפית מסתמכת על החיפוש והניווט של האתר עצמו.

## מושגים מקושרים

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
