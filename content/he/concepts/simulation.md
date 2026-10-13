---
connected_resources: [openmaic]
title: סימולציה
created: "2026-10-12T19:50:00-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
reviewed_by: [editor]
translation_of: concepts/simulation
source_updated: "2026-10-04T15:54:00-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **סימולציה** — השימוש בסביבות, סוכנים או תרחישים ממודלים לתמיכה בלמידה באמצעות תרגול ומשוב בהקשרים בטוחים, ניתנים-חזורה, ולעתים קרובות בלתי-נגישים אחרת. סימולציות מאפשרות ללומדים לפעול, לטעות ולראות השלכות ללא עלות בעולם האמיתי, והן מונעות ביתר ויתר על ידי בינה מלאכותית ומודלנציה מבוססת-סוכנים.

## שאלות למחשבה

- הזכרו פעם שלמדתם משהו על ידי עשייה בסביבה בטוחה ובעלות-משחק נמוכה — מעבדה, תרגול מדומה, סימולטור טיסה או משחק. מה הפך את התרגול הזה ליעיל, ומה עלול ללכת לאיבוד אם הסימולציה הייתה מציאותית מדי או לא מציאותית מספיק?
- העמוד טוען שסימולציות מאפשרות ללומדים לטעות ולראות השלכות "ללא עלות בעולם האמיתי." מה, אתם חושבים, נרכש — ומה עלול ללכת לאיבוד — כאשר עלות הטעות יורדת לכמעט אפס?
- אם בינה מלאכותית יכולה לדמות מטופלים, תלמידים או שותפי שיחה לתרגול, היכן הייתם מקווים את הגבול בין חזרה יקרת-ערך לתרגול שנכשל בהעברה לאינטראקציה אנושית אמיתית?
- מדוע מודעותו של הלומד למגבלותיה של סימולציה — [[trust|האמינות]] שלה — עשויה להיות חשובה כמו מידת הנאמנות שבה היא מדמה את המציאות?
- כיצד אותה טכנולוגיית סימולציה שעוזרת למישהו ללמוד עלולה גם להטעות אותו, ומה היה עליכם לדעת כדי להבחין בין שתי התוצאות האלה?

## מבוא

סימולציה יושבת בליבת ה[[experiential-learning|חווייתיות]] וה[[active-learning|למידה הפעילה]] ב[[pedagogy|פדגוגיות]]. היא מספקת את התרגול המודע, את [[productive-failure|הכשל הפרודוקטיבי]] ואת [[feedback|לולאות המשוב]] שבונים כישור ושיפוט. בינה מלאכותית שינתה סימולציה בשתי דרכים: היא מעצימה סביבות מדומות מציאותיות ומסתגלות יותר, והיא מייצרת [[simulating-students|לומדים מדומים]], מטופלים או בני-שיחה שמהנים את התרגול לקנה מידה גדול. ראיה התנהגותית מראה ש*האופן* שבו לומדים מעסיקים סימולציה משתנה באופן שיטתי ולא אחיד: בעקבות לומדים מקוונים שבונים מודלים אקולוגיים ב-VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] סיווגו את [[student-engagement|המעורבות]] לתצפית (הרצות תכופות והתאמת פרמטרים עם מעט בניית מודל), בנייה (בנייה מעשית עם מעט סימולציה), וחקירה (מחזורי בנייה-פרמטריזציה-סימולציה מלאים), כאשר חוקרים ייצרו את המודלים המורכבים והמגוונים ביותר ולומדים כבדי-תצפית העתיקו ברובם מודלים קיימים — טענה לעיצוב סביבות סימולציה שדוחפות לומדים כלפי פעילות מחזורית-מלאה.

### בינה מלאכותית וסימולציה

- **סביבות מונעות-בינה מלאכותית:** סימולציות מסתגלות מתאימות קושי ותרחישים למצב הלומד, ומקושרות ל[[adaptive-learning|למידה מסתגלת]] ולאימון מבוסס-[[reinforcement-learning|למידת חיזוק]].

- **סימולציות מונעות-הנחיה שמות מעבדה בהתאמה-אישית בטווח-השגה.** מרצים יכולים לייצר מודלים המיוצרים-בדפדפן של הנושא שהקורס צריך מתבנית הנחיה לשימוש חוזר (מחוונים, אנימציה, גרפים תלויים-זמן), תוך אימות כל אחד פעמיים — מבחינה טכנית, ואז מול הפתרון האנליטי הידוע — במקום לקבל את הסימולציה המפורסמת הקרובה ביותר ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

