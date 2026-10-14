---
title: Математична освіта
created: "2026-10-13T22:12:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови.*

> **Математична освіта** — дослідження того, як здобувачі опановують математику та як AI може підтримувати викладання математики, охоплюючи афективне тьюторство, когнітивну діагностику за письмовими роботами, оцінювання [[desirable-difficulties|productive struggle]], поведінку в пошуку допомоги, співпрацю викладача з AI при генерації наочних матеріалів і траєкторії [[student-ai-interaction|student-AI interaction]]. Математична освіта — найактивніша [[discipline-specific-aied|domain-specific]] [[research-methods-aied|research]] галузь цієї бази знань: 32 статті, які разом досліджують, як AI може підтримувати — а іноді підривати — математичне навчання від елементарних дробів до вищої освіти.

## Питання для роздумів

- Математичні задачі мають чіткі правильні відповіді, проте потребують багатого міркування, тому математика є улюбленим полігоном для AI-тьюторства. Коли ви застрягли на математичній задачі, яка допомога насправді допомагає вам навчатися — відповідь, підказка чи питання — і на чому AI, найімовірніше, зупиниться за умовчанням?
- Дослідження виявляють, що AI-тьютори часто за умовчанням надмірно допомагають, рідко вимагаючи строгості, навіть коли здобувачі готові. Якби ви проєктували тьютора, як би ви вирішували, коли притримати допомогу, щоб зберегти «продуктивну боротьбу», що будує розуміння?
- Сторінка показує, що здобувачі, які просять підказки надто рано або пробігають їх поверхнево, зазвичай опановують менше. Чи траплялося вам братися за підказку через нетерплячість, а не через справжнє зусилля? Що це говорить про те, як підтримка з боку AI може підривати навчання, а не підтримувати його?
- Системи когнітивної діагностики на основі AI іноді генерують галлюциновані докази й надмірно приписують помилки, а навіть сильні моделі погано працюють, читаючи справжні письмові роботи здобувачів. Наскільки ви б довіряли тьютору, який діагностує, що саме ви зробили неправильно, за вашими чернетками?
- LLM змінюють відповіді на математично еквівалентних формулюваннях задач — та сама задача, подана інакше, змінює результат. Що це говорить про використання AI для оцінювання або діагностики математичного розуміння?

## Вступ

Математична освіта стала однією з головних галузей досліджень у сфері [[ai-education|AI in education]], бо математичні задачі мають чіткі правильні відповіді, проте потребують багатого міркування, — що робить їх ідеальними для вивчення ефективності тьюторства, валідності оцінювання та того, як AI-інструменти взаємодіють із когніцією та афектом здобувача. Статті цієї бази знань розкривають і потенціал математичних AI-тьюторів, і стійкі виклики: надмірний скаффолдинг, який підриває продуктивну боротьбу, галлюцинації в когнітивній діагностиці та складність урівноваження допомоги з боку AI зі справжнім навчанням.

### Основні дослідницькі теми

**AI-тьюторство математики та скаффолдинг** — найбільший кластер: чотири статті досліджують, як AI-тьютори підтримують або підривають математичне навчання. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]** демонструє, що додавання афективної обізнаності — розпізнавання емоцій здобувача з тексту та виразу обличчя — дає перевагу в 23-пунктовому показнику виграшних сеансів у математичному тьюторстві, пов’язуючись із [[affective-computing]] та [[affective-tutoring]]. **[[zhang-tutormoments-2026|TutorMoments]]** оцінює 462 анотованих викладачами транскрипти тьюторства з математики в 2–7 класах і виявляє, що фронтьєрні моделі за умовчанням схиляються до надмірної допомоги, рідко вимагаючи строгості, навіть коли здобувачі готові, — що прямо кидає виклик узгодженості між AI-корисністю та принципами [[scaffolding]]. **[[lak2026-hint-button-unproductive-use|An et al.]]** проаналізували 999 здобувачів за три семестри в ITS *Decimal Point* і виявили, що передчасні прохання про підказки та поверхневе їх читання стійко передбачають знижені [[learning-gains|learning gains]], навіть за контролем [[prior-knowledge|prior knowledge]] — висновок, який пов’язується з [[help-seeking]] та [[learning-analytics]].

