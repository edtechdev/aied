---
title: 数学教育
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **数学教育** —— 研究学生如何学习数学、以及人工智能如何支持数学教学的领域，涵盖情感性辅导、从手写工作做认知诊断、[[desirable-difficulties|生产性挣扎]] 评估、求助行为、教师与人工智能在视觉生成上的协作，以及 [[student-ai-interaction|学生与人工智能互动]] 轨迹。数学教育是本知识库中最活跃的 [[discipline-specific-aied|领域特定]] [[research-methods-aied|研究]] 领域，有 32 篇文章共同探讨人工智能如何支持 —— 又有时如何破坏 —— 从小学分数到高等教育的数学学习。

## 值得思考的问题

- 数学题有清晰的正确答案，却要求丰富的推理，这正是数学成为人工智能辅导首选试验场的原因。当你被一道数学题卡住时，什么帮助真正帮助你学习 —— 一个答案、一个提示，还是一个提问 —— 而人工智能最可能默认给出哪一种？
- 研究发现，人工智能导师往往默认过度有帮助，很少在即使学生已准备好时仍推动严谨性。如果你在设计一位导师，你如何决定何时扣住帮助，以保全建立理解的“生产性挣扎”？
- 本页显示，过早请求提示或浮光掠影地浏览提示的学生往往学得更少。你是否曾因不耐烦而非真努力而伸手去要提示？这揭示了人工智能支持如何可能破坏而非支持学习？
- 人工智能认知诊断系统有时会幻觉证据并过度归因错误，且即使强模型在阅读学生实际手写工作上也表现不佳。对一位从你的草稿诊断你哪里做错的导师，你会有多自信？
- 大模型会在数学上等价的题目表述之间翻转答案 —— 同一道题以不同方式呈现就改变结果。这对用人工智能给数学理解评分或诊断意味着什么？

## 引言

数学教育已成为 [[ai-education|教育中的人工智能]] 研究的一个主要领域，因为数学题有清晰的正确答案，却要求丰富的推理 —— 使它们成为研究辅导有效性、评估效度，以及人工智能工具如何与学生认知和情感互动的理想对象。本知识库中的文章既揭示了人工智能数学导师的前景，也揭示了持续的挑战：破坏生产性挣扎的过度支架、认知诊断中的幻觉，以及在人工智能协助与真实学习之间取得平衡的困难。

### 关键研究主题

**人工智能数学辅导与支架** 是最大的聚类，有四篇文章考察人工智能导师如何支持或破坏数学学习。**[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]** 表明，加入情感觉察 —— 从文本与面部表情检测学生情绪 —— 在数学辅导中产生 +23 点胜率优势，连接到 [[affective-computing]] 与 [[affective-tutoring]]。**[[zhang-tutormoments-2026|TutorMoments]]** 评估了来自 2–7 年级数学辅导的 462 份教师标注记录，发现前沿模型默认倾向于过度有帮助，很少在即使学生已准备好时仍推动严谨性 —— 直接挑战了人工智能的有帮助与 [[scaffolding]] 原则之间的对齐。**[[lak2026-hint-button-unproductive-use|An et al.]]** 分析了 *Decimal Point* ITS 三个学期中的 999 名学生，发现过早的提示请求与浮光掠影的提示阅读一贯预测 [[learning-gains|学习增益]] 的减少，即便在控制 [[prior-knowledge|先备知识]] 之后 —— 这一发现连接到 [[help-seeking]] 与 [[learning-analytics]]。

**社会情感支持可以买到效率，而非成就。** 在七年级代数导师上加入一层大模型正念层，使两组之间的学习和状态性数学焦虑未变（受干扰后分析 252 名学生中的 42 名），然而正念条件的学生用更少时间和更少的提示请求达到了可比较的学习（[[mindful-llm-math-tutoring-2026|Rief et al., 2026]]）。

