---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "کھلی Markdown بولی جو ایک ٹیکسٹ فائل کو براؤزر میں انٹرایکٹو کورس بنا دیتی ہے، کوئز اور چلنے والے کوڈ کے ساتھ، اور کورس بنانے کے لیے کثیر ایجنٹ معاون۔"
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
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

**LiaScript** ایک توسیع یافتہ Markdown بولی اور اس کے لیے ایک interpreter ہے۔ ایک سادہ ٹیکسٹ فائل انٹرایکٹو کورس بن جاتی ہے: وہی دستاویز بیانیے کی طرح پڑھی جا سکتی ہے، سلائیڈوں کی طرح چلائی جا سکتی ہے، یا کورس کی طرح مکمل کی جا سکتی ہے، سب کچھ براؤزر میں۔ لکھنے یا پڑھنے کے لیے کچھ نصب کرنا نہیں پڑتا۔

## اس سے آپ کیا کر سکتے ہیں

کوئز انہی شکلوں میں آتے ہیں جن کی استاد توقع کرتا ہے، بشمول کثیر الانتخابی، matrix سوالات، متن کی درج، dropdowns اور gap texts، براہِ راست Markdown میں لکھے ہوئے۔ کوڈ بلاکس کو [[cs-education|پروگرامنگ]] ٹیوٹوریلز کے لیے قابلِ ترمیم اور چلانے کے قابل بنایا جا سکتا ہے، اور ایک macro نظام JavaScript لائبریریوں کو دوبارہ استعمال کے قابل بلاکس میں لپیٹتا ہے تاکہ انٹرایکٹو ڈایاگرام کے لیے ہر مصنف کو کوڈ لکھنے کی ضرورت نہ پڑے۔ کورس وہیں میزبانی پاتا ہے جہاں مصنف پہلے ہی متن رکھتا ہے، کسی ایسی خدمت میں قید ہونے کے بغیر، اور سب کچھ client-side چلتا ہے، اس لیے لوڈ شدہ کورس آفلائن بھی کام کرتا ہے۔ LiaScript Exporter کسی کورس کو Moodle، ILIAS اور دیگر [[edtech-platform|سیکھنے کے نظاموں]] کے لیے SCORM میں باندھ دیتا ہے۔

## کورس بنانے کے لیے تدریسی ایجنٹ

منصوبہ LiaScript کورس لکھنے کے لیے ایک **[teaching agent](https://github.com/LiaScript/teaching-agent)** بھی شائع کرتا ہے، جو Boost Software License 1.0 کے تحت لائسنس یافتہ ہے۔ تدریس، بصری ڈیزائن، سیکھنے والے کے جائزے اور اشاعت کے لیے چار ایجنٹ ایک ہی پروجیکٹ فائل کے گرد کام کرتے ہیں جس میں کورس کی حالت ہوتی ہے، اور بہاؤ define-first ہے: اہداف، حلقہ اور didactics کوئی بھی مواد لکھنے سے پہلے طے ہوتے ہیں، اور اس کے بعد تصدیق کے گیٹ آتے ہیں۔ مسودے کا جائزہ کسی نامزد سیکھنے والے persona سے لیا جا سکتا ہے تاکہ [[cognitive-offloading|علمی بوجھ]] اور فرض کیے گئے پیشگی علم کی جانچ ہو۔ ایجنٹ ایڈیٹر سے آزاد ہے، اور ایک ہی تفصیل سے Claude Code، Copilot، Codex، Cursor یا ویب چیٹ کے لیے ترتیبات بناتا ہے، اور ریپوزٹری خود ایک تیار مثال بھی ہے، جس میں EU NIS2 Directive پر چھ اکائیوں کا کورس اور ایک دستاویز ہے جو بتاتی ہے کہ وہ کیسے بنا۔

## نوٹس اور احتیاطیں

LiaScript مفت ہے، کوئی معاوضہ والی سطح نہیں اور کوئی اکاؤنٹ درکار نہیں، اور BSD-3-Clause کے تحت کھلے طور پر تیار ہوتی ہے، اس لیے ادارے خود میزبانی اور ترمیم کر سکتے ہیں۔ Live Classroom کی خصوصیت کو بڑے پیمانے پر بھروسا کرنے سے پہلے دیکھ لینا چاہیے، کیونکہ حقیقی وقت کی ہم آہنگی خالص مقامی rendering کے بجائے مشترکہ خدمت استعمال کرتی ہے۔ تدریسی ایجنٹ نیا اور کم استعمال شدہ ہے، اس لیے اسے معاون مصنوع کے بجائے کام کرتے prototype کی طرح لیں۔

## منسلک تصورات
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
