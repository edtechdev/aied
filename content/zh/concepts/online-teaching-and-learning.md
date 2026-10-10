---
title: 在线教学与学习
created: "2026-08-20T04:20:00-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, learning-design]
pedagogy: [online-teaching-and-learning, pedagogy]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, id-toolbox, liascript]
connected_faqs: [asynchronous-online-courses-ai]
translation_of: concepts/online-teaching-and-learning
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **在线教学与学习（online teaching and learning）** — 通过数字化、网络中介的环境而非共享的实体课堂进行的教学实践与教学法。它涵盖完全在线课程、大规模开放在线课程（MOOC）、混合式与融合式形式以及远程教育。对本知识库而言，核心问题是 [[generative-ai]] 如何重塑远程教学的机会、挑战与推荐做法——从可规模化的 [[personalized-learning|个性化]] 到新的 [[academic-integrity]] 与 [[cognitive-offloading]] 风险。

## 值得思考的问题

- 你可能修过或教过一门在线课程。当实体课堂被移除时，你失去了什么、得到了什么——它又如何改变了教师可以依赖的东西？
- 本页论证在线教学是一种独特的教学法，而不只是一种交付机制。在线媒介具体在哪些方面改变了哪些教学策略才可能可行或有效？
- 一项 [[rct]] 发现，不受约束的 AI 辅助提高了练习表现，却降低了无辅助考试分数，而"提示而非答案"型辅导则消除了伤害。在读下去之前，你能解释为什么给学生答案可能抬高即时表现却侵蚀持久学习吗？
- 在线评估并不总能区分辅助完成的作业与独立完成的作业。如果检测工具只是一种"局部的、有争议的应对"，那么什么样的替代性评估设计才能揭示真实的理解？
- 在一个自主进度、基于屏幕的课程中，可感知的"轻松 AI 捷径"的可获得性如何重塑学生的动机？你会设计什么来对抗它？
- 自主智能体现在可以登录学习管理系统、阅读材料、回答测验并参与讨论。如果产出作业不再能证明学习，你需要看到什么作为替代？
- AI 现在可以在几分钟内以极低成本生成一门 MOOC 等效课程。"N 个智能体对一个学生"与"一个视频对 N 个学生"在教学上的权衡是什么？

## 引言

在线教学与学习是一种独特的 [[pedagogy|教学法]] 情境，而不仅仅是一种交付机制。它移除了支撑注意力、[[motivation]] 与非正式互动的物理共在，代之以结构化的数字互动——讨论论坛、异步材料、视频、[[intelligent-tutoring|辅导智能体]]——来替代面对面接触。这改变了教师可以依赖什么、学生可以获得什么，以及学习如何被设计与评估。作为 [[pedagogy]] 版图中的伞形概念，它与 [[active-learning]]、[[collaborative-learning]]、[[self-regulated-learning]] 并列，但其区别在于媒介：在线环境的约束与可供性塑造了哪些策略是可行的。

生成式 AI 的兴起直接落在这个情境中。在线学习者已经通过屏幕和软件工作，因此 AI 工具是天然近邻；同时，在线评估更难监考，使滥用更容易、风险更高。本知识库的证据表明，AI 可以成为在线教学的强大盟友——而如果配置不当，也是学习伤害的重要来源。

[[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga & Johnson (2025)]] 的批判性文献综述（跨 32 个国家的 63 篇引证）将这一版图组织为四个相互关联的主题，贯穿本页：AI 整合的类型与目的、教学法取向（AI 素养、自我调节学习）、收益与挑战。他们的核心告诫——这些主题彼此*重叠*，且在线 AI 整合是一项扎根于教学法和人际关系的社会技术事业，而非单纯的技术采纳——与本页将在线教学视为独特教学法的框架一致。值得注意的是，他们报告称在教师辅导*之外*使用 ChatGPT 的学生比单独使用者感知到更高的 [[learning-gains]]，这强化了贯穿本页的人机混合协作重点。

