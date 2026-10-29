---
title: למידה מותאמת אישית
created: "2026-10-12T20:45:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **למידה מותאמת אישית** — התאמת חוויות חינוכיות ל[[student-modeling|פרופילי לומד]] בודדים, כולל ידע קודם, קצב למידה, העדפות, ומצבי [[affective-computing|אפקט]]. AI מאפשר התאמה אישית בקנה-מידה, אם כי הפער בין *התאמת-מערכת* ל*התאמה-נתפסת-על-ידי-לומד* נשאר אתגר מדידה פתוח. לצד [[adaptive-learning|למידה אדפטיבית]] ו[[intelligent-tutoring|חונכות חכמה]], היא אחת מחברי הצד-היישומי של משפחת [[student-modeling|מידול הלומד והוראה אדפטיבית]] — הצורכת מודלי לומד כדי להתאים הוראה.

## שאלות למחשבה

- כשאתם חושבים על "למידה מותאמת אישית", אתם מדמיינים תוכן המותאם לקצבו של הלומד, או למטרותיו הנבחרות? העמוד אומר שאלה שונים באופן עמוק (תוצאות אחידות בדרכים מגוונות לעומת תוצאות מגוונות). איזה מהם אתם מעריכים יותר, ולמה?
- העמוד מבחין למידה מותאמת אישית (המטרה) מלימודה אדפטיבית (מנגנון אחד). האם אתם יכולים לחשוב על התאמה שאינה כרוכה בהסתגלות בזמן אמת — והאם היא עדיין נחשבת?
- מערכת מסוגלת להסתגל מבלי שהלומד ירגיש מוכר אי פעם. מתי חוויתם ש"התאימו אתכם" אישית בלי להרגיש מוכרים באמת? מה ההבדל?
- העמוד מסמן שהתאמה-יתר עלולה לקלוע לומדים במסלולים בעלי ציפיות נמוכות. כיצד התאמת AI בטובת-לביעה עלולה לבצע בטעות את תקרת התקרה ללומד?
- התאמה אישית דורשת נתוני לומד מפורטים; פרטיות דורשת מינימיזציה של נתונים. היכן אתם מושכים את הקו בין "מספיק נתונים להסתגל" ל"כל כך שהלומד נחשף"?
- מה AI היה צריך לזכור עליכם בין מושבים כדי להתאים את הלמידה שלכם באמת — ומה הסיכונים שהוא יזכור את הדברים האלה?

## מבוא

התאמת חוויות חינוכיות לפרופילי לומד בודדים, כולל [[prior-knowledge|ידע קודם]], קצב למידה, העדפות ומצבים אפקטיביים. AI מאפשר התאמה אישית בקנה-מידה, אם כי הפער בין *התאמת-מערכת* ל*התאמה-נתפסת-על-ידי-לומד* נשאר אתגר מדידה פתוח.

- [[mishra-control-vs-agency-history-2025|Mishra et al.]] מבחינים שתי צורות של התאמה אישית עם שורשים היסטוריים עמוקים — תוצאות אחידות המושגות בדרכים מגוונות (מכונות ה[[teacher-role|הוראה]] של Skinner ועד חונכות שליטה בסגנון Khan Academy) לעומת תוצאות מגוונות, נבחרות-לומד — הממופות למתח שליטה-לעומת-סוכנות של התחום.

## ארכיטקטורות להתאמה אישית מונעת-AI

### זיכרון אורכי (PersonaVLM → חינוך)

