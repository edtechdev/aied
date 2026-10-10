---
connected_resources: [teacherserver]
title: 自动题目生成
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **自动题目生成（AQG）** — 使用 AI，尤其是 NLP 与 [[llm|大语言模型（LLM）]]，从源材料或学习目标自动生成 [[assessment|教育评估]]题目（选择题、简答题、填空题、编程题与表现性题目）。AQG 使规模化评估成为可能——产出 [[formative-assessment|形成性]]测验、自适应练习与练习题——但质量因题型而异，差异极大，必须经过验证以避免幻觉或校准不佳的题目。它是 [[automated-assessment]] 的核心组成部分，也是 [[adaptive-learning]] 与 [[personalized-learning]] 的关键使能者。

## 值得思考的问题

- 自动题目生成能从源材料规模化地产出评估题目——但本页警告，质量因题型而差异极大。在读之前，你猜 AI 生成哪种题型最可靠：选择题、简答题，还是编程题？为什么？
- 核心挑战是质量控制：LLM 会生成事实上不正确的题目。有一条流水线通过加入"生成—验证—精炼"循环把幻觉减少了 62%。你认为让 AI 验证自己的题目，为什么能真正改善题目，而不只是给自己的输出盖章？
- [[research-methods-aied|研究]]显示，除非明确为高阶结果设计，生成的题目可能偏向低阶思维（回忆）。如果你用 AI 构建练习题，你如何知道它们训练的是真正的理解，还是只是记忆？
- 难度校准很重要：AI 的难度估计与学生表现强相关，但本页告诫不要在高风险场景中误用。一道被 AI 判定为"难度合适"的题目，什么时候对某个特定学习者仍是问错了题？
- [[accessibility|无障碍]]感知的生成，为聋人与听力受损学习者构建题目，并与目标社群合作精炼。这个例子说明，为什么题目生成不能被视为一个纯粹技术或纯内容的问题？

## 引言

自动题目生成之所以重要，是因为手工创建评估题目成本高昂，而 AI 可以快速、规模化地产出题目。然而，本知识库的研究显示，生成的题目必须在正确性、相关性与难度上经过验证，且不同题型（选择题、简答题、编程题）的可靠生成程度不同。因此 AQG 位于 [[generative-ai|生成式 AI]]、[[educational-nlp|教育 NLP]] 与 [[educational-measurement|教育测量]]的交叉点。

## 题目生成的方法

知识库的研究展示了若干方法：

- **先生成再验证的流水线：** [[generate-then-validate-question-gen|Generate-Then-Validate]]引入了一条"生成 → 验证 → 精炼"循环，与直接生成相比把 LLM 幻觉减少了 62%，在 [[stem-education|STEM]]数据集上达到 89% 准确率，相关性提升 23%。验证步骤过滤无效或低质量的题目，失败的题目会触发带纠正性提示的重新生成。
- **基于知识追踪的生成：** [[kt4eqg-personalized-question-generation|KT4EQG]]在 [[knowledge-tracing|知识追踪]]的引导下生成个性化练习题目，为每个学习者的知识状态定制题目，而非生成通用题目。
- **把误解绑定的干扰项作为诊断标签：** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（He 等，2026）]]为每个干扰项绑定一个挖掘出的误解，并标出唯一正确选项，使题目在生成时就内建了诊断目标，随后可以确定性评分而无需调用 [[llm]]——在作者的实时部署中约 7.6 秒、约 \\$0.005 一轮，而 LLM 评分的简答题轮次约 32 秒、\\$0.015。这种绑定只与它背后的误解标签一样好，因为挖掘出的 [[misconceptions]]与目标误解的匹配度为 F1 ≈ 0.56，其题目选择在 0.72 的情况下服务于一项真正薄弱的技能。
- **认知深度感知的生成：** [[llm-educational-question-cognitive-depth|评估 LLM 生成题目的认知深度]]考察生成的题目是否触及 [[critical-thinking|高阶思维]]（创造、评价），还是只有记忆，连接到 Bloom 分类法与 [[educational-measurement|教育测量]]。
- **用于重复评估的含错案例题：** [[automated-constructive-assessment-hdr-llm-2026|Takahashi 等（2026）]]生成了新的层级诊断推理（HDR）题目——带有刻意嵌入错误、学生必须找出并解释的短案例——发现 GPT-4o 撰写的题目在内部一致性（两者 Cronbach's α = 0.78）与难度上与人类撰写的题目相当，Fisher 精确检验在 100 名参与者中未发现分数分布显著差异。该格式把 [[critical-thinking|高阶思维]]要求与受约束的回答配对，使答案收敛、评分可复现。其生成动机是题目复用：复用一个案例会引来记忆与答案复用，而结构等价但情境不同的生成案例则抑制了重复测量中的题目偏差。
- **[[pedagogy|教学法]]流水线：** [[slidesqaqa-pedagogical-question-generation|幻灯片问答生成]]使用一条多阶段流水线，从课程材料中生成教学上合理的题目。
- **无障碍感知的生成：** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen 等]]为 [[inclusive-learning|聋人与听力受损学习者]]设计了一个 LLM 驱动的题目生成系统，引入视觉与情绪两类问题策略，针对视频中视觉或情绪困难的时刻，并与目标社群迭代精炼题目以确保语言无障碍。
- **基于 RAG、人在环中的系统：** [[code-gen|CODE-GEN]]把 [[rag|检索增强生成]]与 [[human-in-the-loop-ai|人在环中]]的审阅结合，用于生成 [[automated-assessment|选择题评估]]。
- **[[benchmark|基准]]与评估：** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]]提供了一个科学/数学谜语基准，用于评估题目生成与推理系统。

