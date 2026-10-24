---
title: 学习科学
created: "2026-09-17T14:12:00-04:00"
updated: "2026-10-24T14:13:04-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
reviewed_by: [editor]
translation_of: concepts/learning-sciences
source_updated: "2026-10-16T08:47:09-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习科学**——研究人们如何学习以及如何设计学习得以发生的环境的跨学科研究领域，它借鉴[[cognitive-psychology|认知心理学]]、[[learning-theories|学习理论]]、计算机科学和语言学，并以实证证据而非仅凭理论来评判其设计。在本知识库中，它是围绕[[ai-education|AI in education]]的研究领域，而非学校科目之一：它提供 AI 系统所操作化的机制（知识成分、[[mastery-learning|掌握阈值]]、[[transfer-of-learning|迁移]]）、承载它们的设计对象（[[learning-design|规划好的课程序列]]、[[intelligent-tutoring|导师]]、[[feedback]]机制）以及评判它们的标准（[[learning-gains]]、[[assessment-validity]]、[[equity-in-ai-education|公平]]）。它的组织性问题不是工具表现得好不好，而是学习者是否发生了改变。

## 值得思考的问题

- 一名学习者通过了每一道练习题，掌握阈值便结束了这组题目——随后他在一个应当克制行动的情境上误用了规则。这是谁的错：学习者的、模型的，还是停止规则的？
- 序列挖掘可以在不观察一间教室的情况下把 554 门课描述为模式。这个领域通过研究"被设计的意图"而非"实际发生的活动"，得到了什么，又失去了什么？
- LLM 反馈中的人口统计敏感性，在它追踪学习者自述的教育水平时看起来像适应，而在它改变情感色彩时看起来像偏见。一个无法区分这两者的领域，还应该继续用开放式模型来做评估吗？
- 学习科学对因果设计的偏爱——随机分配、反事实审计、可执行的学习者模型——是否窄化了 AI in education 中"什么算证据"的范围？

## 引言

学习科学研究学习以及学习环境的设计，它既由主题也由方法来定义：实验、课堂试验、对学生数据的[[quantitative-research|定量]]建模、对设计与语境的[[qualitative-research|定性]]分析，以及那种构建干预并在使用中修订它的设计型研究。这种广度把本页与提供框架、实践和工具的相邻页面区分开来；下面各节逐一列出每条边界，以及该领域在边界另一侧已经确立的东西。

本页覆盖这些方法所产出的实质性知识——学习者拿一个生成式模型做什么、哪些安排改变了结果、以及该领域自身的工具在哪里失效。[[discipline-specific-aied]]取了相反的切口，认为学科内容会改变支持应当做的事；学习科学采取跨领域的视角，它们所检验的机制被归集在[[cognitive-psychology]]之下。

### AI 如何出现在学习科学中

- **先机制，后模型。**[[deceptive-overgeneralization-adaptive-learning-2026|An、McLaren 与 Stamper（2026）]]用[[intelligent-tutoring]]系统为立直麻将跑了 11 个实验（N = 192），发现那些归纳出一个过度泛化产出的学习者——即抽掉了应用约束的动作——在第一道"不要行动"的题目上以 61.5%–100% 的比率误用它，而[[knowledge-tracing|贝叶斯知识追踪]]下预期的错误率是 12%。95% 的掌握阈值让系统在学习者遇到需要克制行动的情形之前就停止了练习，于是这个缺陷未被察觉。简短的"不要行动"练习配合指出缺失约束的[[feedback]]，把误用率降到 0.0%–23.1%（Cohen's h 1.70–2.44）；对 13 个 K-12 *Decimal Point* 数据集的二次分析在整数偏误中发现了同样的结构（比较错误的 84%–88%）。
- **一份共识地图标出了 GenAI 在哪里帮助、在哪里损害学习。**一项预注册的、由 30 位学习科学家参与的 Delphi 研究对 65 个学习过程做了评定，并在其中 42 个上达成共识：GenAI 威胁初始习得和[[critical-thinking|高阶思维]]，但增强巩固（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou 等，2026]]）。
- **反馈风格，而非智能体类型，推动了自我调节的投入。**在一项 51 名研究生参与的 2 × 2 实验中，[[socratic-method|苏格拉底式]]反馈与更强的理解监控相关，而指令性反馈带来更高的认知负荷；两种风格按固定的、非平衡的顺序运行，因此这一对比是与条件相关的，而非因果的（[[agent-type-feedback-style-self-directed-learning-2026|Han 等（2026）]]）。
- **最优解取决于内容。**[[rachatasumrit-example-problem-ratio-2026|Rachatasumrit、Koedinger 与 Carvalho（2025）]]把例题—问题比例当作内容与处理的交互：在一项 95 人、关于几何面积材料的 2×2 实验中，纯练习训练对字面事实产生了更大的[[learning-gains|学习增益]]，而例题整合训练对可泛化技能产生了更大的增益（β = 0.41，p = .038，d = 0.38）。一个模拟学习者（Apprentice Learner）只有在被赋予 ACT-R 式[[cognitive-psychology|记忆与遗忘机制]]时，才复现出了这一交叉效应。更多练习并非一致地更好：面向记忆的内容值得检索练习，面向归纳的技能值得整合例题。
- **把设计当作可分析的对象。**[[learning-paths-patterns-learning-design-2026|Divjak、Svetec 与 Horvat（2026）]]把[[learning-analytics]]转向[[learning-design]]本身，对一个免费课程设计工具中规划的 554 门课的 29,064 个活动做了编码。习得是最常见的学习类型，也是最常见的入口点；最强的马尔可夫转移是评估 → 讨论（0.332），置信度最高的规则是习得 → 评估 → 练习 → 练习（0.743，lift 1.45）。学习类型与预期结果层级相对应，习得类活动在 Bloom 第 1 级约占 50%，到第 6 级降到约 20%。作者强调这些是实施前的设计：与翻转课堂、[[inquiry-based-learning|探究式]]或[[project-based-learning|项目式]]序列的相似，并不构成意图的证据。
- **审计那些做评估的模型。**[[demographic-signals-llm-student-assessment-2026|Rooein、Benedetto 与 Hovy（2026）]]在[[automated-essay-scoring|作文评分]]、[[formative-assessment|形成性反馈]]和问答任务上审计了六个[[llm|LLM]]，固定任务输入、只变化人口统计语境（192,480 次调用）。在显式人设下评分是稳定的，但 Llama-70B 在隐式对话历史下把自己的分数抬高了 1.57 分（p < 0.001），而高等教育背景引来了更不可读、更积极的回应——约四个标准差的情绪差距。可读性效应缩小而长度效应增长，一些系数在条件之间改变了符号。作者把它当作审计工具而非部署裁定，并把人口统计信号与主题信号的纠缠读作对[[assessment-validity|效度]]和[[equity-in-ai-education|公平]]的威胁。
- **测量能力，及其局限。**[[competent-generative-ai-use-measures-review-2026|Verí（2026）]]把测量胜任地使用[[generative-ai]]的工具组织为四个领域——知识与使用、认知监督、依赖校准、对使用工具的智能体的控制——拒绝把它们压成一条能力连续体。同一批样本上自评与实证[[ai-literacy|AI 素养]]的三个相关系数合并为 r = .055（95% CI [-.047, .156]，报告 N = 2,765），作者认为这足以否证把[[self-report-measures|自评]]与绩效分数互换使用，但不足以设定一个切分点。没有经过验证的工具覆盖了使用工具的智能体所创造的全部决策；所提出的分层量表只是一个设计假设。
- **关于学习者自己卸责的自评。**[[pause-ai-cognitive-offloading-self-reflection-2026|Alam（2026）]]把[[cognitive-offloading]]文献转译为 PAUSE，一个纯浏览器内的自检，含四个领域，每一条 LLM 时代的条目都有出处锚定，没有合成分、没有存储、没有投入生产的模型；它的分段是描述性的而非常模化的，解读结果不得用于为评估、录取或招聘决定提供依据。它自陈的局限很重要：对卸责的自评容易受到它所关切的那个能力本身的干扰，一个刻意把 AI 当[[scaffolding|支架]]用的受访者在若干条目上会被读成卸责，而与 AI 相关的卸责是否区别于一般性的技术依赖，仍然开放。
- **人类专长的位置。**[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al.（2024）]]报告了最清晰的分工：在一项为期两个月、约 900 名新手 K-12 教师和约 1,800 名学生的[[rct|随机对照试验]]中，从资深教师推理中提取的实时建议把话题掌握度提高了 4 个百分点（62% 到 66%，p < 0.01），对评级较低的教师提高了 9 个百分点，成本约为每名教师每年 \$20，并把辅导推向引导式提问。增益是就近的——年末测试没有变动。[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al.（2026）]]发现教师通过设计抵达了同一位置：六位中学教师在设计聊天机器人原型时，都规定了有边界的专家、守住了权威边界（对学习和安全的责任不可委托）和专长边界（模型缺乏他们对个别学生的了解），并委托内容呈现、练习和纠正性[[feedback]]，同时保留目标设定和[[summative-assessment|终结性评估]]。
- **领域层面的能力。**[[sutedjo-faculty-genai-tpack-21-2026|Sutedjo、Chowdhury 与 Liu（2026）]]用一个为生成式 AI 改编的[[tpack|TPACK]]量表调查了 127 名教师：内容知识和学科教学知识很强（M = 4.70–5.15），而技术整合知识明显更低，整体性 TPACK 最低为 2.55，内容知识与任何技术整合领域都不相关，而三个整合领域之间相关如此之高（r = .81–.91），以至于它们可能就是一个因子。[[perrotta-zero-shot-governance-2026|Perrotta（2026）]]通过一个已停用的英国公务员体系原型来解读治理层，其代码库是一个系统提示加一条在商业模型之上的检索流水线，他论证基础模型的通用性既让它能被迅速改造为[[educational-policy-ai|政策]]工具，也使异常输出成为一种只能缓解、无法根除的长期风险——监督是在回路之上俯视，而非坐在回路之中。
- **整合缺口，已被绘出：**[[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik 与 Bashir（2026）]]将 32 项研究（PRISMA 2020，主题分析）综合为四个主题：领域内部的认识论碎片化、理论—技术矛盾（计算系统运行于预测与可测量的行为，而教育理论强调语境与社会互动）、经由分析的学习的数据化，以及作为新兴范式的混合智能。他们的混合智能框架是一个概念性综合，而非经过验证的模型——作者声明它尚待实证检验——但四主题地图对于本领域不断撞上的理论到计算的转译问题，是一面有用的审计透镜。
- **学生如何使用生成式模型，比他们是否使用更重要。**对 50 段本科生对话的编码发现，64% 是被动复述或事务性提问，只有 36% 是策略性对话，而一个以反思为结构的作业把天平推向了对话（[[three-pathways-student-ai-interaction-2026|Zahra，2026]]）。
- **个体内部的依赖先于[[agency]]感知到的下降。**在一门 AI 支持的[[collaborative-learning|协作]][[writing-education|写作]]课程中，来自 85 个固定小组 342 名本科生的三轮数据显示，高于平常的 GenAI 依赖预测了随后感知到的人类能动性下降，而反向路径更弱且在统计上未获支持（[[genai-reliance-human-agency-collaborative-learning-2026|Wu 与 Lu（2026）]]）。

- **GenAI 使用的分布是一种制度性选择。**[[sun-student-genai-entanglement-literacy-demands-2026|Sun、Dohn 与 Rehm（2026）]]按认识性工作如何在学生与系统之间分配，对 102 项高等教育研究做了分类，发现 Assistant 和 Enabler 两种纠缠各占 42.16%、居于主导，并把这种偏斜读作制度合法性而非技术能力。

- **过程证据是随渠道而定的。**用 79 名本科生对一项 GenAI 辅助的教学设计任务同时在交互日志和并发有声思维中做了编码，[[metacognitive-processes-genai-interaction-logs-2026|Li 与 Liu（2026）]]发现更深度的监控证据在有声思维记录中更常见，而更深度的[[regulation]]证据在日志中更常见，因此单独任何一种痕迹都不是[[metacognition|元认知]]主张的判据。

## 学习科学如何与相邻领域相关联

[[design-based-research|设计型研究]]是这个领域自己发展出来而非借来的方法：在一个真实运作的课堂里构建并修订一项干预，同时修订其理论依据，因此一项研究既产出工件也产出设计原则。这就是它与实验室实验的区别——后者通过固定语境来隔离一个原因——也是该领域的发现以"设计知识"而非效应量形式到来的原因。[[research-methods-aied]]取了另一个切口：那一页把整套方法谱系——实验、调查、定性工作、基准、综述、共识方法——当作工具之间的选择来巡览，权衡每种工具所能支持的论断的效度。本页从实质一侧读同一批语料，追问这套谱系在学习上确立了什么，并以一项方法的设计主张能否在与学习者的接触中存活来评判它。

[[learning-theories]]收集候选框架——行为主义、认知主义、建构主义、社会文化解释、动机与自我调节——作为解读 AI 的透镜。学习科学与它们共享词汇但不共享立场：在这里，理论是关于机制的断言，一项设计要么实例化它要么否证它，该领域的地位建立在实证与设计工作之上，而非框架的自洽。要了解一个框架断言什么，去读理论页；要了解一个框架累积了什么证据，来读本页。

这个领域也在构建理论，而非只检验借来的框架：[[theory-development-aied]]覆盖解释学习者、教师与 AI 系统如何交互的概念性工作，这也是该领域自身的构念在被测量之前先被论证的地方。它的设计通常被要求产出的，是[[transfer-of-learning|迁移]]——那种能活过导师、学科或任务之外的知识与技能——这就是为什么在工具内部测得的增益，比在工具之外测得的增益构成更弱的主张。也因为一个被设计的环境是复合干预，把结果归因于单个成分是该领域长期的测量难题：[[educational-measurement]]提供了使这种归因得以争论的心理测量工具，这就是为什么测量问题在这里很早出现而不是事后才出现。

[[cognitive-psychology]]是该领域最倚重的机制层学科，提供有限的工作记忆、编码与检索、可分解的知识成分以及学习者建模的诊断语言。学习科学使用这些机制而不归约为它们：其分析单元是一个承载社会、动机和语境变量的被设计环境，这些变量是实验室的记忆理论所不具备的，而它们的检验跑在整个干预上，而非孤立认知效应上。

[[pedagogy]]和[[learning-design]]覆盖实践——用哪种教学策略，以及如何把目标、活动和评估排序成一门课。两者都是学习科学从外部研究的描述与评估对象；这个领域不告诉一位教师下一步伸手去取哪个战术，它报告这些战术已被证明做了什么。学习设计是更近的亲属，因为两者都产出可实现并可检验的东西，但设计师的产出是一门可教的课程，而领域的产出是关于一般设计的知识。

这些发现只有在抵达教学时才有意义，而这趟旅程穿过三个页面。[[educational-development]]是承载它们的制度性实践——教师发展、标准、政策和身份认同工作决定一个经过验证的设计是否真能抵达课堂，这也是为什么该领域的证据总是领先于机构所实施的。[[teacher-education]]是知识在教师进入教室前必须落地的地方，[[teacher-role]]则是它之后落地的地方，体现在关于何时干预、用哪个工具、何时放任学习者的那种逐时刻判断。三者都不产出学习科学的发现，但三者都决定这些发现能否改变实践。

## 关联概念

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## 关联文章

- [[competent-generative-ai-use-measures-review-2026]] — 对胜任使用生成式 AI 之测量的综述与探索性元分析（Verí 2026）
- [[deceptive-overgeneralization-adaptive-learning-2026]] — 正确性掩盖了不完整的规则：适应性学习中的掌握停止规则（An, McLaren & Stamper 2026）
- [[demographic-signals-llm-student-assessment-2026]] — LLM 学生评估中人口统计信号的反事实审计（Rooein, Benedetto & Hovy 2026）
- [[learning-paths-patterns-learning-design-2026]] — 在 554 门课的 29,064 个活动上的马尔可夫链与模式挖掘（Divjak, Svetec & Horvat 2026）
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — 一个保护隐私、非诊断性的与 AI 相关卸责自检工具（Alam 2026）
- [[perrotta-zero-shot-governance-2026]] — 零样本治理：通用 AI 在政策中的应用，借 Redbox 代码库解读（Perrotta 2026）
- [[rachatasumrit-example-problem-ratio-2026]] — 为何最佳例题—问题比例取决于内容（Rachatasumrit, Koedinger & Carvalho 2025）
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — 教师设计有边界专家的聊天机器人，对教学做选择性委托（Reichert et al. 2026）
- [[sutedjo-faculty-genai-tpack-21-2026]] — 教师生成式 AI TPACK：内容知识强、技术整合知识弱（Sutedjo, Chowdhury & Liu 2026）
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot：一项大规模人机协同实时辅导的随机试验（Wang et al. 2024）
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — 一项 30 位专家参与的预注册 Delphi 研究，关于 GenAI 增强哪些学习过程、威胁哪些学习过程
- [[three-pathways-student-ai-interaction-2026]] — 学生与 AI 交互的类型学：64% 为被动或事务性，36% 为策略性对话
- [[agent-type-feedback-style-self-directed-learning-2026]] — 反馈风格，而非智能体类型，推动了自我调节的投入
- [[metacognitive-processes-genai-interaction-logs-2026]] — 过程证据是随渠道而定的
- [[sun-student-genai-entanglement-literacy-demands-2026]] — GenAI 使用的分布是一种制度性选择
- [[genai-reliance-human-agency-collaborative-learning-2026]] — 个体内部的依赖先于感知到的能动性的下降
