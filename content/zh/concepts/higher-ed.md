---
connected_resources: [pressing-prompts, teacherserver]
title: 高等教育
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:26-04:00"
type: concept
foundations: [academic-integrity, ai-education, educational-development]
technology: [generative-ai]
audience: [learners, instructors, faculty developers, administrators]
level: [higher ed]
connected_faqs: [incorporating-ai-literacy, ai-literacy-evidence]
confidence: high
translation_of: concepts/higher-ed
source_updated: "2026-10-13T11:30:00-04:00"
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

> **高等教育**——把人工智能整合进大学的[[teacher-role|教学]]、学习、评估与[[administrator|行政]]。高等教育是本知识库中被研究得最多的情境，有 100 多篇文章考察AI如何改变大学层级的教学、[[educational-policy-ai|机构政策]]与[[student-experience|学生体验]]。AI在高等教育中既是 [[ai-education|AIED]] [[research-methods-aied|研究]]的主导场景，也是其张力最显眼之处——一端是 [[generative-ai|生成式 AI]] 承诺的可扩展[[personalized-learning|个性化]]，另一端是它对[[academic-integrity|诚信]]、[[cognitive-offloading|学习]]、[[privacy]]与[[equity-in-ai-education|公平]]的风险。它既涵盖本科也涵盖研究生学习，包括[[medical-education|医学]]与[[business-education|商业]]等专业项目。

## 值得思考的问题

- 高等教育是AI张力最显眼的地方——可扩展的个性化对诚信、学习、隐私与公平的风险。这些张力中，哪一个在你所在的机构里上演得最具体？
- 大型研究揭示出机构政策与学生日常实际行为之间的落差。你认为官方政策为何如此频繁地偏离真实的学生实践？
- 本页把AI采纳框定为不均匀的——一些机构转型而另一些落后，受组织驱动力与国家政策塑造。你认为什么因素决定一所大学是适应还是停滞？
- 当AI让个性化的一对一支持近乎免费且普及时，这如何改变大学本身的价值与角色？什么会变得更稀缺因而更有价值？
- 一项发现指出，使用AI的大学生中学习时间下降。如果学生学习时间更少却报告满意，这对机构应当测量与守护的东西意味着什么？
- 鉴于教师自评的AI准备度与实际准备度之间的落差，在你的情境中，有意义的教师发展会是什么样——谁应当为此负责？

## 引言

高等教育中的AI研究横跨大学的每一项职能：从[[intelligent-tutoring|AI辅导]]与[[automated-assessment|自动评分]]到教师发展、学术诚信、[[governance|机构治理]]与学生支持。本知识库的高等教育文章围绕若干关键主题聚集——机构转型、大规模的学生体验、教师与教学、评估与诚信，以及政策与实践的快速变迁。

### 机构转型

[[institutional-change-framework-ai|机构变革框架]]分析大学如何适应AI——不仅在课堂层面，而且跨越政策、治理与组织结构。[[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI框架]]把教师准备度重新框定为一个涉及认识论、教学法、机构与质量领域的社会技术对齐挑战。[[universities-ai-era-rethinking|AI时代对大学的再思考]]考察当前机构模型能否容纳AI驱动的教育。采纳并不均匀：[[alrahmi-org-drivers-ai-adoption-he-2026|组织驱动力研究]]识别出什么使机构 uptake 成为可能或受阻，而 [[ai-uk-higher-education-policy-2026|国家政策分析]]展示系统性情境如何塑造大学的回应。一份具体的机构蓝图来自 [[ai-digital-transformation-liberal-arts-lingnan-2026|Qin (2026)]]，他记录了岭南大学把自己重新定位为"数字时代的研究型博雅大学"，要求所有本科生修读GenAI素养，并把数字素养嵌入共同核心，同时发展一个凸显[[ethics|伦理]]推理与批判性判断的人在回路模型——论证面向教育的AI转向是一场智识转型而非以技术为中心的增强。对 22 项高等教育AI整合干预的宏观层面映射（[[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al., 2026]]）强化了转型仍更多是愿景而非现实这一点：按 [[samr-model|SAMR模型]]分级，多数干预停留在替代或增强，整合集中在[[medical-education|医学]]、工程与 [[cs-education|计算机科学]]，[[humanities-education|人文]]几乎缺席，证据偏向北美与亚洲，[[global-south|全球南方]]的代表极少。

