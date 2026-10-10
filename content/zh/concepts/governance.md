---
title: AI 治理
created: "2026-08-13T18:17:22-04:00"
updated: "2026-10-09T19:02:31-04:00"
type: concept
foundations: [ai-education]
ethics: [ethics, privacy]
connected_faqs: [ai-guidance-children-under-13, institutional-ai-policy]
level: [higher ed]
confidence: high
institutions: [change-management, educational-policy-ai, regulation]
connected_resources: [institutional-ai-readiness-pack, campus-ai-framework]
translation_of: concepts/governance
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **AI 治理（AI governance）** — 引导 [[ai-education|教育中的人工智能]]负责任地设计、部署与使用的框架、政策、机构结构与规范。治理既涵盖正式的机构机制（AI 指导小组、学术诚信与可接受使用政策、伦理审查），也涵盖非正式规范（教师指南、专业发展、[[reducing-ai-misuse|负责任使用 AI]]的文化）。在 AI 时代，有效的治理是合乎伦理的、[[equity-in-ai-education|公平的]]、可持续的 GenAI 采纳的前提——它决定 AI 是被透明地、可问责地整合，还是以加深不平等的被动方式被采纳。

## 值得思考的问题

- 如果你的机构在纸面上有一份 AI 政策，却没有清晰的执行、更新或传达流程，那真的是治理吗？是什么把"存在的规定"与"真正被治理的规定"区分开？
- 一项研究中的学生说，他们的大学没有清晰的 AI 政策，而这塑造了他们如何使用 AI。政策的模糊性可能如何影响学生对"可接受使用"的判断——机构是否应该担心把这种协商留给个人？
- 本页区分基于检测的治理（盯住 AI 使用）与基于设计的治理（重新设计考核，使 AI 使用被预期并被声明）。你自己的考核实践偏向哪一种，各自有何权衡？
- 治理被描述为在国家、机构与课堂层面运作。挑一条你所在环境里的 AI 规则：是谁定的，如何传达与执行，这些层面对齐得如何？
- 一个框架把 AI 治理重新框定为维持共享专长的集体行动问题——"认知公地（cognitive commons）"。保护一个职业的集体知识池，如何改变你对 AI 治理的思考，相对于只是规制一种工具？
- 本页警告，强制性 AI 使用声明在显得惩罚性或模糊时会失效。你何时见过一条合规规则因为人们不理解或不信任而反噬——它教给你关于治理的什么？

## 引言

教育中的 AI 治理日益紧迫，因为 [[generative-ai|生成式 AI]]带来了新的认识论、伦理与组织挑战：它动摇关于知识生产、[[agency|学习者能动性]]、[[assessment]] 效度以及 [[teacher-role|教育者作为认识权威的角色]]的假设。治理处理 [[academic-integrity|学术诚信]]问题（什么算可接受的 AI 使用）、[[privacy|数据隐私]]与安全、[[bias-mitigation|算法偏见]]与公平、[[explainable-ai|透明度]]与问责，以及 AI 采纳与机构使命和价值的一致。知识库 [[research-methods-aied|研究]]中一个反复出现的发现是，**机构治理常常滞后**——许多机构缺乏清晰、统一的 AI 政策，把可接受使用的协商留给学生与教师自行完成。

- **零样本治理作为平台化的结构性条件。** [[perrotta-zero-shot-governance-2026|Perrotta（2026）]]通过对 **Redbox** 的代码级分析，发展出**零样本治理（zero-shot governance）**的概念——即领域无关的 [[generative-ai|生成式 AI]]介入政策决策。Redbox 是一个已停用的英国公务员原型，建立在现成的 [[llm|LLM]] 之上。阅读其架构（一套不可见的系统提示 + 一层薄薄的 Python 封装，套在 [[rag]] retrieve→format→generate 流水线和与供应商无关的云栈之上），该文论证，基础模型的通用性本质是平台化的一种*结构性特征*，可以被缓解但永不可能排除：[[agentic-ai|智能体式 AI]]并不会打断平台的垄断性、食利逻辑，而产生新奇事物的同一套概率机制也产出 [[hallucination-risk|幻觉]]。对治理而言，其含义是：对通用 AI 的监督必须把异常输出当作一种不可消除、只可缓解的风险，而非一个可修复的 bug——这一告诫同样适用于 [[educational-policy-ai|教育政策]]推理。
- **[[baroudi-anticipatory-governance-ai-higher-ed-2026|Baroudi]]** [[meta-analysis-systematic-review|范围综述]]以前瞻性治理与领导力视角框定高等教育中的 AI 治理。
- **政策的共同设计：** [[guided-inquiry-genai-course-policy-2026|Hingle 与 Johri]]展示了一个引导式探究活动如何让学生共同设计一份 GenAI 课程政策，从而浮现出学生的价值观——优先重视培训、标准化的 [[ai-use-disclosure|披露]]程序、更强的机构支持，以及更多参与决策。这把 [[pedagogical-partnerships|学生定位为治理的伙伴]]而非被动对象，以自下而上的学生声音补充机构层面的政策。

- **技术解决主义陷阱与政策赤字：** 一项对 65 项 AI × [[social-emotional-learning|社会情感学习]]研究的系统综述（[[policy-deficit-ai-sel-2026|Tran、Liu 与 Nguyen 2026]]）发现，研究常把技术潜力放在前台，而对社会负责实施所需的机构条件规定不足——一种"技术解决主义"陷阱。作者把政策 [[student-engagement|参与]]与发表场所挂钩，并提出一个"WH 问题"框架，使治理含义对行为者具体化，呼应了知识库关于"机构治理滞后于 AI 采纳"的更广发现。

## AI 治理在研究中如何出现

