---
title: 技术
created: "2026-08-19T18:10:00-04:00"
updated: "2026-10-09T19:47:36-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-10-02T07:32:07-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **技术（Technologies）** — 为教育中 AI 系统提供动力的模型、架构与方法，以及知识库对技术层覆盖的总括概念。[[pedagogy]] 与 [[learning-theories]] 关乎*教与学如何发生*，[[ai-ed-evaluation]] 关乎*AI 是否有效*，而本页锚定的是*技术*这一脉：那些 AI 系统（[[llm|大语言模型]]、[[generative-ai|生成式 AI]]、[[multimodal|多模态模型]]、[[educational-robotics|机器人]]）以及用于构建、控制与部署它们的技术（[[prompt-engineering]]、[[rag|检索增强生成]]、[[reinforcement-learning]]、[[educational-nlp]]、[[knowledge-graph|知识图谱]]、[[agentic-ai|智能体编排]]）。

## 值得思考的问题

- 你可以是一位出色的教育者而不必能构建一个 LLM——但本页论证，你的技术选择仍然塑造 AI 在你的课堂上能与不能做什么。底层技术可能在哪些方面悄悄改变学生的学习，即便你从不看代码？
- 一个常见假设是，模型就是全部——但检索增强生成（RAG）与提示工程这类技术，正是为控制与锚定 LLM 产出而存在。在往下读之前，当你要求一个 AI"更准确"或"用这个来源"时，你认为引擎盖下实际发生的是什么？
- RAG 被描述为一项减少幻觉、提升安全的核心技术。为何你认为，把相关知识取回来给 AI 的答案"锚定"，对教育比对比如闲聊更重要——而这种锚定失败时会出什么问题？
- 本页声称，技术选择体现教学假设：一个建立在苏格拉底式提示上的导师与学习者一起推理，而一个答案生成模型可能只是交出解答。你能想起一个似乎"预设"了某种教学哲学的 AI 工具吗——而它与你实际想教或想学的方式是否契合？
- 除原始准确率之外，本页建议 AI 系统应在可靠性、教学法与公平上受评。你怀疑多数人（包括许多教育者）在判断一个 AI 工具是否"好用"时，默认用的是哪个头条指标，而它为何可能藏得比揭示的多？
- 智能体式 AI 被描述为把 AI 从"一个响应提示的工具"移向"一个主动的协作者"。一个自行发起并编排多步工作流的系统，可能如何改变你作为教师或学习者所负责的东西——而谁对它问责？

## 引言

[[ai-education|AI 教育]]运行在一套特定的技术栈上，理解它对 [[teacher-role|教育者]]与研究者很重要，即便他们自己并不构建系统——因为技术选择塑造 AI 在课堂上能与不能做什么、它携带的风险，以及如何评估它。本页组织知识库的技术概念覆盖：那些 AI 系统、适配与控制它们的技术，以及技术层如何连接教学、考核与评估。

## 教育中的 AI 系统

- **大语言模型（LLM）。** 多数现代 [[ai-education|AIED]] 的计算骨干——[[llm|LLM]] 生成类人文本，用于辅导、考核与内容生成，是知识库中被引用最多的技术。[[llm-training-and-fine-tuning|训练与微调]]把通用 LLM 适配为教育用途。
- **生成式 AI。** 更广的一类系统，产出文本、代码、图像与其他内容——[[generative-ai|生成式 AI]]（主要由 LLM 驱动）是当前这波 [[ai-education|AIED]] 研究背后的技术。另见 [[multimodal|多模态模型]]（文本、图像、音频）与 [[simulation]]。
- **机器人与具身系统。** [[educational-robotics|教育中的机器人]]增添了具身的、常是社会性的在场——用于计算思维的可编程套件，以及用于辅导、讲故事与角色扮演的人形/社交机器人。机器人是一条独特的技术脉络，与 [[agentic-ai|智能体式 AI]] 和 [[human-in-the-loop-ai|人在环]]设计交叠。
- **基于知识的系统。** [[knowledge-graph|知识图谱]]与 [[educational-nlp|教育 NLP]]表征并处理领域知识，日益与 LLM 结合，用于有锚定、可解释的辅导。

