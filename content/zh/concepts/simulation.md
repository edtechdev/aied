---
connected_resources: [openmaic]
title: 模拟
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
translation_of: concepts/simulation
source_updated: "2026-10-04T15:54:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **模拟** —— 使用被建模的环境、智能体或情境，在安全、可重复、且往往原本难以进入的情境中，通过练习与反馈来支持学习。模拟让学习者行动、犯错并看到后果，而无真实世界的代价，并且日益由 AI 与基于智能体的建模驱动。

## 值得思考的问题

- 回想一次你在一个安全、低风险的环境中通过动手学到东西的经历——一间实验室、一次演练、一个飞行或游戏模拟器。是什么让那次练习有效？如果模拟过于逼真或不够逼真，又可能失去什么？
- 本页论证，模拟让学习者犯错并看到后果，"而无真实世界的代价"。当一个错误的代价降到接近零时，你认为得到了什么，又可能失去什么？
- 如果一个 AI 能模拟病人、学生或对话伙伴供人练习，你会把有价值的排练与无法迁移到真实人际互动的练习之间的界线画在哪里？
- 为什么学习者对一个模拟局限的意识——它的 [[trust|可信赖性]]——可能与它建模现实的保真度同样重要？
- 同一种既帮助人学习的模拟技术，又如何可能误导人？你需要知道什么才能区分这两种结果？

## 引言

模拟处于 [[experiential-learning|经验式]]与 [[active-learning|主动学习]]的 [[pedagogy|教学法]]核心。它提供有意的练习、[[productive-failure|有成效的失败]]与 [[feedback|反馈回路]]，以建立技能与判断力。AI 以两种方式改变了模拟：它驱动更逼真、更自适应的模拟环境，并生成 [[simulating-students|模拟的学习者]]、病人或对话者，使练习可规模化。行为证据表明，学习者*如何*与模拟互动是系统性变化的，而非整齐划一：[[an-goel-self-directed-modeling-2026|An、Hammock 与 Goel（2025）]] 追踪在 VERA 中构建生态模型的在线学习者，把 [[student-engagement|投入度]]分类为观察（频繁运行并调参，却很少构建模型）、构建（动手构建，很少模拟）与探索（完整的"构建—参数化—模拟"循环），探索者产出最复杂、最多样的模型，而偏重观察的学习者大多复制已有模型——这主张设计能把学习者推向完整循环活动的模拟环境。

### AI 与模拟

- **AI 驱动的环境：** 自适应模拟依据学习者的状态调整难度与情境，与 [[adaptive-learning]] 和基于 [[reinforcement-learning]] 的辅导相关。

- **提示生成的模拟让定制实验室触手可及。** 教师可以从一个可复用的提示模板生成课程所需主题的、可在浏览器中运行的模型（滑块、动画、时变图），并对每个模型做两次验证——技术层面一次，再对照已知的解析解一次——而不是接受最接近的已发表模拟（[[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al.，2025]]）。

- **把人类对应方自动化。** [[astra-atco-training-simulator|Chew et al.（2026）]] 用自主的 [[llm|LLM]] 模拟飞行员取代了为空中交通管制模拟配备的专业人类角色扮演者，消除了培训容量的瓶颈；他们微调过的语音管线把新加坡口音航空语音上的词错误率从 107.80% 降到 23.45%，尽管所有评估都在组件层面进行，没有跑过任何学员队列。

- **对抗式模拟器作为训练伙伴。** [[residencyrl-clinical-rl-training-2026|ResidencyRL（Liévin et al.，2026）]] 把一个策略智能体与以对抗方式构建、基于 57K 案例情境管线的 LLM 病人模拟器配对；与它们一起训练把漏掉红旗症状的比例降低了约三分之一，且在 87.6% 的并排比较中被盲评的临床医生偏好训练后的智能体。

- **把缺失的病例状态显式编码。** 一个多智能体标准化病人系统把意图识别、以病例为依据的回应生成与会后评价分离开来，并区分四种缺失信息——临床上的阴性、病人不知道、尚未评估、以及病例中不存在——因为把它们塌缩成"正常"会注入没有依据的临床事实（[[medeasy-ai-standardized-patients|Gao et al.（2026）]]）。
- **模拟的智能体：** AI 能模拟病人（用于医学训练）、学生（用于 [[teacher-role|教师]]练习）或对话伙伴，使高风险的人际练习变得可及且可重复。在 [[teacher-education|教师教育]]中，[[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang 与 Zhang（2025）]] 构建了 *Student GPT*，一个定制的 ChatGPT [[conversational-ai|聊天机器人]]，角色扮演一名持有常见比例推理 [[misconceptions]] 的 [[k-12|中学生]]，为职前 [[math-education|数学]]教师提供负担得起、内容特定的、诊断学生思维的练习——并用一个 [[affective-computing|情感]]、沟通、技术（ACT）的编码框架，系统地评估模拟学生的角色扮演长处（清晰度、相关性、错误一致性）与真实性弱点（教师式语气、角色混淆）。

