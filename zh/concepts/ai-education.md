---
title: 教育中的人工智能
created: "2026-09-22T14:35:06-04:00"
updated: "2026-09-22T14:35:06-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]
confidence: high
institutions: [educational-policy-ai]
translation_of: concepts/ai-education
source_updated: "2026-09-22T03:10:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

# 教育中的人工智能

> **教育中的人工智能（AI in Education，AIED）**：一个广阔而跨学科的研究领域，它把人工智能应用于教与学，并研究其设计、使用、评价与后果。作为本知识库的总括概念，教育中的人工智能既包含**面向教育的人工智能**（用人工智能改进教学与评估），也包含**关于人工智能的教育**（培养人工智能素养与批判性理解）。它位于教学技术、[[learning-sciences|学习科学]]（即探究学习者是否发生变化、而不只是工具是否发挥作用的实证研究领域）、计算机科学、[[educational-policy-ai|教育政策]]、[[ethics|伦理]]与[[equity-in-ai-education|公平]]的交汇处。本页既是这一领域的导论，也是通往本知识库所涵盖的每一个概念的地图。

## 值得思考的问题

- “教育中的人工智能”横跨两个方向：面向教育的人工智能（用人工智能改进教学）与关于人工智能的教育（培养素养与批判性理解）。哪个方向你更熟悉，哪个方向又容易被你忽略？
- 这一领域的历史被概括为“控制”与“学习者自主性”之间反复出现的张力。在你观察人工智能工具被采用的过程中，你在哪里注意到同样的张力正在当下上演？
- 教育中的人工智能处在技术、学习科学、政策、伦理与公平的交汇处。在评价一个人工智能工具时，你会自然地运用其中哪些视角，又可能忘记哪些？
- 本知识库把这一领域组织为若干条脉络：教学法、学习理论、技术、学科、评估、反馈、相关人群与治理。如果要为你自己使用人工智能的方式画一张地图，你会处在哪条脉络之中？
- AIED 把“教会学生批判性地使用人工智能”本身作为一个目标。在你的情境中，人工智能更多被当作一门要教的科目，还是一件要用的工具？这一侧重是否反映了学习者真正需要的东西？
- 学生或许是通过批判性地使用人工智能来习得人工智能素养，而不只是通过“学习关于人工智能的知识”。动手而带有批判性的使用，如何建立被动讲授无法给予的理解？

## 引言

教育中的人工智能是那个总括性的领域，所有其他概念页面共同界定了它。本知识库把这一领域组织为下面几条主要脉络，每条都链接到相关的概念页面。

一个具有里程碑意义的[[history-of-aied|历史]]视角来自**[[mishra-control-vs-agency-history-2025|Mishra 等]]**：他们追溯了 AIED 从控制论和 1956 年达特茅斯会议开始，经由[[intelligent-tutoring|认知导学系统]]与 Papert 的[[constructivist|建构主义]]一路发展的历程，并主张今天围绕[[generative-ai|生成式人工智能]]的争论，实际上是在重演这一领域自奠基以来就存在的“控制”与[[agency|自主性]]之争。

## 知识库的组织方式：总括页面

本知识库的概念覆盖由若干**总括页面**支撑，它们把相关概念归入可导航的脉络。这些页面是探索这一领域的良好入口：

- **教育中的人工智能**：即本页，这一领域的概览，也是通向全部内容的图谱。
- **[[ai-literacy|人工智能素养]]**：理解、使用与批判性评价人工智能的总括页面，涵盖[[prompt-engineering|提示工程]]、[[critical-thinking|批判性思维]]、[[ethics|人工智能伦理]]与[[reducing-ai-misuse|负责任的使用]]。与之并列，[[human-ai-collaboration|人机协作]]与[[agentic-ai|智能体式 AI]]刻画了人与人工智能如何协同工作。
- **[[pedagogy|教学法与教学策略]]**：关于“教学如何发生”的总括页面，即人工智能在其中运作的教学方法与策略（[[active-learning|主动学习]]、[[collaborative-learning|协作学习]]、[[project-based-learning|项目式学习]]、[[problem-based-learning|问题式学习]]、[[experiential-learning|体验式学习]]、[[game-based-learning|游戏化学习]]、[[socratic-method|苏格拉底式教学法]]、[[scaffolding|脚手架]]等），也包括[[online-teaching-and-learning|在线教学与学习]]这一独特情境。
- **[[learning-theories|学习理论]]**：关于“学习如何发生”的总括页面，即塑造人工智能设计与评价的理论框架（[[behaviorism|行为主义]]、[[cognitive-psychology|认知主义]]、[[constructivist|建构主义]]、[[sociocultural-learning|社会文化取向]]、认知取向、[[motivation|动机取向]]）。
- **[[ai-technologies|技术]]**：技术层的总括页面，即驱动 AIED 的人工智能系统（[[llm|大语言模型]]、[[generative-ai|生成式人工智能]]、[[multimodal|多模态]]、[[educational-robotics|机器人]]）与技术手段（[[rag|检索增强生成]]、[[prompt-engineering|提示工程]]、[[reinforcement-learning|强化学习]]、[[pedagogical-llm-training|模型训练]]、[[agentic-ai|智能体式编排]]）。学习者建模这一族，包括[[knowledge-tracing|知识追踪]]、[[cognitive-diagnosis|认知诊断]]、[[simulating-students|模拟学生]]，以及消费这些模型输出的系统（[[intelligent-tutoring|智能导学]]、[[adaptive-learning|自适应学习]]、[[personalized-learning|个性化学习]]），在这一技术脉络中归入[[student-modeling|学习者建模与自适应教学]]这一总括页面。
- **[[discipline-specific-aied|各学科中的人工智能]]**：关于人工智能如何应用于各个学科领域的总括页面（[[math-education|数学]]、[[physics-education|物理]]、[[language-learning|语言学习]]、[[cs-education|计算机科学]]、[[writing-education|写作]]、[[stem-education|STEM]]、[[engineering-education|工程]]、[[business-education|商科]]、[[teacher-education|教师教育]]、[[medical-education|医疗卫生专业]]等）；在学术科目之外，还包括那条以“展示出的实践”而非“正确性”为评价对象的专业与应用脉络（[[nursing-education|护理]]、[[information-technology|信息技术]]、[[vocational-education|职业教育与培训]]、[[design-education|设计教育]]），以及各教育层次（[[k-12|K-12]]、[[higher-ed|高等教育]]、[[adult-learning|成人学习]]）。
- **[[assessment|评估]]**（含[[formative-assessment|形成性]]、[[summative-assessment|终结性]]、[[authentic-assessment|真实性]]与[[automated-assessment|自动化]]等支脉）：关于人工智能如何既评价学习者，又重塑评估效度与诚信的总括页面。
- **[[feedback|反馈]]**：关于反馈如何生成、传递与使用的总括页面，包括反馈回路、[[ai-feedback-quality|反馈质量]]、[[feedback-literacy|反馈素养]]，以及它的各种评估情境（[[formative-assessment|形成性]]、[[peer-assessment|同伴]]、[[automated-assessment|自动化]]）。
- **[[stakeholders|人工智能教育中的相关人群]]**：回答“行动者是谁”的总括页面，包括学习者、[[teacher-role|教师]]、[[learning-design|学习设计师]]、[[administrator|管理者]]与[[educational-policy-ai|政策制定者]]。
- **[[ai-ed-evaluation|人工智能教育评价]]**与**[[research-methods-aied|研究方法]]**：回答“我们如何知道人工智能是否有效”的总括页面，包括效能研究、[[benchmark|基准测试]]、[[rct|随机对照试验]]、[[meta-analysis-systematic-review|元分析]]，以及作为核心结果指标的[[learning-gains|学习增益]]。读者还应权衡[[limitations-in-aied-research|这类证据普遍存在的局限]]。
- **[[governance|人工智能治理]]**、**[[educational-policy-ai|教育人工智能政策]]**与**[[equity-in-ai-education|公平]]**：制度、监管与公正层面的总括页面（另见[[regulation|监管]]与[[privacy|隐私]]）。

这些总括页面在下面的各节中都有链接；下面每一条脉络都会同时指出它的总括页面与构成它的概念。
## 教育中的人工智能的两个维度

教育中的人工智能研究横跨两个相互关联的方向：

- **面向教育的人工智能**：用人工智能系统增强教学、学习、评估与管理。这包括[[intelligent-tutoring|人工智能导学]]、[[adaptive-learning|自适应学习]]、[[personalized-learning|个性化学习]]、[[automated-essay-scoring|自动作文评分]]、[[automated-question-generation|自动题目生成]]、[[automated-assessment|自动化评估]]、[[formative-assessment|形成性评估]]、[[learning-analytics|学习分析]]与[[feedback|反馈回路]]。
- **关于人工智能的教育**：教会学习者与教育者理解、使用并批判性评价人工智能。其核心是[[ai-literacy|人工智能素养]]，并得到[[prompt-engineering|提示工程]]、[[critical-thinking|批判性思维]]、[[ethics|人工智能伦理]]、[[governance|治理教育]]、数字素养与[[reducing-ai-misuse|负责任的使用]]的支撑。

这两个维度并非彼此分离：[[ai-literacy|用好人工智能]]需要理解它，而关于人工智能的教学又会因使用它而更丰富。这种[[human-ai-collaboration|人机协作]]是一个核心主题。

## 教育中的人工智能的基础

这一领域横贯性的、基础性的概念支撑着本知识库的覆盖，并最先出现在侧边栏中。它们以**要点**一组开场，即每位读者都应从之入手的概念：总括页面本身、[[misconceptions|关于人工智能的误解]]、[[ai-literacy|人工智能素养]]、[[agentic-ai|智能体式 AI]]、[[cognitive-offloading|认知卸载]]、[[framing-ai-use-for-students|如何向学生界定人工智能的使用]]、[[reducing-ai-misuse|减少人工智能误用]]、[[academic-integrity|学术诚信]]、[[teacher-role|教学]]、[[learning-design|学习设计]]与[[educational-development|教育发展]]。随后，**领域**这条脉络涵盖[[history-of-aied|这一领域的历史]]、[[limitations-in-aied-research|证据基础普遍存在的局限]]、[[philosophy-of-ai-in-education|它的哲学基础]]、[[theories-and-frameworks|理论与框架]]图谱以及[[theory-development-aied|理论发展]]。横贯性的主题，包括[[human-ai-collaboration|人机协作]]、[[agency|学习者自主性]]、[[learner-identity|学习者身份]]、[[design-thinking|设计思维]]、[[curriculum-design|课程设计]]、[[critical-thinking|批判性思维]]与[[computational-thinking|计算思维]]，会贯穿每一条脉络，因为人们对人工智能所持的不准确心智模型，位于[[ai-misuse-learning-harm|误用]]与校准不足的[[trust-calibration|信任]]的上游。

## 学习与教学

人工智能如何支持教与学，是这一领域的核心。关键概念包括：

