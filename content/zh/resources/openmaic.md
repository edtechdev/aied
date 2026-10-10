---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-09T19:11:13-04:00"
type: resource
summary: "MAIC 的开源版本：一个多智能体教室，能把一个主题或文档转化为幻灯片、测验、交互式模拟和基于项目的活动，由 AI 教师和 AI 同学授课。"
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**OpenMAIC** 是 [[intelligent-tutoring|MAIC 研究]]中所述 MAIC 多智能体教室的开源发布版：描述一个主题或附上你自己的材料，它就能生成一整堂课——幻灯片、测验、交互式 HTML 模拟和基于项目的活动——然后由会说话、会在白板上画图、会参与讨论的 AI 教师和 AI 同学来授课。它让那个教室不只是可以读到，而是可以真正跑起来的那套代码。

## 你能用它做什么

一键生成可以在几分钟内从一个提示词或上传的文档、音频、视频产出一堂课。多智能体层还提供了学习者可以加入或被点名参与的课堂讨论、带白板插图的人设圆桌辩论，以及由教师用幻灯片或图示作答的自由问答。课堂支持幻灯片、测验、交互式模拟和 PBL（基于项目的学习），并可导出为可编辑的 `.pptx` 或交互式 `.html`。1.0.0 版（2026 年 8 月）新增了智能体工作台：一个以聊天为先的工作空间，可以规划并修改整门课程；支持服务端持久化的课堂会话，可取消、恢复或引导；内置 24 项技能，覆盖幻灯片、测验、交互内容、图片、视频和语音。一个 `SKILL.md` 包可以让智能体框架从消息类应用里搭建教室。

## 适合谁

适合希望获得生成材料同时仍可自行编辑的教师和课程团队、正在为多智能体活动做原型设计的教学设计者，以及需要可自托管教室而非托管式产品的开发者。学校可以把它部署到 Vercel 上，或用 Docker 部署；项目还提供了一个托管演示站点 open.maic.chat。

## 说明

项目以 MIT 许可发布，配有中英文用户指南，并在 Discord 和飞书上有活跃社区。它与模型无关：你至少需要提供一个 LLM 供应商的密钥，可选的本地组件（Lemonade 用于本地模型，FunASR 用于语音识别）可以让你把更多环节放到离线运行——所以"免费"指的是软件本身，不包括推理账单。背后的论文发表于 *Journal of Computer Science and Technology*（2026，DOI 10.1007/s11390-025-6000-0），到 2026 年 9 月仓库已获得超过 38,000 颗星。

## 关联概念

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
