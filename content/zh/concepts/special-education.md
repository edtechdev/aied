---
connected_resources: [teacherserver]
title: 特殊教育
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
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

> **特殊教育（Special Education）** — 面向残障学习者——涵盖认知、身体、感官与神经发育差异——的教学设计与交付。[[ai-education|教育中的 AI]][[research-methods-aied|研究]]在本知识库中探索 AI 工具如何通过 [[personalized-learning|个性化]]、[[scaffolding|自适应支架]]与无障碍界面支持多样的学习者需求——同时考察那些忽视或边缘化残障学习者的 [[ai-technologies|AI 系统]]的风险。

> ⚠️ **特殊教育主要是一个 [[k-12]] 术语。** 它植根于美国的《残障个体教育法》（IDEA）以及管辖中小学特殊教育服务的个人教育计划（IEP）的权利授予体系。在 [[higher-ed|高等教育]]中——K-12 也日益如此——更常见的框定是**[[universal-design-for-learning|通用学习设计]]**（一种惠及所有学习者的前瞻性设计框架），以及 [[accessibility]] 与 [[assistive-technology]]，而非"特殊教育"。一篇 K-12 特殊教育文章与一篇大学 UDL 文章论的是重叠但不同的情境；本知识库把两者都保留，因为研究文献横跨两者。当一处来源涉及高等教育与残障学习者时，通常更适合链接到 [[universal-design-for-learning]]、[[accessibility]] 或 [[inclusive-learning]] 而非 special-education。

## 值得思考的问题

- 本页强调"特殊教育"主要是一个 K-12 的、权利授予式的术语，植根于 IDEA 与 IEP，而高等教育更多谈通用学习设计与无障碍。你认为这些情境为何不同，这一差异又揭示了什么？
- AI 的个性化承诺似乎专为需求多样的学习者量身定做。但如果一个系统能适应"个体认知画像"，当残障的模型过于粗糙或根本缺失时，会出什么问题？
- 研究包括为特定残障画像设计的 AI 工具（如阅读障碍或聋人与重听学习者）。为狭窄画像设计，与从一开始就为所有学习者做通用设计，各自的风险是什么？
- 为"平均"学习者构建的 AI 系统，如何可能在无意中忽视或边缘化残障学习者——防止它又是谁的责任？
- 一个 AI 工具真正*包容*而不仅是*适应*一名残障学习者意味着什么——在实践中你如何识别这二者的差别？

## 引言

特殊教育是一个 AI 的个性化与适应能力提供特别前景的领域。与一刀切的教学不同，[[intelligent-tutoring|AI 辅导者]]理论上能适应个体认知画像、沟通需求与学习节奏。本知识库中的文章横跨面向特定残障画像的 AI、神经多样性学习者的体验，以及对 AI 与残障的批判性视角。

**面向特定残障的 AI 辅导**为特定学习者的需要定制 AI。**[[special-r1-rl-special-education|Special-R1]]** 将 [[reinforcement-learning|强化学习]]扩展到跨五种残障画像建模认知与沟通多样性，使用画像感知的提示与思维奖励来塑造针对每种学习者的辅导回应。**[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** 分析了阅读障碍学习者体验 AI 工具的情况，既揭示了 AI 对识字支持的价值，也揭示了持续存在的无障碍障碍。**[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** 为 [[accessibility|聋人与重听学习者]]设计了一个由 [[llm]] 驱动的题目生成系统，引入 Visual 与 Emotion 提问策略，并与目标社群迭代细化题目，以克服文本型 AI 提示与手语第一语言之间的错配。**[[embodied-string-learning-blindness-low-vision-musicians]]** 与盲人及低视力音乐家共同开发了非视觉学习策略，以残障主导的 [[embodied-learning|具身]]设计为中心。这些连接到 [[inclusive-learning]] 与 [[neurodiversity]]。

**神经多样性学习者的体验**以自闭与 ADHD 学生为中心。**[[neurodivergent-computing-students|Zastudil et al.]]** 发现，神经多样的计算专业学生需要结构化的作业、小而稳定的小组与明确的角色定义——[[collaborative-learning]] 工具必须满足的设计要求。**[[adhd-video-segmentation-computing-education]]** 证明，AI 分段视频消除了 ADHD 的表现差距。两者都连接到 [[learning-design]] 与 [[universal-design-for-learning]]。

**批判性视角**考察 AI 如何边缘化残障学习者。**[[genai-minoritized-knowledges-disability|Tali-Otmani]]** 论证，由于以西方为中心的训练数据，AI 系统主动边缘化以残障为中心的知识——这连接到关于认识论正义的 [[equity-in-ai-education]] 关切。

**AI 在阅读障碍的检测、支持与个性化学习上的跨领域应用。** 一项 2026 年的跨学科 [[meta-analysis-systematic-review|系统综述]]（Dabaghi, D'Urso & Sciarrone，PRISMA 指引，2018–2024，n=72）描绘了 AI 如何在教育中支持阅读障碍学生，发现 AI 被用于检测、辅助性支持与个性化学习——但这些线索平行演化而非整合，更多由技术机会而非整合的教育理论驱动。基于机器学习的帮助教育工具分为五个领域（具体应用、参与、个性化、推荐、通用支持），却强调技术性能与分类准确率，而忽视生态效度与实际课堂部署。检测研究（EEG、眼动、ML 模型）优先早期干预并显示出诊断前景，但常需专门设备与受控环境，限制了典型学校情境下的可扩展性与无障碍性。公开挑战包括有限的实验验证、可扩展性、敏感学生数据的 [[ethics]]/隐私关切、有限的教师支持与培训，以及语言/文化障碍（多数研究面向英语人群）。

**学习障碍学生（SWLD）的认知卸载。** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]] 是 *Learning Disability Quarterly* 一期"AI 与 LD 学生"专辑中的概念性综述，透过 [[cognitive-offloading]] 透镜重构了生成式 [[generative-ai|AI]] 在 SWLD 中的使用。他们论证，生成式 AI 可以是一种**补偿性辅助或一条捷径**，取决于卸载决策如何与 SWLD 的认知与 [[motivation|动机]]画像（执行功能与工作记忆的挑战、升高的认知负荷、回避努力的表现目标、较低的学业自我效能感、以及对生成式 AI 的膨胀期望）及教学设计互动。对阅读与写作，生成式 AI 可以支架式地打开通道（文本分级、摘要、[[multimodal]] 输出、规划、起草、修改反馈），同时保全更高阶的 [[student-engagement|参与]]——但过度卸载有绕过理解、规划与监控过程的风险，而这对这些学习者本就脆弱，会助长"[[metacognition|元认知]]懒惰"并跨领域加重读写困难。该论文把**教学 [[guardrails]]** 定位为关键的调节因素，并建议 [[teacher-role|教授]]策略性卸载、构建 [[ai-literacy]] 以校准工具信任、编排掌控体验以建立 [[self-efficacy]]、以及使任务与评估对齐于优先技能发展而非替代的 IEP 目标。这扩展了本知识库对特殊教育的覆盖至卸载的公平维度：同一把降低准入门槛的工具，若无护栏，会替代 SWLD 最需要的练习。
**AI 生成的干预内容需要预生成控制，而不只是审查。** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] 发现，从业者对共同设计的 Social Story 工具给出很高的可用性评价（SUS 86.8），却指出其图像泛西式、其行为追踪器与目标挂钩的临床判断不匹配——这些是他们本会在生成前就设下的约束。

## 对特殊教育教师的启示

- **与目标学习者及其社群共同设计 AI。** [[llm-question-generation-deaf-hard-of-hearing-2026|面向聋人/重听学习者的题目生成]]显示了与社群迭代细化 AI 以弥合文本型提示与手语第一语言之间鸿沟的价值——让学习者及其社群参与设计，而非假定 AI 适合他们。
- **把 AI 匹配到特定残障画像，而非通用无障碍。** [[special-r1-rl-special-education|Special-R1]] 跨残障画像建模认知与沟通多样性；[[dyslexlens-dyslexic-learners-ai|DysLexLens]] 记录了阅读障碍学习者所获的读写价值与持续的无障碍障碍——选择与每位学习者画像对齐的工具，并警惕未满足的障碍。
- **为神经多样学习者构建协作结构。** [[neurodivergent-computing-students|神经多样的计算专业学生]]需要结构化的作业、小而稳定的小组与明确的角色——把这些设计要求应用于任何 AI 中介的协作活动。
- **用 AI 缩小（而非扩大）表现差距。** [[adhd-video-segmentation-computing-education|AI 分段视频]]消除了 ADHD 表现差距——在证据显示其拉平结果之处部署自适应 AI，而非在它仅仅自动化之处。
- **以残障主导的具身设计为中心。** [[embodied-string-learning-blindness-low-vision-musicians|盲人/低视力音乐家]]研究表明，非视觉的、残障主导的策略胜过默认的视觉界面——以残障学习者的专长构建并调整 AI。
- **防范认识论边缘化。** [[genai-minoritized-knowledges-disability|批判性视角]]警告，以西方为中心的训练数据可能边缘化以残障为中心的知识——在 [[equity-in-ai-education]] 之外并行审计 AI 内容与工具的认识论正义。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## 关联文章

- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
