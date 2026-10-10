---
title: 学生支持与成功
created: "2026-10-01T20:31:35-04:00"
updated: "2026-10-09T19:07:00-04:00"
type: concept
foundations: [ai-education, human-ai-collaboration]
pedagogy: [help-seeking, student-experience, student-engagement]
technology: [learning-analytics, conversational-ai, machine-learning, student-modeling, recommender-systems-and-learning-paths, generative-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
institutions: [change-management, educational-policy-ai, governance]
ethics: [equity-in-ai-education, privacy]
audience: [administrators, institutions, researchers, instructors]
level: [higher ed, undergraduate]
confidence: high
connected_faqs: [ai-agents-support-students-instructors, institutional-ai-policy]
translation_of: concepts/student-support-and-success
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学生支持与成功（Student Support and Success）** — 机构层面帮助学生留校、进步并完成学业的工作：**学业指导（advising）、行政协助、外展触达、转介分流，以及稀缺支持资源的配置**。本页关注的是机构对学生*做了什么*，而不是一门课程内部发生了什么。[[higher-ed|高等教育]] 是本页所处行业的上位概念，[[student-experience]] 涵盖 AI 如何落在学生自身的体验上，而 [[learning-gains]] 衡量学习是否真正发生。本知识库最具辨识度的发现是：AI 支持能可靠地推动**任务完成**——一种有明确时间、二元、由学生掌控且机构可观察的行为——而对**坚持就读、学分与毕业**几乎毫无影响。区分这两类结果正是本页的主旨。

## 值得思考的问题

- 你想推动的是哪一种结果？一次注册提醒和一个留存项目是不同的干预，证据也各不相同，而本知识库的研究表明，二者并不能互相替代。
- 如果一个模型把某位学生标记为高风险，接下来会发生什么？谁来行动，有多大的行动能力，什么条件能让这个建议变得可行，而不只是准确？
- 支持能力是有限的。当 AI 对它进行排序或分配时，那些人类顾问本来也会注意到的学生会被怎样对待？
- 当一条自动消息、一次转介或一个风险评分出错时，由谁负责？承受后果的是学生，拥有系统的是机构。
- 你的支持数据能否跨部门流动？跨办公室的数据共享既是定向触达得以实现的前提，也是定向触达无声停止的最常见原因。

## 引言

学生支持处于二者关系中的机构一侧。它的工作内容是学业指导、外展触达、转介分流，以及有限的人力与财力配置；它的证据基础是行政记录、注册事件、所修学分，以及学生是否返校。生成式 AI 进入这一领域的时间晚于进入教学的时间，而此处大量文献涉及的是**非生成式**系统——短信聊天机器人、早期预警模型、联邦风险预测——生成式工具则以顾问、助手和知识库应答者的身份登场。

统摄本页的区分是**一次推动（nudge）能做什么**与**一条轨迹需要什么**之间的区别。支持技术擅长有明确日期的二元决策：在此日期前注册、填完这张表格、加入 Early Start。它们在累积性结果——坚持就读、学分、毕业——上则困难得多，而这些结果受教学、经济状况、就业、家庭环境与先前准备共同塑造。本知识库关于这一点最有力的证据来自一项为期四年的随机评估，它显著改变了注册行为，却完全没有改变毕业结果。

## 支持职能

相关研究可归为五类职能，其边界之所以重要，是因为各类职能附带的证据强度不同。

**外展与沟通。** 机构面向学生大规模发送消息，而最强的评估检验的是消息是否真的改变了什么。一项针对加州州立大学北岭分校非生成式短信聊天机器人 CSUNny 的四年随机研究，跟踪了两个本科生队列（N = 8,708）共八个学期（[[mata-sustaining-ai-enabled-student-support-2026|Mata、Russell 与 Page（2026）]]）。2018 年 7 月 31 日发出的一条注册提醒，使受处理学生在 8 月 16 日前注册的可能性提高了 34 个百分点，而到 9 月 15 日只提高 2 个百分点；Early Start 提醒使 6 月 7 日前的注册率提高 11 个百分点、6 月 22 日提高 20 个百分点。学生的接受度保持稳定：年度退订率从未超过 4%。佐治亚州立大学一项预注册的多学期试验，每周向两门大型异步课程的学生（N = 1,568 与 N = 915）推送两到三条定制消息，使获得 A 或 B 的几率相对于 61% 的对照组提高 4 个百分点，并使两门课程的 DFW 率各变化约 3 个百分点（[[chatbot-outreach-course-performance-2026|Meyer 等（2026）]]）。

**学业指导与学业规划。** 课程与成绩预测提供规划所需输入——一个模型联合预测学生将选哪些课程以及会取得什么成绩（[[trace-course-grade-prediction-2026|Savala（2026）]]），另一个模型以内在可解释的决策树预测大型在线编程课程中模块层面的进度（[[zhang-ml-student-progress-programming-2026|Zhang、Jeffries 与 Koprinska（2026）]]）。转学分本身就是一个指导问题：CourseGraph 把课程内容建模为知识图谱，以评估流动学生的外部课程等效性（[[coursegraph-cs-course-comparison-2026|Nijdam 等（2026）]]）。在机构层面，一项对 155 项高等教育中 AI 与服务交付研究的综述发现，学习分析是最常见的应用，有 46 项研究（29.7%），超过聊天机器人与虚拟助手的 31 项（20.0%）和预测性分析的 29 项（18.7%）（[[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga（2026）]]）。

**转介与支持分配。** 预测不是方案，二者之间的鸿沟正是本领域最尖锐批评所在。SC2R 将其形式化为**可行动性鸿沟（actionability gap）**：只有当风险评分的建议在语义上可行且可被机器检验——受时间、预算、不可更改性与可用性的约束，而不仅仅是模型上有效——它才成为决策支持（[[sc2r-counterfactual-recourse-educational-2026|Le、Abel 与 Laforge（2026）]]）。模型能否良好分配支持在经验上存在争议：面对为 4,500 个合成学生情境推荐支持计划的任务，三个 LLM 表现出对学生需求的敏感度有限，且模型之间差异悬殊（[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等（2026）]]）。

