---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-10-09T19:11:14-04:00"
type: resource
summary: "一种开放的纯文本格式，用于基于区块的 eLearning 课程，另附一个能以该格式编写课程、测验与整套课程包的 agent skill。"
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**LESSON.md** 是一种面向基于区块的 eLearning 内容的开放格式：一个带 YAML frontmatter 的 Markdown 文件，用 `:::` 指令描述文本、图片与知识检测，人可阅读，任何工具也可解析。它之所以存在，是因为课程内容通常被锁定在某一个编写工具内部，也因为 [[llm|大语言模型]]只能帮助它们真正读得懂的课程。

## 你能用它做什么

在任何文本编辑器里写好一课，再导入任何支持该格式的工具，无需复制粘贴和重新排版。交互元素——带尝试次数限制和按答案反馈的多选知识检测——以简单的属性来表达，而不需要图形界面。放在课程包根目录的配套文件 `ASSESSMENT.md` 即成为该课程的计分 [[assessment]]。项目还提供了一个 `lesson-md` skill，用来教会 Claude、Codex 或其他 [[agentic-ai|agent]]这种格式，因此用自然语言描述一门课程，就能得到课程、测验和完整的课程包。

## 适用对象

面向希望内容在更换工具后仍然存续的教学设计者和课程创作者；面向希望提供用户已经理解的导入导出格式的 eLearning 厂商；以及任何在可读格式之上构建 AI 辅助编写能力的人。贡献者包括 LXD Integral 的 Dan Bashaw，该格式有公开的更新日志，目前已到 v1.8。

## 关联概念
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
