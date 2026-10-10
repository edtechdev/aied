---
title: 教育技术平台
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:10-04:00"
connected_faqs: [designing-educational-ai-software]
type: concept
foundations: [ai-education]
pedagogy: [online-teaching-and-learning]
technology: [adaptive-learning, generative-ai, llm, personalized-learning, edtech-platform]
ethics: [equity-in-ai-education]
level: [k 12, higher ed]
confidence: high
connected_resources: [lesson-md, liascript, onmicro-ai]
translation_of: concepts/edtech-platform
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

> **教育技术平台** —— AI借此交付给学习者与教育者的数字系统、学习管理系统（LMS）、辅导系统与在线学习环境。在教育中的AI领域，平台是*基础设施层*，决定了一项AI能力能否抵达学生、如何被部署（开放对专有、集成对独立），以及谁能访问、改造和评估它。本知识库中的研究从多个角度考察平台：其设计、其采用与投入的约束、其机构治理，以及其公平含义。([[access-not-enough-ai-tutoring-2026]])([[oatutor-open-source-adaptive-tutor-2023]])

## 值得思考的问题

- 想想你最近遇到的一个AI辅导或反馈工具。再想想它实际"栖身"何处 —— 打包它的LMS、平台或应用。那个容器感觉像一个中立的交付载体，还是它的设计选择（开放对专有、集成对独立、云端对本地）可能已改变了你能用它做什么？
- 一项研究发现，近半学生从未使用过一个设计良好的AI辅导平台，且重度用户偏向高成就学生。如果一个工具"原则上"有效而学生不用它，真正的问题在于能力还是平台？这对你评估教育技术意味着什么？
- 专有AI平台能把研究者困在少数封闭系统内，而OATutor这样的开放平台让任何人分叉、实验和发表。当AI教育通过封闭、不透明的平台交付时，研究、公平与机构自主性方面会失去什么？
- 平台的商业模式 —— 谁付钱、谁拥有数据、什么被优化 —— 对平台上实际发生的学习有多大塑造作用？你会去哪里看这种影响？
- 一些新的"AI原生"平台用围绕每个学习者构建的多智能体课堂，取代了"一个视频对多个学生"的MOOC模式。在读下去之前，当教学从"一对多对教师"变成"一对一与智能体"，你会担心失去什么？

## 引言

平台位于AI模型或能力与学习者之间。它是把辅导、评估、反馈与管理打包成可用之物的容器 —— 而且关键的是，它通过自己的设计选择、可及性与底层商业模式塑造学习结果。这一概念涵盖Moodle这样的学习管理系统、MOOC这样的大规模在线平台、专门的[[intelligent-tutoring|智能辅导]]系统，以及新兴的智能体化或AI原生课程平台。命名容器不等于命名它的作者：平台是被部署的系统，而决定它做什么的利益相关方是[[educational-technology-developers]] —— 这一点在此重要，因为下述采用、公平偏向与采购的发现，通常是平台触及课堂之前所作设计选择的后果。

## 平台在教育中的AI里做什么

教育中的AI平台履行若干不同职能：

- **交付教学与辅导** —— [[intelligent-tutoring|AI辅导]]与[[intelligent-tutoring]]系统的容器，从嵌入LMS的辅导到独立的适应性辅导平台。
- **管理学习环境** —— 课程组织、注册、进度追踪和传统LMS平台提供的管理。
- **承载评估与反馈** —— [[automated-assessment]]、[[formative-assessment]]与[[feedback|反馈回路]]运行之处。
- **收集与分析学习数据** —— [[learning-analytics]]与[[student-modeling]]的基底。
- **治理访问与部署** —— 关于[[open-source]]对专有、本地对云端、以及哪些机构和学习者可用的决策。

## 本知识库文章的关键发现

### 采用率而非能力，常常是绑定约束

一个平台原则上可以有效却在实践中失败，如果学习者不使用它。对一个[[ai-literacy|AI素养]]（阅读）辅导平台的两项[[rct|随机对照试验]]发现，**近半对照组学生从未使用该平台**，用户平均每周仅使用2–5分钟 —— 远低于产生阅读增益所需的剂量。一位面对面的投入辅导师显著提高了使用率与投入度，却仍未产生成绩增益，且平台用户偏向高成就学生，引发公平关切。([[access-not-enough-ai-tutoring-2026]])

顺序与能力同样重要：一项对100多项AI-in-教育研究（2020–2025）的综述把端到端平台置于采用栈的顶端，论证机构应先奠定形成性评估、领导力容量与共享规范，再去购买把它们规模化的平台（[[raza-farooq-aied-review-2020-2025|Raza与Farooq（2025）]]）。

落差是消息层面的，不是登录层面：在一项为期两年的整群随机试验中，96%的学生试过Khanmigo，但中位学生只在17%出错课次中给它发过消息，且~14.5%的消息携带了真正的数学问题或推理步骤 —— 成本为每名学生每年\\$15（[[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos与Low, 2026]]）。

绑定约束在于AI坐在平台的哪个位置：在一项6,000名初中生的试验中，测得的效应来自练习环境内的结构化触点 —— 每位达到掌握的学生有2.0次"帮我开始"、2.3次出错后讲解和3.2次步骤解释 —— 而单是AI访问几乎没带来增益（[[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos等人（2026）]]）。

### 教育者报告使用哪些工具，以及什么在把关访问

一份关于教育者报告平台选择的罕见普查，来自一项基于九国211名教育者构建的2026年分类法：抵达课堂的工具，不成比例地是那些有免费档位的，因为"有公开免费版本"是一项纳入标准，且被提名最多的是通用助手和媒体生成器，而非专用平台。所列五十种工具中约一半生成图像、音频、视频或幻灯片，而文档接地型助手（NotebookLM、Elicit、SciSpace、Humata、Research Rabbit）构成研究类别中最连贯的簇。专门的[[intelligent-tutoring|辅导]]系统呈现为一个小而学科特定的群体，而非报告使用的中心 —— 这为上述采用问题提供了更宽的框架，在其中平台要与师生早已开着的通用工具争夺注意力。([[typology-generative-ai-tools-education-2026]])

### 平台模式至关重要：开放对专有

- **专有平台**为研究设障：想复制或扩展[[adaptive-learning]]实验的研究者，往往被限制在少数封闭平台内。
- **开放平台**降低了这道门槛。**OATutor**是第一个基于ITS原则构建的开源适应性辅导系统 —— 一个MIT许可的代码库，配Creative Commons代数内容库、[[knowledge-tracing]]掌握估计与内置A/B测试 —— 让研究者分叉、实验并发表完整端到端系统。([[oatutor-open-source-adaptive-tutor-2023]])
- **透明度是前置装载的。** 在同一份对48份平台政策的审计中，数据收集与第三方共享披露得相对较好，而AI专项披露与问责滞后，48家平台中有16家（33%）尽管有可见的AI功能却未作任何有意义的AI披露（[[edtech-privacy-deferral-2026|Nair与Greenstadt, 2026]]）。

- **LMS API限定了游戏集成平台能评估什么。** 一个从Blackboard内容生成可玩世界的高度游戏化试点，无法渲染选择题或开放题，因为学生作用域的token不返回题目内容，也不存在用于提交运行时答案的端点（[[hypergamification-game-engine-lms|Yusubov等人，2026]]）。
- **隔离与成本是平台设计变量。** VISMATIC把无根容器（与JupyterHub不同，它阻止横向移动与主机失陷）与API级进程遥测配对，在单个标称支持10至20人的Raspberry Pi 5节点上运行19名学生和1,880条记录事件（[[vismatic-secure-sandbox-cs-education|Arroyo等人（2026）]]）。

### AI原生平台正在重塑在线教育

平台范式本身在演进。**MAIC**（Massive AI-empowered Course，大规模AI赋能课程）用LLM驱动的多智能体课堂 —— "N个智能体对1个学生" —— 取代了MOOC的"N个学生一个视频"模式，用专门的教师、助手、同学和分析智能体交付规模化的个性化自适应学习，并把课程制作从约\\$25K/60小时降到不足\\$2/30分钟。([[mooc-to-maic]]) 类似地，AI集成的LMS设计提出超越仅工作流型平台，走向带策略门控（有界）AI、形成性提示、间隔复习与教师仪表盘的实时教学支持。([[ai-lms-middle-school-longitudinal]]) 在部署谱的另一端，课堂嵌入的AI必须在真实物理环境中证明可行。Community Builder（[[breideband-community-builder-cobi-2026|CoBi]]）—— 一个用语音识别与语言理解来可视化小组协作话语的全班平台 —— 借助商用麦克风与可扩展的云流水线在嘈杂的初中课堂成功部署，显示实时语音-AI基础设施能在真实的K-12环境中运作，即便界面错配（教师与学生视角对反馈是组级还是班级级的分歧）造成了部署摩擦。

### 基于兴趣与上下文感知的平台功能

平台可以超越表现数据实现个性化。**Taklif.AI**是一个基于学生的**课外兴趣与文化背景**生成大学作业的LLM平台，与[[culturally-relevant-pedagogy]]对齐，从一刀切的作业转向兴趣驱动的投入。([[taklif-ai-interest-based-personalized-assignments]])

## 对设计与研究的启示

1. **为采用率而设计，不只是为能力。** 一个平台的有效性取决于学习者是否真的投入其中；支持结构、上手引导与排程与AI本身同样重要。([[access-not-enough-ai-tutoring-2026]])
2. **把平台结构当作公平杠杆对待。** 谁从平台受益取决于访问、基础设施与投入约束 —— 平台设计必须经[[equity-in-ai-education]]视角检视。([[access-not-enough-ai-tutoring-2026]])
3. **研究优先用开放、可复现的平台。** OATutor这样的开源平台使可复现的适应性学习研究和共享证据基础成为可能。([[oatutor-open-source-adaptive-tutor-2023]])
4. **以治理与边界设计AI原生平台。** 隐私优先的架构、数据最小化、可审计日志与基于角色的访问，随着平台走向AI集成而至关重要 —— 连接到[[privacy]]与[[governance]]关切。([[ai-lms-middle-school-longitudinal]])

隐私可以被建进流水线而非政策：一个在匿名姿态轨迹上训练的课堂事件检测器，让未成年人的面部与外貌线索不进入系统，尽管每种方法在零样本迁移到真实课堂时都损失了准确率，所提出模型的最佳准确率为63.41%（[[privacy-aware-classroom-incident-recognition-2026|Parmar等人（2026）]]）。

5. **用教师的领域语言解释推荐。** 当一个平台的AI功能其解释可理解且有教学意义时，它赢得信任与采用：在一项使用AI分组推荐工具（GrouPer）的被试内实验中，[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor等人（2025）]]发现，以课程语言框定的领域驱动解释，比原始特征重要性解释更显著地提升了教师的可理解性、信任与接受度 —— 且真实课堂使用对完全接受仍然重要。([[xai-teachers-trust-edtech-recommendations-2026]])
6. **把产出证据的系统与评分它的系统分开。** 当智能体能替学习者完成一门课程时，[[credentials-carry-evidence-ai-agents-2026|Srivastava（2026）]]论证，平台必须发出关于学习者推理的同期、可检视的证据，且不能是唯一的评分者 —— 环境、颁发方与验证方应当独立。([[credentials-carry-evidence-ai-agents-2026]])
7. **在设计时而非运行时生成表征。** [[edtech-design-time-generative-ui|Neshaei等人（2026）]]论证运行时适配无法规模化验证，提出把内容编码为模态无关的语义卡片，再由之在发布前生成并经教师批准交互式、音频、简化文本与低带宽变体 —— 消除每学习者的推断成本，尽管未报告原型。

## 关联概念

- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[ai-literacy]]
- [[student-experience]]
- [[teacher-role]]
- [[k-12]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[culturally-relevant-pedagogy]]
- [[stem-education]]
- [[educational-technology-developers]]

## 关联文章
- [[typology-generative-ai-tools-education-2026]] — 211名教育者报告使用什么：九类中的50种工具
- [[making-ai-tutoring-productive-mastery-math-2026]] — 让AI辅导有成效：基于掌握的数学练习
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[access-not-enough-ai-tutoring-2026]] — 采用与投入是AI辅导平台的绑定约束
- [[oatutor-open-source-adaptive-tutor-2023]] — 用于可复现研究的开源适应性辅导平台
- [[mooc-to-maic]] — 从MOOC走向LLM驱动的多智能体AI课堂
- [[ai-lms-middle-school-longitudinal]] — 面向初中、支持有界且隐私优先的AI集成LMS
- [[taklif-ai-interest-based-personalized-assignments]] — 基于兴趣的个性化作业平台
- [[edusim-llm-robotic-simulation-education-2026]] — 面向教育的LLM-机器人模拟平台
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — 高等教育中的生成式社交机器人教学平台
- [[hypergamification-game-engine-lms]] — 集成游戏化的游戏引擎式LMS
- [[edtech-design-time-generative-ui]] — 为生成式UI设计教育技术
- [[lata-ferpa-compliant-local-llm-autograder]] — 符合FERPA的本地LLM自动评分器平台
- [[vismatic-secure-sandbox-cs-education]] — 面向CS教育的安全沙箱平台
- [[learnmate2-llm-adaptive-learning]] — LLM驱动的个性化自适应学习平台
- [[privacy-aware-classroom-incident-recognition-2026]] — 课堂平台中的隐私感知计算机视觉
- [[raza-farooq-aied-review-2020-2025]] — AIED研究与系统的综合综述
- [[credentials-carry-evidence-ai-agents-2026]] — 为其AI智能体工作携带证据的凭证
- [[breideband-community-builder-cobi-2026]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
