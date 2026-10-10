---
connected_resources: [vibes-diy]
title: 氛围编程
created: "2026-09-08T01:30:00-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
translation_of: concepts/vibe-coding
source_updated: "2026-10-04T16:17:27-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **氛围编程** — 通过迭代式地向大语言模型发出提示、并依据由此产生的行为作出判断来构建软件，而不直接阅读或编辑底层源代码。这一工作流由 Andrej Karpathy 在 2025 年推广，其要旨是"忘记代码的存在"，它是自然语言编程与终端用户开发（在本知识库中，这两种框架如今被当作同义词）的 LLM 原生实现——在这种实现里，散文成为首要的编程界面。

## 值得思考的问题

- Karpathy 最初的框架说你应当"忘记代码的存在"。在往下读之前先自问：看不见代码是一项特性（它降低了门槛），还是一种风险（你无法验证或修复你看不见的东西）？答案对谁应当被允许做氛围编程意味着什么？
- 关于谁能在氛围编程中成功的研究发现，即便用户从不碰代码，传统的[[cs-education|计算机科学学业成就]]仍然预测成功。如果这让你意外，CS 训练可能在培养什么散文无法捕捉的隐性技能？
- 同一研究发现，写作能力预测氛围编程表现，很大程度上*是因为*它产出更高质量的提示。如果提示真的是瓶颈，正确的补救是[[prompt-engineering|教人们更好地提示]]——还是重新设计工具，使它们更少地依赖散文能力？
- 氛围编程常被颂扬为让"任何人"都能成为开发者。但如果写作技能和 CS 知识都塑造结果，氛围编程是拓宽了构建软件的准入，还是仅仅把技能门槛从代码搬到了散文？
- 一些开发者区分"纯"氛围编程（从不读代码）与 AI 辅助编程（你审阅并编辑模型写的东西）。你认为真正的学习——相对于[[cognitive-offloading|过度依赖]]——更可能发生在哪里，为什么？

## 引言

氛围编程描述了一种由 LLM 集成开发平台（Replit、Lovable、Cursor 等）所启发的交互风格：用户用自然语言描述一个程序，模型生成一个可工作的系统，用户基于观察到的行为迭代，而不是通过编辑源码来迭代。这一术语由 OpenAI 联合创始人 Andrej Karpathy 在 2025 年 2 月提出，用以捕捉对模型的依赖达到"代码"从意识中淡出这一程度的体验。氛围编程处在本知识库已经追踪的数条线索的交汇处——它是应用于[[cs-education|编程]]的[[generative-ai|生成式 AI]]，是[[prompt-engineering|提示驱动]]工作的一种极端形式，是[[human-ai-collaboration]]的一个具体实例，也是[[teacher-role|非程序员]]与终端用户构建自己软件（终端用户开发）迄今最清晰的一条路径。

它也有很深的根。用日常语言编程的想法远早于 LLM——从 COBOL 立志成为"一套面向非专业程序员的英语编程系统"，经 Donald Knuth 的文学化编程，到对以受限英语子集进行自然语言编程的研究。只有到了 LLM，把真正对话式、欠明确的指令映射为可运行代码才变得可行。氛围编程是其中的一个特定变体：用户刻意不检查或编辑生成的源码，完全依赖迭代提示与行为评估。

### 界定构念："纯"氛围编程与代码可见的氛围编程

氛围编程的定义仍在变动之中。有些人宽泛地用这个词指任何 AI 引导的编程；另一些人坚持它严格指"用一个不审阅其所写代码的 LLM 构建软件"。Google Cloud 区分了"纯"无代码版本（与 Karpathy 的定义一致）和一个用户理解并精修生成代码的版本。这一区分对[[research-methods-aied|研究]]很要紧：对氛围编程熟练度的对照研究需要一个界定清晰的构念。CHI 2026 那项氛围编程熟练度预测因素研究刻意瞄准"纯"无代码变体——参与者不能查看或编辑生成的源码，因此测得的表现反映的是仅通过散文与观察到的输出来指定、精修和调试行为的能力（见[[vibe-coding-writing-cs-achievement-2026|Thorgeirsson 等人]]）。

### 谁在氛围编程中成功：证据

一项预注册的横断面研究（N = 100 名高等院校学生）提供了关于哪些技能预测氛围编程成功的第一份受控的、参与者层面的证据。[[writing-education|书面沟通熟练度]]（r = .29）与计算机科学成就（r = .39）都显著预测了在经专家审定的、面向 GUI 的氛围编程任务上的表现，而 CS 成就在控制了一般领域认知技能后仍然显著（偏 r = .281）。在联合模型中，CS 成就贡献的独立方差约为写作技能的两倍，但两者都增加了独立的预测价值。关键在于，人工评定的提示质量中介了写作→表现的关联，这给出了回应过程的证据：清晰的散文是通过产出更好的提示来起作用的。由于环境隐藏了源代码，CS 知识只能间接地起作用（通过问题分解、算法思维和控制流的心智模型）——因此作者论证，他们的 CS 估计值是用户也可以直接编辑代码的 AI 辅助编程情形的一个*下界*（[[vibe-coding-writing-cs-achievement-2026|Thorgeirsson 等人（2026）]]）。

### 氛围编程作为终端用户开发与教师工具

氛围编程的一个重大承诺是，它让非程序员——包括[[teacher-role|教师]]和领域专家——构建自己的软件，这是 LLM 时代的终端用户开发。一项[[gaide-vibe-coding-k12-teachers|GAIDE 框架研究]]显示，K-12 教师（非程序员）在为期八周的研讨会上用氛围编程创建了 AI 驱动的学习工具，提升了他们的[[ai-literacy|AI 素养]]，并展示了"做中学"作为一种专业发展模式。在高等教育中，一位教师在数天内通过氛围编程快速构建了一个[[vibe-coding-programming-process-visualizer|由 IDE 活动日志生成的编程过程可视化器]]，使学生的编程过程对教学和[[academic-integrity]]审查可见。这些案例把氛围编程定位为不仅是一种学习者技能，而是一种[[educational-development|重塑谁能创造教育技术]]的创作能力。

### 设计同质化：有准入而无多样性

氛围编程的终端用户开发承诺是关于谁能构建，而不是关于构建出什么。在一门课程的部署中，73 名学生在同一个氛围编程平台上为不同企业构建网站，产出了大约十几种不同的设计，而所感受到的作者身份并不与测得的原创性对应（[[vibe-coding-design-diversity-2026|Boussioux 等人（2026）]]）。降低构建的门槛可能会使产出标准化——这是准入承诺没有标价的一项成本。

### 学习、能动性与过度依赖的风险

氛围编程重新打开了关于当 AI 自动化了实现时学到什么的核心问题。由于用户不读代码，他们必须信任模型的行为——这使得氛围编程成为[[agency]]与[[cognitive-offloading|过度依赖]]之间张力的一个高风险案例，这种张力贯穿于 AI 辅助编程之中。课程正在回应，从教实现转向教如何指挥、验证和审计 AI 生成的产物（见[[reshaping-cs-education-genai|重塑本科 CS 教育]]与[[agentic-ai|智能体软件工程]]）。氛围编程也改变了学习者的认识论位置：成功更少依赖于写代码，而更多依赖于精确地表达意图并对照目标评估行为，这些能力更接近[[computational-thinking|计算思维]]与结构化写作，而不是传统的语法掌握。

第二个限制出现在构建过程本身：移除编码门槛可能让诊断负担原封不动。两项工程案例研究中，一位教师在几小时内用自然语言提示 Gemini，构建了电池热管理系统和三个 ARQ 协议的可工作网页模拟（[[caee-vibe-coding-simulation-development-engineering-education-2026|Tarasak 等人（2026）]]）。随后一个重复分组错误在反复提示下仍然存活，其中包括一条陈述了所需行为的提示。只有当教师从协议行为推理到超时间隔不足时才被修好，而该参数从未在界面中暴露。两项模拟对学习的影响都没有被测量，因此该叙述确立的是可行性，而非有效性。

### 与相关概念的联系

氛围编程与[[prompt-engineering]]（提示质量是散文驱动开发的机制）、[[cs-education]]（作为该技术使用最多、争论最多的领域）、[[computational-thinking]]（即使没有代码访问也预测成功的心智建模）、[[writing-education]]（写作成为一种编程技能）和[[agentic-ai]]（指挥一个模型生成产物而非手工构建）有天然的联系。它也与[[ai-literacy]]和[[teacher-role]]相交，因为构建自己工具的能力改变了教师和学习者能做的事。最后，它提出了与 AI 代码生成在整个计算机教育中所提出的完全相同类型的[[academic-integrity]]与考评问题。

本知识库中的一项教师层面案例研究提供了组织层。[[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer（2026）]]描述了*AI 内部创业*——教育者自己构建工具而不是等待机构采购——包括一位不写代码的作者用 Claude Code 为一个含 321 条课程链接的检查器构建工具。决定性的使能因素是组织性的而非技术性的：工作自由度、奖励和时间的可得性，其中时间被描述为在学术场景中最为明显地处于赤字，并被晋升与终身教职制度削弱。安全图景保持清醒，因为 Veracode 的 2025 年分析发现只有 55% 的 AI 生成代码是安全的，因此氛围编程的课堂工具在处理学生数据或接入 LMS 之前仍需经过一轮审查。

## 关联概念

- [[generative-ai]]
- [[llm]]
- [[prompt-engineering]]
- [[cs-education]]
- [[computational-thinking]]
- [[writing-education]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[teacher-role]]
- [[cognitive-offloading]]

## 关联文章

- [[vibe-coding-writing-cs-achievement-2026]] — 计算机科学成就与写作技能预测氛围编程熟练度（CHI 2026 实证研究）
- [[gaide-vibe-coding-k12-teachers]] — 一个引导 K-12 教师通过氛围编程创建 AI 驱动学习技术的框架
- [[vibe-coding-programming-process-visualizer]] — 从想法到课堂只需数天：用"氛围编程"从 IDE 活动日志创建编程过程可视化器
- [[caee-vibe-coding-simulation-development-engineering-education-2026]] — 氛围编程在数小时内构建了两个工程模拟；诊断协议错误仍然需要教师
- [[prompt-problems-nl-programming-mistakes]] — 理解学生在解决自然语言编程任务时的认知、错误与调试方法
- [[code-to-learn-genai-artifact-construction-2026]] — 与生成式 AI 一起以代码学习：高中教育中产物构建的有理论依据的框架
- [[reshaping-cs-education-genai]] — 为生成式 AI 重塑本科计算机科学教育
- [[flowcode-ai-creative-coding]] — Flowcode：一个用于脚手架化创意计算教育中迭代的 AI 编程环境
- [[zimmer-ai-intrapreneurship-faculty-innovation-2026]] — AI 内部创业：教师自建工具，以及决定这种冲动能否存续的组织使能因素（Zimmer 2026）
- [[vibe-coding-design-diversity-2026]] — 一种工具，一种口味？氛围编程如何以集体多样性换取个人创造力