- **核心教学法：**[[pedagogy|教学法与教学策略]]（本知识库教学方法覆盖的总括页面），以及[[active-learning|主动学习]]、[[collaborative-learning|协作学习]]、[[group-work|小组合作]]、[[project-based-learning|项目式学习]]、[[problem-based-learning|问题式学习]]、[[productive-failure|有益失败]]、[[inquiry-based-learning|探究式学习]]、[[experiential-learning|体验式学习]]、[[game-based-learning|游戏化学习]]、[[learning-by-teaching|以教促学]]、[[scaffolding|脚手架]]、[[socratic-method|苏格拉底式教学法]]、[[critical-pedagogy|批判性教学法]]、[[pedagogical-partnerships|教学伙伴关系]]、[[storytelling-in-education|叙事教学]]、[[learning-design|学习设计]]、[[online-teaching-and-learning|在线教学与学习]]与[[video-education|视频在教育中的应用]]。
- **学习理论与过程：**[[learning-theories|学习理论]]总括页面（[[behaviorism|行为主义]]、[[cognitive-psychology|认知主义]]、[[constructivist|建构主义]]、[[sociocultural-learning|社会文化取向]]、[[distributed-cognition|分布式认知]]、[[situated-learning|情境学习]]、[[embodied-learning|具身学习]]、[[community-of-inquiry|探究共同体]]）与面向学习者的过程并存，例如[[self-regulated-learning|自我调节学习]]、[[self-determination-theory|自我决定理论]]、[[motivation|动机]]、[[self-efficacy|自我效能]]、[[self-directed-learning|自我导向学习]]、[[metacognition|元认知]]、[[desirable-difficulties|合意困难]]、[[transfer-of-learning|学习迁移]]、[[prior-knowledge|先前知识]]、[[icap-framework|ICAP 认知参与]]、[[refutation-text|反驳性文本]]、[[retrieval-spacing-interleaving|提取、间隔与交错练习]]以及[[activity-theory-aied|活动理论]]。
- **学习者参与和体验：**[[student-engagement|学生参与]]、[[help-seeking|求助行为]]、[[social-emotional-learning|社会情感学习]]、[[well-being|福祉]]、[[creativity|创造力]]、[[problem-solving|问题解决]]、[[mastery-learning|掌握学习]]与[[student-ai-interaction|学生与人工智能的互动]]，共同塑造了学习者实际接触人工智能并受其影响的方式。
## 技术与方法

[[ai-technologies|技术]]页面是技术层的总括页面：

- **模型与方法：**[[generative-ai|生成式人工智能]]、[[llm|大语言模型]]、[[rag|检索增强生成]]、[[multimodal|多模态模型]]、[[educational-nlp|教育自然语言处理]]、[[reinforcement-learning|强化学习]]、[[knowledge-graph|知识图谱]]、[[educational-robotics|教育中的机器人]]、[[conversational-ai|对话式人工智能]]、[[simulation|仿真]]，以及[[pedagogical-llm-training|训练教学型大语言模型]]。底层方法同样重要：[[machine-learning|机器学习]]是这些系统得以构建的地方，[[speech-and-voice-technologies|语音技术]]承载口语导学与语言练习，[[visualization|可视化]]涵盖面向学习者与教师的仪表盘和可视分析，[[virtual-and-augmented-reality|虚拟与增强现实]]则承载沉浸式练习，而这类练习的视觉层如今已可由模型生成。更新的交互方式也属于这里，其中最突出的是[[vibe-coding|氛围编程]]：一种由自然语言驱动的工作流，用户通过向大语言模型给出提示来指定程序，并根据生成结果的行为来判断，而不去阅读或修改源码。它把[[cs-education|编程]]重新界定为一种表达与验证的行为，并降低了[[teacher-role|非程序员终端用户]]构建自己工具的门槛。诸如[[samr-model|SAMR]]这样的整合深度框架，以及诸如[[technology-acceptance-model|TAM]]这样的采纳理论，则用来判断人工智能被采纳的深度以及它在多大程度上改变了任务本身。
- **学习者建模与自适应系统：**用于表征学习者并据其调整的技术系统归入[[student-modeling|学习者建模与自适应教学]]这一总括页面，包括[[knowledge-tracing|知识追踪]]、[[cognitive-diagnosis|认知诊断]]、[[simulating-students|模拟学生]]、[[intelligent-tutoring|智能导学]]、[[adaptive-learning|自适应学习]]、[[personalized-learning|个性化学习]]、[[recommender-systems-and-learning-paths|推荐系统与学习路径]]、[[pedagogical-agent|教学智能体]]、[[affective-tutoring|情感导学]]、[[affective-computing|情感计算]]、[[human-in-the-loop-ai|人在回路的人工智能]]与[[learning-analytics|学习分析]]。它们之所以属于技术层，是因为它们本身就是人工智能系统，与它们所实施的教学法不同。

