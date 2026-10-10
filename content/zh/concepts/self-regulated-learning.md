---
connected_resources: [process-feedback]
title: 自我调节学习
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm, personalized-learning]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/self-regulated-learning
source_updated: "2026-10-07T14:30:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> 自我调节学习（self-regulated learning，SRL）把学习者描述为能以成功的方式塑造并发展自身认知与行为行动的主动参与者。人工智能工具既可以[[scaffolding|为]] SRL 的发展搭支架，也可能通过移除那些建构专长的调节要求，无意中把它短路。（[[scheu-mobile-chatbot-journaling-motivation-2026]]）（[[stanford-evidence-base-ai-k12-2026]]）纵向证据使这一区分更锐利：围绕人工智能工具进行反思性使用，能预测批判性思维（β = 0.43），但不能预测知识增益，而单纯拥有工具访问权，两者都不改变。（[[melanou-genai-learning-dynamics-longitudinal-2026]]）

## 值得思考的问题

- SRL 描述学习者通过三个阶段主动管理自己的学习：前思（目标设定、规划、自我效能）、表现（策略、自我观察）与自我反思（评价、适应）。在读之前，哪一个阶段你实际做得很好——而哪一个即使明知该做也会跳过？
- 本页的核心张力：人工智能可以为自我调节搭支架，也可能通过移除那些建构专长的调节要求而把它短路。一个让任务变容易的工具，怎么会同时让你成为更弱的自我学习调节者——你能在自己的使用中感觉到这种区别吗？
- 学生常表现出一种"产出赤字"：他们拥有自我调节的知识，却不能自发地运用——让聊天机器人"提取要点"，却把规划与监控整个跳过。你是否也抓住过自己做着认知上等价的举动，即使明知更好的策略？
- 当支持在场时，你自己的判断可能退场：在一项轨迹数据研究中，决定所选修订策略的是可用的支持，而非学习者元认知的准确度。如果外部帮助盖过了你对自己学习的判断，你会刻意把哪一种判断握在自己手里？
- 研究发现一种"[[trust-calibration|校准]]缺口"：学生可以在使用生成式人工智能时*感知*到更多学习，却保留得更少——尽管保持率更弱，仍偏好人工智能而非记笔记。如果你在使用某工具时感到高效，你怎么才能发现自己其实并没多学到？
- 生成式人工智能究竟是支架、捷径还是伙伴，更多取决于学习者的调节能力而非工具本身。但本页也显示，自我调节*缓冲*却*不能抵消*深度认知卸载的伤害。这一"缓冲但不抵消"的告诫，对设计更好的人工智能工具意味着什么？
- 在阅读前先设一个目标：挑一件你经常用人工智能做的任务，事先决定在三个阶段（前思、表现、反思）中你要刻意保护哪一个不被自动化。什么结果会告诉你它奏效了？

## 引言

SRL 是学习者通过三个相互关联的阶段主动管理自己学习的过程：

1. **前思：**目标设定、策略规划、[[self-efficacy]]信念
2. **表现：**策略部署、自我观察、[[cognitive-psychology|注意]]聚焦
3. **自我反思：**[[self-assessment]]、因果归因、适应

熟练的自我调节学习者运用认知策略以提高成功率，并借助[[metacognition]]持续精修自己的学习过程。（[[scheu-mobile-chatbot-journaling-motivation-2026]]）

在一门技术中介课程中的实证工作确认了这些阶段的关联：在一项为期八周的自适应随机过程研究（194 名学生）中，行动前阶段的任务价值、自我效能、目标取向与积极情绪预测了行动阶段的调节行为，而消极情绪阻碍之；行动后阶段的满意度又前馈进下一个行动前阶段（[[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh 与 Fromm（2026）]]）。

一项对 84 项"人工智能–SRL"研究的系统映射发现，研究集中于高等教育学生以及自我调节的元认知与认知侧面，动机维度探索不足，且超过三分之一的研究完全没有指明任何 SRL 理论（[[banihashem-ai-srl-systematic-mapping-review-2025|Banihashem 等（2025）]]）。

关键在于，围绕人工智能的 SRL 受*感知*与行为共同塑造：[[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz 等]]证明，学生是否感知到反馈来自人工智能还是人类，会显著影响他们的自我调节学习与修订行为——这提醒我们：人工智能的社会性框定，而不只是其内容，会改变学习者围绕它的调节方式。

