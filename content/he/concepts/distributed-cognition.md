---
title: קוגניציה מבוזרת
created: "2026-10-12T19:35:00-04:00"
type: concept
foundations: [agency, cognitive-offloading, human-ai-collaboration]
pedagogy: [distributed-cognition, embodied-learning, learning-theories, metacognition, situated-learning]
confidence: high
translation_of: concepts/distributed-cognition
updated: "2026-10-30T19:00:00-04:00"
source_updated: "2026-10-26T08:20:00-04:00"
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

> **קוגניציה מבוזרת** — נקודת המבט התיאורטית שהקוגניציה אינה כלואה בתוך מוחו של פרט אלא מבוזרת בין אנשים, כלים, ארטיפקטים וסביבות. במחקר AI-in-education [[research-methods-aied|research]], המסגרת הזו הפכה למרכזית להבנת שיתוף פעולה אנוש-בינה מלאכותית ([[human-ai-collaboration|human–AI collaboration]]): במקום לראות בבינה מלאכותית כלי ניטרלי שמסייע ללומד אחרת-עצמאי, קוגניציה מבוזרת מתייחסת לחשיבה כעולה מהמשחק ההדדי בין לומדים, מערכות בינה מלאכותית, עמיתים, וההקשר המשותף שלהם. היא ממסגרת מחדש שאלות של [[agency]], אחריות, ותוצאת למידה ([[learning-gains|learning outcomes]]) במונחים של האופן שבו עבודה קוגניטיבית מתחלקת על פני מערכת אנוש-בינה מלאכותית.

## שאלות לשימת לב

- קוגניציה מבוזרת אומרת שהחשיבה אינה כלואה במוח בודד אלא מפוזרת בין אנשים, כלים וסביבות. כשאתם משתמשים במחשבון, באפליקציית פתקים או בעוזר בינה מלאכותית, היכן 'החשיבה' מתרחשת בפועל?
- אם הקוגניציה מבוזרת בין אנוש ובינה מלאכותית, מי אחראי כאשר התוצאה שגויה — ומי נאמן על הלמידה?
- מסגרת אחת מבחינה בין 'סוכנות פונקציונלית' של בינה מלאכותית (היא יכולה להשפיע על תוצאות) לבין 'אחריות מוסרית' (שנשארת אנושית). האם ההבחנה הזו מחזיקה מעמד בפרקטיקה, או האם האחריות מתערפלת כאשר בני אנוש אינם יכולים להבין מה שהמערכת עשתה?
- מערכות אנוש-בינה מלאכותית שמבזרות חשיבה ביתר יעילות נוטות לייצר את ביצועי המשימה הגבוהים ביותר אך את הלמידה העצמאית ([[self-regulated-learning|self-regulated learning]]) הפחותה ביותר. מדוע הפיכת מערכת ל'חכמה יותר' ברמת הקבוצה הופכת את הלומד הפרט לחלש יותר?
- טענת 'Cognitive Commons' מחזיקה שהשליטה המבוזרת תלויה במומחיות מנוכרת — אינכם יכולים לפקח ביעילות על מערכת בינה מלאכותית שאינכם מבינים עמוק. כיצד זה מאתגר את הרעיה שבינה מלאכותית מאפשרת לנו לדלג על העבודה הקשה של הלמידה?

## מבוא

זהו מושג תאוריית-למידה בתוך קו ה[[learning-theories]] של מאגר הידע, קשור מקרוב ל[[embodied-learning]], [[situated-learning]], ו[[cognitive-offloading]]. קוגניציה מבוזרת (DCog), שמקורה בעבודתו של Edwin Hutchins ועמיתיו, מתארת כיצד תהליכים קוגניטיביים כמו זיכרון, חשיבה ו[[problem-solving]] מפוזרים בין סוכנים מרובים ומערכות חומריות ולא מתגוררים בראש בודד. בחינוך בינה מלאכותית ([[ai-education|AI education]]) זה חשוב מכיוון שמערכות בינה מלאכותית פועלות ביתר תלמידים כשותפים קוגניטיביים אמיתיים שנושאים חלק מהנטל החושב, ומעלות את השאלה *היכן* הלמידה מתרחשת בפועל ומי אחראי.

