---
title: 强化学习
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer]
pedagogy: [active-learning, scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, personalized-learning]
ethics: [pedagogical-safety]
level: [special education, k 12, higher ed]
confidence: medium

translation_of: concepts/reinforcement-learning
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

> **强化学习（reinforcement learning）** 通过奖励信号训练 AI 辅导者与智能体：[[special-r1-rl-special-education]]、[[singh-eduqwen-pedagogical-rl-2026]]、[[pedagogical-safety-rl]] 与 [[ai-coaching-rl-skill-development]] 把 RL 与教学目标对齐，包括安全与技能迁移（[[intelligent-tutoring]]、[[agentic-ai]]）。

## 值得思考的问题

- 一个 RL 辅导者靠最大化奖励信号来「学」该做什么。在读之前，一个为奖励做优化的 AI 可能出什么问题——特别是当奖励是「学生点击继续」或「现在给出正确答案」之类的东西？
- 本页指出奖励设计编码了教育价值观。如果你必须指定一个 AI 辅导者应当最大化的奖励，你会放什么进去——你的奖励又会不经意地忽略什么或错误地奖励什么？
- RL 训练智能体做出长程的决策序列（给什么提示、何时推进难度、如何安排节奏），而非单个答案。这与你可能天真地奖励的那种逐时刻正确性有何不同——而这个差异为何对学习重要？
- 安全约束可以被整合进 RL，使奖励优化不以学习者的幸福为代价。想一个奖励优化的辅导者可能表现出的「有帮助」行为，实际上却有害于教学（例如泄露答案以抬高完成率）。你的安全线会画在哪里？
- 奖励优化可能保存也可能摧毁富有成效的挣扎，取决于设计。从你的经验看，「学生完成任务」等同于「学生学到东西」吗？你在哪里见过一个 AI 为前者优化却损害了后者？

## 引言

### 强化学习如何在 AIED 中工作

强化学习（RL）通过奖励期望行为来训练一个智能体——智能体通过试错学到一个最大化累积奖励的策略。在教育中的 AI 里，RL 被用来训练辅导智能体与学习伙伴，它们必须做出一串决策（给什么提示、何时推进难度、如何安排练习节奏）而非单个答案。这使 RL 非常适合 [[adaptive-learning]] 与 [[intelligent-tutoring]]，那里长程的教学决策才要紧。

### 知识库中记录的应用

- **教学对齐的 RL。** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] 用一条 RL-SFT-RL 流水线训练一个*引导* 而非直接给答案的模型，把奖励与教学目标对齐；[[special-r1-rl-special-education]] 把 RL 应用于 [[special-education|特殊教育]] 的辅导者设计。
- **RL 在遵循教学指令上胜过监督微调。** LearnLM 的训练发现，基于偏好的 RL 显著比单独的 SFT 更有效，因为偏好判断捕捉了跨长对话的、依上下文而别的细微区分，而这只有指令标注的监督数据只能部分处理（[[learnlm-improving-gemini-learning|LearnLM Team（2025）]]）。
- **安全与技能迁移。** [[pedagogical-safety-rl]] 把安全约束整合进基于 RL 的辅导，使奖励优化不以学习者的幸福为代价；[[ai-coaching-rl-skill-development]] 展示了支持真实技能发展与迁移的 RL 驱动辅导。
- **奖励遗漏了什么，塑造了谁受益。** [[adaptive-scaffolding-cognitive-engagement-its|Tithi 等人（2026）]] 发现，一个以测试分数与时间效率为奖励的深度 RL 辅导者，在后测上与一个 BKT 启发式打平（A = .58 各，对照为 65.7），却只把 4% 的训练题分配给建设性的错误示例修复，且偏向先前知识高的学生。
- **模拟与练习。** [[history-aware-student-simulation]] 与 [[q-learning-lab-rl-teaching]] 用 RL 与模拟学习者来训练和评估 [[pedagogical-agent|教学智能体]]，把 RL 与 [[student-modeling]] 和 [[learning-analytics]] 相连。
- **长程、安全加权的 RL。** [[residencyrl-clinical-rl-training-2026|ResidencyRL（Liévin 等人，2026）]] 优化整整 60 轮的临床问诊——远超同期对话系统 ≤12 轮的地平线——而以安全对齐的奖励对抗模拟患者训练，把诊断准确率提高了 7.0%，并将漏掉红旗征象的比例削减了约三分之一。

### 跨领域的证据

一项符合 PRISMA 标准的 [[riedmann-reinforcement-learning-education-review-2026|教育中 RL 的系统综述（Riedmann, Schaper 与 Lugrin，2025）]] 综合了 89 项研究（2000–2024），发现 2016 年后在 [[adaptive-learning]] 与 [[intelligent-tutoring|辅导]] 应用上有急剧增长，集中于 STEM（尤其 [[math-education]]）。报告指出，免模型 RL 占主导（n = 72），Q-learning 是最常见的算法，但经典 RL 比 Deep RL 更稳定地有效（61% 对 36% 的论文显示显著优越性）；适应机制分为内容调度（n = 53）与引导相关（n = 36）两类，RL 在引导上更常击败基线；而学习增益——尤其是归一化学习增益——是最有效的奖励来源。该综述还警告，过半研究（n = 54）跳过了统计检验，因此该领域的增长已经跑过了它的方法论严谨度。

### 与知识库的关联

RL 支撑了现代 [[agentic-ai]] 与 [[intelligent-tutoring]] 设计的相当一部分，那里智能体必须优化长期学习而非单个正确回应。它连接到 [[llm-training-and-fine-tuning]]（RL 作为一种训练方法）、[[scaffolding]]（保存富有成效挣扎的奖励设计），以及 [[self-regulated-learning]]（帮助学习者调节自身策略的智能体）。由于奖励设计编码了教育价值观，AIED 中的 RL 研究与 [[pedagogical-safety]] 以及 [[equity-in-ai-education|公平]] 辅导行为的公平考量紧密相连。

## 关联概念

- [[intelligent-tutoring]]
- [[student-experience]]
- [[stem-education]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[active-learning]]
- [[edtech-platform]]
- [[higher-ed]]
- [[learning-analytics]]
- [[open-source]]
- [[pedagogical-safety]]
- [[llm-training-and-fine-tuning]]
- [[ai-technologies]] — 总括：AI 技术与方法（模型、LLM 训练、机器人、RAG、智能体）

## 关联文章

- [[history-aware-student-simulation]]
- [[q-learning-lab-rl-teaching]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[learnlm-improving-gemini-learning]] — LearnLM: RLHF for pedagogical instruction following
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[riedmann-reinforcement-learning-education-review-2026]]
