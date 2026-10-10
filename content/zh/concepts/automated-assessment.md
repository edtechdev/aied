---
title: 自动化评估
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:30-04:00"
type: concept
connected_faqs: [ai-save-instructor-time, ai-feedback-at-scale]
foundations: [teacher-role]
technology: [llm]
assessment: [assessment, assessment-validity, automated-assessment, automated-essay-scoring, formative-assessment]
ethics: [bias-mitigation]
audience: [instructors]
confidence: high
translation_of: concepts/automated-assessment
source_updated: "2026-10-08T09:45:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **自动化评估**——利用人工智能评价学生作业的实践，从[[formative-assessment|形成性测验]]到高风险考试。自动化评估横跨多种模态——选择题、简答、作文、代码以及基于表现的评价——其范围从直接的自动评分，延伸到在给出分数的同时报告校准后的不确定性的置信感知系统。

## 值得思考的问题

- 自动化评估的范围从选择题评分一直延伸到作文、代码和基于表现的评价。你预期人工智能批改一份选择题测验与批改一篇自由形式的作文，在可靠性上最大的差别会是什么——原因又是什么？
- 这里的一个核心设计理念是“置信感知”：人工智能评分器报告自己有多确定，把低置信度的个案标记出来交由人工复核，而不是给出一个毫无限定的单一分数。如果一个分数附带“我对这一点有 70% 的把握”，它会如何改变你使用或信任这个自动分数的方式？
- 研究表明，自动评分可能系统性地使非母语者处于不利地位——人工智能评的是语言，而不是理解。为什么自动评分器即使总体上与人类评分者达成很高的一致性，仍可能特别容易出现这一类不公平？
- 有一项研究发现，验证方式本身会抬高所报告的表现：一种朴素的交叉验证方法报告了接近完美的结果，而在更严格的、独立于试次的验证下，结果急剧下降。这一警示说明，你在解读任何“某个人工智能评估系统有效”的说法时应当注意什么？
- 本页认为，校准后的置信度能够支撑人在回路的工作流、支持信任校准，并强化测量效度。如果一个自动化系统把它最不确定的个案交给人工复核者，在信任这种分流之前，你想先了解这些个案是如何被挑选出来的？
- 自动评分被描述为最成熟的 AIED 应用之一，然而没有有用反馈的评分教育价值有限。如果只专注于产出分数而非可用的反馈，这会如何改变学生从一次人工智能评分的评估中真正得到的东西？

## 引言

### 评估模态

- **简答与作文：**自动评分、[[automated-essay-scoring]]，以及[[cong-confidence-asag-2026|置信感知方法]]负责自由文本评价。
- **代码评估：**[[automated-grading-linux-bash-examinations-large-language-models|Bash 评分]]与[[code-review-genai-cs1|代码评审]]展示了编程评估的做法。
- **形成性评估：**[[automated-formative-assessments-a-level-sciences|A-level 理科自动化]]与[[cotal-formative-assessment-scoring-2026|CoTAL]]侧重于形成性用途，而非[[summative-assessment|终结性]]用途。
- **规模化的人工智能生成评估：**[[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]]表明，经过迭代精炼、为课程量身定制的人工智能生成考题，在[[item-response-theory|IRT]]所测得的质量上与专家编写的标准化考题相当（难度 β̄ = −0.45 对 0.35；区分度 ᾱ = 1.3 对 1.2），覆盖 91 个大学班级——这是自动化评估可以从评分走向完整[[automated-question-generation|题目生成]]的证据。
- **表现性评估：**[[engagement-assessment-video|视频参与度评估]]与[[confidence-aware-student-drawing-assessment|绘图评估]]把自动化延伸到文本之外。
- **多模态考试数据与评分量表：**[[multimodal-exam-obe-rubrics-2026|一套配有专家设计的成果导向教育（Outcome-Based Education）量表的多模态考试答卷数据集]]为跨多种作答模态的标准层面自动化评估提供了基准资源，支持对多模态学生作业开展[[benchmark|基准测试]]与[[educational-measurement|测量]]研究。
- **神经生理学评估：**[[eeg-familiarity-automated-assessment-2026|Nanayakkara 与 Halloluwa（2026）]]以脑电（EEG）预测熟悉度（面孔对数学方程式）为任务，对机器学习／深度学习模型进行基准测试，作为走向对知识获得直接、客观测量的第一步。关键在于，他们证明标准的分层交叉验证会因时间泄漏而抬高表现（最高 F1 达 0.9853），而独立于试次的 Group K-Fold 验证把峰值降到 0.6038 F1——这是对一切自动化评估基准测试的警示性[[research-methods-aied|方法论]]教训。

### 自动评分