有一种失败模式发生在调节开始之前：生成式人工智能辅助的学习拖延——尽管有真实的使用意图，仍不必要地迟迟不开始需要生成式人工智能支持的工作。在 1,243 名中国本科生中，更频繁地使用生成式人工智能与更少的拖延相伴（β = −0.195），而学习生成式人工智能的焦虑强化了"意图–拖延"联系（[[genai-learning-procrastination-planned-behavior-2026|Li 等（2026）]]）。

生成式人工智能在循环中的进入点决定其效应：把 Zimmerman 的前思、表现、反思阶段映射到人工智能中介的环境，一个"共同能动性"（co-agency）框架论证，进入点决定了工具是放大还是侵蚀学习者的控制感，而卸载只有在决定是刻意而非例行时才支持转化性学习（[[reclaiming-epistemic-agency-co-agency-2026|Poudyal（2026）]]）。

一项针对 434 名特殊教育本科生的横断面调查测量了这样一条链：[[generative-ai|生成式人工智能]]素养与生成式人工智能辅助的自我调节学习行为正相关（总 B = 0.701），主要经由学习[[agency]]（B = 0.345）而非挑战性情绪（B = 0.061）传导（[[genai-literacy-srl-special-education-2026|Yang 等（2026）]]）。

## 面向 SRL 的数字支持

### 学习日志

学习日志是一项有前景的 SRL 干预：通过反思自己的学习过程，学生提高对认知的意识并强化调节能力。关键设计考量：

- **结构重要：**开放式日志常常产生浅薄的条目；有引导的提示与范例模型能改善深度
- **动机衰减：**移动日志应用常见在几天后[[student-engagement|投入]]迅速下降
- **支架的权衡：**替学生撰写反思的人工智能辅助会破坏 SRL 实践；只组织提示而不撰写内容的辅助则保留它

### 向教师传达 SRL 画像的仪表盘

[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain 等（2026）]]把数字 SRL 支持延伸到教师一侧：他们的[[learning-analytics]]仪表盘（DashED）在混合课堂中向教师传达机器学习导出的自我调节学习画像，而教师如何依据这些画像行动依情境而定。在使用中，翻转课堂（大学）教师遵循顺序式探索，偏好课程层面的调整并在课上展示[[visualization|仪表盘]]；而职业院校教师反复回看汇总页，把该工具主要用于个别辅导。教师所提议的行动由被呈现的内容与他们的教学层级塑造，而非图表类型——大学教师偏好每周测验与课程调整，职业院校教师偏好直接的、个体化的辅导。这把这个仪表盘定位为教师调节其教学的支架，其设计需求因情境而异，而非存在单一最优界面。

面向学生的对应物则稀少得多：一块向 46 名中学生展示他们自己的生成式人工智能提示及其与模型回复文本重叠度的仪表盘，全班只有约三分之一的人打开过，使"自愿暴露"而非可视化本身成为约束性瓶颈（[[learning-analytics-genai-secondary-writing-2026|Fong 等（2026）]]）。

### Scheu 等的 2×2 实验（2026）

在一项对 179 名学生为期 22 天的随机现场实验中，比较了两条设计原则：

| 原则 | 机制 | 对 SRL 的影响 | 对动机的影响 | 对投入的影响 |
|---|---|---|---|---|
| **基于范例的课程** | 为期 7 天的[[curriculum-design|课程]][[teacher-role]]反思日志，通过示范性回复来建模 | 提高感知胜任力与愉悦感 | **正向** | 持续正向 |
| **[[llm]]日志助手** | GPT-3.5 总结草稿、提出澄清问题、建议改写 | 未测量对 SRL 技能的直接效应 | **无效应** | 随时间上升（[[feedback|反馈回路]]） |

**关键洞见：**该课程通过[[transfer-of-learning|技能迁移]]同时改善了 SRL 技能*与*内在动机，而助手只改善了投入，未影响动机。（[[scheu-mobile-chatbot-journaling-motivation-2026]]）

## 人工智能工具与 SRL–动机互馈环路

SRL 理论的一条基础原则是：自我[[regulation]]技能与[[motivation]]构成**互惠关系**：

- 更好的 SRL → 更成功的学习 → 更高的自我效能 → 更强的动机
- 更高的动机 → 更努力的投入 → 更好的 SRL 实践

