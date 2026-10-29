---
connected_resources: [clarity, pedagogical-promptbook, snorkl]
title: משוב
created: "2026-10-12T19:00:00-04:00"
type: concept
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, feedback-literacy, formative-assessment, peer-assessment]
connected_faqs: [developing-ai-tutor, ai-feedback-at-scale]
confidence: high
translation_of: concepts/feedback
source_updated: "2026-10-15T08:25:00-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **משוב** — מידע הניתן ללומד לגבי הביצועים או ההבנה שלו, שמיועד לסגירת הפער בין הביצוע הנוכחי לבין הביצוע הרצוי. ב[[ai-education|AI in education]], המשוב הפך לנושא מרכזי שמשתנה במהירות: [[ai-technologies|AI systems]] מייצרים כעת, מעבירים ואפילו מלמדים תלמידים להשתמש במשוב, ומעצבים מחדש כל שלב בתהליך המשוב.

## שאלות לשימת לב

- המשוב מוצג לרוב כמידע שנמסר ללומד, אך [[research-methods-aied|research]] טוען שהוא 'נחשב' למשוב רק כאשר הלומד מבין אותו ופועל לפיו. אם המשוב הוא יחסים ולא מסר, מה משתנה בדרך שבה עלינו להעביר אותו?
- תפיסת התלמידים לגבי אם המשוב בא מבינה מלאכותית או מאדם יכולה לשנות כמה הם לומדים ממנו. מדוע לדעתכם ה-*מקור* כל כך חשוב — ומה המשמעות לכך עבור משוב שנוצר בבינה מלאכותית בהקשר שלכם?
- משוב מיידי יכול להיות מלכודת: 'מלכודת התשובה הנכונה' מראה שתלמידים שמעתיקים תיקונים פשוט לומדים פחות. מתי משוב מיידי עוזר, ומתי הוא עוקף את הלמידה עצמה שאמור לתמוך בה?
- מחקר מצא אפילו שסדרת משוב מתוכננת היטב — עידוד, ואז רמזים, ואז התשובה — שנועדה לבנות אוטונומיה, *פגעה* בלומדה למרות שגדילה את [[student-engagement|engagement]]. אם תלמידים מרגישים טוב עם משוב שגורם להם ללמוד פחות, על מה עלינו למטב?
- המשוב מתואר כמערכת בעלת חלקים: לולאת המשוב, איכות האספקה, קיבולת הספיגה של הלומד, והקשר ההערכה. אם הייתם מנסים לשפר את המשוב בקורס שלכם, איזה חלק הייתם מתקנים קודם, ומדוע?

## מבוא

זהו מושג הגג for the knowledge base's feedback-related ideas. המשוב יושב במפגש שבין הערכה ללומדה: ללא משוב, הערכה מודדת ביצועים אך אינה משפרת אותם; עם משוב יעיל, ההערכה הופכת לאירוע למידה. מאגר הידע מתייחס למשוב כ**מערכת** עם פאות מרובות — איכות המשוב עצמו ([[ai-feedback-quality]]), הלולאה שסוגרת את פער הלמידה, קיבולת הלומד להשתמש בו ([[feedback-literacy]]), והקשרי ההערכה שבהם הוא פועל ([[formative-assessment]], [[peer-assessment]], [[automated-assessment]]).

