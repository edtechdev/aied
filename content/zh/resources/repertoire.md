---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "一个用于构建分步式 AI 作业的 Web 应用：教师设定模型的角色以及学生使用的门槛，学生身份则被排除在模型的上下文之外。"
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

一个用于构建 AI 融合式作业的工具，由 Oregon State University 的 Joseph Slade 开发，由 AI Education Labs, Inc. 运营。其理念是：放任自流的聊天机器人的替代方案不是禁止，而是结构——教师定义学生要经历的步骤，决定模型在每个步骤中扮演的角色，并设定学生可以依赖它的程度。作业随后以加入链接的形式发布，而不是作为提示词文档分发。

## 你能用它做什么

- **为每项作业设定模型的角色。** 构建器提供导师、苏格拉底式提问者、反馈提供者和研究助理等预设，外加自定义提示词，使助手按任务要求的方式行事。
- **在步骤之间设置门槛。** 某个步骤可以要求学生在继续之前解释自己的推理，AI 帮助也可以按步骤限额——界面显示剩余次数，而不是无限制的访问。
- **选择工作界面。** 学生在带旁注评论的文档页面上写作，也提供聊天和笔记本布局，供它们比页面更适合任务时使用。
- **发布并观察推理，而不仅是输出。** 加入链接让学生注册加入，进度随做随存，教师可以阅读每个学生的对话记录，并将其导出为 CSV 或 Markdown。
- **先用 AI 起草，再打磨。** 设置可以从几个问题、上传的现有作业或以前的作业开始，由教师端助手填充初稿。

已发布的示例展示了预期的范围：一个关于证据与证词的物理任务、一个诊断 AI 实习生解释中推理错误的生物练习，以及一个检查新闻报道是否如实描述研究设计的心理学任务。

## 适用对象

希望由[[learning-design|学习设计]]来承载 AI 政策的高等教育教师——也就是说，他们宁愿约束模型在任务内部的使用方式，而不是稽查它是否被用过。门槛与角色设置是[[guardrails|护栏]]在设计阶段的体现，该应用面向课程作业，而非机构级聊天部署。

## 注意事项与限制

- **试点阶段。** 条款说明服务目前免费供试点使用，付费方案可能在通知后引入，功能也可能变更或撤下。没有公开的定价页面；只有登录后才能看到价格。
- **隐私主张是架构性的，值得仔细阅读。** 每个学生每项作业获得一个随机会话标识符，学生账户到会话的映射保留在 Repertoire 的服务器上，模型只接收匿名会话、作业上下文和学生的写作。需要留意之处就在政策本身：学生输入的可识别其身份的文字会像其他任何文字一样被发送，课程教师可以阅读对话记录。
- **第三方推理。** 回复通过 Anthropic 的 Claude API 生成，以 OpenAI 的 API 作为备用，其商业条款按政策所述，截至 2026 年 9 月排除将 API 输入与输出用于训练。机构应通过自己的协议而非网页来确认这一点。
- **它不是评分器。** 政策与条款都将助手的判断（如"目标已达成"）描述为对教师的辅助；评分与学术决策仍由教师与机构做出，而是否向学生[[ai-use-disclosure|披露 AI 使用]]的决定留给教师。
- **托管于美国。** 数据存放在 Google Cloud Firestore，由 Vercel 托管；在服务处理教育记录之处，政策涵盖 FERPA 义务；美国境外的用户被告知，其数据在美国处理。
