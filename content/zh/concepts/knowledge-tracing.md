---
title: 知识追踪
created: "2026-06-23T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **知识追踪**——通过跟踪学习者在练习上的表现、并预测其未来的掌握程度，来建模学习者随时间知道什么。它是知识库中内容最丰富的建模线索，横跨贝叶斯、深度学习与[[llm|大语言模型增强]]的方法，追踪学生知识随时间的演化。

## 值得思考的问题

- 知识追踪从你在练习上的表现、随时间建模你知道什么，追踪知识何时获得、何时衰退。你的答案能透露什么，来判断你是真的"知道"某件事，还是这次只是碰巧答对？
- 本页警告"掌握不等于正确"——一个学习者看起来已经掌握，却可能在某个隐藏条件被违反时系统性地误用某项技能。你何时见过有人（或你自己）看起来懂了某件事，其实并没有？
- 如果知识追踪向决定下一步教什么的自适应系统供料，当模型把正确答案误当成真正掌握、过早地让学生前进时，会出什么问题？
- 知识追踪有多种形态——贝叶斯、神经、超图、基于对话、大语言模型增强。在一个你能解释的透明模型与一个强大但不透明的模型之间，你预期有什么取舍？
- 本页把知识追踪与模拟学生相连——生成那些通常由真实数据推断出的知识状态。模拟学习者如何帮助在一个辅导系统遇到真实学生之前测试它？
- 既然知识随时间衰退，一个自适应系统应当怎样对待一个学生被遗忘之后的"掌握"？你会如何为遗忘而设计，而不是假定知识会保持？

## 引言

知识追踪把原始的练习作答转化为对学生已掌握什么、仍需学什么的估计。与简单的正确性跟踪不同，知识追踪对学习的时间动态建模——知识何时获得、何时衰退、概念之间如何关联。

### 知识库中涵盖的方法

- **贝叶斯方法：**[[stanbkt-bayesian-knowledge-tracing]]对 BKT 实现做标准化，而[[mbp-kt-meta-behavioral-knowledge-tracing]]纳入元行为信号
- **带大语言模型观测函数的软证据 BKT：**[[colearn-agentic-tutor-co-learning-loop-2026|CoLearn（He 等，2026）]]保留了 BKT 结构，但把标准 BKT 的输入——二元的正确/错误观测——替换为连续的：一个[[llm]]评分器发出分级的掌握证据加一个置信权重，混合进一个经置信度收缩的后验，并设门控使明显错误的答案不能提高估计值，这使这次更新成为标准 BKT 的一个泛化变体，而非它的严格特化。这一观测函数是否可信，取决于学习者：均值证据干净地分开了能力层级（0.25 弱 / 0.67 中等 / 0.77 强），而层内与真实掌握的相关只有 r ≈ 0.15 / 0.48 / 0.41，使被追踪的状态成为一个代理关于学习者的信念，而非一次校准过的测量。
- **神经与混合模型：**[[neural-symbolic-knowledge-tracing]]把符号推理与[[machine-learning|神经网络]]相结合；[[explainable-probabilistic-kt]]推进可解释的概率模型
- **超图记忆网络：**[[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]]用时间超图推理增强基于记忆的追踪（DKVMN），建模多技能问题内共现概念之间的动态高阶交互
- **基于对话的知识追踪：**[[huang-interpretable-knowledge-tracing-2026]]把知识追踪改造用于对话式辅导
- **大语言模型增强：**[[xie-hillm-cd-2026|HiLLM-CD]]用大语言模型做自动概念树构建与层级熟练度推断
- **语义的、面向推荐的知识追踪：**[[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec（Ozyurt、Almaci、Feuerriegel 与 Sachan，2025）]]扎根的是*输入*而非架构：一个大语言模型为每道题标注解题步骤与知识概念，并与《共同核心州立数学标准》（Common Core State Standards for Mathematics）对齐，对比学习对齐题、解题步骤与概念的嵌入（通过预聚类概念变体如"解读条形图"与"从条形图中读取信息"来移除假阴性），一个 KC 校准损失使追踪器直接预测概念级的知识状态，而不是通过在该概念的每道题上运行模型来推断。校准后的追踪器随后充当练习推荐的强化学习环境，其中一个基于模型的价值估计从追踪器自身初始化评论器。在 XES3G5M 的四项任务上、对 2,048 名测试学生取平均，非 RL 基线给出的知识增益微乎其微或为负，基于价值的连续方法胜过基于策略的方法，而基于模型的价值估计持续改善它们——在最弱概念任务上最为明显，那里目标每一步都在变。所报告的增益是"最大知识改善的百分比"，不是学习结果，且该流水线依赖生成的解题步骤，其质量由追踪器继承。
- **基于结果的知识追踪（OKT）：**[[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh 等（2026）]]在成果导向教育（Outcome-Based Education）系统中追踪学生知识，做法是把**课程成果本身当作知识概念**，并以经验证的 OBE"亲缘映射"（课程成果与专业成果之间）替代由注意力或图导出的概念关系。一个记忆增强神经网络（MANN）建模每项成果的达成如何影响其他成果，领域自适应的 BERT 微调则丰富成果嵌入（GRU 主干胜过 LSTM）。在真实的[[engineering-education|工程]]专业 LMS 数据（2,416 名学生、966 项成果）上，OKT 达到 89.81% AUC——胜过 DKT、DKVMN、EKT 与 SimpleKT——而在 ASSISTments 上只给出有竞争力的结果，确认该优势与 OBE 特有的[[curriculum-design|课程]]结构绑定。
- **仅凭快照的追踪。**[[skill-acquisition-without-temporal-info|Nagai 等（2026）]]从学习者技能集合之间的包含关系诱导出一个伪时间序，把不断扩张的技能集合当作学习进程，使单时间点的快照仍可被追踪——但该表述假定技能永不丢失，因此面向会退步的学习者的部署，需要先有一个显式的遗忘机制。

