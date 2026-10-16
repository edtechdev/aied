---
title: "OpenMAIC"
created: "2026-10-12T19:05:00-04:00"
type: resource
summary: "الإصدار مفتوح المصدر من MAIC: صف متعدد الوكلاء يحوّل موضوعًا أو مستندًا إلى شرائح واختبارات ومحاكاة تفاعلية وأنشطة قائمة على المشاريع، يقدّمها معلّمون وزملاء بالذكاء الاصطناعي."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
reviewed_by: [editor]
translation_of: resources/openmaic
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

**OpenMAIC** هو الإصدار مفتوح المصدر من الصف متعدد الوكلاء MAIC الموصوف في [[intelligent-tutoring|دراسة MAIC]]: صف موضوعًا أو أرفق موادك الخاصة فيولّد درسًا كاملًا — شرائح، واختبارات، ومحاكيات HTML تفاعلية، وأنشطة قائمة على المشاريع — ثم يقدّمه عبر معلّمين وزملاء بالذكاء الاصطناعي يتحدّثون ويرسمون على سبورة بيضاء ويشاركون في النقاش. إنه الشيفرة وراء صف يمكن تشغيله لا القراءة عنه فقط.

## What you can do with it

يُنتج التوليد بنقرة واحدة درسًا في دقائق من موجّه أو مستند أو صوت أو فيديو مرفوع. وتضيف طبقة متعددة الوكلاء نقاشًا صفّيًا يمكن للمتعلّم أن ينضم إليه أو يُدعى إليه، ومناظات مائدة مستديرة بين شخصيات مع رسوم على سبورة بيضاء، وأسئلة وأجوبة حرة يجيب فيها المعلّم بالشرائح أو المخططات. وتدعم الجلسات عروض الشرائح والاختبارات والمحاكيات التفاعلية والتعلّم القائم على المشاريع، وتُصدَّر بصيغة `.pptx` قابلة للتحرير أو `.html` تفاعلي. وأضاف الإصدار 1.0.0 (أغسطس 2026) منصة عمل للوكلاء: مساحة عمل تبدأ بالمحادثة تخطّط مقررات كاملة وتراجعها، وجلسات مدعومة بخادم دائم يمكن إلغاؤها أو استئنافها أو توجيهها، و24 مهارة مدمجة تغطّي الشرائح والاختبارات والتفاعلات والصور والفيديو والأصوات. وتتيح حزمة `SKILL.md` لحزام وكلاء بناء صفوف من تطبيق مراسلة.

## Who it is for

المعلّمون وفرق المقررات الذين يريدون مواد مولّدة لا يزالون قادرين على تحريرها، ومصمّمو التعليم الذين يصمّمون نماذج أولية لأنشطة متعددة الوكلاء، والمطوّرون الذين يحتاجون صفًا قابلًا للاستضافة الذاتية بدلًا من منتج مستضاف. ويمكن للمدارس نشره على Vercel أو بـDocker، والمشروع يُطلق عرضًا تجريبيًا مستضافًا على open.maic.chat.

## Notes

مرخّص بـMIT، مع دليل استخدام بالإنجليزية والصينية ومجتمع نشط على Discord وFeishu. وهو محايد تجاه النماذج: أنت تزوّد مفتاح مزوّد LLM واحدًا على الأقل، والمكوّنات المحلية الاختيارية (Lemonade للنماذج المحلية، وFunASR للتعرف على الكلام) تتيح لك تشغيل المزيد من حزمة التقنيات دون اتصال — لذا فإن "مجاني" يصف البرنامج لا فاتورة الاستدلال. وظهرت الورقة التي تقوم عليها في *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0)، وكان المستودع قد تجاوز 38,000 نجمة بحلول سبتمبر 2026.

## Connected Concepts
[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
