---
title: 教育人工智能的研究方法
created: "2026-08-13T05:48:37-04:00"
updated: "2026-10-09T18:39:30-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
translation_of: concepts/research-methods-aied
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教育人工智能的研究方法**——研究者用以研究[[ai-education|教育中的人工智能]]的一套实证设计、数据收集策略与分析技术：人工智能工具是否、以及如何支持（或损害）学习，在何种条件下如此。本知识库的语料涵盖实验、调查、质性、基于设计的、计算基准与综述等方法。每一种都有独特的长处与局限，而在它们之间做选择，涉及内部效度（对因果主张的信心）、外部效度（可推广性）、生态效度（真实世界保真度）与研究快速演进的人工智能工具的可行性之间的权衡。

## 值得思考的问题

- 本页的核心张力：对因果推断最强的设计（随机实验）在真实课堂中最难开展，而最真实的情境提供的因果控制最弱。如果你要判断一个[[intelligent-tutoring|人工智能导学系统]]是否有助于学习，这两种失败中你更愿意承受哪一种——为什么？
- 在阅读之前，你能说出内部、外部与生态效度之间的区别吗？本页认为每一种设计都在这三者之间做权衡。一项在因果上严谨的研究，如何仍可能对真实课堂几乎毫无用处？
- 一个基准显示某个人工智能准确率很高，但本页坚持高基准准确率并不意味着教育有效性。为什么一个“通过测试”的系统仍可能无助于学生学习——又缺少哪类证据？
- 基于设计的研究会对真实干预做迭代，却无法把增益归因于某个具体机制；而 RCT 能隔离原因，却在人为条件下运行。考虑到人工智能变化的快速程度，你认为一项严谨的 RCT 在其所测的工具过时之前，还能保持多久的相关性？
- 德尔菲专家共识确立的是专家之间的一致，而非经验效应。什么时候依据专家的信念、什么时候依据“什么有效”的数据来建构能力框架是正当的——在实践中你如何区分二者？
- 本页主张三角互证——结合基准评价、实验、测量与质性工作，以判断一个工具是否有效以及如何有效。在阅读之前，对于“这个人工智能改善学习”这类主张，你会需要每种方法在何处出场才感到信服？

## 引言

教育人工智能研究的核心张力在于：对因果推断最强的设计——随机实验——往往是最难在真实课堂中用真实人工智能工具开展的，而最真实的情境（现场部署、案例研究、日志数据分析）提供的因果控制最弱。没有任何单一方法能解决这一点；该领域通过跨方法三角互证、并通过明确每种设计能支撑何种主张而前进。每种方法还带有横切性的局限——可推广性、测量效度、人工智能变化的快速程度、可复现性以及薄弱的理论运用——读者必须加以权衡；见[[limitations-in-aied-research|教育人工智能研究的局限]]。

本页的主题是方法而非发现。[[learning-sciences|学习科学]]是这些方法所服务的实质领域：本页覆盖一项研究应当如何设计、测量与报告，而那一页覆盖该领域已确立的关于人如何学习、学习环境应如何设计的知识，并把基于设计与混合方法视为学习科学的标志性方法，而非众多选项中的两个。

与本页相邻的是[[ai-assisted-educational-research|人工智能辅助的教育研究]]，它覆盖人工智能作为该领域自身工作的工具：文献检索、筛选、综述自动化、质性编码、分析与写作。其范围包括教学学术之类的实践者研究，并与本页所描述的设计保持区分。

[[ai-methodologies-science-education-research-2026|Martin、Rost、Koenen 与 Graulich（2026）]]以同样的审视施加于该领域的知识生产本身，借用 Chang（2004）的“法则性测量问题”（nomic-measurement problem）：测量一个量需要一条把它与某种可观测量联系起来的法则，而若不事先知道这个量，那条法则又无法被经验检验。他们认为，人工智能导出的测量函数——从训练数据与优化中涌现，而非出自研究者——可能加剧而非化解这一问题。这类函数看起来精确，却在认识论上不透明，于是研究者的角色转为解释并验证计算输出。他们提出的七阶段反思框架（问题框定；工具化与测量；实验与基于证据的推断；比较与复制；建立规范与共识；实施及其后果；以及持续精炼）被定位为分析辅助，而非经过验证的方法；他们并主张，可比性必须跨越学生总体延伸，而不只是模型擅长的那些子集。

### 报告规范与 TEP-AIED 模型

人工智能教育研究的报告质量本身就是一个研究议题。[[tep-aied-model-reporting-2026|TEP-AIED 模型（Hwang、Xie、Wah 与 Gasevic，2026）]]提供了一个以严谨方式呈现人工智能教育研究的结构化框架，把研究报告的必要组成部分组织起来——理论／技术／教育问题的框定、设计、数据、分析与结果——以便读者与评审能够评估主张是否得到支撑、工作是否可复现。它回应的是该领域在报告上的长期痼疾（工具描述含糊、模型版本未说明、评价细节缺失），这些正是[[limitations-in-aied-research|局限]]页所记录的。像 TEP-AIED 这样的报告框架，与既有的报告清单（如试验的 CONSORT 式指引、综述的 PRISMA 式指引）并列，构成该领域向[[educational-measurement|方法论透明]]与可复现性迈进的一部分。

[[raise-framework-ai-education-reporting-2026|RAISE（Allison，2026）]]从相反方向处理同一问题——作为清单而非叙事结构。它提出**横跨十个主题域的 30 项条目**（教育正当性与理论基础、人工智能系统规范、人工智能角色与交互、[[accessibility|无障碍]]与文化适配、情境与参与者、人的参与、研究设计与评价、伦理与可信性、透明与可复现，以及局限与启示），配有一个可编辑版本和一份配套的**伦理与风险矩阵**，覆盖学习者自主性、[[equity-in-ai-education|公平]]访问、数据[[governance|治理]]与算法透明。两个框架直接彼此回应：TEP-AIED 称 RAISE 全面，但批评其广度，认为“它的广度与粒度可能使其复杂化，对常规实证应用而言可及性较差”，而 RAISE 自身的定位是它不规定任何方法或模型，只要求选择可见。合读二者，标出了这一文献中的权衡——更完整的审计清单对更精简的三维叙事——而它们在同样的不可协商项上汇合：命名并注明人工智能系统的版本，披露提示与交互设计，定义处理与对照条件，报告伦理审查与风险缓解，并说明结果衡量的是表现、保持还是迁移。要让一项研究按这些标准被裁断，报告工具必须在设计时就被采用，而不是等到稿件阶段才拼凑，这正是两个框架都坚持的一点。语料层面的历史分析本身也是一种带有透明义务的方法论选择：[[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian 与 Doroudi]]依据作者对摘要与全文的判断，把每篇论文定位到他们的 AI×Ed 框架之中，并明确承认这不是一个系统……

### 实验与准实验设计

一项**效果研究（efficacy study）**检验一项干预是否产生其预期的学习效果，通常采用比较有无干预之结果的实验或准实验设计。实验把学习者随机分配到不同条件（如人工智能导学对人类导学，或有人工智能脚手架对无辅助）以估计对学习增益、[[student-engagement|参与]]或动机等结果的因果效应。**随机对照试验**是内部效度的黄金标准。[[access-not-enough-ai-tutoring-2026|一项关于人类支持加人工智能导学的随机现场研究]]与[[genai-can-harm-teaching-rct-2026|一项关于教学中生成式人工智能的 RCT]]用分配来隔离因果效应。**准实验**设计（前后测、被试间或未经随机化的匹配组）在完整班级中更可行，但在因果主张上更弱。

- **工具验证与基线核查先于效应估计。**[[genai-cognitive-scaffold-geometric-reasoning-2026|Davor（2026）]]比较了加纳两所高中完整班级（86 名学生，每组 43 人）在把生成式人工智能用作几何脚手架上的差异，用 G*Power 分析确定样本量，并在研究前把几何推理与证明测验试测到 Spearman-Brown 折半信度 0.859。两组在前测上没有显著差异，而校正先前表现的 ANCOVA 保留了组效应（F(1, 83) = 50.30，p < .001，partial η² = .377）。在没有随机分配的情况下，正是试点信度与基线等价核查使经校正的比较可解释。

