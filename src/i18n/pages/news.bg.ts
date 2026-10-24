/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Spanish visitor can see what the
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

const bg: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Седмичният бюлетин на Базата знания за AI в образованието: какво означават новите изследвания за преподавателите, разработчиците, изследователите и администраторите.',
  introHtml:
    'Седмичен преглед от <a href="/aied/">Базата знания за AI в образованието</a> за това какво означават публикуваните през седмицата нови изследвания за преподавателите, разработчиците, изследователите и администраторите. Всеки брой свързва статията зад всяко твърдение, а вътрешната работа в края проследява какво се промени по самия сайт.',
  feedsHtml:
    'Издават го две RSS емисии. <a href="/aied/news/rss.xml">Емисията на бюлетина</a> съдържа само броевете, по един запис седмично. <a href="/aied/rss.xml">Емисията на базата знания</a> съдържа всяко ново резюме на статия при добавянето му, което е същият материал, от който се правят броевете, но с много по-висока честота.',
  empty: 'Още не са публикувани броеве.',
  allIssues: 'Всички броеве',
  otherIssuesAria: 'Други броеве',
  issueLabel: 'Брой {issue}',
};

export default bg;
