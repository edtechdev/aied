---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "ایک اوپن سورس ایجنٹ اسکل اور نجی براؤزر ایڈیٹر جو واضح تحریر کے اٹھارہ اصولوں کو مسودہ، نظرثانی اور جائزہ کے تین طریقوں میں بدل دیتے ہیں۔"
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
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**Clarity** ایک Agent Skill کو براؤزر ایڈیٹر کے ساتھ جوڑتا ہے، اور دونوں تحریر کے اٹھارہ ایسے اصولوں کے گرد بنے ہیں جو ”اپنے قاری کا اعتماد حاصل کرتی ہے۔“ یہ اسکل Claude Code اور Codex جیسے کوڈنگ ایجنٹس میں `npx skills add addyosmani/clarity` سے نصب ہوتا ہے، اور پھر تین طریقوں سے کام کرتا ہے: جائزے کا طریقہ مسودے پر تنقید کرتا ہے اور فائل کو چھوتا نہیں، نظرثانی کا طریقہ مسودے کو وہیں ترمیم کرتا ہے، اور انٹرویو کا طریقہ پہلے لکھنے والے سے سوالات پوچھتا ہے اور جوابات سے مل کر لکھتا ہے۔ لکھنے والے کو جو [[feedback]] ملتا ہے وہ اسلوب سے پہلے مضمون کو نشانہ بناتا ہے۔ اصول پوچھتے ہیں کہ تحریر کس کے لیے ہے اور وہ پہلے سے کیا جانتا ہے، موضوعات کے بجائے دعووں اور تجریدات کے بجائے تفصیلات پر زور دیتے ہیں، اور بھرتی کو الفاظ کا نہیں بلکہ یہ نہ جاننے کا مسئلہ سمجھتے ہیں کہ تحریر کس لیے ہے۔

براؤزر ایڈیٹر صفحے میں ہی مقامی طور پر چلتا ہے اور مسودہ اپ لوڈ نہیں کرتا۔ یہ مشینی تحریر کی نشانیاں، پڑھنے کی آسانی، اور مضمون کے خلا رپورٹ کرتا ہے، جو اسے [[generative-ai|جنریٹو AI]] کے پیدا کردہ متن کو قاری تک پہنچنے سے پہلے جانچنے کے لیے مفید بناتا ہے۔ منصوبہ صاف کہتا ہے کہ مقصد ایسی تحریر ہے جو پہچانی جانے والی مصنف کی اپنی رہے، نہ کہ ایسی نثر جو [[ai-detection|AI ڈیٹیکشن]] سے گزرنے کے لیے تراشی گئی ہو؛ یہ فرق اساتذہ پہچان لیں گے جب وہ AI کی مدد سے [[writing-education|تحریر]] کے بارے میں پالیسی بناتے ہیں۔

## اپنانے سے پہلے کیا جاننا چاہیے

ریپوزٹری ایک جانچ کا پروٹوکول، `samples/` میں پہلے اور بعد کے نمونے، اور اسکل کے پیچھے حوالہ جاتی فائلیں شائع کرتی ہے، تاکہ جائزہ لینے والا دیکھ سکے کہ اصول کیسے برتاؤ کرتے ہیں، نہ کہ دعوے پر بھروسا کرے؛ یہاں کا صفحہ کوئی ناپا ہوا نتیجہ دہراتا نہیں۔ مصنف Addy Osmani ہیں، لائسنس MIT ہے، اور یہ کام کسی ادارے کی پیداوار نہیں بلکہ آزاد ہے۔ یہ نیا اور متحرک ہے: اگست 2026 میں بنا، 54 commits، تین ریلیز جن میں تازہ ترین اس ستمبر میں version 0.2.1 تھی، اور ستمبر 2026 میں جانچے جانے پر تقریباً 250 stars۔ تین شراکت دار تبدیلیاں لا چکے ہیں۔ اسکل کی ہدایات ایسے ایجنٹ میں لوڈ ہوتی ہیں جو قاری خود چلا رہا ہو، اس لیے [[prompt-engineering|پرامپٹ انجینئرنگ]] کی معمول کی احتیاطیں لاگو ہوتی ہیں: تنقید کا معیار اس مسودے پر منحصر ہے جو اسے دیا جائے۔

## منسلک تصورات
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