- **把反事实历史当作一等公民功能。** SupplyNet 的情境化多智能体 [[llm|LLM]] 智能体生成从学习者决策中涌现的供应链动力学，而非脚本化的；其分支时间线让学习者无惩罚地重访早先的选择——14 名参与者中有 13 人把它在为"把决策与表现相连"上的评分评得很高，而基线为 3 人（[[supplynet-visual-exploratory-learning|Li et al.（2026）]]）。

- **有依据的动力学，而非提示出来的人设。** [[adaptive-virtual-patient-psychotherapy-training|Chen et al.（2026）]] 用近 2,000 小时真实心理治疗转录，把一个虚拟病人的披露动力学参数化，然后在每一轮更新该水平；在 20 位临床医生的 1,033 轮中，其披露随治疗师的共情与探索而上升，而同一个 LLM 上仅靠提示的基线则保持平坦。

- **角色扮演让学习者进入那个角色。** 在模拟智能体提供对应方之处，角色扮演则把那个角色交给学习者。[[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari 及同事（2026）]] 让 18 名 9—10 岁的孩子观看由社交机器人上演的霸凌场景，推理每个角色的立场，然后通过操纵一个机器人化身来排练防卫，并报告在防卫的 [[self-efficacy]] 自我效能感上有增益，以及对"与霸凌者对抗是否真能阻止霸凌"的信念得到了更好的校准。他们"由机器人中介的应用戏剧"这一框定，把人类引导者保留在论坛剧场的角色中，并把自动化局限于叙事控制——这提醒我们，角色扮演中要求高的部分是反思，而非机械。[[lock-integrating-ai-online-learning-higher-ed-2025|Lock、Arteaga 与 Johnson（2025）]] 把角色扮演与模拟并列，作为 AI 支持的在线学习所倚赖的策略之一。

- **模拟的学习者：** 学生行为模型让 [[research-methods-aied|研究者]]与设计师能在正式部署前测试辅导系统与 [[curriculum-design|课程]]，为 [[student-modeling]] 与 [[knowledge-tracing]] 提供依据。

- **信任与保真度：** 一个模拟的价值取决于它建模真实情境的保真度——也取决于学习者对其局限的意识，与 [[trust-calibration]] 相连。

- **拟人性是互动的属性，而非模型的属性。** 一旦两个后端都渲染在同一个化身背后，基于文本的拟人性优势就消失了：参与者把商业模型称为自然（54% 对 22%），而沟通表现完全相同；语音、延迟与轮次重塑了对同一对话质量的感知（[[sophie-clinical-communication-ai-assessment-2026|Hasan et al.（2026）]]）。
- **模拟式学习中的 [[generative-ai|GenAI]]。** [[genai-scenario-based-healthcare-education-2026|Neto 及同事（2026）]] 对医疗教育中情境式、案例式、问题式与模拟式学习里的 GenAI 做了 [[meta-analysis-systematic-review|系统综述]]，发现对高阶认知技能有正向结果，但其他地方的结果不一致，且混合式 [[human-ai-collaboration|人机协作]]胜过完全自动化的方法。[[conversational-agents-business-simulation-gaming-2026|Wenzel、Geiger 与 Liening（2026）]] 为商业模拟游戏中的自适应支持开发了 AI 对话智能体，应对模拟式学习中常见的 [[formative-assessment|形成性]]反馈与结构化反思不足的缺口。

