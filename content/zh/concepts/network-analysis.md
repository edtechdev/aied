---
title: 网络分析（Network Analysis）
created: "2026-08-22T01:40:00-04:00"
updated: "2026-10-09T18:58:17-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **网络分析** — 一类[[research-methods-aied|研究方法]]，把实体（人、概念、行为或编码）建模为**节点**，以代表关系或转移的**边**相连，然后分析由此得到的网络的结构与动力学，以揭示频次统计或两两比较无法显现的模式。在 AI 教育研究中，网络分析被用于描绘学习者与 AI 工具之间的互动模式、建模知识或话语元素的共现，以及追踪行为的时间序列。它包含若干不同变体——**认知网络分析**（ENA，建模编码/构念的共现）、**社会网络分析**（SNA，建模人与人之间的关系）和**转移网络分析**（TNA，建模状态的时间序列）——每一种都以不同方式把"学习即连接"操作化。([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## 值得思考的问题

- 当你在教育中听到"网络分析"时，脑海中浮现什么——学生的友谊地图、观念之间的联系，还是别的什么？这些与简单地数某物出现多少次有何不同？
- 假设你想知道学生是否真的在与 AI 写作工具的反馈互动，而不只是拿答案。为什么"他们点了多少次"这类指标可能错过一个行动序列（例如修订循环对聊天循环）所能揭示的故事？
- 本页区分认知网络、社会网络和转移网络分析。不了解细节的情况下，你能猜出会用哪种变体来研究（a）人们如何协作，（b）哪些观念在学生推理中共现，（c）学习者如何随时间在状态间移动？
- 一位研究者发现，高素养和低素养学习者使用同一个 AI 工具，却产生非常不同的推理网络结构。这告诉你用单一平均分评估 AI 工具的什么？
- "密度"和"中心性"等网络指标描述互动是随机的、还是围绕枢纽组织的。以某个学习者为中心的有组织网络，何时是好协作的标志，何时是问题的标志？

## 引言

网络分析方法共享一个核心前提：连接的结构——而不只是其存在或频次——承载意义。它们不问"X 出现了多少"，而问"元素是如何连接的，这种连接性揭示了关于[[metacognition|认知]]、[[collaborative-learning|协作]]或学习过程的什么？"这使它们在 AI 教育中尤为有价值，因为研究者日益希望理解学习者—[[student-ai-interaction|AI 互动]]的*过程*（学习者如何穿行于[[feedback]]、对话与修订），而不只是产物（最终分数、错误率）。

## 知识库语料中使用的变体

