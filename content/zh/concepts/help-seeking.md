---
title: 求助行为（Help-Seeking）
created: "2026-08-06T10:20:04-04:00"
updated: "2026-10-09T18:58:17-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/help-seeking
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

> **求助行为（Help-Seeking）** — 学习者意识到需要帮助并策略性地提出求助的过程，以及这一过程在 AI 支持的学习环境中如何展开。在[[ai-education|AI 教育]]中，求助行为是决定 AI 工具支持还是损害学习的关键：求助的*质量*（学习者何时、以何种方式、索取什么）强烈影响学习结果，而 AI 导师、提示与[[pedagogy|教学法]]代理正是为了引出建设性的求助行为、而非"直接要答案"而设计的。([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])

主动的外联可以在完全不改变学习材料的情况下提高求助行为。一项在大规模本科生课程中开展的预注册实验通过学业聊天机器人向学生发送消息，发现辅导与补充教学的参与度上升；中介分析将 17.8% 的成绩效应归因于求助行为的增加（p = 0.041）（[[chatbot-outreach-course-performance-2026]]）。

## 值得思考的问题

- 当你卡住时，你倾向于索取直接答案，还是索取能帮你自己想出办法的引导？你认为每种选择会对你真正记住的东西产生什么影响？
- 研究表明，学生常常打算用 AI 学习，却默认直接索要答案——这种"意图—行为落差"与更差的表现相关。为什么良好的意图这么容易就退化为索要答案？
- 一个始终存在的"提示按钮"会因为暗示"帮助随时可得"而把学习任务变成抄写练习。你能回想起一次因为帮助来得太容易，而让你跳过了本需要进行的思考吗？
- 一项研究发现，仅仅是警告学生 AI 可能会犯错，实际上就增加了他们的求助行为。健康的怀疑态度可能如何改变学生与导师的互动方式，与盲目信任相比？
- 遇到困难的学生往往是最不可能在无人提示下求助的。如果最需要支持的学生不主动开口，AI 工具和教师应该如何回应？
- 本页提出延迟提示的提供，并把设计问题从"是否"提供帮助转向"如何"提供帮助。对你的学习者而言，一个设计良好的求助体验会是什么样的——又要怎样才会让他们真正采用？

## 引言

