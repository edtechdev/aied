---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "একটি ওপেন-সোর্স Agent Skill ও ব্যক্তিগত ব্রাউজার-এডিটর, যা স্পষ্ট লেখার আঠারোটি নিয়মকে খসড়া, পুনর্লেখন ও পর্যালোচনা মোডে রূপ দেয়।"
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
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**Clarity** একটি Agent Skill-কে একটি ব্রাউজার-এডিটরের সঙ্গে জোড়া দেয়, দুটোই গড়া হয়েছে সেই লেখার আঠারোটি নিয়মকে কেন্দ্র করে যা "পাঠকের বিশ্বাস অর্জন করে"। স্কিলটি Claude Code ও Codex-এর মতো কোডিং এজেন্টে `npx skills add addyosmani/clarity` দিয়ে ইনস্টল হয়, আর তারপর তিন মোডে কাজ করে: review মোড একটি খসড়ার সমালোচনা করে এবং ফাইলটি অপরিবর্তিত রাখে, rewrite মোড খসড়াটি জায়গাতেই সম্পাদনা করে, এবং interview মোড আগে লেখককে প্রশ্ন করে নিয়ে উত্তরগুলো থেকে সহ-লেখে। লেখক যে [[feedback|ফিডব্যাক]] পান তা স্টাইলের আগে বিষয়বস্তুকে লক্ষ্য করে। নিয়মগুলো জিজ্ঞেস করে লেখাটি কার জন্য এবং তারা ইতিমধ্যে কী জানে, বিষয়ের বদলে দাবির পক্ষে এবং বিমূর্ততার বদলে নির্দিষ্টতার পক্ষে জোর দেয়, আর বাড়তি কথাকে শব্দভাণ্ডারের সমস্যা নয়, লেখাটি কীসের জন্য তা না জানার সমস্যা হিসেবে দেখে।

ব্রাউজার-এডিটর পৃষ্ঠার ভেতরেই স্থানীয়ভাবে চলে এবং খসড়া আপলোড করে না। এটি যন্ত্র-লিখিত গদ্যের চেনা লক্ষণ, পাঠযোগ্যতা এবং বিষয়বস্তুর ফাঁক রিপোর্ট করে, ফলে কোনো [[generative-ai|জেনারেটিভ এআই]] তৈরি লেখা পাঠকের হাতে পৌঁছানোর আগে পর্যালোচনা করতে এটি কাজে লাগে। প্রকল্পটি স্পষ্ট করে বলে, লক্ষ্য হলো এমন লেখা যা লেখকের নিজের বলেই চেনা যায়, [[ai-detection|এআই শনাক্তকরণ]] পাস করার জন্য কারিগরিভাবে তৈরি গদ্য নয় — এআই-সহায়তায় [[writing-education|লেখালেখি]] নিয়ে নীতি ঠিক করার সময় প্রশিক্ষকরা এই পার্থক্যটি চিনবেন।

## গ্রহণের আগে যা জানা দরকার

রিপোজিটরি একটি মূল্যায়ন-প্রোটোকল, `samples/`-এ আগে-পরে নমুনা এবং স্কিলের পেছনের রেফারেন্স ফাইল প্রকাশ করে, ফলে একজন পর্যালোচক দাবি বিশ্বাস না করে দেখতে পারেন নিয়মগুলো কীভাবে আচরণ করে; এখানকার পাতাটি কোনো মাপা ফলাফল পুনরাবৃত্তি করে না। লেখক Addy Osmani, লাইসেন্স MIT, এবং কাজটি স্বতন্ত্র, কোনো প্রতিষ্ঠানের পণ্য নয়। এটি তরুণ ও সক্রিয়: আগস্ট 2026-এ তৈরি, 54টি কমিট, তিনটি রিলিজ যার সর্বশেষটি সেই সেপ্টেম্বরে সংস্করণ 0.2.1, এবং সেপ্টেম্বর 2026-এ যাচাইয়ের সময় প্রায় 250টি স্টার। তিনজন অবদানকারী পরিবর্তন এনেছেন। স্কিলের নির্দেশনা পাঠক ইতিমধ্যে যে এজেন্ট চালান তার মধ্যে লোড হয়, তাই [[prompt-engineering|প্রম্পট ইঞ্জিনিয়ারিং]]-এর চেনা সতর্কতাগুলো খাটে: সমালোচনার গুণমান নির্ভর করে তার হাতে দেওয়া খসড়ার উপর।

## সংযুক্ত ধারণা
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
