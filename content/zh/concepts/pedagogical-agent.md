---
title: 教学智能体
created: "2026-08-08T11:47:01-04:00"
updated: "2026-10-09T18:58:09-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
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

> **综合**：[[pedagogy|教学性]]智能体是嵌入学习环境、由AI驱动的对话界面，它们运用教学策略（引出、告知、支架）来支持[[student-engagement|学习者参与]]、反思与元认知。其设计从简单的信息提供者，到能适配学习者状态的互动式对话伙伴，各不相同。

## 值得思考的问题

- 回想一次聊天机器人或导学系统给你一个完美答案，却未能让你更有所得的经历。是什么让AI"教"而非仅仅"解"？为什么基准分数可能无法捕捉这一区别？
- 本页发现，辅导的"解题"分数与"教学"分数在各模型间仅弱相关。这对你评估一个AI导学系统的答题能力意味着什么？
- 有些设计赋予AI不同的角色——教师、同学、导师——甚至让家长保持核心参与（如ParaTutor）。在你的经验中，给智能体一个清晰的角色会改变[[learners]]与它的互动方式吗？
- 当智能体的目标与学习者自身的目标冲突时，真实的学生常常"绕过"聊天机器人的教学框架。学习者为什么会理性地忽视良好的支架？这对"只要我们建好，他们就会参与"的假设意味着什么？
- 你更愿意向哪一种AI学习：告诉你事情的、向你提问的，还是主持小组讨论的？你的偏好如何塑造你认为"教学智能体"应该是什么？
- 从简单的信息提供者，到编排整门课程的一群专门化智能体——你认为对话式AI辅导的价值（与风险）究竟在哪里？

## 引言

教学智能体是学习系统内的一个互动式AI组件，通过对话、提问或提示让学习者参与，以支持其认知与[[metacognition|元认知]]过程。与被动的[[visualization|仪表盘]]或静态反馈不同，教学智能体采用有证据依据的辅导策略——例如在给出[[feedback]]之前先引出学习者的自我[[assessment|评估]]，或通过苏格拉底式对话来[[scaffolding|支架化]][[problem-solving|问题解决]]。这一总括概念如今涵盖从单个对话式[[intelligent-tutoring|智能导学系统]]，到一群角色专门化的[[agentic-ai|智能体]]——它们讲授、辅导、促进协作，甚至编排课程生成——全部扎根于数十年的智能导学系统[[research-methods-aied|研究]]。

## 知识库中如何研究教学智能体

**对话式智能体的设计与架构。** 一条反复出现的线索是智能体如何被组织，而不仅仅是驱动它们的是什么模型。[[conversational-ai-tutors-framework|对话式AI导学框架]]主张，久经验证的ITS [[ai-technologies|技术]]——[[knowledge-tracing]]、情感检测、[[student-modeling|学生建模]]——应当锚定生成式导学系统，保留诊断骨架，同时由[[generative-ai]]提供灵活的对话。多智能体设计把这一点推得更远：[[mooc-to-maic|MAIC]]用[[llm]]驱动的、由教师、助教、同学与分析者智能体组成的课堂，取代[[online-teaching-and-learning|MOOC]]的"一段视频对N个学生"，从而大规模提供[[personalized-learning|个性化学习]]；而[[lecturaagents-multi-agent-teaching|LecturaAgents]]增加了一个[[embodied-learning|具身]]的ProfessorAgent，其TASA算法把可见的[[teacher-role|教学]]动作（书写、高亮）与学习者画像对齐。连亲子辅导也在[[paratutor-parent-child-tutoring|ParaTutor]]中成为一个双智能体问题，其中角色分离的支架让家长保持核心参与，而不被一个通用聊天机器人取代。同样的基于角色的逻辑出现在[[instructional-agents-multi-agent-course-gen|Instructional Agents]]中，由教学 faculty、设计者、助教与项目主席智能体跨ADDIE协作生成课程材料。

角色型智能体的一种互补用法针对[[teacher-education|教师]]实践而非学生学习：[[educasim-cs1-instructional-practice|Mohne等人（2026）]]组合了教学性学生画像、以真实课程材料为基础的记忆，以及一个作为评委说话者的LLM，让新手教师演练一个小班教学环节——共254次可选场次，平均每次约16分钟，每场约 \\$0.05–\\$0.10。