**Соціально-емоційна підтримка може купувати ефективність, а не досягнення.** Додавання LLM-шару майндфулнес до тьютора з алгебри для сьомого класу залишило навчання та тривожність щодо математики незмінними між групами (42 зі 252 здобувачів проаналізовано після збоїв), проте здобувачі в умовах майндфулнес досягли порівнянного навчання за менший час і з меншою кількістю запитаних підказок ([[mindful-llm-math-tutoring-2026|Rief et al., 2026]]).

**[[cognitive-diagnosis|Cognitive diagnosis]] та оцінювання** досліджують здатність AI оцінювати математичне мислення. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] додають масштабне дослідження складності завдань, що охоплює математику й читання: на 5 170 завданнях для K-5, відкаліброваних за моделлю Раша IRT, zero-shot оцінки складності від GPT-4o корелювали помірно-сильно зі справжньою складністю (r = 0,83 математика, r = 0,81 читання), але були нерівномірними між класами, тоді як підхід на основі ознак (ознаки, вилучені LLM, у моделях на деревах рішень) досягав кореляцій до r = 0,87, причому рівень класу та кількість слів були найголовнішими предикторами. Дослідження пропонує практичний семикроковий робочий процес для тестувальників і застерігає, що узагальнення за межі математики та читання K-5 неясне. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** зіставив 18 LLM на 3 036 діагностичних вердиктах, анотованих викладачами, із письмових математичних робіт, виявивши, що всі моделі сильно відстають (F1 < 0,5) з систематичним надмірним приписуванням і галлюцинуванням доказів, — що пов’язується з [[knowledge-tracing]], [[hallucination-risk]] та викликами [[multimodal]] оцінювання. **[[representation-robustness-llm-math-problem-solving|Nath et al.]]** показали, що [[llm]]-вирішення [[problem-solving]] сильно залежить від поверхневої форми подання — моделі змінюють правильність на еквівалентних формулюваннях задач, — що викликає занепокоєння щодо [[assessment-validity]] при AI-оцінюванні математики.
**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi and Olaoye (2026)]]** показують протилежний шлях оцінювання математичних відповідей: їхнє програмне забезпечення Automated Extended Essay Grading Software оцінює завдання з розгорнутою відповіддю з математики в іспиті з економіки для старшої школи за семантичною подібністю до схеми оцінювання WAEC, без навчання на оцінених роботах, і погоджується з 12 екзаменаторами за внутрішньокласовою кореляцією 0,863 (середні міри) з коефіцієнтами Пірсона від 0,604 до 0,864. Узгодженість найвища там, де бали найнижчі — програмне забезпечення в середньому дало 5,94 із 20 проти 5,97 у екзаменаторів, кожен екзаменатор перевірив лише 84 з 1 008 робіт, і автори пояснюють низькі бали неознайомленістю кандидатів із відповідями в комп’ютерному форматі.

**[[student-engagement|Student engagement]] та ШІ-грамотність** досліджує, як здобувачі взаємодіють із AI-інструментами математики. **[[epistemic-proactivity-math|Abdelghani et al.]]** простежили часові траєкторії взаємодії студента з AI в математичному навчанні, виявивши шлях розвитку від поверхневого [[prompt-engineering|prompting]] до «епістемічної проактивності» — активного, [[self-directed-learning|self-directed]] прагнення до концептуального розуміння. Це пов’язується з [[ai-literacy]], [[metacognition]] та [[self-regulated-learning]]. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]** виявив, що AI-адаптивні платформи суттєво покращили розуміння дробів у здобувачів із труднощами в навчанні математиці, що пов’язується з [[personalized-learning]] та [[adaptive-learning]].

**Підтримка викладачів** досліджує AI-інструменти для педагогів математики. **Рольова гра зі змодельованим студентом** також служить практиці викладачів: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] створили *Student GPT* — спеціальний ChatGPT [[conversational-ai|chatbot]], який відігравав роль учня середньої школи з поширеними [[misconceptions]] щодо пропорційного міркування, даючи майбутнім викладачам математики середньої школи безризикову практику в діагностиці та скеруванні думок здобувача до правильних рішень, — що ілюструє [[generative-ai|GenAI]]-підсилену [[simulation]] як доповнення до дорогих платформ на кшталт TeachLivE для побудови знань педагогічного змісту про хибні уявлення здобувачів.

