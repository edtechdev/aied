---
title: 协作学习
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/collaborative-learning
source_updated: "2026-10-07T15:40:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **协作学习（Collaborative Learning）** — 学生协同解决问题、完成任务或建构知识的教学取向，由 AI 工具支持或中介。在[[ai-education|教育中的人工智能]]里，协作学习[[research-methods-aied|研究]]横跨 AI 作为协作伙伴、AI 作为人类协作的中介，以及协作式 AI 导学系统的设计。

## 值得思考的问题

- 回想一次你在小组中深入学到某件事的经历。是什么使它奏效？现在想象一个 AI [[conversational-ai|聊天机器人]]加入那个小组 —— 它会如何强化，或悄无声息地削弱你所体验到的？
- 研究发现一种权衡：把推理委派给 AI 产生最好的任务表现，却最缺乏自我调节性参与；而建构自我[[self-regulated-learning|调节]]的那种模式在任务上表现较差。如果必须选择，你会保护哪个 —— 结果，还是奋斗？
- ICAP 框架把“互动式”协作列为参与的最深形式。一个替小组作答的 AI，会不会实际上把协作从互动式降格为仅仅是被动 —— 即使学生感到更满意？
- 一项研究发现，AI 中介只在保持中立时才被信任；当 AI 转向建议或质疑时，这种信任便受到侵蚀。一个小组的 AI 中介究竟应该有多中立？
- 当学习者用 AI 产出一件精致的成果时，他们可能跳过建构理解所需的认知努力。你会如何设计一个把分歧与冲突浮现出来、而非将其抹平的 AI 伙伴？
- 神经多样性学生报告说需要结构化的作业、小而稳定的团队，以及明确的角色。如果 AI 协作工具是为“平均”学习者而造，谁可能被排除在外 —— 你又会如何不同地设计？

## 引言

协作学习奠基于[[sociocultural-learning|社会文化理论]]的学习观，后者把知识建构定位为根本上是社会性的。AI 引入了新的动态：AI 可以作为同伴、促进者或协作过程的参与者。本知识库的文章探讨 AI 中介的协作如何影响[[learning-gains|学习结果]]、认知参与与[[equity-in-ai-education|公平]] —— 以及协作结构必须如何设计以容纳多样的学习者。

**作为构念的协作对作为结构的小组作业。**协作学习是更宽的理论：知识通过共同活动与对话被共建。[[group-work|小组作业]]是其最具体的形式实现 —— 一个团队产出一份共享的成果，往往还有一份共享的成绩。两者密切相关但并不相同：一个小组可以在没有真正协作的情况下运转（任务被分割为独立部分、工作只是被拼合），而协作也可以在没有正式小组的情况下发生（两人组、全班对话，或人–[[student-ai-interaction|AI 交互]]）。AI 恰恰最用力地压在这个缝隙上 —— **[[chen-zou-genai-group-assessment-agency-2026|Chen 与 Zou（2026）]]**发现，有些小组的个人[[generative-ai|GenAI]]实践从未变成集体能力，因为任务从未要求共同工作；而在另一些小组中，共享的成绩使 GenAI 使用成为一个协调问题。[[group-work|小组作业]]页面深入考察这些动态；本页则把更宽的镜头留在协作学习整体上。

**AI 作为协作伙伴**探讨 AI 在小组学习中的角色。**[[polished-artifacts-fragile-engagement-2026|Kimmerle]]**概念化了学习者用 AI 产出精致知识成果时认知努力减少的风险，主张把 AI 结构化为一个保全认知冲突的论辩性伙伴。在课堂规模上检验这一点，**[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash 与 Connell Pensky（2025）]]**让社会科学导论学生（n = 154）撰写论辩性文章，接受来自[[llm|大语言模型]]如 ChatGPT、Gemini 或 Claude 的批评，然后加以采纳或反驳；盲编码者在 92.7% 的回应中发现反思，在 87.8% 中发现对 LLM 主张的主动反驳（评分者间 κs = 0.81–0.89），证据表明学习者表现得像[[critical-thinking|批判性]]消费者，保全而非放弃了批评的认知冲突。**[[epistemic-emotions-collaborative-problem-solving]]**考察情绪如何塑造与 AI 的协作[[problem-solving|问题解决]]。**[[hingle-collaborative-ai-literacy-2025]]**探索协作式[[ai-literacy|AI 素养]]发展的路径。

