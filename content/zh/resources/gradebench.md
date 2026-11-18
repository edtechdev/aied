---
title: "GradeBench"
created: "2026-11-18T03:23:03-05:00"
updated: "2026-11-18T03:23:03-05:00"
type: resource
summary: "一个公开排行榜，检验前沿模型能否按教师实际勾选的评分项，为真实的大学 STEM 手写答案评分。"
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

GradeBench 就[[automated-assessment|自动化评分]]提出一个狭窄而有用的问题：给定学生的手写答案、教师的评分量规、一份参考答案，以及教师实际勾选的那些评分项，前沿模型会不会选出同样的项？金标签是考试与小测中真实的教师与助教评分项选择，而不是重新评分后的模型输出。

## 你可以用它做什么

在看任何评分厂商的准确率声明之前先读这个排行榜，而在相信这个排行榜之前先读它的任务构造。这个[[benchmark|基准]]包含 464 个任务，取自十余所院校 45 门[[higher-ed|大学]]课程中的 125 道题，只纳入由教授或助教逐行审阅过的自由作答型考试与小测题目，并且偏向部分给分——满分任务与零分任务各自被限制在 5% 以内，因为模型觉得那些太容易。

当前排行榜的顶端远低于人类之间的一致度：最好的模型达到 57.3% 的评分项精确匹配，而站点把准确率与每 1,000 份答案的成本绘在一起，落后 0.8 个百分点的模型，成本约为其七分之一。那条成本轴是实际有用的部分，因为评分是一项讲体量的作业。

若想要第二件独立构建的工具，可看 Learning Design Alliance 的 [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark)，它打包成一个开放仓库而不是托管式排行榜，[[porcaro-ai-grading-benchmark-2026|Porcaro 的研究]]中有概述。

## 适用对象

正在决定是否让某个评分工具不经复核就放出成绩的教师，撰写采购要求的评估专业人员，以及需要一个评分项层面的目标、而不是作文评分相关性的研究者。

## 说明与注意事项

GradeBench 由 Pensive 发布，这是一家商业 AI 评分平台，因此基准和产品属于同一个所有者；任务构造有文档记录且经得起检验，但要把它的框架当作厂商视角来看。它覆盖评分量规至少有四项的 STEM 考试，因而排除了论文、简答和讨论帖——也就是多数[[humanities-education|人文学科]]评分真正发生的那些形式。评分项精确匹配是一个严格的指标：两位评分者可能对某一项判断不同，却都对学生是对的。这些分数描述的是 2026 年 11 月可用的模型版本，并且会变化。

## 关联概念

- [[automated-assessment]] — 这项基准所衡量的实践
- [[assessment-validity]] — 排行榜分数只是其代理的那个判准
- [[benchmark]] — 它所属的那一类更广泛的工具
