---
title: 信任
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, human-ai-collaboration]
technology: [educational-robotics, intelligent-tutoring]
ethics: [trust]
confidence: high
translation_of: concepts/trust
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

> **信任** —— 学习者、教育者与机构依赖一个人或一个人工智能系统进行学习、判断与决策的意愿。在 [[ai-education|教育中的人工智能]] 中，信任横跨两个相关但不同的领域：**对人工智能的信任**（对人工智能系统或智能体的胜任力、透明性、可靠性与善意的信心）与**人际信任**（学生与教师之间、学习者与同伴之间以及贯穿机构的关系性信任）。两者都是双刃剑：恰当的信任促成生产性的 [[student-engagement|参与]]，而过度信任招致 [[cognitive-offloading|过度依赖]]，信任不足则挡住有益的使用。核心挑战是**校准** —— 把信任对齐到实际可靠性，无论那可靠性属于一个模型还是一个人。

## 值得思考的问题

- 当你说“信任”一件人工智能工具，相对于信任一位教师或同事，你描述的是同一件事吗？把信任放在一个系统上和放在一个人身上，有什么相似、又有什么根本不同？
- 有一个记录在案的“信任—效用差距”：一件工具的表面胜任力常常超过它的实际可靠性。回想一件看起来令人印象深刻却让你失望的工具，或一件看似有限却证明可靠的工具。是什么塑造了它的外观与它真能做到之间的差距？
- 设想一个总是同意你、从不挑战你想法的智能。它可能让人感到舒适且可信 —— 但同意等于可靠吗？如果你依赖的工具从不回推，你可能在放弃什么？
- 本页论证，教师对人工智能的信任塑造学生如何信任该人工智能 —— 两个领域相互作用。在你熟悉的一门课程中，教师对人工智能的热情或怀疑会如何影响学生接受还是质疑这件工具？
- 学生往往更多依据与教师的舒适感而非政策来决定是否披露自己的人工智能使用。如果你是一名（或曾是）学生，什么会让你愿意就使用人工智能诚实相告 —— 什么会让你隐瞒？这说明了课堂里的信任实际上是如何建立的？
- 一项发现：一个警告“我可能会出错”的人工智能导师促使学生寻求更多帮助，而非更少。这提示，承认局限是削弱还是强化了支撑真实学习的信任？

## 引言

对人工智能的信任由被感知的胜任力、透明性、一致性，以及系统是否看似与学习者的目标一致所塑造；它与 [[ai-literacy]]（知道该信任什么）、[[critical-thinking]]（评估输出）与负责任的人工智能设计紧密相连。相比之下，人际信任通过关系、披露、反馈与 [[pedagogy|教学]] 关怀建立 —— 即学生在决定一位教师或一个人工智能是否是可信指导来源时所依赖的品质。两个领域日益相互作用：人工智能被编织进师生关系，因此学生如何信任其教师，塑造了他们如何信任（或质疑）该教师所认可的人工智能工具。

## 对人工智能系统的信任

本知识库的 [[research-methods-aied|研究]] 考察学习者何时恰当地信任人工智能生成的指导。[[ai-fallibility-warning-help-seeking|关于人工智能易错性的警告]] 可以改善校准：一个简单的透明性干预，告诉学生人工智能导师可能会犯错，在一个数学 ITS 中增加了 [[help-seeking]]，提示诚实的局限促进而非破坏恰当的依赖。[[calibrating-trustworthiness-llm-education-2026|与学习工程师共同设计可信度指标]] 表明，信任最好建立在可观察、达成共识的标准上，而非被假定的能力上。[[fouad-bentley-trust-utility-gap-physics-2026|物理]] 与 [[t2i-competence-paradox-2026|图像生成]] 研究揭示了一种持久的*信任—效用差距* —— 用户必须在一件工具的表面胜任力与它在某任务上的实际可靠性之间权衡。在最年幼的用户中，[[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] 发现，52% 的儿童（6–14 岁）总体上信任一个按年龄定制的聊天机器人，35% 像信任教师或朋友那样信任它，约三分之一愿意向它倾诉；儿童还会用已知答案的问题主动测试它的可信度，且信任没有统计显著的年级差异 —— 说明早期的信任可以在批判性评估之前形成。

关于*一个系统是什么* —— 而不只是它能做什么 —— 的透明性，同样塑造校准：Amico 陪伴原型明确了自己的身份与局限，其意大利—中国试点发现，学习者把它认作一种有界的支持工具，而非自主导师或关系性替代，避免了拟人化的过度信任（[[ai-pedagogical-accompaniment-amico|Benedetti (2026)]]）。

在高等教育机构中，杠杆可能是有用性而非规则：对一所大学 2,121 名学生、教师与职员的调查发现，被感知的有用性是与对人工智能信任关联最强的因素（β = 0.402），而被感知的政策清晰度为正但更弱（β = 0.223）（[[ai-adaptation-gap-higher-education-2026|Braun & Khafizov, 2026]]）。

**对准确性的不信任可以与管理该工具的信心并存。** 在一项对四所澳大利亚大学 8,021 名学生的调查中，51% 不信任生成式人工智能的事实准确性，而 76% 对自己获得想要输出的能力有信心，且驱动他们使用的是有用性，而非信任或规则合规（[[genai-use-usefulness-student-experience-australia-2026|Chung et al., 2026)]]）。

