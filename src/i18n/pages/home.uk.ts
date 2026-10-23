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

const uk: HomeStrings = {
  title: 'Головна',
  h1: 'База знань про ШІ в освіті',
  introHtml: `Ласкаво просимо до Бази знань про ШІ в освіті, вільного ресурсу в суспільному надбанні про <a href="/aied/concepts/ai-education/">штучний інтелект в освіті</a> для тих, хто викладає, навчається, проєктує або організовує цей процес. Вона підсумовує та синтезує результати нещодавніх освітніх досліджень відкритого доступу. Сторінки пише й оновлює ШІ-агент під редакційним керівництвом розробника сайту.`,
  navHeading: 'Навігація сайтом',
  navHtml: `Переглядайте покажчик у лівій бічній панелі, упорядкований за напрямами, або <a href="/aied/search">шукайте</a> тему. Сторінки статей стискають одну статтю до її мети, методів і висновків; сторінки концепцій збирають те, що дослідження кажуть про одну ідею, і посилаються на дослідження за ними. Щоб почати з питання, <a href="/aied/faq">поширені питання</a> охоплюють те, що відвідувачі питають найперше, зокрема політику курсу щодо ШІ або чи варто використовувати детектори ШІ. Щоб почати з інструменту, <a href="/aied/resources">сторінка ресурсів</a> перелічує безкоштовні інструменти та збірки, із зазначенням, хто створив кожен і скільки він коштує. Карта вище групує цю галузь у дванадцять напрямів, а <a href="/aied/concepts/ai-education/">ШІ в освіті</a> є її центральним вузлом.`,
  chatHeading: 'Спілкуйтеся з базою знань',
  chatHtml: `Уся база знань також опублікована в машиночитаних файлах, тож ви можете спрямувати на неї ШІ-чатбот або ШІ-агента й отримувати відповіді з посиланнями на сторінки. <a href="/aied/ai">Підказки тут</a>. Нові сторінки потрапляють до <a href="/aied/journal">журналу</a>, у якого є <a href="/aied/rss.xml">RSS-стрічка</a>. Для читання без мережі завантажте <a href="/aied/aied.epub">EPUB</a> або <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Рекомендовані початкові точки за аудиторіями',
  startingIntro: 'Почніть із групи, що відповідає вашій ролі.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Базові концепції',
      html: `<a href="/aied/concepts/ai-literacy/">ШІ-грамотність</a>, <a href="/aied/concepts/misconceptions/">уявлення про ШІ</a>, <a href="/aied/concepts/agentic-ai/">агентний ШІ</a>, <a href="/aied/concepts/cognitive-offloading/">когнітивне розвантаження</a> та <a href="/aied/concepts/interpreting-and-applying-aied-research/">як тлумачити та застосовувати ці дослідження</a>, зокрема чому одне дослідження рідко вирішує питання.`,
    },
    {
      id: 'instructors',
      heading: 'Викладачам',
      html: `<a href="/aied/concepts/teacher-role/">Змінна роль викладача</a>, <a href="/aied/concepts/learning-design/">проєктування навчання</a>, <a href="/aied/concepts/assessment/">оцінювання</a>, <a href="/aied/concepts/feedback/">зворотний зв'язок</a>, <a href="/aied/concepts/academic-integrity/">академічна доброчесність</a>, <a href="/aied/concepts/framing-ai-use-for-students/">формулювання використання ШІ</a> та <a href="/aied/concepts/reducing-ai-misuse/">зменшення зловживань</a>. Щодо інструментів і прикладів для конкретного предмета див. <a href="/aied/concepts/discipline-specific-aied/">ШІ у вашій власній дисципліні</a>.`,
    },
    {
      id: 'developers',
      heading: 'Розробникам',
      html: `<a href="/aied/concepts/educational-technology-developers/">Створення для освіти</a>, <a href="/aied/concepts/ai-technologies/">технології під цим</a>, <a href="/aied/concepts/intelligent-tutoring/">інтелектуальні репетитори</a>, <a href="/aied/concepts/multimodal/">мультимодальний ШІ</a>, <a href="/aied/concepts/student-modeling/">моделювання здобувача</a> та <a href="/aied/concepts/llm-training-and-fine-tuning/">навчання та адаптація моделі для викладання</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Адміністраторам',
      html: `<a href="/aied/concepts/administrator/">Роль адміністратора</a>, <a href="/aied/concepts/governance/">управління ШІ</a>, <a href="/aied/concepts/educational-policy-ai/">інституційна політика</a>, <a href="/aied/concepts/legal-issues-and-risks/">правові питання та ризики</a> та <a href="/aied/concepts/change-management/">управління змінами</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Дослідникам',
      html: `<a href="/aied/concepts/research-methods-aied/">Методи досліджень у AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">теорії та концепції</a>, <a href="/aied/concepts/ai-ed-evaluation/">оцінювання інтервенції ШІ в освіті</a>, <a href="/aied/concepts/educational-measurement/">освітнє вимірювання</a>, <a href="/aied/concepts/learning-gains/">вимірювання навчальних здобутків</a> та <a href="/aied/concepts/limitations-in-aied-research/">сквозні межі цієї доказової бази</a>.`,
    },
  ],
  statsHeading: 'Що містить база знань',
  statsIntro:
    'Кожна сторінка датована, а наведені нижче показники відображають те, що опубліковано зараз; дата «останнє оновлення» наприкінці списку є найсвіжішою правкою.',
  conceptMap: {
    title: 'Карта концепцій ШІ в освіті',
    desc:
      'Радіальна карта з «ШІ в освіті» в центрі, поєднаним з дванадцятьма концепціями верхнього рівня: ' +
      'моделювання, навчання, справедливість, зворотний зв’язок, ШІ-грамотність, оцінювання, ' +
      'дисципліни, педагогіка, етика, технології, оцінювання AIED та дослідження.',
    navLabel: 'Концепції ШІ в освіті',
    center: 'ШІ в освіті',
    nodes: {
      'student-modeling': 'Моделювання',
      'learning-theories': 'Навчання',
      'equity-in-ai-education': 'Справедливість',
      feedback: 'Зворотний зв’язок',
      'ai-literacy': 'ШІ-грамотність',
      assessment: 'Оцінювання',
      'discipline-specific-aied': 'Дисципліни',
      pedagogy: 'Педагогіка',
      ethics: 'Етика',
      'ai-technologies': 'Технології',
      'ai-ed-evaluation': 'Оцінювання',
      'research-methods-aied': 'Дослідження',
    },
  },
  toc: [
    { text: 'Навігація сайтом', slug: 'navigating-the-site', depth: 2 },
    { text: 'Спілкуйтеся з базою знань', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Рекомендовані початкові точки за аудиторіями', slug: 'starting-points', depth: 2 },
    { text: 'Базові концепції', slug: 'essential-concepts', depth: 3 },
    { text: 'Викладачам', slug: 'instructors', depth: 3 },
    { text: 'Розробникам', slug: 'developers', depth: 3 },
    { text: 'Адміністраторам', slug: 'administrators', depth: 3 },
    { text: 'Дослідникам', slug: 'researchers', depth: 3 },
    { text: 'Що містить база знань', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default uk;
