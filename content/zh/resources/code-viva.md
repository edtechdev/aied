---
title: "Code Viva"
created: "2026-10-24T13:40:00-04:00"
updated: "2026-10-24T13:40:00-04:00"
type: resource
summary: "一个免费的浏览器工具，为编程课的每位学生运行一场书面的、计时版的口头代码答辩，并附带逐句引证的评分建议，交由教师确认。"
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: translation
    date: "2026-10-24"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Code Viva** 为编程课的每位学生运行一场书面的、计时版的 [[oral-assessment|口头答辩]]（viva），每人约十五到二十分钟，课堂上不需要有助教在场。它读取学生提交的代码与提交历史，围绕该学生自己的函数、变量名与提交写出四到六道题，并为每位学生生成一个可作答的个人链接。

## 你可以用它做什么

提交来源可以是 Gradescope 导出文件、Canvas 的下载 zip、按学生分文件夹的 zip，或带读取令牌的 GitHub Classroom。教师设定会话时长、题量与截止时间，为有需要的学生把时间延长到 1.25 倍到 3 倍，并在发送链接之前阅读、修改或替换生成的题目。题目覆盖递归的基准情形、边界判断、数据结构选型、含义不清的变量名、规模与推演、作业要求中的原句，以及提交模式（例如一次性的整体提交或深夜提交）。作答以回执码的形式返回；审阅界面把每份对话记录与建议的 0 到 3 分及其所依据的原句并列显示，另有一个按"是否值得当面谈话"排序的标记队列。结果可导出为 CSV，十一个演示课程让读者在虚构数据上走通整个流程。

## 适用对象

面向编程课教师，前提是他们希望获得"学生能解释自己代码"的证据，并且宁可只跟一小组学生谈话，而不是跟所有人谈；围绕提交历史出题使它也构成一种 [[process-oriented-assessment|过程导向的评价]]。工具本身强调，它不做任何决定：每个分数都是待你批准或修改的建议，一条标记是去找某人谈话的理由，而不是作弊认定。

## 说明与注意事项

所有环节都在浏览器内完成：课程保存在本地存储中并提供 JSON 导出，题目通过链接中浏览器不会发送给服务器的那一部分（URL 片段）传递，作答只以学生选择发送的回执码返回，因此没有学生数据到达第三方。题目生成器是基于规则的，而非模型驱动的。按工具自己的说明，它的代码阅读器是启发式的，因此不常见的格式或宏可能让某个函数被漏掉；分数也可能奖励"熟悉术语"而非"理解代码"。正因如此，分数只是由教师批准的建议，工具也建议把风险保持在低位，并把这场答辩呈现为帮助你决定找谁谈话的核查，而不是一次成绩。未公开发布许可，也没有源码仓库；由于链接本身承载着题目，长度可达数千字节，若学习管理系统的消息框会折行，建议改用链接 CSV 做邮件合并发送。

## 关联概念

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
