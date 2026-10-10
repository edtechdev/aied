---
title: 课程设计
created: "2026-06-02T10:44:35-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
translation_of: concepts/curriculum-design
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

> **课程设计** —— 规划并构建跨课程、项目与机构"教什么"的过程，包括学习目标、内容排序、评估策略与技能进阶。在 AI 时代，课程设计必须在基础知识与新兴的 AI 胜任力之间取得平衡，不仅要决定学生学什么，还要决定他们如何学会与 AI 工具协同工作并批判地评估它们。

## 值得思考的问题

- 课程设计在项目层面追问学生应学什么，而学习设计在课程层面追问如何教。当 AI 重塑一个学科时，你认为这两个层面中哪一个应首先改变？
- 随着 [[generative-ai|生成式 AI]]把实现层面的工作自动化，一些人主张课程必须转向系统设计、抽象与 [[critical-thinking|批判性评估]]。如果低层技能被弱化，你认为学生会失去什么？
- AI 时代的课程重构常被框定为工具熟练度与基础知识之间的平衡。你在哪里见过这种平衡过分偏向某一方？
- SAIL 框架把 AI 素养设计为跨年龄的支架式内容，并旨在处理超越"接入"的更深层"数字鸿沟"。把 AI 素养嵌入整门课程，与增设一门单独的 AI 课程有何不同？
- 如果每个学科现在都需要内嵌 AI 胜任力，那么谁该为课程变革负责——教师、项目，还是机构？教育者又需要什么才能成功完成它？
- 一门课程是跨年份的技能序列，而不只是一份主题清单。这个更长的视角如何改变一个"AI 素养单元"是否真正奏效？

## 引言

课程设计处理的是项目层面教育的*内容*，与处理课程层面*方式*的 [[learning-design]] 互为补充。本知识库中的文章探讨了 AI 如何重塑各学科的课程——从软件工程到建筑再到绿色教育——以及教育者如何设计既内嵌 AI 素养、又不牺牲学科根基的课程。

### 关键研究主题

