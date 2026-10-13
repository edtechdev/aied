---
title: מדידה חינוכית
created: "2026-10-12T19:05:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [educational-nlp, knowledge-tracing, learning-analytics]
assessment: [assessment-validity, item-response-theory, psychometrically-aware-ai]
connected_faqs: [ai-literacy-evidence, evaluating-ai-interventions-methods]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/educational-measurement
source_updated: "2026-10-06T02:05:50-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **מדידה חינוכית** — תורת הפסיכומטריה והשיטות לכמת ולאימות למידה ואת הבניות (constructs) שלה — עוברת דרך עמודי ה[[item-response-theory]], ה[[knowledge-tracing]] וה[[assessment-validity]] של מאגר הידע. עידן ה[[llm]] מאלץ את המדידה להתפשר בין פסיכומטריה קלסית לזרמי תשובות חדשים הנוצרים על ידי בינה מלאכותית: ניקוד אוטומטי, קושי חזוי על ידי בינה מלאכותית, ו traces רב-מודליים ([[multimodal]]) יש לאמת מול עקרונות מדידה מבוססים, כדי לשמר את מהימנותה ואת תקפותה.

## שאלות למחשבה

- מודל שפה גדול (LLM) חוזה ששאלה במבחן קלה, אך נתוני מבחן אמפיריים מראים שהתלמידים מתקשים בה. למי תסמכו ([[trust]]), ומה היה משכנע אתכם לסמוך על אומדן המכונה?
- מדידה חינוכית עוסקת בהפיכת תצפיות על למידה לטענות [[quantitative-research|כמתיות]] שניתן להגן עליהן. כאשר בינה מלאכותית נוקדת חיבור או מנקדת תשובה, האם 'ציון' הוא אוטומטית מדידה — או שמשהו צריך להיות מאומת קודם? מה?
- מחקר מסוים ([[research-methods-aied|מחקר]] מצביע לכך שמכשירי הערכה עלולים שלא למדוד את אותו הדבר עבור בני אדם כמו שהם מודדים עבור מודלי שפה גדולים — המבנה הלטנטי סוטה. אם הבניות אכן שונות בין בני אדם לבין בינה מלאכותית, מה משתמע מכך לגבי ציונים או דירוגי קושי הנוצרים על ידי בינה מלאכותית?
- בינה מלאכותית יכולה לנקד, ליצור שאלות ולחזות קושי בקנה מידה חסר תקדים. האם 'יותר מדידה' זהה ל'מדידה טובה יותר'? מה הופך ציון למהימן ולתקף, והאם אפשר לשמר את הסטנדרטים האלה כאשר המדידה מבוצעת על ידי מודל יוצר?
- מבחני-אמת (benchmarks) וציונים הנוצרים על ידי בינה מלאכותית נמצאים כיום בכל מקום. מה הייתם צריכים לראות לפני שהייתם מתייחסים להערכה מבוססת בינה מלאכותית כראיה על ההבנה האמיתית של הלומד ולא רק כמספר?

## מבוא

מדידה חינוכית היא התחום של הפיכת תצפיות על למידה — תשובות, התנהגויות, ציונים — לטענות כמתיות שניתן להגן עליהן. היא כוללת הגדרת בניות, עיצוב שאלות/מבחנים, סקליציה, מהימנות ותקפות. ב[[ai-education|בינה מלאכותית בחינוך]], שאלות מדידה נמצאות בכל מקום: האם [[benchmark|ציון מבחן-אמת]] מודד את מה שאנחנו חושבים שהוא מודד? האם ציון הנוצר על ידי בינה מלאכותית הוא מהימן ותקף? האם קושיי שאלות החזויים על ידי בינה מלאכותית מסכימים עם קושיים המוערכים אמפירית?

## כיצד המדידה החינוכית מופיעה במחקר

- **השינוי העשור של התחום על ידי בינה מלאכותית:** [[xiong-ai-educational-measurement-review-2026|Xiong and Li (2026)]] ממפים את ההשפעה של בינה מלאכותית על פני שלוש ערוכות ([[formative-assessment|פורמטיבי]] 2015–2018, Expansion 2019–2022, Generative 2023–present) דרך מסגרת Efficiency–Enhancement–Transformation, ומכסים בינה מלאכותית בניקוד וב[[automated-question-generation|יצירת שאלות]], מידול פסיכומטרי, חדשנות בהערכה ונתוני תהליך, ו[[bias-mitigation|הוגנות]]/אתיקה/שוויון. הם טוענים לפרדיגמה חדשה המשלבת תיאוריית מדידה עם שיטות בינה מלאכותית, ולקונספטואליזציה מחדש של בניות בהקשר של אינטראקציה בין אדם ל[[student-ai-interaction|בינה מלאכותית]] — אותו הגבול ש[[assessment-latent-structure-human-llm-2026|השוואת המבנה הלטנטי]] חוקר אמפירית.

- **קושי חזוי על ידי בינה מלאכותית וכיול:** [[llm-difficulty-calibration-programming-exams-2026|כיול קושי באמצעות מודלי שפה]] ו[[llm-item-difficulty-prediction|חיזוי קושי שאלות]] משתמשים במודלי שפה גדולים כדי לאמוד את קושי השאלה, דבר שיש לאמת מול אומדנים פסיכומטריים (ראו [[item-response-theory]]). [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] מוסיפים מבחן בקנה מידה גדול של כיתות K–5 להנחה זו: על פני 5,170 שאלות במתמטיקה ובקריאה, שכוילו תחת מודל ה-Rasch IRT, דירוגי הקושי של GPT-4o בשיטת zero-shot התואמו בחוזק בינוני עד גבוה עם הקושיים האמיתיים (r = 0.83 במתמטיקה, r = 0.81 בקריאה), אך היו אחידים פחות בין כיתות, ולא עלו על רגרסור דמי-ממוצע-כיתה עבור כיתות K ו-1. גישה מבוססת תכונות — תכונות קוגניטיביות ולשוניות שחולצו על ידי מודל שפה גדול והוזנו למודלים עץ-מבוססים — הגיעו להתאמות של עד r = 0.87, כאשר רמת הכיתה וספירת המילים היו החוזים המובילים. המחקר ממחיש הן את ההבטחה והן את הגבולות של קושי חזוי על ידי בינה מלאכותית כקלט למדידה, ומציע זרימת עבודה מעשית בת שבעה שלבים לאנשי מקצוע בתחום הבדיקות.

- **כאשר תוויות קושי הנוצרות אינן מודדות קושי.** ביקורת תקפות-בניות של 311 שאלות הנוצרות על ידי מודלי שפה גדולים ופרוסות בסביבה אמיתית מצאה שתווית הקושי הנוצרת התואמה עם רמת הבלום שלה (הנוצרת יחד עמה) ב-ρ=0.90, אך עם הקושי האמפירי (האינדקס 1−p של תיאוריית הבחינות הקלסית) רק ב-ρ=0.06, בעוד שאורך האפשרויות סטה בכיוון הפוך (ρ=−0.18) — תוצאה של "תוויות כצורת-פני השטח" שמגבילה את הקריאות האופטימיות לגבי קושי חזוי על ידי בינה מלאכותית מלמעלה ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).

