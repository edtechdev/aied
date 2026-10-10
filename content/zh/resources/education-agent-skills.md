---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-10-09T19:11:14-04:00"
type: resource
summary: "一个包含 165 个基于证据的 agent skill 的库，覆盖教学法、学习科学、课程与评估，已为 Claude、Codex 与 Hermes 打包。"
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
contributors: [editor]
translation_of: resources/education-agent-skills
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Education Agent Skills** 是一个面向教师、学校管理者以及教育工具开发者的 165 个 agent skill 库。这些 skill 分为二十个领域，涵盖教学法、学习科学、[[curriculum-design|课程]]、评估与重构，每一个都写成供 [[agentic-ai|agent]] 加载的形式，而不是供人阅读的文档。

## 你能用它做什么

Skills 可以安装到 Claude Code、Codex 和 Hermes 中，既可以作为插件安装，也可以直接复制文件夹，因此同一个库可以在多个 agent 环境中工作。托管的 MCP 服务器把整个集合暴露为工具，供那些无法在本地安装 skill 的 agent 使用；仓库同时提供了注册表和一个预构建的 bundle，这样服务器在部署时无需逐一读取单个文件即可提供整个集合。

该项目最突出的主张是它的循证性：skill 会注明它所依据的证据，而仓库自身的提交记录也表明这种纪律是被强制执行的，而不只是口头声明——其中包括一次已合并的修复，删除了一个没有依据的出处标注，并修正了对某篇被引研究中所测试的防护措施的描述。

## 说明与注意事项

教育类 skill、文档和课程材料采用 CC BY-SA 4.0 许可，因此可以自由复用和改编，但衍生作品必须采用相同的许可。如果你要部署它，有两处运维细节值得注意。托管的 MCP 端点需要令牌，而不是对任何人开放；并且由于服务器提供的是已提交的快照而非 SKILL.md 文件，你在未重新构建并提交 bundle 的情况下新增的 skill，即使重新部署也不会出现在线上服务器上。该库由教育者兼课程设计者 Gareth Manning 构建，许可条款专门适用于其中的教育内容。

## 关联概念
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]
