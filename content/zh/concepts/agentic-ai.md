---
connected_resources: [deeptutor]
title: 智能体式人工智能
created: "2026-08-01T04:07:54-04:00"
updated: "2026-10-09T18:39:26-04:00"
connected_faqs: [ai-agents-support-students-instructors, asynchronous-online-courses-ai, making-simulated-students-behave-like-learners]
type: concept
foundations: [agency, agentic-ai, ai-literacy, cognitive-offloading]
pedagogy: [scaffolding]
technology: [generative-ai, human-in-the-loop-ai, intelligent-tutoring, llm]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/agentic-ai
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

> **智能体式[[ai-education|教育中的人工智能]]**——自主地规划、执行并调整多步工作流以达成学习目标的 AI 系统，它超出单轮的问答，充当持久的、目标导向的协作者：在延展的交互中搭脚手架的[[intelligent-tutoring|AI 导学系统]]、编排教学设计的多智能体系统，以及共同调节学习的智能体。从"响应提示的工具"到"主动协作者"的这一范式转移既带来希望也带来风险：智能体式 AI 可以个性化并深化学习，但它也威胁到[[agency]]、[[cognitive-offloading|认知努力]]与掌控。本知识库的[[agentic-ai-education-scoping-review|范围综述]]、[[tool-invariant-framework-agentic-ai|工具无关框架]]与[[agentic-ai-pedagogical-best-practice-2026|教学法最佳实践]]文章考察了这一张力。

## 值得思考的问题

- 智能体式 AI 不只是回答问题——它规划、执行并调整多步工作流以朝向一个目标，充当一个持久的协作者。与一个需要你去提示的工具一起学习，同与一个主动的智能体一起学习，有何不同？
- 该领域在"对话式"与"智能体式"AI 之间划了一条线（一个系统只有在满足若干判据如规划、记忆、自主与目标导向行动时才合格）。这条线在实践中落在哪里——把每个聊天机器人都称作"智能体式的"是否掩盖的比揭示的更多？
- 一个智能体自动化得越多，学习者做的认知工作就越少。在"为你的学习搭脚手架的 AI"与"替你学习的 AI"之间，界线在哪里？
- 一项[[meta-analysis-systematic-review|范围综述]]发现，只有 29% 的智能体式 AI 研究把系统锚定在教育理论之上。如果多数系统并非基于理论，那么在评价一个"智能"导学智能体时，什么该让你起疑？
- 多智能体系统把具有不同角色的专门智能体编排起来。当若干智能体在一间课堂里协同工作时，谁是可问责的——人又该在哪里介入？
- 该领域的核心张力是个性化与学习者自主性及认知努力之间的张力。如果一个导学系统变得如此善于适应，以至于你永远不必挣扎，那你真正得到的是什么学习？
- 在 Copilot 到 Autopilot 的光谱上，一个给定的任务该落在哪里——把一项任务从"智能体提议、学习者处置"移到"智能体拥有"，是否曾服务于学习，而不只是效率？
- 锚定在成熟设计理论中的混合智能体胜过纯提示工程。一个理论上立得住的系统为何可能胜过原始的提示工程——这对一个智能体的"智能"如何被测量说明了什么？

## 引言

智能体式人工智能指的是能自主地规划、执行并调整多步工作流以达成学习目标的人工智能系统——超出单轮的问答，在教育情境中充当持久的、目标导向的协作者。在教育中，智能体式 AI 表现为在延展交互中为学习搭脚手架的 AI 导学系统、编排复杂[[learning-design|教学设计]]的多智能体系统，以及根据学习者需要调整其[[pedagogy|教学法]]策略的自主智能体。这一新兴的范式把 AI 从一个响应提示的工具，转变为一个主动引导、适应并共同调节学习过程的协作者。

## 智能体式 AI 的定义与分类

[[kostopoulos-agentic-ai-education-2025|Kostopoulos 等（2025）]]提供了这个领域本已匮乏的一个操作化定义。他们提出一个**六判据清单**——一个系统若至少满足其中四项，即算作智能体式的：自主性（行动不依赖持续的人为干预）、推理/规划、记忆/语境感知、朝向[[learning-gains|学习结果]]的目标导向行动、适应性，以及动态协作/主动性。≥4 的门槛刻意**排除了反应式聊天机器人**（一个没有规划或持久性的静态 FAQ 机器人不够格），同时容纳多样的架构。他们还沿三条轴组织这一空间：**教学法角色**（导学系统、学习教练/导师、同伴、教师助手、[[curriculum-design|课程]]规划者）、**自主性层级**（反应式 → 适应式 → 主动式 → 协作式），以及**具身性**（文本型、化身/图形型、[[embodied-learning|具身]]/机器人型）。这一分类法——尤其是自主性光谱与清单对反应式工具的排除——给研究者与设计者一套共享的词汇，用于给智能体系统分类，并区分真正智能体式的与仅只是对话式的 AI。

