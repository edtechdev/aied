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
source_updated: "2026-10-10T14:22:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **AI 治理**——引导 [[ai-education|教育中的人工智能]]负责任地设计、部署与使用的框架、政策、机构结构与规范。治理既涵盖正式的机构机制（AI指导小组、学术诚信与可接受使用政策、伦理审查），也涵盖非正式规范（教师指南、专业发展、[[reducing-ai-misuse|负责任使用 AI]]的文化）。在AI时代，有效的治理是合乎伦理的、[[equity-in-ai-education|公平的]]、可持续的GenAI采纳的前提——它决定AI是被透明地、可问责地整合，还是以加深不平等的被动方式被采纳。

## 值得思考的问题

- 如果你的机构在纸面上有一份AI政策，却没有清晰的执行、更新或传达流程，那真的是治理吗？是什么把"存在的规定"与"真正被治理的规定"区分开？
- 一项研究中的学生说，他们的大学没有清晰的AI政策，而这影响了他们使用AI的方式。政策模糊会如何影响学生对什么是"可接受使用"的判断——机构是否应当担心把这种协商留给个人？
- 本页区分了基于检测的治理（监管AI使用）与基于设计的治理（重新设计评估，使AI使用被预期并被声明）。你自己的评估实践更倾向于哪一种，两者各有什么权衡？
- 治理被描述为运作于国家、机构与课堂层面。想一条你所在情境中的AI规则：它由谁制定，如何传达与执行，这些层面之间对齐得如何？
- 一个框架把AI治理重新框定为维持共享专业知识的集体行动问题——"认知公地"。保护一个职业的集体知识池，如何改变你对AI治理的思考，而不仅仅是管制一个工具？
- 本页警告，强制性的AI使用声明在令人感到惩罚性或模糊时会失败。你见过哪次合规规则因为人们不理解或不信任它而适得其反？这教会了你关于治理的什么？

## 引言

教育中的AI治理日益紧迫，因为 [[generative-ai|生成式 AI]] 带来了新的认识论、伦理与组织挑战：它动摇了关于知识生产、[[agency|学习者能动性]]、[[assessment]] 效度以及[[teacher-role|教育者作为认识权威的角色]]的假设。治理处理 [[academic-integrity|学术诚信]]（什么算作可接受的AI使用）、[[privacy|数据隐私]]与安全、[[bias-mitigation|算法偏见]]与公平、[[explainable-ai|透明度]]与可问责性，以及AI采纳与机构使命和价值观对齐等问题。贯穿本知识库 [[research-methods-aied|研究]]的一个反复出现的发现是：**机构治理常常滞后**——许多机构缺乏清晰、统一的AI政策，把可接受使用的协商留给学生与教师自行摸索。

- **作为平台化结构性条件的零次治理。** [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] 通过对 **Redbox**（一个已停用的、基于现成 [[llm|LLM]] 构建的英国公务员系统原型）的代码级分析，发展了 **零次治理** 的概念——领域无关的 [[generative-ai|生成式 AI]] 介入政策决策。通过阅读其架构（一个不可见的系统提示 + 一个薄Python封装，套在 [[rag]] 的检索→格式化→生成流水线之上，加上一套与供应商无关的云栈），该文论证：基础模型的通用本质是平台化的一种 *结构性特征*，可以缓解却永远无法排除：[[agentic-ai|智能体 AI]] 并不打断平台的垄断性、食利逻辑，而产生新颖性的同一概率机制也产生 [[hallucination-risk|幻觉]]。对治理而言，其含义是：对通用AI的监督必须把异常输出当作不可消除、只能缓解的风险，而非可修复的缺陷——这一告诫同样适用于 [[educational-policy-ai|教育政策]]推理。
- **[[baroudi-anticipatory-governance-ai-higher-ed-2026|Baroudi]]** 的 [[meta-analysis-systematic-review|范围综述]] 通过前瞻性治理与领导力视角框定高等教育中的AI治理。
- **学生参与政策共创：** [[guided-inquiry-genai-course-policy-2026|Hingle & Johri]] 展示了一项引导式探究活动如何通过让学生共同设计GenAI课程政策，浮现出学生的价值观——优先考虑培训、标准化 [[ai-use-disclosure|声明]]程序、更强的机构支持，以及更多参与决策。这把 [[pedagogical-partnerships|学生定位为治理的伙伴]]而非被动对象，以自下而上的学生声音补足机构层面的政策。

