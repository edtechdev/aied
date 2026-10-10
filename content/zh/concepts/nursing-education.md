---
title: 护理教育
created: "2026-09-17T14:04:21-04:00"
updated: "2026-10-09T19:06:57-04:00"
type: concept
foundations: [learner-identity]
pedagogy: [professional-training, self-efficacy]
technology: [generative-ai, simulation]
ethics: [equity-in-ai-education]
discipline: [nursing education, medical education]
audience: [medical educators, curriculum designers, instructors, researchers]
level: [higher ed]
page_kind: [synthesis]
confidence: high
translation_of: concepts/nursing-education
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **护理教育** —— 为使护士取得执业资格所做的培养，也是[[medical-education|健康职业教育]]中当前被研究得最多的子领域。AI 经由虚拟病人与人体模型的[[simulation]]、基于[[llm|LLM]]的学习与临床推理支持、[[automated-assessment|自动化评价]]以及面向高危学习者的自适应平台进入护理课程。它的对象独具一格：护理胜任力融合了精神运动技能、关系性实践与[[learner-identity|职业认同]]的形成，因此一项提升测量表现的技术，可以同时侵蚀造就一名护士所需的成长工作。

## 值得思考的问题

- AI 支持的模拟可靠地改善知识与[[self-efficacy]]，但对复杂精神运动技能呈现不一致、有时为负的效应。AI 在何处是正确的[[teacher-role|教师]]，又在哪里房间里必须有人在场是不可让步的？
- 护理学生把 AI 描述为临床压力中的情感慰藉。这是一种值得设计的支持，还是关系性 apprenticeship 资源不足的信号？
- 健康科学学生中的 AI 焦虑与求职焦虑同步。教 AI 素养是解药，还是它反而凸显了[[educational-policy-ai|机构政策]]本应处理的那种威胁？

## 引言

护理教育是本知识库中经验记录最密集的临床线索：对 AI 应用的全系统综述、对 AI 驱动模拟的[[mixed-methods-research|混合方法]]综合、对学生与教师经验的[[qualitative-research|质性]]研究，以及对 LLM 研究的批判性整合综述，彼此并列而立。这使护理成为检验更宽的[[ai-education|教育中的 AI]]领域就临床培训所作断言的有用试金石。

必须把它与[[medical-education|医学与健康职业教育]]区分开来：后者把护理视为医学、药学、牙科与相关健康学科中并列的一个项目，并把其叙述组织在"可规模化的临床胜任力"这一共同问题周围。护理文献增添了那一页无法承载的三样东西：一道 AI 已被记录的好处止步的胜任力边界；一个明确的*职业认同*框定，其中问题是"谁成为护士"而非"学员能做什么"；以及一个劳动力层 —— 学生对 AI 取代护理岗位的焦虑，以及教师把护士视为医疗数字化变革的塑造者而非接受者的看法。

这一领域还精炼了三个相邻概念。从[[simulation]]它继承了保真度之争，但把缺陷改名为"真实性鸿沟"。从[[affective-computing]]它取来情感的测量，然而其最强的论断是：情感性结果改善了，而互动中的情感深度并未改善。从[[self-efficacy]]它取来核心的中介变量，同时告诫说在低风险情境中建立的信心可能无法迁移到临床情境。在这一切之下，是工作负担、可及性与评价诚信这一普通的[[higher-ed|高等教育]]问题，被执业许可与病人后果所强化。

### AI 如何出现在护理教育中

