---
connected_resources: [liascript]
title: 计算机科学教育
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment]
discipline: [stem education, cs education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/cs-education
source_updated: "2026-10-02T12:40:11-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **计算机科学教育（CS Education）** —— 计算机 [[science-education|科学教育]] 是本知识库中被研究最多的 STEM 子领域，受益于 AI 工具与编程任务之间的天然对齐。代码生成、调试辅助与自动化代码评审是其主要 AI 应用。由于学生学习构建的正是他们所使用的工具，计算机科学教育处于关于 AI 素养、课程重设计、智能体式软件工程，以及真实学习与 [[cognitive-offloading|过度依赖]] 之边界的辩论中心。

## 值得思考的问题

- 如果 AI 现在能写出通过真实编程考试的代码，学生还应手工学会做什么 —— 而课程应停止教什么？
- [[research-methods-aied|研究]] 发现，对 AI 编程助手更高的信任预测了 *更差* 的区分正确与误导性建议的能力。信任与恰当依赖有何不同，你会如何教后者？
- 在学生—AI 协同编程中，近 80% 的互动依赖非学习型策略（如把答案外包出去），只有约 1/9 表现出深层的认知 [[student-engagement|参与]]。当 AI 随手可得时，为何真实学习极少默认发生？
- 一个过于能干的 [[learning-by-teaching|学习即教学]] 智能体削弱了学生的调试练习。你会故意让一个 AI 导师会犯错吗 —— 若会，怎么做？
- 随着 AI 把实现自动化，课程正从写代码转向验证并指挥 AI 生成的制品。这要求什么新能力，而这种转变中可能失去什么？
- 学生正在构建他们所使用的工具。同时作为 AI 的构建者与使用者，会怎样改变他们应了解的关于其局限 —— 及其伦理 —— 的知识？

## 引言

### 计算机科学教育中的 AI

- **代码生成与补全：** [[code-review-genai-cs1|CS1 代码评审]]、[[dura-llm-cs2|面向 CS2 的 DURA]] 与 [[prompt-problems-nl-programming-mistakes|自然语言编程失误]] 考察了学生如何用 AI 生成代码以及从中学到什么。
- **面向新手的对话式智能体（[[meta-analysis-systematic-review|范围综述]]）：** [[conversational-agents-novice-programmers-scoping-2025|Barzanji & Loitsch（2025）]] 测绘了 23 项研究（2019—2024 年 6 月）关于面向新手程序员的 [[conversational-ai|对话式智能体]]，记录了从基于规则的聊天机器人到基于 [[llm|大语言模型]] 与 [[rag]] 的智能体的转变（[[rag|检索增强生成]] 减少了 [[hallucination-risk|幻觉]]）以及个性化辅导支持（如 InfoBot、ProbSol-Bot、Lint Bot、Profe Alex）。值得注意的是，23 项研究中只有 4 项把设计奠基于 [[learning-theories|学习理论]]，23 个原型中有 17 个只有英文，尽管多数研究源自非英语国家 —— 这 flag 了未来入门编程对话式智能体设计中薄弱的 [[pedagogy|教学性]] 根基与包容性缺口。
- **调试支持：** [[debugtracker-classroom-debugging|调试工具]]、[[chat-debugging-human-ai-collaboration-circuits|人—AI 调试协作]] 与 [[golrang-propact-pair-programming-2026|二人结对编程建模]] 利用 AI 进行错误识别与修复。
- **自动评估：** [[automated-grading-linux-bash-examinations-large-language-models|Linux Bash 评分]]、[[llm-automated-grading-programming-comparison-2026|大规模 18 模型评分比较]] 与 [[llm-intervention-design-cs-review|大语言模型干预综述]] 评估自动化代码评估。该工作流的安全性是一个独立的问题：[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]] 红队测试了一项例行 AI 评分任务，发现藏在被提交文件中的指令能把一篇不及格作文的分数提上去且无可见警告，对一种策略 9 次中 9 次成功、对另一种 17 次中 17 次 —— 证据表明评分器的稳健性应与准确性并列列入 [[assessment-validity|评估效度]] 清单。
- **一句评分提示语就能击溃一个大语言模型，而微调能修复它。** [[llm-graders-computer-science-exams-2026|Habibullah 等人（2026）]] 在一场实践型计算机视觉考试（570 名双重评分学生）的 171 种配置下和一场机器学习考试（1,038 名学生）的另外 162 种配置下评分：一句简短的“严格评分者”前言把 17 个开放权重模型中的 14 个逐出评分带（MAE ≥ 8），其中三个彻底停止评分，而损害可追溯到两句“扣分政策”语句，其方向并不能迁移到第二场考试（七个模型反而改善了）。一个在约 3,900 个汇总评分样例之上的 LoRA 适配器把五个小型开放模型带到与人类评分者相当的水平。
- **AI 生成的学习媒介：** [[ai-generated-traces-novice-programmers|生成的动画轨迹]] 显示，AI 生成的可视化能帮助即时学习，但必须个性化 —— 中途参与的学生经历了与专长反转效应一致的表现下降。
- **把生成式 AI 类比的批评当作教学资产：** [[student-reception-genai-analogies-computing-2026|Bernstein & Sibia（2026）]] 把生成式 AI 类比的接受奠基于 CS2：十名已完成 CS2 的学生审查针对链表与递归的生成式 AI 类比，拒绝了不满足结构对应的映射 —— 一个映射到环形而非单向链表的岛屿—航线类比，或一个被用来类比递归却不保证输入递减的羽毛球回合，另有一名学生提出改用高尔夫。该工作论证，类比批评本身就是对概念理解的一种检验，使有缺陷的 AI 类比成为可用的教学资产、而非应滤除的危险物，并建议把它们作为待检查与待修复的对象布置给学生。
- **[[misconceptions|误解]] 建模：** [[student-misconceptions-conditionals-loops-taxonomy|条件/循环误解分类法]] 给自动化系统一套精确的词汇来诊断新手错误。
- **模型生成的策略性误解：** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević 等人（2026）]] 围绕 ACM/IEEE CS2023 课程中的 35 个概念构建了 SocraticTrap-CS —— 算法、编程语言、数据库、网络与操作系统 —— 并要求七个开放权重模型给出一段建立在一个细微错误之上、流利而权威的解释。七个中有六个就 91% 以上的被提示概念产出了经专家确认的策略性误解（241 个片段中的 221 个，91.7%），且各 CS 领域之间无显著差异；概念性错误占主导（66.5% 概念性对 33.5% 事实性，无一纯属逻辑），说服力与错误类型均随领域而变。因此作者建议采用领域敏感的对抗措施 —— 在偏编程的课程中采用聚焦推理的检查，在网络中对照协议规范交叉核验 —— 并建议以教学上的 [[trust|可信性]]（而非仅正确性）来评估 [[automated-question-generation|自动出题]] 与 AI 撰写的解释。
- **[[authentic-assessment|真实评估]] 表现：** [[genai-oop-programming-assessments-2026|Lepp & Kaimre（2026）]] 显示 2026 年的 [[generative-ai|生成式 AI]] 系统在真实的入门面向对象 [[assessment|评估]] 上超过平均学生队列，并常在较长的编程任务上拿到满分，但在接口、抽象类、继承与基于图像的问题上仍有困难 —— 这些是教师在设计评估时可加以利用的反复出现的错误模式。一项 CS1 纵向研究强化了该发现的能力一侧：[[student-llm-code-detection-cs1-2026|Ye 等人（2026）]] 测得前沿模型在实验上达 98.93–99.99%，而学生提交为 76.37–88.03%。
- **面向风险支持的预测建模：** [[zhang-ml-student-progress-programming-2026|Zhang、Jeffries & Koprinska（2025）]] 显示，基于内容交互日志特征训练的内在可解释决策树能准确预测大规模在线编程课程中模块层面的进度（四门 K-12 课程上 85–91% 准确率）并标记“未提交”的退课结果，让教育者在模块截止前有 7–8 天窗口 [[teacher-role|介入]]，帮助挣扎与脱节的 [[learners|学习者]] —— 补足了上述自动评分与流失预测工作。
- **面向理论计算机科学的检索增强支持只适合异步学习。** AlgoRAG 在 240 秒超时内答出了全部 179 道教师出题的考题，平均每题 38.0 秒，而它在该集合上的 BLEU-4 为 0.0000，这是数学证明上 n-gram 匹配的性质，而非系统故障（[[algorag-rag-theoretical-cs-education-2026|Adhikari（2026）]]）。
- **采用跟踪的是作业，而非子领域。** 在七份作业与 211 名学生中，[[student-llm-use-cs-subfields-2026|Nizamani 等人（2026）]] 测得大语言模型使用率从算法课的 89.6% 到软件工程课的 15.2%，把这种分布归因于作业复杂度、可验证性与支架，而非学科本身。
- **反馈可以分级，使诊断保持隐藏。** [[educator-guided-llm-pedagogical-agent-2026|Riazi & Rooshenas（2026）]] 把对学生数据库模式的、立足制品的诊断与发布它的工作流分离，各阶段由教师编写；在 383 个 episode 中，71.1% 的反馈到达了目标层级。

