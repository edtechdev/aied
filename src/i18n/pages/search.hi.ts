/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const hi: SearchStrings = {
  title: 'खोज',
  h1: 'खोज',
  intro: 'लेखों और अवधारणाओं में खोजें। परिणामों को सीमित करने के लिए फ़िल्टर का उपयोग करें।',
  corpusIntro:
    'ज्ञान आधार में सब कुछ खोजा जा सकता है, जिसमें सामान्य प्रश्न तथा मुफ़्त उपकरण और संसाधन पृष्ठ भी शामिल हैं। इसमें वर्तमान में यह है:',
  placeholder: 'लेख, अवधारणाएँ और सामान्य प्रश्न खोजें...',
  filterLabels: {
    page_type: 'प्रकार',
    discipline: 'विषय क्षेत्र',
    level: 'स्तर',
    audience: 'इच्छित पाठक वर्ग',
    research_method: 'अध्ययन डिज़ाइन',
    page_kind: 'पृष्ठ का प्रकार',
  },
};

export default hi;