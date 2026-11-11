---
title: AI 化身与合成教师
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [human-ai-collaboration, teacher-role, academic-integrity]
pedagogy: [professional-training, experiential-learning, situated-learning, video-education]
technology: [generative-ai, llm, pedagogical-agent, simulation, simulating-students, virtual-and-augmented-reality, conversational-ai]
assessment: [automated-assessment, assessment-validity, feedback]
ethics: [trust, ai-use-disclosure, bias-mitigation, inclusive-learning]
discipline: [medical education]
level: [higher ed, teacher education]
audience: [instructors, instructional designers]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
translation_of: concepts/ai-avatars-and-synthetic-instructors
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **AI 化身与合成教师** —— 占据[[teacher-role|教学角色]]的、看起来像人的[[generative-ai|AI]]系统，无论是录像讲师、语音导师、[[pedagogical-agent|教学智能体]]、模拟病人或学生、角色扮演伙伴，还是考官。这一类别由一张脸与一副嗓音代替一个人来定义，而不是由某项单一技术定义。正是这层表面使这些系统具有吸引力，也正是它让这些系统特有的问题集中出现：[[trust|信任]]附着于身份线索，真实感并不追踪有效性，而学习者可能不知道有人正在被模拟。

## 值得思考的问题

- 如果一段[[video-education|讲课视频]]由一张你后来才知道是从你教师的面貌合成的脸来呈现，对你而言什么会改变 —— 内容、你对“是谁教的”的感受，还是什么都不变？
- 一个流利、配合、从不把课带偏的[[simulating-students|模拟学生]]很容易交谈。这种演练为你准备了什么，又悄悄省略了什么？
- 你希望在接触之前被告知病人是生成的吗？事后才知道会怎样改变你从这次会面中得到的东西？
- 哪一种诚信风险更大：学习者欺骗 AI 考官，还是 AI 考官误读学习者？
- [[collaborative-learning|同伴角色扮演]]免费、熟悉，且具有社交要求。化身需要增加什么，你才会选择它？

## 引言

AI 化身是由模型驱动的、渲染或动画化的人类表征；合成教师则是被置于教学角色中的那种表征。两者都不等同于智能体。[[theelen-classroom-simulations-four-layer-framework-2026|Theelen 等人（2026）]]把表征与[[agency|能动性]]分开：化身是参与者所看见的东西，而它背后的行动者可能是同伴、模拟专员、脚本、基于规则的系统，或一个[[llm|大语言模型]]。因此，两个看起来完全相同的虚拟学生可以提供完全不同的会面。

本页按角色组织：合成的人占据哪一个角色、该角色有哪些证据，以及这层表面如何改变学习者与系统的关系。下文涵盖讲课视频、辅导、临床模拟、教师演练、角色扮演与评估。

## 合成的人可以占据的六种角色

**屏幕上的讲师。** 一个克隆的主讲人交付录制视频。在一门大型在线本科课程中，[[personalized-ai-generated-videos-preference-2026|Tomlinson 等人（2026）]]为每个主题渲染了三个领域定制版本，使用由该教师克隆的 HeyGen 化身，发布前经审阅，并推送到 LMS。

**导师或教学智能体。** [[elevate-genai-virtual-tutors|ELEVATE]]构建了一个完全在本地硬件上运行的 3D 化身导师，并配有一个面向教师的层来控制人格、声音、立场与节奏。[[aclime-pedagogical-agents-extended-reality-2026|ACLIME]]在沉浸式媒介中描述了同一角色：一个引导、提问并解释的智能体。

**模拟病人或来访者。** [[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0]]提供 24 个基于浏览器的临床情境，其中有一位会说话的化身病人。[[ai-psychotherapy-training-avatars|Riachi 等人（2026）]]把这一模式应用于接纳承诺疗法，逐轮为受训者的忠实度评分。

**模拟学生。** [[hauk-student-avatars-dialogue-teacher-education-2026|Hauk 等人（2026）]]给 21 名[[teacher-education|职前教师]]安排了一次十分钟的语音对话，对象是“Marco” —— 一名发表了贬损移民言论的初中学生。

**角色扮演伙伴。** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]]让儿童操控一个机器人化身，以排练旁观者干预。ACLIME 把这称为第二种互动模式：一个持有既定角色、用于[[situated-learning|情境化]]对话的智能体。

**评估对话方。** SOPHIE 的评判器依据沟通评分表为转录稿打分。[[voice-based-ai-feedback-interviews-higher-ed-2026|Tamme 等人（2026）]]提出一种语音智能体，就课程内容访谈学生，以取代发放[[self-report-measures|书面问卷]]。

