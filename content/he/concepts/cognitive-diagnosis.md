---
title: אבחון קוגניטיבי
created: "2026-10-12T19:50:00-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
reviewed_by: [editor]
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **אבחון קוגניטיבי** — ההיסק של מצב הידע הסמוי של לומד — המושגים, הכישורים והתפיסות השגויות הספציפיים שיש לו או שחסרים בו — מהתשובות או ההתנהגות שלו. זהו נקם צד-ההערכה של [[knowledge-tracing]], ממוקד באופי של *מה* סטודנט יודע ולא רק בחיזוי הביצוע הבא שלו.

## שאלות למחשבה

- אבחון קוגניטיבי מהסיק את מצב הידע הסמוי של לומד — המושגים, הכישורים והתפיסות השגויות הספציפיים שיש לו או שחסרים בו — מהתשובות שלו, ולא רק חיזוי הציון הבא שלו. לפני הקריאה, מה ההבדל שהייתם מצפים בינו לבין 'חיזוי הציון של סטודנט' לבין 'אבחון מה הם באמת לא מבינים'?
- רעיון מפתח הוא 'מלכודת התשובה הנכונה' — שבה תשובה נכונה מסתירה הסקה פגומה. האם הייתם אי פעם סמוכים שסטודנט הבין משהו כי הוא צדק, רק כדי לגלות תפיסה שגויה מתחת? כיצד אבחון יכול לחשוף זאת במקום שציון לא יכול?
- העמוד מבחין אבחון קוגניטיבי (תמונת-מצב סטטית, דקת-גרגור של מה שלומד מחזיק כעת) ממעקב ידע (הדינמיקה הזמנית של שליטה לאורך זמן). מדיו חונך חכם זקוק לשניהם — לדעת מה שגוי ולדעת מה ללמד הלאה?
- עקרון עיצוב כאן הוא להפריד אבחון ממשוב: חונכי LLM מאשרים שלבים נכונים אך דוחים יתר על המידה הסקה תקפה ומאמתים יתר על המידה שגיאות, ואבחון מדויק אינו מניב באופן אמין משוב בר-פעולה. מדיו ידיעת מהו השגוי עשויה עדיין להיכשל בהפקת הצעד המועיל הבא?
- אבחון עידן-LLM מתרחב מריבוי-בחירה לעבודה פתוחה, כתובה-ביד, ושיחתית. מה עלול להשתבש אם AI מאבחן תפיסה שגויה מעבודה שהוא אינו יכול להבין במלואה — וכיצד הייתם מאמתים שהאבחון עצמו אמין?

## מבוא

בעוד שמעקב ידע מעריך בדרך כלל שליטה סקלרית לאורך זמן, אבחון קוגניטיבי מפיק פרופיל גרגורי יותר: אילו רכיבי ידע מיומנים, אלו פגיעים, ואילו תפיסות שגויות קיימות. הפרופיל הזהו הסבסטראט ל[[personalized-learning]], ל[[intelligent-tutoring]], ול[[adaptive-learning]].

### כיצד אבחון קוגניטיבי עובד

