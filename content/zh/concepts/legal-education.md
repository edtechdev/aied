---
title: "法律教育"
created: "2026-09-18T05:10:00-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
foundations: [academic-integrity, critical-thinking, reducing-ai-misuse]
pedagogy: [career-development-and-readiness, experiential-learning, professional-training, socratic-method]
technology: [generative-ai, llm]
assessment: [assessment-validity, authentic-assessment]
institutions: [educational-policy-ai, governance]
ethics: [ai-use-disclosure, ethics]
discipline: [legal education]
level: [higher ed]
audience: [instructors, curriculum designers, administrators, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-education
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

> **法律教育** —— 律师的职业准备，也是[[generative-ai|生成式 AI]]对每个项目都面临的那个问题提出最强版本的学科：法学院任务上的辅助表现，能否作为执业执照所依赖的那种分析的证据。它的结构不寻常。在美国，[[governance]]对[[curriculum-design|课程]]的治理经由 ABA 认证与执照[[summative-assessment|考试]]，而非某部部颁教学大纲；教学倚重案例法与[[socratic-method|苏格拉底式]]对话，而这要求学生自己完成预习阅读；诊所与法律写作课承担了[[experiential-learning|体验式]]的分量；而学生将来受其约束的职业行为规则，已经适用于他们正被教会使用的工具。AI 通过法律研究平台、起草支持、假设情境生成与律师资格考试备考进入；它标志性的失败不是打错分数，而是伪造的引注。

## 值得思考的问题

- 如果一名学生用 AI 助手做了案例简报，却无法在没有帮助的情况下复现推理，那么[[socratic-method|苏格拉底式]]课堂一直在评价的究竟是什么——那份预习，还是产出它的工具？
- 法学院被要求治理 AI，而它所输送的行业尚未确定合法的 AI 辅助执业是什么样子。法律教育应当跟随律师界，还是引领它？
- 关于这个问题，法律教育的政策文件多于实证研究。一个教证据法的学科，被要求为自身 AI 采纳提供更好的证据，这是否反而处于异常有利的位置？

## 引言

法律教育为一项持证职业培养学生，该职业有自己的行为规则、自己的认证机构与自己的准入考试，这使它成为知识库中[[educational-policy-ai|教育政策]]、专业[[regulation]]与评价效度交汇得最紧的学科。它与[[medical-education|医学与健康专业教育]]、[[nursing-education|护理教育]]并列，同为[[professional-training]]这一学科门类而非学校科目，但它的区别性特征是程序性的：法学院必须决定的很多东西，不是*如何*用 AI 教学，而是*专业伦理规则对一个将用 AI 执业的毕业生要求了什么*。

证据基础目前薄弱且以政策为主。有一篇实质性的文章支撑本页：[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski 与 Hurley（2025）]]调查并比较了 ABA 认可的美国法学院的机构性生成式 AI 政策，并提出了一个治理框架。这种不平衡本身就是一个发现，本页如实指出它，而不是粉饰。

## AI 如何出现在法律教育中

- **法律研究。** Lexis+ AI 与 Westlaw Precision with CoCounsel 等商业平台，把生成式功能嵌入学生已在受训的工具中，这使"AI 使用"难以与普通的数据库检索区分开。Gutowski 与 Hurley 指出，这一熟悉的既有工作流被压缩了多少：从数小时缩短到数分钟即可识别权威来源与二手资料。
- **起草与写作支持。** 初始案例简报、提纲、备忘录、第一遍综合，以及关于清晰度与语法的句级反馈。作者把 AI 生成的作品置于与律师助理或初级律师所作工作相同的督导关系之下：律师仍要为其准确性与法律充分性负责。
- **学习与律师资格考试备考。** 为限时练习生成练习题、事实模式与"假设情境"，并就反复出现的弱点进行辅导。Gutowski 与 Hurley 同时给出一个观察：生成式 AI 如今既能通过律师资格考试，也能通过 Multistate Professional Responsibility Exam，他们把这解读为更多说明了最低胜任线，而非模型本身。
- **任务特定的画像，而非排行榜。** 在盲测协议下，同一批开箱即用的模型虽达到了人类律师考试水平（累计 26–79 分，满分 100），却在公证人考试上全部失败——该考试要求在严格的形式约束下进行目标导向的法律规划——且被其中刻意设置的陷阱所误导（[[llm-turing-test-italian-legal-exams-2026|Bertoli 等人（2026）]]）。
- **期刊、模拟法庭与咨询。** 筛选投稿、准备辩护，以及使用基于历年试题、参考答案与课程材料训练的自定义模型来支持学业辅导项目。
- **评价与诚信。** 反复出现的问题案例：未披露的起草、引用不存在的权威，以及不再测量无辅助分析的考试。

## 政策证据显示了什么

Gutowski 与 Hurley 用 0–5 分制量规从五个维度评估政策：**禁止性**、**许可性**、**教育整合**、**透明与问责**与**深度**。他们的普查发现，多数法学院采取了总体禁止的立场，常被解释为争取时间以研究这项技术，而几乎所有政策都保留了对个体教师的酌处空间。许可性与禁止性评分如预期呈负相关，而作者报告不存在单一公认的做法：政策从全面的治理到完全没有明文政策都有。

他们还记录了该行业证据之单薄。ABA 2024 年 AI 与法律教育调查只收到 29 所法学院的回覆，约占 ABA 认可法学院总数的 15%，因此很难被视为有代表性；而 LexisNexis 对 800 名法学生的调查发现，仅 9% 报告当前在学业中使用生成式 AI，25% 计划采用。作者把报告使用率低部分解读为对规则不清晰的一种反应，因为清晰会降低违规的恐惧。

另有两点塑造了他们的建议：

- **教师治理是法学院特有的复杂因素。** 法学院教师个人与集体对课程与课程标准握有异常直接的权威，因此政策必须与他们共建，而非向他们宣布。
- **临床教育提出的是一个[[pedagogy|教学法]]异议，而非技术异议。** 引用 Karr 与 Schultz，他们报告了这样一种立场：旨在模仿人类反应的 AI 工具，并不能发展出诊所旨在培养的原创判断、当事人互动与[[ethics|伦理]]决策，因此根本不应在临床课程中使用。

这些建议是程序性的：无论机构立场如何都应制定清晰全面的指引、让全部利益相关方参与起草、对学生与教师进行主动培训、实行定期复审的灵活治理，以及通过信息共享实现自我规制，而非坐等 ABA 来规定政策。

## 为何这一学科与众不同

有三件事使法律教育不只是又一个学科领域。

**评价效度与专业胜任力不可分割。** 人们担心法学院期间的[[cognitive-offloading|过度依赖]]会让毕业生对需要独立法律分析与辩护的工作准备不足，而奖励流畅产出的评分无法区分学生的理解与模型的理解。因此，[[assessment-validity|效度]]问题不是书斋里的问题。

**披露规范尚未确定，且事关重大。** Gutowski 与 Hurley 报告了关于是否必须披露任何 AI 使用的分歧、关于学生披露表的提议，以及引注实践上并无共识——Bluebook 对如何引注生成式 AI 仍保持沉默。他们还预言，披露要求终将显得与"注明学生用了搜索引擎"一样无意义，这是对当下正在写下的规则的有效期所作的预言。

**职业伦理随毕业生而行。** ABA 的技术胜任义务，以及关于保密、督导与对法庭坦诚的指引，适用于使用这些工具的执业律师，而法学院继承了教它们的职责。这就是为什么该学科直接连通知识库中关于[[ai-use-disclosure|AI 使用披露]]以及关于[[legal-issues-and-risks|法律问题与风险]]的工作——后者出现在机构治理 AI 不当时。

## 开放问题

- AI 辅助的法律写作课程作业，是否仍在培养执照所假定的那种分析，还是在训练一种律师考试同样检测不出的流畅？
- 如果预习阅读被例行地委派出去，苏格拉底式教学会发生什么？课堂对此的沉默是一个测量问题，还是一个设计问题？
- 法律教育培养的正是将来就[[ai-education|教育中的 AI]]提起诉讼与制定规则的人。这使它成为检验知识库法律风险工作的自然场所，还是会把注意力引向政策声量最大的那几所法学院？

## 关联概念

- [[academic-integrity]] — 适用于辅助性工作的行为框架
- [[assessment-validity]] — 辅助表现是否测量了预期的胜任力
- [[authentic-assessment]] — 要求无辅助分析的设计
- [[ai-use-disclosure]] — 尚无共识的署名与报告规范
- [[governance]] — 法学院实践中的教师治理与政策制定
- [[educational-policy-ai]] — 作为研究对象的机构 AI 政策
- [[critical-thinking]] — 案例法意在培养的推理
- [[socratic-method]] — 依赖学生预习的对话
- [[experiential-learning]] — 诊所与实践性训练
- [[professional-training]] — 持证职业的更大族群
- [[career-development-and-readiness]] — 执业就绪作为明示的目的
- [[ai-literacy]] — 技术胜任作为专业义务
- [[hallucination-risk]] — 伪造引注作为该领域的标志性失败
- [[legal-issues-and-risks]] — 治理失败时机构面临什么

## 关联文章

- [[gutowski-hurley-genai-policy-legal-education-2025]] — 法学院生成式 AI 政策的五因素比较与一个治理框架
- [[llm-turing-test-italian-legal-exams-2026]] — 对意大利律师、法官与公证人考试的盲测图灵测试，以专家评分作为基准