## 各学科中的人工智能

人工智能被应用于各个学科与教育层次。本知识库的[[discipline-specific-aied|各学科 AIED 概览]]梳理了学科领域的覆盖范围，并与[[learning-sciences|学习科学]]并列，后者不是一门被教授的科目，而是研究学习本身的横贯性研究领域，它把学科内容视为众多变量之一：

- **学科领域：**[[math-education|数学]]、[[physics-education|物理]]、[[chemistry-education|化学]]、[[biology-education|生物]]、[[cs-education|计算机科学]]、[[engineering-education|工程]]、[[stem-education|STEM]]、[[writing-education|写作]]、[[language-learning|语言学习]]、[[english-education|英语教育（EAP/EFL/ESL）]]、[[science-education|科学教育]]、[[business-education|商科、经济与管理]]、[[humanities-education|人文与社会科学]]、[[arts-design-and-media-education|艺术、设计与媒体教育]]、[[medical-education|医学与医疗卫生专业]]、[[legal-education|法律教育]]，以及专业与应用脉络，包括[[nursing-education|护理]]、[[information-technology|信息技术]]、[[vocational-education|职业教育与培训]]与[[design-education|设计教育]]。

## 层次与情境

同一件人工智能工具面对的是差异极大的情境，因此本知识库把教育层次与教学法分开处理，以免研究结论在两者之间悄然迁移：[[k-12|K-12 学校]]、[[early-childhood-elementary-ai-education|幼儿与小学教育]]、[[higher-ed|高等教育]]、[[adult-learning|成人学习]]、[[vocational-education|职业教育与培训]]、[[special-education|特殊教育]]与[[teacher-education|教师教育]]。跨层次的领域相关概念包括[[universal-design-for-learning|通用学习设计]]、[[neurodiversity|神经多样性]]、[[multilingual-learning|多语言学习]]与[[social-emotional-learning|社会情感学习]]。

## 评估与测量

人工智能既改变了我们评价学习者的方式，也改变了我们评价人工智能系统本身的方式：

- **评估与反馈：**[[assessment|评估]]、[[formative-assessment|形成性评估]]、[[summative-assessment|终结性评估]]、[[authentic-assessment|真实性评估]]、[[eportfolio|电子档案袋]]、[[feedback|反馈]]与[[feedback-literacy|反馈素养]]、[[ai-feedback-quality|人工智能反馈质量]]、[[peer-assessment|同伴评估]]、[[automated-assessment|自动化评估]]、[[automated-essay-scoring|自动作文评分]]与[[automated-question-generation|自动题目生成]]。由于模型如今可以按需生成看似成型的成品作业，本知识库特意凸显那项仍属学习者本人的能力：[[evaluative-judgment|评价性判断]]，即依据有理据的标准来评判自己、同伴以及人工智能产出之质量的能力。它正是若干反馈与真实性评估研究共同指向的构念，包括多校实验中混合反馈条件优于直接由人工智能给出的反馈、人工智能形成性反馈在可持续性上的缺口，以及把评价对象从成品转向学生所做决策这一务实做法；它也是人工智能时代教学重新设计从[[ai-detection|检测]]转向“其诚信经得起查验的任务”的一个核心原因。[[group-work|小组合作]]同样要同时评估过程与成果，团队必须就“谁以何种方式参与人工智能才可接受”达成一致。
- **测量与效度：**[[assessment-validity|评估效度]]、[[psychometrically-aware-ai|具备心理测量意识的人工智能]]、[[educational-measurement|教育测量]]、[[item-response-theory|项目反应理论]]、[[self-report-measures|自陈式测量]]（这一证据中很大一部分所依赖的工具，也是一个反复出现的局限）、[[ai-detection|人工智能检测]]、[[remote-proctoring|远程监考]]与[[academic-integrity|学术诚信]]。

