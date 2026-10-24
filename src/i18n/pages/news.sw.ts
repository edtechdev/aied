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

const sw: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Jarida la kila wiki la Hifadhi ya Maarifa ya Akili Bandia katika Elimu: kile utafiti mpya unachomaanisha kwa waalimu, wasanidi programu, watafiti, na wasimamizi.',
  introHtml:
    'Muhtasari wa kila wiki kutoka <a href="/aied/">Hifadhi ya Maarifa ya Akili Bandia katika Elimu</a> kuhusu kile utafiti mpya uliochapishwa katika wiki unachomaanisha kwa waalimu, wasanidi programu, watafiti, na wasimamizi. Kila toleo huweka kiungo cha karatasi iliyo nyuma ya kila dai, na kazi za ndani chini hufuatilia kile kilichobadilika kwenye tovuti yenyewe.',
  feedsHtml:
    'Husambazwa kwa njia mbili za RSS. <a href="/aied/news/rss.xml">Mlisho wa jarida</a> huwa na matoleo pekee, kipengele kimoja kwa wiki. <a href="/aied/rss.xml">Mlisho wa hifadhi ya maarifa</a> huwa na kila muhtasari mpya wa makala mara unapoongezwa, ambao ni nyenzo hiyo hiyo ambayo matoleo huchotwa, kwa kasi kubwa zaidi.',
  emailHtml:
    'Kupata kila toleo kwa barua pepe, bandika mlisho wa jarida kwenye <a href="https://blogtrottr.com/">Blogtrottr</a>, huduma ya bure ya kampuni nyingine inayotuma mlisho kwenye kikasha chako kwa ratiba unayochagua. Ujumbe wake huwa na matangazo.',
  empty: 'Hakuna toleo lililochapishwa bado.',
  allIssues: 'Matoleo yote',
  otherIssuesAria: 'Matoleo mengine',
  issueLabel: 'Toleo {issue}',
};

export default sw;
