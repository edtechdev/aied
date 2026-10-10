---
title: "构建智能教科书"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T12:03:06-04:00"
type: resource
summary: "Dan McCreary 的开源指南，讲解如何构建智能教科书——具备搜索、导航、术语表、测验、概念图和嵌入式仿真的在线教科书——使用 MkDocs Material 和生成式 AI，并配有一个由 AI 生成的交互式 MicroSims 库。"
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Intelligent Textbooks** 网站是 Dan McCreary 的分步指南，讲解如何构建*智能教科书*——这种在线教科书通过加入搜索、站点导航、术语表、目录、测验管理、渲染公式、社交媒体预览、链接检查，以及一张易于直观化的**概念图**（展示一门课程中的所有概念及其依赖关系）来超越静态 PDF。该指南认为，当今许多课程都能从具备这些功能的高质量在线教科书中受益，并展示了如何使用 [MkDocs](http://mkdocs.com/) 构建系统配合 Material 主题和生成式 AI 来创建和维护内容。

决定性的一步在于：教科书是*以 Markdown 撰写、由 AI 生成*的，这是 [[vibe-coding|AI 辅助撰写]]模式在 [[curriculum-design|课程内容]]上的一个具体实例：你不必手工维护一个庞大的站点，而是描述课程，让生成式 AI 生成并维护页面，由工具链处理导航、搜索和概念图。配套的 [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) 库声称能将从课程描述构建 2 级教科书所需任务的 90% 以上实现自动化。

## 一个配套资源：MicroSims

本指南的自然配套是 McCreary 的 **MicroSims** 库，位于 <https://dmccreary.github.io/microsims/>（源码：[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)），它提供了智能教科书所嵌入的交互式仿真。一个 *MicroSim*（微观仿真）是用 AI 生成的简单交互式仿真，用于帮助教师讲解某个概念，它可以嵌入智能教科书或任何接受 `iframe` 的站点。MicroSims 的独特之处有三点：**AI 辅助生成**（标准化的设计模式可将一段对仿真的自然语言描述转化为可分享的资产）、**通用嵌入**（单个 HTML `iframe` 元素即可将其放入任何页面）以及**透明、可修改的代码**（没有黑箱——一次点击即可在网络编辑器中打开该仿真，且 Creative Commons 许可让大多数教师无需支付许可费即可使用）。这一术语由 Valerie Lockhart 于 2023 年提出，当时她发现教师和学生几乎无需培训就能用 p5.js JavaScript 库构建仿真。

该项目还发布了一个 MicroSim 元数据的 JSON Schema，让 AI 工具能够生成可搜索的描述符，并计划在路线图中加入带分面的 MicroSim 注册库。一篇描述该框架的研究论文——*MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support*——发布在 arXiv 上（[2511.19864](https://arxiv.org/abs/2511.19864)）。示例仿真包括 Bouncing Ball、Projectile Motion、String Harmonics、Conway's Game of Life、Euler's Formula，以及一个股市收益率图表，每一个都在站点上实时运行。

## 它面向谁

希望构建或维护课程教科书的教师和教学设计师，尤其是高等教育和职业培训领域的，此外还包括教师发展工作者以及任何使用生成式 AI 撰写教育内容的人。它适合那些熟悉 Markdown-and-Git 工作流（或愿意学习它）、并希望 AI 来处理站点底层事务——搜索、导航、概念图——以便自己专注于教学法的教育者。

## 备注与注意事项

这是一本实践者的指南和一套工具链，而非经过同行评审的研究——它呈现的是一个工作流及其自身的教育学理据（“智能教科书引导学生在求知之路上穿行于概念之间”），而非学习成果的证据。MicroSim 研究论文是最接近实证支撑的东西，而它自行发布在 arXiv 上。两个项目都是开源的（intelligent-textbooks 仓库报告为 MIT 许可、38 星；MicroSims 报告为 Creative Commons 许可、13 星），且都在积极维护。概念图和以术语表为先的结构对于可发现性确实有用，但该指南假定了一套相当技术化的撰写工作流——MkDocs、Git 和生成式 AI 工具——这可能会对某些教师构成障碍。截至采集时，MicroSims 的注册库仍只在路线图中，因此查找某个特定已有仿真仍依赖站点自身的搜索和导航。

## 关联概念

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
