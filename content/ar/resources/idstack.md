---
title: "idstack"
created: "2026-10-12T16:45:00-04:00"
type: resource
summary: "مجموعة مفتوحة المصدر من إحدى عشرة مهارة لـClaude Code تُدقّق مقرّرًا مقابل قاعدة أدلة التصميم التعليمي، موسومةً كل توصية بدرجتها الأدلّية."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
reviewed_by: [editor]
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

**idstack** مجموعة مفتوحة المصدر من إحدى عشرة مهارة لـ[[learning-design|التصميم التعليمي]] المبني على الأدلة، موزعةً كإضافة لـClaude Code مع إضافة لوحة جانبية مكمّلة لـChrome. وبدلًا من صياغة مقرّر، تُدقّق المهارات مقرّرًا: فهي تُصنّف الأهداف مقابل تصنيف بلوم المنقح، وتتحقق من التوافق البنائي بين الأهداف والأنشطة والتقويم، وتُشير إلى مشكلات الحمل المعرفي، وتراجع إمكانية الوصول مقابل WCAG 2.1 AA والتصميم الشامل للتعلم. وتحمل كل توصية درجةً أدلّية، من T1 للتحليلات التلويمية والتجارب المعشّاة إلى T5 لرأي الخبراء. ويُصرّح المشروع أن استشهاداته تستند إلى 108 دراسات محكّمة عبر أحد عشر مجالًا بحثيًا؛ وذلك العدد ادعاء المشروع نفسه، وقائمة مراجعه منشورة بصيغة Markdown حتى يستطيع المراجع التحقق منها.

تدخل المقرّرات عبر اتصال واجهة برمجة تطبيقات Canvas، أو ملف Common Cartridge من IMS، أو حزمة SCORM، أو تصدير PDF من أداة تأليف، أو مستندات ملصقة. ويحفظ بيان مشروع مشترك المقرّر عبر الجلسات، ومهارة خط أنابيب تُسلسل مراحل التصميم مع تخطي العمل المكتمل. وتُبلّغ المراجعات مقابل معايير Quality Matters الثمانية وإطار مجتمع الاستقصاء، مفصلةً الحضور التعليمي والاجتماعي والمعرفي، ثم ترتّب التوصيات بحسب الشدة.

## What to know before adopting it

تتطلب الإضافة Claude Code وصدفة bash للتثبيت؛ وPowerShell وcmd لا تستطيعان تشغيل سكربت الإعداد، ويُنصح بـPython 3 لاتجاهات الدرجات. وتبقى بيانات المقرّر في مجلد المشروع على جهاز القارئ نفسه، ولا تخرج منه إلا عبر تكامل يستدعيه المستخدم، مثل نداء واجهة برمجة تطبيقات Canvas. ويحتاج الاستدلال الحي لإضافة Chrome مفتاح واجهة برمجة تطبيقات Google AI Studio المجاني الخاص بالقارئ، وإن كان وضع المحاكاة يُظهرها دون واحد. ويوسم المشروع نفسه ببيتا في الإصدار 3.5.1.0 ويحذّر من تغييرات كاسرة بين الإصدارات الثانوية، وهو منشور تحت حساب GitHub الخاص بـsavvides لا بواسطة مؤلف مُسمّى.

## Connected Concepts

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
