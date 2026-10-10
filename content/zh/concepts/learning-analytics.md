---
title: 学习分析
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
translation_of: concepts/learning-analytics
source_updated: "2026-10-07T09:45:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习分析（learning analytics）** —— 为理解与优化学习而对关于学习者及其情境的数据所做的测量、收集、分析与报告。AI 已把学习分析从描述性仪表盘转变为预测性与规定性系统。

## 值得思考的问题

- 多数人以为收集更多学习数据自动改进教育。本页论证，分析只有反馈进干预才变得有意义——否则它们只是描述或标记而不改变学习。你在哪里见过收集后从未导致任何行动的数据？
- 想象一个仪表盘告诉你某学生"有风险"——一个预测。是什么把它与教师或机构真正能执行的可操作指导区分开？本页提示，仅预测不够。
- 本页指出，AI 已把学习分析从描述发生了什么，推进到预测将发生什么、规定接下来做什么。这三种世代你体验过哪一种，其他的缺了什么？
- 在一项研究中，三个不同的 AI 模型对同一学生数据产生了截然不同的支持计划，且分析指标与推荐帮助之间的联系大多微弱。这对把 AI 的建议照单全收意味着什么？
- 学习分析处于一种隐私张力中：数据越细，越暴露——干预也越有力。对于关于你或你的学生收集什么、由谁决定，你会把线画在哪里？

## 引言

### AI 增强的分析

- **预测性分析：**对学习者交互数据的[[reinforcement-learning|机器学习]]预测结果——从[[at-risk-students-ml-prediction|风险识别]]到[[knowledge-tracing|知识状态估计]]。
- **验证与预测同样重要。**[[schuetze-knowledge-tracing-forgetting-2026|Schuetze、Yan 与 Carvalho（2025）]]表明，预测性知识状态模型（BKT、BKT-with-Forgetting、AFM）在事后拟合完整会话历史时看似准确，然而在**基于时间的交叉验证**下——从先前会话预测下一会话，正如分析的实际部署——它们高估学习者表现、漏掉间隔/遗忘动态，并可能错误排序练习条件。对分析的告诫是：回顾性拟合可能掩盖纵向数据上前向预测效力的不足，因此指标与仪表盘模型应当走步验证（walk-forward）。
- **验证估计背后的题—属性映射。**把题目链接到属性的 Q 矩阵是一个假设而非数据：918 道分析思维题中 14 题的条目被拒，一经修正，一个虚假的知识状态模式从 14.2% 降到 3.8%——因此掌握度分析应当审计其 Q 矩阵，而不只是其预测拟合（[[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang，2026]]）。
- **[[curriculum-design|课程]]锚定的预测性分析：**[[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh 等人（2026）]]在成果导向教育（OBE）内估计知识状态，直接从 LMS 交互与达成数据追踪课程成果，用 OBE 亲和映射（课程—项目成果关系）构造概念链接，并用记忆增强网络建模跨成果影响——在真实大学工程数据上达到 89.81% AUC，胜过 DKT、DKVMN、EKT 与 SimpleKT，而在通用 ASSISTments 数据上仅保持竞争力（非优越）。
- **带行动窗口的可解释进度预测：**[[zhang-ml-student-progress-programming-2026|Zhang、Jeffries 与 Koprinska（2025）]]从内容交互日志特征预测大规模在线[[cs-education|编程]]课程中的模块级学生进度，使用与黑箱准确度相当（85–91%）的玻璃箱决策树，在模块截止前 7–8 天标记"未提交"的退课结果——一个明确、实时的[[teacher-role|干预]]窗口，而非一个单纯的风险旗标，以及对脱节—有风险、脱节但成功、投入的高表现者画像的探索性类型学。
- **跨机构的联邦式、可解释风险建模（2026）。**[[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch 等人（2026）]]通过联邦学习跨模拟机构训练一个多任务（表现 + 退课）模型，把风险建模扩展到单一机构预测之外，使原始学生数据从不离开各机构。在受控异质性（标签偏斜、类别不平衡、时间漂移、结构性缺失）下，模型保持排序准确度（OULAD AUC 0.918）与结构性稳定的特征重要性排序，然而概率校准漂移——把排序表现与概率可靠性解耦。对早期预警系统而言，这是一个告诫：基于阈值的干预可能需要逐机构校准，也是一个支持同时沿区分度、校准、鲁棒性与可解释性评估分析的论证。
- **合成数据验证是隐私保护分析的前提。**对四个年度学习习惯队列（十八周内 117–120 名学习者）的合成版本的结构检查发现，分区描述子在四个队列中的两个上高度一致，而逐周变化无一例外地低 2.6 到 4.9 倍（变异系数 0.086-0.152，对真实队列的 0.399-0.539），且在 25 项验证请求中，合成试点数据上得出的发现只有 36% 在真实数据上得到确认（[[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake（2026）]]）。
- **投入度分析：**[[student-engagement|投入度测量]]与[[engagement-intensity-learner-modeling|强度建模]]量化学生如何与 AI 系统交互。
- **反馈分析：**[[teaching-feedback-classification-benchmark|反馈分类]]与[[ai-feedback-quality|质量评估]]分析学生收到的反馈。
- **网络分析：**[[misiejuk-cognitive-offloading-prompting-2026|共现网络分析]]与[[epistemic-emotions-collaborative-problem-solving|认识网络分析]]揭示交互模式。
- **隐私张力：**随着分析变得更细粒度与 AI 驱动，[[privacy]]关注增长。
- **面向学生数据的治理审查框架。**LEAGUE 提出六根支柱——合法性、公平性、能动性、治理、效用与设计伦理——把 FERPA 与 GDPR 合规当作底线，并建议在模型漂移时定时重估（[[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar（2026）]]）。

