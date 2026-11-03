---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "اوپن سورس گیارہ Claude Code اسکلز جو کسی کورس کا انسٹرکشنل ڈیزائن شہادت کے سامنے جانچتی ہیں اور ہر سفارش کے ساتھ اس کی شہادت کا درجہ لکھتی ہیں۔"
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**idstack** شہادت پر مبنی [[learning-design|انسٹرکشنل ڈیزائن]] کے لیے گیارہ اسکلز کا اوپن سورس مجموعہ ہے، جو Claude Code پلگ ان کے طور پر تقسیم ہوتا ہے، ساتھ ایک Chrome side-panel ایکسٹینشن۔ کورس کا مسودہ لکھنے کے بجائے، یہ اسکلز اس کا آڈٹ کرتی ہیں: وہ مقاصد کو نظرثانی شدہ Bloom taxonomy کے سامنے درجہ بند کرتی ہیں، مقاصد، سرگرمیوں اور جائزوں کے درمیان تعمیری مطابقت جانچتی ہیں، علمی بوجھ کے مسائل کی نشان دہی کرتی ہیں، اور رسائی کا جائزہ WCAG 2.1 AA اور Universal Design for Learning کے سامنے کرتی ہیں۔ ہر سفارش کے ساتھ شہادت کا درجہ ہوتا ہے، meta-analyses اور randomized trials کے لیے T1 سے لے کر ماہرانہ رائے کے لیے T5 تک۔ منصوبہ بیان کرتا ہے کہ اس کے حوالے گیارہ تحقیقی میدانوں میں 108 ہم مرتبہ جانچے گئے مطالعوں سے لیے گئے ہیں؛ یہ تعداد خود منصوبے کا دعوی ہے، اور اس کی کتابیات Markdown میں شائع ہے تاکہ جائزہ لینے والا جانچ سکے۔

کورسز Canvas API کنکشن، IMS Common Cartridge فائل، SCORM پیکج، authoring اوزار سے PDF ایکسپورٹ، یا چسپاں شدہ دستاویزات کے ذریعے داخل ہوتے ہیں۔ ایک مشترکہ پروجیکٹ manifest سیشنوں کے پار کورس کو یاد رکھتا ہے، اور ایک pipeline اسکل ڈیزائن کے مراحل کو زنجیر کی طرح جوڑتی ہے اور مکمل کام چھوڑ دیتی ہے۔ جائزے آٹھ Quality Matters معیارات اور Community of Inquiry فریم ورک کے سامنے رپورٹ ہوتے ہیں، تدریسی، سماجی اور علمی موجودگی کو الگ کرتے ہوئے، پھر سفارشات کو شدت کے لحاظ سے ترتیب دیتے ہیں۔

## اپنانے سے پہلے کیا جاننا چاہیے

پلگ ان کی تنصیب کے لیے Claude Code اور bash شیل درکار ہے؛ PowerShell اور cmd سیٹ اپ اسکرپٹ نہیں چلا سکتے، اور اسکور کے رجحانات کے لیے Python 3 تجویز کیا جاتا ہے۔ کورس کا ڈیٹا قاری کی اپنی مشین پر پروجیکٹ فولڈر میں رہتا ہے، اور وہاں سے صرف اس انٹیگریشن سے نکلتا ہے جو صارف خود چلائے، جیسے Canvas API کال۔ Chrome ایکسٹینشن کے live inference کے لیے قاری کی اپنی مفت Google AI Studio API key درکار ہے، البتہ ایک simulation موڈ اس کے بغیر بھی دکھا دیتا ہے۔ منصوبہ خود کو version 3.5.1.0 پر بیٹا کہتا ہے اور minor versions کے درمیان breaking changes کی تنبیہ کرتا ہے، اور یہ کسی نامزد مصنف کے بجائے savvides GitHub اکاؤنٹ سے شائع ہوتا ہے۔

## متعلقہ تصورات
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
