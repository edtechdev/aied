---
title: מודלים של אימוץ טכנולוגיה
created: "2026-10-12T19:30:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, technology-acceptance-model]
audience: [learners]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
reviewed_by: [editor]
translation_of: concepts/technology-acceptance-model
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

**מודלים של אימוץ טכנולוגיה** הם המסגרות התיאורטיות המשמשות להסביר ולנבא מדוע יחידים ומוסדות מקבלים, מאמצים, וממשיכים להשתמש ב[[ai-technologies|טכנולוגיות]] חדשות — ובמחקר על בינה מלאכותית בחינוך, מדוע לומדים, מורים וארגונים מאמצים כלי [[generative-ai|בינה מלאכותית יוצרת]]. במקום מודל בודד, זו משפחה של תיאוריות השורשות במחקר מערכות-מידע ובפסיכולוגיה חברתית, שמתוכה **מודל קבלת הטכנולוגיה (TAM)** הוא הנמצא בשימוש הנפוץ ביותר. מאגר הידע מתייחס למודלים האלה יחד מפני שמחקרי אימוץ GenAI משלבים אותם כמעט-כלל (TAM + UTAUT, TAM + TPB, UTAUT + ARCS) ומפני שמבניהם הליבתיים — תועלת נתפסת, קלות שימוש נתפסת, והשפעה חברתית — חוזרים כמעט בכל מחקר על קבלת בינה מלאכותית בחינוך.

## שאלות למחשבה

- חשבו על פעם שאימצתם אפליקציה, כלי או שירות בינה מלאכותית חדש — ועל פעם שנטשתם אחד. מה הניע כל החלטה: כמה הוא נראה שימושי, כמה הוא היה קל, או מה שאנשים סביבכם עשו? איזה גורון חשוב ביותר לדעתכם, והאם סקר באמת יכול ללכוד אותו?
- אמונה נפוצה היא "אם כלי שימושי בבירור, אנשים ישתמשו בו". ראיתם מצבים שבהם טכנולוגיה שימושית באמת עדיין לא נקלטה, או שטכנולוגיה מוגבלת בבירור התפשטה בכל זאת? מה עשוי להסביר את הפער בין תועלת אובייקטיבית לאימוץ בפועל?
- מסגרות אימוץ כמו TAM תוכננו בשנות ה-80 למערכות פשוטות למדי. אם השתמשתם בבינה מלאכותית יוצרת, באילו דרכים היא שונה ממעבד תמלילים או מ[[edtech-platform|מערכת ניהול למידה]] — ומדוע מודל הבנוי סביב "קלות שימוש" ו"תועלת" עשוי להתקשות ללכוד כיצד אנשים מתייחסים למשהו שמדבר בחזרה?
- [[research-methods-aied|חוקרים]] אומרים לעיתים קרובות שסיכון נתפס ואמון פחות חשובים לאימוץ בינה מלאכותית מאשר הצפוי. לפני שתקראו הלאה, מה אתם מנבאים: האם סטודנטים מאמצים בינה מלאכותית כי הם סומכים עליה, למרות הסיכונים, או שהחששות האלה אכן שוליים ליד נוחות ולחץ חברתי?
- העמוד טוען שמסגרות אימוץ מתייחסות לשימוש בכלי כהחלטה חד-פעמית, אך שימוש יעיל עשוי להיות שיפוט מתמשך. היכן בפרקטיקה שלכם או של הסטודנטים שלכם נראה הגבול בין "בחירה להשתמש בבינה מלאכותית" ל"החלטה מתמדת כיצד להשתמש בה היטב" מטושטש — ומה היה משתנה אם היינו מודדים זאת במקום קליטה פשוטה?
- חוקרים מסוימים מקבצים לומדים ל"פרסונות אימוץ" שונות במקום להניח שמודל אחד מתאים לכולם. אילו הבדלים אתם רואים בקרב הלומדים, העמיתים או הסטודנטים שלכם שמודל אימוץ ממוצע בודד עשוי להסתיר — וכיצד ההבדלים האלה עשויים לעצוב את הדרך שבה אתם תומכים בהם?

## מבוא

