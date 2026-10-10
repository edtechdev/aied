---
title: "我们如何让 AI 更好地支持我们自己学科中的学习？"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-09T19:12:42-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

# 我们如何让 AI 更好地支持我们自己学科中的学习？

*本页是英文页面的机器翻译，尚未经母语者审校。*

一个通用模型会乐于替学生回答问题，而它对你的课程、你的量表、你的学生实际犯的错误一无所知。弥合这一差距通常被框定为一个训练问题。而在本知识库中，它主要是一个**接地与提示**问题，支持这一排序的证据异常直接：一项课程助手研究发现，检索而非模型，才是第一阶决策，而一个没有接地知识的通用模型得分*低于*朴素的 TF-IDF 基线。

训练是真实存在的，有时也是必要的，但它是第三或第四件该尝试的事，而不是第一件。下面这架阶梯，按照避免浪费算力的顺序排列。

## 简版

共有五个杠杆，按成本与投入递增排列：**提示**、对你自有材料的**检索**、**参数高效适配**（[[llm-training-and-fine-tuning|LoRA]] 及类似方法）、**完全微调**，以及带偏好或奖励信号的**后训练**。每一级都比下一级需要更多数据、更多算力和更严格的评估纪律，而除非有测量结果证明需要向上攀爬，否则每一级都是更糟糕的首选。

研究文献报告的主要是这架阶梯的顶端，这就是为什么人们容易伸手去训练，而接地本已足够。

## 第 1 步：取得一个你真正能超越的基线

在改动任何东西之前，先记录一个朴素提示能得到什么。然后记录一个平凡方法能得到什么，因为那个数字才让你保持诚实。

[[shen-sustainable-ai-knowledge-base-cs-education-2026|课程知识库助手]]研究值得为这一点单独一读。一个无检索的本地 LLM 达到 **52.3%** 的准确率。一个 TF-IDF 基线——一种有几十年历史的词法方法——达到 **55.4%**。模型比经典方法更差。

如果跳过这一步，你就无法判断你的微调是否有帮助，并且可能上线一个连关键词搜索都能打败的东西。

## 第 2 步：把模型接入你自己的材料

在课程材料上加入[[rag|检索增强生成]]，完全不做微调，就把同一个系统从 52.3% 提升到 **66.6%**。就成本而言，这是本知识库报告的最大单项收益，而且它是可逆的：当文档变化时，你重建索引而不是重新训练。

另外两个结果指向同一方向。一项针对定制 [[writing-education|写作教学]] AI 的 PRISMA 综述覆盖 23 项实证研究，发现**提示工程占主导（N = 13），领先于微调（N = 7）**（[[customizing-ai-writing-pedagogy-systematic-review-2026]]）。而在知识库必须保持最新的场合，检索是唯一无需重跑训练作业就能保持最新的杠杆。

检索也有它的教学法形式。把模型接入你自己的例题和量表，是它留在你设计的[[scaffolding|支架]]之内、而不是漂移到泛泛建议的方式。

## 第 3 步：针对量表工程化提示

提示工作不是你在等待训练期间做的前奏。这里有两个结果展示了它自身能达成什么：

- **迭代共同精炼的量表引导提示，把学生设计作业上的 LLM—人类一致性从 54.75% 提高到 81.25%**（Cronbach's Alpha 0.393 → 0.798），完全没有微调（[[yasar-llms-iterative-pedagogical-design-2026]]）。
- 一个基于文献的定制提示，在 **0.98** 的存在率上引出目标数学[[misconceptions]]，而宽泛提示只有 **0.40**（[[zhuang-zhang-chatgpt-math-teacher-education-2026]]）。

实践中的信号是**平台期**。在题目生成研究中，迭代式提示精炼停止带来改善，随后在优化后的提示上微调 GPT-4.1 补上了剩余的收益（[[gpt-item-generation-l2-listening-2026]]）。真正做过提示工作之后出现的平台期，是你判断训练可能有所补充的证据。在撞上平台期之前就伸手训练，是猜测。

## 第 4 步：当目标稳定且具体时，适配模型

当你需要模型可靠地保持某种属性时——一个阅读水平、一种输出格式、一个它缺失的领域——适配才有回报。反复出现的结果是：**瞄准胜过规模**。

- 三个 **8B** 模型在专家设计的儿童阅读课程上微调，在难度相关指标上超越了零样本的 GPT-4o 和 Llama 3.3 70B，安全问题可忽略。作者将此表述为**可控性胜过规模**（[[llm-children-reading-story-generation]]）。
- 一个基于印度知识体系、含 **24,795 条示例**的指令数据集，产出一个在五人外部评委小组上得 **6.39** 分的 **7B** 微调模型，与一个强大的通用参考模型相差在 **0.15** 之内，部署成本却只是零头——而同一个基础模型未经微调时，在领域特定维度上得分**接近零**（[[iks-instruct-dataset-indian-knowledge]]）。"大体胜任"与"在此胜任"之间的这道鸿沟，就是领域适配的全部理由。
- 单个 [[llm-training-and-fine-tuning|LoRA]] 适配器在约 **3,900** 条汇集的人工评分示例上训练，把五个小型开放模型（4B–30B）提升到在两场计算机考试中与人类评分者持平或更优（[[llm-graders-computer-science-exams-2026]]）。一个适配器、一个数据集、数个基础模型：这才是小团队真正能运行的部署形态。

注意标题里*稳定*这个词。格式、量表、阅读水平与领域词汇是稳定目标。充满判断的散文则不是，而适配正是在那里失败的。

## 第 5 步：改变它的行为方式，而不只是产出内容

适配教模型*产出什么*。后训练教它*如何行动*，而对辅导而言这一区分正是全部问题所在：通用模型被按"有帮助"的人类偏好做后训练，那意味着及时作答，而教学需要保留答案。

最强的教育结果就住在这里。EduQwen 的奖励模型明确优先**引导式回答而非直接答案**，其三阶段流水线在 CDPK 基准上达到 **96.52%**，对照 Gemini-3 Pro 的 **90.55%**（[[singh-eduqwen-pedagogical-rl-2026]]）。SWIM 的写作模拟器在全部特质与提示上，从量表接地的提示（最佳 QWK **0.577**）到监督微调（**0.474 ± 0.023**）再到强化学习（**0.618 ± 0.005**）（[[swim-student-writing-simulation-2026]]）。

这一领域有一项发现容易错过却忽视不起：**监督质量胜过监督数量**。指令微调模型只有在**步骤级解题轨迹**上训练时，才学会代数迷误概念；仅用最终答案训练时，准确率在每一个数据量上都**低于 30%**（[[misconception-acquisition-dynamics-llms-2026]]）。如果你的训练示例是"问题—正确答案"对，你训练的就是错的东西。

## 当适配模型不起作用时

这是热情通常会跳过的那部分。

- **充满判断的文本。** 在 WrAFT 中，同一个项目为*评分*作文微调成功（QWK 0.84），为*反馈*微调却产出被截断且无法解析的输出，而直接提示 Claude 3.7 产出了教师评价最好的反馈（[[wraft-automated-writing-evaluation-argumentative-2026]]）。微调教会了模型命中分数，却没有教会它写作。
- **规模不是 LoRA 适配下下游表现的可靠预测因子**，而**完全相同的超参数在不同架构上产生了性质不同的行为**（[[aiawe-automated-writing-evaluation]]）。在一个模型上奏效的配方不是配方。
- **架构可能比参数量更重要。** 在 1,000 张带字幕的核工程图像上微调三个开放文生图模型，显著改善了 Stable Diffusion XL，对 SD-v3.5-Medium 收益有限，对 Flux.1 则**完全没有可测量的改善**（[[nuclear-diffusion-text-to-image-learning-2026]]）。
- **有时答案是验证而不是训练。** 一个未经训练的前沿 GPT-4 在撰写辅导反馈时产生约 **35%** 过于笼统、不正确或泄露答案的提示，而其自身的自动质量检查与人类判断不一致（[[reddig-maclellan-personalized-feedback-llm-2026]]）。

## 实践中需要什么

就适配这一级而言，门槛比多数团队以为的更低：**几百到几千个示例和一块 GPU**。LoRA 训练少量新增参数并冻结基础权重，因此多个模型可以共享一个适配器提供服务。

Rank 是一个权衡，而不是一个该最大化的旋钮：每百万适配器参数的收益随 rank 上升而单调下降，课程级对齐是一个关于规模与 rank 的决策，而不是免费的升级（[[lora-finetuned-control-systems-course-qa-2026]]）。你适配哪些层也是一个真实的选择——只更新基于 BERT 的语篇分析器的**最后四个 Transformer 层**，同时击败了只调顶层与全深度微调两种方案（[[bert-discourse-english-teaching-2026]]）。

容易被低估的成本是评估，而不是算力。参见 [[checking-whether-educational-ai-works|如何判断一个教育 AI 是否真的有效，而不只是分数好看？]]

## 校准你的预期

模型与提示的选择合起来只占 LLM 与学生学习收益之间错位的约 **15%**，而在该研究中，基准加权与全票通过式的集成让对齐*更差*（[[educational-llm-alignment]]）。预训练数据是模型行为的主导杠杆，也是你无法拉动的那个杠杆。

这不是反对上述工作的论据，而是反对期待微调修好一个设计问题的论据。如果你的辅导器作答过于轻易，训练或许能解决。如果你的学习者不与它互动，训练不能。

## 简短的决策顺序

**1.** 记录一个纯提示基线，包括一个平凡基线。

**2.** 在你自己的材料上加入检索。

**3.** 针对你的量表迭代地工程化提示，并留意平台期。

**4.** 当目标是稳定的格式、量表、水平或领域时，用 LoRA 适配模型。

**5.** 只有当你需要改变它*如何*行动时才做后训练，并把奖励对着基准来写，因为它会被钻空子。

**6.** 在步骤级监督，而不是答案级。

**7.** 在置信度低的地方把人留在回路中。

**8.** 在整段对话上测试安全性，而不是单个轮次。

## 相关问题

- [[training-ai-tutors-to-guide-rather-than-answer|我们如何训练 AI 辅导器引导学生，而不是直接回答他们？]] — 后训练那一半的详细展开
- [[checking-whether-educational-ai-works|如何判断一个教育 AI 是否真的有效，而不只是分数好看？]] — 如何判断上述任何一步是否奏效
- [[developing-ai-tutor|开发一个有效的 AI 辅导器有哪些最佳实践？]] — 同一目标的交互设计一面
- [[designing-educational-ai-software|设计有效的教育 AI 软件有哪些最佳实践与建议？]]
- [[llm-training-and-fine-tuning]] — 完整的概念页面
