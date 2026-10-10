---
title: 自动作文评分
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:11-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/automated-essay-scoring
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

> **自动作文评分（Automated Essay Scoring, AES）** —— 用 AI 评估并给作文打分，涵盖传统的统计方法、微调过的语言模型，以及日益易得的基于[[llm]]的提示策略。本知识库中的 AES[[research-methods-aied|研究]]涵盖评分准确性、公平性与偏倚、心理测量效度，以及对教育工作者的实际[[accessibility]]可用性。

## 值得思考的问题

- 自动作文评分已从传统统计模型走向基于 LLM 的提示。本页的一个关键张力在于准确性与可及性之间——微调模型评得好，但对多数教育工作者并不实用。在你自己的情境中，你会优先哪一个，为什么？
- 一个重大发现是，仅把范文写进提示词，就能让 LLM 与人的一致性接近人与人之间的信度——而且一个更便宜的模型可以匹敌更贵的模型。这说明了 AES 质量中有多少取决于模型本身、多少取决于提示方式？
- 本页警告，AI 评分可能系统性地低估来自语言多元背景的学生。在读之前，如果你看到 AI 给一位非母语者的作文打了低分，你会认为那是"偏倚问题"还是只是"分数"？什么会改变你的反应？
- 一种自参照方法通过把 L2 写作者与其自身先前作品相比较（而非与母语者常模相比较）来评估他们。比较基准的选择如何改变一个分数的含义——它又可能对哪些学生更公平？
- 当 AES 用于反馈而非评分时，它与形成性评价相交叠。机器对作文的反馈在什么时候对一位成长中的写作者真正有用，又在什么时候可能压平人类编辑会给出的那种[[qualitative-research|质性]]反馈？

## 引言

自动作文评分在教育技术中有很长的历史，从早期的统计模型到现代的基于 LLM 的方法——后者无需大型预先评分的语料即可对作文作整体评估。AES 研究中的关键张力在于准确性与可及性之间——尽管微调模型取得了很强的结果，它们资源密集，对多数教育工作者并不实用。

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang 等]]** 的 RACES 用奖励对齐让 LLM 作文评分既准确又一致，回应了 AES 效度上的一个核心关切。

## 关键研究主题

**基于提示的 AES** 已成为最可及的方法。**[[choi-anchor-aes-prompting-2025|Choi 等的范文研究]]**表明，在提示中纳入范文可使 LLM 与人的一致性接近人与人之间的信度，其中 GPT-4o mini 以更低的成本取得了与 GPT-4o 可相比的结果。这与更广泛的[[prompt-engineering]]研究相连，并使 AES 对[[teacher-role|教师]]使用变得可行。

**心理测量与特质层面评分**超越了整体分数。**[[psyscore-essay-scoring-zpd-feedback|PsyScore]]**提供了一个心理测量感知的框架，用于基于[[sociocultural-learning|ZPD]]反馈的特质自适应评分。**[[icle-plus-plus-essay-scoring|ICLE++]]**为整体作文评分建模细粒度特质，推进了自动化评估的精度。
- **维度层面的特质评分受每个维度背后数据的限制。** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi 等（2026）]]在 106 篇印度尼西亚十一年级物理作文（83 篇训练、23 篇测试，三位教师评分者在每个维度上以 kappa 0.78–0.84 达成一致）上，为 Ennis 的 FRISCO 批判性思维框架的每个维度训练了一个分类器。一致性集中在表达而非推理上：Clarity 的二次加权 kappa 达到 0.763，Situation 为 0.728，而 Focus 只有 0.374、Reason 0.332、Inference 0.227。等级信号是被制造出来的而非观察到的——合成的一级作文（模板生成、压缩至原长度的 20–40%、关键词移除）加上 LLM 改写把 Focus 从 0.028 的基线拉高了 +0.346 kappa——而一种配置达到了 0.652 的准确率，kappa 却接近零甚至为负，因此准确率在序数 AES 中不是可用的选择标准。

**偏倚与公平**是一个关键关切。**[[ai-scoring-language-bias-physics|Feser 与 Tschisgale]]**发现 AI 评分系统性地低估来自语言多元背景的学生，凸显了在 AES 部署中[[bias-mitigation]]与[[equity-in-ai-education]]考量的必要性。

**与人类评分者的分歧是系统性的，而非随机的。** 开箱即用的 GPT 与 Llama 模型与人类分数只有很弱的一致性（QWK ≈ 0.17–0.28，而两位人类评分者之间为 0.72），且偏倚方向依赖于质量——对短小、未充分展开的作文偏高，对长而强、仅带轻微表面错误的作文偏低（[[llms-do-not-grade-essays-like-humans-2026|Mathew 等（2026）]]）。

**L2 与自参照评估**探索非母语写作情境。**[[self-referential-l2-writing-llm-assessment|基于档案的 L2 评估]]**采用一种自参照方法，把学生作文与其自身先前作品比较，而非与母语者常模比较。

**[[explainable-ai|可解释性]]与特征加权**打开了 LLM 实际如何打分的黑箱。**[[llm-essay-scoring-feature-weighting-2026|Wang 等（2026）]]**在非母语英语作文上比较了三个 LLM（Qwen、GPT、Gemini）与人类评分者在十六个文本特征上的表现，发现整体上高度对齐但加权各有侧重：LLM 强调语法准确性、词汇复杂性与句法复杂度，而人类评分者优先考虑内容完整性与视觉呈现。关键的是，LLM 的权重会随熟练水平而偏移——对低熟练学生更重语言错误，对高熟练学生越来越奖励语言复杂性——而人类评分者维持着更稳定的框架。**[[llm-essay-assessment-framework-reliability-2026|Liu、Ye 与 Yan（2026）]]**用五模型评估框架（GPT-4.1、Llama 4 Maverick、Gemini 2.5 Flash、Claude Sonnet 4、DeepSeek R1）在 60 篇长作文上扩展了这一点，并用因果发现揭示出不同的评价启发法：多数模型优先考虑词汇精度与流畅性，另一些强调句法复杂度或跨领域整合，还有一些表现出不一致、分数压缩或系统性低估。这些研究共同确立了：AES 效度不仅取决于总体一致性，还取决于模型*如何*加权特征、以及该加权在不同学习者子组间是否稳定——这直接关系到[[assessment-validity]]与[[bias-mitigation]]的审计。

**题型边界与作文评分的限度。** 在一次混合形式的大学考试中，[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat、Das、Bhaumik 与 Thambi（2026）]]发现 ChatGPT-5 在客观题上与教师的一致性为显著到近乎完美（CCC 0.935–1.000），但在开放式回答上急剧下降——简答题接近零甚至为负，问答题也只有 0.341–0.854——而且结构化评分量表并未稳定地改善作文一致性。这界定了 AES 效度的边界：模型的流畅性在界定良好的题目上有帮助，却不会延续到整体作文评分上，在那里对部分得分回答的情境化解读仍然偏向[[human-in-the-loop-ai|人类判断]]。

**诊断一致性中的问题类型边界。** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao 与 Fan（2026）]]用 DeepSeek-R1 在修改前标注具体的写作问题，并在三个循环中将其标注与教师诊断相比较（平均 F1 = 0.768，SD = 0.037）。一致性在局部线索型问题上最高，如词汇选词（F1 = 0.824），在问题取决于主张—证据关系时最低（来源使用与证据，0.579），因此在诊断角色中的一致性取决于问题类型，而不只是模型或提示。

**偏斜的量表分布会让聚合评分指标误导人。** 对量表维度的自动评估可能是一个标签分布失衡的分类任务，而非连续分数：在 1,954 篇匈牙利学生作文上标注 0-3 级的反思水平时，68% 的作文处于 3 级，1.8% 处于 0 级，而最好的浅层配置（配合 Qwen3 嵌入的 SMOTEBoost）在准确率、F1 与 ROC-AUC 上的平均总分为 0.7176，最好的微调 Transformer 为 0.6872——然而一种 RidgeClassifier 配置在准确率仅 0.5162 的情况下 ROC-AUC 达到 0.7131，类别平衡又拉低了每一项指标（准确率从无平衡时的 0.6672 降到有平衡时的 0.6408），因此作者把模型选择读作"哪个指标重要"的问题，Transformer 的地位是靠少数类敏感性而非聚合一致性赢得的（[[reflection-level-classification-hungarian-essays-2026|Csibi 等，2026]]）。

