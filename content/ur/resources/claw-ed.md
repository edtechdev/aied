---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "لوکل-فرسٹ AI تدریسی معاون جو آپ کے نصاب کو قابلِ ترمیم سبق کے مسودوں، طالب علم مواد اور سلائیڈوں میں بدلتا ہے، چنے ہوئے ماڈل سے۔"
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
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**Claw-ED** ایک لوکل-فرسٹ تدریسی معاون ہے جو آپ کے اپنے نصابی مواد سے سبق کے مسودے بناتا ہے۔ استاد اپنے ذرائع درآمد کرتا ہے، سبق طلب کرتا ہے، اور قابلِ ترمیم مسودے، طالب علم کے لیے مواد اور سلائیڈیں حاصل کرتا ہے، جو استاد کے چنے ہوئے ماڈل سے بنتی ہیں، کسی ایک مقررہ وینڈر سے نہیں۔

## اس سے آپ کیا کر سکتے ہیں

کام کا بہاؤ درآمد سے مسودہ، جائزہ اور برآمد تک چلتا ہے، اور مسودوں کو مکمل ہینڈ آؤٹ کی بجائے ایسے نقطۂ آغاز سمجھا جاتا ہے جنہیں استاد ترمیم کرتا ہے۔ سبق کے کام قطار میں لگتے ہیں اور بحال ہو سکتے ہیں، اس لیے طویل پیداوار جو ناکام ہو جائے اسے دوبارہ شروع کرنے کے بجائے آگے بڑھایا جا سکتا ہے، اور بنی ہوئی مصنوعات ڈاؤن لوڈ ہو سکتی ہیں۔ یہ اپنے اوزار MCP سرور کے ذریعے [[agentic-ai|ایجنٹ]] کو بھی دیتا ہے اور Google Drive سے جڑ سکتا ہے، تاکہ کوئی اسکول اسے موجودہ اسٹوریج اور شیڈولنگ میں جوڑ سکے۔

منصوبہ جان بوجھ کر ماڈل سے آزاد ہے۔ یہ مقامی Ollama ماڈلز، کم خرچ OpenRouter راستے اور ہوسٹڈ اختیارات ساتھ ساتھ دستاویز کرتا ہے، اور اس کی ماڈل گائیڈ تاریخ کے ساتھ ہے، جو صاف کرتی ہے کہ سفارشات کیٹلاگ پر مبنی نقطۂ آغاز ہیں، استاد کے جانچے ہوئے معیار کے فیصلے نہیں۔

## نوٹس اور احتیاطیں

سافٹ ویئر مفت ہے اور اپنے اصل کوڈ کے لیے MIT لائسنس کے تحت [[open-source|اوپن سورس]]، البتہ فریقِ ثالث کے اجزاء اپنی شرائط رکھتے ہیں، اور اسے چلانے کا مطلب یہ ہے کہ ہوسٹڈ ماڈل استعمال کریں تو اپنی ماڈل inference کی قیمت خود اٹھائیں۔ منصوبہ خود کو استاد کے جانچے ہوئے بیٹا کہتا ہے اور اپنے README میں صاف لکھتا ہے کہ اس کا CI پاس ہونا زندہ ماڈلز کے ساتھ تدریسی معیار ثابت نہیں کرتا، اور اس میدان میں سبز ٹیسٹ سوٹ کو اسی طرح پڑھنا چاہیے: یہ سافٹ ویئر کی تصدیق کرتا ہے، [[pedagogy|تدریس]] کی نہیں۔ اسے MacxLabs چلاتا ہے اور استاد کے جانچے ہوئے نمونہ سبق شراکت کے طور پر قبول کرتا ہے۔

## منسلک تصورات
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