**教学行为与解题行为。** 一项核心实证发现是：产出答案不等于学习支持。[[measuring-llm-tutors-teach-vs-solve|测量LLM导学系统是教学还是解题]]表明，辅导基准上的解题分数与教学分数仅弱相关（跨八个模型 r = 0.421），据此主张基准必须单独报告面向教学的判据——引导性问题、经过校准的提示、不泄露答案的支架。这与[[stanford-evidence-base-ai-k12-2026|辅导专用与通用AI]]的证据一致：经过教学设计的导学系统配以[[guardrails]]，能够缓解原始通用聊天机器人造成的考试成绩下滑与推理受抑，保留[[desirable-difficulties|合意困难]]与有效挣扎，而不是将其短路。然而，基准仍可能高估即便是带支架的导学系统在真实环境中的表现。[[rethinking-scaffolding-llm-tutors|重思LLM导学系统中的支架]]发现，真实的学生频繁绕开聊天机器人的教学框架——这是对智能体目标与学习者自身目标之间错配的理性回应——因此采纳度必须被评估，而不能被假定。

**在辅导与协作中的角色。** 智能体日益被定位为促进者与调解者，而非答案提供者。[[niari-ai-pedagogical-mediator-collaborative-learning|Niari的教学调解者框架]]在[[collaborative-learning|协作学习]]中重新思考AI，视其为互动性、认识论与调节性的调解者——为参与和共享[[regulation|调节]]提供支架，而不取代教师或[[agency|学习者能动性]]。具体而言，[[golrang-propact-pair-programming-2026|协作式AI辅导（ProPACT）]]把协作本身作为教学对象，提前最多30秒预测两人组的破裂，并施加侵入性极小的支架以保留[[metacognition]]。[[embodied-inquiry-ai-facilitator-physics-2026|具身探究中作为促进者的AI]]表明，AI可以通过促进已建构模型的应用来补充动手建模，而[[robot-assisted-language-learning-meta-analysis-2026|机器人辅助语言学习元分析]]发现，结果取决于机器人智能体在教学中的定位（小组式互动）甚于其技术复杂程度。智能体所扮演的*角色*是否足够，抑或它还必须*调整自身行为*，[[liao-role-adaptive-ai-companion-book-talk-2026|Liao（2026）]]对此提出质疑：一项[[k-12|小学]]"读书谈"研究发现，固定的"同学同伴"陪伴体维持了更长的互动，却抑制了学生能动性，并触及"[[affective-computing|情感]]天花板"（情绪性与面向未来的反思薄弱），据此主张角色的*标注*必须与角色*适配*的互动逻辑相配对，而非采用单一角色的整体式设计。

[[ethics-training-agents-group-ethics-discussion-2026|伦理训练智能体（Seo等人，2026）]]展示了当一个教学智能体被要求主持而非教学时会发生什么：一个处理发言轮次（举手窗口15秒的排队）、时间管理（9分钟后自动推进到总结阶段）与增量批次摘要的LLM促进者，降低了参与者的认知负担，并让他们感到讨论"在正轨上"——一位参与者将其与ChatGPT作有利对比，后者"常让人觉得杂乱，或难以看清思想的进展"。同一研究也暴露了基于人格的智能体的天花板：三种不同的[[ethics|伦理]]取向智能体在贡献、多样性与影响力上被显著评为低于人类同伴（Kruskal-Wallis p < .001），参与者要求的是面向过程（"智能体如何推理"）而非面向结论的产出。

**对话式智能体被用于（与未被用于）何处——总括综述的图景。** [[conversational-ai-agents-umbrella-review-2026|对话式AI智能体总括综述]]（Ganguly等人，2025，34篇综述）量化了CAI的使用：教学与学习支持（97.1%的综述）、心理与[[motivation|动机]]支持（91.2%）以及元认知与个人发展（88.2%）领先，而行政支持（50%）、研究与信息管理（52.9%）和医疗/医学支持（41.2%）落后。它还指出，[[conversational-ai|CAI]]研究缺乏端到端的设计指导、CAI专用的[[usability-research|可用性]]方法，以及针对教师角色的具体课堂编排策略——这再次表明，教学智能体设计必须立足HCI、以证据为基础，并对[[ai-literacy]]保持敏感（[[conversational-ai-agents-umbrella-review-2026]]）。

