---
title: ICAP 框架
created: "2026-08-14T04:33:38-04:00"
updated: "2026-10-09T18:58:11-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **ICAP 框架**（Interactive–Constructive–Active–Passive，互动—建构—主动—被动） —— 由 Michelene Chi 发展的一种认知投入分类学，把学习者行为划分为四种知识变化模式，按认知投入从低到高排列：*被动*、*主动*、*建构*与*互动*。在人工智能教育中，ICAP 既提供一个设计目标（构建引出建构性与互动性投入、而非被动消费的工具），也提供一个评估透镜（测量学习者与 AI 系统是否真的处于较高的模式）。（[[hingle-collaborative-ai-literacy-2025]]）（[[icap-cognitive-engagement-llm-agents]]）

## 值得思考的问题

- 想想上一次你通过看视频或阅读"学到"某样东西的时候。ICAP 框架会称那为被动。与向他人解释相比，你从被动接触中真正保留了什么？
- ICAP 把投入从被动排到主动、再到建构、再到互动。你用过的 AI 工具倾向于把学习者放在哪一层——而点击完成自适应练习算不算真正的投入，还是只是活动？
- 本页主张最有后果的转变是从主动到建构——生成解释或新的造物，而不只是应用知识。为什么产出某种新的东西，可能是真正改变理解的那一步？
- 一项研究发现，人类专家在标注投入水平上远超 AI 模型。如果自动化系统系统性地低估投入，我们应当如何看待由 AI 生成的"投入"指标？
- ICAP 表明，替你作答的工具让你停留在被动，而提示与提问的工具把你推向建构与互动性投入。你会为你的学习者做哪种设计选择？
- 这个框架既被用作设计目标也被用作评估透镜。你会如何在自己的教学或设计中使用 ICAP，来判断学习者是真正投入而不只是主动？

## 引言

ICAP 立足于一个假设：*学习者做什么*决定了他们学到多少、学到什么。Chi 的框架主张，随着投入从被动到主动、到建构、再到互动，知识变化的性质也在深化——从存储，到注意，到把新知识与先前知识整合，到通过对话共同创造知识。这使 ICAP 成为分析 AI 教育的有力工具，因为这里的核心设计问题是 AI 辅助究竟是支持还是取代了学习者的认知投入。

## 四种模式

| 模式 | 学习者行为 | 知识变化的性质 |
|------|------------------|---------------------------|
| **互动** | 与另一位学习者或代理对话，共同建构意义；例如为一个立场辩护、[[collaborative-learning|协作问题解决]] | 通过联合而互惠的活动共同创造新知识 |
| **建构** | 生成超出所给内容的新输出；例如自我解释、比较、反思、画图 | 把新信息与先前知识整合，以产生新的理解 |
| **主动** | 操作或作用于材料；例如记笔记、划线、停下来思考 | 注意并存储信息，有时并无深层整合 |
| **被动** | 在无外显动作的情况下接收信息；例如听讲座、阅读 | 存储信息，后续加工有限 |

## AI 教育中的 ICAP

### AI 工具的设计目标

ICAP 重构了 AI 教育的核心设计问题：一个*替学习者作答*的 AI 工具使他们停留在被动/主动模式，而一个*提示、提问并[[scaffolding|搭支架]]*的工具则能把学习者推向建构性与互动性投入。这使 ICAP 与[[constructivist]]教学法和[[active-learning]]研究一致。（[[multimodal-learning-genai]]）（[[hingle-collaborative-ai-literacy-2025]]）

### AI 代理的评估透镜

ICAP 同时充当一个测量框架。在一项研究中，研究者把 ICAP 扩展为 7 点量表，以刻画协作对话中的认知投入，随后把训练有素的人工标注者与基于 LLM 的标注（上下文学习、零样本提示与反思性代理）作比较。人类评分者间信度（kappa = 0.906–0.998）远超 LLM 标注（kappa = 0.541–0.609），凸显了 ICAP 在[[learning-analytics]]流水线的自动化投入测量中的作用——以及当前限度。（[[icap-cognitive-engagement-llm-agents]]）

### 引导协作对话的促成

由于互动投入是最高的 ICAP 模式，该框架有助于定位 AI 促成在[[collaborative-learning|在线协作讨论]]中的价值。[[llm-facilitation-timing-online-discussions|关于 LLM 促成时机的研究]]表明，AI 在讨论中*何时*介入，塑造了它是支持还是打断了互动的知识共建——这是一个 ICAP 式的告诫：自主的调节代理需要向类似人类的克制校准，而非急于促成。

### ICAP 与学习分析设计

ICAP 支撑着对浅层"投入"指标的批评：通过点击过滤器与仪表盘互动是*主动*而非*互动*的投入。有效的学习分析设计引出自我评估与双向对话，而非仅仅展示数据——这是直接从 Chi 的框架得出的推论。（[[interactive-learning-dashboards-engagement]]）

### 主动→建构的转变作为关键一步

尽管 ICAP 描述的是一个层级，对学习最有后果的转变却是从*主动*到*建构*模式的跃迁（Chi & Boucher，2023）。主动投入（把知识应用到相似但非相同的情境）让学习者有所准备，但正是建构性投入——生成解释、摘要或新造物——使他们能够创造新知识。这是 AI 教育的要害：一个把学习者留在主动模式的工具（例如点击完成自适应练习）可能看起来高效，却从不把他们推入产出持久理解的建构性生成。刻意把主动→建构跃迁搭起支架来的协作性与读写聚焦干预，往往显示出最强的增益。（[[hingle-collaborative-ai-literacy-2025]]）

### ICAP 作为 ITS 中的自适应支架信号

ICAP 的模式可以被操作化为*目标状态*，一个自适应导师可据以基于演进中的学生模型来选择、为认知投入搭建支架。在一个逻辑 ITS 中，[[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi 等]]在*主动*的"引导"解题示例模式与*建构*的"错解"示例模式之间动态选择。在 113 名学生上把贝叶斯知识追踪（BKT）与深度强化学习（DRL）及非自适应基线作比较，两种自适应策略都改善了后测表现——但方式有别：BKT 给先前知识低的学生带来最大增益（帮助他们赶上），而 DRL 在先前知识高的学生中产生最高后测分数。这具体证明了：有效*个性化*智能导师的 ICAP 模式，取决于对学习者当前知识的建模——且没有任何单一模式或自适应方法适合每一位学习者。这直接把 ICAP 层级连接到[[adaptive-learning]]与[[knowledge-tracing]]设计。

### ICAP 作为生成类人代理的认知状态模型

在选择任务模式之外，ICAP 还被直接嵌入一个生成式教育代理的*认知模型*之中。[[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]]构建了一个基于 ICAP 的"认知深度感知器"，把输入映射为跨四种 ICAP 水平的概率分布，并将它与受进化启发的状态更新及项目反应理论记忆检索融合，以模拟学生的认知演化（包括困惑 → 顿悟之类的转变）。消融实验显示，移除 ICAP 感知模块会使代理区分浅层与深层学习的能力崩塌——这是 ICAP 分类学可以作为[[simulating-students|学生模拟]]中细粒度、内部认知投入测量的证据，而不只是一个外部评估透镜。

### ICAP 锚定反思性 GenAI 互动的评估

ICAP 对生成性、过程层面投入的强调，已被那些评估学生*如何*与生成式 AI 学习的评估框架所采纳。[[assessing-student-drive-framework-2025|DRIVE 框架]]明确把它的核心构念——与 GenAI 输出的深度反思性互动——与 ICAP 所识别的那类导向更深学习的生成性投入对齐，并用它来区分对 AI 生成内容的表面消费与费力的、反思性的重制。这把 ICAP 定位为设计与测量有意义的[[generative-ai|GenAI]]学习互动的理论锚，而不只是追踪使用量。

## 对设计与研究的启示

1. **为较高的模式设计。** AI 工具应当提示学习者生成、解释与对话——建构性与互动性活动——而非交付被动内容或充当答案机器。（[[multimodal-learning-genai]]）
2. **让学习者跨模式投入。** 有效的[[ai-literacy|AI 素养]]教学在多个 ICAP 水平上调动学习者——被动接触、主动操作、建构性生成与互动性对话——选择契合学习目标的那个模式。（[[hingle-collaborative-ai-literacy-2025]]）
3. **诚实地测量投入。** ICAP 给研究者与设计师提供了一套共同词汇，以区分真正的认知投入与单纯的活动——这是对浅层[[student-engagement]]的矫正。（[[icap-cognitive-engagement-llm-agents]]）
4. **留意人类与 LLM 标注之间的差距。** 如果自动化系统被用于给投入编码，其相对于训练有素的人类所存在的系统性不足必须被计入。（[[icap-cognitive-engagement-llm-agents]]）

## 关联概念

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## 关联文章

- [[icap-cognitive-engagement-llm-agents]] — 用于以人工 vs. LLM 标注测量投入的扩展 ICAP 框架
- [[hingle-collaborative-ai-literacy-2025]] — 跨四种 ICAP 模式的协作式 AI 素养
- [[interactive-learning-dashboards-engagement]] — ICAP 作为对浅层学习分析投入的批评
- [[multimodal-learning-genai]] — 多模态学习设计中的 ICAP 与认知投入
- [[llm-facilitation-timing-online-discussions]] — 在线协作讨论中的 LLM 促成时机
- [[adaptive-scaffolding-cognitive-engagement-its]] — ITS 中的自适应 ICAP 支架（BKT 对 DRL）
- [[cogevolution-student-cognitive-evolution-agent-2026]] — 生成式学生模拟代理中的 ICAP 认知深度模型
- [[assessing-student-drive-framework-2025]] — 以 ICAP 锚定的反思性 GenAI 互动评估
