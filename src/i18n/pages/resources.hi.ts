/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const hi: ResourcesStrings = {
  title: 'संसाधन',
  h1: 'मुफ़्त उपकरण और संसाधन',
  introHtml: [
    'शिक्षा में AI के लिए चयनित <strong>मुफ़्त उपकरण, संग्रह, साधन और प्रारूप</strong>, यानी ऐसी चीज़ें जिन्हें आप आज ही जाकर उपयोग कर सकते हैं, न कि वह शोध जिसे पहले पढ़ना पड़े। इन्हें मुख्य रूप से शिक्षकों, अनुदेशात्मक डिज़ाइनरों, पुस्तकालयाध्यक्षों और शोधकर्ताओं ने बनाया है, और इनमें से कई ऐसे लोगों ने AI की सहायता से बनाए हैं जो पेशेवर डेवलपर नहीं हैं।',
    'यहाँ सब कुछ इंटरैक्टिव नहीं है। ब्राउज़र उपकरणों और AI शिक्षकों के साथ आपको तैयार प्रॉम्प्ट और "जेम्स" के संग्रह, कक्षा गतिविधियों के संग्रह, ब्रीफ़िंग और नीति दस्तावेज़, मूल्यांकन साधन और खुले फ़ाइल प्रारूप भी मिलेंगे। प्रत्येक प्रविष्टि एक संक्षिप्त सारांश है जो एक पृष्ठ से जुड़ता है, जिसमें बताया जाता है कि इसे किसने बनाया, यह किस प्रकार की चीज़ है, क्या इसका स्रोत कोड उपलब्ध है, इसके उपयोग पर क्या खर्च आता है, और इसका लिंक आखिरी बार कब जाँचा गया था।',
    'प्रत्येक प्रविष्टि किसी बाहरी साइट से जुड़ती है, जिसे यह ज्ञान आधार नियंत्रित नहीं करता, और लिंक की समय-समय पर दोबारा जाँच होती है। प्रत्येक पृष्ठ वह तारीख दिखाता है जब उसका लिंक आखिरी बार पुष्ट किया गया था। यदि कोई उपकरण स्थान बदल चुका है, बंद हो गया है, या यहाँ होने योग्य है पर मौजूद नहीं है, तो सबसे तेज़ रास्ता है रिपॉज़िटरी पर एक इश्यू खोलना।',
  ],
  empty: 'अभी कोई संसाधन नहीं है।',
  groupLabels: {
    software: 'सॉफ़्टवेयर',
    'ai tutor': 'AI शिक्षक',
    'agent skill': 'एजेंट कौशल',
    'prompt or gem library': 'प्रॉम्प्ट और जेम संग्रह',
    'collection of tools': 'उपकरणों के संग्रह',
    'collection of activities': 'गतिविधियों के संग्रह',
    'assessment instrument': 'मूल्यांकन साधन',
    'open format or specification': 'खुले प्रारूप और विशिष्टियाँ',
    'ebook or guide': 'ई-पुस्तकें और मार्गदर्शिकाएँ',
    'case study collection': 'केस अध्ययन संग्रह',
    'dataset or benchmark': 'डेटासेट और बेंचमार्क',
  },
};

export default hi;