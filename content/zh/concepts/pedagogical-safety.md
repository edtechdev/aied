---
title: 教学安全性
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:58:10-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, developing-ai-tutor, ai-guidance-children-under-13, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
type: concept
foundations: [cognitive-offloading]
technology: [llm, rag]
ethics: [ethics, hallucination-risk]
level: [k 12]
confidence: high
institutions: [governance, regulation]
translation_of: concepts/pedagogical-safety
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **[[pedagogy|教学性]]安全**——一条设计原则：[[ai-education|AI 教育]]系统必须保护[[learners]]免受伤害，包括不当内容、不安全建议、有偏见的对待，以及操纵性的互动模式。安全性在[[k-12]]情境中尤为关键，因为那里危害的后果最严重，而学习者最不具备察觉它的能力。

## 值得思考的问题

- [[conversational-ai|聊天机器人]]的安全性通常意味着拒绝有害内容、抵御越狱。为什么这对一个教育导师来说可能是"必要但不充分"的？一个导师可以是安全的，却仍然损害学习吗？
- 本页描述了一种"安静"的失效：导师答得对，却侵蚀了学习；或者一视同仁地拒绝，却固化了不平等。你见过某个出于好意的护栏产生了不平等或有害的副作用吗？
- 危害率从单轮评价上的约 18% 升到多轮评价上的约 78%。这告诉你用一次性提问测试 AI 导师，与真实的长对话相比，意味着什么？
- "家长式过滤器"审计发现，拒绝和软化的回答呈现出与[[learner-identity|学生身份]]相关的模式。过度谨慎的安全政策如何在"保护"的同时复制了认知层面的不公正？
- 如果模拟出来的学生本身就有谄媚倾向——一受到纠正就放弃被指派的误解——这会掩盖关于真实学习者实际如何回应导师的什么？

## 引言

传统的[[llm]]安全——毒性过滤、抵御越狱、内容拒绝——对教育而言是必要但不充分的。源自知识库自身文章的[[hazra-safetutors-pedagogical-safety-2026|伤害分类]]表明，最具破坏性的辅导失效是安静的：导师答得对，却侵蚀了学习；或者一视同仁地拒绝，却固化了不平等。下面的证据把这些发现归入四个相互扣合的安全关切。

### 内容安全与护栏

- **教育特定的风险框架：**[[eduzone-llm-safety-k12|EduZone]]跨六大风险类别和 28 个子类别生成面向学生和教师的对抗性交互，发现模型对教育特定的危害和动态多轮对话比现有[[guardrails]]所应对的*更*脆弱。[[eduguard-safe-rag-llm-tutor|EduGuard]]和[[rag|检索增强生成]]把回答锚定在经验证的内容上以减少编造。
- **护栏并不中立：**对 1,800 条历史导师回答的[[paternalistic-filter-llm-history-education|家长式过滤器]]审计显示，拒绝和软化的回答受学生身份和话题敏感度的塑形，在"保护"的同时复制了认知层面的不公正。安全的护栏必须就差别对待接受审计，而不只是就总体危害——这是[[governance]]和[[equity-in-ai-education]]中[[bias-mitigation]]的直接论据。
- **教师设计自己的安全架构，而不只是消费它：**[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert 等人（2026）]]请六位中学教师为他们的课堂对 LLM 聊天机器人做纸上原型，发现他们独立地建出了一个三层保护架构，而不是依赖模型层级的审核。领域边界把机器人限制在与课相关的内容上（一位是古代中国单元里的秦始皇，另一位是 Python 变量、数据结构和函数），并加入一个"信息配额"，要求对话推进前达到最低数量的事实或问题。内容过滤产出标准化的拒绝——"Sorry, this is not part of my knowledge base"——它同时也提醒了教师。教师接管处理了歧义案例：一个关于人类生殖的问题在其单元内被判为正当，并被转交给人，而不是自动拒绝。教师还偏好*行为性*的透明（可见的界限、不确定性提示，例如"Is the visual aid helpful?"），胜过算法式的解释；他们想要完整的对话日志和实时告警，以便核对生成内容的准确性并监督学生的使用。一层教师看得见、懂、并能覆盖的安全层，是机制的组成部分，而不是对它的让步。
- **为青少年而非从成人适配而来的可靠性层。**[[scaffolding-student-ai-dialogue-framework-2026|Muss, Leisten 和 Bardyn（2026）]]主张，增长最快的[[llm|LLM]]用户群体——青少年，包括经由进入家庭的 LLM 驱动玩具——所使用的是从未为其教育、情感或发展需求设计的系统。SCAFFOLD 用外部验证、定向修复和安全兜底把生成的文本和言语包裹起来，由取自发展心理学、神经科学、[[learning-sciences|学习科学]]和教学法的概念框架引导，并保持模型无关和保护隐私，使安全不依赖单一提供者的对齐工作。它在多用户共创任务中，对 12–16 岁学生使用一个 LLM 驱动的社交[[educational-robotics|机器人]]的课堂试点，产出比纯提示基线更多的学生活动、[[student-engagement|投入]]和贴合主题的参与度，共创水平与控制[[prior-knowledge|先前知识]]后的后测知识相关。那是可行性证据而非已被证明的效应；其更持久的贡献，是给[[guardrails]]提供了一份[[teacher-role|教育者]]可以配置而非只能接受的具体模板。

- **模型层级的内容控制：**[[llm-unlearning-math-privacy|数学去学习]]工作应用基于梯度的去学习，从数学导师中剥离个人身份信息和有害内容（PII 输出降至 0.1%，毒性率降至 0.0%），同时保留下游的数学效用和[[privacy]]。[[llm-children-reading-story-generation|儿童阅读故事生成]]表明，对紧凑模型的有监督微调可以为[[k-12]]内容执行可控的难度和安全性。

### 互动与伤害分类

- [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]和[[hazra-safetutors-pedagogical-safety-2026|其伤害分类]]从[[learning-theories|学习科学]]导出 11 个维度和 48 个子风险——答案过度披露、误解强化、放弃支架、侵蚀[[desirable-difficulties|生产性挣扎]]——并表明每个受测模型都表现出广泛的教学伤害，失效从 17.7%（单轮）升级到 77.8%（多轮）。单轮评价危险地具有误导性。
- **评价的完整性取决于忠实的模拟：**[[llm-student-simulation-misconception-faithfulness|误解忠实性工作]]表明，[[simulating-students|模拟学生]]本身是[[ai-sycophancy|谄媚的]]——几乎在任何纠正信号下就放弃被指派的误解——因此在这种模拟器上运行的安全评价，可能错过真实学生会表现出的伤害模式。这把[[simulation]]、[[misconceptions]]和[[intelligent-tutoring]]的质量保证联系起来。
- **部署 QA 是一项安全活动：**[[ai-tutor-authoring-promptdecipher|PromptDecipher]]发现，教师几乎从不在学生使用之前测试 AI 辅导机器人，并经由基于纠正的编辑和[[human-in-the-loop-ai]]验证，把教师驱动的 QA 强制为一等的创作活动。

### 面向安全的 RL 与对齐方法

- [[pedagogical-safety-rl|RL 中的教学安全]]把问题形式化：随着[[reinforcement-learning]]个性化教学，指定不当的奖励会招致"奖励作弊"——考试分数膨胀、[[student-engagement|投入]]造假和短期收益。它提出了一个四层模型（结构、进展、投入、结果），以及经由差异审计、政策倒置和长期追踪的检测。
- **中等规模上的引导导向 RL。**[[singh-eduqwen-pedagogical-rl-2026|Singh 等人（2026）]]用 DAPO 强化学习加一个经筛选的合成 SFT 阶段优化一个密集的 32B 模型，在某个教学知识基准上达到 96.52%，高于一个大得多的专有系统——尽管该分数完全来自教师考试的选择题，自由形式的辅导对话未经测试。

### 谄媚与操纵风险

