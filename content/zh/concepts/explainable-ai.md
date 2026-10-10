---
title: 可解释 AI
created: "2026-09-07T10:15:00-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
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

> **教育中的可解释 AI（XAI）** 指的是让 AI 系统的决策对其教育利益相关者——[[learners]]、教师、[[administrator|管理者]]、[[parents-and-families|家长]]、研究者，以及[[stakeholders|政策制定者]]——变得可理解的设计与研究。该领域坚持的核心区分是：解释**学科知识**（为什么一个事实为真）与解释**AI 系统的决策**（为什么这位学习者被分配了这项活动、为什么这个回答被判为错误、有什么证据支持一项风险预测）并不是同一回事。教育带来独特的可解释性需求——嘈杂的学习数据、能够直接支持[[metacognition]]和[[self-regulated-learning]]的解释，以及需要根本不同类型的解释的利益相关者。关键的设计问题是**解释的质量**，而非仅仅是有没有解释：一个技术上存在但不可读、有误导性或与其受众错位的解释，造成的伤害可能比完全没有解释更大。

## 值得思考的问题

- 当一个[[intelligent-tutoring|AI 导师]]告诉你为什么给出某条提示时，它解释的是*学科知识*还是*系统的决策*？在你自己使用教育 AI 的经历中，你能各举出三个例子吗？
- 谁在教育中需要解释——学生、教师和政策制定者需要的是*同一种*解释吗？他们各自会用解释来做什么？
- 一个 AI 把某名学生标记为有辍学风险。[[teacher-role|教师]]需要知道什么才能据此行动，与学生需要知道的有什么不同？同一种解释对两者都合适吗？
- 本页主张，解释的*质量*比解释的*有无*更重要。一个技术上存在的解释为什么会失效——你能想到某次解释明明在、却没用、甚至更糟、有误导性的经历吗？
- [[trust-calibration|信任]]与解释相互关联，但并非同一回事。为什么一个自信、流畅的解释会对一个 flawed 的系统制造*虚假*的信心——你会如何察觉这种情况正在发生？

## 引言

可解释的[[ai-education|教育 AI]]指这样一种日益增长的期望：课堂中的 AI 系统不应是黑箱。由于教育中的 AI 影响重大决策——成绩、风险标记、[[recommender-systems-and-learning-paths|学习路径]]、资源推荐——利益相关者日益要求知道的不只是系统*得出*了什么结论，还有*为什么*。教育把这一点锐化为两个不同的问题：解释正在学习的学科知识，以及解释 AI 系统自身的决策。把两者混为一谈是一个有实际后果的范畴错误：一个把[[physics-education|物理]]答案解释得完美无缺的 AI，仍然无法让学生和教师理解*系统*为何把他们标记为高风险、为何推荐某项活动、或为何把某个回答判错。

## 解释学科知识 vs. 解释系统的决策

该领域的奠基性贡献——[[xai-education-framework|XAI-ED 框架]]（Khosravi 等人，2022）——坚持教育拥有*独特于*通用 XAI 的可解释性需求。其中最重要的一条，是两个解释对象之间的区分：

- **学科知识解释**澄清*内容*：为什么某条提示针对某个[[misconceptions|误解]]、为什么一个答案是错的、一个物理结果如何由原理推出。这些是支持[[scaffolding]]、[[feedback]]和[[metacognition]]的[[pedagogy|教学性]]解释。
- **系统决策解释**澄清*模型*：为什么这位学习者被分配了这项活动、为什么系统预测该学生处于风险之中、有什么证据支持一次知识追踪或[[learning-analytics]]预测。这些是支持[[trust-calibration]]、[[bias-mitigation]]和问责的透明性解释。

这一区分之所以重要，是因为它们服务于不同的利益相关者和不同的目的。一个追问"为什么这被判为错"的学习者，主要需要的是*学科知识*解释；而一个决定是否对风险标记采取行动的教师，或一个审查偏见政策制定者，需要的是*系统决策*解释。设计一种同时服务两者的单一解释几乎不可能——这正是多利益相关者设计成为 XAI-ED 核心主题的原因。

## 谁需要解释：多利益相关者设计

