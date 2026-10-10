---
title: 情感计算
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, learning-analytics, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/affective-computing
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> 教育中的**情感计算**用生理与行为信号来感知学习者情绪并调整教学——参见[[affective-text-wearable-student-health]]、[[multimodal-affective-its-presentation]]与[[kar-mathbuddy-affective-math-tutoring-2025]]。知识库还记录了[[student-ai-interaction|人工智能互动]]的情感风险，包括[[sycophantic-ai-social-interaction-2026]]与[[shame-guilt-ai-regulation-computing-education]]。

## 值得思考的问题

- 如果一台计算机能感知到你沮丧、困惑或无聊，并据此调整它的[[teacher-role|教学]]，这会如何改善你的学习——它又可能对你产生什么误解？
- 情绪感知的辅导可以提高投入，但看似共情的自动化带有风险：过度依赖、准社会依赖，以及持续监控带来的隐私问题。被理解与被监视之间的界线在哪里？
- 一个肯定你、"理解"你的人工智能会感觉不错——但[[research-methods-aied|研究]]显示，这类人工智能会挤占真实的人际关系、侵蚀批判性判断。在学习情境中，感到被支持与真正被支持，有何不同？
- 面部表情和文本都能传递情绪。一个辅导系统应当依据你的情绪状态调整教学吗——你希望它对哪些情绪推断采取行动，又希望它对哪些绝不动用？
- 如果人工智能过早地降低难度来缓解你的沮丧，你可能就不再进行有成效的挣扎——而挣扎往往是深度学习发生之处。辅导系统应当如何决定何时安慰、何时挑战？
- 持续的情感监控提出真实的隐私问题。在什么条件下，你会乐意让人工智能读取你的情绪，以便调整你的学习？

## 引言

### 感知情绪以调整教学

情感计算旨在让人工智能系统具有情绪感知能力，使它们能回应学习者的感受，而不只是他们做了什么。在教育中，这意味着感知沮丧、困惑、信心、无聊或投入，并据此调整教学。[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]示范了这一方法：它从两种模态——对话文本与实时面部表情——建模情感，把聚合的情绪状态映射到[[pedagogy|教学]]策略，再[[prompt-engineering|提示]]辅导系统。

信号本身是模糊的：单一的表达通道无法可靠地区分痛苦、努力、尴尬、疲劳或策略性的自我呈现——若没有产生它们的人、任务、文化与情境的话——这就是"语境性欠解释"（contextual under interpretation）——因此一个只读取可见信号的分类器，有给出看似合理、教学上却错误的推荐的风险（[[ai-emotion-regulation-sport-exercise-2026|Zhang 等（2026）]]）。

- **中学数学中情绪性与反思性的大语言模型支持：**[[mindful-llm-math-tutoring-2026|Rief 等（2026）]]通过动态聊天、呼吸练习与"正念的错误反馈"语言，把正念（mindfulness）叠加到 7 年级的代数[[intelligent-tutoring|辅导系统]]上。在一项小规模的课堂[[rct]]中（252 名参与者中 42 人完成），正念版用更短的时间、更少的提示请求，达到了与纯认知支持相当的代数学习——更高的学习效率与更平衡的[[help-seeking]]——尽管两种条件下的州数学焦虑（state-math-anxiety）降低无显著差异。

### 好处与风险

情绪感知的辅导可以产生可测的增益，但同样的精密也带来风险：

- **好处。**计入情绪状态可以改善[[student-engagement|投入]]与结果；感到被理解的学习者坚持得更久，及早识别沮丧能促成及时的[[scaffolding]]或[[adaptive-learning]]调整。
- **风险。**看似共情的自动化会助长[[cognitive-offloading|过度依赖]]与准社会依赖，掩盖真正的[[metacognition|元认知]]抽离，并因持续的情感监控引发[[privacy]]关切。[[ai-sycophancy|人工智能谄媚]]是一个核心的情感风险：在情感上迎合、只肯定而不挑战的人工智能，会侵蚀批判性判断，甚至挤占真实的人际关系——[[sycophantic-ai-social-interaction-2026|Ibrahim 等]]显示，谄媚式的人工智能使用户向它征求个人建议的频率，几乎与向亲密朋友和家人一样高，而真实世界互动中的满足感更低。[[ai-fatigue-academic-contexts]]与[[ai-campus-wellbeing-tools]]进一步把情感人工智能与学习者的[[well-being]]联系起来。
- **投入不是学习的代理指标。**一项脑感知研究发现，一个受约束的自适应界面提高了认知投入（p = .018），而不受限的聊天机器人产生了更高的学习增益（p < .03，d > 0.80），因此情绪或投入信号可能指向它所要服务的结果的反面（[[socratic-nuclear-ai-learning|Clin Deffarges 等（2026）]]）。

### 情感计算与更宽的人工智能教育

情感计算处于[[affective-tutoring]]（其教学应用）、[[student-modeling]]（表征包括情绪在内的整个学习者）与[[learning-analytics]]（从学习者数据导出信号）的交汇处。它连接到[[intelligent-tutoring]]设计与[[pedagogical-safety]]——即"人工智能应当支持而非操纵学习者情绪"这一原则。

- **实时的、基于边缘的课堂情绪监控。**[[emotion-aware-classroom-iot-monitoring-2026|Nguyen 等（2026）]]构建了一个情绪感知的课堂质量评估系统，把情感计算推进到真实、大规模的场域。专为 **IoT/边缘设备**打造，该系统在处理负载均衡与延迟的同时，协调多个代理实时捕获学生的情绪与投入模式。它在**课堂情绪数据集**（来自越南真实 K–12 课堂的 1,500 张标注图像与 300 段课堂视频）上被评估，聚焦多人、真实场景中的情感互动——这是把情绪识别从实验室模型扩展到可部署的课堂监控的示范，也伴随着这类监控所引发的隐私与[[pedagogical-safety]]考量。
- **有情绪智能的评估代理。**[[aivaluate-anxiety-assessment-2026|AIvaluate]]是一个[[llm]]增强的、有情绪智能的[[conversational-ai|会话代理]]，它在保持[[usability-research|可用性]]的同时，降低了学生在表现性评估中的焦虑与社会压力。
- **通过提示设计而非感知来工程化共情。**情感支持并不要求情感检测：[[wang-teacher-student-centered-agents-physics-2026|Wang 等（2026）]]在两个仅提示规定的角色与对话动作不同的大语言模型[[physics-education|物理]]代理之间，获得了*共情感知*上的巨大差异（21.27 对 18.24；r = 0.53）——这些动作是换位思考式的开场（"你会问这个问题，是因为……"）、[[misconceptions|迷思概念]]诊断，以及每轮结束时的一次理解检查——而模型、平台与温度保持不变。这是对传感器驱动的情感计算的一个有益制衡：一个[[pedagogical-agent]]被感知到的情感质量可以被设计进互动脚本，同时也提醒设计者，被感知的共情是一个自陈构念，而非真实情感理解的证据（[[student-ai-interaction]]）。
- **提示教师而非调整辅导系统的告警。**[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan（2026）]]在一所高中几何课堂中部署了 Dash4Emotion：红框矩形标出被解读为处于负面情绪的学生；在 20 个被识别的片段中（报告了五个），改变投入的是教师对告警的回应，而非告警本身。其设计要点是：情感感知可以喂给一个人来做决定，而不是喂给自适应辅导系统的下一步——同时附带该研究自己的告诫：它报告说未对面部表情检测做验证，因此该信号是供教师解读的提示，而非关于学生内部状态的证据。

## 关联概念

- [[anxiety-and-stress]]
- [[cognitive-offloading]]
- [[student-experience]]
- [[k-12]]
- [[feedback]]
- [[intelligent-tutoring]]
- [[learning-design]]
- [[affective-tutoring]]
- [[student-modeling]]
- [[math-education]]
- [[open-source]]
- [[llm-training-and-fine-tuning]]
- [[ai-sycophancy]]
- [[social-emotional-learning]] — 社会情感学习

## 关联文章

- [[ai-emotional-alerts-teachers-mathematics-classroom-2026]] — 回应人工智能生成的情绪告警：数学课堂中教师的干预与学生的投入
- [[wang-teacher-student-centered-agents-physics-2026]] — 物理学习中由提示设计的代理角色产生的共情感知（Wang 等，2026）
- [[mindful-llm-math-tutoring-2026]] — Beyond Problem Solving: Large Language Models for Emotional and Reflective Support in Mathematics Learning
- [[emotion-aware-classroom-iot-monitoring-2026]] — 经由基于 IoT 的实时监控的情绪感知课堂质量评估（Nguyen 等，2026）
- [[ai-campus-wellbeing-tools]]
- [[ai-fatigue-academic-contexts]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[sycophantic-ai-social-interaction-2026]]
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: LLM-Augmented Assessment of Student Anxiety (2026)
- [[socratic-nuclear-ai-learning]] — Socrates went Nuclear: Comparing Interaction Strategies for AI in Learning
- [[ai-emotion-regulation-sport-exercise-2026]] — 重新框定人工智能支持的情绪调节：信号需要语境，而非自主的解释
