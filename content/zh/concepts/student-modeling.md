---
title: 学习者建模与自适应教学
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习者建模与自适应教学** —— 这是关于 AI 如何表征学习者（他们知道什么、感受什么、需要什么）以及如何利用这些表征来调整 [[teacher-role|教学]]的总括性概念。该家族横跨*建模*层——**学生建模**、[[knowledge-tracing]]、[[cognitive-diagnosis]] 与 [[simulating-students|模拟学生]]——以及消费这些模型的*自适应系统*——[[intelligent-tutoring]]、[[adaptive-learning]] 与 [[personalized-learning]]。共同的问题是：*一个系统如何知道一个学习者知道什么，以及接下来该教什么？*

## 值得思考的问题

- 本页提出的总括性问题是：一个系统如何知道一个学习者知道什么，以及接下来该教什么？在继续阅读之前，你会如何在机器中开始表征"一个学习者知道什么"？
- 学习者建模横跨知识追踪（随时间跟踪知识）、认知诊断（映射已掌握的技能）与模拟学生（合成学习者）。你认为每种方法擅长什么——又可能各自弄错什么？
- 每一个自适应 AI 都依赖某种学习者模型。如果一个模型的好坏只取决于喂给它的证据，那么你认为 AI 系统实际上掌握着关于一个学生的哪些证据，又有哪些关于他们的重要东西仍然不可见？
- 一个模型可能捕捉到学生答对与答错的地方，却捕捉不到为什么，也捕捉不到他们的感受。一个学习者模型可能以哪些方式误导自适应系统，从而伤害而非帮助学生？
- 如果你在设计一个自适应辅导工具，你希望它对*你的*模型包含什么——又希望它被明确禁止假设什么？

## 引言

学习者建模是学习者的计算化表征；自适应教学是系统利用这种表征所做的事。教育中每一个自适应 AI 都依赖某种学习者模型——哪怕只是一个轻量的模型——而每一个学习者模型的存在都是为了给某个教学决策提供信息。本页是这条管线的总括：建模方法、依据模型行动的系统，以及它们之间的关系。

## 建模层

这些概念回答"这个学习者知道什么、感受什么、需要什么？"——即家族的表示侧。

- **学生建模** —— 把学习者特征（知识、技能、[[affective-computing|情感]]状态、[[student-engagement|投入度]]、偏好）以计算形式表示的广义实践。它是这一层内部的总括术语，涵盖表征一个学习者的所有方式。
- **[[knowledge-tracing]]** —— 通过跟踪练习上的表现并预测未来的掌握，来建模认知知识*随时间*变化的具体实践。它把学习的时间动力学形式化——知识何时获得、如何衰减，以及概念如何关联。
- **[[cognitive-diagnosis]]** —— 对学习者已掌握哪些具体技能或知识成分做细粒度 [[assessment]]，产出一份掌握画像，以支持有针对性的补救。
- **[[simulating-students|模拟学生]]** —— 按需*合成*生成学习者，而非表征一个真实的学习者，使 [[pedagogy]] 与 AI 系统能被离线测试或训练。
- **学习者模型的一个因果形式化。** [[causal-modeling-competency-assessment-2026|Mangili et al.（2026）]] 用从专家那里 elicitate 出来的结构因果模型，取代含噪门的贝叶斯网络，使提示成为显式的内生变量，从而让模型能够追问"如果学生没有使用他们所用的那些帮助，会答出什么"——预测性略差，却能表达联想式模型无法表达的反事实。

关于 [[zhang-ml-student-progress-programming-2026|Zhang、Jeffries 与 Koprinska（2025）]] 的研究表明，忠实的表征并不需要最复杂的模型家族：一个轻量、内在地可解释的决策树学生模型——由课程内容交互特征（而非丰富的遥测数据）构建——能在大规模在线 [[cs-education|编程]]课程中预测模块级的进度（准确率 85–91%），并区分出疏离的高风险者、疏离却成功者，以及投入的高表现者这些 [[student-engagement|投入度]]画像，支持大规模 [[learning-analytics]] 的早期预警。

一个预测性学习者模型也可以建立在注册的结构之上，而非轨迹数据：TRACE 把每个学期编码为一组无序的课程集合，并联合预测课程集合与成绩，在 5,326 名学生、十年的数据上把成绩预测误差降到 0.1339 MAE——比只预测成绩的模型低 46.4%（[[trace-course-grade-prediction-2026|Savala（2026）]]）。

学生模型也可以纯粹由行为轨迹构建，并仍能支持适应。[[an-goel-self-directed-modeling-2026|An、Hammock 与 Goel（2025）]] 从 315 名在 VERA 中构建 822 个生态模型的在线学习者的点击流中，推导出三种投入度画像——观察、构建与探索——完全没有使用任何人口统计或情境数据，并表明这些画像能预测模型质量（探索产出最复杂、最多样的模型，而观察则以复制的模型为主）。这类投入度层面的刻画，正是 [[adaptive-learning|自适应教学]]层可以消费以定向反馈的粗粒度学生模型。

情感学生建模是一个更深的维度：一个数学辅导工具从对话文本与面部表情推断情绪，并把聚合状态映射到辅导策略，但多模态融合相对参与者自己的标注只达到 60% 的准确率，使情绪读取成为该管线最弱的一环（[[kar-mathbuddy-affective-math-tutoring-2025|Kar et al.（2025）]]）。

[[cross-subject-validity-delayed-start|Gutterman et al.（2026）]] 发现，在数学练习期间记录的一个延迟开始信号能预测英语的结果：长期延迟者（超过 13 分钟）即便在控制了 [[prior-knowledge|先验知识]]与投入时间后，增益也更低（ELA β = -.11 SD）——因此行为学生模型可以跨学科迁移而无需按课程重新训练，尽管其切分点必须重新推导。

## 自适应教学层

这些概念回答"接下来该教什么？"——即消费模型的应用侧。

- **[[intelligent-tutoring]]** —— 使用学生模型与掌握估计来选题并提供步骤级指导的系统，是学习者建模的经典应用。
- **[[adaptive-learning]]** —— 依据学习者模型调整内容、进度或难度的系统。
- **[[personalized-learning]]** —— 依据个体学习者的特征与偏好，对教学、内容与路径做更广义的定制。

## 各成员如何关联

这些概念构成一条管线，而非彼此竞争：**学生建模**是总括性的表征；[[knowledge-tracing]] 与 [[cognitive-diagnosis]] 是填充它的具体建模方法；[[simulating-students|模拟]] *生成*学习者而非表征真实的学习者；而 [[intelligent-tutoring]]、[[adaptive-learning]] 与 [[personalized-learning]] 是消费这些模型以调整教学的系统。

**学生建模与模拟学生的区别**是需要理清的关键区分。学生建模是关于**表征一个真实的学习者**——从真实学生的数据中*构建*模型，使自适应系统能对这个人采取行动。相比之下，模拟学生按需**生成一个合成的学习者**，以顶替真实的学习者，使教学法与 AI 能被离线评估或训练。两者密切相关而非可以互换：模拟学生通常*嵌入*一个学生模型（一个认识状态、[[misconceptions|误解]]集合，或投入度画像），并依赖 [[knowledge-tracing]] 与 [[cognitive-diagnosis]] 形式化的相同构念。它们的目的分道扬镳——学生建模服务于通过为真实个体的决策提供信息来实现实时适应，而 [[simulation]] 制造学习者来测试系统（并日益用于审计 AI，例如 [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al.（2026）]]），而非对任何真实个体采取行动。

**知识追踪与学生建模**是另一个常见的混淆。知识追踪专门建模认知知识随时间的变化；学生建模是涵盖学习者一切方面（情感状态、投入度、偏好）的更广义实践。知识追踪是*一种*聚焦于认知—时间维度的学生建模。知识追踪的构念也为 [[simulating-students|模拟学生]]提供信息——一个模拟学习者的认知状态，通常用与知识追踪所建模的相同掌握／衰减动力学来形式化，因此模拟是一种*生成*知识状态的方式，而那些状态通常是追踪方法从真实作答数据中*推断*出来的。

**把追踪锚定到 [[curriculum-design|课程]]会强化模型。** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al.（2026）]] 表明，当追踪被绑定到显式的课程结构、而非纯粹从数据中学得时，学习者模型会获得更高的保真度：他们的成果导向知识追踪（OKT）把成果导向教育中的课程成果当作要追踪的知识概念，通过专家验证的 OBE"亲和映射"（课程成果与项目成果之间，作为隐式注意力或图消息传递的显式替代）提供概念关系，并使用一个记忆增强模块来建模一项成果的达成如何影响其他成果。在真实的工程项目数据上，它胜过了 DKT、DKVMN、EKT 与 SimpleKT 基线（89.81% AUC），这说明建模层可以利用课程自身的结构来更忠实地表征学习者。