使这件事从设计问题变成紧迫问题的发展是：生成式 AI 不再只写出学生本可写出的文本。自主 [[agentic-ai|智能体]]现在登录学习管理系统、阅读课程材料、回答测验、阅读同学帖子并提交作业。在一门本科心理学课程上的三项演示说明了这意味着什么：两次测验完成，一次约 **12 分钟**、一次**不到 5 分钟**，均得 **10/10**；以及一次讨论帖，其中智能体先挖掘同学的帖子，然后编造了一段可信的第一人称生平来作答——对照之下是 Canvas、Moodle 与 Brightspace 上至少 **15 次已记录的智能体运行** 的公开记录，使用 **七种智能体工具**。[[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou and El-Haddad (2026)]] 认为这首先是一个 [[assessment-validity]] 问题，其次才是诚信问题：智能体完成所移除的，是"所提交作业由被评估其学习的那个人所产出"这一假设。因此在线教学的设计问题从"如何检测滥用"转向"一门在线课程还能产出什么样的学习证据"，这正是贯穿下文各节的线索。

## 形式与场景

在线教学与学习有若干共享媒介但范围与结构各异的相近形式：

- **混合式与融合式学习。** 将面授与在线组件结合的模式，有意将数字活动、材料与互动和面对面教学整合起来。混合形式要求教师决定什么最好同步进行、什么最好异步进行，什么最好在线进行、什么最好面授——这些决定由 [[learning-design]] 原则组织，AI 既支持又使之复杂化。在混合情境中，AI 工具为 [[personalized-learning|个性化]] 和全天候支持提供机会，同时提高贯穿在线与面授两部分的诚信与卸载风险。[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] 在两个混合场景中说明了这一点——翻转大学课堂与职业教育中的反思性写作——其中一个学习分析仪表板（DashED）向教师传达机器学习导出的 [[self-regulated-learning]] 画像。采纳顾虑按情境分化：翻转课堂（大学）教师最担心数据匿名化和学生选择退出，而反思写作（职业教育）教师则担心同行教师滥用该工具，并强调需要情境化数据。在使用中，翻转课堂教师遵循顺序式探索，偏好课程级调整并在课堂上展示仪表板，而职业教育教师反复回看摘要页，主要将该工具用于个别辅导——证据表明混合分析设计必须情境感知。
- **同步与异步设计。** 这一区分比交付媒介更重要，因为两种形式对学习者提出相反的要求。同步会话把注意力、节奏与问责承载在会话本身之内；异步课程必须把这些设计进去，因为学习者独自决定何时工作，且不从教室获得环境性问责。研究基础常常模糊这一点：本知识库对在线学习中 AI 与 [[student-engagement|参与]] 的综述（24 项研究）将参与单独处理，并明确混淆了同步与异步情境，因此其结论不应读作异步特有的。异步特有的是关于自主进度学习者如何失去专注与节奏的证据：诸如目标设定、环境构建与时间管理等自我调节行为与低数字分心最相一致（[[decreasing-digital-distraction-college-online-learning-2026|Shi et al. 2026]]，530 名学生），而元认知知识与 [[well-being]] 在一个学期内随评估截止日期的聚集而下降（[[song-genai-learning-partner-srl-over-time-2026|Song et al. 2026]]，75 名学生）。其实际对应物是关于 [[asynchronous-online-courses-ai|在 AI 能做作业时如何设计与促进异步课程]] 的 FAQ。
- **远程教育。** 为远程学习的学习者设计的项目，通常大规模且跨地区（例如开放大学的 20 万以上学习者）。远程教育是 24/7、情境嵌入的 AI 支持与面对面监考之不可能性最突出的地方。来自南非教师培养的比较证据表明，媒介本身与准备度相关：[[ai-training-science-teacher-tpack-distance-2026|Mnguni et al. (2026)]] 发现，在一所校园型大学的最后一年师范生中，对 AI 整合科学教学的自我报告 TPACK（64.0%）高于一所远程教育大学的师范生（47.4%），两种情境中报告最弱的领域都是教学法知识。这一模式警告：远程项目不能假定同样的 AI 培训会产生同样的准备度，而且差异在于培训的设计，而非其存在。