- **שפטו שאלות שנוצרו על פי נתרון הפתרון, לא על פי הנוסח.** קידוד עץ ההיסקים המאומת של כל שאלה העלה את הביצועים ב-7.5% מעל השיטה השנייה בדירוג בקיאות במושגים, ב-6.3% באומדן קושי ו-19.5% בהערכת מיומנות, כאשר קו בסיס בשיטת zero-shot תייג בטעות שאלה שעוקבת אחר תבנית כ"Reasoning" ושאלה גאומטרית כ"Knowing" ([[proiqa-math-item-quality-assessment-2026|Tong et al. (2026)]]).

- **מודעות פסיכומטרית ב[[assessment]]:** [[psychometrically-aware-ai|בינה מלאכותית מודעת פסיכומטרית]] היא הסטנדרט לפיו הערכה מבוססת בינה מלאכותית תהיה מיושרת עם תיאוריית המדידה — מכוילת, מודעת לחוסר-ודאות ושומרת תקפות (ראו [[automated-assessment|הערכה באמצעות בינה מלאכותית מודעת ביטחון]]).

- **תוויות מיומנות נבנות, לא נצפות.** במקום שנדרשת אמת-קרקע לאבחון, [[personalized-neural-cognitive-architecture-search-2026|Jia and Dong (2026)]] בנו אותה באמצעות הליכי בקרת-תקפות — גרפים קוגניטיביים של מושגי תכנית לימודים, מיפויי נקודות-ידע שנבדקו על ידי מרצים, וראיות הערכה מתכנסות — ולא באמצעות המרה ישירה של מעקבים התנהגותיים, והאבחונות שלהם תאמו לפסיכולוגים חינוכיים ב-Cohen's kappa 0.78 לעומת 0.65 עבור IRT.

- **ניקוד אוטומטי ותקפות:** [[ai-scoring-language-bias-physics|ניקוד באמצעות בינה מלאכותית והטיה לשונית]] ו[[multimodal-item-parameter-estimation-2026|אומדן פרמטרי שאלות רב-מודלי]] בוחנים כיצד ניקוד אוטומטי ונתונים רב-מודליים משפיעים על איכות המדידה.

- **מסגרות תקפות:** [[assessment-validity]] ו[[educational-nlp]] מספקים את הסטנדרטים ואת הכלים לאימות מדידה מבוססת מודלי שפה גדולים.

- **השוואת מבנה לאטנט:** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] מרחיבים את המדידה החינוכית להקשר של מודלי שפה גדולים על ידי בחינה האם מכשירי הערכה מציגים *אותו מבנה פקטוריאלי* עבור בני אדם ועבור מודלי שפה גדולים. באמצעות EFA, התאמת פקטורים ודגימה חוזרת, הם מראים שמבנים לאטנטיים של מודלים ואנשים סוטים באופן שיטתי ב[[chemistry-education|כימיה]] ובמכשירי חשיבה כמותית, ומשתמע מכך שהבניות הנמדדים שונים בין אוכלוסיות — בדיקה הכרחית לפני שאפשר להניח שראיות תקפות אנושיות עוברות לבינה מלאכותית.

- **בינה מלאכותית כמעריכה עם שגיאה מדידה:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] מתייחסים לנקודות שהוקצו על ידי בינה מלאכותית כתצפיות ניתנות לטעות עם מקורות שגיאה מרובים (שאלות, ריצות, משימות) תחת תיאוריית ה-generalizability ותקפות מבוססת-טיעון של Kane. ניתוח מהימנות של מבחן כימיה כללית בכתב יד של 296 סטודנטים הראה יציבות גבוהה של ציונים *כולליים* על פני חמש ריצות בינה מלאכותית (ICC(A,1) = 0.967, Kendall's W = 0.959, מקדם חזרתיות 95% של 5.33 מתוך 60 נקודות) עם יציבות נמוכה יותר ברמת השאלה הבודדת (ICC(A,1) = 0.836) — שגיאות לא-שיטתיות מתבטלות חלקית כשמסכמים אותן (אפקט צבירה של Spearman–Brown שמעלה את ההתאמה בציונים הכוללים ל-R² = 0.91), בעוד שחיתוך חיובי קטן עם שיפוע קטן מ-1 חשף הטיית כיווץ ציונים של "מעריך מלא פחד". מסגור זה הופך אמצעי-ריצות וצבירה להחלטות עיצוב מדידה, ומניע פילטרי ביטחון המכוילים לסיכון IRT ([[item-response-theory|IRT]]) כאמצעי הגנה על התקפות לפני שאמצעים אוטומטיים מקבלים אמון.

- **גרסת המודל היא תנאי מדידה.** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]] מצא שדמיון התשובות בתוך אותו מודל (0.715–0.795) עלה בעקביות על הדמיון בין מודלים (0.443–0.604) בארבעה מודלי שפה גדולים, ולכן טיעון ניקוד שנקבע לפריסה אחת אינו עובר אוטומטית ליורשה.

