---
title: 学习设计
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:23-04:00"
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy]
translation_of: concepts/learning-design
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

> **学习设计**（亦称*教学设计*）— 通过分析学习需求，并设计、开发、实施与评价教学材料与活动，来系统化地创造有效学习体验的过程。人工智能正在改变学习设计：它自动化内容创建、促成[[adaptive-learning|适应性学习]]路径、支持数据驱动的迭代，并增强 — 而非取代 — 教学设计者的角色。

## 值得思考的问题

- 想想你体验过或设计过的一门课程或一节课。哪里是“教什么”（课程）的终点、“怎么教”（学习设计）的起点 — 两者又是如何互动的？
- 一个常见假设是更好的人工智能熟练度会自动产出更好的教育内容。本页用证据反驳了这一点：决定学习效果的是显性的教学结构 — 而非只是人工智能熟练度。你在哪里见过令人印象深刻却教不了人的产出？
- 如果一个人工智能工具能从一条提示生成整门课程，哪些人类决策变得更重要而非更次要？本页论证人工智能增强而非取代教学设计者的角色 — 那种被增强的角色会是什么样子？
- 像 ADDIE 这样的一些教学设计模型被当作僵化、线性的步骤使用。但本页把它们当作迭代的、灵活的规划启发式。什么时候过于刻板地遵循流程会损害好的设计？
- 本页表明，以教学为基础的提问 — 例如基于学习理论的五步框架 — 显著改善了高阶结果。如果你要构建一个人工智能导师，你会把什么编码进一个显性的设计层，使它的教学策略保持可追溯与可复现？

## 引言

学习设计桥接人工智能能力与有效教学法。[[curriculum-design]]处理的是在项目层面教*什么*，而学习设计处理的是在课程与课堂层面*怎么*教。本知识库的文章既探索人工智能作为学习设计者的工具，也探索构建有效[[intelligent-tutoring|人工智能辅导]]系统的学习设计原则。

这种设计工作在实践中究竟涉及什么，本身是一个经验问题。[[tang-chatbots-learning-design-2026|Tang 等人（2026）]]编目了五名新手学习设计者与嵌入设计工具的聊天机器人之间的 1,378 个设计者—机器人轮次，发现对话聚集在预期学习成果与教学方法上，而非内容生成上。设计者在把课程成分转化为具体任务时，反复回到成果作为对齐检查，而助手的角色在不同阶段间转移 — 从澄清术语，到支持任务设计，再到截止前跑一遍核验。按这一证据，设计支持与其说是产出材料，不如说是保持设计意图的连贯。

学习分析与生成式人工智能支持设计的不同部分：在一所澳大利亚大学的 11 个焦点小组中，分析话语与情境和课程层面的问题解决共现最多（0.32），而 GenAI 话语集中于评估设计（0.26）与为学生自主性而设计（0.15）（[[claassen-learning-analytics-genai-learning-design-2026|Claassen 等人（2026）]]）。

### 关键研究主题

