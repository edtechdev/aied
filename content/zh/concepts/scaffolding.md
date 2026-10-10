---
title: 脚手架
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:52:44-04:00"
connected_resources: [onmicro-ai]
connected_faqs: [designing-ai-into-learning, developing-ai-tutor, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition, sociocultural-learning, socratic-method]
technology: [intelligent-tutoring]
assessment: [feedback]
confidence: high
translation_of: concepts/scaffolding
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **脚手架（scaffolding）** — 帮助学习者完成他们尚不能独立完成的任务的结构化支持，随能力增长而逐步撤除。在 [[ai-education]] 中，脚手架是确保 AI 工具支持学习而非取代学习的首要设计原则。

## 值得思考的问题

- 回想一次有人"帮"你学某样东西，而这份帮助做得太好了，以致你学得更少。能让你成长的支持与取代你的支持之间的界线在哪里？本页论证，这是 AI 导师的核心设计问题。
- 脚手架源于最近发展区——足够的支持以促成进步，又不至于多到让学习被绕过。在 AI 导师中，"支持过多"是什么样子，你能仅从学生行为中察觉它吗？
- 一项关键发现：学生常常*偏好*更指令化的 AI 导师角色，即使他们在协作式同伴与 [[teacher-role]]-助手角色下*表现更好*。学习者偏好是否可靠地追踪什么最有利于学习——这种分歧对让学生自行选择自己的脚手架意味着什么？
- 从不撤除的脚手架会制造依赖。本页指出，自动化脚手架有保持静态的风险，而非随能力增长而撤除。为何"撤除（fading）"是必要的，而一个 AI 系统若不被刻意设计，为何可能做不到？
- 设计原则是"脚手架，而非替代"。学生自己要求的 AI 是"不给你任何解答——你仍然必须自己找到正确答案才能学到"。这与你所体验过的有效帮助相符吗，还是即便明知要付出代价，你仍偏好走捷径？
- 阅读前先立一个目标：挑一个你教的任务，勾画一个保留学习者努力的提示长什么样，对比一个移除努力的答案。你将如何知道你的提示处在"有效挣扎（productive struggle）"区间？

## 引言

### 脚手架在 AIED 中如何出现

- **基于提示的脚手架：** [[guided-llm-scaffolding-independent-learning|引导式 LLM 脚手架]]把结构化 [[prompt-engineering|提示]]当作学习干预来教授。[[scaffolding-critical-engagement-genai-minority-students|批判性参与脚手架]]采用 [[culturally-relevant-pedagogy|文化回应]]方法。
- **面向学习者无法命名的缺口的混合主动脚手架：** [[veriforge-narrative-drafting-scaffolding-2026|Sun et al.（2026）]]让写作者始终掌控叙事综合，系统只在领域发现上采取主动，主动标记写作者无法表述为查询的知识缺口。
- **苏格拉底式脚手架：** [[socratic-method|苏格拉底式 AI 对话]]不直接给出答案，用问题引导发现——这是 [[desirable-difficulties]] 脚手架的一种形式。作为边界条件，提问在起始处有帮助但随深入而衰减，于是撤除规则从"引出"转向"处理错误"：收益从起始处的 20 点优势降到第四次卡壳回合的 3 点，而处理错误则从 +5 升至 +12（[[guided-ai-tutor-impasse-resolution-2026|Ahtisham et al.（2026）]]）。
- **自适应撤除：** [[intelligent-tutoring|智能导师系统]]依 [[knowledge-tracing]] 估计调整脚手架，对未掌握的概念给更多支持，对已知的更少。
- **[[medical-education|临床]]问诊训练中由需求触发的自适应脚手架：** MeduAI-SP [[rct|随机试验]]（[[ai-standardized-patient-scaffolding-medical-2026|Yang et al.，2026]]；N = 100 名三年级医学生）把脚手架操作化为自适应的、由需求触发的支持：一个回合级评估智能体在学习者卡住、遗漏关键病史、有过早收束风险或损害融洽关系时打标记，只有在此时，一个 [[pedagogical-agent|导师智能体]]才发出 [[socratic-method|苏格拉底式]]提示。对 207 次问诊的专家标注显示，脚手架需求强烈依赖阶段，从问诊早期占学生话语的约 16.1% 升至晚期的 34.8%（整体标记 24.1%）——这是经验证据，说明新手问诊支持最需要于信息整合与诊断推理期间，而非初始信息收集。脚手架条件在最终与 OSCE 对齐的 [[summative-assessment|考试]]上优于结构化渐进披露对照（71.8% 对 55.6%；β = 16.4 个百分点；P = 3.30e-4），沟通方面的增益最大（Hedges' g = −0.79）。
- **提示系统：** [[correct-answer-trap-ai-tutor|AI 导师提示研究]]考察提示何时有帮助、何时助长 [[cognitive-offloading|过度依赖]]。

