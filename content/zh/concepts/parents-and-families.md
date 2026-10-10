---
title: 家长与家庭
created: "2026-09-16T14:29:36-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
foundations: [ai-literacy]
technology: [conversational-ai]
ethics: [digital-divide, equity-in-ai-education]
connected_faqs: [ai-guidance-children-under-13]
confidence: medium
audience: [instructors, policymakers, researchers]
level: [preschool, primary education, secondary, k 12]
translation_of: concepts/parents-and-families
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

> **家长与家庭** — 家庭作为[[ai-education|教育中的 AI]]的利益相关方：那些在家辅导孩子的照护者、挑选并支付工具费用的人、监督或未能察觉这些工具所做的事情的人，以及接收学校就 AI 传达的一切信息的人。本页汇集了关于 AI 中介的亲子[[intelligent-tutoring|辅导]]以及在家使用的[[conversational-ai|对话式]]伙伴的证据，关于家庭与学校之间交接的证据，关于家长自身的[[ai-literacy]]，以及关于家用设备、联网条件与成本所带来的[[equity-in-ai-education|公平]]后果的证据。本页的范围是把家庭当作一个行动者——家庭用 AI 做什么、学校把什么传达给家庭、以及研究对结果究竟确立了什么和没有确立什么。

## 值得思考的问题

- [[paratutor-parent-child-tutoring|Luo 等人（2026）]]发现，通用[[llm]]辅助削弱了家长的辅导角色，而角色分离的界面则保留了它。如果你在设计一款供家长与孩子共同使用的工具，你会保护家长免受什么，又会把什么交给他们？
- 在[[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg、Lei 和 Wu（2026）]]的数据中，六个月之内作业分数上升 18%，而[[summative-assessment|闭卷考试]]分数下降 20%。家长在家里实际看到的是什么，他们需要被告知什么才能注意到这一差别？
- [[k12-teachers-ai-companion-literacy-2026|Xiao 等人（2026）]]发现，教师把家长视为对孩子与 AI 伙伴关系负主要责任的一方，同时又把同样的家长描述为不知情或不堪重负。这样的责任分配是否合理，要让它成为现实又需要什么？
- [[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos、Dong 和 Low（2026）]]通过取消面向家庭的文书工作，几乎将首次到课率提高了一倍。在你自己所在的学校或项目里，面向家庭的流程中哪些部分是为家庭的利益而存在，哪些是为机构的利益而存在？
- [[family-school-autonomy-support-genai-2026|Fan、Li 和 Zhang（2026）]]把家校协同当作一个未经检验的假设，而非既定做法。如果它从未被检验过，你学校目前给家长的建议建立在什么证据之上？
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|MacCallum、Parsons 和 Mohaghegh（2026）]]描述了在设备已经配齐之后依然存在的第二层和第三层数字鸿沟。在一个家庭里（而不是教室里）弥合技能与结果上的差距会是什么样子？

## 引言

儿童与 AI 相处的大部分时间发生在课堂之外，而研究文献大多把这一场景当作背景。关于辅导和学习成果的研究通常以学校为场域，而关于家庭指导的研究通常只是劝告性的、未经检验的，因此家庭既大量接受关于[[ethics|负责任使用 AI]]的指导，又几乎没有证据表明这些指导是否有效。

本页把家庭当作一个独立的行动者来对待。它涵盖 AI 中介的亲子辅导、孩子在家中遇到的伙伴与阅读工具、学校就 AI 使用对家庭说和不说的事情、家长自身的[[ai-literacy]]及其观点的已知情况，以及家庭使用这些工具所依赖的接入与成本条件。凡是证据薄弱之处，本页如实说明，而不是填补空白。

## 作为家庭共同教育者的家长

关于家庭辅导最清晰的设计证据来自[[paratutor-parent-child-tutoring|Luo 等人（2026）]]，他们在中国家庭辅导的情境下，先对家长如何辅导数学应用题进行了一项[[formative-assessment|形成性]]研究，然后构建了 ParaTutor。该形成性研究发现反复出现的失败：家长难以理解问题的结构，往往缺乏支持问题解决所需的内容知识，并且会遇到破坏共同理解的沟通困难。设计上的回应是角色分离——家长通过[[agentic-ai|多智能体]]聊天机器人获得辅导指引，孩子则获得针对问题本身的可视化落地，配合分阶段的支持，阻止二人组直接跳到答案。在四项条件、23 组亲子二人组（孩子年龄 10–12 岁）的评估中，通用[[llm]]辅助倾向于排挤家长的角色，而角色分离界面则让家长持续提供并调整支持，同时让孩子留在推理过程之中。作者给出的启示是情境特定的：在[[math-education|数学教育]]这类模型准确度有限的领域，孩子不应独立与模型互动。

[[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos、Dong 和 Low（2026）]]把家庭当作程序性行动者，他们的结果既关乎家庭行为，也关乎辅导。他们与多伦多学区委员会合作的[[rct|随机试验]]，为 4–8 年级学习困难的学生在 Khan Academy 练习之上安排了真人线上辅导老师。第一年，由[[teacher-role|教师]]提名的学生中只有约 45% 参加过一次辅导，家庭在每一次交接中流失：邀请、表达兴趣、在[[edtech-platform|第三方平台]]上创建账号、匹配、出席。第二年，由孩子自己的教师以固定每周时段直接邀请家庭，并代为处理报名与排课，首次到课率提高到 83%。每周到课率仍徘徊在五分之二左右，多数是间歇性缺勤而非退出；每周练习时间增加约 17 分钟，课题测验的意向治疗效应为 0.055 SD，成绩单分数上升约 0.08 SD。消除摩擦改变了谁来出席，而没有改变任何人能坚持多久。

## 家中的伙伴与阅读工具

家庭遇到 AI 作为伙伴应用的情形，往往多于遇到它作为辅导系统。[[liao-role-adaptive-ai-companion-book-talk-2026|Liao（2026）]]在台湾桃园 19 名小学生（4 年级 12 人、5 年级 7 人，各进行 4 次）的读书讨论课中，把一个固定的"同学伙伴"（Whisper 配合 GPT-3.5）与有经验的班主任教师进行比较。学生与 AI 相处的时间明显更长，但贡献的词句比例显著更低；对 5 年级而言，这一比例不到他们与教师互动时的三分之一，论文把这一模式称为对话主导。该伙伴在引出事实性回忆方面有效，而在[[prompt-engineering|激发]]情感性与面向未来的反思方面显著弱于教师——一种情感天花板。Liao 的回应是角色自适应框架，让一个伙伴同时占据同学伙伴、教师助手与家长顾问三种角色，最后一种角色把讨论延伸到家庭之中。其背后的诊断是支持真空：多数伙伴设计始终聚焦于学生—AI 二人组，没有给教师和家长划定明确位置。

**一部分青少年更愿意向 AI 而非父母倾诉。** 引用的中国数据显示 13.5% 的年轻网民更愿意向 AI 倾诉而非向父母倾诉，[[ai-connectedness-adolescent-mental-health-2026|Fu 和 Zhao（2026）]]的框架预测，当照护者未能承认青少年的身份确认需求时，与 AI 的联结会成为补偿性替代。

两篇早期儿童论文关系到进入家庭的内容。[[creative-project-approach-ai-early-childhood-2025|Yang、Li 和 Lee（2025）]]论证，对幼儿而言，[[embodied-learning|具身]]的实体智能体在发展上优于屏幕，但也警告，生成式社交机器人可能编造前运算阶段儿童会当作事实接受的内容，其[[feedback]]缺乏发展性校准，且成本和接入门槛会扩大[[digital-divide]]。[[ai-play-framework-early-childhood-2026|Malallah 等人（2026）]]针对同一年龄段采取了另一条路线：他们不插电、基于[[game-based-learning|游戏]]的 AI-Play 框架通过一次以家庭为中心的编程一小时活动实施，用家长问卷和儿童反思表来衡量参与度和[[usability-research|可用性]]，以便在家中复现。他们报告了高参与度，以及"AI 从例子中学习"这一初步理解的出现。

## 家校沟通与透明度

学校告诉家庭关于 AI 的什么，以及家庭告诉学校的什么，基本上未被研究；最清晰的发现涉及渠道的缺失。在针对 33 名美国[[k-12]]教师的情境式访谈中，[[k12-teachers-ai-companion-literacy-2026|Xiao 等人（2026）]]发现，是否干预的决定取决于管辖范围，而非感知到的危害。他们的可见性检验把边界划在校门口：在课堂上或在指定工具上的使用属于教师的角色之内，而在家中的使用只有通过可观察到的效应（如退缩、成绩下滑或孤立）才进入其角色——若无这些，教师描述的只是观察与 informal 记录而非行动。家长情境被 33 名教师中的 10 名列为最令人担忧，17 人表示教师应当介入，11 人回答"视情况而定"。家长先被列为对孩子与 AI 伙伴关系负主要责任的一方，随后又被描述为不知情或不堪重负。作者称之为管辖空缺，并警告说，如果没有确立的课程主张，那些能最持续地接触到孩子的成年人将默认采取监视与转介。咨询师、家长和学生未被访谈。