一个全球比较指数测量了话语—结构落差。[[chan-ai-institutionalization-index-global-universities-2026|Chan (2026)]] 对照一个 20 项指标的AI制度化指数，为 2026 年泰晤士高等教育排名前 100 的全部大学的官方网站做了编码。象征层饱和而结构层稀薄：100% 有AI工作组和一个硕士AI学位，但仅 12% 有高管AI领导层，5% 要求本科生修AI导论课，0% 发布AI无障碍政策，尽管 93% 部署了AI校园服务。

制度化也被证明与声望无关（秩相关 r ≈ 0.04），且存在显著的区域差异（ANOVA F = 5.86，p < .001；北美 M = 0.63 对欧洲 0.51、亚洲 0.50），以及一个六模型类型学，其中只有一小部分多为大型的美国公立大学达到"深度制度化"。作者把该指数标记为第一代、未经验证、仅基于网站的、精英前 100 的度量——一张比较地图而非记分卡。

一个机构已经把哪些形式的GenAI使用正当化，这本身是可测量的。[[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn and Rehm (2026)]] 按认识论工作在学生与系统之间如何分布，对 102 项经验性高等教育研究做了分类，发现助手（Assistant，42.16%）与使能者（Enabler，42.16%）应用占主导，而生成者、再想象者与综合者合计不到语料的五分之一——这不是因为模型做不到其余的，而是因为边缘形式以大学个人能力逻辑尚未承认的方式分配作者身份。按他们的说法，高等教育中GenAI的约束性因素是机构正当性而非技术能力，这把问题径直放进与 [[academic-integrity|诚信]] 与 [[assessment]] 改革相同的政策与评估再设计领域。

课堂之外的AI部署已变成一个消费者保护问题，而学生侧对其的盘点很单薄。[[students-at-stake-ai-deployment-risks-2026|Student Defense 的 SHAPE AI 报告（2026）]] 把机构AI使用映射到招生、招聘与助学金、学生成功服务（咨询、辅导、福利获取、学分转移）以及教育交付——来自 Canvas、Blackboard 与 D2L Brightspace 的LMS嵌入功能、全机构的GenAI [[edtech-platform|平台]]、辅导与反馈系统、检测与监考——并论证采纳正在跑在保护前面。它的六个跨领域关切（学生是否得到所付费用对应的东西、学习共同体的丧失、披露与透明度、数据隐私、偏见，以及校准的人类监督）与一个四问采购筛查相连：要解决什么问题、是否存在治理能力、机构是否透明、部署是否为学生创造价值。报告的立场是，各州、认证机构与联邦教育部尚不具备捕捉这些风险的条件，因此机构自身的成文政策是切实的保护，并直接点出这一失效模式：一所大学把教师主导的项目作为卖点，而教学或[[learning-design|课程设计]]却外包给AI或第三方供应商，就是以自己的名义出售另一种产品。

### 大规模的学生体验

