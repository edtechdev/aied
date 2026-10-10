---
title: 学习收益
created: "2026-08-09T16:52:03-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
assessment: [assessment]
audience: [learners]
level: [higher ed, k 12]
page_kind: [evaluation]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/learning-gains
source_updated: "2026-10-03T12:32:09-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习收益（learning gains）** —— 学生知识、技能或能力因教育干预（包括 AI 辅助教学）而产生的可测量改进。在[[ai-education|教育中的 AI]]研究中，学习收益是评估 AI 工具是否真正改进学习——而非仅[[student-engagement|投入度]]或满意度——的主要结果测量。

## 值得思考的问题

- 你是否曾觉得自己从一项活动中学到很多，却在一场测量别的东西的考试上失败？本页区分 AI 支持的即时表现与持久学习——这两者在你的经验中可能如何分岔？
- 一个核心发现是，生成式 AI 能抬高 AI 辅助作业上的分数，同时拉低监考、闭卷测量上的分数。如果你要评估一个 AI 工具是否真的帮助学生学习，你会信任哪一种结果，为什么？
- 研究表明，无指导地依赖 AI 预测更差的学习收益，而结构化使用预测更好的——同一工具，相反结果。在真实课堂里，什么区分了"结构化"与"无指导"的使用？
- 提示按钮与更少的学习相关：提示越多，学习越少。你是否曾一卡住就想伸手去按提示或答案？这对学习真正需要多少挣扎意味着什么？
- 一项大型元分析合并了许多研究，发现 AI 赋能的[[edtech-platform|教育科技]]把学习提高了不大的幅度，且生成式 AI 相对早期自适应工具没有优势。这个谨慎的合并估计应当如何改变你对关于单一 AI 产品效果的激动论断的读法？

## 引言

学习收益是任何教育技术的终极检验。在知识库的研究中，它们作为[[rct|随机对照试验]]中的因变量、准实验研究中的前后比较，以及把 AI 工具使用与学业结果联系起来的关联分析出现。

**术语。**成就（achievement）的*结果*义——学生成就、学业成就、学习成就、先前成就、成绩差距——在此被视为学习收益的同义词，这些短语链接到本页。*感受*义（"成就感"）是一种动机体验而非测得的结果；见[[motivation]]与[[self-efficacy]]。成就目标理论（"成就目标"、目标定向）同样是一个动机构念，链接到[[motivation]]。

知识库的主要发现：

- **[[adaptive-pretesting-retention|自适应预测试]]**研究考察[[generative-ai|生成式 AI 赋能的]][[retrieval-spacing-interleaving|预测试]]是否产生超越即时测试而持续的持久学习收益。
- **[[genai-meta-analysis-programming-learning|编程中生成式 AI 的元分析]]**发现结构化 AI 使用产生正向学习收益，但无指导依赖产生负向效应——这是生产力与持久学习之间的关键区分。
- **[[lak2026-hint-button-unproductive-use|提示按钮研究]]**表明提示滥用与学习收益之间的负向关联——提示越多，学习越少。
- **[[instructional-guidance-genai-learning|教学指导]]研究证明，学习收益取决于 AI 如何被使用，而非仅仅是它是否可用。
- **[[burneo-can-edtech-close-learning-gaps-2026|世界银行元分析]]**合并 14 项 RCT 的 191 个效应量，估计自适应与 AI 赋能的教育科技平均把学习提高约 0.125 个标准差——高于教育 RCT 的中位数——同时发现生成式 AI 相对早期自适应工具没有优势。
- **收益是内容—处理交互，而非常数。**[[rachatasumrit-example-problem-ratio-2026|Rachatasumrit 等人（2025）]]表明，最优的例题—问题比取决于知识内容：纯粹的[[mastery-learning|提取练习]]对逐字事实产生更高收益，而例题整合练习（例题与问题交替）对可泛化技能产生更高收益——这直接证明"多练"并不总是更好，收益取决于训练安排与被学知识成分的匹配。

### AI 时代的测量问题

