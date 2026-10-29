---
title: "Claw-ED"
created: "2026-10-12T19:45:00-04:00"
type: resource
summary: "A local-first AI teaching assistant that turns your own curriculum into editable lesson drafts, student materials, and slides using a model you choose."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**Claw-ED** مساعد تعليمي محلي أولًا يصوغ الدروس من مواد مناهجك الخاصة. يستورد المعلّم مصادره، ويطلب درسًا، فيحصل على مسودات قابلة للتعديل مع مواد موجّهة للطلاب وشرائح عرض، مولَّدة بأي نموذج يختاره المعلّم لا بنموذج بائع ثابت واحد.

## ما يمكنك فعله به

يجري سير العمل من الاستيراد إلى المسودة ثم المراجعة ثم التصدير، وتُعامل المسودات كنقاط انطلاق يعدّلها المعلّم لا كمنشورات جاهزة. ومهام الدروس مُنتظَرة وقابلة للاستئناف، فيمكن متابعة توليد طويل يفشل بدلًا من إعادة تشغيله، ويمكن تنزيل المنتجات المولَّدة. وهو يعرّض أيضًا أدواته لـ [[agentic-ai|وكيل]] عبر خادم MCP ويمكنه الاتصال بـ Google Drive، فتستطيع مدرسة توصيله بالتخزين والجدولة القائمين.

والمشروع محايد تجاه النماذج بشكل متعمّد. فهو يوثّق نماذج Ollama المحلية ومسارات OpenRouter الاقتصادية والخيارات المستضافة جنبًا إلى جنب، ودليل نماذجه مؤرَّخ، ما يُوضّح أن التوصيات نقاط انطلاق قائمة على الفهرس لا أحكام جودة مُقيَّمة من المعلّمين.

## ملاحظات وتحذيرات

البرمجية مجانية و[[open-source|مفتوحة المصدر]] تحت رخصة MIT لكودها الأصلي، رغم أن مكوّنات الأطراف الثالثة تحتفظ بشروطها، وتشغيلها يعني دفعك مقابل استدلال نموذجك الخاص إذا استخدمت نموذجًا مستضافًا. ويلقّب المشروع نفسه بيتا راجعها معلّمون ويقول بصراحة في ملف README أن نجاح اختبارات التكامل المستمر فيه لا يُثبت جودة تعليمية عبر النماذج الحية، وهي الطريقة الصحيحة لقراءة حزمة اختبارات خضراء في هذا المجال: إنها تتحقق من البرمجية، لا من [[pedagogy]].

## المفاهيم المترابطة
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
