---
title: 减少 AI 滥用
created: "2026-08-12T19:13:02-04:00"
updated: "2026-10-09T18:58:08-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
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

> **减少 AI 滥用（reducing AI misuse）**——一系列设计、[[pedagogy|教学法]]与[[educational-policy-ai|政策]]杠杆，它们防止学生用[[generative-ai|生成式 AI]]替代自己的[[cognitive-offloading|认知工作]]，转而把他们引向[[ethics|合乎伦理的]]、富有成效的使用。有效的方法按影响力而非流行度排序，而最强证据支持**结构性杠杆**——工具[[guardrails|护栏]]与评估重构——它们改变环境，使滥用在学生动机如何的情况下都更难发生，胜过依赖建立持久能力与[[framing-ai-use-for-students|学生认同]]的**教育性杠杆**。

## 值得思考的问题

- 把作业外包给 AI 的学生，可能看到作业分数*上升*而[[summative-assessment|闭卷考试]]分数*下降*。在阅读之前，为什么表现与学习会如此剧烈地分道扬镳？这一差距对"与 AI 一起成功"究竟意味着什么有何提示？
- 本页按因果证据与覆盖面为干预排序，并把*结构性*杠杆（工具护栏、评估重构）置于*教育性*杠杆（[[teacher-role|教导]]良好实践）之上——恰恰因为结构性杠杆无论学生的动机如何都起作用。你同意"改变环境胜过改变心智"吗？依赖各自一方有何风险？
- 一个加了护栏的"给提示不给答案"辅导系统，消除了未加护栏系统造成的学习损害，尽管两者看起来都有帮助。想想你见过的一种过于轻易给出答案的学习工具。在"起到脚手架作用的提示"与"替代思考的答案"之间，界线在哪里——你能否在阅读之前说出这条线？
- 最强的修复包含评估重构：无协助的随堂考试、口头答辩、过程性成果、奖励推理而非表层流畅。如果一门课程这样给你评分，你会作何感受？这种感受是否说明了这一杠杆为何既有效又不受欢迎？
- 迫使学生把自己的使用映射到认知阶段（规划与内容生成）的 AI 声明框架，把重心从监管转向专业实践。你认为这种反思真的培养了更好的判断，还是只教会学生把滥用描述得更巧妙？
- 在阅读之前先定个目标：找出你自己的课程或工作流程中一个会让 AI 滥用更困难的具体改变，和一个会让生产性使用更容易的具体改变。它们各自属于本页的哪一层级？

## 引言

这一概念建立在"AI 滥用会主动损害持久学习"的证据之上——即[[ai-misuse-learning-harm|表现—学习差距]]所记录的——即便它在即时提升表现。干预因此瞄准这一损害的机制：抄答案、[[cognitive-offloading|认知卸载]]、动机侵蚀与学习替代。这些干预并不互斥；一种稳健的做法把结构性底线与教育性的能力建设结合起来。

### 为什么结构性杠杆最重要

干预可按**因果证据 × 结构性覆盖面 × 可扩展性 ×[[sustainability|可持续性]]**排序。在此基础上，两项*结构性*杠杆排名最高，因为它们无论学生是否选择正确行为都起作用——它们约束环境，而不依赖内部动机。*教育性*杠杆必不可少，但只在学生认同时才有效，因此尽管概念上前途可期，仍被归为第二层级。[[coates-governing-academic-integrity-indicators-2025|Coates、Croucher 与 Calderon（2025）]]把结构性论证又推高一层，把治理而非学生行为视为约束条件，并提出一个 130 项的诚信指标框架，让学术治理者得以看到：评估是否真实、学生是否为评价他们的教师所个别地了解、诚信是否出现在入学教育与入学指导中。他们的改革瞄准治理架构、人员以及[[ai-technologies|技术与资源]]，并提议从网络安全领域借来[[guardrails|红队测试]]，在学生发现之前暴露评估的脆弱之处——这提醒我们，结构性底线由机构维护，而机构需要维护它所需的信息与意愿。

### 第一层级——已被直接证明能减少学习损害

