---
title: רובוטים בחינוך
created: "2026-10-12T19:15:00-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/educational-robotics
source_updated: "2026-10-01T09:59:02-04:00"
translation_note: "תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*תרגום אוטומטי של העמוד באנגלית, שטרם נבדק בידי דובר/ת שפת אם.*

> **רובוטים בחינוך (רובוטיקה חינוכית)** — השימוש ברובוטים פיזיים או מדומים ככלים ל[[teacher-role|teaching]] וללמידה. הרובוטיקה החינוכית משתרעת על ספקטרום רחב: מערכות תכנות הנלמדות שמלמדות חשיבה חישובית ותכנות, ועד רובוטים סוציו-אסיסטיביים והומנואידיים שמורים, מספרים סיפורים, מדגימים שפת סימנים, או מתרגלים כישורים חברתיים. היא מוערכת בגידול [[problem-solving|problem solving]], [[critical-thinking|critical thinking]], [[creativity]], ומעורבות STEAM, ובהפיכת מושגי חישוב מופשטים למוחשיים באמצעות אינטראקציה מגובשת. קורפוס הרובוטיקה של מאגר הידע משתרע על תכנות המשולב ב[[curriculum-design|curriculum]], מורים קונבנסציוניים המופעלים ע״י LLM, רובוטים סוציו-אסיסטיביים ל[[storytelling-in-education|storytelling]], ולמשחק תפקידים ללמידה סוציו-רגשית. היא נתמכת בשני תחומים קשורים מאוד שנספגו לכאן: **רובוטים חברתיים** (רובוטים המיועדיםים לאינטראקציה חברתית ולבניית יחסים) ו**אינטראקציה אנוש-רובוט (HRI)** (המחקר של האופן שבו אנשים תופסים, סומכים על ולומדים עם רובוטים).

## שאלות לשימת לב

- רובוט בכיתה מוסיף [[community-of-inquiry|social presence]] מגובשת שהצ'אטבוט על המסך אינו יכול לספק. מה לדעתכם הגוף הפיזי והרמזים החברתיים של רובוט משנים באופן שבו תלמידים לומדים, סומכים ומתערבים — וממה הם עשויים להסיט?
- רובוטים חברתיים משתמשים בדיבור, מחוות ואישיות דמויי-אנוש כדי ללמד, לספר סיפורים או לתרגל כישורים חברתיים. האם רובוט שנראה ופועל כבן אדם טוב מטבעו ללמידה, או האם נוכחות חברתית זו עלולה להביא סיכונים (מידע שגוי, הסתמכות יתרה, פרטיות)שכלי תוכנה בלבד אינם מביאים?
- LLMs מאפשרים כעת לרובוטים חברתיים לנהל שיחה זורמת. אם רובוט יכול לדבר כמו מורה, מה עדיין תלוי בגיבושו הפיזי — והיכן הוספת 'גוף' באמת חשובה ללמידה לעומת היותה פשוט נובלטה?
- חשבו על פעם שלמדתם משהו על ידי מניפולציה פיזית של אובייקט או צפייה בפעולותיכם מניבות תוצאה נראית. כיצד תכנות רובוט פיזי עשוי להעמיד רעיונות מופשטים (כמו לוגיקת תכנית) באופן יעיל יותר מכתיבת קוד על מסך?

## מבוא

הרובוטיקה החינוכית היא יישום נפרד אך קשור מאוד של [[ai-education|AI in education]]. שלא כמו הוראה תוכנה-בלבד [[intelligent-tutoring|intelligent tutoring]] או צ'אטבוטי [[llm]], רובוטים מוסיפים נוכחות **מגובשת** ולעתים קרובות **חברתית** — סוכן פיזי שלומדים יכולים לראות, לתפעל, ו(ביתר תלמידים) לשוחח איתו. הגיבוש הזה הוא מרכזי לערך ה[[pedagogy|pedagogical]] שלהם: הוא מעמיד לוגיקת תכנות מופשטת בהתנהגות נצפית, והוא יכול לתמוך בבניית יחסים ומעורבות רגשית שמערכות בלתי-מגובשות אינן יכולות.

העדות דלילה יותר מנפח העבודה שמציעים: סקירה של בינה מלאכותית ורובוטיקה בחינוך מוצאת שרוב המחקרים האמפיריים כוללים לומדים מתחת לגיל 13 במשך ארבעה שבועות או פחות, מרוכזים במדינות מעטות שהשקיעו מוקדם, עם [[learning-gains|learning performance]] כתוצאה הנחקרת ביותר ואתיקה, שוויון ומדיניות מפגרות אחרי הפריסה ([[white-wu-robotics-ai-education-2026|White and Wu (2026)]]).