- **[[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz et al.]]** מראים שתפיסת התלמידים את *מקור* המשוב (בינה מלאכותית מול אנוש) מעצבת למידה מונעת-עצמית ממשוב של [[generative-ai|GenAI]] — תכונת איכות מכרעת לטענות על יעילות המשוב.
- **[[nazaretsky-feedback-source-bias-2025|Nazaretsky et al. (2025)]]** מבודדים את המקור מהתוכן: 472 סטודנטים מהאפ״ף-לוזאן דרגו משוב אנושי ומשוב GPT-4.0 הניתנים להשוואה בתוכן, על העבודה שלהם, קודם בעיוורון ואז שוב לאחר שחשוף המקור, ורובם לא הצליחו להבחין ביניהם באופן מהימן (287 מתוך 472 ניחשו נכון). לאחר שחשיפת התווית, דירוגי הגרסה מבוססת הבינה המלאכותית ירדו ושל הגרסה האנושית עלו — באופן מובהק עבור Genuineness (p < .01) — ואמינות הספק הופרדה באופן נקי (אנוש μ = 3.28 מול בינה מלאכותית μ = 2.25, Cohen's d = 0.57). ההטיה מצטברת לספק ולא לטקסט, שכן שתי הגרסאות היו ניתנות להשווה נכונות ובאיכות קוגניטיבית.

## מערכת המשוב

המשוב מובן בצורה הטובה ביותר לא כאירוע בודד אלא כמערכת מחוברת של חלקים משתפעים, אשר מאגר הידע מתעד כל אחד מהם כמושג בפני עצמו:

- **לולאת המשוב** — המנגנון שדרכו המשוב סוגר את הפער בין הביצוע הנוכחי לבין הרצוי; המחזור של ביצועים → משוב → עריכה → ביצועים משופרים שמניע לומדה.
- **[[ai-feedback-quality]]** — הדיוק, השימושיות, העדכנות, והערך ה[[pedagogy|pedagogical]] של משוב שנוצר בבינה מלאכותית; צד האספקה של המערכת.
- **[[feedback-literacy]]** — היכולות והנטיות שהתלמידים צריכים כדי להבין, להעריך ולפעול על פי משוב; צד הספיגה של המערכת.
- **[[formative-assessment]]** — קשר ההערכה שבו המשוב משמש לשיפור הלמידה בעודה בתהליך, ולא רק כדי לשפוט אותה.
- **[[peer-assessment]]** — משוב המוחלף בין [[learners]], מוגבר ביתר תלמידים מבינה מלאכותית ומהווה אתר לפיתוח אוריינות המשוב.
- **[[automated-assessment]]** — ניקוד ומשוב מונעים בינה מלאכותית, מ[[automated-essay-scoring|automated essay scoring]] ועד ניקוד תשובות קצרות מודע-ביטחון.

### לולאת המשוב

לולאת המשוב היא התהליך המחזורי שבו מערכות בינה מלאכותית מעריכות עבודת תלמידים, מספקות משוב, מתבוננות בתגובת התלמיד, ומתאימות את ההוראה הבאה. לולאות משוב המתווכות בבינה מלאכותית פועלות בקנהי מידה מרובים:

- **משוב מיידי:** [[automated-assessment|Automated grading systems]] ו[[intelligent-tutoring|AI tutors]] מספקים תיקון בזמן אמת במהלך [[problem-solving]]. מחקר [[correct-answer-trap-ai-tutor|Correct-answer trap research]] מראה שמשוב מיידי יכול לעקוף לומדה אם תלמידים פשוט מעתיקים תיקונים. יצירת משוב תיקון מיידי זה עם LLMs בתוך מורה פרטי היא אפשרית אך אינה מושלמת: על פני 6,926 עסקאות רשומות בפלטפורמת Apprentice Tutor College Algebra, [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] מצאו ש-GPT-4 ייצר רמזים המכוונים לשגיאה הספציפית של התלמיד ב~66% מהמקרים, אך ~35% מהרמזים היו כלליים מדי, שגויים, או חשפו את התשובה לפני הזמן, ובקרות איכות ממוחשבות מבוססות LLM לא התיישרו עם שיפוט אנושי — מה שמחזק כי משוב בינה מלאכותית שלא נבדק בלולאה המיידית נושא סיכון אמיתי לעקוף לומדה.
- **משוב ברמת המטלה:** מערכות [[formative-assessment]] ומחקר [[ai-feedback-quality|AI feedback quality research]] בודקים האם משוב במטלה שנוצר בבינה מלאכותית משפר עבודה עוקבת. מחקרי [[sequenced-ai-feedback-learning|Sequenced feedback studies]] בודקים האם סדר המשוב חשוב.
- **לולאות ברמת הקורס:** לוחות מחוונים של [[learning-analytics|Learning analytics dashboards]] ו[[edtech-platform|educational platforms]] מצברים משוב על פני מטלות כדי לזהות דפוסים ולהמליץ על התערבויות.

יעילות לולאת המשוב תלויה ב[[ai-feedback-quality|feedback quality]] — דיוק, ספציפיות, עדכנות ויכולת פעולה. מערכות [[becerra-aicofe-feedback-2026|AI peer feedback systems]] מוסיפות מימד חברתי ללולאה.

**האדם בלולאה:** לולאות משוב אינן ממוחשבות לחלוטין — מורים מתווכים לעתים קרובות משוב שנוצר בבינה מלאכותית לפני שהוא מגיע ללומדים. מחקרי [[learner-centered-feedback-ai|Studies of AI feedback tools for teachers]] (למשל, הכלי PolyFeed המשלב detector ML עם [[llm]] rephraser) מוצאים שמורים משתמשים בשיפוט מקצועי כדי **לקבל, לערוך או לדחות** הצעות בינה מלאכותית — תבנית של "assist but verify" — וממתינים באופן שיטתי את השבחים המוגזמים וההצעות הגנריות כדי להגן על אותנטיות וקול. ה**מימד היחסי/[[affective-computing|affective]]** של המשוב (יחסי תלמיד-מורה, עידוד) מתנגד ביתר שאת להאצלה לבינה מלאכותית, מה שמצביע שחלק זה של הלולאה נשאר אנושי מטבעו. תיווך זה של אנוש-בתוך-הלולאה מתחבר ל[[human-in-the-loop-ai]] ול[[teacher-role]].

ביקורת המדיניות של Luo ו-Eaton מחדדת את אותה הנקודה: רק 14 מתוך 50 אוניברסיטיאות מדורגות-גבוה היו להן הנחיה ספציפית לשימוש המורים בבינה מלאכותית למשוב, ותלמידים תיארו משוב בינה מלאכותית שלא נחשף כ"disingenuous", מה שהופך שקיפות והסכמה לתנאים מוקדמים של פרקטיקה אתית ולא למנמונות ([[luo-eaton-ai-student-feedback-ethics-2026|Luo & Eaton (2026)]]).

LearnLens הופך את התיווך הזה למנגנון: היא מתייחסת לעריכת המורה כאות לחוסר שביעות רצון ולא כתיקון, ומבזבזת מחשב נוסף על הרהור מעמיק במקום להחזיר את התשובה המהירה, והזמן החציוני של המורים לכל מטלה ירד מ-10–30 דקות לפחות מחמש ([[zhao-learnlens-feedback-educators-loop|Zhao et al. (2025)]]).

הקריאה היחסית חותרת עמוק יותר מהחלפה. בסדנאות עם 12 תלמידים ו-18 מחנכים, [[ai-feedback-ecosystem-higher-education-2026|Bearman et al. (2026)]] מצאו שתלמידים התייחסו לבינה מלאכותית כמקור נוסף אך פגום, ושקלו אותה מול רובריקות, הרצאות, לוחות דיון והערות מחנכים, והשתמשו בה כמנגנון החזקה כאשר תגובות אנושיות איחרו; תלמיד אחד הדביק הערות מחנך דקות ל[[conversational-ai|chatbot]] כדי לברר מה לעשות הלאה. נוכחותה של הבינה המלאכותית שינתה יחסים ולא רק הוסיפה הערות, עד כדי כך שתלמיד אחד הפסיק לסמוך על משוב מלוח הדיון כנראה שנכתב בבינה מלאכותית. המחברים מציעים לכן humans-as-the-loop: אנשים שמסייעים לאנשים לבנות יחסי משוב חזקים לאורך זמן, במקום פיקוח על פלט מכונה.

[[care-full-feedback-genai|Winstone et al. (2026)]] ממסגרים מחדש את משוב GenAI כענייני טיפול — פרקטיקה אתית ויחסית ולא העברת מידע — ומכנים פרדוקס של מרחב-בטוח: הסיכון האישי המופחת של הכלי עלול לוותר על עיגון תלמידים לפני החיכוך של מפגשי משוב מקצועיים.

### כיצד בינה מלאכותית משנה את המשוב

בינה מלאכותית משנה את המשוב בשלוש כיוונים בעלי השלכות, שכל אחד מהם מגביה את האחראיות של הפאות האחרות:

- **נפח ומיידיות.** בינה מלאכותית יכולה לייצר משוב באופן מיידי ובקנה מידה גדול, ולהגדיל בצורה דרמטית את כמות המשוב שהתלמידים מקבלים. מחקרי [[genai-feedback-design-multisite-experiment|Multi-site GenAI feedback studies]] ו[[ai-generated-feedback-higher-ed|AI feedback in higher education]] מתעדים משוב בינה מלאכותית כמוחווה למול משוב מורה במקובלות ותמיכה. סקירה שיטתית מונחית-[[meta-analysis-systematic-review|systematic review]] של 42 מחקרים אמפיריים (2023–2025) מאשרת את תועלת הקנה מידה הזו — LLMs יכולים להאיץ את הניקוד ולספק משוב מהיר ומותאם-אישית בקנה מידה, במיוחד בקוהורטים גדולים או של [[higher-ed|higher-education]] — תוך התרעה שמשוב כזה לפעמים גנרי מדי או לא מיושר עם הציון המוקצה, ואמינות נופלת במשימות ארוכות, [[multilingual-learning|multilingual]], או מעובדות ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).

- **התאמה אישית היא וקטור הטיה.** תוך שמירה על חיבורי שמיניות של כיתה שמינית קבועים, ארבעה LLMs הגזימו בשבח ועקפו ביקורת עבור תלמידים המסומנים לפי גזע, שפה או מוגבלות — כך שמאפייני התלמיד שמזינים מערכת משוב הם החלטת הוגנות, ולא נייטרלית ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

- **דרישות הערכה על הלומד.** מכיוון שמשוב בינה מלאכותית יכול להיות לא מדויק או הזייתי, תלמידים חייבים לשפוט האם [[trust]] ולפעול לפיו. כאן הופכים [[feedback-literacy]] ו[[trust-calibration]] למכריעים: [[mendoza-ai-feedback-feedback-literacy-srl|Mendoza et al. (2026)]] מראים שרק תלמידים בעלי אוריינות משוב ממירים משוב בינה מלאכותית לרווחים של [[self-regulated-learning]], בעוד ש[[llm-fallacy-misattribution|the LLM fallacy]] מתעד כיצד תלמידים עשויים לייחס יותר מדי קרדיט למשוב בינה מלאכותית לכושר שלהם.

- **אוריינות המשוב נבנית בשימוש, לא בדמוגרפיה.** אצל 486 סטודנטים לתואר ראשון ב-EFL, רק תדירות שימוש בכלי בינה מלאכותית חזה אוריינות משוב בינה מלאכותית (β = 0.29) — לא התמחות או שנת לימודים — כך שגישת פיגום למשוב המותווך בבינה מלאכותית היא שאלת שוויון כמו גם שאלת תכן ([[liu-deris-ai-feedback-literacy-uptake|Liu & Deris (2025)]]).

- **אישור מעבדה אינו שימוש בפרק זמן.** כל 18 התלמידים הגיבו בחיוב לפונקציית ההסבר של GenAI בפגישות מעבדה, אך רק מחצית השתמשו בה במהלך הסמסטר, וציינו חוסר התאמה, חוסר רלוונטיות וכפילות כאשר משוב המחנך היה כבר ברור ([[jin-genai-learning-analytics-feedback-literacy|Jin et al. (2025)]]).

- **אמון וטיפול, לא דיוק, מגבילים ספיגה.** שבעה-עשר סטודנטים EFL העניקו לסייען כתיבה של בינה מלאכותית מומחיות גבוהה אך פקפקו באמינות שלו על טיפול בנתונים ודרגו את הנכונות שלו הנמוכה ביותר, ואישרו אותו רק לנוגעי שפה כלליים; חלקם גם מצאו את נפח ההצעות שלו בלתי-מנוהל ([[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor, 2026]]).

- **התאמת משוב ברמת המטלה: מיון משוב לפי סטטוס אפיסטמי.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] טוען שהמסגרות שעליהן התחום מסתמך — רמותיו של Hattie ו-Timperley, עקרונות התכן של Boud ו-Molloy — מסבירות *היכן* המשוב פועל בלומדה אך לא האם משימת משוב נתונה כוללת בדיקת-כלל, אימות עובדתי או שיפוט פרשני, ושזו ההבחנה השנייה שקובעת האם אוטומציה מוגנת. הפיצול התלת-חלקי המוצע הוא משוב מבני והצגתי ברמה נמוכה (עיצוב, הפניות, דקדוק, בהירות ברמת המשפט — מבוסס-כלל מול סטנדרטים מפורשים ובטוח לאוטומציה), אימות עובדתי ופרוצדורלי ברמה בינונית (האם חישוב השתמש בשיטה שצוינה נכון, האם עובדה שצוינה מתאימה למקורות סמכותיים — השוואה מול ידע מבוסס, לא שיפוט חשיבה), והערכה ו[[critical-thinking|critical evaluation]] וסינתזה ברמה גבוהה, שבה השיפוט פרשני וחייב להישאר אנושי. הרמות הן ממדים ולא סולם: חישוב אחד יכול להיות מוצג נכון, שגוי אריתמטית, ובלתי-מתאים מתודולוגית בו זמנית, ויכול למשוך אימות, משוב תהליכי ומשוב ויסות-עצמי יחד. מקרה הגבול החד ביותר של המסגרת הוא בהירות: בהירות ברמת המשפט היא ברמת פנים, אך *חוסר בהירות ארגומנטטיבי* מסמן לעתים קרובות הבנת מושגים חלקית, כך שמקרים המסומנים צריכים להסללם לסקירה אנושית ולא להיות מתוקנים כפרוזה — תיקון הכתיבה ישאיר את הבעיה האמיתית ללא טיפול.