**角色取向是一个设计变量，而非风格选择。** [[wang-teacher-student-centered-agents-physics-2026|物理智能体对比研究]]（Wang等人，2026，59名学习者）在固定模型、平台与温度的条件下分离出由提示指定的角色：一个教师中心智能体，基于有边界的教材来源、从教师视角作答；对照一个学生中心智能体，配置了对学生理解的知识，并被设定为诊断迷思、点明概念、[[transfer-of-learning|迁移]]到类比案例。学生中心的角色在每一项测量结果上都胜出——后测表现、更低的外在认知负荷与更高的关联认知负荷、心流体验与感知共情——尽管教师中心智能体才是为准确性与教材保真度优化过的那个。这使得*角色与互动模式*成为与[[prompt-engineering|提示]]和模型选择并列的一等设计参数，并表明共情可以从对话结构中工程化地获得，而非依赖一个不同训练的模型（[[affective-computing]]）。

**创作意图不保证教学法的实际执行。** 当27名中学教师配置一个面向教师的聊天机器人创作工具时，对108条机器人层面判据评分的评估发现，生成的回应与响应性（88.9%）和人格（81.5%）的对齐度远高于与规则（70.4%）或所述目的（59.3%）的对齐度，作者借用Norman的执行鸿沟与评估鸿沟的教学形式来框定这一现象——仅靠可配置控件并不能让教师的教学意图在机器人的行为中可见（[[teachers-configure-educational-chatbots-2026|Riahi等人（2026）]]）。

**沉浸式与扩展现实环境中的智能体。** [[aclime-pedagogical-agents-extended-reality-2026|Ross 与 Kaspar（2026）]]用ACLIME把这一概念延伸到[[virtual-and-augmented-reality|扩展现实]]（AR、增强虚拟性与VR），这是一个概念框架——与CAMIL、CATLM-VR和TICOL不同——它把智能体保留在模型内部。它命名了取自文献的两种互动模式：导学者，提供指导、鼓励、反思性提问与解释；以及角色扮演伙伴，占据情境中的一个确定角色，例如气候变化实地考察中的当地向导，或企业培训中的谈判对手。智能体的身体（从头像到全身）与行为被视为设计面：视觉真实感对行为真实感、灵活的AI控制对固定规则脚本、合成语音对预录语音，以及包括注视、手势与空间距离在内的非语言通道。该框架主张，沉浸与基于身体的互动性会放大[[community-of-inquiry|社会临场感]]背后的社会线索——并认为行为真实感而非视觉真实感才是决定性的预测变量——而学习者自身的虚拟身体又增添了[[embodied-learning|具身]]维度（身体所有权、虚拟身体能动性、自定位）与普罗透斯效应。该框架明确的取舍是认知性的：沉浸与智能体的单纯在场会提高认知负荷，即便与智能体的社会互动会通过集体工作记忆效应降低它；此外还在通常的设计变量之外增加了一个时间层（熟悉化、人—机关系的成熟、新奇感消退、网络晕动症的发展）。它的定位刻意保持临时性：几乎没有经验研究检验沉浸媒体中的教学智能体，长期的[[learning-gains|学习结果]]以及学习者特征都落在模型之外。

**评估与基准。** 测量一个教学智能体必须测教学法，而非内容。[[teaching-monster-pck-benchmark-2026|Teaching Monster Challenge]]通过要求智能体把一节课调整到指定的学习者画像来基准化教学内容知识（PCK），发现系统在内容上强、在调整上弱——并揭示LLM评委会对强系统误排序。[[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]]在专业的教学判断、[[situated-learning|情境化]]的多轮辅导，以及画布式工作流完成三个维度上评估智能体，显示模型未达专业教学标准。[[ai-generated-interactive-fiction-education-2026|AI生成的互动小说]]增添了一个设计评估角度：限制[[student-experience|学生体验]]有用性的是连贯性与测验整合，而非生成能力。

**在多轮中压力测试人格的稳健性。** [[adversarial-stress-testing-role-playing-agents|Shouqi等人（2026）]]用自动评委对角色扮演智能体实施了六轮递进的攻击：多策略测试使稳健性相对单策略基线下降0.17–0.20，且关键失败集中于第5–6轮之后，因此短的或单轮的评估会高估人格稳定性与伦理遵循度。

## 实践指引

为学习者的能动性而设计，而不是为模型的便利而设计。优先采用辅导专用的保障措施——[[scaffolding]]、提示、[[socratic-method|苏格拉底式提问]]、[[misconceptions|迷思]]定向——而非原始答案生成，因为解题与教学是分岔的。按用户角色（家长对孩子、同伴对同伴）分配支持，而不是通过一个单一的通用界面，并把协作视为支架化的有效目标。不要假定学生会采纳支架；要在真实情境中评估采纳度。把[[human-in-the-loop-ai|人工监督]]建入创作流程——正如[[ai-tutor-authoring-promptdecipher|PromptDecipher]]所做的那样，它把教师对机器人回应的质检作为一等公民的活动——并在质量可保之处选用更便宜的后端。分开报告教学与解题分数，并与用户一起验证生成的内容，而非假定生成即有用。

学习者偏好是支架质量的拙劣代理：在AI支持的数学建模中，学生在"同伴"与"助教"角色下表现最好，却在有用性与自我效能上把更具指导性的"导学教师"与"优秀学生"角色评为最高（[[preferred-scaffolding-ai-mathematical-modeling|Zhu、Yang 与 Yang（2026）]]）。

一项对46项计算机支持协作学习中AI智能体研究的综述区分了认知支架、社会促进与教学编排，发现认知增益一致，而行为、社会与情感结果依情境而定——因此智能体的功能应依它旨在产生的结果来选择（[[ba-ai-agents-cscl-review-2026|Ba等人（2026）]]）。

## 与相关概念的联系

教学智能体位于[[intelligent-tutoring]]（其[[knowledge-tracing]]与学生建模的诊断骨架）与[[generative-ai]]/[[llm]]（其交付引擎）的交叉点上。它们把[[scaffolding]]与[[feedback]]操作化，瞄准[[metacognition]]与[[self-regulated-learning]]，并日益以[[collaborative-learning]]为目标。安全关切在[[pedagogical-safety]]、创作质量，以及智能体[[cognitive-offloading|外包]]学习而非支持学习的风险之间反复出现。这一切都通过[[ai-ed-evaluation]]与[[benchmark|基准]]来评估，而这些评估必须测量教学，而非仅仅解题。

至关重要的是，教学智能体由其[[learning-gains|学习增益]]来评判，而非由其回应得多么流利。本知识库的证据是：当智能体被设计为带保障措施的辅导专用教练时，它们产生持久的增益——[[stanford-evidence-base-ai-k12-2026|辅导专用AI一贯优于通用聊天机器人]]——而当它们替代学习者自身的努力时，则会损害学习（[[generative-ai-guardrails-harm-learning|保障措施RCT]]、[[jost-llm-programming-education-learning-outcomes|LLM依赖与成绩]]）。因此，测量一个智能体的[[learning-gains]]需要无辅助、可迁移的结果测量，而非工具内表现。

更好的反馈不等于更好的学习：用知识库与工作流定制智能体提高了反馈的准确性与具体性，但自我调节行为、学习体验与结果均未改变，且其增益优势只在指导性反馈下才出现（[[agent-type-feedback-style-self-directed-learning-2026|Han等人（2026）]]）。

## 关联概念

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## 关联文章
- [[wang-teacher-student-centered-agents-physics-2026]] — 学生中心智能体角色在表现、负荷、心流与共情上均优于教师中心角色（Wang et al. 2026）
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME：AR/VR中教学智能体的概念框架 — 导学者对角色扮演伙伴、真实感、临场感、认知负荷（Ross & Kaspar 2026）
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim：用于教学实践的生成式学生智能体
- [[conversational-ai-agents-umbrella-review-2026]] — 教育中对话式AI智能体的总括综述
- [[conversational-agents-novice-programmers-scoping-2025]] — 面向新手程序员的对话式智能体范围综述
- [[ba-ai-agents-cscl-review-2026]] — 计算机支持协作学习中AI智能体综述
- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems to Support Productive-Failure-Based Learning
- [[preferred-scaffolding-ai-mathematical-modeling]] — AI支持数学建模中的偏好支架
- [[llm-adaptive-programming-error-explanations-2026]] — LLM对编程错误的自适应解释
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 面向小学读书谈的角色自适应AI陪伴体；固定角色智能体的情感天花板（Liao 2026）
- [[ethics-training-agents-group-ethics-discussion-2026]] — Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration

- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots

- [[agent-type-feedback-style-self-directed-learning-2026]] — 定制智能体提高了反馈质量，但未提高自我调节或结果；增益优势仅在指导性反馈下出现
