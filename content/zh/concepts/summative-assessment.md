---
title: 终结性评价
created: "2026-08-19T17:30:00-04:00"
updated: "2026-10-09T18:58:14-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
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

> **终结性评价（summative assessment）** — 用于在一个单元、课程或项目结束时评价并认证学习者学到了什么的评价，相对于在教学过程中支持学习的[[formative-assessment|形成性评价]]。终结性评价通常采取高风险考试的形式——笔试、口试、监考式或闭卷——用以给分、把关进阶并认证能力。在 AI 时代，终结性评价已成为[[academic-integrity]]与效度的核心战场：[[generative-ai|生成式 AI]]能抬高未监考或居家任务上的表现，使终结性形式的选择——以及它如何抵抗 AI 替代——成为枢纽性的设计决策。

## 值得思考的问题

- 终结性评价在课程结束时认证学生学到了什么，而形成性评价在过程中支持学习。你在哪里见过这两者的界线变模糊？它们功能不同，为什么这一点要紧？
- 本页把生成式 AI 框定为同时朝两个方向重塑终结性评价：AI 给考试评分，而学生用 AI 逃避基于考试的测量。你认为这两种压力中哪一种对效度的威胁更大，为什么？
- 如果未监考或居家任务因为 AI 能给出答案而失去效度，这对评价应当如何设计意味着什么——在这个过程中什么可能被牺牲掉？
- 本页引用的[[research-methods-aied|研究]]发现 LLM 评分作文的方式与人类不同。如果自动评分快而一致，但打分方式不同，那是一个[[bias-mitigation|公平]]问题、一个机会，还是两者都是？
- 如果背后的工作本可以由 AI 产出，一个高风险结果（分数、证书、录取）意味着什么？你会怎样设计一个你真能信任的评价？

## 引言

终结性评价的功能与形成性评价根本不同：它测量并认证成就，而不是指引下一步。它包括单元末测试、期末考试、标准化与高风险测试（如入学考试）、口头答辩和累积性表现评价。因为终结性结果带有真实后果（分数、进阶、证书、大学录取），它们在 AI 时代面临特殊压力——既作为自动评分的*对象*，又作为学生可能试图用生成式 AI 钻空子的*脆弱*测量。

## AI 时代的利害：效度与诚信

本知识库的研究记录了生成式 AI 如何从根本上朝两个方向重塑了终结性评价的图景：AI 被用来大规模**给**考试**评分**，而 AI 也可能被学生用来**逃避**对其自身学习的考试式测量。

- **AI 作为评分者。** 终结性评价越来越依赖对考试、论文和简答题的[[automated-assessment|自动评分]]。[[llms-do-not-grade-essays-like-humans-2026|关于 LLM 作文评分的研究]]发现[[llm|LLM]]评分作文的方式与人类不同，给高风险自动评分带来效度与公平问题。[[llm-automated-assessment-student-self-explanations|LLM 评价学生自我解释]]和[[cong-confidence-asag-2026|自动简答评分]]探讨 LLM 评分在终结性情境中的可靠性，而[[psyscore-essay-scoring-zpd-feedback|心理测量觉知框架]]力求让自动评分可信且自适应。一场 296 人的手写普通化学考试说明了为什么需要选择性的人工把关：一个多模态 LLM 的总分与助教评分一致性很高（R² = 0.91），但题目级可靠性随题型剧烈变化，且误报（AI 给真正错误的答案加分）往往无人察觉，因为学生很少申诉——所以一刀切地"全都让 AI 评分"在高风险使用中站不住脚，必须有基于信心的暂缓人工复核机制（[[cvengros-grading-handwritten-chemistry-ai-2026]]）。
- **结果一致性可以在题目评分不精确的情况下存活。** 对照经审校的官方分数，一个给 10,364 页手写物理奥林匹克和大学试卷打分的多模态 LLM，相关达 r = 0.93–0.96，并找回了同一支五人国际队，尽管题目分部的精确一致率只到 70%——评分者要由它所支持的那些决策来评判（[[ai-grading-handwritten-physics-2026|Pathak 等（2026）]]）。
- **AI 作为逃避手段。** 因为生成式 AI 能给出书面问题的答案，未监考和居家的终结性任务失去效度：[[generative-ai-reduced-study-time-math|监考且无辅助的测量是必需的]]，因为未监考的表现被 AI 抬高，而[[generative-ai-guardrails-harm-learning|有护栏（给提示而非给答案）的工具]]可以消除不受约束的 AI 造成的考试惩罚。[[chirikov-ai-grade-inflation-2026|Chirikov（2026）]]对 500,000+ 个成绩的准实验让这一机制变得具体：ChatGPT 发布后，AI 暴露任务更多的课程中 A 级成绩占比上升 13 个百分点，且效应集中在**作业密集的课程**（三重差分估计中再加 16 pp）——这是直接证据：AI 抬高终结性结果的，是未监考的作业，而非真正的[[learning-gains|学习增益]]。
- **AI 生成的考试。**[[assessing-quality-ai-generated-exams-field-2025|一项大规模现场研究]]和[[ai-vs-human-assessment-efl-tpck-2026|EFL 评价研究]]考察 AI 能否*生成*高质量考试和评价任务——这是 AI 在新兴的终结性设计中的用途。

