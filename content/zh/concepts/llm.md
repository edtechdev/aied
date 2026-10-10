---
title: 大语言模型（LLM）
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:40:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **大语言模型（LLM）**——在海量文本语料上训练、能生成类人文本的[[machine-learning|神经网络]]模型，为大多数现代[[ai-education|教育中的人工智能]]应用提供动力。LLM 是教育中生成式人工智能导学、评估与内容生成的计算骨干。

## 值得思考的问题

- 当一个 AI[[conversational-ai|聊天机器人]]回答你时，你认为它"知道"什么？本页把 LLM 框定为生成概率文本而非检索已验证的事实——这一区分如何改变你对模型解释的信任程度？
- LLM 被描述为大多数现代 AI 教育工具背后的引擎——导学、评分、内容生成，甚至诊断学生知道什么。在这些用途中，你认为哪一种对概率文本生成器最合适、哪一种最不合适，为什么？
- 本页报告，三个不同的 LLM 对同一学习分析输入产生了截然不同的支持计划，各自带有不同的人口学假设。如果模型作为顾问不可互换，那么采用其中一个的机构意味着什么？
- 由于 LLM 输出对提示与设置敏感，两个人从同一模型能得到很不同的结果。这应如何影响你——作为学习者或设计者——表述请求的方式，以及你对单个输出的信任程度？
- 一个关键局限是幻觉——听起来可信却无依据的内容。在导学或评分情境中，要让你确信模型没有编造，需要什么？在让它评价一个真实学生之前，你会要求什么保障？

## 引言

### LLM 作为 AIED 的引擎

LLM 是本知识库中被引用最多的概念（60 多篇文章），因为它们支撑着几乎每一个 AI 教育应用：