人工智能工具可以在不同节点进入这一环路：

- **SRL 优先的设计**（例如结构化课程、渐退式提示、反思提示）：通过建构真正的技能来强化环路
- **投入优先的设计**（例如自动补全、内容生成）：可能在不进入动机环路的情况下提升行为投入，带来工具依赖的风险

### 把对生成式人工智能的策略性调节当作 SRL

[[ai-anxiety-strategic-regulation-writing-2026|Kim（2026）]]把[[writing-education|学术写作]]中有效的[[generative-ai|生成式人工智能]]使用重新框定为**策略性调节**——一种已付诸行动的 SRL 实践：验证、修订、选择性采纳或拒绝人工智能输出。在一项对 107 名学生的[[mixed-methods-research|混合方法]]研究中，更高的[[anxiety-and-stress|人工智能焦虑]]与验证和修订正相关（β=.24），而评价性能力预测主动修订与选择性整合（β=.46）。学生聚为四种调节类型——不加批判的依赖（18.7%）、选择性整合（34.6%）、评价性转化（31.8%）与策略性拒绝（14.9%）——这表明[[ai-literacy]]在[[higher-ed]]中起的作用与其说是"接受"，不如说是扎根于[[evaluative-judgment]]与[[ethics|伦理]]责任的调节胜任力。这把 SRL 定位为区分批判性与不加批判的人工智能使用的核心机制。

对工具的治理本身是一个可测量的侧面：一项针对中国 EFL 学习者的两波验证（EFA N = 305；CFA N = 342）分离出六个调节维度，并把*环境调节*——核查生成输出的准确性、筛选被推荐的资源、设定依赖的边界——单独列为一个维度（[[genai-srl-l2-writing-scale-2026|Wang、Zhang 与 Zhang（2026）]]）。

先分类，再委派：[[scan-framework-task-assignment-generative-ai-2025|Tsim 与 Gutoreva（2025）]]把自我调节变成一套逐任务的规程——把每个子任务标记为替代（Substitute）、补充（Complement）、辅助（Aid）或不可谈判（Non-negotiable），在一则简短的元认知说明中为其辩护，并保存提示、草稿与人工修订的审计轨迹——循环重复，使一项任务的分配为下一项提供信息。
**把互动本身当作调节的对象。**[[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström 与 Palmqvist（2026）]]从另一个方向记录了同样的调节要求：在一项八轮的演示中，学生用聊天机器人准备一项[[summative-assessment|考试]]的带回家作答，人工智能的默认输出停留在 SOLO 分类法的*[[quantitative-research|量化]]*、多结构一端——打磨得可以交卷，教学上却很单薄——只有经过反复的元层级干预（"这信息量太大了，能压缩一下吗？"）之后，才抵达一个可用的三步学习循环。他们的结论是：有成效的使用要求"恰好是这项工具本应支持的那些自我调节技能"：学习者必须设定增量目标、请求难度调整，并在学科内容之上反思自己尚未理解之处。他们把这一能力命名为[[ai-literacy|人工智能互动素养]]，并把脱离工具视为一种正当的调节决定，而非坚持力上的失败（[[metacognition]]）。

- **满意不等于自我调节。**[[aigc-affordance-student-self-regulation-2026|Liang 等（2026）]]调查了 689 名产教融合项目的本科生，检验了一个序列中介模型：人工智能生成内容的感知可供性提高 AIGC[[self-efficacy]]（beta = 0.583），并经由它提高学习[[motivation]]（beta = 0.565）与自我调节学习（beta = 0.250），其中动机是 SRL 最重的单一预测因子（beta = 0.527）。承重的负面结果与这些路径并存：人工智能评估反馈的质量强烈预测了满意度（beta = 0.712），但不预测自我效能（beta = 0.131），而满意度对自我调节学习没有显著影响（beta = 0.032）。因此，一个讨人喜欢、运转良好的助手，并不能证明调节得到了改善——机制经由信心与动机运行，而不经由学习者对工具的体验。
### 面向生成式人工智能的反思作为 SRL