- **משוב מודע-תפקיד.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] הראו ש[[prompt-engineering|prompting]] אותו LLM להעריך את אותו ארטיפקט תלמידי תחת תפקידים שונים — מורה, מבקר-עמיתים, בוחן מענק — ייצר משוב מובהן באופן איכותני: מורים היו מעודדים ומוכווני-תהליך, עמיתים תומכים ושיחתיים, בוחני מענק רשמיים ומוכווני-תוצאות. הבדלים הללו היו אפיסטמיים, לא רק סגנוניים, והבליטו היבטים שונים של פרקטיקת התכן — עדות שהנחיה מודעת-תפקיד יכולה לייצר משוב הערכה מודע-תפקיד ולא תגובה גנרית בודדת.

- **סוג המשוב חשוב יותר מצפיפות המשוב.** מחקר סטוכסטי אדפטיבי בן שמונה שבועות (194 תלמידים) מצא שמשוב מכוון, מידעי ומשנה הופעל באופן שונה, ומשוב משנה תרם לעומס קוגניטיבי — כך שעיצוב המשוב צריך להתאים סוג לשלב הלומד ולא למקסם נפח ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).

- **תועלת המשוב מול סמכות הערכה.** [[student-perspectives-ai-writing-grading-2026|AlGhamdi (2026)]] מראה שתלמידים יכולים לקבל בו זמנית משוב שנוצר בבינה מלאכותית כשימושי ולדחות את הבינה המלאכותית כמעריך המתאים — ולהפריד בין *תועלת המשוב* (הערך המידעי של משוב ברמת פנים) לבין *סמכות הערכה* (מי רשאי להחליט את הציון). בעיצוב [[assessment|assessment design]] שקוף לאחר מכן, סטודנטים מחשוב סעודיים התייחסו לאלו כשני שיפוטים אנליטית נפרדים, והעריכו את בהירות ChatGPT לעריכה תוך שמירת סמכות הציון למורה האנושי, ונימקו את הסיבות הדיאולוגיות ומושקלות-מוסדית. הממצא מרחיב את [[feedback-literacy]] מעבר לשיפוט איכות המשוב להנמקה על סמכות הערכה עצמה, ומציע ש[[explainable-ai|transparency]] על מעורבות בינה מלאכותית יכולה להפוך את המשוב לאובייקט של הרהור ביקורתי במקום קבלה פסיבית.

- **העמדה של העריכה היא תוצאה, לא רק איכותה.** מחקר משוב שואל בדרך כלל האם עריכה שיפרה את הטקסט. [[zhao-ji-appraisal-human-ai-revisions-2026|Zhao and Ji (2026)]] שואלים מה העמדה הרטורית שהטקסט המערוך נוטל, ומקודדים 168 חיבורים ארגומנטטיביים ב-EFL עם Appraisal Theory על פני טיוטות ראשונות, עריכות לאחר [[peer-assessment|peer feedback]], ועריכות ChatGPT-4 של אותן הטיוטות. שפת המעורבות הייתה נפוצה במידה שווה בשלושת אלה, אך מוגדרת באופן שונה: עריכות משוב-עמיתים הפכו יותר contractive (יותר Counter ו-Endorse, פחות Entertain), בעוד שעריכות הבינה המלאכותית שמרו על תמהרוכת Contract/Expand מאוזנת יותר. אף אחת אינה כתיבה טובה יותר — הנקודה היא ששתי דרכי העריכה משאירות את הטיעון בעמדה דיאולוגית שונה, מה שהופך את העמדה עצמה למשהו ששיחת משוב יכולה לקרוא בשם ושכותב יכול לבחור.

- **הסבר יכול לשכנע ועדיין לא להיות נאמן.** [[shap-llm-rationales-teaching-quality-assessment|Bueno et al. (2026)]] מצאו שהסרת המשפטים שנמרצו ביותר בהנמקה של LLM כמשפיעים כמעט לא הניעה את ציון הרובריקה, בעוד שמשפטים שנבחרו ע״י SHAP הניעו אותו באופן מהימן והעבירו בין משפחות מודלים, כך שהצדקה זורמת אינה עדות שציון נשען עליה.

- **אוריינות המשוב כמטרת אימון.** במקום רק לספק משוב, כלי בינה מלאכותית מתוכננים ביתר תלמידים כדי *ללמד* תלמידים להשתמש במשוב — [[tubino-adachi-ai-automated-feedback-literacy|reframing automated feedback tools as literacy-building instruments]], [[zhan-boud-dawson-genai-feedback-engagement|framing GenAI as an enabler of feedback engagement]], ו[[richmond-nicholls-genai-psych-feedback-ai-literacies|using GenAI critique tasks to build psychological, feedback, and AI literacies together]].

- **אוריינות המשוב וכיול הם מנופים נפרדים.** עם 120 סטודנטים לתואר ראשון, סקריפט אוריינות המשוב (Filter–Reason–Act–Check) הגביר איכות הכתיבה, ספיגה יעילה, ועריכה מעמיקה, פעילות כיול הערכה-ביצועים שיפרה את דיוק ההערכה העצמית וחתכה ביטחון-יתר, והשילוב ביניהם ייצר את רווחי הכתיבה הגדולים ביותר ואת השימור החזק ביותר לאחר שמשאב בינה מלאכותית הוסר ([[rethinking-ai-writing-feedback-literacy|Dai (2026)]]).

- **בהירות אינה יעילות.** הודעות שגיאה ב-Python שנכתבו מחדש ע״י LLM דורגו כקריאות ופחות דורשות-קוגניטיביות באופן מובהק לעומת פלט הפרשן הסטנדרטי, אך לא ייצרו רווח מובהק בקצב התיקון, בניסיונות, או בזמן-לתיקון ([[llm-adaptive-programming-error-explanations-2026|Moraru, Biswas & Gadiraju (2026)]]).

