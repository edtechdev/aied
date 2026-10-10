---
title: 提示工程
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **提示工程（prompt engineering）**——设计与精炼输入给大语言模型的信息、以获得所需输出的实践。在教育中，提示工程承担双重角色：作为一种学习者技能（学生必须学会有效地提示），以及作为一种系统设计杠杆（开发者精心设计提示，塑造[[intelligent-tutoring|人工智能辅导]]的行为）。

## 值得思考的问题

- 你最近很可能往某款人工智能工具里输入过提示。现在想想这一点：你的措辞方式并非中立的——它可能透露了你如何规划、如何思考、如何分配努力。你自己的提示习惯，可能说明你是怎样解决问题的？
- 一项研究发现，表达请求更有技巧的用户，系统地获得比以同样意图但表达欠佳的用户更好的输出。如果你承认"提示特权"是真实存在的，那么把人工智能的公平获取问题，最好通过[[teacher-role|教]]每个人更好地提示来解决，还是通过重新设计系统、使这种技能不再被要求来解决——两者各有什么取舍？
- 提示是一种要记住的"诀窍"，还是一种真正的智力技能？一条[[research-methods-aied|研究]]路线把它当作学科内的专业判断（新闻学、法学、[[medical-education|医学]]）；另一条把它当作人工智能素养的核心。哪一种观点与你自己的经验——究竟是什么把好提示与坏提示区分开来——相符？
- 设计良好的提示可以为学生的思考搭支架，而使用不当的提示会鼓励认知卸载。你能回想起某个人工智能答案替你思考的时刻吗？提示中的什么——或你的意图中的什么——导致了那件事？它本来可以被设计成相反的吗？
- 提示既是一种学习者技能，也是一种系统设计杠杆：现在有些辅导系统会自动为用户路由并选择提示。当提示从用户移向系统，学生失去了什么——又得到了什么？
- 在读之前设一个小目标：在学完提示工程之后，决定一种具体的方式，改变你写作提示的方式，以及你会核查什么结果来判断它奏效了。

## 引言

提示工程是教育中有效使用[[generative-ai]]的核心。与传统的编程界面不同，大语言模型响应自然语言——但这些回应的质量、准确性与[[pedagogy|教学]]价值，很大程度上取决于提示设计。本知识库中的研究表明，提示并非中性的行为：它反映学生如何思考、如何规划、如何分配认知努力。[[miles-prompt-literacy-human-centered-genai-framework-2026|Miles、Haber-Curran 与 Arar（2026）]]通过区分提示工程（为性能而对输入做的技术性优化）与提示素养（澄清目的、批判性阅读输出、并带着说明的理由加以修订这一修辞性、伦理性与反思性的工作），使这一术语涵盖的范围更为清晰。他们的提示素养循环（澄清目的、构建提示、与输出互动、精炼提示、反思）与一份样例过程量规使这一区分可教，并论证：只优化输出的教学，没有触及大语言模型使用中的伦理与认识论维度。

### 提示工程如何出现在研究中

- **提示作为认知痕迹：**[[misiejuk-cognitive-offloading-prompting-2026|Misiejuk 等]]显示，提示模式揭示[[cognitive-offloading|认知卸载]]——高质量的工作使用富含语境、礼貌且指令性的提示；低质量的工作则表现出没有领域依据的反应式反驳
- **深度改善的是产物，而非保持。**在 22 名研究生中，寻求解释（"为什么/如何/解释一下"）类提示的比例，在基线与知识水平和提示数量之外，预测了独立评定的任务质量（β = 6.27），然而与即时回忆的相关为零（[[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris（2026）]]）。
- **提示认知追踪学科，而非学生。**[[student-ai-conversations-cognitive-engagement-2026|Chang 与 Li（2026）]]对 116 门课程的 60,087 条提示做了分类，发现 Bloom 层级画像因学科而异——STEM 以"应用"为主（20.8%），社会科学以"创造"为主（33.8%）——课程层面的方差超过学生层面的方差。
- **提示作为素养：**[[tracing-genai-literacy-interaction-patterns|追踪生成式人工智能素养]]与[[aaai2026-prompting-literacy-k12|K-12 提示素养]]研究把提示框定为[[ai-literacy]]的核心组件
- **新手默认试错，并把责任推给模型。**在一门文本语言学研讨课上，十位生成式人工智能新手靠试错来精炼提示，很少使用上下文中的范例，并把糟糕的输出压倒性地归因于大语言模型，而非自己的提示措辞（[[llms-text-linguistics-teaching-2026|Brocca 与 Garassino（2026）]]）。
- **当讲师示范提示时，学生逐字复用它。**在来自十二个中学 STEAM 小组的 310 条被记录的提示中，逐字照抄讲师指令是最常见的学生姿态，占 47.1%，高于自发提问的 28.7%（[[middle-school-genai-steam-interactions-2026|Zhao 与 Li（2026）]]）。
- **一个调节性的循环胜过一个提示公式。**在一项有 42 名本科生的准实验试点中，被教授 IDEA 循环（意图 Intent、解构 Deconstruction、表达 Expression、适应 Adaptation）的学生，在所有五类任务中都产出了比被教授"角色–任务–语境–格式"提示法的同伴更高质量的提示与输出（调整后的提示增益为 +11.77 到 +29.19 分）（[[idea-framework-metacognitive-genai-2026|Wang 等，2026]]）。
- **提示作为系统设计：**[[cotal-formative-assessment-scoring-2026|CoTAL]]把[[human-in-the-loop-ai|人在环路]]的提示工程用于[[formative-assessment|形成性评估]]评分；[[choi-anchor-aes-prompting-2025|基于锚点的提示]]改善了[[automated-essay-scoring|自动化作文评分]]
- **提示是入门技能，而非这门学科本身。**Gorsky（2026）把软件专业人员的[[ai-literacy]]框定为管理[[agentic-ai|代理]]的能力，而非给它们写提示的能力，并把框架化、规格化、语境工程、验证、多代理编排与可审计性列为课程必须评估的技能（[[ase-26-agentic-software-engineering-curriculum|Gorsky（2026）]]）。
- **自适应提示路由：**[[learning-to-prompt-adaptive-tutoring|Learning to Prompt]]把提示选择当作辅导系统自身的一部分——在 14 个教学特征上做学科感知的提示路由，由一个随机路由器为每段对话选出最佳提示。这把提示从一种学习者技能转变为一种自适应的系统设计杠杆，改善了[[student-engagement|投入]]与效率（在真实 A/B 测试中练习转化率为 28.1% 对 19.6%）。
- **提示模态：**[[voice-text-prompt-problems-computing-education|语音对文本输入研究]]考察提示模态是否影响[[learning-gains|学习结果]]
- **超越文本的提示——科学插图。**提示可以快速生成分子与物理化学的插图，但一份局部看来有说服力的渲染仍可能是错的，或携带表征偏见，因此学生必须依据化学原理审问人工智能生成的可视化，而非信任它们（[[unesco-ai-guidelines-chemical-education-2026|Li 等（2026）]]）。
- **支架式提示：**[[guided-llm-scaffolding-independent-learning|引导式大语言模型支架]]与[[scaffolding-critical-engagement-genai-minority-students|批判性投入支架]]把结构化提示当作一项学习干预来教
- **带渐退支持的教练式提示：**在 ARPG+ 中，一个实时教练跨六个维度诊断提示质量，并随胜任力增长而渐退支持，把最终提示质量提升到 7.82，而静态模板为 5.95、无辅助为 4.52（[[ye-arpg-real-time-coaching-llm-prompting-2026|Ye 等（2026）]]）。
- **任务分解有一个最优值：**把辅导培训课的生成分三段进行，产出了评分最高的课（均值 14.67），一次通过得分最低（10.67），而五段又回落到三段之下——适度的分解胜过两个极端（[[lin-llm-interactive-lesson-generation|Lin 等（2025）]]）。
- **提示特权与公平：**[[prompt-privilege-equitable-ai-access-2026|Jin 等]]显示，提示专长的分布并不均匀——表达请求更有技巧的用户，系统地获得比以同样意图但表达欠佳的用户更好的输出。他们的提示公平转换器（Prompt Equity Transformer）把提示优化从用户移到人工智能系统，论证[[equity-in-ai-education|公平的]]输出应当被工程化进模型，而不是向新手索取。
- **提示精炼会到达平台期；此后由微调接手。**在二语听力[[assessment]]中，迭代式提示设计带来的题目质量增益递减，但用优化后的提示对 GPT-4.1 做微调——提示保持不变——产出了更贴合语境、更均衡的题目，从而把"模型适配"而非"提示手艺"分离为下一个杠杆（[[gpt-item-generation-l2-listening-2026|Aryadoust 与 Wong，2026）]]）。
- **提示作为[[situated-learning|情境化的]]专业判断。**在素养与系统设计之外，提示还可以被框定为一种*学科实践*。[[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx 等分类法]]在新闻学中把任务定义与提示当作在某领域的认识论与伦理规范之内行使的专业判断——把新闻工作翻译成显式的任务（信息采集 → 意义建构 → 编辑 → 发表/分发）使假设、优先级与[[ethics|伦理考量]]变得可见，并把提示变成批判性人工智能素养的教学工具。其逻辑可迁移到其他知识密集的专业（法学、医学、公共政策）。
- **提示设计作为教学规格。**Neto 及同事（2026）在其对医疗教育中生成式人工智能的[[meta-analysis-systematic-review|系统综述]]中发现，提示设计充当一种教学规格，编码了专家创作中隐含的认知目标与质量标准——然而只有 34.8% 的研究把生成内容与教学框架对齐，只有 34.8% 以足够详细的程度报告了提示以便复现。Looi、Liu 与 Sun（2026）进一步展示了提示架构如何嵌入教学规则（正确性关卡、防剧透边界、告别关卡）来约束程序性领域中[[llm]]辅导的行为。
- **量规引导与角色感知的提示。**[[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等（2026）]]显示，量规引导的提示——把量规当作人类教学意图与机器推理之间的语义界面——把大语言模型与学生设计工作之间的一致性从 54.75% 提到 81.25%（Cronbach's Alpha 0.393 → 0.798）。为大语言模型而工程的量规必须在精确与灵活之间取得平衡：太模糊会招致自由解释，太僵硬则把模型降格为模式匹配。角色感知的提示——以讲师、同行评审与基金评审三种提示评价同一件产物——产出了质性上截然不同、认识论上不同的反馈，表明提示设计塑造的不只是准确性，还有输出的评价姿态。
- **提示支架可能把模型推得离教师更远。**[[llm-feedback-focus-adaptivity-student-writing-2026|Almousa 等（2026）]]让七个模型在三种提示策略下产出段落级的写作反馈，发现对其中多数模型而言，加入类别名称或范例反而增大了与教师分布的偏离，只改善了 Mistral-7B（0.2695 到 0.2398）。零样本基线保持得最近，因此"焦点类型指令"是应当被检验而非被假定有效的东西。
- **面向评估的语境感知提示。**对预训练语言模型做语境感知的提示，可以从过程数据中自动编码[[collaborative-learning|协作问题解决]]技能的标注，建模行为编码之间的依赖关系，并融合认知与社会能力。这使结构化的 CPS 分析得以规模化、实时地进行，克服了手工编码方案的劳动密集性。
- **教师规划中基于角色的模板与质量量规。**[[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo 与 Tahir（2025）]]为儿童 STEAM 艺术[[curriculum-design|课程规划]]经验性地开发了一个提示框架，把"角色（R）–指令（I）–终点目标（E）"模板（改编自 RISEN）与一份"四点一线"优化量规——标准化、实用、吸引人且完整，外加一个拓展维度——配对。把该量规应用于批判与精炼提示，使生成的方案保持在执业美术教师可接受的范围内（均分高于 4/5），同时暴露了纯一次性提示未加处理的重现性缺口（[[personalized-learning|个性化]]、[[pedagogical-safety|儿童安全]]约束、文化偏见）——表明提示模板加显式评价标准，充当了课堂生成的质量控制支架。
- **角色与约束设计作为自变量。**[[wang-teacher-student-centered-agents-physics-2026|Wang 等（2026）]]比较了构建于同一模型与平台、温度同为 0.3 的两个代理，其唯一差别在于提示如何规定角色、技能与约束：一个从有边界的教科书知识来源作答的专家教师代理，对一个被脚本设定为诊断[[misconceptions]]并检查理解的共情型学生中心代理。仅角色差异就改变了学习表现、认知负荷、心流体验与被感知到的共情，表明角色规定是一个有可测效应的教学设计决策，而非风格上的点缀（[[pedagogical-agent]]）。

### 与更宽概念的关联

提示工程与[[scaffolding]]相连——设计良好的提示可以为学生的思考搭支架，而非绕过它。它与[[metacognition]]和[[ai-literacy]]相交，因为有效的提示要求同时理解人工智能的能力与自己的学习目标。[[cognitive-offloading]]研究直接把提示质量与"人工智能使用是在支持还是在破坏学习"联系起来。

- **写作技能驱动提示，而两者共同预测[[vibe-coding]]的成功。**在一项预注册的 CHI 2026 研究（N=100）中，[[vibe-coding-writing-cs-achievement-2026|Thorgeirsson、Weidmann 与 Su]]发现，书面沟通熟练度预测了面向 GUI 的氛围编程表现（r = .29），而人工评定的提示质量*中介*了这一联系——这是"清晰、结构化的散文会转化为更好的自然语言编程提示"的回应过程证据。写作技能与[[cs-education|计算机科学成就]]都是独立预测因子，而计算机科学成就（r = .39）承载了约两倍的独立方差，因此只改进提示，不太可能在大语言模型原生的开发中完全替代编程基础。
- **提示策略预测表现。**一项[[isaza-chatgpt-engineering-prompting-2026|对 128 名工科学生的实证研究]]发现，人工智能查询效率（清晰、结构良好的提示）与人工智能驱动的[[problem-solving]]（把人工智能输出策略性地整合进推理）是学业成功最强的预测因子——即使在控制 GPA 之后——表明提示是一种可教的技能，它塑造了学生学习人工智能的有效程度。
- **追踪结果的不只是提示质量，还有提示风格。**从 1,540 个辅导会话中导出的特质把概念性提问与考试成绩相联，而任务委派行为与之负相关——但这些特质在下一学期未能复现，因此它们是行为模式而非稳定技能（[[principal-trait-analysis-human-ai-skills-2026|McNichols、Du 与 Lan（2026）]]）。
- **一个可用的分类法，以及哪些提示类别真正划算。**[[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen 等（2026）]]把技术策略翻译为 3K 模型（*Kontext、Kernauftrag、Klarheit*——语境、核心任务、清晰性）：十一个面向实践的类别，每个都配好/中/差量规，每个都作为为职前教师学习目标生成的反馈的实验变体加以测试。学科专用的技术性术语是决定性的类别——把学科术语换成日常同义改写，在三个模型上都显著降低了反馈质量（β = −0.412）——而在第一项研究中，加入具体范例、移除思维链指令，与基线无显著差异；一旦用表现最佳的模型–提示组合重跑分析，范例确实有帮助（β = 0.52）。提示质量与模型选择共同解释了评定反馈质量中 42.8% 的方差，这是该论文的主张：提示工程是一种可测量、可教的胜任力，而非一种风格偏好——而且它的各类别在效应量上不可互换。

