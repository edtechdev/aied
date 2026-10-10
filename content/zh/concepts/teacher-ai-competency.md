---
title: 教师AI素养
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-09T18:58:09-04:00"
connected_faqs: [faculty-ai-competencies, addressing-common-misconceptions-ai-education, faculty-development-ai]
type: concept
foundations: [ai-literacy, educational-development, teacher-role]
pedagogy: [self-efficacy]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education]
audience: [faculty developers, learners, instructors]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed, edugems, playlab, teacherserver]
translation_of: concepts/teacher-ai-competency
source_updated: "2026-10-09T08:42:12-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教师AI素养（teacher AI competency）** — 教师将AI有效、合乎伦理且公平地融入教学与学习所需的知识、技能与倾向。它超越了单纯的技术工具使用，涵盖[[pedagogy|教学法]]层面的整合、[[assessment|评估素养]]、伦理判断，以及[[ai-literacy|善用AI]]的信心。教师AI素养是[[ai-literacy]]在教师一侧的对应物，并通过[[educational-development|专业发展]]得到培养。它也是[[teacher-role|教师角色]]在AI增强的课堂中如何转型的核心。

## 值得思考的问题

- 本页主张教师是"决定性因素"——AI能否改善学习取决于教师：工具只有在教师能为之做规划、为使用提供支架、并评估其产出时才有帮助。这与你的经验相符吗？还是你认为工具本身比教师更重要？
- 教师AI素养涵盖技术熟练度、教学整合、评估素养与伦理判断。你认为教师最缺乏其中哪一项，哪一项又最难训练？
- [[research-methods-aied|研究]]记录了教师自评AI技能与实际AI技能之间的差距。你认为人们为什么会高估自己的准备程度？要诚实地弥合这一差距需要什么？
- 所引研究中，一项密集的专业发展项目使AI教学技能大幅提升，说明技术—教学技能是可训练的。如果这一点成立，为何仍有那么多教师显得准备不足——阻碍在哪里？
- 如果一位教师能够"善用AI"，"善"对你而言意味着什么——你会如何判断一位教师真正做到了"善用"，而不仅仅是采用了工具？

## 引言

教师AI素养之所以重要，是因为教师是AI能否改善学习的决定性因素。研究一再表明，只有当教师能够为AI工具做规划、为学生的使用提供支架、评估其产出，并将其整合进连贯的教学时，AI工具才能转化为更好的学习成效。本知识库的文献考察了这一素养的*维度*、自评与实际技能之间的*差距*，以及用以建构它的*专业发展*。

## 核心素养维度

本知识库的研究在若干相互关联的维度上趋于一致：