- **提升失误后恢复能力的脚手架。** 在一项 6,000 名中学生的现场实验中，AI 支持减慢了进度、减少了尝试的题目数，但在出错后提高了下一次尝试的正确率，并减少回到正确答案所需的尝试次数——是"有效减速"而非答案供给（[[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al.（2026）]]）。
- **训练学习者本身就是一种脚手架。** 一个 45 分钟的环节，教学生按 [[self-regulated-learning|SRL]] 阶段提示模型，并纠正其视觉与推理错误，把 [[physics-education|物理]]复习准确率提高（d = 0.81），且报告的总 [[cognitive-offloading|认知负荷]]未增加（[[structured-genai-training-physics-problem-solving-rct-2026|Huang et al.（2026）]]）。
- **概念与表征脚手架：** [[concept-catalyst-engineering-scaffolds|Concept Catalyst]] 与 [[rethinking-scaffolding-llm-tutors|LLM 导师反思]]探索认知支持的设计模式。[[genai-cognitive-scaffold-geometric-reasoning-2026|Davor（2026）]]提供了一个领域，其中表征支持与给答案必须被拆开：几何证明富含 [[visualization]] 资源，然而学习者失败的那一步，是从"可见的关系"到"有效的演绎论证"这一步，于是脚手架必须带他们跨越表征，而非再递给他们一张图。他在 86 名加纳高中生中做的准实验，把生成式 AI 配置为提示与提问而非求解——让学习者为自己所见辩护、说出相关定理、排好自己的逻辑步骤，教师用 AI 的表征来引导讨论——而 AI 支持的班级在证明构造上超过常规教学，即便控制了前测表现后仍如此。对反馈与 [[explainable-ai|解释质量]]的感知是有利的，尽管只有实验组接受了调查。脚手架在此被定位为从视觉直觉通往演绎推理的桥梁，而该论文从未点名模型或采集窗口，所以它提供的更像一份设计依据，而非一份可复制的配方。
- **"脚手架，而非替代"作为设计原则：** [[substitution-to-scaffolding-ai-harm-cycle-2026|Favero et al.（2026）]]论证，AI 在教育中的核心风险是错位——替代人类努力的 AI 会侵蚀教育本应培养的能力——并由此推导出单一设计原则：*脚手架，而非替代*。脚手架必须是 [[ai-technologies|AI 系统]]的一等能力：知道*何时不给答案、何时提问、何时呈现不确定性、何时给出替代视角*。他们对学生作文的分析显示，学习者自己收敛于此——要求 AI"不给你任何解答，你仍然必须自己找到正确答案才能学到"。这一原则把脚手架定位为认知、[[agency]]、情感与 [[ethics]] 上自我强化的替代伤害循环的替代方案。
- **把指导当作研究过程的脚手架。** [[scaffolding-systematic-reviews-2026|Wang et al.（2026）]]把系统综述视为一种有意的学习经验，其中指导提供整合的方法与情感脚手架，而自动化被限定于程序性负担，如摘要筛选，数据抽取、调和与综合仍由人类审阅者承担。
- **脚手架嵌入媒介，而非外挂：** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang、Du 与 Jin（2026）]]在一个视频播放器内落地四项脚手架原则——依 [[sociocultural-learning|ZPD]] 调整评论深度、*渐隐*脚手架（知识支持沿时间线变薄）、*分布式*脚手架（每条评论要么是知识要么是情感支持），以及由认知负荷推导的**时机**——通过计算帧级视频熵，仅在低信息区间插入评论。他们四人一组、共 20 名学习者的四条件消融发现，熵–时机模块在移除时对感知质量产生最强且最稳健的效应（Z = −2.85，r = 0.45，p = .004），这使脚手架的*排程*成为一个可测量的设计变量，而非包装细节。该研究还为自动化脚手架带上一则警示：[[generative-ai|ChatGPT]]-生成的评论一贯比教师评论更难读、词汇多样性更低、主题对齐更差，情感支持上的相关性缺口最大（[[ai-feedback-quality|反馈质量]]）。
- **被偏好的脚手架并不总是最有效的：** [[preferred-scaffolding-ai-mathematical-modeling|Zhu、Yang 与 Yang（2026）]]在组内实验中发现，学生在同伴与助教 AI 角色下表现最好（这类角色促进 [[collaborative-learning|协作]]推理），却偏好更指令化的导师与优等生角色——偏好与表现之间的分歧警告，不要把学习者偏好等同于 AI 支持数学建模中的有效脚手架。
- **结构更强的脚手架并不自动是更具能动性的：** 一个专家设计机器人相对普通 ChatGPT 提高了互动长度与自撰提示，但协作问题求解中的能动性在两种条件下都下降，而一致赞同而非批评是所观察到的最低能动性行为（[[preservice-teacher-agency-genai-design-learning-2026|Krushinskaia et al.（2026）]]）。

- **[[automated-assessment|自动评分]]作为有意的脚手架：** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen 与 Liu（2026）]]把自动口译评分系统当作 [[formative-assessment|形成性]]脚手架而非测量工具，在 46 名英语翻译与口译二年级学生中做了 14 周比较。脚手架只在它所针对的缺口可分解、可可靠评分且敏感可分度之处转化为增益：语言准确性与逻辑连贯性上升，而信息保真与表达流畅度保持平缓，保真度恰是自动与人工评分分歧最大的维度（r = 0.12）。它所强化的循环也是部分的。只有练习阶段的执行与监控与分数增益相关（r = 0.42），而学前规划落在量表近中点（M = 3.01），学生据前一次分数而非面前的任务设定目标。一个脚手架可以妥帖地落在表现阶段，却让"那种若做了便会使它变得不必要"的规划 untouched。
- **闭环脚手架对准学习者当前的边界：** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu、Luo 与 Li（2026）]]构建了一个音乐教育闭环，其中对演奏音频与乐谱的 [[multimodal]]错误检测，成为引导 [[reinforcement-learning|强化]]生成练习曲目的奖励，于是难度追随学习者当前的边界而非固定大纲：生成的练习轨迹与学习者技能画像的峰值余弦相似度为 0.962，且在 120 名本科生的 12 周准实验中，组别 × 时间的交互有利于有脚手架的一组（beta = 0.52，95% CI [0.31, 0.73]）。对自动化脚手架有两条限制随之而来。检测是分诊而非判断，因为节奏错误精确度为 89.7% 意味着每十条被标记的错误中约有一条是误报，而盲法专家评审把对音乐表现的支持评为该系统最弱之处，把解释留给教师。

## ZPD 关联

[[sociocultural-learning|维果茨基的最近发展区]]提供了理论基础：脚手架瞄准学习者能独立完成之事与其借助支持可达成之事之间的空间。AI 工具应当运作在这个区间内——足够的支持以促成进步，又不至于多到让学习被绕过。Sidorkin（2026）的研究生课程中出现了一种反转通常适应方向的配置：由学习者而非系统设定支持水平；阅读材料按需生成，学生通过迭代提示（节奏、定义、词汇密度、深度）来调节理解水平。对三份阅读日志的分析发现，在理解导向提示之后，AI 回应中定义性标记的出现频率比基线解释性文本高 3.4x 到 8.7x，最清晰的案例先建一层定义、再建一层编号的程序层，这使脚手架密度成为学习者请求的可测量属性，而不仅是系统掌握估计的属性。要求每次阅读至少追问三个问题，使这种调节成为常规，把文本变成一场交互，让教师看到本会错过的理解缺口。

脚手架形式必须匹配学习者已经能承载之物，而不仅是任务所需。在一项针对 6 至 15 岁儿童 [[creativity|创造性思维]]、含 24 个证据来源的系统 [[meta-analysis-systematic-review|范围综述]]中，[[niu-genai-children-creative-thinking-cognitive-development-review-2026|Niu et al.（2026）]]报告，低龄儿童缺乏文本提示所要求的精确语言与元认知控制，需要多模态、由成人协助的界面，而基于文本的 [[llm|LLM]] 在较大儿童与青少年中显示出更强的报告效果。提示依赖在低年级最强，且没有一项纳入研究考察发展性就绪阈值，于是作者把模态与脚手架选择当作一个开放的设计问题，交由学习者的能力而非便利来裁决。

### 关联

脚手架与 [[cognitive-offloading|过度依赖]]（不撤除的脚手架制造依赖）、认知负荷理论（脚手架管理认知负荷）、[[feedback|反馈回路]]（脚手架提供 [[formative-assessment|形成性]]反馈）以及 [[ai-literacy]]（学习者必须识别脚手架何时有益、何时取代学习）相连。

智能体必须动态而非静态地搭建脚手架：[[agentic-ai-pedagogical-best-practice-2026|Woollaston et al.（2026）]]识别出，自动化脚手架有保持静态而非随能力增长撤除的风险，并推荐动态适应与渐隐的脚手架——这是 [[agentic-ai]] 的一项关键护栏。CoMeT（Hou et al. 2026）同时给出了分离与*何时*撤除的依据：其支持在每次学习者未使用时上升一级，在被采纳时降到最轻一级，使 [[metacognition|元认知需求]]与"扣留型导师"保持统计等价（p_TOST = .004），同时在 48.1% 的会话中交付一件制品，相对 23.7%——是更多系统劳动，而非更少。它验证的触发因素是"对准"而非深度：完整演示之后，导师后来让出仍开放内容的 30.3%，贴上一件制品之后 25.9%，一句裸断言之后 20.4%，一次构建请求之后 33.7%，而未对准受支持决策的回合，后来让出 40.3%，对准的回合为 28.8%（11.5 点差异，95% bootstrap 区间 [2.1, 22.4]）。采纳很稀疏——首次请求后 37.0%，第三次后 21.8%——因此一条以学习者努力为键的撤除规则会把"没有回应"误读为就绪。


第四个区间使脚手架的来源可见：[[scan-framework-task-assignment-generative-ai-2025|Tsim 与 Gutoreva（2025）]]给维果茨基的区间加上"GenAI 已知"，使任务落入 Substitute（替代）、Complement（补充）、Aid（辅助）或 Non-negotiable（不可协商）——而 Non-negotiable 保留那些需要一个真人的内容，因为它关乎规范、意会，或风险太高而不宜交出。
- **按想法所处阶段而非按课程来放置 AI。** 六步放置框架把 AI 挡在第一次艰难尝试与最终无辅助检查之外，而在这之间为提示、示例与操练发放许可；如果 AI 让任务显得毫不费力，它就放错了位置（[[brcic-effortless-trap-productive-struggle-2026|Brcic & Frljic, 2026]]）。

脚手架必须情境适配，而非最大化：[[zhang-tutormoments-2026|Zhang et al.（2026）]]引入 TutorMoments，它评估 LM 导师是否只在需要支持时提供脚手架、在学生就绪时推动严谨，并避免过度脚手架（把认知需求削减到超过情境所需的程度）。最小化提示的前沿模型默认会过度脚手架，以有效挣扎为代价。