一个具体的判别器让这条线变得可感。一个只能回答固定问题集的静态 FAQ 聊天机器人满足**零**项判据（无规划、无持久性、无主动性），显然不是智能体式的。一个记住当前会话却除非被提示否则绝不行动、不持有跨会话[[student-modeling|学习者模型]]、且无法设定子目标的[[conversational-ai|对话式]]导学系统，可能只满足一到两项（记忆、某种推理）——是对话式的，而非智能体式的。相比之下，一个规划多轮课程、把学习者进度存进一个持久画像、在学习者卡住时**主动**触发提示、并基于该画像重新规划下一步的导学系统，满足规划、记忆、自主与目标导向交互——至少四项判据，因此算作智能体式的。跑这一检验的价值不在于学究气：把每个 LLM 聊天界面都标为"智能体式的"，会模糊掉那个真正的设计问题——系统发起什么、学习者必须发起什么——它决定该系统是给学习搭脚手架还是取代学习。

**有边界的自主性作为一种教育设计立场。** [[ilieva-agentic-genai-higher-education-2026|Ilieva 等（2026）]]的 AGAI-HE 框架接受了诸如六判据清单这类定义所描述的能力清单，随后刻意地约束它：目标、角色、数据源、工具、检查点、停止条件与最终决定由教育者定义或批准，且每一项智能体功能都必须溯源到一项学习要求、评估目的或治理控制。该框架也在智能体编排与进阶的[[prompt-engineering|提示]]之间划了一条线——一个智能体式工作流保留任务状态、分配功能、检查完成条件、在证据不足时回到较早的阶段，并记录实质性的决定。值得注意的是，其对 130 名高等教育学生的探索性感知研究发现，智能体支持与聊天机器人支持的学习之间没有显著差异，作者把这读作智能体*能力*本身并不产生被感知的教学法优势的证据（[[human-in-the-loop-ai|人的监督]]）。

## 这一领域：快速扩张与当前的形态

本知识库的[[agentic-ai-education-scoping-review|范围综述]]——迄今为止对该领域最全面的综合，绘制了 **474 项研究（2020–2026）**——记录了一个自 **2025 年以来爆炸式增长**的领域，但其文献仍由集中在[[higher-ed]]、[[stem-education|STEM 学科]]与文本型导学情境的会议论文主导。该综述分析了出版特征、研究设计、智能体角色、AI 模型与架构、智能体能力的六个维度，以及教育理论整合的程度，为该领域的前沿与缺口提供了一张路线图。值得注意的是，只有 **29% 的受审研究**（474 项中的 138 项）明确地把系统锚定在教育理论之上，暴露出技术取向与教学法取向工作之间的学科分裂。

## 该领域的一张基于角色的地图

在[[agentic-ai-education-scoping-review|474 项研究的范围综述]]与[[kostopoulos-agentic-ai-education-2025|Kostopoulos 等的概念综述]]绘制研究广度与能力之处，[[baradziej-agentic-ai-higher-education-2026|Baradziej（2026）]]按智能体式 AI **所扮演的角色**来组织它——一个用于决定在哪里部署并治理这些系统的[[governance|机构性]]框定。在 48 项高等教育研究中，六个角色按证据分量依次出现：个性化学习与自适应导学（18/48）、[[automated-assessment]]与反馈（12）、教学辅助与增强（11）、行政与学生支持（8）、课程设计与劳动力对齐（5）、研究支持与学术运营（4）。角色透镜把一个在每次部署中反复出现的设计选择推到前景：人保留多少逐刻的掌控（一种"Copilot"关系），对智能体拥有多少（一种"Autopilot"关系）——即那条决定一个智能体是给学习搭脚手架还是取代它的自主性轴。

## 智能体系统的设计与评价

本知识库中的[[research-methods-aied|研究]]横跨设计与评价：

- **锚定在理论中的混合智能体胜过纯[[prompt-engineering|提示工程]]：** [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]，一个含 **25,795 个教学设计情境**的基准测试，发现表现最佳的方法把经典 ISD 框架（ADDIE、Dick & Carey、快速原型）与现代化的 ReAct 式推理整合——混合（理论 + 技术）> 纯理论 > 仅技术。把[[llm]]智能体锚定在成熟的教育设计理论之中，提供了原始提示无法复制的结构性优势。
- **面向智能体工具的评估框架：** [[tool-invariant-framework-agentic-ai|工具无关框架]]提议以一种不依赖任何特定 AI 工具的方式[[teacher-role|教学]]与评估计算方法，强调[[computational-thinking]]基础、经由口头答辩的[[authentic-assessment]]，以及验证——这与[[cognitive-offloading|过度依赖]]的关切相关。
- **一个报告与治理的定标器：自主性—监督—证据（AOE）框架。** [[beyond-agent-label-agentic-ai-governance-2026|Dey（2026）]]论证，*智能体式 AI*这一术语被应用得如此不一致，以至于证据与监督无法跨研究比较——那些会规划、记忆、使用工具或协调多个智能体的系统，与静态的 GenAI 界面和传统的[[pedagogical-agent|教学法智能体]]被归为一类。他对十五篇同行评审综述的批判性整合综述发现，证据在工件层级的产出（反馈准确率、幻觉减少）上最强，在持久学习、公平、工作量或机构产出上最弱，而真实的部署通常短、单一站点，且与监督关联薄弱。补救办法是一个具体的报告三元组——**自主性层级 A0–A4**（反应式生成 → 有界编排 → 被委派的任务自主性 → 工作流自主性 → 对评分/招生/进展的*后果性自主性*）、**监督层级 O0–O4**（未指明 → 回溯性审计 → 使用前批准 → 检查点式控制 → *持续的、有界监督*）与**证据成熟度阶段 M0–M5**（概念 → 原型/基准 → 参与者评价 → 真实部署 → 扩展/多站点 → *被复现的/机构规模*）——加上一条**比例规则**：可容许的自主性不应跑在证据成熟度或监督强度之前（例如，一个 A4 后果性系统要求 M4–M5 的证据、法律验证，以及 O4 加人的最终权威）。报告 *A2–O3–M3* 把含糊的"智能体式部署"主张变成可比较、可检验的规格，并给机构一套分阶段采纳、日志与回滚的语法——它是上文[[baradziej-agentic-ai-higher-education-2026|Copilot 到 Autopilot]]光谱在证据上的补充。
- **对抗性稳健性测试：** [[adversarial-stress-testing-role-playing-agents|多智能体压力测试]]协调 Interrogator、Target 与 Judge 智能体以揭示单一策略测试所不可见的失效模式，把稳健性分数降低 0.17–0.20 分——这对人格一致性与面向学习者的[[pedagogical-safety|安全部署]]是关键的。
- **领域应用：** 智能体式系统出现在各个领域，包括[[learnmate2-llm-adaptive-learning|自适应学习智能体]]、[[educlaw-bench-pedagogical-llm-agents-2026|教学法 LLM 智能体]]、[[guided-llm-scaffolding-independent-learning|引导式 LLM 脚手架]]、[[cyberagents-gamified-cybersecurity-learning-2026|游戏化网络安全学习智能体]]与[[hdr-brachytherapy-agentic-ai-simulation-2026|临床模拟智能体]]。
- **作为学习体验评价者的 Web 智能体：** 一个像学生一样浏览在线[[learning-design|课程]]的单一自主"描述型" Web 智能体——[[ai-web-agents-lesson-design-2025|Wang、Mitchell 与 Piech（2025）]]——产出一份足够丰富的描述，既能预测学生流失，又能在真实学习者投入之前给设计者可据以行动的反馈，在一个全局 CS1 课程上胜过一整个模拟学生队列与所有基线。这把智能体式评价（一个作为学习体验替身批评者的智能体）定位为智能体式 AI 的一种独特的、低成本的用途，与那些教书或设计的智能体并列。

### 多智能体系统

智能体式 AI 中一条不断成长且独特的分支涉及把多个具有不同角色的专门智能体编排起来的**多智能体系统**。本知识库记录了几种架构：[[code-gen]]把一个生成器智能体与一个验证器智能体配对，用于人在回路的[[automated-question-generation|题目生成]]；[[adversarial-stress-testing-role-playing-agents|对抗性测试]]协调 Interrogator/Target/Judge 智能体；多智能体课堂（例如[[human-in-the-loop-ai|MAIC]]，含教师、助教与同学原型）创造多样的同伴学习动态；而[[multi-agent-llm-social-learning|多智能体社会学习]]探索相互作用的智能体如何塑造学习。多智能体设计提出了关于[[human-in-the-loop-ai|人的监督]]（哪个智能体可问责，人在哪里介入？）、协调成本，以及角色分化如何支持或复杂化[[scaffolding]]的独特问题。

两个 2026 年的系统把角色专门化买到什么——以及它在何处不再划算——说得更锋利。MeduAI-SP（[[ai-standardized-patient-scaffolding-medical-2026|Yang 等，2026）]]把临床访谈教学分摊给四个 LLM 智能体——一个病人智能体、一个苏格拉底式导学智能体、一个轮次级评价者与一个最终评价者——各自承载一项不同的教学功能。这一架构出于设计扣留答案：导学系统被禁止透露诊断或病例答案，而最终评价者的 OSCE 分数在实时问诊中保持隐藏。这项试验把改善后的问诊行为（期末考试 71.8% 对 55.6%）归功于角色专门化，而非原始模型能力，为对齐教学法的多智能体设计提供了一个具体模板。第二项研究指出了那一模式的极限：在一个 45 名学生、15 个小组的伦理讨论系统中（[[ethics-training-agents-group-ethics-discussion-2026|Seo 等，2026）]]），三个分别体现关怀、义务论与实用主义伦理的 LLM 人格彼此之间没有产生显著差异，且全都在贡献、多样性与影响力上被评为低于人类同伴（全部 Kruskal-Wallis p < .001）。作者把这一差距归因于[[ai-sycophancy|谄媚式的]]一致——智能体几乎接受每一项贡献，除非它完全错误——以及可见推理的缺失，论证以任务为中心的智能体设计必须把过程透明与保障措施（易错的同伴框定、一个专门的提问阶段）配对，以避免[[cognitive-offloading|过度依赖]]。