- **长处：**因果推断最强；结果测量干净；支持效应量估计与效果主张。
- **局限：**成本高、耗时长；人为条件会削弱生态效度；快速变化的人工智能工具使长实验很快过时；小样本常常对有意义效应的检出功效不足；在扣留可能有帮助的工具方面存在[[ethics|伦理]]约束。
- **范例：**[[access-not-enough-ai-tutoring-2026]]、[[genai-can-harm-teaching-rct-2026]]、[[adaptive-pretesting-retention]]、[[agent-voice-accents-k12-group-learning]]、[[ai-use-critical-thinking-medical-students-2026]]。
- **预注册同样适用于二次分析，而不只适用于试验。**[[crediting-assisted-work-inflates-mastery-2026|Srivastava（2026）]]在完全相同的 ASSISTments 日志（12,716 名学生、985,813 个计分事件）上运行了四种[[knowledge-tracing|知识追踪]]更新规则，它们只在如何为带提示的行计分上有所区别；他把验证性的一半封存，直到一个包含注册链接的文件存在，并报告四项预注册预测全部成立。把任何完成都计入，预测后续无辅助表现仅略高于一个“技能—难度”常数（合并 AUC 0.604 对 0.595），而按严格规则只把 72.8% 的学生—技能对判为掌握时，这一规则下却有 93.9%。当一份日志可以支撑多个结论时，事先固定分析才使比较可信。

### 调查与结构方程模型研究

横断调查测量自我报告的态度、知觉、动机、[[self-efficacy|自我效能]]与[[technology-acceptance-model|技术接受度]]，常用回归或结构方程模型（SEM/PLS-SEM）建模，以检验假设的关系与中介变量。这类研究在本知识库的语料中占主导，尤其在接受度、动机与心理机制问题上。

- **长处：**样本大；覆盖广、成本低；能检验心理机制的复杂中介模型；对研究难以观察的态度可行。
- **局限：**横断数据无法确立因果；共同方法／自我报告偏差；便利抽样限制可推广性；中介从协方差推断，而非操纵得出。

工具本身值得单独审视。一份问卷、访谈或日记能确立什么、不能确立什么——以及人们所说与他们所做之间已有记录的差距——汇集在[[self-report-measures|自我报告测量]]页上。

- **范例：**[[acceptance-ai-english-tools-2026]]、[[genai-motivation-engagement-2026]]、[[ai-autonomous-learning-accomplishment-2026]]、[[genai-over-reliance-learning-2026]]、[[ai-use-critical-thinking-medical-students-2026]]。

### 质性方法

访谈、焦点小组与主题分析，对学生和教师如何体验人工智能工具、他们赋予其何种意义，以及标准化测量所遗漏的张力与伤害，产出丰富的、带语境的叙述。[[hazra-safetutors-pedagogical-safety-2026|关于人工智能导学安全性的研究]]与[[ai-changing-teaching-workflows|人工智能如何改变教学工作流]]在很大程度上依赖质性证据。见专门的[[qualitative-research|质性研究]]概念页，其中有对质性方法的完整处理——主题分析、扎根理论、现象学／现象图式学、话语分析、观察与民族志、案例研究，以及访谈／焦点小组——每种都附本知识库的范例。

- **长处：**深刻的生态与概念洞察；浮现出意料之外的现象、风险与机制；对理论建构与研究信任、[[agency|自主性]]与作者身份等有争议的构念必不可少。
- **局限：**可推广性有限；具解释性且依赖研究者；样本小；对因果主张的支持较弱；结论难以跨研究综合。
- **范例：**[[hazra-safetutors-pedagogical-safety-2026]]、[[ai-changing-teaching-workflows]]、[[scaffolding-critical-engagement-genai-minority-students]]。

### 混合方法设计

混合方法研究把量化与质性两条线索结合起来——通常是顺序式的（如 QUAL→QUAN→qual）——使质性数据解释或语境化量化发现。[[genai-over-reliance-learning-2026|一项关于生成式人工智能与可持续学习的混合方法研究]]把三波调查与教育者访谈配对；[[t2i-competence-paradox-2026|能力悖论研究]]使用教师焦点小组、学生调查与后续访谈。

