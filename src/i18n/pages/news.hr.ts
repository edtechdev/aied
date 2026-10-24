/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Croatian visitor can see what the
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

const hr: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Tjedni newsletter baze znanja o umjetnoj inteligenciji u edukaciji: što novi nalazi istraživanja znače za nastavnike, programere, istraživače i administratore.',
  introHtml:
    'Tjedni pregled iz <a href="/aied/">baze znanja o umjetnoj inteligenciji u edukaciji</a> o tome što novo istraživanje objavljeno tijekom tjedna znači za nastavnike, programere, istraživače i administratore. Svako izdanje povezuje rad na kojem počiva svaka tvrdnja, a interni dio na dnu prati što se promijenilo na samim stranicama.',
  feedsHtml:
    'Prate ga dva RSS feeda. <a href="/aied/news/rss.xml">Feed newslettera</a> sadrži samo izdanja, jedan zapis tjedno. <a href="/aied/rss.xml">Feed baze znanja</a> sadrži svaki novi sažetak članka čim se doda, a to je isti materijal iz kojeg se crpe izdanja, samo mnogo češće.',
  empty: 'Još nije objavljeno nijedno izdanje.',
  allIssues: 'Sva izdanja',
  otherIssuesAria: 'Ostala izdanja',
  issueLabel: 'Izdanje {issue}',
};

export default hr;
