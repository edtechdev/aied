---
title: 人机协作
created: "2026-05-29T10:44:35-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
confidence: medium
foundations: [human-ai-collaboration, ai-literacy]
technology: [generative-ai, llm]
pedagogy: [student-ai-interaction]
translation_of: concepts/human-ai-collaboration
source_updated: "2026-10-04T17:30:54-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **人机协作** —— 人与模型之间的认知劳动分工 —— 是本知识库的核心互动主题：[[human-ai-collaboration-trust-expectations]]、[[humanlike-ai-collaborative-writing]]、[[genai-mindtool-generative-learning]] 与 [[teacher-student-agency-orchestration]] 考察了信任、能动性与互补角色（[[human-in-the-loop-ai]]、[[agentic-ai]]）。决定性的问题是，这种伙伴关系是**保全还是取代**学习者自身的认知工作 —— 同一种安排可以支撑学习，也可以替代学习，取决于责任如何分担。

## 值得思考的问题

- 人机协作中的决定性问题是，这种伙伴关系保全还是取代了你自身的认知工作。想一想你交给人工智能的一项任务：你当时是在生成与决定，还是只是在接受？
- 一项研究发现，与 ChatGPT 自由协作只带来短暂的增益，并在后来一项无协助任务上崩塌，而“先思考，后让 ChatGPT 参与”的方案产生了持久的学习。为什么“谁生成想法”会预测你是否真的学到了东西？
- 同一件工具可以支撑学习，也可以替代学习，取决于责任如何分担。你能想出一种让你保持认知产出的安排，以及一种悄悄把你的思考外包掉的安排吗？
- 有一种安排颠倒了惯常角色：不是由模型给出答案，而是由学生解释内容，模型扮演那个请求解释、例子与反驳的无知一方。如果是人工智能在发问，思考留给你这一侧的部分会发生什么变化？
- 信任被描述为必须被校准的东西，而非被假定的东西 —— 在恰当处依赖人工智能，在不恰当处核验。你目前如何决定何时信任、何时核验人工智能的输出？
- [[research-methods-aied|研究]] 识别出一些在效率与自我调节性 [[student-engagement|参与]] 的深度之间取舍的协作模式。什么时候值得接受更低的效率，好把更多学习留在自己手里？
- 如果说协作既是技术选择也是 [[pedagogy|教学]] 选择，你会设置哪些设计动作（提示、工作流、结构）来确保人工智能是增强而非取代你的学习者的思考？

## 引言

人机协作描述的是学习者、教师与 [[ai-technologies|人工智能系统]] 如何划分认知工作 —— 谁做什么、谁做决定，以及 [[trust]] 与 [[agency]] 如何维持。研究不把人工智能 [[framing-ai-use-for-students|框定]] 为替代品或被动工具，而是把人工智能当作具有互补优势的伙伴，其价值取决于责任如何分担与监控。在可观察的行为层面，[[student-ai-interaction]] 捕捉学习者如何实践这种关系 —— 他们与人工智能互动时提出的问题、给出的提示与采取的核验动作。

劳动分工也贯穿于设计这种互动的人。在 [[ai-integration-instructional-design-collaboratory-2026|十二门教师教育课程的实施]] 中，教师把人工智能定位为思考伙伴、批评生成器或演练工具，而候选教师保留评估、调整与论证决策的责任；然而同一份白皮书报告，一旦披露了人工智能的作者身份，候选教师就贬低了他们此前已判定为有用的反馈，该文把这一事件称为“气球戳破效应”。一项对 [[tang-chatbots-learning-design-2026|1,378 轮设计者—聊天机器人对话的分析]] 在生成这一侧指向相反方向：设计者主要把内嵌助手用于学习成果与教学路径的对齐检查，而非产出内容。在这两种情况中，承载学习的是人的 [[evaluative-judgment|评估判断]]，而非模型的输出。

### 收益、风险与设计意涵

本知识库的证据表明，人机协作是一把双刃剑，其结果由设计而非由人工智能本身决定：