### 编程教学法：从积木到具身、游戏化学习

编程教育从入门的积木式编程延伸到高级软件开发，并日益把抽象代码扎根于具体、可观察的结果。

- **积木式可视化编程：** 像 Scratch 与 Blockly 这样的环境让初学者拼装图形块而非键入文本，消除语法错误并使程序结构可见 —— 对更年幼的学习者以及控制 [[educational-robotics|教育机器人]] 尤其有价值。在 AI 时代，它们日益与对话式 AI 智能体结合（例如 [[microbit-robotics-machine-learning-teacher-training-2026|教师培训中的 Micro:bit + MakeCode]]、[[cstutorbench-slm-tutors|小语言模型导师]]）。
- **[[embodied-learning|具身的]] 积木编程：** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] 把积木式编程与对话式 AI 教学智能体以及具身机器人执行结合起来，创造一个“创作—运行—观察—修改”的迭代循环，保住学习者的 [[agency|能动性]]。
- **自然语言机器人控制：** [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] 让初学者通过自然语言指令控制仿真机器人，降低机器人编程的门槛而无需底层代码专长。
- **机器人与计算思维：** [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] 在中学 STEAM 课程中把计算思维联结到教育机器人，[[microbit-robotics-machine-learning-teacher-training-2026|教师培训研究]] 则论证机器人与机器学习活动应嵌入 [[teacher-education|教师教育]]。
- **游戏化与游戏化元素学习：** [[game-based-gamified-robotics-education-review-2026|一项系统综述]] 比较了机器人教育中的游戏化学习（适合非正式情境）与游戏化元素（适合正式课堂），后者以入门编程与模块化套件为重点。
- **项目式机器人教育：** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] 通过一个敏捷的、跨学期的 [[project-based-learning|项目]] 教机器人编程，针对高等教育中的理论—实践落差。
- **大语言模型对 [[learning-gains|学习成果]] 的影响：** [[jost-llm-programming-education-learning-outcomes|Jošt 等人（2024）]] 与 [[genai-meta-analysis-programming-learning|一项关于生成式 AI 与编程学习的元分析]] 考察 AI 辅助工具是帮助还是损害编程成就。

