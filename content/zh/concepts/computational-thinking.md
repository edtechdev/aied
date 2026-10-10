---
title: 计算思维
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
translation_of: concepts/computational-thinking
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **计算思维** — 一种涉及分解、模式识别、抽象与算法设计的问题解决方法。在AI教育中，计算思维既是理解AI系统的前提，也是一项AI工具可以帮助发展的技能。

## 值得思考的问题

- 当你通过把问题拆成部分、发现模式、抽象出本质、并设计步骤来解题时——即使没有计算机，你已经在做计算思维。你最近在哪里这样做过？
- 一个常见假设是计算思维等同于编程或"计算机素养"。它们可能有何不同？这一差异对你如何教它又为何重要？
- 研究表明，限制学生评判AI建议能力的，是他们在基本概念上的欠缺——而非AI工具本身。学习者在能够批判性地评估AI产出之前，必须已经理解什么？
- 有人主张计算思维应把学习者从被动消费AI产出，引向与AI一同构建、批判和设计。一间把学生当作生产者而非消费者的课堂，实际会是什么样子？
- 生成式AI现在能为学生的计算思维成长打分——然而人类与AI在最难的构念"系统思维"上都力不从心。你认为评估的自动化应止于何处，为什么？
- 机器人研究发现，只有当概念被显式化并映射到课程时，计算思维才会发展，而不能当作孤立的技术练习。教"技术技能"而不点名其下的思维，风险是什么？

## 引言

### AI时代课堂中的CT

本知识库的关联文章汇聚于一个核心主张：计算思维（CT）是学生批判性地与AI打交道所必需的概念基石，它也是被良好设计的AI支持学习最直接加深的技能。下文的证据按四个主题分组，均扎根于所链接的文章。

- **CT作为AI素养与批判性参与的基础。** 若干研究表明，正是CT让学习者能够评估而非仅仅消费AI产出。[[chat-debugging-human-ai-collaboration-circuits|聊天式调试研究]]发现，当本科生借助LLM调试模拟电路时，其*基本概念与批判性思维的欠缺*——而非工具——才是限制因素，因为学生缺乏评判AI建议所需的核心观念。[[llm-intervention-design-cs-review|一项关于LLM干预设计的综述]]同样得出结论：[[cs-education]]界从精通语法转向计算思维的推动，正是有效干预与"工具挫败"之间的分水岭。在幼儿阶段，[[ai-play-framework-early-childhood-2026|AI-Play框架]]通过教孩子"AI是由部件构成的系统"与"AI从例子中学习"，建立起不插电、基于游戏的[[ai-literacy]]——这是CT的发展适宜性第一层。而[[academic-league-of-ai-2026|一个AI学术联盟]]通过[[project-based-learning]]把CT连接到真实的公民AI项目，把[[ai-literacy]]嵌入实践。综合来看，这些表明CT是AI素养的可迁移认知内核。
- **教育机器人作为CT的载体。** 机器人是在[[k-12]]与[[stem-education]]各阶段发展CT方面研究得最多的情境。[[computational-thinking-educational-robotics-secondary-2026|中学研究]]主张，只有当CT概念被显式化并映射到[[stem-education|STEAM]]课程，而非被当作孤立的技术练习时，教育机器人才能提升问题解决与批判性思维。一项对95项研究的[[game-based-gamified-robotics-education-review-2026|系统综述]]确认，机器人培养了CT、创造力与问题解决，且[[game-based-learning]]适合非正式情境，而游戏化则在正式课堂中占主导并支持项目式学习。[[microbit-robotics-machine-learning-teacher-training-2026|教师培训证据]]显示，一项整合的Micro:bit + 机器人 + 机器学习干预在初始教师教育中产生了显著的CT知识增益（d = 0.638），据此主张机器人应被嵌入，以便未来的教师能够教授CT。LLM可以进一步降低门槛：[[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]]把LLM与机器人仿真耦合，使初学者能通过自然语言控制机器人，让嵌入CT的机器人无需低级编程即可触及。
- **作为"更有能力的同伴"，AI可以在资源不足的机器人课程中承载CT。** 一项针对尼日利亚103名一年级本科生的为期14周准实验发现，AI支持的问题式学习（将ChatGPT与Teachable Machine置于最近发展区之内）在后测的计算思维与机器人编程成绩上优于常规教学，且不存在性别调节效应（[[ai-pbl-computational-thinking-2026|AI-PBL机器人研究（2026）]]）。

- **LLM作为CT评估与发展的工具。** [[generative-ai|生成式AI]]提供了可扩展的方式来测量CT并为之提供支架。[[llm-computational-thinking-physics-2026|物理CT评估研究]]表明，LLM在大班[[physics-education]]课程中能够镜像人类评分者，为"数据实践"与"计算性问题解决实践"的成长打分——而人类与LLM在更复杂的"系统思维"构念上都感到吃力，这为自动化标出一条清晰的边界。[[visual-query-tracer-declarative-logic-learning|可视化查询追踪]]展示了可视化如何为抽象计算提供支架，建构支持CT发展的直觉。[[student-misconceptions-conditionals-loops-taxonomy|条件与循环迷思的分类法]]为[[scaffolding]]和自动化的迷思检测提供了细粒度的目标，并与[[misconceptions]]相连。然而，这些工具只有在教学设计领衔时才能发挥最好：[[llm-intervention-design-cs-review|该CS综述]]发现，配有支架式反馈、贯穿整个学期的"虚拟导师"设计持续改善了CT，而无结构的工具接触则加剧了挫败感。

一旦实现被自动化，持久的素养便发生位移：一份工作坊报告把抽象、计算思维与一个"验证谱"列为应教的技能，并引用了一项近1,000名学生的试验——无限制地接触GPT-4使练习表现提高48%，但在AI撤出后考试成绩下降17%（[[reshaping-cs-education-genai|Lee等人（2026）]]）。

- **CT横跨K-12、教师教育与评估再设计。** CT跨越从[[k-12]]到[[higher-ed]]的整个谱系，并正在重塑评估。在幼儿一端，AI-Play把CT与AI素养延伸到学前至K2学习者及非技术家庭；在大学一端，[[genai-oop-programming-assessments-2026|OOP评估研究]]发现2026年的GenAI系统在真实编程考试上优于一般学生，却仍在接口、抽象类与继承上失败——这些反复出现的概念缺口，恰好标出了CT在何处仍难以自动化。[[solving-vs-evaluating-genai-solutions|一项随机A/B交叉研究]]表明，评估与批判任务能产生与生成任务相当的结果，这说明CT可以通过评判有缺陷的AI解法来锻炼，尽管增益需要刻意的支架。支撑这一切的是教师：microbit研究把CT教学直接与[[teacher-education]]相连，而[[hashmi-socratic-physics-chatbot-2025|苏格拉底聊天机器人研究]]把CT所要求的精确问题表述与可测量的课程成绩联系起来。

- **一份经验证的工具定位了CT最难之处。** 一项用证据中心设计构建、并通过461名AI编程学生的项目反应理论加以验证的34题计算思维测验，把难度集中在数据表示、逻辑运算符排序与循环结构上，而非均匀分布在整个教学大纲中（[[zhang-ct-ai-training-test-2026|Zhang 与 Zhang（2026）]]）。

### CT与从AI消费者向生产者、创造者与设计者的转变