**智能辅导与自适应／个性化学习**位于应用侧：智能辅导是选题、步骤指导的系统；自适应学习调整内容与进度；个性化学习是对整个学习体验最广义的定制。三者都是建模层的"消费者"。

## 共同的效度挑战

横跨整个家族，决定性的效度挑战是同一个：学习者表征必须**忠实地反映学习者真实的状态**，而非系统的默认假设。对**学生建模**与 [[knowledge-tracing]] 而言，这意味着模型必须真正捕捉到学习者知道什么（[[ai-ed-evaluation|评估]]与 [[assessment-validity|测量效度]]）。对 [[simulating-students|模拟]]而言，这意味着合成的学习者必须展现出真实的不完美，而非模型的全部能力或 [[ai-sycophancy|谄媚式]]的附和。消费了有缺陷模型的自适应系统，会继承并传播那个错误。


从游戏玩法推断学习者状态的模型达到了 0.848–0.913 的 AUC，但 55 项被综述的研究中只有两项审计了它们的人口统计偏差，只有一项考察了按学习者能力的差异结果（[[ai-game-based-learning-systematic-review-2026|Kaşarcı 与 Yurt（2026）]]）。

有些预期的信号可能根本无法从对话中恢复：学习情境框架的试点恢复了 91.4% 的误解与 100% 的焦虑，但尽责性只有 68.6%、语言熟练度只有 60%，因此一个具备情境感知的模型应捕捉那些显现缓慢的特质，而非等待对话把它们暴露出来（[[learning-context-framework-context-aware-ai-education-2026|Liu et al.（2026）]]）。

[[edumirror-educational-social-dynamics|Lin et al.（2026）]] 暴露了这类合成学习者被验证方式中的循环论证：他们的 EduMirror 智能体在事后施用心理测量问卷，并把与智能体内部价值表征的一致性读作心理学效度，但由于 Surveyor 测量的维度已编码在那个价值系统之中，这项检查只是一致性检查，而非独立的验证。

**正确性并不总是忠实的信号。** [[deceptive-overgeneralization-adaptive-learning-2026|An、McLaren 与 Stamper（2026）]] 表明，从正确行动推断掌握的学习者模型可能歪曲学习者真实的状态：表现出*欺骗性过度泛化*的学习者看似已掌握，却遗漏了一个关键的应用约束，因此自适应系统可能过早停止练习。学习者模型应评估条件性理解——包括学习者是否知道何时克制一个行动——而不只是行动的正确性。

隐藏的误解从另一侧显示出同样的失效：[[correct-answer-trap-misconceptions|Imran 与 Bulathwela（2026）]] 发现，一个微调过的分类器捕捉到 57.4% 经由 flawed 推理得出的正确答案，而在 1.6% 的患病率下，即便是一个 83.6% 准确的推理模型，每次检测也会留下 8 个假警报——因此基于正确性的掌握信号既不完整，修复起来又昂贵。

**一个模型如何被验证，本身就是一个效度问题。** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze、Yan 与 Carvalho（2025）]] 表明，流行的学习者模型（BKT、BKT-with-Forgetting、AFM）只有在回溯拟合于完整的多会话数据集时，才看似捕捉到了人类学习；在基于时间（前向滚动）的交叉验证下——从更早的会话预测未来的会话，也就是这类模型实际的部署方式——它们会高估表现、错失 [[retrieval-spacing-interleaving|间隔效应]]，并对练习条件给出错误排序。由于带遗忘与不带遗忘的模型在各会话间表现大致相当，作者得出结论：遗忘往往被吸收进学习者参数之中，而非被真正表征。对该家族的教训是，一个忠实的表征必须按其被使用的方式来验证——把即时表现与长期保持混为一谈，会产出看起来准确却歪曲学习者的模型。

## LLM 时代的建模

