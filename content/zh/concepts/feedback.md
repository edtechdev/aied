---
connected_resources: [clarity, pedagogical-promptbook, snorkl]
title: 反馈
created: "2026-08-15T19:02:13-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, feedback-literacy, formative-assessment, peer-assessment]
connected_faqs: [developing-ai-tutor, ai-feedback-at-scale]
confidence: high
translation_of: concepts/feedback
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

> **反馈（feedback）** —— 提供给学习者、关于其表现或理解情况的信息，旨在弥合当前表现与期望表现之间的差距。在[[ai-education|教育中的人工智能]]领域，反馈已成为一个核心且迅速转变的主题：[[ai-technologies|AI 系统]]如今生成反馈、递送反馈，甚至教学生如何使用反馈，重塑着反馈过程的每一个阶段。

## 值得思考的问题

- 反馈常被想象为递交给学习者的信息，但[[research-methods-aied|研究]]认为，只有当学习者理解并据以行动时，它才算"真正"的反馈。如果反馈是一种关系而非一条消息，我们的递送方式应当发生什么改变？
- 学生对于反馈来自 AI 还是人类的感知，会改变他们从中学到多少。你认为为什么反馈的*来源*如此重要——这对你所在情境中的 AI 生成反馈意味着什么？
- 即时反馈可能是个陷阱："正确答案陷阱"表明，只是照抄订正的学生学得更少。即时反馈何时有帮助，何时又会短路掉它本想支持的学习？
- 研究甚至发现，一段精心设计的反馈序列——鼓励、提示、答案——本意是培养自主性，却尽管提升了[[student-engagement|投入度]]而实际*损害*了学习。如果学生对让他们学得更少的反馈感觉良好，我们该优化什么？
- 反馈被描述为一个有组成部分的系统：反馈回路、提供质量、学习者的接收能力，以及评估情境。如果你想改进自己课程中的反馈，你会先修哪一部分，为什么？

## 引言

这是知识库中所有反馈相关概念的总括概念。反馈位于评估与学习的交汇处：没有反馈，评估只能测量表现而不能改进表现；有了有效的反馈，评估本身便成为一次学习事件。知识库将反馈视为一个具有多个侧面的**系统**——反馈自身的质量（[[ai-feedback-quality]]）、弥合学习差距的回路、学习者使用反馈的能力（[[feedback-literacy]]），以及反馈所处的评估情境（[[formative-assessment]]、[[peer-assessment]]、[[automated-assessment]]）。

- **[[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz 等人]]**表明，学生对反馈*来源*（AI 与人类）的感知塑造了从[[generative-ai|生成式 AI]]反馈中的自我调节学习——这是对反馈有效性论断的一个关键限定。
- **[[nazaretsky-feedback-source-bias-2025|Nazaretsky 等人（2025）]]**将来源与内容分离：472 名洛桑联邦理工学院（EPFL）学生先盲评自己作品上内容可比的人类反馈与 GPT-4.0 反馈，在来源披露后再评一次，多数人无法可靠区分两者（472 人中 287 人猜对）。标签揭示后，AI 版本评分下降而人类版本上升——在真实性（Genuineness）上差异显著（p < .01）——提供者可信度也清晰分离（人类 μ = 3.28，AI μ = 2.25，Cohen's d = 0.57）。由于两个版本在正确性与认知质量上可比，这一偏见附着于提供者而非文本。

## 反馈系统

反馈最好被理解为一个由相互作用的组成部分构成的连通系统，而非单一事件，知识库将每一部分都记录为独立的概念：

- **反馈回路** —— 反馈弥合当前表现与期望表现之间差距的机制；驱动学习的"表现 → 反馈 → 修改 → 表现改进"循环。
- **[[ai-feedback-quality]]** —— AI 生成反馈的准确性、有用性、及时性与[[pedagogy|教学性]]价值；系统的提供侧。
- **[[feedback-literacy]]** —— 学生理解、评估并据以行动反馈所需的能力与倾向；系统的接收侧。
- **[[formative-assessment]]** —— 反馈被用于在学习仍在进行时改进学习、而非仅仅评判学习的评估情境。
- **[[peer-assessment]]** —— [[learners|学习者]]之间交换的反馈，日益受到 AI 增强，也是培养反馈素养的场所。
- **[[automated-assessment]]** —— AI 驱动的评分与反馈，从[[automated-essay-scoring|自动作文评分]]到置信度感知的简答评分。

