---
title: 模拟学生
created: "2026-08-12T22:10:30-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
connected_faqs: [checking-whether-educational-ai-works, making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
foundations: [agentic-ai, teacher-role]
technology: [cognitive-diagnosis, generative-ai, intelligent-tutoring, knowledge-tracing, llm, pedagogical-agent, simulation, student-modeling]
audience: [instructors]
confidence: high
translation_of: concepts/simulating-students
source_updated: "2026-10-08T09:45:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **模拟学生（simulating students）** — 用基于 LLM 的智能体来建模学习者的行为、认知与社会动态，服务于教育研究、设计与培训。模拟学生使研究者能够评估教学法、建模多样的学习者画像、在教育 AI 部署前进行测试，以及培训教师——这些任务若要系统性地用真实学习者完成，则困难、缓慢或受伦理限制。

## 值得思考的问题

- 如果你必须构建一个 AI「学生」来练习你的教学，什么会让它足以令人信服？——以及为什么一个总能给出正确答案的系统，实际上可能是真实学习者的拙劣替身？
- 本页将有能力的 AI 的完美答案与真实学生的不完美答案之间的错配称为「能力悖论（competence paradox）」。你在自己与 AI 相处的经历中哪里见过这种张力？你认为让模拟学习者真正逼真需要什么？
- 有哪些 [[ethics|伦理]] 与实际的理由，使你宁愿在模拟学生而非真实学生上测试辅导系统或 [[curriculum-design|课程]]——而你又怀疑这种权衡会引入哪些效度风险？
- 一个模拟学生可以「认识论上忠实（epistemically faithful）」而不在表面上像人。在往下读之前，你想象中的「可信的表面」与「学习者真正所知之真实模型」之间有何区别？
- 你会如何判断一个由模拟学生产生的发现是否可信到足以改变你教真实学生的方式？

## 引言

模拟学生是一种 [[research-methods-aied|方法学]] 工具：它们是替代真实学习者的智能体，使辅导系统、课程与教学策略得以在不招募人类学生队列的情况下被评估与迭代。[[llm|大语言模型]] 使这一范式比此前的规则式模拟学习者更具可扩展性与语言真实性，同时也带来了新的效度挑战。

由 AI 中介的近似物使本页关心的问题更为尖锐：模拟代表的是谁，以及教师应当注意什么。在数学教师教育中，[[bondurant-shaughnessy-ai-pedagogies-practice-2026|用于演练的文本式模拟学生作业与聊天机器人伙伴]] 延伸了早已组织职业培训的那些实践近似。一项 [[conversational-ai|聊天机器人]] 研究产生了四种不同的提问画像，而职前教师的 [[self-assessment|自评]] 与观察者记录的互动质量并不吻合，这使得能在演练后增加追问与探索性提问的自动化反馈成为一个有用但不充分的指引。模拟器、候选教师与反馈必须放在一起阅读。一个模拟让教师注意到什么，同样由其设计所决定：在 [[preservice-teachers-noticing-ai-simulations-2026|Galiç 等人（2026）为期三周的等号干预]] 中，17 名职前数学教师在注意（attending）、解释（interpreting）与塑造（shaping）之间移动，而非经过一个固定序列，但一对一、基于文本的设置使塑造坍缩为提问与 [[prompt-engineering|提示]]，而错误概念优先的设计把注意力拉向错误检测而非学生优势。模拟器挑选了候选教师得以演练的教学切片。

### 为什么模拟学生

- **评估教学法：** 以受控、可重复的方式，跨多种学习者画像测试教学路径。
- **建模多样学习者：** 捕捉认知水平、学习风格、[[prior-knowledge|先前知识]] 与 [[misconceptions]] 上的差异——这些差异在真实队列中难以汇集。
- **测试教育 AI：** 在系统实际上线前验证辅导与 [[assessment]] 系统，并生成训练数据。
- **[[teacher-education|教师培训]]：** 让教师与模拟的、往往不完美的学习者练习辅导与课堂管理。

- **模拟覆盖的是最容易的学生，而其中很少经过验证。** 12 名辅导 LLM 学生的教师报告了语言过于复杂、缺乏情感、不自然的专注以及知识跳跃等问题，而这些模拟只覆盖了真实学生行为四个象限中的一个——同时只有 3% 的模拟学习者研究会对其做用后验证（[[llm-student-simulation-teacher-insights|Martynova 等人，2026]]）。

### 核心挑战：真实的不完美

学生模拟的决定性困难在于：LLM 被训练成「有用的助手」，产出正确、打磨过的答案。而真实学生是不完美的——他们会犯特征性的错误，持有错误概念，并渐进地学习。一个回答完美（或过于随机）的模拟学生并不是学习者的有效模型。研究将此表述为 **能力悖论**：被要求模拟部分知识水平学习者的广义能力 LLM，会产生不真实的错误模式与学习动态。[[llm-simulating-student-scientific-thinking-2026|Nguyen 与 Cao（2026）]] 为这种漂移指明了方向。以 49 份与 NGSS 对齐的科学课中的课堂嵌入式学生想法为参照，六个模型把多数想法保持在预期的知识范围内，约三分之二达到或低于目标阅读水平，但在学习者最年幼之处恰好超出：小学与初中的想法更常超出目标年级的知识范围与阅读水平，而整个语料偏向更广的推理、更专业的词汇，以及比课堂想法更少的 uncertainty markers（「也许」「似乎」）。模型选择也不是单维的——一个与课堂想法高度匹配的系统，仍可能把它们抛到年级之上，因此修复通常是教学式的：一次显式的年级重新提示就把多数模型拉回范围内。应对它需要约束模拟，使其反映真实的认识状态——学习者知道什么、错误如何结构化、状态如何演化——而非模型的全部能力。相关技术包括以 [[knowledge-graph]] 或 [[knowledge-tracing]] 模型为基础的认知原型、显式的认识状态规约，以及学习的状态转移模型，而非简单的以人格为条件的角色扮演。

另一种杠杆是移除知识而非约束输出。在 Mistral-7B 中抑制 16 个定向知识成分，使准确率从 10% 遗忘比例下的约 0.75 降至 40% 时的 0.5 以下，而基座模型保持在 0.85 附近，且被抑制的知识可经监督式再学习与教练引导的对话恢复（[[simulating-novice-students-machine-unlearning-2026|Song, Guo 与 Lin，2026]]）。

人格稳定性是一个交互设计问题，而非模型选择问题：将五个 LLM 与三种提示设计和四种 ADHD 强度人格交叉，脚本化的任务锚定式交互消除了观察者评定的行为漂移——比无脚本对话低至 97%——且在没有显式人格指令时，基线学生表征偏向高 ADHD 症状（[[llm-educational-simulation-adhd|Gonnermann-Müller, Haase 与 Leins（2026）]]）。

相反方向的失败也会发生：在一项盲测研究中，专家标注者把 196 份 LLM 生成的 Java 提交中的 164 份（83.7%）误判为人类所写，因此模拟器的错误在功能上可与真实错误无从区分——尽管随问题难度上升，与真实错误的一致性下降（[[simulating-students-java-programming-errors-llms|Keramati 等人，2026]]）。

以预测出的行为模型为条件生成无需微调即可奏效：一个免训练框架从 [[knowledge-graph]] 构建每个学生的认知原型，并据此为 beam-search 候选打分，报告模拟准确率提升 100%（[[simulating-students-diverse-cognitive-levels-2025|Wu 等人，2025]]）。其质量随学生的认知水平提高而上升，因此较弱的学习者仍是更难模拟的情形。

CogEvolution 建模认知动态而非静态人格——一个 ICAP 深度感知器决定每次状态更新的幅度，一次进化式更新保持在最近发展区半径之内——达到 R²LC = 0.92，而静态智能体为 0.45，去掉 ICAP 模块则坍缩到 0.58（[[cogevolution-student-cognitive-evolution-agent-2026|Zhang 等人，2026]]）。

### 保真度优先于表面真实性

效度是核心关切：一个模拟学生只有在其行为是**认识论上忠实**的——反映预期学习者的知识状态——而不只是语言上似真时才有用。研究警告要警惕 [[ai-sycophancy|谄媚]]，即「模拟学生」仅仅附和辅导者，而不表现出它本应体现的错误概念。这与 [[trust-calibration]] 以及一个更宏大的问题相连：如何评估一个智能体是真正建模了某个构念，而非复现表面行为。

这一失败被量化了：在从 4B 到 120B 参数的七个模型上，模拟器无论反馈如何都以近乎一致的比率翻转到正确答案，因此输出相似性无法说明其背后的信念状态，而以 Selective Flip Score 为目标进行训练则使忠实度提升至多 +0.56（[[llm-student-simulation-misconception-faithfulness|Do, Sonkar 与 Sachan（2026）]]）。

### 与知识库的关联

模拟学生处于 [[simulation]]、[[student-modeling]] 与 [[knowledge-tracing]] 的交汇处。它是 [[generative-ai]] 在教育中的一种独特用途（建模学习者而非辅导他们），也是 [[agentic-ai]] 多智能体系统的一个应用。它支撑 [[intelligent-tutoring]]、[[adaptive-learning]]、[[personalized-learning]] 与 [[teacher-role]] 的发展，并与 [[professional-training|专业培训]] 中的患者模拟（如 [[special-education]] 与 [[medical-education|医学教育]] 场景）相重叠。在范式层面，[[agent-based-educational-science-2026|Zhang, Jiang 与 Tang（2026）]] 将其推向评估之外：他们的立场论文认为教育科学在理论与数据、方法工具之间存在结构性错配，并提出基于智能体的教育科学（agent-based educational science）——由智能体建模学习者、教师、[[parents-and-families|家长]] 与同伴，而模拟装置本身（而非单个智能体）充任研究仪器，生成时间上延展的发展轨迹与反事实设计，这些在课堂中运行则缓慢、昂贵或伦理上不可行，经验数据被重新定位为校准、验证与边界条件。该论文报告了没有任何此方面的实证验证：学生发展智能体仅在概念上被规定，作者自己的综述也承认 [[llm|LLM]] 仍然缺失个体间变异，而验证生成式社会模拟仍是该领域未解的挑战，因此「模拟将改变证据与复制如何运作」这一主张只是一个提案而非已证明的结果。

同一群体的一个实证伴侣作品是：一个学生发展智能体在 MAIC 平台上预测 42 名真实学生课程后的非认知结果，在全部五个维度上都以 RMSE 击败了课程前的均值基线（[[student-development-agent-risk-free-simulation-2025|Jiang 与 Zhang，2025]]）。其目标是发展而非行为——智能体的状态输入到它的下一批行动——而以智能体做原型设计被认为可让学生置身于研究最不确定的阶段之外。

### 模拟学生与学生建模

关键区分在于**表征一个真实学习者**与**生成一个合成学习者**。[[student-modeling]] 是为一个实际学生构建计算表征的实践——他们知道什么、感受如何、需要什么——使自适应系统能为*那个*学习者个性化教学。而模拟学生则按需*创造*虚构学习者，目的不是服务某个真实个体，而是代表一个队列，使教学法与 [[ai-technologies|AI 系统]] 能离线接受测试。

两者是互补而非竞争的。一个高保真的模拟学生通常*包含*一个学生模型（一个认识状态、一套错误概念、一份 [[student-engagement|投入]]画像），并依赖 [[student-modeling]] 与 [[knowledge-tracing]] 所形式化的同样构念。两者共享的效度挑战也是同一个：表征必须忠实反映学习者的真实状态，而非系统的默认行为。但*目的*不同——学生建模诊断真实学习者以便对其行动；模拟制造学习者以便测试或训练。这就是为什么模拟学生研究日益被用于审计 AI（见下文），而学生建模研究仍面向在线 [[adaptive-learning]] 与 [[personalized-learning]]。

### 双轴保真度：行为匹配与引导响应

[[studentsim-llm-student-simulators|StudentSim（Yang 等人，2026）]] 把效度问题形式化为两条必须同时成立的要求：**行为保真度（behavioral fidelity, F）**——模拟器与一个学生自身回应的匹配程度，以及**引导响应度（guidance responsiveness, R）**——它向辅导指引所指向之处的可靠更新程度。其 [[benchmark]] StudentSimEval 把公开学习者语料（国际象棋、第二语言英语写作、[[math-education|数学]]）铸造成标准化的按学生协议，任何模拟器都可在其上拟合并对留出记录打分。两段式的**先合并后专门化**（pooled-then-specialized）流水线（一个共享的行为模式池加一个按学生的适配器）产出了一族在两条轴上都强的模拟器，优于领域特定的状态追踪（R 弱）与纯提示的 LLM 角色扮演（F 弱）。这给了该领域一个具体的双轴词汇，用以判断一个模拟学习者究竟是真正有用还是仅仅似真——并且作为概念验证，一个冻结的 StudentSim 被用作国际象棋辅导 [[reinforcement-learning]] 循环中的奖励，产出的辅导者在专家评定中比用前沿 LLM 模拟器奖励或无 RL 训练出的辅导者更准确、引导更好、更个性化。

学生模拟器复现可观察的行动，但不复现其背后的潜在推理。INSIDE 微调模型在每次行动前生成一段内部对话，使生成推理与真实代码编辑之间的对齐达到最高（熟悉问题 51.8%，未见问题 57.9%），且不损失行动保真度（[[inside-llm-student-simulator-reasoning-2026|Niousha 等人，2026]]）。

### 描述而非模拟：单个智能体胜过模拟群体之时

一个反复出现的问题是：模拟学习者的分布，是否是预测真实学生表现的最佳方式。[[ai-web-agents-lesson-design-2025|Wang, Mitchell 与 Piech（2025）]] 提供了一个惊人的反例：对于在学生参与*之前*评估一次在线 [[learning-design|学习体验]]——预测辍学与完成并给出设计反馈——一个**「描述型」[[agentic-ai|网页智能体]]** 自主走完课程并产出一份丰富的 [[student-experience|学生体验]]描述，其表现优于直接模拟一个学生群体。他们的模拟学生（以人格为条件、按预测完成率采样的智能体）表现出的行为范围远小于真实学习者——在五节测试课上，100 个智能体只复现了真实学生所走路径的约 **4%**——且对课程难度几乎没有洞见，同时计算开销大得多。单条「先描述再预测」流水线（由智能体生成的描述喂给一个 [[llm]] 去预测结果）在一门大规模全球 CS1 课程上取得最好的辍学分布预测（mean JSD 0.060，击败所有基线）。这对该领域是一个富有成效的边界结果：当目标是结果预测或设计批评时，模拟一个学生*分布*可能是多余的——甚至适得其反——因为对体验的忠实描述比狭窄的模拟轨迹切片携带更多信号。它也提示模拟的角色可能被限定于这样一些问题（例如审计一个 AI 对多样画像的对待，或培训教师），即覆盖真实的学习者变异比聚合的结果预测更重要。

### 真实数据学生模型与互动式练习

两条 2026 年的线索强化了模拟的实践价值。其一，**真实数据学生模型**——[[teachlm-post-training-llms-education|TeachLM]] 在 100,000 小时真实的一对一辅导师生互动（经严格匿名化）上训练学生模型，产出可对辅导行为进行快速、可扩展、可复现的多轮评估的合成学习者；这解决了纯提示工程的学生模拟器的真实性与多样性不足问题。其二，**互动式教学拟像（instructional simulacra）**——[[educasim-cs1-instructional-practice|EducaSim]] 使用生成式智能体（带人格、课程锚定的记忆，以及一个 LLM-as-judge 的言语神谕）为受训教师模拟一个小班，加入可运行代码与语音互动，外加结构化的课后反馈与自我反思，并以大规模 [[online-teaching-and-learning|在线课程]] 的规模展示了低成本、积极采纳的体验式 [[pedagogy|教学实践]]。两者都指向模拟不仅服务评估，也服务动手的教师培养。

第三条 2026 年的线索关乎模拟器*如何*被构建而非它被用来做什么，它收敛于一个结论：提示设定了上限，训练则移除上限。[[swim-student-writing-simulation-2026|SWIM（Do, Kontak 与 Sachan，2026）]] 把学生写作模拟重新表述为能力条件化的作文生成，并比较了以评分标准为基础的提示、在真实分数-作文对上的监督微调，以及带一个源自 [[automated-essay-scoring]] 的 Proficiency Alignment Reward 的 GRPO，用 Quadratic Weighted Kappa 将每篇生成作文对照其目标特质画像打分。即使对强大的专有模型，提示也只给出有限的控制力（Claude Sonnet 的平均特质 QWK 最佳为 0.577，GPT-5.4 为 0.422，对开源 7B 模型做提示则接近零），它把内容导向的特质对齐得远好于形式（0.695 对 0.458），并产出了一个理想化的高能力学生群体，其归一化 Overall 得分均值为 0.74，而真实学生为 0.58，长度中位数为 304 词而真实学生为 167。监督微调把一个 7B 模型推到 0.474 ± 0.023，GRPO 推到 0.618 ± 0.005，这些增益在两个策略从未训练过的独立评分器上依然成立，且受训模型在没有任何长度监督的情况下恢复了人类分数与长度分布；真实的低能力形式仍是最难的，因为受训模型恢复了句法但写出的拼写与语法错误太少，而提示主要通过表面的破坏来模拟弱点。同样的教训从相反方向出现在 [[misconception-acquisition-dynamics-llms-2026|Liu 等人（2026）]] 中，他们对三个小模型做指令微调使其持有代数错误概念：数据的 *[[writing-education|构成]]* 决定了结果，因为单个错误概念会过度泛化并破坏正确求解，直到混入正确样例，多个错误概念可以无代价地联合训练，且仅看最终答案的监督无法习得任何错误概念。

在 382 段留出的数学对话上，用七个基于参照的指标对九种模拟方法做基准测试，提示在对话行为（0.4998 对 0.6840）、ROUGE-L（0.1648 对 0.3212）与余弦相似度（0.5460 对 0.7390）上都落后于微调（[[simulated-students-tutoring-dialogues-2026|Scarlatos 等人，2026]]]]）。然而所测最佳方法——在 8B 模型上做偏好优化——只以微弱优势击败监督微调，且在错误上更差，而一项由三名辅导教师参与的人工评估复现了这一排序。