## 证据支持什么：逐角色来看

在合成的人是*实践中的伙伴*之处，证据最强；在它是*学习的替代品*之处，证据最弱。

对于录制讲授，所测量的结果是偏好，而非成绩。在两个开课轮次、493 名受访者中，AI 生成的个性化视频排位高于非个性化的人工录制视频（平均排名 2.26 对 2.69，p < .001）。排名最高的条件 —— 人工录制的个性化视频 —— 从未存在过，因此该排名把体验与想象混在了一起。作者报告客观学习结果尚待发表。([[personalized-ai-generated-videos-preference-2026]])

对于辅导，证据是工程可行性。ELEVATE 在消费级硬件上通过流式语音把首次音频的延迟做到约五到六秒，从而掩盖了大部分可感知延迟。没有进行对照用户研究，因此对学习与[[help-seeking|求助行为]]的影响仍然开放。([[elevate-genai-virtual-tutors]])

对于临床沟通，证据最为成熟，却仍未触及[[transfer-of-learning|迁移]]。SOPHIE 的评判器仅阅读转录稿，与人类评分者的共识相比达到 Pearson 0.759 与 ICC(A,1) 0.746 —— 落在单个人类之间的分布之内，而非之外。在一项由 59 名临床医生与学生参与的远程研究中，92% 认为它有吸引力，83% 判断它具有临床相关性。两次会面之间分数上升，但没有对照组，这一上升不能归因于该训练。([[sophie-clinical-communication-ai-assessment-2026]])

对于[[simulating-students|模拟学生]]，证据关乎互动质量而非结果。Hauk 的参与者把对话评为明显可用（M = 5.37），而真实性只有中等（M = 3.71），转录稿在 87.1% 与 37.4% 的覆盖率上重现了这一分裂。化身承担了挑战性工作，占其文本的 51.1%，而教师则进行阐述与论证。一个项目中的 21 名志愿者，一次会面，未与现场角色扮演比较。([[hauk-student-avatars-dialogue-teacher-education-2026]])

对于角色扮演，REMind 报告儿童在防卫方面的[[self-efficacy|自我效能感]]从前测到后测有显著提升，且对“对抗霸凌者是否能制止霸凌”的信念校准得更好。那是 18 名九到十岁的儿童，处于游戏测试情境，支持的是潜力而非持续的行为改变。([[remind-robot-mediated-roleplay-antibullying-2026]])

对于评估，SOPHIE 的评判器是最清晰的结果，而语音访谈者是最弱的。Tamme 的提案报告了一项技术先导与尚未正式分析的数据；关于语音能引出什么，每一项主张都仍是假设。([[voice-based-ai-feedback-interviews-higher-ed-2026]])

## 信任经由面孔传递

面孔不是[[pedagogy|教学内容]]的中性容器。在合计 396 名参与者的两项实验中，[[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis 与 Kyriakidou-Zacharoudiou（2026）]]发现化身身份线索同时塑造了评价与实际采纳。白人化身，以及在 STEM 情境中的亚裔男性化身，被评为更可信、更能干。年长的黑人女性化身在每一项测量上都遭遇叠加的惩罚。参与者更愿意采纳来自种族内群体化身、或符合其专业能力刻板印象的化身的指导。

两个细节使这成为一个设计问题。领域调节了效应：STEM 与程序性任务放大了偏见，而反思性与人际性任务削弱了它。并且偏见作用于行为，而不只是明示的态度，这意味着自我报告的[[trust-calibration|信任]]会错过它。作者建议使用风格化或更少拟人化的化身、在不同任务间轮换多样化化身，并评估采纳而非满意度。([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]])

权威也经由身体抵达。ELEVATE 的设计者警告，身体与声音会放大导师的权威。他们建议化身应表达不确定，并邀请对照笔记或教科书进行核验。([[elevate-genai-virtual-tutors]]) SOPHIE 增加了一层复杂性：在同一化身背后，此前被评为更像人的模型失去了这一优势，而沟通表现跨后端完全相同（0.437 对 0.438）。像人的感觉属于互动 —— 声音、延迟、话轮转换 —— 而不属于模型。([[sophie-clinical-communication-ai-assessment-2026]])

反向的证据是：即使提示提供了人类框架，学生也可以被教会在心里不接受它。[[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman 等人（2026）]]询问 654 名写作学生，该[[conversational-ai|聊天机器人]]感觉像导师、合作者还是别的东西，只有约一半（51.7%）选择了任一拟人选项。学生把它称为工具或程序，把它比作机器人或计算机，或发明了诸如“反馈售货机”这类[[metaphors-and-analogies|隐喻]] —— 投入数据，吐出文本。作者把这种对人类框架的拒绝视为素养成果，这就把效应归因于教学，而非界面。

## 临场感、真实感与恐怖谷

真实感不是一级级向上的梯子。[[aclime-pedagogical-agents-extended-reality-2026|ACLIME]]把行为真实感视为[[community-of-inquiry|社会临场感]]的决定性预测因子，并警告更高的视觉保真度有落入恐怖谷的风险 —— 在那里，一个几乎像人的智能体会引发突然的排斥。它还标出了这一权衡的代价：沉浸与智能体真实感会提高外在认知负荷，而互动可以通过集体工作记忆降低内在负荷。它的首要警告很直白 —— 约 42% 的 VR 头显用户报告晕动症，后效从约十分钟到数小时不等。([[aclime-pedagogical-agents-extended-reality-2026]])

实践研究大多支持这一主张的温和版本。Hauk 的作者把中等真实性读作与功能相匹配的保真度。一次二元、仅语音的演练能为新手稳定常规，同伴动态与非言语线索可以日后加入。([[hauk-student-avatars-dialogue-teacher-education-2026]]) 在 SOPHIE 中，47% 的参与者仍觉得很难对 AI 病人产生真实的[[empathy|共情]]，尽管 66% 认为与它交谈比与人交谈压力更小。([[sophie-clinical-communication-ai-assessment-2026]])

学习者并非一致地想要更多真实感。在[[trikonet-trivalence-co-creativity-2026|TriKoNet]]的探索性研究中，学生们一致拒绝照片级写实的表征。他们使用一个模块化的设计空间来自行创作角色概念，而不是采纳一个给定的角色。([[trikonet-trivalence-co-creativity-2026]]) ELEVATE 指出，具身化对某些学习者构成障碍，例如感官敏感者或对拟人智能体感到不适者，这使得化身配置成为一项要求而非偏好。([[elevate-genai-virtual-tutors]])

## 同意、披露与深度伪造风险

在这些叙述中，披露表现为一项设计决定，而不是一个被测量的变量。Hauk 的情境处在仇恨言论的边缘，其保障是程序性的。设计包括导引说明、主持准则、教师持续监测、立即停止的选项、结构化的复盘，以及假名化的汇总分析。([[hauk-student-avatars-dialogue-teacher-education-2026]]) Theelen 的框架要求学习者与教师教育者知道[[simulation|模拟]]的哪些部分由人、脚本或 AI 控制，并把这种透明性视为可辩护的适配的前提条件。([[theelen-classroom-simulations-four-layer-framework-2026]])

更难的问题是：模拟一个人本身是否就是一种轻微的欺骗。相信一位挣扎中的病人是真实的学习者，可能会投入一种已披露的模拟不会引出的关怀，然后在被告知之后感到被误导。Hauk 的中等真实性评分表明，参与者并未对化身的性质产生误解；SOPHIE 那项 47% 的共情发现表明，有些人在知情的情况下仍然投入。两项研究都没有直接检验披露。

[[ai-use-disclosure|披露]]也有生产一侧。Tomlinson 的管线克隆了教师的面貌与声音。一部分学生提出了对生成式 AI 的原则性反对 —— 环境成本、劳动、自动化、诚信 —— 这些是更好的渲染无法回应的。([[personalized-ai-generated-videos-preference-2026]]) 教师对被克隆的同意，与学生被克隆者教导的同意是两个不同的问题，而这里没有任何研究测量其中任何一个。

深度伪造素养是同一能力的另一面。在一个 199 名学生的澳大利亚中学样本中，男性显著更可能创建或分享深度伪造内容（23.2% 对 10.0%）。作者主张开展明确针对他们的安全教育。([[gender-differences-ai-literacy-deepfake]]) 一旦机构能够生成一个可信的教师、一个可信的病人或一个可信的学生，核验“是谁在说话”就既是一项素养问题，也是一项[[academic-integrity|学术诚信]]问题。口头答辩与过程性证据 —— ELEVATE 的作者建议在按需辅导可用之后采用 —— 处理的是同一个底层问题。([[elevate-genai-virtual-tutors]])

## 证据的诚实状态