### 反馈回路

反馈回路是 AI 系统评估学生作业、递送反馈、观察学生反应并据此调整后续教学的循环过程。AI 介导的反馈回路在多个时间尺度上运作：

- **即时反馈：**[[automated-assessment|自动评分系统]]与[[intelligent-tutoring|AI 导师]]在[[problem-solving|问题解决]]过程中提供实时纠错。[[correct-answer-trap-ai-tutor|正确答案陷阱研究]]表明，如果学生只是照抄订正，即时反馈会使学习短路。在导师内部用 LLM 生成这种即时纠错反馈是可行但不完美的：在 Apprentice Tutor 大学代数平台的 6,926 条记录事务中，[[reddig-maclellan-personalized-feedback-llm-2026|Reddig、Arora 与 MacLellan（2025）]]发现 GPT-4 生成的提示约 66% 的时间针对学生具体错误，但约 35% 的提示过于笼统、不正确，或过早泄露答案，且基于 LLM 的自动质量检查与人类判断错位——这印证了未加审核的 AI 反馈在即时回路中存在真实的短路风险。
- **作业层面的反馈：**[[formative-assessment]]系统与[[ai-feedback-quality|AI 反馈质量研究]]考察 AI 生成的作业反馈能否改进后续作业。[[sequenced-ai-feedback-learning|序列化反馈研究]]检验反馈的顺序是否重要。
- **课程层面的回路：**[[learning-analytics|学习分析仪表盘]]与[[edtech-platform|教育平台]]跨作业聚合反馈，以识别模式并推荐干预。

反馈回路的有效性取决于[[ai-feedback-quality|反馈质量]]——准确性、具体性、及时性与可操作性。[[becerra-aicofe-feedback-2026|AI 同伴反馈系统]]为回路增添了社会维度。

**回路中的人：**反馈回路并非纯粹自动化——教师往往在 AI 生成的反馈抵达学习者之前先行中介。[[learner-centered-feedback-ai|对教师用 AI 反馈工具的研究]]（例如将 ML 检测器与[[llm]]改写器结合的 PolyFeed 工具）发现，教师会运用专业判断来**接受、编辑或拒绝** AI 建议——一种"协助但验证"的模式——并系统性地缓和夸大的赞扬与泛泛的建议，以保护真实性与声音。反馈的**关系性/[[affective-computing|情感]]维度**（师生关系、鼓励）最强烈地抵制 AI 委托，表明回路的这一部分本质上仍属于人类。这种人在回路的介导连接着[[human-in-the-loop-ai]]与[[teacher-role]]。

Luo 与 Eaton 的政策评论强化了同一点：50 所排名最前的大学中只有 14 所对教师用 AI 做反馈有具体指引，而学生将未披露的 AI 反馈描述为"不真诚"，使透明度与同意成为伦理实践的前提而非礼数（[[luo-eaton-ai-student-feedback-ethics-2026|Luo & Eaton（2026）]]）。

LearnLens 把这种介导变成了一种机制：它把教师的编辑视为不满的信号而非订正，将额外的算力用于更深入的反思，而不是返回快速答案，其教师每次作业的中位时间从 10–30 分钟降到五分钟以下（[[zhao-learnlens-feedback-educators-loop|Zhao 等人（2025）]]）。

关系性解读比替代论更深刻。在一项有 12 名学生与 18 名教育者参与的工作坊中，[[ai-feedback-ecosystem-higher-education-2026|Bearman 等人（2026）]]发现，学生把 AI 当作一个额外但有缺陷的来源，将其与评分标准、讲义、讨论板和教育者的评语加以权衡，并在人工回应迟缓时用它作为权宜之计；有人把教育者单薄的评语粘贴进[[conversational-ai|聊天机器人]]，以弄清下一步该做什么。AI 的存在改变了关系，而非仅仅增加评语——以至于有一名学生不再信任讨论板上的同伴反馈，认为它可能是 AI 写的。作者因此提出"人在回路"（humans-as-the-loop）：让人们帮助人们随时间建立更强的反馈关系，取代对机器输出的监督。

[[care-full-feedback-genai|Winstone 等人（2026）]]将生成式 AI 反馈重新框定为关怀（care）的问题——一种伦理的、关系性的实践，而非信息传递——并命名了一种"安全空间悖论"：该工具降低的个人风险，可能放弃了对学生面对职业反馈中摩擦的预备。