架构能强制执行提示所不能的：一个神经符号模拟器通过半马尔可夫控制器与缺陷注入的知识追踪施加自我调节学习结构，达到行为分歧 0.31，而基线为 0.53（[[beagle-grounded-learner-emulation-2026|Wang 等人，2026]]）。把它的元认知词汇注入基线从未超过 0.63，去掉符号控制器则把分歧推到 6.81，而在一次 71 人评定的图灵测试中，其轨迹与真实学生无从区分（52.8%，d′ = 0.15）。

### 用模拟学生审计 AI

除评估教学法之外，模拟学生还充当**审计 AI 系统本身的测试装置**——一种受控方式，用于在 AI 触及真实学生之前，探测它跨多样学习者画像的行为。[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等人（2026）]] 示范了这一点：他们用三个 LLM 生成 4,500 份合成学生情境，审计当前的 [[llm|大语言模型]] 能否作为规定性的 [[learning-analytics]] 推荐器，发现对学生需求的敏感性有限，且跨模型不一致性显著。用模拟队列对一个 AI 的推荐做压力测试（而不只是训练或评估辅导者）是该范式日益增长的角色，与 [[ai-ed-evaluation|评估教育中的 AI]] 紧密相关；当审计意在揭示跨学习者类型的差别对待时，则与 [[equity-in-ai-education]] 相关。