- **为有效挣扎搭脚手架的 AI。** [[kim-ai-productive-failure-adult-2026|Kim et al.（2026）]]推导出 AI 设计原则（非指令性支持、反思性设计、[[human-in-the-loop-ai]]），把脚手架保持在有效挣扎区间，而非坍缩为给答案；[[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al.（2025）]]显示 [[llm]] 导师可被引导为仅在严格必要时给帮助——保住了学习者自身努力的脚手架。

**脚手架撤除作为验证的执行机制。** [[kumar-genai-computing-education-systematic-review-2026|Kumar、Wongsirichot 与 Nanthaamornphong（2026）]]综合了 72 项计算教育研究，把脚手架撤除与护栏工具及 [[self-regulated-learning]] 设计并列为课程强制与 AI 产出做批判性互动的三种方式之一——结构性地（约束工具返回什么）、程序性地（反思日志、自测）与时间性地（逐步恢复要求独立推理的条件）。他们的证据是：AI 辅助下的效率增益并不 [[transfer-of-learning|迁移]]到无辅助表现，而失效模式——*伪学徒制*模式，学生看 AI 生成代码却不执行任务——正是"建模而不做整任务练习"。因此渐进式获取充当了一种强大新支持形式的渐隐时间表，而该综述把它扎根于 4C/ID：只有当学习者已有足够图式以批判性地与之互动时，辅助才有帮助（即最近发展区、[[cognitive-offloading]]）。

排序是脚手架的另一个杠杆：[[critical-thinking-genai-scaffolding|Vendrell 与 Johnston（2026）]]建议，在任何 AI 咨询之前先要求学习者的独立尝试，然后用模型生成反论而非答案，并设有刻意的无 AI 阶段，于是支持放大推理而非取代它。

## 规则引导的 vs. 即兴的脚手架

- **规则引导 vs. 即兴脚手架。** Looi、Liu 与 Sun（2026）形式化了一个对脚手架设计至关重要的区分：**规则引导脚手架（rule-guided scaffolding）**，其中教学由一套可审计的三层架构（诊断 → 意图选择 → 受约束的回应生成）支配，相对**即兴脚手架（ad-hoc scaffolding）**，其中有用的动作难以审计与复制。他们的小学数学研究显示，规则引导脚手架提升互动一致性、减少过早给答案与过早收束，并维持认知 [[student-engagement|参与]]——证据表明，脚手架动作的明确性与可审计性，对程序性领域的一致性与学习都重要。
- **脚手架作为绕过与卸载之间那条受约束的路径。** 神经可塑性–[[student-ai-interaction|AI 互动]]模型把脚手架命名为 LLM 帮助的三条路径中的第三条，与直接绕过和认知卸载并列，并以模型是否保住了任务本应训练的费力加工来定义它（[[naim-bypass-offload-scaffold-llm-learning-2026]]）。该模型的校准证据是一场脚手架约束的自然实验：在一项近 1,000 名高中 [[math-education|数学]]学生的研究中，无限制的 GPT-4 访问产生 48% 的练习增益，却在无辅助考试上有 17% 的赤字，而受提示约束的 GPT Tutor 产生 127% 的练习增益，考试赤字基本消除。设计教训与上述"规则引导 vs. 即兴"区分在更粗粒度上一致：决定脚手架能否被成功撤除的，是对导师可提供之物所加的约束，而非导师的存在。
规则引导与即兴之分越过导师、进入作业本身。一个 [[ai-integration-instructional-design-collaboratory-2026|跨机构教师协作平台]]发现，对 AI 产出的批评不会自动发生，于是必须把审计、比较、修订与论证生成内容的要求写进任务，而那些在 AI 进入之前先保护了独立学科分析的人，发现其学生能更批判地评估 AI 产出。[[bondurant-shaughnessy-ai-pedagogies-practice-2026|演练证据]]一致：职前教师与 AI 伙伴练习时，在有结构化演练后反馈的情况下使用了更多探询性与探索性问题。两例中，支持都是预先规定的，而非即兴的，把"被设计的指导"与"难以审计和复制的即兴帮助"分离开。

