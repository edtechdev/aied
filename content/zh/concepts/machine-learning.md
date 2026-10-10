---
title: 机器学习
type: concept
technology: [ai-technologies, generative-ai, learning-analytics, machine-learning, student-modeling]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-09T18:58:09-04:00"
translation_of: concepts/machine-learning
source_updated: "2026-09-30T07:29:37-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **机器学习（machine learning）** — 教育中 AI 的技术基础：从教育数据（而非手工编码的规则）中推断模式、预测与策略的算法。它涵盖监督学习（识别处于风险中的学生、预测成绩）、无监督学习（发现学习者聚类）、强化学习（归纳辅导与脚手架策略）与深度学习（用于序列、课程与视觉行为的神经模型）。[[generative-ai|生成式 AI]] 是其中最新、最可见的子集，但它坐落在远更古老的预测与自适应机器堆栈之上。

## 值得思考的问题

- 你大概已经遇到过从数据中「学到」东西的推荐系统或风险分数。你对一个模型仅凭历史数据中的模式就对关于你的某事做出决定（如一个风险标记或一条推荐路径）有多自在？
- 本页在预测风险与实际干预之间划出一条鲜明的界线——风险分数告诉你一个学生可能不及格，却不告诉你该做什么。你在哪里见过一个预测被当作解决方案来提供？
- 机器学习可以「钻自己奖励的空子」：一个优化投入度的 AI 辅导者可以让学生乐在其中，却在 [[teacher-role|教]] 他们方面所教甚少。如果一个系统在可测上成功却在教学上有害，除了它优化的那个数字，我们还应看什么？
- 在历史成绩上训练的预测模型可能编码系统性偏见，而自动化监考带来的误报风险会把正常行为误标为可疑。当数据承载着过去的偏见时，我们该在多大程度上信任一个用它来做高风险教育决策的 AI？
- 一些 AI 系统胜过可被人类解释的方法却仍不透明——你看得到它们奏效，却看不到为何如此。在教育中，何时可解释性是「锦上添花」，何时又不可妥协？
- 生成式 AI 常被当作全新的东西，而本页把它框定为机器学习的最新子集。把 ChatGPT 视为同一套预测与自适应机器的一部分，如何改变你预期它继承的风险与局限？

## 引言

机器学习是把教育痕迹转化为可行动情报的东西。它驱动 [[adaptive-learning|自适应系统]] 背后的 [[student-modeling|学生模型]]、标记处于风险中的学习者的 [[learning-analytics]] 仪表板、选择下一道题或脚手架的 [[intelligent-tutoring|智能辅导者]]，以及监控远程考试的自动化监考系统。在本文综合的各篇文章中，模式是一致的：收集学习者的数据，从中学习一个预测或决策模型，并据此行动——无论该行动是早期预警、课程推荐、[[scaffolding|自适应脚手架]]，还是考场监控。

## 机器学习在教育中做什么