- **当协作保全了认知参与时，它可以增进学习。** 对 [[genai-mindtool-generative-learning|作为思维工具的生成式人工智能]] 与引导式协作的研究表明，当劳动分工让学习者持续生成、决定与评估时，人工智能是增强而非取代思考 —— 产生持久的 [[self-regulated-learning|自我调节学习]] 与 [[creativity]] 增益。学习者保持决定者角色这一点也延伸到写作：[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] 表明，大模型对学生议论文的批评在一学期中改善了写作，而由学习者决定是否采纳或反驳模型的反馈（87.8% 的反驳主张） —— 这是一种保全了学习者评估工作的安排 —— 而且增益甚至出现在没有大模型支持的作文上，暗示这是持久的技能而非 [[cognitive-offloading|工具依赖]]。
- **当协作外包过多时，它会替代学习。** 失效模式是 [[cognitive-offloading|过度依赖]]：当人工智能产出答案时，学习者的角色坍缩为被动接受，而即时任务表现掩盖了持久学习的缺失。[[genai-performance-vs-learning|表现与学习]] 研究和“替代到支架”的危害循环（[[substitution-to-scaffolding-ai-harm-cycle-2026]]）系统性地记录了这一点。
- **更高的分数本身并不是协作教会了什么的证据。** 本页的其他证据对受协助的表现持审慎态度，而一项对支持类型的随机检验说明了原因。在 [[iqbal-human-genai-support-essay-revision-2026|Iqbal et al. (2026)]] 的实验室研究中，87 名 EFL 学生先无协助地写一篇作文，然后用 ChatGPT 4.0（n = 29）、由人类写作教师（n = 28）、或无支持（n = 30）修改它。学生使用四种源自轨迹的修改策略中的哪一种，与其所获的支持强烈相关（Cramér's V = 0.668），而与其先前的写作策略只有中度相关（Cramér's V = 0.333）；[[motivation]]、写作技能与元认知判断准确度都没有总体关联，元认知关联只在无支持条件下浮现（p = 0.0460）。关键的是，没有任何修改策略预测分数变化（p = 0.273），尽管支持类型预测了：生成式人工智能组比人类专家组与对照组的改善显著更大（H(2) = 16.591，p = 0.00025，η² = 0.174），而在同一个*逐渐减少的 [[help-seeking]]* 策略内部，生成式人工智能学生平均约提升 4 分，人类专家学生则失去 0.5 分。作者把这一模式解读为外部支持绕过了学习者自身的 [[metacognition|元认知判断]]，并警告这些增益可能是任务特定的优化，而非持久的能力。这并不推翻*谁生成与决定* 原则（该研究变化的是谁提供支持，而非谁生成思考），但它磨砺了教师应当施加的检验：在协助下获得的增益，必须能在一项无协助任务上存活，才算作学习；而把一个人类专家请进房间，并不自动就是更安全的安排。
- **加入同伴也不自动就是更安全的安排。** [[bjet-many-hands-make-light-work-2026|Chu, Dai and Zhai (2026)]] 让 87 名本科生单独工作，或与一个生成式人工智能多智能体系统结对工作八周。结对组在复杂设计项目上得分最高（M = 89.64，相比之下无系统结对者为 85.85，单独使用系统者为 86.45，p = 0.039），然而批判性思维意识的提升在单独工作者中最大（M = 0.41），在结对组中略有下降（M = −0.04，p = 0.039）。
- **设计原则 —— 保全学习者的生产性工作。** 纵观研究，协作是有益还是有害的最锐利预测因子是*谁生成与决定*。让人保持认知产出的安排（引导式 [[prompt-engineering|提示]]、[[scaffolding|支架]]、“先思考，再咨询人工智能”、核验与评估步骤）支撑学习；把整个任务交给模型的安排则不然。互补的一招是改变模型被赋予*成为*什么。在 [[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al. (2026)]] 的准实验中，68 名 [[teacher-education|职前教师]] 要么把翻转课堂概念讲给一个基于 ERNIE 3.5 构建的生成式人工智能*新手学习者*（一个被框定为好奇与欣赏、会请求解释、例子、核验推理与对立视角、并按 Bloom 分类法逐级推进的系统），要么向一个基于同一模型构建的生成式人工智能教师提问。教人工智能的学生解释得更好（定义翻转课堂 M = 4.18 对 3.29；其教学活动 M = 4.91 对 3.06，两者 p < 0.001），并生成了更多、更高质量的问题（M = 3.67 对 2.14；M = 5.67 对 3.07，两者 p < 0.001），而客观回忆在统计上无法区分（M = 23.18 对 21.57，p = 0.416），因此优势落在解释与迁移上，而非事实检索上。人工智能教师条件下的学生坦率地谈到了这笔交易：一些人承认它给出了“更准确、更详细的信息”，却报告“用过它之后，我不想独立思考了”。把模型赋予 [[learning-by-teaching|被教的学习者]] 角色，使学生成为想法的唯一来源，并消除了长期以来寻找合适同伴来教这一难题。随之而来有两个设计限度：规划与监控并未改善（M = 4.01 对 3.78，p = 0.062），因此角色反转本身并不是一项 [[metacognition|元认知]] 干预，而且作者把这一无效结果追溯到一项让学生专注于内容准确性的任务设计。在写作课堂中，该原则采取了一种具体、可教的形式。在 [[human-ai-collaboration-academic-writing-2026|Alshehri 等（2026）]] 的沙特 EFL 准实验中，学生运行一套五步例程——框定问题并设计提示、迭代起草、修改、对每一条主张与引用对照学术数据库核验、并调节自身的署名与依赖——每次作业都要求一份 [[academic-integrity|人工智能使用日志]]，记录他们接受了什么、拒绝了什么以及为什么。写作与数字 [[critical-thinking|批判性思维]] 一同上升、几乎同步移动，而学生的反思把核验与 [[hallucination-risk|幻觉]]修补例程明确地联系到批判性思维的增益上：同样是审问输出的习惯塑造了他们的写作决策。作者自己的告诫是该原则必要的补充——该工作流是偶然性的而非自足的，在薄弱的 [[scaffolding]]、低批判性思维或 [[metacognition|元认知]] 准备（学生缺乏察觉坏输出的能力）、写作决策被逐步交出、或制度性的 [[educational-policy-ai|人工智能使用政策]] 不清晰的条件下，都会变得适得其反。
- **有界权威本身就是高利害协作的一种设计模式。** [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] 中的教师并没有做开放式助手原型，而是做自由度事先固定的系统：每个设计都把聊天机器人限定在特定的课程内容上，安全性被分层为领域边界（课程特定范围，加上一个要求对话推进前至少有若干个事实或问题的“信息配额”）、带标准化拒绝的内容过滤（“抱歉，这不属于我的知识库”），它同时也会提醒教师，以及一项针对模糊情况的教师覆盖机制 —— 给出的例子是一个关于人类生殖的问题，它在所在单元内是正当的，应当路由给人而不是被自动拒绝。在那些边界*之内*，格式、体裁、节奏与复杂度的 [[personalized-learning|个性化]] 受到欢迎，而监督（完整的对话日志、实时提醒、覆盖）被框定为专业责任，而非对模型的不信任。其意涵是：在高利害情境中，劳动分工应当被规定为有界、受监控且可撤销的，而不是逐轮协商。
- **信任必须被校准，而非被假定。** 生产性的协作取决于学习者准确校准何时依赖、何时核验人工智能的输出 —— 连接到 [[trust-calibration]] 与 [[human-in-the-loop-ai|人类监督]]，而非盲目接受或一概拒绝。