- **אוטומציה של הגוף האנושי המיועד.** [[astra-atco-training-simulator|Chew et al. (2026)]] מחליפים את שחקני-התפקיד האנושיים המתמחים המכהנים בסימולציות שליטה בתעבורה אווירית בסימולטורי-טייס עצמאיים מבוססי [[llm|מודל שפה גדול]], ובכך מסירים צוואר-בקבוק של קיבולת אימון; צינור הדיבור המכוון-עדין שלהם קיצר את שיעור שגיאת המילים בדיבור תעופה במבטא סינגפורי מ-107.80% ל-23.45%, אם כי כל ההערכות היו ברמת-רכיבים ללא הרצת מנת מתמחים.

- **סימולטורים עוינים כשותפי אימון.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] מזווגים סוכן מדיניות עם סימולטורי מטופלים מבוססי מודל שפה גדול שנבנו לפעול באופן עוין לאורך צינור תרחישים של 57K מקרים; אימון נגדם קיצר את שיעורי החמצת הדגלים-האדומים בכ-שליש, ורופאים עיוורי-פנים העדיפו את הסוכן המאומן ב-87.6% מההשוואות צד-לצד.

- **קדדו באופן מפורש מצבי-מקרה חסרים.** מערכת מטופלים סטנדרטיים מרובת-סוכנים שומרת על זיהוי כוונה, ייצור תגובה מעוגנת-מקרה והערכת-אחרי-מפגש נפרדים, תוך הבחנה בין ארבעה סוגים של מידע חסר — שלילי מבחינה קלינית, לא ידוע למטופל, לא נבדק עדיין, וחסר מהמקרה — מכיוון שכינוס שלהם ל"נורמלי" מזריק עובדות קליניות בלת-נתמכות ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **סוכנים מדומים:** בינה מלאכותית יכולה לדמות מטופלים (לאימון רפואי), תלמידים (לפרקטיקת ה[[teacher-role|מורה]]), או שותפי שיחה, ובכך להנגיש ולחזור על תרגול בין-אישי בעל גובה-משחק גבוהה. ב[[teacher-education|חינוך למורות]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] בנו *Student GPT*, [[conversational-ai|צ'טבוט]] ChatGPT מותאם שמילא תפקיד של תלמיד [[k-12|בית ספר תיכון]] מחזיק [[misconceptions|תפיסות מוטעות]] נפוצות בהיגיון יחסים, ונתן למורות [[math-education|מתמטיקה]] עתידיים תרגול זול וספציפי-תוכן באבחון חשיבת התלמיד — והשתמש במסגרת קידוד אפקטיבי, תקשורתי, טכני ([[affective-computing|ACT]]) כדי להעריך באופן שיטתי את חוזקות משחק-התפקיד של התלמיד המדומה (בהירות, רלוונטיות, עקביות שגיאות) וחולשות האותנטיות (טון דמוי-מורה, בלבול תפקידים).

- **הפכו היסטוריה נגד-עובדתית לתכונת ממדרגה ראשונה.** סוכני [[llm|מודל שפה גדול]] קונטקסטואליים מרובי-הסוכנים של SupplyNet מייצרים דינמיקות שרשרת-אספקה המתגלות מהחלטות הלומד ולא מתוכננות-תסריט, וציר הזמן המתעקם שלו מאפשר ללומדים לחזור לבחירות קודמות ללא עונש — 13 מתוך 14 משתתפים דירגו אותו גבוהה בחיבור החלטות לביצועים לעומת 3 לקו הבסיס ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **דינמיקות מעוגנות, לא פרסונה מונהת.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] פרמטרו את דינמיקות החשיפה של מטופל וירטואלי מכמעט 2,000 שעות של תמלילי פסיכותרפיה אמיתיים, ואז עדכנו את הרמה בכל תור; לאורך 1,033 תורים עם 20 רופאים, החשיפה עלתה עם אמפתיה וחקירה של המטפל בעוד שקו בסיס מונחה-הנחיה בלבד על אותו מודל שפה גדול נשאר שטוח.
- **משחק-תפקידים שם את הלומד בתפקיד.** היכן שסוכנים מדומים מספקים את הגוף המיועד, משחק-תפקידים נותן ללומד את התפקיד הזה במקום זאת. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari and colleagues (2026)]] הובילו 18 ילדים בגילים 9-10 לצפות בסצנת בריונות שבו תיאמו רובוטים חברתיים, לחשוב על עמדת כל דמות, ואז לתרגל הגנה על ידי בובה-תיאטרונת של אווטאר רובוטי, ודיווחו על תשואות ב[[self-efficacy|יעילות עצמית]] נתפסת להגנה וכן אמונות מכוילות-טוב יותר לגבי האם התמודדות עם בריון עצמו מפסיקה אותו. המסגור שלהם, דרמה מיושמת מתווכת-רובוט, שומרת על מקל שיתוף פעולה אנושי בתפקיד תיאטרון הפורום ומגבילה את האוטומציה לשליטה נרטיבית, וזו תזכורת שימושית שהחלק התובעני של משחק-התפקידים הוא הרפלקציה ולא המכונה. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga and Johnson (2025)]] ממוקמים משחק-תפקידים לצד סימולציה בין האסטרטגיות שהן הלמידה המקוונת הנתמכת-בינה מלאכותית נשענת עליהן.

- **לומדים מדומים:** מודלים של התנהגות תלמידים מאפשרים ל[[research-methods-aied|חוקרים]] ולמתכננים לבדוק מערכות הוראה פרטיות ו[[curriculum-design|תכניות לימודים]] לפני פריסה חיה, תוך עיגון [[student-modeling|מודלנציית תלמיד]] ו[[knowledge-tracing|עקיבת ידע]].
- **אמון ונאמנות:** ערכה של סימולציה תלוי במידת הנאמנות שבה היא מדמה את ההקשר האמיתי — ובמודעות הלומד למגבלותיה, ומתחבר ל[[trust-calibration|כיול אמון]].

- **דמיון-אנושי הוא תכונה של האינטראקציה, לא של המודל.** ברגע ששני ה-backends הוצגו מאחורי אותו אווטאר, יתרון הדמיון-האנושי מבוסס-טקסט נעלם: משתתפים כינו את המודל המסחרי טבעי (54% לעומת 22%) בעוד שביצועי התקשורת היו זהים; קול, השהיה וחילופי-תורות עיצבו מחדש את האופן שבו אותה איכות דיאלוג נתפסה ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **[[generative-ai|בינה מלאכותית יוצרת]] בלמידה מבוססת-סימולציה.** [[genai-scenario-based-healthcare-education-2026|Neto and colleagues (2026)]] סוקרים באופן [[meta-analysis-systematic-review|שיטתי]] בינה מלאכותית יוצרת לאורך למידה מבוססת-תרחיש, מבוססת-מקרה, מבוססת-בעיה ומבוססת-סימולציה בחינוך לבריאות, ומוצאים תוצאות חיוביות לכישורים קוגניטיביים מסדר-גבוה אך תוצאות בלתי-עקביות במקומות אחרים, כאשר שיתוף פעולה היברידי של [[human-ai-collaboration|אדם-ובינה מלאכותית]] עולה על גישות מאוטמטות לחלוטין. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger, and Liening (2026)]] מפתחים סוכנים שיחתיים מבוססי בינה מלאכותית לתמיכה מסתגלת במשחקי סימולציה עסקית, ומתייחסים לפער הנפוץ של משוב [[formative-assessment|יוצר]] מוגבל ורפלקציה מובנית בלמידה מבוססת-סימולציה.
- **"פער האותנטיות" מגביל את מה שסימולציית בינה מלאכותית יכולה להחליף.** בסימולציה [[medical-education|קלינית]], הסקירה השיטתית של [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]] ב[[mixed-methods-research|שיטות מעורבות]] על סימולציית סיעוד מונעת-בינה מלאכותית (19 מחקרים, N=1,253) מוצאת שבינה מלאכותית יעילה לידע קוגניטיבי ולתוצאות אפקטיביות אך בלתי-עקבית לכישורים פסיכומוטוריים מורכבים. הקונספט שלהם של **פער אותנטיות** — חוסר נתפס-לומד בהדהוד רגשי, בזיהוי רמזים לא-מילוליים ובממדיי בדיקה מגעית/פיזית — מסביר *מדוע* סימולציית בינה מלאכותית מתאימה ביותר למטרות מובנות מאוד (תקשורת בסיסית, לקיחת אנמנזה) וצריכה לשבת ב**קונטינואום סימולציה מדורג** שמסירה תרחישים פסיכומוטוריים מתקדמים ורגשית מורכבים למטופלים סטנדרטיים אנושיים ולמקום קליני. אי-יציבות טכנית (למשל, השהיות זיהוי דיבור) יכולה גם להוסיף נטיעה [[cognitive-offloading|קוגניטיבית]] חיצונית וחרדה, ולכן נאמנות ויציבות הן עצמן מנופי עיצוב. זה מקביל ל[[genai-scenario-based-healthcare-education-2026|ממצא של Neto et al.]] שגישות היברידיות של אדם-ובינה מלאכותית עולות על גישות מאוטמטות לחלוטין.
- **סימולציות מתוכננות-משותף עם מורה ועם בינה מלאכותית.** סימולציות אינטראקטיביות התומכות גם בלמידה קונספטואלית וגם בפיתוח מיומנות נדירות בתחומי יד-עבודה, ופלט בינה מלאכותית יוצרת חסר לעתים קרובות תוקף פדגוגי. ב[[stem-education|חינוך STEM מבוסס-רחפנים]], סימולציות מתוכננות-משותף עם מורה ועם בינה מלאכותית המשולבות בתכנית יד-עבודה אחרת זהה הוערכו בעיצוב טרום-מבחן-פוסט-מבחן קוואלי-ניסי לאורך 30 תלמידי תיכון, תוך בחינת האם הוראה נתמכת-סימולציה מייצרת [[learning-gains|תוצאות למידה]] מעולות ([[simulation-assisted-drone-learning-stem-2026]]). בנפרד, [[agentic-ai|מרובי-הסוכנים]] מורים פרטיים מבוססי-[[benchmark|סט מדדים]] כמו ASTRA משתמשים בסוכנים בעלי אינטליגנציה חברתית מדומים כדי לחקור שיתוף פעולה מאוזן-השתתפות ב[[cs-education|תכנות מקדים]] ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **שליטת הלומד בסימולציה נאכפת, לא מוענקת.** ניסוי 2 × 2 בסימולציית עדר ([[learner-agency-ai-simulation-2026|Su, Nair and Nagashima 2026]]) נתן לחלק מהתלמידים מחווני פרמטרים, לחלק סוכן שיחתי אופציונלי ולחלק את שניהם; כל התנאים השתפרו, אך אף התנמה לא הניבה הבדל אמין לאחר שליטה בידע קודם (p = .849 ו-p = .108). מה שחזה [[learning-gains|תשואות]] היה היכן וכמה זמן הלומדים מניפולצים פרמטרים: שימוש מחוונים מתמשך בשיעור המורכב מבחינה קונספטואלית ביותר היה קשור באופן חיובי לתשואות, ואותה התנהגות בשיעור הקל יותר באופן שלילי. למבני סימולציות ההשלכה היא שמתן בקרות אינו ההתערבות — עזרה ללומדים להחליט מה לשנות, ולרשום מה השתנה, היא.

