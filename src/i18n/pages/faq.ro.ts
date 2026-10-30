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

const ro: FaqStrings = {
  title: 'FAQ',
  h1: 'Întrebări frecvente',
  introHtml:
    'Această secțiune răspunde la întrebări frecvente despre <strong>inteligența artificială în educație</strong> — ce spune cercetarea despre modul în care AI afectează predarea și învățarea, și cum pot educatorii, cadrele didactice și designerii instrucționali să pună acele dovezi în practică. Fiecare răspuns distilează concluzii din cercetarea rezumată în această bază de cunoștințe, legând întrebarea de conceptele și articolele relevante pentru aprofundare.',
  assistantHtml:
    'Ai o întrebare la care nu se răspunde aici? Întreabă-ți propriul asistent AI folosind pagina <a href="/aied/ai">Folosește această bază de cunoștințe cu propriul asistent AI</a>, care arată cum să îndrepți un agent către catalogul complet pentru răspunsuri fundamentate și citate.',
  empty: 'Niciun FAQ încă.',
  sectionHeadings: {
    "Start here": "Începe aici",
    "Course and institutional policy": "Politica cursului și a instituției",
    "Designing courses and activities": "Proiectarea cursurilor și activităților",
    "Assessment, feedback and integrity": "Evaluare, feedback și integritate",
    "How students learn and use AI": "Cum învață și folosesc studenții IA",
    "Particular learners, access and wellbeing": "Elevi diferiți, acces și bunăstare",
    "Careers and AI literacy": "Cariere și alfabetizare în IA",
    "Building and evaluating educational AI": "Construirea și evaluarea IA educaționale",
    "Research practice": "Practica de cercetare",
  },
  sectionBlurbs: {
    "Start here": "Două întrebări generale care merită citite înaintea celor specifice, indiferent de rolul tău.",
    "Course and institutional policy": "Pentru cadrele didactice care scriu regulile pe care le citesc studenții și pentru administratori și specialiști în dezvoltare profesională care le stabilesc la nivel de program.",
    "Designing courses and activities": "Pentru oricine decide unde intră IA într-o sarcină, într-un semestru sau într-un curs online, și pentru cadrele didactice care vor să recupereze timpul pe care IA ar fi trebuit să li-l dea.",
    "Assessment, feedback and integrity": "Cel mai mare grup, pentru că aici dovezile sunt cele mai clare și aici consecințele ajung în dosarul studentului.",
    "How students learn and use AI": "Pentru întrebări despre ce câștigă de fapt studenții, ce riscă să piardă și cum să păstrezi învățarea la ei.",
    "Particular learners, access and wellbeing": "Pentru cadrele didactice și personalul de sprijin care adaptează proiectarea la cine este de fapt în sală, și pentru administratorii care se gândesc la cine nu este.",
    "Careers and AI literacy": "Pentru designerii instrucționali și coordonatorii de program care le răspund studenților ce întreabă la ce folosește toate acestea.",
    "Building and evaluating educational AI": "Pentru dezvoltatori, designeri instrucționali și cercetători care aduc un tutor, o simulare sau o platformă într-un curs real.",
    "Research practice": "Pentru cercetătorii care raportează, recenzează sau planifică lucrări în acest domeniu.",
  },
};

export default ro;
