---
title: 游戏化学习
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **游戏化学习（GBL）** — 把游戏本身（数字或实体）用作学习的媒介与语境，由游戏的机制、挑战与进程承载教育内容。学习者*通过*玩来学习。与此相关，**游戏化**把游戏设计元素（积分、徽章、等级、排行榜）应用于非游戏的学习活动，而不把它们变成完整的游戏。在AI与[[educational-robotics|机器人]]教育中，两种路径都被用来使技术内容变得吸引人且有激励性。

## 值得思考的问题

- 游戏化学习把游戏本身用作学习的媒介——你*通过*玩来学习。游戏化则只是把积分、徽章与等级叠加到一个非游戏活动之上。你认为这两者对真实学习的影响，与对短期参与的影响，差别有多大？
- 一项比较综述发现，游戏化学习在非正式情境中更普遍，而游戏化在正式课堂中占主导，并偏向项目式学习。你认为为什么每种路径找到了不同的归宿——这告诉我们每种在哪里最有效？
- 游戏化扎根于自我决定理论——[[agency|自主]]、胜任、关联。如果动机是关于满足这些需要，那么一个积分加徽章的系统，为何可能因其塑造感知努力与注意力的方式而成功或失败？
- [[research-methods-aied|研究]]表明，类游戏与AI支持设计的动机益处，取决于它们如何塑造感知负荷与注意力，而非取决于游戏化本身。你何时见过游戏或徽章提升了参与却没有真正改善学习——或者反之？

## 引言

GBL扎根于[[motivation]]、[[student-engagement]]与[[active-learning]]理论：游戏提供内在动机、即时反馈与真实的问题语境。它与[[simulation]]、[[project-based-learning]]及[[educational-robotics]]相互重叠。GBL与[[educational-robotics]]、[[computational-thinking]]和[[cs-education]]尤其相关，在这些领域游戏能使抽象的技术概念变得具体而有趣。

### GBL如何出现在知识库的研究中

- **机器人教育：** 一项关于机器人教育中游戏化学习与游戏化的[[game-based-gamified-robotics-education-review-2026|比较系统综述]]发现，GBL在非正式情境中更普遍，而游戏化在正式课堂中占主导并偏向[[project-based-learning|项目式学习]]。
- **由机器人中介的游戏：** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] 是一个由机器人中介的反霸凌干预角色扮演游戏，[[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] 用互动式[[storytelling-in-education|数字讲故事]]来提升动机。
- **模拟游戏中的AI [[conversational-ai|对话智能体]]：** Wenzel、Geiger 与 Liening（2026）从横跨认知、动机、[[affective-computing|情感]]与[[sociocultural-learning|社会文化]]参与的、由理论驱动的元需求出发，推导出CAIS-GBL框架——数字游戏化学习中AI对话智能体的四条设计原则与十五项设计特性——并采取[[equity-in-ai-education|公平]]以设计求的立场。他们在商业模拟游戏中实例化的智能体（Lara）在认知与[[community-of-inquiry|社会临场感]]以及[[self-regulated-learning]]支持方面获得正面评价，弥补了模拟游戏中[[formative-assessment|形成性]]反馈与结构化反思有限这一常见缺口。

- **AI-GBL的有效性：** 一项对AI支持的游戏化学习的55项研究系统综述发现，其对知识、内在动机与情感参与有正面效应，但只有4项研究（7%）达到其高质量门槛，且只有4项（7%）是[[rct|RCT]]（[[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt，2026]]）。有效性取决于把AI机制与一个明确的[[learning-theories|学习理论]]对齐。

### 游戏化

**游戏化**是把游戏设计元素（积分、徽章、等级、排行榜、挑战、进度条）应用于非游戏语境，以激励并吸引用户。与学习*通过*一个游戏发生的游戏化学习不同，游戏化把游戏机制叠加到已有的学习活动之上，而不把它变成完整的游戏。它在教育中被用来提升动机、[[student-engagement]]与坚持性，并被广泛应用于正式课堂情境。

游戏化扎根于动机理论，特别是[[self-determination-theory]]（支持自主、胜任与关联）以及行为改变框架。它在应用领域如机器人学中与[[project-based-learning]]展现出特别的协同。在本知识库的研究中：

- **机器人教育：** 该比较综述发现，游戏化在机器人教育的正式课堂中占主导（p < .001），并强烈偏向[[project-based-learning|项目式学习]]（p = .009），而游戏化学习在非正式情境中更常见。
- **参与与动机：** 游戏化在本知识库中被用于在AI、[[cs-education|编程]]与[[stem-education|STEM]]学习情境中提升学习者参与与动机。[[genai-motivation-engagement-2026|生成式AI、动机与参与]]研究考察类游戏元素如何与AI结合以维持学习者兴趣。两项2026年的研究把游戏化与AI支持条件对照传统教学做了扩展比较：[[nasa-tlx-workload-gamified-ai-2026|一项NASA-TLX研究]]测量了传统、游戏化与AI支持学习条件下的感知负荷，[[arcs-motivational-ergonomics-gamified-ai-2026|一项ARCS研究]]考察了游戏化与AI支持学习中的动机"人因学"，对[[professional-training|职场培训]]有启示。二者共同说明，类游戏与AI支持设计的动机益处取决于它们如何塑造[[motivation|感知努力]]、负荷与注意力（例如ARCS的注意/相关性维度），而非取决于游戏化本身。

GBL与游戏化共同连接到[[educational-robotics]]、[[student-engagement]]、[[motivation]]、[[self-determination-theory]]、[[active-learning]]、[[simulation]]、[[project-based-learning]]与[[computational-thinking]]。

## 关联概念
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — 总括：AI教育中的教学法与教学策略
- [[virtual-and-augmented-reality]] — 沉浸式与游戏化练习在设计与证据上重叠

## 关联文章
- [[ai-game-based-learning-systematic-review-2026]] — 55项AI支持游戏化学习研究的系统综述：结果正面，证据基础薄弱

- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — Generative AI, Motivation, and Engagement
- [[nasa-tlx-workload-gamified-ai-2026]] — 跨游戏化/AI条件的NASA-TLX负荷
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS动机与AI支持的游戏化
