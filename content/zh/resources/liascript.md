---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "一种开放的 Markdown 方言，能把一个纯文本文件变成浏览器中的交互式课程，内含测验与可运行代码，并配有用于构建课程的多智能体助手。"
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**LiaScript** 是一种扩展的 Markdown 方言及其解释器。一个纯文本文件就能变成一门交互式课程：同一份文档既可以作为叙述阅读，也可以作为幻灯片播放，还可以作为一门课程逐步学习，一切都在浏览器中完成。编写或阅读都无需安装任何东西。

## 你能用它做什么

测验采用教师预期的各种形式，包括单选、矩阵题、文本输入、下拉菜单和填空，都直接写在 Markdown 里。代码块可以设为可编辑并可运行，用于[[cs-education|编程]]教程；宏系统把 JavaScript 库封装成可复用的块，因此交互式图表无需每位作者编写代码。课程可以托管在作者已存放文本的任何地方，无需绑定任何服务，而且全部在客户端运行，因此加载后的课程可以离线使用。LiaScript Exporter 还能把课程打包为 SCORM 格式，用于 Moodle、ILIAS 及其他[[edtech-platform|学习管理系统]]。

## 用于构建课程的教学智能体

该项目还发布了一个用于编写 LiaScript 课程的 **[teaching agent](https://github.com/LiaScript/teaching-agent)**，采用 Boost Software License 1.0 许可。四个分别负责教学、视觉设计、学习者评审和发布的智能体围绕一个保存课程状态的单一项目文件协同工作，采用"先定义"的工作流：目标、受众和教学法在任何材料撰写之前就确定下来，之后还有验证关卡。草稿可以从指定的学习者人格出发进行评审，以检查[[cognitive-offloading|认知负荷]]和假定的先备知识。该智能体与编辑器无关，能从一份规格说明生成 Claude Code、Copilot、Codex、Cursor 或网页聊天的配置；同时这个仓库本身也是一个完整的示例，内含一门关于欧盟 NIS2 指令的六单元课程，以及一份描述其制作过程的文档。

## 注意事项与限制

LiaScript 免费，没有付费层级，也不需要账户，并在 BSD-3-Clause 下公开开发，因此机构可以自行托管和修改。Live Classroom 功能在大规模依赖之前值得先看一下，因为实时同步使用的是共享服务，而非纯粹的本地渲染。教学智能体尚新且采用者寥寥，应将其视为工作原型而非受支持的产品。

## 关联概念

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
