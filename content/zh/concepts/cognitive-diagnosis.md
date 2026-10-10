---
title: 认知诊断
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **认知诊断**——从学习者的作答或行为推断其潜在知识状态——即他们掌握或缺乏的具体概念、技能与误解。它是[[knowledge-tracing]]在评价侧的对应物，聚焦于刻画学生*知道*什么，而不只是预测他们接下来的表现。

## 值得思考的问题

- 认知诊断从学习者的作答中推断其潜在知识状态——他们掌握或缺乏的具体概念、技能与误解——而不只是预测下一个分数。在阅读之前，你预期"预测一个学生的成绩"和"诊断他真正不懂什么"之间会有什么差别？
- 一个关键观念是"正确答案陷阱"——正确答案掩盖了有缺陷的推理。你是否曾经因为学生答对了就确信他懂了，后来却发现底下藏着一个误解？诊断能在分数无能为力的地方如何把它揭示出来？
- 本页区分了认知诊断（学习者当前所持的静态、细粒度快照）与知识追踪（掌握程度随时间变化的动态）。为什么一个智能导师需要两者——既要知道哪里错了，又要知道接下来该教什么？
- 这里的一条设计原则是把诊断与反馈分开：LLM 导师会确认正确步骤，却会过度拒绝有效的推理、过度认可错误，而准确的诊断并不必然产出可行动的反馈。为什么知道哪里错了，仍然可能产不出有帮助的下一步？
- LLM 时代的诊断从选择题扩展到开放式、手写和会话式的作业。如果一个 AI 从它无法完全理解的作业中诊断出一个误解，可能会出什么问题——你会如何验证这项诊断本身是可信任的？

## 引言

知识追踪通常估计的是随时间变化的单一标量掌握度，而认知诊断产出的是更细粒度的画像：哪些知识成分已掌握、哪些是脆弱的、哪些误解存在。这一画像是[[personalized-learning]]、[[intelligent-tutoring]]和[[adaptive-learning]]的基底。

### 认知诊断如何运作

