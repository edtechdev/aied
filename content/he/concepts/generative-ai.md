---
title: בינה מלאכותית יוצרת
created: "2026-10-12T19:14:00-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
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

> **בינה מלאכותית יוצרת** — מערכות בינה מלאכותית המסוגלות לייצר טקסט, קוד, תמונות ותוכן אחר, ובולטות ביניהן מודלי שפה גדולים כמו GPT-4 ו-Claude. בינה מלאכותית יוצרת היא הטכנולוגיה שמניעה את גל ה[[research-methods-aied|מחקר]] ב[[ai-education|בינה מלאכותית בחינוך]] הנוכחי.

## שאלות למחשבה

- בינה מלאכותית יוצרת מייצרת תוכן זורם ונשמע-בטוח על דרישה. האם זרימה שווה נכונות, והיכן ראיתם פלט שנשמע בטוח אך שגוי — מה הקשה לתפוס אותו?
- שלא כמו מערכות מוקדמות מבוססות-כללים או מבוססות-אחזור, מודלים יוצרים יוצרים תוכן חדש במקום לאחזר תשובות מאוחסנות. כיצד השינוי הזה משנה את הסיכונים — הזיות, הסתמכות-יתר, יושרה אקדמית — בהשוואה למנוע חיפוש?
- עם יותר מ-80 מאמרים, בינה מלאכותית יוצרת היא החוט הגדול ביותר במאגר הידע הזה, ונמתחת על חונכות, הערכה, יצירת תוכן ובטיחות. איזו יישום לדעתכם המבטיח ביותר ללמידה, ואיזה המסוכן ביותר — ומדוע?
- אותה טכנולוגיה שיכולה לייצר מדריך סוקרטי יכולה גם לייצר "מלכודת התשובה הנכונה" שמעודדת העתקה. אילו בחירות עיצוב עלולות להפריד בין בינה מלאכותית יוצרת שמפיגמה למידה לבין בינה מלאכותית יוצרת שמקצרת אותה?

## מבוא

### מה שהופך בינה מלאכותית יוצרת לשונה לצרכי חינוך

שלא כמו מערכות מוקדמות מבוססות-כללים או מבוססות-אחזור, בינה מלאכותית יוצרת מייצרת תוכן זורם ומותאם-הקשר על דרושה. הדבר יוצר הן הזדמנויות חסרות-תקדים והן סיכונים חדשניים:

