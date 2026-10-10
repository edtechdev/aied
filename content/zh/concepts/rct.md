---
title: 随机对照试验
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **随机对照试验（Randomized controlled trial, RCT）** — 一种研究设计：参与者被随机分配到处理或对照条件，以估计一个干预对某个结果的因果效应。在 [[ai-education|教育中的 AI]]，RCT 是确立一个 AI 工具或 [[pedagogy|教学]] 路径是否*造成* [[learning-gains|学习增益]]、投入变化或其他结果的金标准，而不仅仅是与之相关。

## 值得思考的问题

- 如果一所学校告诉你「使用了 AI 工具的学生分数更高」，为什么这仍可能无法证明工具造成了增益——即便差异很大？
- 随机化同时平衡了*已知与未知* 的混杂因素。在读之前，随机分配究竟完成了什么，是简单比较两个完整班级无论看起来多么匹配都无法做到的？
- 本页称 RCT 为金标准，却列出了真实的代价：人工的设置、会让试验过时的快速变化的 AI、功效不足的小样本，以及对 withhold 有用工具的 [[ethics|伦理]] 约束。你认为这些权衡中哪一个最常在教育研究的头条中被忽视？
- 一项有 1,174 名参与者的 RCT 发现 [[generative-ai|GenAI]] 弥合了约四分之三的教育基础生产力差距。但一个执行良好的 RCT 仍可能在一个人为的场景中针对一个狭窄任务进行。在信任其因果主张之前，你应当对*结果测量* 检查什么？
- 直接考虑伦理问题：如果你有真凭实据相信一个 [[intelligent-tutoring|AI 辅导者]] 帮助学生学习，随机地让半个班整个学期得不到它是否站得住脚？你会如何设计一个既能隔离因果又合乎伦理的研究？

## 引言

随机化是把 RCT 与其他设计区分开的东西：通过把学习者随机分配到条件，RCT 在组间平衡已知与未知的混杂因素，因此任何观察到的结果差异都可以归因于该干预，具有很高的内部效度。

### RCT 如何出现在研究中

- **微型 RCT 作为对快速变化技术的回应：** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison 等人（2026）]] 主张，传统的大规模试验无法跟上在研究期间发生实质变化的辅导 [[edtech-platform|平台]]，于是采用 [[teacher-role|教师]] 主导的微观随机对照试验，跨英格兰的中学展开（929 名学生中有 644 人完成后测，g = 0.33），使因果估计保持可重复。代价写在他们的设计里：30.7% 的流失率、与 [[curriculum-design|课程]] 对齐而非独立标准化的结果，以及仅四周的随访。
- **因果效能主张：** AIED 中的 RCT 检验一个 AI 辅导者、工具或教学处理是否改善结果。[[generative-ai-education-productivity-gaps|一项关于生成式 AI 的随机实验]] 以 1,174 名参与者发现，GenAI 大幅收窄教育基础的生产力差距，弥合了约四分之三的初始表现差异——这是对 AI 效应的一个清晰因果估计。
- **与金标准的比较：** [[research-methods-aied|研究方法]] 页面把 RCT 定位为内部效度最强的设计，同时指出其权衡——成本、人工条件、快速变化的 AI、功效不足的小样本，以及不向对照组提供潜在有用工具的伦理限制。
- **一项为等价而非差异设计的试验。** [[studentbench-ai-human-tutoring-gre-2026|Northcutt 等人（2026）]] 把 2,383 名成人随机分配到 AI 辅导、真人辅导或视频对照，请前 ETS 与 Kaplan 的试题开发人员编写新的 GRE 题目以避免已出版试题的污染，把两种题型做了顺序平衡，并针对 ±0.25 SD 用两次单侧检验（two one-sided tests）来检验等价而非差异——正是这些设计选择，使「无显著差异」成为一个可解释的结果。
- **群体随机化、低采纳率，以及此时意图处理估计意味着什么。** [[liu-course-integrated-ai-tutoring-rct-2026|Liu 等人（2026）]] 跨 13 个区块把 2,379 名本科生随机化，分配的是*教师* 而非学生，因此一个班里的每个学生都继承了该教师的条件——这一设计使多班部署试验成为可行，也正是它制造了研究随后记录下来的推断问题。处理组的处理班里只有约 15% 的学生真正用过该工具，因此报告的效应估计的是*提供* 使用机会而非使用本身；作者把干预读作它的引入所诱发的更广义 AI 使用，并把个别使用时段当作一个单独的问题。由于处理是在教师层面分配的，推断只依赖 34 个簇——在这种情形下聚类稳健标准误会高估精度——因此论文在它们之外报告了随机化推断，并发现其结论是稳健的。两项头条效应——精确匹配样本中期末成绩下降 0.37 SD、两个样本中记录的平台参与下降 0.90 SD——是班级层面的后果，是对同一工具做按学生随机化所无法隔离的，否则会在处理与对照同学之间造成污染。
- **采纳率限定了试验能测什么，而投入支持不是剂量。** [[access-not-enough-ai-tutoring-2026|Robinson 等人（2026）]] 开展了两项阅读平台 RCT，其中只有 60.7% 与 53.3% 的对照学生真正使用过该平台；一个投入辅导者把阅读的故事数提高了 71–80%，却没有产生学业增益，与每周实际达到 2–5 分钟相符。
- **把零结果转化为证据的规模。** [[mata-sustaining-ai-enabled-student-support-2026|Mata 等人（2026）]] 跨八个学期追踪 8,708 名学生，有检出 0.05 SD 效应的功效，并发现在日期明确的二元任务上有大幅、即时的变动——仅一次提醒后，8 月 16 日前注册的人数多出 34 个百分点——而学业表现、坚持率与毕业率未见可检出的效应。规模本身就是设计教训：在这个 N 下，学业上的零结果是精确的结果而非检出的失败，这正授权了「一个沟通工具移动它能触及的东西、而非累积的学习结果」这一结论。
- **零均值可以掩盖相互抵消的异质性。** 一项预注册的 RCT 在学校-系级把 538 名教师跨 24 所土耳其学校随机化，发现低于中位数的教师成绩下降 0.129 SD，高于中位数的上升 0.054，动机下降 0.111 SD，而一份存在天花板压缩的考试（对照组均值 89.2/100）限制了功效。（[[genai-can-harm-teaching-rct-2026|Sungu, Lira 与 Duckworth（2026）]]）
- **预注册固定问题与可检出的效应。** [[chatbot-outreach-course-performance-2026|Meyer 等人（2026）]] 在 Registry of Efficacy and Effectiveness Studies 注册了两项课程试验，事先承诺使用意图处理估计与约 0.157 的最小可检出效应量，并每学期随机化同意参与的学生，在加退课期做第二波，使晚选课者进入设计而非默认的分析样本。把两门课程的 2,483 名学生汇总，效应恰在 A/B 阈值上（四个百分点），而汇总的数字成绩变化未通过多重比较校正——这提醒我们，一个已注册的主要结果能约束我们在若干相关结果中相信哪一个。
- **在完整班级内随机化，并设处理前基线。** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni 与 Fryer（2026）]] 在加退课之后、三个完整市场营销班内随机化 454 名本科生，并在 T1、即任何学生获得聊天机器人访问之前，测量全部四项结果，使整学期的比较建立在实测的基线而非假定的基线之上。平坦的结果（没有组 × 时间的交互达到显著；所报告的最大效应为 d = 0.050，在兴趣上）与采纳率一并报告——相对每周一次的规定使用，实际为每周 0.89 次登录——这防止一个关于弱使用处理的零结果被读成关于该工具的零结果。
- **被试内交叉，以及一个以最佳实践为对照。** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin 等人（2025）]] 让 194 名哈佛生命科学学生各做两节物理课——一次在课堂 [[active-learning|主动学习]] 环节中，一次使用课程自带的 AI 辅导者，以平衡的顺序并在每次前后设前后测——使每个学生都充当自己的对照，*交付模式* 的比较不会被谁被分配到哪个条件所混淆。设计的第二个选择同样重要：对照者是研究基础之上的主动学习而非讲座，因此这一优势（后测中位数 4.5 对 3.5）是相对当前最佳实践测得的，不能被读成「AI 胜过教学」。

### 优势与局限

- **优势：** 最强的因果推断；干净的结果测量；支持效应量估计；通过随机化平衡混杂因素。
- **局限：** 昂贵且缓慢；人工的设置会削弱生态效度；AI 工具变化快于试验能跑的速度；小样本常功效不足，无法检出有意义的效应；不向对照组提供潜在有益的 AI 存在伦理约束。其中两项局限在分配为聚类时会改变形状：有效样本变成*簇* 的数量而非学生的数量，因此一个试验可以按人头很大而按此度量很薄——Liu 等人的 2,379 名学生只靠 34 个教师层面的簇——而当采纳是自愿且低的时，意图处理估计回答的是提供工具是否改变了结果，而不是使用它是否改变了结果。

关于教育中 AI 的实验设计的更完整处理——包括 RCT 何时相对准实验、调查或计算设计是恰当的——见 [[research-methods-aied]]。

## 关联概念

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — 最强学生支持证据背后的设计

## 关联文章

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)