比编排少数几个专门智能体再进一步，是[[sudarshan-agentic-ai-ecosystems-higher-education-2026|Sudarshan 等（2026）]]提出的**完整智能体式多智能体生态**：一个全校范围的平台，通过跨功能的[[feedback|反馈回路]]与分布式智能来协调学习、教学与行政智能体。它独特的动作是把[[inclusive-learning|包容性]]当作一流架构关切来对待——协调[[accessibility]]、认知支持与[[well-being]]智能体，使有[[special-education|特殊教育需要]]的学习者在认知、感官与情感维度上得到实时支持，而非由一个孤立的辅助工具来服务。该文把这置于一个**人—AI 共同演化**回路（人的行为与决定塑造 AI 的适应，后者又反过来增强人的能力）之内，从而把人留在回路中。

- **面向协作问题解决的参与者特定 LLM 智能体。** Fang（2026）在真实参与者的对话数据上微调个体 LLM 智能体，以在协作问题解决模拟中代表每一位参与者，采用概率性的说话者与主题码选择，以及滑动窗口加摘要的记忆。以[[network-analysis|认知网络分析]]验证，模拟的对话与真实对话在统计上不可区分（ENA 距离 0.17，置换 p = 0.65）——这是智能体式 AI 复现真实协作话语的一次演示。
- **社会智能的多智能体导学。** 诸如 ASTRA 的社会智能多智能体导学原型，研究学习者如何在二人组中与 AI 协调，用有区分的 Tutor 与 Facilitator 智能体来提示协调与均衡的参与。该框架基于轨迹的评价，使对交互、参与均衡性与验证的可复现分析在入门编程中成为可能。

## 核心张力：自动化 vs. 学习

[[agentic-ai-pedagogical-best-practice-2026|教学法最佳实践]]工作阐述了该领域的决定性张力：当教育 AI 从被动的[[conversational-ai|聊天机器人]]转向发起并追求目标的**主动智能体**时，个性化改善了，但**学习者[[agency]]与认知努力**处于风险之中。一个智能体自动化得越多，学习者做的[[cognitive-offloading|认知工作]]就越少。设计上的回应——**有意的摩擦、动态[[scaffolding]]、[[human-in-the-loop-ai]]监督与经过考量的 AI 利用**——充当一条有原则的护栏。这连接到[[desirable-difficulties]]、[[sociocultural-learning]]以及[[cognitive-offloading|过度依赖]]的风险，并连接到在 AI 中介的学习中保全[[agency]]这一更宽的主题。

一项经验性检查来自[[spec-driven-development-ai-agents-sdpbl-2026|一份关于软件 PBL 课程中规格驱动开发的实践报告（Tanaka 等 2026）]]：在开发各阶段使用 AI 智能体的学生生成了更多代码，却显示出理解力下滑，且只在教师一对一访谈之后才恢复——这是自动化—学习张力的具体田野证据，也证明了把[[human-in-the-loop-ai]]监督作为缓解手段。

综述文献把这些原则转成**可测量的设计[[guardrails]]**，而非含糊的意图。在脚手架方面，[[kostopoulos-agentic-ai-education-2025|Kostopoulos 等（2025）]]建议**渐退协议**——在每次成功尝试后逐步降低提示频率——并把**[[help-seeking]]比率（AI 发起的提示 ÷ 学生行动总数）定在 0.3 以下**，使智能体不是那个驱动多数交互的东西。他们配以**反思性检查点**（例如，在学习者解释其推理之后、智能体给出下一条线索之前提问）与干预可能性随熟练度上升而下降的自适应渐退曲线。在[[explainable-ai|透明]]方面，智能体应当暴露"为何这条建议？"的理由说明，并保持**带时间戳的决策可追溯日志**（智能体理由、数据源、决定）可供教学审计。在[[bias-mitigation|公平]]方面，他们建议部署前对**至少三个人口学群体做差异化影响测试**（例如性别、语言、地域），并让多样的教师参与设计。这些指标给教师或设计者一个审计杠杆：与其问"这个智能体是不是太有用了？"，不如测量提示是否在渐退、学习者是否在发起、智能体的推理是否可检视。

关于自主性问题的一套互补词汇，来自[[baradziej-agentic-ai-higher-education-2026|Baradziej（2026）]]综合中浮现的航空类比：一项部署落在**Copilot 到 Autopilot 的光谱**上有多远——从一个协助保留逐刻掌控的人的智能体，到一个拥有整个任务、人只在监督的智能体。同一个底层系统可以被配置向任一端，而这个选择在教学法上是先于技术的。Copilot 式配置（智能体提议、学习者处置、人保留最终话语权）倾向于保全[[agency]]并支持那些建立学习的费力过程；Autopilot 式配置最大化任务完成与效率，却把认知负荷从学习者身上移开。在这条光谱上选择一个位置——按任务而非全局一次定——是把该领域"有意摩擦"原则操作化的一个具体办法。

## AI 智能体对教育的正面含义

设计得当时，智能体式 AI 带来可观的好处：

- **更深、更具适应性的个性化。** 持久的智能体可以在许多轮中维持一场学习对话，追踪学习者知道什么、调整难度、并排序多步[[scaffolding]]——超出早期聊天机器人的一次性回应。这在规模上支持[[adaptive-learning|自适应]]与[[personalized-learning|个性化]]学习。在[[baradziej-agentic-ai-higher-education-2026|Baradziej（2026）]]的综合中，这一角色最强的证据报告了 **15–25%** 的学业增益与高达 **+40%** 的投入提升，对那些历史上被一刀切教学服务不足的学习者（第一代大学生、学习差异者、第二语言学习者）尤其有潜力。
- **卸下例行的教学负担。** 智能体能规划课程、生成并验证题目、起草反馈，并编排专门的子智能体（例如用于出题的生成器 + 验证器），把教师解放出来做更高价值的交互。这是[[ai-tpack-teacher-multi-agent-workflow|面向教师的多智能体工作流]]的承诺。评估智能体尤其报告了 **90–95% 与人类评分者的一致度与 50–70% 的评分时间缩减**，尽管同样的证据也标出了[[bias-mitigation|偏见]]以及即时、不反思反馈的[[metacognition|元认知]]代价。
- **丰富、多样的交互。** 多智能体课堂与模拟同伴创造单一智能体系统无法提供的多样交互动态（类同伴的话语、建设性的分歧、角色扮演），支持[[collaborative-learning]]、[[socratic-method|苏格拉底式探问]]与[[simulation]]。
- **生产性摩擦。** 被设计来挑战而非附和的智能体，可以把学习者推向更深的重思。[[ai-agents-constructive-conflict-design-education-2026|对抗性设计智能体研究]]表明，建设性冲突的智能体显著提示了更多设计迭代、更广的探索与更高评价的最终设计（N=48）——一种[[desirable-difficulties|可取的困难]]。
- **可扩展的练习与模拟。** 基于智能体的模拟（模拟学生、[[medical-education|临床]]情境）让学习者在真实应用之前于低风险环境中练习，如[[hdr-brachytherapy-agentic-ai-simulation-2026|临床模拟]]与[[simulating-students|模拟学习者]]。
- **有据的脚手架。** 根基扎实的智能体能在其交互中应用[[learning-theories|学习理论]]与已知的教学法，且[[benchmark|基准测试]]表明理论锚定的智能体胜过原始提示。

一类更窄的、由教师构建的智能体在[[ai-agents-joyful-assessment-third-space-2026|El Khoury 与 Ma 的第三空间提议]]中得到一套独特的论证：由教师为特定教学目的设计的定制 GPT、Gems 与 Copilot Studio 智能体，明确地**不是**自主系统。他们所主张的价值在于充当低风险的排练空间——一个口试模拟器、一个临床沟通模拟、一个 ESL 发音化身——学生在被评判之前练习，而教师的评价角色保持完整，智能体位于学生与同伴及教师打交道的社会层级之外。有两点边界值得注意：作者按设计把基于智能体的*评分*排除在范围之外，并论证评估必须保持关系性的——教师角色不能被机器取代，尽管通过精心的设计它可以被扩展并变得更可持续。

## AI 智能体对教育的负面含义与风险

使这些好处成为可能的同一自主性，也制造了重大风险：

- **学习者自主性与认知努力的侵蚀。** 一个智能体自动化得越多，学习者做的认知工作就越少。会发起、规划并完成任务的前摄智能体，可能把学习者留在被动消费者的位置，掏空那些建立持久学习的费力过程——起草、回忆、修订。这是核心的[[cognitive-offloading|过度依赖]]与[[agency]]关切。这一效应是可测量的：在[[baradziej-agentic-ai-higher-education-2026|Baradziej（2026）]]的综合中，智能体导学环境中的被动学习者比[[active-learning|主动学习]]学生表现差 **8.7%**——证据表明，危害跟随的是部署设计（让智能体做认知工作），多于技术本身。
- **学习过程的过度自动化。** 如果一个智能体为任务完成而非学习而优化，它可能产出绕过理解的"答案"——正是[[tool-invariant-framework-agentic-ai|工具无关框架]]所警告的风险，那里工件不再为学习者作证。
- **元认知与自我调节的[[student-engagement|投入]]减少。** 当智能体处理规划与监控，学习者可能无法发展教育旨在建立的[[metacognition]]与[[self-regulated-learning|自我调节]]。智能体必须被设计来引出这些过程，而非取代它们。
- **错置的信任与验证缺口。** 自主智能体能产出看似合理却未经验证的输出；学习者与教师可能[[trust-calibration|过度信任]]它。随着智能体承担更多自主性，对稳健验证与[[ai-literacy]]的需要随之增长。
- **不透明、协调与问责。** 多智能体系统使[[human-in-the-loop-ai|人的监督]]复杂化：哪个智能体对一个错误负责，人在哪里介入？协调失败、人格漂移与涌现行为可能损害可靠性与[[pedagogical-safety]]。
- **偏见与公平。** 在编码了偏见的数据上训练的智能体能规模化地复现它，而获得有能力智能体系统的不平等机会可能扩大[[equity-in-ai-education|教育不平等]]。偏见在多个层级上运作——训练数据、架构、评价判据与测试人群——因此它需要机构性的缓解（偏见审计、多样数据集、透明文档、利益相关方参与），而非一次性的检查。一种更微妙的、文化上特有的形式是**认识论霸权**：由于多数智能体系统在英语、西方产出的数据上训练，它们嵌入了关于知识、论证与学术语域的特定假设。[[baradziej-agentic-ai-higher-education-2026|综合证据]]记录了语言教育工具边缘化非西方修辞传统、并惩罚非英语学术文化的语言特征，而[[global-south]]分析表明，当智能体式教学法无视认识论多样性与基础设施约束时，它会复现不平等。
- **评估诚信与技能衰退。** 当智能体能按需生成作业，评估真实学习变得更难，而过度依赖可能侵蚀基础技能——该领域标出的"理解债"与认证问题。
- **幽灵学生与验证缺口。** [[bozkurt-ghost-students-agentic-ai-2026|Bozkurt、Crompton 与 Fell Kurban（2026）]]描述了**"幽灵学生"**——由 LLM（"心智"）与智能体式 AI 浏览器（"身体"）耦合而成的数字替身，它能浏览学习管理系统、与内容互动、并以类人的模仿完成评估，使真实学习者的在场成为可选项。这造成了一个**验证缺口**，传统[[ai-detection|监考与检测]]工具在结构上无法闭合，且它在被绕过的学习者身上累积**认知债**。随着 AI 从生成式转向智能体式，这一诚信与[[academic-integrity|验证]]威胁在增长——这是单轮[[generative-ai|GenAI]]之外的一项智能体式特有的风险。