- **四个应用领域，反复出现的风险。** [[alrazeeni-transforming-nursing-education-ai-2026|Alrazeeni 等（2026）]]综述了 28 项实证研究（2010–2025 年 4 月），把 AI 应用归入[[personalized-learning|个性化学习]]、[[simulation|基于模拟的培训]]、[[automated-assessment]]与带预测性[[learning-analytics|分析]]的机构[[curriculum-design|课程]]管理。技术不平等、教师准备度缺口以及隐私与偏见关切反复出现。他们的建议是具体的 —— 把 AI 模拟嵌入急救培训，为高危学习者部署[[adaptive-learning|自适应平台]]，用自动化工具做实时[[formative-assessment|形成性]][[feedback]]，采纳诊断准确度作为影响度量 —— 在 6–12 个月的多站点试点中追踪[[learning-gains|学习成果]]与信任。
- **模拟：在知识与信心上强，在技能上有条件。** [[jiang-ai-powered-simulation-nursing-education-2026|Jiang 等（2026）]]遵循 PRISMA 的混合方法综述覆盖 19 项研究（N = 1,253，多为准执照学生），涵盖[[generative-ai|生成式 AI]]/LLM、AI 驱动的虚拟病人与人体模型、AI 增强的 VR/[[virtual-and-augmented-reality|混合现实]]与[[conversational-ai|聊天机器人]]。最强的设计 —— 三项[[rct|RCT]]加对照准实验 —— 显示认知知识与包括[[self-efficacy]]与沟通信心在内的情感性结果有显著增益，但对复杂精神运动技能的效应不一致，且一项 RCT 发现 AI 辅助模拟*劣于*标准化病人模拟。质性元聚合同时解释了吸引力与限度：学习者重视安全、可重复、不带评判的练习，它弥合了理论-实践鸿沟，但也报告了一个**真实性鸿沟** —— 机器人式的对话、缺失的非语言线索、没有触觉检查 —— 加上抬高了外部[[cognitive-offloading|认知负荷]]与状态焦虑的技术不稳定。作者推荐一条阶梯式连续谱：AI 用于预习、问诊与基础推理；人类模拟者与标准化病人用于复杂精神运动与情感负荷沉重的工作；人类引导的复盘与[[ai-feedback-quality|AI 反馈]]并列。
- **接受度是真实的，且是关系性的。** [[akbaba-nursing-ai-experiences-tam-2026|Akbaba 与 Calik Kus（2026）]]访谈了 28 名参与者（16 名学生、12 名教师），并通过[[technology-acceptance-model|技术接受模型]]对转写做演绎分析。TAM 成立：易用性、有用性、意向与使用塑造了采纳。角色分工是实用的 —— 学生把 AI 用于演示、视觉内容、临床病例分析与护理计划；教师用于课程材料、[[meta-analysis-systematic-review|文献综述]]、[[writing-education|学术写作]]与行政 —— 暗示应量身定制而非统一培训。两项发现延伸了 TAM 的认知框架。参与者把 AI 描述为心理社会支持，一个在临床压力中提供安慰与保密反思空间的"伙伴"。还有一处：在高量情境中 AI 在共情上*得分高于护士*，[[sun-llm-nursing-education-professional-identity-2026|Sun 等（2026）]]把它解读为**结构性共情抑制**：过劳使真实的共情表达难以为继，算法的一致性填补了空缺，而构成认同的意义转移到了算法上 —— 把政策问题从"这个工具有多有效？"重构为"是什么条件让它显得必要？"
- **教师把风险读作职业性的，而非程序性的。** [[dabkowski-nursing-academics-genai-2026|Dabkowski 等（2026）]]访谈了澳大利亚与新西兰的 22 位护理学者，发现他们在缺位、迟到或未经他们参与便写就的政策之间周旋，同事态度严重分歧，并在*替代*而非使用上划了一条线。反对在发展意义上是先于程序性的：为病情恶化的病人场景生成答案，意味着推理从未被练习，参与者警告未来的这一届将不适于执业 —— "Copilot 不会教你成为护士。"评价实践已在走向监考考试、口头答辩与过程证据，而学术不端被读作不安全临床捷径的预演，这把[[academic-integrity]]重构为一个关于谁可以安全执业的问题，而非合规流程。学者们要求与本专业[[ethics|伦理]]守则挂钩的护理专用指南、贯穿[[curriculum-design|课程]]的 GenAI 素养，以及带单元共建的[[teacher-ai-competency|员工发展]] —— 而非一刀切的禁止。
- **焦虑作为劳动力信号。** [[dag-ai-perceptions-career-anxiety-health-2026|Dağ 等（2026）]]调查了 821 名健康科学学生（其中包括护理），发现[[anxiety-and-stress|AI 焦虑]]与求职焦虑之间存在中等正相关（r = 0.233，p < 0.001），且在控制社会人口学变量后 AI 焦虑是显著的预测因子（β = 0.234，p < 0.001）。他们认为 AI 焦虑不是一种技术态度，而是塑造学生如何看待自己职业未来的心理因素 —— 指出干预应指向[[ai-literacy]]与职业咨询，而非工具化。
- **群体思维与[[collaborative-learning|跨专业]]团队。** [[genai-counter-learner-groupthink-2025|Wiss 等（2025）]]把一个生成式[[agentic-ai|AI 智能体]]（CALIE）放进十二支新组建的跨专业团队（横跨包括护理在内的七个健康专业项目），在一场 180 分钟的虚拟[[problem-based-learning|问题导向学习]]中[[prompt-engineering|提示]]它注入争议性观点。165 名学习者中有 158 人完成问卷；该智能体作为工具被评为最有用（M = 3.49），其次是反馈的有用性（M = 3.21），作为团队一部分最弱（M = 2.88），所有两两差异均显著（F(2, 156) = 26.01，p < .001）。引导者的立场事关重大，且拒绝了该智能体回答的学习者仍把它们当作一种社会许可的发声方式 —— 与 AI 的分歧本身就完成了团队工作。