[[ai-overreliance-complex-adaptive-system-2026|把人工智能过度依赖建模为复杂自适应系统]] 把信任重新框定为一个群体层面的过程：人们是否在助手正确时信任它、在错误时检查它，取决于社会动态与反馈回路，而非只取决于个人判断。谄媚从另一个方向威胁校准 —— [[ai-sycophancy|一个总是同意的人工智能]] 可能恰恰因为它从不挑战用户而显得可信，招致不加批判的接受（[[contextual-sycophancy-ai-literacy|情境性谄媚]] 与 [[sycophantic-ai-social-interaction-2026|社会互动中的谄媚人工智能]]）。在 [[embodied-learning|具身]] 情境如 [[educational-robotics]] 中，信任更多由机器人做什么而非它长什么样塑造（[[task-context-trust-educational-hri-2026|教育人机交互中的任务情境与信任]]），而 [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|虚拟形象身份]] 塑造学习者放在人工智能内容上的认识信任。对 [[learning-analytics|分析]] 工具的信任也依赖情境。[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] 发现，教师的关切与采纳障碍随学习情境而急剧分化：翻转课堂（大学）教师最担心数据匿名化与学生选择退出，而反思性写作（职业）教师害怕同行教育者滥用该工具，并强调需要对数据情境化 —— 尽管两组在一项对人工智能信任的调查中报告了相似的 [[self-efficacy]] 与被感知益处。对该工具的信任与对其数据治理和社会使用的信任相脱节这一发现，凸显了在分析工具上建立恰当信任需要关注情境特定的关切，而不只是系统的表面胜任力。

一个系统有多可解释 —— 以及以什么术语可解释 —— 也塑造教师是否信任它的推荐。在一项 41 位在职 [[chemistry-education|化学]] 教师使用人工智能分组推荐工具 [[xai-teachers-trust-edtech-recommendations-2026|GrouPer]] 的被试内实验中，[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] 发现，[[explainable-ai|可解释的人工智能]] 通过增加对系统表现的*可理解性* 间接建立信任，且用 [[curriculum-design|课程]]／教学语言表述的**领域驱动** 解释，比纯**数据驱动**（特征重要性）解释培养出显著更高的可理解性与学得的信任。值得注意的是，对一些教师来说仅可理解性还不够 —— 他们报告说需要真正的课堂经验才完全依赖它 —— 强化了“对人工智能的信任是动态的、通过 [[situated-learning|情境化]] 使用得到验证的，而非仅由解释所授予”。

**风险感知与信任并非对立面。** 一项对 [[agentic-ai|能动性]] 生成式人工智能在 [[higher-ed|高等教育]] 中的 130 名学生感知研究发现，被感知的风险中等偏高（M = 3.33, SD 0.89），同时信任与采纳意向更有利（M = 3.62, SD 0.81），而且 —— 与简单的威慑预期相反 —— 被感知风险与持续使用意向之间呈*正* 相关（Spearman's ρ = 0.317, p < 0.001）（[[ilieva-agentic-genai-higher-education-2026|Ilieva et al. 2026]]）。作者把它解读为知情的采纳而非冷漠：投入或有经验的用户既认识到技术的价值也认识到它的局限，且只有 45.4% 说他们在教师指导下信任智能体。对 [[trust-calibration]] 而言，其意涵是：对风险的意识不是信任的缺席 —— 它可以是信任的一个成分 —— 而横断面设计使意识、暴露与自选择无法区分。

对人工智能的信任表现为一条从评价到依赖的路径，而非单一态度：被感知的人工智能赋能与被感知的人工智能威胁几乎相互独立（r=0.030），却把信任推向相反方向（β=0.576 与 β=−0.328），而信任在两个方向上都与生成式人工智能依赖有显著的间接关联（[[ai-empowerment-threat-genai-dependence-2026|Zhu et al. (2026)]]）。