### מה הופך משוב ליעיל: עדות כיול

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai & Gilbert (2026)]] מספקים תוצאה ניסויית נקייה על עיצוב משוב עם רלוונטיות ישירה ל-AIED: **משוב אמיתי, מיידי, מחקר-למחקר, הקשור לחיזוי הביצוע הקודם של הלומד עצמו, הוא מה שמשנה התנהגות — חיזוי או אמונות בלבד אינם מספיקים**. בעיצוב ארבע-קבוצתי שלהם, משוב משולב עם חיזוי ביצוע קודם שיפר כיול והתנהגות, בעוד שחיזויים ללא משוב לא עשו דבר, והוספת תווית ביטחון-יתר/חסר מפורשת לא הוסיפה דבר. LLMs יכולים לשמש גם כשותפי כיול בתהליך הזה: [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] מצאו שאחרי עיצוב הרובריקה, LLMs הפגינו עקביות גדולה יותר מכמה מעריכים אנושיים ביישום ספי ביצועים — שימושי לפגישות נורמציה ולסביבות [[formative-assessment|formative peer feedback]], שבהם המודל מסייע לכייל את [[evaluative-judgment|evaluative judgment]] במקום להחליף אותו. זה מתיישר עם תפיסת מערכת המשוב של מאגר הידע: כוחו של המשוב טמון בסגירת הפער מול הערכה *שלו* של הלומד (הצמדת אספקה-ספיגה), ומשוב יעיל צריך להיות מיידי, מדויק, ומחובר מפורשות למה שהלומד חזה — עקרון תכן למערכות משוב בינה מלאכותית ולאימון [[feedback-literacy]] כאחד.

עמל, עם זאת, אינו אוטומטית המרכיב החסר. בניסוי בין-נבדקים רשום-מראש עם 302 מבוגרים אמריקאים הלומדים Python בסיסי, [[structured-reflection-ai-explanatory-feedback-2026|Asher, Gold & Carvalho (2025)]] שילבו משוב הסבר מותאם-אישית של [[llm|Claude Sonnet 3.5]] עם הנחיית הסבר-עצמי מובנית בשלושה שלבים — עבור כל קטע קוד שגוי, מה הקוד הנכון עושה ומדוע הניסיון של הלומד נכשל — וההרהור הנוסף לא קנה דבר. משתתפי Reflective Practice בילו 4.1 דקות בסקירת משוב לעומת 2.1 דקות ב-Practice פשוט (t(267) = 11.30, p < .001), מה שהשאיר מקום ל-2.0 בעיות תרגול בלבד במקום 3.4 (t(267) = 8.20, p < .001); כל בעיה הייתה שווה בכל דרך (Reflection × problem-number OR = 1.03, z = 0.23, p = .486), כך ש-Practice הסתיים בשליטה גבוהה יותר, 79% מול 65% (d = .41), ולעולם לא נפגר בהעברת-קרובה ב[[transfer-of-learning|transfer]], העברה-רחוקה, או פריטי הערכת-קוד. ההרהור גם לא סיפק את התועלת המטאקוגניטיבית שהוא כוון אליה: שיפוטי הלמידה לא נבדלו בין הזרועות, ותנאי התרגול היו מכוילים טוב יותר (חסרי-ביטחון ב-11 נקודות, לעומת צופי וידאו 20 נקודות בחסר-ביטחון, d = −.93) ודיווחו על [[cognitive-offloading|distraction]] פחות (d = −.80) מלומדים מהרהרים, שהרהוריהם הגיעו בממוצע ל-35 מילים בלבד. הקריאה של המחברים היא שמשוב הבינה המלאכותית סיפק כבר את [[scaffolding]] שהסבר-עצמי מוסיף בדרך כלל — מסר שמכנה את השגיאה, מסביר את הגישה הנכונה ומתאר את המושג הבסיסי משאיר מעט מאוד להנחיית הרהור לעשות — וכתיבת הרהורים בעודם עדיין לומדים תחביר לא מוכר התחרתה ישירות עם החזרה המגוונת שבונה כישיר להעברה. זה ממקם תנאי גבול עבור [[desirable-difficulties]] ו[[productive-failure]] על ציר עומק-העיבוד: עמל משתלם כאשר הוא מניע אחזור, יישום או השוואה נוספים, והוא מיותר כאשר הלומד כבר מקבל הסבר מותאם-אישית של השגיאה הספציפית שלו. זה נוגע גם לאופן שבו [[ai-feedback-quality|feedback quality]] משתפע עם [[self-regulated-learning|uptake]]: ככל שהמשוב מפותח ומכוון יותר, הצר מקום לשכבה נוספת להוסיף ערך, מה שמעביר את תשומת הלב התכנונית מהעמקת פרק אחד לבזבוז דקות תרגול נדירות על נפח, שונות בעיות, ותזמון הרהור לרגעים כמו מישור שזוהה — המחקר בדק שיפור בודד שלא נבדק, והמחברים מציינים שהגרסאות הללו נשארות פתוחות.

- **מיקוד ו[[adaptive-learning|adaptivity]] הם ממדים נפרדים של משוב.** ביאור של הערות מורה ו-LLM בשלושה קורסי כתיבה אוניברסיטאיים עם שבעה סוגי מיקוד משוב מראה שרוב המודלים מכסים כמעט כל סוג בעוד שאף אחד אינו תואם את התפלגות המורה ביניהם, ואף אחד אינו מעביר את המיקוד שלו על פני שלבי טיוטה כמו שמבצע מורה מומחה ([[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al., 2026]]).
- **רווחים מצטברים יכולים להסתיר שינויים מקזזים.** שלושה חודשים של משוב WISE Agent עם 260 תלמידי כיתה ששית סינים לא הניעו ציון נטיית חשיבה ביקורתית כולל (t=-0.854, p=0.394), אך Truth-seeking עלה (p<0.001) בעוד ש-Cognitive Maturity ירד (p=0.019) — ירידה שהמחברים קוראים כתלמידים המכיילים מחדש הבנה מוערכת-יתר. ([[ai-feedback-critical-thinking-writing-2026|Zhu et al. (2026)]])

### משוב על פני קשרי הערכה

מחקר המשוב של מאגר הידע משתרע על פני כל טווח קשרי ההערכה, כל אחד עם דינמיקות משוב מובהנות:

- **משוב פורמטיבי** הוא האתר הקנוני של משוב-ללומדה — [[formative-assessment|formative assessment]] מזין את [[self-regulated-learning|self-regulated learning]] באמצעות משוב שמגיע בעוד הלמידה בתהליך ([[automated-formative-assessments-a-level-sciences|automated formative assessments]], [[ai-feedback-enactment-workflow-2026|feedback enactment]]).
- **משוב סוּמַטיבי** הוא המשוב המצורף ל[[summative-assessment|summative assessment]] — בחינות סוף-יחידה, [[oral-assessment|oral exams]], ובחינות בפיקוח/ספר-סגור. בעידן הבינה המלאכותית, הגדרה הסוּמַטיבית היא שבה התנגדות לבינה מלאכותית חשובה ביותר (ראו [[summative-assessment]]): משוב על בחינה פומית בפיקוח או הערכה בספר-סגור בוחנת לומדה אמיתית, בעוד שמשוב על שיעורי בית בסיוע בינה מלאכותית יכול להיות מנופח. הערכות פומיות [[fenton-oral-exams-ai-authentic-assessment-2025|Oral assessments]] ממסגרות מחדש את רגע המשוב כדיאלוג אינטראקטיבי חי — המשוב הופך מיידי, שיחתי, ובלתי-נפרד מההערכה עצמה, וזה בדיוק מדוע הן מתנגדות להחלפה בבינה מלאכותית.
- **משוב עמיתים** מוסיף שכבה חברתית — [[peer-assessment|peer feedback]] מפתח אוריינות משוב ומוגבר ביתר תלמידים מבינה מלאכותית ([[becerra-aicofe-feedback-2026|AI peer feedback]], [[irwin-muller-efl-peer-feedback-literacy|GenAI in EFL peer feedback]]). אך משוב עמיתים טוב רק כמו המסירה בפועל שלו: בניסוי שדה לאורך סמסטר, פחות משני שלישים מהתלמידים שהוקצה להם משוב עמיתים לא קיבלו משוב טקסטואלי כלל, ורב ממה שנמסר היה שבח לא-מכוון — כך שכאשר משוב GPT-4 אינדיבידואלי החליף עמיתים בלתי-מהימנים, תלמידים שמרו על ההשתתפות הגבוהה ביותר ופרסמו את רווחי התוכן [[learning-gains|learning gains]] הגדולים ביותר ([[gpt4-feedback-student-activation-2026|Geschwind et al., 2026]]), עדות שהחזית של הבינה המלאכותית היא *אמינות* ולא עליונות טבועה.
- **פיגום הנחיה הופך GenAI למקשר משוב.** [[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al. (2026)]] מצאו שתלמידים שקיבלו הנחיות מובנות (הקשר, מטרה, תפקיד) למשוב עמיתים ייצרו יותר הסברים והצעות, ורק הקבוצה הזו הצטיינה על נתוני דחייה ועל טיפול בדעת המתנגד.
- **משוב ממוחשב** מגדיל מסירה — [[automated-assessment|automated scoring and feedback]] מניקוד חיבורים ועד ניקוד תשובות קצרות. [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] מרחיב את זה לבעיות [[quantitative-research|quantitative]] לא-מובנות: עורק אבחון [[machine-learning|XGBoost]] לשאלה מסקר טעויות המתויגות-רובריקה מתשובות מספריות שהוגשו על ידי תלמידים ל-Calculated Formula Questions בהנדסת כלכלה והופך אותן למשוב בשפה טבעית, בעוד שמבנה מבוסס-דיאלוג מבקש תשובות ביניים רק כאשר הביטחון נמוך — מאיזן בין דיוק המשוב לבין נטל האיסוף על התלמידים.

- **הערכה בכתיבה ממוחשבת היא כלי צד-מסירה עם עלות מדידה.** סקירה של 50 מחקרים אמפיריים (2019–2024) מצאה שהערכה בכתיבה ממוחשבת שיפרה דקדוק, פיסוק ובניית משפטים ב-25 מחקרים וצמצמה את נטל התיקון המכני של המורים ב-15, מה ששחרר זמן לטיעון, קוהרנטיות וארגון; הרווחים החזיקו רק היכן שהכלים ישבו בתוך מחזורי טיוטה ועריכה מובנים ולא כעזרים עצמאיים, הסתמכות כבדה עליהם קושרה לחשיבה ו[[critical-thinking|critical thinking]] ויצירתיות חלשים יותר, והכלים שחזרו נורמות אנגליות סטנדרטיות שמשתמשי EFL דיווחו כלא-מיושרות עם המסורות הרטוריות שלהם ([[ai-powered-writing-feedback-awe-review-2026|Gres et al., 2026]]).

תובנה מרכזית חוצת-הקשרים היא ש**אמינות המשוב תלויה בשלמות ההערכה אליה הוא מצורף**: המשוב נאמן רק כמו המידה שהוא מגיב אליה. בעידן הבינה המלאכותית זה דוחף מחנכים אל [[authentic-assessment|authentic]] ופורמטים סוּמַטיביים עמידי-בינה מלאכותית [[summative-assessment|summative formats]] שבהם המשוב שהתלמיד מקבל משקף לומדה אמיתית ולא פלט בסיוע בינה מלאכותית.

