---
title: 人文与社会科学教育
created: "2026-08-16T09:22:41-04:00"
updated: "2026-11-18T03:03:34-05:00"
type: concept
foundations: [ai-literacy, critical-thinking, philosophy-of-ai-in-education]
technology: [generative-ai]
discipline: [humanities education]
level: [higher ed]
confidence: high
translation_of: concepts/humanities-education
source_updated: "2026-11-17T07:20:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **人文教育** —— 历史、哲学、文学、语言、古典学与宗教学的教学，这些学科的对象是诠释而非程序。[[generative-ai|生成式AI]]在这里的重要性，不在于充当内容导师，而在于充当认识中介：它能即刻产出一个看似合理的解读，于是作者身份、史料判断与读者所处的位置，成为一门课程必须守住的东西。该集群位于[[discipline-specific-aied|学科中的AI]]之下，与以聚合的人为研究对象的[[social-sciences-education|社会科学教育]]并列，也与学习体现在所制之物中的[[arts-and-media-education|艺术与媒介教育]]和[[music-education|音乐教育]]并列。相关证据集中在[[higher-ed|高等教育]]与单门课程研究之中。

## 值得思考的问题

- 如果模型能在一秒之间给出一个称职的文本解读，这门课究竟在教什么 —— 是那个解读，还是判断该信任哪个解读的判断力？
- Voicu 区分了 AI 依赖、AI 增强与 AI 批判三种诠释。你的学生落在哪里，又是什么能把他们推向批判一端？
- 一项审计发现，艺术与人文学科单元的评估条目中有 58.6% 高度暴露于生成式 AI。你的哪些评估能经受这种暴露，又有哪些之所以暴露，是因为其形式而非其学科？
- 当一门历史课程限制模型可以就某份史料说什么时，这一限制保护的是什么 —— 学生的判断，还是教师的结论？

## 引言

人文学科是诠释人类文化的学科集群：历史、哲学、文学、语言、古典学与宗教学。它们的标志性教学法是研讨课，标志性评估是用散文体辩护的论证。这使它们成为课程中生成式 AI 的核心能力 —— 流畅而可信的文本 —— 最直接落在被评分之物上的那一部分。

阅读证据需要留意两条边界。第一条是艺术：[[arts-and-media-education|艺术与媒介教育]]与[[music-education|音乐教育]]涵盖的学科，学习体现在所制之物中，其论证围绕技艺与表演展开，而非围绕诠释。第二条是社会科学：[[social-sciences-education|社会科学教育]]涵盖政治、经济、管理与环境研究，其研究对象是聚合的人，方法常为量化。人文学科与二者都不共享同一方法，下文的研究具体针对文本与历史诠释。

[[philosophy-of-ai-in-education|教育中AI的哲学]]提供了这一集群用以论证的术语：认识论权威、作者身份，以及什么才算对一个文本站得住脚的解读。

## AI 如何改变诠释性工作

- **诠释被外化。** [[voicu-ai-interpretive-cognition-ssh-2026|Voicu（2026）]]把生成式 AI 描述为一个重构意义制造、作者身份与学习者[[agency|能动性]]的认识中介，其途径是诠释性认知的外化、作者身份的混合化与分布式认识能动性。所提议的应对是发展性的：朝 AI 批判式诠释去教，而不是禁用工具。
- **资料汇集转向智能体。** [[capodieci-humanities-hil-2026|Capodieci 等（2026）]]记录了人文学科学生使用智能体式 AI 汇集资料并起草，这使评估问题从文本是否由 AI 生成，转向诠释能否归之于学生。
- **历史教学可以过滤模型。** [[paternalistic-filter-llm-history-education|关于历史教育中 LLM 的研究]]考察 AI 如何塑造历史推理与史料诠释，包括通过为学生屏蔽教师会质疑的论断的过滤器。[[dumancic-tool-to-method-ai-literacy-history-2026|Dumančić（2026）]]在一项基于问卷与主题分析的案例研究中，追踪了从教工具转向教方法的相邻一步。
- **文学创作可以被支架化，而非被替代。** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] 是一个面向文学创作的接地支架系统，建在知识图谱与[[llm|LLM]]之上，其设计问题正是本学科的问题：在模型提供结构的同时，把学生的发明留在环中。
- **该问题的通用版本是任务形式。** 在一项对 148 篇文本的模拟中，备忘录与修订答辩在论证可见度上得分为 3.16 与 3.10，而立场文章为 2.63，因为格式本身要求解释来源或回应反对意见（[[liu-argumentative-work-visible-genai-assessment-2026|Liu 与 Liu（2026）]]）。

关于人文学科自身问题的最清晰框架来自 [[stornaiuolo-humanities-genai-integrity-framework-2026|Stornaiuolo 与 Elkins]]，他们主张[[academic-integrity|诚信]]与[[ai-literacy|批判性数字素养]]是同一个教育问题，而不是一个规则问题加一个技能问题。把二者连接起来的构念是评价性判断：学生判断一个解读之质量的能力，这既是诚信也是素养所要求的，而检测无法提供。由于论文、摘要与评注既是人文学科的评估工具，也是模型最强的输出，他们得出结论：本学科在其核心处遭遇 AI，评估必须要求展示出来的判断，而不是把旧文类管得更严。

## 学科证据显示了什么

人文学科评估的暴露面是测量出来的，而非假定的。[[villanueva-ai-vulnerability-assessment-audit-2026|Villanueva（2026）]]审计了澳大利亚八校联盟大学 15,587 条艺术与人文单元记录，发现 2026 年的评估条目中有 58.6% 高度暴露于[[generative-ai|GenAI]]。按分数加权后，居家论文与研究报告占该暴露的 71.4%，因此暴露集中在一个制品上，而非散布于整个课程。

[[corbin-essay-time-genai-2026|Corbin 等（2026）]]把这一论断收窄：被评估的论文早已收缩为一份论点与证据报告，因此 GenAI 所模拟的是一个报告文类，而非随笔式思考。合起来读，两项研究说明，脆弱的制品正是其思考已经程式化的那一个。

机构策略也有记录。[[ai-digital-transformation-liberal-arts-lingnan-2026|Qin（2026）]]描述了岭南大学如何在数字时代把自身重新定位为研究密集型博雅学府，为本科生规定必修的 GenAI 素养，并设一门必修的一年级课程，涵盖潜在空间、扩散模型、提示、微调、偏见与错误信息。其论点是，这一转变是智识性的，而非技术中心主义的。

## 对人文教师的启示

- **评诠释，而不是评文本。** 依照上述格式效应来设计任务，让可见的工作是选择来源、回应反对意见与修订。
- **把 AI 当作认识中介。** 用[[voicu-ai-interpretive-cognition-ssh-2026|Voicu 的]]三条轨迹作诊断，并以批判一端为目标。
- **质询过滤器。** 当模型被限制不得作出有争议的论断时，把这一限制本身当作研究对象。
- **用诠释性语言陈述学习结果。** 人文学科中的[[ai-literacy|AI 素养]]是能在论证中定位读者自身位置的能力，而不是提示的能力；[[critical-thinking|批判性思维]]则是这种使用本应培养的能力。

## 常见误解

**"人文学科是课程中受 AI 影响最小的部分。"** 暴露面已被测量为受审计评估条目的 58.6%，集中于论文与报告（[[villanueva-ai-vulnerability-assessment-audit-2026|Villanueva，2026]]）。

**"人文教育中的 AI 就是技术中心主义的增强。"** 岭南案例把这一变化视为智识性的，并把数字流利置于博雅教育之内，而不是其旁。

**"价值观教育可以作为内容交给模型。"** [[genai-values-education-affordances-risks-2026|Chen（2026）]]把价值观教育重新框定为一种关系性实践，具有三个条件 —— 可问责性、示范性与称呼 —— 并把 GenAI 的每一种可供性都读作对一种关系的替换：被模拟的视角替换了可能被伤害的利益相关者。

**"人文学科面对的是和其他学科一样的评估问题。"** 制品不同：关于一个文本意味着什么的论断，要对反解读作出辩护，它不是一份发现报告，也不会因为模型会写报告就变成发现报告。

## 关联概念

- [[discipline-specific-aied]]
- [[social-sciences-education]]
- [[arts-and-media-education]]
- [[music-education]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[agency]]
- [[philosophy-of-ai-in-education]]

## 关联文章

- [[voicu-ai-interpretive-cognition-ssh-2026]] — 面向SSH教育的诠释性认知发展性-批判模型
- [[capodieci-humanities-hil-2026]] — 人文学科学习中的智能体式 AI，以及从文本作者身份转向诠释归属
- [[paternalistic-filter-llm-history-education]] — 历史教育中的LLM使用、过滤器与历史推理
- [[dumancic-tool-to-method-ai-literacy-history-2026]] — 从工具到方法：历史教学中的AI素养
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — 以知识图谱与LLM为文学创作提供接地支架
- [[villanueva-ai-vulnerability-assessment-audit-2026]] — 15,587个Go8人文艺术单元的计算审计：2026年58.6%的评估条目高度暴露于AI
- [[corbin-essay-time-genai-2026]] — 被评估的论文早已收窄为一份论点与证据报告
- [[ai-digital-transformation-liberal-arts-lingnan-2026]] — 一所博雅学府在本科课程中全面规定GenAI素养
- [[genai-values-education-affordances-risks-2026]] — 作为关系性实践的价值观教育，以及GenAI的每种可供性替换了什么
- [[liu-argumentative-work-visible-genai-assessment-2026]] — 任务格式与AI使用说明作为制品所能证明的东西
- [[stornaiuolo-humanities-genai-integrity-framework-2026]] — 诚信与批判性数字素养是同一个问题，由评价性判断连接起来
