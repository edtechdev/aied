---
title: "বুদ্ধিদীপ্ত পাঠ্যপুস্তক নির্মাণ"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCreary-র ওপেন-সোর্স গাইড, খোঁজ, নেভিগেশন, শব্দকোষ, কুইজ, ধারণা-গ্রাফ ও এমবেড করা সিমুলেশনসহ অনলাইন পাঠ্যপুস্তক বানানোর জন্য, MkDocs Material ও জেনারেটিভ এআই দিয়ে, সঙ্গে এআই-নির্মিত ইন্টারঅ্যাকটিভ MicroSims-এর একটি লাইব্রেরি।"
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking, misconceptions]
pedagogy: [active-learning, constructivist, self-directed-learning]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*ইংরেজি পাতার এই স্বয়ংক্রিয় অনুবাদ, এখনও মাতৃভাষিক বক্তার দ্বারা পর্যালোচনা করা হয়নি।*

**Intelligent Textbooks** সাইটটি Dan McCreary-র ধাপে ধাপে গাইড, *বুদ্ধিদীপ্ত পাঠ্যপুস্তক* বানানোর জন্য — এমন অনলাইন পাঠ্যপুস্তক যা স্থির PDF ছাড়িয়ে যায়, যোগ করে খোঁজ, সাইট-নেভিগেশন, পরিভাষার শব্দকোষ, বিষয়সূচি, কুইজ-ব্যবস্থাপনা, রেন্ডার করা ফর্মুলা, সোশ্যাল-মিডিয়া প্রিভিউ, লিংক যাচাই, এবং সহজে দেখার মতো একটি **ধারণা-গ্রাফ** যা একটি কোর্সের সব ধারণা ও তাদের নির্ভরতা দেখায়। গাইডটি যুক্তি দেয় যে আজকের অনেক কোর্স এই বৈশিষ্ট্যগুলোসহ উচ্চমানের অনলাইন পাঠ্যপুস্তক থেকে লাভবান হতে পারে, এবং দেখায় কীভাবে [MkDocs](http://mkdocs.com/) বিল্ড সিস্টেমকে Material থিম ও জেনারেটিভ এআই-এর সঙ্গে জুড়ে বিষয়বস্তু তৈরি ও রক্ষণাবেক্ষণ করে সেগুলো বানাতে হয়।

নির্ধারক পদক্ষেপটি হলো, পাঠ্যপুস্তকটি *Markdown-এ রচিত এবং এআই দ্বারা উৎপন্ন*, যা [[vibe-coding|এআই-সহায়তায় লেখালেখি]]-র নমুনা [[curriculum-design|কোর্স-বিষয়বস্তুতে]] প্রয়োগের একটি বাস্তব উদাহরণ: একটি বড় সাইট হাতে-হাতে রক্ষণাবেক্ষণের বদলে আপনি কোর্সটি বর্ণনা করেন এবং জেনারেটিভ এআই পৃষ্ঠাগুলো তৈরি ও রক্ষণাবেক্ষণ করে, আর টুলচেইন সামলায় নেভিগেশন, খোঁজ ও ধারণা-গ্রাফ। একটি সঙ্গী [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) লাইব্রেরি দাবি করে যে এটি একটি কোর্স-বিবরণ থেকে লেভেল-২ পাঠ্যপুস্তক বানাতে প্রয়োজনীয় 90%-এরও বেশি কাজ স্বয়ংক্রিয় করে।

## একটি সহায়ক সম্পদ: MicroSims

এই গাইডের স্বাভাবিক সঙ্গী হলো McCreary-র **MicroSims** লাইব্রেরি <https://dmccreary.github.io/microsims/>-এ (সোর্স: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), যা সেই ইন্টারঅ্যাকটিভ সিমুলেশনগুলো দেয় যা একটি বুদ্ধিদীপ্ত পাঠ্যপুস্তক এমবেড করে। একটি *MicroSim* (মাইক্রো-সিমুলেশন) হলো এআই দিয়ে তৈরি একটি সরল ইন্টারঅ্যাকটিভ সিমুলেশন, যা শিক্ষকদের একটি ধারণা ব্যাখ্যা করতে সাহায্য করে, এবং এটি একটি বুদ্ধিদীপ্ত পাঠ্যপুস্তকে বা `iframe` গ্রহণ করে এমন যেকোনো সাইটে এমবেড করা যায়। MicroSims তিন কারণে স্বতন্ত্র: **এআই-সহায়তায় উৎপাদন** (প্রমিত নকশা-নমুনা একটি সিমুলেশনের স্বাভাবিক-ভাষার বিবরণকে শেয়ারযোগ্য উপকরণে বদলে দেয়), **সর্বজনীন এমবেডিং** (একটি HTML `iframe` এলিমেন্ট যেকোনো পাতায় একটি বসিয়ে দেয়), এবং **স্বচ্ছ, পরিবর্তনযোগ্য কোড** (কোনো কালো বাক্স নেই — এক ক্লিকে সিমটি একটি ওয়েব এডিটরে খোলে, আর একটি Creative Commons লাইসেন্স বেশিরভাগ শিক্ষককে লাইসেন্স-ফি ছাড়াই ব্যবহার করতে দেয়)। শব্দটি 2023 সালে তৈরি করেন Valerie Lockhart, যখন তিনি দেখেন শিক্ষক ও শিক্ষার্থীরা সামান্য বা কোনো প্রশিক্ষণ ছাড়াই p5.js জাভাস্ক্রিপ্ট লাইব্রেরি দিয়ে সিমুলেশন বানাতে পারেন।

প্রকল্পটি MicroSim মেটাডেটার জন্য একটি JSON Schema-ও প্রকাশ করে, যাতে এআই সরঞ্জাম খোঁজযোগ্য বর্ণনা তৈরি করতে পারে, আর রোডম্যাপে আছে একটি ফ্যাসেটেড MicroSim রেজিস্ট্রি। কাঠামোটি বর্ণনা করা একটি গবেষণা-নিবন্ধ — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — arXiv-এ আছে ([2511.19864](https://arxiv.org/abs/2511.19864))। নমুনা সিমুলেশনের মধ্যে আছে Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula এবং একটি শেয়ারবাজার-প্রতিদান চার্ট, প্রতিটি সাইটে লাইভ চলে।

## এটি কাদের জন্য

প্রশিক্ষক ও ইনস্ট্রাকশনাল ডিজাইনার, যাঁরা একটি কোর্স-পাঠ্যপুস্তক বানাতে বা রক্ষণাবেক্ষণ করতে চান, বিশেষত উচ্চশিক্ষা ও পেশাগত প্রশিক্ষণে, সঙ্গে অনুষদ-উন্নয়নকর্মী এবং যাঁরা শিক্ষামূলক বিষয়বস্তু লিখতে জেনারেটিভ এআই ব্যবহার করেন। এটি তাদের উপযোগী যাঁরা Markdown-ও-Git কর্মপ্রবাহে স্বচ্ছন্দ (বা শিখতে রাজি) এবং চান এআই সাইটের নিম্নস্তরের কারিগরি কাজ — খোঁজ, নেভিগেশন, ধারণা-গ্রাফ — সামলাক, যাতে তাঁরা শিক্ষাবিজ্ঞানে মন দিতে পারেন।

## টীকা ও সতর্কতা

এটি একজন চর্চাকারীর গাইড ও টুলচেইন, সহপাঠী-পর্যালোচিত গবেষণা নয় — এটি একটি কর্মপ্রবাহ ও নিজের শিক্ষাগত যুক্তি ("বুদ্ধিদীপ্ত পাঠ্যপুস্তক জ্ঞানের অন্বেষণে শিক্ষার্থীদের ধারণার ভেতর দিয়ে পথ দেখায়") উপস্থাপন করে, শেখার ফলাফলের প্রমাণ নয়। MicroSim গবেষণা-নিবন্ধটিই অভিজ্ঞতাভিত্তিক সমর্থনের সবচেয়ে কাছের জিনিস, এবং তা arXiv-এ স্ব-প্রকাশিত। দুটি প্রকল্পই ওপেন সোর্স (intelligent-textbooks রিপো মিট লাইসেন্স ও 38 স্টার রিপোর্ট করে; MicroSims একটি Creative Commons লাইসেন্স ও 13 স্টার) এবং সক্রিয়ভাবে রক্ষণাবেক্ষিত। ধারণা-গ্রাফ ও শব্দকোষ-প্রথম কাঠামো আবিষ্কারযোগ্যতার জন্য সত্যিই উপযোগী, কিন্তু গাইডটি বেশ কারিগরি একটি অথরিং কর্মপ্রবাহ ধরে নেয় — MkDocs, Git ও জেনারেটিভ-এআই টুলিং — যা কিছু অনুষদের জন্য বাধা হতে পারে। অন্তর্ভুক্তির সময়ে MicroSims-এর রেজিস্ট্রি এখনও কেবল রোডম্যাপে, তাই একটি নির্দিষ্ট বিদ্যমান সিমুলেশন খুঁজতে সাইটের নিজের খোঁজ ও নেভিগেশনের উপর নির্ভর করতে হয়।

## সংযুক্ত ধারণা

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