**学业支持的获取。** 面向具体课程的检索系统瞄准的是最不可能开口求助的学生。Beacon 由单一编程模块的审定材料构建，相关性评分很高（89%），多数学生认为它支持而非取代了自己的学习（66.7%），这一结论来自一项仅含 15 名学生和 4 名学者的小型评估（[[course-specific-rag-help-seeking-higher-ed-2026|Zhou 等（2026）]]）。辅导的参与率是另一类问题：一项为期两年的虚拟辅导层随机试验不得不把参与率与学习分开检验，因为触达到需要支持的学生并不等于提供了支持（[[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer 等（2026）]]）。

**行政协助。** 领导与管理本身被当作独立的应用领域研究，有一个十域分类法刻画 AI 在教育领导力中的落点（[[sposato-ai-educational-leadership-taxonomy-2025|Sposato（2025）]]）。机构运营的服务还延伸到指导之外的健康领域：一个综合校园福祉框架把预防——改进反馈收集方式——与通过心理健康检测实现的干预结合起来（[[ai-campus-wellbeing-tools|Tang（2026）]]）。证书问题与之相邻：当一个智能体可以替学生完成一门课程时，写着"已修得"的证书便失去意义，这使得完成记录本身成为一个设计问题（[[credentials-carry-evidence-ai-agents-2026|Srivastava（2026）]]）。

## 从预测到支持

风险预测——早期预警系统、流失模型、高风险分类器——在本知识库中属于 **[[learning-analytics]]** 范畴，本页把 *predictive analytics*（预测性分析）视作同一件事。建模工作相当可观：有监督分类器从学业表现、人口统计与注册记录中识别出在退学之前的学生（[[at-risk-students-ml-prediction|Gheisari 与 Salarian（2026）]]）；一个双层框架把 Codeforces 行为日志（n = 1,816）与来自十所大学的心理画像问卷数据结合，预测竞赛编程中的流失（[[predicting-attrition-competitive-programming|Alam 等（2026）]]）；一个联邦架构在不共享原始学生数据的前提下跨机构预测表现与流失，在 OULAD 上达到 AUC = 0.918，而集中式为 0.925（[[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch 等（2026）]]）。一个精准教育愿景把这一逻辑延伸到学生数字孪生与"预防性学生成功"（[[precision-education-student-digital-twins-2026|Han 等（2026）]]）。

属于*此处*的是评分之后的那一步：**支持分配**。两项发现为它划定了边界。第一，排序与校准的分裂——联邦风险模型在分布偏移下保持了 AUC，校准却显著退化，因此一个仍能正确排序学生的模型，可能对每个学生需要帮助的可能性判断错误。第二，使能因素研究：一项针对学习分析到干预环节的国际德尔菲法与 AHP/SNAP 分析识别出七个使能因素，并将**机构战略取向**排为最高（优先级 0.2072），且对其他因素影响最大（PageRank 0.2430），把瓶颈定位在机构规划而非模型上（[[learning-analytics-to-educational-interventions-2026|Svetec、Divjak 与 Kadoić（2026）]]）。把 14,003 条学生记录行为聚类为六种画像并映射到推荐学习对象，正是这一发现所指向的推荐层（[[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem 等（2026）]]）。

一个诚信结果接入了同一条流水线。[[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar（2026）]] 从学期初的 LMS 痕迹预测 AI 辅助作弊风险（AUC 0.763），并建议只通过低风险外展来处理，决策阈值按触达面而非指控来选取：把阈值降到 0.30 可识别出 23 名高风险学生中的 21 名，精确率为 60%。

## 结果阶梯：每一项度量究竟意味着什么

"成功"一词至少掩盖了五种不同的度量方式，而 AI 支持对它们的推动并不均衡。把它们区分开来，是本页能做的最有用的事。

- **任务完成** 是单个、有日期、二元的行为，由学生掌控、机构在数日内观察到——在截止日期前注册、提交表格、加入 Early Start。这是推动发挥作用的地方，效应可以很大且立竿见影（CSUN 注册提醒中是 34 个百分点，随后只有 2）。
- **学分（注册与修得的学分单元）** 是累积性的，取决于课程供给、修读顺序以及学生负担得起多少个学期。在 CSUN 评估中，注册学分、修得学分或累积学分上均未出现显著的干预效应。
- **坚持就读（persistence）** 是跨学期的延续——按学期序列的注册——它同样没有变化，在 N = 8,708 的样本下，该研究有把握检出 0.05 个标准差或更大的效应。
- **留存（retention）** 是坚持就读所产生的机构比率，通常在项目或队列层面报告。课程层面的 DFW 率是这一文献中最接近领先指标的东西，而它的移动幅度有限（佐治亚州立大学试验中每门课程 −3 个百分点）。
- **毕业** 是终局的、跨多年的结果。CSUN 研究中对照组的四年毕业率均值为 0.190，干预对它的效应不具统计显著性。

作者对这一模式的解释构成本页的核心论断：提醒作用于离散且近期的决策，而坚持就读与 GPA 是累积性的，受教学、经济状况、就业、家庭环境与先前准备共同塑造。他们得出结论：通过此类工具进行的沟通，**单独而言**，可能不足以改变它们——而这些零结果本身是精确的，并非功效不足。即便学习结果没有变化，提早注册在人员配置与空间规划上仍具有机构价值。

## 公平性与依据评分行动的风险

支持系统作用在学生身上，这使其失效模式与辅导者不同。一项针对复制版供应商早期预警系统的压力测试，检验了六种事后公平性干预（该系统由 168,550 条学生记录构建），发现这些干预未能兑现其承诺的公平性（[[fairness-theatre-early-warning-systems-2026|McConvey 等（2026）]]）。一项学生权益导向的综述把风险面围绕招生、招募与助学金，以及**学生成功服务**——机构 AI 最直接影响学生的领域——来组织（[[students-at-stake-ai-deployment-risks-2026|Student Defense（2026）]]）。隐私与公平在此是结构性的而非偶然的：联邦学习之所以存在，正因为跨机构共享学生记录不可接受；而 CSUN 项目中的人在回路环节——由行政人员回答聊天机器人答不上来的问题，再把答案折叠回它的知识库——正是作者认为能触达那些不看邮件、不接电话的学生的方式。

## 机构条件

在本文献中，可持续性是一种组织属性，而非技术属性。CSUN 项目之所以存续四年，是因为渠道由机构集中拥有，由本科生研究办公室与注册主任办公室共同监督，并由一位专职沟通专家撰写以保持一致的语态。它的定向能力退化同样出于组织原因：由于学生数据未集中化，一条助学金提醒需要由一个办公室识别未申报者、再由另一个办公室传递子集，这种摩擦的负担大到使定向活动从 AY2018-19 占全部活动的 36% 下降到 AY2022-23 的 6%。工作放在哪里、数据归谁所有、跨单位协调能否持续，决定了一个支持系统实际能做什么——这正是本页把 [[change-management]]、[[governance]] 与 [[educational-policy-ai]] 作为维度，而非把部署当作 IT 决策的原因。

## 关联概念之间的连接

