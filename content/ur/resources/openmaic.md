---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "MAIC کا اوپن سورس اجرا: کثیر ایجنٹ کلاس روم جو موضوع یا دستاویز کو سلائیڈوں، کوئز، انٹرایکٹو سمیولیشنز اور پروجیکٹ سرگرمیوں میں بدلتا ہے۔"
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
translation_of: resources/openmaic
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

**OpenMAIC** [[intelligent-tutoring|MAIC مطالعے]] میں بیان کردہ MAIC کثیر ایجنٹ کلاس روم کا اوپن سورس اجرا ہے: کوئی موضوع بیان کریں یا اپنا مواد لگائیں اور یہ پورا سبق بنا دیتا ہے — سلائیڈیں، کوئز، انٹرایکٹو HTML سمیولیشنز اور پروجیکٹ پر مبنی سرگرمیاں — پھر اسے AI اساتذہ اور AI ہم جماعتوں کے ذریعے پیش کرتا ہے جو بولتے ہیں، وائٹ بورڈ پر لکھتے ہیں اور بحث میں حصہ لیتے ہیں۔ یہ اس کلاس روم کا کوڈ ہے جسے پڑھنے کے بجائے چلایا جا سکتا ہے۔

## اس سے آپ کیا کر سکتے ہیں

ایک کلک کی تخلیق ایک پرامپٹ یا اپ لوڈ شدہ دستاویز، آڈیو یا ویڈیو سے منٹوں میں سبق بنا دیتی ہے۔ کثیر ایجنٹ کی تہہ کلاس روم کی بحث جوڑتی ہے جس میں سیکھنے والا شامل ہو یا اسے بلایا جائے، personas کے درمیان گول میز مباحثے وائٹ بورڈ کی تصویروں کے ساتھ، اور آزاد سوال و جواب جہاں استاد سلائیڈوں یا ڈایاگرام سے جواب دیتا ہے۔ سیشنز سلائیڈ ڈیک، کوئز، انٹرایکٹو سمیولیشنز اور PBL سپورٹ کرتے ہیں، اور قابلِ ترمیم `.pptx` یا انٹرایکٹو `.html` کے طور پر برآمد ہوتے ہیں۔ Version 1.0.0 (اگست 2026) نے ایک agent workbench شامل کیا: چیٹ-اول ورک اسپیس جو پورے کورس منصوبہ بندی اور نظرثانی کرتا ہے، سرور پر ٹکے پائیدار سیشنز جنہیں آپ منسوخ، دوبارہ شروع یا ہدایت کر سکتے ہیں، اور 24 بلٹ اِن اسکلز جو سلائیڈز، کوئز، انٹرایکٹوز، تصاویر، ویڈیو اور آوازیں ڈھکتی ہیں۔ ایک `SKILL.md` پیکج ایجنٹ harness کو میسجنگ ایپ سے کلاس روم بنانے دیتا ہے۔

## یہ کس کے لیے ہے

وہ اساتذہ اور کورس ٹیمیں جو بنایا گیا مواد چاہتی ہیں جسے وہ پھر بھی ترمیم کر سکیں، وہ انسٹرکشنل ڈیزائنرز جو کثیر ایجنٹ سرگرمیوں کا prototype بنا رہے ہوں، اور وہ ڈویلپرز جنہیں ہوسٹڈ پروڈکٹ کے بجائے خود میزبان کلاس روم درکار ہو۔ اسکول اسے Vercel پر یا Docker کے ساتھ نصب کر سکتے ہیں، اور منصوبہ open.maic.chat پر ایک ہوسٹڈ ڈیمو دیتا ہے۔

## نوٹس
MIT کے تحت لائسنس یافتہ، انگریزی اور چینی صارف رہنما کے ساتھ، اور Discord و Feishu پر فعال برادری۔ یہ ماڈل کے معاملے میں غیر جانبدار ہے: آپ کم از کم ایک LLM فراہم کنندہ کی کلید دیتے ہیں، اور اختیاری مقامی اجزاء (مقامی ماڈلز کے لیے Lemonade، تقریر کی شناخت کے لیے FunASR) اسٹیک کا زیادہ حصہ آفلائن چلانے دیتے ہیں — اس لیے ”مفت“ سافٹ ویئر کو بیان کرتا ہے، inference کے بل کو نہیں۔ اس کے پیچھے کا مقالہ *Journal of Computer Science and Technology* (2026، DOI 10.1007/s11390-025-6000-0) میں آیا، اور ستمبر 2026 تک ریپوزٹری پر 38,000 سے زیادہ stars تھے۔

## منسلک تصورات
[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