## AI 为在线教学与学习带来的机会与收益

- **可规模化的个性化。** 传统 MOOC 在覆盖面上表现出色，却难以适应——"一个视频对 N 个学生"。[[llm]] 驱动的智能体系统（[[mooc-to-maic|MAIC]]）将其反转为"N 个智能体对 1 个学生"，使用专门的教师、助教、同学与分析智能体，以 MOOC 的规模提供 [[adaptive-learning|自适应教学]]、个性化反馈和动态学习路径。[[learnmate2-llm-adaptive-learning|LearnMate²]] 等系统通过个性化学习计划、实时情境帮助和 [[adaptive-learning|自适应]]活动，解决开放在线学习中的"个性化鸿沟"。个性化视频是通向这一目标的具体路径：[[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] 发现，一门大型在线课程中的学生更偏好 AI 生成的个性化视频而非非个性化的人类录制视频——其个性化效应超过了对真人主讲人所赋的价值——这表明可规模化的、[[generative-ai]] 生成的个性化媒体可以弥合在线教学中"一个视频对 N 个学生"的鸿沟。
- **全天候、情境嵌入的支持。** 在远程与 [[adult-learning|成人学习]]情境中，学习者在工作场所或家中学习，嵌入课程的 24/7 支持是重大收益。[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|开放大学的 AIDA 助手]]发现，专门构建、嵌入环境的生成式 AI 支持提高了 [[student-engagement|参与度]]（在一项探索性试验中使使用时长翻倍），96% 的学生希望它进入正式学习。
- **可规模化的对话式辅导。** 基于成熟的 [[intelligent-tutoring]] 技术（[[conversational-ai-tutors-framework|keep/change/center/study 框架]]）构建的 [[conversational-ai]] 辅导者，承诺提供高质量、基于对话的辅导——调动学生的想法、问题与 [[misconceptions]]——远比人类辅导更具可规模化性。
- **促进与分析。** AI 可以支持 [[collaborative-learning|在线讨论]]与 [[learning-analytics]]，预测参与度，并帮助教师分配注意力。[[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] 补充说，LLM 生成的讨论摘要可以在大型异步论坛中充当导航性 [[scaffolding|支架]]——拓宽学生的同伴接触面和桥接型社会资本的网络条件，而无需学生或教师承担摘要工作量。
- **面向高风险在线学习者的预警分析。** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] 表明，对内容交互日志的可解释 [[reinforcement-learning|机器学习]]可预测模块级进度，并在大规模在线 [[cs-education|编程]]课程中于模块截止日期前 7–8 天标记辍学（"未提交"）结果，给在线教师一个具体窗口去 [[teacher-role|干预]]脱离参与的学生，而不是事后才发现失败。
- **可负担性与速度。** AI 可以以传统成本的一小部分生成课程材料——MAIC 将 MOOC 课程制作从约 \\$25K/60 小时降至不到 \\$2/30 分钟。

## AI 时代在线教学的挑战

在线媒介与生成式 AI 共同加剧了教师必须正面应对的一组特定挑战。在面对面教学可以依赖存在、即时问责与监考之处，在线教学必须为它们做显式设计。

### 学术诚信与作弊