学生支持与 [[student-experience]] 相连，后者是面向学生的那一面——同样的技术，从学生视角而非机构视角看到；并与 [[help-seeking]] 相连，即真正需要支持的学生实际获得支持的机制；外展与课程专属助手都是在降低开口求助的成本。[[learning-analytics]] 拥有支撑分配工作的预测，[[student-modeling]] 与 [[knowledge-tracing]] 是其下的模型，[[recommender-systems-and-learning-paths]] 是推荐层。它通过校园心理健康与预防系统与 [[well-being]] 相连，通过完成之后的结果与 [[career-development-and-readiness]] 相连，通过依据评分行动的风险与 [[equity-in-ai-education]] 和 [[privacy]] 相连，并通过决定这一切能否持续的角色与流程与 [[administrator]]、[[stakeholders]] 和 [[change-management]] 相连。[[learning-gains]] 是相邻的度量节点：本页的结果是行政性的而非教学性的，二者并不同步移动。

## 关联概念

- [[higher-ed]] — 本页所处之上的行业伞形概念
- [[student-experience]] — AI 如何落在学生自身的体验上
- [[learning-gains]] — 学习是否发生，本页不度量的教学结果
- [[learning-analytics]] — 预测、早期预警与预测性分析
- [[student-modeling]] — 风险预测之下的建模层
- [[knowledge-tracing]] — 细粒度的技能与掌握度估计
- [[recommender-systems-and-learning-paths]] — 推荐课程、资源与学习路径
- [[help-seeking]] — 学生如何开始求助
- [[well-being]] — 校园心理健康、预防与干预
- [[career-development-and-readiness]] — 完成之后的结果
- [[administrator]] — 拥有并运行支持系统的角色
- [[stakeholders]] — 对机构 AI 决策有主张的人
- [[change-management]] — 试点之后维持项目
- [[governance]] — 机构 AI 的政策与监督
- [[educational-policy-ai]] — 机构部署的政策背景
- [[equity-in-ai-education]] — 系统触达到谁、又错过了谁
- [[privacy]] — 学生记录、数据共享与联邦方法
- [[human-in-the-loop-ai]] — 自动化支持流程中的人判断
- [[rct]] — 此处最强证据背后的设计

## 关联文章

- [[mata-sustaining-ai-enabled-student-support-2026]] — 对一所大学支持聊天机器人的四年随机评估：任务完成移动了，毕业与 GPA 没有
- [[chatbot-outreach-course-performance-2026]] — 预注册的多学期外展试验：A/B 率更高、DFW 变化有限、存在一处人口统计例外
- [[lopez-pernas-llm-appropriate-student-support-2026]] — 4,500 个合成情境：支持建议对学生需求敏感度有限且跨模型不一致
- [[sc2r-counterfactual-recourse-educational-2026]] — 可行动性鸿沟：追索必须可行且可检验，而不只是模型上有效
- [[fairness-theatre-early-warning-systems-2026]] — 在由 168,550 条记录构建的供应商早期预警系统上检验六种事后公平性干预
- [[at-risk-students-ml-prediction]] — 识别退学前学生的有监督分类器
- [[predicting-attrition-competitive-programming]] — 行为日志加心理画像问卷预测流失
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 不共享原始学生数据的跨机构联邦风险建模
- [[precision-education-student-digital-twins-2026]] — 作为愿景的数字孪生与"预防性学生成功"
- [[learning-analytics-to-educational-interventions-2026]] — 闭合从分析到干预回路的七个使能因素
- [[course-specific-rag-help-seeking-higher-ed-2026]] — 以降低求助成本为目标的课程专属助手
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — 与学习分开检验的辅导参与率
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — 映射到推荐学习对象的六种行为画像
- [[trace-course-grade-prediction-2026]] — 为规划进行的课程与成绩联合预测
- [[zhang-ml-student-progress-programming-2026]] — 可解释的模块级进度预测
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — 高等教育中 AI、领导力与服务交付的 155 项研究
- [[sposato-ai-educational-leadership-taxonomy-2025]] — 教育领导力中 AI 的十域分类法
- [[students-at-stake-ai-deployment-risks-2026]] — 学生侧风险面：招生与助学金、学生成功服务与教学
- [[ai-campus-wellbeing-tools]] — 覆盖预防与干预的校园福祉支持
- [[coursegraph-cs-course-comparison-2026]] — 转学分与流动性中的课程等效性
- [[credentials-carry-evidence-ai-agents-2026]] — 当智能体可以代做时，完成记录意味着什么
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar（2026）—— 早期预测 AI 辅助作弊风险，以及低风险外展的阈值权衡