促进者的认可是学生是否接受一个唱反调的智能体的最强观测杠杆：在十二支跨专业团队中，那些教师促进者影响了其 AI 整合的团队，把 AI 评为更属于团队的一部分（M = 3.08 对 2.64）、其反馈更有帮助（M = 3.44 对 2.93）（[[genai-counter-learner-groupthink-2025|Wiss 等（2025）]]）。

**AI 中介的同伴协作**考察 AI 如何为人类对人类的协作[[scaffolding|搭脚手架]]。**[[golrang-propact-pair-programming-2026]]**与**[[agent-voice-accents-k12-group-learning]]**探索 AI 智能体特征如何影响小组动态。**[[ai-agents-peer-learning-discourse]]**记录[[agentic-ai|AI 智能体]]相互教学如何产生类似人类同伴学习的话语模式。覆盖全班的系统把这一点延伸到协作的*关系*维度：**[[breideband-community-builder-cobi-2026|CoBi]]**运用语音识别与语言理解来检测“鼓舞人心的”小组话语（相互尊重、公平、致力于共同体、推动思考前进），并返回非评价性的、班级层面的[[visualization|可视化]]，以支持共同体建设与协作技能，刻意不提供学生或小组层面的反馈，以保护[[privacy|隐私]]与[[trust|信任]]。

**神经多样性视角下的协作**揭示关键的设计要求。**[[neurodivergent-computing-students|Zastudil 等]]**发现，神经多样性学生需要结构化的作业、角色被明确定义的小而稳定的团队，以及可预测的交互模式 —— 这些是 AI 协作工具必须容纳的要求。这使协作学习连接到[[inclusive-learning|包容性学习]]与[[neurodiversity|神经多样性]]。

**教师–AI 协作**考察教师与 AI 如何协同工作。**[[teacher-student-agency-orchestration]]**与**[[teacher-ai-teaming-five-levels]]**探索人机协作教学的框架，连接到[[teacher-role|教师角色]]与[[human-in-the-loop-ai|人在回路中的 AI]]。

**AI 作为[[pedagogy|教学法]]中介**把 AI 在协作中的角色重新概念化，超越工具或同伴。借助社会文化理论与[[distributed-cognition|分布式认知]]，**[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]**把 AI 定位为交互编排、认知意义建构与调节过程中的一个主动参与者，在人类与非人类行动者之间重新分配能动性、权威与责任，而不排挤学习者或教师的能动性。这使协作学习奠基于一种社会中介的、共同调节的 AI 观，而非个体主义的 AI 观。

**协作模式与效率–调节权衡。**对大学生与 AI 协同进行复杂问题解决的实证研究识别出三种不同模式 —— *委派式推理*、*协同性阐释*与*委派式精加工*。最高效的模式（委派式推理）产生最高的任务表现，却带来最低的学习者自我调节性参与，而自我调节最强的模式（协同性阐释）在任务结果上表现较差。([[hao-human-ai-collaborative-problem-solving-cognition]]) 这揭示了一个核心设计张力：协作学习环境必须在分布式人机系统的效率与学习者[[self-regulated-learning|调节]]性参与的深度之间取得平衡。

关于 AI 支持的协作工作，唯一可得的元分析对比位于 GenAI 支持的问题式/项目式学习干预内部，其中同伴协作汇总为 g = 0.885，个人工作为 g = 0.416，但差异只达到边缘趋势（QM = 3.675，p = .055），且个人工作一侧只依赖两项研究 —— 因此“协作在 GenAI 下胜过独自工作”的汇总证据只是提示性的，而非已确立（[[chen-pbl-pjbl-genai-meta-analysis-2026|Chen 等，2026]]）。

一项对 18 项研究的范围综述在同一小组作业上绘制了同样的权衡：GenAI 既支持了知识发展、想法生成与沟通效率，也降低了对同伴交互、协商与集体意义建构的需求；随机证据发现了更具创新性的 AI 建议，而参与者的总体创新性却没有显著增益（[[wei-perkins-genai-student-collaboration-scoping-2026|Wei 与 Perkins（2026）]]）。

**角色设计是协作知识建构的*质量*（而非数量）的杠杆。****[[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng 等（2026）]]**在 16 个小组的 58 名[[higher-ed|研究生]]与其 AI 伙伴之间轮换担任主持人、分析者与辩者角色，发现该结构把小组思维导图的*内容*提升了近一个完整 SOLO 层级（M = 3.65 到 4.59，z = 3.771，p < 0.001），而节点与分支数量保持平坦 —— 是组织而非覆盖 —— 代价是协作[[cognitive-offloading|认知负荷]]的温和上升（p = 0.023）。[[network-analysis|滞后序列分析]]增加了一个评价自我转移和一条冲突–辩护路径，这是工具单独所不能产生的，把[[human-ai-collaboration|人机协作]]定位为一个设计问题，而非工具问题。

**GenAI 作为小组中的智能体与空间 —— 模式重要。****[[xu-genai-collaborative-space-2026|Xu 等（2026）]]**观察到，一个团队*如何*接触 GenAI 塑造了协作：在同步工作中使用单一共享界面时，团队共建“集体提示”，运行一个表层–评价–嵌入循环，并把聊天记录当作共享记忆；在异步工作中，私下提示与输出的“去标签化”使[[explainable-ai|透明度]]碎片化，并提高了维持一个共享认知模型的成本。他们的 GenAI 支持协同工作（GSCW）透镜把 GenAI 框定为一个可配置的智能体（从个人助手到团队成员）与一个交互式的协作空间 —— 把接触配置直接连接到与[[icap-framework|ICAP]]相关的互动参与质量。

**GenAI 作为小组协调的基础设施 —— 以及合作被抹平的风险。**[[chen-zou-genai-group-assessment-agency-2026|Chen 与 Zou（2026）]]**展示了十五个职前教师小组在一个计入成绩的小组汇报中如何处理 GenAI，其分化与“小组压力增加 AI 依赖”这一通常假设相反。五个小组为解决一个熟悉的协作问题而加剧了使用 —— 不知道同伴的部分写了什么 —— 把这项工作交给聊天机器人使其变得可理解，并对齐自己的部分，有一个小组把它的循环重构为*讨论 → 外化给 GenAI → 集体复核 → 再讨论*。作者把这读作不只是[[cognitive-offloading|认知外包]]，因为学生保留了判断、而工具吸收了协调，但警告更顺畅的工作流可能绕过分歧，而凝聚力传统上正是经由分歧建构的，这使关系性劳动成为一个开放问题。七个小组反而削减了 GenAI 使用，以保护在共享课堂中建构的[[situated-learning|情境化]]知识（“AI 只知道你打字那一刻”）、对同伴的[[bias-mitigation|公平]]、跨小组的原创性，以及小组已经持有的视角多样性。三个小组完全没变：任务被分割为独立部分时，个人层面精熟的 GenAI 实践从未变成集体能力，尽管连贯性是一项显性标准。这一模式提示，决定一个小组拿 AI 做什么的是小组规范，而非工具 —— 而集体采纳可能降低被感知的[[ai-misuse-learning-harm|误用风险]]，而非提高承诺。

**把协作作为教学的对象。**[[golrang-propact-pair-programming-2026|ProPACT]]是一个面向结对编程的、AI 驱动的[[intelligent-tutoring|自适应导学系统]]，它把*二人组*（而非个人）作为分析单元，实时建模联合视觉注意、联合心智努力与基于瞳孔的信号，以提前最多 30 秒预测协作失效并在其发生前干预。接受主动反馈的二人组取得了显著更高的调试成功率、更高效地完成任务，并在之后表现出协作调节的持续增益 —— 证据表明 AI 可以教会协作本身，而不只是支持一项任务。测量协作胜任力面临评估协作问题解决（CPS）技能的互补性挑战，后者传统上需要把模拟任务的过程数据人工编码为 CPS 行为 —— 耗时且难以规模化；对预训练语言模型的[[prompt-engineering|情境感知提示]]通过建模情境依赖并融合认知与社会能力，使这一编码自动化，性能优于强基线。

**脚手架应匹配小组谈话的顺序，而非其频率。****[[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong、Bulathwela 与 Cukurova（2026）]]**挖掘了 65 名学生的三人组对话序列，发现一种顺序 —— 先转述、再提议、后质疑 —— 与改善相关，而逆序则不然；最大化的脚手架既提高了在任务行为，也增加了照本宣科与更少的问题解决指标。

