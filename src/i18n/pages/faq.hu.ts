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

const hu: FaqStrings = {
  title: 'GYIK',
  h1: 'Gyakran Ismételt Kérdések',
  introHtml:
    'Ez a szakasz a <strong>mesterséges intelligencia oktatási alkalmazásairól</strong> szóló gyakori kérdésekre ad választ — hogyan befolyásolja az AI a tanítást és a tanulást a kutatási eredmények szerint, és hogyan válthatják az oktatók, a tanárok és a tanulmánytervezők ezt a bizonyítékot gyakorlattá. Minden válasz ebben a tudásbázisban összefoglalt kutatási eredményekből építkezik, és a kérdést a mélyebb olvasáshoz vezető releváns fogalmakhoz és cikkekhez kapcsolja.',
  assistantHtml:
    'Van olyan kérdése, amelyre itt nem kap választ? Kérdezze meg a saját AI-asszisztensét a <a href=\"/aied/ai\">Tudásbázis használata a saját AI-asszisztensével</a> oldal segítségével, amely megmutatja, hogyan irányíthat egy ügynököt a teljes katalógusra megalapozott, hivatkozásos válaszokért.',
  empty: 'Még nincs GYIK.',
  sectionHeadings: {
    "Start here": "Kezdje itt",
    "Course and institutional policy": "Kurzus- és intézményi szabályzat",
    "Designing courses and activities": "Kurzusok és tevékenységek tervezése",
    "Assessment, feedback and integrity": "Értékelés, visszajelzés és integritás",
    "How students learn and use AI": "Diákok tanulása és MI-használata",
    "Particular learners, access and wellbeing": "Különböző tanulók, hozzáférés és jóllét",
    "Careers and AI literacy": "Karrier és MI-írástudás",
    "Building and evaluating educational AI": "Oktatási MI építése és értékelése",
    "Research practice": "Kutatási gyakorlat",
  },
  sectionBlurbs: {
    "Start here": "Két átfogó kérdés, amelyet érdemes a konkrétabbak előtt elolvasni, bármilyen szerepben is van.",
    "Course and institutional policy": "Azoknak az oktatóknak, akik megírják a diákok által olvasott szabályokat, valamint az intézményvezetőknek és oktatófejlesztőknek, akik programszinten határozzák meg ezeket.",
    "Designing courses and activities": "Mindenkinek, aki eldönti, hol kerül be a MI egy feladatba, egy félévbe vagy egy online kurzusba, és az oktatóknak, akik vissza akarják kapni az időt, amit a MI állítólag ad nekik.",
    "Assessment, feedback and integrity": "A legnagyobb csoport, mert itt a legerősebbek a bizonyítékok, és itt a következmények a hallgatói nyilvántartásban landolnak.",
    "How students learn and use AI": "Olyan kérdésekhez, hogy a diákok mit nyernek valójában, mit kockáztatnak elveszíteni, és hogyan tartható náluk a tanulás.",
    "Particular learners, access and wellbeing": "Azoknak az oktatóknak és támogató munkatársaknak, akik a tervezést ahhoz igazítják, aki valóban ott van a teremben, és az intézményvezetőknek, akik azokra gondolnak, akik nincsenek.",
    "Careers and AI literacy": "Tanulmánytervezőknek és programvezetőknek, akik azoknak a diákoknak válaszolnak, akik azt kérdezik, mi értelme ennek az egésznek.",
    "Building and evaluating educational AI": "Fejlesztőknek, tanulmánytervezőknek és kutatóknak, akik tutort, szimulációt vagy platformot visznek be egy valódi kurzusba.",
    "Research practice": "Azoknak a kutatóknak, akik ezen a területen jelentenek, bírálnak vagy terveznek munkát.",
  },
};

export default hu;
