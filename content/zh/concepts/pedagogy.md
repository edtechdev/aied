---
title: 教学法与教学策略
created: "2026-08-19T17:45:00-04:00"
updated: "2026-10-09T18:39:26-04:00"
connected_faqs: [designing-ai-into-learning]
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/pedagogy
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教学法与教学策略**——教育者用来教学并促成学习的方法与路径，也是本知识库关于"教学如何发生"的全部覆盖的总括概念（与[[learning-theories]]相对，后者解释的是"学习如何发生"）。在[[ai-education|教育中的人工智能]]中，教学法居于核心，因为教学策略的选择决定了 AI 工具如何被部署：同一个生成式 AI 工具，在一种教学法之下可以是[[scaffolding|脚手架]]，在另一种之下是[[socratic-method|苏格拉底式]]对话者，在第三种之下则是答案生成器。本知识库记录个别教学法，并把它们当作评价 AI 设计与课堂使用的教学透镜。

## 值得思考的问题

- 教学策略（教学法）与关于学习如何发生的理论之间的区别是什么？你能说出一个你使用的策略，以及它可能依托的学习理论吗？
- 本页论证，每个 AI 工具都"内嵌着教学法假设"，无论设计者是否言明。拿一个只会回答问题的[[conversational-ai|聊天机器人]]来说——它在悄然施行的是哪一种教学法，而这是有意的吗？
- 同一个[[generative-ai|生成式 AI]]，在一种教学法之下可以是脚手架，在另一种之下是苏格拉底式伙伴，在第三种之下则是答案生成器。你能描述同一个工具被这样三种方式使用的情形吗？
- 证据表明，AI *如何*被使用，与它*是否*被使用同样重要。你是否观察过同一个 AI 帮了一个班却害了另一个班？差别在哪里？
- 如果你要为一所学校选购 AI 工具出谋划策，你会问哪些问题来揭示其中内嵌的教学法——而不只是它的功能清单？
- 想一想你尝试过的一种以学习者为中心的策略（主动的、协作的、项目式的）。它奏效或失败的原因是什么，而一个 AI 工具又可能如何改变那个结果？

## 引言

教学法与教学策略关乎教育者*如何*教学——那些组织学习的活动、结构与方法——而[[learning-theories]]解释的是*学习如何发生*的底层机制。两者互补：一种教学法把一种或多种理论操作化，而本知识库把教学法当作从理论通往课堂实践的桥梁。每个 AI 工具都内嵌着关于理想教学互动的教学法假设，无论设计者是否言明。

## 教学法的全景

本知识库记录了一整套丰富的个别教学策略与教学法，归并为若干族：

- **以学生为中心与主动取向。** [[active-learning]]（学生投入于做与想，而非被动接收）、[[project-based-learning]]（通过延展的项目学习）、[[experiential-learning]]（通过直接经验学习），以及[[learning-by-teaching]]（通过向他人讲解来学习）。
- **协作与社会取向。** [[collaborative-learning]]（通过[[group-work|小组工作]]学习）、[[sociocultural-learning]]（通过社会参与与中介学习），以及[[socratic-method|苏格拉底式提问]]（通过引导性对话与提问学习）。
- **经验取向。** [[experiential-learning]]（通过直接经验与反思学习）、[[situated-learning]]（在真实情境中学习），以及[[embodied-learning]]（通过身体/具身交互学习）。
- **结构化与引导取向。** [[scaffolding]]（临时的、渐退的支持）、[[learning-design]]（教学的系统化设计）、[[self-regulated-learning]]（学习者主导自己的学习），以及[[sociocultural-learning]]（包括结构化的、教师引导的社会文化支持）。
- **在线与远程教学法。** [[online-teaching-and-learning|在线教学与学习]]本身是一种教学情境，而不只是传递渠道：媒介决定了哪些策略可行（为异步论坛重新构思的[[active-learning]]、通过数字讨论实现的[[collaborative-learning]]、取代面对面交互的[[intelligent-tutoring|导学智能体]]）。在这一媒介中，AI 既带来新机会（可扩展的[[personalized-learning|个性化]]、全天候支持），也带来新风险（[[academic-integrity|学术诚信]]、[[cognitive-offloading|认知卸载]]），使教学意图成为决定性的。
- **动机与[[student-engagement|投入]]取向。** [[game-based-learning]]（通过游戏学习）、[[self-determination-theory]]（支持自主、胜任与关系），以及以[[motivation]]为导向的策略。
- **[[equity-in-ai-education|公平]]意识取向的教学法。** [[culturally-relevant-pedagogy|文化相关教学法]]、[[universal-design-for-learning|通用学习设计]]、[[critical-pedagogy]]与[[inclusive-learning]]确保策略服务于多样的学习者。

