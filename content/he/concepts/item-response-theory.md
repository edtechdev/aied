---
title: תיאוריית תגובת הפריט
created: "2026-10-12T20:00:00-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-05T08:24:47-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **תיאוריית תגובת הפריט (IRT)** — משפחה של מודלים פסיכומטריים המעריכים יכולת סמויה מתשובות פריטים על ידי מידול הקשר בין יכולת הלומד להסתברות לענות נכון על כל פריט. מודלי IRT ממידדים קושי פריט ואבחנה, ומאפשרים דיוק מדידה ובדיקות אדפטיביות. בעידן ה-AI, IRT פוגש [[llm|מודלים לשוניים גדולים]] ב[[llm-item-difficulty-prediction]] וב[[llm-psychometric-calibration-cdp]]: AI חוזה ומכויל קושי פריט, מה שעשוי לשפר דיוק מדידה ולהזין [[adaptive-learning]].

## שאלות למחשבה

- תיאוריית תגובת הפריט מתייחסת ליכולת ולקושי הפריט כמשוערים יחד מדפוסי תגובה, ולא מתייחסת לציון מבחן גולמי כמדד. כיצד שני תלמידים עם אותו מספר של תשובות נכונות עשויים להשתנות בפועל ביכולת?
- IRT מאפשרת להשוות לומדים על סולם משותף ולהעריך דיוק לאדם. מדוע לדעת קושי ואבחנה של פריט עשוי להיות חשוב יותר מסתם לדעת אם תלמיד ענה נכון?
- מחקר אחד השתמש בסטטיסטיקות התאמת-אדם (person-fit) של IRT כדי להבחין בין תשובות אנושיות לתשובות המיוצרות על ידי AI במבחני בחירה-מרובה — ומסמן תשובות AI כ'חריגות'. כיצד אותה מכונת מדידה שמעריכה למידה עשויה גם לפקח על יושר אקדמי?
- [[research-methods-aied|חוקרים]] משתמשים ב-IRT כדי לאמת ששאלות בחינה המיוצרות על ידי AI תואמות לאלה שנכתבו על ידי מומחים בקושי ובאבחנה. אם AI כותב פריט ש'נראה' טוב, מדוע כיול אמפירי מול פרמטרי IRT מותאמים עדיין הכרחי?
- כאשר AI חוזה ומכויל קושי פריט, מה עלול להשתבש אם הערכת המודל לקושי אינה מאומתת מול נתוני תגובה אמיתיים של סטודנטים?
- IRT מתחברת לבדיקות אדפטיביות ולמעקב ידע — שימוש בתשובות שלכם כדי לבחור מה לשאול הלאה. כיצד הערכת היכולת שלכם מכל תשובה מאפשרת למבחן להפוך לקצר ומדויק יותר במקום רק לארוך יותר?

## מבוא

IRT מתייחסת ליכולת (θ) ולפרמטרי הפריט (קושי, אבחנה, ולפעמים ניחוש) כמשוערים יחד מדפוסי תגובה, ולא מתייחסת לציון גולמי כמדד. זה הופך להשוואת לומדים על סולם משותף, לבחירת פריטים אדפטיבית, ולהערכת דיוק לאדם ולא גלובלית, לאפשריים.

### כיצד IRT מופיעה במחקר

- **קושי שנחזה על ידי AI:** [[llm-item-difficulty-prediction|חיזוי קושי פריט ב-LLM]] משתמש במודלים לשוניים להעריך קושי פריט, ושצריך להיות מאומת מול פרמטרי IRT מותאמים אמפירית.
- **כיול פסיכומטרי:** [[llm-psychometric-calibration-cdp|כיול פסיכומטרי ב-LLM]] מיישר הערכה מבוססת-מודל עם מדידה מבוססת-IRT כדי שתשובות המיוצרות על ידי AI ישמרו תכונות מדידה.
- **מעקב ידע ומידול לומד:** IRT קשורה קשר הדוק ל[[knowledge-tracing]] ול[[student-modeling]] — מודלים שעוקבים אחר ידע הלומד לאורך זמן — ומשתפת את המטרה להעריך מצבי לומד בלתי-נצפיים מתשובות נצפות.