- **长处：**三角互证提高信心；量化的广度加质性的深度；能解释意外结果并在机制与量级之间搭桥。
- **局限：**复杂、资源密集、方法论要求高；若设计不慎，整合会很浅薄；仍继承每条线索的弱点（如自我报告）。
- **范例：**[[genai-over-reliance-learning-2026]]、[[t2i-competence-paradox-2026]]、[[same-ai-different-pathways]]、[[fouad-bentley-trust-utility-gap-physics-2026]]。

### 基于设计的研究（DBR）

DBR 在真实情境中迭代地设计、实施并精炼一项教育干预，在理论、设计与真实实践之间循环。它在本知识库中因开发人工智能学习环境与[[pedagogy|教学法]]模型而突出。见专门的[[design-based-research|基于设计的研究]]概念页，其中有完整的 DBR 循环、范例及其长处／局限。一个典范的人工智能教育范例是人工智能辅助的[[collaborative-learning|协作学习]]模型研究（[[ai-assisted-collaborative-learning-model-dbr|Putra 等]]），它运行了一个四阶段 DBR 循环——需求分析、模型设计、八周课堂实施与模型精炼——并对一个四阶段学习循环做迭代（问题识别 → 人工智能辅助协作探究 → 协作[[problem-solving|问题解决]] → 反思与呈现）。其他范例发展了[[ai-literacy|人工智能素养]][[teacher-education|教师培训]]（[[genai-literacy-training-teacher-education-dbr-2026]]），以及面向[[critical-thinking|批判性思维]]的[[generative-ai|生成式人工智能]][[scaffolding|脚手架]]（[[critical-thinking-genai-scaffolding]]）。

- **长处：**高生态效度与现实相关性；既产出可用的制品也产出理论；对真实课堂与演进中的人工智能工具的复杂性有响应性；很适合开发一个模型并依据真实的实施证据加以精炼。
- **局限：**内部效度弱（很少／没有对照组）；结论受情境约束、难以推广；时间线长；难以隔离造成某个结果的设计要素——DBR 展示的是可行性与改进，却无法把学习增益归因于某个具体机制。
- **范例：**[[ai-assisted-collaborative-learning-model-dbr]]、[[genai-literacy-training-teacher-education-dbr-2026]]、[[critical-thinking-genai-scaffolding]]、[[human-centered-ai-teacher-educators-2026]]。

DBR 用[[rct|实验]]的因果控制换取生态真实性与迭代精炼：它是回答“我们如何设计这个人工智能学习环境使其在实践中奏效？”这类问题的正确工具，其证据作为概念验证与设计指导最有说服力，而非作为因果效果。解读 DBR 的学习增益需要与其他设计同样的[[limitations-in-aied-research|谨慎]]——缺少无辅助的、受控的结果测量，增益可能反映[[learning-gains|学习增益]]条目下所记录的同一类“人工智能抬高性能”混淆。

### 系统综述与元分析

综述综合证据基础，而非开展新的实验。系统与范围综述用一套透明的协议检索、筛选、评估并综合一批研究；元分析则额外跨研究合并效应量，以产出加权汇总估计并检验调节变量。[[zerkouk-comprehensive-review-its-2025|一项全面的智能导学系统综述]]与[[genai-higher-education-systematic-review-2026|一项关于高等教育中生成式人工智能的系统综述]]是该方法的范例。

- **长处：**高效综合庞大而零散的文献；元分析给出合并效应估计并检测调节变量；对循证实践与识别缺口必不可少。
- **局限：**取决于所纳入研究的质量（垃圾进垃圾出）；发表偏差；异质的方法与结果测量使综合困难；鉴于人工智能变化之速而很快过时。
- **元研究告诫（2026）：**对人工智能教育综合基础的批评表明，许多早期元分析被构念不连贯、未解决的异质性、效应量之间未被处理的依赖性，以及无效的发表偏差评估所削弱——抬高了人工智能效应的头条数字（见[[bartos-ai-learning-meta-meta-analysis-2026]]、[[oneill-presumed-effective-meta-analysis-2026]]与[[weidlich-chatgpt-effect-search-cause-2025]]）。把合并的人工智能教育效应量视为上界。
- **范例：**[[zerkouk-comprehensive-review-its-2025]]、[[genai-higher-education-systematic-review-2026]]、[[chatgpt-critical-creative-thinking-review]]、[[zerkouk-comprehensive-review-its-2025]]、[[agentic-ai-education-scoping-review]]。

