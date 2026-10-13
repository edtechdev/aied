---
title: מודלי שפה גדולים (LLM)
created: "2026-10-12T21:15:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
reviewed_by: [editor]
translation_of: concepts/llm
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **מודלי שפה גדולים (LLM)** — מודלי [[machine-learning|רשת נוירונית]] המאומנים על קורפוסי טקסט ענקיים שמייצרים טקסט דמוי-אנושי, ומניעים את רוב יישומי ה[[ai-education|בינה מלאכותית בחינוך]] המודרניים. LLMs הם עמוד-השדרה החישובי של חונכות, הערכה וייצור תוכן של בינה מלאכותית יוצרת בחינוך.

## שאלות למחשבה

- מה לדעתכם צ'אט-בוט [[conversational-ai|AI]] "יודע" כשהוא עונה לכם? העמוד ממסגר LLMs כמייצרי טקסט הסתברותי ולא כמאחזרי עובדות מאומתות — כיצד ההבחנה הזו משנה כמה הייתם סומכים על ההסברים של מודל?
- LLMs מתוארים כמנוע שמאחורי רוב כלי חינוך ה-AI המודרניים — חונכות, ניקוד, ייצור תוכן, ואפילו אבחון מה שתלמידים יודעים. מהשימושים האלה, איזה מהם לדעתכם המתאים ביותר והכי-פחות מתאים למייצר טקסט הסתברותי, ולמה?
- העמוד מדווח ששלושה LLMs שונים ייצרו תוכניות תמיכה שונות באופן חד עבור אותו קלט אנליטיקת-למידה, כל אחת עם הנחות דמוגרפיות שונות. אם מודלים אינם ניתנים-החלפה כיועצים, מה המשמעות למוסד שאימצ את אחד מהם?
- כיוון שפלט LLM רגיש להנחיות ולהגדרות, שני אנשים יכולים לקבל תוצאות שונות מאוד מאותו מודל. כיצד הדבר צריך להשפיע על האופן שבו אתם — כלומד או כמעצב — מנסחים בקשות, וכמה אתם סומכים על פלט בודד?
- מגבלה מרכזית היא הזיה — תוכן הסתברותי אך לא-מעוגן. בהקשר של חונכות או ניקוד, מה היה צריך כדי שתרגישו סמוכים שהמודל לא מהנדס משהו, ואילו שומרים הייתם דורשים לפני שתרשו לו להעריך תלמיד אמיתי?

## מבוא

### LLMs כמנוע של AIED

LLMs הם המושג המצוטט ביותר במאגר הידע (60+ מאמרים) מכיוון שהם תומכים כמעט כל יישום חינוך AI:

- **חונכות:** מורי [[intelligent-tutoring|AI]] משתמשים ב-LLMs לדיאלוג, הסבר, והכוונת [[problem-solving|פתרון בעיות]]. [[llm-training-and-fine-tuning|אימון וכיוון-עדין]] מתאים LLMs כלליים לשימוש חינוכי.
- **הערכה:** מערכות [[automated-assessment|ניקוד]], ניקוד [[automated-essay-scoring|חיבורים]], וחיזוי [[llm-item-difficulty-prediction|קושי פריטים]] מנצלים יכולות LLM. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] מראים ש-GPT-4o מסוגל להעריך את קושי פריטי מתמטיקה וקריאה בכתות K-5 (N = 5170) המכוילים תחת מודל IRT Rasch: דירוגי אפס-צעד קורלטו באופן מתון-עד-חזק עם קושיים אמיתיים (r = 0.83 מתמטיקה, r = 0.81 קריאה) אך שונו לפי כיתה, בעוד שאסטרטגיה מבוססת-תכונות שבה ה-LLM מחלץ תכונות קוגניטיביות ולשוניות עבור מודלים מבוססי-עץ הגיעה לקורלציות של עד r = 0.87 — עדות שחילוץ תכונות מובנה יכול לגבור על שיפוט LLM הוליסטי בודד. לאורך ספרות הניקוד הכוללת, סקירה שיטתית מונחית-[[meta-analysis-systematic-review|PRISMA]] של 42 מחקרים אמפיריים (2023–2025) מסיקה ש-LLMs מתאימים למעריכים אנושיים במשימות קצרות ומבנות היטב עם מברנים מפורטים, אך אינם מסוגלים להחליף באופן מלא שיפוט אנושי בעבודה מורכבת, פתוחה או סובייקטיבית, ושגרסת המודל היא נקבעת דומיננטית של איכות הניקוד ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). האמינות משתנה גם באופן חד לפי סוג הפריט: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] מצאו ש-ChatGPT-5 התאים לסגל מקרוב בפריטי מבחן-בית-מרקחת אובייקטיביים (CCC 0.935–1.000) אך היה לא-אמין בפריטי תשובה-קצרה (CCC ≈0) וחיבור (0.341–0.854), ושמתן של מברין לא שיפרה הסכמה באופן עקבי.

- **תוויות פריטים שיוצרו עוקבות אחר צורה שטחית, לא אחר קושי.** ביקורת של 378 פריטים מצאה שתוויות Easy/Medium/Hard של LLM עלו בסגנון נעול עם רמת Bloom המשו-נוצרת שלו (ρ=0.90) ועם אורך הגזע (15.9 עד 30.2 מילים) אך קורלטו עם קושי פריט אמפירי ב-ρ=0.06 בלבד על פני 7,888 תגובות תלמידים, עדות שמטא-נתוני קושי בזמן-הייצור מתארים פורמט ולא דרישה על [[prior-knowledge|ידע קודם]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).

- **פריטים שיוצרו יכולים עדיין להתאים לפריטי מומחים.** o3-mini בלולאת generate→judge→revise בנה מבחנים ל-71 כיתות; תחת מודל IRT 2PL היררכי-בייסיאני של [[item-response-theory|IRT]], פריטי ה-AI היו קלים יותר אך מבדילים יותר (ᾱ = 1.3 לעומת 1.2) ואינפורמטיביים יותר (I_max = 3.85 לעומת 2.61) מפריטי AP Statistics של מומחים ([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).

- **איכות הערה היא תוצאת עיצוב, לא תכונת-הנחיה-בודדת.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] הנחו פאנל חמישה-מודלים לשפוט טענות קירות-אדם על כל הברה במקום להוציא תווית ישירות, ומסווג שקוף על פני שיפוטים הבינאריים האלה (macro-F1 0.673, Cohen's κ 0.688) גבר על ההנחיה-הישירה המפורסמת הטובה ביותר של מודל חזיתי (0.61 macro-F1) תוך שאחרר מקודד RoBERTa-base מכוון-עדין (0.76); הסכם חוצה-מודלים פעל כמכשיר סינון, לא כעדות תקפות.
- **LLMs היגיון [[multimodal|מרובת-מודליים]] כמנקדים:** כאשר LLM מרובה-מודלי ובעל-יכולת-היגיון (GPT-o4-mini) ניקד מבחן [[chemistry-education|כימיה]] כללי בכתב-יד בן 296 תלמידים עמוד-אחר-עמוד מול תמונות מברין, ציוני-סה"כ בריצה-אחת היו ניתנים-שחזור מאוד (ICC(A,1) = 0.967; אימוצעים של חמש ריצות הגיעו ל-0.993) והסכימו בחוזקה עם סה"כ TA (R² = 0.91), אך אמינות ברמת-הפריט הייתה תלויה-פורמט באופן חד — תשובות טקסטואליות ומשוואות-תגובה ננקדו היטב בעוד שרטוט וגרף היו גרועים מאקראי (רשתות רקע מסיחות את ראיית AI). הדבר מראה שתלות מנקד LLM ב[[trust|אמון]] היא פונקציה של פורמט התגובה והמשימה, לא רק יכולת-מודל גלמית, ושה[[human-in-the-loop-ai|השהיה סלקטיבית]] דרך מסנני ביטחון נחוצה לשימוש בעל-הימור גבוה ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **תוכן:** יצירת תוכן של [[generative-ai|בינה מלאכותית יוצרת]] מסתמכת על LLMs. ייצור [[automated-question-generation|שאלות]] וייצור [[ai-generated-instructional-videos-computing-ed|סרטונים]] מונעים על ידי LLM.
- **בטיחות:** מחקר של [[pedagogical-safety|בטיחות פדגוגית]], סיכון [[hallucination-risk|הזיה]], ו[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[research-methods-aied|בוחן]] סיכונים ספציפיים-LLM.
- **אבחנה:** [[knowledge-tracing|איתור-ידע]] ו[[cognitive-diagnosis|אבחנה קוגניטיבית]] משלבים ביתר עוז LLMs ל[[student-modeling|מידול תלמיד]] עשיר יותר. העיגון חשוב באופן עצום לאבחון שגיאות: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] הראו שמתן ל-GPT-4 של מבנה ממשק המורה פלוס אומדי מיומנות של איתור-ידע [[knowledge-tracing|בייסיאני]] העלה זיהוי שגיאות לוגיות מ-40% ל-81% בפירוק (אבחון שגיאות כולל ~87.8%), בעוד שבעיות מרובות-שלבים ותגובות עם מספר שגיאות נשארו מקרים חלשים ואבחונות "[[misconceptions|תפישה מוטעת]] משותפת" מוזהת נמשכו — עדות שהערך האבחנתי של LLM הוא במידה רבה פונקציה של ההקשר המובנה וסיגנלי [[student-modeling|מודל-הלומד]] שהוא מקבל כמו של המודל עצמו.

