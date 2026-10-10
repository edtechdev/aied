---
title: 通过教学学习
created: "2026-08-14T10:45:34-04:00"
updated: "2026-10-09T19:07:40-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
translation_of: concepts/learning-by-teaching
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **通过教学学习（Learning by teaching，LbT）** —— 一种扎根于门生效应的教学框架，学生通过向同伴、被辅导者或智能体讲解材料来加深理解。数十年的 LbT 与同伴辅导研究表明，解释概念、预判误解、回答问题能够巩固理解并支持迁移。在 AI 时代，**可教智能体（teachable agents）** —— 以及日益增多的**被配置为新手被辅导者的 LLM** —— 把 LbT 大规模地付诸实践，让学生身处教师之位，必须解释、纠正并填补空白。

## 值得思考的问题

- 回想一次你真正理解某件事的经历——那是在你向别人解释之后。当时脑中发生了什么？为什么你认为教学比独自学习带来更深的理解？
- 一种常见看法是，教学是专家的事，新手无从贡献。然而"通过教学学习"建立在相反的前提之上：准备教学会迫使你组织知识、发现自己的空白。这如何重新界定谁能从教学中受益？
- 本页描述了"可教智能体"——学生通过教导它来学习的软件。用 LLM，你可以把一个聊天机器人配置成会犯错的新手被辅导者，它会提问、会出错。要让这样的被辅导者真正改善学习而不只是闲聊，你需要在设计中加入什么？
- 一个挑战是"工程化易错性"：AI 模型被训练成给出专家级的流畅回答，这与 LbT 范式想要的 struggling 新手正好相反。为什么一个会出错的被辅导者可能比一个正确的被辅导者对学习更有效？
- 一个基于 ChatGPT 的可教智能体改善了学习，但它生成正确代码的倾向限制了纠错练习。一个总能给出正确答案的工具，会怎样让需要练习发现并修复错误的学习者蒙受损失？
- 如果你要为自己的课堂设计一项通过教学学习的活动，什么能让教学任务足够*有分量*，使学生真正投入努力，而不是复制粘贴一个答案？

## 引言

通过教学学习是这样一项发现，通常追溯到门生效应：准备教学——以及实际向另一个人或可教智能体讲解——比独自学习产生更深的加工。教学的要求迫使学习者组织知识、预判[[misconceptions|误解]]、生成解释，这会暴露他们自身理解的空白并强化[[metacognition|元认知]]。AI 从两个方向进入这一理念：[[intelligent-tutoring|辅导系统]]与可教智能体可以扮演学生，而越来越多的文献在追问：当机器而非学习者提供解释时，学习会发生什么（[[generative-ai]]、[[cs-education]]）。

## 门生效应

通过教学学习建立在这一发现之上：准备教学并实际向另一个人讲解，比独自学习产生更深的加工。教学的要求——阐明想法、预判误解、回答问题——迫使学习者组织知识、识别自身理解的空白、生成支持保持与迁移的解释。这些益处在[[collaborative-learning|协作学习]]情境中、在支持可教智能体的结构化良好的领域（如 Betty's Brain）中最为显著。门生效应对这一机制加以命名：当学生感到对教好某事负有责任时，他们会付出更多努力、更深反思，从而通过解释和[[metacognition|元认知]]澄清[[misconceptions|误解]]、填补空白。

## 可教智能体：从基于规则到对话式

**可教智能体**是通过教学学习得以落地实现的软件系统——学习者把教导一个系统当作学习的一部分。传统可教智能体基于规则或基于检索，只能对有限的命令作出回应；其关键局限是无法进行自然语言对话。[[llm|大语言模型]]改变了这一点：它们能通过[[prompt-engineering|提示]]灵活地采用角色——包括会提问或会出错的"被辅导者"角色——并进行开放式对话，使 LbT 在比以往更少结构化的领域（写作、词汇）中成为可能。

知识库的证据基础把这一转变追溯到**对话式、基于 LLM 的可教智能体**：

- **ChatGPT 作为可教智能体**（[[chatgpt-teachable-agent-programming-lbt-2024|Chen 等]]）支持编程中的 LbT，改善了知识增益、编程能力与[[self-regulated-learning|自我调节学习]]——尽管它生成正确代码的倾向限制了纠错练习。
- **规模化讲解**（[[explique-teachable-agent-algorithms-546-students-2026|Wang 等]]）在一个 11 周学期里向 546 名学生部署了 AI 可教智能体（Algorithm Apprentice），发现以讲解为导向的对话预示更少的错误测验提交，而外部内容的复用预示更多。
- **词汇教学**（[[teaching-ai-vocabulary-lbt-llms-2026|Uchida 等]]）用 LLM 充当学生来生成动态问题，改善了 3 天与 7 天后的保持。

