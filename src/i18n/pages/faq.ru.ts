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

const ru: FaqStrings = {
  title: 'FAQ',
  h1: 'Часто задаваемые вопросы',
  introHtml:
    'В этом разделе собраны ответы на частые вопросы об <strong>ИИ в образовании</strong> — что говорят исследования о влиянии ИИ на преподавание и обучение и как педагоги, преподаватели и разработчики учебных курсов могут применить эти данные на практике. Каждый ответ обобщает результаты исследований, представленных в этой базе знаний, и связывает вопрос с соответствующими <a href=\"/aied/concepts/\">концепциями</a> и статьями для более глубокого изучения.',
  assistantHtml:
    'Не нашли ответа на свой вопрос? Задайте его своему ИИ-ассистенту с помощью страницы <a href="/aied/ai">Использование этой базы знаний со своим ИИ-ассистентом</a>, где показано, как направить агента на полный каталог, чтобы получить обоснованные ответы со ссылками на источники.',
  empty: 'Пока нет ни одного вопроса FAQ.',
  sectionHeadings: {
    "Start here": "С чего начать",
    "Course and institutional policy": "Политика курса и институции",
    "Designing courses and activities": "Проектирование курсов и занятий",
    "Assessment, feedback and integrity": "Оценивание, обратная связь и честность",
    "How students learn and use AI": "Как студенты учатся и используют ИИ",
    "Particular learners, access and wellbeing": "Разные студенты, доступ и благополучие",
    "Careers and AI literacy": "Карьера и ИИ-грамотность",
    "Building and evaluating educational AI": "Создание и оценка образовательного ИИ",
    "Research practice": "Исследовательская практика",
  },
  sectionBlurbs: {
    "Start here": "Два общих вопроса, которые стоит прочитать раньше конкретных, в какой бы роли вы ни были.",
    "Course and institutional policy": "Для преподавателей, пишущих правила, которые будут читать студенты, и для администраторов и методистов, задающих их на уровне программы.",
    "Designing courses and activities": "Для всех, кто решает, где ИИ входит в задание, семестр или онлайн-курс, и для преподавателей, которые хотят вернуть время, которое ИИ должен был им дать.",
    "Assessment, feedback and integrity": "Самый большой раздел, потому что здесь доказательства наиболее чёткие, а последствия сказываются на академической истории студента.",
    "How students learn and use AI": "О том, что студенты на самом деле получают, что рискуют потерять и как удержать обучение у них.",
    "Particular learners, access and wellbeing": "Для преподавателей и сотрудников поддержки, которые адаптируют дизайн к тем, кто действительно сидит в аудитории, и для администраторов, которые думают о тех, кого там нет.",
    "Careers and AI literacy": "Для разработчиков учебных программ и руководителей программ, которые отвечают студентам на вопрос, зачем всё это нужно.",
    "Building and evaluating educational AI": "Для разработчиков, дизайнеров обучения и исследователей, которые выводят тьютора, симуляцию или платформу в реальный курс.",
    "Research practice": "Для исследователей, которые описывают, рецензируют или планируют работу в этой области.",
  },
};

export default ru;