求助行为是学习研究中一个成熟构念，与[[self-regulated-learning]]和[[metacognition]]密切相关：它要求学习者监控自己的理解、识别差距、判断需要帮助，并提出有效的请求。随着[[generative-ai|生成式 AI]]导师的兴起，求助行为变得前所未有地重要——也出现了新的失败模式。学习者常常*打算*用 AI 学习，却默认直接索取答案；本知识库的研究在多个领域和年龄段都记录了这一差距。经典模型假设请求是为了获取提问者所缺乏的知识。运维支持类需求使这一假设复杂化：在 4,093 条查询中，至少 20.4% 是在询问待提交作业的状态而非索取知识，而受限于检索的助手只满足了这类需求的 1.3% [[student-query-demand-hybrid-ai-support-2026|Gupta 等（2026）]]。([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## 建设性与非建设性求助行为

文献中的核心区分在于：求助行为是支持学习，还是绕过学习。

### 非建设性求助行为

本知识库的研究识别出非建设性求助的具体、可观察模式，尤其在[[intelligent-tutoring|智能导学系统]]中：

- **过早请求提示** — 在做出任何解题尝试之前就请求帮助。即使是不确定的学生，先尝试也能学到更多。([[lak2026-hint-button-unproductive-use]])
- **浅层阅读提示** — 过快翻过提示（以约 4 词/秒为标志），往往直接跳到透露答案的最终提示。([[lak2026-hint-button-unproductive-use]])
- **索要答案胜过寻求学习** — 要求 AI 产出答案，而不是解释或引导。在一项对 98 名九年级学生使用 GenAI 导师的研究中，互动以工具性请求为主，几乎不存在对自身学习的监控或评估——尽管学生事先选择了支架式支持。这种**意图—行为落差**与*更低的*后测成绩和更高的额外认知负荷相关。([[regulating-ai-tutor-adolescent-srl]])
- **在任何独立尝试或人类来源之前就咨询 AI。** [[uneven-impact-generative-ai-student-learning-2026|Manikonda 等（2026）]] 将这一顺序直接测量为**早期依赖** — 在独立思考、传统搜索或询问教师之前就咨询 GenAI——并发现在 118 名 AI 相关课程的学生中，它与更大的负面影响（β = .402，p = .004）和学业收益（β = .301，p < .001）同时相关。在[[ai-literacy|评估素养]]低时这种危害关联消失，而在评估素养高时最强（+1 SD 处 b = .688，p < .001），即最有能力判断 AI 输出的学生报告了最先咨询 AI 带来的最大代价：*先问谁*的选择带有评估答案的熟练度所无法抵消的弊端。研究还表明，用 AI 来组织、评估和拆解问题——即**认知性**而非早期依赖的使用——才是与积极影响相关的模式，因此这种求助失败模式在于顺序，而不在于求助本身。
- **持续求助而无恢复** — 求助一开始是建设性的，但不会永远如此：求助请求是最可恢复的僵局类型（初始时为 47.0%），一旦援助失败就下降得最多（深度六级及以上为 12.5%），因此值得追踪的信号是坚持，而非请求本身 [[guided-ai-tutor-impasse-resolution-2026|Ahtisham 等（2026）]]。
- **遇到困难的学生最不可能主动求助** — 这是求助行为的参与面。在[[one-click-away-khanmigo-two-year-school-experiment-2026|为期两年的 Khanmigo 随机对照试验（Oreopoulos & Low 2026）]]中，即使免费使用且强制练习时间，遇到困难的学生也只在约 17% 的错误环节向 AI 导师发消息，且大多只是裸答案或点击——这与教育经济学发现一致：依赖主动性的干预措施覆盖到的最少，恰是受益最多的那批学生。[[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK（Oreopoulos 等 2026）]]表明降低摩擦能大幅提高参与率（简化注册后首次参与率从 45% 上升到 83%），但入门 ≠ 持续参与（出席仍是间歇性的）。

### 非建设性求助为何损害学习

**可供性视角**解释了一个关键机制：当界面让帮助持续且醒目地可得（例如常驻的"提示按钮"），它就向学习者发出"帮助永远存在"的信号，形成一种非预期可供性，可能把任务坍缩为抄写练习。快速获取最终提示绕过了学习所必需的主动图式建构。([[lak2026-hint-button-unproductive-use]])

### 求助质量是可测量的

两个简单、可解释的指标——过早请求提示和浅层阅读提示——可以从标准的导学日志中计算出来，并且跨学期一致地与[[learning-gains|学习增益]]的下降相关，即使在控制[[prior-knowledge|先验知识]]之后。这使得它们适用于[[learning-analytics]][[visualization|仪表盘]]和实时干预，而不像复杂的机器学习"游戏系统"检测器。([[lak2026-hint-button-unproductive-use]])

## 设计 AI 系统以促进建设性求助

### 为学生提问的方式搭脚手架

在**以推理为中心的求助**方面的显式训练——请求分步提示和验证而非最终答案——比不加批判的依赖产生更好的结果。在一项本科统计学的准实验中，受引导的 LLM 使用（配合面向推理的求助训练）带来了更强的独立表现和更好的自我评估校准，优于无限制的 LLM 使用。教训是：**仅提供 LLM 访问是一项不完整的干预**；设计挑战在于为*学生如何使用 AI* 搭建脚手架，使其充当推理伙伴而非答案获取工具。([[guided-llm-scaffolding-independent-learning]])

交互成本是同一问题的另一面。[[penquiry-pen-based-llm-qa-2026|Rhee 等（2026）]]识别出阻止手写学习者向[[llm|LLM]]提问的**指称障碍**和**表达障碍**：指向图表区域或公式中的某一项无法用打字文字表达，而组织语言的努力恰恰落在问题最脆弱的时刻。他们的 Penquiry 系统通过将墨迹吸附到文档元素来解决指称，并通过自动补全把稀疏的墨迹关键词扩展为完整查询；两项各 16 名参与者的迭代研究发现，提问的认知与身体开销显著下降。降低提问成本是产生*更好*的求助还是仅仅*更多*的求助仍悬而未决，作者提出时序自适应自动补全——会话早期进行基础验证、后期给出更高层提示——作为从降低摩擦走向[[scaffolding|支持渐退]]而非永久拐杖的一条路径。

脚手架也可以在任务内部交付，而非任务之前。[[helpcoach-ai-help-seeking-scaffolding-2026|Jin 等（2026）]]构建了 HelpCoach，一个聊天界面的插件，用于评估学生求助的具体程度，并在问题过于模糊时提示修改，使知识成分与脚手架类型显式化。在一项 40 名学习 Web 编程的大学生的被试间研究中，HelpCoach 参与者在首稿中写出具体问题的比例显著高于任务前训练基线（57.3% 对 40.5%），一周后保留的知识也显著更多（d = 1.100），而第三个任务上的具体性差异不再显著（43.7% 对 32.1%）。作者提醒，记忆增益尚不能归因于更有针对性的聊天机器人回复。

降低提问成本的第三个杠杆是帮助*来自何处*。[[course-specific-rag-help-seeking-higher-ed-2026|Gray 与 Hobbs（2026）]]构建了 Beacon，一个基于某编程模块核准材料的课程专属[[rag|检索增强]]助手，并用 15 名计算机学生和四名学者进行评估。89% 的参与者高度评价其答案与课程材料的一致性，66.7% 表示它支持而非取代了他们的学习，但仅约一半到 60% 的人报告理解或信心有所提升。动机源于本节记录的障碍：这些学生中 62.5% 表示有时在需要时会回避求助，75% 表示在某个话题弄不懂时会焦虑，因此提供一个私密的、基于模块的渠道，作为求助讲师前的第一级阶梯。受访的学者则让反面论点保持活力——他们看重 Beacon 不提供完整解答，并担心不受限制的工具让学生跳过某个发展阶段——这正是该设计靠"拒绝完成作业"赢得位置的原因。

### 通过透明度校准信任

一项 252 名学生的课堂实验发现，**警告学生 AI 可能出错会增加求助行为**。对潜在系统错误的透明改善了学习者与系统的互动——将求助行为与[[trust-calibration]]和[[hallucination-risk]]联系起来。([[ai-fallibility-warning-help-seeking]])

### 重新思考提示与脚手架的交付

研究并不建议移除帮助，而是建议重新设计帮助的交付方式：

- **延迟提示可用性** — 要求先满足最低投入时间或解题尝试次数，提示（尤其是最终提示）才可访问。([[lak2026-hint-button-unproductive-use]])
- **从*是否*转向*如何*** — 关键的设计问题是如何组织与建设性挫折原则相一致的提示交付，而非是否提供提示。([[lak2026-hint-button-unproductive-use]])

### LLM 导师的采用问题

现实中的学生经常**绕过[[conversational-ai|聊天机器人]]的[[scaffolding]]**——未必有害，但往往是因为聊天机器人的教学框架与学生自身的学习目标不匹配。因此评估流程必须测量的不只是导师是否提供脚手架，还包括学生是否*接受*了这些脚手架，而不能假定他们会接受。([[rethinking-scaffolding-llm-tutors]])

## 求助行为与自我调节学习

求助行为是[[self-regulated-learning]]的有机组成部分：建设性求助要求学习者监控理解、判断何时需要帮助、选择恰当来源。在 GenAI 情境中，这更加苛求，因为学生还须对 AI 行使[[agency]]，保持认知警觉而非听命于它。本知识库的研究支持需要[[scaffolding|脚手架]]来促进更具[[agentic-ai|能动性]]和认知主动性的 AI 使用，并强调求助退化为无条件索要答案时[[cognitive-offloading|过度依赖]]与[[cognitive-offloading]]的风险。([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### LLM 中介的求助作为四阶段过程

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg 等（2026）]]表明，在日常 STEM 学习中，LLM 求助不是单一动作，而是分层、依赖情境的四阶段过程：（1）*判断是否需要帮助* — 学生先独立尝试以保全学习价值；（2）*选择问谁* — 先用 ChatGPT 作为低门槛的第一步，再找同学进行概念协商，最后找教师处理复杂或高风险问题；（3）*确定帮助类型* — 从提示和解释到为[[problem-solving]]搭脚手架、精简常规工作、拓展学习；（4）*判断所得帮助* — 行使选择性信任，对照课程材料或与真人核实 AI 输出。关键在于，学生更偏好**工具性求助**（增进理解）而非**执行性求助**（获得解答），作者提议将这一区分改编为面向 LLM 的新 SRL 测量条目。

在全线上的[[english-education|写作]]中，工具的可得性并不是瓶颈。[[reed-resource-literacy-genai-composition-2026|Reed（2026）]]观察到，遇到困难的学生不是没有支持的人，而是意识不到何时需要帮助、哪种资源适合任务、或反馈到来后如何评判的人——而流畅的[[generative-ai]]输出容易被误当作权威支持。她的应对是让求助*结构化*，而非仅仅可得：设定必需的接触点，解码任务要求、带理由地映射资源、比较反馈来源、以反思闭环。

### 让行为情境可见：TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron 等（2026）]]处理的是[[cs-education|AI 辅助编程教育]]中求助行为的行为前因：人类导师会适应学习者可观察的行为，而不仅是明确请求，AI 导师却缺少这种情境。**TutorTrace** 是一个数据集与流水线，可从底层 IDE 遥测实时计算学习者行为情境（四次部署，N=480；约 180K 事件、13,633 个行为片段、27 个指标），推导出第一次 AI 查询*之前*、连续查询*之间*以及*整个*会话中学习者活动的分类法。这使系统能判断一个查询反映的是**受引导**求助（之前有独立工作）还是**依赖**求助（无独立工作）——在留出预测上 AUROC=.717——并预测即将到来的查询（AUROC=.726）。一项初步课堂评估发现，行为感知提示把无独立工作的查询间隔占比从 50.0% 降到 20.7%。这将[[learning-analytics]]遥测连接到[[intelligent-tutoring|自适应辅导]]，表明行为情境可以大规模操作化，以支撑*学生如何求助*，而不仅是回应其明确提问。

## 对设计与研究的启示

1. **刻意设计求助可供性。** 常驻、醒目的帮助按钮会催生绕过策略；延迟访问并结构化交付以支持[[desirable-difficulties|建设性挫折]]。([[lak2026-hint-button-unproductive-use]])
2. **为求助本身搭脚手架。** 训练学习者进行面向推理的请求（分步提示、验证），而不是假定访问等于善用。([[guided-llm-scaffolding-independent-learning]])
3. **用透明度校准信任。** 警告 AI 可能出错可以增加恰当的求助行为和参与度。([[ai-fallibility-warning-help-seeking]])
4. **测量采用，而非仅测量脚手架。** 评估学生是否真正参与教学框架，而不只是导师是否提供。([[rethinking-scaffolding-llm-tutors]])
5. **支持监控与能动性。** 求助脚手架应强化[[metacognition]]与[[self-regulated-learning]]，防范[[cognitive-offloading|过度依赖]]。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — 机构外联与支持分配，超越课程内的求助

## 关联文章

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry：基于笔的交互式原位问答系统，利用 LLM
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — STEM 中的 LLM 中介求助：分层、工具性与可验证
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — 一键之遥：Khanmigo 的两年学校实验
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — 结合 CAL 的虚拟辅导：一项关于参与和学习的实验
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — AI 课程中学生与 LLM 对话的 StudyChat 数据集
- [[lak2026-hint-button-unproductive-use]] — 过早请求提示与浅层阅读提示预示 ITS 中更低的学习增益
- [[ai-fallibility-warning-help-seeking]] — 警告 AI 可能出错会增加数学导学系统中的求助行为
- [[regulating-ai-tutor-adolescent-srl]] — 青少年 GenAI 求助与自我调节学习中的意图—行为落差
- [[guided-llm-scaffolding-independent-learning]] — 受引导的 LLM 脚手架改善面向推理的求助与独立学习
- [[rethinking-scaffolding-llm-tutors]] — 真实世界 LLM 导师部署中的脚手架/学生采用错配
- [[uneven-impact-generative-ai-student-learning-2026]] — 早期依赖：在独立思考、搜索或询问教师之前咨询 GenAI 同时预示收益与危害（Manikonda 等 2026）
- [[reed-resource-literacy-genai-composition-2026]] — 线上写作中的资源素养：瓶颈在于识别何时需要帮助（Reed 2026）
- [[course-specific-rag-help-seeking-higher-ed-2026]] — 减少障碍以获得学业支持：评估面向高等教育求助差异的课程专属 RAG 系统
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — 自适应脚手架需要应变性：一个根据学习者行为升降支架的 AI 导师
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach：在问题解决过程中为定向 AI 求助搭脚手架
- [[guided-ai-tutor-impasse-resolution-2026]] — 受引导 AI 导师如何化解学生僵局的差异考察
- [[student-query-demand-hybrid-ai-support-2026]] — 学生实际问什么：混合支持系统中的需求结构与自动化潜力