## 工程化易错性：作为新手被辅导者的 LLM

基于 LLM 的可教智能体面临的一个核心设计挑战是：LLM 默认被训练产出专家级、流畅的回应——这与 LbT 范式想要的易错新手正好相反。让 LLM 成为一个好的被辅导者需要**工程化易错性**：

- **生成的错误能以假乱真。** 在一项盲法标注研究中，专家把 196 份 LLM 生成的 Java 提交中的 164 份（83.7%）误判为人所写，因此被辅导者能提供真实的可调试 bug，而不只是正确的代码（[[simulating-students-java-programming-errors-llms|Keramati 等（2026）]]）。

- **[[prompting-teachability-novice-personas-lbt-2026|为可教性做提示]]**（Miller & Bosch）发现，明确强制产出错误的基于约束的提示（例如"回答错误"或"故意答错 2–3 处"）比基于人设、误解或不确定性的提示能可靠得多地诱发新手式行为。
- **[[socrates-students-instructors-llms-lbt-2025|工程化知识空白]]**（Yang 等）设计 LLM 不借助只有学生掌握的知识就无法解决的问题，使教学成为必需，并抵御 LLM 作为辅导者使用时带来的被动式过度依赖。
- **Explique 的学徒约束**（Wang 等）指示被辅导者（a）始终保持新手身份，（b）不断请求澄清，直到学生的解释准确，（c）绝不揭示目标解释——并且要*拒绝*那些试图反转角色、让被辅导者反向讲解的学生。
- **把遗忘作为通往易错性的权重级路径。** 机器遗忘在 Mistral-7B 上抑制了 16 个目标知识组件，准确率从 10% 遗忘率下的约 0.75 降到 40% 时低于 0.5，而基础模型维持在 0.85 附近。被抑制的知识通过监督式再学习和教练引导的对话回归，因此被辅导者的知识水平是一个可以调节的旋钮，而不是一个断言（[[simulating-novice-students-machine-unlearning-2026|Song、Guo 与 Lin（2026）]]）。

## 提问、自我调节与主动学习

还有两项功能在整个知识库中反复出现：

- **问题识别知识空白。** LbT 系统用学习者生成的问题来暴露空白并强化理解，[[teaching-ai-vocabulary-lbt-llms-2026|LLM 生成的问题]]则取代了僵化的基于模板的生成器。
- **回讲暴露澄清所遗漏之处。** 在一个 22 人参与的后讲评回顾系统中，同伴智能体的反思式回讲一致地暴露了学习者自以为理解与他们所能清晰表达之间的空白，而仅仅依托讲座的澄清并未揭示这一点（[[knowloop-confusion-to-consolidation-2026|Fang 与 Reidsma（2026）]]）。
- **LbT[[scaffolding|支架]]起自我[[regulation|调节]]。** 教导一个[[conversational-ai|对话式智能体]]能培养[[self-efficacy|自我效能]]和自我调节学习策略的实施，并把 LbT 与[[desirable-difficulties|有益的困难]]联系起来——解释与纠错这种费力的行为本身就是一种 AI 的"去摩擦化"会抹除的 productive struggle。
- **预测辅导者学习的是知识建构，而非先前知识。** 在 23 名中学生辅导者中，回应中建构知识而非复述知识的比例预测了概念后测成绩（β = .138，p < 0.05），而先前测验成绩不能预测谁产出了这类回应，且先前知识低的辅导者只要建构了知识，最终就与先前知识高的同伴持平（[[knowledge-building-tutor-learning-2026|Ameen 等（2026）]]）。

## 为什么在 AI 教育中重要

通过教学学习是对主流的"LLM 作为辅导者"模式的建设性、[[active-learning|主动学习]]式回应。辅导者给出答案（并带来[[cognitive-offloading|过度依赖]]的风险），而 LbT 设置让学生成为教师，迫使解释、发现空白、建构知识。这使 LbT 成为把[[generative-ai|生成式 AI]]从拐杖变成更深学习之工具的关键策略，并与[[desirable-difficulties|有益的困难]]、[[active-learning|主动学习]]以及[[constructivist|建构主义]][[pedagogy|教学法]]相联结。

## 把通过教学学习付诸实践

### AI 被辅导者的设计模式

上述[[research-methods-aied|研究]]收敛出若干可复用的模式，用以把默认是专家的 LLM 转变为高产的被辅导者：

