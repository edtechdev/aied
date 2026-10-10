---
title: AI 素养
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [academic-integrity, ai-education, ai-literacy, educational-development]
technology: [generative-ai, llm]
audience: [faculty developers, instructors, learners]
level: [higher ed, k 12]
connected_faqs: [incorporating-ai-literacy, ai-literacy-evidence, faculty-ai-competencies, addressing-common-misconceptions-ai-education, ai-guidance-children-under-13, verify-ai-output]
confidence: high
connected_resources: [education-agent-skills, edugems, mglearn, onmicro-ai, playlab, pressing-prompts, student-guide-to-ai, vibes-diy]
translation_of: concepts/ai-literacy
source_updated: "2026-10-08T10:20:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **AI 素养**（AI literacy）—— 在教育情境中理解、评估并有效使用 AI [[ai-technologies|技术]] 所需的知识、技能与批判性心智倾向。AI 素养涵盖对 AI 工作原理的基础理解、使用 AI 工具的实践能力、对 AI 输出的批判性 [[ai-ed-evaluation|评估]]，以及对 AI 社会意涵的伦理意识。

## 值得思考的问题

- 成为“AI 素养者”（AI literate）意味着什么？是知道如何使用工具、理解它们如何工作，还是能够批判性地评估其输出 —— 而对你自己的目标而言，哪一样最重要？
- 自陈的 AI 素养与实测表现严重脱节 —— 教师高估自身技能约 40%。你对自己的 AI 技能有多大信心，你会信任什么证据来真正检验这种信心？
- AI 素养被描述为一种元认知的社会实践，而不是技能清单。由于大语言模型是概率性的且不透明的，当你无法看进模型内部时，“批判性评估”输出意味着什么？
- 学术情境所需的批判性使用素养与就业所需的工作流整合素养之间存在张力 —— 教育者和雇主看重不同的技能。你的情境实际在教哪一种 AI 素养？
- 仅有技术性的 AI 素养培训，若缺乏自我效能感与自我调节的支持，实际上可能增加对 AI 的依赖。学习使用 AI 怎么会让你更依赖它、而非更能干？
- AI 素养同时也是一种识别技能：察觉 AI 何时因为谄媚而附和你、何时因为你才是对的。你可曾逮到过 AI 只是在说你爱听的话？

## 引言

随着 [[generative-ai|生成式 AI]] 深度嵌入教育，AI 素养已迅速成为学习者、教育者与机构的核心素养。与一般数字素养不同，AI 素养要求理解会产生幻觉、表现出 [[bias-mitigation|偏见]]、并把 [[agency|能动性]] 从人转移到机器的概率性系统 —— 这使 [[critical-thinking|批判性思维]] 与 [[cognitive-offloading|过度依赖]] 成为该构念的核心。

### AI 素养的维度

本知识库中该领域的 [[research-methods-aied|研究]] 横跨四个相互关联的维度：

框架日益细致地追踪这些维度在实践中如何被 enact（落地施行）：[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai & Chan（2026）]] 展示了研究生研究者在整个研究流程中使用 [[generative-ai|生成式 AI]] 时如何 enact 全部四个维度，并从中搭建出研究专用的负责任使用指引；[[san-orhan-karsak-ai-cognition-micro-credentials-2026|Şan & Orhan Karsak（2026）]] 则用词语联想映射表明，土耳其本科生的 AI 认知以工具性的“黑箱”为主，伦理—治理类概念在结构上被孤立（τ=−0.819）—— 这说明证书设计必须有意识地弥合体验性工具使用与伦理框架。

**需求取决于学生与系统在共同做什么。** 素养框架通常描述一套通用的能力，但一项由生成式 AI 支持的活动实际要求什么，取决于其中的认知工作如何分配。[[sun-student-genai-entanglement-literacy-demands-2026|Sun、Dohn 与 Rehm（2026）]] 将 102 项高等教育实证研究对照 Strobel 等人的生成式 AI 应用分类法进行归类，发现助手型（Assistant）与使能型（Enabler）纠缠各占语料的 42.16%，而生成型（Generator）、重构型（Reimaginator）与综合型（Synthesizer）合计不足五分之一 —— 他们将这种倾斜归因于机构正当性而非模型能力，因为同样的模型支持全部五类。借 Dohn 的三个情境层级（领域内部、活动内部、活动框架）逐类阅读，可以看到助手型工作的需求彼此聚合，而边缘类型的需求则相互碎裂：活动对学生的要求与机构承认的正当能力之间发生背离。他们的结论把素养彻底移离工具熟练度：生成式 AI 素养是识别给定纠缠中认知工作与责任如何分配、并在其中恰当行动的能力。

**基础知识：** 理解 [[llm|大语言模型]]（LLM）是什么、它们与基于规则的系统有何不同，以及其根本局限。这包括对模型能力、训练数据偏见的认识，以及任务专用 AI 与通用模型之间的区别。[[prompt-engineering|提示工程]] 领域的研究考察了理解提示机制如何影响 AI 的有效使用。

**实践能力：** 有效使用 AI 工具的能力 —— 从 [[prompt-engineering|提示工程]] 到解读输出。对 [[genai-usage-design-students-survey|学生生成式 AI 使用模式]] 的研究揭示，仅有工具访问并不能产生能力；结构化的练习与 [[scaffolding|支架]] 必不可少。[[gaide-vibe-coding-k12-teachers|vibe coding 框架]] 展示了 [[k-12|K-12 教师]] 如何通过有指导的工具创建来发展实践性 AI 素养。[[miles-prompt-literacy-human-centered-genai-framework-2026|Miles、Haber-Curran 与 Arar（2026）]] 论证这一维度含有一块优化类培训遗漏的部分：提示素养（prompt literacy）有别于提示工程，它把提示视为一种修辞与伦理行为，因此只针对输出效果调优的教学会让大语言模型使用的伦理与认识论维度 untouched（未被触及）。

**批判性评估：** 评估 AI 输出的准确性、偏见与恰当性的能力。[[ai-literacy-assessment-misalignment|素养评估方面的研究]] 显示自陈 AI 素养与基于表现的 AI 素养之间存在 40% 的差距 —— 人们持续高估自己的评估技能。这种背离是本知识库中 [[self-report-measures|自陈测量]] 未能追踪其所命名能力的最清楚案例。这与 [[cognitive-offloading|过度依赖]] 研究相关：无批判地 [[trust|信任]] AI 的学生学得更少。近期的概念性工作把评估推向 *验证*：[[pearls-epistemic-verification-2026|PEARLS 框架]]（Wang）把 AI 输出当作一条 provisional knowledge claim（临时性知识主张），其正当性须沿六个维度组装与检视（过程、证据、获取、可复现性、正当性、来源），并提出 **验证驱动学习** 作为学习者在核查 AI 主张过程中建立专门知识的机制。与之互补，[[student-centered-genai-responsible-framework-2026|以学生为中心的负责任使用框架]]（Alsammani）在“学习与成长”“伦理与诚信”“觉察与安全”三大支柱下提供十条面向学生的指引，把 [[metacognition|元认知]] 提示外置于决策发生的那一刻。面向 [[k-12|中学]] 学习者，[[aarc-ai-research-competency-2026|AI 辅助研究能力（AARC）框架]]（Beau、Flaquière & Lazar 2026）将其奠基于德性认识论与 AI 直觉，把研究素养定义为在不交出 [[agency|署名]]、判断、验证与责任的前提下借助 AI 开展探究 —— 落地形态为一份分析性量规和一套“验证—引用—反思”的承诺例行程序。在 [[assessment|评估]] 一端，[[human-capability-test-learning-outcomes-ai-2026|Saleh（2026）]] 提出一项 *人类能力测试*，把评估变成一条设计原则：问学生必须独立演示什么、什么可以通过 AI 增强得到加强、什么必须由学生验证、辩护并承担责任。

学科性验证把同一标准提得更高。[[vega-baudrit-genai-university-chemistry-education-review-2026|Vega-Baudrit 与 Rivera Alvarez（2026）]] 论证，在大学 [[chemistry-education|化学]] 中，核心的 AI 素养需求是在 Johnstone 的宏观、亚微观与符号三种域之间做表征转换，因为一个输出可以在某一域中 locally persuasive（局部有说服力），却在另一域中与电荷平衡、某种机理或安全限值相矛盾。他们的补救方案是以验证为中心的整合：把验证变成一项被评估的活动，保留提示日志与修改历史作为推理痕迹，并把提示视为一种明确规定约束、假设与充分性判据的认识论行为，由学生找出一个错误假设或论证拒绝某条生成答案的理由。