对[[ai-in-the-wild-college|真实学生AI使用]]与[[genai-availability-grades-satisfaction|GenAI可得性与满意度]]的大规模研究记录了学生实际如何使用AI——揭示出机构政策与日常实践之间的落差。[[genai-student-experiences-uk-he-survey-2026|调查研究]]捕捉学生如何在AI图景中导航，而对[[generative-ai-reduced-study-time-math|学习时间]]、[[ithaka-sr-ai-skills-college-graduates-2026|毕业生的AI技能]]与[[student-perceptions-ai-study-productivity-2026|学生对AI工具的看法]]的研究表明，学生的AI体验是混合的——高效但往往更浅。如今这类大学学习多发生在线上，[[online-teaching-and-learning|线上教学与学习]]同时塑造了AI对大学生的好处（可扩展的个性化、随时可得的支持）与风险（[[academic-integrity|学术诚信]]、[[cognitive-offloading|认知卸载]]）。一项使用SHAP分析的探索性机器学习方法考察了学生的看法与人口学特征如何关联到预期的学术性ChatGPT使用，优先考虑 [[explainable-ai|可解释性]]（[[determinants-chatgpt-use-higher-education-2026]]）。在艺术与[[design-education|设计教育]]中，生成式AI挑战了人类[[creativity|创造力]]的价值，一个以[[storytelling-in-education|数字叙事]]为核心的[[project-based-learning|项目式学习]]模型培养了AI所缺乏的情感、文化与叙事能力——通过一项为期 15 周的嵌入式案例研究评估，426 名中国本科生把本地文化遗产转译成了 [[multimodal|多模态]]叙事（[[project-based-digital-storytelling-art-design-2026]]）。GenAI的辅助性与包容性使用也在重塑 [[special-education|残障学习者]]的学生体验：[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]——一项对三所巴勒斯坦大学中 21 名视障本科生的 [[qualitative-research|定性]]案例研究——发现GenAI使节奏、内容与交付适配个人画像，简化复杂文本，并在模态间转换内容，给学习者带来课堂参与中的 [[agency|自主感]]与信心，同时被视为补充而非取代教师。

在课堂之外，AI经由机构本身触达学生——咨询、外展、转介与稀缺支持的分配——这由 [[student-support-and-success|学生支持与成功]] 作为独立的一组证据收集起来。它对规模的核心告诫来自一项为期四年的随机评估（N = 8,708）：注册提醒把一个截止日期推移了 34 个百分点，而毕业、学分与GPA完全没动。

### 研究生与专业教育

本知识库严重偏向本科学习，并把研究生与专业预备置于 [[discipline-specific-aied|学科特定]]页面之内（[[medical-education|医学与健康专业教育]]、[[business-education|商业教育]]、[[teacher-education|教师教育]]），而非一个独立的研究生教育页面。尽管如此，两条线索特别关系到硕士、博士与专业学生：研究训练与专业学位项目。

研究生 *研究* 实践是两者中更具特色的一个。[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai and Chan (2026)]] 分析了 28 名研究生在七个焦点小组中如何在GenAI辅助的研究中践行 [[ai-literacy]]，发现他们是校准过的使用者而非被动采纳者——按感知的利益与学科规范把工具匹配到任务，保留 [[human-in-the-loop-ai|人类监督]]，并在可接受的起草帮助与替代自己的推理之间划出自己的边界。他们的核心发现是一个政策缺口：机构的GenAI指引涉及[[teacher-role|教学]]、学习与评估，却几乎不谈研究过程，因此作者提出面向研究者的指引，在研究工作流中为 [[research-methods-aied|研究者]]及其导师 [[scaffolding|支撑]]每一个AI素养维度。[[engagement-intensity-learner-modeling|Oh, Talton and Bui (2026)]] 从机构一侧接近同一群体：在 93 名生物科学研究生与博士后研究员参与的一门必修研究伦理课程中，三个简单的教学前行为信号为自适应的AI [[ethics]]教学提供了轻量级的入学画像，而先前的AI课程对五个看法结果无一预测。AI也在重塑研究团队本身——对 2020 年以来 [[ai-assisted-writing-research-teams|147,074 篇出版物的分析]] 把AI辅助写作与更小、更偏初级、产出高被引工作的团队联系起来，逆转了数十年来"大科学"走向更大协作的趋势——而 [[persistent-ai-agents-academic-research|一项单一研究者案例研究]] 记录了持续的 [[agentic-ai|智能体]]支持在一位研究者自身工作流中是什么样子。

