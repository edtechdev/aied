---
connected_resources: [drawsplat]
title: 多模态人工智能
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:23-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
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

> **多模态人工智能** — 跨多种模态 — 文本、图像、音频、视频与结构化数据 — [[ai-technologies|处理、理解或生成内容的人工智能系统]]，以及这些系统提出的教育问题。在[[ai-education|人工智能教育]]中，多模态人工智能以三种不同角色出现：作为学习者创造并参与其中的*学习内容*（[[multimodal-learning-genai|多模态学习]]）、作为必须解释图表与图形的辅导系统的*能力边界*（[[syal-multimodal-dialogue-stem-2026|多模态辅导]]），以及作为用来评价理解的*评估信号*（[[multimodal-item-parameter-estimation-2026|多模态测量]]）。

## 值得思考的问题

- 想想你曾经难以用言语解释的一张图、一幅受力图或一张示意图。这段经历对一个试图帮助解决图像密集问题的纯文本[[intelligent-tutoring|人工智能导师]]的局限说明了什么？
- 一个[[physics-education|物理]]导师约 96% 的时间能正确回答基于文本的问题，但在意义嵌于图表中的问题上降到约 74%。在阅读之前，你认为是什么造成了这种“多模态干扰” — 而你能想到一个不涉及重新训练模型的解决办法吗？
- 你很可能已经用人工智能工具生成过文本与图像。你有没有发现“为图片而提示”与为文本而提示不同？学生把抽象想法转译为精确视觉提示可能需要哪些技能？
- 多模态人工智能可以评论文文、生成带音频旁白的反馈，甚至从图文题中重建考试题目统计量。从纯文本到多模态评估信号的转变，对[[bias-mitigation|公平性]]与效度意味着（或冒了）什么？
- 人工智能支持恰恰在那些建立深层[[stem-education|STEM]]理解的图表密集问题上较不可靠，这一事实如何可能在学习者之间造成[[equity-in-ai-education|公平]]差距？谁受影响最大？
- 多模态系统可以把文本译为音频或视觉以支持包容性学习，但它们也促成细粒度的课堂感知。有帮助的多模态可达与监控之间的界线在哪里？

## 引言

人工智能中的多模态指跨不同表征形式而非仅文本工作的能力。现代[[generative-ai]]与[[llm]]系统日益接受并产出图像、音频与视频，为教育开启新可能与新风险。扎根于社会符号学理论 — 它认为意义跨模态而制，不只是词语 — 多模态人工智能改变了[[teacher-role|教学]]、学习与评估如何被设计与评价。（[[multimodal-learning-genai]]）

## 教育中多模态人工智能的三副面孔

### 1. 多模态学习与内容创作

多模态人工智能使学习者能跨文本、图像、音频与视频产出并参与内容。一份关于用生成式人工智能进行多模态学习的教育者指南把这些工具定位为“赛博社会”伙伴：它们补充 — 但不能取代 — 人类的意义建构。（[[multimodal-learning-genai]]）

- **多模态情境中的[[ai-literacy|人工智能素养]]**是分层的：对多模态平台的基本觉察、中间的共创与对输出的[[critical-thinking|批判性评价]]，以及对多模态活动与评估的高级设计。（[[multimodal-learning-genai]]）
- **多模态提示**本身是一项要求很高的认识论实践。为图像与文本都进行提示的学生发现，“为文本提示与为图片提示之间的提示素养是不同的” — 把抽象意义转译为机器可读的多模态提示，需要精确的视觉词汇，并暴露系统局限与偏差。（[[multimodal-prompting-ai-literacy]]）
- **多模态评估**从论文转向结合文本、图像、音频与视频的制品，教育者用人工智能来[[scaffolding|搭建]]创作与反馈的支架，而非取代学习者自己的产出。（[[multimodal-learning-genai]]）
- **学习者多模态创作作为批判性思维支架带有一种权衡。** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu 等人（2027）]]表明，让小学生把书面叙事转为人工智能生成的图像与短视频，支持了解释、分析、评价与解释方面的持续增益 — 却没有支持推断。因为视觉使故事意义显性化，学生报告对仅从文本推断隐含意义的需求降低；是同侪协作而非多模态工具恢复了推断的场合。多模态人工智能作为意义建构伙伴的价值因维度而异，并取决于刻意重新引入那种外部化可能短路掉的推断性与[[self-regulated-learning|自我调节]]工作的[[learning-design|教学设计]]。
- **学习者多模态[[writing-education|创作]]作为批判性人工智能素养。** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss 等人（2026）]]分析了 22 名十一年级学生就自选的人工智能[[ethics]]议题 — 经由学校监管的笔记本电脑与电子“通行证”的监控、[[privacy|知情同意]]、惩罚性的算法指控 — 制作的 90 秒到 3 分钟视频公益广告，把它们当作经由活动图像、声音、文本与学生自己的身体创作而施行的[[ai-literacy|批判性人工智能素养]]。在全部七部影片中，伤害被描绘为从人—机器纠缠中涌现而非仅从工具涌现（一部被拟人化的“人工智能跟踪者”在七部中的三部由真人演员扮演），而 18 份单元结束回应中有 15 份说创作改变了他们对人工智能伦理的理解。作者论证，多模态制品既*展示*又*传达*批判性能力 — 生产性制品、反思与公民话语可以充当[[assessment]]证据，这是纯文本素养在结构上会漏掉的东西。

