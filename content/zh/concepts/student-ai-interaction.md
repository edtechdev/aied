---
title: 学生—人工智能交互
created: "2026-08-20T02:55:00-04:00"
updated: "2026-10-09T18:39:30-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
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

> **学生—人工智能交互**——学习者在学习与[[problem-solving|问题解决]]过程中与[[generative-ai|生成式人工智能]]系统打交道的方式、过程与认知工作。这里的[[research-methods-aied|研究]]刻画学生向人工智能要求什么、提示与对话如何演进，以及交互质量与[[learning-gains|学习结果]]、[[cognitive-offloading|认知卸载]]及[[agency|能动性]]之间的关系。

## 值得思考的问题

- 回想你（或一个学生）最近写给人工智能的几条提示。你会把它们中的多数描述为索要答案，还是要求人工智能解释、探究或评价？你猜想这种模式对学习有什么影响？
- 研究发现，一小部分问题类型占了学生提问的大多数，而且问题随任务推进而改变。你认为学生的提问为何收窄，这又暗示了他们如何使用这个工具？
- 本页声称，浅层的、索要答案的提示与学习减少和过度依赖相关，而反思性的、核验取向的交互支持理解。你认为什么把一个“好”提示与一个“坏”提示区分开——而这究竟是学生的责任，还是工具设计的责任？
- 如果交互质量是由任务情境与脚手架塑造的，而非学生的固定特质，一门课程或一个工具可以怎样被重新设计，以邀请更宽、更有成效的提问范围？
- 你会如何判断一个学生流畅的人工智能对话反映的是真实学习，还是只是熟练的委托——你会查什么来弄清楚？

## 引言

学生—人工智能交互是学习者与生成式人工智能[[student-engagement|参与]]的可观察表面——他们提出的问题、写下的提示、协商与核验人工智能输出的方式，以及这些模式如何随任务阶段与时间而变。它位于[[student-experience|学生经验]]、[[prompt-engineering|提示工程]]与[[learning-analytics|学习分析]]的交汇处，并对教育中的人工智能使用代表真实学习还是[[cognitive-offloading|过度依赖]]这一争论至关重要。[[human-ai-collaboration|人机协作]]框定的是人与模型之间认知分工的高层划分，而学生—人工智能交互是这一关系的具体、可测量的展开——学习者每时每刻所做的具体询问、提示与协商动作。

### 学生向人工智能问什么

一条核心的研究脉络测量**学生询问的类型与质量**。研究把问题类型的分类体系——例如 Graesser 等的 18 型分类体系——应用于对学生—人工智能交互的分类，常用少样本分类器把分析扩展到数百或数千次交互之上。发现表明，一小部分问题类型占了学生询问的多数，而学生提出的问题**随任务推进发生显著变化**（如[[student-ai-inquiry-types-cs2-2026]]）。这种任务依赖性很重要：交互质量不是学生的固定特质，而是由问题情境、[[scaffolding|脚手架]]与人工智能工具的给养所塑造。在最年幼的年龄段，[[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed 与 Martin（2025）]]发现儿童（6–14 岁）会主动通过提出已知答案的问题（如“霸王龙有多大”）来测试一个[[conversational-ai|聊天机器人]]的可信度——这是认识论上的自我能动性的表达——而典型的儿童只问 1–3 个问题，一个出色的一年级学生问了 21 个，凸显了发展与个体差异如何塑造学习者提出的问题。

这些分类体系本身尚未取得一致：跨 33 项研究的 46 种分类中，相似的标签命名不同的现象，因此该综述提议以*交互片段*——一段目标导向、时间有界的交流——作为跨越知识获取、评价性反馈、策略性指导、对话式探究、制品精炼与共同调节的单位（[[student-llm-interaction-taxonomy-review-2026|Borchers、Jansen 与 Weidlich（2026）]]）。

