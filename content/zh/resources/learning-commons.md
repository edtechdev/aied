---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-07T17:17:38-05:00"
type: resource
summary: "由 Mark Zuckerberg 与 Priscilla Chan 的教育计划提供的开放人工智能基础设施：标准、课程与学习科学数据的知识图谱，用于评判大语言模型输出的评估器，以及面向教师工作流、与模型无关的 agent skills。"
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Learning Commons** 发布三件开放工具，用于把 AI 功能架在真实的课程内容之上——一个由学术标准、课程与学习科学研究构成的 **[[knowledge-graph|Knowledge Graph]]**，一个用于评判生成文本的 **Evaluators** 库，以及面向常见教师工作流、与模型无关的 **[[agentic-ai|Agent Skills]]**——并运营一个平台，其中增加了 Curriculum Sync，用于把课程载入 [[edtech-platform|学习管理系统]]。

## 你能用它做什么

**把生成内容对齐到一项标准。** Knowledge Graph 在同一个共享模式下，把标准、[[curriculum-design|课程]]与研究建模为实体与关系。产品可以查询一个条目应指向哪项标准、遍历先修关系，或把导师的内容锚定在它本应教授的课程上，而无需自建并维护数据管道。

**在学生看到之前给生成输出打分。** **Evaluators** 衡量 [[llm|大语言模型输出]]的各项属性——文本复杂度、[[feedback]]、标准对齐度与持久技能——并以 Python 与 TypeScript SDK 的形式发布在 npm 与 PyPI 上。在实践中，它们可用于提示或模型变更时的回归检查、候选模型之间的比较，或对生成条目与解释的过滤。

**打包一个教师工作流。** **Agent Skills** 以开放、与模型无关的格式把指令、参考资料与护栏打包起来：理解程度检查、分层式课程差异化、对齐标准的教案，以及备课。它们可以被放进一个智能体框架，也可以被当作现成的模板来阅读，看看一个可靠的课堂工作流需要多少结构。

**把一门课程移入学习管理系统。** Curriculum Sync 是平台层面的那一步，它把一张标准地图变成一门课程在学习管理系统中真正可用的东西。

## 面向谁

把 AI 功能构建进课程与[[assessment|测评]]产品的开发者，以及为这些产品提供对齐数据来源的课程或标准团队。[[teacher-role|教师]]可以自行使用 Agent Skills，但该仓库自身的定位是为交付工具的人提供基础设施。

## 说明与限定

[[open-source|源码]]开放并不等于数据开放。Knowledge Graph 与 Evaluator 的代码是 MIT，Agent Skills 是 Apache-2.0，而每个数据集各自带有访问标签——Open、Open + Gated 或 Gated——且 Gated 内容不在该仓库所援引的开放许可覆盖范围之内，因此在假定拥有再使用权之前，请先查看数据集目录。Evaluator 的提示词内容是 CC BY 4.0，但它所使用的带标注的 CLEAR 与 PERSUADE 2.0 语料库是 CC BY-NC-SA 4.0。平台及其背后的数据集需要账户。

## 关联概念

- [[curriculum-design]] — 图谱的存在是为了把生成内容对齐到标准与课程
- [[open-source]] — MIT 与 Apache-2.0 代码，数据按数据集分别授权
- [[educational-nlp]] — 评估器是大语言模型输出之上的一层文本度量
- [[agentic-ai]] — 把工作流打包给模型执行的技能
- [[edtech-platform]] — Curriculum Sync 把课程载入学习管理系统
- [[llm]] — 评估的对象，也是这些技能的消费者