- **技术熟练度：** 针对教育目标设计有效的[[prompt-engineering|提示]]，从教学适配性与安全性角度[[ai-ed-evaluation|评估AI]]工具，并实时排查故障。[[genai-pd-ai-pck-learning-gain-2026|一项密集的GenAI专业发展项目]]记录了全部五个AI-PCK成分上的显著增益（总体 *d* = 2.36），表明技术—教学技能是可训练的。
- **教学知识是决定性的一层。** 一项针对[[k-12|中学]][[ai-education|AI教育]]的跨层次研究（[[pedagogy-first-technology-second-teacher-knowledge-2026|46名教师，2,832名学生]]）发现，单纯的技术性AI知识并不足够——甚至可能略微削弱学生对"AI向善"的认知——而教学性AI知识则驱动了学生的认知及其学习AI的意愿。因此，素养框架应把教学性AI知识作为枢纽维度来赋权，而不是当作可有可无的软性附加项。
- **教学整合：** 将AI使用映射到学习目标，设计支持学生[[metacognition|元认知]]与自我[[regulation|调节]]的[[scaffolding]]，并把AI整合进[[learning-design|教学设计]]。[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK研究]]刻画了教师如何通过多[[agentic-ai|智能体]]工作流来组合技术、教学与内容知识，而[[teacher-ai-teaming-five-levels|五级教师—AI协作框架]]（交易型 → 协同型）则捕捉了[[generative-ai|GenAI]]可能替代、补充还是增强教师能力的不同方式。
- **评估素养：** 评估AI生成的内容与学生的AI产出，并理解当学生使用AI时[[assessment-validity|效度]]如何发生变化。这与[[automated-assessment]]、[[ai-detection]]以及更广义的[[assessment]]再设计议程相连。就推荐系统而言，这还延伸到判断AI的解释是否真正可理解、具有教学意义：[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor等人（2025）]]发现，当解释以领域（课程）语言表述而非暴露原始模型特征时，教师对AI分组建议的信任度更高——这是一种要求并评判[[explainable-ai|解释质量]]、而非接受不透明产出的技能。
- **模型选择与提示设计是可展示的技能：** 工具性[[ai-literacy]]包含知道该用哪个模型、如何表述任务。[[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen等人（2026）]]让ChatGPT-4、Claude 3与Gemini Advanced在四组系统性变化的提示下，对153名职前教师的备课目标进行批评（研究1共 N = 240条反馈，研究2为345条），[[feedback]]按九个质量类别评分。仅模型选择就解释了评分质量方差的26.9%（研究2为18.4%），提示设计在此之上又显著增加了15.9%（5.7%）；唯一具有决定性的提示特征是领域专属技术语言，将其移除会显著降低质量（β = −0.412），而在研究1中添加示例、删除思维链指令并无显著差异。他们的解读——学科术语既能解锁训练数据中的相关内容，又像角色提示那样把请求框定为专业请求——再加上"使用当前能力最强的前沿模型"这一经验法则，使模型选择成为一种教学决策而非技术决策。
- **合乎伦理与批判性的使用：** 识别AI产出中的[[bias-mitigation|偏见]]，保护学生数据（[[privacy]]），并确保公平的结果（[[equity-in-ai-education]]）。[[llm-cultural-relevance-k12|文化相关的AI使用]]考察教师如何用LLM使材料多样化，而非强化主导规范。
- **伦理责任是分散的，而非个人的。** 在七个国家案例中，教师被定位为AI使用的道德守门人，却缺乏制度性与认识论支持，因此伦理AI素养必须延伸到批判性与政治能动性，而非止于技术技能（[[raffaghelli-situated-ai-ethics-2026|Raffaghelli等人（2026）]]）。
- **信心与态度：** 教师的[[self-efficacy|信心]]塑造其采用行为。[[teacher-ai-adoption-confidence|采用研究]]发现，信心、支持与感知效用驱动教师是否真正使用AI，而[[ai-pedagogical-orientation|教师的取向]]则塑造其在研究与教学中的采用。

- 在一项覆盖1,405名K-12教师的五国调查中，AI准备度正向预测了对GenAI教学价值的积极信念（B = .59, R² = .50），却预测了*更强*的创造力担忧（B = .18），且同样的预测变量对担忧的解释力仅分别为7%与6%——仅建设准备度无法触及担忧（[[k12-teachers-genai-beliefs-five-countries-2026|Xiu等人（2026）]]）。

准备度应据此排序并加以测量：能力—决策模型把已证实的AI能力置于态度与信心之上，并提出以表现指标取代单纯自评——备课任务、植入错误的提示评估任务、内容效度判断以及课堂成果量规（[[capability-decision-model-teacher-readiness-2026|Mnguni（2026）]]）。

**情感与道德准备度是一个独立的维度。** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo（2026）]]调查了一所马耳他[[higher-ed|大学]]的教职员（109名受访者），并基于四个道德—情绪条目构建了AI内疚指数（α = 0.88），发现*预期性*内疚超过使用后体验到的懊悔：最强烈的认同是担忧AI使用会损害自身可信度（34.9%认同），其次是使用AI时有[[academic-integrity|作弊]]之感（25.7%），而使用后的懊悔仅获9.2%。对素养框架真正要紧的发现是：非使用者报告的*更高*内疚高于使用者（M = 3.25 对 M = 2.32），且内疚随职业安全感上升而下降——早期职业学者最高（M = 2.71），资深学者最低（M = 2.03）。因此，情感准备度无法被技能或信心量表捕捉，该文主张素养框架应把内疚与身份焦虑视为正常的过渡性反应，而非待纠正的缺陷。