- **תוצאה אפסית אינה ראיה לשוויון אלא אם היא חסומה.** StudentBench בחן האם טיפול-עזר (tutoring) משותף באמצעות בינה מלאכותית תאם לטיפול של מומחה אנושי, בשני מבחנים חדשי-צדדיים מול ±0.25 סטיות-תקן משותפות, במקום מבחן להבדל, ודיווח על הבדל מתואן של -0.58 נקודות אחוז (רווח סמך 90% [-2.18, 1.03]) — הבחירה שהופכת אפס-חסר-כוח לטענת שוויון ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]).

- **כיול שמתאים עם נתונים חדשים ולא עם כל ההיסטוריה:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] מתמודדים עם ההשלכה התפעולית של יצירת שאלות באמצעות בינה מלאכותית — בנקי שאלות גדולים, דלילים ומתעדכנים בתדירות גבוהה יותר ממוסכמים, שבהם התאמה מחדש של כל נתוני התשובות שנצברו בכל עדכון יקרה ועלולה לעבור את הזיכרון הזמין. ה-*consensus calibration* שלהם משלב תקופות רבעוניות מכוילות באופן עצמאי על ידי מיפוי דגימות-האחור של כל תקופה על מטריקה משותפת בעזרת קישור Haebara עמיד לכל דגימה (כך שחוסר-הוודאות של הקישור מועבר ולא נטופ כטרנספורמציה קבועה), ולאחר מכן צבירה כמכפלה של פוסטריורים גאוסיים מהם מחסרים את ה-prior *המוערך, ההיררכי* של כל תקופה, ומחזירים prior קונצנזוסי. על נתונים תפעוליים של Duolingo English Test לאורך ארבע תקופות, הצבירה תאמה למבחן-אחד-מרוכז של הרצה בודדת בממוצעי פוסטריור (r = .998 לקושי, .991 ללוג-דיסקרימינציה) ובסטיות-תקן (r = .970 ו-.920), עם חוסר-פיזור שיורי של 0.91–0.98 ביחס בין סטיית-תקן קונצנזוסית למשותפת לפי שלישי חשיפה — מרוכז בשליש השאלות הדליל ביותר, שם ספירת-יתר של prior פוגעת ביותר. לקח המדידה דו-צדדי: prior מוערך אינו יכול להיטופ באמצעות מכשירי subset-prior הסטנדרטיים של חישוב בייזייני מקבילי, וה*פיזור* של הפוסטריור — חוסר-הוודאות שהבחירה והניקוד האדפטיביים צורכים — הוא מטרה לתיקון לא פחות מהממוצע.

- **זיהוי הפיזור של מערכת משני מספרים מפורסמים:** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales et al. (2026)]] מראים שסטיית-התקן של התפלגות ה[[learning-gains|הישגים]] ניתנת לשחזור מסטטיסטיקות סיכום מפורסמות בלבד — הממוצע והשותפות של תלמידים שנמצאים מעל ציון מיומנות קבוע — מכיוון שבהנחת התפלגות σ = (c − μ) / z(1 − p). ביישום על PISA 2025 של אל סלבדור ([[math-education|מתמטיקה]] ממוצע 346, 12.28% ברמה 2 ומעלה בסף 420.07), ה-σ הנשמע הוא 63.8 (קריאה 76.8, מדע 63.8), הרבה מתחת לתקן הבינלאומי של 100, כצפוי להתפלגות הנלחצת אל קרקעית הסקלה; שלושת האומדנים הושגו מזוגות מספרים עצמאיים ונמצאים בטווח של כ-13 נקודות זה מזה, בדיקת עקביות פנימית מתונה. השותפות ברמה 2 מדווחת לכל מערכת PISA, והיא תומכת באינדיקטור SDG 4.1.1, ולכן הזיהוי אינו זקוק למיקרו-נתונים, ואותו מאמר מדגים את בעיית המכנה בגודלי-האפקט באמצעות דיווח על פער אחד במתמטיקה בשלוש דרכים — 129 נקודות, 1.29 סטיות-תקן בינלאומיות, או 2.02 סטיות-תקן של ההתפלגות הסלבדורית עצמה — בטענה שגודלי-אפקט מנורמלים מחולקים בפיזור של המדגם שלהם אינם ניתנים להשוואה לגיטימית בין מחקרים.

## מכשירי מדידה במאגר הידע

פונקציה מרכזית של המדידה החינוכית היא הפיתוח, האימות והשימוש ב**מכשירים** — הסקלות, המבחנים ותכניות הקידוד הקונקרטיים שמבצעים (operationalize) בניות. המאמרים של מאגר הידע מתעדים מגוון רחב של מכשירים לבניות בתחום הבינה המלאכותית בחינוך, אותם ניתן לסווג לפי מה שהם מודדים ולפי גישת המדידה שלהם.

### מכשירי אוריינות AI / GenAI

אוריינות AI היא הבנייה עם הכיסוי העשיר ביותר של מכשירים במאגר הידע. קיימות שתי משפחות רחבות: **מבחני ביצועים** (אובייקטיביים, פחות חשופים להטיית דיווח-עצמי) ו**סקלות דיווח-עצמי** (סובייקטיביות, תופסות מיומנות נתפסת). הדילמות של המשפחה השנייה הן נושאו של [[self-report-measures]]: דיווח-עצמי מגיע לתפיסות ולגישות בזול, אך אינו יכול לשאת טענה על מיומנות או התנהגות, ומאגר הידע מתעד פער של הערכה מופרזת של 40% כשמשווים דיווח-עצמי מול מדדי ביצועים מקבילים.

