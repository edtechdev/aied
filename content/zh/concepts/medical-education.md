---
title: 医学与卫生专业教育
created: "2026-08-16T09:22:41-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [teacher-role]
technology: [adaptive-learning, simulation]
assessment: [assessment]
discipline: [medical education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
translation_of: concepts/medical-education
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **医学与卫生专业教育（Medical and Health Professions Education, HPE）** — 对医学、护理、药学及联合健康专业人员的教学与培训。AI 正通过临床 [[simulation|模拟]]、[[reinforcement-learning|强化学习]] 训练器、[[adaptive-learning|自适应学习]]，以及在卫生专业情境中对基础学习原理（经验式、情境式与分布式认知）的应用，重塑这一领域。由于 HPE 具有高风险、以能力为基础且嵌入临床的特点，它提出了关于 AI 在技能习得、患者安全与教育者判断中的角色的独特问题。护理学是 HPE 中研究最充分的专业，现在有了自己的页面——[[nursing-education]]——本页仅以纲要形式携带的能力边界、身份形成与劳动力证据，在那里得到完整展开。

## 值得思考的问题

- 在医学中，AI 带来的可扩展练习与自适应反馈等好处，必须与临床动手技能的侵蚀等风险相权衡——那里的错误直接带来患者后果。你会如何在「AI 应当做什么」与「受训者必须自己练什么」之间划界？
- 本页主张 AI 应当被用来落实古老的学习原理——经验式、情境式、分布式认知——而非取代教育者的引导角色。当 AI 已经能够模拟或个性化练习时，是什么让教育者的判断不可或缺？
- 强化学习训练器与 [[agentic-ai|智能体 AI]] 现在被用于住院医师培训中的临床与操作技能。如果一个 AI 智能体培训一名住院医师做某项操作，你如何在他对真实患者动手之前验证他确实已安全地学会？
- 由于卫生专业教育是高风险且以能力为基础的，评估问题承载着格外重的分量。AI 辅助的评估可能既改善又威胁临床能力的评定，这是怎么发生的？
- 过度依赖 AI 是医学中的一项具体关切。你认为用 AI 训练如何可能造就一个更自信但独立推理能力更弱的临床医生——以及什么可以防范这一点？

## 引言

AI 在医学与卫生专业教育中，是知识库学科覆盖中日益增长的一条线索。不同于一般的 [[higher-ed|高等教育]]，HPE 面向临床能力、操作技能与专业判断的发展，这塑造了 AI 工具的设计与评估方式。

### AI 如何出现在卫生专业教育中

- **落实基础学习原理。** [[fowlin-operationalizing-learning-principles-ai|Fowlin 等人]]（在 Medical University of South Carolina 发展）主张，AI 应当被用来落实古老的学习原理——Dewey 的 [[experiential-learning|经验学习]]、[[situated-learning|情境认知]] 与 [[distributed-cognition|分布式认知]]——而非取代教育者的引导角色。AI 增强 [[personalized-learning|个性化]] 与 [[adaptive-learning|自适应]] 学习，而教师仍是 [[student-engagement|学生投入]] 与成果的核心。
- **临床技能与强化学习。** [[residencyrl-clinical-rl-training-2026|ResidencyRL]] 用强化学习训练住院医师的临床推理与操作技能，展示了 AI 作为真实临床工作流中的技能训练伙伴。
- **模拟与智能体 AI。** [[hdr-brachytherapy-agentic-ai-simulation-2026|近距离放射治疗中的智能体 AI 模拟]] 展示了 AI 智能体如何支持医学专业中的动手操作训练。
- **医学学习的游戏化。** [[medgame-llm-medical-education-gamification|MedGame]] 将 [[game-based-learning|游戏化]] 与 LLM 用于吸引医学生。
- **护理与跨学科教育。** [[alrazeeni-transforming-nursing-education-ai-2026|护理教育的 AI 转型]] 记录了 AI 如何重塑护理课程与教学。本页把护理保留为医学、药学、牙科与联合健康之间的一个专业，围绕可扩展的临床能力这一共同问题来组织；护理专属的记述——一个 AI 已证实的好处止步之处的能力边界、一种明确的专业身份框架，以及学生的劳动力 [[anxiety-and-stress|焦虑]]——属于 [[nursing-education]]，此处仅交叉引用而不复述。
- **护理中的 AI 驱动模拟。** [[jiang-ai-powered-simulation-nursing-education-2026|Jiang 等人（2026）]] 对 19 项研究（N = 1,253）的 [[mixed-methods-research|混合方法]] [[meta-analysis-systematic-review|系统综述]]发现，AI 驱动的 [[simulation|模拟]]（GenAI/LLM、虚拟患者/模拟人、AI 增强的 VR/MR，以及 [[conversational-ai|聊天机器人]]）在最强的设计中显著改善认知知识与 [[affective-computing|情感性]] 结果（[[self-efficacy]]、沟通信心），但对复杂的心理运动技能效果不一致——一项 [[rct]] 发现 AI 辅助的模拟*劣于* 标准化患者。他们的**「真实性差距（authenticity gap）」** 概念——学习者在情感共鸣、非语言线索与触觉检查上感知到的欠缺——解释了为什么 AI 最适合高度结构化的目标（基础沟通、病史采集），并应当处在一个**阶梯式模拟连续谱**中，与人类标准化患者和临床实习并行而非替代它们。这是对该领域 [[simulation]] 线索的一种独特、以证据为锚的精炼，并与学习者偏爱被视为「善意」的人类反馈而非仅仅「胜任」的 AI 这一接受-信任发现相平行。
- **LLM 与护理中 [[learner-identity|专业身份]] 的重构（2026）。** [[sun-llm-nursing-education-professional-identity-2026|Sun 等人（2026）]] 对 47 个国家 489 项研究的批判性整合综述（Whittemore & Knafl 框架），把问题从 [[llm|LLM]] 在护理教育中能做什么，转向它们的融入对一名护士形成过程中的*发展进程*做了什么。经由 Benner 的技能习得、认知负荷理论、自动化偏见与 Wenger 的身份形成框架，他们发现同一技术既增强也侵蚀能力，取决于被置换的认知工作对目标能力而言是外在的还是构成性的——无结构的依赖在伦理推理与临床判断上产生了可测量的缺陷。他们的**专业身份张力模型** 把支持专业形成的 LLM 融入与悄然替代之的融入区分开来，而**结构性共情抑制** 把 AI 在关系性指标上的表面「胜过人」重构为系统性过度劳累的症状而非真正的 AI 共情。一张证据差距图显示，政策后果最高的领域（专业身份、关系性/伦理性能力、长期结果）建立在最稀薄的严谨证据之上——这是对护理教育中自信部署主张的一个告诫。
- **临床问诊训练中的多智能体 AI 标准化患者。** 在一项含 95 名受分析医学生的 2026 年 [[rct|随机对照试验]] 中（[[ai-standardized-patient-scaffolding-medical-2026|Yang 等人]]），多智能体 AI 标准化患者训练把最终 OSCE 对齐的考试分数提高到高于一个结构化的非 LLM 渐进披露对照组（71.8% 对 55.6%；β = 16.4 个百分点；P = 3.30e-4），而二元诊断准确率在统计上无差异（84% 对 86%；P = 1.000）。这一分离表明，早期临床训练的增益可首先出现在问诊过程质量上——沟通（1–5 的 OSCE 量表上均值 3.53 对 2.64；P = 4.50e-4）、共情表达（「表达共情」清单项上 +31 个百分点）以及选定的病史采集行为——而后才出现在诊断终点上，并且 AI 患者仍需要人类评定者与教师来做专业性与就绪判断。
- **学生默认把 AI 患者当作可搜索的数据库。** 在一项 [[problem-based-learning|PBL]] 先导中对 genAI 化身做语音问诊，学生提出封闭式的、以效率为中心的问题——有一人问 AI 是否「就只是一个题库」——且问诊耗时 55–65 分钟，而旧模块为 36–39 分钟（[[genai-simulate-patient-history-pbl-2026|Mool 等人，2026]]）。
- **任务分配与 SCAN 框架。** [[ai-teammate-task-distribution-medical-training-2026|Tsim 等人]] 把 AI 融入从学习者的「误用」重构为*误分类*——实时 [[metacognition|元认知]] 评估的失败。他们的 SCAN 框架（Substitute, Complement, Aid, Non-Negotiable）以 Vygotsky 的 [[sociocultural-learning|最近发展区]] 为基础，按个体学习者的发展状态分配 [[generative-ai|生成式 AI]] 任务，并把 AI 脚手架任务中的被动投入识别为一条通向技能错配的隐藏路径，它需要被从 AI 重新识别为专家协助，并配以人类 [[human-in-the-loop-ai|认识论审计者]]。
- **人类在环的教学资产生成。** [[gen-mentor-dental-radiography-2026|Gen-Mentor]]（Dong 等人，2026）把一个视觉-语言模型骨干整合进牙科影像工作流：Faster R-CNN 定位四个目标发现（Filling, Implant, Impacted Tooth, Cavity），一个条件扩散模型生成类别特定的合成 ROI 候选，一个 VLM 产出与证据相连的说明文字，再由一个 [[llm]] 重排成病例描述、对比与测验提示——这一切都在结构化专家审查之前完成。以 45 名牙科学生评估（mean SUS 72.7），它展示了 [[human-in-the-loop-ai|人类在环]] 对 AI 生成教学资产的审查，如何在保留专家对学生所见内容的监督的同时，扩展病例多样性与即时反馈支持。
- **[[automated-assessment|AI 评分]] 药学考试。** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik 与 Thambi（2026）]] 把 ChatGPT-5 与人类教师对一份 21 题药学考试的评分做了比较（16 名学生），题型涵盖选择题、多选全对题、填空题、列举题、简答题与论述题。该模型在客观题上与教师高度一致（CCC 0.935–1.000），但对列举、简答（CCC ≈0）与论述（0.341–0.854）回答不可靠，而结构化评分标准并未一致地提升一致性——这表明在卫生专业的高风险、以能力为基础的 [[assessment]] 中，AI 适合规定明确的题目，而对主观的、开放式的临床推理仍需要 [[human-in-the-loop-ai|人工复核]]。
- **一个经验证的临床沟通 LLM 评判器。** [[sophie-clinical-communication-ai-assessment-2026|Hasan 等人（2026）]] 仅从转录文本就对 3E 沟通技能打分，其评判器对人类评定者共识达到 Pearson 0.759 与 ICC(A,1) 0.746，落在单个人类评定者的散布范围之内，尽管其最弱的维度（Be Explicit）并未随问诊次数改善。
- **基于情境的卫生教育中的 GenAI。** [[genai-scenario-based-healthcare-education-2026|Neto 与同事（2026）]] 系统综述了卫生教育中跨基于情境、案例、问题与模拟的学习里 GenAI 的 23 项研究（PRISMA 2020）。其核心发现是 **[[prompt-engineering|提示设计]] 充当教学规约**——把专家编写中隐含的认知目标与质量标准编码出来——但只有 34.8% 的研究让生成内容与教学框架对齐，也只有 34.8% 的研究报告了足以复现的提示细节。GPT-4 主导了实现（44.4%），混合式 [[human-ai-collaboration|人机协作]] 胜过全自动方法，而证据对高阶认知技能最强、在其他地方则不一致。这为医学教育中的 [[simulation|情境/模拟式]] 与 [[problem-based-learning|问题式]] [[pedagogy]] 提供了验证与整合质量上的 [[benchmark|基准]]。
- **开放式考试题的 AI 评分。** [[olvet-genai-scoring-open-ended-medical-2026|Olvet 等人（2026）]] 测试 [[generative-ai|GPT-4]] 能否在两所美国医学院校可靠地为临床前 [[assessment|评估]] 中的开放式问题打分。经教师跨三轮错误模式分析迭代精炼评分标准后，AI–教师的评分者间信度在四题中的三题达到实质到近乎完美的一致（weighted kappa 最高 0.94），但在整体评分标准题上仅为中等（κw = 0.54）；分歧可追溯到双方（GPT-4 对多答案或无评分标准词汇的回答打分过高；教师过于宽松），偶发的反馈不准确也使 [[human-in-the-loop-ai|人类留在环内]]。作者认为，自动 OEQ 评分的理由得到了加强，因为美国约 82% 的医学院校对临床前作业采用通过/不通过评定，那里并不总是要求 AI 分数精确一致。
- **[[ai-ed-evaluation|评估 AI]] 教学智能体，而不只是部署它们。** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang 等人（2026）]] 在一门内分泌 [[curriculum-design|课程]] 中跨四种角色扮演范式（患者、学生、专家、家属）部署了八个 LLM 教学智能体，并用一个 8 维教学质量标准为 167 段学生对话打分。平台分数与标准质量严重背离；智能体在知识维度上差异最大、在角色扮演上差异最小；自适应难度校准是一个共同的弱项；而强化一个智能体的共情提升了角色扮演质量却没有改善知识覆盖。「角色扮演范式可以相互分离（超越默认的医生-患者脚本）」这一发现，指向针对显式教学维度来设计与评估智能体。
- **该领域自身文献的形状。** [[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram, Nichols, Ganti 与 Gue（2026）]] 绘制了医学教育中伦理 AI 文献本身的地图：1995 至 2026 年间 Web of Science 上 1,403 篇出版物，前二十年可忽略不计，随后 2023 年 113 篇、2024 年 256 篇、2025 年 500 篇；39 个国家超过作者数门槛，由美国（533 篇）领先于中国（189）与英格兰（95）；而引用最多的作品是能力测试——首推 ChatGPT 在医学执照考试上的表现——而非治理学术。他们的解读是：该领域增长得很快，却没有均衡地成长，而对 [[governance|治理]] 框架的实证评估正是引用记录没有奖励的那项工作。对于任何把已发表的 AI-医学教育研究之体量当作其安全使用问题已被回答之证据的人，这是一个有用的告诫。

一项对医学教育中 GenAI 的 153 份报告的范围综述，绘制了应用图景——[[simulation|模拟]] 与临床技能最大（47 份报告），领先于评估生成与反馈（22）与案例式学习及临床推理（21）——然而只有 13 份报告带有随访或保持信号，也未发现任何患者层面的结果（[[genai-medical-education-transformation-review-2026|Zhao 等人（2026）]]）。

### 为什么它重要

HPE 是一个高风险、以能力为基础的领域，AI 的好处（可扩展练习、自适应反馈、模拟）必须与风险（[[cognitive-offloading|过度依赖]]、临床动手技能的侵蚀、伦理与安全问题）相权衡。知识库的一般概念——[[teacher-role]]、[[assessment]]、[[feedback]]、[[equity-in-ai-education]] 与 [[ethics]]——在卫生专业中以特别的强度适用，因为那里的错误直接带来患者后果。

[[wang-safety-gap-productive-struggle-2026|Wang 与 Shan（2026）]] 把由此产生的「安全差距（safety gap）」——学生的 AI 辅助表现与其无辅助验证能力之间的分歧——命名出来，并主张在高风险临床训练中暂缓给出解答、引入建设性认知摩擦，以及采用苏格拉底式或对抗式的 AI 架构。

## 对卫生专业教育者的启示

- **用 AI 落实学习原理，而非取代教育者。** [[fowlin-operationalizing-learning-principles-ai|Fowlin 等人]] 主张 AI 应当落实经验式、情境式与分布式认知的学习，而教师仍是投入与成果的核心。
- **借 AI 之力做临床技能训练。** [[residencyrl-clinical-rl-training-2026|ResidencyRL]] 与 [[hdr-brachytherapy-agentic-ai-simulation-2026|智能体模拟]] 展示了 AI 作为真实临床工作流中的技能训练伙伴——把它嵌入到能增加安全、可扩展练习的地方。
- **权衡高风险的收益与过度依赖。** HPE 以能力为基础且高风险；防范 AI 取代临床动手技能与判断，并格外审慎地应用 [[feedback]]、[[assessment]] 与 [[ethics]] 考量。
- **审慎地适配游戏化与跨学科的 AI。** [[medgame-llm-medical-education-gamification|游戏化的 LLM 学习]] 与 [[alrazeeni-transforming-nursing-education-ai-2026|护理教育转型]] 显示前景，但需要就安全与技能结果做评估；对护理而言，那种安全与技能的证据——包括 AI 辅助模拟劣于标准化患者的那项 RCT——汇集在 [[nursing-education]] 上。

## 关联概念

- [[problem-based-learning]]
- [[higher-ed]]
- [[simulation]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[game-based-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[teacher-role]]
- [[assessment]]
- [[feedback]]
- [[ai-education]]
- [[discipline-specific-aied]]
- [[nursing-education]] — 卫生专业教育中的护理线索
- [[virtual-and-augmented-reality]] — 沉浸式与 AR 临床培训

## 关联文章
- [[genai-medical-education-transformation-review-2026]] — 对 153 份医学教育 GenAI 报告的范围综述：模拟领先，持久性与患者结果未被测量

- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — 用 8 维标准评估医学教育中的 AI 教学智能体
- [[sun-llm-nursing-education-professional-identity-2026]] — LLMs, nursing education structural gaps, and the reconstitution of professional identity (Sun et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)
- [[genai-simulate-patient-history-pbl-2026]]
- [[fowlin-operationalizing-learning-principles-ai]] — Operationalizing experiential, situated, and distributed cognition with AI in health-professions education
- [[residencyrl-clinical-rl-training-2026]] — Reinforcement-learning training for clinical skills in residency
- [[medgame-llm-medical-education-gamification]] — Gamified LLM-based learning for medical education
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — Agentic AI simulation for brachytherapy training
- [[alrazeeni-transforming-nursing-education-ai-2026]] — Transforming nursing education with AI
- [[jiang-ai-powered-simulation-nursing-education-2026]] — AI-powered simulation in nursing: mixed methods systematic review
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle
- [[gen-mentor-dental-radiography-2026]] — Gen-Mentor: human-in-the-loop dental radiography instruction (Dong et al. 2026)
- [[genai-scenario-based-healthcare-education-2026]] — Systematic review of GenAI in scenario-based healthcare education (Neto et al. 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[sophie-clinical-communication-ai-assessment-2026]] — Scalable AI-based clinical communication training and automated assessment
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Bibliometric map of AI ethics in medical education: output rose 113 (2023) to 500 (2025), 39 countries, and citations reward capability testing over governance (Sriram et al. 2026)
