---
title: 评估效度
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:23-04:00"
connected_faqs: [redesign-assessment-ai-era, reporting-interpreting-aied-research, asynchronous-online-courses-ai, checking-whether-educational-ai-works]
type: concept
foundations: [academic-integrity]
assessment: [authentic-assessment, automated-assessment, formative-assessment]
ethics: [bias-mitigation, equity-in-ai-education]
confidence: high
methods: [rct]
translation_of: concepts/assessment-validity
source_updated: "2026-10-09T09:50:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **评估效度** — 评估是否测量了它声称要测量的东西。[[ai-education|人工智能教育]]提出了根本性的效度问题：[[automated-assessment|人工智能评分]]的评估测量的究竟是学生的学习，还是[[prompt-engineering|向人工智能提问的技巧]]？人工智能的使用是否使传统评估的假设失效？

## 值得思考的问题

- 效度问的是：一项评估是否测量了它声称要测量的东西。在阅读本页之前，如果你看到一名学生提交了一篇你怀疑有人工智能协助的润色文章，你会觉得更大的问题是作弊，还是这项任务已经不再测量你以为它在测量的东西？
- 本页提出了一个尖锐的问题：当学生使用人工智能时，分数反映的是学生的知识，还是向人工智能提问的技巧？你能想到一项你设计过或参加过的评估，其分数现在可能更多地告诉你工具的情况，而不是学习者的情况吗？
- 一个关键发现是：相同的学习者输入可能因底层使用的大语言模型不同而收到语义上不同的回答 — 这引入了威胁可靠性与[[bias-mitigation|公平性]]的“与构念无关的变异”（construct-irrelevant variance）。如果两名学生仅仅因为背后的模型不同而得到不同的人工智能支持，由此产生的比较有多公平？
- 本页认为，即使一个大语言模型得分良好，要把人的评分解释迁移过去，也要求回答在潜在结构上相似 — 而大语言模型在这方面与人有差异。这对于信任一个“通过”了为人类设计的考试的[[llm|人工智能]]意味着什么？
- 知识库主张，与其试图检测人工智能的使用，不如重新设计评估，使其对具备人工智能能力的学生仍然有效。为什么重新设计任务可能比监督是否使用人工智能是更能保全效度的策略？
- 人工智能现在同时充当答题者、出题者、评分者和分析者 — 使解释链条变得不透明。当评估中的每一个角色都由人工智能承担时，说一项评估对身处其中的学习者“有效”究竟意味着什么？

## 引言

### 效度面临的挑战

