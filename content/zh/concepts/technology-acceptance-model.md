---
title: 技术采纳模型
created: "2026-08-18T14:55:00-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, technology-acceptance-model]
audience: [learners]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/technology-acceptance-model
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

**技术采纳模型**是用来解释和预测个人与机构为何接受、采用并持续使用新的[[ai-technologies|技术]]的理论框架——在 AI 教育研究中，则是解释学生、教师和组织为何采用[[generative-ai|生成式 AI]]工具。这不是单一模型，而是一族理论，共同植根于信息系统与社会心理学研究，其中**技术接受模型（TAM）**是应用最广的。知识库把这些模型放在一起处理，因为 GenAI 采纳研究惯于把它们组合起来（TAM + UTAUT、TAM + TPB、UTAUT + ARCS），也因为它们的核心构念——感知有用性、感知易用性和社会影响——几乎在每一项教育领域的 AI 接纳研究中反复出现。

## 值得思考的问题

- 回想你采用某款新应用、工具或 AI 服务的一次经历，以及放弃某款的一次。真正驱动每次决定的是什么：它看起来多有用、多容易上手，还是你周围的人都在用它？你猜哪个因素最重要，而调查真的能捕捉到这一点吗？
- 一个流行的信念是"工具显然有用，人们就会用它。"你见过真正有用的技术仍然没有流行起来的局面，或者明显有限的技术照样传播开来的局面吗？客观有用性与实际采纳之间的落差该如何解释？
- TAM 之类的采纳框架是为相当简单的系统设计的。如果你用过生成式 AI，它在哪些方面不同于文字处理软件或[[edtech-platform|学习管理系统]]——为什么一个围绕"易用性"和"有用性"建立的模型，可能难以刻画人们与一个会回话的东西之间的关系？
- [[research-methods-aied|研究者]]常说，对 AI 采纳而言，感知风险和信任的作用比预期小。在读下去之前，你的预测是什么：学生采纳 AI 是因为信任它、不顾风险，还是这些关切其实在便利和社会压力面前微不足道？
- 本页主张，采纳框架把使用工具视为一次性决定，而有效使用可能是持续的判断。在你自己或你学生的实践中，"选择使用 AI"和"不断决定如何用好 AI"之间的界线在哪里显得模糊——如果我们测量的是后者，而不是单纯的采用率，会发生什么变化？
- 一些研究者把学习者聚类为不同的"采纳画像"，而不是假定一个模型放之四海而皆准。你在自己的学习者、同事或学生身上看到哪些差异，是单一的平均化采纳模型可能掩盖的——这些差异又如何能塑造你支持他们的方式？

## 引言

**关于 AI 采纳的[[meta-analysis-systematic-review|元分析]]证据。** 一项针对高等教育学生 AI 采纳的[[teo-ai-adoption-tertiary-meta-analysis-2026|元分析]]（233 个相关、32 项研究、N = 16,977）发现，个体（r = 0.57）、情境（r = 0.53）和技术（r = 0.50）因素均呈中等正相关，其中使用意图是最强的预测因子（r = 0.64），而感知风险/信任弱于预期。其核心批评是，该领域**过度依赖早于现代智能系统出现的传统 TAM/UTAUT 框架**，而忽视了拟人化和伦理等 AI 特有因素——并主张这些缺口对推进理论和循证政策都很重要。

## 模型家族

### 技术接受模型（TAM）
Davis（1989）提出的 TAM 通过两个核心信念解释采纳——**感知有用性（PU）**和**感知易用性（PEOU）**——它们塑造用户的**态度（ATT）**，再影响**行为意向（BI）**，最终影响实际使用。植根于信息系统理论（改编自理性行为理论），TAM 已成为教育中[[generative-ai|GenAI]]采纳的主导框架。在教育 GenAI 研究中，它常与[[ai-literacy]]、[[trust]]、社会影响、[[self-determination-theory|自我决定]]和**批判性使用**结合扩展，以捕捉超出简单采用的采纳复杂性。

### UTAUT / UTAUT2 / UTAUT3
**技术接受与使用统一理论**把 TAM 与八种先前的模型整合为四个核心决定因素——绩效期望、努力期望、社会影响和便利条件（UTAUT2 增加了享乐动机、价格价值和习惯；UTAUT3 增加了个人创新性）。知识库在教师和学生群体中应用 UTAUT：[[mathematics-teachers-chatbot-motivation-2026|奥地利中学数学教师]]（448 位教师，UTAUT）、[[pre-service-science-teachers-ai-perceptions-2026|加纳的职前科学教师]]（UTAUT + TPB）以及[[tian-genai-learning-adoption-pathways-2026|莱索托的学生]]（UTAUT3 + ARCS，使用 PLS-SEM 与 fsQCA）。[[jacome-vasconez-chatgpt-adoption-xai-2026|Jácome-Vásconez 等人]]为 522 名大学生扩展了 UTAUT2，加入可解释 AI（Random Forest、SHAP、NCA、IPMA、K-Means），发现**习惯**是 ChatGPT 使用意图的最强预测因子，并表明**努力期望是必要条件而非线性驱动因素**——这一结果只有在 XAI 补充回归分析时才可见。

### 计划行为理论（TPB）
TPB 通过态度、主观规范和感知行为控制来解释意向。它在 AI 采纳研究中常与 TAM/UTAUT 配对——例如[[genai-chatgpt-adoption-ethics-students-2026|Rizun 等人]]把 TAM、TPB、UTAUT 与 FATE（[[bias-mitigation|公平]]、问责、透明、伦理）框架整合起来，为学生 ChatGPT 采纳的行为与[[ethics|伦理]]驱动因素建模。

采纳研究通常止于意向；一项 TPB 扩展研究转而测量了"有真实意向却仍拖延"，发现感知行为控制是 GenAI 辅助学习拖延的最强负向预测因子（β = −0.331），横跨 1,243 名本科生，且意向—拖延的联系只在中等至高等的学习 GenAI 焦虑水平下显著（[[genai-learning-procrastination-planned-behavior-2026|Li 等人（2026）]]）。

### 创新扩散（DOI）
Rogers 的 DOI 理论把采纳解释为一个社会过程，创新随时间在人群中扩散，强调创新属性（相对优势、兼容性、复杂性、可试用性、可观察性）和采纳者类别。它出现在知识库的[[governance|机构]]层面分析中，例如[[alrahmi-org-drivers-ai-adoption-he-2026|Al-Rahmi 等人]]把技术—组织—环境（TOE）框架与 DOI 结合，为沙特高校的组织 AI 采纳建模。

### 技术—组织—环境（TOE）
TOE 把采纳框定为受技术、组织和环境情境塑造——作为个体层面 TAM/UTAUT 的补充，用于研究机构采纳（见[[alrahmi-org-drivers-ai-adoption-he-2026]]）。

## 在知识库中的应用

采纳模型在知识库中被用于为学生和[[teacher-role|教师]]采用 AI 工具建模：

- **批判性使用扩展：**[[tam-critical-use-genai-engineering-2026|Nguyen 等人]]为工程/计算机专业学生扩展了带*批判性使用*的 TAM，发现态度和批判性使用直接预测意向——且批判性使用能防范[[cognitive-offloading|过度依赖]]。
- **统一的社会认知模型：**[[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]]为孟加拉国工程专业学生整合 TAM 与 UTAUT（解释了 64% 的使用方差）。
- **以人为中心的画像：**不同于以变量为中心的模型，[[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed]]对 GenAI 采纳画像进行聚类，而[[chen-preservice-teachers-chatgpt-lpa-2026|Chen 等人]]用潜在剖面分析在师范生中识别出四种 ChatGPT 接纳画像——显示出该领域已超越单一模型、线性解释的做法。
- **跨文化验证：**[[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno 等人]]在瑞士与中国之间跨文化验证了与采纳相关的动机构念。
- **心理相关因素：**[[acceptance-ai-english-tools-2026|Wu 等人]]基于 TAM，把动机、[[self-efficacy]]、焦虑和风险感知与对 AI 辅助英语学习的接纳联系起来。
- **[[regulation|调节]]能力批评：**[[ai-anxiety-strategic-regulation-writing-2026|Kim]]主张，以采纳为中心的 TAM 模型把使用视为稳定决定，而有效的 AI 使用是持续的判断、修改与选择性吸收过程——把[[ai-literacy]]重新框定为调节能力和[[critical-thinking]]，而非接纳。

把[[tpack|TPACK]]家族的能力与计划行为理论等信念框架并列为平行预测因子，会招致构念重叠，并使能力、态度和控制之间的因果顺序悬而未决；能力—决策模型则把 AI-TPACK 能力置于态度与感知行为控制的上游（[[capability-decision-model-teacher-readiness-2026|Mnguni（2026）]]）。

- **ChatGPT 采纳的机器学习决定因素：**一项探索性机器学习方法考察了学生的感知与人口学特征如何关联到其学术性 ChatGPT 使用意向，用 SHAP 分析识别关键的学习相关构念——以教育意义优先于算法性能最大化（[[determinants-chatgpt-use-higher-education-2026]]）。

- **[[explainable-ai|可解释性]]与领域相关性作为教师接纳的杠杆：**把自动化信任理论改造用于教师对 AI 推荐的接纳，[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor 等人（2025）]]发现，可理解性（由可解释 AI 提升）与对一个 AI 分组工具的信任和接纳都正相关，且[[curriculum-design|课程]]语言中的领域驱动解释在所有三项指标上都胜过数据驱动的特征重要性解释。接纳还受到[[pedagogy|教学]]契合度与减负潜力的驱动——这些情境因素超出了标准 TAM/UTAUT 构念很少捕捉的范围，强化了用语境和可解释性扩展采纳模型的理由。
- **在教学材料层面测量的接纳（2026）。**[[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu（2026）]]为两套面向不同年龄段的 AI 素养指南书操作化了绩效期望、努力期望、感知趣味性和行为意向，被试为 794 名[[k-12]]学生和 37 位教师，用分样本 EFA 与 CFA 验证了四因子结构，并支持跨 9-12 岁和 13-18 岁版本的测量等价性。年轻学习者在全部四个构念上报告更高水平，而趣味性在两个群体中都是意向最强的相关因素——在年轻组中，标准化的趣味性到意向系数超过 1.00，两个构念之间的 HTMT 为 .950。作者把这解读为构念重叠与可能的抑制，而非巨大效应，并提醒：把接纳量表施加于材料时，可能产出经验上纠缠在一起的因子，使结构解释复杂化。

## 局限与扩展

TAM 的认知取向也未能充分捕捉 AI 使用中的情绪与关系维度。一项针对护生和护理教师的[[akbaba-nursing-ai-experiences-tam-2026|质性研究]]发现，除了四种经典 TAM 构念之外，参与者——主要是学生——把 AI 描述为心理社会支持的来源：压力中的情绪慰藉，以及一个供反思的保密空间。这把感知有用性扩展到高压力[[professional-training|专业训练]]中的[[well-being]]，提示采纳模型应当关注情感与社会心理因素，而不只是工具性效用。

**[[agency|自主性]]感知与风险规避作为工具特定的扩展。** 一项对 27 个国家和地区 287 位有 GenAI 经验的教师的[[mixed-methods-research|混合方法]]调查（[[dai-genai-frenemy-teaching-autonomy-2026|Dai 等人（2026）]]）朝模型家族几乎未曾触及的方向扩展 TAM：工具自身的被感知*自主性*。在经典构念之外加入被感知的人工自主性（教师相信 GenAI 能多独立地执行一项被指派的指令性任务）和风险规避之后，他们精炼后的结构模型解释了行为意向 79.8% 的方差（χ²(97) = 202.597, CFI =.963, TLI =.954, RMSEA =.062, SRMR =.041），其中感知有用性再次占主导（PU → BI β =.832, p <.001）、易用性滋养有用性（PEU → PU β =.479）。有启发性的结果是那些迂回之处。人工自主性并不直接作用于意向（β =.026, ns），而是经由有用性起作用（AA → PU β =.188, p <.001；间接 AA → PU → BI =.156, 95% CI [.082,.240]）——把 GenAI 看得更有能力的教师，觉得它更有用，而不是更值得立即采用。风险规避降低了意向（RA → BI β = −.163, p <.001）却没有降低感知有用性（RA → PU ns），因为教师的关切集中在*学生的*使用上——作弊与[[academic-integrity|诚信]]、被削弱的基础知识和高阶思维、[[hallucination-risk|幻觉]]、人际互动减少，以及伦理、法律和[[equity-in-ai-education|公平]]风险——而不是他们自己的使用。易用性总体不显著（PEU → BI β =.068），但在 225 位真正在教学里用过 AI 的教师中显著（β =.138, p <.05），这是"努力只有在真实遭遇之后才被登记"的熟悉模式；态度因与意向的相关（r =.929）突破了区分效度而不得不剔除。教师们把 GenAI 置于半自主水平（130 人在 Level 2"教师协助"；94 人在 Level 3"部分……"；另有 Level 6），并坚持采纳决定要逐一按个案作出。TAM 依然很好地预测意向，但面向教师的 AI 中，真正起作用的构念是工具特定的：工具显得多自主，风险又附着在谁的使用上。作者的"亦敌亦友（frenemy）"标签——作为支持工具受重视，作为自主代理被怀疑——正是上面编目的学生侧扩展的教师侧对应物。

**风险感知作为维度特定的扩展。** 一项针对 814 名中国大学生的调查（[[risk-perception-genai-perceived-benefits-2026|Du, Ning, Shi & Chen（2026）]]）把认知评价理论和保护动机理论折入 TAM/UTAUT2，问的不是学生是否采用[[generative-ai|生成式 AI]]，而是他们从中获得什么。模型家族关于风险一致地抑制采纳的假设并未成立：风险感知分裂为信息、安全、技术、[[ethics|伦理]]和法律等维度，它们把利益推向相反方向。安全风险——一种学生相信自己能通过[[privacy|隐私实践]]管理的威胁——与感知到的学业帮助和技能发展*正*相关，与问题中心应对一致；而信息风险——学习者无法轻易核实——经由回避侵蚀了心理与情绪支持、日常生活和休闲方面的利益。阈值分析进一步显示，效应在维度特定的临界点之外会改变符号，而使用经验独立起作用：使用 GenAI 超过一年的学生在四个领域报告更高利益。对采纳研究的实践含义是，"感知风险"这个构念太粗，不足以建模——可控性，而非风险本身的存在，才是决定学生投入还是退缩的关键。

风险与使用的联系还取决于系统：在实施了相关题项的 49 个 TALIS 2024 系统中，感知 AI 效用与 AI 使用在全部 49 个系统中正相关，而感知风险在 40 个系统中负相关、在 9 个中正相关（[[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin（2026）]]）。

## 关联概念

- [[business-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ethics]]
- [[trust]]
- [[cognitive-offloading]]
- [[self-determination-theory]]
- [[research-methods-aied]]
- [[student-modeling]]
- [[framing-ai-use-for-students]]

## 关联文章
- [[dai-genai-frenemy-teaching-autonomy-2026]] — GenAI 作为"亦敌亦友"：人工自主性与风险规避为教师扩展了 TAM（Dai 等人 2026）
- [[akbaba-nursing-ai-experiences-tam-2026]] — 护理领域的 AI 体验；TAM 的心理社会扩展
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — 经由聚类得到的 GenAI 采纳画像
- [[tian-genai-learning-adoption-pathways-2026]] — GenAI 采纳中的对称与非对称路径（UTAUT3 + ARCS）
- [[lee-wu-gender-motivation-genai-achievement-2026]] — 按性别与动机区分的 GenAI 投入差异
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — 高等教育中组织 AI 采纳的 TOE + DOI 模型
- [[tam-critical-use-genai-engineering-2026]] — 为工程/计算机专业学生加入批判性使用的扩展 TAM
- [[socio-cognitive-genai-adoption-engineering-2026]] — 用于工程教育的统一社会认知模型（TAM + UTAUT）
- [[ai-anxiety-strategic-regulation-writing-2026]] — 从 AI 焦虑到策略性调节
- [[genai-reliance-types-scale]] — GenAI 依赖类型量表
- [[llm-reliance-types-undergrad]] — 本科生的 LLM 依赖类型
- [[acceptance-ai-english-tools-2026]] — 对 AI 英语工具的接纳
- [[genai-chatgpt-adoption-ethics-students-2026]] — 学生 ChatGPT 采纳的行为与伦理驱动因素
- [[mathematics-teachers-chatbot-motivation-2026]] — UTAUT 与教师聊天机器人动机
- [[pre-service-science-teachers-ai-perceptions-2026]] — 加纳职前科学教师的 UTAUT + TPB
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — 师范生 ChatGPT 接纳画像（LPA）
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — AI 采纳因素的元分析；对 TAM/UTAUT 的批评
- [[determinants-chatgpt-use-higher-education-2026]] — 高等教育中未来 ChatGPT 使用的 ML/SHAP 决定因素
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — 以 XAI 增强的 UTAUT2：习惯为最强预测因子，四种采纳画像（Jácome-Vásconez 等人 2026）
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — 面向分年龄段 AI 素养指南书的材料层面 PE/EE/趣味性/意向模型，记录在案的趣味性—意向构念重叠
- [[risk-perception-genai-perceived-benefits-2026]] — 折入 TAM/UTAUT2 的 CAT + PMT：维度特定且非单调的风险对感知 GenAI 利益的影响（Du, Ning, Shi & Chen 2026）

- [[capability-decision-model-teacher-readiness-2026]] — 替代"把 TPACK 能力硬接到计划行为理论采纳模型上"的有序方案
- [[teachers-ai-belief-profiles-talis-2024-2026]] — 49 个系统中感知 AI 效用与风险的以人为中心 TALIS 2024 画像
- [[genai-learning-procrastination-planned-behavior-2026]] — 测量 GenAI 辅助学习拖延及焦虑对意向—拖延联系之调节的 TPB 扩展
