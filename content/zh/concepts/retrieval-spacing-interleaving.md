---
title: 提取练习、间隔练习与交错练习
created: "2026-09-18T12:20:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
pedagogy: [desirable-difficulties, metacognition, self-regulated-learning, mastery-learning, prior-knowledge, transfer-of-learning]
foundations: [cognitive-offloading]
technology: [generative-ai, llm]
assessment: [formative-assessment, assessment]
level: [higher ed, k 12]
audience: [instructors, learners, instructional designers]
page_kind: [synthesis]
confidence: high
translation_of: concepts/retrieval-spacing-interleaving
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

> **提取练习（retrieval practice）、间隔练习（spacing）与交错练习（interleaving）** —— 三种让练习变得费力、并因此让所学内容得以保持的具体学习技术。提取练习要求学习者凭记忆产出答案，而非辨认答案；间隔练习把练习分散到时间之中，而不是集中到一次练习里；交错练习则把不同类型的题目混在一起，而不是按类型分组排列。把三者统一起来的是一个共同特征：它们都会让练习*过程中*的表现变差，同时提高练习*之后*的保持量——这就是 [[transfer-of-learning|表现与学习之差]] 的操作化形式。它们是 [[cognitive-psychology|认知心理学]] 的主力技术，而在 [[ai-education|AI 支持的学习]] 中，它们恰恰是 [[generative-ai|生成式 AI]] 最容易抹除的具体行为，因为一个随问随答的 [[llm|大语言模型]] 会取消提取、压平时间安排、抹平类型混合。本页是讲*技术*的一页。这些技术背后的原理——Bjork 的努力与学习之间的权衡、为什么更难的练习产生更持久的学习——在 [[desirable-difficulties]] 页展开；本页覆盖每种技术是什么、语料库中的研究测量了什么，以及 AI 如何实现或破坏它们。

## 值得思考的问题

- 你是否曾把一章反复读到觉得熟悉，一周后却讲不出来？重读到底给了你什么？
- 提取练习意味着在核对之前先凭记忆作答。当 AI 助手只隔一次击键时，你的学习流程要满足什么条件，那种提取才会仍然发生？
- 间隔重复系统按学习者自己不会选择的间隔安排复习。一个感觉不对的安排，是特性还是缺陷？
- 交错练习混合题目类型，感觉上比分组练习更混乱。如果语料库几乎没有关于交错练习的直接 AI 证据，你对采用它应该有多大的把握——以及你依据什么来做决定？
- [[adaptive-pretesting-retention|Akgun 与 Toker（2026）]] 发现，与 AI 自由聊天的学生成绩最差，即使经过了最好的前测。自由聊天这一条件缺少了结构化条件所拥有的什么？
- [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris（2026）]] 发现更深入的 LLM 提问提升了任务质量，但没有提升回忆成绩。这对你用流畅感作为学习证据说明了什么？

## 引言

提取练习、间隔练习和交错练习通常被放在一起讲授和引用，因为它们是分别被发现的，行为却十分相似：三者都以练习*看起来*有多好，来换取有多少能保留下来。在知识库中，它们是 [[desirable-difficulties]] 原理的实例，同时也可以独立操作——评审者可以安排间隔，辅导者可以拒不给答案，[[curriculum-design|课程]]可以混合题型，而不必援引背后的理论。它们的操作性格，正是它们成为 [[cognitive-psychology|认知心理学]] 与 AI 设计之间天然桥梁的原因，也是下文研究往往报告两个结果指标而不是一个的原因：练习期间的表现，以及延迟之后的保持。

## 测验效应：提取练习胜过重读

提取练习——试图回忆材料而不是重读它——比额外学习更能强化记忆，语料库把这个发现视为已经确定到可以在其上构建、而不必重新争辩的程度。那篇关于学会学习的 [[meta-analysis-systematic-review|范围综述]]，把提取练习放在其三层框架的 **Tools（工具）** 层（认知与 [[metacognition|元认知]] 技能的维度、[[self-regulated-learning|自我调节]] 的过程、诸如提取练习之类的工具），将其定位为学会学习中具体、可教的组成部分，用来平衡 [[cognitive-offloading|对 GenAI 的过度依赖]] 并保护 [[agency|学习者主体性]]。

