---
title: 学习迁移
created: "2026-05-07T18:02:28-04:00"
updated: "2026-10-09T19:41:18-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: concepts/transfer-of-learning
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学习迁移（transfer of learning）** — 在一个情境中获得的知识或技能（例如与一个 AI 工具的练习）持续下来并在不同情境（例如没有该工具时的独立表现）中应用的程度。在 [[ai-education|AI 教育]]中，迁移是核心的开放问题：学生*借助* AI 工具表现出的增益，是否转化为他们*在没有*工具时也能展示的持久学习。

## 值得思考的问题

- 本页记录了一个醒目的模式：学生常在 AI 辅助的任务上表现出即时增益，而当 AI 被移除时，这些增益可能消失——甚至反转。在读解释之前，你认为一个显然在当下有帮助的工具，为何最终可能让学生在没有它时处境更糟？
- 回想你曾在一位导师、计算器或助手的帮助下学会做某件事、然后不得不独自做的事。那项技能延续下来了吗，还是你感到依赖那个辅助？把迁移得好的经验与没迁移好的经验分开的，是什么？
- 一个常见直觉是"练习就是练习"——在有帮助下做任务，与独立做它，建立的是同一种技能。这种直觉在哪里可能误导人，尤其是当那份帮助是一个替你完成推理、而非引导你完成推理的 AI？
- 本页区分一项技术的"效应伴随（effects with）"与"效应属于（effects of）"——在使用工具时表现更好，与在没有它时变得更有能力。如果你是教师、设计者或学生，哪个才是你真正的目标，而你会如何知道自己达到了它？
- 证据表明，你委派多少认知工作是有影响的：卸载表层任务（如语法）对迁移的伤害，小于卸载深层推理与结构。想想你上次在作业上用 AI 的情形。你委派了哪一"层"，你的选择对你最终能保留什么预示了什么？
- 本页提出若干可能支持正向迁移的条件——[[pedagogy|教学]] [[guardrails]]、渐隐支持、对准学习者的就绪度。如果你在设计（或是用户）一个 AI 学习工具，你会坚持什么，好让使用期间的增益变成没有它时的持久能力？

## 引言

学习迁移是教育 [[research-methods-aied|研究]]中的一项基础关切，而 AI 工具使它变得紧迫。跨"教育中的 AI"研究记录的定义性经验模式是一个**迁移悖论**：使用 AI 的学生通常在 AI 可用的任务上表现出即时、可测的增益，但当 AI 被移除、学生必须独立展示理解时，这些增益常常无法持久——甚至反转。这一模式牵连到 [[cognitive-offloading|过度依赖]]、认知负荷理论与 [[metacognition]] 作为起作用的机制，并直接连接到关于 [[intelligent-tutoring|AI 辅导]]设计的争论。

就绪不等于迁移：AI 辅助的口语练习与更低的口语焦虑、更高的与人交流意愿相关，然而两项研究都没有观察人的口语，使"从 AI 排练到人际交流能力"这条路径成为一个未经检验的教学提案（[[ai-speaking-practice-communicative-readiness-2026|Wang & Li（2026）]]）。

### 迁移悖论

使用 AI 的学生通常在 AI 可用的任务上表现出**即时、可测的增益**。然而当 AI 被移除时：

- 效应变得**混杂或负面**
- 增益常常**未能迁移**到未被考核的情境
- 学生可能**依赖工具**，以独立推理为代价

[[stanford-evidence-base-ai-k12-2026|《斯坦福 K-12 AI 证据基础》综述]]所综合的证据基础，在各领域上是一致的：

