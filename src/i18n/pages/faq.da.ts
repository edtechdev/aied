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

const da: FaqStrings = {
  title: 'FAQ',
  h1: 'Ofte stillede spørgsmål',
  introHtml:
    'Denne sektion besvarer almindelige spørgsmål om <strong>AI i uddannelse</strong> — hvad forskningen siger om, hvordan AI påvirker undervisning og læring, og hvordan pædagoger, undervisere og instruktionsdesignere kan føre den evidens ud i praksis. Hvert svar destillerer resultater fra den forskning, der er samlet i denne vidensbase, og forbinder spørgsmålet med de relevante begreber og artikler til videre læsning.',
  assistantHtml:
    'Har du et spørgsmål, der ikke er besvaret her? Spørg din egen AI-assistent ved hjælp af siden <a href=\"/aied/ai\">Brug denne vidensbase med din egen AI-assistent</a>, som viser, hvordan man peger en agent på det fulde katalog for funderede svar med kildeangivelser.',
  empty: 'Ingen FAQ\'er endnu.',
};

export default da;