这里几乎每一项研究都小而短。Hauk 有 21 名志愿者与一次会面。SOPHIE 有 59 名完成者，且没有对照组。心理治疗评估有两位心理学家，每人约 90 分钟。PBL 先导有 26 名学生与一个案例。ACLIME 与 Theelen 是[[theories-and-frameworks|概念框架]]，而 TriKoNet 的基础是单次会面中的八个小组。([[genai-simulate-patient-history-pbl-2026]])([[ai-psychotherapy-training-avatars]])([[aclime-pedagogical-agents-extended-reality-2026]])([[theelen-classroom-simulations-four-layer-framework-2026]])([[trikonet-trivalence-co-creativity-2026]])

大样本关乎态度与偏好 —— 396 名参与者关于化身身份，493 名受访者关于视频偏好 —— 而两者都是便利样本或单一课程人群。这组研究中没有任何一项证明合成教师比人类教师带来更好的学习。可辩护的主张更为狭窄：这些系统可以近似一次实践会面，可以在一个领域内以可接受的吻合度对照人类评分者打分，并且可以改变学习者如何评价教学的来源。

这种狭窄性很重要。Theelen 的作者说得直接：流畅与临场感不是[[assessment-validity|效度证据]]。([[theelen-classroom-simulations-four-layer-framework-2026]]) 听起来像教师，只跨过了这间屋子里最低的那道门槛。

## 常见误解

**“更真实的化身教得更好。”** 在两者都被测量之处，真实感与有效性分道扬镳。SOPHIE 的两个后端在同一化身背后产出了相同的沟通分数，而 TriKoNet 的学生直接拒绝了照片级写实的人格设定。

**“如果化身足够有说服力，学习者就会把它当作人。”** 医学生把生成式 AI 病人当作可搜索的问答库来访谈，大多使用封闭式提问，即便他们给体验打了高分。([[genai-simulate-patient-history-pbl-2026]]) 信服与互动风格是彼此分开的结果。

**“合成教师是一种技术，所以发现可以迁移。”** 一个为偏好而优化的克隆讲师、一个为延迟而优化的导师、一个为临床保真度而优化的病人，是失败模式各不相同的不同产物。来自一种角色的证据并不许可对另一种角色的主张。

**“化身外观只是装饰。”** 身份线索改变了可信度评分与对指导的实际采纳，且对年长的黑人女性化身惩罚叠加。([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]) 配置是一项教学与[[equity-in-ai-education|公平]]决定。

**“模拟病人就是标准化病人，只是少了成本。”** 受训心理学家发现他们的虚拟病人配合、且已经具备治疗进阶能力 —— 一个“理想”案例，低估了行为上的僵化。([[ai-psychotherapy-training-avatars]]) 成本下降；案例效度不会自动随之而来。

## 关联概念

- [[simulating-students]]
- [[pedagogical-agent]]
- [[simulation]]
- [[virtual-and-augmented-reality]]
- [[trust]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[ai-use-disclosure]]
- [[academic-integrity]]
- [[teacher-education]]
- [[teacher-role]]
- [[professional-training]]
- [[medical-education]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[embodied-learning]]
- [[video-education]]
- [[generative-ai]]
- [[llm]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[self-efficacy]]

## 关联文章

- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — 化身身份线索改变可信度与对指导的采纳（Anthis 与 Kyriakidou-Zacharoudiou 2026）
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — 基于实践的教师教育对话中的学生化身（Hauk 等人 2026）
- [[gender-differences-ai-literacy-deepfake]] — 一次 AI 素养工作坊中按性别划分的深度伪造创建与报告
- [[elevate-genai-virtual-tutors]] — 带教师治理层的本地优先 3D 化身导师（ELEVATE）
- [[sophie-clinical-communication-ai-assessment-2026]] — 用 LLM 评判器评估临床沟通的化身病人
- [[genai-simulate-patient-history-pbl-2026]] — PBL 病史采集辅导中的生成式 AI 病人化身
- [[ai-psychotherapy-training-avatars]] — 用于心理治疗培训中 ACT 忠实度练习的病人化身
- [[aclime-pedagogical-agents-extended-reality-2026]] — 扩展现实中的教学智能体：临场感、真实感与负荷（ACLIME）
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 以机器人中介、由儿童操控化身来排练旁观者干预的角色扮演
- [[personalized-ai-generated-videos-preference-2026]] — 克隆教师视频的个性化与学生偏好
- [[theelen-classroom-simulations-four-layer-framework-2026]] — 在课堂模拟中把表征与能动性分开的四层框架
- [[voice-based-ai-feedback-interviews-higher-ed-2026]] — 一项拟议的、用于课程反馈访谈的对话式语音智能体
- [[trikonet-trivalence-co-creativity-2026]] — 社会技术网络中的共创式教学化身（TriKoNet）
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — 654 名学生中只有 51.7% 接受了所提供的拟人角色；一人称其为反馈售货机
