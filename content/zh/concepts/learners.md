---
title: 学习者
created: "2026-09-18T03:20:00-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
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

> **综述：** 学习者是[[ai-education|教育中的AI]]的主要受众 —— [[k-12]]、[[higher-ed]]与[[adult-learning|成人教育]]中的学生，他们的作业、理解和自我感如今正被AI塑造。本页是本知识库学习者侧覆盖的总括：学习者经历什么（[[student-experience]]）、他们正成为谁（[[learner-identity]]）、他们仍选择什么（[[agency]]）、他们实际如何与工具互动（[[student-ai-interaction]]）、他们的努力与[[self-regulated-learning|自我调节]]在其之下是否存续（[[cognitive-offloading]]），以及AI系统如何为他们建模（[[student-modeling]]）。贯穿这些研究的反复发现是：同一个工具对不同学习者利弊迥异 —— 增益集中在[[prior-knowledge|先验知识]]、[[ai-literacy|AI素养]]与核查习惯本已具备之处，而逆转集中在AI替代了该任务本应培养的思考之处。

## 值得思考的问题

- 在你自己的情境中，一个新AI工具会最先触及哪些学习者，又会把哪些人抛在身后 —— 你凭什么这样认为？
- 研究常报告学生*相信*AI帮到了自己，而无助测量却显示没有增益，甚至是损失。如果学习者自己的叙述并不可靠，你会接受什么作为学习确实发生了的证据？
- 本页把学习者同时描述为使用AI的人，以及被AI建模的对象（[[student-modeling|学习者模型]]、[[knowledge-tracing|知识追踪]]、[[simulating-students|模拟学生]]）。一个学习者的模型应该在何处为教学提供信息，又在何处不再值得信任？
- [[self-regulated-learning|自我调节]]与[[prior-knowledge|先验知识]]决定了AI支持变成学习还是替代。这是一个待补救的学习者缺陷、一个待解决的设计问题，还是一个待修正的评估问题？
- 如果一群学习者在某个AI工具上表现不佳，工具的设计者通常是最后一个知道的人。在你的机构里，一个在部署前后持续倾听学习者的常规机制实际会是什么样子？
- [[agency|学习者能动性]]与[[learner-identity|身份]]与成绩一样处于利害之中。其中哪些是你拒绝为可测量的[[learning-gains|分数增益]]而交换的 —— 而你的评估设计会让这种拒绝变得可见吗？

## 引言

学习者在本知识库中以两种截然不同的面貌出现，混淆二者导致了该领域的大部分混乱。第一种，学习者是**使用AI的人**：他们提问、接受或抵制答案、失去或守住立场，并报告支持、内疚、焦虑与依赖的体验。第二种，学习者是**被AI系统建模的对象**：[[knowledge-tracing|知识追踪]]中的一个技能估计、[[cognitive-diagnosis|认知诊断]]中的一个潜在状态，或一个代替真人的[[simulating-students|模拟学生]]。关于前者的证据来自调查、访谈、日志分析与实验；关于后者的证据来自测量机制本身 —— 而一个学习者的模型是一个论断，不是一个学习者。

本页是两者的入口。它汇集本知识库覆盖的学习者侧概念，解释它们如何关联，并链接背后的研究。[[stakeholders]]覆盖同一领域的另一面 —— [[teacher-role|教师]]、[[administrator|行政人员]]、设计者与政策制定者 —— 两页应当一起阅读。

## 谁算作学习者

本知识库把学习者涵盖整个正式教育跨度：[[k-12]]中小学生、[[higher-ed|大学生]]、[[vocational-education|职业]]与[[professional-training|专业]]学习者，以及[[adult-learning|成人]]与[[lifelong-learning|终身]]学习者，包括[[special-education|残障学习者]]、[[neurodiversity|神经多样性]]学习者和[[multilingual-learning|多语]]学习者。有两条惯例值得注意。第一，"学习者"与"学生"并非可以随意互换：*学生*指一种制度角色，*学习者*指一种活动，一个人可以是其一而非其二（[[professional-training|职场培训]]中的员工是学习者但不是学生）。第二，学习者不是一个同质群体，而这种异质性正是研究不断揭示的东西 —— [[prior-knowledge|先验知识]]、[[self-regulated-learning|自我调节]]、语言、可及性与残障状况都改变着AI工具是否有帮助。