模拟还能预先测试学习者的选择：[[simulating-learner-task-selection|Noh 等人（2026）]] 把 Additive Factors Model 与贝叶斯 [[knowledge-tracing]] 拟合到两个真实辅导数据集，并让 1,000 个模拟学习者在八种策略下选择技能，其中一条风险规避规则产生的过度练习约为其他策略的三十倍，而一个「刚好低于掌握」的约束将其削减到 1.8×。

第二种审计维度是 [[metacognition|元认知]]与情感性的。[[meds-math-education-digital-shadows-2026|MEDS（Esposito 等人，2026）]] 是一个 28,000 条记录的数据集——14 个 [[llm|模型]] 各 2,000 个合成人格，每个都分别以人类人格和基线助手两种模式运行——记录了在 18 道高中 [[problem-solving|数学问题]]上的准确率，以及 [[self-report-measures|自评]]的信心和它所替代的学习者会报告的 [[self-efficacy]] 与 [[anxiety-and-stress|数学焦虑]] 分数。其审计信号是校准差距：Qwen 系列与 Ministral 3B 声称的信心高于 0.90，而准确率停滞在 0.55 附近，而 Grok 4.1 Fast、DeepSeek Chat 与若干 Mistral Small 变体则信心不足，Ministral 14B 与 Anita 24B 保持合理的对齐。同样的运行暴露了一种更安静的保真度失败：人类模式下的人格产出宽广、似真的分数分布，而基线助手返回近乎相同、自信、低焦虑的答案——一幅默认的自我画像，而非模拟学习者的。这通过探测一个模型对自身能力与情感的主张，延伸了上述推荐器审计，并从意想不到的方向锐化了本页的效度警告：由于 MEDS 的人格是构造上加权而非从真实总体抽样，其作者把该数据集呈现为一个用于审计受提示条件化的 [[generative-ai|GenAI]] 行为的观察性资源，并明确声明它并非真实 [[student-experience|学生数据]]的替身。

