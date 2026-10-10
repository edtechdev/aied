---
title: 自我决定理论
created: "2026-08-10T17:38:45-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [ai-education, teacher-ai-competency]
pedagogy: [motivation, self-determination-theory]
technology: [affective-computing]
audience: [learners]
confidence: high
translation_of: concepts/self-determination-theory
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **自我决定理论（Self-Determination Theory, SDT）** — 一种关于人类动机的心理学理论，认为内在动机与 [[well-being|幸福]] 取决于满足三项基本心理需求：自主、胜任与关联。在 [[ai-education|教育中的 AI]]，SDT 为设计支持而非削弱学习者与教师动机的 AI 工具和专业发展提供了一个框架。

## 值得思考的问题

- 该理论主张，动机不只是你有*多少*，而是一种被环境塑造的*质量*，建立在三项需求之上：自主、胜任与关联。回想一段让你精疲力竭的学习经历。那三项需求中哪一项被侵犯了，什么能恢复它？
- 一项为期一年的研究发现三种动机画像——脱嵌（Disengaged）、发展中（Developing）、自我决定（Self-Determined）——它们在时间上稳定，而达到自我决定画像的学生显示出最大的 AI 素养增益。在读之前，动机是学生随身带来的东西，还是一个设计良好的环境能够培育的东西？「是发展的，而非固定的」意味着什么？
- 如果一个 AI 工具让每个任务都毫不费力、「易于使用」，它可能满足哪项心理需求——又可能在悄悄削弱哪一项？一个提升短期投入的工具，如何仍然侵蚀长期动机？
- 面向教师的需求支持型专业发展增强了他们的 AI 素养并维持了投入。这是否说明我们*培训* 教育者的方式与 AI 本身做了什么同样重要？对你个人而言，「自主支持型」的 AI 培训会是什么样子？
- 一项研究发现 ChatGPT 能在语言学习中支持自主、关联与胜任。但同一个工具会不会对另一个学习者削弱这些需求？要让该理论成立，*如何使用* 它必须满足什么？
- 在读下去之前，说出一种你因使用 AI 工具而感到自己的胜任、自主或联结感受到影响的方式——并反思如果没有被提示去找寻这种变化，你是否会注意到它。

## 引言

SDT 在教育中的 AI [[research-methods-aied|研究]] 中日益被用作一面理论透镜，既用于面向学习者也用于面向教师的 AI 系统。该理论的核心主张——动机不只是学习者拥有的一个量，而是一种被社会与技术环境塑造的质量——使它直接关系到 AI 工具如何影响 [[student-engagement|投入]]、坚持与 [[learning-gains|学习结果]] 的问题。本知识库的文章在三个主要情境中应用 SDT：教师专业发展、AI 中介的学习投入，以及情感计算。

### 主要研究主题

**基于 SDT 的教师专业发展** 把该理论的需求支持原则应用于为教育者迎接 AI 做准备。**[[teacher-education-ai-literacy-sdt-2026|Chiu 等人]]** 研究了 382 名 [[k-12|中学]] 教师，发现以 SDT 为基础的需求支持型专业发展能增强教师的 [[ai-literacy|AI 素养]]，并培育在线专业学习社群中持续的行为投入。[[qualitative-research|质性]] 分析识别出九项支持自主、胜任与关联的设计策略——弥合了孤立专业发展与专业学习社群之间的差距。

**AI 中介学习投入中的 SDT** 考察 [[generative-ai|生成式 AI]] 工具如何塑造学生动机。**[[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|Isaeva 等人]]** 把 SDT 与 [[network-analysis|认知网络分析]] 结合，研究学生在学业学习中对生成式 AI 的投入。**[[ai-availability-student-motivation]]** 探索 AI 的可得性如何影响学生动机与坚持，关联到关于动机侵蚀的 [[cognitive-offloading|过度依赖]] 关切。**[[liang-ai-learning-motivation-sdt-2026|Liang 等人（2026）]]** 以对 **2,086 名中学生** 的潜类别转变分析（latent transition analysis）把 SDT 扩展到 AI 学习，跟踪他们在为期一年的 AI [[curriculum-design|课程]] 中的动机，识别出 **三种动机画像（脱嵌、发展中、自我决定）**，它们在时间上稳定，并显示多数学生维持或向更高画像前进。关键地，达到或留在自我决定画像的学生显示出**最大的 [[ai-literacy|AI 素养]] 增益**——这是直接的纵向证据，表明满足自主、胜任与关联预测更好的 AI 学习结果，且动机是一种发展的（而非固定的）学习者属性。

一个对照的课堂结果显示，这些需求并不一起移动：在 2,464 名初中生中，ChatGPT 支持的能力本位学习提高了自主支持与胜任满足，却产出了更大份额的低质量动机画像，而关联满足弱于非 AI 的能力本位学习（[[student-motivation-need-satisfaction-genai-sdt-2026|Schweder, Hagenauer 与 Raufelder（2026）]]）。

一个组态式检验把这一点说得更锐利：在 498 名医学本科生中，GAI 使用与需求满足只有弱关联（β = 0.155），且被证明对高投入并不必要，而胜任需求满足是最强组态中的核心条件（[[genai-learning-engagement-medical-undergraduates-2026|He 等人（2026）]]）。