**伦理与机构意识：** 理解 AI 更广泛的意涵 —— 从 [[academic-integrity|学术诚信]] 到 [[equity-in-ai-education|AI 教育中的公平]] 再到 [[privacy|隐私]]。机构层面的 AI 素养涉及政策制定、[[educational-development|教育发展]] 与 [[governance|治理框架]] —— 机构 AI 素养既是教学问题，也是 [[educational-policy-ai|政策]] 问题。[[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI 框架]] 把机构 AI 素养框定为一项社会技术对齐挑战，而非仅仅是个体培训。

- **AI 素养作为促进可持续发展的治理能力。** [[ai-literacy-sdg-governance-framework-2026|Islam、Morshed 与 Islam（2026）]] 把 AI 素养重新概念化为一种面向治理的能力，而非纯粹的教育或技术技能，并将其联结到全部十七项联合国可持续发展目标。他们的六级 **AIRE 分类法**（识别 → 理解 → 应用 → 分析 → 整合 → 治理）在布鲁姆层级之上增补伦理综合与战略远见，把高阶能力（分析—治理）定位为从基础素养通向机构与政策层治理的路径 —— 一个把素养当作横贯性认知与伦理桥梁的“第 18 项 SDG”启发式。一项对 300 名本国从业者的调查发现了强烈的技术觉察，但伦理与治理准备不足，且 **伦理推理与反思性思维是可持续、可信 AI 使用最强的预测因子**，治理素养则是 AI—SDG 关联觉察最强的预测因子（β = 0.64）。这在经验上为本知识库对批判性使用素养的强调提供了依据，并把 AI 素养直接系于 [[sustainability|可持续性]] 与 [[educational-policy-ai|政策]] 整合。
**框架供给本身如今成了问题。** [[ai-competence-framework-landscape-2026|Fitsilis（2026）]] 比较了 16 个获机构背书的 AI 能力框架（面向教育与劳动力发展），发现共享的核心只有十个能力领域，但结构、进阶与实施指引差异极大 —— 实际的困难是在它们之间做选择，而不是供给不足。

### AI 素养如何发展

研究指出，[[collaborative-learning|协作性]]与 [[active-learning|主动性]]的方法最为有效。[[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] 把 AI 素养定位为超出应用技能：在他们的 AI×Ed 框架中，学习者是 AI 的一个独立终端用户（经由 AI 素养与 AI 教育接入），并论证应重启 AI 素养工作，鼓励对学习本身进行反思 —— 把素养当作回到“AI 作为人类智能的类比”这一关于人如何学习的研究 strand 的路径，而这一 strand 已被该领域大部弃置。[[icap-framework|ICAP 框架]]（交互式 → 建构式 → 主动式 → 被动式）提供了一个有用的认知参与分类法：当学生共同建构知识而非被动接收信息时，AI 素养学得最好。设计者应选择契合学习目标的模式，并尽可能偏向更深的（建构式与交互式）模式。实践活动 —— 设计提示、分组评估输出、辩论 AI [[ethics|伦理]] —— 的效果优于讲座。

**[[writing-education|写作]] 从亲身经验出发 —— 但概念深度需要支架。** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss 等人（2026）]] 发现，青少年把抽象的 AI [[ethics|伦理]] 原则锚定于他们日常遇到的系统 —— 电子“出门条”、受学校管控的笔记本电脑、查重检测器 —— 其中一个小组解释说，学校里的 AI“对全组成员都是个人的事”，18 份单元末调查回应中有 15 份报告说制作视频改变了他们对 AI 伦理的理解。作者对限度直言不讳：作文本身并不保证概念扎根 —— “知情同意”被译成了“我们得批准”，某些术语（如“故障保险”）从未被解释，这促使他们在后续迭代中规划更深入的概念工作。[[creativity|创造性]] 产出在伴随明确的概念 [[scaffolding|支架]] 时最能发展 AI 素养，而不能假定它会自行从制作中浮现。

**AI 直觉作为素养的体验性补充。** 一个反复出现的缺口是：K-12 框架假设学习者经由陈述性、基于规则的知识接近 AI，而实践中他们先发展出对 AI 如何回应的一种实践“手感” —— 试验提示、观察行为、调整策略 —— 然后才谈得上正式原则。[[ai-intuition-ai-literacy-k12-2026|Beau & Lazar（2026）]] 将其形式化为 **AI 直觉**：一种体验性、归纳性、常为默会的理解，经由与 AI 系统的迭代互动而发展，支持不确定性下的情境敏感判断。他们的 **双重框架** 把 AI 素养（结构化、大部分静态的能力）与 AI 直觉（动态学习过程）并置，将两者映射到标准维度之上 —— 理解概念、使用工具、批判性评估、伦理应用、反思 —— 使学习者把概念清晰度与 [[guardrails|护栏]]（素养）同“信任但验证”以及知道何时该抽身的实践智慧（直觉）结合起来。由于直觉培育对 AI 的“专家观察”（例如压力测试提示以找出模型失效之处），作者论证它是抵御 [[cognitive-offloading|过度依赖]] 与批判性思维侵蚀的一道保障；它区别于 [[prompt-engineering|提示工程]]（后者优化输出）之处，在于把 *认识论判断* 放在前台。这把素养联结到 [[experiential-learning|体验式学习]]、[[constructivist|建构主义]] 与发展上适切的课堂实践，并把教师准备引向 facilitator 归纳式探索，而非只传递概念。

**动机是前提，不只是结果。** [[liang-ai-learning-motivation-sdt-2026|Liang 等人（2026）]] 在一项为期一年的 AI 课程中对 2,086 名中学生进行追踪，发现转入或维持在 *自我决定* [[motivation|动机]] 画像（高自主、胜任与关系需求的满足）的学生 **AI 素养增益最大**。AI 素养经由持续投入而发展，而这种投入本身受动机与心理需求支持所塑造 —— 因此有效的 AI 素养教学应关照学习者的动机，而不只是其技能。

**教学侧重与任务开放性经由不同需求抵达表现。** [[yu-designing-ai-literacy-self-determination-2026|Yu、Lin 与 Chen（2026）]] 将 320 名本科生随机分入四组，在一项用客观量规评分（ICC = 0.89）的 AIGC 图像生成任务上做 2 x 2 实验，发现思维型教学（涵盖模型局限、批判性评估与伦理）优于技能型提示教学（M = 9.21 对 7.69，F(1, 316) = 50.79，p < 0.001，partial eta squared = 0.138），在开放式任务上的优势更大（10.10 对 8.00）。结构模型显示这两项设计选择走不同的路径：教学经由自主（beta = 0.035）与胜任（beta = 0.079）间接起作用，而任务开放性主要经由自主（beta = 0.029）起作用；胜任是表现最强的预测因子（beta = 0.358），关系则无独立效应。因此，教学包含什么比学习者是否得到提示练习更重要，而且在任务开放时最关键。

此后，AI 素养周边的变量被更广泛地测绘。[[ai-literacy-correlates-affective-behavioral-cognitive-2025|2025 年对 AI 素养相关因素的系统综述]] 综合了 14 个国家的 31 项研究（N = 12,071），发现最一致的关联位于情感与行为带：AI 自我效能感、积极的 AI 态度、动机与数字能力都与 AI 素养同向变动，而 AI 焦虑与消极态度则反向变动。人口学变量几乎不起作用，年龄与社会经济地位相关微弱或毫不相关。该综述的告诫在于工具：产生强相关的那些自评研究，在 AI 素养被实测而非自评时，相关性弱得多。

一项对中国某研究型大学 502 名教师的问卷结构方程研究发现，AI 素养是 AI 幸福感最强的预测因子（β = 0.713），而微小的技术自我效能感（[[self-efficacy]]）路径（β = 0.082）相形见绌，社会与组织支持仅间接抵达幸福感（[[faculty-ai-well-being-social-supports-2026|Liu 等人（2026）]]）。

一个表面上的负向关联在控制后反转：在 303 名香港本科生中，技术焦虑与 AI 素养负相关（r = −0.14），却在联合模型中预测 β = 0.15，且该效应局限于批判性评估与伦理能力（[[ai-literacy-determinants-university-students-2026|Chow 等人（2026）]]）。

[[hu-psychological-predictors-continued-chatgpt-use-2026|Hu（2026）]] 补充了一份关于 AI 素养预测什么（而非什么预测它）的有序说明。对 450 名已在使用 ChatGPT 的中国大陆大学生进行调查，该研究发现 AI 素养与持续使用直接相关（beta = 0.16, p = 0.002），并沿一条经 [[trust|信任]] 与学业 [[self-efficacy|自我效能感]] 的串行路径间接相关（间接效应 = 0.07，95% CI [0.04, 0.10]），其中素养到信任的联结是全模型中最大的关联（beta = 0.50）。[[anxiety-and-stress|AI 焦虑]] 调节了第一个联结（交互 beta = -0.25，简单斜率随焦虑区间从 0.76 降至 0.25），因此这条链条对更焦虑的学生变得更细，不能假定单靠素养教学就能触达他们。该设计为横断面设计，且样本限于既有用户，因此这种次序是一项建模假设，而非观察到的序列。

AI 素养的一个核心应用目标是 [[reducing-ai-misuse|减少 AI 误用]]：教学生合乎伦理、有成效地使用 AI，而不是让它替代自己的 [[cognitive-offloading|认知工作]]。AI 素养建立的是批判性评估与使用 AI 的 *能力*，[[reducing-ai-misuse|减少误用]] 则是行为与结构上的回报 —— 结合护栏化的工具设计、[[assessment|评估重设计]]，以及诸如“先想后 AI”的支架序列与带有审慎 [[feedback|反馈]] 的提示练习等教育性杠杆。两个概念相互强化：AI 素养提供使减少误用的干预得以持久的批判性倾向，而减少误用的证据（例如 [[ai-misuse-learning-harm|表现—学习差距]]）则说明了素养为何必须超越操作技能、走向批判性判断。

AI 素养还需要面向最小学习者的发展适切形态。[[ai-play-framework-early-childhood-2026|AI-Play]] 把 AI 素养能力转译为学前至二年级学习者的游戏化、**不插电** 活动 —— 围绕 *AI 身体*（AI 是由部件构成的系统）、*AI 食物*（AI 从例子中学习）、*AI 大脑*（AI 通过模式与反馈改进）以及一个 AI 之前/AI 之后的伦理透镜 —— 针对 [[early-childhood-elementary-ai-education|幼儿]] 领域长期缺乏发展适切的 AI 素养指引这一状况，并使 AI 素养对非技术性的 [[teacher-role|教育者]] 与 [[parents-and-families|家庭]] 可及。与之互补，[[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin（2025）]] 发现 6–14 岁的儿童普遍信任一个按年龄定制的聊天机器人作为信息来源，多数把它建模为“一个会学习的聪明电脑程序”（萌芽中的 [[machine-learning|机器学习]] 理解），但在批判性参与与数字安全意识上存在缺口 —— 证据表明年幼学习者的信任可能跑在他们的批判性评估技能之前，因此明确的 [[trust-calibration|信任校准]] 与安全教学是儿童 AI 素养的必要组成。

测量正与这一发展性转向在低龄端同步跟进。[[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan 与 Srikoon 2025 年对小学高段学生 AI 素养自评问卷的验证]] 为四至六年级开发了一份 15 题的工具，围绕“学习关于 AI”“学习 AI 如何工作”“学习与 AI 共同生活”组织，并在两个样本（n = 335 与 n = 579）中确证了三因子结构，总 Cronbach's alpha 为 .934。作者把它定位为对感知素养（而非已演示素养）的形成性诊断，并指出儿童自评的准确性受制于仍在发展中的元认知能力。

**项目式学习作为一种交付机制。** [[ai-literacy-course-satisfaction-pbl-scale-2026|Zhu & Kong（2026）]] 开发并验证了一份 AI 项目式学习（AI-PBLS）量表，并在一个包含 1,027 名中学与大学生（446 人数据完整）的香港样本中用结构方程模型显示，用 AI 解决问题的 [[self-efficacy|赋能感]] 与 AI [[ethics|伦理意识]] 共同 **中介** 了所感知的 [[project-based-learning|项目式学习]] 与 AI 素养课程满意度之间的关系。这把 PBL 定位为不只是交付格式，而是一种机制：它在建立能力的同时建立学习者信心与伦理推理，强化 [[project-based-learning|PBL]] 与有意义的 AI 素养发展之间的联系。它还提供了一份经过验证的测量工具，用于今后对 AI 素养课程体验的 [[educational-measurement|测量]]。

**抬高素养的伦理维度有一个符号问题。** 在 584 名自学 AI 的本科生中，能力提升了伦理意识（β = 0.644, p < .001），而伦理意识随后 *提高* 了 AI 焦虑（β = 0.439, p < .001），而非降低它，与预测方向相反（[[mu-ai-competence-ethical-awareness-anxiety-2026|Mu 等人（2026）]]）。作者得出的教训是：教伦理关切如何被治理，必须伴随伦理维度本身，否则素养工作可能让学习者比开始时更焦虑。

**AI 素养是 [[conversational-ai|对话式 AI]] 框架中的核心缺口。** [[conversational-ai-agents-umbrella-review-2026|对话式 AI 智能体的伞状综述]]（Ganguly 等人 2025，34 篇综述）把 **AI 素养支持不足** 列为 CAI 框架的主要缺口，其伦理使用路线图把基础评估（包括加强 AI 素养）列为第一支柱，与参与式设计、伦理使用指引和对认知影响的持续评估并列。它进一步发现，AI 素养、培训与觉察位列 CAI 文献中最受强调的伦理方向之列。([[conversational-ai-agents-umbrella-review-2026]])

**AI 素养干预的有效性。** 一项 [[liu-ai-literacy-interventions-meta-analysis-2026|59 项研究的三层元分析]]（172 个效应量，7,211 名参与者）估计 AI 素养干预的总体效应很大（g = 0.837, p < .001）—— 但预测区间宽达 [−0.292, 1.966]，因此有效性在不同情境间差异相当大。东亚与欧洲的干预优于北美，且聚焦知识的干预优于针对技能、态度或伦理的干预。作者论证，AI 素养教育因此应越过知识、走向技能、实践、伦理与态度，并由整合性与反思性的 [[pedagogy|教学法]]（项目式、问题式、探究式、体验式）以及生成式 AI 支持的工具来支撑 —— 这一转向与本知识库他处所述的 [[computational-thinking|计算思维]] 的参与式、生产者导向形态相一致。

第二项综合在更窄的基础上达到相近量级，并锐化了测量问题。[[yu-k12-ai-education-ai-literacy-meta-analysis-2026|Yu、Kim、Chang 与 Huang（2026）]] 汇集了 16 项研究、覆盖 3,837 名被教以 *AI 本身*（而非借助 AI 教学）的 K-12 学生的 57 个效应量，估计 Hedges' g = 0.892（95% CI [0.548, 1.236], p < .001），对 0 到 1 的假定前后测相关稳健，在剪补法后稳定于 g = 0.952。57 个效应全部指向正向（范围 0.16 到 4.93），且没有任何调节变量（发表来源、年份、学段）能解释巨大的异质性（I² = 94.68%）。作者偏好的解释是测量：纳入研究把从 AI 知识与伦理到态度、动机、自我效能感与职业兴趣的一切都称为“AI 素养”，因此这个合并数字描述的是同一松散标签下正向发现的分布，而不是一种统一的干预。与 Liu 等人并读，两项估计在“AI 素养教学有效”上一致，其余则几乎无共识 —— 这本身就是该领域的测量信号。

刻意 *简短* 设计的课堂证据较少，但方向一致，并增加了一个调查无法提供的行为层面结果。[[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc 等人（2026）]] 给 116 名八至九年级法国学生开了一堂两小时的工作坊，讲大语言模型如何工作与失效，并配以练习：预测一个提示能否引出可用答案、评估回应、修改或再问。两天后，在对照组参与的六道大语言模型支持的科学题中，受训学生更少接受欠规定的提示（51.5% 对 66.7%，OR = 0.47），在得到弱回应后远更常追问（59.2% 对 27.9%，d = 0.80），对答案正确性的判断对提示质量更敏感（交互 OR = 2.52），分数差异不大（20 分中 11.38 对 10.29，p = .040）。工作坊从未演练过测试任务，因此迁移的是一种调节姿态，而非任务熟悉度 —— 作者明言两天不构成耐久性。