对上述重构的一个更强版本认为，GenAI是一个门槛概念而非技能缺口：一篇自我民族志论证，教师的焦虑与抗拒是跨越门槛的构成性部分，因此基于技能的训练注定失败，而有原则的不采用应得到尊重而非纠正（[[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw（2026）]]）。

## 素养差距

一项关键发现是[[self-report-measures|自评]]素养与表现本位素养之间的**差距**。[[ai-literacy-assessment-misalignment|关于AI素养评估的研究]]记录了教师*认为*自己能做到的事与真正能*展示*的事之间存在巨大差异（最高约40%）——对AI技能有信心的教师往往缺乏基础的提示与评估能力。这推动了对教师素养采取**[[assessment|表现本位评估]]**，而非依赖自评，并与[[self-assessment|校准式自评]]相连。一项覆盖2,586名尼日利亚中学教师的全国调查用两套独立量表测量这两个侧面——AI认知中等（8分制 M = 3.13），AI教学技能较低（5分制 M = 2.47）——且早中期职业教师自评技能高于资深同事（[[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola等人，2026]]）。

差距不仅存在于感知与实际技能之间，也存在于教师所知的*广度*：一项覆盖2,018名乌克兰中学教育者的全国调查发现，84%报告在专业实践中使用AI，但只有11%能说出ChatGPT之外的专门AI服务（[[ukraine-ai-literacy-secondary-framework-2026|Marienko、Markova 与 Semerikov（2026）]]）。第二种狭窄体现在教师自愿申报而非能够列举的内容：53名在职教师按OECD AI素养框架为自己的课堂案例打标，描述了43种具备AI素养的实践，只有10种失败（[[ailithub-ai-literacy-case-infrastructure-2026|Wang等人（2026）]]）。他们的素养选择聚于实践性判断（评估AI产出，N = 38），很少触及社会偏见（N = 5）、伦理对齐（N = 6）或AI的能耗（N = 9）。

差距既体现在自评中，也体现在成果本身。一项[[ai-integration-instructional-design-collaboratory-2026|跨校的教师培养协作体]]让教师教育者把AI设计进自己的方法课程，报告称学员能产出光鲜的AI辅助教案，却无法解释一份教案为何适配学习者与标准——因为教案本身不包含其背后的推理。把评分重心放在论证而非成品是一种回应。[[bondurant-shaughnessy-ai-pedagogies-practice-2026|实践教学法框架]]提供了另一种回应，把演练视为实践的近似：AI中介的演练配合结构化的演练后反馈提升了学员使用追问与探究式问题的频率，但学员对自身表现的判断仍与观察者记录的结果相偏离。

**训练后自评下降可能意味着学习，而非损失。** 在一项为期六个月的[[tpack|智能TPACK]][[educational-development|专业发展]]项目中，64名香港大学教师与61名对照组相比，总体AI素养上升约半个标准差（Cohen's d = −.521），但两组中都有部分教师在后期测试的得分低于前测（[[intelligent-tpack-pd-intervention-hongkong-2025|Tan、Cheng 与 Ling，2025]]）。访谈将下降归因于从"无意识的不胜任"转向"有意识的不胜任"——即邓宁—克鲁格效应所预测的重新校准——而非技能丧失。作者的结论是：前后测自评低估了干预效果，因为部分增益以量表本身的向下修正形式到来。

**差距还表现为不参与。** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson 与 Rainie（2026）]]在2025年末调查了1,057名美国高校教师，发现26%完全不使用[[generative-ai|生成式AI]]工具，三分之一选择不将其用于教学，且不使用集中于艺术与[[humanities-education|人文学科]]（40%）。差距的制度一侧大于个人一侧：68%表示其学校未就使用生成式AI进行教学与指导对教师作准备，教师把同事的抗拒（82%）与不熟悉（83%）列为系级采用的首要障碍——这是一幅能力建设、同伴规范与政策必须同步推进的图景。

