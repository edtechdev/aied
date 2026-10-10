---
title: 自适应学习
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:30-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
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

> **自适应学习**——依据个体学习者特征与表现来调整内容、节奏与教学策略的人工智能驱动教育系统。自适应学习是大量[[ai-education|教育中的人工智能]][[research-methods-aied|研究]]的操作性目标：用[[student-modeling|学生模型]]来个性化教学。

## 值得思考的问题

- “自适应”“个性化”“个体化”与“定制化”学习常被互换使用——但研究表明它们并不相同。你假设每个词意味着什么，这些假设又可能在哪里出错？
- 一个自适应系统依据一个关于你知道什么的模型来调整内容与难度。如果那个模型建立在关于你学习的浅层或不可靠的信号之上，会出什么问题？
- 一个关键发现是，从正确答案推断掌握的系统可能过早停止练习——在你学会何时应克制某个行动之前。你能想到一种技能，反复“做对”却仍让你在真实情境中手足无措吗？
- 过度适应可能移除学生深入学习所需的生产性挣扎。如果人工智能在你一挣扎的那一刻就把事情变简单，学习者到底失去了什么？
- 元分析表明，适应机制——而非具体的工具代际——驱动[[learning-gains|学习增益]]。如果“如何”比“哪个工具”更重要，你在选择自适应软件时应当看什么？
- 基于 LLM 的导学系统如今能适应语言与解释风格，而不只是难度。个性化解释一件事的方式何时有助于学习，何时又可能悄然削弱学习者自身的能动性？

## 引言

### 核心机制

- **测量—建模—适应循环：**[[knowledge-tracing|知识追踪]]估计学生知道什么，[[student-modeling|学生建模]]表征学习者，系统据此调整难度、内容与[[feedback|反馈]]。
- **规模化的个性化：**[[personalized-learning|个性化学习]]系统用自适应算法为每个学生提供独一无二的学习路径。[[deeptutor|DeepTutor]]与[[ai-powered-personalized-learning-elementary-fractions-2026|小学数学分数导学]]在实践中展示了自适应的个性化。
- **内容排序：**[[adaptive-pretesting-retention|自适应预测试]]与[[adapt-adaptive-lesson-plan-transformer|课程计划变换器]]优化所呈现内容的顺序与类型。
- **智能导学系统整合：**[[intelligent-tutoring|智能导学系统]]是典范的自适应学习平台，把诊断与适应结合在一起。
- **AutoML 驱动的画像与诊断：**传统的教育模型难以处理多来源、异质的学习行为数据，这限制了学习者画像与诊断模型的开发。一个由自动化[[reinforcement-learning|机器学习]]驱动的个性化神经认知架构搜索框架，把[[multimodal|多模态]]教育数据与异质方法整合，生成针对异质学习者画像量身定制的诊断模型，并支持对学习过程的动态而非静态分析。

### 有效性证据

本知识库记录的证据是混合的：当适应建立在可靠的[[student-modeling|学生模型]]上时，自适应系统改善结果，但校准不良的适应可能损害学习。[[personalized-learning|个性化研究]]区分有效的适应与表面的定制。[[khalifeh-redefining-personalized-learning-ai-2026|系统综述]]发现，“自适应”“个性化”“个体化”与“定制化”学习的使用并不一致——因此效应量在很大程度上取决于适应如何被操作化，而该领域呼吁一个统一的框架。

一项遵循 PRISMA 2020 的综述把 959 条记录筛到 22 项高等教育干预，把自适应路径与推荐系统算作主要的人工智能应用，但多数研究改善的是既有实践而非变革它（[[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh 等（2026）]]）。

**驱动适应的是教学法基础，而非技术能力。**一项对 127 项智能导学研究的 15 年综述发现，多数系统围绕技术能做什么而非一个明示的教学原则构建，并给出智能导学系统的平均增益约为 20%，而人类导学最高达 98%（[[zerkouk-comprehensive-review-its-2025|Zerkouk 等（2025）]]）。

在一项为期两年的学区 RCT 中，约束性的瓶颈是采用率而非适应机制：把报名压缩为一步，仅凭设计变更就把首次会话的采用率从约 45% 提到 83%，而意向处理增益随采用率上升而增长（[[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos 等（2026）]]）。

一项遵循 PRISMA 的、覆盖 44 项研究的综述发现，参与度文献偏向行为参与、在智能体参与上最薄，并报告了一种新奇效应——在关于 ALEKS 与 W-Pal 的纵向研究中，一旦工具的新鲜感消退，参与度随时间下降（[[simon-student-engagement-adaptive-learning-2026|Simon、Zeng 与 Fryer（2026）]]）。

### 人工智能时代：基于 LLM 的适应及其风险

[[generative-ai|生成式人工智能]]扩展了自适应系统能做的事——对话式[[agentic-ai|智能体式]]导学系统、基于[[rag]]锚定的内容，以及由[[llm]]驱动的[[intelligent-tutoring|导学]]——它们适应的不只是题目难度，还有语言与解释风格（如[[learnmate2-llm-adaptive-learning|LearnMate-2]]、[[deeptutor|DeepTutor]]、[[chudziak-ai-math-tutoring-platform|多智能体自适应导学]]）。然而，基于 LLM 的适应引入新的风险：没有可靠的[[student-modeling|学生模型]]，适应可能建立在浅层信号上；过度适应可能减少学生所需的生产性挣扎（见[[desirable-difficulties|合意困难]]、[[cognitive-offloading|认知卸载]]）；而个性化与保全学习者[[agency|能动性]]之间的平衡是一个开放的设计问题（见[[agentic-ai|智能体式人工智能]]）。有一种由学习者请求的适应变体完全不需要任何[[student-modeling|学生模型]]：在 Sidorkin（2026）的研究生课程中，阅读材料只在学生提出追问、要求重构、深化、简化或本地化时才调整，而面向理解的请求可靠地产出更密集的脚手架（比基线文本多 3.4 到 8.7 倍的定义性标记），这就是为什么要求每个阅读至少三个追问，把材料变成了交互。它也把适应的负担移回学习者身上：这里的适应只在学生知道自己该要求什么时才发生。

### 与个性化学习和智能导学的关系

自适应学习常与[[personalized-learning|个性化学习]]混为一谈，但二者有别。**自适应学习**是*机制*——基于学习者模型对内容、节奏与难度的实时调整。**个性化学习**是更宽的*目标*，即把整个学习体验针对个人裁剪，而实时适应是其一种实现。自适应系统是走向个性化的典范*手段*。[[intelligent-tutoring|智能导学]]是经典的*平台*：智能导学系统把诊断（学生建模、知识追踪）与适应结合，而基于 LLM 的导学系统以对话方式适应。与[[personalized-learning|个性化学习]]一起，自适应学习是[[student-modeling|学习者建模与自适应教学]]家族的应用侧成员——消费由[[student-modeling|学生建模]]、[[knowledge-tracing|知识追踪]]与[[cognitive-diagnosis|认知诊断]]产出的学习者表征。

### 研究证据

- **关于自适应加人工智能工具的[[meta-analysis-systematic-review|元分析]]证据。**[[burneo-can-edtech-close-learning-gaps-2026|一项世界银行的元分析]]在共同量表上合并了 14 项[[rct|RCT]]中的自适应计算机辅助学习、智能导学系统与生成式人工智能，估计平均学习增益约 0.125 个标准差，而两代技术之间没有显著差异——证据表明驱动增益的是适应机制，而非具体的工具代际。
- **在动态领域中比较自适应算法。**[[graph-its-adaptive-algorithms-2026|基于图的智能导学系统研究]]在一个基于图的知识表征框架中，为动态课程比较了多种自适应学习算法（包括贝叶斯知识传播与直觉主义模糊逻辑）。