## 验证与质量

AQG 的核心挑战是**质量控制**：
- **评估解题过程，而非题干：** [[proiqa-math-item-quality-assessment-2026|ProIQA]]论证题目质量审阅应遵循专家之所为——模拟解题——并为每道题构建一棵 LLM 生成的推理树，在数学正确性上验证达 90.38–97.80%，随后用图 [[machine-learning|神经网络]]编码其依赖结构，并辅以仅看题干的视角。它报告相对次优方法的平均增益为：概念评估 7.5%、难度估计 6.3%、能力评估 19.5%；其错误分析点出了一种值得关注的失效模式：一棵逻辑正确但结构浅显的推理树，会让一道难题看起来容易。
- **幻觉风险：** LLM 会生成事实上不正确的题目。[[generate-then-validate-question-gen|Generate-Then-Validate]]显示，专门的验证阶段能大幅降低这一点，而 [[hallucination-risk|幻觉风险]]在整体上是一个公认的关切。
- **难度校准：** 生成的题目必须校准到合适的难度。[[llm-difficulty-calibration-programming-exams-2026|难度校准研究]]显示，AI 难度估计与学生表现强相关（如 rho ≈ −0.87），使更好的题目选择成为可能——同时告诫不要在高风险的 [[ai-misuse-learning-harm|误用]]中使用。[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]将其扩展到 K-5 数学与阅读题目（N = 5170），在 Rasch IRT 模型下校准：GPT-4o 的零样本难度评分与真实难度呈中强相关（r = 0.83 数学，r = 0.81 阅读），但随年级变化，而基于特征的方法——把 LLM 抽取的认知与语言特征输入基于树的模型——达到最高 r = 0.87 的相关。该研究的结构化特征抽取（如句法复杂度、[[cognitive-offloading|认知负荷]]、干扰项的迷惑性）及其七步实操工作流，为校准生成题目提供了模板，而其低年级范围受限的发现与可推广性告诫则提示不要用于高风险场景。
- **生成的难度标签可能是构念效度的失效，而非校准误差。** 在 378 道生成题目上，模型的易/中/难标签与它一并生成的 Bloom 层级一致（ρ=0.90），也与表面形式一致——平均题干长度从 15.9 升到 22.1 再到 30.2 词——但与 54 名学生 7,888 次回答所反映的实测难度相关性仅 ρ=0.06，这说明生成元数据应对照回答数据校准，而非相信一并生成的标签（[[student-llm-use-ai-question-difficulty-data-science-2026|An 与 Wang（2026）]]）。
- **大规模心理测量实地验证：** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]]在 91 个真实大学课堂（约 1,686 名学生）中验证了一条迭代精炼的 AQG 流水线（生成→评判→修改，Self-Refine 风格）。贝叶斯层级 2PL [[item-response-theory|IRT]]分析显示，AI 生成的题目表现与专家撰写的标准化考题相当——略易（β̄ = −0.45 对 0.35）但区分度稍高（ᾱ = 1.3 对 1.2），峰值测验信息更高（信度 0.79 对 0.72）——证明 AQG 可以大规模产出贴合课程、心理测量上健全的评估。