- **מודלים אבחוניים:** מודלים פסיכומטריים (לרוב תחת [[item-response-theory]] ו[[educational-measurement]]) מהסיקים מצבי מיומנות סמויים מדפוסים של תשובות נכונות ולא-נכונות, לפעמים דרך מודלי אבחון-קוגניטיבי שממפים פריטים לרכיבי ידע מרובים.
- **חיפוש מודל אוטומטי:** מכיוון שאף מודל אבחוני בודד אינו מתאים לכל לומד, גישות מונעות-[[machine-learning|AutoML]] (למשל, חיפוש ארכיטקטורה קוגניטיבית-נוירונית מותאמת אישית) מייצרות מודלים אבחוניים לפרופילי לומד הטרוגניים — משלבות נתוני חינוך [[multimodal|רב-מודאליים]] כדי לאפשר ניתוח דינמי של תהליכי למידה ואבחון קוגניטיבי לכל לומד, במקום להסתמך על תוצאות [[summative-assessment|בחינה]] סטטיות ומנדטים סטטיסטיים פשוטים ([[personalized-neural-cognitive-architecture-search-2026]]).
- **נתוני תשובה:** אבחון נשען על תשובות להערכות, לרמזים, ל[[help-seeking]], ולזמן-על-משימה — אותות עשירים יותר מציונים גלאנטיים.
- **אבחון מבוסס-LLM:** גישות חדשות יותר משתמשות ב[[llm|מודלים לשוניים גדולים]] כדי לאבחן מעבודה פתוחה או כתובה-ביד, ולזהות את [[misconceptions]] הספציפיים שמאחורי שגיאה (למשל, "מלכודת התשובה הנכונה" שבה תשובה נכונה מסתירה הסקה פגומה). שני תוצאות 2026 מגבילות עד כמה האבחון הזה מגיע. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] פיקחו הסקה אבחונית כאחת מארבע יכולויות במשפחה פתוחה 4B/9B/27B, ואבחון מצב-ידע נשאר היכולת המדודה החלשה ביותר שלו — 54.04% ב-27B ו-53.55% ב-9B, קרוב דיו ששלוש פעמים הפרמטרים לא סגרו את הפער — בעוד מדרג ה-LLM של [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] התאמת עם שליטה אמיתית ב-r = 0.68 על תשובות מאוגדות אך רק ב-r ≈ 0.15 בתוך שכבת היכולת החלשה ביותר (r ≈ 0.48 מעורבת, 0.41 חזקה), ולכן אמינות אבחונית עוקבת אחר רמת היכולת של הלומד כמו אחר המודל.
- **אבחון טעויות נפוצות בקנה מידה קוהורט, לא תשובה אחת בכל פעם.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] הופכים את הכיוון הרגיל: במקום לאבחן שגיאת לומד אחד, [[llm]] מציע טרנספורמציות תיקון-באג מועמדות שממפות פורמליזציות לא-נכונות על נכונות לאורך מערכת נתונים חינוכית שלמה, וכל מועמד מאומת אלגוריתמית לפני שנשמר. על 6,106 זוגות של פורמליזציות לוגיקה-טענות נכונות ולא-נכונות זרימת העבודה גילתה 248 צבירי טרנספורמציות המסבירים 5,156 זוגות (84.44%), לעומת 4,370 (71.57%) עבור הטעויות שנבחרו-ביד של המדינת הקודמת של האמנות, והיא שיחזרה את הטעויות שמומחה תחומי זיהה ביד בספרות. קיבוץ מסדר מועמדים לקבוצות טרנספורמציה-בודדה, טרנספורמציה-שוות-ערך והיררכיות, וגרף הקשר הנוצר יכול להיות מומחש למנחים; אותו צינור עבר ללוגיקה מודאלית ולביטויים רגולריים, שם טרנספורמציית ניתוק-לחיבור אחת בלבד כיסתה 98.80% מצברה בן 334 זוגות. זהו מסלול למלאי התפיסות השגויות שמודל אבחוני זקוק לפני שיוכל להיות מותאם.
- **שיחזור פתרון-נכון, לא סימולציית שגיאה, הוא צוואר הבקבוק.** מודלים בנו פתרון ב-95.2% ממעקבי מסחרה וסימולציה של תפיסה שגוית Eedi ספציפית בדיוק 0.92, אך אספקת התשובה הנכונה עדיין העלתה את ההתאמה עם מסחרות אנושיות (0.52 → 0.56) — הכשל יושב במורד הזרם, בשיחזור הפתרון ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **אבחון ברמת תוצר בתכניות OBE:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] מאבחנים אילו תוצאות קורס לומד השיג בחינוך מבוסס-תוצאות על ידי התייחסות לתוצאות כמושגי הידע, אספקת קשרי מושגים דרך מיפויי זיקה OBE מאומתי-מומחים בין תוצאות קורס לתוצאות תכנית (אלטרנטיבה מפורשת לתשומת לב או קשרי גרף נלמדים סמויות), ושימוש במודול מוגבר-זיכרון כדי להעריך כיצד השגת תוצאה אחת משפיעה על אחרות — עולה על קווי בסיס DKT, DKVMN, EKT ו-SimpleKT (89.81% AUC) על נתוני תכנית-הנדסה חיים.
- **אבחון מכלים שנבנו למשהו אחר.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] מראים שמודל CD יכול לחלץ מידע ברמת-מטרה מפריטים שמעולם לא נכתבו לאבחון. מיפוי פריטי FCI, FMCE ו-EMCS על 14 מטרות למידה דקות-גרגור במכניקת מבוא והתאמת DINA על 24,394 תשובות פוסט-טסט מ-807 קורסים, הם מצאו התאמה טובה לשניים משלושת הכלים (FCI RMSEA² = 0.033; EMCS = 0.022) ודיוק סיווג במידה הגבוהה או מעל סף המהדר המעצב-משימות-סיכון-נמוך ל-19 מתוך 22 שילובי מטרה–הערכה. מבנה תכונה, לא איכות פריט, היה האילוץ המחייב: קידוד מומחים שרד בדיקת מודל כמעט ללא פגע — DINA הציע לתקן רק 14% מ-754 קידודי פריט–מטרה והמקודדים אימצו 20 מהם (2.7%) — אך המודל לא יכול היה להפריד שלוש מטרות אנרגיה *קונספטואלית מקוננות* (אנרגיה פוטנציאלית 0.675, שמור אנרגיה 0.705, אנרגיה קינטית 0.745) מכיוון שכל שתיים שיתפו כ-70% מהפריטים שלהן (חפיפת Jaccard 0.67–0.73), הפרת הנחת העצמאות הקונג'נקטיבית של DINA, בעוד מטרות תנופה על אותו כלי הגיעו ל-0.820–0.917. תכונות דקות יותר התאימו טוב יותר ולא גרוע יותר: מבנה 14 המטרות שיפר התאמת מודל על מבנה ארבע-המיומנויות-הרחבות המוקדם של אותה צוות על שלושת הכלים. חפיפת פריטים, לא שגיאת קידוד, היא מה שמגביל עד כמה שליטה ניתנת להפרדה.
- **DINA בייסיאני למסלולי למידה מותאמים אישית:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng and Huang (2026)]] משלבים מודל Bayesian DINA (מאומן על מערכת נתוני EdNet, N=5,000) עם תיאוריית מרחב ידע ואלגוריתם מסלול-תיקון-הקצר ביותר כדי לייצר מסלולי למידה מותאמים אישית, ובודקים אמפירית את התפקיד המתווך של [[cognitive-offloading|עומס קוגניטיבי]] דרך מעברי מצב Hidden Markov Model (מאומתים על 120 סטודנטים) — מתייחסים הן לבעיית ההתכנסות המונעת-דלילות של מודלי DINA מסורתיים והן למנגנון הפסיכולוגי הלא-נבדק מאחורי יעילות מסלול-מותאם.
- **אבחון מיושם-שפה במקום הטמעות ID.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] מחליפים מזהי סטודנט, תרגיל ומושג בדיסקרטיים עם סכימות מושג בנויות-LLM וראיות מיושמות-תהליך, מכיילים את מצב הפוסטריורי של כל סטודנט מרשומות תשובה. לאורך שלוש מערכות [[math-education|מתמטיקה]] [[online-teaching-and-learning|פלטפורמה]] המסגרת מגיעה ל-83.51% ACC / 85.37% AUC ב-XES3G5M ו-87.16% ACC ב-MOOC, עם הרווח מרוכז בדיוק במקום שמודלי אבחון-קוגניטיבי קלאסיים נחלשים: מושגים חדשים (+4.60 ACC על KCD) ורשומות Q-matrix חסרות (+4.52). ביטול הראיות המובנות מקרס דיוק MOOC מ-87.16% ל-78.95%, ולכן השיפור מגיע מהמבנה הנגזר-שפה ולא מקולת המודל. ([[process-grounded-language-cognitive-diagnosis-2026]])

