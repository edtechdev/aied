---
title: "LiaScript"
created: "2026-10-12T22:00:00-04:00"
type: resource
summary: "لهجة ماركداون مفتوحة تحوّل ملفًا نصيًا عاديًا إلى مقرر تفاعلي في المتصفح، مع اختبارات قصيرة وشيفرة قابلة للتشغيل، زائد مساعد متعدد الوكلاء لبناء المقررات به."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**LiaScript** هو لهجة ماركداون موسّعة زائد مفسّر لها. ويصبح ملف نص عادي واحد مقررًا تفاعليًا: يمكن قراءة المستند نفسه كسرد، أو تشغيله كشرائح، أو العمل به كمقرر، كل ذلك في المتصفح. ولا شيء يحتاج تثبيتًا لكتابة واحد منها أو قراءته.

## ما يمكنك فعله به

تأتي الاختبارات القصيرة بالأشكال التي يتوقعها مدرّس، بما فيها الاختيار من متعدد وأسئلة المصفوفة وإدخال النص والقوائم المنسدلة والنصوص ذات الفجوات، مكتوبةً مباشرةً في ماركداون. ويمكن جعل كتل الشيفرة قابلة للتعديل والتشغيل لدروس [[cs-education|البرمجة]]، ويغلّف نظام الماكرو مكتبات JavaScript في كتل قابلة لإعادة الاستخدام حتى لا تحتاج المخططات التفاعلية إلى شيفرة من كل مؤلّف. ويُستضاف المقرر حيث يحتفظ المؤلّف بالنصوص أصلًا، دون خدمة يُحبَس فيها، وكل شيء يعمل من جانب العميل، فالمقرر المُحمَّل يعمل دون اتصال. ويحزّم LiaScript Exporter المقرر كـSCORM لـMoodle وILIAS و[[edtech-platform|أنظمة إدارة التعلّم]] الأخرى.

## وكيل التعليم لبناء المقررات

ينشر المشروع أيضًا **[teaching agent](https://github.com/LiaScript/teaching-agent)** لتأليف مقررات LiaScript، مرخّصًا بموجب رخصة Boost Software 1.0. ويعمل أربعة وكلاء للتعليم والتصميم البصري ومراجعة المتعلّم والنشر حول ملف مشروع واحد يحمل حالة المقرر، بسير عمل التحديد أولًا: تُحسم الأهداف والجمهور المستهدف والديداكتيك قبل كتابة أي مادة، وتتبعها بوابات تحقق. ويمكن مراجعة مسوّدة من شخصية متعلّم مسمّاة للتحقق من [[cognitive-offloading|الحِمل المعرفي]] والمعرفة السابقة المفترضة. والوكيل مستقل عن المحرّر، مولّدًا تهيئات لـClaude Code وCopilot وCodex وCursor أو محادثة ويب من تحديد واحد، والمستودع يعمل كمثال مطبَّق أيضًا، حاملًا مقررًا من ست وحدات عن توجيه NIS2 الأوروبي ومستندًا يصف كيف أُنتج.

## ملاحظات وتحفّظات

LiaScript مجاني، بلا مستوى مدفوع وبلا اشتراك مطلوب، ويُطوَّر على الملأ بموجب BSD-3-Clause، لذا تستطيع المؤسسات استضافته ذاتيًا وتعديله. وتستحق ميزة Live Classroom نظرةً قبل الاعتماد عليها على نطاق واسع، إذ إن التزامن في الزمن الحقيقي يستخدم خدمة مشتركة لا عرضًا محليًا خالصًا. ووكيل التعليم حديث وخفيف التبني، فعامله كنموذج أولي عامل لا كمنتج مدعوم.

## مفاهيم مترابطة

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]

