---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack]
title: 可及性
created: "2026-08-23T12:00:00-04:00"
updated: "2026-10-09T18:39:26-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
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

> **可及性**——对教育技术、内容与界面加以设计，使其能被残障人士和有不同需求的人感知、操作与理解。在[[ai-education|教育中的人工智能]]领域，可及性覆盖的是学习*媒介*层面那些具体而可操作的障碍：视频字幕、替代文本、文字转录、屏幕阅读器与键盘兼容性、色彩对比度、文本简化、触觉输出、手语支持，以及与辅助[[ai-technologies|技术]]的兼容性。

## 值得思考的问题

- 上一次你设计或挑选一个数字学习工具时，你是否在考虑它的[[pedagogy]]之前，先检查过它的字幕、替代文本、键盘导航与色彩对比度是否可用？这个先后次序为什么可能重要？
- 一段带有准确字幕的视频是"可及"的，而一门围绕某位听障学习者沟通需要来组织讨论的课程则是在"支持这位学习者"。你会在哪里划出界线——一端是移除一项技术障碍，另一端是真正有意义地服务一名学生？
- [[research-methods-aied|研究]]表明，带有固定停顿的 AI 分段[[video-education|教学视频]]消除了[[neurodiversity|ADHD]]与非 ADHD[[learners|学习者]]之间的成绩差距。你能否回忆起一个"为某一位学习者设计的补救措施"，最终让班上所有人都受益？
- 有人主张可及性是必要的、但并不充分——一个可及的工具并不自动就是包容的、或对残障者公正的。"能够使用一个工具"与"被这个工具有意义地服务"之间的差别在哪里？
- 许多 AI 工具主要在用英语、以西方为中心的数据上训练。这可能如何限制它们对那些第一语言是手语、或认知方式与主流不同的学习者的服务效果？
- AI 可以规模化地自动化可及性——生成字幕、简化文本、产出触觉输出。在信任这种自动化的可及性之前，你会希望亲手验证什么，为什么？

## 引言

可及性区别于、但密切关联着本知识库中三个相邻的概念。**[[inclusive-learning]]** 是面向全部学习者差异（身体的、认知的、感官的、情境性的）设计教育的更宽总括。**[[special-education]]** 是面向被确诊为残障的学习者的教学领域，包括个别化的便利安排。**[[universal-design-for-learning]]** 是主动性的设计框架（多种[[student-engagement|投入]]方式、多种表征方式、多种行动/表达方式）。**可及性**位于这一星座之中，扮演*技术与程序层面*的角色：移除感知与操作格式的障碍，而非重新设计教学法。两者可以在一条光谱上区分开——可及性问的是"每个人都能访问这份内容和这个工具吗？"，而支持残障学生问的是"教学是否真正有意义地服务了每一位学习者，包括便利安排与针对残障的支持？"。两者都重要，而 AI 同时触及两者。

### 为什么这一区分重要

一段带有准确字幕和规范标注转录的视频是*可及的*；一门把讨论组织得纳入某位听障学习者沟通偏好的课程则是在*支持这位学习者*。二者有重叠——可及的媒介是包容性教学的先决条件——但它们需要不同的设计动作，并依赖不同的证据。可及性锚定在标准与法律之上（WCAG、美国的[[assistive-technology|辅助技术法]]与 IDEA），而可及的学习与特殊教育则锚定在教学法与[[student-experience|学习者体验]]之上。

### 主要研究主题

**格式可及性：字幕、转录与文本。** **[[adhd-video-segmentation-computing-education|AI 分段教学视频]]** 带有固定停顿，消除了 ADHD 与非 ADHD 学习者之间的成绩差距——可及性成为惠及每个人的催化剂。**[[text-simplification-its|MuTSE]]** 评估基于[[llm]]的[[intelligent-tutoring|文本简化]]，使内容复杂度匹配每位学习者的阅读水平，是一个[[human-in-the-loop-ai|人在回路]]的可及性层面。**[[llm-question-generation-deaf-hard-of-hearing-2026|Chen 等]]** 为听障与重听学习者构建 LLM[[automated-question-generation|题目生成]]，直面基于文本的 AI 提示与以手语为第一语言之间的错配。

**感官可及性：非视觉与触觉输出。** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** 让口语对话成为视障儿童的首要通道，去除对视觉的依赖。**[[tactile-statistical-graphs-accessibility|触觉 3D 打印图表]]** 把视觉性的统计数据转化为可触摸的输出，供盲生与低视力学生使用。**[[pepper-robot-sign-language-lis-2025|手语机器人]]** 把[[educational-robotics|教育机器人]]延伸到听障学习者的沟通可及性。

**面向视障学习者的[[generative-ai|生成式人工智能]]。** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等（2026）]]**——一项对三所巴勒斯坦大学 21 名视障[[higher-ed|本科生]]的[[qualitative-research|质性]]案例研究——发现 GenAI 按个体学习画像定制节奏、内容与传递方式，简化复杂的学术文本，并在各模态间转换内容（文本、音频、视觉），使原本不可用的材料变得可用。学习者把即时性框定为可及性的根本要求，而非便利；六项相互依存的技术属性——交互性、易用性、可负担性、多模态性、集成性与可扩展性——决定了 GenAI 在[[global-south|低资源情境]]中是否真正可及，[[usability-research|可用性]]、可负担性与可及性相互强化，而非彼此独立的设计考量。

**残障学生的政策与便利安排。** **[[shin-ai-policies-sld-2026|Shin 等]]** 分析美国的 AI 政策文件，揭示出对特定学习障碍学生的指导空白，并提出以[[assistive-technology|辅助技术法]]与 IDEA 为据的便利安排与[[educational-policy-ai|政策]]建议。**[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等]]** 对 29 项面向残障学生的 AI 干预研究做元分析，发现对[[learning-gains|学习结果]]有中等正向效应（g = 0.588）——并主张 AI 必须做的不仅是确保可及性：它必须促成[[agency|能动性的]]参与。

**过度包容的 AI 禁令与辅助性转录。** **[[wright-transcription-not-generation-2026|Wright（2026）]]** 论证，对"AI 使用"的一刀切禁令是过度包容的，因为它未能区分语音转文本转录与 OCR 和生成式起草：识别技术转换的是学生已创作内容的*格式*，而非生产新内容，然而一份围绕平台身份撰写的政策会不加区分地把两者一并捕获。患有影响精细动作控制、书写可辨识性或打字准确性状况的学生——包括自闭症谱系状况、运用障碍、脑瘫与重复性劳损——长期依赖独立的语音转文本与 OCR，而有报告表明若干独立语音转文本产品已停产或性能退化，留下 AI 驱动的转录去填补这一功能缺口。把这种替代当作不当行为处理，在英国《2010 年平等法》的合理调整义务、公共部门平等义务、美国《残障美国人法》与澳大利亚《1992 年残障歧视法》之下都会引发公平问题，尽管该文并未主张这一定性已在仲裁庭受到检验。它指出，残障、辅助技术与 AI 不当行为政策三者的交叉研究不足，这种置换的规模尚未被测量，而同一不精确性还会造成不同的假阳性风险，因为检测器会把非英语母语写作者的低困惑度文本读成机器所写。这种过度包容造成的法律风险映射在[[legal-issues-and-risks]]上。

**面向阅读障碍的 AI：检测、支持与[[personalized-learning|个性化学习]]。** 一项 2026 年的跨学科[[meta-analysis-systematic-review|系统综述]]（Dabaghi、D'Urso 与 Sciarrone，PRISMA 引导，2018–2024，n=72）发现 AI 在检测、辅助支持与个性化学习三方面支持阅读障碍学生——但三条脉络各自平行演化而非整合，更多由技术机会而非巩固的教育理论驱动。基于机器学习的帮助教育工具横跨五个领域（具体应用、投入、个性化、推荐、通用支持），却偏重技术性能与分类准确率，而忽视生态效度与实际的课堂部署。检测研究（EEG、眼动追踪、机器学习模型）对早期干预显示出诊断前景，但常需要专门设备与受控环境，限制了在典型学校情境中的可扩展性与可及性。开放的挑战包括实验验证不足、可扩展性、敏感学生数据的[[ethics]]/[[privacy]]顾虑、[[teacher-role|教师]]支持与培训有限，以及语言与文化障碍（多数研究面向英语人群）——再次印证可及性必须经过验证、可扩展、以伦理为根基，而非仅仅技术上成立。

**仅靠可及性的局限。** **[[genai-minoritized-knowledges-disability|批判性研究]]** 警告，在以英语圈、以西方为中心的数据上训练的 AI 可能边缘化以残障为中心的认知方式。可及的格式并不保证包容或公正的教学——再次印证可及性是必要的但并不充分，必须与[[equity-in-ai-education]]相连。

**以便利安排为中心、以诊断为门槛的工具占主导。** 一项对 40 项神经多样性学生数字辅助技术研究的范围综述发现，28 项把正式诊断作为参与的前提条件，只有三项作用于神经典型同伴而非学生本人，同时报告了逆向效应——认知超载、疲劳、分心与对生成式 AI 的过度依赖。（[[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel 等（2026）]]）

## 对实践的启示

- **优先处理格式障碍。** 字幕、转录、替代文本、对比度与键盘可操作性是一道把关层——对需要它们的学习者而言，没有这些其他一切都不重要。
- **用 AI 规模化地自动化可及性。** AI 可以生成字幕、简化文本、产出触觉/音频替代方案并调整呈现方式——但要以人在回路的检查来评价输出质量。
- **把可及性视为必要但并不充分。** 一个可及的工具并不自动就是包容的、或对残障者公正的工具；要把可及性与[[inclusive-learning]]设计及[[special-education]]支持配对。
- **把便利安排锚定在法律与政策之中。** 在设计或采购 AI 工具时援引标准（WCAG）与法规（辅助技术法、IDEA）。

- **[[physics-education|物理]]视频的数学可及转录（2026）：** 一项使用 Gemini（音频 + 每秒 1 帧视频采样）与 LuaLaTeX 的 AI 工作流，把教学物理视频编译成通过可及性验证的 PDF/UA-2 与 ISO 32005 数学可及 PDF——这是一条让富含方程式的视频内容对盲生与低视力学生可被屏幕阅读的实用、免费路径（[[gemini-lualatex-physics-video-transcription-2026]]）。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — 面向学习者差异设计教育的更宽总括
- [[special-education]] — 面向被确诊残障学习者的教学领域
- [[universal-design-for-learning]] — 主动性的设计框架
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — 头显、晕动症与设备可及性决定了谁能使用它
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — 过度宽泛的规则、缺陷证据与合理调整的总括页面
- [[arts-design-and-media-education]]

## 关联文章

- [[shin-ai-policies-sld-2026]] — 面向特定学习障碍学生的 AI 政策与便利安排
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 面向残障学生的 AI 干预元分析
- [[adhd-video-segmentation-computing-education]] — 带有固定停顿的 AI 分段视频
- [[text-simplification-its]] — 面向智能导学的基于 LLM 的文本简化
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — 面向听障/重听学习者的 LLM 题目生成
- [[kutti-ai-voice-first-learning-companion]] — 面向视障儿童的语音优先学习伙伴
- [[tactile-statistical-graphs-accessibility]] — 触觉 3D 打印统计图表
- [[pepper-robot-sign-language-lis-2025]] — 支持手语的 Pepper 机器人
- [[genai-minoritized-knowledges-disability]] — 关于 AI 与以残障为中心知识的批判视角
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX 数学可及的物理视频转录
- [[khlaif-assistive-genai-visually-impaired-2026]] — 面向视障学习者的辅助性 GenAI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[wright-transcription-not-generation-2026]] — 转录不是生成：过度包容的 AI 禁令及其捕获的辅助工具
