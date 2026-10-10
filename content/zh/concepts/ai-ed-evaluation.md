---
title: 人工智能教育评价
created: "2026-05-29T10:44:35-04:00"
updated: "2026-10-09T18:39:23-04:00"
type: concept
foundations: [agentic-ai, teacher-role]
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment, assessment-validity, educational-measurement, formative-assessment]
audience: [researchers, instructors, administrators]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods, reporting-interpreting-aied-research]
confidence: high
methods: [benchmark]
translation_of: concepts/ai-ed-evaluation
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

> **人工智能教育评价** — 用来评估[[ai-education|人工智能教育]]工具（基于[[llm]]的导师、[[automated-assessment|自动评分器]]、反馈系统、代理）是否真正起作用的方法、基准与标准之总体 — 不只是看头条准确率，而是看可靠性、[[pedagogy|教学]]质量、效度与真实的学习影响。贯穿知识库研究的一个反复出现的主题是：评价必须是领域特定的、顾及可靠性的，并锚定于人类判断与教育结果，而非单一的聚合准确率数字。

## 值得思考的问题

- 你会如何决定一个人工智能辅导工具是否“起作用”？什么证据 — 除了头条准确率之外 — 能使你信服它确实改善了学习？
- 一个关键发现是可靠性不保证效度：一个系统可以高度一致却误判什么是好的教学。为什么一个稳定、可重复的人工智能仍可能是错的？
- 评价必须是领域特定的 — 对一个学科有效的基准可能对另一个学科产生误导。当你看到一个人工智能工具亮眼的基准结果时，你会想核查情境中的什么？
- 被评判所依据的“基准真值”系统往往是有争议的 — 什么算正确答案或正确分数，随专家与学科而异。这种不确定性如何使信任任何评价变得复杂？
- 研究表明，基于文本的大语言模型评价者偏袒被明确言语化的行为、低估隐含情境 — 一种“显性线索偏差”。什么样的好教学可能被机器系统性地错过，因为它只寻找显而易见的？
- 现代评价还权衡环境与基础设施成本 — 能源、硬件 — 而不只是输出质量。[[sustainability]]是否应纳入你对一个人工智能工具价值的判断？

## 引言

人工智能教育评价横跨若干不同的评价对象。它可以评价**输出**（人工智能的答案、分数或反馈是否正确可靠？）、**过程**（该工具是否支持有效、可辩护的评估与学习？）与**行动者**（人工智能导师或代理是否教得有效、行为得当？）。每一项都需要不同的方法，并提出不同的效度问题。

该领域十年来的轨迹本身就是一个框架：[[xiong-ai-educational-measurement-review-2026|Xiong 与 Li（2026）]]在 313 篇文章中追溯三个时代 — 形成期（2015–2018）、扩展期（2019–2022）与生成期（2023 至今） — 并论证构念与效度论证必须为[[human-ai-collaboration|人机协同]]重写，因为[[item-response-theory|IRT]]与经典测验理论模型建立在无辅助的人类表现之上。

### 人工智能教育评价在研究中的体现

- **输出可靠性与基准真值：** [[ground-truth-reliability-aied|基准真值现代化]]论证，人工智能教育评价中的可靠性问题往往可追溯到参照数据本身 — 即系统被评判所依据的“基准真值”标签 — 并提出四项转向以改进可靠性与效度。[[calibrating-trustworthiness-llm-education-2026|校准可信度]]与利益相关者共同设计评价指标与可视化，使对一个人工智能工具的信任建立在可展示的、可解释的证据之上。
- **自动评分与打分：** [[cong-confidence-asag-2026|大语言模型简答题评分]]、[[cong-confidence-asag-2026|置信度感知的 ASAG]]、[[cotal-formative-assessment-scoring-2026|CoTAL 人在环提示工程]]与[[llm-cognitive-diagnosis-handwritten-math|手写数学的认知诊断]]表明，大语言模型可以评分与诊断，但可靠性取决于[[human-in-the-loop-ai|人类监督]]、领域特定的 grounding 与置信度校准，而非原始模型规模。
- **一个针对教学知识而非内容的基准。** [[cdpk-pedagogy-benchmark-llms|Lelièvre 等人（2025）]]用智利教师资格考题给 97 个模型打分（CDPK 28–89%），许多超过估计约 50% 的人类基线，然而静态选择题无法测试课程规划或逐轮脚手架。
- **对照心理测量基准验证生成的题目。** [[assessing-quality-ai-generated-exams-field-2025|Isley 等人（2025）]]为 71 个班级生成了按课程定制的考试，并把另外 20 个对照人类编写的 AP 统计题目做基准测试，用预测试锚定跨 1,686 名学生拟合贝叶斯分层 2PL [[item-response-theory|IRT]] 模型；人工智能题目更容易但区分度更高（ᾱ = 1.3 对 1.2）。
- **教学质量与对齐：** [[machines-misread-pedagogical-quality|机器为何误读教学质量]]记录了判断什么使教学良好时的人—机失配，而[[tutoring-effectiveness-index|辅导有效性指数]]从教学行为预测导师质量。[[responsible-assessment-ai-era-stanford-2026|人工智能时代的负责任评估]]与[[authentic-products-authenticated-processes-2026|认证过程]]论证，评价必须超越正确答案，触及当人工智能能产出学习的“产物”时评估是否仍真实、有效、可辩护。
- **生产监控与评判者校准：** [[llm-judge-evaluation-educational-ai-2026|Rohlfs 等人（2026）]]报告了当“以大语言模型为评判者”的评价在产品规模上运行时会发生什么，依托一个每月服务数百万师生消息的 K-12 套件。随着项目成熟，假阳性开始主导评价者的标记，并使分析师注意力偏离值得产品变更的失效。三项改变 — 重复评判运行的“一致失败”评审组、按评价者选择评判模型、以及软化的评分规则 — 把确认的假阳性削减 99%，并把每条标记的精确率从 0.6% 提高到 49%（覆盖 21 个已部署评价者），而一个严重失效集保持了 100% 的捕获。对评价实践的教训是：决定一条标记是否可行动的是评价者的工作点，而非其头条准确率。
- **评判者多样性作为一项效度协议。** 一个教学设计代理的基准从不同模型供应商而非同一家抽取评判者，报告了在 1,017 个评分情境上的高评判者间可靠性（[[jeon-isd-agent-bench-2026|Jeon 等人（2026）]]）。
- **对照它所声称的归因来审计一个解释，而不是对照流畅性。** [[distilling-self-explaining-lm-learning-analytics-2026|Pan 等人（2026）]]把模型的叙述把关于算术闭合、引用的协变量、决策保真度与不安全治疗率的条件上，因为无论其信号是精确还是嘈杂，流畅的文本都同样成形 — 98.8% 的叙述通过，而负尾被截断。
- **提示敏感性是大语言模型评分者的一阶属性。** [[llm-graders-computer-science-exams-2026|Habibullah 等人（2026）]]为 570 名[[cs-education|计算机视觉]]考生（跨 171 种配置）和 1,038 名机器学习考生（跨 162 种配置）的一场考试评分：一段简短的“严格评分者”前言把 17 个开放权重模型中的 14 个推出了评分段，而复现再现了脆弱性却没有再现其方向，改善了其中性提示过度给高分的七个模型。一个提示的准确性不足以构成可用评分者的证据，而有符号偏差应与平均绝对误差并列呈现；在汇合的双评分样本上做 LoRA 微调使五个小模型达到人类水平，并几乎抹去了角色敏感性。
- **可评证据是一个设计变量，而非任务的属性。** [[durable-skills-measurement-ai-teammates-2026|Globerson 等人（2026）]]让一个执行级大语言模型持有评分规则并把对话引向被评技能，使可评证据在项目管理上提高到 92.4%、在冲突解决上达到 85%，而只是告诉参与者关注该技能则毫无改变。

### 为何评价在人工智能教育中很难

人工智能教育评价之所以困难有若干原因。第一，**可靠性是不够的** — 一个系统可以与评分规则一致却误判教学，正如[[machines-misread-pedagogical-quality|人—机对齐研究]]所示。第二，**基准真值是有争议的** — 什么算“正确”答案、分数或教学动作，本身就是一个随学科与专家而异的判断，见[[ground-truth-reliability-aied|基准真值现代化]]。第三，**教育效度是多维的** — [[assessment-validity]]、[[formative-assessment]]与[[authentic-assessment]]各施加单一准确率指标无法捕捉的标准。最后，**目标一直在移动** — 代理式人工智能与[[multimodal]]模型要求评价框架（[[agentic-ai]]、[[tool-invariant-framework-agentic-ai|工具无关的评估]]），而非复用文本模型基准。评价发现也受同样影响所有 AIED 研究的横贯性限制 — 它们随人工智能改进而过时、依赖可复现性与 FAIR 实践、可能建立在专有系统之上 — 因此评价结果应带着[[limitations-in-aied-research]]中的告诫来读。还有一个新兴维度是**资源可持续性**：本地部署越来越多地报告能耗与硬件需求（例如 VRAM、每次查询的 mWh）与准确率并列 — 见[[shen-sustainable-ai-knowledge-base-cs-education-2026|可持续的本地知识库助手]] — 因此完整的评价要权衡环境与基础设施成本，而不只是输出质量。

**可靠性不保证效度。** [[melo-llm-classroom-observation-teach-2026|基于大语言模型的课堂观察的验证]]表明，一个模型在重复评价中可以高度稳定，却仍与专家判断失配，反之与专家对齐良好的模型往往更易变 — 可靠性与准确性解耦，因此单次通过的准确率数字会高估可依赖性。同一研究记录了一种**显性线索偏差**：基于文本的大语言模型评价者偏袒被明确言语化的行为、低估隐含或情境证据（例如，在评分规则允许以宽容缺失的标准给高分时，持续的学生[[self-regulated-learning|自我调节]]），产生系统性而非随机的分歧。这强调测量可靠性是 — 而非替代 — 有效解释的前提，且评价必须包含重复测量稳定性检查以及锚定于专家的准确性。

即便是经验证的长时程话语模型，也只是弱地追踪独立的结果测量：NSPA 的学生推理与教师采纳分数与教师有效性的增值模型在 ρ = 0.10 上相关，因此自动构念在用于指导评价之前需要外部结果验证（[[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang 与 Liu（2026）]]）。

对被模拟学习者的评价面对同样的标准：一个模拟器只有在行为上*在认识论上*忠实而非仅仅流畅时才有效，因此它应针对其自述的行为目标与环境评分，而非针对一般的人类相似度 — 而自动评判者与专家人类偏好约在 65% 的时间里一致（[[valid-student-simulation-llm-2026|Yuan 等人（2026）]]）。

**聚合准确率掩盖了谁被服务得很差。** [[drawedumath-vlm-struggling-students-2026|对视觉语言模型在 DrawEduMath 上的评价]]表明，总体准确率掩盖了一种系统性弱点：模型恰恰在最需要教学帮助的学生作品（错误的、挣扎中的学生作品）上表现较差，因此按学生能力与错误状态拆分评价是必要的，以避免高估能力并扩大成就差距。

**二元正确性掩盖了真正要紧的失效。** 在一个 10,836 个模拟配对的三向步骤诊断基准上，七个大语言模型导师以近乎完美的程度分类最优步骤（F1 94–99%），但对有效替代方案只有 F1 0–76%、对错误步骤只有 4–55% — 过度拒绝与过度验证 — 而准确的诊断仍不产生可行动的反馈（[[yasir-llm-tutoring-agents-2026|Yasir 等人（2026）]]）。

- **复用人类工具来评价大语言模型需要一次潜在结构检查。** [[assessment-latent-structure-human-llm-2026|Strugatski 等人（2026）]]分别为人类与六个多模态大语言模型拟合探索性因子分析：在两个工具上，大语言模型—人类一致性都低于人类—人类基线，且平行分析保留了不同的因子个数（人类五个对大语言模型四个）。
- **联合评价浮现出单一分数隐藏的权衡。** [[elbench-education-llm-benchmark-2026|Jiang 等人（2026）]]在同一协议下为九个面向教育的模型在能力、安全、基础教育与高阶培养上评分：前六名总体上统计不可区分，却在安全上相差 19.5 分，且安全与基础教育强烈负相关（r = −0.83）。
- **班级偏斜可使评价指标误导。** [[reflection-level-classification-hungarian-essays-2026|Csibi 及其同事（2026）]]在 1,954 篇匈牙利师范生论文中分类反思层级，其中 68% 落在单一层级：一个浅层配置仅在 0.5162 的准确率上就达到 ROC-AUC 0.7131，而班级平衡使每一项指标都下降（不平衡时 0.6672 准确率对平衡时 0.6408）。浅层模型给出最好的聚合分数而变换器更好地处理少数层级，因此所报告的数字应跟随决策实际依赖的表现。
- **基准与评分者的错误被误当作模型失效。** 对六个广泛使用的[[physics-education|物理]]基准的专家重新评分审计了 250 个被拒绝的题目，把 143 个（57.20%）归因于基准缺陷、95 个（38.00%）归因于评分者错误，只留下 12 个（4.80%）是真正的模型错误，因此所测差距的 95.20% 不能归因于模型。修复题目使 HLE-Physics mean@4 从 47.28% 移到 78.66%，CritPt mean@5 从 32.29% 移到修正后的 87.50%，把一个表面的前沿模型弱点转为接近饱和。该审计论证，一个报告的分数是模型、题库与评分者的联合属性，且专家裁定应先于从基准得出的任何能力主张。（[[frontier-models-physics-benchmark-audit-2026]]）

被评价系统的速度是进一步的约束。[[ai-tutoring-micro-rct-gcse-science-2026|Harrison 等人（2026）]]直接描述了时间问题：到一项大规模试验设计完成、交付、分析并发表之时，被研究的技术可能已发生实质变化，这恰恰在需要更强证据的时刻把实践推向微弱的观察或使用数据。他们的答案不是接受更弱的设计，而是缩短循环 — 由实践者主导的微随机试验，保留因果对比并在平台演进时重复。

- **数据保真度是与输出质量不同的评价问题。** 复现每个变量汇总统计量的合成教育队列，仍可能误述数据结构：一个关于学习者的每周邻近图在合成版本中跨学期的变化比真实队列少 2.6 到 4.9 倍，因此保真度分数不能预测哪些分析能在真实数据上存活（[[synthetic-educational-data-structural-fidelity-2026|Inoue 与 Yasutake（2026）]]）。
- **分布内准确率不是可部署性。** 一个 Bloom 层级分类器在其精选题库上达到宏 F1 0.88，却在两套人工智能生成题目上降到 0.48 与 0.20，这一损失跟随显性 Bloom 触发动词的近乎缺席而非模型规模；未训练的[[llm|大语言模型]]是分布外最稳健的选项（0.79 与 0.41–0.51），而在标注的分布外数据上重训恢复了最大增益（最高 0.82），因此迁移应与分布内拟合一起出现在报告中（[[bloom-classifier-ai-assisted-questions-2026|Castanares 等人（2026）]]）。
- **一个人工智能难度量表是评价辅助，而非分数。** 人工智能难度估计强烈追踪题目级通过率（跨 79 道题 rho = −0.871），但在 106 道题的 CS101 样本上减弱到 −0.552，并在考试层面趋近于零，因此这类量表属于题目复核，而非学生评价（[[llm-difficulty-calibration-programming-exams-2026|Yan 等人（2026）]]）。

### 与相关概念的关联

人工智能教育评价位于知识库的方法与风险之中心。它在[[assessment]]与[[automated-assessment]]之内把[[assessment-validity]]、[[educational-measurement]]与[[benchmark]]操作化。它对人类监督的呼吁连接到[[human-in-the-loop-ai]]与[[teacher-role]]，而它对可靠性的关注连接到[[hallucination-risk]]、[[automated-assessment|置信度感知的人工智能评估]]与[[trust-calibration]]。评价表现与评价学习之间的区分连接到[[genai-performance-vs-learning|表现与学习]]以及[[student-modeling]]；而对教学代理的评价连接到[[intelligent-tutoring]]、[[llm-training-and-fine-tuning]]与[[pedagogical-safety]]。

### 评价学习增益

人工智能教育评价的一个中心对象是**学习增益** — 一个人工智能工具所产生的知识或技能的可测量改善（见[[learning-gains]]）。严谨地评价增益要求选择正确的结局测量，因为[[genai-performance-vs-learning|表现与学习相分离]]：人工智能可以抬高即时的、有人工智能协助的任务表现，却让持久的、无辅助的学习不变甚至下降（见[[generative-ai-reduced-study-time-math]]、[[stromberg-generative-ai-learning-penalty-secondary-2026]]）。因此有效的增益评价：

- **使用无辅助的、抗人工智能的结局测量。** [[generative-ai-guardrails-harm-learning|护栏证据]]与[[summative-assessment|总结性评估研究]]表明，揭示真实[[learning-gains|学习增益]]的是监考的、闭卷的、无辅助的测量 — 而非有人工智能协助的作业或带回家的作业。
- **区分有协助的表现与持久的学习。** [[genai-meta-analysis-programming-learning|元分析]]表明，人工智能可以带来巨大的生产力增益而学习增益并不显著（g ≈ 0），因此评价必须两者都报告。
- **技术世代可能无关紧要，而成本数据缺失。** [[burneo-can-edtech-close-learning-gaps-2026|Burneo 等人（2026）]]把 14 项随机试验汇总到平均 0.125 sd 的学习增益，生成式人工智能并不优于早先的自适应软件（0.022 sd，SE 0.075），而只有两三篇研究报告了可比的每生成本。
- **把前测/后测测量与效度检查配对。** [[assessment-validity]]与[[educational-measurement]]为增益测量奠基；[[genai-educational-outcomes-meta-analysis|元分析综述]]跨研究汇总效应量，以确立该领域的增益证据。
- **按学习者与情境拆分。** 因为[[learning-gains]]随人群、领域与人工智能配置而变，评价应为不同学生子群报告增益（例如按先前能力，如[[drawedumath-vlm-struggling-students-2026|VLM 评价]]就错误状态所揭示的）而非单一聚合值，并应把增益发现连接到[[meta-analysis-systematic-review]]，以把它们置于更广的证据基础中。

需要情境条件化的基准：[[zhang-tutormoments-2026|Zhang 等人（2026）]]论证，先前的辅导基准（MathTutorBench、MRBench、LearnLM）奖励协助困境的一侧，或给出欠规范的指导。TutorMoments 改为重放由教师识别的教学决策点，评价导师的帮助对特定学习时刻是否恰当 — [[scaffolding]]对严谨性。

- **你选择的指标可能逆转你的结论。** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang 等人（2026）]]在[[medical-education|医学教育]]中评价人工智能教学代理时发现，一个[[edtech-platform|教育平台]]未公开的聚合分数把代理的排序几乎与一个透明的、经专家验证的八维教学质量评分规则（医学知识准确性、教学指导、知识覆盖、角色扮演质量、适应性难度、医学安全、参与度、反馈）相反。平台分数索引学生表现；评分规则索引代理的教学行为 — 选错指标决定了哪些代理被采纳或精炼。他们还发现“以大语言模型为评价者”的宽松度随模型而异（有些过于宽松而无法区分），因此自动评分需要人类校准，且在认知过程维度上最可信。
- **错误率可能掩盖它意在捕捉的失效。** [[ai-mediated-input-medical-english-asr-2026|Stanchev（2026）]]把一段医学英语段落的语音录音发给四个[[speech-and-voice-technologies|ASR]]服务：两个免费服务返回了参照的 87.96% 与 88.34%，而两个付费服务返回 32.76% 与 55.35% 的预览，因而词错误率为 73.21% 与 48.77%。高错误率来自从未返回的词元而非被听错的词元，因此仅按错误率排名把一项导出限制当成了转写失败。只要自动指标替代学习者所见之物，覆盖率就应与错误率并列出现。
- **把评价套件锚定于测得的学习，而非替代物。** 教学能力基准、对话教学评分规则与导师延迟应针对实际学习增益验证，而非被当作它们的替代物；而延迟本身是一条评价轴，因为它塑造学生是否根本参与（[[studentbench-ai-human-tutoring-gre-2026|Northcutt 等人（2026）]]）。
- **专家判断评价需要自己的可靠性核算。** [[bespoke-industry-personalized-lecture-videos-2026|Puech 等人（2026）]]让 25 位领域匹配的专家对照锚定于“一堂标准慕课质量”的评分规则为 92 段生成的[[video-education|讲座视频]]评分，判定 87% 达到或高于门槛（均值 3.42/5）。每段视频由一位评审者评分一次（k = 1），因此该设计以牺牲一个评分者间一致性统计为代价把评审组铺开在语料上；一个随机截距模型把约 35% 的残差方差归于评审者（ICC = 0.35），论文报告的是以评审者聚类的区间而非单一精确度数字。建立在专家判断上的评价，其强度只相当于它所发表的可靠性分析。

