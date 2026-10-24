/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Russian visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const ru: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Еженедельная рассылка базы знаний об ИИ в образовании: что новые исследования значат для преподавателей, разработчиков, исследователей и администраторов.',
  introHtml:
    'Еженедельный обзор из <a href="/aied/">базы знаний об ИИ в образовании</a>: что опубликованные за неделю исследования значат для преподавателей, разработчиков, исследователей и администраторов. В каждом выпуске есть ссылка на статью, лежащую в основе каждого утверждения, а внутренняя работа в конце отслеживает изменения на самом сайте.',
  feedsHtml:
    'Её разносят два RSS-канала. <a href="/aied/news/rss.xml">Канал рассылки</a> содержит только выпуски, одна запись в неделю. <a href="/aied/rss.xml">Канал базы знаний</a> содержит каждое новое резюме статьи по мере добавления, то есть тот же материал, из которого берутся выпуски, но гораздо чаще.',
  empty: 'Пока не опубликовано ни одного выпуска.',
  allIssues: 'Все выпуски',
  otherIssuesAria: 'Другие выпуски',
  issueLabel: 'Выпуск {issue}',
};

export default ru;
