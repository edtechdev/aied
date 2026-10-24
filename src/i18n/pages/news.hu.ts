/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Hungarian visitor can see what the
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

const hu: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Az AI az oktatásban tudásbázis heti hírlevele: mit jelentenek az új kutatási eredmények az oktatók, fejlesztők, kutatók és intézményvezetők számára.',
  introHtml:
    'Heti összefoglaló az <a href="/aied/">AI az oktatásban tudásbázisból</a> arról, mit jelentenek a héten megjelent új kutatási eredmények az oktatók, fejlesztők, kutatók és intézményvezetők számára. Minden kiadás linkeli minden állítás mögött a tanulmányt, az alján lévő belső rész pedig azt követi, mi változott magán az oldalon.',
  feedsHtml:
    'Két RSS-hírcsatorna hordozza. A <a href="/aied/news/rss.xml">hírlevél-hírcsatorna</a> csak a kiadásokat tartalmazza, hetente egy bejegyzést. A <a href="/aied/rss.xml">tudásbázis-hírcsatorna</a> minden új cikkösszefoglalót tartalmaz, amint bekerül, ez ugyanaz az anyag, amelyből a kiadások készülnek, csak sokkal sűrűbb ütemben.',
  emailHtml:
    'Az egyes kiadások e-mailben történő megkapásához illessze be a hírlevél-hírcsatornát a <a href="https://blogtrottr.com/">Blogtrottr</a> szolgáltatásba, amely ingyenes, harmadik fél által üzemeltetett, és a választott ütemezés szerint küldi a hírcsatornát a postaládájába. Az üzenetei hirdetéseket tartalmaznak.',
  linkedinHtml:
    'A hírlevelet a <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a> oldalon is követheti, ahol minden kiadás LinkedIn-hírlevélként jelenik meg a hírfolyamában.',
  empty: 'Még nem jelent meg kiadás.',
  allIssues: 'Összes kiadás',
  otherIssuesAria: 'További kiadások',
  issueLabel: 'Kiadás {issue}',
};

export default hu;