**[[cognitive-diagnosis|认知诊断]] 与评估** 探索人工智能评估数学思维的能力。[[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] 补充了一项横跨数学与阅读的大规模题目难度研究：在按 Rasch IRT 模型校准的 5,170 道 K-5 题目上，GPT-4o 的零样本难度评级与真实难度呈中到强相关（数学 r = 0.83，阅读 r = 0.81），但在各年级间不均衡，而基于特征的方法（把大模型抽取的特征输入树模型）达到了最高 r = 0.87 的相关，其中年级与词数是首要预测因子。该研究为测验专业人员提供了一套实用的七步工作流，并告诫超出 K-5 数学与阅读的可推广性尚不清楚。**[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** 在 3,036 份来自手写数学工作的教师标注诊断判定上对 18 个大模型做基准测试，发现所有模型严重表现不足（F1 < 0.5），且系统性地过度归因与幻觉证据 —— 连接到 [[knowledge-tracing]]、[[hallucination-risk]] 与 [[multimodal]] 评估挑战。**[[representation-robustness-llm-math-problem-solving|Nath et al.]]** 表明，[[llm]] 数学 [[problem-solving]] 对表层表示高度敏感 —— 模型在等价题目表述之间翻转正确性 —— 对基于人工智能的数学评分提出 [[assessment-validity]] 关切。

**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi and Olaoye (2026)]]** 展示了评估数学回答的一条对照路径：他们的自动化扩展作文评分软件按语义相似度对一场高年级经济考试中的扩展回答型数学题目评分，对照 WAEC 评分方案，且没有在任何已评分答卷上训练，并与 12 位人类考官在 0.863 的组内相关（平均测量）上一致，Pearson 系数从 0.604 到 0.864。一致性落在分数最低之处 —— 软件平均 5.94 分（满分 20），评分者平均 5.97 分，每位考官只评了 1,008 份答卷中的 84 份，而作者把低分归因于考生对计算机作答的不熟悉。

**[[student-engagement|学生参与]] 与人工智能素养** 考察学生如何与人工智能数学工具互动。**[[epistemic-proactivity-math|Abdelghani et al.]]** 追踪了数学学习中学生与人工智能互动的时间轨迹，识别出一条从表层 [[prompt-engineering|提示]] 到“认识能动性”的发展路径 —— 主动、[[self-directed-learning|自主]] 追求概念理解。这连接到 [[ai-literacy]]、[[metacognition]] 与 [[self-regulated-learning]]。**[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]** 发现，人工智能自适应平台显著改善了有数学学习困难学生的分数理解，连接到 [[personalized-learning]] 与 [[adaptive-learning]]。

**教师支持** 探索面向数学教育者的人工智能工具。**模拟学生角色扮演** 也服务于教师练习：[[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang and Zhang (2025)]] 构建了 *Student GPT*，一个扮演持常见比例推理 [[misconceptions]] 的中学生的定制 ChatGPT [[conversational-ai|聊天机器人]]，给职前中学数学教师提供低风险练习，去诊断并引导学生思考走向正确解答 —— 说明了 [[generative-ai|生成式人工智能]] 驱动的 [[simulation]] 作为 TeachLivE 这类昂贵平台的补充，用于建立关于学生误解的教学内容知识。

本知识库对这一领域唯一的领域级综合，是一项对 922 条记录筛选出的 42 项研究所做的 2021–2025 PRISMA 综述（Cohen's kappa = 0.88），它加入了一个本页聚类所缺的类别：面向教师的自动化，其中 MATH41 支持为不同水平的学习者快速生产数学任务，而混合模型 CognifyNet 分析学生的活动模式，使教育者能及早发现新出现的困难。同一综述定位了该领域的盲点 —— 研究领域中教育占 60%、计算机科学占 28%，只有一项研究落在心理学，使情感影响、信任与伦理相对未被探索 —— 并坚持技术能力不应等同于已被证明的课堂有效性。（[[ai-mathematics-education-prisma-review-2026]]）

