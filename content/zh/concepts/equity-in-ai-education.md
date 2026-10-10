---
title: 公平性
created: "2026-05-08T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring]
ethics: [bias-mitigation, culturally-relevant-pedagogy, digital-divide, equity-in-ai-education, inclusive-learning, neurodiversity]
discipline: [language learning]
audience: [learners, instructors]
level: [higher ed, k 12]
confidence: high
connected_faqs: [research-gaps-aied, designing-educational-ai-software, equity-ethics-pedagogical-safety-research, how-ai-impacts-students, ai-guidance-children-under-13, ai-disabled-neurodivergent-learners]
translation_of: concepts/equity-in-ai-education
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

> **公平性（equity）** —— AI 应当公平服务所有学习者的原则，以及关于获取 AI 教育工具、在其中的代表性、从其获益方面存在系统性差距的研究。知识库中的公平[[research-methods-aied|研究]]考察获取差距与数字鸿沟、[[ai-technologies|AI 系统]]中的偏见与公平、文化响应性与语言包容性设计、残障学习者的无障碍性，以及 AI 的收益与危害在各群体间的分布。它把技术性的（偏见缓解、公平算法）、结构性的（基础设施、政策）与[[pedagogy|教学性]]的（文化相关的[[teacher-role|教学]]）连接起来。

## 值得思考的问题

- 向一所学校或一个教室提供 AI 工具，并不自动缩小[[learning-gains|成绩差距]]——事实上，仅靠获取反而可能扩大它。如果"获取并不够"，那么要让 AI 真正公平地服务所有学习者，还需要什么？
- 即使是用来*模拟*学习者的数据也带有偏见：当 LLM 生成学生情境时，不同模型产生了更多全球北方或全球南方的画像以及不同性别的代词。当模型本身编码了不均等的先验时，我们对 AI 生成的学习者表征应当信任多少？
- 教育中的 AI 公平性常围绕三个关注点：谁得到工具（获取）、谁在其中被代表（代表性）、谁受益（结果）。你能想出某个群体获得了获取却没有受益的情形吗？什么解释了这一差距？
- 关于"结构性沉默"的研究认为，代表性不足语言的使用者在 AI 基础设施——训练语料、分词、基准——上处于劣势，而且是在*任何模型被训练之前*。如果劣势被烘焙进基础设施，修复应当从哪里开始？

## 引言

[[ai-education|教育中的 AI]]公平性涉及三个相互重叠的关注点：谁*得到* AI 工具（获取）、谁与什么在 AI 系统中被*代表*（代表性）、谁*受益*（结果）。AI 依设计、基础设施与政策之不同，既能扩大也能缩小既有差距。因此，公平性是施加于[[bias-mitigation|算法公平]]、[[digital-divide|数字获取]]、[[language-learning|语言包容]]、[[accessibility|无障碍性]]与[[culturally-relevant-pedagogy|文化相关教学]]之上的一个横贯透镜。

## 获取与基础设施公平

- **数字鸿沟：**[[digital-divide|获取不均]]跨越社会经济线、地区与国家地制约着 AI 驱动的学习工具，这是一个基础性障碍。证据记录了[[generative-ai|生成式 AI]]的收益如何不均等地分布于各国与各机构。
- **工具质量是鸿沟的一部分，而不仅是工具获取：**[[canonigo-teacher-mediation-generative-ai-mathematics-2026|Canonigo（2026）]]把 50 条数学提示各三次提交给同一模型的免费层与高级层，发现免费层在其 150 条回应中有 49 条不准确（**32.7%**），而高级层为 150 条中 18 条（**12%**）（χ2(1) = 17.5, p < 0.001）；两所研究学校中资源不足那所的教师称免费模型"对数学几乎无用"。作者将其解读为一种算法鸿沟，它把[[digital-divide]]从设备获取扩展到工具本身的质量，因此一所"有 AI 获取"的学校仍可能把一台实质上更不可靠的导师交到学生手中——作者自己告诫，该比较是探索性的，且提示未经随机化，使差距的大小只是指示性的而非已定的。同一研究还显示差距的走向并非由工具固定：在教师要求学生把 AI 输出与自己的作业比较、并预先提示模型不要给出解法的地方，输出变成了可供批评的工件；而在无中介的课堂里，学生先求教于算法、教师沦为验证者（"我不再是神谕，我是编辑"）。
- **获取并不够：**[[access-not-enough-ai-tutoring-2026|提供 AI 工具而不解决结构性障碍]]并不能缩小差距——获取必须与技能、支持以及使真实使用成为可能的条件配对。

差异化支持并非公平受益的证据：一项对[[math-education|数学]]中 AI 辅导的综述发现，包容性的主张缺乏支持，因为研究很少检验收益是否一致地分布于能力、性别、社会经济、语言、残疾与地理群体之间，从而未能确立这些系统缩小了成绩差距（[[intelligent-tutoring-mathematics-education-review-2026|Ogunsakin 等人（2026）]]）。

- **教师预期鸿沟会扩大。**[[watson-rainie-ai-challenge-faculty-survey-2026|Watson 与 Rainie（2026）]]调查了**1,057 名美国高校教师**，发现**81%** 预期生成式 AI 会扩大数字不平等（**58%** 认为会大幅扩大）——这是报告中最强的公平性预期，且与**68%** 表示其机构未让教师准备好用这些工具进行教学与指导的人并列。同一调查还显示工具采用的不均衡：**26%** 的受访者完全不用生成式 AI，艺术与[[humanities-education|人文]]教师中升至**40%**，社会科学家为**28%**，因此不使用与未准备集中于特定的[[discipline-specific-aied|学科]]。该报告是非概率样本，作者声明不可推广，因此这些是该领域表达的关注，而非测得的效果。
- **基础设施劣势：**[[structural-silence-underrepresented-language-ai-2026|结构性沉默]]表明，AI *基础设施*——训练语料、分词、[[benchmark|基准]]、部署架构——在*模型被训练之前*就系统性劣势化了代表性不足语言的使用者，把数据稀缺重新框定为结构性问题而非偶然问题。
- **合成数据中的模型特定人口先验：**[[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas 等人（2026）]]发现，当 LLM 生成学生情境时，每个模型都施加了不同的人口倾向——GPT 产生更多全球北方画像并使用 they/them 代词，Qwen 产生更多[[global-south|全球南方]]画像，Mistral 偏向 she/her。因此，即使是由[[llm]]对学习者数据的*建构*也带有区域与性别先验，可能传播到下游推荐中——这是一个鲜受审视的公平性风险。
- **社会经济梯度：**[[ai-lifelong-learning-policy|AI 与终身学习政策]]与[[generative-ai-education-productivity-gaps|生产力差距实验]]考察 AI 如何在不同学习者群体间缩小或扩大差距。
- **为残障学习者弥合鸿沟：**[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等人（2026）]]发现，生成式 AI 为视障本科生拉平了数字、地理与社会经济鸿沟，把包容框定为既是基础设施问题也是文化问题——把数字公平话语从获取延伸到归属、声音与代表性。

准备比偏好更重要，而拒绝的权利分布不均。学业自信强的学生可以无惩罚地拒绝 AI，而需要语言支持、无障碍支持或快速反馈的学生，会把拒绝体验为机会的丧失；临时工作人员可能感到采用能削减准备时间而不削减责任的工具的压力。当"有义务理解"被施加却未伴以培训、安全基础设施与清晰政策时，它就变成隐藏的工作量，而拒绝成为对机构准备不足的可预期反应，而非对技术的抵制（[[ai-refusal-higher-education-diagnostic-non-use-2026|Zagami 2026]]）。

**租金以三种货币支付，被拥有的能力随毕业生而去。**[[rented-self-decoupling-performance-becoming-2026|de Barba（2026）]]认为，驻留于商业工具中的能力只能按提供者的条件获得，因此机构许可证只是把房东搬了家而非消除它：获取通常随入学结束，而租来的能力此后只为能继续付费的毕业生存续。她补充了获取讨论常忽略的另外两种分布——自我成本集中于适应期，先前领域知识较少的学习者花的时间最长——租来的标准携带模型的参照点，预计会更多地取代那些文化与语言参照点与模型不同的学习者的标准。同一工具同时扩大获取与取代标准，这就是为何她把"命名一门课程必须自行建构的能力"同时视为一项公平措施与一项教学措施。

## 代表性公平

- **训练数据与输出中的偏见：**AI 训练数据主要反映主导文化视角。[[gender-bias-transfer-llm-writing|性别偏见迁移研究]]表明 LLM 辅助写作会以性别偏见污染学生作品；[[paternalistic-filter-llm-history-education|历史教育中的过滤器]]与[[ai-scoring-language-bias-physics|AI 评分]]能编码西方中心与语言偏见的假设。
- **边缘化知识：**[[genai-minoritized-knowledges-disability|关于少数化知识的研究]]考察生成式 AI 如何在[[higher-ed|高等教育]]中边缘化非主导知识体系与残障视角。
- **[[curriculum-design|课程]]多样化：**教师日益使用 LLM 使课程材料多样化（Wang 等人 2025 发现 78% 如此），然而 AI 策划的阅读清单仍少报 BIPOC 作者，[[stem-education|STEM]]的[[intelligent-tutoring|AI 导师]]默认采用西方中心的问题情境。

- **生成的图像重复主导的视觉规范，这使批判性使用成为一种能力而非附加项。**Jiang 等人（2026）观察到，生成式 AI 图像生成再现了视觉偏见等主导的多模态规范，并警告忽视这一点的多模态评估有自动化并再生产不平等之虞；他们面向第二语言教师的框架因此要求具备帮助学生察觉、评估与反叙事有偏见模型输出的能力（[[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang 等人，2026]]）。

## 结果公平

- **差异化影响：**若无公平透镜而设计，AI 工具可能扩大差距——[[genai-higher-education-systematic-review-2026|系统综述]]与[[ai-scoring-language-bias-physics|评分偏见研究]]显示了收益与危害在学习者群体间的不均分布。收益的合并证据带有同样的边界：[[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|Jing 等人（2026）]]在 35 项研究上估计本科生的总体中到大的收益（g=0.53, 95% CI [0.48, 0.64]），同时指出高成本工具的不公平获取是这些效应量无法捕捉的风险之一，学业表现与专业技能上显著的 Egger 检验使漏斗图不对称与小研究效应悬而未决。
- **跨越两个数量级成本的等效学习。**StudentBench 发现 AI 辅导与专家人类辅导在统计上等效，而导师之间的成本差从每百分点学习收益 \$0.005 到 \$1.40，且一个开放模型以 918× 更低的每点成本达到人类收益（\$0.0052 对 \$4.81），使单位学习的成本成为一个获取变量而不仅是质量变量（[[studentbench-ai-human-tutoring-gre-2026|Northcutt 等人（2026）]]）。
- **偏见放大：**AI 建议与[[ai-feedback-quality|自动反馈]]可能强化（而非挑战）既有的教师与系统性偏见。[[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]表明，LLM 写作反馈工具在反馈按学生的种族、语言、残疾、成绩或动机个性化时，系统性地滑向符合刻板印象的赞扬与被保留的批评——即使在完全相同的作文上——使"[[personalized-learning|个性化]]"成为自动反馈中一个具体的偏见载体。
- **公平性感知系统：**[[bias-mitigation]]与[[ground-truth-reliability-aied|真值可靠性]]研究开发检测与纠正 AI 导师、评分器与推荐器中偏见的方法。
- **公平性正则化器未必泛化到新学习者：**[[student-attention-estimation-fairness-2026|Fragkiadakis 等人（2026）]]在一个预测实时学生注意力的[[multimodal]]transformer 上加入了针对性别与年龄的误差差距正则化，发现它缩小了*验证*数据上的人口差距，但这些收益并未一致地迁移到留出被试或重复的被试级切分（正则化模型只在 10 次训练运行中的 4 次缩小了差距）。因此，在单一切分上认证的公平可能在真正的新学习者身上蒸发——教育 AI 需要留被试、重复种子的评估，而非仅聚合指标。

- **差异化分布的下一个机会决策。**逐案看似站得住的偏见仍可能系统性地给学习者排序：[[genai-social-bias-software-engineering-education-2026|Entezami 等人（2026）]]让三个 LLM 在软件工程课上安排 11,200 个团队作业，其中男性比女性至少低 80% 的概率被分到界面设计而非核心开发（GPT-5.2 OR < 0.01），且国籍独立于能力地移动分配。技能并未解决问题——99.2% 的基于技能分配匹配了两种有效团队之一，而性别仍在同等有效的选项间做出选择，因此只有聚合统计才能揭示模式；单人课程意象偏男性与浅肤色（数据库、调试与个人编程提示中超过 95% 为浅肤色），而多人图像相对多样。
- **学生能动性：**确保 AI 赋能而非取代[[student-experience|学生声音]]与[[agency]]，尤其对历史上被边缘化的学习者。
- **心理公平与认知公平：**[[school-ai-education-readiness-gaps-agency-2026|Liang 等人（2026）]]发现，香港中学一年的学校 AI 教学**缩小了心理 AI 准备度差距（信心、[[motivation]]、[[ethics|伦理]]意识），但没有缩小认知差距**——自主发起（"高能动性"）学习者与其同伴之间的客观[[ai-literacy]]差距持续存在，这是一种马太效应模式，课程"抬高了地板，却没有拉平赛场"。仅有课程获取、而没有持续的自主发起[[student-engagement|投入]]，可能培养心理而非完整的认知对等。
- **自动评分、学业表现与语言。**[[opraise-automated-marking-ai-assessment-2026|对 761 篇真实作文上三个前沿模型的 OpRaise 比较]]发现，AI 与人类的不一致随学生的学业水平与表层语言特征（词汇范围、连接词、句子复杂度）变化，其方式是人类评分所没有的，且准确度在三个队列不同的英国机构间不同——作者把这直接连接到这些机构在《英国平等法》下的义务，理由是某些学生群体可能比其他人受影响更大，并指出在自动评分决定影响学生之处，GDPR 第 22 条下的解释权。由于 AI 评分向分布中部压缩，暴露最多的学生是学业范围顶端与底端的那些。
- **评估规则能把语言劣势转化为诚信风险。**[[li-genai-assessment-language-equity-2026|Li（2026）]]认为，把生成式 AI 当作单一类别未经授权协助的诚信规则，对把英语作为附加语言的学生施加了更高的合规负担，因为他们对语言支持的合法使用更频繁且迭代，并使怀疑集中于表层流利度变化最大的写作者——这是一个规则设计问题而非行为问题，且带来在薄弱证据上选择性执法的风险。提出的边界以目的与构念为基础而非以工具为基础：语法、标点与句子层面清晰度的编辑、为理解而做的翻译、以及由学生实质性重写的初稿起草，都算作许可的支持，因为它们不添加新想法、新来源，也不实质重排分析，而生成论点或反驳、把学科规则应用于事实、重排分析序列或生成引用则算作替代。由于构念陈述常奖励流利与习语作为推理的代理，EAL 学生在分数中遇到构念无关方差；补救办法是：事前明确许可与禁止的功能、校准[[ai-use-disclosure|披露]]使常规支持的申报成本低于一条文献条目、分阶段提交与来源轨迹而非[[ai-detection|以检测为导向]]的推断，以及对转介与处分的班级级监测。该框架是规范性的且未经检验——Li 未对 EAL 学生的生成式 AI 使用率做任何主张。
- **学生自己准确地判断支持—替代界线，但犹豫。**[[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed 等人（2026）]]向 531 名本科生提出六个伦理情境，发现 57.6% 全部六个分类正确（均值 88.54%）：经核验支持的使用被广泛接受——经教授核验总结笔记（91.7%）、对自写论文做语法改进（84.9%）、AI 生成检索词后独立文献综述（91.1%）——而替代性使用被压倒性地拒绝。不确定性集中于规则必须真正解决的案例上，即无法核验的 AI 生成引用（9.9% "不确定"）与经极少编辑的 AI 生成文本（9.6%），作者把这解读为协助与有意义作者身份之间的界线对学生并不清晰的证据。客观[[ai-literacy]]只能弱预测分类准确性（Spearman's ρ = 0.234），样本以一所中西部公立大学的白人、女性、一年级学生为主，且作者强调正确的判断不等于伦理的行为。
- **提示特权：**[[prompt-privilege-equitable-ai-access-2026|Jin 等人]]记录了"提示特权"——善于措辞提出请求的用户系统性地获得比表达同一意图而欠技巧的用户更好的 LLM 输出——使[[prompt-engineering|提示]]技能成为一种悄然不均的资源。他们的提示公平转换器（Prompt Equity Transformer）把提示优化移入系统，把公平输出当作一项无障碍属性，而非要求新手做出专家级提示。

- **交互管理差距。**[[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström 与 Palmqvist（2026）]]对生成式 AI 作为均衡器得出一个矛盾结论：因为生产性使用要求识别过于抽象的答案、请求简化、并把一次会话围绕小目标来组织，无指导的生成式 AI"可能对已处优势的学生最有益"——那些有强学习习惯与指导 AI 之信心的学生——而学习技能较弱或学业[[self-efficacy]]较低的学生会遇到额外的复杂与挫败。该工具不是替代缺失的学业对话伙伴，而是引入了一种新能力，其习得本身制造了差距；作者结论，教授它的责任不能只落在学生身上（[[ai-literacy]]、[[self-regulated-learning]]）。

- **技能差距与资源差距不是同一个问题。**[[kumar-genai-computing-education-systematic-review-2026|Kumar、Wongsirichot 与 Nanthaamornphong（2026）]]把他们[[meta-analysis-systematic-review|对 72 项计算教育研究的系统综述]]发现文献倾向于混同的两种机制分开。**技能差距**在单个教室内运作：[[prior-knowledge|先前知识]]较强的学生把 AI 协助转化为持久技能，而挣扎的学生把它当作移除[[desirable-difficulties|生产性挣扎]]的拐杖，到学期末扩大能力分布——以与已证明能力挂钩的分级获取来应对。**资源差距**跨机构与国家语境运作：可靠的网络与付费 API 订阅支撑更有能力的工具使用，而无此条件的学生则不然——以机构对共享工具获取的投资和不假设普遍可用性的政策来应对。公平性是该综述三个框架要求中最薄的一项（六项研究），作者把这种稀薄本身解读为发现：缺少以公平为中心的干预研究，本身就是公平性问题（[[assessment-validity]]、[[scaffolding]]）。

- **证据最充分的方法是最不可规模化的那些。**在一个有 73 名计算教育者的工作坊中，口头与互动评估被报告为个体理解之最强可得的证据，也是最不可规模化的补救——在一个同时有四百多名学生和少数助教的房间里被提出——因此与已核验学习联系最清晰的策略，位于教着最少学生的机构中，这是机构之间而非班级之内的公平差距（[[computing-assessment-genai-workshop-report-2026|Akbar 等人，2026]]]]）。

- **辅导质量随学习者人口统计而变。**EduFair-Bench 把固定的[[simulating-students|LLM 学生]]与每个导师配对，横跨性别、移民背景、第一语言与社会经济地位九个人口层级，并对五个回合级教学指标评分。在[[intelligent-tutoring|LLM 辅导]]中，最大的偏离出现在明确的人口条件下——数学中步骤支架的相关高达 |r| = 0.144，纠正语气在[[chemistry-education|化学]]中每个模型都超过 0.10（0.102-0.168），在[[physics-education|物理]]中为（0.129-0.294）——且在 15 个模型×领域单元中的 11 个，答错条件得分高于答对条件，表明语气追踪的是学生的人口标签而非其推理质量。教学特定的[[reinforcement-learning|强化学习]]重新分配了这些差距，而非消除了它们。（[[edufair-bench-pedagogical-fairness-llm-tutors-2026]]）

- **隐含的人口信号是比明示属性更不可控的偏见渠道。**[[demographic-signals-llm-student-assessment-2026|Rooein、Benedetto 与 Hovy（2026）]]固定每个任务的输入，只在六个指令调优[[llm|LLM]]与三个教育任务上改变人口语境，产生 192,480 次推断调用，并把*明示*信号（陈述的学生属性）与*隐含*信号（由十次提示的[[conversational-ai|对话]]历史携带的）分开。在[[automated-essay-scoring|自动作文评分]]中，多数模型在明示条件下相对稳定，而隐含条件抬高了分数——Llama-70B 比自身默认高出 1.57 分（p < 0.001）。在元语言问答中，隐含条件反向漂移：较低教育水平的回应得到较少正面情感，在 0-4 量表上最低与较高教育水平间平均差 0.3，而项内标准差为 0.07。公平性困难是结构性的——线索不是政策能禁止的明示属性、也不是审计能检查的提示字段，而是交互本身的性质。

- **核验能把收益重新导向较弱的学生。**[[verified-study-materials-learning-gains-2026|Dang & Nguyen（2026）]]发现，一年级经济学课程中经专家核验的 AI 学习材料与 2.34 分的成绩提升相关，但其中约四分之三出现在最底五分位，且低于 60% 边界的分数占比下降 24.7 个百分点——把核验负担从学生移到一个可问责的导师。

## 语言、文化与残障包容

- **语言：**多数 AI 工具优先英语，边缘化[[multilingual-learning|多语言]]学习者。[[genai-linguistic-diversity-academic-writing|学术写作中的语言多样性]]、[[structural-silence-underrepresented-language-ai-2026|代表性不足的语言]]与[[language-learning]]研究对此加以应对。
- **文化：**[[culturally-relevant-pedagogy|文化相关教学法]]与[[culturally-aware-aied-community-learning|以社区为中心的 AIED]]呼吁 AI 反映学习者的文化语境，而非强加主导规范。
- **残障与神经多样性：**[[inclusive-learning|无障碍学习]]、[[universal-design-for-learning|通用设计]]、[[neurodiversity|神经多样性]]与[[special-education|特殊教育]]研究考察 AI 如何支持或排斥残障学习者——[[neurodivergent-computing-students|神经多样性的计算学生]]、[[dyslexlens-dyslexic-learners-ai|阅读障碍学习者]]与[[inclusive-learning|无障碍教育材料]]是例证。
- **语言、文化与成本在一起：**Bashir 与 Afzal（2026）把[[well-being|福祉]] AI 中的公平设计框定为语言、文化与成本的单一问题——仅英语的工具让用乌尔都语或罗马乌尔都语表达困扰的学生失败，西方数据集无法捕捉当地显著的应激源，昂贵的商业系统让装备较差的大学失败（[[culturally-aware-student-stress-chatbot-2026|Sukoon]]）。他们的应对结合了通过托管 API 访问的[[open-source|开源]]多语言 LLM（资源要求低）、双语评估界面，以及在一个经核验的 20 项特征量表上训练的分类器——同时承认训练数据不代表目标人群，"有些领域……工具可用但往往昂贵"，且该适配停留在提示层而未与学生验证——这是公平意图与已证明公平之间差距的坦率记录。

## 特殊群体与全球公平

- **特殊群体：**[[special-education]]、[[neurodivergent-computing-students|神经多样性学习者]]、[[dyslexlens-dyslexic-learners-ai|阅读障碍学习者]]与[[inclusive-learning|残障学习者]]代表其需求常被 AI 系统设计忽视的群体。
- **全球南方视角：**[[suacode-african-students-motivations|非洲学生动机]]、[[connected-ai-lesson-planning-vietnam|越南 AI 课程规划]]与[[pre-service-science-teachers-ai-perceptions-2026|加纳教师接受度]]提供了西方中心 AIED 研究中常缺席的全球南方视角。在机构层面，[[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye 等人（2026）]]表明，45 所尼日利亚大学的 AI 整合由机构年龄与地理而非治理类型驱动，强化的网络联系让连接良好的机构复合优势——证明公平差距是结构性再生产的，而非仅经由个体获取。
- **全球能力：**证据记录了生成式 AI 收益如何不均等地分布于各国与机构，[[ai-lifelong-learning-policy|AI 与终身学习政策]]应对结构性的社会经济梯度。
- **残障与全球南方的交叉：**[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等人（2026）]]——一项在三所巴勒斯坦大学对 21 名视障本科生的[[qualitative-research|质性]]个案研究——表明生成式 AI 弥合数字、地理与社会经济鸿沟，同时把[[technology-acceptance-model|技术接受模型]]扩展到残障语境，其中[[usability-research|可用性]]、可负担性与无障碍性相互强化。
- **计算中的性别公平：**面向公平的[[generative-ai|生成式 AI]]用途仍探索不足。[[all-girls-genai-makerspace-gender-equity-2026|欧洲一项全女生生成式 AI 创客空间倡议]]把两个生成式 AI 工具与女性主义教学法结合，应对女生在计算中代表性的持续性别不平等，从业者采取具体步骤支持女生的参与与投入——这是面向公平的生成式 AI 设计的一个例证。刻意性别的 AI 也能充当*干预本身*：[[ada-female-coded-chatbot-gender-stereotypes-2026|Rücker 与 Becker-Genschow（2026）]]表明，一个以女性编码、以 Ada Lovelace 人物为原型的[[discipline-specific-aied|学科特定]]数学[[conversational-ai|聊天机器人]]（既作榜样又作[[intelligent-tutoring|学习助手]]），在九年级学生中显著减少了对数学能力与[[math-education|数学]]作为男性领域的性别刻板信念——在*两种*性别中都是，且技术接受度高且性别中立。这把代表性重新框定为一种设计杠杆，而不只是待审计的偏见：系统设计的 AI 人格可以对抗而非仅仅避免再生产[[gender-bias-transfer-llm-writing|性别偏见]]。

## 对教育中 AI 的意涵

- **公平是设计，而非事后补救：**[[bias-mitigation|偏见缓解]]与公平性感知算法必须内建于 AI 导师、评分器与推荐器，并与准确度一同接受公平性评估。
- **基础设施就是公平：**应对[[digital-divide|数字鸿沟]]与代表性不足语言的基础设施，是公平 AI 的前提，而非次要关注。
- **代表性在内容与评估中都重要：**AI 策划的材料与[[automated-assessment|自动评估]]必须反映而非惩罚多样的学习者、文化、语言与知识体系。
- **把获取与支持配对：**仅提供工具不够；学习者需要技能、条件与文化相关的[[scaffolding]]才能受益。
- **触及正规教育遗漏的受众：**[[ai-literacies-young-adults-2025|面向公共服务媒体的 AI 素养框架]]认为，除非另行设计，供给会持续只到达已处优势者，把在数字或其他方面被边缘化的年轻人命名为经由正规教育机会最少者，并提出有针对性的伙伴关系加上全国触达的供给——而非普遍发布——作为补救。
- **政策与治理：**机构 AI 政策（[[educational-policy-ai]]、[[governance]]）必须把公平嵌入为指导原则。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[learners]] — 学习者：学习者侧概念的总括
- [[digital-divide]] — 跨越社会经济线、地区与国家的不均 AI 工具与基础设施获取
- [[bias-mitigation]] — 检测与纠正 AI 导师、评分器与推荐器中偏见的方法
- [[accessibility]] — 使 AI 学习工具可供残障学习者使用的设计
- [[assistive-technology]] — 在 AI 介导情境中支持残障学习者的工具
- [[culturally-relevant-pedagogy]] — 反映学习者文化语境而非强加主导规范的教学
- [[language-learning]] — 多语言与代表性不足语言学习者的语言包容
- [[inclusive-learning]] — 面向所有学习者的无障碍且公平的学习
- [[universal-design-for-learning]] — 从一开始就为学习者变异性而设计
- [[neurodiversity]] — 在 AI 教育中支持神经多样性学习者
- [[special-education]] — 在 AI 系统设计中满足残障学习者的需要
- [[ai-literacy]] — 学习者公平地从 AI 受益所需的技能
- [[educational-policy-ai]] — 把公平嵌入为指导原则的机构政策
- [[governance]] — 公平 AI 的监督与问责
- [[agency]] — 确保 AI 赋能而非取代学生声音
- [[stakeholders]] — 总括：AI 教育中的人与受众（学习者、教师、设计者、管理者、政策制定者）
- [[parents-and-families]]
- [[student-support-and-success]] — 支持系统触及谁，以及按风险分数行动的风险

## 关联文章

- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — 生成式 AI 视觉偏见如何进入多模态评估，以及为何反叙事它是一种教师能力
- [[rented-self-decoupling-performance-becoming-2026]] — 租来的自我：以金钱、自我与标准支付的租金，以及毕业即终结的许可证
- [[verified-study-materials-learning-gains-2026]] — 经核验而非生成：专家核验的 AI 学习材料与大学课程中学习收益的分布

- [[ai-literacies-young-adults-2025]] — 公平作为递送问题：触及正规教育遗漏的年轻人
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise 报告：三所英国大学 761 篇大学作文的 AI 评分
- [[kumar-genai-computing-education-systematic-review-2026]] — 技能差距与资源差距：两种需要不同补救的公平机制
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — 无指导的生成式 AI 可能扩大差距：交互管理能力（Brunnström & Palmqvist 2026）
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — 尼日利亚高等教育中的机构结构、数字不平等与 AI 整合
- [[student-attention-estimation-fairness-2026]] — 面向实时学生注意力估计的公平性感知多模态 Transformer 建模
- [[school-ai-education-readiness-gaps-agency-2026]] — 学校 AI 教育缩小心理而非认知准备度差距
- [[prompt-privilege-equitable-ai-access-2026]] — 提示特权：测量与缓解 LLM 获取中的无障碍差距
- [[ai-scoring-language-bias-physics]] — 基于 AI 评分中的语言偏见
- [[gender-bias-transfer-llm-writing]] — LLM 辅助写作中的性别偏见迁移
- [[genai-minoritized-knowledges-disability]] — 生成式 AI 与少数化知识的边缘化
- [[structural-silence-underrepresented-language-ai-2026]] — 结构性沉默：AI 基础设施中的代表性不足语言
- [[genai-higher-education-systematic-review-2026]] — 高等教育中的生成式 AI：系统综述
- [[ai-lifelong-learning-policy]] — AI 与终身学习政策
- [[generative-ai-education-productivity-gaps]] — 生成式 AI 能缩小教育造成的生产力差距吗？
- [[genai-linguistic-diversity-academic-writing]] — AI 介导学术写作中的语言多样性
- [[access-not-enough-ai-tutoring-2026]] — 获取并不够
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — 女性编码聊天机器人作为榜样减少数学性别刻板印象
- [[paternalistic-filter-llm-history-education]] — LLM 历史教育中的家长式过滤
- [[dyslexlens-dyslexic-learners-ai]] — DyslexLens：面向阅读障碍学习者的 AI 支持
- [[ground-truth-reliability-aied]] — AIED 中的真值可靠性
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies：跨学生属性的符合刻板印象的反馈偏见
- [[lopez-pernas-llm-appropriate-student-support-2026]] — AI 能为多样的学生画像递送恰当支持吗？一项大规模评估
- [[all-girls-genai-makerspace-gender-equity-2026]] — 全女生生成式 AI 创客空间工作坊与计算中的性别公平
- [[khlaif-assistive-genai-visually-impaired-2026]] — 面向视障学习者的辅助生成式 AI
- [[culturally-aware-student-stress-chatbot-2026]] — 面向巴基斯坦大学生压力检测与健康支持的、使用 NLP 与机器学习的 AI 驱动文化感知聊天机器人
- [[demographic-signals-llm-student-assessment-2026]] — 隐含（对话历史）人口信号改变 LLM 评分、反馈与作答（Rooein、Benedetto & Hovy 2026）
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1,057 名美国教师谈 AI 的现在与未来：81% 预期数字不平等扩大，26% 不用这些工具
- [[li-genai-assessment-language-equity-2026]] — 划定支持—替代界线：生成式 AI 评估规则与 EAL 学生的合规负担
- [[ai-refusal-higher-education-diagnostic-non-use-2026]] — 拒绝的权利分布不均：拒绝作为机构准备不足的证据（Zagami 2026）
- [[reed-ai-literacy-ethical-judgment-scenarios-2026]] — 531 名本科生中的情境化伦理判断与 AI 素养
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench：AI 与人类辅导产生等效的 GRE 学习收益
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? 一份关于生成式 AI 时代计算评估的在线工作坊报告
- [[genai-social-bias-software-engineering-education-2026]] — 生成式 AI 可能在软件工程教育中强化社会偏见
- [[canonigo-teacher-mediation-generative-ai-mathematics-2026]] — 数学中免费层与高级模型的准确度差距：32.7% 对 12%（Canonigo 2026）
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — 合并的生成式 AI 学习收益（g=0.53）及其无法捕捉的高成本工具不公平获取
- [[intelligent-tutoring-mathematics-education-review-2026]] — 数学 AI 辅导综述：发现包容性与成绩差距主张缺乏支持
