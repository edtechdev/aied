---
title: "Clarity"
created: "2026-10-12T19:15:00-04:00"
type: resource
summary: "Agent Skill בקוד פתוח ועורך דפדפן פרטי שהופכים שמונה-עשרה כללים לכתיבה ברורה יותר למצבי טיוטה, שכתיבה וביקורת של טקסט."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**Clarity** משווה Agent Skill לעורך דפדפן, ושניהם בנויים סביב שמונה-עשרה כללים לכתיבה ש"מרוויחה את קוראה". ה-Skill מותקן לתוך סוכני קוד כמו Claude Code ו-Codex באמצעות `npx skills add addyosmani/clarity`, ולאחר מכן פועל בשלושה מצבים: מצב ביקורת (review) מבקר טיוטה ומשאיר את הקובץ ללא שינוי, מצב שכתיבה (rewrite) עורך טיוטה במקום, ומצב ריאיון (interview) שואל את הכותב שאלות תחילה ומכתב יחד איתו מהתשובות. ה[[feedback|משוב]] שהכותב מקבל מכוון לתוכן לפני סגנון. הכללים שואלים בעבור מי הטקסט נכתב ומה הקורא כבר יודע, דוחקים לטענות על פני נושאים ולספציפיים על פני הפשטות, ומתייחסים ל"מילוי חלל" כאל בעיה של אי-ידיעה למה הטקסט נועד ולא כאל בעיה של אוצר מילים.

עורך הדפדפן פועל מקומית בתוך הדף ואינו מעלה טיוטה לשרת. הוא מדווח על סימני ההיכר של פרוזה שנכתבה על ידי מכונה, על קריאות ועל פערים בתוכן, מה שהופך אותו לשימושי לבחינת טקסט ש[[generative-ai|בינה מלאכותית גנרטיבית]] יצרה לפני שהוא מגיע לקורא. הפרויקט מצהיר במפורש שהמטרה היא כתיבה שנשארת מזוהה ככתיבה של המחבר עצמו ולא פרוזה מהונדסה כדי לעבור [[ai-detection|זיהוי בינה מלאכותית]], הבחנה שמרצים יוכלו לזהות כשהם קובעים מדיניות על כתיבה [[writing-education|בעזרת בינה מלאכותית]].

## מה כדאי לדעת לפני שאתם מאמצים אותו

המאגר מפרסם פרוטוקול הערכה, דוגמאות לפני ואחרי ב-`samples/`, וקבצי עזר מאחורי ה-Skill, כך שבודק יכול לחקור כיצד הכללים מתנהגים במקום לסמוך על טענה; העמוד הזה אינו חוזר על אף תוצאה מדודה. המחבר הוא Addy Osmani, הרישיון הוא MIT, והעבודה עצמאית ולא מוצר של מוסד כלשהו. היא צעירה ופעילה: נוצרה באוגוסט 2026, 54 קומיטים, שלוש מהדורות כשהאחרונה היא גרסה 0.2.1 בספטמבר זה, וכ-250 כוכבים כשנבדקה בספטמבר 2026. שלושה תורמים הניחו שינויים. הוראות ה-Skill נטענות לתוך סוכן שהקורא כבר מריץ, ולכן תקפות האזהרות הרגילות של [[prompt-engineering|הנדסת הנחיות]]: איכות הביקורת תלויה בטיוטה שמוגשת אליה.

## מושגים קשורים
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
