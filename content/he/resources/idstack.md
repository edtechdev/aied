---
title: "idstack"
created: "2026-10-12T21:25:00-04:00"
type: resource
summary: "מערכת-קוד-פתוחה של אחד-עשר כישורי-Claude-Code שבודקים קורס מול בסיס-הראיה של עיצוב-הוראה, ותייגים כל המלצה בדרגת-הראיה שלה."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**idstack** היא אוסף-קוד-פתוח של אחד-עשר כישורים ל[[learning-design|עיצוב-הוראה]] מבוסס-ראיה, המופץ כתוסף-Claude-Code עם תוסף-לוח-צדדי-של-Chrome מלווה. במקום לנסח קורס, הכישורים בודקים אותו: הם מסווגים מטרות מול טקסונומיית-בלום-המחודשת, בודקים התאמה-בונה בין מטלות, פעילויות והערכות, מסמנים בעיות-עומס-קוגניטיבי, ובודקים נגישות מול WCAG 2.1 AA ו-Universal Design for Learning. כל המלצה נושאת דרגת-ראיה, מ-T1 למטא-אנליזות ומבחנים-רנדומיים דרך T5 לדעת-מומחה. הפרויקט מצהיר שהציטוטיםים שלו נשענים על 108 מחקרים-עמיתים across אחד-עשר תחומי-מחקר; הספירה הזו היא טענת-הפרויקט-עצמו, והביבליוגרפיה שלו מפורסמת ב-Markdown כדי שמבקר יוכל לבדוק אותה.

קורסים נכנסים דרך חיבור-API-של-Canvas, קובץ-IMS-Common-Cartridge, חבילת-SCORM, ייצוא-PDF מכלי-מחברת, או מסמכים-מודבקים. מניפסט-פרויקט-משותף זוכר את הקורס across פגישות, וכישור-צינור משרשר את שלבי-העיצוב בעוד שהוא מדלג על עבודה-שהושלמה. סקירות מדווחות מול שמונת-סטנדרטי-Quality-Matters ומסגרת-Community-of-Inquiry, ומפרידות נוכחות-הוראה, נוכחות-חברתית ונוכחות-קוגניטיבית, ולאחר-מכן מדרגות המלצות לפי חומרה.

## מה לדעת לפני אימוצו

התוסף דורש Claude Code ומעבד-bash להתקנה; PowerShell ו-cmd אינם יכולים להריץ את סקריפט-ההתקנה, ו-Python 3 מומלץ למגמות-ציון. נתוני-הקורס נשארים בתיקיית-הפרויקט במכונה-של-הקורא עצמו, ועוזבים אותה רק דרך אינטגרציה שהמשתמש מפעיל, כגון קריאת-API-של-Canvas. ההסקה-החיה של תוסף-Chrome דורשת מפתח-API-חינמי-משל-הקורא-של-Google-AI-Studio, בעוד שמצב-סימולציה מדגים אותו בלי אחד. הפרויקט מתייג את עצמו beta בגרסה 3.5.1.0 ומזהיר משינויים-שוברים בין גרסאות-משנה, והוא מפורסם תחת חשבון-ה-GitHub של savvides ולא על ידי מחבר-בשם.

## Connected Concepts

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
