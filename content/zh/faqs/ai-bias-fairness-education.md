---
title: "AI 偏见与不公平如何在教育中显现，我们又能做什么？"
created: "2026-11-06T01:50:00-05:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, institutional-ai-policy, equity-ethics-pedagogical-safety-research, checking-whether-educational-ai-works]
weight: 80
foundations: [ai-education]
technology: [generative-ai, intelligent-tutoring]
ethics: [bias-mitigation, equity-in-ai-education, privacy, inclusive-learning]
audience: [instructors, administrators, software developers, researchers]
updated: "2026-11-07T17:28:19-05:00"
translation_of: "faqs/ai-bias-fairness-education"
source_updated: "2026-11-06T02:15:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

教育 AI 中的偏见与不公平不是一个问题。本知识库中的研究记录了偏见进入系统生命周期几乎每个阶段的方式 —— 训练数据、模型行为、[[prompt-engineering|提示]]、评分、反馈、分配决策，以及它们之下的基础设施 —— 而它对教师、开发者、研究者与行政人员的影响各不相同。贯穿这一切的模式足够一致，可以直说：要子群数字，不要平均值；用结果而非群体规模来定义“弱势”；把公平当作你要设计和审计的东西，而不是事后加上去的东西。

## 偏见与不公平出现在哪里

**评分与评估。** AI 评分可能惩罚学生写作所用的语言，而不是它所表达的理解：物理评分系统性地低估解释不够流畅的学生，为他们所掌握的知识而惩罚非母语与不够自信的写作者（[[ai-scoring-language-bias-physics|自动评分中的语言偏见]]）。自动阅卷还会向分布中段压缩，使最强与最弱的学生暴露最多，而它与人类阅卷者的分歧随成就水平以及词汇广度等表层语言特征而变化（[[opraise-automated-marking-ai-assessment-2026|OpRaise，2026]]）。完整的评分图景见 [[ai-grading-fairness-reliability|评分公平性 FAQ]]。

**辅导、反馈与自适应系统。** 自适应导师的内部 [[student-modeling|模型]] 可能无形中使整组人处于不利：对 MATHia 两个学年 8,549 名学生的日志所做的 [[knowledge-tracing|贝叶斯知识追踪]] 公平性审计发现，总体统计均等值为 −0.077，却掩盖了 50 项技能中有 36 项对起步阶段的阅读者不利，技能层面的偏倚高达 −0.262 —— 该导师没有阅读技能组件，因此阅读不够流畅的学生在数学上落后了（[[stinar-fairness-unmodeled-reading-skills-adaptive-learning-2026|Stinar 等，2026]]）。反馈工具也有自己记录在案的偏斜：四个广泛使用的 LLM 在得到学生身份信息时，会以与刻板印象一致的方式改变 [[ai-feedback-quality|写作反馈]] —— 更多赞扬、更少批评、假定能力有限 —— 即使作文完全相同（[[marked-pedagogies-linguistic-bias-writing-feedback|Tan 等，2026]]）。LLM 导师也会随学习者的群体标签而变化：在 EduFair-Bench 中，每个模型在化学与物理中的纠正性语气偏移都超过 0.10，数学中的分步支架与群体条件相关高达 |r| = 0.144，而语气追随的是标签，不是推理质量（[[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]]）。甚至对话历史中无形存在的群体语境也会改变输出：隐性条件作用使某个模型的 [[automated-essay-scoring|自动作文分数]] 最多虚高 1.57 分，因为承载信号的是语境，而不是明示的属性（[[demographic-signals-llm-student-assessment-2026|Rooein、Benedetto 与 Hovy，2026]]）。

**仪表盘与早期预警。** [[fairness-theatre-early-warning-systems-2026|McConvey 等（2026）]] 在一个由 168,550 条学生记录复现的早期预警系统上，对六种事后公平性干预做了压力测试：没有一种带来一致增益。差距被重新分配，而非缩小；两种方法用群体规模来定义弱势，把全部 706 次更正都指向国际学生，而后者本已有更高的预测成功率（0.916 对 0.756）；一种方法通过把女性假阳性率从 0.561 推到 0.837 来满足其性别机会均等目标。被归入“未知性别”的学生在每种方法下真阳性率都最低。

**生成式输出：文本、图像与虚拟形象。** 模型会复制主流规范，除非被明确检查。一项对教育中 31 项文生图工具研究的系统综述发现，图像一贯以白人、男性、西方、瘦削与非残障人物为中心，年龄、体型与能力多样性基本缺席（[[bias-representation-text-to-image-education-2026|Alon 等，2026]]）。组队助手把学生导向不同体验：三个 LLM 在 11,200 个软件工程作业分配中，把男性分配到界面设计而非核心开发的比例至少比女性低 80%，而国籍独立于能力影响分配（[[genai-social-bias-software-engineering-education-2026|Entezami 等，2026]]）。甚至虚拟形象的身份线索也会改变信任：在两项实验中（N = 396），白人虚拟形象被评为更可信、更有能力，而年长的黑人女性虚拟形象受到惩罚，这一效应在 STEM 任务中被放大（[[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis 与 Kyriakidou-Zacharoudiou，2026]]）。写作工具可以把偏见转移进学生自己的作品：带有性别偏见的提示会产生更多性别刻板印象的作文，于是工具的偏见变成了学习者的产出（[[gender-bias-transfer-llm-writing|LLM 辅助写作中的性别偏见转移]]）。

**数据、标签与基础设施。** 偏见在任何模型训练之前就已存在。现成的姓名检测工具对非洲姓名的召回率为 0.7647，对亚洲姓名为 0.8640，而欧洲姓名为 0.9024、美国姓名为 0.9091，微调后的模型消除了这些差距（[[ji-de-identification-personally-identifiable-information-2025|Ji 等，2025]]）。训练语料与分词在结构上使代表性不足语言的使用者处于不利（[[structural-silence-underrepresented-language-ai-2026|结构性沉默]]），LLM 生成的学习者画像带有会向下游传播的地域与性别先验（[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等，2026]]），而模型背后的真实标签也应受到与模型本身同样的审视（[[ground-truth-reliability-aied|真实标签的可靠性]]）。

**检测工具对多语写作者打击最重。** 由于 [[ai-detection|检测器]] 依据文本可预测性分类，附加语言写作的低困惑度与公式化密度会触发误判的“AI”标记：已有研究把非母语者大量真实的 TOEFL 作文误分类（[[angelier-ai-detection-pitfalls-inclusive-assessment-2026|Angelier，2026]]），而编辑一篇非母语论文会双向改变判定 —— 在一种检测器下被标记的可能性低 10.7 个百分点，在另一种下高 5.8 个百分点（[[park-style-confound-ai-detection-non-native-writing-2026|Park、Jeong 与 Kim，2026]]）。

**获取与工具质量也是公平问题。** 数字鸿沟是基础（[[digital-divide|数字获取]]），而质量鸿沟会叠加其上：同一模型的免费层在 150 个回答中有 49 个不准确（32.7%），而付费层为 18 个（12%），使教师称其“对数学而言近乎无用”（[[canonigo-teacher-mediation-generative-ai-mathematics-2026|Canonigo，2026]]）。教师绝大多数预期生成式 AI 会扩大不平等 —— 1,057 名受访教师中 81% 如此表示，58% 说会大幅扩大（[[watson-rainie-ai-challenge-faculty-survey-2026|Watson 与 Rainie，2026]]）。而 AI 辅导的收益并不会自动分配：增益集中在分配跟随需求之处 —— 例如当以低于某条阈值的远端学生为目标的前置人类辅导时，恰好在那一组产生了边际更高的增长（75%，p = .065）（[[gurung-hybrid-human-ai-tutoring-2026|Gurung 等，2026]]），或者专家核验的 AI 学习材料把一个 2.34 分增益中最大的一份移到了最低五分位（[[verified-study-materials-learning-gains-2026|Dang 与 Nguyen，2026]]）。

## 该怎么做 —— 按你的角色

**如果你是教师：** 向你采用的任何工具询问它在你实际所教的子群上的错误率，而不只是总体准确率。在接受检测器判定之前，仔细检查多语写作者的作品 —— 那些工具会误分类附加语言写作。生成教学材料时使用中性提示（中性提示在很大程度上可避免诱发出性别差异化的语言），并把 AI 输出与自己的标准比较，而不是把它当作权威（[[verify-ai-output]]）。评分时，在临界案例上保留 [[human-in-the-loop-ai|人类在环]]。

**如果你是软件开发者：** 跨身份条件做审计 —— 语言、性别、文化、残障 —— 使用只改变学生语境的输入（隐性信号的结果表明，明示属性不是唯一的通道）。在留出的受试者上测试，而不只是留出的题目：在验证划分上成立的公平性增益，在一个真实的学生注意力模型上于 10 次运行中有 4 次消失（[[student-attention-estimation-fairness-2026|Fragkiadakis 等，2026]]）。优先在模型内做缓解 —— 微调、方言不变训练、GroupDRO 等公平感知目标 —— 而非事后输出调整（[[bias-mitigation|偏见缓解方法]]）。绝不从群体规模推断弱势，并报告子群指标，包括那些因样本太小而不得不排除的群体（[[ye-fine-tuned-bert-coding-comparison-gpt4-2026|Ye 等，2026]] 正是因此排除了英语学习者和 IEP 学生 —— 当你这样做时，要说出来）。

**如果你是研究者：** 报告一项公平性指标，就这么简单 —— 一项对 421 项将 NLP 应用于学生评价的研究的范围综述发现，只有 8 项（1.9%）报告了正式的公平性指标（[[nlp-student-evaluation-teaching-scoping-review-2026|Eicher 与 da Silva，2026]]），而在 12 项 AI 与人类评分对比研究中，有十项对人口学、语言或社会偏见只字未提（[[xu-recentering-humans-ai-assisted-writing-scoring-2026|Xu、Lu 与 Abdi，2026]]）。跨人口学维度测试，而不只是性别；报告小群体排除；并把公平与准确率并列评估，而不是当作事后补丁。当你把模型当作历史导师或不同语境中的导师来审计时，在得出结论前使用身份条件测试（[[paternalistic-filter-llm-history-education|家长式过滤]] 是那个警示性例子）。

**如果你是行政人员：** 在采购预测性或生成式工具时，把子群报告与采用前审计写进合同条款 —— 早期预警研究的作者把 [[governance|采购治理]]，而非指标优化，框定为首要保障（[[fairness-theatre-early-warning-systems-2026|McConvey 等，2026]]）。留意质量分层造成的鸿沟，它让资源不足的课堂得到实质上更差的工具表现，并把获取与支持、培训配对，而不是只发许可证。使用 [[institutional-ai-policy|机构 AI 政策]] 中的杠杆来要求 [[ai-use-disclosure|披露]] 与公平报告，并把研发与监督的讨论经由 [[equity-ethics-pedagogical-safety-research|公平、伦理与安全研究惯例]] 来走。

## 什么不起作用

**总体准确率声明。** −0.077 的总体均等与 50 项技能中 36 项对某群体不利并存；一个看似平衡的模型在不平衡划分上几乎完全漏掉了吃力的学生（[[hooshyar-responsible-trustworthy-educational-data-mining-2026|Hooshyar 等，2026]] 在 80% 精确率下对低表现者的召回率为 8%、12% 与 16%）。平均值与集中的伤害可以并存。

**事后均等修补。** 早期预警研究中的每一种干预，要么重新分配了错误，要么更正了本已占优者，要么通过让某群体更不可见来达成均等。修好流水线胜过修补输出。

**只做一次的缓解。** 偏见会经由数据、提示、评分与部署重新进入；研究显示互补策略（公平的训练目标、提示设计、方言不变性、把理解与语言分离的评分、可解释性、人类监督）之所以必要，正是因为没有任何单一修补能覆盖整条流水线（[[bias-mitigation]]）。

## 到哪里深入

[[bias-mitigation]] 页面编目了贯穿流水线的来源与缓解方法；[[equity-in-ai-education]] 覆盖获取、表征与结果三个维度，并为每个维度提供证据；[[automation-bias]] 覆盖读者一侧的失效 —— 过度信任一条有偏见或仅仅是错误的建议；而 [[differential-effects-across-learner-groups]] 收集了追踪同一工具如何在不同群体上产生不同落点的研究。