### AI 时代的课程转型

“学生还应该手工学什么？”这一问题如今重塑着计算类专业。

- **从实现到验证：** [[reshaping-cs-education-genai|重塑本科计算机科学教育]] 论证，随着生成式 AI 把实现层面的编程、调试与测试自动化，课程必须转向 *理解并验证 AI 生成的制品*，同时保留系统设计、抽象与 [[critical-thinking|批判性评估]]，并淡化低层实现细节。这与珍视评估高于生成的 [[ai-literacy|AI 素养]] 框架相一致。
- **智能体式软件工程作为一门学科：** [[ase-26-agentic-software-engineering-curriculum|ASE-26]] 把指挥智能体而非写代码形式化 —— 教可审计性、上下文工程、验证、多智能体工作流与 AgentOps —— 并把 [[agentic-ai|智能体式 AI]] 能力定位为一门结构化、带支架的课程，而非语法熟练度。
- **从生产到判断：理解债与 AASEE。** [[judgment-centred-software-engineering-education-2026|Mahmoud（2026）]] 论证该领域应从生产中心模型转向判断中心模型，并把理解债 —— AI 辅助的生产超出学习者解释、测试、修改与论证软件能力时产生的递延学习与维护成本 —— 扩展为一个 [[assessment|评估]] 透镜，奠基于 207 名学生的 621 篇反思日记。该综述把 AASEE 框架精炼为五个非线性整合层级，横跨四项证据义务 —— 解释、验证、修改与交代 —— 并报告一个有条件的证据基础：一项异质性极端（I² = 96.32%）的 STEM [[meta-analysis-systematic-review|元分析]] 在纠正发表偏倚后失去合并收益，而对 76、72 与 64 项研究的综合显示短期效率收益并不能 [[transfer-of-learning|迁移]] 到无辅助表现。
- **新教学法与评估模型：** [[test-driven-ai-assisted-learning|测试驱动的 AI 辅助学习]] 以 [[self-directed-learning|自主的]] AI 辅助学习取代讲座，以每周闭卷测试把关，在 AI 智能体于 [[human-in-the-loop-ai|人类监督]] 下规模化材料生产与评分的同时保住个体问责。
- **离线教模型的机理。** 一套从业者资源套件不插电地教授完整的大语言模型“训练→生成”管线 —— 手记的 n-gram 网格与基于骰子的抽样，不预设编程或数学 —— 并报告已交付给约 400 名参与者，参与感从生成阶段才真正开始（[[llms-unplugged-teaching-resources-2026|Swift（2026）]]）。
- **什么预测 [[vibe-coding|vibe coding]] 的成功 —— 以及什么仍该教：** 一项对纯“无代码”vibe coding 的 [[vibe-coding-writing-cs-achievement-2026|预注册 CHI 2026 研究（N=100）]] 发现，计算机科学成就（r = .39）与书面沟通能力（r = .29）独立预测表现，且 CS 成就在控制一般领域认知能力后依然显著，贡献的独特方差约为写作技能的两倍。由于环境隐藏了生成代码，CS 知识只能间接帮助（问题分解、算法思维）—— 这使 CS 估计成为也允许编辑的 AI 辅助工作流的 *下限*。作者论证课程应把书面沟通与 CS 基础同等权衡，而非把 vibe coding 当作已被淘汰的语法熟练度。