**ראיות [[meta-analysis-systematic-review|מטא-אנליטיות]] על אימוץ בינה מלאכותית.** [[teo-ai-adoption-tertiary-meta-analysis-2026|מטא-אנליזה של אימוץ בינה מלאכותית בקרב סטודנטים להשכלה שלישית]] (233 מתאמים, 32 מחקרים, N = 16,977) מוצאת מתאמים חיוביים מתונים לגורמים אינדיבידואליים (r = 0.57), הקשריים (r = 0.53), וטכנולוגיים (r = 0.50), כאשר כוונות שימוש הן המנבא החזק ביותר (r = 0.64) וסיכונים נתפסים/אמון חלשים מהצפוי. הביקורת המרכזית שלה היא שהתחום **נשען יתר על המידה על מסגרות TAM/UTAUT מסורתיות** שקדמו למערכות אינטליגנטיות מודרניות ומזניחות גורמים ספציפיים ל-AI כמו אנתרופומורפיזם ואתיקה — בטענה שהפערים האלה חשובים לקידום התיאוריה והמדיניות מבוססת-הראיות.

## משפחת המודלים

### מודל קבלת הטכנולוגיה (TAM)
שהוצע על ידי Davis (1989), TAM מסביר אימוץ באמצעות שתי אמונות ליבתיות — **תועלת נתפסת (PU)** ו**קלות שימוש נתפסת (PEOU)** — שמעצבות את **הגישה (ATT)** של המשתמשים, ואז את **הכוונה ההתנהגותית (BI)**, ואז את השימוש בפועל. מעוגן בתיאוריית מערכות-מידע (מותאמת מתיאוריית הפעולה המושכלת), TAM הפך למסגרת הדומיננטית לאימוץ [[generative-ai|GenAI]] בחינוך. במחקר GenAI חינוכי הוא מורחב לעיתים קרובות עם [[ai-literacy]], [[trust]], השפעה חברתית, [[self-determination-theory|הגדרה עצמית]], ו**שימוש ביקורתי** ללכוד את מורכבות האימוץ מעבר לקליטה פשוטה.

### UTAUT / UTAUT2 / UTAUT3
**התיאוריה המאוחדת של קבלת ושימוש בטכנולוגיה** מגבשת את TAM עם שמונה מודלים קודמים לארבעה נדבנים ליבתיים — ציפיית ביצועים, ציפיית מאמץ, השפעה חברתית, ותנאים מקלים (כאשר UTAUT2 מוסיף מוטיבציה הדונית, ערך מחיר, והרגל; UTAUT3 מוסיף חדשנות אישית). מאגר הידע מחיל UTAUT על אוכלוסיות מורים וסטודנטים: [[mathematics-teachers-chatbot-motivation-2026|מורי מתמטיקה תיכוניים באוסטריה]] (UTAUT עם 448 מורים), [[pre-service-science-teachers-ai-perceptions-2026|מורי מדעים טרום-שירותים בגאנה]] (UTAUT + TPB), ו[[tian-genai-learning-adoption-pathways-2026|סטודנטים בלסותו]] (UTAUT3 + ARCS, באמצעות PLS-SEM ו-fsQCA). [[jacome-vasconez-chatgpt-adoption-xai-2026|Jácome-Vásconez et al.]] מרחיבים את UTAUT2 עם בינה מלאכותית ניתנת-להסבר (Random Forest, SHAP, NCA, IPMA, K-Means) עבור 522 סטודנטים אוניברסיטאיים, ומוצאים ש**הרגל** הוא המנבא החזק ביותר של כוונת ChatGPT ומראים ש**ציפיית מאמץ היא תנאי נדרש ולא מניע לינארי** — תוצאה הנראית רק כאשר XAI משלים את הרגרסיה.

### תיאוריית ההתנהגות המתוכננת (TPB)
TPB מסבירה כוונה באמצעות גישה, נורמות סובייקטיביות, ושליטה התנהגותית נתפסת. היא מצורפת כמעט-כלל ל-TAM/UTAUT במחקרי אימוץ AI — לדוגמה, [[genai-chatgpt-adoption-ethics-students-2026|Rizun et al.]] משלבים TAM, TPB, UTAUT, ומסגרת FATE ([[bias-mitigation|הוגנות]], אחריות, שקיפות, אתיקה) כדי למדל את המניעים ההתנהגותיים וה[[ethics|אתיים]] של אימוץ ChatGPT בקרב סטודנטים.

מחקר אימוץ נעצר כמעט-כלל בכוונה; הרחבת TPB שבדקה במקום זאת דחייה למרות כוונה אמיתית מצאה שהשליטה ההתנהגותית הנתפסת היא המנבא השלילי החזק ביותר של דחיות למידה בסיוע GenAI (β = −0.331) בקרב 1,243 סטודנטים לתואר ראשון, כאשר הקישור כוונה–דחייה היה מובהק רק בחרדת GenAI למידה מתונה-עד-גבוהה ([[genai-learning-procrastination-planned-behavior-2026|Li et al. (2026)]]).

### דיפוזיית חידושים (DOI)
תיאוריית ה-DOI של Rogers מסבירה אימוץ כתהליך חברתי שבו חידושים מתפשטים באוכלוסיות לאורך זמן, ומדגישה תכונות חידוש (יתרון יחסי, תאימות, מורכבות, אפשרות ניסיון, נצפות) וקטגוריות מאמצים. היא מופיעה בניתוחים ברמה ה[[governance|מוסדית]] של מאגר הידע, לדוגמה, [[alrahmi-org-drivers-ai-adoption-he-2026|Al-Rahmi et al.]] משלבים את מסגרת טכנולוגיה–ארגון–סביבה (TOE) עם DOI כדי למדל אימוץ AI ארגוני באוניברסיטאות סעודיות.

### טכנולוגיה–ארגון–סביבה (TOE)
TOE מעצבת אימוץ כמושפע מהקשרים הטכנולוגי, הארגוני והסביבתי — משלים ל-TAM/UTAUT ברמה האינדיבידואלית לחקר אימוץ מוסדי (ראו [[alrahmi-org-drivers-ai-adoption-he-2026]]).

## יישומים במאגר הידע

מודלי אימוץ מיושמים לאורך מאגר הידע כדי למדל קליטה של כלי AI בקרב סטודנטים ו[[teacher-role|מורים]]:

- **הרחבת שימוש ביקורתי:** [[tam-critical-use-genai-engineering-2026|Nguyen et al.]] הרחיבו את TAM עם *שימוש ביקורתי* עבור סטודנטים להנדסה/מדעי המחשב, ומוצאים שגישות ושימוש ביקורתי מנבאים כוונה ישירות — ושימוש ביקורתי מגן מפני [[cognitive-offloading|הסתמכות מופרזת]].
- **מודל סוציו-קוגניטיבי מאוחד:** [[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]] שילבו TAM עם UTAUT עבור סטודנטים להנדסה בבנגלדש (ומסבירים 64% משונת השימוש).
- **פרופילים ממוקדי-אדם:** במקום מודלים ממוקדי-משתנה, [[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed]] מקבצים פרסונות אימוץ GenAI, ו[[chen-preservice-teachers-chatgpt-lpa-2026|Chen et al.]] משתמשים בניתוח פרופיל סמוי כדי לזהות ארבעה פרופילי קבלת ChatGPT בקרב מורים טרום-שירותיים — ומראים את תנועת התחום מעבר לחשבונות לינאריים של מודל בודד.
- **אימות חוצה-תרבות:** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno et al.]] מאמתים חוצה-תרבות מבני מוטיבציה הקשורים לאימוץ בשוויץ ובסין.
- **מתאמים פסיכולוגיים:** [[acceptance-ai-english-tools-2026|Wu et al.]] בונים על TAM כדי לקשר מוטיבציה, [[self-efficacy]], חרדה, ותפיסת סיכון לקבלה של למידת אנגלית בסיוע בינה מלאכותית.
- **ביקורת יכולת [[regulation|רגולטורית]]:** [[ai-anxiety-strategic-regulation-writing-2026|Kim]] טוען שמודלי TAM ממוקדי-אימוץ מתייחסים לשימוש כהחלטה יציבה, בעוד שימוש יעיל בבינה מלאכותית הוא תהליך מתמשך של שיפוט, מחיקה, וקליטה סלקטיבית — ממסגר מחדש את [[ai-literacy]] כיכולת רגולטורית ו[[critical-thinking]] ולא כקבלה.