## AI 智能体与学术诚信

智能体式 AI 提出独特的诚信威胁，超出该领域已在艰难应对的单轮 GenAI 案例。由于智能体在长时段上自主行动——也由于"幽灵学生"（LLM 的"心智"与智能体式浏览器的"身体"相耦合）能浏览[[online-teaching-and-learning|学习管理系统]]、与内容互动、并以类人的模仿完成评估——它们使学习者的真实在场成为可选项，并造成一个[[ai-detection|监考与检测]]无法闭合的**验证缺口**。若干诚信含义随之而来：

- **工件不再为学习者作证。** 当一个智能体能生成、规划并执行一整套提交，产出的质量反映的是智能体的能力，而非学习者的。这是[[tool-invariant-framework-agentic-ai|工具无关]]认证问题在其极端形态——传统的"提交作业"式评估失去了其证据价值。
- **验证，而非检测，是唯一可行的回应。** 以检测为基础的盯防在结构上无法跟上自主智能体。诚信问题从"我们能抓住 AI 智能体吗？"转向"我们能验证学习者实际能做什么吗？"——偏向[[process-oriented-assessment|基于过程的]]、交互式的与[[human-in-the-loop-ai]]验证。
- **被评估课程的智能体式完成已被证实，而它是一种效度失败，不只是诚信失败。** [[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou 与 El-Haddad（2026）]]记录了智能体（Claude for Chrome、Perplexity Comet、Claude Opus）登录一门真实的本科 LMS 课程，并仅凭一条指令完成真实的受评作业——一道 10 题小测在 5 分钟内得 10/10，以及一篇讨论帖，其中智能体在挖掘同伴的帖子后编造了一个可信的个人生活故事。应用 Kane 的论证式效度框架，他们把一个"人生产假设"置于评分推断的基础：智能体式完成移除了它的支撑，因此每一个未被监考的异步分数——包括诚实挣得的那些——都失去了解释支持，因为作者身份无法验证。把问题框定为效度而非诚信之所以要紧，是因为一所机构可以惩罚不当行为，却仍然缺乏它所报告分数的依据，也因为同样的工件会进入项目审查与认证的证据链。他们的补救办法，与本页的"验证优于检测"一致，是为已验证的人在场的评估重设计（在场优于产物、整合优于孤立、真实性优于泛化、低风险练习/高风险在场），配上一份保全公平的已验证时刻选项菜单。
- **问责被弥散了。** 在多智能体系统中，当一个自主智能体产出有问题的输出时，谁可问责并不清楚——学习者、系统，还是机构。这模糊了学术诚信过程所假定的归属。
- **认知债静默地累积。** 幽灵学生让学习者绕过那些建立理解的费力过程，累积[[cognitive-offloading|认知债]]，它只在要求独立表现时才浮现。因此诚信与真实学习相连，而不只是与规则遵从相连。
- **它扩大了公平差距。** 能获得更有能力智能体系统的学习者获得不成比例的优势，而自动化支持可能侵蚀对那些最需要者的帮助——这是诚信的一个[[equity-in-ai-education]]维度。

这就把智能体式 AI 的讨论连接到本知识库的[[academic-integrity]]覆盖，后者把回应框定为评估重设计与[[ai-literacy]]，而非仅靠检测。

## 生产性摩擦与社会交互

