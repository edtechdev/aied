---
title: "conText（AIdeaText）"
created: "2026-11-12T11:26:00-05:00"
updated: "2026-11-12T11:26:00-05:00"
type: resource
summary: "一个免费的浏览器辅导工具：它读取笔记本照片、PDF 或文本，然后用英语或西班牙语以苏格拉底式对话引导学生，并在学生说话时实时绘制他们所连接概念的图谱。"
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/context-aideatext
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

conText 是对一个方向的干净小型演示——[[intelligent-tutoring|AI 辅导]]大多谈论却很少实现的方向：模型不回答学生的问题，而是问下一个问题，学生的想法在他们说话时被画成一张图。上传一页笔记本的照片、一个 PDF 或一段文本，工具先说出它理解了什么，然后开始一段口头的[[socratic-method|苏格拉底式]]对话。学生说出的每个想法都会成为实时[[knowledge-graph|知识图谱]]中的一个节点；随着对话把它们连起来，边出现，面板会报告还有多少想法未被连接。

## 你可以用它做什么

这个循环刻意很短。材料进去（最多 10 MB、8 页 PDF 或 15,000 字符文本），辅导工具把它读回来，对话用语音进行——网站说辅导工具不打分，也不替学生写作。图谱是让这次会话在事后仍有价值的产物：它显示学生真正放进了关系的想法，以及哪些仍然松散，这比聊天记录具体得多，更值得回顾。会话可以导出为图谱 XML 文件，改天再上传继续；删除按钮会立即清除它，否则服务器会在一小时后丢弃它。

这种组合——一个扣住答案的辅导工具，加上一份推理的视觉记录——正落在[[scaffolding|脚手架]]和[[metacognition|元认知]]反思试图达到的范围里，它给教师一个具体可问的东西，而不是一篇完成的文章或一个正确的数字。网站自己的说法是：当生成式 AI 能产出正确结果时，正确的结果不再证明理解，所以过程必须可见。

## 适用对象

正在读一篇材料或做一套题、希望被提问而不是被代答的学生；想低成本检查学生能否连接观点的教师；以及寻找过程证据具体范例的教师发展人员。教师有英语、西班牙语、葡萄牙语和法语的课程对齐指南；工具本身支持英语和西班牙语，演示视频是西班牙语。

## 说明与注意事项

面向学生的工具没有公布价格或账号，而机构部署——云端、本地或混合——需要通过定制方案和会议来谈；把“免费”当作 2026 年 11 月公开演示的状态，而不是保证。文本和图像会发送到由 Claude 驱动的托管服务，网站自己提醒用户在上传前去掉姓名、金额、地址和公司名称，这把去标识化的负担转给了上传者而不是平台。除非导出，会话会在一小时后自行删除。背后的公司还向机构销售一个更广泛的推理图谱评估平台，其关于区分演绎、归纳、溯因和类比图谱的主张来自四份参考文本——网站称其为演示，规模化验证仍待进行。

## 关联概念

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
