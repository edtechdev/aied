---
title: "LESSON.md"
created: "2026-10-12T19:10:00-04:00"
type: resource
summary: "صيغة مفتوحة بنص صريح لدروس التعلّم الإلكتروني القائمة على الكتل، مع مهارة وكيل تكتب الدروس والتقويمات وحزم مقررات كاملة بتلك الصيغة."
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
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**LESSON.md** صيغة مفتوحة لمحتوى التعلّم الإلكتروني القائم على الكتل: ملف Markdown ببيانات وصفية YAML وتوجيهات `:::` للنصوص والصور وفحوص المعرفة، يقرؤه إنسان وتُحوّلها أي أداة. وهي موجودة لأن محتوى المقرر محبوس عادةً داخل أداة تأليف واحدة، ولأن [[llm|النماذج اللغوية الكبيرة]] لا تستطيع المساعدة إلا في دروس تستطيع قراءتها فعلًا.

## What you can do with it
اكتب درسًا في أي محرّر نصوص واستورده إلى أي أداة تدعم الصيغة، دون نسخ ولصق وإعادة تنسيق. وتُعبَّر القطع التفاعلية — فحوص معرفة متعددة الخيارات مع حدود للمحاولات وتغذية راجعة على مستوى الجواب — بخصائص بسيطة لا بواجهة رسومية. ويصبح `ASSESSMENT.md` الرفيق في جذر حزمة [[assessment|التقويم]] المقيَّم للمقرر. ويُطلق المشروع أيضًا مهارة `lesson-md` تعلّم Claude أو Codex أو [[agentic-ai|وكيلًا]] آخر الصيغة، فيعيد وصف مقرر بلغة عادية دروسًا وتقويمات وحزمة كاملة.

## Who it is for
مصمّمو التعليم ومنشئو المقررات الذين يريدون لمحتواهم أن ينجو من تغيّر أداة، وبائعو التعلّم الإلكتروني الذين يريدون صيغة استيراد وتصدير يفهمها مستخدمونهم بالفعل، وأي أحد يبني تأليفًا معانًا بالذكاء الاصطناعي على صيغة قابلة للقراءة. ومن المساهمين Dan Bashaw من LXD Integral، وللصيغة سجل تغييرات عام حتى الإصدار v1.8.

## Connected Concepts

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]