## 学习者经历什么

[[student-experience]]是教育中AI被研究最多的维度之一，其核心教训是：效应是混杂的，而非一致的。[[student-perceptions-ai-study-productivity-2026|关于学习生产力的调查工作]]发现学习者报告了真实的效率增益 —— 92.3%表示AI改善了他们的理解 —— 同时也有标题数字掩盖的落差：只有38.5%表示它减少了总体学习时间，一半人报告有时依赖AI而不尝试独立学习。[[uneven-impact-generative-ai-student-learning-2026|对依赖模式的分析]]更进一步：[[ai-literacy|AI素养]]与评价技能水平不同的学生，最终与工具处于性质不同的关系中，因此同一门课程政策对不同学习者产生不同结果 —— 对某些人是支持，对另一些人是替代。[[genai-student-experiences-uk-he-survey-2026|学生用自己的话描述了"最省力"的引力]]，[[academic-integrity]]与[[misconceptions]]页面将其视为一个设计与政策问题，而非道德问题。

情感线索与认知线索并行：[[anxiety-and-stress]]与[[well-being]]记录了关于被超越、关于被指控不当行为、以及关于所攻读学位之价值的焦虑。学习者关于AI的心理模型 —— 他们认为它是什么、以及认为它为什么而存在 —— 决定了他们能否用好它，这就是[[misconceptions]]与[[framing-ai-use-for-students]]贯穿学习者侧研究的原因。

学习者的叙述也使框定了大量学习者侧政策的诚信叙事复杂化。[[mulisa-students-genai-integrity-perspectives-2026|对一所埃塞俄比亚大学27名本科生的访谈]]发现GenAI使用近乎普遍，同时伴随真正分裂的[[ethics|伦理]]解读 —— 多数人把工具归功于提升了他们的成绩，少数人称课程作业中使用AI属不当行为，而几乎所有人都报告一个不平坦的竞技场，其中AI使用者的得分高于勤奋的独立完成者，有人把这一效果描述为扼杀了他们的勤勉感。文献中学生之于不当行为程序的一面，薄于学生之于使用的一面，但[[munoz-misconduct-allegation-evidence-2026|对1,162件GenAI指控案卷的分析]]展示了当制度回应到来时学习者面对什么：最常引用的证据是最弱评级的那一类，没有最低证据门槛约束案件是否推进，而证据薄弱的案件中的学生被推向申诉。

## 身份、能动性与作者权

学习者侧研究不只关乎结果。[[learner-identity]]追问学习者相对于一门学科和相对于AI正成为谁，证据双向展开：设计良好的使用能支架学科归属感，而外包会侵蚀"作品是自己的"这一感觉。[[agency]]追问学习者仍控制着什么。本知识库把两者都视为真正处于利害之中，而非成绩的柔性附属：一个用AI产出正确输出、却不再认得背后推理的学习者，失去了成绩未记录的东西。作者权问题是学习者自己挣扎最多的地方：[[mulisa-students-genai-integrity-perspectives-2026|被访谈关于GenAI与诚信的学生]]声称原创性，因为不存在其他作者 —— "如果这不是我的原创想法，那又是谁的？" —— 而另一些人得出结论说作品不代表自己，还有人推理到把该工具认定为一个它不可能是共同作者，因为AI不是人。

## 与AI互动：学习者实际做什么

