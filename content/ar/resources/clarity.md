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
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

يجمع **Clarity** بين مهارة وكيل ومحرر متصفح، وكلاهما مبنيّ على ثماني عشرة قاعدة للكتابة التي «تستحق قارئها». وتُثبَّت المهارة في وكلاء البرمجة مثل Claude Code وCodex بالأمر `npx skills add addyosmani/clarity`، ثم تعمل في ثلاثة أنماط: نمط المراجعة ينقد مسوّدة ويترك الملف كما هو، ونمط إعادة الصياغة يعدّل المسوّدة في موضعها، ونمط المقابلة يسأل الكاتب أسئلة أولًا ويكتب معه انطلاقًا من الأجوبة. و[[feedback|التغذية الراجعة]] التي يتلقّاها الكاتب تستهدف الجوهر قبل الأسلوب. وتتطلّب القواعد معرفة لمن القطعة ولماذا يعرف القارئ عنها، وتُطالِب بوجود ادّعاءات بدلًا من مواضيع، وبالتفاصيل بدلًا من التعميمات، وتتعامل مع الحشو كمشكلة في عدم معرفة غرض القطعة لا كمشكلة في المعجم.

ويعمل محرر المتصفح محليًا داخل الصفحة ولا يرفع المسوّدة. وهو يبلّغ عن دلائل النص المكتوب آليًا، وعن قابلية القراءة، وعن الثغرات في الجوهر، مما يجعله مفيدًا لمراجعة نص أنتجه [[generative-ai|ذكاء اصطناعي توليدي]] قبل أن يصل إلى قارئ. والمشروع صريح في أن الهدف هو كتابة تبقى للكاتب نفسه بشكل يمكن التعرّف عليه، لا نصًا مهندَسًا ليتجاوز [[ai-literacy|كشف الذكاء الاصطناعي]]، وهو تمييز سيميّزه المدرّسون حين يضعون سياسة بشأن [[writing-education|كتابة]] يُساعد عليها الذكاء الاصطناعي.

## ما ينبغي معرفته قبل تبنّيه

ينشر المستودع بروتوكول تقييم، ونماذج «قبل وبعد» في `samples/`، وملفات مرجعية خلف المهارة، بحيث يستطيع المراجع أن يفحص كيف تتصرف القواعد بدلًا من أن يأخذ الادّعاء على الثقة؛ والصفحة هنا لا تذكر أي نتيجة مقيسة. والكاتب هو Addy Osmani، والرخصة MIT، والعمل مستقل لا نتاج أي مؤسسة. وهو حديث ونشط: أُنشئ في أغسطس 2026، وله 54 التزامًا، وثلاثة إصدارات أحدثها الإصدار 0.2.1 في سبتمبر ذاك، وقرابة 250 نجمة عند التحقق في سبتمبر 2026. وثلاثة مساهمين قدّموا تغييرات. وتُحمَّل تعليمات المهارة في وكيل يستخدمه القارئ أصلًا، لذا تنطبق تحفّظات [[prompt-engineering|هندسة المطالبات]] المعتادة: فجودة النقد تتوقف على المسوّدة التي تُسلَّم إليه.

## المفاهيم المتصلة
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
