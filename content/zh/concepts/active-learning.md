---
title: 主动学习
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:58:09-04:00"
connected_faqs: [does-ai-help-students-learn, designing-ai-into-learning]
type: concept
foundations: [ai-education, learning-design]
pedagogy: [active-learning, scaffolding]
audience: [learners]
level: [higher ed, k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: concepts/active-learning
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

> **主动学习（Active Learning）** — 让学生做事并思考自己所作所为的教学方法，而非被动接收信息。在教育 AI 领域，主动学习研究既考察 AI 工具如何支持主动学习教学法，也考察与 AI 工具的主动参与——而非被动消费——如何影响学习结果。

## 值得思考的问题

- 你大概听过"主动学习"受到称赞。但一个点击仪表板或接受生成答案的学生真的在主动学习吗？什么使一项活动在真正的意义上是"主动的"？
- ICAP 框架区分主动、建构性与互动性参与——只有更深的层级才构建持久知识。你上次用 AI 工具学东西时，它实际把你推向了哪个参与层级？
- AI 可以规模化地实现主动学习，但设计不佳的 AI 也可能替学生做认知工作。你在哪里见过 AI 使学习者更被动而非更投入？
- 一项 EEG 研究发现互动式学生—AI 协作产生最高的认知参与，而完全自动化降低了它。为什么"与 AI 一起做"可能胜过"看 AI 做"？
- 教学相长（teach-back）——让学习者解释自己的理解——比被动重读更有效地暴露缺口。何时提示学习者向 AI 解释，是比让 AI 替他们作答更好的学习动作？
- 主动学习依赖随胜任力增长而淡出的校准式支架。一个 AI 辅导者要知道何时退后有多难——如果它从不退后，风险是什么？

## 引言

主动学习是教育研究中的基础原则，扎根于将学习者定位为知识的主动建构者的 [[constructivist]] 理论。在教育 AI 的语境中，这一概念获得双重意义：AI 工具可以规模化地实现主动学习（通过 [[intelligent-tutoring|互动式辅导]]、[[simulation|模拟]]与 [[adaptive-learning|自适应反馈]]），但设计不佳的 AI 工具也可能通过 [[cognitive-offloading|替学生做认知工作]]而破坏它。AI 辅助与主动认知参与之间的张力——如 [[lak2026-hint-button-unproductive-use]] 关于过早使用提示与 [[efficiency-gain-illusion-ai-overreliance]] 关于 [[cognitive-offloading|过度依赖]]的文章所探讨——是一个核心关切。

AI 赋能的主动学习在本知识库中以多种形式呈现：让学生参与解题而非给出答案的 [[intelligent-tutoring]] 系统、[[genai-mindtool-generative-learning]] 方法——学生把 AI 当作思考工具而非替代品、[[test-driven-ai-assisted-learning]]——学生驱动 AI 互动而非跟随它，以及 [[curiobot-llm-tutoring-exploratory-learning]] 探究式学习环境。[[scaffolding]] 概念与之紧密耦合——有效的主动学习需要随胜任力增长而淡出的校准式支持，这正是 AI 辅导者必须学会提供的。

## 主动学习如何出现在本知识库的研究中

- **互动模式决定认知参与。** [[ai-assisted-learning-modes-eeg|一项针对高中生的 EEG 研究]]比较了 Auto（AI 独立解题）、Interactive（带支架的学生—AI 协作）与 Manual（无 AI）三种模式：**Interactive 产生了最高的认知参与与任务准确率**，而 Auto 降低了参与并有过度依赖的风险。这为"AI 必须让学生*做*而非旁观"的论证提供了一个神经生理学维度。

- **AI 支持的探究并非自动是更高阶的。** 一项对 120 名八年级学生的准实验发现，AI 支持的 [[inquiry-based-learning|探究式学习]]提高了创造性数学表现与对数学的态度，但在批判性 [[problem-solving]] 上没有产生显著增益——这是对把创造性与情感增益读作更深层推理证据的告诫（[[mujib-ai-ibl-creative-math-2026|Mujib et al., 2026]]）。

- **探究与基于模拟的主动学习。** [[supplynet-visual-exploratory-learning|SupplyNet]] 使用情境化多智能体 LLM 模拟支持供应链教育中的视觉探究式学习，将互动式网络视图与分支式的"假如"时间线配对，使学习者追踪因果动力学而非消费抽象内容。[[curiobot-llm-tutoring-exploratory-learning|Curiobot]] 与 [[genai-assisted-problem-posing-physics-2026|物理中的问题提出]]同样把学习者驱动的探究置于前台。
- **用于主动复习的结构化对话工作流。** [[knowloop-confusion-to-consolidation-2026|KnowLoop]] 把课后复习组织为三个阶段——Recognize（就地标记困惑）、Resolve（澄清）与 Consolidate（教学相长）——表明教学相长促使学习者表达并暴露概念缺口，且情境扎根的 AI 在定向支持上优于通用 AI。教学相长具体体现了 [[learning-by-teaching]]。
- **主动学习作为项目制、社群结构。** [[academic-league-of-ai-2026|The Academic League of AI]] 围绕竞赛队、学习小组与 AI 促社会公益的项目组织课外 AI 教育，通过民主的学生治理而非自上而下的课程体现主动与 [[project-based-learning|项目制学习]]。
- **思维工具与生成性参与。** [[genai-mindtool-generative-learning|GenAI 作为思维工具]]把 AI 定位为学生借以*思考*的装置，而非答案来源，使主动学习与生成性学习理论对齐——学习者把新观念整合进已有知识。
- **围绕模型的错误设计。** 一个五步序列（独立分析、一个标准化的 ChatGPT 提示、对输出的批判性评价、修改、课堂讨论）之所以奏效，是因为 AI 可预见地犯错：ChatGPT 把一首歌歌词中的无弹性需求误标为"完全弹性"，这一差异教会学生验证输出（[[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]）。
- **一个经过教学法设计的 AI 辅导者可以胜过主动学习课堂本身。** 在哈佛大学入门物理课程中的一项交叉 [[rct]] 把一个定制 AI 辅导者与该课程自身的课堂主动学习课相比——是同一套基于研究的教学法，而非讲座——发现用更少的时间学到显著更多：后测中位数 4.5 对 3.5，线性回归效应量 0.63，任务用时中位数 49 分钟对课堂 60 分钟（[[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]）。作者把功劳归于设计而非媒介，因为该辅导者被工程化以承载与课堂相同的七项基于研究的实践，只增加了按需的个性化反馈与自主节奏。

### ICAP 框架作为组织透镜

主动学习正是由 [[icap-framework|ICAP 框架]]（Interactive–Constructive–Active–Passive，互动—建构—主动—被动）操作化的，它按认知参与与知识变化的模式对学习者行为分类。在 ICAP 下，口语中所称的"主动学习"实际横跨三个不同、有序的参与层级：*主动*（作用于材料，如做笔记或回答提示）、*建构性*（生成超出所给内容的新输出，如自我解释或作图）、*互动性*（通过对话共同建构意义）。这对教育 AI 重要，因为 AI 工具可以伪装成"主动"而把学习者留在最浅的模式：点击仪表板或接受一个生成的答案至多是主动的，而非建构性或互动性。ICAP 由此强化了主动学习的核心设计目标——**把学习者从主动推向建构性与互动性参与**——并警告那些*替学习者作答*的 AI 系统，它们使学习者保持被动。([[icap-cognitive-engagement-llm-agents]])([[hingle-collaborative-ai-literacy-2025]]) 这把主动学习直接连接到 [[icap-framework]]、[[student-engagement]] 与 [[collaborative-learning]]，后者的最高 ICAP 模式是互动性对话。

## 实践指引

- **让学习者保持在回路中。** 设计 AI 互动，使学生作用于输出并与输出共事（互动、有支架的模式），而非接收现成答案；完全自动化可测量地降低认知参与。
- **把 AI 支持锚定在学习者自身的活动上。** 困惑点、学习者驱动的问题与问题提出为复习和探索提供个性化入口。
- **使用教学相长与解释。** 让学习者表达自己的理解；通过解释暴露缺口比被动重读更主动。
- **把主动参与与校准式支架配对。** 支持应随胜任力增长而淡出——从不撤出的 [[scaffolding]] 本身会变成被动依赖。
- **偏好让思考可见的工具。** 探究式模拟、思维工具与互动式问题空间支持处于主动学习核心的因果追踪与比较推理。

## 与相关概念的联系

主动学习与 [[collaborative-learning]]（许多主动学习是社会的）、[[learning-by-teaching]]（向他人解释是最主动的）、[[project-based-learning]] 与 [[experiential-learning]]（在真实情境中做中学）、[[embodied-learning]]（身体参与）、[[game-based-learning]] 以及 [[simulation]] 深度相连。它依赖 [[scaffolding]] 与及时的 [[feedback]]，并在 AI 替代努力时受 [[cognitive-offloading|过度依赖]]威胁。它扎根于 [[constructivist]] 与 [[learning-theories]]，横跨 [[higher-ed]]、[[k-12]] 与 [[stem-education]]。

主动学习是 AI 时代 [[learning-gains|学习增益]]上最强的杠杆之一。因为主动策略通过费力的做事来构建理解，它们最抗 AI 的短路——而本知识库的证据表明，保住这种努力保护持久学习，让 AI 吸收它则侵蚀之（[[generative-ai-reduced-study-time-math|学习时间减少]]、[[stromberg-generative-ai-learning-penalty-secondary-2026|学习惩罚]]、[[lak2026-hint-button-unproductive-use|提示滥用]]）。把主动学习设计与 [[learning-gains|测量到的增益]]配对于无辅助结果的教师，能最清楚地看到 AI 辅助的活动是否真的改善了学习。

## 关联概念

- [[learning-gains]]
- [[problem-based-learning]]
- [[learning-by-teaching]]
- [[scaffolding]]
- [[constructivist]]
- [[learning-design]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[generative-ai]]
- [[feedback]]
- [[cognitive-offloading]]
- [[collaborative-learning]]
- [[learning-theories]]
- [[icap-framework]]
- [[student-engagement]]
- [[project-based-learning]]
- [[experiential-learning]]
- [[embodied-learning]]
- [[simulation]]
- [[game-based-learning]]
- [[help-seeking]]
- [[pedagogy]] — 伞形概念：教育 AI 中的教学法与教学策略

## 关联文章

- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — AI 辅导胜过课堂主动学习：一项在真实教育情境中引入新型基于研究设计的 RCT（Kestin et al. 2025）
- [[ai-pbl-computational-thinking-2026]]
- [[beck-genai-literacy-economics-hands-on]] — Active-learning GenAI framework for economics (Beck & Brodersen 2025)
- [[lak2026-hint-button-unproductive-use]]
- [[efficiency-gain-illusion-ai-overreliance]]
- [[neurodivergent-computing-students]]
- [[genai-mindtool-generative-learning]]
- [[test-driven-ai-assisted-learning]]
- [[curiobot-llm-tutoring-exploratory-learning]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[ai-assisted-learning-modes-eeg]] — EEG study of AI interaction modes (interactive > auto)
- [[supplynet-visual-exploratory-learning]] — SupplyNet: visual exploratory learning via multi-agent simulation
- [[knowloop-confusion-to-consolidation-2026]] — KnowLoop: staged conversational post-lecture review
- [[academic-league-of-ai-2026]] — Academic League of AI: project-based active learning
- [[mujib-ai-ibl-creative-math-2026]] — AI-supported IBL and creative mathematical performance
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
