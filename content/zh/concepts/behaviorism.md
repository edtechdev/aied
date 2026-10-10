---
title: 行为主义
created: "2026-08-16T03:36:31-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories]
technology: [adaptive-learning, generative-ai, intelligent-tutoring]
level: [higher ed]
confidence: medium
translation_of: concepts/behaviorism
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **行为主义（Behaviorism）** —— 一种把学习视为由刺激-反应联结与强化所产生的可观察行为改变的学习理论，而非内部心理状态的改变。在 [[ai-education|教育中的 AI]]，行为主义原则是许多 [[intelligent-tutoring|智能导师]]与 [[adaptive-learning|自适应学习]]系统所主导的操练-练习、即时反馈与自适应步调设计的基础。([[ai-vocational-education-training-review]])

## 值得思考的问题

- 行为主义把学习视为由刺激-反应与强化驱动的可观察行为改变——而非内部心理状态。在阅读之前，你自己过去的哪些教育体验建立在奖励、重复与即时反馈之上？它们擅长什么，又可能遗漏了什么？
- 本页一个令人意外的发现是：即便教育话语奉行丰富的建构主义理论，实际的 AI 实施仍以行为主义为主——操练-练习、即时反馈、自适应步调。你认为为什么行为主义机制在实践中占主导，尽管它在理论上已不合时尚？
- 本页警示一种教育"图灵陷阱"——用 AI 复制而非增强人类教学。如果一个 AI 系统为正确回答与效率而优化，它可能悄悄优化掉学习者的什么主动知识建构？
- 行为主义设计被描述为对基础流畅性——词汇、算术、代码语法——有力，但对更高阶、概念性或能动性的学习单独而言不充分。在你自己的学习中，哪里一个操练-练习式 AI 会有帮助，哪里它会适得其反？
- 所提出的设计问题不是行为主义是否"正确"，而是给定系统的机制是否服务学习目标。你会如何判断一个 AI 导师的即时反馈、自适应步调设计是在建立可迁移的真实理解，还是仅仅让可观察的表现看起来不错？

## 引言

行为主义主张，学习是通过强化对刺激-反应联结的加强或削弱，且不可观察的心理构念是对学习的拙劣解释。它在教育中的应用遗产是**程序教学与操练-练习**：以小步呈现内容、引出一个回答、并立即强化正确答案。这些原则干净地映射到 [[adaptive-learning]] 与 [[intelligent-tutoring]] 系统的机制上，后者根据学生反应调整步调与难度并提供即时反馈。

## 核心观念

- **学习是行为改变。** 目标是表现上的可测量改变，而非内化的理解。这使行为主义设计对流畅性、速度与准确性等可观察结果而言是自然的。
- **强化驱动学习。** 正确的回答被强化、错误被纠正，通常伴随即时反馈——这是 AI 导师与操练系统中无处不在的设计模式。([[ai-vocational-education-training-review]])
- **小步与以步调脚手架。** 教学被分解为增量单元，每步都有反馈，类似于自适应系统编排练习的方式。
- **学习者在知识建构中大体被动。** 环境（或系统）结构并奖励回答；学习者回应而非建构意义——与 [[constructivist]] 假设正相反。

## 行为主义与教育中的 AI

### 行为主义设计在实践中占主导

实证工作反复发现，实际的 AI 实施以**行为主义或认知取向为主**——强调操练-练习、即时 [[feedback]] 与自适应步调——即便话语奉行更丰富的理论。一项对职业教育与培训（VET）中 AI 的 [[meta-analysis-systematic-review|系统综述]]得出结论：建构主义理论在 VET 话语中被奉行，而**行为主义 AI 实施在实践中占主导**，并警示了一种教育"图灵陷阱"——用 AI 复制而非增强人类教学。([[ai-vocational-education-training-review]])

### 输出等价：当行为不再证明学习

行为主义把学习定义为可观察行为的改变，这使它成为被生成式 AI 最直接地令其尴尬的理论：学习者现在可以产出一篇论文、一份分析或可运行的代码，与一位持有该成果本应证明的胜任力之人的作品无从区分。可观察的行为完全相同，而学习可能并未发生，这是 [[generativism-learning-theory|生成主义（Generativism）]]称之为行为等价问题的失败模式。