**对课程并发建模，而非仅建模序列。**TRACE 给学期中每门课程相同的位置编码，联合预测课程与成绩把成绩预测误差降到 0.1339 MAE——比仅成绩的 transformer 降低 46.4%——在十年机构数据上（[[trace-course-grade-prediction-2026|Savala（2026）]]）。

### 学习分析循环

学习分析被规范地框定为一个循环：学习者活动产生数据，数据被处理成测量与指标，再被翻译为**干预**——而干预又反馈进学习者活动以闭合回路。干预步骤是把分析与单纯监控或预测区分开的东西：没有它，分析描述并标记，却永不改变学习。这个循环是理解 AI 工具（仪表盘、反馈生成器、规定性推荐器）在管线中处于何处、自动化了哪一步的组织框架。

面向学习者的仪表盘的好坏只取决于其触达：在一项香港九年级写作研究中，一个提示分类器达到宏 F1 0.757，46 名学生中约三分之一打开了三个生成式 AI 使用仪表盘，而抄袭与学习导向提示上的组差不显著（[[learning-analytics-genai-secondary-writing-2026|Fong 等人（2026）]]）。

质性数据的频率编码是入口而非裁决：在一项有十名参与者的研究中，有些教师把频率编码读作一种有成效的进入方式，另一些则警告它们掩盖了稀有但关键的回应，因此该设计把每个聚合视图都链接回逐字学生文本（[[wordstream-glass-learning-analytics|Nguyen 等人（2026）]]）。

### 从描述到干预

学习分析在知识库中经历了三个世代：描述性（发生了什么？）、预测性（将发生什么？）与规定性（我们该做什么？）。AI 使能规定性层——直接触发[[feedback|教学干预]]的分析。一个关键前沿是**可操作性鸿沟**：[[sc2r-counterfactual-recourse-educational-2026|SC2R（Le、Abel & Laforge 2026）]]表明，仅预测对决策支持不足，且反事实补救（counterfactual recourse）只有在建议语义可行且机器可检验时才在操作上有意义——受时机、预算、不可变性与可用性经由 SHACL 验证约束，而非仅模型有效。这把该领域从风险分数推向机构真正能实施的推荐，并保留[[human-in-the-loop-ai|人类监督]]。

对规定性层的直接实证检验来自[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等人（2026）]]，他们请三个 LLM 为 4,500 个[[simulating-students|合成学生]]情境推荐支持计划。