הוספת יכולת ממשפחת [[tpack|TPACK]] לצד מסגרות אמונה כמו תיאוריית ההתנהגות המתוכננת כמנבאים מקבילים מזמינה חפיפת מבנים ומשאירה את הסדר הסיבתי של יכולת, גישה ושליטה לא-מוחלט; מודל היכולת–ההחלטה במקום זאת ממקם יכולת AI-TPACK במעלה הזרם של הגישה ושליטה ההתנהגותית הנתפסת ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

- **נדבני ML של אימוץ ChatGPT:** גישת ML חקרנית בחנה כיצד תפיסות ודמוגרפיה של סטודנטים מתייחסים לשימוש אקדמי נוטה ב-ChatGPT, באמצעות ניתוח SHAP לזיהוי מבני למידה מרכזיים — תוך העדפת משמעות חינוכית על מקסום ביצוע אלגוריתמי ([[determinants-chatgpt-use-higher-education-2026]]).

- **[[explainable-ai|הסבריות]] ורלוונטיות תחומית כמנופי קבלה עבור מורים:** בהתאמת תיאוריית אמון-באוטומציה לקבלת מורים להמלצות בינה מלאכותית, [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] מצאו שהמובנות (המועלית על ידי בינה מלאכותית ניתנת-להסבר) התקשרה חיובית הן לאמון והן לקבלת כלי קיבוץ בינה מלאכותית, ושהסברים מונעי-תחום ב[[curriculum-design|שפה תכניתית]] גברו על אלה מונעי-נתונים של חשיבות תכונות בשלושתם. הקבלה הונעה נוסף על ידי יישור [[pedagogy|פדגוגי]] ופוטנציאל הפחתת עומס עבודה — גורמים סיטואציוניים שמבני TAM/UTAUT סטנדרטיים לוכדים לעיתים רחוקות, ומחזקים את הטענה להרחבת מודלי אימוץ בהקשר ובהסבריות.
- **קבלה נמדדת ברמה של חומרים הוראיים (2026).** [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]] הפעילו ציפיית ביצועים, ציפיית מאמץ, משחקיות נתפסת, וכוונה התנהגותית עבור שני מדריכי אוריינות AI מדורגים-גיל בשימוש של 794 תלמידי [[k-12]] ו-37 מורים, ומאמתים את המבנה הארבע-גורני עם EFA ו-CFA של דגימה מפוצלת ותומכים באי-וריאציה של מדידה לאורך המהדורות 9-12 ו-13-18. לומדים צעירים יותר דיווחו על רמות גבוהות יותר בכל ארבעת המבנים, והמשחקיות הייתה המתאם החזק ביותר של כוונה בשתי הקוהורטות — כאשר המקדם התקני של משחקיות-לכוונה עלה על 1.00 בקבוצה הצעירה יותר ו-HTMT של .950 בין שני המבנים. המחברים קוראים את זאת כחפיפת מבנים ודיכוי אפשרי ולא כאפקט ענק, תזכורת שימושית שכלי קבלה המיושמים על חומרים יכולים לייצר גורמים מעורבים אמפירית שמסבים פרשנות מבנית.

## מגבלות והרחבות

ההתמקדות הקוגניטיבית של TAM גם תופסת פחות מדי ממדים רגשיים ויחסיים של שימוש בבינה מלאכותית. [[akbaba-nursing-ai-experiences-tam-2026|מחקר איכותני של סטודנטים וסגל סיעוד]] מצא שליד ארבעת מבני ה-TAM הקלסיים, משתתפים — בעיקר סטודנטים — תיארו את הבינה המלאכותית כמקור של תמיכה פסיכוסוציאלית: נחמה רגשית במתח ומרחב חסוי להרהור. זה מרחיב את התועלת הנתפסת מעבר לרווחי ביצועים ל[[well-being|רווחה]] בהכשרה מקצועית תובענית [[professional-training|מקצועית]], ומציע שמודלי אימוץ צריכים להתייחס לגורמים אפקטיביים ופסיכוסוציאליים, לא רק לתועלת אינסטרומנטלית.

**תפיסת [[agency|אוטונומיה]] והימנעות מסיכון כהרחבות ספציפיות-כלי.** סקר [[mixed-methods-research|רב-שיטות]] של 287 מורים בעלי ניסיון ב-GenAI ב-27 מדינות ואזורים ([[dai-genai-frenemy-teaching-autonomy-2026|Dai et al. (2026)]]) מרחיב את TAM בכיוון שמשפחת המודלים barely פגעה: ה*אוטונומיה* הנתפסת של הכלי עצמו. תוך הוספת אוטונומיה מלאכותית נתפסת (כמה עצמאית המורים מאמינים ש-GenAI יכול לבצע משימה הוראית מוקצית) והימנעות מסיכון למבנים הקלסיים, המודל המבני המשופר שלהם הסביר 79.8% משונת הכוונה ההתנהגותית (χ²(97) = 202.597, CFI =.963, TLI =.954, RMSEA =.062, SRMR =.041), כאשר תועלת נתפסת הייתה שוב דומיננטית (PU → BI β =.832, p <.001) וקלות שימוש הזינה תועלת (PEU → PU β =.479). התוצאות החינוכיות הן ההסטות. אוטונומיה מלאכותית לא פעלה ישירות על כוונה (β =.026, ns) אלא פעלה דרך תועלת (AA → PU β =.188, p <.001; עקיף AA → PU → BI =.156, 95% CI [.082,.240]) — מורים שראו את GenAI כיותר מסוגל מצאו אותו יותר שימושי, לא יותר מיידית לאמצות. הימנעות מסיכון הורידה כוונה (RA → BI β = −.163, p <.001) מבלי להוריד תועלת נתפסת (RA → PU ns), מפני שהחששות של המורים התמקדו בשימוש של *הסטודנטים* — רמאות ו[[academic-integrity|יושר]], ידע בסיסי מוחלש וחשיבה מסדר גבוה, [[hallucination-risk|הזיות]], אינטראקציה אנושית מופחתת, וסיכונים אתיים, משפטיים ושל [[equity-in-ai-education|שוויון]] — ולא בשלהם. קלות שימוש הייתה לא-מובהקת בסך הכל (PEU → BI β =.068) אך מובהקת בקרב 225 המורים שהשתמשו בפועל בבינה מלאכותית בהוראה (β =.138, p <.05), הדפוס המוכר שמאמץ נרשם רק לאחר מפגש אמיתי; גישה נאלצה להיפרש כאשר המתאם שלה עם כוונה (r =.929) הפר תוקף דיסקרימיננטי. המורים מיקמו את GenAI ברמות חצי-אוטונומיות (130 ברמה 2, "סיוע מורה"; 94 ברמה 3, "אוטומציה חלקית"; אחד ברמה 6) והתעקשו שהחלטות אימוץ יינקטו מקרה-במקרה. TAM עדיין מנבא כוונה היטב, אך עבור בינה מלאכותית הפונה למורים המבנים שמזיזים את המחט הם ספציפיים-כלי: כמה אוטונומי הכלי נראה, ולמי הסיכון מתייחס. התווית "frenemy" של המחברים — מוערך ככלי תמיכה, נחשד כסוכן אוטונומי — היא הנגד הצד-מורה להרחבות הפונות-לסטודנטים המתועדות לעיל.