### AI 素养、能动性与过度依赖的风险

因为编程是 AI 辅助最有力之处，它也是失败模式最可见之处。

- **信任 ≠ 恰当依赖：** [[trust-reliance-ai-education-2026|对 AI 的信任与依赖（Pitts 等人）]] 发现，在 Python [[problem-solving|问题解决]] 期间，对 AI 助手更高的信任预测了 *更差* 的区分正确与误导性建议的能力 —— 受 [[ai-literacy|AI 素养]] 与认知需求调节。目标是校准，而非信心。
- **认识论式 AI 素养：** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu（2026）]] 显示，在学生—AI 协同编程中，78.8% 的互动依赖非精通取向的目标与不可靠的策略（外包、求证式），只有 11.1% 表现出高认识论参与 —— 真实学习极少自发涌现，除非有审慎的设计支持。
- **AI 提问窄且呈生成模式。** 把 830 条 CS2 提示按 Graesser 分类法归类后，[[student-ai-inquiry-types-cs2-2026|Amoozadeh 与 Alipour（2026）]] 发现，断言式、求证式与工具式提示在两场中都占主导，且初代大学生提问更少、更依赖求证，而续修的同学把 AI 当作主动的问题解决伙伴。
- **针对复制粘贴式过度依赖的结构性干预：** [[soft-barriers-copying-ai-programming-2026|AI 辅助编程中的复制软性障碍]] 评估了轻量的设计干预（如劝阻盲目复制粘贴 AI 输出的机制），发现它们能在不阻断 AI 辅助的情况下减少过度依赖 —— 证据表明计算机科学教育中的 [[cognitive-offloading|过度依赖]] 风险可经教学设计修复，而不只靠学习者教育或禁令。
- **可教智能体与有效练习：** [[chatgpt-teachable-agent-programming-lbt-2024|与 ChatGPT 的学习即教学]] 改善了知识增益与代码质量，但因智能体过于能干而削弱了纠错练习 —— 一条设计教训：让智能体 *故意会犯错* 以保住调试。
- **辅助的治理：** [[llm-programming-support-governance-cs-education|对 90 个系统的范围综述]] 提出 **PEA 框架**（政策、执行、权威）来界定与控制大语言模型辅助 —— 一套用于设计限制过度依赖的 [[scaffolding|支架]] 的比较词汇。
- **治理的契合，而非严格。** [[instructional-governance-design-computing-education-2026|Dickey（2026）]] 提出一个六维治理画像 —— 教学性根基、AI 教学权威、人类问责、学习者能动性、情境边界与评估可见性 —— 并在七个内部工具与四个已发表编程系统上显示，同一模型可以把权威与问责分配得非常不同；预测负责任规模的是治理与教学功能的 *契合*，而非工具有多严格。
- **自适应 AI 辅导的行为语境：** [[tutortrace-learner-behavioral-states-2026|Barron 等人（2026）]] 提出 **TutorTrace**，一个数据集与管线，可从 AI 辅助 Python 课程的 IDE 遥测（N=480）实时计算学习者的行为语境。它推导出 AI 查询之前、之间与之后的活动分类法，能判断即将到来的查询反映的是受引导还是依赖性的 [[help-seeking|求助]]（AUROC=.717）并预测即将发生的查询（AUROC=.726）；行为感知提示在一项初步评估中把“无独立工作”的查询区间从 50.0% 降到 20.7%。这展示了行为遥测如何让 [[intelligent-tutoring|AI 编程导师]] 适配学习者的实际努力，而不只是其显式请求。
- **构建自己所用之物的双重性：** 计算机专业学生独特的地位既产生对 AI 局限的 [[metacognition|元认知]] 意识，也带来对 AI 生成代码的 [[cognitive-offloading|过度依赖]] 的真实风险。[[code-review-genai-cs1|代码评审访谈]] 与 [[critical-engagement-code-completion|批判性参与研究]] 直接处理这一张力。
- **项目式学习中的智能体式编码与理解：** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka 等人（2026）]] 把规范驱动开发与 [[agentic-ai|AI 智能体]] 引入一门本科软件工程项目课程，发现实现吞吐量（新增 LOC）在 2022—2025 年间上升，而重度 AI 使用恰逢代码理解的下滑，且只有在一对一教师检查后才恢复 —— 直接证据表明吞吐收益不保证理解，且 AI 辅助编码中的 [[cognitive-offloading|过度依赖]] 可经教学监控改善。

