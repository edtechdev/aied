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
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const sw: FaqStrings = {
  title: 'FAQ',
  h1: 'Maswali Yanayoulizwa Sana',
  introHtml:
    'Sehemu hii hujibu maswali ya kawaida kuhusu <strong>Akili Bandia katika elimu</strong> — yale yanayosema utafiti kuhusu jinsi Akili Bandia inavyoathiri ufundishaji na kujifunza, na jinsi walimu, watoa mafunzo na wabunifu wa mafunzo wanavyoweza kuitumia ushahidi huo katika mazoezi. Kila jibu hufupisha matokeo ya utafiti uliofupishwa katika hifadhi hii ya maarifa, na huunganisha swali na dhana na makala husika kwa usomaji wa kina.',
  assistantHtml:
    'Una swali ambalo halijibiwi hapa? Uliza msaidizi wako wa Akili Bandia kwa kutumia ukurasa <a href="/aied/ai">Tumia Hifadhi Hii ya Maarifa na Msaidizi Wako wa Akili Bandia</a>, ambao unaonyesha jinsi ya kuelekeza wakala kwenye katalogi kamili ili kupata majibu yenye msingi na marejeo.',
  empty: 'Hakuna FAQ bado.',
  sectionHeadings: {
    "Start here": "Anza hapa",
    "Course and institutional policy": "Kozi na sera za taasisi",
    "Designing courses and activities": "Kubuni kozi na shughuli",
    "Assessment, feedback and integrity": "Tathmini, maoni na uadilifu",
    "How students learn and use AI": "Jinsi wanafunzi wanavyojifunza na kutumia AI",
    "Particular learners, access and wellbeing": "Wanafunzi mbalimbali, ufikivu na ustawi",
    "Careers and AI literacy": "Taaluma na ujuzi wa AI",
    "Building and evaluating educational AI": "Kujenga na kutathmini AI ya kielimu",
    "Research practice": "Mazoea ya utafiti",
  },
  sectionBlurbs: {
    "Start here": "Maswali mawili mapana yanayofaa kusomwa kabla ya maswali mahususi, ukiwa katika nafasi yoyote.",
    "Course and institutional policy": "Kwa walimu wanaounda kanuni ambazo wanafunzi watasoma, na kwa wasimamizi na wabunifu wa mafunzo wanaozitasimamia katika ngazi ya programu.",
    "Designing courses and activities": "Kwa yeyote anayeamua AI inapoingia katika kazi, muhula au kozi ya mtandaoni, na kwa walimu wanaotaka kurudishiwa muda ambao AI ilipaswa kuwapa.",
    "Assessment, feedback and integrity": "Hili ni kundi kubwa zaidi, kwa sababu hapa ndipo ushahidi ulio wazi zaidi na hapa ndipo matokeo yanagusa rekodi ya mwanafunzi.",
    "How students learn and use AI": "Kwa maswali kuhusu wanafunzi wanachopata kweli, wanachoweza kupoteza, na jinsi ya kuweka kujifunza pamoja nao.",
    "Particular learners, access and wellbeing": "Kwa walimu na wafanyakazi wa msaada wanaobadilisha muundo kulingana na waliopo darasani, na kwa wasimamizi wanaofikiria wale wasiokuwepo.",
    "Careers and AI literacy": "Kwa wabunifu wa mitaala na viongozi wa programu wanaowajibu wanafunzi wanaouliza haya yote ni ya nini.",
    "Building and evaluating educational AI": "Kwa watengenezaji, wabunifu wa mafunzo na watafiti wanaoweka mwalimu wa kidijitali, uigaji au jukwaa katika kozi halisi.",
    "Research practice": "Kwa watafiti wanaoripoti, kukagua au kupanga kazi katika uwanja huu.",
  },
};

export default sw;