- **强化学习作为一种适应机制，经实证描摹。**[[riedmann-reinforcement-learning-education-review-2026|Riedmann、Schaper 与 Lugrin（2025）]]综合了 89 项教育中的强化学习研究，发现适应分为与内容相关的（教学排序／内容排程，n = 53）和与引导相关的（提示、[[feedback|反馈]]、活动选择，n = 36）机制——强化学习在引导性适应上对基线取得统计显著优越性的频率，高于在内容排程上。他们建议在自适应学习中使用免模型强化学习，并告诫在所综述的研究中，经典强化学习的表现优于深度强化学习。

- **基于正确性的适应可能过早停止练习。**[[deceptive-overgeneralization-adaptive-learning-2026|An、McLaren 与 Stamper（2026）]]发现，从正确性推断掌握的自适应系统，有在学习者遇到“所学行动应当被克制”的情境之前就终止练习的风险——使欺骗性过度泛化无从被发现。他们建议在掌握性停止规则触发之前纳入“不作为”检测任务，使适应检验的是条件性理解（知道何时克制一个行动），而不只是正确性。

- **掌握的一连串答对并不是持久的学习。**在一项有 6,000 名中学生的实地实验中，一个人工智能支持的“三连对”掌握规则把平台定义的达成度提高了约 28.7 个百分点，却没有改善一周后的延迟测验，因此掌握指标需要对照延迟学习来验证，而不能代替它（[[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos 等（2026）]]）。

- **适应认知参与的*类型*，而不只是难度。**[[adaptive-scaffolding-cognitive-engagement-its|Tithi 等（2026）]]发现，BKT 与深度强化学习策略分配引导式（主动）或含错（建构）样例，在一个 113 名学生的逻辑导学系统中都胜过随机分配（后测 72.3 与 72.5 对 65.7），其中 BKT 对低先前知识的学生最有利，而深度强化学习对高的最有利。

- **更多反馈不是更好的反馈。**在一门为期八周、有 194 名学生的自适应随机过程课程中，指令性、信息性与变革性反馈被吸收的方式不同，而变革性反馈与认知过载相关，而非与更好的调节相关——适应必须匹配学习者的阶段与需要，而不是把反馈密度最大化（[[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh 与 Fromm（2026）]]）。

- **参与画像作为适应的目标。**[[an-goel-self-directed-modeling-2026|An、Hammock 与 Goel（2025）]]追踪了 315 位在线学习者在 VERA 中构建 822 个模型的过程，把他们的参与分为观察、建构与探索画像，发现学习者倾向于从聚焦建构的行为走向更完整的、由假设驱动的探索，而观察贯穿各阶段持续存在。他们主张，自适应与个性化设计应当识别这些画像，并把反馈对准目标（例如推荐相似模型，或支持更深的概念理解），使表面层的观察者走向更具整合性的完整周期建模。

- **一个被读而未被写的记忆不是适应。**CoLearn 的冻结记忆对照在读取学习者画像的同时提供固定题目，针对真正薄弱技能的题目份额从 0.72 降到 0.57，最终掌握误差高于自适应条件（[[colearn-agentic-tutor-co-learning-loop-2026|He 等（2026）]]）。

- **增益来自排序，而不是更聪明的导学系统。**[[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung 等（2026）]]用 LLM 引导的强化学习训练了一个个性化导学系统，并在台北十所[[k-12|高中]]的一门为期五个月的 Python 课程中部署，把 770 名学生随机分配到自适应与固定“由易到难”的题目序列之间。自适应排序把面对面的、无辅助的[[summative-assessment|期末]]成绩提高了 0.156 个标准差（加入控制后 0.150 个标准差）——而中介分析把这一效应几乎完全归因于参与（经任务时长 0.185 个标准差，经尝试次数 0.149 个标准差），而非更易或更难的题目，且增益对初学者与较低层级学校最大。自适应的杠杆是练习的顺序，而不是对话的质量。