- **אימות מופרד מייצור — עם מצבי כשל מקוררים.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]] מגבילים אחזור מורה לחומר קורס שאושר-מורה ומנתבים טענות דרך מאמת DeBERTa-v3-large-MNLI נבדל ארכיטקטונית, אך מזהירים ששני המודלים חולקים אימון רחב-ווב ויכולים להיכשל בדרכים מקוררות, ושהמאמת אינו מסוגל לבדוק עקבות קוד ללא הרצה.

- **שינוי מודל הערכה (2017–2024):** סקירת היקף של Morley et al. על סימון-אוטומטי של שאלות [[science-education|מדע]] בעלות-קצרה עוקבת אחר תנועת השדה מכיוון-עדין של מודלי [[educational-nlp|BERT]] קטנים יותר (דומיננטי עד 2021) לעבר הנחיית LLMs גדולים יותר (GPT-1/2/3.5/4) מכ-2022 — שאומצו דרך [[prompt-engineering|הנדסת הנחיות]] ולא דרך כיוון-עדין — כאשר מודלים מוגברי-תחום, הנחיה מודעת-מברין, ושרשרת-מחשבה העלו דיוק. אך מודלי GPT נמדדו לעתים רחוקות נגד BERT על קורפוסים סטנדרטיים, מעט מסמנים-אוטומטיים יכלו להסביר את הציונים שלהם, ו[[bias-mitigation|הטיה]] נבחנה לעתים רחוקות, אזהרות החלות על הערכת LLM בכלל ([[auto-marking-short-answer-science-2026]]).

### מחקר ספציפי-מודל

מאגר הידע מכסה גם LLMs כלליים (GPT-4, Claude) וגם התאמות ספציפיות-חינוך. [[cstutorbench-slm-tutors|מכוני מודל-שפה-קטן]] משווים ביצועי SLM לחונכות. מחקר [[educational-llm-alignment|התאמה חינוכית]] מתייחס לאופן הפיכת LLMs לבעלי-התאמה פדגוגית. מחקר כיתה על פני שלוש משפחות חזית — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — מצא ש-ChatGPT, Gemini, או Claude יכלו לפעול כשותפי ביקורת שיתופיים לכתיבה טיעונית: לאורך סמסטר של חיבורים איטרטיביים, תלמידים שופרו באיכות הטיעון, ב[[prompt-engineering|הנדסת הנחיות]], ובתגובה ל[[ai-feedback-quality|משוב AI]] בכדי סטיית-תקן שלמה כל אחד (כולם p < .001) ומעורבו עמוקות (87.8% מפריכים טענות LLM), וממקמים LLMs כלליים כשותפי [[collaborative-learning|למידה שיתופית]] ברי-קיום ולא כמייצרי-תשובות בלבד.

קו עבודה משלים ממסגר מחדש LLMs ממנקדים סטטיים לחקיינים של הגיון [[pedagogy|פדגוגי]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] הראו ש-GPT-4, המפוגם עם מברין סמנטית-מדויק ומשופר-משותף איטרטיבית, יכול לקרב את ה[[evaluative-judgment|שיפוט ההערכתי]] האנושי ב[[design-based-research|למידה מבוססת-עיצוב]]: הסכם LLM-אנוש ראשוני היה גרוע (Cronbach's Alpha = 0.393; Kappa −0.06 עד 0.18), אך עידון מברין איטרטיבי העלה הסכם ממוצע מ-54.75% ל-81.25% (Alpha סופי = 0.798, Kappa 0.40–0.55), וקיבוץ K-means של מטריצות ציונים אנושיות ו-LLM הראה צנטרואידים מקוררים מאוד (r = 0.89). המחקר ממקם את המברין כממשק מתווך בין כוונה פדגוגית אנושית להסקה מכונה — עדות ש-LLMs מדף אינם ניתנים-החלפה כמעריכים גם הם, ושהתנהגות ההערכה שלהם היא תוצאת עיצוב המעוצבת על ידי המברין וההנחיות שהם קיבלו. יכולת-מודל גלמית מבדילה ניקוד גם היא: [[benchmark|מכוני]] אחד-עשר מודלי GenAI והטבעת-משפטים על 1,885 תגובות [[automated-assessment|פתוחות]], [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] מצאו שרק GPTo1 הגיע להסכם כמעט-מושלם עם מעריכים אנושיים מומחים (Fleiss' Kappa 0.82), כאשר Claude3 ו-PaLM2 מעט מאחור, בעוד שמודלים מיושרי-אזכור כמו BERT נשארו רחוק מאחור — ומראים שרגישות-הקשר של מודל-חזית חשובה להערכה פתוחה אמינה. הבדלי מודל חשובים גם לשימושים נגזרים בעלי-הימור גבוה. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] הראו ששלושה LLMs ייצרו מרשמי תמיכת-תלמיד שונים באופן חד עבור אותו קלט [[learning-analytics|אנליטיקת-למידה]], וכל אחד הטיל פריורים דמוגרפיים נבדלים על פרופילי הלומד שהם ייצרו — עדות ש-LLMs מדף אינם ניתנים-החלפה כיועצים מרשאיים. באופן דומה, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] מצאו שהניקוד של GPT-4 לשאלות פתוחות [[medical-education|רפואיות]] טרום-קלרקשיפ עלה להסכם בין-מעריכים משמעותי-עד-כמעט-מושלם עם הסגל (ווי-קאפא עד 0.94) רק לאחר שלושה סבבים של עידון מברין איטרטיבי, וירד למתון (κw = 0.54) בפריט מברין-הוליסטי — ומחזק שעיצוב המברין, לא יכולת גלמית בלבד, הוא המנוף הקובע לאמינות ניקוד LLM. התנהגות ספציפית-מודל מופיעה גם באופן שבו LLMs מגיבים למשתמשים סקפטיים: ביקורת אלגוריתמית ביקשה מעשרה LLMs חזיתיים 500 פעמים כל אחד עם פרסונת סקפט-AI של [[k-12|K-12]] במונטנה כפרית כדי לבדוק אם [[ai-technologies|מערכות AI]] שנשאלו על ידי משתמשים סקפטיים מונחות לעודד אימוץ. שמונה מתוך עשרה הכירו בדאגות המשתמש ואז הפנו מחדש למסגרות מעורבות [[student-engagement|AI]]; ציונים הולכים ספגו מ-3.85 (Claude Sonnet) עד 7.52 (Gemini 3.1 Pro Preview), כאשר פאנל ניקוד-AI חוצה-משפחות הפיג ווי-קאפה של Cohen >= 0.70. התבנית הייתה תוצאת-עיצוב תלויה-מודל. יכולת-מודל תלויה גם באופן שבו מודלים משולבים: Bird (2026) כיוון-עדין שמונה טרנספורמרים מתקדמי-מצב (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) לסווג ספרות אנגלית לפי UK Key Stage, ומצא שהטרנספורמר ה-unimodal הטוב ביותר (BERT) הגיע ל-F1 של 0.75 בלבד — בעוד ששילוב ELECTRA מכוון-עדין עם רשת נוירונית בלשנות-חישובית העלה את F1 ל-0.996, ומראה שסיווג טקסט טרנספורמרי בלבד מוגבל ושהשילוב עם תכונות משלימות הוא היכן שהעליות שוכנות.

LLMs מאשרים גם באופן מועדף: על פני 11 מודלים, תגובות AI אישרו משתמשים 49% יותר מתגובות אנושיות, ותגובות סיקופנטיות יותר משכו דירוגים גבוהים יותר, ומעלות אמון ושימוש מתמשך — מצב כשל לאימון, חונכות או משוב, שבו אתגר קונסטרוקטיבי הוא הנקודה ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## מושגים קשורים

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## מאמרים קשורים
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues

- [[ai-personal-coach-review-benefits-risks-2026]] — Sycophancy across 11 LLMs: AI affirmed users 49% more than humans, raising trust and continued use
