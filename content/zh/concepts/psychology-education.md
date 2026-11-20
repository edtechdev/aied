---
title: "心理学教育"
created: "2026-11-18T03:22:45-05:00"
updated: "2026-11-18T03:22:45-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [student-ai-interaction]
technology: [generative-ai]
assessment: [assessment-validity]
level: [higher ed, graduate]
confidence: medium
audience: [instructors, curriculum designers, faculty developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: concepts/psychology-education
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
connected_concepts: [social-sciences-education, humanities-education, ai-literacy, assessment-validity, feedback, self-efficacy, student-ai-interaction]
connected_articles: [richmond-nicholls-genai-psych-feedback-ai-literacies, baudin-ai-generated-mcq-psychology-exams-2025, ai-tutor-statistical-programming-adoption-2026, akkurt-counselor-trainees-chatgpt-simulated-client-2025, armagan-bogatekin-ai-attitudes-psychology-trainees-2026, mental-health-literacy-students-llms-2026, reed-ai-literacy-ethical-judgment-scenarios-2026, critical-genai-use-predictors, hu-psychological-predictors-continued-chatgpt-use-2026, hawkins-feedback-literacy-ai-essay-writing, burke-ai-proliferation-college-students-replication-2026]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **心理学教育**——把心理学作为一门学科来教：导论与方法学课程序列、本科专业，以及通向执业的心理与咨询训练。它在本知识库中拥有任何学科里规模最大的人工智能文献，而其中大部分文献根本不是在研究心理学课程。心理学专业学生是[[higher-ed|高等教育]]中最便利的样本。他们为关于[[motivation|动机]]与反馈的一般性研究提供受访者。只有较小的一组研究考察课程本身：一个二年级单元中的评估设计、一门统计学课程中的[[intelligent-tutoring|人工智能导师]]，以及人工智能既是工具又是职业风险的临床训练。这一区分之所以重要，是因为"心理学专业学生以某种方式使用[[generative-ai|生成式人工智能]]"这一发现，并不是关于教授心理学的发现。

## 值得思考的问题

- 心理学专业学生在高等教育中最容易招募，因此大多数关于"学生与人工智能"的研究实际上是关于心理学专业学生的研究。一个来自参与者池的发现能告诉你关于你自己课程的什么，又不能告诉你什么？
- 一个生成的题库可以可靠到可接受的标准，却几乎不测回忆以上的任何东西。就你的学生所得的成绩而言，哪个更重要：分数是一致的，还是题目测量了学位所声称的东西？
- R-Tutor 研究提示模型在一门统计学课程中引导而非作答。如果导师扣留答案，它教了什么是一个会作答的[[conversational-ai|聊天机器人]]没有教的？
- 咨询受训者用一位随和、情绪平淡、文化中立的模拟来访者进行了练习。这三者中哪一个最让你在受训者的第一次真实会谈中担忧，为什么？
- 临床训练是工具变成一项职业主张而非学习辅助的地方：一个推荐治疗方案的系统是在对一个人作出判断。你会在两者之间把线划在哪里，你项目中的谁应当来划这条线？

## 引言

心理学在这批文献中处于不同寻常的位置。它提供该学科的方法、构念与大多数受访者，同时它教授的科目，其核心技能——设计一项研究、读懂一个统计量、判断证据——正是生成式人工智能最常被指控走了捷径的那些。这一组合使心理学教育既成为人工智能文献中记录最充分的学科，也成为作为课程被研究得最少的学科之一。

把两者分开，就是该学科人工智能问题的全部。关于教授心理学本身所知的东西，比研究的体量所暗示的要窄：本科专业中的评估设计、统计学序列中的人工智能导师、人工智能以职业问题形式到来的临床与咨询训练，以及关于心理学专业学生知道什么、相信什么的调查证据。把心理学专业学生当作关于一般学生问题的便利样本的研究，并不是关于该学科的证据，这一差别每次都值得点明。

## 为什么心理学主导了这批文献

三个条件解释了这一体量。心理学系办参与者池，因此招募几百名本科生完成一份问卷几乎没有成本。教学与学习的学术在该学科中根基深厚，这给教师一条发表课程层面工作的路径，而医学与法学主要通过认证来走这条路。而该领域所研究的构念——动机、自我效能、反馈、[[critical-thinking|批判性思维]]——正是人工智能文献想要测量的构念，这使心理学成为开发与验证测量工具的自然场所。

结果是一个学科作为场景而非主体的文献。一项对五所大学 991 名本科生的调查——其中 300 名是心理学专业——告诉你一般学生如何使用人工智能；它不告诉你心理学学位是否应当要求一门禁用该工具的统计学课程。两个问题都值得问，而第二个才是这一区分存在的理由。

## 课程层面的证据

最清晰的课程研究是一项[[assessment|评估设计]]。[[richmond-nicholls-genai-psych-feedback-ai-literacies|Richmond 与 Nicholls]]在一个二年级心理学"媒介作业"中以 ChatGPT 取代了[[peer-assessment|同伴评估]]，学生要在其中把一篇已发表的文章转写为面向普通读者的新闻稿与视频，而这次重设计的要点在于任务要求什么，而非是否允许使用该工具。

评估生成是第二条线索。[[baudin-ai-generated-mcq-psychology-exams-2025|Baudin]]让 ChatGPT-4 为一门实验心理学课程写 80 道多选题，并在 120 名学生身上对它们跑了完整的心理测量流程：内部一致性可接受，重测信度中等，11.25% 的题目区分度差，Bloom 分布为 73.75% 的回忆对 8.75% 的分析或评价。这些题目是可靠的证据，证明学生能说出事物的名称，而对学生能否设计一项研究保持沉默。

统计学是第三条，也是证据最扎实的干预。[[ai-tutor-statistical-programming-adoption-2026|Préau 及同事]]在蒂宾根一门为期一学期、面向心理学本科生的 R 编程课程内部署了专门构建的"R-Tutor"，采用预注册的[[longitudinal-research|纵向设计]]，并提示导师去引导而非作答。

## 临床与咨询训练

临床心理学是人工智能以职业问题而非学习辅助的形式进入的地方。这里的两项研究沿这条线分开：一项关于模拟来访者对受训者做了什么，一项关于受训者彼此之间差异有多大。

[[akkurt-counselor-trainees-chatgpt-simulated-client-2025|Akkurt、Maurya 与 Brown]]用 GPT-4o 作为咨询受训者的模拟来访者。九份转录加一个四人焦点小组是单薄的证据，但模式很具体：[[simulation|模拟器]]降低了表现焦虑并建立了信心，而来访者过于轻易地同意、不带情绪上的细微差别、保持文化中立——恰好移除了咨询训练存在所要练习的那些抗拒与身份动态。

[[armagan-bogatekin-ai-attitudes-psychology-trainees-2026|Armagan-Bogatekin]]对六个领域中的 286 名心理学专业学生与心理治疗受训者建模，在每个领域都发现了三到四个潜在类别。不存在"平均的受训者"：怀疑、学习焦虑、职业焦虑与风险担忧构成彼此不同的剖面，而这些剖面随该工具是反馈辅助还是治疗推荐器而变化。

## 心理学专业学生知道什么、相信什么、做了什么

学生一侧的证据是文献中最大的部分，也是对学科最不具体的。

知识与判断：[[mental-health-literacy-students-llms-2026|Richter 及同事]]让 150 名心理学专业学生对 30 条心理健康陈述进行分类，并把结果与四个大语言模型各 80 次运行的结果相比较；[[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed 及同事]]用六个情境检验[[ai-literacy|人工智能素养]]能否预测 531 名本科生应用层面的伦理判断。

倾向：[[critical-genai-use-predictors|Hefter、Paaßen 与 Berthold]]发现批判性的 GenAI 使用由知识预测，而知识既通过[[self-report-measures|自我报告]]也通过客观测验来测量。认识取向与智识价值观承载了其余部分；[[hu-psychological-predictors-continued-chatgpt-use-2026|Hu]]发现持续使用由[[trust]]与学业[[self-efficacy|自我效能]]中介，而[[anxiety-and-stress|人工智能焦虑]]削弱了第一段路径；[[hawkins-feedback-literacy-ai-essay-writing|Hawkins 及同事]]在一项模拟的人工智能辅助写作任务中发现，反馈素养是论文成绩唯一的显著预测因子（β = 0.46）。

使用：[[burke-ai-proliferation-college-students-replication-2026|Burke 及同事]]调查了五所大学的 991 名本科生，发现大学阶段的使用率为 81%，学习取代写作成为最常见的任务，而 30.2% 把人工智能使用称为作弊的学生仍然在使用它。

上述每一项研究都是关于碰巧身为心理学专业学生的学生。这正是该学科作为研究场所的优势，也正是它作为文献的弱点。

## 研究借用的心理学

关于人工智能的教育研究，运行在一小组远早于它就已建立起来的心理学理论之上。为它们命名很重要，因为每一个理论对工具是否有帮助都有不同的预测。

[[cognitive-offloading|认知卸载]]认为，移除努力的工具也把学习一并移除。[[productive-failure|有效失败]]认为，答案之前的挣扎才是教学发生之处。[[scaffolding|支架]]认为，帮助必须被安排并被撤除，而不只是被提供。一项研究可以引用这全部三者，却仍然设计出一个不满足其中任何一个的工具，这就是理论应当放在方法部分而非引言部分的原因。

此处反复出现的框架是个体认知类的：[[self-regulated-learning|自我调节学习]]与[[metacognition|元认知]]、自我效能、用于动机的[[self-determination-theory|自我决定理论]]，以及经由其[[feedback-literacy|素养]]变体出现的[[feedback]]。上一节的研究是这一模式的典型：每一项都从这个家族取一个构念，把它作为机制来测量，并报告路径朝哪个方向走。Akkurt 是例外，也是更有意思的那一项：一个[[situated-learning|情境化]]设计，受训者在其中排练一项实践，而非习得一个命题。

有两项局限值得说明。理论通常被作为框架输入，而很少被拿来与对手理论对质，这正是[[theory-development-aied|人工智能教育中的理论发展]]所记录的弱点。而个体的分析单元本身有争议：[[sociocultural-learning|社会文化]]与[[activity-theory-aied|活动理论]]的解释连同[[distributed-cognition|分布式认知]]，把学习定位在房间里而非头脑中，这改变了聊天机器人在做什么。[[learning-theories|学习理论]]持有这张地图，而[[cognitive-psychology]]持有这些研究大多预设的那套机制。

当一篇论文说"支架"或"批判性思维"时，问清它指的是哪个理论的版本：这个词在每一处所做的工作都不同。

## 对心理学教师的启示

- **先决定学位是为了什么，再决定人工智能可以做什么。** 心理学毕业生需要评估证据、设计研究、解读统计量。如果这些就是成果，评估问题就是哪些任务仍能为它们提供证据。
- **把统计学课程当作检验案例。** 它在该学科中拥有最强的干预证据（R-Tutor），也最明显地诱惑人把人工智能当作计算器而非导师来用。
- **在 Bloom 层面而非信度层面审查生成的题库。** Baudin 的题库是可靠的，而且大多只测回忆。
- **在临床训练中，把工具与边界放在一起教。** 受训者的剖面彼此不同，而治疗推荐工具提出的职业身份问题，没有任何能力训练能够回答。
- **不要从参与者池样本推广到你自己的课程。** 那些一般性发现描述的是学生；你的课程是一个设计决定。

## 常见误解

- **"心理学专业学生能代表一般的学生。"** 他们只是便利的，并不具代表性，使用他们的研究通常也这么说。
- **"心理学教育中的人工智能主要是临床工具。"** 研究的最大份额关涉[[writing-education|写作]]、反馈与学习习惯；临床工具是一条规模小、时间近且独立的线索。
- **"可靠的生成题目就是可用的题目。"** 没有覆盖高阶成果的信度，产生的是一个测量得当却测错了东西的测验。
- **"受训者要么支持要么反对人工智能。"** 潜在类别的证据表明每个领域有四个或更多剖面，并随工具而异。
