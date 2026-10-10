---
connected_resources: [drawsplat]
title: 可视化
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-09T18:58:08-04:00"
translation_of: concepts/visualization
source_updated: "2026-09-30T09:53:03-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **可视化（Visualization）**——使用数据可视化、信息图、仪表板、图表、图解及其他图形表示，使信息在学习与分析中可被理解。在整个教育中，可视化越来越既由 AI 生成（文本转图像、[[multimodal|多模态]]幻灯片与图表分析），又被用作学习者、教师与分析系统对共享数据进行推理的界面。

## 值得思考的问题

- 一张图或一个仪表板能让数据变清楚——但仅仅*看见*一个可视化就等于理解它吗？本页的[[research-methods-aied|研究]]表明，你如何与一个可视化互动，比图表本身更要紧。回想一个你看过却没真正学到什么的仪表板或图。纯粹的展示缺了什么？
- 常规的学习仪表板遵循"展示数据、寄望于洞察"的模型。本页的发现是：在看到指标*之前*先回答关于自己数据的问题的学习者，比被动浏览图表者反思更好、校准更好。为什么被迫先做预测，会改变你从看到真实数据中得到的东西？
- AI 现在能生成专业内容的准确可视化——一项研究通过用核概念微调文本转图像模型，把领域准确率从 12% 提到 78%。但本页也发现没有模型是全面胜任的。你会信任一个 AI 生成的可视化到什么程度，又会在哪里坚持对照人类专家核查？
- 一项研究的参与者觉得 AI 生成的数据漫画更有吸引力、更好理解，但许多人同时也指出误信息风险与信息过载。如何权衡一个动人的 AI 视觉的吸引力与它误导的潜力——在信任或使用它之前你会核实什么？
- 本页警告一个模型的*置信度*不是它的*可靠性*：系统能在严重性判断上大相径庭，却把基本构念做对。如果你依赖一个 AI 工具评价幻灯片、论文或数据，你会如何发现它的置信度藏在严重错误之下的地方？
- 一项研究发现，尽管有精细的视觉脚手架，学生仍把大部分注视时间花在代码上——视觉辅助并没有吸引住每一个人。这对"一个漂亮的图解或仪表板会自动帮助所有学习者投入"这一假设意味着什么？除视觉之外，还有什么塑造人们实际使用一个工具的方式？

## 引言

可视化是图形表示——仪表板、图表、图解、信息图与多模态展示——的使用，使学习与学习数据可被理解。它在教育中最既定的角色是[[learning-analytics|学习分析]]仪表板，在那里主导的*展示数据、寄望于洞察*模型已让位于交互式设计：证据表明学习者如何与一个表示互动，比他们是否看到它更要紧，而自诱导提示与[[pedagogical-agent|教学智能体]]比被动指标更能改善校准。同一个问题——展示是激发思考还是替代思考？——把可视化与[[desirable-difficulties|合意难度]]及[[metacognition|元认知]]连在一起。

## 作为学习界面的可视化

可视化在教育中最既定的角色是学习分析仪表板。常规的学习分析仪表板（LAD）以"展示数据 → 寄望于洞察"的模型运行，把行为指标呈现在学习者被动浏览的图表中。对[[interactive-learning-dashboards-engagement]]的研究挑战了这一范式：当一个仪表板加入一个[[llm|大语言模型]]驱动的[[pedagogical-agent|教学智能体]]和一个交互式的学习判断自评时，"诱导"条件——学习者在看到指标之前先回答关于自己数据的问题——产生了比被动仪表板或"告知式"智能体更多的反思和更准确的水平校准。其教训是：学习者如何与可视化互动，比仅仅看到它们更要紧。这与[[learning-analytics|学习分析]]和[[self-regulated-learning|自我调节学习]]相关，其中视觉反馈支持[[metacognition|元认知]]判断校准，而非单纯的信息展示。

面向[[teacher-role|教师]]的仪表板带来另一组设计教训。[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain 等（2026）]]发现教师系统性地偏好更简单、更传统的可视化（柱状图、饼图、图例），即便更复杂的设计（例如热力图）带来更细致的洞察——视觉偏好并不总与信息量一致，这呼应了关于饼图相对可读性的争论。可视化素养（VL）并未驱动设计偏好，但高 VL 的教师产出更深、更细致的解释（例如更多人识别出时间序列数据中的趋势），确认 VL 是衡量教师如何阅读分析设计时的一个[[research-methods-aied|混淆变量]]。在组间比较上，教师强烈偏好叠加而非并置，并偏好展示完整信息的图（例如包含"未观看的学生"这一组）而非显式的差异编码，尽管更年轻的教师给差异图排名更高。这些发现论证，仪表板设计必须在教师陈述的偏好与更复杂编码所提供的解释深度之间取得平衡。

