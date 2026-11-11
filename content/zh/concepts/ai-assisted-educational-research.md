---
title: AI 辅助的教育研究
created: "2026-10-05T10:45:00-04:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
connected_resources: [learning-design-wiki]
contributors: [editor]
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent

---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **综述（Synthesis）：** AI 辅助的教育研究，是把 AI 用作本领域自身学术工作的工具——检索文献、为综述筛选记录、为质性数据编码、分析数据、撰写与修改稿件，并反思这些工具对所生产知识的影响。它与"关于[[ai-education|教育中 AI]]的研究"不同：研究 AI 是否有助于学习的设计属于 [[research-methods-aied]]，对 AI 系统的评估属于 [[ai-ed-evaluation]]，对单篇 AIED 研究的阅读属于 [[interpreting-and-applying-aied-research]]。本页涵盖研究者自身的工作流程与实践者-研究者的探究——教学学术（scholarship of teaching and learning）与课堂研究——以及自动化进入其中任何一者时的认识论利害。其证据稀薄且新近：一份框架提案、一个综述团队的反思性记述、一项小型焦点小组研究、两项文献计量研究、一份研讨会报告，以及单一研究者的案例研究。它描述的是一种行进方向，而非既定实践；而实践者-研究这一支是其中最薄弱的。

## 值得思考的问题

- 这里谁算"研究者"：有资助的学者、研究生、研究自己课堂的讲师？证据实际描述的是哪一类？
- AI 筛查器把一项研究从你的综述中排除了。这个决定由谁负责——供应商、工具、研究方案，还是你？
- 当模型总结你并未读过的文献时，你已经停止了学术工作的哪一部分？
- 一个模拟学习者可以在多种画像上测试一个导师。在相信它对真实学生的判断之前，你会检查什么？
- 实践者探究通常是局部的、小规模的。它的证据应当达到资助试验的门槛，还是因为情境本身即是要点而被不同地权衡？
- 如果 AI 帮助撰写了论文，应当告知读者什么，这种披露应当放在哪里？

## 引言

AI 辅助的教育研究，是这一领域把 AI 工具转向自身的工作。研究对象不是使用[[intelligent-tutoring|AI 导师]]的学习者，而是使用模型来搜索、筛选、提取、编码、分析或写作的研究者。变化的是研究者的工作流程，以及更隐蔽地，其产出算作证据的标准。

本页刻意不讨论"关于教育中 AI 的研究"。AI 导师是否改善学习的问题由 [[research-methods-aied]] 处理，AI 系统的评估由 [[ai-ed-evaluation]] 处理，对单篇研究的谨慎解读由 [[interpreting-and-applying-aied-research]] 和 [[limitations-in-aied-research]] 处理。这两类文献常被混为一谈，后者的工具性主张常被借用来支持前者。

范围从文献检索经筛选、编码、分析到写作，并包括追问自动化对领域所生产知识意味着什么的认识论反思。它也包括实践者研究：教学学术与课堂探究，即[[teacher-role|教师]]研究自己的实践。这是本页最薄弱的部分，下文各节如实指出这一点，而不加以粉饰。

## AI 如何进入研究工作流程

关于使用方式的记述比对效果的证据更为一致。[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai 与 Chan（2026）]] 在一所机构以七个焦点小组访谈了 28 名研究生，发现 28 人中有 27 人在研究的某处使用了[[generative-ai|生成式 AI]]：构思、[[meta-analysis-systematic-review|文献综述]]、解释、数据处理、编程、[[writing-education|学术写作]]、编辑与翻译。

他们的参与者是校准过的，而非轻信的。他们按感知到的利害与智力要求把工具匹配到任务，在低利害的程序性工作中更重地使用 AI，在学术贡献处于核心的地方保持谨慎。他们也全程保持[[human-in-the-loop-ai|人工监督]]，把模型当作一个可能"误导"或"完全错误"的助手。