- **יצירת תוכן:** [[llm|מודלי שפה גדולים]] מסוגלים ליצור חומרי הוראה, דוגמאות והסברים. [[book-level-synthetic-textbook-organization|ספרי לימוד סינתטיים]], [[courseblueprint-adaptive-video-generation|סרטונים אדפטיביים]], ו[[ai-generated-instructional-videos-computing-ed|סרטוני הוראה]] מראים את טווח יצירת התוכן החינוכי.
- **טיוטות לתכנון שיעור שהן תלויות-פלטפורמה ותלויות-שפה.** הערכה מקצועית של [[ai-ed-evaluation|בינה מלאכותית]] על תוכניות שיעור למדע שנוצרו מראה שאיכות התוכן אינה אחידה ולא נייטרלית. [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli and Yildirim (2026)]] ביקשו מאחד-עשר מומחי [[science-education|חינוך מדעי]] לדרג את ChatGPT-4 וכלי ממוקד-חינוך (Teacher's Buddy) מול שלבי למידה מבוססת-עיצוב-הנדסה לכיתה ו': הפלטפורמה הממוקדת-חינוך ניצחה את הכללית-המטרה בכל שמונת קריטריוני האיכות, ובכל זאת 7 מתוך 11 המומחים דירגו את התוכניות כ"יישום רק עם תיקון" בלבד. שתי הפלטפורמות ייצרו פלט פדגוגית-עשיר יותר מהנחיות באנגלית מאשר בטורקית, גם כאשר התבקשו להתאים-מקומית למרסין, טורקיה — חשש [[digital-divide|שוויון דיגיטלי]] שבו שפת ההנחיה מעצבת את איכות ההוראה.
- **חונכות ודיאלוג:** [[intelligent-tutoring|מערכות חונכות בינה מלאכותית]] משתמשות בבינה מלאכותית יוצרת להוראה שיחתית. [[socratic-method|דיאלוג סוקרטי]] ו[[golrang-propact-pair-programming-2026|חונכות שיתופית]] מנצלים יכולות יוצרות לאינטראקציה ה[[pedagogy|פדגוגית]].
- **חולים מדומים ועקביות במקרה.** מאגר מרובה-מומחים ומסומן של 4,815 הודעות תלמיד-בינה מלאכותית מפלטפורמת MeduAI-SP ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]) מצא שרק כ-0.68% מתגובות החולה-המדומה המיוצרות-LLM הכילו בעיות נאמנות ברורות, וחשפת התמדדית הוערכה כמתאימה-קלינית בכ-99.3% מהודעות החולה. זה תומך בטענה שחולים מדומים מבוססי-בינה מלאכותית יוצרת מסוגלים לקיים עקביות מקרה וחשפת-תלוית-בירור ולא-מוקדמת תחת תסריט YAML מובנה (qwen-max), מה שהופך אותם לסביבה יציבה-דיו למחקר תוצאות ולא רק להדגמות סבירות — בעוד שהמערכת משכה בכוונה אבחונות וציונים [[summative-assessment|מסכמים]] במהלך הלמידה.
- **הערכה:** [[automated-essay-scoring|ניקוד חיבורים]], [[automated-assessment|מתן ציונים אוטומטי]], ו[[formative-assessment|הערכה יוצרת]] מסתמכים בהיקף גובר על מודלים יוצרים. [[benchmark|מדדי בדיקה]] מגבשים את המעבר הזה לעבודה פתוחה: [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] מצאו שמודלי GenAI רגישים-הקשר (GPTo1 המגיע להסכמה כמעט-מושלמת עם המעריכים האנושיים) גברו בהרבה על גישות הטבעה-משפט מוקדמות בציון תשובות תלמידים פתוחות, שהסתמכו על התאמת ייחוס נוקשה וסווגו לא נכונה תשובות תקינות שננסחו אחרת. [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] מרחיבים זאת ל[[medical-education|חינוך רפואי]] טרום-קלריקום, שבו הציון של GPT-4 לשאלות פתוחות הגיע להסכמה בין-מעריכים משמעותית-עד-כמעט-מושלמת עם חברי הסגל (קאפה משוקלל עד 0.94) — אך רק לאחר שאנשים חידדו את הרובריקה באופן איטרטיבי לאורך שלוש סבבים ונשארו בלולאה לגישור אי-ההסכמות — בעוד שהשאלה הסינתטית-וההוליסטית ביותר נתקלה במיטבית (κw = 0.54). זו ראיה שאמינות ההערכה היוצרת נעצבת הן מהנדסת-רובריקה אנושית והן מניתוח דפוסי-שגיאה כמו גם מהמודל הגלמי. ובכל זאת אותה זרימה אינה מתכללת בין סוגי הפריטים: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] מצאו ש-ChatGPT-5 התאים לחברי סגל אנושיים בפריטי בחינת מרקחת אובייקטיביים (CCC 0.935–1.000) אך לא בפריטים קצרי-תשובה (≈0) או בחיבור (0.341–0.854), ורובריקה מובנית לא סגרה את הפער באופן אמין.
- **סיכונים:** [[hallucination-risk|הזיות]], [[cognitive-offloading|הסתמלכות-יתר]], [[cognitive-offloading]], וחששות [[academic-integrity|יושרה אקדמית]] נובעים במיוחד מהזרימה של הבינה המלאכותית היוצרת ומן[[accessibility|נגישות]].

- **בעיית בטיחות-למידה שמעבר לאיכות הפלט.** [[ssail-safe-sound-ai-learning-2026|Rahimi (2026)]] טוען שבינה מלאכותית יוצרת יכולה להעלות את איכות עבודתו של לומד תוך שהיא מבצעת עבודה קוגניטיבית שעליו לעשות, ולכן יש לשפוט בטיחות על המסלול של הפיתוח האנושי — בטיחות למידה שמגנת על כישורים וצלילות למידה שתומכת בפיתוחם — ולא על דיוק, הטיה או פרטיות.
- **טענות יעילות מודדות ביצועים, לא למידה.** האומד הגדול ביותר בשדה — [[meta-analysis-systematic-review|מטה-אנליזה]] של 69 מחקרים המדווחים על *g* = 0.7 עבור ChatGPT וכלים דומים — מאגדת הצלחת משימה מיידית במקום שימור מושה ולא-מסוייע, ולכן היא אינה ראיה שבינה מלאכותית יוצרת מייצרת [[learning-gains|למידה]] ([[genai-performance-vs-learning|Yan et al., 2025]]).
- **יצירת סביבות למידה:** מודלים יוצרים מיוחדים ממירים כעת תדריך קורס ישירות ליצירות למידה מוגמרות. [[cogevol-learning-environment-generation-2026|CogEvol (Tu et al. 2026)]], משפחת מודלים מאומנים ליצירת מעבר-אחד של שקופיות מובנות ודפי HTML אינטראקטיביים עצמאיים, משלימה שקופית בחציוני של 17 שניות ודף אינטראקטיבי ב-59 — ומחליפה [[scaffolding|פיגום]] של [[agentic-ai|סוכן]] רב-תורי באורך דקות. אמינות נאכפת באמצעות צינור ייצור שמימר כשלים אמיתיים ל-53,687 דגמי SFT מאומתים בתוספת גמול היברידי של כלל-ועוד-VLM ל-RL מבוסס-GRPO. הדבר ממקם את הבינה המלאכותית היוצרת כמנוע עריכת-תוכן עם השלכות לזרימות הייצור של ה[[teacher-role|מורה]] ו[[curriculum-design|תוכנית הלימודים]], ולבחינת האם סביבות למידה מיוצרות-בינה מלאכותית תקינות מבחינה פונקציונלית ופדגוגית ולא רק מלוטשות מבחינה חזותית.

מפקד של שימוש בכלים של מחנכים מראה קשב מרוכז בייצור ולא בהוראה: כלי תמונה, שמע, וידאו ומצגות הרכיבו כחמישים מבערך מ-50 הכלים שמונו על ידי 211 מחנכים בתשעה מדינות, בעוד שכלי חונכות וצ'אטבוט יצרו את הקבוצה הפדגוגית-הקטנה ביותר ([[typology-generative-ai-tools-education-2026|Bower, Torrington & Lai (2026)]]).

### כיסוי הבינה המלאכותית היוצרת במאגר הידע

עם יותר מ-80 מאמרים, בינה מלאכותית יוצרת היא חוט הטכנולוגיה הגדול ביותר במאגר הידע. המחקר נמתח על מחקרי יעילות ([[genai-meta-analysis-programming-learning|מטה-אנליזות]]), חששות בטיחות ([[hazra-safetutors-pedagogical-safety-2026|נזקי חונכים]], [[eduguard-safe-rag-llm-tutor|הוספת גדרות]]), ועקרונות עיצוב ([[instructional-guidance-genai-learning|הדרכה הוראית]]).

מאוגדים לאורך 53 מחקרים, חינוך בסיוע GenAI גבר על גישות לא-GenAI בהישגים (g = 0.40), חשיבה מסדר-גבוה (g = 0.72), מוטיבציה (g = 0.81) וכתיבה (g = 0.76), אם כי GenAI בסיוע-משחק לא הוסיף תועלת מובהקת (g = 0.24) ([[genai-educational-outcomes-meta-analysis|Dong (2026)]]).

מטה-אנליזה נפרדת של 42 מחקרים על מוטיבציה לבדה ממקמת את האפקט המאוגד נמוך יותר (g = 0.764) ומדווחת על מרווח חיזוי של 95% הנשזר ב-[−0.689, 2.217], ולכן היתרון המוטיבציוני אינו חיובי באופן אמין עבור הגדרה חדשה ([[genai-learning-motivation-meta-analysis-2026|Fang et al. (2026)]]).

ממשק משתמש יוצר הוא היכולת החדשה ביותר בחוט הזה: מודלים שפולטים יצירה אינטראקטיבית עובדת — מחוונים, סימולציות מנוהלות — במקום פרוזה. [[generative-ui-education-learning-interactives-2026|Kovshov et al. (2026)]], צוות של Google Research, מדווחים שממשק משתמש יוצר מחוץ-למדף אינו עדיין מדויק-פדגוגית דיו לבניות מורכבות, אך שפירוק מטרת למידה ליעדים מדורגים מתקדמים ועטיפת היצירה בלולאות ביקורת ושיפור-עצמי מייצרים יצירות שאותן מורים מומחים מדרגים כמקובלות. שלהם הוא עיצוב אורקסטרציה: מורים מצהירים מטרות, מאשרים אותן ובוחרים מבין סימולציות מועמדות, כך שהאילוץ המגביל על חומר למידה אינטראקטיבי [[simulation|מותאם-בלו"ז]] עובר מייצור לציון, ו[[guardrails|גדרות פדגוגיות]] מוטבעות בצינור היצירה במקום להישאר לקשב-מורה לאחר מכן.

מעבר לחוטי הליבה האלה, עבודה אחרונה מרחיבה את בסיס הראיות על פני הקשרים [[governance|מוסדיים]], אינטראקציוניים ותחומיים. Qin (2026) מתעד כיצד אוניברסיטת לינגנן מוסדות את אוריינות ה-GenAI לכל תלמידי התואר הראשון כחלק מהטרנספורמציה של אמנויות-ליברליות דיגיטלית. Chang and Li (2026) מראים ששיחות תלמיד-בינה מלאכותית מקודדות מעורבות קוגניטיבית [[student-engagement|משויכת-תחום]], עם ~62% מההנחיות המשקפות דרישה קוגניטיבית מסדר-גבוה. Neto and colleagues (2026) סוקרים ב[[meta-analysis-systematic-review|שיטה]] את GenAI בחינוך בריאותי מבוסס-תרחיש, ומוצאים ש[[prompt-engineering|עיצוב הנחיה]] מתפקד כציון הוראי אך נדיר מיושר עם מסגרות הוראה (34.8%) או מדווח בפרטים ניתנים-לשכפור (34.8%). GenAI מניעה גם סימולציות משחק-תפקיד של לומדים לאימון מורים מבוסס-פרקטיקה: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] בנו את *Student GPT*, צ'אטבוט ChatGPT מותאם שייצג תלמיד ב[[k-12|חטיבת ביניים]] מחזיק ב[[misconceptions|תפישות מוטעות]] נפוצות בהיגיון-יחסים, ומעניק למורים עתידיים ל[[teacher-education|חינוך]] מתמטי אימון זול וספציפי-תוכן באבחון חשיבת תלמידים — ראיה שעיצוב הנחיה (הנחיה מונחת-ספרות העלתה באופן אמין שגיאות קונספטואליות מטרה, 0.98 לעומת 0.40) יכולה להוביל מודל יוצר מחוץ-למדף לפרסונה פדגוגית מועילה.

סקירה שיטתית של מורי [[li-language-educators-genai-review-2026|שפה]] (Li et al. 2026) מוצאת שמחנכים מעריכים GenAI בעיקר עבור עבודת תוכן הכנה — תכנון שיעור, יצירת חומרים, וסיוע בכתיבה — תוך היסוס בשימוש חיה בכיתה, עם חששות המרוכזים סביב [[academic-integrity|יושרה אקדמית]] (פלגיאט ו[[assessment-validity|תוקף הערכה]]), הזזה מקצועית, וטנוסטרס; אימוץ נעצב על ידי זהות מקצועית, גורמים פדגוגיים, טכניים, מוסדיים ושל יושרה, ופערי כשירות נמפים לאפיסטמה, טכנה ופרוניסיס.

יצירת תוכן מגיעה גם היא מעבר ל[[math-education|מתמטיקה]] ולעבר עיצוב-משותף של משאבי למידה עם מורים — למשל, פיגומי [[simulation]] שעוצבו בשיתוף מורה-בינה מלאכותית ללמידת [[stem-education|STEM]] בכלי-טיס בלי-מטוס השומרים על תוקף פדגוגי ורלוונטיות הקשר. בחינוך אמנויות [[arts-design-and-media-education|אמנות]] STEAM לילדים, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo and Tahir (2025)]] כימתו באופן ניסויי את הרווחים של תוכניות שיעור בסיוע-ChatGPT על פני תוכניות שנוצרו על ידי מורים (חציוני מדורג-מומחים 20.5 לעומת 17.6, p = .002, אפקט גדול) — ובכל אותו מחקר מתעדים שפלט זורם נושא מצבי כשל אמיתיים ליצירת כיתה: תוכניות שמאידיאליות או לא-מעשיות להוראה יומיומית, אילוצי בטיחות-ילדים שפוספסים (למשל, הצעת סכיני גילוף ל[[early-childhood-elementary-ai-education|ילדים צעירים]]), הטיה תרבותית מערב-מרכזית, ויצירת תמונה/משאב בעלת ליקויים לוגיים או לא-רלוונטית. התרומה היא מסגרת הנחיה (תפקיד–הוראות–מטרת-סוף בתוספת רובריקת איכות של "ארבע נקודות וקו אחד") שהופכת את שאלת האמינות מ"האם המודל מסוגל לייצר" ל"כיצד הנחיות וקריטריוני הערכה חייבים להגביל אותו לשימוש פדגוגי". שימושים מופנים ל[[equity-in-ai-education|שוויון]] נותרים חסרי-חקירה; יוזמת מרחב-יצירה של GenAI לבנות בלבד באירופה שילבה שני כלי GenAI עם פדגוגיה פמיניסטית לטיפול בפערי מגדר מתמשכים בהשתתפות במחשוב, תוך ניתוח תמונות GenAI שנוצרו על ידי בנות והגות בעלי-עניין. יישומי עזר והכלה הם חוט גובר: [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] — מקרה בוחן [[qualitative-research|איכותני]] של 21 בוגרי תואר א' עם ליקויי ראייה בפלסטינה — מצאו ש-GenAI מתאים קצב, תוכן ומסירה לפרופילי למידה אישיים, מפשט טקסטים אקדמיים מורכבים, וממיר תוכן בין מודליות, עם לומדים הרואים בו משלים במקום מחליף מורים.