### 模拟协作与社会动态

模拟也超越个体学习者，延伸至复现 [[collaborative-learning|协作学习]]的社会动态。**参与者特定的 LLM 智能体**——[[llm-agents-collaborative-problem-solving-simulation-2026|Fang（2026）]] 在个别参与者的对话数据上微调 LLaMA 3.2-3B 智能体，以在协作问题求解模拟中表征每位参与者，把滑动窗口记忆与摘要化的记忆嵌入结合，既保留局部的话轮转换又保留主题连续性，并按经验分布概率性地选择说话者与主题编码。借助 [[network-analysis|认知网络分析（Epistemic Network Analysis, ENA）]]，模拟对话在统计上与真实对话无从区分（ENA 距离 0.17，远在 95 百分位零假设阈值之内；置换检验 p = 0.65），验证了 [[agentic-ai|LLM 智能体]]能复现真实 [[problem-solving|协作问题求解]]的话轮动态与主题编码轨迹。

2026 年关于持久技能（durable skills）的工作把模拟的通常方向反转过来。系统不再模拟学生来审计系统，而是模拟*队友*来评估学生：一个 Executive LLM 生成一项 30 分钟小组任务中每个 AI 伙伴的话轮，把持评分标准，并引导对话以制造目标技能出现的机会（[[durable-skills-measurement-ai-teammates-2026|Globerson 等人，2026）]]）。在来自 188 名参与者的 373 段对话中，技能匹配的引导把可评定证据提高到项目管理的 92.4% 与冲突解决的 85%，显著高于不受约束的独立智能体，而 AI 评估器是对照两名人类评定者校准的，他们自身的评分者间 Kappa 只有 0.45–0.64——这提醒我们，一个模拟器的上限由人类在该构念上能达到的一致程度设定。

