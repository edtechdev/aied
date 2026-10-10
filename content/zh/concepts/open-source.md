---
title: 开源
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:58:08-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
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

> **开源（Open Source）**——在[[ai-education|教育中的人工智能]]里，使用开放许可的*模型、代码、数据与内容*。开放是本知识库对供应商锁定与[[privacy|数据暴露]]的主要制衡：开放权重模型可以在校园硬件上运行以满足 FERPA、GDPR 与欧盟 AI 法案（EU AI Act）的义务，开放许可的语料可以不经出版方许可就被索引和微调，开放的基准与数据集发布让[[research-methods-aied|研究]]可复现。负担同样真实：基础设施与[[pedagogical-safety|安全]]保障、比资助周期更长命的维护，以及开放性本身并不保证的质量。

## 值得思考的问题

- "开源"常被听成"免费又轻松"。下列四层中——模型、代码、数据还是内容——哪一层实际给你的机构带来最高的采用成本？为什么？
- 开放权重使本地部署成为可能，但总得有人托管、修补并评价这个系统。在最初的项目结束之后，这份工作该由谁负责，又由谁付钱？
- 此处一项研究发现一个 32B 的开放模型在教学知识上胜过一个远大于它的专有系统，而另一项发现所有被测开放模型在科学可视化素养上都低于人类基线。你如何判断哪个基准才是适合你做决策的那个？
- 一份单一开放许可的语料，正是一所学校能在自己课程材料上运行本地助手的关键。随之而来的是什么义务——对原作者、对被索引数据的学生、以及对许可本身？
- 如果[[generative-ai|生成式 AI]]能在半小时之内、花几美元就产出一门课程，那么开放教育资源还剩下什么理由——成本、许可自由、质量保证，还是别的？
- 机构应当把采用开源当作采购决策、基础设施决策，还是教学决策？只当作其中之一会出什么问题？

## 引言

宽泛地说，AI 教育中的"开放"意味着四类人工制品可供检视、复用与修改：**模型权重**、**源代码**、**数据与评价工具**、以及**教育内容**。本知识库的文章在这几层上分布不均，而由此得出的图景比口号更有用：开放买到的是具体的东西——本地控制、可审计性、可复现性与法律清晰度；它付出的是具体的东西——基础设施、专业知识、维护，以及一份从供应商转移到机构身上的质量保证负担。

### 开放模型与开放权重

在学生数据不能离开校园的地方，开放权重最重要。[[lata-ferpa-compliant-local-llm-autograder|LaTA]]是一个即插即用、符合 FERPA 的本地[[llm|大语言模型]]自动评分器，面向高年级[[stem-education|STEM]]课程作业，基于教师编写的评分标准与参考答案构建，每份提交物的边际成本为零。[[programming-its|SCRIPT]]是比勒费尔德大学的一个 Python[[intelligent-tutoring|智能导学系统]]，它刻意**避免商用大语言模型 API**，自托管一个开放权重的 Llama-70B 模型以符合 GDPR 与欧盟 AI 法案（后者把某些 AI 在教育中的用途归为高风险），将 IP 日志与导学系统分离，使用假名用户名，且仅在明确同意下记录击键——作者也把更低的环境影响和更好的可复现性归功于这一选择。

质量已不再是开放自动付出的代价。[[singh-eduqwen-pedagogical-rl-2026|EduQwen]]对一个开放模型家族应用[[reinforcement-learning|强化学习]]（DAPO）与监督微调，挖掘 440 条难负例，生成 40,000 条合成回答并按难度精选为 1,050 条示例，在教学基准上达到 **96.52%**——高于 Gemini-3 Pro 的 90.55%——而参数规模仅 32B 稠密参数。[[aiawe-automated-writing-evaluation|AiAWE]]在[[automated-assessment|自动写作评价]]上得出相似结论：一个经 LoRA 适配的开放权重 Gemma-3-27B-it 在 480 篇托福作文上优于 LLaMA-3.3-70B 与一个微调过的 GPT-3.5 基线，且能跑在消费级服务器上，其醒目的附带发现是：在 LoRA 适配下，参数量*并不是*下游表现的可靠预测因子。反方证据应当得到同等对待：[[mllm-scientific-visualization-literacy|一项对六个多模态大语言模型]]（三个封闭、三个开放）的基准研究发现，所有开源模型在科学[[visualization|可视化]]素养上都低于人类基线，而 Gemini 在若干子集上超过人类均值。开放提高的是控制的上限，而非能力的上限。

