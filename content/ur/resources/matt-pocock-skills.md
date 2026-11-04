---
title: "حقیقی انجینئروں کے لیے اسکلز"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocock کی ایجنٹ اسکلز ڈائریکٹری: چھوٹی، جوڑی جا سکنے والی ہدایات کی فائلیں، جن میں کئی سیشن والی تدریسی اور سخت سوال کرنے والی اسکل بھی ہے۔"
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
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**Skills for Real Engineers** Matt Pocock کی شائع کردہ ایجنٹ اسکلز ڈائریکٹری ہے: چھوٹی، جوڑی جا سکنے والی ہدایات کی فائلیں جو Claude Code، Codex یا کسی دوسرے ایجنٹ میں نصب ہوتی ہیں، اور اس طرح لکھی گئی ہیں کہ پوری کے بجائے ڈھالی جائیں۔ مجموعے کا زیادہ حصہ سافٹ ویئر کے کام کی خدمت کرتا ہے، مگر کئی اسکلز تعلیمی آلات ہیں جو کوڈ کے بجائے تدریس اور سوال پوچھنے کے لیے بنی ہیں۔

سب سے واضح مثال `teach` ہے، جو کئی سیشنوں پر چلتی ہے اور working directory کو ایک حالت والا تدریسی ورک اسپیس سمجھتی ہے، تاکہ سیکھنے والے کی پیش رفت اور کھلے سوالات گفتگو کے درمیان بچے رہیں، ہر بار نئے سرے سے شروع نہ ہوں۔ `grill-me` اور اس کی بنیادی `grilling` primitive صارف کا کسی منصوبے پر اس وقت تک سخت انٹرویو کرتی ہیں جب تک ہر شاخ حل نہ ہو، جو [[socratic-method|سقراطی سوال]] کا گفتگو کے مزاج کے بجائے دوبارہ استعمال کے قابل طریقہ ہے۔ `wait-what` اس لمحے جواب دیتی ہے جب کوئی پیغام نہ پہنچے، اور اسے سادہ زبان میں، گمشدہ سیاق کے ساتھ دوبارہ پیش کرتی ہے — یہی حرکت ہر استاد پہچانتا ہے جب وضاحت پہلی بار چوک جائے۔ `writing-for-agents` بتاتی ہے کہ ایسی دستاویزات کیسے لکھی جائیں جن پر [[prompt-engineering|ایجنٹ]] عمل کر سکے، جو آج [[pedagogical-agent|AI]] کورس مواد کے لیے ہدایات لکھنے کی عملی شکل ہے۔ `to-questionnaire` کسی فیصلے کو اس شخص کے لیے سوالنامے میں بدلتی ہے جو اس کا جواب دے سکے، `handoff` گفتگو کو ایسی دستاویز میں سمیٹتی ہے جس سے دوسرا ایجنٹ آگے چل سکے، اور `wizard` ان مراحل کے لیے انٹرایکٹو walkthrough بناتی ہے جو صرف انسان کر سکتا ہے۔

## اپنانے سے پہلے کیا جاننا چاہیے

سب کچھ MIT کے تحت [[open-source|اوپن سورس]] ہے اور مقامی [[ai-literacy|AI لٹریسی]] یا [[self-directed-learning|خود رہنمائی کے مطالعے]] کے نقطۂ آغاز کے طور پر لینا مفت ہے۔ اپنانا بڑا اور تیز رفتار ہے: ستمبر 2026 میں جانچے جانے پر تقریباً 270,000 stars اور 23,000 forks، اور تازہ ترین commit 18 ستمبر 2026 کا۔ احتیاط دائرے کی ہے۔ اسکلز [[human-ai-collaboration|انجینئر]] کے کام کے سیاق کو فرض کرتی ہیں، وہ engineering، productivity، deprecated اور in-progress ٹوکریوں میں تقسیم ہیں، اس لیے کچھ اندراجات واضح طور پر ادھورے یا ریٹائر شدہ ہیں، اور README خود ایک نیوز لیٹر کی سبسکرپشن بھی ہے۔ تدریس اور سوال پوچھنے والی اسکلز کو منتقل ہونے والا حصہ سمجھیں، اور توقع رکھیں کہ طلبہ کے سامنے رکھنے سے پہلے آپ کو ان میں سے کوئی بھی دوبارہ لکھنی پڑے گی۔

## منسلک تصورات
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
