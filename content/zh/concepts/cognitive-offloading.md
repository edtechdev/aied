---
title: 认知外包
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [metacognition, self-regulated-learning]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners]
connected_faqs: [top-10-findings-ai-education-instructors, does-ai-help-students-learn, how-ai-impacts-students, addressing-common-misconceptions-ai-education, reducing-over-reliance, verify-ai-output, study-with-ai, asynchronous-online-courses-ai]
confidence: high
connected_resources: [pause-ai-use-self-examination, student-guide-to-ai]
translation_of: concepts/cognitive-offloading
source_updated: "2026-10-07T15:40:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **认知外包（cognitive offloading）** — 借助外部工具（包括 AI）来降低内在认知需求，把心智负担从学习者转移给系统的做法。在[[ai-education|教育中的人工智能]]中，认知外包是 AI 工具既能支持学习、也能损害学习的核心机制：恰当的外包能把认知资源解放出来用于更高阶的思维，而过度的外包则绕开了持久学习所必需的加工。**过度依赖（over-reliance）**是这一光谱上有害的末端 — 外包从策略性支持越界为学习替代的那种无成效模式。

## 值得思考的问题

- 认知外包是借助外部工具 —— 包括 AI —— 来降低内在认知需求。本页明确指出，外包本身并无害处：笔记本、计算器和搜索引擎都在外包。你认为由 AI 中介的外包与这些熟悉工具有何不同、为何可能影响更深远？
- 一种常见的假设是，问题出在 AI 用得太多。但本页把过度依赖与单纯的使用频率区分开来 —— 关键是一种替代了学习的使用模式，而非使用 AI 的频繁程度。你能描述一种频繁但健康的使用 AI 的方式，以及一种罕见但有害的方式吗？
- “加速错觉”指的是：AI 辅助的工作感觉更快、更轻松，造成一种具有误导性的高效印象，掩盖了学习上的减损 —— 学生把任务完成的速度与学习混为一谈。你什么时候曾因为快速完成某件事而感到高产，后来却意识到自己几乎没从中学到什么？
- 研究发现，外包的危害是有条件的，而非固有的：“充当教练的 AI 会保持甚至提升技能，取而代之的 AI 则带来衰退的风险。”一个为你的思考搭脚手架的 AI 与一个替代你思考的 AI，其实践差异是什么 —— 你如何判断自己拿到的是哪一种？
- 一项研究显示，仅仅能够获得 AI 的建议，就几乎消除了人们说“我不知道”的意愿 —— 即使在建议错误时也是如此 —— 同时几乎把自信翻倍、把准确率降到三分之一。这对我们理解 AI 如何改变对自身无知的认识有何启示？
- 本页提出了一种元认知公平差距 —— 一种“AI 版的马太效应”：因为富有成效地使用 AI 需要先备知识和元认知，本就处于优势的学生获益更多，而最需要练习的学生却最可能把学习外包出去。教育者或设计者应当如何应对同一个工具会扩大既有分化这一事实？

## 引言

认知外包本身并无害处 —— 人类一直借助外部工具（笔记本、计算器、搜索引擎）来降低认知负荷。AI 中介的外包之所以不同，在于其全面性：[[llm|大语言模型（LLM）]]能生成完整的解答、解释和分析，可能彻底消除产生学习所必需的认知过程。

### 认知外包在 AIED 研究中的表现

本知识库的文章记录了认知外包在多个维度上的表现：

- **把自我反思工具化，而不是测量一种特质：** PAUSE（Patterns of AI Use: Self-Examination）把 2023–2026 年的外包文献转化为一份四领域的自查表 —— 推理与批判性思维、创造力与原创性、研究与学习、社交与沟通能力 —— 条目采用反向计分，每条都附文献锚点，不设综合分数，也不声称具有效度（[[pause-ai-cognitive-offloading-self-reflection-2026|Alam，2026]]）。其设计立场是：针对外包的有效干预在于促发反思，而不是作出诊断，因为还没有任何测量工具具备支撑关于某个人的重大决定的地位。

- **提示模式作为外包的痕迹：** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk 等（2026）]]运用共现[[network-analysis|网络分析]]表明，反应式提示（缺少领域背景的质疑）指示更高的外包程度，而嵌入指令、富含背景的提示则反映了投入的认知。AI 使用的*方式* —— 而不只是是否使用 —— 决定了外包的程度。

- **自然情境下消息级的大规模证据 —— 外包是被观察到的，而非被假定的：** [[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia 等（2026）]]使用 GPT-4o-mini（强制附带思维链推理）编码了来自一所欧洲大学 46 名本科生、横跨七周备考窗口的 3,047 条[[conversational-ai|ChatGPT]]消息，并在一名受过训练的人工评定者身上以 200 条消息验证了该流水线（问题类型的 Cohen's κ = 0.76，布鲁姆层级为 0.75）。在该分布中居首的是 Analyze，占 27.28%（831 条），其后是 Understand 的 23.76%，这是首份细粒度证据，表明自然情境下的[[student-ai-interaction|学生–AI 使用]]常规地瞄准的是更高阶的工作，而非记忆。一个包含 16 名学生、其 1,140 条消息被人工编码的子样本（附有成绩数据），提供了提示级痕迹无法提供的东西：125 段对话中有 49.6% 未出现外包，34.4% 为轻度、16.0% 为重度；该量表把*重度*保留给 AI 生成初稿并构建核心智力成果的情形。重度外包压倒性地是一种 Create 现象（20 段重度对话中的 80%，全部 Create 对话中的 42%），作者据此认为外包程度与布鲁姆层级是值得分别测量的两个维度。成绩模式仅具描述性 —— 顶层为 17.6%，中间层 17.5%，底层 5.9%（χ² = 5.80，df = 4，p = 0.215）—— 且部分依赖于一名以编程为主的学生，将其剔除后顶层比例降至 8.9%，因此作者主张学科对委派习惯的塑造强于成绩，并建议对实际使用模式提供[[metacognition|元认知]]反馈，而非加以禁止。

- **加速错觉：** [[cognitive-offloading-speedup-illusion|关于加速错觉的研究]]表明，AI 辅助的工作*感觉*更快、更轻松，造成一种具有误导性的高效印象，掩盖了学习上的减损。学生把任务完成的速度与学习混为一谈，这是一种元认知盲区。

- **无引导 AI 带来的学习损失：** [[generative-ai-guardrails-harm-learning|高中数学随机对照试验]]表明，缺乏[[guardrails|护栏]]的 GenAI 产生的学习结果差于传统教学。[[generative-ai-reduced-study-time-math|学习时间缩短]]与学习减损相关 —— 学生完成任务更快，但记住的更少。

