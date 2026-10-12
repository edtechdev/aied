---
title: "वास्तविक इंजीनियरों के लिए कौशल"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-10-16T08:00:00-04:00"
type: resource
summary: "मैट पोकोक का ओपन-सोर्स संग्रह — छोटे, संयोज्य एजेंट कौशल, जिसमें एक बहु-सत्रीय शिक्षण कौशल, एक निरंतर प्रश्न पूछने वाला कौशल, और ऐसे दस्तावेज़ लिखने के निर्देश शामिल हैं जिन्हें एक एजेंट समझ सके।"
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
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

**वास्तविक इंजीनियरों के लिए कौशल** मैट पोकोक द्वारा प्रकाशित एजेंट-कौशल निर्देशिका है: छोटी, संयोज्य निर्देश फ़ाइलें जो Claude Code, Codex या किसी अन्य एजेंट में स्थापित होती हैं, और जो पूरी तरह अपनाने के बजाय अनुकूलित किए जाने के लिए लिखी गई हैं। इस संग्रह का अधिकांश भाग सॉफ़्टवेयर कार्य के लिए सेवा करता है, लेकिन कई कौशल शिक्षा उपकरण हैं जो कोड के बजाय पढ़ाने और प्रश्न पूछने के लिए बनाए गए थे।

सबसे स्पष्ट उदाहरण है `teach`, जो कई सत्रों में चलता है और कार्यशील निर्देशिका को एक स्थायी शिक्षण कार्यक्षेत्र के रूप में मानता है, ताकि शिक्षार्थी की प्रगति और खुले प्रश्न बातचीत के बीच बने रहें बजाय हर बार फिर से शुरू होने के। `grill-me` और इसका अंतर्निहित `grilling` प्राइमिटिव किसी योजना पर उपयोगकर्ता से निरंतर प्रश्न पूछते रहते हैं जब तक हर शाखा हल न हो जाए, जो [[socratic-method|सोक्रेटिक प्रश्न]] एक पुन: प्रयोज्य प्रक्रिया के रूप में है, किसी बातचीत के मूड के रूप में नहीं। `wait-what` जिस क्षण कोई संदेश पहुँच में विफल होता है, उसी क्षण प्रतिक्रिया देता है और उसे सादी भाषा में लापता संदर्भ के साथ फिर से प्रस्तुत करता है — एक ऐसा कदम जिसे कोई भी प्रशिक्षक तब पहचानता है जब वह कोई व्याख्या पहली बार असफल देखता है। `writing-for-agents` बताता है कि ऐसे दस्तावेज़ कैसे लिखें जिन्हें एक [[prompt-engineering|एजेंट]] समझ सके, जो अब [[pedagogical-agent|एआई]] पाठ्यसामग्री के लिए निर्देश लिखने का व्यावहारिक रूप है। `to-questionnaire` एक निर्णय को उस व्यक्ति के लिए एक प्रश्नावली में बदल देता है जो उसका उत्तर दे सकता है, `handoff` एक बातचीत को ऐसे दस्तावेज़ में संक्षिप्त करता है जिससे दूसरा एजेंट आगे बढ़ सके, और `wizard` उन चरणों के लिए एक इंटरैक्टिव मार्गदर्शिका बनाता है जो केवल एक व्यक्ति ही कर सकता है।

## इसे अपनाने से पहले क्या जानना चाहिए

सब कुछ [[open-source|ओपन सोर्स]] MIT के अंतर्गत है और स्थानीय [[ai-literacy|एआई साक्षरता]] या [[self-directed-learning|स्व-निर्देशित अध्ययन]] के लिए एक शुरुआती बिंदु के रूप में निःशुल्क लिया जा सकता है। अपनाना बड़े पैमाने पर और तेज़ गति से हो रहा है: सितंबर 2026 में जाँचने पर लगभग 270,000 स्टार और 23,000 फोर्क, सबसे हाल का कमिट 18 सितंबर 2026 को। चेतावनी दायरे की है। ये कौशल एक [[human-ai-collaboration|इंजीनियर]] के कार्य संदर्भ को मानते हैं, इन्हें इंजीनियरिंग, उत्पादकता, पदावनत (deprecated) और प्रगति में (in-progress) श्रेणियों में व्यवस्थित किया गया है, इसलिए कुछ प्रविष्टियाँ स्पष्ट रूप से अधूरी या सेवानिवृत्त हैं, और README एक न्यूज़लेटर साइन-अप का काम भी करता है। शिक्षण और प्रश्न-पूछने वाले कौशलों को हस्तांतरणीय भाग मानें, और इनमें से किसी एक को विद्यार्थियों के सामने रखने से पहले उसे फिर से लिखने की अपेक्षा रखें।

## जुड़ी हुई अवधारणाएँ
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
