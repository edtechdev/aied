---
title: קוד פתוח
created: "2026-10-12T19:50:00-04:00"
updated: "2026-10-30T19:00:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **קוד פתוח** — השימוש ב*מודלים, קוד, נתונים ותוכן* ברישיון פתוח ב[[ai-education|AI בחינוך]]. פתיחות היא כרעיל-המשקל המרכזי של מאגר הידע לניעולת ספק (vendor lock-in) ול[[privacy|חשיפת נתונים]]: מודלים בעלי משקולות פתוחות יכולים לפעול על חומרה בקמפוס כדי לספק חובות FERPA, GDPR ו-EU AI Act, קורפורות ברישיון פתוח יכולות להיות מאונקדות ומכוונות-עדין ללא אישור מוציא-לאור, ושחרור מבחני-תקן (benchmark) וקבוצות נתונים פתוחים הופכים את ה[[research-methods-aied|מחקר]] לשחזיר. הנטל ממשי באותה מידה: תשתית והבטחת [[pedagogical-safety|בטיחות]], תחזוקה החורגת מחיי המענק, ואיכות שהפתיחות אינה מבטיחה מעצמה.

## שאלות למחשבה

- "קוד פתוח" נשמע לעיתים כ"חינמי וקל". אילו מארבע השכבות שלהלן — מודלים, קוד, נתונים או תוכן — הוא זה שדורש ממוסדכם את העלות הגבוהה ביותר לאימוץ, ומדוע?
- משקולות פתוחות הופכות פריסה מקומית לאפשרית, אך מישהו עדיין צריך לארח, לתקן ולהעריך את המערכת. מי צריך להיות בעל העבודה הזו לאחר סיום הפרויקט הראשוני, ומי משלם עבורה?
- מחקר אחד כאן מצא מודל פתוח בגדל 32B שמביס מערכת קניינית גדולה בהרבה בידע פדגוגי, ואילו מחקר אחר מצא שכל מודל פתוח שנבדק נמצא מתחת לקו הבסיס האנושי באוריינות ויזואליזציה מדעית. כיצד תחליטו אילו מבחני-תקן הם הנכונים עבור ההחלטה שלכם?
- קורפוס יחיד ברישיון פתוח הוא מה שמאפשר לבית ספר להריץ עוזר מקומי-מוצב (on-premise) מעל חומרי הקורס שלו. אילו חובות נובעות מכך — כלפי היוצרים המקוריים, כלפי תלמידים שהנתונים שלהם מאונקדים, וכלפי הרישיון עצמו?
- אם [[generative-ai|בינה מלאכותית גנרטיבית]] יכולה להפיק קורס בפחות מחצי שעה ובמחיר של כמה דולרים, מהי הנמקת הנותרת עבור משאבי חינוך פתוחים — עלות, חופש רישוי, הבטחת איכות, או משהו אחר?
- האם מוסדות אמורים להתייחס לאימוץ קוד פתוח כהחלטת רכש, החלטת תשתית, או החלטה פדגוגית? מה נשבר אם מתייחסים אליו כאחד מאלה בלבד?

## מבוא

במונחי יום-יום, "פתוח" בחינוך AI פירושו שהם סוגים ארבעה של ארטיפקטים זמינים לבדיקה, שימוש חוזר ושינוי: **משקולות מודל**, **קוד מקור**, **נתונים וכלי הערכה**, ו**תוכן חינוכי**. המאמרים של מאגר הידע מתקבצים באופן בלתי-שווה בין השכבות האלה, והתמונה הנובעת היא מועילה יותר מן הסלוגן: פתיחות קונה דברים ספציפיים — שליטה מקומית, ביקורתיות, שחזוריות ובהירות משפטית — והיא עולה דברים ספציפיים — תשתית, מומחיות, תחזוקה, ונטל הבטחת-איכות שעובר מן הספק למוסד.

### מודלים פתוחים ומשקולות פתוחות