针对模拟器所做的训练还可以迁移：TutorLoop 的强化学习智能体离线针对一个模拟学生训练，未经任何再训练即原样迁移到一个新的真实学习任务（N = 187），其中更稀疏但时机更好的反馈优于更密集的反馈（[[tutorloop-sensor-cognitive-feedback-2026|Xu 与 Zhang，2026）]]）。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[simulation]]
- [[student-modeling]]
- [[ai-assisted-educational-research]] — AI 辅助教育研究
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[generative-ai]]
- [[llm]]
- [[learning-analytics]]
- [[teacher-role]]

## 关联文章
- [[tutorloop-sensor-cognitive-feedback-2026]] — 一个以模拟器训练的强化学习辅导者离线迁移到一项新的真实任务（Xu & Zhang 2026）

- [[llm-student-simulation-teacher-insights]] — Can LLMs Simulate Human Learners? Teachers' Insights
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving?
- [[llm-educational-simulation-adhd]] — LLM-Based Educational Simulation and Student Persona Stability
- [[simulating-students-java-programming-errors-llms]] — Simulating Students' Java Programming Errors
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[medeasy-ai-standardized-patients]] — MedEasy: AI Standardized Patients
- [[simulating-students-diverse-cognitive-levels-2025]] — Embracing Imperfection: Simulating Diverse Cognitive Levels
- [[inside-llm-student-simulator-reasoning-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: 微调出的真实学生模型，用于合成对话
- [[educasim-cs1-instructional-practice]] — EducaSim: 用生成式智能体为教师练习模拟一个 CS1 小班
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — Responsible Integration of AI into Pedagogies of Practice in Mathematics Teacher Education
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution: 模拟学生认知演化的生成式智能体
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — 复现协作问题求解对话的参与者特定微调 LLM 智能体（Fang 2026）
- [[studentsim-llm-student-simulators]] — StudentSim: 训练基于 LLM 的学生模拟器
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: 单个描述型智能体在预测辍学与设计批评上胜过模拟一个学生分布
- [[simulating-learner-task-selection]] — 掌握学习中模拟学习者的任务选择策略与系统约束（Noh, Chowdhary, Ooge, Aleven & Borchers 2026）
- [[durable-skills-measurement-ai-teammates-2026]] — Toward Scalable Measurement of Durable Skills
- [[agent-based-educational-science-2026]] — Toward Agent-based Educational Science: 模拟装置作为研究仪器（Zhang, Jiang & Tang 2026）
- [[meds-math-education-digital-shadows-2026]] — MEDS: 一项 28,000 条记录的对模拟学生与 AI 助手的数学表现、信心与焦虑的审计
- [[swim-student-writing-simulation-2026]] — 提示与 SFT 和基于奖励的训练在构建学生写作模拟器上的比较
- [[misconception-acquisition-dynamics-llms-2026]] — 一个模拟器要真正持有错误概念，训练数据里必须有什么
- [[llm-distractor-generation-student-reasoning-2026]] — 模型如何模拟错误学生推理的轨迹级分析
- [[llm-simulating-student-scientific-thinking-2026]] — 六个模型对 8,820 条课堂嵌入式科学想法：模拟推理在何处超出年幼学习者的范围、词汇与确定性
- [[simulated-students-tutoring-dialogues-2026]] — 一项九种学生模拟方法的七指标基准测试，附三名辅导教师的人工评估
- [[simulating-novice-students-machine-unlearning-2026]] — 把机器遗忘作为把模拟器稳定在初学者知识水平、并借辅导对话再学习的方法
- [[student-development-agent-risk-free-simulation-2025]] — 在多智能体平台上预测学生课程后的发展结果，而不让他们暴露于干预
- [[preservice-teachers-noticing-ai-simulations-2026]] — 职前教师在等号聊天机器人模拟中三周的注意、解释与塑造，以及设计如何引导他们所注意的内容
- [[beagle-grounded-learner-emulation-2026]] — 一个在架构上而非靠提示强制执行 SRL 结构的神经符号模拟器，并通过了人类图灵测试