### רובוטים חברתיים ואינטראקציה אנוש-רובוט

שני קווים מעצבים את הצד החברתי של הרובוטיקה בחינוך.

**רובוטים חברתיים** הם רובוטים המיועדיםים למעורבות אנשים באמצעות אינטראקציה חברתית, תוך שימוש ברמזים דמויי-אנוש כמו דיבור, מחווה, הבעת פנים ואישיות כדי לתקשר, ללמד, לסייע או ללוות. בחינוך, רובוטים חברתיים (הומנואידים כמו iCub, Pepper, Reachy, ורובוטים מלווים) משמשים להוראה, סיפור סיפורים, משחק תפקידים, תמיכת שפה, וכשותפי לימודה. הנוכחות החברתית שלהם היא ההבחנה המפתח מסוכני [[agentic-ai|AI agents]] מבוססי-תוכנה, ומאפשרת בניית יחסים ומעורבות רגשית. התקדמות ב[[llm|large language models]] הרחיבה באופן דרמטי את מה שרובוטים חברתיים יכולים לומר ולעשות, והאפשרה הוראה קונבנסציונית זורמת ואדפטיבית — תוך הצגת סיכונים כמו מידע שגוי, [[cognitive-offloading|over-reliance]], והפרות [[privacy]], מה שמניע גישות תכן מבוססות-ידע.

**אינטראקציה אנוש-רובוט (HRI)** היא המחקר הבין-תחומי של האופן שבו אנשים ורובוטים מתקשרים, הכולל תפיסה, תקשורת, שיתוף פעולה, והדינמיקה החברתית, הקוגניטיבית וה[[ethics|ethical]] של התקשורת הזו. בחינוך, HRI יוצר את הבסיס לאופן שבו לומדים תופסים, סומכים על ולומדים עם רובוטים — בין אם בתכנות רובוט, בשיחה עם רובוט הוראה, או בתרגול תרחישים חברתיים. מחקר [[research-methods-aied|research]] ב-HRI בודק כיצד מראה הרובוט, התנהגותו, הקשר המשימה, והגיבוש מעצבים [[usability-research|user experience]], אמון, סוכנות ולמידה. דאגות מפתח ב-HRI חינוכי כוללות שימור [[agency]] אנושי, בניית [[trust]], תמיכה ב[[self-efficacy]], והבטחת שהתקשורת עם רובוטים תומכת ולא מערערת עצמאות ולמידה חברתית. זה מחבר רובוטיקה ל[[human-ai-collaboration]] ול[[social-emotional-learning]].

### כיצד רובוטים משמשים בחינוך

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]] מוסיפים טיפולוגיית תפקידים ולא רשימת טכנולוגיות: חמשת סוגי רובוט הכיתה הנגזרים מסדנאות שלהם נבדלים לפי *פונקציה פדגוגית ורמת הפשטה*, לא לפי חומרה. סוג א מריץ הדגמה לא-אינטראקטיבית של דפוסים חברתיים גנריים (תיאטרון רגשי סקריפטואלי שאחריו דיון בדינמיקות כמו הסלמה או אי-הבנה); סוג ב הוא רובוט אינטראקטיבי מגיב-מגע התומך בתיאטרון פיזי פרטיפנטיבי, [[embodied-learning|embodied learning]], מודעות גבול וויסות רגשי; סוג ג הוא שותף דיבור בשפה המדגים אמפתיה ונזכר באינטראקציות עם תלמיד בודד, ויוצר הגדרה מוגנת אחד-על-אחד לגילוי-עצמי; סוג ד מונחה חיצונית ע״י מומחה חבוי כמו בובה עם דרגות חופש נוספות, ומיועד לשטיפת היררכיה חברתית; וסוג ה הוא רובוט לא-אינטראקטיבי המשחזר פעולות שנצפו לאחרונה בבית הספר כך שתלמידים יכולים להרהר על התנהגות ממוקמת — הניגוד לסוג א הוא בדיוק ההפשטה הספציפית-הקשר שלו ולא הממוצע. הטיפולוגיה מפורשת לגבי היותה מרחב תכן לא-מאומץ המבוסס על תוכנית בריאות-נפש לאומית אחת, כך שהיא תפריט לתכנון והערכה של תפקידי רובוט, לא עדות שאחד מהם עובד.