OmniEdu 发布的是整条流水线而非仅权重：在 69,999 例混合样本上做能力均衡的监督，把开放 4B/9B/27B K–12 家族的每一档都抬高了——经调优的 4B 模型在 MathTutorBench 脚手架胜率上比其基座提升了 55 分——而知识状态诊断仍是其最弱的能力，为 54.04%（[[omniedu-open-educational-foundation-models-2026|Liang 等，2026]]）。

### 开放的工具、辅导系统与研究基础设施

开放代码最清楚的用例是复现。[[oatutor-open-source-adaptive-tutor-2023|OATutor]]——第一个完全开放的、基于智能导学系统原则构建的自适应辅导系统——把一个 **MIT 许可的代码库**与一个来自 OpenStax 代数教材的 **Creative Commons（CC BY）内容库**配对，外加[[knowledge-tracing|知识追踪]]、A/B 测试与 LTI 支持；其明确的设计目标是：研究者可以跑完一个实验，然后把整个端到端的框架、内容与平台作为一个仓库链接发布出来。[[stanbkt-bayesian-knowledge-tracing|StanBKT]]在方法层做出同样的论证，用一个开放的 Python 包把期望最大化点估计替换为完整的贝叶斯推断（HMC、变分推断、Pathfinder、优化），暴露自适应干预的比较所依赖的不确定性。[[deeptutor]]发布一个完整的[[agentic-ai|智能体式]]辅导框架，配一个"轨迹森林"式学习者记忆——Apache 2.0，且到 2026 年末已是一个完整的学习工作空间而不只是其论文所基准化的那些流水线；[[mooc-to-maic|MAIC]]的课堂生成器 OpenMAIC 以 MIT 许可随评价它的研究一起发布，于是一门课程可以被生成、自托管并检视，而不只是被读到；[[vismatic-secure-sandbox-cs-education|VISMATIC]]发布其容器化沙盒用于面向过程的监控，使其他机构能采纳这套诚信模型而非供应商的版本。开放代码也承载透明的负担：[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]的情感感知辅导提示脚本被公开以供检视与进一步的[[llm-training-and-fine-tuning|教学法训练]]工作。开放基础设施为教育智能体应当做什么设定了参照点：本知识库的[[agentic-ai-education-scoping-review|对 474 项智能体式 AI 研究的范围综述]]把一个快速成长的开源智能体项目用作其"前沿智能体范式"基准，并发现教育系统仍缺乏受治理的工具编排、持久记忆、长程规划与可审计的行动。

### 开放的基准、数据集与方法透明

此处若干贡献是开放的*评价基础设施*而非系统。[[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]]（CDPK + SEND，由真实的智利教师资格考试题目构建）横跨 97 个模型：开放权重的 DeepSeek R1 达到 86.65%，而其对手前十名大多是封闭的推理模型；在 2024 年 4 月到 2025 年 6 月之间，成本—准确率前沿从约 50% 移到约 82%，对应每百万输入 token 0.10 美元——其中开放的 Qwen-3 8B 以 3.5 美分几乎追平了 2024 年 4 月最好的封闭模型，而成本低了 400 倍以上。参数规模降到约 8B 以下时表现急剧下降，这是校园部署的一个实际规模约束。[[astra-multi-agent-tutoring-benchmark-2026|ASTRA]]发布用于对社会智能的多智能体辅导做基于轨迹的评价的数据集、模式与原型（540 名参与者、360 次会话、1,440 个任务片段）。[[iks-instruct-dataset-indian-knowledge|IKS-Instruct]]展示了开放数据的文化理由：24,795 对指令—回答，横跨七种语言与 41 种取自吠陀与古典传统的教学法技术，对齐 CBSE[[curriculum-design|课程]]，使一个紧凑的 7B 模型接近一个大得多的通用参考模型（裁判中位分 6.39 对 6.54），而部署成本只是其一小部分。学生自撰的[[benchmark|基准]]是通往开放的另一条路：[[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]]从 230 份学生提交的候选中精选出 80 个长程学术任务（横跨 25 个以上专业领域，16 个需要 CUDA GPU，在隔离的 Docker 沙盒中运行），把一个开放的智能体生态延伸到学术级评价。[[aied-carbon-footprint-reporting|Eimler 等（2026）]]论证开放也是一种[[sustainability|环境]]义务：在评审全部 AIED 2025 论文时，他们发现了一种"采用大语言模型却未披露"的模式，并回应以一个开源测量方法学——软件工具加一个即使在参数量未知时也能估算计算开销的公式。

