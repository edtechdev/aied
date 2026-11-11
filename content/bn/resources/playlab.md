---
title: "Playlab"
created: "2026-09-20T16:45:00-04:00"
type: resource
summary: "একটি অলাভজনক নির্মাতা-প্ল্যাটফর্ম, যেখানে শিক্ষকরা নিজেদের পাঠ্যক্রম-ভিত্তিক এআই অ্যাপ বানান, শেয়ার করেন ও মূল্যায়ন করেন, নিজের বাছা মডেলে চালান, এবং শিক্ষকের নজরদারি অন্তর্নির্মিত।"
url: https://www.playlab.ai/
author: "Playlab (501(c)(3) nonprofit)"
author_url: https://www.playlab.ai/about
foundations: [ai-literacy, learning-design, teacher-ai-competency]
technology: [generative-ai, llm, rag]
ethics: [privacy, guardrails]
resource_type: [software, collection of tools]
access: [free with account]
last_verified: "2026-09-20"
level: [k 12, higher ed]
audience: [instructors, instructional designers, educational technology developers]
confidence: high
connected_resources: [teacherserver, eduprompts]
translation_of: resources/playlab
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**Playlab** একটি নির্মাতা-প্ল্যাটফর্ম, যেখানে শিক্ষকরা অন্যের টেমপ্লেট থেকে বাছার বদলে নিজের এআই অ্যাপ বানান। একটি অ্যাপ সাধারণ মডেল-জ্ঞানের বদলে [[rag|আপনার নিজের পাঠ্যক্রমে ভিত্তিপ্রাপ্ত]], রুব্রিক ও রেফারেন্সে, আপনার বাছা একটি মডেলে চলে (Anthropic, OpenAI, Google, Meta) যেখানে বানানোর সময় খরচ দৃশ্যমান থাকে, এবং Illustrative Mathematics, OpenSciEd, রাজ্য-মান ও OER Commons-এর জন্য পূর্ব-মানচিত্রিত [[knowledge-graph|নলেজ-গ্রাফের]] উপর নির্ভর করতে পারে।

## এটি দিয়ে যা করতে পারেন
বানান ও রিমিক্স করুন: শূন্য থেকে শুরু করুন বা কমিউনিটি গ্যালারি থেকে একটি অভিযোজিত করুন (শত শত অ্যাপ, শিক্ষার্থী-নির্মিতও আছে)। প্রতি অ্যাপে আচরণ নিয়ন্ত্রণ করুন — ছবি ও কণ্ঠ-ইনপুট, স্মৃতি ও প্রোফাইল, কিংবা Avoid Answer Generation, যা শিক্ষার্থীকে উত্তর তুলে দেওয়ার বদলে উত্তরের দিকে পথ দেখায়। এছাড়াও আছে: Docx ও Drive রপ্তানিসহ একটি নথি-সম্পাদক, Python সম্পাদন, গণিত-ইনপুট ও ছবি-প্রক্রিয়াকরণ। শিক্ষকরা [[human-in-the-loop-ai|যে-কোনো শিক্ষার্থী-কথোপকথন পর্যালোচনা]] করতে পারেন, আর স্বয়ংক্রিয় ফ্ল্যাগ একটি কথোপকথন থামিয়ে শিক্ষককে জানাতে পারে। রোস্টার সংযুক্ত হয় Clever, ClassLink বা Google SSO-এর মাধ্যমে।

## এটি কাদের জন্য
K-12 শিক্ষক ও জেলা, যাঁরা অবকাঠামো না বানিয়ে শ্রেণিকক্ষ-নিয়ন্ত্রণ ও পাঠ্যক্রম-ভিত্তি চান; বিশ্ববিদ্যালয়ের প্রশিক্ষক ও ইনস্ট্রাকশনাল ডিজাইনার, যাঁরা একটি কাস্টম কোর্স-সরঞ্জাম চান; এবং 13 বছর ও তার বেশি বয়সের শিক্ষার্থী (18-এর নিচে অভিভাবকের অনুমতি) যারা নিজেরাই অ্যাপ বানায়। এটি একটি 501(c)(3) অলাভজনক: শিক্ষক-অ্যাকাউন্ট চিরকাল বিনামূল্যে, আর স্কুল ও জেলা-স্তর পেইড।

## টীকা
বিল্ডারে প্রবেশ সীমিত: get-started পাতা একটি ইমেইল ঠিকানা ও একটি অনবোর্ডিং ওয়ার্কশপে স্থান, কিংবা একটি ইনভাইট কোড চায়। এর সম্মতি-দাবিগুলো (FERPA, COPPA, GDPR, CCPA, SOC 2 Type II), আপনার কাজ কখনো বাইরের মডেল প্রশিক্ষণে ব্যবহার হবে না এই প্রতিশ্রুতি, এবং ফলাফলের অধিকার নির্মাতাকে দেওয়া — এগুলো কেবল বিপণন-পাতায় নয়, ডেটা-প্রক্রিয়াকরণ চুক্তিতেও থাকা উচিত; MagicSchool ও প্রধান চ্যাটবটগুলোর সঙ্গে এর সক্ষমতা-তুলনা Playlab-এর নিজের, 2026-এর মাঝামাঝি তারিখের। এটি Scratch ও MIT Media Lab-এর সঙ্গে যুক্ত এন্ড-ইউজার প্রোগ্রামিং কাজ থেকে জন্ম নিয়েছে।

## সংযুক্ত ধারণা

[[ai-literacy]], [[learning-design]], [[generative-ai]], [[rag]], [[human-in-the-loop-ai]], [[privacy]], [[guardrails]], [[educational-technology-developers]], [[teacher-ai-competency]]
