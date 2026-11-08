---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "תשתית AI פתוחה למוצרים חינוכיים: גרף ידע של תקנים ותוכניות לימוד, כלי הערכה לשפיטת פלט מודלי שפה, מיומנויות סוכנים נייטרליות למודל לזרימות עבודה של מורים, ו-Curriculum Sync לטעינת תוכניות לימוד אל מערכת ניהול למידה."
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
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**Learning Commons** מפרסמת שלושה כלים פתוחים להרכבת תכונות AI על גבי תוכן תוכניות לימוד אמיתי — **[[knowledge-graph|גרף ידע]]** של תקנים אקדמיים, תוכניות לימוד ומחקר במדעי הלמידה, ספרייה של **Evaluators** לשפיטת טקסט מיוצר, ו**[[agentic-ai|מיומנויות סוכנים]]** נייטרליות למודל לזרימות עבודה נפוצות של מורים — ומפעילה פלטפורמה שמוסיפה Curriculum Sync לטעינת תוכניות לימוד אל [[edtech-platform|מערכת ניהול למידה]].

## מה אפשר לעשות איתו

**יישרו תוכן מיוצר לתקן.** גרף הידע ממדל תקנים, [[curriculum-design|תוכניות לימוד]] ומחקר כישויות וקשרים תחת סכימה משותפת אחת. מוצר יכול לאתר את התקן שאליו פריט אמור לכוון, לעבור על קשרי קדם או לבסס את תוכן המורה על תוכנית הלימוד שהוא אמור ללמד, בלי לבנות ולתחזק צינור נתונים משלו.

**דרגו פלט מיוצר לפני שהסטודנטים רואים אותו.** ה-**Evaluators** מודדים תכונות של [[llm|פלט מודלי שפה]] — מורכבות טקסט, [[feedback|משוב]], יישור לתקנים ומיומנויות עמידות — ומגיעים כ-SDK-ים ל-Python ול-TypeScript ב-npm וב-PyPI. בפועל הם משמשים כבדיקת רגרסיה כשפרומפט או מודל משתנה, כהשוואה בין מודלים מועמדים, או כמסנן על פריטים והסברים מיוצרים.

**ארזו זרימת עבודה של מורה.** **Agent Skills** אורזות הוראות, מקורות ומעקות בפורמט פתוח ונייטרלי למודל: בדיקת הבנה, דיפרנציאציה מדורגת של שיעורים, תוכנית שיעור מיושרת לתקנים, והכנת שיעור. אפשר להטיל אותן לתוך מסגרת סוכנים או לקרוא אותן כתבניות מעובדות לכמה מבנה זרימת עבודה אמינה בכיתה צריכה.

**העבירו תוכנית לימוד אל מערכת ניהול למידה.** Curriculum Sync הוא שלב הפלטפורמה שהופך מפת תקנים למשהו שקורס יכול באמת להשתמש בו ב-LMS.

## למי זה מיועד

מפתחים שבונים תכונות AI לתוך מוצרי תוכנית לימוד ו[[assessment|הערכה]], וצוותי תוכניות לימוד או תקנים שמספקים את הנתונים שהמוצרים האלה מתיישרים אליהם. [[teacher-role|מרצים]] יכולים להשתמש במיומנויות הסוכנים בעצמם, אך המסגור של המאגר עצמו הוא תשתית לאנשים שמשלחים כלים.

## הערות ואזהרות

היות הקוד פתוח ב[[open-source|מקור]] אינה הופכת את הנתונים לפתוחים. קוד ה-Knowledge Graph וה-Evaluators הוא MIT ומיומנויות הסוכנים הן Apache-2.0, ואילו כל מערך נתונים נושא תווית גישה משלו — פתוח, פתוח + מסונן, או מסונן — ותוכן מסונן אינו מכוסה ברישיונות הפתוחים שהמאגר מצטט, ולכן יש לבדוק את קטלוג מערכי הנתונים לפני שמניחים זכויות שימוש חוזר. תוכן הפרומפטים של ה-Evaluators הוא CC BY 4.0, אך קורפוסי CLEAR ו-PERSUADE 2.0 המתויגים שבהם הוא משתמש הם CC BY-NC-SA 4.0. הפלטפורמה ומערכי הנתונים שמאחוריה דורשים חשבון.

## מושגים מחוברים

- [[curriculum-design]] — הגרף קיים כדי ליישר תוכן מיוצר לתקנים ולתוכניות לימוד
- [[open-source]] — קוד MIT ו-Apache-2.0 עם רישוי נתונים לכל מערך נתונים
- [[educational-nlp]] — ה-Evaluators הם שכבת מדידת טקסט מעל פלט מודלי שפה
- [[agentic-ai]] — מיומנויות שאורזות זרימת עבודה שמודל יבצע
- [[edtech-platform]] — Curriculum Sync טוען תוכניות לימוד אל מערכת ניהול למידה
- [[llm]] — יעד ההערכה וצרכן המיומנויות