- **מדדי ביצוע (אובייקטיביים).** הדגל הוא [[jin-glat-genai-literacy-assessment|GLAT (Generative AI Literacy Assessment Test)]], מכשיר אמריקאי בן 20 פריטים שנבנה על תכנית-בסיס של 25 מושגים לאורך ארבעה ממדים (Know & Understand, Use & Apply, Evaluate & Create, [[ethics]]) ואושר באמצעות CTT + 2PL IRT על 355 סטודנטים (RMSEA = 0.03, CFI = 0.97, α = 0.80, ω = 0.81). באופן קריטי, ציוני GLAT חזו ביצועים במשימות בסיוע בינה מלאכותית במקום שדיווח-עצמי לא הצליח — ראיה ש**מדידה מבוססת ביצועים עולה על דיווח-עצמי** עבור אוריינות AI. עבודה קשורה ב[[ai-literacy-assessment-misalignment]] מכמתת את הפער בין אוריינות AI שדווחה על עצמה לבין מבוססת ביצועים (מורים מעריכים יתר בכ-~40%), ו[[tracing-genai-literacy-interaction-patterns]] עוקבת אחר דפוסי אינטראקציה אמיתיים של סטודנטים עם בינה מלאכותית במקום לסמוך על שימוש מדווח.

- **מדידת מה שמורים עושים, לא רק מה שהם יודעים.** אימות של 486 מורים הניב מכשיר שיש-ממדי לשימושים החינוכיים של מורים ב-GenAI — ניהול, יצירת חומרים, הערכה, העצמה, גיוון ומוטיבציה — ואשר כי השימוש רב-ממדי, אם כי דיווחים עצמיים אינם יכולים לשאת טענה על פרקטיקת כיתה ([[questionnaire-teachers-genai-uses-validation-2026|Pérez-Montesdeoca et al. (2026)]]).

- **סקלות דיווח-עצמי.** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]] מבצע אוריינות AI לאורך שלושה תחומים (AI Concepts; Application and Technical Skills; AI Digital Citizenship) וארבעה שלבי פיגום; [[ai-literacy-heptagon-2026|הקסגון (Heptagon) של אוריינות AI]] מבקש שבעה ממדים (טכני, יישומי, [[critical-thinking|חשיבה ביקורתית]], אתיקה, השפעה חברתית, אינטגרציה, [[regulation|רגולטורוי]]) עם ארבע רמות מיומנות המיושרות לבלום. [[genai-skill-bypass-literacy]] ממפה מסלולי אוריינות AI שונים עבור סטודנטים מול צוות, ו[[panciroli-ai-literacy-episodes-situated-learning]] מעוגן אוריינות באירועי [[situated-learning|למידה סיטואטיבית]]. פיתוח מכשירים ללומדים צעירים מתקדם גם הוא: שאלון ההערכה העצמית לאוריינות AI (AIL-SAQ) של [[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan and Srikoon (2025)]] היא סקלת דיווח-עצמי בת 15 פריטים לתלמידים בכיתות ד'–ו', המאורגנת סביב Learning About AI, Learning About How AI Works, ו-Learning for Life with AI, ואושרה באמצעות ניתוח פקטורי חקרני על 335 סטודנטים וניתוח פקטורי מאשר על 579 נוספים, עם Cronbach's alpha כולל של .934.

- **אוריינות AI [[discipline-specific-aied|ספציפית-תחום]].** [[teacher-education-ai-literacy-sdt-2026]] מפתח מדדי אוריינות AI ל[[teacher-role|מורים]] במסגרת [[self-determination-theory]] (382 מורים, מאומתים פקטוריאלית); [[conceptualizing-preservice-teachers-ai-readiness-2026]] מודד מוכנות של [[teacher-ai-competency|מורים לפני-הכשרה]] לבינה מלאכותית באמצעות intelligent-[[tpack]]; [[ai-literacy-career-adaptability-business-2026]] מעריכה מוכנות סטודנטים לבינה מלאכותית ו[[career-development-and-readiness|יכולת הסתגלות קריירה]] ב[[business-education|חינוך עסקי]]; ו[[llm-critical-thinking-teamwork-review]] סוקרת מכשירים לתוצאות חשיבה ביקורתית ועבודת צוות הנתמכות על ידי מודלי שפה גדולים. בהרחבה למדידת חינכים, Teachers' AI Literacy Scale (TAILS) מבצע את שישה הממדים של מסגרת ED-AI כדי למדוד אוריינות AI באופן ספציפי בתוך [[teacher-education|חינוך מורים לשפה]] (מאומתת בניתוח פקטורי), וממלאה פער בהערכות שמכוילות לסטודנטים או למשתמשים כלליים.

### מכשירי גישות, קבלה ומוטיבציה

- **קבלת טכנולוגיה.** מכשירים המבוססים על TAM/UTAUT מודדים תועלת נתפסת, קלות שימוש וכווונת התנהגותית להשתמש בבינה מלאכותית. ראו [[technology-acceptance-model]] ואת היישום שלו ב[[acceptance-ai-english-tools-2026]] (כלים ללימוד אנגלית בסיוע בינה מלאכותית, אימות פסיכומטרי across disciplinary/proficiency groups) וב[[tian-genai-learning-adoption-pathways-2026|מסלולי אימוץ GenAI]].

- **יעילות עצמית ומוטיבציה.** מכשירי [[self-efficacy]] וסקלות מוטיבציה (למשל, מדדים מבוססי SDT של [[agency|אוטונומיה]]/מיומנות/קרבה ב[[teacher-education-ai-literacy-sdt-2026]]) תופסים את הנסיבות המוטיבציוניות ואת ההשלכות של שימוש בבינה מלאכותית. אלה מתחברים למדידה של [[student-engagement]] ושל [[prior-knowledge]].

- **תפיסות למידה מבוססת פרויקטים.** Zhu and Kong (2026) מפתחים ומאמתים סקלת [[project-based-learning|למידה מבוססת פרויקטים]] מבוססת בינה מלאכותית (AI-PBLS) המעוגנת בהקשר, ומודדת את תפיסות הסטודנטים מ-PBL כשהם משתמשים בבינה מלאכותית ל[[problem-solving|פתרון בעיות]] בקורסי אוריינות AI (EFA ו-CFA על 1,027 [[k-12|סטודנטים תיכוניים]] ואוניברסיטאים, 446 השלמות), והיישום שלהם ב-SEM מדגים כיצד העצה ומודעות אתית מתוווכות ביחסים בין PBL לסיפוק — מכשיר איתן להערכת חוויות PBL נתפסות ביישומי בינה מלאכותית.