### 公平、文化与谁进入计算领域

- **扩大参与：** [[suacode-african-students-motivations|SuaCode]] 记录了非洲学生基于智能手机编程的动机（不到 1% 的中学离校者具备基础编程技能），为 [[equity-in-ai-education|低资源情境]] 下可及的 AI 支持大规模开放在线课程提供依据。
- **神经多样性与协作：** [[neurodivergent-computing-students|神经多样的计算机专业学生]] 报告对模糊协作结构的不适；结构化作业、更小且稳定的团队与明确角色改善 [[accessibility|无障碍性]] —— 这是给进入计算机课堂的 AI 工具的设计教训。
- **文化塑造被感知的伦理：** [[cross-cultural-student-perceptions-genai-computing|加拿大对韩国计算机专业学生]] 对完全相同的 AI 辅助编程实践判断不同，尽管政策在功能上完全相同 —— 政策协调不产生感知协调，这是一个 [[academic-integrity|学术诚信]] 与 [[equity-in-ai-education|公平]] 问题。
- **协作的 [[explainable-ai|透明度]]：** [[student-perception-ai-use-collaboration|Graf 等人]] 发现，伙伴间对彼此 AI 使用的不一致信念预测更低的小组分数，对表现较差的学生尤甚 —— 协作编程中可能需要透明度机制（披露、共享日志）。

