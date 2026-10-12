---
title: "शिक्षण प्रॉम्प्टबुक"
created: "2026-09-24T05:37:41-04:00"
updated: "2026-10-16T09:00:00-04:00"
type: resource
summary: "प्रमाण-आधारित शिक्षण और शिक्षण-डिज़ाइन प्रथाओं के लिए मूल्यांकित प्रॉम्प्ट की एक खुली-पहुँच पुस्तक, जिसमें प्रत्येक अध्याय प्रॉम्प्ट, उसके विकास की प्रक्रिया और उसके मूल्यांकन के परिणाम प्रकाशित करता है।"
url: https://edtechbooks.org/promptbook
author: "David Wiley"
resource_type: [prompt or gem library, ebook or guide]
access: [free]
license: "CC BY"
last_verified: "2026-09-24"
foundations: [learning-design, ai-literacy, critical-thinking]
pedagogy: [scaffolding, metacognition, community-of-inquiry, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
assessment: [formative-assessment, feedback, authentic-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [writing-rhetoric-studies-in-the-loop, id-toolbox]
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
translation_of: resources/pedagogical-promptbook
source_updated: "2026-09-24T05:37:41-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
---

*यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।*

**शिक्षण प्रॉम्प्टबुक** ऐसे प्रॉम्प्ट एकत्र करता है जो अपने साथ अपने ही प्रमाण लेकर चलते हैं। प्रत्येक अध्याय एक स्थापित प्रथा लेता है, उसके पीछे के शोध की समीक्षा करता है, लेखकों को उस शोध को कार्यशील प्रॉम्प्ट में बदलने वाली पुनरावृत्तियों के माध्यम से साथ चलता है, बताता है कि प्रॉम्प्ट के प्रदर्शन का मूल्यांकन कैसे किया गया, और फिर पूरा प्रॉम्प्ट तथा सहायक सामग्री छापता है। यह ढाँचा इसे उन प्रॉम्प्ट संग्रहों से अलग बनाता है जो बिना किसी औचित्य के परिचालित होते हैं: एक पाठक देख सकता है कि किसी प्रॉम्प्ट का परीक्षण किसके विरुद्ध हुआ और वह कैसे बदला, और यह तय कर सकता है कि वह प्रमाण उनके अपने पाठ्यक्रम पर लागू होता है या नहीं।

अध्याय किसी एक विषय के बजाय [[learning-design|शिक्षण डिज़ाइन]] और शिक्षण प्रथा तक फैले हुए हैं। इनमें एआई एजेंट प्रॉम्प्ट में संज्ञानात्मक शिष्यवृत्ति को अंतर्निहित बनाना, पाठ्यक्रम डिज़ाइन के दौरान शिक्षाशास्त्रीय उद्देश्य को दृश्यमान बनाना, [[generative-ai|जनरेटिव एआई]] को सहयोगी साथी के रूप में मानने वाला एक सोचें-जोड़ी बनाएँ-साझा करें प्रकार, प्रशिक्षनार्थी शिक्षकों के लिए सीखने के सिद्धांतकारों के साथ संवादी रोल-प्ले, [[community-of-inquiry|इंक्वायरी समुदाय]] मंच ऑटोग्रेडर, ट्यूटरिंग के लिए [[formative-assessment|रूपात्मक]] [[feedback|प्रतिपुष्टि]] प्रणालियाँ, हस्तलिखित गणित में ग्रेडिंग सहायता, [[authentic-assessment|प्रामाणिक मूल्यांकन]] के लिए पिछड़ी ओर से डिज़ाइन, एआरसीएस प्रेरणात्मक मॉडल, ब्लूम के वर्गीकरण के माध्यम से रचनात्मक संरेखण, स्रोतों का मूल्यांकन करने के लिए सहपाठी ट्यूटरिंग, और गैग्ने के सीखने की शर्तें शामिल हैं।

## उपयोग करने से पहले जानने योग्य बातें

यह पुस्तक सीसी बाय लाइसेंस के अंतर्गत खुली पहुँच में है, जो शिक्षण सामग्री के लिए अनुमतिपरक सीमा का सबसे खुला छोर है: शिक्षक इन्हें उचित श्रेय देने की शर्त पर, व्यावसायिक उपयोग सहित, प्रतिलिपि बना सकते हैं, अनुकूलित कर सकते हैं और उपयोग कर सकते हैं [[prompt-engineering|प्रॉम्प्ट]]। यह किसी विशिष्ट पाठ्यक्रम या [[pedagogical-agent|एजेंट]] सेटअप के लिए प्रॉम्प्ट को स्थानीयकृत करना सरल बना देता है, जो समान संग्रहों पर लगे अधिक प्रतिबंधात्मक लाइसेंस की अनुमति नहीं देते। इसे 2026 में एडटेक बुक्स पर पीडीएफ डाउनलोड के साथ प्रकाशित किया गया है, डीओआई 10.59668/2340, संपादक डेविड वाइले। चूँकि प्रत्येक अध्याय परिणाम के साथ-साथ मूल्यांकन डिज़ाइन भी प्रस्तुत करता है, यह उन शिक्षकों के लिए भी एक मॉडल के रूप में काम करता है जो किसी और के निर्णय को अपनाने के बजाय अपने ही प्रॉम्प्ट का परीक्षण करना चाहते हैं।

## संबद्ध अवधारणाएँ
[[learning-design]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[formative-assessment]], [[feedback]], [[authentic-assessment]], [[scaffolding]], [[metacognition]], [[community-of-inquiry]], [[socratic-method]], [[ai-literacy]]
