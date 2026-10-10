---
title: 形式性评估
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:39:26-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl]
confidence: high
translation_of: concepts/formative-assessment
source_updated: "2026-10-04T05:46:16-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **形式性评估**——为向进行中的教学与学习提供信息而设计的评估，与[[summative-assessment|总结性]]评价相对。在 AI 教育中，形式性评估既被 AI 所改变，也对 AI 至关重要：AI 系统可以规模化地生成、验证与调整形式性的题目与反馈，而形式性反馈又是[[intelligent-tutoring|AI 导学系统]]与[[adaptive-learning|自适应系统]]支持学习的主要机制。本知识库的[[research-methods-aied|研究]]考察 AI 生成的形式性题目、AI 生成的反馈，以及这些系统的设计与评价。

## 值得思考的问题

- 形式性评估意在闭合回路——在*学习仍在进行之中*时，暴露学生不懂什么，并给出他们可以据以行动的反馈。这与总结性评价根本上有何不同，而在实践中两者何时会被混淆？
- AI 能在可验证的维度上以惊人的准确度生成选择题，但在教学判断的维度上最弱。如果一台机器在正确答案上很强、在[[pedagogy|教学法]]判断上较弱，那么它该被信任做什么——什么又该由人继续做？
- AI 生成的反馈只有在学生真正*践行*它时才有帮助——"被践行的反馈"条件，即学生挑选、评价并应用建议，胜过单纯被给予反馈。如果践行比反馈本身更要紧，这对形式性反馈该如何设计意味着什么？
- 反馈被描述为不是信息传递，而是一种[[ethics|伦理性的]]、关系性的实践。当形式性评估被批量生产为"AI 泔水"时，丢失的是什么——人类评语库与关系性关怀又能保全什么？

## 引言

形式性评估对[[ai-education|教育中的人工智能]]而言居于核心，因为它位于[[assessment]]与[[feedback|学习反馈]]的交汇处。其目的是闭合回路：暴露学生知道与不知道什么，并提供他们可以据以改进的反馈。AI 使这在规模上成为可能——生成题目、为回答评分、传递个别化的反馈——但本知识库的研究表明，质量因题型而剧烈变化，且反馈只有被学生真正践行时才有帮助。

## AI 生成的形式性题目

AI 系统跨模态地生成形式性评估题目，可靠性因类型而异：

- **选择题：** [[code-gen]]显示[[agentic-ai|智能体式 AI]]能在跨七个教学维度验证后可靠地生成用于编程理解的多选题——概念对齐的成功率达 **98.6%**，反馈质量达 **79.9%**——表明 AI 在可验证的维度上最强、在教学判断的维度上最弱。这与更广义上的[[automated-question-generation|自动题目生成]]相关。
- **一个容易的生成题库给不出形式性信号。** 在一项为期 10 周的部署中，约 70% 的 AI 生成练习题被所有学生答对（p = 1.0），因此每 15 到 20 分钟运行一次的低风险小测验颇受欢迎，却几乎不带可用于调整教学的区分信息（[[student-llm-use-ai-question-difficulty-data-science-2026|An 与 Wang（2026）]]）。
- **自动作文评分：** 多智能体框架（如 MASS）在[[automated-essay-scoring|作文评分]]上比独立的[[llm|LLM]]提升一致性，尽管多智能体评分决策的[[explainable-ai|可解释性]]仍是一个开放的挑战。
- **形式性评分流水线：** [[cotal-formative-assessment-scoring-2026|CoTAL]]把思维链提示与[[active-learning|主动学习]]及以证据为中心的设计耦合，产出可泛化的形式性评估评分，并带有[[prompt-engineering|人在回路的提示工程]]。
- **高频、[[automated-assessment|自动判分的评估]]：** [[automated-formative-assessments-a-level-sciences|A-level 理科中的自动化形式性评估]]考察了高频、自动判分的形式性评估对[[learning-gains|学习结果]]的影响。一项对[[science-education|理科]]简答题自动判分的范围综述（2017–2024 年初）确认，这一形式性简答题用例是一个真正有势头的领域：BERT 家族模型主导到 2021 年的自动判分，之后自约 2022 年起转向提示更大的[[llm|LLM]]，而领域增强、感知评分标准的与思维链的模型表现最好——但该综述对全面评价的呼吁，以及未解决的[[bias-mitigation|公平]]与可解释性缺口，警示不要把这些系统延伸到无中介的[[summative-assessment|总结性]]或高风险用途（[[auto-marking-short-answer-science-2026]]）。

## AI 生成的反馈

一大批本知识库研究考察 AI 生成的形式性反馈：

- **践行问题：** [[ai-feedback-enactment-workflow-2026|让 AI 生成的反馈要紧起来]]（13,037 名学生；51,296 项资源）表明，反馈的价值取决于学生是否*践行*它——**被践行的反馈**条件，即学生挑选、评价并应用 AI 的反馈建议，胜过单纯的定向反馈。
- **当评分标准承载判据时，AI 反馈可以匹敌专家教师。** 在对 47 个大学项目小组盲评来源、随机化的条件下，一个拿到了共同建构的 0–30 评分标准与范例的 LLM，与专家反馈非劣*且*等效（+0.23，90% CI [−0.46, 0.91]）——起校准作用的是评分标准，而非模型（[[ai-generated-feedback-higher-ed|Grion 等（2026）]]）。
- **反馈不是信息传递：** [[care-full-feedback-genai|悉心反馈的手艺]]论证，反馈是一种伦理性的、关系性的实践，而非信息传输——只有当学生对它作出理解并据以行动时，反馈才构成反馈，并把批量生产的"AI 泔水"与人类评语库的捷径相对照。
- **顺序化反馈可能反噬：** [[sequenced-ai-feedback-learning|顺序化 AI 反馈]]（鼓励 → 提示 → 正确答案，为促进自主而设计）在一项随机实验（N=199）中实际上**损害了学习**，尽管提升了[[student-engagement|投入]]与正面感知——这是关于反馈设计的一个警示性发现。
- **以学习者为中心的工具：** [[learner-centered-feedback-ai|PolyFeed]]把机器学习建议模型与[[teacher-role|教师]]实践结合，展示教师如何采纳并调整 AI 的反馈建议；[[ai-internal-feedback-evaluative-judgments|AI 支持的内部反馈]]帮助本科生发展[[evaluative-judgment|评价性判断]]。
- **评分标准引导的提示与角色感知的反馈：** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等（2026）]]表明，对评分标准的迭代式共同精炼——澄清表现描述符并明确接受学习的隐含指标——把 LLM 对学生设计工作的一致度从 54.75% 提高到 81.25%（Cronbach's Alpha 从 0.393 升至 0.798），其中认知要求高的"迭代与反思"类别增益最大。让同一个模型在教师、同伴评审与基金评审的角色下受提示，会产生不同的评价性反馈，而修订后的 LLM 在应用表现阈值时比某些人类评分者更一致——这把评分标准引导的 LLM 定位为形式性反馈环境中的校准与共同设计伙伴，而人在回路的监督仍然必不可少。
- **一致度数字隐藏了一个方向：模型可能向中间类别折中。** 一个在对话型评估内标注对话轮的 LLM 评分者，在 155 个事件中的 52.2% 上与人类编码一致，但比评分者更常用折中的 PARTIAL_CORRECT 标签（53.5% 对 41.3%），并把 5.4% 的轮次标记为 IRRELEVANT，而评分者一个也没标（[[llm-multi-agent-conversation-assessment-2025|Hou 等，2025]]）。
- **AI 反馈维持参与并在规模上驱动增益：** [[gpt4-feedback-student-activation-2026|Geschwind 等（2026）]]跨本科导学课的一学期实地实验发现，个别化的 GPT-4 形式性反馈（横跨 Hattie 与 Timperley 的全部三个维度——Feed-Back、Feed-Up、Feed-Forward）在八个开放式任务上维持了最高的参与度，拉长了学生的回答，并产生最强的内容学习增益——这一效应由可靠、一致的 AI 供给所驱动，因为当高质量文本化同伴反馈真正被收到时，同伴的结果与 AI 的相当。
- **反馈的未来：** [[feedback-futures-genai|反馈的未来]]综合了一期特刊，论证问题不在于[[generative-ai|GenAI]]*能否*产出反馈，而在于如何设计出支持学习的反馈，并提炼了该领域反复出现的若干张力。