**人工智能辅助的内容创建**是最直接具有变革性的应用。**[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]**提出一个把生成式人工智能与 LaTeX 和 Python 整合以自动化[[stem-education|STEM]]材料创建的六阶段架构，在 8 个模块与 28 个项目情境上验证，学生质量评分 8.5–9.9/10。**[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**使用一个围绕 ADDIE 模型结构化的多代理框架，由基于角色的代理（教学教师、教学设计者、课程协调者）协作生成完整课程材料。**[[courseblueprint-adaptive-video-generation|CourseBlueprint]]**提供一个结构化的流水线，用于基于课程语料的适应性[[pedagogy|教学]][[video-education|视频生成]]，表明显性的教学结构 — 而非只是人工智能熟练度 — 对教育内容生成至关重要。[[generative-ai|生成式人工智能]]平台还能在其产出的内容中体现学习设计原则：[[ai-modeling-problem-generation-platform-2026|一个生成数学建模问题的人工智能平台]]把既定设计原则与[[prompt-engineering|检索增强生成]]相结合，通过 ADDIE 方法开发出有教学依据的任务与推荐，这是常规内容生成器所缺乏的。然而，这类人工智能辅助内容与课程生成的回报受教师自身专长所中介：[[choi-teacher-ai-interaction-lesson-design-2026|Choi 等人（2026）]]发现，经验丰富的教师批判性地把人工智能生成的课程想法适配于学生与情境（重新提问并扩充输出），而新手倾向于直接接受人工智能的建议 — 因此人工智能内容工具的教学价值取决于教师的经验与人工智能熟练度，而非工具本身。对[[wang-teacher-ai-co-design-review-2026|教师—人工智能协同设计学习任务]]（Wang、Liu 与 Islam 2026）的系统综述在 28 项研究（2015–2025）上于规模层面确认了这一模式：GenAI 主要用于课程规划、提示生成与创意构想，而主导的协作模式是人工智能作为助手/内容生成者，而非更完整的共同设计者 — 其中效率、响应性、[[creativity]]与[[equity-in-ai-education|公平]]反复作为可供性出现。[[talebzadeh-ai-group-activity-roles-2026|Talebzadeh（2026）]]为小组活动设计锐化了教师专长发现：无论对人工智能熟悉程度如何，经验丰富的教师在人工智能设计的合作活动中比新手产出更丰富、更具协同、更对齐 ZPD 的角色架构，把“教学提示素养”框定为把人工智能输出转化为有效[[collaborative-learning|差异化小组学习]]的杠杆。

生成材料不足之处在于课程契合：七名数学教师给人工智能生成的生产性失败问题在总体质量上接近人类出的题（M = 17.19 对 17.43/25），但在课程对齐上更低（M = 2.57 对 3.29），因此生成的问题仍需在长度、阅读水平与视觉上编辑（[[rhaimi-productivemath-2025|Rhaimi 等人（2025）]]）。

**有教学依据的人工智能辅导**把教学设计原则应用于人工智能系统设计。**[[didactical-teacher-assistant-dimensional-modeling|Brisson 等人]]**构建了一个教学法驱动的[[llm]]教师助手，其辅导策略被编码在一个显性的外部层 — 使内容选择与教学法结构化可追溯、可复现，直接回应了[[rethinking-scaffolding-llm-tutors]]中的不透明关切。**[[instructional-guidance-genai-learning|Hou 等人]]**证明了一个基于生成式[[learning-theories|学习理论]]的五步[[prompt-engineering|提问]]框架显著改善了高阶认知结果，表明教学指导 — 而非只是人工智能可得性 — 决定学习效果。两者都连接到[[scaffolding]]与[[intelligent-tutoring]]。

**框架与评价**提供了结构化的方法。**[[bridging-instructional-design-framework-math]]**与**[[cotal-formative-assessment-scoring-2026|CoTAL]]**示范了[[human-in-the-loop-ai|人在环]]设计原则。**[[genai-mindtool-generative-learning]]**把人工智能定位为“心智工具” — 一个延伸而非取代学习者思维的认知伙伴 — 直接把教学设计理论应用于人工智能整合。**[[ludia-udl-ai-thought-partner-2026|LUDIA]]**应用通用学习设计原则，为教育者创建一个无障碍的人工智能思考伙伴，把教学设计连接到[[inclusive-learning]]。**[[airis-cognitively-activated-ai-physics-2026|AIRIS]]**（激活—探询—反思）是一个任务结构化框架，用于认知激活的人工智能使用，它界定人工智能的贡献，使预测、解释与评价仍属学习者 — 这是扎根于[[self-regulated-learning]]、认知负荷理论与[[human-ai-collaboration]]的探询循环的人工智能特定改编。与这些设计框架互补，[[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn 等人（2026）的分类法]]提供的是*分类*而非设计方法：六个类别（学习目标、内容、表征形式、认识论[[student-engagement|参与]]、社会设计、产物）让设计者与[[research-methods-aied|研究者]]通过显明学习者为何、以何、如何、用什么、与谁接触 GenAI，来描述、比较并设想 GenAI 学习活动 — 它是作为边界对象经后数字对话构建的。智慧课堂框架把它延伸到[[teacher-education|教师教育]]：[[instructional-design-proficiency-masters-math-2026|Zhu、Liang、Mao 与 Wang（2026）]]为智慧教育提出一个三维框架 — 学习效果、信息与通信技术（ICT）与课堂组织 — 并在一门[[math-education|数学]]教育硕士课程中实例化之，该课程整合了[[automated-assessment|自动评分]]、个性化推荐与课前、课中、课后阶段的多元[[ai-feedback-quality|人工智能反馈]]。一项准实验显示，学生制定精确、有专业依据的教学目标的能力有显著提升，产生了可迁移的**D-T-E 模型**（学科需求—技术赋能—评价循环） — 这是面向把智慧教育概念付诸实际教学设计实践的[[educational-development|教师教育者]]的[[discipline-specific-aied|学科特定]]指导。

**为触及而设计。** Halani 的七杠杆框架对每个课程情境提问：当学生独自面对人工智能时，其中哪些仍然运作？像改变分数认证什么、或没有思考就无法完成的任务这样的结构性举措，比告诉学生过程要紧走得更远（[[halani-designing-for-reach-2026|Halani，2026]]）。

**约束工具以保护思维。** 一个为期九周的论辩写作设计编排了由教师界定范围的聊天机器人 — 它们提问并拒绝生成学生散文 — 而四名高中生从被动的人工智能消费者转变为敢于反驳输出的评价者；与增益同步的是策略性约束，而非不受限制的生成能力（[[making-ai-annoying-constrained-writing-2026|Konradt、Boote 与 Taub（2026）]]）。

**评分规则引导的提问作为设计杠杆。** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar 等人（2026）]]证明评分规则充当人类教学意图与机器推断之间的中介界面：把评估标准当作可修订的设计制品 — 而非固定工具 — 并与大语言模型迭代地共同精炼它们，使学生设计工作上的大语言模型—人类一致性从 54.75% 提高到 81.25%。为大语言模型设计的评分规则必须平衡精确与灵活 — 太含糊引来自由解释，太僵化则把模型沦为模式匹配 — 而角色感知的提问（教师、同侪评审、基金评审）产生各异的评价性反馈。这把评分规则工程定位为塑造人工智能评价行为的具体学习设计实践，人在环监督仍不可或缺。

