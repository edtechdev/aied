---
connected_resources: [playlab]
title: "教育技术开发者"
created: "2026-09-17T15:20:00-04:00"
updated: "2026-10-09T19:07:00-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
translation_of: concepts/educational-technology-developers
source_updated: "2026-09-17T15:20:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育技术开发者（Educational Technology Developers）** — 构建教育技术的人与组织：产品设计师、软件开发者、学习工程师、学习分析设计师，以及他们所在的 edtech 公司、大学实验室与 [[open-source]] 项目。在教育人工智能中，这是把模型能力转化为教师或学习者真正可用之物的角色，它承载着后续任何阶段都无法撤销的决策：一项设计主张建立在什么证据之上，一条 [[learning-analytics|analytics]] 流水线或一个 [[intelligent-tutoring|tutoring]] 系统在多大程度上扎根于机构自有授权材料，教师与学习者是否被纳入设计，哪些 [[learning-design|instructional design]] 假设被烧进默认值，以及资金停止之后产品会怎样。横跨本知识库的系统报告与部署研究，反复出现的教训是：起约束作用的通常是部署情境，而非模型。

## 值得思考的问题

- 如果那些声称"AI 改善学习"的元分析建立在无效的方法论之上，正如 [[oneill-presumed-effective-meta-analysis-2026]] 的审计所发现的，那么产品路线图实际还能建立在什么证据之上？
- 一个算法的解释，是否应当用教师的课程语言书写，即使这比暴露特征重要性要耗费更多设计努力——而这种努力又该由谁来买单？
- 当一个工具是与学生共同设计的，谁的判定说了算：测得的学习增益，还是那 96% 说希望保留它的人？
- 本地部署、开放许可的部署是技术选择还是治理选择——透明度要求是否应当成为采购的条件？
- 当资助结束，开发者对机构负有什么义务：一个有人维护的产品、一个可 fork 的代码仓库，还是一句坦率的说明——这个系统从来不是一个经过验证的干预？

## 引言

开发者位于平台的下一层。[[edtech-platform]] 描述已部署的系统，以及它一旦进入学校或大学后所成为的利益相关者；本页讲的是决定这个系统做什么的人。这一区分之所以重要，是因为平台层面的发现——使用率低、公平性偏斜、采购摩擦——通常是更早由某个从未见过学习者的人做出的设计选择的后果。

这个角色也与它的邻接角色不同。[[learning-design]] 与 [[curriculum-design]] 为一个已知队列设计一门课程；技术开发者设计的是一件产品，将由许多课程使用，而课程的授课者他们从未谋面——这正是默认值、可配置性与文档带有教学分量的原因。[[educational-development]] 从机构内部支持它的教学人员；开发者位于机构之外或与之并行，提供工具，而这些人员随后被要求采纳它们。而 [[design-based-research]] 是这类开发者日益被要求达到的证据标准：迭代的、情境化的，并带着自身的局限报告。

### 谁在教育中构建 AI

**构建公共基础设施的研究实验室。** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] 在 UC Berkeley 被构建，是第一个完全开源的、基于 [[intelligent-tutoring|ITS]] 原则的自适应辅导系统：一个 MIT 许可的代码库，配以 Creative Commons 代数库、[[knowledge-tracing|Bayesian Knowledge Tracing]] 掌握度估计、A/B 测试基础设施与 LTI 支持。它存在的理由是一个设计决策——专有平台把 [[adaptive-learning]] 研究封闭在闭环系统之内——而它的创作路径是另一个：16 位创作者在 2.27 小时的培训之后，用六个月产出了一门大学代数课程。

**模型构建者。** [[learnlm-improving-gemini-learning]] 把"为学习改进模型"重新框定为 [[prompt-engineering|pedagogical instruction following]]：行为通过系统指令按应用设定，而非一个固定的 [[pedagogy]] 定义，且专家评审者对其的偏好高出 GPT-4o 达 +31%、高出基础 Gemini 达 +13%。实践要点是：教学法太依赖情境，无法全局定义；有用的能力是对开发者所写指令的遵从度，用对话级场景而非单轮 [[benchmark|benchmarks]] 来衡量。

**知识模型的架构者。** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] 论证 [[personalized-learning]] 需要的不只是一个静态本体，提出以映射本体加规则与分析的系统取代经典的四模型 ITS 架构，并提出一个包含八类元数据的复用框架，意在削减每次新建的成本。

**基础设施与测量工程师。** [[a4l-analytics-pipeline]] 描述了一条模块化、领域无关的学习者交互数据流水线，在三个教育 AI 助手上得到验证，其中为一个领域构建的方法可以延伸到另一个领域——这是可复用的 [[learning-analytics]] 基础设施，而不是一门课程的面板。[[stanbkt-bayesian-knowledge-tracing]] 展示了互补的案例：一次贝叶斯重实现产生了与既有工具*完全相同*的预测（AUC 0.711），差异只在成本，以及使条件比较变得可解释的可信区间。

**机构内部的构建者。** [[moodle-ai-tutoring-deep-learning]] 把 LLM 辅导嵌入既有 LMS，而不是交付一个独立工具，从而降低 ITS 文献所指认的、导致系统在实践中失败的采纳门槛。[[savvy-student-attention-video-learning]] 把多模态注意力信号转化为教师可以在发布视频之前读取的界面。[[instructional-agents-multi-agent-course-gen|Instructional Agents]] 用角色专门化的智能体自动化 ADDIE 的前三个阶段，而它的消融实验是一则设计课：单智能体基线得分最差，Full Co-Pilot 高出 Autonomous 0.5–0.9 分，而后端之间没有质量差异，于是最便宜的那个成为默认。

### 一项设计主张能建立在什么之上

**证据基础比它看起来更弱。** [[oneill-presumed-effective-meta-analysis-2026]] 审计了 14 项声称 AI 改善教育的元分析，发现没有一项能支撑其主张：除两项之外，所有分析都把干预定义为一个工具而非一种教学干预，59 项经审原始研究中有 61% 存在效度问题，凡有报告处异质性都很高，调节效应分析功效不足，而发表偏倚从未得到有效评估。一项被撤稿的元分析仍被 60% 的抽样后续论文当作权威引用。对开发者而言，"AI 改善学习"是一个产品类别主张，而不是设计输入。

**报告不确定性与全部成本，而不只是准确率。** 对 [[stanbkt-bayesian-knowledge-tracing|StanBKT]] 而言，贝叶斯推断在预测上买不到任何东西，却在能说清哪些效应可信上买到一切。[[shen-sustainable-ai-knowledge-base-cs-education-2026]] 报告了检索消融、量化感知微调、VRAM、每次查询能耗，以及对照检索到的开放资源测量的幻觉——并附作者自己的告诫：该系统不是一个经过验证的辅导系统。这正是使一项部署主张可被检验的 [[ai-ed-evaluation|evaluation]] 纪律。

### 与教师和学习者共同设计

**解释必须说教师的语言。** [[xai-teachers-trust-edtech-recommendations-2026]] 对 41 名化学教师做了一项被试内实验，使用一个 ML 推荐工具：可理解性、[[trust]] 与接受度正相关，而用课程语言书写的领域驱动解释，其可理解性、习得 [[trust-calibration|trust]] 与接受度都显著高于特征重要性解释。信任也是动态的——数位教师表示，只有课堂经验才能让它定论——而接受度取决于教学对齐与工作量削减。

**机构规模的共同设计。** 开放大学的 [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]] 通过 18 个月内六项设计型研究构建，涉及 498 名学生与 20 名员工。约 20% 起初持怀疑态度；在动手使用之后，96% 希望保留它，而一项探索性 RCT 发现使用时长翻倍，但学习过程数据上没有显著差异。使能因素是组织性的——高层赞助、跨单位协作、数据驱动的迭代——并伴随系统思维能力上的缺口。

### 采购、开放性与资金停止之后

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] 提供了采购决策所需的输入：12 GB VRAM 的硬件底线、7B 级模型的准确率上限、每次查询能耗，以及一个选择次序——先检索（没有它模型得分 52.3%，低于 TF-IDF 基线），再微调，再量化感知压缩；开放许可是在本地服务语料的前提。[[reclaiming-epistemic-agency-co-agency-2026]] 把同一决策框定为治理：透明度要求把采购变成认识论治理，可争议性与来源可溯成为条件，而能力最弱的地区面对最高的门槛。[[credential-cognitive-stewardship-ai-assessment]] 补充道，在 30 个经审计的政策包中，供应商治理只出现在 29%，而它们规定 AI 可以做什么，远比规定何种学习证据留存要爽快得多。[[genai-mindtool-generative-learning]] 提出了设计问题——产品鼓励的是*借助*工具学习，还是把认知工作外包出去——而 [[vocabulary-difficulty-prediction]] 在小尺度上展示了这种权衡：得分最高的黑盒模型（r > 0.91）比可解释模型（r > 0.77）更难解释。

## 关联概念

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## 关联文章

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