## 研究方法与评价

我们如何知道人工智能是否有效，是自成一体的脉络，本知识库也把它当作一条脉络来对待：

- **研究方法：**以[[research-methods-aied|AIED 研究方法]]为总括页面，包括[[qualitative-research|质性]]、[[quantitative-research|量化]]、[[mixed-methods-research|混合方法]]、[[design-based-research|基于设计的研究]]与[[usability-research|可用性]]取向，以及[[rct|随机对照试验]]、[[meta-analysis-systematic-review|元分析与系统综述]]与[[network-analysis|网络分析]]。
- **人工智能系统的评价：**[[ai-ed-evaluation|人工智能教育评价]]与用于判断系统能力的[[benchmark|基准测试]]，以[[learning-gains|学习增益]]为真正重要的结果，同时以[[limitations-in-aied-research|这一证据普遍存在的局限]]和[[interpreting-and-applying-aied-research|如何解读单项研究]]作为审慎的平衡力量。
## 相关人群

教育中的人工智能改变了每一类相关人群的角色。本知识库的[[stakeholders|人工智能教育中的相关人群]]页面是覆盖所有这些人群的总括页面：

- **学习者：**[[student-experience|学生体验]]、[[career-development-and-readiness|职业发展与就业准备]]与[[anxiety-and-stress|人工智能焦虑与压力]]塑造了学生接触人工智能的方式。
- **家庭与社区：**[[parents-and-families|家长与家庭]]是学校在人工智能问题上最常沟通的对象，也是其指导意见背后研究最少的一类人，因此他们的关切应被纳入相关人群的图景之中，而不是留在其外。
- **教师与教学框架：**[[teacher-ai-competency|教师人工智能胜任力]]、[[tpack|技术教学内容知识（TPACK）]]、[[samr-model|SAMR]]与[[educational-development|教育发展]]涉及教育者的培养与支持。
- **开发者：**[[educational-technology-developers|教育技术开发者]]，即把模型能力转化为机构可以采购之产品的产品设计师、软件开发者、学习工程师与分析设计师。他们是一个与上述实践者和管理者不同的受众，而且身处采用其工具的机构之外，这也是为什么默认设置、协同设计与经费结束后的维护，在本知识库中被当作教学问题而非商业问题来讨论。

## 机构与政策

制度层是人工智能决策真正被作出并为之辩护的地方：[[administrator|管理者]]与机构领导者、[[educational-policy-ai|教育人工智能政策]]、[[governance|人工智能治理]]、作为“让采用真正落地”之工作的[[change-management|变革管理]]、[[regulation|人工智能监管]]，以及由[[technology-acceptance-model|技术采纳]]、[[open-source|开源]]与[[edtech-platform|教育技术平台]]引出的采购与平台问题，此外还有[[lifelong-learning|职业与终身学习]]与[[professional-training|专业培训]]。

## 公平、伦理与负责任的使用

公正、可及性与责任是教育中的人工智能的核心议题：