[[5p-reflection-model-genai-2026|5P 反思模型（Kadel 等，2026）]]把结构化反思重新置于生成式人工智能时代的中心，作为一种已付诸行动的 SRL 实践。因为学习者日益与人工智能共同创造意义，传统反思模型难以验证学生反思的真实性，所以 5P 模型（目的 Purpose、过程 Process、产物 Product、陷阱 Pitfalls、计划 Plan）融合了由前思驱动的目标设定、行动中的反思（记录提示与迭代）、对行动的反思（对照外部来源验证概率性输出）、一个针对[[hallucination-risk|幻觉]]、[[academic-integrity|抄袭]]与[[cognitive-offloading|过度依赖]]的显式陷阱阶段，以及一个前瞻性的计划——并把情绪监控嵌入全程。其"过程重于产物"的哲学把对[[human-ai-collaboration|人机互动]]的结构化记录，当作保住真实性、[[agency]]与[[metacognition|元认知]]深度的调节要求，把面向生成式人工智能的反思定位为自我调节的支架，而非其替代品。

## 与辅导专门设计的关系

[[stanford-evidence-base-ai-k12-2026|面向辅导的人工智能]]与 SRL 优先的设计一致：它提供保留[[agency]]并要求策略性自我调节的渐退式支架。通用人工智能往往把调节要求整个移除。（[[stanford-evidence-base-ai-k12-2026]]）

例如：
- Bastani 等的辅导专用[[conversational-ai|聊天机器人]]保留了逐步推理（SRL 要求）
- 通用 GPT 变体则直接给出答案（绕过 SRL）

## 跨情境的证据

- **混杂的证据与校准缺口。**一项对 PreK-12 生成式人工智能研究的快速综述发现，受支持任务中获得的元认知增益，在支持撤除后往往不能持续，且生成式人工智能能在持久学习缺席的情况下提高[[self-report-measures|感知学习]]（即校准缺口——尽管保持率更弱，学生仍偏好生成式人工智能而非记笔记）。学生需要显式的、适合其发展阶段的训练，来决定什么该委派、何时独立努力才要紧。（[[young-people-learning-generative-ai-rapid-review-2026]]）
- **[[agentic-ai|能动性]]主动性对自我调节的张力。**[[agentic-ai-pedagogical-best-practice-2026|Woollaston 等（2026）]]指出，代理自动完成任务的部分越多，学习者所做的自我调节认知工作就越少——因此设计应让学习者控制代理的启动（动态的、渐退的支架），以保住自我调节能力，而不是把它外包出去。
- **自我调节塑造人工智能编程助手的使用。**[[computational-thinking-aica-2026|一项对人工智能编程助手的研究]]发现，高[[computational-thinking]]的学生表现出更强的自我调节连贯性（规划–执行–自我反思），并用 AICA 来理解代码；而低 CT 学生用它即时检索答案。
- **SRL 与[[online-teaching-and-learning|在线学习]]中更低的数字分心共现。**[[decreasing-digital-distraction-college-online-learning-2026|Shi 等（2026）]]用无监督数据挖掘考察了 530 名大学生，发现 SRL 策略——目标设定、环境结构化与时间管理——在[[higher-ed|在线学习]]中与更低的数字分心最为一贯地共现，并与"学习者–讲师"和"学习者–内容"的投入一同出现。该发现把具体的 SRL 训练定位为一项高杠杆的专注在线学习干预。
- **元认知意识，而非工具访问权，是自适应 STEM 表现最强的驱动因素。**[[alatoai-ai-learning-environments-self-regulation-2026|Alatoai 与 Alshahri（2026）]]在沙特阿拉伯编制并验证了 AI-STEM-MLCS（649 名中学生；CFI = 0.983，RMSEA = 0.019；McDonald's ω = 0.888 到 0.905），发现其四个维度解释了自我调节学习表现中 68% 的方差（R² = 0.68）。基于人工智能的元认知意识是最强的预测因子（β = 0.38，p < 0.001），其次是认知迁移与适应性（β = 0.29，p = 0.008）和人工智能增强的自我调节学习（β = 0.21，p = 0.040），而创造性与批判性人工智能–STEM 推理不预测该效标（β = 0.14，p = 0.135）。作者把这一模式解读为证据：[[adaptive-learning|自适应]]反馈主要是通过促使学习者检视错误、重新校准并复用策略来提高 STEM 表现的，因此该工具作为"定位元学习缺口"的诊断手段，比作为单一全局总分更好。它是一个仅在一个国家体系中验证过的[[self-report-measures|自陈]]量表，因此这些系数是暂定的。
- **外部支持可以绕过学习者自己的元认知判断。**[[iqbal-human-genai-support-essay-revision-2026|Iqbal 等（2026）]]跟踪了 87 名 EFL 学生在[[generative-ai|生成式人工智能]]（ChatGPT 4.0）、人类专家或无支持条件下修订一篇论文。支持条件是学生所选修订策略最强的相关因素（Cramér's V = 0.668），远超来自前一项写作任务的延续（V = 0.333），而元认知判断准确度（p = 0.172）、写作技能（p = 0.261）与[[motivation]]（p = 0.683）都不相关。元认知判断只在没有支持可用时才与策略相关（置换检验 p = 0.0460）。有生成式人工智能支持的学生获益最多（在减少求助策略下平均约 4 分，而同一策略在人类专家支持下为 −0.5 分），然而没有任何修订策略与分数变化相关（H(3) = 3.895，p = 0.273），因此增益来自工具而非更好的自我调节。作者的取向是：生成式人工智能应促使学习者反思自己的修订策略，而不是直接提供帮助。
- **反思性使用追踪批判性思维，而非知识增益。**[[melanou-genai-learning-dynamics-longitudinal-2026|Melanou 等（2026）]]在为期九周的课程中跟踪了三个平行的商业信息学班级（N = 87），每组的知识都在上升（F(1, 50) = 29.87，p < 0.001，η²p = 0.374），且没有人工智能优势、没有时间×组交互、没有马太效应（F(1, 48) = 2.46，p = 0.124；BF01 = 8.70）。反思性使用（在采纳人工智能输出前核查来源并加以验证）在人工智能条件下显著更高（3.72 对 2.82；F(1, 40) = 20.21，p < 0.001），并预测批判性思维（β = 0.43，p < 0.001）而非知识增益——后者由相关认知负荷预测（β = 0.51，p = 0.001）。实践解读是：人工智能访问权本身不是一种干预，其元认知回报在推理质量上先于在测验分数上显现。

