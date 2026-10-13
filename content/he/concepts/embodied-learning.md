---
title: למידה מגולמת
created: "2026-10-12T20:40:00-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
reviewed_by: [editor]
translation_of: concepts/embodied-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **למידה מגולמת** — העיקרון ה[[pedagogy|פדגוגי]] שלולדה מעוגנת בחוויה גופנית, באינטראקציה פיזית, ובהקשר חושי-מוטורי של הלומד. גישות מגולמות מחזיקות שהקוגניציה אינה מופשטת בלבד אלא נעצבת על ידי הגוף והאינטראקציה שלו עם הסביבה. ב[[ai-education|בינה מלאכותית בחינוך]], גילום מתממש דרך [[educational-robotics|רובוטים חינוכיים]] ו[[educational-robotics|רובוטים חברתיים]], שהנוכחות הפיזית שלהם מעגנת מושגים מופשטים (כמו לוגיקת תכנות או מיומנויות חברתיות) בהתנהגות נצפית, ניתנת-מניפולציה.

## שאלות למחשבה

- אנו נוטים לחשוב על למידה כמשהו שקורה 'בראש', עם הגוף רק נושא את המוח סביב. מה אם למידה למעשה מעוגנת בחוויה גופנית ובאינטראקציה עם הסביבה? מה הנושא אחד שלמדתם שנדמה היה שדורש את הגוף שלכם — והיה אפשר ללמוד אותו באופן מופשט בלבד?
- גישות מגולמות טוענות שסוכן פיזי, ניתן-מניפולציה מסייע ללומדים לחבר רעיונות מופשטים לתוצאות קונקרטיות — לראות תוכנית גורמת לרובוט לזוז, למשל. מתי שמתם לב שמעשה פיזי גרם למושג מופשט סוף-סוף 'להיקלט'?
- [[research-methods-aied|חוקרים]] מסוימים מתייחסים למחווה כראיה להבנה — עוקבים אחרי תנועות הידיים של סטודנטים לצד הדיבור שלהם כדי להעריך תפיסה קונספטואלית. אם הידיים של סטודנט 'יודעות' את המושג לפני המילים שלו, מה הדבר עשוי לרמוז על האופן שבו עלינו להעריך למידה?
- ביקורת מתגלה מאתגרת בינה מלאכותית 'לא-מגולמת' שמפעילה על סמלים מופשטים, בטענה שבינה מלאכותית צריכה להיות מעוצבת סביב אינטליגנציה מגולמת כדי לקיים את החשיבה של הלומדים במקום להעבירה החוצה. האם לדעתכם בינה מלאכותית שמעולם לא היתה עם גוף יכולה לתמוך בלמידה מגולמת במלואה?

## מבוא

למידה מגולמת קשורה מקרוב ל[[active-learning]], ל[[experiential-learning]], ולתיאוריות ממוקמות/[[constructivist]]. הטענה המרכזית היא שסוכן פיזי, ניתן-מניפולציה מסייע ללומדים לחבר רעיונות מופשטים לתוצאות קונקרטיות — תוכנית שגורמת לרובוט לזוז, או משחק-תפקיד עם רובוט פיזי — בדרכים שאינטראקציה מבוססת-מסך טהורה עשויה שלא. רובוטיקה היא הגילום הבהיר ביותר של בינה מלאכותית בחינוך, ומעניקה ללומדים משהו לראות, לגעת ולצפות.

### כיצד למידה מגולמת מופיעה במחקר של מאגר הידע

- **תכנות מעוגן:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] מעגן [[cs-education|תכנות בלוקים]] בביצוע רובוט מגולם, ויוצר לולאה הדוקה של עריכה, הרצה, תצפית ותיקון כדי שלומדים יראו את הקוד שלהם הופך להתנהגות.
- **אינטראקציה חברתית-רובוטית:** [[educational-robotics|רובוטים חברתיים]] המשמשים ל[[storytelling-in-education|סיפור סיפורים]] ([[motibo-digital-storytelling-robots-motivation-2026|MotiBo]], [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]), משחק-תפקיד ([[remind-robot-mediated-roleplay-antibullying-2026|REMind]]), ושפת סימנים ([[pepper-robot-sign-language-lis-2025|Pepper]]) מספקים אינטראקציה חברתית מגולמת שתומכת בלמידה יחסית ו[[social-emotional-learning|רגשית]].
- **תכונות הגילום אינן מה שמניע תוצאות.** מטא-אנליזה של 11 מחקרי RALL (N = 595, g = 0.83, I² = 84.4%) מצאה שמורפולוגיית הרובוט, המודליות, האוטונומיה והתפקיד החברתי לא מיתנו למידת L2; פורמטים מבוססי-קבוצה ניצחו אחד-על-אחד, ולכן העמדה של הרובוט, לא הגילום שלו, נשאה את האפקט ([[robot-assisted-language-learning-meta-analysis-2026|Wang et al. (2026)]]).
- **גילום וכתיבה יצירתית:** [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|מחקר על שילוב רובוט-מודל-לשוני בכתיבה יצירתית]] בודק כיצד גילום משפיע על האינטראקציה והתוצאות של הלומדים.
- **אינטראקציה אדם-רובוט:** מחקר [[educational-robotics|HRI]] ([[task-context-trust-educational-hri-2026|אמון]], [[human-autonomy-agency-hri-review-2025|סוכנות]]) בודק כיצד גילום פיזי מעצב אמון, [[student-engagement|מעורבות]], ו[[agency|אוטונומיה]].
- **מחווה כראיה להבנה:** [[multimodal-embodied-cognition-oral-explanations-2026|Morphew et al.]] משלבים מעקב מחווה בראייה-ממוחשבת עם ניתוח [[llm]] של דיבור כדי להראות שהבנה קונספטואלית של סטודנטים להנדסה בסטטיסטיקה מבועטת הן דרך דיבור והן דרך מחווה. מחוות הסבר בעלות-ביטחון גבוה מתקבצות סביב מושגים ספציפיים (במיוחד הממוצע), וצימוד מחווה-דיבור הדוק מסמן שיח קונספטואלי קוהרנטי בעוד שסטייה מסמנת רעיונות בהתפתחות — ממקם פעולה מגולמת כראיה ב[[assessment-validity|הערכה]] דרך אנליטיקת למידה [[multimodal|רב-מודאלית]], לא רק כמנגנון למידה.

### אינטליגנציה מגולמת והביקורת על בינה מלאכותית לא-מגולמת

זרם שני, יותר תיאורטי, של מחקר הגילום של מאגר הידע עוסק בתפקיד של ה*גוף* בלמידה המתווכת-[[sociocultural-learning|בינה מלאכותית]] — לא דרך רובוטים פיזיים, אלא דרך השאלה האם [[ai-technologies|מערכות בינה מלאכותית]] עצמן (או יכולות להיות) מגולמות. עבודה זו מאתגרת את הדומיננטיות של מודלי בינה מלאכותית סימבוליים, לא-מגולמים, הבנויים על עיבוד מידע מופשט:

- **בינה מלאכותית מגולמת כעיקרון עיצוב.** מסגרת **E3-HOT** טוענת שלקיים את הסוכנות הקוגניטיבית של הלומדים ואת חשיבת [[critical-thinking|הסדר-הגבוה]] (במקום לעודד [[cognitive-offloading|העברה קוגניטיבית החוצה]]), בינה מלאכותית צריכה להיות מעוצבת סביב *אינטליגנציה מגולמת* — הטמעה סיטואציונלית, השתתפות מגולמת, ויצירה קוגניטיבית — בתוך סביבת למידה משולבת-וירטואלי-אמיתית.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])
- **הגבולות של [[generative-ai|בינה מלאכותית יוצרת]] לא-מגולמת.** סכולטורה פוסט-קוגניטיביסטית טוענת שמערכות GenAI נוכחיות חסרות פרופריוספציה, סוכנות רב-מודאלית, ופרקטיקה מגולמת, ותומכת ב"בינה מלאכותית מגולמת" המעוגנת בסיטואציונליות, הופעה, וצימוד חושי-מוטורי, ומציעה כוריאוגרפיה תפיסתית-[[affective-computing|אפקטיבית]] לאינטראקציה אדם-[[student-ai-interaction|בינה מלאכותית]].([[videla-embodied-ai-education-choreography]])
- **גילום, ממוקמות, ובנייה חברתית.** ב[[science-education|למידת מדעים]], כלי בינה מלאכותית מתפקדים כ"ארטיפקטים מתוווכים" שמאפשרים קהילות פרקטיקה דיגיטליות וחציית-גבולות, ומחברים חקר אותנטי, מגולם להקשרים בעולם-האמיתי וחוצה-תחומיים.([[li-ai-science-situated-learning-teachers-2025]]) זה מקשר גילום ל[[situated-learning]] ול[[distributed-cognition]].

למידה מגולמת מתחברת ל[[educational-robotics]], ל[[educational-robotics]], ל[[educational-robotics]], ל[[active-learning]], ל[[experiential-learning]], ל[[situated-learning]], ל[[distributed-cognition]], ל[[computational-thinking]], ול[[social-emotional-learning]].

## מושגים מחוברים

- [[educational-robotics]]
- [[active-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[computational-thinking]]
- [[social-emotional-learning]]
- [[learning-theories]]
- [[multimodal]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — המודליות שמנסה לנצל גילום ישירות

## מאמרים מחוברים

- [[multimodal-embodied-cognition-oral-explanations-2026]] — מסגרת רב-מודאלית לקוגניציה מגולמת בהסברים בעל-פה
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — טיפוח למידה בר-קיימא דרך אינטליגנציה מגולמת (E3-HOT)
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[pepper-robot-sign-language-lis-2025]] — Pepper ושפת סימנים
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — שילוב רובוט-מודל-לשוני בכתיבה יצירתית
- [[robot-assisted-language-learning-meta-analysis-2026]] — מטא-אנליזה של למידת שפה מגולמת בסיוע רובוט מוגברת-בינה מלאכותית
- [[vargas-situated-learning-ai-review-2024]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[videla-embodied-ai-education-choreography]]
