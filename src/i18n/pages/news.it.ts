/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so an Italian visitor can see what the
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

const it: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    "La newsletter settimanale della base di conoscenze sull’IA nell’educazione: cosa significa la nuova ricerca per docenti, sviluppatori, ricercatori e amministratori.",
  introHtml:
    "Un breve bollettino settimanale dalla <a href=\"/aied/\">base di conoscenze sull’IA nell’educazione</a>, su cosa significa per docenti, sviluppatori, ricercatori e amministratori la nuova ricerca pubblicata nella settimana. Ogni numero collega l’articolo dietro ogni affermazione, e il lavoro interno in fondo tiene traccia di cosa è cambiato nel sito stesso.",
  feedsHtml:
    "La portano due feed RSS. Il <a href=\"/aied/news/rss.xml\">feed della newsletter</a> contiene solo i numeri, una voce a settimana. Il <a href=\"/aied/rss.xml\">feed della base di conoscenze</a> contiene ogni nuovo riassunto di articolo appena viene aggiunto, cioè lo stesso materiale da cui nascono i numeri, ma con frequenza molto maggiore.",
  empty: 'Nessun numero è ancora stato pubblicato.',
  allIssues: 'Tutti i numeri',
  otherIssuesAria: 'Altri numeri',
  issueLabel: 'Numero {issue}',
};

export default it;