### 伦理教育与劳动力

- **伦理到行为的缺口：** [[cost-of-ethics-crisis-cs-ethics-education|“伦理危机之代价”]] 显示，计算机专业学生尽管受过当代伦理教育，在求职时仍优先考虑薪酬、地点与文化而非 [[ethics|伦理]] 关切 —— 这是伦理教学向行为迁移的关键缺口。
- **劳动力重塑：** [[ai-engineering-computing-workforce-grey-literature-2026|一项对美国灰色文献的系统综述]] 提出“双轨训练问题” —— AI 快速变革与 [[governance|机构]] 适应的赛跑 —— 并呼吁持久的 AI 能力、伦理/治理，以及与新兴角色对齐的技能型证书（如 [[prompt-engineering|提示工程]]、AI 审计、[[educational-policy-ai|AI 政策]]）。

### 关联

计算机科学教育关联到 [[computational-thinking|计算思维]]、[[stem-education|STEM 教育]]、[[automated-assessment|自动评分]]、[[prompt-engineering|提示工程]]、[[ai-literacy|AI 素养]]、[[agentic-ai|智能体式 AI]]、[[curriculum-design|课程设计]]、[[human-ai-collaboration|人机协作]]、[[higher-ed|高等教育]]、[[k-12|K-12]] 与 [[professional-training|专业培训]]。它最接近的应用邻居是 [[information-technology|信息技术]]：计算机科学教育以程序与算法为对象，而信息技术教育以已部署的组织系统及从业者对它的判断为对象 —— 这解释了为何两个领域辩论不同的 AI 危害（代码生成是否侵蚀编程技能 对 AI 排障是否侵蚀诊断技能），并向毕业生提出不同的问题（能否构建一个系统 对 能否治理自己所管理的系统）。它正是 AIED（[[ai-education|AIED]]）工具既被使用又被构建的领域，使它成为 [[intelligent-tutoring|智能辅导]]、[[educational-robotics|教育机器人]]、[[collaborative-learning|协作学习]]、[[game-based-learning|游戏化学习]] 以及 [[cognitive-offloading|过度依赖]] 风险的试验场。

**一项 72 项研究的综合与 VIE 框架。** [[kumar-genai-computing-education-systematic-review-2026|Kumar、Wongsirichot 与 Nanthaamornphong（2026）]] 综述了关于计算与编程教育中生成式 AI 的实证文献（2022 年 1 月—2026 年 4 月，72 项研究，33 个发表场所），并突出恰好使该学科独特的结构性特征：AI 生成了可被评估的制品本身，于是使用工具、学习技能与被评估坍缩为一次击键。他们对 14 个主题的综合发现，该领域被重复最多的效应 —— 短期效率与完成度收益（36 项研究）—— 也正是最具误导性的：这些收益并不 [[transfer-of-learning|迁移]] 到无辅助表现（21 项研究），且 [[prior-knowledge|先备知识]] 调节着辅助成为持久技能还是拐杖。[[ai-detection|检测]] 研究稀薄（3 项研究），而课程重设计证据相对充分（25 项研究），该综述把语料整合为三个相互依赖的设计要求 —— 验证、实现与公平 —— 其中对 AI 输出的批判性参与必须是学生工作中被评分、可观察的成分，而不是留给学生自行裁量的愿望（[[scaffolding|支架]]、[[assessment-validity|评估效度]]）。