**面向教学设计的人工智能代理**把该领域延伸到[[agentic-ai|代理式人工智能]]。**[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]**是第一个标准化的、有理论依据的基准，用于评价基于大语言模型的教学设计代理 — 其 25,795 个情境的情境矩阵（51 个情境变量 × 33 个来自 ADDIE 的 ISD 子步骤）表明，扎根于经典 ISD 框架（ADDIE、Dick & Carey、快速原型 ISD）的代理优于无理论代理，经验地验证了教学设计是一个结构化纪律，而非通用提问任务。代理不只是设计的*构建者*，也是*批评者*：[[ai-web-agents-lesson-design-2025|Wang、Mitchell 与 Piech（2025）]]使用一个自主网络代理，像学生一样浏览一个多步骤的在线课程，在真实学习者参与*之前*评价一个学习设计 — 它对学生体验的描述预测新手将在哪里流失，并浮现可行动的设计反馈，优于每个基线乃至一个模拟的学生群体（在一门全局 CS1 课程上）。这把上线前的、代理式评价框定为人类设计迭代的低成本补充。**[[wang-multi-agent-systems-learning-designers-2025]]**与**[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**探索围绕教学设计模型编排基于角色的代理的多代理框架，而**[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]**考察教师与代理如何共同应用技术—教学—内容知识。这项工作把教学设计连接到[[benchmark|基准测试]]、[[ai-ed-evaluation]]与大规模[[curriculum-design|课程]]的设计。

### 与相关概念的关联

学习设计是[[ai-education|人工智能教育]]的桥接学科 — 它连接[[curriculum-design]]（教什么）与[[scaffolding]]（如何支持学习者）、[[educational-development]]（如何培养教育者）以及[[generative-ai]]（工具本身）。它与[[teacher-role]]紧密耦合，因为人工智能工具重塑了学习设计者与教师所做的事，也与[[ai-literacy]]耦合，因为有效的人工智能整合要求教育者理解人工智能的能力与局限。设计工作最终落实为一个*活动次序*：[[pedagogical-patterns|教学法模式]]编目经过测试的招式次序，因此设计者可以决定人工智能在课的何处上场，而不只是包含什么。[[learning-sciences|学习科学]]是这些原则背后的研究领域：本页覆盖创造学习体验的专业实践，而学习科学则对该实践及其设计做经验研究，并产生学习设计进而操作化的认知、动机与社会原则。

### 学习设计如何决定学习增益

学习设计是决定人工智能产出[[learning-gains|学习增益]]还是只是人工智能抬高的表现的杠杆。知识库的证据是一致的：**同一个人工智能工具依围绕它的学习体验如何设计，可以产生巨大增益或净伤害。** [[instructional-guidance-genai-learning|Hou 等人]]表明，一个基于学习理论的五步提问框架显著改善了高阶认知结果，而单有人工智能可得性则不然；[[genai-mindtool-generative-learning|心智工具]]与[[airis-cognitively-activated-ai-physics-2026|AIRIS]]框架保全了学习者的认知工作，从而得到持久增益（而非任务效率）。保护[[learning-gains]]的设计选择 — 要求学生先尝试的脚手架、带无辅助结局测量的[[formative-assessment]]、以及使学习者始终是行动者的教学结构 — 镜像了该领域的发现（见[[learning-gains]]）：当人工智能教练时是强增益，当它作答时是伤害。反之，设计拙劣的人工智能整合课程沦为[[cognitive-offloading|表现—学习差距]]的牺牲品，表面的成功掩盖了没有学习。

### 面向设计者与开发者的实践指导

对教学设计者、课程开发者以及构建人工智能辅助学习体验的工程师而言，知识库的发现转化为可行动的实践。在实践本身之前值得标出一条边界：本页所描述的学习设计是为已知队列设计一门课程，而同样原则被烤进一个将由许多课程 — 由设计者永远不会遇见的人讲授 — 使用的产品中，则是[[educational-technology-developers]]的工作，在那里默认值、可配置性与文档承载教学分量：

**把人工智能生成扎根于一个结构化的教学模型。** 人工智能内容的好坏只取决于它背后的教学结构 — 是显性结构而非人工智能熟练度决定质量。围绕一个公认的模型（ADDIE、Dick & Carey、快速原型）设计，并显式编码教学决策，而非依赖模型去推断它们。（[[courseblueprint-adaptive-video-generation]]）（[[jeon-isd-agent-bench-2026]]）（[[didactical-teacher-assistant-dimensional-modeling]]）

**除了教学模型，还要采纳一个原则层面的框架。** 课程层面的模型结构一个设计；一个已发表的框架设定许多设计都应满足的标准。一个值得完整阅读的例子是 Digital Promise 的*Powerful Learning with Emerging Technology*，它把指导组织在三个原则之下 — 循证的、以学习者为中心的、建设技能的 — 每个都展开为实践与策略，并把[[privacy]]、[[explainable-ai|可解释性]]与公平附加到特定实践上，作为安全义务而非可选项。（[[powerful-learning-with-emerging-technology-2025]]）

**把人工智能配置匹配到任务，而非匹配到复杂程度。** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko（2026）]]区分四个层 — 提示、情境、载体与已验证的循环 — 并应用一个最小充分层原则：使用能给出可验证结果的最不复杂配置，因为增加编排会带来协调、核验、隐私与理解的代价。

