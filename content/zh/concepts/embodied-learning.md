---
title: 具身学习
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
translation_of: concepts/embodied-learning
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

> **具身学习**——一条[[pedagogy|教学法]]原则：学习扎根于身体经验、物理互动和学习者的感觉运动语境。具身取向主张，认知并非纯粹抽象，而是由身体及其与环境的互动所塑造。在[[ai-education|AI 教育]]中，具身性经由[[educational-robotics|教育机器人]]和[[educational-robotics|社交机器人]]实现，它们的物理存在把抽象概念（如程序逻辑或社交技能）锚定在可观察、可操纵的行为上。

## 值得思考的问题

- 我们常把学习当作"发生在头脑里"的事，身体只是把大脑驮来驮去。如果学习实际上扎根于身体经验和与环境的互动呢？有什么学科你学的时候似乎需要动用身体——而它有可能被纯粹抽象地学会吗？
- 具身取向主张，一个有物理实体、可操纵的智能体帮助学习者把抽象观念连接到具体结果——比如看到一个程序让机器人动起来。你什么时候注意到，做一件身体上的事情让一个抽象概念终于"想通"了？
- 一些[[research-methods-aied|研究者]]把手势当作理解的证据——追踪学生的手部动作与他们的言语一起，来评估概念掌握。如果一个学生的手在其言语之前就"懂"了这个概念，那对我们应当如何评价学习意味着什么？
- 一个新兴的批评挑战在抽象符号上运作的"去具身"AI，主张 AI 应当围绕具身智能来设计，以维持学习者的思考而不是把它外包出去。你认为一个从未有过身体的 AI 能充分支持具身学习吗？

## 引言

具身学习与[[active-learning]]、[[experiential-learning]]以及情境性/[[constructivist]]理论密切相关。其核心主张是：一个有物理实体、可操纵的智能体帮助学习者把抽象观念连接到具体结果——一个让机器人动起来的程序，或与一个实体机器人的角色扮演——其方式是纯屏幕交互可能做不到的。机器人技术是 AI 在教育中最清晰的具身化，给学习者可看、可触、可观察的东西。

### 具身学习如何出现在知识库的研究中

- **扎根式编程：**[[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]把[[cs-education|积木式编程]]扎根于具身的机器人执行上，创造出一个编写、运行、观察、修订的紧密回路，使学习者看到自己的代码变成行为。
- **社交机器人交互：**用于[[storytelling-in-education|讲故事]]的[[educational-robotics|社交机器人]]（[[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]、[[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]）、角色扮演（[[remind-robot-mediated-roleplay-antibullying-2026|REMind]]）和手语（[[pepper-robot-sign-language-lis-2025|Pepper]]）提供具身的社交互动，支持关系性和[[social-emotional-learning|情绪性]]学习。
- **具身特征并不是驱动结果的东西。** 一项对 11 项 RALL 研究的元分析（N = 595, g = 0.83, I² = 84.4%）发现，机器人形态、模态、自主性和社会角色并不调节第二语言学习；小组形式胜过一对一，因此起作用的是机器人的位置，而不是它的具身性（[[robot-assisted-language-learning-meta-analysis-2026|Wang 等人（2026）]]）。
- **具身与创意写作：**[[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|关于创意写作中机器人—LLM 整合的研究]]考察具身性如何影响学习者的互动与结果。
- **人机交互：**[[educational-robotics|HRI]]研究（[[task-context-trust-educational-hri-2026|信任]]、[[human-autonomy-agency-hri-review-2025|能动性]]）考察物理具身如何塑造信任、[[student-engagement|投入]]和[[agency|自主性]]。
- **手势作为理解的证据：**[[multimodal-embodied-cognition-oral-explanations-2026|Morphew 等人]]把计算机视觉的手势追踪与对言语的[[llm]]分析结合起来，表明工科学生对统计的概念理解经由言语和手势同时表达。高置信度的解释性手势围绕特定概念聚集（尤其是均值），而手势—言语的紧密耦合标志着连贯的概念性表达，二者的分歧则标志着正在形成中的观念——这经由[[multimodal|多模态学习分析]]把具身行动定位为[[assessment-validity|评价]]中的证据，而不只是一个学习机制。

### 具身智能与对去具身 AI 的批评

知识库具身研究的第二支更理论的线索，涉及*身体*在 AI-[[sociocultural-learning|中介的学习]]中的角色——不是经由实体机器人，而是经由这样一个问题：[[ai-technologies|AI 系统]]本身是否（或能否是）具身的。这项工作挑战建立在抽象信息处理之上的符号性、去具身 AI 模型的主导地位：

- **作为设计原则的具身 AI。****E3-HOT 框架**主张，要维持学习者的认知能动性和[[critical-thinking|高阶思维]]（而不是鼓励[[cognitive-offloading|认知外包]]），AI 应当在虚实融合的学习环境内围绕*具身智能*——情境嵌入、具身参与和认知创造——来设计。（[[zhu-e3-hot-embodied-intelligence-sustainable-learning]]）
- **去具身[[generative-ai|生成式 AI]]的局限。** 后认知主义学术论证，当前的 GenAI 系统缺乏本体感觉、多模态能动性和具身实践，并倡导一种扎根于情境性、涌现性和感觉运动耦合的"具身 AI"，为人—[[student-ai-interaction|AI 交互]]提出一种知觉—[[affective-computing|情感]]编舞。（[[videla-embodied-ai-education-choreography]]）
- **具身、情境性与社会建构。** 在[[science-education|科学学习]]中，AI 工具作为"中介人工物"发挥作用，使数字实践共同体和跨界成为可能，把具身的、真实的探究连接到真实世界和跨学科语境。（[[li-ai-science-situated-learning-teachers-2025]]）这把具身性连接到[[situated-learning]]和[[distributed-cognition]]。

具身学习连接到[[educational-robotics]]、[[educational-robotics]]、[[educational-robotics]]、[[active-learning]]、[[experiential-learning]]、[[situated-learning]]、[[distributed-cognition]]、[[computational-thinking]]和[[social-emotional-learning]]。

## 关联概念
- [[educational-robotics]]
- [[active-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[computational-thinking]]
- [[social-emotional-learning]]
- [[learning-theories]]
- [[multimodal]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — 试图直接利用具身性的那个模态

## 关联文章
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[pepper-robot-sign-language-lis-2025]] — Pepper and Sign Language
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration in Creative Writing
- [[robot-assisted-language-learning-meta-analysis-2026]] — 对 AI 增强的具身机器人辅助语言学习的元分析
- [[vargas-situated-learning-ai-review-2024]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[videla-embodied-ai-education-choreography]]