并非所有智能体行为都必须是平滑的协助。[[ai-agents-constructive-conflict-design-education-2026|对抗性设计智能体研究]]表明，施行**建设性冲突**的智能体，在新手交互设计者中显著提示了更多设计迭代、更广的替代方案探索与更高评价的最终设计（N=48）——一种*生产性摩擦*动态，其中冲突智能体令人沮丧却终究有帮助。这连接到[[socratic-method|苏格拉底式提问]]与[[design-thinking]]，并例示了智能体式 AI 如何支持深层的重思，而非被动的接受。

一项关于智能体式 AI 如何经由*心理性*而非技术性的通路达成学习结果的研究，提供了缺失的测量角度。[[pramod-agentic-ai-motivational-pathways-2026|Pramod 与 Patil（2026）]]调查了印度的 398 名商科学生，把自主性、胜任性与关系性连同交互性、信息分享与感知的[[community-of-inquiry|社会临场]]一起建模；自主性是最强的动机驱动因子（β = 0.504），交互性是最强的社会驱动因子（0.468），而动机与社会临场以几乎同等的强度喂给[[student-engagement|投入]]（0.533 与 0.493），随后投入预测了感知的学习表现（0.671）。设计上的教训是：社会通路并非自动的——一个协作环境构念对感知社会临场的推动，不如单纯的回应性与信息分享，因此把一个智能体当作聊天界面而非参与者，就留下了那条通路的大部分未被使用。

## 对教师与教学设计者的启示

对教师、教职员与[[learning-design|教学设计者]]而言，智能体式 AI 既改变了可能之物，也改变了必须守护之物：

- **把努力重新分配到更高价值的工作。** 智能体能接管课程规划、题目生成与验证、反馈分诊与资源检索。教师应当把这些当作可自动化的脚手架，把时间释放给智能体不能做的事：关系性的教学、语境性的判断，以及学习体验的设计。面向教师的[[ai-tpack-teacher-multi-agent-workflow|多智能体工作流]]是一个有前景的模式。
- **把学习者的认知工作保持在前景中心。** 核心的设计问题不是"智能体能做什么？"而是"*学习者*必须做什么？"教学设计者应当配置智能体系统，使它们给学习者的规划、监控与努力搭脚手架，而非取代——用动态[[scaffolding]]与[[desirable-difficulties|有意的摩擦]]来保护[[agency]]并避免[[cognitive-offloading|过度依赖]]。
- **为验证与过程而设计，不只是为产出。** 当智能体能按需生成作业，工件就不再为学习作证。教师应当把智能体工具与[[process-oriented-assessment|基于过程的评估]]（口头答辩、[[tool-invariant-framework-agentic-ai|工具无关]]任务、验证检查）配对，使被测量的是理解——而不只是产出。
- **策划智能体，并把它们锚定在教学法之中。** 基准证据表明，理论锚定的智能体胜过原始提示。设计者应当把智能体行为锚定在成熟的教学框架中（例如逐步释放、苏格拉底式提问、[[learning-theories|学习理论]]），而非默认地做通用的工具串联。
- **保留人的监督与判断。** 多智能体与自主系统使[[human-in-the-loop-ai]]设计成为必需：决定人在哪里介入、谁可问责、失败如何被捕获。对抗性测试有助于在部署之前暴露失效模式。
- **建立教师的[[ai-literacy]]。** 教师与设计者需要对智能体式 AI 有准确的心智模型，才能配置、监控并批评这些系统——并为学习者示范负责任的使用。这连接到[[teacher-ai-competency]]与[[educational-development|教师发展]]。
- **留意公平。** 如果机会不均等、或自动化侵蚀了对最需要者的支持，智能体工具有扩大差距之险；带着[[equity-in-ai-education]]的意识来设计。
- **在扩展之前立起机构的脚手架。** 部署问题不只是设计层面的，也是机构层面的。[[baradziej-agentic-ai-higher-education-2026|Baradziej（2026）]]的综合把治理证据浓缩为三根支柱：在学生*与*教职员中发展[[ai-literacy]]；在大规模部署*之前*建立[[ethics|伦理]]基础设施（数据保护政策、算法问责与学术诚信框架）；交付基于能力的[[educational-development|教育者培训]]，它超出工具熟悉、走向保全人的能动性的教学框架。鉴于在某些国家语境中只有约 6.5% 的教师报告直接使用 AI，培训缺口是负责任采纳的一个约束性条件。

### 在智能体式 AI 中确保学术诚信的技术

由于自主智能体使检测归于徒劳，教师应当聚焦于**验证学习**与**使诚实的作业可见**的技术，而非盯防：

