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
translation_of: concepts/educational-measurement
source_updated: "2026-10-06T02:05:50-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育测量** —— 量化并验证学习及其构念的心理测量学理论与方法 —— 贯穿了本知识库的 [[item-response-theory]]、[[knowledge-tracing]] 与 [[assessment-validity]] 页面。[[llm]] 时代迫使测量学把经典心理测量学与新的人工智能生成响应流调和起来：自动评分、人工智能预测难度与 [[multimodal]] 轨迹，都必须依据既有的测量原则加以验证，才能保持信度与效度。

## 值得思考的问题

- 一个大模型预测某道考题很容易，但实测数据显示学生觉得它很难。你该 [[trust]] 哪个，什么才会让你相信机器的估计？
- 教育测量是把对学习的观察转化为站得住脚的 [[quantitative-research|量化]] 论断。当人工智能给一篇作文或一个回答打分时，“分数”自动就是测量吗 —— 还是必须先验证什么？验证什么？
- 一些 [[research-methods-aied|研究]] 提示，评估工具对人类和对大模型所测量的可能不是同一件事 —— 潜在结构发生了分化。如果构念在人类与人工智能之间确实不同，这对人工智能生成的分数或难度评级意味着什么？
- 人工智能可以以前所未有的规模评分、生成试题并预测难度。“更多的测量”等于“更好的测量”吗？什么让一个分数可靠而有效，而当测量由生成式模型完成时，这些标准还能保住吗？
- 基准与人工智能生成的分数如今无处不在。在把基于人工智能的评估当作关于学习者真实理解的证据之前，你需要看到什么，而不只是一个数字？

## 引言

教育测量是关于学习（回答、行为、分数）的观察转化为站得住脚的量化论断的学科。它涵盖构念定义、试题与测验设计、量表化、信度与效度。在 [[ai-education|教育中的人工智能]] 中，测量问题无处不在：一个 [[benchmark|基准分数]] 测量的是否是我们以为的东西？人工智能生成的分数是否可靠有效？人工智能预测的题目难度与经验估计的难度是否一致？

## 教育测量在研究中的体现

- **人工智能对该领域长达十年的重塑：** [[xiong-ai-educational-measurement-review-2026|Xiong and Li (2026)]] 通过“效率—增强—转型”框架描绘了人工智能在三个时代的影响（[[formative-assessment|形成性]] 2015–2018、扩展 2019–2022、生成式 2023 至今），涵盖评分与 [[automated-question-generation|试题生成]] 中的人工智能、心理测量建模、评估创新与过程数据，以及 [[bias-mitigation|公平]]／伦理／公平（equity）。他们主张建立把测量理论与人工智能方法整合起来的新范式，并在人与 [[student-ai-interaction|人工智能互动]] 的语境中重新概念化构念 —— 这正是 [[assessment-latent-structure-human-llm-2026|潜在结构比较]] 实证探究的同一条边界。
- **人工智能预测的难度与校准：** [[llm-difficulty-calibration-programming-exams-2026|大模型难度校准]] 与 [[llm-item-difficulty-prediction|题目难度预测]] 用大模型估计题目难度，其结果必须对照心理测量估计加以验证（见 [[item-response-theory]]）。[[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] 为这一前提补充了一项大规模 K-5 检验：在按 Rasch IRT 模型校准的 5,170 道数学与阅读题目上，GPT-4o 的零样本难度评级与真实难度呈中到强相关（数学 r = 0.83，阅读 r = 0.81），但在各年级间并不均衡，且在 K 与 1 年级并不优于年级均值虚拟回归量。一种基于特征的方法 —— 把大模型抽取的认知与语言特征输入树模型 —— 达到了最高 r = 0.87 的相关，其中年级与词数是首要预测因子。该研究既展示了人工智能预测难度作为测量输入的前景，也展示了它的局限，并为测验专业人员提供了一套实用的七步工作流。
- **当生成的难度标签并不能测量难度时。** 对 311 道已部署的大模型生成题目所做的构念效度审计发现，生成的难度标签与其共同生成的 Bloom 层级在 ρ=0.90 上相关，但与经验难度（经典测验理论的 1−p 指标）仅在 ρ=0.06 上相关，而选项长度呈反向关系（ρ=−0.18） —— 这是一个“标签即表层形式”的结果，为上文对人工智能预测难度的乐观解读设定了上限（[[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]）。
- **依据解题路径而非措辞来评判生成的题目。** 把每道题目已验证的推理树编码进来，使概念评估的性能比次优方法高出 7.5%、难度估计高出 6.3%、能力评估高出 19.5%；在这些任务中，零样本基线曾把一道套模板的题目误标为“推理（Reasoning）”，把一道几何题目误标为“知道（Knowing）”（[[proiqa-math-item-quality-assessment-2026|Tong et al. (2026)]]）。
- **人工智能 [[assessment]] 中的心理测量学意识：** [[psychometrically-aware-ai|具备心理测量学意识的人工智能]] 是要求基于人工智能的评估与测量理论相一致的标准 —— 经过校准、具备不确定性意识并保持效度（见 [[automated-assessment|Confidence Aware AI Assessment]]）。
- **掌握标签是被构造出来的，而非观察到的。** 在诊断需要真值之处，[[personalized-neural-cognitive-architecture-search-2026|Jia and Dong (2026)]] 通过一套效度控制程序构造了它 —— 课程概念图、经教师审阅的知识点映射与汇聚性评估证据 —— 而不是直接把行为轨迹转换过来；他们的诊断与教育心理学家的吻合度达到 Cohen's kappa 0.78，而 IRT 为 0.65。
- **自动评分与效度：** [[ai-scoring-language-bias-physics|人工智能评分与语言偏误]] 与 [[multimodal-item-parameter-estimation-2026|多模态题目参数估计]] 考察了自动评分与多模态数据如何影响测量质量。
- **效度框架：** [[assessment-validity]] 与 [[educational-nlp]] 为验证基于大模型的测量提供了标准与工具。
- **潜在结构比较：** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] 把教育测量扩展到大模型情境，检验评估工具对人类和对大模型是否呈现*相同的因子结构*。借助 EFA、因子一致性与重抽样，他们表明大模型与人类的潜在结构在 [[chemistry-education|化学]] 与量化推理工具上系统性地分化，意味着不同人群所测量的构念并不相同 —— 这是在假设人类的效度证据可迁移到人工智能之前必须做的一项检验。
- **作为评分者、带有可测量误差的人工智能：** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] 把人工智能给出的分数当作具有多重误差来源（题目、运行、任务）的易错观察，置于概化理论与 Kane 的论证式效度框架之下。对一场 296 名学生手写普通化学考试的可靠性分析显示，*总分* 在五次人工智能运行之间高度稳定（ICC(A,1) = 0.967，Kendall's W = 0.959，60 分制下的 95% 重复性系数为 5.33），而题目层面的稳定性较低（ICC(A,1) = 0.836） —— 非系统性误差在加总时部分相互抵消（一种使总分一致性提升到 R² = 0.91 的 Spearman–Brown 聚合效应），而一个较小的正截距配合斜率 < 1 则暴露出“胆怯的评分者”式的分数压缩偏误。这使运行平均与聚合成为测量设计的决策，并促使在信任自动测量之前采用按 [[item-response-theory|IRT]] 风险校准的置信度过滤作为效度保障。
- **模型版本是测量条件。** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]] 发现，在四个大模型上，模型内部回答相似度（0.715–0.795）始终高于模型之间的相似度（0.443–0.604），因此为某一部署建立起来的评分论证不会自动迁移到其后续版本。

- **零结果不等于等效的证据，除非它是有界的。** StudentBench 用两次单侧检验来检验汇总后的人工智能辅导是否与专家人类辅导相当，其界设为汇总标准差的 ±0.25，而不是对差异做检验，报告出经调整的差异为 −0.58 个百分点（90% CI [-2.18, 1.03]） —— 正是这一选择把一个功效不足的零结果变成了等效性论断（[[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]）。

- **随新数据而非全部历史扩展的校准：** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] 直面人工智能生成题目带来的操作性后果 —— 题库比传统题库更大、更稀疏、更新更频繁，每次更新都重新拟合所有累积响应数据代价高昂，且可能超出可用内存。他们的*共识校准* 把各自独立校准的季度时段通过一条按次抽样的稳健 Haebara 链接映射到同一量尺上（使链接的不确定性得以传播，而不被当作固定变换），再把各时段作为高斯后验的乘积聚合，从每一时段的*估计的、层级式* 先验中减去并重新植入一个共识先验。在跨四个时段的 Duolingo 英语测试真实运行数据上，聚合结果在难度（r = .998）与对数区分度（r = .991）的后验均值上，以及标准差（r = .970 与 .920）上，都与汇总后的单次运行基准相符，共识／汇总标准差之比在各曝光三分位组上存在 0.91–0.98 的残余欠分散 —— 集中于最稀疏的题目三分位组，那里的先验重复计数影响最大。这里的测量教训有两点：估计出的先验无法用并行贝叶斯计算中标准的子集先验技巧处理；而后验*分散度* —— 即自适应选题与评分所消耗的不确定性 —— 与后验均值一样，都是这项校正的目标。

- **从两个已发表数字识别一个系统的分散度：** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales et al. (2026)]] 表明，一个 [[learning-gains|学业]] 成绩分布的标准差可以仅从已发表的汇总统计量 —— 均值以及达到某一固定熟练度截断分数的学生比例 —— 中还原出来，因为在分布假设下 σ = (c − μ) / z(1 − p)。应用于 PISA 2025 萨尔瓦多（[[math-education|数学]] 均值 346，12.28% 达到或超过 2 级截断值 420.07），隐含的 σ 为 63.8（阅读 76.8，科学 63.8），远低于国际基准的 100，这符合一个被压到量表下限的分布；三个估计值来自独立的数字对，彼此相差约 13 点，构成一次温和的内部一致性检验。达到 2 级的比例对每一个 PISA 体系都有报告，并支撑着 SDG 4.1.1 指标，因此该识别无需微观数据；同一篇论文还通过三种方式报告一个数学差距 —— 129 分、1.29 个国际标准差、或 2.02 个萨尔瓦多分布自身的标准差 —— 展示了效应量中的分母问题，其论据是：除以样本自身分散度的标准化效应量，不能合法地在研究间相互比较。

## 知识库中的测量工具

教育测量的一项核心功能是开发、验证与使用**工具** —— 即把构念操作化的具体量表、测验与编码方案。本知识库的文章记录了面向“教育中的人工智能”构念的多种工具，可以按它们测量什么以及按测量方式来归类。

### 人工智能／生成式人工智能素养工具

人工智能素养是本知识库中工具覆盖最丰富的构念。存在两大族：**表现型测验**（客观，较不易受自陈偏误影响）与**自陈量表**（主观，捕捉自感能力）。后一族的取舍是 [[self-report-measures]] 的主题：自陈以低成本触及态度与感知，却无法支撑关于能力或行为的论断，而本知识库记录了在平行的自陈与表现测量之间 40% 的高估差距。

- **表现型（客观）测量。** 旗舰工具是 [[jin-glat-genai-literacy-assessment|GLAT（生成式人工智能素养评估测验）]]，一份基于覆盖四个维度（理解与知道、使用与应用、评估与创造、[[ethics]]）的 25 个概念蓝图构建的 20 题选择题工具，并在 355 名学生上以 CTT + 2PL IRT 验证（RMSEA = 0.03，CFI = 0.97，α = 0.80，ω = 0.81）。关键的是，GLAT 分数预测了人工智能辅助任务表现，而自陈做不到 —— 这是**表现型测量优于自陈**的证据。[[ai-literacy-assessment-misalignment]] 中的相关工作量化了自陈与表现型人工智能素养之间的差距（教师高估约 40%），而 [[tracing-genai-literacy-interaction-patterns]] 追踪的是实际的学生与人工智能互动模式，而非依赖报告的使用情况。
- **测量教师做了什么，而不仅是知道什么。** 一项 486 名教师的验证产出了一份衡量教师教育性使用生成式人工智能的六维工具 —— 管理、材料创作、评估、赋能、多样性与动机 —— 确认使用是多维的，尽管自陈无法支撑关于课堂实践的论断（[[questionnaire-teachers-genai-uses-validation-2026|Pérez-Montesdeoca et al. (2026)]]）。
- **自陈量表。** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]] 把人工智能素养操作化为三个域（人工智能概念；应用与技术技能；人工智能数字公民）与四个支架式层级；[[ai-literacy-heptagon-2026|人工智能素养七边形]] 构建了七个维度（技术、应用、[[critical-thinking|批判性思维]]、伦理、社会影响、整合、法律／[[regulation|监管]]）与四个 Bloom 对齐的熟练度层级。[[genai-skill-bypass-literacy]] 为学生与教职员描绘了不同的人工智能素养路径，[[panciroli-ai-literacy-episodes-situated-learning]] 把素养评估扎根于 [[situated-learning|情境学习]] 片段。面向更年幼学习者的工具开发也在推进：[[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan and Srikoon (2025)]] 的人工智能素养自评问卷（AIL-SAQ）是一份面向 4–6 年级学生的 15 题自陈量表，围绕“了解人工智能、了解人工智能如何运作、与人工智能共处的生活”组织，在 335 名学生上以探索性因子分析、在另外 579 名学生上以验证性因子分析验证，总体 Cronbach's alpha 为 .934。
- **[[discipline-specific-aied|领域特定]]的人工智能素养。** [[teacher-education-ai-literacy-sdt-2026]] 在 [[self-determination-theory]] 框架内开发了 [[teacher-role|教师]] 人工智能素养测量（382 名教师，经因子验证）；[[conceptualizing-preservice-teachers-ai-readiness-2026]] 通过智能 [[tpack]] 测量职前 [[teacher-ai-competency|教师的人工智能准备度]]；[[ai-literacy-career-adaptability-business-2026]] 评估学生的人工智能准备度与 [[career-development-and-readiness|职业适应性]]，情境是 [[business-education|商业教育]]；[[llm-critical-thinking-teamwork-review]] 综述了面向大模型支持的批判性思维与团队合作成果的工具。在延伸到教育者测量方面，教师人工智能素养量表（TAILS）把 ED-AI 框架的六个维度操作化，专门测量 [[teacher-education|语言教师教育]] 中的人工智能素养（经因子分析验证），填补了那些只面向学生或一般使用者的评估空白。

### 态度、接受度与动机工具

- **技术接受度。** 扎根于 TAM/UTAUT 的工具测量感知有用性、易用性与使用行为意向。见 [[technology-acceptance-model]] 及其在 [[acceptance-ai-english-tools-2026]] 中的应用（人工智能辅助英语学习工具，跨学科／熟练度分组的心理测量验证）与 [[tian-genai-learning-adoption-pathways-2026|生成式人工智能采纳路径]]。
- **自我效能与动机。** [[self-efficacy]] 工具与动机量表（例如 [[teacher-education-ai-literacy-sdt-2026]] 中基于 SDT 的 [[agency|自主]]／胜任／关系测量）捕捉了人工智能使用的动机前因与后果。这些连接到 [[student-engagement]] 与 [[prior-knowledge]] 的测量。
- **项目式学习的感知。** Zhu and Kong (2026) 开发并验证了一份扎根情境的人工智能 [[project-based-learning|项目式学习]] 量表（AI-PBLS），测量学生在人工智能素养课程中用人工智能 [[problem-solving|解决问题]] 时对项目式学习的感知（在 1,027 名 [[k-12|中学]] 与大学生、446 份完整作答上做 EFA 与 CFA），他们的 SEM 应用展示了赋能与伦理意识如何中介项目式学习到满意度的关系 —— 这是一份用于评估人工智能应用中项目式学习体验的稳健工具。

### 评估质量与效度工具

- **自动评分与量规工具。** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]] 生成评估量规；[[ai-assisted-instructor-supervised-grading-feedback]] 依据 Elaborated-[[feedback]] 标准评估人工智能评分质量；[[ai-assessment-scale-reform]] 讨论人工智能如何颠覆传统评定量表。
- **增强效度的设计。** [[roe-assessment-twins-2026|评估孪生]] 把一个易受 [[generative-ai|生成式人工智能]] 影响的任务与一个较不易受影响、评估相同结果的等价任务配对，在 Messick 六类效度证据上映射威胁。
- **按协助划分结果空间。** 一项测量方案把**模型作者性** 定义为 —— 一件制品在领域层面的内容在多大程度上源于学习者而非系统 —— 一个四侧面、四层级的构念，并报告在 24 项被审计的研究中，几乎全部都在有人工智能可用的条件下测量表现，没有一项在撤除后测量（[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]]）。
- **话语与参与编码。** [[icap-cognitive-engagement-llm-agents]] 把 [[icap-framework|ICAP]] 框架扩展为一个 7 点认知参与编码方案，比较了人工标注（κ = 0.906–0.998）与基于大模型的标注（κ = 0.541–0.609） —— 这是一项测量工具研究，表明自动编码仍落后于训练有素的人类。自动编码也通过 [[prompt-engineering|上下文感知的提示]] 推进，它建模上下文依赖并融合认知与社会能力，从过程数据中编码 [[collaborative-learning|协作式问题解决]] 技能，性能优于强基线 —— 使大规模、实时的评估成为可能，同时缓解人工编码的劳动强度。
- **技能抽取。** [[principal-trait-analysis-human-ai-skills-2026]] 通过主特质分析得出人机协作中的“技能” —— 一种对协作能力的数据驱动测量。

### 测量方式至关重要

本知识库的证据一再表明，一个构念被*如何*测量会改变结论。自陈的人工智能素养与表现型测量差异悬殊（[[ai-literacy-assessment-misalignment]]）；大模型对参与的标注与训练有素的人类编码不一致（[[icap-cognitive-engagement-llm-agents]]）；人类与大模型之间的潜在结构不同（[[assessment-latent-structure-human-llm-2026]]）。因此，严格的工具验证 —— 信度、结构效度、外部／预测效度 —— 不是形式，而是可信的“教育中的人工智能”证据的基础，它连接到 [[assessment-validity]] 与 [[psychometrically-aware-ai]]。近期一项在材料层面上的研究展示了在一个简单的接受度论断背后有多少验证工作：[[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]] 用分半设计（开发样本上做 EFA、留出一半上做 CFA）验证了两本分年龄段的人工智能素养指南，报告 KMO = .820、解释方差 67.3%、可接受的学生拟合（CFI = .943，RMSEA = .059，SRMR = .059）、组合信度 .84 至 .90，以及跨版本的测量不变性 —— 然后记录了工具在何处吃紧：HTMT 值最高达 .950，且一个受约束的“趣味性—意向”相关性必须被检验是否为一。他们对区分项目功能的补充检查是本页所主张的诚实典范：不变性成立，但年幼学生中低变异的回答模式意味着一旦排除这些作答者，一个组间差异就减弱了，而论文把这一点与头条结果并列报告，而不是用它替代头条结果。

[[assessing-student-drive-framework-2025|Oliveira et al. (2025)]] 展示了一种新过程测量的验证序列：把学生的生成式人工智能互动日志对照一个 35 个子类的分类法评分，只达到中等的评分者间一致性（Cohen's κ = 0.44），却与作文分数相关 r = 0.54，为新测量提供了汇聚支持。

- **一致性系数是语料的属性，而分数是联合产物。** 一项对 60 篇营销帖子的自动评分验证报告：大模型的绝对一致性 ICC(2,1) 为 .435，“规则加大模型”混合方法为 .266，确定性规则为 .091，不确定性由 2,000 个作者聚类自助样本估计，MAE 为 6.28–17.22 分；加入研究者撰写的锚定点使评分者间一致性从 .338 提升到 .902，显示这些估计在多大程度上依赖于参照集（[[automated-scoring-marketing-posts-agreement-2026]]）。一次对 [[physics-education|物理]] 基准的专家重评审计在工具层面提出了互补论点：95.20% 的被审计拒绝是基准或评分者的错误，而非模型失败，因此一个被测分数必须被报告为题库、量规与评分者三者的共同属性（[[frontier-models-physics-benchmark-audit-2026]]）。

**信度部分可以从模型自身恢复。** [[know-when-to-trust-ai-scoring-reliability-2026|Organisciak and Acar (2026)]] 在超过 20,000 份“替代用途测验”回答上评估了对基于大模型的评分的三项低成本升级：读取模型自身的词元级置信度、对其前 n 个预测分数取概率加权平均而非单一最佳猜测，以及跨模型集成。每一项都提升了与人类分数的一致性（最佳配置下相关从 r = 0.781 升至 0.823，RMSE 从 0.599 降至 0.498），而他们的诊断定位到单次评分的一个具体失效：模型表达的置信度与其准确度呈负相关（β = −0.602）。这是一个测量方式的结论，而非模型的结论 —— 同一个模型，以不同方式评分，就是更可靠的工具 —— 它与上面的语料级一致性证据并列。

一项 2026 年对 33 个教师人工智能素养工具的评价显示了工具开发在何处成熟、何处尚不成熟。[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]] 用一个改编自 COSMIN 与 Terwee et al. (2007) 的决策矩阵给这些工具分级，发现内部一致性是最强的域（33 个中有 28 个为 A 级，84.8%），公平性最弱，只有五个工具（15.2%）报告了测量不变性或区分项目功能的证据。结构效度较强，24 个工具（72.7%）通过 CFA、PLS-SEM 或 IRT 建模达到 A 级，而内容效度大多依赖定性审阅，有 21 个工具（63.6%）因缺少定量的专家一致性统计而为 B 级。

自动选题可以在不改变工具的前提下缩短它：在合并的两波样本（N = 305, 342）上做蚁群优化得到一个 12 题的简版，在各维度上与全量表相关 r = 0.910–0.944，但每个维度两个题目覆盖的内容范围更窄（[[genai-srl-l2-writing-scale-2026|Wang, Zhang and Zhang (2026)]]）。

## 问题与局限：测量会遗漏什么或弄错什么

教育测量强而有力，但会出错。理解它的失效模式，对于批判性地阅读“教育中的人工智能”证据至关重要 —— 也对于识别一处表面上的学习增益或构念论断何时其实是测量的假象而非真实效应至关重要。

- **信度局限。** 测量从不会完全可靠，误差方差始终存在。当工具的内部一致性或重测稳定性较低时，观察到的差异可能只是噪声。在人工智能情境中，新的失效模式使这一点加剧：大模型生成的回答可以在机器间高度一致地与人类评分相悖（[[icap-cognitive-engagement-llm-agents]]），而自动评分可以*内部*一致却系统性错误 —— 有精确度而无效度。[[limitations-in-aied-research|测量局限]] 记录了不可靠工具是人工智能教育研究的一项贯穿性弱点。
- **把编码不确定性当作误差会混淆两种失效。** 在一项 30 条陈述的心理健康知识测验中，准确率评分把*不知道* 计为不正确，然而有 67.3% 的学生在某一事实上选择了它，同时 60.6% 的模型回答是明确错误的 —— 一种被迫的二选一（对／错）格式无法把不确定性与错误信念区分开（[[mental-health-literacy-students-llms-2026|Richter et al., 2026]]）。
- **评分者一致性设定了实际天花板。** 在乌拉圭 [[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB*]] 上的一次大规模验证发现，人类评分者的一致性本身就为人工智能评分设定了实际天花板：在十位专家各自独立评分的 50 篇文本中，没有任何一个量规条目与共识达到一致同意，分歧最大的评分者通常低于 80% 的一致性，而最好的超过 90%，且对若干几乎人人都满足的偏态条目，Cohen's Kappa 只是轻微或一般。因此作者以本身就不完美的参照标准来评判自动分数 —— 十位评分者、多数回答只有一个操作分数、若干条目落在常规的 70% 可接受区间 —— 这对任何建立在单一评分者操作标签上的测量论断都是一个告诫。
- **效度 —— 测量错了东西。** 效度追问一件工具是否测量了它声称的构念。常见失效包括**构念欠代表**（一份只抽取技术知识、漏掉伦理的人工智能素养测验）与**构念无关方差**（一道奖励阅读流畅性而非目标技能的题目）。[[ai-scoring-language-bias-physics|人工智能评分与语言偏误]] 展示了表层特征 —— 语言、措辞、风格 —— 如何以与目标构念无关的方式驱动自动分数。[[assessment-validity]] 是对抗这些威胁的护栏。

- **一份量表可以在不测量目标构念的情况下返回目标数量的因子。** [[ai-empathy-scale-psychometric-evaluation-2026|Kang, Lee and Kang (2026)]] 从一份 42 题的人工智能共情量表中保留六个因子，但这些条目并未还原出六个目标子因子 —— 亲社会意向（Prosocial Intention）未形成任何因子 —— 因此该结构被呈现为暂定的。
- **自陈差距。** 自陈测量捕捉的是*自感* 能力，而非实际能力。本知识库一再显示自陈的人工智能素养与表现型测量显著分化（[[ai-literacy-assessment-misalignment]]，教师高估约 40%），且在表现型测验成功之处，自陈无法预测真实的人工智能辅助表现（[[jin-glat-genai-literacy-assessment|GLAT]]）。依赖自陈的测量可能系统性夸大构念，并掩盖真实的能力差距。
- **汇总估计是脆弱的。** 一项 2026 年的结构化综述只汇总同一样本中主观—客观人工智能素养的相关（N = 2,765），得到 r = .055（Hartung-Knapp 95% CI [−.047, .156]）；在 k = 3 时，异质性估计量彼此不一致，且一项研究占了 77.2% 的权重，它无法设定熟练度截断值（[[competent-generative-ai-use-measures-review-2026|Verí (2026)]]）。
- **不跨人群迁移的构念。** [[assessment-latent-structure-human-llm-2026|Strugatski et al.]] 表明，评估工具对人类和对大模型可能具有*不同的因子结构* —— 意味着同样的题目在不同人群中可能不测量同一潜在构念。即便在人类内部，在一类人群（例如西方、资源充足的 [[higher-ed]]）上验证过的工具也可能无法推广到其他人群（[[global-south]]），这关系到“教育中的人工智能”测量的可推广性。
- **测量会遗漏什么。** 一些对“教育中的人工智能”学习最核心的构念，恰恰是最难测好的 —— 因而最容易被工具遗漏或扭曲：
  - **过程与策略。** 标准的结果测量捕捉的是学习的*产物*，而非*过程*。它们会漏掉学生实际如何与人工智能互动 —— [[cognitive-offloading|过度依赖]]、不加反思的接受，或批判性核验。[[tracing-genai-literacy-interaction-patterns]] 之所以使用互动轨迹，正是因为自陈与结果测验漏掉了这些动态。
  - **纵向与持久的学习。** 一次后测可能显示出人工智能协助带来的虚高表现，却漏掉了持久、无协助知识的流失（[[genai-performance-vs-learning|表现—学习差距]]）。在单一时间点上的测量，关于学习可能是主动误导的。
  - **公平与获取。** 假定设备／联网获取一致、或在特权样本上常模化的工具，可能遗漏 —— 或系统性低测 —— [[equity-in-ai-education|资源不足]]的 [[learners]] 的能力，把获取差距误归为能力差距。
  - **[[affective-computing|情感]]与动机状态。** 参与、动机与自我效能常以自陈测量，继承了上面的自陈差距；它们可能捕捉不到驱动学习的情境性、当下动态。
- **自动测量可能自信地出错。** 高机器置信度与不透明评分的组合，是人工智能时代特有的风险：一个大模型评分者或标注者可以产出高度自洽却系统性有偏的分数，而严谨的外观（大 N、高的大模型间一致性）可能掩盖无效度。[[ai-ed-evaluation]] 与 [[psychometrically-aware-ai]] 框架是解药 —— 要求在信任自动测量之前先校准、意识不确定性并拿出效度证据。

简言之，教育测量可能**遗漏**它没有采样的东西（过程、持久性、获取、情感），也可能**弄错**它采样不当的东西（自我感知、表层特征、跨人群构念）。因此，阅读“教育中的人工智能”的发现，不仅要问*测了什么*，还要问*怎么测的* —— 以及工具可能漏掉了什么。

- **可审计的编码把定义性误差与模型误差分开。** EduBehaviors 把一个构念分解为分别标注的可观察行为加一条显式的聚合规则，使审阅者能看到哪些证据产生了某个标签，并能在规则变更后无需新的模型调用就重新推导标签；它在 Teacher TalkMoves 上达到 macro-F1 0.673，与直接 [[llm|大模型]] 提示相当（[[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al., 2026]]）。

## 关联

教育测量是 [[item-response-theory]]、[[assessment-validity]]、[[knowledge-tracing]] 与 [[student-modeling]] 的基础。它连接到 [[learning-analytics]]（学习数据的测量）、[[educational-nlp]]（语言的测量）与 [[psychometrically-aware-ai]]（与测量理论相一致的人工智能）。它的效度与信度关切支撑着 [[ai-ed-evaluation]] 与本领域的 [[limitations-in-aied-research|测量局限]]。就它所测量的构念而言，它与 [[ai-literacy]]、[[technology-acceptance-model]]、[[self-efficacy]]、[[motivation]] 与 [[student-engagement]] 相交。

- **支持性干预的因果建模（2026）：** 一项结构因果建模方案把教育评估从关联性的题目反应理论信念更新推进到干预性与反事实推理（例如提示的效应），其结构方程用纯逻辑信息从专家处引出，并在义务教育阶段的算法技能任务上做了示例（[[causal-modeling-competency-assessment-2026]]）。

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
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
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

- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[jin-glat-genai-literacy-assessment]] — GLAT: IRT-validated GenAI literacy test (Jin et al. 2025)
- [[icap-cognitive-engagement-llm-agents]] — Measuring cognitive engagement with an extended ICAP framework
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity under GenAI
- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon
- [[ai-literacy-assessment-misalignment]] — Self-reported vs performance AI literacy misalignment
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher AI literacy through self-determination theory
- [[acceptance-ai-english-tools-2026]] — AI acceptance measures for English learning tools
- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[llm-item-difficulty-prediction]] — Cognitive evaluation of LLM item-difficulty prediction
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias in physics
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[xiong-ai-educational-measurement-review-2026]] — Decade thematic review of AI in educational measurement
- [[questionnaire-teachers-genai-uses-validation-2026]] — Questionnaire on teachers' uses of generative AI (Pérez-Montesdeoca et al. 2026)
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — Split-half EFA/CFA validation with invariance, HTMT and DIF checks, including an honest account of playfulness-intention construct overlap
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[competent-generative-ai-use-measures-review-2026]] — Beyond AI Literacy: A Structured Review and Exploratory Meta-Analysis of Measures for Competent Generative-AI Use
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration: divide-and-conquer recalibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[el-salvador-ai-tutoring-selection-claim-2026]] — Bounding the learning claim of El Salvador's AI tutoring pilot (Restrepo Morales et al. 2026)
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: model self-confidence, probabilistic scoring and ensembles as scoring reliability levers
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — A validated 15-item self-assessment questionnaire for upper-primary AI literacy (Thianwan & Srikoon 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematic appraisal of 33 teacher AI literacy instruments across COSMIN-style quality domains (Zainal et al. 2026)
- [[mental-health-literacy-students-llms-2026]] — Mental Health Literacy Across Psychology Students and Large Language Models
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data

- [[ai-empathy-scale-psychometric-evaluation-2026]] — A 42-item AI empathy scale whose six factors did not recover the six intended subfactors
- [[genai-srl-l2-writing-scale-2026]] — A six-dimension GenAI-SRL scale for L2 writing; ant-colony-optimized 12-item short form tracks the full scale (r = 0.910–0.944) but narrows content coverage