[[student-ai-interaction]]页面汇集学习者向AI要求什么、他们的提示与对话如何演进，以及为什么互动质量比可及性更好地预测[[learning-gains|学习结果]]。[[student-llm-interaction-taxonomy-review-2026|一项对来自33项研究的46种分类法的快速范围综述]]发现该证据基础在概念上碎片化 —— 研究在数据来源、类别方案和分析单元上各不相同，因此"高质量互动"在它们之间还不是一个可比较的构念，综述的呼吁是建立一个面向学习的[[llm]]使用的收敛式分类法，而非声称已存在一个。[[student-ai-conversations-cognitive-engagement-2026|对聊天内容的研究]]发现学生以特有的方式自我约束，投入从探查和检验论断到接受第一个看似合理的答案不等。[[help-seeking]]提供更早的框架：求助是一种技能，而向错误的帮手以错误的方式求助是一种已知的失效模式，AI并未消除它。

## 努力、自我调节与表现-学习落差

这是学习者侧证据最有分量的地方，因为它把学习者*能与AI一起做什么*与他们*无AI能做什么*分开。

[[cognitive-offloading]]汇集过度依赖的证据；[[genai-performance-vs-learning]]陈述核心方法论要点，即受助表现与无助能力必须分开测量；[[layer-sensitive-cognitive-offloading-writing-2026|写作的分层敏感研究]]分离表层、结构、观念与推理外包，发现在约束最少的条件下受助表现最高，而八周后独立表现最低；[[shaw-nave-cognitive-surrender-2026|Shaw与Nave的"认知投降"论述]]命名了那种使委派成为习惯而非策略的性情。[[metacognitively-discordant-completion-genai-2026|元认知失调]]记录了那个令人不适的中间情形 —— 注意到自己并不理解却仍然提交的学习者 —— 而[[verification-quality-reliance-calibration-genai-2026|核查研究]]表明"检查"本身是一种分级技能，而非二元习惯。在设计侧，[[desirable-difficulties|生产性困难]]与[[reducing-ai-misuse]]汇集了恢复该任务本应要求的努力的干预。

## 作为模型的学习者

技术谱系最长的学习者侧概念，是那些把学习者表征给系统的概念。[[student-modeling]]涵盖这一族：[[knowledge-tracing]]随时间估计技能习得、[[cognitive-diagnosis]]定位具体迷思概念，以及消费这些估计的适应性与[[personalized-learning|个性化]]系统。[[simulating-students]]及其[[simulating-students-llm-review-2026|综述]]把[[simulation]]视为在真实学习者不可用时测试[[intelligent-tutoring|辅导系统]]和生成数据的一种方式 —— 一个明确临时性的替身，而非替代品。有两条告诫贯穿这一文献：模型估计是从行为作出的推断，对题目与界面的构建方式敏感；而[[demographic-signals-llm-student-assessment-2026|对人口学信号的研究]]表明，评估系统能拾取从未被打算纳入构念的学习者身份代理（语言、背景）。[[self-report-measures]]覆盖研究侧镜像式的问题：学习者对自己学习所说的，常常与他们能做的不一致。

## 学习者之间的公平

因为收益跟随既有优势，学习者侧工作与[[equity-in-ai-education]]密不可分。[[digital-divide]]和付费模型档位的可及性决定了谁得到最强工具；[[bias-mitigation|公平]]关切支配习得模型如何对待不同群体；[[inclusive-learning]]、[[accessibility]]、[[special-education]]与[[neurodiversity]]覆盖需求被默认设计忽视的学习者。这一研究的实践教训是："AI帮助学生"不是一个发现 —— 发现永远是*哪些*学生、在*什么*条件下、带着*什么*先验知识与可及性。两个群体承担了这份风险中独特的一份。[[wright-transcription-not-generation-2026|Wright（2026）]]论证，围绕"[[generative-ai|生成式AI]]"而非围绕功能撰写的禁令，会捕获那些转换学习者已创作作品之格式的转录工具，由此产生的误判最重地落在依赖语音转文字与OCR的残障学习者身上，包括在AI驱动的OCR已取代停产辅助软件之处；[[harerimana-remote-proctoring-nursing-scoping-2026|一项远程监考的范围综述]]就评估条件作出平行的论证，发现连通性、数据费用与设备故障决定了谁根本能被评估 —— 这是一个公平性发现而非技术发现，且集中在中低收入环境。

