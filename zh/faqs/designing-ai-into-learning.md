---
title: "应当如何把人工智能设计进学习体验之中？"
created: "2026-09-22T12:00:00-04:00"
updated: "2026-09-22T12:00:00-04:00"
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---
*本页是英文页面的机器翻译，尚未经母语者审校。*

# 应当如何把人工智能设计进学习体验之中？


**从学习目标与学习过程出发，而不是从人工智能功能出发。** 本知识库的[[pedagogy|教学法与教学策略]]概念强调，同一套人工智能系统既可以充当脚手架，也可以充当[[socratic-method|苏格拉底式]]对话者、反馈伙伴、[[simulation]]或答案生成器，取决于教学设计如何安排。真正重要的是，这种配置是否保留了能够产生预期学习效果的那项活动。

## 一个稳妥的默认模式

一个稳妥的默认模式是：**学习者先尝试 → 人工智能提供支持 → 学习者评估或修改 → 学习者展示理解。** 更具体地说：

- 在有助于学习的地方，保留[[productive-failure|有益失败]]。
- 在呈现人工智能的辅助之前，先要求学习者给出初步预测或解法。
- 优先提供问题、提示、示例、反驳和反馈，而不是直接给出完整答案。
- 要求对具有重要影响的主张进行核实。
- 安排解释和[[learning-by-teaching|反向讲授]]的机会。
- 随着能力提升，逐步撤除支持。
- 保留一些不使用人工智能的机会，让学习者校准自己独立能完成什么。

[[reducing-ai-misuse|减少人工智能误用]]这一综述特别建议采用先思考、再用人工智能、后反思的顺序，以及有意识的评估检查点。

## 让人工智能的角色与认知投入水平相匹配

[[thermomix-genai-education-analogy-2026|Rummel、Nachtigall 与 Panadero 的厨房电器类比]]把设计问题从学习者*是否*使用[[generative-ai|生成式人工智能]]，重新表述为这种使用*如何*塑造他们将成为什么样的人。借助[[icap-framework|ICAP]]与[[samr-model|SAMR]]框架，把智能厨房电器的四种用法映射到学习情境上，可以得到一个设计阶梯：把作业完全外包出去，不做修改、也没有[[critical-thinking|批判性投入]]，属于被动式替代，会带来[[cognitive-offloading|技能退化与过度依赖]]的风险；[[prompt-engineering|优化提示词]]并交叉验证输出结果，需要[[prior-knowledge|先前知识]]与[[self-regulated-learning|自我调节]]（主动／增强）；用人工智能来头脑风暴、拟定提纲并评价原创作品，属于建构／修改；而把人工智能当作真正的对话伙伴，用于共同建构和自适应[[feedback]]，则属于互动／重新定义。这对设计的启示很直接：同一个工具在这一级是绕行捷径，在上一级却是脚手架，因此应当明确规定所期望的使用方式，而不是一律放开权限。

## 设计要讲顺序，而不只是允许使用工具

[[learning-paths-patterns-learning-design-2026|Divjak、Svetec 与 Horvat]]分析了 554 门课程中 29,064 项教与学活动的计划顺序，发现其中存在一种可见的设计语法：获取类活动是最常见的起点，也是占比最大的单一类型（超过 20%）；学习类型与预期的布鲁姆层级相对应（获取类从第 1 级的约 50% 下降到第 6 级的约 20%，产出类在第 5 至 6 级上升到 20% 以上）；而最强的转移是评价 → 讨论（0.332）。由此得出两点对人工智能设计的启示：人工智能应当出现在序列本就期望某种特定活动类型的位置，而不是在末尾硬加上去；并且，由于反馈与[[collaborative-learning|协作]]、[[group-work|小组合作]]及[[teacher-role|教师]]在场聚集在一起，同伴结构和同步结构创造了那些[[feedback]]时刻，人工智能的支持应当接入这些时刻，而不是取代它们。

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli 及其同事提出的“先克制、后放大”框架]]把这一点推进到培养方案层面：当某项能力尚在形成时暂不提供生成式工具，等学生能够指挥它、判断它返回的结果并为之负责时再恢复使用，并在每个转折点设置难以造假的检查关卡。电子设备由一条“促进能力形成还是导致[[cognitive-offloading|认知卸载]]”的标准来管理：在支持投入性工作时允许使用，在消耗注意力时则排除在外。这使卸载决策变成一个[[curriculum-design|课程]]与[[governance]]问题，它先于课程层面的设计，而不是后于它。

## 建设性对齐优先

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes 及其同事对 14 份高等教育指导文件的话语分析]]警告说，以效率为框架的建议，例如用生成式人工智能起草学习成果、评分量规和课程大纲，会产生一种*看似*对齐的对齐，却忽略了“建设性”的那一半：学习成果、活动与[[assessment]]被生成为彼此独立的条目，而不是相互依存的整体。他们给出的补救办法是重新排序，而不是禁止：教育者应当充分理解建设性对齐，从而能够指挥、质询并拒绝人工智能的输出，然后才把其中任何部分交托出去；因为仅凭看起来合理就表面接受的习气，正是指导者告诫学生要避免的那种评价性失误。他们认为，在使用人工智能的地方，应当采用受机构约束的[[rag|检索增强]]系统，围绕本地政策与质量标准进行配置，而不是依赖通用的、用互联网数据训练的默认模型。

## 更宽泛的原则

[[finkelstein-principled-ai-education-2025|《有原则的人工智能教育框架》]]中更宽泛的原则是：技术应当增强教育所希望培养的人类能力，而不是取代它们。另见[[learning-design|教学设计]]、[[active-learning|主动学习]]与[[scaffolding]]。

关于决定所设计的互动能否保持学习的教学默认设置，参见[[reduce-ai-cheating]]和[[redesign-assessment-ai-era]]；关于同样的原则如何约束软件本身，参见[[designing-educational-ai-software]]；关于这些原则如何转化为导师系统的架构，参见[[developing-ai-tutor]]。