- **机构层面规模化采纳：** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|开放大学的 AIDA 研究]]展示一个机构如何设计、实施与评估一个 GenAI 助手，并识别出，负责任的系统级部署需要治理结构（AI 指导小组）、高层领导的支持，以及与机构战略的对齐——而不仅是技术能力。
- **领导力与系统性变革：** [[leveraging-complex-systems-leading-for-transformative-change|SPARK]]在复杂性领导力理论内框定治理，论证领导者必须在行政稳定与涌现式创新之间取得平衡，把治理机制（政策、考核制度、问责框架）嵌入其中，使自适应空间中的创新得以持续与规模化。
- **政策模糊性与学生体验：** [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|学生与 GenAI 的互动]]研究发现，23 名学生中有 12 名指出缺乏明确的机构 AI 政策（"大学还没有一份清晰统一的政策"），论证治理模糊塑造了学生的实践、规范与 [[self-regulated-learning|自我调节]]——支持向透明的机构指导转变。
- **AI 素养作为一种治理能力（"第 18 项 SDG"）：** [[ai-literacy-sdg-governance-framework-2026|Islam、Morshed 与 Islam（2026）]]把 AI 素养重新概念化为一种系统性的治理机制而非课堂技能，提出一个六级 AIRE 分类（Recognize → Comprehend → Apply → Analyze → Integrate → Govern），以伦理综合与战略远见扩展 Bloom 层级，以及一个把素养能力映射到全部十七项 [[sustainability|可持续发展目标]]上的 AI–SDG Nexus。把 AI 素养框定为一种"第 18 项 SDG"的启发式——一种把学习导入治理与可持续发展的横贯能力——该研究对 300 名专业人员的调查发现，治理素养是 AI–SDG 关联意识最强的预测因子（β = 0.64，与关联意识 r = 0.67），并识别出伦理推理与反思性思考是可信 AI 使用最强的预测因子。这把机构治理与公共 [[ai-literacy]] 的培养相连，呼应知识库的发现：负责任的 AI 对齐需要 [[stakeholders|政策制定者]]与能批判性解读算法系统的公民，而非仅面向合规的技术控制。
- **学术诚信与考核：**治理是机构处理 AI 相关 [[academic-integrity]] 关切与重新设计 [[assessment]] 的核心——从禁止/policing 转向指导、AI 素养与面向过程的设计，如 [[student-rationalization-ai-writing|学生合理化]]与 [[beyond-detection-authentic-assessment-ai-2025|真实性考核重新设计]]研究所示。
- **成文治理的工具组合：** [[institutional-ai-policy-health-informatics-2026|Eldredge et al.（2026）]]审计了美国全部 48 个 CAHIIM 认证的健康信息学与健康信息管理硕士项目的 AI 相关文件。48 个中有 40 个（83%）至少有一份公开文件，而在所分析的 40 份文件中，治理主要实现为指导而非具约束力的规则：21 份指南（53%）、9 份信息文件（23%）、仅 7 份正式政策（18%）。多数文件同时面向教师与学生（20 份，51%），而非仅面向学生（6 份，15%），且政策类型与受众都未随授课方式变化（Fisher 精确检验 P = .85 与 P = .71），说明工具组合跟随的是机构习惯，而非线上、校园或混合项目的要求。内容集中于学术诚信、负责任 AI 使用与学生行为，几乎没有指导覆盖 AI 在应用学习、研究与模拟环境中的使用，而这恰是课程与数据治理关切交汇之处。作者还报告，区域认证机构提供了语料的大部分（Higher Learning Commission n = 14、SACSCOC n = 13，合计约 60%，无一份来自 WASC 区域），并论证认证是降低项目间差异的最有利外部杠杆。
- **治理作为一种分布式支持生态：** [[qian-governing-genai-higher-ed-policy-2026|Qian（2026）]]对美国最具创新性的 50 所大学的 AI 指导做了编码，发现治理实现为解读与支持，而非规则：50 所中只有 6 所把其主页框定为"政策"，50 所中 33 所把教师定位为把机构预期翻译成课程规则的首要人物，而做这件事的支持聚在四个互锁单元中——教学与学习中心提供大纲语言与课程政策菜单、图书馆设定引用与来源标准、IT 与企业治理办公室运行数据分类规则与经审定的工具栈、学术诚信办公室承担正当程序与教育优先的补救。Qian 论证，减少模糊性的是 [[scaffolding]]，而非立场，并报告其分布不均：50 所机构中有 33 所发布了大纲或课程政策材料，而只有 4 所把面向学生的指导放在前台。这是上述工具组合发现的组织形态——治理能力位于单元而非文件之中。
- **伦理、隐私与偏见：**治理机制把常被认识却未被执行的原则（[[ethics]]、[[privacy]]、[[bias-mitigation]]）落到实处，连接到负责任 AI 与教育中的 [[regulation|监管]]争论。
- **一个治理的价值/规范矩阵。** [[agarwal-ethical-values-norms-aied-2026|Agarwal et al.（2026）]]，一项对 25 篇文章的 [[meta-analysis-systematic-review|系统综述]]，把 AIED 伦理整合为六项主要伦理价值（非歧视、数据管理、[[human-in-the-loop-ai|人的监督]]、善意、可解释性、教育适配性），并把从文献中抽取的伦理规范映射到一张"行为者 × 价值"矩阵上。该映射把规范变成实现特定价值的可操作规则，为构建详细的 AIED 伦理框架与规制奠定基础——给教育机构、开发者与监管者提供了可实施的具体规范。关于人的监督的规范聚集于教育机构与终端用户，教育适配性规范聚集于教育机构与监管者，而面向监管者的善意规范在数量上远多于其他任何一组（九项），表明监管者通过政策与立法确保 AIED 使学习者受益的角色。

### 治理教育

AI 治理运作于本知识库一并处理的两个层面：治理 AI 使用的*机构规则*（政策、可接受使用框架、[[assessment]] 与声明要求），以及*关于这些规则的教育*（让人们准备好驾驭它们）。没有教育的治理，有沦为空文或不透明的风险；没有治理的教育则缺乏牙齿。这一脉络的研究包括 [[genai-policies-higher-ed-computing|机构 GenAI 政策分析]]、[[genai-declaration-frameworks-higher-education|AI 声明框架]]、[[genai-assessment-governance|考核治理]]、[[ai-uk-higher-education-policy-2026|英国 AI 高等教育政策]]，以及把治理置于更广政策图景中的 [[raza-farooq-aied-review-2020-2025|综合 AIED 综述]]。

### 考核治理