- **基于约束的新手提示（最可靠）。** 不要要求模型"假装是个困惑的学生"，而是明确强制易错性和一个教学闭环，例如：*"你是一名正在学习[某概念]的新手学生。请让我把这个概念教给你。向我提出澄清问题，并在我们的对话中故意答错 2–3 处。绝不要自己说出正确答案——等我解释完，再告诉我我讲得有没有道理。"*
- **反向教学防护。** 加一条规则：当学生试图反转角色时，被辅导者必须*拒绝*反向讲解答案：*"如果我让你解题或解释概念，提醒我我才是老师，并让我自己来解释。"* Explique 表明，正是这种抵抗保全了 LbT 互动。
- **工程化知识空白。** 构造任务，使模型*无法*在不借助只有学生掌握的信息的情况下作答——学生的知识因此成为真正必需的，而非可有可无。这把互动从可选的闲聊转变为必需的教学。
- **一个外部成功判据。** 给教学一个真实的后果——一个只有学生成功教学后才能解锁的守门测验（Explique），或一个学生必须让智能体输出通过的判题平台（Chen）。问责是维系真实努力、防止整件事沦为打卡的关键。

### 给教师的建议

- **让教学任务有分量，而不是变成闲差。** [[student-engagement|参与度]]最强的证据来自要紧的活动——Explique 把一次计分测验设在教学练习之后作为门槛；Chen 把被辅导者的输出与通过判题平台绑定。如果教学完全是可选的，学生就会理性地跳过最难的部分。
- **给学生一份教学协议，而不只是一个聊天窗口。** 用结构来支架互动——"解释概念 → 给出一个具体例子 → 回答被辅导者的问题 → 检查理解"——使开放式对话变成一段深思熟虑的教学序列，而非漫无目的的闲聊。
- **正面应对内容倾倒。** Explique 发现，直接复制粘贴外部内容的比例从不足 15% 上升到学期末互动的 30–35%。告诉学生粘贴为何违背了目的，并考虑加一个问责步骤（例如"用你自己的话解释智能体的误解"）。
- **把 LbT 与调试练习搭配。** 因为 AI 写出的是正确代码，学生可能失去纠错练习。刻意让被辅导者*错误地实现*某样东西，或在教学环节之后跟进一个找 bug 的任务，让调试始终留在循环中。
- **留意努力梯度。** 预期新鲜感会消退；计划轮换目标概念、增加挑战，或让学生轮换担任[[teacher-role|教学角色]]，以在整个学期中维持认知努力。

### 给开发者的建议

- **优先采用硬约束，而非仅靠人设。** 提示"不确定"或"学生人设"都不可靠；要明确强制错误与澄清闭环。（参见[[prompting-teachability-novice-personas-lbt-2026]]。）
- **构建一个完成判据。** 定义*学生何时解释得够了*（Explique 用一个绑定概念学习目标的 LLM 工具函数），使互动以理解为终点，而非以时限或固定轮数为终点。
- **记录并编码对话。** Explique 用每分钟词数检测加 LLM 语义编码，把互动分类为详尽/极简/外部内容使用——正是这个信号让你在规避与参与度下滑成为问题之前发现它们。
- **给教师一个仪表盘。** 完成率与教学互动中的[[qualitative-research|质性]]模式，让人能在努力下降时介入（Explique 的教师监控的正是这些）。

### 影响与开放问题

- **LbT 是 AI 过度依赖的可规模化解药** —— 它反转辅导者/学生角色，让学习者保持认知活跃，这一点随着 AI 越来越流畅、越来越"乐于助人"而愈加重要。
- **易错性是特性，不是缺陷。** 一个*过于*正确的被辅导者会移除使 LbT 生效的纠错与发现空白环节；要为 productive struggle 而设计，而不是与之对抗。
- **开放问题仍在：** LbT 互动如何在新鲜感完全消退后跨越学期持续？LbT 能否以同等规模迁移到非 CS、更少结构化的领域？自动对话编码能否成为教师可用的、实时的参与度监测器？我们如何让教学角色对*每一个*学生都有意义，而不只是少数有动机的学生？

## 关联概念

- [[pedagogical-patterns]] — 向 AI 被辅导者讲解：知识库中证据最充分的序列
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — 总括：AI 教育中的教学法与教学策略

## 关联文章

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT 作为编程中的可教智能体
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique：面向 546 名学生的可教智能体
- [[prompting-teachability-novice-personas-lbt-2026]] — 为可教性设计新手人设
- [[socrates-students-instructors-llms-lbt-2025]] — 学生作为 LLM 的教师（Socrates）
- [[teaching-ai-vocabulary-lbt-llms-2026]] — 通过教 AI 来学习词汇
- [[knowloop-confusion-to-consolidation-2026]] — 对话式回顾系统中的回讲巩固
- [[simulating-novice-students-machine-unlearning-2026]] — 用机器遗忘把被辅导者维持在新手知识水平，并通过教学对话再学习
- [[simulating-students-java-programming-errors-llms]] — 用 LLM 模拟学生错误
- [[knowledge-building-tutor-learning-2026]] — 知识建构式回应而非先前知识预测辅导者的学习