**为 AI 时代重构课程**是核心挑战。**[[reshaping-cs-education-genai|Lee et al.]]** 综合了关于重塑本科 [[cs-education|计算机科学]]教育的国际工作坊的发现，论证说随着 GenAI 把实现层面的编程自动化，课程必须转向系统设计、抽象与批判性评估——同时弱化低层的实现细节。**[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** 把智能体式软件工程形式化为一个独立学科，配以一套 21 模块的课程，聚焦于管理 [[agentic-ai|AI 智能体]]所需的"意图的演化"与从业者纪律。两者都与 [[ai-literacy]] 和 [[scaffolding]] 相关。

把这一变革视为系统性的而非附加式的，[[rewriting-curriculum-genai-pedagogy-2026|Sabani et al.（2026）]] 把一份范围综述、对 209 条记录的文献计量映射、36 篇文章与十次学术领袖访谈三角互证，归纳出五项转变——包括知识传授让位于能力发展、局部试验让位于机构治理。

**课程映射与分析**用 AI 来理解既有课程。**[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** 分析了 23 份来自 AI 辅助软件工程课程的教学大纲，识别出共同主题——[[prompt-engineering|提示工程]]、与 AI 一同做代码评审、[[ethics|伦理考量]]——并推导出强调"平衡工具熟练度与基础知识"的设计指引。**[[coursegraph-cs-course-comparison-2026|CourseGraph]]** 用计算方法比较各机构的计算机课程结构。

**AI 素养整合**把 AI 胜任力嵌入各学科。**[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** 提供一个可适用于所有年龄与教育阶段的支架式 AI 素养框架，处理第二层与第三层的 [[digital-divide|数字鸿沟]]。**[[tracing-genai-literacy-interaction-patterns]]** 考察 AI 素养如何通过互动模式而发展。**[[hingle-collaborative-ai-literacy-2025]]** 探索协作式的 AI 素养课程开发路径，并与 [[collaborative-learning]] 相连。

LearnAI 展示了内嵌版本的样子：一层由简短报告构成的广泛接触层，嵌在横跨五个学科的 18 门既有课程中（293 名学生），并配有由受过培训的本科生同伴辅导者主持的、自愿报名的一对一共创时段，使能力各异的学习者能在自己的水平上遇到 AI 任务（[[learnai-just-in-time-ai-cocreation-university-2026|Qu et al.（2026）]]）。

实践中的整合落后于框架。[[critical-media-literacy-education-2026|Santos-Albardía et al.（2025）]] 发现，只有 13.8% 的受访教育与新闻专业学生说他们的课程涉及批判性媒介分析，而 97.8% 的人认为它重要；他们的专家访谈把这一缺口追溯到优先重视技术与教学技能、而非媒介教育的教师培训。

一项对 39 项 STEAM 研究（2016—2025）的 PRISMA 综述发现 AI 素养要素中存在平行的失衡：实施发展了技术素养——基础 AI 概念、计算思维、数据素养——却发展不足伦理意识、创造性想象，以及用 AI 进行创造、管理与设计，因此针对每项内容对照它们做审计是实践上的回应（[[niri-steam-ai-literacy-review-2026|Niri et al.，2026]]）。


学生的声音是另一个设计输入：166 名商科应届生中有 84% 希望在自己的单元中学到 GenAI，85% 认为它对就业能力必不可少，而只有 7% 的人从自己的大学学到过它（[[rook-plumb-genai-curricula-student-insights-2026|Rook 与 Plumb（2026）]]）。

一项对 42 项大学前 AI 教育研究的综述发现，课程正从技术内容转向建立在 AI4K12 与"AI 五大观念"等框架之上的胜任力导向模型，[[ai-literacy]] 被当作跨课程的胜任力，而用于评估它的标准化工具仍然缺位（[[caruana-pre-university-ai-education-slr-2026|Caruana et al.（2026）]]）。

教师与雇主只在 26 项 AI 技能中的一项上达成共识——为 AI 增强的工作设定现实的期望——且 26 项中只有三项由半数或以上的教师教授，该报告把这当作高等教育与雇主之间 AI 技能缺口的证据（[[ithaka-sr-ai-skills-college-graduates-2026|Fried（2026）]]）。

K-12 机器学习活动的设计停留在表层：一项 ICE-T 框架背后的综述发现，不可见的使用、按钮交互与模型部署占了被编码的有监督学习活动的近 60%，开放式创造只出现过两次，技术与社会的视角只在约 3% 的活动中同时出现（[[icet-ml-education-trust-2026|Haritz et al.，2026）]]）。

**[[discipline-specific-aied|领域特异]]的课程创新**把课程设计应用于具体领域。**[[genai-architecture-education]]** 探讨生成式 AI 如何重塑建筑设计的 [[pedagogy]]。**[[talebzadeh-ai-green-education-2026]]** 考察 AI 在绿色教育课程中的整合。**[[connected-ai-lesson-planning-vietnam]]** 与 **[[llm-cultural-relevance-k12]]** 处理 [[culturally-relevant-pedagogy|文化响应式的课程设计]]。


**把 AI 嵌进学科内部，而非放在旁边。** 一套三层（入门、应用、进阶）的 AI 课程把机器学习折进既有的热工程主题之中，覆盖一门 39.1 小时的课程，而不是增设计算机科学的选修课，从而避免给机械工程学生增加额外负担，并公开其教学大纲、数据与代码（[[mechanical-engineering-ai-curriculum-2026|Li et al.（2026）]]）。

一个新闻学案例展示了"价值优先"的变体：一个"价值—过程—胜任力"三元支架把学生从纯人工报道带到 AI 整合的工作，然而 9 人中有 8 人（89%）报告对伦理决策有信心，而关于作者身份与偏差的调查条目却暗示理解仅停留在表层（[[ying-genai-journalism-assessment-2026|Ngu 与 Weller（2026）]]）。

**[[governance|机构层面的]]框架**在规模上处理课程变革。**[[finkelstein-principled-ai-education-2025]]** 与 **[[finkelstein-principled-ai-education-2025]]** 为跨教育项目整合 AI 提供原则。**[[ai-adoption-training-public-sector]]** 考察公共部门教育中采用 AI 课程的障碍。

**在整个项目中排序 AI。** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] 提出一个"先克制、后放大"的框架，在项目层面对生成式 AI 做排序：在一种能力正在形成时暂扣生成式工具，一旦学生能够指挥它并判断其回报，再把它恢复以放大该能力。受一个"形成与外包"判据的支配（一段工作是在建立能力，还是仅仅把它从工具中过一遍），该框架把课程设计与 [[cognitive-offloading]]、[[self-regulated-learning]] 与 [[academic-integrity]] 相连，并在每一个"克制到放大"的铰点上设置难以伪造的检查点。

最高阶阶段的杠杆不是更多的课程作业：在 89 个受资助的毕业设计项目中，从劳动力就绪等级 6 升到 7 受限于行业嵌入的经验——实习与制造业扩展伙伴关系项目——因此学位需要工作整合式学习，而非又一门技术选修课（[[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al.（2026）]]）。

模型能力在课程层面带来的一个后果是，抵抗 AI 的设计会过期。计算教育者描述了按"模型还做不到什么"来校准作业、然后看着这种校准失效的情形——一位网络安全教师的题目在七八个月前还需要真正的 [[problem-solving|问题求解]]，之后就被直接解掉了——而一位引导者估计其保质期约为一个学期。该工作坊的结构性发现是，几乎每一项调整都由一位教师在单门课程内做出，缺乏一次持久的课程回应所需的机构协调（[[computing-assessment-genai-workshop-report-2026|Akbar et al.，2026]]）。

**允许生成式 AI 时的整课对齐。** 一门入门核与粒子 [[physics-education|物理]]课程在 2026 年的重构（[[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]）整合了三种角色各异的活动类型——讲授负责概念与记法，习题课负责标准的解析练习，作业则作为探索性的"研究形态"成分，由异常困难、多方法的问题构成。所报告的摩擦（未申报的编程先修要求、没有足够时间去理解而非只是得到答案，以及讲授、习题课、作业与 [[summative-assessment|考试]]之间的不对齐）说明，允许生成式 AI 迫使整门课程的对齐工作，而非只改一类作业；他们推荐的结构把允许 AI 的探索性工作保留为附带奖励的高阶任务，而无辅助的笔试决定成绩。

**区分整合模式的是对齐的深度，而非使用的频率。** 在 17 个商科模块案例中，六个把 GenAI 系统地嵌进教学、学习与评估（建构式），九个做得不一致（混合式），两个是零星地做（临时式）；建构式案例报告了最强的投入度、能力与课程相关性结果（[[zhou-constructive-alignment-genai-business-2026|Zhou et al.（2026）]]）。

**批判审视下的建构式对齐建议。** 在上文来源报告实践中对齐之处，[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al.（2026）]] 把这份指引本身读作一种话语。他们对 2022 年 11 月至 2025 年 4 月间发表的 14 篇灰色文献做的 [[qualitative-research|批判话语分析]]——多为机构页面与处于中心位置的 [[educational-development|学习与教学单位]]的章节——发现建构式对齐被呈现为一个效率问题：生成式 AI 是"一种起草评分标准的有效而高效的方式"，可以"简化流程"，被拟人化为"一位教育专家与助手"、"陪练伙伴"或"教学设计中的智能助手"，而学术人员只提供"学科内容专长"，由工具承担"制定学习目标、组织课程内容……并对齐课程各组成部分的重活"。复制粘贴式的提示配方与编号模板，把建构式对齐框定为一个可标准化的产品，产出三种失效模式：表演性（只是看起来对齐的对齐）、情境性与批判性语境的抹除，以及把对齐与建构维度混为一谈的浅层建构式对齐。他们的补救把课程设计的工作流重新排序——教育者必须把建构式对齐理解得足够好，才能指挥、评估并拒绝 AI 的输出，然后才把任何一部分委派出去——并把任何工具限定在一个以本地政策、评分标准与毕业生素质为依据的机构 [[rag|检索增强]]智能体上，配以"阈限辅导者"的角色，延伸而非取代 [[educational-development|开发者]]关系。

**生成与课程对齐的建模任务。** AI 驱动的平台可以应对教师缺少时间与资源来设计高质量 [[math-education|数学建模]]任务的困境，生成与课程对齐的问题和扎根于设计原则与 [[rag|检索增强]]生成的教学建议——该方法以中学数学中的正比例关系为例做了说明（[[ai-modeling-problem-generation-platform-2026]]）。课程阅读材料本身如今也成了生成对象：Sidorkin（2026）在一门研究生教育领导力课程中用每周生成的 AI 阅读材料取代了商业教材，尽管学生把它们评为有用，且 75% 的人同意自己比在一门可比课程中学到更多，但 4,487 页的日志中只有约 0.80% 的页面带有 APA 风格的文内引用，且约 1.03% 的页面在把具名的校区或系统与断言式的政策主张配对时没有可验证的来源。课程材料的教训是，把生成的阅读材料当作在教师审阅下的草稿生产，为教师设计提示与验证的劳动做预算，并把经过审查的来源 curate 进助手，而不是把来源质量留给学生从语境中推断。

**课程到课堂层面中 AI 辅助的备课。** 在一门课程变成一堂被教授的课的那个节点上，[[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo 与 Tahir（2025）]] 在儿童 [[stem-education|STEAM]]艺术教育中实验比较了教师生成的教案与 ChatGPT 辅助的教案，发现 AI 辅助的教案在六位专家教授的评分中显著更高（中位数 20.5 对 17.6，p = .002，效应大）。他们表明，回报取决于教师如何委派：推荐的方法是在一份自行勾勒的教案中填补内容缺口（保留教师设计的 [[agency|自主性]]），而不是把整份教案都委派出去；他们还贡献了一个"角色—指令—最终目标"的提示模板，用于可复现、质量受控的生成——这说明 AI 备课嵌入教师的课程决策之中（而非取而代之）时最为有力。在科学教育中，专家验证对平台设计得出平行的结论：[[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu、Surmeli 与 Yildirim（2026）]] 请十一位 [[science-education]]专家就与土耳其修订课程及工程 [[design-based-research|设计型]]学习模型对齐的六年级教案，为 ChatGPT-4 与一个教育导向的工具（Teacher's Buddy）评分。教育导向的平台在全部八项质量标准上——包括反馈密集的阶段与课程对齐——得分更高，这说明把教学法结构嵌入 AI 能产出对齐更好的输出；然而仍有一些专家因通用方案更强的社会情感强调而偏好它，且 11 位中有 7 位认为这些教案"经修改后可用"，而非直接可用。平台的选择与提示的框定，而不只是 AI 本身，塑造了生成的教案与课程标准及过程模型对齐的程度。

在生产中让 AI 起草变得可靠的是结构，而非提示措辞：[[curriculum-as-code-instructional-design-2026|Paiva（2026）]] 的 Curriculum-as-Code 管线激进地剪除上下文，并逐节地生成材料，横跨 28 个项目情境，把教师的备课时间从每份教案约八小时降到两小时，且没有留下概念或数学上的幻觉需要人来捕捉。

### 与相关概念的联系

课程设计直接与 [[learning-design]] 相连——课程定义教什么，教学定义如何教。它与 [[ai-literacy]] 相连，因为内嵌 AI 胜任力是一个首要的课程挑战；与 [[teacher-role]] 和 [[educational-development]] 相连，因为课程变革需要教育者做好准备；与 [[scaffolding]] 相连，因为设计良好的课程会在课程与年份之间支架化技能的发展。与 [[higher-ed]] 和 [[k-12]] 的联系，反映了课程设计在各教育层级上的相关性。

## 关联概念
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — 总括：AI 教育中的教学法与教学策略
- [[recommender-systems-and-learning-paths]]
## 关联文章
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — 对"GenAI 用于建构式对齐"指引的批判话语分析（McInnes et al. 2026）
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — 为 GenAI 排序的"先克制后放大"课程框架（Torres-Sahli et al. 2026）
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — AI 时代的智能制造劳动力就绪等级框架
- [[rewriting-curriculum-genai-pedagogy-2026]] — 重写课程：GenAI 驱动的教学法变革
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI 技能框架：用于课程映射的 26 项可评估技能
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — 面向 AI 素养的 STEAM 教育：系统综述
- [[caruana-pre-university-ai-education-slr-2026]] — Preparing learners and teachers for an AI-driven future: SLR of pre-university AI education（Caruana et al. 2026）
- [[ai-modeling-problem-generation-platform-2026]] — 生成数学建模问题的 AI 驱动平台（ADDIE、RAG）
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
