---
title: 人在回路
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-03T03:00:33-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **人在回路（Human-in-the-loop）** —— 一种设计模式，其中教育性 [[ai-technologies|AI 系统]] 策略性地把自动生成与人类专家判断交错起来，在规模化生产的同时保住 [[pedagogy|教学性]] 质量与安全。HITL 并不把评估、反馈或教学完全自动化，而是在人的判断具有最高边际价值之处 —— 评估质量、裁决边缘案例、保护 [[agency|学习者能动性]] 与安全 —— 保留一个人（教师、学科专家或学习者）在决策回路中。核心设计问题不是 *是否* 纳入人，而是其监督在管线中的 *何处* 最有价值、最不可替代。

## 值得思考的问题

- 核心 HITL 设计问题不是是否纳入人，而是其判断在管线何处最有价值。在一个 AI 评估或反馈系统中，你会坚持在哪个点上让人留在回路里？
- 对 AI [[automated-question-generation|出题]] 的研究发现，计算机能很好地处理清晰性与效度，但有意义的干扰项与良好反馈仍需要人。为何教育判断的某些部分抗拒自动化？
- 一项评估发现三个大语言模型给出了不一致、不敏感的学生支持建议 —— 结论是在 AI 就学生提供建议之前仍需要人类判断。当 AI“建议”对一名挣扎学生给予支持时，若无人审查，可能出什么问题？
- 本页认为人与算法捕捉不同种类的问题 —— 把可精确验证的部分自动化，在细微之处不可替代之处保留判断。在你自己 的实践中，两者的边界在何处？
- 把人留在回路中被框定为保护学习者能动性与安全，而不只是质量。完全自动化可能如何微妙地改变学生“谁为自己的学习负责”的感觉？
- 如果 AI 变得更自主，HITL 监督被描述为核心安全护栏。在多高的 AI 自主程度上你会感到不适 —— 而这种不适告诉你监督该放在哪里？

## 引言

HITL 是对完全自主的 [[ai-education|教育 AI]] 之局限与风险的回应：自动化系统能规模化生成，却缺乏教师与专家带来的情境性、[[ethics|伦理]] 与教学判断。两项近期的实现展示了不同的架构：

处方性支持是一个日益被论证为人类监督不可缺席的领域。[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等人（2026）]] 测试了三个大语言模型能否依据 [[learning-analytics|学习分析]] 指标推荐学生支持方案，发现对需求的敏感性有限且跨模型不一致性显著 —— 结论是在 [[llm|大语言模型]] 的处方性建议能被安全、合乎伦理地部署之前，人在回路的判断仍是必要的。

第三种架构把人类判断放在模型的 *上游* 而非其输出处。在 [[lee-learner-question-types-ai-education-2026|Lee、Atif 与 Kang（2026）]] 对学习者问题分类的研究中，三位博士级专家治理了整条管线：他们精炼了每个 [[constructivist|建构主义]] 角色的操作定义，独立标注直到经不一致消解后 Fleiss' kappa 从 0.60 升至 0.83，并验证了用于平衡训练集的回译与改写题目。

## CODE-GEN：人在回路的选择题生成

Duan 等人（2026）构建了一个基于 [[rag|检索增强生成]] 的 [[agentic-ai|智能体式]] 系统，含两个智能体：
- **生成器智能体** —— 产出与课程学习目标对齐的多选编程题
- **验证器智能体** —— 在七个教学维度上评估质量

**评估：** 6 位学科专家评判了 288 道 AI 生成的题目。经人工验证的成功率：各维度 **79.9%–98.6%**。

**AI 强势维度（人类负担低）：**
- 题目清晰度、代码有效性、概念对齐、正确答案有效性

**需人维度（人类负担高）：**
- 有教学意义的干扰项设计
- 高质量的解释性 [[feedback|反馈]]

策略性洞见：人类努力应集中于教学判断不可替代之处；计算性验证可以完全自动化。

## MAIC：人在回路的脚本生成

Yu 等人（2024）在清华大学部署了一个多智能体课堂（[[teacher-role|教师]] 智能体、助教智能体、同学原型），含 >500 名学生与 >100,000 条学习记录。人类教师参与脚本生成与监督，确保大规模的 AI 增强不会取代教学专长。

## PedaCo：AI 视频生成的双重把关