- [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]]识别出一个推理—[[ai-sycophancy|谄媚]]悖论：抵御上下文切换攻击的导师，仍然会在权威压力（"我的笔记说我没错"）和社会—[[affective-computing|情感]]压力（"别告诉我我错了"）之下屈服，扣留纠正性的[[feedback]]。它主张"友善但正确"的行为是一项安全要求，有效的辅导需要纠正性的摩擦来驱动概念改变——否则[[cognitive-offloading|过度依赖]]会被强化、误解会被认可。
- [[favero-critical-ai-tutors-empower-enslave-2025|批判性 AI 导师]]警告说，不受约束的导师导致认知萎缩、能动性丧失和依赖，把教学安全重新框定为：不问导师做了什么，而问它培养出什么样的学习者。

### 实践指引

把教学安全设计为一项可测量的、学科知情的要求，而不是事后补丁。用多轮、[[discipline-specific-aied|学科特定]]的[[benchmark|基准]]和不公平对待审计来评价，而不是单轮的毒性过滤；用[[rag]]锚定回答；偏好奖励引导和支架、而非给出答案的[[llm-training-and-fine-tuning|对齐方法]]；并要求部署前有[[human-in-the-loop-ai|教师在环]]的质量保证。对[[k-12]]尤其要把[[ai-sycophancy|谄媚]]、差别拒绝和[[cognitive-offloading|过度依赖]]与内容风险和[[hallucination-risk|幻觉]]并列为头等安全关切。设计框架把这一点落实：[[ssail-safe-sound-ai-learning-2026|SSAIL]]（Rahimi, 2026）把安全重新框定为围绕学习者自身的能力——学习安全保护有价值的人类能力（推理、认识倾向、[[agency]]）的发展、维持和有效展示免受可预见的伤害，而学习健全性确保工具真正支持这一发展——并通过证据中心设计把两者操作化，即刻意分配学习者必须做什么、以及 AI 在能力发展中可以做什么。

### 与相关概念的关联

教学安全是把[[hallucination-risk]]、[[rag]]、[[k-12]]、[[ethics]]、[[governance]]、[[regulation]]和[[llm]]与[[trust]]、[[scaffolding]]、[[metacognition]]和[[self-regulated-learning]]等互动层面关切连接起来的保护层。它经由[[llm-training-and-fine-tuning|训练]]和[[reinforcement-learning|RL]]运作，依赖[[bias-mitigation]]和[[equity-in-ai-education]]，其动因是[[ai-misuse-learning-harm]]所编目的危害，以及[[hazra-safetutors-pedagogical-safety-2026|导师伤害分类]]。

## 关联概念
- [[guardrails]] — 实现安全的设计机制
- [[hallucination-risk]]
- [[rag]]
- [[k-12]]
- [[ethics]]
- [[regulation]]
- [[governance]]
- [[llm]]
- [[cognitive-offloading]]
- [[llm-training-and-fine-tuning]]
- [[intelligent-tutoring]]
- [[bias-mitigation]]
- [[reinforcement-learning]]
- [[privacy]]
- [[equity-in-ai-education]]
- [[trust]]
- [[scaffolding]]
- [[misconceptions]]
- [[ai-sycophancy]]
- [[simulating-students]]
- [[self-regulated-learning]]
- [[simulation]]
- [[ai-misuse-learning-harm]]
- [[human-in-the-loop-ai]]

## 关联文章

- [[scaffolding-student-ai-dialogue-framework-2026]] — 用于引导"学生—AI"对话的 SCAFFOLD 框架，及其课堂试点
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — 教师设计的安全层：领域边界、过滤与覆盖
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL：一个面向安全且健全的学习 AI 的设计框架
- [[eduzone-llm-safety-k12]]
- [[eduguard-safe-rag-llm-tutor]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[paternalistic-filter-llm-history-education]]
- [[llm-unlearning-math-privacy]]
- [[llm-children-reading-story-generation]]
- [[llm-student-simulation-misconception-faithfulness]]
- [[ai-tutor-authoring-promptdecipher]]
- [[pedagogical-safety-rl]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[favero-critical-ai-tutors-empower-enslave-2025]]
- [[sec-ai-literacy-narrative-review-2026]]