- **גדולי IRT שנקראים מלוגיטים של LLM.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] מחלצים יכולת תלמיד θ = z^GOOD − z^BAD וקושי פניית חונך d = z^HARD − z^EASY מלוגיטים של טוקן-הבא ומשלבים אותם בחזאי Rasch 1PL, מה שהופך מעקב ידע מבוסס-דיאלוג לניתן לפרשנות (64.29% דיוק, 65.25 AUC ב-QATD2k).
- **אימות שדה היררכי-בייסיאני:** [[assessing-quality-ai-generated-exams-field-2025|הערכת בחינות המיוצרות על ידי AI]] משתמש במודל IRT 2PL היררכי-בייסיאני (עם פריטי עיגון טרום-מבחן כדי למקם 1,686 סטודנטים על סולם θ משותף) כדי להראות ששאלות המיוצרות על ידי AI תואמות לפריטי בחינות תקניות שנכתבו על ידי מומחים בקושי ובאבחנה — הדגמה בקנה מידה גדול של IRT כגב המאמת ל[[automated-question-generation]].
- **פונקציית הבדיקה ממקדת את הדיוק באופן מקומי.** מבחן אורייות-GenAI בן 20 פריטים שאומת עם מודל 2PL (RMSEA = 0.03, CFI = 0.97) הגיע לשיא פונקציית המידע שלו ב-θ = −0.8, מה שהופך אותו למדויק ביותר עבור לומדים בעלי אורייות נמוכה-עד-מתונה ולא אחיד לאורך הסולם ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **הפרדת תשובות אנושיות מתשובות GenAI באמצעות סטטיסטיקות התאמת-אדם:** [[irt-human-genai-mcq-responses|Strugatski and Alexandron (2026)]] מחילים סטטיסטיקות התאמת-אדם (PFS) בתוך IRT כדי להבחין בין תשובות אנושיות לתשובות [[generative-ai]] בהערכות בחירה-מרובה. PFS מסמנות תשובות GenAI כ'חריגות' בשני הקשרים אותנטיים (בחינת [[chemistry-education|כימיה]] ובחינה לאומית), מראות ש[[conversational-ai|צ'אטבוטים]] שונים מפיקים דפוסי תגובה נפרדים (קבוצה בלתי-אחידה של 'אינטליגנציות'), וחושפות שגרסאות GenAI חדשות יותר הופכות דמויות-אדם יותר — מה שממקם את IRT כמסגרת עמידה לסינון [[academic-integrity|יושר]] בבדיקות בסיכון גבוה.
- **אותם פריטים עשויים שלא למדוד את אותה הבנייה הסמויה עבור LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld and Alexandron (2026)]] השווו מבני גורמים אנושיים ושל-LLM על פני שני מכשירים עם ניתוח גורמים חקרני והתאמת קונגרואנציה; הדמיון בין LLM ואדם נשאר באופן מהימן מתחת לקו הבסיס של אנושי-אנושי, ולכן פרמטרי IRT המותאמים על אנושים אינם מועברים אוטומטית.
- **הערכת קושי LLM מול פרמטרי IRT Rasch:** [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] מעריכים אם GPT-4o יכול להעריך את הקושי של פריטי הערכה במתמטיקה וקריאה לכיתות K-5 (N = 5170) המכוילים תחת מודל IRT Rasch. גישת הערכה ישירה זירו-שוט התאימה באופן מתון-עד-חזק עם קושיות Rasch האמיתיים (r = 0.83 במתמטיקה, r = 0.81 בקריאה) אך הייתה לא-אחידה בין כיתות ולעתים קרובות לא טובה יותר מרגרסור דמה של ממוצע-כיתה עבור כיתות K ו-1, ככל הנראה בשל הגבלת טווח בקושיות פריטים בכיתות הנמוכות. אסטרטגיה מבוססת-תכונות — תכונות קוגניטיביות ולשוניות שחולצו על ידי LLM והוזנו למודלים מבוססי-עץ — ניצחה הערכה ישירה (מתאמים עד r = 0.87), כאשר רמת הכיתה ומניין המילים היו החוזים המובילים. המחקר מדגיש שהערכות קושי של LLM חייבות להיות מאומתות מול פרמטרי IRT מותאמים אמפירית, ושחילוץ תכונות מובנה יכול לחדד חיזוי במקום ששיפוט זירו-שוט הוליסטי נופל קצר.
- **הסבר קושי במקום חיזוי.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]] מתאימים מודל Rasch 1PL לרשומות תגובה של LLM עבור GSM8K (1,319 שאלות), BBH-structured (1,396) ו-WinoGrande (1,267), עם 5,000 מודלים עבור GSM8K ו-WinoGrande ו-3,811 עבור BBH-structured. הם מנחים LLM להציע השערות בשפה טבעית למה פריט אחד קשה יותר מאחר, ובוחרים אותם עם רגרסיה מוסדרת-L1 על שאלות מוחזקות-הצדה. בשימוש לבד על שאלות בלתי-נראות, ההשערות הנבחרות מגיעות ל-R² = 0.373 ב-GSM8K, 0.580 ב-BBH-structured ו-0.090 ב-WinoGrande, הטובות ביותר מהשיטות שהושוו ב-GSM8K ו-WinoGrande והשניה הטובה ביותר ב-BBH-structured, שבו RoBERTa-base מכוון-עדינות מגיע ל-0.646. כתכונות נוספות הן מוסיפות +0.11 ל-RoBERTa-base ב-GSM8K (0.362 ל-0.468) ו-+0.19 ו-+0.18 לשני מודלי הטמעה קפואים. בדיחה סיבתית עורכת 50 שאלות מבחן לכל מערך נתונים לעבר או הרחק מהשערה: עריכות מגדילות-קושי מפחיתות דיוק ממוצע ב-15.27 ו-23.88 נקודות אחוז ב-GSM8K ו-BBH-structured, בעוד עריכות מפחיתות-קושי מעלות אותו ב-32.18 ו-28.52. קושי כאן נערך מתשובות מודל, לא מנושאי מבחן אנושיים, ולכן זו תוצאת הערכת-LLM ופסיכומטריה.
- **סימולציית משיבים יכולה לשחזר מה שרגרסיית הגירוי אינה יכולה:** LLM רב-מודאלי מכוון-עדינות המשחזר הסתברויות בחירת-אפשרות של סטודנטים על פני רמות יכולת קירב קושי מוחזק-הצדה ב-r = 0.85, מעל קווי הבסיס של רגרסיית MathBERT (0.68) ו-MetaMath (0.75), ושחזר את פרמטר הניחוש c ב-0.48 בעוד האבחנה a נשארה חלשה (0.31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **פגמי כתיבת-פריט כמסנן טרם-הטמעה לפרמטרי IRT:** [[item-writing-flaws-irt-difficulty-2026|Schmucker and Moore (2026)]] בודקים אם מחווני פגם-כתיבת-פריט (IWF) — הערכה טקסטואלית כלל-תחומית שאינה דורשת נתוני סטודנטים — חוזהים קושי ואבחנה של IRT המשוערים אמפירית. על פני **7,126 שאלות בחירה-מרובה** ב[[stem-education|STEM]] (מדע פיזיקלי, [[math-education|מתמטיקה]], מדעי החיים/הארץ), הם השתמשו בקידוד אוטומטי בסיוע-LLM כדי להראות שמחווני IWF נושאים תוקף חיזוי עבור פרמטרי IRT אמפיריים, ומציעים מסנן טרם-הטמעה בקנה מידה גדול שמשלים או מחליף חלקית בדיקת פיילוט יקרת-משאבים.
- **סינון סיכון מבוסס-IRT למתן ציונים סלקטיבי על ידי AI:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] מתאימים מודל IRT לוגיסטי דו-פרמטרי לנתוני ניקוד-כימיה-בידני על ידי AI ומגדירים את ה"סיכון" של קבלת שיפוט AI כסטייה המוחלטת בין הציון המנורמל של AI להסתברות הזכות הצפויה של IRT (Risk = |s−p|); קבלת פריטים רק בתוך סובלנות נבחרת של ציפייה בייסיאנית זו מסמנת ציוני AI "מפתיעים" ל[[human-in-the-loop-ai|סקירה אנושית]], והופכת את IRT מכלי צבירת-ציון טהור למנגנון קבלה/דחייה תפעולי עבור [[automated-assessment]] — מנגנון שהשיג יישור עם ניקוד אנושי דומה לתחומי זכות-חלקית פשוטים יותר אך עם עומס אנושי נמוך יותר, אם כי ההיגיון שלו פחות שקוף לקהלים לא-טכניים.
- **IRT כשכבת כיול בתוך מודל אבחוני:** PLCD מוסיף ראש ניחוש-והחלקה בהשראת-IRT מעל תגובות ברמת-תרגיל, ומשפר איכות הסתברות ולא דיוק — שגיאת כיול צפויה ירדה מ-0.071 ל-0.037 ב-XES3G5M — מה שהופך את IRT לתיקון פנימי לרעש תגובה, לא רק למודל ניקוד ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **כיול 'התמודד-והתקע' עבור בנקי פריטים משתנים באופן מתמשך:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] מתייחסים לכיול-מחדש של IRT כבעיית קנה מידה ולא כבעיית התאמה. כאשר יצירת פריטים מבוססת-AI וחיזוי פרמטרים מבוסס-תכונות הופכים בנק גדול יותר, דליל יותר ומעודכן באופן מתמשך, התאמה מחדש של היסטוריית התגובות המלאה בכל עדכון הופכת יקרה יותר בהתמדה; *כיול הקונצנזוס* שלהם במקום מכויל כל תקופת זמן פעם אחת ומשלב תקופה חדשה עם פוסטריורים מוקדמים שכבר חושבו. שני תכונות מפרידות אותו מעבודת IRT קיימת של התמודד-והתקע: התקופות אינן משתפות מטריקה סמויה, ולכן כל אחת מקושרת למטריקת ייחוס על ידי קריטריון Haebara עמיד שנפתר *בנפרד עבור כל משיכת פוסטריור* (נושא שגיאת קישור לתוך הפוסטריורים המקושרים), וכל תקופה היא התאמה היררכית משל עצמה שתורמת הערכה מוקדמת, ולכן המכפלה הנאיבית של פוסטריורים חייבת שההערכה המוקדמת הזו תחולק החוצה והערכה מוקדמת קונצנזלית תוחזר — מה שמתקטן לכלל ועדת בייס כשההערכות המוקדמות קבועות. מול בנצ'מרק מאוגד על ארבע תקופות רבעוניות של מבחן האנגלית של Duolingo, ממוצעי הפוסטריור הסכימו ב-r = .998 (קושי) ו-.991 (לוג-אבחן) עם סטיות תקן של הפוסטריור ב-r = .970 ו-.920, ומשאירים התפזרות-חסרה מתונה (יחס SD 0.91–0.98) שהגדולה ביותר הייתה בשליש החשיפה-לתקופה הנמוך ביותר. זה כיול IRT מהונדס מחדש לתנאי המסירה שבנקי הפריטים המיוצרים על ידי AI יוצרים.
- **כמה נדיר IRT מעגן אימות מכשירים:** הערכה של מכשירי אורייות AI של מורים ממדדת את היעדרה של IRT ולא את השימוש בה. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]] דירגו 33 מכשירים מול מטריצת החלטות שהוסבה מ-COSMIN ומ-Terwee et al. (2007); תוקף מבני היה חזק, כאשר 24 (72.7%) בדירוג A דרך CFA, PLS-SEM או מודלים של IRT, אך אף אחד לא השתמש ב-IRT או ב-Rasch כראיה הראשית שלו, ורק חמישה מכשירים (15.2%) דיווחו על חוסר-שינוי מדידה או תפקוד פריט דיפרנציאלי. המחברים טוענים למען IRT ומשימות ביצוע לצד הערכה-עצמית כדי להפריד יכולת מאומתת מביטחון שדווח.
- **חלופה סיבתית ל-IRT אסוציאטיבי.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] טוענים שמודלים של IRT ומודלי לומד מבוססי-רשת-בייסיאנית אינם יכולים להביע התערבויות או קונטפקטואלים, ומעירים משוואות מבניות ממומחים במקום; על סוללת בדיקה אדפטיבית עם 109 סטודנטים, המודל שהועיר היה פחות חזוי במעט (−287 מול −277 לוג-סבירות מבחן) אך תמך בשאילתות קונטפקטואליות אודות עזרה.

### קשרים

IRT היא יסוד של [[educational-measurement]] ו[[assessment-validity]], מחזיקה את [[adaptive-learning]] (בחירת פריטים אדפטיבית) ואת [[student-modeling]], ומתחברת ל[[psychometrically-aware-ai]] (הערכת AI המיושרת עם תיאוריית מדידה) ול[[knowledge-tracing]]. היא מופיעה ב[[llm-difficulty-calibration-programming-exams-2026|כיול קושי LLM]] להערכת תכנות.

## מושגים מחוברים

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## מאמרים מחוברים
- [[explaining-question-difficulty-natural-language-2026]] — Explaining LLM question difficulty in natural language through IRT and causal edits (Cui et al. 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Field audit showing IRT/Rasch rarely used as primary validation evidence in teacher AI literacy instruments
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