- **דיגיט-טווין הוא סימולציה עם חשבון חומרה, והחשבון קובע מי יכול להשתתף.** סקירה [[meta-analysis-systematic-review|שיטתית]] של 11 מחקרים על דיגיט-טווינים ב[[engineering-education|הנדסה]] ובהשכלה גבוהה STEM מצאה שכל יישום סיפק אב-טיפוס עובד עם סנכרון בזמן אמיתי, אך רק שלושה דיווחו על [[learning-gains|תשואות למידה]] מובהקות סטטיסטית. מתקנים פיזיים הגבילו את הגישה ל-1–3 סטודנטים במקביל בחמישה מחקרים, וחוסר אינטראקציה חברתית היה האתגר הפדגוגי המצוטט ביותר, בשישה ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).

### קשרים

סימולציה מתחברת ל[[active-learning|למידה פעילה]], ל[[adaptive-learning|למידה מסתגלת]] ול[[pedagogical-agent|סוכן פדגוגי]]. היא מנגנון ללמידה חווייתית ו[[constructivist|קונסטרוקטיביסטית]] ומקודדת על ידי היכולת של בינה מלאכותית לייצר סביבות תרגול מסתגלות ומציאותיות.

## מושגים מקושרים

- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[biology-education]] — Biology education and AI: lab teaching assistants, AI literacy in biology, critical thinking, specialized tools
- [[ai-technologies]] — מטרייה: טכנולוגיות וטכניקות בינה מלאכותית (מודלים, אימון מודל שפה גדול, רובוטיקה, RAG, סוכנות)
- [[virtual-and-augmented-reality]] — המודל, לא המודאליות — סביבות סוחפות בדרך כלל מרנדרות סימולציה

## מאמרים מקושרים

- [[learner-agency-ai-simulation-2026]] — Parameter control and an optional AI agent in a complex-systems simulation: gains tracked enactment, not access
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Robot-mediated role-play game for bystander intervention (applied drama)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — CAIS-GBL framework for AI conversational agents in business simulation games (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[simulation-assisted-drone-learning-stem-2026]] — Simulation-assisted drone learning with teacher-AI co-designed scaffolds
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review (authenticity gap, stepped continuum)
- [[sophie-clinical-communication-ai-assessment-2026]] — Scalable AI-based clinical communication training and automated assessment
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Digital twins in STEM education: prototypes all worked, learning gains mostly did not
