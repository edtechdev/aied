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
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
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
  strandBlurbs: {
    'Foundations of AI in education':
      'क्षेत्र का समग्र दृष्टिकोण: शिक्षा में AI क्या है, यह कैसे विकसित हुआ, और कौन से अंतर्विषयक विषय (AI साक्षरता, मानव-AI सहयोग, कर्तृत्व) हर अन्य अनुभाग को आकार देते हैं।',
    'Learning and instruction':
      'AI किस प्रकार शिक्षण और अधिगम का समर्थन करता है, उन शिक्षाशास्त्रों, अधिगम सिद्धांतों और अधिगमी-केंद्रित प्रक्रियाओं के माध्यम से जिनमें वह काम करता है।',
    'Technologies and techniques':
      'तकनीकी परत: वे AI मॉडल और विधियाँ जो शिक्षा प्रौद्योगिकी को शक्ति देती हैं, और उन पर बनी अधिगमी-मॉडलिंग तथा ट्यूटरिंग प्रणालियाँ।',
    'AI in the disciplines':
      'विभिन्न विषयों और शैक्षिक स्तरों पर AI का अनुप्रयोग: क्षेत्र की विषयवार कवरेज।',
    'Assessment and measurement':
      'AI अधिगमियों का मूल्यांकन करता है और यह भी बदलता है कि हम AI प्रणालियों और उनके प्रभाव का मूल्यांकन कैसे करते हैं।',
    'Equity, ethics, and responsible use':
      'समानता, पहुँच और जिम्मेदारी शिक्षा में AI के केंद्र में हैं।',
  },
  empty: 'अभी कोई अवधारणा पृष्ठ नहीं है।',
};

export default hi;
