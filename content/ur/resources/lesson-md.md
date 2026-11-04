---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "بلاک پر مبنی ای لرننگ مواد کے لیے ایک کھلا فارمیٹ، ساتھ ایک ایجنٹ اسکل جو اسی فارمیٹ میں سبق، جائزے اور پورے کورس بنڈل لکھتی ہے۔"
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
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**LESSON.md** بلاک پر مبنی ای لرننگ مواد کے لیے ایک کھلا فارمیٹ ہے: YAML frontmatter والی ایک Markdown فائل اور متن، تصاویر اور علم کی جانچ کے لیے `:::` ہدایات، جو انسان پڑھ سکے اور کوئی بھی اوزار پارس کر سکے۔ یہ اس لیے موجود ہے کہ کورس کا مواد عموماً کسی ایک authoring اوزار میں قید رہتا ہے، اور اس لیے کہ [[llm|بڑے زبان کے ماڈل]] صرف ان سبقوں میں مدد کر سکتے ہیں جو وہ واقعی پڑھ سکیں۔

## اس سے آپ کیا کر سکتے ہیں
کسی بھی ٹیکسٹ ایڈیٹر میں سبق لکھیں اور اسے کسی بھی ایسے اوزار میں درآمد کریں جو یہ فارمیٹ سپورٹ کرتا ہو، بغیر کاپی پیسٹ اور دوبارہ فارمیٹنگ کے۔ انٹرایکٹو حصے — کوششوں کی حد اور جواب کی سطح پر رائے والے کثیر الانتخابی علم کی جانچ — GUI کے بجائے سادہ خصوصیات کے طور پر بیان ہوتے ہیں۔ بنڈل کی جڑ میں ایک ساتھی `ASSESSMENT.md` کورس کا اسکور شدہ [[assessment]] بن جاتا ہے۔ منصوبہ ایک `lesson-md` اسکل بھی دیتا ہے جو Claude، Codex یا کسی دوسرے [[agentic-ai|ایجنٹ]] کو یہ فارمیٹ سکھاتی ہے، تاکہ کورس کو سادہ زبان میں بیان کرنے پر سبق، جائزے اور ایک مکمل بنڈل واپس آئیں۔

## یہ کس کے لیے ہے
وہ انسٹرکشنل ڈیزائنرز اور کورس بنانے والے جو چاہتے ہیں کہ ان کا مواد اوزار بدلنے پر بچا رہے، وہ ای لرننگ وینڈرز جو ایسا درآمد و برآمد فارمیٹ چاہتے ہیں جو ان کے صارف پہلے ہی سمجھتے ہوں، اور ہر وہ شخص جو قابلِ مطالعہ فارمیٹ پر AI کی مدد سے لکھائی بناتا ہے۔ شراکت داروں میں LXD Integral کے Dan Bashaw شامل ہیں، اور فارمیٹ کا v1.8 تک عوامی changelog ہے۔

## منسلک تصورات
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