**高等数学** 探索人工智能对高等数学实践的影响。**[[genai-runaway-object-math-higher-ed|Bui et al.]]** 把 [[sociocultural-learning|社会文化]] 理论应用于大学数学中的 [[generative-ai|生成式人工智能]]，把人工智能分析为一个“失控的客体”，它以超出 [[governance|制度]] 与教学规范的方式转变学术实践。

**大模型辅导与 [[learning-design|教学设计]]** 是一个新兴的两项 2026 年研究聚类，它们磨砺了数学教育的证据基础。[[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu, and Sun (2026)]] 为小学数学应用题开发了一个规则引导的 [[intelligent-tutoring|大模型辅导系统]]，其三 层架构（诊断 → 意图选择 → 受限回应生成）在一个 40 名学生的五年级课堂试点中改善了互动一致性并减少了过早给出答案 —— 证据表明程序性数学领域需要对原本随机的大模型支架设置 [[guardrails|结构化规则护栏]]。[[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, and Wang (2026)]] 把一个智慧课堂模型应用于数学教育硕士学生，发现在课程标准、教材与学生条件维度上的教学设计目标上有统计显著的增益（p < .05）。

提示设计本身就是一个可测量的杠杆：在 MathDial 基准上，一个有教学依据的苏格拉底式“导师提示”对 GPT-4o 与 GPT-4o-mini 都提高了 Success@N 并大幅削减 Telling@N，相对基础提示（[[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]）。

**面向数学建模任务的 [[generative-ai|生成式人工智能]]** 把生成这一支线延伸到常规练习之外。一个通过 ADDIE 方法开发的人工智能平台，以中学数学中的正比例为例证主题，针对教师缺乏时间与资源来设计高质量建模任务的问题：既有工具通常产出常规应用题或常规练习，而该平台旨在生成培养数学建模能力的资源，扎根于既定的设计原则与 [[prompt-engineering|检索增强生成]]。

- **视觉思维链：几何中的 [[agency|自主]] 差距。** GeoVAD-Bench 诊断中间视觉辅助而非最终答案，覆盖 600 道辅助构造题（200 简单、200 中等、200 困难），发现一个一致的模式：提供参考辅助图使准确率小幅提高（三个模型分别 +3.3、+3.0、+7.0 分），而让模型在通往正确答案的路上自行构造辅助线，则把差距扩大 10.0 到 13.5 分，有两个模型的表现比完全没有视觉推理时更差。四类过程错误占归因失败的 93.1% 与 89.7%。对 [[problem-solving]] 教学而言，这一发现是：图形支架必须与答案准确率分开训练与评估。（[[geovad-bench-visual-chain-of-thought-geometry-2026]]）
- **易受人工智能影响的问题会失去学习时间与保持。** 一个 320 万次 ALEKS 互动的十年面板发现，在基于文本的应用题 —— 那些最可转写进人工智能提示的题 —— 上的学习时间在 ChatGPT 发布后下降 26.9%，而受监考的保持题显示正确回答的几率下降 25%（[[generative-ai-reduced-study-time-math|Rismanchian et al., 2026)]]）。
- **学生重视即时反馈，但可选练习平台无人使用。** 在 157 名学生中，[[genai-practice-platform-maths-feedback-2026|Chen et al. (2026)]] 看到 95 人注册，只有 34 人尝试答题；用户把参与度评得最高（79% 同意），而只有 42% 偏好该平台胜过既有习题册。
- **人工智能可以在提高成就的同时扩大性别差距。** 在一项对 115 名尼日利亚高年级中学生、为期六周的准实验中，ChatGPT 反馈把一元二次方程的成就提高到传统教学之上（29.18 对 24.06），然而男生表现优于女生（30.95 对 25.16），尽管自我效能没有性别差异 —— 这是对人工智能数学支持的一项公平告诫（[[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]）。

### 与相关概念的关联

数学教育位于更广的 [[stem-education]] 领域之内，与 [[intelligent-tutoring]] 和 [[intelligent-tutoring|人工智能辅导]] 有独特连接，通过认知导师与数学中 ITS 研究的强传统；与 [[scaffolding]] 通过生产性挣扎与提示使用文献；与 [[affective-computing]] 通过数学焦虑与情绪觉察辅导；与 [[knowledge-tracing]] 和 [[assessment-validity]] 通过认知诊断与评估研究；以及与 [[teacher-role]] 通过数学教学中的教师与人工智能协作。[[k-12]] 的连接尤其强 —— 许多数学文章涉及 K-12 情境 —— 而 [[higher-ed]] 连接出现在教师准备与高等数学实践中。

## 给数学教师的启示

- **把人工智能辅导当作求助杠杆，而非能力补救。** [[lak2026-hint-button-unproductive-use|提示使用研究]] 表明，过早的提示请求与浮光掠影的提示阅读预测更低增益 —— 因此学生*何时以及如何* 寻求人工智能帮助的设计，比导师的原始能力更重要。鼓励学生先尝试再提问，并在需要的时刻而非按需提供帮助。
- **保护生产性挣扎。** [[zhang-tutormoments-2026|TutorMoments]] 发现模型默认过度有帮助，很少推动严谨性；把人工智能支持配置为支架而非解题，并监控会侵蚀推理的答案替代。
- **不要把人工智能诊断输出当真值。** [[llm-cognitive-diagnosis-handwritten-math|MathCog]] 表明，大模型在诊断数学思维上表现不足（F1 < 0.5），且过度归因与幻觉证据；把人工智能诊断当作一项应对照学生实际工作核验的建议。
- **警惕人工智能评分中表层格式的脆弱性。** [[representation-robustness-llm-math-problem-solving|表示敏感性]] 意味着等价的问题可以翻转人工智能的答案 —— 这是对基于人工智能的数学评估的效度风险；对高利害评分偏好 [[human-in-the-loop-ai|人工复核]]。
- **用人工智能降低个性化练习的门槛。** [[ai-powered-personalized-learning-elementary-fractions-2026|自适应平台]] 改善了有数学学习困难学生的分数理解；有选择地为需要差异化支持的学习者部署人工智能自适应工具。
- **让教师掌控人工智能生成的教学材料。** [[teacher-control-ai-generation-math-visuals|教师对人工智能视觉的控制]] 支持一个平衡人工智能效率与教学正确性的框架。

## 关联概念

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## 关联文章

- [[ai-mathematics-education-prisma-review-2026]] — Artificial intelligence in mathematics education: A PRISMA-based systematic literature review (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — Automated software scoring of senior school certificate examination mathematical items in economics using a contextual similarity model
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Virtual tutoring with CAL: an experiment in take-up and learning
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[chudziak-ai-math-tutoring-platform]] — AI-powered math tutoring platform (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — ALEKS mastery platform: text-based problems most AI-susceptible
- [[mujib-ai-ibl-creative-math-2026]] — AI-supported IBL and creative mathematical performance
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[preferred-scaffolding-ai-mathematical-modeling]] — Preferred scaffolding in AI-supported mathematical modeling
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — GPT-4 grading of semi-open handwritten university mathematics answers
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — semantic knowledge-concept annotation and RL exercise sequencing on K-12 math corpora
- [[misconception-acquisition-dynamics-llms-2026]] — algebra mal-rule training dynamics in language models
- [[genai-practice-platform-maths-feedback-2026]] — Optional GenAI practice platform in a 157-student maths class: immediate feedback valued, uptake limited to 34 active users
- [[ai-generated-responses-achievement-self-efficacy-2026]] — Assessing the Influence of AI-Generated Responses on Academic Achievement: An Ethical Perspective and Self-Efficacy