自动评分是最成熟、部署最广的[[ai-education|教育人工智能]]应用之一——即评价学生作业的[[ai-technologies|人工智能系统]]，从选择题评分到作文评估与代码评审。其评分模态包括：

- **学生把反馈的效用与评价的权威分开：**[[student-perspectives-ai-writing-grading-2026|AlGhamdi（2026）]]记录了一个案例：人工智能分数计入成绩，而且学生知道这一点——13 名计算机专业学生的扫描手写作业由 ChatGPT 依据一份涵盖清晰度、组织性、句子正确性与简洁性的量表进行评估。每位参与者都认为反馈有用，但所有人都把这种效用与权威分开，有几人还拒绝了自动评分那种单向、非对话的性质——“ChatGPT 不像人。你跟人说话，可以解释各种借口……我喜欢让正常老师来批改我的作业。”该研究把自动评价定位为对表层修改可接受，但不宜作为最终评分者，其条件性信任由教师的监督来中介。
- **简答评分：**[[cong-confidence-asag-2026|置信感知 ASAG]]评价自由文本回答，置信度校准至关重要——系统必须知道自己何时评分可靠。一项对[[science-education|科学]]学科中简答自动评分（2017 年至 2024 年初）的范围综述记录了该领域的历史：[[auto-marking-short-answer-science-2026|Morley 等]]发现 BERT 系列模型（base、RoBERTa、DistilBERT、SciBERT）占据主导——21 项研究中有 20 项使用，2021 年达到顶峰——此后从大约 2022 年起，人们通过[[prompt-engineering]]而非微调采用基于 GPT 的方法。用领域数据（教科书、[[feedback|量表]]、进一步预训练）增强的模型，始终优于没有这些数据的模型，然而很少有模型能以人类可理解的方式说明给分的理由，跨人群与语言群体的[[bias-mitigation|偏差]]也很少被检验——作者由此主张自动评分器应当*辅助*而非取代[[teacher-role|人类阅卷者]]。一项遵循 PRISMA 的[[meta-analysis-systematic-review|系统综述]]覆盖 42 项实证评分与反馈研究（2023–2025），把这一谨慎推广到整个领域：LLM 在封闭式任务和简答题上与人类评分者相当，但在需要深入分析或[[creativity|创造性]]的复杂、开放式或主观作业上无法完全取代人类判断，而最高的评分有效性出现在把人工智能驱动的评分与教师监督和核验相结合的混合系统中（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。
- **作文评分：**[[automated-essay-scoring]]系统如[[choi-anchor-aes-prompting-2025|锚点式 AES]]，使用[[prompt-engineering|提示策略]]逼近人类水平的信度。[[aiawe-automated-writing-evaluation|AIAWE]]把自动评价扩展到更广泛的写作评估。
- **代码评审：**[[automated-grading-linux-bash-examinations-large-language-models|Linux Bash 评分]]与[[code-review-genai-cs1|CS1 代码评审]]展示了在[[cs-education|计算教育]]中的自动评估。
- **一个提示人格可以让评分器崩溃，而微调可以修复它：**[[llm-graders-computer-science-exams-2026|Habibullah 等（2026）]]在 171 种配置下为一场实操计算机视觉考试（570 名双评学生）评分，又在另外 162 种配置下为第二场[[machine-learning|机器学习]]考试（1,038 名学生）评分。一段简短的“严格评分者”前言把 17 个开放权重模型中的 14 个推出了可评分区间（MAE ≥ 8），其中三个完全停止评分；损害可追溯到两句拒绝给分的句子，而非语气或模型规模，且其方向依考试而异——在第二场考试上改善了七个模型。对约 3,900 条汇总的已评分样例做轻量 LoRA 微调，使五个小型[[open-source|开放模型]]达到或超过人类评分者，可见这种脆弱性是提示的产物，而非能力的天花板。
- **形成性整合：**[[automated-formative-assessments-a-level-sciences|A-level 理科自动化]]与[[cotal-formative-assessment-scoring-2026|CoTAL]]展示了自动评分如何融入[[formative-assessment]]循环。
- **反馈类型的覆盖面并不等于与教师的一致。**[[llm-feedback-focus-adaptivity-student-writing-2026|Almousa 等（2026）]]把三门大学写作课程的段落级反馈标注为七种焦点类型；多数模型几乎会输出每一种类型，但它们的分布与教师参照系存在分歧，其中经过教育调优的 LearnLM 最接近（Jensen–Shannon 散度 0.1344），Mistral-7B 最远（0.2695）。用类别定义或示例进行提示，反而加大了多数模型的分歧。
- **偏差与公平：**[[ai-scoring-language-bias-physics|物理评分中的语言偏差]]记录了自动评分如何使非母语者处于不利地位——这与[[bias-mitigation]]和[[equity-in-ai-education|教育中的人工智能公平]]相关联。
- **为开放式评分对生成式人工智能模型做基准测试：**[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova、Benko 与 Drlik（2025）]]把 11 个生成式人工智能与句子嵌入模型，与两位专家人类评分者在 24 道软件工程问题的 1,885 个开放式回答上做了对照。只有 GPTo1 达到几乎完美的一致性（Fleiss' Kappa 0.82，各分数档的假阳性和假阴性都很低），Claude3 与 PaLM2 紧随其后；上下文敏感的[[generative-ai|生成式人工智能]]模型稳健地处理了简短、表述多样的学生回答，而基于参照的嵌入模型（如 BERT 的 345 个假阳性）则系统性地惩罚那些正确但措辞不同的回答——这说明模型选择，而不只是评分形式，决定了自由文本[[assessment|开放式评估]]的可靠性。
- **提示示例决定评分一致性：**[[automated-constructive-assessment-hdr-llm-2026|Takahashi 等（2026）]]自动化了层级式诊断推理（HDR）——一种学习者在一则短案例中发现并解释故意植入错误的应用能力任务。团队使用未经微调的 GPT-4o 生成新问题并为学生的描述评分：生成的问题与人工编写的问题具有相同的内部一致性（Cronbach's α = 0.78），在 100 名参与者中没有显著的分数分布差异，且该形式与阅读理解对照的相关性保持在低水平（α = 0.36 与 0.41）。评分准确性取决于提示而非模型——没有解题示例时 Q2 的精确率降到 0.42，而加入人工评分的正误示例后，每一道题的一致性都提升到 98% 或更高（Q1 与 Q2 达 100%）——相较之下，117 个回答的专家评分人力成本为 138 分钟，另加 30 分钟达成共识。

模型的推理模式是第二个配置杠杆：在 32 份匿名的公共卫生硕士考试答卷上，同一个 ChatGPT 的加权 kappa 从快速模式的 0.269 变为思考模式的 0.718，而 Kimi 为 0.571（[[llm-grading-assistants-public-health-2026|Brevik 等（2026）]]）。

- **[[agentic-ai|多智能体]]对教师开放式回答的编码，可靠性由框架而非模型承载：**[[llm-automated-coding-teacher-pck-2026|Copur-Gencturk 等（2026）]]把自动化评估从学生作业延伸到对教师自身内容知识（CK）与[[pedagogy|学科]]教学知识（PCK）的编码，追问人工智能能否复现 268 名美国[[k-12|中学]]数学教师关于比与比例关系的书面回答所受的人工编码。一个专门构建的多智能体 LLM GradeOpt 为三个由 GPT-4o 支撑的角色分工——一个应用人工编码手册的评分器、一个诊断每处与人工编码分歧的反思器，以及一个把澄清要点回写进手册的精炼器，最多迭代六轮——在 CK 上与受过训练的人类编码者高度吻合（κ = .88 与 .85），在远更依赖解释的 PCK 条目上总体达到实质性一致（κ = .68；加权 κ = .79）。两个自然语言处理基线和一个单提示的 GPT-4o 模型在 PCK 上从未超过 κ = .39 或加权 κ = .55，因此作者把可靠性归因于针对编码手册的精炼指令，而非模型规模，并建议在相邻编码层级模糊之处一律由专家复核，因为 GradeOpt 的残余错误通常是相邻代码，而不是离谱的错判。
- **混合题型考试评分（2026）：**[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat、Das、Bhaumik 与 Thambi（2026）]]把 ChatGPT-5 与医学院教师对一场 21 题药学考试（16 名学生）的人工评分做了对照，题目涵盖选择题、多选全选题、填空题、列举题、简答题与作文题。客观题型的吻合度为实质性到近乎完美（CCC 0.935–1.000——评分时提供了正确答案对此有帮助），但在列举题（0.621–0.708）、简答题（≈0 至负值）和作文题（0.341–0.854）上崩溃。提供结构化量表并未持续改善整卷一致性（无量表 71.1% 对有量表 68.2%）。该研究强化了在自动化评估中反复出现的一个方法论要点——中等的百分准确率常常与低[[assessment-validity|吻合度]]并存——因此仅看准确率会高估可靠性，它建议对复杂、主观或高风险的题目采用[[human-in-the-loop-ai|混合评分]]。

- **基于真实已评作文的跨模型族分数段校准（2026）：**[[llm-grade-bands-calibration-bias-2026|Kerwat、Donaldson 与 Mahomed（2026）]]对同一批锁定的 114 篇带机构 Merit 与 Distinction 标签的 BAWE/Coventry 作文，运行了来自四个模型族（GPT-OSS 20B、GPT-OSS 120B、Qwen 32B 与 Llama 3.1 8B，各取两个温度）的八个预先设定的配置，使用同一个允许四个分数段的提示。分数段完全一致的比例在 18.4% 到 54.4% 之间：温度 0.5 的 Llama 3.1 8B 领先（完全一致 54.4%，相差一段以内 98.2%，MAE 0.474，偏差接近零），而 GPT-OSS 120B 最弱（18.4%），且在温度 0.5 下系统性地*压分*，平均低 1.316 个分数段，其 Distinction 准确率始终落后于 Merit。由于锁定的队列中没有 Pass 或 Fail 参照，这属于 Merit–Distinction 的区分，而非整个分数段的信度，而温度也并非解药——它在一个模型族上有描述性的帮助，对另一个没有变化，并显著恶化了 GPT-OSS 20B（完全一致从 39.5% 降到 29.8%）。有两条经验超出该研究之外仍然适用：分数距离与方向性偏差能揭示一致性统计所掩盖的东西，而模型规模并不能代替[[assessment-validity|评估效度]]。

- **医学教育中开放式评分的量表工程：**[[olvet-genai-scoring-open-ended-medical-2026|Olvet 等（2026）]]追问 GPT-4 能否可靠地评阅临床前期[[medical-education|医学]]考试中的开放式问题。在两所美国学校经过三轮以人为驱动的量表精炼后，四个问题中有三个在与教师的评分者间信度上达到实质性到近乎完美的一致（分析型与整体型量表并用，加权 kappa 最高 0.94），而整体型量表的那一题停留在中等（κw = 0.54）。错误模式分析显示，分歧可追溯到双方——当学生给出多个答案或使用量表之外的词汇时 GPT-4 打分偏高，而教师常常是“过于宽松”的评分者——由此作者建议保持[[human-in-the-loop-ai|人在回路]]（例如由教师评一部分以确认准确性）。由于约 82% 的美国医学院校对临床前期作业采用通过／不通过评分，完全一致的分数在操作层面往往并不必要。
- **大规模国家写作评估中的人在回路评分（2026）：**[[human-in-the-loop-ai-scoring-national-assessment-2026|Curi 等（2026）]]把基于提示的[[llm]]评分扩展到一个真实的高风险西班牙语写作考试（每年约 5,000–6,000 份答卷），在 15 项分析型量表上达到 60–80% 的题目准确率和 90% 以上的输出一致性，并在拼写题上用一个确定性的自然语言处理检查器取代了 LLM（一致性 100%）。其独特贡献在于以决策为导向的验证，而非以模型为中心的指标：人工智能系统性压分的偏差，经[[item-response-theory|IRT]]-and-Bookmark 转换为能力水平后，在 15.3–16.5% 的个案中产生通过／不通过的出入——而这些全部由[[human-in-the-loop-ai|人在回路]]工作流转给专家复核，使需要完全人工评分的答卷至少减少一半，同时保住决策质量。这让混合评分立足于操作性评估，而非概念验证数据集。
- **分维度一致性显示评分者无法察觉变化之处：**[[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0（Hasan 等，2026）]]把一个 LLM 评判器与全部人类评分来源——标准化病人和第三方评分者——的共识做了校验，在三维度临床沟通量表上，仅凭转录文本就达到 Pearson 0.759 与 ICC(A,1) 0.746，落在单个人类评分者的分布范围之内而非之外。其最弱的维度是 Be Explicit（各候选评判器的相关性为 0.414–0.598），而这恰恰是唯一一个分数在两次接触间没有可测量变化的维度（Δ = 0.014，p = 0.1204）——因此分维度一致性可以提前指示自动评分者无法体现改进的维度。

### 置信感知评估

自动化评估内的一个核心设计目标是**置信感知**：人工智能评估系统在给出分数的同时报告校准后的不确定性，而不是发出一个毫无限定的单一预测。置信感知的评分器不仅产出一个分数或分类，还会表明自己有多确定，使低置信度的个案可以被标记出来交由人工复核，并让用户校准他们对系统的[[trust|信任]]。这是负责任的自动化评估的核心，并与[[psychometrically-aware-ai]]和[[trust-calibration]]紧密相连。

知识库的研究中，**置信度是如何建模的**：

