---
title: "Fab AI 基准排行榜"
created: "2026-11-18T03:23:03-05:00"
updated: "2026-11-18T03:23:03-05:00"
type: resource
summary: "一份面向中低收入国家教育基准的模型排行榜，覆盖教学法、基础读写、SEND、视觉数学与多语言表现，并附价格与开放权重两列。"
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

Fab AI 用那些在预算、带宽和语言覆盖都受限制的地方才真正要紧的教育任务来评估模型——也就是这项基准为之打造的[[global-south|中低收入国家]]——并把结果发布成一份可排序的排行榜，而不是一篇论文。核心表格给教学法基准打分，与 SEND、视觉数学和视觉推理并列，另外还有多语言教学法、基础读写和朗读评测几个独立标签页。

## 你可以用它做什么

在大约 300 个模型之间比较教学法得分——目前从九十出头一直低到 21%——然后按教育部真正必须权衡的指标排序：每百万 token 的价格、参数量、是否开放权重以及发布日期。底部那一截的分布才是有用的部分。参数量低于 2B 的开放模型在教学法基准上落在 21% 到 43% 之间，而前沿模型处在九十出头的区间，这就把「我们能不能在廉价硬件上离线运行它」变成一个可量化的取舍，而不是猜测。

值得把这一页收进书签的理由是那个[[multilingual-learning|多语言]]教学法标签页。多数教育基准只测英语，而一个模型的教学法能力能否经得起翻译，恰恰是多语言体系里的教育部需要得到回答的问题。数据可以下载为 CSV，因此这些比较可以在本地重跑。

## 适用对象

为国家体系挑选模型的决策者与采购团队，研究 AI 支持教育中[[digital-divide|接入差距]]的研究者，以及需要一个不是英语考试的教学法目标的开发者。

## 说明与注意事项

排行榜是在基准自己的任务上衡量模型：一个高的教学法得分是关于这些题目的证据，而不是关于一间教室的证据。价格一列按 3:1 的比例混合输入与输出 token 价格，这是一种建模选择，而不是任何具体部署的实际花费。语言覆盖与本地自托管模型的覆盖会随着新模型出现而变动，而小模型在低端的得分有相当一部分反映的是任务形式，而不只是能力。Fab AI 的定位明确针对中低收入国家，因此基准的题目集反映的是那个语境，不应被读成一份通用的教育排名。留意发布日期：若干条目早于当前这一代模型。
