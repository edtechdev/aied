---
title: "Public AI Libraries"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "一项 2025–2026 年的全国试点，把共享的 Public AI 工作站放进美国公共图书馆 —— 聊天、图像、音乐与视频生成、一个代码 IDE 与一份教育指南 —— 并为每位读者提供独立账户。"
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
updated: "2026-11-07T17:28:19-05:00"
translation_of: "resources/public-ai-libraries"
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Public AI Libraries** 是一项 2025–2026 年的全国试点，把一台称为 kiosk 的共享 AI 工作站放进美国各地的 [[libraries|公共图书馆]]。它是美国国会图书馆、Metagov 与 Public Knowledge 的合作项目，犹他州与新泽西州州立图书馆也加入其中；项目页面最后一次被阅读时，五个州的八家图书馆正在运行一台 kiosk。其前提是供给而非培训：[[digital-divide|图书馆提供]] 个人读者买不到的获取，且是在一个有人员值守、有人能帮忙的地方。

## 你能用它做什么

每台 kiosk 是一台云端托管的工作站，运行在图书馆已有的电脑上。它提供用于研究、学习与一般问题的聊天助手；图像、音乐与视频生成；用于编程与小应用项目的在线 IDE；以及一个教育区域，含互动学习指南与图书馆审核过的材料。每位读者获得一个独立账户，因此即使在共享机器上，工作与历史也是私密的 —— 项目称其不会在自己的平台上存储读者的对话或生成内容。

## 它面向谁

想托管一台 kiosk 的公共图书馆（项目接受试点站点申请），以及支持读者使用它的员工。已公布的用例包括求职申请、商业计划、课程作业与创意项目。代码也值得任何构建公共利益 AI 服务的人阅读：项目站点与 kiosk 前端在 [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk) 以 GPL-3.0 发布，聊天服务是[[open-source|开源]]的 Public AI Inference Utility（MIT），位于 [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co)，一个任何人都能用免费账户使用的 Open WebUI 部署。

## 说明与告诫

- 参与图书馆每年每台 kiosk 部署出资 **\$1,000**；试点本身仅限于提出申请的站点。
- 隐私声明是项目的主张，不是经审计的结论；图书馆应在自己的数据处理协议中确认留存与儿童安全条款。
- 路线图的第二与第三阶段 —— 让图书馆摄取本地档案并治理由此产生的系统 —— 是计划中而非已交付。

## 关联概念

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
