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

const da: FaqStrings = {
  title: 'FAQ',
  h1: 'Ofte stillede spørgsmål',
  introHtml:
    'Denne sektion besvarer almindelige spørgsmål om <strong>AI i uddannelse</strong> — hvad forskningen siger om, hvordan AI påvirker undervisning og læring, og hvordan pædagoger, undervisere og instruktionsdesignere kan føre den evidens ud i praksis. Hvert svar destillerer resultater fra den forskning, der er samlet i denne vidensbase, og forbinder spørgsmålet med de relevante begreber og artikler til videre læsning.',
  assistantHtml:
    'Har du et spørgsmål, der ikke er besvaret her? Spørg din egen AI-assistent ved hjælp af siden <a href=\"/aied/ai\">Brug denne vidensbase med din egen AI-assistent</a>, som viser, hvordan man peger en agent på det fulde katalog for funderede svar med kildeangivelser.',
  empty: 'Ingen FAQ\'er endnu.',
  sectionHeadings: {
    "Start here": "Start her",
    "Course and institutional policy": "Kursus- og institutionspolitik",
    "Designing courses and activities": "Design af kurser og aktiviteter",
    "Assessment, feedback and integrity": "Vurdering, feedback og integritet",
    "How students learn and use AI": "Studerendes læring og AI-brug",
    "Particular learners, access and wellbeing": "Særlige lærende, adgang og trivsel",
    "Careers and AI literacy": "Karriere og AI-kompetence",
    "Building and evaluating educational AI": "At bygge og evaluere uddannelses-AI",
    "Research practice": "Forskningspraksis",
  },
  sectionBlurbs: {
    "Start here": "To brede spørgsmål, der er værd at læse før de specifikke, uanset hvilken rolle du har.",
    "Course and institutional policy": "For undervisere, der skriver de regler, studerende læser, og for administratorer og underviserudviklere, der fastlægger dem på programniveau.",
    "Designing courses and activities": "For alle, der beslutter, hvor AI kommer ind i en opgave, et semester eller et online kursus, og for undervisere, der vil have den tid tilbage, som AI skulle have givet dem.",
    "Assessment, feedback and integrity": "Den største klynge, fordi det er her, evidensen er skarpest, og hvor konsekvenserne rammer en studerendes dokumentation.",
    "How students learn and use AI": "For spørgsmål om, hvad studerende faktisk får ud af det, hvad de risikerer at miste, og hvordan læringen bliver hos dem.",
    "Particular learners, access and wellbeing": "For undervisere og støttepersonale, der tilpasser designet til dem, der faktisk er i lokalet, og for administratorer, der tænker på dem, der ikke er.",
    "Careers and AI literacy": "For læreplansdesignere og programledere, der svarer studerende, som spørger, hvad det hele skal tjene til.",
    "Building and evaluating educational AI": "For udviklere, instruktionsdesignere og forskere, der sender en tutor, en simulering eller en platform ud i et rigtigt kursus.",
    "Research practice": "For forskere, der rapporterer, vurderer eller planlægger arbejde på feltet.",
  },
};

export default da;
