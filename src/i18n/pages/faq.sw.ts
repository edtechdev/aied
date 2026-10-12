/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
}

const sw: FaqStrings = {
  title: 'FAQ',
  h1: 'Maswali Yanayoulizwa Sana',
  introHtml:
    'Sehemu hii hujibu maswali ya kawaida kuhusu <strong>Akili Bandia katika elimu</strong> — yale yanayosema utafiti kuhusu jinsi Akili Bandia inavyoathiri ufundishaji na kujifunza, na jinsi walimu, watoa mafunzo na wabunifu wa mafunzo wanavyoweza kuitumia ushahidi huo katika mazoezi. Kila jibu hufupisha matokeo ya utafiti uliofupishwa katika hifadhi hii ya maarifa, na huunganisha swali na dhana na makala husika kwa usomaji wa kina.',
  assistantHtml:
    'Una swali ambalo halijibiwi hapa? Uliza msaidizi wako wa Akili Bandia kwa kutumia ukurasa <a href="/aied/ai">Tumia Hifadhi Hii ya Maarifa na Msaidizi Wako wa Akili Bandia</a>, ambao unaonyesha jinsi ya kuelekeza wakala kwenye katalogi kamili ili kupata majibu yenye msingi na marejeo.',
  empty: 'Hakuna FAQ bado.',
};

export default sw;