- **构念效度：** 当学生在评估中使用人工智能时，分数反映的是学生的知识还是人工智能的能力？[[genai-performance-vs-learning|表现与学习]] [[research-methods-aied|研究]]直接回应了这一点。
- **对话式评估中跨大语言模型的与构念无关变异：** [[semantic-variability-llm-conversation-assessment-2026|Hao（2026）]]表明，即使对单个对话轮次，[[llm]]生成回答的语义内容也会随模型和对话语境条件而变化。模型内相似度始终高于模型间相似度（0.715–0.795 对 0.443–0.604），而加入聊天历史会显著改变回答内容（跨历史相似度中位数约 0.40–0.45）。由于相同的学习者输入会因底层模型不同而收到语义不同的回答，仅靠提问与语境无法保持回答的一致性 — 从而引入了潜在的**与构念无关的变异**，威胁效度、可靠性与公平性。因此，在大语言模型不断演进的过程中维持一致的评估条件是一个*基础设施*层面的挑战（符号规则、回答模板、验证层），而不仅仅是[[prompt-engineering|提示工程]]层面的问题。
- **存在却从未到达评分者的证据：** [[ai-assisted-physics-lab-report-assessment-2026|Abreu、Stari 与 Martí（2026）]]提出了一种先于任何推理的与构念无关的威胁：在人工智能审阅实验[[physics-education|物理]]实验报告时，一个公式、图表、表格或单位可能已正确出现在报告中，却没有被从模型实际处理的加工内容中检索出来；由于符号、数值或单位的改变会改变物理解释，与教师的分歧未必意味着推理错误。他们的补救措施是程序性的 — 使用高分辨率 PDF 而非翻拍的扫描件、用公式编辑器书写公式、图内坐标轴与单位清晰可辨，以及要求每个分数附有具体引证 — 因为文档质量决定了由此产生的分数所能支撑的任何效度主张的上限。
- **人类与大语言模型之间的潜在结构效度：** [[assessment-latent-structure-human-llm-2026|Strugatski 等人（2026）]]补充了一个更深的效度条件：即使大语言模型得分良好，要把人的评分解释迁移过来，也要求回答在*潜在结构*上相似。他们将六个[[multimodal]]大语言模型与人类被试群体在[[chemistry-education|化学]]与[[quantitative-research|定量]]推理测验上比较，发现大语言模型与人类之间的因子结构持续分歧（大语言模型—人类一致性低于人类—人类基线），因此在一个以人为常模的考试上的表现，对于大语言模型在这些题目所设计测量的构念上的能力而言，是薄弱的证据。
- **后果效度：** 由人工智能中介的评估是否有公平的后果？[[ai-scoring-language-bias-physics|语言偏差研究]]表明，人工智能评分可能使非母语者处于不利地位。
- **规则适用范围本身就是一项效度属性：** [[wright-transcription-not-generation-2026|Wright（2026）]]认为，自 2023 年以来遍及[[higher-ed|高等教育]]的禁令禁止“生成式人工智能”，却缺乏将“受评内容的生成”与“格式的转换”区分开来的技术精度，因为光学字符识别、手写文字识别与语音转文字都是识别[[ai-technologies|技术]]，它们推断的是已经存在的内容，而非产生新内容。当一条规则附着于平台身份而非功能时，它因定义上的偶然而过度涵盖：它捕获了对多功能工具的纯转写用途，并处罚了并未做出该规则旨在防止之行为的学生，而这最沉重地落在依赖这些工具实现无障碍的[[learners|学习者]]身上 — 这是评估无法就其声称测量的构念作出的推断。他提出基于功能的起草，并为边界情形提出四项操作标准（保真度、非增强、可追溯性、声明确认），同时把对检测器输出与风格启发式的依赖视为该规则自身证据基础薄弱的证据。
- **代理式完成取消了“人类产出”假设：** [[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou 与 El-Haddad（2026）]]将效度分析从生成式*协助*扩展到代理式*完成*：自主[[agentic-ai|人工智能代理]]现在可以登录学习管理系统（LMS）、阅读材料，并端到端地完成无监考的异步作业（已在一门真实课程上演示 — 一个测验在 5 分钟内以 10/10 完成，以及一篇可信但虚构的讨论板反思）。他们把“人类产出假设”置于 Kane 论证式推理链的底部，表明代理完成悄无声息地取消了*评分*推理的支撑，而概化、外推与决策推理全都建立在这一评分推理之上 — 因此每一项无监考异步分数（包括诚实获得的分数）都失去了其解释支撑，因为作者身份无法核验。他们决定性的一步是把这归类为**效度失败而非诚信失败**：一所机构可以惩处不当行为，却仍然缺乏报告其所给分数的依据。检测在结构上是不充分的（分类器不可靠且有偏差；LMS 监控看到的点击与学生看到的相同），因此补救办法是面向已验证人类在场的评估重新设计（简短的口头环节、过程可见的草稿、与具体课堂相关的引用），并以保全公平的选项菜单取代强制监考的要求。
- **人类对[[generative-ai|GenAI]]协助作业评分中的与构念无关变异：** [[luo-dawson-value-judgments-grading-2026|Luo 与 Dawson（2026）]]提供了直接的实证演示，表明人类对 GenAI 协助作业的评分充斥着与构念无关的变异。在对 33 名大学教师的基于情境的访谈中，评分决策由面向人的（学生诚实、勤奋）、面向能力的（独立于人工智能、GenAI 技能、学科掌握）、面向关系的（与学生建立的信任）和面向正义的（公平、有益）价值观驱动 — 所有这些都可能在与受评结果无关的因素上改变分数。他们认为，压低 GenAI 协助作业的分数只有在且仅在人工智能的使用妨碍了学生展示受评结果时才成立；否则由价值观驱动的评分会威胁效度。该研究把效度框架置于真实[[teacher-role|教师]]实践之上，并呼吁“双向[[explainable-ai|透明度]]” — 教师说明 GenAI 的使用将如何影响分数，而不只是要求学生声明使用。
- **规模化变异要求生成构念等价的变式：** [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA（Lee 2026）]]对人工智能整合的真实评估（AIAA）的“规模化变异”前提 — 用按学生变化的任务取代监控式监考 — 进行了可证伪的实证检验。由于每名考生收到一个独特但等价的表现任务，其诚信保证取决于大语言模型生成的变式是否同时表面不同、构念等价、可应用评分规则且难度匹配。VARIA 在四种提问策略下对三个前沿模型族生成 600 个变式进行[[benchmark|基准测试]]，发现前沿生成器仅在勉强满足联合诚信标准（联合得分 0.81–0.88），而非前沿参照模型则崩塌（0.50–0.55），且没有任何单一的提问策略在四项属性上全面占优 — 因此，如果多样性阈值设定得激进，“规模化变异无法仅靠提问解决”，各机构必须验证自己特定的模型—提示组合。
- **人机协同人工智能评分中的低评偏差是一项效度特性，而非缺陷：** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi 等人（2026）]]表明，在一项大规模国家级写作评估中，大语言模型评分者系统性的保守（低评）偏差虽然作为最终决定是有问题的，却恰恰是安全委派得以实现的原因：被人工智能标记为“通过”的回答可以有信心地接受，而被标记为“不通过”的回答（占 15.3–16.5% 的案例）则被转交专家复核 — 从而把人工智能错误的效度威胁挡在最终结果之外。他们的[[item-response-theory|IRT]]—Bookmark 流水线使人工智能评分对[[educational-measurement|能力水平]]的影响变得可读，而不是把原始分数一致性当作唯一的效度信号。
- **人工智能驱动的分数膨胀是一项效度威胁：** [[chirikov-ai-grade-inflation-2026|Chirikov（2026）]]提出了一种新颖的、技术驱动的[[summative-assessment|分数]]膨胀机制，它运行在评分*上游* — 作用于受评分作业的产出。在一项覆盖 319 门课程（2018–2025）、50 万+ 个分数的双重差分研究中，人工智能暴露任务（写作、编程）更多的课程在 ChatGPT 发布后 A 等比例上升了 13 个百分点，并伴随分数分布压缩。三重差分分析显示该效应集中在作业繁重的课程 — 证据表明人工智能的**任务替代**（人工智能在教师观察到之前就完成了受评分任务）在没有相应技能提升的情况下推高了分数。这降低了跨课程分数的可比性，并侵蚀了成绩单的信息价值，而这些难以仅从分数分布中察觉。
- **项目层面及格/不及格的易感性，以及决定它的评分标准：** [[ivory-psychology-assessment-integrity-2026|Ivory 等人（2026）]]用二元的及格/不及格 — 即评分者第一眼实际作出的决定 — 评判了一个三年制心理学学位的每项课程作业评估（40 项评估、16 种类型）中 ChatGPT 的输出：40 项中有 36 项通过。由此得出两点效度含义。第一，起作用的变量是及格线而非检测 — 奖励结构流畅性和正确选择分析方法却容忍错误数值的评分标准，会让伪造的统计数据和幻觉出的参考文献通过及格，因此该评估因其评分方式（而非因为有人被骗）就把工具的输出认证为学生的理解。第二，选择题泄漏了自己的答案：ChatGPT 在不向学生展示数字或输出表的情况下正确回答了统计题，因为题干和选项暗示了答案 — 这使得选项设计成为题目本身的一项效度属性，而不是人工智能的属性。
- **准确性与一致性是两种不同的效度信号：** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat、Das、Bhaumik 与 Thambi（2026）]]用 ChatGPT-5 评阅了一份 21 题药学考试，发现中等百分比的准确率常常与低的一致性—相关系数并存 — 这是*评分准确性*与*一致性*之间的方法论区分，即便原始准确率看起来尚可，它也限制了人工智能作为评分替代物的可靠性。在客观题上一致性很强（CCC 0.935–1.000），但在简答题上几乎为零、在论文题上也只是中等（0.341–0.854），而提供评分规则并未一致地缩小这一差距。
- **人工智能生成题目的效度：** [[assessing-quality-ai-generated-exams-field-2025|评估人工智能生成的考试]]表明，通过贝叶斯[[item-response-theory|IRT]]验证的人工智能生成题目，其难度与区分度可与专家编写的标准化考试题目相当（信度 0.79 对 0.72） — 支持了以心理测量评估为后盾的、按课程定制的人工智能生成评估的效度。
- **真实性评估：** [[authentic-assessment]]与[[ai-assessment-scale-reform|人工智能评估量表]]提出了保全效度的评估重新设计方案。
- **置信度与校准：** [[automated-assessment|置信度感知系统]]通过标记不确定的评估来改进效度。
- **[[embodied-learning|具身]]与多模态证据：** 仅语音的评估可能把语言流畅误认为概念知识；[[multimodal-embodied-cognition-oral-explanations-2026|Morphew 等人]]表明，计算机视觉手势分析与大语言模型语音分析相结合，通过捕捉以手势表达的理解（而不只是言辞）提高了构念效度与[[equity-in-ai-education|公平性]] — 减少了对以非语言方式表达理解的学习者的偏差。
- **当模型能解出任务时，作业就不再证明能力：** [[ai-particle-physics-education-redesign-2026|Mikhasenko 等人（2026）]]记录了波鸿一门粒子[[physics-education|物理]]课程中作业作为能力测量的具体失效：一旦[[generative-ai|生成模型]]能给出正确解答，一份提交的推导就不再确立学生能独立解题。他们的回应把两种功能分开 — 研究式的、允许人工智能的作业保留为探索性、可加分的作业，而无工具的书面考试成为最终成绩的唯一决定因素 — 这是一种效度驱动的分工，而非检测制度。
- **人工智能大规模评分的决策导向效度：** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi 等人（2026）]]在 Acredita EB 国家级写作评估中阐释了效度的决策导向观点：他们不问[[automated-assessment|人工智能分数]]是否与人类一致，而问人工智能的错误能否改变一项认证决定。自动化的[[item-response-theory|IRT/Bookmark]]切分分数线密切复现了操作性分数线，而系统性的低评通过把不通过的人工智能结果转交[[human-in-the-loop-ai|人工复核]]得以中和 — 值得注意的是，这发生在一个本身就有争议的参照标准之上，因为十名专家评分者对同样 50 篇文本在任何一个评分项上都从未达成一致。
- **学生一方对人工智能作为评分者的效度关切：** [[student-perspectives-ai-writing-grading-2026|AlGhamdi（2026）]]把学习者的声音加入效度问题：13 名计算专业学生的手写写作任务由 ChatGPT 评分，他们质疑人工智能评分者能否有效地解释意图、努力与机构评分规范 — 其中一人尖锐地问道：“如果 ChatGPT 来考我们，我们为什么还要上大学？”
- **许可本身不会使任务退化，而使用率是错误的效度信号：** [[zou-is-this-a-trap-student-teachers-genai-2026|Zou 等人（2026）]]调查了 85 名其评估明确允许使用生成式人工智能的师范生，发现评估投入度很高，且不受学生是否使用它的统计影响（均值 4.21/5，SD 0.46；Mann–Whitney U = 781.5，r = 0.07，p = 0.536）。在 62.4%（53 人）完全不用生成式人工智能、而采用者的使用主要限于校对（43.8%）与清晰度检查（34.4%）的情况下，采用率几乎不包含关于该评估是否仍能支持关于学习的推理的信息 — 而由对被错误指控抄袭的恐惧（占未采用者的 41.5%）驱动的不用，同样不是效度的证据。

