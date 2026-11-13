---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "沃顿生成式 AI 实验室的开源创作系统，把与教育者的结构化访谈转化为可运行、可自适应的学习模拟，并自带导师、练习和反馈智能体。"
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

Primer 是一个[[open-source|开源系统]]，用来通过向 AI 描述一节课来构建教育[[simulation|模拟]]，而不是编写程序。教育者的判断决定模拟教什么：一次访谈引出教师对课程和学生的了解，一份设计文档让这些知识可供审阅，而在教育者批准之前不会构建任何东西。

## 你可以用它做什么

访谈一次只问一个问题：课程、学生的水平和先备知识、常见误解、教师的方法，以及如何评估成功。教育者可以口述或输入，也可以上传教学大纲、教案或评分标准。返回的是一份设计文档，涵盖目标、情境流程、角色、利害关系和适配逻辑，教育者像修改教案一样修改并批准它。随后五个智能体将其构建出来：Intake、Design、Casting Director、Image Generation 和 Experience Builder，最后一个为单个学生或整个班级组装结果。

运行时有三类智能体面对学生。导师智能体激活先备知识并揭示误解。练习智能体扮演角色扮演对手，或在 teachback 中扮演学生，由学生解释一个概念，并在被追问时修改解释。反馈智能体依据对话记录工作，讨论具体时刻以及学习如何延伸到情境之外。每个智能体都有一个世界内角色和一个教学层，用于追踪目标并收集证据，教育者会得到个人和汇总报告。

## 适用对象

教师、教学设计师和教师发展人员可以详细描述一节课，而不必为此写代码。研究教育者在环创作或[[agentic-ai|多智能体工作流]]的研究者能得到一个可检查的可用系统，开发者可以扩展它，因为提示词、模板、检查清单、编排模式和 TypeScript 代码全部开源。

## 说明与注意事项

作者称 Primer 是实验性原型，而不是经过审查的课堂产品。它尚未在课堂中作为学习干预接受评估，也没有人按 FERPA、COPPA、州学生隐私法或学区政策审查过它，因此将其用于学生的机构要自行承担这项审查。该软件采用 MIT 许可证且免费，但运行模拟需要模型访问权限，这要花钱。由于它与模型无关，可运行在本地或开放权重模型上，因此可以部署在隐私规则更严格的地方。项目页面链接了一份关于架构和提示词的白皮书。2026 年 11 月核查时，该仓库有 98 个星标和 16 个复刻。

## 关联概念

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