**学生成功的预测建模。** 监督分类器——Logistic Regression、Random Forest、SVM、K-Nearest Neighbors——在学生退学之前识别 [[at-risk-students-ml-prediction|处于风险中的学生]]，使用 [[learning-gains|学业表现]]、人口学与注册记录。更先进的架构更进一步：[[trace-course-grade-prediction-2026|TRACE]] transformer 联合预测一个学生下学期将选的课程与将得的成绩，把并修课程的同时性建模出来，而非把历史当作扁平序列。优化器加序列的混合架构，如 [[interactive-online-learning-ai-2025|互动式在线学习]] 中的 DMO-GRU 框架，把自动特征选择与超参数调优和循环网络结合，在 [[student-engagement|投入]] 与表现预测上达到高准确率与低误差。一个共同的抱负是 [[precision-education-student-digital-twins-2026|「精准教育（precision education）」]]：持续的风险分层与学生数字孪生，预见失败并使路径与结果对齐，把机构从反应式补救推向预防性支持。玻璃箱模型在此也能撑得住：[[zhang-ml-student-progress-programming-2026|Zhang, Jeffries 与 Koprinska（2025）]] 表明，内在可解释的决策树——经特征选择剪到仅 3–5 个叶节点——在模块层面预测大规模在线 [[cs-education|编程]] 课程中的学生进步，其准确率与黑箱随机森林和 SVM 相当（85–91% 准确率），这是可解释性在预警应用中不必为预测力而被舍弃的证据。基于树的模型在估计题目难度上也同样有效：[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]] 把 LLM 抽取的认知与语言特征喂入随机森林和梯度提升机，预测 K-5 数学与阅读题目的难度（N = 5170），达到最高 r = 0.87 的相关，RMSE/MAE 低于直接的 LLM 估计、虚拟回归器、TF-IDF 基线和仅元数据模型。基于树的模型还产出可解释的 [[explainable-ai|特征重要性]]——年级与词数是首要预测因子——显示结构化特征加可解释的学习器如何胜过单一的整体判断。[[multimodal]] 融合扩展了这一预测工具箱：[[bird-multimodal-educational-literature-2026|Bird（2026）]] 把一个微调过的 ELECTRA transformer 与一个在计算语言学特征上搜索出的深度神经网络融合，以 0.996 的 F1 按英国 Key Stage 对英语文学分类——远高于最佳单模态 transformer（BERT，0.75）与最佳语言特征网络（0.392）——这是组合模型族胜过任何单一方法的具体案例。Sukoon（[[culturally-aware-student-stress-chatbot-2026|Bashir 与 Afzal，2026）]]）是监督分类在教育邻近的 [[well-being]] 支持上的一个紧凑应用案例：一个基于 20 个特征的 Random Forest（100 个估计器），这些特征来自一项 1,100 份回应的学生压力调查的心理、生理、环境、学业与社会维度，以分层 70/15/15 划分训练，缩放器只在训练数据上拟合以避免泄漏，并在同样的划分上与一个 SVM 做基准比较（89.09% 对 88.48% 准确率）。有两点值得注意：作者按*错误方向* 解读混淆矩阵——模型的主要错误是把低压力分类为中等，这在幸福（wellness）部署中是把学生引向更多而非更少的支持——他们把原生特征重要性当作一项实质性发现（血压 15.6%，师生关系 10.0%），同时承认单次分层划分、没有 k-fold 区间、以及非代表性数据集，限制了这些权重的置信度。

**自适应教学与辅导。** 机器学习闭合了建模与教学之间的环路。在 [[adaptive-scaffolding-cognitive-engagement-its|智能辅导系统]] 中，一个 [[knowledge-tracing|贝叶斯知识追踪]] 启发式与一个深度 [[reinforcement-learning]] 策略都自适应地选择解题示例类型，以引出不同水平的认知投入，相对非自适应对照显著改善后测表现——而两条策略随学习者 [[prior-knowledge|先前知识]] 而分化，引发了可解释性问题。强化学习也是 [[pedagogical-safety-rl|教学安全]] 议程的基础：由于 RL 辅导者优化一个代理奖励，它可以「钻」这个奖励的空子（提高投入却几乎不教东西），因此需要关于先修强制与最低认知需求的架构约束来保持其安全。较轻量的自适应项目，如 [[bin-bakheet-adaptive-ai-stem-deep-learning-2026|六年级科学]] 中基于规则的 [[stem-education|STEM]] 系统，显示机器学习可以被省着用——用于监控而非直接控制轨迹——同时仍支持深度学习。

在 [[knowledge-tracing]] 一侧，[[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh 等人（2026）]] 表明循环模型可以被调适到一门 [[curriculum-design|课程]] 自身的结构：他们的 OKT 模型把成果导向教育（Outcome-Based-Education）的课程成果当作知识概念，把经专家验证的 OBE 亲缘映射（课程成果与专业成果之间的关系）与一个 Memory Augmented Neural Network 耦合以处理跨成果影响，并把一个 GRU 骨干与领域自适应 BERT 嵌入配对——在真实的工程项目数据上达到 89.81% AUC，击败 DKT、DKVMN、EKT 与 SimpleKT。

