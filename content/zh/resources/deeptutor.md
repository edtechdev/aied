---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "DeepTutor 智能体辅导框架的开源版本：一个工作空间同时承载辅导、题目生成、掌握度练习、研究与可视化，学习者记忆可见可编辑。"
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**DeepTutor** 是 [[intelligent-tutoring|DeepTutor 研究]]中所评估辅导框架的开源实现，如今它已远远超出那篇论文的范围，发展成为一个通用的智能体原生学习工作空间。辅导、解题、测验生成、掌握度练习、研究与可视化共享同一套能力运行时与同一个会话上下文，因此学习者在解题过程中建立的学习者画像会约束后续的解释与练习题目。

## 你能用它做什么

十种模式——Chat、Ask Questions、Quiz、Research、Visualize、Solve、Course Study、Mastery Path、Immersive Reading 与 Immersive Watching——运行在同一运行时上，可调用可复用的知识库、书籍、草稿、笔记、题库与角色设定。检索刻意采用多引擎设计：基于 LlamaIndex、PageIndex、GraphRAG、LightRAG 的版本化 RAG 库，或远程 LightRAG 服务器，加上自托管的 WeKnora 底座、腾讯 IMA 或 MarginNote 库，或关联的 Obsidian 仓库。记忆是可见的而非黑箱：L1 轨迹、L2 表层摘要与 L3 综合均可查看和编辑，并用一张 Memory Graph 将每条摘要与其背后的证据相连。一个 `deeptutor` 可执行文件提供终端 REPL，并为任何想把它当作工具驱动的智能体流式输出 NDJSON，EduHub 社区则分发可安装的技能。

## 适用对象

希望获得论文所报告框架可部署版本的高校教师与研究者、基于可插拔运行时进行开发的开发者，以及愿意自行运行实例的自主学习者。文档位于 deeptutor.info。

## 说明

采用 Apache 2.0 许可，截至 2026 年 9 月为 1.6.9 版本，约有 40,000 个 GitHub star。其背后已发表的评估——在个性化指标上相较强基线平均提升 10.8%，在 TutorBench 基准上跨五种骨干模型的通用智能体推理提升 29.4%——在 [[deeptutor|文章页]]上有概要，该页的局限同样适用于此。与任何开源 AI 技术栈一样，模型提供方的密钥需由你自行提供，桌面或服务器部署需要 Python 3.11 与 Node。

## 关联概念

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
