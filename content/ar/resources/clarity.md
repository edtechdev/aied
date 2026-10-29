---
title: "أداة Clarity للكتابة الأوضح"
created: "2026-10-12T15:14:00-04:00"
type: resource
summary: "An open-source Agent Skill and private browser editor that turn eighteen rules for clearer writing into draft, rewrite and review modes for prose."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

يجمع **Clarity** بين مهارة وكيل ومحرّر متصفّح، وكلاهما مبنيّ على ثماني عشرة قاعدة للكتابة «تستحقّ قارئها». تُثبَّت المهارة في وكلاء البرمجة مثل Claude Code وCodex بالأمر `npx skills add addyosmani/clarity`، ثم تعمل في ثلاثة أنماط: نمط المراجعة ينقد مسوّدة ويترك الملف كما هو، ونمط إعادة الصياغة يعدّل المسوّدة في موضعها، ونمط المقابلة يطرح أسئلة على الكاتب أولًا ثم يكتب معه انطلاقًا من الأجوبة. و[[feedback|التغذية الراجعة]] التي يتلقّاها الكاتب تستهدف الجوهر قبل الأسلوب. فالقواعد تسأل لمن القطعة وما يعرفه القارئ عنها سلفًا، وتشدّد على الادّعاءات بدل الموضوعات وعلى التفاصيل بدل التعميمات، وتتعامل مع الحشو بوصفه مشكلة في عدم معرفة غرض القطعة لا مشكلة في المعجم.

ويعمل محرّر المتصفّح محليًا داخل الصفحة ولا يرفع المسوّدة. وهو يبلّغ عن دلائل النص المكتوب آليًا، وعن قابلية القراءة، وعن الثغرات في الجوهر، ما يجعله مفيدًا لمراجعة نص أنتجه [[generative-ai|ذكاء اصطناعي توليدي]] قبل أن يصل إلى قارئ. والمشروع صريح في أن الهدف كتابةٌ تبقى للكاتب نفسه بشكل يمكن التعرّف عليه، لا نصٌّ مهندَس ليتجاوز [[ai-detection|كشف الذكاء الاصطناعي]] — وهو تمييز سيعرفه المدرّسون حين يضعون سياسة بشأن [[writing-education|الكتابة]] المدعومة بالذكاء الاصطناعي.

## ما ينبغي معرفته قبل تبنّيه

ينشر المستودع بروتوكول تقييم، ونماذج «قبل وبعد» في `samples/`، وملفات مرجعية خلف المهارة، بحيث يستطيع المراجع أن يفحص كيف تتصرّف القواعد بدل أن يأخذ الادّعاء على الثقة؛ والصفحة هنا لا تُعيد ذكر أي نتيجة مقيسة. والمؤلف هو Addy Osmani، والرخصة MIT، والعمل مستقل لا نتاج أي مؤسسة. وهو حديث ونشط: أُنشئ في أغسطس 2026، وفيه 54 إيداعًا، وثلاثة إصدارات أحدثها الإصدار 0.2.1 في سبتمبر من ذلك العام، ونحو 250 نجمة عند التحقّق في سبتمبر 2026. وقد أدخل ثلاثة مساهمين تغييرات عليه. وتُحمَّل تعليمات المهارة في وكيل يستخدمه القارئ أصلًا، لذا تنطبق تحفّظات [[prompt-engineering|هندسة المطالبات]] المعتادة: فجودة النقد تتوقّف على المسوّدة التي تُسلَّم إليه.

## المفاهيم المتصلة
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
