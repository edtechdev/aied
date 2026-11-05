---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Learning Commons** 是 Mark Zuckerberg 与 Priscilla Chan 的教育计划，于 2025 年启动，旨在把 Chan Zuckerberg Initiative 的学习科学工作带入教育科技产品实际赖以构建的基础设施之中。它的论证是基础设施式的，而非教学法式的：研究已经存在，学术标准已经存在，高质量课程也已经存在，但它们分处不同的系统，于是开发者只能在最容易够到的东西上构建。该组织在 GitHub 上发布三件开放工具——Knowledge Graph、一组 Evaluators 以及 [[agentic-ai|Agent Skills]]——并运营一个平台，其中增加了 Curriculum Sync，用于把课程载入 [[edtech-platform|学习管理系统]]。

## 你能用它做什么

**Knowledge Graph** 把学术标准、课程与学习科学研究建模为同一套共享模式下的实体与关系，因此工具无需自建数据管道，就能把生成的内容对齐到某项标准。**Evaluators** 从学习科学的视角衡量 [[llm|大语言模型输出]] 的属性——文本复杂度、[[feedback]]、学术标准对齐度与持久技能——并随附 Python 与 TypeScript SDK，发布在 npm 和 PyPI 上，用于为生成内容打分或比较候选模型。**Agent Skills** 以开放且与模型无关的格式，把常见教师工作流的指令、参考资料与护栏打包起来：理解程度检查、分层式课程差异化、对齐标准的教案，以及备课。在实践中，正是这张图谱让另外两者可信：内容对齐是主张，而图谱是核验该主张时所对照的基准。

## 面向谁

把人工智能功能构建进[[curriculum-design|课程]]与测评产品的开发者，以及为这些产品提供对齐数据来源的课程或标准团队。教师可以自行使用这些 agent skills，但该仓库自身的定位是为交付工具的人提供基础设施。

## 说明与限定

[[open-source|源码]]开放并不等于数据开放。Knowledge Graph 的代码是 MIT，而每个数据集各自带有访问标签——Open、Open + Gated 或 Gated——且 Gated 内容明确不在该仓库所援引的开放许可覆盖范围之内，因此在假定拥有再使用权之前，请先查看数据集目录。Evaluators 的代码是 MIT，其提示词内容是 CC BY 4.0，但它所使用的带标注的 CLEAR 与 PERSUADE 2.0 语料库是 CC BY-NC-SA 4.0。平台及其背后的数据集需要账户。截至 2026-11-04 读取到的仓库活动：Knowledge Graph 167 颗星，Evaluators 88 颗，Agent Skills 41 颗。该计划由 CZI 资助，其对问题的界定也出自资助方自身。

## 关联概念

- [[curriculum-design]] — 图谱的存在是为了把生成内容对齐到标准与课程
- [[open-source]] — MIT 与 Apache-2.0 代码，数据按数据集分别授权
- [[educational-nlp]] — 评估器是对大语言模型输出做文本度量的一层
- [[agentic-ai]] — 把工作流打包给模型执行的技能
- [[edtech-platform]] — Curriculum Sync 把课程载入学习管理系统
- [[llm]] — 评估的对象，也是这些技能的消费者