## מדוע זה חשוב

אבחון מדויק מאפשר להוראה להתמקד בפערים בפועל ולא בציון "יכולת" גלובלי — מאפשר [[automated-assessment]] שמסביר *מדיו* סטודנט טעה ומערכות [[feedback|לולאת משוב]] שמתקנות מצבי [[student-modeling|ידע]] ספציפיים. אבחון גרוע מפיק את ההיפך: הוראה מכוונת למושגים שגויים. זהו מדיו [[psychometrically-aware-ai]] מדגיש תוקף אבחוני לצד דיוק חיזוי.

### קשר למעקב ידע ולהוראה חכמה

אבחון קוגניטיבי יושב בלב ארכיטקטורת ה[[intelligent-tutoring]] והוא נקם צד-ההערכה של [[knowledge-tracing]]:

- **אבחון לעומת מעקב — מבטים זמניים משלימים.** [[knowledge-tracing|מעקב ידע]] עוקב אחר ה*דינמיקה הזמנית* של שליטה — מעריך כיצד מצב ידע סקלרי מתפתח לאורך תרגילים ומנבא את התשובה הבאה. אבחון קוגניטיבי מפיק את *תמונת-המצב הסטטית, דקת-הגרגור* של אילו רכיבי ידע, כישורים, או תפיסות שגויות לומד מחזיק כעת. חונך זקוק לשניהם: מעקב ידע לסדר מה ללמד הלאה, אבחון קוגניטיבי כדי לדעת *מה* שגוי בפועל. מודלים אבחוניים מבוססי-[[item-response-theory|IRT]] ו[[educational-measurement|מדידה]], ומודלי אבחון-קוגניטיבי שממפים פריטים לרכיבים מרובים, מממשים את הצד האבחוני.
- **אבחון עידן-LLM.** [[llm|LLMs]] מרחיבים אבחון מתשובות ריבוי-בחירה לעבודה פתוחה, כתובה-ביד, ושיחתית, מזהים את [[misconceptions]] הספציפיים שמאחורי שגיאה (למשל, "מלכודת התשובה הנכונה" שבה תשובה נכונה מסתירה הסקה פגומה). [[xie-hillm-cd-2026|HiLLM-CD]] משתמש ב-LLMs לבניית עץ-מושג אוטומטית והיסק מיומנות היררכי, מגשר אבחון ומעקב. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] דוחפים זאת הלאה על ידי פדרציית אבחון על פני מספר ממשקי API של LLM מסחריים עם פרטיות דיפרנציאלית-מקומית ε, ומראים שאבחון מדויק, שומר-פרטיות הוא אפשרי בלי שאף מודל יראה נתוני סטודנט גלאנטיים.
- **הפרדת אבחון ממשוב היא עקרון עיצוב.** חונכי LLM מאשרים באופן אמין שלבים נכונים אך דוחים יתר על המידה הסקה תקפה ומאמתים יתר על המידה שגיאות — ואבחון מדויק אינו מניב באופן אמין [[feedback]] בר-פעולה. עיצוב ITS צריך אפוא להפריד רכיב אבחוני מרכיב המשוב/[[scaffolding]] ([[yasir-llm-tutoring-agents-2026]]).