Nie et al. (2026) פיתחו ארכיטקטורת זיכרון ארוך-טווח [[multimodal|מרובת-מודלית]] (PersonaVLM) ששומרת על עקביות פרסונה בין אינטראקציות. ממופה לחינוך, זה מאפשר מערכות חונכות שנזכרות ב[[misconceptions|תפישות מוטעות]] של הלומד, בהסברים המועדפים עליו, ובהסטוריית ההתקדמות שלו בין מושבים — ומטפלות בחוסר קריטי במורי [[conversational-ai|צ'אט-בוט]] ללא-מצב.

### רשת התאמה-אישית ילידת-סוכן (DeepTutor)

Ma et al. (2026) מעצבים כל תכונת [[deeptutor|DeepTutor]] לשתף רשת התאמה-אישית משותפת, במקום לחבר התאמה-אישית לכלים ראקטיביים. הארכיטקטורה מבטיחה קוהרנציה חוצת-מודליט: אותו פרופיל לומד מניע [[problem-solving|פתרון בעיות]], [[automated-question-generation|ייצור שאלות]], וכתיבה שיתופית.

### התאמה-אישית חברתית מרובת-סוכנים (MAIC)

Yu et al. (2024) מדי התאמה-אישית לא רק לתוכן אלא גם ל*הקשר החברתי*. ארכיטיפי בן-כיתה (ליצן הכיתה, חושב עמוק, רושם הערות, תום סקרני) יוצרים דינמיקות למידת-עמיתים מגוונות המותאמות לצרכי לומד בודדים.

### AutoML לדיוקנאות לומד

התאמה אישית היא יעד מרכזי לשיפור איכות חינוכית, אך עיבוד נתוני התנהגות-למידה הטרוגניים מרובי-מקורות נשאר אתגר. מסגרת חיפוש ארכיטקטורה-קוגניטיבית-נוירונית מותאמת-אישית, המונעת על ידי [[reinforcement-learning|למידת מכונה]] אוטומטית, בונה דיוקנאות לומד ומייצרת מודלים אבחנתיים לפרופילי לומד הטרוגניים, ומשלבת נתונים מרובת-מודל כדי להניע מעבר לתוצאות בחינה סטטיות.

בסיס ידע סטטי אינו מסוגל להתאים אישית: אונטולוגיות מתפתחות לאט ומטפלות באי-ודאות גרוע, ולכן הארכיטקטורה מתאימה ייצוג לסוג הידע — הצהרתי לאונטולוגיות, פרוצדורלי לכללים, לא-ודאי לאונטולוגיות מטושטשות או הסתברותיות, מרומז לאנליטיקה ולמידת מכונה — ומעדיפה מערכת של אונטולוגיות קטנות ממופות על פני מודל מונוליתי אחד ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## יחס ללמידה אדפטיבית ולחונכות חכמה

למידה מותאמת אישית מתבלבלת לעתים קרובות עם [[adaptive-learning|למידה אדפטיבית]], אך הן אינן זהות. **למידה אדפטיבית** מתייחסת ל*מנגנון* — מערכת המתאימה תוכן, קציבה וקושי בזמן אמת על בסיס מודל לומד. **למידה מותאמת אישית** היא ה*מטרה הרחבה* — התאמת חוויית הלמידה המלאה (תוכן, מסלולים, קציבה, העדפות, מטרות) לבודד, שההסתגלות בזמן אמת היא יישום אחד שלה. מערכות אדפטיביות הן *אמצעי* להתאמה אישית, אך התאמה אישית ניתנת להשגה גם דרך פרופילי לומד סטטיים, מסלולים מבוססי-בחירה, או התאמת מורה-אנוש שאינה מסתגלת בזמן אמת.

סקירת PRISMA 2020 של 22 התערבויות בהשכלה גבוהה ממציבה תמיכת-למידה-מותאמת ומסלולים אדפטיביים בין מקרי השימוש הדומיננטיים של AI, אך רוב היישומים שיפרו נוהג קיים במקום לשנותו ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

[[intelligent-tutoring|חונכות חכמה]] יושבת באמצע: ITS הם הפלטפורמות ה*אדפטיביות* הקנוניות שמספקות הוראה מותאמת אישית דרך מידול תלמיד מובנה, בעוד שמורי [[llm|LLM]] מדי התאמה-אישית שיחתית. כל השלוש הן חברי הצד-היישומי של משפחת [[student-modeling|מידול הלומד והוראה אדפטיבית]] — הן צורכות את הייצוגים שמודלי הלומד מייצרים דרך [[student-modeling|מידול תלמיד]], [[knowledge-tracing|איתור-ידע]], ו[[cognitive-diagnosis|אבחנה קוגניטיבית]] כדי להחליט מה ללמד הלאה. ההבחנה חשובה להערכה: מחקים שתווים מערכת כ"אדפטיבית", "מותאמת אישית", או "אינדיבידואלית" לסירוגין (ראו להלן) יכולים להסתיר אם התועלת הטעונה מגיעה מהסתגלות בזמן אמת, מבחירת לומד, או מהתאמת תוכן.

## אתגרי מדידה

- **התאמת-מערכת לעומת התאמה-נתפסת** — מערכת מסוגלת להסתגל בלי שהלומד ירגיש מוכר
- **תקפות אורכית** — תועלת ההתאמה-אישית עלולה לדעוך אם פרופילים נעשים מיושנים או עם-התאמה-יתר
- **סיכוני [[equity-in-ai-education|שוויון]]** — התאמה-יתר עלולה לקלוע לומדים במסלולים בעלי ציפיות נמוכות

- **סיכוני הטיה** — התנאה על תכונות תלמיד עלולה לקודד סטריאוטיפ: עם חיבורים מוחזקים קבועים, המשוב לתלמידים המסומנים על ידי גזע, שפה או מוגבלות נעשה משבח יותר ופחות ביקורתי ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

## התאמה אישית והערכה

התאמה אישית ו[[assessment|הערכה]] מצומדות בחוזקה בלמידה מונעת-AI. התאמה אישית אדפטיבית תלויה במדידה [[formative-assessment|יוצרת]] מתמשכת של מה הלומד יודע (דרך [[knowledge-tracing|איתור-ידע]], [[student-modeling|מידול תלמיד]], ו[[cognitive-diagnosis|אבחנה קוגניטיבית]]) כדי להחליט מה להתאים הלאה — ולכן האמינות של סיגנל ה[[assessment|ההערכה]] מגבילה ישירות את איכות ההתאמה. באופן הפוך, כש[[summative-assessment|הערכה מסכמת]] מותאמת-אישית ללומד, ה[[bias-mitigation|הוגנות]] וההשוואה נעשות קשים יותר לביסוס. ה[[research-methods-aied|מחקר]] של מאגר הידע מזהיר מהסתגלות-יתר לסיגנלים שטחיים או רועשים: מערכות [[adaptive-learning|אדפטיביות]] שמודדות לומד לא נכון מסוגלות להתאים אישית בדרכים שמפחיתות למידה במקום לתמוך בה, ותלמידים ילידי-AI שההערכה העצמית שלהם לא-אמינה ("בסיס קוגניטיבי נעדר") קשים יותר למידול מדויק.

## התאמה אישית בעידן ה-AI

העדות החזקה ביותר שהדאגה הזו אינה היפותטית מגיעה מ[[personalization-paradox-adaptive-learning-emotions-2026|מחקר אורכי תלת-גלי של 486 סטודנטים לתואר ראשון סינים (Li, Lin & Qiu, 2026)]], שמצא שככל שתפסו התלמידים את סביבת ה-AI-האדפטיבית שלהם כמותאמת-אישית יותר, כך ה[[self-regulated-learning|למידה המוסדרת-עצמית]] שלהם הייתה *נמוכה יותר* — "פרדוקס ההתאמה". שינויים ברגשות אקדמיים נשאו את רוב האפקט: פגיעה בסביבה האדפטיבית ניבאה פחות הנאה ויותר חרדה ושיעמום, והשינויים הרגשיים האלה יחד נטלו כ-מחצית מהשיוך בין התאמה אישית לוויסת-עצמי מופחת. אוריינות ב[[ai-literacy|AI]] חמצה את הנזק, וחלשה את השיוך הרגשי השלילי לא-משמעותיות באוריינות גבוהה. התאמה אישית נראית אפוא כקונה התאמה-אדפטיבית בעלות לפעילות הוויסת [[regulation|שלו]] של הלומד, והמחקר מצביע על חוויה רגשית — לא רק על עומס קוגניטיבי — כערוץ שבו העלות הזו משולמת.

היכן שהאבחנה שמאחורי המסלול מאומתת, התאמה אישית משתלמת בירידת העומס ולא בכיסוי יותר: תיקון מסלול-הקצר ביותר הגיע בממוצע ל-3.82 שלבים וחתך את זמן הלימוד ב-22.0% (57.6 לעומת 73.8 דקות), כאשר העומס הקוגניטיבי נשא 53.7% מאפקט הפוסט-טסט ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

עדות לכלי יכולה עצמה להיות שלילית בקנה-מידה קטן: בניסוי שברים יסודי בן חמישה ימים (n סופי = 22), קבוצת העסקים-כרגיל הראתה עליות הבנה מובהקות גבוהות יותר מקבוצת Mathbot האדפטיבית-AI, והמחברים מסמנים ערבוב רמת-כיתה, ניחוש ועלות רישוי כמגבלות — תווית "אדפטיבית" אינה נושאת אפקט ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

למידת חיזוק היא מנגנון נבדל להתאמה אישית, ו[[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] ממפים את תחקיר הניסיוני שלה: סקירת ה[[meta-analysis-systematic-review|PRISMA]] שלהם של 89 מחקרי RL-בחינוך מוצאת התאמת-אישית RL מרוכזת ב[[higher-ed|השכלה גבוהה]] וב[[math-education|חינוך מתמטי]], כאשר ההסתגלות מיושמת בעיקר כתזמון תוכן (n = 53) או התאמה-אישית הקשורה-הכוונה כמו רמזים ומשוב (n = 36). הם מדווחים שמדיניויות RL מנצחות בסיסים לא-אדפטיביים ברוב המקרים על הסתגלות הקשורה-הכוונה ועל משתני [[affective-computing|אפקט]] (63% מהמחקים שנבדקו), ושעליית הלמידה — במיוחד עליית-למידה מנורמלת — הייתה מקור התגמול האפקטיבי ביותר — הדרכה מעשית לעיצוב סיגנלי תגמול שמדי התאמה-אישית לעבר למידה אמיתית ולא למעורבות [[student-engagement|תלמיד]].

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] מראים שמטרת התגמול היא עצמה בחירת התאמה-אישית: מאמן RL המאומן על המיומנות העצמאית של הלומד חתך את זמן הסיבוב ב-27.9% (p = 0.005) היכן שדעיכה מבוססת-כללים לא ייצרה שינוי אמין, והמחברים טוענים שסוכני קידוד המשופטים על ביצוע המשימה אינם נושאים תמריץ למה שהאדם מחזיק.

Bernstein and Sibia (2026) מחדדים הבחנה בין התאמת-אישית עניין להתאמת-אישית מומחיות: אנלוגיות GenAI מתאימות-עניין דווחו כמעוררות יותר וקלות-לזכירה יותר אך לא אמינות יותר באופן אחיד, וחלק מהתלמידים העדיפו את ההסבר הטכני הגנרי גם כשהאנלוגיה התאימה את העניין המצוין שלהם, לצורך העצמאות והשלמות ([[student-reception-genai-analogies-computing-2026]]). ההמלצה העיצובית שלהם היא להתאים אישית דרך מבנה תחום-מקור ולשאול את התלמידים מה הם כבר יודעים, לא רק מה שמעניין אותם, מכיוון שהיכרות עם תחום-מקור היא מה שמאפשר ללומד לבחון את האנלוגיה — ולתת ללומדים שליטה על ההתאמה דרך תפריט אנלוגיות, הצטרפות-על-תנאי, או הצעת גרסאות גנריות ומותאמות יחד. Sidorkin (2026) מתעד צימוד נוסף ברמת חומרי הקורס ולא של הסברים בודדים: קריאות שבועיות שיוצרו על-פי דרישה עבור קורס מנהיגות חינוכית מתקדם הותאמו בו-זמנית לאורך עניין (מגזר, תפקיד מקצועי, דוגמאות מקומיות) ורמת הבנה (קציבה, הגדרות, עומק), והיומנים שהתקבלו שיתפו גו-עצם משותף (דמיון קוסינוס TF-IDF של 0.50 עד 0.61), שנקרא כתבנית עם גירים מתכווננים ולא ככתיבה מחדש כללית לכל לומד. אותו קורפוס מראה שההתאמה הייתה מבנית אך לא-אחידה בעוצמה: סמני התאמה ברמת-הארטיפקט הגיעו בממוצע ל-52.24 לכל 10,000 מילים וטוו מ-38.74 עד 74.29 בין יומנים, בעוד שנטיות מוכוונות-הבנה ייצרו 3.4x עד 8.7x יותר [[scaffolding|פיגום]] הגדרתי מטקסט הסבר בסיסי.

ציר שלישי של התאמה אישית הוא ה*מטרה*, והיא הקלט שמתכנני AI מטפלים בו גרוע ביותר. [[personapath-personalized-learning-paths-2026|Liu et al. (2026)]] שידדו 2,000 פרסונות לומד סינתטיות עם גרף דרישות-קדם של 347 ספרי-לימוד ו-4,092 מושגים וביקרו מעשרה LLMs לתכנן, שלב-אחר-שלב, איזה ידע לומד צריך ללמוד כדי להגיע ליחידת-מטרה מצוינת. המודלים ייצרו תכניות לימודים מבנית-נכונות — DeepSeek-V3.1 הגיע ל-90.9% בתקפות דרישה-קדם-והזיה — תוך שנכשלו בהסתגלתן ללומד: אדפטיביות נפסקה ב-44.7%, שיעור המעבר הסופי של DeepSeek-V3.1 היה 29.5% בחינוך בסיסי ו-14.6% בהשכלה גבוהה, והסרת שדה השליטה מהפרסונה עלתה עד 26.1 נקודות אחוז מאדפטיביות תוך שהשאירה תקפות כמעט לא-משתנה. ייצור המסלול השלם במעבר אחד במקום באופן אינטראקטיבי העלה תקפות עד 30.8 נקודות תוך שחתך אדפטיביות ב-28.8. הטענה "מותאם אישית" היא טענה על תגובה למצב הלומד, ומשתנה המצב הוא החלק שהמתכננים האלה מסוגלים להסתדר בלעדיו ביתר קלות — מקבילה חישובית לדאגת המדידה שלעיל.

ציר רביעי הוא ה*קהל יעד* ולא הלומד הבודד: [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] מייצרת מחדש הרצאה קיימת לקבוצה מקצועית מוגדרת (בריאות, פיננסים או אנרגיה), וממדי המומחים שלה דירגו גרסאות ממוסגרות-תעשייה גבוהות ב-0.32 נקודות בעומק התאמה-אישית (3.97 לעומת 3.65) בעוד כיול קהל-היעד פיגר (3.52). התאמה לקבוצה ולא ללומד היא צורת התאמה-אישית זולה יותר וברת-טיפול יותר, אך המברין שמדד אותה העריך התאמה משופטת, לא תוצאות לומד.

התאמה אישית יכולה לשקול מעל מציג אנושי: בקורס מקוון גדול (493 משיבים), תלמידים דירגו סרטונים מותאמים-אישית שיוצרו-AI מעל כאלה מוקלטים-אנוש לא-מותאמים (דירוג ממוצע 2.26 לעומת 2.69) ו-88.4% דירגו סרטון מותאם כלפני, לעומת 73.8% למוקלט-אנוש ([[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]]).

## מיקרו-התאמה-אישית מותנית-הנחיה

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar & Goel (2026)]] מראים שהפער בין התאמת-מערכת להתאמה-נתפסת ניתן לטיפול ברמת התגובה. מסגרתם למורה [[llm|LLM]]/[[rag|RAG]] Jill Watson משלבת העדפות נבחרות-לומד (הפשטה, ריבוי מילים, תפיסה, עיבוד, הבנה) עם דרישה קוגניטיבית מוסקת-מערכת ([[cognitive-diagnosis|טקסונומיה של Bloom]]) כדי לייצר 96 מיקרו-פרופילים מותאמים בכל אינטראקציה דרך [[prompt-engineering|התנאת-הנחיה מובנית]] — ללא אימון מחדש, ללא ייעוץ [[discipline-specific-aied|ספציפי-תחום]]. זהו היבריד של [[adaptive-learning|הסתגלות]] (בחירת העדפה מונעת-לומד) ואדפטיביות (הערכה קוגניטיבית מונעת-מערכת), ומראה שהתאמה אישית של *כיצד* התוכן מוצגת יכולה להיות בקנה-מידה ונתפסת ללומדים.

