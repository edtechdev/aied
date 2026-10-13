---
title: "OpenMAIC"
created: "2026-10-12T20:27:00-04:00"
type: resource
summary: "המהדורה בקוד-פתוח של MAIC: כיתה מרובת-סוכנים שהופכת נושא או מסמך לשקפים, חידונים, סימולציות אינטראקטיביות ופעילויות מבוססות-פרויקטים, שנמסרים על ידי מורים ושותפי-כיתה של AI."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
reviewed_by: [editor]
translation_of: resources/openmaic
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**OpenMAIC** היא המהדורה בקוד-פתוח של כיתת MAIC המרובת-סוכנים המתוארת ב[[intelligent-tutoring|מחקר MAIC]]: תארו נושא או צרפו חומרים משל עצמכם והיא מייצרת שיעור מלא — שקפים, חידונים, סימולציות HTML אינטראקטיביות ופעילויות מבוססות-פרויקטים — ואז נמסרת דרך מורים ושותפי-כיתה של AI שמדברים, מציירים על לוח-לבן ומשתתפים בדיון. זהו הקוד שמאחורי כיתה שניתן להריץ במקום רק לקרוא עליה.

## מה אפשר לעשות איתו

יצירה בלחיצה-אחת מייצרת שיעור בתוך דקות מהנחיה או ממסמך, שמע או וידאו שהועלו. שכבת מרובת-הסוכנים מוסיפה דיון כיתתי שהלומד יכול להצטרף אליו או להיות נקרא לתוכו, דיונים עגולים בין פרסונות עם איורי לוח-לבן, ושאלות-ותשובות חופשיות שבהן המורה עונה בשקפים או בתרשימים. מפגשים תומכים בחבילות שקפים, חידונים, סימולציות אינטראקטיביות ו-PBL, ומיוצאים כ-`.pptx` בר-עריכה או `.html` אינטראקטיבי. גרסה 1.0.0 (אוגוסט 2026) הוסיפה סדנת-עבודה לסוכנים: מרחב-עבודה צ'אט-קודם שמתכנן ומתקן קורסים שלמים, מפגשים בשרת-מתמשך שאפשר לבטל, לחדש או לנווט, ו-24 כישורים מובנים המכסים שקפים, חידונים, אינטראקטיבים, תמונות, וידאו וקולות. חבילת `SKILL.md` מאפשרת למתקן-סוכן לבנות כיתות מאפליקציית מסרים.

## למי היא מיועדת

למדריכים וצוותי קורס שרוצים חומרים מיוצרים שהם עדיין יכולים לערוך, למעצבי הוראה שמבצעים אבות-טיפוס של פעילויות מרובת-סוכנים, ולמפתחים שצריכים כיתה שניתנת-אירוח-עצמי במקור מוצר מתארח. בתי-ספר יכולים לפרוס אותה ב-Vercel או עם Docker, והפרויקט מספק הדגמה מתארחת ב-open.maic.chat.

## הערות

ברישיון MIT, עם מדריך משתמש באנגלית ובסינית וקהילה פעילה ב-Discord ובפיישאו. היא נייטרלית-מודל: אתם מספקים לפחות מפתח ספק LLM אחד, ורכיבים מקומיים אופציונליים (Lemonade למודלים מקומיים, FunASR לזיהוי דיבור) מאפשרים לכם להריץ יותר מהמחסנית אופליין — ולכן "חופשי" מתאר את התוכנה, לא את חשבון ההיסק. המאמר שמאחוריה הופיע ב-*Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), ולמאגר היו יותר מ-38,000 כוכבים עד ספטמבר 2026.

## מושגים מקושרים

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]