Єдиним галузевим синтезом цієї предметної області в базі знань є PRISMA-огляд 2021–2025, що охопив 42 дослідження, відібрані з 922 записів (каппа Коена = 0,88), і він додає категорію, якої бракує кластерам сторінки: автоматизацію для викладачів, де MATH41 підтримує швидке створення математичних завдань для здобувачів різних рівнів, а гібридна модель CognifyNet аналізує патерни активності здобувачів, щоб педагоги могли рано виявляти виникаючі труднощі. Той самий огляд локалізує сліпу пляму галузі — за частками предметних областей досліджень освіта становить 60 %, комп’ютерні науки 28 %, і лише одне дослідження належало до психології, залишаючи емоційний вплив, довіру та етику порівняно недослідженими — та наполягає, що технічну здатність не слід ототожнювати з продемонстрованою ефективністю в аудиторії. ([[ai-mathematics-education-prisma-review-2026]])

**Математика у вищій освіті** досліджує вплив AI на просунуту математичну практику. **[[genai-runaway-object-math-higher-ed|Bui et al.]]** застосували [[sociocultural-learning|socio-cultural]] теорію до [[generative-ai|GenAI]] в університетській математиці, аналізуючи AI як «невгамовний об’єкт», який перетворює академічну практику швидше, ніж [[governance|institutional]] та педагогічні норми.

**LLM-тьюторство та [[learning-design|instructional design]]** — новий кластер із двох досліджень 2026 року, які загострюють доказову базу математичної освіти. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu, and Sun (2026)]] розробили керовану правилами [[intelligent-tutoring|LLM tutoring system]] для текстових математичних задач початкової школи, чия триярусна архітектура (діагностика → вибір наміру → обмежена генерація відповіді) покращила узгодженість взаємодії та зменшила передчасне надання відповідей у пілотному занятті з 40 здобувачів п’ятого класу — доказ того, що процедурні математичні галузі потребують [[guardrails|structured rule-guards]] на тлі іншого стохастичного LLM-скаффолдингу. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, and Wang (2026)]] застосували модель розумної аудиторії до студентів магістратури з математики й виявили статистично значущі прирости (p < .05) у проєктуванні навчальних цілей у вимірах стандартів навчальної програми, підручника та умов здобувача.

Проєктування підказок саме по собі є вимірюваним важелем: на бенчмарку MathDial педагогічно обґрунтована сократична «Tutor Prompt» підвищила Success@N і різко знизила Telling@N відносно базової підказки і для GPT-4o, і для GPT-4o-mini ([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]).

**[[generative-ai|GenAI]] для задач математичного моделювання** розширює генеративну лінію за межі рутинних вправ. AI-платформа, розроблена за підходом ADDIE, використала пряму пропорційність у математиці середньої школи як ілюстративну тему, вирішуючи проблему браку часу й ресурсів у викладачів на проєктування якісних задач моделювання: наявні інструменти зазвичай генерують звичайні текстові задачі або рутинні вправи, тоді як платформа мала на меті генерувати ресурси, що розвивають компетентності математичного моделювання, спираючись на затверджені принципи проєктування та [[prompt-engineering|retrieval-augmented generation]].

- **Візуальний ланцюжок міркувань: розрив [[agency|autonomy]] в геометрії.** GeoVAD-Bench діагностує проміжні візуальні засоби, а не фінальні відповіді, на 600 задачах на допоміжні побудови (200 легких, 200 середніх, 200 складних) і виявляє стійкий патерн: надання еталонної допоміжної діаграми помірно підвищує точність (+3,3, +3,0, +7,0 пунктів у трьох моделях), тоді як залишення моделі самій будувати допоміжну пряму на шляху до правильної відповіді розширює розрив на 10,0–13,5 пунктів, причому дві моделі працюють гірше, ніж коли в них не було жодного візуального міркування. Чотири категорії процесуальних помилок пояснювали 93,1 % і 89,7 % приписаних невдач. Для навчання [[problem-solving]] висновок такий, що діаграмний скаффолдинг треба тренувати та оцінювати окремо від точності відповідей. ([[geovad-bench-visual-chain-of-thought-geometry-2026]])
- **Задачі, вразливі до AI, втрачають час навчання та утримання в пам’яті.** Десятилітня панель із 3,2 мільйона взаємодій в ALEKS виявила, що час навчання на текстових задачах — тих, що найлегше переносяться в AI-підказки, — впав на 26,9 % після виходу ChatGPT, тоді як протекторовані завдання на утримання в пам’яті показали 25 % зниження шансів правильної відповіді ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).
- **Здобувачі цінують негайний зворотний зв’язок, але не користуються платформами опціональної практики.** З 157 здобувачів [[genai-practice-platform-maths-feedback-2026|Chen et al. (2026)]] спостерігали, як 95 зареєструвалися і лише 34 спробували виконати завдання; користувачі найвище оцінили залученість (79 % згоди), тоді як лише 42 % надали перевагу платформі над наявним збірником задач.
- **AI може підвищувати досягнення, розширюючи гендерний розрив.** У шеститижневому квазіексперименті з 115 здобувачами старшої школи в Нігерії зворотний зв’язок від ChatGPT підвищив досягнення в розв’язуванні квадратних рівнянь порівняно з традиційним викладанням (29,18 проти 24,06), проте здобувачі чоловічої статі перевершили здобувачів жіночої статі (30,95 проти 25,16) попри відсутність гендерної різниці в самоефективності — застереження щодо справедливості для AI-підтримки математики ([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]).