- **在 45 天延迟上对外包预测的随机检验 —— 且这一差距不只是省下的时间：** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui（2025）]]将 120 名本科生随机分组，分别以不受限的 ChatGPT（GPT-4 网页界面，无提示指导）或传统非 AI 方法学习 AI/机器学习主题，45 天后进行了一次突击式的 20 题概念测试。AI 辅助组得分 57.5% 对 68.5%（t(83) = −3.19，p = .002，Cohen's d = 0.68），且这一劣势在把自陈学习时间控制为常量的 ANCOVA 中依然成立（F(1, 82) = 7.89，p = .006；调整后均值 6.50 对 5.85），因此它不只是时间数量的产物。该文的外包论证是：ChatGPT 直接提供了综合与解释，这使它成为一种性质上不同于计算器的委派形式 —— 它可以吸收理解，而不只是检索。

- **外包并非总是有害的 —— “教练”这一边界条件：** [[coach-not-crutch-ai-writing|Lira 等（2025）]]表明，AI 可以既降低练习投入、又改善学习环境，实现“做得更少，学得更多”。用 AI 工具练习写作的成年人，写出比独自练习者更好的无 AI 书信 —— 甚至优于人类编辑给出的个性化反馈 —— 且没有出现掌握错觉的膨胀。与上述危害的和解在于**外包的形式**：Lira 等的 AI 是*搭脚手架*（呈现范例与反馈，同时让学习者保持参与），而非*替代*认知行为本身。[[ai-making-us-stupid|技能与基本能力视角]]收敛于同一边界：**充当教练的 AI 保持甚至提升技能，取而代之的 AI 则带来衰退的风险。**[[caeai-ai-scaffolding-inquiry-profiles-middle-school-2026|Kilinc 等（2026）]]在一间中学农业 STEM 课堂里为这一边界给出了数字。在 12 个小组的 42 名八年级学生中，模型采纳占 Most Improved 剖面中编码协作参与回合的 74.1%，而认知外包与协作僵局在 Struggling 剖面中合计达 80.8%。因此外包对学习的影响是有条件的，而非固有的。

- **批判性[[student-engagement|参与]]对外包：** [[favero-critical-ai-tutors-empower-enslave-2025|Favero 等]]把[[intelligent-tutoring|AI 导学系统]]框架为赋权型（支持主动认知）或奴役型（促成被动外包），连接到[[critical-thinking|批判性思维]][[research-methods-aied|研究]]。

- **元认知意识：** [[metacognitive-awareness-experiential-vs-instructional|关于元认知意识的研究]]考察学生是否能识别自己何时在外包、何时在学习 —— 以及教学干预能否改善这种校准。

- **具身智能作为外包之外的选择：** [[zhu-e3-hot-embodied-intelligence-sustainable-learning|E3-HOT 框架]]主张，为对抗 AI 诱发的认知外包和与真实情境脱节的学习，AI 应围绕*具身智能*来设计（情境嵌入、具身参与、认知创造），使学习者保持认知能动性与高阶思维，而不是将其外包出去。这把具身的、[[situated-learning|情境化的]] AI 设计框定为外包风险的积极对应物，连接到[[distributed-cognition|分布式认知]]与[[embodied-learning|具身学习]]。

- **分布式认知的效率–[[regulation|调节]]权衡：** [[hao-human-ai-collaborative-problem-solving-cognition|Hao 等]]表明，在人机协作中，向 AI 外包最多的模式（委派式推理）在任务上表现最好，却与自我调节的降低相关 —— 这是外包的效率增益以学习者调节性参与为代价的实证证据，与[[self-regulated-learning|自我调节学习]]的关注点相收敛。

- **疲劳与认知负担：** [[ai-fatigue-academic-contexts|AI 疲劳研究]]记录了持续的[[student-ai-interaction|AI 交互]]如何造成其自身的认知负担 —— 这是一种悖论：外包一项任务反而增加了管理 AI 输出的认知负荷。

- **元认知信念与经验框架：** [[cognitive-offloading-metacognitive-review-2026|Guo 与 Ye（2026）]]运用 Nelson 与 Naren 的动态元认知模型来调和该领域相互矛盾的干预发现。他们区分元认知*信念*（稳定的、自我指涉的自我概念，在任务前锚定外包选择）与元认知*经验*（任务特定的、动态的感受，在任务中驱动信念更新），由此得出**时机–成分匹配**原则：针对信念的反馈在任务前最有效，而针对经验的反馈（即时正确性指示）在任务中最有效。他们还将**替代式外包**（以外源辅助替代内部加工）与**重复式外包**（对其进行补充）形式化 —— 当外部存储消失时，替代式外包者大幅下滑，而重复式外包者仍保持准确 —— 并用**提醒偏差**量化对最优外包的偏离。这与上述“教练对拐杖”的边界相收敛：搭脚手架的外包保持技能，取而代之的外包则带来衰退的风险。

- **针对学术写作中 AI 依赖的形式化问题性使用模型（I-PACE）：** [[ai-dependence-academic-writing-ipace-2026|Liu、Zhuang 与 Wang（2026）]]把成瘾性技术使用的 I-PACE 模型扩展到高校[[writing-education|学术写作]]中的生成式 AI 依赖。在一个[[mixed-methods-research|混合方法]]中国样本中，学业压力是 AI 依赖最强的预测因子，[[ai-literacy|AI 素养]]是保护性因素（素养越低 → 心理依赖越多），而感知到的信任中介了从社会影响到依赖的路径 —— 因此依赖通过“社会影响 → 信任 → 行为”的路径形成，而不只是个人工具使用。他们的[[qualitative-research|定性]]数据补充了一个政策维度：学生报告了策略性地规避[[ai-detection|抄袭检测]]，并把“何种 AI 使用算合规”规则模糊作为临时应付的诱因，把外包连接到[[academic-integrity|学术诚信]]。

- **认知债务与偶发式–习惯性外包之分：** [[critical-thinking-paradox-genai-learning-2026|Lin 与 Al-Hada（2026）]]把“批判性思维悖论” —— 成果改善而认知参与下降 —— 通过一个分化的三层框架（表层/中间/深层 AI 角色）和*认知债务*构念形式化：元认知校准与无辅助高阶表现的潜在累积性下降，并在 AI 辅助事件之后持续存在。其关键概念进展在于区分**偶发式外包**（有意为之、任务特定的委派，且保留觉察）与**习惯性外包**（例行、监控薄弱的依赖），并预测后者在深度加工任务上会产生成果–过程分离 —— 评分更高的作业，但无辅助的延迟迁移表现更低。

- **外包到再分配光谱：外包可以重新分配投入，而不只是减少投入。**[[yan-cognitive-outsourcing-genai-assessments-2026|Yan 等（2026）]]把 Biggs 的前置–过程–成果模型应用于日本和中国撰写无监督议论文的 38 名本科生，把学生–GenAI 参与定位于一个以**认知外包**与**认知再分配**为两极的光谱上 —— 即 GenAI 时代对应于表层与深层方法的类比。再分配的少数派报告总投入*未变*，只是焦点发生了转移，把资源从低层次的检索移向批判性评价与反思性整合（每次会议后撰写反思笔记，以对抗浅层保持），这使“外包必然减损认知”的假设得以限定。然而，再分配是例外：78.94% 只在动笔前或成稿后接触 GenAI，而非与独立工作交替进行；76.32% 依赖“一问–得答–停止”的单轮模式（23.68% 维持迭代式对话），因此产生再分配的整合行为必须被教授，而不能被假定。

- **元认知训练降低提醒偏差（直接实证证据）：** [[metacognitive-training-optimal-cognitive-offloading-2026|Ngai 与 Gilbert（2026）]]首次清晰证明，简短的干预可以使外包在可测量上变得更优。两项预注册实验（N=164，N=416）发现，**仅五次把绩效预测与真实的逐次反馈配对的练习**就改善了元认知校准、降低了提醒偏差。四组相加式设计分离出了机制：**单独预测无效；加入绩效反馈推动了改善；明确标注过度/不足自信则没有进一步的增益。**效应出现在*绝对*（而非带符号的）偏差上 —— 训练纠正了双向的个人校准失准。这在实证上验证了上述信念–经验框架：改变外包行为的是*针对经验的反馈*，而不是信念或预测本身。作者把成功归因于与外包最优性挂钩的金钱激励，加上即时的真实反馈。

- **任务内的反思提示使依赖更具辨别力，而非更具防御性：** [[ren-metacognitive-awareness-genai-reliance-2026|Ren（2026）]]把 342 名本科生随机分入三种条件（无 AI、开放式多轮[[conversational-ai|ChatGPT]]支持，以及同样的支持外加一个关于自身推理、以及什么才能证明拒绝该 AI 解释为正当的简短反思提示），发现开放式支持条件下对错误 AI 建议的接受率为 62.4%，反思提示将其降至 39.7%（OR = 0.40），而两个辅助条件下的建议准确率相当（66.3% 对 67.0%），对正确建议的对齐度仍保持在高位。反思还改善了感知依赖与行为依赖之间的意识校准（0.59 对 0.41），并将一个 AI 专属归因偏差指数从 0.42 降至 0.21。这与上述训练研究是同样的*针对经验*机制，只是被应用在决策情境之中；它支持本页“监控而非频率”的过度依赖解读：仅仅知晓模型局限本身并不能阻止学生接受看似合理的错误建议。

- **元认知懒惰与一个新的元认知[[equity-in-ai-education|公平]]差距：** [[lodge-loble-cognitive-offloading-2026|Lodge 与 Loble（2026）]]是一份面向澳大利亚学校教育领域的报告，主张 GenAI 的核心风险是认知外包，而非[[academic-integrity|抄袭]]。他们采纳**元认知懒惰**（Fan 等，2024）—— AI 的便利削弱了学习者对必要自我调节过程的参与，使学习者把元认知责任让渡给工具 —— 并提出**元认知公平差距**（一种“AI 版的马太效应”）：因为富有成效地驾驭 AI 需要[[prior-knowledge|先备知识]]与元认知，本就处于优势的学生获益更多，而最需要练习的学生却最可能把学习外包出去，从而扩大既有分化。他们提出的补救办法是**教师增强**（把工具交给专家教师以规模化其实践，有研究表明面向教师的 AI 以低得多的成本改善成果），而非面向学生的 AI 导学系统，并配合降低负荷的教学与元认知提示。

- **过度依赖是跨所有[[conversational-ai|对话式 AI]]世代的头号[[ethics|伦理]]关切。**对对话式 AI 智能体的[[conversational-ai-agents-umbrella-review-2026|伞形综述]]（Ganguly 等，2025，34 篇综述）报告，人–AI 关系方面的关切 —— 包括过度依赖与社交互动的减少 —— 是**所有 CAI 世代中被讨论最频繁的伦理议题**，其出现早于 GenAI。它还把教育影响与认知关切（包括过度依赖与批判性思维退化）列为被讨论第二多的挑战类别，凸显外包的危害是一个跨世代的持久主题，而非 GenAI 特有的新奇现象。([[conversational-ai-agents-umbrella-review-2026]])

- **教师作为认知的反思性调节者：** [[teachers-reflective-regulators-cognition-offloading|Ho 与 Chen（2026）]]把外包理论扩展到*职业性*的 AI 判断，访谈了 18 名在职教师。他们识别出一种“元认知生态”，其中教师识别、重新分配并与 GenAI 反思性地重新接合认知，把 AI[[framing-ai-use-for-students|框定]]为认知伙伴而非思维替代品 —— 并把“职业漂移”标记为风险：当外包在受 AI 增强的[[teacher-role|教师角色]]与[[administrator|行政管理]]中未经反思时。

- **外包是基于价值的决策，而某些学生比其他人更脆弱。**[[seung-basham-cognitive-offloading-swld-2026|Seung 与 Basham（2026）]]是一篇发表于 *Learning Disability Quarterly* 的概念综述，综合认知科学、[[special-education|特殊教育]]与教育技术，把 GenAI 外包建模为由绩效目标、任务难度、学业自我效能与对工具的感知所塑造的成本–收益决策。他们认为**有学习障碍的学生（SWLDs）**尤其易受次优外包之害 —— 因为升高的认知负荷、避努力的绩效目标、较低的学业自我效能与对 GenAI 的过高期望，使过早或过度的委派更有可能。GenAI 被框定为**补偿性辅助或捷径，取决于外包决策如何与学习者画像及[[learning-design|教学设计]]互动**，而教学上的[[guardrails|护栏]]是关键调节因素（教授元认知自我调节、培养[[ai-literacy|AI 素养]]以校准对工具的信任、编排掌握经验、不仅评价成果也评价过程）。这扩展了外包的公平维度：同一个降低准入障碍的工具，若无护栏，可能替代 SWLDs 最需要的练习本身。

- **外包风险是发展性的。**[[niu-genai-children-creative-thinking-cognitive-development-review-2026|Niu 等（2026）]]梳理了关于[[generative-ai|GenAI]]与儿童[[creativity|创造力]]的 24 项证据来源，发现[[cognitive-offloading|过度依赖]]与提示依赖是反复出现的风险，在较低年级最强，同时存在基于模板的思维，以及儿童难以判断某个 AI 建议是否原创的问题；一项 fMRI 比较记录到，在与 ChatGPT 互动时认知控制与注意网络的参与低于人际对话。由于更年幼的儿童缺乏文本式提示所要求的语言与元认知技能，作者建议把[[ai-literacy|AI 素养]]、作者身份与无辅助的构思保持在活动本身之内，并独立于 AI 辅助成果单独测量原创创造力。这为上述脆弱模式增加了一个年龄维度。

- **“思考更少还是学习不同”的问题是有条件的。**[[nesnin-cognitive-offloading-ai-students-2026|Nesnin 等（2026）]]提供了一篇更宽的分析综述，结论是 AI **不必然使学生思考得更少，而是改变了他们学习的方式** —— 结果取决于使用。澄清、验证与引导的 AI 增强学习，替代独立思考的 AI 则产生被动依赖。这收敛于本知识库无处不在的“脚手架对替代”边界，以及对外包危害的有条件观点。

- **外包是分层敏感的：委派的深度重要，而不只是其发生与否。**[[layer-sensitive-cognitive-offloading-writing-2026|Chen（2026）]]为[[writing-education|学术写作]]提出了一种分层敏感的说明 —— 表层（语法/词汇）、结构层（提纲/顺序）、观点层（论点/内容）与推理层（依据/反论点/论证逻辑）。在一项为期八周的准实验中，开放式 AI 协作产生了最高质量的*受支持*写作，却出现最低的独立无 AI 成果，更深的委派层级与独立的[[higher-ed|高阶思维]]呈最强负相关（推理层外包间接效应 ab = −0.34，表层为 −0.08）。[[self-regulated-learning|自我调节的写作]]削弱但未能消除这一危害。这细化了脚手架–替代边界：某些委派层级搭脚手架，而更深的层级替代了构建[[critical-thinking|批判性思维]]的认知本身。

- **对外包预测的因果检验，符号却相反：用 ChatGPT 写作产生的学习*少于*无辅助写作。**[[chatgpt-writing-cognitive-impact-2026|Wagner-Kobayashi（2026）]]进行了一项被试间实验：35 名心理学专业学生用 20 分钟对一段输入文本进行阐释加工，仅实验组可使用 GPT-3.5，并在前后各参加一次相同的知识测试。所假设的组 × 时间交互显著（F(70) = 5.889，p = .018），但方向相反 —— 无 ChatGPT 组学得更多（后测 M = 8.29 对 6.94；b = −1.450）—— 证伪了 ChatGPT 会放大[[metacognition|阐释加工]]的[[writing-education|以写促学]]预测。流失的正是阐释性投入本身：参与者在与工具的对话中只产出了 2.25 个例子和 0.88 处连接，并报告说把字数优先于深度，作者将其解读为*利用不足* —— 工具可用却未被调用，与本页别处记录的脑力投入降低、复制粘贴行为相一致。一旦[[motivation|动机]]进入模型，组 × 时间效应便坍缩（p = .280），而更高的动机与主题兴趣只在 ChatGPT 组内部预测增益，因此受工具之害的是低动机、低兴趣的学生 —— 这是对本页所记“通往过度依赖的动机路径”的实验支持。作者对这一结果作了狭义的解读（在时间压力下、无训练的一个小的、违背假设的效应），并建议教学生如何调用工具，而非禁用工具，这使该发现停留在脚手架–替代边界上，而非对工具的定论。

- **投降–外包–能动性连续体。**Sydney 的 PreK-12 快速综述（Arthars 等，2026，271 篇论文）把 GenAI 使用框定在认知、元认知与情感维度上：*[[cognitive-surrender|投降]]*（与学习相关的工作责任转移给 GenAI，常常是不自知的）、*外包*（有意为之、可能有成效的委派，只有经检验/阐释后才成为学习）与*能动性*（保留对投入与判断的责任）。它还警告**元认知不平等**：元认知较弱的学生更易受有害外包之害，也更无力识别它。([[young-people-learning-generative-ai-rapid-review-2026]])

- **依赖受自我效能的支配，与能力相当。**AI 依赖不只是技术技能的产物：[[student-dependency-on-ai-literacy-self-efficacy-2026|Maizel 等（2026）]]表明，基于技能的 AI 素养预测更高的依赖（与“赋能能力/外包”观点一致），而 AI 与学业自我效能缓冲了过度依赖 —— 说明外包受动机性自我效能信念的支配，与受能力支配相当。

- **外包改变的是回应的阈值，而不只是容量。**[[ai-advice-suppresses-ikt-suspension-2026|Marcoccia 等（2026）]]表明，仅仅能够获得 AI 的建议，就几乎消除了人们说“我不知道”的意愿 —— 即使在建议错误时 —— 同时几乎把自信翻倍、把准确率降到三分之一；激励恢复了准确率（通过降低依赖），但没有恢复悬置。

- **安全差距作为外包奋斗的代价。**[[wang-safety-gap-productive-struggle-2026|Wang 与 Shan（2026）]]把学生的 AI 辅助表现与其无辅助能力之间的分化形式化为“安全差距” —— 当 AI 承担了认知工作而学习者无法复现它时的认知风险。[[kim-ai-productive-failure-adult-2026|Kim 等（2026）]]与[[puech-pedagogical-steering-llm-productive-failure-2025|Puech 等（2025）]]表明[[productive-failure|生产性失败]]设计（扣留答案、保留奋斗）是对策。

- **ICAP/SAMR 光谱把外包框定为一个模式连续体，而非二元对立。**[[thermomix-genai-education-analogy-2026|Rummel、Nachtigall 与 Panadero（2026）]]把 Thermomix 厨房机器的类比映射到[[icap-framework|ICAP]]与[[samr-model|SAMR]]框架内使用[[generative-ai|生成式 AI]]的学习上，展示了从**被动替代**（把作业完全外包 —— 外包的末端，带来技能流失与[[creativity|创造力]]受限的风险）到**互动式再定义**（AI 作为[[pedagogical-agent|对话伙伴]]提供实时[[feedback|自适应反馈]]与共建 —— 投入的末端）的四种情境。这重新框定了外包的危害：它取决于*使用模式*，而非单纯的使用频率，与无处不在的“脚手架对替代”边界相收敛：AI 使用落在光谱的替代/Substitution 端还是再定义/Redefinition 端，决定了它是排挤还是支持构建学习的认知。

## 过度依赖：当外包变得有害

本页所追踪的阶梯有三级，其中只有前两级属于这里。**外包**是把心智工作委派出去，这往往是有成效的；**过度依赖**是长期地、不经校准地这样做，这是本节所记录的行为失败；**[[cognitive-surrender|认知投降]]**是另一种失败 —— 评价性的一步从未发生，学习者未经对质量的任何判断便采纳了 AI 的答案。这一边界从 AI 被要求提供什么上可见：[[du-yuan-epistemic-dependence-2026|Du 与 Yuan]]的*工具性*辅助产生输出，而*承载判断的*辅助提供据以判断输出的标准，正是后一种排挤了专长所依赖的工作。[[young-people-learning-generative-ai-rapid-review-2026|Sydney 快速综述]]在 271 篇论文上得出了同样的三分法。因此投降有其自身的实验特征和自身页面；过度依赖仍是频率与校准问题，二者是同一任务中可分离的结果 —— 在[[shaw-nave-cognitive-surrender-2026|Shaw 与 Nave]]的试验中，73.2% 的 AI 错误试验以投降告终，19.7% 以策略性外包告终。

**一项独立于任何单一研究的基准测量了同一种失败，并发现它很普遍。**ImpactBench 在 48,540 段模拟对话上为十个模型打分：其“认知外包不对称”指标平均为 51.9%，“规划相关认知侵入”为 47.1%。其教育案例中，一旦模拟学生催促完成稿，Claude Sonnet 5 便交出论文、提纲和一篇“可直接粘贴”的完整文章，同时仍拒绝编造引文（[[impactbench-ai-impact-on-humans-2026|ImpactBench（2026）]]）。学习与技能发展是 14 个子领域中在两个极性上都最弱的，分别为 45.9% 与 16.3%。

**过度依赖**是对 AI 工具的过度或无校准依赖，学生把本应自己完成的认知工作委派出去，导致学习减损、[[agency|能动性]]削弱与技能发展的替代。它是过度认知外包的行为表现：当外包成为默认而非策略选择时。过度依赖并不只是“AI 用得太多” —— 而是以替代而非补充学习过程的方式使用 AI。概念性工作主张把这种教育性过度依赖与关系性依恋和[[medical-education|临床]]依赖区分开来：[[yan-conversational-ai-engagement-dependence-synthesis-2026|Yan（2026）]]表明，信任、依赖、过度依赖、依恋与问题性使用在对话式 AI 文献中常被混为一谈，而频繁的委派不应在没有控制受损或危害的情况下就被贴上依赖的标签。

- **效率悖论：掌握目标坍缩为“默认”外包。**[[yan-cognitive-outsourcing-genai-assessments-2026|Yan 等（2026）]]识别出这样一些学习者：他们表达了掌握取向的目标，却实施了表层式的过程，“并非有意，而是默认地”外包：他们的三个意向组（外包工具 n = 16，学习助手 n = 31，认知伙伴 n = 8）显示，众数情形既非蓄意作弊也非蓄意学习。外包组的学生意识到自己的脱离投入（一段段复制粘贴被描述为“它完全替代了我的大脑”），并报告快速遗忘，全部 38 名受访者都报告对自己有效使用 GenAI 信心不足 —— 这说明过度依赖可以由前置条件缺失（[[ai-literacy|AI 素养]]、提示能力、任务特定指导）驱动，而非由逃避工作的动机驱动。

- **智能体式编程在实地中外包了理解：** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka 等（2026）]]报告，在软件项目课程中使用[[agentic-ai|AI 智能体]]的本科生代码量逐年上升，但在重度使用下出现了理解力下滑 —— 这可通过教师一对一核验 AI 生成代码来弥补。

AI 在教育中最重大的风险：

- **学习替代：** [[ai-making-us-stupid|关于 AI 认知效应的研究]]记录了 AI 的可得性如何降低努力性加工 —— “谷歌效应扩展到了推理。”[[stamatoulis-genai-use-patterns-2026|Stamatoulis 等（2026）]]把这分离为一种独特的*使用*模式：**低核验摄取**（不加批判地接受 AI 输出）预测更差的[[learning-gains|学业表现]]，而**评价性整合**（用 AI 支持理解）预测更好的表现 —— 而使用**频率**本身两者都不预测。因此过度依赖是一种可与“用多少”相分离的*使用模式*。

- **能动性问题：** [[aied-unfinished-mission-bypass|AIED 未竟的使命]]把过度依赖框定为一场能动性与动机危机 —— 学生绕开学习，不是因为 AI 有多吸引人，而是因为当 AI 能毫不费力地完成学习任务时，这些任务显得毫无意义。

- **动机侵蚀：** [[ai-availability-student-motivation|学生动机研究]]发现，知道 AI 可得会降低“自己学这项技能”的感知价值，这是一种动机算计，对新手学习者影响尤甚。

- **坚持性也在迅速流失。**在一位有求必应的助手下大约十分钟之后，参与者在无辅助问题上跳过的比例为 0.20，对照组为 0.11，解出的比例为 0.57 对 0.73，并在阅读理解任务上复现了这一结果（[[liu-ai-assistance-reduces-persistence-2026|Liu 等，2026]]）。

- **素养债务：** [[agentic-literacy-debt|智能体式素养债务]]描述了当学生习惯性地依赖 AI、而不发展自身能力时累积起来的技能赤字，类似于软件中的技术债。

- **疲劳循环：** [[ai-fatigue-academic-contexts|AI 疲劳]]研究识别出一种悖论：过度依赖导致因持续管理 AI 交互而产生的认知疲劳，这反过来又驱动*更多*依赖 —— 一个恶性循环。

- **放置规则：** [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]]把“允许对禁止”重新框定为一个放置问题 —— 一个没有护栏的 AI 助手使高中学生在无辅助考试上差约 17%，而同一个模型被改造为扣留答案后，危害便被消除。其诊断 —— *“如果让 AI 介入使任务变得毫不费力，那它就放错了地方”* —— 把首次认真的尝试和最终的无辅助核验固定为过度依赖最易伪装成“学习错觉”藏身之处。

- **元认知保全：** [[vibe-compiler-metacognition-genai-agency-2026|综合–分析互惠模型]]提出通过把 AI 交互组织在人类分析周期（而非 AI 生成周期）周围，来保全人类认知能动性的工具。

- **过度使用的元认知机制：** 信念–经验框架解释了*为什么*学生在受害时仍会过度外包 —— 人们冲动地外包，而先前的元认知*信念*比任务*经验*更快地锚定行为 —— 因此过度依赖的解药是元认知性的，而不只是限制性的。

- **过度依赖可通过校准训练来训练：** [[metacognitive-training-optimal-cognitive-offloading-2026|Ngai 与 Gilbert（2026）]]表明，提醒偏差 —— 过度依赖在实验室中的类比物 —— 可通过简短的元认知干预（五次把预测与反馈配对的练习）来降低，双向纠正校准。这意味着过度依赖的解药不只是限制性规则，而是**使学生对自己无辅助时究竟能做到什么保持准确的校准训练**。

- **实地证据：充当教练的 AI 对直接给答案的 AI。**[[making-ai-tutoring-productive-mastery-math-2026|NUMI（Oreopoulos 等，2026）]]发现，充当教练而非给出答案的 AI 支持使学生变慢，却降低了避努力 —— 在每题花更多时间的情况下提高了出错后再尝试的正确率（一种“生产性减速”）—— 而[[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo（Oreopoulos 与 Low，2026）]]表明，若无使犯错具有后果的结构，学生便默认采用浅层使用（裸答案、点击提示），其增益与不使用 AI 的练习相当。两者都确认，外包的危害取决于 AI 被**如何**使用与设计，而不只是取决于能否接触。CoMeT（Hou 等，2026）提供了这一边界所留白的设计维度 —— 一个导学系统可以承担*更多*劳动，而不必换来更多委派。它的阶梯在每次学习者未使用其支持时上升一级，在采纳时降到最轻一级，把[[metacognition|元认知需求]]维持在统计上等同于一个设计上就扣留答案的导学系统（p_TOST = .004），而一个“成果”在 48.1% 的会话中到达工作区（扣留答案的导学系统下为 23.7%），学习者在 50.4% 的会话中要求它构建（无限制的有求必应导学系统下为 51.1%；OR = 0.95，p = .82）。委派追踪的是导学系统对学习者提出的要求，而非它接管的工作量。

- **大规模实地证据：“[[generative-ai|生成式 AI]]学习罚分”。**[[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg、Lei 与 Wu（2026）]]对 26,811 名中国中学生进行了 30 个月的追踪，发现自主采用生成式 AI 使作业成绩提高 18%、作业时间减少 30%，却在六个月内使[[summative-assessment|闭卷考试]]成绩下降 20%，两年后升学考试成绩下降 18–24% —— 集中于约 81% 的行为指示作业外包（完成时间短 + 作业成绩虚高）的用户中。这是直接的大规模证据：无护栏的外包（把 AI 当作业替代品而非导学系统）产生认知外包所预测的学习罚分，而学生自己往往并未察觉。

- **过度依赖经由动机与自我效能侵蚀自主学习。**[[genai-thoughtless-use-self-directed-learning-2026|Zhao 与 Gu（2026）]]直接建模了这一机制：在 487 名中国本科生中，**不经思考地使用 GenAI（TUGA）**—— 不加批判地采纳 AI 输出 —— 直接并经由[[motivation|动机]]（TUGA 路径 β = −0.54）与[[self-efficacy|自我效能]]（β = −0.37）的部分中介，显著削弱了[[self-directed-learning|自主学习]]（β = −0.42）。该模型解释了 SDL 方差的 75.3%。由于动机是 SDL 最强的正向驱动因素（β = 0.68），而不经思考的使用会抑制它，这是[[quantitative-research|定量]]证据，表明过度依赖损害了自主学习所依赖的动机与自我效能资源 —— 且存在性别差异（男性受动机损害更强，女性受自我效能损害更强）。

- **外包倾向预测更低的高阶结果，而核验素养需要元认知才能兑现。**[[davor-ai-supported-learning-higher-order-outcomes-2026|Davor、Larbi 与 Boateng（2026）]]调查了加纳的 533 名大学生，把外包倾向、AI 任务脚手架与[[ai-literacy|AI 核验素养]]对高阶结果建模，经[[metacognition|元认知自我调节]]传导。外包倾向是[[critical-thinking|批判性思维]]（−.240）与技术[[problem-solving|问题解决]]（−.312）最强的负向预测因子，也压低了元认知自我调节（−.294），而脚手架对两者都正向预测（.185 与 .170）。核验素养对两种结果均无显著直接效应，只通过元认知自我调节起作用 —— 这是一种作者称为元认知激活机制的完全中介模式：教学生核验 AI 输出本身并不够，因为这种评价性习惯只有在嵌入任务的计划、监控与反思之中时才能兑现。

- **依赖作为使用之益处的边界条件起作用。**[[shojaei-genai-dependence-critical-thinking-employability-2026|Shojaei 等（2026）]]调查了阿曼的 412 名商科本科生，分解了[[generative-ai|GenAI]]使用与自陈批判性思维倾向之间的关联：零阶相关接近于零（r = 0.050），而调整后系数为正（.185），因为一条经由依赖的负向间接路径（−0.147）对其加以抵消。依赖与倾向（−.389）和自感就业力（−.328）都负相关，并削弱了两条“使用–结果”链路，简单斜率从低依赖时的 0.424 降到高依赖时的 −0.054，是衰减而非反转。这一解读使该发现停留在边界的“使用模式”一侧：依赖标记着使用从增强转向替代的位置，而单看频率会掩盖相反的两条路径。

- **AI 过度依赖作为一个复杂的[[adaptive-learning|自适应系统]]。**与其一次研究一个用户的过度依赖，[[ai-overreliance-complex-adaptive-system-2026|一篇建模论文]]把它框定为一个种群层面的过程：其中智能体更新关于 AI 质量的贝叶斯信念，并在联网时相互学习。社会证明能把依赖变成反馈级联（可见的未核验使用抑制核验），而社会学习产生的是共识而非过度依赖 —— 这一框定把干预目标从个体校准转向信任与依赖的网络动力学。

- **六个诊断标准区分有成效的依赖与有害的依赖。**[[du-yuan-epistemic-dependence-2026|Du 与 Yuan（2026）]]为过度依赖提供了比使用频率更细粒度的诊断词汇，区分工具性辅助（AI 帮助产生输出）与承载判断的辅助（AI 提供据以评价输出的标准）。他们的综述以六项标准 —— **可争议性、可恢复性、可迁移性、可追溯性、分布式责任与认知多元性** —— 把有成效/有害的边界操作化，并追踪了四条社会技术路径（流畅的权威、无摩擦的委派、不透明的综合、制度化的依赖），外包沿此既可能保全、也可能排挤发展判断力所需的认知工作。由于依赖是情境性与制度性的，而不只是个体性的，该框架把注意力引向评价激励、界面设计与采购，与学习者自我调节并列。

- **未被测量的余波：认知流失。****[[cognitive-washout-ai-skill-decay-2026|Yajee（2026）]]**把该领域最大的开放问题命名为*撤用之后*：几乎所有的外包研究都测量 AI 使用期间的认知，却几乎没有任何研究测量助手被撤去数天或数周之后（一场考试、一次断网、一次许可证复核）会发生什么。他用一个流失曲线模型把**认知流失**形式化 —— 可估计的参数包括恢复时间常数、恢复完整性、残余增长，以及比较重新学习与原始投入的滞后指数 —— 以及四种可能的结果（弹性回弹、部分平台期、潜在脚手架、过度恢复）。由于可逆性决定了一种诱发赤字只是不便、还是整批人受伤，该文主张撤用应与采用享有同等的方法学地位，并规定了一个三臂、三领域、22 周的协议来裁决各结果。这把上述“教练对拐杖”与“替代式对重复式”之分转化为一个关于外包技能是否、以及多快回归的*可检验的纵向*研究议程。

- **缺乏领域知识的依赖会退化为猜测。**[[ai-particle-physics-education-redesign-2026|Mikhasenko 等（2026）]]在鲁尔大学波鸿分校重新设计了核物理与粒子[[physics-education|物理]]导论课程，描述了缺乏领域知识时依赖的一种失败模式：当学生无法判断某个生成答案在物理上是否可靠时，本意的“与 AI 对话”便退化为与看似合理却不可靠的输出对赌。同一课程期中的调查（n=30）发现频繁使用 LLM（29 人中 24 人经常或总是使用），同时[[self-report-measures|自陈的]]对作业所需计算流畅度的准备度却很低，开放式回答提出了 AI 依赖与付费模型准入不平等等摩擦点。

- **道家的反论：外包不只是不切实际，而且自我挫败。****[[daoism-ai-education-philosophy-2026|Xie（2026）]]**从道家自我修养提供了一个规范性的、反委派的反论：在内丹实践中“没有认知捷径”，修行者无法把这项劳动外包给外部设备，因此 AI 应当是“不是认知替代品，而是工具性辅助”，犹如一座丹炉 —— 这一框定与上述“教练对拐杖”边界对齐，而非与替代式外包对齐。

**外包可能付出的是自我，而不只是技能。****[[rented-self-decoupling-performance-becoming-2026|de Barba（2026）]]**命名了学习者领域自我中能力驻留于 AI 工具、且仅在提供者条款下可用的那一部分为*租借的自我*，并区分两种代价。*校准*代价是一种误判的定位 —— 对自身拥有的能力少报，或对工具拥有的能力多报 —— 而*自我*代价则出现在核心能力被租借时，即使是在知情的情况下，因为构建自我的那些操作从未被执行。她的四种配置把定位与归因交叉：自有能力、未认领的能力、可见的租借与隐藏的租借，最后一种会移除提示学习者去构建他们误以为已拥有之物的信号。

**一项 30 位专家的共识把损害定位在学习序列的两端。**一项覆盖 65 个学习过程的预注册德尔菲研究认为习得脆弱（编码 3.30、提取 3.30、信息获取 3.00，按 1–5 扰动量表），巩固被增强（从反馈中学习 4.00、从范例中学习 3.90、自测 3.80），而高阶思维再次脆弱（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou、Greene 与 Nixon 等，2026]]）。十八个高阶过程中有十个仅在脆弱性上达成共识，其增强评分低于阈值。

### CLT 框架

认知负荷理论（Sweller）为[[cognitive-psychology|工作记忆]]与教学提供了一个有争议的理论透镜：内在负荷（任务复杂度）、外在负荷（呈现摩擦）与相关负荷（图式建构投入）。设计良好的 AI 应降低外在负荷、保全相关加工；整合不良的 AI 三者全降，留给学生的是已完成的任务与空洞的学习。请注意，该理论的主张在更广文献中受到争议，但其框定在外包效应的讨论方式上仍具影响。

**外包在职业层面的利害。**认知公地框架（[[cognitive-commons-ai-expertise-regeneration|Lovett，2026]]）把外包从个体层面扩展到集体层面：当 AI 让初级从业者跳过建构深层专长的认知奋斗时，它可能随时间耗竭一个职业共享的专长池 —— “验证系绳”意味着有效的 AI 监督恰恰依赖 AI 采用可能损害的那种精通。这把个体层面的外包与技能衰退重新框定为具有[[governance|治理]]意涵的系统性再生问题。

### 与相关概念的关联

认知外包（及其有害形式过度依赖）从根本上连接到[[trust-calibration|信任校准]]—— 知道何时信任、何时质疑 AI —— 以及[[ai-literacy|AI 素养]]，后者包含知道何时外包、识别自身依赖模式的元认知技能。它连接到[[scaffolding|脚手架]]（降低负荷而不消除认知需求的结构性支持）与[[prompt-engineering|提示工程]]（外包在 LLM 交互中得以实施的首要机制）。它与[[metacognition|元认知]]和[[self-regulated-learning|自我调节学习]]相交 —— 有效的学习者校准其外包决策 —— 并与[[critical-thinking|批判性思维]]、[[agency|能动性]]和[[student-experience|学生体验]]相交。[[online-teaching-and-learning|在线教学与学习]]是一个尤其脆弱的情境：该媒介本就使学习者远离即时问责，而自定进度、基于屏幕的工作诱发了外包研究所识别的核心危害机制 —— “索要答案”的捷径（参见[[ai-misuse-learning-harm|AI 误用与学习危害]]）。

**并非所有被外包的摩擦都是多余摩擦。****[[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar、Bloom 与 Inzlicht（2026）]]**提出了外包文献所需的区分：先前的[[ai-technologies|AI 技术]]移除了*多余*摩擦 —— 乏味或难以逾越、却少有学习或意义价值的障碍 —— 而智力工作中的生成式 AI 还剥离了*有益*摩擦，使学习者能从构思直接跳到评价而不质疑输出。他们直白地集结了关联性证据：使用 AI 的人难以准确回忆或复现自己的作品，习得更少技能，迁移更差，在 AI 支持被撤去后表现更糟 —— 与关于使用 AI 助手写作文的 EEG 研究的认知债务发现相收敛。他们的论证还提供了纯认知解释所遗漏的机制中动机那一半：因为努力标示着我们的行动有意义，外包它便降低了对目的与意义的评价，而当 AI 在一个领域中替代了努力，该领域努力带来的动机回报随之侵蚀，依赖进一步加深。该文的纠正是梯度式的，而非禁令式的 —— 保全适度的奋斗，移除只会压垮人的东西（[[desirable-difficulties|合意困难]]、[[motivation|动机]]）。

- **依赖式对自主式外包 —— 决定结果的那个区分：** **[[family-school-autonomy-support-genai-2026|Fan、Li 与 Zhang（2026）]]**围绕这一边界的强化版组织 GenAI 证据，依据的是一项对 589 名学生与早期职业知识工作者的三波研究：*依赖式*外包把核心思考委派给工具，与转移的[[agency|能动性]]、更低的内在动机和更差的感知认知结果相关；*自主式*外包则把认知能动性留在学习者一侧，呈相反模式。对识别而言最重要的发现是，两种模式之间的即时表现益处没有差异，因此学习者任何一天流畅地解决问题并不能说明他处于哪种模式。同一综述还记录了证据中更广的分裂 —— 一项[[meta-analysis-systematic-review|元分析]]显示总体获益中等（g = 0.499；理解、认知与创造力为 g = 0.669），而与依赖、疲劳和更弱的[[critical-thinking|批判性思维]]之间的关联 —— 并把适应不良的使用追溯到外化的自我调节，而非技术成瘾。

- **三条交互路径，而非一种行为。**神经可塑性–AI 交互模型（NAIM）分离了三条路径：直接绕过，即模型提供解答、生成性投入消失；认知外包，即特定的子过程被委派，其效应取决于这些子过程是否为学习目标；以及脚手架，即模型把帮助约束起来以保全努力性加工（[[naim-bypass-offload-scaffold-llm-learning-2026]]）

最近一批研究中的两项受控研究把这一主张的两半钉死了 —— 行为是否发生转移，以及它原本在保护什么。**[[metacognitive-feedback-anti-deskilling-offloading-2026|Maier 等（2026）]]**在一项有 704 名参与者练习分数运算的预注册实验中，使外包的学习后果在每次选择前可见：外包一个答案的几率降至 OR = 0.47，在之后的无辅助测试题上答对的几率升至 OR = 1.51，而基于努力的奖励对两者都没有作用。外包在会话内会复合 —— 外包一项之后，参与者外包下一项的比例在无反馈时为 69.7%，有反馈时为 55.9% —— 且外包每上升十个百分点，无辅助成功的几率降低 32%（OR = 0.68）。**[[chatgpt-programming-performance-retention-ownership-2026|Bergh 等（2026）]]**提供了结果一侧的补充：55 名用 ChatGPT 编程的计算机科学本科生得分 89% 对不用的 69%，对同样材料的即时回忆更少（41% 对 53%）、48 小时后也更少（39% 对 52%），且只把 45% 的提交代码归功于自己（对 81%）。合起来读，反馈研究表明行为可以在不限制接触工具的情况下被转移，而编程研究表明被转移的行为原本在保护什么。该模型对照现有最强的实地证据校准：在一项对近 1,000 名高中[[math-education|数学]]学生的研究中，不受限的 GPT-4 接触把练习表现提高 48%，却在无辅助考试上留下 17% 的赤字，而受提示约束的 GPT Tutor 产生了 127% 的练习增益，考试赤字基本消除。因此，外包只在绕过配置下有害，而起作用的设计变量是模型是否替代了被评定的目标技能。([[naim-bypass-offload-scaffold-llm-learning-2026]])

## 关联概念

- [[pedagogical-patterns]] — 每一个“努力优先”序列都旨在避免的风险
- [[learners]] — 学习者：学习者侧概念的总括
- [[ai-literacy]] — 知道何时外包并识别依赖模式
- [[agency]] — 当 AI 替代学习者的认知时被削弱
- [[critical-thinking]] — 被无校准的外包削弱
- [[creativity]] — 当 AI 替代学习者的生成行为时被破坏
- [[distributed-cognition]] — 委派的效率–调节权衡
- [[embodied-learning]] — 作为外包之外选择的情境化认知
- [[generative-ai]] — AI 中介外包的工具情境
- [[metacognition]] — 校准何时外包、何时投入
- [[online-teaching-and-learning]] — 一个易受“索要答案”捷径侵害的媒介
- [[prompt-engineering]] — LLM 使用中外包的首要机制
- [[scaffolding]] — 降低负荷而不消除认知需求
- [[self-directed-learning]] — 被不经思考的 AI 使用侵蚀
- [[self-regulated-learning]] — 调节外包决策
- [[trust-calibration]] — 知道何时信任、何时质疑 AI
- [[retrieval-spacing-interleaving]] — 与任由模型代替学习者检索相对的反向练习
- [[cognitive-surrender]]

## 关联文章

- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - 30 位专家就 65 个学习过程达成共识：学习序列两端的外包
- [[rented-self-decoupling-performance-becoming-2026]] — 租借的自我：付出学习者领域自我（而不只是技能）的外包
- [[caeai-ai-scaffolding-inquiry-profiles-middle-school-2026]] — 起点相同的小组走向分化：一个剖面中 74.1% 的模型采纳对另一个剖面中 80.8% 的外包与僵局（Kilinc 等，2026）
- [[liu-ai-assistance-reduces-persistence-2026]] — AI 辅助在三个随机对照试验中降低了坚持性与无辅助表现（Liu 等，2026）
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — ChatGPT 作为认知拐杖：45 天后知识保持的随机对照试验（Barcaui，2025）
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — 从认知外包到再分配：无监督评价中学生–GenAI 参与的 3P 分析（Yan 等，2026）
- [[family-school-autonomy-support-genai-2026]] — Family-School Autonomy Support for Children's Responsible Use of Generative AI
- [[zohar-bloom-inzlicht-against-frictionless-ai-2026]] — 多余对有益摩擦：为什么 AI 外包不同于先前的工具
- [[thermomix-genai-education-analogy-2026]] — With a Thermomix You Lose the Ability to Cook: a kitchen-machine analogy for generative AI in education (Rummel, Nachtigall & Panadero 2026)
- [[cognitive-washout-ai-skill-decay-2026]] — 认知流失：AI 诱发技能衰退的撤用后动态
- [[yan-conversational-ai-engagement-dependence-synthesis-2026]] — A Critical Narrative Synthesis of Conversational AI Engagement and Dependence
- [[layer-sensitive-cognitive-offloading-writing-2026]] — GenAI 辅助写作中分层敏感的认知外包（Chen，2026）
- [[du-yuan-epistemic-dependence-2026]] — AI 中介学习中的认知依赖：区分有成效依赖与有害依赖的六个诊断标准（Du 与 Yuan，2026）
- [[seung-basham-cognitive-offloading-swld-2026]] — 面向学习障碍学生的 GenAI 认知外包
- [[lodge-loble-cognitive-offloading-2026]] — AI、认知外包及其教育意涵
- [[cognitive-offloading-metacognitive-review-2026]] — 对认知外包的元认知洞察（Guo 与 Ye，2026）
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — 元认知训练促进最优认知外包（Ngai 与 Gilbert，2026）
- [[critical-thinking-paradox-genai-learning-2026]] — GenAI 整合学习中的批判性思维悖论
- [[cognitive-offloading-speedup-illusion]] — AI 辅助工作的加速错觉
- [[misiejuk-cognitive-offloading-prompting-2026]] — 提示模式的共现网络分析
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System Theory and cognitive surrender: how AI reshapes human reasoning (Shaw & Nave 2026)
- [[young-people-learning-generative-ai-rapid-review-2026]] — GenAI 的投降–外包–能动性连续体
- [[ai-making-us-stupid]] — 关于 AI 认知效应与学习替代的研究
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: AI replacing cognitive work (Brcic & Frljic 2026)
- [[genai-thoughtless-use-self-directed-learning-2026]] — 不经思考的 AI 使用侵蚀自主学习
- [[generative-ai-guardrails-harm-learning]] — 关于无护栏 GenAI 的高中数学随机对照试验
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — 生成式 AI 学习罚分：作业外包损害学习
- [[coach-not-crutch-ai-writing]] — AI 可以做得更少、学得更多（Lira 等，2025）
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[cognitive-commons-ai-expertise-regeneration]] — 认知公地的悲剧：AI 与专长再生
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — PAUSE: A Privacy-Preserving Self-Reflection Tool for AI-Associated Cognitive Offloading
- [[chatgpt-writing-cognitive-impact-2026]] — 一项以写促学实验，其中 ChatGPT 辅助写作产生的知识增益低于无辅助对照组
- [[student-cognitive-offloading-ai-higher-ed-2026]] — 高等教育中学生对 AI 的认知外包模式：自然情境 ChatGPT 消息级证据（Piatnitckaia 等，2026）
- [[metacognitive-feedback-anti-deskilling-offloading-2026]] — Designing Against Deskilling: Metacognitive Feedback Reduces Cognitive Offloading to LLM Assistants
- [[chatgpt-programming-performance-retention-ownership-2026]] — Your Programming Students' Cognition with ChatGPT: Higher Performance, Lower Retention, and Reduced Ownership
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — 外包倾向与核验素养经元认知自我调节预测高阶结果（Davor 等，2026）
- [[ren-metacognitive-awareness-genai-reliance-2026]] — A reflection prompt reduces acceptance of incorrect AI advice and improves awareness calibration (Ren 2026)
- [[shojaei-genai-dependence-critical-thinking-employability-2026]] — GenAI 依赖作为批判性思维倾向与自感就业力的边界条件（Shojaei 等，2026）
- [[niu-genai-children-creative-thinking-cognitive-development-review-2026]] — GenAI 与儿童创造力：范围综述中的过度依赖与提示依赖（Niu 等，2026）