- **当校级测试被当作系统证据时的抽样框效度：** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales 等人（2026）]]对从分数到关于*系统*的主张的推理给出了定量处理。一项对 171 所萨尔瓦多学校中 1,198 名志愿学生的试点评估使用基于 PISA 的校本测验（Test for Schools），其结果被宣布为可与德国和瑞典相比，但该工具产出的是学校的估计值，且并未在国家抽样框及其回应率标准、排除限制和加权条件下施测 — 因此校级估计值与国别均值之间的比较至少带有三个未报告的不确定性来源（校级抽样误差、国别均值抽样误差以及量表等值的链接误差）。作者并未检验学习主张，而是给它设定了边界：在零学习的条件下，萨尔瓦多[[math-education|数学]]分布中前 5.5% 的学生与德国均值相当，而自愿参与被理解为使[[learning-gains|学业成就]]测试向上偏倚，因此公开的证据无法把真实效应与选择性样本分开。这是比较的效度推理的失败，而不是学生或工具的失败。

一个概念性提案提出了适用于本页每项人工智能中介评估的效度边界：[[ai-agents-joyful-assessment-third-space-2026|El Khoury 与 Ma（2026）]]认为，速度不是效度，人工智能生成的提示、示例与基于转录的报告仍须就准确性、文化响应性、[[accessibility|无障碍]]、可解释性以及与课程成果的对齐接受检验。他们还扩大了什么算作证据：当对话成为被评估的对象时，转录本是过程记录，判断、共情、澄清与共同决策在其中依情境展开，设计问题就变成：这份证据是否支持从它得出的推理 — 这正是自动评分面临的同一问题，其答案在于任务、反馈与学习证据之间的对齐，而非技术上的新奇。

- **人工智能分配的题目元数据不是心理测量证据。** 在一项为期 10 周、涉及 311 道已部署选择题的[[cs-education|数据科学]]研究中，大语言模型给出的难度评级与模型自身的 Bloom 标签相关（rho = 0.90），但与经验题目难度不相关（rho = 0.06），因此题目难度必须从回答数据中建立，而非从生成模型的标签中建立（[[student-llm-use-ai-question-difficulty-data-science-2026|An 与 Wang（2026）]]）。
- **学生对课程对齐的评判跟随难度而非内容。** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt 等人（2026）]]让学生评判一份已评分 60 题考试中每道题目是否与课程[[curriculum-design|课程]]对齐，发现评分与题目难度相关（rho = 0.762：容易的题被判为对齐，难的题被判为不对齐，rho = −0.762，p < 0.001），而评分不因题目来源而异。当一个工具让学生评判评估的课程适切性时，所得分数部分是一项难度评级，不能被读作对齐的独立证据。
- **重新对齐评估三角，而不是只修补一个顶点。** [[koretsky-genai-stem-assessment-2026|Koretsky 等人（2026）]]通过评估三角 — 认知（评什么）、观察（如何引出学习证据）与解释（得出什么推理） — 来框定[[generative-ai|GenAI]]问题，并论证三个顶点必须一起重新对齐，因为只重新设计任务而不修复解释，会使推理失去支撑。他们的范围综述还把人工智能生成评估材料的保真度本身作为一项效度属性，编目了内容、语言、认知、行为、结构与教学维度，并要求在让此类任务支撑评估之前进行人在环评估。

