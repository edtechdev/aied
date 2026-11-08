---
connected_resources: [drawsplat]
title: פרטיות
created: "2026-10-12T20:30:00-04:00"
updated: "2026-11-08T11:34:07-05:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-11-08T08:41:46-05:00"
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

> **פרטיות** — ההגנה על נתוני-הסטודנטים, הזהות ו[[agency|האוטונומיה]] בסביבות-למידה-מועצמות-AI. חששות-פרטיות מתעצמים ככל שמערכות-AI אוספות נתונים-התנהגותיים גרגרניים יותר ויותר עבור [[personalized-learning|אישון]], [[learning-analytics|אנליטיקה]], ו[[adaptive-learning|הוראה-אדפטיבית]]. זוהי מגבלה-אתית ורגולטורית מרכזית על [[ai-education|בינה מלאכותית בחינוך]]: כמעט כל כלי-AI שמאשר, חוזה או מעריך תלוי בנתוני-לומד, מה שהופך צמצום-נתונים, הסכמה, שקיפות ואבטחה לדרישות-עיצוב-יסוד במקום למחשבות-אחרונות.

## שאלות למחשבה

- אילו נתוני-סטודנטים הייתם לא-נוחים שיאספו עליכם — גם אם הם שיפרו את הלמידה שלכם? היכן אישון הופך למעקב?
- לרבים מהסטודנטים אין 'בחירה-משמעותית' אלא להשתמש בפלטפורמה-מחויבת, מה שהופך את ההסכמה לנומינלית. האם הסכמתם אי-פעם למשהו בלי להבין באמת מה נאסף ולמה? מה הייתם דורשים מהסכמה-משוחררת בפועל?
- אותם נתוני-לומד שמפעילים למידה-אדפטיבית ואישונית יוצרים גם סיכון-שימוש-לרעה ונזק. האם תוכלו לקרוא שם לתועלת-אישון שהייתם מוכנים לסחור קצת פרטיות תמורתה — ואת הגבול שלא הייתם חוצים?
- העמוד מזהיר שאמצעי-פרטיות עלולים 'to default on להגן רק על חלק מהלומדים.' אילו סטודנטים עשויים להיות החשופים ביותר, וכיצד פרטיות מתחברת לשוויון ול[[bias-mitigation|הוגנות]]?
- ניטור-AI קבוע — גם אם בכוונה-טובה — יכול לעצב התנהגות ו[[anxiety-and-stress|חרדה]]. מתי מצב-תחת-מעקב שינה את ההתנהגות שלכם, ומה זה משתמע אודות חישה-AI בכיתה?
- עבור ילדים, פרטיות נמתחת מעבר להגנת-נתונים לבטיחות. מדוע כלי-בטיחות כלל-מטרה עלולים להיכשל בזיהוי סיכונים-קשורי-חינוך מקטינים, ומי צריך להיות במעגל?

## מבוא

פרטיות היא תנאי-מקדים לבינה-מלאכותית-אמינה בחינוך. מכיון שמערכות-AI משתפרות עם נתונים — [[personalized-learning|אישון]] דורש פרופילי-לומד מפורטים, [[learning-analytics|אנליטיקת-למידה]] דורשת יומני-אינטראקציה גרגרניים, ו[[llm-training-and-fine-tuning|מודלי-חונכות מכווננים-בעדינות]] דורשים תמלולי-לומד–חונך אותנטיים — אותם נתונים שמאפשרים חינוך-אדפטיבי וסקלבילי יוצרים גם סיכון-מעבד, שימוש-לרעה ונזק. מאגר-הידע מתייחס לפרטיות כבלתי-נפרדת מ[[ethics]] (המסגרת-הנורמטיבית), מ[[regulation]] (דרישות-המשפט), מ[[governance]] (האחריות-המוסדית), ומ[[equity-in-ai-education|שוויון]] (מי מוגן ומי חשוף). מאמרי-הפרטיות שלו מתקבצים סביב ארבעה בעיות-חוזרות: איסוף בקנה-מידה, הסכמה ושקיפות, אבטחה ואנונימיזציה, וההגנות-המובחנות שאליהן ילדים זכאים.

## אתגרי-הפרטיות המרכזיים

- **זיהוי-שמות תלוי באיכות-זיהוי מדידה.** [[ji-de-identification-personally-identifiable-information-2025|Ji et al. (2025)]] בחנו חמש תצורות-זיהוי PII על טקסט של סטודנטים.
GPT-4o-mini מכוונן-בעדינות הגיע ל-recall 0.9589 תמורת \$0.92 למיליון טוקנים, כשישית בערך מ-\$4.90 למיליון טוקנים של Azure AI Language.
מאמת דו-שלבי העלה את הדיוק ל-0.8893 היכן שחיובי-שווא היו משחיתים את תועלת-הקורפוס, ואופן-הכשל של דיוק-נמוך הוא משבש מבחינה סמנטית: החלפת "ניוטון" ב"דוד" בקטע מתמטי, או סימון ישו, מרים ויוסף בסיפור שהרמז שלו הוא נצרת.

- **בסיס-הראיה של הפיקוח דל באתיקה.** סקירה של 80 מחקרים מצאה ש-35% לא חשפו את מערכת-הנתונים שלהם, 40% העריכו מודל-בודד, 30% לא יכלו להשחזר ורק 25% התייחסו לשאלות-אתיות; חיובי-שווא — סימון-התנהגות-נורמלית — נשארים סיכון-מהימנות-מרכזי ([[automated-online-exam-proctoring-decade-review-2026|Malhotra & Chhabra (2026)]]).

- **ממשקי צ'אט מדליפים את השיחה עצמה.** בביקורת של 42 פלטפורמות-צ'אט של בינה מלאכותית, [[bekos-contextual-leakage-ai-chat-platforms-2026|Bekos et al. (2026)]] מצאו ש-21 מהן שולחות כותרות-שיחה לעוקבים-צד-שלישי, ושבע פלטפורמות-החינוך בממוצע שלחו כ-367 בקשות-עוקב כל אחת, וחמש מהן הדליפו הקשר.

## בטיחות-ילדים והגנות-K-12

הגדרות [[k-12]] דורשות אמצעי-פרטיות חזקים יותר מכיוון שהלומדים הם קטינים. זה ממתיך פרטיות מעבר להגנת-נתונים אל [[pedagogical-safety]]: הכלים שילדים משתמשים בהם חייבים לא רק להגן על הנתונים שלהם אלא גם להגן עליהם מנזק. [[child-safety-genai|מחקר-בטיחות-ילדים]] מראה שמסווגי-בטיחות כלל-מטרה נכשלים לעתים קרובות בזיהוי הנחיות-לא-בטוחות-קשורות-חינוך מילדים, ומזהיר שבבתי-ספר אינם יכולים להניח שאמצעי-מודל-סטנדרטיים מגנים על משתמשים-צעירים יותר — הם זקוקים להערכה-ספציפית-ילדים, בדיקה-מבוססת-אירועים, ו[[human-in-the-loop-ai|פיקוח-אנושי]]. המסגור מחבר פרטיות ל[[equity-in-ai-education|שוויון]]: מי מוגן על ידי בטיחות-ופרטיות-ברירת-מחדל משקף את מי שהמערכת מתייחסת לבטיחותו ולאוטונומייתה כאל-לא-ניתנת-למשא-ומתן.

## פרטיות בפרקטיקה

- **התייחסו לפרטיות כדרישת-עיצוב, לא כמחשבה-אחרונה-של-מדיניות.** הדוגמה של [[teachlm-post-training-llms-education|TeachLM]] מראה שהסכמה, אנונימיזציה וטיפול-נתונים-מאובטח יכולים להיבנות לתוך צינור-הנתונים עצמו — מודל לגיוס-אתי של הנתונים-האותנטיים שהופכים [[intelligent-tutoring|חונכי-AI]] ליעילים.
- **עצבו לצמצום-נתונים.** העדיפו גישות שאוספות רק את מה שהסתגלות דורשת (AI קצה/מפוזר, עיבוד-על-מכשיר) במקום לצבור נתוני-אינטראקציה already. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] מדגימים צורה-מפוזרת קונקרטית של זה עבור [[cognitive-diagnosis]]: ממשקי-API מסחריים מרובים של [[llm]] משתפי-פעולה באבחון בעוד שהם מוסיפים רעש-פרטיות-דיפרנציאלית-ε-מקומית לחיזוי של כל מודל לפני צבירה, כך שאף ספק אינו רואה נתוני-סטודנטים גלמיים — ארכיטקטורה-שומרת-פרטיות שמשאירה [[intelligent-tutoring|חונכות-AI]] תפקודית בלי למרכז מסלולי-לומד רגישים. למידה-מפוזרת מאפשרת גם **אנליטיקה בין-מוסדית בלי שיתוף-נתונים**: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] מאמנים מודל-סיכון-אקדמי מרובת-משימות across מוסדות דרך צבירה-מפוזרת כדי שנתוני-לומד גלמיים יישארו מקומיים ורק פרמטרי-המודל ישותפו — אלטרנטיבה-שיתופית ושומרת-פרטיות ל[[learning-analytics]] ממורכז שמשמרת ריבונות-נתונים בעוד שהיא לוכדת דפוסים-בין-מוסדיים.
- **בצעו הסכמה-מפורשת ומשוחררת-מאובטחת.** היכן שנתוני-לומד מממנים פיתוח-AI או שיפורו, מוסדות צריכים להיות שקופים על איסוף, אחסון ושימוש — ולסטודנטים צריכות להיות בחירה-אמיתית, לא פלטפורמות-מחויבות.
- **בצעו ביקורת עבור מי מוגן.** אמצעי-פרטיות אינם צריכים to default on להגן רק על חלק מהלומדים; [[equity-in-ai-education|שוויון]] דורש שהטיפה הזו תחול across גיל, שפה, מוגבלות, וקו-סוציו-אקונומי.

## Connections

פרטיות מתחברת ל[[learning-analytics]] (אוסף-הנתונים), ל[[personalized-learning]] (צרכן-הנתונים), ל[[k-12]] (הגנות-מועצמות), ל[[ethics]] (המסגרת-הנורמטיבית), ל[[regulation]] (דרישות-משפט), ל[[governance]] (האחריות-המוסדית), ל[[equity-in-ai-education]] (מי מוגן), ל[[pedagogical-safety]] (הגנת-ילדים), ול[[educational-policy-ai]] (תגובות-מדיניות). היא אחת המגבלות-היסודיות שכל פריסה-AI-אחראית בחינוך חייבת לספק — הסיבה שבינה-מלאכותית-אמינה, במסגור של מאגר-הידע, מתחילה עם נתונים-אמינים.

## תפיסות מוטעות נפוצות

- **"פיקוח לוכד פרוסת-נתונים מוגבלת ומובנת."** קטלוג של מה שמערכות [[remote-proctoring|פיקוח]] לוכדות בפועל מונה **תמונות-פנים, מסמכי-זהות, סריקות-חדר כולל סחיפות-360-מעלות, אודיו-מיקרופון, זיהוי-פנים** ועוד. ההיקף רחב ממה שרוב תהליכי-ההסכמה מתארים.
- **"ספרות-הפיקוח מבססת את אתיקת-הפיקוח."** סקירה של **80 מחקרים** מצאה ש-**35% לא חשפו את מערך-הנתונים שלהם, 40% העריכו מודל-בודד, 30% לא יכלו להשחזר ורק 25%** עמדו ברף-הדיווח. בסיס-הראיה דק בדיוק בשאלות שמוסד צריך מענה עליהן לפני פריסה.
- **"פרטיות היא תיבת-סימון של ציות ולא אילוץ-עיצוב."** כמעט כל כלי-AI שמאשר, חוזה או מעריך תלוי בנתוני-לומד, מה שהופך צמצום-נתונים להחלטת-עיצוב. כלי שדורש את הנתונים אינו מחזיק הגדרת-פרטיות אופציונלית; יש לו תלות-נתונים שהעיצוב בחר.
- **מודעות לפרקטיקות-נתונים אינה נובעת מלראות אותן.** [[bergdahl-student-epistemic-agency-ai-2026|Bergdahl (2026)]] מצא ש-**66% מ-47 תלמידי כיתה ז'** בחרו באפשרות הפחות מגנה ב[[conversational-ai|צ'אטבוטים]] שקוראים את הכתיבה שלהם. **47%** נוספים דחו השפעה אלגוריתמית כ"סתם כיף" — **חודש לאחר** שיעור שבו הכיתה צפתה בהתנהגות המתועדת שלה מוקרנת בשידור חי, הגיבה שזה "מפחיד", וכמה נשארו לאורך ההפסקה כדי להמשיך להשתמש בפלטפורמה. הוראת-פרטיות שהופכת את המנגנון לגלוי בלי להפוך את המחיר לקונקרטי משאירה את העמדה ללא שינוי. המחבר מציין שהציונים הנמוכים כאן עשויים להיות **מהימנים יותר מהגבוהים**, מכיון שאין תשובה צפויה חברתית לפריטים האלה, בעוד אחריות וממשל מזמינים את התגובה הנשמעת-נכונה.

## Connected Concepts

- [[remote-proctoring]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[k-12]]
- [[ethics]]
- [[regulation]]
- [[equity-in-ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[pedagogical-safety]]
- [[legal-issues-and-risks]]
- [[student-experience]]
- [[student-support-and-success]] — student records, cross-office data sharing, and federated risk modeling

## Connected Articles

- [[bekos-contextual-leakage-ai-chat-platforms-2026]] — Penny for your prompts: contextual leakage in AI chat platforms (Bekos et al. 2026)
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch et al. 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — Agentic literacy debt: the structural AI-literacy gap from autonomous agents (Nama 2026)
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: anonymization and consent for authentic learning data
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving federated LLM cognitive diagnosis
- [[agarwal-ethical-values-norms-aied-2026]] — Ethical values and norms for AI in education
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — What proctoring systems capture, and the privacy literature's absence from the evidence base
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
