---
title: "Gemini Notebook"
created: "2026-09-22T02:55:00-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "Google 的基于来源的笔记本助手（2026 年 7 月前名为 NotebookLM）：上传一组文档，即可提问、生成学习辅助材料，并产出基于这些来源的音频、视频和幻灯片。"
url: https://notebook.google/
author: "Google Labs"
author_url: https://notebook.google/
resource_type: [software]
access: [free with account, freemium]
last_verified: "2026-09-22"
technology: [generative-ai, rag, llm, multimodal]
foundations: [ai-literacy]
pedagogy: [self-directed-learning, retrieval-spacing-interleaving, video-education]
audience: [learners, instructors, researchers]
level: [secondary, higher ed]
confidence: high
contributors: [editor]
verified: [links]
translation_of: resources/gemini-notebook
source_updated: "2026-09-22T04:10:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Gemini Notebook** 是 Google Labs 的学习与研究助手，基于 [[rag|检索增强]]（retrieval-augmented）生成，2026 年 7 月更名前名为 NotebookLM。一个笔记本（notebook）就是一组由读者自选的来源——PDF、文档、幻灯片、网页、粘贴的文本，或 YouTube 视频的文字记录——助手的每一个回答都从这些材料中提取，并附有指回原文的引用。通用 [[conversational-ai|聊天助手]]（chat assistant）依据训练数据作答，Gemini Notebook 则依据读者自己的文档书架作答，这一约束本身就是产品。

## 你可以用它做什么

就整组来源提问、总结长文档，并顺着引用核对回答与其出处段落是否相符。在聊天之外，Notebook 还产出学习与演示材料：音频概览（Audio Overviews）——两位合成主播之间的播客式对话，可随时插话提问；[[video-education|视频概览]]（Video Overviews），包括 2026 年新增的竖屏短视频版本；[[visualization|思维导图]]（Mind Maps）、报告、[[retrieval-spacing-interleaving|抽认卡]]（Flashcards）、测验、数据表、信息图（Infographics）和幻灯片。2026 年 7 月的更新为每个笔记本配备了一台安全的云端计算机用于运行代码，使该工具从"总结来源"进一步走向"分析来源"。

## 它适合谁

用自己的课程材料复习的 [[self-directed-learning|自主学习者]]、把阅读材料汇编成（其质量仍需审视的）摘要的教师，以及需要通读一批文献的研究者。免费层向任何拥有个人 Google 账号的人开放，课堂使用的受众主要集中在这一层；更高的限额、更长的来源和共享功能则要付费的 Workspace 和 Google One AI 层级才提供。

## 注意事项

Google 声明：除非用户主动提交反馈，个人账号的内容不会用于训练其模型；Workspace 的上传、查询与回答即使提交了反馈也不会用于训练；[[privacy|数据不与第三方共享]]。但删除的笔记本无法恢复。上文的能力宣称都出自厂商之口，学区或机构应结合自己的数据处理协议而非产品页面来核实。2026 年的报道还提到一场关于生成式播客所用声音的诉讼（Google 已否认），这提醒我们音频产出会引发 [[legal-issues-and-risks|肖像与声音权问题]]（likeness questions），这与来源接地（source-grounding）的保护措施是两回事。生成的抽认卡、测验和摘要都应视为需要对照来源核对的草稿；另外，免费层的限额会不预告地变动。

## 关联概念
[[rag]], [[ai-literacy]], [[self-directed-learning]], [[retrieval-spacing-interleaving]], [[generative-ai]], [[multimodal]], [[video-education]], [[hallucination-risk]]
