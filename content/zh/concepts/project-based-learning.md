---
title: 基于项目的学习（Project-Based Learning）
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:58:17-04:00"
type: concept
pedagogy: [active-learning, collaborative-learning, project-based-learning]
technology: [educational-robotics]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/project-based-learning
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **基于项目的学习（PBL）** — 一种主动的、以学习者为中心的[[pedagogy]]，学生通过参与需要探究、问题解决和知识应用以产出实体成果的、长期的真实世界项目来学习。PBL 强调学生[[agency|自主]]、协作和[[authentic-assessment|真实任务]]，并广泛与技术一起使用——包括[[educational-robotics|教育机器人]]和 AI——以给学习者动手的、有意义的项目。它与纯理论或讲授式教学相对照。

## 值得思考的问题

- 回想你上一次真正"在做中学"——构建、设计或创造某个真实的东西。是什么让那段经历比同一周坐着听的一节课更难忘记？这种差异可能如何迁移到学生学习 AI 或机器人的方式上？
- PBL 和基于问题的学习常被混为一谈，但二者有别：一个以产出实体项目为中心，另一个以解决一个结构不良的问题为中心。在阅读之前，你会如何区分两者——你的答案对课程应如何设计重要吗？
- 一项机器人研究用一个敏捷的、跨学期的项目来应对"理论—实践差距"。想想你自己的领域，学生被教的与他们实际能做之间的差距通常在哪里张开——一个基于项目的方法需要什么才能弥合它？
- PBL 强调学生自主、协作和真实任务。但学习者在自我导向的准备度上各不相同。如果你在没有自我导向支持的情况下把长期项目丢进课堂，会出什么问题，谁受损最大？
- 研究中 PBL 常与游戏化和教育机器人耦合。从你的经验看，趣味性/[[student-engagement|参与度]]始终是深度学习的可靠代理吗，还是一个得分漂亮的"游戏"能掩盖浅层的理解？
- 在继续阅读之前，问问自己：什么具体证据能说服你基于项目的学习对某个特定学习结果真的胜过讲授式教学——在真实课程中收集这种证据有多难？

## 引言

PBL 与[[active-learning]]、[[experiential-learning]]、[[collaborative-learning]]和[[constructivist]]教学法密切相关。它对 AI 和机器人教育尤其有价值，因为这些领域本质上是应用性的：学习者最好通过在项目情境中构建和测试来理解机器人、算法和系统。PBL 还培养[[computational-thinking]]、问题解决和[[self-regulated-learning|自我导向]]。

基于项目的学习与[[problem-based-learning|基于问题的学习]]密切相关——但有别于后者：两者都以学习者为中心、受情境驱动，但基于问题的学习以一个需要探究和知识建构才能解决的结构不良的*问题*为中心，而基于项目的学习以产出一个有形的*项目*或制品为中心。两者常被混淆，许多 AI 教育框架同时取法两者（AI 时代的处理见[[problem-based-learning|基于问题的学习]]页面）。

### PBL 在知识库研究中如何出现

- **机器人项目：** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]提出一种敏捷的、跨学期的基于项目的方法，在应用[[cs-education|计算机科学]]项目中教授机器人，应对理论—实践差距。
- **早期童年项目路径中的 AI 智能体：** [[creative-project-approach-ai-early-childhood-2025|Yang、Li 与 Lee（2025）]]把 PBL 的基础形态——项目路径（Katz & Chard），一个对真实世界主题的长期协作探究——延伸到[[early-childhood-elementary-ai-education|早期童年]]，提出五步**创意项目路径**，把[[agentic-ai|AI 智能体]]和[[educational-robotics|机器人]]（编码机器人和生成式社交机器人）融入项目以培养幼儿的[[creativity|创造性学习]]。五步——识别学习需求、促进[[teacher-role|教师]]引导的儿童—机器人互动、把 AI 置于情境中、校准自动化/创造力的平衡、评估结果——让教师保持为引导探究的促进者，把 PBL 定位为发展适切地把 AI 用于最小学习者的天然载体。
- **游戏化耦合：** [[game-based-gamified-robotics-education-review-2026|一项系统综述]]发现，机器人教育中的[[game-based-learning|游戏化]]强烈有利于基于项目的学习（p = .009）。

关于这一配对的唯一三层元分析汇集了 22 项受控研究（66 个效应量，2023 年 1 月至 2026 年 4 月），估计 GenAI 支持的 PBL/PjBL 效应较大，g = 0.819，95% CI [0.655, 0.983]，尽管作者的 PET-PEESE 敏感性分析把估计降到 g = 0.378，因此头条数字应读作可能被夸大（[[chen-pbl-pjbl-genai-meta-analysis-2026|Chen 等 2026]]）。工具类型显著调节效应（QM = 14.301，p < .001）：直接使用的通用聊天机器人汇集值更高（g = 0.970），高于定制进课程平台、虚拟病人或智能体的系统（g = 0.455），暗示工具如何嵌入比选哪个模型更重要。

- **AI 素养与协同设计：** PBL 是许多[[ai-literacy|AI 素养]]和[[teacher-education]]干预的基础，学习者协同创建 AI 工具或资源。
- **AI 智能体支持的软件 PBL：** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka 等（2026）]]把规范驱动开发（Spec-Driven Development）与[[agentic-ai|AI 智能体]]嵌入一个团队式本科软件 PBL 课程，把项目结构化为调查、规划、实现和评审阶段，配以由教师主持的理解检查。
- **内嵌教学智能体的沉浸式 VR 工作室：** [[ai-ive-pbl-vocational-design-creativity-2026|Jin 等（2026）]]为职业设计教育规定了 **AI-IVE-PBL** 模型，把 PBL 与一个 AI 增强的沉浸式虚拟环境（[[virtual-and-augmented-reality|VR]]头显加一个[[llm]]支持的教学助手）配对。PBL 对职业学习者惯常的约束——设备有限、场景难以复制、教师[[scaffolding]]延迟——被沉浸加会中智能体所吸收，模型被表述为五阶段循环（发现、构想、建模、交流、改进），每阶段有具名行动者和制品，由持续的观念发展话语驱动。在一项为期 12 周的准实验（n = 63）中，该条件提高了设计能力和创造能力，并提升了认知和行为[[student-engagement|参与]]，而观念新颖性（创新思维）和情感参与未变——提醒我们一个项目的设计性部分和观念性部分的价值不会一起移动。

PBL 连接到[[active-learning]]、[[experiential-learning]]、[[collaborative-learning]]、[[educational-robotics]]、[[game-based-learning]]、[[computational-thinking]]以及[[higher-ed]]/[[k-12]]教学法。

- **PBL 支持 AI 驱动的机器人学习。** [[educational-robotics-pathways-2026|路径研究]]表明，基于项目的机器人 + AI 课程让高中生通过参与真实世界实践、设计和好玩的创意表达来学习。

## PBL 在 AI 素养课程中

- **在 AI 素养课程中测量 PBL。** Zhu 与 Kong（2026）开发并验证了一个 AI 基于项目学习量表（AI-PBLS），以香港中学和大学生经验为基础，并用它显示感知到的 PBL 通过 AI [[problem-solving]]中的赋能和 AI [[ethics|伦理]]意识这两个中介机制促进 AI 素养课程满意度。该量表为[[research-methods-aied|研究者]]提供了一个验证过的工具，中介发现强化了 PBL 作为载体的理由——它在[[ai-education|AI 教育]]中建构的不仅是内容，还有信心和伦理推理。

### AI 时代的 PBL 与数字讲故事

- 基于项目的学习与[[storytelling-in-education|数字讲故事]]结合，为艺术与设计教育中[[generative-ai|生成式 AI]]提供了一个教学法回应。一项对 426 名本科生的为期 15 周的嵌入性案例研究实施了 PBL-DS 框架，其中数字讲故事作为主要方法，让学生把本地文化遗产转化为情感共鸣的、[[multimodal]]叙事，培养 AI 所缺乏的创造能力。

## 关联概念

- [[problem-based-learning]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[computational-thinking]]
- [[higher-ed]]
- [[pedagogy]] — 总括：AI 教育中的教学法与教学策略
- [[arts-design-and-media-education]]

## 关联文章

- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — 基于问题与基于项目的学习作为生成式 AI 支持教育的、有前景的框架：来自系统综述和三层元分析的新证据
- [[pbl-structural-conditions-ai-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[game-based-gamified-robotics-education-review-2026]] — 基于游戏与游戏化的机器人教育
- [[genai-literacy-training-teacher-education-dbr-2026]] — 教师的 AI 素养培训
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[white-wu-robotics-ai-education-2026]] — 机器人技术与教育中的 AI
- [[educational-robotics-pathways-2026]] — 学习 AI 驱动教育机器人的路径（2026）
- [[tsingidou-ct-robotics-kindergarten-2026]] — PBL 是一种主导的计算思维学习策略
- [[creative-project-approach-ai-early-childhood-2025]] — 创意项目路径：早期童年项目路径中的 AI 智能体与机器人（Yang、Li & Lee 2025）
- [[spec-driven-development-ai-agents-sdpbl-2026]] — 团队软件 PBL 中带 AI 智能体的 SDD
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL：一个带内嵌教学智能体的沉浸式 VR 设计工作室，对照传统 PBL 评估（Jin 等 2026）
