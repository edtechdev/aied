---
title: 科学教育
type: concept
pedagogy: [inquiry-based-learning]
technology: [generative-ai]
discipline: [science education, stem education]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-09T19:06:57-04:00"
translation_of: concepts/science-education
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **[[stem-education|科学教育]]** —— 研究并实践学生如何学习科学、如何教授科学的领域，如今正被生成式 AI（LLM、模拟、虚拟实验室与 AI 评分）在[[physics-education|物理]]、化学和[[biology-education|生物]]中重塑。本知识库中的科学教育文章揭示了一个正在议价核心张力的领域：AI 明确支持探究、迷思概念纠正与规模化评价，但其价值取决于教学设计，且伴随[[cognitive-offloading|过度依赖]]、幻觉与去人化、逐利化学习的真实风险。

## 值得思考的问题

- 本页以一个张力开篇：AI 明确支持探究与迷思概念纠正且可规模化，但其价值完全取决于教学设计。在阅读之前，回想一下：你在科学教学中用过的哪个工具曾显得强大却在教学上是空洞的 —— 造成差别的是什么？
- 一个由 AI 促进的物理探究在学生施压下"发明"了无人测量过的质量值。这一事件揭示了什么关于在科学中把 AI 输出当作权威的问题，学生又该如何被训练去对待一个听起来很自信的答案？
- 研究表明，AI 目前作为可规模化的内容生成器，可能比作为交互式辅导者增加更多价值 —— 在一项研究中，精心撰写的概念转变文本（专家或 AI 制作）胜过了被提示的 AI 对话。这令你意外吗，它又暗示了当下 AI 在科学中的真正教学回报在哪里？
- AI 以与人类评分者高度一致的方式评阅了 10,364 份手写物理评价，而多模态模型在复杂推理与图示生成上仍存在差距。"真实、表征密集"的科学工作中，究竟是什么可能在抵抗自动评价？
- 物理学生呈现出惊人的信任-效用差距 —— 使用率高、信任度低 —— 并分裂为务实用户与怀疑的非用户。如果学生自己就是经过领域校准的怀疑者，那这对科学课堂中关于 AI 的一刀切政策意味着什么？
- 一个批判声音警告科学教育的"AI 殖民化" —— 未经同意的攫取、算法单一文化、去人化的改革。在阅读之前，你认为 AI 在科学教育中的好处正在哪里被过度推销，而一种以人为本、以正义为导向的替代方案会是什么样子？

## 引言

科学教育是 AI 的承诺与其局限碰撞得最显眼的地方，因为这些学科要求严谨的[[multimodal]]推理 —— 物理中的视觉空间思维、化学中的实验技能、生物中的生物体层级系统 —— 外加结构良好、可核验的内容，而这正是 LLM 擅长的。此处综合的十三篇文章横跨三个学科与各个层级，从[[k-12]]中学课堂到[[higher-ed]]大学课程与[[teacher-education|职前教师]]项目。贯穿它们的一致图景是：AI 作为答案生成器时表现最差，作为嵌入的伙伴时表现最好 —— 一个共同探究者、一个内容生成器、一个虚拟实验助手 —— 其贡献由[[learning-design|教学设计]]与周边的教学结构决定。

一项为期四周的 GCSE 科学 AI 复习平台随机评估为这一图景给出了因果估计 —— Hedges' g = 0.33，且无证据显示该效应因学科或弱势而异 —— 其对照的已是技术丰富的反事实，因此该数字是 AI 带来的增值，而非 AI 对比一无所有（[[ai-tutoring-micro-rct-gcse-science-2026|Harrison 等（2026）]]）。

这些课堂层面的发现嵌在一个更大的方法论问题之中。[[ai-methodologies-science-education-research-2026|Martin、Rost、Koenen 与 Graulich（2026）]]主张科学教育研究当前可能正处于一次认识论迭代之中，援引 Hasok Chang（2004）对知识相继阶段的论述，即知识迭代地朝向特定认识目标构建。在他们的解读中，AI 方法论可能不仅改变该领域分析学生学习的方式，还改变它优先考虑哪些认识目标、标准与实践。他们提出一个七阶段的反思框架（问题框定；工具化与测量；实验与基于证据的推断；比较与复制；建立规范与共识；实施及其后果；以及持续精进），以测温法约 150 年的发展加以说明，并将其作为一件反思仪器而非经过验证的方法或经验发现来呈现。

### 虚拟实验室与模拟

AI 正大幅降低创建定制化、具身的科学仪器的门槛。[[genai-ar-physics-simulation-prompt-2026|Levy 等]]表明，一个四要素的自然语言提示即可生成一个手势控制的增强现实物理模拟（捏合与张开的动作调节一盏虚拟灯的波长），且 86% 的试点学生报告更高的[[student-engagement|投入度]]。类似地，[[ai-generated-smartphone-circular-motion-lab-2026|Suñer 等]]完全通过提示生成了一个基于浏览器的旋转实验室，并经视频分析验证误差优于 1%。这些工作把[[generative-ai|生成式 AI]]重新框定为一种[[prompt-engineering|编程]]工具，让教师围绕[[pedagogy|教学意图]]设计软件，而非让活动迁就固定应用 —— 推进了[[embodied-learning|具身]]的与[[simulation]]为基础的学习。在[[chemistry-education]]中，[[context-based-ai-secondary-chemistry-2026|Abdikayumova 与 Madybekova]]把 PhET 模拟与 ChatGPT 辅导嵌入 10 年级学生的情境化 7E 探究循环，取得了显著高于任一单独组件的成就与投入 —— 证明情境化、结构化探究与自适应 AI 协同作用。对学习者在建模环境内如何工作的行为分析强化了这一设计教训：追踪 315 名在 VERA 中构建生态模型的在线学习者，[[an-goel-self-directed-modeling-2026|An、Hammock 与 Goel（2025）]]发现从事全周期、假设驱动探索的学习者构建出最复杂、最多样的模型，而观察密集型学习者大多复制已有模型 —— 提示科学建模工具应主动促进全周期的探索行为，而非让学习者停留在被动、以观察为主的模式中。

### AI 辅导者与探究式学习

探究式学习是一个核心主题。[[jiang-chatgpt-inquiry-steam-review-2026|Jiang 等]]对 24 项研究的[[meta-analysis-systematic-review|系统综述]]把 ChatGPT 定位为一个"AI 驱动的共同探究者"，主要用于[[inquiry-based-learning|STEAM 探究]]的概念化、调查与讨论阶段，提升表现、[[critical-thinking|批判性思维]]与投入 —— 但当输出被当作权威时，也有过度依赖、幻觉与浅薄结论的风险。[[ai-supported-inquiry-photosynthesis-respiration-2026|Aydın]]发现八周的 AI 支持引导探究在光合作用与呼吸作用的概念理解上为职前教师带来大幅提升，而[[ai-literacy|AI 素养]]与[[computational-thinking|计算思维]]无显著变化 —— 提示即使更广的能力需要更长或更明确的教导，学科学习也能改善。[[embodied-inquiry-ai-facilitator-physics-2026|Tufino 与 Damiani]]表明 AI 可以搭建 ISLE 探究的认识论内核，同时仍局限于言语通道，但发现这种促进是脆弱的：在学生施压下，AI"发明"了无人测量过的质量值，凸显了[[hallucination-risk]]与必须核验、而非假定 AI 保真度的必要。[[airis-cognitively-activated-ai-physics-2026|Kuhn 等]]提出 AIRIS 框架（Activate–Inquire–Reflect），使预测、解释与评价保持为不可委派给机器的人类任务，并呼吁做"撤除条件"实验，检验学习能否在移除 AI 后存活 —— 这是对侵蚀认识实践的"温水煮蛙问题"的直接回应。对 AI 生成课程计划的专家评判把这一设计教训延伸到与[[curriculum-design|课程]]对齐的科学：[[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu、Surmeli 与 Yildirim（2026）]]让十一位土耳其科学教育专家评估两类 AI 生成的课程计划，发现它们在"呈现解决方案"上得分最高，而在 [[design-based-research|工程式设计学习]]（EDBL）的技能上最低（通用 x̄ = 37.45；教育导向 x̄ = 41.45）—— 在模拟设计式学习所定义的迭代、过程导向阶段（原型制作、失败分析、修订、反思性重测）上存在共同弱点 —— 且 11 位专家中只有 3 位把任一计划直接判为"可应用"，有 7 位评为"经纠正后可应用"。

一篇概念综述从理论上为物质通道奠基：科学是一个依据物理证据修正主张的开放系统，而语言模型在推理时对证据是操作上封闭的（[[nature-of-science-generative-ai-2026|Muminova 与 Mamatkulov，2026]]）。

### 迷思概念与概念转变

在概念转变上，证据是细致且部分反直觉的。[[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan]]在一项 413 名学生的 Solomon 四组设计中发现，专家撰写与 AI 生成的[[refutation-text|概念转变文本]]在减少热与温度[[misconceptions]]上同等且显著地有效，胜过互动 AI 对话，而后者相对对照毫无优势 —— 把 AI 当下的教学价值定位为可规模化的[[generative-ai|内容生成器]]，而非交互式辅导者，且收益集中于高成就学生（一个[[equity-in-ai-education|公平]]关切）。这得到[[probing-ai-generated-physics-solutions-2026|Borse 等]]的加强：他们表明提示的具体性塑造物理解答质量，且 MAPE 引导的批评比独立的[[problem-solving|问题解决]]更能让学生准备好评价 AI 输出，把 AI 的易错性当作一项[[critical-thinking]]学习资源。

### AI 评分与评价

AI 评分正在高风险作业上迅速推进。[[ai-grading-handwritten-physics-2026|Pathak 等]]评阅了 10,364 页扫描的手写物理评价（包括一场全国奥林匹克竞赛与队伍选拔营），取得很高的分数相关（0.91–0.97），并复原出与人类评分相同的五人队伍 —— 主张在评分者控制之下、辅以详细的物理专用评分细则时，AI 作为有效的[[assessment-validity|第二读者]]与审计工具运作。简答题自动标记有一条更长、更基础的 transformer 谱系：[[auto-marking-short-answer-science-2026|Morley 等的范围综述]]覆盖 21 项研究（2017–2024 年初），发现 BERT 系列模型在 2021 年之前主导了科学简答题的自动标记，之后自约 2022 年起通过提示采用基于 GPT 的方法；用领域数据（教科书、评分细则、进一步预训练）增强的模型一贯优于基线；而对[[educational-measurement|信度]]、[[explainable-ai|可解释性]]与[[bias-mitigation|公平]]的未解威胁，主张此类自动标记器应作为[[teacher-role|人类考官]]的辅助而非替代。然而[[omniphys-multimodal-physics-benchmark-2026|Chen 等]]的 OmniPhys [[benchmark]]揭示，多模态 LLM 在复杂推理与图示*生成*上仍存在显著差距，警示不要在定义深度学科能力的真实、表征密集任务上过度信任[[automated-assessment|自动化]]的物理评价。化学的对应工作 sharpen 了格式依赖性：[[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros 与 Kortemeyer]]用一个多模态[[llm]]评阅了 296 名学生的普通化学期末手写答卷，发现对文本与化学反应作答与助教高度一致，但在绘图与作图上表现*差于随机*（背景网格干扰 AI 视觉）—— 证据表明科学中可靠的 AI 评分按作答格式具有选择性，并要求对图示类题目采用基于置信度的降级交由[[human-in-the-loop-ai|人类考官]]，而非一种统一的"全评"方法。

### 教师认知与批判视角

教师的准备度是决定性的。[[pre-service-science-teachers-ai-perceptions-2026|Amponsah 等]]发现加纳职前科学教师对 AI 持积极态度与强烈意向，但实际课堂使用仅为中等 —— 一个意向-使用差距，指出[[teacher-ai-competency]]与[[governance|机构]]支持才是真正的杠杆。[[becker-chatgpt-typology-physics-2026|Becker 等]]与[[fouad-bentley-trust-utility-gap-physics-2026|Fouad 与 Bentley]]记录道，物理学生是经过领域校准的怀疑者，而非不加批判的采用者：一个 50 分的信任-效用差距（91% 使用，41% 信任）与两种截然不同的用户画像（务实用户对怀疑的非用户），挑战了一刀切政策。与技术乐观主义相抗衡，[[avraamidou-ai-colonization-science-education|Avraamidou]]警告科学教育的"AI 殖民化" —— 未经同意的攫取、算法单一文化与去人化、以利润为中心的改革 —— 并呼吁一种以正义优先于利润的女性主义、以人为本的 AI，而[[ai-science-chemistry-education-systematic-review-2025|Erümit 与 Özdemir Sarıalioğlu]]对 18 项研究的系统综述强调了[[ethics|伦理]]风险（偏见、幻觉、[[academic-integrity|抄袭]]、独立思考的侵蚀）与对[[teacher-education|教师培训]]及有意识使用的需要。贯穿全部十三篇文章的集体教训是：AI 在科学教育中，当嵌入健全的探究、[[scaffolding]]与[[assessment]]设计时带来收益 —— 而当它取代学生必须亲自完成的认识工作时则损害学习。

[[llm-benchmark-secondary-science-topics-2026|Schroeder 等（2026）]]追问通用模型对科学内容本身处理得如何：在与 NGSS 对齐的初中（1,078 题）与高中（1,150 题）题组上，九个开放权重模型大多超过 90%，模型大小与准确度无关，且一位科学教师判定 240 个抽样题目中的 236 道（98.3%）对齐，同时标记出图示、数据解读与数学表征的缺失 —— 纯文本题目无法演练每一项 NGSS 表现期望。高题目难度与低区分度留下一个开放问题：是题目需要改进，还是中学科学对这一类模型已变得可解？作者呼吁以多轮、基于证据的反馈为缺失的标准。

## 关联概念

- [[stem-education]]
- [[physics-education]]
- [[chemistry-education]]
- [[biology-education]]
- [[inquiry-based-learning]]
- [[misconceptions]]
- [[simulation]]
- [[generative-ai]]

## 关联文章

- [[ai-methodologies-science-education-research-2026]] — 七阶段认识论迭代框架，用于反思 AI 方法论可能如何转变科学教育研究（Martin 等，2026）
- [[ai-science-chemistry-education-systematic-review-2025]] — AI 在科学与化学教育中的系统综述
- [[jiang-chatgpt-inquiry-steam-review-2026]] — ChatGPT 用于 STEAM 中的探究式学习
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — 光合作用与呼吸作用中的 AI 支持引导探究
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — 概念转变文本对 AI 对话：热与温度
- [[ai-grading-handwritten-physics-2026]] — 手写物理评价的大规模 AI 评分
- [[avraamidou-ai-colonization-science-education]] — 关于科学教育 AI 殖民化的批判评论
- [[pre-service-science-teachers-ai-perceptions-2026]] — 职前科学教师的 AI 认知与接受度
- [[ai-assisted-inquiry-ssi-climate]] — AI-Assisted Inquiry in Socio-Scientific Issues on Climate Change
- [[auto-marking-short-answer-science-2026]]
- [[an-goel-self-directed-modeling-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[llm-benchmark-secondary-science-topics-2026]] — A Benchmark for LLM's Understanding of Middle School and High School Science Topics
- [[nature-of-science-generative-ai-2026]] — The nature of science in the age of generative artificial intelligence: Epistemic authority, materiality, and a synergetic response
