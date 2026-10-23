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
  introHtml: `Добро пожаловать в базу знаний об ИИ в образовании, свободный общедоступный ресурс об <a href=\"/aied/concepts/ai-education/\">искусственном интеллекте в образовании</a> для тех, кто учит, учится, проектирует или организует этот процесс. Она обобщает и синтезирует новейшие открытые исследования в области образования. Страницы пишет и обновляет ИИ-агент при редакционном руководстве разработчика сайта.`,
  navHeading: 'Как ориентироваться на сайте',
  navHtml: `Просмотрите указатель в левой боковой панели, упорядоченный по направлениям, или <a href=\"/aied/search\">найдите</a> нужную тему. Страницы статей сжимают одну работу до её цели, методов и результатов; страницы концепций собирают всё, что говорят исследования об одной идее, и ведут к работам, лежащим в их основе. Чтобы начать с вопроса, <a href=\"/aied/faq\">FAQ</a> охватывает то, о чём посетители спрашивают первым делом, например политику курса в отношении ИИ или стоит ли использовать детекторы ИИ. Чтобы начать с инструмента, <a href=\"/aied/resources\">страница ресурсов</a> перечисляет бесплатные инструменты и подборки, указывая, кто создал каждый из них и сколько он стоит. Карта выше группирует эту область в двенадцать направлений, а <a href=\"/aied/concepts/ai-education/\">ИИ в образовании</a> является её центральным узлом.`,
  chatHeading: 'Диалог с базой знаний',
  chatHtml: `Вся база знаний также публикуется в машиночитаемом виде, поэтому вы можете направить на неё ИИ-чатбота или агента и получать ответы со ссылками на страницы. <a href=\"/aied/ai\">Подсказки для этого лежат здесь</a>. Новые страницы появляются в <a href=\"/aied/journal\">журнале</a>, у которого есть <a href=\"/aied/rss.xml\">RSS-лента</a>. Для чтения без сети скачайте <a href=\"/aied/aied.epub\">EPUB</a> или <a href=\"/aied/aied.pdf\">PDF</a>.`,
  startingHeading: 'Рекомендуемые точки входа по аудиториям',
  startingIntro: 'Начните с группы, которая соответствует вашей роли.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Базовые концепции',
      html: `<a href=\"/aied/concepts/ai-literacy/\">ИИ-грамотность</a>, <a href=\"/aied/concepts/misconceptions/\">заблуждения об ИИ</a>, <a href=\"/aied/concepts/agentic-ai/\">агентный ИИ</a>, <a href=\"/aied/concepts/cognitive-offloading/\">когнитивное разгружение</a> и <a href=\"/aied/concepts/interpreting-and-applying-aied-research/\">как интерпретировать и применять эти исследования</a>, в том числе почему одно исследование редко разрешает вопрос.`,
    },
    {
      id: 'instructors',
      heading: 'Преподаватели',
      html: `<a href=\"/aied/concepts/teacher-role/\">меняющаяся роль преподавателя</a>, <a href=\"/aied/concepts/learning-design/\">проектирование обучения</a>, <a href=\"/aied/concepts/assessment/\">оценивание</a>, <a href=\"/aied/concepts/feedback/\">обратная связь</a>, <a href=\"/aied/concepts/academic-integrity/\">академическая добросовестность</a>, <a href=\"/aied/concepts/framing-ai-use-for-students/\">формулирование правил использования ИИ</a> и <a href=\"/aied/concepts/reducing-ai-misuse/\">сокращение злоупотреблений</a>. Инструменты и примеры по конкретной дисциплине смотрите в разделе <a href=\"/aied/concepts/discipline-specific-aied/\">ИИ в вашей дисциплине</a>.`,
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
    'Каждая страница датирована, а приведённые ниже числа отражают то, что опубликовано прямо сейчас; дата «последнего обновления» в конце списка является самым свежим изменением.',
  conceptMap: {
    title: 'Карта концепций ИИ в образовании',
    desc:
      'Радиальная карта с «ИИ в образовании» в центре, соединённым с двенадцатью концепциями верхнего уровня: ' +
      'моделирование, обучение, справедливость, обратная связь, ИИ-грамотность, оценивание, дисциплины, педагогика, ' +
      'этика, технологии, оценка и исследования.',
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