- **认知网络分析（ENA）** — 知识库中最常见的变体（约 24 篇文章中讨论）。ENA 建模话语或活动片段内编码或构念的共现，产出显示哪些观念、技能或认知行为在给定情境中倾向于相连的网络。它被用于比较不同群体（如高对低素养学习者、人对 AI 协作者）如何结构其认知。([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **社会网络分析（SNA）** — 建模人与人（学习者、教师、智能体）之间的关系，以揭示协作结构、影响、中心性和社群。适用于研究[[collaborative-learning|协作]]与同伴学习。([[misiejuk-cognitive-offloading-prompting-2026]])
- **转移网络分析（TNA）** — 把离散状态（如辅导会话中的学习者行为）的时间序列建模为有向网络，量化在状态间移动的概率。TNA 被用于揭示学习者—AI 互动中的行为循环、路径与采用动态。([[penny-transition-network-analysis-efl-writing-2026]])

这些区别于**[[knowledge-graph]]**——后者是表示和推理事实的数据结构（本体/三元组存储），而非研究过程或关系结构的分析方法。

## 网络分析在 AI 教育研究中

网络方法被用于知识库证据基础的各个角落，回答聚合指标无法回答的问题：

- **打开学习者—AI 互动的"黑箱"。** TNA 揭示学习者使用 AI 工具时所走行为的*过程*——循环与路径（例如在[[conversational-ai|聊天机器人]]支架的[[writing-education|写作]]中"修订循环"对"聊天循环"）——而不只是最终产出。([[penny-transition-network-analysis-efl-writing-2026]])
- **跨群体比较认知结构。** ENA 显示不同群体如何不同地连接构念——例如[[metacognition]]如何与委托对人类推理在人机协作中共现，揭示不同的协作模式。([[hao-human-ai-collaborative-problem-solving-cognition]])
- **追踪 AI 素养与互动特征。** 对互动日志的 ENA 识别出[[llm|LLM]]使用的不同模式（迭代性策略细化对线性命令），区分学习者[[ai-literacy|熟练度]]和发展。([[tracing-genai-literacy-interaction-patterns]])
- **分析话语与框架。** ENA 被应用于[[qualitative-research|质性]]和[[multimodal]]数据（如 YouTube 上关于教育中 ChatGPT 的框架），以揭示公共话语或学科话语的结构。([[youtube-frames-chatgpt-education]])
- **补充自报与产物指标。** 由于网络方法使用观察到的行为数据，它们能暴露学习者所声称与其实际所做之间的差距——这是知识库反馈采用文献中一个反复出现的发现。
- **图结构作为验证量而非描述性摘要。** [[synthetic-educational-data-structural-fidelity-2026|Inoue 与 Yasutake（2026）]]追踪 β0——在固定欧氏阈值下学习者每周邻近图的连通分量数——以检验合成队列是否复现真实队列，偏好它是因为它只由图决定、不像模块度最大化那样需要优化或随机种子，且在七分之一到三分之一的学习者孤处一个分量时仍有定义。

## 方法学考量

- **编码是基础。** 所有网络变体都依赖把原始数据（话语、事件、关系）可靠编码为离散节点/编码；自动化的基于 LLM 的编码日益常用，但需要人工验证（如 TNA 研究中 Fleiss' κ 为 0.70–0.71）。([[penny-transition-network-analysis-efl-writing-2026]])
- **把编码者一致性当作持续检查而非一次性统计。** [[preservice-teachers-noticing-ai-simulations-2026|Galiç 等（2026）]]以 Krippendorff's α = .803 编码了 304 条注意陈述，并在整个研究中监控一致性，每当合并 κ 低于其 .85 的重新校准阈值时就重新编码有争议的陈述（第 18 和 27 例），到第 36–51 例不再需要重新校准。这一序列才是要点：若只在末尾测量信度，早期的转移模型就会建立在编码者漂移之上，而那些每周转移模式恰是该研究的发现。
- **网络级指标概括结构。** 密度、互惠性、中心性和入/出强度描述互动是随机的、还是围绕"引力"枢纽组织的，以及交换的互惠程度。
- **群体差异需要统计比较。** 卡方检验或置换检验被用来确证观察到的网络差异（如按熟练度）不是偶然造成的。[[caeai-response-length-ai-ethics-education-2026|Shao 等（2026）]]表明，零假设必须与文本匹配。在一个有二十名跨学科[[higher-ed|研究生]]的案例讨论中，大小为 3 的共享术语占比从 5.2% 升到 8.0%，而内容词元下降到其读后水平的约 0.65 倍。整体袋置换检验会认为这一上升显著；他们的长度条件化词元置换检验则不认为（Q6 p = .62，Q7 p = .15）。
- **在读取其网络之前先验证量表。** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai 与 Alshahri（2026）]]通过完整的量表开发路径构建了 45 项的 AI-STEM-MLCS——专家内容效度比、探索性再验证性因子分析（CFI = 0.983，RMSEA = 0.019）、McDonald's ω 为 0.888–0.905、两周重测 ICC 为 0.751–0.900——再用探索性图分析建模四个维度。从节点为未验证量表分数的网络推导结构，正是这一顺序所防范的，作者也把沙特特定验证命名为结构可迁移性的边界。
- **谨慎解读。** 节点粒度（如粗粒度的"聊天"节点）可能遮蔽意图；自动分类带有一定歧义；横截面网络结构不能确立因果性。
- **暴露聚合所掩盖之物的网络。** [[genai-social-annotation-epistemic-network-analysis-2026|Pan 等（2026）]]发现，使用 GenAI 做批注的班级在成绩和参与上都超过对照组，随后按中位表现拆分实验班，显示增益并未被共享：高成就小组在其批注中发起了 60.7% 的反馈请求，低成就小组为 34.0%，后者停留在自我指涉循环中（分组在 ENA 的 X 轴上显著，U = 25.00，p = 0.01）。设计教训是：一个组级效应可能概括了两种不同的互动结构——而两组都是整班，因此该比较识别的是模式，而不归因因果。

## 对 AI 教育研究的启示

1. **偏好过程方法而非仅产物指标。** 要评估 AI 工具是否支持学习，就用序列/网络方法建模学习者如何实际参与（采用、对话、修订），而不只依赖最终分数。
2. **用 ENA 比较认知结构。** 当要问不同学习者或模式（人对 AI）如何结构其推理时，ENA 提供了共现网络的直接、可视化比较——这项技术非常适合[[student-modeling|学生建模]]学习者如何连接观念。
3. **验证自动编码。** 面对大型日志数据集，[[llm|LLM]]分类很强大，但在解读网络结构前必须对照人工编码检查（报告评分者间一致性）。
4. **为差异化而设计。** 网络分析常揭示*同一个* AI 工具在不同学习者子群中产生不同的互动模式——这为自适应设计提供信息，而非一刀切的评估。

## ENA 对仿真协作对话的验证

- **ENA 作为仿真对话的验证。** Fang（2026）将认知网络分析用于评估微调过的 LLM 智能体是否复现真实协作[[problem-solving]]对话的结构。比较仿真邻接向量与经验网络，他报告 ENA 距离为 0.17——落在零分布的第 95 百分位阈值之内，置换 p 值为 0.65——展示了 ENA 作为对话生成式[[simulation|仿真]]保真度的[[quantitative-research|量化]]检验的效力，以及 ENA/SNA/TNA 在教育研究中其他应用。

## 关联概念

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## 关联文章

- [[caeai-response-length-ai-ethics-education-2026]] — 响应长度而非词汇对齐驱动参与者—词素网络中的共享术语统计（Shao 等 2026）
- [[penny-transition-network-analysis-efl-writing-2026]] — 支架式 EFL 写作中学习者—聊天机器人互动的 TNA
- [[tracing-genai-literacy-interaction-patterns]] — GenAI 素养互动模式的 ENA
- [[hao-human-ai-collaborative-problem-solving-cognition]] — 人机协作问题解决的 ENA
- [[misiejuk-cognitive-offloading-prompting-2026]] — 认知卸载与提示（SNA/网络方法）
- [[youtube-frames-chatgpt-education]] — YouTube 上教育 ChatGPT 框架的 ENA
- [[agency-gap-ai-writing]] — AI 支持写作中的能动性差距（ENA）
- [[synthetic-educational-data-structural-fidelity-2026]] — 保真度指标漏掉什么：对合成教育数据的结构性检查