## 关联概念

- [[interpreting-and-applying-aied-research]]
- [[ai-assisted-educational-research]] — 人工智能协助的教育研究
- [[assessment-validity]] — 人工智能教育评价中的解释效度
- [[educational-measurement]] — 评估学习的测量理论
- [[psychometrically-aware-ai]] — 把心理测量应用于基于人工智能的评估
- [[benchmark]] — 评价人工智能系统的标准化基准
- [[automated-assessment]] — 基于人工智能的评分与打分系统
- [[learning-analytics]] — 对学习行为的数据驱动分析
- [[research-methods-aied]] — 人工智能教育的研究方法
- [[learning-gains]] — 测量人工智能工具带来的学习增益
- [[formative-assessment]] — 指导教学的持续评估
- [[summative-assessment]] — 总结性评估：抗人工智能的格式（口试、监考、闭卷考试）
- [[authentic-assessment]] — 对真实世界可迁移表现的评估
- [[human-in-the-loop-ai]] — 对人工智能评价的人类监督
- [[trust-calibration]] — 校准对人工智能系统的信任
- [[hallucination-risk]] — 人工智能输出中虚构内容的风险
- [[intelligent-tutoring]] — 评价人工智能辅导系统
- [[agentic-ai]] — 评价自主人工智能代理的行为

## 关联文章

- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — 平台分数漏掉了什么：对人工智能教学代理的多维评价
- [[assessment-latent-structure-human-llm-2026]] — 评估工具对人类与大语言模型测量的是否是同一东西？（Strugatski 等人 2026）
- [[assessing-quality-ai-generated-exams-field-2025]] — 评估人工智能生成考试的质量：一项大规模实地研究
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — 神经符号教学对齐（NSPA）
- [[yasir-llm-tutoring-agents-2026]] — 大语言模型辅导代理的三向分类基准（Yasir 等人 2026）
- [[drawedumath-vlm-struggling-students-2026]] — 在 DrawEduMath 上评价 VLM：错误内容最难（Lucy 等人 2026）
- [[cdpk-pedagogy-benchmark-llms]] — 对大语言模型教学知识做基准测试（CDPK + SEND）
- [[melo-llm-classroom-observation-teach-2026]] — 大语言模型课堂观察验证：可靠性与准确性（Melo 等人 2026）
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 本地 OER 人工智能知识库助手：多维评价
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics and Visualizations
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Evaluating LLM Teaching Ability
- [[machines-misread-pedagogical-quality]] — Why Machines Misread Pedagogical Quality: Human-Machine Alignment
- [[cong-confidence-asag-2026]] — Automatic Short Answer Grading With LLMs
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Formative Assessment
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Students' Cognitive Skills
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality
- [[jeon-isd-agent-bench-2026]] — ISD Agent Benchmark
- [[tool-invariant-framework-agentic-ai]] — A Tool-Invariant Framework for Teaching and Assessing Computational Methods
- [[valid-student-simulation-llm-2026]] — Toward Valid Student Simulation With Large Language Models
- [[llm-difficulty-calibration-programming-exams-2026]] — From Evaluated Models to Evaluation Aids
- [[socratic-tests-conversational-assessment]] — The Theoretical Foundation of Socratic Tests
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible Assessment in the AI Era
- [[authentic-products-authenticated-processes-2026]] — From Authentic Products to Authenticated Processes
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of generative AI educational outcomes
- [[zhang-tutormoments-2026]] — When Help is Unhelpful: evaluating AI tutors for productive struggle
- [[elbench-education-llm-benchmark-2026]] — ELBench: education LLM benchmark
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analytic evaluation of adaptive + AI EdTech
- [[xiong-ai-educational-measurement-review-2026]] — AI's role across scoring, psychometrics, assessment
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[durable-skills-measurement-ai-teammates-2026]] — Toward Scalable Measurement of Durable Skills
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[llm-judge-evaluation-educational-ai-2026]] — When Evaluators Cry Wolf: Lessons from Production LLM-as-Judge Evaluation in Educational AI
