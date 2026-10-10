---
title: 元分析与系统综述
created: "2026-08-14T05:24:40-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
foundations: [ai-education]
connected_faqs: [reporting-interpreting-aied-research]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, meta-analysis-systematic-review, research-methods-aied]
translation_of: concepts/meta-analysis-systematic-review
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **元分析与系统综述** —— 研究者用来汇总并评价一批研究（而不是开展一项新实验）的一系列证据综合方法。**系统综述**把一套透明、可复现的协议应用于检索、筛选、评价并综合围绕一个聚焦问题的文献；**元分析**则更进一步，在符合条件的研究之间对效应量做统计合并，产出一个加权的汇总估计，并检验调节变量。在 [[ai-education|教育中的 AI]]领域，这些方法对于确立"AI 工具是否有效、在何种条件下有效、对谁有效"的证据基础至关重要，也对于暴露缺口、偏差以及该领域的方法论质量至关重要。([[genai-meta-analysis-programming-learning]])([[zerkouk-comprehensive-review-its-2025]])

## 值得思考的问题

- 设想你读到十项关于"AI 辅导是否有效"的研究——两项显示大幅提升，三项显示无效，五项显示较小的正向效应。你会如何决定该得出什么结论？这种张力正是系统综述与元分析被构造出来加以解决的问题。
- 系统综述与元分析常被当作同一件事，但本页区分了二者：综述按一套有记录的协议进行综合，而元分析则对效应量做统计合并。即便一项审慎的综述存在，什么时候合并仍然不合适或不可能？
- 系统综述之所以处于证据层级的顶端，部分原因是它们弥补了小样本、异质设计与跨研究结论冲突的不足。你在哪里见过一项戏剧性的单一研究塑造了舆论，而汇总后的证据其实要混杂得多？
- 元分析产出一个加权的汇总估计——一个像"平均效应为 0.125 个标准差"这样的数字。一个合并后的平均值掩盖了效应在不同条件、不同学习者或不同情境下的哪些差异？这又为何关系到你是否愿意据此行动？
- 两种方法都承诺一套透明、可复现的协议（通常是 PRISMA），这恰恰因为"检索什么、纳入什么"的选择可能使结果产生偏差。如果一份综述没有披露其检索与筛选的决策，你会多大程度地信任它？

## 引言

系统综述与元分析之所以处于传统证据层级的顶端，正是因为它们综合了许多个别研究，弥补了小样本、异质设计以及相互冲突的结果——这些是任何快速发展的应用领域的特征。在教育中的 AI 领域，新工具与新研究不断涌现，综述扮演着关键的盘点角色：绘制已研究内容的图景、汇总已知的内容，并标出证据稀薄或方法论薄弱的地方。它们不同于叙事式或整合式文献综述——后者提供 [[qualitative-research|定性]]综合——因为前者承诺一套有记录的协议，且（对元分析而言）承诺统计合并。([[ai-literacy-heptagon-2026]])

## 系统综述与元分析的区别

| | 系统综述 | 元分析 |
|---|---|---|
| **核心活动** | 按一套有记录的协议检索、筛选、评价并综合研究 | 在符合条件的研究之间统计合并效应量 |
| **产出** | 叙事式／主题式综合与证据地图，常附 PRISMA 流程图 | 带置信区间的合并效应估计，加上调节变量分析 |
| **统计合并** | 可选（许多综述是定性的） | 必需 |
| **何时使用** | 绘制碎片化文献的图景，回答"研究了什么、它显示了什么？" | 当存在多项可比较的 [[quantitative-research|定量]]研究时，回答"总体上效应有多大？" |
| **优势** | 范围与评价透明、可复现 | 提高统计功效与精度；能检测调节变量与异质性 |

两者都以 **PRISMA**（系统综述与元分析优先报告条目）作为报告标准，它为检索、筛选与 [[inclusive-learning|纳入]]过程的 [[explainable-ai|透明]]与可复现提供了记录。一份整合式综述可能遵循 PRISMA 的原则以求透明，但止步于统计合并。([[ai-collaborative-learning-systematic-review]])([[ai-literacy-heptagon-2026]])

## 教育中的 AI 领域的证据综合

### 综述能实现什么

教育中的 AI 领域的系统综述与元分析服务于若干不同的目的：

- **确立证据基础** —— 判断 AI 工具（辅导、反馈、评估、[[conversational-ai|聊天机器人]]）是否产生 [[learning-gains|学习收益]]，以及这些收益有多大。
- **绘制领域图景及其缺口** —— 范围综述记录已研究的内容、证据集中在哪里、以及在哪里缺失（例如职场情境、非英语的工作、失败案例）。([[ai-vocational-education-training-review]])
- **识别调节变量与条件** —— 元分析检验效应是否因 [[learners|学习者群体]]、领域、AI 系统类型或研究设计而异，从而揭示工具对谁、在何种条件下有效。但一个调节变量的可信度只取决于支撑它的研究：在 [[genai-writing-performance-meta-analysis-2026|2026 年一项关于 GenAI 支持的 L2 写作的元分析]]中，唯一在方法论控制下存活的调节变量是研究的偏倚风险分类，而一项在亚组分析中看似显著的教学模型差异，一旦把研究质量与样本量纳入就崩塌了。承载效应的是方法论质量，而非教学法——因此表面上看起来是教学法的调节变量，理应受到与合并估计同样的审视。零结果的调节变量从反面给出同样的教训。在 [[chen-digital-ai-foreign-language-skills-meta-analysis-2026|Chen 与 Wei 关于数字与 AI 技术用于外语技能的元分析]]（40 项研究、3,367 名参与者、合并 g = 0.962）中，存活的调节变量是研究设计（准实验 g = 1.019 对真实验 g = 0.474）、干预时长与工具数量，而语言技能类型、技术类型、教育阶段、情境与样本量均未显示出显著的组间差异，使作者得出结论：有效性不能归因于一个技术标签或一个技能类别。[[yu-k12-ai-education-ai-literacy-meta-analysis-2026|Yu 及同事关于 K-12 AI 教育的元分析]]（16 项研究、57 个效应量、g = 0.892）发现其检验的三个调节变量（发表来源、发表年份、学校层级）全部为零，并把残余的异质性（I2 = 94.68%）读作证据：该领域对于如何测量 [[ai-literacy]] 根本没有共识。当一个调节变量返回零而异质性居高不下时，综合得出的结论往往既关于结果构念与原始研究的设计，也同样关于干预本身……
- **暴露方法论质量** —— 综述例行地发现该领域依赖功效不足的、前实验的或准实验的设计，以及即时的后测，从而为结论降温。([[ai-vocational-education-training-review]])([[zerkouk-comprehensive-review-its-2025]]) 对实际所做之事的稀薄报告也是这幅图景的一部分，它限制了任何后续综合能说的话：[[yalcin-genai-programming-education-systematic-review-2026|Yalcin 及同事关于编程教育中 GenAI 的系统综述]]在 46 项研究中有 26 项无法识别出教学方法，且 46 项中有 32 项发表于会议论文集，因此该综述只能为不到一半的语料编码教学法，并以影响证据混杂（一些研究显示考试与编码表现改善，另一些相对教师反馈未发现显著差异）作结。一项综合会继承它所在领域的报告习惯。


筛选信度可能是依赖构念的：在一项对 123 项 GenAI 研究的 PRISMA-ScR 范围综述中，[[cognitive-offloading|外包认知负荷]]与 [[agency|学习者能动性]]方面，标题／摘要的一致性（Fleiss' κ = 0.7103）在全文阶段降到 κ = 0.4884，作者把这归因于"宽泛的 GenAI 相关性"与"对该机制有实质相关性"之间的解释性边界（[[genai-cognitive-offloading-learner-agency-review-2026|Wang et al.（2026）]]）。

### 知识库中的示例

- **[[genai-meta-analysis-programming-learning|GenAI 与编程的元分析]]** —— 汇总了关于"生产力—学习权衡"的证据，发现生产力有显著提升但学习收益不显著（g ≈ 0），示范了元分析把短期效率与持久学习区分开来的能力。([[genai-meta-analysis-programming-learning]])

- **[[edurev-100741-tpack-genai-review|从 TPACK 视角看学生学习中 GenAI 的元分析]]** —— 汇总 71 项研究（74 个效应量）得到一个中到大的效应（g = 0.752），但其分解并不均匀：认知（g = 0.831）与情感（g = 0.729）收益强劲，而行为投入的效应很小且不显著（SMD = 0.057，p = 0.828）（Liu & Zhong，2025）。
- **[[ai-vocational-education-training-review|AI 在职业教育与培训（VET）中的系统综述]]** —— 26 项研究的首个系统综述，记录了 [[constructivist|建构主义]]名义与实际行为主义实践之间的缺口，以及职场研究的缺失。([[ai-vocational-education-training-review]])

- **[[genai-higher-education-systematic-review-2026|高等教育中 GenAI 的系统综述]]** —— 在一个五年的时间窗口内绘制机会、挑战与 [[pedagogy|教学法]]创新的图景。
- **[[zerkouk-comprehensive-review-its-2025|ITS 综合综述]]** —— 一项聚焦方法论严谨性的 [[intelligent-tutoring|智能辅导系统]]系统综述。
- **[[chatgpt-critical-creative-thinking-review|ChatGPT 与批判性／创造性思维的系统综述]]** —— 综合了关于 [[llm]] 使用支持还是削弱 [[critical-thinking|高阶思维]]的证据。
- **[[stanford-evidence-base-ai-k12-2026|K-12 中 AI 的证据基础]]** —— 审视了学校里 AI 辅导证据的强度。
- **[[liu-ai-literacy-interventions-meta-analysis-2026|AI 素养干预的元分析]]** —— 对 59 项研究（172 个效应、7,211 名参与者）做三层元分析，估计出一个大的总体效应（g = 0.837），同时显示有效性随地区与学习结果重点而变化（以知识为重点的干预胜过那些针对技能、态度或 [[ethics]] 的干预）。
- **[[ai-literacy-heptagon-2026|AI 素养七边形]]** —— 一份遵循 PRISMA 原则的整合式文献综述，示范了止步于元分析之前的定性综合。([[ai-literacy-heptagon-2026]])
- **[[chen-digital-ai-foreign-language-skills-meta-analysis-2026|数字与 AI 技术用于外语技能的元分析]]** —— Chen 与 Wei（2026）汇总 40 项实验与准实验研究（3,367 名参与者）得到一个大的效应（g = 0.962，95% CI 0.765 至 1.159），异质性高（I2 = 85.178），发表偏倚检验支持该估计（Orwin's fail-safe N = 5853；Egger's test p = 0.84465）。有启发意义的是设计这一调节变量：准实验报告 g = 1.019，而真实验为 g = 0.474，且非线性的时长与工具数量模式建立在仅含一或两项研究的亚组之上。
- **[[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|高等教育中 GenAI 与学习结果的元分析]]** —— Jing 及同事（2026）汇总 35 项研究、175 个效应量，得到 g = 0.53（95% CI [0.48, 0.64]），其中专业技能最大（g = 0.72），其次是学业表现（g = 0.46）与情感态度（g = 0.44）。时长调节着每一个维度，而下降正是要点：学业表现的效应从干预 0 至 4 周的 g = 5.07，降到 4 至 12 周的 g = 0.64，再到超过 12 周的 g = 0.01（Q = 35.19，p < 0.001）。学科类型与学习方法不是显著的调节变量。
- **[[yu-k12-ai-education-ai-literacy-meta-analysis-2026|K-12 AI 教育与 AI 素养的元分析]]** —— Yu 及同事（2026）汇总 16 项研究（57 个效应量、3,837 名学生，所有效应均为正），得到 g = 0.892（95% CI [0.548, 1.236]），剪补法调整后仍为 g = 0.952。三个受检验的调节变量（发表来源、年份、学校层级）全部返回零，而作者把 94.68% 的异质性归因于测量：各研究把 [[ai-literacy]] 操作化为从 AI 知识、伦理到态度、自我效能与职业兴趣的一切。
- **[[yalcin-genai-programming-education-systematic-review-2026|编程教育中 GenAI 的系统综述]]** —— Yalcin 及同事（2026）用 PRISMA 从 151 条记录筛出 46 项研究，其中 26 项没有给出可用的教学方法描述，38 项只考察单一工具（ChatGPT 单独出现在 46 项中的 35 项）。该综述可靠地绘制了工具、语言与发表场所的图景，却只能为不到一半的语料编码教学法——这干净地证明了原始研究稀薄的报告会限制一项综合能得出什么结论。
- **[[nlp-student-evaluation-teaching-scoping-review-2026|学生评教中 NLP 的范围综述与证据地图]]** —— Eicher 与 da Silva（2026）在一个技术轴与四个价值维度上为 421 项研究打分，把可操作性编码为一个从"声称有用"到"对决策产生可测量影响"的六级量表，并在 421 项研究中的 258 项（61.3%）得到可用的输出，而只有 49 项（11.6%）以预期使用者为评估对象。把一个缺口变成一个被编码的维度，使该综述能把"模型有效"与"反馈改变了教学"之间那 49.7 个百分点的边界作为其核心发现（而非一项注意事项）点名出来。
- **[[genai-scenario-based-healthcare-education-2026|医疗情境学习中 GenAI 的 PRISMA 2020 综述]]** —— Neto 及同事（2026）于五个数据库中做了系统检索（2025 年 11 月 9 日），覆盖情境式、案例式、[[problem-based-learning|问题式]]与 [[simulation|模拟式]]医疗教育中经过同行评议的 GenAI 研究，从 1,151 条记录筛出 23 项纳入研究，并使用 [[mixed-methods-research|混合方法]]评价工具（MMAT）进行评价。他们的主题式综合浮现出六个交叉主题，均锚定于作为教学规约的 [[prompt-engineering|提示设计]]，并记录了在验证标准化、纵向／比较设计与效率量化方面的缺口——这是一份严谨的 [[medical-education|领域特异]] GenAI 系统综述的模板。
- **[[li-language-educators-genai-review-2026|语言教师与 GenAI 的系统综述]]** —— 一项与 PRISMA 对齐的综述，覆盖 23 篇被 SSCI 收录的实证研究（2022 年 12 月—2024 年 9 月），研究语言教师如何感知、采纳并学习整合 GenAI，并通过亚里士多德的知识类型学综合：episteme（理论理解）、techne（实践技能）与 phronesis（实践智慧）。它记录了谨慎、选择性的采纳（偏向幕后的备课工作）、横跨三种知识类型的持续胜任力缺口，以及仅三项结构化的专业发展干预——这示范了一份综述如何同时暴露证据基础与该领域的方法论缺口（此处是结构化专业发展研究的稀缺）。
- **[[ai-higher-ed-service-delivery-systematic-review-2026|全球高等教育中 AI 与服务交付的系统综述]]** —— Nyamboga（2026）综合了横跨五个领域的 155 项研究，并用改编自 CASP 与 JBI 的标准为每个领域的确定性评级：AI 整合与基础设施就绪度高，领导力中等，伦理治理与可持续性低。该综述还把质量透镜转向自己的语料：117 项研究（75.5%）报告成功实施，124 项（80.0%）只覆盖短期影响，只有 23 项（14.8%）报告了伦理、公平或治理方面的失败。一项综合可以逐领域地报告证据有多确定，而不只是它指向哪个方向。
- **[[riedmann-reinforcement-learning-education-review-2026|教育中 RL 的系统综述]]** —— Riedmann、Schaper 与 Lugrin（2025）用一套 PRISMA 标准的协议综合了 89 项 [[reinforcement-learning]] 研究（2000—2024）。该综述是综合方法及其局限的一个有启发性的案例研究：它绘制了一个快速增长但方法论不均衡的领域图景——超过一半的研究（n = 54）没有报告统计检验——并只在 15 篇适合合并的论文上做了效应量分析，报告出从中等到大的效应（Cohen's d，来自实评）。它还做了发表偏倚检验（漏斗图、Egger's test、PET-PEESE），未发现显著偏倚但功效有限（n = 6）；并且它止步于主题式加有限定量的综合而非完整的元分析，这恰恰是因为异质的评价协议阻止了更广泛的合并——这是下文所述异质性与"垃圾进、垃圾出"局限的一个具体例证。
- **[[critical-review-critical-thinking-hci-research-ai-2026|HCI 中关于 AI 的批判性思维范围综述]]** —— Inie 及同事（2026）绘制了 80 篇实证论文的图景，并刻意不做质量评价，因此"声称的"影响指的是每篇论文自己陈述的结论。只有 23 篇论文（29%）定义了批判性思维，46 篇（57%）无法被归入一个理论立场，49 篇（61%）通过自报测量该构念——这正使得 50 篇论文（62%）能报告出正向影响。当一个构念如此缺乏定义、其测量不可通约时，绘制图景比合并更有信息量，而撤回评价则把主张从"效应"转移为"研究所声称内容的描述"。
- **[[alsheikh-mapping-ai-integration-higher-education-2026|高等教育中 AI 整合的映射综述（FACETS + SAMR）]]** —— 一份 PRISMA 2020 综述，从 959 条记录筛出 22 项干预研究，示范了一个编码框架（FACETS：形式、AI 用例、情境、教育重点、技术、[[samr-model|SAMR]]）加一个评价透镜（SAMR）如何绘制碎片化文献的图景并对转型深度评级。多数纳入研究落在 SAMR 的替代／增强层级，表明映射综述能揭示一个"广而浅"的整合领域——当目标是描述一片地貌而非估计一个效应时，这是效应合并之外的另一条路。
- **[[teacher-intervention-k12-ai-based-instruction-2026|K-12 AI 教学中教师干预的系统综述]]** —— Lee（2026）从 1,565 条记录筛出 29 项研究，每一阶段都由两位独立评分者执行（κ = 0.655 筛选，κ = 0.647 合格性），并用 MMAT 质量评价移除了一项研究。这是刻意止步于合并的综合的一个有启发性的例子：因为在多数纳入研究中，[[teacher-role|教师]]干预的独立效应无法与 AI 系统设计、教学结构与课堂情境分离，该综述报告的是条件性结果与一个由过程、策略与效应构成的解释性框架，而非一个效应量——这与把综述与元分析区分开来的局限是同一个。
- **[[agarwal-ethical-values-norms-aied-2026|AIED 中伦理价值与规范的系统综述]]** —— Agarwal 及同事（2026）在 Web of Science、ERIC、IEEE CSDL 与 ACM DL（外加反向滚雪球）中从 736 条记录筛出 25 篇纳入文章，把碎片化的 [[ethics|AIED 伦理]]文献整合为六项主要伦理价值（不歧视、数据托管、[[human-in-the-loop-ai|人类监督]]、善意、可解释性、教育适当性），并把伦理规范映射到一张"利益相关者 × 价值"矩阵上。该综述示范了一套系统协议如何综合一份概念上碎片化、大体上非实证的文献（25 篇文章中只有三篇是方法论论文或原创研究），并把它转化为一个可行动的框架——此处是 [[governance]] 与 [[educational-policy-ai|政策]]的基础。
- **[[chen-pbl-pjbl-genai-meta-analysis-2026|GenAI 在 PBL／PjBL 中的三层元分析]]** —— Chen 及同事（2026）汇总 22 项对照研究、66 个效应量，得到对学习者内部结果的大效应（g = 0.819，95% CI [0.655, 0.983]），随后报告 PET-PEESE 小研究校正把估计降到 g = 0.378，而产品表现模型（g = 1.958，六项研究）的预测区间跨越了零。另有两项研究因未达到 What Works Clearinghouse 0.25 SD 的基线等价阈值而被剔除。所报告的效应取决于一项综合所施加的偏倚校正与设计筛选，而两者都属于解释的一部分，而非脚注。

### 面向阅读障碍的 AI 跨学科综述

**[[dabaghi-ai-dyslexia-education-review-2026|Dabaghi、D'Urso 与 Sciarrone（2026）]]** 提出了一份 PRISMA 引导的、跨学科的系统综述（2018—2024，n=72），考察 AI 与生成式 AI 在教育中对阅读障碍学生的支持。该综述把 AI 映射到检测、辅助性支持与 [[personalized-learning|个性化学习]]之上，发现这些线索是平行演进而非走向整合的，其驱动力更多来自技术机会而非整合的教育理论。它记录了生成式 AI 在这一领域未被充分利用（GAI 研究全部来自 2024 年，聚为聊天机器人、教师培训支持与探索性研究），且基于 ML 的帮助型教育工具落入五个领域（具体应用、[[student-engagement|投入]]、个性化、推荐、通用支持），同时强调技术表现胜过生态效度。公开的挑战包括实验验证有限、诊断工具的可扩展性与 [[accessibility]]、敏感学生数据的伦理／隐私问题、教师支持不足，以及语言／文化障碍。该综述自身的方法论局限——解释性分类偏差、排除非英语研究、阻止定量综合的异质评价协议，以及快速演进的 GAI 证据基础——示范了系统综述家族的核心张力：一套透明的协议可以绘制一个碎片化领域的图景，但异质的评价阻止了统计合并，因此综述止步于主题式综合而非元分析。

## AI 时代的综合挑战：生产力与学习

生成式 AI 干预的综述面临一个知识库的综合研究所凸显的独特挑战：**把生产力增益与持久的学习增益分开。** 由于 [[generative-ai|生成式 AI]]能抬高即时的任务表现（作业、有辅助的练习）却不产生学习，元分析必须谨慎对待合并的是哪种结果。[[genai-meta-analysis-programming-learning|关于 GenAI 与编程的元分析]]发现生产力大幅提升但学习收益不显著（g ≈ 0）——一个干净的例证。[[stromberg-generative-ai-learning-penalty-secondary-2026|大规模实地研究]]与 [[generative-ai-reduced-study-time-math|无辅助测量的研究]]表明，所测得的效应取决于结果是在 AI 辅助下还是在监考／无辅助下取得的。因此综述应分别报告有辅助与无辅助的结果，区分表现与 [[learning-gains|学习]]，并标出那些只测量即时 AI 支持表现的研究。一个互补的告诫来自 [[liu-ai-literacy-interventions-meta-analysis-2026|AI 素养元分析]]：被合并的**结果**也塑造着答案——以知识为重点的 [[ai-literacy]] 干预显示出比那些针对技能、态度或伦理的干预更大的效应，因此一份只合并知识结果的综述，可能高估 AI 素养教学在整体上的成就。这与 [[ai-ed-evaluation]] 和 [[summative-assessment]] 相关。

同一件人工制品也出现在时间维度上。[[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|Jing 及同事 2026 年关于高等教育中 GenAI 的元分析]]（35 项研究、175 个效应量、合并 g = 0.53）报告学业表现效应从干预 0 至 4 周的 g = 5.07，降到 4 至 12 周的 g = 0.64，再到超过 12 周的 g = 0.01（Q = 35.19，p < 0.001），而情感态度的效应在同一跨度内从 g = 2.05 的峰值降到 g = 0.18。如此之大、如此之早的效应，大多记录的是任务层面的协助而非持久的 [[learning-gains|学习]]，因此一个由短研究主导的合并估计应被读作一次真实实施所能维持的上限。合并结果的综述因此应在效应量旁边记录干预时长，因为时长是这些综合中少数几个一直站得住的调节变量之一。

## 优势与局限

**优势：**
- 对庞大、碎片化文献的高效综合
- 元分析产出合并效应估计、提高统计功效，并检测调节变量与异质性
- 系统协议相比叙事综述提高了透明度与可复现性
- 对循证实践与识别研究缺口至关重要

**局限：**
- **垃圾进、垃圾出** —— 综合的质量只取决于纳入研究的质量；薄弱的原始设计产生薄弱的合并结论
- **发表偏倚** —— 零结果或负结果发表不足，抬高了合并效应
- **异质性** —— 各异的设计、结果测量与 [[ai-technologies|AI 系统]]使直接合并变得困难，并可能损害单个效应量的含义。[[genai-writing-performance-meta-analysis-2026|关于 GenAI 写作的元分析]]把这一点具体化：一个在统计上显著的大的合并优势，伴随着极端的研究间异质性，以致一次新实施的预测区间仍然跨越零，意味着一次新的部署完全可能不带来收益。平均的方向是稳健的，其量级却不然——这就是为什么应当由预测区间（而非仅由合并估计）来为采纳决策提供信息。未解决的异质性也可能来自结果一侧而非设计一侧：[[yu-k12-ai-education-ai-literacy-meta-analysis-2026|K-12 AI 素养元分析]]发现了 I2 = 94.68% 的异质性，没有任何调节变量能解释，并将其追溯到 [[ai-literacy]] 缺乏一致的测量，16 项研究把认知与情感结果混在一个标签之下。由"测了什么"与"做了什么"共同驱动的异质性，无法靠合并来解决。
- **快速过时** —— AI 工具格局变化迅速，综述可能很快过时
- **范围约束** —— 只检索单一数据库或只检索英语，可能遗漏相关工作。([[ai-collaborative-learning-systematic-review]])([[ai-vocational-education-training-review]])

**元研究警告：AIED 的综合基础目前薄弱。** 一批不断增长的批评文献记录到，该领域的头条 AI 效应量——尤其来自早期元分析的——被发表偏倚、构念不一致与方法论捷径所夸大。[[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al.（2026）]] 对来自 67 项元分析的 1,840 个效应量做元分析，估计经发表偏倚调整后的 AI 效应约为报告量级的三分之一（SMD ≈ 0.196），且异质性极端。[[oneill-presumed-effective-meta-analysis-2026|O'Neill（2026）]] 审计了 14 项高影响的 AIED 元分析，发现没有一个具有连贯的构念、有效的发表偏倚评估或已解决的异质性；十二项把相依的效应量当作独立的处理。[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al.（2025）]] 表明多数原始比较缺乏定义良好的处理、对照与学习测量。这意味着读者应把合并后的 AIED 效应量视为上限，直到综合质量改善——完整分析见 [[limitations-in-aied-research|AIEd 研究中的局限]]。
- **报告标准未能跟上自动化。** PRISMA-LLM 分析了 SciLitBench——一个含 14,726 条标注、888 篇综述自动化论文的语料库——并记录到接近每月 4.7% 的增长率，以及一个问责缺口：自 2023 年以来，38.0% 的软件与产品类论文完全没有报告任何评估，而 LLM 类论文为 9.3%，且 52% 只报告正面结果的 LLM 评估存在未满足的高门槛关切。由于 LLM 与软件管线如今参与了可能改变证据基础的各个环节，该框架要求披露：自动化在综述工作流的哪一环运作、评估了什么、检查了哪些局限——这是 [[limitations-in-aied-research|AIED 综述批评]]就已为学习效应的元分析记录过的透明性问题的一个直接延伸。([[prisma-llm-ai-assisted-systematic-reviews-2026]])

## 与其他方法的关系

在知识库的方法论版图中，元分析与系统综述是**综合**家族，与原始设计互为补充：

- **原始研究**（实验、调查、定性工作、[[design-based-research|设计型研究]]）产生个别发现；综述把它们汇总起来。参见 [[research-methods-aied]]。
- 原始研究中的**效应量报告**（例如 [[rct|RCT]]）使后续的元分析成为可能——综述依赖于研究报告可比较、可提取的效应量。
- **评估**（[[ai-ed-evaluation]]、[[benchmark]]）评估单个系统；综述评估关于系统与干预的*文献*。
- **教育测量**（[[educational-measurement]]、[[assessment-validity]]）关注综述所合并的结果测量的质量。

## 对研究者的启示

1. **报告可提取的效应量。** 要使一批文献可做元分析，原始研究必须报告可比较的效应量与足够的方法细节——这是每一项 AIED 研究的责任。([[research-methods-aied]]) 足够的细节包括教学方法：[[yalcin-genai-programming-education-systematic-review-2026|一项关于编程教育中 GenAI 的系统综述]]只能为 46 项研究中不到一半编码教学法，因为有 26 项从未描述他们做了什么——原始作者略去的细节，正是后续综合无法恢复的细节。
2. **遵循透明的协议。** PRISMA 引导的检索、筛选与评价使综述可复现、可辩护。
3. **谨慎解读合并效应。** 在得出强结论之前，先关注异质性、发表偏倚与纳入研究的质量。
4. **用综述来设定议程。** 综述所记录的缺口（失败案例、职场情境、非英语与未被索引的工作、长期结果）应当指引新的原始研究最需要去哪里。([[ai-vocational-education-training-review]])
5. **把零结果的调节变量当作发现。** 当调节变量返回零而异质性居高不下时，这是关于领域状态（构念不一致、设计报告稀薄）的证据，其分量不亚于关于干预本身的证据，它属于综合叙事的一部分，而不应被丢弃。([[yu-k12-ai-education-ai-literacy-meta-analysis-2026]])([[chen-digital-ai-foreign-language-skills-meta-analysis-2026]])

## 医疗情境学习中的 GenAI

- **医疗情境学习中 GenAI 的 PRISMA 2020 综述。** Neto 及同事（2026）于五个数据库中做了系统检索（2025 年 11 月 9 日），覆盖情境式、案例式、问题式与 [[simulation|模拟式]]医疗教育中经过同行评议的 GenAI 研究，从 1,151 条记录筛出 23 项纳入研究，并使用 [[mixed-methods-research|混合方法]]评价工具（MMAT）进行评价。他们的主题式综合浮现出六个交叉主题，均锚定于作为教学规约的 [[prompt-engineering|提示设计]]，并记录了在验证标准化、纵向／比较设计与效率量化方面的缺口——这是一份严谨的 [[medical-education|领域特异]] GenAI 系统综述的模板。

## 关联概念

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[rct]]
- [[ai-ed-evaluation]]
- [[ai-assisted-educational-research]] — AI 辅助的教育研究
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[summative-assessment]]
- [[ai-education]]
- [[higher-ed]]
- [[simulation]]

## 关联文章
- [[edurev-100741-tpack-genai-review]] — 从 TPACK 视角看学生学习中 GenAI 的系统综述
- [[genai-meta-analysis-programming-learning]] — 关于 GenAI 对编程中生产力与学习之影响的元分析
- [[ai-vocational-education-training-review]] — 职业教育与培训中 AI 的首个系统综述
- [[ai-collaborative-learning-systematic-review]] — AI 驱动的协作学习的 PRISMA 系统综述
- [[genai-higher-education-systematic-review-2026]] — 高等教育中 GenAI 的系统综述
- [[zerkouk-comprehensive-review-its-2025]] — 智能辅导系统的综合系统综述
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT 与批判性／创造性思维的系统综述
- [[stanford-evidence-base-ai-k12-2026]] — K-12 中 AI 的证据基础
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — AI 素养干预效应的元分析
- [[genai-writing-performance-meta-analysis-2026]] — GenAI 支持的 L2 写作元分析：一个被极端异质性与质量驱动调节变量削弱的大合并效应
- [[ai-literacy-heptagon-2026]] — AI 素养各维度的整合式文献综述（PRISMA 引导）
- [[genai-scenario-based-healthcare-education-2026]] — 情境式医疗教育中 GenAI 的系统综述（Neto et al. 2026）
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — 用 FACETS + SAMR 对 22 项 AI 整合研究分类的映射综述；多数落在替代／增强层级
- [[agarwal-ethical-values-norms-aied-2026]] — AI 教育中的伦理价值与规范
- [[li-language-educators-genai-review-2026]] — 语言教师使用 GenAI 的实践与发展
- [[dabaghi-ai-dyslexia-education-review-2026]] — 教育中帮助阅读障碍者的 AI
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause（媒介比较批评）
- [[bartos-ai-learning-meta-meta-analysis-2026]] — 元—元分析：经偏差调整的 AI 效应约为报告大小的 1/3
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[teacher-intervention-k12-ai-based-instruction-2026]] — K-12 AI 教学中的教师干预：一项系统综述
- [[chen-digital-ai-foreign-language-skills-meta-analysis-2026]] — 数字与 AI 工具用于外语技能的元分析：设计调节变量使准实验效应估计翻了一倍以上
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — 高等教育中 GenAI 的元分析：短干预效应随时长增长而崩塌
- [[yu-k12-ai-education-ai-literacy-meta-analysis-2026]] — K-12 AI 教育的元分析：效应大，调节变量为零，异质性归因于测量
- [[yalcin-genai-programming-education-systematic-review-2026]] — 编程教育中 GenAI 的系统综述：46 项研究中有 26 项教学报告稀薄

- [[genai-cognitive-offloading-learner-agency-review-2026]] — 123 项研究的范围综述：绘制高等教育中 GenAI、认知外包与学习者能动性的图景
