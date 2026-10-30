---
title: "Code Viva"
created: "2026-10-30T19:17:47-04:00"
type: resource
summary: "A free browser tool that runs a written, timed version of an oral code defense for every student in a programming course, proposing scores with quoted evidence for the instructor to approve."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

Code Viva מריץ גרסה כתובה ומתוזמנת של [[oral-assessment|ויווה]] לכל סטודנט בקורס תכנות, כחמש-עשרה עד עשרים דקות לכל אחד, בלי מרצה בחדר. הוא קורא את הקוד ואת היסטוריית הקומיטים שהסטודנט הגיש, כותב ארבעה עד שישה שאלות על הפונקציות, השמות והקומיטים של אותו סטודנט, ונותן לכל סטודנט קישור אישי שממנו לענות.

## מה אפשר לעשות איתו

ההגשות מגיעות מייצוא Gradescope, מקובץ ZIP של הורדת Canvas, מ-ZIP של תיקייה לכל סטודנט, או מ-GitHub Classroom עם טוקן קריאה. המרצה קובע את אורך המפגש, מספר השאלות והמועד האחרון, מסמן זמן מוארך פי 1.25 עד פי 3, וקורא, עורך או מחליף את השאלות שנוצרו לפני שליחת הקישורים. השאלות מכסות מקרי בסיס של רקורסיה, שומרי קצה, בחירות מבני נתונים, שמות משתנים אטומים, קנה מידה ועיקוב, משפטים ממפרט המטלה, ודפוסי קומיט כמו קומיט גורפי אחד או קומיט בשעת לילה מאוחרת. התשובות חוזרות כקוד תגובה, ומסך הסקירה מציג כל תמלול לצד ציון מוצע 0 עד 3 עם המשפטים שהוא נשען עליהם, וכן תור דגלים מסודר לפי כמה שיחה מוצדקת. התוצאות מיוצאות ל-CSV, ואחד-עשר קורסי הדגמה מאפשרים לקורא לנסות את כל הלולאה על נתונים מומצאים.

## למי זה מיועד

למרצים בקורסי תכנות שרוצים ראיה שסטודנט יודע להסביר את הקוד שלו, ומעדיפים לשוחח עם רשימה קצרה של סטודנטים ולא עם כולם; שאלות הקומיט הופכות אותו לצורה של [[process-oriented-assessment]].

## הערות ואזהרות

הכול רץ בדפדפן: הקורס יושב באחסון מקומי עם ייצוא JSON, השאלות נוסעות בחלק של הקישור שהדפדפנים אינם שולחים לשרתים, והתשובות חוזרות רק כקודים שהסטודנטים בוחרים לשלוח, כך ששום נתוני סטודנט לא מגיעים לצד שלישי. מחולל השאלות מבוסס-כללים ולא מונע-מודל. לפי תיאור הכלי עצמו, קורא הקוד שלו היוריסטי, כך שעיצוב חריג או מאקרו עלולים להסתיר פונקציה, וציון יכול לתגמל הכרת האוצר מילים במקום הבנת הקוד, ולכן הציונים הם הצעות שמרצה מאשר ולכן הוא ממליץ להשאיר את ההימור נמוך. לא מפורסמים רישיון ולא מאגר מקור, ומכיוון שהקישורים נושאים את השאלות הם מגיעים לכמה קילובייטים, ארוכים מספיק כדי להישבר בתיבת הודעה של מערכת ניהול למידה.

## מושגים מקושרים

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
