/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const bg: HomeStrings = {
  title: 'Начало',
  h1: 'База знания за AI в образованието',
  introHtml: `Добре дошли в Базата знания за AI в образованието, безплатен ресурс в публично достояние за <a href="/aied/concepts/ai-education/">изкуствения интелект в образованието</a>, предназначен за хората, които преподават, учат, проектират или управляват. Тя обобщава и синтезира съвременните образователни изследвания с отворен достъп. Страниците се пишат и актуализират от AI агент с редакторско ръководство от разработчика на сайта.`,
  navHeading: 'Навигация в сайта',
  navHtml: `Разгледайте индекса в лявата странична лента, подреден по направления, или <a href="/aied/search">потърсете</a> тема. Страниците със статии съкращават една статия до нейната цел, методи и констатации; страниците с понятия събират това, което изследванията казват за една идея, и сочат към проучванията зад нея. За да започнете от въпрос, <a href="/aied/faq">ЧЗВ</a> покриват това, което посетителите питат първо, например политика за AI в курса или дали да се използват AI детектори. За да започнете от инструмент, <a href="/aied/resources">страницата с ресурси</a> изброява безплатни инструменти и колекции, като за всеки е посочено кой го е направил и колко струва. Картата по-горе групира областта в дванадесет направления, а <a href="/aied/concepts/ai-education/">AI в образованието</a> е централният възел.`,
  chatHeading: 'Чат с базата знания',
  chatHtml: `Цялата база знания е публикувана и като машинно четими файлове, така че можете да насочите AI чатбот или агент към нея и да получавате отговори, които цитират страниците. <a href="/aied/ai">Подканите са тук</a>. Новите страници влизат в <a href="/aied/journal">дневника</a>, който има <a href="/aied/rss.xml">RSS емисия</a>. За четене офлайн изтеглете <a href="/aied/aied.epub">EPUB</a> или <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Препоръчителни начални точки по аудитории',
  startingIntro: 'Започнете с групата, която отговаря на ролята ви.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Основни понятия',
      html: `<a href="/aied/concepts/ai-literacy/">грамотността в AI</a>, <a href="/aied/concepts/misconceptions/">заблудите относно AI</a>, <a href="/aied/concepts/agentic-ai/">агентният AI</a>, <a href="/aied/concepts/cognitive-offloading/">когнитивното прехвърляне на задачи</a> и <a href="/aied/concepts/interpreting-and-applying-aied-research/">как да интерпретирате и прилагате тези изследвания</a>, включително защо една отделна проучка рядко решава въпрос.`,
    },
    {
      id: 'instructors',
      heading: 'Преподаватели',
      html: `<a href="/aied/concepts/teacher-role/">променящата се роля на преподавателя</a>, <a href="/aied/concepts/learning-design/">проектирането на обучението</a>, <a href="/aied/concepts/assessment/">оценяването</a>, <a href="/aied/concepts/feedback/">обратната връзка</a>, <a href="/aied/concepts/academic-integrity/">академичната почтеност</a>, <a href="/aied/concepts/framing-ai-use-for-students/">рамките за използване на AI</a> и <a href="/aied/concepts/reducing-ai-misuse/">намаляване на злоупотребите</a>. За инструменти и примери за вашия предмет вижте <a href="/aied/concepts/discipline-specific-aied/">AI във вашата дисциплина</a>.`,
    },
    {
      id: 'developers',
      heading: 'Разработчици',
      html: `<a href="/aied/concepts/educational-technology-developers/">проектирането за образование</a>, <a href="/aied/concepts/ai-technologies/">технологиите под повърхността</a>, <a href="/aied/concepts/intelligent-tutoring/">интелигентното туторство</a>, <a href="/aied/concepts/multimodal/">мултимодалният AI</a>, <a href="/aied/concepts/student-modeling/">моделирането на учащите се</a> и <a href="/aied/concepts/llm-training-and-fine-tuning/">обучението и адаптирането на модел за преподаване</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Администратори',
      html: `<a href="/aied/concepts/administrator/">ролята на администратора</a>, <a href="/aied/concepts/governance/">управлението на AI</a>, <a href="/aied/concepts/educational-policy-ai/">институционалната политика</a>, <a href="/aied/concepts/legal-issues-and-risks/">правните въпроси и рисковете</a> и <a href="/aied/concepts/change-management/">управлението на промените</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Изследователи',
      html: `<a href="/aied/concepts/research-methods-aied/">изследователските методи в AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">теориите и рамките</a>, <a href="/aied/concepts/ai-ed-evaluation/">оценяването на AI интервенция в образованието</a>, <a href="/aied/concepts/educational-measurement/">образователното измерване</a>, <a href="/aied/concepts/learning-gains/">измерването на ефекта от обучението</a> и <a href="/aied/concepts/limitations-in-aied-research/">общите ограничения на тази доказателствена база</a>.`,
    },
  ],
  statsHeading: 'Какво съдържа базата знания',
  statsIntro:
    'Всяка страница е датирана, а броят по-долу отразява това, което е публикувано точно сега; датата „последна актуализация“ в края на списъка е най-новата редакция.',
  conceptMap: {
    title: 'Карта на понятията на AI в образованието',
    desc:
      'Радиална карта с AI в образованието в центъра, свързан с дванадесет концепции от най-високо ниво: ' +
      'моделиране, обучение, равнопоставие, обратна връзка, грамотност в AI, оценяване, дисциплини, педагогика, ' +
      'етика, технологии, оценка и изследвания.',
    navLabel: 'Понятия за AI в образованието',
    center: 'AI в образованието',
    nodes: {
      'student-modeling': 'Моделиране',
      'learning-theories': 'Обучение',
      'equity-in-ai-education': 'Равнопоставие',
      feedback: 'Обратна връзка',
      'ai-literacy': 'Грамотност в AI',
      assessment: 'Оценяване',
      'discipline-specific-aied': 'Дисциплини',
      pedagogy: 'Педагогика',
      ethics: 'Етика',
      'ai-technologies': 'Технологии',
      'ai-ed-evaluation': 'Оценка',
      'research-methods-aied': 'Изследвания',
    },
  },
  toc: [
    { text: 'Навигация в сайта', slug: 'navigating-the-site', depth: 2 },
    { text: 'Чат с базата знания', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Препоръчителни начални точки по аудитории', slug: 'starting-points', depth: 2 },
    { text: 'Основни понятия', slug: 'essential-concepts', depth: 3 },
    { text: 'Преподаватели', slug: 'instructors', depth: 3 },
    { text: 'Разработчици', slug: 'developers', depth: 3 },
    { text: 'Администратори', slug: 'administrators', depth: 3 },
    { text: 'Изследователи', slug: 'researchers', depth: 3 },
    { text: 'Какво съдържа базата знания', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default bg;