仪表板也充当弥合人类与 AI 推理的共享表示。CLARA 系统用大语言模型生成的产物——概念图与七维协作评估——作为仪表板用户与[[agentic-ai|AI 智能体]]之间的共同基础，把它们索引进彼此分离的向量集合，使双方对同一份可见、可查询的材料进行推理。类似地，专家认知仪表板（Expert Cognition Dashboard）把分析重构为"认知智能"，把原始的学习者行为转成在个体、班级与 AI 孪生专家各个层级上可解释的认知结构。这些系统把可视化定位为内生于[[ai-technologies|AI 技术]]的教育中的推理基础设施，而非输出。

## AI 生成与多模态的视觉内容

第二条主要脉络关乎 AI 直接产出可视化。[[nuclear-diffusion-text-to-image-learning-2026]]表明，经领域适配的文本转图像模型能生成专业 STEM 概念的准确插图：在核领域图像上微调 Stable Diffusion 把领域准确率从 12% 提到 78%，使教师能按需生成正确的反应堆部件与安全系统可视化。这种生成能力强大但不均衡。[[mllm-scientific-visualization-literacy]]把六个多模态大语言模型对照 485 名人类参与者[[benchmark|基准化]]于科学可视化素养，发现没有统一的胜任力：封闭源的 Gemini 在若干子集上超过人类均值，而所有[[open-source|开源]]模型都低于它，在细粒度[[quantitative-research|定量]]估计与基于纹理或基于整合的可视化上尤其薄弱。因此 AI 应当支持——而非替代——人类可视化素养，这一发现对[[ai-literacy|AI 素养]]与[[formative-assessment|形成性评估]]有直接意义。

伦理与可靠性为对 AI 生成视觉内容的热情降温。[[data-comics-for-education-evaluating-effectiveness-benefits-ethics]]发现[[generative-ai|生成式 AI]]辅助的数据漫画无论先前可视化素养如何都提升了[[student-engagement|投入]]与理解，但参与者提出对误信息风险与[[academic-integrity|署名]]归属的担忧，三分之二指出诸如过于繁杂的版面造成信息过载之类的缺点。反事实基准 CFES-P24 把这一审视延伸到[[cfes-p24-multimodal-slide-auditing-2026|幻灯片审计]]，显示多模态大语言模型能可靠识别[[learning-design|学习设计]]构念（操作、原则、证据定位），而在比较性判断与严重性校准上却大相径庭——这是复合分数掩盖了哪种能力失败、且置信度不等于可靠性的证据。这些作品合起来论证，应当对 AI 生成的可视化做分层的[[ai-ed-evaluation|评价]]，而非整体评分。

## 幻灯片、漫画与多视图工具的实践

实用系统把这些原则大规模地付诸实践。AISSA 把基于大语言模型的评分标准评分与学习分析仪表板结合，对学生演示幻灯片交付自动化、迭代的反馈，每次评价在 1–3 分钟内处理 90 份演示，成本以美分计，被感知的[[usability-research|可用性]]很高——而学生选择性地应用反馈，有时无视与其视觉设计冲突的建议。在[[cs-education|编程教育]]中，Flowcode 把一个代码结构流程图与一个面向学习的聊天配对，帮助新手创意编程者理解并扩展找到的范例，其中可视化与[[desirable-difficulties|生产性摩擦]]把 AI 使用导向学习而非绕过。然而视觉[[scaffolding|脚手架]]并非普遍有效：[[code-anchor-multi-view-visualization]]发现尽管有视觉脚手架，学生仍把约 47% 的注视时间花在代码上，其驱动因素是能动性、表示契合度与隐喻视图的被感知正当性。这些[[student-experience|学习者体验]]发现提醒，可视化设计必须顾及[[affective-computing|情感]]与社会因素，而不只是认知可供性。

## 意义

综观此处讨论的各项工作，可视化作为一种双重用途的媒介浮现：AI 越来越多地生成并解释可视化，而仪表板与交互式视觉充当人类—AI 意义构建的共享面。生成式文本转图像与多模态分析把可视化的触角延伸到专业[[stem-education|STEM]]内容与[[ai-feedback-quality|自动化反馈]]，但不均衡的模型胜任力、严重性校准失败、以及对误信息与署名的[[ethics|伦理]]担忧，要求细致、分层的核实。对设计者与教育者而言，最强的结论是：互动与投入——诱发学习者对视觉数据进行推理、让用户控制认知投入、把 AI 产出的视觉当作共享基础设施而非终点——比图表本身的保真度更要紧。

## 关联概念

- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — 空间与三维表示

## 关联文章

- [[interactive-learning-dashboards-engagement]] — 通过教学智能体把学习可视化重新构想为参与工具
- [[mllm-scientific-visualization-literacy]] — 为科学可视化素养基准化多模态大语言模型
- [[nuclear-diffusion-text-to-image-learning-2026]] — 用于核概念可视化的经领域适配的文本转图像模型
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — AI 辅助数据漫画的有效性、收益与伦理
- [[cfes-p24-multimodal-slide-auditing-2026]] — 面向多模态幻灯片审计的反事实基准
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — 在混合课堂中让机器学习发现对教师可及