[[family-school-autonomy-support-genai-2026|Fan、Li 和 Zhang（2026）]]把协同问题讲得明确。在梳理指导性文献时，他们指出，这些文献把风险管理推给家庭和学校，同时却把二者的协同当作既定事实；他们将相互竞争的三种模型形式化——附加式、协同式与补偿式——并指出，多数指导所内含的协同式版本没有任何支持证据。他们提出的检验是一项因子试验，对比纯家庭、纯学校、协同式与常规做法的指导。在家庭一侧，他们沿用[[self-determination-theory]]中区分依赖式卸载（核心思维被外包）与自主式卸载（AI 提供[[scaffolding|脚手架]]而学习者保留认识论上的[[agency]]）的区分；两种情况下的即时表现完全相同，这正是家长难以察觉适应不良使用的原因。

同样的不可见性也出现在成绩数据中。[[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg、Lei 和 Wu（2026）]]追踪了 26,811 名 7–12 年级中国中学生，历时 30 个月，发现[[generative-ai|生成式 AI]]的采用使作业分数提高 18%、完成时间缩短 30%，同时在六个月内使闭卷考试成绩下降 20%，入学考试分数的下降 18% 与 24% 只在约两年后才显现。约 81% 的使用者表现出作业外包模式，而花在作业上的时间与非使用者相当的 AI 使用者，其考试成绩与非使用者相近。作者的建议是向孩子周围的成年人发出的：监测作业时间和精力这类投入，而不是作业分数这类产出。他们提醒，更密切的家长监测本身正是区分非外包组的那些不可观测因素之一。

## 家长自身的 AI 素养与参与

关于家长知道什么、害怕什么、要求什么的直接证据很薄弱，家长大多只是作为他人的叙述对象出现在文献中。[[all-girls-genai-makerspace-gender-equity-2026|Liu 等人（2026）]]在一所全女生创客空间的关键性案例研究中，与女孩和从业者一同访谈了家长，家长报告说女孩在混合性别环境中常常"感到害怕"且发言更少。在[[k12-teachers-ai-companion-literacy-2026|Xiao 等人（2026）]]中，教师所勾勒的伙伴素养是横跨咨询师、家长、平台和政策制定者的共同工作，按年龄分级螺旋式排序，家长被列在最前，随后又被描述为已经不堪重负。家长在 AI-Play 评估中只以活动可用性调查的形式出现，而非以对自身理解的陈述出现。

家长要参与其中所需要的东西，实际上由那些为学校构建的 AI 素养框架来定义。[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|MacCallum、Parsons 和 Mohaghegh（2026）]]把 SAIL 设计为年龄无关的，把其第 1 层能力——理解与探索 AI——视为所有年龄段都必需，这把成年人放在与孩子同一条进阶路径上，而不是放在指导者的位置上。家庭在研究本身中也占据正式位置：[[raise-framework-ai-education-reporting-2026|Allison（2026）]]要求作者报告参与者背景与社会人口学特征、[[accessibility]]与文化适配，以及伦理审查、知情同意和数据[[governance]]——正是通过这些义务，一个家庭的同意、数据和背景才得以在任何意义上被看见。

## 家庭之间的接入与公平

在任何教学法问题出现之前，成本和联网条件就已经决定了家庭能使用什么。在创客空间研究中，[[all-girls-genai-makerspace-gender-equity-2026|Liu 等人（2026）]]同时记录了成本门槛和设计门槛：免费图像生成器 Playground 取消了免费功能，改为资源匮乏的非营利组织无法承担的付费"pro"档位，而所用工具只接受英文提示词，使对英文缺乏信心的女孩处于劣势。[[creative-project-approach-ai-early-childhood-2025|Yang、Li 和 Lee（2025）]]指出成本和接入正在扩大[[digital-divide]]。[[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos、Dong 和 Low（2026）]]的采用率结果既是一个公平结果，也是一个设计结果：第一年流失的家庭是在行政步骤中流失的，而把他们找回的干预正是围绕家庭自己的教师和固定的每周时段构建的。

[[family-school-autonomy-support-genai-2026|Fan、Li 和 Zhang（2026）]]指出那些使笼统的家庭建议变得不安全的测量条件：用于测量 AI 素养、依赖度和[[cognitive-offloading|过度依赖]]的工具大多在单一国家样本或专门的大学生样本中开发，多数研究是横断面的、基于[[self-report-measures|自我报告]]的。SAIL 的[[equity-in-ai-education|公平]]论证同样适用于家庭的语境：提供一台设备只解决了三层鸿沟中的第一层，技能与结果上的差距无论硬件归谁所有都会持续存在。

## 证据能说明什么、不能说明什么

本知识库中最强有力的面向家庭的结果关乎行为，而非学习。在一项试验中，减少面向家庭的摩擦使首次到课率从约 45% 提高到 83%，而即便在那之后，采用率仍然是决定性约束。同一试验产生的成效增益微小且不精确，而最大的[[learning-gains|学业成就]]研究报告了集中于外包作业的学生中的大额负面效应，作者把这一模式部分归因于他们无法直接测量的家长监测。两项发现都没有把家长的行为与学校或工具的行为区分开来。

缺失的部分更为显眼。家长自己的叙述很罕见：[[k12-teachers-ai-companion-literacy-2026|Xiao 等人（2026）]]中的教师在设计上就把家长排除在样本之外，而出现的家长也只是作为女孩、从业者或教师之中的一个声音被访谈。这里没有任何直接证据说明家庭如何获知学校的[[educational-policy-ai|AI 政策]]、他们被告知了关于监测或披露的什么、或他们如何回应，家校协同只是被理论化而未被检验。ParaTutor 这类家庭辅导设计只在一个国家情境下以 23 组二人组被评估过，伙伴比较则只基于一所学校中的 19 名学生。

2026 年的一项范围综述描绘了该领域已经走多远。[[llm-family-education-activity-theory-2026|Luo 等人（2026）]]通过活动理论分析了来自 6,540 条记录、19 个会场的 53 项 HCI 研究，发现文献集中于亲子互动，以及语言、[[ai-literacy]]和关系性学习，53 项研究中有 44 项（83%）设定在亲子构型中。对话式、具身化和空间化的系统从正在展开的互动情境中生成支持，LLM 重新分配教育劳动，而家庭和机构仍然负责解释输出并决定它们如何进入实践。综述所点名的缺口是持续性的[[personalized-learning|个性化]]、修补劳动，以及家庭如何协商权威与规则——这与本节从另一个方向记录的缺失是同一个。

**与其他页面的关系。** [[stakeholders]]是对整个利益相关方集合的简要概览，其中家庭被列为尚未深入覆盖的受众；本页就是这份深度。[[early-childhood-elementary-ai-education]]覆盖跨学校与家庭的低龄学习者的发展与[[pedagogy|教学法]]领域；本页则跨年龄跟随家庭，从学前游戏活动到中学作业。[[ai-use-disclosure]]覆盖学习者是否告知他人自己使用了 AI；本页覆盖的是相邻问题——这一信息是否传达到家中的成年人，以及家庭被告知了关于学校 AI 使用的什么。

## 关联概念

- [[stakeholders]] — 教育中 AI 受众与行动者的总括页面
- [[early-childhood-elementary-ai-education]] — 家庭与家庭使用被研究得最多的发展阶段领域
- [[ai-use-disclosure]] — 披露实践，以及什么能传到家庭的问题
- [[ai-literacy]] — 家长自身的能力，以及定义这些能力的校本框架
- [[equity-in-ai-education]] — 收益与负担如何在家庭之间分配
- [[digital-divide]] — 接入、技能与结果各层在家庭中的体现
- [[conversational-ai]] — AI 在家庭场景中采取的主要形态
- [[self-determination-theory]] — 作为家庭指导框架的自主性支持
- [[cognitive-offloading]] — 依赖式与自主式卸载，以及家长为何看不出差别
- [[intelligent-tutoring]] — AI 中介亲子辅导背后的模型

## 关联文章

- [[ai-connectedness-adolescent-mental-health-2026]] — 青少年与 AI 的联结，以及 AI 纽带何时替代未被满足的照护者承认
- [[paratutor-parent-child-tutoring]] — 面向中国家庭数学辅导中 23 组亲子二人组的角色分离 LLM 支持
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 固定同伴角色伙伴与教师在台湾 19 名小学生中的对比
- [[family-school-autonomy-support-genai-2026]] — 把家校协同当作未经检验假设的综述
- [[raise-framework-ai-education-reporting-2026]] — 覆盖知情同意、参与者背景与接入公平的报告义务
- [[k12-teachers-ai-companion-literacy-2026]] — 33 名教师谈管辖、家长与孩子和 AI 伙伴的关系
- [[ai-play-framework-early-childhood-2026]] — 通过以家庭为中心的编程一小时活动检验的不插电 AI 素养
- [[all-girls-genai-makerspace-gender-equity-2026]] — 家长为受访者之一；非正式场景中的工具成本与语言门槛
- [[creative-project-approach-ai-early-childhood-2025]] — 面向幼儿的实体智能体，附成本、接入与隐私方面的注意事项
- [[demir-akar-ai-media-literacy-children-2026]] — 面向 36 名四年级学生的数据隐私、安全交流与媒体伦理校本课程
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — 取消面向家庭的步骤后采用率从 45% 升至 83%
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 作业外包、考试下滑，以及监测投入的理由
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — 年龄无关的 AI 素养层级与三层数字鸿沟
- [[llm-family-education-activity-theory-2026]] — 通过活动理论视角刻画基于 LLM 的家庭教育：HCI 文献范围综述