## 大语言模型中介的 SRL：支架、捷径还是伙伴？

一组 Learning Letters 研究（2026）汇聚在一个核心张力上：[[generative-ai|生成式人工智能]]可以支撑、短路或与自我调节结成伙伴，取决于设计以及学习者如何调节它的使用。证据指向 SRL 本身——而非工具——才是决定性变量。

- **[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg 等]]**发现，大语言模型被编织进一个*分层的[[help-seeking]]生态*，而非取代人类支持：学生先独立尝试任务，然后把 ChatGPT 当作低门槛的第一步，找同伴协商概念，就高风险问题请教讲师。他们偏好**工具性求助**（提示、分步指导）胜过**执行性求助**（直接答案），行使有选择的[[trust]]并对照课程材料验证输出——这一四阶段过程（判断是否需要帮助、选择向谁求助、决定帮助的类型、评判所获帮助）可以被测量并教授。
- **[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif 与 Dickson-Deane]]**把生成式人工智能的使用框定为**[[cognitive-offloading]]**，它可以是*搭了支架的*（学习者批判并改编人工智能输出，保有[[agency]]与意义建构），也可以是*替代性的*（学习者几乎不加验证就接受输出，把控制权让给工具）。在一项对 267 名 IT 研究生的研究中，同一工具可以支撑也可以短路 SRL，取决于学习者策略——自信的用户在目标设定与监控中表现出能动性；较不自信的用户则把生成式人工智能看作捷径或不当行为。
- **[[lim-bannert-student-regulation-genai-chatbot-2026|Lim 与 Bannert]]**具体展示了风险：学生自愿使用了一款生成式人工智能聊天机器人（73%）并在论文上得分更高，但他们把理解与综合卸载给了它（让聊天机器人"只提取主要意思"），几乎没有进行任何规划或监控——把关键的调节决策外包了出去。这反映了一种**产出赤字**：学生拥有 SRL 知识，却不能自发地部署它，因此生成式人工智能工具应在查询显示卸载时提示反思（一个监控支架）。
- **[[song-genai-learning-partner-srl-over-time-2026|Song 等]]**论证，SRL 既是一种**稳定的性向**，也是一种**动态的状态**：个体基线前后一致，但元认知知识与[[well-being]]在一学期内系统性下降，由评估截止日期驱动。他们表明，当生成式人工智能获得个人的、时间性的与情境性的数据时，它可以充当依情境而知的**[[pedagogical-agent|学习伙伴]]**——支持学生而不取代他们的努力。这反驳了仅凭基线性向做"一次适用所有人"式[[personalized-learning|个性化]]。
- **[[de-barba-srl-genai-2026|de Barba]]**从理论上扩展 SRL，论证该领域已收窄到面向任务的调节，以及教育技术中可优化的行为代理。该文提出一个跨尺度的**学习者自主性**说明——调节（任务之内）、整合（跨时间与情境）、定位（批判性地相对于框定学习的条件）——作为算法中介环境的设计取向。
- **自我调节缓冲但不能抵消卸载的伤害。**[[layer-sensitive-cognitive-offloading-writing-2026|Chen（2026）]]显示，在生成式人工智能辅助的写作中，自我调节式写作削弱——但不消除——深度[[cognitive-offloading]]与无人工智能的独立结果之间的负向关联：卸载×SRL 的交互为正（B = 0.22），把伤害的斜率从 −0.54（低 SRL）拉平到 −0.33（高 SRL），但没有抵消它。一项"有限支持"条件——把委派限度与强制性反思配对——产生了最强的独立表现，证据是：元认知调节部分保护了学习者，却无法完全补偿把认知工作本身委派出去。

