---
title: 个性化学习
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
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

> **个性化学习（personalized learning）** — 使教育经验适配于个体[[student-modeling|学习者画像]]，包括先备知识、学习节奏、偏好与[[affective-computing|情感]]状态。AI 使个性化可以规模化，尽管*系统个性化*与*学习者感知到的个性化*之间的差距仍是一个开放的测量挑战。与[[adaptive-learning|自适应学习]]和[[intelligent-tutoring|智能导学]]并列，它是[[student-modeling|学习者建模与自适应教学]]家族中应用侧的成员之一 —— 消耗学习者模型以调适教学。

## 值得思考的问题

- 当你想到“个性化学习”，你想象的是内容适配于学习者的节奏，还是适配于他们自选的目标？本页说这两者截然不同（经由不同路径达成的统一结果 对 多样化的结果）。你更看重哪一个，为什么？
- 本页把个性化学习（目标）与自适应学习（一种机制）区分开来。你能想到一种不涉及实时自适应的个性化吗 —— 它还算不算个性化？
- 一个系统可以在学习者从未感到被认识的情况下进行调适。你什么时候体验过被“个性化”却未真正感到被了解？差别在哪里？
- 本页指出，过度个性化可能把学习者困在低期望的轨道里。善意的 AI 裁剪怎么会意外地为一个学习者压低天花板？
- 个性化需要详尽的学习者数据，而隐私需要数据最小化。你在“足够调适的数据”与“多到使学习者暴露”之间，线画在哪里？
- 一个 AI 需要跨会话记住你的什么，才能真正个性化你的学习 —— 而它记住这些东西又有何风险？

## 引言

使教育经验适配于个体学习者画像，包括[[prior-knowledge|先备知识]]、学习节奏、偏好与情感状态。AI 使个性化可以规模化，尽管*系统个性化*与*学习者感知到的个性化*之间的差距仍是一个开放的测量挑战。

- **[[mishra-control-vs-agency-history-2025|Mishra 等]]**区分了两种有深远历史渊源的个人化形式 —— 经由不同路径达成的统一结果（从 Skinner 的[[teacher-role|教学]]机器到 Khan Academy 式掌握导学）对 多样的、由学习者选择的结果 —— 映射到该领域的“控制对能动性”张力。

## AI 驱动个性化的架构

### 纵向记忆（PersonaVLM → 教育）

Nie 等（2026）开发了一种[[multimodal|多模态]]长期记忆架构（PersonaVLM），能在交互之间保持人设一致性。映射到教育上，这使导学系统能跨会话记住学习者的[[misconceptions|迷思概念]]、偏好的解释与进度历史 —— 针对无状态[[conversational-ai|聊天机器人]]导学系统的一个关键缺陷。

### 智能体原生的个性化基座（DeepTutor）

Ma 等（2026）把[[deeptutor]]的每一项功能都设计为共享一个共同的个性化基座，而非把个性化硬接到反应式工具上。该架构确保跨模态连贯性：同一份学习者画像驱动[[problem-solving|问题解决]]、[[automated-question-generation|题目生成]]与协作写作。

### 多智能体社交个性化（MAIC）

Yu 等（2024）不只个性化内容，还个性化*社交情境*。同班原型（班级小丑、深思者、记记者、好奇者）创造出与个体学习者需求相匹配的多样同伴学习动态。

### 面向学习者画像的 AutoML

个性化是提高教育质量的一个核心目标，然而处理多源异构的学习行为数据仍是一个挑战。一个由自动化[[reinforcement-learning|机器学习]]驱动的个性化神经认知架构搜索框架，为异构学习者画像建构学习者画像并生成诊断模型，整合多模态数据以超越静态的考试成绩。

一个静态的知识库无法个性化：本体演进缓慢、处理不确定性差，因此该架构使表示与知识类型相匹配 —— 陈述性归于本体、程序性归于规则、不确定归于模糊或概率本体、隐性归于分析与机器学习 —— 并偏好一个由小型映射本体构成的系统，而非一个单体模型（[[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova，2026]]）。

## 与自适应学习和智能导学的关系

个性化学习常与[[adaptive-learning|自适应学习]]混为一谈，但两者并不相同。**自适应学习**指*机制* —— 一个系统基于学习者模型实时调适内容、节奏与难度。**个性化学习**是*更宽的目标* —— 使完整的学习经验（内容、路径、节奏、偏好、目标）适配于个体，实时自适应只是其中一种实现。自适应系统是实现个性化的*手段*，但个性化也可以通过静态学习者画像、基于选择的路径，或不实时调适的人类导学调整来实现。

