---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "এগারোটি ওপেন-সোর্স Claude Code স্কিলের একটি সেট, যা ইনস্ট্রাকশনাল-ডিজাইন প্রমাণভিত্তির বিপরীতে একটি কোর্স নিরীক্ষা করে এবং প্রতিটি সুপারিশে তার প্রমাণ-স্তর চিহ্নিত করে।"
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**idstack** প্রমাণভিত্তিক [[learning-design|ইনস্ট্রাকশনাল ডিজাইনের]] জন্য এগারোটি স্কিলের ওপেন-সোর্স সংগ্রহ, যা একটি Claude Code প্লাগইন হিসেবে বিতরণ করা হয়, সঙ্গে একটি সঙ্গী Chrome সাইড-প্যানেল এক্সটেনশন। কোর্স খসড়া করার বদলে স্কিলগুলো একটি কোর্স নিরীক্ষা করে: তারা সংশোধিত Bloom শ্রেণিবিন্যাসের বিপরীতে উদ্দেশ্যগুলো শ্রেণিবদ্ধ করে, উদ্দেশ্য, কার্যকলাপ ও মূল্যায়নের মধ্যে গঠনমূলক সামঞ্জস্য যাচাই করে, কগনিটিভ লোডের সমস্যা চিহ্নিত করে, এবং WCAG 2.1 AA ও Universal Design for Learning-এর বিপরীতে অ্যাক্সেসযোগ্যতা পর্যালোচনা করে। প্রতিটি সুপারিশ একটি প্রমাণ-স্তর বহন করে, মেটা-বিশ্লেষণ ও র‍্যান্ডমাইজড ট্রায়ালের জন্য T1 থেকে শুরু করে বিশেষজ্ঞ মতামতের জন্য T5 পর্যন্ত। প্রকল্পটি বলে যে এর উদ্ধৃতিগুলো এগারোটি গবেষণা-ক্ষেত্রজুড়ে 108টি সহপাঠী-পর্যালোচিত গবেষণা থেকে নেওয়া; সংখ্যাটি প্রকল্পের নিজের দাবি, আর এর গ্রন্থপঞ্জি Markdown-এ প্রকাশিত, তাই পর্যালোচক তা যাচাই করতে পারেন।

কোর্স প্রবেশ করে Canvas API সংযোগ, একটি IMS Common Cartridge ফাইল, একটি SCORM প্যাকেজ, অথরিং সরঞ্জাম থেকে PDF রপ্তানি, কিংবা পেস্ট করা নথির মাধ্যমে। একটি শেয়ার করা প্রকল্প-ম্যানিফেস্ট সেশনজুড়ে কোর্সটি মনে রাখে, আর একটি পাইপলাইন-স্কিল নকশার ধাপগুলোকে শৃঙ্খলাবদ্ধ করে সম্পন্ন কাজ এড়িয়ে যায়। পর্যালোচনাগুলো আটটি Quality Matters মানদণ্ড ও Community of Inquiry কাঠামোর বিপরীতে রিপোর্ট করে, শিক্ষাদান, সামাজিক ও কগনিটিভ উপস্থিতিকে আলাদা করে, তারপর সুপারিশগুলো তীব্রতা অনুযায়ী সাজায়।

## গ্রহণের আগে যা জানা দরকার

প্লাগইন ইনস্টল করতে Claude Code ও একটি bash শেল দরকার; PowerShell ও cmd সেটআপ স্ক্রিপ্ট চালাতে পারে না, আর স্কোর-প্রবণতার জন্য Python 3 সুপারিশ করা হয়। কোর্স-ডেটা পাঠকের নিজের মেশিনে প্রকল্প-ফোল্ডারেই থাকে, এবং সেখান থেকে বের হয় কেবল ব্যবহারকারীর আহ্বান করা কোনো ইন্টিগ্রেশনের মাধ্যমে, যেমন একটি Canvas API কল। Chrome এক্সটেনশনের লাইভ ইনফারেন্সের জন্য পাঠকের নিজের বিনামূল্যের Google AI Studio API কী দরকার, যদিও একটি সিমুলেশন মোড তা ছাড়াই দেখায়। প্রকল্পটি নিজেকে সংস্করণ 3.5.1.0-এ বিটা বলে এবং ছোট সংস্করণগুলোর মধ্যে ভাঙন-সৃষ্টিকারী পরিবর্তনের সতর্কতা দেয়, আর এটি কোনো নামযুক্ত লেখকের বদলে savvides GitHub অ্যাকাউন্টের অধীনে প্রকাশিত।

## সংযুক্ত ধারণা
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
