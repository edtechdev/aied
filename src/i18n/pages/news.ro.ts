/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Romanian visitor can see what the
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

const ro: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Newsletterul săptămânal al bazei de cunoștințe despre inteligența artificială în educație: ce înseamnă cercetarea nouă pentru cadrele didactice, dezvoltatori, cercetători și administratori.',
  introHtml:
    'Un rezumat săptămânal din <a href="/aied/">baza de cunoștințe despre inteligența artificială în educație</a>, despre ce înseamnă cercetarea publicată în cursul săptămânii pentru cadrele didactice, dezvoltatori, cercetători și administratori. Fiecare număr leagă lucrarea din spatele fiecărei afirmații, iar lucrările interne de la final urmăresc ce s-a schimbat pe site.',
  feedsHtml:
    'Două fluxuri RSS o difuzează. <a href="/aied/news/rss.xml">Fluxul newsletterului</a> conține doar numerele, o intrare pe săptămână. <a href="/aied/rss.xml">Fluxul bazei de cunoștințe</a> conține fiecare rezumat nou de articol pe măsură ce este adăugat, adică același material din care provin numerele, la un ritm mult mai ridicat.',
  empty: 'Nu a fost publicat încă niciun număr.',
  allIssues: 'Toate numerele',
  otherIssuesAria: 'Alte numere',
  issueLabel: 'Numărul {issue}',
};

export default ro;
