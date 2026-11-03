---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "DeepTutor এজেন্টিক টিউটরিং কাঠামোর ওপেন-সোর্স রিলিজ: টিউটরিং, প্রশ্ন তৈরি, মাস্টারি অনুশীলন, গবেষণা ও ভিজুয়ালাইজেশন এক কর্মক্ষেত্রে, সঙ্গে পরিদর্শনযোগ্য শিক্ষার্থী-স্মৃতি।"
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
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**DeepTutor** হলো [[intelligent-tutoring|DeepTutor গবেষণায়]] মূল্যায়িত টিউটরিং কাঠামোর ওপেন-সোর্স বাস্তবায়ন, এবং এটি সেই নিবন্ধের পরিধি ছাড়িয়ে অনেক দূর এগিয়ে একটি সাধারণ এজেন্ট-নিবিড় শেখার কর্মক্ষেত্রে পরিণত হয়েছে। টিউটরিং, সমস্যা সমাধান, কুইজ তৈরি, মাস্টারি অনুশীলন, গবেষণা ও ভিজুয়ালাইজেশন একটি ক্ষমতা-রানটাইম ও একটি সেশন-প্রসঙ্গ ভাগ করে নেয়, তাই সমস্যা সমাধানের সময় গড়ে ওঠা শিক্ষার্থী-প্রোফাইল পরবর্তী ব্যাখ্যা ও অনুশীলন-প্রশ্নগুলোকে শর্তযুক্ত করে।

## এটি দিয়ে যা করতে পারেন

দশটি মোড — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading ও Immersive Watching — একই রানটাইমে চলে, পুনর্ব্যবহারযোগ্য নলেজ-বেস, বই, খসড়া, নোটবুক, প্রশ্নব্যাংক ও পারসোনার উপর নির্ভর করে। রিট্রিভ্যাল ইচ্ছাকৃতভাবে মাল্টি-ইঞ্জিন: LlamaIndex, PageIndex, GraphRAG, LightRAG বা একটি রিমোট LightRAG সার্ভারের উপর সংস্করণযুক্ত RAG লাইব্রেরি, সঙ্গে স্ব-হোস্টেড WeKnora বেস, একটি Tencent IMA বা MarginNote লাইব্রেরি, কিংবা সংযুক্ত একটি Obsidian ভল্ট। স্মৃতি অস্বচ্ছ নয়, পরিদর্শনযোগ্য: L1 ট্রেস, L2 পৃষ্ঠতল-সারাংশ ও L3 সংশ্লেষ দৃশ্যমান ও সম্পাদনযোগ্য, এবং একটি Memory Graph প্রতিটি সারাংশকে তার পেছনের প্রমাণের সঙ্গে যুক্ত করে। একটি `deeptutor` বাইনারি টার্মিনাল REPL দেয় এবং যে-কোনো এজেন্টের জন্য NDJSON স্ট্রিম করে, যে এটিকে সরঞ্জাম হিসেবে চালাতে চায়, আর একটি EduHub কমিউনিটি ইনস্টলযোগ্য স্কিল বিতরণ করে।

## এটি কাদের জন্য

উচ্চশিক্ষার প্রশিক্ষক ও গবেষক, যাঁরা নিবন্ধে বর্ণিত কাঠামোর একটি স্থাপনযোগ্য সংস্করণ চান; প্লাগেবল রানটাইমের উপর নির্মাণকারী ডেভেলপার; এবং স্ব-পরিচালিত শিক্ষার্থী, যাঁরা নিজের ইনস্ট্যান্স চালাতে রাজি। ডকুমেন্টেশন আছে deeptutor.info-তে।

## টীকা

Apache 2.0 লাইসেন্সপ্রাপ্ত, সেপ্টেম্বর 2026 অনুযায়ী সংস্করণ 1.6.9, GitHub-এ প্রায় 40,000 স্টার। এর পেছনের প্রকাশিত মূল্যায়ন — শক্তিশালী বেসলাইনের তুলনায় ব্যক্তিগতকৃত মেট্রিকে গড়ে 10.8% উন্নতি এবং পাঁচটি ব্যাকবোন মডেলজুড়ে সাধারণ এজেন্টিক যুক্তিতে 29.4% বেশি শক্তি, TutorBench বেঞ্চমার্কে — সারাংশ আছে [[zhao-deeptutor-agentic-personalized-tutoring-2026|নিবন্ধের পাতায়]], যার সীমাবদ্ধতাগুলো এখানেও খাটে। যে-কোনো ওপেন-সোর্স এআই স্ট্যাকের মতো, মডেল-প্রোভাইডারের কী আপনাকেই সরবরাহ করতে হবে, আর ডেস্কটপ বা সার্ভার স্থাপনার জন্য Python 3.11 ও Node দরকার।

## সংযুক্ত ধারণা
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