## קשרים

אבחון קוגניטיבי מתחבר ל[[knowledge-tracing]], ל[[student-modeling]], ל[[educational-measurement]], ול[[assessment]]. התובנות שלו מזינות [[intelligent-tutoring]] ו[[adaptive-learning]], ועבודת עידן-LLM מקשרת אותו לזיהוי תפיסות שגויות ב[[intelligent-tutoring|הוראה חכמה AI]].

## מושגים מחוברים

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## מאמרים מחוברים

- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Cognitive Skills from Handwritten Math
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-student-misconception-identification]] — LLM identification of student misconceptions
- [[student-math-competence-clustering]] — Clustering for Modeling Student Mathematical Competence
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Cognitive Agent Compilation for Explicit Problem Solver Modeling
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosing from simulated learners
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM concept trees + hierarchical proficiency inference
- [[yasir-llm-tutoring-agents-2026]] — Separating diagnosis from feedback in LLM tutors
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving heterogeneous multi-LLM federated diagnosis
- [[llm-common-modeling-mistakes-formalisms-2026]] — Mining common modeling mistakes at scale with LLM-generated, algorithmically validated bug-fixing transformations (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: DINA-based diagnosis of 14 learning objectives from existing physics concept inventories (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLM knowledge-concept annotation and calibrated concept-level knowledge states
- [[llm-distractor-generation-student-reasoning-2026]] — misconception-based distractors as a diagnostic item-design task
- [[misconception-acquisition-dynamics-llms-2026]] — where the error enters the solution is the diagnostic bottleneck
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching