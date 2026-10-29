---
title: חינוך מתמטי
created: "2026-10-12T21:05:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **חינוך מתמטי** — המחקר של כיצד סטודנטים לומדים מתמטיקה וכיצד בינה מלאכותית יכולה לתמוך בהוראה מתמטית, וכולל חונכות אפקטיבית, אבחון קוגניטיבי מעבודת כתיבת יד, הערכת [[desirable-difficulties|מאבק פרודוקטיבי]], התנהגות חיפוש עזרה, שיתוף פעולה מורה-בינה מלאכותית ליצירה חזותית, ו[[student-ai-interaction|מסלולי אינטראקציה בין סטודנט לבינה מלאכותית]]. חינוך מתמטי הוא תחום ה[[discipline-specific-aied|מחקר]] ה[[research-methods-aied|פעיל]] ביותר הממוקד לתחום דעת במאגר הידע הזה, עם 32 מאמרים שביחד חוקרים כיצד בינה מלאכותית יכולה לתמוך — ולעתים לערער — למידה מתמטית משברים אלמנטריים ועד להשכלה גבוהה.

## שאלות למחשבה

- בעיות מתמטיקה יש להן תשובות נכונות ברורות אך דורשות חשיבה עשירה, וזו הסיבה שמתמטיקה היא מגרש ניסוי אהוב לחונכות בבינה מלאכותית. כשאתם תקועים על בעיה מתמטית, איזה סוג של עזרה באמת עוזר לכם ללמוד — תשובה, רמז, או שאלה — ועל איזה מהם בינה מלאכותית נוטה כברירת מחדל?
- מחקר מוצא שחונכי בינה מלאכותית נוטים כברירת מחדל לעזרה מוגזמת, ודוחפים לעתים נדירות לרמת קשב גם כאשר סטודנטים מוכנים. אם אתם מעצבים חונך, כיצד תחליטו מתי למנוע עזרה כדי לשמר את ה"מאבק הפרודוקטיבי" שבונה הבנה?
- העמוד מראה סטודנטים שמבקשים רמזים מוקדם מדי או קוראים אותם באופן שטחי נוטים ללמוד פחות. האם אי פעם הגעתם לרמז מתוך חוסר סבלנות ולא ממאמץ אמיתי? מה זה מגלה על כיצד תמיכת בינה מלאכותית יכולה לערער ולא לתמוך בלמידה?
- מערכות אבחון קוגניטיבי מבוססות בינה מלאכותית מזיות לפעמים ראיות ומתייחסות לטעויות ביתר, ואפילו מודלים חזקים מתחתים לביצועים בקריאת עבודת הכתיבת-יד בפועל של הסטודנטים. כמה הייתם בטוחים בחונך שמאבחן מה טעיתם מעבודת השריטה שלכם?
- מודלים לשוניים גדולים הופכים את תשובותיהם לאורך נוסחות בעיה שוות-ערך מתמטית — אותה בעיה המוצגת אחרת משנה את התוצאה. מה זה אומר על שימוש בבינה מלאכותית לציון או אבחון של הבנה מתמטית?

## מבוא

חינוך מתמטי הפך לתחום העיקרי למחקר [[ai-education|בינה מלאכותית בחינוך]] מכיוון שבעיות מתמטיות יש להן תשובות נכונות ברורות אך דורשות חשיבה עשירה — מה שהופך אותן לאידיאליות ללמידת יעילות חונכות, תוקף הערכה, וכיצד כלי בינה מלאכותית מתקשרים עם קוגניציה ורגש של הסטודנט. המאמרים במאגר הידע הזה חושפים הן את ההבטחה של חונכי מתמטיקה מבוססי בינה מלאכותית והן אתגרים מתמשכים: פיגום מוגזם המערער מאבק פרודוקטיבי, הזיה באבחון קוגניטיבי, והקושי של איזון סיוע בינה מלאכותית עם למידה אמיתית.

### נושאי מחקר מרכזיים

**חונכות מתמטית בפיגום באמצעות בינה מלאכותית** הוא האשכול הגדול ביותר, עם ארבעה מאמרים החוקרים כיצד חונכי בינה מלאכותית תומכים או מערערים למידה מתמטית. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]** מדגים שהוספת מודעות אפקטיבית — זיהוי רגשות סטודנטים מטקסט והבעות פנים — מייצרת יתרון בשיעור ניצחון של 23 נקודות בחונכות מתמטית, ומתחברת ל[[affective-computing|מחשוב אפקטיבי]] ול[[affective-tutoring|חונכות אפקטיבית]]. **[[zhang-tutormoments-2026|TutorMoments]]** מעריך 454 תמלולי חונכות מתויגים על ידי מורים מכיתות ב'-ז' ומצא שמודלים חזיתיים נוטים כברירת מחדל לעזרה מוגזמת, ודוחפים לעתים נדירות לרמת קשב גם כאשר סטודנטים מוכנים — מערער ישירות את ההתאמה בין מועילות בינה מלאכותית לעקרונות ה[[scaffolding|פיגום]]. **[[lak2026-hint-button-unproductive-use|An et al.]]** ניתחו 999 סטודנטים לאורך שלושה סמסטרים ב-ITS *Decimal Point*, ומצאו שבקשות רמז מוקדמות וקריאת רמז שטחית חוזות באופן עקבי הפחתה ב[[learning-gains|רווחי למידה]], גם לאחר שליטה ב[[prior-knowledge|ידע קודם]] — ממצא שמתחבר ל[[help-seeking|חיפוש עזרה]] ול[[learning-analytics|אנליטיקת למידה]].

**תמיכה סוציו-רגשית יכולה לקנות יעילות ולא הישג.** הוספת שכבת מיינדפולנס של מודל לשוני גדול לחונך אלגברה לכיתה ז' הותירה למידה וחרדת מתמטיקה מצבית ללא שינוי בין הזרועות (42 מתוך 252 סטודנטים נותחו לאחר שיבושים), אך סטודנטים בתנאי מיינדפול הגיעו ללימודה שוות ערך בפחות זמן ובפחות רמזים מבוקשים ([[mindful-llm-math-tutoring-2026|Rief et al., 2026]]).

**[[cognitive-diagnosis|אבחון קוגניטיבי]] והערכה** חוקרים את יכולת הבינה המלאכותית להעריך חשיבה מתמטית. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] מוסיפים מחקר קושי-פריט בקנה מידה גדול החוצה הן מתמטיקה והן קריאה: לאורך 5,170 פריטי K-5 מכוילים תחת מודל IRT של ראץ', דירוגי קושי zero-shot של GPT-4o התאימו קורלציה בינונית-חזקה לקושיים האמיתיים (r = 0.83 מתמטיקה, r = 0.81 קריאה) אך היו לא אחידים לאורך כיתות, בעוד גישה מבוססת-תכונה (תכונות שחולצו על ידי מודל לשוני גדול לתוך מודלים מבוססי-עץ) הגיעו לקורלציות עד r = 0.87, עם רמת כיתה וספירת מילים כחוזים המובילים. המחקר מציע זרימת עבודה מעשית בת שבעה שלבים למומחי בחינות ומזהיר שההכללה מעבר למתמטיקה ולקריאה של K-5 אינה ברורה. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** מדד 18 מודלים לשוניים גדולים על 3,036 פסקי-דיאגנוזה אבחוניים מתויגים על ידי מורים מעבודת מתמטיקה בכתיבת יד, ומצא שכל המודלים מתחתים מאוד (F1 < 0.5) עם ייחוס-ביתר שיטתי והזיה של ראיות — ומתחברים ל[[knowledge-tracing|מעקב אחר ידע]], ל[[hallucination-risk|סיכון להזיה]], ולאתגרי הערכה ה[[multimodal|רב-מודאלית]]. **[[representation-robustness-llm-math-problem-solving|Nath et al.]]** הראו ש[[llm|פתרון בעיות]] מתמטיות ב[[problem-solving|מודל לשוני גדול]] הוא רגיש מאוד לייצוג שטחי — המודלים הופכים נכונות לאורך נוסחות בעיה שוות-ערך — ומעלים חששות [[assessment-validity|תוקף הערכה]] לציון מתמטיקה מבוסס בינה מלאכותית.
**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi and Olaoye (2026)]]** מראים מסלול מנוגד להערכת תשובות מתמטיות: תוכנת הניקוד האוטומטי שלהם לציוני חיבור מורחבים נותנת ציונים לפריטים מתמטיים של תשובה מורחבת במבחן כלכלה לבני תיכון עלידי דמיון סמנטי נגד תכנית הניקוד של WAEC, ללא אימון על תסריטים מדורגים, והסכימה עם 12 בוחנים אנושיים בקורלציית תוך-מחלקה של 0.863 (מצעדים ממוצעים) עם מקדמי פירסון מ-0.604 ל-0.864. ההסכמה נמצאת שם שהציונים הנמוכים ביותר — התוכנה הממוצעת 5.94 מתוך 20 לעומת 5.97 עבור המדרגים, כל בוחן תייג רק 84 מתוך 1,008 תסריטים, והמחברים מתייחסים לציונים הנמוכים לחוסר היכרות של המועמדים עם מענה מבוסס-מחשב.

**[[student-engagement|מעורבות סטודנטים]] ואוריינות AI** חוקרים כיצד סטודנטים מתקשרים עם כלי מתמטיקה מבוססי בינה מלאכותית. **[[epistemic-proactivity-math|Abdelghani et al.]]** עקבו אחרי מסלולי-זמניים של אינטראקציה בין סטודנט לבינה מלאכותית בלמידה מתמטית, וזיהו מסלול התפתחותי מ[[prompt-engineering|הנחיה]] שטחית ל"פרואקטיביות אפיסטימית" — רדיפה פעילה, [[self-directed-learning|מוכוונת עצמית]] של הבנה מושגית. זה מתחבר ל[[ai-literacy|אוריינות AI]], ל[[metacognition|מטאקוגניציה]], ול[[self-regulated-learning|למידה עצמית מוסדרת]]. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]** מצא שפלטפורמות אדפטיביות מבוססות בינה מלאכותית שיפרו באופן משמעותי הבנת שברים לסטודנטים עם קשיי למידה במתמטיקה, ומתחברות ל[[personalized-learning|למידה מותאמת אישית]] ול[[adaptive-learning|למידה אדפטיבית]].

**תמיכת מורים** חוקרת כלי בינה מלאכותית למחנכי מתמטיקה. **משחק-תפקיד של סטודנט מדומה** משרת גם את התרגול של המורה: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] בנו *Student GPT*, [[conversational-ai|צ'אטבוט]] ChatGPT מותאם ש מילא תפקיד של תלמיד בית ספר תיכון מחזיק ב[[misconceptions|תפיסות שגויות]] נפוצות של חשיבת-יחסים, ונתן למורים מתמטיקה לפני-השירות תרגול בסיכון נמוך באבחון והכוונת חשיבת תלמידים לעבר פתרונות נכונים — וממחיש [[generative-ai|GenAI]]-מופעל [[simulation|סימולציה]] כמשלים לפלטפורמות יקרות כמו TeachLivE לבניית ידע תוכני-פדגוגי על תפיסות שגויות של תלמידים.

הסינתזה היחידה ברמת-התחום על התחום הזה במאגר הידע היא סקירת PRISMA מ-2021–2025 של 42 מחקרים שסוננו מ-922 רשומות (קפא של Cohen = 0.88), והיא מוסיפה קטגוריה שהאשכולות של העמוד חסרים אחרת: אוטומציה הפונה למורה, שבה MATH41 תומך בייצור מהיר של משימות מתמטיקה ללומדים ברמות שונות והמודל ההיברידי CognifyNet מנתח דפוסי פעילות של תלמידים כדי שמחנכים יוכלו לזהות קשיים מתעוררים מוקדם. אותה סקירה ממוקמת את נקודת העיוורון של התחום — עם Education ב-60% ו-Computer Science ב-28% מתחומי המחקר, רק מחקר אחד נפל בפסיכולוגיה, והשאירו השפעה רגשית, אמון ואתיקה מושווים במידה מועטה — ומתעקבים שיכולת טכנית אינה צריכה להיות שווה ליעילות כיתתית מוגמרת. ([[ai-mathematics-education-prisma-review-2026]])

**מתמטיקה בהשכלה גבוהה** חוקרת את ההשפעה של בינה מלאכותית על פרקטיקה מתמטית מתקדמת. **[[genai-runaway-object-math-higher-ed|Bui et al.]]** יישמו תיאוריה [[sociocultural-learning|סוציו-תרבותית]] על [[generative-ai|GenAI]] במתמטיקה אוניברסיטאית, וניתוח בינה מלאכותית כ"אובייקט הבורח" שמשנה פרקטיקה אקדמית בדרכים שמקדימות נורמות [[governance|מוסדיות]] ופדגוגיות.

**חונכות מודל לשוני גדול ועיצוב [[learning-design|הוראה]]** הוא אשכול מתעורר של שני מחקרי 2026 שמחדדים את בסיס הראיות של חינוך מתמטי. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu, and Sun (2026)]] פיתחו מערכת חונכות [[intelligent-tutoring|מודל לשוני גדול]] מונחית-כללים לבעיות מילים מתמטיות בבית ספר יסודי שארכיטקטורתה בתובע-שלוש-שכבות (אבחון → בחירת כוונה → יצירת תשובה מוגבלת) שיפרה עקביות אינטראקציה וצימצמה מתן-תשובה מוקדם בניסוי כיתתי של 40 תלמידים בכיתה ה' — ראיה לתחומי מתמטיקה פרוצדורליים הזקוקים ל[[guardrails|משמרי-כללים מובנים]] על פיגום מודל לשוני גדול סטוכסטי אחרת. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, and Wang (2026)]] יישמו מודל כיתה חכמה על סטודנטים M.Ed. במתמטיקה ומצאו רווחים סטטיסטית משמעותיים (p < .05) בעיצוב יעדי הוראה לאורך ממדי תקני-תוכנית לימודים, ספר לימודים, ותנאי-תלמיד.