### 胜任力、认同与证据缺口

- **替代是设计变量。** [[sun-llm-nursing-education-professional-identity-2026|Sun 等（2026）]]对 47 个国家 489 项研究的批判性整合综述，用一个标准重构了护理中的 LLM 研究：一个 LLM 所替代的认知与参与性工作，对所发展的胜任力而言是*外在的*还是*构成性的*。替代文档记录与常规检索会释放[[cognitive-psychology|工作记忆]]；替代一整条推理链、一个伦理辩护或一份个体化的护理计划，则移除了学习的对象。证据并非假设 —— 仅用 ChatGPT 作为资源的学生在伦理标准与临床推理上显著低于教科书对照组，而一项整合了 AI 的课程在分数更高的同时，产出更少个体化、逻辑更弱的护理计划，构成表现-学习解离。他们的**职业认同张力模型**在任务、胜任力与认同三个层面将其形式化：在有工具可得的情况下测量的结果，可能指标的是流畅的表现而非持久的能力，因此项目应采用延迟的、无工具的后测与迁移任务。
- **证据是倒置的。** 同一综述的缺口地图发现，没有任何针对职业认同或[[career-development-and-readiness|职业发展]]的随机或准实验研究，针对关系性与伦理胜任力的只有三项，且没有超过 12 个月的随访 —— 而受控的证据集中在认知与技术结果上。
- **监控被记录为感知，而非行为的改善。** [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana 等（2026）]]横跨六项研究（1,567 名学生）梳理了护理评价中的[[remote-proctoring]]，发现被监控的学生几乎普遍报告威慑效应（在一个研究生项目中一致同意率为 98–100%），而唯一的对照表现研究发现，现场监考队列在准备度考试上显著高于远程监考队列。焦虑双向流动 —— 有些学生在家更平静且免于奔波，另一些在被注视时无法专注且害怕[[legal-issues-and-risks|错误指控]] —— 且六项研究中有四项报告了连接故障，一项报告了限电，使[[equity-in-ai-education|公平的]]可及性成为起作用的约束，而非考试安全。作者的立场是：远程监考应是若干工具之一，受数据保护标准治理，并与诚信设计与[[authentic-assessment|真实性评价]]配套，而非被当作默认的保障。
- **边界条件。** 各线索汇聚到同一份克制上。AI 在结构化、可重复的目标上有最佳证据 —— 基础沟通、问诊、健康教育、知识习得 —— 在复杂精神运动技能、情感负荷沉重的互动与长期职业养成上证据最弱。接受度一贯为中等偏高，但对 AI *反馈*的接受取决于信任：学习者偏好被感知为善意的来源，胜过被感知为仅是有能力的 AI。这些综述在地理上也偏窄，以非受控设计与[[self-report-measures|自评]]为主，且在模拟综述中呈现近乎一致的正向模式，这引起了发表偏倚的担忧。

## 关联概念

- [[medical-education]]
- [[simulation]]
- [[affective-computing]]
- [[self-efficacy]]
- [[higher-ed]]
- [[learner-identity]]
- [[professional-training]]
- [[equity-in-ai-education]]
- [[cognitive-offloading]]
- [[technology-acceptance-model]]
- [[anxiety-and-stress]]
- [[ai-literacy]]

## 关联文章

- [[alrazeeni-transforming-nursing-education-ai-2026]] — 护理教育中 AI 的系统综述（2010–2025）
- [[jiang-ai-powered-simulation-nursing-education-2026]] — 护理教育中的 AI 驱动模拟：混合方法系统综述
- [[sun-llm-nursing-education-professional-identity-2026]] — LLM、结构性缺口与职业认同的重构
- [[akbaba-nursing-ai-experiences-tam-2026]] — 经 TAM 看护理学生与教师的 AI 体验
- [[dag-ai-perceptions-career-anxiety-health-2026]] — 健康科学学生中的 AI 认知与职业焦虑
- [[genai-counter-learner-groupthink-2025]] — 用生成式 AI 对抗跨专业 PBL 中的群体思维
- [[dabkowski-nursing-academics-genai-2026]] — 护理学者谈 GenAI：政策模糊、职业价值与向监考评价的漂移
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 护理评价中的远程监考：监控、公平与一个建立在感知上的威慑案例
