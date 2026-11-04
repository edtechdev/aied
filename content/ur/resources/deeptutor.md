---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "[[intelligent-tutoring|DeepTutor مطالعے]] میں جانچے گئے ٹیوٹرنگ فریم ورک کا اوپن سورس نفاذ، جو اب ایک عام ایجنٹ-نیٹو سیکھنے کے ورک اسپیس بن چکا ہے۔"
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*انگریزی صفحے کا خودکار ترجمہ، جو ابھی تک کسی مقامی بولنے والے کے ذریعے جانچا نہیں گیا۔*

**DeepTutor** اس ٹیوٹرنگ فریم ورک کا اوپن سورس نفاذ ہے جسے [[intelligent-tutoring|DeepTutor مطالعے]] میں جانچا گیا، اور یہ اس مقالے کے دائرے سے بہت آگے بڑھ کر ایک عام ایجنٹ-نیٹو سیکھنے کے ورک اسپیس بن چکا ہے۔ ٹیوٹرنگ، مسئلہ حل کرنا، کوئز بنانا، مہارت کی مشق، تحقیق اور بصری نمائندگی ایک ہی capability runtime اور ایک ہی سیشن سیاق شیئر کرتے ہیں، اس لیے مسائل حل کرتے وقت بنا ہوا سیکھنے والے کا پروفائل آگے آنے والی وضاحتوں اور مشق کے سوالوں کی شرط بنتا ہے۔

## اس سے آپ کیا کر سکتے ہیں

دس طریقے — Chat، Ask Questions، Quiz، Research، Visualize، Solve، Course Study، Mastery Path، Immersive Reading اور Immersive Watching — اسی runtime پر چلتے ہیں، اور قابلِ استعمال دوبارہ علم کی بنیادیں، کتابیں، مسودے، نوٹ بکس، سوال بینک اور personas سے مواد لیتے ہیں۔ ریٹریول جان بوجھ کر کئی انجنوں والا ہے: LlamaIndex، PageIndex، GraphRAG، LightRAG یا ریموٹ LightRAG سرور پر بنی versioned RAG لائبریریاں، ساتھ خود میزبان WeKnora بنیاد، Tencent IMA یا MarginNote لائبریری، یا منسلک Obsidian والٹ۔ میموری مبہم نہیں بلکہ معائنے کے قابل ہے: L1 نشانات، L2 سطحی خلاصے اور L3 ترکیب نظر آتی اور ترمیم کے قابل ہے، اور ایک Memory Graph ہر خلاصے کو اس کے پیچھے کی شہادت سے جوڑتا ہے۔ ایک `deeptutor` بائنری ٹرمینل REPL دیتی ہے اور کسی بھی ایجنٹ کے لیے NDJSON اسٹریم کرتی ہے جو اسے اوزار کی طرح چلانا چاہے، اور EduHub برادری نصب کرنے کے قابل skills تقسیم کرتی ہے۔

## یہ کس کے لیے ہے

اعلیٰ تعلیم کے اساتذہ اور محققین جو اس فریم ورک کا نصب کرنے کے قابل نسخہ چاہتے ہیں جس کی رپورٹ مقالہ دیتا ہے، پلگ ایبل runtime پر بنانے والے ڈویلپرز، اور خود رہنمائی سے سیکھنے والے جو اپنی instance چلانے کو تیار ہیں۔ دستاویزات deeptutor.info پر ہیں۔

## نوٹس
Apache 2.0 کے تحت لائسنس یافتہ، ستمبر 2026 تک version 1.6.9 پر اور تقریباً 40,000 GitHub stars کے ساتھ۔ اس کے پیچھے شائع شدہ جانچ — TutorBench بینچ مارک پر پانچ backbone ماڈلز میں مضبوط بنیادوں کے مقابلے شخصی پیمانوں پر اوسطاً 10.8% بہتری اور 29.4% زیادہ مضبوط عمومی ایجنٹک استدلال — [[zhao-deeptutor-agentic-personalized-tutoring-2026|مضمون کے صفحے]] پر خلاصہ کیا گیا ہے، اور اس کی حدود یہاں بھی لاگو ہوتی ہیں۔ کسی بھی اوپن سورس AI اسٹیک کی طرح، ماڈل فراہم کنندہ کی کلیدیں آپ خود دیتے ہیں، اور ڈیسک ٹاپ یا سرور کی تنصیب Python 3.11 اور Node مانگتی ہے۔

## منسلک تصورات
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