- **教师与人工智能的协作对参与而言是双刃剑，不只是对学习。** 在一项对 468 名大学教师的三波调查中，协作通过心理可得性提升了工作投入（间接 0.19），却通过工作异化降低了它（间接 −0.03）；[[teacher-ai-competency|数字胜任力]] 对两者都有调节作用，把异化斜率从 0.38 压平到 0.17（[[teacher-ai-collaboration-work-engagement-2026|Sun et al. (2026)]]）。

- **劳动分工跟随可信度，而非能力。** 学习者settle为一种有原则的分配：把即时的、广泛适用的语言反馈交给人工智能，把个体化的、关系性的指导留给教师，其分配依据是每一来源被感知的可信度而非其准确度，因为依赖的约束条件是感知到的关心，而非胜任力（[[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor, 2026]]）。
- **依赖是一个群体过程，不只是个人选择。** 在一个基于智能体的模型中，对未核验使用的可见社会证明把核验率从 0.29 压到 0.002，把过度依赖从 0.30 抬到 0.52，而可见的同伴核验恢复了近乎完全的核验 —— 改变学习者看到他人做什么，胜过降低检查成本（[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]]）。

这使人机协作成为一个*教学* 构念，与技术构念同样重要：这种伙伴关系的价值由教师如何设计互动、学习者如何调节它、以及系统如何邀请或抑制生产性参与共同塑造。

