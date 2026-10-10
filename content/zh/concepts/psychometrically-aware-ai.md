---
title: 具备心理测量意识的 AI
created: "2026-07-28T16:52:03-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
technology: [llm]
assessment: [assessment-validity, automated-assessment, educational-measurement, item-response-theory]
confidence: medium
translation_of: concepts/psychometrically-aware-ai
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

> **具备心理测量意识的 AI**——与测量理论对齐的 AI 评估系统——是由 [[llm-psychometric-calibration-cdp]]、[[llm-item-difficulty-prediction]]、[[automated-assessment|Confidence Aware AI Assessment]] 和 [[item-response-theory]] 推进的标准：经过校准、具有不确定性意识的 AI 评估，保全信度与效度，而不是用原始模型置信度来替代心理测量证据。

## 值得思考的问题

- 一个 AI 给学生的作答打了分，并报告了一个听起来很自信的分数。你凭什么信任这个数字——当你得知该模型从未对照任何测量标准做过校准，你的答案会改变吗？
- 本页警告不要用原始模型置信度替代心理测量证据。回想一次你曾相信一个自信的 AI 输出而结果出错。是什么让它的置信度来得名不副实，而"具有不确定性意识"的输出本来会是什么样子？
- [[research-methods-aied|研究]]发现，在同一份评估工具上，人类与 LLM 的反应结构发生分歧——意味着一个模型可以分数很好，却在测量与考试意图不同的东西。如果你是一位用 AI 评分器的[[teacher-role|教师]]，你如何能察觉这套试题对机器"意味着"的东西与对你的学生不同？
- 题目难度预测用 LLM 估计一道题有多难。在阅读之前想一想："这道题有多难"是关于题的事实，还是关于（人或模型）答题者的事实——这种歧义对用 AI 校准考试意味着什么？
- 校准、信度和效度是含义精确的测量概念。这些概念中哪些你在自己的评估实践中真正想过，又有哪些地方你可能正在依赖一个从未对照它们检验过的 AI 输出？
- 对一位[[administrator]]或开发者：如果你正在考虑的一个 AI 评估工具只报告原始准确率，在用它去评测真实学生之前，你现在会问它的供应商哪些具体问题？

## 引言

随着 AI 系统越来越多地给回答打分、预测难度并提供[[feedback]]，一个关键风险是：它们报告听起来自信的输出，而这些输出并未对照测量原则加以验证。具备心理测量意识的 AI 通过把 AI [[assessment]]奠基于既有心理测量学来解决这个问题——校准输出、量化不确定性，并保全[[assessment-validity]]和[[educational-measurement]]标准，而不是依赖原始准确率或[[self-report-measures|自陈的]]置信度。

### 具备心理测量意识的 AI 如何出现在研究中

- **校准与置信度：**[[automated-assessment|具备置信度意识的评估]]和 [[llm-psychometric-calibration-cdp|LLM 心理测量校准]]确保 AI 报告有意义、具有不确定性意识的分数，而非过度自信的点估计。
- **模型置信度不够用。**在 SciEntsBank 上，语言化、潜在和基于一致性的置信度，都未能把正确的简答与错误的分开；最好的校准来自加入数据集衍生的偶然不确定性——嵌入回答的簇内熵——通过随机森林加 Platt 缩放实现，从而支持选择性自动评分和人工复核（[[cong-confidence-asag-2026|Cong et al.（2026）]]）。
- **置信度标记的是分诊复核，而非接受。**在高利害手写物理评分中，AI 置信度标记在高置信度部分上对应远更低的分数误差，但仍有若干被标记为高置信度、未被标记的部分与官方评分不一致，因此这些标记对排定阅卷人复核的优先级有用，而非授权自动接受（[[ai-grading-handwritten-physics-2026|Pathak et al.（2026）]]）。
- **难度预测：**[[llm-item-difficulty-prediction|题目难度预测]]显示，基于 LLM 的估计必须对照心理测量模型加以验证（见[[item-response-theory]]）。[[razavi-powers-item-difficulty-llm-2026|Razavi 与 Powers（2026）]]提供了一个大规模演示：在 5,170 道按 Rasch IRT 模型校准的 K-5 数学与阅读题上，GPT-4o 的零样本难度评级与真实难度呈中到强的相关（r = 0.83 数学，r = 0.81 阅读），但在各年级之间不均，而基于特征的方法（把 LLM 提取的特征输入树模型）达到高达 r = 0.87 的相关。该研究可解释的[[explainable-ai|特征重要性]]（年级和词数为首要预测因子）及其务实的七步工作流，展示了具备心理测量意识的 AI 如何被落地——而其低年级区间受限的发现和可推广性告诫，凸显了必须把 LLM 估计对照已拟合的心理测量参数来验证。
- **恢复出一条曲线不等于恢复出每一个参数。**一个被微调为[[simulating-students|模拟作答者]]的多模态模型，对留出题的难度估计为 r = 0.85，猜猜参数恢复为 0.48，但区分度只有 0.31 的弱水平——因此一个方法恢复了哪个参数，本身就是发现（[[multimodal-item-parameter-estimation-2026|Ormerod & Kim，2026）]]。
- **测量效度：**该概念连接到[[assessment-validity]]和[[educational-measurement]]，这两个框架定义了何为有效、可信的 AI 评估。
- **潜在结构效度：**[[assessment-latent-structure-human-llm-2026|Strugatski et al.（2026）]]表明，具备心理测量意识的立场还必须验证一份评估在 LLM 中测量的是*同一个潜在构念*、与在人类中一样。因为 LLM 与人类在同一批工具上的反应因子结构发生分歧，即便得分良好的模型也可能并未测量考试声称要测量的构念——这是对任何借用人类效度证据的 AI 评估的一条告诫。
- **一个标签可以测量得比它名字所暗示的更多，或更少。**把 12 个 AI 素养工具的 55 个构念和 272 个题项嵌入后，浮现出 jangle 对（同一标签、不同测量）和 jingle 对（不同标签、措辞近乎相同），信度恢复为 r = 0.49，这是一项采集前的检验，看构念区分能否存活到题项措辞（[[ai-literacy-measurement-conceptual-landscape-llm-2026|He et al.（2026）]]）。
- **潜在能力流水线与标准设定：**[[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al.（2026）]]为国家考试中具备心理测量意识的评分提供了一个具体模板：评分表各题得分从不直接相加，而是输入一个[[item-response-theory|IRT]]模型，其潜在能力估计用 Bookmark 标准设定方法切分为"达标 / 接近达标 / 不足"，且通过要求至少两节"达标"、其余一节至少"接近达标"。作者把该流水线以自动化形式复现（下切线为至少正确回答 7 道评分表题的概率 67%，上切线为至少 10 道），使 AI 与人工题项得分可以对照同一套判定标准比较，而非仅凭原始一致性。

### 关联

具备心理测量意识的 AI 位于[[educational-measurement]]、[[assessment-validity]]、[[item-response-theory]]与[[automated-assessment|Confidence Aware AI Assessment]]的交叉点上。它对[[ai-ed-evaluation]]（AI 评估是否可信）至关重要，并连接到基于[[llm]]的[[automated-assessment]]和[[automated-assessment|Automated Grading]]。它对效度的强调也论及[[ai-education|AIED]]研究的[[limitations-in-aied-research|测量局限]]。

## 关联概念

- [[educational-measurement]]
- [[assessment-validity]]
- [[item-response-theory]]
- [[automated-assessment]]
- [[ai-ed-evaluation]]
- [[llm]]
- [[limitations-in-aied-research]]
- [[ai-education]]

## 关联文章

- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[cong-confidence-asag-2026]] — Confidence-aware automatic short-answer grading
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[competency-based-education-genai-production-2026]] — Competency-based education with GenAI
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — Comparing AI literacy instruments: jangle and jingle pairs across 55 constructs
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
