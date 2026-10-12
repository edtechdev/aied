---
title: "DeepTutor"
created: "2026-10-12T20:30:00-04:00"
type: resource
summary: "The open-source release of the DeepTutor agentic tutoring framework: one workspace for tutoring, question generation, mastery practice, research and visualization, with inspectable learner memory."
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
reviewed_by: [editor]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**DeepTutor** هو التنفيذ مفتوح المصدر لإطار التدريس المُقيَّم في [[intelligent-tutoring|دراسة DeepTutor]]، وقد نما إلى ما هو أبعد كثيراً من نطاق تلك الورقة إلى فضاء تعلّم عام أصيل للوكلاء. فالتدريس وحل المشكلات وتوليد الأسئلة وممارسة التمكّن والبحث والتصوير تتشارك زمن تشغيل قدرة واحداً وسياق جلسة واحداً، حتى يُشكّل ملف المتعلّم المبني أثناء حل المشكلات التفسيرات وبنود الممارسة التي تليها.

## ما يمكنك فعله به

عشرة أنماط — Chat وAsk Questions وQuiz وResearch وVisualize وSolve وCourse Study وMastery Path وImmersive Reading وImmersive Watching — تعمل على زمن التشغيل نفسه، مستندة إلى قواعد معارف وكتب ومسوّدات ودفاتر ومصارف أسئلة وشخصيات قابلة لإعادة الاستخدام. والاسترجاع متعدّد المحرّكات بشكل مقصود: مكتبات RAG مُصدَّرة على LlamaIndex وPageIndex وGraphRAG وLightRAG أو خادم LightRAG بعيد، إضافةً إلى قاعدة WeKnora مُستضافة ذاتياً أو مكتبة Tencent IMA أو MarginNote أو قبو Obsidian موصول. والذاكرة قابلة للفحص لا غامضة: فآثار L1 وملخّصات L2 السطحية وتوليف L3 مرئية وقابلة للتحرير، مع رسم بياني للذاكرة يربط كل ملخّص بالأدلة الكامنة وراءه. ويُتيح ملف تنفيذي `deeptutor` صدفة REPL طرفية ويُدفق NDJSON لأي وكيل يريد أن يقوده كأداة، ويُوزّع مجتمع EduHub مهارات قابلة للتثبيت.

## لمن هو

مدرّبو التعليم العالي والباحثون الذين يريدون نسخة قابلة للنشر من الإطار الذي تُبلّغ عنه الورقة، والمطوّرون الذين يبنون على زمن تشغيل قابل للتوصيل، والمتعلّمون الموجّهون ذاتياً المستعدون لتشغيل نسختهم الخاصة. وتعيش الوثائق في deeptutor.info.

## ملاحظات

مُرخَّص بموجب Apache 2.0، في الإصدار 1.6.9 اعتباراً من سبتمبر 2026 مع نحو 40,000 نجمة على GitHub. والتقييم المنشور الكامن وراءه — تحسّن متوسط 10.8% في المقاييس المخصّصة على خطوط أساس قوية واستدلال أسرع أقوى بنسبة 29.4% على مستوى الوكيل العام عبر خمسة نماذج أساسية، على معيار TutorBench — مُلخَّص في [[deeptutor|صفحة المقال]]، وحدودها تنطبق هنا أيضاً. وكما هو الحال مع أي حزمة ذكاء اصطناعي مفتوحة المصدر، فأنت تُوفّر مفاتيح مزوّد النموذج، ويتوقع النشر على سطح المكتب أو الخادم Python 3.11 وNode.

## المفاهيم المرتبطة
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
