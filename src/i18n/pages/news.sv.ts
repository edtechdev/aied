/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy.
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

const sv: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Veckobrevet från kunskapsbasen om AI i utbildningen: vad ny forskning betyder för lärare, utvecklare, forskare och administratörer.',
  introHtml:
    'En veckosammanfattning från <a href="/aied/">kunskapsbasen om AI i utbildningen</a> om vad ny forskning som publicerats under veckan betyder för lärare, utvecklare, forskare och administratörer. Varje nummer länkar till studien bakom varje påstående, och det interna arbetet längst ner följer vad som ändrats på själva webbplatsen.',
  feedsHtml:
    'Två RSS-flöden bär den. <a href="/aied/news/rss.xml">Nyhetsbrevets flöde</a> innehåller bara numren, en post i veckan. <a href="/aied/rss.xml">Kunskapsbasens flöde</a> innehåller varje ny artikelsammanfattning så snart den läggs till, vilket är samma material som numren hämtas från, i mycket högre takt.',
  empty: 'Inga nummer har publicerats ännu.',
  allIssues: 'Alla nummer',
  otherIssuesAria: 'Andra nummer',
  issueLabel: 'Nummer {issue}',
};

export default sv;