### AI 如何改变反馈

AI 在三个有影响的方向上改变反馈，每一个都提高了其他侧面的风险：

- **体量与即时性。**AI 可以即时、大规模地生成反馈，大幅增加学生收到的反馈量。[[genai-feedback-design-multisite-experiment|多站点生成式 AI 反馈研究]]与[[ai-generated-feedback-higher-ed|高等教育中的 AI 反馈]]记录了 AI 反馈在可接受性与支持性上被体验为与教师反馈相当。一项遵循 PRISMA 的[[meta-analysis-systematic-review|系统综述]]（2023–2025 年 42 项实证研究）印证了这一规模效益——LLM 能加速评分并大规模递送快速、个性化的反馈，尤其在大型或[[higher-ed|高等教育]]班级中——同时提醒这类反馈有时过于泛泛或与所给分数不一致，且在较长、[[multilingual-learning|多语言]]或细微的任务上可靠性下降（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。

- **个性化是偏见的载体。**在八年级作文保持不变的情况下，四个 LLM 对被种族、语言或残疾标记的学生过度赞扬并保留批评——因此向反馈系统输入哪些学生属性是一个公平性决策，而非中立决策（[[marked-pedagogies-linguistic-bias-writing-feedback|Tan、Phalen 与 Demszky（2026）]]）。

- **对学习者的评估要求。**由于 AI 反馈可能不准确或出现幻觉，学生必须判断是否[[trust|信任]]并据以行动。这正是[[feedback-literacy]]与[[trust-calibration]]变得决定性之处：[[mendoza-ai-feedback-feedback-literacy-srl|Mendoza 等人（2026）]]表明，只有具备反馈素养的学生才能将 AI 反馈转化为[[self-regulated-learning]]收益，而[[llm-fallacy-misattribution|LLM 谬误]]刻画了学生可能把 AI 反馈过度归功于自己能力的现象。

- **反馈素养靠使用建立，而非靠人口统计特征。**在 486 名英语作为外语（EFL）本科生中，只有 AI 工具使用频率能预测 AI 反馈素养（β = 0.29）——而非专业或年级——因此为 AI 介导反馈搭建可及的支架，既是设计问题也是公平性问题（[[liu-deris-ai-feedback-literacy-uptake|Liu & Deris（2025）]]）。

- **实验室认可不等于学期使用。**全部 18 名学生在实验课上对生成式 AI 解释功能反应积极，但整个学期只有一半使用过它，理由是教师反馈已足够清楚时存在不匹配、不相关与冗余（[[jin-genai-learning-analytics-feedback-literacy|Jin 等人（2025）]]）。

- **是信任与关怀而非准确性制约接收。**17 名 EFL 学生给 AI 写作助手很高的专业评价，却因其数据处理而怀疑其可信度，并将其善意评为最低，只授权它处理宽泛的语言问题；还有人认为其建议数量多到难以应付（[[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor，2026]]）。

- **任务层面的适配性：按认识状态给反馈分类。**[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos（2026）]]认为，该领域依赖的框架——Hattie 与 Timperley 的层次、Boud 与 Molloy 的设计原则——解释的是反馈在学习中的*作用位置*，而非一项给定的反馈任务是否涉及规则核查、事实核验或解释性判断，而恰恰是后一种区分决定了自动化是否站得住脚。提出的三分法是：低层的结构与呈现反馈（格式、引用、语法、句子层面的清晰度——对照明确标准的规则判断，可安全自动化）、中层的事实与程序核验（一次计算是否正确使用了规定方法、一个陈述的事实是否与权威来源相符——与既有知识比较，而非对推理的判断）、高层的[[critical-thinking|批判性评估]]与综合，其判断是解释性的、必须保留给人。这些层次是维度而非阶梯：一次计算可以呈现正确、算术错误、同时方法上不恰当，并同时引来核验、过程反馈与自我调节反馈。该框架最尖锐的边界案例是清晰度：句子层面的清晰度属于表层，但*论证性*的不清晰往往意味着概念把握不完整，因此被标记的实例应升级为人工审阅，而非当作文字来订正——修改文字会放过真正的问题。