政策性的发现才是实用的发现。现有机构指引针对的是教学、学习与评估，参与者感到它抽象且与研究实践脱节。作者提议面向研究者的指引，建立在四维 [[ai-literacy|AI 素养]]框架之上，作为发展性脚手架而非规则手册。

该研究覆盖单一机构、28 人自选样本和[[self-report-measures|自陈式]]记述；学生可能因学术诚信原因少报使用情况。它描述的是一个有能力群体如何使用这些工具，而非这种使用产生了什么。

## 文献检索与获取

一份研讨会报告描绘的是议程，而非测量。CHIIR 2026 生成式 AI 与学术检索研讨会（Generative AI and Academic Search）聚集了人机信息交互与检索领域的研究者，其报告描述了为文档检索而构建的系统如今在进行总结、推荐、综合与对话——动摇了"系统定位来源、而解释仍由用户进行"的假设。

一场闪电演讲测试了模型如何重构学者。以 OpenAlex 与 Google Scholar 对跨 10 个学科、8 个全球区域的 1,596 位种子作者的真值为基准，高被引研究者的重构率约为低被引同行的两倍，测试了 DeepSeek R1、Llama 4 Scout 与 Mixtral 8×7B。

一位[[librarians|馆员]]报告了"信任鸿沟"：学生往往过度信任生成式检索，而教师不信任它，单次工作坊被认为不足以形成持久的素养。参与者最常回到的设计线索是"摩擦"——让用户保持参与那种批判性的、有时令人不适的工作，而学习正由此产生。

该报告覆盖单一的自选活动，主要记录意见、设计原则与研究问题。其数字属于各场演讲而非研讨会本身，其中没有任何内容表明 AI 学术检索改善或损害了学习。

## 筛选与系统综述自动化

系统综述是自动化推进最远之处，也是其局限显现之处。[[scaffolding-systematic-reviews-2026|Wang 等（2026）]] 反思一个跨学科团队的综述，报告自动化主要在摘要筛选处减少了程序负担——工具如 ASReview、SWIFT-Review、Covidence、AIScreenR 与 MetaMate——而数据提取、调和与综合仍由人工审稿人承担。指导与同行讨论发挥了方法论基础设施的功能，而非礼数。

他们的结论是分工而非移交：把自动化分配给程序性负荷，核验每一项产出，让解释性决策保持人工。该记述是一个团队的反思，没有对照条件，因此其策略是被描述的而非被检验的。

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta 与 Lin（2026）]] 量化了综述自动化论文的报告问题，覆盖承载 14,726 个标注项的 888 篇综述自动化论文。自 2023 年以来，38.0% 的软件与产品论文完全没有报告任何评估，而 [[llm|LLM]] 论文为 9.3%。分层后差距依然存在：在筛选与选择中，软件论文平均有 3.2 个实质性评估项，39.3% 报告无评估；而 LLM 论文平均有 7.3 项，无评估率为 3.8%。

评价好并不意味着适合委派。在 118 篇仅有正面评估的 LLM 论文中，52% 仍报告了至少一个担忧，即工作流程低于其角色所需的门槛。模型访问以专有为主：84.1% 的 LLM 使用依赖专有或托管系统，11.0% 为混合，仅 4.9% 为开放权重。

从这些模式中，作者导出 PRISMA-LLM，一个三层框架，其五个实施层级是披露层级而非风险层级。它是提出以供检验的提案，并非 PRISMA 执行委员会认可的官方扩展。他们提醒，论文层面的沉默并不证明验证不存在——它可能存在于产品报告、研究方案或代码仓库中。

## 质性编码与分析

质性分析是解释即产物的阶段，这使委派更难辩护。[[qualitative-research|质性研究]] 页面汇集了语料中关于 AI 辅助编码的证据，包括显示人-模型一致性不等于编码质量、以及错误会经由时间性分析级联放大的研究。那一文献把模型当作需要以人工判断核验其产出的规模化助手。

[[ai-methodologies-science-education-research-2026|Martin 等（2026）]] 直接描述了角色转变。随着自动编码模型的应用，研究者从编码学生数据转向验证模型产出；当无监督模型对推理进行聚类时，算法执行了初始的探索性分析。他们论证，研究者越来越需要在质性、[[quantitative-research|量化]]与理论专长之外具备数据科学技能。

他们的框架也提供了在此关键的检查项：[[explainable-ai|可解释 AI]]可以揭示自动编码追踪的是语义理解还是仅关键词。一个与人工标签一致的编码流水线仍可能读错了东西。

自动化能够匹配而非仅仅辅助人工编码的量化证据，来自会话分析。[[ravi-llm-conversation-threads-collaborative-learning-2026|Ravi 等（2026）]]以 LLM 对小组转录进行线程切分做了基准测试，随后检验显式线程标签能否为 ABCDE 关系图式的下游编码提供脚手架：把 LLM 生成的线程标签加入一次性提示，使编码引出性话语的 Cohen's kappa 从 0.0502 升至 0.6325，而 LLM 线程切分的成本每份转录不足 1 美元，人工线程切分约为 25 美元。承载增益的是话语结构，而非原始模型能力。

[[hur-computational-analysis-teacher-group-interactions-2026|Hur 等（2026）]]提出一种阶段主导类型学，把三个分析阶段——探索、解释与确认——各分类为以人为主还是以计算机为主。在一项对 15 段高中数学课堂视频的实例研究中，一个基于姿态的检测器执行计算机主导的探索，浮现出 317 个教师—小组互动事件，而显著发现集中在检测启发式本身所偏重的关键点上。
LLM 转录指标在客观构念上与人类最一致（显式提问 κ = .778，讨论数学 .722），在主观构念上最不一致（需要帮助 .562，可能困惑 .531）。作者引用 Barany 等（2024），其比较四种编码本工作流的研究发现交替使用人类与 AI 能动性产出了质量最高的编码本，从而把阶段主导框定为一种可命名的分析选择，而非未经审视的默认。

[[ober-prompt-engineering-interview-transcripts-2026|Ober 等（2026）]]把扎根式人工编码、SentenceBERT 嵌入与 Affinity Propagation 聚类结合为一条可复现、由人驱动的访谈转录分析流水线。在对 13 名美国初高中教师的六个焦点小组中，该流水线为沟通生成 78 个一级聚类与 32 个 H 聚类，为数字素养生成 79 个与 32 个，其中人工复核保留了 14 个与 16 个有意义的聚类。
提示 ChatGPT-4o 与 Copilot 后，二者在 33.3%（21 个中的 7 个）的沟通聚类与 43.8%（16 个中的 7 个）的数字素养聚类上给出相同标签，平均余弦相似度在 0.835 与 0.880 之间。数据导出的编码随后被映射进一个精炼的 Version 2 编码本，后者增加了一个"教学"类别并使社会与情境维度显式化，而对每个标签的人工复核未发现明显的[[hallucination-risk|幻觉]]。

[[potter-participatory-design-writing-analytics-2026|Potter 等（2026）]]展示了一种端到端的混合归纳主题分析：GPT-4o 在一个安全的[[rag|检索增强]]平台内生成初始编码与初步主题，而研究者保留最终解释权威。在九个大学写作教师的焦点小组中，三位核心研究者独立重编码转录，两位外部验证者审阅全部数据，团队最终整合出四个主题——改进指标与反馈的清晰度、教师定制与灵活性、与现有工具的整合，以及界面改进——每个都映射到一项具体的 WAT-C 设计修订。模型偶尔会排除或改写引文，但没有捏造，而该工作流重新分配而非移除了研究者的劳动：核验、情境化与三角互证增加了复核层，而不是节省时间。

[[zambrano-llm-human-ai-codebook-development-2026|Zambrano 等（2026）]]比较了 LLM 编码本构建的四种理论注入策略——无理论、点名理论、给出完整参考文献、提供论文——覆盖 12 个编码本，由 5 名评分者在 7 个维度上评分。点名理论而不提供其论文，在有用性（4.40 对给出完整参考文献的 3.20）与具体性（3.80 对提供论文的 2.40）上胜过给出全文，而完整论文只在理论对齐上胜出（4.60 对 3.60），并且尽管有指示避免，仍复现了四个模型阶段。两项研究中人工精炼都仍然必不可少：两名编码者合并了重叠的 GPT 提案，最终编码本分别落在 11 与 15 个构念上，因此该工作流是协作，而非委派。

[[zhou-gaiva-human-ai-video-analysis-2026|Zhou 等（2026）]]提供了首个视频模态编码证据：GPT-4o 对课堂转录的编码在"协调协作"上达到 kappa 0.91，而人类—人类为 0.83。人工评分者可靠地应用了转录评分规则，在双重编码子集上准确度、完整性与特异性的 ICC 为 0.89–0.99。分阶段的设计——先 MLLM 转录，再基于转录的 LLM 编码——承载了结果，因为直接视频编码与人类的一致度最高只有 kappa 0.20。

[[marrone-genai-qualitative-coding-metacognitive-reflections-2026|Marrone 等（2026）]]报告了迄今最大规模的多利益相关者编码案例：在一所学校、一所大学与一个州教育部门中，用 14,100 份学生反思微调 GPT-4o-mini，得到 18,883 个标注样本。准确率取决于构念：目标设定达到 91.28%，学习反思 67.44%，努力调节 60.74%，最终切分上总体为 81.94%。九阶段共同设计工作流花费约 744 小时，其中近 500 小时是专家算法开发劳动。

[[keith-llm-prompting-human-coding-theory-concepts-essays-2026|Keith 等（2026）]]提供了首个 LLM 与人类演绎编码的直接分解：在理论—概念短文上，对四个模型跨 240 个设计单元、8,040 行数据与 60,060 条提示进行测试。模型身份主导了方差：相关性方差的偏 eta 平方为 0.19，偏倚模型中 F = 578.36，而提示类型不显著。质量与价格出现分歧——Claude Sonnet 4 的模型误差 logit 最低（−1.90），GPT-4.1 Mini 为 −1.05，而 Gemini 2.5 Pro 花费 178.13 美元，却不如花费 56.77 美元的 GPT-4.1 Full。

[[ober-persistence-pedagogical-agent-dialogues-2026|Ober 等（2026）]]系统映射构念层面的编码一致性：以八种 ChatGPT-4o 配置与两名受过训练的人类编码者，对学生与[[pedagogical-agent|教学智能体]]对话中的五个构念进行编码。各配置的自我一致性 kappa 在 0.865–0.890 之间，而人类—LLM 的 kappa 仅在 0.000–0.419 之间，因此没有人类对齐的一致性是一个诊断信号，标示的是该构念的操作化——即工具，而非模型。

## 数据分析与认识论利害

[[ai-methodologies-science-education-research-2026|Martin、Rost、Koenen 与 Graulich（2026）]] 追问该领域的知识生产本身，其文章是本页的脊梁。基于 Hasok Chang（2004）对认识论迭代的阐述——层层递进、朝向认识论目标的知识阶段——他们将其与温度计约 150 年的发展历程作类比，论证该领域如今可能正处于一次可比的迭代之中。

他们的核心担忧是认识论而非技术性的。Chang 的定律测量问题认为，测量一个量需要一条把它与某可观测量联系起来的定律，而该定律在不已知该量的情况下无法被经验检验。AI 导出的测量函数从训练数据与优化中涌现，而非来自研究者，可能加剧而非消解这一问题，因为它们可能既精确又具预测力，却始终不透明。

该框架有七个阶段：问题框定；工具化与测量；实验与基于证据的推断；比较与复制；规范与共识的建立；实施及其后果；以及持续精炼。作者把它们呈现为分析维度，可能重复、重叠或缺失，而非一个已验证的序列。

可比性是具有最尖锐[[equity-in-ai-education|公平性]]边界的阶段。Regnault 原理要求仪器在相同条件下给出相同读数、同类仪器彼此一致——但可比性必须延伸到不同学生群体，而[[machine-learning|机器学习]]倾向于更好地编码典型想法，而非学生表达较弱想法时的多样方式。

他们也指出了一个问责问题。研究者使用预训练模型，其训练数据、[[llm-training-and-fine-tuning|微调]]与目标他们可能并不知晓，这增加了一层认识论依赖；由于这些系统从社会技术网络中涌现，责任变得难以分配——一个"多手问题"。

必要的诚实是：该文章未报告数据，也未确立任何学习效应。它并未表明 AI 方法论改善了研究或产生了更有效的结论；该比较被设定为未来工作，作者也承认其假设"很可能被证明是错误的"。

## 研究写作、引用与诚信

写作是 AI 辅助最显眼之处，也是其失败后果最严重之处，因为一条引用是一份问责声明。[[citation-errors-hallucinations-computing-education-2026|Denny 等（2026）]] 审计了整个 ACM Digital Library——723,930 篇出版物与 15,872,533 条引用——并追踪了 2021 年以来发表的 5,225 篇计算教育论文中的 113,588 条引用。

他们人工核验了 828 条可疑记录，在 14 篇论文中发现 30 条包含可验证伪造的书目信息的引用，全部出自 2025 与 2026 年。在 SIGCSE 技术研讨会上，数量从 2025 年论文集的 3 条升至 2026 年的 17 条，出现在 2.3% 的 2026 年论文集中。30 条中有 17 条是混合型，把真实标题与伪造或不正确的作者配对。

他们的计数是一个刻意的下限，并把问题呈现为共享的、而非由软件解决的。作者应当核验每一条被引作品，尤其在写作中使用了生成式 AI 时；审稿人无法审计每条引用，因此出版方采用针对性检查；出版商应改进元数据。自动检测继承了它当作真值的元数据中的缺陷。

AI 写作的规模效应见于第二项文献计量研究。[[ai-assisted-writing-research-teams|Wang 等（2026）]] 分析了 2020 年以来 PLoS 与 Nature 系列期刊的 147,074 篇出版物，发现 AI 辅助写作与更小、更偏初级成员的团队相关。在从完全无 AI 辅助到完全 AI 辅助的极端转变下，团队规模在 PLoS 中小 22.1%，在 Nature 中小 45.5%（Poisson β = −0.250 与 −0.607，均 p < 0.01）。

影响力并未明显受损。约 7.34% 的 AI 辅助 PLoS 论文与 7.40% 的 Nature 论文进入 FWCI 前 5%，高于两个人工撰写对照组，匹配比较显示进入前 5% FWCI 的概率分别高 3.0% 与 2.7%（均 p < 0.01）。数据是观察性的，因此作者放弃了强因果主张。

## 研究环境中的持久化智能体

在单次提示之外，持久化智能体正被嵌入研究工作空间本身。[[persistent-ai-agents-academic-research|Alzahrani（2026）]] 报告了一项 115 天的单一研究者案例研究，对象是一个拥有持久记忆、本地文件、外部工具、定时例程与委派角色的智能体，运行于一位医师-科学家的工作空间中。

描述性结果规模很大。可恢复的主智能体遥测覆盖 96 个活跃日的 75,671 条去重记录，活跃日比例为 0.835；工作空间有 502 个记忆相关文件、17 个配置的智能体目录与 57 个技能文件。严格的 25 天 5 月子集包含 627 个模型完成事件与 73,950,305 个记录 token，其中 82.9% 为缓存读取，观测系统支出约 US\$1,961。

该研究的主要贡献是一个测量框架——PARE-M——它的构建源于：持久化智能体意在支持的产出（如治理、每件制品的成本）是片段式[[benchmark|基准]]不可见的。其核心负面发现是，聚合交互量并未表明人工输入的减少：随着记忆与程序的积累，被委派工作的范围扩大了，因此最强的模式是容量扩张，而非已被证明的劳动替代。

其局限是单一自观察案例所招致的那些。一位研究者同时是用户、设计者、数据来源、分析者与受益者，没有对照组、没有基线期，治理事件也没有独立编码者。

## 作为研究与评估工具的模拟学习者

[[simulating-students|模拟学生]] 是知识库中关于该技术与现象的页面：如何构建一个知识状态与错误足够忠实的合成学习者以代替真人。本页把同一装置当作研究与评估的工具——当一项干预、一个工具、一个基准或一个导师必须在大规模或真实学习者无法提供的条件下被测试时，合成学习者是*用来做什么的*。

最清晰的用途是对导师的长期评估。[[educlaw-bench-pedagogical-llm-agents-2026|Lee 等（2026）]] 让一个智能体导师与一个模拟学习者建立 30 天的关系，后者的掌握度（由在真实学生数据上训练的[[knowledge-tracing|知识追踪]]模型驱动）决定其回答。评估 10 个智能体适配器，每个都在 5–10 天内达到平台期，且远低于理想学习参照线，这是单次会话评估无法得到的结果。对观测到的探针准确度的校准检查紧贴对角线（ECE 0.049，Brier 0.033，覆盖 1.19 million 次尝试）。

保真度是前提，且它是可测量的。[[beagle-grounded-learner-emulation-2026|Wang 等（2026）]] 报告与真实学生行为轨迹的偏离度为 DKL = 0.31，而最佳基线为 0.53；在 71 名评分者的图灵测试中，其轨迹与真实学生数据在统计上不可区分（52.8% 准确度，d′ = 0.15）。要避免的失败是胜任力偏差：被提示的模型把任务解决得太好，无法代替新手。

信念状态是最容易被伪造的部分。[[llm-student-simulation-misconception-faithfulness|Do、Sonkar 与 Sachan（2026）]] 表明，在从 4B 到 120B 参数的七个模型上，模拟器在针对性、错位与泛化的反馈下，都以近乎一致的比率放弃被指定的[[misconceptions|误解]]、依据内部知识重新求解。他们用 Selective Flip Score 量化这一点，并通过训练将保真度提升最多 +0.56——要点在于：[[prompt-engineering|提示]]一个角色并不构成一个学习者。

模拟学习者也充当评估工具本身的受控试验台。[[llm-judged-helpfulness-pedagogy-signal|Fan 等（2026）]] 在预注册方案下将三个导师底座各与一个固定的弱模拟学习者配对，发现通用帮助性评分几乎不携带[[pedagogy|教学]]信号：七种策略在被评教学上跨越 2.3 分，却在被评帮助性上处于 0.25 分的带内。在每个底座上，答案揭示式轮次之后学生独立工作都更少。

这一告诫应写在本页上。[[simulation|模拟器]]的判断只与模拟器本身一样好，而它的覆盖倾向于最容易的学习者。

## 实践者研究：SoTL 与课堂探究

这是语料记录最少的一支。教学学术与课堂研究是实践者探究——教师研究自己的课程，常在小规模上、常作为自我研究——而此处收集的页面并未提供该模式下 AI 使用的研究性记述。

最接近的证据是相邻的而非切题的。[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai 与 Chan（2026）]] 中的研究生在学习成为研究者，而非研究自己的教学。[[scaffolding-systematic-reviews-2026|Wang 等（2026）]] 的团队开展的是正式的跨学科综述，而非局部项目。文献计量研究描述的是学科与出版商，而非课堂。

因此诚实的陈述是一个缺口而非一项发现。AI 辅助的实践者探究很可能广泛存在，却几乎未被本语料记录；一个把综述自动化与文献计量证据呈现为已解决讲师应如何用 AI 研究自己教学的页面会是过度伸张。

可以跨页传递的是一种倾向而非一个结果：在方法中指明 AI 的角色，让解释性决策保持人工，并报告哪些被核验了、哪些没有。

## 证据尚未确立的东西

- **没有面对面的比较。** Martin 等把 AI 辅助方法与传统方法之间的比较设定为未来工作。没有任何锚定文章表明一种 AI 方法论产生更有效的结论。
- **整体设计薄弱。** 锚点是一个框架提案、一个团队的反思性记述、一份研讨会报告、一项焦点小组研究，以及观察性文献计量。没有一个是 AI 辅助方法的[[rct|对照试验]]。
- **是报告缺口，而非实践审计。** PRISMA-LLM 读的是论文层面的沉默；一篇论文中没有评估的工作流程仍可能已在别处被验证。
- **实践者研究代表性不足。** 此处只有少数页面提及 SoTL 或课堂研究，因此语料无法支撑关于教师研究自身实践的论断。
- **移动的目标。** 工具的改进快于发表，因此一项关于 2025 年工作流程的发现，描述的可能是一代已不再以该形式存在的系统。

## 常见误解

- **“LLM 论文与软件论文被评价得一样好。”** 自 2023 年以来，**38.0% 的软件与产品论文完全没有报告任何评价，而 LLM 论文为 9.3%**。差距很大，且与“更新的工具会被更严格地检验”这一假设相反。
- **“按任务分层就能消除这一差距。”** **差距在分层之后依然存在**：在筛选与选择任务中，软件论文平均有 **3.2 个实质性评价条目，其中 39.3% 一个也没有**，而 LLM 论文平均更多。这一差异是论文类别的系统性属性，而非任务的属性。
- **“评价为正就意味着该工作流程达到了它应有的标准。”** 在 **118 项仅有正面评价的 LLM 论文中，52% 仍报告了至少一项担忧，即该工作流程低于其角色所要求的标准**。一半的正面评价包含了对自身的否定。

## 关联概念

- [[research-methods-aied]] — 用于研究教育中 AI 的设计的总括
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## 关联文章

- [[ai-methodologies-science-education-research-2026]] — 一个关于 AI 方法论如何变革科学教育研究的七阶段反思框架（Martin 等，2026）
- [[scaffolding-systematic-reviews-2026]] — 一个跨学科综述团队关于指导与选择性 AI 整合的记述（Wang 等，2026）
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — 28 名研究生如何在研究工作流程各环节使用 GenAI，以及他们建议的指引（Dai 与 Chan，2026）
- [[citation-errors-hallucinations-computing-education-2026]] — 对计算教育文献中伪造引用的领域规模审计（Denny 等，2026）
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — 一个 AI 辅助系统综述的报告框架，及其记录的问责缺口（Zabaleta 与 Lin，2026）
- [[genai-academic-search-workshop]] — 一份关于生成式 AI 与学术检索的 CHIIR 2026 研讨会报告（Liu、Arguello、Hoeber 等，2026）
- [[persistent-ai-agents-academic-research]] — 一项关于研究工作空间中持久化智能体的单一研究者案例研究（Alzahrani，2026）
- [[ai-assisted-writing-research-teams]] — AI 辅助写作伴随更小、更年轻研究团队的文献计量证据（Wang 等，2026）
- [[educlaw-bench-pedagogical-llm-agents-2026]] — 一个用模拟学习者评估导师智能体的 30 天基准（Lee 等，2026）
- [[beagle-grounded-learner-emulation-2026]] — 一个复现真实新手挣扎的神经符号模拟器（Wang 等，2026）
- [[llm-student-simulation-misconception-faithfulness]] — 模拟器为何在任何反馈下放弃误解，以及训练如何修复（Do、Sonkar 与 Sachan，2026）
- [[llm-judged-helpfulness-pedagogy-signal]] — 一项用固定模拟学习者检验帮助性是否测量教学的预注册审计（Fan 等，2026）

## 引用

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.