- **多数形式性反馈是瞬时的，不可持续的。** 在一项对 37 项真实性评估研究的范围综述中，23 项用形式性反馈做即时改进，但只有四项用了学生可迁移到未来情境的可持续反馈——即当前 AI 反馈工具所复制的反应式模式（[[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan、Boud 与 Du（2025）]]）。
- **面向开放式定量问题的诊断先行反馈：** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur（Yin 等，2026）]]就工程经济学计算题提供实时、个性化的形式性反馈，这是一个此前因手写、非结构化解法而阻挡了 AI 支持的领域。一个每题[[machine-learning|XGBoost]]骨干从学生提交的数值答案中诊断可能的评分标准标注错误（平均精确率 0.81，召回 0.79），而一个对话式方案只在预测置信度低时请求中间答案——在题库网页界面内平衡反馈准确率与收集效率。
- **LLM 形式性反馈的规模与极限（系统性证据）：** 一项 PRISMA 引导的[[meta-analysis-systematic-review|系统综述]]（42 项实证研究，2023–2025）发现，LLM 能减少教师工作量并规模化地提供快速、个性化的反馈——尤其在大型或[[higher-ed|高等教育的]]班级中——但反馈有时过于笼统、或与所给成绩不对齐，且在较长、[[multilingual-learning|多语言]]或细微的任务上可靠性下滑，再次印证形式性 AI 反馈最好在教育者的监督下部署（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。
- **自适应是可分离的配料，而非装饰：** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham、Schaaf、Brod 与 Breitwieser（2026）]]提供了多数 LLM 反馈研究假定不存在的直接因果检验，把 GPT-4 的反应依存性反馈与专家撰写的通用指导在结构、语气、长度与[[motivation|动机性]]措辞上逐一匹配（用五维度质量评分标准验证，κ = .76–1.00）。在一项预注册的被试内实验中，155 名德国五、六年级学生（M = 12.08 岁）修订六份"如果—那么"计划：计划质量的中位数在自适应反馈下从 **2 → 5**，在通用指导下从 **2 → 3**（被试内 V = 10,440，p < .001，r = .86；条件 × 时间交互估计值 = 1.68，SE = 0.14，p < .001，且实验前无支持度差异）。儿童把自适应反馈评为更有帮助（r = .67）且更有激励性（r = .74），且试次层面的感知预测了修订增益的大小——使[[technology-acceptance-model|感知有用性]]成为通路的一部分，而非一个情感的副产品。由于对照组本身设计良好，该研究显示的是*超越*良好非依存性指导的增量价值，而非反馈与无物之间的差别：通用指导是一个真实但有限的替代品，它在其自身中位数处到达平台。计划作为一项核心[[self-regulated-learning|自我调节学习]]策略充当了测试案例，其质量判据明确，这使依存性——即区分[[scaffolding]]与静态支持的那个属性——可以直接在一个单句回应上被测量。作者把自适应狭义地定义为反馈内容对学习者具体回应的依存性调整，将其与会话式交互性、语气与稳定特质的[[adaptive-learning|自适应学习]]区分开来。
- **感知有用性跟随可行动性：** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça 等（2026）]]让 144 名编程学生在五个维度上给 893 个 LLM 生成的反馈实例打分，在六个维度上给 237 份汇总报告打分，在保持领域、任务与工具不变的同时让受教育层级变化。评分全程是正面的，单个回答的学生级均值为 4.24 到 4.43，报告为 4.11 到 4.38，但可行动性与有用性即便在可行动性与感知准确率承载最大的相对权重（32.6% 与 29.0%）的情况下，仍得到最低的评分（在一个解释 76% 感知有用性方差的模型中），而动机与个性化引领了一个解释 53% 的使用意愿的报告级模型。由于可行动性是[[feedback]]研究视为最难提供的维度，这一模式读作把[[technology-acceptance-model|技术接受]]应用到反馈上：有用性跟随的是学习者能否行动，而非反馈听起来有多精致。
- **离线一致度夸大实时表现：** [[ai-assisted-instructor-supervised-grading-feedback|Cruz 等（2026）]]的 GPT-4o 反馈流水线在 362 份提交中的 83% 把教师的分数复现在 0.5 分以内，然而经机会校正的一致度仅为中等（ICC(2,1) = 0.49），且从历史脚本上的 r = 0.92 回落到实时教师监督使用中的 0.57。
- **理解在对修订的路径上超过可行动性：** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao 与 Fan（2026）]]把问题级诊断与建议分离，并在独立修订前给学生一份书面解读页（重述、效果说明、不确定性识别、修订计划），随后是结构化教师评阅、再评估与反思。在两个完整班级的三轮写作周期中（96 名学生；288 个周期级观察），反馈理解与修订质量的相关最强（r = 0.501，高于可行动性的 0.480 与诊断准确率的 0.445），而诊断组多得了 5.92 个写作分数，对 3.58（Hedges' g = 1.12），把杠杆定位在学生*对诊断的理解*，而非其可行动性本身。

## 课程锚定与教育者在回路的设计

[[ai-learning-tools-engineering-education-needs|LearnLens]]应对 AI 形式性评估中三个持久的问题：**错误感知的评估**（捕捉细微的推理错误而非表层失误）、**主题关联的记忆链**（用结构化的[[curriculum-design|课程]]锚定检索取代嘈杂的相似度式[[rag]]），以及**教育者在回路**的设计（教师定制与监督，而非完全自动化）。这关联到[[human-in-the-loop-ai]]中更宽的张力：可扩展的自动化与专家验证并存。

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe、Loibl 与 Leuders（2026）]]在一个工具产出自身断言而非原始观察时，把"教育者在回路"的含义说得更锋利。他们的概念分析论证，AI 生成的诊断推断是性质不同的证据，因为它们已经是算法解释的产物，所以教师需要作者所称的**元诊断**这一更深的一层：刻意地接受、拒绝或修改一个推断，并把它与自身的语境知识整合。为此规定 DiaCoM 框架，把 AI 生成的推断当作情境特征，把接受、拒绝或修改的决定当作诊断行为，同时把教师所需的个人特征扩展为包含"AI 系统实际如何运作"的知识。由于当前系统大多建立在任务正确率与完成时间这类表现数据之上，动机状态与课堂动态大体缺席，因此该文让教师而非仪表板保持负责任的反思主体，并把评判算法断言框定为专业发展的目标。

把 AI 的角色与成就层级匹配，是一个相关的设计动作：职前科学教师把 ChatGPT 描述为对低成就者的"耐心导学系统"、对中等成就者的"个人教练"、对高成就者的"智识陪练"，而教师保留对困难内容的最终解释（[[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom 等，2026]]）。

## 设计权衡

| 维度 | AI 适配度 | 人的要求 |
|-----------|----------------|-------------------|
| 事实正确性 | 高 | 低 |
| 概念对齐 | 高 | 中 |
| 干扰项质量 | 低 | 高 |
| 反馈深度 | 低 | 高 |
| 评分标准一致性 | 中 | 中 |

## 评估、反馈与学习

AI 教育中的形式性评估与学习过程本身相连：

- **反馈回路：** [[feedback|反馈回路]]是形式性评估向学习提供信息的机制；AI 导学系统与自适应系统在规模上闭合这些回路。
- **自我调节学习：** 当学生监控进度并作出调整时，形式性反馈支持[[self-regulated-learning|自我调节学习]]；AI 反馈应当培育[[ai-internal-feedback-evaluative-judgments|评价性判断]]，而非取代它。
- **自动化评分触及周期的某些阶段，而非全部：** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen 与 Liu（2026）]]做了一项为期 14 周的准实验，46 名口译学生每周向一个自动化评分系统提交演绎作品，系统返回即时分数、转录、标注错误与一份参考演绎，而对照组只收到全班教师反馈。自动化组整体进步更多（d = 1.03），但增益留在缺陷可分解、信号可靠、量表敏感之处：语言准确性与逻辑连贯性上升，而信息保真度（与人类评分者一致度 r = 0.12）与传递流畅性没有变化。[[self-regulated-learning|自我调节学习]]以匹配的方式不均匀，执行与监控与分数增益相关（r = 0.42），而计划与情绪动机停留在量表中间附近，且若干学生在低分后推迟投入而非分析原因。该系统触及了周期的表现阶段，而非其前的计划阶段。
- **从自动诊断到生成练习：** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu、Luo 与 Li（2026）]]把音频—分数对齐、错误量化与一个近端策略优化层接入音乐教育的单一闭环，把节奏错误信号（91.2% 召回，98.4% 特异度）转化为引导生成练习音轨的奖励，并在一项 120 名本科音乐专业学生、为期 12 周的准实验中报告了有利于系统组的显著"组 × 时间"交互（beta = 0.52）。作者把这框定为技术可行性，而实际的读法是分诊而非评估：89.7% 的精确率意味着每十个被标记的节奏错误中约有一个是假警报，且该研究的专家评审者把对音乐表现的支持评为最弱领域，因此自动化回路适合技术性操练，而表现性判断仍留在教师那里。
- **脚手架：** [[scaffolding]]与形式性评估协同工作——AI 可以提供即时的提示与提示语，尽管顺序化反馈的研究警示不要过度结构化。

- **评分标准质量比模型选择更能推动自动评分的一致度。** 在 1,200 份 Linux/bash 考试回答上，[[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo 等（2026）]]发现，加入完整评分标准加参考答案提升了每一个模型（最佳者：Gemini 3.0 Pro，ICC(3,1) = 0.888，人类上限为 0.949），而一致度随问题的认知层级上升而单调下降。

- **AI 生成的评分标准只在一段容差内与人工评分相符。** 四份 AI 评分标准在 308 份编程回答上与人类基线达到集合等效性，容差为 ±5 分内（相关 0.948–0.973），但有五个"评分标准—作业"格子超出了它，且 GPT-4.1/4o 在结构化评分标准下系统地判得更严（−4.46 对自由式的 −0.66）（[[harmogen-ai-assessment-rubric-generation|Mendonça 等，2026）]]）。
- **效度与质量：** AI 生成的形式性题目与反馈的[[ai-feedback-quality|质量]]与[[assessment-validity|效度]]必须被评价；[[ai-ed-evaluation]]提供了方法。

- **AI 评分增添了一项效度威胁。** 由于 AI 评分者可能奖励与构念无关的特征（如语言流畅性）而非科学推理，一份源自约 100 位领导者会议的斯坦福/ETS 白皮书论证，评估应当累积连续的、富含语境的证据，而非对一次性产出做认证（[[responsible-assessment-ai-era-stanford-2026|McGee 等（2026）]]）。

- **保留脆弱的任务，并加一个孪生任务。** [[roe-assessment-twins-2026|Roe、Perkins 与 Giray（2026）]]论证，课后论文与研究课题承载着可观的形式性价值，应当为学习而保留，并配以第二个评估同样结果的、提供可靠总结性证据的任务。

## 风险：评估作为监控

形式性评估系统可能从学习支持工具转变为行为监控的基础设施。使自适应导学成为可能的同一批数据流，在[[governance]]薄弱时也能使惩罚性追踪成为可能。这关联到[[privacy]]与[[well-being|学生福祉]]，并论证形式性系统应当支持学习，而非监控它。

## 对教育中的人工智能的启示

- **让题型匹配 AI 的可靠性：** 在可验证的维度（概念对齐、正确性）上用 AI，在教学判断的维度（干扰项质量、反馈深度）上保留人的判断。
- **为践行而设计，不只是为供给而设计：** AI 反馈只有被学生挑选、评价并应用时才有帮助——构建支持践行的工作流。
- **反馈设计比数量更要紧：** 顺序化或过度结构化的反馈可能反噬；优先选择支持学生意义建构与自主的反馈。
- **把教育者留在回路中：** 课程锚定、教育者在回路的系统改善相关性并减少噪声。
- **评价质量与效度：** 为 AI 生成的题目与反馈评价质量、效度与[[equity-in-ai-education|公平]]，而不只是生成速度。
- **把形式性评估当作一种哲学，而非一个工具箱。** [[mesny-innovative-assessment-grading-management-2026|Mesny、Roberge-Maltais 与 Galy（2026）]]把更宽的高等教育文献综合为一种"为学习而评估"的范式，把形式性的、持续进行的与个别化的[[feedback]]框定为一套总括的哲学，而非仅仅一个工具箱——在形式性与[[summative-assessment|总结性]]目的之间取得平衡，并让[[agency|学生能动性]]、自我调节与[[metacognition|元认知]]技能居于前景。他们识别出五项相互强化的实践（[[authentic-assessment|真实性评估]]、自我与[[peer-assessment|同伴评估]]、再评估、[[mastery-learning|基于标准的评分]]、取消评分），这套哲学可以借它们得到施行，同时指出它们在高等教育各领域的采纳仍极不均衡。

## 关联概念

- [[pedagogical-patterns]] — 当 AI 供给部分反馈时形式性评估所采取的顺序形态
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — 总结性评估：AI 抗性的形式（口试、监控考试、闭卷考试）

## 关联文章

- [[llm-multi-agent-conversation-assessment-2025]] — 一个用于对话型评估的四智能体架构，其评分者向中间类别折中（Hou 等 2025）
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ai-feedback-enactment-workflow-2026]] — 让 AI 生成的反馈要紧起来：从供给到践行
- [[care-full-feedback-genai]] — GenAI 时代悉心反馈的手艺
- [[feedback-futures-genai]] — 反馈的未来：超越人与 GenAI 能力的极限
- [[sequenced-ai-feedback-learning]] — 顺序化 AI 反馈的影响与通路
- [[learner-centered-feedback-ai]] — 用 AI 增强以学习者为中心的反馈
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — 从自动评分到学习诊断：英语写作中 AI 支持的形式性评估的机制研究
- [[ai-internal-feedback-evaluative-judgments]] — 通过 AI 支持的内部反馈发展评价性判断
- [[cotal-formative-assessment-scoring-2026]] — CoTAL：带人在回路提示的形式性评估评分
- [[automated-formative-assessments-a-level-sciences]] — 高频自动化形式性评估
- [[ai-generated-feedback-higher-ed]] — 高等教育中的 AI 生成反馈
- [[ai-learning-tools-engineering-education-needs]] — LearnLens：课程锚定的 AI 反馈
- [[genai-teacher-feedback-comparison]] — GenAI 与教师反馈的比较
- [[chatgpt-feedback-engagement-genai]] — ChatGPT 反馈与投入
- [[code-gen]] — CODE-GEN：经验证的多选题生成
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — 为真实性评估而设计
- [[automated-grading-linux-bash-examinations-large-language-models]] — Linux/bash 考试的自动评分
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — ChatGPT 增强的形式性评估中的教师与 AI 角色
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 重新考虑口试作为真实的、AI 抗性的评估
- [[roe-assessment-twins-2026]] — 评估孪生：在 GenAI 时代强化评估效度（Roe、Perkins 与 Giray 2026）
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R：AI 评估评分标准生成
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI 辅助的教师监督评分与反馈
- [[adaptive-scaffolding-cognitive-engagement-its]] — ITS 中的自适应 ICAP 脚手架（BKT 对 DRL）
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM 作为迭代式教学设计中的智能体
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — 自适应使反馈有效：来自儿童计划上 AI 生成反馈的证据
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — 自动评分、口译表现与自我调节学习（Chen 与 Liu 2026）
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — AI 支持的形式性评估中教师的诊断技能：从诊断到元诊断
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — 跨三个教育层级的编程中 LLM 生成反馈的感知有用性与使用意愿
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — 音乐教育中结合生成式 AI 与大数据分析的自适应教学辅助
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