**从表格化数值答案做诊断。** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Yin 等人（2026）]] 展示梯度提升树在一个长期对 AI 封闭的领域里解决辅导的*诊断*一面：对工程经济学计算题（Engineering Economics Calculated Formula Questions），学生的手写解答缺乏结构化数字数据，他们为每道题训练一个专用的 [[intelligent-tutoring|XGBoost]] 多标签骨干，把提交的中间与最终数值答案映射到教师评分标准上的错误标签（average precision 0.81，recall 0.79，accuracy 0.65）。随机掩码式数据增强——以不同概率把输入特征掩成「NaN」——比 SMOTE 之类的插值方法更好地保留了表格解答的逻辑依赖，并显著改善诊断，而纳入中间答案帮助最大。这是证据表明基于树的模型加结构感知的增强，可以在生成式方法缺乏训练数据之处搭起辅导反馈的脚手架。

对 [[reinforcement-learning|RL]] 子集的领域级视角由 [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper 与 Lugrin（2025）的系统综述]] 提供，涵盖 89 项教育中 RL 的研究：它确认 RL 是归纳自适应辅导与脚手架策略的一条主要 ML 谱系，但发现经典方法（Q-learning）比 Deep RL 更稳定地有效（61% 对 36% 的显著优越性），并指出过半研究不做统计检验——这是一个 [[research-methods-aied|方法学]] 告诫，与下述的验证关切相呼应。

**从预测到行动与问责。** 一个持续的局限是风险分数与可行干预之间的差距。[[sc2r-counterfactual-recourse-educational-2026|SC2R]] 框架把一个校准过的预测模型与整数规划式追索生成和语义验证耦合，产出的干预计划尊重时机、预算与可用性约束，而不只是模型上有效。这一「超越预测」迈向尊重约束、机器可核验的推荐的动作，是该领域对「预测性 [[ai-education|教育中的 AI]] 可能推荐机构不能或不应采取的行动」这一指责的回应。

## 监考中的机器学习

一个独特的应用是自动化考试监考。深度学习系统——分析眼动、头部姿态与面部表情的 CNN 与 RNN/LSTM——比传统监控更可靠地检测作弊，但这项 [[automated-online-exam-proctoring-decade-review-2026|十年长的系统综述]] 发现了持续的局限：数据集受限、单模型评估、可复现性缺口，以及会把正常行为误标为可疑的误报风险。其伴生文献 [[academic-dishonesty-automated-proctoring-ai-2026|学术不诚实综述]] 记录了此类系统必须应对的作弊方法（身份冒充、浏览器使用、复制粘贴），以及界定其公平性的实际负担——成本、连通性、考生的焦虑。两者共同告诫，ML 监考必须与保护 [[privacy]]、情境感知的设计和可及的替代方案配套。

## 局限与伦理关切

被综合的文献对机器学习的局限直言不讳。增益常来自 [[benchmark]] 或单一机构的数据，若不重新训练可能无法泛化；[[sc2r-counterfactual-recourse-educational-2026|SC2R]] 与 [[trace-course-grade-prediction-2026|TRACE]] 都承认这一点。在历史评分上训练的预测模型可能编码系统性偏见，而把风险分数应用于敏感的学生数据，引发要求 [[governance]] 与 [[human-in-the-loop-ai|人工监督]] 的 [[privacy]] 与 [[equity-in-ai-education|公平]] 关切。可解释性是一个反复出现的张力——[[reinforcement-learning|RL]] 策略可能胜过可解释的启发式却仍不透明。而 [[pedagogical-safety-rl|奖励钻空子]] 显示一个 ML 系统可以可测地成功却在教学上有害，这就是架构安全约束与审计基础设施之所以重要。