**从学习气候到 AI 使用的双路径。** [[dual-ai-learning-pathways-sdt-2026|Shen 与 Arunrugstichai（2026）]] 把 SDT 与行为投入的 Hook 模型整合，解释为什么 GenAI 使用从建设性支持一直延伸到强迫性依赖。来自 **508 名大学生**、具有不同高中背景与当前情境（中国与泰国）的横断面调查数据中，对**高中压力 vs. 自主支持** 的回溯报告差异性地预测了学生进入大学后所走的两条路径——一条走向建设性、自主的 GenAI 使用，另一条走向强迫性依赖——结果在跨情境的多组分析中一致。该模型把 SDT 动机过程与 AI 支持学习的感知质量相连，把自主支持框定为引导学生走向生产性而非依赖性 AI 使用的杠杆。

- **语言学习中的 ChatGPT 与 SDT 需求：** [[chatgpt-english-language-learning-malaysia|Annamalai 等人（2026）]] 以 SDT 透镜研究 25 名马来西亚大学生，发现 ChatGPT 在 [[language-learning|英语学习]] 中支持自主、关联与胜任——增强语法、写作与会话任务，同时让 [[teacher-role|教育者]] 专注于更高阶的培养。

**SDT 应用于教师自身的 AI 中介实践。** [[claassen-learning-analytics-genai-learning-design-2026|Claassen 等人（2026）]] 以 SDT 为解读透镜，考察教师如何把 [[learning-analytics|学习分析]] 与生成式 AI 整合进 [[learning-design|学习设计]]——发现支持教师的基本需求（自主、胜任、关联）能培育其设计工作所需的创造性 [[problem-solving|问题求解]]。在他们的 ENA 分析中，GenAI 使用与为学生的自我决定而设计（例如与学生共同创建评估评分标准）相关联，把 SDT 从学习者延伸到构建需求支持型 AI 中介环境的教育者。

对教师自身而言，AI 协作是双刃剑：一项对 468 名大学教师的三波研究发现，它通过心理可得性提高工作投入，又通过工作异化降低投入，而 [[teacher-ai-competency|数字胜任力]] 强化了前一条路径、削弱了后一条（[[teacher-ai-collaboration-work-engagement-2026|Sun 等人（2026）]]）。

一个共同行动者（co-agency）框架为 SDT 在 AI 中介教育中的适用边界划界：它改变了自主、胜任与关联得以产生的条件，却把权力平等、数据所有权与问责留给未处理的状态，这就是为什么其作者把人类认识论问责设为理论之外的一个不可妥协的条件（[[reclaiming-epistemic-agency-co-agency-2026|Poudyal（2026）]]）。

**自主支持作为儿童 GenAI 使用的框架。** [[family-school-autonomy-support-genai-2026|Fan, Li 与 Zhang（2026）]] 把负责任使用的问题从限制重新安置到需求支持上，主张要紧的区别在于孩子周围的成人是支持自主还是控制它，并在 SDT 语汇内区分依赖型与自主型的 [[cognitive-offloading]]：依赖型卸载转移 [[agency|能动性]] 并降低内在动机，自主型卸载则提供脚手架而学习者保留认识论上的控制。该综述有两个特征与 SDT 的应用直接相关：它坚持自主支持不是纵容，并把当前指导所假定的家校协同当作一个未经检验的假设，把加性、协同与补偿三种版本形式化，只有一项对照家庭单独、学校单独、协同与常规实践指导的析因试验才能区分。

## 与相关概念的关联

SDT 直接与 [[motivation]] 相连（作为其母构念），与 [[affective-computing]] 和 [[affective-tutoring]] 相连（面向情感感知的 AI 设计），并与 [[student-experience]] 相连（学习者如何体验 AI 中介的环境）。该理论对自主的强调关联到 [[self-regulated-learning]]，而其胜任维度关联到 [[self-efficacy-tutoring-learning]] 与 [[teacher-ai-competency]]。SDT 与 [[professional-training]] 和 [[educational-development]] 格外相关，因为需求支持型设计是一条可迁移的原则，用于为教育者使用 AI 做准备。

## 关联概念

- [[motivation]]
- [[student-experience]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[self-regulated-learning]]
- [[teacher-ai-competency]]
- [[educational-development]]
- [[professional-training]]
- [[cognitive-offloading]]
- [[student-engagement]]
- [[ai-education]]
- [[learning-theories]]
## 关联文章
- [[family-school-autonomy-support-genai-2026]] — Family-School Autonomy Support for Children's Responsible Use of Generative AI
- [[dual-ai-learning-pathways-sdt-2026]] — High-school pressure/autonomy support and dual AI learning pathways (Shen & Arunrugstichai 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[teacher-education-ai-literacy-sdt-2026]]
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]]
- [[ai-availability-student-motivation]]
- [[chatgpt-english-language-learning-malaysia]] — Students' ChatGPT experiences in English language learning
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[liang-ai-learning-motivation-sdt-2026]] — SDT latent transition analysis of students' AI learning motivation (2,086 secondary students)
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — Student motivation and need satisfaction in GenAI classrooms (Schweder, Hagenauer & Raufelder 2026)

- [[genai-learning-engagement-medical-undergraduates-2026]] — GAI use is weakly tied to need satisfaction and unnecessary for high engagement (He et al. 2026)
- [[teacher-ai-collaboration-work-engagement-2026]] — Dual pathways from teacher–AI collaboration to work engagement, moderated by digital competency
