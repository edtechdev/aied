---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocock-এর ওপেন-সোর্স সংগ্রহ, ছোট ও সংযোজনযোগ্য এজেন্ট স্কিল: একটি বহু-সেশন শিক্ষাদান-স্কিল, একটি নিরন্তর প্রশ্ন করার স্কিল, এবং এজেন্ট অনুসরণ করতে পারে এমন নথি লেখার নির্দেশনা।"
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
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**Skills for Real Engineers** Matt Pocock-এর প্রকাশিত এজেন্ট-স্কিল ডিরেক্টরি: ছোট, সংযোজনযোগ্য নির্দেশনা-ফাইল যা Claude Code, Codex বা অন্য এজেন্টে ইনস্টল হয়, এবং সম্পূর্ণরূপে গ্রহণের বদলে অভিযোজনের জন্য লেখা। সংগ্রহের বেশিরভাগ সফটওয়্যার-কাজে লাগে, কিন্তু কয়েকটি স্কিল শিক্ষামূলক যন্ত্র, যা কোডের বদলে শিক্ষাদান ও প্রশ্ন করার জন্য বানানো।

সবচেয়ে স্পষ্ট উদাহরণ `teach`, যা একাধিক সেশনে চলে এবং কার্যকারী ডিরেক্টরিকে একটি অবস্থাসম্পন্ন শিক্ষাদান-কর্মক্ষেত্র হিসেবে ধরে, ফলে শিক্ষার্থীর অগ্রগতি ও খোলা প্রশ্ন কথোপকথনের মধ্যেও টিকে থাকে, প্রতিবার নতুন করে শুরু হয় না। `grill-me` এবং তার ভিত্তি `grilling` প্রিমিটিভ ব্যবহারকারীকে একটি পরিকল্পনা নিয়ে নিরন্তর প্রশ্ন করে যতক্ষণ প্রতিটি শাখা মীমাংসা না হয় — যা [[socratic-method|সক্রেটিক প্রশ্ন]] হিসেবে পুনর্ব্যবহারযোগ্য একটি পদ্ধতি, কেবল কথোপকথনের মেজাজ নয়। `wait-what` একটি বার্তা যখন পৌঁছাতে ব্যর্থ হয় তখনই সাড়া দেয়, অনুপস্থিত প্রসঙ্গসহ তা সাধারণ ভাষায় নতুন করে উপস্থাপন করে — এই চালটি যে-কোনো প্রশিক্ষক চেনেন, ব্যাখ্যা প্রথমবার লক্ষ্যভ্রষ্ট হতে দেখে। `writing-for-agents` বলে কীভাবে এমন নথি লিখতে হয় যা একটি [[prompt-engineering|এজেন্ট]] অনুসরণ করতে পারে, যা এখন [[pedagogical-agent|এআই]] কোর্স-উপকরণের জন্য নির্দেশনা লেখার ব্যবহারিক রূপ। `to-questionnaire` একটি সিদ্ধান্তকে সেই ব্যক্তির জন্য প্রশ্নাবলিতে বদলায় যে উত্তর দিতে পারে, `handoff` একটি কথোপকথনকে এমন নথিতে সংহত করে যা থেকে অন্য এজেন্ট এগোতে পারে, আর `wizard` কেবল একজন মানুষ যে ধাপ সম্পাদন করতে পারে তার জন্য একটি ইন্টারঅ্যাকটিভ ওয়াকথ্রু তৈরি করে।

## গ্রহণের আগে যা জানা দরকার

সবকিছু MIT-এর অধীনে [[open-source|ওপেন সোর্স]] এবং স্থানীয় [[ai-literacy|এআই সাক্ষরতা]] বা [[self-directed-learning|স্ব-পরিচালিত পড়াশোনার]] সূচনাবিন্দু হিসেবে নিতে বিনামূল্যে। গ্রহণযোগ্যতা বড় ও দ্রুতগামী: সেপ্টেম্বর 2026-এ যাচাইয়ের সময় প্রায় 270,000 স্টার ও 23,000 ফর্ক, সর্বশেষ কমিট 2026 সালের 18 সেপ্টেম্বর। সতর্কতাটি পরিধি নিয়ে। স্কিলগুলো একজন [[human-ai-collaboration|ইঞ্জিনিয়ারের]] কাজের প্রেক্ষাপট ধরে নেয়, সেগুলো ইঞ্জিনিয়ারিং, উৎপাদনশীলতা, বাতিল ও চলমান — এই বাকেটে সাজানো, তাই কিছু এন্ট্রি স্পষ্টতই অসম্পূর্ণ বা অবসরপ্রাপ্ত, আর README একইসঙ্গে একটি নিউজলেটার সাইন-আপ। শিক্ষাদান ও প্রশ্ন করার স্কিলগুলোকে হস্তান্তরযোগ্য অংশ হিসেবে ধরুন, এবং শিক্ষার্থীদের সামনে একটি রাখার আগে যে-কোনোটিই পুনর্লিখনের প্রত্যাশা রাখুন।

## সংযুক্ত ধারণা
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
