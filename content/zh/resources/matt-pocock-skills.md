---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "Matt Pocock 的开源小型可组合 Agent Skill 合集，包括一个跨会话的教学 Skill、一个穷追不舍式提问的 Skill，以及撰写代理可执行文档的指引。"
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Skills for Real Engineers** 是 Matt Pocock 公开发布的 Agent Skill 目录：一套小型、可组合的指令文件，可装入 Claude Code、Codex 或其他代理，其设计初衷是供人改写而非整套照搬。合集里大多数 Skill 服务于软件开发，但也有若干是教育工具，是为教学与提问而非为写代码而造的。

最清晰的例子是 `teach`，它跨多个会话运行，把工作目录当作一个有状态的教学工作区，因此学习者的进度和悬而未决的问题会在对话之间保留，而不是每次都从头开始。`grill-me` 及其底层原语 `grilling` 就一份计划对用户穷追不舍地追问，直到每个分支都得到解答——这是把 [[socratic-method|苏格拉底式提问]]（Socratic questioning）变成可复用的流程，而非一种对话氛围。`wait-what` 在一条消息没被理解的那一刻就介入，用平实语言补上缺失的语境重新讲一遍——任何见过"第一次讲解没讲明白"的教师都认得这一招。`writing-for-agents` 讲的是如何撰写 [[prompt-engineering|代理]]（agent）能遵循的文档，这在今天就是为 [[pedagogical-agent|AI]]（AI）课程材料撰写使用说明的实际形态。`to-questionnaire` 把一个决策转化为给能回答它的人的问卷，`handoff` 把一段对话压缩成另一个代理可以接着干下去的文档，`wizard` 则为只有人能执行的步骤生成交互式演练。

## 采用之前需要了解什么

全部内容以 [[open-source|开源]]（open source）形式发布于 MIT 许可下，可免费取用，作为本地开展 [[ai-literacy|AI 素养]]（AI literacy）或 [[self-directed-learning|自主学习]]（self-directed study）的起点。采用规模很大且变化迅速：2026 年 9 月查看时约 270,000 stars、23,000 forks，最近一次提交在 2026 年 9 月 18 日。需要注意的是适用范围。这些 Skill 默认 [[human-ai-collaboration|工程师]]（engineer's）的工作语境，并被归入工程、生产力、已废弃和进行中四个分区，因此部分条目明确标注未完成或已退役，README 里还夹着通讯订阅入口。把教学与提问类 Skill 当作其中可迁移的部分，并预期在拿到学生面前之前要对其中的任意一个进行改写。

## 关联概念
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