### מכשירי איכות-הערכה ותקפות

- **ניקוד אוטומטי ומכשירי רובריקה.** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]] מייצר רובריקות הערכה; [[ai-assisted-instructor-supervised-grading-feedback]] מעריכה את איכות הניקוד באמצעות בינה מלאכותית מול קריטריונים מורחבים של [[feedback]]; [[ai-assessment-scale-reform]] מתייחסת לכיצד בינה מלאכותית משבשת סקלות הערכה מסורתיות.

- **עיצובים מחזקי-תקפות.** [[roe-assessment-twins-2026|תאומי הערכה]] משייכים משימה פגיעה ל[[generative-ai|GenAI]] עם משווה-פחות-פגיע המעריך את אותם תוצאות, וממפים איומים across Messick's six strands of validity evidence.

- **חלוקת מרחב התוצאות לפי סיוע.** תוכנית מדידה מגדירה **model authorship** — עד כמה הלומד, ולא המערכת, יזם את התוכן ברמה-התחום של יצירה — כבנייה בת ארבעה פקטורים וארבעה שלבים, ומדווחת שמתוך 24 מחקרים שנבדקו, כמעט כולם מדדו ביצועים כאשר בינה מלאכותית היתה זמינה, ואף אחד לא מדד לאחר נסיגה ([[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]]).

- **קידוד דיסקורסיה ומעורבות.** [[icap-cognitive-engagement-llm-agents]] מרחיבים את מסגרת ה[[icap-framework|ICAP]] לתכנית קידוד מעורבות קוגניטיבית בת 7 נקודות, ומשווים בין ביאור אנושי (κ = 0.906–0.998) לבין תיוג מבוסס מודלי שפה גדולים (κ = 0.541–0.609) — מחקר מכשיר-מדידה המראה שקידוד אוטומטי עדיין מפגר אחר בני אדם מאומנים. קידוד אוטומטי מתקדם גם דרך [[prompt-engineering|הנחיה מודעת-הקשר]], אשר מודל תלויות הקשר וממזג יכולות קוגניטיביות וחברתיות כדי לקודד כישורי [[collaborative-learning|פתרון בעיות שיתופי]] מנתוני תהליך בביצועים העולים על קווי בסיס חזקים — ומאפשר הערכה בקנה מידה גדול ובזמן אמת, תוך טיפול בעבודת-יד האינטנסיבית של קידוד ידני.

- **חילוץ כישורים.** [[principal-trait-analysis-human-ai-skills-2026]] גוזרים "כישורים" בשיתוף פעולה בין אדם לבינה מלאכותית באמצעות ניתוח תכונות-עיקרי — מדידה מונחית-נתונים של מיומנות שיתוף פעולה.

### גישת המדידה חשובה

הראיות של מאגר הידע מראות שוב ושוב ש**כיצד** בנייה נמדדת משנה את המסקנות. אוריינות AI שדווחה על עצמה סוטת באופן חריג ממידה מבוססת ביצועים ([[ai-literacy-assessment-misalignment]]); ביאור באמצעות מודלי שפה גדולים של מעורבות סוטה מקידוד אנושי מאומן ([[icap-cognitive-engagement-llm-agents]]); ומבנים לאטנטיים שונים בין בני אדם למודלי שפה גדולים ([[assessment-latent-structure-human-llm-2026]]). אימות מכשירים קפדני — מהימנות, תקפות מבנית, תקפות חיצונית/חיזויית — אינו אפוא פורמליות אלא יסודן של ראיות מהימנות בתחום הבינה המלאכותית בחינוך, ומתחבר ל[[assessment-validity]] ול[[psychometrically-aware-ai]]. מחקר חומרי-רמה אחרון מראה כמה עבודת אימות יושבת מאחורי טענת קבלה פשוטה: [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]] השתמשו בעיצוב split-half (EFA על מדגם פיתוח, CFA על חצי מוחזק) עבור שני מדריכי אוריינות AI מדורגים לפי גיל, ודיווחו על KMO = .820, 67.3% שונות מוסברת, התאמה מקובלת לסטודנטים (CFI = .943, RMSEA = .059, SRMR = .059), אמינות קומפוזיטית של .84 עד .90, ועקיבות מדידה across editions — ולאחר מכן תיעדו היכן המכשיר נמתח, עם ערכי HTMT של עד .950 וקורלציית שובבות-כוונה משוכפלת שהייתה צריכה להיבדק לאחדות. הבדיקות הנוספות שלהם לגבי differential item functioning הן מודל ליושר שהעמוד הזה טוען לה: העקיבות התקיימה, אך דפוסי תשובה עם שונות נמוכה בקרב סטודנטים צעירים גרמו להבדל קבוצתי אחד להיחלש ברגע שהממשיבים האלה הוצאו, והמאמר מדווח על כך לצד התוצאה העיקרית ולא במקומה.