- 平均心理测量上的相当，可能掩盖题目层面的不足：一项对 153 篇医学教育报告的范围综述发现，AI 生成题目有时在难度与区分度上与人类相当，然而在一项生理学比较中，只有 40 道 ChatGPT 题目中的 9 道满足全部理想标准，而教师题目为 40 道中的 19 道（[[genai-medical-education-transformation-review-2026|Zhao 等（2026）]]）。
- **真实考试中的可辨识性，以及审阅究竟去掉了什么：** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt 等（2026）]]把 30 道 AI 生成的选择题与 30 道国家执业医师考试选择题放进一场由 119 名五年级 [[medical-education|医学生]]参加的评分平板考试中，AI 题目由 ChatGPT-4o 与 Gemini 1.5 Pro 依据课程自身材料起草，再经一个接受了其中 82%、剔除了 18.2% 为不可用的专家评审组审定。学生对两类题目的来源归因没有差异，题目难度、干扰项分布与感知到的课程对齐在统计上不可区分——这是一个*可辨识性*结果而非质量结果，也是作者把该工作流的益处描述为把教育者的精力从起草转移到审阅、而非消除它的原因。一项探索性差异得以保留：Gemini 题目难于执业考试题目（p = 0.028），而 ChatGPT 题目不然（p = 0.984）。
- **任务依赖性：** 生成的可靠性因题型而异。[[cong-confidence-asag-2026|简答题评分]]与 [[self-referential-l2-writing-llm-assessment|分析性写作评估]]显示，开放回答与写作类题目比结构化题目更难可靠地生成与评分。
- **认知质量：** [[llm-educational-question-cognitive-depth|认知深度评估]]显示，除非明确为高阶结果设计，生成的题目可能偏向低阶思维。
- **自动标注认知层级无法迁移到生成题目。** 一个在精选题库上训练的 Bloom 分类器，在 AI 生成的题目上崩溃——宏 F1 从分布内的 0.88 跌到分布外的 0.48 与 0.20——因为生成题目平均词数远多（18.2 对 9.3），且与精选语料共享的 Bloom 触发动词中位数只有 10.5%，而一组更接近的集合为 35.1%；在带标签的分布外数据上重训练是最大的单项增益，所需阈值约为 N > 1,000 个标注样本（[[bloom-classifier-ai-assisted-questions-2026|Castanares 等，2026）]]。

## 在自适应与个性化学习中的作用

AQG 是 [[adaptive-learning|自适应]]与 [[personalized-learning|个性化]]学习的关键使能者：它产出自适应导师所依赖的大规模题库，并且——与 [[knowledge-tracing|知识追踪]]或 [[student-modeling|学生建模]]结合——可以生成针对个体学习者知识状态定制的题目（[[kt4eqg-personalized-question-generation|KT4EQG]]）。[[taklif-ai-interest-based-personalized-assignments|基于兴趣的个性化]]表明，AQG 也能让题目适配学生兴趣，而不只是难度。

## 对 AI 教育的启示

- **先生成再验证：** 始终把生成与验证/精炼阶段配对，以控制幻觉并确保相关性。
- **让题型匹配可靠性：** 在最可靠的结构化题型（选择题、填空题、编程题）上使用 AQG，并对开放回答与写作类题目施加仔细的验证。
- **为认知深度而设计：** 提示与流水线应瞄准高阶思维，而非只对准回忆，以支持真正的学习。
- **校准难度：** 用 AI 难度估计来挑选难度合适的题目，并在高风险使用前做强力验证。
- **通过学习者模型个性化：** 把 AQG 与知识追踪和兴趣模型结合，生成自适应、个体化的题目。

## 关联概念

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## 关联文章
- [[genai-medical-education-transformation-review-2026]] — 对 153 篇 AI 题目生成与教师题目质量的医学教育报告范围综述

- [[assessing-quality-ai-generated-exams-field-2025]] — 通过 IRT 对 AI 生成考试质量的大规模实地验证
- [[generate-then-validate-question-gen]] — Generate-Then-Validate 题目生成
- [[kt4eqg-personalized-question-generation]] — 通过知识追踪的个性化题目生成
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 面向聋人与听力受损学习者的 LLM 驱动题目生成
- [[llm-educational-question-cognitive-depth]] — LLM 生成题目的认知深度
- [[slidesqaqa-pedagogical-question-generation]] — 幻灯片问答的教学式题目生成
- [[code-gen]] — CODE-GEN：基于 RAG、人在环中的题目生成
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles 基准
- [[taklif-ai-interest-based-personalized-assignments]] — 基于兴趣的个性化作业
- [[llm-difficulty-calibration-programming-exams-2026]] — 基于 LLM 的难度校准
- [[self-referential-l2-writing-llm-assessment]] — 自指式分析性写作评估
- [[cross-dataset-bloom-question-classification]] — 跨数据集的 Bloom 题目分类
- [[llm-chatbots-cs-multiple-choice]] — LLM 聊天机器人与计算机选择题
- [[socratic-tests-conversational-assessment]] — 苏格拉底测验：对话式评估
- [[llm-turing-test-italian-legal-exams-2026]] — LLM 图灵测验在法律考试中的应用
- [[razavi-powers-item-difficulty-llm-2026]] — 用 LLM 与基于树的机器学习估计题目难度
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA：基于过程的数学题目质量评估
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn：在人—AI 共同学习循环中学习其学习者的代理式导师
- [[automated-constructive-assessment-hdr-llm-2026]] — Automating Constructive Assessment with Large Language Models: Toward Scalable and Repeated Evaluation of Practical Competence
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — 学生对 LLM 的使用与数据科学课程中 AI 生成题目难度的局限
- [[bloom-classifier-ai-assisted-questions-2026]] — 对新型 AI 辅助教育题目作教学性评估的预训练模型评估
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — 学生在一场评分考试中无法区分 AI 生成选择题与执业考试题目，且 18.2% 的生成题目在审阅中被剔除（Vogt 等，2026）
