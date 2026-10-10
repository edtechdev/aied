---
connected_resources: [drawsplat]
title: 隐私
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:20-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **隐私（Privacy）** — 在受 AI 增强的学习环境中，对学生数据、身份与[[agency|自主]]的保护。随着 AI 系统为[[personalized-learning|个性化]]、[[learning-analytics|分析]]与[[student-modeling|自适应教学]]收集日益细粒度的行为数据，隐私关切随之加剧。它是[[ai-education|教育中的人工智能]]的一项核心伦理与监管约束：几乎每一个个性化、预测或评价的 AI 工具都依赖学习者数据，这使数据最小化、同意、透明度与安全成为基础性设计要求，而非事后补记。

## 值得思考的问题

- 什么学生数据会让你即使它能改善你的学习，也不愿被收集？个性化在何处变成监视？
- 许多学生“没有有意义的选择”而只能使用被指定的平台，使同意流于名义。你可曾同意过某件事却不真正理解收集了什么、为何收集？真正的知情同意需要什么？
- 同一份驱动自适应个性化学习的学习者数据，也带来误用与伤害的风险。你能说出一个你愿意为之让渡某些隐私的个性化益处 —— 以及你不愿跨越的界线吗？
- 本页警告，隐私保障可能“默认只保护某些学习者”。哪些学生可能最暴露，隐私又如何连接到公平与[[bias-mitigation|公正]]？
- 持续的 AI 监控 —— 即便出于善意 —— 也能塑造行为与焦虑。被注视何时改变了你的行为，这对课堂 AI 感知意味着什么？
- 对儿童而言，隐私延伸到数据保护之外的安全。为什么通用安全工具可能漏掉来自未成年人的、与教育相关的风险，谁又应当在场？

## 引言

隐私是教育中可信 AI 的前提。因为 AI 系统随数据而改善 —— [[personalized-learning|个性化]]需要详尽的学习者画像，[[learning-analytics|学习分析]]需要细粒度的交互日志，而[[llm-training-and-fine-tuning|微调的导学模型]]需要真实的学习者–导学转录 —— 使自适应、可规模化教育成为可能的同一份数据，也带来监视、误用与伤害的风险。本知识库把隐私视为与[[ethics|伦理]]（规范框架）、[[regulation|监管]]（法律要求）、[[governance|治理]]（机构责任）以及[[equity-in-ai-education|公平]]（谁被保护、谁被暴露）不可分割。其隐私文章围绕四个反复出现的问题聚集：规模化收集、同意与透明度、安全与匿名化，以及儿童所应得的独特保护。

## 核心隐私挑战

- **规模化数据收集。**[[learning-analytics|学习分析]]与[[edtech-platform|教育平台]]收集点击流、写作、击键与交互数据。隐私[[research-methods-aied|研究]]考察的核心问题是，这种收集是否与教育益处相称 —— 而[[learning-analytics-to-educational-interventions-2026|可信 LA 研究]]把隐私与数据治理当作前提而非附加项：伦理合规、数据安全与透明的算法，正是使数据驱动的教育变革有意义的东西。

- **同意与透明度。**学生与[[parents-and-families|家庭]]很少理解一个 AI 工具收集了什么数据、如何使用、存于何处。机构与[[learners|学习者]]之间的这种权力不平衡是一个反复出现的主题 —— 学生可能没有有意义的选择而只能使用被指定的平台，使“同意”流于名义而非知情。本知识库把这一点连接到[[trust-calibration|信任]]与[[ai-use-disclosure|披露]]：学习者对 AI 的使用与机构对学习者数据的使用，都依赖关于收集什么、为何收集的透明度。

- **作为一种隐私机制（而非只是披露）的委派。****[[agentic-literacy-debt|Nama（2026）]]**主张，自主智能体跨会话继承权限、且很少撤销它们，因此每一次不透明的委派都使习惯于不加审视地授予访问 —— 使关于*何时是智能体而非人在行动*的知情同意成为隐私设计的一部分。

- **安全、匿名化与数据来源。**即便是正当的数据，一旦泄露或被误处理也会造成伤害。隐私保全技术遍布本知识库 —— [[teachlm-post-training-llms-education|TeachLM]]展示了一个严格的流水线：每次会话的同意、内部服务器上的个人身份信息（PII）移除，以及用真实数据后训练导学模型的企业级保密，表明合乎伦理来源的学习者数据既可能、也是高质量导学的前提。[[ai-lms-middle-school-longitudinal|联邦式与边缘 AI 架构]]把数据留在本地，减少集中收集。[[ai-detection|检测]]工具增加了一个平行的数据处理案例：**[[bassett-ai-detectors-education-2026|Bassett 等（2026）]]**指出，检测器供应商把学生作品存于第三方服务器、有时在隐私标准更弱的海外，同时存在泄露风险与学生写作被商业利用的可能。

- **监视与监视–隐私张力。**持续的 AI 监控 —— 即便出于善意 —— 也会令人感到侵入。关于[[ai-fatigue-academic-contexts|AI 疲劳]]、[[remote-proctoring|远程监考]]与[[cognitive-offloading|过度依赖]]的研究，把隐私连接到学生[[well-being|福祉]]：当 AI 持续观察与追踪时，它塑造的是行为与焦虑，而不只是数据流。**[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana 等（2026）]]**编目了[[remote-proctoring|监考]]系统实际捕捉了什么 —— 面部图像、身份证件、包括 360 度环视的房间扫描、麦克风音频、面部识别、屏幕录制、锁定事件，以及击键与鼠标追踪，而移动监考还加上 GPS 与自拍核查 —— 并发现在满足其纳入标准的六项研究中，隐私与算法问责基本缺席，改由邻近研究补足：一项被引调查中 83% 的受访者表达了监视恐惧，58% 感到不适，72% 担忧数据隐私，而跨境供应商合同使 GDPR 与南非 POPIA 等工具提供的控制有限。保留并处理这些数据所引出的法律暴露 —— 谁是控制者、数据保存多久、谁可访问、同意是否真正自愿 —— 映射在[[legal-issues-and-risks|法律问题与风险]]上。

- **个性化–隐私的权衡。**[[personalized-learning|个性化学习]]需要详尽的学习者数据才能运作，与隐私形成结构性张力。本知识库探索平衡个性化与数据最小化的路径 —— 足够调适的数据，而不多到使学习者完全暴露。这是“多少才相称？”问题的实践形式。

- **数据托管作为一项核心伦理价值。****[[agarwal-ethical-values-norms-aied-2026|Agarwal 等（2026）]]**是一篇对 25 篇文章的[[meta-analysis-systematic-review|系统综述]]，他们把数据托管（使用数据/信息的定义）识别为[[ai-education|教育中的人工智能]]六项主要伦理价值之一，与不歧视、人工监督、善意、可解释性、教育适切性并列。该综述发现，这些价值紧密耦合、可能冲突 —— 例如可解释性 对 准确性/隐私、不歧视 对 数据托管 —— 产生伦理困境，且没有一条关于数据托管的规范直接面向终端用户，使学习者在伦理文献中基本处于被动。

- **隐私是被推迟的，而非被决定的。**对 edtech 专业人士的十二次访谈与对 48 份平台隐私政策的审计显示，隐私被承认为重要、随后在产品生命周期中被推迟，责任被委派给云供应商、政策文件与下游学校 —— 这是一种薄弱的隐私反馈使其隐而不见的模式，因为沉默看起来像安全的证明（[[edtech-privacy-deferral-2026|Nair 与 Greenstadt，2026]]）。

- **监考的伦理证据基础薄弱。**一项对 80 项研究的综述发现，35% 未披露其数据集，40% 只评价单一模型，30% 无法复现，只有 25% 处理了伦理问题；误报 —— 标记正常行为 —— 仍是一项核心可靠性风险（[[automated-online-exam-proctoring-decade-review-2026|Malhotra 与 Chhabra（2026）]]）。

## 儿童安全与 K-12 保护

[[k-12|K-12]]情境要求更强的隐私保障，因为学习者未成年。这使隐私延伸到数据保护之外的[[pedagogical-safety|教学安全]]：儿童使用的工具必须不只保护他们的数据，还要保护他们免受伤害。[[child-safety-genai|儿童安全研究]]表明，通用安全分类器常常漏掉来自儿童、与教育相关的不安全提示，警告学校不能假定标准模型保障能保护较年幼的用户 —— 他们需要儿童特定的评价、基于事件的测试，与[[human-in-the-loop-ai|人工监督]]。这一框定把隐私连接到[[equity-in-ai-education|公平]]：默认安全与隐私实践保护了谁，反映了一个系统把谁的安全与自主视为不可谈判。

## 隐私实践

- **把隐私当作设计要求，而非政策事后补记。**[[teachlm-post-training-llms-education|TeachLM]]的例子表明，同意、匿名化与安全的数据处理可以被建入数据流水线本身 —— 这是合乎伦理地来源那些使[[intelligent-tutoring|AI 导学系统]]有效的真实数据的模型。

- **为数据最小化而设计。**偏好只收集调适所需之物的路径（边缘/联邦式 AI、设备端处理），而非默认囤积交互数据。**[[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati 等（2026）]]**为[[cognitive-diagnosis|认知诊断]]展示了这一点的一种具体联邦式形式：多个商业[[llm|大语言模型]]API 协作诊断，同时在聚合前于本地对每个模型的预测加入 ε-局部差分隐私噪声，使没有供应商看到原始学生数据 —— 这是一种隐私保全的架构，在不集中敏感学习者轨迹的同时保持[[intelligent-tutoring|AI 导学]]可用。联邦式学习还使**跨机构分析无需数据共享**成为可能：**[[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch 等（2026）]]**经联邦聚合跨机构训练一个多任务学业风险模型，使原始学习者数据留在本地、只有模型参数被共享 —— 这是集中式[[learning-analytics|学习分析]]的一种协作式、隐私保全的替代方案，在捕捉跨机构模式的同时保持数据主权。

- **确保明确、知情的同意。**在学习者数据用于 AI 开发或改进之处，机构应透明说明收集、存储与使用 —— 且学生应有真正的选择，而非被指定的平台。

- **审计谁受到了保护。**隐私保障不应默认只保护某些学习者；[[equity-in-ai-education|公平]]要求同样的关照跨越年龄、语言、残障与社会经济界限适用。

## 关联

隐私连接到[[learning-analytics|学习分析]]（数据收集者）、[[personalized-learning|个性化学习]]（数据消费者）、[[k-12|K-12]]（更强的保护）、[[ethics|伦理]]（规范框架）、[[regulation|监管]]（法律要求）、[[governance|治理]]（机构责任）、[[equity-in-ai-education|公平]]（谁被保护）、[[pedagogical-safety|教学安全]]（儿童保护），以及[[educational-policy-ai|教育 AI 政策]]（政策回应）。它是任何负责任的教育 AI 部署都必须满足的基础性约束之一 —— 在本知识库的框定中，可信 AI 始于可信数据，原因即在此。

## 关联概念

- [[remote-proctoring]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[k-12]]
- [[ethics]]
- [[regulation]]
- [[equity-in-ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[pedagogical-safety]]
- [[legal-issues-and-risks]]
- [[student-experience]]
- [[student-support-and-success]] — 学生记录、跨办公室数据共享与联邦式风险建模

## 关联文章

- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 面向隐私保全学业风险建模的联邦式可解释学习分析（Villegas-Ch 等，2026）
- [[learning-analytics-to-educational-interventions-2026]] — 从学习分析到教育干预：可信 LA 干预的使能因素（Svetec、Divjak 与 Kadoić，2026）
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — 智能体式素养债务：来自自主智能体的结构性 AI 素养缺口（Nama，2026）
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: anonymization and consent for authentic learning data
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — 隐私保全的联邦式 LLM 认知诊断
- [[agarwal-ethical-values-norms-aied-2026]] — AI 教育的伦理价值与规范
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 监考系统捕捉了什么，以及隐私文献在证据基础中的缺席
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech