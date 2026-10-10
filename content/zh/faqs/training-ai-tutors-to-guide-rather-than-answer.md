---
title: "如何训练 AI 导师引导学生，而不是直接给出答案？"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-09T19:12:41-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
source_updated: "2026-10-02T08:21:34-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

# 如何训练 AI 导师引导学生，而不是直接给出答案？

通用模型在"乐于助人"的人类偏好上做了后训练，而在实践中，乐于助人意味着迅速而完整地回答问题。辅导则要求相反的做法：帮助学生自己抵达答案，而不是把答案交给他。在教育 AI 中，这可能是你真正需要改变模型*习得的行为*、而非其提示的唯一一处，而它同时也是这个领域中证据最充分的部分。效果很大，而决定性的变量是**奖励**，不是算法。

## 为什么单靠提示在这里可能不够

[[prompt-engineering|提示工程]]乃至一般的对齐训练，都会留下一种趋向认同的拉力。[[contextual-sycophancy-ai-literacy|情境性谄媚]]在提示和对齐之后依然存在，学习者的错误仍会渗入 AI 的建议中。EduFrameTrap 表明，能够抵御语境切换攻击的模型，在权威或社会情感压力下仍会妥协，并拒绝给出纠正性反馈——正因如此，其作者主张"善意但正确"的行为应当是一项**明确的训练要求**，而不是一种偏好（[[eduframetrap-llm-sycophancy-educational-safety]]）。

如果你的导师的失败模式是认同一个错误答案，那么提示它不要认同只是缓解，而不是修复。

## 奖励就是整个设计

奖励是你所期望之物的压缩式规格说明，而模型会优化你实际写下的任何东西。这使奖励设计成为整个过程中杠杆最高的决策，而这里最好的结果正是在此处赢得的。

EduQwen 的奖励模型**把引导性回应置于直接答案之上**，用难负例挖掘排除基础模型已经解出的问题，并把 rollout 从 5 步延长到 8 步，以捕捉多步的教学决策。其三阶段流水线——初始 RL、合成 SFT、最终 RL——在 CDPK 基准上达到 **96.52%**，而 Gemini-3 Pro 为 **90.55%**（[[singh-eduqwen-pedagogical-rl-2026]]）。

由此直接得出两点。第一，要预期奖励被"钻空子"：它说明的东西比你想要的少，所以对着基准而不是凭直觉来写它。第二，中间的数字很有启发——仅第一个 RL 阶段就达到 94.13%，在 40,000 条自生成回应上做 SFT 将其带到 96.20%，最终一轮 RL 只补上了最后那一点。大部分增益来自早期。

## 强化学习在教学法上胜过模仿

如果你只做监督微调，你是在教模型模仿你的示范。这对于格式足够，对于判断则不足。LearnLM 的发现很明确：**在长对话中遵循细致的教学指令方面，RL 远比单用 SFT 有效**（[[learnlm-improving-gemini-learning]]）。

其指令条件化框架还让开发者和教师能够指定导师行为，而不必绑定于某一种教学法定义，并通过共同训练混入 Gemini 的后训练阶段。专家相比 GPT-4o（**+31%**）、Claude 3.5 Sonnet（**+11%**）和基础版 Gemini 1.5 Pro（**+13%**）更偏好它。

## 监督过程，而不是答案

这个领域中最具可操作性的单一发现，关乎*训练数据必须包含什么*。指令微调的模型只有在**步骤级解题过程**上训练时，才学会了代数中的错误概念。仅用最终答案训练时，准确率在**每个数据规模下都低于 30%**（[[misconception-acquisition-dynamics-llms-2026]]）。

该研究还有两个细节，对构建导师任一侧的人都重要：

- **学生**角色会把学到的错误过度泛化，直到以低至**四分之一**的比例显式混入正确示例为止。
- **导师**角色则没有这种代价，在十个共同训练的错误概念之间把正确率从 **93%** 保持到 **98%**。

如果你在训练一个导师去做诊断，你的示例需要的是推理，而不只是结论。一个"问题—正确答案"配对的数据集，无法教会模型注意到学生错在哪里。

## 让训练数据承载教学法

如果监督必须包含推理，那么标注方案就是一个课程决策，而不是数据清洗步骤。这里有两个结果直接关系到这一点。

**给每个示例标注你想要的行为。** 一项关于监督标签的研究发现，为每个训练示例指定一个目标行为——学科能力、课程锚定、诊断性推理或脚手架——提升了所测的每个模型规模，其中在脚手架和利用学习者历史上增益最大。知识状态诊断仍是最弱的行为，为 **54.04%**，这是一个值得携带的预期：诊断是这份清单上最难教的东西（[[omniedu-open-educational-foundation-models-2026]]）。

**把数据选择当作它自身的训练问题来对待。** Edu-QuRating 将偏好蒸馏适配于教育数据策展，用**20 个评分维度**取代单一的"这有教育性吗"分数，涵盖事实准确性、教学结构和难度适切性（[[garrod-edu-qurating-educational-data-curation-2026]]）。如果你在用网页文本组装语料库，这类过滤器将决定你的模型学会以什么腔调说话。

## 奖励密度与奖励本身同样重要

当你在意的事物有多个维度时，精确匹配奖励就太稀疏了。SWIM 的写作模拟器清楚地展示了这个演进过程：

- 基于评分量规的提示：最好的平均特质 QWK 为 **0.577**（Claude Sonnet）、**0.422**（GPT-5.4），一个开源的 7B 模型则接近于零
- 监督微调：该 7B 模型为 **0.474 ± 0.023**
- 使用稠密、特质归一化准确率奖励的 GRPO：**0.618 ± 0.005**，跨每个特质和每个提示都成立（[[swim-student-writing-simulation-2026]]）

奖励设计才是要点：一个稠密的特质归一化信号，而非精确匹配，因为在多特质设定中精确匹配太稀疏。如果你的奖励只在完美回应时才触发，那么你的大部分训练信号都是沉默。

## 训练决策，而不只是话语

后训练不必只塑造模型说什么。TACT 在一个 13 策略分类法加双轴学生行动分类法上对导师做后训练，比其 Qwen3.5-4B 骨干提升了 **20.30 分**，并配有一个诊断基准，该基准**扣留了训练时可得的学习者状态标签**，迫使模型从对话中推断状态（[[tact-pedagogically-adaptive-esl-tutoring]]）。

同样的逻辑贯穿[[特殊教育|special education]]对齐（[[special-r1-rl-special-education]]），以及把模型对齐为苏格拉底式引导者而非答题者的启发式 RL 工作（[[wang-socratic-guides-heuristic-reinforcement-learning-2026]]）。还有一个平台走得更远，训练的是*策略*而不是行文：一个强化学习智能体选择下一道练习题，于是学习者接下来做什么由受训模型决定（[[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]）。

## 你需要什么数据？

两种相反的赌注定义了这个空间，你选哪一个取决于你手上已有什么：

- **当你的数据稀缺时，采用指令条件化后训练。** LearnLM 携带系统级指令，让教师和开发者指定导师行为，并依赖共同训练，而不是大量的辅导转录语料。
- **当你有真实的交互数据时，在其上微调。** TeachLM 押注于[[prompt-engineering|prompt engineering]]只是权宜之计，稀缺的成分是真实的学习者—导师交互。在严格匿名化的 **100,000 小时**一对一课程上训练后，它使学生发言时间翻倍，改善提问方式，并将对话轮次增加 **50%**（[[teachlm-post-training-llms-education]]）。

通往教学行为的更便宜路线是蒸馏：Pedagogy-R1（1.5B 和 7B）在从 QwQ-32B 教师蒸馏并经教学法过滤的输出上做了指令微调，并配以 Chain-of-Pedagogy 提示（[[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]）。

## 在对话长度上测试它

训练并不能让模型在长对话中保持安全。SafeTutors 表明，即便是专门的教学模型，也会在持续对话中退化，并可能犯下答案过度泄露的危害（[[hazra-safetutors-pedagogical-safety-2026]]）。[[pedagogical-safety|教学安全]]必须在对话长度上测试，而不是在单个轮次上——包括学生犯错、固执或施压的那些轮次。

## 下一步去哪里

- [[making-ai-better-at-supporting-learning|如何让 AI 在我们自己的学科中更好地支持学习？]] — 训练究竟是不是正确的杠杆
- [[checking-whether-educational-ai-works|我们如何知道一个教育 AI 是正常工作，而不只是分数好看？]] — 测量行为是否真的改变了
- [[developing-ai-tutor|开发一个有效的 AI 导师有哪些最佳实践？]] — 与之对应的交互设计，它通过脚手架和提示阶梯而非训练来塑造同样的引导行为
- [[llm-training-and-fine-tuning]] — 完整的概念页面
