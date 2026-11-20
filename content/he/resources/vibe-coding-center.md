---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "מדריך שדה למחנכים לבניית אתר חינוכי סטטי עם עוזר קידוד מבוסס בינה מלאכותית: שלושה קבצי הוראה ב-Markdown לעיצוב, לאבטחה ולפרטיות סטודנטים, עם מדריכים קריאים וחבילה להורדה."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**The Vibe-Coding Center** הוא מדריך שדה חינמי של Miguel Guhlin למורה שרוצה לבנות ב[[vibe-coding|קידוד אווירה]] אתר חינוכי סטטי קטן עם עוזר קידוד מבוסס בינה מלאכותית — כרטיס יציאה, חידון, תיק עבודות כיתתי — בלי לשלוח יחד איתו מפתח API חשוף או נתוני סטודנטים.

## מה אפשר לעשות איתו

שלושה קבצי הוראה נושאים את ההדרכה: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` ו-`securevcc.md`. הורידו אותם לשורש הפרויקט, השלימו את תבנית תדריך הפרויקט, ואז בקשו מהעוזר לקרוא וליישם את שלושתם; המדריך מפורש שהימצאות אינה הפעלה, ולכן יש לנקוב בשמות הקבצים בבקשה. מדריכים קריאים מסבירים כל אחד מהם, כולל סקירה של "שלוש בדיקות חיוניות לפני שיתוף": לאסוף פחות נתוני סטודנטים, לבדוק מפתח API חשוף, ולהתאים את עיצוב הכלי למשימת הלמידה שלו. החבילה השלמה מוסיפה את האתר עצמו, חבילת הנחיות, סקירת השקה וסקריפטים לבנייה מחדש, עם מניפסט SHA-256 להורדה.

עמוד [הדוגמאות של EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) הנלווה מציג את התוצאות ככלים סטטיים עובדים ולא כצילומי מסך: מחולל כרטיסי יציאה שכותב שאלה ברמת טקסונומיית SOLO נבחרת, תיק עבודות סטודנט שהוא קובץ HTML אחד ב-GitHub Pages, וספריית משאבים ניתנת לחיפוש לפיתוח מקצועי — כולם פועלים בצד הלקוח בלי התחברות ל-LMS.

## למי זה מיועד

מורים ו[[learning-design|מעצבי הוראה]] ב-K-12 ובהשכלה גבוהה שיכולים לתאר את הכלי שהם רוצים ומוכנים לבדוק מה העוזר הפיק. הוא מתאים גם למחלקה שרוצה רשימת בדיקה משותפת אחת לפני שמישהו מפרסם כלי לסטודנטים, ולמרצים שמלמדים [[ai-literacy|אוריינות בינה מלאכותית]] דרך בנייה ולא דרך ביקורת.

## הערות ואזהרות

המרכז הוא הדרכה, לא מוצר ציות: האתר אינו טוען להתאמה ליעד WCAG 2.2 AA שלו עצמו, עונה "לא" על "האם השימוש בקבצים האלה הופך את האתר שלי לתואם?", ואומר שסקירה הנדסית אינה מחליפה אישור בית ספר או בדיקה משפטית. מדף האבטחה מצביע על axe-core, Gitleaks, ZAP ו-Playwright; אלה הפניות ולא תוכנה ארוזה, והכלים הפולשניים מיועדים למטרה חד-פעמית או מורשית במפורש. קריאה אינה דורשת חשבון. בנייה מחדש של עמודי ה-HTML דורשת Python ו-`markdown-it-py`, שהיא תלות בנייה ולא תלות מבקר. המאגר ברישיון MIT, בעוד שאמנות של צד שלישי והפרויקטים המקושרים שומרים על התנאים שלהם, המתועדים ב-`CREDITS.md`.