- **技术解决主义陷阱与政策赤字：** 一项对 65 项 AI × [[social-emotional-learning|社会情感学习]]研究的系统综述（[[policy-deficit-ai-sel-2026|Tran, Liu & Nguyen 2026]]）发现，研究往往突出技术潜力而对负责任实施的机构条件着墨不足——即"技术解决主义"陷阱。作者把政策 [[student-engagement|参与]]与发表场所联系起来，提出一个"WH问题"框架使治理含义针对具体行动者，呼应了本知识库更广泛的发现：机构治理落后于AI采纳。

## AI 治理在研究中如何出现

- **机构层面的规模化采纳：** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|开放大学的AIDA研究]] 展示了一个机构如何设计、实施并评估一个GenAI助手，并识别出负责任的系统级部署需要治理结构（AI指导小组）、高层领导的支持，以及与机构战略的对齐——而非仅有技术能力。
- **领导力与系统性变革：** [[leveraging-complex-systems-leading-for-transformative-change|SPARK]] 在复杂性领导理论内框定治理，论证领导者必须在行政稳定与涌现式创新之间保持平衡，把治理机制（政策、评估制度、可问责性框架）嵌入其中，使自适应空间中的创新得以持续与规模化。
- **政策模糊与学生体验：** [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination|学生对GenAI的参与]] 发现 23 名学生中有 12 名注意到缺乏明确的机构AI政策（"学校还没有清晰统一的政策"），论证治理模糊塑造了学生的实践、规范与 [[self-regulated-learning|自我调节]]——支持转向透明的机构指引。
- **作为治理能力的人工智能素养（"第18个SDG"）：** [[ai-literacy-sdg-governance-framework-2026|Islam, Morshed, and Islam (2026)]] 把AI素养重新概念化为一种系统性治理机制而非课堂技能，提出六级 AIRE 分类法（识别→理解→应用→分析→整合→治理），在布鲁姆层级之上加入伦理综合与战略远见，并提出一个把素养能力映射到全部十七个 [[sustainability|可持续发展目标]] 的AI–SDG联结。把AI素养框定为"第18个SDG"启发式——一种把学习导入治理与可持续发展的横向能力——该研究对 300 名专业人士的调查发现治理素养是AI–SDG联结意识最强的预测因子（β = 0.64，r = 0.67），并识别出伦理推理与反思性思维是可信AI使用最强的预测因子。这把机构治理与公共 [[ai-literacy]] 的培养联系起来，呼应了本知识库的发现：负责任的AI对齐需要能够批判性解读算法系统的 [[stakeholders|政策制定者]]与公民，而不仅仅是面向合规的技术控制。
- **学术诚信与评估：** 治理是机构如何处理AI相关 [[academic-integrity]] 关切以及如何重新设计 [[assessment]] 的核心——从禁止/监管转向指引、AI素养与面向过程的设计，如 [[student-rationalization-ai-writing|学生合理化]] 研究与 [[beyond-detection-authentic-assessment-ai-2025|真实性评估再设计]] 所示。
- **再设计同时沿三个维度运行。** [[assessment-redesign-critical-practice-2026|Laidlaw (2026)]] 通过文化—话语（语言与假设）、物质—经济（资源）与社会—政治（治理与权力）三个维度框定AI时代的评估再设计，并把资源—权力的交点同时命名为最大的杠杆点与最大的风险：流经既有权力结构的资源会放大不平等。