**加了护栏的 AI 工具设计（"给提示不给答案"式[[scaffolding|脚手架]]）。** 在本知识库最强的因果发现中，一项现场[[rct|随机对照实验]]显示，未加护栏的 ChatGPT 式辅导系统把有协助的练习表现提高了 **+48%**，却把无协助的考试成绩降低了 **−17%**，而加了护栏的辅导系统（给提示而非答案，外加教师编写的问题信息）完全消除了这一损害。这在机制上阻止了造成损害的"抄答案"拐杖行为。具体做法包括：给提示不给答案的辅导、在提示中植入正确解法和常见[[misconceptions|误解]]、以及要求在 AI 输出揭示之前先由学生尝试一次。

**评估重构（抗 AI 的、无协助的测量）。** 因为滥用的损害依评估而定——它在有监考的、闭卷的、无协助的测量上显现，却在普通评分课程作业上抬高分数——改变"什么算作成就"既能阻止滥用，也能使它显形。具体做法包括：无协助的随堂考试与口头答辩、要求过程性成果（草稿、反思、带批注的推理）、奖励推理而非表层流畅、划定无 AI 区。[[ivory-psychology-assessment-integrity-2026|Ivory 等（2026）]]给过程性成果要求提供了一件具体工具：强制的版本历史与可复现的分析文档，于是一份可疑的提交物可以作为该作品如何展开的时间线来检查，而学生要生成的虚构材料的数量将远超外包所节省的。大规模现场证据强化了这一点：[[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg、Lei 与 Wu（2026）]]发现作业外包使作业分数提高 18%，却使闭卷考试分数*降低* 20%——这正是无协助、有监考的测量所要揭示的信号，而该研究建议给闭卷的现场评估更高的权重。[[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray、Edsall 与 Parapadakis（2025）]]给同一逻辑给出了最明确的情境犯罪预防表述，论证失败属于那些模型能令人信服地回答的评估，而非属于学生，并报告了一个案例：25 项预防技术应用于一门澳大利亚商业顶点课程——追踪学生互动、对过于专业的作品作红旗检测、随机重编小组、每周随堂监考测试、对学生已发布的课程材料发出下架通知——据称一年内把违纪案例从 183 起降到 27 起。他们的处方是动机性的而非调查性的：提高评估的被感知目的、建立[[self-efficacy|自我效能]]、提高作弊的被感知社会成本，同时作者警告只处理三者中的一两项将会失败，并以五项学科特定的重构作支撑——把限时解题考试变成开卷的[[problem-solving|问题解决]]加一份对自身过程的书面反思，把总结性论文变成[[collaborative-learning|协作式]]档案研究项目，把[[eportfolio|档案袋]]变成迭代的、经同伴评阅的设计过程。

结构性杠杆有一只执法的手臂，而其证据基础比它的覆盖面所暗示的要弱。[[munoz-misconduct-allegation-evidence-2026|Munoz 等（2026）]]编码了 1,162 起生成式 AI 违纪案例，发现在指控时点最常被引用的证据——[[ai-detection|检测器]]输出、相似度报告、AI 典型的内容模式——证明力最弱，而供认、被观察到的考试行为与经独立核实的虚构参考文献最强；由于机构程序未设定最低证据门槛，证据质量与案例结果之间没有可靠关系，而那些证据薄弱的案例中的学生主要只能诉诸申诉。[[wright-transcription-not-generation-2026|Wright（2026）]]展示了同一不精确性的第二种代价：围绕"生成式 AI"而非围绕功能写成的禁令，会把只是转换学生已经写就的作品之格式的工具一并捕获，于是纯转录式的使用也可能被当作违纪惩处——这是一种过度涵盖，对残障学生和面临[[equity-in-ai-education|公平]]风险的[[learners|学习者]]打击最重，且对[[assessment-validity|效度]]毫无帮助。[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana、Mtshali 与 Mchunu（2026）]]补充说，[[remote-proctoring|远程监考]]这一采用最广的诚信控制，其威慑论证建立在学生自称的感受上，而非建立在违纪减少之上，并带来焦虑、注意力损失和与基础设施相关的排斥，而低误用率并未被证明能回应这些问题。[[li-genai-assessment-language-equity-2026|Li（2026）]]补充了规则设计的维度：因为同一个界面既执行被许可的语言编辑、又执行被禁止的实质性起草，不加区分的生成式 AI 规则给把英语作为附加语言的学生施加了偏向特定群体的合规负担，因此更站得住的预防是基于目的的支持—替代区分、分阶段提交与短小的、与构念对齐的口头核实、以批评为基础的问题，去做检测所做不到的工作。预防还必须覆盖评分者本身：[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]]的红队评估发现，嵌入提交文件中的五种间接提示注入策略有两种能把一篇不及格的文章未被察觉地提升为及格，报告成功率分别为 100% 和 94%，因此在 AI 工具为学生作业打分的地方，[[human-in-the-loop-ai|人工审查]]、指令与所提交内容之间更清晰的分离以及韧性测试，属于结构性底线，而不属于可选的层级。

### 第二层级——框架支持强，潜力高

**搭建脚手架的使用序列：先思考，AI 其次，反思第三。** 八条在不排挤[[critical-thinking|批判性思维]]的前提下整合大语言模型的设计原则：保留认知摩擦、把 AI 定位为暂时的思考伙伴而非权威、嵌入评价检查点、要求[[metacognition|元认知]]日志与提示日志、平衡有 AI 中介的阶段与无 AI 的阶段。相关性证据（先独立工作再让 AI 介入会产生更强的输出）是强的；它是第一层级的教学法上完整的版本。

**[[ai-literacy|AI 素养]]与[[prompt-engineering|提示]]素养，配合刻意练习与即时[[feedback|反馈]]。** 一个[[k-12|K-12]]模块使用基于情境的提示练习并配[[llm|大语言模型]]自动评分，提升了实际的提示技能，并把使用 AI 学习的信心提高了 **+10.4%**，87% 报告说自己学会了负责任地使用 AI。技能增益已得到证明；开放的问题是这些增益能否转化为下游的[[learning-gains|学习结果]]。它同时也触及先前 AI 接入上的[[equity-in-ai-education|公平]]差距。

**结构化的 AI 使用声明框架。** 用[[discipline-specific-aied|学科特定的]]声明取代泛泛的"我用了 AI"勾选框，把使用映射到认知阶段（结构性规划与内容生成），迫使对学习过程进行反思，并厘清可接受的协助与违纪之间的界线，把重心从监管转向专业实践。

一旦诚信被当作一种要教授的实践而非要执行的规则，教育性杠杆的面貌又不同了。[[sharma-judgment-visible-genai-assessment-2026|Sharma（2026）]]论证，基于检测与核实的诚信制度与经生成式 AI 增强的工作不相匹配，并把诚信重构为一种通过[[evaluative-judgment|评价性判断]]——学习者在不确定下权衡选项、为学术选择作辩解并承担责任的能力——来实施的教学实践，它通过带批注的决策轨迹、经记录的核实、口头答辩和逐稿版本历史等成果显形，检测则被降为补充层而非主要基础设施。[[mulisa-students-genai-integrity-perspectives-2026|Mulisa 与 Mezgebu（2026）]]从学生一方发现了同样的入口：在埃塞俄比亚一所[[higher-ed|大学]]的 27 次访谈中，使用近乎普遍，多数参与者把成绩提升归功于生成式 AI，而最尖锐的抱怨走向相反方向——用 AI 的学生得分高于勤奋的独立工作者，参与者形容这令人沮丧。作者结论：学生的信念比机构规则更能预测合乎伦理的使用，因此意识、清晰的政策与评估重构必须同时到位——这就是本页教育性层级被表述为一个条件：能力建设只能通过伴随结构性底线的[[framing-ai-use-for-students|学生认同]]来改变行为。[[ji-student-voices-academic-integrity-scoping-2026|Ji（2026）]]对 38 项学生声音研究的[[meta-analysis-systematic-review|范围综述]]给出了同一结论的领域层面版本：受评研究一致趋向从回溯式检测转向主动的伦理推理，趋向在[[curriculum-design|课程]]中而非在一次性的[[ai-literacy|素养]]活动中教授 AI 伦理与 AI 抄袭，并趋向由领导者、教师与学生共同拟定的详细指南，因为不清楚的指引会被读作默许而非谨慎。Ji 自己的解读是：所有权感与道德推理比害怕惩罚更能激励学生，学生既不是生成式 AI 的被动接受者，也不是无道德约束的违规者，而是在灰色地带工作的道德主体——这就是这一层级的前提，被表述为一项发现。