**职前训练在很大程度上绕过了这一素养的伦理维度。** 一项关于AI用于小学职前数学教师初始训练的[[meta-analysis-systematic-review|系统综述]]（[[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto等人，2026]]，从341条记录中选出11项研究）发现，干预集中于短期的技术与教学增益，11项中有9项只进行了1至6次课的简短干预，并报告伦理仅在11项中的3项里被处理。素养框架把伦理判断列为一个维度；而本应建构它的职前文献却很少教授或测量它。

## 有效的专业发展

本知识库的专业发展文献识别出若干有效路径：

- **密集、有理论根基的项目：** [[genai-pd-ai-pck-learning-gain-2026|一项密集的GenAI专业发展项目]]覆盖163名教师/职前教师，在全部AI-PCK成分上产生显著增益，其中职前教师受益最大。[[teacher-education-ai-literacy-sdt-2026|基于自我决定理论的专业发展]]表明，支持需求满足的训练能提升教师的AI素养、态度与[[student-engagement|参与度]]，同时降低焦虑。
- **[[design-based-research|设计本位]]与整合式路径：** [[genai-literacy-training-teacher-education-dbr-2026|基于DBR的GenAI素养训练]]针对过度偏重技术知识与前GenAI工具的问题；[[rail-ed-genai-literacy-teacher-education|整合性、发展性框架]]与[[sec-ai-literacy-narrative-review-2026|社会情感素养的整合]]把素养拓宽到纯技术之外。
- **探究与真实实践：** [[quest-ai-inquiry-preservice-teachers|AI支持的探究模式]]在职前教师中建构AI素养与真实表现。
- **情境特定的准备度：** [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI准备度框架]]强调，教师准备度是一个社会技术问题，需要教师能力、[[governance]]与质量保障的对齐。
- **支持必须按经验与AI熟练度差异化。** [[choi-teacher-ai-interaction-lesson-design-2026|Choi等人（2026）]]发现，教师在备课中实际如何与AI互动，取决于教学经验与AI熟练度的*交互*，而非任一单独因素。经验丰富且AI熟练度高的教师会批判性地按情境调整AI产出（重新提示、扩展），而新手——即便是技术上流利的——往往直接接受AI回应，很少考虑学生与情境。这主张按画像设计专业发展：为新手提供回应评估清单与提示模板，为AI熟练度较低的经验教师提供动手技能培养。

信念构型是第二个画像轴：在TALIS 2024的40,680名教师中，同样的"不使用"状态掩盖了相反的障碍——"冷漠"画像中83.3%援引教学顾虑，而"有保留的认同"画像中66.2%援引知识与技能不足（[[teachers-ai-belief-profiles-talis-2024-2026|Fang 与 Jin（2026）]]）。AI相关的专业学习对画像归属的预测一致性高于年龄或学历。

- **教师对AI并无单一理解。** 一项对16名丹麦高校教师的现象图式研究发现，存在三种"以AI教学"的理解与三种"以AI学习"的理解，因此单一的工作坊模式只能触及任何教师群体的一部分（[[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt（2026）]]）。
- **共创与教学提示素养是素养本身，而非附加项。** 一项关于教师—AI学习任务共创的[[meta-analysis-systematic-review|系统综述]]（[[wang-teacher-ai-co-design-review-2026|Wang、Liu 与 Islam，2026]]，28项研究）发现，主导的协作模式是AI作为助手/内容生成者，并指出教师在更充分的共创与对话式伙伴能力上存在缺口。[[talebzadeh-ai-group-activity-roles-2026|Talebzadeh（2026）]]表明，把技术性AI训练与教学推理相配对的专业发展——建构"教学提示素养"（把[[tpack|PCK]]编码进提示）——才是让教师把AI产出转化为有效[[collaborative-learning|差异化小组活动]]的关键。
- **建构素养的结构，而非罗列素养的清单。** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum 与 Finkelstein（2026）]]在一所大型公立R1物理系开展了六次、双周一次的教师学习共同体——全系列共19名教师，每次会议约十人——每次会议都以本地数据开场，转入小组就真实匿名学生作业测试AI，并以集体讨论收尾，最终产出一个含五条条目的共享库，而非一份培训包。评估素养也能以同样方式通过设计工具来建构：在[[authentic-assessments-generative-ai-pilot-2026|Paula等人（2026）]]的试点中，八名经验丰富的STEM与健康课程协调员通过对照学科标准批评一个定制GPT的评估草案来提升评估素养，尽管这些产出反复错失学科语境、忽略话题顺序，并在一个案例中经反复提示仍保留了虚构的参考文献。八人全部把[[evaluative-judgment|学术判断]]留给自己，拒绝端到端自动化——这使对生成草案的结构化批评成为发展机制，而非工具训练。
- **短时段可以在不改变采用的情况下改变接受。** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller 与 Böhme（2026）]]评估了一场面向100名德国小学与中学教师的三小时INSIGHT课程，发现感知有用性与感知易用性都显著上升（有用性 t(99) = -3.24, p = .002, d = .32；易用性 d = .25），而将AI技术用于差异化的行为意向没有变化。作者指出其基线本就偏向正面，因此天花板效应是可能的。对专业发展设计而言，这一结论窄而有用：一场短课程能改变教师如何评判AI工具，却不能改变他们是否打算使用它——这类改变需要后续跟进，而非一次性活动。

