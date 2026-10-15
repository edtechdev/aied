---
title: 教育测量
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-literacy]
technology: [educational-nlp, knowledge-tracing, learning-analytics]
assessment: [assessment-validity, item-response-theory, psychometrically-aware-ai]
connected_faqs: [ai-literacy-evidence, evaluating-ai-interventions-methods]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/educational-measurement
source_updated: "2026-10-14T11:15:00-04:00"
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

> **教育测量** —— 用于量化和验证学习及其构念的心理测量理论与方法——贯穿于知识库的[[item-response-theory]]、[[knowledge-tracing]]与[[assessment-validity]]各页。[[llm]]时代迫使测量学把经典心理测量学与新的 AI 生成的作答流调和起来：自动评分、AI 预测的难度与[[multimodal]]痕迹都必须对照既有的测量原则加以验证，以保持信度与效度。

## 值得思考的问题

- 一个 LLM 预测某道考题是容易的，但实证测试数据表明学生觉得它难。你该[[trust]]哪一个，什么能让你相信机器的估计？
- 教育测量是关于把对学习的观察转化为站得住脚的[[quantitative-research|量化]]主张。当 AI 给一篇作文评分或给一个作答打分时，"分数"是否自动就是一种测量——还是必须先验证某些东西？验证什么？
- 一些[[research-methods-aied|研究]]表明，测评工具对人类所测量的东西可能与其对 LLM 所测量的东西不同——潜结构发生了分化。如果构念在人与 AI 之间确实不同，这对 AI 生成的成绩或难度评级意味着什么？
- AI 能以前所未有的规模评分、生成题目并预测难度。"更多的测量"就等于"更好的测量"吗？是什么让一个分数可靠且有效，而当测量由一个生成式模型完成时，这些标准还能被保持吗？
- 基准与 AI 生成的分数如今无处不在。在你把一个基于 AI 的评估当作关于学习者真实理解的证据、而不仅仅是一个数字之前，你需要看到什么？

## 引言

教育测量是一门把关于学习的观察——作答、行为、分数——转化为站得住脚的量化主张的学科。它涵盖构念定义、题目／试卷设计、标度、信度与效度。在[[ai-education|AI 在教育中的应用]]中，测量问题无处不在：一个[[benchmark|基准分数]]测量的是我们所想的吗？一个 AI 生成的成绩可靠且有效吗？AI 预测的题目难度与经验估计的难度一致吗？

## 教育测量在研究中的呈现

- **AI 对该领域长达十年的重塑：** [[xiong-ai-educational-measurement-review-2026|Xiong 与 Li（2026）]]通过一个"效率—增强—转型"框架，描绘了 AI 在三个时代（[[formative-assessment|形成性]]2015–2018、扩张 2019–2022、生成式 2023 至今）中的影响，涵盖 AI 在评分与[[automated-question-generation|题目生成]]、心理测量建模、测评创新与过程数据，以及[[bias-mitigation|公平]]／伦理／平等方面。他们主张一种把测量理论与 AI 方法相整合的新范式，并主张在人—[[student-ai-interaction|AI 互动]]的语境中重新概念化构念——这与[[assessment-latent-structure-human-llm-2026|潜结构比较]]在实证上探究的是同一条边界。
- **AI 预测的难度与校准：** [[llm-difficulty-calibration-programming-exams-2026|LLM 难度校准]]与[[llm-item-difficulty-prediction|题目难度预测]]使用 LLM 估计题目难度，而这必须对照心理测量估计加以验证（见[[item-response-theory]]）。[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]为这一前提补充了一项大规模 K-5 测试：在 5,170 道按 Rasch IRT 模型校准的数学与阅读题上，GPT-4o 的零样本难度评级与真实难度呈中到强的相关（r = 0.83 数学，r = 0.81 阅读），但在各年级间不均衡，且对 K 与一年级并不优于一个年级均值虚拟回归量。一种基于特征的方法——把 LLM 抽取的认知与语言特征喂给基于树的模型——达到最高 r = 0.87 的相关，年级与词数是首位的预测变量。该研究既展示了 AI 预测难度作为一种测量输入的前景，也展示了其局限，并为测评专业人员提供了一套实用的七步工作流。
- **当生成的难度标签并不测量难度时。** 一项对 311 道已部署的 LLM 生成题目的构念效度审计发现，生成的难度标签与它自身共同生成的 Bloom 层级相关达 ρ = 0.90，但与经验难度（经典测验理论的 1−p 指标）只有 ρ = 0.06，而选项长度反向运行（ρ = −0.18）——这是一个"标签即表层形式"的结果，它为上文对 AI 预测难度的乐观解读设定了上限（[[student-llm-use-ai-question-difficulty-data-science-2026|An 与 Wang（2026）]]）。
- **一个分类标签不能预测题目行为。** 在 265 道数学题上，预设的 Bloom 层级对难度方差的解释不足 5%（ε² = .043），对区分度毫无解释（Kruskal–Wallis H = 0.54，p = .77），而一个[[llm|LLM]]分类与专家编码者仅达到"一般"的一致（Cohen's κ = .22），并把题目拉向"应用／分析"区间（[[bloom-taxonomy-llm-item-classification-2026|Altaweel 与 Moussa（2026）]]）。
- **以解题路径而非措辞来评判生成的题目。** 把每道题已验证的推理树编码进来，使概念评估较次优方法提升 7.5%、难度估计提升 6.3%、能力评估提升 19.5%，而在那里一个零样本基线把一个套用模板的题目误标为"推理"、把一道几何题误标为"知道"（[[proiqa-math-item-quality-assessment-2026|Tong 等（2026）]]）。
- **AI [[assessment]]中的心理测量意识：** [[psychometrically-aware-ai|具备心理测量意识的 AI]]是这样一条标准，即基于 AI 的评估应与测量理论一致——经过校准、意识到不确定性并保持效度（见[[automated-assessment|具备置信意识的 AI 评估]]）。
- **掌握度标签是构建出来的，而非观察到的。** 在诊断需要真值的地方，[[personalized-neural-cognitive-architecture-search-2026|Jia 与 Dong（2026）]]通过一套效度控制程序构建它——课程概念图、经讲师审阅的知识点映射与收敛的测评证据——而不是把行为痕迹直接转换；他们的诊断与教育心理学家达到 Cohen's kappa 0.78，而 IRT 为 0.65。
- **自动评分与效度：** [[ai-scoring-language-bias-physics|AI 评分与语言偏见]]与[[multimodal-item-parameter-estimation-2026|多模态题目参数估计]]考察自动评分与多模态数据如何影响测量质量。
- **效度框架：** [[assessment-validity]]与[[educational-nlp]]为验证基于 LLM 的测量提供标准与工具。
- **潜结构比较：** [[assessment-latent-structure-human-llm-2026|Strugatski 等（2026）]]通过检验测评工具对人与 LLM 是否显示*相同的因素结构*，把教育测量扩展到 LLM 场景。使用 EFA、因素同形性与重抽样，他们表明 LLM 与人的潜结构在[[chemistry-education|化学]]与定量推理工具上都系统性分化，这意味着所测量的构念在不同总体之间存在差异——这是在假定人的效度证据可迁移到 AI 之前必需的一次检查。
- **AI 作为一个具有可测误差的评分者：** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros 与 Kortemeyer]]把 AI 赋予的分数视为带有多个误差来源（题目、运行、任务）的可错观察，置于概化理论与 Kane 的论证式效度之下。对一场 296 名学生的手写普通化学考试所做的信度分析显示，*总分*在五次 AI 运行间高度稳定（ICC(A,1) = 0.967，Kendall's W = 0.959，60 分制的 95% 重复性系数为 5.33），而题目级稳定性较低（ICC(A,1) = 0.836）——非系统性误差在求和时部分抵消（一种把总分一致性提升至 R² = 0.91 的 Spearman–Brown 聚合效应），而一个小的正截距配合斜率 < 1 揭示出"怯于评分的评分者"式的分数压缩偏见。这把运行平均与聚合处理框定为测量设计决策，并推动了以[[item-response-theory|IRT]]风险校准的置信过滤，作为信任自动化测量之前的一种效度保障。
- **模型版本是一种测量条件。** [[semantic-variability-llm-conversation-assessment-2026|Hao（2026）]]发现，在四个 LLM 上，模型内回复相似度（0.715–0.795）一致地高于模型间相似度（0.443–0.604），因此为某一次部署确立的评分论证不会自动迁移到它的后继版本。

- **零结果除非有界，否则不构成等价性的证据。** StudentBench 用两个单侧检验对照 ±0.25 个汇总标准差来检验"汇总的 AI 辅导是否匹配专家人类辅导"，而非检验差异，报告的调整后差异为 −0.58 个百分点（90% CI [−2.18, 1.03]）——正是这一选择把一个功效不足的零结果转化为等价性主张（[[studentbench-ai-human-tutoring-gre-2026|Northcutt 等（2026）]]）。

- **随新数据而非全部历史而伸缩的校准：** [[bayesian-consensus-irt-item-banks-2026|Jewsbury 等（2026）]]直面 AI 题目生成在操作上的后果——题库更大、更稀疏、更新更频繁，以至于每次更新都重新拟合所有累积作答数据成本高昂，且可能超出可用内存。他们的*共识校准*通过把每个时期独立校准的后验抽样映射到一个共同量尺上（采用逐次抽样的稳健 Haebraha 链接，从而使链接不确定性得以传播而非被当作固定变换），再以高斯后验之积聚合（从中减去每个时期*估计的、层次化的*先验，并重新引入一个共识先验）。在跨四个时期的 Duolingo 英语测试操作数据上，该聚合在后验均值上与"汇总单次运行"基准相匹配（难度 r = .998，对数区分度 r = .991），标准差也相匹配（r = .970 与 .920），且共识／汇总标准差之比在曝光三分位间存在 0.91–0.98 的残差欠分散——集中在最稀疏的题目三分位，那里先验重复计算咬得最狠。这里的测量教训是双重的：一个估计出的先验无法用并行贝叶斯计算的标准子集先验手段来处理，而后验*分散度*——自适应选题与评分所消耗的不确定性——与后验均值一样是该校正的目标。
- **从两个已发表的数字识别一个系统的分散度：** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales 等（2026）]]表明，一个[[learning-gains|成绩]]分布的标准差可以仅从已发表的汇总统计量——均值与达到或超过某个固定熟练切点的学生比例——中恢复，因为在某个分布假设下 σ = (c − μ) / z(1 − p)。应用于 PISA 2025 萨尔瓦多（[[math-education|数学]]均值 346，12.28% 达到或超过 420.07 的二级切点），隐含的 σ 为 63.8（阅读 76.8，科学 63.8），远低于 100 的国际基准，如预期，因为这是一个被压在量表地板上的分布；三个估计由独立的数字对得到，彼此相差约 13 分以内，构成一次温和的内部一致性检查。二级比例对每个 PISA 体系都有报告，并支撑 SDG 4.1.1 指标，因此这一识别不需要微观数据；同一篇论文还以效应量的分母问题示范：报告同一个数学差距的三种方式——129 分、1.29 个国际标准差，或 2.02 个萨尔瓦多分布自身的标准差——其论点是：被除以自身样本分散度的标准化效应量，不能合法地在研究间比较。

## 知识库中的测量工具

教育测量的一个核心功能是**工具**的开发、验证与使用——把构念操作化的具体量表、测验与编码方案。知识库的文章记录了面向 AI 教育构念的广泛工具，可以按它们测量什么以及按测量方式来分类。

### AI／生成式 AI 素养工具

AI 素养是知识库中工具覆盖最丰富的构念。存在两大族：**基于表现的测试**（客观、较少受自陈偏见影响）与**自陈量表**（主观、捕捉感知到的能力）。第二族的取舍是[[self-report-measures]]的主题：自陈能廉价地触及态度与感知，但它无法承载关于能力或行为的主张，而知识库记录了在自陈与表现测量并行比较时存在 40% 的高估差距。

- **基于表现（客观）的测量。** 旗舰是[[jin-glat-genai-literacy-assessment|GLAT（生成式 AI 素养测评）]]，一个建立在 25 个概念蓝图之上、横跨四个维度（理解与领会、使用与应用、评估与创造、[[ethics]]）的 20 道选择题工具，在 355 名学生上用 CTT + 2PL IRT 验证（RMSEA = 0.03，CFI = 0.97，α = 0.80，ω = 0.81）。关键的是，GLAT 分数预测了 AI 辅助任务表现，而自陈不能——这是"**基于表现的测量优于自陈**"就 AI 素养而言的证据。[[ai-literacy-assessment-misalignment]]中的相关工作量化了自陈与基于表现的 AI 素养之间的差距（教师高估约 40%），而[[tracing-genai-literacy-interaction-patterns]]追踪真实的学生—AI 互动模式，而非依赖所报告的用量。
- **测量教师做了什么，而不只是他们知道什么。** 一项 486 名教师的验证产出了一个六维工具，用于测量教师对生成式 AI 的教育性使用——管理、材料制作、测评、赋能、多样性、动机——确认了使用是多维的，尽管自陈无法承载关于课堂实践的主张（[[questionnaire-teachers-genai-uses-validation-2026|Pérez-Montesdeoca 等（2026）]]）。
- **自陈量表。** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]把 AI 素养操作化为三个领域（AI 概念；应用与技术技能；AI 数字公民）与四个分层级别；[[ai-literacy-heptagon-2026|AI 素养七边形]]构建七个维度（技术、应用、[[critical-thinking|批判性思维]]、伦理、社会影响、整合、法律／[[regulation|监管]]）与四个对齐 Bloom 的熟练层级。[[genai-skill-bypass-literacy]]为学生与教职工描绘了不同的 AI 素养路径，而[[panciroli-ai-literacy-episodes-situated-learning]]把素养评估锚定在[[situated-learning|情境学习]]片段上。面向更年幼学习者的工具开发也在推进：[[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan 与 Srikoon（2025）]]的 AI 素养自评问卷（AIL-SAQ）是一个面向四至六年级学生的 15 项自陈量表，围绕"学习关于 AI 的知识、学习 AI 如何运作、学习与 AI 共同生活"组织，在 335 名学生上用探索性因素分析、又在另外 579 名上用验证性因素分析验证，总体 Cronbach's alpha 为 .934。
- **[[discipline-specific-aied|领域特定的]] AI 素养。** [[teacher-education-ai-literacy-sdt-2026]]在一个[[self-determination-theory]]框架内开发[[teacher-role|教师]]AI 素养测量（382 名教师，经因素验证）；[[conceptualizing-preservice-teachers-ai-readiness-2026]]通过智能[[tpack]]测量职前[[teacher-ai-competency|教师 AI 准备度]]；[[ai-literacy-career-adaptability-business-2026]]在[[business-education|商业教育]]中评估学生 AI 准备度与[[career-development-and-readiness|职业适应力]]；而[[llm-critical-thinking-teamwork-review]]综述了面向 LLM 支持的批判性思维与团队合作结果的工具。延伸到教育者测量，Teachers' AI Literacy Scale（TAILS）把 ED-AI 框架的六个维度操作化，以专门测量[[teacher-education|语言教师教育]]中的 AI 素养（经因素分析验证），填补了那些只针对学生或普通用户的评估所留下的空白。

### 态度、接受度与动机工具

- **技术接受度。** 植根于 TAM／UTAUT 的工具测量感知有用性、易用性与使用 AI 的行为意向。见[[technology-acceptance-model]]及其在[[acceptance-ai-english-tools-2026]]（AI 辅助的英语学习工具，跨学科／熟练度群体的心理测量验证）与[[tian-genai-learning-adoption-pathways-2026|生成式 AI 采纳路径]]中的应用。
- **自我效能与动机。** [[self-efficacy]]工具与动机量表（例如在[[teacher-education-ai-literacy-sdt-2026]]中基于 SDT 的[[agency|自主性]]／胜任力／关系性测量）捕捉 AI 使用的动机前因与后果。它们连接到[[student-engagement]]与[[prior-knowledge]]的测量。
- **项目式学习的感知。** Zhu 与 Kong（2026）开发并验证了一个语境扎根的 AI [[project-based-learning|项目式学习]]量表（AI-PBLS），测量学生在 AI 素养课程中使用 AI 进行[[problem-solving|问题解决]]时对 PBL 的感知（对 1,027 名[[k-12|中学]]与大学生做 EFA 与 CFA，446 人完整作答），而他们的 SEM 应用展示了赋能与伦理意识如何中介"PBL 到满意度"的关系——这是一个用于评估 AI 应用中所感知到的 PBL 体验的稳健工具。

### 测评质量与效度工具

- **自动评分与量规工具。** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]]生成测评量规；[[ai-assisted-instructor-supervised-grading-feedback]]按细化[[feedback]]标准评估 AI 评分的质量；[[ai-assessment-scale-reform]]处理 AI 如何扰乱传统测评量表。
- **强化效度的设计。** [[roe-assessment-twins-2026|测评双生子]]把一个易受[[generative-ai|生成式 AI]]影响的任务与一个不易受影响的等价任务配对，两者评估相同的结果，并在 Messick 效度证据的六个脉络上映射威胁。
- **按辅助程度切分结果空间。** 一个测量项目把**模型作者身份**——学习者在多大程度上（而非系统）发起了一件制品在领域层面的内容——定义为一个四侧面、四层级的构念，并报告在 24 项被审计的研究中，几乎所有都在 AI 可用的情况下测量了表现，而没有一项在撤销辅助后测量（[[ai-writes-code-student-writes-model-2026|Gousopoulos（2026）]]）。
- **话语与参与的编码。** [[icap-cognitive-engagement-llm-agents]]把[[icap-framework|ICAP]]框架扩展为一个 7 点认知参与编码方案，把人类标注（κ = 0.906–0.998）与基于 LLM 的标注（κ = 0.541–0.609）作比较——这是一项测量工具研究，表明自动编码仍落后于受训人类。自动编码也正通过[[prompt-engineering|语境感知的提示]]推进，它建模语境依赖并融合认知与社会能力，从过程数据中编码[[collaborative-learning|协作式问题解决]]技能，性能优于强基线——使大规模、实时的评估成为可能，同时应对了人工编码的劳动密集性。
- **技能抽取。** [[principal-trait-analysis-human-ai-skills-2026]]通过主要特质分析——一种协作能力的数据驱动测量——从人—AI 协作中导出"技能"。

### 测量方式至关重要

知识库的证据反复表明，一个构念*如何*被测量会改变结论。自陈的 AI 素养与基于表现的测量急剧分化（[[ai-literacy-assessment-misalignment]]）；LLM 对参与的标注与受训人类编码分化（[[icap-cognitive-engagement-llm-agents]]）；人与 LLM 之间的潜结构不同（[[assessment-latent-structure-human-llm-2026]]）。因此，严格的工具验证——信度、结构效度、外部／预测效度——不是一种形式，而是可信的 AI 教育证据的基石，它连接到[[assessment-validity]]与[[psychometrically-aware-ai]]。一项近期的材料层面研究展示了一个简单的接受度主张背后有多少验证工作：[[age-tiered-ai-literacy-guidebooks-2026|Wang、Chuang 与 Wu（2026）]]用分半设计（开发样本做 EFA，留出一半做 CFA）验证了两本分年龄的 AI 素养指南，报告 KMO = .820、解释 67.3% 的方差、可接受的学生拟合（CFI = .943，RMSEA = .059，SRMR = .059）、.84 到 .90 的组合信度，以及跨版本测量等价性——然后记录了工具在哪里出现张力：HTMT 值最高达 .950，且一个受约束的"趣味性—意向"相关性不得不被检验是否等于 1。他们对区分度项目功能的补充检查是本页所主张的诚实之范本：等价性成立，但低变异的作答模式意味着一旦排除这些年幼学生，一个群体差异就削弱了，而论文把它与头条结果并列报告，而非取而代之。

[[assessing-student-drive-framework-2025|Oliveira 等（2025）]]展示了一种新过程测量的验证序列：把学生的生成式 AI 互动日志按一个 35 个子类别的分类法评分，只达到中等的评分者间一致（Cohen's κ = 0.44），却与作文分数相关 r = 0.54，从而为新测量提供了聚合效度支持。
- **一致系数是语料属性，分数是共同产物。** 一项对 60 篇营销帖子的自动评分验证报告：LLM 的绝对一致 ICC(2,1) 为 .435，"规则 + LLM"混合为 .266，确定性规则为 .091，不确定性由 2,000 个"作者聚类"自助样本估计，MAE 为 6.28–17.22 分；加入研究者撰写的锚定样本把评分者间一致从 .338 提到 .902，显示这些估计在多大程度上依赖于参考集（[[automated-scoring-marketing-posts-agreement-2026]]）。一项对[[physics-education|物理]]基准的专家重评审计在工具层面提出了互补的论点：被审计拒绝中 95.20% 是基准或评分者的错误，而非模型失败，因此一个被测分数必须被报告为题库、量规与评分者三者的共同属性（[[frontier-models-physics-benchmark-audit-2026]]）。

**信度部分可以从模型自身恢复。** [[know-when-to-trust-ai-scoring-reliability-2026|Organisciak 与 Acar（2026）]]在 20,000 多条"替代用途测验"的作答上评估了三种廉价的 LLM 评分升级：读取模型自身的 token 级置信度、取它前 n 个预测分数的概率加权均值而非单一最佳猜测，以及跨模型集成。每一种都改善了与人类分数的一致（相关性从 r = 0.781 升至 0.823，RMSE 在最佳配置下从 0.599 降至 0.498），而他们的诊断定位出单次评分的一个具体失败：模型表达的置信度与其准确性负相关（β = −0.602）。这是一个测量方式的结果而非模型结果——同一个模型，以不同方式评分，就是一个更可靠的工具——它与上文的语料级一致证据并列而立。

一项对 33 个教师 AI 素养工具的 2026 年评估展示了工具开发在哪里成熟、在哪里不成熟。[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal、Mohd Matore 与 Maat（2026）]]用一套改编自 COSMIN 与 Terwee 等（2007）的决策矩阵给这些工具分级，发现内部一致性是最强的领域（33 个中 28 个为 A 级，84.8%），公平性最弱，只有五个工具（15.2%）报告了测量等价性或区分度项目功能证据。结构效度很强，24 个工具（72.7%）通过 CFA、PLS-SEM 或 IRT 建模达到 A 级，而内容效度主要依赖质性评审，21 个工具（63.6%）因缺乏定量的专家一致统计量而为 B 级。

自动选题可以在不重塑工具的前提下缩短它：在一个合并的两波样本（N = 305、342）上做的蚁群优化产出一个 12 项简版，在各维度上与完整量表相关 r = 0.910–0.944，尽管每个维度只有两个题目覆盖的内容范围更窄（[[genai-srl-l2-writing-scale-2026|Wang、Zhang 与 Zhang（2026）]]）。

## 问题与局限：测量可能遗漏或弄错什么

教育测量强大但可错。理解它的失败模式，对于批判性地阅读 AI 教育证据——以及识别一个表面的学习增益或构念主张何时可能是测量的产物而非真实效应——至关重要。

- **信度局限。** 测量从不是完全可靠的；误差方差始终存在。当工具的内部一致性或重测稳定性较低时，观察到的差异可能只是噪声。在 AI 语境中，新的失败模式使这一点加重：LLM 生成的作答可以被打上高度机器一致的分数，却与人类评分分化（[[icap-cognitive-engagement-llm-agents]]），而自动评分可以*内部*一致却在系统上错误——有精度而无效度。AIEd 研究的[[limitations-in-aied-research|测量局限]]把不可靠的工具记录为一个贯穿性的弱点。
- **把编码不确定性当作误差会把两种失败混为一谈。** 在一场 30 道陈述的心理健康知识测试中，准确率计分把*不知道*算作不正确，然而在一个事实上 67.3% 的学生选择了它，而 60.6% 的模型作答是明确的错误——一个强制"正确／错误"的格式无法把不确定性从错误信念中分离出来（[[mental-health-literacy-students-llms-2026|Richter 等，2026]]）。
- **评分者一致设定了实践天花板。** 一项在乌拉圭[[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB*]]上的大规模验证发现，人类评分者一致本身就为 AI 评分设定了实践天花板：十位专家独立给 50 篇文本评分，没有任何量规条目与共识达到全体一致，分歧最大的评分者通常低于 80% 一致，而最好的超过 90%，而 Cohen's Kappa 对几个几乎所有作答都满足的偏斜条目仅为轻微或一般。因此作者对照一个本身不完美的参考标准来评判自动分数——十位评分者、对多数作答只有一个操作分数、以及几个处于常规 70% 可接受性区间的条目——这是对任何建立在单一评分者操作标签之上的测量主张的告诫。
- **效度——测量了错误的东西。** 效度追问的是一个工具是否测量了它声称测量的构念。常见的失败包括**构念代表性不足**（一个只抽样技术知识、遗漏伦理的 AI 素养测试）与**构念无关变异**（一个奖励阅读流畅性而非目标技能的题目）。[[ai-scoring-language-bias-physics|AI 评分与语言偏见]]展示了表层特征——语言、措辞、风格——如何以与预期构念无关的方式驱动自动分数。[[assessment-validity]]是对这些威胁的护栏。


- **一个量表可以返回出预期数量的因子，却没有测量预期的构念。** [[ai-empathy-scale-psychometric-evaluation-2026|Kang、Lee 与 Kang（2026）]]从一个 42 项的 AI 共情量表中保留了六个因子，但题目并没有恢复出六个预期的子因子——亲社会意向没有形成因子——因此该结构被呈现为暂定的。
- **自陈差距。** 自陈测量捕捉*感知到的*能力，而非实际能力。知识库反复显示自陈的 AI 素养与基于表现的测量急剧分化（[[ai-literacy-assessment-misalignment]]，教师高估约 40%），以及自陈在表现测试成功之处无法预测真实的 AI 辅助表现（[[jin-glat-genai-literacy-assessment|GLAT]]）。依赖自陈的测量可能系统性地夸大构念并掩盖真实的技能缺口。
- **汇总估计是脆弱的。** 一项 2026 年的结构化综述只汇总同一样本的主观—客观 AI 素养相关（N = 2,765），给出 r = .055（Hartung-Knapp 95% CI [−.047, .156]）；在 k = 3、异质性估计量彼此不一致、且一项研究承载 77.2% 权重的情况下，它无法设定熟练度切点（[[competent-generative-ai-use-measures-review-2026|Verí（2026）]]）。
- **不能跨总体迁移的构念。** [[assessment-latent-structure-human-llm-2026|Strugatski 等]]表明，测评工具对人与 LLM 可以有*不同的因素结构*——即相同的题目可能在不同总体中测量不同的潜构念。即便在人内部，在某一群体（例如西化的、资源充足的[[higher-ed]]）上验证过的工具也可能无法推广到其他群体（[[global-south]]），这是对 AI 教育测量可推广性的关切。
- **测量可能遗漏什么。** 一些对 AI 教育学习最核心的构念恰恰是最难测量好的——因而最容易被工具遗漏或扭曲：
  - **过程与策略。** 标准的结果测量捕捉的是学习的*产物*，而非*过程*。它们可能遗漏学生实际如何与 AI 互动——[[cognitive-offloading|过度依赖]]、不加反思的接受、批判性的核实。[[tracing-genai-literacy-interaction-patterns]]恰恰使用互动痕迹，因为自陈与结果测试会遗漏这些动态。
  - **纵向与持久的学习。** 一次单一的后测可能显示出由 AI 辅助带来的虚高表现，同时遗漏了持久的、无辅助知识的侵蚀（[[genai-performance-vs-learning|表现—学习差距]]）。单一时间点的测量可能对学习给出主动误导的印象。
  - **公平与获取。** 假定设备／连接获取是均一的工具，或在特权样本上常模化的工具，可能遗漏——或系统性地低测——[[equity-in-ai-education|资源不足]][[learners]]的能力，把获取差距误归为能力差距。
  - **[[affective-computing|情感]]与动机状态。** 参与、动机与自我效能通常以自陈测量，因而继承了上述自陈差距；它们可能无法捕捉驱动学习的情境化的、瞬间的动态。
- **自动测量可以自信地错。** 高机器置信度与不透明评分的组合是 AI 时代特有的风险：一个 LLM 评分者或标注者可以产出高度自我一致却在系统上有偏的分数，而严谨的表象（大 N、高的 LLM 间一致性）可以掩盖无效度。[[ai-ed-evaluation]]与[[psychometrically-aware-ai]]框架是对症之药——要求在信任自动化测量之前先有校准、不确定性意识与效度证据。

简言之，教育测量可以**遗漏**它没有抽样的东西（过程、持久性、获取、情感），也可以**弄错**它抽样不良的东西（自我感知、表层特征、跨总体构念）。因此阅读 AI 教育发现，需要追问的不只是*测量了什么*，还有*如何*测量的——以及工具可能未能捕捉到什么。


- **可审计的编码把定义性误差与模型误差分开。** EduBehaviors 把一个构念分解为单独标注的可观察行为加上一条明确的聚合规则，于是评审者可以看到哪些证据产生了某个标签，并在规则改变后重新推导标签而无需新的模型调用；它在 Teacher TalkMoves 上达到 macro-F1 0.673，与直接的[[llm|LLM]]提示相比具有竞争力（[[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado 等，2026]]）。

## 关联

教育测量是[[item-response-theory]]、[[assessment-validity]]、[[knowledge-tracing]]与[[student-modeling]]的基础。它连接到[[learning-analytics]]（对学习数据的测量）、[[educational-nlp]]（测量语言）与[[psychometrically-aware-ai]]（与测量理论一致的 AI）。它的效度与信度关切支撑着[[ai-ed-evaluation]]以及该领域的[[limitations-in-aied-research|测量局限]]。就它所测量的构念而言，它与[[ai-literacy]]、[[technology-acceptance-model]]、[[self-efficacy]]、[[motivation]]和[[student-engagement]]相交。
- **支持性干预的因果建模（2026）：** 一个结构因果建模方案把教育测评从关联式的项目反应理论信念更新，推向干预式与反事实推理（例如提示的效果），其结构方程由专家用纯粹逻辑的信息引出，并在义务教育阶段的算法技能任务上示例说明（[[causal-modeling-competency-assessment-2026]]）。

## 关联概念

- [[interpreting-and-applying-aied-research]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[psychometrically-aware-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[educational-nlp]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[ai-assisted-educational-research]] — AI 辅助的教育研究
- [[automated-assessment]]
- [[limitations-in-aied-research]]
- [[ai-literacy]]
- [[technology-acceptance-model]]
- [[self-efficacy]]
- [[benchmark]]
- [[self-report-measures]]
- [[motivation]]
- [[student-engagement]]

## 关联文章
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 大规模写作测评中 AI 辅助评分的人在回路框架
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[causal-modeling-competency-assessment-2026]] — 学生能力测评中支持性干预的因果建模
- [[assessment-latent-structure-human-llm-2026]] — 测评工具对人类与 LLM 测量的是同样的东西吗？（Strugatski 等，2026）
- [[jin-glat-genai-literacy-assessment]] — GLAT：经 IRT 验证的生成式 AI 素养测试（Jin 等，2025）
- [[icap-cognitive-engagement-llm-agents]] — 用扩展的 ICAP 框架测量认知参与
- [[roe-assessment-twins-2026]] — 在生成式 AI 下强化测评效度的测评双生子
- [[ai-literacy-heptagon-2026]] — AI 素养七边形
- [[ai-literacy-assessment-misalignment]] — 自陈与表现式 AI 素养的错位
- [[teacher-education-ai-literacy-sdt-2026]] — 通过自我决定理论看教师 AI 素养
- [[acceptance-ai-english-tools-2026]] — 英语学习工具的 AI 接受度测量
- [[llm-difficulty-calibration-programming-exams-2026]] — 从被评估的模型到评估辅助
- [[llm-item-difficulty-prediction]] — LLM 题目难度预测的认知评估
- [[multimodal-item-parameter-estimation-2026]] — 多模态题目参数估计
- [[ai-scoring-language-bias-physics]] — 物理中的 AI 评分与语言偏见
- [[ai-writes-code-student-writes-model-2026]] — 模型作者身份：用生成式 AI 做"建造中学"的理论与测量
- [[assessing-student-drive-framework-2025]] — DRIVE：通过生成式 AI 互动评估学习（DRI + 可见的专长）
- [[xiong-ai-educational-measurement-review-2026]] — AI 在教育测量中的十年主题综述
- [[questionnaire-teachers-genai-uses-validation-2026]] — 教师生成式 AI 使用问卷（Pérez-Montesdeoca 等，2026）
- [[personalized-neural-cognitive-architecture-search-2026]] — 面向学习者画像的 AutoML 个性化神经认知架构搜索
- [[razavi-powers-item-difficulty-llm-2026]] — 用 LLM 与基于树的机器学习估计题目难度
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — 分半 EFA／CFA 验证，含等价性、HTMT 与 DIF 检查，以及对趣味性—意向构念重叠的诚实说明
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA：基于过程的数学题目质量评估
- [[competent-generative-ai-use-measures-review-2026]] — 超越 AI 素养：对"胜任的生成式 AI 使用"测量的一次结构化综述与探索性元分析
- [[bayesian-consensus-irt-item-banks-2026]] — 贝叶斯共识校准：对持续演化的 IRT 题库做分而治之的再校准（Jewsbury 等，2026）
- [[el-salvador-ai-tutoring-selection-claim-2026]] — 为萨尔瓦多 AI 辅导试点的学习主张划定边界（Restrepo Morales 等，2026）
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust：模型自置信、概率化评分与集成作为评分信度杠杆
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — 一个经验证的 15 项小学高年级 AI 素养自评问卷（Thianwan 与 Srikoon，2025）
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 在 COSMIN 式质量领域上对 33 个教师 AI 素养工具的系统评估（Zainal 等，2026）
- [[mental-health-literacy-students-llms-2026]] — 心理学学生与大型语言模型的心理健康素养
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench：AI 与人类辅导在 GRE 学习增益上等价
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — 学生对 LLM 的使用与数据科学课程中 AI 生成题目难度的局限
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors：面向教育对话可审计编码的断言式模式
- [[synthetic-educational-data-structural-fidelity-2026]] — 保真度指标遗漏了什么：对合成教育数据的一次结构检查

- [[ai-empathy-scale-psychometric-evaluation-2026]] — 一个 42 项的 AI 共情量表，其六个因子未能恢复六个预期子因子
- [[genai-srl-l2-writing-scale-2026]] — 面向 L2 写作的六维生成式 AI-SRL 量表；经蚁群优化的 12 项简版与完整量表一致（r = 0.910–0.944）但收窄了内容覆盖
- [[bloom-taxonomy-llm-item-classification-2026]] — 认知分类能预测经验题目行为吗？在四至十二年级把 Bloom 分类学与国家集中化数学题的心理测量属性对齐
