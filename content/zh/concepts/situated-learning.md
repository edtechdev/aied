---
title: 情境学习
created: "2026-08-16T09:22:41-04:00"
updated: "2026-10-09T18:58:11-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [constructivist, experiential-learning, learning-theories, situated-learning, sociocultural-learning]
confidence: high
translation_of: concepts/situated-learning
source_updated: "2026-09-30T09:53:03-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **情境学习** —— 一种源于 Lave 与 Wenger（1991）1990 年代早期工作的理论，它认为学习并非孤立、去情境化的行为，而是通过参与真实的活动、情境与文化发生的。知识由学习者与同伴在[[collaborative-learning|实践社群]]中共同建构，而新手通过合法的边缘性参与来学习——随着他们从社群的边缘走向中心，吸收专家成员的文化、语言与做法。重点落在真实世界情境中的做中学，在那里[[assessment]]从任务本身中浮现，而非与之分离。

## 值得思考的问题

- 想想某样你真正精通的东西——一项技能、一门手艺、一种工艺。你主要是从抽象的教学中学到它的，还是通过参与一个真正做那件事的社群？这对知识实际栖身何处有何提示？
- Lave 与 Wenger 描述新手通过"合法的边缘性参与"来学习——从实践社群的边缘起步，逐步向内移动。你在哪里观察过（或本人曾是）这样一个新来者，又是什么让他们从边缘走到中心？
- 如果知识"情境化"于真实情境之中，这对刻意把学习从真实世界情境中分离出来的传统课堂意味着什么——对那些被设计来交付去情境化内容的 AI 工具又意味着什么？
- 本页把情境学习当作 AI 的设计透镜。一个自适应系统或模拟，如何能让学习扎根于真实实践，而非把它抽离出情境？
- [[research-methods-aied|研究]]说，有哪些障碍挡在把 AI 驱动的学习置于真实情境的路上，而其中哪些你在自己的机构中见过？

## 引言

情境学习是本知识库[[learning-theories]]脉络内的活动与情境理论之一。它承接维果茨基式的社会建构主题，但增添了强烈强调"做"与"学"的紧密整合，以及实践社群的重要性。作为一种教育立场，它通过把学习者的[[sociocultural-learning|社会文化]]语境推向前台、作为获取技能与习得与其现实相关的知识的关键要素，直面传统的标准化学校教育。

在[[ai-education|AI 教育]]文献中，情境学习之所以重要，是因为它为 AI 提供了一个设计透镜：[[adaptive-learning|自适应系统]]、置于真实情境中的[[intelligent-tutoring|智能辅导]]，以及[[virtual-and-augmented-reality|沉浸式]][[simulation|模拟]]能把 AI 驱动的教育扎根于真实世界情境，而情境学习反过来为 AI 提供了扎根于真实实践与复杂性的有意义的锚。二者被广泛视为互补，而人类的指引对[[ethics|伦理]]根基仍然必不可少。

### 情境学习作为 AI 的设计透镜

本知识库的研究把情境学习不仅当作抽象理论，也当作 AI 教育的具体设计与评估框架：

- **机遇与障碍。** 一项对 60 篇文章（横跨三十年）的 PRISMA[[meta-analysis-systematic-review|系统综述]]发现，AI 可以增强情境学习——通过契合学生不断演进之需求的自适应系统、置于真实情境中的智能辅导、行政任务的自动化，以及数据驱动的教师支持——而主要障碍是传统学校单向的被动学习、对预定结果的过度强调，以及教师有限的情境知识。人类指引对伦理根基仍然必不可少。（[[vargas-situated-learning-ai-review-2024]]）
- **AI 作为连接教育与现实的催化剂。** AI 可以充当情境学习的*催化剂*，通过把教育与现实和真实情境连接起来，使学习扎根于真实世界场景。（[[vargas-ai-catalyst-situated-learning-2026]]）
- **真实探究中的中介造物。** 在[[science-education|科学学习]]中，AI 工具（虚拟实验室、模拟、智能辅导）充当"中介造物"，通过促成数字实践社群以及学校、真实世界与跨学科情境之间的边界跨越来扩展情境学习——把学生从"知识学习者"转变为"科学从业者"。（[[li-ai-science-situated-learning-teachers-2025]]）
- **情境化的[[curriculum-design|课程]]装置。** [[ai-literacy|AI 素养]]可以通过*情境学习事件*来培养——一些主动的[[teacher-role|教学]]工具（预期、产出、反思），通过真实世界的[[problem-solving]]而非抽象教学来建构 AI 能力。（[[panciroli-ai-literacy-episodes-situated-learning]]）
- **[[design-based-research|设计本位]]学习中的情境化评估。** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等（2026）]]把研究置于情境学习理论与迭代设计[[pedagogy]]之上，在教师、同侪评审与基金评审三种角色下评估了 80 份学生设计海报。角色感知的[[prompt-engineering|提示]]产出了质性上不同的评估反馈——教师式的鼓励且重过程，同侪式的支持且对话式，基金评审式的正式且重结果——这些差异是认识论上的，而不只是风格上的，凸显了设计实践的不同侧面。这表明，情境化、角色特定的评估可以在以语义精确的量表搭起支架时由[[llm|LLM]]模拟，也表明设计本位学习中的评估从真实任务及其角色中浮现，而非与之分离。
- **情境化的 AI 伦理。** 关于 AI 的伦理推理本身最好被当作*情境化的*——扎根于文化历史与生态情境，而非抽象原则。（[[raffaghelli-situated-ai-ethics-2026]]）

情境学习与[[embodied-learning]]（二者都强调认知在情境与行动中的扎根）、[[distributed-cognition]]（分布于人、工具与情境的学习）、[[experiential-learning]]与[[constructivist]]理论紧密相连。在 AI 教育中，它支撑着对去情境化、去具身学习的批评：让学习者保持锚定于真实实践的 AI 设计，保全了持久学习所需的情境性。

## 关联概念

- [[learner-identity]] — 不断演进的学科性、专业性、创造性与学术性学习者身份
- [[learning-theories]]
- [[constructivist]]
- [[experiential-learning]]
- [[embodied-learning]]
- [[distributed-cognition]]
- [[collaborative-learning]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[teacher-role]]
- [[learning-design]]
- [[ai-education]]
- [[virtual-and-augmented-reality]] — 沉浸式环境作为通往真实情境的路径

## 关联文章

- [[vargas-situated-learning-ai-review-2024]] — 情境学习与 AI 教育的 PRISMA 系统综述（本页的主要参考）
- [[genai-educational-outcomes-meta-analysis]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[raffaghelli-situated-ai-ethics-2026]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[panciroli-ai-literacy-episodes-situated-learning]]
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM 作为迭代教学设计的行动者