- **教师偏好流畅性，却把学习归于支架。** 在41名教师中，GPT-4o基线整体更受偏好（21 对 13），但微调后的三步模型（识别、探究、发展）更常被认为带来了学习（18 对 13），且两种判断仅39%的时候一致（[[teachingcoach-chatbot-instructor-guidance|Molnar等人（2026）]]）。
- **制度性支持：** [[educational-development|专业发展]]必须与制度基础设施（[[educational-policy-ai|政策]]、[[institutional-change-framework-ai|制度变革]]）配套，才能实现可持续的采用。
- **创作工具不保证教学保真度。** [[teachers-configure-educational-chatbots-2026|Riahi等人（2026）]]研究了27名中学教师在专业发展工作坊中配置教育聊天机器人的过程，分析了焦点小组与配置、互动日志。教师把聊天机器人当作受教师设定规则约束的教学支架，但基于日志的意图与行为对齐度在响应性（88.9%）与人格（81.5%）上强于规则（70.4%）与目的（59.3%）。仅靠可配置控件无法把教学意图带入行为，因此表达、测试并精炼聊天机器人的教学法本身就是一种素养，创作工具必须予以支持。

一个设计本位的反例把素养视为情境性的，而非阶梯上的一级。[[adaptive-ai-model-teacher-educators-2025|Eyal（2025）与22名高校教师教育者的设计本位研究]]让参与者考察五份已发表的评估框架，并共同设计一个围绕三个相互关联轴组织的替代方案：情境适配（基础设施、社会文化因素、本地需求、发展阶段）、专业需求（学科、教学法、领导力、支持）与动态发展。该模型拒绝固定的素养等级，允许非线性进阶，并附带一份20条、按1至5评分的反思式自评问卷。其验证仅为定性，没有定量的信度检验，因此它是一个设计贡献而非经过验证的量表。
- **元分析估计。** [[teacher-ai-literacy-professional-development-meta-2026|Guo等人（2026）]]汇总了34项研究的212个效应量，估计教师AI素养专业发展的效应为 g = 0.76（95% CI [0.50, 1.02]），技能最强（g = 0.91），态度与价值最弱（g = 0.61）；对表观的发表选择进行校正后，估计降至约 g = 0.49。

- **在"感觉自己在参与"之外，出席率预测增益。** 在同一个六个月项目中，出席率预测了素养增益（β = .407, p = .001），而自评的参与感则不然（β = .049, p = .692），学科、教学经验与职称解释力甚微；作者把出席读作行为投入，把感知参与读作表层投入（[[intelligent-tpack-pd-intervention-hongkong-2025|Tan、Cheng 与 Ling，2025]]）。

- **价值滞后于技能，在领域专属项目中亦然。** 在一项为期一年、覆盖30名英语教师的香港项目中，多模态评估策略知识从3.13升至4.15（满分5分，partial η² = 0.571），支持学生的能力从3.05升至3.98（0.482），两者均显著，而在Bonferroni校正的 α = .006 下，每个价值子域都保持统计上的平稳。教师把增益归因于校内共同备课与跨校集群会议，而非工作坊本身（[[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang等人（2026）]]）。