### 人机协作在研究中的体现

- **信任与期望：** [[human-ai-collaboration-trust-expectations|信任期望]] 考察学习者对人工智能的期望如何塑造协作是生产性的还是导致 [[cognitive-offloading|过度依赖]]。
- **写作与思维中的互补角色：** [[humanlike-ai-collaborative-writing|类人的写作协作]] 与 [[genai-mindtool-generative-learning|作为思维工具的生成式人工智能]] 展示了当劳动分工保全学习者的认知参与时，人工智能如何能增强而非取代学习者思考。
- **编排与能动性：** [[teacher-student-agency-orchestration|教师—学生能动性编排]] 与 [[student-mental-models-genai|学生心理模型]] 处理能动性如何在人与人工智能之间协商，连接到 [[human-in-the-loop-ai]] 与 [[agentic-ai]]。
- **元认知与团队维度：** [[haiml-human-centered-ai-metacognitive-model-2026|以人为中心的人工智能元认知模型]] 与 [[spritz-ai-disciplinary-mediation-student-teams-2026|学生团队中的学科中介]] 把协作延伸到元认知与团队学习。
- **协作能力是一种配置，而非一份清单 —— 元认知承担了 [[tpack]] 的整合角色。** [[dang-human-ai-collaboration-competency-2026|Dang, Hong, Doyle and Nguyen (2026)]] 把“人机协作能力”定义为学科、[[ai-literacy|人工智能胜任力]] 与 [[metacognition|元认知胜任力]] 及其交集（与人工智能共事、与人工智能一起能动地学习、能动地个人与 [[educational-development|专业发展]]，以及 HACC 本身）的一种*动态配置*，明确拒绝把一份人工智能技能清单加挂在既有 [[curriculum-design|课程]] 上。他们的核心动作重新分配了教学法在 TPACK 中所做的整合工作：因为人工智能是一个其贡献随任务展开而变化的适应性参与者，协调的负担落到学习者自身的元认知上 —— 决定何时咨询人工智能、如何框定互动、何时覆盖它 —— 因此持有使协作保持生产性的机制的是学习者，而非教师。[[agency|学习者能动性]] 被有意地不作为独立节点；它是学习者在协调这三种胜任力时所表达的涌现性质，这使能动性成为配置的属性，而不是一种可孤立训练的技能。该框架与 24 名新西兰教育者的访谈研究在描述上支持了这些维度，而角色层级改变的是强调而非接受：首席教育者的网络以人工智能为中心并连向 HACC 与专业发展，与资深教育者（U = 10.00, p = .04）和早期职业教育者（U = 7.00, p = .01）有显著差异。
- **不同的协作模式：** 实证工作识别出三种人机协作的 [[problem-solving]] 模式 —— *委托推理*、*协同解释* 与 *委托详述* —— 揭示了分布式人机系统的效率与学习者自我调节参与深度之间的取舍（委托推理表现最好，但自我 [[regulation]] 较低）。（[[hao-human-ai-collaborative-problem-solving-cognition]]）
- **在结构化讨论中，人类与人工智能的引导者可以在感知上互换，但复用出于不同理由。** [[kuhail-great-debaters-ai-facilitators-2026|Kuhail et al. (2026)]] 把人类主持人换成 GPT-4 主持人（再换回来），覆盖 32 名 STEM 学生主持的 32 场辩论，发现在有效性、享受度、满意度、效用或使用意向上都没有统计显著差异（t 从 0.23 到 1.30，p 从 0.198 到 0.818）。不同的是学生为何会再来：在人工智能主持下，感知效用驱动使用意向（0.806, p = 0.004），而满意度只在人类主持下驱动它（0.556, p = 0.002）。作者把这种平淡的比较解读为规则明确任务中的常态化，而非等效性的证明，并建议出于伦理与关系理由保留人类监督，同时让人工智能主持活动的效用可被理解，而不是倚重享受度。由于该研究只测量了感知，它没有说明学生是否辩得更好了。
- **先分配任务，再委托。** [[scan-framework-task-assignment-generative-ai-2025|Tsim and Gutoreva (2025)]] 在学习者发展区之外加上第四个区 —— 模型已经知道的东西 —— 得出“替代、互补、辅助与不可协商”四种任务分配，并论证自动化—增强—协作模式的区别在于控制位置与认识责任，而非工具的复杂程度。
- **提示工程是教学性思维，通过课例研究建立。** [[robinson-lesson-study-dialogic-engagement-ai-2026|Robinson et al. (2026)]] 跟踪了阿联酋一所机构的五位教师教育者，经历两轮课例研究，覆盖中学与小学数学的 36 名职前教师，用 ChatGPT（GPT-4o）设计有人工智能支持的课程。起作用的动作是把人工智能与一个学科框架配对：职前教师生成一个任务，依据一个修改版的数学任务分析框架判断其认知要求，然后改写提示以提高概念深度，使修改锚定在数学上而非工具特性上。26 条可分析的提示中有 16 条带有概念性任务特征，而教育者得出结论：提示工程“不是一项技术技能；它是一项认知技能”。修改后课程中的报告学习有所上升（第一轮 7 名职前教师中有 5 名、第二轮 14 名中有 10 名报告学会了区分概念性任务与程序性任务），且附带告诫：向人工智能索要更概念性的任务，有时只得到一个更复杂的任务。对于 [[teacher-ai-competency|教师发展]]，其论证是支持对真实课程进行持续的 [[collaborative-learning|协作探究]]，而非独立的工具工作坊。
- **指导决定表现还是学习：** Wong and Qiu (2026) 对比了在创造性任务上的自由与引导式人机协作。与 ChatGPT 自由协作只产生短暂的表现，并在后来一项无协助任务上崩塌，而引导式的“先思考，后 ChatGPT”方案 —— 先产生自己的想法，再用 ChatGPT 改进、发展与评估它们 —— 在*独立*的 [[creativity]] 上产生了持久增益。这一优势由那些旨在改进自己*想法* 的协作性提示所中介，表明*谁生成*（劳动分工）预测协作产生的是 [[self-regulated-learning|学习]] 还是 [[cognitive-offloading|替代]]。（[[think-first-chatgpt-later-2026]]）
- **人工智能作为中介者，而不只是伙伴：** [[niari-ai-pedagogical-mediator-collaborative-learning|Niari]] 把人工智能重新概念化为一个*教学中介者*，它编排互动、认识意义建构与调节过程，在人类与非人类行动者之间重新分配能动性、权威与责任，而不是把人工智能当作导师、同伴或工具。
- **教师与人工智能的协作也是有模式的，而非二元的。** 当教师用生成式人工智能设计 [[learning-design|课程设计]] 时，他们的互动呈现出经验上可区分的形式。[[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] 识别出七种教师—人工智能互动模式 —— 从对人工智能输出的*直接采纳* 与*展开采纳*，到*初始拒绝*、*修订后采纳*、*后续引导使用*、*复杂互动* 与*绕过人工智能* —— 在那些模式中，教师的教学经验与人工智能熟练度共同塑造他们是批判性地重新提示并把人工智能调整给学生与情境（一种互补的、[[distributed-cognition]] 的劳动分工），还是被动接受建议（一种人工智能主导的分配）。
- **作为混合参与形式的中介智能体。** 与其说是工具与协作者之间的中点，[[generative-ai|生成式人工智能]] 被概念化为一个中介智能体，它在生成偶然的、不可归责的贡献的同时中介行动 —— 这是一个独特的类别，它把设计从技术能力转向参与的习惯（监督性能动性、认识警觉）。（[[generative-ai-mediational-agent-sociocultural-2026]]）
- **共同体与认识权威：** [[ojeda-ramirez-community-based-ai-learning|基于共同体的人工智能学习]] 表明，协作也是*谁有权威* 的问题，把人工智能参与扎根于学习者活生生的认识论。
- **数据驱动的特质发现：** [[principal-trait-analysis-human-ai-skills-2026|主特质分析（PTA）]] 自动化地从大型 [[llm]] 对话语料中导出互动“特质” —— 一条受 PCA 启发的四阶段流水线，它抽取行为观察、把它们聚类为候选特质、为每位协作者打分，并选出最具区分性的特质。在一个学生—人工智能导师语料和一个开发者—编程智能体语料上评估时，PTA 找到能够解释与预测结果的特质（例如在教育情境中，深度概念性参与是正向的，任务委托是负向的），而且 —— 因为它们尚未跨学期／情境泛化，也未显示出学习曲线轨迹 —— 作者论证这些特质尚不可解读为“技能”。这为 [[ai-literacy]] 框架与 [[self-report-measures|自陈测量]] 提供了可扩展、客观的补充，并直接为教育者如何教授“人工智能使用技能”提供参考。
- **人机关系作为跨代 CAI 最持久的关切。** 对 [[conversational-ai|对话式人工智能智能体]] 的伞状综述（Ganguly et al. 2025，34 篇综述）发现，人机关系方面的关切 —— 过度依赖、社会孤立、去人格化、情感依赖、[[explainable-ai|透明]]、问责 —— 是所有 CAI 世代中最常被讨论的 [[ethics|伦理]] 问题，其出现早于生成式人工智能。这把“保全还是替代”问题置于 CAI 伦理的正中心，并强化了“协作的价值由设计（谁生成、谁决定、责任如何分担）决定”这一论点。（[[conversational-ai-agents-umbrella-review-2026]]）
- **人工智能把实时*专业知识* 规模化给新手 —— 首例现场辅导 RCT。** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] 的 [[rct|随机试验]]（900 名导师、约 1,800 名服务不足社区的 [[k-12]] 学生）把人工智能放在*导师* 一侧，而非学生一侧：Tutor CoPilot 生成实时、类专家的建议（由资深导师的出声思考推理构建），新手导师可以编辑或拒绝。受处理导师的学生掌握主题的可能性高出 4 个百分点（p < 0.01），在最低评级导师的学生中高出 9 个百分点 —— 这些导师上升到了与更高评级导师的对照结果相当的水平 —— 成本约每位导师每年 \$20。这一发现是 [[teacher-role|教师／导师增强]] 作为一种 [[equity-in-ai-education|公平的]] 人机协作模式的有力经验锚点：人保留教学判断与自主，而人工智能提供可规模化的专业知识。
- **有界的专家：教师如何与人工智能划分权威。** [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert, Briceno, Tabarsi & Barnes (2026)]] 做了一项参与式设计研究，六位中学教师为自己的课堂原型化了大模型聊天机器人，并分析了教师与系统之间的权威应当如何分配。教师一致把人工智能框定为*有界的专家* —— 被限定在严格定义的领域内、并在人类监督下运作的专门能力 —— 并把这种有界性分成两个维度：*权威边界*，即对学生学习与安全的专业与法律责任不可委托；以及*专业边界*，即系统缺乏教师对个别学生、课堂动态与制度规范的情境知识。把这些原型映射到 Gagné 的九个教学事件上，显示委托是选择性的而非全有全无：教师欢迎人工智能来呈现内容、提供练习题、支架（[[scaffolding]]）与形成性 [[feedback]]，但拒绝交出告知学生学习目标或 [[summative-assessment|终结性]] [[assessment]]。其设计解读是：协作界面应当让人看见人在何处保留决定者角色，而不只是模型在何处有能力。
- **角色必须适应，而不只是被标注。** [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] 表明，固定的“同伴”人工智能伴侣维持了更长的图书讨论互动，但主导了交流（学生话语／句子占比更低），并触到了 [[affective-computing|情感]] 天花板，论证协作需要角色-*适应* 的逻辑 —— 在同伴、助手与顾问之间切换 —— 而非单一静态人格。
- **教师侧的共创与角色架构也是协作。** 除了面向学生的伙伴，教师还与生成式人工智能协作设计教学。[[wang-teacher-ai-co-design-review-2026|Wang et al. (2026)]] 对教师与人工智能在学习任务上的共创做了 [[meta-analysis-systematic-review|系统综述]]，描绘了教师与人工智能共同产出设计时出现的协作模式与张力（能动性、认识权威、控制）；[[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] 发现，决定人工智能设计的分组活动质量（角色丰富度、协同、层次对齐）的是教师的教学专业知识 —— 而非人工智能流畅度 —— 这把教师定位为“[[multilingual-learning|双语]] 学习设计师”。
- **把生成式人工智能当作小组中的智能体与协作空间。** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] 观察小型 [[higher-ed]] 团队，表明生成式人工智能的角色是被协商且可配置的 —— 从从属助手到有争议的队友 —— 而同步共享使用维持共同基础，异步私下使用则割裂透明性，他们提出一种“生成式人工智能支持的协同工作”视角，把生成式人工智能同时当作智能体与互动的协作空间。
- **课堂协作的互补两半。** 两项 2026 年研究描绘了课堂中人机协作的互补两半。MeduAI-SP（[[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]）在 [[medical-education|临床]] 教育中论证“功能互补性”：人工智能智能体处理重复的角色扮演、一致的患者 [[simulation]]、清单监控、[[socratic-method|苏格拉底式]] 提示与初步 [[formative-assessment|形成性]] 反馈，而教师与人类标准化病人提供情境解释、细腻的情感回应、个体化补救、专业性评估与就绪判断 —— 替代受到错误后果、任务不确定性、关系敏感度与可用人工复核的约束，且一个人工智能系统被明确禁止自主判定临床胜任力。在相反方向上，一场 45 名学生、3 人 3 智能体的伦理讨论（[[ethics-training-agents-group-ethics-discussion-2026|Seo et al., 2026]]）记录了一种双刃模式：智能体降低了社会障碍（参与者说得更直接，因为智能体没有情感，也不感到有填补沉默的义务），然而同样的舒适把互动从人身上引开 —— 79.7% 的问题投向智能体，而它们的可得性预测为 60%（p = .017）。值得注意的是，其他人的在场使参与者把人工智能对待得更尊重，暗示人类的共同在场本身就是校准人工智能参与的一种可供性。
- **纠缠类型在对学生提出的要求上不同，这正是有些类型仍然罕见的原因。** [[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn and Rehm (2026)]] 按认识工作在学生与系统之间如何分担，把 102 项高等教育研究分类（助手、使能者、综合者、生成者、再想象者），发现把能力归因于个体学生的两种形式各占语料的 42.16%，而分配作者身份的形式仍然边缘。他们的解释是制度性的而非技术性的：罕见的类型要求学生为并非自己产出的输出承担认识责任，同时仍被作为个体作者来评估，正是这一矛盾 —— 而非劳动分工本身 —— 使它们无法进入实践。设计回应是把认识工作的分配显式化、把活动在谱系上排序，并建立对责任如何分担的反思。

### 关联

人机协作连接到 [[human-in-the-loop-ai]]（监督）、[[agentic-ai]]（自主）、[[teacher-role]]（教师不断变化的工作）、[[scaffolding]] 与 [[metacognition]]（协作如何支撑学习），以及 [[cognitive-offloading|过度依赖]]（协作变成替代时的失效模式）。它是贯穿 [[ai-literacy]]、[[self-regulated-learning]] 与 [[student-experience]] 的核心主题。

## 关联概念

- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[community-of-inquiry]] — Community of Inquiry (presences as human-GenAI sociotechnical accomplishments)
- [[student-ai-interaction]]
- [[generative-ai]]
- [[ai-literacy]]
- [[llm]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[creativity]]
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[biology-education]] — Biology education and AI: lab teaching assistants, AI literacy in biology, critical thinking, specialized tools
- [[human-in-the-loop-ai]] — oversight
- [[agentic-ai]] — autonomy
- [[productive-failure]]