משקולות פתוחות חשובות ביותר במקומות שבהם נתוני תלמידים אינם יכולים לעזוב את הקמפוס. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] הוא מעריך-ציונים (autograder) מקומי תואם-FERPA, ready-to-drop, לקורסי [[stem-education|STEM]] ברמה מתקדמת, הבנוי על רובריקות ופתרונות ייחוס שכתבו מרצים, בעלות שולית אפס לכל הגשה. [[programming-its|SCRIPT]], מערכת [[intelligent-tutoring|חונכות]] בפייתון באוניברסיטת ביילפלד, **נמנעת ביודעין מממשקי API מסחריים של LLM** ומארחת בעצמה מודל [[llm|Llama-70B]] בעל משקולות פתוחות כדי לספק את GDPR ואת EU AI Act (המסווג שימושים מסוימים של AI בחינוך כסיכון גבוה), מפרידה יומני IP ממערכת החונכות, משתמשת בשמות משתמש פסאודוניימיים, ורושמת הקשות רק בהסכמה מפורשת — בחירה שהמחברים מייחסים לה גם השפעה סביבתית נמוכה יותר ושחזוריות טובה יותר.

איכות אינה עוד המחיר האוטומטי של פתיחות. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] מחיל [[reinforcement-learning|למידת חיזוק]] (DAPO) וכיוון-עדין מפוקח על משפחת מודלים פתוחה, כורה 440 שליליים קשים, מייצר 40,000 תשובות סינתטיות שצומצמו ל-1,050 דוגמאות מסודרות-קושי, ומגיע ל-**96.52%** במבחן-תקן הפדגוגיה — מעל ל-90.55% של Gemini-3 Pro — ב-32B פרמטרים dense. [[aiawe-automated-writing-evaluation|AiAWE]] מגיע למסקנות דומות עבור [[automated-essay-scoring|הערכת כתיבה אוטומטית]]: Gemma-3-27B-it מותאם-LoRA בעל משקולות פתוחות מביס את LLaMA-3.3-70B ואת קו-בסיס GPT-3.5 מכוון-עדין על 480 חיבורי TOEFL ופועל על שרת ברמת צרכן, עם הממצא השלישי המדהים שספירת הפרמטרים *אינה* חוזה אמין לביצוע בהמשך תחת התאמת LoRA. העדות הנגדית ראויה לתיעוד שווה באותה מידה: [[mllm-scientific-visualization-literacy|מבחן-תקן של שישה MLLMs]] (שלושה סגורים, שלושה פתוחים) מצא שכל מודל קוד-פתוח נמצא מתחת לקו הבסיס האנושי באוריינות ויזואליזציה [[visualization|מדעית]] ואילו Gemini עלה על ממוצע האנושי בתתי-קבוצות מספר. פתיחות מרימה את התקרה על השליטה, לא על היכולת.

OmniEdu משחרר את כל הצנרת (pipeline) ולא רק את המשקולות: פיקוח מאוזן-יכולת על תערובת של 69,999 דוגמאות הרים כל סולם של משפחה פתוחה K–12 בגדלי 4B/9B/27B — המודל מכוון בגדל 4B הרוויח 55 נקודות שיעור ניצחון פיגום ב-MathTutorBench על בסיסו — ואילו אבחון מצב-הידע נשאר היכולת החלשה ביותר שלו ב-54.04% ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### כלים פתוחים, מורות ותשתית מחקר

המקרה הברור ביותר לקוד פתוח הוא שחזור. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — מערכת החונכות האדפטיבית הפתוחה הראשונה במלואה הבנויה על עקרונות ITS — משלבת **מאגר קוד ברישיון MIT** עם **ספריית תוכן Creative Commons (CC BY)** מספרי אלגברה של OpenStax, בתוספת [[knowledge-tracing|מעקב ידע]], בדיקות A/B ותמיכת LTI; מטרת העיצוב המפורשת שלו היא שחוקר יכול להריץ ניסוי ולאחר מכן לפרסם את המסגרת, התוכן והפלטפורמה מקצה-לקצה כולה כקישור למאגר (repository). [[stanbkt-bayesian-knowledge-tracing|StanBKT]] מעלה את הטענה הזו בשכב שיטה, ומחליף אומדי-נקודה של expectation-maximization בהסקה בייסיאנית מלאה (HMC, הסקה וריאציונית, Pathfinder, אופטימיזציה) בחבילת פייתון פתוחה שחושפת את אי-הוודאות שהשוואות A/B של התערבויות אדפטיביות תלויות בה. [[deeptutor]] משחרר מסגרת חונכות [[agentic-ai|אייג'נטית]] שלמה עם זיכרון לומד מסוג יער-עקבות (trace-forest) — Apache 2.0, ובסוף 2026 סביבת למידה מלאה ולא רק הצנרת שמבחני-התקן שלה מודדים — ומחולל הכיתות OpenMAIC של [[mooc-to-maic|MAIC]] נשלח תחת MIT לצד המחקר שמעריך אותו, כך שקורס יכול להיות מיוצר, מאוחסן-עצמית ונבדק ולא רק נקרא אודותיו; [[vismatic-secure-sandbox-cs-education|VISMATIC]] מפרסם את ארגז החול (sandbox) המכולתי שלו לניטור מונחה-תהליך, כדי שמוסדות אחרים יוכלו לאמץ את מודל היושרה במקום גרסת הספק שלו. קוד פתוח נושא גם את נטל השקיפות: התסריטים לרמזים החונכות המודעים-השפעה של [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] מפורסמים לבדיקה ולעבודת [[llm-training-and-fine-tuning|אימון פדגוגי]] נוספת. תשתית פתוחה קובעת את נקודת הייחוס למה שעושות סוכנים חינוכיים: ה[[agentic-ai-education-scoping-review|סקירת ההיקף של מאגר הידע על 474 מחקרי AI אייג'נטי]] משתמשת בפרויקט סוכן קוד-פתוח בצמיחה מהירה כמבחן-התקן "פרדיגמת סוכן החוסן" (frontier agent paradigm) ומוצאת שמערכות חינוכיות חסרות עדיין תזמורת כלים מנוהלת, זיכרון מתמשך, תכנון לאופק-ארוך ופעולה ביקורתית.

### מבחני-תקן פתוחים, קבוצות נתונים ושקיפות שיטה