**AI 作为中立中介 —— 以及它不再中立时的张力。**[[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]]是一个基于 Discord 的[[llm|大语言模型]]探针，通过浮现隐含假设并把匿名化的综合返还给共享讨论，来中介跨学科学生团队中的学科边界。学生既把它视为认知支持、也视为关系性缓冲，但出现了一个核心张力：AI 被感知到的中立性是承重的，一旦 AI 从中立中介转向顾问或挑战者便会受到侵蚀 —— 这是[[pedagogical-agent|智能体]]在保全[[human-ai-collaboration|人机协作]]与[[trust-calibration|信任校准]]的同时中介协作的一个关键设计约束。

**一个结构化的促进者协议 —— 及其谄媚风险。****[[ethics-training-agents-group-ethics-discussion-2026|Seo 等（2026）]]**用一个结构化的发散–审议–收敛协议扩展了协作式[[learning-design|学习设计]]：一个 LLM 促进者堆叠发言轮次、为各阶段计时，并增量式地总结，45 名学生认为这种格式简单、像讨论，并降低了对外部促进的需求。该设计的转折点在于研究所直接测量的一个张力：智能体支持了视角采纳的广度（小组产出了更大、更多样的利益相关者与方案集合，且智能体一贯地为少数派观点发声），然而[[ai-sycophancy|谄媚的]]、无推理的赞同抹平了使协作深化思考的认知冲突。参与者要求智能体输出展示中间审议步骤而非只有结论，并要求保留真正分歧的反论点。

**面向 AI 教育的协作结构。**[[academic-league-of-ai-2026|AI 学术联盟]]通过民主的学生[[governance|治理]]与项目团队来组织 AI 教育，把[[active-learning|主动学习]]与[[project-based-learning|项目式学习]]嵌入一个协作的、与共同体相连的结构。

### ICAP 框架：协作作为最高的参与模式

协作学习占据[[icap-framework|ICAP 框架]]（互动式–建构式–主动式–被动式）的顶端：*互动式*模式 —— 通过对话共建意义、捍卫一个立场，或协同解决 —— 在 Chi 的分类中产生最深层的知识改变。这使 ICAP 既是协作教学法的理据，也是对 AI 的设计约束。一个中介讨论的 AI（如[[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]]或[[golrang-propact-pair-programming-2026|ProPACT]]所做）恰恰在维持*互动式*参与时才有价值；一个替小组作答或抹平认知冲突的 AI，可以把协作降格为仅仅*主动式*或*被动式*。基于 ICAP 的标注（参见[[icap-cognitive-engagement-llm-agents|协作对话的扩展 ICAP 测量]]）与促进时机研究，都把互动话语的质量视为关心的结果，把协作学习奠基于[[student-engagement|学生参与]]与 ICAP 层级之上。([[icap-cognitive-engagement-llm-agents]])([[llm-facilitation-timing-online-discussions]])

## 实践指引

- **示范协作，不只是示范个人。**追踪二人组或小组状态的工具（如[[golrang-propact-pair-programming-2026|ProPACT]]）可以为协作本身搭脚手架，预测并预防失效，而非事后应对。

- **保全认知冲突。**把 AI 结构化为一个浮现分歧与隐含假设的论辩性伙伴，避免“精致成果”的问题 —— AI 抹平了脆弱的认知参与。

- **唱反调的人设有情感代价。**在 97 个三人组中，唱反调的 AI 把话语推向挑战与反思，却降低了团队满意度（ε² = .062）与心理安全感（ε² = .114），且没有提高创作产出（[[jin-emergent-learner-agency-implicit-hai-2026|Jin 等（2026）]]）。

- **让智能体的功能与你想要的结果相匹配。**一项对计算机支持协作学习中 46 项 AI 智能体研究的综述发现，认知增益被一贯地报告，而行为、社会与情感结果仍随情境而异，且在智能体功能与结果之间，同一领域内的对齐最强（[[ba-ai-agents-cscl-review-2026|Ba 等（2026）]]）。

- **一个独立的促进者角色减少的是支配，而非响应。**在**[[astra-multi-agent-tutoring-benchmark-2026|Oyelere（2026）]]**的模拟基准中，在导学者之外增加一个促进者智能体，降低了二人组的轮次与词语不平衡（M = 0.103 与 0.105，对 0.183 与 0.182），却没有改变互惠性参与 —— 尽管学习者是人造的 persona，而非真实的二人组。

