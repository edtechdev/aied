---
title: "小学教育"
created: "2026-11-18T03:22:52-05:00"
updated: "2026-11-18T03:22:52-05:00"
type: concept
pedagogy: [scaffolding, game-based-learning, self-regulated-learning, social-emotional-learning]
technology: [adaptive-learning, intelligent-tutoring, conversational-ai, generative-ai]
level: [primary education, k 12]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: concepts/primary-education
source_updated: "2026-11-15T06:45:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
connected_concepts: [developmental-psychology, math-education, reading-education, writing-education, digital-divide, equity-in-ai-education, teacher-role, curriculum-design, privacy, assessment]
connected_articles: [ai-elementary-language-education-review-2026, guo-ai-literacy-developmental-paces-2026, yu-k12-ai-education-ai-literacy-meta-analysis-2026, yim-ai-literacy-primary-schools-review-2025, barokah-ai-elementary-science-review-2026, karampa-students-game-designers-ai-literacy-2026, llm-comparative-judgment-writing-screening-2026, melo-llm-classroom-observation-teach-2026, age-tiered-ai-literacy-guidebooks-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, tutor-case-bench-challenging-behaviors-2026, llm-simulating-student-scientific-thinking-2026, human-ai-complementarity-social-emotional-learning-2026]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **综述：** 小学教育中的 AI 主要用于在早期读写与算术中实现差异化练习、为教师起草材料，以及给孩子一个可以拿来提问的对象。控制最严格的研究显示，收益很小，且取决于 [[teacher-role|教师]] 的组织引导而非模型本身；而一项专为单独检验 [[adaptive-learning|适应性]] 而设计的试验发现它并无优势。本页涵盖证据在辅导、阅读、写作与 [[ai-literacy|AI 素养]] 方面支持什么，以及为什么班级层面的部署会改变五岁至十一岁儿童"何谓好的实践"的含义。

## 值得思考的问题

- 一套辅导系统提高了所教词汇的得分，却没有提高标准化词汇成绩。学校应当依据哪个结果来采购？
- 在一项二年级试验中，适应性辅导系统的表现并不优于固定序列。如果适应性不是有效成分，那有效成分是什么，你又会如何检验它？
- 在一项研究中，儿童对聊天机器人的 [[trust|信任]] 程度与对老师或朋友差不多。如果你假定课堂里存在这种程度的信任，你的课堂会有什么改变？
- 多数小学部署是班级层面的：一块共享屏幕、一位教师输入提示词、孩子们在旁边看。这能实现什么"人手一台设备"做不到的事？

## 引言

小学教育大致覆盖五岁至十一岁，这一阶段儿童学习解读文字、用数字推理，并在一间只有一位成人的教室里活动。AI 通过随儿童作答而调整的练习软件、为教师起草教案与 [[feedback]] 的工具，以及儿童可以直接对话的 [[conversational-ai|对话式智能体]] 进入这一年龄段。三者之中，第三类证据最弱，暴露也最直接。

儿童的键盘技能有限，[[metacognition]] 尚在发展，而且强烈倾向于把一个语言流畅的系统当作有知识的人。教室里设备数量少于儿童数量，因此现实的分析单位是一个练习站点、一块共享屏幕或一条由教师中介的工作流，而不是每个学生配一位辅导者。成人还承担着法律与发展上的责任，任何供应商合同都无法把这些责任转移出去。

## 证据基础能支撑什么

- **文献面广而根基浅。** 一项综述梳理了 2013 年至 2025 年间小学 [[language-learning|语言教育]] 中 AI 研究的 31 项研究，发现工作集中于口语、识字与词汇，语法、听力理解与手语几乎未被研究。多数为 [[qualitative-research|质性研究]] 或 [[mixed-methods-research|混合方法研究]]，样本量中等，且未标明年级段。

- **最强的小学语言教学试验其实很温和。** 一项 [[meta-analysis-systematic-review|范围综述]] 覆盖 119 份关于小学英语中 AI 中介工具的报告，其中只有一项集群 [[rct|随机试验]]，涉及 217 名二年级 [[multilingual-learning|英语学习者]]。该试验在所教单词上得到 .38 的效应量，而在标准化词汇与 [[reading-education|阅读理解]] 上的效应不显著（[[li-zhou-ai-tools-primary-english-scoping-review-2026|Li 与 Zhou，2026]]）。

- **一个个性化分数学习平台未能胜过常规教学。** 在五天里，常规教学组在分数理解上的进步显著大于 Mathbot 组。剔除流失与异常值后，最终样本为 22 名学生，且对照组比处理组低一个年级（[[ai-powered-personalized-learning-elementary-fractions-2026|Holman，2024]]）。

- **合并后的辅导效应既小又脆弱。** 一项荟萃分析纳入美国 K-12 学校中的 18 项实验与 11 套 [[intelligent-tutoring|智能辅导系统]]，得到 g = 0.271。小学段的效应维持在 g = 0.266，包含农村学校的研究中降到 g = 0.146，超过六个月后降至不显著的 g = 0.110（[[leite-its-k12-meta-analysis-2025|Leite 等，2025]]）。

平均效应为正、幅度小，并且对情境、时长与所选结果指标敏感。

## 辅导与适应性练习

- **单靠适应性一无所得。** 一项现场实验让 132 名二年级学生用 30 分钟使用同一数学辅导系统的两个版本之一，两者在内容、界面、反馈与提示上完全相同，只有任务选择方式不同。后测分数没有差异，F(1, 124) = 0.32，p = .574；报告的努力程度与愉悦感也没有差异（[[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley、Berner 与 Schmalfeldt，2026]]）。

- **带来增益的是培训，而不是系统。** 在巴西的 19 个公立学校班级中，由受过培训的教师授课的学生在"仅培训"条件（15.15 分）与"培训加系统"条件（12.31 分）下都优于对照组。加入系统没有带来进一步增益，−4.33，95% CI [−17.29, 7.23]；教师表示拍摄作业并修正识别错误额外耗费了时间（[[rodrigues-aied-unplugged-numeracy-2026|Rodrigues 等，2026]]）。

- **使用剂量与阅读增长同步，而剂量由教师决定。** 在一所特许学校，一年级与二年级学生按登录分钟数被分为高剂量、低剂量与零剂量三组。高剂量组相对低剂量组的增益为 g = 0.56；高剂量对零剂量达到 g = 0.65，但 p = .026，落在校正后的 .025 阈值之外。低于第 25 百分位的学生显示出 g = 0.89（[[burns-ai-tutor-reading-growth-2026|Burns 与 Morton，2026]]）。

系统从来不是全部的处理。教师决定谁使用、用多久，以及系统失效时怎么办。

## 阅读、写作与反馈

- **当教师参与讨论时，反馈改善了写作。** eRevise 为五、六年级学生的论证写作提供关于证据使用的 [[ai-feedback-quality|自动反馈]]。在路易斯安那州八个教区的 34 名教师与 609 名学生中，仅凭反馈特征得分即有所提高，而教师给出实质性回应的课堂提高更多。对证据使用的概念性解释从 18.1% 上升到 41.9%（[[correnti-erevise-validity-argument-formative-assessment-2026|Correnti 等，2026]]）。

- **适应性反馈胜过了制作精良的通用指导。** 在一项预注册的组内实验中，155 名德国五、六年级学生修改了六份简短提纲，其中三份得到针对其本人文本的 LLM 反馈，另三份得到在结构、语气与长度上相匹配的专家撰写指导。提纲质量中位数在通用指导下从 2 升到 3，在适应性反馈下从 2 升到 5（[[ai-feedback-adaptivity-children-plans-2026|Sukjaitham 等，2026]]）。

- **为期九周的 [[generative-ai|生成式 AI]] 写作项目改变的是情感，而非深度。** 在中国东部，301 名五、六年级学生按班级分配，项目提升了理想的二语写作自我与学业韧性，并改善了语言运用。它没有改变成长型思维、认知或元认知投入，也没有改变组织性；效应都很小：[[motivation|动机]] 的偏 η² 为 .030，语言运用为 .014（[[genai-writing-program-primary-l2-motivation-engagement|Lu 等，2026]]）。

针对儿童本人尝试的权变性反馈能起到通用指导起不到的作用，而当成人接过反馈所提出的问题时，增益还会扩大。

## AI 素养与儿童自己对聊天机器人的使用