מספר תרומות כאן הן *תשתית הערכה* פתוחה ולא מערכות. [[cdpk-pedagogy-benchmark-llms|מבחן-התקן הפדגוגי]] (CDPK + SEND, בנוי מפריטים אותנטיים מבחני מורים בצ'יליאנים) משתרע על 97 מודלים: DeepSeek R1 בעל משקולות פתוחות הגיע ל-86.65% נגד עשרת-המובילים שרובם מודלי הסקה סגורים, וחזית העלות-דיוק זזה מ-~50% ל-~82% ב-\\$0.10 למיליון אסימוני קלט בין אפריל 2024 ליוני 2025 — כאשר Qwen-3 8B הפתוח ב-3.5 סנט כמעט מתאים את מודל הסגור הטוב באפריל 2024 בעלות נמוכה ביותר מ-400×. הביצועים צונחים בחדות מתחת לכ-8B פרמטרים, וזו מגבלת גודל פרקטית לפריסות בקמפוס. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] משחרר קבוצת נתונים, סכמה ואב-טיפוס להערכה מבוססת-עקבות של חונכות מרובת-סוכנים בעלת אינטליגנציה חברתית (540 משתתפים, 360 מפגשים, 1,440 פרקי-משימה). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] מראה את המקרה התרבותי לנתונים פתוחים: 24,795 זוגות הוראה-תגובה בשבע שפות ו-41 טכניקות פדגוגיות הנלקחות ממקורות וודיים וקלאסיים, מיושרים עם תוכנית הלימודים CBSE [[curriculum-design|המוצעת]], שאיפשרו למודל קומפקטי בגדל 7B להתקרב למודל ייחוס כללי גדול בהרבה (ציון שופט חציוני 6.39 לעומת 6.54) בשבר מהעלות של פריסה. מבחני-תקן [[benchmark|שנכתבו]] על ידי תלמידים הם נתיב נוסף לפתיחות: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] אוצר 80 משימות אקדמיות לאופק-ארוך מתוך 230 מועמדים שהגישו סטודנטים (המשתרעים על 25+ תחומים מקצועיים, 16 דורשים GPUs מסוג CUDA, המופעלים בארגזי-חול Docker מבודדים) ומרחיב אקוסיסטם סוכן פתוח להערכה ברמה אקדמית. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] טוענים שהפתיחות היא חובה [[sustainability|סביבתית]] גם כן: בסקירת כל מאמרי AIED 2025, הם מצאו דפוס של "אימוץ LLM ללא גילוי" וענו עם מתודולוגיית מדידה בקוד פתוח — כלי תוכנה בתוספת נוסחה המעריכה הוצאה חישובית גם כאשר ספירות הפרמטרים אינן ידועות.

### היכן שתוכן פתוח פוגש קוד פתוח

למשאבי חינוך פתוחים יש עמוד משלהם, [[open-education]], משום שהטיעון שם פדגוגי ומובל-רישוי ולא תשתיתי. מה ששייך לעמוד הזה הוא התפר שבו שתי הפתיחויות נפגשות, והוא צר מכפי שהוא נראה.

התפר הוא אילוץ של תאימות רישיונות. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] מצמיד מאגר קוד ברישיון MIT לספריית תוכן CC BY של ספרי אלגברה של OpenStax, כלומר תנאי הקוד ותנאי התוכן חייבים להישמר תואמים על-ידי עיצוב, ורישיון מתירני על האחד אינו מספק את האחר. התפר מופיע גם כאשר קורפוס ברישיון פתוח הוא מה שהופך מערכת מקומית לחוקית להרצה: [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] מאנדקסים 82 מסמכי OER לעוזר מאגר-ידע על GPU צרכני של 12 GB, וכל הסיפור הוא סיפור קוד-פתוח על כימות, הזיה וייחוס ולא טיעון על ספרי לימוד.

מה שהעמוד הזה אינו עושה הוא להתווכח בעד המשאב. האם ספר לימוד שנכתב על-ידי מכונה פתוח כברירת מחדל, האם רישיון שורד רמיקס מיוצר, והאם פדגוגיה פתוחה מלמדת משהו מדיד — אלה שאלות ל[[open-education]], והן השאלות שבהן עוסקת הספרות העכשווית של התחום.


### יתרונות ונטל

- **יתרונות.** ריבונות נתונים ותאימות רגולטורית ([[privacy|פרטיות]], [[regulation|רגולציה]]) באמצעות אירוח מקומי; בקרת עלות, כיוון שהסקה מקומית אינה כרוכה בעמלה לכל שאילתה ומודלים פתוחים מתקרבים לאיכות קניינית בשבר מהמחיר ([[singh-eduqwen-pedagogical-rl-2026]]); שחזוריות, כיוון שהמסגרת, הרמזים, התוכן והנתונים יכולים להישלח עם המאמר ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); ביקורתיות ובקורת בטיחות תחת [[governance|מינהל מוסדי]]; והיכולת לכוון-עדין עבור [[pedagogy|פדגוגיה]] מסוימת או מאגר ידע של קהילה מסוימת ([[iks-instruct-dataset-indian-knowledge]]).
- **נטל.** אירוח מקומי דורש חומרה ומומחיות של רבים ממוסדות אין להם; איכות ו[[pedagogical-safety|בטיחות]] אינן מובטחות מחוץ לקופסה — מודלים פתוחים עשויים לפגוע בקווי-בסיס אנושיים באוריינות ספציפיות ([[mllm-scientific-visualization-literacy]]) והכימות מרים שיעורי הזיה אם לא מוקל ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); מישהו צריך לתחזק את המערכת לאחר הפרסום ([[programming-its]] מתעד צוות קטן של סטודנטים לדוקטורט, חשיפת אבטחת עבודה-בתהליך, ונטל תאימות משמעותי); ורישיון פתוח הוא הרשאה ולא מוצר עובד — התחזוקה השומרת מערכת משוחררת שמישהו [[educational-technology-developers|מפתחי טכנולוגיה חינוכית]] בנו אותה שמישהו, ומימונם ותמריצים שלהם קובעים האם מאגר ניתן-למזלג, מוצר מתוחזק, או אף אחד מהם, הוא מה שמוסד יורש עם סיום המענק.