- **把掌握决策保持为基于规则，并把机器学习限于监控。**一个为 30 名六年级学生开设的为期八周的自适应 STEM 项目，以基于规则的掌握支配路径，同时用机器学习追踪表现，使适应可审计，但由于没有前测且每个条件只有一个班，其增益只是一个待本地验证的试点模板（[[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet 等，2026]]）。

- **适应瓶颈属性，而不是薄弱的均值。**知识状态的转移建模把分析性思维排为最难习得、最易丧失——前向转移概率最低 0.31、后向最高 0.22–0.23——这使对被标记属性的重练成为比整体掌握更锐利的适应目标（[[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng 与 Huang（2026）]]）。

- **从过程序列适应，而非聚合分数。**[[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong、Bulathwela 与 Cukurova（2026）]]通过挖掘 65 名学生三人组对话轮次的*顺序*导出脚手架规则，把自适应学习从聚合的行为或表现测量移向个体过程序列；最大化的脚手架提高了任务内行为，但也带来了脚本化，且该设计尚未被检验。

## 关联概念

- [[online-teaching-and-learning]] — 在线教学与学习
- [[knowledge-tracing|知识追踪]]
- [[personalized-learning|个性化学习]]
- [[intelligent-tutoring|智能导学]]
- [[student-modeling|学生建模]]
- [[scaffolding|脚手架]]
- [[cognitive-diagnosis|认知诊断]]
- [[llm|LLM]]
- [[learning-analytics|学习分析]]
- [[higher-ed|高等教育]]
- [[k-12]]
- [[formative-assessment|形成性评估]]
- [[behaviorism|行为主义]]
- [[ai-technologies]] — 总括：人工智能技术与方法（模型、LLM 训练、机器人、RAG、智能体）
- [[recommender-systems-and-learning-paths|推荐系统与学习路径]]
## 关联文章

- [[deceptive-overgeneralization-adaptive-learning-2026]] — 欺骗性过度泛化：自适应掌握可能在学习者知道何时克制一个行动之前就停止练习（An、McLaren 与 Stamper，2026）
- [[turano-ai-tutoring-not-a-monolith-2026]] — 人工智能导学并非铁板一块：我们实际知道的（Stanford SCALE/NSSA 简报）
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — 自适应学习平台中学生参与的系统综述
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — 虚拟导学与计算机辅助学习：一项关于采用率与学习的实验
- [[making-ai-tutoring-productive-mastery-math-2026]] — 让人工智能导学变得有成效：基于掌握的数学练习
- [[chudziak-ai-math-tutoring-platform]] — 自适应／个性化多智能体数学导学（Chudziak 与 Kostka，2025）
- [[khalifeh-redefining-personalized-learning-ai-2026]] — 重新定义个性化学习：系统综述
- [[deeptutor|DeepTutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — 针对学习者准备度校准的导学类人工智能对通用聊天机器人
- [[context-based-ai-secondary-chemistry-2026]] — 中学化学中的情境化 7E 加人工智能教学
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — 面向深度学习的自适应人工智能 STEM 项目
- [[graph-its-adaptive-algorithms-2026]] — 面向动态领域的基于图的智能导学（2026）
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 面向个性化学习路径的贝叶斯认知诊断
- [[adaptive-scaffolding-cognitive-engagement-its]] — 智能导学系统中的自适应 ICAP 脚手架（BKT 对 DRL）
- [[burneo-can-edtech-close-learning-gaps-2026]] — 跨 14 项 RCT 合并自适应与人工智能赋能工具的元分析
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — 系统综述：自适应路径位列主要的高等教育人工智能整合用例
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — 自适应题目排序胜过固定排序：无辅助考试提高 0.156 个标准差，由参与而非难度中介（Chung 等，2026）
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn：在人机协同学习循环中学习其学习者的智能体式导学系统
