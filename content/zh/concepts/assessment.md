---
title: 评估
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:30-04:00"
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating, course-ai-policy, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity]
technology: [generative-ai, learning-analytics]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, formative-assessment, process-oriented-assessment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
connected_resources: [idstack, lesson-md, master-instructional-design]
translation_of: concepts/assessment
source_updated: "2026-10-09T08:42:20-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **评估**——收集并解释关于学习者知道什么、能做什么的证据的过程，以及用以评价学习的方法。[[ai-education|教育中的人工智能]]从根本上重塑了评估：它驱动[[automated-assessment|自动评分与打分]]，生成并调适评估题目，并在学生可以使用人工智能之时，提出关于评估究竟测量什么的深层问题。评估是组织本知识库对[[formative-assessment|形成性评估]]、[[automated-assessment|自动评分]]、[[assessment-validity|效度]]与[[educational-measurement|教育测量]]覆盖的总括概念。

## 值得思考的问题

- 这里把评估定义为收集并解释关于学习者知道什么、能做什么的证据。在阅读之前，你会如何补完“一项评估有效，如果……”这个句子——如果每个学生都能秘密使用人工智能来产出他们的作业，这个答案会有什么变化？
- 本页声称，一个学生如何使用生成式人工智能（评价性整合对不加批判的走捷径式的接收）能预测表现，而他们使用的频率则预测不了什么。这暗示了“通过限制使用来规制人工智能”这一常见直觉的什么问题？
- 一个学习者可能交付没有工具就无法复现的专业水准作业——切断表现与底层能力之间的推论。你是否遇到过一项“胜任力”被授予给那些学生实际无法独立完成的工作？这揭示了什么？
- 本页提出的建设性问题不是“我们如何阻止学生使用人工智能？”，而是“我们如何在镜像其未来工作的情境中促成深思熟虑的使用？”如果那是目标，你所在领域的评估会是什么样子？
- DRIVE 框架建议评估学生与生成式人工智能之间*参与*的质量——而不只是制品——看他们是否策略性地引导提示并整合自己的想法。你会看什么来区分一次深刻的、反思性的[[student-ai-interaction|人工智能交互]]与表面的消费（[[student-engagement|参与]]）？
- 人工智能中介的评估正在多样化，走向[[oral-assessment|口试]]、档案袋与对话式格式，它们减少焦虑并让人觉得与专业相关。以你自己的经验，你认为哪种评估格式最“抗人工智能”——而抗性与教育价值是同一回事吗？

## 引言

评估之所以是教育中人工智能的核心，有两个原因。首先，人工智能本身被用来评估学生——大规模批改作文、代码、简答与考试。其次，课堂中的人工智能改变了评估能有效测量的东西，因为学生可能使用[[generative-ai|生成式人工智能]]来产出作业。因此，这一领域同时横跨自动化评估的*工具*，以及人工智能提出的*效度与诚信*问题。

## 人工智能在评估中的使用

- **自动化评估：**[[automated-assessment|基于人工智能的评估]]横跨多种模态——选择题、简答、作文、代码与基于表现的评价——通过[[automated-assessment|自动评分]]、[[automated-essay-scoring|自动作文评分]]与[[automated-question-generation|自动出题]]实现。
- **形成性评估：**[[formative-assessment|人工智能系统]]大规模生成、验证并调适形成性评估题目，为持续的教学提供信息，而不只服务于[[summative-assessment|终结性]]评价。
- **学习分析与测量：**[[learning-analytics|学习分析]]与[[educational-measurement|教育测量]]把评估数据连接到学习过程，用[[item-response-theory|项目反应理论]]、[[knowledge-tracing|知识追踪]]与[[student-modeling|学生建模]]解释表现。[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]演示了把基于 LLM 的题目难度估计作为测量输入：在 5,170 个按 Rasch IRT 模型校准的 K-5 数学与阅读题目上，GPT-4o 的零样本评分与真实难度呈中到强相关（数学 r = 0.83，阅读 r = 0.81），但随年级而变，而一个基于特征的方法（把 LLM 抽取的特征输入树模型）达到最高 r = 0.87 的相关性。该研究为测试专业人员提供了一套实用的七步工作流，同时告诫其向 K-5 数学与阅读之外的可推广性尚不清楚。
- **反馈回路：**人工智能评估日益汇入[[feedback|反馈回路]]，闭合从评估到学习的循环。
- **电子档案评估：**[[eportfolio|电子档案]]把学生长期的作品与反思汇集为一种基于过程的、抗人工智能的评估形式。生成式人工智能可以协助档案袋的*过程*——生成反馈、[[scaffolding|脚手架化]]反思，以及（在恰当的量表设计下）支持评价——而档案袋对推理痕迹与草稿的强调能抵御人工智能的编造。[[ni-lam-multiliteracies-ai-portfolio-2026|人工智能辅助的档案袋评估]]与[[sutama-chatgpt-eportfolio-speaking-2026|ChatGPT 加电子档案用于 EFL 口语]]表明，人工智能能同时提升档案袋的体验与学习者的[[feedback-literacy|反馈素养]]。
- **开放式评分的可靠性依模型而异：**[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova、Benko 与 Drlik（2025）]]把 11 个生成式人工智能与句子嵌入模型与两位专家评分者在 1,885 个开放式软件工程回答上做了对照：只有 GPTo1 达到几乎完美的一致（Fleiss' Kappa 0.82），而基于参照的模型惩罚了正确但措辞不同的回答。由于 GPTo1 是唯一被认为无需监督即可部署的模型，却带有专有 API 成本，作者建议把先进模型与可负担的选项或[[human-in-the-loop-ai|人工监督]]配对的混合策略，用于资源受限的情境。一项遵循 PRISMA 的[[meta-analysis-systematic-review|系统综述]]覆盖 42 项实证研究（2023–2025），在整个评分领域印证了这一条件可靠性图景：LLM 在封闭式与简答任务上与人类评分者相当，但在复杂、开放式或主观的工作上无法完全取代人类判断，且没有出现统一的评分偏差——模型有时更宽松，有时更严格，且常常回避极端分数（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。迭代的量表精炼可以把 LLM 的开放式评分推向高风险[[medical-education|医学]]情境中接近人类的可靠性：[[olvet-genai-scoring-open-ended-medical-2026|Olvet 等（2026）]]发现，一旦教师基于错误模式分析反复修订分析型与整体型量表，GPT-4 在四个临床前期问题中的三个上与教师评分者达到实质性到近乎完美的一致（加权 kappa 最高 0.94），而残余的整体型量表那一题仍只停留在中等一致（κw = 0.54）——这既显示了人在回路的量表工程的回报，也显示了它在综合性、整体性任务上的限度。
- **人工智能支持的口语与表现评估。**一项[[vocational-education|职业技术教育]]设计研究把评估从重文本的格式转向由 LLM 支持的交互式[[oral-assessment|口语]]：在四期学员中，21/33 的学习者认为语音任务真实，没有人不同意实时说比书面档案袋更好地反映了胜任力，而同一问题的字数在不同期次间相差五到八倍，九名学习者用两到十三个词作答且全部正确。该系统离线运行于单台笔记本，服务最多 12 名同时学习的使用者，使用 Mistral 7B 与 faster-whisper，90 天后删除录音，并把评分判断留给评估者——这是[[human-in-the-loop-ai|人在回路]]评估设计的一个实例，用于面向职场的资格认证。（[[ai-supported-oral-assessment-tvet-2026]]）

## 效度与测量挑战

人工智能提出根本的[[assessment-validity|效度]]问题：人工智能评分的评估测量的是学生的学习还是[[prompt-engineering|人工智能提示技能]]？学生对人工智能的使用是否使传统评估失效？关键挑战包括：

- **构念效度：**[[competency-based-education-genai-production-2026|关于基于胜任力之教育的研究]]表明，生成式人工智能切断了表现与底层能力之间的推论——一个学习者可能交付没有工具就无法复现的专业水准作业。这推动了重新概念化所评估的胜任力是什么。
- **共同作者身份与诚信：**[[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|共同作者诚信]]提出了一种新的效度证据来源，当学生提交自己并不理解的人工智能生成内容时，它就被违反，并探索了对话式“人工智能口试”作为一种回应。
- **心理测量学质量：**[[psychometrically-aware-ai|心理测量学感知的人工智能]]与[[automated-assessment|置信感知评估]]的工作，致力于让人工智能评分保持可靠、无偏且可解释。
- **对人工智能评估者的评价：**[[ai-ed-evaluation|人工智能教育评价]]提供了方法与[[benchmark|基准]]，用以判定自动评估者是否真的奏效——在可靠性、[[pedagogy|教学法]]与[[equity-in-ai-education|公平]]上——而不只是头条准确率。
- **人工智能与同伴评分的质量依赖可靠性（2026）：**在比较 ChatGPT、同伴与[[teacher-role|教师]]对同一批[[higher-ed|本科]][[group-work|小组项目]]的评分时，[[usher-faraon-who-grades-best-2026|Usher 与 Faraon（2026）]]表明与教师评分的一致*取决于学生作业的质量*：ChatGPT 对低质量提交的高估最大，对高质量作业与教师的一致更好，而同伴在较弱作业上一致最好、对强项目给分偏低。这一发现挑战了“可靠对不可靠”的二元框定，指向一种条件可靠性模型，其中替代评估者被匹配到任务与表现水平。
- **人类评分本身承载价值（2026）：**[[luo-dawson-value-judgments-grading-2026|Luo 与 Dawson（2026）]]表明，即便对人类评分生成式人工智能辅助的作业，也不是中立的、基于标准的行动。对 33 位大学教师的情境式访谈揭示，评分决定由面向个人的（诚实、勤奋）、面向能力的（独立性、生成式人工智能技能、学科掌握）、面向关系的（信任）与面向正义的（公平、行善）价值所驱动——延伸到作业之外，延伸到教师对学生之性格的推测。该研究把评估问题从“使用生成式人工智能算作弊吗？”重构为“教师的价值判断如何塑造分数，而这些价值是否与所评估的结果相关？”——把[[assessment-validity|效度]]与关于生成式人工智能使用将如何影响分数的“双向[[explainable-ai|透明]]”置于前台。

## 诚信与检测之争

人工智能进入评估，加剧了[[academic-integrity|诚信]]讨论。一条线索聚焦于[[ai-detection|检测人工智能生成的文本]]，而越来越多的[[research-methods-aied|研究]]主张，检测是一种有限的、情境性的工具——而非首选策略。[[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]]与[[responsible-assessment-ai-era-stanford-2026|Responsible Assessment]]主张，真实性无法被监管出来；它必须被重新设计，把人工智能定位为被声明的合作者，并把[[authentic-assessment|真实性]]、[[process-oriented-assessment|基于过程]]的评估置于监控之上。**[[walton-bearman-assessment-judgment-2025|Walton 等（2025）]]**以**学生实际上如何判断**他们在评估任务中使用生成式人工智能的方式的证据为此奠基：对 26 名学生的滚动回看访谈揭示了六种判断事件的光谱——从批判性地评价人工智能的知识、经由人工智能的局限学习，到不加批判地采纳想法、把人工智能的贡献误判为自己的。**[[stamatoulis-genai-use-patterns-2026|Stamatoulis 等（2026）]]**补上了[[quantitative-research|量化]]的对应物：在 157 名学生中，生成式人工智能*如何*被使用（评价性整合以支持理解对低核验的走捷径式接收）能预测表现，而单纯的使用**频率则既不预测**表现也不预测学业[[self-efficacy|自我效能]]。这些研究一起把评估问题从*学生是否使用人工智能*重构为*他们如何判断并为这种使用建立模式*。

[[bassett-ai-detectors-education-2026|Bassett 等（2026）]]更进一步，主张根本不应使用检测：其概率性输出无法被独立核验，因为真实世界文本的来源未知，而检测器分数——单独或与语言标记、风格比较、一个 LLM 的说法或学生的沉默一起——不满足诚信调查所要求的“盖然性平衡”标准。

一项对 25 项研究的 PRISMA 综述补上了一个检测之争遗漏的风险因素：非英语母语者在努力用英语写作时表现出很高的违反诚信倾向，因此诚信期望应当配以具体的学术写作支持，而非只靠执行（[[ssaho-ai-academic-integrity-review-2025|Balalle 与 Pannilage（2025）]]）。

## 人工智能时代的评估重构

本知识库评估文献中的建设性问题不是“我们如何阻止学生使用人工智能？”，而是“我们如何让他们在镜像其未来工作的情境中深思熟虑地使用它？”这把评估重新框定于：

- **真实且基于过程的任务**，使人工智能的使用可见并被评估。[[authentic-assessment|真实性评估]]——检视学生在有价值的、真实的任务上的表现——是对人工智能挑战的主要回应：任何[[llm|LLM]]能可信地模拟的任务都会失去其效度，因此真实性必须围绕实时的[[collaborative-learning|协作]]、数字与社会贡献以及个人意义建构来重新设计。这与[[zhan-boud-du-authentic-assessment-scoping-review-2025|真实性评估的设计框架]]、[[authentic-products-authenticated-processes-2026|真实制品与被认证的过程]]，以及[[tool-invariant-framework-agentic-ai|过程的工具不变性评估]]相关联。
- **扎根于效度证据的负责任评估设计**（[[responsible-assessment-ai-era-stanford-2026|负责任评估]]）
- **由评估目标推导的任务层面人工智能许可：**[[mccorkle-aligned-genai-course-policy-2025|McCorkle（2025）]]展示了先于[[educational-policy-ai|人工智能政策]]的评估设计工作——清点一个项目中的每一项任务，指明在评估什么、对照哪个目标，并据此逐任务许可或禁止人工智能（头脑风暴与图像策展被允许；编写学习目标与幻灯片设计不被允许）。同一项对齐练习还兼作对该评估所支撑的推论的检查，因为它迫使教师说出一个分数意在保证何种表现（[[assessment-validity|评估效度]]）。
- **超越语言模式的评估：**Jiang 等（2026）为第二语言教师定义了多模态评估素养，即唤起跨语言、视觉、听觉、手势与空间模式作答的任务所需的知识、价值与胜任力。一个为期一年的、有 30 位香港英语教师参与的项目，把评估策略的知识从 3.13 提高到 5 分制下的 4.15（partial η² = 0.571），把支持学生的胜任力从 3.05 提高到 3.98（0.482），而三个价值子域全部持平。教师自身的经验为框架补充了两个维度：在相互竞争的课程优先级面前维持这一实践，以及批判性地动用生成式人工智能（[[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang 等（2026）]]）。
- **共同作者身份与声明**作为评估契约的一部分
- **作为胜任力的生产**——评价学习者指挥工具并产出专业水准作业的能力（[[competency-based-education-genai-production-2026|基于胜任力的教育]]）
- **评估交互过程，而不只是制品**——[[assessing-student-drive-framework-2025|DRIVE 框架]]（Directive Reasoning Interaction + Visible Expertise）把学生*与生成式人工智能的参与*的质量当作被评估的构念。它通过看学生是否策略性地引导提示（DRI）并通过交流整合并发展自己的学科想法（VE），来区分表面消费与深刻、反思性的交互，把面向过程的标准扎根于[[self-directed-learning|自主学习]]理论与[[icap-framework|ICAP]]层级意义上的认知参与理论。这使 DRIVE 成为*人工智能中介的真实性评估*的一个例子——一份评价学习者如何与生成式人工智能结为伙伴的量表，而非一个检测工具。

这一文献中的一个提议把步子迈到“在当前框架内重构”之外。[[ai-agents-joyful-assessment-third-space-2026|El Khoury 与 Ma（2026）]]主张，围绕阻止不当行为或检测人工智能使用来组织的改革，把教育想象力收窄到控制与合规，并提出以**愉悦评估**代之：一种安全、情感上回应性、赋能并支持学生[[agency|自主性]]的评估，其中安全是承重的条件，因为没有它，情感上的共鸣会变成表演，赋能会变成压力，自主性会变成风险。他们的框定颠倒了检测议程——诚信成为设计学生愿意参与的评估的结果，而非其起点——并把教师自建的[[agentic-ai|人工智能智能体]]（自定义 GPT、Gems、Copilot Studio 智能体）定位为一个低利害的排练空间，让学生在评判之前先练习，并主张由人工智能组织证据，而由教师解释它。

## 对教育中人工智能的启示

- **评估与学习不可分割：**好的人工智能评估应当像评价学习一样支持学习（[[feedback|形成性反馈]]）。
- **效度必须被重新概念化：**当人工智能能产出学生作业时，评估必须测量过程、判断与真实的生产，而不只是产出。
- **自动化必须被严格评价：**自动评估者需要心理测量学与[[bias-mitigation|公平]]评价，而不只是准确率声明。
- **诚信从检测转向设计：**对评估中人工智能最稳健的回应，是设计那些人工智能使用被期待、被声明并被细察的任务。
- **创新实践可以同时应对多个问题。**[[mesny-innovative-assessment-grading-management-2026|Mesny、Roberge-Maltais 与 Galy（2026）]]主张，一套五项相互强化的实践——[[authentic-assessment|真实性评估]]、自我与[[peer-assessment|同伴评估]]、重评、[[mastery-learning|基于标准的给分]]与不给分——若与“为了学习的评估”范式对齐，就能对抗传统、重终结性、常模参照给分的伤害（表层学习、被侵蚀的[[motivation|内在动机]]、压力与焦虑、不公平，以及被损害的[[academic-integrity|诚信]]）。他们发现采用在不同领域不均衡——自我与同伴评估占主导，而聚焦给分的创新仍处边缘——并敦促教育者更主动、更互惠地投入评估与给分创新，辅以渐进式的试验与[[governance|机构]]支持。

- **人工智能中介的评估正在多样化。**[[aivaluate-anxiety-assessment-2026|AIvaluate]]表明，一个 LLM 增强的[[conversational-ai|对话智能体]]降低了学生在基于表现的评估中的焦虑；[[asynchronous-oral-assessment-2026|Pentland（2026）]]发现异步口试提供了更高的参与，并被感知为与专业相关；[[graph-its-adaptive-algorithms-2026|基于图的智能导学系统]]用自适应的知识状态追踪为评估提供信息。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[pedagogical-partnerships]] — 教学伙伴关系
- [[formative-assessment]] — 形成性评估：大规模人工智能生成、验证、自适应的题目
- [[automated-assessment]] — 跨评估模态的自动评分与打分
- [[authentic-assessment]] — 基于过程、抗人工智能的真实任务
- [[assessment-validity]] — 生成式人工智能下评估的效度
- [[educational-measurement]] — 支撑人工智能评估的测量理论
- [[automated-essay-scoring]] — 自动作文评分
- [[automated-question-generation]] — 自动出题
- [[oral-assessment]] — 口语评估：抵御人工智能替代的现场与录制格式
- [[summative-assessment]] — 终结性评估：抗人工智能的格式（口试、监考、闭卷考试）
- [[item-response-theory]] — 用于解释人工智能时代评估作答的 IRT
- [[psychometrically-aware-ai]] — 心理测量学感知的人工智能评分
- [[learning-analytics]] — 把评估数据连接到学习的分析
- [[feedback]] — 闭合评估到学习循环的反馈回路
- [[feedback-literacy]] — 学习者的反馈素养
- [[academic-integrity]] — 诚信与人工智能检测之争
- [[ai-detection]] — 检测人工智能生成的文本
- [[ai-ed-evaluation]] — 评价自动评估者的方法与基准
- [[eportfolio]] — 基于过程的电子档案评估
- [[speech-and-voice-technologies]]
- [[peer-assessment]]
## 关联文章

- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — 一个为期一年的项目，定义了多模态评估素养，并测量了什么动了、什么没动
- [[ai-agents-joyful-assessment-third-space-2026]] — 人工智能智能体、愉悦评估与第三空间
- [[mccorkle-aligned-genai-course-policy-2025]] — 由所评估内容推导的任务层面人工智能许可（McCorkle，2025）
- [[usher-faraon-who-grades-best-2026]] — 跨项目质量水平比较 ChatGPT、同伴与教师评分（Usher 与 Faraon，2026）
- [[responsible-assessment-ai-era-stanford-2026]] — 人工智能时代的负责任评估
- [[beyond-detection-authentic-assessment-ai-2025]] — 超越检测：真实性评估
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — 共同作者诚信与评估效度
- [[competency-based-education-genai-production-2026]] — 生成式人工智能之后的基于胜任力之教育
- [[genai-assessment-governance]] — 生成式人工智能在评估中的以证据为中心的治理
- [[ssaho-ai-academic-integrity-review-2025]] — 人工智能诚信综述：检测必须与评估重构配对
- [[bassett-ai-detectors-education-2026]] — 正面我们赢，反面你输：教育中的人工智能检测器（Bassett 等，2026）
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate：学生焦虑的 LLM 增强评估（2026）
- [[graph-its-adaptive-algorithms-2026]] — 面向动态领域的基于图的智能导学（2026）
- [[asynchronous-oral-assessment-2026]] — 人工智能时代的异步口试（Pentland，2026）
- [[assessing-student-drive-framework-2025]] — DRIVE：通过与生成式人工智能的交互评估学习（DRI + Visible Expertise）
- [[walton-bearman-assessment-judgment-2025]] — 学生在评估任务中与生成式人工智能一同工作时的判断（26 名学生，滚动回看）
- [[stamatoulis-genai-use-patterns-2026]] — 生成式人工智能的使用模式（评价性整合对低核验接收）与结果
- [[luo-dawson-value-judgments-grading-2026]] — 生成式人工智能辅助作业评分中的价值判断：诚实、信任、效度与双向透明（Luo 与 Dawson，2026）
- [[razavi-powers-item-difficulty-llm-2026]] — 用 LLM 与树模型估计题目难度
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[computing-assessment-genai-workshop-report-2026]] — 人工智能能做你的作业。现在怎么办？关于生成式人工智能时代计算评估的在线工作坊报告