## 教师AI素养与转型中的教师角色

随着AI接管常规的教学与评估任务，教师独特的贡献转向编排、判断与关系：决定何时以及如何使用AI，为[[agency|学生能动性]]与批判性使用提供支架，确保公平，并提供AI无法给予的社会与情感支持。这把教师素养重新框定为围绕[[human-in-the-loop-ai|人在回路]]的监督、[[ethics|伦理判断]]，以及[[self-regulated-learning|支持自我调节学习]]——并与[[teacher-role]]和[[cognitive-offloading|防范过度依赖]]相连。

## 对AI在教育中的启示

- **评估表现，而非仅凭自评：** 鉴于已记录的自评差距，教师素养应通过示范来评价。
- **训练完整素养，而非只训工具：** 专业发展应同时建构技术、教学、评估与伦理维度，并扎根于[[learning-theories|学习理论]]。
- **与技能同步建立信心：** 态度与[[self-efficacy]]塑造采用，因此专业发展应通过真实、有支持地实践来降低焦虑、建立信心。
- **支撑制度层面：** 可持续的教师素养需要对齐的政策、治理与能力，而非孤立的培训。

- **面向GenAI[[curriculum-design|课程设计]]的教师数字素养。** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez（2026）]]以434名在职教师验证了一份基于TAM的诊断工具；行为意向是使用GenAI进行课程规划的数字素养的主要预测变量，自我效能则是根本驱动因素。
### 教师AI素养的心理测量工具

- 一项心理测量研究开发了教师AI素养量表（TAILS），以在[[teacher-education|语言教师教育]]中专门测量AI素养，将ED-AI框架的六个维度操作化。该工具的开发填补了针对学生或一般使用者的评估空白，支持对教师AI素养的测量。

此后，工具格局本身也已被综述。[[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal、Mohd Matore 与 Maat（2026）关于教师AI素养测量工具的系统综述]]评估了2019至2025年间发表的33份工具，发现该领域在方法上高度单一：31份（93.9%）是感知信心的自评量表，仅两份（6.1%）客观地测知识，且没有一份使用表现本位任务。内部一致性是最强的质量域（33份中28份为A级），公平性最弱，有五份工具（15.2%）报告了测量不变性或题目功能差异的证据。内容也滞后于技术，因为29份工具（87.9%）针对一般AI概念，只有四份（12.1%，全部出自2025年）涉及生成式AI。

## 关联概念

- [[ai-literacy]]
- [[educational-development]]
- [[teacher-role]]
- [[prompt-engineering]]
- [[learning-design]]
- [[scaffolding]]
- [[metacognition]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[self-efficacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ai-education]]
- [[tpack]]
- [[teacher-education]]
- [[pedagogy]] — 总括：AI教育中的教学法与教学策略

## 关联文章
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — 多模态评估素养：一项知识与能力提升、价值却未变的年度项目
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]] — 智能TPACK专业发展：半个标准差的增益，以及可解读为重新校准的负增益 — The impact of professional development programs on K-12 teachers' AI literacy: A systematic review and meta-analysis

- [[ailithub-ai-literacy-case-infrastructure-2026]] — 教师为自己的课堂AI案例打标，实践性素养易于触及，社会性与伦理性素养则少见（Wang et al. 2026）
- [[typology-generative-ai-tools-education-2026]] — 工具选择作为教育者能动性的行使
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — 生成式AI在K-12教与学中的系统综述（Marzano 2026）
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] — K-12 AI教育中的教师专业知识：TAIK 与 TPAIK 及学生学习（Shen et al. 2026）
- [[choi-teacher-ai-interaction-lesson-design-2026]] — 跨经验与AI熟练度的备课中教师—AI互动模式（Choi et al. 2026）
- [[preservice-teachers-responsible-genai-2026]] — 职前教师负责任地使用GenAI：课程启示（Kohnke et al. 2026）
- [[melo-llm-classroom-observation-teach-2026]] — 用于教师专业发展的LLM课堂观察（Melo et al. 2026）
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — 生成式AI跨越表征、分解与近似：演练、结构化反馈与准确性注意事项
- [[genai-pd-ai-pck-learning-gain-2026]] — 一项密集GenAI专业发展项目的成效
- [[ai-tpack-teacher-multi-agent-workflow]] — 通过教师多智能体工作流建模AI-TPACK
- [[teacher-ai-teaming-five-levels]] — 走向协同的教师—AI互动
- [[teacher-education-ai-literacy-sdt-2026]] — 通过自我决定理论进行AI素养的教师教育
- [[genai-literacy-training-teacher-education-dbr-2026]] — 设计本位研究的GenAI素养训练
- [[rail-ed-genai-literacy-teacher-education]] — 重新思考教师教育中的GenAI素养
- [[sec-ai-literacy-narrative-review-2026]] — 将社会情感素养与AI素养相整合
- [[teacher-ai-adoption-confidence]] — 教师中的AI采用：信心与支持
- [[ai-pedagogical-orientation]] — 教师取向塑造AI采用
- [[ai-literacy-assessment-misalignment]] — 自评与表现本位AI素养之间的错位
- [[quest-ai-inquiry-preservice-teachers]] — 面向职前教师的AI支持探究
- [[sangwa-epiq-ai-faculty-readiness-2026]] — EPIQ-AI教师准备度框架
- [[llm-cultural-relevance-k12]] — 用于文化相关K-12教学法的LLM
- [[institutional-change-framework-ai]] — AI的制度变革框架
- [[teachingcoach-chatbot-instructor-guidance]] — 用于教师指导的TeachingCoach聊天机器人
- [[laidlaw-genai-identity-crisis-faculty-2026]] — GenAI是身份危机，而非技能缺口
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Assessing Teacher Digital Competence for GenAI Curriculum Design (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]] — 高校教师AI理解的现象图式研究
- [[ukraine-ai-literacy-secondary-framework-2026]] — 乌克兰中学教育者的五级AI素养框架与专业发展（Marienko et al. 2026）
- [[wang-teacher-ai-co-design-review-2026]] — 教师—AI学习任务共创：趋势与展望（Wang et al. 2026）
- [[talebzadeh-ai-group-activity-roles-2026]] — AI设计的差异化小组活动中的角色架构（Talebzadeh 2026）
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — 提示工程与模型选择作为AI反馈质量的预测变量（Jacobsen et al. 2026）
- [[vassallo-ai-guilt-complex-faculty-2026]] — AI内疚情结：教职员中的预期性内疚与四种道德反应画像（Vassallo 2026）
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — 一场三小时教师专业发展课程提升了感知有用性与易用性，但未改变申明的采用意向（Mesenhöller & Böhme 2026）
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — 职前小学数学教师训练中AI的系统综述：11项研究中仅3项处理伦理（Pinto et al. 2026）
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — AAC&U/Elon对1,057名美国教师的调查：准备度、不使用与个人对制度的政策差距（Watson & Rainie 2026）
- [[ai-integration-instructional-design-collaboratory-2026]] — 跨校教师协作体：作为教学设计的AI整合，用于教师培养
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 33份教师AI素养测量工具的系统综述：31份自评、两份客观知识测验、无表现任务（Zainal, Mohd Matore & Maat 2026）
- [[adaptive-ai-model-teacher-educators-2025]] — 与22名教师教育者共同设计的、基于设计本位的适应性AI素养模型与20条反思式问卷（Eyal 2025）
- [[physics-faculty-learning-community-ai-2026]] — A Workshop Series for Effective Use of AI in Uncertain Times: Building a Physics Faculty Learning Community
- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
- [[teachers-configure-educational-chatbots-2026]] — Will It Teach as Intended? How Teachers Configure Educational AI Chatbots
- [[capability-decision-model-teacher-readiness-2026]] — 以能力为先、排序的教师准备度模型，附表现本位的能力指标
- [[k12-teachers-genai-beliefs-five-countries-2026]] — 1,405名K-12教师的跨国调查：准备度预测积极信念，但不预测担忧
- [[teachers-ai-belief-profiles-talis-2024-2026]] — 四个TALIS 2024教师信念画像把专业学习与画像特定的AI使用障碍相连