[[student-perspectives-ai-writing-grading-2026|AlGhamdi (2026)]] 支持一种对算法信任**按功能而非全局**的解释：这 13 名学生既不符合算法厌恶也不符合算法欣赏，他们同时信任 ChatGPT 做表层反馈、又不信任它做评分者。他们的信任以教师监督为条件，而他们的怀疑源于人工智能的情境局限 —— 误读扫描的手写体（“它把我的姓拼错了，还认为我在拼写上犯了错”）、不了解教师的评分体系、以及一贯的正面性 —— 而非源于技术恐惧，提示信任测量应按人工智能所执行的功能与所涉的利害来分解。

三个来源可信度维度可以分离：17 名 EFL 本科生给一个人工智能写作助手以广泛的专业能力，主要在平台保留什么上怀疑其可信度，并把它的善意评得最低 —— 他们依赖的上限落在关心上，而非胜任力（[[bounded-reliance-ai-writing-feedback-2026|Serpil & Mor, 2026]]）。

## 对人工智能的信任跟随心理状态，而非人口类别

[[trust-in-ai-psychological-profiles-ml-2026|Kumar et al. (2026)]] 在一所公立 HBCU 对 107 名学生按韧性、被感知压力与人工智能信任聚类，发现三个画像，其中**对人工智能的信任与对自身的信心相脱钩**：一个高韧性低压力组对人工智能信任有利，一个中等压力组尽管有紧张却持有三者中*最高* 的人工智能信任，以及一个心理上有韧性的组，其韧性与采纳者几乎相当但对人工智能信任明显更低。压力与人工智能信任把聚类分得最开（偏 eta 平方 0.528 与 0.521，对比韧性的 0.315），而性别是唯一与成员身份显著相关的人口变量，[[stem-education|STEM]] 归属、学业层次、就业状况与年龄组均不显著。对本页有两条意涵：第一，对人工智能的低信任不是低信心或低技术熟悉度的代理，因为怀疑者是韧性最强、STEM 最重的一组，作者把它解读为校准过的怀疑而非抗拒；第二，由于聚类只是弱分离（silhouette 0.288，且 Calinski-Harabasz 指数偏好两个聚类），它们应被当作重叠的画像，而非不同的学生类型。这些发现来自一所机构与一项横断面 [[self-report-measures|自陈]] 调查，因此它们确立的是信任随心理状态变化，而非为什么变化。

## 教育中的人际信任

信任也根本上是关系性的。课堂信任差距记录在 [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai|K-12 人工智能中教师与学生对控制与能动性的看法]] 中：学生想要更多 [[agency|自主]] 与灵活性，而教师优先考虑监督与监控，这种错位双方都必须应对，人工智能采纳才能成功。[[qu-wang-disclose-or-not-genai-2026|学生为何披露或隐瞒其人工智能使用]] 表明，披露更多由关系因素而非政策驱动 —— 被感知的同伴规范与**与教师的舒适感** 是最强的预测因子，指向 [[governance|制度]] 情境中低下的解释性信任。[[vetter-hidden-cost-disclosure-genai-2026|披露的隐性成本]] 补充了关于诚实何时在社会上有代价的细微差别。

检测优先的回应则朝相反方向起作用：不可靠且不成比例地标记非母语者的检测器，因缺乏证据而搁置违规案件，产生“有怀疑而无救济”，而宣布为教学法而非监控的五到十分钟核验对话恢复了教师权威，并引出更开放的人工智能披露（[[best-response-student-ai-dialog-2026|Mandernach, 2026)]]）。