一项对 22 项高等教育干预的 PRISMA 2020 综述，把个性化学习支持与自适应路径置于主导的 AI 用例之列，但多数实现改善了既有实践，而非转变了它（[[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh 等（2026）]]）。

[[intelligent-tutoring|智能导学]]居于其间：ITS 是通过结构化学生建模交付个性化教学的规范*自适应*平台，而基于[[llm|大语言模型]]的导学系统则以对话方式个性化。三者都是[[student-modeling|学习者建模与自适应教学]]家族中应用侧的成员 —— 它们消耗由[[student-modeling|学生建模]]、[[knowledge-tracing|知识追踪]]与[[cognitive-diagnosis|认知诊断]]产生的学习者表示，来决定下一步教什么。这一区分对评价很重要：把系统含糊地标记为“自适应”“个性化”或“个别化”（见下）的研究，可能掩盖所声称的益处究竟来自实时自适应、学习者选择，还是内容裁剪。

## 测量挑战

- **系统个性化 对 感知到的个性化** —— 一个系统可以在学习者未感到被认识的情况下调适
- **纵向效度** —— 若画像变得陈旧或过拟合，个性化益处可能衰减
- **[[equity-in-ai-education|公平]]风险** —— 过度个性化可能把学习者困在低期望的轨道里

- **偏见风险** —— 以学生属性为条件可能编码刻板印象：在文章保持不变的情况下，针对以种族、语言或残障标记的学生的反馈变得更褒扬、更少批评（[[marked-pedagogies-linguistic-bias-writing-feedback|Tan、Phalen 与 Demszky（2026）]]）。

## 个性化与评价

个性化与[[assessment|评价]]在 AI 驱动的学习中紧密耦合。自适应个性化依赖对学习者所知之事的持续[[formative-assessment|形成性]]测量（经由[[knowledge-tracing|知识追踪]]、[[student-modeling|学生建模]]与[[cognitive-diagnosis|认知诊断]]），来决定下一步调适什么 —— 因此[[assessment|评价]]信号的可靠性直接约束个性化的质量。反之，当[[summative-assessment|总结性评价]]按学习者逐一个性化时，[[bias-mitigation|公平]]与可比性变得更难确立。本知识库的[[research-methods-aied|研究]]警告不要对浅层或嘈杂的信号过度调适：误测学习者的[[adaptive-learning|自适应]]系统可能以降低而非支持学习的方式进行个性化，而自评不可靠的 AI 原住民（一种“缺失的认知基线”）更难被准确建模。

## AI 时代的个性化

证明这一关切并非假设的最强证据，来自[[personalization-paradox-adaptive-learning-emotions-2026|一项对 486 名中国本科生的三波纵向研究（Li、Lin 与 Qiu，2026）]]，它发现学生越感到自己的 AI 自适应环境个性化，他们的[[self-regulated-learning|自我调节学习]]就*越低* —— 即“个性化悖论”。学业情绪的转变承载了大部分效应：遇到自适应环境预示更少的愉悦、更多的焦虑与无聊，而这些情绪变化合计解释了约一半的个性化与自我调节下降之间的关联。[[ai-literacy|AI 素养]]缓冲了这一损害，在高素养时把负向情绪关联削弱到不显著。因此，个性化似乎是以学习者自身[[regulation|调节]]活动为代价买来适应性的，而该研究指出情感体验 —— 而不只是认知负荷 —— 是这一代价被支付的渠道。

在路径背后的诊断得到验证之处，个性化通过降低负荷而非覆盖更多内容而兑现：最短路径补救平均 3.82 步，学习时间减少 22.0%（73.8 对 57.6 分钟），而认知负荷承载了后测效应的 53.7%（[[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng 与 Huang，2026]]）。

证据在小规模上本身可能为负：在一项为期五天的初等分数试验中（最终 n = 22），照常营业组在理解增益上显著大于 AI 自适应的 Mathbot 组，且作者把年级混淆、猜测与许可成本列为局限 —— “自适应”这个标签本身不带来效应（[[ai-powered-personalized-learning-elementary-fractions-2026|Holman（2024）]]）。

强化学习是个性化的一个独特机制，而[[riedmann-reinforcement-learning-education-review-2026|Riedmann、Schaper 与 Lugrin（2025）]]绘制了它的实证记录：他们对 89 项教育中强化学习研究的[[meta-analysis-systematic-review|PRISMA]]综述发现，强化学习个性化集中于[[higher-ed|高等教育]]与[[math-education|数学]]，调适主要以内容排程（n = 53）或与指导相关的个性化如提示与反馈（n = 36）实现。他们报告，强化学习策略最常在指导相关的调适和[[affective-computing|情感]]变量上胜过非自适应基线（在被测研究的 63% 中），而学习增益 —— 尤其是归一化学习增益 —— 是最有效的奖励来源 —— 这是设计奖励信号、使个性化指向真正的学习而非[[student-engagement|参与]]的实践指引。

**[[ai-coaching-rl-skill-development|Wang 等（2026）]]**表明，奖励目标本身就是一个个性化选择：一个以学习者独立胜任力为奖励训练的强化学习教练，把单圈时间削减 27.9%（p = 0.005），而基于规则的淡出未产生可靠变化，作者据此主张，为任务表现优化的编程智能体对人类保留了什么没有任何激励。

Bernstein 与 Sibia（2026）锐化了兴趣个性化与专长个性化之间的区分：兴趣匹配的 GenAI 类比被报告为更有吸引力、更易记，却并非一致地更受信任，有些学生即便类比匹配其陈述的兴趣，仍偏好通用的技术解释，为了自足与完整（[[student-reception-genai-analogies-computing-2026]]）。他们的设计建议是，经由源域结构来个性化，并询问学生已经知道什么，而不只问什么让他们感兴趣，因为对源域的熟悉正是使学习者能审视类比之处 —— 并通过一组类比、选择加入，或同时提供通用与个性化版本，把个性化的控制权交给学习者。Sidorkin（2026）在课程材料（而非个别解释）层面记录了一种进一步的配对：为一门研究生教育领导课程按需生成的每周阅读，同时沿兴趣（领域、专业角色、本地例子）与理解水平（节奏、定义、深度）裁剪，而由此产生的日志共享一个共同的骨架（TF-IDF 余弦相似度 0.50 到 0.61），他将其读作一个带可调旋钮的模板，而非按学习者重写。同一语料库还显示，裁剪是结构性的、但强度不均：成果层面的裁剪标记平均每 10,000 字 52.24 个，跨日志从 38.74 到 74.29 不等，而面向理解的提示比基线解释性文本多产出 3.4 倍到 8.7 倍的定义性[[scaffolding|脚手架]]。

个性化的第三个轴是*目标*，而这是 AI 规划器处理得最糟的输入。**[[personapath-personalized-learning-paths-2026|Liu 等（2026）]]**把 2,000 个合成学习者 persona 与一个含 347 本教材、4,092 个概念的先修图配对，请十个 LLM 逐步规划一个学习者应学什么知识才能达到一个陈述的目标单元。模型产出了结构健全的课程 —— DeepSeek-V3.1 在先修与幻觉效度上达到 90.9% —— 却未能将其调适于学习者：适应性最高只到 44.7%，DeepSeek-V3.1 的最终通过率在基础教育为 29.5%、在高等教育为 14.6%，而从 persona 中移除掌握字段会使适应性损失多达 26.1 个百分点，效度却几乎不变。一次性生成整条路径而非交互式地生成，使效度提高多达 30.8 分，却使适应性下降 28.8。“个性化”这一主张是关于响应学习者状态的，而状态变量恰是这些规划器最容易弃之不顾的部分 —— 这是上述测量关切在计算上的对应物。

第四个轴是*受众*而非个体学习者：[[bespoke-industry-personalized-lecture-videos-2026|Bespoke]]为一个具名的专业群体（医疗、金融或能源）重新生成一堂既有讲座，其专家评分者在个性化深度上给行业框架化版本高出 0.32 分（3.97 对 3.65），而受众校准滞后（3.52）。裁剪到群体而非学习者是一种更便宜、更可行的个性化形式，但测量它的量表评价的是被评判的契合度，而非学习者结果。

个性化可以胜过一个人类主讲者：在一门大型在线课程中（493 名受访者），学生把 AI 生成的个性化视频排在非个性化的人类录制视频之上（平均排名 2.26 对 2.69），而 88.4% 的人把某个个性化视频排在第一，人类录制视频为 73.8%（[[personalized-ai-generated-videos-preference-2026|Tomlinson 等（2026）]]）。