עיצוב ההנחיה הוא בעצמו מנוף נמדד: על מדד MathDial, "הנחיית חונך" סוקרטית פדגוגית-מיושמת העלתה את Success@N וחתכה בחדות את Telling@N ביחס להנחיה בסיסית הן עבור GPT-4o והן עבור GPT-4o-mini ([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]).

**[[generative-ai|GenAI]] למשימות מידול מתמטיות** מרחיב את זרם היצירה מעבר לתרגילים שגרתיים. פלטפורמה מופעלת על ידי בינה מלאכותית שפותחה דרך גישת ADDIE השתמשה בשונות ישרה במתמטיקה של בית ספר תיכון כנושא איור, והתייחסה לחוסר הזמן והמשאבים של המורים לעיצוב משימות מידול איכותיות: כלים קיימים מייצרים בדרך כלל בעיות מילים קונוונציונליות או תרגילים שגרתיים, בעוד הפלטפורמה שאפה ליצור משאבים המטפחים כשירות מידול מתמטי, מעוגנים בעקרונות עיצוב מבוססים וב[[prompt-engineering|הפקה מוגברת באחזור]].
- **שרשרת חשיבה חזותית: פער ה[[agency|אוטונומיה]] בגאומטריה.** GeoVAD-Bench מאבחן עזרי-ראיה ביניים במקום תשובות סופיות לאורך 600 בעיות בנייה-עזרית (200 קלה, 200 בינונית, 200 קשה), ומוצא דפוס עקבי: אספקת דיאגרמת העזר המתייחסת משפרת דיוק בצנועות (+3.3, +3.0, +7.0 נקודות לאורך שלושה מודלים) בעוד מתן המודל לבנות את קו העזר שלו בדרך לתשובה הנכונה מרחיבה את הפער ב-10.0 עד 13.5 נקודות, עם שני מודלים מתחתים לביצועים גרועים יותר מאשר כאשר לא הייתה להם חשיבה חזותית כלל. ארבע קטגוריות שגיאת-תהליך הושוו ל-93.1% ו-89.7% מהכשלים המיוחסים. להוראת [[problem-solving|פתרון בעיות]] הממצא הוא שפיגום דיאגרמתי חייב להיות מאומן ומוערך בנפרד מדיוק התשובה. ([[geovad-bench-visual-chain-of-thought-geometry-2026]])
- **בעיות רגישות לבינה מלאכותית מאבדות זמן למידה ושימור.** לוח בעשר שנים של 3.2 מיליון אינטראקציות ALEKS מצא שזמן הלמידה על בעיות מילים מבוססות-טקסט — אלה הניתנות ביותר לתמלול להנחיות בינה מלאכותית — ירד ב-26.9% לאחר שחרור ChatGPT, בעוד פריטי שימור בפיקוח הראו ירידה של 25% בסיכויי תשובה נכונה ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).
- **סטודנטים מעריכים משוב מיידי, אך פלטפורמות תרגול אופציונליות אינן בשימוש.** מתוך 157 סטודנטים, [[genai-practice-platform-maths-feedback-2026|Chen et al. (2026)]] ראו 95 נרשמו ורק 34 ניסו שאלה; משתמשים דירגו מעורבות גבוהה ביותר (79% הסכמה) בעוד רק 42% העדיפו את הפלטפורמה על חוברת הבעיות הקיימת.
- **בינה מלאכותית יכולה להעלות הישגים תוך הרחבת פער מגדרי.** בקוואזי-ניסוי בן שישה שבועות עם 115 סטודנטים ניגריים בתיכון בכיתה עילית, משוב ChatGPT העלה הישגים במשוואות ריבועיות על פני הוראה קונוונציונלית (29.18 לעומת 24.06), אך סטודנטים גברים הביסו סטודנטיות (30.95 לעומת 25.16) למרות היעדר הבדל מגדרי במסוגלות עצמית — זהירות שוויון לתמיכת מתמטיקה מבוססת בינה מלאכותית ([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]).

