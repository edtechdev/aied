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

const hi: FaqStrings = {
  title: 'FAQ',
  h1: 'अक्सर पूछे जाने वाले प्रश्न',
  introHtml:
    'यह अनुभाग <strong>शिक्षा में AI</strong> से जुड़े सामान्य प्रश्नों के उत्तर देता है: शोध के अनुसार AI शिक्षण और सीखने को कैसे प्रभावित करता है, और शिक्षक, प्रशिक्षक तथा अनुदेशात्मक डिज़ाइनर उस प्रमाण को व्यवहार में कैसे उतार सकते हैं। प्रत्येक उत्तर इस ज्ञान आधार में संक्षेपित शोध के निष्कर्षों को सार रूप में प्रस्तुत करता है और गहन पठन के लिए प्रश्न को संबंधित अवधारणाओं और लेखों से जोड़ता है।',
  assistantHtml:
    'कोई प्रश्न यहाँ उत्तरित नहीं है? <a href="/aied/ai">इस ज्ञान आधार का उपयोग अपने ही AI सहायक के साथ करें</a> पृष्ठ की मदद से वह प्रश्न अपने AI सहायक से पूछें, जो दिखाता है कि पूरे कैटलॉग पर एक एजेंट को कैसे निर्देशित करें ताकि प्रमाण-सहित और संदर्भित उत्तर मिलें।',
  empty: 'अभी कोई सामान्य प्रश्न नहीं है।',
  sectionHeadings: {
    "Start here": "यहाँ से शुरू करें",
    "Course and institutional policy": "पाठ्यक्रम और संस्थागत नीति",
    "Designing courses and activities": "पाठ्यक्रम और गतिविधियाँ डिज़ाइन करना",
    "Assessment, feedback and integrity": "मूल्यांकन, फीडबैक और शैक्षणिक इमानदारी",
    "How students learn and use AI": "छात्र AI कैसे सीखते और उपयोग करते हैं",
    "Particular learners, access and wellbeing": "भिन्न-भिन्न शिक्षार्थी, पहुँच और कल्याण",
    "Careers and AI literacy": "करियर और AI साक्षरता",
    "Building and evaluating educational AI": "शैक्षिक AI का निर्माण और मूल्यांकन",
    "Research practice": "शोध अभ्यास",
  },
  sectionBlurbs: {
    "Start here": "दो व्यापक प्रश्न जो विशिष्ट प्रश्नों से पहले पढ़ने योग्य हैं, चाहे आपकी भूमिका कोई भी हो।",
    "Course and institutional policy": "उन शिक्षकों के लिए जो छात्रों के पढ़ने योग्य नियम लिखते हैं, और उन प्रशासकों तथा संकाय विकासकर्ताओं के लिए जो उन्हें कार्यक्रम स्तर पर तय करते हैं।",
    "Designing courses and activities": "हर उस व्यक्ति के लिए जो तय करता है कि किसी कार्य, सेमेस्टर या ऑनलाइन पाठ्यक्रम में AI कहाँ आएगा, और उन शिक्षकों के लिए जो वह समय वापस चाहते हैं जो AI को देना था।",
    "Assessment, feedback and integrity": "यह सबसे बड़ा समूह है, क्योंकि यहीं प्रमाण सबसे स्पष्ट है और यहीं परिणाम छात्र के रिकॉर्ड तक पहुँचते हैं।",
    "How students learn and use AI": "उन प्रश्नों के लिए कि छात्र वास्तव में क्या पाते हैं, क्या खोने का जोखिम उठाते हैं, और सीखने को उनके साथ कैसे बनाए रखें।",
    "Particular learners, access and wellbeing": "उन शिक्षकों और सहायक कर्मचारियों के लिए जो डिज़ाइन को इसके अनुसार ढालते हैं कि कक्षा में वास्तव में कौन है, और उन प्रशासकों के लिए जो सोचते हैं कि कौन नहीं है।",
    "Careers and AI literacy": "उन पाठ्यक्रम डिज़ाइनरों और कार्यक्रम प्रमुखों के लिए जो उन छात्रों को उत्तर देते हैं जो पूछते हैं कि यह सब किस लिए है।",
    "Building and evaluating educational AI": "उन डेवलपर्स, अनुदेशात्मक डिज़ाइनरों और शोधकर्ताओं के लिए जो किसी ट्यूटर, सिमुलेशन या प्लेटफ़ॉर्म को वास्तविक पाठ्यक्रम में उतारते हैं।",
    "Research practice": "इस क्षेत्र में काम की रिपोर्टिंग, समीक्षा या योजना करने वाले शोधकर्ताओं के लिए।",
  },
};

export default hi;