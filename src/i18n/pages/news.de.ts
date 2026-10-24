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
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** How to follow the newsletter on LinkedIn. May contain inline HTML. */
  linkedinHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const de: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Der wöchentliche Newsletter der Wissensbasis zu KI in der Bildung: was neue Forschung für Lehrende, Entwickler, Forschende und die Administration bedeutet.',
  introHtml:
    'Ein wöchentlicher Überblick aus der <a href="/aied/">Wissensbasis zu KI in der Bildung</a> darüber, was in der Woche veröffentlichte neue Forschung für Lehrende, Entwickler, Forschende und die Administration bedeutet. Jede Ausgabe verlinkt die Arbeit hinter jeder Aussage, und die internen Arbeiten am Ende verfolgen, was sich auf der Website selbst geändert hat.',
  feedsHtml:
    'Zwei RSS-Feeds tragen ihn. Der <a href="/aied/news/rss.xml">Newsletter-Feed</a> enthält nur die Ausgaben, einen Eintrag pro Woche. Der <a href="/aied/rss.xml">Feed der Wissensbasis</a> enthält jede neue Artikelzusammenfassung, sobald sie hinzukommt, also dasselbe Material, aus dem die Ausgaben schöpfen, in weit höherem Tempo.',
  emailHtml:
    'Um jede Ausgabe per E-Mail zu erhalten, fügen Sie den Newsletter-Feed in <a href="https://blogtrottr.com/">Blogtrottr</a> ein, einen kostenlosen Dienst eines Drittanbieters, der einen Feed nach einem von Ihnen gewählten Zeitplan an Ihr Postfach schickt. Seine E-Mails enthalten Werbung.',
  linkedinHtml:
    'Sie können ihm auch auf <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a> folgen, wo jede Ausgabe als LinkedIn-Newsletter in Ihrem Feed erscheint.',
  empty: 'Es wurden noch keine Ausgaben veröffentlicht.',
  allIssues: 'Alle Ausgaben',
  otherIssuesAria: 'Weitere Ausgaben',
  issueLabel: 'Ausgabe {issue}',
};

export default de;
