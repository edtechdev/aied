---
title: 社会文化学习
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:58:14-04:00"
type: concept
foundations: [agency, human-ai-collaboration]
pedagogy: [constructivist, learning-theories, scaffolding, sociocultural-learning]
technology: [generative-ai]
confidence: high
translation_of: concepts/sociocultural-learning
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

> **社会文化学习（sociocultural learning）** — 一族根植于维果茨基的理论，认为学习与发展通过社会参与产生，并由文化工具、语言和与更有知识者的互动中介。认知分布于人、制品和环境之间，而非仅居于个体之内。在[[ai-education|教育中的 AI]]中，社会文化理论框定了[[generative-ai|生成式 AI]]如何作为一种新型*中介主体*运作——既中介活动、又为互动生成情境性贡献的工具——并框定[[scaffolding]]、最近发展区（ZPD）、学徒制和实践共同体的设计。参见[[generative-ai-mediational-agent-sociocultural-2026]]。

## 值得思考的问题

- 维果茨基的最近发展区，是你能独立做的事与你在帮助下能做的事之间的差距。回想一次恰到好处的提示让你完成了独自做不到的事——是什么让那份帮助有效，又是什么时候它给得太多？
- 本页主张，人的思维被语言、书写等文化工具所"中介"，它们重组了我们推理的方式。如果这是真的，我们应当怎样看待一个 AI[[conversational-ai|聊天机器人]]作为一种新型思维工具——它又可能如何改变"知道"的含义？
- 社会文化理论说认知分布于人、制品和环境之间，而非在个人头脑之内。这与你自己实际做事的经验相符吗？如果它是对的，对设计学习意味着什么？
- 如果学习先发生在人与人之间、然后才发生在个体之内，那么一个让学生主要与机器而非同伴或更有知识的人类互动的 AI 辅导者，有什么风险？
- 你会如何决定一个 AI 辅导者该给多少支持，使学习者进步而不只是把答案递过去？

## 引言

### 概念

社会文化理论（Vygotsky, 1978；Luria；Leontiev）主张，高级心理功能通过参与有文化组织的活动而发展。与把学习全然定位于个体信息加工的说明不同，社会文化观点强调：

- **中介是根本性的。** 人借助并透过文化工具思考——语言、书写、图示、[[ai-technologies|技术]]——它们重组了人推理、记忆和解题的方式（Wertsch, 1991）。这些工具不只是传递信息；它们重塑认知与参与。
- **学习是社会性的。** 高级心理功能先出现在人与人之间（主体间地、在互动中），然后才出现在个体之内。学习通过与[[teacher-role|教师]]、同伴和共同体一起参与而产生——在[[scaffolding]]、学徒制和穿越 ZPD 等过程之中。
- **[[distributed-cognition|认知是分布的]]。** 认知工作分散在人、制品和环境之间（Hutchins；Clark & Chalmers；Pea），而非封闭在个体心智之中。[[distributed-cognition|分布认知]]、[[situated-learning|情境学习]]和实践共同体扩展了社会文化这一脉络。

### 最近发展区（ZPD）

ZPD（维果茨基）是在[[intelligent-tutoring|AI 辅导]]中应用最广的社会文化概念：学习者独立能做的事与借助帮助能做的事之间的空间。当教学瞄准这一区间时学习最有效——有足够的挑战推动发展，又有足够的支持使进步成为可能。它是[[scaffolding]]的理论基础：随着胜任力增长而撤出的、临时的、可调节的支持。在教育 AI 中，ZPD 框定了这个中心设计问题：一个[[intelligent-tutoring|AI 辅导]]者应提供多少支持，使学习推进而不至于把答案送出去——参见[[stanford-evidence-base-ai-k12-2026]]。

### AI 教育中的社会文化学习

社会文化理论以若干不同方式塑造着 AIED 的[[research-methods-aied|研究]]：

