---
title: 项目反应理论
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:58:14-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-05T08:24:47-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **项目反应理论（IRT）** — 一族心理测量模型，通过建模学习者能力与答对每道题的概率之间的关系，从项目作答中估计潜在能力。IRT 建模项目难度与区分度，使测量精度和自适应测试成为可能。在 AI 时代，IRT 与[[llm|LLM]]在[[llm-item-difficulty-prediction]]和[[llm-psychometric-calibration-cdp]]中相遇：AI 预测并校准项目难度，有望提高测量精度，并供给[[adaptive-learning]]。

## 值得思考的问题

- 项目反应理论把能力和项目难度当作从作答模式中联合估计出来，而不是把原始测验分数当作测量。两个答对题数相同的学生，实际能力上可能有什么差别？
- IRT 让你在共同量表上比较学习者，并逐人估计精度。为什么知道一道题的难度和区分度，可能比只知道学生答没答对更要紧？
- 一项研究用 IRT 的拟合人统计量来区分选择题上的人类作答与 AI 生成作答——把 AI 作答标记为"异常"。评估学习的同一台测量机器，怎么也能用来监管学术诚信？
- [[research-methods-aied|研究者]]用 IRT 验证 AI 生成的考题在难度和区分度上与专家编写的相当。如果一个 AI 写出一道"看起来"不错的题，为什么还要依据拟合出的 IRT 参数作经验校准？
- 随着 AI 预测并校准项目难度，如果模型对难度的估计没有对照真实学生作答数据加以验证，会出什么问题？
- IRT 连着自适应测试和知识追踪——用你的作答来选择下一个问什么。从每一个答案估计你的能力，如何使测验变得更短更精确，而不只是更长？

## 引言

IRT 把能力（θ）和项目参数（难度、区分度，有时还有猜测）当作从作答模式中联合估计出来的，而不是把原始分数当作测量。这使得在共同量表上比较学习者、自适应地选题、逐人而非全局地估计精度成为可能。

### IRT 在研究中的呈现

- **AI 预测的难度：**[[llm-item-difficulty-prediction|LLM 项目难度预测]]用语言模型估计项目难度，其估计必须对照经验拟合的 IRT 参数加以验证。

