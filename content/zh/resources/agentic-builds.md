---
title: "Agentic Builds"
created: "2026-11-13T09:14:20-05:00"
type: resource
summary: "一个由提示编码代理构建的课堂应用开放陈列架，按六条教学路径编排，身后还有一个更完整的 35 个构建的画廊——每个应用都从一个教学问题出发，并自带一份 AI 使用披露。"
url: https://marcwatkins.org/builds/
source_code: https://github.com/mwatkins03-netizen?tab=repositories
author: "Marc Watkins"
author_url: https://marcwatkins.org/about/
resource_type: [collection of tools]
access: [free]
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [desirable-difficulties]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed]
connected_resources: [vibe-coding-center]
translation_of: resources/agentic-builds
source_updated: "2026-11-13T12:40:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, learning-design, desirable-difficulties, agentic-ai, generative-ai, simulation]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Agentic Builds** 是 Marc Watkins 的开放课堂应用陈列架，这些应用在与编码代理的对话中做成——其中 35 个收在 Grove Lab 画廊里，每一个都从一个教学问题出发，并自带一份 AI 使用披露。

## 你可以用它做什么

六条路径组织起这个合集。独立学习应用是学生打开、完成并导出的一项聚焦活动——*Pause Before You Prompt* 在使用 AI 之前先要求给出关键来源和真正重要的问题，*Sentence Sound Lab* 让句子长短变得可听。游戏化应用与模拟则从 *Career Futures*——一个由实时数据驱动的、关于 AI 暴露与劳动力的决策游戏——延伸到 *The AI Midway*——一场由高等教育界对 AI 即兴而矛盾的各种反应组成的嘉年华。研究与外部数据型构建从 API 和档案中取材：*The Complaint Atlas* 通过 TypeSafe AI 的 Jev 模型阅读 CFPB 的学生贷款投诉叙述，*Body of Evidence* 则在九大人体系统中追问「你怎么知道？」。[[desirable-difficulties|刻意困难]]汇集了刻意让学生慢下来的构建——*Omelas: The Classroom Walk*、*The Focus Classroom*，以及海明威《大二心河》的一个野外版。教师与课程设计工具包括一个作业指南生成器，它能输出可直接用于 Blackboard 的 HTML。[画廊](https://mwatkins03-netizen.github.io/The-Grove-Lab/gallery.html)增加了搜索、「接近我的想法」标签和一个构建请求表单，因此这个合集同时也是一处设计需求的入口。

## 适用对象

想要一个「一个小应用对应一个教学问题」的完整范例的教师与[[learning-design|教学设计者]]，以及寻找可以交给同事的模型的教师发展人员。每个构建都是一个[[vibe-coding|氛围编程]]出来的静态站点，而不是一个平台：读者可以在浏览器里打开它，一个院系也能看到，当每个项目都小到可以完成时，一个陈列架是什么样子。

## 说明与注意事项

这些构建被描述为公开共享，但构建页和画廊页都没有声明许可证，所以复用需要作者许可，而不是假定已被授权。不过源码是公开的——该账号的仓库里存着这些构建背后的 HTML 和 JavaScript，还有一份关于在教育中使用编码代理的教程，因此读者可以检视一个应用，而不只是运行它。有几个链接指向 Netlify 的部署预览地址而不是项目站点；那些是为评审而构建的，可能失效，而 GitHub Pages 上的构建是稳定的。部分构建依赖 TypeSafe AI 的 Jev 模型并显示其概率，所以其底层行为是模型的判断，而不是固定规则。刻意困难这条路径是一个主张——把摩擦当作特性——页面只是提出它，并没有报告学生是否因此学得更多的评估。