| 研究 | 情境 | 即时效应 | 迁移效应 | 机制 |
|---|---|---|---|---|
| Bastani et al.（2025） | 高中数学 | 练习成绩更高 | 闭卷期末**差约 17%** | 通用聊天机器人做了工作 |
| Chen et al.（2025） | 编程作业 | 作业分数更高 | 无辅助考试上**无改善** | [[llm]]-导师替学生解了题 |
| Lehmann et al.（2025） | 编程 | 覆盖更多主题 | **损害理解**；差距扩大 | 面向低先验学习者的通用 AI |
| Stadler et al.（2024） | 学术研究 | 任务完成更快 | 相对搜索**推理质量更低** | 认知 [[student-engagement|参与]]减少 |
| Kosmyna et al.（2025） | 论文写作 | 论文质量更高 | **83% 无法回忆**自己的引语 | 作者身份被外包 |

五项研究在通用 AI 作为干预时，全都显示**负面或零迁移**模式。

### 破坏迁移的机制

**元认知位移。** AI 完成推理，减少了学生监控自己理解、选择策略的机会。使用 AI 的学生在被追问时更无法解释自己的答案。这连接到 [[metacognition]] 关于自我监控的研究，以及 [[vibe-compiler-metacognition-genai-agency-2026|结构化课程提升元认知能力、而原始 LLM 助手不提升的证据]]。

**相关负荷抑制。** 通用 AI 减少的不只是外在（分心的）认知负荷，也减少*相关*负荷——那种编码持久知识的生产性心理努力。更容易的练习感觉更好，但存下的痕迹更弱。参见认知负荷理论，以及 [[stanford-evidence-base-ai-k12-2026|辅导专用 AI 与通用 AI]]之别。

**过度依赖/专长反转。** 拿到答案的新手不会建立图式。通用 AI 给答案；有效辅导给结构化引导。当新手被给予专家级捷径时，学习被打断——这是反过来的 [[desirable-difficulties]] 原则。

**工具依赖的表现。**学生可能为 AI 工具的具体可供性做优化（[[prompt-engineering|提示工程]]、依赖生成的代码结构），而非建立领域泛化——这是一种 [[cognitive-offloading-speedup-illusion|认知卸载]]，感觉有成效却挤走了持久学习。

一间受保护的课堂也可能教出错误的习惯：[[shi-genai-experiential-learning-management-education-2026|Shi、Dai 与 Zhang（2026）]]警告，规则事先固定的模拟会滤掉不确定性、强化循规，于是在其中形成的决策习惯，一旦学生遇到真实情境中相互竞争的利益与不完整的信息，就可能成为认知负债。
**分层敏感的卸载与迁移。** [[layer-sensitive-cognitive-offloading-writing-2026|Chen（2026）]]在 [[generative-ai|GenAI]] 辅助写作中直接检验了 Salomon、Perkins 与 Globerson 的"伴随效应 vs. 属于效应"之分：一项八周准实验发现，开放式 AI 协作最大化了辅助写作表现，却产出了*最低*的独立无 AI 近迁移结果，而带反思的有界支持保住了独立能力。更深的卸载层（推理、结构）比表层（语法）预测更差的迁移。这是直接的课堂证据：AI 的*伴随*支持表现增益并不迁移到*属于*支持的独立表现——且委派的深度、而不只是是否用了 AI，塑造迁移。

一个互补的（即便混淆了的）实例来自 [[physics-education|物理]]：波鸿鲁尔大学对核物理与粒子物理导论课程的重新设计（[[ai-particle-physics-education-redesign-2026|Mikhasenko et al.，2026]]）让学生成功完成了有 AI 辅助的、资源丰富的协作研究问题，然而同一批学生在传统无辅助笔试上平均只有 20.6/80，几项认真的尝试甚至无法完成标准计算。作者把这读作证据：辅助表现不会自动迁移到未被提示的表现，而他们的补救是刻意设计——让笔试成为唯一的成绩决定因素，提前公布习题使课堂时间成为准备好的讨论，并在探索性的、允许 AI 的工作周围添加先修准备、范例与巩固。

## 支持正向迁移的条件

有限的证据表明，迁移在以下条件下是可能的：

- **存在教学护栏** — 分步提示、针对 [[misconceptions|误解]]、[[socratic-method|苏格拉底式提问]]（Bastani et al.，2025 辅导变体）
- **传统策略被保留** — 记笔记与 AI 使用配对提高了保持（Kreijkes et al.，2026）
- **AI 用于 [[formative-assessment|形成性]]而非 [[summative-assessment|总结性]]练习** — 在学习期间搭脚手架，而非在考核期间
- **练习形式与所迁移的知识相匹配。** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit、Koedinger 与 Carvalho（2025）]]发现，检索式练习的增益常无法迁移到不熟悉的问题——它们强化对一个程序的记忆，却不使它能在新情境中被使用——而对新应用的持久泛化，要求把练习与支持技能归纳的范例配对；因此最佳范例–问题比例取决于内容是逐字事实还是一般化技能。
- **学习者专长被校准** — 工具使支持适配就绪度，而非默认给全量帮助

- **迁移作为区分学习与辅助的判据。** [[yan-agentivism-learning-theory-ai-2026|Yan 与 Gašević（2026）]]把他们关于人–AI 学习的理论建立在"支持减少下的迁移"上：只有在支持撤除后能力仍然持续，辅助表现才算学习，这使迁移成为检验，而非若干结果之一。他们的命题是有方向的：在 AI 支持的工作中要求来源核查或论证，应改善延迟表现，而反复的低摩擦委派、不重建，应削弱学习者对自己能力的校准。
- **指导与工作并置。** 与上表的负面迁移模式相对，一项 36 人的比较发现，由一台桌面机器人辅助的学习者在帮助撤除后把分数保持在 7.0/10，而 ChatGPT 辅助的学习者跌到 4.4/10，短期迁移分数高 60%（[[aifred-desk-robotic-ai-guidance-2026|Orlando et al.（2026）]]）。该结果是任务后约 35 分钟测得的短期迁移，无延迟保持测试，在一所校园的 36 名参与者中。

这与 [[intelligent-tutoring|AI 辅导]]研究一致——带教学护栏的辅导专用工具优于通用 [[conversational-ai|聊天机器人]]——也与 [[scaffolding]] 关于随能力增长渐隐支持的原则一致。

### 未解问题

1. **时间尺度：** 迁移会随数周/数月的使用改善，还是依赖会加深？
2. **领域差异：** 在结构良好的领域（数学）中迁移是否优于结构不良的领域（写作）？
3. **个体差异：** 高 [[prior-knowledge]] 学生是否比新手损失更少的迁移？
4. **技能补救：** 明确的"无 AI"练习时段能否反转工具依赖？

### 与相关概念的关联

学习迁移与 [[metacognition]]（对理解的自我监控）、认知负荷理论（相关负荷 vs. 外在负荷）、[[desirable-difficulties]]（有效挣扎）、[[scaffolding]]（渐隐支持）、[[cognitive-offloading|过度依赖]]（工具依赖）以及 [[sociocultural-learning]]（通用 AI 通过替学生完成工作而运作在 ZPD 之外）相连。它是辅助表现与真实学习之间的桥梁——[[stanford-evidence-base-ai-k12-2026]] 与 [[intelligent-tutoring|AI 辅导]]有效性的核心问题之别。

## 关联概念

- [[pedagogical-patterns]] — 这些序列最终大多据以评判的结果
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — 有效失败
## 关联文章

- [[yan-agentivism-learning-theory-ai-2026]] — 一个面向人–AI 互动的中程学习理论，含四项机制与六个可检验命题（Yan 与 Gašević 2026）

- [[layer-sensitive-cognitive-offloading-writing-2026]] — GenAI 辅助写作中的分层敏感认知卸载（Chen 2026）
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — 表现–学习之分与持久迁移
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — 面向有效失败的 LLM 教学引导
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — 粒子物理教育中的 AI：研究问题与基础技能
- [[shi-genai-experiential-learning-management-education-2026]] — 论证受保护的课堂模拟可能形成在课堂之外失效的决策习惯

- [[ai-speaking-practice-communicative-readiness-2026]] — AI 辅助口语练习提升了对人的交流意愿，但没有研究观察人的口语
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred：通过桌面功能机器具身实现增强学习