一个互补的、以教师为中心的分析如何抵达课堂的检验来自[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain 等人（2026）]]，他们设计了一个学习分析仪表盘（DashED），在两个混合情境中向教师传达 ML 推导的[[self-regulated-learning]]画像。他们 100 名教师的研究显示，分析的*呈现*本身是行动的一个障碍：教师系统性地偏好更简单、更传统的图表（条形图、饼图），即使更复杂的设计（如热图）产生更丰富的洞察，且更高的[[visualization|可视化素养]]预测更深、更详细的解释（如更多教师识别时间序列数据中的趋势）。在组间比较上，教师偏好叠加而非并置，偏好全信息图而非显式差异编码。教师提出的行动由所呈现的内容与其[[teacher-role]]层级塑造，而非图型——大学教师偏好每周测试与课程级调整，而职业教师提出直接的、个体化的辅导——这强调规定步骤既取决于分析如何可视化与语境化，也取决于底层模型。他们的发现是告诫性的：LA 指标与推荐支持之间的相关性大多微弱，跨模型推荐对同一学生分歧剧烈，且支持常被分配给最不需要的人。作者结论，当前 LLM **尚不足以作为大规模学生支持的可靠规定模型**，强化了规定步骤仍需验证、微调与人类监督而非开箱即用的自动化。

分数之后的一步——谁得到支持，以及它是否被分配到需要之处——属于[[student-support-and-success|学生支持与成功]]，它承载着本页规定层所供给的外联、转介与分配证据。

一个诚信结果进入同一预测层。[[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar（2026）]]从[[video-education|Moodle 与视频播放器]]痕迹的前八周预测 AI 辅助作弊风险，以逻辑回归达到 AUC 0.763，并论证该信号恰恰因为它抵达于考试之前而非考试期间而可用。

一条互补的线索针对分析本身的*解释*。[[factria-responsible-institutional-analytics-2026|Marques 等人（2026）]]的 FACTRIA 框架组织了指标背后的偏置因素——管线、机构、课程与人口——而一个反思提示聊天机器人把 11 位利益相关者每个案例权衡的子因素从 1.41 提到 3.45（d = 2.15），使他们从直接读法转向条件读法。

### 方法与网络分析

网络方法是学习分析的核心：[[network-analysis|转移网络分析（TNA）]]建模学习者行动的时间序列（如[[conversational-ai|聊天机器人]]支架写作中的修改与聊天循环），而[[network-analysis|认识网络分析（ENA）]]映射代码/构念如何在活动中共现——二者共同揭示学习的*过程*与学习者[[student-ai-interaction|AI 交互]]，而非仅其结果。（[[penny-transition-network-analysis-efl-writing-2026]]）（[[tracing-genai-literacy-interaction-patterns]]）

- **自导向行为的序列 + 马尔可夫链分析。**[[an-goel-self-directed-modeling-2026|An、Hammock 与 Goel（2025）]]把活动序列分析、层次聚类与马尔可夫链模型结合在 315 名在线学习者（他们在 VERA 中构建了 822 个生态模型）的点击流上，把九个细粒度的、基于转移的行为簇蒸馏为三个更广的模式（观察、建构、探索）。他们的工作证明，序列分析与马尔可夫链建模结合，可以在完全没有人口或情境数据的[[self-directed-learning|自导向]]任务中发现有意义的行为。
- **LA 与生成式 AI 以不同方式塑造学习设计（2026）。**[[claassen-learning-analytics-genai-learning-design-2026|Claassen 等人（2026）]]用 ENA 比较 11 个教师焦点小组中学习分析与[[generative-ai]]如何影响[[learning-design]]决策。LA 的讨论集中于情境信息、课程级设计与创造性[[problem-solving]]（LA 用于诊断投入与定位支持），而生成式 AI 的讨论集中于[[assessment|评估设计]]与面向学生[[self-determination-theory|自我决定]]的设计（生成式 AI 用于构思与评估开发）。情境与[[creativity]]在两者中都是核心——提醒分析只在[[pedagogy|教学]]语境与教师自主之内为设计提供信息。
- **设计分析：挖掘计划的活动序列而非痕迹（2026）。**[[learning-paths-patterns-learning-design-2026|Divjak、Svetec 与 Horvat（2026）]]把马尔可夫链与序列模式挖掘应用于一个开放学习设计工具中 554 门课程计划的 29,064 项教与学活动的*设计*序列。转移矩阵在评估到讨论处达到峰值（0.332），自转移主导练习（0.317）与习得（0.292），最强的连续规则是习得到评估到练习到练习（置信度 0.743，提升度 1.449），而最频繁的四步路径是习得、练习、练习、评估（120 次出现）。讨论与评估是最可达的类型，而生产最远且最零散。该研究提醒，学习分析不必始于 LMS 痕迹：设计时数据可以在任何学生到来之前暴露一门课程的教学语法，尽管作者强调与翻转、探究本位或[[project-based-learning|项目本位]]设计的相似并非意图的证据。
- **自我解释的蒸馏 LLM（2026）：**一个两阶段管线把一个黑箱学习分析估计器及其事后解释蒸馏成一个小的、开放权重的[[llm]]，它同时返回个体级估计与自然语言解释。一项忠实性优先的审计评估叙述是否与它们所描述的归因匹配；[[simulation]]显示近乎无损的恢复（r > .90），以一位先知导师（oracle mentor）为前提，为分析提供了一条更透明、可部署的路径（[[distilling-self-explaining-lm-learning-analytics-2026]]）。
- **LA 本位教育干预的使能者（2026）。**[[learning-analytics-to-educational-interventions-2026|Svetec、Divjak 与 Kadoić（2026）]]经 Delphi + AHP + SNAP 识别并排序了可信 LA 本位教育干预的七个使能者：[[governance|机构]]战略取向、教学性及其他[[research-methods-aied|研究]]基础、可用资源、教学性支持、伦理与数据治理、利益相关者参与与质量保证。机构战略取向排名最高（且对其他使能者影响最大），可用资源次之。[[trust|可信性]]（伦理合规、透明/无偏见算法、教学有效性）被框定为前提，缺此则 LA 本位干预无意义。
- **LLM 交互深度预测任务质量但不预测回忆（2026）。**[[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris（2026）]]把回合级 LLM 对话遥测（深度/体量/节奏）链接到[[learning-gains|学习结果]]：寻求解释的"深度"独立预测了被标记的任务质量（β = 6.27），但不预测即时回忆——这是细化驱动的理解与提取驱动的巩固之间的分离，对 LA 中如何测量与评估[[llm]]交互有影响。

- **共享的交互单位缺失。**在来自 33 项研究的 46 个分类中，没有共享的元特征——相似的标签命名不同现象——因此该综述提出*交互片段*（interaction episode），一个目标导向的有界交换，作为把对话与技能习得相关联的单位（[[student-llm-interaction-taxonomy-review-2026|Borchers、Jansen 与 Weidlich（2026）]]）。
- **模拟协作话语以供学习分析。**[[llm-agents-collaborative-problem-solving-simulation-2026|Fang（2026）]]用微调的、参与者特定的 LLM 智能体再现协作问题解决对话，经认识网络分析验证（ENA 距离 0.17，置换 p = 0.65）。该方法为学习分析研究者提供了一条可扩展的方式来生成真实的协作话语，以研究交互动态、轮流与主题代码轨迹，而无需收集新的人类数据。
- **开放、可复现的数据与就绪痕迹的分析。**[[astra-multi-agent-tutoring-benchmark-2026|ASTRA]]发布了一个合成[[benchmark]]，带就绪痕迹的 schema（N=540；360 个会话；1,440 个片段），用于分析协作编程中的交互与参与平衡。日志与痕迹数据是本领域文献中[[self-report-measures|自报]]的天然制衡：同一构念常被测量两次，一次靠问、一次靠观察，而两者不总是一致。另有一个带 SHAP 分析的探索性 ML 框架，识别了与大学生预期学业 ChatGPT 使用最相关的学习相关构念，优先[[explainable-ai|可解释性]]（[[determinants-chatgpt-use-higher-education-2026]]）。
- **可复用的分析基础设施，仅在内部验证（2026）。**[[a4l-analytics-pipeline|Bai 等人（2026）]]通过改变配置值而非代码复现了佐治亚理工三个 AI 助手的已发表发现，尽管该主张依赖对既有单机构数据集的重分析，且那一次能力扩展由内部人完成。