### כיצד בינה מלאכותית מזיזה את הביזור של הקוגניציה

מערכות בינה מלאכותית גנרטיביות ואינטראקטיביות מבזרות מחדש עבודה קוגניטיבית בדרכים שכלים קודמים לא עשו. מאגר הידע מתעד כמה ממדים של השינוי הזה:

- **בינה מלאכותית כשותף קוגניטיבי ומקושר-מחדש.** בינה מלאכותית יכולה לפעול כ[[scaffolding|scaffold]], תמיכה מטאקוגניטיבית, מערכת זיכרון חיצונית, ושותף החלטות בשיתוף-[[regulation]] של החשיבה והלמידה. ([[ai-cognitive-partner-co-regulation-learning]]) זה ממקם את הקוגניציה כמקושרת-מחדש בין לומד למערכת ולא כמנוהלת אינדיבידואלית.
- **נפח השימוש ב‑AI אינו חושף איזו צורת עבודה מבוזרת מתרחשת:** [[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]] מצאו שפרופילי השימוש מבוססי-הנפח של 97 לומדים נבדלו בידע קודם ובבעלות-מחברות אך לא בהנחיה בתפקיד פעיל או ברמת ההבנה, ולכן אותה כמות שימוש יכולה ללוות גם פעילות משותפת וגם חלוקת עבודה.
- **ביזור סוכנות ואחריות.** מסגרות כמו **קוגניציית אנסמבל** מרקונספטואליות מחדש את החשיבה כעולה מאינטראקציה דינמית אנוש-[[student-ai-interaction|AI interaction]], ומבחינות בין *סוכנות פונקציונלית* של בינה מלאכותית (יכולתה להשפיע על תוצאות ללא מודעות) לבין *אחריות מוסרית* (שנשארת אנושית). ([[ensemble-cognition-philosophy-ai-education]]) קוגניציה מבוזרת ממסגרת מחדש לכן מי נאמן על הלמידה.
- **מתח היעילות-הויסות.** עבודה אמפירית מראה הסחר: מערכות אנוש-בינה מלאכותית שמבזרות חשיבה ביתר יעילות (למשל, באמצעות חשיבה מואצלת) משיגות ביצועי משימה גבוהים יותר אך עשויות להפחית את המעורבות הויסותית ([[student-engagement|engagement]]) של הלומדים. ([[hao-human-ai-collaborative-problem-solving-cognition]]) זהו הפנים האמפירי של סיכוני [[cognitive-offloading]] וה[[cognitive-offloading|Over-Reliance]] שמאגר הידע מתעד.
- **תיווך בשיתוף פעולה.** בינה מלאכותית יכולה לפעול כ*מתווך [[pedagogy|pedagogical]]* שמנצח אינטראקציה, יצירת-משמעות אפיסטמית, ותהליכים ויסות ב[[collaborative-learning|collaborative learning]], ומבזרת מחדש סוכנות, סמכות ואחריות בין שחקנים אנושיים ולא-אנושיים. ([[niari-ai-pedagogical-mediator-collaborative-learning]])
- **תצורת גישה מבזרת קוגניציה בתוך הקבוצה.** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] מראים ש*כיצד* צוות חולק GenAI קובעת את הביזור של הקוגניציה: עבודה סינכרונית על ממשק משותף בודד מקיימת מודל קוגניטיבי משותף (הנחיות קולקטיביות, זיכרון חיצוני משותף), בעוד ששימוש פרטי אסינכרוני מפרק אותו, עם פלטים שמיותגים מחדש באופן סלקטיבי לפני שיתוף. GenAI פועלת לכן גם כמשתתף קוגניטיבי מבוזר וגם כמרחב שיתופי אינטראקטיבי שהחדירות שלו חייבת להיות מתוכננת (זרימת הקשר משותפת נכנסת, תובנות פרטיות אינן נזרמות בחזרה אוטומטית).
- **גם מורים חווים ביזור דומיננטי-בינה מלאכותית לעומת משלים.** אותה לוגיקה של יעילות-ויסות חלה על צד המורה של תכנון השיעור: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] מצאו שמורים מתחילים מאצילים נתח גדול של נטל קוגניטיבי של תכנון הוראה למערכת הבינה המלאכותית (ביזור דומיננטי-בינה מלאכותית, ברובו מקבל תגובות), בעוד שמורים מנוסים ומיומני-בינה מלאכותית מגיעים לביזור משלים שבו מומחיות פדגוגית ותמיכה חישובית של בינה מלאכותית מחזקים הדדית — ומכיוון ש[[generative-ai|GenAI]] מייצרת ומקונסטרוקטת במקום רק לאחסן מידע, הם ממסגרים זאת כ*קוגניציה משותפת פרטיפנטיבית*, לא כשימוש בכלי פשוט.
- **סוגי אינטראקציה, לא תוצאות, כיחידה.** [[cognitive-distribution-student-genai-interaction-2026|Willcox, Lane and Arikan (2026)]] בנו את **מסגרת הביזור הקוגניטיבי** מ-53 יומני שימוש עצמאי-מונחה ב-ChatGPT: חמישה סוגי אינטראקציה (הרחבה, מיקור חוץ, יישור, טרנספורמציה, ניתוק) וארבעה תפקידי משתמש, כך שאותו סטודנט יכול להטעין בחליפה אחת ולחשוב-יחד בזו שאחריה.