## 本页的位置

与[[stakeholders]]一起阅读，了解学习者周围的人；与[[pedagogy]]和[[learning-design]]一起阅读，了解教师如何利用这些发现。[[assessment]]决定哪些学习者能力最终变得可见；[[limitations-in-aied-research]]解释了为什么学习者侧证据大多是短期的、自报的、在便利样本上进行的；[[misconceptions]]则是学习者自己通常的入口。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — 学习者如何感知、与AI互动并受其影响
- [[learner-identity]] — 学习者相对于一门学科和相对于AI正成为谁
- [[agency]] — 学习者仍控制并选择什么
- [[student-ai-interaction]] — 学习者实际向AI要求什么，以及对话如何演进
- [[cognitive-offloading]] — 过度依赖与以AI替代思考
- [[self-regulated-learning]] — 规划、监控并调整自己的学习
- [[help-seeking]] — 求助得当，以及学习者求助不当时的失效模式
- [[metacognition]] — 知道自己理解什么、不理解什么
- [[motivation]] — 学习者为何坚持或停止
- [[self-efficacy]] — 学习者对自身能力的信心
- [[student-engagement]] — 行为性、情感性与认知性投入
- [[prior-knowledge]] — 决定支持变成学习还是替代的背景知识
- [[student-modeling]] — 在系统内部表征学习者
- [[knowledge-tracing]] — 随时间估计技能习得
- [[simulating-students]] — 作为临时替身的LLM模拟学习者
- [[ai-literacy]] — 决定学习者能否用好AI的能力
- [[equity-in-ai-education]] — 谁受益、谁被落下
- [[well-being]] — AI介导学习的焦虑、压力与情感代价
- [[misconceptions]] — 学习者带入AI的心理模型
- [[stakeholders]] — 同一领域的另一面：教师、领导者、设计者
- [[assessment]] — 哪些学习者能力最终变得可见

## 关联文章

- [[uneven-impact-generative-ai-student-learning-2026]] — 依赖模式与评价素养分裂了学生结果
- [[student-perceptions-ai-study-productivity-2026]] — 学习者报告效率增益，同时伴随依赖之忧
- [[student-llm-interaction-taxonomy-review-2026]] — 面向学习的学生-LLM互动分类法
- [[student-ai-conversations-cognitive-engagement-2026]] — 学生-AI聊天中的学科特异性模式
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 有受助表现增益而无独立能力
- [[genai-performance-vs-learning]] — 为什么受助表现与无助学习必须分开测量
- [[shaw-nave-cognitive-surrender-2026]] — 认知投降作为一种性情，而非意外
- [[metacognitively-discordant-completion-genai-2026]] — 注意到自己并不理解却仍然提交的学习者
- [[verification-quality-reliance-calibration-genai-2026]] — 核查质量与依赖校准
- [[simulating-students-llm-review-2026]] — 模拟学生：架构、机制与局限
- [[stanbkt-bayesian-knowledge-tracing]] — 贝叶斯知识追踪中的参数估计
- [[demographic-signals-llm-student-assessment-2026]] — 基于LLM的评估中的隐性与显性人口学信号
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI素养、投入与心理资本
- [[genai-student-experiences-uk-he-survey-2026]] — 学生描述"最省力"的引力
- [[mulisa-students-genai-integrity-perspectives-2026]] — 学生论GenAI是作弊工具还是学习伙伴
- [[munoz-misconduct-allegation-evidence-2026]] — 不当行为指控案卷实际包含什么作为证据
- [[wright-transcription-not-generation-2026]] — 过度包容的AI规则与它捕获的学生
- [[sharma-judgment-visible-genai-assessment-2026]] — 诚信作为评价性判断而非服从
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 远程监考对学生的情感与公平代价
