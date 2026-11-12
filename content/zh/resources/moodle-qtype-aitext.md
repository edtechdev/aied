---
title: "Moodle AI 文本题型"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "一个开源的 Moodle 题型（GPL v3），用大语言模型依据每道题自带的提示词和可选评分方案来批改自由文本答案，可使用 OpenAI、Azure 或自托管的 Ollama 模型，并把 AI 的反馈展示给人工评分者。"
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/moodle-qtype-aitext
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

大多数 AI 测验集成把每个答案都送进一个固定的评分调用。这个 Moodle 题型做的相反：评分标准由教师来写。每道题带有一段**提示词**，告诉模型如何评价回答，以及一份可选的**评分方案**，说明分数如何给出，所以一道“用过去时写一个句子”的题目可以规定：无错误得十分，语法破碎得零分，每个拼写错误扣一分。模型返回一个分数和[[feedback|反馈]]，教师手工评分时可以在答案旁边看到那份反馈。

## 你可以用它做什么

把 AIText 题加进任何 Moodle 测验，写好提示词和评分方案，并在编辑表单里用 AJAX **提示词测试器**测试提示词，而不是反复走预览尝试。评分通过两个配套的题型行为（即时与延迟）运行，它们必须与题型一起安装，这让 AI 评分与 Moodle 的核心行为隔离开；使用旧版 `interactivecountback` 行为的已有尝试会在升级时迁移。如果模型无法连接，评分会降级而不是报错，所以一次尝试不会丢失。由于它是原生测验题型，结果会像其他题目一样进入成绩册——课程团队需要这一点，才能把[[automated-assessment|自动评分]]当作试点而不是演示。

这个设计还把评分标准放在决定[[ai-feedback-quality|反馈质量]]的地方：在教师写的提示词里，而不是在供应商的默认设置里。这是这个工具诚实的用法——标准可以检查和修改——但它也意味着质量上限就是那份评分标准，含糊的提示词会产生含糊的评分。院校把它用在[[formative-assessment|形成性评价]]所依赖的低风险、高频检查上，那里否则就要有人每晚读四十份简短答案。

## 适用对象

已经在运行站点的 Moodle 管理员和开发者，想要 AI 评分又不想另开平台或买商业许可的教师，以及需要一个可控评分流水线来研究的研究者。它要求 Moodle 4.5 或更高版本，以及对模型的 API 访问——通过 Moodle 的 AI 子系统使用 OpenAI 或 Azure，或者通过 Local AI Manager 使用自托管的 Ollama 实例，后者把学生文本留在本地基础设施上。插件由 Marcus Green 维护，在 Moodle 插件市场上架，本页核验时有 33 个星标和 36 个复刻。

## 说明与注意事项

以 GPL v3 或更高版本开源，但免费不意味着运行免费：模型 API 要有人付钱，评分质量取决于模型选择和提示词设计。使用远程提供商时，自由文本答案会离开 Moodle 服务器，所以院校的数据协议决定了什么可以发送；无法把学生作业送出去的站点可以选择自托管 Ollama。仓库没有说明任何已发表的准确率或一致性研究，所以不应在假定 LLM 评分等同于人工评分的前提下采用这个插件——在任何分数具有分量之前，必须在本校对照人工分数确立[[assessment-validity|效度]]。配套行为是硬依赖：只安装题型会让题目无法评分。

## 关联概念

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