- **角色感知的反馈。**[[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等人（2026）]]表明，[[prompt-engineering|提示]]同一个 LLM 以不同角色——教师、同伴审稿人、基金评审人——评估同一件学生作品，会产生性质上截然不同的反馈：教师式的鼓励且面向过程，同伴式的支持且对话式，基金评审人式的正式且面向结果。这些差异是认识上的，而非仅是风格上的，凸显了设计实践的不同侧面——证明角色感知的提示可以生成对角色敏感的评估性反馈，而非单一的泛泛回应。

- **反馈类型比反馈密度更重要。**一项为期八周的自适应随机过程研究（194 名学生）发现，指令式、信息性与转化性反馈被接纳的方式不同，而转化性反馈增加了认知负荷——因此反馈设计应让类型匹配学习者的阶段，而非最大化体量（[[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm（2026）]]）。

- **反馈的效用与评估权威。**[[student-perspectives-ai-writing-grading-2026|AlGhamdi（2026）]]表明，学生可以同时接受 AI 生成反馈有用、又拒绝 AI 作为合适的评分者——将*反馈效用*（表层反馈的信息价值）与*评估权威*（谁有权决定分数）分开。在透明的后[[assessment|评估设计]]中，沙特 computing 学生把这两者当作分析上可分的判断，重视 ChatGPT 在修改上的清晰，同时把评分权威留给人类教师，并阐明其对话性、制度性权衡的理由。该发现将[[feedback-literacy]]从评判反馈质量延伸到对评估权威本身的推理，并提示[[explainable-ai|关于 AI 参与的透明度]]可以使反馈成为批判性反思的对象，而非被动的接受。

- **修改的立场本身是一种结果，而非只是其质量。**反馈研究通常问修改是否改进了文本。[[zhao-ji-appraisal-human-ai-revisions-2026|Zhao 与 Ji（2026）]]问的是修改后的文本采取何种修辞立场，用评价理论（Appraisal Theory）对 168 篇 EFL 论证作文在初稿、[[peer-assessment|同伴反馈]]后的修改稿与同一批初稿的 ChatGPT-4 修改稿中进行编码。参与语言在三者中出现频率相当，但配置不同：同伴反馈的修改变得更收缩（更多的 Counter 与 Endorse，更少的 Entertain），而 AI 修改保持了更均衡的 Contract/Expand 组合。两者都不是更好的写作——要点在于两条修改路线把论证置于不同的对话位置，这使立场本身成为反馈对话可以命名、写作者可以选择的东西。

- **一个解释可以有说服力却仍不忠实。**[[shap-llm-rationales-teaching-quality-assessment|Bueno 等人（2026）]]发现，移除 LLM 论证排序中最具影响力的句子几乎不改变评分量规分数，而 SHAP 选出的句子则可靠地移动分数，并能跨模型族迁移——因此流畅的辩解并不构成分数建立于其上的证据。

- **反馈素养作为训练目标。**AI 工具不再只提供反馈，而日益被设计成*教*学生使用反馈——[[tubino-adachi-ai-automated-feedback-literacy|把自动反馈工具重新框定为素养建构工具]]、[[zhan-boud-dawson-genai-feedback-engagement|把生成式 AI 框定为反馈投入的使能者]]、[[richmond-nicholls-genai-psych-feedback-ai-literacies|用生成式 AI 批评任务同时建构心理、反馈与 AI 素养]]。

- **反馈素养与校准是可分的杠杆。**在 120 名本科生中，一份反馈素养脚本（Filter–Reason–Act–Check）提升了写作质量、有效接收与深度修改，一项评估—表现校准活动改善了自评准确性并降低了过度自信，两者结合产生了最大的写作收益，且在 AI 支持撤除后保持最强（[[rethinking-ai-writing-feedback-literacy|Dai（2026）]]）。

- **清晰不等于有效。**经 LLM 改写的 Python 错误信息被评为显著更易读、认知负担更低，但在修复率、尝试次数或修复时间上没有产生显著提升（[[llm-adaptive-programming-error-explanations-2026|Moraru、Biswas 与 Gadiraju（2026）]]）。

