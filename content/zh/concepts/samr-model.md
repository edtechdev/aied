---
title: SAMR 模型
created: "2026-09-10T09:50:00-04:00"
updated: "2026-10-09T19:07:10-04:00"
type: concept
foundations: [educational-development, learning-design, tpack, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/samr-model
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **SAMR 模型** —— 一个由 Ruben Puentedura 提出的技术整合框架，沿四个层级对技术改变学习之程度进行分类：**替代（Substitution）、增强（Augmentation）、修改（Modification）与重新定义（Redefinition）**。下面两个层级（替代、增强）*提升*一个既有任务 —— 技术做着以前做过的事，只是更好或更方便；上面两个（修改、重新定义）则*改造*它 —— 任务本身变为某种以前不可能的东西。在[[ai-education|AI 的教育应用]]中，SAMR 是提出这一问题的标准透镜：[[generative-ai|生成式 AI]]是被用来渐进地改进既有实践，还是被用来重新构想学习；它与[[tpack|TPACK]]并列，作为描述教师如何整合技术的方式，而非描述他们为何接受技术。

## 值得思考的问题

- 当 AI 被引入一门课程时，它是替代（一个[[conversational-ai|聊天机器人]]取代搜索框）还是重新定义（一个以前不可能的任务变得可能）？什么决定了哪个层级是恰当的 —— 而改造总是目标吗？
- SAMR 与[[technology-acceptance-model|技术采纳模型]]回答不同的问题：采纳理论问的是*为什么*一位教师或机构接受一个工具；SAMR 问的是工具在*多深*的程度上改变学习。一项给定的 AI 整合研究实际回答的是哪个问题？
- 一项对[[higher-ed|高等教育]]中 AI 整合的[[meta-analysis-systematic-review|系统综述]]发现，多数用法停留在替代或增强层级，只有一项研究接近重新定义。如果这是典型的，关于 AI 的潜力与其课堂现实之间的差距，它说明了什么？
- SAMR 常被援引于[[teacher-education|教师]][[educational-development|专业发展]]，以帮助教育者规划技术使用。对一节课的 SAMR 层级作分类，会改变教师实际所做的事吗，还是它主要是一个描述性标签？
- 批评者主张，SAMR 像[[tpack|TPACK]]一样，立基于一种把认知视为不受技术改变的人本主义本体论，而且它对权力、数据所有权或公平一言不发。一个整合层级的透镜够不够，还是 AI 时代的整合需要一个更具批判性的框架？

## 引言

SAMR 描述学习任务的技术改造深度。它的四个层级构成一条从提升到改造的上升刻度：**替代**（工具取代另一个工具而无功能变化 —— 聊天机器人代替搜索引擎）、**增强**（工具取代并改进 —— 文字处理器的拼写检查代替打字机）、**修改**（任务被显著重新设计 —— 学生实时协作于一份 AI 生成的共享草稿）、以及**重新定义**（以前不可设想的新任务变得可能 —— 学习者以没有非 AI 类比的方式与生成式模型共同创作）。该模型被广泛用于[[ai-technologies|教育技术]][[research-methods-aied|研究]]和[[educational-development|教师专业发展]]，作为规划和评估技术整合的词汇表，并且是[[tpack|TPACK]]和[[technology-acceptance-model|技术采纳]]框架的标准伴侣 —— 尽管它回答的是与两者都不同的问题。

## 四个层级意味着什么

- **提升（下半部）：** 替代和增强在不改变任务性质的情况下改进一个既有任务。多数常规的 AI 使用 —— [[automated-question-generation|题目生成]]、快速文本生成、摘要 —— 就落在这里：它更快更方便，但不改变学习者被要求做什么。
- **改造（上半部）：** 修改和重新定义改变任务本身。[[vibe-coding|Vibe coding]]、与模型的实时共建、自适应互动对话，都是生成式 AI 之前不可能的任务，代表着刻度的改造端。

SAMR 常与[[icap-framework|ICAP 框架]]配对，因为两者对齐：[[thermomix-genai-education-analogy-2026|Rummel、Nachtigall 与 Panadero（2026）]]的四个烹饪到学习场景把 ICAP[[student-engagement|参与]]模式映射到 SAMR 层级 —— ICAP *被动*对 SAMR *替代*、*主动*对*增强*、*建构*对*修改*、*互动*对*重新定义* —— 展示了从被动委派到互动共建的演进。

## 来自知识库的证据

- **高等教育中的 AI 整合大体是增量的，而非改造性的。** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh 等（2026）]]在一项从 959 条记录中筛出 22 项干预研究的 PRISMA 系统综述中，用 SAMR 模型为 AI 整合分级，发现多数研究簇集在**替代或增强**层级，较少的在修改，只有一项接近重新定义。AI 通常被引入以改进既有实践 —— 由[[automated-assessment|评估自动化]]和[[personalized-learning|个性化学习支持]]主导 —— 而非重新构想课程或[[learning-gains|学习结果]]。
- **SAMR 是分析生成式 AI 驱动的[[curriculum-design|课程]]变革的常用透镜。** [[rewriting-curriculum-genai-pedagogy-2026|Sabani 等（2026）]]把五项课程转变（静态到动态、传递到能力、地方到[[governance|机构]]）映射到包括 SAMR 和建构性对齐在内的既有透镜上，用该模型澄清生成式 AI 重塑课程的[[pedagogy|教学]]机制。
- **SAMR 和 TPACK 锚定教师-技术整合标准。** [[crompton-faculty-technology-integration-standards-2026|Crompton 等（2026）]]把他们的六项教师技术标准对照既有框架 —— [[tpack]]、RAT、SAMR、SETI —— 和标准（ISTE、UNESCO、DigCompEdu）安置，这些多数面向[[k-12]]教育者，或只覆盖教师角色的[[teacher-role|教学]]部分，在高等教育教师发展中留下缺口。
- **SAMR 是后人本主义批评的目标。** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed（2026）]]批评 TPACK、SAMR 和[[ai-literacy]]模型共享一种人本主义本体论，这种本体论预设了一个有边界的、其认知从根本上不受技术中介改变的学习者，主张这些工具主义框架无法处理 AI 在认知中的构成性角色。
- **一个整合的框架，而不是一个关于权力的框架。** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal（2026）]]把 SAMR 与 TPACK 及其他整合框架并列评估，发现没有一个处理公平的权力、数据所有权或问责，这促成了一种替代性的生态共能动性框架。
- **学生的使用也映射到 SAMR，而反馈跨越每一个层级。** 对一个[[physics-education|物理]]单元中 31–36 名学生的生成式 AI 声明作编码，把学习放在替代-增强，格式放在替代，任务执行放在修改-重新定义，而反馈 —— 检查、澄清、核验 —— 出现在全部四个层级（[[genai-use-changing-institutional-policy-physics-2026|Quince 与 Faulconer（2026）]]）。
## SAMR、TPACK 与技术采纳：它们如何不同

三个框架常被混淆，但回答不同的问题：

- **[[technology-acceptance-model|技术采纳模型]]**（TAM、UTAUT）解释*为什么*个人或机构接受并持续使用一项技术 —— 感知有用性、易用性和社会影响。
- **[[tpack|TPACK]]**描述教师有效整合技术所需的*知识* —— 技术、教学和内容知识的相互作用，在 AI 时代扩展为 AI-TPACK/GenAI-TPACK。
- **SAMR**对一项技术在*多深*的程度上改造学习任务作分类，从提升到重新定义。

SAMR 最好被理解为用于规划和评估的整合深度透镜，与采纳理论（解释采用）和 TPACK（解释教师能力）互补。在 AI 时代，它被最富有成效地用于提问：生成式 AI 是被应用于增强既有任务，还是被用于实现真正新的任务 —— 这一区分贯穿本知识库的评估和课程研究。

## 对实践的启示

- **用 SAMR 问深度问题，而不是规定改造。** 提升并非天生低劣；许多常规的 AI 使用是正当的替代。该模型是诊断性的，澄清一个给定用法实际改变了什么。
- **与 ICAP 配对。** SAMR 描述*任务*变成什么；ICAP 描述学习者*如何*参与。两者合用来区分表面的替代与深的互动共建。
- **用采纳和公平透镜来补充它。** SAMR 对一个工具为何被采纳或谁受益一言不发。把它与[[technology-acceptance-model|采纳模型]]和[[equity-in-ai-education|公平]]分析配对，以免让深度标签替代了[[critical-thinking|批判性评估]]。
- **把增量整合的证据当作一项发现，而不是一次失败。** 如果多数 AI 整合簇集在替代/增强，设计任务就不是强推重新定义，而是承认改造性的使用需要不同的任务设计，而不只是更好的工具。

## 关联概念

- [[ai-education]] —— AI 的教育应用（伞形概念）
- [[tpack]] —— Technological Pedagogical Content Knowledge
- [[technology-acceptance-model]] —— 技术采纳模型
- [[icap-framework]] —— ICAP 认知参与框架
- [[ai-technologies]] —— AI 技术与方法
- [[teacher-ai-competency]] —— 教师 AI 能力
- [[educational-development]] —— Educational development
- [[learning-design]] —— 学习设计
- [[k-12]] —— K-12 教育
- [[higher-ed]] —— 高等教育
- [[generative-ai]] —— 生成式 AI

## 关联文章

- [[alsheikh-mapping-ai-integration-higher-education-2026]] —— 以 SAMR 分级的高等教育中 AI 整合：多为替代/增强
- [[thermomix-genai-education-analogy-2026]] —— ICAP 与 SAMR 映射四个烹饪到学习场景
- [[rewriting-curriculum-genai-pedagogy-2026]] —— SAMR 位列生成式 AI 驱动课程变革的透镜之列
- [[crompton-faculty-technology-integration-standards-2026]] —— SAMR 位列为教师技术标准提供信息的框架之列
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] —— 对 SAMR 人本主义本体论的后人本主义批评
- [[reclaiming-epistemic-agency-co-agency-2026]] —— SAMR 对权力、数据所有权和问责的沉默
- [[genai-use-changing-institutional-policy-physics-2026]] —— 制度政策变动下学生的生成式 AI 使用：使用功能映射到 SAMR 层级（Quince & Faulconer 2026）