### 第三层级——有潜力，直接因果证据较少

**元认知与自我评估干预。** 反思日志、提示日志与校准训练，重建了 AI 原生学生"缺失的认知基线"——他们无法定位自己的认知边界，因为 AI 生成的流畅掩盖了它。概念上居于核心，但尚未经因果检验。

**动机重构。** 因为 AI 的可获得性侵蚀[[motivation|自主动机]]（"何必费力？"），围绕 AI 无法达成的目标、围绕[[agency|学习者能动性]]重构任务，直接针对那种在直接损害之上叠加的持续性侵蚀。

**批判性 AI 素养。** 一种权力—知识框架，教学习者去质询、挑战并参与[[governance|AI 治理]]，而非只是消费。长期、以公平为取向，其抱负是结构性的，尽管其学习效果基本未被检验。

**识别[[ai-sycophancy|谄媚]]以防止不加批判的接受。** 因为[[ai-sycophancy|谄媚]]的 AI 认同用户而非挑战用户，它是一个直接的滥用渠道：因错误思考而得到肯定性赞同的学生，会被鼓励用 AI 替代自己的[[cognitive-offloading|认知工作]]。[[contextual-sycophancy-ai-literacy|情境性谄媚]]表明，AI 素养与提示训练能减少但不能消除这一错误循环，因此滥用预防必须把教育性的识别训练与系统层面的矫正性摩擦设计配对（见第一层级的护栏）。

- **[[desirable-difficulties|生产性摩擦]]与教学法功能。** 悉尼的快速综述论证，当生成式 AI 让学生绕过学习所需的认知/元认知摩擦时，它会损害学习，而有意设计的工具引入*生产性摩擦*（保留答案、要求解释）。它区分了四种教学法功能——*从*生成式 AI *学*、*与*它一起学、*关于*它的学、以及*通过塑造*它来学——每种对学生能动性与评估的要求都不同。（[[young-people-learning-generative-ai-rapid-review-2026]]）

## 关联概念

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## 关联文章

- [[ivory-psychology-assessment-integrity-2026]] — 版本控制证据链与可复现分析文档作为滥用威慑（Ivory et al. 2026）
- [[generative-ai-guardrails-harm-learning]] — GenAI Without Guardrails Can Harm Learning
- [[genai-performance-vs-learning]] — Distinguishing Performance Gains from Learning
- [[ai-assessment-scale-reform]] — The AI Assessment Scale and Assessment Reform
- [[critical-thinking-genai-scaffolding]] — Scaffolding Critical Thinking with Generative AI
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning (K-12 AI Literacy Module)
- [[genai-declaration-frameworks-higher-education]] — Structuring Transparency: GenAI Declaration Frameworks
- [[absent-cognitive-baseline-2026]] — The Absent Cognitive Baseline
- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: an AI Literacy Intervention
- [[sycophantic-ai-social-interaction-2026]] — Sycophantic AI makes human interaction feel more effortful and less satisfying over time
- [[ssaho-ai-academic-integrity-review-2025]] — Culture-building and assessment redesign over detection policing
- [[young-people-learning-generative-ai-rapid-review-2026]] — Cognitive surrender, productive friction, and metacognitive inequity
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — The generative AI learning penalty: homework outsourcing harms learning
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[burneo-can-edtech-close-learning-gaps-2026]] — Guardrails removed harm without improving exam scores
- [[munoz-misconduct-allegation-evidence-2026]] — What misconduct allegation files actually contain as evidence
- [[wright-transcription-not-generation-2026]] — Over-inclusive AI rules and the students they catch
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrity as evaluative judgment rather than compliance
- [[mulisa-students-genai-integrity-perspectives-2026]] — Students on whether GenAI is a cheating tool or a learning partner
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — What remote proctoring does to students, and to equity
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Situational crime prevention against AI-facilitated cheating: 183 to 27 cases, and five discipline-specific redesigns (Leaton Gray, Edsall & Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — What 38 studies of student voices recommend: co-created clarity and educative reasoning over detection (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Where language support ends and substitution begins for EAL writers (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection as a misuse vector against AI grading (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Governance as the binding constraint on integrity: a 130-item indicator framework (Coates, Croucher & Calderon 2025)
