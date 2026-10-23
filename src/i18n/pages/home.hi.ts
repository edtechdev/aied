/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const hi: HomeStrings = {
  title: 'होम',
  h1: 'शिक्षा में AI का ज्ञानकोश',
  introHtml: `शिक्षा में AI के ज्ञानकोश में आपका स्वागत है। यह <a href="/aied/concepts/ai-education/">शिक्षा में कृत्रिम बुद्धिमत्ता</a> पर एक नि:शुल्क, सार्वजनिक-डोमेन संसाधन है, उन लोगों के लिए जो इसे पढ़ाते, अध्ययन करते, डिज़ाइन करते या इसका प्रशासन करते हैं। यह हाल के खुली पहुँच वाले शैक्षिक शोध का सार और संश्लेषण प्रस्तुत करता है। पृष्ठों को एक AI एजेंट साइट डेवलपर के संपादकीय मार्गदर्शन में लिखता और अद्यतन करता है।`,
  navHeading: 'साइट में भ्रमण',
  navHtml: `बाईं ओर के साइडबार में अनुक्रमणिका ब्राउज़ करें, जो विषय-वार व्यवस्थित है, या किसी विषय को <a href="/aied/search">खोजें</a>। लेख पृष्ठ किसी एक शोधपत्र को उसके उद्देश्य, विधियों और निष्कर्षों में संक्षेपित करते हैं; अवधारणा पृष्ठ किसी एक विचार के बारे में शोध जो कहता है उसे जुटाते हैं और उसके पीछे के अध्ययनों से जोड़ते हैं। किसी प्रश्न से शुरुआत करने के लिए <a href="/aied/faq">सामान्य प्रश्न</a> उन बातों को समेटते हैं जो आगंतुक सबसे पहले पूछते हैं, जैसे पाठ्यक्रम की AI नीति या यह कि AI डिटेक्टर चलाने चाहिए या नहीं। किसी उपकरण से शुरुआत करने के लिए <a href="/aied/resources">संसाधन पृष्ठ</a> नि:शुल्क उपकरण और संग्रह सूचीबद्ध करता है, साथ में यह भी कि हर एक को किसने बनाया और उसका खर्च क्या है। ऊपर दिया गया मानचित्र क्षेत्र को बारह श्रेणियों में समूहित करता है, और <a href="/aied/concepts/ai-education/">शिक्षा में AI</a> उसका केंद्रीय नोड है।`,
  chatHeading: 'ज्ञानकोश से बातचीत करें',
  chatHtml: `यहाँ का पूरा ज्ञानकोश मशीन-पठनीय फ़ाइलों के रूप में भी प्रकाशित है, इसलिए आप किसी AI चैटबॉट या एजेंट को इसकी ओर इंगित कर सकते हैं और ऐसे उत्तर पा सकते हैं जो इन पृष्ठों का हवाला देते हैं। <a href="/aied/ai">संकेत यहाँ हैं</a>। नए पृष्ठ <a href="/aied/journal">जर्नल</a> में जाते हैं, जिसमें <a href="/aied/rss.xml">RSS फ़ीड</a> है। ऑफ़लाइन पढ़ने के लिए <a href="/aied/aied.epub">EPUB</a> या <a href="/aied/aied.pdf">PDF</a> डाउनलोड करें।`,
  startingHeading: 'पाठक वर्ग के अनुसार सुझाए गए शुरुआती बिंदु',
  startingIntro: 'अपनी भूमिका से मेल खाने वाले समूह से शुरुआत करें।',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'आवश्यक अवधारणाएँ',
      html: `<a href="/aied/concepts/ai-literacy/">AI साक्षरता</a>, <a href="/aied/concepts/misconceptions/">AI के बारे में भ्रांतियाँ</a>, <a href="/aied/concepts/agentic-ai/">एजेंटिक AI</a>, <a href="/aied/concepts/cognitive-offloading/">संज्ञानात्मक ऑफ़लोडिंग</a>, और <a href="/aied/concepts/interpreting-and-applying-aied-research/">इस शोध की व्याख्या और उपयोग कैसे करें</a>, जिसमें यह भी शामिल है कि क्यों एक अकेला अध्ययन किसी प्रश्न को शायद ही तय करता है।`,
    },
    {
      id: 'instructors',
      heading: 'शिक्षक',
      html: `<a href="/aied/concepts/teacher-role/">बदलती शिक्षण भूमिका</a>, <a href="/aied/concepts/learning-design/">अधिगम डिज़ाइन</a>, <a href="/aied/concepts/assessment/">मूल्यांकन</a>, <a href="/aied/concepts/feedback/">प्रतिक्रिया</a>, <a href="/aied/concepts/academic-integrity/">शैक्षणिक सत्यनिष्ठा</a>, <a href="/aied/concepts/framing-ai-use-for-students/">AI के उपयोग की रूपरेखा तय करना</a> और <a href="/aied/concepts/reducing-ai-misuse/">दुरुपयोग घटाना</a>। विषय-विशेष उपकरणों और उदाहरणों के लिए देखें <a href="/aied/concepts/discipline-specific-aied/">आपके अपने विषय में AI</a>।`,
    },
    {
      id: 'developers',
      heading: 'डेवलपर',
      html: `<a href="/aied/concepts/educational-technology-developers/">शिक्षा के लिए निर्माण</a>, <a href="/aied/concepts/ai-technologies/">इनके पीछे की तकनीकें</a>, <a href="/aied/concepts/intelligent-tutoring/">बुद्धिमान ट्यूटरिंग</a>, <a href="/aied/concepts/multimodal/">मल्टीमॉडल AI</a>, <a href="/aied/concepts/student-modeling/">शिक्षार्थी मॉडलिंग</a>, और <a href="/aied/concepts/llm-training-and-fine-tuning/">शिक्षण के लिए मॉडल का प्रशिक्षण और अनुकूलन</a>।`,
    },
    {
      id: 'administrators',
      heading: 'प्रशासक',
      html: `<a href="/aied/concepts/administrator/">प्रशासक की भूमिका</a>, <a href="/aied/concepts/governance/">AI अभिशासन</a>, <a href="/aied/concepts/educational-policy-ai/">संस्थागत नीति</a>, <a href="/aied/concepts/legal-issues-and-risks/">कानूनी मुद्दे और जोखिम</a>, और <a href="/aied/concepts/change-management/">परिवर्तन प्रबंधन</a>।`,
    },
    {
      id: 'researchers',
      heading: 'शोधकर्ता',
      html: `<a href="/aied/concepts/research-methods-aied/">AIEd में शोध विधियाँ</a>, <a href="/aied/concepts/theories-and-frameworks/">सिद्धांत और रूपरेखाएँ</a>, <a href="/aied/concepts/ai-ed-evaluation/">शिक्षा में AI हस्तक्षेप का मूल्यांकन</a>, <a href="/aied/concepts/educational-measurement/">शैक्षिक मापन</a>, <a href="/aied/concepts/learning-gains/">अधिगम लाभों का मापन</a>, और <a href="/aied/concepts/limitations-in-aied-research/">इस प्रमाण-आधार की व्यापक सीमाएँ</a>।`,
    },
  ],
  statsHeading: 'ज्ञानकोश में क्या है',
  statsIntro:
    'यहाँ हर पृष्ठ पर तिथि अंकित है, और नीचे दी गई संख्याएँ दिखाती हैं कि अभी क्या प्रकाशित है; सूची के अंत में दी गई "अंतिम अद्यतन" तिथि सबसे हाल का संपादन है।',
  conceptMap: {
    title: 'शिक्षा में AI का अवधारणा मानचित्र',
    desc:
      'एक ऐसा मानचित्र जिसके केंद्र में शिक्षा में AI है और जो बारह शीर्ष स्तर की अवधारणाओं से जुड़ा है: ' +
      'छात्र मॉडलिंग, अधिगम के सिद्धांत, AI शिक्षा में समानता, प्रतिक्रिया, AI साक्षरता, मूल्यांकन, विषय-विशेष AI, ' +
      'शिक्षाशास्त्र, नैतिकता, AI तकनीकें, AI शिक्षा का मूल्यांकन, और शोध विधियाँ।',
    navLabel: 'शिक्षा में AI की अवधारणाएँ',
    center: 'शिक्षा में AI',
    nodes: {
      'student-modeling': 'छात्र मॉडलिंग',
      'learning-theories': 'अधिगम के सिद्धांत',
      'equity-in-ai-education': 'AI शिक्षा में समानता',
      feedback: 'प्रतिक्रिया',
      'ai-literacy': 'AI साक्षरता',
      assessment: 'मूल्यांकन',
      'discipline-specific-aied': 'विषय-विशेष AI',
      pedagogy: 'शिक्षाशास्त्र',
      ethics: 'नैतिकता',
      'ai-technologies': 'AI तकनीकें',
      'ai-ed-evaluation': 'AI शिक्षा का मूल्यांकन',
      'research-methods-aied': 'शोध विधियाँ',
    },
  },
  toc: [
    { text: 'साइट में भ्रमण', slug: 'navigating-the-site', depth: 2 },
    { text: 'ज्ञानकोश से बातचीत करें', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'पाठक वर्ग के अनुसार सुझाए गए शुरुआती बिंदु', slug: 'starting-points', depth: 2 },
    { text: 'आवश्यक अवधारणाएँ', slug: 'essential-concepts', depth: 3 },
    { text: 'शिक्षक', slug: 'instructors', depth: 3 },
    { text: 'डेवलपर', slug: 'developers', depth: 3 },
    { text: 'प्रशासक', slug: 'administrators', depth: 3 },
    { text: 'शोधकर्ता', slug: 'researchers', depth: 3 },
    { text: 'ज्ञानकोश में क्या है', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default hi;