语料库中信息量最大的检验是一种分离。[[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris（2026）]] 在神经经济学案例任务中记录了 22 名研究生逐条提示的 [[llm]] 交互，把*深度*（寻求解释的"为什么/如何/解释"类提示的比例）与数量和节奏分离开来。深度独立预测被独立评分的任务质量（β = 6.27，p = .006），但与即时后测回忆成绩无相关（β = −0.014，p = .728），回忆增益由基线知识驱动。作者给出的解读是：精细加工推动理解，而提取推动巩固——在没有明确提取要求的 LLM 支持学习中，学习者可以体验到很高的流畅感，而几乎不需要在无辅助的情况下提取任何东西。这是一个以"缺失"形式陈述的提取练习发现：机制没有被启用，所以保持结果没有移动。

提取练习不是万能杠杆，语料库也这么说。[[rachatasumrit-example-problem-ratio-2026|Rachatasumrit、Koedinger 与 Carvalho（2025）]] 做了一个 2×2 实验，95 名参与者在知识内容（逐字事实与可迁移技能，几何面积材料）与训练安排上交叉。他们发现了内容—处理交互（β = 0.41，p = .038，d = 0.38）：纯练习测验对**事实**产生更高的学习增益，而整合了例题的练习对**技能**产生更高的增益。作者还指出，提取练习的增益经常无法扩展到不熟悉的问题上。所以提取练习在目标是记住特定内容时最强，在目标是一项可迁移技能时需要与已解例题配对——这也是他们给出的 AI 设计启示：[[intelligent-tutoring|智能辅导系统]] 应该针对正在学习的知识成分，调整例题与练习的比例。

同样的逻辑贯穿作弊纸研究：[[student-cheat-sheets-make-or-take|Chen、Sakhnini 与 Istead]] 把*制作*作弊纸视为一种主动的、生成性的学习策略（选择、压缩、组织），而不是后勤工作，并把 AI 时代的风险框定为把这份制品的制作外包出去，从而失去制作它所提供的元认知演练。

## 间隔练习与分散练习

间隔效应——相同的总练习量分散到多次中比集中到一次里产生更持久的学习——是三种技术中最被算法化利用的一种，语料库中的应用系统都围绕它构建。

[[memdora-ai-spaced-repetition|Memdora]] 是把间隔当作工程问题处理的最清楚例子。它把调度建立在 Ebbinghaus 遗忘曲线上，引用了大致 **70% 新学材料会在 24 小时内被遗忘**（若无复习）这一数字，并集成了 **FSRS-6**——被描述为当前最先进的间隔重复算法。它的论点是：仅有调度并不够——现有工具把抽认卡交互简化为一个单一的二值手势——"翻转并自评"，作者称之为一种贫乏模型，未能利用关于提取练习的认知科学证据。Memdora 的贡献因此是一个跨 Language、By Heart 与 Exam 类别的 **17 种基于认知的交互类型分类法**，每种都映射到显示在卡片上的同行评议证据，外加一个补偿实际认知投入而非应用使用时长的基于努力的奖励系统，一个在阅读时即时生成卡片的统一生成管线，以及一个在单张卡片层面报告 [[learning-gains|学习结果]] 的课堂层。

[[adaptive-pretesting-retention|Akgun 与 Toker（2026）]] 提供了语料库中关于间隔如何被*结构化*的最强实验证据。在一项对 89 名应用统计课程本科生的三臂随机研究中，三个组都在分散时段中练习，数量与时间在七周内完全相同；只有交互结构不同。自适应间隔提取（G1）取得最高后测分数（M = 78.19）与最高观察到的练习努力度（M = 0.85）；固定间隔提取（G2）次之（M = 74.55，努力度 0.74）；无强制提取的学习者主导 AI 学习在两项上都排最后（M = 67.28，努力度 0.49）。多变量效应显著（Wilks' Λ = .664，partial η² = .185），G1 在保持上领先 G3，d = 0.92（p = .003）。在教学上关键的是：G1 的智能体被配置为*扣留*——针对 [[misconceptions|迷思概念]] 的依回应探测、在肤浅作答后要求精细说明、只有在概念参与充分时才推进，并且把直接解答明确排除在允许输出之外。作者自己的解读是：前测是一个前置的催化剂，而不是一种其益处在开放式 AI 访问下依然存活的独立干预。

一项随机现场实验报告了分散优于集中的有效剂量：每周的掌握追踪的是已完成的辅导周数，而不是参与的分钟数，每多完成一周就增加 55 分中的 2.00 分（p = .018）（[[ai-tutor-modality-randomized-field-experiment-2026|Yang、Van Alstyne 与 Dellarocas（2026）]]）。

语料库另外两项发现进一步厘清了间隔做到了什么、还没做到什么。[[schuetze-knowledge-tracing-forgetting-2026|Schuetze、Yan 与 Carvalho（2025）]] 把 [[knowledge-tracing|知识追踪]] 模型拟合到六段式的连续再学习数据，发现 BKT、BKT-with-Forgetting 与 Additive Factors Model 在回顾式拟合时能复现学习趋势（AUC 0.74–0.79），但在部署中的辅导系统所需的那种基于时间的交叉验证下，分别高估未来表现约 58%、51% 与 47%，并且**未能捕捉间隔效应**——有时甚至预测出跨间隔条件的相反顺序。换句话说，[[adaptive-learning|自适应系统]] 做出的调度决定，可能建立在并没有表示间隔所依赖的那一效应的模型之上。而 [[nie-personavlm-long-term-personalization-2026|LLM 学生建模与长期记忆]] 直接指出了设计缺口：大多数辅导系统缺乏纵向记忆，这种记忆应当如何与间隔重复和遗忘曲线相互作用，仍是一个开放问题。

### 语料库尚未展示的部分

两个应用系统都没有产生自己的保持证据：Memdora 一文报告了相对于传统间隔重复工具的保持提升，但没有描述该主张背后的延迟间隔结果研究；而那个双语讲义伴侣——它自动生成抽认卡，以消除阻碍循证提取与间隔练习的编写成本，同时把调度简化为二值的"已掌握/仍在学"评级，而非分级的 SM-2 与 FSRS 算法——直白地说明**尚未进行学习结果研究**，只有一份预注册方案。调度机制比它旨在产出的学习更有证据。

## 交错练习

交错练习——在一次练习会话中混合问题或项目类型，而不是按类型分组——是三种技术中在本语料库里证据最弱的，这一点应当直说而不是粉饰。交错练习在 [[desirable-difficulties]] 上只作为费力条件清单中的一个实例出现，知识库中没有任何研究把交错操作与分组对照进行检验。

语料库里确有的是相邻内容，值得仔细区分。[[simulating-learner-task-selection|模拟学习者任务选择]] 在一个 [[mastery-learning]] [[simulation|模拟]] 中，把 **Interleaving（交错）** 与 **Blocking（分组）** 建模为八种候选学习者策略中的两种，与优势定向、劣势定向和结果导向规则并列。那里的发现是关于选择架构而非记忆的：某些学习者策略通过过度练习系统性地延迟进步，而任务选择约束修复了适应不良的策略，却让 Interleaving、Blocking、优势定向与劣势定向停留在稳定的过度练习水平上。这是交错练习是一种*可选择行为*、系统可以容纳或约束它的证据——而不是交错练习改善保持的证据。语料库中其余提及是这个词语不相关的含义（[[knowloop-confusion-to-consolidation-2026]] 中交错的智能体阶段；一个几何 [[benchmark|基准]] 中交错的视觉—文字解题轨迹），它们不应被算作交错练习的证据。

交错练习被收录于此，因此依据的是它与其他两种技术同属的理论家族，以及它在 [[cognitive-psychology|认知心理学]] 文献中的地位，而不是本知识库中的某项研究。把它当作那个空位来对待。

## AI 如何实现与破坏这些技术

**实现。** AI 最有辩护余地的贡献是调度与生成，即这些技术中枯燥而非教学上有趣的部分。自适应调度在 Memdora 中通过 FSRS-6 实现，在估计随时间变化的掌握程度的知识追踪架构中实现；自适应*前测*由 Akgun 与 Toker 的依回应智能体实现，它读取前次会话的表现信号，在较弱领域提升概念深度，同时在较强领域维持挑战；自动抽认卡与前测生成由那个双语讲义伴侣实现，而在那里卡片编写正是最初阻碍间隔练习的成本。[[nie-personavlm-long-term-personalization-2026|纵向学生记忆]] 是让以上任何一项跨学期持续存在的架构，而 [[agentic-ai-pedagogical-best-practice-2026|Woollaston 及其同事（2026）]] 提供了刻意地做这件事的设计词汇：有意的摩擦、动态 [[scaffolding|脚手架]]、[[human-in-the-loop-ai|人在环路]] 监督，以及经过权衡而非最大化的 AI 使用。

**破坏。** 失败模式是具体且被反复记录的。[[agentic-ai-pedagogical-best-practice-2026|Woollaston 等人（2026）]] 把他们六个 [[pedagogy|教学法]] 风险中的第一个命名为先验知识激活：预先抓取并呈现内容的 [[agentic-ai|智能体]]会**绕过激活先验知识的提取练习**，因此学习者在收到答案之前从不回忆或整合自己所知。[[prior-knowledge]] 把同样的绕过风险陈述为 [[generative-ai|生成式 AI]] 的一般属性，并补上设计对策——先激活，再供给。流畅感错觉是学习者一侧的机制：LLM 随需提供完整、连贯的解释，因此学习者向内提取与重建分配的努力更少，而会话却*感觉*高效——这正是 [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris（2026）]] 测量到的那种分离。那项三臂前测研究在实验上说明了同一点：拥有自由 AI 访问且无强制提取的那一臂，在学期末保持上表现最差，而各臂之间的交互量并无显著差异，所以差距是由结构而非学生参与多少造成的。

**保留提取需求。** 语料库在一小组设计特征上汇合。前测智能体的策略最具体：以配置扣留直接解答、探测迷思概念、在肤浅尝试后要求精细说明，并只在概念参与充分时推进。Tsiligkiris 建议在 LLM 使用*之后*嵌入提取需求，办法是闭卷输出——简答题、凭记忆画的概念图、不带模型的 [[learning-by-teaching|回授]]讲解——并把脚手架与检查分离开，使模型可用于澄清和 [[feedback|反馈]]，而不同的检查点要求独立回忆。[[knowloop-confusion-to-consolidation-2026|KnowLoop]] 展示了部署系统中的回授形式：一个 Peer 智能体搭建反思性回授的脚手架，把学习者无法言明的缺口显现出来，而它的参与者被要求在澄清与巩固之间灵活移动，而不是把它们当作严格阶段。[[student-cheat-sheets-make-or-take|Chen、Sakhnini 与 Istead]] 补上了评估一侧的版本——重视构建过程而非制品——而 [[learning-to-learn-in-the-age-of-generative-ai-a-scoping-review-and-conceptual-fr|Schorr 及其同事（2026）]] 把这些工具定位为可学习的技能，减少过度依赖并支持 [[agency|学习者主体性]]。在它们之下是唯一一条不可谈判的底线：必须有某种东西要求学习者产出一个模型尚未给出的答案。

## 证据的局限

- **小样本与单一情境。** 前测研究的分析样本是一门应用统计课程中的 89 名本科生，每臂 27–34 人；LLM 交互研究 n = 22，采用单组设计，不支持任何因果主张；回授研究有 22 名参与者。前测作者指出，需要跨领域和任务类型复制才能推广。
- **短或缺失的保持间隔。** 交互深度研究只测试了即时回忆，没有延迟测量，所以它的零结果是专门针对短期保持的零结果。Memdora 的保持优势与 [[llm-interaction-depth-task-quality-recall-2026|LLM 深度分离]] 同样没有在间隔文献所要求的数周跨度上追踪；前测研究的七周窗口是语料库中最长的。
- **[[self-report-measures|自我报告]]与代理测量。** 前测研究中的练习努力度是一个行为指标，由两名评分者依据量规从对话记录中评分，作者明确指出它不是内部 [[motivation|动机]]状态的测量；LLM 深度测量是一个基于关键词的代理，捕捉的是寻求解释的表面形式而非其质量。
- **工具与建模局限。** 语料库中的 [[knowledge-tracing|知识追踪]] 模型恰好在间隔决策需要它们的地方失效，作者把过去的成功归因于对全数据集的回顾式拟合，而非贴近部署的验证。双语伴侣的抽认卡质量未经与真实答案核对验证，没有自动事实核查层，而且它根本没有运行过结果研究。
- **交错练习在此几乎没有直接证据。** 如上所述，语料库不包含分组与交错的对比，只有一项把 Interleaving 作为若干可选策略之一的模拟。
- **被试群体与内容。** 证据基础集中于 [[higher-ed|高等教育]]、STEM 与统计材料，以及来自几何与多元回归内容的事实—技能区分；这些研究并未确立向 [[k-12|K-12]] 场景、[[humanities-education|人文与写作]]，以及非西方课堂的推广。

## 关联概念

- [[pedagogical-patterns]] — 间隔提取序列，以及编码时提供帮助的保持代价
- [[desirable-difficulties]] — 这三种技术所操作的原理
- [[cognitive-psychology]] — 记忆、编码与提取，三者的理论归属
- [[prior-knowledge]] — 提取练习作为对学习者已有之物的激活
- [[metacognition]] — 判断流畅感是否反映了学习
- [[self-regulated-learning]] — 持续学习 AI 可以替你安排或替你作答的东西
- [[mastery-learning]] — 掌握阈值之后的保持，以及维持它的间隔安排
- [[knowledge-tracing]] — 做出或错失调度决定的模型
- [[cognitive-offloading]] — 当提取被外包给工具时的失败模式
- [[transfer-of-learning]] — 这些技术所针对的表现—学习之差
- [[formative-assessment]] — 闭卷检查点作为提取事件
- [[productive-failure]] — 在获得帮助之前先行尝试
- [[learners]] — 持久学习而非流畅学习的利害所在

## 关联文章

- [[adaptive-pretesting-retention]] — Akgun 与 Toker：七周内自适应间隔提取对照固定提取与学习者主导 AI
- [[memdora-ai-spaced-repetition]] — Memdora：FSRS-6 调度与一套有依据的抽认卡交互分类法
- [[llm-interaction-depth-task-quality-recall-2026]] — Tsiligkiris：解释深度预测任务质量但不预测即时回忆
- [[rachatasumrit-example-problem-ratio-2026]] — 事实用提取练习，技能用已解例题；内容—处理交互
- [[schuetze-knowledge-tracing-forgetting-2026]] — 知识追踪模型在基于时间的验证下未能捕捉间隔效应
- [[bilingual-llm-lecture-companion-srl-2026]] — 自动抽认卡生成消除间隔练习的编写成本
- [[student-cheat-sheets-make-or-take]] — 制作作弊纸作为生成性学习；用 AI 外包其制作
- [[knowloop-confusion-to-consolidation-2026]] — 回授巩固显现澄清未能显现的缺口
- [[simulating-learner-task-selection]] — 交错与分组作为任务选择约束下的被建模学习者策略
- [[nie-personavlm-long-term-personalization-2026]] — 纵向学生记忆及其与间隔重复、遗忘曲线的开放关系
- [[learning-to-learn-in-the-age-of-generative-ai-a-scoping-review-and-conceptual-fr]] — 提取练习在学会学习框架的工具层
- [[agentic-ai-pedagogical-best-practice-2026]] — 预抓取智能体绕过提取练习；有意摩擦的理由
- [[ai-tutor-modality-randomized-field-experiment-2026]] — 当 AI 辅导者开口说话：一项随机现场实验的证据
