---
title: "MindRouter"
created: "2026-11-12T11:28:00-05:00"
updated: "2026-11-12T11:28:00-05:00"
type: resource
summary: "爱达荷大学以 Apache-2.0 许可发布的推理网关，把校园里由 vLLM 和 Ollama GPU 节点组成的集群放在一个兼容 OpenAI 的 API 之后，并加入公平份额调度、按用户 token 配额、SSO、审计日志以及实时 GPU 与能耗监测。"
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/mindrouter
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

大多数校园 AI 讨论从买哪个模型开始，在更难的问题之前就停了：它在哪里运行、谁来计量、谁能看日志。MindRouter 是对第二个问题的回答。它是一个自托管网关，位于异构的[[llm|LLM]]服务器集群之前——院校自有 GPU 上的 vLLM 和 Ollama 节点——对外暴露一个 API，支持 OpenAI、Anthropic 和 Ollama 方言，并在它们之间转换，让现有客户端代码继续工作。

## 你可以用它做什么

把工具指向网关而不是供应商端点。在它后面，MindRouter 处理共享部署所需的部分：带加权赤字轮询的公平份额调度、按用户的 token 与请求配额、基于角色的访问（可选通过 Azure AD/Entra、Google、任何 OIDC 提供方或 SAML 2.0 实现 SSO），以及对提示词、响应和产物的完整审计日志。一个 GPU 边车代理报告每个节点的利用率、内存、温度和功耗，管理员因此能看到每次请求的能耗成本，并在维护到期时优雅地排空后端。它覆盖的不止聊天——嵌入、视觉、图像与视频生成、文本转语音与语音转文本、文档 OCR——并为编码助手提供 MCP 服务器和智能体技能。

一所高校会在意的理由正是项目所命名的那个：[[institutional-ai-infrastructure|院校 AI 主权]]。提示词和文档留在院校运营的基础设施上，而不是经过第三方云，这对教师评议会或[[privacy|隐私]]办公室来说，比与供应商签一份数据处理协议更容易辩护。这个论证是否成立，取决于院校是否有 GPU、电力和人员——网关让本地托管可管理，但不让它便宜。

## 适用对象

已有 GPU 容量的科研计算与中央 IT 团队，想要一个地方计量教师和学生使用的教学中心，以及在托管企业平台与自建推理之间权衡的管理者。它是 Docker Compose 部署，配有文档化的 SSO 配置和自定义品牌，由爱达荷大学维护，作者在 PEARC '26 上介绍过它；截至 2026 年 11 月，项目有 22 个星标和 3 个复刻。

## 说明与注意事项

以 Apache-2.0 免费开源，但成本是转移而不是消失：硬件、电力和运行集群的人员时间。以基础设施的标准看，这个软件还很年轻——三位贡献者、单一发起院校、发布编号到了数百个标签——所以高校应当把它与现有服务并行试点，而不是作为通向模型的唯一路径。仓库里没有关于真实校园负载下调度与配额行为的已发表评估；PEARC 论文是查找作者本人说法的地方。

## 关联概念

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