- **AI 作为中介主体。** 生成式 AI 使社会文化理论中中介手段与社会互动之间的区分变得复杂：它既中介活动*又*生成塑造互动的、对情境敏感且或然的贡献，却不具备意向性、社会成员资格或问责。Warschauer、Tate 与 Ritchie（2026）提出*中介主体*这一混合范畴，并推导出"人优先"的参与习惯（人类认知的首要性、有目的的[[student-engagement|投入]]、监督性主体性、认识论警觉、反思性[[self-regulated-learning|自我调节]]），以保全[[agency|学习者主体性]]。（[[generative-ai-mediational-agent-sociocultural-2026]]）
- **对 AI 调节作用的分阶段说明。**[[ai-cognitive-partner-co-regulation-learning|人机共同调节的发展框架]]给 AI 四种角色——脚手架、元认知支持、外部记忆和决策伙伴——并按阶段放置：幼儿期的结构化外部调节、儿童中期与青春期的[[metacognition|元认知]]伙伴，以及成年期复杂认知上的合作者。
- **ZPD 校准的脚手架。**[[intelligent-tutoring|AI 辅导]]者应动态校准帮助，使之落在每个学习者的区间之内。[[stanford-evidence-base-ai-k12-2026]]显示，调到学习者水平的辅导者优于泛泛的帮助；[[adaptive-learning]]和[[golrang-propact-pair-programming-2026]]通过调节难度与提示把 ZPD 操作化；而像[[finkelstein-principled-ai-education-2025]]这样的有原则框架论证支持应随胜任力增长而撤出。
- **第四个区间：模型知道什么。**[[scan-framework-task-assignment-generative-ai-2025|Tsim 与 Gutoreva（2025）]]扩展的是维果茨基的图示而非辅导回路，在 ZPD 上增加了一个*为[[generative-ai|GenAI]]所知*区间，并读出四个子区间来划分任务应被指派给谁：替代（没有任务特定知识，故由模型的通用能力承担）、辅助（部分知识，予以增强）、补全（有足够知识监督模型的输出）和不可谈判（足以独立完成，故委派增益甚微）。[[scaffolding|脚手架]]被表达为任务指派而非提示递送，而一个实时评价、反思和学习的[[metacognition|元认知]]回路，是使任务随时间在子区间间移动的东西。
- **学徒制与共同体。** 社会文化观念支撑认知学徒制、示范、教练和淡出；实践共同体把学习框定为向一个共同体实践的更充分参与的移动。
- **文化与[[governance|机构]]语境。** 与[[constructivist|建构主义]]相邻的社会文化脉络强调，文化维度塑造着什么算"知道"、谁是权威、努力意味着什么——见[[young-people-learning-generative-ai-rapid-review-2026|悉尼 PreK-12 快速综述]]的学习者—语境—文化框定。
- **验证话语测量需要其话语被测量的青少年。** 与四名焦点学生一起重新语境化话语移动的定义，把 LLM 分类 F1 在 Claim 上提高 +0.104、Question 上提高 +0.23，且学生自己的解读与成人和模型框架分歧——这是基于文本分类的结构性限制，而非数据量问题（[[youth-enter-chat-llm-student-talk-2026|Santos-Deonizio 等（2026）]]）。

### 与认知负荷和元认知的联系

社会文化脉络与[[cognitive-offloading|认知负荷]]理论（支持应管理负荷而不消除有益的努力）和[[metacognition]]（区间内的学习者正积极监控和调节自己的理解）紧密耦合。[[stanford-evidence-base-ai-k12-2026]]综合了[[k-12|K-12]]证据：当 AI 工具让学习者留在 ZPD 内而非替他们作答时效果最好，而[[human-in-the-loop-ai]]研究探讨人与 AI 的支持如何共同界定学习者的区间。

- **生成式 AI 作为中介主体（2026）：**借助维果茨基式的中介，一篇理论论文提议把生成式 AI 重新框定为不只是工具/中介手段，而是积极参与学习活动的*中介主体*，模糊了社会文化理论核心的工具对社会互动的边界（[[generative-ai-mediational-agent-sociocultural-2026]]）。这把生成模型定位为共同参与者而非被动工具，对中介、[[agency]]以及学习者—AI 关系如何在[[learning-sciences|学习科学]]中被理论化都有影响。

## 关联概念

- [[scaffolding]]
- [[constructivist]]
- [[learning-theories]]
- [[activity-theory-aied]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[desirable-difficulties]]
- [[adaptive-learning]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[intelligent-tutoring]]

## 关联文章
- [[youth-enter-chat-llm-student-talk-2026]] — 当青少年进入聊天：基于 LLM 的学生话语测量的验证
- [[generative-ai-mediational-agent-sociocultural-2026]] — 生成式 AI 作为中介主体
- [[golrang-propact-pair-programming-2026]] — 协作式 AI 辅导
- [[finkelstein-principled-ai-education-2025]] — 有原则的 AI 教育框架
- [[stanford-evidence-base-ai-k12-2026]] — K-12 教育 AI 的斯坦福证据基础
- [[young-people-learning-generative-ai-rapid-review-2026]] — 悉尼对 PreK-12 中 GenAI 的快速综述
- [[ai-cognitive-partner-co-regulation-learning]] — AI 作为认知伙伴与共同调节