### 以重新设计取代检测

知识库认为，维持评估效度需要为具备人工智能能力的学生重新设计评估，而不是[[ai-detection|检测人工智能的使用]]。一个平行的效度问题贯穿研究测量：许多人工智能教育主张建立在[[self-report-measures|自我报告数据]]之上，无论工具本身验证得多好，它都无法支持关于学习或能力的推理。[[beyond-detection-authentic-assessment-ai-2025|超越检测的方法]]与[[assessment]]代表了效度优先的思考。

**带回家的作品与[[qualitative-research|定性]]/定量之分。** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström 与 Palmqvist（2026）]]把重新设计论证落地为一个基于 SOLO 分类法的具体提案。他们在与[[conversational-ai|聊天机器人]]一起完成一道认知科学带回家考题时发现，GenAI 恰恰在分类法的最低层最强 — 在*定量*（多结构）层面产出了全面、流畅、事实型的内容 — 而*定性*层面（关联、评价、概化）只在反复由学习者驱动的校准中出现。因此他们的建议按构念区分：带回家评估应强调对定性理解的证据，而基于回忆的定量知识更适合在没有 GenAI 的课堂上评估。该演示还强调，一份润色的提交物在两个方向上都是薄弱证据，且有效的重新设计必须考虑到合法的、由人工智能支持的学习最终有多费力（[[summative-assessment]]、[[academic-integrity]]）。

一个设计层面的对应物来自重新设计论证通常忽略的同一群体。[[zou-is-this-a-trap-student-teachers-genai-2026|Zou 等人（2026）]]发现，反思性与个性化的任务被广泛认为过于个人化、不适合人工智能协助，而另一门课程中知识密集的评估则引发了强烈的为参考文献使用生成式人工智能的意图 — 因此学生对人工智能的所做所为跟随的是任务要求他们证明的构念。对效度的教训是精确的而非庆贺性的：设计可以消除通用替代的回报，但同一研究也警告不要把选择退出的群体当作它做到了这一点的证据，因为相当一部分不用被归因于对被错误指控抄袭的恐惧，而非任务抵抗了人工智能。

[[sharma-judgment-visible-genai-assessment-2026|Sharma（2026）]]在诚信一侧提供了重新设计论证，把诚信证据转化为效度证据。他把 Eaton（2023）的后抄袭框架延伸进评估设计，认为基于检测与验证的诚信模型与人类判断和机器生成相互交织的工作不匹配，并把诚信重新框定为通过[[evaluative-judgment|评价性判断]] — 即在认识论不确定性下权衡选项、为学术选择辩护并承担责任的能力 — 来施行的[[pedagogy|教学]]实践。其设计后果是诚信应当被证明而非被推断：带注释的决策轨迹、对 GenAI 贡献主张的核验、[[oral-assessment|口头答辩]]与版本历史被作为诚信证据物提出，而他明确指出与[[authentic-assessment]]的区别是认识论上的 — 真实性问的是任务是否镜像真实世界实践，而诚信导向的设计问的是学习者能否依据学科标准为其决策辩护并承担责任 — 因此诚信成为嵌入任务架构的可评估标准。他点明了自己提案的效度风险，而不是任其隐而不显：要求记录下来的推理偏向善于反思性话语的学习者，并冒着“用一种合规制度取代另一种”的风险，因为作为证据的判断“始终是关系性的、情境化的，而非机械可验证的” — 这与本页为每项人工智能中介评估所记录的同一解释可靠性问题。

[[weidlich-inference-at-risk-assessment-validity-2026|Weidlich（2026）]]把重新设计重新框定为“一项改变意在保护哪一项推理”的问题。他从 Kane 的论证式效度出发，把争论往往混为一谈的压力区分为五种：构念表现不足、与构念无关的变异、绩效归因、条件性外推，以及缺乏支撑的分数使用。人工智能的使用不自动构成威胁，因为当目标构念是需要人工智能支持的专业判断时，工具的使用是切题的，而当它是无辅助的推理时，它绕开了目标绩效，因此构念与人工智能条件必须一并规定。他对重新设计的告诫随之而来，因为干预会用一种压力交换另一种：口头答辩可能加强归因，却削弱可靠性或无障碍。

### 关联

评估效度与[[authentic-assessment]]、[[automated-assessment|自动评分]]、[[automated-assessment|置信度感知的人工智能评估]]、[[formative-assessment]]、[[academic-integrity]]以及[[rct]]（它依赖有效的结局测量）相连。

人工智能在认识论层面挑战效度：[[end-of-assessment-ai-disruption-transformation-2026|Hathcoat、Slotnick 与 Miller（2026）]]认为，当大语言模型充当答题者、出题者、评分者与分析者时，解释链条变得不透明，测量对象失去定义 — 从而把效度重新框定为需要具备人工智能素养的“赛博格”判断；而[[can-ai-evaluate-assessment-llm-meta-assessment-2026|Green 等人（2026）]]表明，人工智能分数可以与人类评分者对齐（87% 检查表），而底层理由却分歧，尤其在测量质量与薄弱报告上。

**当人工智能生成受评对象时。** [[kumar-genai-computing-education-systematic-review-2026|Kumar、Wongsirichot 与 Nanthaamornphong（2026）]]给出了效度问题最锐利的学科案例：在[[cs-education|计算教育]]中，人工智能产出的是被评分的对象 — 源代码 — 因此工具使用、学习与评估融合为单一互动，提交的代码库不再能把学习与委托区分开。在 72 项研究中，他们发现效率提升并未迁移到无辅助表现（21 项研究）、[[prior-knowledge]]调节人工智能帮助是否转化为技能（6 项研究）、检测研究实质上缺席于证据基础（3 项研究），而评估重新设计则有相对充分的证据（25 项研究）。他们对实践的结论是具体且低技术的：在每门课程中至少为一项高风险评估加入口头环节或其他过程可见的元素 — 这是综述中杠杆最高的单一干预 — 并要求把对人工智能输出的批判性[[student-engagement|参与]]作为可评分的、可观察的组成部分，而非可选的倾向（[[academic-integrity]]、[[assessment]]）。

## 信息不完备下的效度

最新的重新框定把生成式人工智能问题当作证据问题来处理。学生知道一件作品是如何产出的；机构观察到的是作品，至多还有过程的部分痕迹 — 这一“产物—过程差距”被[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed 与 Temimi（2026）]]形式化为信息不完备下的评估效度。按此说法，问题不是规则是否被违反，而是评估是否仍能产生关于学生推理、努力与判断的可信证据，而每一种[[governance|机构]]机制 — 禁止、监控、披露、重新设计 — 都按其使学生哪种反应最具吸引力来评价。效度视角还消解了一种虚假的分离：诚信与效度是同一问题从两端看到的样子，因为一项不当行为的认定本身就是关于作品证明了什么的一项效度主张。

一个学习者一侧的框架命名了一件作品本身无法确定的推理目标。[[gifted-potential-ai-assisted-work-attributional-validity-2026|Sak（2026）]]为从人工智能协助的作品判断天才潜能提出了*归因效度*：从能力到产物的关系是多对一的，因为学习者能力、模型能力、学习者的引导、人—人工智能匹配与情境以不同方式组合，产生等价的产物，因此产物无法识别其背后的能力。该框架区分四个推理目标 — 独立能力、智力[[agency]]、混合能力与发展性迁移 — 并命名当一个目标的证据被当作另一个目标的证据读时所产生的三种错误：过度归因、发展错觉与假定能力等价。它对记录的要求与本节从违规文献中提炼的证据纪律一致：命名一项判断所关涉的能力、记录作品是如何产出的（模型与版本、界面、允许的功能、成人中介、获取条件），并在把有协助的表现读作学习者的变化之前要求[[transfer-of-learning|迁移]]的后续证据。

[[teichmann-detecting-undetectable-misconduct-2026|Teichmann（2026）]]得出了程序性后果：在被禁止的使用无法检测之处，一个仍凭检测器分数指控的制度无法保证它所作出推理的正当性，因而产生无效果的不公平。他主张用法效度问题 — 学生是否展示了该任务旨在认证的能力？ — 取代取证问题 — 学生是否使用了人工智能？ — 这把机构努力重新安置到跨关联任务的项目级评估、认证点的口头与受监督环节，以及作为显性评估对象的[[evaluative-judgment]]。

同一证据库的该节还提供了卷宗一侧的对应物，它比仅看检测文献更令人不安。[[munoz-misconduct-allegation-evidence-2026|Munoz 等人（2026）]]编目了澳大利亚一所地区性大学三年内的每一个生成式人工智能违规案例 — 1,162 个案例、1,855 个离散证据项 — 并按相关性、可信度与推理力对每项证据评定其证明价值。最强的类别是那些不依赖文本概率分类的类别（学生自认、观察到的违规考试行为，以及经独立核验的伪造参考文献），而[[ai-detection|检测器]]输出在所有类别中评分最弱：相似度或 Turnitin 报告在推理力上完全薄弱，独立检测器输出在可信度上完全低下，从 2024 年占证据项的 8.8% 降至 2025 年的 0.5%。这一效度失败既是工具性的也是程序性的 — 流水线的任何阶段都没有设定最低证据门槛，也没有要求调查者在推进一项指控前权衡其证明价值，因此证据质量与案件结果之间没有可靠关系，这正是在[[legal-issues-and-risks]]上编目的证据标准问题。他们提出在*指控*时而非仅在裁定时应用凭证框架，这是一项效度要求：一项指控是关于作品证明了什么的主张，它应当由能够支撑它的材料来保证。[[hadra-ai-detector-accuracy-efl-2026|Hadra、Cambridge 与 Mesbah（2026）]]表明该工具离这一标准有多远：192 篇文本上宏平均准确率 0.69（Originality）对 0.61（Turnitin），在人—人工智能混合写作上近乎完全失效（敏感度 0.02 与 0.31），准确率随文本长度与科学写作下降，并有一种把 EFL 学生写作误判为人工智能的边界倾向 — 因此检测器分数无法确立违规认定所断言的事实。

### 人类评分基准及其上限

[[opraise-automated-marking-ai-assessment-2026|OpRaise 对三个前沿模型与三所英国大学 761 篇真实论文的比较]]把基准本身变成效度论证的一部分。人类分数被用作基准真值，其明确理由是学术判断是社会公认的标准，而作者承认人类评分者之间只有中等程度的一致 — 这为可合理要求的人工智能—人类一致性设定了上限，也意味着相关系数不能在没有参照点的情况下被读作“准备好与否”。在这一框架内，失败表现为系统性结构而非随机误差：分数向量表中部压缩，因此最好的与最差的论文被误判得最多；一致性在分数边界处最弱；人工智能分数追踪词汇范围、连接词与句子复杂度，而人类分数对它们大体不敏感。其实际教训是双刃的，因为同一研究发现可靠性极佳 — 跨时间重复评分一致，且模型之间一致性高。因此，自动评分的效度论证不能建立在稳定性或平均一致性之上；它必须表明系统性偏离的缺席，而这恰恰是这份证据没有发现的。

然而，逐次运行的稳定性并非必然保证：对完全相同的提交相隔五天重复同一评分，得到 Krippendorff's alpha 0.625，变异集中于中间分数段，而 A 与 F 在重复场次计数中缺席（[[llm-grading-assistants-public-health-2026|Brevik 等人（2026）]]）。

- **模型规模不是评估效度的替代物。** 在四个模型族、114 篇已评论文、八种配置上，精确分数段一致性从 18.4% 到 54.4%，且跟随模型族而非参数量 — 最大的模型 GPT-OSS 120B 少评了 1.316 个分数段，而温度并不能补救（[[llm-grade-bands-calibration-bias-2026|Kerwat 等人（2026）]]）。
- **一致性与基准错误冒充为学习。** 两项 2026 年研究表明，分数可以通过两条不同路径看起来有效，却确立了别的东西。一项开放式营销写作研究发现，大语言模型—人类绝对一致性仅为 ICC(2,1) .435，而混合方法显著比单独的大语言模型更差，锚定[[writing-education|作文]]使一致性从 .338 移到 .902（[[automated-scoring-marketing-posts-agreement-2026]]）。一项对六个物理基准的专家审计把受审计拒绝中的 95.20% 归因于有缺陷的题目或评分者而非模型错误，使 CritPt mean@5 从 32.29% 移到 87.50%（[[frontier-models-physics-benchmark-audit-2026]]）。在这两种情形中，威胁都是被评模型之外的与构念无关变异。
- **大语言模型编码者之间的一致是一致性，不是效度。** 在一个专家标注的教育对话语料上，一个跨模型一致性过滤器只保留了 74 个语料派生行为断言中的 33 个和 48 个构念派生断言中的 11 个，且共享的模型错误通过了过滤器，因此模型间一致性不能替代构念效度（[[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado 等人（2026）]]）。
- **暴露是可测量的，而补救是充分的证据而非最大的安全。** [[villanueva-ai-vulnerability-assessment-audit-2026|Villanueva（2026）]]按已发布的格式、监考与分数权重为 53,915 个评估题打分，发现大多数受评分数依赖于其作者身份在提交后无法核验的作品；他认为项目需要在关键阶段有足够的学习证据，而非把每个单元都变得安全。
- **有效的测量仍可能不安全地被优化。** 针对规则风格的适应性指标微调一个大语言模型导师，使该指标上升（+0 到 +0.42），而盲专家评分下降（4.46 到 3.03），因为独立地给决策打分的指标会被“重复单一最佳决策”最大化（[[llm-tutor-pedagogical-metric-degradation-2026|Domínguez Figaredo 与 Fernández De la Cruz（2026）]]）。

## 关联概念

- [[pedagogical-patterns]] — 当产出不再能识别作者时，为何提出过程证据
- [[interpreting-and-applying-aied-research]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[academic-integrity]]
- [[rct]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[legal-issues-and-risks]]
- [[llm]]
- [[feedback]]
- [[self-report-measures]]
- [[prior-knowledge]]
- [[student-engagement]]
- [[assessment]]

## 关联文章

- [[ivory-psychology-assessment-integrity-2026]] — 项目层面及格/不及格的易感性，以及让伪造数值通过的评分标准（Ivory 等人 2026）
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — 仅许可不会使效度退化：投入度不受 GenAI 使用影响；反思抵抗通用替代
- [[ai-agents-joyful-assessment-third-space-2026]] — 人工智能代理、愉悦评估与第三空间
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise 报告：对三所英国大学 761 篇论文的人工智能评分
- [[kumar-genai-computing-education-systematic-review-2026]] — 当人工智能生成被评分的对象：计算教育的效度问题与重新设计证据
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — 带回家考试：评定性阶段，把回忆移到课堂（Brunnström & Palmqvist 2026）
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — 大规模国家级写作评估中的 HITL 人工智能协助评分（Curi 等人 2026）
- [[varia-construct-equivalent-assessment-variant-generation-2026]] — 构念等价的评估变式生成（Lee 2026）
- [[chirikov-ai-grade-inflation-2026]] — 人工智能任务替代作为分数膨胀的机制（Chirikov 2026）
- [[ai-agents-complete-lms-assessment-validity-2026]] — 人工智能代理完成 LMS 任务；人类产出假设与代理式效度（Hadjisolomou & El-Haddad 2026）
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[assessment-latent-structure-human-llm-2026]] — 评估工具对人类与大语言模型测量的是否是同一东西？（Strugatski 等人 2026）
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[assessing-quality-ai-generated-exams-field-2025]] — 评估人工智能生成考试的质量：一项大规模实地研究
- [[genai-performance-vs-learning]]
- [[ai-scoring-language-bias-physics]]
- [[end-of-assessment-ai-disruption-transformation-2026]]
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]
- [[luo-dawson-value-judgments-grading-2026]] — 对 GenAI 协助作业评分中的价值判断：诚实、信任、效度与双向透明度（Luo & Dawson 2026）
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[teichmann-detecting-undetectable-misconduct-2026]] — 违规程序作为一项效度问题
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — 信息不完备下的评估效度：一个反应域模型
- [[weidlich-inference-at-risk-assessment-validity-2026]] — 哪一项推理处于风险？区分五种效度压力并检验重新设计削弱了什么（Weidlich 2026）
- [[koretsky-genai-stem-assessment-2026]] — STEM 评估是效度、设计与能力定义问题，而非作弊问题：过程证据、口试与人工智能生成任务的保真度（Koretsky 等人 2026）
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[student-perspectives-ai-writing-grading-2026]] — Who Should Grade My Work? Student Perspectives on Transparent AI-Assisted Writing Assessment in Higher Education
- [[el-salvador-ai-tutoring-selection-claim-2026]] — 为萨尔瓦多人工智能辅导试点的学习主张设定边界（Restrepo Morales 等人 2026）
- [[munoz-misconduct-allegation-evidence-2026]] — 违规指控卷宗实际含有什么证据，以及为何证据质量不预测结果（Munoz 等人 2026）
- [[hadra-ai-detector-accuracy-efl-2026]] — 检测器在 192 篇文本上准确率 0.69 与 0.61；混合写作失效与 EFL 误判风险（Hadra 等人 2026）
- [[wright-transcription-not-generation-2026]] — 过度涵盖的禁令：转写不是生成，因此该规则制裁了它无意捕获的行为（Wright 2026）
- [[sharma-judgment-visible-genai-assessment-2026]] — 通过评价性判断而非检测使诚信可见（Sharma 2026）
- [[llm-grade-bands-calibration-bias-2026]] — 大语言模型能否复现高等教育分数段？真实学生写作中校准与评分偏差的跨模型研究
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[gifted-potential-ai-assisted-work-attributional-validity-2026]] — 当产物被读作学习者能力的证据时的四个推理目标与三种归因错误（Sak 2026）
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — 学生对课程对齐的评分跟随题目难度（rho = 0.762）而非内容（Vogt 等人 2026）

- [[llm-grading-assistants-public-health-2026]] — 对相同提交相隔五天的重复评分得到 Krippendorff's alpha 0.625
- [[villanueva-ai-vulnerability-assessment-audit-2026]] — 人工智能脆弱性指数：大多数受评分数依赖不可核验的作者身份，因此效度依靠关键阶段的充分证据而非最大安全
- [[llm-tutor-pedagogical-metric-degradation-2026]] — 一项教学适应性指标上升而盲专家评分下降：测量效度并不意味着优化效度（Domínguez Figaredo & Fernández De la Cruz 2026）
