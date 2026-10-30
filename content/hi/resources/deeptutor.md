---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-16T06:00:00-04:00"
type: resource
summary: "डीपट्यूटर एजेंटिक ट्यूटरिंग फ्रेमवर्क का ओपन-सोर्स रिलीज़: ट्यूटरिंग, प्रश्न निर्माण, महारत अभ्यास, अनुसंधान और विज़ुअलाइज़ेशन के लिए एक ही वर्कस्पेस, जिसमें जाँचने योग्य शिक्षार्थी स्मृति (learner memory) शामिल है।"
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।*

**DeepTutor** उस ट्यूटरिंग फ्रेमवर्क का ओपन-सोर्स कार्यान्वयन है जिसका मूल्यांकन [[intelligent-tutoring|डीपट्यूटर अध्ययन]] में किया गया, और यह उस शोधपत्र के दायरे से कहीं आगे बढ़कर एक सामान्य एजेंट-नेटिव लर्निंग वर्कस्पेस बन गया है। समस्याएँ हल करते समय बनी शिक्षार्थी प्रोफ़ाइल आगे आने वाली व्याख्याओं और अभ्यास आइटमों को प्रभावित करती है, क्योंकि ट्यूटरिंग, समस्या-समाधान, क्विज़ निर्माण, महारत अभ्यास, अनुसंधान और विज़ुअलाइज़ेशन — ये सभी एक ही क्षमता रनटाइम और एक ही सेशन संदर्भ साझा करते हैं।

## इसके साथ आप क्या कर सकते हैं

दस मोड — चैट, प्रश्न पूछना, क्विज़, अनुसंधान, विज़ुअलाइज़, समाधान, कोर्स अध्ययन, महारत पथ, इमर्सिव रीडिंग और इमर्सिव वॉचिंग — एक ही रनटाइम पर चलते हैं और पुन: प्रयोज्य ज्ञान-आधारों, किताबों, ड्राफ्ट, नोटबुक, प्रश्न-बैंकों और व्यक्तित्वों (personas) का उपयोग करते हैं। रिट्रीवल जान-बूझकर बहु-इंजन है: LlamaIndex, PageIndex, GraphRAG, LightRAG या रिमोट LightRAG सर्वर पर आधारित संस्करणित RAG लाइब्रेरीज़, इसके अतिरिक्त सेल्फ-होस्टेड WeKnora आधार, एक Tencent IMA या MarginNote लाइब्रेरी, या एक जुड़ा हुआ Obsidian वॉल्ट। स्मृति अपारदर्शी नहीं, बल्कि जाँचने योग्य है: L1 ट्रेस, L2 सतही सारांश और L3 संश्लेषण दिखाई देते और संपादित किए जा सकते हैं, और एक मेमोरी ग्राफ़ प्रत्येक सारांश को उसके पीछे के प्रमाणों से जोड़ता है। एक `deeptutor` बाइनरी टर्मिनल REPL देता है और किसी भी ऐसे एजेंट के लिए NDJSON स्ट्रीम करता है जो इसे एक टूल के रूप में चलाना चाहता है, और एक EduHub समुदाय इंस्टॉल करने योग्य स्किल वितरित करता है।

## यह किसके लिए है

उच्च-शिक्षा के शिक्षकों और शोधकर्ताओं के लिए जो शोधपत्र में वर्णित फ्रेमवर्क के तैनाती-योग्य संस्करण चाहते हैं, प्लगेबल रनटाइम पर निर्माण करने वाले डेवलपर्स के लिए, और उन स्व-निर्देशित शिक्षार्थियों के लिए जो अपना इंस्टेंस स्वयं चलाना चाहते हैं। प्रलेखन deeptutor.info पर उपलब्ध है।

## टिप्पणियाँ

यह Apache 2.0 लाइसेंस के अंतर्गत है और सितंबर 2026 तक इसका संस्करण 1.6.9 था, जिसमें लगभग 40,000 GitHub स्टार्स हैं। इसके पीछे का प्रकाशित मूल्यांकन — पाँच बैकबोन मॉडलों में TutorBench बेंचमार्क पर मज़बूत बेसलाइनों की तुलना में व्यक्तिगत मेट्रिक्स पर औसतन 10.8% सुधार और सामान्य एजेंटिक तर्क में 29.4% अधिक प्रभावशीलता — का सारांश [[zhao-deeptutor-agentic-personalized-tutoring-2026|लेख पृष्ठ पर दिया गया है, जिनकी सीमाएँ यहाँ भी लागू होती हैं। किसी भी ओपन-सोर्स AI स्टैक की तरह, मॉडल प्रदाता की कुंजियाँ आपको स्वयं देनी होती हैं, और डेस्कटॉप या सर्वर पर तैनाती के लिए Python 3.11 और Node अपेक्षित हैं।

## संबंधित संकल्पनाएँ
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]

