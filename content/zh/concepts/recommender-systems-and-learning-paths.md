---
title: 推荐系统与学习路径
created: "2026-09-16T14:29:36-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [curriculum-design]
technology: [adaptive-learning, knowledge-graph, learning-analytics, personalized-learning]
ethics: [explainable-ai]
pedagogy: [lifelong-learning]
confidence: medium
audience: [instructors, learners, researchers, instructional designers, software developers]
level: [higher ed, k 12]
discipline: [cs education, learning sciences]
translation_of: concepts/recommender-systems-and-learning-paths
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **推荐系统与学习路径** —— [[adaptive-learning|自适应]]与[[personalized-learning|个性化]]学习技术中负责决定*学习者接下来应接触什么内容、以何种顺序接触*的那一部分：将哪一项资源、练习或课程排序推送给学习者，以及依次遍历哪一串概念。它的两大方法[[parents-and-families|家族]]分别是行为式的——在交互日志上做[[machine-learning|协同过滤]]——以及语义式的——在由概念、资源与先修关系构成的[[knowledge-graph|知识图谱]]上做序列排序——两者正日益融合为混合模型。由于输出是一个排序列表而非对话，其特有的问题是选择性与正当性：稀疏数据下的冷启动与流行度偏置、先修关系的方向不对称性，以及[[teacher-role|教师]]或学习者能否理解、审查并信任自己看到的这份列表。

## 值得思考的问题

- 推荐系统从学习者点击、观看和完成的内容中学习。如果系统只能看到行为，它实际建模的是谁的学习——对于一个安静、 struggling 或早已掌握材料的学生，它会漏掉什么？
- 在一项研究中，教师认为课程语言式的解释比特征重要性图表更易理解、更可信。一份推荐解释需要说出什么，*你*才会据此行动？
- 先修关系只朝一个方向成立——知道 B 并不意味着知道 A。为什么一个独立为概念对打分的模型可能会搞错这一点？如果它搞错了，对学习者下游会造成什么后果？
- 路径优化研究报告了更短的路径和更好的后测成绩，认知负荷的降低是主要中介变量。更短的路径总是更好的路径吗，还是效率会去掉学习者真正需要的练习？
- 对某教育推荐系统的审计发现，在公平性与多样性干预之后，热门材料仍然主导着列表。如果流行度持续获胜，什么会让你去重新设计目标函数，而不是去调优重排器？
- 来自 554 门课程的[[learning-design]]数据显示，习得（知识传授）既是最常见的活动类型，也是最常见的入口点。如果 AI 基于这些数据推荐"下一步是什么"，它复制的是谁的设计习惯？

## 引言

教育推荐系统的存在，是因为学习材料的供给已经超出任何人的导航能力。仅[[cs-education|入门编程]]就有数千道练习活动，而把它们组织成具有教学意义的组合，通常需要耗费大量时间的专家策划。推荐系统接收学习者的历史、材料的属性，或两者兼有，产出一份排好序的候选清单，或一条贯穿内容的有序路径。

[[adaptive-learning]]描述的是将内容、节奏与难度调整到[[student-modeling|学习者模型]]的*机制*，[[intelligent-tutoring]]描述的是以对话方式执行这种调整的平台，而推荐研究聚焦于*选择与排序决策本身*：排序函数、它在其上排序的结构，以及它所使用的证据。这一决策层自带一系列失效模式，将在下文各节讨论。

## 教育推荐系统如何工作

行为式推荐系统继承了[[machine-learning|协同过滤]]的逻辑：假设历史相似的学习者想要相似的资源，因此系统基于共现而非内容做预测。这在数据稠密处强大，在数据稀疏处脆弱。[[fair-explainable-edu-recommendations|Evangelista 与 Bukhari（2026）]]把问题说得直白——以准确率为导向的推荐系统对参与历史有限的学生支持可靠性更低，而热门资源主导列表——并给出一个 Hybrid HKG-GRU 框架：嵌入课程材料的异质[[knowledge-graph]]、用 GRU 建模学习者序列，再训练其在各类学习者群体间的鲁棒性（GroupDRO）并重排以提升曝光多样性（Maximal Marginal Relevance）。在 152 名学生、59 项资源、约 150,000 次交互的 Moodle 日志上，它达到 HR@10 = 0.68、MRR = 0.41，但目录层面的大量流行度偏置依然存在——这说明[[bias-mitigation|偏置缓解]]只是局部的。