## 技术与方法

- **提示工程。** [[prompt-engineering|提示工程]]是教育者与开发者塑造 LLM 产出的方式——卸载与控制借以在 LLM 互动中实现的头号机制。
- **检索增强生成（RAG）。** [[rag|RAG]] 把 LLM 产出锚定在检索到的知识上，减少幻觉、提高准确率——是 [[pedagogical-safety|安全]]教育部署的一项核心技术。
- **强化学习。** [[reinforcement-learning|强化学习]]训练智能体随时间优化行为，用于 [[adaptive-learning|自适应系统]]与 [[game-based-learning|游戏化学习]]。
- **智能体编排。** [[agentic-ai|智能体式 AI]]系统规划并执行多步工作流——常编排多个专门化智能体（见 [[agentic-ai|多智能体系统]]）——并正把 AI 从一个响应提示的工具重塑为一个主动的协作者。
- **教育智能体栈落后于前沿。** [[agentic-ai-education-scoping-review|Wang et al.（2026）]]映射了 474 项研究，发现 GPT 系列模型与 LangChain 占主导，而受治理的工具编排、持久记忆与长视野规划基本缺失——且 474 项中只有 138 项（29%）借鉴教育理论。
- **模型训练与适配。** [[llm-training-and-fine-tuning|LLM 训练与微调]]、[[educational-llm-alignment|教育对齐]]与 [[cstutorbench-slm-tutors|小型语言模型适配]]使通用模型教育专用——尽管知识库的证据把 [[rag|检索]]与 [[prompt-engineering|提示]]排在训练之前的决策序列中，因为一个锚定良好的提示比一个适配过的模型更便宜。

## 技术层如何连接本领域

技术这一脉与知识库的其他主题不可分离：

- **教学：**技术选择体现教学假设——一个建立在 [[socratic-method|苏格拉底式提示]]上的 [[intelligent-tutoring|导师]]与学习者一起推理，而一个答案生成模型可能默认直接给答案（见 [[pedagogy|教学法与教学策略]]）。
- **考核与评估：** [[ai-ed-evaluation]] 与 [[benchmark|基准]]决定 AI 系统是否真的有效；[[assessment]] 与 [[automated-assessment]] 使用技术栈来评分与生成。
- **负责任使用：**技术是 [[reducing-ai-misuse|减少 AI 滥用]]的核心——[[rag]] 锚定、护栏、[[prompt-engineering]] [[scaffolding]] 与 [[human-in-the-loop-ai|人的监督]]塑造 AI 是支持还是破坏学习（[[cognitive-offloading]]、[[hallucination-risk]]）。

## 对 AI 教育的含义

- **技术素养支持批判性使用：**理解底层模型与技术，帮助教育者与学习者用好 AI 并批判地评估它（见 [[ai-literacy]]）。
- **按教学意图选择技术：** AI 系统与技术应跟随 [[pedagogy|教学策略]]，而非相反。
- **评估技术层：** [[ai-ed-evaluation]] 与 [[benchmark]] 研究在可靠性、教学法与 [[equity-in-ai-education|公平]]上评估 AI 系统，而非只看头条准确率。
- **机器人与智能体是栈的一部分：** [[educational-robotics|具身]]与 [[agentic-ai|智能体式]]系统把技术 repertoire 延伸到文本之外——并带来它们自己的设计与安全考量。

## 关联概念

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## 关联文章

- [[agentic-ai-education-scoping-review]] — 教育中智能体式 AI 的范围综述
- [[genai-meta-analysis-programming-learning]] — GenAI 对编程中生产力与学习之影响的元分析
- [[cstutorbench-slm-tutors]] — 小型语言模型辅导基准
- [[educational-llm-alignment]] — 为教育对齐 LLM
- [[eduguard-safe-rag-llm-tutor]] — 为基于 RAG 的 LLM 导师加护栏
- [[hazra-safetutors-pedagogical-safety-2026]] — AI 导师安全与伤害
- [[elbench-education-llm-benchmark-2026]] — 教育 LLM 基准
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini 生成式社交机器人
- [[benzion-ai-physics-simulations-virtual-lab]] — 面向课堂的 LLM 生成物理模拟