**高风险部署的证据。** 来自真实高风险部署的现场证据（[[human-in-the-loop-ai-scoring-national-assessment-2026|乌拉圭的 *Acredita EB*，2024–2025；Curi 等]]）显示，经过提示工程的 GPT-5 在跨 15 个题目的分析式西班牙语量表上与训练有素的人类评分者达成 60–80% 的一致，比人类评分者间一致性低约五个百分点，且从未低过 15 个百分点，几乎所有题目的逐次运行一致性都高于 90%。词汇、句法与拼写是最弱的维度，而拼写题不得不交给确定性的语法检查器（LanguageTool，准确率 68%，一致性 100%），因为词元层面的正字法是模型最不稳定的地方。为某一版考试构建的提示只需做话题特定的编辑即可迁移到下一版，而 AI 系统性地比人类更严格——偏向低评而非高评。对 AES 设计而言，其教训是：即便在国家级考试中，基于提示的评分也能接近人类一致性，而其剩余的弱点位于低层次语言惯例的层面，而非整体[[writing-education|写作]]质量。

词元级置信度、概率加权评分与集成各自都改善了发散思维评分上的一致性——叠加的技术达到 r = 0.846（RMSE = 0.4848），而只把最不自信的 20% 回答路由给人工复核，使人工工作量减少了约 80%（[[know-when-to-trust-ai-scoring-reliability-2026|Organisciak 与 Acar（2026）]]）。

**人类的[[benchmark]]，以及它能与不能授权什么。** [[opraise-automated-marking-ai-assessment-2026|OpRaise 研究]]是本知识库对"LLM 评分是否已可常规使用"这一问题的最强检验，而它的答案取决于基准而非模型。它比较了三个前沿系统（Claude Opus 4.6、GPT-5.4、Gemini 3 Flash），各自在 27 种跨越量表特异性、校准与评分策略的提示配置下，对照三所英国[[higher-ed|大学]]125 名学生 761 篇真实心理学作文的经协调评分。人类评分被采纳为真值，因为学术判断是社会公认的标准，而作者指出人类评分者彼此只中度一致——这界定了可以合理地要求 AI 与人的一致性达到多强。以该基准衡量，在英国学位等级上的一致性按机构从 **35% 到 65%** 不等（剑桥 63%，诺丁汉 53%，曼彻斯特都会大学 35%），且无法在机构之间迁移，因此该报告的核心建议是在机构自己的[[assessment]]材料上做本地验证。有两点发现超越了此语料。第一，信度与一致性彼此分离：每个模型重新评分几乎完全相同（ICC 1.00、1.00、0.97），模型之间的一致性比它们与人类的一致性更紧密（三模型 ICC 0.91），然而三者仅在 **56%** 的提交上就学位等级达成一致——自我一致并非效度。第二，AI 评分向量表中部压缩（压缩分数为 0.47–0.82，AI 与人类平均一致的交点位于 50 多分到 60 分出头的区间），使 AI 恰恰在区分一等与二等一级、及格与不及格的分数边界处最不准确。词汇范围、连接词、句子复杂度与文本长度以小而显著的效应预测 AI 评分，而它们与人评分的关系大体上可忽略——这直接证明了 [[ai-scoring-language-bias-physics|语言偏见]] 的担忧，而且所测试的任何提示策略都没有消除它

**作为训练信号而非裁判的 AES。** 评分模型通常被当作评估者来研究，而 SWIM 把一个评分模型当作奖励函数使用：[[swim-student-writing-simulation-2026|Do、Kontak 与 Sachan（2026）]]冻结一个多特质 AES 验证器，用它为生成的学生作文打分，把预测出的特质画像转化为逐篇作文的稠密奖励（画像与目标画像之间的平均特质归一化距离）供 GRPO 使用，而刻意不用二次加权 Kappa 指标本身，因为 QWK 定义在一批目标—预测对之上、并非逐样本信号，而精确匹配奖励在多特质情境下又过于稀疏。增益针对一个 DeBERTa 评分器与一个策略从未训练过的、仅用于评估的验证器做了复核（0.598 对 SFT 的 0.479，以及 0.647 对 0.501），正是这一复核把真实的能力控制与对奖励模型的适应区分开来。对 AES 研究而言，这是第二项效度要求：被用作训练目标的评分器会被拿来优化，因此它自身的特质权重与语言偏倚会传播到生成器学到的一切之中——本页他处记载的那些相同的特征加权不对称（模型比人类评分者更重语法准确性、词汇复杂性与句法复杂度），如今塑造的是训练而不仅是评分。
**评分与反馈需要不同的方法，因此系统应当把它们分开。** [[wraft-automated-writing-evaluation-argumentative-2026|Labib 等（2026）]]把一个 TOEFL 论辩作文系统建为三个模块——评分、针对语法与写作规范的表层反馈、针对组织结构、连贯性与论证的深层反馈——而非一个模型做三份工作，并发现在一个模块上胜出的方法在另一个模块上失利：在专有的 480 篇基准评分作文集中对其中的 120 篇对 GPT-4o 做监督微调、在余下的 360 篇上测试，在 0-5 量表上达到了 0.84 的二次加权 kappa 与 0.44 的 RMSE，优于 Wang 与 Gayed（2024）的基线（QWK 0.78，RMSE 0.57），然而同样的微调对反馈模块产出了不可用的输出，在那里生成教师认可的评语靠的是对 Claude 3.7 的直接提示。

### 关联概念

AES 处于[[automated-assessment]]、[[writing-education]]与[[generative-ai]]的交叉点。当它用于反馈而非评分时，它与[[formative-assessment]]相连；当它被整合进迭代式写作过程时，它与[[feedback|反馈循环]]相连；当教育者理解并校准 AES 工具时，它与[[ai-literacy]]相连。[[assessment-validity]]与[[educational-measurement]]这两个概念对确保 AES 分数有意义且公平至关重要。
- **一致性、误差，以及混合评分器增添了甚么。** 在一个小型的开放式营销写作语料上，LLM 在与人类评分者的绝对一致性上胜过了确定性规则与等权混合方法（ICC(2,1) 为 .435 对 .266 与 .091），混合方法显著劣于单独的 LLM，而分数离散度与一篇近乎空的回答显示出这类估计在多大程度上依赖于语料构成（[[automated-scoring-marketing-posts-agreement-2026]]）。

开放系统也是这幅图景的一部分：AiAWE 用 LoRA 适配的 Gemma-3-27B-it 为论辩作文评分，达到 QWK 0.828，在 360 篇评估作文中有 90.56% 与人类分数的差距在 ±0.5 以内——并报告模型规模在 LoRA 适配下并不能可靠地预测下游表现（[[aiawe-automated-writing-evaluation]]）。

## 关联概念

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]
## 关联文章
- [[reflection-level-classification-hungarian-essays-2026]] — 匈牙利学生作文中的反思水平自动分类
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT：面向论辩作文的模块化自动写作评估系统
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise 报告：对三所英国大学 761 篇大学作文的 AI 评分
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES：用 LLM 进行奖励对齐的一致性作文评分
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM 不像人类那样给作文评分（Mathew 等 2026）
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — 从自动评分到学习诊断：AI 支持英语写作形成性评价的机制研究
- [[llm-essay-scoring-feature-weighting-2026]] — 基于 LLM 的作文评分中的特征加权模式（Wang 等 2026）
- [[llm-essay-assessment-framework-reliability-2026]] — 评估 LLM 用于作文评估的框架（Liu、Ye 与 Yan 2026）
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust：自置信度、加权概率评分与集成改善 LLM 评分一致性
- [[swim-student-writing-simulation-2026]] — 一个被冻结的 AES 验证器用作写作生成器的稠密训练奖励