- **诊断模型：**心理测量模型（通常位于[[item-response-theory]]和[[educational-measurement]]之下）从正确与错误作答的模式中推断潜在技能状态，有时经由把题目映射到多个知识成分的认知诊断模型。
- **自动模型搜索：**由于没有单一诊断模型适合每一位学习者，由[[machine-learning|AutoML]]驱动的方法（例如个性化神经认知架构搜索）为异质的学习者画像生成诊断模型——整合[[multimodal|多模态]]教育数据，以支持对学习过程的动态分析和逐学习者的认知诊断，而不依赖静态的[[summative-assessment|考试]]结果和简单的统计指标（[[personalized-neural-cognitive-architecture-search-2026]]）。
- **作答数据：**诊断所利用的是对评价的作答、提示、[[help-seeking]]以及在任务上花费的时间——比原始分数更丰富的信号。
- **基于 LLM 的诊断：**较新的方法用[[llm|大语言模型]]从开放式或手写作业中进行诊断，并识别错误背后具体的[[misconceptions]]（例如正确答案掩盖缺陷推理的"正确答案陷阱"）。两项 2026 年的结果为这项诊断的边界划定了范围。[[omniedu-open-educational-foundation-models-2026|OmniEdu（Liang 等人，2026）]]把诊断性推理作为一项开放的 4B/9B/27B 模型家族四种能力之一进行监督，而知识状态诊断仍是其测得最弱的能力——27B 上为 54.04%、9B 上为 53.55%，相差如此之近，以至于三倍的参数量并未弥合差距——而[[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（He 等人，2026）]]的 LLM 评分器在合并作答上与真实掌握度的相关为 r = 0.68，但在最弱能力层级内仅 r ≈ 0.15（r ≈ 0.48 为中等，0.41 为强），因此诊断可靠性与学习者能力水平的关联，不亚于与模型本身的关联。
- **在群体规模上诊断常见错误，而不是一次一个作答。**[[llm-common-modeling-mistakes-formalisms-2026|Killich 等人（2026）]]反转了通常的方向：不是诊断一个学习者的错误，而是由一个[[llm]]提出候选的纠错变换，把不正确的形式化映射到正确形式化，横跨整个教育数据集，且每个候选在保留之前都经过算法验证。在 6,106 对正确与不正确的命题逻辑形式化上，该工作流发现了 248 个变换簇，解释了 5,156 对（84.44%），而此前技术水平的手工挑选错误为 4,370 对（71.57%），并且它找回了文献中由领域专家手工识别的那些错误。聚类把候选排序为单一变换、等价变换和层级分组，由此得到的相关图可以为教师可视化；同一条流水线迁移到了模态逻辑和正则表达式上，其中仅"以析取代替合取"这一个变换就覆盖了其 334 对簇中的 98.80%。这是一条通往误解清单的路径，而诊断模型在拟合之前正需要这份清单。
- **正确解的恢复，而不是错误模拟，才是瓶颈。** 模型在 95.2% 的干扰项轨迹中构造出了解法，并以 0.92 的准确率模拟了一个具体的 Eedi 误解，但即便提供正确答案，与人编干扰项的匹配率也只是从 0.52 升到 0.56——失效发生在上游，即解法恢复上（[[llm-distractor-generation-student-reasoning-2026|Zengaffinen 等人（2026）]]）。
- **OBE 课程中的结果层面诊断：**[[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh 等人（2026）]]在成果导向教育中诊断学习者达成了哪些课程成果，办法是把成果当作知识概念、经由专家验证的课程成果与项目成果之间的 OBE 亲和映射提供概念关系（这是对隐式学得的注意力或图关系的显式替代），并使用一个记忆增强模块估计一个成果的达成如何影响其他成果——在真实工程项目数据上优于 DKT、DKVMN、EKT 和 SimpleKT 基线（89.81% AUC）。
- **从为别的东西设计的量表来诊断。**[[mechanics-cognitive-diagnostic-physics-2026|Le 等人（2026）]]表明，一个 CD 模型可以从从未为诊断编写的题目中提取目标层面的信息。把 FCI、FMCE 和 EMCS 的题目映射到导论力学中的 14 个细粒度学习目标，并对来自 807 门课程的 24,394 份后测作答拟合 DINA，他们发现三套量表中有两套拟合良好（FCI RMSEA² = 0.033；EMCS = 0.022），且在 22 个"目标—量表"组合中有 19 个的分类准确率达到或高于低风险形成性基准。起约束作用的是属性结构，而不是题目质量：专家编码几乎原封不动地通过了模型审查——DINA 只提议修改 754 个"题目—目标"编码中的 14%，而编码者采纳了其中 20 个（2.7%）——然而模型无法区分三个*概念上嵌套*的能量目标（势能 0.675、能量守恒 0.705、动能 0.745），因为其中任意两个共享约 70% 的题目（Jaccard 重叠 0.67–0.73），违反了 DINA 的合取独立性假设，而同一量表上的动量目标达到了 0.820–0.917。更细的属性拟合得也更好而非更差：14 目标结构在三套量表上都比同一团队早先的四广义技能结构改善了模型拟合。限制掌握度能分得多细的，是题目重叠，而非编码错误。
- **用于个性化学习路径的贝叶斯 DINA：**[[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng 和 Huang（2026）]]把贝叶斯 DINA 模型（在 EdNet 数据集上训练，N=5,000）与知识空间理论和最短补救路径算法结合来生成个性化学习路径，并经由隐马尔可夫模型状态转移实证检验[[cognitive-offloading|认知负荷]]的中介作用（在 120 名学生上验证）——同时应对传统 DINA 模型由稀疏性驱动的收敛问题，以及个性化路径有效性背后未经检验的心理机制。
- **用语言基础替代 ID 嵌入。**[[process-grounded-language-cognitive-diagnosis-2026|Liu 等人（2026）]]用 LLM 构建的概念图式和过程基础的证据取代离散的学生、习题和概念标识符，从作答记录中校准每位学生的后验状态。在三个[[math-education|数学]][[online-teaching-and-learning|平台]]数据集上，该框架在 XES3G5M 上达到 83.51% ACC / 85.37% AUC、在 MOOC 上达到 87.16% ACC，而收益恰恰集中在经典认知诊断模型退化的地方：新概念（比 KCD 高 +4.60 ACC）和缺失的 Q-matrix 条目（+4.52）。消融掉结构化证据会把 MOOC 准确率从 87.16% 压到 78.95%，因此改进来自语言导出的结构，而非模型规模。（[[process-grounded-language-cognitive-diagnosis-2026]]）

## 为何重要

准确的诊断让教学针对真实的缺口，而不是一个笼统的"能力"分数——使[[automated-assessment]]能够解释学生*为何*出错、使[[feedback|反馈回路]]系统能够补救具体的[[student-modeling|知识状态]]。糟糕的诊断产出反面：教学瞄准了错误的概念。这正是[[psychometrically-aware-ai]]在预测准确度之外强调诊断效度的原因。