### 什么让反馈有效：校准证据

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai & Gilbert（2026）]]就反馈设计给出了一个与 AIED 直接相关的干净实验结果：**真实的、即时的、逐试次的、与学习者自己先前预测挂钩的反馈才是改变行为的东西——仅有预测或信念是不够的**。在他们的四组设计中，反馈加上先前的表现预测改善了校准与行为，而只有预测则毫无作用，再加一个明确的过度/不足自信标签也没有更多作用。LLM 还可以在此过程中充当校准伙伴：[[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等人（2026）]]发现，在评分量规细化之后，LLM 在应用表现阈值时比一些人类评分者更一致——这对标准化会议与[[formative-assessment|形成性同伴反馈]]环境有用，模型在此帮助校准[[evaluative-judgment|评估性判断]]而非取代它。这与知识库的反馈系统观一致：反馈的力量在于对照学习者*自己*的估计弥合差距（提供—接收配对），有效的反馈应当是即时的、准确的、明确连接到学习者所预测的东西——这是 AI 反馈系统与[[feedback-literacy]]训练共同的设计原则。

然而，努力并不自动地就是缺失的成分。在一项有 302 名美国成年人学习 Python 入门的预注册组间实验中，[[structured-reflection-ai-explanatory-feedback-2026|Asher、Gold 与 Carvalho（2025）]]把个性化的[[llm|Claude Sonnet 3.5]]解释性反馈与一个三步自我解释提示配对——对每一处错误代码段，正确代码做什么、学习者自己的尝试为何失败——而增加的反思没有带来任何收获。反思实践组花 4.1 分钟审阅反馈，而普通练习组为 2.1 分钟（t(267) = 11.30, p < .001），这使得只能做 2.0 道练习而非 3.4 道（t(267) = 8.20, p < .001）；每道题的价值两种情况下相同（反思 × 题号 OR = 1.03, z = 0.23, p = .486），因此普通练习以更高的掌握度收尾，79% 对 65%（d = .41），且在近[[transfer-of-learning|迁移]]、远迁移或代码评估题目上从未落后。反思也未兑现它瞄准的元认知收益：学习判断在各组间没有差异，练习条件的校准更好（不足自信 11 个点，对视频观看者过度自信 20 个点，d = −.93），报告的[[cognitive-offloading|分心]]也更少（d = −.80）——而反思者的反思平均只有 35 个词。作者的解读是，AI 反馈已经提供了自我解释通常所补充的[[scaffolding|支架]]——一条指出错误、解释正确方法并描述底层概念的信息，留给反思提示可做的事已经不多——而仍在学习陌生语法时写反思，与建立可迁移技能所需的多样化重复直接竞争。这在加工深度轴上为[[desirable-difficulties]]与[[productive-failure]]定位了一个边界条件：当努力驱动额外的提取、应用或比较时它才有回报，而当学习者已收到针对其具体错误的个性化解释时它就是冗余的。它还牵涉[[ai-feedback-quality|反馈质量]]如何与[[self-regulated-learning|接收]]互动：反馈越是详尽且有针对性，附加层能增值的空间就越窄，这使设计注意力从深化单个片段转向把稀缺的练习分钟花在题量、题目多样性与反思时机（如检测到平台期之时）上——该研究只检验了一种未经审核的增强，作者也指出这些变体仍待开放。

- **专注与[[adaptive-learning|适应性]]是反馈的两个可分维度。**对三门大学写作课中教师与 LLM 评语、按七种反馈专注类型的标注显示，多数模型几乎覆盖每种类型，但没有一个匹配教师在这些类型上的分布，也没有一个像专家教师那样跨草稿阶段改变其专注点（[[llm-feedback-focus-adaptivity-student-writing-2026|Almousa 等人，2026]]）。
- **聚合收益可能掩盖相互抵消的变动。**三个月的 WISE Agent 反馈、260 名中国六年级学生，总批判性思维倾向分数没有变化（t=-0.854, p=0.394），但求真性（Truth-seeking）上升（p<0.001）而认知成熟度（Cognitive Maturity）下降（p=0.019）——作者把这一下滑解读为学生正在重新校准被高估的理解。（[[ai-feedback-critical-thinking-writing-2026|Zhu 等人（2026）]]）

### 反馈在各评估情境中的表现

知识库的反馈研究横跨全部评估情境，每一种都有其独特的反馈动态：