- **בינה מלאכותית יוצרת כ[[pedagogical-agent|סוכן פדגוגי]] באוריינות מדיה ביקורתית יסודית.** Demir and Akar (2026) מפעילים את מודל ההוראה 5E עם כלי בינה מלאכותית יוצרת (ChatGPT לשאלות רפלקטיביות ושו"ת, Grammarly ו-Canva AI לחידוד תוכן, Padlet ל[[peer-assessment|משוב עמיתים]]) המוטבעים שלב-אחר-שלב ולא כתוספות מבודדות, בתכנית אוריינות מדיה ביקורתית בת 18 שעות לתלמידים טורקיים בכיתה ד' המיושרת לתכניות הטורקית וחברתאות. הקבוצה בסיוע-בינה מלאכותית הראתה רווחים גדולים בקריאת מדיה (+3.50), כתיבה (+1.67), ואוריינות מדיה כוללת (+5.17, כולם p < .01) עם גדלי אפקט בין-קבוצתיים של *d* של Cohen = 1.12 (קריאה), 1.18 (כתיבה), ו-1.31 (אורייות כוללת), בעוד שקבוצת הבקרה התקדמה בצניעות בלבד. ניתוח איכותני חשף שישה תחומי צמיחה באוריינות מדיה ביקורתית — הגנה עצמית דיגיטלית ו[[privacy|פרטיות נתונים]], שימוש מדיה מכוון ואחראי, תקשורת בטוחה ומודעות גבול, [[critical-thinking|הערכה ביקורתית]] ומודעות להטעיה, מודעות לסיכון מקוון, ו[[ethics|אתיקה]] של מדיה/אזרחות דיגיטלית — וממחיש כיצד בינה מלאכותית יוצרת ניתנת לעיצוב לתוך תכנית לימודים כסוכן פדגוגי מפוגם המטפח הערכה ביקורתית במקום לקצר אותה.

### בינה מלאכותית יוצרת בתחומים מומחים: תמיכה בדיסלקציה

סקירה שיטתית בין-תחומית מ-2026 (Dabaghi, D'Urso & Sciarrone, מונחית-PRISMA, 2018–2024, n=72) מוצאת ש**בינה מלאכותית יוצרת מנוצלת פחות-מדי בתחום תמיכת הדיסלקציה**. מחקר GAI (כולו מ-2024) מתקבץ ל[[conversational-ai|צ'אטבוטים]] חכמים, תמיכת [[teacher-role|אימון מורים]], ומחקרים חקריים, והוא עולה מהר על [[machine-learning|למידת מכונה]] קלאסית ככלי המועדף — אך ניסוי קפדני ואימות בעולם-אמיתי נותרים נטולי-נוכחות במידה רבה. ניתוח מגמות-העתיד של הסקירה מצביע על חומרים מותאמים-אישית המונעים-GAI ומשוב אדפטיבי בזמן-אמת, מודלים אבחנתיים [[multimodal|מרובי-מודליים]] המשלקים מעקב-עין, EEG ו[[learning-analytics|אנליטיקת]] התנהגותית, מערכות [[intelligent-tutoring|חונכות אינטליגנטיות]] וסוכנים שיחתיים המונעים-NLP, וכלי תמיכה המופנים-למחנך. הדבר ממחיש הן את ההבטחה של בינה מלאכותית יוצרת ליצירת תוכן ותמיכה אינטראקטיבית בתחום מומחה ובעל-צורך גבוה, והן את הסיכון שאימוצה עולה על בסיס הראיות.

