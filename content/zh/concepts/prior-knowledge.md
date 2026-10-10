---
title: 先备知识
created: "2026-08-22T01:20:00-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [learning-design]
pedagogy: [constructivist, learning-theories, metacognition, prior-knowledge, scaffolding]
technology: [personalized-learning, student-modeling]
confidence: high
translation_of: concepts/prior-knowledge
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **先备知识** —— 学习者带入一项新学习任务的既有知识、技能、信念与心理模型。它是后续学习最有力的单一预测因子：新信息通过 —— 并与 —— 学习者已知的东西被解释与整合，因此激活并建立在先备知识之上的教学，比把每位学习者都当作白板的教学产生更强、更持久的学习。在 [[ai-education|教育中的人工智能]] 中，先备知识是 [[student-modeling]]（把 [[personalized-learning|教学]] 适配到学习者当前状态）的核心，是 [[constructivist]] 原则（知识被主动建构在既有心理模型之上）的核心，也是这样一种风险的核心：预先抓取并呈现内容的人工智能工具，会绕过激活先备知识的 [[retrieval-spacing-interleaving|检索练习]]。

## 值得思考的问题

- 有什么东西你学得很深，又有什么东西你学得艰难？这中间的差别有多少要归到你开始时已经知道的东西？
- 有先备知识还不够 —— 它必须被主动检索并连接。什么时候回忆你已经知道的（或未能回忆）改变了你学习新东西的效果？
- 本页说，先备知识在它是错的（一个误解）时会*干扰* 学习。你能想出一个你曾持有的信念，它让新的、正确的信息更难学吗？
- 预先抓取答案的生成式人工智能，可能绕过激活先备知识的检索练习。一件旨在帮助你学习的工具，如何可能反而阻止你回忆你所知道的？
- 如果一个人工智能必须估计你的先备知识状态来个性化，当那个估计是错的时会发生什么？你对一个系统能准确知道你已知的东西有多自信？
- “激活先备知识”与仅仅在 [[teacher-role|教学]] 前问学生一个问题有何不同？什么才会让这种激活真正深化随后的学习？

## 引言

先备知识激活是 [[learning-sciences|学习科学]] 中最稳健的发现之一：学习者不会在真空中吸收新材料，而是把它映射到既有的图式上，而这种映射的质量决定保持与 [[transfer-of-learning|迁移]]。这一概念支撑了 Ausubel 的先行组织者、新教学前的先备知识激活、作为激活与强化已知之形式之一的检索练习，以及对学习者已知内容的诊断性 [[assessment]]。在人工智能时代，先备知识获得了新的紧迫性，因为 [[generative-ai|生成式人工智能]] 既可以*支持* 激活（[[prompt-engineering|提示]] 学习者回忆并连接他们所知），也可以*完全绕过* 它（即时提供一个学习者从不必检索或整合的答案或预先抓取的内容）。

## 先备知识的作用

- **它是学习最强的预测因子。** 数十年的 [[research-methods-aied|研究]] 表明，学习者已知的东西与 [[learning-gains|学习结果]] 的相关，强于几乎任何其他因素，因为新信息是相对既有心理模型被编码的。因此，适配每位学习者先备知识状态的人工智能系统，对效率与 [[transfer-of-learning|迁移]] 抱有特别的前景。
- **重要的是激活，而不只是拥有。** 有先备知识还不够 —— 它必须被主动检索并与新材料连接。这就是为什么“激活先备知识”是一个标准的 [[pedagogy|教学]] 动作，以及为什么检索练习（在增加之前回忆你所知）比简单的再暴露更能改善学习。
- **它并不总能预测谁做了驱动学习的工作。** 在一项为期五天、23 名中学导师的“通过教学学习”研究中，先前的测验分数没有预测一位导师产出的知识建构回应的比例，且低先备导师只要建构了知识，就在统计上与高先备同伴持平（[[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]）。
- **它塑造解释。** 学习者通过他们已经相信的东西解释新信息。当那些信念是错的（[[misconceptions]]），先备知识可能*干扰* 学习，这就是为什么教学必须浮现并处理误解，而不是假定一个中性的起点。
- **它驱动学生建模。** 要个性化，一个人工智能系统必须估计学习者的先备知识状态 —— 这是 [[knowledge-tracing]]、学生建模与自适应 [[scaffolding]] 的基础。这些估计的质量决定适配是真正有帮助还是误导。
- **知识内容决定招募哪种过程练习。** 学习依赖于记忆还是归纳，由目标对象的先备知识结构设定：[[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] 遵循 [[learning-theories|KLI]] 框架，区分条件与回应恒定的知识成分（事实，通过记忆与检索练习获得）与条件与回应可变的知识成分（技能，通过归纳与向新输入泛化获得） —— 这就是为什么范例与练习的最优混合，对事实内容与对技能内容会不同。

## 人工智能时代的先备知识

生成式人工智能使先备知识成为一个中心的设计考量，而非一个背景变量：

- **绕过风险。** [[agentic-ai-pedagogical-best-practice-2026|主动的能动性人工智能]] 预先抓取并呈现内容，可能绕过激活先备知识的检索练习 —— 学习者从不必在收到答案之前回忆或整合他们所知。这是 [[agentic-ai|能动性]] 教育最佳实践框架识别出的六项教学风险之一，它直接连接到 [[cognitive-offloading|过度依赖]] 与 [[desirable-difficulties]] 原则，即努力的加工支持持久的学习。
- **先备知识塑造卸载的模式，而不只是结果。** 在一项综合写作研究中，高知识、最小卸载的聚类写了其论文的 80%，而卸载最重的聚类写了 2%（平均 25.1 个提示），因此提示量追踪的是先备知识而非努力（[[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]]）。
- **益处差距在复合。** 因为生产性的人工智能使用取决于学习者已知的东西，先备知识更强的学生能更好地利用它，而新手最可能把它当作替代品 —— 这是一种分布性风险，即便获取平等也可能扩大成就差距（[[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]）。
- **把启动与激活当作设计。** [[genai-mindtool-generative-learning|生成式人工智能思维工具路径]] 刻意通过提问、人工智能生成的视觉与类比“为学习任务做准备”（例如“关于生态系统，你已经知道什么？”），在引入新内容之前激活先备知识与好奇心 —— 示范的是检索—整合路径，而非答案供给路径。
- **学生建模与记忆。** 人工智能系统日益建模学习者的先备知识状态与纵向记忆（例如把先备知识状态与遗忘曲线纳入辅导记忆），使间隔重复与自适应复习建立在每位学习者已知的东西之上。（[[nie-personavlm-long-term-personalization-2026]]）
- **一个个性化适配的杠杆。** 因为学习者在先备知识上差异很大，适配必须按个体调音 —— 这是 [[personalized-learning]] 与自适应 [[scaffolding]] 的一个核心论证，即在学习者的实际当前状态而非班级平均的假设上与他们相遇。

## 对设计教育中人工智能的启示

1. **先激活，再供给。** 设计人工智能互动，让学习者在获得新内容或答案之前先检索并陈述他们已经知道的 —— 保全检索练习而非绕过它。
2. **建模学习者的先备知识状态。** 把学生建模与适配建立在估计的先备知识（及其误解）之上，而非假定的整齐划一，使个性化真正有响应。
3. **浮现并处理误解。** 当先备知识不正确时，它会干扰；教学应当引出并纠正误解，而不是在错误的基础上叠加新内容。
4. **权衡摩擦的取舍。** 激活先备知识增加了合意的困难（检索、整合），而这正是人工智能移除摩擦的默认所倾向抹掉的 —— 这是一个要刻意管理的张力，而非让自动化按默认解决。

## 关联概念

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[constructivist]]
- [[personalized-learning]]
- [[student-modeling]]
- [[misconceptions]]
- [[icap-framework]]
- [[knowledge-tracing]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[learning-theories]]
- [[productive-failure]] — Productive Failure
- [[retrieval-spacing-interleaving]] — how what a learner already knows determines what retrieval practice can do

## 关联文章

- [[agentic-ai-pedagogical-best-practice-2026]] — The tension between automation and learning (prior knowledge activation risk)
- [[genai-mindtool-generative-learning]] — GenAI as a mindtool: priming and activating prior knowledge
- [[nie-personavlm-long-term-personalization-2026]] — LLM student modeling and memory
- [[lodge-loble-cognitive-offloading-2026]] — Lodge & Loble on cognitive offloading
- [[cognitive-offloading-llm-synthesis-writing]] — Cognitive offloading in LLM synthesis writing
- [[bridging-instructional-design-framework-math]] — An instructional-design framework for math
- [[knowledge-building-tutor-learning-2026]] — knowledge-building rather than prior knowledge predicts tutor learning, and low-prior tutors who build knowledge catch up
- [[rachatasumrit-example-problem-ratio-2026]]
