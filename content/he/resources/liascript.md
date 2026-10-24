---
title: "LiaScript"
created: "2026-10-12T22:05:00-04:00"
type: resource
summary: "ניב Markdown פתוח שהופך קובץ טקסט פשוט לקורס אינטראקטיבי בדפדפן, עם חידונים וקוד בר-הרצה, בתוספת עוזר רב-סוכני לבניית קורסים איתו."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."

---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**LiaScript** הוא ניב Markdown מורחב בתוספת מפרש עבורו. קובץ טקסט פשוט אחד הופך לקורס אינטראקטיבי: אותו מסמך יכול להיקרא כנרטיב, להיות מוצג כשקפים, או להיעשות כקורס, כולו בדפדפן. אין צורך בהתקנת דבר כדי לכתוב או לקרוא אחד כזה.

## מה ניתן לעשות איתו

חידונים מגיעים בצורות שמורה מצפה להן, ובהם רב-ברירה, שאלות מטריצה, הזנת טקסט, תפריטים נפתחים וטקסטי פער, שנכתבים ישירות ב-Markdown. בלוקי קוד יכולים להפוך לעריכתיים וברי-הרצה עבור הדרכות [[cs-education|תכנות]], ומערכת פקודות-מאקרו עוטפת ספריות JavaScript לבלוקים לשימוש-חוזר כך שדיאגרמות אינטראקטיביות אינן דורשות קוד מכל כותב. קורס מתארח במקום שהכותב כבר שומר טקסט, בלי שירות להינעל אליו, והכול רץ בצד-הלקוח, ולכן קורס שנטען עובד אופליין. LiaScript Exporter ארוז אותו כ-SCORM עבור Moodle, ILIAS ו[[edtech-platform|מערכות ניהול למידה]] אחרות.

## סוכן ההוראה לבניית קורסים

הפרויקט מפרסם גם **[סוכן הוראה](https://github.com/LiaScript/teaching-agent)** לכתיבת קורסי LiaScript, ברישיון Boost Software License 1.0. ארבעה סוכנים להוראה, עיצוב חזותי, סקירת לומד ופרסום עובדים סביב קובץ פרויקט יחיד המחזיק את מצב הקורס, עם זרימת עבודה של הגדרה-תחילה: מטרות, קהל ודידקטיקה נקבעים לפני שנכתב כל חומר, ושערי אימות עוקבים. טיוטה יכולה להיסקר מפרסונת לומד בעלת-שם כדי לבדוק עומס [[cognitive-offloading|קוגניטיבי]] וידע קודם הנחה. הסוכן הוא אגנוסטי-עורך, ומייצר תצורות ל-Claude Code, Copilot, Codex, Cursor או צ'אט רשת ממפרט אחד, והמאגר משמש גם כדוגמה מעובדת, ומחזיק קורס בן שש יחידות על נחיית NIS2 של האיחוד האירופי ומסמך המתאר כיצד הוא הופק.

## הערות ואזהרות

LiaScript הוא חופשי, בלי רמה בתשלום ובלי דרישת חשבון, ומפותח בגלוי תחת BSD-3-Clause, ולכן מוסדות יכולים לארח אותו בעצמם ולשנות אותו. תכונת Live Classroom ראויה למבט לפני שסומכים עליה בקנה מידה, מכיוון שסנכרון בזמן-אמת משתמש בשירות משותף ולא בעיבוד מקומי בלבד. סוכן ההוראה הוא צעיר ובאימוץ קל, ולכן יש להתייחס אליו כפרוטוטיפ עובד ולא כמוצר נתמך.

## מושגים מחוברים

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]