פרדיגמת "הערכה ללומדה" ממסגרת מחדש את המשוב כפילוסופיה כוללת ולא כרכיב. [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] מסנתזים את ספרות ההשכלה הגבוהה הרחבה כדי למסגר [[formative-assessment|formative]], משוב שוטף ומותאם-אישית כמרכזי לפילוסופיה הזו, מאיזנים בין מטרות פורמטיביות לסוּמַטיביות ומקדימים את [[agency|student agency]], [[regulation|ויסות עצמי]], וכישרון [[metacognition|metacognitive]]. הם מציינים, עם זאת, שב[[business-education|management education]] פרקטיקות עשירות-משוב נותרו מאומצות באופן לא-שווה: הערכה עצמית ועמיתים (אתר של משוב עמיתים) שולטות בספרות, בעוד שהערכה מחדש — שמשתמשת בסיכויים שניים המונעים-משוב לשיפור לומדה — נעדרת כמעט לחלוטין.


- **פעילות מוכחת אינה פעילות מיושמת.** בסקירת היקף של 421 מחקרים המחילים NLP על הערות הערכת תלמידים פתוחות, 61.3% ייצרו פלט ברמה של תוצאה מוכחת או גבוהה יותר, אך רק 11.6% הראו עדות שמשתמשים מכוונים העריכו או השתמשו בו ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva, 2026)]]).

### הצמדת אספקה-ספיגה

התובנה המרכזית על המשוב במאגר הידע היא ש**איכות המשוב ואוריינות המשוב הם שני צדדים של מערכת אחת**: משוב באיכות גבוהה הוא אינרטני ללא נמען בעל אוריינות, ותלמיד בעל אוריינות מרוויח מעט מאוד ממשוב גרוע. [[ai-feedback-quality]] מכסה את צד האספקה (האם המשוב מדויק, עדכני, ניתן-לפעולה?), בעוד ש[[feedback-literacy]] מכסה את צד הספיגה (האם התלמיד יכול לשפוט ולפעול לפיו?). לולאת המשוב היא מה שמחברת ביניהם — המנגנון שבו משוב באיכות, שהתקבל על ידי לומד בעל אוריינות, סוגר את הפער. תכן משוב בינה מלאכותית יעיל פירושו תכן גם של המערכת וגם של התלמיד.

אילו קיבולות בצד התלמיד חשובות נפרדות אמפירית: בין 1,507 תלמידים תיכון שקיבלו כל אחד מסר משוב ממוחשב סטנדרטי על טקסט ארגומנטטיבי, רק מעורבות התנהגותית במשוב וגישות אינסטרומנטליות כלפיו חזה ביצוע עריכה — תלמידים באחוזון ה-75 בכל אחד משני הממדים השתפרו בכ-0.10 או 0.11 נקודות WLE יותר מתלמידים ברי-השוואה באחוזון ה-25, בערך מאחוזון ה-46 ל-54 — בעוד שקיבולת גלובלית, מעורבות קוגניטיבית וגישות ניסיוניות לא היו קשורות לכך, ו[[technology-acceptance-model|perceived usefulness]] לא תיווך נתיב של אף ממד לביצועים. שימושיות פעלה על התוצאה האחרת במקום זאת: השפעת הקיבולת הגלובלית על עניין מצבי עברה כולה דרך השימושיות הנתפסת (indirect β = 0.09, 95% CI [0.06, 0.13]), כך שרווחי העריכה עקפו הרגלי פעולה עמידים על משוב בעוד עניין עקב אחר הערכת מסר מסוים. ([[jansen-argumentative-writing-feedback-receptivity-2026]])


מקור יכול להשתנות באופן שבו הוא מכייל, לא במידה שהוא מנקד: בניסוי רנדומלי, משוב בינה מלאכותית שרשרת-מחשבה הניח את מורה מנוסה על איכות הרובריקה אך לא ייצר רווחי עריכה גדולים יותר, בעוד שמשוב המורה נשאר מכויל על פני טיוטות ומשוב GenAI עקב אחר חוזק החיבור הראשוני ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]]).

