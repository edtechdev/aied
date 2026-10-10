---
title: 建构主义
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-09T18:58:10-04:00"
type: concept
foundations: [learning-design]
pedagogy: [active-learning, collaborative-learning, experiential-learning, learning-theories, scaffolding, self-regulated-learning]
technology: [generative-ai]
confidence: high
connected_resources: [vibes-diy]
translation_of: concepts/constructivist
source_updated: "2026-09-30T10:54:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **建构主义** —— 认为知识由学习者通过经验、反思与互动主动建构，而非从教师或系统中被动接收的[[learning-theories|学习理论]]。在[[ai-education|教育中的AI]]领域，建构主义支撑着这样一个设计承诺：AI工具应当支持学习者自己的知识建构 —— [[prompt-engineering|提示]]、提问与[[scaffolding]] —— 而不是替他们完成[[cognitive-offloading|认知工作]]。([[ai-vocational-education-training-review]])([[genai-mindtool-generative-learning]])

## 值得思考的问题

- 你是否曾在课堂上"学过"某样东西，后来才发现自己根本无法解释或运用它？当时缺了什么 —— 这又告诉你真正的理解是如何形成的？
- 建构主义主张知识是被建构的，而不是被传递的。如果这是真的，那么当AI辅导系统直接给出正确答案时会发生什么？
- "名为建构主义、实为[[behaviorism|行为主义]]"用来形容那些声称支持[[active-learning|主动学习]]、实际却运行着操练与练习的AI工具。你见过这种落差吗？在评估一个工具时你会如何发现它？
- Papert的建构主义说，我们通过构建可分享的作品学得最有力。在AI时代，一个框架把它表述为："AI写代码，但学生写模型。"当AI处理机械层面时，学生实际上在建构什么？
- 有些AI工具实行"生成式拒绝" —— 不给出答案，而是提出问题。什么时候刻意不给帮助，比提供帮助更有教育价值？
- 如果知识是建构的，那么AI素养就不是靠听关于AI的讲座学来的，而是通过使用、批判和与AI共同构建学来的。这对如何教你和你的学生AI素养意味着什么？

## 引言

建构主义是一族理论而非单一学说，但其核心主张是共通的：学习者并不吸收意义，他们建构意义。在这种观点下，理解不是被传递事实的积累，而是把经验主动组织为心理模型。这对教育中的AI应如何设计、评估和教学有直接影响，也有助于解释[[generative-ai|生成式AI]]在课堂上的希望与风险。

**[[mishra-control-vs-agency-history-2025|Mishra等人]]**将Papert的建构主义（Logo、微世界、调试即学习）与Anderson的认知导师作为AIED历史中"创造性能动性"对"系统性控制"两种竞争愿景进行对比。

## 核心思想

- **知识是被建构的，不是被传递的。** 学习者通过作用于世界、把新信息与[[prior-knowledge|先验知识]]协调、并对结果进行反思来建立理解。一个只给出正确答案的AI辅导系统绕过了产生持久理解所需的建构活动。([[generative-refusal-ai-tools-for-thought]])
- **先验知识塑造新学习。** 新观念是通过学习者已有的心理模型来解释的，因此教学必须显化并建立在学习者已知的基础上 —— 这一原则与[[misconceptions]]以及能适应学习者的AI辅导系统直接相关。
- **社会互动支持建构。** 一个主要分支 —— 社会建构主义 —— 主张意义是通过对话、协作和文化上[[situated-learning|情境化]]的活动共同建构的。这把建构主义连接到[[collaborative-learning]]以及[[socratic-method|苏格拉底式方法]]路径上，即由AI提示而非命令。([[ai-agents-constructive-conflict-design-education-2026]])
- **建构在活动中可见。** 学习者通过生成、解释和产出揭示（并巩固）其理解 —— 这正是[[icap-framework|ICAP框架]]把"建构性"和"互动性"[[student-engagement|投入]]排在"主动性"与"被动性"模式之上的原因。([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

该理论的一个边界在于，建构主义假定以人为中心的认知能动性，这使它不足以解释一个能模拟推理并共同建构意义的AI；被提出的补充是认知共同能动性，即学习者把AI输出视为可争议之物，并对"什么算作知识"保持认知主权（[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Samuel（2026）]]）。

## 建构主义（Constructionism）

**建构主义（Constructionism）**是与Seymour Papert关联的建构主义分支，它增加了一个具体主张：当学习者建构*外在的、可分享的作品*时 —— 他们设计、构建和调试的物理或数字对象 —— 学习最有力地发生。皮亚杰式建构主义关注知识的内部心理建构，而建构主义认为这种建构最好通过制作有形之物得到支持和显现（Harel & Papert, 1991）。在[[history-of-aied|AIED历史]]中，建构主义构成本领域核心"控制对能动性"张力的"能动性"一极，与Anderson的结构化认知导师相对立。

- **Logo与微世界。** Papert于1967年与人共同开发了Logo，及其标志性的"海龟" —— 一个儿童通过指挥和调试一个可见的智能体来探索几何与其他强大思想的编程微世界。调试被重新框定为学习中自然而有价值的一部分，而非失败。([[mishra-control-vs-agency-history-2025]])
- **建构先于教学。** 建构主义批判"教学主义" —— 即假定[[teacher-role|教学]]是知识的有效传递 —— 转而将学习者定位为通过项目和实验建构理解的[[agentic-ai|自主能动者]]（Papert, 1980, *Mindstorms*）。
- **延伸到现代[[edtech-platform|教育技术]]的谱系。** Logo对创造性、动手建构的强调，支撑了[[game-based-learning]]、[[project-based-learning]]、[[educational-robotics|机器人教育]]（LEGO Mindstorms、[[cs-education|Scratch]]、可编程积木）以及更广泛的创客运动。
- **AI中的建构主义遗产。** 建构主义意味着AI工具应当作为**用于建构的材料** —— 由学习者指挥的思维工具和创造性共同建构者 —— 而不是提供答案的教师。这正是本知识库[[genai-mindtool-generative-learning|思维工具]]式生成式AI框架、以及保留[[agency|学习者能动性]]于学习过程之上的设计承诺的直接祖先。([[educational-robotics-pathways-2026]])

- **生成式AI时代的建构主义：学着写模型，而非写代码。** 代码生成式AI的到来*更新*了建构主义，把它作为一种设计回应而非削弱它。Gousopoulos的**Code-to-Learn with Generative AI（CtL-GenAI）**框架综合了建构主义、认知负荷理论、[[self-regulated-learning]]、[[icap-framework|ICAP]]投入模型、[[productive-failure]]和[[sociocultural-learning|社会文化]]支架，面向用AI构建软件的高中生。其组织性主张 —— **"AI写代码，但学生写模型"** —— 重构了建构的目标：当GenAI承担写代码的句法工作时，学习者的建构转移到构建和调试代码所表达的*概念模型*上。CtL-GenAI将"模型作者身份"定义为一个具有四个面向和有序层次的构念，附带可观察指标，并形式化了一个部分给分、可伪证的测量模型来检验这种学习是否真的发生。([[code-to-learn-genai-artifact-construction-2026]])([[ai-writes-code-student-writes-model-2026]]) 这是建构主义经典的"制作可分享之物并调试它"的更新版，使学生制作和反思的作品成为一个被显现的心理模型，而不仅仅是源代码 —— 并且它把理论与一个明确的测量方案耦合起来，使该主张变得可经验检验。

建构主义因此既是一种学习理论又是一种批判：它坚持教育的目的不是复制既有知识结构，而是赋能学习者去建构并改造它们 —— 这一立场对教育中的AI是强化还是挑战既有等级秩序有明确含义。

## 建构主义与教育中的AI

### 面向建构主义学习的AI

设计良好的AI可以规模化地实现建构。[[intelligent-tutoring]]与[[intelligent-tutoring|AI辅导]]系统可以提出问题并引导[[help-seeking]]，而不是把答案拱手送出；[[simulation]]与[[game-based-learning]]环境让学习者构建并检验心理模型；由AI支持的[[project-based-learning]]和[[experiential-learning]]活动为学习者提供真实的建构任务。核心设计模式是**[[scaffolding]]** —— 随能力增长而淡出的校准式支持 —— 而非代劳。([[conversational-ai-tutors-framework]])([[embodied-inquiry-ai-facilitator-physics-2026]])

对*学习者提出的问题*进行分类，是看见建构发生并对其采取行动的一种方式。[[lee-learner-question-types-ai-education-2026|Lee、Atif与Kang（2026）]]把来自12门课程的11名IT学生的434个真实学习者问题归入三种建构主义教学角色 —— 知识传递者、促进者、共同学习者 —— 并训练四个transformer识别它们。DeBERTa对事实性知识传递者问题的分类精确率为96.67%，但对促进者问题只有78.79%，且每个模型都最常混淆两种更高阶的角色：检测对话式、探索性的探究远比检测信息寻求困难。由于该分类法把问题视为认知投入的诊断证据而非单纯的输入，它支持一个鲜明的建构主义设计动作 —— 当学习者反复只问事实性问题时，系统可以提示反思性、探索性的提问，发展[[metacognition]]和批判性探究，而不是按问题表面暗示的深度作答。

### "名为建构主义、实为行为主义"的风险

实证研究反复发现，宣称的建构主义目标与实际的AI实现之间存在落差。例如，一项职业教育中AI的[[meta-analysis-systematic-review|系统综述]]发现，建构主义理论在VET话语中被宣扬，而**行为主义的操练-练习设计在实践中占主导**，并警告了一种教育上的"图灵陷阱" —— 用AI复制而非增强人类教学。([[ai-vocational-education-training-review]])

这一模式在整个领域普遍存在：

- 当生成式AI替学生完成写作、推理或代码时，学习者就丧失了该任务本应培养的建构性思维过程 —— 这是[[cognitive-offloading]]与[[cognitive-offloading|过度依赖]]的核心关切。([[generative-refusal-ai-tools-for-thought]])
- 强调自适应反馈与效率的AI实现，往往服务不足建构主义所蕴含的学习者能动性、批判性反思与自主决策目标。([[ai-vocational-education-training-review]])

### 命名陷阱：生成式AI的输出不是生成性学习

该领域一个反复出现的混淆源于名称碰撞。**生成式AI（Generative AI）**指一类*技术* —— 生成文本、图像或代码的模型。**生成性学习（generative learning）**（Wittrock的生成性学习理论）指一种*学习者活动* —— 学习者通过在新信息与先验知识之间建立连接来主动制造意义，策略包括概括、绘制概念图、自测和自我解释。两者不是同一回事，混淆它们有真实的[[pedagogy|教学]]后果：AI为学生*产出*一份概括或一张图，恰恰是学生*执行*生成性学习行为的反面。[[genai-mindtool-generative-learning|Dabbagh与Fake（2026）]]直接建立在这一区分之上，主张GenAI思维工具只有在*学习者*驱动建构活动时才支持生成性学习 —— 借助AI辅助生成一幅思维图是生成性学习；让AI整体生成这张图则不是，无论输出多么流畅或正确。

决定性的问题是**谁执行了意义制造**：
- 是学生建构了一个解释，还是仅仅接收了一个解释？
- 是AI提示学习者建立连接，还是替他们提供了连接？
- 那个作品（概括、图、代码、模型）是学习者建构的*产物*，还是它的替代品？

这呼应了[[icap-framework|ICAP]]层级 —— 建构性与互动性投入胜过主动性与被动性 —— 但更尖锐：一个工具可以产出明显"看起来建构性"的输出，而学习者却处于*被动*或*主动*模式。因此，评估一个GenAI工具是否支持生成性学习，意味着检视建构的努力实际发生在何处，而不是看有没有生成式输出。这与"名为建构主义、实为行为主义"的陷阱是同一个，只是应用于生成这一特定情形：[[ai-writes-code-student-writes-model-2026|模型作者身份]]（AI写代码，学生写模型）是一种具体的解法 —— 即使AI提供了表面作品，学习者仍然建构*概念模型*。

### 基于建构主义的设计回应

- **生成式拒绝** —— 策略性地不产出生成文本而代之以提问的AI工具，把[[desirable-difficulties|认知摩擦]]还给用户，使表达本身的劳动构建理解。([[generative-refusal-ai-tools-for-thought]])
- **思维工具优先于答案机器** —— 把GenAI用作[[genai-mindtool-generative-learning]]，由学习者驱动工具，而非工具取代学习者。([[genai-mindtool-generative-learning]])
- **建构性冲突** —— 挑战学习者设计或推理的对抗性AI智能体，促其重新考量并更深入地建构替代方案，秉承苏格拉底式辅导的传统。([[ai-agents-constructive-conflict-design-education-2026]])

- **模拟的反对不是真正的反对。** 一个可以按需说出、却从不真正反抗的对立立场，排练了对话的编排却扣留了使它有力的东西：它没有具身、没有利害、不承担后果，因此与一个真人他者不同，它不提供任何通往修复的路径（[[synthetic-position-self-authorship-2026|Du等人（2026）]]）。
- **通过比较的内部反馈** —— 让学习者把自己的作品与AI生成的范例比较，使比较行为本身产生学习。([[ai-internal-feedback-evaluative-judgments]])
- **问题类型感知的提示** —— 把学习者问题分类为建构主义角色，使系统能刻意把学生从信息寻求提升到探索性、对话式探究，而不是镜像问题表面暗示的任何认知深度。由于促进者与共同学习者的意图对自动分类器而言仍易混淆，这一设计在用它驱动[[feedback]]或[[scaffolding]]之前保留人工验证分类。([[lee-learner-question-types-ai-education-2026]])
- **共同体作为评价标准** —— 学习者用AI作为设计资源，为自己的共同体设计某种真实的东西，而由共同体知识和共同体从业者作为评判结果的标准，为限制、拒绝或策略性不使用留出空间，只要批判性投入要求如此。([[ojeda-ramirez-community-based-ai-learning|Ojeda-Ramirez、Gyles与Peppler（2026）]])

## 建构主义与"关于AI的教育"

建构主义也塑造了AI素养本身如何被教授。如果知识是建构的，那么AI素养就不是靠讲授模型习得的，而是靠主动使用、批判和与AI共同构建习得的 —— 生成作品、质询输出、反思互动。([[hingle-collaborative-ai-literacy-2025]]) 这把[[ai-literacy]]定位为一种主动的、参与性的能力，而非一套被动知识，并把建构主义连接到[[critical-thinking]]以及学习者遭遇AI时的[[agency]]。

## 对设计与研究的启示

1. **保留建构性活动。** AI应当支架学习者自己的思考 —— 提示、提问、支持 —— 而非代劳。设计者应当追问：工具是增加还是取代了学习者的建构努力。([[generative-refusal-ai-tools-for-thought]])
2. **使用[[icap-framework|ICAP]]视角。** ICAP把投入分为建构性、互动性、主动性和被动性模式 —— 用它来评估AI互动是否真的唤起了建构性与互动性模式，而非被动消费。在学习目标允许时，设计者应偏向更深层（建构性与互动性）的模式。([[hingle-collaborative-ai-literacy-2025]])
3. **让理论与实施对齐。** 研究者应当超越AI是否"有效"，去看它*如何*体现一种学习理论，检查"名为建构主义、实为行为主义"的落差。([[ai-vocational-education-training-review]])
4. **研究学习者能动性与迁移。** 建构主义承诺意味着，不仅要评估即时的测验增益，还要评估学习者能否迁移并独立应用他们建构的理解。([[research-methods-aied]])

## 关联概念
- [[community-of-inquiry]] — 探究共同体（植根于建构主义/杜威实用主义）
- [[cognitive-psychology]] — 认知主义，学习理论的第三个古典极点
- [[active-learning]]
- [[learning-by-teaching]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[experiential-learning]]
- [[project-based-learning]]
- [[embodied-learning]]
- [[learning-design]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[agency]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[misconceptions]]
- [[learning-theories]]
- [[behaviorism]]
- [[chemistry-education]] — 化学教育与AI：实验、形成性评估、LLM的局限、实验哲学
- [[theory-development-aied]] — 教育中AI的理论发展
- [[productive-failure]]
## 关联文章
- [[lee-learner-question-types-ai-education-2026]] — 学习者问题被归入三种建构主义角色：传递者、促进者、共同学习者（Lee、Atif与Kang 2026）
- [[mishra-control-vs-agency-history-2025]] — 在AIED历史中将建构主义（Papert）与认知导师对置
- [[code-to-learn-genai-artifact-construction-2026]] — Code-to-Learn with GenAI：面向作品建构的建构主义框架
- [[ai-writes-code-student-writes-model-2026]] — 模型作者身份：与GenAI一起通过建构学习的理论与测量方案
- [[ai-vocational-education-training-review]] — VET中宣扬建构主义而行为主义AI占主导；"图灵陷阱"
- [[generative-refusal-ai-tools-for-thought]] — 为保护建构性思考而拒绝生成的AI工具
- [[genai-mindtool-generative-learning]] — 作为支持学习者建构之思维工具的GenAI
- [[ai-agents-constructive-conflict-design-education-2026]] — 促使建构性重新考量的对抗性AI智能体
- [[hingle-collaborative-ai-literacy-2025]] — 协作式AI素养与ICAP投入框架
- [[ai-internal-feedback-evaluative-judgments]] — 生成评价性判断的AI支持比较
- [[icap-cognitive-engagement-llm-agents]] — ICAP与LLM智能体的认知投入
- [[conversational-ai-tutors-framework]] — AI辅导系统中的支架式对话
- [[embodied-inquiry-ai-facilitator-physics-2026]] — 与AI促进者的具身探究
- [[beyond-detection-authentic-assessment-ai-2025]] — 真实评估与知识建构
- [[teacher-ai-teaming-five-levels]] — 设计中教师-AI协作的层级
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — 学习者与机器之间的认知共同能动性
- [[ojeda-ramirez-community-based-ai-learning]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — CogEvolution：模拟学生认知演化的生成式智能体

- [[synthetic-position-self-authorship-2026]] — 模拟的AI对立立场排练对话的形式，却扣留了迫使修订的反抗