表现与学习之间的鸿沟并不新鲜，但 AI 加宽了它。在一项有近千名高中数学学生参加的现场实验中，对一个标准助手的无限制访问把练习表现提高了 48 个百分点，而同样这些学生在无辅助考试中后来比未用 AI 练习的同侪低 17 个百分点；一个有护栏的导师版本基本消除了这一赤字（[[genai-performance-vs-learning]]）。从行为上读，教训关乎测量而非教学法：一个为产出而优化的系统，可以在满足该理论自身的学习判据的同时，未能达成其目的。

### 与建构主义及能动性的张力

行为主义对反应-与-强化的强调，与 [[constructivist]]、[[self-regulated-learning]] 与 [[agency]] 目标处于直接张力。当 AI 系统为正确回答与效率而优化时，它们可能服务不足学习者的主动知识建构、批判性反思与自主决策。这与 [[constructivist]]"名建构主义、实行为主义"模式所标示的缺口是同一个——它把行为主义与关于 [[cognitive-offloading]] 以及 [[cognitive-offloading|过度依赖]]的争论联系起来，即当 AI 替学生做认知工作时。

### 行为主义设计仍然适用之处

行为主义原则仍然非常适合：
- **基础技能与流畅性建构** —— 重复与即时反馈可测量地提升自动化之处（如词汇、算术、代码语法）。
- **[[adaptive-learning]] 与 [[intelligent-tutoring]]** —— 它们依赖逐步练习、反应驱动的步调与即时反馈。([[ai-vocational-education-training-review]])
- **低利害 [[formative-assessment]]** —— 以及在目标结果可观察、路径大体程序化的明确领域中的操练。

设计问题不是行为主义是否"正确"，而是给定 AI 系统的行为主义机制是否服务*学习目标*——对程序性流畅性它们可以有力；对更高阶、概念性或能动性的学习，它们单独而言不充分。

## 行为主义与"关于 AI 的教育"

行为主义也出现在学习者把 AI 当作一个话题遭遇的方式中。该理论是 [[generative-ai|生成式 AI]]促使教育者重新审视的四大主导 [[learning-theories|学习理论]]——行为主义、认知主义、建构主义与联结主义——之一。([[generativism-learning-theory]]) 它也在合作学习与设计情境中被引用，作为学习者被教授的理论背景的一部分。([[ccct-cooperative-learning-technique]]) 理解行为主义帮助学习者看清为何许多 AI 工具（以及建立于其上的产品）是为反应-与-强化而设计，而非为更深的建构。

## 对设计与研究的意涵

1. **把机制匹配到目标。** 行为主义的操练-反馈设计适合程序性流畅性与可观察结果；它们单独而言不适合概念性、可迁移性或能动性的学习目标。
2. **留意理论-实践鸿沟。** 研究者应检查一个 AI 实施的行为主义机制是在服务其宣称的学习目标，还是在悄悄复制 AI 作为答题机的"图灵陷阱"。([[ai-vocational-education-training-review]])
3. **把行为主义与更丰富的脚手架配对。** 即时反馈设计嵌入更广的 [[scaffolding]] 与 [[self-regulated-learning]] 情境中最有效，而非作为纯操练单独存在。
4. **评估可观察*且*可迁移的结果。** 行为主义的成功判据（速度、准确性）应辅以学习是否迁移与泛化的测量，依 [[transfer-of-learning]] 与 [[research-methods-aied]]。

## 关联概念

- [[constructivist]]
- [[cognitive-psychology]] — 认知主义，学习理论的第三个经典极点
- [[learning-design]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[formative-assessment]]
- [[self-regulated-learning]]
- [[agency]]
- [[cognitive-offloading]]
- [[learning-theories]]

## 关联文章

- [[ai-vocational-education-training-review]] — 行为主义 AI 设计在 VET 实践中占主导，尽管奉行建构主义；"图灵陷阱"
- [[generativism-learning-theory]] — 生成主义 AI 促使重新思考的四大理论之一
- [[ccct-cooperative-learning-technique]] — 高等教育合作学习设计中被引用的行为主义
- [[wang-multi-agent-systems-learning-designers-2025]] — 协作式多智能体设计方法中的行为主义角色
