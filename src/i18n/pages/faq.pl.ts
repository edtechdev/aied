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

const pl: FaqStrings = {
  title: 'FAQ',
  h1: 'Często zadawane pytania',
  introHtml:
    'Ta sekcja odpowiada na najczęstsze pytania o <strong>AI w edukacji</strong> — co badania mówią o tym, jak AI wpływa na nauczanie i uczenie się, i jak nauczyciele, wykładowcy i projektanci dydaktyki mogą wykorzystać te dowody w praktyce. Każda odpowiedź destyluje wyniki badań streszczonych w tej bazie wiedzy, łącząc pytanie z odpowiednimi pojęciami i artykułami do pogłębionej lektury.',
  assistantHtml:
    'Masz pytanie, na które tu nie ma odpowiedzi? Zapytaj własnego asystenta AI, korzystając ze strony <a href="/aied/ai">Korzystanie z tej bazy wiedzy z własnym asystentem AI</a>, która pokazuje, jak skierować agenta do pełnego katalogu, aby odpowiadał w oparciu o źródła i cytaty.',
  empty: 'Brak jeszcze FAQ.',
  sectionHeadings: {
    "Start here": "Zacznij tutaj",
    "Course and institutional policy": "Polityka kursów i instytucji",
    "Designing courses and activities": "Projektowanie kursów i zajęć",
    "Assessment, feedback and integrity": "Ocenianie, informacja zwrotna i uczciwość",
    "How students learn and use AI": "Jak studenci uczą się i korzystają z SI",
    "Particular learners, access and wellbeing": "Różni uczniowie, dostęp i dobrostan",
    "Careers and AI literacy": "Kariera i kompetencje w zakresie SI",
    "Building and evaluating educational AI": "Budowanie i ocena SI w edukacji",
    "Research practice": "Praktyka badawcza",
  },
  sectionBlurbs: {
    "Start here": "Dwa ogólne pytania, które warto przeczytać przed pytaniami szczegółowymi, niezależnie od pełnionej roli.",
    "Course and institutional policy": "Dla nauczycieli piszących zasady, które czytają studenci, oraz dla administratorów i specjalistów ds. rozwoju kadry, którzy ustalają je na poziomie programu.",
    "Designing courses and activities": "Dla każdego, kto decyduje, gdzie SI wchodzi w zadanie, semestr lub kurs online, oraz dla wykładowców, którzy chcą odzyskać czas, który SI miała im dać.",
    "Assessment, feedback and integrity": "Największy blok, bo tu dowody są najostrzejsze, a konsekwencje trafiają do dokumentacji studenta.",
    "How students learn and use AI": "Dla pytań o to, co studenci naprawdę zyskują, co mogą stracić i jak zatrzymać uczenie się przy nich.",
    "Particular learners, access and wellbeing": "Dla wykładowców i personelu wspierającego, którzy dopasowują projekt do tego, kto naprawdę jest w sali, oraz dla administratorów myślących o tych, których nie ma.",
    "Careers and AI literacy": "Dla projektantów dydaktyki i kierowników programów, którzy odpowiadają studentom pytającym, po co to wszystko.",
    "Building and evaluating educational AI": "Dla deweloperów, projektantów dydaktyki i badaczy, którzy wprowadzają tutora, symulację lub platformę do prawdziwego kursu.",
    "Research practice": "Dla badaczy, którzy raportują, recenzują lub planują pracę w tej dziedzinie.",
  },
};

export default pl;