AI 治理的一个核心场域是**机构如何治理考核**——决定什么算可接受 AI 使用、AI 辅助工作如何被声明、总结性测量如何被保障的规则。这包括 [[ai-use-disclosure|AI 使用与披露声明]]的设计与执行：研究显示，强制性声明在显得惩罚性或模糊时失效（[[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves 2025]]、[[vetter-hidden-cost-disclosure-genai-2026|Vetter et al. 2026]]），而清晰、一致、基于信任的政策才是真正促进披露的东西。知识库的研究区分*基于检测的*治理（盯住 AI 使用，例如通过 [[ai-detection]]）与*基于设计的*治理（重新设计 [[summative-assessment|总结性]]与 [[authentic-assessment|真实性]]考核，使 AI 使用被预期、声明与审视）。[[genai-assessment-governance|生成式 AI 在考核中的循证治理]]与 [[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]]论证，治理必须把任何检测与考核重新设计配对，而对抗 AI 的总结性形式（口试、监考/闭卷测量、代码评审面试——见 [[summative-assessment]]）之选择本身就是一个治理决策。大规模证据 [[stromberg-generative-ai-learning-penalty-secondary-2026|（Strömberg、Lei 与 Wu 2026）]]强调了治理总结性测量的重要性，因为不受治理的家庭作业可能被 AI 抬高，而实际学习下降。一项禁止的范围本身就是一个治理决策：[[wright-transcription-not-generation-2026|Wright（2026）]]显示，禁止"生成式 AI"而不区分生成与格式转换的规则，会捕获辅助转录工具，把政策的误用变成不当行为指控，加重残障与 [[equity-in-ai-education|公平]]-暴露学生的负担——这是一种治理失败，[[legal-issues-and-risks|法律问题与风险]]把它当作平等问题来对待的程度，不亚于当作诚信问题。

[[ai-refusal-higher-education-diagnostic-non-use-2026|Zagami（2026）]]从高利害场域收集的证据，指向的是不均的治理，而非单纯的拒绝：考核、招生与纪律程序中的部分采纳与不完整政策，机构延迟作为一种治理姿态而非失败运作。机构的任务是：把拒绝理解得足够好，以改善治理——问哪些决策需要人工复核、哪些系统需要审计、哪些使用需要披露、哪些采购选择需要公开论证。[[weidlich-inference-at-risk-assessment-validity-2026|Weidlich（2026）]]补充了考核层面的推论：检测器分数是条件性的概率信号，其本身无法确立不当行为，于是以检测为中心的治理不足以支撑考核主张。

### 跨层面治理

AI 治理运作于多个层面——从**国家/监管**（政府政策、OECD 框架、各州 AI 指南）到**机构**（大学政策、AI 指导小组、伦理审查委员会）再到**课堂**（教师指南、大纲陈述、作业设计）。有效的治理对齐这些层面：国家框架设定预期，机构把它们翻译成政策与支持结构，教育者以建立学生 AI 素养与能动性的方式落实它们。知识库的研究强调，治理不仅仅是限制，而是为负责任、公平、支持学习的 AI 整合创造条件——包括 [[educational-development|教师发展]]、透明指导与持续评估。
**同样的行为，不同的裁决。** [[genai-governance-australian-higher-ed-2026|Poudyal（2026）]]把 15 个标准化的学生使用情境应用于 20 所澳大利亚大学的公开政策环境，产出 300 项分类：40.0% 明确禁止，32.3% 潜在违规，9.0% 有条件许可，18.7% 不确定——没有一项达到"明确许可"的门槛。具约束力的文书在 100 种组合上对生成式 AI 保持沉默，而指导文件在 88 处做出解决；被披露的语言改写与一段 AI 起草的段落产生了最高的跨大学分歧，而一项明确的考核禁止则取得一致。在人们假设上述各层面对齐之处，这项研究测量了它们分歧的程度，并把操作性边界定位在指导而非具约束力的政策之中。

