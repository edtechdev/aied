---
title: "مهارات لمهندسين حقيقيين"
created: "2026-10-12T18:45:00-04:00"
type: resource
summary: "مجموعة مهارات وكلاء مفتوحة المصدر من Matt Pocock، صغيرة وقابلة للتكوين، تضمّ مهارةً للتعليم متعددة الجلسات، ومهارةً للاستفهام اللاذع، وإرشادات لكتابة مستندات يستطيع وكيلٌ اتّباعها."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**مهارات لمهندسين حقيقيين** هو دليل مهارات الوكلاء المنشور عند Matt Pocock: ملفاتُ تعليماتٍ صغيرة قابلة للتكوين تُثبَّت في Claude Code أو Codex أو وكيل آخر، مكتوبةً لتُكيَّف لا لتُعتمد كاملةً. يخدم معظم المجموعة العملَ البرمجي، لكن عدة مهارات هي أدوات تعليم بُنيت للتعليم والاستفهام لا للشيفرة.

أوضح مثال هو `teach`، الذي يعمل على جلسات متعدّدة ويتعامل مع دليل العمل كمساحة تعليم ذات حالة، فيَدوم تقدّم المتعلّم وأسئلتُهُ المفتوحة بين المحادثات لا يُعادان من الصفر كل مرّة. يستفهم `grill-me` وأصلُه `grilling` من المستخدم بلذاجة حول خطة حتى يُحَلّ كل فرع، وهو استفهام [[socratic-method|سقراطي]] كإجراء قابل لإعادة الاستخدام لا كمزاج حواري. يستجيب `wait-what` في اللحظة التي تفشل فيها رسالةٌ في الوصول بإعادة صياغتها بلغة سلسة مع السياق الناقص، وهي حركةٌ يعرفها أي معلّم من مشاهدة شرحٍ يُفلت المرة الأولى. يغطّي `writing-for-agents` كيف تُكتَب المستندات التي يستطيع [[prompt-engineering|وكيل]] اتّباعها، وهي الآن الشكل العملي لكتابة تعليمات مواد مقرر [[pedagogical-agent|ذكاء اصطناعي]] تحويل. يحوّل `to-questionnaire` قرارًا إلى استبيان لمن يستطيع الإجابة عنه، ويُكثّف `handoff` محادثةً إلى مستند يستطيع وكيلٌ آخر المواصلةَ منه، ويولّد `wizard` جولةً تفاعليةً لخطوات لا يستطيع أداءُها إلا شخص.

## ما يجب معرفته قبل اعتماده

كلُّ شيء [[open-source|مفتوح المصدر]] بموجب MIT ومجانيّ كنقطة بداية لثقافة [[ai-literacy|ذكاء اصطناعي]] محلية أو دراسة [[self-directed-learning|ذاتية التوجيه]]. والاعتماد كبير وسريع الحركة: نحو 270,000 نجمة و23,000 تفرّعًا عند الفحص في سبتمبر 2026، مع أحدث إيداع في 18 سبتمبر 2026. والتحذير هو النطاق. تفترض المهارات سياقَ عمل [[human-ai-collaboration|مهندسي]]، وهي مُنظَّمة في سلالم هندسية وإنتاجية ومُتقاعِدة وقيد الإنجاز، فبعض المدخلات غير مكتملة أو متقاعدة صراحةً، ويضاعف ملف README دورَ اشتراك في نشرة. تعامل مع مهارتَي التعليم والاستفهام كالجزء القابل للنقل، وتوقّع إعادة كتابة أيٍّ منهما قبل وضع واحدة أمام الطلاب.

## مفاهيم مرتبطة
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
