/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const bg: FaqStrings = {
  title: 'ЧЗВ',
  h1: 'Често задавани въпроси',
  introHtml:
    'Този раздел отговаря на често задавани въпроси за <strong>AI в образованието</strong> — какво казват изследванията за това как AI влияе на преподаването и ученето, и как преподавателите, лекторите и дизайнерите на обучение могат да приложат тези доказателства на практика. Всеки отговор извлича констатациите от изследванията, систематизирани в тази база знания, свързвайки въпроса със съответните понятия и статии за по-задълбочено четене.',
  assistantHtml:
    'Имате въпрос, на който няма отговор тук? Питайте своя AI асистент, като използвате страницата <a href="/aied/ai">Използване на тази база знания със собствен AI асистент</a>, която показва как да насочите агент към пълния каталог за обосновани, цитирани отговори.',
  empty: 'Все още няма ЧЗВ.',
  sectionHeadings: {
    "Start here": "Откъде да започнете",
    "Course and institutional policy": "Политика на курса и институциите",
    "Designing courses and activities": "Проектиране на курсове и дейности",
    "Assessment, feedback and integrity": "Оценяване, обратна връзка и почтеност",
    "How students learn and use AI": "Как студентите учат и използват AI",
    "Particular learners, access and wellbeing": "Различни обучаеми, достъп и благосъстояние",
    "Careers and AI literacy": "Кариера и AI грамотност",
    "Building and evaluating educational AI": "Създаване и оценяване на образователен AI",
    "Research practice": "Изследователска практика",
  },
  sectionBlurbs: {
    "Start here": "Два широки въпроса, които си струва да прочетете преди конкретните, каквато и роля да имате.",
    "Course and institutional policy": "За преподавателите, които пишат правилата, които студентите ще четат, и за администраторите и методистите, които ги задават на ниво програма.",
    "Designing courses and activities": "За всеки, който решава къде AI влиза в задача, семестър или онлайн курс, и за преподавателите, които искат да си върнат времето, което AI е трябвало да им даде.",
    "Assessment, feedback and integrity": "Най-големият блок, защото тук доказателствата са най-ясни и тук последствията падат върху академичния запис на студента.",
    "How students learn and use AI": "За въпроси какво студентите наистина печелят, какво рискуват да загубят и как да запазят ученето у себе си.",
    "Particular learners, access and wellbeing": "За преподавателите и екипите за подкрепа, които приспособяват дизайна към онези, които наистина са в залата, и за администраторите, които мислят за онези, които ги няма.",
    "Careers and AI literacy": "За дизайнерите на учебни програми и ръководителите на програми, които отговарят на студентите, питащи за какво е всичко това.",
    "Building and evaluating educational AI": "За разработчиците, дизайнерите на обучение и изследователите, които въвеждат AI учител, симулация или платформа в реален курс.",
    "Research practice": "За изследователите, които описват, рецензират или планират работа в тази област.",
  },
};

export default bg;