与这些分类体系研究互补，[[yan-cognitive-outsourcing-genai-assessments-2026|Yan 等（2026）]]刻画了学生询问的*对话形式*。在 38 位完成无人监督的议论文写作的[[higher-ed|本科生]]中，76.32% 使用了单轮的“提问—得答案—停止”模式——通常直接粘贴评估题目标题而不说明自己的需求，不满意时重新提交相同的提示——而 78.94% 只在任务的开头（想法、背景）或结尾（润色、篇幅）触及[[generative-ai|生成式人工智能]]，把它与阅读和独立[[writing-education|写作]]分开；只有 23.68% 维持了带追问和自己推理的迭代往复对话。作者把这些模式放在从**认知外包**到**认知再分配**的光谱上——生成式人工智能时代对应于对学习的表层与[[metacognition|深层]]路径——并指出多数学生把这个工具设想为一台升级的搜索引擎，这把他们约束在外包的一端。

把这些模式重新框定为认识论工作，一项对 200 个协同编程聊天会话的分析发现，78.8% 的学生—生成式人工智能交互运行在非掌握性的目标与策略上，如外包或寻求核验，只有 11.1% 把面向掌握的目标与认识论上的辩护结合起来（[[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu（2026）]]）。

对 50 个抽样交流的编码给出了同一行为的三路类型学：[[three-pathways-student-ai-interaction-2026|Zahra（2026）]]把 46% 分类为被动审阅（模型充当神谕，输出几乎不经审视就被接受），18% 为直接提问，36% 为策略性对话，并把该分布与一个约束优先的设计论证配对（编码者间 kappa = .48）。一项有 211 名计算机专业学生、涵盖七次作业的调查从另一方向得出同一结论：[[student-llm-use-cs-subfields-2026|Nizamani 等（2026）]]测得 LLM 采用率从算法课的 89.6% 到软件工程课的 15.2%，并把这种落差归因于作业复杂度、可核验性与脚手架，而非子领域。

### 交互质量与学习

另一条互补的脉络把交互的*形式*与学习联系起来。浅层的或习惯性收窄的提示（要求人工智能产出答案，而非解释、探究或评价）与学习减少和过度依赖增加相关，而反思性的、核验取向的交互支持[[metacognition|元认知]]与持久的理解。这直接把学生—人工智能交互连接到[[intelligent-tutoring|智能导学]]设计：系统可以被构建来邀请更宽、更有成效的提问范围，并脚手架化提问，而非仅仅作答。交互根本不必经由索要答案的提示——当人工智能批评学生自己的作品时，交流变成反思性的、核验取向的对话：在[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash 与 Connell Pensky（2025）]]中，学习者对[[llm]]作文[[feedback|反馈]]的反应显示出反思的占 92.7%、接受的占 93.6%、主动反驳 LLM 主张的占 87.8%（评分者间 κ = 0.81–0.89），而他们对[[ai-feedback-quality|反馈质量]]的反应随迭代作为一种可学习的技能而改善。交互的反思性一面不必经由直接提示——在[[breideband-community-builder-cobi-2026|CoBi]]中，学生与自己[[collaborative-learning|协作]]发言的课堂级人工智能可视化打交道，并在人工智能的分类显得不对时进行商议，把表面的误分类变成校准他们对人工智能能力与极限之理解的机会（[[trust-calibration|信任校准]]），而不是纯粹接受其输出。然而，交互形式与学习之间的联系有一个限度：[[page-cognitive-partnership-cycle-human-ai-2026|Page（2026）]]以“学习者可以在许多轮中精炼一个输出，而其背后的心理模型保持不变”为由，把*对话式迭代*与*认知迭代*分开，因此学习的证据是背后的……

交互而非工具决定路径：在一项有近 1,000 名高中数学学生的实地实验中，不受限制的 GPT-4 把练习分数提高了 48%，却把无辅助考试成绩削减了 17%，而同一个模型被限制为教师设计的提示时，练习提高 127%，并基本抹平了这一赤字（[[naim-bypass-offload-scaffold-llm-learning-2026|Lee（2026）]]）。