## 关联文章

- [[bjet-many-hands-make-light-work-2026]] — Paired work with a GenAI multi-agent system won the design project while critical-thinking awareness rose only for those working alone (Chu et al. 2026)
- [[dang-human-ai-collaboration-competency-2026]] — HACC: collaboration competency as a dynamic configuration of domain, AI and metacognitive competency, with learner agency emergent (Dang et al. 2026)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Secondary teachers design classroom chatbots as bounded experts under human supervision
- [[ai-integration-instructional-design-collaboratory-2026]] — Twelve teacher-education course implementations treat AI integration as an instructional design problem
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: first RCT of human-AI scaling expertise to novice tutors
- [[think-first-chatgpt-later-2026]] — Think First, ChatGPT Later: Independent Human Creativity
- [[principal-trait-analysis-human-ai-skills-2026]] — Data-driven "traits" of human–AI collaboration
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction patterns in lesson design across experience and AI proficiency (Choi et al. 2026)
- [[tang-chatbots-learning-design-2026]] — Designers use an embedded chatbot for alignment checks on outcomes and pedagogy, not content generation
- [[student-mental-models-genai]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[ojeda-ramirez-community-based-ai-learning]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[substitution-to-scaffolding-ai-harm-cycle-2026]] — From Substitution to Scaffolding: Breaking the Self-Reinforcing Harm Cycle
- [[generative-ai-mediational-agent-sociocultural-2026]] — Generative AI as a Mediational Agent
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Role-adaptive AI companion for elementary book talk; affective ceiling of fixed-role agents (Liao 2026)
- [[wang-teacher-ai-co-design-review-2026]] — Teacher–AI co-design of learning tasks: trends and perspectives (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architecture of roles in AI-designed differentiated group activities (Talebzadeh 2026)
- [[xu-genai-collaborative-space-2026]] — GenAI as agent and collaborative space in small-group dynamics (Xu et al. 2026)
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN: automation, augmentation and collaboration as a continuum of task assignment
- [[bounded-reliance-ai-writing-feedback-2026]] — Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback
- [[human-ai-collaboration-academic-writing-2026]] — Five-part structured EFL writing workflow; verification and responsible-use routines drove paired writing and digital critical-thinking gains
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Role reversal: students teach a GAI novice learner, outperforming peers who query a GAI teacher
- [[iqbal-human-genai-support-essay-revision-2026]] — Support type shaped revision strategies and scores, but no strategy predicted gain; GenAI gains may be task-specific
- [[kuhail-great-debaters-ai-facilitators-2026]] — Human versus AI debate moderators rated equivalently; utility versus satisfaction drive reuse differently
- [[robinson-lesson-study-dialogic-engagement-ai-2026]] — Lesson study builds teacher educators' capacity to design dialogic AI engagement; prompt engineering as pedagogical thinking
- [[sun-student-genai-entanglement-literacy-demands-2026]] — Five student–GenAI entanglement types, and why the ones that distribute authorship stay marginal (Sun, Dohn & Rehm 2026)

- [[teacher-ai-collaboration-work-engagement-2026]] — Teacher–AI collaboration's opposing pathways to work engagement via psychological availability and work alienation, bounded by digital competency