## 关联概念

- [[pedagogical-patterns]] — 结构化使用序列内部的支架层
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — 总括：人工智能技术与技法（模型、大语言模型训练、机器人、RAG、能动性系统）

## 关联文章

- [[wang-teacher-student-centered-agents-physics-2026]] — 代理角色与约束提示作为物理学习中的设计变量（Wang 等，2026）
- [[gpt-item-generation-l2-listening-2026]] — 基于 GPT 的二语听力题目生成中提示对微调（Aryadoust 与 Wong，2026）
- [[llm-interaction-depth-task-quality-recall-2026]] — 学生问什么要紧：大语言模型互动深度、任务质量与即时回忆（Tsiligkiris，2026）
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+：面向教育性大语言模型提示的实时教练
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — 面向新闻学批判性人工智能素养的大语言模型任务分类法
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: measuring & mitigating accessibility disparities in LLM access
- [[principal-trait-analysis-human-ai-skills-2026]] — 主特质分析：人机协作的数据驱动特质
- [[llms-text-linguistics-teaching-2026]] — 文本语言学教学中的大语言模型
- [[idea-framework-metacognitive-genai-2026]] — 面向元认知受调节的生成式人工智能使用的 IDEA 框架
- [[lin-llm-interactive-lesson-generation]] — 大语言模型生成互动式辅导培训课（Lin 等，2025）
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO 人工智能指南翻译到化学教育；认识漂移
- [[isaza-chatgpt-engineering-prompting-2026]] — 提示行为预测工科学生的表现
- [[student-ai-conversations-cognitive-engagement-2026]] — 学生与人工智能对话中与学科关联的 Bloom 层级认知投入（Chang 与 Li，2026）
- [[yasar-llms-iterative-pedagogical-design-2026]] — 大语言模型作为迭代式教学设计中的代理
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — 提示工程对提示素养：一个五阶段的以人为本生成式人工智能投入框架，含五步提示素养循环（Miles、Haber-Curran 与 Arar，2026）
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — 提示工程与模型选择作为人工智能反馈质量的预测因子（Jacobsen 等，2026）
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing

- [[middle-school-genai-steam-interactions-2026]] — 中学 STEAM 小组在 47.1% 的提示中逐字照抄了讲师的指令
