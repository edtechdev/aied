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

const no: FaqStrings = {
  title: 'FAQ',
  h1: 'Ofte stilte spørsmål',
  introHtml:
    'Denne delen besvarer vanlige spørsmål om <strong>AI i utdanning</strong> — hva forskningen sier om hvordan AI påvirker undervisning og læring, og hvordan lærere, instruktører og instruksjonsdesignere kan omsette den kunnskapen til praksis. Hvert svar destillerer funn fra forskningen som er oppsummert i denne kunnskapsbasen, og kobler spørsmålet til relevante begreper og artikler for videre lesing.',
  assistantHtml:
    'Har du et spørsmål som ikke er besvart her? Spør din egen AI-assistent via siden <a href="/aied/ai">Bruk denne kunnskapsbasen med din egen AI-assistent</a>, som viser hvordan du peker en agent mot hele katalogen for å få forankrede svar med kilder.',
  empty: 'Ingen FAQ ennå.',
  sectionHeadings: {
    "Start here": "Start her",
    "Course and institutional policy": "Emnepolicy og institusjonspolicy",
    "Designing courses and activities": "Designe emner og aktiviteter",
    "Assessment, feedback and integrity": "Vurdering, tilbakemelding og integritet",
    "How students learn and use AI": "Hvordan studenter lærer og bruker AI",
    "Particular learners, access and wellbeing": "Særskilte elevgrupper, tilgang og trivsel",
    "Careers and AI literacy": "Karriere og AI-kompetanse",
    "Building and evaluating educational AI": "Bygge og vurdere pedagogisk AI",
    "Research practice": "Forskningspraksis",
  },
  sectionBlurbs: {
    "Start here": "To brede spørsmål som er verdt å lese før de konkrete, uansett hvilken rolle du har.",
    "Course and institutional policy": "For undervisere som skriver reglene studentene skal lese, og for administratorer og utdanningsutviklere som fastsetter dem på programnivå.",
    "Designing courses and activities": "For alle som avgjør hvor AI skal inn i en oppgave, et semester eller et nettkurs, og for undervisere som vil ha tilbake tiden AI skulle spare dem.",
    "Assessment, feedback and integrity": "Den største gruppen, fordi her er evidensen tydeligst og her rammer konsekvensene studentens vurderingsgrunnlag.",
    "How students learn and use AI": "For spørsmål om hva studenter faktisk får ut av det, hva de risikerer å miste, og hvordan læringen kan bli hos dem.",
    "Particular learners, access and wellbeing": "For undervisere og støttepersonale som tilpasser designet til dem som faktisk er i rommet, og for administratorer som tenker på dem som ikke er det.",
    "Careers and AI literacy": "For dem som utformer læreplaner, og for programledere som skal svare studenter som spør hva dette egentlig er godt for.",
    "Building and evaluating educational AI": "For utviklere, instruksjonsdesignere og forskere som lanserer en veileder, en simulering eller en plattform i et reelt emne.",
    "Research practice": "For forskere som rapporterer, fagfellevurderer eller planlegger arbeid på dette feltet.",
  },
};

export default no;