- **学习者**需要支持他们自己学习和自我调节的解释——为什么给出这条提示、为什么他们的答案被判错、为什么推荐这个资源（支持[[self-regulated-learning]]）。[[student-perspectives-ai-writing-grading-2026|学生视角的证据]]表明，学习者在接受 AI *反馈*（对修改有用）与让渡*评分权*（保留给人类教师）之间划出一条清晰的界线——这是一种经校准的、功能匹配的立场，由对 AI 参与的透明化所激活。[[ko-hughes-vsd-student-centered-its-2026|与社区学院学生的价值敏感设计研究]]把这一点说得更尖锐：学生偏好*协作式、拟人化*的解释（例如"AI 在这里可能不太确定，我们一起核对一下"），胜过原始的模型置信度或技术透明性，因为透明本身价值有限，除非它直接支持他们的学习。该研究浮现出一种透明性与可解释性之间的张力，它把解释设计推向面向学习者的语义，而不是特征重要性的输出。
- **教师**需要能指导干预的解释——哪些学生处于风险之中，以及*为什么*，依据什么证据。[[xai-teachers-trust-edtech-recommendations-2026|面向教师的可解释性研究]]显示，[[discipline-specific-aied|学科特定]]、[[curriculum-design|课程]]语言式的解释，比通用的特征重要性解释更能有效地建立接纳和经校准的信任，然而教师仍然希望先有真实的课堂经验才完全依赖——单靠解释并不能赋予[[trust-calibration|校准]]。
- **开发者与研究者**需要解释来调试模型行为并发现[[bias-mitigation|偏见]]——即浮现出是哪些特征在驱动预测。
- **管理者与政策制定者**需要解释用于问责、[[privacy]]和[[regulation]]合规（例如解释权），并审查 AI 驱动的决策是否公平、是否[[equity-in-ai-education|公正]]。

## 方法与格式

XAI-ED 框架编目了主要的解释模态：**视觉式**（热力图、决策树）、**文本式**（自然语言的理由）、**示例式**（反事实、最近邻）、**特征重要性**排序、**规则抽取**和**模型简化**。它还把方法映射到模型类别：

- **白箱**模型（决策树、线性模型、基于规则）本身即可解释。
- **黑箱**模型（[[machine-learning|神经网络]]、集成模型）需要事后解释方法。
- **玻璃箱**方法试图在准确性与透明性之间取得平衡。

具体的 AIED 证据基础横跨以上全部。**可解释的[[knowledge-tracing|知识追踪]]**让学习者知识模型可直接检视（[[huang-interpretable-knowledge-tracing-2026]]、[[explainable-probabilistic-kt]]、[[neural-symbolic-knowledge-tracing]]）。**自我解释的替代模型**把黑箱模型蒸馏成一个小的、可解释的[[llm|语言模型]]用于[[learning-analytics]]（[[distilling-self-explaining-lm-learning-analytics-2026]]）。**反事实解释**——"要得到不同结果需要改变什么"——支持教育决策支持与补救（[[sc2r-counterfactual-recourse-educational-2026]]）。**联邦化 + 可解释的学习分析**表明，即使排序稳定性保持不变，解释质量也可能漂移（校准退化），这强调解释不是固定属性，而是一个有待测量的系统输出（[[villegas-ch-federated-explainable-learning-analytics-2026]]）。而**可解释的[[affective-computing|情感]]ITS**在[[affective-tutoring|情绪感知]]辅导中展示了解释（[[multimodal-affective-its-presentation]]）。

## 解释的质量，而非有无

贯穿全部证据的一条反复出现的教训：**有解释还不够**；解释必须适合其受众、准确、并与风险水平经校准。XAI-ED 框架明确点名了若干陷阱：

- **解释过载**——信息过多让用户不堪重负，抵消了收益。
- **误导性解释**——事后解释可能并不反映模型真实的推理过程，从而制造虚假信心。
- **确认偏误**——用户选择性地关注那些印证既有信念的解释。
- **过度信任**——流畅的解释会对有缺陷的系统制造虚假信心，助长[[cognitive-offloading|过度依赖]]（[[trust-calibration]]的反面）。
- **钻系统空子**——学生可能利用解释来绕过真正的学习。

解释质量还有一个公平维度：一个技术上存在但对某个利益相关者不可读——或掩盖了预测中的[[bias-mitigation|偏见]]——的解释，就未能实现其目的。这就是为什么设计问题是*质量与契合*，也为什么以人为中心、针对具体利益相关者的解释设计与解释的技术生成密不可分。有效的 XAI 是一种为受众的认知需求而设计的沟通行为，而不只是一个技术人工物。

解释并不总是一种拉平器。在一项有 250 名七年级学生参与的 2 × 2 情境实验中，为数学分数提供的书面理由在两种条件下都提高了接受度和感知公平性，却扩大而非缩小了[[teacher-role|教师]]评分与 AI 评分之间的差距（[[decision-making-agent-student-decision-acceptance-2026|Zhang 等人（2026）]]）。

两条进一步的告诫把这一点说得更尖锐，两者都被本 wiki 关于该主题最新的贡献置于核心位置。第一，解释机制本身并不中立：LIME 和 SHAP 之类的事后方法可能对模型的实际行为不忠实，因此一个技术上存在的解释可能误导而非提供信息（[[lund-socially-accountable-data-science-xai-2026|Lund 等人 2026]]，承袭 Chuan 等人 2024）。第二，**解释不等于问责**。一份关于哪些特征驱动了预测的说明，并不能揭示这些特征是否适合使用、训练数据是否具代表性、或者系统的设计是否反映了健全的判断；解释可以制造出透明性的表象，却让产生某项决策的结构性条件原封不动（Mittelstadt 等人 2019）。对教育而言，这意味着要不断追问的问题不是有没有产生解释，而是收到解释的那个人——学生、教师、导师——能否理解它、能否据此行动、能否对背后的决定提出异议。同样的可读性失灵出现在[[automated-assessment|自动评价]]的安全侧：[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）对一个 AI 评分工具的红队测试]]发现，它在拦截一次提示注入之后静默地禁用了聊天功能，并——在宣布自己绝不会遵循嵌入指令之后——又在同一文件上于另外六次运行中遵循了它们，让用户没有任何可靠信号可供依赖。

**设计即可解释**是对事后方法不忠实问题的一种回答。[[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang 和 Fang（2025）]]用一个与决定[[assessment]]判断的融合表征和预测分数相同的表征来参数化一个解释解码器，使得[[formative-assessment|形成性]]提问上的低分能产出一份指明提问不足的理由，并配以跨课程标准与学科特定评分量规动作的双透镜注意力。注意力与量规的对齐度达到 78.0%，而 GPT-4 零样本为 41.7%、BERT 为 32.1%；忠实性则通过对量规关键片段的反事实删除，加上在量规锚定清单上的人工评分来检验，得到 0.78 的解释可信度分数——比 BERT-base 提高 0.31。审计也显示出架构主张在何处变薄：在情绪线索上，模型分配了 28.4% 的注意力权重，而专家为 15.2%（对齐度 0.53），其中一个失败案例把 28% 的权重给了 token "frustrated"，作者把这解读为对情绪的过拟合、而非教学，并列为需要改进的领域。把解释嵌入决策路径使它们比事后理由更忠实；但这并不使它们正确。

## 把可解释性作为问责实践来教

如果解释质量决定 XAI 是否有用，那么产出解释就必须作为一种职业习惯被教授，而不是作为一种能力被演示。[[lund-socially-accountable-data-science-xai-2026|Lund 及其同事（2026）]]提出围绕四大支柱来做这件事——**可回答性**（向受影响者给出理由的义务）、**责任性**（在生命周期中预期危害，而非事后辩护）、**执行性**（课程内部的后果）和**自反性**（对自身假设的成文检视）——每一根支柱都有自己的作业和自己的课堂成本。

具体到可解释性，真正起作用的作业是那些把解释逼出笔记本的：与准确性指标并列计分的模型卡，以及结构化的解释审计——学生把可解释性工具应用于自己的模型，然后把结果呈现给没有共同技术背景的受众。执行性是伦理邻近课程中最常缺失、却让其余部分不止于象征性的那一根支柱：奖励负责任文档的量规、可以因[[ethics|伦理]]理由被打回修改的项目，以及[[peer-assessment|同伴评审]]——依据问责标准而不仅是技术标准进行。论文坦率地指出，这些工具的成本差异极大：模型卡与立场声明不需要新软件，其风险只是流于表面的合规；而同伴小组和利益相关者参与需要协调和机构支持，这正是它建议分阶段采纳、而非全有或全无的原因。见[[curriculum-design]]以了解它们在课程体系中的位置。

## 关联概念
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]
## 关联文章
- [[lund-socially-accountable-data-science-xai-2026]] — 把 XAI 作为问责实践来教的四支柱框架（可回答性、责任性、执行性、自反性）（Lund 等人 2026）
- [[ko-hughes-vsd-student-centered-its-2026]] — 以学生为中心的 ITS 的价值敏感设计（协作式 vs. 原始解释）
- [[xai-education-framework]] — XAI-ED：教育中可解释 AI 的奠基性框架（Khosravi 等人 2022）
- [[xai-teachers-trust-edtech-recommendations-2026]] — 学科特定解释建立教师的信任与接纳（Feldman-Maggor 等人 2025）
- [[student-perspectives-ai-writing-grading-2026]] — 学生对透明 AI 辅助评价的视角（AlGhamdi 2026）
- [[huang-interpretable-knowledge-tracing-2026]] — 可解释的知识追踪
- [[explainable-probabilistic-kt]] — 经由概率嵌入的可解释知识追踪
- [[neural-symbolic-knowledge-tracing]] — 神经—符号知识追踪
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 把黑箱模型蒸馏为自我解释的语言模型用于学习分析
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — 用于保护隐私的风险建模的联邦化、可解释学习分析
- [[sc2r-counterfactual-recourse-educational-2026]] — 面向教育决策支持的语义约束反事实补救
- [[fair-explainable-edu-recommendations]] — 公平且可解释的教育推荐
- [[multimodal-affective-its-presentation]] — 面向多模态情感反馈的可解释闭环 ITS
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — 解释高等教育中的 ChatGPT 采纳
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — 设计即可解释的 LLM 框架：用于自动教师评价的双透镜注意力与分数参数化解释（Li 等人 2025）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — AI 中介评分中的提示注入，其检测从未被告知用户（Humble 2026）
- [[bloom-classifier-ai-assisted-questions-2026]] — 对预训练模型在新型 AI 辅助教育问题的教学性评价上的评估

- [[decision-making-agent-student-decision-acceptance-2026]] — 教师评分与 AI 评分的决策：一份书面理由扩大了公平性差距
## Citation

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