## עמימות מונחית

בעיה חוזרת היא ש"למידה מותאמת אישית" היא מונח מטרייה רחב ומוגדר רופף. סקירות שיטתיות ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh et al., 2026]]) מוצאות ש[[adaptive-learning|למידה אדפטיבית]], הוראה אינדיבידואלית, למידה מותאמת-לקוח, ולמידה מותאמת אישית משמשות לסירוגין, ללא הגדרה מקובלת באופן אוניברסלי — מקור של עמימות קונספטואלית שמסובכת סינתזה מחקרית ונוהג מבוסס-עדות. התחום קורא ביתר עוז למסגרת והגדרה מאוחדות כדי ש"מותאם אישית" יאה לטענה מדויקת ומבוססת-עדות ולא לתווית מעורפלת (נקודה שמחזקת ה[[limitations-in-aied-research|ביקורת של מאגר הידע על שימוש-בנייה חלש]]).

## מושגים קשורים

- [[adaptive-learning]] — Adaptive systems that tailor content, pacing, and difficulty to the learner in real time
- [[intelligent-tutoring]] — Tutoring systems that model the learner and deliver individualized instruction
- [[student-modeling]] — Representing learner knowledge, skills, and states that drive adaptation
- [[knowledge-tracing]] — Inferring mastery of knowledge components from performance over time
- [[cognitive-diagnosis]] — Diagnosing latent learner knowledge and attributes from responses
- [[scaffolding]] — Support and fading calibrated to individual learner needs
- [[student-experience]] — The learner's lived experience of personalization
- [[learning-analytics]] — Data-driven measurement of learning that informs adaptation
- [[formative-assessment]] — Ongoing assessment that signals what to adapt next
- [[summative-assessment]] — Endpoint assessment whose comparability personalization complicates
- [[generative-ai]] — LLM-based conversational personalization
- [[edtech-platform]] — Platforms that deliver personalized learning at scale
- [[higher-ed]] — Higher-education context for personalization
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[recommender-systems-and-learning-paths]]
## מאמרים קשורים
- [[bespoke-industry-personalized-lecture-videos-2026]] — Industry-personalized lecture video regeneration from a seed transcript: audience-level tailoring, rated by domain experts (Puech et al. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Prompt-engineering micro-personalization of an AI teaching assistant (Basu, Kakar & Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[mishra-control-vs-agency-history-2025]] — Distinguishes two forms of personalization (uniform vs diverse outcomes)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefining personalized learning: systematic review
- [[deeptutor]] — Agent-native personalization substrate for tutoring
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Personalized adaptive learning for elementary fractions
- [[ai-coaching-rl-skill-development]] — Reinforcement-learning coaching for skill development
- [[personalized-ai-generated-videos-preference-2026]] — Students prefer personalized AI-generated videos over non-personalized human-recorded ones (Tomlinson et al. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in personalized automated feedback
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Systematic review: adaptive pathways & recommenders are a top AI integration use case in higher ed
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Personalization paradox: perceived adaptive personalization linked to lower self-regulated learning via academic emotions, buffered by AI literacy (Li, Lin & Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: LLM planners reach 90.9% validity but no model exceeds 44.7% adaptivity when personalizing paths to a stated learner goal (Liu et al. 2026)
