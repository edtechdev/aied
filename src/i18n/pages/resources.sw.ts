/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const sw: ResourcesStrings = {
  title: 'Rasilimali',
  h1: 'Zana na Rasilimali za Bure',
  introHtml: [
    'Mkusanyiko uliochaguliwa wa <strong>zana, makusanyo, vyombo na fomati za bure</strong> za Akili Bandia katika elimu — mambo unayoweza kutumia leo moja badala ya utafiti ambao lazima kwanza usome. Zimetengenezwa hasa na walimu, wabunifu wa mafunzo, wakurasa wa maktaba na watafiti, na nyingi zilijengwa kwa msaada wa Akili Bandia na watu ambao si watengenezaji wa kitaalamu.',
    'Sio kila kitu kilicho hapa ni cha kuingiliana. Kando ya zana za kivinjari na walimu wa Akili Bandia, utapata maktaba za prompts na \"gems\" zilizotayarishwa, makusanyo ya shughuli za darasani, hati za taarifu na sera, vyombo vya tathmini, na fomati za faili za wazi. Kila kipengele ni muhtasari mfupi unaounganisha na ukurasa unaosema ni nani aliyeutengeneza, ni kitu gani, kama msimbo wa chanzo upo, inagharimu nini kuitumia, na ni lini kiungo chake kilipokaguliwa mara ya mwisho.',
    'Kila kipengele kinaunganisha na tovuti ya nje ambayo hifadhi hii ya maarifa haidhibiti, na viungo hukaguliwa upya mara kwa mara — kila ukurasa unaonyesha tarehe ambayo kiungo chake kilithibitishwa mara ya mwisho. Kama zana imesogea, imefungwa, au inastahili kuwa hapa na haipo, njia ya haraka ni kufungua issue kwenye hazina ya msimbo.',
  ],
  empty: 'Hakuna rasilimali bado.',
  groupLabels: {
    software: 'Programu',
    'ai tutor': 'Walimu wa Akili Bandia',
    'agent skill': 'Ujuzi wa wakala',
    'prompt or gem library': 'Maktaba za prompts na gems',
    'collection of tools': 'Makusanyo ya zana',
    'collection of activities': 'Makusanyo ya shughuli',
    'assessment instrument': 'Vyombo vya tathmini',
    'open format or specification': 'Fomati na vigezo vya wazi',
    'ebook or guide': 'Vitabu vya elektroniki na miongozo',
    'case study collection': 'Makusanyo ya masomo ya kesi',
    'dataset or benchmark': 'Seti za data na vipimo',
  },
};

export default sw;