[[assessing-student-drive-framework-2025|Oliveira et al. (2025)]] מראים את רצף האימות עבור מדד-תהליך חדש: ניקוד יומני אינטראקציה של סטודנטים עם GenAI מול טקסונומיה בת 35 תת-קטגוריות הגיע להסכמה בינלאומית-בינונית בלבד (Cohen's κ = 0.44), אך התואם עם ציוני חיבור ב-r = 0.54, ונתן למודד החדש תמיכה מתכנסת.

- **מקדאי הסכמה הם תכונות של קורפוס, וציונים הם תוצרים משותפים.** אימות ניקוד אוטומטי של 60 פוסטים שיווקיים דיווח על הסכמה מוחלטת ICC(2,1) של .435 עבור מודל שפה גדול, .266 עבור היבריד של חוקים-בתוספת-מודל, ו-.091 עבור חוקים דטרמיניסטיים, כאשר חוסר-הוודאות הוערך מ-2,000 דגימות bootstrap של אשכולות-כותבים, ו-MAE של 6.28-17.22 נקודות; הוספת עוגנים שנכתבו על ידי חוקרים העלתה הסכמה בין-מעריכים מ-.338 ל-.902, ומראה עד כמה האומדנים האלה תלויים במערך ההתייחסות ([[automated-scoring-marketing-posts-agreement-2026]]). ביקורת ניקוד מחדש על ידי מומחים של מבחני-אמת ב[[physics-education|פיזיקה]] עושה את הנקודה המשלימה ברמת המכשיר: 95.20% מהדחיות שנבדקו היו שגיאות של מבחן-אמת או של מעריך, ולא כשלים של מודל, ולכן ציון נמדד צריך להיות מדווח כתכונה של בנק השאלות, הרובריקה והמעריך יחד ([[frontier-models-physics-benchmark-audit-2026]]).

**מהימנות ניתנת לשחזור חלקית מהמודל עצמו.** [[know-when-to-trust-ai-scoring-reliability-2026|Organisciak and Acar (2026)]] מעריכים שלושה שדרוגים זולים לניקוד מבוסס מודלי שפה גדולים על יותר מ-20,000 תשובות ל-Alternative Uses Test: קריאת הביטחון ברמת-הטוקן של המודל עצמו, לקיחת ממוצע משוקלל-בהסתברות על פני ציוניו החזויים המובילים במקום ניחוש-הטוב-ביותר בודד, והרכבת-אנסמבל across models. כל אחד מהם שיפר את ההסכמה עם ציונים אנושיים (הקורלציה עלתה מ-r = 0.781 ל-0.823 וה-RMSE ירד מ-0.599 ל-0.498 בתצורת-הטוב-ביותר), והאבחנות שלהם מאתרות כשל ספציפי של ניקוד חד-מעברי: הביטח שהמודל הביע היה קשור באופן שלילי לדיוק שלו (β = −0.602). זוהי תוצאה של גישת מדידה ולא תוצאה של מודל — אותו מודל, כשהוא נמדד באופן שונה, הוא מכשיר מהימן יותר — והיא נמצאת לצד ראיות ההסכמה ברמת-הקורפוס שלעיל.

הערכה של 2026 על 33 מכשירי אוריינות AI למורים מראה היכן פיתוח המכשירים בוגר והיכן לא. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]] דירגו את המכשירים מול מטריצת החלטות שהותאמה מ-COSMIN ומ-Terwee et al. (2007), ומצאו שעקביות פנימית היא התחום החזק ביותר (28 מתוך 33 בדירוג A, 84.8%) והוגנות החלשה ביותר, עם חמישה מכשירים בלבד (15.2%) המדווחים על עקיבות מדידה או ראיות differential item functioning. התקפות המבנית הייתה חזקה, עם 24 מכשירים (72.7%) בדירוג A באמצעות CFA, PLS-SEM או מודל IRT, ואילו תקפות התוכן נשענה בעיקר על סקירה איכותנית, עם 21 מכשירים (63.6%) בדירוג B בשל היעדר סטטיסטיקות הסכמת-מומחה כמתות.

בחירת שאלות אוטומטית יכולה לקצר מכשיר בלי לשנות את צורתו: אופטימיזציית נמלי-עלים על מדגם ממוזג של שתי גלים (N = 305, 342) הניבה טופס קצר בן 12 פריטים המתאים בטווח r = 0.910–0.944 לסקלה המלאה בכל ממד, אם כי שני פריטים לכל ממד מכסים טווח תוכן צר יותר ([[genai-srl-l2-writing-scale-2026|Wang, Zhang and Zhang (2026)]]).

## בעיות ומגבלות: מה המדידה עלולה לפספס או לטעות

מדידה חינוכית היא רבת-עוצמה אך עלולה לטעות. הבנת מצבי-הכשל שלה הכרחית לקריאה ביקורתית של ראיות בתחום הבינה המלאכותית בחינוך — ולזיהוי היכן רווח-למידה מדומה או טענת-בניות נראים עשויים להיות ארטיפקט של מדידה ולא אפקט אמיתי.

- **מגבלות מהימנות.** מדידה אינה מהימנה מעולם באופן מושלם; שונות השגיאה נוכחת תמיד. כאשר למכשירים יש עקביות פנימית נמוכה או יציבות מבחן-במבחן, הבדלים שנצפו עשויים להיות רעש. בהקשרי בינה מלאכותית, מצבי כשל חדשים מחמירים זאת: תשובות הנוצרות על ידי מודלי שפה גדולים יכולות להינקד עם הסכמה מכונה גבוהה ובכל זאת לסטות מניקוד אנושי ([[icap-cognitive-engagement-llm-agents]]), וניקוד אוטומטי יכול להיות *עקבי מבפנים* ושגוי באופן שיטתי — דיוק בלי תקפות. מגבלות ה[[limitations-in-aied-research|מדידה]] של מחקר AIEd מתעדות מכשירים בלתי-מהימנים כחולשה חוצת-נושאים.

- **קידוד חוסר-ודאות כשגיאה מאחד שני כשלים.** במבחן ידע של בריאות הנפש עם 30 משפטים, ניקוד הדיוק מנה *do not know* כמשהו בלתי-מדויק, ובכל זאת 67.3% מהסטודנטים בחרו בו בעובדה אחת, בעוד ש-60.6% מתשובות המודל היו שגויות באופן חיובי — פורמט מאולץ של נכון/לא-נכון אינו יכול להפריד בין חוסר-ודאות לאמונה שגויה ([[mental-health-literacy-students-llms-2026|Richter et al., 2026]]).