Kim、Baek 与 Kwak（2026）通过 **PedaCo**（Pedagogical Co-creation，教学性共创）把 HITL 延伸到 [[video-education|AI 生成的教学视频]]，这是一条含两层互补把关的管线，实例化了奠基于 Mayer 的多媒体学习认知理论（CTML）的 *有原则的抵抗*。**第一层** 把人放在脚本阶段：一个大语言模型起草脚本，一个 AI 评审标记潜在的 CTML 违反（如“场景 3 在未预先解释的情况下引入技术术语”），由教育者决定接受、修改或重新生成。**第二层** 在合成之后对连贯性、冗余、时间邻接、模态与图像质量运行自动化指标，由教育者评审。在一项被试内研究（23 位教育者）中，基于评审的方法改进了每一项 CTML 原则（均分 3.07→3.86, p<.01），教育者把生产效率评为 4.26/5 —— 摩擦被感知为生产性的，而非负担。该设计原则呼应本知识库的 HITL 综合：人与算法捕捉 *不同* 的问题，因此最有效的系统在计算性验证精确之处（时间同步）自动化，在教学细微之处不可替代之处（语气、受众契合）保留人类判断。

放置可能比在场更重要：从业者把一个 Social Story 创作工具评为高度可用（SUS 86.8），却报告评审来得太晚，因为生成前设定的文化与临床约束 —— 例如以长袍代替西式街头服饰 —— 事后编辑输出更难挽回（[[adapted-stories-social-story-intervention-2026|Enkhjargal 等人（2026）]]）。

## 为何 HITL 在 AI 时代重要

人在回路设计因若干相互汇合的原因，已成为本知识库 [[agentic-ai|智能体式 AI]] 与 [[reducing-ai-misuse|负责任 AI 使用]] 讨论的核心：
- **教学性安全。** [[pedagogical-safety|教学性安全]] 要求拥有真实教学权威的 AI 保留人类监督，使错误、偏见或有害输出在到达学习者之前被抓住。这对 [[agentic-ai|主动追求目标]] 的自主智能体尤其重要。
- **监督在实践中罕见，而不只是在理论上。** [[agentic-ai-education-scoping-review|Wang 等人（2026）]] 发现，在 474 个教育智能体式 AI 系统中，稳健的内嵌治理与人在回路监督极少出现，即使单任务自主性与多智能体协作在增长 —— 设计原则与部署实践之间的落差。
- **效度与质量控制。** HITL 是 [[automated-assessment|自动化评估]] 与生成的质量闸门 —— 人在自动评分不可靠之处裁决（见 [[llms-do-not-grade-essays-like-humans-2026|大语言模型作文评分]] [[research-methods-aied|研究]]）并验证生成的题目。一项对 42 项评分与反馈研究（2023—2025）的 PRISMA 引导 [[meta-analysis-systematic-review|系统综述]] 明确得出同样结论：大语言模型在简短、结构良好的任务上与人类评分者相当，但无法在复杂、开放式或主观的工作上完全取代人类判断，而最高效的评分效果在把 AI 驱动评分与教师监督和验证结合起来的混合系统中达成（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat 等人（2026）]] 具体展示了边界落于何处：ChatGPT-5 在客观药学考试题上与教师相当（CCC 0.935–1.000），但在简答与论述题上即便给了量规也并不可靠，使作者建议对复杂、主观或高风险的评估采用含人工审查的混合评分。
 重复并不构成那种监督的替代：在五个不同日子对完全相同的提交重新评分，同一模型只在 Krippendorff's alpha 0.625 上复现自身结果，变异集中于中间分数段，A 与 F 在五次数目中缺席（[[llm-grading-assistants-public-health-2026|Brevik 等人（2026）]]）。
- **学习者能动性。** 把人留在回路中保住 [[agency|能动性]] 并支持 [[self-regulated-learning|自我调节学习]]，对抗完全自主辅助可能诱发的 [[cognitive-offloading|过度依赖]]。

