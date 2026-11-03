---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "ব্লক-ভিত্তিক ই-লার্নিং পাঠের একটি খোলা, প্লেইন-টেক্সট ফরম্যাট, সঙ্গে একটি এজেন্ট স্কিল যা সেই ফরম্যাটে পাঠ, মূল্যায়ন ও পুরো কোর্স-বান্ডল লেখে।"
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
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

**LESSON.md** ব্লক-ভিত্তিক ই-লার্নিং বিষয়বস্তুর একটি খোলা ফরম্যাট: YAML ফ্রন্টম্যাটার ও লেখা, ছবি এবং জ্ঞান-যাচাইয়ের জন্য `:::` নির্দেশসহ একটি Markdown ফাইল, যা মানুষ পড়তে পারেন এবং যে-কোনো সরঞ্জাম পার্স করতে পারে। এটি আছে কারণ কোর্স-বিষয়বস্তু সাধারণত একটিমাত্র অথরিং সরঞ্জামের ভেতরে আটকে থাকে, এবং কারণ [[llm|বড় ভাষা-মডেলগুলো]] কেবল সেই পাঠে সাহায্য করতে পারে যা তারা সত্যিই পড়তে পারে।

## এটি দিয়ে যা করতে পারেন
যে-কোনো টেক্সট এডিটরে একটি পাঠ লিখুন এবং কপি-পেস্ট ও পুনরায় ফরম্যাটিং ছাড়াই ফরম্যাটটি সমর্থন করে এমন যে-কোনো সরঞ্জামে আমদানি করুন। ইন্টারঅ্যাকটিভ অংশগুলো — চেষ্টার সীমা ও উত্তর-স্তরের ফিডব্যাকসহ বহুনির্বাচনী জ্ঞান-যাচাই — GUI-র বদলে সরল প্রপার্টি হিসেবে প্রকাশ করা। একটি বান্ডল-মূলে একটি সঙ্গী `ASSESSMENT.md` কোর্সের স্কোরযুক্ত [[assessment|মূল্যায়ন]] হয়ে ওঠে। প্রকল্পটি একটি `lesson-md` স্কিলও দেয় যা Claude, Codex বা অন্য [[agentic-ai|এজেন্টকে]] ফরম্যাটটি শেখায়, ফলে সাধারণ ভাষায় একটি কোর্স বর্ণনা করলে পাঠ, মূল্যায়ন ও একটি পূর্ণ বান্ডল ফিরে আসে।

## এটি কাদের জন্য
ইনস্ট্রাকশনাল ডিজাইনার ও কোর্স-নির্মাতা, যাঁরা চান তাঁদের বিষয়বস্তু একটি সরঞ্জাম-পরিবর্তনেও টিকে থাকুক; ই-লার্নিং বিক্রেতা, যাঁরা এমন একটি আমদানি-রপ্তানি ফরম্যাট চান যা তাঁদের ব্যবহারকারীরা ইতিমধ্যে বোঝেন; এবং যাঁরা একটি পাঠযোগ্য ফরম্যাটের উপরে এআই-সহায়তায় লেখালেখি বানাচ্ছেন। অবদানকারীদের মধ্যে আছেন LXD Integral-এর Dan Bashaw, আর ফরম্যাটটির v1.8 পর্যন্ত একটি প্রকাশ্য চেঞ্জলগ আছে।

## সংযুক্ত ধারণা

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