**"租用"在 Winne 模型中的位置。**[[rented-self-decoupling-performance-becoming-2026|de Barba（2026）]]把机制映射到 SRL 上，视之为系统替学习者执行的操作：注意、监控与评价性判断由工具行使，僵局靠搜索而非学习者自己的"若–则，否则"选择来消解，而学习者据此判断的标准是借来的而非自建的。学习者相信自己拥有、实则由工具持有的能力——*隐性租用*——会压制本应触发调节的错误信号；十条命题指明了该检验什么，包括领域适应中的更大代价，以及标准向模型自身参照点的漂移。

总体教训：**SRL 是区分批判性与不加批判的人工智能使用的核心机制。**生成式人工智能究竟是支架、捷径还是伙伴，取决于学习者的调节能力，以及工具是否被设计成保留（而非移除）那些建构专长的调节要求。

哪种支持在场，决定哪个中介承载这一关联：在 3,003 名中国职前教师中，感知到的人工智能工具支持主要通过人工智能[[self-efficacy]]（占该路径总效应的 60.88%）通向创新胜任力，而感知到的学校智慧环境支持主要通过自我调节学习（29.64% 对 18.60%）（[[preservice-teachers-ai-support-innovative-competence-2026|Liu 等（2026）]]）。

## 启示

- **对日志/聊天机器人工具：**把 SRL 教学（基于课程）与可选的写作支持结合起来，以兼得动机与投入上的增益
- **对工具设计者：**把评价设为必需步骤，而非可选项。Iqbal 等发现，决定学生所用修订策略的是可用的支持，而非学习者的元认知判断，且生成式人工智能带来的分数增益并非来自更好的调节；Melanou 等发现，反思性使用预测批判性思维，而单纯工具访问权不能。那些要求学习者验证、比较并重新制定策略的互动，才是承载学习价值的互动。
- **对讲师：**把基于人工智能的元认知意识当作第一杠杆，并显式核查。Alatoai 与 Alshahri 发现它是自适应 STEM 表现最强的预测因子（β = 0.38），迁移与适应性次之（β = 0.29），因此让学生检视错误、并把某一策略带入新问题情境的活动，比泛泛地提示批判性或创造性推理做得更多。
- **对[[educational-policy-ai|人工智能政策]]：**采购标准应询问某工具是在发展还是在取代自我调节
- **对[[research-methods-aied|研究者]]：**测量 SRL 结果（而不只是即时表现）的长期研究是必要的；Melanou 等显示了这种耐心的回报，因为一学期的反思性使用推动了批判性思维（β = 0.43），却没有推动知识增益。

## 模拟游戏中的会话代理与 SRL

- **游戏中支持自我调节学习的会话代理。**Wenzel、Geiger 与 Liening（2026）表明，一款商业[[simulation]]游戏中的人工智能会话代理（Lara）可以通过基于指标的形成性（[[formative-assessment|formative]]）反馈、按需指导与结构化反思来支持自我调节学习——这针对的是模拟游戏常见的局限：提供的形成性反馈与反思提示有限。面向师范生和 BSG 参与者的评估报告了该代理在认知与[[community-of-inquiry|社会]]存在感及其自我调节支持上的积极感知。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[metacognition]] — SRL 所依赖的认知监控
- [[self-assessment]]
- [[self-efficacy]] — 一种驱动努力的前思阶段信念
- [[scaffolding]] — 保留调节要求的渐退式支持
- [[feedback]] — 学习者围绕其进行调节的输入
- [[feedback-literacy]] — 对反馈采取行动的能力
- [[help-seeking]] — 一种策略性 SRL 行为
- [[motivation]] — 自我调节的互惠伙伴
- [[cognitive-offloading]] — 人工智能移除调节工作时的风险
- [[generative-ai]] — 既能支撑也能短路 SRL 的技术
- [[ai-literacy]] — 人工智能使用中的调节胜任力
- [[self-directed-learning]] — 更宽的自主性构念
- [[agency]] — 学习者带着意图行动的能力，是调节、整合与定位的核心
- [[adaptive-learning]] — 可以支持调节的个性化
- [[formative-assessment]] — 供调节之用的持续反馈
- [[learning-by-teaching]] — 一种建构自我调节的策略
- [[intelligent-tutoring]] — 为 SRL 搭支架的系统
- [[llm]] — 人工智能工具的底层模型
- [[retrieval-spacing-interleaving]] — 学习者所做的排程、自我测验与学习策略选择
- [[cognitive-surrender]]

## 关联文章

- [[aigc-affordance-student-self-regulation-2026]] — AIGC Affordance 与学生自我调节
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — 人工智能互动素养：驾驭一个聊天机器人，要求它本应支持的 SRL（Brunnström 与 Palmqvist，2026）
- [[5p-reflection-model-genai-2026]] — 面向生成式人工智能时代的 5P 反思模型（Kadel 等，2026）
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 生成式人工智能辅助写作中的层次敏感型认知卸载（Chen，2026）
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[de-barba-srl-genai-2026]] — 跨尺度的学习者自主性：调节、整合、定位
- [[rented-self-decoupling-performance-becoming-2026]] — 被租用的自我：租用映射到 Winne 的 SRL 模型，附十条命题与学习者内指标
- [[song-genai-learning-partner-srl-over-time-2026]] — 生成式人工智能作为依情境而知的、随时间演进的学习伙伴
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — 学生如何用生成式人工智能聊天机器人调节学习
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — 支架还是捷径？生成式人工智能在 SRL 中的双重角色
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — STEM 中的大语言模型中介求助：分层、工具性且经验证
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — 生成式人工智能反馈与 SRL：感知来源要紧
- [[ai-anxiety-strategic-regulation-writing-2026]] — 从人工智能焦虑到策略性调节
- [[young-people-learning-generative-ai-rapid-review-2026]] — 生成式人工智能在元认知/自我调节上的混杂证据
- [[agentic-ai-pedagogical-best-practice-2026]] — 能动性人工智能与自我调节的张力
- [[decreasing-digital-distraction-college-online-learning-2026]] — 在线学习中的 SRL 与更低的数字分心（Shi 等，2026）
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — 在混合课堂中把机器学习发现变得对教师可及
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN：一个面向学习者的任务识别、论证与任务后反思环路
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[alatoai-ai-learning-environments-self-regulation-2026]] — 一项用于自适应 STEM 学习的人工智能支持自我调节的验证工具，以元认知意识为最强预测因子
- [[iqbal-human-genai-support-essay-revision-2026]] — 在一次论文修订实验中，支持条件而非元认知判断驱动了修订策略的选择
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — 纵向：反思性人工智能使用预测批判性思维而非知识增益，且无马太效应

- [[genai-literacy-srl-special-education-2026]] — 生成式人工智能素养主要经由学习自主性与自我调节学习行为相关
- [[preservice-teachers-ai-support-innovative-competence-2026]] — 支持类型翻转了中介：人工智能自我效能对自我调节学习
- [[genai-learning-procrastination-planned-behavior-2026]] — 生成式人工智能辅助的学习拖延：一种被焦虑强化的意图–行为缺口
- [[genai-srl-l2-writing-scale-2026]] — 一项经验证的六维度二语写作生成式人工智能–SRL 量表，环境调节作为其独立维度，并有 12 题的蚁群优化简版
