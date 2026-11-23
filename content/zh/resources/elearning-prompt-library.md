---
title: "eLearning 提示库"
created: "2026-11-23T09:12:00-05:00"
updated: "2026-11-23T13:10:00-05:00"
type: resource
summary: "Sunil Iyer 的 MIT 许可 GitHub 合集，收录 22 条面向教学设计师和 eLearning 开发者的现成 AI 提示，每条都标注了它所应用的学习理论。"
url: https://github.com/linuxsunil/elearning-prompt-library
source_code: https://github.com/linuxsunil/elearning-prompt-library
author: "Sunil Iyer"
author_url: https://github.com/linuxsunil
resource_type: [prompt or gem library]
access: [free]
license: "MIT"
last_verified: "2026-11-23"
foundations: [ai-literacy, learning-design]
pedagogy: [learning-theories]
technology: [generative-ai, prompt-engineering]
audience: [instructional designers, educational technology developers, curriculum designers]
connected_resources: []
translation_of: resources/elearning-prompt-library
source_updated: "2026-11-23T13:10:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-23"
    agent: hermes-agent
connected_concepts: [prompt-engineering, learning-design, learning-theories, generative-ai]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**eLearning 提示库** 是 Sunil Iyer 的一个 GitHub 仓库，收录了为教学设计师、eLearning 开发者和 L&D 项目经理编写的 [[prompt-engineering|AI 提示]]。22 个提示文件分放在 7 个类别文件夹中——教学设计、内容开发、Articulate Storyline 与 Rise、评估、项目管理、QA 与审查，以及 AI 媒体。每个文件都是一个带方括号占位符的复制粘贴块，并且都标明了它所应用的学习理论；一份配套参考文档列出了 6 个族系的 60 种理论。作者的立论是：通用提示产出的内容看起来像教学，却没有扎根于人们如何学习；而给每条提示都标注一个具名理论，正是让这套合集可用的原因。

## 你可以用它做什么

这个库按制作任务而不是按工具来组织。教学设计类提示涵盖：对照 [[bloom-taxonomy|布鲁姆目标分类学]]的差距分析、认知负荷审计、把 SME 笔记转成教案、选择理论、规划加涅九事件模块、动作映射，以及 UDL 无障碍审计。内容类提示用于搭建故事板框架、旁白脚本和 ARCS 动机审查。Storyline 和 Rise 类提示处理触发器逻辑、Rise 区块排序和 HTML5 交互规范；评估类提示涵盖分支情境、题库和柯克帕特里克评估规划；另有两条项目管理和两条 QA 提示补全整套合集。

这些提示与工具无关——README 说它们可以在 Claude、ChatGPT 或 Gemini 中运行——而贡献指南要求每位作者提供三到五条简短的“Notes”，附上迭代技巧。

## 适用对象

适合那些想要一个有理论标注的起点、而不是一片空白提示框的教学设计师和教育技术开发者，以及正在制作 Articulate Rise 或 Storyline 课程的 L&D 团队。它适合已经知道哪种理论适合某个项目、并且想要提示脚手架的人。这是一个面向成人学习和工作场所学习的专业制作库，不是面向学生的课堂工具。

## 说明与注意事项

- **数量对不上。** README 的徽章和它的类别表都写着 23 条提示；仓库里只有 22 个 Markdown 提示文件，它自己的索引表也停在 22。
- **理论标注是作者自己的对应。** 没有任何东西能验证一条提示真的应用了它所标注的理论。“Evidence-based”和“production-ready”是作者的主张，每份输出进入课程之前仍需做专业内容核查。
- **非常年轻，且未经审核。** 截至 2026 年 11 月，只有一位贡献者、2 颗星、没有已发布的版本，仓库创建于 2026 年 11 月 15 日——只有几天历史，并非一个受维护的合集。采用数据为 2026 年 11 月 23 日读取的值。
- **MIT 许可。** 可自由复制和改编，包括商业用途，只需署名。
