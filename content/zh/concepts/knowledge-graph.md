---
title: 知识图谱
created: "2026-08-09T16:55:17-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
translation_of: concepts/knowledge-graph
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **知识图谱** — 概念及其关系的结构化表示，用于在[[ai-education|AI教育]]系统中建模领域知识、学生理解与学习依赖。知识图谱使AI系统能够推理学生知道什么、接下来需要学什么，以及概念之间如何相互关联。

## 值得思考的问题

- 知识图谱捕捉的不只是概念，还有它们的关系——前置、相似、层级。为什么知道概念如何关联，对自适应系统可能比一份扁平的技能清单更有用？
- 你所处的领域里，前置关系是怎样的？你能想出一个学生因为缺少图谱会揭示的基础概念而经常挣扎的主题吗？
- 本页描述了用知识图谱检测知识缺口——即学习者缺少基础概念之处。把那个缺口显化出来，可能如何改变一个AI导师决定下一步教什么？
- 知识图谱可以手工构建，也可以由LLM从教育文本自动构建。让AI去建构一个导师将据以推理的概念结构，风险是什么？
- 如果知识图谱提供AI智能体据以推理的领域结构，那么当图谱本身含有一个错误或有偏见的关系时，信任与准确性会发生什么？
- 知识图谱被描述为支持细粒度诊断与个性化路径的结构骨架。在你自己[[teacher-role|教学]]或设计中，一个你所在学科的知识图谱需要捕捉什么——又会遗漏什么？

## 引言

知识图谱为许多智能教育系统提供结构骨架。与扁平的技能或概念清单不同，知识图谱捕捉前置关系、相似性与层级组织——这对[[adaptive-learning]]、[[knowledge-tracing]]与[[student-modeling]]都必不可少。

## 知识图谱在AIED中如何被使用

知识图谱是本知识库AIED [[research-methods-aied|研究]]中反复出现的结构机制，承担着若干各不相同的角色：

- **[[knowledge-tracing]]模型**利用概念图在相关技能间传播学生掌握度估计，在数据稀疏时提升预测准确性。
- **[[student-modeling]]系统**借助知识图谱以语义上有意义的方式表征学习者所知，实现细粒度诊断。
- **[[adaptive-learning]]平台**利用前置图来排序内容并推荐[[personalized-learning|个性化学习]]路径。
- **图上的算法选择会改变结果。** 在G4L中，通过一个演化知识空间图以贝叶斯知识传播来传播掌握度，产生了 +24% 的测得知识（0.717 → 0.887），而知识空间理论为 +5%，加权距离依赖归纳为 +1%（[[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes 与 Kovács，2026]]）。
- **[[cognitive-diagnosis]]框架**如 [[xie-hillm-cd-2026|HiLLM-CD]] 用LLM从教育文本构建概念树，免除了人工标注。
- **以知识图谱增强的辅导：** [[quantum-education-its|ITAS]] 使用一个量子概念知识图谱（带显式的前置关系）来驱动一个多智能体辅导系统，遍历图谱为反直觉材料选择下一个主题。
- **课程与课程建模：** [[coursegraph-cs-course-comparison-2026|CourseGraph]] 用图表示比较跨院校的CS课程结构；[[learnity-graphs-lifelong-learning-framework-2026|Learnity图]]对[[lifelong-learning|终身学习]]路径进行建模。
- **前置关系学习：** [[proprl-prerequisite-relation-learning|ProPrL]] 学习概念间的前置关系，把知识图谱所编码的边形式化。
- **知识缺口检测：** [[knowledge-gap-detection-ai-tas|知识缺口检测]] 在AI教学助手中使用基于图的推理，识别学习者缺少基础概念之处。
- **[[multimodal|多模态]]与可解释的推理：** [[multimodal-knowledge-graph-educational-reasoning|多模态知识图谱]]把图结构延伸到跨内容模态；[[fair-explainable-edu-recommendations|公平且可解释的推荐]]把知识图谱嵌入与序列建模相结合（一种混合的HKG-GRU框架）。
- **面向资源推荐的教学结构化图谱：** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu、Sun 与 Song（2026）]]把每个教学资源实体分解为四个教学维度（教学语境、认知层级、技术特性、文化适应性），在这些维度上计算依赖用户的语义相似度，并通过一个感知能力与进度的系数把它与协同过滤融合——把教学结构直接编码进推荐信号，而非把资源当作消费品对待。
- **基于本体的知识库：** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova（2026）]]提出一种扎根于描述逻辑的分层混合知识库架构，用一个**被映射的本体系统**取代经典ITS的单本体模型——增加了过程性（基于规则）、概率/模糊以及机器学习提取的隐式知识——外加一个用于描述、发现与复用教育本体的元数据框架。
- **[[scaffolding|支架]]与写作：** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] 与 [[visual-query-tracer-declarative-logic-learning|可视化查询追踪]]把基于图的结构应用于叙事起草与声明式逻辑学习。
- **人工策展的文学图谱，以及一次审计所揭示的：** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] 对文学前提作图——1,455条公理记录、指向149部作品的1,464条映射、472条带类型的关系——由[[llm|语言模型]]提出候选表述，再由人工策展者选取并加以落实。其重新计算的审计与它的结构同样有教益：每个端点都可解析，且不存在重复或自链接，然而1,455条公理中有1,448条恰好映射到一部作品（因此跨作品复用很稀疏），语境分类法无法区分它的两种语境类型，且没有来源记录留存，使这一快照无法重建自身的流水线。结构有效性不等于解释质量，而一个没有来源信息的策展图谱既无法被审计，也无法被刷新。

## 由LLM驱动的知识图谱构建

近来的研究探索用[[llm|LLM]]从教育内容自动构建知识图谱。[[xie-hillm-cd-2026|HiLLM-CD]]框架使用多智能体LLM流水线生成练习—概念链接与层级概念树，减少对专家标注的依赖。这与[[generative-ai]]在课程设计与自动内容组织中的更广泛应用相连，也与[[rag]]（检索增强生成）相连，在那里图结构化的知识可以比扁平相似度检索改善检索质量。

## 与其他概念的关系

知识图谱与[[learning-design]]（定义教什么）、[[curriculum-design]]（如何排序）以及[[learning-analytics]]（从学生互动数据中提取洞见）相连。它们是[[intelligent-tutoring]]系统的基础，这类系统需要教育领域的结构化表示。随着AI智能体在教育中日益常见，知识图谱提供了[[agentic-ai|智能体系统]]据以推理的领域结构——这一模式见于[[quantum-education-its|ITAS]]与知识缺口检测教学助手。

## 关联概念

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — 总括：AI技术与技术手段（模型、LLM训练、机器人、RAG、智能体）
- [[recommender-systems-and-learning-paths]]
## 关联文章
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — 一座由策展者构建的1,455条文学公理图谱，有结构审计但无来源记录（Liu & Zhao 2026）
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — 面向个性化e-learning的基于本体的分层混合知识模型
- [[learnity-graphs-lifelong-learning-framework-2026]] — 面向终身学习的Learnity图
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge：叙事起草支架
- [[quantum-education-its]] — 量子教育智能辅导（ITAS）
- [[multimodal-knowledge-graph-educational-reasoning]] — 面向教育推理的多模态知识图谱
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph：CS课程比较
- [[proprl-prerequisite-relation-learning]] — ProPrL：前置关系学习
- [[knowledge-gap-detection-ai-tas]] — AI教学助手中的知识缺口检测
- [[visual-query-tracer-declarative-logic-learning]] — 面向声明式逻辑学习的可视化查询追踪器
- [[fair-explainable-edu-recommendations]] — 公平且可解释的教育推荐
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — 面向多模态教学资源的混合CF–KG跨域推荐
- [[xie-hillm-cd-2026]] — HiLLM-CD：LLM驱动的认知诊断
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol：学习环境生成