- **חשיבה חישובית ותכנות:** רובוטים הניתנים-לתכנות (למשל, LEGO, פלטפורמות מבוססות-בלוקים) מסייעים ללומדים לחבר קוד לתוצאות אמיתיות. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] מקשר חשיבה חישובית לתכניות STEAM תיכוניות, ו[[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] משלב תכנות בלוקים עם סוכן [[conversational-ai|conversational AI]] ומשוב רובוט מגובש. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] מאפשר למתחילים לשלוט ברובוטים מדומים בשפה טבעית.

- **הוראה ואספקת ידע:** מחקר [[knowledge-based-design-generative-social-robots-2026|Knowledge-based design research]] ו[[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] מפתחים רובוטים חברתיים גנרטיביים המופעלים ע״י LLM שמורים לסטודנטים להשכלה גבוהה, ומטפלים בסיכונים כמו מידע שגוי ו[[cognitive-offloading|overreliance]]. מחקר [[task-context-trust-educational-hri-2026|Research on trust]] מראה שמה שרובוט עושה (הקשר המשימה) מעצב אמון הלומד יותר מהמראה שלו, עם האמון הגבוה ביותר במהלך משימות הוראה.

- **סיפור סיפורים ומעורבות:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] ו[[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] משתמשים ברובוטים חברתיים אינטראקטיביים המופעלים ע״י LLM לסיפור סיפורים כדי להגביר מוטיבציה ומעורבות, בעוד ש[[icub-humanoid-storytelling-llm-hri-2025|the iCub narrative HRI study]] חוקר סיפור סיפורים שיתופי-יצירתי בין בני אנוש להומנואידים.

- **למידה סוציו-רגשית ו[[inclusive-learning|inclusion]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] משתמש במשחק תפקידים מתווך-רובוט לתרגל התערבות של צופה-מן-הצד נגד בריונות, ו[[pepper-robot-sign-language-lis-2025|work with the Pepper robot]] חוקר תקשורת שפת-סימנים של רובוט לתמיכה בלומדים חירשים. [[pepper-social-robot-formal-education-scoping-review-2026|A scoping review]] ממפה את השימוש ב-Pepper בחינוך רשמי.

- **עצמאות וסוכנות:** סקירה שיטתית [[human-autonomy-agency-hri-review-2025|A systematic review]] מסנתזת כיצד HRI משפיע על עצמאות ותחושת סוכנות אנושית, ומגשר בין מסגרות תכן לדרישות [[regulation|regulatory]] (EU AI Act, IEEE Ethically Aligned Design). [[social-robot-study-companions|Social robots as study companions]] ו[[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|robot–LLM integration in creative writing]] חוקרים תפקידי רובוט נוספים.

- **גישות מבוססות-פרויקט ומבוססות-משחק:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] מציג קורס רובוטיקה מבוסס-פרויקט, ו[[game-based-gamified-robotics-education-review-2026|a systematic review]] משווה למידה מבוססת-משחק וגמיפיקציה ברובוטיקה חינוכית.

- **למידת חיזוק ו-sim-to-real בתהליך רובוטיקה שלם.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao and Wang (2026)]] ממירים תהליך מחקר רובוטיקה מקצה-לקצה — הרכבה, בדיקות חשמליות, אימון מדיניות מבוסס-סימולציה, ופריסה פיזית — לקורס [[k-12|high-school]] שנבנה על הומנואיד פתוח אחד (ToddlerBot, בעלות חלקים שדווחה בפחות מ-6,000 דולר אמריקאי) במהלך שמונה פגישות בת שלוש שעות. זוגות חולקים רובוט אחד ומאמנים [[reinforcement-learning|walking policy]] ב[[simulation]] לפני שהם מפריסים אותו לחומרה, עם שערי בטיחות (בדיקת עמידה עוברת לפני הליכה) שהופכים את סדר התלות לנראה. מכיוון שארטיפקט משותף מתגמל את הצוות ולא את הפרט, המסגרת מפרידה בין ביצועי הרובוט להבנה אינדיבידואלית: תלמידים מחליפים תפקידים, כל אחד מגיש תחזית והסבר נפרדים בכל נקודת ביקורת, וצעד נתמך אינו מטופל במפורש כעדות לשליטה קונספטואלית — האזהרה של המחברים שעברת אבן דרך ברובוט אינה הבנתה.

