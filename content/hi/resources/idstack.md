---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-10-16T08:00:00-04:00"
type: resource
summary: "ग्यारह क्लॉड कोड कौशलों का एक मुक्त-स्रोत समुच्चय जो किसी पाठ्यक्रम का शिक्षण-डिज़ाइन साक्ष्य-आधार के विरुद्ध ऑडिट करता है, और प्रत्येक अनुशंसा को उसके साक्ष्य-स्तर के साथ चिह्नित करता है।"
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
---

*यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।*

**idstack** एक मुक्त-स्रोत संग्रह है जिसमें साक्ष्य-आधारित [[learning-design|शिक्षण डिज़ाइन]] के लिए ग्यारह कौशल हैं, जो एक सहायक क्रोम साइड-पैनल एक्सटेंशन के साथ क्लॉड कोड प्लगइन के रूप में वितरित होते हैं। ये कौशल कोई पाठ्यक्रम नहीं बनाते, बल्कि उसका ऑडिट करते हैं: वे उद्देश्यों को संशोधित ब्लूम वर्गीकरण विधि (revised Bloom\'s taxonomy) के विरुद्ध वर्गीकृत करते हैं, उद्देश्यों, गतिविधियों और मूल्यांकन के बीच रचनात्मक संरेखण (constructive alignment) की जाँच करते हैं, संज्ञानात्मक भार (cognitive load) की समस्याओं को चिह्नित करते हैं, तथा WCAG 2.1 AA और सार्वभौमिक डिज़ाइन फ़ॉर लर्निंग (Universal Design for Learning) के विरुद्ध सुगम्यता की समीक्षा करते हैं। प्रत्येक अनुशंसा के साथ एक साक्ष्य-स्तर (evidence tier) संलग्न होता है, जो मेटा-विश्लेषणों और यादृच्छिक परीक्षणों के लिए T1 से लेकर विशेषज्ञ राय के लिए T5 तक फैला होता है। परियोजना का दावा है कि इसके संदर्भ ग्यारह अनुसंधान क्षेत्रों की 108 सहकर्मी-समीक्षित अध्ययनों पर आधारित हैं; यह संख्या परियोजना का अपना दावा है, और इसका ग्रंथसूची मार्कडाउन में प्रकाशित है ताकि कोई समीक्षक उसे जाँच सके।

पाठ्यक्रम कैनवास API कनेक्शन, एक IMS कॉमन कार्ट्रिज फ़ाइल, एक SCORM पैकेज, किसी ऑथरिंग टूल से निर्यात की गई PDF, या चिपकाए गए दस्तावेज़ों के माध्यम से प्रवेश करते हैं। एक साझा परियोजना मैनिफ़ेस्ट सत्रों के बीच पाठ्यक्रम को याद रखता है, और एक पाइपलाइन कौशल डिज़ाइन चरणों को शृंखलाबद्ध करता है और पूर्ण किए गए कार्यों को छोड़ देता है। समीक्षाएँ आठ क्वालिटी मैटर्स मानकों और कम्युनिटी ऑफ इंक्वायरी ढाँचे के विरुद्ध रिपोर्ट करती हैं, जिसमें शिक्षण, सामाजिक और संज्ञानात्मक उपस्थिति को अलग किया जाता है, और फिर अनुशंसाओं को गंभीरता के अनुसार क्रमबद्ध किया जाता है।

## इसे अपनाने से पहले जानने योग्य बातें

प्लगइन को स्थापित करने के लिए क्लॉड कोड और एक बैश शेल आवश्यक है; पावरशेल और cmd सेटअप स्क्रिप्ट नहीं चला सकते, और स्कोर प्रवृत्तियों के लिए Python 3 की सिफ़ारिश की जाती है। पाठ्यक्रम डेटा पाठक की अपनी मशीन पर परियोजना फ़ोल्डर में रहता है, और उससे केवल किसी ऐसे एकीकरण के माध्यम से बाहर जाता है जिसे उपयोगकर्ता स्वयं चालित करता है, जैसे कि कोई कैनवास API कॉल। क्रोम एक्सटेंशन का लाइव अनुमान (live inference) पाठक की अपनी मुफ़्त Google AI Studio API कुंजी का उपयोग करता है, हालाँकि एक सिमुलेशन मोड इसे बिना कुंजी प्रदर्शित करता है। परियोजना स्वयं को संस्करण 3.5.1.0 पर बीटा बताती है और छोटे संस्करणों के बीच ब्रेकिंग परिवर्तनों की चेतावनी देती है, और यह किसी नामित लेखक के बजाय savvides GitHub खाते के अंतर्गत प्रकाशित है।

## संबद्ध अवधारणाएँ
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]

