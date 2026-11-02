---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "一款免费、开源（AGPL-3.0）的桌面应用：AI 智能体先测量学习者已经理解的内容，规划通往目标的依赖关系图，一次讲授一个推理步骤，并自适应地安排练习——同时维护一张由命题与推理链构成的持久知识图谱，供后续会话读取，而不必从头开始。"
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**LearnHarness** 是一款用于 [[agentic-ai|智能体辅助]]学习的桌面应用，它围绕[[prior-knowledge|学习者已经理解的内容]]、而不是围绕一份主题清单来组织一堂课。项目描述了四个动作：**测量**，即探查目标所依赖的那些想法，找出理解止于何处；**规划**，即推导出通往目标的依赖关系图，并将其呈现为课程地图；**讲授**，即按照“预测—解释—核对”的节奏一次推进一个推理步骤，使困惑能在任何东西建立其上之前先得到修补；以及**练习**，即针对学习者自身困难的问题流。

## 你可以用它做什么

它独特的输入是思维场（thinking field）：学习者书写或口述自己的推理与不确定之处，而不只是给出答案；项目把这当作智能体描摹推理过程的方式，而不是一份对错记录。它还能在后台研究问题、生成可视化解释，并构建交互式演示。

积累下来的是一张由命题与推理链构成的[[knowledge-graph|知识图谱]]，各条推理链都链接回其来源会话，并被后续的讲授与练习智能体作为上下文读取；笔记可以导入。项目称该图谱存储的是想法及其联系，而不是对能力的评分。

## 它面向谁

在困难材料上独立学习的学习者，以及想看看一个智能体原生的 [[intelligent-tutoring|AI 导师]]在其提示词与状态可被检视时是什么样子的教师或开发者。它用 TypeScript 编写，从源码运行，其测试被记录为确定性的、不调用模型。

## 备注与注意事项

免费涵盖的是软件，而非推理：学习者自带供应商密钥、订阅、本地 Claude Code CLI 或任意 OpenAI 兼容端点，并直接向供应商付费、没有加价；实时计量器只估算已知的 API 成本。记录、对话与密钥都以纯文件形式留在本机，但项目警告说本地存储并不等于离线处理，因为模型请求、可选的口述以及网络研究都会触达外部服务。Windows x64 安装包未签名，因此 Windows 会给出警告。没有报告任何有效性研究，因此该案例依据的是所陈述的理据，而非实测结果；2026 年 11 月 2 日核查时，该仓库约有 4,800 颗星。

## 关联概念

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