近期的进展用 [[llm|LLM]] 做更丰富的建模。[[xie-hillm-cd-2026|HiLLM-CD 框架]]把学生表示为熟练度树；[[multimodal-knowledge-graph-educational-reasoning|多模态方法]]从多样数据源构建证据 grounded 的知识表征；[[inside-llm-student-simulator-reasoning-2026|LLM 如今能模拟带推理的学生]]。LLM 使模型构建得以从教育文本自动完成，并提高了 [[simulating-students|学生模拟]]的保真度，减少对专家标注的依赖——同时使上述保真度顾虑更为尖锐。学习者模型的信号也会为 LLM 推理*提供依据*：[[reddig-maclellan-personalized-feedback-llm-2026|Reddig、Arora 与 MacLellan（2025）]] 发现，把学生的贝叶斯 [[knowledge-tracing]] 技能估计连同辅导工具的界面结构一起喂给 GPT-4，显著改善了它的错误诊断（因式分解上逻辑错误识别从 40% 升到 81%；整体约 87.8%），而多步问题与包含多个错误的回答仍是最弱的情形——这表明把一个正式的学习者模型耦合到 LLM 上，能强化（但无法保证）对真实学生的可靠推断。[[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（He et al.，2026）]] 展示了这种耦合的持久版本长什么样：掌握与被挖掘的误解按（学习者，学科）存储，而非作为每会话的日志，使证据能跨会话累积；该记忆由一个 LLM 评分的观察函数写入，同时通过掌握度条与一个标明每道生成题目被选来探测什么的标签，对学习者保持可检视。它的对照使写入这一步变得显式——在读取记忆但不再更新时，指向真正薄弱技能的条目占比从 0.72 降到 0.57——并且它使本页的限定保持完好：被存储的掌握度是智能体对学习者的信念，而非对其知识的测量。

语言可以取代 ID 嵌入作为表征：PLCD 把 LLM 导出的概念图式与练习过程图作为先验，在 XES3G5M 上达到 83.51% 的准确率，其中最大的增益出现在冷启动——新概念上比 KCD 高 4.60 个 ACC 点、新练习上高 4.00 点——在这些地方基于 ID 的模型没有历史（[[process-grounded-language-cognitive-diagnosis-2026|Liu et al.（2026）]]）。


模拟器质量分裂为两个轴：一个"先池化后特化"的管线在按学生适配器之前先训练共享的行为模式，在棋类上达到行为保真度 0.51 与引导响应性 0.91，而前沿角色扮演基线为 0.23 与 0.72，这表明一个模拟器既要匹配一个学生，又要可被操控（[[studentsim-llm-student-simulators|Yang et al.（2026）]]）。

风险分数可能准确却缺乏支撑：[[at-risk-students-ml-prediction|Gheisari 与 Salarian（2026）]] 用注册与表现记录预测退学达到 99% 的准确率，但仅基于单一机构的 1,027 条清洗记录，没有外部验证，没有测试任何干预，公平性审计也被列为未来工作——该分数支持分诊，而非对一个学生的裁决。


一个只预测风险的学习者模型不足以支撑决策：把一个校准过的风险模型与在离散行动上的整数规划追索权耦合——并按时机、预算、不可变性与可得性约束加以验证——产出了紧凑的干预计划，而仅靠优化会接受不可执行的方案（[[sc2r-counterfactual-recourse-educational-2026|Le、Abel 与 Laforge（2026）]]）。

一个黑箱估计器也可以被蒸馏成一个小型自解释模型：一条两阶段管线把一个拟合好的估计器及其事后解释变成一个 20 亿参数的"mentee"，它在给出估计的同时返回一段叙述，且这段叙述是被按其忠实性（而非流畅性）审计的（[[distilling-self-explaining-lm-learning-analytics-2026]]）。

## 与其他概念的联系

学习者建模与自适应教学汇入 [[learning-analytics]]（[[visualization|仪表盘]]与干预）、[[formative-assessment]]（由分析驱动的评估）与 [[feedback]]（系统告知学习者的内容）。它作为 AI 教育的一个核心支流与 [[ai-education]] 相连。

## 关联概念
- [[learners]] — 学习者：学习者侧概念的总括
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — 风险预测与支持定向之下的模型

## 关联文章
- [[deceptive-overgeneralization-adaptive-learning-2026]] — 欺骗性过度泛化：自适应掌握可能在学习者知道何时克制一个行动之前就停止练习（An、McLaren 与 Stamper 2026）
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know（斯坦福 SCALE／NSSA 简报）
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — LLM 辅导工具过度拒绝有效替代方案、过度认可不正确方案（Yasir et al. 2026）
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[studentsim-llm-student-simulators]] — StudentSim: Training LLM-based Student Simulators
- [[predicting-attrition-competitive-programming]] — Predicting Student Attrition in Competitive Programming
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 基于亲和映射的结果导向知识追踪
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — 把紧凑的学习者状态与校准过的追踪器作为推荐环境
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[ai-game-based-learning-systematic-review-2026]] — 隐性评估达到 0.848–0.913 的 AUC，但 55 项研究中偏差审计近乎缺失
