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

const cs: FaqStrings = {
  title: 'FAQ',
  h1: 'Často kladené otázky',
  introHtml:
    'Tato sekce odpovídá na běžné otázky o <strong>AI ve vzdělávání</strong> — co výzkum říká o tom, jak AI ovlivňuje výuku a učení, a jak pedagogové, vyučující a návrháři výuky mohou tyto důkazy uvést do praxe. Každá odpověď destiluje zjištění z výzkumu shrnutého v této znalostní bázi a spojuje otázku s příslušnými pojmy a články pro hlubší čtení.',
  assistantHtml:
    'Máte otázku, na kterou tu není odpověď? Zeptejte se svého vlastního asistenta AI pomocí stránky <a href="/aied/ai">Použití této znalostní báze s vlastním asistentem AI</a>, která ukazuje, jak nasměrovat agenta na úplný katalog, aby odpovídal na základě zdrojů a citací.',
  empty: 'Zatím žádná FAQ.',
};

export default cs;