- **正确约束的脚手架，若约束未被实施，仍会失败。** [[ai-literacy-tool-design-programming-education-2026|Azimi（2026）]]建出了上述区分所规定的东西——每次会话 25 条提示的预算、15 分钟的 AI 使用上限、一次必需的会话末反思、不生成代码——并把 33 名硕士生随机分入它与无限制 [[generative-ai]] 使用两种条件，跨七周。作业表现与概念量表增益在两种条件下无差异。提示预算并未充当配给机制：一些学生把大部分花在头几道题上，难题上一条不剩，另一些结束时大部分未用，且在 Coach 条件内，恰是那些对"如何花一条提示"已有刻意策略的学生得分更高。约束提高了报告的 [[self-efficacy|信心]]，并作为一种自问习惯（这个问题值不值得问工具）跟随学生走出课堂，但它奖励了既有的自我治理，而非培养它。脚手架的可审计性与学习者使用它的能力，是两个分开的条件。
- **学习者无法验证的脚手架，是一个流畅的替代品。** 因为 [[chemistry-education|化学]]在可观察现象、微粒模型与符号记法之间推理，一个生成的答案可以局部有说服力而全局错误。[[vega-baudrit-genai-university-chemistry-education-review-2026|Vega-Baudrit 与 Rivera Álvarez（2026）]]在他们的 Presage-Process-Product 分析中把脚手架放在有效一侧，把不加批判的抄写放在失败一侧，并要求脚手架双向要求表征转换，因为一个正确描述中和反应的回答，仍可能声称每一个等当点的 pH 都是 7。验证被设计进任务，而非宣布为规则：学生识别一个错误假设、纠正一个单位或机理错误、把一个符号结构与一个亚微观模型比较，或论证为何拒绝一个生成的答案。因为学生无法验证他们尚不理解之物，[[prior-knowledge|先验知识]]与脚手架先行，而提示被当作一种认识论行为，由学习者规定答案必须满足的约束。

## 关联概念

- [[pedagogical-patterns]] — 支持在序列中该落在何处，以及为何"先尝试后求助"是承重规则
- [[problem-based-learning]] — PBL 把渐隐脚手架嵌在结构不良的问题周围
- [[learning-by-teaching]] — 通过解释为知识建构搭脚手架
- [[sociocultural-learning]] — 维果茨基基础：ZPD 与社会中介学习
- [[cognitive-offloading]] — 从不撤除的脚手架制造过度依赖
- [[feedback]] — 脚手架在支持撤除时交付形成性反馈
- [[ai-literacy]] — 识别脚手架何时支持、何时取代学习
- [[intelligent-tutoring]] — ITS 依掌握估计调整脚手架强度
- [[socratic-method]] — 不直接给答案的提问
- [[metacognition]] — 建立自我监控与自我调节的脚手架
- [[adaptive-learning]] — 自适应系统在学习者的 ZPD 内调制支持
- [[learning-design]] — 脚手架是一项核心教学设计策略
- [[help-seeking]] — 脚手架塑造学习者何时以及如何求助
- [[teacher-role]] — 教师搭脚手架，再随能力增长撤除
- [[pedagogy]] — 总括：AI 教育中的教学法与教学策略
- [[agentic-ai]]
- [[productive-failure]] — 有效失败
## 关联文章