## Connected Concepts

- [[llm]] — the model class underlying generative AI
- [[prompt-engineering]] — how outputs are shaped
- [[rag]] — retrieval-augmented grounding
- [[ai-literacy]] — the competency needed to use it effectively
- [[ai-education]] — the broader field
- [[intelligent-tutoring]] — conversational and generative tutoring systems
- [[cognitive-offloading]] — the over-reliance risk generative AI amplifies
- [[hallucination-risk]] — a core reliability risk of generated content
- [[academic-integrity]] — integrity concerns from fluent generation
- [[automated-assessment]] — generative models in grading and feedback
- [[ai-technologies]] — the umbrella of AI techniques and models
- [[higher-ed]] — a primary deployment context
- [[k-12]] — a primary deployment context

## Connected Articles
- [[genai-learning-motivation-meta-analysis-2026]] — Meta-analysis of GenAI's effect on learning motivation, with a prediction interval spanning harm to benefit

- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[generative-ui-education-learning-interactives-2026]] — Harnessing Generative UI for Education: Tailored Learning Interactives
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of GenAI learning outcomes
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI in programming learning
- [[genai-performance-vs-learning]] — Performance vs. learning with GenAI
- [[hazra-safetutors-pedagogical-safety-2026]] — Harnessing of AI tutoring agents
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing a safe RAG LLM tutor
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