CT在AI时代的一个核心目标，是让学生与教师超越对AI产出的*被动消费*，走向*与AI一同并为了AI而创造、构建与设计*——这一议程使CT与建构主义学习（做中学）对齐。本知识库的关联文章日益明确地把这一生产者/创造者/设计者的转向显性化。[[ai-writes-code-student-writes-model-2026|模型作者身份研究]]把GenAI时代的学习即建构重构为一个可测量的"模型作者身份"过程——学生创作、调试并迭代AI模型，而非仅仅消费AI生成的代码或答案。[[code-to-learn-genai-artifact-construction-2026|CtL-GenAI框架]]将其操作化为GenAI时代的建构主义，把学生用AI构建的成果物视为CT发展的引擎。[[computational-thinking-ai-agent-creation|通过创建AI智能体学习CT]]表明，设计而不只是使用AI智能体，直接锻炼了分解、抽象与算法推理。

新的元分析证据使这一图景更清晰。[[astor-computational-thinking-meta-review-2026|一项对128篇CT系统综述的元综述]]发现，该领域正就CT的统一定义趋同——即以使用计算步骤与算法来解决问题的抽象模型进行推理——这正是生产导向学习所要求的模型建构（而非答案消费）思维。[[tsingidou-ct-robotics-kindergarten-2026|CT—幼儿园机器人研究]]表明，即便是幼儿学习者也能通过与机器人一起基于游戏进行建构而成为生产者，运用问题式学习、讲故事与支架——这是把技术视为自己建构之物而非仅操作之物的第一步。而[[solving-vs-evaluating-genai-solutions|评估与批判研究]]证明，CT可以通过评判并调试有缺陷的AI解法来锻炼——这是一种对AI产出的生产者姿态，能抵御被动消费的陷阱。

实际的结论是：CT教学应被设计为让学习者*用AI造物*——创作模型、构建智能体、构造成果物、批判AI产出——而非接收现成的解法。这既加深了CT，也使[[ai-literacy]]成为参与式的、创造性的，而非仅是概念性的。反过来，教师需要支持，以从使用AI工具走向设计AI增强的学习活动（参见[[teacher-role]]与[[professional-training]]）。

### 实践指引

对教育者而言，一致的信息是：CT通过*显式、有支架、可观察*的参与而发展，而非通过被动的AI使用。把机器人与对课程的显式CT概念映射相配对；用LLM做[[simulation]]、自然语言控制以及对CT成长的可扩展评估，同时为"系统思维"这类构念保留人类判断；并重新设计评估，使其强调对AI产出的评估与诊断，而非原始生成。无论在何种情境——幼儿的不插电游戏、中学[[stem-education]]的机器人，还是[[higher-ed]]的虚拟导师——都应把活动构造为让学生必须对分解、模式、抽象与算法进行推理，而非接收现成解法。

### 与相关概念的联系

计算思维是[[ai-literacy]]与[[critical-thinking]]之下共享的认知基础，是[[cs-education]]与[[k-12]]计算课程的课程内核，也是[[educational-robotics]]、[[game-based-learning]]与[[project-based-learning]]最好应服务于的概念目标。当[[llm|大语言模型]]与[[generative-ai]]被用作支架工具时，它会加深CT；而学生迷思分类法与CT感知的评估所瞄准要测量的，正是这项技能。教师通过[[teacher-education]]与[[professional-training]]发展它，而它可在包括[[physics-education]]与广义[[stem-education|STEM]]在内的领域间迁移。

- **计算思维预测与AI助手一同学习的能力。** 在AI编程助手课程中，[[computational-thinking-aica-2026|八年级学生]]中计算思维高的人显著优于低CT的同龄人，他们把助手用于理解而非获取答案。
## 关联概念

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## 关联文章

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[computational-thinking-aica-2026]] — Computational Thinking Levels and AI Coding Assistants (2026)
- [[ai-writes-code-student-writes-model-2026]] — 模型作者身份：GenAI学习即建构的理论与测量
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI：面向成果物建构的建构主义框架
- [[astor-computational-thinking-meta-review-2026]] — 对128篇系统综述的CT元综述
- [[tsingidou-ct-robotics-kindergarten-2026]] — 幼儿园通过机器人发展CT的系统综述