- **הסכמת המעריכים קובעת את התקרה המעשית.** אימות בקנה מידה גדול על [[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB*]] של אורוגוואי מצא שהסכמת מעריכים אנושיים היא עצמה קובעת את התקרה המעשית לניקוד באמצעות בינה מלאכותית: מבין עשרה מומחים שניקדו 50 טקסטים באופן עצמאי, אף פריט רובריקה לא הגיע להסכמה עקיבית עם הקונצנזוס, המעריך הסוטה ביותר נפל בדרך-כלל מתחת ל-80% הסכמה בעוד שהטוב ביותר עלה על 90%, ו-Cohen's Kappa הייתה slight או fair בלבד עבור כמה פריטים מוטים העונים עליהם כמעט כל התשובות. המחברים שופטים אפוא ציונים אוטומטיים מול תקן-ייחוס שהוא עצמו בלתי-מושלם — עשרה מעריכים, ציון תפעולי בודד עבור רוב התשובות, ופריטים מספר באזור המקובל של 70% — אזהרה לכל טענת מדידה הבנויה על תוויות תפעוליות של מעריך בודד.

- **תקפות — מדידת הדבר הלא-נכון.** תקפות שואלת אם מכשיר מודד את הבנייה שהוא טוען שהיא מודדת. כשלים נפוצים כוללים **תת-ייצוג בנייה** (מבחן אוריינות AI שדגם רק ידע טכני, ומפספס אתיקה) ו**שונות לא-רלוונטית-לבנייה** (שאלה שמתגמלת שטף קריאה במקום את הכישור המטרה). [[ai-scoring-language-bias-physics|ניקוד באמצעות בינה מלאכותית והטיה לשונית]] מראה כיצד תכונות פני-שטח — שפה, ניסוח, סגנון — יכולות להוביל ציונים אוטומטיים בדרכים שאינן קשורות לבנייה המטרה. [[assessment-validity]] היא המעקה מפני איומים אלה.

- **סקלה יכולה להחזיר את מספר הפקטורים המיועד בלי למדוד את הבניות המיועדות.** [[ai-empathy-scale-psychometric-evaluation-2026|Kang, Lee and Kang (2026)]] שמרו שישה פקטורים מסקלת אמפתיה-AI בת 42 פריטים, אך הפריטים לא שיחזרו את שישת תת-הפקטורים המיועדים — Prosocial Intention לא ייצר פקטור — ולכן המבנה מוצג כזמני.

- **פער הדיווח-העצמי.** מדדי דיווח-עצמי תופסים מיומנות *נתפסת*, לא מיומנות אמיתית. מאגר הידע מראה שוב ושוב אוריינות AI שדווחה על עצמה סוטת באופן חריג ממידה מבוססת ביצועים ([[ai-literacy-assessment-misalignment]], הערכת יתר של ~40% על ידי מורים), ושדיווח-עצמי נכשל בחזות ביצועים אמיתיים בסיוע בינה מלאכותית במקום שמבחני ביצועים מצליחים ([[jin-glat-genai-literacy-assessment|GLAT]]). מדדים הנשענים על דיווח-עצמי יכולים להפריז בבניות באופן שיטתי ולהסתיר פערי מיומנות אמיתיים.

- **האומד המשותף שביר.** סקירה מובנית של 2026 שמרכיבה רק קורלציות סובייקטיביות-אובייקטיביות של אוריינות AI מאותו מדגם (N = 2,765) נותנת r = .055 (רווח סמך 95% של Hartung-Knapp [−.047, .156]); ב-k = 3, עם אומדני ההטרוגניות חלוקים ומחקר אחד נושא 77.2% מהמשקל, היא אינה יכולה לקבוע סף מיומנות ([[competent-generative-ai-use-measures-review-2026|Verí (2026)]]).

- **בניות שאינן עוברות בין אוכלוסיות.** [[assessment-latent-structure-human-llm-2026|Strugatski et al.]] מראים שמכשירי הערכה יכולים לקבל *מבנה פקטוריאלי שונה* עבור בני אדם ועבור מודלי שפה גדולים — משמעם הדבר שאותן שאלות עשויות שלא למדוד את אותה בנייה לאטנטית across populations. אפילו בתוך בני אדם, מכשירים שאומתו על קבוצה אחת (למשל, מערבית, בעלת-משאבים [[higher-ed]]) עשויים שלא להתכלל באחרים ([[global-south]]), חשש הנוגע לכוללות-הכללה של מדדי הבינה המלאכותית בחינוך.

- **מה שהמדידה עלולה לפספס.** חלק מהבניות המרכזיות ביותר ללמידה בתחום הבינה המלאכותית בחינוך הן הקשות ביותר למדידה טובה — ולכן העולות-ביותר בסיכוי להיפספס או לעוות על ידי מכשירים:
  - **תהליך ואסטרטגיה.** מדדי תוצאה סטנדרטיים תופסים את *המוצר* של הלמידה, לא את *התהליך*. הם יכולים לפספס כיצד סטודנטים אכן מתקשרים עם בינה מלאכותית — [[cognitive-offloading|סיבוך קוגניטיבי יתר]], קבלה לא-רפלקטיבית, או אימות ביקורתי. [[tracing-genai-literacy-interaction-patterns]] משתמשת במעקבי אינטראקציה בדיוק מכיוון שדיווח-עצמי ומבחני תוצאה מפספסים את הדינמיקות האלה.
  - **למידה אורכונית ועמידה.** מבחן-אחרי בודד עשוי להציג ביצועים מופרזים מהסיוע של בינה מלאכותית ובמקביל לפספס את ההתקררות של ידע עמיד ולא-מסויים ([[genai-performance-vs-learning|פער הביצועים–הלמידה]]). מדידה בנקודת זמן אחת עלולה להוביל שווא לגבי הלמידה.
  - **שוויון וגישה.** מכשירים שמניחים גישה אחידה למכשירים/קישוריות, או שמ norm על מדגם של בעלי-פריבילגיה, יכולים לפספס — או למדוד באופן חסר-שיטתי — את היכולות של [[equity-in-ai-education|בעלי-משאבים-מועטים]] [[learners]], ולסייג פערי גישה לפערי יכולת.
  - **מצבים [[affective-computing|אפקטיביים]] ומוטיבציוניים.** מעורבות, מוטיבציה ויעילות עצמית נמדדים לעתים קרובות בדיווח-עצמי, ומנחילים את פער הדיווח-העצמי שלעיל; הם עלולים לא לתפוס את הדינמיקות הסיטואטיביות והרגעיות שמובילות למידה.