专业学位项目承载了大部分研究生层面的证据，且它按学科组织。在[[medical-education|健康专业教育]]中，[[ai-standardized-patient-scaffolding-medical-2026|一项对 100 名三年级医学生的随机对照试验]]测试了一个围绕临床访谈训练的明确 [[scaffolding|支撑]]功能组织的多智能体LLM系统——模拟病人、[[socratic-method|苏格拉底式]]导师、回合级评估器——而 [[ai-teammate-task-distribution-medical-training-2026|SCAN框架]]把受训者的AI使用重新框定为任务分配与实时 [[metacognition|元认知]]分类的问题，而非学习者的 *误用*。硕士层面的预备见于 [[instructional-design-proficiency-masters-math-2026|Zhu et al. (2026)]]，他们的 D–T–E 模型让三个LLM在"设计—反馈—反思"循环中充当"智能审稿人"，把[[math-education|数学]]教育硕士生的教学设计能力提高了（Cohen's *d* = 0.62）。[[genai-professionalization-metaphors-2026|学生如何概念化GenAI与自身的专业化]]横跨这些项目，而职场与持续的专业学习——与研究生学习相邻却不同——在 [[adult-learning]] 与 [[professional-training]] 下处理。

### 教师与教学

[[educational-development]]研究考察教师如何采纳、抵制或适应AI。[[teacher-ai-adoption-confidence|教师AI采纳研究]]识别信心、支持与态度为关键预测因子。[[ai-assistance-discretionary-feedback|AI辅助的裁量性反馈]]研究探索AI是否提升教师的 [[ai-feedback-quality|反馈质量]]与数量，而 [[luo-eaton-ai-student-feedback-ethics-2026|伦理研究]]权衡教师是否应当为反馈使用AI。[[enright-staff-perspectives-genai-2026|教职员视角研究]]与 [[stenalt-good-education-teacher-ai-conceptions-2026|教师AI概念的现象图志学研究]]探究教育者如何理解自己正在变化的角色。在大班环境中，AI现在能承担日益增多的反馈负荷：一项在本科宏观经济学导修中进行的学期长实地实验（[[gpt4-feedback-student-activation-2026|Geschwind et al., 2026]]）发现，个体化的GPT-4反馈在八个开放式任务上维持了最高的参与度，并产生了最大的内容 [[learning-gains|学习增益]]，把AI反馈定位为讲师反馈的可扩展补充与不可靠的 [[peer-assessment|同伴反馈]]的替代。面向大型本科 [[stem-education|STEM]]班级的一条互补路线是一个诊断性助教系统：[[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur（Yin et al. 2026）]] 用一个逐题的 [[machine-learning|ML]]骨干，为工程经济学计算类公式题提供实时、个性化的反馈——这是一个手写解答此前阻挡了AI支持的领域——经由一个平衡反馈准确性与采集效率的、基于对话的题库网页界面。[[farazouli-navigating-uncertainty-teachers-genai-2026|Farazouli et al. (2026)]] 捕捉了这一变化的 *情感* 维度：24 位瑞典大学教师把GAI的出现体验为令人警觉与压倒性的，报告了一种"脆弱状态"（低信心、不安全感、害怕"跟不上学生"），并感觉在乌托邦与反乌托邦话语之间"卡住"——同时重新思考 [[assessment]] 并把优先级重新评估转向 [[critical-thinking|批判性思维]]与合乎伦理的GAI使用。

### 评估与诚信

[[academic-integrity]]与[[ai-assessment-scale-reform|AI评估改革]]研究着力于大学应如何为一个具备AI能力的学生群体重新设计评价。以 [[ai-detection|检测为中心]]的方法正让位于 [[authentic-assessment]] 与基于过程的评价，包括 [[fenton-oral-exams-ai-authentic-assessment-2025|口试]]、[[roe-assessment-twins-2026|评估孪生]]与 [[beyond-detection-authentic-assessment-ai-2025|真实性评估再设计]]。这一转变反映了一个更深的关切：[[ai-tools-academic-work-cheating-2026|学生与机构如何定义作弊]]与AI，以及 [[assessing-quality-ai-generated-exams-field-2025|AI生成的评估材料的质量]]。评分本身的自动化正为开放式大学作业而成熟：[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] 在 1,885 个针对 24 道软件工程考题的作答上基准测试了十一个GenAI与句子嵌入模型，发现仅 GPTo1 达到与两位专家人类评分者近乎完美的一致性（Fleiss' Kappa 0.82），上下文敏感模型优于参照式模型——但其专有API成本使作者建议资源受限的机构采用混合的人在回路部署。在专业项目层面，[[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] 表明，[[llm]]（GPT-4）对临床见习前 [[medical-education|医学]]开放式考题的评分，在迭代式人工评分量表细化后可以达到与教师评分者从实质到近乎完美的一致（加权kappa最高 0.94），而作者仍建议保留人在回路以裁决残余分歧。补充这一模型级证据，[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] 用 ChatGPT-5 给一份 21 题的大学药学考试评分，发现客观题上与教师近乎完美一致（CCC 0.935–1.000），但简答与论述题上一致性不可靠，提供评分量表也未能一致地改善表现——强化了大学评估中 [[human-in-the-loop-ai|混合、人在回路]]评分的理由。

