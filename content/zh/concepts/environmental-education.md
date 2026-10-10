---
title: 环境教育
created: "2026-09-20T12:40:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

## 值得思考的问题

- "AI 与环境教育"可以指两件非常不同的事：用 AI 来教*关于*气候与可持续性的内容，以及减少*使用 AI* 于课堂的环境成本。在你的机构里你听到的是哪一个——而哪一个有预算项目挂着？
- 如果一所大学在每个学生笔记本上用耗能巨大的 [[llm|大语言模型]] 来教气候科学，它是推进了环境教育还是削弱了它？要让答案是"两者皆有"，需要什么条件？
- [[ai-assisted-inquiry-ssi-climate|一项实验]] 发现 AI 辅助的探究比单纯探究更能改善气候决策，增益集中在最弱的步骤上。你会在自己的课堂里信任一个 AI 支持的气候单元吗，而你首先需要看到什么？
- 几乎没有 [[ai-education|AIED]] 论文报告它们的算力或碳足迹。未报告的 [[sustainability|可持续性]]影响，是一个研究问题、一个采购问题、一个教学问题，还是都不是？

## 引言

**环境教育** 发展学习者对生态系统、气候以及人与环境相互依存的理解，连同据此行动的性情与能力——在制度上常被框定为可持续发展教育（ESD）或"绿色教育"。在教育技术的语境下，这个词承载着语料库经常碰到却并不总是说出的一个张力：**AI 作为环境教育的工具**（用生成式工具教气候与可持续性内容）与 **AI 自身的环境足迹**（机构部署的模型所耗的碳、水与能源）。这是有着不同证据、不同行动者、不同补救办法的不同问题；把它们混为一谈——像几篇论文和大多数战略文件所做的那样——使得无法说清谁为什么负责。（[[daniel-ai-sustainability-scoping-review-2026]]）（[[aied-carbon-footprint-reporting]]）

## 被叫作"AI 环境教育"的两件事

- **AI 用于环境教育** —— 用 AI 教环境内容、建立可持续意识，或支持绿色技能。这一半有框架、一项 [[teacher-role|教师]]调查研究，和一项课堂实验。
- **教育中 AI 的足迹** —— 无论什么学科，用于教学的模型与基础设施的排放和资源使用。这一半有一篇关于报告实践的综述、一个工程 [[benchmark|基准]]，和一项小型的界面研究——而没有任何关于专门用于环境教育的 AI 之足迹。

第三条更弱的线索，把"可持续学习"当作一种 [[pedagogy|教学法]]属性而非环境属性：持续并能迁移的学习，而不是被 [[cognitive-offloading|认知外包]]短接的学习。它与可持续性共享词汇，但不是一个环境主张。（[[zhu-e3-hot-embodied-intelligence-sustainable-learning]]）

## 用 AI 教环境与气候议题

最强的证据是一项把气候变化用作社会性科学议题的三组准实验。在结构化的 [[inquiry-based-learning|探究]]任务中与 AI 伙伴合作的学生，在决策量规上胜过纯探究同伴（d = 0.69）与传统教学（d = 1.88），增益最大的步骤是学生进入时最弱的步骤——监测与适应性管理，以及生成替代方案。AI 条件是探究的*附加*而非替代，而数据收集与分析完全没有把各组分开，这表明 AI 支持的是关于权衡的推理，而非证据收集。（[[ai-assisted-inquiry-ssi-climate]]）

在 [[curriculum-design|课程]]层面，AI-SEE 框架把 AI 整合进整个 [[engineering-education|工程课程]]，基于四个支柱（智能驱动、绿色赋能、责任引领、实践融合），而不是把它当作一个附加的可持续性模块；一项 144 名学生的试点报告了在个人、学术、职业与社会层面上的可持续性意识与行为 [[student-engagement|参与]]增益。作者提醒，这是来自一个中国交通运输项目的单机构、自报、单时间点的访谈证据。（[[liu-ai-sustainable-engineering-education-2026]]）

两项较小的研究覆盖设计一侧。在可持续发展教学法约束下的 AI 辅助 [[learning-design|教学设计]]，以一个大到令人难以置信的效应改善了职前教师的教案（d = 2.80，28 个团队，无对照组）。另有一项对 122 名在职教师的结构方程研究发现，在科学与绿色能源任务上的*实践性* AI 使用，加上参与开发与 ESD 对齐的材料，能预测 AI 整合能力，而抽象的 AI 知识与态度不能——尽管一份二分式 [[self-report-measures|问卷]]与一个薄弱的知识构念限制了它能走多远。（[[talebzadeh-ai-green-education-2026]]）（[[riandi-teacher-ai-green-energy-education-2026]]）

## 教育中 AI 的环境足迹

这一半是语料库最薄的地方。一篇对 AIED 2025 论文集全部 396 篇论文的综述发现"采用 LLM 而不披露"：多数项目使用 [[llm|LLM]]，85 篇报告了任何计算成本，只有 57 篇提及环境影响——而且使用了互不兼容的指标，使这个领域无法汇总自己的证据。作者论证，不报告环境成本本身就是一项 [[ethics|伦理]]关切，并提出一种 [[open-source|开源]]方法（CodeCarbon，加上对专有模型的二参数 FLOPs 估计）。（[[aied-carbon-footprint-reporting]]）

在学习者一侧，一个在使用中暴露延迟—碳权衡的生态反馈界面，在一门计算伦理课上由 89 名计算机科学本科生研究过：在约 45% 的低延迟交互中学生选择了更低碳的模式，但在高延迟时不到 5%，而可持续性意识显著提高了这种选择。样本很小且技术素养异常高，但它是语料库中唯一直接表明足迹信息确实能推动学习者的证据——并且它提示约束性的因素是耐心，而非价值观。（[[llm-environmental-impact-student-usage-2026]]）

缓解证据来自一个在单张消费级 GPU（12 GB VRAM）上运行、内容为开放许可的本地部署 [[cs-education|CS]] 知识库助手：每次查询最好为 1.8 mWh——一个 30 名学生的班级各提交十次查询约为 0.54 Wh——量化感知微调同时控制住了仅靠压缩所导致的准确率损失与 [[hallucination-risk|幻觉]]上升。它是一个工程基准而非学习研究，但它表明足迹问题有设计杠杆（落地、量化、部署位置），而不只有使用纪律的杠杆。（[[shen-sustainable-ai-knowledge-base-cs-education-2026]]）

## 绿色技能、可持续意识与教师能力

综合起来，这些研究描述了一份交付不均的绿色技能议程：可持续性意识作为课程结果、与 ESD 对齐的材料开发作为教师能力的机制、气候决策作为可测量的推理技能。价值批判的线索提供了保留：一项概念分析论证，AI 对可持续教育的贡献是**有条件的、由治理中介的**，只有当采用服从于明确的教育价值和以人为本的目的时才支持可持续性——这把 [[governance|治理]]与 [[critical-pedagogy|批判教学法]]放进了环境教育之内，而不是旁边。（[[alsuhaymi-sustainable-education-ai-digitalization-2026]]）

组织这批文献的 [[meta-analysis-systematic-review|范围综述]]，提供了领域自己对规模的裁决：应用聚集在能源管理、气候监测与绿色校园项目周围，但规模有限，常常缺少伦理或环境指引，而大量研究仍是概念性的或小规模试点。覆盖偏向北美与欧洲，除少数南非研究外几乎没有来自 [[global-south|全球南方]] 的。（[[daniel-ai-sustainability-scoping-review-2026]]）

## 证据尚未确立的部分

- **没有专门针对环境教育的足迹证据。** 碳与能源数字来自一般的 LLM 研究和一个 CS 语境基准；没有任何东西测量一个 AI 支持的气候或 ESD 课程的环境成本。
- **没有足迹干预的学习增益证据。** 生态反馈在一个偏实验室的研究里改变了选择；没有任何东西表明它改变了习惯、评估结果或采购。
- **课程框架没有因果证据。** AI-SEE 是一个单站点自报案例，E3-HOT 是一个没有实施研究的设计蓝图；SDP 课程设计的结果没有对照组。
- **没有大规模或跨情境的证据。** 这里每项实证结果都是单站点的，教师研究则依赖小的目的性样本与薄弱的工具。
- **两半很少被一起研究**，尽管两者都作用于同一间课堂。

## 对教育中 AI 的启示

1. **说明你在回答哪个问题。** 把"可持续性"同时用于 AI 教气候与 AI 自身足迹的战略，隐藏了 [[daniel-ai-sustainability-scoping-review-2026|Daniel 等人（2026）]] 指出的问责缺口；把两套议程分开，各有各的负责人。
2. **把足迹披露当作领域基础设施。** 在准确性旁边报告算力与碳——即便测量不完美也给出可持续性声明——是走出指标互不兼容困境的唯一出路。
3. **为不耐烦的学习者设计。** 如果更低碳的选项以可感知的延迟为代价，多数学生不会选它：保持延迟低、暴露控制项、用具体的产出结果而非抽象的碳单位来描述影响。
4. **在教学法允许处选择更轻的部署。** 把模型锚定在经许可的本地语料上并用量化加微调，以一小部分能耗取得了可用的准确率——在扩展云端推理之前先复用这个模式。
5. **通过材料开发而非意识宣传来建设教师能力**，并填补 [[global-south|全球南方]]的缺口，而不是从北美与欧洲语境进口证据。

## 关联概念

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## 关联文章

- [[daniel-ai-sustainability-scoping-review-2026]] — 区分"AI 为可持续性"与"可持续的 AI"；全球南方缺口
- [[ai-assisted-inquiry-ssi-climate]] — AI 辅助气候探究，比单纯探究高 d = 0.69
- [[aied-carbon-footprint-reporting]] — AIED 2025 披露综述，外加一种开源足迹方法
- [[llm-environmental-impact-student-usage-2026]] — 89 名 CS 学生的延迟—碳权衡生态反馈
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 本地部署量化助手，每次查询 1.8 mWh
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE：工程教育中的可持续性意识
- [[riandi-teacher-ai-green-energy-education-2026]] — 实践性 AI 使用与 ESD 材料开发预测整合能力
- [[talebzadeh-ai-green-education-2026]] — 可持续发展教学法约束下的 AI 辅助设计
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — AI 对可持续教育的贡献作为由治理中介之物
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — "可持续学习"作为持久的认知主体性，而非环境主张