### Зв’язки з суміжними поняттями

Математична освіта лежить у межах ширшої області [[stem-education]] з характерними зв’язками з [[intelligent-tutoring]] та [[intelligent-tutoring|AI Tutoring]] через сильну традицію когнітивних тьюторів і досліджень ITS у математиці, зі [[scaffolding]] через літературу про продуктивну боротьбу та використання підказок, з [[affective-computing]] через тривожність щодо математики та емоційно обізнане тьюторство, з [[knowledge-tracing]] та [[assessment-validity]] через дослідження когнітивної діагностики та оцінювання, а також із [[teacher-role]] через співпрацю викладача з AI в математичній інструкції. Зв’язок із [[k-12]] особливо сильний — багато статей з математики стосуються контекстів K-12, — тоді як зв’язки з [[higher-ed]] виникають у підготовці викладачів та просунутій математичній практиці.

## Наслідки для викладачів математики

- **Сприймайте AI-тьюторство як важіль пошуку допомоги, а не як виправлення здатностей.** [[lak2026-hint-button-unproductive-use|Hint-use research]] показує, що передчасні прохання про підказки та поверхневе читання підказок передбачають нижчі здобутки, — тому проєктування того, *коли і як* здобувачі шукають допомоги в AI, важливіше за саму «сиру» здатність тьютора. Заохочуйте здобувачів спробувати перед тим, як просити, і показуйте допомогу в момент потреби, а не на вимогу.
- **Бережіть продуктивну боротьбу.** [[zhang-tutormoments-2026|TutorMoments]] виявляє, що моделі за умовчанням надмірно допомагають, рідко вимагаючи строгості; налаштовуйте AI-підтримку так, щоб вона скаффолдила, а не вирішувала, і стежте за заміною відповідей, що руйнує міркування.
- **Не сприймайте вивід AI-діагностики як істину.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]] показує, що LLM відстають у діагностиці математичного мислення (F1 < 0,5) з надмірним приписуванням і галлюцинованими доказами; використовуйте AI-діагностику як пропозицію, яку варто перевірити за справжньою роботою здобувача.
- **Стежте за крихкістю до поверхневої форми в AI-оцінюванні.** [[representation-robustness-llm-math-problem-solving|Representation sensitivity]] означає, що еквівалентні задачі можуть змінювати відповіді AI, — це ризик для валідності AI-оцінювання математики; надавайте перевагу [[human-in-the-loop-ai|human review]] при високоставочному оцінюванні.
- **Використовуйте AI, щоб знизити планку для персоналізованої практики.** [[ai-powered-personalized-learning-elementary-fractions-2026|Adaptive platforms]] покращили розуміння дробів у здобувачів із труднощами в навчанні математиці; розгортайте AI-адаптивні інструменти вибірково для здобувачів, які потребують диференційованої підтримки.
- **Залишайте викладача під контролем AI-генерованих навчальних матеріалів.** [[teacher-control-ai-generation-math-visuals|Teacher control of AI visuals]] підтримує рамкову модель, яка урівноважує ефективність AI із педагогічною коректністю.

## Пов’язані поняття

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

## Пов’язані статті
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
- [[generative-ai-reduced-study-time-math]] — ALEKS mastery platform: text-based problems most AI-susceptible
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