- **成文治理的工具组合：** [[institutional-ai-policy-health-informatics-2026|Eldredge et al. (2026)]] 审计了美国全部 48 个 CAHIIM 认证的健康信息学与健康信息管理硕士项目的AI相关文档。48 个中有 40 个（83%）至少有一份公开文档，而在所分析的 40 份文档中，治理大多以指引而非约束性规则的形式实现：21 份指南（53%）、9 份信息性文档（23%）、仅 7 份正式政策（18%）。多数文档同时针对教师与学生（20 份，51%），而非仅针对学生（6 份，15%），且政策类型与受众都不随授课方式变化（Fisher 精确检验 P = .85 与 P = .71），表明工具组合跟随的是机构习惯，而非线上、校园或混合项目的需求。内容集中在学术诚信、负责任使用AI与学生行为，对应用学习、研究与模拟环境中的AI使用几乎没有指引，而这些恰恰是课程与数据治理关切交汇之处。作者还报告，区域认证机构贡献了语料的大部分（Higher Learning Commission n = 14，SACSCOC n = 13，合计约 60%，来自WASC区域的为零），并论证认证是最有位置减少项目间差异的外部杠杆。
- **治理作为分布式的支持生态系统：** [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] 对排名最具创新性的 50 所美国大学的AI指引做了编码，发现治理实现为解读与支持多于规则：50 所中仅 6 所把主页面框定为"政策"，50 所中有 33 所把教师定位为把机构期望翻译为课程规则的首要译者，而支持分布在四个相互咬合的单元——教学与学习中心提供教学大纲措辞与课程政策菜单，图书馆设定引用与来源标准，IT与企业治理办公室运作数据分类规则与经审查的工具栈，学术诚信办公室承担正当程序与教育优先的补救。Qian论证，减少模糊的是 [[scaffolding|支撑]]而非立场，并报告其分布不均：50 所机构中有 33 所发布了教学大纲或课程政策材料，而仅 4 所突出面向学生的指引。这是上述工具组合发现的组织化形态——治理能力位于单元之中而非文档之中。
- **伦理、隐私与偏见：** 治理机制把那些常被承认却不被执行的原则（[[ethics]]、[[privacy]]、[[bias-mitigation]]）付诸操作，连接到教育中的负责任AI与 [[regulation|监管]]争论。
- **治理的价值/规范矩阵。** [[agarwal-ethical-values-norms-aied-2026|Agarwal et al. (2026)]] 这项对 25 篇文章的 [[meta-analysis-systematic-review|系统综述]]，把AIED伦理整合为六个主要伦理价值（不歧视、数据管理、[[human-in-the-loop-ai|人类监督]]、善意、可解释性、教育适切性），并把从文献中提取的伦理规范映射到利益相关者×价值的矩阵上。该映射使规范成为实现特定价值的可操作规则，为构建详细的伦理框架与AIED监管提供基础——给教育机构、开发者与监管者以可实施的具体规范。人类监督的规范集中在教育机构与终端用户上，教育适切性集中在教育机构与监管者上，而针对监管者的善意规范远多于其他任何一组（九条），表明监管者通过政策与立法确保AIED造福学习者的角色。

### 治理教育

AI治理运作于本知识库一并处理的两个层面：治理AI使用的 *机构规则*（政策、可接受使用框架、[[assessment]] 与声明要求），以及 *关于这些规则的教育*（让人们有能力在其中导航）。没有教育的治理有流于未执行或不透明的风险；没有治理的教育缺乏牙齿。这一脉络的研究包括 [[genai-policies-higher-ed-computing|机构GenAI政策分析]]、[[genai-declaration-frameworks-higher-education|AI声明框架]]、[[genai-assessment-governance|评估治理]]、[[ai-uk-higher-education-policy-2026|英国AI高等教育政策]]，以及把治理置于更广政策图景中的 [[raza-farooq-aied-review-2020-2025|综合性AIED综述]]。

### 考核治理

