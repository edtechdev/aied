---
title: "Intelligent Textbooks کی تعمیر"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCreary کی اوپن سورس رہنما: سرچ، نیویگیشن، فرہنگ، کوئز، تصوراتی گراف اور سرایت شدہ سمیولیشنز والی آن لائن درسی کتابیں، MkDocs Material اور جنریٹو AI سے بنی۔"
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**Intelligent Textbooks** سائٹ Dan McCreary کی مرحلہ وار رہنما ہے *انٹیلیجنٹ ٹیکسٹ بکس* بنانے کے لیے — ایسی آن لائن درسی کتابیں جو اسٹیٹک PDFs سے آگے بڑھ کر سرچ، سائٹ نیویگیشن، اصطلاحات کی فرہنگ، فہرستِ مضامین، کوئز کا انتظام، رینڈر شدہ فارمولے، سوشل میڈیا پیش نظارے، لنک کی جانچ، اور آسانی سے دکھایا جانے والا **تصوراتی گراف** شامل کرتی ہیں جو کورس کے تمام تصورات اور ان کے انحصار دکھاتا ہے۔ رہنما دلیل دیتی ہے کہ آج بہت سے کورسز کو ان خصوصیات والی اعلیٰ معیار کی آن لائن درسی کتابوں سے فائدہ ہو سکتا ہے، اور یہ دکھاتی ہے کہ انہیں [MkDocs](http://mkdocs.com/) بلڈ سسٹم، Material تھیم اور جنریٹو AI کے ساتھ ملا کر کیسے بنایا اور برقرار رکھا جائے۔

فیصلہ کن اقدام یہ ہے کہ درسی کتاب *Markdown میں لکھی اور AI سے بنائی* جاتی ہے، یعنی [[vibe-coding|AI کی مدد سے لکھائی]] کا ایک ٹھوس نمونہ جو [[curriculum-design|کورس مواد]] پر لاگو ہوتا ہے: بڑی سائٹ کو ہاتھ سے برقرار رکھنے کے بجائے آپ کورس بیان کرتے ہیں اور جنریٹو AI صفحات بناتا اور برقرار رکھتا ہے، جبکہ ٹول چین نیویگیشن، سرچ اور تصوراتی گراف سنبھالتا ہے۔ ایک ساتھی [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) لائبریری دعوی کرتی ہے کہ کورس کی تفصیل سے سطح 2 کی درسی کتاب بنانے کے لیے درکار 90% سے زیادہ کام خودکار کر دیتی ہے۔

## ایک ضمنی وسیلہ: MicroSims

اس رہنما کا فطری ساتھی McCreary کی **MicroSims** لائبریری ہے، <https://dmccreary.github.io/microsims/> پر (سورس: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims))، جو وہ انٹرایکٹو سمیولیشنز دیتی ہے جو انٹیلیجنٹ ٹیکسٹ بک میں سرایت کرتی ہیں۔ ایک *MicroSim* (مائیکرو سمیولیشن) ایک سادہ انٹرایکٹو سمیولیشن ہے جو AI کے ساتھ بنائی جاتی ہے تاکہ استاد کوئی تصور سمجھا سکے، اور اسے انٹیلیجنٹ ٹیکسٹ بک یا کسی بھی ایسی سائٹ میں سرایت کیا جا سکتا ہے جو `iframe` قبول کرے۔ MicroSims تین وجوہ سے منفرد ہیں: **AI کی مدد سے تخلیق** (معیاری ڈیزائن پیٹرن سمیولیشن کی قدرتی زبان کی تفصیل کو قابلِ اشتراک اثاثے میں بدل دیتے ہیں)، **عالمگیر سرایت** (ایک HTML `iframe` عنصر کسی بھی صفحے میں ایک ڈال دیتا ہے)، اور **شفاف، قابلِ ترمیم کوڈ** (کوئی بلیک باکس نہیں — ایک کلک سمیولیشن کو ویب ایڈیٹر میں کھولتا ہے، اور Creative Commons لائسنس زیادہ تر اساتذہ کو بغیر لائسنس فیس استعمال کرنے دیتا ہے)۔ یہ اصطلاح Valerie Lockhart نے 2023 میں وضع کی، جب انہوں نے دیکھا کہ اساتذہ اور طلبہ p5.js JavaScript لائبریری سے تقریباً بغیر تربیت کے سمیولیشنز بنا سکتے ہیں۔

منصوبہ MicroSim میٹاڈیٹا کے لیے JSON Schema بھی شائع کرتا ہے تاکہ AI اوزار قابلِ تلاش تفصیلات بنا سکیں، اور roadmap پر ایک faceted MicroSim رجسٹری ہے۔ فریم ورک بیان کرنے والا ایک تحقیقی مقالہ — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — arXiv پر ہے ([2511.19864](https://arxiv.org/abs/2511.19864))۔ نمونہ سمیولیشنز میں Bouncing Ball، Projectile Motion، String Harmonics، Conway's Game of Life، Euler's Formula اور اسٹاک مارکیٹ منافع کا چارٹ شامل ہیں، ہر ایک سائٹ پر زندہ چلتا ہے۔

## یہ کس کے لیے ہے

وہ اساتذہ اور انسٹرکشنل ڈیزائنرز جو کورس کی درسی کتاب بنانا یا برقرار رکھنا چاہتے ہیں، خاص طور پر اعلیٰ تعلیم اور پیشہ ورانہ تربیت میں، ساتھ فیکلٹی ڈویلپرز اور ہر وہ شخص جو تعلیمی مواد لکھنے کے لیے جنریٹو AI استعمال کرتا ہے۔ یہ ان ماہرینِ تعلیم کے لیے موزوں ہے جو Markdown اور Git کے بہاؤ سے مانوس ہیں (یا سیکھنے کو تیار ہیں) اور چاہتے ہیں کہ AI سائٹ کی plumbing — سرچ، نیویگیشن، تصوراتی گراف — سنبھالے تاکہ وہ تدریس پر توجہ دے سکیں۔

## نوٹس اور احتیاطیں

یہ ایک عمل کرنے والے کی رہنما اور ٹول چین ہے، ہم مرتبہ جانچا ہوا مطالعہ نہیں — یہ ایک بہاؤ اور اپنی تعلیمی توجیہہ پیش کرتی ہے (”انٹیلیجنٹ ٹیکسٹ بکس طلبہ کو علم کی تلاش میں تصورات سے گزارتی ہیں“)، سیکھنے کے نتائج کی شہادت نہیں۔ تجرباتی پشت پناہی کے لحاظ سے MicroSim کا تحقیقی مقالہ سب سے قریب ہے، اور وہ بھی arXiv پر خود شائع شدہ ہے۔ دونوں منصوبے اوپن سورس ہیں (intelligent-textbooks ریپو MIT لائسنس اور 38 stars بتاتی ہے؛ MicroSims Creative Commons لائسنس اور 13 stars) اور فعال طور پر برقرار رکھے جاتے ہیں۔ تصوراتی گراف اور فرہنگ-اول ڈھانچہ دریافت کے لیے واقعی مفید ہیں، مگر رہنما کافی تکنیکی لکھائی کے بہاؤ کی توقع رکھتی ہے — MkDocs، Git اور جنریٹو AI کے اوزار — جو کچھ اساتذہ کے لیے رکاوٹ ہو سکتا ہے۔ اندراج کے وقت MicroSims کی رجسٹری ابھی صرف roadmap پر ہے، اس لیے کوئی مخصوص موجود سمیولیشن ڈھونڈنے کے لیے سائٹ کی اپنی سرچ اور نیویگیشن پر انحصار ہے۔

## متعلقہ تصورات

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
