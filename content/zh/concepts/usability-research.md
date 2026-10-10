---
title: 可用性研究
created: "2026-08-24T02:15:00-04:00"
updated: "2026-10-09T18:58:09-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
translation_of: concepts/usability-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **可用性研究（Usability research）** — 对用户如何与一个软件系统互动、以及该系统的可用性、有用性与用户体验（UX）的实证研究。借自人机交互（HCI），可用性研究评估一个 AI 教育工具是否可用、可学、高效且令人满意——这些品质决定了学习者是否真正采纳它并从中受益。它与对学习现象的 [[qualitative-research|质性探究]]和 [[quantitative-research|量化效能]]不同但互补：可用性研究关注*人与系统之间的互动*，而非学习结果本身。

## 值得思考的问题

- 你能想起一个软件工具——教育的或其他的——它教学法上健全或确实强大，但你因为困惑或受挫而停止使用？那正是可用性研究试图在其损耗学习之前加以解释的失败。
- 一个常见假设是，工具的教育效能可以通过学习增益是否提高来判断。但本页论证，一个工具可能不可用却在试验中看似"奏效"，或可用却不能教会。为什么一项显示学习增益的研究仍可能遗漏该工具在实践中难以使用？
- 在读方法之前，你会如何着手弄清一个 AI 辅导者是否令学习者困惑、受挫或易出错？你实际会做什么或观察什么——以及用户自陈的满意度会漏掉什么，而细致观察能捕捉到？
- 出声思维是核心方法：用户边工作边说出想法，实时暴露困惑与心智模型。如果你是用 AI 工具的学习者，关于自己的困惑你能表达出什么，是简单的"你喜欢吗？"式调查永远捕捉不到的？
- 本页指出，自陈的满意度可能与客观表现脱节——人们可能说热爱一个暗中让他们变慢的工具，或低估一个实际有帮助的工具。你在哪里见过这种"人所说"与"其行为所示"之间的差距？
- 可用性研究告诉你一个工具是否可用，而非它是否教会。如果你在评估一个 AI 学习工具，你会如何把可用性证据与学习证据结合——一个两者都通过的工具还可能达不到什么？

## 引言

可用性与 UX 研究回答这样的问题：学生能弄明白如何使用这个 AI 辅导者吗？这个 AI 工具是否令人困惑、受挫或易出错？它是否适合教师或学习者的工作流？这些问题是效能研究中所测 [[learning-gains|学习增益]]（或其缺失）的前提——有时是其隐藏的原因。一个教学法健全但不可用的 AI 工具会在实践中失败；可用性证据解释了原因。

## 核心方法

- **出声思维协议。** 用户在完成任务时口头表达其想法，实时揭示理解、困惑与心智模型。[[code-anchor-multi-view-visualization|一项多视图代码可视化研究]]与 [[learn-framework-responsible-genai-pbl-2026|LEARN 框架]]使用出声思维来理解学习者如何理解 AI 辅助工具；[[feedback-futures-genai|feedback futures]] 考察学习者如何处理 AI 生成的反馈。
- **用户研究。** 结构化的基于任务的评价测量效率、错误率、满意度与完成度。[[rhaimi-productivemath-2025|ProductiveMath]] 评价一个生成式 AI 应用在支持productive-failure教学中的可用性；[[supplynet-visual-exploratory-learning|SupplyNet]] 对一个视觉探究式学习工具运行用户研究；[[llm-chatbots-cs-multiple-choice|LLM chatbots for CS multiple-choice]] 评估互动质量。
- **访谈与观察。** 质性可用性访谈与观察捕捉用户体验、偏好与痛点。[[icub-humanoid-storytelling-llm-hri-2025|A usability study of a storytelling humanoid robot]] 使用结构化评价来询问家长是否会让孩子与该机器人互动；[[genai-architectural-design-studios|AI in design studios]] 观察并访谈在真实设计工作中使用 AI 的学生。
- **系统性可用性评价。** 启发式评价、认知走查与基于问卷的 UX 测量（如 SUS）依既定标准系统评估可用性。

## 可用性研究如何出现在本知识库中

- **AI 学习工具评价。** [[rhaimi-productivemath-2025|ProductiveMath]]、[[supplynet-visual-exploratory-learning|SupplyNet]] 与 [[anvil-ai-educational-animations|educational animations]] 均被评价其可用性与 UX。
- **人机与 [[conversational-ai|对话式 AI]]互动。** [[icub-humanoid-storytelling-llm-hri-2025|The humanoid storytelling study]] 是对 [[llm]] 驱动互动的明确可用性研究；[[conversational-ai-agents-umbrella-review-2026|an umbrella review of conversational AI agents]] 将可用性与互动质量识别为一个反复出现的主题。
- **设计与精化。** 可用性发现反馈给迭代式设计（见 [[design-thinking]] 与 [[learning-design]]），在效能测试之前或与之并行改进工具。
- **一件工具跨情境，及其局限的上限。** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] 在领域、任务与工具保持不变的情况下让教育水平变化，因此 144 名学生对 893 条反馈答案和 237 份报告的评价比较的是情境而非学科——只有感知准确率跨水平有别。该研究也指出了这类用户评价的局限：72.2 到 86.4 百分比的学生平均至少给 4 分（满分 5 分），且作者声明其不显著差异不能确立等价，因为没有预先设定边际。
- **评分者设计被报告为发现的一部分。** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] 让 25 位领域匹配的专家按锚定于"一堂标准 MOOC 讲座的质量"的评分标准评判 92 个重新生成的讲座，给每个视频指派单一评审（k = 1），以把专家小组铺开到语料的更多部分，而非收集重复评分。这一取舍被建模而非隐藏：一个随机截距模型把约 35 百分比的残差方差归于评审者（ICC = 0.35），且区间按评审者聚类——这样，一个专家小组才能诚实地报告"87 百分比达到或超过门槛"并给出区间。

## 与其他研究家族的关系

可用性研究与 [[qualitative-research|质性研究]]共享数据收集方法（访谈、观察、出声思维），但在*目的*上不同：质性研究解释意义与经验以建立理解与理论，而可用性研究依可用性/UX 标准评价一件制品。它还与 [[ai-ed-evaluation]]（评估一个系统是否奏效）和 [[educational-measurement|测量]]（量化可用性构念）重叠。本知识库把可用性视为一条独立但相连的方法论线索——与 [[human-ai-collaboration]]、[[student-experience]] 以及有效 AI 学习工具的设计相关。它如何融入更广的方法版图，见 [[research-methods-aied]]。

## 优势与局限

- **优势：** 直接识别阻碍采纳与学习的可用性障碍；产出可操作的设计指引；通过解释一个工具*为何*在使用中奏效或失败来补充效能与质性研究；相对大实验更快、更便宜。
- **局限：** 可用性发现不确立学习效应（可用的工具仍可能教不会）；小样本与任务特定情境限制可推广性；自陈满意度可能与客观表现脱节；依赖研究者与任务设计。

## 关联概念

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## 关联文章

- [[icub-humanoid-storytelling-llm-hri-2025]] — A usability study of an LLM-powered storytelling humanoid
- [[rhaimi-productivemath-2025]] — ProductiveMath: usability of a generative-AI app
- [[supplynet-visual-exploratory-learning]] — SupplyNet user study
- [[anvil-ai-educational-animations]] — Usability of AI-generated educational animations
- [[code-anchor-multi-view-visualization]] — Think-aloud study of multi-view code visualizations
- [[learn-framework-responsible-genai-pbl-2026]] — LEARN framework and think-aloud evaluation
- [[feedback-futures-genai]] — How learners process AI-generated feedback
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots for CS multiple-choice questions
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents
