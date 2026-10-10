---
title: "教育层级"
created: "2026-09-20T13:08:39-04:00"
updated: "2026-10-09T19:07:03-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-09-28T21:44:10-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育层级** —— 组织本知识库 `level` 元数据的各个学段：**preschool（学前）**、**primary education（小学）**、**middle school（初中）**、**secondary（中学）**、**K-12**、**higher ed（高等教育）**、**undergraduate（本科）**、**graduate（研究生）**、**adult learning（成人学习）**、**special education（特殊教育）**和 **[[teacher-role|教师]]教育**。本页是该领域的总览，而不是任何单个学段页面的重复：它解释当你跨学段移动时什么在变化，为什么学校/大学的断裂比所教的学科更重要，以及 AI 证据在何处密集、在何处稀薄。

## 值得思考的问题

- 一个研究生研讨班和一堂二年级数学课都是"教育"，然而帮助前者的工具可能伤害后者。学段——而非学科——中究竟是什么改变了"好的 AI 使用"的面貌？
- 一项有 132 名二年级学生参加的试验发现，适应性数学导师不优于固定序列。对大学生你也会预期同样的零结果吗，适应性又默默假定了学习者的什么能力？
- "K-12"和"高等教育"各自把若干个截然不同的情境压缩进一个标签。这些标签隐藏了哪些比较？
- 如果一个学段的证据基础稀薄，诚实的回应是什么：什么都不说、从相邻学段借用、还是设计一项研究？

## 引言

`level` 元数据字段命名一个来源所关于的教育学段——是学段而非年龄：**preschool（学前）**、**primary education（小学）**、**middle school（初中）**、**secondary（中学）**、**K-12**、**higher ed（高等教育）**、**undergraduate（本科）**、**graduate（研究生）**、**adult learning（成人学习）**、**special education（特殊教育）**、**teacher education（教师教育）**。有些命名学校教育的一个阶段，两个命名大学学习中截然不同的两半，两个命名的是一个 [[learners|学习者群体]]而非阶段，一个命名的是教人的人。一个来源可以同时携带多个学段。

本页是该领域的总览；各学段页面做深入的工作，应与本页一起阅读：[[k-12]]、[[early-childhood-elementary-ai-education]]、[[higher-ed]]、[[adult-learning]]、[[special-education]]、[[teacher-education]] 和 [[vocational-education]]。

## 一个学段与另一个学段的区别

学段沿若干轴同时相异，而 AI 研究通常只变动其中一条。

- **自我调节能力。** 同一款二年级数学导师的两个版本——内容、界面、反馈和语音提示完全相同，只在任务选择是否遵循 [[knowledge-tracing|贝叶斯知识追踪]]掌握度估计这一点上有别——在 132 名七岁儿童中没有产生后测差异（F(1, 124) = 0.32, p = .574）。作者的首要解释是发展性的：[[adaptive-learning|适应性系统]]预设了能够处理反馈、调节努力并保持专注的学习者，而幼儿的 [[self-regulated-learning|自我调节]]能力有限（[[adaptive-intelligent-tutoring-primary-mathematics-2026]]）。
- **谁来中介互动。** 在学段中，一名成人在学习者和工具之间。一项针对 270 名学前教师的调查发现，采用意向由 [[technology-acceptance-model|感知有用性]]、易用性、AI [[self-efficacy]] 和 [[anxiety-and-stress|AI 焦虑]]驱动——而该研究刻意排除了面向儿童的 AI（[[preschool-teachers-ai-behavioral-intention-2026]]）。
- **评估是为了什么。** 中学评估服务于外部利害；大学评估是课程作业和证书；研究生评估是一个研究者的养成。
- **[[prior-knowledge|先备知识]]。** 先备知识主导了该试验的后测表现（F(1, 124) = 206.99, p < .001, η²p = .63），因此学段标签与知识水平相关，但并不等于知识水平。

## 学龄期与大学期

最具后果性的断裂是学校与大学之间的断裂，而两个最常见的标签各自或隐藏、或跨越了它。

在学龄期内，被测结果随学段急剧变化。在小学，它是学科学习：97 名中国三年级学生在 [[science-education|科学探究]]中使用 [[conversational-ai|GenAI 聊天机器人]]，比搜索引擎对照组提出了更好的问题（t = 2.47, p = 0.015）（[[dai-chatbots-problem-posing-primary-2026]]）。在中学，它往往变成态度而非成就：一项针对 508 名台湾初中生的调查发现，体验吸引力通过愉悦感塑造使用 [[generative-ai|ChatGPT]] 进行歌词学习的意向（XM → PEOU β = 0.630; PE → ATU β = 0.369），其中 81.5% 使用免费档——一个伪装成技术接受发现的获取 [[equity-in-ai-education|公平]]事实（[[chatgpt-music-education-junior-high-2026]]）。中学还承载着本语料库最大的学习警示：在 26,811 名 7–12 年级中国学生中，作业分数上升 18%、完成时间下降 30%，而 [[summative-assessment|闭卷考试]]分数在六个月内下降约 20%，集中在大约 81% 的行为显示外包作业的学生身上（[[stromberg-generative-ai-learning-penalty-secondary-2026]]）。

大学期再次分裂。本科学习是在外部判断下的课程作业：在一所少数族裔服务型 R1 大学的本科写作者中，[[ai-literacy]] 预测的是学生处于哪一*类* [[llm]] 依赖，而非他们使用的多少（[[llm-reliance-types-undergrad]]）。研究生学习是研究训练，其结果从表现转向养成。在 420 名天文学博士和博士后研究人员中，AI 依赖与研究 [[agency|自主性]]负相关（r = −.355），与 [[self-efficacy]] 负相关（r = −.321），通往创新行为的间接路径主要通过自主性（−.115）而非自我效能（−.069）；导师支持削弱了与自主性的负向联系（B = .077, p = .020）（[[ai-mediated-research-agency-formation-2026]]）。博士生是以 AI 依赖似乎正在侵蚀的判断力来评判的；本科生不是。把两者都归入"高等教育"就隐藏了这一点。

## 证据集中在哪里，稀薄在哪里

本语料库填充不均，level 字段使这种不平衡变得可见。

**密集。** 高等教育是覆盖最广的学段：本页查阅的页面包括一项有 60 名工程学生的八周平台试验（[[ai-assisted-seminar-learning-information-literacy-2026]]）、一项针对 395 名教育管理者的调查（[[ai-adoption-readiness-ukraine-education-managers-2026]]）、一项对 18 项非洲高等教育研究的元综合（[[data-privacy-ai-african-higher-education-2026]]）和一项针对 420 名研究人员的博士生训练研究（[[ai-mediated-research-agency-formation-2026]]）。小学和中学也带有结果证据。

**稀薄，某些地方甚至缺失。** 本页查阅的页面完全没有报告学前学段任何关于儿童结果的研究；最近的证据是一项排除了面向儿童工具的教师意向调查（[[preschool-teachers-ai-behavioral-intention-2026]]）。初中主要以*拟议中的*设计和纵向研究的形式出现，而非报告的结果（[[ai-lms-middle-school-longitudinal]]）。职业学段最强的证据是来自一门课程的 63 份 [[self-report-measures|自陈]]回应，其作者称需要重复验证（[[ai-ive-pbl-vocational-design-creativity-2026]]）。研究生证据是横断面的，反向路径模型比发展性模型拟合略好，因此从依赖到自主性降低的方向是被推断而非被确认的（[[ai-mediated-research-agency-formation-2026]]）。本页查阅的内容没有报告 **adult learning（成人学习）**或 **special education（特殊教育）**作为学段的 AI 结果证据；它们在 [[adult-learning]] 和 [[special-education]] 上有各自的覆盖，本页不从学龄期发现中做推广来填补这一空白。

在所有被考察的层级上，有一个模式成立：人的一层吸收了最难的案例。即便在算法推荐达到 F1 = 0.64 时，工程学生在可信性决策点上仍有人类专家在位（[[ai-assisted-seminar-learning-information-literacy-2026]]）；在博士生训练中，导师支持是削弱 AI 依赖负向联系的唯一条件（[[ai-mediated-research-agency-formation-2026]]）；在学前学段，采用者是学前教师，而非儿童（[[preschool-teachers-ai-behavioral-intention-2026]]）。

## 适配层级的设计实际改变了什么

- **自主性与支持。** 对年幼的学习者，适应*支持水平*——更多的 [[scaffolding]]、指导或提示——而非任务难度；难度适应在小学低年级一无所获，而掌握度门槛可能反而拖住了适应性学生（[[adaptive-intelligent-tutoring-primary-mathematics-2026]]）。
- **阅读水平。** 一个按年龄定制的聊天机器人使用了针对 7–9 岁、9–11 岁和 12–14 岁的提示变量，63 名从一年级到八年级的儿童把它当作可信的信息来源（[[vahedian-children-attitudes-ai-chatbot-2026]]）。
- **中介。** [[parents-and-families|家长]]和教师在学龄期做中介，[[librarians]]和导师在大学期做中介——而大学中的对应物是专长而非监护：工程平台把人类留在算法最没把握的地方（[[ai-assisted-seminar-learning-information-literacy-2026]]）。
- **评估利害。** 初中 LMS 设计按活动给 AI 设门，在练习模式中保留有限的提示，并在评分项目上关闭 AI（[[ai-lms-middle-school-longitudinal]]）——一项被中学学习惩罚证据使之具体化的预防措施（[[stromberg-generative-ai-learning-penalty-secondary-2026]]）。
- **对未成年人的数据保护义务。** 义务随年龄扩大：对未成年人，本语料库的提案是结构性的——数据最小化、适龄的回应约束、基于角色的访问控制、可审计的日志（[[ai-lms-middle-school-longitudinal]]）——且不能假定儿童具备数字安全意识，因为有些孩子愿意向聊天机器人吐露秘密（[[vahedian-children-attitudes-ai-chatbot-2026]]）。对成人，义务转向同意、控制和跨境数据流（[[data-privacy-ai-african-higher-education-2026]]）。
- **适配学段的治理。** 准备度是分层特定的：395 名乌克兰管理者在个人准备度上比系统准备度高 0.68 分（d = 0.73），最常提到监管缺位（58.5%），并把 [[personalized-learning|个性化]]——厂商承诺最多的益处——评为所有应用中最低（29.4%）（[[ai-adoption-readiness-ukraine-education-managers-2026]]）。

## 对 AI 教育的启示

- **先读 level 字段，再读 topic 字段。** 来自一个学段的发现对另一个学段而言是一个假设，而非可迁移的结果。
- **对最年幼的学段，适应支持而非任务难度**（[[adaptive-intelligent-tutoring-primary-mathematics-2026]]）。
- **不要把一个工具跨过学校/大学的断裂移植，而不重新规定谁掌握认识论权威。** 在博士生训练中降低自主性的依赖是一种研究养成风险（[[ai-mediated-research-agency-formation-2026]]）。
- **按活动给 AI 设门，而非按热情**，并让隐私义务随年龄缩放（[[ai-lms-middle-school-longitudinal]]、[[data-privacy-ai-african-higher-education-2026]]）。
- **为那个学段的中介成人设计**——家长、教师、图书馆员或导师——并单独测量他们的准备度，与机构的准备度分开（[[ai-adoption-readiness-ukraine-education-managers-2026]]、[[ai-assisted-seminar-learning-information-literacy-2026]]）。
- **在一个学段没有证据时直说**，并**不要错把意向当成成就**：若干针对特定层级的研究报告的是态度或 [[self-report-measures|自陈]]结果，而非学习。

## 关联概念

- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## 关联文章

- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] —— 二年级数学中的适应性与非适应性辅导（Sibley et al. 2026）
- [[dai-chatbots-problem-posing-primary-2026]] —— GenAI 聊天机器人与小学三年级学生的问题提出
- [[chatgpt-music-education-junior-high-2026]] —— 初中生对 ChatGPT 用于歌词学习的态度（Weng & Chiang 2026）
- [[ai-lms-middle-school-longitudinal]] —— 为初中设计的 AI 整合 LMS，附一项拟议的纵向研究
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] —— 中国中学教育中的生成式 AI 学习惩罚（Strömberg et al. 2026）
- [[llm-reliance-types-undergrad]] —— 本科写作者中四类 LLM 依赖（Hossain 2026）
- [[ai-assisted-seminar-learning-information-literacy-2026]] —— 为工程学生嵌入图书馆员支持的 AI 辅助研讨平台
- [[ai-mediated-research-agency-formation-2026]] —— 博士生与博士后训练中的 AI 依赖、自主性与创新（Han & Liu 2026）
- [[data-privacy-ai-african-higher-education-2026]] —— 非洲高等教育中对数据隐私的利益相关者看法（Duncan 2026）
- [[ai-adoption-readiness-ukraine-education-managers-2026]] —— 乌克兰各地教育管理者的 AI 采用准备度（Kremen et al. 2026）
- [[ai-ive-pbl-vocational-design-creativity-2026]] —— 面向职业设计学生的 AI 赋能沉浸式 PBL（Jin et al. 2027）
- [[preschool-teachers-ai-behavioral-intention-2026]] —— 学前教师在早期儿童环境中使用 AI 的意向
- [[vahedian-children-attitudes-ai-chatbot-2026]] —— 儿童对按年龄定制的 AI 聊天机器人的态度
