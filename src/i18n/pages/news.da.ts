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
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const da: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Det ugentlige nyhedsbrev fra vidensbasen om AI i uddannelse: hvad ny forskning betyder for undervisere, udviklere, forskere og administratorer.',
  introHtml:
    'En ugentlig orientering fra <a href="/aied/">vidensbasen om AI i uddannelse</a> om, hvad ny forskning offentliggjort i ugen betyder for undervisere, udviklere, forskere og administratorer. Hvert nummer linker til artiklen bag hver påstand, og det interne arbejde nederst følger, hvad der er ændret på selve sitet.',
  feedsHtml:
    'To RSS-feeds leverer den. <a href="/aied/news/rss.xml">Nyhedsbrevets feed</a> indeholder kun numrene, ét element om ugen. <a href="/aied/rss.xml">Vidensbasens feed</a> indeholder hvert nyt artikelsammendrag, efterhånden som det tilføjes, altså det samme materiale som numrene bygger på, men med en langt højere frekvens.',
  emailHtml:
    'For at få hvert nummer på e-mail skal du indsætte nyhedsbrevets feed i <a href="https://blogtrottr.com/">Blogtrottr</a>, en gratis tredjepartstjeneste, der sender et feed til din indbakke efter en tidsplan, du selv vælger. Tjenestens mails indeholder reklamer.',
  empty: 'Der er endnu ikke udgivet numre.',
  allIssues: 'Alle numre',
  otherIssuesAria: 'Andre numre',
  issueLabel: 'Nummer {issue}',
};

export default da;
