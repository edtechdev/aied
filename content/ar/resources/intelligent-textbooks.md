---
title: "بناء الكتب الدراسية الذكية"
created: "2026-10-12T21:30:00-04:00"
type: resource
summary: "دليل دان مكرياري المفتوح المصدر لبناء الكتب الدراسية الذكية — كتب دراسية متاحة عبر الإنترنت بالبحث والتنقل والمعاجم والاختبارات ورسوم المفاهيم والمحاكاة المدمجة — باستخدام MkDocs Material والذكاء الاصطناعي التوليدي، مع مكتبة مرافقة من MicroSims تفاعلية مولّدة بالذكاء الاصطناعي."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

موقع **الكتب الدراسية الذكية** هو دليل دان مكرياري خطوة بخطوة لبناء *كتب دراسية ذكية* — كتب دراسية متاحة عبر الإنترنت تتجاوز ملفات PDF الساكنة بإضافة البحث، والتنقل في الموقع، ومعجم للمصطلحات، وجدول محتويات، وإدارة اختبارات، وصيغ معروضة، ومعاينات على وسائل التواصل الاجتماعي، وفحص الروابط، و**رسم مفاهيم** يسهل تصوّره يُظهر كل المفاهيم في المقرر واعتمادياتها. ويجادل الدليل بأن كثيرًا من المقررات يمكن أن تستفيد اليوم من كتب دراسية متاحة عبر الإنترنت عالية الجودة بهذه الخصائص، وهو يُظهر كيف تبني باستخدام نظام بناء [MkDocs](http://mkdocs.com/) مقترنًا بسمة Material وبالذكاء الاصطناعي التوليدي لإنشاء المحتوى وصيانته.

الحركة المحددة هي أن الكتاب الدراسي *مؤلَّف في Markdown ومولَّد بالذكاء الاصطناعي*، وهو مثيل ملموس لنمط [[vibe-coding|التأليف المعان بالذكاء الاصطناعي]] مطبق على [[curriculum-design|محتوى المقرر]]: فبدلًا من صيانة موقع كبير يدويًا، تصف المقرر وتدع الذكاء الاصطناعي التوليدي ينتج الصفحات ويصونها، مع تعامل سلسلة الأدوات مع التنقل والبحث ورسم المفاهيم. وتدّعي مكتبة [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) المرافقة أنها تؤتمت أكثر من 90% من المهام المطلوبة لبناء كتاب دراسي من المستوى الثاني من وصف المقرر.

## مورد مقترن: MicroSims

الرفيق الطبيعي لهذا الدليل هو مكتبة **MicroSims** لمكرياري على
<https://dmccreary.github.io/microsims/> (المصدر:
[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims))، التي تزود المحاكاة التفاعلية التي يُغمدها كتاب دراسي ذكي. و*MicroSim* (محاكاة دقيقة) محاكاة تفاعلية بسيطة مولّدة بالذكاء الاصطناعي لمساعدة المعلمين على شرح مفهوم، ويمكن إغمدها في كتاب دراسي ذكي أو أي موقع يقبل `iframe`. ومحاكاة MicroSims مميزة لثلاثة أسباب: **التوليد المعان بالذكاء الاصطناعي** (أنماط تصميم موحدة تحول وصفًا بلغة طبيعية لمحاكاة إلى أصل قابل للمشاركة)، و**الإغمد الشامل** (عنصر `iframe` واحد بلغة HTML يُدرج واحدة في أي صفحة)، و**الشيفرة الشفافة القابلة للتعديل** (لا صندوق أسود — نقرة واحدة تفتح المحاكاة في محرر ويب، ورخصة المشاع الإبداعي تدع معظم المعلمين يستخدمونها بلا رسوم ترخيص). وقد صاغت فاليري لوكهارت المصطلح عام 2023 بعد أن وجدت أن المعلمين والطلاب يستطيعون بناء محاكاة بمكتبة JavaScript لـp5.js بتدريب قليل أو بلا تدريب.

وينشر المشروع أيضًا مخطط JSON لبيانات MicroSim الوصفية حتى تستطيع أدوات الذكاء الاصطناعي توليد واصفات قابلة للبحث، مع سجل MicroSim ذي أوجه على خارطة الطريق. وورقة بحثية تصف الإطار — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — على arXiv
([2511.19864](https://arxiv.org/abs/2511.19864)). وتشمل المحاكاة النموذجية كرة مرتدة، وحركة قذيفة، وتوافقيات الأوتار، ولعبة الحياة لكونواي، وصيغة أويلر، ورسم بياني لعائدات سوق الأسهم، كل منها يعمل حيًا على الموقع.

## لمن هو

المعلمون ومصممو التعليم الذين يريدون بناء كتاب دراسي للمقرر أو صيانته، خاصةً في التعليم العالي والتدريب المهني، إضافةً إلى مطوري أعضاء هيئة التدريس وأي أحد يستخدم الذكاء الاصطناعي التوليدي لتأليف محتوى تعليمي. وهي تلائم المربين المرتاحين بسير عمل Markdown وGit (أو الراغبين في تعلّمه) والراغبين في أن يتولى الذكاء الاصطناعي السباكة الخاصة بالموقع — البحث، والتنقل، ورسم المفاهيم — حتى يركّزوا على البيداغوجيا.

## ملاحظات وتحفظات

هذا دليل وسلسلة أدوات لممارس لا دراسة محكمة — فهو يقدم سير عمل ومبرره التعليمي الخاص («تدل الكتب الدراسية الذكية الطلاب على المفاهيم في سعيهم للمعرفة») لا دليلًا على نتائج التعلّم. وورقة بحث MicroSims هي أقرب شيء إلى سند تجريبي، وهي منشورة ذاتيًا على arXiv. وكلا المشروعين مفتوح المصدر (يُبلغ مستودع الكتب الدراسية الذكية برخصة MIT و38 نجمة؛ ويُبلغ MicroSims برخصة المشاع الإبداعي و13 نجمة) ويُصانان بنشاط. ورسوم المفاهيم والبنية المعجمية أولًا مفيدة فعلًا للقابلية للاكتشاف، لكن الدليل يفترض سير عمل تأليف تقنيًا إلى حد ما — MkDocs، وGit، وأدوات الذكاء الاصطناعي التوليدي — مما قد يكون عائقًا لبعض أعضاء هيئة التدريس. وحتى لحظة الاستيعاب، سجل MicroSims لا يزال على خارطة الطريق فحسب، فإيجاد محاكاة قائمة بعينها يتعلق ببحث الموقع وتنقله.

## المفاهيم المرتبطة
- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