## 提示条件化的微观个性化

**[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu、Kakar 与 Goel（2026）]]**表明，系统个性化与感知个性化之间的差距可以在回应层面得到解决。他们为 Jill Watson [[llm|大语言模型]]/[[rag|检索增强]]导学系统设计的框架，把学习者自选的偏好（抽象度、详尽度、感知、加工、理解）与系统推断的认知需求（[[cognitive-diagnosis|布鲁姆分类学]]）结合，经[[prompt-engineering|结构化提示条件化]]在每次交互中调适出 96 个微观画像 —— 无需重训练、无需[[discipline-specific-aied|领域特定]]撰写。这是[[adaptive-learning|适应性]]（学习者驱动的偏好选择）与调适性（系统驱动的认知评估）的混合体，表明内容*呈现方式*的个性化既可规模化、也可为学习者所感知。

## 术语歧义

一个反复出现的问题是，“个性化学习”是一个宽泛、定义松散的总括术语。系统综述（[[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh 等，2026]]）发现，[[adaptive-learning|自适应学习]]、个别化教学、定制化学习与个性化学习被互换使用，且没有普遍接受的定义 —— 这是一种使研究综合与循证实践复杂化的概念歧义。该领域日益呼吁一个统一的框架与定义，使“个性化”表示一个精确、有证据支撑的主张，而非一个含糊的标签（本知识库对[[limitations-in-aied-research|构念使用薄弱的批评]]强化了这一点）。

## 关联概念

- [[adaptive-learning]] — 实时把内容、节奏与难度裁剪给学习者的自适应系统
- [[intelligent-tutoring]] — 对学习者建模并交付个别化教学的导学系统
- [[student-modeling]] — 表示驱动适应的学习者知识、技能与状态
- [[knowledge-tracing]] — 从随时间的表现推断对知识成分的掌握
- [[cognitive-diagnosis]] — 从回应中诊断潜在的学习者知识与属性
- [[scaffolding]] — 校准于个体学习者需求的支持与淡出
- [[student-experience]] — 学习者对个性化的亲身体验
- [[learning-analytics]] — 为调适提供依据的数据驱动学习测量
- [[formative-assessment]] — 提示下一步调适什么的持续评价
- [[summative-assessment]] — 个性化使其可比性复杂化的终点评价
- [[generative-ai]] — 基于大语言模型的对话式个性化
- [[edtech-platform]] — 规模化交付个性化学习的平台
- [[higher-ed]] — 个性化的高等教育情境
- [[online-teaching-and-learning]] — 在线教学与学习
- [[recommender-systems-and-learning-paths]]

## 关联文章

- [[bespoke-industry-personalized-lecture-videos-2026]] — 从一份种子讲稿重新生成行业个性化讲座视频：受众层面的裁剪，由领域专家评分（Puech 等，2026）
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — AI 教学助手的提示工程微观个性化（Basu、Kakar 与 Goel，2026）
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[mishra-control-vs-agency-history-2025]] — 区分两种个性化形式（统一 对 多样的结果）
- [[khalifeh-redefining-personalized-learning-ai-2026]] — 重新定义个性化学习：系统综述
- [[deeptutor]] — 面向导学的智能体原生个性化基座
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — 面向个性化在线学习的本体分层混合知识模型
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — 初等分数的个性化自适应学习
- [[ai-coaching-rl-skill-development]] — 面向技能发展的强化学习教练
- [[personalized-ai-generated-videos-preference-2026]] — 学生偏好个性化 AI 生成视频，胜过非个性化的人类录制视频（Tomlinson 等，2026）
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 面向个性化学习路径的贝叶斯认知诊断
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — ChatGPT 增强的形成性评价中的教师与 AI 角色
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in personalized automated feedback
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — 系统综述：自适应路径与推荐器是高等教育中首要的 AI 整合用例
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[personalization-paradox-adaptive-learning-emotions-2026]] — 个性化悖论：感知到的自适应个性化经学业情绪与更低的自我调节学习相关，由 AI 素养缓冲（Li、Lin 与 Qiu，2026）
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: LLM 规划器达到 90.9% 效度，但向陈述的学习者目标个性化路径时无一模型超过 44.7% 适应性（Liu 等，2026）