---
title: 教育中的视频
created: "2026-09-05T01:05:00-04:00"
updated: "2026-10-09T19:08:48-04:00"
type: concept
pedagogy: [online-teaching-and-learning, student-engagement, video-education]
technology: [adaptive-learning, generative-ai, learning-analytics, llm, multimodal, personalized-learning]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/video-education
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育中的视频** —— 视频作为[[teacher-role|教学]]与学习的媒介的运用，以及[[generative-ai|生成式 AI]]如何重塑它：AI 生成与 AI[[personalized-learning|个性化]]的教学视频、AI 化身与主讲者、自适应视频生成、基于视频的[[learning-analytics|学习分析]]与注意力/[[student-engagement|参与度]]感知，以及 AI 对讲座视频消费的支持。知识库把视频既视为一种成熟的在线学习媒介，又视为一个快速演化的 AI 创新场域，横跨[[online-teaching-and-learning|线上]]、混合与面授教学。

## 值得思考的问题

- 教育视频长期以来是一种"一刀切"资源——对每个学习者都是相同内容。生成式 AI 现在使按学习者定制的视频成为可行，而[[research-methods-aied|研究]]表明学生高度看重这种个性化。个性化除了相关性之外还添加了什么——它又可能带来什么代价？
- 学生常说他们仍看重视频中人类教师的存在感与真实性。然而在正面比较中，个性化 AI 视频可以胜过通用的人类录制讲座。学习者实际在做怎样的权衡，这些权衡有多持久？
- 从教师克隆而来的 AI 化身可以规模化地生成视频——但它们也可能触发"恐怖谷"式的不适与[[ethics|伦理]]异议（环境影响、劳动、学术诚信）。AI 主讲者在何时可接受，何时又越过了任何技术修复都无法解决的那条界线？
- 许多视频研究依赖学生的偏好与[[self-report-measures|自评]]。陈述的偏好能在多大程度上预测实际的[[learning-gains|学习结果]]——一个"感觉良好"的视频何时可能比一个感觉不那么好的视频教得更差？
- 视频分析可以检测注意力、参与度与流失点。以如此密切的方式对视频学习加以仪器化，其[[pedagogy|教学]]与[[privacy|隐私]]意涵是什么？

## 引言

视频是当代教育的基石——尤其是[[online-teaching-and-learning|线上与混合学习]]——因其灵活性、可扩展性与一致性而备受推崇。然而传统教学视频被制作成一刀切的制品，不顾学习者的兴趣、背景或[[prior-knowledge|先前知识]]，向每个学习者呈现相同内容。生成式 AI 正把视频从静态广播媒介转变为动态、 individually 定制的媒介，也带来关于在场、[[trust|信任]]、[[privacy|隐私]]与测量的新问题。

### 知识库的研究如何聚类

- **AI 生成与个性化的教学视频。** 一条核心线索追问学生是否接受 AI 产出的视频，以及它与人类录制内容相比如何。[[ai-generated-instructional-videos-computing-ed|计算教育中的学生调查]]探查了对 AI 生成教学视频的认知与偏好。在一项大规模实地部署中，[[personalized-ai-generated-videos-preference-2026|Tomlinson 等（2026）]]发现学生偏好 AI 生成的*个性化*视频，胜过未个性化的人类录制讲座——在这一偏好中，个性化效应压过了对真人主讲者的重视。[[ai-video-dual-gatekeeping-2026|双重把关研究]]展示了教师监督（"把关"）横跨 AI 视频制作的两个阶段如何产出更有教学基础的输出，这与[[human-in-the-loop-ai|人在环中]]设计相联结。
- **自适应与结构化视频生成。** [[courseblueprint-adaptive-video-generation|CourseBlueprint]]提供一条结构化流水线，基于课程语料生成有自适应教学性的视频，表明驱动有效 AI 视频的是明确的教学结构——而不只是[[ai-literacy|AI 流畅度]]。[[bespoke-industry-personalized-lecture-videos-2026|Bespoke]]把同一逻辑应用于整场讲座的规模：从 31 场研究生讲座生成 209 个视频，面向医疗、金融、能源与通用受众，25 位领域匹配的专家对其中的 92 个评分，把 87% 放在或高于"一堂标准 MOOC 讲座的质量"这一中点之上（5 分制均值 3.42），每分钟 API 成本约 \\$0.22——语音、幻灯片时机与版式是反复出现的缺陷。
- **一个学习闭环胜过更好的渲染。** [[pivot-generative-video-tutors-stem-2026|Ma 等（2026）]]把每个视频规划为一张故事板：目标、先修激活、讲解示例与诊断性探针，配一个刻意避开视频示例的测验和每个错误选项的补救；32 位教师中有 96.9% 判断该闭环比单个视频更有效。
- **视频学习分析与注意力。** 对视频加以仪器化，能揭示学习者如何投入。[[engagement-assessment-video|视频学习中的参与度评估]]与[[savvy-student-attention-video-learning|SAVVY]]可视化学生在视频学习期间的注意力，支持[[learning-analytics|学习分析]]、[[self-regulated-learning|自我调节]]与脱离投入的早期预警。分段工作（例如[[adhd-video-segmentation-computing-education|时序视频分段]]）把视频裁剪到个体差异。
- **化身与在场。** AI 化身——虚拟主讲者与教学智能体——提出关于身份、[[community-of-inquiry|社会性在场]]与信任的问题。[[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|化身身份与认识论信任]]检视主讲者的表面身份如何塑造学习者的信任，而[[ai-psychotherapy-training-avatars|培训中的 AI 化身]]把这一模式延伸到专业实践。
- **视频内支架评论——以及 AI 仍会出错之处。** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang、Du 与 Jin（2026）]]生成 *i-Comments*——渲染在视频画面内、与内容同步的[[scaffolding|支架]]消息——方法是计算帧级熵，只在低信息区间插入支持。以资深教师的 120 条评论为基准，ChatGPT 的 1,000 条评论更密集、结构多样性远低（POS 三元语法多样性 5.5–6.2% 对 25.1–38.5%）、在每个可读性指数上都更难读、主题对齐更差（情感支持 BERTScore 0.317 对 0.574）；40 位学习者在时机与有用性上给人类评论显著更高的评分，尽管一个更新的模型缩小了这一差距。这是一个设计论证，与自动化论证同样重要：嵌入媒介的支持，避免了为查询一个独立[[conversational-ai|聊天机器人]]而暂停所带来的注意力与认知代价（[[ai-feedback-quality|反馈质量]]、[[social-emotional-learning|情感支持]]）。
- **对讲座视频消费的 AI 支持。** 在生成之外，AI 帮助学习者与教师处理既有视频：[[bilingual-llm-lecture-companion-srl-2026|双语 LLM 讲座伴侣]]以录制讲座支持自我调节学习，[[gemini-lualatex-physics-video-transcription-2026|转写流水线]]把讲座视频转为可及的文本。

### 个性化对人类在场

一个反复出现的张力是：[[personalized-learning|个性化]]的价值能否超过可见的人类教师的价值。[[personalized-ai-generated-videos-preference-2026|Tomlinson 等（2026）]]把个性化与社会性在场框定为*教学关怀的部分可替代信号*：人类传递增强[[affective-computing|情感]]体验与真实性，而个性化增强相关性——学生愿意以一换一。他们的大课程排序数据（88.4% 偏好某种个性化视频；仅 73.8% 偏好人类录制）表明，个性化如今常是更有影响力的因素，指向一种互补模型：人类教师提供专长与社会联结，AI 以 individually 定制的媒介延伸他们的触及。

### 设计、伦理与测量

制作有效的 AI 视频需要教学结构与人类监督，它也带来独特的关切：AI 主讲者可能引发不适或不信任（"恐怖谷"）；生成式视频有事实不准的风险，而学习者可能察觉不到；规模化个性化需要收集或推断学习者属性，随之带来[[privacy|隐私]]、偏置与[[governance|治理]]关切；且一部分学习者出于原则反对 AI 生成的教学（环境影响、劳动、自动化、[[academic-integrity|学术诚信]]）。测量同样处于变动之中——许多证据依赖陈述的偏好与感知价值，而非客观学习结果，因此偏好数据必须与（往往尚未到来的）结果数据并读。

## 关联概念

- [[online-teaching-and-learning]] — 视频作为线上与混合教学的核心媒介
- [[generative-ai]] — AI 生成与个性化视频的引擎
- [[personalized-learning]] — 个性化作为 AI 视频吸引力的驱动者
- [[adaptive-learning]] — 自适应视频生成与节奏
- [[multimodal]] — 结合视觉、音频与文本模态的视频
- [[learning-analytics]] — 对视频参与度与注意力的分析
- [[student-engagement]] — 视频个性化旨在提升的参与度
- [[pedagogical-agent]] — AI 化身/主讲者作为虚拟教学智能体
- [[llm]] — 支撑脚本与视频生成的大语言模型
- [[trust]] — 学习者对 AI 主讲者与内容的信任

## 关联文章

- [[bespoke-industry-personalized-lecture-videos-2026]] — Bespoke：规模化生成 MOOC 质量的行业个性化讲座视频（Puech 等 2026）
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — ChatGPT 生成的视频内评论：熵时机、与人类评论的质量差距（Wang、Du 与 Jin 2026）
- [[personalized-ai-generated-videos-preference-2026]] — 学生偏好个性化 AI 生成视频，胜过未个性化的人类录制视频（Tomlinson 等 2026）
- [[ai-generated-instructional-videos-computing-ed]] — 计算教育中学生对 AI 生成教学视频的认知/偏好
- [[ai-video-dual-gatekeeping-2026]] — 双重把关以生成有教学基础的 AI 视频
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint：自适应教学视频生成
- [[engagement-assessment-video]] — 视频学习中的参与度评估
- [[savvy-student-attention-video-learning]] — 面向视频学习的学生注意力可视化
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — 化身身份如何在 AI 中介学习中塑造认识论信任
- [[bilingual-llm-lecture-companion-srl-2026]] — 面向自我调节学习的双语 LLM 讲座伴侣
- [[adhd-video-segmentation-computing-education]] — 面向个体差异的时序视频分段
- [[ai-psychotherapy-training-avatars]] — 心理治疗培训中的 AI 化身
- [[gemini-lualatex-physics-video-transcription-2026]] — 把物理讲座视频转写为可及的文本
- [[pivot-generative-video-tutors-stem-2026]] — 从内容生成到学习支持：面向 STEM 学习的教学引导式生成式视频导师
