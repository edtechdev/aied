---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-10-16T08:00:00-04:00"
type: resource
summary: "ब्लॉक-आधारित ई-लर्निंग पाठों के लिए एक खुला, सादे-पाठ प्रारूप, साथ ही एक एजेंट कौशल जो उसी प्रारूप में पाठ, मूल्यांकन और पूरे पाठ्यक्रम बंडल लिखती है।"
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*यह अंग्रेज़ी पेज का ऑटोमैटिक अनुवाद है और इसकी अभी तक किसी मूल भाषी ने समीक्षा नहीं की है।*

**LESSON.md** ब्लॉक-आधारित ई-लर्निंग सामग्री के लिए एक खुला प्रारूप है: YAML फ्रंटमैटर और पाठ, चित्र तथा ज्ञान-जाँच के लिए `:::` निर्देशों के साथ एक Markdown फ़ाइल, जो किसी व्यक्ति के लिए पठनीय और किसी भी उपकरण के लिए विश्लेषण-योग्य है। इसका अस्तित्व इसलिए है क्योंकि पाठ्यक्रम सामग्री आमतौर पर एक ही लेखन उपकरण के भीतर बंद रहती है, और क्योंकि [[llm|बड़े भाषा मॉडल]] केवल उन पाठों में ही सहायता कर सकते हैं जिन्हें वे वास्तव में पढ़ सकते हैं।

## आप इसके साथ क्या कर सकते हैं
किसी भी पाठ संपादक में एक पाठ लिखें और उसे प्रारूप का समर्थन करने वाले किसी भी उपकरण में आयात करें, बिना कॉपी-पेस्ट और पुनर्गठन के। इंटरैक्टिव भाग — प्रयास-सीमा और उत्तर-स्तरीय प्रतिपुष्टि वाली बहुविकल्पीय ज्ञान-जाँच — GUI के बजाय सरल गुणों के रूप में व्यक्त किए जाते हैं। एक बंडल की जड़ में संगत `ASSESSMENT.md` पाठ्यक्रम का स्कोर किया गया [[assessment]] बन जाता है। परियोजना एक `lesson-md` कौशल भी प्रदान करती है जो Claude, Codex या किसी अन्य [[agentic-ai|एजेंट]] को प्रारूप सिखाती है, जिससे सादी भाषा में एक पाठ्यक्रम का वर्णन करने पर पाठ, मूल्यांकन और एक पूरा बंडल मिलता है।

## यह किसके लिए है
शैक्षणिक डिज़ाइनर और पाठ्यक्रम निर्माता जो चाहते हैं कि उनकी सामग्री उपकरण परिवर्तन में भी बची रहे, ई-लर्निंग विक्रेता जो एक ऐसा आयात और निर्यात प्रारूप चाहते हैं जिसे उनके उपयोगकर्ता पहले से समझते हों, और जो कोई भी पठनीय प्रारूप के ऊपर AI-सहायित लेखन बना रहा है। योगदानकर्ताओं में LXD Integral के Dan Bashaw शामिल हैं, और इस प्रारूप का एक सार्वजनिक चेंजलॉग v1.8 तक है।

## संबंधित संकल्पनाएँ
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