学生是否提示得有效，而非提示多少，才追踪成功：AI Query Efficiency 与 AI-Driven Problem-Solving 是 128 名工程专业学生学业表现最强的预测因子，且在控制 GPA 后仍然显著（[[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez 等（2026）]]）。

行为情境是与问题本身分开的信号：在 TutorTrace 的四次部署中（480 名学习者、约 180,000 条 IDE 事件），把求助条件设置为学习者近期的行为状态，把“无独立工作即提问”的间隔从 50.0% 降到 20.7%，而迫近的提问仅凭行为就可预测（AUROC = .726）（[[tutortrace-learner-behavioral-states-2026|Barron 等（2026）]]）。

密度不是机制：让学生在语音与文本之间交替，几乎把每分钟对话轮次翻了一倍（1.34 对 0.75），却没有改变每周掌握度，作者把打字渠道在第一次击键前 26 秒的中位迟疑读作编码行为本身（[[ai-tutor-modality-randomized-field-experiment-2026|Yang、Van Alstyne 与 Dellarocas（2026）]]）。

一个核验循环仍可能停留在浅层：对一门本科数据库课程中为期四周的 LLM 智能体部署做滞后序列分析，发现了显著的“查询—评价—查询”循环，但低阶状态内部有很强的自我转移循环，且只有 3.92% 的交互达到高阶认知（[[li-dbagent-llm-educational-agent-cs-2026|Li 等（2026）]]）。

Bernstein 与 Sibia（2026）记录了 CS2 学生处理生成式人工智能解释时的迭代—过滤模式（[[student-reception-genai-analogies-computing-2026]]）：他们把解释与课堂笔记交叉比对，要求出处（“没有出处我会怀疑得多”），并以追问探测不一致，而非给出单一的接受或拒绝判断。学生也会读出这些解释是为谁的知识与背景而写的——假定的[[prior-knowledge|先前知识]]超出大纲、默认的体育与游戏指涉（“计算领域更男性主导的那一面”），以及过多的重复，都充当了关于想象中的读者的信号，而过度的脚手架被读作居高临下，而不只是低效。

在任务的正确*时点*咨询人工智能，与单个提示的措辞同样重要：在同一研究中，[[yan-cognitive-outsourcing-genai-assessments-2026|Yan 等（2026）]]发现，面向再分配的少数派把独立工作与生成式人工智能咨询交替进行，报告总投入不变而焦点转移——把资源从搜索移到检查论证质量与平衡性，并在会话之后写反思笔记以对抗浅层保持——而那些有掌握目标但[[ai-literacy|人工智能素养]]薄弱的学习者落入“效率悖论”，“并非出于意图，而是出于默认”地卸载。

### 从交互到教学法

刻画学生—人工智能交互为[[learning-design|学习设计]]提供信息：教师可以注意到学生的提问模式何时狭窄或浅层，并设计拓宽提问的干预；[[teacher-role|教师角色]]转向辅导学生与人工智能有效互动。它也为那些把有效提示与核验当作可学习的技能、而非先天能力的[[ai-literacy|人工智能素养]]课程奠基。

设计杠杆可以改变这一默认：在一门约 70 名学生的异步物理课程中，被打分的制品是对话转录而非答案，然而许多学生仍然提出一长串问题，而不回答模型的苏格拉底式追问——这正是那些标准所写要捕捉的失效模式（[[context-prompts-physics-assignments-2026|Rodriguez 与 Wulff（2026）]]）。

教师撰写的提示是这样一个杠杆，但实现的严格性落后于目标：在 1,479 段对话中，38% 未达到教师预设的 Depth-of-Knowledge 水平，在 DOK 3 处接近 50%，而明确的终点线把这一差距收窄了 0.22 个水平，一个“不得直接给答案”的护栏把人工智能给出最终答案的比率削减了 8.5 个百分点（[[teacher-authored-prompts-student-ai-dialogue|Liu 等（2026）]]）。