**使用基于角色的多代理工作流进行内容生产。** 不用一个通用提示，而是编排不同的代理/角色（教学教师、教学设计者、课程协调者）通过一条明确的流水线协作 — 这镜像真实课程团队如何工作，并产出比单一提示更完整的材料。（[[instructional-agents-multi-agent-course-gen]]）（[[wang-multi-agent-systems-learning-designers-2025]]）

**提供教学指导，而非只是人工智能可得性。** 无论学习者直接与人工智能互动，还是与人工智能生成的材料互动，建立在学习理论上的指导（例如扎根于生成式学习原则的逐步提问[[scaffolding|支架]]）驱动高阶结果；单有可得性则不然。围绕心智如何学习来设计学习活动，并把人工智能当作延伸思维而非取代思维的认知“心智工具”。（[[instructional-guidance-genai-learning]]）（[[genai-mindtool-generative-learning]]）

**对遗忘建模，并在衰退最严重处安排复习。** G4L 用一条由经过时间与重复次数驱动的艾宾浩斯遗忘曲线来表示知识衰退，并优先处理最易受衰退影响而非最近被评分过的单元（[[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács（2026）]]）。

Fowlin 等人（2026）为决定人工智能在哪里进场增加了一个操作步骤：把一个活动解绑为最好独立完成的成分与最好与人工智能耦合的成分，使教育者的判断处于这一切分的中心（[[fowlin-operationalizing-learning-principles-ai|Fowlin 等人（2026）]]）。

