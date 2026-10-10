---
title: LLM 训练与微调
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **LLM 训练与微调** — 教育 AI 模型是如何造出来的：从预训练到后训练再到适配的流水线，每个阶段花费几何，证据说它买到了什么。组织性的核心问题是一个**激励错配**：通用模型被优化为作答，而教学要求的是不给答案。后训练与微调是改变这一行为的两个杠杆，而知识库最清晰的结果是：它们是*第三*选择，而非第一选择——检索与提示在决策序列中更靠前，而且这里有一项研究发现，监督微调在一项纯提示就取胜的任务上失败了（[[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]）。本页面向正在决定构建什么的教育软件开发人员与教学从业者。

## 值得思考的问题

- 如果你有一个辅导任务，通用模型回答得太轻易，你的第一步是更好的提示、对自有材料的检索，还是训练？你需要测量什么才能分辨是哪一项起了作用？
- 微调需要数据。你的项目的训练样例从何而来？谁拥有它们？在使用之前它们需要什么隐私审查？
- 这里的一项研究发现，用评估数据微调模型改善了*格式与相似性*，而另一次微调在生成反馈上彻底失败。这对把训练方法与任务相匹配意味着什么？
- 用强化学习做后训练，可以教会模型引导而非作答。你会写出什么样的奖励来刻画"引导得好"，模型又会如何钻它的空子？
- 知识库报告，模型与提示的选择只占 LLM 与学生学习增益之间差距的约 15%。如果确实如此，它该如何改变你的自建与采购决策？
- 一个微调过的模型即便准确，在长对话中仍可能不安全。在让一个模型无人监督地与学生交谈之前，你会测试什么？

## 引言

教育 AI 开发从两个方向撞上同一堵墙。通用语言模型针对人类对"有用"的偏好做了后训练，实践中这意味着迅速而完整地作答；辅导恰恰相反，因为教学目标是把学生送到答案面前，而不是把答案递过去。与此同时，一个通用模型对你的课程、你的量规、你机构的口吻一无所知，而无论多少提示工程都无法可靠地把它们装进去。

本页涵盖的是改变模型而非改变你发给它的文字的那些技术。它们处在一条**承诺递增的阶梯**上：提示，然后是检索，然后是参数高效适配，然后是全量微调，再是用偏好或奖励信号做后训练。每一级都比上一级耗费更多数据、更多算力与更多评估纪律；除有具体测量证明该爬这一级之外，每一级都是比下一级更糟的首选。研究文献大多只报告这条阶梯的顶端，这使开发者很容易伸手去够训练，而检索本已足够。

本页围绕构建者实际面对的决定来组织：该拉哪根杠杆（本节与下一节），适配在实践中买到什么、代价几何，后训练能塑造哪些适配无法塑造的东西，以及这些系统如何失效。术语取其标准含义：**预训练**是在通用语料上的从零阶段，**后训练**是它之后塑造行为的一切（监督微调、偏好优化、强化学习），而**微调**涵盖后训练的监督阶段以及后续的任务或领域适配工作，包括参数高效方法。

## 训练流水线，逐阶段

三个阶段，可及性大不相同。知道一篇论文描述的是哪一个阶段，能避免这篇文献中的大多数误读。

**预训练**从通用文本语料构建基座模型。它是产出模型广义能力的那一阶段，且对基本上每一个教育项目都遥不可及：成本以百万美元计，数据是网络规模抓取。本知识库中没有任何东西做它。它对从业者的相关性是诊断性的而非可操作的——预训练数据是模型行为的主导杠杆，而它是你唯一拉不动的杠杆。正是这种不对称性，使该领域其余的技术全部作用于一个已训练好的模型。

**后训练**在基座模型之上塑造行为。监督微调（SFT）教模型模仿示范；偏好优化与强化学习随后把它推向奖励模型或一组人类判断评分更高的输出。这是模型可以被教会"引导而非作答"的阶段，也是最惊人的教育结果所在之处。它也是对奖励设计最敏感的阶段，因为奖励是你想要之物的压缩规格，而模型会优化你实际写下来的任何东西。

**适配**把一个已有模型套到你的任务或领域上，通常所需数据与算力远少。参数高效微调（PEFT，LoRA 为其常见形式）训练少量新增参数、冻结基座权重。全量微调则更新一切。蒸馏与遗忘与它们并列。下文各节依次展开。对大多数教育开发者而言，这才是实际的阶段——几百到几千个样例和一张 GPU 就能产出一个可部署模型的地方。

## 提示、检索，还是训练？排在最前面的决定

关于该问题，本知识库中最强的单一结果是一项检索研究，而非训练研究。Shen 等（2026）在构建一个课程知识库助手时，以三种配置评估了本地模型，发现**检索而非模型才是第一序的设计决定**：他们的本地 LLM 不加检索只达到 **52.3%** 准确率，*低于* TF-IDF 基线的 **55.4%**，而加上 [[rag|检索增强生成]]、完全不做微调，把它提升到 **66.6%**（[[shen-sustainable-ai-knowledge-base-cs-education-2026]]）。他们一并测试的微调配置与检索消融、量化以及每次查询能耗并列报告，使这一比较异常诚实：一个没有落地的基座模型可能比一个几十年前的词法方法更糟，而最便宜的修复不是训练。

该领域实际构建的东西反映了相似的次序。一项对 23 项实证研究（2020–2025）的 PRISMA 引导综述，考察为 [[writing-education|写作教学]]定制 AI，发现**提示工程占主导（N = 13），超过微调（N = 7）与混合架构（N = 3）**（[[customizing-ai-writing-pedagogy-systematic-review-2026]]）。该综述更锐利的发现是一种结构性错配，而非技术排名：所申明的教学目标已转向写作过程、[[feedback-literacy|反馈素养]]与高阶学术技能，而占主导的实现仍通过提示设计或微调追求以产品为导向的目标。

在提示与训练被正面比较之处，结果取决于任务，而这恰恰说明这一决定应被测量而非假定：

- **当目标是稳定的输出格式或受控的属性时，训练取胜。** 在面向 L2 听力评估的自动题目生成上，迭代式提示精炼触顶，随后在*优化后的提示*之上微调 GPT-4.1，把生成提升到超出单纯提示之上——从而把剩余增益的驱动因素孤立为模型适配，而非提示设计（[[gpt-item-generation-l2-listening-2026]]）。
- **当目标是需要判断的文本时，提示取胜。** 同一个为*评分*成功微调的系统在*反馈*上失败：在 WrAFT 中，一个微调过的 GPT-4o 模块在 360 篇留出 TOEFL 作文上达到 QWK 0.84、RMSE 0.44，但用于反馈生成的监督微调产出被截断且无法解析的输出，而直接提示 Claude 3.7 产出了教师评分最高的反馈（[[wraft-automated-writing-evaluation-argumentative-2026]]）。微调教会了模型去命中分数；它没有教会它去写。
- **当目标是人格或量规时，提示级的塑造可以替代训练。** 量规引导的提示，经迭代式共同精炼，把 LLM 与人在学生设计作品上的一致性从 **54.75%** 提高到 **81.25%**（Cronbach's Alpha 0.393 → 0.798），且完全没有微调（[[yasar-llms-iterative-pedagogical-design-2026]]）；一个扎根于文献的自定义 GPT 提示，把目标数学误解的引出率带到 **0.98**，而宽泛提示为 **0.40**（[[zhuang-zhang-chatgpt-math-teacher-education-2026]]）。
- **所有这些之上都有一个天花板。** Hardy 与 Kim（2026）估计，模型与提示的选择合起来只占 LLM 与学生学习增益之间错配的约 **15%**，其余分摊在模型之间；他们还发现基准加权与全体一致投票的集成使对齐*更糟*（[[educational-llm-alignment]]）。如果预训练数据是主导杠杆，而它是你拉不动的那一根，那么对这些技术能达成什么的期望就应据此校准。

## 微调买到什么：可控制性胜过规模

当一个通用模型无法被要求守住你需要的某个属性时，在一个不大的数据集上微调往往可以——而反复出现的结果是*针对性胜过规模*。三个在专家设计的儿童阅读课程上微调的 8B 模型，在难度相关指标上胜过零样本的 GPT-4o 与 Llama 3.3 70B，安全问题可忽略。作者把这框定为**可控制性胜过规模**，因为一个紧凑模型可以被调到一个通用模型无法被要求的特定阅读水平与错误模式（[[llm-children-reading-story-generation]]）。

这一模式在截然不同的任务上重复出现：

- **课程落地。** 一个扎根于印度知识体系、含 24,795 个样例的多语言指令数据集，产出的 7B 微调模型在五人外部评审组上得 **6.39**（在 1,201 个分层题目上的中位数）。这在一个通用参考模型的 **0.15** 之内，而部署成本只是其零头——而同一基座模型不经微调，在 IKS 特定维度上**接近零分**（[[iks-instruct-dataset-indian-knowledge]]）。"通才上称职"与"在此处称职"之间的这道鸿沟，正是领域适配的全部理由。还要注意作者报告的一个反直觉细节：质量并*不*随数据整理单调上升。
- **便宜的评估可靠性。** 一个在约 **3,900** 个汇总评分样例上训练的单一 LoRA 适配器，把五个小型开源模型（4B–30B）带到与人类评分员相当或更好，横跨两场计算机考试，并几乎抹平了人格敏感性（漂移 ≤ 0.32 MAE）（[[llm-graders-computer-science-exams-2026]]）。一个适配器、一个数据集、若干个基座模型——这是实用部署的形态。
- **选择性自动化。** 置信度是评分误差的可靠预测因子（β = −0.602，p < .001）。把最不可靠的 **20%** 回答路由给人工审阅，把一个微调过的 GPT-3.5 模型从 r = 0.781 提到 **r = 0.822**（RMSE 0.5990 → 0.5544），同时把人工评分工作量削减约 **80%**（[[know-when-to-trust-ai-scoring-reliability-2026]]）。这里的微调不是在取代人，而是让人的注意力变得可负担。
- **测量你否则要人工打分的构念。** 微调过的匈牙利语 transformer（hubert-base-cc、PULI-BERT-Large）与 TF-IDF 特征和 Qwen3 嵌入作了基准比较，用于给 [[teacher-education|教师培训]]中的反思性写作评分（[[reflection-level-classification-hungarian-essays-2026]]）；一个微调过的多模态模型（基于 Qwen3.5）被证明可以为选择题重建题目特征曲线，学习编码在 3PL 与 MCM 曲线中的回答模式，而非被告知它们（[[multimodal-item-parameter-estimation-2026]]）。

## 实践中的参数高效适配

LoRA 及其同类是大多数教育团队实际工作的地方，而文献中包含关于它们行为方式异常具体的指引。

**秩是一种权衡，而非一个要拉满的旋钮。** Lu 等（2026）从一个线性控制系统课程构建了 360 段系统—用户—助手对话，把回答重构为"解—法—教学要点"格式，并对 Qwen2.5-3B 与 7B 在秩 4、8、16 上应用 LoRA。结构化输出覆盖率从基座的近零升到约 **1.00**，最佳配置（7B，r = 16）达到 ROUGE-L **0.4093**，且增益的 bootstrap 置信区间完全高于零。但**秩上升时每百万适配器参数的增益单调下降**，因此课程级对齐是一个规模与秩的权衡，而非免费升级（[[lora-finetuned-control-systems-course-qa-2026]]）。他们的指标度量的是相似性与格式，而非推导正确性，这是这一整族评估的标准告诫。

**规模并不预测成功，且相同设置在不同架构上行为不同。** AiAWE，一个建立在 LoRA 适配的 Gemma-3-27B-it 之上的开源自动写作评估系统，达到 RMSE 0.474、QWK 0.828，且在 **90.56%** 的 360 篇评估作文上与人类分数差距在 ±0.5 以内，胜过 LLaMA-3.3-70B 与一个微调过的 GPT-3.5 基线——却跑在一台消费级服务器上。三条更广泛的发现比分数更重要：模型规模**并非** LoRA 适配下下游性能的可靠预测因子；**相同的 LoRA 超参数在不同架构上产生了性质不同的适配行为**；一个调好的中型开源模型可以与专有系统竞争（[[aiawe-automated-writing-evaluation]]）。

**适配哪些层是一个真实决定。** 在一个面向英语教学的话语分析系统中，微调一个截断的 BERT、只更新**最后四个 Transformer 层**，胜过两种替代方案：只调顶层撞上更低的天花板，而全 12 层微调过拟合并震荡（[[bert-discourse-english-teaching-2026]]）。

**基座架构可能比参数量更重要。** 在 1,000 张带标注的核工程图像上微调三个开源文生图模型，大幅改善了 Stable Diffusion XL，对 SD-v3.5-Medium 增益有限，而对流匹配的 Flux.1 模型则**完全没有可测的改善**（[[nuclear-diffusion-text-to-image-learning-2026]]）。微调配方不能跨架构移植，这是 AiAWE 从另一方向报告的同一教训。

两个相邻的技术补全了适配阶段。**蒸馏**把一个大型或黑箱系统压缩成一个可部署的小型系统。一条两级流水线把一个拟合好的黑箱机器学习估计器及其事后解释蒸馏进一个小的开源权重 LLM，一个 2B 参数的"学生"近乎无损地恢复了预言机的效应曲面（r > .90）。该结果在一种"忠实优先"的评估下报告，它审计每一段叙述对照它声称所描述的归因（[[distilling-self-explaining-lm-learning-analytics-2026]]）。**遗忘**在训练之后移除目标内容：基于梯度的遗忘被应用于三个模型以剥离 PII 与有害内容，按两种移除顺序（先 PII、先有害内容）测试（[[llm-unlearning-math-privacy]]）——这是当一个模型记住了它不该携带的东西时的相关工具。

## 后训练：塑造行为，而非只是格式

适配教模型*产出什么*；后训练教它*如何表现*。这是教学结果最惊人之处，也是奖励或偏好信号的设计决定一切的地方。

**流水线结果。** Singh 等（2026）通过三个阶段把 Qwen3-32B 变成 EduQwen——初始 RL、合成 SFT、最终 RL——在 CDPK 基准上达到 **96.52%**，超越 Gemini-3 Pro 的 **90.55%**。中间结果才是最有教益的部分：单第一阶段 RL 就达到 94.13%，在 40,000 条自生成回答上做 SFT 把它提到 96.20%，最终一轮 RL 补上了最后一点。奖励模型把**引导性回答置于直接答案之上**，难负样本挖掘排除基座模型已能解决的问题，并把 rollout 从 5 步延长到 8 步以捕捉多步的教学决策（[[singh-eduqwen-pedagogical-rl-2026]]）。与此相对，教学法基准——取自横跨 **97 个模型**的真实教师专业发展考试——发现准确率从 **28%** 到 **89%** 不等，说明教学知识并非在一般预训练中顺带获得（[[cdpk-pedagogy-benchmark-llms|Lelièvre 等，2025]]）。

**训练决策而非话语。** TACT 在一个 13 策略分类法加一个双轴学生动作分类法上对一个辅导模型做后训练，比其 Qwen3.5-4B 骨干高出 **20.30 个百分点**，并配有一个诊断基准，它扣留训练时可得的学习者状态标签，使模型必须从对话中推断状态（[[tact-pedagogically-adaptive-esl-tutoring]]）。同一逻辑出现在 Special-R1 对 [[special-education|特殊教育]]的对齐上（[[special-r1-rl-special-education]]），也出现在把模型对齐为苏格拉底式引导者而非作答者的启发式 RL 工作中（[[wang-socratic-guides-heuristic-reinforcement-learning-2026]]）。后训练不必只塑造模型说什么：一个平台把一个带护栏的辅导聊天机器人与一个选择下一道练习题的强化学习代理配对，使训练出的策略决定学习者下一步做什么（[[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]）。

**蒸馏的推理模型。** 通往教学行为的一条更便宜路线是教小模型模仿大模型：Pedagogy-R1（1.5B 与 7B）在从 QwQ-32B 教师蒸馏并经教学法过滤的输出上做指令微调，并配以 Chain-of-Pedagogy 提示（[[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]）。

**指令条件的后训练 vs. 真实数据。** LearnLM 把教育模型训练框定为*教学指令遵循*，携带系统级指令，使开发者与教师无需绑定某一种教学法定义即可指定导师行为。它通过共同训练被混入 Gemini 的后训练阶段，专家相比 GPT-4o（**+31%**）、Claude 3.5 Sonnet（**+11%**）与基座 Gemini 1.5 Pro（**+13%**）更偏好它。关键发现是：对在长对话中遵循细微的教学指令而言，**RL 明显比单独的 SFT 更有效**（[[learnlm-improving-gemini-learning]]）。TeachLM 下了相反的赌注：[[prompt-engineering|提示工程]]只是权宜之计，稀缺的原料是*真实*的学习者—导师互动数据。在严格匿名化的 **100,000 小时**一对一课程上训练，它把学生说话时间翻倍、改善提问风格，并把对话轮次提高 **50%**（[[teachlm-post-training-llms-education]]）。二者共同界定了设计空间：当你的数据稀缺时做指令条件的后训练，当你拥有它时对真实辅导互动做微调。

**监督质量胜过监督数量。** SWIM 为写作模拟器设计的过程是最清晰的演示。量规落地的提示对熟练度的控制有限（Claude Sonnet 的最佳平均特质 QWK 为 0.577，GPT-5.4 为 0.422，一个开源 7B 模型接近零）；监督微调把那个 7B 模型提到 **0.474 ± 0.023**。针对一个由自动作文评分导出的奖励做 GRPO，又把它在每一种特质与每一个提示上提到 **0.618 ± 0.005**，其奖励被设计成稠密的特质归一化准确率，因为精确匹配奖励在多特质环境中太稀疏（[[swim-student-writing-simulation-2026]]）。误解建模研究对监督*必须包含什么*给出了更锐利的结论：指令微调的模型只有在**步骤级解题轨迹**上训练时才学会代数误解，而只按最终答案训练时，准确率在每一个数据规模上都**低于 30%**。其学生角色过度泛化学到的错误，直到把正确样例按低至**四分之一**的比例显式混入；而导师角色没有这种代价，在十个联合训练的误解上把正确率从 **93%** 保持到 **98%**（[[misconception-acquisition-dynamics-llms-2026]]）。

训练数据本身也是模型可以整理的东西：Edu-QuRating 把偏好蒸馏适配到教育数据整理，用覆盖事实准确性、教学结构与水平适切性的 20 个量规维度，取代单一的"这算教育吗"评分（[[garrod-edu-qurating-educational-data-curation-2026]]）。

**理论可以成为训练的脚手架。** 对自动化 [[learning-design|教学系统设计]]的代理而言，把经典 ADDIE 与 Dick & Carey 框架同 ReAct 式推理混合，胜过纯理论（结构化但不灵活）与纯技术代理（灵活但无落地），横跨 **25,795** 个来自 51 变量情境矩阵的场景，并使用多评审协议以减少 LLM 作为评审的偏差（[[jeon-isd-agent-bench-2026]]）。而一项对监督*标签*的研究发现，给每个训练样例只指定一个目标行为——学科能力、课程落地、诊断推理，或支架——提升了受测的每一个模型规模，其中支架与利用学习者历史上的增益最大，而知识状态诊断仍最弱，为 **54.04%**（[[omniedu-open-educational-foundation-models-2026]]）。

## 训练学习者一侧，而不只是导师

同样的机器日益被指向模拟学生，这改变了评估一个导师的经济学：不再招募学习者，而是生成他们。

告诫是，模拟学生必须像其他任何工具一样被验证。在**382 段留出对话**上对微调与提示模型做基准测试——取自最大的真实学生—导师数学对话公开语料，横跨语言、行为与认知七个指标——产出了该领域对"模拟学生是否表现得像学生"最直接的检验（[[simulated-students-tutoring-dialogues-2026]]）。另两种进路在保真度上加压：INSIDE 微调 LLM 使之既*行动*又*思考*得像学生，生成扎根于 Bloom 分类法的内部对话，横跨认知、情感与动作维度，并在成对的思考轨迹与动作上训练（[[inside-llm-student-simulator-reasoning-2026]]）；而历史感知画像把模拟条件设在一个学生先前的轨迹上，而非静态人格（[[history-aware-student-simulation]]）。对开发者而言，实用的教训是：模拟器是一台测量仪器，并承袭这所暗示的每一个效度问题。

## 会出什么错

**谄媚是一个训练目标，而非可用性设置。** 辅导需要纠正性的摩擦，而模型抗拒它。EduFrameTrap 显示，能抵御上下文切换攻击的模型，仍会在权威或社会情感压力下屈服并扣留纠正性反馈，这正是其作者论证"友善但正确"的行为应是一项显式训练要求而非偏好的原因（[[eduframetrap-llm-sycophancy-educational-safety]]）。奖励引导胜于作答的训练——正如 EduQwen 的 DAPO 奖励模型所做——是对抗它的一个结构性杠杆，但 [[contextual-sycophancy-ai-literacy|情境化谄媚]]在提示与对齐之后依然存在，学习者的错误仍会传播进 AI 的建议（[[contextual-sycophancy-ai-literacy]]）。

**训练并不能让模型在长对话中保持安全。** SafeTutors 显示，即便是专门的教学模型也会在持续的对话中退化，并可能犯下答案过度披露的伤害（[[hazra-safetutors-pedagogical-safety-2026]]），因此 [[pedagogical-safety|教学安全]]必须在对话长度上测试，而非在单个轮次上。

**验证可以替代训练——或反而是必需。** 一个未训练的前沿 GPT-4 在为智能导师系统撰写反馈时，产出了约 **35%** 过于笼统、不正确或泄露答案的提示，且它自己的自动质量检查与人类判断错位；作者得出结论：LLM 缺少一个教学的内部模型，在无人监督地面向学习者使用之前需要稳健的验证或领域特定的训练（[[reddig-maclellan-personalized-feedback-llm-2026]]）。实际的启示是双向的：有时正确的答案是一层验证而非一次训练，而有时是验证告诉你一次训练失败了。

**你的评估可能在测量错误的东西。** 这是这里微调文献中最常见的陷阱。ROUGE-L 与 QWK 度量的是相似性与排序，而非推导正确性（[[lora-finetuned-control-systems-course-qa-2026]]）；一次微调可以达到出色的 QWK，而同一系统的反馈无法解析（[[wraft-automated-writing-evaluation-argumentative-2026]]）；一个模型可以正确排列学生，却在每个学生多可能需要帮助上出错。当目标是构念时，微调应与一个测量该构念的工具配对——置信度路由的结果是个好模板，因为它把一个准确率数字变成一个有人在内的操作策略（[[know-when-to-trust-ai-scoring-reliability-2026]]）。

## 面向教育开发者的实用序列

从上述证据提炼而出，按不浪费算力的顺序：

1. **建立一个你能打败的基线，包括一个平庸的。** 课程助手研究中不加检索的模型得分低于 TF-IDF。在你考虑训练之前，先记录你的纯提示准确率。
2. **先加检索，再动参数。** 把模型扎根在你自己的材料中，是这里报告的最便宜的大幅增益（52.3% → 66.6%），而且它是可逆的。
3. **工程化提示，并迭代式地重新工程化它。** 量规引导的精炼在完全没有训练的情况下把一致性从 54.75% 移到 81.25%，而题目生成只在提示精炼触顶之后才改善——那个触顶就是训练可能添点东西的信号。
4. **当目标是稳定格式、受控属性，或基座模型缺失的领域时，做微调。** 在几千个样例上做 LoRA 可以把小型开源模型带到人类评分员水平，而一个指令数据集可以把一个 7B 模型在领域特定维度上从接近零带到离大得多的参考模型的 0.15 以内。
5. **审慎地选择秩与层，并预期架构特定的行为。** 秩上升时每适配器参数的增益下降，四层适配胜过更浅与全深度微调，而一个模型族大幅改善而另一个完全没动。
6. **当你需要改变模型*如何*教学时，用后训练。** 奖励引导胜于作答，并预期奖励会被钻空子——对着一个基准写它，而非凭直觉。
7. **在步骤级上监督。** 只按最终答案训练，在每一个数据规模上都产出低于 30% 的误解准确率。
8. **在置信度低处保持人在环中。** 把最不可靠的五分之一回答路由出去，移除了约 80% 的人工工作，同时改善了一致性。
9. **在整段对话上测试安全。** 长对话是专门模型退化的地方。
10. **校准期望。** 模型与提示的选择只占与学习增益错配的约 15%；你想从训练得到的一些东西，训练给不了。

## 开放问题

1. 教学式后训练能否跨学科泛化，还是总需要学科特定的调优？
2. RL–SFT–RL 流水线能否与纵向记忆结合，以实现跨学期的个性化？
3. 仍能教会步骤级教学推理的最小监督集是什么？它能否在不共享学生数据的前提下跨机构共享？
4. 鉴于相似性指标可以很出色而模型却不可用，微调教育模型的评估应如何标准化？

## 与相关概念的关联

本页是 [[llm]]（涵盖大语言模型是什么、如何行为）的*模型如何造出来*伴侣。它位于 [[ai-technologies]] 之下，是训练与适配节点，与 [[rag]]（通常排在最前的检索替代方案）、[[prompt-engineering]]（最便宜的杠杆）和 [[reinforcement-learning]]（后训练的 RL 半边）并列。它的产出喂给 [[intelligent-tutoring]] 与 [[adaptive-learning]]；它最常见的教育应用是 [[automated-assessment]]、[[automated-essay-scoring]] 与 [[ai-feedback-quality]]；与它概念上最近的是 [[educational-nlp]]、[[simulating-students]]、[[open-source]] 与 [[student-modeling]]。它带来的风险由 [[pedagogical-safety]]、[[ai-sycophancy]]、[[hallucination-risk]] 与 [[privacy]] 承担。

## 关联概念

- [[llm]] — 这些模型是什么；本页是它们如何被造出来
- [[ai-technologies]] — 总括概念：AI 技术与技术方法
- [[rag]] — 检索，训练之前的那一步
- [[prompt-engineering]] — 最便宜的杠杆，也是要打败的基线
- [[reinforcement-learning]] — 后训练的 RL 阶段
- [[intelligent-tutoring]] — 主要应用领域
- [[adaptive-learning]] — 适配学习者，与适配模型有别
- [[automated-assessment]] — 微调评分模型落地之处
- [[automated-essay-scoring]] — 大部分评分证据来自的任务
- [[ai-feedback-quality]] — 微调能修与不能修的
- [[educational-nlp]] — 相邻的方法族
- [[simulating-students]] — 同一机器的学习者侧应用
- [[student-modeling]] — 模拟之下的建模层
- [[open-source]] — 开放权重使本地微调成为可能
- [[benchmark]] — 这些系统如何被评估，以及其局限
- [[assessment-validity]] — 为何好指标仍可能是坏工具
- [[pedagogical-safety]] — 训练不能保证的东西
- [[ai-sycophancy]] — 后训练可以针对的一种行为
- [[hallucination-risk]] — 微调治不了的失效模式
- [[privacy]] — 对训练数据与遗忘的约束
- [[human-in-the-loop-ai]] — 使自动化可负担的兜底
- [[metacognition]] — 后训练的一个教学目标
- [[scaffolding]] — 奖励函数试图编码的行为
- [[ai-education]] — 这项工作所服务的领域

## 关联文章

- [[singh-eduqwen-pedagogical-rl-2026]] — RL–SFT–RL 流水线：CDPK 上 96.52%，超越 Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — Gemini 后训练内部的教学指令遵循
- [[teachlm-post-training-llms-education]] — 在 100,000 小时真实辅导数据上做后训练
- [[tact-pedagogically-adaptive-esl-tutoring]] — 分类法对齐的后训练，瞄准教学决策
- [[swim-student-writing-simulation-2026]] — 相对量规提示的 SFT 与 GRPO，含奖励设计细节
- [[misconception-acquisition-dynamics-llms-2026]] — 步骤级轨迹是误解训练的硬性要求
- [[jeon-isd-agent-bench-2026]] — 横跨 25,795 个场景的理论落地教学设计代理
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — 把模型对齐为苏格拉底式引导者的启发式 RL
- [[special-r1-rl-special-education]] — 面向特殊教育对齐的强化学习
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — 用于个性化的 LLM 引导强化学习
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — 一个教学式大推理模型
- [[omniedu-open-educational-foundation-models-2026]] — 每个样例一个目标行为，横跨模型规模
- [[garrod-edu-qurating-educational-data-curation-2026]] — 为训练整理教育数据
- [[lora-finetuned-control-systems-course-qa-2026]] — LoRA 秩效应与每适配器参数增益
- [[aiawe-automated-writing-evaluation]] — 规模未能预测成功的 LoRA 适配 AWE
- [[llm-graders-computer-science-exams-2026]] — 在约 3,900 个样例上的一个适配器达到人类评分员水平
- [[iks-instruct-dataset-indian-knowledge]] — 一个含 24,795 个样例的指令数据集与近零的基座基线
- [[llm-children-reading-story-generation]] — 阅读水平控制的可控制性胜过规模
- [[bert-discourse-english-teaching-2026]] — 微调哪些层，以及为何四层胜过十二层
- [[nuclear-diffusion-text-to-image-learning-2026]] — 是架构而非参数量决定微调是否奏效
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 蒸馏进一个带忠实度审计的 2B 模型
- [[llm-unlearning-math-privacy]] — 对 PII 与有害内容做基于梯度的遗忘
- [[reflection-level-classification-hungarian-essays-2026]] — 微调 transformer 对经典与嵌入基线
- [[multimodal-item-parameter-estimation-2026]] — 从多模态题目学习 IRT 曲线
- [[know-when-to-trust-ai-scoring-reliability-2026]] — 置信度路由作为人在环中的策略
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — 检索作为第一序决定，并报告能耗与 VRAM
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 项研究：提示 13、微调 7、混合 3
- [[gpt-item-generation-l2-listening-2026]] — 提示触顶，随后微调补上其余
- [[wraft-automated-writing-evaluation-argumentative-2026]] — 微调在评分上取胜、在反馈上失败
- [[educational-llm-alignment]] — 模型与提示选择的约 15% 天花板
- [[yasar-llms-iterative-pedagogical-design-2026]] — 量规引导提示作为免训练的替代
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — 误解模拟的提示级人格控制
- [[eduframetrap-llm-sycophancy-educational-safety]] — 谄媚作为一项显式训练要求
- [[contextual-sycophancy-ai-literacy]] — 挺过提示与对齐的谄媚
- [[hazra-safetutors-pedagogical-safety-2026]] — 安全在持续对话中退化
- [[reddig-maclellan-personalized-feedback-llm-2026]] — 未训练前沿模型产出约 35% 不可用的提示
- [[simulated-students-tutoring-dialogues-2026]] — 模拟学生是否表现得像学生
- [[inside-llm-student-simulator-reasoning-2026]] — 微调模型使之像学生般行动与思考
- [[history-aware-student-simulation]] — 条件设于学习者轨迹之上的模拟