见专门的[[meta-analysis-systematic-review|元分析与系统综述]]概念页，其中有对教育中人工智能的系统综述与元分析的更完整处理——包括它们与一手设计的关系、PRISMA 报告，以及其长处与局限。

### 计算与基准评价

计算评价直接评估[[ai-technologies|人工智能系统]]——对照基准、真值标签或人类判断——而非研究人类学习者。这包括[[benchmark|基准]]和 LLM-as-judge 方法。这是与[[ai-ed-evaluation|人工智能教育评价]]最接近的方法（见下文的区别）。

- **长处：**快速、可扩展、可复现；支持模型与系统版本的正面比较；对系统开发与质量保证必不可少。
- **局限：**测量的是系统输出，而非学习——高基准准确率并不意味着教育有效性；真值与量表的质量本身有争议；可能漏掉人类感知到的教学质量。[[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian 与 Doroudi]]主张，LLM 的自然语言灵活性使纯技术指标不足，需要受人类启发的评价方法——[[simulating-students|模拟学生]]、人工智能[[teacher-role|教师]]测试，以及此前只用于人类被试的行为科学分析——来判断与学习相关的质量，并主张谨慎研究 LLM 可以生成对人类学习的洞察。
- **不相交的参与者，而非随机划分，才能防止检测器评价中的泄漏。**[[detecting-gpt-assisted-writing-stylometric-2026|Kumar 等（2026）]]用 90 位作者每人一篇未辅助和一篇改写样本构建了一个文体统计学的[[ai-detection|检测器]]，把每位参与者的所有窗口保持在同一个折中，使作者风格无法跨划分泄漏，并完全留出 18 人。随机森林达到 ROC-AUC 0.870、F1 0.842，但把 18 篇独立撰写的文档中的 4 篇标记为 GPT 辅助（22.2%）；作者把这个假阳性率视为与部署相关的结果，并把该模型定位为决策支持，而非自动化的学术不端筛查。
- **范例：**[[teachbench-llm-teaching-evaluation]]、[[jeon-isd-agent-bench-2026]]、[[ground-truth-reliability-aied]]、[[cong-confidence-asag-2026]]、[[drawedumath-vlm-struggling-students-2026]]。
- **自动化流水线的报告标准，与经过审计的基准。**两篇 2026 年论文把方法论责任延伸到研究之外。PRISMA-LLM 映射了 888 篇综述自动化论文和 14,726 条标注，发现 38.0% 的软件或产品论文没有报告任何评价，而 LLM 论文为 9.3%，且 52% 的仅正面 LLM 评价使一个高门槛关切未被满足；论文提出一种报告方式，指明自动化在综述工作流的何处发挥作用（[[prisma-llm-ai-assisted-systematic-reviews-2026]]）。对六个[[physics-education|物理]]基准的专家重评分审计在工具层面显示出同样的问题：250 个被审计的驳回中只有 12 个（4.80%）是真正的模型错误，而 143 个是题目缺陷、95 个是评分错误（[[frontier-models-physics-benchmark-audit-2026]]）。二者都主张，计算评价需要一份经过审计的误差预算，其结果才能被当作关于学习者或模型的发现来读。
- **把与人类一致性的核查内置到检测器开发中，而不是事后补。**[[baker-taylorizable-process-textual-detector-development-2026|Baker 及其同事（2026）]]为认知构念的文本检测器提出了一个七步流程——数据集选择、构念定义、编码手册起草、人类评分者间核查、类别精炼、检测器构建与应用——使在人工编码标签上的可靠性先于任何[[llm|LLM]]-as-judge 部署。它要求使用机会校正的一致性指标（Cohen's 或 Fleiss's κ、Krippendorff's α）、学生层面的交叉验证与亚组误差分析作为最低标准，并主张一旦此类[[educational-nlp|检测器]]进入部署平台，误测就会成为伤害的来源。

### 其他设计：纵向、案例与模拟研究

在几大主要家族之外，本知识库还使用**纵向**设计来长期追踪学习者（[[ai-lms-middle-school-longitudinal|一项纵向学习管理系统研究]]）、**案例与真实场景**研究来考察真实使用（[[ai-in-the-wild-college|对真实学生交互的大规模分析]]），以及**模拟**研究让 LLM 代替学生或病人（[[llm-student-simulation-teacher-insights|作为模拟学习者的 LLM]]、[[simulation|模拟]]）。它们用广度或控制换取真实性，以及接触那些否则难以观察的现象的途径。

### 专家共识方法：德尔菲技术

德尔菲方法是一种就某个尚无经验答案的问题确立**专家共识**的结构化技术——在本知识库中最常用于开发框架、能力清单和定义，使实践者与研究者能达成一致。在德尔菲研究中，一组专家回答连续几轮的问卷；每轮之后，把群体回答的匿名汇总反馈回去，专家修改答案直到群体收敛于一致（通常由一个预设的阈值定义，如 75%）。这是一种通过迭代的、匿名的协商，而非单次调查或投票，来建立构念效度与专业共识的方式。

- **长处：**在多元专家小组中产出共识，而无面对面群体压力（匿名性减少支配效应）；在没有经过验证的测量时，很适合定义构念、能力与框架；迭代轮次让专家精炼并收敛；在完整实验或大样本不可行处可行。
- **局限：**共识反映专家判断，而非经验证据——它确立的是一致，而非效应；结果取决于小组[[writing-education|构成]]与（主观的）共识阈值；多轮之下可能缓慢；单一小组的判断可能不具推广性。
- **范例：**[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL 框架研究]]（三轮、17 位专家，精炼人工智能素养能力层级）、[[hcap-human-centric-ai-pedagogy-framework-2026|HCAP 框架研究]]（三轮、30 位教师，定义 25 项人工智能教师能力）、[[ai-literacy-heptagon-2026|AI Literacy Heptagon]]（把专家意见／共识与一份遵循 PRISMA 的综述并用），以及。

德尔菲常与其他方法结合——例如，用专家共识验证一个框架（如 SAIL 与 HCAP），再通过基于设计的研究或调查研究加以检验或实施。它与质性及专家判断方法并列，并为基于框架的工具贡献[[educational-measurement|效度]]。

### 研究与评价：联系与区别

研究与评价密切相关但并不相同。**研究**追问关于人工智能如何影响学习的一般性问题——“脚手架能改善学习结果吗？”——旨在建构可迁移到具体研究之外的理论与证据。**评价**（见[[ai-ed-evaluation|人工智能教育评价]]）评估某个*具体*人工智能工具或系统是否奏效——是否准确、可靠、教学上站得住、合乎用途——对照基准、量表或相关方定义的标准。研究强调内部效度与推广；评价强调系统质量与本地决策。

边界是模糊的：基准研究是可以反哺研究的评价，而评价工具（量表、真值集、效度框架）依赖研究所澄清的[[educational-measurement|教育测量]]与[[assessment-validity|评估效度]]关切。反过来，关于什么支持学习的研究发现，应当影响人工智能工具如何被[[ai-ed-evaluation|评价]]。本知识库把二者视为互补：计算与基准评价（[[benchmark|基准]]、[[ai-ed-evaluation|人工智能教育评价]]）告诉我们一个人工智能系统在技术上是否健全，而效果与调查研究（[[rct|RCT]]）告诉我们它是否帮助人们学习。

### 在方法之间做选择

方法的选择跟随研究问题。因果效应问题偏向实验（[[rct|RCT]]）；机制与知觉问题偏向调查与质性工作；系统质量问题偏向计算评价（[[benchmark|基准]]、[[ai-ed-evaluation|人工智能教育评价]]）；综合问题偏向综述与元分析；设计问题偏向 DBR；而关于专家们认为一个构念、能力或框架应包含什么的问题，则偏向德尔菲技术这类专家共识方法。鉴于该领域的异质性与人工智能变化之速，本知识库的语料体现出一种朝向三角互证的刻意转向——把计算评价与效果、质性和专家共识证据结合起来，以判断一个工具是否奏效以及它是否帮助学习。

同样重要的是，带着对**横切性局限**的意识去阅读任何单一研究——它们影响整个人工智能教育研究：方法论约束、人工智能变化之快对出版之慢、可复现性与 FAIR 实践的缺口、对专有工具的依赖，以及薄弱或不加批判的理论运用。见[[limitations-in-aied-research|教育人工智能研究的局限]]。

## 对比主要研究传统

三大主要研究传统——[[quantitative-research|量化]]、[[qualitative-research|质性]]与实验——在它们能主张什么、牺牲什么，以及各自何时适用上有着根本差异。理解这些对比，对设计与阅读人工智能教育研究都必不可少。

### 每种传统确立什么

| 维度 | 量化／调查 | 质性 | 实验 |
|---|---|---|---|
| 核心问题 | 多少？有何关联？ | 它意味着什么？如何被体验？ | X 导致 Y 吗？ |
| 主要数据 | 数字、量表、自我报告 | 文字、观察、制品 | 各分配条件下的结果测量 |
| 推断目标 | 模式、相关、中介 | 意义、机制、类别 | 因果效应 |
| 内部效度 | 弱（相关性的） | 弱（无控制） | 强（随机分配） |
| 外部效度 | 强（大样本） | 有限（小、受情境约束） | 中等（受控条件） |
| 生态效度 | 中等 | 高 | 较低（人为条件） |

- **[[quantitative-research|量化研究]]**测量并建模变量之间的关系——调查、SEM/PLS-SEM、测量、纵向追踪。它提供广度、精度与可推广性，但无法从横断数据确立因果，并继承[[educational-measurement|测量]]的局限（包括自我报告偏差）。
- **[[qualitative-research|质性研究]]**解释意义与经验——访谈、焦点小组、主题分析、扎根理论、现象图式学、话语分析、观察／民族志、案例研究。它提供深度、机制与理论建构（见[[theory-development-aied|教育中人工智能的理论发展]]），但可推广性有限、对因果的支持薄弱。
- **实验与准实验设计**（见[[rct|RCT]]）通过随机分配或匹配比较来估计因果效应——内部效度的黄金标准，代价是成本、速度与生态效度。

### 测量与混合方法的关联

量化工作依赖[[educational-measurement|教育测量]]——对所研究构念可靠、有效的工具。质性工作揭示这些工具可能遗漏的机制与意义。**实验**工作估计一项干预是否*导致*工具所测量的结果。三者是互补的层次：工具量化构念，实验确立因果，质性工作解释数字背后的*如何与为何*。

[[mixed-methods-research|混合方法设计]]有意结合量化与质性线索，使它们的长处抵消彼此的弱点——量化的广度加质性的深度，而三角互证提高信心。

### 可用性与人机交互研究

一条独特的方法论线索——[[usability-research|可用性与人机交互研究]]——评价用户如何与一个人工智能系统交互：其可用性、有用性、可学性与用户体验，使用出声思考协议、结构化用户研究、访谈与观察。它与[[ai-ed-evaluation|人工智能教育评价]]最接近，回答的是一个*前提性*问题：一个教学上站得住的工具，如果不可用，仍然会失败。可用性研究与质性研究共享数据收集方法，但其目的在于评价一个制品，而非解释意义。

### 跨传统的长处与局限

- **量化／调查：**长处——样本大、覆盖广、检验复杂中介、高效。局限——无因果、自我报告偏差、便利抽样、工具可能测错了构念。
- **质性：**长处——深刻洞察、浮现意料之外的现象与伤害、对理论建构必不可少、让代表性不足的声音居于中心。局限——可推广性有限、依赖研究者、样本小、对因果的支持薄弱、难以综合。
- **实验：**长处——因果推断最强、结果测量干净、效应量估计。局限——成本高／慢、人为条件、快速变化的人工智能使结果过时、小样本功效不足、伦理约束。
- **混合方法：**长处——三角互证、广度加深度、解释意外结果。局限——复杂、资源密集、整合可能浅薄、继承每条线索的弱点。
- **可用性／人机交互：**长处——识别采用障碍、可操作的设计指导、快速且便宜。局限——不确立学习效应、样本小、自我报告的满意度可能误导。

在实践中，人工智能教育研究很少干净地落入某一传统。最强的证据做三角互证：一次计算或可用性评价确立一个系统能工作，一个实验确立它导致学习，量化工具测量构念，质性工作揭示机制与意义——共同回答一个工具*是否*帮助学习，以及*如何与为何*。

## 关联概念

- [[interpreting-and-applying-aied-research|解读并应用人工智能教育研究]]
- [[ai-ed-evaluation|人工智能教育评价]]
- [[rct|RCT]]
- [[benchmark|基准]]
- [[meta-analysis-systematic-review|元分析与系统综述]]
- [[ai-assisted-educational-research]] — 人工智能辅助的教育研究
- [[educational-measurement|教育测量]]
- [[assessment-validity|评估效度]]
- [[simulation|模拟]]
- [[ai-education|教育中的人工智能]]
- [[higher-ed|高等教育]]
- [[limitations-in-aied-research|教育人工智能研究的局限]]
- [[learning-gains|学习增益]]
- [[theory-development-aied]] — 教育中人工智能的理论发展
- [[qualitative-research]] — 质性研究
- [[quantitative-research]] — 量化研究
- [[mixed-methods-research]] — 混合方法研究
- [[design-based-research]] — 基于设计的研究
- [[usability-research]] — 可用性研究
- [[self-report-measures|自我报告测量]]
- [[learning-sciences|学习科学]]

## 关联文章

- [[ai-methodologies-science-education-research-2026]] — 一个七阶段的认识论迭代框架，用于反思人工智能方法学可能如何改变科学教育研究（Martin 等，2026）
- [[access-not-enough-ai-tutoring-2026]] — 仅有接入不够：人类支持改善对人工智能导学的参与
- [[genai-can-harm-teaching-rct-2026]] — 生成式人工智能可能损害教学
- [[genai-over-reliance-learning-2026]] — 从增强到过度依赖：一项混合方法研究
- [[acceptance-ai-english-tools-2026]] — 对人工智能辅助英语学习工具的接受度
- [[hazra-safetutors-pedagogical-safety-2026]] — 人工智能导学的安全与教学伤害
- [[zerkouk-comprehensive-review-its-2025]] — 智能导学系统全面综述
- [[ai-assisted-collaborative-learning-model-dbr]] — 面向人工智能辅助协作学习模型的基于设计的研究
- [[teachbench-llm-teaching-evaluation]] — TeachBench：评价 LLM 的教学能力
- [[ground-truth-reliability-aied]] — 现代化真值：迈向可靠与有效的四个转变
- [[llm-student-simulation-teacher-insights]] — LLM 能有效模拟人类学习者吗？
- [[raise-framework-ai-education-reporting-2026]] — RAISE：十个域 30 项条目，用于人工智能教育研究的透明报告（Allison，2026）
- [[ai-lms-middle-school-longitudinal]] — 人工智能整合的学习管理系统：一项纵向研究
- [[ai-in-the-wild-college]] — 真实场景中的人工智能：对真实交互的大规模分析
- [[same-ai-different-pathways]] — 同一人工智能，不同路径：解析机制
- [[tep-aied-model-reporting-2026]] — 以严谨方式报告人工智能教育研究的 TEP-AIED 模型（Hwang、Xie、Wah 与 Gasevic，2026）
- [[t2i-competence-paradox-2026]] — 能力悖论：艺术与设计中的文本到图像生成式人工智能
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — 教育中的 ChatGPT：一个寻找原因的效应
- [[bartos-ai-learning-meta-meta-analysis-2026]] — 人工智能对学习之效应的元元分析
- [[oneill-presumed-effective-meta-analysis-2026]] — 被假定的有效性：有缺陷的人工智能教育元分析审计
- [[synthetic-educational-data-structural-fidelity-2026]] — 保真度指标遗漏了什么：对合成教育数据的结构性检查