- **简答评分的融合置信信号：**[[cong-confidence-asag-2026|Confidence-Aware ASAG]]把基于模型的置信信号（言语化的、潜在的和基于一致性的）与来自数据集的偶然不确定性（aleatoric uncertainty）融合，使用随机森林回归。
- **多模态学生作业中的置信度：**[[confidence-aware-student-drawing-assessment|学生手绘科学图形的置信感知评估]]把置信建模扩展到多模态学生回答。
- **LLM 的心理测量学校准：**[[psychometrically-aware-ai|心理测量学感知的人工智能]]推进了把[[llm]]评分与测量理论对齐的标准，其中校准与[[item-response-theory]]对齐并列为核心要求。
- **难度与作答时间校准：**[[llm-difficulty-calibration-programming-exams-2026|编程考试的难度校准]]把 LLM 重新定位为辅助证据来源，其难度估计与学生通过率相关。
- **特质自适应的作文评分：**[[psyscore-essay-scoring-zpd-feedback|PsyScore]]表明，心理测量学感知的框架可以让作文反馈适应学习者特质。
- **评价视觉学生作业：**[[diagramir-educational-math-diagram-evaluation|DiagramIR]]把 LLM 生成的数学图（TikZ）反向翻译为带有确定性检查的中间表示，在与人类评分者的一致性上胜过 LLM-as-a-Judge，并让小模型以约低 10 倍的成本匹配大模型——这是评价非文本、图示型学生产出的可扩展路径。
- **自动教师评价中受信任门控的推理：**[[li-explainable-trustworthy-llm-teacher-assessment-2025|Li、Yang 与 Fang（2025）]]把蒙特卡洛 dropout 校准直接放进评分路径，使 dropout 方差超过某个学习到的阈值时触发“拒绝并转交”的输出，而非给出分数，同时辅以对抗式去偏，把公平性差距控制在 1.8%，而基线处于 6.4–8.2% 区间，并在 TeacherEval-2023 上达到 0.032 的期望校准误差。他们的消融实验是校准论点的缩影：移除信任门控模块会把评分者间一致性降到 78.6%，而作者把人工复核工作量减少 41% 归功于这一门控——不确定性处理是架构，而不是事后报告。
- **基于量表评分的[[explainable-ai|可解释性]]：**[[shap-llm-rationales-teaching-quality-assessment|Bueno 等]]表明，模型无关的 SHAP 归因在解释基于量表的分数（如课堂反馈质量）时，比 LLM 生成的推理更忠实、更可迁移，并提出用基于删除的加跨模型检验，作为评价任何评分模型解释的原则性方式。

**校准后的置信度为何重要：**

- **促成人在回路的委派：**低置信度的个案转给人工复核者——支撑[[human-in-the-loop-ai|人在回路]]工作流，而非盲目的自动化。
- **支持信任校准：**[[trust-calibration|校准后的置信度]]让用户把信任与系统的实际可靠性相匹配，既避免过度信任，也避免信任不足。
- **改善测量效度：**置信感知评分通过把不确定性显性化，强化[[educational-measurement]]和[[assessment-validity]]。
- **公平性与可辩护性：**把低置信度个案标记出来复核，可以降低“自信地出错”的风险，尤其是对 atypical（非典型）或代表性不足的回答。

- **量表生成与教师监督下的评分流水线：**[[harmogen-ai-assessment-rubric-generation|Mendonça 等（2026）]]表明，LLM 生成的评估量表（HARMOGEN-R）在技术内容上可以与人工创建的量表在 ±5 分的等价幅度内相匹敌，结构化生成带来更高的跨模型一致性。[[ai-assisted-instructor-supervised-grading-feedback|Cruz 等（2026）]]评价了一条端到端的 GPT-4o 评分流水线，其中人工智能给出的分数在 362 份提交中的 83% 与教师相差 0.5 分以内（MAE 0.31）——最好把它理解为对教师判断的可扩展补充，而非替代。

## 质量与公平

自动化评估的质量取决于[[assessment-validity]]和[[bias-mitigation]]。[[ai-scoring-language-bias-physics|语言偏差]]研究表明，自动评分可能系统性地使某些学生群体处于不利地位。

**标准本身也会出错。**[[ai-marking-accuracy-gcse-physics-2026|Bozdag 与 Qiu（2026）]]用一个人工智能系统评阅 GCSE 物理答卷，并与官方考试委员会的分数和有经验教师的判断做比较，把与委员会的一致视为准确性的代理，而非准确性本身。

### 部署场景及其各自要求

一个机构应当要求多高的吻合度，取决于系统被允许决定什么。在一项对[[opraise-automated-marking-ai-assessment-2026|761 篇来自三所英国大学的真实本科作文]]的[[mixed-methods-research|混合方法]]研究中，三个前沿模型各配 27 种提示配置，在学位分数段上与人类评分者的吻合度只有 35–65%，而且准确率无法在机构之间迁移——因此该报告把候选用途视为不同的场景，而非一个决定。**人类阅卷的质量保证**（人工智能并行评分，显著差异触发人工复核）是最保守的一种。**评分助手**（按预测质量或不确定性对提交排序或分类、分诊复杂案例、把简短的人工批注扩展为更完整的反馈）是真正意义上的中间路线。**人工智能作为主要评分者**（辅以对抽样或分数分布的人工复核），只有在系统表现改善的前提下才被判定为可接受，且没有任何[[stakeholders|利益相关方]]群体支持让人工智能成为唯一评分者。

其中任何一种都引出三项要求。由于吻合度依模型和机构而异，验证必须本地化且持续进行——别处的头条准确率并不能证明准备就绪。由于分数向中间压缩，人工智能在分数边界以及最强和最弱的提交上最不准确，而这恰恰是评估决策后果最重的地方。并且由于人工智能分数与人工分数之间的分歧反映的是不同的判断，而非单纯的错误，差异应当触发人工解释，而不是算法覆盖，对分数的最终权威应保留在人手中。采用自动化还带来技术指标无法涵盖的[[governance]]义务：在自动化决策影响学生之处 GDPR 第 22 条下的解释权；一旦证明学业水平和语言使用会影响分数，《平等法》（Equality Act）下的责任；针对不易被发现的错误而修订的上诉程序；以及一种不可逆的风险——一旦人员编制和投资发生转移，机构可能难以继续收集回到人工阅卷所需的数据。

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos（2026）]]提供了这些要求所预设的标准，他主张让自动化站得住脚的是任务的*认识论地位*，而非技术在技术上能做什么。他的框架把人工智能限定在对事实性与程序性主张的有界核验之内——明确的记录标准、与既有知识的直接比对、不对其他有效方法做评估、单一正确答案或预先规定的可接受集合，这四项必须同时成立，含混之处默认升级给人——并让人工智能在这一层面的介入取决于五项不可协商的原则，且必须同时成立：知识库必须由评估者策展并锚定于模块材料的检索，而非模型的参数化知识；人类评估者复核每一份到达学生手中的人工智能输出，并拥有绝对否决权与不可分担的责任；反馈必须带有清晰的出处与归属；安全必须从一开始就针对对抗性使用设计，对隐藏在白色或小号字体、编码、图像或文档元数据中的指令做输入净化，因为成功绕过自动化系统会在学生群体中扩散。同一篇论文也明确指出，其各项原则尚未被检验能否同时满足，而策展、安全基础设施和高频监督所需的评估者时间，可能会转移教职工的精力而非减少它——这一警示与上文本地化验证的要求并存。

### 人工智能中介评分的安全性

一次对日常评分工作流的红队评估，展示了为对抗性使用做规划时必须覆盖的攻击面。[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]]在一篇合成作文中嵌入了五个间接提示注入，该作文此前被 Microsoft Copilot（GPT-5.2）在六次基线运行中全部判为不及格，随后在 docx、pdf 和 htm 文件中分别迭代。两种策略在没有任何可见警示的情况下改变了分数——一段位于 9 次迭代全部成功的指令操纵与角色扮演段落（100%），以及同一段隐藏在图像图层之后、17 次中有 17 次成功（94%）——而文档末尾小号白字的段落在九次迭代中全部失败，文件元数据注入则从未奏效，作者把这归因于受测版本中元数据访问被禁用。信任问题比这些攻击本身更持久：在一次 pdf 运行检测到嵌入指令并声明将只依据官方作业评分之后，重跑同一文件又在没有警示的情况下把分数抬高了六次，而一个因检测到攻击而被拦截的对话被静默禁用，而非报告给用户。作者主张，由此产生的分数在任何方向上都不携带[[assessment-validity|效度]]主张，攻击者只需对分层[[guardrails|护栏]]找到一个有效的组合，而在操纵被刻意设计为不可见期间，教师仍然是对输出的唯一真正的[[human-in-the-loop-ai|检查]]——这与上文 Venetsanos 提出的输入净化与对抗性安全义务直接相连。

### 关联

自动化评估与[[assessment-validity]]（质量保证）、[[formative-assessment]]（使用情境）、[[bias-mitigation]]和[[equity-in-ai-education|教育中的人工智能公平]]（公平）、[[teacher-role]]（自动化如何改变教师工作），以及[[ai-feedback-quality]]（没有有用反馈的评分教育价值有限）相关联。置信感知评估是[[psychometrically-aware-ai]]这一更广泛议程中的具体机制，也是[[trust-calibration|校准后的信任]]的贡献者。

- **手写[[physics-education|物理]]的大规模人工智能评分（2026）：**一个多模态模型（GPT-5.5）为一场全国物理奥林匹克理论考试、选拔营和一场大学量子力学考试评分，覆盖 10,364 个扫描页面，与官方分数的总分相关性达到 0.91–0.97，并复原了同一支奥林匹克前五名队伍。经修订的逐页、定位证据的指令改善了一致性——这表明[[multimodal|多模态人工智能]]可以在谨慎的量表与提示工程下支持高风险的终结性评分（[[ai-grading-handwritten-physics-2026]]）。

- **手写[[chemistry-education|化学]]的选择性自动化（2026）：**[[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros 与 Kortemeyer]]用一个多模态、具备推理能力的 LLM，逐页为 296 名学生的一般化学期末试卷对手写量表图像评分，总分上达到很高的重测信度（ICC(A,1) = 0.967），与助教评分在总分上高度一致（R² = 0.91）。由于题目层面的信度依题型剧烈变化——文字题和化学反应题评分可靠，而绘图与作图题比随机还差——原始一致性被判定不足以支撑高风险用途。他们通过置信过滤器（部分给分阈值、基于[[item-response-theory|IRT]]的风险阈值，以及按题型排除）把[[human-in-the-loop-ai|人工转交]]操作化，把原始人工智能分数转化为接受／转交策略，并显示假阳性（人工智能把确实错误的答案判为正确）往往无人察觉，因为学生很少对此提出异议——这是一条具体的[[psychometrically-aware-ai|心理测量学立足]]的选择性自动化路径（[[cvengros-grading-handwritten-chemistry-ai-2026]]）。

- **大学考试中的半开放手写数学（2026）：**[[gpt4-handwritten-math-exam-grading-2026|Liu 等]]用 GPT-4 为一场德国本科数学考试评分，跨两条提取路径（预先裁切的答题框对整页）、两条光学字符识别路径和两种量表格式，报告与人类分数的 Krippendorff's alpha 为 0.22–0.44，最佳工作流下准确率为 0.59–0.62，逐题准确率从 0.27 到 0.91——不足以用于高风险的终结性评分。把多标准评分规则逐条列出总体上并未改善一致性（对部分给分那道题有帮助），不使用量表的自由评分差得多（准确率 0.50–0.51），而一个意在标记需人工复核的分数之概率性置信过滤器，并未显著改善准确率，反而错误地把 7–41% 的回答标记为可靠。该研究可迁移的经验是程序性的：用标记扫描并转录整份试卷，而不是裁切答题框，因为学生会写到框外；改写为助教编写的评分规则，因为模型会从一条本意给人看的规则出发去做未被要求的推导；并且注意到人工评分规则本身在五个变体之间的转述一致性为 alpha 0.88，所以提示的稳健性并不是瓶颈。

- **LLM 比较判断用于写作筛查（2026）：**Mercer 与 Reed 用七个 LLM 作为成对比较的评判器，在三次筛查场合为 1,208 名三至六年级学生的信息类写作评分。LLM-CJ 分数与分析型量表分数强相关（r = .67–.73，Gemini-3.1 Pro 最强），能力判定的 AUC 为 .82–.86；结论在不同模型间稳定，更贵、更强的模型带来的效度增益很小，而平均三个写作样例可改善准确性——样本广度比模型选择更重要。对[[multilingual-learning|多语学习者]]的预测偏差模式与人类量表评分一致，支持把 LLM-CJ 作为一种高效、低成本的筛查方法（[[llm-comparative-judgment-writing-screening-2026]]）。

- **依质量而定的与教师评分的一致性（2026）：**在比较 ChatGPT、同伴与教师对同一批本科[[group-work|小组项目]]的评分时，[[usher-faraon-who-grades-best-2026|Usher 与 Faraon 发现]]ChatGPT 与教师的一致性随项目质量*提高而改善*——它对低质量作业的高估最大（约 +14 分），对高质量项目收缩到约 +2.5 分。ChatGPT 的总体打分也高于同伴和教师，这种给分通胀的倾向削弱了它作为独立终结性评分者的可靠性，尤其对较弱的提交。

- **小样本上的一致性统计会误导部署决策。**对 60 篇营销帖文（15 名学生加 15 篇研究者撰写的低质量锚点）对照两名独立人类评分者评分，得到 LLM 的绝对一致性 ICC(2,1) 为 .435，等权重的规则加 LLM 混合为 .266，确定性规则为 .091，在 0–100 分量表上的 MAE 分别为 6.28、10.53 和 17.22 分；混合方式显著差于单独的 LLM（配对 ICC 差异 -.169，95% CI [-.260, -.106]）。加入锚点把评分者间 ICC 从 .338 提高到 .902，LLM 一致性从 .435 提高到 .846，而一篇几乎空白的帖文得了 75 分，对照人类均值 30.5——可见单个退化回答可以在小规模评价中占主导。（[[automated-scoring-marketing-posts-agreement-2026]]）

- **结构化 LLM 评分可能看似分析性而实则非诊断性（2026）：**在对 50 道计算机科学问题的 3,041 个回答评分时，三个商用 LLM 产出的量表子维度近乎冗余（r = 0.82–0.99，VIF 最高 45），且只有 4.8–7.4% 的批注点名了迷思概念，而教师为 15.0%（[[llm-structured-assessment-diagnostic-quality-2026|Zhao 等，2026]]）。

## 关联概念

- [[explainable-ai]]
- [[remote-proctoring]]
- [[assessment-validity]]
- [[formative-assessment]]
- [[automated-essay-scoring]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[teacher-role]]
- [[llm]]
- [[higher-ed]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[psychometrically-aware-ai]]
- [[trust-calibration]]
- [[trust]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[human-in-the-loop-ai]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[summative-assessment]] — 终结性评估：抗人工智能的题型（口试、监考、闭卷考试）

## 关联文章

- [[llm-structured-assessment-diagnostic-quality-2026]] — LLM 的量表子维度近乎冗余，且反馈很少点名迷思概念（Zhao 等，2026）
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise 报告：跨三所英国大学对 761 篇大学作文的人工智能评分
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 大规模国家写作评估中的人机协同评分（Curi 等，2026）
- [[llm-comparative-judgment-writing-screening-2026]] — 大语言模型比较判断在通用写作筛查中的效度
- [[usher-faraon-who-grades-best-2026]] — 跨项目质量水平比较 ChatGPT、同伴与教师评分（Usher 与 Faraon，2026）
- [[assessing-quality-ai-generated-exams-field-2025]] — 人工智能生成考题的质量评估：一项大规模实地研究
- [[automated-formative-assessments-a-level-sciences]] — A-level 理科中的自动化形成性评估
- [[cong-confidence-asag-2026]] — 置信感知的自动简答评分
- [[ai-scoring-language-bias-physics]] — 物理人工智能评分中的语言偏差
- [[llm-difficulty-calibration-programming-exams-2026]] — 面向编程考试的 LLM 难度校准
- [[choi-anchor-aes-prompting-2025]] — 锚点式自动作文评分提示
- [[cotal-formative-assessment-scoring-2026]] — CoTAL 形成性评估评分
- [[automated-grading-linux-bash-examinations-large-language-models]] — 用 LLM 自动评分 Linux Bash 考试
- [[confidence-aware-student-drawing-assessment]] — 学生手绘图形的置信感知评估
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR：生成数学图的自动评价
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP 对 LLM 推理：面向基于量表的教学质量评估
- [[eeg-familiarity-automated-assessment-2026]] — 自动化学习者评估：基于脑电的熟悉度预测
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R：人工智能评估量表生成
- [[ai-assisted-instructor-supervised-grading-feedback]] — 人工智能辅助、教师监督下的评分与反馈
- [[ai-grading-handwritten-physics-2026]] — 手写物理评估的人工智能评分（奥林匹克）
- [[auto-marking-short-answer-science-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-perspectives-ai-writing-grading-2026]] — 谁该批改我的作业？高等教育中学生对透明的人工智能辅助写作评估的看法
- [[tripartite-feedback-framework-ai-assessment-2026]] — 三分框架：按认识论地位分类反馈，以及人工智能介入的五项边界原则（Venetsanos，2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 隐藏在提交作业中的提示注入对人工智能中介评分的红队评估（Humble，2026）
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — 面向自动教师评价、带信任门控推理的“生而可解释”LLM 框架（Li 等，2025）
- [[gpt4-handwritten-math-exam-grading-2026]] — 半开放手写数学评分，配以供人工复核的置信过滤器
- [[llm-grade-bands-calibration-bias-2026]] — 大语言模型能否复现高等教育的分数段？真实学生写作中校准与评分偏差的跨模型研究
- [[sophie-clinical-communication-ai-assessment-2026]] — 可扩展的基于人工智能的临床沟通训练与自动评估
- [[automated-constructive-assessment-hdr-llm-2026]] — 用大语言模型自动化建构性评估：走向可扩展且可重复的实践能力评价
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — 评价 LLM 对学生写作生成反馈的焦点与教学适配性
- [[llm-graders-computer-science-exams-2026]] — LLM 评分器在何处成功、在何处失效：来自两场计算机科学考试的证据
- [[llm-automated-coding-teacher-pck-2026]] — 多智能体 LLM（GradeOpt）编码教师开放式 CK 与 PCK 回答，可靠性来自针对编码手册的提示精炼
- [[ai-marking-accuracy-gcse-physics-2026]] — GCSE 物理中人工智能评分与考试委员会分数及教师判断的比较

- [[llm-grading-assistants-public-health-2026]] — 推理模式把 LLM 与人类评分的一致性从加权 kappa 0.269 提升到 0.718
