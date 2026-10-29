---
title: "DeepTutor"
created: "2026-10-12T21:22:00-04:00"
type: resource
summary: "המהדורה בקוד פתוח של מסגרת ההוראה האג'נטית DeepTutor: מרחב עבודה אחד להוראה, יצירת שאלות, תרגול לשליטה, מחקר וויזואליזציה, עם זיכרון לומד שניתן לבדיקה."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
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

**DeepTutor** היא המימוש בקוד פתוח של מסגרת ההוראה שנבדקה ב[[intelligent-tutoring|מחקר
DeepTutor]], והיא גדלה הרבה מעבר לתחום של המאמר ההיא אל מרחב עבודה למידה כללי
שמונע-סוכנים מטבעו. הוראה, פתרון בעיות, יצירת שאלונים, תרגול לשליטה, מחקר
וויזואליזציה חולקים זמן-ריצה אחד של יכולות והקשר סשן אחד, כך שפרופיל הלומד
הנבנה בזמן פתרון הבעיות מעצב את ההסברים ושאלות התרגול שיבואו אחריו.

## מה אפשר לעשות איתו

עשרה מצבים — צ'אט, שאילת שאלות, חידון, מחקר, ויזואליזציה, פתרון, למידת קורס,
מסלול שליטה, קריאה משקע ומבט משקע — פועלים על אותו זמן-הריצה, תוך שימוש חוזר
במאגרי ידע, בספרים, בטיוטות, במחברות, במאגרי שאלות ובפרסונות. האחזור הוא
רב-מנועי במכוון: ספריות RAG בגרסאות מעל LlamaIndex, PageIndex, GraphRAG,
LightRAG או שרת LightRAG מרוחק, ובנוסף בסיס WeKnora באירוח עצמי, ספריית Tencent
IMA או MarginNote, או כספת Obsidian מקושרת. הזיכרון ניתן לבדיקה ולא אטום:
עקיבות רמה 1, סיכומי שטח ברמה 2 וסינתזה ברמה 3 גלויים וניתנים לעריכה, וגרף
זיכרון מקשר כל סיכום לראיות שמאחוריו. קובץ הרצה בשם `deeptutor` מספק REPL
טרמינלי ומשדר NDJSON לכל סוכן שרוצה להפעיל אותו ככלי, וקהילת EduHub מחלקת
כישורים מותקנים.

## למי הוא מיועד

למדריכים וחוקרים בהשכלה הגבוהה שרוצים גרסה ניתנת לפריסה של המסגרת שעליה מדווח
המאמר, למפתחים שבונים על זמן-ריצה מתחבר, וללומדים מונחי-עצמם שמוכנים להריץ
מופע משלהם. התיעוד נמצא בכתובת deeptutor.info.

## הערות

ברישיון Apache 2.0, בגרסה 1.6.9 נכון לספטמבר 2026, עם כ-40,000 כוכבי GitHub.
ההערכה המפורסמת שמאחוריו — שיפור ממוצע של 10.8% במדדים מותאמים-אישית על פני
קווי-בסיס חזקים, ויכולת חשיבות סוכנית כללית חזקה ב-29.4% בחמישה מודלי-יסוד,
בבנצ'מרק TutorBench — מסוכמת ב[[deeptutor|עמוד המאמר]], והמגבלות שלו חלות גם
כאן. כמו בכל ערימת קוד פתוח של בינה מלאכותית, הלקוח מספק מפתחות ספקי-דגם,
ופריסת שולחן-עבודה או שרת דורשת Python 3.11 ו-Node.

## Connected Concepts

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