知识库学习收益研究的一个中心主题是，**生成式 AI 能不产生学习收益而抬高表面表现**——而结果测量的选择决定了这是否可见。[[generative-ai-reduced-study-time-math|研究]]与[[stromberg-generative-ai-learning-penalty-secondary-2026|大规模田野数据]]显示一个鲜明分歧：AI 使用改进 AI 辅助作业上的分数，同时*拉低*监考、闭卷、无辅助测量上的分数。[[genai-performance-vs-learning|表现对学习研究]]与[[young-people-learning-generative-ai-rapid-review-2026|快速综述]]因此区分 AI 支持的即时表现与持久学习，并把无辅助的总结性测量（见[[summative-assessment]]）当作真实学习收益的可靠信号。

### 效力研究显示了什么

在知识库的[[rct|RCT]]、[[meta-analysis-systematic-review|元分析]]与田野研究中，浮现出一幅一致的**学习效力**图景（哪些 AI 干预真正产生学习收益，以及有多大）：

- **元分析证据大体为正但有条件。**[[genai-educational-outcomes-meta-analysis|对 53 项研究的综合元分析]]（Dong 2026）发现，生成式 AI 在学业成就、[[critical-thinking|高阶思维]]与写作上总体优于传统方法——[[ai-feedback-quality|AI 反馈]]尤其有效——尽管游戏辅助的生成式 AI 没有显著附加收益，且收益随国家与结果而异。[[genai-meta-analysis-programming-learning|生成式 AI 与编程的元分析]]发现大的生产力收益但没有显著学习收益（g ≈ 0），把任务效率与持久学习分开。[[robot-assisted-language-learning-meta-analysis-2026|一项语言学习元分析]]发现 AI 增强的[[embodied-learning|具身]]机器人带来正向但适度的学习收益。就[[ai-literacy|AI 素养]]而言，[[liu-ai-literacy-interventions-meta-analysis-2026|对 59 项研究的三层元分析]]估计一个大的总效应（g = 0.837）——但宽的预测区间，以及知识导向干预优于针对技能、态度或[[ethics]]的干预这一发现告诫：*所测的结果*塑造了表面收益，呼应了 AI 相关收益取决于你测什么、怎么测这一更广的观点。
- **设计良好的[[intelligent-tutoring|AI 导师]]产生真实收益。**一项为期两年的整群 RCT（[[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]]）发现，AI 辅导每学期把数学成就提高约 1.3 个国家百分位（约 0.06–0.08 SD/学年，全年约 0.14 SD），收益与不用 AI 的练习相似——证明*投入度*而非模型能力是约束因素。[[making-ai-tutoring-productive-mastery-math-2026|NUMI]]表明，AI 支持改进了犯错后的下一次尝试正确率，并给每道题更多时间——一种"生产性放缓"建立持久掌握。[[virtual-tutoring-computer-assisted-learning-takeup-2026|虚拟辅导]]发现约束因素是采纳与持续参与，而非导师质量。
- **一门从班级自身教学法构建的导师打败了主动学习，而非仅讲课。**在哈佛物理导论课的一项交叉[[rct]]中，从定制 AI 导师学习的学生后测中位数为 4.5，对课程课堂主动学习课的 3.5（基线中位数 2.75），线性回归效应量为 0.63，任务上花的中位时间为 49 分钟对课堂 60 分钟（[[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin 等人，2025]]）。由于对照是基于研究的主动学习而非讲授，该试验是在与一个严苛的对照比较中测量导师——作者归功的设计是把导师从与班级相同的基于研究实践工程化，加上按需的个性化反馈与自定步调。
- **AI 可以比肩人类帮助。**[[chatgpt-hints-human-tutor-learning-gains-2024|ChatGPT 生成的帮助]]在[[math-education|数学]]技能上产生与人类导师撰写的帮助等效的学习收益——证据表明，生成式 AI 在恰当时使用可与人类[[scaffolding]]一样有效。
- **收益取决于谁在与它一起教学。**获得 AI 支持的低经验导师把学生通过率提高了 9 个百分点，对更资深导师收益更小——一种增强模式，最能提升最缺乏经验者（[[oecd-digital-education-outlook-2026|OECD，2026]]）。
- **无保护的 AI 可能损害学习。**护栏 RCT（[[generative-ai-guardrails-harm-learning|PNAS 2025]]）发现，无保护的 ChatGPT 式导师把辅助练习提高 +48%，却*降低了*无辅助考试分数 −17%，而带护栏（给提示而非答案）的导师消除了损害。这是**学习效力依设计而定**的最鲜明证明：同一类工具依配置之不同，可能是强的学习收益，也可能是净损害。
- **但无保护获取也能持久地帮助。**一项使用现成 ChatGPT 账户的 RCT 发现，无辅助测试在有访问时高出 0.27 SD，且收益在一周后保持——超过 747 项教育 RCT 中 0.10 SD 中位数的两倍（[[contractor-learning-impact-generative-ai-2026|Contractor & Reyes，2026]]）。
- **感知效力与实际效力分岔。**[[ai-literacy-assessment-misalignment|自报表现与测得表现错位]]，[[absent-cognitive-baseline-2026|缺席的认知基线]]表明 AI 原住民学生高估自己的学习——因此基于自报的效力主张在没有客观结果测量时不可靠。[[self-report-measures]]汇集了报告与测得结果相分离的案例。

- **收益可以来自重配教师时间，而非来自 AI 评分。**在一项横跨 178 所巴西学校（约 19,000 名高三学生）的随机实验中，AI 与人工作文评分产生相同的考试收益，但 AI 课堂多了约 35% 关于写作的一对一师生对话，且最底四分位在两种条件下都没有改善（[[ai-changing-teaching-workflows|Ler，2026]]）。

**要点：**证据的分量支持来自 AI 的**适度、有条件、依设计而定的学习收益**——当 AI 被结构化为教练而非答案、带护栏、并与无辅助结果测量配对时是真实的，而当它替代学习者自身努力时则缺席或为负。这就是为何学习收益作为结果必须用有效的、抗 AI 的工具测量，以及为何[[ai-ed-evaluation]]把效力主张与[[research-methods-aied|方法性]]审视配对。

- **AI 辅导可以在标准化测试收益上比肩专家人类辅导。**在一项有 2,383 名参与者的评估中，合并的 AI 辅导在 GRE 学习收益上与专家人类辅导统计等效（p = .015），两者都高于无辅导对照；作者提出以每百分点收益的成本作为比较导师的单位（[[studentbench-ai-human-tutoring-gre-2026|Northcutt 等人，2026]]）。

### AI 对学习与成就之影响的领域级地图

知识库的语料——元分析、RCT、准实验与田野研究——支持一幅细致、有时矛盾的图景。发现聚为正效应、负效应与有条件效应。

**正效应（AI 能产生真实学习收益）：**
- **元分析证据大体为正但有条件。**[[genai-educational-outcomes-meta-analysis|一项 53 研究的元分析]]（Dong 2026）发现，生成式 AI 在学业成就、高阶思维与写作上总体优于传统方法，AI [[feedback|反馈]]尤其有效。一项对 29 项实验的元分析（[[zhao-genai-higher-order-thinking-meta-2026]]）发现对高阶思维有中度正效应，对[[problem-solving]]最强，对[[creativity]]有限。
- **辅导专用 AI 可靠地优于通用 AI。**[[stanford-evidence-base-ai-k12-2026|斯坦福 SCALE 综述]]与伞形综述（[[genai-higher-education-systematic-review-2026]]）趋同：带提示与分步支架的教学性设计智能体产生真实收益，而开放的[[conversational-ai|聊天机器人]]往往不能。
- **设计良好的 AI 导师产生真实、可测量的收益。**为期两年的 Khanmigo RCT（[[one-click-away-khanmigo-two-year-school-experiment-2026]]）每学期把数学成就提高约 1.3 个国家百分位；[[making-ai-tutoring-productive-mastery-math-2026|NUMI]]改进了犯错后的下一次尝试正确率；[[virtual-tutoring-computer-assisted-learning-takeup-2026|虚拟辅导]]表明采纳是约束因素。
- **AI 可以比肩人类帮助。**[[chatgpt-hints-human-tutor-learning-gains-2024|ChatGPT 生成的帮助]]在数学技能上产生与人类导师撰写的帮助等效的学习收益。
- **以反馈为中心的 AI 有效。**[[genai-educational-outcomes-meta-analysis|AI 反馈]]是最有效的生成式 AI 应用之一；[[ai-feedback-critical-thinking-writing-2026|用于写作的 AI 反馈]]在与教学结合时改进批判性思维。在一项田野实验中，[[gpt4-feedback-student-activation-2026|Geschwind 等人（2026）]]发现，收到个别 GPT-4 反馈的学生在开放式任务上显示了最大的内容学习收益（约 0.11, p < 0.10；在真正收到先前反馈者中升至 0.16）——这一效应由 AI 供应的可靠、一致驱动，而非固有优越性，因为当高质量[[peer-assessment|同伴反馈]]真正被递送时同伴结果与 AI 匹配。写作中的 LLM 批评伙伴把这扩展到迭代、协作的反馈：[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash 与 Connell Pensky（2025）]]发现，在一学期中论证写作、[[prompt-engineering|提示工程]]与对 AI 反馈的回应质量上都有显著收益（全部 p < .001，每维度约一个标准差），且收益甚至在不用 LLM 支持写的作文上出现——这是持久技能而非单纯工具依赖的证据，尽管缺少对照条件限制了因果归因。
- **结构化支架产生收益。**[[scaffolding-srl-feedback-genai-human-peers|支架化的自我调节反馈]]与[[learner-ai-interaction-patterns-oop|交互设计]]显示，当 AI 被设计为教练时有小但显著的收益。
- **AI 在协作与问题本位情境中有结构时有益。**[[ai-enhanced-pbl-chatgpt-scaffolding-2026|AI 增强的 PBL]]、[[ai-assisted-collaborative-learning-model-dbr|AI 辅助的协作学习]]与[[ccct-cooperative-learning-technique|AI 设计的合作技术]]报告了有意义的收益。

**负效应（AI 能降低或未能改进学习）：**
- **无保护的 AI 可能损害学习。**PNAS 护栏 RCT（[[generative-ai-guardrails-harm-learning]]）发现，无保护的 ChatGPT 式导师把辅助练习提高 +48%，却*降低了*无辅助考试分数 −17%；[[guardrails]]消除了损害。
- **完成快 ≠ 学习。**[[generative-ai-reduced-study-time-math|生成式 AI 减少学习时间]]于数学问题及其建立的知识；[[genai-performance-vs-learning|表现对学习研究]]显示 AI 抬高 AI 辅助表现，同时拉低监考、闭卷、无辅助分数。
- **作业外包损害学习。**[[stromberg-generative-ai-learning-penalty-secondary-2026|田野数据]]显示学生外包作业时的生成式 AI 学习惩罚。
- **[[llm]]依赖与更低成绩相关。**[[jost-llm-programming-education-learning-outcomes|Jošt 等人]]发现，用 LLM 生成代码（rho = −0.305）与调试（rho = −0.360）与期末成绩之间显著的负相关。
- **AI 可能损害某些人的[[teacher-role|教学]]与成就。**[[genai-can-harm-teaching-rct-2026|一项面向教师的生成式 AI RCT]]发现，中位数以下教师的学生失去阵地（−0.129 SD）。
- **提示滥用与更少学习相关。**[[lak2026-hint-button-unproductive-use|提示按钮研究]]表明，越多地被无成效地使用的提示，与更少学习相关。
- **元分析的编程收益是虚幻的。**[[genai-meta-analysis-programming-learning|生成式 AI 与编程的元分析]]发现大的生产力收益但没有显著学习收益（g ≈ 0），把任务效率与持久学习分开。

**有条件与混合效应（语境决定方向）：**
- **设计是决定性的。**同一类工具依配置之不同可能是强的收益或净损害（[[generative-ai-guardrails-harm-learning]]、[[stanford-evidence-base-ai-k12-2026]]）。
- **AI 如何使用比是否可用更重要。**[[jost-llm-programming-education-learning-outcomes|用于解释是无害的；用于代码生成是有害的]]；[[genai-over-reliance-learning-2026|过度依赖]]侵蚀收益。
- **时长与自我[[regulation|调节]]调节效应。**[[zhao-genai-higher-order-thinking-meta-2026|效应在 8–16 周时最强]]，对[[self-regulated-learning]]较高的学习者亦然。
- **计算思维水平调节 AI 辅助的收益。**在一项为期四周的八年级 AI 编程助手课程中，高 CT 学生在后测上超过低 CT 同伴（72.54 对 61.73, p = .031），尽管先前编程知识相当，高 CT 学生用助手理解代码，而低 CT 学生用它检索答案（[[computational-thinking-aica-2026|Zhao 等人（2026）]]）。
- **AI-IBL 支持创造力但不必然支持问题解决。**[[mujib-ai-ibl-creative-math-2026|Mujib 等人]]改进了创造表现与态度，但没有改进批判性问题解决。
- **[[student-experience|学生体验]]与测得收益分岔。**[[absent-cognitive-baseline-2026|AI 原住民学生高估自己的学习]]，[[ai-literacy-assessment-misalignment|自报与表现错位]]——对收益的感知不是其可靠证据。

### 元分析的学习收益估计被夸大——谨慎阅读

主导本页效力总结的学习收益数字——尤其是来自元分析的合并效应量——必须带一个强告诫来读：一波元研究表明，该领域的正合成估计被发表偏见、构念不一致与方法捷径夸大了。

- [[bartos-ai-learning-meta-meta-analysis-2026|一项对 67 项元分析中 1,840 个效应量的研究级元元分析]]发现，经发表偏见校正的平均 AI 效应约为所报幅度的**三分之一**（SMD ≈ 0.196，对中位数 0.67），预测区间横跨大损害到大收益，且没有任何调节变量产生一致的收益。即使单个极端研究，在如此异质性下也几乎不贡献信息——这意味着*更多同类型的当前研究不会解决问题*；只有高质量、预注册、面向复现的试验才会。
- **对合成层本身的二阶元分析。**[[ai-education-effects-second-order-meta-analysis-2026|Emslander 等人（2026）]]反转了通常的分析单位：把 45 项元分析当作数据，并校正研究重叠（818 项独有初级研究，按独有权而非丢弃来加权），把 129 个元分析效应量合并为 g = .57 [.50, .65]，结果簇从 STEM 表现的 .35 到一般学业结果的 .68。两个结果与上面的数字相关。AI 类型没有调节效应（p = .63）——[[intelligent-tutoring|智能辅导系统]]、[[conversational-ai|聊天机器人]]与 ChatGPT 在这一层上统计不可区分，因此该领域的合并收益并非由生成式 AI 本身驱动——而唯一清晰的调节变量是教育层次（高等教育 .61 对较年轻样本 .30），这部分是研究设计的人工产物，因为语料的 74% 检验了高等教育学生，而[[k-12|K-12]]证据相对稀薄。其质量评估是全语料中最锐利的：45 项元分析在 AMSTAR 改编的 17 分量表上平均 9.3 分，无一预注册，只有 23/45 有 80% 功效检测出它们自己所报的效应。其两个发表偏见检验也不一致——对称漏斗图（Kendall's τ = −.01, p = .868）对 PET-PEESE（B = 0.9, p = .009）指示夸大——因此该 SOMA 自身的中等效应带着一个未解决的偏见疑云到来。
- [[oneill-presumed-effective-meta-analysis-2026|对 14 项高影响 AIED 元分析的法证审计]]发现，无一为其合并学习收益主张提供了有效依据：无一有连贯的结果构念，全部有未解决的极端异质性（I² 在报告它的 13 项元分析中从 77.2% 到 94.4%，其中 12/13 超过 80%），十二项把相依效应量当作独立处理，且无一有效评估发表偏见。随机抽查的初级研究多数与元分析主张不匹配。错误波及政策：两项被审计的元分析把研究样本量当作班级规模，并凭一项算错的初级研究，断定 21 到 40 名学生是理想干预规模，并建议生成式 AI 干预按该数字设计。
- **一项修正了被审计缺陷中两项的 2026 年[[stem-education|STEM]]综合——却仍例证了第三项。**[[ai-supported-instruction-stem-meta-analysis-2026|Doğan 及其同事（2026）]]合并 35 项实验与准实验 STEM 研究，每研究一个效应量以避免相依效应量问题，并跑了全套发表偏见检验（漏斗图、Begg 与 Egger 检验、剪补法、Rosenthal 失效安全数 N = 2404）而非断言对称——正是上面审计在它所检的每项元分析中发现的两个捷径。两项告诫存活。第一，作者未做正式质量评估，把纳入标准当作了严谨门槛，因此设计迥异的研究未经质量加权进入合并。第二，标题的异质性完全取决于你读的是哪个模型：同样 35 项研究在固定效应模型下报为 I² = 82.98%，在随机效应模型下为 I² = 15.75%，因此遇到无模型标签的数字的读者，可以在语料非同质时断定它是同质的。其合并估计（g = 0.670, 95% CI [0.491, 0.848]）因而是上一节所描述的那类数字：建构得比多数好，仍是一个上界。
- [[weidlich-chatgpt-effect-search-cause-2025|一项媒体/方法批评]]表明，许多"学习收益"并未被有效测量——结果往往是自报技能，或在 AI 协助*期间*测得的表现，而非持久的、无辅助的学习。

**给上面收益数字的底线：**把大的合并 AI 效应量当作上界而非点估计。优先采信来自设计良好[[rct|RCT]]与田野研究、有无辅助标准化结果测量的学习收益证据（上面引用的护栏 RCT、Khanmigo 与 NUMI 实验，以及世界银行教育科技元分析），并把元分析的收益读作暂定且很可能夸大的，直到合成质量改进。问题也在更正之后存续：在一项被审计元分析被撤回后发表的论文中，60% 仍把它当作大 ChatGPT 学习收益的权威支持引用，无一承认撤回，因此一个被撤回的估计持续传播。这就是为何[[limitations-in-aied-research|AIEd 研究的局限]]一页现在详细记录了元分析证据危机。

### 测量要紧的东西

学习收益连接到[[assessment-validity]]——如果[[assessment|评估]]未能捕捉更深理解，学习收益测量就有误导性。它们还与[[cognitive-offloading|过度依赖]]和[[cognitive-offloading]]交叉，其中表面表现的改进可能掩盖学习损失，并与[[rct]]（随机试验作为检测因果学习收益的金标准设计）以及[[meta-analysis-systematic-review]]（跨研究合并效应量以建立该领域的效力证据）交叉。

- **来自基于错误的 AI [[pedagogy]]的显著前后收益：**[[pedagogy-ai-mistakes|Hosseini（2026）]]的数据库设计课程（n=13）在相同的前后测题上显示大而显著的学习收益（均值 4.25→6.83/7，Cohen's *d*=1.49，*p*<.001），收益与先前的 AI 或数据库信心不相关——AI 整合的批评—精化设计使各类学生受益，不论其初始感知。

## 关联概念

- [[rct]]
- [[meta-analysis-systematic-review]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[cognitive-offloading]]
- [[math-education]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[theory-development-aied]] — AI 教育中的理论发展
- [[self-report-measures]]
- [[research-methods-aied]] — AIED 研究方法（DBR 一节）
- [[social-emotional-learning]] — 社会情感学习
- [[student-support-and-success]] — 行政性结果（任务完成、学分、坚持、毕业）与学习收益有别

## 关联文章

- [[contractor-learning-impact-generative-ai-2026]] — 现成聊天机器人访问提高了一周后仍持续的无辅助测试分数（Contractor & Reyes 2026）
- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — AI 辅导优于课堂主动学习：一项在真实教育情境中引入新研究设计的 RCT（Kestin 等人 2025）
- [[genai-performance-vs-learning]] — 为何受助表现不是学习结果（Yan 等人 2025）
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — 与 CAL 的虚拟辅导：一项关于采纳与学习的实验
- [[making-ai-tutoring-productive-mastery-math-2026]] — 使 AI 辅导有成效：基于掌握的数学练习
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away：Khanmigo 在两年学校实验中
- [[ai-literacy-assessment-misalignment]] — AI 素养评估：自报与表现错位
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: 生成式 AI 减少数学问题的学习时间及其建立的知识
- [[genai-meta-analysis-programming-learning]] — 生成式 AI 对编程生产力与学习之影响的元分析
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — AI 素养干预效应的元分析
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT 帮助产生与人类导师帮助等效的学习收益
- [[generative-ai-guardrails-harm-learning]] — 无护栏的生成式 AI 可能损害学习（PNAS 2025 RCT）
- [[absent-cognitive-baseline-2026]] — 缺席的认知基线：对 AI 原住民大学生学业自评中结构性差距的理论化
- [[oecd-digital-education-outlook-2026]] — OECD 数字教育展望 2026
- [[ai-changing-teaching-workflows]] — AI 如何改变教学工作流
- [[robot-assisted-language-learning-meta-analysis-2026]] — AI 增强具身机器人辅助语言学习的元分析
- [[genai-educational-outcomes-meta-analysis]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — 即时表现对持久学习之分
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 生成式 AI 学习惩罚：作业外包损害学习
- [[ai-assisted-collaborative-learning-model-dbr]] — AI 辅助协作学习模型 DBR（批判性思维 +24.1%，问题解决收益）
- [[stanford-evidence-base-ai-k12-2026]] — 辅导专用对通用 AI
- [[jost-llm-programming-education-learning-outcomes]] — 编程中的 LLM 依赖与成绩（负相关）
- [[genai-can-harm-teaching-rct-2026]] — 生成式 AI 能损害教学（RCT）
- [[zhao-genai-higher-order-thinking-meta-2026]] — 生成式 AI 与高阶思维元分析
- [[mujib-ai-ibl-creative-math-2026]] — AI 支持的 IBL 与创造性数学表现
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — AI 增强 PBL 支架收益
- [[ccct-cooperative-learning-technique]] — AI 设计的合作学习技术
- [[scaffolding-srl-feedback-genai-human-peers]] — 支架化自我调节反馈收益
- [[learner-ai-interaction-patterns-oop]] — 面向对象编程中的交互模式与学习收益
- [[ai-feedback-critical-thinking-writing-2026]] — AI 反馈与写作中的批判性思维
- [[pedagogy-ai-mistakes]] — AI 错误的教学法：培养高阶思维（Hosseini 2026）
- [[computational-thinking-aica-2026]] — 计算思维层次与 AI 编程助手（2026）
- [[burneo-can-edtech-close-learning-gaps-2026]] — 元分析：自适应/AI 教育科技把学习提高约 0.125 sd
- [[gpt4-feedback-student-activation-2026]]
- [[rachatasumrit-example-problem-ratio-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause（对收益测量的媒体比较批评）
- [[bartos-ai-learning-meta-meta-analysis-2026]] — 元元分析：经偏见校正的 AI 学习收益效应约为所报规模的 1/3
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective：对有缺陷的 AIED 元分析的审计
- [[ai-supported-instruction-stem-meta-analysis-2026]] — 一项控制了相依效应量并检验了发表偏见但未做质量评估的 STEM 综合（Doğan 等人 2026）
- [[ai-education-effects-second-order-meta-analysis-2026]] — 对 45 项教育 AI 元分析的二阶元分析，带重叠校正效应与对合成层的质量评估（Emslander 等人 2026）
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench：AI 与人类辅导产生等效的 GRE 学习收益