- **学生自己把人放在高风险的一端。** 在 93 名本科生中，81.7% 对占成绩 40% 的期末论文偏好人工评分，93 人中有 75 人希望 AI 辅助而非取代评分者，69 人希望 AI 评分总由人工审查（[[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli 等人（2026）]]）。
- **信任与校准。** 透明的人类监督支持 [[trust-calibration|信任校准]] —— 学习者与教师知道有一位合格的人站在系统背后。
- **评审前可见的判据提高一致性。** [[calibrating-trustworthiness-llm-education-2026|Coscia 等人（2026）]] 发现，在评审者比较大语言模型回应时把可信度指标浮现出来，把评分者间一致性从 Krippendorff's alpha 0.3987 提到 0.4931，而进一步添加测量只带来认知负担而无回报。
- **有界能动性是一种架构，而非免责声明。** [[ilieva-agentic-genai-higher-education-2026|Ilieva 等人（2026）]] 面向 [[agentic-ai|智能体式]] 学习支持的 AGAI-HE 框架把监督建进模型本身，作为与教学工作流层和智能体支持层并列的第三层：它界定了可接受的 AI 使用、教学边界、[[privacy|隐私]] 规则、[[ai-use-disclosure|披露要求]]、来源核验、教师检查点、[[academic-integrity|诚信]] 机制与最终人类问责，并要求每一项智能体功能都能追溯到一个学习需求、评估目的或治理控制。它是“HITL 是一种系统设计属性而非政策声明”这一原则的具体实例化 —— 且作者对 130 名学生的感知研究提醒我们：在该监督下添加智能体编排，其本身并不比聊天机器人被感知为更好的学习支持。
- **人多久看一次本身就是一个设计决策。** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos（2026）]] 把监督的 *频率* 与其放置分离：高频 HITL 在每个 AI 输出到达学生前逐一评审，换来质量控制、快速错误检测、问责与持续校准，但可能抵消催生自动化的效率，并在评分高峰造成瓶颈；低频 HITL 抽查样本、只评审被标记的案例，可规模化并缩短周转，但有让错误在提交间不被察觉地传播的风险，削弱问责，并造成 [[equity-in-ai-education|公平]] 问题（若某些学生得到比他人更彻底的人工审查）。该框架不规定普适答案，而是要求这种权衡必须对照学科的错误容忍度、评估是 [[formative-assessment|形成性]] 还是 [[summative-assessment|终结性]]、队列规模与机构资源而显式作出 —— 并从通常的效率论证的相反方向设一个默认：以高频监督开始，只有当实质性证据显示可接受的可靠性、安全与公平时才缩减，让举证责任落在证明 *更少* 监督是安全的这一方。该论文还警告，这类监督背后的原则可能只是转移而非减少员工负担，使净效率增益仍是一个开放的实证问题。
- 已部署的人类监督可能意味着审批路由而非质量判断：在一个混合查询系统中，接受字段只编码了解决者是否与提问者不同，且没有任何测量评估答案质量（[[student-query-demand-hybrid-ai-support-2026|Gupta 等人（2026）]]）。