- **רובוטיקת תחרות כבעיית אקוסיסטם, לא כבעיית ערכה.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] ממקמים את האילוץ הקושר על רובוטיקה K–12 פחות בתכנית הלימודים או בחומרה מאשר במנטורינג טכני מקומי ממושך, ומראים שהוא מבוזר גאוגרפית: באינדיאנה, ההשתתפות ב-FIRST LEGO League קרסה בעונת המרחוק של 2020, ההשתתפות העירונית התאוששה בהדרגה, וההשתתפות הכפרית לא, ונשארה בסמוך לרמה שלאחר 2020 עד 2025–2026. מסגרת ARC שלהם הופכת את המנטורינג לאובייקט מהנדס — מכללות מריצות קורס הנושא-קרדיט שמכין סטודנטים לתואר ראשון כמנטורים לסדנאות לצוותים בקרבת מקום, ותוכניות בתי ספר בוגרות הופכות למרכזים משניים שתלמידיהם המנוסים הופכים למנטורי עמיתים לבתי ספר נוספים, כך שההשגה מתפשטת מעבר לאזור הכלכלה של כל אוניברסיטות באמצעות לולאה מחזקת-עצמה. ניסוי באוניברסיטה אחת יצר שלוש קבוצות FLL כפריות והזיז חיבור קהילתי של סטודנטים מ-1.86 ל-4.00 בסולם של חמש נקודות (השינוי הגדול ביותר מכל שנמדד, לפני ביטחון הוראת מושגים טכניים ב-+1.29), בעוד שסימולציית מרקוב מפורשת-מרחבית של 1,925 בתי ספר ציבוריים באינדיאנה חזה 992 תוכניות בית ספר לאחר 40 שנה בהנחות מתונות לעומת 161 ללא ARC. העדות היא ברמת כדאיות — שבעה מנטורים וארבעה הורים, דיווחים עצמיים רטרוספקטיביים, אין קבוצת ביקורת — אך המסגרת ניידת לכל תוכנית רובוטיקה: מה שמתרחב או נכשל להתרחב הוא קיבולת מנטורינג וגאוגרפיית המרכז, לא הרובוט ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **פיתוח ילד ולומדים צעירים:** [[ai-toys-child-development-2026|AI-enabled toys and child development]] מזיז את העדשה לצעצועי בינה מלאכותית מסחריים בגיל הרך, ובוחן כיצד משחקים מופעלי-בינה מלאכותית משפיעים על פיתוח ילד ומשחק. זה מרחיב את הרובוטיקה החינוכית מעבר לרובוטי כיתה לצעצועים צרכניים שילדים נתקלים בהם בבית, ומעלה שאלות על [[pedagogical-agent|agents]] במשחק, [[trust-calibration|trust calibration]], [[agency]], ו[[well-being]] עבור הלומדים הצעירים ביותר — אזור שבו הדרכת התכן דלילה יותר מאשר לתכניות רובוטיקה חינוכיות גיל-בית-ספר.
- **קוד מוחשי ורובוטים חברתיים ב[[ai-literacy|AI literacy]] של גן-ילדים.** Lee (2026) משלב משחק לא-מחובר, קוד מוחשי (Bee-Bot, Ozobot), ודיאלוג מודרך עם רובוט בינה מלאכותית חברתי בתכנית Play With AI (PL-AI) לגן-ילדים וגיל הרך. מחקר ה[[design-based-research|design-based research]] מתעד כיצד פעילויות רובוטיקה מגובשות ומוחשיות אלו תומכות בחשבת הילדים המתפתחת על מושגי בינה מלאכותית, עם ארבעה עקרונות תכן — משחק מגובש, קוד מוחשי, דיאלוג מודרך ותכנון משותף עם מורה — שמציעים מודל מתאים-פיתוח לרובוטיקה ולחינוך בינה מלאכותית של [[early-childhood-elementary-ai-education|early childhood]].

- **שתי פרדיגמות ללומדים צעירים: רובוטי קוד ורובוטים חברתיים גנרטיביים.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li and Lee (2025)]] ממסגרים רובוטיקת גיל-רך כצימוד של שתי פרדיגמות [[pedagogy|pedagogical]], כל אחת עם בסיס תיאורטי נפרד. **רובוטי קוד** (Bee-Bot, KIBO, Matatalab) יורדים מ-LOGO של Papert ומגשימים [[constructivist|constructionism]] — ילדים לומדים על ידי יצירה ובונים [[computational-thinking|computational thinking]] באמצעות תכנות מוחשי. **רובוטים חברתיים גנרטיביים**, המופעלים ע״י [[generative-ai|generative AI]], מבוססים על [[sociocultural-learning|social constructivism]], ופועלים כעמיתים או מורים קונבנסציוניים שמספקים [[scaffolding|scaffold]] ללמידה בתוך אזור הפיתוח הקרוב של הילד ותומכים בפיתוח סוציו-רגשי. גישת **Creative Project Approach** בחמישה שלבים שלהם לשילוב שני סוגי הרובוט לגישת הפרויקט שומרת מורים כמקלים שמנחים תקשורת ילד-רובוט, מאיזנים אוטומציה עם [[creativity]], ושומרים [[agency]] ילד.