מודל דו-שכבתי מראה כיצד ההצמדה מאורגנת סביב מכונה ללא האצלת שיפוט אליה. ב[[ai-agents-joyful-assessment-third-space-2026|El Khoury and Ma's worked example]], [[agentic-ai|agent]] מייצר טיוטת דוח ראיות מבוסס-רובריקה על כל תמלול עם כל דירוג קשור קטעים מצוטטים, והמורה בודק את הדוח, מוביל די-בריף ומחליט מה הראיות אומרות עבור התלמיד הזה — חלוקה שהמחברים מסכמים כבינה מלאכותית המארגנת ראיות בעוד המורה מפרש אותן. הטענה שלהם על ספיגה מבוססת-הערכה: משוב ואיטרציה מחוץ להיררכיות החברתיות שתלמידים מנווטים עם עמיתים ומורים קלים יותר לניסיון, והחזרה בקצב של התלמיד עצמו היא מה שהם טוענים שהופך ביטחון מזדמן להרגל מיושב של מעורבות במשוב.

### מדוע המשוב חשוב לבינה מלאכותית בחינוך

המשוב הוא אחד המנגנונים המשפיעים והמוכחים-לטובה ביותר בחינוך, ובינה מלאכותית גם מגבירה וגם מסתבכת אותו. משוב בינה מלאכותית שאורגן היטב יכול להתאים או לעלות על משוב אנושי ולהתרחב על פני קוהורטים, אך הוא דורש קיבולות לומד חדשות ([[feedback-literacy]], [[ai-literacy]]) ונושא סיכונים (קבלה ביקורתית, [[cognitive-offloading|Over-Reliance]]). ככל שמשוב שנוצר בבינה מלאכותית הופך אוניברסלי, מאגר הידע ממסגר את המשוב כמערכת שלמה — איכות, לולאה, אוריינות וקשר הערכה הפועלים יחד — ולא כרכיב בודד כלשהו.

- **משוב יכול למקד את מי-שנותן-המשוב.** אימון מורים הוא קשר משוב חקור-בחסר: מערכות ממוחשבות שמסננות-סדרות תגובות פתוחות של מורים כדי לסמן סוגי שבח (שבח מבוסס-עמל — הסוג הרצוי המוקדש-תהליך — מול מבוסס-תוצאה מול מבוסס-אדם, הסוג הפחות רצוי המייחס-תכונה) יכולות לספק משוב הסברי שמשנה התנהגות אימון. האילוץ הקושר הוא נתונים המתויגים-מומחה. גישת הגברה — GPT-4o מייצר תגובות מתויגות סינתטיות שמרחיבות מערך 13-מקרים בעל משאבים נמוכים ל-520, ואז מכוון GPT-3.5 — משקמת את רוב הפער: F2 +20.5% על שבח מבוסס-עמל, +17.3% על מבוסס-תוצאה, ו-+16.5% על הקטגוריה *הבלתי-נראת* מבוססת-אדם. מבחן ההכללה לסוג שבח בלתי-נראה הוא בדיקת התקפות שמפרידה את זה מ-overfitting, והמנגנון קרוב יותר לכיווץ מודל-מורה מאשר להגברה קלאסית. ([[xu-automated-feedback-tutor-training-2025]])

## מושגים מקושרים

- [[pedagogical-patterns]] — סדרות משוב שנבדקו, כולל מדוע משוב בינה מלאכותית באיכות גבוהה יותר לא ייצר יותר עריכה
- [[eportfolio]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[peer-assessment]]
- [[self-assessment]]
- [[automated-assessment]]
- [[assessment]]
- [[authentic-assessment]]
- [[assessment-validity]]
- [[self-regulated-learning]]
- [[ai-literacy]]
- [[scaffolding]]
- [[writing-education]]

## מאמרים מקושרים
- [[jansen-argumentative-writing-feedback-receptivity-2026]] — Automated feedback on argumentative writing: The role of secondary students' feedback receptivity and feedback perception
- [[ai-agents-joyful-assessment-third-space-2026]] — AI agents, joyful assessment, and third space
- [[student-perspectives-ai-writing-grading-2026]] — Student perspectives on transparent AI-assisted writing assessment (AlGhamdi 2026)
- [[usher-faraon-who-grades-best-2026]] — Comparing ChatGPT, peer, and instructor grading across project quality levels (Usher & Faraon 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Teacher vs. GenAI feedback: students revise less with AI
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — GenAI feedback and self-regulated learning: perceived source matters
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — GenAI-assisted peer feedback in collaborative argumentation
- [[luo-eaton-ai-student-feedback-ethics-2026]] — Ethics of AI in student feedback
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Metacognitive training facilitates optimal cognitive offloading (Ngai & Gilbert 2026)
- [[liu-deris-ai-feedback-literacy-uptake]] — AI Feedback Literacy scale and uptake prediction (Liu & Deris 2025)
- [[zhan-boud-dawson-genai-feedback-engagement]] — GenAI as enabler of student feedback engagement (Zhan, Boud, Dawson & Yan 2025)
- [[mendoza-ai-feedback-feedback-literacy-srl]] — Feedback literacy moderates AI feedback → SRL (Mendoza et al. 2026)
- [[rethinking-ai-writing-feedback-literacy]] — Feedback literacy scripts for AI-assisted writing (Dai 2026)
- [[jin-genai-learning-analytics-feedback-literacy]] — GenAI learning analytics in feedback (Jin et al. 2025)
- [[tubino-adachi-ai-automated-feedback-literacy]] — AI automated feedback tool for feedback literacy (Tubino & Adachi 2025)
- [[irwin-muller-efl-peer-feedback-literacy]] — GenAI in EFL peer feedback for feedback literacy (Irwin & Muller 2026)
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[care-full-feedback-genai]] — Care-full feedback design with GenAI
- [[ai-feedback-ecosystem-higher-education-2026]] — The feedback ecosystem in higher education: AI reworks feedback relations, and humans as the loop (Bearman et al. 2026)
- [[learner-centered-feedback-ai]] — Learner-centered AI feedback practices
- [[genai-feedback-design-multisite-experiment]] — Multi-site GenAI feedback design
- [[ai-feedback-critical-thinking-writing-2026]] — AI feedback and critical thinking in writing
- [[richmond-nicholls-genai-psych-feedback-ai-literacies]] — GenAI assessment builds psychological, feedback, and AI literacies
- [[zhao-learnlens-feedback-educators-loop]] — LearnLens: curriculum-grounded feedback with educator oversight (Zhao et al. 2025)
- [[sequenced-ai-feedback-learning]] — Sequenced AI feedback studies
- [[becerra-aicofe-feedback-2026]] — AI peer feedback systems
- [[automated-formative-assessments-a-level-sciences]] — Automated formative assessments in A-level sciences
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated writing feedback
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP vs LLM rationales for rubric-based teaching feedback
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[student-perceptions-ai-study-productivity-2026]] — Students' Perceptions of Artificial Intelligence Tools for Study Productivity and Learning: An Exploratory Survey Study
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[gpt4-feedback-student-activation-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[tripartite-feedback-framework-ai-assessment-2026]] — Tripartite framework: sorting feedback by epistemic status and the five boundary principles for AI involvement (Venetsanos 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Benefit or bottleneck? Structured reflection on AI explanatory feedback (Asher, Gold & Carvalho 2025)
- [[bounded-reliance-ai-writing-feedback-2026]] — Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[nazaretsky-feedback-source-bias-2025]] — Who gives feedback matters: source labels shift ratings when the text is held comparable (Nazaretsky et al. 2025)
- [[ai-powered-writing-feedback-awe-review-2026]] — AI-Powered Feedback System for Writing: A Review of Automated Writing Evaluation (AWE) Tools
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — What a revision does to the writer's stance: peer feedback turns argumentative essays more contractive, AI revision keeps the Contract/Expand balance (Zhao & Ji 2026)
- [[xu-automated-feedback-tutor-training-2025]] — Improving automated feedback systems for tutor training in low-resource scenarios through data augmentation (Xu et al. 2025)
- [[etq-ai-conversational-teacher-training-2026]] — אבחון שיחה AI לתפיסות-הוראה מוטעות עם דיאלוג מונחה-ראיות (Miranda & Calvani 2026)
