---
title: 量化研究
created: "2026-08-24T02:05:00-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
translation_of: concepts/quantitative-research
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **量化研究** —— 一族收集与分析 *数值* 数据以描述模式、检验关系、估计因果效应的实证方法。在 [[ai-education|教育 AI]] 中，量化方法量化 AI 工具是否以及如何影响 [[learning-gains|学习成果]]、[[student-engagement|参与]]、[[motivation|动机]] 与 [[self-efficacy|自我效能感]]，并为 AI 使用的心理与行为机制建模。它们提供了 [[qualitative-research|质性方法]] 为深度与情境而让出的广度、精确性与因果推断力。

## 值得思考的问题

- “使用 AI 导师的学生得分更高” —— 在读之前，这是一个关于因果还是相关的断言，什么单一证据能把一个变成另一个？
- 一项横断面调查能检验复杂的的中介模型，却永远不能确立因果。为何两个变量即便互不为因也可能在调查中相关？你能想到一种在教育中真正被这种相关误导的方式吗？
- 量化工具的好坏只取决于它测量什么 —— 而本页指出工具可能测量错误的构念。当你填一份关于“信心”或“参与”的自陈问卷时，它实际可能在捕捉什么，你如何查清？
- 随机对照试验把学习者随机分配到条件以估计因果效应。什么使随机分配如此有力，当“处理”是一个可能有帮助、而某些学生被拒绝使用的 AI 工具时，会出现哪些实践与伦理问题？
- 纵向设计追踪同一批学习者随时间的变化 —— 这对区分 AI 抬高的表现与持久学习至关重要。为何高分数的一次快照无法揭示学习是否真的发生？
- 量化工作提供广度与因果力；质性工作提供深度与意义。在读这份配对之前，你认为仅凭数字最可能在什么地方就一个学习主张误导了你，你会加入什么方法来核验？

## 引言

量化研究横跨描述性设计（测量流行率与模式）、相关/观察性设计（检验变量间关系）与实验及准实验设计（估计因果效应）。统一它们的是把观察系统地化归为数字、以统计分析之，并把 **信度、效度与可推广性** 置于优先 —— 这正是 [[educational-measurement|教育测量]] 的核心关切。

## 主要的量化路径

### 调查与相关研究
横断面调查测量自陈的态度、感知、动机、[[self-efficacy|自我效能感]] 与技术接受，常以回归或结构方程建模（SEM/PLS-SEM）来检验假设的关系与中介。这类方法主导着本知识库的语料，尤其在接受、动机与心理机制问题上。[[acceptance-ai-english-tools-2026|对 AI 辅助英语工具的接受]] 以 SEM 建于 [[technology-acceptance-model|TAM]] 之上；[[tian-genai-learning-adoption-pathways-2026|生成式 AI 采用路径]] 使用 PLS-SEM、fsQCA 与重要性—表现映射；[[teacher-education-ai-literacy-sdt-2026|教师 AI 素养]] 使用奠基于 [[self-determination-theory|自我决定理论]] 的因子验证问卷。
- **优势：** 大样本；广泛、低成本的覆盖；检验复杂的中介模型；对难以观察的态度可行。
- **局限：** 横断面数据不能确立因果；自陈偏倚；方便抽样限制可推广性；中介从协方差推断，而非操纵。这些局限的工具侧处理见 [[self-report-measures|自陈测量]]。

### 实验与准实验研究
实验把学习者随机分配到条件（如 AI 导师 对 人类导师，或 AI 支架 对 无辅助）以估计对结果的因果效应。**随机对照试验（[[rct|RCT]]）** 是内部效度的金标准。[[access-not-enough-ai-tutoring-2026|一项关于人类支持加 AI 辅导的随机田野研究]] 与 [[genai-can-harm-teaching-rct-2026|一项关于教学中生成式 AI 的随机对照试验]] 用分配来隔离因果效应。**准实验** 设计（前/后测、不随机的匹配组）在完整课堂中更可行，但在因果主张上更弱。
 [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin 等人（2025）]] 转而采用被试内交叉设计：每个学生对同一份物理内容见两次，一次在课堂主动学习课中，一次通过课程自带的 AI 导师，每次前后都有测试，于是每个学习者充当自己的对照，人际差异相互抵消。
- **优势：** 最强的因果推断；干净的结果测量；支持效应量估计与效力主张。
- **局限：** 昂贵且缓慢；人为条件降低生态效度；快速变化的 AI 工具很快使实验过时；小样本不足以检出效应；在扣留有帮助的工具上有伦理约束。