- **偏好验证而非检测。** 用要求学习者展示他们无法外包的理解的交互，取代或补充"提交作业"：口头答辩、[[tool-invariant-framework-agentic-ai|工具无关]]任务、实时[[problem-solving]]与[[process-oriented-assessment|基于过程的评估]]。目标是确立学习者能独立做什么，而非抓住一个智能体。
- **使用交互式与分阶段的评估。** 要求分阶段提交（草稿、修订、反思）与后续的[[conversational-ai|对话式]]检查，探究学生是否理解自己提交的作业——即"AI 口试"与认知管家路径。幽灵学生无法维持一场它未曾实施的实时诘问。
- **设定清晰的、以目的为驱动的期望。** 把诚信期望锚定在课程的目的上——允许什么 AI 使用、何时、为何——而非抽象的规则。与教学法对齐的[[educational-policy-ai|政策]]清晰性，减少了学生所利用的模糊性与诚信研究中记录的误判。
- **使 AI 使用可见且被申报。** 结构化的、针对具体任务的 AI 使用申报（把使用映射到认知阶段）迫使反思，并使诚实的披露常态化，把文化从隐蔽转向透明。
- **把 AI 素养当作诚信教育来建立。** 教学生如何负责任地使用智能体并批判地判断输出，把诚信框定为真实的学习，而非规则遵从。这包括[[ai-literacy]]、理解智能体能做什么与不能做什么，以及绕过努力的[[cognitive-offloading|学习代价]]。
- **把人留在回路中。** 保持对评估决定的[[human-in-the-loop-ai|人的监督]]，交互式地验证高风险的提交，并设计智能体工具使教师总能介入。
- **用交互闭合验证缺口。** 在完全在线或异步的情境中，使用监考或交互式的、要求实时在场的组件，直接应对[[bozkurt-ghost-students-agentic-ai-2026|幽灵学生]]威胁，而非假定检测会抓住它。

## 一个平衡的结论

智能体式 AI 既不是万灵药，也不是不可避免的伤害：其价值取决于设计。用于给学习者自主性搭脚手架、锚定在教学法之中、并把人留在回路里，智能体可以个性化并深化学习；用于最大化自动化与任务完成，它们可能侵蚀恰恰产生学习的努力。反复出现的设计原则是**有意性**——明确地决定智能体做什么，以及它刻意把什么留给学习者。

## 关联概念

- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[metacognition]]
- [[adaptive-learning]]
- [[educational-development]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[sociocultural-learning]]
- [[simulation]]
- [[pedagogical-safety]]
- [[ai-education]]
- [[equity-in-ai-education]]
- [[authentic-assessment]]
- [[teacher-role]]
- [[learning-design]]
- [[teacher-ai-competency]]
- [[academic-integrity]]
- [[online-teaching-and-learning]]
- [[educational-policy-ai]]

## 关联文章

- [[pramod-agentic-ai-motivational-pathways-2026]] — 自主性、胜任性、关系性与社会临场作为从智能体式 AI 到投入的通路（Pramod 与 Patil 2026）
- [[ai-agents-joyful-assessment-third-space-2026]] — AI agents, joyful assessment, and third space
- [[ilieva-agentic-genai-higher-education-2026]] — The AGAI-HE framework: bounded, human-supervised agentic GAI in higher education (Ilieva et al. 2026)
- [[beyond-agent-label-agentic-ai-governance-2026]] — 引入 AOE 证据/监督框架的批判性整合综述
- [[sudarshan-agentic-ai-ecosystems-higher-education-2026]] — Perspective on inclusive agentic multi-agent AI ecosystems in higher education
- [[baradziej-agentic-ai-higher-education-2026]] — Systematic review of the roles of agentic AI in higher education (48 studies; six roles; tripartite responsible-integration framework)
- [[kostopoulos-agentic-ai-education-2025]] — Agentic AI in education: state of the art and future directions (IEEE Access survey; operational definition + taxonomy)
- [[agentic-ai-education-scoping-review]] — 智能体式 AI 在教育中的范围综述（474 项研究）
- [[agentic-ai-pedagogical-best-practice-2026]] — 自动化与学习之间的张力
- [[tool-invariant-framework-agentic-ai]] — Teaching and assessing computational methods in the age of agentic AI
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: benchmarking instructional-design agents
- [[adversarial-stress-testing-role-playing-agents]] — Adversarial stress testing of role-playing agents
- [[ai-agents-constructive-conflict-design-education-2026]] — Constructive conflict AI agents in design education
- [[ai-tpack-teacher-multi-agent-workflow]] — Teacher TPACK and multi-agent workflows
- [[code-gen]] — Code generation agents
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Pedagogical LLM agent benchmark
- [[guided-llm-scaffolding-independent-learning]] — Guided LLM scaffolding for independent learning
- [[learnmate2-llm-adaptive-learning]] — LearnMate-2 adaptive learning agents
- [[cyberagents-gamified-cybersecurity-learning-2026]] — Gamified cybersecurity learning agents
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — Agentic AI in clinical simulation
- [[bozkurt-ghost-students-agentic-ai-2026]] — Ghost students and the agentic-AI verification gap (Bozkurt et al. 2026)
- [[ai-agents-complete-lms-assessment-validity-2026]] — AI agents completing LMS tasks; validity failure via the human-production assumption (Hadjisolomou & El-Haddad 2026)
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: a describing agent as a learning-experience evaluator (predicts dropout, gives design feedback before students engage)
- [[spec-driven-development-ai-agents-sdpbl-2026]] — SDD with AI agents in software PBL; automation vs. comprehension
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration
