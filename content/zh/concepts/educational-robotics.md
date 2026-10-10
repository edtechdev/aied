---
title: 教育机器人（Robots in Education）
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:58:17-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-10-01T09:59:02-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育机器人** — 把实体或仿真机器人用作[[teacher-role|教学]]与学习工具的实践。教育机器人的范围很广：从教授计算思维和编程的可编程套件，到能辅导、讲故事、示范手语或排练社交技能的社交辅助型和人形机器人。它因培养[[problem-solving|问题解决]]、[[critical-thinking|批判性思维]]、[[creativity]]与 STEAM 参与而受重视，也因通过具身互动把抽象的计算概念变得可触而受重视。本知识库的机器人语料涵盖融入[[curriculum-design|课程]]的编程、由 LLM 驱动的对话式导师、社交辅助的[[storytelling-in-education|讲故事]]机器人，以及用于社会情感学习的角色扮演。它由两个密切相关的领域支撑（已被本页吸收）：**社交机器人**（为社交互动与关系建构而设计的机器人）和**人机交互（HRI）**（研究人们如何感知、信任机器人并与之共同学习）。

## 值得思考的问题

- 课堂里的机器人增添了屏幕聊天机器人无法提供的具身[[community-of-inquiry|社会临场感]]。你认为机器人的实体身体和社交线索会怎样改变学生的学习、信任与参与——又可能让他们从什么上分心？
- 社交机器人用类人的言语、手势和个性来教学、讲故事或排练社交技能。一个看起来和行动起来都像人的机器人天生就更利于学习吗？还是说这种社会临场感会带来纯软件工具没有的风险（错误信息、过度依赖、隐私）？
- LLM 如今让社交机器人能流利对话。如果一个机器人能像导师一样交谈，还有哪些东西取决于它的实体具身——在哪里，加一具"身体"对学习真正重要，而非只是新鲜感？
- 回想一次你通过亲手操作物体、或看到自己的行动产生可见结果而学到东西的经历。编程一个实体机器人，与在屏幕上写代码相比，可能如何更有效地把抽象概念（如程序逻辑）落到实处？

## 引言

教育机器人是[[ai-education|AI 教育]]中一个独立但密切相关的应用。不同于纯软件的[[intelligent-tutoring|智能导学]]或[[llm]]聊天机器人，机器人增添了一种**具身**且往往**社交**的临场感——一个学习者看得见、摸得着、并且（日益）能与之对话的实体能动体。这种具身性是其[[pedagogy|教学法]]价值的核心：它把抽象的程序逻辑锚定在可观察的行为中，并能支持 disembodied 系统无法做到的关系建构和情感投入。

证据比工作量所暗示的要薄：一项关于 AI 与机器人教育的综述发现，多数实证研究涉及 13 岁以下学习者、时长不超过四周，集中在少数早期投入的国家，[[learning-gains|学习表现]]是研究最多的结果，而伦理、公平和政策落后于部署（[[white-wu-robotics-ai-education-2026|White 与 Wu（2026）]]）。

### 社交机器人与人机交互

有两个脉络塑造了机器人教育的社交面。

**社交机器人**是为通过社交互动与人交往而设计的机器人，使用言语、手势、面部表情和个性等类人线索来交流、教学、协助或陪伴。在教育中，社交机器人（如 iCub、Pepper、Reachy 等人形机器人和陪伴机器人）用于辅导、讲故事、角色扮演、语言支持和学习陪伴。它们的社会临场感是与基于软件的[[agentic-ai|AI 智能体]]的关键区别，使关系建构和情感投入成为可能。[[llm|大语言模型]]的进步极大扩展了社交机器人能说和能做的范围，实现了流畅、自适应的对话式辅导——同时也引入了错误信息、[[cognitive-offloading|过度依赖]]和[[privacy]]侵犯等风险，从而推动了知识驱动的设计方法。

**人机交互（HRI）**是一门跨学科研究，研究人与机器人如何互动，涵盖感知、交流、协作以及这种互动的社会、认知和[[ethics|伦理]]动力学。在教育中，HRI 支撑学习者如何感知、信任机器人并与之共同学习——无论是给机器人编程、与辅导机器人对话，还是排练社交场景。HRI [[research-methods-aied|研究]]考察机器人外观、行为、任务情境和具身性如何塑造[[usability-research|用户体验]]、信任、能动性和学习。教育 HRI 的关键关切包括保全人类[[agency]]、建立[[trust]]、支持[[self-efficacy]]，以及确保与机器人的互动支持而非削弱自主性和社会学习。它把机器人连接到[[human-ai-collaboration]]和[[social-emotional-learning]]。

### 机器人在教育中如何使用

[[teaching-with-robots-five-types-perspective-2026|Christ 等（2026）]]提供的是一种角色类型学而非技术清单：他们从工作坊衍生的五种课堂机器人类型，区别在于*教学法功能和抽象层级*，而非硬件。类型 a 运行对通用社交模式的非交互式演示（脚本化的情绪剧场，随后讨论升级或误解等动态）；类型 b 是一个触感反应式的交互式机器人，支持参与式肢体剧场、[[embodied-learning|具身学习]]、边界意识和情绪调节；类型 c 是一个口语伙伴，能表达共情并记住与单个学生的互动，为自我表露创造一个受保护的一对一环境；类型 d 由隐藏专家像多自由度木偶一样外部操控，旨在拉平社会等级；类型 e 是一个非交互式机器人，重演学校中最近观察到的行为，让学生反思情境化行为——它与类型 a 的对比恰在于其情境特定而非泛化的抽象。该类型学明确声明自己是一个未经验证、源于单一全国性心理健康项目的设计空间，因此它是设计和评估机器人角色的菜单，而非它们任何之一有效的证据。

- **计算思维与编程：** 可编程机器人（如 LEGO、基于积木的平台）帮助学习者把代码与真实结果联系起来。[[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]]把计算思维与中学 STEAM 课程联系起来，[[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]]把积木编程与[[conversational-ai|对话式 AI]]智能体和具身机器人反馈结合起来。[[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]让初学者用自然语言控制仿真机器人。
- **辅导与知识传授：** [[knowledge-based-design-generative-social-robots-2026|知识驱动设计研究]]和[[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]]开发了辅导高等教育学生的、由 LLM 驱动的生成式社交机器人，应对错误信息和[[cognitive-offloading|过度依赖]]等风险。[[task-context-trust-educational-hri-2026|关于信任的研究]]表明，机器人做什么（任务情境）比其外观更能塑造学习者信任，教学任务期间信任最高。
- **讲故事与参与：** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]]和[[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]用交互式、由 LLM 驱动的社交机器人讲故事以提升动机和参与，而[[icub-humanoid-storytelling-llm-hri-2025|iCub 叙事 HRI 研究]]探索人类与人形机器人之间的共创式讲故事。
- **社会情感学习与[[inclusive-learning|包容]]：** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]用机器人中介的角色扮演来排练反霸凌旁观者干预，[[pepper-robot-sign-language-lis-2025|关于 Pepper 机器人的工作]]探索支持聋学习者的机器人手语交流。[[pepper-social-robot-formal-education-scoping-review-2026|一项范围综述]]梳理了 Pepper 在正规教育中的使用。
- **自主与能动性：** [[human-autonomy-agency-hri-review-2025|一项系统综述]]综合了 HRI 如何影响人类自主性和能动感，把设计框架与[[regulation|监管]]要求（EU AI Act、IEEE 伦理对齐设计）连接起来。[[social-robot-study-companions|作为学习陪伴的社交机器人]]和[[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|创意写作中的机器人—LLM 整合]]进一步探索了机器人的角色。
- **基于项目与基于游戏的方法：** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]]展示了一个基于项目的机器人课程，[[game-based-gamified-robotics-education-review-2026|一项系统综述]]比较了机器人教育中基于游戏的学习与游戏化。
- **完整机器人工作流中的强化学习与 sim-to-real。** [[teaching-rl-humanoid-robotics-high-school-2026|Dong、Cao 与 Wang（2026）]]把一个端到端的研究型机器人工作流——组装、电路检查、基于仿真的策略训练和实体部署——转化为一门[[k-12|高中]]课程，建在一个开源人形机器人（ToddlerBot，报告零件成本低于 6,000 美元）上，共八次三小时课程。两人共用一台机器人，先在[[simulation]]中训练一个[[reinforcement-learning|行走策略]]再部署到硬件，安全门（行走前必须通过的站立测试）使依赖顺序可见。由于共享工件奖励的是团队而非个人，框架把机器人表现与个人理解分开：学生轮换角色，每个检查点各自提交单独的预测与解释，被支持的步骤明确不被当作概念掌握的证据——这是作者的警告：通过机器人里程碑不等于理解它。
- **竞赛机器人是一个生态问题，而非套件问题。** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson 等（2026）]]认为 K–12 机器人教育的约束条件不在课程或硬件，而在持续的本地技术指导，且这种指导在地理上分布不均：在印第安纳州，FIRST LEGO League 的参与在 2020 年远程赛季崩塌，城市参与逐步恢复，农村参与没有恢复，直到 2025–2026 仍接近其 2020 年后的水平。他们的 ARC 框架把指导力做成被工程化的对象——大学开设带学分课程，培养本科生作为附近队伍的工坊导师，成熟的学校项目成为次级枢纽，其有经验的学生成为更多学校的同伴导师，从而通过自我强化的循环把覆盖范围传播到任何大学的招生区之外。一项单校试验创建了三支农村 FLL 队伍，并把本科生的社区连接感从 1.86 提高到 4.00（五分制上任何测量项中最大的变化，高于技术概念教学信心的 +1.29），而对印第安纳州 1,925 所公立学校的空间显式马尔可夫模拟预测，在温和假设下 40 年后有 992 所学校项目，无 ARC 则为 161。证据处于可行性层面——七名导师和四名家长、回顾性自报、无对照组——但这一框架可迁移到任何机器人项目：能否规模化的是指导能力和枢纽地理，而非机器人（[[arc-hubs-k12-ai-robotics-rural-2026]]）。
- **儿童发展与低龄学习者：** [[ai-toys-child-development-2026|AI 玩具与儿童发展]]把镜头转向早期童年的商业 AI 玩具，考察 AI 玩具如何影响儿童发展和游戏。这把教育机器人从课堂机器人扩展到孩子在家接触的消费级玩具，提出关于游戏中的[[pedagogical-agent|智能体]]、[[trust-calibration|信任校准]]、[[agency]]以及最小学习者的[[well-being]]的问题——这是一个设计指导比学龄机器人课程更薄的领域。
- **学前[[ai-literacy|AI 素养]]中的有形编码与社交机器人。** Lee（2026）把无插电游戏、有形编码（Bee-Bot、Ozobot）和与社交 AI 机器人的引导式对话整合进学前和幼儿园的 Play With AI（PL-AI）课程。该[[design-based-research|基于设计的研究]]记录了这些具身、有形的机器人活动如何支持儿童对 AI 概念的新兴推理，提出四项设计原则——具身游戏、有形编码、引导式对话和教师协同设计——为[[early-childhood-elementary-ai-education|早期童年]]机器人和 AI 教育提供了发展适切的模型。
- **面向低龄学习者的两种范式：编码机器人与生成式社交机器人。** [[creative-project-approach-ai-early-childhood-2025|Yang、Li 与 Lee（2025）]]把早期童年机器人框定为两种[[pedagogy|教学法]]范式的配对，各有不同的理论基础。**编码机器人**（Bee-Bot、KIBO、Matatalab）源自 Papert 的 LOGO，体现[[constructivist|建构主义]]——儿童通过制作来学习，通过有形编程建构[[computational-thinking|计算思维]]。**生成式社交机器人**由[[generative-ai|生成式 AI]]驱动，以[[sociocultural-learning|社会建构主义]]为基础，充当对话伙伴或导师，在儿童的最近发展区内[[scaffolding|支架]]学习并支持社会情感发展。他们把两种机器人类型融入项目路径的五步**创意项目路径**，让教师保持为引导者，引导儿童—机器人互动、平衡自动化与[[creativity]]、保全儿童[[agency]]。
- **幼儿园 CT 机器人实际做什么。** 一项对 53 项研究的系统综述发现，基于问题的学习、讲故事和支架是最常用的策略，多数研究未指明任何 CT 框架，并使用临时评估工具而非 TechCheck-K 等经过验证的量表（[[tsingidou-ct-robotics-kindergarten-2026|Tsingidou 与 Sapounidis（2026）]]）。

### 具身与教学法

一个定义性主题是：机器人只有在支持真实学习目标时才有效——而不是作为孤立的技术练习。一个与笔记本 ChatGPT 连用、可随时求助的桌面机器人投影仪虽在短期内拉平了成绩（6.7 对 7.3/10，p = .41），但在撤去帮助后保住了分数（7.0 对 4.4/10，p = .003），短期迁移分数高出 60%——这是一个依赖于任务的增益，作者归因于空间共置而非一般性替代（[[aifred-desk-robotic-ai-guidance-2026|Orlando 等（2026）]]）。机器人的价值取决于教学法情境：教授计算思维（[[computational-thinking]]）、支持[[stem-education|STEAM]]、培养[[cs-education|编程]]技能、激励学习者（[[motivation]]、[[student-engagement|参与]]），或支持[[social-emotional-learning]]和[[equity-in-ai-education|包容]]。机器人教育还连接到[[project-based-learning]]、[[game-based-learning]]和[[experiential-learning]]。关键设计考量包括保全学习者[[agency]]、建立[[trust]]、支持[[self-efficacy]]，以及把学习锚定在[[embodied-learning|具身互动]]中。在[[language-learning]]中，[[robot-assisted-language-learning-meta-analysis-2026|元分析证据]]指向具身机器人辅助语言学习的有效性。

- **通往学习 AI 驱动机器人的路径。** [[educational-robotics-pathways-2026|一项质性研究]]考察机器人 + AI 课程中的高中生，发现学习通过真实世界实践、设计和好玩的创意表达发生（建构主义、认识论多元主义视角）。

## 关联概念

- [[early-childhood-elementary-ai-education]] — 早期童年与小学 AI 教育
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — 总括：AI 技术与技术手段（模型、LLM 训练、机器人、RAG、能动性）

## 关联文章

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Pepper 机器人在正规教育中的范围综述
- [[robot-assisted-language-learning-meta-analysis-2026]] — AI 增强的具身机器人辅助语言学习的元分析
- [[white-wu-robotics-ai-education-2026]] — 机器人技术与教育中的 AI
- [[computational-thinking-educational-robotics-secondary-2026]] — 计算思维与教育机器人
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — 生成式社交机器人的知识驱动设计
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — 教育 HRI 中的任务情境与信任
- [[human-autonomy-agency-hri-review-2025]] — HRI 中的人类自主与能动性
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub 叙事 HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper 与手语
- [[social-robot-study-companions]] — 作为学习陪伴的社交机器人
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — 创意写作中的机器人—LLM 整合
- [[game-based-gamified-robotics-education-review-2026]] — 基于游戏与游戏化的机器人教育
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — 学习 AI 驱动教育机器人的路径（2026）
- [[tsingidou-ct-robotics-kindergarten-2026]] — 幼儿园中由机器人中介的计算思维
- [[ai-toys-child-development-2026]] — AI 玩具与儿童发展
- [[creative-project-approach-ai-early-childhood-2025]] — 创意项目路径：把编码与生成式社交机器人融入早期童年项目（Yang、Li & Lee 2025）
- [[teaching-with-robots-five-types-perspective-2026]] — 五种功能上截然不同的课堂机器人类型，从脚本化演示到一对一共情对话（Christ 等 2026）
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC：一个以枢纽为基础的框架，把技术指导能力和枢纽地理（而非硬件）视为农村 K–12 机器人项目的约束（Jacobson 等 2026）
- [[teaching-rl-humanoid-robotics-high-school-2026]] — 面向高中生教授强化学习与人形机器人：在低成本开放平台上经专家验证的课程设计
- [[aifred-desk-robotic-ai-guidance-2026]] — 桌面机器人投影仪：共置引导在笔记本 ChatGPT 失效之处保住了迁移