## 抗 AI 的终结性形式

本知识库的一个关键主题是**终结性形式决定抗 AI 性**——任务越要求现场的、面对面的、被逐一追问的表现，学生就越难用 AI 替代自己的学习。

- **口试与口头评价。**[[fenton-oral-exams-ai-authentic-assessment-2025|Fenton（2025）]]论证口试是一种低技术、天生抗 AI 的终结性形式：它实时的、互动式的对话测试理解、[[critical-thinking|批判性思维]]和推理而非记忆，阻止学生用 AI 生成并背诵答案，并呼应专业实践。[[socratic-tests-conversational-assessment|苏格拉底式测验]]和[[code-review-genai-cs1|代码评审访谈]]把它延伸到动态、对话式和访谈式的终结性评价。
- **闭卷、监考、无辅助的测量。**[[generative-ai-reduced-study-time-math|证据]]和[[stromberg-generative-ai-learning-penalty-secondary-2026|大规模现场数据]]显示，在学生使用 AI 时，监考的闭卷考试——而非被抬高的作业或居家作业——才是真实学习的可靠信号。[[responsible-assessment-ai-era-stanford-2026|负责任评价]]框架把这些无辅助测量嵌入以效度驱动的重新设计之中。考试留在线上时，[[remote-proctoring|远程监考]]接替这一角色，而本语料库对自动监考的两篇综述发现了隐私和[[bias-mitigation|公平]]关切与检测收益并存（[[automated-online-exam-proctoring-decade-review-2026]]、[[academic-dishonesty-automated-proctoring-ai-2026]]）。
- **把一个脆弱任务与一个确认性孪生任务配对。**[[roe-assessment-twins-2026|Roe、Perkins 与 Giray（2026）]]保留一个 GenAI 脆弱的任务以保其学习价值，但给它配上一个评价同样结果的第二个任务，通过确认阈值或权重使分数相互依赖，让孪生任务为结果作认证。

## 高风险与标准化的终结性评价

高风险终结性评价——入学考试、标准化测试和认证——承载着超比例的后果，是 AI 时代关切的焦点。[[stromberg-generative-ai-learning-penalty-secondary-2026|生成式 AI 学习惩罚研究]]测量了高中（中考）和大学（高考）入学考试上的结果，发现长期使用 AI 后入学考试成绩下降 18–24%。[[brcic-effortless-trap-productive-struggle-2026|Effortless Trap]]和[[genai-performance-vs-learning|表现对学习的研究]]警告说，AI 辅助任务上的增益不会迁移到无辅助的高风险测量上。

## AI 时代的终结性对形成性

本知识库的评价文献一贯强调，[[assessment]]在结合[[formative-assessment|形成性]]与终结性功能时最有效——但 AI 时代加剧了这一区分。因为 AI 抬高了低利害、未监考、过程隐藏任务上的表现，**终结性（尤其监考/闭卷/面对面）的测量成为学习是否真正发生的关键检查**。这推动了这样的评价重新设计：保留真实的、抗 AI 的终结性任务（口试、代码评审访谈、监考考试、基于过程的[[eportfolio|作品集]]）作为[[academic-integrity|诚信]]的锚，同时用形成性评价沿途支持学习。参见[[authentic-assessment]]了解建设性的设计回应。

## 对教育中 AI 的启示

- **终结性形式是一个效度与诚信的杠杆：**抗 AI 的终结性形式（口试、监考、闭卷、面对面）保全了被评价表现与真实学习之间的联系。
- **监考/无辅助测量是可靠的信号：**在学生使用 AI 时，无辅助的终结性考试——而非作业——揭示真实的学习。
- **自动评分需要心理测量上的审视：**用 LLM 给高风险考试评分，需要评价其信度、公平和效度，而不只是准确率。
评分误差还依分数段而不同：在 32 份公共卫生考试提交中，LLM 避开了量尺两端——快速模式下没有出现 E 或 F——而最好的模型在 50.0% 的提交上与人工分数完全一致，在 90.6% 上落在 ±1 个等级内（[[llm-grading-assistants-public-health-2026|Brevik 等（2026）]]）。
- **AI 也能生成考试：**AI 辅助的考试与任务生成是一个新兴的终结性设计应用，本身也需要质量评价。
- **重新考虑给分的目的，而不只是形式。**[[mesny-innovative-assessment-grading-management-2026|Mesny、Roberge-Maltais 与 Galy（2026）]]批评传统的、常模参照的终结性给分，认为它鼓励肤浅、碎片化的学习，给学生很少的控制与透明，损害内在[[motivation]]，助长压力和[[well-being|焦虑]]，并延续不平等，同时在很大程度上只评价记忆而非真实世界应用。他们把重评、[[mastery-learning|标准本位给分]]和不给分，定位为可以软化终结性主导实践的、聚焦给分的创新，同时承认这些在管理教育中仍属边缘，因为存在规范性障碍——按曲线给分、外部信号（排名、实习、认证）和学生的工具性心态——并建议在机构支持下逐步试验。

## 关联概念

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## 关联文章
- [[llm-grading-assistants-public-health-2026]] — LLM 评分者压缩分数量尺并在高风险论文评价中避开两端

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 重新把口试视为真实的、抗 AI 的终结性评价
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 生成式 AI 的学习惩罚：监考/闭卷考试证据
- [[chirikov-ai-grade-inflation-2026]] — AI 任务置换作为分数通胀的机制；作业密集的课程（Chirikov 2026）
- [[generative-ai-reduced-study-time-math]] — 完成更快，学得更少：监考测量必不可少
- [[generative-ai-guardrails-harm-learning]] — 没有护栏的生成式 AI 损害学习
- [[assessing-quality-ai-generated-exams-field-2025]] — 评价 AI 生成考试的质量
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM 评分作文的方式与人类不同
- [[llm-automated-assessment-student-self-explanations]] — 用于学生自我解释自动评价的 LLM
- [[cong-confidence-asag-2026]] — 自动简答评分
- [[psyscore-essay-scoring-zpd-feedback]] — 心理测量觉知的特质自适应论文评分
- [[socratic-tests-conversational-assessment]] — 苏格拉底式测验：动态、对话式、多模态的评价
- [[code-review-genai-cs1]] — CS1 中的代码评审访谈
- [[responsible-assessment-ai-era-stanford-2026]] — AI 时代的负责任评价
- [[test-driven-ai-assisted-learning]] — 测试驱动的 AI 辅助学习
- [[genai-oop-programming-assessments-2026]] — GenAI 在面向对象编程评估上的表现
- [[brcic-effortless-trap-productive-struggle-2026]] — Effortless Trap：有益挣扎与学习幻觉
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI 生成对人工开发的 EFL 评价任务
- [[roe-assessment-twins-2026]] — GenAI 时代强化评价效度的评价孪生（Roe、Perkins & Giray 2026）
- [[ai-grading-handwritten-physics-2026]] — 手写物理评价的 AI 评分（奥林匹克）
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
