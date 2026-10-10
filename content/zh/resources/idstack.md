---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "一套开源的十一个 Claude Code 技能，依据教学设计证据库对课程进行审计，并为每条建议标注证据等级。"
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**idstack** 是一套面向循证 [[learning-design|教学设计]]的开源技能合集，共十一个技能，以 Claude Code 插件形式分发，并附带一个配套的 Chrome 侧边栏扩展。这些技能并不代你起草课程，而是对课程进行审计：它们对照修订后的布卢姆分类学对学习目标进行分类，检查目标、活动与评价之间的建构性对齐，标记认知负荷问题，并对照 WCAG 2.1 AA 与通用学习设计（Universal Design for Learning）审查无障碍性。每条建议都带有一个证据等级，从 T1（元分析与随机对照试验）到 T5（专家意见）依次排列。项目声明其引文涵盖十一个研究领域的 108 项同行评议研究；该数字是项目自身的说法，其参考文献以 Markdown 形式公开，审阅者可自行核查。

课程可通过 Canvas API 连接、IMS Common Cartridge 文件、SCORM 包、创作工具导出的 PDF，或粘贴的文档进入系统。一个共享的项目清单会在多次会话之间记住课程，流水线技能则串联各设计阶段并跳过已完成的工作。评审会对照 Quality Matters 的八项标准与探究社区（Community of Inquiry）框架出具报告，区分教学存在感、社会存在感与认知存在感，然后按严重程度对建议排序。

## 采用前须知

该插件需要 Claude Code 与 bash 环境才能安装；PowerShell 与 cmd 无法运行安装脚本，若需查看分数趋势建议安装 Python 3。课程数据保存在读者自己机器上的项目文件夹中，只有通过用户主动调用的集成（如 Canvas API 调用）才会离开该机器。Chrome 扩展的实时推理需要读者自备免费的 Google AI Studio API 密钥，不过模拟模式可在无密钥的情况下演示其效果。项目自标 3.5.1.0 版本为 beta 状态，并警告次要版本之间可能存在破坏性变更；它发布在 savvides 的 GitHub 账号下，而非由具名作者发布。

## 关联概念

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