在线课程本已存在监考难题——面对面监考对分布式、异步的学习者往往不可行。生成式 AI 使这一问题雪上加霜：它使 AI 生成的作品与学生的作品无从区分，并使合同式作弊式的捷径可以规模化实现。本知识库关于 [[academic-integrity]] 与 [[ai-misuse-learning-harm]] 的证据表明，滥用更多由学生抄答案而非学习所驱动，而非由 AI 出错所驱动。由于在线评估常常无法区分辅助作业与独立作业，滥用可以在侵蚀持久知识的同时抬高即时成绩——一种感知与实际的差距，在教师对学生过程可见性较低的远程情境中尤为危险。检测工具只是局部的、有争议的应对（[[ai-detection|AI 抄袭检测]]、[[remote-proctoring]]），而本知识库的立场更倾向于 [[authentic-assessment|真实的]]、[[process-oriented-assessment|过程揭示性]]的评估，而非检测军备竞赛。

### AI 滥用与认知卸载

最严重的风险是在线学习者把构建理解的认知工作外包出去。[[genai-performance-vs-learning|表现—学习鸿沟]]表明，生成式 AI 可以轻易提升即时表现，却绕过了持久学习所需的深度加工。实地证据是直接的：

- 一项因果 RCT（约 1,000 名高中数学学生）发现，不受约束的 AI 辅助使练习表现提高 **+48%**，却使无辅助、闭卷考试分数下降 **−17%**——从未接触 AI 的学生表现优于接触过 AI 的学生。[[guardrails|带护栏的]]"提示而非答案"型辅导者消除了伤害。
- 人群规模的行为数据（320 万次 ALEKS 交互）发现，ChatGPT 发布后，在 AI 易受影响问题上所花学习时间下降 **−26.9%**，监考保持题答对的几率下降 **−25%**——该效应在监考下消失，将其归因于平台外的 AI 使用。

在线学习尤其脆弱：媒介本已使学习者与即时问责拉开距离，而自主进度、基于屏幕的工作会诱发 [[cognitive-offloading]] [[research-methods-aied|研究]]所识别的"要答案"捷径——这是核心伤害机制。应对之道不是禁用 AI，而是施加 [[guardrails]]——提示而非答案的支架、知识扎根与 [[human-in-the-loop-ai|人工监督]]——使 AI 增强而非取代学习者的认知工作。

### 其他挑战

- **过度热心的 AI 促进。** LLM 促进者过度热衷于介入在线讨论，这会使参与者恼火并破坏良好对话；人类的谨慎是更好的榜样（[[llm-facilitation-timing-online-discussions|Tsirmpas et al.]]）。
- **动机侵蚀。** 可感知的"轻松 AI 捷径"的可获得性削弱了自主 [[motivation]] 与坚持性，加剧学习伤害。
- **公平与数字鸿沟。** 可靠设备、连接与高质量 AI 的获得情况参差不齐；带 AI 的在线学习可能扩大而非缩小 [[equity-in-ai-education]] 差距（[[digital-divide]]）。
- **数据隐私与信任。** 在线平台收集丰富的学习者数据；AI 系统引发透明度与隐私关切（[[privacy]]），对兼顾工作与学习的成人尤甚。
- **组织准备度。** KhanMigo 的失败——学习者实际上并未与该聊天机器人互动，收益证据有限——告诫人们，技术能力必须与 [[governance]] 和组织准备度相匹配。

### 当提交物可以脱离学习者被产出时的评估效度

如果监考不可行且智能体可以完成作业，本知识库所倾向的应对是改变"什么算作证据"，而非更用力地监管。近期文献中反复出现四种设计应对。

**给易受攻击的任务配一个孪生任务。** [[roe-assessment-twins-2026|Roe, Perkins and Giray (2026)]] 保留有教学价值但易受 AI 攻击的评估——带回的论文或案例分析——再加上第二个较不易受攻击、评估*相同* [[learning-gains|学习成果]]的任务，时间安排得足够近以便交叉验证，并以相互依存的方式评分。他们的映射横跨 Messick 的六类效度证据，设计过程分三步：识别脆弱性、对齐成果并选择孪生任务，然后制定将两者联结起来的评分。一个简短的案例变体、对一个关键决定的解释、或一段简短的口头答辩都可以充当孪生任务。