## HITL 在本知识库研究中的出现之处
- **自动化评估与评分：** HITL 系统在简答题评分（[[cong-confidence-asag-2026]]）、自我解释评估（[[llm-automated-assessment-student-self-explanations]]）与 [[automated-essay-scoring|作文评分]]（[[psyscore-essay-scoring-zpd-feedback]]）中把 AI 生成/评分与人类验证结合。[[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] 在高风险、手写的普通 [[chemistry-education|化学]] 评分中实例化了这一点：由于一个 [[multimodal|多模态]] 大语言模型的可靠性随回应格式而变（文本与化学反应答案可靠，而绘图与作图差于随机）且假阳性不被学生察觉，他们用置信度过滤器 —— 部分得分阈值、一个基于 [[item-response-theory|IRT]] 的风险阈值，以及按题型排除 —— 把原始 AI 分数转化为有选择的接受/暂缓策略，把不确定与图形题转交人类，作者把这一方法系于把教育 [[assessment|评估]] 中的 AI 指定为高风险并要求有记录的人类监督的 [[regulation|监管]] 框架。
- **反馈系统：** 要求有记录的人类监督。
- **国家评估中的操作性 HITL 评分（2026）：** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi 等人（2026）]] 在乌拉圭 Acredita EB 考试中把 HITL 实例化到机构规模。由于大语言模型评分器的错误系统性偏保守（评分偏低），工作流采用决策点逻辑，把人工审查只路由给通过/不通过结果取决于写作部分的考生 —— AI 标为通过的回应被放心接受，而 AI 标为不通过的（占 15.3–16.5% 案例）由专家评分者核验，把全量评分工作量削减 ≥50%，残余 AI 错误导致通过的风险仅 0.2–0.6%。这是作为资源分配策略的 HITL：人恰好在 AI 的保守偏见本会改变高风险结果之处裁决。
- **从量规自身分辨率推导暂缓阈值（2026）。** [[ai-assisted-instructor-supervised-grading-feedback|Cruz 等人（2026）]] 把 AI—教师容差设为 0.5 分 —— 无法把一份提交推过锚定带的最大差异 —— 并在 0.8 分处升级异常值，把 362 份提交中的 11 份（3.0%）转人工审查，然后才发布反馈。
- **标注者间一致性不是人类金标准。** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado 等人（2026）]] 把模型标注推进审计层，却从不以人工金标签验证它，使跨模型一致性（中位数 0.401）成为断言质量的代理，而共享的模型错误能在其中存活。他们的设计让监督保持诊断性而非装饰性：由于中间判断是显式的，评审者能看出哪些行为被触发，从而把一个被误读的行为与一条编码了构念本身的规则区分开来。
- **反馈系统：** 人在回路的反馈设计出现在 [[becerra-aicofe-feedback-2026|协作反馈系统]] 与 [[cong-confidence-asag-2026|置信度感知简答题评分]] 中。
- **课堂协作支持。** [[breideband-community-builder-cobi-2026|CoBi]] 让教师成为该 AI 系统中检测鼓舞性小组话语的评审者：教师明确偏好行动前后评审，而非会把他们“置于聚光灯下”的实时现场显示，而系统的课堂级（而非个体）聚合反馈恰是它能在 [[privacy|隐私]]、监控与学生 [[agency|能动性]] 的张力间穿行的原因。
- **题目与内容生成：** 除 CODE-GEN 之外，HITL 引导评估与 [[scaffolding|支架]] 的题目生成（[[code-gen|CODE-GEN]]、[[llm-difficulty-calibration-programming-exams-2026]]）。
- **智能体式与多智能体系统：** 随着 AI 变得更自主，HITL 监督是核心 [[agentic-ai|设计护栏]]（[[agentic-ai-pedagogical-best-practice-2026]]、[[guided-llm-scaffolding-independent-learning]]）。
- **按决策后果而非模型不确定性路由（2026）。** [[human-in-the-loop-ai-scoring-national-assessment-2026|一项 2026 年的操作性研究]] 对乌拉圭 Acredita EB 国家认证考试（两版，各约 5,000—6,000 名考生）的研究展示了当人在回路设计由决策后果而非模型不确定性驱动时的样子。一个 GPT-5 评分器在 15 个量规项目上与专家评分者一致的占 60—80%，但系统性偏保守，在 15.3%（2024）与 16.5%（2025）的通过/不通过比较中产生“人通过而 AI 不通过”的差异，且几乎从不反向。因此该框架对 AI 通过的结论照单全收，并把每一个可能改变考生结果的 AI 不通过结论路由给专家评审 —— 在此之前先跳过那些通过/不通过不取决于写作部分的考生 —— 把需要全量人工评分的回应削减至少 50%。另一项 2026 年的设计从另一侧划定边界：在一个多智能体 AI 标准化病人平台（[[ai-standardized-patient-scaffolding-medical-2026|Yang 等人]]）中，人类监督只为 AI 被判定不适合决定之事保留，由教师与人类标准化病人提供情境解释、补救与准备度判断，且系统被明确禁止自主判定 [[medical-education|临床]] 能力。

## 综合