### קוגניציה מבוזרת ונקודות מבט קשורות

מאגר הידע מתייחס לקוגניציה מבוזרת לצד המסורות התיאורטיות השכנות שלה, החופפות אך אינן זהות:

- **[[situated-learning|Situated learning / situated cognition]]** מדגיש שהקוגניציה והלמידה בלתי-נפרדות מההקשר האותנטי וקהילות הפרקטיקה שבהן הן מתרחשות — משלים למיקוד של DCog ביזור קוגניטיבי *distribution* על פני מערכות.
- **[[embodied-learning|Embodied cognition]]** מדגיש את תפקיד הגוף והאינטראקציה חושית-תנועתית, וטוען שהחשיבה מעוגנת במעורבות גופנית ולא במניפולציה סמלית מופשטת.
- **[[cognitive-offloading]]** הוא המנגנון הפרקטי שדרכו עבודה קוגניטיבית נמסרת למערכות חיצוניות (ובהן בינה מלאכותית), והוא הנגדי הנושא-סיכון לתיאור התאורי של DCog.
- **קוגניציה מורחבת / תזת המוח המורחב** (בשימוש בעבודה פוסטהיאניסטית) מחזיקה שארטיפקטים חיצוניים יכולים להיות חלקים *קונסטיטוטיביים* של מערכת קוגניטיבית, לא רק מכשירים — טענה חזקה יותר שבינה מלאכותית היא חלק מהמוח של הלומד עצמו. ([[elsayed-pedagogical-symbiosis-posthuman-learner]])

### מדוע זה חשוב לתכן ולהערכה של בינה מלאכותית

קוגניציה מבוזרת מספקת הן עדשת תכן והן עדשת הערכה. לתכן, היא שואלת כיצד לחלק עבודה קוגניטיבית בין לומדים לבינה מלאכותית כדי לשמור (ולא להעביר) את הסוכנות, ה[[metacognition]], והויסות-העצמי של הלומד האנושי. להערכה, היא ממסגרת מחדש את מדדי ההצלחה: במקום לשאול רק "האם הביצועים השתפרו?", DCog שואלת האם הביזור של הקוגניציה תומך בלמידה ממושכת, סוכנות אפיסטמית וצדק חינוכי — נקודת מבט שמתחברת לדאגות [[ai-ed-evaluation]] וה[[learning-theories]] של מאגר הידע.