**针对所有权而非作者身份。** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani and Buckingham Shum]] 论证，人机混合的作者身份损害了若干形式的效度证据，并提出**共同作者诚信**本身就是效度证据：当学生提交自己并不理解的 AI 生成内容时，它即被违反。为在规模上核查理解，他们报告了一种 **AI 口试**，一个运行混合口头答辩的对话智能体，其理解问题的类型与复杂度可控，并由教育专家和评估专家验证。对在线课程而言，这是一种真正可规模化的验证形式，它产出的证据关于理解，而非关于谁曾在场。

**将口试搬到线上。** [[asynchronous-oral-assessment-2026|Pentland, Lowenthal and Krier (2026)]] 恰逢其时地提供提示，让学生录制简短、限时的摄像头回答且不可回看，依据嵌入式评分标准评分并自动生成转录。跨两项研究——一门中级会计试点课和一门数据分析课程——学生在这些评估上的得分高于面对面选择题考试（第二项研究显著，第一项呈正向趋势），中等程度的跨形式相关支持聚合效度；学生报告准备方式不同，并使用了更多主动学习策略。该形式直接解决了异步问题：思考在学生选择的时间实时进行，其管理成本不随班级规模增长。

**对作业排序，使推理先被提交。** [[brcic-effortless-trap-productive-struggle-2026|Brcic and Frljic (2026)]] 把设计问题框定为**位置**而非许可，他们汇总的因果证据显示，结果仅随位置而翻转：那个使高中学生在无辅助考试上差约 **17%** 的不受约束帮手，一旦重建为不给出答案，便不再造成伤害；而一个工程精良的 [[intelligent-tutoring|辅导者]]使学习大致**翻倍**。他们的诊断值得记住：*如果让 AI 进来使任务变得轻松，那它就放错了位置。* 操作上，这给出了一门在线课程可以写进作业的序列——思考、提交、使用 AI、批判、修改、解释——其中提交步骤使其余部分变得可评估，因为从零产出的作业没有可供追问的修改历史。其下坐落着本知识库命名为 [[metacognitively-discordant-completion-genai-2026|元认知不一致的完成]]的状态：理解从未到达，学生却提交了正确、完整的作业，这在异步课程中与成功无从区分，除非设计提出了更高的要求。

无论教师选择何种组合，有一条约束应塑造它。在线学习常常是唯一可及的选项——学生因就业、照护责任、残障或地理而选择它——因此验证必须**小而适度**：一段简短的录述、一个个性化应用、对教师所提问题的回答、一条注释过的决策轨迹、一次低风险的个人检查。检测在此有其公平成本，因为标记非母语写作者的工具会不成比例地产生误报（[[ai-detection]]、[[digital-divide]]）。

## 在线教学与学习的推荐教学策略