**使内容可追溯、可复核。** 让人工智能输出先经人类设计者复核与纠正再到达学习者，并结构化人工智能生成，使教学理据（为何是这些内容、按此顺序）可被检视 — 这同时回应质量问题与损害[[trust]]的不透明关切。（[[bridging-instructional-design-framework-math]]）（[[cotal-formative-assessment-scoring-2026]]）

- **在脚本阶段而非合成之后复核人工智能生成的媒体。** PedaCo 把教育者的复核放在脚本上 — 在那里教学错误修复起来便宜 — 而先于任何渲染；被评为教学效度的分数从 3.07 升至 3.86，而自动的合成后层只改善了五个维度中的两个（[[ai-video-dual-gatekeeping-2026|Kim、Baek 与 Kwak（2026）]]）。

**从一开始就为[[accessibility]]设计。** 在构建人工智能工具与人工智能生成的材料时应用[[universal-design-for-learning|UDL]]原则，使其服务多样化的学习者，而非事后改造无障碍。（[[ludia-udl-ai-thought-partner-2026]]）

**为交付媒介做规划。** 面向[[online-teaching-and-learning|在线教与学]]的教学设计不是线下设计的中性转译 — 媒介改变哪些脚手架、评估与互动是可行的，而人工智能同时放大了机会（可扩展的[[personalized-learning|个性化]]、常在的支持）与设计者必须规划的风险（[[academic-integrity|诚信]]、[[cognitive-offloading|认知外包]]）。在线环境中要像面对面一样刻意地设计人工智能的教学包装。

**对照基准而非凭感觉评价。** 如果你在构建一个教学设计代理，就对照一个标准化的、有理论依据的基准（例如[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]）评价它，从而可以测量扎根于真实 ISD 框架是否真的比通用大语言模型改善输出。（[[jeon-isd-agent-bench-2026]]）

- **人工智能正在重塑教学设计实践。** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar 与 Ilgaz（2026）]][[meta-analysis-systematic-review|系统综述]]了 28 项研究（2020–2025），发现人工智能协助设计者进行内容生成、模板与个性化，并被概念化为同事/协作者/伙伴而非只是工具 — 尽管教学对齐与实践者准备度仍是挑战。

## 关联概念

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — 教学法伙伴关系
- [[online-teaching-and-learning]] — 在线教与学
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] — 总括：人工智能教育中的教学法与教学策略
- [[stakeholders]] — 总括：人工智能教育中的人与受众（学习者、教师、设计者、管理者、政策制定者）

## 关联文章

- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — 学习设计决策中的 LA 与 GenAI
- [[tang-chatbots-learning-design-2026]] — 学习设计中的聊天机器人使用：设计者沉溺于成果与教学法而非内容生成（Tang 等人 2026）
- [[choi-teacher-ai-interaction-lesson-design-2026]] — 跨经验与人工智能熟练度的课程设计中的教师—人工智能互动模式（Choi 等人 2026）
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — 高等教育中的人工智能：参与 + 教学方法的中介作用
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — 分类 GenAI 学习活动的分类法（边界对象）
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents：自主网络代理在学生在场前评价课程设计并预测学生流失（Wang, Mitchell & Piech 2025）
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review（Kibar & Ilgaz 2026）
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: constraint in AI-supported writing（Konradt, Boote & Taub 2026）
- [[instructional-design-proficiency-masters-math-2026]] — 智慧课堂模型与 D-T-E 循环改善数学教育硕士的教学设计熟练度（Zhu 等人 2026）
- [[ai-modeling-problem-generation-platform-2026]] — 生成数学建模问题的人工智能平台（ADDIE、RAG）
- [[wang-teacher-ai-co-design-review-2026]] — 教师—人工智能协同设计学习任务：趋势与视角（Wang 等人 2026）
- [[talebzadeh-ai-group-activity-roles-2026]] — 人工智能设计的差异化小组活动中的角色架构（Talebzadeh 2026）
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
