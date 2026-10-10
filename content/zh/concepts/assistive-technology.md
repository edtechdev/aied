---
title: 辅助技术
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education]
confidence: high
translation_of: concepts/assistive-technology
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **辅助技术（Assistive Technology）** —— 帮助残障人士感知、操作、沟通并参与学习和日常生活的设备、软件与服务。在 [[ai-education|教育中的 AI]] 语境下，辅助技术涵盖屏幕阅读器、语音转文字与文字转语音、字幕、盲文与触觉输出、手语工具，以及日益增多的、能把内容与交互适配到个体需求的 AI 驱动支持。

## 值得思考的问题

- 辅助技术是可达性的工具层——个人用来弥合可达差距的具体设备与软件。在读之前，你是否把可达性和辅助技术当成同一件事？把它们当作不同的事物，会怎样改变你设计学习环境的方式？
- [[research-methods-aied|研究]]发现，基于 AI 的干预对残障学生的 [[learning-gains|学习结果]]产生中等正向效应（g = 0.588）。然而本页警告，可达工具本身并不确保融合的教学或学习者 [[agency|主体性]]。给一个学生可达，与真正地把他纳入，区别在哪里？
- 本页指出，美国 AI 政策文件大体上未处理辅助技术以及对有特定学习障碍学生的支持。你认为为什么支持（accommodations）这么容易从 AI 政策的缝隙里掉出去——而当它掉出去时，谁受损失？
- [[generative-ai|生成式 AI]] 能自动加字幕、简化文本、生成触觉替代物——降低适配的成本。但本页提醒你要评估 AI 生成替代物的 [[pedagogy|教学]]准确性。如果一个"简化版"或"触觉版"歪曲了它本应使其可达的内容，会出什么问题？
- AI 正把辅助工具从语音优先的学习伙伴扩展到触觉图表和手语工具。作为教育者或设计者，你想先用 AI 处理哪个学习者的具体障碍——而在选择工具之前，你需要了解那个学习者的什么？

## 引言

辅助技术是 [[accessibility|可达性]]的具体*工具层*。可达性是一个环境的设计属性（每个人都能访问它吗？），辅助技术则是个人用来弥合可达差距的具体设备与软件。它是 [[special-education|特殊教育]]与 [[inclusive-learning|融合学习]]的基础——有特定学习障碍、视力或听力损伤以及运动困难的学生，依赖辅助工具来访问 [[curriculum-design|课程]]。在美国，[[educational-policy-ai|《辅助技术法》（2004）]] 与《残障人士教育改进法》（IDEA，2004）为向残障学生提供这些工具提供了法律基础。

### 关键研究主题

**AI 正在扩展辅助技术。** 生成式 AI 与 LLM 正在改变辅助工具——[[text-simplification-its|基于 LLM 的文本简化]] 在 [[intelligent-tutoring|智能辅导]]中调整阅读级别，[[kutti-ai-voice-first-learning-companion|语音优先的 AI]] 为盲人与低视力学习者去除视觉依赖，[[tactile-statistical-graphs-accessibility|AI 生成的触觉图表]] 把视觉数据转成可触摸的输出。**[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等人]]** 发现，基于 AI 的干预（机器人、软件、智能 VR）对残障学生的学习结果产生中等正向效应（g = 0.588）。**[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等人（2026）]]** 补充了一项对巴勒斯坦 21 名视障本科生的 [[qualitative-research|质性]]个案研究，显示 GenAI 作为一个辅助层，调整节奏、内容与交付方式，简化复杂文本，并跨模态转换内容——而学习者一贯地把它视为补充而非取代教师。

**政策与提供。** **[[shin-ai-policies-sld-2026|Shin 等人]]** 记录了美国 AI 政策文件大体上未处理辅助技术以及对有特定学习障碍学生的支持，呼吁制定植根于《辅助技术法》与 IDEA 的政策指引。

**面向阅读障碍的 AI，贯穿检测、支持与 [[personalized-learning|个性化学习]]。** 一项 2026 年的跨学科 [[meta-analysis-systematic-review|系统综述]]（Dabaghi、D'Urso 与 Sciarrone，PRISMA 指导，2018–2024，n=72）描绘了 AI 对阅读障碍学生的支持，发现 AI 被用于检测、辅助支持与个性化学习——但这些线索是平行演化而非整合的，更多由技术机会而非整合的教育理论驱动。基于 ML 的助学工具落入五个领域（具体应用、[[student-engagement|参与]]、个性化、推荐、通用支持），却强调技术性能与分类准确率，而忽视生态效度与实际的课堂部署。检测研究（EEG、眼动追踪、ML 模型）显示出早期干预的诊断前景，但常需要专门设备与受控环境，限制了在典型学校场景中的可扩展性与可达性。开放的挑战包括有限的实验验证、可扩展性、敏感学生数据的 [[ethics|伦理]]/隐私问题、有限的 [[teacher-role|教师]]支持与培训，以及语言/文化障碍（多数研究以英语人群为对象）——这提醒我们，辅助工具必须被验证、可扩展、伦理上站得住，才能真正弥合可达差距。

**辅助工具的局限。** 辅助技术使可达成为可能，但它本身不确保融合的教学或学习者 [[agency|主体性]]。**[[genai-minoritized-knowledges-disability|批判性研究]]** 以及为残障学生争取 [[agency|能动]]角色的努力提醒我们，可达必须与有意义的参与相配。

一项 2026 年关于面向 [[higher-ed|高等教育]]中 [[neurodiversity|神经多样性]]学生的数字辅助 [[ai-technologies|技术]]的范围综述，描绘了这十年的产出：跨五个数据库筛选 766 条记录，纳入 40 项研究，其中 15 项含基于 AI 的工具，11 项含 [[virtual-and-augmented-reality|虚拟现实]]。其组织性发现是工具所针对之处与障碍所在之处之间的错配——27 项研究直接支持学习，13 项处理阅读与写作、12 项处理学习管理，而注意力（n = 4）与社会沟通（n = 5）相对被忽视，只有 6 项处理多重障碍（[[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel 等人，2026]]）。

## 实践启示

- **把工具与学习者和任务相匹配。** 屏幕阅读器、字幕、语音与触觉输出各自处理不同的障碍——依据个体的需求与内容格式来选择。
- **用 AI 降低辅助适配的成本。** AI 能自动加字幕、简化文本、生成替代物，但要从教学准确性上评估输出质量。
- **把提供植根于政策。** 在采购或构建 AI 工具时，参照《辅助技术法》、IDEA 与 WCAG。

## 关联概念

- [[accessibility]] — 辅助技术所操作化的那个设计属性
- [[inclusive-learning]]
- [[special-education]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[learning-design]]
- [[speech-and-voice-technologies]]

## 关联文章

- [[shin-ai-policies-sld-2026]] — 针对有特定学习障碍学生的 AI 政策与支持
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 面向残障学生的 AI 干预的元分析
- [[kutti-ai-voice-first-learning-companion]] — 面向视障儿童的语音优先 AI
- [[tactile-statistical-graphs-accessibility]] — AI 生成的触觉统计图表
- [[text-simplification-its]] — 面向智能辅导的基于 LLM 的文本简化
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 面向聋/听障学习者的 LLM 问题生成
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX 无障碍数学物理视频转录
- [[khlaif-assistive-genai-visually-impaired-2026]] — 面向视障学习者的辅助性 GenAI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 生成式 AI、虚拟现实及其他：面向高等教育神经多样性学生的数字辅助技术范围综述