- **主动与互动学习。** 优先选择让学生做事并思考的策略，而非被动接收——[[active-learning]]、互动练习与 [[socratic-method|苏格拉底式]]对话。促使学生推理（而非提供答案）的 AI 保留了构建持久学习的富有成效的挣扎与 [[desirable-difficulties]]。
- **有支架、有引导的支持。** 使用随学习者进步而淡出的 [[scaffolding]]，并设计 [[self-regulated-learning]] 支持，使学习者主导自己的学习而非依赖工具。
- **协作与讨论式学习。** 有意地构建在线讨论与小组工作；使用 [[collaborative-learning]] 活动，并在 AI 参与时校准其促进方式及其同伴角色。
- **真实、过程揭示的评估。** 转向 [[authentic-assessment]] 与捕捉过程的评估——草稿、口头答辩、自我解释、反思性 [[eportfolio|档案袋]]——它们更抗 AI 且揭示真实理解。
- **个性化与自适应路径。** 使用 AI 赋能的 [[personalized-learning|个性化]]与 [[adaptive-learning|自适应]]活动来定制节奏与难度，同时保持个性化的深度（任务排序、难度校准）而非停留在表面（自定义示例）。
- **社会临场感与社群建设。** 有意地培养社会临场感与 [[collaborative-learning|社群]]——[[community-of-inquiry]] 框架的核心——通过伴随式 AI、同步检查与同伴互动，因为在线孤立是 [[student-engagement|参与]]与归属感的关键障碍。在 AI 时代，这意味着在机器生成的话语使"谁在临场"变得复杂之际，仍然精心培育三种临场感（认知、社会、教学）（见 [[community-of-inquiry]]）。
- **融合式 [[design-thinking]]。** 对混合形式，运用 [[learning-design]] 原则决定什么最好同步进行、什么最好异步进行，什么最好在线进行、什么最好面授，以及 AI 如何支持每一项。
- **点明 AI 的角色，并核查学生仍然有自己的角色。** "学生可以使用 AI"过于宽泛，无从设计。不同角色带来不同教学后果——一项营销教育中的生成式 AI 研究区分了**辅导者、队友与工具**，并显示各自以不同方式塑造教学、社会与认知临场感（[[genai-marketing-education-roles-2026|GenAI in Marketing Education]]）——因此一项在线活动应能陈述其分工：AI 在此的工作是 X，学生的工作是 Y。如果 Y 包含很少思考，该活动需要重新设计，而非更严格的政策。
- **将讨论排序为立场、挑战、再思。** "发一帖、回两贴"的常规异步公式既肤浅又可被智能体完成。更强的结构要求学生先承诺一种解读，再面对一个反例或批评，然后解释其推理如何移动；所评分的是想法之间的移动，而非发帖数。这同时重新定位了教学临场感：机械地回复几十个帖子是其最无价值的形式，而在讨论中综合模式——反复出现的假设、值得点名的分歧、动摇共识的反例——是本文献中任何智能体都不执行的部分。
- **人在回路的治理。** 让教育者和 [[teacher-role|教师]]保持在 AI 工具的回路上，扎根于 [[tpack|学科教学知识]]，使教学意图——而非工具的默认设定——驱动设计。

## 对在线教师与教学设计者的启示

- **给 AI 加护栏，而不只是提供它。** 使用使学习者认知工作保持在回路中的"提示而非答案" [[scaffolding]]；[[guardrails|带护栏的]]辅导者 RCT 表明这消除了不受约束访问造成的考试罚分。完整的设计层见 [[guardrails]] 概念（[[prompt-engineering|提示]]、[[rag]] 扎根、训练、QA）。
- **设计抗 AI 的与监考/无辅助的评估。** 由于在线评分往往无法区分辅助作业与独立作业，应纳入闭卷、监考或过程揭示性评估，以暴露并抑制滥用（[[ai-misuse-learning-harm]]）。
- **显式教授 AI 素养。** 帮助学生识别依赖模式并校准信任（[[ai-literacy]]）；构建 [[self-regulated-learning|自我调节]]与 [[metacognition]] 以对抗卸载。
- **把 AI 嵌入学习环境，而非作为外部附加。** 嵌入课程的、情境调优的专用助手（如 [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]]）优于通用外部聊天机器人，并提高接受度。
- **将 AI 促进校准到人类的谨慎。** 用 AI 主持讨论时，偏好少介入的设置（[[llm-facilitation-timing-online-discussions|Tsirmpas et al.]]）。
- **为成人的生活约束而设计。** 对成人与远程学习者，优先移动接入、离线能力与异步可用性（[[ai-adult-learning-guidelines-dis2026|AI-ALOE 指南]]）。
- **与学生和教师共同设计，并建设治理。** 参与式开发、高层支持、跨单位协作与健全的 [[governance]] 是负责任采纳生成式 AI 的使能因素。
- **假定智能体会尝试每一项无监考活动，并以此假设出发设计。** 三问测试很快，能暴露薄弱活动：一个 AI 系统能否在学生不理解材料的情况下完成它；本应产生学习的认知活动是什么；什么证据将表明学生执行了它。当第一个答案是"是"而另两问难以回答时，问题在于学习设计，而非 AI 政策。
- **让验证与风险相称。** 在必须认证能力之处，宁愿用孪生任务、异步口头答辩或简短的理解检查，而非全面监控；让课程的其余部分对依赖这种灵活性的学习者保持灵活。
- **用分析支持而非取代教学。** 利用 [[learning-analytics]] 预测参与度并定向支持，但让 [[human-in-the-loop-ai|人工监督]] 居于中心。

## 关联概念

- [[pedagogical-patterns]] — 使排序成为承重结构的情境，因为系统无法看到尝试
- [[assessment-validity]] — 从所交作业到学习这一推断的效度
- [[agentic-ai]] — 操作工具与平台（包括 LMS）的自主系统
- [[community-of-inquiry]] — 探究社群
- [[pedagogy]]
- [[learning-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[ai-misuse-learning-harm]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-engagement]]
- [[digital-divide]]
- [[governance]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]
- [[guardrails]]
- [[ai-detection]]

## 关联文章

- [[ai-agents-complete-lms-assessment-validity-2026]] — 自主智能体端到端完成了无监考的 LMS 评估：一个评估效度问题（Hadjisolomou & El-Haddad 2026）
- [[roe-assessment-twins-2026]] — 评估孪生：将一个易受生成式 AI 攻击的任务与一个时间接近、较不易受攻击的、评估同一成果的任务配对
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — 作为效度证据的共同作者诚信，以及作为可规模化验证的 AI 口试
- [[asynchronous-oral-assessment-2026]] — 异步口试：限时、不可回改的录音，依据嵌入式评分标准评分
- [[brcic-effortless-trap-productive-struggle-2026]] — 轻松陷阱：AI 的位置而非许可或禁止
- [[metacognitively-discordant-completion-genai-2026]] — 元认知不一致的完成：未理解而提交的正确作业
- [[decreasing-digital-distraction-college-online-learning-2026]] — 哪些自我调节策略与低数字分心相一致（530 名学生）
- [[song-genai-learning-partner-srl-over-time-2026]] — 自我调节学习作为稳定特质与波动状态；元认知与幸福感在一个学期内下降
- [[genai-marketing-education-roles-2026]] — AI 作为辅导者、队友与工具：角色及其对临场感的影响
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — 超越检测：面向在线情境的评估设计
- [[reconceptualizing-community-inquiry-generative-ai]] — Reconceptualizing Community of Inquiry in the age of generative AI
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — 将 AI 整合进高等教育在线学习：一项四主题批判性文献综述
- [[mooc-to-maic]] — 从 MOOC 到 MAIC：通过 LLM 驱动的智能体重塑在线教学与学习
- [[learnmate2-llm-adaptive-learning]] — LearnMate²：面向在线学习的个性化与自适应支持系统
- [[llm-facilitation-timing-online-discussions]] — Human and LLM Facilitator Tendencies in Online Discussions
- [[elevate-genai-virtual-tutors]] — ELEVATE: Human-Centered GenAI Virtual Tutors
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — 在开放大学实施 AIDA
- [[ai-adult-learning-guidelines-dis2026]] — 设计支持成人学习的 AI 技术指南
- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — 让教师理解混合课堂中的机器学习发现
- [[zhang-ml-student-progress-programming-2026]]
- [[personalized-ai-generated-videos-preference-2026]] — 学生更偏好个性化的 AI 生成视频而非非个性化的人类录制视频（Tomlinson et al. 2026）
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — AI 生成摘要驱动的在线讨论论坛学习设计
- [[ai-training-science-teacher-tpack-distance-2026]] — 校园型师范生报告的 AI 整合科学教学 TPACK 高于远程教育同伴（64.0% 对 47.4%）