## 对高等教育教师的启示

- **为一个具备AI能力的学生群体设计评估。** 以检测为中心的诚信方法正让位于 [[authentic-assessment|真实性]]与基于过程的评价（[[beyond-detection-authentic-assessment-ai-2025|超越检测]]、[[ai-assessment-scale-reform|评估改革]]）——重新设计你评估的东西，而不只是你如何监管它。
- **重新设计"学生仍应亲手学会什么？"这个问题。** 正如在计算领域，决定哪些技能必须被保留（验证、判断、过程），并把它们作为被评估的核心，而非假定AI技能会自动迁移。
- **把教师准备度当作社会技术的而非仅技术的。** [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI]] 在认识论、教学法、机构与质量领域框定准备度——把你的 [[pedagogy|教学实践]]与机构治理对齐，而不只是工具熟练。
- **处理政策—实践落差。** 大规模研究（[[ai-in-the-wild-college|AI in the wild]]）显示学生以机构政策未曾预期的方式使用AI——把你的期望与真实使用对齐，并明确地教授 [[ai-literacy]]。
- **用AI提升反馈的质量与数量。** [[ai-assistance-discretionary-feedback|AI辅助反馈]]可以增加教师交付的反馈；把它与 [[human-in-the-loop-ai|人类判断]]配对，使其改善学习而不只是自动化。
- **审慎地参与评分与评估创新。** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] 论证 [[assessment]] 与评分是塑造高等教育学习最具影响力的因素之一，却在[[business-education|管理教育]]等领域研究不足（20年间四本顶尖期刊仅 58 篇文章）。传统的、偏[[summative-assessment|总结性]]的方法在生成式AI时代损害深度学习、[[well-being|福祉]]、公平与 [[academic-integrity|诚信]]；作者敦促教师更主动、更互惠地参与五种创新实践（真实性评估、自评与同伴评估、重评、基于标准的评分、不评分），并指出实施需要机构与文化支持以及渐进式实验。
- **把研究训练与督导本身当作一个AI素养场所。** [[dai-chan-responsible-genai-research-ai-literacy-2026|研究生]]把 [[ai-literacy]] 践行为一門 [[situated-learning|情境化的]]实践而非静态的技能集合，而机构指引大抵止于教学与评估。论文、学位论文与发表工作的指引应当为每一个AI素养维度具体地 [[scaffolding|支撑]]验证、署名与披露——而 [[engagement-intensity-learner-modeling|简单的教学前信号]]可以在研究伦理课程中定位这种支持——而不是发布二元规则。

## 关联概念

- [[pedagogical-patterns]] — 多数经测试的序列证据所产生的层面
- [[online-teaching-and-learning]] — 线上教学与学习
- [[generative-ai]] — 生成式AI技术与模型
- [[llm]] — 大语言模型
- [[student-experience]] — 高等教育中学生的AI体验
- [[educational-development]] — 教师发展与AI准备度
- [[academic-integrity]] — 具备AI能力的学生群体中的学术诚信
- [[ai-literacy]] — 面向学生与教师的AI素养
- [[assessment-validity]] — GenAI时代的评估效度
- [[educational-policy-ai]] — 教育中的AI政策
- [[regulation]] — 教育中AI的监管
- [[remote-proctoring]] — 远程监考与自动化考试诚信
- [[self-directed-learning]] — 与AI的自主学习
- [[problem-based-learning]] — 与AI的问题式学习
- [[teacher-role]] — AI课堂中演化的教师角色
- [[stakeholders]] — 总览：AI教育中的人与受众（学习者、教师、设计者、管理者、政策制定者）
- [[arts-design-and-media-education]]
- [[student-support-and-success]] — 咨询、外展、转介与支持分配——学生成功的机构一侧

