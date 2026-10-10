---
title: 基于设计的研究（Design-Based Research）
created: "2026-08-24T02:30:00-04:00"
updated: "2026-10-09T18:58:17-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
translation_of: concepts/design-based-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **基于设计的研究（DBR）** — 一种方法论路径，在真实情境中迭代地设计、实施并改进教育干预，在理论、设计与真实世界实践之间循环，既产出一个可用的制品，也产出经过验证的设计原则。在[[ai-education|AI 教育]]中，DBR 是开发 AI 学习环境、[[pedagogy|教学法]]模型和教师培训项目的首选方法——这些必须在课堂的 messy 现实中奏效——以生态真实性换取因果控制的[[rct|实验]]并辅以迭代式改进。

## 值得思考的问题

- 基于设计的研究在真实课堂中迭代地设计、实施并改进干预，在理论与实践间循环。这与受控实验有何根本不同——课堂研究者为何可能偏好它？
- DBR 刻意以因果控制换取生态真实性。如果你不能确定是什么导致了学习增益，这种知识还有什么价值？
- DBR 同时产出两样东西：一个可用的制品和经过验证的设计原则。这两个产出中哪个对你更重要——一个能用的工具，还是一条能迁移到别处的原则？
- DBR 的一个优势是实践相关性高，一个局限是发现受情境约束、难以泛化。你会在什么时候信任一条 DBR 发现到足以把它应用到差异很大的情境中？
- 若没有无辅助的受控结果测量，DBR 的学习增益可能反映它正在研究的同一个"AI 抬高表现"问题。你会如何设计一项 DBR 研究，使其报告的增益真正意味着学习，而非受助表现？

## 引言

DBR 是一种*设计*传统，而非数据传统：它并不整洁地落入[[quantitative-research|量化]]/[[qualitative-research|质性]]/实验的对照中。它刻意组合三者的元素——跨迭代周期同时收集结果与过程数据——以回答*"我们如何设计这个 AI 学习环境使其在实践中奏效？"*而非*"X 是否导致 Y？"*。它与[[learning-design]]（规定设计过程）和[[usability-research|可用性评估]]（为改进提供输入）密切相关，但区别在于其持续的、理论驱动的、多周期的特征，以及改善实践*并*生成理论的双重目标。

## DBR 周期

DBR 不是单一设计，而是一个迭代循环，通常包括：

1. **需求分析** — 在真实情境中理解问题、情境和学习者。
2. **设计** — 阐明干预及其背后的理论理据。
3. **实施** — 在真实课堂或项目中部署干预。
4. **改进** — 分析数据、修订设计并迭代（常跨多个周期）。
5. **理论与制品产出** — 既产出一个可用的干预，也产出可泛化的设计原则或经过验证的模型。

AIEd 的典范例子是[[ai-assisted-collaborative-learning-model-dbr|AI 辅助协作学习（AACL）模型研究]]，它运行了四阶段的 DBR 周期——需求分析、模型设计、与印尼本科生为期八周的课堂实施、模型改进——迭代一个四阶段学习循环（问题识别 → AI 辅助的[[collaborative-learning|协作]]探究 → 协作[[problem-solving]] → 反思与展示）。

## DBR 在知识库中如何出现