- [[kumar-genai-computing-education-systematic-review-2026]] — 脚手架撤除作为强制验证的机制（VIE 框架）
- [[ai-standardized-patient-scaffolding-medical-2026]] — 评估面向临床问诊训练的脚手架导向多智能体大模型系统
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — 熵定时 AI 评论作为视频内知识与情感脚手架（Wang、Du & Jin 2026）
- [[guided-llm-scaffolding-independent-learning]] — 引导式 LLM 提示作为结构化学习干预
- [[scaffolding-critical-engagement-genai-minority-students]] — 面向少数群体学生的文化回应批判性参与脚手架与 GenAI
- [[rethinking-scaffolding-llm-tutors]] — LLM 导师中脚手架的设计模式
- [[concept-catalyst-engineering-scaffolds]] — 服务于概念转变的 Concept Catalyst 脚手架
- [[correct-answer-trap-ai-tutor]] — 提示何时有帮助 vs. 何时助长过度依赖
- [[critical-thinking-genai-scaffolding]] — 用 GenAI 为批判性思维搭脚手架
- [[veriforge-narrative-drafting-scaffolding-2026]] — 用 Veriforge 进行脚手架化叙事起草
- [[substitution-to-scaffolding-ai-harm-cycle-2026]] — 从替代到脚手架：打破自我强化的伤害循环
- [[preferred-scaffolding-ai-mathematical-modeling]] — AI 支持数学建模中的被偏好脚手架
- [[agentic-ai-pedagogical-best-practice-2026]] — 动态（渐隐）脚手架作为智能体 AI 的护栏
- [[zhang-tutormoments-2026]] — 当帮助适得其反：评估 AI 导师的有效挣扎
- [[kim-ai-productive-failure-adult-2026]] — 设计支持有效失败式学习的 AI 系统
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — 面向有效失败的 LLM 教学引导
- [[making-ai-tutoring-productive-mastery-math-2026]] — 让 AI 辅导变得有效：掌握式数学练习
- [[brcic-effortless-trap-productive-struggle-2026]] — 有护栏与无护栏的 AI：放置规则（Brcic & Frljic 2026）
- [[ai-supported-experimental-design-chemistry-2026]] — 实践化学中的 AI 支持实验设计
- [[scaffolding-systematic-reviews-2026]] — 以指导与 AI 为系统综述搭脚手架（Wang 2026）
- [[preservice-teacher-agency-genai-design-learning-2026]] — 职前教师在"为学习而设计"中 GenAI 互动时的能动性（Krushinskaia、Elen & Raes 2026）
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — 数学教师教育中贯穿教学实践法的 AI：结构化演练反馈提升了探询性问题（Bondurant & Shaughnessy 2026）
- [[ai-integration-instructional-design-collaboratory-2026]] — AI 整合作为教学设计：对 AI 产出的批评必须被布置，且学科分析先行
- [[ai-literacy-tool-design-programming-education-2026]] — 一个提示预算制 AI 学习教练：有脚手架与无限制的 GenAI 使用，以及为何仅靠约束未能产生学习（Azimi 2026）
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN：脚手架被重构为判定任务属于哪个子区间
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — 自动评分作为形成性脚手架：它只在目标缺口可分解、可靠且敏感可分度之处转化为增益（Chen & Liu 2026）
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — 在音乐练习中追踪学习者当前边界的闭环自适应脚手架，以错误检测作为分诊（Zhu et al. 2026）
- [[niu-genai-children-creative-thinking-cognitive-development-review-2026]] — 脚手架形式必须匹配儿童的发展能力，而非仅是任务（Niu et al. 2026）
- [[vega-baudrit-genai-university-chemistry-education-review-2026]] — 脚手架必须要求表征转换与验证，因为学生无法验证自己不理解之物（Vega-Baudrit & Rivera Álvarez 2026）
- [[genai-cognitive-scaffold-geometric-reasoning-2026]] — GenAI 作为连接视觉直觉与几何演绎证明的提示脚手架，单凭可视化不足之处（Davor 2026）
- [[guided-ai-tutor-impasse-resolution-2026]] — 考察引导式 AI 导师如何化解学生卡壳的变异
- [[structured-genai-training-physics-problem-solving-rct-2026]] — 在 STEM 问题求解中把学习者训练当作 GenAI 使用的脚手架（Huang et al. 2026）