### קשרים למושגים קשורים

חינוך מתמטי יושב בתוך תחום ה[[stem-education|STEM]] הרחב עם קשרים נבדלים ל[[intelligent-tutoring]] ול[[intelligent-tutoring|חונכות AI]] דרך המסורת החזקה של חונכים קוגניטיביים ומחקר ITS במתמטיקה, ל[[scaffolding|פיגום]] דרך ספרות המאבק הפרודוקטיבי ושימוש ברמזים, ל[[affective-computing|מחשוב אפקטיבי]] דרך חרדת מתמטיקה וחונכות מודעת-רגש, ל[[knowledge-tracing|מעקב אחר ידע]] ו[[assessment-validity|תוקף הערכה]] דרך מחקר אבחון קוגניטיבי והערכה, ול[[teacher-role|תפקיד המורה]] דרך שיתוף פעולה מורה-בינה מלאכותית בהוראה מתמטית. הקשר [[k-12]] הוא חזק במיוחד — רבים ממאמרי המתמטיקה כרוכים בהקשרי K-12 — בעוד קשרי [[higher-ed|השכלה גבוהה]] צצים בהכשרת מורים ובפרקטיקה מתמטית מתקדמת.

## השלכות למרצים למתמטיקה

- **התייחסו לחונכות בינה מלאכותית כמנוף חיפוש-עזרה, לא כתיקון יכולת.** [[lak2026-hint-button-unproductive-use|מחקר שימוש ברמזים]] מראה שבקשות רמז מוקדמות וקריאת רמז שטחית חוזים רווחים נמוכים יותר — ולכן עיצוב של *מתי וכיצד* סטודנטים מחפשים עזרת בינה מלאכותית חשוב יותר מיכולת חונך גלמית. עודדו סטודנטים לנסות לפני לבקש, והעלו עזרה ברגע הצורך ולא לפי דרישה.
- **הגנו על מאבק פרודוקטיבי.** [[zhang-tutormoments-2026|TutorMoments]] מוצא שהמודלים נוטים כברירת מחדל לעזרה מוגזמת, ודוחפים לעתים נדירות לרמת קשב; הגדירו תמיכת בינה מלאכותית לפיגום במקום לפתרון, ונקטו מעקב אחר החלפת-תשובה שמערערת חשיבה.
- **אל תתייחסו לפלט אבחוני של בינה מלאכותית כאמת יסוד.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]] מראה שמודלים לשוניים גדולים מתחתים לאבחון חשיבה מתמטית (F1 < 0.5) עם ייחוס-ביתר וראיות מוזיות; השתמשו באבחון בינה מלאכותית כהצעה לאימות מול עבודתו בפועל של התלמיד.
- **היזהרו משבירות פורמט-שטחי בציון בינה מלאכותית.** [[representation-robustness-llm-math-problem-solving|רגישות לייצוג]] אומרת שבעיות שוות-ערך יכולות להפוך תשובות בינה מלאכותית — סיכון תוקף להערכה מתמטית מבוססת בינה מלאכותית; העדיפו [[human-in-the-loop-ai|סקירת בני אדם]] לציון בעל עמידה גבוהה.
- **השתמשו בבינה מלאכותית כדי להוריד את הסף לתרגול מותאם אישית.** [[ai-powered-personalized-learning-elementary-fractions-2026|פלטפורמות אדפטיביות]] שיפרו הבנת שברים לסטודנטים עם קשיי למידה במתמטיקה; פרסו כלי אדפטיביים מבוססי בינה מלאכותית באופן סלקטיבי ללומדים הזקוקים לתמיכה מובחנת.
- **שמרו את המורה בשליטה על חומרי הוראה הנוצרים בבינה מלאכותית.** [[teacher-control-ai-generation-math-visuals|שליטת המורה בוויזואלים של בינה מלאכותית]] תומכת במסגרת שמאזנת יעילות בינה מלאכותית עם נכונות פדגוגית.

## מושגים מחוברים

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## מאמרים מחוברים

- [[ai-mathematics-education-prisma-review-2026]] — Artificial intelligence in mathematics education: A PRISMA-based systematic literature review (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — Automated software scoring of senior school certificate examination mathematical items in economics using a contextual similarity model
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[chudziak-ai-math-tutoring-platform]] — AI-powered math tutoring platform (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — פלטפורמת שליטה ALEKS: בעיות מבוססות-טקסט רגישות ביותר לבינה מלאכותית
- [[mujib-ai-ibl-creative-math-2026]] — AI-supported IBL and creative mathematical performance
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — GPT-4 grading of semi-open handwritten university mathematics answers
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantic knowledge-concept annotation and RL exercise sequencing on K-12 math corpora
- [[misconception-acquisition-dynamics-llms-2026]] — algebra mal-rule training dynamics in language models
- [[genai-practice-platform-maths-feedback-2026]] — Optional GenAI practice platform in a 157-student maths class: immediate feedback valued, uptake limited to 34 active users
- [[ai-generated-responses-achievement-self-efficacy-2026]] — Assessing the Influence of AI-Generated Responses on Academic Achievement: An Ethical Perspective and Self-Efficacy