### 关联

学习分析连接到[[knowledge-tracing]]（核心分析）、[[formative-assessment]]（分析驱动的评估）、[[student-modeling]]（分析所填充的学习者表征）、[[privacy]]（[[ethics|伦理]]约束）与[[edtech-platform]]（分析的部署处）。由于规定性分析日益在[[simulating-students|模拟学习者]]上被评估——合成学生队列在受控测试中替代真实队列——学习分析也连接到学生模拟。

- **仪表盘使什么可见，决定教师对什么行动。**[[ai-supported-lecturer-decision-making-2026|Köroğlu 等人（2026）]]综述了 27 项实证研究（2016–2025），跨八种决策类型建立了 AI 支持的讲师决策的社会技术分类法：教学、课程、评估、反馈、学习环境、情感、行政与伦理。学习分析仪表盘是最常被报告的系统，而编码显示支持集中于行为文本与日志数据能告知的教学、反馈与评估决策上，而情感、伦理、课程与学习环境决策很少被支持。作者把这解读为一种注意效应而非能力限制：因为系统使行为学生数据可见且可操作，动机、[[metacognition]]、情感与环境关注就落在数据邀请讲师考虑的范围之外。

过程级仪表化是描述层向下的下一步。[[pulla-parsons-problem-tool-2026|Prol 等人（2026）]]扩展了一个[[open-source|开源]] Parsons 问题平台，把每一次块的放置、移除与提交记录为时序痕迹，把每次提交与逐块正确性着色和尝试历史配对，并可选地把痕迹穿过一个为教师审阅标记复发困难模式的[[llm]]管线。在 68 名高年级 Java 软件设计课学生与 36 名 Python 入门课学生的分析中，浮现出同样的三个困难——选错异常类型、用 `return` 替代 `throw`、控制流顺序错误——这些是正确性与尝试计数无法暴露的，因为它们回答的是*安排是否正确*而非*过程是什么*。AI 充当[[teacher-role|教师]]的解释者而非学生的评分者，其输出被框定为关于一个班级困难的可审阅假设，而非一个分数。

## 关联概念

- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — 预测所供给的支持侧：转介、分配，以及它们是否移动的结果

## 关联文章

- [[factria-responsible-institutional-analytics-2026]] — 负责任的机构分析：借 AI 支持解释偏见

- [[ai-supported-lecturer-decision-making-2026]] — 高等教育中 AI 支持的讲师决策
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 面向隐私保护学业风险建模的联邦式与可解释学习分析（Villegas-Ch 等人 2026）
- [[llm-interaction-depth-task-quality-recall-2026]] — 学生问什么重要：LLM 交互深度、任务质量与即时回忆（Tsiligkiris 2026）
- [[learning-analytics-to-educational-interventions-2026]] — 从学习分析到教育干预：可信 LA 本位干预的使能者（Svetec、Divjak & Kadoić 2026）
- [[claassen-learning-analytics-genai-learning-design-2026]] — 学习设计决策中的 LA 与生成式 AI
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — 从学生风险预测到 SC2R：反事实补救
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 面向个性化学习路径的贝叶斯认知诊断
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 为学习分析蒸馏自我解释的 LM
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI 能为多样的学生画像递送恰当支持吗？一项大规模评估
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — 微调的、参与者特定的 LLM 智能体再现协作问题解决对话（Fang 2026）
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA 面向多智能体辅导与参与平衡协作的合成基准
- [[determinants-chatgpt-use-higher-education-2026]] — 高等教育中未来 ChatGPT 使用的 ML/SHAP 决定因素
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — 使 ML 发现对混合课堂中的教师可及
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 带亲和映射的成果本位知识追踪
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — 对 554 门课程中 29,064 项计划活动的马尔可夫链与模式挖掘，揭示一条由习得引领、巩固练习的设计语法
- [[pulla-parsons-problem-tool-2026]] — Pulla：Parsons 问题中的过程级行为痕迹与面向教师的困难分析（Prol 等人 2026）
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: 对合成教育数据的结构检查
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar（2026）—— 从学期早期 LMS 痕迹预测 AI 辅助作弊风险（AUC 0.763）
