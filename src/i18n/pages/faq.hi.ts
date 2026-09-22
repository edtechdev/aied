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

const hi: FaqStrings = {
  title: 'FAQ',
  h1: 'अक्सर पूछे जाने वाले प्रश्न',
  introHtml:
    'यह अनुभाग <strong>शिक्षा में AI</strong> से जुड़े सामान्य प्रश्नों के उत्तर देता है: शोध के अनुसार AI शिक्षण और सीखने को कैसे प्रभावित करता है, और शिक्षक, प्रशिक्षक तथा अनुदेशात्मक डिज़ाइनर उस प्रमाण को व्यवहार में कैसे उतार सकते हैं। प्रत्येक उत्तर इस ज्ञान आधार में संक्षेपित शोध के निष्कर्षों को सार रूप में प्रस्तुत करता है और गहन पठन के लिए प्रश्न को संबंधित अवधारणाओं और लेखों से जोड़ता है।',
  assistantHtml:
    'कोई प्रश्न यहाँ उत्तरित नहीं है? <a href="/aied/ai">इस ज्ञान आधार का उपयोग अपने ही AI सहायक के साथ करें</a> पृष्ठ की मदद से वह प्रश्न अपने AI सहायक से पूछें, जो दिखाता है कि पूरे कैटलॉग पर एक एजेंट को कैसे निर्देशित करें ताकि प्रमाण-सहित और संदर्भित उत्तर मिलें।',
  empty: 'अभी कोई सामान्य प्रश्न नहीं है।',
};

export default hi;