### 与知识追踪和智能辅导的关系

认知诊断位于[[intelligent-tutoring]]架构的核心，是[[knowledge-tracing]]在评价侧的对应物：

- **诊断 vs. 追踪——互补的时间视角。**[[knowledge-tracing|知识追踪]]追踪掌握度的*时间动态*——估计一个标量知识状态如何在习题间演化并预测下一次作答。认知诊断产出学习者当前持有哪些知识成分、技能或误解的*静态、细粒度快照*。导师两者都需要：用知识追踪排序接下来该教什么，用认知诊断知道*实际*错在哪里。基于[[item-response-theory|IRT]]和[[educational-measurement|测量]]的诊断模型，以及把题目映射到多个成分的认知诊断模型，把诊断这一侧实例化。

- **LLM 时代的诊断。**[[llm|LLM]]把诊断从选择题作答扩展到开放式、手写和会话式的作业，识别错误背后具体的[[misconceptions]]（例如正确答案掩盖缺陷推理的"正确答案陷阱"）。[[xie-hillm-cd-2026|HiLLM-CD]]用 LLM 做自动概念树构建和层级熟练度推断，弥合诊断与追踪。[[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati 等人（2026）]]进一步通过 ε-局部差分隐私把诊断联邦化到多个商业 LLM API 之上，表明在没有任何模型看到原始学生数据的情况下，准确、保护隐私的诊断是可行的。
- **把诊断与反馈分开是一条设计原则。** LLM 导师能可靠地确认正确步骤，却会过度拒绝有效的推理、过度认可错误——而准确的诊断并不必然产出可行动的[[feedback]]。因此 ITS 设计应把诊断组件与反馈/[[scaffolding]]组件分开（[[yasir-llm-tutoring-agents-2026]]）。

## 关联

认知诊断连接到[[knowledge-tracing]]、[[student-modeling]]、[[educational-measurement]]和[[assessment]]。它的洞见滋养[[intelligent-tutoring]]和[[adaptive-learning]]，而 LLM 时代的工作把它与[[intelligent-tutoring|AI 辅导]]中的误解识别联系起来。

## 关联概念

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## 关联文章

- [[llm-cognitive-diagnosis-handwritten-math]] — 基准测试：从手写数学作业中诊断认知技能的 LLM
- [[correct-answer-trap-misconceptions]] — 正确答案陷阱
- [[llm-misconception-difficulty-easy-trap]] — 简单陷阱：LLM 为何低估误解驱动的难度
- [[llm-student-misconception-identification]] — 对学生误解的 LLM 识别
- [[student-math-competence-clustering]] — 为学生数学能力建模的聚类
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — 用于显式问题求解者建模的认知智能体编译
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench：从模拟学习者中进行诊断
- [[huang-interpretable-knowledge-tracing-2026]] — 可解释的知识追踪
- [[xie-hillm-cd-2026]] — HiLLM-CD：LLM 概念树 + 层级熟练度推断
- [[yasir-llm-tutoring-agents-2026]] — 在 LLM 导师中分离诊断与反馈
- [[zhang-ct-ai-training-test-2026]] — AI 训练测试中的计算思维（CTAT）
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 面向个性化学习路径的贝叶斯认知诊断
- [[personalized-neural-cognitive-architecture-search-2026]] — 面向学习者画像的 AutoML 个性化神经认知架构搜索
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 带亲和映射的成果导向知识追踪
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — 保护隐私的异质多 LLM 联邦诊断
- [[llm-common-modeling-mistakes-formalisms-2026]] — 用 LLM 生成、算法验证的纠错变换大规模挖掘常见建模错误（Killich 等人 2026）
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic：从既有物理概念量表对 14 个学习目标做基于 DINA 的诊断（Le 等人 2026）
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLM 知识概念标注与经校准的概念级知识状态
- [[llm-distractor-generation-student-reasoning-2026]] — 作为诊断性题目设计任务的基于误解的干扰项
- [[misconception-acquisition-dynamics-llms-2026]] — 错误进入解法之处即诊断瓶颈
- [[pivot-generative-video-tutors-stem-2026]] — 从内容生成到学习支持：面向 STEM 学习的教学引导式生成式视频导师
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn：在人机协同学习回路中学习其学习者的智能体导师
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu：面向学与教的开放基础模型