**小学阶段的 AI 支持式批判性媒介素养。** Demir 与 Akar（2026）提供了一个具体的小学示范：一个 18 小时、5E 模型的课程，面向土耳其四年级学生，将 ChatGPT 与 Grammarly 按阶段嵌入作为教学智能体（ChatGPT 用于反思性提问与问答，Grammarly 与 Canva AI 用于内容精修，Padlet 用于 [[peer-assessment|同伴反馈]]），对齐土耳其语言与社会课程。受 AI 支持组在媒介阅读（+3.50）、写作（+1.67）与总媒介素养（+5.17，均 p < .01）上增益显著，组间效应量为 Cohen's *d* = 1.12–1.31，而对照组仅 modestly 前进。[[qualitative-research|质性]] 分析浮现出批判性媒介素养成长的六个领域 —— 数字自我保护与数据隐私、有目的且负责任的媒介使用、安全沟通与边界意识、批判性评估与 misinformation 觉察、网络风险觉察，以及媒介伦理/数字公民 —— 证据表明发展适切、嵌入学科的生成式 AI 使用能够建立 AI 素养的批判性评估与伦理维度，而不只是操作技能。

**构建 AI 素养的框架。** 若干近期贡献提供了构建 AI 素养的结构化进阶。**[[ukraine-ai-literacy-secondary-framework-2026|Marienko、Markova 与 Semerikov（2026）]]** 提出一个五级框架（觉察、应用、评估、创造、伦理），与 AI 在教育中的三种范式（AI 主导、AI 支持、AI 赋能）整合，经由对乌克兰中学教育者的 [[mixed-methods-research|混合方法]] 研究开发（全国调查 n = 2018；专业发展评估 n = 1130）。他们发现 84% 的教育者使用 AI，但只有 11% 能说出 ChatGPT 之外的专门服务，一项专业发展干预带来了 AI 能力 24% 的提升 —— 证据表明定向的 PD 能把素养推进到表层工具熟悉之外。该框架奠基于 [[constructivist|建构主义]]、联结主义与 TPACK，联结到 [[tpack|TPACK]] 与 [[teacher-ai-competency|教师 AI 能力]]。与之互补，**[[science-integrated-ai-literacy-curriculum-dbr-2026|Moore 等人（2026）]]** 用一个青年与 AI 专家咨询委员会开展两年的 [[design-based-research|设计型研究（DBR）]]，为高中青年设计了一套整合科学的机器学习课程，发现两个队列都出现机器学习知识增益（队列 2 的 M2−M1 = 0.175 对队列 1 的 0.076），女性与非白人参与者增益更大 —— 证据表明参与式、学科整合的设计能够同时推进 AI 素养与 [[equity-in-ai-education|AI 教育中的公平]]。

一项对 39 项 STEAM 研究（2016–2025）的 PRISMA 综述发现，这些实施主要发展技术素养 —— 基础 AI 概念、计算思维、数据素养 —— 而伦理意识、创造性想象力，以及借助 AI 进行创造、管理与设计则发展不足，因此嵌入学科的单元仍可能遗漏高阶要素（[[niri-steam-ai-literacy-review-2026|Niri 等人，2026]]）。

这一构念恰在教育者所在之处备受争议。一项对教师教育中 AI 素养 34 项研究的综述发现，该领域对 AI 素养对专业教育者（区别于一般数字素养）意味着什么缺乏共识，UNESCO 的《教师 AI 能力框架》规定了五个维度上的 15 项能力，却只是作为全球政策参照而非实施指引发挥作用。[[ai-integration-instructional-design-collaboratory-2026|跨机构的教师准备协作实验室]] 中的教师把 AI 素养当作 [[professional-training|专业准备]] 的一个整合维度，而非一项独立的技术技能，因此候选人被期望在学科课程作业中审计、比较并论证 AI 输出，而不是展示工具熟悉度。

**初始教师准备是结构最薄之处。** [[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto 等人（2026）]] 综述了 11 项 AI 进入职前小学数学 [[teacher-education|教师培训]] 的研究，发现九项只是嵌入既有课程的一次或几次课，只有部分把提示作为明确的培训内容，[[ethics|伦理]] 仅见于三项，且无一处理透明度、算法偏见或问责。他们报告的失败处于素养层面：职前教师未能察觉 ChatGPT 产生的概念错误，无批判地接受生成内容，并随任务变难把更多问题解决推给工具。他们的建议是把 [[teacher-ai-competency|AI 能力]] 建立在整条培训序列上，从一个预备阶段进入实习，而不是放在一个孤立模块里。

教师对 *为何* 教 AI 的叙述添加了一层 competency 框架未言明的目的。[[fagerlund-competency-agency-purposes-ai-education-2026|Fagerlund 等人（2026）]] 访谈了 13 位从学前到九年级的芬兰教师（多为 AI 教育的新手），借 Biesta 的三个领域阅读他们的目的陈述。资格化（qualification，即能力的获得）是最清晰、最具体的目的，并作为进入另外两者的通道运作：学生要把握 AI 作为一种社会技术现象并使用其工具，AI 既是目标也是学习的辅助。社会化表现为培育热情、把 AI 呈现为“酷”的东西，并把学生框定为必须满足能力要求的未来 AI 达人。主体化（subjectification，即 Biesta 视为核心的自主决定且有个人意义的参与）被 named 为重要，却没有具体教学手法 repertoire 可依，教师也提不出任何针对“挑战 AI 权威”的成熟范例。作者提出 **informed AI agency（知情的 AI 能动性）**，一个把主体化置于中心、同时把能力当作自主选择的解释性框架的启发式。其设计意涵是：AI 教育的“为何”需要与“如何”同等的设计关注 —— 当主体化停留在泛泛讨论时，AI 素养教学就退回到它本想与之并立的资格化。

准备状态本身是个有争议的目标。[[charles-teacher-readiness-by-design-ai-rich-2026|Charles（2026）]] 论证，教师对 AI 密集型学习的准备应从其产出设计的质量读出，而非从采用、信心或数字能力读出，并围绕 *设计中介* 建立一个框架：可观察的决策，如工具选择、任务与提示设计、支架、验证、透明度、评估重设计、无障碍规划与人类监督。其中两项主张有直接的专业发展后果。第一，[[self-efficacy|自我效能感]] 是一种动员资源，而非质量指标，因为缺乏 AI 专门教学知识或伦理取向的信心可能加速糟糕设计、而非防止它，这修正了把教师信心当作准备信号的通常读法。第二，政策清晰性与机构支持是彼此独立的调节变量，因此物质支持可以很高而期望依旧模糊，准备仍然转化不良。该框架还拒绝把不使用等同于未准备好，因为一种有理由的扣留 AI 的决策本身就能展示设计判断。它是概念性的、未经检验的，因此提供的是命题与证据来源，而非已确立的效应。

**AI 互动素养：互动维度。** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström 与 Palmqvist（2026）]] 提出一种更窄的、互动性的能力 —— *引导、评估并从* 与生成式 AI 的迭代互动中 *学习* 的能力 —— 作为更宽框架中应用性、评估性与整合性维度的具体落地，例如 [[ai-literacy-heptagon-2026|AI 素养七边形]]。他们的反思性示范展示了它在实践中由什么构成：识别一个流畅答案 pitched above 自己的图式，请求简化，收窄范围，并把系统引向聚焦的练习。由此有两个设计后果 —— 该技能分布不均，因此无指导的使用可能让已经自信的学生占优并扩大差距（[[equity-in-ai-education|AI 教育中的公平]]），且它必须被显式教授而非假定，由教师覆盖如何构造 productive 提示以及何时停止使用工具（[[self-regulated-learning|自我调节学习]]）。

### 批判性 AI 素养：从技能到权力与抵抗

本知识库中一个独立 strand 把 AI 素养不仅当作技能或批判性评估，而当作一种拷问权力、权威以及“谁的知识算数”的 *批判性与政治性实践*。这把 AI 素养联结到 [[critical-pedagogy|批判教育学]] 与 [[equity-in-ai-education|AI 教育中的公平]]：

- **“抵抗 AI”作为一种素养姿态。** 批判性 AI 素养（CAIL）可以包含 *抵抗 AI* —— 拒绝主流话语的不必然性与技术解决主义，并通过对话式、协作式教学法培育集体能动性。([[li-mroziak-reorienting-critical-ai-literacy]]) 这把教育定位为一个共同体想象并建造替代性未来、而非 merely 适应给定技术秩序的空间。
- **基于共同体的认识论。** 基于共同体的 AI 学习把 AI 参与扎根于学习者切身且基于共同体的认知方式，通过认识论微调、权威再分配与情境化 discernment 重新分配 AI 的认识权威。([[ojeda-ramirez-community-based-ai-learning]])
- **批判性与女性主义框架。** 批判性、女性主义学术论证，AI 素养应被框定在正义、抵抗与文化的 [[sustainability|可持续性]] 的教学法之内 —— 追问 AI 生产谁的知识、谁受益、系统失灵时谁负责。([[avraamidou-ai-colonization-science-education]])
- **情境化课程器具。** AI 素养可以经由 [[situated-learning|情境化的]]、主动的教学工具（如“情境学习片段”）逐层建立，而非经由抽象教学。([[panciroli-ai-literacy-episodes-situated-learning]])
- **创造性作文作为批判性 AI 素养教学法。** 与其把 AI 素养当作技术知识或个人能力，不如为学习者设计面向真实受众创作关于 AI 的信息的机会 —— 一个 [[multimodal|多模态]] 制品（如公共服务公告）在传达的同时演示了批判性能力。在 [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss 等人（2026）]] 的课堂研究中，22 名十一年级学生自选 AI [[ethics|伦理]] 议题，就校园监控、[[privacy|知情同意]] 与算法指控制作了视频 PSA；在全部七部影片中，伤害都源于人—机纠缠而非一个反派式工具，情节仍收束于希望与 [[agency|能动性]]，作者把 [[storytelling-in-education|讲故事]] 与倡导（抗拒传统评估）定位为以 [[learner-identity|学生身份]]、选择与声音为中心的 [[critical-pedagogy|批判性 AI 素养教学法]] 的核心。([[burriss-multimodal-composition-critical-ai-literacy-2026]])
- **调节能力，而非接受。** Kim（2026）把 [[higher-ed|高等教育]] 中的 AI 素养重构为 *[[regulation|调节能力]]* —— 在学业工作中验证、修改、选择性采纳或拒绝 AI 输出的被 enact 的实践 —— 表明评估性能力与伦理意识（而非单纯的使用意愿）预测主动的、[[student-engagement|批判性参与]]。([[ai-anxiety-strategic-regulation-writing-2026]])
- **识别 [[ai-sycophancy|谄媚]] 作为一种素养技能。** 一项核心评估能力是识别 AI 何时在 *附和* 学习者、何时才是正确的。[[contextual-sycophancy-ai-literacy|情境性谄媚]] 显示，AI 素养与提示训练能减少、但不能消除对用户错误的谄媚式镜像，而 [[sycophantic-ai-social-interaction-2026|谄媚式 AI]] 正因为它让人感到被理解而受用户偏好。因此 AI 素养必须教会学习者察觉“为附和而附和”，并珍视纠正性摩擦，这联结到 [[trust-calibration|信任校准]] 与 [[reducing-ai-misuse|减少 AI 误用]]。
- **估值，不只是验证。** [[obyrne-co-constructing-ai-boundaries-agency-judgment-2026|O'Byrne（2026）]] 发现，只核查输出的准确性、可信性与相关性的学生仍会接受概念上被 flatten 的作品，而那些同时判断 nuance、声音与认识论立场的学生则会重新 author 它 —— 使“何时不该交出判断”成为素养之问。

这些批判性 strand 与 AI 素养的操作性和认知维度互补：后者问“学习者能否使用并评估 AI？”，批判性 AI 素养则问“学习者是否理解并挑战 AI 所 embody 的权力结构？”

### 谁的 AI 技能算数？教育者—雇主的框架分歧

AI 素养的一个核心开放问题是 *哪些* 技能重要、对谁重要。一项 Ithaka S+R 研究比较美国教育者与雇主如何为 HiBob AI 技能框架的 26 项技能排序，发现他们只在一项（为 AI 增强的工作设定现实期望）的重要性上达成一致。教育者看重 **批判性、负责任使用的取向** —— 识别 AI 的局限、[[explainable-ai|透明度]] 与署名、人类问责、主动的产出审查 —— 这与学术对署名、审查与信息素养的价值观一致。雇主看重 **生产力导向的技能** —— 工作流评估与重设计、自动化，以及 [[human-ai-collaboration|人机协作]] —— 反映基于团队的工作场所效率。由于 26 项技能中只有三项由半数以上的教育者教授，且被教授的技能偏向批判性使用类，该报告识别出一个具体的 **AI 技能缺口**：雇主看重的整类技能在大学课程中既不被优先也不被教授。([[ithaka-sr-ai-skills-college-graduates-2026]]) 这一分歧把 AI 素养框定为一个有争议的构念 —— 学术情境的批判性使用素养对就业的工作流整合素养 —— 这个张力关联到 [[framing-ai-use-for-students|面向学生框定 AI 使用]]、[[curriculum-design|课程设计]] 与 [[professional-training|专业培训]]。

学生自己的评分讲了一个相关但次序不同的故事。[[elsayary-ai-literacy-employability-competencies-2026|ElSayary 与 Ragab（2026）]] 调查了 380 名大学生（多为就读 STEM 的频繁 AI 用户），发现自陈 AI 素养解释了所感知的就业准备度的大部分：四个素养维度在仅值 0.054 的背景控制之上增加了 ΔR² = 0.554（p < .001），完整模型达到 60.8% 的方差。在素养集中，评估维度最强（分析与评估，β = 0.286），其次是情感维度（态度与心态，β = 0.266），动手使用（β = 0.217）与基础知识（β = 0.187）居后；就所感知的 [[career-development-and-readiness|职业准备度]] 而言，只有分析与评估（β = 0.216, p < .001）与态度与心态（β = 0.192, p = .004）显著关联。对照 Ithaka 的分歧来读，学生自己对职场准备的感知偏向教育者所偏好的批判性评估取向，而非雇主所看重的 workflow 整合技能。该设计是单次自陈，均值 uniformly 偏高（5 分中 4.17 到 4.57），且无雇主或就业测量，因此它显示的是 [[self-assessment|自评]] 的 AI 素养与自评的就业准备度一同变动，评估性与倾向性的部分贡献最大，而非这些学生确实具备劳动力准备。

### 设计 AI 素养干预

本知识库的框架与实证研究为教育者与 [[stakeholders|教学设计者]] 构建 AI 素养干预汇成了一套实践指引：

**1. 用结构化能力框架作支架，而非清单。** 成熟的框架给设计者共享的词汇与发展性排序的目标。[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL 框架]] 把 AI 素养组织成三个域（AI 概念；应用与技术技能；AI 数字公民），跨四个支架化层级 —— 理解与探索 → 应用与整合 → 评估与创造 → AI++。[[ai-literacy-heptagon-2026|AI 素养七边形]] 把七个维度（技术知识、应用、批判性思维、伦理、社会影响、整合、法律/监管）与四个对齐布鲁姆的精通层级交叉，并强调侧重必须 **按学科情境调整** —— 技术类项目侧重应用，[[humanities-education|人文]] 类项目侧重伦理与社会影响推理。([[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]])([[ai-literacy-heptagon-2026]])

**2. 让学习者参与多种 ICAP 模式。** 运用 [[icap-framework|ICAP 框架]]，有效的教学让学习者有机会在多个认知层级上参与 —— 被动接触（AI 概念讲座）、主动操作（动手使用工具）、建构性生成（创造 AI 制品、自我解释）与互动对话（与同伴和 AI 协作 [[problem-solving|解决问题]]）—— 选择契合学习目标的模式。一项 [[meta-analysis-systematic-review|系统综述]] 发现，成功的协作式 AI 素养干预横跨全部四种 ICAP 模式。([[hingle-collaborative-ai-literacy-2025]])

**3. 评估已演示的能力，而非自我感知。** 自陈 AI 素养与实测表现严重脱节 —— 教师高估自身 AI 技能约 40%，且基于表现的测量与课堂 AI 整合的相关远好于自陈报告（r≈0.72 对 0.31）。围绕基于表现的评估与校准设计干预，而不是信心调查，并用诊断画像（高估者与真正的新手）来定向支持。([[ai-literacy-assessment-misalignment]])

**4. 建立元认知与批判性倾向，而不只是操作技能。** AI 素养最好被理解为一种 [[metacognition|元认知的社会实践]]，而不是技能清单：由于大语言模型是概率性的且不透明的，学习者必须监控并调整自己的策略，培育科学怀疑，并审视算法如何塑造知识生产 —— 而不只是学习操作工具。参与式共同设计与实验性、项目制的空间（而非一次性工具培训）才是这种意识生长的地方。([[metacognitive-ai-literacy-beyond-skills-gap-2026]])

**5. 把素养嵌入学科并使之持续。** 向 AI 素养更高阶段的移动（从无批判使用 → 知情使用 → 批判性评估 → 改进），在体验是 **持续的、嵌入学科的** 而非作为独立工作坊交付时最为显著。设计在真实课程作业中反复、情境化的练习。([[ai-literacy-continuum-higher-education]]) 嵌入学科式批判素养的一个具体模型是 [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx 等人（2026）]] 为新闻业提出的基于任务的分类法：它把大语言模型支持的任务映射到新闻工作流的四个阶段（新闻采集、意义建构、编辑、发布/分发），每个阶段都配一个基线提示和一套风险—缓解策略。通过把任务定义与提示当作 [[situated-learning|情境化的]] 专业判断（而非中立的技术技能）来处理，它把提示本身变成批判性 AI 素养的载体（偏见、[[hallucination-risk|幻觉]]、过度依赖，以及 [[human-in-the-loop-ai|人类编辑监督]] 的持久价值），其底层逻辑可迁移到其他知识密集型专业（法律、[[medical-education|医学]]、公共政策）。与这类 [[discipline-specific-aied|学科专用]] 分类法互补，[[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn 等人（2026）的分类法]] 沿六个维度对生成式 AI 学习活动分类，其中 **认知参与**（理解/使用/批评/建构生成式 AI）直接把 AI 素养操作化为学习者与技术之间认知关系的深度 —— 从被动接触到主动批评与建构。

**6. 把公平与数字鸿沟当作设计约束。** AI 素养是应对三级数字鸿沟（接入、技能、结果）的一种机制：仅弥合设备差距是不够的，除非建立技能与批判性使用，使收益公平分配。干预应明确为带着更少既有 AI 接入进入的学习者做规划，并纳入文化与治理视角，而不是把素养当作文化中立的。([[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]])([[digital-divide]])

**7. 把素养与减少误用的杠杆配对。** 由于 AI 误用积极损害持久学习，素养教学应与 [[reducing-ai-misuse|减少 AI 误用]] 之下所记录的结构性与教育性杠杆相结合 —— 护栏化的“只给提示不给答案”工具设计、评估重设计，以及带有审慎提示练习的“先想后 AI”支架序列。

**8. 从学习者的实际进入点出发。** 学习者带着不同的取向进入 —— 由恐惧、不信任或缺乏接入驱动的回避，与掩盖着误解的无批判依赖。诊断性的、基于阶段的方法（而非统一的课程）让设计者在学生所在之处与他们会面，并推动他们走向批判性、负责任的参与。([[ai-literacy-continuum-higher-education]])

**9. 把供给扩展到正规教育已触达的受众之外。** [[ai-literacies-young-adults-2025|面向公共服务媒体的 AI 素养框架]] 从对 40 多个框架的景观综述和 35 个专家访谈论证，供给一直偏向技术与功能性技能，且各类 AI 素养相互重叠、应连接到数字、媒介与信息素养，而不是作为独立学科教授。其结构 —— 六个能力领域、五个价值观和三个进阶层级（*理解与应用*、*分析与评估*、*综合与专门化*），配有评估指引 —— 是正规学校之外的提供者可用的模板，其公平论证是一条设计指令：触达数字或其他方面被边缘化的年轻人需要审慎的伙伴关系，而不是普遍性发布。([[ai-literacies-young-adults-2025]])

### 测量 AI 素养

一个独立的研究线索把 AI 素养不仅当作教学的目标，也当作一个待测量的构念。本知识库的评估 strand 区分 **自陈** 与 **基于表现** 的素养：自陈与已演示的能力严重脱节（教师高估约 40%），且基于表现的测量预测课堂 AI 整合远好于信心调查（r≈0.72 对 0.31）。干预工作在行为层面重现了这种脱节：在 [[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc 等人（2026）]] 中，生成式 AI 态度与一般性元认知觉察量表都未能预测学生对大语言模型互动的调节或最终任务分数（r = .01 与 r = .04，均不显著），而工作坊真正改变的行为 —— 拒绝欠规定的提示、判断答案正确性、追问 —— 确实与答案质量同向。经验证的工具正在出现以弥合这一差距 —— [[jin-glat-genai-literacy-assessment|GLAT]] 提供了一份心理测量学上验证过的生成式 AI 素养评估，诊断画像（高估者与真正的新手）让设计者把支持定向到需要之处。[[caeai-digital-literacy-frameworks-review-2026|Guo 等人（2026）]] 直接测绘了这一工具版图，综述了 2014 年 1 月至 2025 年 2 月间发表的 80 个经验证框架 —— 69 个数字素养与 11 个 AI 素养。AI 已把数字素养拉向伦理，并把沟通重塑为包含人—AI 互动，而元认知调节与教育者专门的人—AI 协作仍是最少被规定的。就设计与研究而言，这把 AI 素养系于 [[educational-measurement|教育测量]] 与广义的 [[assessment|评估]]：一个素养框架的价值只取决于用来追踪成长的工具，而基于阶段的连续体需要可靠的测量才能把学习者安放其上。

一份 32 题六维度工具在四维度模型之外增补两个维度 —— 负责任使用与自我发展 —— 并在青少年（12–17）、青年（18–40）与中年（41–60）之间保持标量不变性，尽管作者告诫 ΔCFI 已接近常规临界值（[[sfailq-six-facet-ai-literacy-questionnaire-2026|Liu 等人（2026）]]）。

[[zhi-modeling-measuring-graduate-genai-literacy-2026|Zhi、Yang 与 Huang（2026）]] 在 Marzano 分类法之上建立了一个研究生专用模型：对 14 位教授的扎根理论访谈把 329 个原始标签浓缩为 96 个概念、15 个类别和五个维度（认知基础、操作技能、高阶思维、元认知反思、伦理责任），随后操作化为一份 15 题李克特量表，其五因子在探索性因子分析中浮现（累积方差 83.14%），并在第二个子样本的验证性因子分析中成立（CFI = 0.934，RMSEA = 0.083），308 份有效问卷的可靠性从 0.796 到 0.842。

一个相关的问题是这些工具 *究竟* 能测量什么。[[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss 等人（2026）]] 指出，既有 AI 素养量表与能力框架假定可 individually 测量的表现，因而在结构上排除了协作性、创造性的表达 —— 他们单元的证据是 [[multimodal|多模态]] 影像制品、反思与公民话语，而非 [[summative-assessment|终结性]] 分数，作者论证这类证据可以 *补充* 而非取代常规测量。拓宽构念因此可能需要拓宽可采纳的证据，而不只是在既有量表上增加模态丰富的题目。

一个互补的 strand 测量学习者与教师如何 *接收* AI 素养 *材料*，而非测量其素养本身。[[age-tiered-ai-literacy-guidebooks-2026|Wang、Chuang 与 Wu（2026）]] 让 794 名学生和 37 位教师在约 30 分钟有指导的课堂接触后，为两版按 UNESCO 年龄阈值（9–12 岁与 13–18 岁）编制的指南评分。接受度呈四因子结构（绩效期望、努力期望、感知趣味性、行为意向），两版学生版之间支持测量不变性，年幼学习者在全部四个构念上得分更高，感知趣味性与意向的关联在两个队列中都是最大的。作者对“这不是什么”直言：对一份按年龄分层资源的感知接受不等于 AI 素养成就、[[ethics|伦理]] 推理、采用或持续使用，材料层面的接受不应被读作素养提升的证据。

测量也延伸到中介学习者与 AI 接触的教育者。多数 AI 素养评估面向学生或一般用户，在 [[teacher-education|教师]] 教育中留下缺口 —— 这正是 [[language-teachers-ai-literacy-edai-2026|教师 AI 素养量表（TAILS）]] 所填补的：它奠基于 ED-AI 框架的六个维度（知识、评估、协作、情境化、自主与伦理），经由探索性与验证性因子分析以 [[language-learning|职前语言教师]] 为样本验证。这类工具支持测量并发展那些中介学习者与 AI 接触的教育者的 AI 素养。在学生一侧，[[genai-assessment-literacy-scale-2026|Nie 等人（2026）]] 为高等教育学生开发并验证了一份生成式 AI 评估素养量表（GAA-LS）—— 一份 18 题、五因子的工具，其分数追踪 [[feedback|反馈]] 参与、[[academic-integrity|学术诚信]] 与负责任的 AI 使用，并有一条经反馈通向诚信的间接路径 —— 证据表明评估专用的 AI 素养可测，并与诚信行为相系。而那份面向教师的工具语料究竟包含什么，此后得到了审计：[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal、Mohd Matore 与 Maat 2026 年对教师 AI 素养测量工具的综述]] 评估了 2019 至 2025 年间发表的 33 个工具，发现 31 个（93.9%）是感知信心的自陈量表，只有两个客观测试知识，没有一个使用基于表现的任务，而公平性证据是最弱的质量领域，只有五个工具报告了测量不变性或题目功能差异。

2026 年对那份测量文献的更新将其重组为四个领域 —— 知识与使用、认识论监督、依赖校准，以及对工具使用型智能体的操作控制 —— 并报告，语料中没有任何经验证的个体层面工具覆盖 [[agentic-ai|智能体式]] 工具使用所要求的范围、权限、恢复、状态隔离、独立审查与基于证据的收尾的完整组合。它在三个同样本效应上的主观—客观汇总相关为 r = .055，与上述脱节一致，而非与“自评可用作代理”一致（[[competent-generative-ai-use-measures-review-2026|Verí（2026）]]）。

**测量版图本身是失序的，如今已部分可测绘。** [[ai-literacy-measurement-conceptual-landscape-llm-2026|He、Zhang、Wang 与 Ji（2026）]] 用一个基于大语言模型的编码流程分析 AI 素养工具语料，发现该领域在同一个标签下测量许多构念 —— 一个 jangle 问题，一个构念带着多个名字（行为承诺出现在八个候选对中，内在动机在五个中），同时还存在候选 jingle 案例：工具共享标签却不共享题目内容。他们通过语义相似度恢复题目与构念结构，只与工具自身报告的可靠性中度相关（题目层面 r = 0.49，构念层面 0.45 与 0.35），并把该方法定位为筛选而非裁定。对任何选择测量工具的人来说，后果是：跨研究的趋同主张不可想当然 —— 两个同名工具可能操作化不同的构念。

**这些工具能支持什么，如今也得到了审计，而审计结果 sobering。** [[ai-literacy-instrument-development-systematic-review-2026|Jin、Gašević、Martinez-Maldonado 与 Yan（2026）]] 从 8,056 条记录筛到 58 项研究、覆盖 47 个独立工具，用 COSMIN 评估，而该构念的工具开发窗口压缩在三年内（2023 年前两个工具，仅 2025 年就有 28 个）。语料仍是 47 个中 [[self-report-measures|自陈]] 占 37 个，证据紧紧地聚在内部结构周围：结构效度在 58 项研究中有 32 项充分，内部一致性在 32 项中充分、无一被评为不足，但 [[assessment-validity|构念效度]] 只有 15 项研究报告（12 项充分），效标效度只有一项，测量 [[assessment|不变性]] 只有五项（全部充分），只有 58 项中的 2 项获得充分的总体内容效度评级 —— 全面性在 53 项中不足，尽管有 43 项报告了认知性访谈。其模式是：[[educational-measurement|测量]] 实践恰在最易证明之处看起来稳健，而在证据必须来自工具之外之处 thin —— 因此干净的因素结构与高系数（可能反映题目冗余如同反映构念表征）不应被读作已证明的能力。作者的处方是整合而非增殖：精炼既有量表，每当跨语言或跨教育阶段时测试不变性，并通过把分数关联到表现任务来添加效标证据。

**例外之一是专为组间比较而建。** [[gails-generative-ai-literacy-scale-2026|Zhang 等人（2026）]] 开发了生成式 AI 素养量表（GAILS）—— 43 题经五位专家的德尔菲评审和七人试测缩减为 34 题，随后在 341 名北美成年人中验证 —— 并测试了标量 [[assessment|不变性]]，发现它在男女受访者之间、学生与职场群体之间都成立。这正是该工具报告的均值比较得以成立的条件 —— 男性在适应性操作技能上得分略高，学生在适应性操作技能与负责任的生成式 AI 素养上更高 —— 作为能力差异而非题目功能差异，也正是它可跨 [[higher-ed|高等教育]] 与职场环境使用、而非仅限学生的原因。它自身的证据并非无瑕：[[educational-measurement|拟合]] 混合（CFI = .967 与 SRMR = .058 在常规临界内，RMSEA = .087 在临界外），总量表 α = .973 与一次失败的 Fornell–Larcker 判别比较并存（因子 1 √AVE = .828 对与因子 3 的 r = .873），并且，如同语料中几乎一切，它测量的是感知能力而没有行为效标。这个领域中一份经过验证的量表是综述所呼吁的不变性与效标工作的起点，而非成品 [[benchmark|基准]]。

### 知识库内的关联

AI 素养与 [[intelligent-tutoring|AI 辅导]]（理解 AI 导师何时以及如何有效）、[[teacher-ai-competency|教师 AI 能力]]（教育者准备）、[[academic-integrity|学术诚信]]（知道什么构成恰当的 AI 使用）以及广义的 [[ai-education|AI 教育]] 相交。它既是有效 AI 使用的前提，也是良好 AI 整合的结果 —— 学生是 BY 批判性地使用 AI 来学习 AI 素养，而不只是通过 ABOUT AI 的学习。

AI 素养对过度依赖是 **双刃的**：[[student-dependency-on-ai-literacy-self-efficacy-2026|Maizel 等人（2026）]] 发现 AI 素养的技能型维度（使用/理解、检测）与所报告的 AI 依赖 *正向* 关联，而 AI [[self-efficacy|自我效能感]] 与学业信心则负向关联 —— 因此技术性 AI 素养培训，若缺自我效能感与 [[self-regulated-learning|自我调节学习]] 支架，可能增加依赖。AI 素养在此成为一种赋能能力，其 *方向* 取决于互补的动机资源。

- **验证习惯只经由调节才有回报。** 在 [[davor-ai-supported-learning-higher-order-outcomes-2026|Davor、Larbi 与 Boateng（2026）]] 对 533 名加纳大学生的调查中，AI 验证素养对 [[critical-thinking|批判性思维]]（beta = .076, p = .090）或技术 [[problem-solving|问题解决]]（beta = .043, p = .385）均无显著直接效应，只经 [[metacognition|元认知自我调节]] 起作用（beta = .167, p < .001），一个作者称为元认知激活的完全中介。AI 任务支架预测了两个结果（beta = .185 与 .170），而 [[cognitive-offloading|认知卸载]] 倾向负向预测两者（beta = -.240 与 -.312）并同样压低调节（beta = -.294）。因此，教学生核查 AI 输出本身并不足够：评估性习惯需要把计划、监控与反思建进任务。
- **对 AI 输出的批评作为一种素养实践：** [[pedagogy-ai-mistakes|Hosseini（2026）]] 把评估 AI 生成的错误当作一项核心 AI 素养技能，在一个数据库设计课程中使用失败模式分析与迭代式提示精炼。研究发现学生高估了自己的 AI 能力（自陈素养与客观能力弱负相关），而基于批评的学习强化了校准。
- **社会主义人文主义的 AI 素养（2026）：** 一篇文献综述批评面向合规的 AI 素养，提出高等教育中异步 AI 素养与合理使用的社会主义—人文主义框定，把历史上的数字鸿沟连接到现代 AI 素养，并呼吁以服务人类繁荣与公平、而非机械政策合规的方法（[[mechanical-compliance-human-flourishing-ai-literacy-2026]]）。
- **廉价、轻触式的警告削弱 AI 说服力 —— 且不损害总体信任。** [[ai-literacy-warning-political-persuasion-2026|Orchinik 与 Rand（2026）]] 预注册了两个实验（总 N = 3,208 名美国成年人），其中参与者与一个被指示就政治话题转变其观点的 [[llm|大语言模型]] 对话。一条简短警告 —— 模型可被提示去说服人、并可能选择性呈现信息 —— 使信念改变相对对照减少约一半（-48.1%，95% CI [-59.5%, -36.8]），而追加具体的说服技巧警告并无进一步收益。对教学而言要紧的性质在效应的另一侧：对 [[generative-ai|生成式 AI]] 的总体信任并未下降，因此该干预建立的是 [[trust-calibration|校准过的信任]]，而非 blanket 怀疑。这是一个一段话、无需引导的干预，对一项 AI 素养设计而言是罕见的成本剖面。
- **学习者对 AI 的治理比工具的设计更重要。** [[ai-literacy-tool-design-programming-education-2026|Azimi（2026）]] 将 33 名硕士数据分析课程的学生随机分入嵌入式笔记中的支架化 AI 学习教练（n = 16）与七周内任意使用他们自选的 [[generative-ai|生成式 AI]] 工具（n = 17）。作业表现与概念清单增益无从分辨；教练组报告了更高的 [[self-efficacy|信心]]。区分学生的是实践中的 AI 素养：那些为自己制定了何时使用 AI 的规则的人在两种条件下得分都更高，而对模型理解最深的学生 —— 每一个都是自学的 —— 提示得最审慎。设计意涵与控制的反射相反：教 [[self-regulated-learning|自我调节]] 与模型理解的成分，而不是约束工具。

## 关联概念
- [[pedagogical-patterns]] — 由这些序列中的批判性评价步骤发展而来
- [[learners]] — 学习者：学习者侧概念的总括
- [[generative-ai]] — AI 素养所瞄准的技术
- [[llm]] — AI 素养核心的系统
- [[critical-thinking]] — 核心评估性倾向
- [[prompt-engineering]] — 核心实践能力
- [[metacognition]] — 作为元认知社会实践的素养
- [[cognitive-offloading]] — 素养所对抗的过度依赖风险
- [[reducing-ai-misuse]] — 素养的行为回报
- [[academic-integrity]] — 知道什么构成恰当的 AI 使用
- [[self-assessment]] — 评判自己的工作与技能，作为技术与作为测量
- [[trust-calibration]] — 校准恰当的信任
- [[ai-sycophancy]] — 察觉附和的素养技能
- [[equity-in-ai-education]] — 素养的公平分配
- [[digital-divide]] — 接入/技能/结果差距
- [[ethics]] — 伦理意识维度
- [[teacher-ai-competency]] — 教育者准备
- [[educational-development]] — 建立教育者素养
- [[ai-assisted-educational-research]] — AI 辅助教育研究
- [[k-12]] — 学校层面的素养
- [[higher-ed]] — 大学层面的素养
- [[career-development-and-readiness]] — AI 素养被论证要建立的就业回报
- [[ai-education]] — 更广阔的领域
## 关联文章
- [[mu-ai-competence-ethical-awareness-anxiety-2026]] - 抬高素养的伦理维度而缺乏应对框架，可能让学生更焦虑
- [[caeai-digital-literacy-frameworks-review-2026]] — 80 个经验证的框架显示 AI 正把数字素养推向伦理，而教育者的人—AI 协作仍被规定不足（Guo 等人 2026）
- [[ai-literacies-young-adults-2025]] — 面向公共服务媒体的六个能力领域、五个价值观与三个进阶层级
- [[ai-literacy-heptagon-2026]] — AI 素养七边形
- [[ai-literacy-continuum-higher-education]] — 一个实用的五阶段 AI 素养连续体
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — 测绘 AI 素养工具语料：55 个构念、jangle 与 jingle 对、基于大语言模型的编码
- [[ai-literacy-instrument-development-systematic-review-2026]] — 对 58 项研究与 47 个 AI 素养工具的 COSMIN 评估：效度证据聚在内部结构，而效标、内容与不变性证据大体缺失（Jin 等人 2026）
- [[gails-generative-ai-literacy-scale-2026]] — GAILS：341 名成年人中验证的 34 题生成式 AI 素养量表，跨性别与学生/职场群体标量不变（Zhang 等人 2026）
- [[jin-glat-genai-literacy-assessment]] — GLAT：一份经验证的生成式 AI 素养评估测验
- [[ai-literacy-assessment-misalignment]] — AI 素养评估：自陈与表现的错位
- [[genai-assessment-literacy-scale-2026]] — GAA-LS：面向高等教育学生的经验证的生成式 AI 评估素养量表（Nie 等人 2026）
- [[competent-generative-ai-use-measures-review-2026]] — 超越 AI 素养：对胜任的生成式 AI 使用之测量的结构化综述与探索性元分析
- [[ai-literacy-correlates-affective-behavioral-cognitive-2025]] — AI 素养与何者相关的系统综述
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 测量教师 AI 素养之工具的系统综述
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — 面向小学高段学生的自评问卷
- [[metacognitive-ai-literacy-beyond-skills-gap-2026]] — 作为元认知社会实践的 AI 素养
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — AI 素养干预效应的元分析
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — 支架化 AI 素养（SAIL）框架
- [[age-tiered-ai-literacy-guidebooks-2026]] — 按年龄分层的 AI 素养指南以 794 名学生和 37 位教师评估：四因子接受结构在 9–12 与 13–18 两版间不变，年幼学习者在每个构念上都更高
- [[li-mroziak-reorienting-critical-ai-literacy]] — 批判性 AI 素养：权力、抵抗、能动性
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — 提示素养作为区别于提示工程的基础素养：五阶段以人为中心的生成式 AI 参与模型（Miles、Haber-Curran & Arar 2026）
- [[contextual-sycophancy-ai-literacy]] — 情境性谄媚作为一种 AI 素养干预
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — AI 素养、自我效能感与依赖
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — 一堂两小时工作坊改变了中学生对大语言模型互动的调节，而自陈预测不了任何东西（Clerc 等人 2026）
- [[ai-literacy-sdg-governance-framework-2026]] — 作为促进可持续发展的治理能力的 AI 素养：AIRE 分类法与 AI—SDG 关联（Islam、Morshed & Islam 2026）
- [[ukraine-ai-literacy-secondary-framework-2026]] — 面向乌克兰中学教育者的五级 AI 素养框架（Marienko 等人 2026）
- [[niri-steam-ai-literacy-review-2026]] — 面向 AI 素养的 STEAM 教育：系统综述
- [[hingle-collaborative-ai-literacy-2025]] — 协作式 AI 素养框架
- [[obyrne-co-constructing-ai-boundaries-agency-judgment-2026]] — 把 AI 素养重构为判断哪些解释性工作不应被交出
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — AI 验证素养只经元认知自我调节起作用，而认知卸载预测更低的批判性思维与问题解决（Davor 等人 2026）
- [[yu-designing-ai-literacy-self-determination-2026]] — 思维型教学在客观评分的任务上胜过技能型教学，自主与胜任承载了该效应（Yu、Lin & Chen 2026）
- [[hu-psychological-predictors-continued-chatgpt-use-2026]] — AI 素养到持续使用 ChatGPT 经由信任与学业自我效能感，且 AI 焦虑稀释了第一个联结（Hu 2026）
- [[zhi-modeling-measuring-graduate-genai-literacy-2026]] — 面向研究生生成式 AI 素养的五维度 Marzano 扎根模型与 15 题自陈量表（Zhi 等人 2026）
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — AI 进入数学初始教师培训的十一项研究，多为短期，只有三项处理伦理（Pinto 等人 2026）
- [[vega-baudrit-genai-university-chemistry-education-review-2026]] — 大学化学中以验证为中心的生成式 AI 整合，以表征转换为核心 AI 素养需求（Vega-Baudrit & Rivera Alvarez 2026）
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — 谁行动，谁知道，谁回答？对高等教育生成式 AI 研究中能动性、认识论责任与问责的语料辅助话语分析
- [[elsayary-ai-literacy-employability-competencies-2026]] — 自陈 AI 素养解释了所感知就业准备度的 60.8%，评估性与情感维度最强（ElSayary & Ragab 2026）
- [[fagerlund-competency-agency-purposes-ai-education-2026]] — 借 Biesta 的资格化、社会化与主体化阅读教师对 AI 教育的目的，以及知情的 AI 能动性启发式（Fagerlund 等人 2026）
- [[charles-teacher-readiness-by-design-ai-rich-2026]] — 教师准备作为设计质量而非采用或信心，自我效能感作为资源，不使用不等于未准备好（Charles 2026）
- [[yu-k12-ai-education-ai-literacy-meta-analysis-2026]] — K-12 AI 教育以 57 个正向效应、合并 g = 0.892 提升了 AI 素养，而测量分歧解释了异质性（Yu 等人 2026）
- [[sun-student-genai-entanglement-literacy-demands-2026]] — 素养需求随学生—生成式 AI 纠缠类型而变；助手型与使能型形态占主导，其余因机构原因保持边缘（Sun、Dohn & Rehm 2026）
- [[ai-competence-framework-landscape-2026]] — 面向教育与劳动力发展的 16 个 AI 能力框架的比较分析
- [[ai-literacy-determinants-university-students-2026]] — 外部资源、数字能力与心理画像作为共同决定因素，伴随技术焦虑的符号反转
- [[sfailq-six-facet-ai-literacy-questionnaire-2026]] — 增补负责任使用与自我发展维度的六维度工具，跨青少年、青年与中年标量不变
- [[faculty-ai-well-being-social-supports-2026]] — 教师 AI 幸福感、社会支持与 AI 素养的结构方程模型