### 与其他概念的关系

知识追踪与[[student-modeling]]密切相关——知识追踪专门建模随时间变化的认知知识，而学生建模是表征学习者一切侧面（[[affective-computing|情感]]状态、[[student-engagement|投入]]、偏好）的更宽实践。知识追踪供料给需要知道下一步教什么的[[adaptive-learning]]与[[personalized-learning]]系统，以及用掌握估计来选择恰当问题的[[intelligent-tutoring]]平台。它连接到[[learning-analytics]]（用于仪表盘与干预设计）与[[cognitive-diagnosis]]（用于细粒度的技能[[assessment]]）。知识追踪的构念也为[[simulating-students|模拟学生]]提供信息——一个模拟学习者的认知状态常以知识追踪所建模的同一套掌握/衰退动态来形式化，因此[[simulation]]是一种*生成*知识追踪通常从真实作答数据中*推断*的那些状态的方法。

**一个范围上的告诫：追踪估计的是领域掌握，而非高阶认知。**一项对 127 项智能辅导研究、历时 15 年的综述发现，贝叶斯与深度学习的追踪在该时期内有所改进，却仍无法建模高阶认知过程、元认知或动机——而恰恰是这些状态，才是自适应系统最需要瞄准的（[[zerkouk-comprehensive-review-its-2025|Zerkouk 等（2025）]]）。

**一个告诫：掌握不等于正确。**[[deceptive-overgeneralization-adaptive-learning-2026|An、McLaren 与 Stamper（2026）]]显示，BKT 的两状态（已学/未学）假设可能被*欺骗性过度泛化*违反——学习者可以看起来已掌握，却在某个隐藏的应用约束被违反时系统性地误用某项技能。当掌握估计驱动[[adaptive-learning|自适应]]停止规则时，这主张追踪条件性理解（知道*何时应当克制*某个行动），而不只是行动的正确性。

**一个相关的告诫关乎追踪模型如何被验证对如何被部署。**[[schuetze-knowledge-tracing-forgetting-2026|Schuetze、Yan 与 Carvalho（2025）]]把 BKT、带遗忘的 BKT 与加性因子模型（Additive Factors Model）拟合到一个多会话的连续再学习数据集，发现它们在对所有会话做回溯拟合时能复现学习趋势（可接受的 AUC ≈ 0.74–0.79）；但在**基于时间的交叉验证**下——训练于一个会话以预测下一个，即现实的部署情境——三者都把未来表现高估约 47–58%，未能捕捉[[desirable-difficulties|间隔效应]]，甚至可能把不同练习条件下的顺序关系预测反。耐人寻味的是，随着会话累积，*没有*显式遗忘机制的模型表现与带遗忘增强的版本大致相当，提示遗忘被部分吸收进了其他参数（如 AFM 的每学生截距），而非被真正建模。作者把这归因于学习对表现的区分：流行模型把"当下高表现"与"长期保持的高可能性"混为一谈。其实际意涵是：一个在回溯拟合上好看的追踪器，可能误导那些消费其掌握估计的自适应系统，这主张进行前推（walk-forward）评估，并采用顾及保持间隔、间隔与跨会话遗忘的模型。

**一个进一步的告诫关乎喂给更新步骤的证据规则。**[[crediting-assisted-work-inflates-mastery-2026|Srivastava（2026）]]在完全相同的 ASSISTments 2012–13 事件序列上运行了四种更新规则，它们只在如何为"借助帮助完成的行"计分上有所区别，样本为 12,716 名学生与 985,813 个计分事件的确认性一半。把一条有提示或重试过的行读作首次失败，对后来的无辅助表现预测最好（合并 AUC 0.658）；把任何完成都计功，预测最差（0.604），仅略高于一个只知技能难度的常数（0.595）。同样的选择也支配掌握计数：给完成计功宣布 113,428 个学生–技能对中有 93.9% 已掌握，而严格规则下为 72.8%，而宽松规则宣布早于严格规则的那些对，随后的无辅助准确率为 70.9%，两者一致处为 85.7%，低于 0.744 的基线率。因此，被追踪的状态部分是计分约定的函数，而不只是学习者本人的函数——被[[adaptive-learning|自适应]]关卡消费的掌握估计，应当附带产生它的那条规则。

**一个能力上的告诫：通用语言模型的知识追踪仅略高于一个平凡基线。**[[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden 等（2026）]]发布了 FoundationalASSIST，它恢复了早先追踪数据集丢弃掉的完整题干、学生实际给出的回答及其干扰项选择，并测试了四个前沿[[llm|大语言模型]]作为零样本追踪器。最好的 GPT-OSS-120B 达到 56.2%，而一个"永远预测正确"的规则已能拿到 51.3%（AUC-ROC 0.559），更长的历史没有带来改进，而 Llama-3.3-70B 在学生答对时 85.4% 的情况下正确、在学生答错时只有 12.6% 正确——证据是：一个现成的模型追踪的是乐观，而非理解，因此一个追踪器表观上的本事，必须对照其任务所允许的平凡基线来读。

- **一个单次前向的大语言模型可以在任何学习者被记录之前就追踪知识。**作为一个不带目标平台数据的、打字提问的问题来查询，Jev 达到均值 AUC .706，高于在 8 名学习者上训练的 28 个深度追踪模型中的最好者（.689），直到监督式追踪在 64–128 名学习者处赶上（[[system-one-llm-knowledge-tracing-2026|Lee 与 Park，2026]]）。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — 细粒度掌握估计供支持决策之用

## 关联文章

- [[deceptive-overgeneralization-adaptive-learning-2026]] — 欺骗性过度泛化：自适应掌握可能在学生知道何时克制行动之前就停止练习（An、McLaren 与 Stamper，2026）
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — 基于结果的知识追踪与亲缘映射
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — 语义扎根的追踪与 KC 校准状态，用作推荐的强化学习环境
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[crediting-assisted-work-inflates-mastery-2026]] — 哪条证据规则决定掌握断言（Srivastava，2026）
- [[system-one-llm-knowledge-tracing-2026]] — 单次前向的大语言模型在 8 名学习者上超过深度训练模型的知识追踪，成本仅其零头（Lee 与 Park，2026）