### 开放教育资源与开放内容

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen 等（2026）]]是本知识库中唯一一篇**开放教育资源是核心对象**而非顺带一提的文章。他们在消费级硬件（一张 12 GB 显存的 RTX 3060）上，从 82 份 OER 文档为[[cs-education|计算机科学教育]]构建了一个本地 AI 知识库助手，结合结构化抽取、[[rag|检索增强生成]]与 NF4 4 位量化感知微调。微调在检索之外增添了真实价值（Qwen-7B 69.8%，+3.2 个百分点，p = 0.031；DeepSeek-MoE 78.6%，+12.0 个百分点，p < 0.001，其中多跳推理达 82.3%）；量化感知调优把 4 位精度差距控制在 1.7 与 1.2 个百分点，同时把显存削减约 38%、每查询能耗降到 1.8 mWh（比基线低 43.8%）；而量化抬高的[[hallucination-risk|幻觉]]经微调得到部分挽回（DeepSeek-MoE 10.4% → 8.1%），测量方式是针对检索到的 OER 片段的两阶段 NLI 程序。其分析要点可推广：一份开放许可的语料可以不经出版方许可就被索引、适配与服务，而把一个助手锚定在检索到的 OER 上会给出一条可核查的来源链——这正是专有教材语料无法提供的东西。

内容的开放与模型的开放在别处也是互补的。OATutor 把 CC BY 的 OpenStax 教材编成一个代码为 MIT 许可的系统，因此代码与内容的许可条款必须靠设计保持兼容。[[egai-power-systems-education|一个开放的、可执行的电力系统 AI 模块库]]用可在本地或 Colab 运行的 Jupyter 笔记本降低入门门槛，并通过一门 IEEE 在线课程交付。一个基于项目的[[engineering-education|机械工程]]课程把其教学大纲、数据与代码发布在开放获取的仓库中，使其他机构可以采纳（[[mechanical-engineering-ai-curriculum-2026]]）。与 OER 相邻，开放的*课程*交付是经济学变化最快的地方：MAIC 报告，借助大语言模型驱动的多智能体生成，MOOC 的制作从每门课程约 25,000 美元、60 小时，跌到不到 2 美元、30 分钟。如果内容生产近乎免费，OER 的论证就从生产成本转向许可自由、可验证性与质量保证——这与 OER 倡导建立其上的那个命题已不相同。

### 收益与负担

- **收益。** 数据主权与合规（[[privacy]]、[[regulation]]）经由本地托管；成本控制，因为本地推理没有按查询计费、开放模型以远低的价格接近专有质量（[[singh-eduqwen-pedagogical-rl-2026]]）；可复现性，因为框架、提示、内容与数据可以随论文一并交付（[[oatutor-open-source-adaptive-tutor-2023]]、[[astra-multi-agent-tutoring-benchmark-2026]]）；在[[governance|机构治理]]下的可审计性与安全审查；以及为特定[[pedagogy|教学法]]或特定社群的知识库做微调的能力（[[iks-instruct-dataset-indian-knowledge]]）。
- **负担。** 本地托管需要许多机构并不具备的硬件与专业知识；质量与[[pedagogical-safety|安全]]并非开箱即保——开放模型可能在特定素养上落后于人类基线（[[mllm-scientific-visualization-literacy]]），量化会抬高幻觉率除非加以缓解（[[shen-sustainable-ai-knowledge-base-cs-education-2026]]）；发布之后必须有人维护这个系统（[[programming-its]]记录了一个小型的博士生团队、进行中的安全暴露与沉重的合规负担）；而开放许可是一种许可，不是一个能用的产品——让已发布的系统保持可用的维护，落到当初构建它的[[educational-technology-developers]]身上，而他们的资金与激励决定了当资助结束时，机构继承的是一个可分叉的仓库、一个维护中的产品，还是两者皆无。

### 把开放落到实处

- **对教师与机构：** 采用一个系统之前，检查*内容*的许可如同检查代码——MIT 代码搭 CC BY 教材是可复用的，但宽松的许可并不保证辅导路径、题库或翻译存在。当学生数据依法不能离开校园时优先选开放模型（[[lata-ferpa-compliant-local-llm-autograder]]、[[programming-its]]），但要在*你的*任务上基准化该模型，而非信任通用排行榜（[[cdpk-pedagogy-benchmark-llms]]）。为试点之后有人运行与评价这个系统做预算。
- **对开发者与研究者：** 交付整个东西——OATutor 的端到端发布（代码、内容、实验框架）是本文献不断奖励的可复现性标准。把提示与抽取模式与权重一起发布（[[programming-its]]、[[kar-mathbuddy-affective-math-tutoring-2025]]）。报告算力与碳排放（[[aied-carbon-footprint-reporting]]）。把助手锚定在开放许可的语料上，使来源可核查、适配合法（[[shen-sustainable-ai-knowledge-base-cs-education-2026]]）。如果准确率与能耗都重要，用量化感知微调而非单纯量化，并保持代码与内容许可兼容。

## 关联概念

- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## 关联文章

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 在消费级硬件上的本地 OER AI 知识库助手（Shen et al. 2026）
- [[oatutor-open-source-adaptive-tutor-2023]] — 配 CC BY OpenStax 内容库的 MIT 许可自适应辅导系统（Pardos et al. 2023）
- [[singh-eduqwen-pedagogical-rl-2026]] — 优于远大得多的专有系统的开放 32B 教学模型（Singh et al. 2026）
- [[lata-ferpa-compliant-local-llm-autograder]] — 即插即用、符合 FERPA 的本地大语言模型自动评分器
- [[programming-its]] — 为符合 GDPR／欧盟 AI 法案而自托管的开放权重大语言模型与 Python 智能导学系统
- [[aiawe-automated-writing-evaluation]] — 用于自动写作评价的 LoRA 适配开放权重模型
- [[stanbkt-bayesian-knowledge-tracing]] — 完整贝叶斯知识追踪的开放 Python 包
- [[deeptutor]] — 带学习者记忆的完全开源智能体式辅导框架
- [[vismatic-secure-sandbox-cs-education]] — 面向过程评估的开放容器化沙盒
- [[kar-mathbuddy-affective-math-tutoring-2025]] — 代码库开放的感知情感的数学辅导系统
- [[cdpk-pedagogy-benchmark-llms]] — 横跨 97 个模型的开放教学基准与成本—准确率前沿
- [[astra-multi-agent-tutoring-benchmark-2026]] — 面向基于轨迹的多智能体辅导评价的开放数据集与原型
- [[mllm-scientific-visualization-literacy]] — 开放模型在可视化素养上低于人类基线
- [[iks-instruct-dataset-indian-knowledge]] — 用于文化扎根式教学的开放多语言数据集
- [[aied-carbon-footprint-reporting]] — 报告大语言模型环境成本的开源方法
- [[egai-power-systems-education]] — 面向工程 AI 的开放可执行模块库
- [[mechanical-engineering-ai-curriculum-2026]] — 公开可得的课程、数据与代码
- [[mooc-to-maic]] — 大语言模型驱动的课程生成与课程生产经济学的变化
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
