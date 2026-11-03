---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "اساتذہ، اسکول رہنماؤں اور تعلیمی اوزار بنانے والوں کے لیے 165 ایجنٹ اسکلز کی لائبریری، بیس حصوں میں منقسم اور شہادت پر مبنی حوالوں کے ساتھ۔"
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
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

**Education Agent Skills** اساتذہ، اسکول رہنماؤں، اور تعلیمی اوزار بنانے والے لوگوں کے لیے 165 ایجنٹ اسکلز کی لائبریری ہے۔ اسکلز بیس حصوں میں گروپ ہیں جو تدریس، سیکھنے کی سائنس، [[curriculum-design|نصاب]]، جائزہ اور regeneration کو ڈھکتے ہیں، اور ہر ایک اس طرح لکھی گئی ہے کہ [[agentic-ai|ایجنٹ]] اسے لوڈ کرے، نہ کہ دستاویز کی طرح پڑھا جائے۔

## اس سے آپ کیا کر سکتے ہیں

اسکلز Claude Code، Codex اور Hermes میں نصب ہوتی ہیں، یا پلگ ان کے طور پر یا فولڈرز کاپی کر کے، اس لیے ایک ہی لائبریری کئی ایجنٹ سطحوں پر کام کرتی ہے۔ ایک ہوسٹڈ MCP سرور اس مجموعے کو ان ایجنٹس کے لیے اوزار بنا کر پیش کرتا ہے جو اسکلز مقامی طور پر نصب نہیں کر سکتے، اور ریپوزٹری ایک رجسٹری اور پہلے سے بنا bundle دونوں دیتی ہے تاکہ سرور deploy کے وقت الگ فائلیں پڑھنے کے بغیر مجموعہ پیش کر سکے۔

منصوبے کا امتیازی دعوی اس کی بنیاد ہے: اسکلز ان شہادتوں کا حوالہ دیتی ہیں جن پر ٹکی ہیں، اور ریپوزٹری کی اپنی تاریخ یہ نظم نافذ ہوتے دکھاتی ہے، نہ کہ صرف دعوے کے طور پر، بشمول ایک merged fix جو ایک غیر مدلل انتساب ہٹاتا اور کسی حوالہ شدہ مطالعے میں جانچے گئے safeguard کی تفصیل درست کرتا ہے۔

## نوٹس اور احتیاطیں

تعلیمی اسکلز، دستاویزات اور نصابی مواد CC BY-SA 4.0 کے تحت لائسنس یافتہ ہیں، اس لیے دوبارہ استعمال اور موافقت کھلی ہے جبکہ مشتق کاموں کو وہی لائسنس ساتھ لانا ہوگا۔ اگر آپ اسے deploy کریں تو دو عملی تفصیلیں اہم ہیں۔ ہوسٹڈ MCP endpoint سب کے لیے کھلا نہیں بلکہ tokens مانگتا ہے، اور چونکہ سرور commit شدہ snapshot پیش کرتا ہے، SKILL.md فائلیں نہیں، اس لیے bundle دوبارہ بنا کر commit کیے بغیر شامل کی گئی اسکل live سرور پر نظر نہیں آئے گی، redeploy کے بعد بھی نہیں۔ لائبریری Gareth Manning بناتے ہیں، جو ایک ماہرِ تعلیم اور نصاب ڈیزائنر ہیں، اور لائسنس کی شرائط خاص طور پر تعلیمی مواد پر لاگو ہوتی ہیں۔

## متعلقہ تصورات

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
