---
connected_resources: [mglearn]
title: 包容性学习
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:11-04:00"
type: concept
foundations: [ai-education, learning-design]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, higher ed]
confidence: high
translation_of: concepts/inclusive-learning
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

> **包容性学习** —— 那些容纳多元学习者需求的教育体验的设计与交付，涵盖身体、认知、感官与情境上的差异。在人工智能教育中，包容性学习[[research-methods-aied|研究]]既考察 AI 工具如何为残障与神经多样性学习者消除障碍，也考察[[ai-technologies|AI 系统]]本身如何必须被设计成避免制造新的可及性鸿沟。

## 值得思考的问题

- 一个可及的工具并不保证包容的教学，辅助技术也不保证有意义的能动性。消除一种格式上的障碍，与设计出让每个人都能有意义地参与的教育，其区别何在？
- 本页区分了包容性学习、可及性、辅助技术、特殊教育与通用设计。AI 在你自己的情境中属于哪一类——而你真正想回答的又是哪个问题？
- 一项研究发现，带固定停顿的 AI 切分视频消除了 ADHD 学习者与非 ADHD 学习者之间的表现差距。为某一群体的需求设计，何以可能改善每个人的学习？
- AI 系统被描述为在消除旧鸿沟的同时制造新的可及性鸿沟。一个基于文本、依赖视觉、始终在线的 AI 工具，会静默地排除哪一类学习者？
- 包容性评估研究暴露了反作弊措施与容纳视觉处理需求学习者之间的张力。当安全性与可及性冲突时，这一权衡应如何决定——又由谁来决定？
- 有若干工具颠倒了[[edtech-platform|edtech]]必须是视觉化的这一假设——例如为视障学习者设计的语音优先同伴。你自己的工具或材料，可能正在对"默认"学习者作出哪些假设？

## 引言

包容性学习是这样一种设计承诺：教育应当被构建成让所有学习者都能有意义地参与，而非事后为那些挣扎的学习者做适配。它在这里充当一把伞，覆盖相邻但彼此不同的概念——[[accessibility]]（每个人都能感知并操作该格式吗？）、[[assistive-technology]]（什么工具弥合个体的[[digital-divide|接入差距]]？）、[[universal-design-for-learning]]（设计应当如何预见变异性？）——并把[[neurodiversity]]与[[special-education]]当作设计情境而非例外来介入。AI 以承诺（个性化、 accommodation、翻译）与新的排斥之源（成本、数据、语言覆盖、模型内建的假设）的双重身份进入。

## 相关概念如何彼此契合

包容性学习是**伞形**概念；下列各页面位于其下，各自回答一个不同的问题。它们彼此交叠但不可互换——知道一项主张属于哪一者，能让知识库保持精确：

| 概念 | 它回答的核心问题 | 典型关注点 |
|---|---|---|
| **包容性学习** *(本页)* | 我们如何设计教育，使所有学习者都能有意义地参与？ | 跨越学习者变异性的教学的广义设计 |
| **[[accessibility]]** | 每个人都能感知并操作该*格式/媒介*吗？ | 字幕、替代文本、文字稿、对比度、键盘/屏幕阅读器兼容性、WCAG |
| **[[assistive-technology]]** | 什么工具/设备弥合个体的接入差距？ | 屏幕阅读器、TTS/STT、盲文/触觉、字幕、AI 辅助 |
| **[[special-education]]** | 我们如何为已确诊残障的学习者提供教学？ | IEP、个别化辅助、残障特定辅导——**主要是[[k-12]]术语（IDEA/法定权利）** |
| **[[universal-design-for-learning]]** | 我们如何从一开始就主动构建灵活性？ | 多种[[student-engagement|投入]]方式、多种表征方式、多种行动/表达方式 |

在实践中：**UDL** 是*预防*障碍的设计哲学；**可及性**是消除*格式*障碍的属性；**辅助技术**是个体使用的*工具*层；**特殊教育**是面向已确诊残障的*教学*领域——且它主要是 **K-12** 术语，而在**[[higher-ed|高等教育]]**（以及日益增多的 K-12）中更常见的框架是[[universal-design-for-learning|通用学习设计]]。**包容性学习**则是把这一切围绕公平参与的共有目标拢在一起的伞。一个可及的工具并不保证包容的教学，辅助技术也不保证有意义的能动性——这正是伞必须覆盖它们全部的原因。

包容性学习处于[[equity-in-ai-education]]、[[learning-design]]与[[special-education]]的交叉点，并由[[assistive-technology]]的具体工具层与[[accessibility]]的设计属性所支撑。与把接入手段事后加装到既有系统上的狭隘辅助不同，包容性学习的视角——扎根于[[universal-design-for-learning|通用学习设计]]——主张环境应当从一开始就为人类多样性的全部幅度而设计。本知识库中的文章探索 AI 如何通过自动化内容转换、自适应评估界面，以及以[[neurodiversity|神经多样性用户的]]亲身经验为起点的工具来促成这一点。

### 关键研究主题

**AI 驱动的内容可及性**展示了自动化流水线如何减少障碍。**[[adhd-video-segmentation-computing-education|Pimenova 等]]**表明，带固定停顿的 AI 切分[[video-education|教学视频]]消除了 ADHD 与非 ADHD 学习者之间的表现差距——这是经由自动化内容转换实现通用学习设计的有力证据。该研究与[[neurodivergent-computing-students]]研究相连，探讨[[collaborative-learning|协作学习]]结构如何影响神经多样性者的舒适度。**[[llm-question-generation-deaf-hard-of-hearing-2026|Chen 等]]**为聋人与听障学习者设计了一个由[[llm]]驱动的问题生成系统，引入针对视频中视觉或情感困难时刻的视觉与情感问题策略——同时揭示了基于文本的 AI 提示与 DHH 学习者以手语为第一语言之间持续的错配，凸显了语言与文化感知的 AI 设计之必要。**[[text-simplification-its|MuTSE]]**处理一个互补的障碍——阅读水平——通过为[[intelligent-tutoring]]评估基于 LLM 的文本简化，以[[human-in-the-loop-ai|人在环路]]的评估框架把内容复杂度匹配到每位学习者当前的水平，而非依赖会漏掉[[pedagogy|教学]]质量的语言学指标。

公式密集的视频也可以被做成可及的，而无需人工转写：一条 Gemini 加 LuaLaTeX 的流水线把 16 段物理教学视频转成通过 PDF/UA-2 与 ISO 32005 验证的 PDF，只有一段视频需要第二次尝试（[[gemini-lualatex-physics-video-transcription-2026|Looney 与 Duston（2026）]]）。

**感官可及性：盲人、低视力与聋人学习者。** 有若干文章颠翻了 edtech 必须是视觉化的假设。**[[kutti-ai-voice-first-learning-companion|Kutti AI]]**把口语对话作为视障儿童首要且充分的模态——实时困难检测、[[multilingual-learning|多语言]]答案匹配，以及离线优先的端侧 ASR，同时消除了对视觉与联网的依赖。**[[tactile-statistical-graphs-accessibility|Obiuwevwi 等]]**构建了一条可复用的流水线，在不到 250ms 内为盲人/低视力学生生成可触摸的 3D 打印统计图，并提供可选的、基于 LLM 的图像图表提取。**[[pepper-robot-sign-language-lis-2025|Bolla 等]]**探索 Pepper 社交机器人能否产出可懂的意大利手语，与一位聋人学生和专家口译员共同设计了 52 个手语——把[[educational-robotics]]延伸到聋人学习者的交际可及性，同时凸显了复现对面部表情、姿态等意义关键的非手部成分的挑战。**[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等（2026）]]**把这条工作线延伸到高等教育，在一项对 21 名巴勒斯坦视障本科生的[[qualitative-research|质性]]案例研究中发现，GenAI 依个人画像调适节奏、内容与呈现方式，并在不同模态间转换复杂的学术文本——而学习者视 GenAI 为对教师的补充而非替代，在维持人际联结的同时促成参与。

**包容性评估设计**在安全性与可及性的张力中摸索。**[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]**提出一个自适应视觉分流的理论框架，在抵制截屏作弊的同时容纳有视觉处理需求的学习者——显式建模反作弊措施与包容性学习原则之间的权衡。这与更广泛的[[academic-integrity]]与[[assessment]]关切相连。

**神经多样性学习者的经验**把残障与神经多样性学生的声音放在中心。**[[neurodivergent-computing-students|Zastudil 等]]**发现，神经多样性计算机专业学生需要结构化的作业、小而稳定的团队、以及明确的角色定义——这些偏好是[[intelligent-tutoring|AI 辅导]]与协作工具必须容纳的。**[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**分析了阅读障碍学习者的论坛讨论，揭示出尽管他们重视 AI 在读写支持上的帮助，却面临来自输出质量不稳定与辅助安排不公平的显著可及性障碍。两者都与[[special-education]]和[[student-experience]]相连。

**[[cognitive-offloading|认知外包]]与"接入 vs. 发展"的权衡。** [[seung-basham-cognitive-offloading-swld-2026|Seung 与 Basham（2026）]]表明，对有学习障碍的学生而言，同一个降低了读写接入障碍（文本分级、摘要、起草支持）的 GenAI，如果不受约束，可能替代这些学习者最需要的理解、规划与监控练习——这是包容性学习中一个核心的公平性张力。因此，包容性设计必须考量的不只是工具是否*可及*，还包括它是否保全了学习者发展那些"接入"本应促成之能力的机会。

**面向阅读障碍的 AI：检测、支持与[[personalized-learning|个性化学习]]。** 一项 2026 年的跨学科[[meta-analysis-systematic-review|系统综述]]（Dabaghi、D'Urso 与 Sciarrone，遵循 PRISMA，2018–2024，n=72）发现 AI 在检测、辅助支持与个性化学习三方面支持阅读障碍学生——但这些线索并行演进而非整合，更多由技术机会而非整合的教育理论驱动。基于 ML 的帮助教育工具横跨五个领域（特定应用、投入度、个性化、推荐、通用支持），却强调技术表现与分类准确率，而忽视了生态效度与实际课堂部署。检测研究（EEG、眼动追踪、ML 模型）显示出对早期干预的诊断前景，但往往需要专门设备与受控环境，限制了在典型学校情境中的可扩展性与可及性。开放的挑战包括实验验证有限、可扩展性、敏感学生数据的[[ethics]]/隐私问题、有限的[[teacher-role|教师]]支持与培训，以及语言/文化障碍（多数研究面向英语人群）——这凸显了包容性学习必须把技术能力与经过验证、可扩展、且合乎伦理的部署配对起来。

**以残障为中心的 AI 批判**考察 AI 系统如何排斥而非包容。**[[genai-minoritized-knowledges-disability|Tali-Otmani]]**主张，高等教育中的[[generative-ai|生成式 AI]]系统因以英语为中心、西方中心的训练数据而主动边缘化了以残障为中心的认识方式——这与[[equity-in-ai-education]]关于认识论正义的关切相连。

**正式诊断的门槛把工具声称要服务的学习者排除在外。** 在[[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel 等（2026）]]对 40 项面向神经多样性学生的数字辅助技术研究的范围综述中，有 28 项把正式诊断设为参与条件，只有 3 项针对环境而非学生。

**实践中的可及工具**展示了 AI 如何扩展参与。**[[suacode-african-students-motivations|SuaCode]]**证明，基于智能手机的编程课程能触达编程技能不足 1% 的低资源非洲情境中的学生。**[[embodied-string-learning-blindness-low-vision-musicians|Pimenova 等]]**与盲人及低视力音乐家合作开发非视觉学习策略，把残障主导的[[embodied-learning|具身]]设计置于中心。**[[ludia-udl-ai-thought-partner-2026|LUDIA]]**提供一个免费、私密、多语言的 AI 思考伙伴，把教育者与 UDL 原则连接起来。**[[special-r1-rl-special-education|Special-R1]]**把[[reinforcement-learning|强化学习]]延伸到跨残障画像的认知与交际多样性建模。

### 关联概念

包容性学习与[[equity-in-ai-education]]深度相连——可及性不只是技术关切，而是谁能参与学习的问题。它与[[accessibility]]作为其具体接入层相连，与[[assistive-technology]]作为其工具层相连，与[[universal-design-for-learning]]作为其理论基础相连，与[[special-education]]作为残障特定方法相连，与[[learning-design]]作为课程与工具的结构方式相连，与[[neurodiversity]]作为把差异重构为多样性而非缺陷的透镜相连。手语机器人与触觉工具的工作把可及性与[[educational-robotics]]和[[educational-nlp]]联系起来，而文本简化把它与[[sociocultural-learning]]和[[adaptive-learning]]联系起来。与[[ai-education]]和[[generative-ai]]的关联既凸显了承诺（自动化内容适配）也凸显了危险（再生产排斥的 AI 系统）。

## 对设计包容性学习的教学者的启示

- **最先为被排除的模态设计，而非最后。** 从一开始就为盲人/低视力用户构建（[[kutti-ai-voice-first-learning-companion|Kutti AI]]、[[tactile-statistical-graphs-accessibility|触觉图]]）能产出同样在离线与低资源情境中可用的工具——可及性是催化剂，而非事后补丁。
- **与目标社群共同设计。** [[pepper-robot-sign-language-lis-2025|手语机器人]]与[[llm-question-generation-deaf-hard-of-hearing-2026|DHH 问题生成]]表明，社群的参与能浮现设计师预见不到的障碍（例如以手语为第一语言）——让学习者与社群参与设计。
- **评估教学质量，而不只是语言学指标。** [[text-simplification-its|MuTSE]]表明，LLM 输出的变异性需要人在环路的评估，使简化真正有帮助而非过度简化。
- **用 AI 弥合表现差距。** [[adhd-video-segmentation-computing-education|AI 切分视频]]消除了 ADHD 表现差距——在证据显示其拉平结果之处部署自适应 AI。
- **显式对待安全/可及性的权衡。** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]建模了反作弊措施如何无意中排斥有视觉处理需求的学习者——在诚信与接入之间权衡。
- **可及性可能取决于措辞，而不只是格式。** 在底层任务保持不变的情况下，模型准确率从低读写能力措辞的 82.4% 升到专家措辞的 83.4%，因此要求学生写出更好的提示词会引入一种新的排斥；一个规范请求的系统侧重写器在不改变内容的情况下消除了显著差距（[[prompt-privilege-equitable-ai-access-2026|Jin 等（2026）]]）。
- **防范 AI 再生产排斥。** [[genai-minoritized-knowledges-disability|以残障为中心的批判]]警告，以英语为中心、西方中心的训练数据边缘化了残障的认识方式——在[[equity-in-ai-education]]之外，还要审计 AI 工具的认识论正义。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[accessibility]] — 具体的接入层（字幕、替代文本、辅助技术兼容性）
- [[assistive-technology]] — 学生用于接入内容的工具层
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]
- [[speech-and-voice-technologies]]
## 关联文章
- [[prompt-privilege-equitable-ai-access-2026]] — 提示特权：测量与缓解 LLM 接入中的可及性差距
- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 为聋人与听障学习者的 LLM 驱动问题生成
- [[text-simplification-its]] — 面向智能辅导的文本简化
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI：面向视障儿童的语音优先同伴
- [[tactile-statistical-graphs-accessibility]] — 可触摸的 3D 打印统计图
- [[pepper-robot-sign-language-lis-2025]] — 支持手语交流的 Pepper 机器人
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX 数学可及的物理视频转写
- [[khlaif-assistive-genai-visually-impaired-2026]] — 面向视障学习者的辅助性 GenAI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
