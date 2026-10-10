---
title: 认知心理学
created: "2026-08-27T10:52:12-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **认知心理学/认知主义** —— 通过内部心理过程 —— 注意、感知、记忆、推理与元认知 —— 而非仅通过可观察行为来解释学习的一族理论。在[[ai-education|教育中的AI]]领域，认知主义假设支撑着本领域最具特色的贡献：对学习者知识建模的[[intelligent-tutoring]]系统、追踪学习者知道什么的[[knowledge-tracing]]与[[cognitive-diagnosis]]、基于错误诊断的[[feedback]]设计，以及整个[[student-modeling|学习者建模与自适应教学]]族。认知主义是[[behaviorism]]（学习即行为改变）与[[constructivist|建构主义]]（学习即主动制造意义）之间的中间地带，也是与激发了早期AIED的"心智计算机隐喻"联系最紧密的理论透镜。

## 值得思考的问题

- 当你想到"学习"，你想象的是某人*所做*的改变，还是他们所知所能提取的改变？这一区分可能如何改变你判断一个AI辅导工具是否真正有效的标准？
- AI辅导建立在一个"计算机隐喻"之上 —— 把心智当作一个有记忆限制的信息处理系统。这个隐喻在哪里感觉有力，又可能遗漏了关于人类如何学习的什么重要之处？
- 一个AI工具让一项任务感觉毫不费力：它解释下一步、减少摩擦，而学习者在使用它时表现出色。这算成功的[[teacher-role|教学]]吗？你会怎么知道学习者现在没有工具也能做？
- 认知负荷理论区分内在、外在与关联负荷。如果你在设计一个AI助手，你会刻意减少哪一种负荷，又会小心不去移除哪一种？
- 如果一个学习者知道自己可以把记忆和推理卸载给AI，什么时候这是明智的策略，什么时候又是悄悄阻止学习的捷径？是什么决定了二者的区别？
- 认知主义假定知识可被分解为成分并被随时间追踪。当我们把一个学习者的理解归结为一组可追踪的知识成分时，可能丢失什么？

## 引言

认知心理学是这样一种学习理论传统：它把学习视为内部心理表征 —— 记忆中持有的概念、图式与程序 —— 的改变，而非可观察行为的改变。其信息处理词汇（注意、编码、提取、有限的工作记忆）既为学习困难提供了诊断语言，也为[[intelligent-tutoring]]和[[knowledge-tracing]]背后的架构提供了基础：推断学习者内部状态并对其作出适应的系统。它仍是本知识库中[[metacognition]]、[[desirable-difficulties]]与[[self-regulated-learning]]的参照框架。

## 核心思想

- **学习是内部心理表征的改变。** 认知主义主张，学习涉及知识在记忆中的习得、存储与重组 —— 概念、图式与程序 —— 而非仅仅是可观察反应的改变。重要的是学习者*所知所能提取*的东西，不只是他们做了什么。
- **信息处理（计算机）隐喻。** 心智被当作一个有容量与瓶颈的信息处理系统 —— 对潜在能力的[[item-response-theory|测量]]、工作记忆限制、编码与提取 —— 这正是使AI辅导（一个建模并适应学习者认知的计算机程序）成为自然契合的那个模型。
- **注意与记忆是有限的。** 工作记忆容量有限；持久学习需要通过复述、精细化与[[retrieval-spacing-interleaving|提取练习]]编码进长期记忆。这把认知主义连接到关于[[cognitive-offloading]]的[[research-methods-aied|研究]]（把记忆/处理委派给外部工具），以及当AI绕过提取与练习时的"表现-学习落差"。
- **元认知调节认知。** [[metacognition]] —— 监控并控制自己的思考 —— 是一个鲜明的认知主义构念，它解释了为什么学习者对"何时依赖AI"的校准对学习至关重要（见[[cognitive-offloading]]与[[self-regulated-learning]]）。
- **知识是可分解且可追踪的。** 认知主义AIED假定学习者知识可被表征为成分并被随时间追踪 —— 这是[[knowledge-tracing]]、[[cognitive-diagnosis]]与[[item-response-theory]]的基础。

## 认知主义与教育中的AI

### AIED的认知主义谱系

认知主义可以说是教育中AI得以存在最应归功的理论。早期的认知导师（如Anderson基于ACT-R的导师）[[embodied-learning|具身]]了这样一个假设：学习可被建模为产生式规则，且一个系统能追踪学习者已掌握了哪些规则。这产生了至今仍定义本领域的典范架构：一个领域模型、一个追踪学习者知识状态的[[student-modeling|学生模型]]，和一个使教学自适应的[[pedagogy|教学]]模型 —— 全部源于认知主义。现代[[knowledge-tracing]]（贝叶斯、深度学习与基于IRT的）与[[cognitive-diagnosis]]延续了这一传统。同一假设也支撑着[[intelligent-tutoring]]、[[adaptive-learning]]与[[personalized-learning]]，它们在本知识库中被归入[[student-modeling|学习者建模与自适应教学]]总括之下。