- **公平与可及性：**[[equity-in-ai-education|公平]]、[[differential-effects-across-learner-groups|不同学习者群体间的差异性效应]]（即一项研究结论对谁成立的问题）、[[digital-divide|数字鸿沟]]、[[bias-mitigation|偏见缓解]]、[[culturally-relevant-pedagogy|文化相关教学法]]、[[multilingual-learning|多语言学习]]、[[inclusive-learning|包容性学习]]、[[accessibility|无障碍]]、[[assistive-technology|辅助技术]]、[[neurodiversity|神经多样性]]、[[universal-design-for-learning|通用学习设计]]与[[global-south|全球南方]]研究。
- **伦理与责任：**[[ethics|人工智能伦理]]、[[ai-misuse-learning-harm|人工智能误用与学习损害]]、[[legal-issues-and-risks|法律问题与风险]]、[[ai-use-disclosure|人工智能使用披露]]、[[guardrails|护栏]]、[[privacy|隐私]]、[[hallucination-risk|幻觉风险]]、[[ai-sycophancy|人工智能谄媚]]、[[trust|信任]]、[[trust-calibration|信任校准]]、[[reducing-ai-misuse|减少人工智能误用]]、[[framing-ai-use-for-students|如何向学生界定人工智能的使用]]、[[pedagogical-safety|教学安全]]、[[sustainability|可持续性]]与[[cognitive-offloading|认知卸载]]。

一篇关于这一领域伦理文献的[[meta-analysis-systematic-review|系统综述]]（[[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]]，25 篇文章）把 AIED 伦理归纳为六项主要伦理价值：非歧视、数据管理、人类监督、善意、可解释性与教育适切性，并把伦理规范映射到一张“相关人群乘价值”的矩阵上。它发现终端用户在伦理文献中基本处于被动地位（学生的声音几乎缺席），并呼吁把伦理整合进 AIED 的设计，以及更多关注 AIED 伦理中教育的（教学的）维度。

## 新兴与横跨主题

若干主题横跨整个领域：

- **信任与批判性使用：**[[trust|信任]]、[[trust-calibration|信任校准]]、[[ai-sycophancy|人工智能谄媚]]、[[critical-thinking|批判性思维]]、[[cognitive-offloading|认知卸载]]、[[critical-pedagogy|批判性教学法]]与[[reducing-ai-misuse|减少人工智能误用]]（另见[[framing-ai-use-for-students|如何向学生界定人工智能的使用]]）。学习者和教师如何决定采纳并依赖人工智能，由[[technology-acceptance-model|技术接受]]研究来建模，而[[global-south|全球南方]]研究则凸显采纳过程中的公平与文化情境。就实证而言，人工智能如何解释自身会塑造这种信任：[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor 等（2025）]]表明，[[explainable-ai|可解释人工智能]]通过可理解性建立起教师对人工智能建议的信任，其中以学科驱动（课程语言）给出的解释，比数据驱动的特征重要性输出更受信任和接受。
- **这一领域的演变：**本知识库追溯了教育中的人工智能从早期[[intelligent-tutoring|智能导学系统]]与[[knowledge-tracing|知识追踪]]，走向大语言模型驱动的[[intelligent-tutoring|导学]]、[[pedagogical-agent|智能体]]与[[agentic-ai|智能体式 AI]]的历程，也就是从以工具为中心的研究快速转向社会技术框架（[[design-thinking|设计思维]]、[[curriculum-design|课程设计]]、[[institutional-change-framework-ai|机构变革]]），并从人工编写系统转向由用户驱动的工作流：学习者或[[teacher-role|非程序员]]用自然语言指定行为（[[vibe-coding|氛围编程]]）。[[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian 与 Doroudi]]用他们的 AI×Ed 框架把这一轨迹形式化，跨四十年会议论文集的论文追溯显示，这一领域从多样混合的格局，包括大量把人工智能当作人类智能与学习之类比的研究，转向几乎只关注应用性、数据驱动、面向研究者的用途；而[[llm|大语言模型]]的兴起如今似乎正在部分逆转这一转向（AIED 2024 上四篇“人工智能作为类比”的论文中，有三篇基于大语言模型）。
- **情绪、焦虑与职业前景：**人工智能引发并塑造情绪反应，[[anxiety-and-stress|人工智能焦虑与压力]]涵盖监考监控、诚信担忧与职业被取代等，而[[career-development-and-readiness|职业发展与就业准备]]则涉及教育如何让学习者为一劳动力市场被人工智能扰动的未来做好准备（另见[[well-being|福祉]]）。

## 领域成熟度

本知识库反映的是一个快速演变中的领域：从早期智能导学系统到大语言模型驱动的导学与智能体式 AI；从以检测为核心的学术诚信工具到评估的重新设计；从以工具为中心的研究到社会技术与公平导向的框架。证据基础越来越强调严谨的[[research-methods-aied|研究方法]]、[[ai-ed-evaluation|评价]]、[[rct|实验设计]]与长期结果。

## 关联

教育中的人工智能与本知识库中的每一个概念都相连，因为正是这一领域由所有其他概念页面共同界定。把本页当作起点，去浏览整个知识库。

## 关联概念

- [[ai-literacy]]：总括概念，理解、使用与评价人工智能
- [[human-ai-collaboration]]：总括概念，人与人工智能如何协同工作
- [[pedagogy]]：总括概念，教学方法与策略
- [[learning-theories]]：总括概念，学习如何发生
- [[ai-technologies]]：总括概念，模型、方法与系统
- [[discipline-specific-aied]]：总括概念，人工智能在各学科领域与层次中的应用
- [[assessment]]：总括概念，人工智能如何评价学习者并重塑效度
- [[feedback]]：总括概念，反馈如何生成、传递与使用
- [[stakeholders]]：总括概念，行动者是谁
- [[learners]]：总括概念，学习者一侧的概念（体验、身份、自主性、互动、学习者模型）
- [[ai-ed-evaluation]]：总括概念，我们如何知道人工智能是否有效
- [[research-methods-aied]]：总括概念，效能研究的方法
- [[governance]]：总括概念，制度与监管层
- [[educational-policy-ai]]：总括概念，政策、指导意见与实施
- [[equity-in-ai-education]]：总括概念，公正、可及性与包容
- [[learning-sciences]]：AIED 背后的实证研究领域
- [[ethics]]：教育中的人工智能的伦理维度
- [[misconceptions]]：人们带到人工智能面前的心智模型
- [[interpreting-and-applying-aied-research]]：如何解读一项研究，并把结论带入实践
- [[limitations-in-aied-research]]：证据基础普遍存在的局限
- [[meta-analysis-systematic-review]]：综述与元分析确立了哪些结论
- [[history-of-aied]]：这一领域如何演变
- [[philosophy-of-ai-in-education]]：哲学基础
- [[theories-and-frameworks]]：理论与框架节点的图谱
- [[theory-development-aied]]：构建与修订理论
## 关联文章

关于教育中的人工智能的领域级综述，即那些综述整个领域或整个教育层次、而非单一主题的研究：

- [[typology-generative-ai-tools-education-2026]]：Typology of Generative AI Tools for Education
- [[raza-farooq-aied-review-2020-2025]]：Review of Artificial Intelligence in Education from 2020 to 2025
- [[rismanchian-ai-education-four-decades-aixed-2026]]：The evolution of AI-and-education research across four decades (AIxEd framework)
- [[mishra-control-vs-agency-history-2025]]：Control vs. agency: a history of AI in education
- [[liang-genai-systematic-review-human-ai-2026]]：Generative AI in education: systematic review of 56 empirical studies
- [[genai-higher-education-systematic-review-2026]]：Generative AI in higher education: systematic review of 125 studies
- [[stanford-evidence-base-ai-k12-2026]]：The evidence base on AI in K-12: a review of 818 papers
- [[caruana-pre-university-ai-education-slr-2026]]：Pre-university AI education: systematic literature review of 42 studies
- [[genai-educational-outcomes-meta-analysis]]：Generative AI and educational outcomes: comprehensive meta-analysis
- [[caeai-ai-companions-learning-over-performance-2026]]：a research agenda for AI companions built around learning rather than performance