## 对计算机课程教师的启示

- **设计 AI 无法蒙混过关的评估。** 利用生成式 AI 反复出现的失败模式（接口、抽象类、继承、基于图像的任务）而非全面禁工具 —— [[genai-oop-programming-assessments-2026|生成式 AI 系统在这些地方仍有困难]]。
- **可自动评分的课后作业没有提供任何完成阻力。** [[chatgpt-qiskit-homework-autogradable-2026|Kaltchenko & Tiwana（2026）]] 对每份 Qiskit 作业跑了 50 个 ChatGPT 会话，150 件制品全部执行并通过了评分器，因为个性化只改变参数而不改变任务结构；补救办法是直接评估理解 —— 监督下的修改或口头答辩。
- **校准信任，而不只是建立信任。** [[trust-reliance-ai-education-2026|信任—依赖研究]] 显示，更高的信任预测了对误导性 AI 建议 *更差* 的辨别；教验证与批判性评估，受 AI 素养与认知需求调节。
- **让调试与 [[desirable-difficulties|有效挣扎]] 保持鲜活。** 选择保住了纠错练习的工具或故意会犯错的智能体（[[chatgpt-teachable-agent-programming-lbt-2024|学习即教学]]），并个性化 AI 生成的媒介以避开专长反转效应（[[ai-generated-traces-novice-programmers|专长反转]]）。
- **显式治理 AI 辅助。** 为大语言模型支持定义政策、执行与权威（[[llm-programming-support-governance-cs-education|PEA]]），而不是让边界停留在隐含状态。
- **把课程转向验证与智能体指挥。** 随着生成式 AI 把实现自动化，教理解/验证 AI 制品（[[reshaping-cs-education-genai|重塑课程]]）与结构化的智能体式软件工程技能（[[ase-26-agentic-software-engineering-curriculum|ASE-26]]）。
- **为所有学习者结构化协作。** 更小且稳定的团队、明确角色与 AI 使用透明度支持 [[neurodiversity|神经多样的]] 学生与公平协作，尤其在对 AI 使用信念不一致而拉低小组分数之处。
- **编程错误的大语言模型自适应解释（2026）：** 一项众包研究（N=103）发现大语言模型改写的错误信息提升可读性，但客观调试表现取决于把解释风格（实用型 对 或然型）与程序员技能匹配 —— 这是 AI 辅助编程教育的一条支架洞见（[[llm-adaptive-programming-error-explanations-2026]]）。

## 关联概念

- [[computational-thinking]]
- [[vibe-coding]]
- [[stem-education]]
- [[information-technology]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[k-12]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[teacher-education]]
- [[professional-training]]
- [[ai-education]]
- [[collaborative-learning]]
- [[prior-knowledge]]
- [[scaffolding]]
- [[assessment-validity]]