- **"真实性缺口"界定了 AI 模拟能替代什么。** 在 [[medical-education|临床]]模拟中，[[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al.（2026）]] 对 AI 驱动的护理模拟做的 [[mixed-methods-research|混合方法]]系统综述（19 项研究，N=1,253）发现，AI 对认知知识与情感结果有效，但对复杂的心理运动技能则不一致。他们的**真实性缺口**概念——学习者在情感共鸣、非言语线索识别与触觉／体格检查维度上感知到的不足——解释了*为什么* AI 模拟最适合高度结构化的目标（基础沟通、病史采集），并应处于一个**分级模拟连续体**中，把进阶的心理运动与情感复杂的场景交给人类标准化病人与临床实习。技术上的不稳定（例如语音识别延迟）也会增加额外的 [[cognitive-offloading|认知负荷]]与焦虑，因此保真度与稳定性本身就是设计杠杆。这与 [[genai-scenario-based-healthcare-education-2026|Neto et al.]] 关于混合人机方法胜过完全自动化的发现相呼应。
- **教师与 AI 共同设计的模拟。** 在动手型领域中，既支持概念学习又支持胜任力发展的互动模拟很稀缺，而 GenAI 的输出常常缺乏教学法效度。在 [[stem-education|基于无人机的 STEM 教育]]中，嵌在一门其余完全相同的动手课程里的教师—AI 共同设计模拟，被一项跨 30 名中学生的准实验前测—后测设计评估，考察模拟支持的教学是否产出更优的 [[learning-gains|学习结果]]（[[simulation-assisted-drone-learning-stem-2026]]）。另有，[[agentic-ai|多智能体]]辅导 [[benchmark|基准]]如 ASTRA 用模拟的具备社交智能的智能体，来研究 [[cs-education|程序设计入门]]中参与平衡的协作（[[astra-multi-agent-tutoring-benchmark-2026]]）。

- **模拟中的学习者控制是被执行的，而非被授予的。** 在一个群体模拟中的 2 × 2 实验（[[learner-agency-ai-simulation-2026|Su、Nair 与 Nagashima 2026]]）给了部分学生参数滑块、给了部分一个可选的对话智能体、给了部分两者；每个条件都有改善，但一旦控制了先验知识，这两种可及性都没有产生可靠的差异（p = .849 与 p = .108）。预测 [[learning-gains|增益]]的是学习者在何处、以多长时间操纵参数：在概念上最复杂的那一课中持续使用滑块与增益正相关，而在较简单的那一课中同样的行为则为负。对模拟构建者而言，其含义是提供控制本身并不是干预——帮助学习者决定改什么、并记录下改了什么，才是。

- **数字孪生是带一张硬件账单的模拟，而这张账单决定了谁能参与。** 一项对 [[engineering-education|工程]]与 STEM 高等教育中 11 项数字孪生研究的 [[meta-analysis-systematic-review|系统综述]]发现，每一项实现都交付了带实时同步的可用原型，但只有三项报告了统计上显著的 [[learning-gains|学习增益]]。物理装置在五项研究中把并发使用上限压到 1—3 名学生，而社交互动的减少是六项研究中被最常提及的教学法挑战（[[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al.（2026）]]）。

### 关联

模拟与 [[active-learning]]、[[adaptive-learning]] 和 [[pedagogical-agent]] 相连。它是经验式与 [[constructivist]] 学习的机制，并被 AI 生成自适应、逼真练习环境的能力所放大。

## 关联概念
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — 化学教育与 AI：实验室、形成性评估、LLM 的局限、实验哲学
- [[biology-education]] — 生物教育与 AI：实验室教学助手、生物中的 AI 素养、批判性思维、专门工具
- [[ai-technologies]] — 总括：AI 技术与技法（模型、LLM 训练、机器人、RAG、智能体）
- [[virtual-and-augmented-reality]] — 是模型，而非模态——沉浸式环境通常渲染的是一个模拟

## 关联文章
- [[learner-agency-ai-simulation-2026]] — 复杂系统模拟中的参数控制与可选 AI 智能体：增益追随执行，而非可及性
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Adaptive Virtual Patients for Psychotherapy Training
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[remind-robot-mediated-roleplay-antibullying-2026]] — 用于旁观者干预的机器人中介角色扮演游戏（应用戏剧）
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — 情境式医疗教育中 GenAI 的系统综述（Neto et al. 2026）
- [[conversational-agents-business-simulation-gaming-2026]] — 商业模拟游戏中 AI 对话智能体的 CAIS-GBL 框架（Wenzel et al. 2026）
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — 复现协作式问题解决对话的、经微调的参与者特定 LLM 智能体（Fang 2026）
- [[astra-multi-agent-tutoring-benchmark-2026]] — 用于多智能体辅导与参与平衡协作的 ASTRA 合成基准
- [[simulation-assisted-drone-learning-stem-2026]] — 采用教师—AI 共同设计支架的模拟辅助无人机学习
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — 护理中的 AI 驱动模拟：混合方法系统综述（真实性缺口、分级连续体）
- [[sophie-clinical-communication-ai-assessment-2026]] — 可扩展的基于 AI 的临床沟通训练与自动评估
- [[caee-digital-twins-stem-education-systematic-review-2026]] — STEM 教育中的数字孪生：原型都奏效了，学习增益大多没有