- **מדידה אוטומטית עלולה להיות בטוחה בשגווי.** השילוב של ביטחון מכונה גבוה וניקוד אטום הוא סיכון ייחודי-לעידן הבינה המלאכותית: מעריך או מתייג מבוסס מודל שפה גדול יכול להניב ציונים עקביים-עצמית מאוד שהם מנותנים בשיטה, והופעת הקפדות (N גדול, הסכמה גבוהה בין מודלים) עלולה למסור חוסר-תקפות. מסגרות ה[[ai-ed-evaluation]] וה[[psychometrically-aware-ai]] הן התרופה — ודורשות כיול, מודעות לחוסר-ודאות וראיות תקפות לפני שאמצעים אוטומטיים מקבלים אמון.

בקיצור, מדידה חינוכית יכולה **לפספס** את מה שהיא אינה דוגמת (תהליך, עמידות, גישה, אפקט), ויכולה **לטעות** במה שהיא דוגמת badly (תפיסה-עצמית, תכונות פני-שטח, בניות cross-population). קריאת ממצאי המחקר בתחום הבינה המלאכותית בחינוך דורשת אפוא לשאול לא רק *מה* נמדד אלא *כיצד* — ומה המכשיר עלול לא לתפוס.

- **קידוד שניתן-לביקורת מפריד בין שגיאה דפיניטורית לשגיאת מודל.** EduBehaviors מפרק בנייה להתנהגויות נצפות המבוארות בנפרד בתוספת כלל צבירה מפורש, כדי שמבקר יוכל לראות איזו ראיה הוציאה תווית ולגזור מחדש תוויות לאחר שינוי כלל בלי קריאות-מודל חדשות; היא הגיעה ל-macro-F1 0.673 ב-Teacher TalkMoves, תחרותית עם הנחיית-מודל-ישירה באמצעות [[llm|LLM]] ([[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al., 2026]]).

## קשרים

מדידה חינוכית היא היסוד ל[[item-response-theory]], ל[[assessment-validity]], ל[[knowledge-tracing]] ול[[student-modeling]]. היא מתחברת ל[[learning-analytics]] (מדידת נתוני למידה), ל[[educational-nlp]] (מדידת שפה), ול[[psychometrically-aware-ai]] (בינה מלאכותית מיושרת עם תיאוריית המדידה). חששות התקפות והמהימנות שלה תומכים ב[[ai-ed-evaluation]] וב[[limitations-in-aied-research|מגבלות המדידה]] של התחום. עבור הבניות שהיא מודדת, היא מצטלבת עם [[ai-literacy]], [[technology-acceptance-model]], [[self-efficacy]], [[motivation]] ו[[student-engagement]].

- **מודל causale של התערבויות-תומכות (2026):** פרוטוקול של מודלים causale מבניים (structural causal modeling) מזיז הערכה חינוכית מעדכון-אמון אוסוציאטיבי של item-response-theory לעבר הסקה אינטרוונציונלית וקונטפקטואלית (למשל, ההשפעה של רמזים), עם משוואות מבניות שנגזרו ממומחים באמצעות מידע לוגי טהור — המאוחמות על משימות כישורים אלגוריתמיים של בית-ספר חובה ([[causal-modeling-competency-assessment-2026]]).

## Connected Concepts

- [[interpreting-and-applying-aied-research]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[psychometrically-aware-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[educational-nlp]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[automated-assessment]]
- [[limitations-in-aied-research]]
- [[ai-literacy]]
- [[technology-acceptance-model]]
- [[self-efficacy]]
- [[benchmark]]
- [[self-report-measures]]
- [[motivation]]
- [[student-engagement]]

## Connected Articles

- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[jin-glat-genai-literacy-assessment]] — GLAT: IRT-validated GenAI literacy test (Jin et al. 2025)
- [[icap-cognitive-engagement-llm-agents]] — Measuring cognitive engagement with an extended ICAP framework
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity under GenAI
- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon
- [[ai-literacy-assessment-misalignment]] — Self-reported vs performance AI literacy misalignment
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher AI literacy through self-determination theory
- [[acceptance-ai-english-tools-2026]] — AI acceptance measures for English learning tools
- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[llm-item-difficulty-prediction]] — Cognitive evaluation of LLM item-difficulty prediction
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias in physics
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[xiong-ai-educational-measurement-review-2026]] — Decade thematic review of AI in educational measurement
- [[questionnaire-teachers-genai-uses-validation-2026]] — Questionnaire on teachers' uses of generative AI (Pérez-Montesdeoca et al. 2026)
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — Split-half EFA/CFA validation with invariance, HTMT and DIF checks, including an honest account of playfulness-intention construct overlap
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[competent-generative-ai-use-measures-review-2026]] — Beyond AI Literacy: A Structured Review and Exploratory Meta-Analysis of Measures for Competent Generative-AI Use
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration: divide-and-conquer recalibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[el-salvador-ai-tutoring-selection-claim-2026]] — Bounding the learning claim of El Salvador's AI tutoring pilot (Restrepo Morales et al. 2026)
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: model self-confidence, probabilistic scoring and ensembles as scoring reliability levers
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — A validated 15-item self-assessment questionnaire for upper-primary AI literacy (Thianwan & Srikoon 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematic appraisal of 33 teacher AI literacy instruments across COSMIN-style quality domains (Zainal et al. 2026)
- [[mental-health-literacy-students-llms-2026]] — Mental Health Literacy Across Psychology Students and Large Language Models
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[ai-empathy-scale-psychometric-evaluation-2026]] — A 42-item AI empathy scale whose six factors did not recover the six intended subfactors
- [[genai-srl-l2-writing-scale-2026]] — A six-dimension GenAI-SRL scale for L2 writing; ant-colony-optimized 12-item short form tracks the full scale (r = 0.910–0.944) but narrows content coverage
