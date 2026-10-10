---
title: 体验式学习
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:58:08-04:00"
type: concept
pedagogy: [active-learning, embodied-learning, experiential-learning, project-based-learning]
level: [higher ed]
confidence: high
translation_of: concepts/experiential-learning
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

> **体验式学习（experiential learning）**——通过在真实或动手情境中直接体验、反思并应用知识来学习（"做中学"）。体验式方法借鉴 Kolb 的体验学习循环（具体体验、反思观察、抽象概念化、主动实验），强调学习者只有在行动、观察结果并反思时学得最深。在[[ai-education|AI 教育]]中，体验式学习包含动手实验室、基于项目的工作、[[educational-robotics|机器人学]]、[[simulation|模拟]]与真实世界的[[problem-solving|问题解决]]。

## 值得思考的问题

- Kolb 循环描述做中学：具体体验、反思、观察、概念化，然后主动实验。想想一项你真正学会的技能。它遵循了那个循环吗——单靠一场讲授能产生同样的深度吗？
- 在 AI、网络安全与机器人学教育中，体验式学习常常是默认，学生在其中通过操作真实工具来学习。为什么动手的应用性练习能弥合讲授留下的理论—实践鸿沟？
- 一些体验式方法现在在虚拟实验室与模拟机器人中使用 AI 助手。当"体验"本身被模拟或有 AI 辅助时，它还是真正的体验式吗——真实后果的缺失是否改变了学到的东西？
- 你何时见过"做中学"未能产生学习？经验要真正教会东西，哪些条件——反思、反馈、一个真实的问题——看起来是必需的？

## 引言

体验式学习与[[active-learning|主动学习]]、[[project-based-learning|项目式学习]]、[[embodied-learning|具身学习]]和[[simulation|模拟]]密切相关。它与 AI、网络安全与机器人学教育尤其相关，在这些领域中，学生通过在应用情境中操作工具和系统、而非仅通过讲授来发展技能。一个关键的理据是弥合专业准备中的理论—实践鸿沟。

### 体验式学习在知识库研究中的呈现

- **应急替代，以及一个说明它能走多远的评分标准。** [[ai-personas-fieldwork-experiential-learning-2026|Elhajj 等（2026）]]记录了由 2024 年黎巴嫩冲突所强制的替代：贝鲁特美国大学一门研究生体验式学习课程中的学生，因无法抵达社区做需求评估，改为访谈由 ChatGPT 生成的利益相关者角色。两名评分者给全部十个小组的提示打分，发现其分化很有启发性——与教育目标的一致性（均值 5.00）和视角多样性（4.90）强，而真实性与现实感（4.38）、尤其小组动力与连贯性（3.80，其中一个 30 人角色的焦点小组退化为连续的个别访谈）以及局限与缺口（3.20）弱，最后一项之所以弱，是因为情感平淡、缺乏矛盾、文化具体性单薄在每一个情境中反复出现。作者的结论是一个边界而非裁决：角色扮演可以作为排练，也可以在无法进入或不安全时作为权宜之计，但不在情感复杂性、文化具体性与人际动力*就是*学习目标的地方。他们的缓解手段是结构性的——把模拟角色扮演与真实访谈配对，使学生能比较，并训练学生质询角色输出中的偏见与泛化，而非把它当作田野证据对待。
- **网络安全实验室：**[[genai-cybersecurity-ocr-multimodal-instruction-2025|大语言模型辅助的网络安全教学]]把一个[[generative-ai|生成式 AI]]教学助手整合进一个虚拟实验平台，支持动手的体验式技能建设。
- **机器人学项目：**[[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]用一个基于项目的、动手的方法教授机器人学，应对经典课程缺乏实践经验的问题。
- **模拟与具身学习：**[[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]让初学者用模拟机器人做实验，而[[embodied-learning|具身]]机器人交互把学习锚定在直接经验中。
- **AI 作为应对不确定性的基础设施，而非效率。** [[shi-genai-experiential-learning-management-education-2026|Shi、Dai 与 Zhang（2026）]]给生成式 AI 一个角色，让它在商业模拟中生成颠覆性事件与连锁后果，于是团队在信息不完整下修订计划，并警告受保护的模拟可能留下到课堂之外变成负担的决策习惯。

### AI 支持的课程中两种形式的动手学习

一项对 32 项 AI 支持的设计教育中动手学习的同行评议研究做的主题综述（[[hands-on-learning-necessity-age-of-ai-review-2026|Yu、Liu 与 Zhu, 2026]]）论证，AI 重组而非取代体验式学习，并划分出一个本知识库其他来源倾向于抹去的区分：*具身动手（Embodied Hands-on）*依赖身体动作、工具与材料，而*认知动手（Cognitive Hands-on）*通过对 AI 生成的输出的持续操作、判断与调整而发展。两者运行同一个行动—反馈—反思—精炼循环，但从不同来源获取反馈——前者来自真实世界的材料阻力，后者来自语言与视觉结果——因此不应被视为等价或互相替代。该综述的告诫是：生成效率会压缩探索阶段——若干纳入的研究报告探索性草图与渐进试错减少，于是 AI 带来的更多迭代未必意味着更大的迭代深度，学生可能错过那些使动手工作有教育意义的失败与材料约束的遭遇。与此一致，[[prompt-engineering|提示]]本身并未提高受评工作中的[[creativity|创造性]]，而多步操作（生成、修改、选择）做到了——再次把学习定位在学习者的判断里，而非生成里。

体验式学习与[[active-learning|主动学习]]、[[project-based-learning|项目式学习]]、[[embodied-learning|具身学习]]、[[simulation|模拟]]、[[educational-robotics|教育机器人学]]以及[[higher-ed|高等教育]]的专业准备相连。

融入工作的经验可以是高阶能力的约束条件：在一个智能制造实验室的 89 个赞助顶点项目中，从 Workforce Readiness Level 6 晋升到 7 是由嵌入产业的实习而非额外的课程所把门的（[[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al.（2026）]]）。

## 关联概念

- [[active-learning]]
- [[project-based-learning]]
- [[embodied-learning]]
- [[simulation]]
- [[educational-robotics]]
- [[higher-ed]]
- [[learning-theories]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[virtual-and-augmented-reality]] — 沉浸式练习作为刻意的经验

## 关联文章

- [[genai-counter-learner-groupthink-2025]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level framework for smart manufacturing in the AI era
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — GenAI in Cybersecurity Education
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[ai-lms-middle-school-longitudinal]] — AI-Integrated LMS Longitudinal Study
- [[li-ai-science-situated-learning-teachers-2025]]
- [[ai-personas-fieldwork-experiential-learning-2026]] — AI 角色替代社区田野工作，附一个说明替代在何处失败的五指标评分标准（Elhajj et al. 2026）
- [[hands-on-learning-necessity-age-of-ai-review-2026]] — 在 AI 支持的设计教育中区分具身动手与认知动手的主题综述（Yu, Liu & Zhu 2026）
- [[shi-genai-experiential-learning-management-education-2026]] — 一门围绕三个生成式 AI 机制重构的战略管理课程
