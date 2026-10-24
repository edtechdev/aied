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

const cs: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Týdenní newsletter Znalostní báze AI ve vzdělávání: co nový výzkum znamená pro vyučující, vývojáře, výzkumníky a administrátory.',
  introHtml:
    'Týdenní přehled ze <a href="/aied/">Znalostní báze AI ve vzdělávání</a> o tom, co výzkum publikovaný v daném týdnu znamená pro vyučující, vývojáře, výzkumníky a administrátory. Každé číslo odkazuje studii za každým tvrzením a interní práce na konci sleduje, co se změnilo na samotném webu.',
  feedsHtml:
    'Přenášejí ho dva RSS kanály. <a href="/aied/news/rss.xml">Kanál newsletteru</a> obsahuje jen čísla, jeden záznam týdně. <a href="/aied/rss.xml">Kanál znalostní báze</a> obsahuje každý nový souhrn článku, jakmile je přidán, což je stejný materiál, z něhož čísla vycházejí, jen mnohem častěji.',
  empty: 'Zatím nebyla vydána žádná čísla.',
  allIssues: 'Všechna čísla',
  otherIssuesAria: 'Další čísla',
  issueLabel: 'Číslo {issue}',
};

export default cs;
