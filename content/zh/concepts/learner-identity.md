---
title: 学习者身份
created: "2026-08-27T08:10:00-04:00"
updated: "2026-10-09T19:07:10-04:00"
type: concept
foundations: [agency, learner-identity]
discipline: [stem education]
audience: [learners]
confidence: high
connected_faqs: [how-ai-impacts-students]
level: [adult learning]
translation_of: concepts/learner-identity
source_updated: "2026-10-01T14:02:49-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习者身份** —— 作为学习者，一个人是谁（以及正在成为谁）的那种演进中的自我感，包含学科身份、职业身份、创造身份和学术身份。在[[ai-education|AI 的教育应用]]中，[[generative-ai|生成式 AI]]同时从两个方向挤压学习者身份：它既能*支持*身份形成（[[scaffolding]]学科归属感和信心），也能*威胁*它（侵蚀被感知的作者身份、能力和真实学习）。理解学习者身份，是设计那种肯定而非消解学习者自我感的 AI 的核心。

## 值得思考的问题

- 回想一次你感到某项技能或某件作品真正"属于"你，而不是仅仅经由你完成的经历。是什么造成了差别 —— 作者身份、被承认、还是能力？一个替你产出作品的工具会如何重塑那种感觉？
- 一个常见假设是，身份是学习者要么拥有要么缺乏的固定特质。如果你把学习者身份当作经由参与、被承认和作者身份持续构建的东西，你的学习设计会有什么改变？
- 本页描述了艺术与设计学生中的一种"能力悖论"：AI 工具感觉易用且有用，然而使用它们却威胁到学生从手工技艺中获得的创造身份。你是否曾感到自己的能力或身份被一个易用的工具挑战过？那是什么张力？
- 学生有时会隐藏自己的 AI 使用，或对此感到羞耻，这使他们的学术身份和诚实投入变得碎片化。什么时候"要显得是某种学习者"的压力会让人掩盖自己真实的学习方式，而什么会让披露变得安全？
- AI 既能支撑身份形成，也能威胁它。如果你在设计一个 AI [[pedagogical-agent|学习伙伴]]，你会用哪些具体功能来保护学习者的作者感和拥有感，同时仍提供支持？

## 引言

学习者身份关乎学习者在一个领域内如何理解自己是谁，以及正在成为谁 —— 它是一个动机和发展性构念，不同于[[self-efficacy]]这类能力信念，后者回答的是更窄的问题*我能做到吗？*身份经由参与、被承认和作者身份形成：在一个领域中看见自己，并且这种自我看法得到他人的确认。AI 重塑了这三个条件，因为它改变了谁做工作、什么算得上自己的贡献、以及学习者是否被认可为自己学习的作者（[[agency]]，[[metacognition]]）。

## 为什么身份对 AI 教育很重要

身份是一个动机和发展性构念，不同于（但关联于）相关的能力和信念。[[self-efficacy]]关乎*我能做到吗？*，身份关乎*我是谁 —— 以及正在成为谁？*它经由参与、被承认和作者身份构建 —— 经由在一个领域中看见自己，并且这种自我看法得到确认。AI 重塑了身份形成的条件，因为它改变了*谁做工作*、*什么算得上自己的贡献*，以及*学习者是否感到被认可为自己学习的作者*。这使身份成为一个一阶的设计关切，而不是边缘的"软"因素。

- **受威胁的作者身份与能力。** 当 AI 产出文本、图像或代码时，学习者可能质疑结果是否真正"属于"他们 —— 这是对身份的作者身份维度的挑战。**[[t2i-competence-paradox-2026|Liu 等（2026）]]**记录了使用文生图生成式 AI 的艺术与设计学生中的一种*能力悖论*：这些工具感觉易用且有用，然而使用它们同时威胁到学生从手工技艺和作者身份中获得的**创造身份**，在易用与自我价值之间产生一种真实的张力。

一种不同的作者身份状况，不只是对作者身份的威胁：当自我形成的对话被习惯性地委派给一个对话模型时，作者主张那些作者化的整合工作是被*委派*了，而不是未发展或缺失 —— 一个被密集地赋予声音却未经作者化的自我，他们说现有构念没有容纳它的槽位（[[synthetic-position-self-authorship-2026|Du 等（2026）]]）。
- **羞耻与隐藏的使用。** **[[shame-guilt-ai-regulation-computing-education|Lin 等]]**表明，计算专业学生在 AI 使用上经历羞耻和愧疚，这些充当社会调节器，驱动*隐藏*和有选择的披露 —— 这些行为可能使学术身份碎片化，并侵蚀对学习的诚实投入。
- **身份是 AI 可以支撑的东西。** AI 不必只威胁身份。**[[ai-pedagogical-accompaniment-amico|Benedetti（2026）]]**主张，可问责的、关系导向的[[pedagogy|教学]]陪伴可以通过提供透明、有边界的支持，为学习者留出拥有自己轨迹的空间，从而支持学习者的 **STEM 身份**发展。

## 知识库研究中的身份

- **创造身份：** **[[t2i-competence-paradox-2026|T2I 能力悖论]]**捕捉了易用性如何侵蚀艺术与设计学生的基于技艺的身份。
- **感知的作者身份可以与实际原创性脱钩。** 用 AI 建网站的设计学生把自己作品的作者身份评得很高（67/100，满意度 6.4/7，感知质量 6.1/7），然而这些评分与任何可测的东西都不相关：他们的设计比不用 AI 时更同质，且感知作者身份与测量的原创性的相关性仅为 r ≤ +0.13（[[vibe-coding-design-diversity-2026|Boussioux 等，2026]]）。
- **职业身份：** 多项研究处理 AI 对**职业身份**的影响 —— 例如，**[[lodge-adaptive-capabilities-genai-future-2026|Lodge 等（2026）]]**主张，毕业生需要*自适应能力*（[[ai-literacy]]、[[distributed-cognition]]、[[metacognition]]），正是为了在 AI 融入的未来中维持一个可行的职业身份，而不是被他们的工具定义 —— 或被其排除。
- **后人类与混合身份：** **[[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed（2026）]]**构想**后人类学习者**，其认知真正地混合并分布于[[biology-education|生物]]与人工系统之间 —— 在认知 AI 时代对身份形成本身的重构。
- **学生与学术身份：** **[[zhan-boud-du-authentic-assessment-scoping-review-2025|真实评估]]**[[research-methods-aied|研究]]与身份相关，因为要求真实、个人化表现的[[assessment]]任务帮助学生把自己看作有能力的从业者；**[[paternalistic-filter-llm-history-education|历史教育研究]]**展示了家长式的 AI 使用如何塑造学生作为学科探究者的身份建构。
- **学生如何框定工具，塑造了他们的职业生成。** 仅把生成式 AI 当作社会情感伙伴的学生，对其专业学习产出的反思不如那些同时也把它框定为技术、学习材料或结构的学生那样有区分度（[[genai-professionalization-metaphors-2026|Bohmer 等，2026]]）。

- **有保留的采纳：有选择的 AI 使用作为身份保护。** [[guarded-adoption-genai-higher-education-2026|Zagami（2026）]]在一所澳大利亚大学调查了 484 名学生，发现成绩更高的学生报告的*更低*的主动[[generative-ai|生成式 AI]]参与、更低的对 AI 的积极情感、更低的[[self-report-measures|感知学习]]影响和更低的 AI 相关脱离，最强关联出现在感知学习影响的 rho = -0.395 和积极情感的 rho = -0.359。他们的开放回答描述了一种有选择的（澄清、摘要、工作流支持）、经过核验的、并从属于自身判断的使用方式，而项目层面结果显示，对"依赖 AI 会妨碍[[critical-thinking]]和独立[[problem-solving|解决问题]]"有更高的同意度。作者把这读作身份工作：对那些"自己是成功学习者"的自我感建立在自身努力和判断之上的学生，为 AI 使用设界是在守护身份所依赖的[[agency|认识能动性]] —— 这也意味着该模式既不是技术恐惧，也不是低参与。

## 与学习者能动性的关系

学习者能动性和学习者身份是密切相关但不同的构念，很容易混淆 —— 而两者对 AI 如何影响学习都是核心的。

- **能动性关乎*做*；身份关乎*是*。** [[agency|学习者能动性]]关乎在*当下*有意行动、做出选择、控制自己学习的能力 —— 一种情境化的、互动性的、可变的容量。学习者身份关乎一个人作为学习者*是*谁以及*正在成为*谁 —— 一种更持久的、叙事性的、发展性的自我感。能动性问"我能主导这件事吗？"，而身份问"这是我吗 / 这是我想成为的人吗？"
- **它们在因果上交织在一起。** 能动性既是身份的*来源*，也是身份的*结果*。施展能动性 —— 选择、创作、坚持 —— 是学习者把自己看作一个能动者的方式（身份部分是内化了的能动性）。反过来，一个稳定的学科或职业身份提供了在困难中维持能动性所需的动机和自我价值。身份是重复的能动性行为积累的产物；能动性是构建身份的不间断的践行。
- **AI 通过不同机制威胁它们。** AI 可以通过诱使[[cognitive-offloading|过度依赖]]和被动接受来侵蚀**能动性**—— 学习者不再主导自己的推理。AI 可以通过侵蚀作者身份和能力来侵蚀**身份** —— 当 AI 产出工作时，学习者可能不再感到输出是"自己的"，或不再属于这个领域。[[t2i-competence-paradox-2026|能力悖论]]是一种身份威胁；[[jin-emergent-learner-agency-implicit-hai-2026|认识劳动的隐式 AI 再分配]]主要是一种能动性威胁，尽管它随时间复合进身份。
- **守护两者是设计目标。** 支持能动性意味着保留学习者的控制与选择（例如，有边界的[[desirable-difficulties|摩擦]]、[[human-in-the-loop-ai|人在回路]]监督）。支持身份意味着保护作者身份与被承认（例如，[[authentic-assessment|真实评估]]、对 AI 与人类贡献的透明归属）。一个保护能动性却不保护作者身份的设计，保护了控制却没有保护自我感 —— 反过来也一样。

简言之：**培养能动性，让学习者能行动；维系身份，好让他们在行动时知道自己是谁。**健康的 AI 支持的学习两者兼顾。

## 与教师身份的关系

学习者身份是教师身份的**面向学生**对应物。教师身份 —— 教育者演进中的专业自我理解 —— 记录在[[teacher-role]]页面，那里[[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw（2026）]]把生成式 AI 框定为教师的*身份危机*，而不仅仅是技能缺口，而[[teaching-the-teachers-genai-tpk-review-2026|基于 TPK 的教师培训]]把身份当作专业准备的一部分。两者是互惠的：经历身份扰动的教师更无力支持学生的身份发展，所以一个健康的 AI 融入系统必须兼顾两者。

## 关联

学习者身份关联于[[agency]]（身份经由能动的创作得以践行）、[[self-efficacy]]（支撑身份的能力信念）、[[motivation]]和[[self-determination-theory]]（身份形成满足自主和能力的需要）、[[student-experience]]和[[student-engagement]]，以及[[stem-education]]（那里学科身份是坚持性的关键结果和预测因子）。它也受[[situated-learning]]和[[critical-pedagogy]]塑造（身份作为参与、作为充满权力的协商），并关联于[[authentic-assessment]]（让学习者表演从而主张身份的任务）。它的[[higher-ed]]和[[k-12]]相关性横跨学校教育和专业准备。

## 关联概念

- [[learners]] —— 学习者：学习者侧概念的伞形概念
- [[agency]]
- [[self-efficacy]]
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[student-engagement]]
- [[stem-education]]
- [[situated-learning]]
- [[critical-pedagogy]]
- [[authentic-assessment]]
- [[teacher-role]]
- [[generative-ai]]
- [[higher-ed]]
- [[k-12]]

## 关联文章

- [[guarded-adoption-genai-higher-education-2026]] —— Guarded Adoption of Generative AI in Higher Education
- [[t2i-competence-paradox-2026]] —— The competence paradox: creative identity in text-to-image GenAI use
- [[shame-guilt-ai-regulation-computing-education]] —— Shame and guilt as social regulators of AI use
- [[lodge-adaptive-capabilities-genai-future-2026]] —— Adaptive capabilities for a viable professional identity in a GenAI future
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] —— Pedagogical symbiosis and the post-human learner
- [[ai-pedagogical-accompaniment-amico]] —— AI-enabled pedagogical accompaniment supporting STEM identity
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] —— Designing for authentic assessment
- [[paternalistic-filter-llm-history-education]] —— Paternalistic AI use and student identity in history education
- [[laidlaw-genai-identity-crisis-faculty-2026]] —— GenAI as identity crisis for faculty (teacher identity)
- [[teaching-the-teachers-genai-tpk-review-2026]] —— TPK-based teacher training and professional identity
- [[genai-professionalization-metaphors-2026]] —— GenAI conceptualizations and student professional identity

- [[synthetic-position-self-authorship-2026]] —— Authorial suspension: delegated authorship as a self densely voiced yet un-authored (conceptual analysis)
- [[vibe-coding-design-diversity-2026]] —— One Tool, One Taste? How Vibe Coding Trades Collective Diversity for Individual Creativity