- **平衡效率与自我调节。**把任务效率最大化的协作 AI（委派式推理）会削弱学习者的调节性参与；设计应有意识地为协同性阐释保留空间。

- **尊重中立性约束。**AI 中介在中立时被信任；转向顾问或挑战角色会动摇这种信任，因此角色切换应当是显式且可配置的。

- **容纳神经多样性学习者。**结构化的作业、小而稳定的团队、明确的角色定义，是 AI 协作工具必须支持的要求。

- **优先选择非评价性的、班级层面的反馈。**在支持协作的关系维度时，班级层面的聚合反馈保护了[[privacy|隐私]]与[[agency|学生能动性]]，而个体评分会使人感到被监视；[[breideband-community-builder-cobi-2026|CoBi]]的学生偏好[[qualitative-research|定性]]可视化（一棵有机的树）而非[[quantitative-research|定量]]的（雷达图），而教师更看重用系统的观察来激发反思，胜过实时展示。

- **为贡献之前的观看/注意而设计。**[[online-teaching-and-learning|在线讨论]]论坛中的协作学习，不只取决于发帖，也取决于发帖之前的阅读。**[[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao 与 Cukurova（2026）]]**表明，LLM 生成的讨论摘要与范例帖子可以充当导航性[[scaffolding|脚手架]]，拓宽学生对同伴贡献的接触，以及建立桥接（弱关系）社会资本的网络条件 —— 这种支持应当补充、而非取代在学业负荷下维持参与的社会–教学法策略。

- **社会一面显示出扰动而无补偿性增益。**在五项协作过程上，一个 30 人专家共识只在脆弱性上达成一致，增强评分低于阈值：社会连接（3.80 对增强 1.90）、社会情感发展（3.60 对 2.00）、社会学习、协作学习与归属感（均为 3.30）（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou、Greene 与 Nixon 等，2026]]）。该报告把这一不对称视为设计目标，因为协作问题解决锚定于一件共享的成果，而协作学习没有可见的参照物，可能不被察觉地侵蚀。

## 关联概念

- [[pedagogical-patterns]] — 脚本化的共享 AI 协作及其经检验的角色设计
- [[pedagogical-partnerships]] — 教学伙伴关系
- [[group-work]] — 小组作业
- [[problem-based-learning]]
- [[online-teaching-and-learning]] — 在线教学与学习
- [[active-learning]]
- [[icap-framework]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[inclusive-learning]]
- [[neurodiversity]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[project-based-learning]]
- [[human-ai-collaboration]]
- [[trust-calibration]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[student-engagement]]
- [[pedagogy]] — 总括：AI 教育中的教学法与教学策略

## 关联文章

- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - 30 人专家共识发现单侧的社会风险：协作过程脆弱而无增强路径
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — Problem-based and project-based learning as promising frameworks for generative AI-supported education: Emerging evidence from a systematic review and three-level meta-analysis
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Emergent learner agency in implicit human-AI collaboration: supportive vs. contrarian personas
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[polished-artifacts-fragile-engagement-2026]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[neurodivergent-computing-students]]
- [[teacher-student-agency-orchestration]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[golrang-propact-pair-programming-2026]] — ProPACT: proactive AI adaptive collaborative tutor for pair programming
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Spritz: AI disciplinary mediation in student project teams
- [[academic-league-of-ai-2026]] — AI 学术联盟：协作式、项目式的 AI 教育
- [[icap-cognitive-engagement-llm-agents]] — 测量协作对话参与的扩展 ICAP 框架
- [[llm-facilitation-timing-online-discussions]] — 在线协作讨论中的 LLM 促进时机
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[wei-perkins-genai-student-collaboration-scoping-2026]] — GenAI 与学生小组作业：一项范围综述（Wei 与 Perkins，2026）
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[xu-genai-collaborative-space-2026]] — GenAI 作为小组动态中的智能体与协作空间（Xu 等，2026）
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — AI-Generated Summary-Driven Learning Design in Online Discussion Forums
- [[chen-zou-genai-group-assessment-agency-2026]] — GenAI 作为学生小组中的协调基础设施：加剧的、克制的与未实施的使用
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration