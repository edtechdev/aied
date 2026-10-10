---
title: 学生参与
created: "2026-08-13T05:32:35-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-regulated-learning, student-engagement]
technology: [generative-ai, learning-analytics]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
translation_of: concepts/student-engagement
source_updated: "2026-10-08T09:45:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学生参与** —— 学习者在学习过程中主动卷入的程度与质量，最常被分解为行为、认知与 [[affective-computing|情感]] 维度。在 [[ai-education]] 研究中，学生参与既是一项关键结果（人工智能工具能让学生保持参与吗？）也是一个机制（参与是否中介了人工智能设计与学习之间的关系？）它在概念上不同于学习本身 —— 参与是对学习的投入，而非认知增益的证明 —— 也不同于用来测量它的具体指标。

## 值得思考的问题

- 本页坚持参与不等于学习 —— 一名学生可以在行为上活跃（点击、花时间）而在认知上浅薄。你在哪里见过高的“参与”却只产生很少的学习，你是如何察觉的？
- 回想一个你深度认知参与的时刻 —— 真正与一个想法搏斗。与那些你只是忙碌或被打发娱乐的时刻相比，它有什么不同？一件人工智能工具能可靠地创造那种状态吗？
- 参与被分成行为、认知与情感维度，而它们可能分化。你认为研究者为什么坚持把它们分开对待，而不是当作一回事，你会测量什么来区分它们？
- 研究提示，与人工智能的深度认知参与预测学习，而浅层参与预测过度依赖。如果一件工具“有参与感”但浅薄，是谁的错 —— 设计、任务，还是学习者？
- 一件人工智能工具如何可能满足 [[agency|自主]]、胜任与关系（参与背后的需要），而不让这些特征变成取代真实学习的浅层娱乐？

## 引言

参与是一个扎根于教育心理学的多维构念。**行为参与** 指投入、努力、坚持与在任务上的活动。**认知参与** 指心智加工的深度 —— 精细化、[[critical-thinking|批判性分析]]、自我 [[regulation]] 与心智努力的投入。**情感参与** 指诸如兴趣、享受、[[anxiety-and-stress|焦虑]] 以及对学习的认同等情绪反应。这些维度可能分化：一名学生可能在行为上活跃（点击、花时间）而在认知上浅薄（被动接受输出），或在情感上有兴趣而在行为上分心。正是这种多维性，使参与不能被等同于任何单一的可观察行为。

### 学生参与在研究中的体现

- **参与作为人工智能设计的结果：** [[genai-motivation-engagement-2026|生成式人工智能动机研究]] 表明，[[generative-ai]] 支持的学习中的参与遵循基本心理需要（[[self-determination-theory|自主、胜任、关系]]）的满足 —— 参与是动机支持的下游结果，而非仅由技术可得性产生。参与常以 [[self-report-measures|自陈]] 测量，而行为参与来自互动日志，两者不可互换。
- **在一项整群随机课堂试验中，有参与增益而无学习增益：** [[domain-specific-chatbot-stem-enthusiasm-2025|Rücker and Becker-Genschow (2025)]] 把 195 个九年级班级（实验组 102 名学生）随机分配到一个特定领域的数学聊天机器人，或分配到传统差异化材料，上一节关于用海伦公式估计平方根的课。聊天机器人条件下的情境兴趣大幅上升（M = 2.63 对 2.43，p = 0.00005，Cohen's d = 0.63），且 [[technology-acceptance-model|技术接受模型]] 全部四个维度的接受度都很高，然而前后测表现比较未发现显著的组×时间交互（F(1194) = 2.84，p = 0.094），外在认知负荷还略高。该研究是定制聊天机器人在 [[k-12|中学]] [[math-education|数学]] 中少数几项整群随机检验之一，而它分裂的结果正是要点：兴趣与 [[learning-gains|学业]] 成就在不同的时间表上移动，因此一项参与发现不是学习的证据。
- **质量优于数量：** [[critical-engagement-code-completion|人工智能代码补全中的批判性参与]]、[[icap-cognitive-engagement-llm-agents|认知参与的话语分析]] 与 [[scaffolding-critical-engagement-genai-minority-students|支架化批判性参与]] 表明，与人工智能的*深度*（认知）参与预测学习，而*浅层*（行为）参与预测 [[cognitive-offloading|过度依赖]] 与学习取代，后者主导了本知识库的风险文献。
- **脆弱且依赖情境：** [[polished-artifacts-fragile-engagement-2026|打磨的制品，脆弱的参与]] 与 [[genai-tutor-engagement-patterns|多机构的参与模式]] 发现参与随任务、情境与学习者变化 —— 一件让一名学生深度投入的人工智能工具，可能在另一名学生身上产出浅层的、追逐输出的行为。
- **动机前因：** [[ai-availability-student-motivation|人工智能可得性与动机]] 表明，知道人工智能可用会降低努力型参与的被感知价值，对新手学习者尤其如此 —— 参与由期望、价值与感知胜任塑造的程度，不亚于由工具特性。**[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** 用目标设定理论的解释扩展了这一点，研究 **758 名大学 [[multilingual-learning|英语学习者]]** 在人工智能辅助学习中的情况，表明 **教师支持** 直接增强参与，并通过学生的**掌握趋近与表现趋近目标**（而非回避目标）起作用。因此，人工智能情境中的参与不只是个人或设计的结果 —— 它也被教师与学习者被鼓励采纳的目标取向**社会性地支架化**。

那 [[scaffolding]] 有一个具有双重路径的制度对应物。[[gai-advocacy-practice-art-education-2026|Chen 的 (2026)]] 两项研究设计（160 名艺术学生的情境实验、425 人受调查）发现，一所大学对生成式人工智能的倡导与其实际教学与评估实践之间被感知的不一致，通过两种相反的评价预测创造性过程参与 —— 经由阻碍为负（β = −0.060, p = 0.004），经由挑战为正（β = 0.217, p < 0.001） —— 而路径思维只强化正路，因此同一种制度条件使一些学生投入而使另一些学生疏离。

- **胜任与情感作为参与的驱动因素：** [[chatbot-engagement-genai-competency-emotion-2026|Zhao et al. (2026)]] 对与 [[llm]] 聊天机器人互动的 **871 名大学生** 建模，发现 **生成式人工智能胜任力** 既直接又间接地（通过 **积极情绪**，即情感路径）预测聊天机器人参与，且胜任与积极情绪都预测参与与积极的学习情绪。因此参与既是*技能* 也是*情感* 结果 —— 缺乏 [[teacher-ai-competency|人工智能胜任力]] 并经历焦虑或挫败的学习者会疏离，这对把 [[ai-literacy]] 训练当作参与干预而非仅仅一个技能目标有意义。
- **学生与人工智能聊天中的学科关联认知参与。** [[student-ai-conversations-cognitive-engagement-2026|Chang and Li (2026)]] 表明，学生向人工智能发出的提示平均编码约高 62% 的高阶认知要求，但 Bloom 层级的参与画像因学科而迥异（[[stem-education|STEM]] 以应用为主 20.8%，语言以理解为主 31.7%，社会科学以创造为主 33.8%）。用一套被试内设计，他们发现同一批学生在社会科学课程中产出的高阶提示显著多于 STEM 课程（p < .001），而课程层面的变异超过学生层面的变异 —— 证据表明与人工智能的认知参与受学科情境塑造，而非只受个人风格。
- **[[ai-feedback-quality|人工智能反馈]] 维持行为激活。** [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] 的整学期实验室田野实验发现，在开放式任务上收到个别 GPT-4 反馈的学生，在八项每周任务中维持了最高的参与度（到最后一轮约 50%，对比讲师反馈或同伴反馈组的约 30%），且每个回答多写约 29 个字符 —— 个别的人工智能反馈在广延边际（参与）与集约边际（每个回答的努力）上都激活了参与，即便学生对 [[peer-assessment|同伴反馈]] 的评分略高。
- **从学习构念预测学术性人工智能使用。** 一个探索性的 [[reinforcement-learning|机器学习]] 框架分析了 166 名大学生的调查数据，以识别与预期学术 ChatGPT 使用相关的学习相关构念，用 SHAP 分析保持 [[explainable-ai|可解释性]]。研究结果说明了参与、学习支持与其他构念如何塑造学生把人工智能工具纳入学业工作。
- **接触一件人工智能工具可能*降低*被测量的参与，而完成率不会显示出来。** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] 在一所大型美国公立大学随机分配了 13 个区块的导师访问权限，发现记录的平台参与下降 0.90 个标准差，页面浏览量下降 0.37–0.38 个标准差，活跃天数下降 0.51–0.61 个标准差 —— 而作业提交与按时提交未受影响。这种分离就是测量教训：一门只监控作业完成的课程会看不到任何东西，因为下降落在平台记录下来的讨论、测验与讲师互动活动中。受处理班级的学生也报告向讲师提的内容问题更少（约 57% 对 44%），因此下降伴随着从人际接触的替代，而非从课程的疏离。
- **回复延迟是一个参与杠杆。** 在 1,137 次量化人工智能辅导课中，更快的回复伴随更多学生消息与更多正确的练习（跨模型回复时间中位数 1.9 秒到 31.0 秒；更低延迟与参与相关，Spearman ρ=-0.81, p=.0056），作者把这一链条解读为解释了那些在教学品质上评分平平却达到人类水平增益的模型（[[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]）。
- **人工智能使用可能伴随更高的课堂缺勤，而自信并不预测它。** 一项对 291 名葡萄牙大学生的 PLS-SEM 调查发现，一般人工智能使用与缺勤正相关（β = 0.148, f² = 0.029），也与独立学习的自我效能正相关，然而自我效能本身不预测缺勤（β = −0.068, p = 0.276） —— 这是论文的“自信却缺席”模式。缺勤关联是中等且次于同伴影响的（β = 0.510, f² = 0.326）与时间管理的（β = −0.163），而且由于人工智能使用构念是一维的、把支持取向与替代取向的条目混在一起，该研究无法区分互补性使用与替代性使用，也无法确立方向（[[confident-but-absent-ai-use-absenteeism-2026|Franco et al. (2026)]]）。

### 测量参与：指标选择问题

参与通过一系列可观察的信号被操作化。**行为指标** 测量学习者*做* 什么（任务上时间、活动计数、互动频率、坚持）；**认知指标** 测量学习者*如何思考*（加工深度、批判性参与、话语分析）；**情感指标** 测量学习者*感受* 如何（情绪、动机、兴趣）；而**情境指标** 捕捉多任务与注意。人工智能教育研究日益把这些结合起来，并把参与当作人工智能工具设计与 [[learning-gains|学习结果]] 之间的中介机制，而非结果本身。

- **六个人工智能应用族 + 多方法测量：** [[ai-student-engagement-online-learning-review-2025|Zhou 的 (2025) 系统综述]] 对 24 项 Web of Science 研究作图，描绘了六种用于参与的人工智能应用 —— 课程设计中的 [[conversational-ai|聊天机器人]]、情绪／面部／语音识别与眼动追踪、用于数据分析的机器学习、师生互动支持、个性化反馈／推荐，以及智能学习环境中的人工智能驱动机器人。它发现，整合多个人工智能模态与数据源，比单源方法带来对认知、情感与行为参与更准确、实时的洞察 —— 强化了上述指标选择问题。

指标的选择是定义性的：一项把参与测量为*任务上时间* 的研究，可能在学生花更多时间与它互动时断定一件人工智能工具增强了参与，而一项把参与测量为*批判性加工* 的研究，可能对同一件工具得出相反结论。这就是为什么本知识库的研究区分参与（投入）与学习（实际认知增益） —— 见 [[genai-performance-vs-learning|表现对学习]] —— 以及为什么参与指标必须对照它们声称测量的东西加以验证。

- **参与作为一种脆弱的、依赖情境的信号：** [[polished-artifacts-fragile-engagement-2026|打磨的制品，脆弱的参与]] 与 [[genai-tutor-engagement-patterns|多机构的参与模式]] 发现参与随情境、任务与学习者变化 —— 同一件工具对一些学生产出强参与，对另一些学生产出浅层的、追逐输出的行为。
- **来自学习 [[edtech-platform|平台]] 的行为遥测：** [[engagement-forecasting-its|努力与进度预测]]、[[learning-engagement-assistant-lea|学习参与助手]]、[[engagement-assessment-video|视频参与评估]] 与 [[interactive-learning-dashboards-engagement|学习仪表盘]] 把行为与生理信号（注意、活动、坚持）翻译成用于自适应反馈与教师干预的参与指标。
- **生理感知增加了一个模态 —— 以及一个基线问题。** [[e3sense-multimodal-learner-engagement-sensing-2026|E3Sense]] 把干电极 EEG、眼动眼镜与前额皮肤电电极并置于头部，从 30 名大学生身上预测五级序数量表上的 450 个片段级参与评级：在融合的 [[multimodal]] 表示上，AdaBoost 达到 75.0% 的“差一级以内”平衡准确率，对比始终预测最常见评级的 63.0%。那个差距之窄正是要点 —— “差一级以内”的宽大判给把一个无传感器基线的大部分分数送给了偏态的评级 —— 而问学习者参与对他们意味着什么，使同一测量从 64.6% 移到 71.5%，证据表明 [[self-report-measures|自陈]] 标签，而不只是传感器，决定了此类分析能主张什么。
- **公平性约束需要留出被试才能成立。** 一个多模态注意估计器的性别目标正则化器把验证 MAE 差距从 0.02 降到 0.005，却在留出被试上增大了差距与最差组误差，因此分组感知、重复的被试级验证属于任何参与感知论断的一部分（[[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]）。
- **参与作为一种学习者建模信号：** [[engagement-intensity-learner-modeling|参与强度作为学习者建模信号]] 用参与强度为自适应人工智能系统提供信息，把参与指标定位为 [[student-modeling]] 与 [[adaptive-learning]] 的输入，而非仅仅是评估输出。

### 参与对学习

本知识库研究的一个中心主题是，参与与学习必须区分开来。产生高参与（任务上时间、互动量）的人工智能工具，可能并不产生学习，如果那种参与是被动的或取代了理解的 [[cognitive-offloading|认知工作]] —— 见 [[genai-performance-vs-learning|表现对学习]]。反过来，生产性挣扎与 [[desirable-difficulties|合意的困难]] 可以在表层参与感觉更低时仍产生学习。因此参与最好被当作一种*机制* —— 其价值在于它反映或促成有意义的 [[cognitive-psychology|认知加工]] —— 而非一个终端结果。

这一区分不是纯学理的。[[pramod-agentic-ai-motivational-pathways-2026|Pramod and Patil (2026)]] 把参与置于其 PLS-SEM 模型的中心，介于一侧的动机与 [[community-of-inquiry|社会存在]] 和另一侧的*感知* 表现之间 —— 是他们模型中最大的系数，而它仍然是一种感知，而非对学习的测量。

### 教学法中介人工智能对参与的影响

一项对 [[higher-ed|高等教育中人工智能]] 的系统综合（[[long-ai-higher-ed-engagement-teaching-methods-2026|Long et al., 2026]]）强调，人工智能工具被嵌入其中的**[[teacher-role|教学]] 方法是它是否让学生投入的决定性中介**。聊天机器人、自适应系统与预测性分析，在部署于互动性教学法之中时 —— 翻转课堂、[[project-based-learning|项目式学习]] 与支架化的 [[feedback|反馈循环]] —— 最能增强参与，而非作为独立工具。该综述把它形式化为 **PMAISE 模型**（[[pedagogy|教学]] 中介人工智能以促学生参与），映射人工智能 [[ai-technologies|技术]]、教学策略与参与的情感、行为、认知维度之间的对齐。其意涵是：参与结果由工具*与* 周围的 [[learning-design|教学设计]] 共同产出 —— 同一个人工智能可以在一种教学法中放大参与，在另一种中抑制参与。

### 与相关概念的关联

学生参与连接到 [[motivation]] 与 [[self-determination-theory]]（其心理驱动因素），以及 [[student-experience]]（活生生的情境）。它的测量依赖 [[learning-analytics]] 与 [[educational-measurement]]，它们为操作化上述维度提供 [[quantitative-research|量化]] 工具。深度与浅层参与之间的区分直接连接到 [[self-regulated-learning]]（自我调节的学习者策略性地参与）、[[cognitive-offloading]] 与 [[cognitive-offloading|过度依赖]]（浅层依赖作为失效模式）以及 [[metacognition]]。在系统设计中，参与信号汇入 [[student-modeling]] 与 [[adaptive-learning]]，而参与结果出现在 [[research-methods-aied]] 对人工智能教育干预的评估中。

- **学习者特征调节基于 TTS 对话的课程（2026）：** 在由大模型加 TTS 生成的师生、生生与师师对话课程中，[[experiential-learning]] 风格与批判性思维倾向显著地与对话格式交互作用于基于 ARCS 的动机，表明人工智能生成的对话内容依学习者画像而具有不同的激励效果（[[tts-dialogue-lessons-learner-characteristics-2026]]）。
- **小学阶段的维度特定增益（2026）：** 一项为期九周、301 名 5 年级和 6 年级学生的生成式人工智能支持二语 [[writing-education|写作]] 项目提升了行为与情感参与，却让认知与元认知参与未变，其作者把写作中自我监控的减弱命名为一项长期风险（[[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]）。这一模式是上述参与对学习区分的一个具体实例：更多活动与更多享受并未转化为更深的加工。
- **分离可以朝相反方向发生（2026）：** 在一门为期 12 周的职业室内设计课程中，一个内嵌大模型助教的沉浸式 VR 工作室，把认知（d = 0.90）与行为（d = 0.75）参与提升到传统 [[project-based-learning|项目式]] 教学之上，而情感参与无显著差异（d = 0.38） —— 恰与上面的二语写作案例相反（[[ai-ive-pbl-vocational-design-creativity-2026|Jin et al. (2026)]]）。这里的认知与行为增益伴随*更低* 的报告认知负荷，作者把它归因于助手吸收了检索与跨学科整合的努力。与写作案例对照读，两项研究提示：一项人工智能支持的干预移动了哪个参与维度，是设计的属性 —— 话语密集的沉浸式 [[collaborative-learning|协作]] 对单独写作支持 —— 而非人工智能协助本身的属性，且不能从高保真或智能反馈中假定一项情感优势。

- **人工智能素养通过心理资源作用于参与（2026）：** 一项对中国郑州 1,198 名本科生的有调节中介研究（[[ai-literacy-learning-engagement-psych-capital-2026|Wang, 2026]]）把参与建模为 [[ai-literacy]] 的结果，而非工具使用的副产品。人工智能素养直接预测学习参与，也通过建立心理资本间接预测，间接路径承载了总效应的约一半 —— 部分中介，因此一种技术胜任力只有部分通过它产生的心理资源转化为参与。职业承诺这一身份类变量调节了心理资本到参与的关联，而自身没有直接效应，且心理资本向参与的转化对自认正走向该专业的学生明显更强。这一模式是上述“学习者特征调节人工智能如何影响参与”这一点最清晰的可得实例。
- **人工智能课前练习可以提高现场参与（2026）：** 一项对 759 名 MBA 学生的预注册田野实验发现，用基于语音的人工智能讨论伙伴做准备，使后续课上的自愿贡献提高约 31%，但只在第二次使用之后；第一次使用之后参与度反而更低（[[assigned-ai-preclass-student-engagement-2026|Wang et al., 2026]]）。

## 关联概念

- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[community-of-inquiry]] — Community of Inquiry (agentic engagement as a CoI dimension)
- [[eportfolio]]
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[student-modeling]]
- [[adaptive-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[framing-ai-use-for-students]]
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)
- [[self-report-measures]]
- [[productive-failure]]

## 关联文章

- [[assigned-ai-preclass-student-engagement-2026]] — Voice-based AI pre-class practice raised voluntary class contributions by ~31%, but only after a second use (Wang et al. 2026)
- [[confident-but-absent-ai-use-absenteeism-2026]] — AI use tracked with greater class absenteeism while self-efficacy did not predict it, with peer influence the dominant correlate (Franco et al. 2026)
- [[gai-advocacy-practice-art-education-2026]] — When universities advocate GAI but practice falls short: student appraisals and creative process engagement in art education

- [[e3sense-multimodal-learner-engagement-sensing-2026]] — Head-confined EEG, eye tracking, and EDA predict five-level engagement ratings, while learners' own definitions shift the mapping (Anupkrishnan et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[ai-student-engagement-online-learning-review-2025]]
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: systematic review of engagement + mediating role of teaching methods
- [[genai-motivation-engagement-2026]] — Impact of Generative AI on Student Motivation and Engagement
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion
- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns
- [[polished-artifacts-fragile-engagement-2026]] — Polished Artifacts, Fragile Engagement
- [[ai-availability-student-motivation]] — "Why Put in This Much Effort?": How AI Availability Shapes Motivation
- [[genai-performance-vs-learning]] — Distinguishing Performance Gains From Learning
- [[scaffolding-critical-engagement-genai-minority-students]] — Scaffolding Critical Engagement With GenAI
- [[engagement-intensity-learner-modeling]] — Engagement Intensity as a Learner-Modeling Signal
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant
- [[engagement-assessment-video]] — Engagement Assessment in Video Learning
- [[engagement-forecasting-its]] — From Heuristics to Analytics: Forecasting Effort and Progress
- [[interactive-learning-dashboards-engagement]] — Interactive Learning Dashboards and Engagement
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[chatbot-engagement-genai-competency-emotion-2026]] — GenAI competency and emotion as drivers of chatbot engagement (Zhao et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[gpt4-feedback-student-activation-2026]]
- [[genai-writing-program-primary-l2-motivation-engagement]] — Dimension-specific engagement gains at the primary level (Lu et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Cognitive and behavioral engagement up, affective engagement flat, in an immersive VR PBL studio (Jin et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Cluster-randomized secondary mathematics trial: situational interest rose with a customized chatbot while test performance did not (Rücker & Becker-Genschow 2025)
- [[ai-literacy-learning-engagement-psych-capital-2026]] — AI literacy drives engagement directly and through psychological capital, amplified by professional commitment (Wang 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Access to an AI tutor lowered recorded platform participation by 0.90 SDs while homework submission held steady (Liu et al. 2026)