- **形成性反馈**是反馈促学习（feedback-for-learning）的经典场所——[[formative-assessment|形成性评估]]通过学习仍在进行时抵达的反馈，滋养[[self-regulated-learning|自我调节学习]]（[[automated-formative-assessments-a-level-sciences|自动化形成性评估]]、[[ai-feedback-enactment-workflow-2026|反馈落实]]）。
- **总结性反馈**是附于[[summative-assessment|总结性评估]]的反馈——单元末测试、[[oral-assessment|口试]]以及监考/闭卷考试。在 AI 时代，总结性情境是 AI 抵抗性最重要的地方（见[[summative-assessment]]）：对监考口试或闭卷评估的反馈检验的是真实学习，而对 AI 辅助作业的反馈可能被夸大。[[fenton-oral-exams-ai-authentic-assessment-2025|口头评估]]把反馈时刻重新框定为一场现场互动的对话——反馈变得即时、对话化，并与评估本身不可分离，这正是它们抵抗 AI 替代的原因。
- **同伴反馈**增添了一个社会层——[[peer-assessment|同伴反馈]]培养反馈素养，并日益被 AI 增强（[[becerra-aicofe-feedback-2026|AI 同伴反馈]]、[[irwin-muller-efl-peer-feedback-literacy|EFL 同伴反馈中的生成式 AI]]）。然而同伴反馈的好坏取决于它的实际递送：在一项为期一学期的田野实验中，被分配同伴反馈的学生中不到三分之二完全没有收到任何文字反馈，而所递送的多半是非针对性的赞扬——因此当个别的 GPT-4 反馈取代不可靠的同伴时，学生维持了最高的参与度并取得了最大的内容[[learning-gains|学习收益]]（[[gpt4-feedback-student-activation-2026|Geschwind 等人，2026]]），这证明 AI 的优势是*可靠性*优势，而非固有的优越性。
- **提示支架把生成式 AI 变成反馈的促进者。**[[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang 等人（2026）]]发现，获得结构化提示（情境、目标、角色）来做同伴反馈的学生产出了更多解释与建议，且只有该组在反驳数据与回应对立观点上表现出色。
- **自动化反馈**规模化地递送——从作文评分到简答评分的[[automated-assessment|自动评分与反馈]]。[[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur（Yin 等人 2026）]]将其扩展到非结构化的[[quantitative-research|定量]]问题：一个逐题的[[machine-learning|XGBoost]]诊断主干，从学生提交的数值答案推断带评分标签的错误，在工程经济计算题上把它们变成自然语言反馈，而一套基于对话的方案只在置信度低时索取中间答案——在反馈准确性与学生的作答负担之间取得平衡。

- **自动写作评价是递送侧的工具，其代价可测。**一项对 50 项实证研究（2019–2024）的综述发现，自动写作评价在 25 项研究中改进了语法、标点与句子结构，在 15 项研究中减少了教师的机械性批改工作量，腾出时间处理论证、连贯性与组织；收益只在工具嵌入结构化的起草与修改循环时保持，而非作为独立辅助工具，重度依赖与更弱的[[critical-thinking|批判性思维]]和创造力相关，且工具复制了标准英语规范，EFL 使用者报告这些规范与其修辞传统错位（[[ai-powered-writing-feedback-awe-review-2026|Gres 等人，2026]]）。

一个跨情境的关键洞察是，**反馈的可靠性取决于它所依附的评估的完整性**：反馈的可信度只取决于它所回应的测量。在 AI 时代，这推动教育者走向[[authentic-assessment|真实性]]与抗 AI 的[[summative-assessment|总结性形式]]，使学生收到的反馈反映真实学习而非 AI 辅助的产出。

"为学习的评估"范式把反馈重新框定为一个总体哲学而非一个组件。[[mesny-innovative-assessment-grading-management-2026|Mesny、Roberge-Maltais 与 Galy（2026）]]综合了更广泛的高等教育文献，把[[formative-assessment|形成性]]、持续与个性化的反馈框定为该哲学的核心，平衡形成性与总结性目的，并突出[[agency|学生能动性]]、自我[[regulation|调节]]与[[metacognition|元认知]]技能。他们指出，然而在[[business-education|管理教育]]中反馈丰富的实践采用仍不均衡：自评与同伴评（同伴反馈的场所）主导了文献，而重评——用反馈驱动的第二次机会改进学习——几乎缺席。

- **"已被证明可操作"不等于"已付诸实施"。**在对 421 项将 NLP 应用于开放式教学评价评论的研究的范围综述中，61.3% 产生了达到"已证明结果"或更强层级的输出，但只有 11.6% 显示有证据表明目标用户评估或使用过它（[[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva，2026]]）。

### 提供—接收配对

知识库的核心反馈洞察是，**反馈质量与反馈素养是同一个系统的两面**：高质量反馈若没有有素养的接收者就是惰性的，而有素养的学生从拙劣的反馈中也获益甚微。[[ai-feedback-quality]]覆盖提供侧（反馈是否准确、及时、可操作？），[[feedback-literacy]]覆盖接收侧（学生能否评判并据以行动？）。连接两者的是反馈回路——即高质量反馈被有素养的学习者接收、从而弥合差距的机制。因此，设计有效的 AI 反馈意味着同时设计系统与学生。

哪些学生侧的能力重要，在经验上是可分的：在 1,507 名各自就一篇论证作文收到一条标准化自动反馈信息的中学生中，只有对反馈的行为性投入与工具性态度能预测修改表现——在任一维度上处于第 75 百分位的学生，比第 25 百分位的可比学生多改进约 0.10 或 0.11 个 WLE 点，大致相当于第 46 到第 54 百分位——而总体接受度、认知投入与经验性态度与之无关，且[[technology-acceptance-model|感知有用性]]没有中介任何维度通往表现的路径。有用性作用于另一个结果：总体接受度对情境兴趣的效应完全通过感知有用性实现（间接 β = 0.09，95% CI [0.06, 0.13]），因此修改收益追踪的是据反馈行动的持久习惯，而兴趣追踪的是对特定信息的评价。（[[jansen-argumentative-writing-feedback-receptivity-2026]]）

一个来源可以在"如何校准"上不同，而不必在"评分多准"上不同：在一项随机实验中，思维链 AI 反馈在评分量规质量上胜过一位资深教师，却没有带来更大的修改收益，而教师的反馈跨草稿保持校准，生成式 AI 反馈则追踪初稿的强弱（[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia 等人（2026）]]）。

一个双层模型展示了这种配对如何围绕机器组织，而又不把判断委托给它。在[[ai-agents-joyful-assessment-third-space-2026|El Khoury 与 Ma 的示例]]中，一个[[agentic-ai|智能体]]对每份成绩单生成一份基于评分量规的草稿证据报告，每个评分都附有引文摘录，然后教师审阅该报告、主持汇报，并决定证据对这名学生意味着什么——作者把这一分工总结为：AI 组织证据，教师解释证据。他们关于接收的主张是评价性的：发生在学生与同伴、教师所处的社会等级之外的反馈与迭代更容易尝试，而按学生自己的节奏排练，正是他们认为把偶然的信心变成据反馈投入的稳定习惯的东西。

### 为什么反馈对教育中的 AI 重要

反馈是教育中最具影响力、证据最充分的机制之一，而 AI 既放大又复杂化它。架构良好的 AI 反馈可以比肩或超越人类反馈，并规模化到整个班级，但它要求学习者具备新能力（[[feedback-literacy]]、[[ai-literacy]]），并带来风险（不加批判的接受、[[cognitive-offloading|过度依赖]]）。随着 AI 生成的反馈变得无处不在，知识库把反馈框定为一个整体系统——质量、回路、素养与评估情境协同工作——而非任何单一组件。

## 关联概念

- [[pedagogical-patterns]] — 经过检验的反馈序列，包括为何更高质量的 AI 反馈并未带来更多修改
- [[eportfolio]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[peer-assessment]]
- [[self-assessment]]
- [[automated-assessment]]
- [[assessment]]
- [[authentic-assessment]]
- [[assessment-validity]]
- [[self-regulated-learning]]
- [[ai-literacy]]
- [[scaffolding]]
- [[writing-education]]

## 关联文章

- [[jansen-argumentative-writing-feedback-receptivity-2026]] — 论证写作中的自动反馈：中学生反馈接受度与反馈感知的作用
- [[ai-agents-joyful-assessment-third-space-2026]] — AI 智能体、愉快的评估与第三空间
- [[student-perspectives-ai-writing-grading-2026]] — 学生对透明 AI 辅助写作评估的看法（AlGhamdi 2026）
- [[usher-faraon-who-grades-best-2026]] — 跨项目质量层级比较 ChatGPT、同伴与教师评分（Usher & Faraon 2026）
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 生成式 AI 辅助写作中的分层认知卸载（Chen 2026）
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[farrokhnia-genai-feedback-student-revisions-2026]] — 教师与生成式 AI 反馈：学生在 AI 反馈下修改更少
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — 生成式 AI 反馈与自我调节学习：感知来源起作用
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — 协作论证中的生成式 AI 辅助同伴反馈
- [[luo-eaton-ai-student-feedback-ethics-2026]] — AI 用于学生反馈的伦理
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — 元认知训练促进最优认知卸载（Ngai & Gilbert 2026）
- [[liu-deris-ai-feedback-literacy-uptake]] — AI 反馈素养量表与接收预测（Liu & Deris 2025）
- [[zhan-boud-dawson-genai-feedback-engagement]] — 生成式 AI 作为学生反馈投入的使能者（Zhan、Boud、Dawson & Yan 2025）
- [[mendoza-ai-feedback-feedback-literacy-srl]] — 反馈素养调节 AI 反馈 → 自我调节学习（Mendoza 等人 2026）
- [[rethinking-ai-writing-feedback-literacy]] — 面向 AI 辅助写作的反馈素养脚本（Dai 2026）
- [[jin-genai-learning-analytics-feedback-literacy]] — 反馈中的生成式 AI 学习分析（Jin 等人 2025）
- [[tubino-adachi-ai-automated-feedback-literacy]] — 用于反馈素养的 AI 自动反馈工具（Tubino & Adachi 2025）
- [[irwin-muller-efl-peer-feedback-literacy]] — 生成式 AI 用于 EFL 同伴反馈以培养反馈素养（Irwin & Muller 2026）
- [[ai-generated-feedback-higher-ed]] — 高等教育中的 AI 生成反馈
- [[care-full-feedback-genai]] — 用生成式 AI 做"用心"的反馈设计
- [[ai-feedback-ecosystem-higher-education-2026]] — 高等教育中的反馈生态：AI 重塑反馈关系，人在回路（Bearman 等人 2026）
- [[learner-centered-feedback-ai]] — 以学习者为中心的 AI 反馈实践
- [[genai-feedback-design-multisite-experiment]] — 多站点生成式 AI 反馈设计
- [[ai-feedback-critical-thinking-writing-2026]] — AI 反馈与写作中的批判性思维
- [[richmond-nicholls-genai-psych-feedback-ai-literacies]] — 生成式 AI 评估建构心理、反馈与 AI 素养
- [[zhao-learnlens-feedback-educators-loop]] — LearnLens：带教育者监督的课程锚定反馈（Zhao 等人 2025）
- [[sequenced-ai-feedback-learning]] — 序列化 AI 反馈研究
- [[becerra-aicofe-feedback-2026]] — AI 同伴反馈系统
- [[automated-formative-assessments-a-level-sciences]] — A-level 科学中的自动化形成性评估
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 重新思考口试作为真实性、抗 AI 的评估
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies：自动写作反馈中的偏见
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP 与 LLM 论证用于基于量规的教学反馈
- [[llm-adaptive-programming-error-explanations-2026]] — LLM 对编程错误的自适应解释
- [[student-perceptions-ai-study-productivity-2026]] — 学生对 AI 工具用于学习生产力与学习的感知：一项探索性调查研究
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM 作为迭代教学设计的行为者
- [[gpt4-feedback-student-activation-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[tripartite-feedback-framework-ai-assessment-2026]] — 三分框架：按认识状态给反馈分类及 AI 参与的五条边界原则（Venetsanos 2026）
- [[structured-reflection-ai-explanatory-feedback-2026]] — 是益还是瓶颈？对 AI 解释性反馈的结构化反思（Asher、Gold & Carvalho 2025）
- [[bounded-reliance-ai-writing-feedback-2026]] — 有限依赖：从来源可信度看 EFL 学生对 AI 生成写作反馈的投入
- [[pivot-generative-video-tutors-stem-2026]] — 从内容生成到学习支持：面向 STEM 学习的教学法引导的生成式视频导师
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — 评估 LLM 生成学生写作反馈中的反馈专注与教学适应性
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — 从情感分类到可操作且负责任的反馈：NLP 在教学评价中的范围综述与证据地图，2015–2026
- [[nazaretsky-feedback-source-bias-2025]] — 谁提供反馈很重要：文本可比时来源标签改变评分（Nazaretsky 等人 2025）
- [[ai-powered-writing-feedback-awe-review-2026]] — 面向写作的 AI 反馈系统：自动写作评价（AWE）工具综述
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — 修改对写作者立场做了什么：同伴反馈使论证作文更收缩，AI 修改保持 Contract/Expand 平衡（Zhao & Ji 2026）