- **儿童会很快信任一个行为良好的聊天机器人。** 63 名 6 至 14 岁儿童在美国一所公立学校使用了一个限定话题的聊天机器人。52% 总体上信任其回答，35% 像信任老师或朋友那样信任它，约三分之一愿意向它倾诉。儿童用自己已知答案的问题来检验其可信度（[[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed 与 Martin，2025]]）。

- **AI 知识随年龄增长，安全判断则不然。** 在 71 名 10 至 16 岁儿童中，基础 AI 知识随年龄增长，β = 0.17。对 AI 安全重要性的评分（M = 2.51）与对当前 AI 安全程度的评分（M = 2.77）都聚集在四点量表中点附近，且没有年龄效应。一名 12 岁儿童推理说："如果他们是好朋友，他就不会那么监视你。"（[[children-ai-safety-misconceptions-2026|Leisten 等，2026]]）

- **关于 AI 的教学能带来很大的 [[self-report-measures|自陈]] 增益。** 一项荟萃分析纳入 16 项以 AI 本身为教学内容的研究，汇总了来自 3,837 名 K-12 学生的 57 个效应量，g = 0.892，异质性 I² = 94.68%。

- **面向小学高年级已存在经验证的自陈量表。** 15 题的 AI 素养 [[self-assessment|自评]] 问卷覆盖 4 至 6 年级的"学习 AI"、"AI 如何运作"与"与 AI 共同生活"，CFI = .994，alpha = .934。作者声明它测量的是感知到的能力，而非表现出的能力（[[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan 与 Srikoon，2025]]）。

这里的 AI 素养不是把某一套 [[curriculum-design|课程]] 简化。面向九岁儿童的框架与面向十七岁儿童的框架在种类上不同：年幼学习者需要故事、[[metaphors-and-analogies|类比]] 与动手制作，年长者则能批判一个系统并为一项决定作出说明。

## AI 素养包含什么，研究又测量了什么

一项 2025 年对 25 项小学实证研究的综述充实了这一主张的内容：它所勾勒的构念有四股，而它们的教学比例极不均衡。[[yim-ai-literacy-primary-schools-review-2025|Yim 与 Su（2025）]]发现，与 AI 互动的数字素养出现在 25 项研究中的 19 项，计算思维 10 项，AI 伦理 10 项，而批判性数据素养仅 5 项。

因此，一个编程单元只能触及四股中的一股。那股能让九岁儿童看见训练数据如何塑造分类器输出的素养，恰恰是文献大多跳过的。Yim 与 Su 将此模式解读为技术化框架，把社会意涵推到配角位置。

教学遵循建构主义逻辑，但对象是智能体而非纸张。智能体出现在 25 项研究中的 15 项，以软件为核心的设备 8 项，非插电活动 3 项；Teachable Machine、Jibo、Cozmo 与 Alexa 让儿童无需写代码就能训练模型。在 16 项指明框架的研究中，8 项使用建构主义或建构论，6 项使用 ARCS 模型。综述者质疑那种先教基于规则的编程、再教数据驱动学习的常见顺序，因为机器学习要求儿童筛选示例，而不是编写规则。

什么算证据，比教了什么更薄弱。问卷出现在 25 项研究中的 19 项，常常只是关于准备度或意愿的一次性题项，而 25 项中只有 15 项报告了任何学习结果。访谈（11 项）与作品量规（8 项）才是概念理解显现的地方。这正是上文那份经验证的 [[self-assessment|自评]] 量表所立足的基础：一件测量感知能力的可靠工具，置身于一个很少检验表现能力的文献之中。

一项关于小学科学研究的系统图谱从另一个语料库抵达了同一问题。在 2023 年至 2026 年初 103 篇 Scopus 收录文献中，[[barokah-ai-elementary-science-review-2026|Barokah、Hermita 与 Putra（2026）]]发现结果指标正向情感与调控领域扩展，而认识论结果依旧单薄。很少有研究追问儿童能否把观察与推断分开，或判断 AI 生成主张的限度。他们的评估警告针对这一学段：小学高年级的表现性任务产出的是不完整的解释、图画与手势，而把发展上合理的答案判为错误的评分者，会抹掉形成性价值。两个文献的作者都集中于中国、美国与香港，小学综述还补充指出性别差距，男生报告的自信与准备度更高（Dai 等，2020，转引自 Yim 与 Su）。

## 这一学段真正重要的设计决策

- **在班级层面部署，而非设备层面。** 一块共享屏幕加一位输入提示词的教师，使输出始终处于成人审阅之内；教师中介的工作流还能覆盖从未接触该工具的学生。巴西的非插电设计是最清晰的案例：孩子用纸笔，教师用相机与服务器。

- **把核验劳动计入成本。** 算术试验中的教师看重现成的练习清单，但把拍摄、等待与修正识别错误列为代价。工作量与增益负相关，其中心理需求最为明显，为 −2.569。

- **先培训，再规模化。** 受调查的 302 名土耳其小学教师中，仅 19.2% 接受过任何 AI 培训，而培训与使用频率是与积极看法关联最一致的变量。意愿（M = 3.98）远高于经验（M = 3.00）（[[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci 与 Uygun，2026]]）。

- **守住个人知识与共享知识的边界。** 生成的教案看上去像是经过集体验证的实践，却不带任何共同体认可。风险最重地落在新手身上，他们的 [[pedagogy|教学法]] 内容知识仍在形成（[[webb-pck-genai-2026|Webb 等，2026]]）。

- **先决定数据存放在哪里，再选择模型。** 一台由学校托管、参数量 1B 至 13B 的小型 [[llm|语言模型]]，仅可在校园网内访问、禁止对外流量，用推理深度换取架构层面的隐私。检验标准是领导者能否解释并控制儿童数据发生了什么（[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar 与 Iqbal，2026]]）。

- **把技能而非接触机会当作 [[equity-in-ai-education|公平]] 的杠杆。** 在荷兰 4,497 名六年级学生中，起中介作用的是数字素养，而非 AI 使用强度，它连接了背景与 [[learning-gains|成绩]]（[[ai-divide-ses-personality-primary-education-2026|Wang 等，2026]]）。

## 关联

小学教育处在 [[k-12]] 之内，继承了它的 [[educational-policy-ai|政策]] 与教师能力问题，但发展上的约束是它自己的。相邻的 [[early-childhood-elementary-ai-education|幼儿教育]] 文献覆盖学前与入学最初几年，那里由游戏与成人 [[scaffolding|支架]] 主导。[[secondary-education|中等教育]] 大约从十一岁接续，学科教研组与 [[summative-assessment|考试]] 取代了单一教师的课堂。

## 对实践的启示

**对教师**

- 先确定语言或数学目标，再选择工具功能。AI 支持在进入某项任务时有效，而非替代一项任务时有效。
- 把适应性练习作为一段简短、有记录的站点来运行，按儿童核查分钟数，而不是按班级看采用率。
- 在允许儿童使用聊天机器人之前，先问他们聊天机器人是什么、谁能看见他们输入的内容。

**对学校领导者**

- 为任何本地托管决策的第二年和第三年计价：打补丁、备份，以及负责它的技术人员。
- 对每一份流通的 AI 起草教案或评语集指定一名具名审阅者，并把审阅时间排进日程。
- 评估阅读或数学工具时，把标准化测量与近端测量放在一起看。

**对研究者**

- 在效应量之外报告剂量、年级段与实施支持；多数小学研究漏掉三者之一。
- 在设计上把工具与成人工作流分开；在同时检验两者的试验中，培训效应与系统效应无法区分。
- 测量过程，而不仅是后测分数。提问日志、修改记录与对话量规能捕捉自陈量表捕捉不到的东西。

## 常见误解

- **"适应性就意味着更好。"** 适应性命名的是一种机制，而不是一种结果：那套调整任务难度的二年级辅导系统，其后测分数与固定序列在统计上无法区分，F(1, 124) = 0.32，p = .574。

- **"在项目所教题项上的增益就证明了学习。"** 在小学英语试验中，优势出现在干预所覆盖的单词上，而在标准化词汇与阅读理解上消失了。

- **"儿童会以健康的怀疑态度面对聊天机器人。"** 在上述研究中，信任形成得很快：多数人接受了系统的回答，超过三分之一像对待老师或朋友那样对待它。

- **"年幼儿童拿到的是同一份 AI 素养大纲的简易版。"** 跨学段变化的是任务的种类，而不是难度：早期是故事与制作，后期是批判与问责。
