---
title: 驳论文本
created: "2026-08-26T10:20:00-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition, misconceptions, scaffolding]
technology: [generative-ai]
discipline: [science education]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/refutation-text
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **驳论文本** —— 一种纠正迷思概念的技术：文本先明确陈述一个常见迷思，直接驳倒它，再呈现科学上正确的概念。它源于科学教育的[[misconceptions|概念转变]]文献，是一项经过验证的低技术干预，用于动摇那些抗拒常规教学的、与直觉一致的稳定迷思。在 AI 教育中，驳论文本越来越多地以两种方式使用：作为 AI 干预（个性化对话、LLM 生成内容）的**对照条件**，以及作为**AI 生成内容**——由[[generative-ai|生成式 AI]]产出的概念转变文本与迷思文本，用以纠正信念或为协作讨论引题。

## 值得思考的问题

- 你是否曾仅仅通过给出正确答案来"纠正"学生的错误观念，结果迷思后来又冒了出来？本页论证迷思不是知识缺口，而是被主动持有、抗拒常规教学的信念。这对你那次纠正为何失败意味着什么？
- 驳论文本明确陈述迷思、驳倒它、给出正确概念——不同于只是呈现真理的标准说明文。既然只教正确的观念显然无效，为什么把错误的想法大声说出来反而有助于改变它？
- 关于个性化 AI 对话是否胜过静态驳论文本，研究结论并不一致：一项研究中互动对话带来了更大、更快的信念改变；另一项中精心编写的文本则胜过了被提示的 AI 聊天。什么可能解释这些相互矛盾的结果，它对"互动总更好"意味着什么？
- AI 现在能生成与专家撰写质量相当的驳论文本，甚至能生成迷思来为结构化同伴讨论引题。刻意拿 AI 生成的错误观念来教学，这个想法对你来说是冒险还是有益的？在什么条件下你会尝试？
- 驳论文本效应似乎集中在高成就学生身上，并受认识论与元认知调节。如果这项技术对强者帮助最大，那么一个在混合程度班级中使用它的教师，承担了什么义务？
- 在往下读之前，说出一个你当前就所教学科持有的迷思，并设想由你亲手写下那条明确的"错误"论断及其驳斥。这个练习揭示了写好一份驳斥有多难？

## 引言

### 概念本身

驳论文本立基于这样一个观念：迷思不只是知识上的缺口，而是被主动持有、看似合理、自我强化的信念，抗拒纠正——这是概念转变研究的核心主张。一份驳论文本的做法是：把迷思挑明，指认其为错误并解释原因，再以学习者能够整合的方式给出正确概念。这与标准说明文不同，后者只是呈现正确信息，并假定迷思会被自行取代。

在 AI 教育中，核心发现是纠正的*形式*与*互动性*都很重要。汇聚的证据（[[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett 与 Tangen 2026]]）表明，教科书式的静态驳斥能可靠地纠正信念，但**个性化、互动式的 AI 对话**可以通过针对学习者具体的迷思并在动机上使其投入，产生更大更快的信念下降。然而这一优势可能依情境与设计而变：在[[akdogan-heat-temperature-conceptual-change-thesis-2025|科学教育中（Akdoğan 2025）]]，结构良好的概念转变文本（专家*或* AI 生成的）胜过了被提示的互动式 ChatGPT 对话——这表明对话的设计（个性化还是通用）与学科共同决定了哪种形式胜出。

### 为什么驳论文本对 AI 教育重要

- **AI 作为纠正者。** 对话式 AI 辅导系统能提供*个性化*的驳斥——即时把驳斥适配到学习者具体的迷思上，这是预先写好的文本做不到的。与静态驳斥相比，这产生更强的即时信念改变与更高的投入度/信心（[[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett 与 Tangen 2026]]），不过效应可能需要间隔性强化才能持续。
- **AI 作为驳斥内容的生成者。** [[generative-ai|生成式 AI]]能产出与专家撰写质量相当的有效概念转变文本（[[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan 2025]]），并能廉价地生成大量情境特定的迷思文本——把原本依赖教师经验的迷思式学习规模化（[[llms-misconception-collaborative-learning-healthcare-2026|Cheah 等人 2026]]）。
- **AI 生成的迷思作为一种学习资源。** 与其把 AI 生成的迷思视为有害，不如对它们进行结构化的同伴讨论——一种协作式驳斥——可以促进概念转变与批判性思维（[[llms-misconception-collaborative-learning-healthcare-2026|Cheah 等人 2026]]）。
- **对迷思教育的补充。** 驳论文本是纠正那些支撑学生关于 AI 本身的错误观念的概念性迷思的推荐策略（见[[misconceptions]]与[[critical-genai-use-predictors]]）。

### 驳论文本与相关技术的比较

驳论文本是概念转变工具箱的一员，与类比、反差事件与互动对话并列。它的优势在于**可规模化、低成本且确有成效**；其局限在于静态文本无法适配学习者。AI 对话填补了适配的缺口，却引入设计依赖性（个性化、提示质量），并在某些研究中相对精心编写的文本并无优势。因此驳论文本与 AI 对话的关系是互补的：文本提供规模化下可靠的基线纠正；个性化 AI 对话在设计良好时提供更强、更快、更能激励的纠正。

### 关键研究主题

- 个性化 AI 对话是否胜过静态驳论文本，以及在什么条件下。
- AI 生成的驳斥/概念转变文本是否达到专家撰写的质量。
- 用 AI 生成迷思以开展协作的、基于迷思的学习。
- 学习者特征（成就、认识论、元认知）在调节驳斥有效性上的作用。
- 间隔性强化，用以维持互动式驳斥的初始优势。

### 实践启示

对教师而言，驳论文本仍是纠正顽固迷思的可靠、低门槛途径。对要整合 AI 的人，证据建议：（1）用 AI 大规模*生成*有效的驳斥/概念转变内容；（2）在可行处，通过个性化 AI 对话传递驳斥，以获得更强的即时投入与信念改变；（3）预期 AI 生成的迷思在辅以结构化讨论加以直面时具有教学上的用处；以及（4）为学习者而设计——驳斥效应可能集中在高成就学生身上并受认识论与元认知调节，因此支架与后续跟进都很重要。

## 关联概念
- [[pedagogical-patterns]] — 驳斥序列，包含两项直接冲突的结果
- [[misconceptions]]
- [[scaffolding]]
- [[metacognition]]
- [[generative-ai]]
- [[stem-education]]
- [[physics-education]]
- [[medical-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]

## 关联文章
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — 个性化 AI 对话与教科书式驳斥在信念纠正上的比较
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — 专家/AI 概念转变文本与互动式 AI 对话的比较
- [[llms-misconception-collaborative-learning-healthcare-2026]] — 用于协作学习的 LLM 生成迷思
- [[chatgpt-inoculation-training-verification-2026]] — 接种训练作为一种邻近的驳斥式干预
- [[critical-genai-use-predictors]] — 推荐用驳论文本针对概念性迷思
- [[ai-learning-companions-framework]] — AI 学习伙伴与迷思纠正
