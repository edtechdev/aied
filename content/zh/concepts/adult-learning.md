---
title: 成人学习者
created: "2026-08-06T10:43:53-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [professional-training]
research_method: [system development]
level: [adult learning, higher ed]
confidence: medium
methods: [usability-research]
technology: [edtech-platform]
translation_of: concepts/adult-learning
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **成人学习** — 成人教育（andragogy）的理论与实践，以及 AI 工具与技术如何被设计以支持成人学习者的 [[agency|自主性]]、既有经验与真实世界相关性。本知识库通过 13 篇文章对此进行了探讨。

## 值得思考的问题

- 成人学习理论假定学习者是自我导向的、借助人生经验、并希望获得真实世界的相关性。但如果 AI 承担了大部分认知工作，那么学习者在没有明显帮助下完成任务，是否真能证明是他们自己在主导？什么会让你确信他们确实做到了？
- 行为上不依赖某个工具，已不再能保证学习者主导了学习。如果你要为成人学习者设计 AI，你会寻找什么来确认真正的自我导向，而非安静的委托？
- 成人 AI 工具的设计指南强调要融入繁忙的生活——移动友好、可离线、与真实问题相连。这些对你的学习而言哪一项最要紧？一个忽视它们的工具会让学习者付出什么代价？
- 成人学习者常常在工作场所或家中学习，因此在线交付占主导——它带来灵活性，也带来卸责与诚信方面的风险。AI 协助的便利性，与繁忙成人持久学习的目标之间如何相互作用？
- 研究发现，没有任何一个单一的成人学习 AI 系统满足全部设计指南——需要整个生态。这对于"指望一个工具满足每个学习者的需求"意味着什么？
- 对边缘化与神经多样的成人学习者而言，公平也许更关乎教育者的关系性关怀，而非工具的获取。把人置于关怀的中心，会如何改变你设计或采纳 AI 工具的方式？

## 引言

成人学习扎根于 Knowles 的成人教育模型，假定学习者是自我导向的、借助人生经验、由即时且实际的目标驱动，并在学习与其真实世界角色相连时受益最大。这些假定对 AI 设计很重要，因为生成式 AI 如今几乎可以参与学习的每个阶段——识别需求、设定目标、解读信息、产出成果、评估表现。当 AI 承担了如此多的认知工作时，行为上不依赖工具，已不再能保证学习者真正主导了学习。本知识库中的研究相应地把自我导向重新框定为一个主动的设计目标，而非假定的默认状态，并以目标所有权、委托控制与认知可恢复性等标准来评估成人学习 AI。

## 关联文章中的证据

- **成人教育与 GenAI 认知委托。** [[andragogy-cognitive-delegation-genai-2026|Hyoung（2026）]]在 AI 中介的认知委托之下重新审视 Knowles 的六条成人教育假定，论证在没有明显 AI 帮助下完成任务并不能证明有意义的自我导向。文章推导出五个分析维度——需求与目标所有权、委托控制、认识论校准、认知可恢复性与迁移、以及动机自主性——把成人学习与 [[cognitive-offloading]] 和 [[self-regulated-learning]] 连接起来，以评估学习者在 [[generative-ai]] 时代是否仍真正自我导向。
- **成人学习 AI 工具的设计指南。** 基于国家成人学习与在线教育 AI 研究所（AI-ALOE）的纵向部署数据，DIS 2026 论文 [[ai-adult-learning-guidelines-dis2026|综合出 19 条经验基础扎实的设计指南]]，面向 AI 驱动的成人学习技术。这些指南源自七个部署系统中约 1,600 条利益相关者陈述，涵盖认知存在、社会存在与教学存在（探究共同体框架），并强调工具应融入繁忙的成人生活（移动友好、可离线）、把内容连接到真实世界问题、有意义地个性化、提供实质性支持与反馈、并对数据保持透明。没有任何单一系统满足全部指南；需要完整的 AI-ALOE 生态才能覆盖它们。
- **成人、远程与终身学习情境。** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties 等]]展示了开放大学如何通过六项基于设计的研究来设计与评估嵌入式 AI 助手（AIDA）；使用它的学生在课程上花了两倍长的时间，尽管研究警告技术能力必须与 [[governance]] 和组织准备度相匹配。[[ai-lifelong-learning-policy|Theodora 与 Tselios]]把 AI 在成人与 [[lifelong-learning]] 中的双重角色框定为既是个性化、可规模化教育的推动者，也是公平与治理风险的来源，呼吁包容的、以人为本的政策。[[community-centered-ai-education-adults|一项中西部案例研究]]为一个服务不足社区中的 54 位成人共同设计了一个 AI 素养项目，发现面向公平的成人 AI 教育必须解决基础性的 [[ai-literacy|数字素养]]差距、围绕数据隐私建立 [[trust]]、并与生活经验相连。[[sovereign-hive-titl-further-education-2026|Herron 的"Sovereign Hive"/Tutor-in-the-Loop 框架]]把继续教育中的 GenAI 公平视为氛围调节，而非单纯的工具获取，把教育者定位为边缘化与 [[neurodiversity|神经多样]]成人学习者的关系性与认知关怀所在。

## 与相关概念的关联

成人学习位于本知识库若干紧密相关概念的交叉点上。[[higher-ed]] 提供了大量成人与远程学习发生的制度情境，[[professional-training]] 覆盖其劳动力维度，[[lifelong-learning]] 覆盖其继续教育维度。[[vocational-education|职业教育与培训]]是那个以职业而非学习者命名的近邻：成人学习描述的是学习者带入任何情境的东西——自我导向、既有经验、即时的实际目标——而 VET 命名的是面向某个既定行业或技术岗位的、初始的、贴近实践的培养，以对设备的实际能力为评判标准，并以资格框架而非成人教育倾向为框定。[[online-teaching-and-learning|在线教学与学习]]是成人学习者的主导交付媒介——他们常常在工作场所或家中学习——因此其可供性（全天候访问、异步支持）与风险（[[academic-integrity|诚信]]、[[cognitive-offloading|卸责]]）对成人学习设计至关重要。[[self-regulated-learning]] 和 [[agency]] 命名了 AI 必须保护而非侵蚀的学习者能力，而 [[cognitive-offloading]] 刻画了 AI 既能支持又能损害它们的机制。[[inclusive-learning]] 与 [[equity-in-ai-education]] 框定了成人 AI 工具的公平义务，[[human-in-the-loop-ai]] 命名了使人类保持问责的设计模式，[[scaffolding]] 描述了此类工具应提供的渐进式支持。

## 对成人教育教师与设计者的启示

- **把 AI 设计为自我导向的支架，而非替代品。** 行为上不依赖工具并不能证明学习者主导了学习——要保护目标所有权、委托控制与认知可恢复性（[[andragogy-cognitive-delegation-genai-2026|成人教育 + 认知委托]]）。
- **融入繁忙的成人生活。** 让工具异步、可移动、可离线，并把内容连接到真实世界问题（[[ai-adult-learning-guidelines-dis2026|AI-ALOE 指南]]）。
- **让人类留在环中。** 把教育者定位为关系性与认知关怀的中心，尤其对边缘化与 [[neurodiversity|神经多样]]的成人学习者（[[sovereign-hive-titl-further-education-2026|Tutor-in-the-Loop]]）。
- **解决基础数字素养与数据信任问题。** 在期待采纳之前，先建立 [[ai-literacy]] 与围绕数据隐私的 [[trust]]（[[community-centered-ai-education-adults|社区 AI 教育]]）。
- **以学习科学与成人教育为基础，并偏好深度个性化。** 运用成人教育理论并把内容连接到真实世界问题；偏好深度个性化（任务排序、难度校准）而非表层适配。
- **让透明度与社区特性成为一等公民。** 数据实践透明度与社会/社区特性，是成人 AI 工具中最被忽视却最被看重的维度之一。
- **把技术与结构可靠性当作前提条件。** 参与度既取决于稳定的、包容的基础设施，也取决于教学质量——不稳定或排斥性的平台会损害本来看起来健全的设计。

- **面向成人教育的 AI 设计原则。** [[kim-ai-andragogy-2026|Kim 等（2026）]]发现，成人学习者重视 AI 作为协作学习伙伴，并推导出三条面向成人教育的 AI 设计原则：人在环中（共享心智模型、人—AI 共同创造）、情感设计（校准对 AI 的依赖、富有共情的沟通）与适应性（持续适配、互操作性）。他们的十一个情境原型还把每条成人教育原则映射到具体的 AI 可供性：[[intelligent-tutoring|AI 导师]]与 [[learning-by-teaching|可教代理]]对应"参与"，监测与 [[learning-analytics|分析工具]]对应自主与自评，富有共情的 [[conversational-ai|聊天机器人]]与 [[simulation|模拟]]对应"经验"，案例库与高阶问题生成器对应问题中心式工作，AI 规划师与职业教练对应"相关性"。
- **保住有成效的挣扎。** 同一团队的生产性失败研究把 AI 支持映射到 PF 的两个阶段，并得出结论：设计绝不能替学习者消解挣扎——对话代理在生成与探索阶段充当非指导性的思考伙伴，随后在巩固阶段支持比较、重组与迁移（[[kim-ai-productive-failure-adult-2026|Kim 等（2026）]]）。

## 关联概念

- [[self-directed-learning]]
- [[online-teaching-and-learning]] — 在线教学与学习
- [[higher-ed]]
- [[professional-training]]
- [[vocational-education]]
- [[lifelong-learning]]
- [[inclusive-learning]]
- [[agency]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[trust]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[governance]]
- [[formative-assessment]]
- [[rct]]
- [[active-learning]]
- [[discipline-specific-aied]]

## 关联文章

- [[ai-adult-learning-guidelines-dis2026]] — 设计支持成人学习的 AI 技术指南
- [[andragogy-cognitive-delegation-genai-2026]] — What Remains Self-Directed? Revisiting Andragogy Through Cognitive Delegation in Generative AI-Mediated Adult Learning
- [[ai-lifelong-learning-policy]] — 终身学习中的 AI：成人教育政策中的机遇与挑战
- [[sovereign-hive-titl-further-education-2026]] — The Sovereign Hive and the Tutor-in-the-Loop (TITL) Framework for Equity in Further Education
- [[community-centered-ai-education-adults]] — Co-Designing Community-Centered AI Education for Adults: A Midwestern Case Study
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — New Systems of Learning for Distance Learning Institutions? A Six-Study Review of Implementing AIDA
- [[institutional-governance-ai-universities]] — Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools
- [[generative-ai-enhanced-learning-experiences-for-computational-thinking-a-systema]] — Generative AI-enhanced learning experiences for computational thinking: A systematic scoping review and design guidelines
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[dot-framework-survey-2026]]
- [[kim-ai-productive-failure-adult-2026]] — 设计支持生产性失败式学习的 AI 系统
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy（Kim 等，2026）