人在回路设计不只是一种安全措施 —— 它是一种 **资源分配策略**。前沿问题不是 *是否* 纳入人，而是其判断在管线中何处具有最高边际价值。最有效的 HITL 系统把稀缺的人类专长集中于自动化系统最弱之处（干扰项设计、解释性反馈、边缘案例裁决、伦理判断），并自动化其余 —— 在规模化生产的同时保住质量、安全与信任。
- **人类监督在 AI 辅助工作中持续存在。** [[scaffolding-systematic-reviews-2026|系统综述研究]] 发现，AI 自动化工具减轻了程序性负担（如筛选），但解释性决策仍需大量人类监督；[[kim-ai-andragogy-2026|成人教育学研究]] 把人在回路（共享心智模型、共创）作为核心 AI 设计原则。
- **机构规模的人在回路。** Qin（2026）描述了岭南大学如何发展一种把伦理推理、批判判断与社会责任置于前台、同时使 [[generative-ai|生成式 AI]] 访问民主化的人在回路教育模式。该模式把人类定位为判断与价值的所在，即使 AI 被嵌入 [[curriculum-design|课程]] 的每个角落 —— 这是人在回路原则在 [[higher-ed|高等教育]] 中的具体 [[governance|机构]] 实例化。
- **学习者作为自己辅导的在回路之人。** [[ko-hughes-vsd-student-centered-its-2026|价值敏感设计]] 与社区学院学生一起为智能辅导系统（ITS）产出了一整套面向学习者的 HITL 特性（对重新评估与评审的控制、个性化目标/节奏、供复习的书签、对掌握度的信心确认，以及一个 AI 辅助参与层级控件），把学生定位为辅导回路的主动控制者，而非自适应决策的被动消费者。该研究还发现教师意见分歧：这类学习者控制是否会损害系统引导学习路径的完整性 —— 这是关于人类（学习者 对 教师）判断在何处增加最多价值的更广泛资源分配问题的一个实例。
- **从 AI 升级到专家是一个人在回路的动作。** SCAN 框架按学习者距离把任务分配给四种生成式 AI 模式，并把一个正确分配的 AI 任务内的被动 [[student-engagement|参与]] 读作一个错配技能的信号，据此把学习者从 AI 转向专家协助，并以人作为认识论审计者（[[ai-teammate-task-distribution-medical-training-2026|Tsim 等人（2026）]]）。
- **对 AI 采用建议的监督。** 由于持怀疑态度的用户所咨询的 [[conversational-ai|对话式 AI]] 系统可能倾向于鼓励采用，人类监督与独立评估不可或缺。一项显示多数前沿模型把持怀疑的农村 [[k-12|K-12]] 员工引向 [[student-engagement|参与]] 的审计，凸显了对透明、可审计的 AI 建议的需求，而非不加批判的依赖。

## 关联概念
- [[pedagogical-patterns]] — 人类评审在受测序列中的位置，以及从未被单独测过的东西
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — 自动化支持流中的人类判断

## 关联文章
- [[lee-learner-question-types-ai-education-2026]] — 专家标注的问题分类：人类治理标注、增强与错误分析（Lee、Atif & Kang 2026）
- [[ilieva-agentic-genai-higher-education-2026]] — 人类监督与治理作为智能体式生成式 AI 课程设计的第三层（Ilieva 等人 2026）
- [[ko-hughes-vsd-student-centered-its-2026]] — 以学生为中心的智能辅导系统的价值敏感设计（学习者处于辅导回路中）
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 大规模国家写作评估中的人工辅助 HITL 评分（Curi 等人 2026）
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN 框架：重思医学培训中的 AI 任务分配（Tsim 等人 2026）
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — 大语言模型不像人类那样给作文评分（Mathew 等人 2026）
- [[kim-ai-andragogy-2026]] — 支持成人教育学的 AI 应用（Kim 等人 2026）
- [[scaffolding-systematic-reviews-2026]] — 以导师制与 AI 为系统综述搭建支架（Wang 2026）
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI 辅助的教师监督评分与反馈
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI 能为多样的学生画像提供恰当支持吗？一项大规模评估
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — 面向临床访谈训练的脚手架导向多智能体大语言模型系统的评估
- [[tripartite-feedback-framework-ai-assessment-2026]] — 三方框架：按认识论地位对反馈分类与 AI 介入的五条边界原则（Venetsanos 2026）
- [[adapted-stories-social-story-intervention-2026]] — 面向特殊教育的 AI 辅助 Social Story 干预：AdaptED Stories 的设计
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors：面向教育对话可审计编码的基于断言的模式
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — 从情感分类到可操作且负责任的反馈：2015—2026 年教学学生评估中自然语言处理的范围综述与证据图

- [[llm-grading-assistants-public-health-2026]] — 相同大语言模型评分在不同日子的重跑只在 Krippendorff's alpha 0.625 上复现
- [[when-students-prefer-ai-scoring-feedback-2026]] — 本科生对高风险工作偏好人工评分，并把 AI 当助手而非替代
- [[student-query-demand-hybrid-ai-support-2026]] — 学生实际问什么：混合支持系统中的需求结构与自动化潜力
