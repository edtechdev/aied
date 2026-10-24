/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const hi: ConceptsStrings = {
  title: 'अवधारणाएँ',
  h1: 'अवधारणाएँ',
  introHtml:
    'साइट के सभी अवधारणा पृष्ठ, उन्हीं अनुभागों में जो बाएँ साइडबार में हैं। हर पृष्ठ बताता है कि AI और शिक्षा में किसी विचार का क्या अर्थ है, शोध ने उसके बारे में क्या पाया, और वह किन अध्ययनों पर आधारित है। <a href="/aied/concepts/ai-education/">शिक्षा में AI</a> वह छत्र है जो इन्हें जोड़ता है।',
  browseHtml:
    'अवधारणा पृष्ठ ऑफ़लाइन पढ़ने के लिए <a href="/aied/aied.epub">EPUB</a> या <a href="/aied/aied.pdf">PDF</a> के रूप में भी उपलब्ध हैं। इसके बजाय किसी प्रश्न, शोधपत्र, उपकरण, खोज या अपने सहायक से शुरुआत करनी हो तो <a href="/aied/faq">सामान्य प्रश्न</a>, <a href="/aied/journal">जर्नल</a>, <a href="/aied/resources">संसाधन</a>, <a href="/aied/search">खोज</a> या <a href="/aied/ai">AI पृष्ठ</a> देखें।',
  countTemplate: '{count} अवधारणा पृष्ठ, {strands} अनुभागों में समूहित।',
  empty: 'अभी कोई अवधारणा पृष्ठ नहीं है।',
};

export default hi;