## 关联文章
- [[kumar-genai-computing-education-systematic-review-2026]] — 72 项研究的系统综述：不迁移的效率收益与 VIE 框架
- [[vibe-coding-writing-cs-achievement-2026]] — CS 成就与写作技能预测 vibe coding 熟练度（CHI 2026）
- [[tutortrace-learner-behavioral-states-2026]]
- [[mechanical-engineering-ai-curriculum-2026]] — 热工学中的项目式 AI 教育课程
- [[code-review-genai-cs1]] — 对 AI 生成代码的 CS1 代码评审
- [[dura-llm-cs2]] — DURA：面向 CS2 的大语言模型助手
- [[reshaping-cs-education-genai]] — 为生成式 AI 重塑本科 CS 课程
- [[ase-26-agentic-software-engineering-curriculum]] — ASE-26 智能体式软件工程课程
- [[test-driven-ai-assisted-learning]] — 测试驱动的 AI 辅助学习
- [[genai-oop-programming-assessments-2026]] — 生成式 AI 在真实入门面向对象评估上的表现（Lepp & Kaimre 2026）
- [[trust-reliance-ai-education-2026]] — Python 问题解决中的信任对恰当依赖
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — 学生—AI 协同编程中的认识论式 AI 素养
- [[chatgpt-teachable-agent-programming-lbt-2024]] — 与 ChatGPT 的学习即教学
- [[llm-programming-support-governance-cs-education]] — 界定大语言模型辅助的 PEA 框架
- [[conversational-agents-novice-programmers-scoping-2025]] — 面向新手程序员的对话式智能体范围综述
- [[debugtracker-classroom-debugging]] — DebugTracker 课堂调试
- [[llm-automated-grading-programming-comparison-2026]] — 18 模型自动评分比较
- [[ai-generated-traces-novice-programmers]] — AI 生成的动画轨迹
- [[student-misconceptions-conditionals-loops-taxonomy]] — 条件/循环误解分类法
- [[jost-llm-programming-education-learning-outcomes]] — 大语言模型对编程学习成果的影响（Jošt 等人）
- [[genai-meta-analysis-programming-learning]] — 生成式 AI 与编程学习的元分析
- [[golrang-propact-pair-programming-2026]] — 二人结对编程建模
- [[critical-engagement-code-completion]] — 对代码补全的批判性参与
- [[suacode-african-students-motivations]] — 非洲的 SuaCode 智能手机编程
- [[cross-cultural-student-perceptions-genai-computing]] — 对 AI 辅助编程的跨文化感知
- [[neurodivergent-computing-students]] — 神经多样的计算机专业学生
- [[microbit-robotics-machine-learning-teacher-training-2026]] — 教师培训中的 Micro:bit + 机器学习
- [[computational-thinking-educational-robotics-secondary-2026]] — 计算思维与教育机器人
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly 具身积木编程
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM 自然语言机器人控制
- [[llm-computational-thinking-physics-2026]] — 面向物理计算思维的大语言模型支持
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — AI 课程中学生—大语言模型对话的 StudyChat 数据集
- [[student-ai-inquiry-types-cs2-2026]] — 学生—AI 互动中的提问类型分析
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT 解出 Qiskit 作业；可自动评分的设计
- [[llm-adaptive-programming-error-explanations-2026]] — 编程错误的大语言模型自适应解释
- [[soft-barriers-copying-ai-programming-2026]] — AI 辅助编程中的复制粘贴阻力
- [[zhang-ml-student-progress-programming-2026]]
- [[spec-driven-development-ai-agents-sdpbl-2026]] - 软件项目式学习课程中与 AI 智能体的规范驱动开发；吞吐量对理解
- [[student-reception-genai-analogies-computing-2026]] — 有缺陷但难忘：学生对计算教育中兴趣个性化生成式 AI 类比的批判性接受
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS：基准测试模型跨 CS 课程生成策略性误解的能力
- [[humble-prompt-injection-ai-grading-red-team-2026]] — AI 中介评分的提示注入红队测试：不被察觉地移动分数的隐藏指令
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG：面向理论计算机科学教育的检索增强生成 —— 算法分析与复杂性理论的综合评估框架
- [[llms-unplugged-teaching-resources-2026]] — LLMs Unplugged：面向 ChatGPT 世界的教学资源
- [[instructional-governance-design-computing-education-2026]] — 按设计进行教学治理：计算教育中 AI 的框架
- [[judgment-centred-software-engineering-education-2026]] — AI 增强软件工程教育的后热潮综述与框架
- [[llm-graders-computer-science-exams-2026]] — 大语言模型评分器在何处成功、何处崩溃：来自两场计算机科学考试的证据
- [[student-llm-use-cs-subfields-2026]] — 211 名学生的大语言模型采用率从算法课的 89.6% 到软件工程课的 15.2%，跟踪作业而非子领域
- [[educator-guided-llm-pedagogical-agent-2026]] — 面向概念数据库设计的教师编写分级反馈：隐藏诊断、受控披露、383 个 episode 中 71.1% 达目标层级
