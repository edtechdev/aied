---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-10-09T19:11:13-04:00"
type: resource
summary: "一个本地优先的 AI 教学助手，能把你自己的课程材料转化为可编辑的教案草稿、学生材料和幻灯片，并由你自行选择模型。"
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
source_updated: "2026-09-23T21:05:00-04:00"
translation_of: resources/claw-ed
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Claw-ED** 是一个本地优先的教学助手，能根据你自己的课程材料起草教案。教师导入自己的资料，提出生成一份课的请求，就能得到可编辑的草稿，连同面向学生的材料和幻灯片——全部由教师自选的模型生成，而不是绑定某一家供应商。

## 你可以用它做什么

工作流从导入一路走到草稿、审阅和导出，草稿被当作教师可以继续编辑的起点，而不是可以直接发放的成品。生成任务会排队并可恢复，长时间生成失败后可以续跑而不必从头开始，生成的成果也可以下载。它还通过 MCP 服务器把自己的工具暴露给 [[agentic-ai|智能体（agent）]]，并且可以连接 Google Drive，学校因此能把它接入现有的存储和排课系统。

项目刻意保持模型无关：它把本地 Ollama 模型、廉价的 OpenRouter 路由和托管方案并列记录在文档中，模型指南还标注了日期，说明这些推荐只是基于目录的起点，而不是教师对质量做出的评判。

## 说明与注意事项

软件本身免费，其原创代码采用 MIT 许可，属于 [[open-source|开源]]，但第三方组件仍保留各自的条款；如果使用托管模型，运行它意味着你要为自己的模型推理付费。项目自称是"经过教师审阅的 beta 版"，并在 README 中直言通过它的 CI 并不能证明其在真实模型上的教学质量——这正是看待这个领域绿色测试套件的正确方式：它验证的是软件，而不是 [[pedagogy|教学法]]。项目由 MacxLabs 维护，接受经过教师审阅的示范课作为贡献。

## 关联概念
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
