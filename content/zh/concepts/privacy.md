---
connected_resources: [drawsplat]
title: 隐私
created: "2026-08-09T07:47:05-04:00"
updated: "2026-11-07T17:17:38-05:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-11-05T21:30:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **隐私（Privacy）** — 在受 AI 增强的学习环境中，对学生数据、身份与[[agency|自主]]的保护。随着 AI 系统为[[personalized-learning|个性化]]、[[learning-analytics|分析]]与[[adaptive-learning|自适应教学]]收集日益细粒度的行为数据，隐私关切随之加剧。它是[[ai-education|教育中的人工智能]]的一项核心伦理与监管约束：几乎每一个个性化、预测或评价的 AI 工具都依赖学习者数据，这使数据最小化、同意、透明度与安全成为基础性设计要求，而非事后补记。

## 值得思考的问题

- 什么学生数据会让你即使它能改善你的学习，也不愿被收集？个性化在何处变成监视？
- 许多学生“没有有意义的选择”而只能使用被指定的平台，使同意流于名义。你可曾同意过某件事却不真正理解收集了什么、为何收集？真正的知情同意需要什么？
- 同一份驱动自适应个性化学习的学习者数据，也带来误用与伤害的风险。你能说出一个你愿意为之让渡某些隐私的个性化益处 —— 以及你不愿跨越的界线吗？
- 本页警告，隐私保障可能“默认只保护某些学习者”。哪些学生可能最暴露，隐私又如何连接到公平与[[bias-mitigation|公正]]？
- 持续的 AI 监控 —— 即便出于善意 —— 也能塑造行为与[[anxiety-and-stress|焦虑]]。被注视何时改变了你的行为，这对课堂 AI 感知意味着什么？
- 对儿童而言，隐私延伸到数据保护之外的安全。为什么通用安全工具可能漏掉来自未成年人的、与教育相关的风险，谁又应当在场？

## 引言

隐私是教育中可信 AI 的前提。因为 AI 系统随数据而改善 —— [[personalized-learning|个性化]]需要详尽的学习者画像，[[learning-analytics|学习分析]]需要细粒度的交互日志，而[[llm-training-and-fine-tuning|微调的导学模型]]需要真实的学习者–导学转录 —— 使自适应、可规模化教育成为可能的同一份数据，也带来监视、误用与伤害的风险。本知识库把隐私视为与[[ethics|伦理]]（规范框架）、[[regulation|监管]]（法律要求）、[[governance|治理]]（机构责任）以及[[equity-in-ai-education|公平]]（谁被保护、谁被暴露）不可分割。其隐私文章围绕四个反复出现的问题聚集：规模化收集、同意与透明度、安全与匿名化，以及儿童所应得的独特保护。

## 核心隐私挑战

- **去标识化取决于可测量的检测质量。** [[ji-de-identification-personally-identifiable-information-2025|Ji 等（2025）]]在学生文本上评测了五种个人身份信息（PII）检测配置。微调后的 GPT-4o-mini 召回率达到 0.9589，成本为每 100 万 token 0.92 美元，约为 Azure AI Language 每 100 万 token 4.90 美元的六分之一。在误报会损害语料可用性的情形下，一个两阶段核验器把精确率提升到 0.8893；而低精确率的失败模式在语义上是破坏性的——把数学段落中的"牛顿"换成"大卫"，或在一个线索是"拿撒勒"的故事里把耶稣基督、马利亚与约瑟标记出来。

- **监考的伦理证据基础薄弱。**一项对 80 项研究的综述发现，35% 未披露其数据集，40% 只评价单一模型，30% 无法复现，只有 25% 处理了伦理问题；误报 —— 标记正常行为 —— 仍是一项核心可靠性风险（[[automated-online-exam-proctoring-decade-review-2026|Malhotra 与 Chhabra（2026）]]）。

- **聊天界面泄露对话本身。** 在审计 42 个 AI 聊天平台之后，[[bekos-contextual-leakage-ai-chat-platforms-2026|Bekos 等（2026）]]发现 21 个平台把对话标题发送给第三方追踪器，七个教育平台平均每个约有 367 次追踪器请求，其中五个泄露了上下文。

## 儿童安全与 K-12 保护

[[k-12|K-12]]情境要求更强的隐私保障，因为学习者未成年。这使隐私延伸到数据保护之外的[[pedagogical-safety|教学安全]]：儿童使用的工具必须不只保护他们的数据，还要保护他们免受伤害。[[child-safety-genai|儿童安全研究]]表明，通用安全分类器常常漏掉来自儿童、与教育相关的不安全提示，警告学校不能假定标准模型保障能保护较年幼的用户 —— 他们需要儿童特定的评价、基于事件的测试，与[[human-in-the-loop-ai|人工监督]]。这一框定把隐私连接到[[equity-in-ai-education|公平]]：默认安全与隐私实践保护了谁，反映了一个系统把谁的安全与自主视为不可谈判。

## 隐私实践

- **把隐私当作设计要求，而非政策事后补记。**[[teachlm-post-training-llms-education|TeachLM]]的例子表明，同意、匿名化与安全的数据处理可以被建入数据流水线本身 —— 这是合乎伦理地来源那些使[[intelligent-tutoring|AI 导学系统]]有效的真实数据的模型。

- **为数据最小化而设计。**偏好只收集调适所需之物的路径（边缘/联邦式 AI、设备端处理），而非默认囤积交互数据。**[[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati 等（2026）]]**为[[cognitive-diagnosis|认知诊断]]展示了这一点的一种具体联邦式形式：多个商业[[llm|大语言模型]]API 协作诊断，同时在聚合前于本地对每个模型的预测加入 ε-局部差分隐私噪声，使没有供应商看到原始学生数据 —— 这是一种隐私保全的架构，在不集中敏感学习者轨迹的同时保持[[intelligent-tutoring|AI 导学]]可用。联邦式学习还使**跨机构分析无需数据共享**成为可能：**[[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch 等（2026）]]**经联邦聚合跨机构训练一个多任务学业风险模型，使原始学习者数据留在本地、只有模型参数被共享 —— 这是集中式[[learning-analytics|学习分析]]的一种协作式、隐私保全的替代方案，在捕捉跨机构模式的同时保持数据主权。

- **确保明确、知情的同意。**在学习者数据用于 AI 开发或改进之处，机构应透明说明收集、存储与使用 —— 且学生应有真正的选择，而非被指定的平台。

- **审计谁受到了保护。**隐私保障不应默认只保护某些学习者；[[equity-in-ai-education|公平]]要求同样的关照跨越年龄、语言、残障与社会经济界限适用。

## 关联

隐私连接到[[learning-analytics|学习分析]]（数据收集者）、[[personalized-learning|个性化学习]]（数据消费者）、[[k-12|K-12]]（更强的保护）、[[ethics|伦理]]（规范框架）、[[regulation|监管]]（法律要求）、[[governance|治理]]（机构责任）、[[equity-in-ai-education|公平]]（谁被保护）、[[pedagogical-safety|教学安全]]（儿童保护），以及[[educational-policy-ai|教育 AI 政策]]（政策回应）。它是任何负责任的教育 AI 部署都必须满足的基础性约束之一 —— 在本知识库的框定中，可信 AI 始于可信数据，原因即在此。

## 常见误解

- **"监考采集的是有限且已被充分理解的一块数据。"** 一份对[[remote-proctoring|监考]]系统实际采集内容的清单列出**面部图像、身份文件、包括 360 度环视的房间扫描、麦克风音频、面部识别**等等。其范围比多数同意流程所描述的更广。
- **"监考文献确立了监考的伦理。"** 一项对 **80 项研究**的综述发现，**35% 未披露其数据集，40% 只评价单一模型，30% 无法复现，只有 25%** 达到了报告标准。这份证据基础恰好在机构部署前最需要回答的那些问题上薄弱。
- **"隐私是一道合规勾选项，而不是设计约束。"** 几乎每一个个性化、预测或评价的 AI 工具都依赖学习者数据，这使数据最小化成为一个设计决定。一个离不开这些数据的工具，并没有一个可选的隐私设置，它有的是一项由设计所选定的数据依赖。
- **对数据实践的知晓并不来自看见它们。**[[bergdahl-student-epistemic-agency-ai-2026|Bergdahl（2026）]]发现，**47 名七年级学生**中有 **66%** 在[[conversational-ai|聊天机器人]]读取其写作时选择了保护性最弱的选项。另有 **47%** 把算法影响当作"只是好玩"，而这发生在**一个月前**的一堂课之后，那堂课把本班自己被记录的行为实时投影出来，学生们反应说这"很吓人"，还有几位留到课间继续使用该平台。让机制可见、却没有让代价具体的隐私教学，留下的立场并未改变。作者指出，这里的低分可能**比高分更可靠**，因为这些问题没有社会期待的标准答案，而责任与治理则容易引出听起来正确的回应。

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

- [[bekos-contextual-leakage-ai-chat-platforms-2026]] — 你的提示词值几便士：AI 聊天平台中的上下文泄露（Bekos 等 2026）
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 面向隐私保全学业风险建模的联邦式可解释学习分析（Villegas-Ch 等，2026）
- [[learning-analytics-to-educational-interventions-2026]] — 从学习分析到教育干预：可信 LA 干预的使能因素（Svetec、Divjak 与 Kadoić，2026）
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — 智能体式素养债务：来自自主智能体的结构性 AI 素养缺口（Nama，2026）
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM：面向真实学习数据的匿名化与同意
- [[bassett-ai-detectors-education-2026]] — 正面我赢、反面你输：教育中的 AI 检测器（Bassett et al. 2026）
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — 隐私保全的联邦式 LLM 认知诊断
- [[agarwal-ethical-values-norms-aied-2026]] — AI 教育的伦理价值与规范
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 监考系统捕捉了什么，以及隐私文献在证据基础中的缺席
- [[edtech-privacy-deferral-2026]] — 《We'll Fix It Later》：教育、AI 与 EdTech 中学生隐私的延迟