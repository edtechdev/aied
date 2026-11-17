---
title: "مركز الترميز الحدسي"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "دليل ميداني للمعلّم لبناء موقع تعليمي ثابت بمساعدة مساعد برمجة بالذكاء الاصطناعي: ثلاثة ملفات تعليمات Markdown للتصميم والأمن وخصوصية الطلاب، مع أدلة مقروءة وحزمة قابلة للتنزيل."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**The Vibe-Coding Center** دليل ميداني مجاني من Miguel Guhlin لمعلّم يريد أن [[vibe-coding|يبرمج بالحدس]] موقعًا تعليميًا ثابتًا صغيرًا بمساعدة مساعد برمجة بالذكاء الاصطناعي — تذكرة خروج، أو اختبارًا قصيرًا، أو ملف أعمال صفّي — دون أن يُطلق معه مفتاح API مكشوفًا أو بيانات طلاب.

## ما يمكنك فعله بها

ثلاثة ملفات تعليمات تحمل الإرشاد: `WEB_DESIGN.md` و`EDU_COMPLIANCE.md` و`securevcc.md`. نزّلها في جذر مشروع، وأكمل قالب موجز المشروع، ثم اطلب من المساعد قراءة الثلاثة وتطبيقها جميعًا؛ ويصرّح الدليل بأن وجودها ليس تفعيلًا، فيجب تسميتها في الطلب. وتشرح أدلة مقروءة كل واحد منها، ومنها جولة «ثلاثة فحوص جوهرية قبل المشاركة»: اجمع بيانات طلاب أقل، وافحص مفتاح API مكشوفًا، ووائم تصميم الأداة مع مهمتها التعليمية. وتضيف الحزمة الكاملة الموقع نفسه، وحزمة مطالبات، ومراجعة إطلاق، ونصوص إعادة بناء، مع بيان SHA-256 للتنزيل.

وتعرض صفحة [أمثلة EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) المرافقة النتائج كأدوات ثابتة عاملة لا كلقطات شاشة: مولّد تذاكر خروج يكتب سؤالًا عند مستوى مختار من تصنيف SOLO، وملف أعمال طالب هو ملف HTML واحد على GitHub Pages، ومكتبة موارد للتطوير المهني قابلة للبحث، وكلها تعمل على جهة العميل دون تسجيل دخول إلى نظام إدارة التعلّم.

## لمن هي

المعلّمون و[[learning-design|مصمّمو التعليم]] في التعليم من الروضة إلى الصف الثاني عشر والتعليم العالي ممن يستطيعون وصف الأداة التي يريدونها ويقبلون فحص ما أنتجه المساعد. ويناسب أيضًا دائرة تريد قائمة تحقّق مشتركة واحدة قبل أن ينشر أي أحد أداة موجّهة للطلاب، والمعلّمين الذين يعلّمون [[ai-literacy|ثقافة الذكاء الاصطناعي]] بالبناء لا بالنقد.

## ملاحظات وتحفظات

المركز إرشاد لا منتج امتثال: فالموقع لا يقدّم ادعاء مطابقة لهدفه WCAG 2.2 AA، ويجيب عن «هل يجعل استخدام هذه الملفات موقعي ممتثلًا؟» بـ«لا»، ويقول إن مراجعة هندسية لا تحلّ محل تفويض المدرسة أو المراجعة القانونية. ويشير رفّ الأمن إلى axe-core وGitleaks وZAP وPlaywright؛ وهذه مراجع لا برمجيات محزومة، والمتوغّلة منها مقصودة لهدف قابل للتخلّص منه أو مصرّح به صراحةً. والقراءة لا تحتاج حسابًا. وإعادة بناء صفحات HTML تحتاج Python و`markdown-it-py`، وهي اعتماد بناء لا اعتماد زائر. والمستودع بترخيص MIT، بينما تحتفظ الأعمال الفنية من أطراف ثالثة والمشروعات المرتبطة بشروطها، موثّقة في `CREDITS.md`.

## المفاهيم المتصلة

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