### 纵向研究
纵向设计追踪同一批学习者随时间的变化，捕捉单时点测量会错失的变化、成长与持久学习。[[ai-lms-middle-school-longitudinal|一项纵向学习管理系统研究]] 追踪学生一整个学年。纵向设计对区分 AI 抬高的表现与 [[genai-performance-vs-learning|持久学习]] 至关重要。

数据集之间的比较需要一个固定的工作点：一项对合成教育数据的结构检验发现，按各自阈值分析每个数据集会反转一个在共享点上成立的对比，且其代理比较只需合成数据与自身的置换 —— 一个基于置换的零假设而非绝对阈值（[[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake（2026）]]）。

### 计算与心理测量式的量化
量化方法也包括通过工具直接测量构念 —— 这是 [[educational-measurement|教育测量]] 与 [[item-response-theory|项目反应理论]] 的领域。本知识库的 [[jin-glat-genai-literacy-assessment|GLAT]] 是一份经 IRT 验证的 20 题量化工具；跨 [[ai-literacy|AI 素养]]、接受与自我效能感的 [[educational-measurement|测量工具]] 提供了调查与实验研究所依赖的经过验证的量表。

## 量化研究在本知识库中的出现方式

- **效力与因果主张。** 随机对照试验与准实验检验 AI 工具是否改善学习（[[access-not-enough-ai-tutoring-2026]]、[[genai-can-harm-teaching-rct-2026]]、[[adaptive-pretesting-retention]]）。
- **预注册与复制。** [[chatbot-outreach-course-performance-2026|Meyer 等人（2026）]] 在试验前陈述其假设与分析计划，并把随机对照比较汇集于两个学期与两门大规模异步课程之上，于是估计立于一个固定计划与一次复制之上，而非单个样本。
- **机制建模。** SEM/PLS-SEM 检验 AI 采用与学习的中介与调节（[[tian-genai-learning-adoption-pathways-2026]]、[[acceptance-ai-english-tools-2026]]、[[teacher-education-ai-literacy-sdt-2026]]）。
- **区分个体内与个体间效应的面板模型。** [[genai-reliance-human-agency-collaborative-learning-2026|Wu 与 Lu（2026）]] 在三波协作写作数据上估计随机截距交叉滞后面板模型，它把学生间稳定的差异与个体内的时间顺序分离开来 —— 正是这种区分让“依赖加深先于所感知能动性的下降”而非仅仅是与之相伴的读法得以成立。
- **测量与量表开发。** 本知识库记录了量化工具的开发与验证（[[jin-glat-genai-literacy-assessment|GLAT]]、[[educational-measurement|教育测量]]）。
- **表现对持久学习。** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui（2025）]] 把 120 名学生随机分入 AI 辅助或传统学习，并在干预 45 天后以一次意外的 20 题测验测量保持，于是结果是经历延迟后存活下来的东西，而非会话结束时出现的东西。

## 优势与局限

- **优势：** 精确与统计效力；对已界定总体的可推广性；因果推断（配合实验设计）；高效的大样本覆盖；跨研究可累积且可比。
- **局限：** 只捕捉可测量的东西，常遗漏过程、意义与情境（见 [[qualitative-research|质性研究]]）；自陈偏倚；工具可能测量错误的构念（见 [[educational-measurement|测量问题]]）；相关而非因果；相对于 AI 变化可能显得人为且缓慢。

量化与 [[qualitative-research|质性]] 方法互为补充 —— 量化工作提供广度与因果力，质性工作提供深度与意义。[[mixed-methods-research|混合方法设计]] 把二者结合。完整的方法比较以及实验、调查、质性与其他设计之间的对照见 [[research-methods-aied|教育 AI 研究方法]]。

## 关联概念

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## 关联文章

- [[access-not-enough-ai-tutoring-2026]] — 一项关于人类支持加 AI 辅导的随机田野研究
- [[genai-can-harm-teaching-rct-2026]] — 生成式 AI 可能损害教学：一项随机对照试验
- [[acceptance-ai-english-tools-2026]] — 对 AI 辅助英语学习工具的接受
- [[tian-genai-learning-adoption-pathways-2026]] — 生成式 AI 采用路径（PLS-SEM、fsQCA）
- [[teacher-education-ai-literacy-sdt-2026]] — 通过自我决定理论的教师 AI 素养
- [[jin-glat-genai-literacy-assessment]] — GLAT：一份经 IRT 验证的生成式 AI 素养测验
- [[ai-lms-middle-school-longitudinal]] — 一项纵向的 AI 整合学习管理系统研究
- [[adaptive-pretesting-retention]] — 自适应预测试与保持
- [[synthetic-educational-data-structural-fidelity-2026]] — 保真度指标遗漏了什么：对合成教育数据的结构检验