## 关联文章
- [[chan-ai-institutionalization-index-global-universities-2026]] — Chan（2026）：100所顶尖大学中的AI制度化指数；话语跑在结构之前，采纳与声望无关
- [[sangwa-epiq-ai-faculty-readiness-2026]] — EPIQ-AI教师准备度框架
- [[ai-in-the-wild-college]] — AI in the Wild：大学生的AI使用
- [[institutional-change-framework-ai]] — AI时代的机构变革
- [[genai-availability-grades-satisfaction]] — GenAI可得性与学生满意度
- [[ai-assessment-scale-reform]] — AI评估量表与改革
- [[universities-ai-era-rethinking]] — AI时代对大学的再思考
- [[teacher-ai-adoption-confidence]] — 教师中的AI采纳
- [[enright-staff-perspectives-genai-2026]] — 高等教育中教职员对GenAI的看法
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — 高等教育中AI采纳的组织驱动力
- [[luo-eaton-ai-student-feedback-ethics-2026]] — 学生反馈中的AI：伦理
- [[beyond-detection-authentic-assessment-ai-2025]] — 超越检测：在AI中介的世界中重新设计真实性评估
- [[genai-student-experiences-uk-he-survey-2026]] — 英国高等教育学生中的GenAI体验（调查）
- [[ithaka-sr-ai-skills-college-graduates-2026]] — 教师与雇主在毕业生AI技能上的看法
- [[generative-ai-reduced-study-time-math]] — 大学生中 26.9% 的学习时间下降
- [[ai-uk-higher-education-policy-2026]] — 英国高等教育AI政策
- [[ai-tools-academic-work-cheating-2026]] — AI工具、学业工作与作弊
- [[assessing-quality-ai-generated-exams-field-2025]] — 评估AI生成考试的质量：一项大规模实地研究
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — 把口试重新考虑为真实、抗AI的评估
- [[roe-assessment-twins-2026]] — 在GenAI时代强化评估效度的评估孪生
- [[student-perceptions-ai-study-productivity-2026]] — 学生对人工智能工具用于学习生产力与学习的看法：一项探索性调查研究
- [[stenalt-good-education-teacher-ai-conceptions-2026]] — 大学教师AI概念的现象图志学研究
- [[ai-digital-transformation-liberal-arts-lingnan-2026]] — 一所博雅大学在GenAI时代向研究型模式的数字化转型（Qin 2026）
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — 用FACETS + SAMR框架映射高等教育中AI整合的系统综述（AlSheikh et al. 2026）
- [[farazouli-navigating-uncertainty-teachers-genai-2026]] — 大学教师对GAI的体验与看法：脆弱性、重新思考评估、处于风险中的学生学习（Farazouli et al. 2026）
- [[gpt4-feedback-student-activation-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — 研究生在研究工作流中的GenAI使用与面向AI素养的指引（Dai & Chan 2026）
- [[engagement-intensity-learner-modeling]] — 作为自适应AI伦理教学的学习者建模信号的参与强度（Oh, Talton & Bui 2026）
- [[ai-assisted-writing-research-teams]] — AI辅助写作把研究团队推向更小、更偏初级、高被引的协作（Wang et al. 2026）
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench：AI与人类辅导产生同等的GRE学习增益
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — 从情感分类到可行动且负责任的反馈：NLP在教学学生评价中的范围综述与证据图谱，2015–2026
- [[sun-student-genai-entanglement-literacy-demands-2026]] — 助手与使能者形式主导高等教育GenAI研究；边缘的纠缠类型因机构而非技术原因保持罕见（Sun, Dohn & Rehm 2026）
- [[students-at-stake-ai-deployment-risks-2026]] — 跨招生、助学金、学生服务与教育交付的AI部署学生侧地图，附四问采购筛查（Student Defense 2026）