AI治理的一个核心舞台是 **机构如何治理评估**——决定什么算作可接受AI使用、AI辅助工作如何被声明，以及总结性测量如何得到保障。这包括 [[ai-use-disclosure|AI使用与声明声明]]的设计与执行：研究表明，强制性声明在令人感到惩罚性或模糊时会失败（[[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves 2025]]、[[vetter-hidden-cost-disclosure-genai-2026|Vetter et al. 2026]]），而清晰、一致、基于信任的政策才真正促进声明。本知识库的研究区分了 *基于检测的* 治理（监管AI使用，例如经由 [[ai-detection]]）与 *基于设计的* 治理（重新设计 [[summative-assessment|总结性]] 与 [[authentic-assessment|真实性]]评估，使AI使用被预期、被声明并受到审视）。[[genai-assessment-governance|评估中生成式AI的证据中心治理]] 与 [[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]] 论证治理必须把任何检测与评估再设计配对，而AI抗性总结性形式的选择（口试、监考/闭卷测量、代码评审面试——见 [[summative-assessment]]）本身就是一项治理决策。大规模证据 [[stromberg-generative-ai-learning-penalty-secondary-2026|(Strömberg, Lei, & Wu 2026)]] 强调了治理总结性测量的重要性，因为未受治理的作业可能被AI抬高而实际学习却在下降。禁止的范围本身就是一项治理决策：[[wright-transcription-not-generation-2026|Wright (2026)]] 表明，禁止"生成式AI"而不区分生成与格式转换的规则会捕获辅助性转录工具，把政策误用变成 misconduct 指控，加重残障者与 [[equity-in-ai-education|公平]]暴露学生的负担——这是一种治理失败，[[legal-issues-and-risks|法律问题与风险]] 既当作诚信问题也当作平等问题来处理。

[[ai-refusal-higher-education-diagnostic-non-use-2026|Zagami (2026)]] 从高风险场景收集的证据指向不均匀的治理而非简单的拒绝：评估、招生与纪律程序中的部分采纳与不完整政策，机构性的延迟作为治理立场而非失败运作。机构的任务是把拒绝解读得足以改善治理，追问哪些决策需要人工审查、哪些系统需要审计、哪些使用需要声明、哪些采购选择需要公开论证。[[weidlich-inference-at-risk-assessment-validity-2026|Weidlich (2026)]] 补充了评估特有的推论：检测器分数是条件性的概率信号，本身无法确立 misconduct，因此以检测为中心的治理不足以支撑评估主张。

### 跨层面治理

AI治理运作于多个层面——从 **国家/监管**（政府政策、OECD框架、各州AI指引）到 **机构**（大学政策、AI指导小组、伦理审查委员会）再到 **课堂**（教师指南、教学大纲声明、作业设计）。有效的治理对齐这些层面：国家框架设定期望，机构把它们翻译为政策与支持结构，教育者以培养学生AI素养与能动性的方式实施。本知识库的研究强调，治理不仅仅关乎限制，更关乎创造负责任、公平、支持学习的AI整合的条件——包括 [[educational-development|教师发展]]、透明指引与持续评估。

**同样的行为，不同的裁决。** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]] 把 15 个标准化的学生使用情境应用于 20 所澳大利亚大学的公共政策环境，产生 300 个分类：40.0% 明确禁止、32.3% 潜在违规、9.0% 有条件允许、18.7% 不确定——没有一个达到"明确允许"的门槛。约束性工具在 100 个组合上对生成式AI沉默，而指引解决了 88 个；已声明的语言改写与一段AI起草的段落产生了最高的跨校分歧，与对明确评估禁止的一致形成对照。在上文所述层面被假定对齐之处，本研究测量了它们分歧多远，并把操作边界定位于指引而非约束性政策。

**教师治理与审慎审查的理由。** 在上文层面通过政策对齐之处，一些部门则通过共同治理到达它们。[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski and Hurley (2025)]] 把 [[legal-education|法学院]]描述为一个难例，理由正在于此：美国法学院教师对课程标准拥有不寻常的个人权威，因此政策必须与他们共建而非向他们宣布，而多数写下禁止性规则的学校也保留了对个别教师的裁量权，并承诺随技术演进而修订。他们的建议——设计上的灵活性、定期审查、主动培训，以及通过信息共享而非等待认证机构来指定政策来实现自我规制——把治理描述为一个持续的过程而非一份文件，这与 [[crompton-governing-genai-higher-ed-delphi-2026|德尔菲共识]] 建议定期审查周期与常设多学科委员会是同一个观点。

在全机构层面，**AIGEM框架**（[[tan-aigem-ai-educational-management-2026|Tan et al. 2026]]）把负责任的AI定位为教育管理的一种战略性组织能力，整合AI战略领导力、负责任治理、决策智能、人机协同智能、能力发展与可持续价值创造——并把负责任的实施与SDG挂钩。它强调，治理不仅是叠加在教学上的一层合规，而是教育机构的一项高管职能。

### 与相关概念的关联

AI治理连接到 [[ethics]]（它所操作化的原则）、[[higher-ed]]（机构情境）、[[privacy]] 与 [[bias-mitigation]]（具体的治理关切），以及 [[academic-integrity]]（一个主要的治理舞台）。它对 [[change-management|机构变革]]与负责任的AI至关重要，并与 [[ai-literacy]]（治理支持批判性、知情使用的发展）相交。它还连接到 [[learning-analytics]]（数据治理）与 [[student-experience]]（治理塑造学生如何导航可接受使用）。

**治理认知公地。** 认知公地框架（[[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]）把专业知识的再生框定为一个需要奥斯特罗姆式治理（边界界定、监督、分级制裁、集体选择）的职业层面集体行动问题。因此AI治理不仅关乎工具管制，更关乎维持各职业所需的共享专业知识池——在组织、专业协会与政策层面。

### 与教育政策的关系

治理区别于——但不可分割于——[[educational-policy-ai|教育AI政策]]。**政策是内容**：正式的规则与声明（允许什么AI使用、什么必须被声明、什么评估被允许）。**治理是机制**：它生产、实施、执行并修订这些规则：谁制定它们、它们如何被提供资源与传达、合规与申诉如何处理、它们如何随AI演进而调适。在 [[educational-policy-ai|政策]]页面编目 *规则本身* 及其成熟度缺口之处，本页聚焦使规则成真的 *结构与实践*——指导小组、伦理审查、评估治理与跨层面的可问责性。纸面上的规则是政策；被拥有、被监督、被执行的规则是治理。两者相互依赖：没有治理的政策未被执行，没有政策的治理缺乏方向。

**可问责性的语言可能让负责任的行为者无名。** [[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]] 从 366 篇GenAI高等教育摘要中提取了 166 个义务或应答性表达，发现没有一个把责任归于某个系统，而有 33 个未指明承担者；"需要治理"没有指名任何人去召集、决策或执行。机构与政策行动者承担了 37 项义务，机构/教育者转喻 30 项，教育者 20 项，研究者 18 项，学生仅六项。

[[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]] 把 **伦理与数据治理** 识别为可信的基于LA的教育干预的七大使能因素之一——LA与AI伦理使用的政策、数据隐私、安全与可问责性——并把 [[trust|可信性]]（包括支持实施的领导力与治理）定位为有意义的数据驱动干预的前提。

- **治理可以被设计进工具中。** 一个六维治理画像——教学法基础、教学权威、人类可问责性与控制、学习者能动性与认知参与、情境特定性与评估可见性——把治理定位于教学工具的交互模型、提示、评分量表、审批门与仪表板，追问机制是否契合教学功能，而非工具是严格还是宽松（[[instructional-governance-design-computing-education-2026|Dickey, 2026]]）。

## 关联概念
- [[pedagogical-partnerships]] — 教学法伙伴关系
- [[ai-use-disclosure]] — AI使用与声明声明
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
- [[stakeholders]] — 总览：AI教育中的人与受众（学习者、教师、设计者、管理者、政策制定者）
- [[student-support-and-success]] — 机构AI支持系统的监督

## 关联文章
- [[ai-literacy-sdg-governance-framework-2026]] — 作为可持续发展治理能力的人工智能素养：AIRE分类法与AI–SDG联结（Islam, Morshed & Islam 2026）
- [[tan-aigem-ai-educational-management-2026]] — 教育管理中AI治理的AIGEM框架
- [[institutional-ai-policy-health-informatics-2026]] — 48个CAHIIM认证健康信息学项目中的AI政策与指引文档：治理作为非约束性、以诚信为中心的指引（Eldredge et al. 2026）
- [[guided-inquiry-genai-course-policy-2026]] — 学生通过引导式探究共创GenAI课程政策（Hingle & Johri 2026）
- [[learning-analytics-to-educational-interventions-2026]] — 从学习分析到教育干预：可信的基于LA的干预的使能因素（Svetec, Divjak & Kadoić 2026）
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — 学生对AI使用声明的不遵从
- [[vetter-hidden-cost-disclosure-genai-2026]] — 声明的隐性代价
- [[chang-should-i-tell-my-teacher-ai-disclosure-2026]] — 学生的AI声明、污名与自我调节学习
- [[weidlich-inference-at-risk-assessment-validity-2026]] — 哪个推论有风险：评估效度推理与生成式AI（Weidlich 2026）
- [[crompton-governing-genai-higher-ed-delphi-2026]] — GenAI治理与政策的全球德尔菲研究
- [[qian-governing-genai-higher-ed-policy-2026]] — 以指引治理：50所创新型美国大学中由教师设定的教学大纲规则与四单元支持生态系统（Qian 2026）
- [[gutowski-hurley-genai-policy-legal-education-2025]] — 法学院GenAI政策中的教师治理、教师裁量与定期审查（Gutowski & Hurley 2025）
- [[wright-transcription-not-generation-2026]] — 过度宽泛的"AI"禁止、格式转换与合理调整问题（Wright 2026）
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — 作为证据的拒绝：不均匀治理、理解的义务与非使用的诊断价值（Zagami 2026）
- [[baroudi-anticipatory-governance-ai-higher-ed-2026]] — AI的前瞻性治理与领导力
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — 在开放大学实施AIDA
- [[leveraging-complex-systems-leading-for-transformative-change]] — SPARK：为变革性变革而领导
- [[students-engagement-with-generative-ai-in-academic-learning-a-self-determination]] — 学生对GenAI的参与（SDT）
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection：真实性评估再设计
- [[genai-policies-higher-ed-computing]] — 计算机领域的机构GenAI政策
- [[genai-declaration-frameworks-higher-education]] — AI声明框架
- [[genai-assessment-governance]] — GenAI下的评估治理
- [[ai-uk-higher-education-policy-2026]] — 英国高等教育中的AI政策
- [[raza-farooq-aied-review-2020-2025]] — AIED研究的综合性综述
- [[cognitive-commons-ai-expertise-regeneration]] — 认知公地的悲剧：AI与专业知识再生
- [[policy-deficit-ai-sel-2026]] — AI × SEL研究中的政策赤字
- [[agarwal-ethical-values-norms-aied-2026]] — AI教育中的伦理价值与规范
- [[perrotta-zero-shot-governance-2026]] — 零次治理：政策中的通用AI（Perrotta 2026）
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — 谁行动，谁知道，谁回答？生成式AI高等教育研究中能动性、认识责任与可问责性的语料辅助话语分析
- [[instructional-governance-design-computing-education-2026]] — 设计即教学治理：计算机教育中AI的框架
- [[genai-governance-australian-higher-ed-2026]] — 划定被授权的边界：澳大利亚高等教育中生成式AI治理的比较政策情境研究