- **心理测量校准：**[[llm-psychometric-calibration-cdp|LLM 心理测量校准]]把基于模型的评价与基于 IRT 的测量对齐，使 AI 生成的作答保持测量属性。
- **知识追踪与学生建模：**IRT 与[[knowledge-tracing]]和[[student-modeling]]密切相关——后者是随时间追踪学习者知识的模型——共享从可观察作答估计不可观察学习者状态的目标。
- **从 LLM logits 读出的 IRT 量。**[[huang-interpretable-knowledge-tracing-2026|Huang 等（2026）]]从下一 token 的 logits 中提取学生能力 θ = z^GOOD − z^BAD 和辅导轮次难度 d = z^HARD − z^EASY，并在一个 1PL Rasch 预测器中把它们组合起来，使基于对话的知识追踪可解释（QATD2k 上 64.29% 准确率、65.25 AUC）。
- **贝叶斯分层现场验证：**[[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]]用一个贝叶斯分层 2PL IRT 模型（带前测锚定题，把 1,686 名学生放在共同 θ 量表上）显示，AI 生成的题目在难度和区分度上与专家编写的标准化考题相当——这是 IRT 作为[[automated-question-generation]]验证骨干的大规模演示。
- **测验信息把精度局部化。** 一份 20 题的 GenAI 素养测验以 2PL 模型验证（RMSEA = 0.03，CFI = 0.97），其信息函数峰值在 θ = −0.8，使它对低到中等素养学习者最精确，而非在全量表上均匀（[[jin-glat-genai-literacy-assessment|Jin 等（2025）]]）。
- **用拟合人统计量区分人类与 GenAI 作答：**[[irt-human-genai-mcq-responses|Strugatski 与 Alexandron（2026）]]在 IRT 内应用拟合人统计量（PFS）来区分选择题评估中的人类与[[generative-ai]]作答。PFS 在两个真实情境（一场[[chemistry-education|化学]]测试和一场全国统考）中把 GenAI 作答标记为"异常"应答者，显示不同[[conversational-ai|聊天机器人]]产生不同的作答模式（一组异质的"智能"），并揭示较新的 GenAI 版本变得更像人——这使 IRT 成为高风险测试中[[academic-integrity|诚信]]筛查的稳健框架。
- **同样的项目对 LLM 可能不测同一个潜在构念。**[[assessment-latent-structure-human-llm-2026|Strugatski、Zeinfeld 与 Alexandron（2026）]]用探索性因子分析和一致性匹配，比较了两个工具上人类与 LLM 的因子结构；LLM–人类相似度可靠地低于人类–人类基线，所以在人类上拟合的 IRT 参数不会自动迁移。
- **对照 Rasch IRT 参数的 LLM 难度估计：**[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]评估 GPT-4o 能否估计在 Rasch IRT 模型下校准的 K-5 数学与阅读评估项目（N = 5170）的难度。零样本直接估计与真实 Rasch 难度呈中到强相关（数学 r = 0.83，阅读 r = 0.81），但在各年级之间不均衡，且在 K 和 1 年级往往不比年级均值哑回归更好，可能因为低年级项目难度的全距受限。一种基于特征的策略——把 LLM 提取的认知与语言特征喂给树模型——优于直接估计（相关高达 r = 0.87），年级水平和词数是首要预测变量。该研究强调，LLM 难度估计必须对照经验拟合的 IRT 参数验证，且结构化特征提取能在整体性零样本判断力有不逮之处锐化预测。
- **解释难度，而非预测难度。**[[explaining-question-difficulty-natural-language-2026|Cui 等（2026）]]对 GSM8K（1,319 题）、BBH-structured（1,396）和 WinoGrande（1,267）的 LLM 作答记录拟合 1PL Rasch 模型，其中 GSM8K 和 WinoGrande 用 5,000 个模型、BBH-structured 用 3,811 个。然后他们提示一个 LLM 提出"为什么一题比另一题难"的自然语言假设，并用留出题上的 L1 正则化回归来筛选。单用于未见题时，被选中的假设在 GSM8K 上达到 R² = 0.373、BBH-structured 上 0.580、WinoGrande 上 0.090，是 GSM8K 和 WinoGrande 上被比较方法中最好的、BBH-structured 上第二好，后者微调的 RoBERTa-base 达到 0.646。作为额外特征，它们给 RoBERTa-base 在 GSM8K 上加 +0.11（0.362 到 0.468），给两个冻结嵌入模型各加 +0.19 和 +0.18。一个因果探针把每个数据集的 50 道测试题朝某个假设的方向或反向编辑：增难编辑在 GSM8K 和 BBH-structured 上把平均准确率分别降低 15.27 和 23.88 个百分点，减难编辑分别提高 32.18 和 28.52。这里的难度是从模型作答而非人类受试估计的，所以这是一个 LLM 评价与心理测量结果。
- **模拟受试者能找回对刺激作回归所不能的东西：**一个微调的多模态 LLM 跨能力水平复现学生的选项选择概率，在留出难度上逼近 r = 0.85，高于 MathBERT（0.68）和 MetaMath（0.75）回归基线，并找回猜测参数 c 于 0.48，而区分度 a 仍弱（0.31）（[[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]）。
- **命题缺陷作为 IRT 参数的部署前筛查：**[[item-writing-flaws-irt-difficulty-2026|Schmucker 与 Moore（2026）]]检验命题缺陷（IWF）量规——一种不需要学生数据的、领域通用的文本化评价——能否预测经验估计的 IRT 难度和区分度。在[[stem-education|STEM]]（物理科学、[[math-education|数学]]、生命/地球科学）的**7,126 道选择题**上，他们用自动的、LLM 辅助的编码显示，IWF 量规对经验 IRT 参数具有预测效度，提供了一种可规模化的部署前筛查，补充或部分替代资源密集的试点测试。
- **选择性 AI 评分中的 IRT 风险过滤：**[[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]]对 AI 评分的手写化学数据拟合双参数 logistic IRT 模型，并把接受一个 AI 判断的"风险"定义为 AI 归一化分数与 IRT 期望得分概率之间的绝对偏差（Risk = |s−p|）；只接受落在这个贝叶斯期望所选容差内的项目，就把"令人意外"的 AI 分数标记为[[human-in-the-loop-ai|人工复核]]，把 IRT 从一个纯分数聚合工具变成[[automated-assessment]]的操作性接受/暂缓机制——它达到与更简单部分学分阈值类似的人工评分一致性，却用更少的人工工作量，尽管其逻辑对非技术受众不够透明。
- **IRT 作为诊断模型内部的校准层：**PLCD 在练习级作答之上加了一个受 IRT 启发的猜测—失误头，改善的是概率质量而非准确率——XES3G5M 上期望校准误差从 0.071 降到 0.037——使 IRT 成为对作答噪声的内部校正，而不只是一个评分模型（[[process-grounded-language-cognitive-diagnosis-2026|Liu 等（2026）]]）。
- **为持续演化的题库做分治校准：**[[bayesian-consensus-irt-item-banks-2026|Jewsbury 等（2026）]]把 IRT 重校准当作一个规模问题，而非拟合问题。当基于 AI 的命题和基于特征的参数预测使题库更大、更稀疏且持续更新时，每次更新都重新拟合全部作答历史的成本稳步上升；他们的*共识校准*改为每个时期只校准一次，并把新时期与已算出的较早后验合并。两个特征把它与现有 IRT 分治工作区分开：各时期不共享潜在度量，所以每个时期都通过一个稳健的 Haebara 准则链接到参照度量，而该准则*对每一个后验抽样分别求解*（把链接误差带进被链接的后验）；且每个时期都是自己的分层拟合、贡献一个估计出的先验，所以后验的朴素乘积必须把这个先验除掉、重新装入共识先验——在先验固定时退化为贝叶斯委员会机器规则。对照四个季度时期的 Duolingo 英语测验的合并基准，后验均值在 r = .998（难度）和 .991（对数区分度）上一致，后验 SD 在 r = .970 和 .920，留下轻微的欠分散（SD 比 0.91–0.98），在最低的每时期曝光三分位上最大。这就是为 AI 生成题库所造成的交付条件而重新工程化的 IRT 校准。
- **IRT 极少作为工具验证的锚：**一项对教师 AI 素养工具的评价量化的是 IRT 的缺席而非其使用。[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal、Mohd Matore 与 Maat（2026）]]以改编自 COSMIN 和 Terwee 等（2007）的决策矩阵评定 33 种工具；结构效度很强，24 种（72.7%）通过 CFA、PLS-SEM 或 IRT 建模达到 A 级，却没有一种以 IRT 或 Rasch 作为其首要证据，只有五种工具（15.2%）报告了测量不变性或差异项目功能证据。作者主张在自我评价之外配合 IRT 和表现任务，以把已验证的能力与报告的信心区分开。
- **一个替代联想性 IRT 的因果方案。**[[causal-modeling-competency-assessment-2026|Mangili 等（2026）]]论证 IRT 和贝叶斯网络学习者模型无法表达干预或反事实，转而从专家那里引出结构方程；在一个 109 名学生的自适应测试题组上，引出的模型预测性略差（−287 对 −277 检验对数似然），却支持关于求助的反事实查询。

### 关联

IRT 是[[educational-measurement]]和[[assessment-validity]]的基石，支撑[[adaptive-learning]]（自适应选题）和[[student-modeling]]，并与[[psychometrically-aware-ai]]（与测量理论对齐的 AI 评价）和[[knowledge-tracing]]相连。它在[[llm-difficulty-calibration-programming-exams-2026|LLM 难度校准]]的编程评估中有所呈现。

## 关联概念

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## 关联文章
- [[explaining-question-difficulty-natural-language-2026]] — 通过 IRT 与因果编辑用自然语言解释 LLM 题目难度（Cui 等 2026）
- [[item-writing-flaws-irt-difficulty-2026]] — 命题缺陷对 IRT 难度与区分度的影响（Schmucker & Moore 2026）
- [[causal-modeling-competency-assessment-2026]] — 学生能力评估中支持性干预的因果建模
- [[assessment-latent-structure-human-llm-2026]] — 评价工具对人类和 LLM 测的是同一个东西吗？（Strugatski 等 2026）
- [[assessing-quality-ai-generated-exams-field-2025]] — AI 生成考题的大规模 IRT 现场验证
- [[jin-glat-genai-literacy-assessment]] — GLAT 使用 IRT/2PL 验证（Jin 等 2025）
- [[llm-item-difficulty-prediction]] — LLM 的项目难度预测
- [[llm-psychometric-calibration-cdp]] — 让 LLM 评价与心理测量校准对齐
- [[llm-difficulty-calibration-programming-exams-2026]] — 编程考试中的 LLM 难度校准
- [[multimodal-item-parameter-estimation-2026]] — 多模态项目参数估计
- [[huang-interpretable-knowledge-tracing-2026]] — 可解释的知识追踪
- [[irt-human-genai-mcq-responses]] — 用 IRT 区分人类与 GenAI 选择题作答
- [[razavi-powers-item-difficulty-llm-2026]] — 用 LLM 和树模型估计项目难度
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — 超越 ID 嵌入：面向认知诊断的过程落地语言建模
- [[bayesian-consensus-irt-item-banks-2026]] — 持续演化 IRT 题库的贝叶斯共识校准（Jewsbury 等 2026）
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 现场审计显示教师 AI 素养工具极少以 IRT/Rasch 作为首要验证证据
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench：AI 与人类辅导产生同等的 GRE 学习增益