Fowlin et al. (2026) מבצעים את החלוקה הזו כרצף דו-שלבי: לבנות כשירויות ליבה ללא בינה מלאכותית קודם, ואז להכניס בינה מלאכותית כשותף קוגניטיבי שהצעותיו הסטודנטים מעריכים באופן ביקורתי, כדי למנוע אובדן-כישור הקשור-אוטומציה ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**שליטה מנוכרת לעומת מבוזרת.** מסגרת Cognitive Commons ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]) מבחינה בין Internalized Mastery (ידע תחום עמוק במוחות פרטיים) לבין Distributed Mastery (ניהול מערכות אנוש-בינה מלאכותית), וטוענת שהאחרונה תלויה בראשונה באמצעות "Validation Tether": פיקוח יעיל על מערכות מבוזרות/בינה מלאכותית מניח את המומחיות המנוכרת שאותן המערכות עלולות להעביר. זה מחדד את שאלת התכן של DCog — הביזור של הקוגניציה אינו חייב לבוא על חשבון המומחיות שמאמתת אותו.

## תפיסות מוטעות נפוצות

- **"מסמך משותף פירושו קוגניציה משותפת."** פרופילים מבוססי-נפח של **97 לומדים** נבדלו ב**ידע קודם ובבעלות-מחברות** אך **לא בהנחיה בתפקיד פעיל או ברמת ההבנה**. נפח ההשתתפות מדד חשיפה, לא את ביזור העבודה הקוגניטיבית — ולכן אנליטיקת שימוש בכלי שיתופי אומרת מעט מאוד על מי חשב.
- **"כולם מטעינים ל‑AI באותה מידה."** מורים מתחילים **מאצילים נתח גדול מהנטל הקוגניטיבי של תכנון הוראה למערכת ה‑AI**, ומגיעים ל**ביזור דומיננטי-בינה מלאכותית** שבו הם ברובם מקבלים תגובות, בעוד מורים מנוסים ומיומני-בינה מלאכותית מבזרים אחרת. מומחיות נראית במקום שבו מונח הנטל, לא רק בכמה AI משתמשים.
- **"יותר מעורבות AI פירושה יותר תמיכה."** ביזור דומיננטי-בינה מלאכותית הוא הדפוס שיש לשים לב אליו, משום שחלקו של האדם בעבודה הקוגניטיבית מצטמצם בזמן שנפח התוצר עולה. המערכת יכולה להיראות מסוגלת יותר בדיוק כאשר המשתמש עושה פחות.

## מושגים מקושרים

- [[learning-theories]]
- [[cognitive-offloading]]
- [[embodied-learning]]
- [[situated-learning]]
- [[human-ai-collaboration]]
- [[agency]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[constructivist]]
- [[collaborative-learning]]
- [[ai-education]]

## מאמרים מקושרים

- [[hao-human-ai-collaborative-problem-solving-cognition]] — Empirical study of human–AI collaborative problem-solving through a distributed cognition + co-regulation lens
- [[niari-ai-pedagogical-mediator-collaborative-learning]] — AI as a pedagogical mediator redistributing cognition across human and non-human actors
- [[ai-cognitive-partner-co-regulation-learning]] — AI as a cognitive partner in co-regulated thinking
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition framework reconceptualizing thinking as human–AI interaction
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — Posthuman learner with cognition distributed across biological and artificial systems
- [[fowlin-operationalizing-learning-principles-ai]] — Operationalizing distributed cognition alongside experiential and situated learning
- [[cognitive-commons-ai-expertise-regeneration]] — The tragedy of the cognitive commons: AI and expertise regeneration
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction in lesson design: AI-dominant vs complementary distributed cognition by experience and proficiency (Choi et al. 2026)
- [[xu-genai-collaborative-space-2026]] — GenAI as agent and collaborative space: how access configuration distributes group cognition (Xu et al. 2026)
- [[cognitive-distribution-student-genai-interaction-2026]] — Cognitive Distribution Framework: five interaction types and four roles from self-directed ChatGPT use