不使用本身也是一种[[pedagogy|教学法]]必须规划的交互模式。[[zou-is-this-a-trap-student-teachers-genai-2026|Zou 等（2026）]]研究了三门课程中的 85 名[[teacher-education|师范生]]，其中生成式人工智能在[[assessment|评估]]中被明确允许，发现 62.4%（85 人中的 53 人）完全不用，远低于可比的英国与澳大利亚调查中 79–83% 的采用率，而采用者的使用是浅层而纠错性的，而非生成性的（校对 43.8%，清晰度检查 34.4%，文本生成仅 18.8%）。他们的选择追踪的是评估设计与机构文化，而非技术难度：41.5% 的不采用者害怕被错误地指控[[academic-integrity|抄袭]]，十一位受访者中有九位把许可政策本身读作一个可能的“陷阱”。32 位调查报告的使用者与 28 位自我声明之间的差距表明，学生*所报告的*人工智能交互是由打分后果塑造的——这是对学习分析视角下的学生—人工智能交互的一个测量告诫。

## 学生—人工智能对话中的学科与认知参与

- **学生—人工智能对话中与学科相关的认知参与。**Chang 与 Li（2026）用一个被试内、跨学科设计，分析了学生在 116 门课程中对人工智能的提示，表明学生—人工智能对话反映的是**与学科相关**的认知参与，而非固定的个人交互风格。总体上约 62% 的提示编码了高阶认知要求，但 Bloom 层级的画像依学科而显著不同：[[stem-education|STEM]]课程引出以“应用”为主的提示（20.8%），语言课程以“理解”为主（31.7%），社会科学课程以“创造”为主（33.8%）。被试内的配对比较确认，同一批学生在社会科学课程中产出的高阶提示显著多于 STEM 课程（合并 n = 16，p < .001），而课程层面的变异超过学生层面的变异——这有力地主张，人工智能教学助手应当结合学科情境来设计与评价。

## 关联概念

- [[learners]] — 学习者：学习者侧概念的总括
- [[human-ai-collaboration|人机协作]]
- [[student-experience|学生经验]]
- [[prompt-engineering|提示工程]]
- [[learning-analytics|学习分析]]
- [[cognitive-offloading|认知卸载]]
- [[intelligent-tutoring|智能导学]]
- [[metacognition|元认知]]
- [[agency|能动性]]
- [[generative-ai|生成式人工智能]]
- [[llm|LLM]]
- [[ai-literacy|人工智能素养]]

## 关联文章

- [[yan-cognitive-outsourcing-genai-assessments-2026]] — 无人监督的学生—生成式人工智能评估中的认知外包对再分配（Yan 等，2026）
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — “这是个陷阱吗？”：师范生在评估中对生成式人工智能的不采用（Zou 等，2026）
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — 学生—人工智能交互中询问类型的分析
- [[student-llm-interaction-taxonomy-review-2026]] — 学生—LLM 交互分类体系综述
- [[teacher-authored-prompts-student-ai-dialogue]] — 学生—人工智能对话中的教师撰写提示
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — 建构认识论的人工智能素养
- [[dura-llm-cs2]] — 祛魅、使用、反思、评价（DURA）：CS2 中的 LLM 整合
- [[li-dbagent-llm-educational-agent-cs-2026]] — 计算机教育中基于 LLM 的教育智能体（DBagent）
- [[isaza-chatgpt-engineering-prompting-2026]] — 经记录的提示与整合行为
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — 有缺陷但难忘：学生对计算教育中兴趣个性化生成式人工智能类比的批判性接受
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — 绕过、卸载还是脚手架：大语言模型塑造学习的概念模型
- [[ai-tutor-modality-randomized-field-experiment-2026]] — 当人工智能导学系统开口说话：来自一项随机实地实验的证据
- [[context-prompts-physics-assignments-2026]] — 用情境提示驱动的人工智能物理作业
- [[three-pathways-student-ai-interaction-2026]] — 学生—人工智能交互的三路径类型学：46% 被动审阅、18% 直接提问、36% 策略性对话