### 2. 多模态辅导与能力边界

当基于大语言模型的导师必须解决意义嵌于图形、受力图、示意图或表格中的问题时，其准确率急剧下降 — 这就是**多模态干扰效应**。（[[syal-multimodal-dialogue-stem-2026]]）

- 在 OpenStax 物理题上，纯文本准确率约 96% 降到图像密集题上的**约 74%**，这在各模型族间一致。（[[syal-multimodal-dialogue-stem-2026]]）
- **视觉处理错误** — 未能从图形或图表中提取信息 — 主导错误分类，且是最可纠正的失效模式。
- 一个简单的结构化对话干预（让模型描述它看到什么，只纠正*可观察*的误读而不泄露物理，然后重新提示）把准确率恢复到**约 95%**，且零重新训练。（[[syal-multimodal-dialogue-stem-2026]]）
- 这是一个**公平关切**：在图像密集问题上工作的学生 — 恰恰是在 STEM 中建立深层概念理解的问题 — 目前得到的人工智能支持比在纯文本练习上的学生更不可靠。
- **构建一个视觉辅助比阅读一个更难。** 在 GeoVAD-Bench 上，提供一个专家辅助图把准确率提高（+3.3 到 +7.0 分），但让模型构建自己的辅助线使差距扩大 10.0 到 13.5 分 — 两个模型的表现比完全没有视觉推理时更差（[[geovad-bench-visual-chain-of-thought-geometry-2026|Dong 等人（2026）]]）。
- **边界是一种剖面，而非一个水平 — 而艺术意象落在模型处理良好的区域之外。** [[muse-vlm-artistic-image-benchmark-2026|MUSE（Zhu 等人，2026）]]在 1,174 件委托艺术作品上以 12 项任务评价 30 个开放与专有 VLM，各维度上的能力差异比任何聚合分数所暗示的更宽：场景分类接近成熟（30 个模型中 23 个高于 75.0，中位数 81.0），而情绪检测最高只到 39.5，需要模型*阐明*其证据的开放式任务在语义相似度上得 50.90（视觉线索识别）与 49.18（情绪原因推断）。组合性与视点依赖的推理失败得最厉害 — 在基准真值未规定明确横向或纵向关系之处，90.0% 与 73.3% 的模型仍断言其一，只有 43.3% 正确把女孩置于纵深，且没有模型解决单个题目的全部三个维度。失败还会级联：一个误扎根的角色随后被一个由邻近视觉语义（蝴蝶、鸟）构建的流畅理由所论证 — 这是辅导中最危险的结局，因为解释读起来像是有能力的。对基于图像的[[language-learning|语言学习]]，这主张对课程实际使用的意象做维度级验证，而非引入一个通用的多模态分数，并把下述 grounding 检查点延伸到[[situated-learning|情境化的]]艺术内容（[[muse-vlm-artistic-image-benchmark-2026]]）。

实际的设计含义是在多模态辅导中设置一个**视觉 grounding 检查点**：一个刻意步骤，系统在尝试求解之前先描述它看到什么，使学生或人类监督者有机会纠正感知错误。（[[syal-multimodal-dialogue-stem-2026]]）

[[ai-assisted-physics-lab-report-assessment-2026|Abreu 等人（2026）]]补充了一个先决约束：一个公式、图形或单位可能出现在报告中却从未从处理过的文档中被检索出来，因此与教师的分歧可能是提取失败而非推理失败 — 这使提交格式成为评估设计的一部分。

### 3. 多模态评估与测量

多模态人工智能同时拓宽了评估的*内容*与用于打分的*信号*。

- **多模态反馈系统**整合结构化文本、幻灯片引用与流式音频旁白。在一项研究中，[[ai-feedback-quality|人工智能多模态反馈]]在学习上与教育者反馈相当，而在学生感知上*显著优于*它。（[[multimodal-ai-feedback-learning]]）
- **多模态项目反应估计**使用微调的多模态大语言模型，直接从图文题上预测的选项概率重建项目特征曲线（IRT / 3PL），把多模态人工智能连接到[[educational-measurement]]与[[item-response-theory]]。（[[multimodal-item-parameter-estimation-2026]]）
- **教育视觉语言模型评价**与[[mllm-scientific-visualization-literacy|多模态大语言模型素养]]把该领域的评价工具包延伸到多模态推理与[[visualization]]。（[[drawedumath-vlm-struggling-students-2026]]）（[[mllm-scientific-visualization-literacy]]）
- **多模态对手写[[chemistry-education|化学]]的评分暴露了一种格式依赖的能力边界：** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros 与 Kortemeyer]]用一个多模态推理大语言模型，对照评分规则图像逐页评阅 296 名学生的一份手写普通化学期末卷，文本答案与化学反应方程评分可靠（归一化 F1 最高），但绘图与作图*比随机还差* — 背景网格在视觉上分散人工智能视觉，而科学图示/化学结构仍难解释 — 这强化了多模态人工智能的视觉对表征密集的工作并不稳健，最好配以对图形题的[[human-in-the-loop-ai|人工让渡]]来部署（[[cvengros-grading-handwritten-chemistry-ai-2026]]）。
- **构念识别与比较判断是可分离的技能。** [[cfes-p24-multimodal-slide-auditing-2026|Ma 等人（2026）]]把六项多媒体学习原则表达为可逆的幻灯片编辑加上视觉等价的假对照，发现两个模型都恢复了每一个操作、原则与修复（8/8），而严重度校准完全失败（0/8） — 一个合成分数会掩盖是哪一层失败。
- **公平增益可以被验证到存在。** 一个多模态注意力估计器只以微弱优势胜过纯视觉基线，而其针对性别的 MAE 差距正则化器把验证差距从 0.02 切到 0.005，却在留出被试上加大了差距与最差组误差 — 因此需要子群感知的、被试级重复的验证才能在部署前可信（[[student-attention-estimation-fairness-2026|Fragkiadakis 等人（2026）]]）。
- **多模态评分可以在题目级评分滞后之处复现一种选拔结果。** 对 10,364 页手写奥林匹克与大学试卷评分时，一个大语言模型与阅卷人总分在 r = 0.93–0.96 上匹配，并把同样五名学生放进奥林匹克队，而部分一致只达到 70%：是第二读者证据，而非一个记录在案的评分者（[[ai-grading-handwritten-physics-2026|Pathak 等人（2026）]]）。
- **图表生成是一个能力前沿，而非已解决的问题。** 在一个对多模态输出评分的 15,246 题物理基准上，合成或编辑结构化物理图被证明比答题更难，而领先模型仍低于 70% 的严格掌握 — 证据表明视觉*生产*落后于视觉*理解*（[[omniphys-multimodal-physics-benchmark-2026|Chen 等人（2026）]]）。

## 用于语言与无障碍学习的多模态人工智能

多模态系统也扩展可达与[[personalized-learning|个性化]]。人工智能引导的音频[[video-education|视频]]学习工具调整播放速度、产出多模态视频摘要，并支持发音练习。（[[ai-guided-learning-audiovideo-2026]]）多模态知识图跨图像与文本为教育任务推理，（[[multimodal-knowledge-graph-educational-reasoning]]）而多模态表征通过跨模态翻译信息（例如文本到音频或视觉）改善[[inclusive-learning]]。领域应用包括手写数学评分与诊断、（[[llm-cognitive-diagnosis-handwritten-math]]）带多模态信号的[[affective-tutoring|情感辅导]]、（[[multimodal-affective-its-presentation]]）（[[kar-mathbuddy-affective-math-tutoring-2025]]）专门领域的文本到图像学习、（[[nuclear-diffusion-text-to-image-learning-2026]]）以及隐私感知的多模态课堂感知。（[[privacy-aware-classroom-incident-recognition-2026]]）Bird（2026）演示了一种文本内部的多模态形式：把一个微调的 ELECTRA 变换器与计算语言学特征分析相融合，按英国关键阶段对英国文学分类，融合模型（F1 0.996）远超每一个单模态基线 — 证据表明结合表征形式（即使在文本之内）可以胜过单模型方法。

## 挑战与设计含义

1. **缩小多模态差距。** 多模态辅导系统应包含视觉 grounding 与结构化对话支架，而非假定视觉能力稳健。（[[syal-multimodal-dialogue-stem-2026]]）
2. **把多模态提示当作可教技能对待。** 人工智能素养课程必须处理模态特定的提示、跨模态的一致性与对多模态输出的批判性评价。（[[multimodal-prompting-ai-literacy]]）
3. **保全人类的意义建构。** 多模态人工智能应当增强而非取代学习者自己对跨模态意义的建构与评价。（[[multimodal-learning-genai]]）
4. **把评价延伸到多模态效度。** 当人工智能给多模态制品评分或生成它们时，必须检视[[assessment-validity|评估效度]]、偏差与可靠性。（[[multimodal-item-parameter-estimation-2026]]）（[[ai-ed-evaluation]]）
5. **留意公平与隐私。** 图像密集问题上不可靠的支持与多模态感知的数据需求，都带有公平与隐私含义。（[[syal-multimodal-dialogue-stem-2026]]）（[[privacy-aware-classroom-incident-recognition-2026]]）
6. **把流水线匹配到内容。** 一个网络安全实验室助手的多模态大语言模型更好地处理了密集视觉幻灯片，而一个 OCR 加大语言模型流水线在以文本为中心的幻灯片上提供了可比的指导价值，计算成本却显著更低。（[[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel 等人（2025）]]）

## 关联概念

- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — 总括：人工智能技术与技术手段（模型、大语言模型训练、机器人、RAG、代理式）
- [[virtual-and-augmented-reality]] — 手势、语音与空间输入作为学习渠道
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]

## 关联文章

- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — 以视频公益广告创作作为批判性人工智能素养教学法（Burriss 等人 2026）
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — VLM 在手写学生数学作业上的表现（DrawEduMath，Lucy 等人 2026）
- [[multimodal-learning-genai]] — 用生成式人工智能进行多模态学习的教育者指南（MMLD-AI 模型）
- [[syal-multimodal-dialogue-stem-2026]] — 多模态干扰效应与 STEM 中的结构化对话恢复
- [[multimodal-ai-feedback-learning]] — 多模态人工智能反馈在学习上匹敌教育者、在感知上超过
- [[multimodal-prompting-ai-literacy]] — 学生的多模态提示作为人工智能素养中的认识论工作
- [[multimodal-item-parameter-estimation-2026]] — 用多模态大语言模型估计 IRT 项目参数
- [[ai-guided-learning-audiovideo-2026]] — 人工智能引导的音频—视频学习支持
- [[multimodal-knowledge-graph-educational-reasoning]] — 用于教育推理的多模态知识图
- [[mllm-scientific-visualization-literacy]] — 面向科学可视化的多模态大语言模型素养
- [[multimodal-affective-its-presentation]] — 情感智能辅导系统中的多模态信号
- [[kar-mathbuddy-affective-math-tutoring-2025]] — 情感多模态数学辅导
- [[llm-cognitive-diagnosis-handwritten-math]] — 对手写数学的大语言模型认知诊断
- [[nuclear-diffusion-text-to-image-learning-2026]] — 核工程教育中的文本到图像学习
- [[privacy-aware-classroom-incident-recognition-2026]] — 隐私感知的多模态课堂感知
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — 网络安全教育中的多模态 OCR 指导
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[ai-grading-handwritten-physics-2026]] — 手写物理评估的人工智能评分（奥林匹克）
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — 小学写作中的多模态人工智能创作与批判性思维（Lu 等人 2027）
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 1,174 件艺术品上的 12 项任务显示 VLM 能力是一种维度特定的剖面，在情感解释与视点依赖的空间推理中最弱（Zhu 等人 2026）
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
