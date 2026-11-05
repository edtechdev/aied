---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "תשתית AI פתוחה מיוזמת החינוך של Mark Zuckerberg ו-Priscilla Chan: גרף ידע של תקנים, תוכניות לימוד ונתוני מדעי למידה, כלי הערכה לשפיטת פלט מודלי שפה, ומיומנויות סוכנים נייטרליות למודל לזרימות עבודה של מורים."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**Learning Commons** היא יוזמת החינוך של Mark Zuckerberg ו-Priscilla Chan, שהושקה ב-2025 כדי להעביר את עבודת מדעי הלמידה של Chan Zuckerberg Initiative אל התשתית שעליה נבנים בפועל מוצרי טכנולוגיה חינוכית. הטיעון שלה הוא תשתיתי ולא פדגוגי: המחקר קיים, התקנים האקדמיים קיימים ותוכניות לימוד באיכות גבוהה קיימות, אבל הם יושבים במערכות נפרדות, ולכן מפתחים בונים על מה שהכי קל להגיע אליו. הארגון מפרסם שלושה כלים פתוחים ב-GitHub — Knowledge Graph, מערך של Evaluators, ו-[[agentic-ai|מיומנויות סוכנים]] — ומפעיל פלטפורמה שמוסיפה Curriculum Sync לטעינת תוכניות לימוד אל [[edtech-platform|מערכת ניהול למידה]].

## מה אפשר לעשות איתו

**ה-Knowledge Graph** ממדל תקנים אקדמיים, תוכניות לימוד ומחקר במדעי הלמידה כישויות וקשרים תחת סכימה משותפת אחת, כך שכלי יכול ליישר תוכן מיוצר לתקן בלי לבנות צינור נתונים משלו. **ה-Evaluators** מודדים תכונות של [[llm|פלט מודלי שפה]] דרך עדשה של מדעי הלמידה — מורכבות טקסט, [[feedback|משוב]], יישור לתקנים אקדמיים ומיומנויות עמידות — ומגיעים עם SDK-ים ל-Python ול-TypeScript, מפורסמים ב-npm וב-PyPI, לדירוג תוכן מיוצר או להשוואת מודלים מועמדים. **מיומנויות סוכנים** אורזות הוראות, מקורות ומעקות עבור זרימות עבודה נפוצות של מורים בפורמט פתוח ונייטרלי למודל: בדיקת הבנה, דיפרנציאציה מדורגת של שיעורים, תוכניות שיעור מיושרות לתקנים, והכנת שיעור. בפועל, הגרף הוא מה שעושה את השניים האחרים לאמינים: יישור תוכן הוא הטענה, והגרף הוא האסמכתא שמולה בודקים אותה.

## למי זה מיועד

מפתחים שבונים תכונות AI לתוך מוצרי [[curriculum-design|תוכנית לימוד]] והערכה, וצוותי תוכניות לימוד או תקנים שמספקים את הנתונים שהמוצרים האלה מתיישרים אליהם. מרצים יכולים להשתמש במיומנויות הסוכנים בעצמם, אך המסגור של המאגר עצמו הוא תשתית לאנשים שמשלחים כלים.

## הערות ואזהרות

היות הקוד פתוח ב[[open-source|מקור]] אינה הופכת את הנתונים לפתוחים. קוד ה-Knowledge Graph הוא MIT, ואילו כל מערך נתונים נושא תווית גישה משלו — פתוח, פתוח + מסונן, או מסונן — ותוכן מסונן אינו מכוסה במפורש ברישיונות הפתוחים שהמאגר מצטט, ולכן יש לבדוק את קטלוג מערכי הנתונים לפני שמניחים זכויות שימוש חוזר. קוד ה-Evaluators הוא MIT ותוכן הפרומפטים שלו CC BY 4.0, אך קורפוסי CLEAR ו-PERSUADE 2.0 המתויגים שבהם הוא משתמש הם CC BY-NC-SA 4.0. הפלטפורמה ומערכי הנתונים שמאחוריה דורשים חשבון. פעילות המאגר כפי שנקראה ב-2026-11-04: 167 כוכבים ל-Knowledge Graph, 88 ל-Evaluators, 41 ל-Agent Skills. היוזמה ממומנת על ידי CZI, והמסגור שלה לבעיה הוא של המממן עצמו.

## מושגים מחוברים

- [[curriculum-design]] — הגרף קיים כדי ליישר תוכן מיוצר לתקנים ולתוכניות לימוד
- [[open-source]] — קוד MIT ו-Apache-2.0 עם רישוי נתונים לכל מערך נתונים
- [[educational-nlp]] — ה-Evaluators הם שכבת מדידת טקסט מעל פלט מודלי שפה
- [[agentic-ai]] — מיומנויות שאורזות זרימת עבודה שמודל יבצע
- [[edtech-platform]] — Curriculum Sync טוען תוכניות לימוד אל מערכת ניהול למידה
- [[llm]] — יעד ההערכה וצרכן המיומנויות