### הוצאת הפתיחות אל הפרקטיקה

- **עבור מרצים ומוסדות:** בדקו את הרישיון של *התוכן* כמו גם של הקוד לפני אימוץ מערכת — קוד MIT מעל ספרי CC BY הוא בר-שימוש חוזר, אך רישיון מתיר אינו מבטיח שמסלולי חונכות, מאגרי פריטים או תרגומים קיימים. העדיפו מודלים פתוחים כאשר נתוני תלמידים לא יכולים לעזוב את הקמפוס מבחינה חוקית ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), אך בדקו את המודל ב*משימה שלכם* ולא בסומכים על טבלאות מובילות כלליות ([[cdpk-pedagogy-benchmark-llms]]). תקצבו מישהו להריץ ולהעריך את המערכת לאחר הפיילוט.
- **עבור מפתחים וחוקרים:** שלחו את כל הדבר — שחרור OATutor מקצה-לקצה (קוד, תוכן, מתקן ניסוי) הוא תקן השחזוריות שהספרות הזו ממשיכה לתגמל. שחררו רמזים וסכמות חילוץ לצד המשקולות ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). דווחו חישוב ופחמן ([[aied-carbon-footprint-reporting]]). העגינו עוזרים בקורפורי ברישיון פתוח כדי שהייחוס יהיה ניתן-לבדיקה וההסתגלה חוקית ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). השתמשו בכיוון-עדין מודע-כימות ולא בכיוון פשוט אם דיוק ואנרגיה שניהם חשובים, ושמרו על רישיונות קוד ותוכן תואמים.

## תפיסות מוטעות נפוצות

**"משקולות פתוחות, קוד פתוח, תוכן פתוח ופדגוגיה פתוחה הם אותה פתיחות."** אלה ארבעה דברים שונים, והם נכשלים באופן עצמאי. טיעוני המשאב והפרקטיקה חיים ב[[open-education]]; העמוד הזה מכסה את הארטיפקטים שבונה משחרר ומרשה. משקולות *פתוחות* מתירות פריסה מקומית; *קוד* פתוח מתיר שינוי; *תוכן* פתוח מתיר שימוש חוזר והסתגלות; ו*פדגוגיה* פתוחה עוסקת בשאלה מי מחליט מה נלמד. מודל עם משקולות פתוחות וצנרת אימון קניינית, עטוף בכלי עם ממשק סגור וספריית תוכן שמורה-כל-הזכויות, הוא "פתוח" באחד מארבעת המובנים וסגור בשלושה.

המילה עצמה שנויה במחלוקת במעלה הזרם. [[deimann-rethinking-openness-ai-2026|Deimann and Lukács (2026)]] מבחינים שדיון הפתיחות הגיע ל‑AI דרך קהילת הקוד הפתוח, כשהגדרת Open Source AI הראשונה פורסמה ב‑2024, והם טוענים שהפתיחות מתפקדת שם כדימוי ולא כתכונה: שאיפה שמוסדות מאמצים בשפה בעוד המשטר הסובב נשאר שלם. זהו ביקורת שימושית על העמוד הזה, משום שרישיון הוא תכונה ותנועה אינה.