### 认知负荷与教学设计

认知负荷理论（CLT）是[[learning-design|教学设计]]中应用最广的认知主义框架：它区分内在负荷（任务复杂度）、外在负荷（呈现摩擦）与关联负荷（图式建构努力）。设计良好的AI应减少外在负荷同时保留关联加工；整合不佳的AI三者全减，留下完成的任务与空洞的学习。CLT的工作记忆框架也是关于[[cognitive-offloading]]之争论的核心 —— AI究竟减少了有害的外在负荷，还是短路了产生学习的关联加工。

Mayer的多媒体学习认知理论（CTML）把同样的工作记忆假设应用于材料本身，其处方异常具体：词与图结合比只有词效果更好，当排除外在材料时、当一课被分段且由用户掌握节奏而非作为一个连续单元呈现时、当对应的词与图邻近且同时出现时、以及当叙述是对话式的且用友好的真人嗓音而非正式或机器生成时，学习者表现更好。

### 认知主义对行为主义与建构主义

- **对[[behaviorism]]：** 行为主义通过强化与操练把学习解释为可观察的行为改变；认知主义坚持内部表征并追踪心理状态。AI实践常显示"名为建构主义、实为行为主义"的落差，但认知主义设计（学生建模、知识追踪）不同于纯粹的行为主义操练-反馈，因为它们*表征并对学习者推断出的知识作出适应*，而非仅仅强化反应。
- **对[[constructivist|建构主义]]：** 建构主义主张[[learners]]通过经验主动建构意义；认知主义强调对（常为预先结构化的）知识与技能的准确编码。AIED的认知主义谱系（结构化领域、明确的知识成分）有时被建构主义者批判为过于行为主义或过于传递导向，而认知主义反驳说，表征并追踪知识正是使真正自适应教学成为可能的东西。
- **对[[learning-sciences|学习科学]]：** 认知主义提供了该领域据以设计的机制 —— 工作记忆、编码、提取、可分解的知识成分 —— 但它本身不是面向设计的。它解释学习如何发生；学习科学则追问如何构建它发生的环境，并使这些设计接受经验检验。

### AI时代的张力：认知主义的边界承压

[[generative-ai|生成式AI]]既延伸又挑战认知主义。它通过使知识表征更强大（作为知识引擎、可经[[knowledge-tracing]]追踪并经[[student-modeling]]适应的LLM）延伸它。它通过复杂化认知"所在何处"挑战它：当AI执行推理、记忆乃至类元认知功能时，"学习是发生在个体心智中的内部处理"这一认知主义假设便不稳了 —— 正如[[distributed-cognition]]、[[ai-cognitive-partner-co-regulation-learning|共同调节]]与后人本框架所主张的，认知可以分布于人与人工系统之间。然而认知主义问题仍是本领域的核心问题：*学习者内化了知识，还是工具持有它？* 这是认知外包与表现-学习落差问题的最纯粹形式。

## 对设计与研究的启示

1. **为内化而设计，不只是为表现。** 认知主义AIED应以学习者能否*在没有工具的情况下*提取并应用知识来评估 —— 而不是以受助表现。这就是[[ai-misuse-learning-harm|表现-学习落差]]，也是测量无助[[transfer-of-learning|迁移]]的理由。
2. **表征学习者，而不只是回应。** 把结构化[[student-modeling]]与[[knowledge-tracing]]挂接到AI对话上，使系统适应推断出的知识，而非流利却盲目地回应。([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **尊重工作记忆限制。** 把认知负荷理论应用于AI用户体验：减少外在负荷（摩擦、过载界面）同时保留关联加工（[[desirable-difficulties|生产性挣扎]]、提取练习），而非把所有认知需求最小化。
4. **校准元认知。** 因为[[metacognition]]支配学习者何时选择卸载，教校准（知道自己无助时实际能做什么）是对过度依赖的认知主义答案（见[[cognitive-offloading]]）。

## 关联概念

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — 这一实践族所依托的保持力发现

## 关联文章

- [[cognitive-shift-ai-education]] — AI教育中的认知转向
- [[cogtax-cognitive-taxonomy]] — 面向AI使用的认知分类法
- [[educlaw-bench-pedagogical-llm-agents-2026]] — 基于知识追踪的教学型LLM智能体
- [[nie-personavlm-long-term-personalization-2026]] — LLM学生建模与记忆
- [[ai-cognitive-partner-co-regulation-learning]] — 共同调节学习中作为认知伙伴的AI
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: thinking as human–AI interaction
