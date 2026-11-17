---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "一个开源的 MCP 服务器，让 Claude、Cursor、Codex 及其他代理在 Canvas LMS 中读取和操作——面向学生、教师与教学设计者的工具，写操作受门控，并可选择对学生数据做匿名化处理。"
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Canvas MCP** 是 Vishal Sachdev 开发的一个开源 Model Context Protocol 服务器，把 AI 客户端连接到 Canvas LMS 实例：代理可以列出一名学生接下来要交的作业、读取一门课程的作业与提交、给一个班级发消息，或者审查一门课程的无障碍情况，全部通过该服务器暴露的工具完成，而不是靠临时的屏幕抓取。

## 你可以用它做什么

该服务器提供三类工具。学生工具针对 Canvas 自己的 `self` 端点回答「这周有什么要交」「我是不是都交了」「我还剩几次测验机会」。教师工具可以列出和创建作业、读取提交、批量评分、发送对话，并提取作业分析。教学设计工具覆盖课程质量检查与 WCAG 无障碍扫描。总共可用多达 128 个工具，不过默认配置注册的工具较少，功能门控的工具会提高这一数字。在工具之外，八个代理技能把多步流程打包成可复用的配方——一份每周计划、一次晨间课程健康检查、一棵批量评分决策树、一条同行评审流水线、一次学期前课程审查——可通过 `skills.sh` 安装到 40 多个代理中。

## 适用对象

想让代理处理一门课程周边例行读取与消息工作的教师，以及正在评估接入 LMS 的代理究竟能触及什么的[[institutional-ai-infrastructure|院校团队]]。教学设计者在这里能得到最接近自动化课程评审的东西。这个项目是[[agentic-ai|代理式工具]]在一个院校 LMS 层面上的完整范例，而不是一个通用聊天机器人。

## 说明与注意事项

安装在本机进行：Python 3.11 或更新版本、一个 Canvas API 令牌和 URL，以及一个 MCP 客户端，另有一个可双击安装的 Claude Desktop 扩展。公开的托管服务器已经退役，所以共享部署意味着要在院校自己的认证之后自托管。写入工具是受限的——除非明确允许写入工具，HTTP 服务器是只读的，删除需要确认令牌，代码执行运行在一个出错即关闭的沙箱里。隐私控制需要主动开启：响应匿名化、电子邮件掩码和 PII 过滤必须手动启用，README 也谨慎地说明，这些可以支持 FERPA 义务，但并不构成合规，后者取决于部署方式和 AI 提供方。服务器里没有遥测，但 Canvas 和所选的客户端会保留各自的日志。项目以 MIT 许可发布，在活跃开发中，其自带的指南是当前工具名称与配置的权威。

## 关联概念

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
