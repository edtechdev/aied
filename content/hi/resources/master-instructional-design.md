---
title: "मास्टर इंस्ट्रक्शनल डिज़ाइन"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-10-16T08:00:00-04:00"
type: resource
summary: "एक Claude स्किल जो एक अनुभवी इंस्ट्रक्शनल डिज़ाइनर की विधि को पंद्रह सहभागिता मोड और इकतीस ऑन-डिमांड संदर्भ फ़ाइलों में पैकेज करती है, जो सीखने-और-विकास के पूरे स्पेक्ट्रम को कवर करती है।"
url: https://github.com/narosemena/master-instructional-design
source_code: https://github.com/narosemena/master-instructional-design
author: "Norman Arosemena"
author_url: https://www.linkedin.com/in/normanarosemena/
resource_type: [agent skill]
access: [free]
license: "CC BY-NC-ND 4.0"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking]
pedagogy: [professional-training, online-teaching-and-learning]
technology: [generative-ai, prompt-engineering]
ethics: [universal-design-for-learning, inclusive-learning]
assessment: [assessment, feedback]
audience: [instructional designers, faculty developers, administrators]
level: [adult learning, higher ed]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/master-instructional-design
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।*

**Master Instructional Design** एक Claude स्किल है जो एक कार्यरत व्यवसायी की विधि को ऑन-डिमांड सलाहकार के रूप में पैकेज करती है: पंद्रह सहभागिता मोड, केवल प्रासंगिक होने पर लोड होने वाली इकतीस संदर्भ फ़ाइलें, और एक नौ-आयामी ऑडिट ढांचा जो संरेखण, अधिगमी-केंद्रितता, संज्ञानात्मक भार, अभ्यास और स्थानांतरण, प्रतिपुष्टि की गुणवत्ता, सहभागिता, दृश्य डिज़ाइन, समावेशिता और परामर्शदायी अभिमुखता तक फैला है। यह केवल पाठ्यक्रम डिज़ाइन के बजाय सीखने-और-विकास (learning-and-development) के पूरे स्पेक्ट्रम को कवर करती है — आवश्यकता और कार्य विश्लेषण से लेकर Storyline, Rise और Captivate में eLearning लेखन, सुविधा प्रदान करना और आभासी कार्यशाला डिज़ाइन, अधिगमी अनुभव डिज़ाइन, L&D टीमों के लिए चुस्त अभ्यास, Kirkpatrick के स्तरों और Phillips ROI के साथ [[assessment|मूल्यांकन नियोजन]], और मुख्य शिक्षण अधिकारियों (chief learning officers) के लिए संगठनात्मक शिक्षण रणनीति तक। इसकी संदर्भ फ़ाइलें क्षेत्र के शैक्षणिक कैनन को भी रखती हैं, और यह सुविधाप्रदक गाइड, संरेखण मैट्रिक्स और सामग्री ऑडिट जैसे भरे हुए उत्पाद तैयार करती है, कुछ भी मसौदा करने से पहले ही एक परियोजना का निदान करती है।

इस स्किल के साथ एक सहायक फ्रेमवर्क (harness) आती है: दो सबएजेंट, एक प्रवेश इंटरव्यू के लिए और एक [[assessment|मूल्यांकन]] वास्तुकला के लिए, hooks जो प्रत्येक prompt को प्रासंगिक संदर्भ फ़ाइल तक भेजते हैं और अपनी फ़ाइलों को अनजाने में हुए संपादन से बचाते हैं, क्रॉस-सेशन प्रोजेक्ट मेमोरी, और Perplexity, Google Drive और Notion के लिए वैकल्पिक कनेक्टर जो प्रत्येक पाठक के अपने क्रेडेंशियल का उपयोग करते हैं। इसे Claude Projects में अपलोड की गई स्किल के रूप में, या Claude Code में स्किल, hooks और एजेंट को प्रोजेक्ट के कॉन्फ़िगरेशन में कॉपी करके स्थापित किया जाता है।

## शर्तें और चेतावनियाँ

लाइसेंस Creative Commons BY-NC-ND 4.0 है, और लेखक द्वारा बताई गई शर्तें अधिकांश संस्थागत पाठकों के लिए महत्वपूर्ण हैं: व्यक्तिगत, गैर-व्यावसायिक अध्ययन और व्यावसायिक विकास का स्वागत है, जबकि व्यावसायिक उपयोग, पुनर्वितरण और व्हाइट-लेबलिंग के लिए व्यावसायिक लाइसेंस आवश्यक है। रिपॉजिटरी दस स्व-डिज़ाइन की गई चुनौतियों में 320 में से 314 अंकों की रिपोर्ट करती है, जो किसी स्वतंत्र मूल्यांकन के बजाय लेखक का अपना मूल्यांकन है, और वही लेखक इस ढांचे पर परामर्श और कार्यशालाएँ बेचता है। परियोजना को उनके नियोक्ताओं से असंबद्ध एक व्यक्तिगत प्रयास के रूप में वर्णित किया गया है, और इसका अंतिम कमिट अप्रैल 2026 का है।

## जुड़ी अवधारणाएँ
[[learning-design]], [[design-thinking]], [[professional-training]], [[online-teaching-and-learning]], [[assessment]], [[generative-ai]], [[universal-design-for-learning]], [[ai-literacy]]