- **导学：**[[intelligent-tutoring|AI 导学系统]]把 LLM 用于对话、解释与[[problem-solving]]引导。[[llm-training-and-fine-tuning|训练与微调]]把通用 LLM 适配为教育用途。
- **评估：**[[automated-assessment|评分系统]]、[[automated-essay-scoring|作文评分]]与[[llm-item-difficulty-prediction|题目难度预测]]利用了 LLM 的能力。[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]表明 GPT-4o 可以在 Rasch IRT 模型校准下估计 K-5 数学与阅读题目的难度（N = 5170）：零样本评分与真实难度呈中到强的相关（数学 r = 0.83，阅读 r = 0.81），但随年级变化；而一种让 LLM 为树模型抽取认知与语言特征的基于特征的策略，相关可达 r = 0.87——证据表明结构化特征抽取可以胜过单一的整全式 LLM 判断。在汇总评分文献中，一项 PRISMA 引导的[[meta-analysis-systematic-review|系统综述]]（42 项实证研究，2023–2025）得出结论：LLM 在有详细评分标准的简短、结构化任务上与人工评分者相当，但在复杂、开放式或主观的工作上无法完全取代人的判断，且模型版本是评分质量的主导决定因素（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。可靠性也随题型剧烈变化：[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat 等（2026）]]发现 ChatGPT-5 在客观药学考题上与教师高度一致（CCC 0.935–1.000），但在简答题（CCC ≈0）与作文题（0.341–0.854）上不可靠，且提供评分标准并未一致地改善一致性。
- **生成的题目标签追踪的是表层形式，而非难度。**一项 378 题审计发现，LLM 的易/中/难标签与其自生成的布鲁姆层级（ρ=0.90）及题干长度（15.9 到 30.2 词）同步上升，但与 7.888 条学生回答的经验题目难度相关仅 ρ=0.06——证据表明生成时的难度元数据描述的是格式，而非对[[prior-knowledge|先备知识]]的要求（[[student-llm-use-ai-question-difficulty-data-science-2026|An 与 Wang（2026）]]）。
- **生成的题目仍可匹敌专家题目。**o3-mini 在"生成→判定→修订"环路中为 71 个班级构建考试；在贝叶斯分层 2PL[[item-response-theory|IRT]]模型下，AI 题目更容易但区分度更高（ᾱ = 1.3 对 1.2），信息量更大（I_max = 3.85 对 2.61），优于专家 AP 统计学题目（[[assessing-quality-ai-generated-exams-field-2025|Isley 等，2025））。
- **标注质量是设计结果，而非单一提示的属性。**[[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado 等（2026）]]提示一个五模型小组判断关于每个话语的人类可读断言，而不是直接输出标签；一个基于这些二元判断的透明分类器（宏 F1 0.673，Cohen's κ 0.688）优于对前沿模型最佳的直接提示（宏 F1 0.61），但落后于微调的 RoBERTa-base 编码器（0.76）；跨模型一致起到了筛查装置的作用，而非效度证据。
- **[[multimodal|多模态]]推理 LLM 作为评分者：**当一个多模态、具备推理能力的 LLM（GPT-o4-mini）对照评分标准图像，逐页评分一份 296 名学生的手写普通[[chemistry-education|化学]]考试卷时，单次运行的总分高度可复现（ICC(A,1) = 0.967；平均五次运行达 0.993），与助教总分高度一致（R² = 0.91），但题目级可靠性强烈依赖格式——文本与反应方程式答案评分良好，而绘图与作图差于随机（背景网格干扰 AI 视觉）。这说明 LLM 评分者的[[trust|可信度]]是回答格式与任务的函数，不只是原始模型能力的函数，且高风险用途需要[[human-in-the-loop-ai|选择性退让]]（通过置信度过滤）（[[cvengros-grading-handwritten-chemistry-ai-2026]]）。
- **内容：**[[generative-ai|生成式人工智能]]内容创建依赖 LLM。[[automated-question-generation|题目生成]]与[[ai-generated-instructional-videos-computing-ed|视频生成]]由 LLM 驱动。
- **安全：**[[pedagogical-safety]]、[[hallucination-risk]]与[[hazra-safetutors-pedagogical-safety-2026]][[research-methods-aied|研究]]考察 LLM 特有的风险。
- **诊断：**[[knowledge-tracing]]与[[cognitive-diagnosis]]日益纳入 LLM 以进行更丰富的[[student-modeling|学生建模]]。接地对错误诊断极为重要：[[reddig-maclellan-personalized-feedback-llm-2026|Reddig、Arora 与 MacLellan（2025）]]表明，给 GPT-4 提供导学界面结构加贝叶斯[[knowledge-tracing]]技能估计，把因式分解的逻辑错误识别从 40% 提到 81%（整体错误诊断约 87.8%），而多步问题与含多个错误的回答仍是弱项，且幻觉出的"常见[[misconceptions|误解]]"诊断仍然存在——证据表明 LLM 的诊断价值既是它所接收的结构化上下文与[[student-modeling|学习者模型]]信号的函数，也是模型本身的函数。
- **验证与生成分离——带有相关的失败模式。**[[eduguard-safe-rag-llm-tutor|Hossain 等（2026）]]把导学检索限制在教师批准的课程材料内，并把断言路由到一个架构上独立的 DeBERTa-v3-large-MNLI 验证器，但提醒两个模型共享广泛的网络训练、可能以相关方式失败，且验证器无法在不执行的情况下检查代码追踪。

- **评估模型转变（2017–2024）：**Morley 等的范围综述追溯了自动评分简短[[science-education|科学]]回答的领域，从微调较小的[[educational-nlp|BERT]]模型（主导至 2021 年）转向提示更大的 LLM（GPT-1/2/3.5/4）（约自 2022 年起）——经由[[prompt-engineering]]而非微调被采用——辅以领域增强模型、感知评分标准的提示与思维链提升准确率。然而 GPT 模型很少与 BERT 在标准语料上对比，很少有自动评分器能解释其评分，[[bias-mitigation|偏见]]也少有考察，这些警示普遍适用于 LLM 评估（[[auto-marking-short-answer-science-2026]]）。

### 模型特有研究

本知识库既覆盖通用 LLM（GPT-4、Claude），也覆盖面向教育的适配。[[cstutorbench-slm-tutors|小语言模型基准]]比较 SLM 在导学上的表现。[[educational-llm-alignment|教育对齐]]研究关注如何让 LLM 在教学上恰当。一项跨三个前沿家族的研究——[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash 与 Connell Pensky（2025）]]——发现 ChatGPT、Gemini 或 Claude 都能为议论文写作充当协作式批评伙伴：经过一学期的迭代写作，学生在论证质量、[[prompt-engineering|提示工程]]与对[[ai-feedback-quality|AI 反馈]]的回应上各进步约一个标准差（均 p < .001），并深度投入（87.8% 反驳 LLM 的主张），把通用 LLM 定位为可行的[[collaborative-learning|协作学习]]伙伴，而非单纯答案生成器。

一条互补的工作线把 LLM 从静态评分者重新框定为[[pedagogy|教学法]]推理的模拟者。[[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等（2026）]]表明，GPT-4 辅以语义精确、经迭代共同精炼的评分标准，可以在[[design-based-research|设计型学习]]中逼近人的[[evaluative-judgment|评价性判断]]：初始 LLM—人一致度差（Cronbach's Alpha = 0.393；Kappa −0.06 到 0.18），但迭代精炼评分标准把平均一致度从 54.75% 提到 81.25%（最终 Alpha = 0.798，Kappa 0.40–0.55），且人与 LLM 评分矩阵的 K-means 聚类呈现高度相关的质心（r = 0.89）。该研究把评分标准定位为人的教学意图与机器推理之间的中介界面——证据表明现成的 LLM 作为评价者也不可互换，其评分行为是由所给评分标准与提示塑造的设计结果。原始模型能力同样区分评分：在 1.885 条开放式[[automated-assessment|回答]]上对十一种 GenAI 与句子嵌入模型做[[benchmark|基准测试]]，[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova、Benko 与 Drlik（2025）]]发现只有 GPTo1 达到与专家人工评分接近完美的一致（Fleiss' Kappa 0.82），Claude3 与 PaLM2 略逊，而 BERT 这类参照对齐模型远远落后——说明前沿模型的上下文敏感性对可靠开放式评估很重要。模型差异对高风险的下游用途也重要。[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等（2026）]]表明，三个 LLM 对同一[[learning-analytics|学习分析]]输入产生了截然不同的学生支持处方，且各自把不同的人口学先验强加于所生成的学习者画像——证据表明现成的 LLM 作为处方顾问不可互换。类似地，[[olvet-genai-scoring-open-ended-medical-2026|Olvet 等（2026）]]发现 GPT-4 对预临床期[[medical-education|医学]]开放式问题的评分，只有在三轮迭代评分标准精炼之后才攀升到与教师实质到近乎完美的一致（加权 kappa 高达 0.94），而在整体标准题目上回落到中等（κw = 0.54）——强化了评分标准设计而非单独的能力，才是 LLM 评分可靠性的决定杠杆。模型特有行为也体现在 LLM 如何回应怀疑用户：一项算法审计以蒙大拿乡村的[[k-12]] AI 怀疑者人格，把十个前沿 LLM 各查询 500 次，测试被怀疑用户咨询的[[ai-technologies|AI 系统]]是否倾向于鼓励采用。十之有八先承认用户担忧，再把话题转向 AI[[student-engagement|投入]]框架；综合分从 3.85（Claude Sonnet）到 7.52（Gemini 3.1 Pro Preview），跨家族 AI 评分小组达 Cohen's kappa >= 0.70。该模式是一种依赖模型的设计结果。模型能力也取决于模型如何组合

Bird（2026）微调了八个最先进的 Transformer（BERT、ELECTRA、RoBERTa、XLNet、ERNIE、ALBERT、DistilBERT、Longformer）按英国 Key Stage 对英语文学分类，发现最佳单模态 Transformer（BERT）只达 F1 0.75——而把微调的 ELECTRA 与计算语言学神经网络融合，把 F1 提到 0.996，说明 Transformer 文本分类单独有其局限，而与互补特征的融合才是收益所在。

LLM 也偏好性地肯定用户：在 11 个模型上，AI 回答对用户的肯定比人的回答多 49%，且更谄媚的回答得到更高评分，提升了信任与持续使用——这对教练、导学或反馈是一种失败模式，因为建设性的质疑恰恰是其要点（[[ai-personal-coach-review-benefits-risks-2026|Potel 与 Kumashiro（2026）]]）。

## 关联概念

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — 总括：AI 技术与方法（模型、LLM 训练、机器人、RAG、智能体）

## 关联文章
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[ai-personal-coach-review-benefits-risks-2026]] — Sycophancy across 11 LLMs: AI affirmed users 49% more than humans, raising trust and continued use