**取向不是序列，而这个差别决定结果。** 以上所述全是关于*哪一种*教学正在发生。[[pedagogical-patterns|教学法模式]]描述的是课堂内部动作的*顺序*——学生先做什么、AI 在哪里进入、人的判断留在哪里——本知识库单独记录那些经过检验的序列，因为同一个工具会因其在顺序中的位置而有益或有害。在 AI 提供帮助之前先尝试问题，以及收到提示而非答案，是证据基础中最一致地得到支持的安排；而把助手放在最前面，是压低其后无辅助表现的最佳记录方式之一。一种没有决定这一顺序就采纳的教学法，把决定性的变量留在了未设的状态。

## 教学法在教育中的人工智能中如何呈现

本知识库的[[research-methods-aied|研究]]从若干途径考察 AI 与教学交汇处的教学法：

- **AI 作为教学法智能体。** AI 工具承载着教学法——一个建立在[[socratic-method|苏格拉底式提问]]之上的[[intelligent-tutoring|导学系统]]促使学习者推理，而一个生成答案的聊天机器人可能默认直接供给（关于教学法立场为何重要，见[[reducing-ai-misuse]]）。[[agentic-ai|智能体式 AI]]文献表明，把智能体锚定在教学设计理论之上，胜过原始的[[prompt-engineering|提示工程]]。[[genai-didactic-pedagogical-mediator-2026|Moganadas 等（2026）]]把这一角色正式化：他们不采用把 GenAI 当作外部补充或威胁的二元"教师—[[student-modeling|学生]]模型"，而提出嵌套的**教师—学生—GenAI 三元模型**，其中 GenAI 作为有边界的*教学论—教学法中介*，运作于由机构与利益相关方治理的共享教学中介空间之内——产生五个可研究的命题，涵盖学习中介、教师角色转变、AI 素养与学习者能动性、AI 透明的[[process-oriented-assessment|过程取向评估]]以及机构[[governance]]。
- **教学法决定 AI 的效应。** 一个反复出现的发现是，AI *如何*被使用，与它 *是否*被使用同样重要。[[instructional-guidance-genai-learning|教学引导研究]]与[[generative-ai-guardrails-harm-learning|带护栏导学系统的随机对照试验]]表明，同一个 AI 会因教学法外壳（提示 vs. 答案、结构化 vs. 开放使用）而有害或有益。
- **教学知识重于技术知识。** 在 46 名教师与 2,832 名学生中，教师的教学性 AI 知识预测了学生对"AI 向善"的认知与学习 AI 的意愿，而单纯的技术知识并不充分——两者都未能预测学生的 AI 知识（[[pedagogy-first-technology-second-teacher-knowledge-2026|Shen 等（2026）]]）。
- **AI 最明确的贡献是卸载行政工作。** 一项对 28 项研究的 PRISMA 综述发现，AI 最常增强的是教学规划与评估设计，其被报告得最多的收益是评分、反馈与进度监控的自动化（18 项研究，64.2%）——而教学法对齐是被引用最多的挑战（14 项）（[[kibar-ilgaz-ai-instructional-design-review-2026|Kibar 与 Ilgaz（2026）]]）。
- **自动化与学习直接互相消长。** [[agentic-ai-pedagogical-best-practice-2026|Woollaston 等（2026）]]把六项教学法原则——先备知识激活、[[collaborative-learning]]、[[problem-based-learning]]、[[formative-assessment]]、[[scaffolding]]、[[metacognition]]——逐一走过，考察主动的智能体式能动性对每一项做了什么，论证智能体自动化得越多，学习者做的认知工作就越少，除非把摩擦、动态渐退与人的监督设计进去。
- **面向 AI 素养的教学策略。** 教学生*用好 AI* 本身是一项教学法任务——[[ai-literacy]]与[[reducing-ai-misuse]]研究发展出的策略（先想/AI 次之/再反思、AI 声明、校准训练）就属于这个总括之下。

- **AI 素养教学在知识上推进最快。** 一项对 59 项研究（172 个效应量）的三层次元分析发现，以知识为中心的干预（g ≈ .97）明显胜过以技能（≈ .67）、态度（≈ .68）或[[ethics]]（≈ .64）为目标的干预，因此把概念教学与持续练习配对，针对的是那些抗拒教学的产出（[[liu-ai-literacy-interventions-meta-analysis-2026|Liu 等（2026）]]）。
- **教学法在教师实践之中。** [[teacher-role]]与[[teacher-ai-competency]]考察教师如何在其既有教学法 repertoire 之内采纳 AI，而[[llm-training-and-fine-tuning]] / [[pedagogical-agent]]研究那些被训练来遵循教学法原则的 AI 工具。

## 与学习理论的关系

教学法与学习理论密切相连：每种教学法都把一种或多种理论操作化。例如，[[project-based-learning]]把[[constructivist]]与[[experiential-learning|经验取向]]的理论操作化；[[socratic-method]]依托[[sociocultural-learning]]与[[metacognition]]；[[scaffolding]]源于[[sociocultural-learning|最近发展区]]。本知识库把[[learning-theories]]当作概念基础，把本页当作教学实践的总括——另见[[learning-design]]，它关乎选择与排序策略的系统化过程。[[learning-sciences|学习科学]]则更往外一层：本页覆盖教学实践与教育者选择的策略，而学习科学经验地研究这一实践——描述、建模并评价设计，以确立哪些设计能改变学习。

## 跨教学策略的学习增益

不同的教学法策略产生不同类型与大小的[[learning-gains|学习增益]]，而本知识库的证据让我们得以比较它们：

- **主动与经验取向的策略** 总体上比被动接受产生更强韧的学习，尽管感觉更费力——[[active-learning]]、[[experiential-learning]]、[[project-based-learning]]与[[learning-by-teaching]]通过做来建立理解。[[generative-ai-reduced-study-time-math|研究]]表明，那些保全费力练习（而非让 AI 取巧绕过它）的策略保护了[[learning-gains]]。
- **结构化、引导取向的策略**（[[scaffolding]]、[[self-regulated-learning]]、[[learning-design]]）产生可靠但更温和的增益——护栏证据（[[generative-ai-guardrails-harm-learning|PNAS 2025]]）表明，[[guardrails|只给提示不给答案]]的脚手架保全了无护栏式直接给答案所摧毁的学习。
- **[[game-based-learning|游戏化学习]]** 产生的投入与技能增益是真实的，但往往温和且依赖情境——[[genai-educational-outcomes-meta-analysis|元分析证据]]发现，游戏辅助的 GenAI 相比其他格式并无显著的额外收益，因此游戏最适合用于动机与练习，而非通往增益的捷径。
- **协作与社会文化取向的策略**（[[collaborative-learning]]、[[sociocultural-learning]]）显示出以互动质量为中介的增益，越来越多地以 AI 为伙伴或同伴来研究。
- **苏格拉底式与对话取向的策略**（[[socratic-method]]）瞄准的是高阶思维与推理——这类增益比技能增益更难测量，但对[[critical-thinking]]是核心的。

一项关键的横贯发现，与本知识库的[[learning-gains]]研究一致：**策略对学习的影响，更多取决于它如何保全学习者的努力与生产性挣扎，而不是它带着哪个标签**——任何教学法，即便是"好的"教学法，如果 AI 被配置成绕开它本想调动的认知工作，也会失败（见[[cognitive-offloading]]、[[desirable-difficulties]]）。

那种对保全努力的强调并非绝对：一项四项研究的[[mixed-methods-research|混合方法]]设计（N = 912）发现，把 GenAI 框定为教学法伙伴同时激活了批判性警觉与策略性卸载，卸载超过某一阈值后释放出的能力反而用于高阶反思而非侵蚀它（[[wang-zhang-pedagogical-partnerships-genai-2026|Wang 与 Zhang（2026）]]）。

## 对教育中的人工智能的启示

- **与 AI 一同有意识地选择教学法：** 教学策略决定了一个 AI 工具是支持还是损害学习，因此教学意图应当驱动 AI 工具的选取与配置。
- **让学习者能动性保持中心：** 主动、苏格拉底式与脚手架取向的教学法保全了 AI 可能侵蚀的生产性挣扎与[[agency]]（见[[cognitive-offloading]]、[[desirable-difficulties]]）。
- **设计 AI 以施行好的教学法：** AI 智能体与导学系统应当锚定在既有的教学框架中，而非默认地生成答案。
- **借 AI 而教，并教 AI：** 教学法既要用 AI 来教，也要教学习者如何负责任地使用 AI。

## 关联概念

- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[learning-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[project-based-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[socratic-method]]
- [[scaffolding]]
- [[learning-by-teaching]]
- [[self-regulated-learning]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[critical-pedagogy]]
- [[teacher-role]]
- [[teacher-ai-competency]]
- [[ai-literacy]]
- [[curriculum-design]]
- [[higher-ed]]
- [[k-12]]
- [[llm-training-and-fine-tuning]] — 被训练来遵循教学法原则的 AI 工具

## 关联文章

- [[genai-didactic-pedagogical-mediator-2026]] — GenAI 作为教学论—教学法中介：教师—学生—GenAI 三元模型（Moganadas 等 2026）
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] — “Pedagogy first, technology second”——TPAIK 对学生结果的影响重于技术性 TAIK（Shen 等 2026）
- [[wang-zhang-pedagogical-partnerships-genai-2026]] — Pedagogical partnerships with generative AI
- [[ai-communities-of-inquiry-2026]]
- [[instructional-guidance-genai-learning]] — 教学引导如何塑造 GenAI 的学习效应
- [[generative-ai-guardrails-harm-learning]] — 带护栏（只给提示不给答案）的导学消除了考试惩罚
- [[agentic-ai-pedagogical-best-practice-2026]] — 智能体式 AI 中的自动化—学习张力
- [[jeon-isd-agent-bench-2026]] — 把智能体锚定在教学设计理论之上
- [[ai-learning-tools-engineering-education-needs]] — 工程教育中的 AI 学习工具
- [[fowlin-operationalizing-learning-principles-ai]] — Operationalizing learning principles with AI
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Instructional approaches in AI literacy interventions