语义式推荐系统用结构取代共现。[[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu、Sun 与 Song（2026）]]构建了涵盖教学资源、语言概念、技能、学习者群体与[[pedagogy|教学法]]属性的知识图谱，并沿四个教学维度分解每一项资源——教学情境、认知层级、技术特征与文化适应性。推荐从学习者陈述的需求出发在图上做 k 跳扩展，用基于特征的协同过滤精炼候选，再按随学习者能力、进度与兴趣指数上升的融合系数排序，使基础较弱的学习者获得更多来自图谱的结构化引导，而高能力学习者更依赖自己的行为模式。在 MARS 数据集的英文子集（4,800 名用户、14,200 项资源、132,000 次交互、稀疏度 0.9981）上，它达到 NDCG 0.625 与 HR 0.751，比最好的神经基线高出约 7–8%，并在覆盖率与跨域准确率上击败了包括 RippleNet 和 KGAT 在内的图感知基线。消融实验显示各类信号互补（仅 CF 的 NDCG 为 0.584，仅 KG 为 0.604），作者也指出这些是排序指标，并不能证明[[learning-gains|学习效果]]。

第三条路线几乎完全避开个体层面的交互数据。[[pattern-kc-programming-recommendation|Hoq 及其同事（2026）]]从每个代码样本中抽取基于模式的知识组件，按知识组件集合的相似度推荐相关练习活动。在专家组织的入门 Python 材料语料上，该方法与教师自身的概念分组一致，并在排序指标上击败了知识组件基线与嵌入基线——这证明当学习者历史稀薄时，教学上的对齐可以从材料的语义中获得。

第四条路线把推荐当作顺序决策而非排序。[[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec（Ozyurt、Almaci、Feuerriegel 与 Sachan，2025）]]构建了一个语义基础的知识追踪器——一个[[llm]]为每道题标注解题步骤与知识概念，对比学习对齐题、步骤与概念的嵌入，校准损失让追踪器直接预测概念级知识状态——然后把该追踪器用作[[reinforcement-learning]]环境，让策略在其中选择下一道练习题。有两项设计选择对推荐问题尤为关键：学生状态是一个紧凑的循环编码，而非完整练习历史，因此长序列在回放缓冲区中仍可处理；奖励是预测概念知识的变化量，无需对目标概念下的每道题跑推理。基于模型的价值估计从追踪器初始化评论家，在 XES3G5M（2,048 名测试学生）的四个任务上提升了连续值方法，并把它们推过离散动作方法在最难任务上的表现——即推荐学生*最薄弱*的概念，那里每一步目标都会变化。这些数字是来自模拟环境的最大知识提升百分比，这比实测学习效果是更弱的论断；作者自己的附录也指出，多数追踪数据集只记录二值的对错标签，因此他们勾勒的[[misconceptions|错误概念]]级推荐尚无法在现有数据上检验。

## 先修关系与路径排序

给下一个项目排序，比为一份[[curriculum-design|课程]]排序要容易，因为学习依赖是有方向的。[[proprl-prerequisite-relation-learning|Cheng 及其同事（2026）]]论证：把先修发现当作普通链接预测，会在该关系的三个属性上失败——它不可逆、它的证据常是多跳的（*ci* → *ck* → *cj*）而非一步的学习者迁移、它的相关性是成对特异的，因此一个概念的表示应随它与什么配对而改变。他们的 ProPRL 模型加入了一项不可逆约束——一个惩罚成对双向高置信度的反对称正则项——并配一个成对条件门，权衡来自概念-资源超图的资源感知证据与来自学习行为图的行为感知证据。它在[[online-teaching-and-learning|MOOC]]、LectureBank 与 University Course 数据集上全部九个数据集-指标组合中排名第一，比最强基线提升 1.96% 到 6.11%，该约束还把正确排序关系的比例从 88.0% 提升到 90.0%。

一旦依赖被建模，路径就成了一个优化问题。[[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng 与 Huang（2026）]]将贝叶斯[[cognitive-diagnosis|认知诊断]]、知识空间理论与认知负荷理论结合：一个贝叶斯 DINA 模型在稀疏度 91.3% 的 EdNet 数据上收敛，最短补救路径算法产出平均 3.82 步的个性化路径——比随机路径效率高 22.4%，比固定全覆盖路径高 23.6%。在一项 120 名学生的随机概率学习实验中，个性化路径学习者用 57.6 分钟完成，对照组用 73.8 分钟，并在控制前测后于后测上优于对照组。该研究还检验了*为什么*：个性化路径降低了全部六个改编 NASA-TLX 维度上的认知负荷，且认知负荷是后测成绩效应的主要中介（多重中介模型中的间接效应 0.28）。一个隐马尔可夫模型识别出[[critical-thinking|分析性思维]]是瓶颈属性，其前向转移概率最低（0.31）、猜测参数最高（g = 0.28）。

PersonaPath 通过质疑决策的*单位*，把排序问题推得更远。[[personapath-personalized-learning-paths-2026|Liu 等（2026）]]对比了以练习为中心的推荐——从交互日志推断下一个项目——与以知识为中心的规划：规划器读取一份显式的学习者画像、一个掌握状态与一个陈述的目标单元，从课程层级（77 个学科共 347 本教材、1,751 个单元、4,092 个概念，411 条先修边经验证达 99.5% 精度，Cohen's κ = 0.93）中选择下一本教材、单元与概念。最有区分度的情形是日志看不到的那种：两个正确记录相同但目标不同的学习者需要不同路线，只有目标才能使之可见。他们对十个 LLM（1B–30B+）的闭环评测分离了聚合指标所混淆的维度——DeepSeek-V3.1 在先修/[[hallucination-risk|幻觉]]有效性上达 90.9%，但在适应性上只有 44.3%，基础教育最终通过率 29.5%，[[higher-ed|高等教育]]为 14.6%，且没有任何模型在任何场景的适应性上超过 44.7%。两项消融使诊断更清晰：从画像中移除掌握字段会让适应性损失多达 26.1 分，而对有效性几乎无影响；一次性路径生成可让有效性提升多达 30.8 分，同时让适应性下降 28.8——遵循课程结构的排序是远比学习者条件化排序容易的目标，这是对不带学习者对齐约束就报告路径质量的警示（[[personapath-personalized-learning-paths-2026]]）。

先修结构还可作为诊断课程而非学习者的透镜。[[knowledge-gap-detection-ai-tas|Medhat 及其同事（2026）]]把学生对 AI 教学助手的提问，对照一张由 GPT-4 抽取的先修图谱分类，在 164 名研究生的 1,340 次提问事件、43 个标签上达到 80.0% 准确率，并发现主题级提问量与学生[[self-report-measures|自评]]的难度相关（Spearman's ρ = 0.491，p = 0.008）。交互日志就这样变成一幅课程排序在何处让学习者受挫的地图，且不增加任何测评负担。

## 解释与审查推荐

排序质量并不解决"任何人是否该遵循这个排序"的问题。[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor、Cukurova、Kent 与 Alexandron（2025）]]改编了 Hoff 与 Bashir 的自动化信任模型，用 41 位在职[[chemistry-education|化学]]教师和推荐工具 GrouPer 对其做了检验。[[explainable-ai|可解释性]]通过提升可理解性间接提升了[[trust]]，且解释的*形式*比它是否存在更重要：把教师从特征重要性（"数据驱动"）解释换成语义的、课程语言的（"领域驱动"）解释，显著提升了可理解性（W = 80.5，p = 0.005）、习得[[trust-calibration|信任]]（W = 52，p = 0.002）与接受度（W = 22.5，p = 0.003），七位出声思考的教师全部认为领域驱动解释更有影响力。还出现了另外两个接受度驱动因素，两者都是情境性的而非认知性的：教学对齐（11 人中 8 人提及）与工作负荷降低（11 人中 6 人）。也有几位教师表示，仅有解释并不够——他们希望先有课堂使用经验再依赖它，这有力地说明推荐系统的信任是在使用中建立的，而不是靠图例交付的。

公平性审计问的是另一个问题：谁的推荐更差？Graph-GRU 研究是一个有用的实例，因为它明说了其审计看不到什么。公平性是通过基于参与的群体来操作的，因为公开的 Moodle 数据集缺少成绩、[[prior-knowledge|先前知识]]、学习画像与人口统计属性，因此结果是对跨[[student-engagement|参与度]]水平行为的审计，而不是对[[equity-in-ai-education|教育公平]]的完整评估；一个低活跃学习者可能正在挣扎、可能已失去兴趣、也可能早已熟悉材料。那里的可解释性采取基于路径与反事实分析的形式，多数学习者的反事实稳定性中位数 CR@10 = 1.0，但目录层面的流行度偏置持续存在，体现在高基尼暴露指标上。教训是：[[bias-mitigation]]必须在暴露与学习者群体的层面去度量，不能从准确率或从存在一个解释模块来推断，且[[human-in-the-loop-ai]]监督只有在人能看见群体级证据时才有意义。

## 实践中的学习路径

路径不只是被计算出来的，它们也是被设计出来的。[[learning-paths-patterns-learning-design-2026|Divjak、Svetec 与 Horvat（2026）]]把[[learning-analytics]]转向[[design-thinking|设计过程]]本身，分析了在免费的 Balanced Design Planning 工具中规划的 554 门课程里 29,064 个教与学活动的序列。马尔可夫链与模式挖掘浮现出一种设计语法：习得型活动是最常见的学习类型（超过 20%），也是最常见的入口点，其后是练习、讨论与[[assessment]]（各占 15–20%），最强的转移是测评 → 讨论（0.332），高于练习 → 练习（0.317）。规则"习得 → 测评 → 练习 → 练习"以置信度 0.74 成立（提升度 1.45），且学习类型跟踪了预期成果的认知层级：习得从 Bloom 第 1 级约占活动 50% 降至第 6 级约 20%。作者警告说，与翻转、[[inquiry-based-learning|探究式]]或[[project-based-learning|项目式]]设计的相似并不能证明设计意图——但用这类设计数据训练出来的推荐系统会学到这些习惯，包括对传授型开场活动的偏置。

在正规学校体系的另一端，路径结构变成了一个[[governance]]问题。[[learnity-graphs-lifelong-learning-framework-2026|Szekely、Gal-Ezer 与 Harel（2026）]]论证，AI 中介的知识获取需要重新思考固定的高等教育课程，并提出"学习性图谱"（learnity graphs）——把学习表示为知识、技能、经验与制品相互联结的单元。该提案保留了大学在基础知识上的角色，同时把重心转向[[creativity]]与跨学科整合，并让学习者成为自己图谱的维护者，这正是它与[[self-directed-learning]]和[[self-regulated-learning]]相遇之处。自主导航是否通向建设性结果并无保证：[[dual-ai-learning-pathways-sdt-2026|Shen 与 Arunrugstichai（2026）]]在跨情境调查（N = 508）中建模了从高中学习氛围到大学[[generative-ai|GenAI]]使用的两条路径，区分了建设性的自主使用与强迫性依赖。

一个值得划出的边界是：推荐系统目前所做之事更接近咨询而非协作。[[human-ai-collaboration-prerequisite-functions|Mutlu Cukurova（2026）]]重构了历史上一种互动被认定为协作所需满足的条件——一种经协商、部分对称的关系，共享且可协商的目标，低度且不断变动的分工，以及相互建模与社会共享的[[regulation]]——并得出结论：当前多数[[human-ai-collaboration|人机互动]]更宜被描述为咨询、治理、委派或指令。他的五级分类法（交易型、情境型、操作型、实践型、协同型）是有用的校准：推荐下一个资源属于操作型安排，把它称作[[collaborative-learning|协作学习]]伙伴则夸大了主张。

## 本页与个性化、自适应与辅导研究的关系

三个相邻概念页面覆盖相邻的地面，应与本页一起阅读。[[personalized-learning]]覆盖*目标*——定制整个体验，包括目标、偏好与节奏，路径选择是其中一个组成部分。[[adaptive-learning]]覆盖*机制*——实时改变内容、节奏与难度的度量-建模-适应循环。[[intelligent-tutoring]]覆盖*平台*，即把诊断与教学互动结合在一起的典型系统。本页覆盖这些页面所预设的决策层：排序与序列化技术本身。它是协同过滤与知识图谱推荐架构、先修关系发现与课程排序、排序输出的可解释性与公平性、以及推荐特有的失效模式——冷启动、流行度偏置、过度收窄、排序不透明、跨学习者群体的推荐质量不均——的家园。一项报告交互日志上 NDCG 或覆盖率的研究属于这里；一项报告辅导对话带来学习收益的研究属于辅导或自适应学习页面。

## 风险与开放问题

证据基础有一个一致形态：离线排序指标很强，关于学习的证据很弱。上文两项推荐研究都是在历史交互日志上评测的，并且都说明了这一点；CF–KG 的作者更明确呼吁教师评估、学习者研究与基于结果的实验。流行度偏置在某系统中挺过了公平感知的训练目标，因此该领域还无法指出一种能可靠改变暴露的重排序或正则化修复手段，公平性审计也仍受 LMS 日志所载内容的限制。冷启动是通过架构方式（语义结构）应对的，但尚未在真实部署中对全新用户做过检验。路径效率的证据较好，然而效率数字仍只基于一项研究和一个算法族；更短的路径若去掉了学习者所需的[[desirable-difficulties|有益的挣扎]]，并不自动更好。形式化的路径优化工作把这一点在两个方面都 sharpen 了：保证一个问题是难题，对某个特定语料几乎说明不了什么，因为一个爬山算法在每个真实画像上都登上了[[retrieval-spacing-interleaving|交错]]量表的顶端，尽管已有 NP 完全性证明；而一条在理论推导量表上得 3.54 分的路径，仍是一条没有人在学习者上检验过的路径，因此量表质量是面向设计者的结果证据代理，而非其替代。术语也不稳定：[[ikram-ai-personalized-learning-review-2026|Ikram 及其同事（2026）]]在对 31 篇 Scopus 收录文章（2013–2025）的[[meta-analysis-systematic-review|PRISMA]]综述中报告，AI 支持的自适应系统有中等至较大的认知效应（g = 0.50–0.70），并受实施质量与[[research-methods-aied|研究设计]]强烈调节。

同一批文献已开始提出缓解收窄的方案，尽管尚未加以检验。[[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem、Zaoui Seghroucheni 与 Ziti（2026）]]用 K-Means++ 把 14,003 条学生记录按 12 项自报的行为、心理与环境输入聚为六个画像，分离度良好（轮廓系数 0.62；期末成绩上 η² = 0.770，最高与最低画像间平均考分差 40.17 分），再用亲和度分数结合 Felder-Silverman 映射矩阵，把画像映射到学习对象，并加入一个多样性正则项（λ = 0.30），其明确目的就是阻止推荐系统塌缩成画像本身已有的偏好。设计是贡献，证据则不是：推荐层仍停留在概念层面，未报告任何部署或结果度量，作者也声明聚类输入是自报代理而非 LMS 交互轨迹。它是对本页所指出的正则化空白的一个候选答案，仍在等待本页说该领域所缺的那种验证。

## 关联概念

- [[knowledge-graph]] — 概念、资源与先修关系的结构化表示
- [[explainable-ai]] — 作为设计特征的解释，中介可理解性与信任
- [[curriculum-design]] — 推荐系统建模、推断与复制的排序决策
- [[learning-design]] — 路径分析所作用的活动计划序列
- [[learning-analytics]] — 推荐背后的数据与方法，也是被审计的对象
- [[cognitive-diagnosis]] — 诊断用于播种补救路径的知识状态
- [[knowledge-tracing]] — 建模掌握度随时间的变化，以决定学习者已准备好学什么
- [[student-modeling]] — 推荐所消费的学习者表示
- [[personalized-learning]] — 更宏观的目标；本页覆盖选择决策
- [[adaptive-learning]] — 实时调整机制；本页覆盖排序与序列化
- [[intelligent-tutoring]] — 在对话中执行推荐的平台
- [[bias-mitigation]] — 排序与曝光中的公平性干预
- [[equity-in-ai-education]] — 推荐质量上的群体级差异
- [[human-in-the-loop-ai]] — 对自动资源导航的监督
- [[self-directed-learning]] — 学习者自主维护的路径与终身导航
- [[lifelong-learning]] — 学位序列之外的图谱式学习
- [[trust-calibration]] — 让依赖程度与推荐可靠性相称
- [[student-support-and-success]] — 推荐支持、资源与学业路径

## 关联文章

- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — 面向多模态教学资源的混合协同过滤加知识图谱，具备能力与进度感知的融合（Liu、Sun 与 Song 2026）
- [[fair-explainable-edu-recommendations]] — 异质知识图谱 + GRU 推荐系统，带 GroupDRO 公平性与反事实可解释性（Evangelista 与 Bukhari 2026）
- [[xai-teachers-trust-edtech-recommendations-2026]] — 领域驱动解释比特征重要性图表更能建立教师信任（Feldman-Maggor 等 2025）
- [[proprl-prerequisite-relation-learning]] — 带不可逆约束的先修关系学习，保证方向一致性（Cheng 等 2026）
- [[pattern-kc-programming-recommendation]] — 按基于模式的知识组件相似度推荐编程练习（Hoq 等 2026）
- [[learning-paths-patterns-learning-design-2026]] — 对 554 门课程中 29,064 个已设计活动的马尔可夫与模式挖掘分析（Divjak、Svetec 与 Horvat 2026）
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — 贝叶斯 DINA 诊断与最短补救路径，以认知负荷为中介（Feng 与 Huang 2026）
- [[knowledge-gap-detection-ai-tas]] — 把 AI 助教的提问映射到 GPT-4 抽取的先修图谱，找出课程级缺口（Medhat 等 2026）
- [[learnity-graphs-lifelong-learning-framework-2026]] — 学习性图谱作为固定课程的终身学习替代方案（Szekely、Gal-Ezer 与 Harel 2026）
- [[human-ai-collaboration-prerequisite-functions]] — 五级分类法表明多数人机互动是咨询而非协作（Mutlu Cukurova 2026）
- [[dual-ai-learning-pathways-sdt-2026]] — 自主支持与压力预测建设性或强迫性 AI 路径（Shen 与 Arunrugstichai 2026）
- [[ikram-ai-personalized-learning-review-2026]] — 个性化学习趋势、路径与推荐模型的 PRISMA 综述（Ikram 等 2026）
- [[personapath-personalized-learning-paths-2026]] — PersonaPath：一个以知识为中心的规划基准，显示 LLM 有效性达 90.9% 但适应性仅 44.3%（Liu 等 2026）
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — 把练习推荐当作在语义基础追踪器上的顺序决策
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — 将 14,003 条记录行为聚类为六个画像，通过带多样性正则的推荐框架映射到学习对象（Najem 等 2026）
