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
}

const ru: FaqStrings = {
  title: 'FAQ',
  h1: 'Часто задаваемые вопросы',
  introHtml:
    'В этом разделе собраны ответы на частые вопросы об <strong>ИИ в образовании</strong> — что говорят исследования о влиянии ИИ на преподавание и обучение и как педагоги, преподаватели и разработчики учебных курсов могут применить эти данные на практике. Каждый ответ обобщает результаты исследований, представленных в этой базе знаний, и связывает вопрос с соответствующими <a href=\"/aied/concepts/\">концепциями</a> и статьями для более глубокого изучения.',
  assistantHtml:
    'Не нашли ответа на свой вопрос? Задайте его своему ИИ-ассистенту с помощью страницы <a href="/aied/ai">Использование этой базы знаний со своим ИИ-ассистентом</a>, где показано, как направить агента на полный каталог, чтобы получить обоснованные ответы со ссылками на источники.',
  empty: 'Пока нет ни одного вопроса FAQ.',
};

export default ru;