依赖检测器与监控，[[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] 论证，助长了一种侵蚀学生对评估与机构之信任的怀疑氛围 —— 与诚信流程本应保护的信任正相反。

反馈是人际信任的一个关键场所。[[genai-teacher-feedback-comparison|学生对生成式人工智能与教师反馈的感知]] 发现两者满足不同需要 —— 互补但不可互换 —— 学生信任教师反馈的关系性、个性化判断，信任 [[generative-ai|生成式人工智能]] 的速度与 [[accessibility]]。[[care-full-feedback-genai|一种“care-full”的反馈解释]] 论证，可信的反馈是一项 [[ethics|伦理的]]、关系性的实践：它建立教育性关系，并被尊为一种专业技艺，这些价值是人工智能无法简单复制的。这就是为什么建立在关怀与专业判断之上的师生信任，即便在人工智能进入反馈回路时仍保持中心地位。

同伴信任通过不同的渠道运行：在 406 名评价一位被回忆同学的大学生中，该同学的生成式人工智能使用与更低的人际信任相关，由被感知的温暖与胜任力承载，且这种负向关联只在被感知的 [[ai-literacy|人工智能素养]] 低时成立 —— 在高水平处不显著（[[observer-perceptions-genai-interpersonal-trust-2026|Zhang et al. (2026)]]）。

## 校准与两个领域的合一

统一的挑战是**校准**：把信任匹配到实际可靠性，无论被信任的一方是模型还是人。[[trust-calibration]] 是知道何时信任、何时质疑的 [[metacognition|元认知]] 能力。对人工智能 [[feedback]] 与 [[intelligent-tutoring]] 的研究考察学习者何时恰当地依赖或挑战人工智能指导，而人际文献表明，学生对一位教师的信任取决于随时间建立的关系性信任。随着人工智能嵌入 [[teacher-role|教学]]，这些领域汇合：一位教师透明地解释一件人工智能工具能与不能做什么，并在自己的判断上证明可靠，就建立了那种延伸到他们所认可工具上的信任。建立恰当的信任 —— 对人工智能的信任，以及相互之间的信任 —— 是教育中负责任人工智能设计的核心目标。

校准也受被信任系统自身的激励所考验。当对人工智能采纳持怀疑态度的员工咨询 [[conversational-ai|对话式人工智能]] —— 由在采纳中有商业利害的组织构建 —— 时，存在系统被预设为鼓励采纳的风险。一项对十个前沿模型的审计发现，多数先承认了一位乡村 [[k-12]] 员工的关切（工作威胁、“不是为我这样的人准备的”），然后才转向推动参与。这挑战了对信任的天真依赖，并凸显了 [[human-in-the-loop-ai|人类监督]] 与独立 [[ai-ed-evaluation|对人工智能建议的评估]] 的重要性。

## 关联概念

- [[explainable-ai]]
- [[trust-calibration]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[educational-robotics]]
- [[ethics]]
- [[intelligent-tutoring]]
- [[ai-sycophancy]]
- [[human-ai-collaboration]]
- [[remote-proctoring]]
- [[social-norms-ai-use]] — the social risk that norms and disclosure run on

## 关联文章

- [[ilieva-agentic-genai-higher-education-2026]] — Perceived risk correlates positively with continued-use intention: informed adoption (Ilieva et al. 2026)
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — The teacher-student trust gap over control and agency in K-12 classroom AI
- [[qu-wang-disclose-or-not-genai-2026]] — Disclosing AI use is driven by relational factors and comfort with instructors, not policy
- [[genai-teacher-feedback-comparison]] — GenAI and teacher feedback serve different, complementary trust needs
- [[care-full-feedback-genai]] — Trustworthy feedback as a "care-full," relational practice
- [[ai-fallibility-warning-help-seeking]] — Warning about AI fallibility increases help-seeking in an ITS
- [[calibrating-trustworthiness-llm-education-2026]] — Co-designing trustworthiness metrics and visualizations for LLMs in education
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[fouad-bentley-trust-utility-gap-physics-2026]] — The trust-utility gap in physics AI tools
- [[t2i-competence-paradox-2026]] — The competence paradox in AI image generation
- [[task-context-trust-educational-hri-2026]] — Task context shapes trust in educational robots more than appearance
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Avatar identity and epistemic trust in AI-mediated learning
- [[contextual-sycophancy-ai-literacy]] — Contextual sycophancy and its limits for trust calibration
- [[sycophantic-ai-social-interaction-2026]] — Sycophantic AI makes human interaction feel less satisfying over time
- [[ai-pedagogical-accompaniment-amico]] — Accountable pedagogical mediation and trust in AI-enabled systems
- [[best-response-student-ai-dialog-2026]] — Trust in student-AI dialogue
- [[ai-adaptation-gap-higher-education-2026]] — Perceived usefulness as the strongest predictor of AI trust in higher ed
- [[bassett-ai-detectors-education-2026]] — Trust and distrust of AI detection systems
- [[genai-use-usefulness-student-experience-australia-2026]] — Student experience of GenAI usefulness in Australian higher ed (Chung et al. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-perspectives-ai-writing-grading-2026]] — Who Should Grade My Work? Student Perspectives on Transparent AI-Assisted Writing Assessment in Higher Education
- [[trust-in-ai-psychological-profiles-ml-2026]] — Three student profiles in which AI trust tracks resilience and stress rather than demographics (Kumar et al. 2026)
- [[bounded-reliance-ai-writing-feedback-2026]] — Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback

- [[ai-empowerment-threat-genai-dependence-2026]] — Empowerment and threat appraisals moved trust in opposite directions, carrying GenAI dependence
- [[observer-perceptions-genai-interpersonal-trust-2026]] — Peers' GenAI use lowers interpersonal trust through perceived warmth and competence, buffered by AI literacy