- **开发学习模型。** [[ai-assisted-collaborative-learning-model-dbr|AACL 模型研究]]用 DBR 开发并评估了一个面向[[critical-thinking|批判性思维]]和[[higher-ed|高等教育]]中问题解决的 AI 辅助协作学习模型。
- **建构 AI 素养教师培训。** [[genai-literacy-training-teacher-education-dbr-2026|Le 等]]为[[teacher-education]]学生开发并评估了一个 DBR 的[[generative-ai|GenAI]]素养培训干预；[[human-centered-ai-teacher-educators-2026|Baran 等]]在 2023–2025 年间用 DBR 为扎根于以人为本 AI 原则的批判[[ai-literacy|AI 素养]]设计专业学习。
- **设计[[governance|机构]]标准。** [[crompton-faculty-technology-integration-standards-2026|Crompton 等]]用 DBR 跨两个迭代宏观周期和 114 名参与者开发了六项教师技术整合标准。
- **迭代式系统实施。** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties 等]]描述了六项迭代 DBR 研究（18 个月、498 名参与者），用嵌入式系统方法实施开放大学的 AIDA AI 助手。
- **[[scaffolding]]与干预设计。** [[critical-thinking-genai-scaffolding|GenAI 批判性思维脚手架]]及其他干预开发研究用 DBR 设计并改进基于 AI 的脚手架。
- **青年与专家引导的[[curriculum-design|课程设计]]。** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore 等（2026）]]与一个青年和 AI 专家咨询委员会一起用为期两年的 DBR 过程，为高中设计了一个融入科学的[[ai-literacy|AI 素养]]/ML 课程，跨队列改进设计并测量 ML 知识增益——这是把青年声音整合进设计周期的、作为参与式协同设计的 DBR 一例。
- **作为 DBR 的迭代量规共同改进。** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等（2026）]]把 DBR 的迭代改进特征范例性地应用于评估工具本身：他们把量规当作可修订的设计制品，与一个[[llm|LLM]]循环进行共同改进——澄清表现描述符并明确接纳学习的隐含指标——把 LLM—人在 80 份学生设计海报上的一致性从 54.75% 提高到 81.25%（Cronbach's Alpha 0.393 → 0.798）。该研究把量规定位为人类教学法意图与机器推断之间的中介界面，其角色感知的[[prompt-engineering|提示]]（讲师、同行评审、基金评审）展示了设计选择如何塑造评估输出——这是一个 DBR 式的示范：评估工具、而不只是干预，才是设计对象。
- **早期童年 AI 素养的协同设计。** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee（2026）]]用 DBR 与两名学前和两名幼儿园教师跨迭代周期协同设计、试点并改进 Play With AI（PL-AI）课程，借助教师问卷、32 小时课堂视频、田野笔记和设计会议记录。该研究记录了 DBR 如何支持发展适切的 AI 素养活动的迭代改进，并产出可迁移的设计原则（[[embodied-learning|具身]]游戏、有形编码、引导式对话、教师协同设计）。
- **专家评审作为改进证据——以及诚实的范围声明。** [[teaching-rl-humanoid-robotics-high-school-2026|Dong 等（2026）]]把初步的四轨道机器人课程提交给五位专家按八个维度评分，然后据此修订：独立的 PPO 实现被移入拓展内容，且在五位专家中有四位指出认知负荷后增加了 Python 先修要求。离散度与均值一样驱动了这些修订——动机平均 4.00、SD = 1.73，还有一项孤立的 1/5 评分——作者坦率声明，修订后的框架在学生数据出来之前仍未评估。
- **三角互证，及其无法跨越的界限。** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva 等（2026）]]把角色轮换模型跑过五个 DBR 阶段——问题分析、教学法设计、实施、评估、改进——历时八周、62 名参与者，把反思日志、访谈、观察笔记和学生生成的制品与成员核对三角互证。设计教训在于作者为其所作的声明：在没有前后测胜任力测量、没有比较组的情况下，他们把证据呈现为干预期间的参与，而非被证明的胜任力增益——这恰是多项来源的 DBR 设计能与不能跨越的边界。

## 优势与局限

- **优势：** 高生态效度和实践相关性；同时产出可用制品与理论；对真实课堂的复杂性和不断演化的 AI 工具有响应性；非常适合开发模型并基于真实实施证据改进；捕捉干预在实践中实际如何运作（或失败）。
- **局限：** 内部效度弱（很少/无对照组）；发现受情境约束、难以泛化；周期长；难以分离是哪个设计元素导致了某个结果——DBR 能证明可行性和改进，但不能把学习增益归因于特定机制。

DBR 以生态真实性和迭代改进换取[[rct|实验]]的因果控制：其证据最强时是作为概念验证和设计指导，而非因果效力。解读 DBR 学习增益需要与其他设计同样[[limitations-in-aied-research|谨慎]]——若没有无辅助的受控结果测量，增益可能反映[[learning-gains|学习增益]]项下记录的同一个 AI 抬高表现混淆。

## 与其他方法的关系

DBR 是[[learning-sciences|学习科学]]的标志性方法——学习科学是跨学科领域，研究学习以及学习环境的设计，把建构干预和研究干预当作单一活动而非两件事。它与其他研究方法互补而非竞争（完整图景见[[research-methods-aied]]）。在[[rct|实验]]确立因果、[[quantitative-research|问卷]]确立广度之处，DBR 确立*可行性与设计知识*——一个干预能否被建构以在真实实践中奏效，以及哪些设计原则支持它。它常与[[usability-research|可用性评估]]（以改进界面）和[[qualitative-research|质性方法]]（以理解学习者如何体验干预）配对。成熟的 DBR 项目通常以一项[[rct|效力试验]]或[[educational-measurement|测量]]研究收尾，在规模上检验所开发干预的因果效应。

## 关联概念

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## 关联文章

- [[ai-assisted-collaborative-learning-model-dbr]] — 面向 AI 辅助协作学习模型的 DBR
- [[genai-literacy-training-teacher-education-dbr-2026]] — 面向教师教育中 AI 素养培训的 DBR
- [[crompton-faculty-technology-integration-standards-2026]] — 面向教师技术整合标准的 DBR
- [[human-centered-ai-teacher-educators-2026]] — 面向教师教育者的以人为本 AI（DBR）
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — 在开放大学实施 AIDA 的六项 DBR 研究
- [[critical-thinking-genai-scaffolding]] — 面向 GenAI 批判性思维脚手架的 DBR
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — 面向融入科学的 AI 素养课程的 DBR（Moore 等 2026）
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI（PL-AI）：面向学前与幼儿园的、以游戏为中心的 AI 素养课程（Lee 2026）
- [[yasar-llms-iterative-pedagogical-design-2026]] — 作为迭代教学法设计能动体的 LLM