**教师治理与刻意审查的理由。** 在上述各层面对齐之处，有些部门是通过共享治理抵达的。[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski 与 Hurley（2025）]]把 [[legal-education|法学院]]描述为正是这一原因的硬案例：美国法学院教师对课程标准握有异常的个人权威，于是政策必须与他们共建，而非向他们宣布；多数写下禁止性规则的学校，也为个别教师保留了裁量权，并承诺随技术演进而修订。他们的建议——按设计保留弹性、定期审查、主动培训，以及通过信息共享自我规制，而非等待认证机构来规定政策——把治理描述为一个持续的过程而非一份文件，[[crompton-governing-genai-higher-ed-delphi-2026|Delphi 共识]]在建议排定的审查周期与一个常设的多学科委员会时，提出了同样的观点。

在机构范围上，**AIGEM 框架**（[[tan-aigem-ai-educational-management-2026|Tan et al. 2026]]）把负责任 AI 定位为教育管理的一种战略性组织能力，整合 AI 战略领导力、负责任治理、决策智能、人-AI 协同智能、能力发展与可持续价值创造——并把负责任实施与 SDG 相连。它强调，治理不仅是覆盖在教学之上的一层合规，而是教育机构的一项执行职能。

### 与相关概念的关联

AI 治理与 [[ethics]]（它所落实的原则）、[[higher-ed]]（机构语境）、[[privacy]] 与 [[bias-mitigation]]（具体治理关切）、[[academic-integrity]]（一个首要治理场域）相连。它对 [[change-management|机构变革]]与负责任 AI 至关重要，并与 [[ai-literacy]]（治理支持批判性、知情使用的发展）相交。它还与 [[learning-analytics]]（数据治理）和 [[student-experience]]（治理塑造学生如何 navigate 可接受使用）相连。

**治理认知公地。** 认知公地框架（[[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]）把专长再生框定为一个职业层面的集体行动问题，需要 Ostrom 式治理（边界界定、监督、分级制裁、集体选择）。因此 AI 治理不仅是关于工具规制，也是关于维持各职业所需的共享专长池——在组织、专业协会与政策层面。

### 与教育政策的关系

治理与 [[educational-policy-ai|教育 AI 政策]]相区分，却又与之不可分离。**政策是内容**：正式规则与陈述（什么 AI 使用被允许、什么必须披露、什么考核被允许）。**治理是机器**，它生产、实施、执行与修订这些规则：谁设定它们、它们如何获得资源并被传达、合规与申诉如何处理、以及它们如何随 AI 演进而调整。[[educational-policy-ai|政策]]页编目*规则本身*及其成熟度缺口，而本页聚焦使规则成为真实的*结构与实践*——指导小组、伦理审查、考核治理，以及跨层面的问责。纸面上的规则是政策；被拥有、监督与执行的规则是治理。两者相互依赖：没有治理的政策不被执行，没有政策的治理缺乏方向。

**问责语言可能让负责任的行为者无名。** [[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal（2026）]]从 366 篇 GenAI 高等教育摘要中抽取了 166 个义务或可问责表达，发现没有一个把责任指派给某个系统，而 33 个把承担者留作未指明；"需要治理"没有点出任何召集、决定或执行的人。机构与政策行为者承担 37 项义务，机构/教育者转喻 30 项，教育者 20 项，研究者 18 项，学生仅 6 项。

[[learning-analytics-to-educational-interventions-2026|Svetec、Divjak 与 Kadoić（2026）]]把**伦理与数据治理**识别为可信的、基于 LA 的教育干预的七项赋能因素之一——LA 与 AI 的合乎伦理使用之政策、数据隐私、安全与问责——并把 [[trust|可信性]]（包括支持实施的领导力与治理）定位为有意义的数据驱动干预的前提。

- **治理可以被设计进工具。** 一个六维度治理画像——教学落地、教学权威、人的问责与控制、学习者能动性与认知参与、情境特定性、评估可见性——把治理定位在教学工具的互动模型、提示、量表、审批闸门与仪表盘中，并追问机制是否契合适配教学功能，而非一个工具有多严格或多宽松（[[instructional-governance-design-computing-education-2026|Dickey, 2026]]）。

## 关联概念

- [[pedagogical-partnerships]] — 教学伙伴关系
- [[ai-use-disclosure]] — AI 使用与披露声明
- [[remote-proctoring]]
- [[ethics]]
- [[higher-ed]]
- [[privacy]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[student-experience]]
- [[educational-policy-ai]]
- [[regulation]]
- [[summative-assessment]]
- [[ai-misuse-learning-harm]]
- [[trust-calibration]]
- [[generative-ai]]
- [[stakeholders]] — 总括：AI 教育中的人与受众（学习者、教师、设计者、管理者、政策制定者）
- [[student-support-and-success]] — 对机构 AI 支持系统的监督

## 关联文章

- [[ai-literacy-sdg-governance-framework-2026]] — AI 素养作为可持续发展的治理能力：AIRE 分类与 AI–SDG Nexus（Islam、Morshed & Islam 2026）
- [[tan-aigem-ai-educational-management-2026]] — 教育管理中的 AI 治理 AIGEM 框架
- [[institutional-ai-policy-health-informatics-2026]] — 48 个 CAHIIM 认证健康信息学项目的 AI 政策与指导文件：作为不具约束力、以诚信为中心的治理（Eldredge et al. 2026）
- [[guided-inquiry-genai-course-policy-2026]] — 学生通过引导式探究共同设计 GenAI 课程政策（Hingle & Johri 2026）
- [[learning-analytics-to-educational-interventions-2026]] — 从学习分析到教育干预：可信的基于 LA 的干预之赋能因素（Svetec、Divjak & Kadoić 2026）
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — 学生对 AI 使用声明的不合规
- [[vetter-hidden-cost-disclosure-genai-2026]] — 披露的隐藏代价
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — 学生 AI 披露、污名与自我调节学习
- [[weidlich-inference-at-risk-assessment-validity-2026]] — 何种推断有风险：考核效度推理与生成式 AI（Weidlich 2026）
- [[crompton-governing-genai-higher-ed-delphi-2026]] — 关于 GenAI 治理与政策的全球 Delphi
- [[qian-governing-genai-higher-ed-policy-2026]] — 以指导治理：50 所创新美国大学中教师设定的大纲规则与四单元支持生态（Qian 2026）
- [[gutowski-hurley-genai-policy-legal-education-2025]] — 法学院 GenAI 政策中的教师治理、教师裁量与定期审查（Gutowski & Hurley 2025）
- [[wright-transcription-not-generation-2026]] — 过度包含的"AI"禁令、格式转换与合理调整问题（Wright 2026）
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — 拒绝作为证据：不均的治理、理解的义务与不使用的诊断价值（Zagami 2026）
- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — 面向 AI 的前瞻性治理与领导力
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — 在开放大学实施 AIDA
- [[leveraging-complex-systems-leading-for-transformative-change]] — SPARK：为变革性变革而领导
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]] — 学生与 GenAI 的互动（SDT）
- [[beyond-detection-authentic-assessment-ai-2025]] — 超越检测：真实性考核重新设计
- [[genai-policies-higher-ed-computing]] — 计算领域的机构 GenAI 政策
- [[genai-declaration-frameworks-higher-education]] — AI 声明框架
- [[genai-assessment-governance]] — GenAI 下的考核治理
- [[ai-uk-higher-education-policy-2026]] — 英国高等教育政策中的 AI
- [[raza-farooq-aied-review-2020-2025]] — AIED 研究综合综述
- [[cognitive-commons-ai-expertise-regeneration]] — 认知公地的悲剧：AI 与专长再生
- [[policy-deficit-ai-sel-2026]] — AI × SEL 研究中的政策赤字
- [[agarwal-ethical-values-norms-aied-2026]] — AI 教育的伦理价值与规范
- [[perrotta-zero-shot-governance-2026]] — 零样本治理：政策中的通用 AI（Perrotta 2026）
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — 谁行动、谁知道、谁回答？生成式 AI 高等教育研究中能动性、认识责任与问责的语料辅助话语分析
- [[instructional-governance-design-computing-education-2026]] — 设计于中的教学治理：AI 计算教育框架
- [[genai-governance-australian-higher-ed-2026]] — 划定授权边界：澳大利亚高等教育中生成式 AI 治理的比较式政策情境研究