**תפיסת סיכון כהרחבה ספציפית-ממד.** סקר של 814 סטודנטים אוניברסיטאים בסין ([[risk-perception-genai-perceived-benefits-2026|Du, Ning, Shi & Chen (2026)]]) משלב תיאוריית ההערכה הקוגניטיבית ותיאוריית המוטיבציה להגנה לתוך TAM/UTAUT2 כדי לשאול לא האם סטודנטים מאמצים [[generative-ai|בינה מלאכותית יוצרת]] אלא מה הם מרוויחים ממנה. ההנחה של משפחת המודלים שסיכון מדכא אימוץ באופן אחיד אינה שורדת: תפיסת סיכון מתפצלת לממדים של מידע, אבטחה, טכני, [[ethics|אתי]], ומשפטי שמניעים יתרונות בכיוונים מנוגדים. סיכון אבטחה — איום שהסטודנטים מאמינים שהם יכולים לנהל דרך פרקטיקות [[privacy|פרטיות]] — התקשר *חיובית* לסיוע אקדמי נתפס ולפיתוח מיומנויות, בהתאם להתמודדות ממוקדת-בעיה, בעוד סיכון מידע, שהלומדים אינם יכולים לאמת בקלות, שחק תמיכה פסיכולוגית ורגשית, יתרונות יומיומיות ופנאי דרך הימנעות. ניתוחי סף הראו עוד שהשפעות משנות סימן מעבר לנקודות-חתוך ספציפיות-ממד, וניסיון שימוש היה משמעותי באופן עצמאי: סטודנטים עם יותר משנה של שימוש ב-GenAI דיווחו על יתרונות גבוהים יותר בארבעה תחומים. ההשלכה המעשית למחקר קבלה היא ש"סיכון נתפס" הוא מבן גס מדי למידול — יכולת שליטה, לא הנוכחות הבלעדית של סיכון, היא שקובעת אם סטודנטים מתערבים או נסוגים.

הקישור של סיכון לשימוש תלוי גם במערכת: ב-49 מערכות TALIS 2024 שהנפיקו את הפריטים, תועלת AI נתפסת התקשרה חיובית לשימוש בינה מלאכותית בכל 49, בעוד סיכון נתפס התקשר שלילית ב-40 וחיובית בתשע ([[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin (2026)]]).

## מושגים מחוברים

- [[business-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ethics]]
- [[trust]]
- [[cognitive-offloading]]
- [[self-determination-theory]]
- [[research-methods-aied]]
- [[student-modeling]]
- [[framing-ai-use-for-students]]

## מאמרים מחוברים
- [[dai-genai-frenemy-teaching-autonomy-2026]] — GenAI as "frenemy": artificial autonomy and risk aversion extend TAM for teachers (Dai et al. 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — Nursing AI experiences; psychosocial extension of TAM
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — GenAI adoption personas via clustering
- [[tian-genai-learning-adoption-pathways-2026]] — Symmetric and asymmetric pathways in GenAI adoption (UTAUT3 + ARCS)
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Differential GenAI engagement by gender and motivation
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — TOE + DOI model of organizational AI adoption in higher education
- [[tam-critical-use-genai-engineering-2026]] — Extended TAM with critical use for engineering/CS students
- [[socio-cognitive-genai-adoption-engineering-2026]] — Unified socio-cognitive model (TAM + UTAUT) for engineering education
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
- [[genai-reliance-types-scale]] — GenAI reliance types scale
- [[llm-reliance-types-undergrad]] — LLM reliance types among undergraduates
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI English tools
- [[genai-chatgpt-adoption-ethics-students-2026]] — Behavioral and ethical drivers of student ChatGPT adoption
- [[mathematics-teachers-chatbot-motivation-2026]] — UTAUT and teacher chatbot motivation
- [[pre-service-science-teachers-ai-perceptions-2026]] — UTAUT + TPB for pre-service science teachers in Ghana
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Pre-service teacher ChatGPT acceptance profiles (LPA)
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — Meta-analysis of AI adoption factors; critiques TAM/UTAUT
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — XAI-augmented UTAUT2: habit as strongest predictor, four adoption profiles (Jácome-Vásconez et al. 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — Material-level PE/EE/playfulness/intention model for age-tiered AI literacy guidebooks, with documented playfulness-intention construct overlap
- [[risk-perception-genai-perceived-benefits-2026]] — CAT + PMT folded into TAM/UTAUT2: dimension-specific and non-monotonic risk effects on perceived GenAI benefits (Du, Ning, Shi & Chen 2026)

- [[capability-decision-model-teacher-readiness-2026]] — Ordered alternative to bolting TPACK capability onto Theory of Planned Behavior adoption models
- [[teachers-ai-belief-profiles-talis-2024-2026]] — Person-centered TALIS 2024 profiles of perceived AI utility and risk across 49 systems
- [[genai-learning-procrastination-planned-behavior-2026]] — TPB extension measuring GenAI-assisted learning procrastination and anxiety's moderation of the intention–delay link