- **מה שרובוטיקת חשיבה חישובית בגן-ילדים עושה בפועל.** סקירה שיטתית של 53 מחקרים מצאה למידה מבוססת-בעיה, סיפור סיפורים, ופיגום כאסטרטגיות הנמצאות בשימוש התדיר ביותר, עם רוב המחקרים לא מכנים מסגרת חשיבה חישובית ומשתמשים בכלי הערכה אד הוק במקום במכשיר מאומת כמו TechCheck-K ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou & Sapounidis (2026)]]).

### גיבוש ופדגוגיה

עיצוב מגדיר הוא שרובוטים יעילים כאשר הם תומכים במטרות למידה אמיתיות — לא כתרגילים טכניים מבודדים. מקרן רובוטי מותקן-שולחן המקושר עם ChatGPT נייד תוך שניתן עזר (6.7 לעומת 7.3/10, p = .41) אך החזיק את הציון שלו לאחר הנסיגה (7.0 לעומת 4.4/10, p = .003), ציון העברה קצרת-טווח גבוה ב-60% — רווח תלוי-משימה שהמחברים מייחסים לשיתוף-מיקום מרחבי ולא להחלפה כללית ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). הערך של רובוט תלוי בהקשר הפדגוגי: הוראת חשיבה חישובית ([[computational-thinking]]), תמיכה ב[[stem-education|STEAM]], בניית כישורי [[cs-education|programming]], מוטיבציה ללומדים ([[motivation]], [[student-engagement|engagement]]), או תמיכה ב[[social-emotional-learning]] וב[[equity-in-ai-education|inclusion]]. הרובוטיקה מתחברת גם ל[[project-based-learning]], [[game-based-learning]], ו[[experiential-learning]]. שיקולי תכן מפתח כוללים שימור [[agency]] הלומד, בניית [[trust]], תמיכה ב[[self-efficacy]], והעמדת הלמידה ב[[embodied-learning|embodied interaction]]. ב[[language-learning]], עדות [[robot-assisted-language-learning-meta-analysis-2026|meta-analytic evidence]] מצביעה על היעילות של למידת שפה מסייעת-רובוט מגובשת.

- **נתיבים ללמידת רובוטיקה המופעלת בבינה מלאכותית.** מחקר איכותני [[educational-robotics-pathways-2026|A qualitative study]] של תלמידי תיכון בתכנית רובוטיקה+AI מצא למידה באמצעות פרקטיקת עולם-אמיתי, תכנון, וביטוי יצירתי משחקי (עדשה קונסטרוקטיביסטית, אפיסטומולוגית-פלורליסטית).

## מושגים מקושרים
- [[early-childhood-elementary-ai-education]] — Early childhood and elementary AI education
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## מאמרים מקושרים

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Scoping Review of the Pepper Robot in Formal Education
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational Thinking and Educational Robotics
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Knowledge-Based Design for Generative Social Robots
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Task Context and Trust in Educational HRI
- [[human-autonomy-agency-hri-review-2025]] — Human Autonomy and Agency in HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub Narrative HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper and Sign Language
- [[social-robot-study-companions]] — Social Robots as Study Companions
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration in Creative Writing
- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Robot-mediated CT in kindergarten
- [[ai-toys-child-development-2026]] — AI-enabled toys and child development
- [[creative-project-approach-ai-early-childhood-2025]] — The Creative Project Approach: integrating coding and generative social robots into early-childhood projects (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Five functionally distinct types of classroom robot, from scripted demonstration to one-to-one empathic dialogue (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: a hubs-based framework that treats technical mentorship capacity and hub geography, not hardware, as the constraint on rural K–12 robotics programs (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Teaching Reinforcement Learning and Humanoid Robotics to High-School Students: An Expert-Validated Curriculum Design on a Low-Cost Open Platform
- [[aifred-desk-robotic-ai-guidance-2026]] — A desk-mounted robotic projector: co-located guidance preserved transfer where laptop ChatGPT lost it
