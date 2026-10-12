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

const ru: HomeStrings = {
  title: 'Главная',
  h1: 'База знаний об ИИ в образовании',
  introHtml: `Добро пожаловать в <strong>базу знаний об ИИ в образовании</strong> — свободный общедоступный ресурс об <a href=\"/aied/concepts/ai-education/\">искусственном интеллекте в образовании</a> для тех, кто учит, учится, проектирует или организует этот процесс. Мы сжали последние открытые исследования до коротких структурированных страниц, которые можно прочитать и сразу применить. Несколько слов о том, как это сделано: страницы создаются и обновляются ИИ-агентом при редакционном руководстве разработчика сайта. Каждое утверждение называет работу, из которой оно взято, так что источники всегда можно проверить.`,
  navHeading: 'Как ориентироваться на сайте',
  navHtml: `Просмотрите тематический указатель в левой боковой панели, чтобы увидеть, как организована эта область, или <a href=\"/aied/search\">найдите</a> что-нибудь по всей базе знаний, если тема вам уже ясна. Страницы статей сжимают одну работу до её цели, методов и результатов, с полным библиографическим описанием и ссылками на родственные исследования; страницы концепций собирают всё, что говорят исследования об одной идее, и ведут к работам, лежащим в их основе. Если вы предпочитаете начать с вопроса, <a href=\"/aied/faq\">указатель частых вопросов</a> собрал те, которые посетители задают чаще всего, — от политики курса в отношении ИИ до того, стоит ли использовать детекторы ИИ; если вы предпочитаете начать с инструмента, <a href=\"/aied/resources\">страница ресурсов</a> перечисляет бесплатные инструменты, подборки и методики, которыми можно воспользоваться, указывая для каждого, кто его создал и сколько он стоит. Карта концепций выше показывает, что с чем связано; <a href=\"/aied/concepts/ai-education/\">ИИ в образовании</a> — это лежащая в её основе страница, группирующая концепции примерно по десяти крупным направлениям.`,
  chatHeading: 'Диалог с базой знаний',
  chatHtml: `Всё, что здесь есть, опубликовано и в машиночитаемом виде, поэтому вы можете направить своего ИИ-чатбота или ИИ-агента на базу знаний и получать ответы со ссылками на неё вместо догадок — <a href=\"/aied/ai\">подсказки для этого лежат здесь</a>. Новые страницы появляются в <a href=\"/aied/journal\">журнале</a>, у которого есть <a href=\"/aied/rss.xml\">RSS-лента</a>, если вы хотите следить за обновлениями. Для чтения без сети возьмите <a href=\"/aied/aied.epub\">EPUB</a> или <a href=\"/aied/aied.pdf\">PDF</a>.`,
  startingHeading: 'Рекомендуемые точки входа по аудиториям',
  startingIntro: 'Ниже — несколько концепций, с которых рекомендуется начать знакомство с этой базой знаний.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Базовые концепции',
      html: `<a href=\"/aied/concepts/ai-literacy/\">ИИ-грамотность</a>, <a href=\"/aied/concepts/misconceptions/\">заблуждения об ИИ</a>, <a href=\"/aied/concepts/agentic-ai/\">агентный ИИ</a>, <a href=\"/aied/concepts/cognitive-offloading/\">когнитивное разгружение</a> и <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">как интерпретировать и применять эти исследования</a>: какие выводы результаты могут и не могут обосновать и почему одно исследование редко разрешает вопрос.`,
    },
    {
      id: 'instructors',
      heading: 'Преподаватели',
      html: `<a href=\"/aied/concepts/teacher-role/\">меняющаяся роль преподавателя</a>, <a href=\"/aied/concepts/learning-design/\">проектирование обучения</a>, <a href=\"/aied/concepts/assessment/\">оценивание</a>, <a href=\"/aied/concepts/feedback/\">обратная связь</a>, <a href=\"/aied/concepts/academic-integrity/\">академическая добросовестность</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">формулирование правил использования ИИ</a> и <a href=\"/aied/concepts/reducing-ai-misuse/\">сокращение злоупотреблений</a>. Инструменты, доказательства и примеры по вашей дисциплине — в разделе <a href=\"/aied/concepts/discipline-specific-aied/\">ИИ в вашей дисциплине</a>.`,
    },
    {
      id: 'developers',
      heading: 'Разработчики',
      html: `<a href=\"/aied/concepts/educational-technology-developers/\">разработка для образования</a>, <a href=\"/aied/concepts/ai-technologies/\">лежащие в основе технологии</a>, <a href=\"/aied/concepts/intelligent-tutoring/\">интеллектуальное обучение</a>, <a href=\"/aied/concepts/multimodal/\">мультимодальный ИИ</a>, <a href=\"/aied/concepts/student-modeling/\">моделирование учащегося</a> и <a href=\"/aied/concepts/llm-training-and-fine-tuning/\">обучение и адаптация модели для преподавания</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Администраторы',
      html: `<a href=\"/aied/concepts/administrator/\">роль администратора</a>, <a href=\"/aied/concepts/governance/\">управление ИИ</a>, <a href=\"/aied/concepts/educational-policy-ai/\">политика учебного заведения</a>, <a href=\"/aied/concepts/legal-issues-and-risks/\">правовые вопросы и риски</a> и <a href=\"/aied/concepts/change-management/\">управление изменениями</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Исследователи',
      html: `<a href=\"/aied/concepts/research-methods-aied/\">методы исследований в AIED</a>, <a href=\"/aied/concepts/theories-and-frameworks/\">теории и концептуальные рамки</a>, <a href=\"/aied/concepts/ai-ed-evaluation/\">оценка внедрения ИИ в образовании</a>, <a href=\"/aied/concepts/educational-measurement/\">измерения в образовании</a>, <a href=\"/aied/concepts/learning-gains/\">измерение учебных результатов</a> и <a href=\"/aied/concepts/limitations-in-aied-research/\">сквозные ограничения этой доказательной базы</a>.`,
    },
  ],
  statsHeading: 'Что содержится в базе знаний',
  statsIntro:
    'Каждая страница здесь датирована, и база знаний растёт по мере публикации и рецензирования новых открытых исследований. Приведённые ниже числа читаются из текущего содержимого; дата — самое последнее обновление страницы.',
  conceptMap: {
    title: 'Карта концепций ИИ в образовании',
    desc:
      'Радиальная карта с «ИИ в образовании» в центре, соединённым с двенадцатью концепциями верхнего уровня: ' +
      'моделирование, обучение, справедливость, обратная связь, ИИ-грамотность, оценивание, дисциплины, педагогика, ' +
      'этика, технологии, оценка и исследования. Выберите любой узел, чтобы открыть его страницу.',
    navLabel: 'Концепции ИИ в образовании',
    center: 'ИИ в образовании',
    nodes: {
      'student-modeling': 'Моделирование',
      'learning-theories': 'Обучение',
      'equity-in-ai-education': 'Справедливость',
      feedback: 'Обратная связь',
      'ai-literacy': 'ИИ-грамотность',
      assessment: 'Оценивание',
      'discipline-specific-aied': 'Дисциплины',
      pedagogy: 'Педагогика',
      ethics: 'Этика',
      'ai-technologies': 'Технологии',
      'ai-ed-evaluation': 'Оценка',
      'research-methods-aied': 'Исследования',
    },
  },
  toc: [
    { text: 'Как ориентироваться на сайте', slug: 'navigating-the-site', depth: 2 },
    { text: 'Диалог с базой знаний', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Рекомендуемые точки входа по аудиториям', slug: 'starting-points', depth: 2 },
    { text: 'Базовые концепции', slug: 'essential-concepts', depth: 3 },
    { text: 'Преподаватели', slug: 'instructors', depth: 3 },
    { text: 'Разработчики', slug: 'developers', depth: 3 },
    { text: 'Администраторы', slug: 'administrators', depth: 3 },
    { text: 'Исследователи', slug: 'researchers', depth: 3 },
    { text: 'Что содержится в базе знаний', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default ru;