**"פתוח פירושו זול יותר."** משקולות פתוחות הופכות פריסה מקומית לאפשרית, אבל **מישהו עדיין צריך לארח, לתקן ולהעריך את המערכת** — ומישהו זה צריך לחיות מעבר למענק שמימן את העבודה. הנטלים הנקובים בספרות הזו קונקרטיים: תשתית, הבטחת [[pedagogical-safety|בטיחות]], ותחזוקה. העלות הכוללת יכולה לעלות על דמי רישיון, ומוסדות שמתייחסים לפתיחות כאל חיסכון מגלים לא פעם את חובת התחזוקה אחרי שצוות הפרויקט התפזר.

**"מודלי חזית סגורים פשוט טובים יותר, ולכן חלופות פתוחות הן נסיגה."** הפער צר מכפי שההנחה הזו מרמזת. ב[[cdpk-pedagogy-benchmark-llms|מבחן-התקן הפדגוגי]] (CDPK + SEND, בנוי מפריטים אותנטיים מבחינות מורים בצ'ילה) המשתרע על 97 מודלים, **DeepSeek R1 בעל משקולות פתוחות הגיע ל‑86.65%**, נגד עשרת-מובילים שרובם מודלי הסקה סגורים — והשוואת עלות–דיוק ממשיכה הלאה בכיוון הפתוח. הטיעון הנותר בעד פתיחות הוא אפוא על שליטה ויכולת-ביקורת, לא על ויתור ביכולת.

**"שחרור המשקולות הוא שחרור העבודה."** התרומות הפתוחות החזקות משחררות את הצנרת. OmniEdu מפרסמת פיקוח מאוזן-יכולת על תערובת של 69,999 דוגמאות ולא רק משקולות סופיות, ומרימה כל סולם של משפחה פתוחה K–12 בגדלי 4B/9B/27B, כשהמודל המכוון בגדל 4B מרוויח **55 נקודות** בביצועי פיגום ב‑MathTutorBench; [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] מתעדת אף היא את הליך ה‑RL והכיוון-עדין שלה, כולל 440 שליליים קשים שנכרו ו‑40,000 תשובות מיוצרות. משקולות בלי המתכון משחזרים תוצאה בלי לשחזר את השיטה.

## מושגים מקושרים
- [[open-education]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## מאמרים מקושרים
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise OER AI knowledge-base assistant on consumer hardware (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — MIT-licensed adaptive tutor with a CC BY OpenStax content library (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Open 32B pedagogical model outperforming far larger proprietary systems (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Drop-in FERPA-compliant local-LLM autograder
- [[programming-its]] — Self-hosted open-weight LLM for GDPR/EU AI Act compliance in a Python ITS
- [[aiawe-automated-writing-evaluation]] — LoRA-adapted open-weight model for automated writing evaluation
- [[stanbkt-bayesian-knowledge-tracing]] — Open Python package for full Bayesian knowledge tracing
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — מסגרת חונכות אייג'נטית פתוחה לחלוטין עם זיכרון לומד
- [[vismatic-secure-sandbox-cs-education]] — Open containerized sandbox for process-oriented assessment
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective math tutor with an open codebase
- [[cdpk-pedagogy-benchmark-llms]] — Open pedagogy benchmark across 97 models and the cost–accuracy frontier
- [[astra-multi-agent-tutoring-benchmark-2026]] — Open dataset and prototype for trace-based multi-agent tutoring evaluation
- [[mllm-scientific-visualization-literacy]] — Open models below the human baseline on visualization literacy
- [[iks-instruct-dataset-indian-knowledge]] — Open multilingual dataset for culturally grounded instruction
- [[aied-carbon-footprint-reporting]] — Open-source method for reporting LLM environmental cost
- [[egai-power-systems-education]] — Open executable module library for engineering AI
- [[mooc-to-maic]] — LLM-driven course generation and the changing economics of course production
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
