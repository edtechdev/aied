---
title: "Amplify GenAI"
created: "2026-11-12T11:24:00-05:00"
updated: "2026-11-12T11:24:00-05:00"
type: resource
summary: "范德堡大学以 MIT 许可证发布的企业级生成式 AI 平台，部署在院校自己的 AWS 账户中：基于本地文档的自定义助手、检索增强的回答、组织内共享，以及细到单条消息的成本核算。"
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/amplify-genai
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

Amplify GenAI 押的是与全校购买商业助手许可证相反的一注：院校自己运行平台，放在自己的 Amazon Web Services 账户里，用多少付多少。范德堡为自家社区构建了它，以 MIT 许可证在三个代码库中发布，如今把它提供给其他组织，作为按席位企业合同的替代方案——其论点是，昂贵的那部分应该是模型，而不是席位数。

## 你可以用它做什么

用户上传文档或连接数据源来构建自定义助手，助手基于这些材料做[[rag|检索增强生成]]，而不只是依赖通用训练。助手可以在组织内共享、串联进同一段对话，并配上提示词模板；平台还能生成 PowerPoint 和 Word 文件、图表和可视化。管理员得到共享服务所需的东西：细到消息级别的成本核算、按用户的上限、文件夹和工作区，以及 SSO，全部在一个院校自己控制的部署里。

对一所[[higher-ed|高校]]最重要的设计决定是计费模型。范德堡报告称，在 1,300 名试点用户时，每用户每月成本约为 \$3（含 AWS），其中一半用户每月的 token 费用不到 \$1——这些数字是该校作为案例研究提出的，不是经审计的基准。按用量计费有利于那种少数用户承担大部分工作的校园，而这正是 AI 采用的常态；它让财务办公室的问题（“每个学生要花多少钱？”）可以从日志而不是合同里得到回答。

## 适用对象

已经在 AWS 上运行工作负载、想要一个由社区支持、可替代商业企业助手的方案的中央 IT 和 CIO 办公室；需要助手以课程材料为依据、又不愿把材料送进供应商消费级产品的教师；以及希望有一个统一地方看到人们用模型做什么的院校。由于它部署在院校自己的账户里，数据驻留问题由部署本身回答，而不是由供应商的承诺回答。

## 说明与注意事项

许可证免费，运行不免费：院校要付 AWS 和模型提供商的费用。模型选择通过 Amazon Bedrock（Anthropic、Mistral）或 OpenAI 与 Microsoft Azure 进行，运行自己的本地模型尚未实现。项目明确表示无法支持单个部署，并把组织引向商业合作伙伴——所以现实成本里包含人员或承包商。它是三个代码库（前端、后端、基础设施）的部署，星标是几十而不是几千，上面的成本比较是范德堡自己的经验，不是对照研究。更愿意把推理留在自有硬件上的院校，应当看看 [MindRouter](/aied/resources/mindrouter/)，并把两者放在一起读：Amplify 是供应商模型之上的应用层，MindRouter 是自有 GPU 之上的网关。

## 关联概念

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