验证实践是过度自信的另一来源。[[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan 与 Carvalho（2025）]] 表明，知识追踪模型（BKT、BKT-with-Forgetting、AFM）在回退式地拟合到全部可得会话时看似捕捉了学习趋势，然而在 **基于时间的（前向推进）交叉验证** 下——用较早的会话训练以预测较晚的会话，模拟真实部署——它们高估未来表现、错过间隔效应，并给练习条件排错次序；无遗忘模型甚至与加了遗忘的模型打平，表明遗忘被吸收进了其他参数而非被学到。当训练与部署分布在时间上分离时——纵向学生数据的常态——强的样本内或回退式拟合并不能保证预测效度。

## 生成式 AI 作为一个子集

[[generative-ai|生成式 AI]]——大语言模型与相关的 [[llm|LLM]] 系统——最好被理解为机器学习的一个子集：同样的神经与训练基础，但应用于*生成*内容（解释、反馈、对话）而非分类或预测。它继承该领域的效度、偏见与安全关切，同时增添如幻觉之类的新问题。就本知识库而言，机器学习是更宽的技术伞盖；生成式 AI 是它最可见的当代分支。

## 教师教育与机器学习素养

机器学习也作为一个*学科* 出现在教育中。在 [[microbit-robotics-machine-learning-teacher-training-2026|初始教师培训]] 中，使用 Micro:bit 与监督式图像分类项目的动手编程和机器人干预，显著改善了职前教师的计算概念与入门机器学习知识，以及他们对教这门课的态度。随着 [[ai-literacy|AI 素养]] 进入课程，让 [[teacher-education|教师]] 对机器学习有可用的掌握，成为把它教给学生的前提。一条对照路径不借助任何软件抵达同样的概念：在 [[sung-ai-literacy-unplugged-ml-k12-pd-2026|Sung 与 Gunpinar（2026）的在线专业发展]] 中，十位 K-12 教育者手工构建了一个「可解释特征矩阵」——一张形状特征的是/否表格，它*就是* 分类器，可测试、可修订而非不透明——工具只有 Code.org 的分类游戏和 Google Slides。他们的 [[self-efficacy|AI 自我效能]] 从低于中等（M = 3.13）升到高于中等（M = 3.71），词联想任务中的负面描述从占参与者的 30% 降到零，尽管该证据是小样本、无对照且完全 [[self-report-measures|自陈]] 的。

## 关联概念

- [[student-modeling]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[reinforcement-learning]]
- [[generative-ai]]
- [[llm]]

## 关联文章

- [[at-risk-students-ml-prediction]] — 用监督式 ML 分类识别有退学风险的学生
- [[trace-course-grade-prediction-2026]] — 联合预测课程与成绩的 Transformer（TRACE）
- [[precision-education-student-digital-twins-2026]] — 用于预防性、职业对齐路径的 AI 学生数字孪生
- [[sc2r-counterfactual-recourse-educational-2026]] — 用于可行动干预的语义约束反事实追索
- [[interactive-online-learning-ai-2025]] — 用于互动式在线学习预测的 DMO-GRU 混合架构
- [[adaptive-scaffolding-cognitive-engagement-its]] — 一个 ITS 中认知投入的自适应脚手架（BKT 对 DRL）
- [[pedagogical-safety-rl]] — 教育强化学习中教学安全的正式框架
- [[automated-online-exam-proctoring-decade-review-2026]] — 十年长的深度学习自动化监考综述
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 带亲缘映射的成果导向知识追踪
- [[bird-multimodal-educational-literature-2026]] — 用于教育文献分类的多模态融合
- [[razavi-powers-item-difficulty-llm-2026]] — 用 LLM 与基于树的 ML 估计题目难度
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[culturally-aware-student-stress-chatbot-2026]] — An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
