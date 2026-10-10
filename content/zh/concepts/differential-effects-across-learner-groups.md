---
title: 不同学习者群体间的差异效应
created: "2026-09-19T06:20:00-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-01T10:47:53-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **不同学习者群体间的差异效应** —— [[ai-education|AI in education]]（教育中的人工智能）研究对下列问题的发现：AI 的*使用*方式及其*效果*在不同类型的学习者之间如何不同。这包括[[special-education|残障学生]]与[[neurodiversity|神经多样性学生]]、第二语言学习者与[[multilingual-learning|多语言学习者]]、女生与男生、少数族裔学生、来自低收入家庭的学生、农村学生、第一代大学生、国际学生以及[[adult-learning|成年学习者]]。值得带走的图景在两个方向上同时是不均衡的：一些分支拥有真实证据（残障、语言），另一些则近乎空白（第一代大学生、国际学生、难民），而且即便是证据较强的分支，也极少能证明某个*群体*本身存在差异——它们证明的是某个工具帮助或损害了该群体的一个样本，这是完全不同的论断。本页梳理已有证据、这些证据说明了什么，以及为什么在方法上群体均值不能被当作对某个学习者的预测。

## 值得思考的问题

- 你的工具对你的课堂上大多数学生都有效，而其中一个五人的子群遇到了困难。这种规模的子群差异，在这类研究中究竟能否被检测出来？你又是否愿意仅凭这一点证据就为全班更换工具？
- 关于残障学生的研究报告了因残障类别而异的效应。如果两个类别在同一个[[meta-analysis-systematic-review|元分析]]中落在差异很大的效应量上，这能说明什么——在做设计决策时把"残障"当作一个群体来处理意味着什么？
- 多项研究发现 AI 工具在其效果上并不存在性别差异，而另一些工作则显示[[ai-feedback-quality|AI 反馈]]与 AI 辅助写作*确实*会在人格设定或提示词承载偏见时复现性别刻板印象。这两者如何能同时成立？
- 大多数公平性研究测试的是模拟的学生人格，而不是真实学习者，因为在多数部署中模型在推理阶段拿不到真实的人口统计属性。一次反事实人格审计能确立什么，又不能确立什么？
- 浏览本页的各个分支，哪些学习者群体在你所用工具的验证研究背后真正被代表了？对于某个缺席的群体，你会怎么做？
- 一项让所有人的结果都提升、同时缩小了差距（帮助原本落后的学生最多）的干预，其公平性叙事与一项只提升均值的干预完全不同。当你评估一个试点时，你测量的是差距还是均值？

## 引言

"AI 对*这类*学生有效吗？"这个问题里藏着两个问题。第一个是关于效应的：一个工具是否为不同群体产生不同结果。第二个是关于使用的：不同群体是否以不同方式采用、获取或与同一个工具互动，这可以在完全没有差异效应的情况下影响结果。本页逐一群体地覆盖这两方面，并直率地指出文献在哪里止步。

它刻意不是对邻近页面的重复。[[equity-in-ai-education|Equity in AI Education]]（AI 教育中的公平）承载规范性与结构性框架——获取、代表性与结果公平，以及关于 AI 在教育中*应当*做什么的论证。[[inclusive-learning|Inclusive Learning]]（包容性学习）承载设计框架，包括[[universal-design-for-learning|通用学习设计]]。[[digital-divide|Digital Divide]]（数字鸿沟）覆盖获取与技能层面。[[neurodiversity]]、[[special-education|特殊教育]]、[[accessibility]]和[[multilingual-learning|多语言学习]]深入单一群体。留给本页的是跨群体的证据地图与一个评估性问题：这些效应如何被估计、究竟研究了哪些群体，以及一个群体层面的发现能授权你做什么。

## 群体差异如何被报告，以及为何其中大部分做不到

**单一群体研究不是差异效应研究。** 该领域多数文献在没有对照组的情况下测量一个群体。[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等人（2024）]]汇总了 29 项关于面向残障学生的 AI 的（准）实验研究，发现了中等程度的正向效应（Hedges' g = 0.588，95% CI [0.349, 0.826]）——却没有神经典型对照组。这说明的是某项干预有帮助，而不是它对这个群体的帮助有所不同。

**子群分析通常样本太小，无法回答这个问题。** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE 科学微型 RCT]]异常明确：其处理×状态交互项为 0.57 分（95% CI −2.25 至 3.39），分层的估计值为一个群体 g = 0.28（95% CI −0.04 至 0.59）、另一个群体 g = 0.35（95% CI 0.18 至 0.52）。一个与零重叠的子群区间是一个留给本地试点的问题，而不是全班规则的依据。

**人口统计属性通常是模拟的。** 真实学习者的人口统计很少被挂到模型输入上，因此审计机构提供的是人格。[[demographic-signals-llm-student-assessment-2026|Rooein、Benedetto 与 Hovy（2026）]]让六个指令微调模型在模型默认、显式人格和隐式历史三种条件下完成三项教育任务——192,480 次推理调用——发现显式人格和*隐式*对话历史都会改变模型行为。他们的区分值得保留：意识到学习者差异可以是可取的（针对学习者的第一语言调整反馈），而当同样的敏感性改变了它对相同作品的评判时，它就是伤害。

**公平性修补未必能泛化。** [[student-attention-estimation-fairness-2026|Fragkiadakis 等人（2026）]]在[[assessment-validity|验证]]数据上缩小了学生注意力估计中针对性别和年龄的误差差距，但这些收益并不能一致地迁移到未见的科目或被试层面的重复划分上。

**群体标签掩盖了内部差异。** 在同一项残障元分析中，有特定学习障碍、智力和发育障碍或失聪的学生显示出更大的效应（g = 0.952），而自闭症谱系障碍学生为（g = 0.368）——作者报告这一差异在来自 41 个独立样本的 239 个效应量上并不具有统计显著性。"残障"不是一个群体，"L2 学习者"同样不是。

## 残障与神经多样性

这是知识库中最深的一条分支，也是报告最规范的一条。

- **效应是真实的，但在不同结果上分布不均。** 在[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等人（2024）]]中，[[learning-gains|学业表现]]显示出最大的效应（k = 80，g = 0.929），高于日常生活与其他技能（g = 0.766）以及社交情感技能（k = 144，g = 0.382）。存在发表偏倚（Egger's test β = 2.837，p < .001）；剪补法将合并估计降至 g = 0.2694，且仍具统计显著性。把头条效应与偏倚调整后的效应一起读。
- **该领域已经围绕[[generative-ai|生成式 AI]]重组。** [[assistive-tech-neurodivergent-higher-ed-review-2026|面向神经多样性学生的数字辅助技术范围综述]]筛出 766 条记录，纳入 40 项实证研究，其中 15 项使用生成式 AI，11 项使用沉浸式形式。这条分支规模小且新，而非成熟。
- **一些 AI 支持起的是拉平作用而非区分作用。** [[adhd-video-segmentation-computing-education|Pimenova、Begel 及同事]]在一项被试内研究（17 名 ADHD，10 名非 ADHD）中把[[video-education|教学视频]]切成单条指令的片段并加入固定停顿：所有人都进步了，ADHD 参与者的错误与犹疑下降到与非 ADHD 同伴持平。这是通过自动内容变换实现[[universal-design-for-learning|通用学习设计]]的现有最强证据形态：一个能缩小差距的普适性改变，而非针对某个群体的修补。
- **神经多样性学生说自己需要的东西往往很朴素。** [[neurodivergent-computing-students|一项对 24 名神经多样性计算机专业学生和 20 名神经典型同伴的调查]]（含四次访谈）发现，学生对缺乏清晰结构或带有模糊期望的作业有显著的不适感——而这种调适并不需要花费什么就能提供。
- **设计选择也可能在认识论层面排斥。** [[genai-minoritized-knowledges-disability|Tali-Otmani（2026）]]论证，以英语为中心、西方中心的训练数据将非霸权性的认知方式边缘化，并以此批评把残障学习者的处境置于中心。

## 语言：第二语言、多语言与英语学习者

按文章数量计这是最大的一条分支，且清晰地分为工具效应与工具伤害两部分。

- **工具效应令人鼓舞但噪音很大。** [[robot-assisted-language-learning-meta-analysis-2026|Wang、Zhang 与 Zou（2026）]]对 11 项（17 个效应量，N = 595）机器人辅助[[language-learning|语言学习]]研究做了元分析，发现整体正向效应（g = 0.83，95% CI [0.46, 1.21]）伴随高异质性（I² = 84.4%）；在所测的六个调节变量中，只有机器人—学习者互动类型显著。这个规模的证据基础支持一个临时性的[[benchmark]]，而不是采购决策。
- **在任何工具被使用之前，基础设施本身就是不均衡的。** [[structural-silence-underrepresented-language-ai-2026|Roy 与 Roy（2026）]]以孟加拉语为案例记录了语料缺口：全球网络内容中不足 0.5%，而英语约为 49.5%，尽管孟加拉语使用者接近世界人口的 4%。
- **教学语言会改变 294 名高等教育学生的结果。** 同一篇综述报告，外语内容的结果低于母语教学，且双语[[cs-education|编程]]教学优于纯英语教学。
- **检测器惩罚第二语言写作者。** [[hadra-ai-detector-accuracy-efl-2026|Hadra、Cambridge 与 Mesbah（2026）]]用 Turnitin 和 Originality 测试了 192 篇文本：一个检测器把 48 篇专业撰写文本全部正确分类，却把 48 篇 EFL 学生文本中的 4 篇误分类（91.6%）。这种不对称正是要害——误差落在其写作本就备受审视的那个群体身上。

## 性别

此处的性别研究分为两个问题：工具是否区别对待学习者，以及学习者是否暴露在带有刻板印象的工具中。

- **一项刻意性别中立的设计未显示性别差异。** [[ada-female-coded-chatbot-gender-stereotypes-2026|一项针对 195 名九年级学生的准实验研究]]测试了 ADA——一个以 Ada Lovelace 为原型的女性编码[[conversational-ai|聊天机器人]]：情境性兴趣在两种性别上都上升，而情绪反应、认知负荷或学业表现上均无性别差异。一个榜样型人格可以在不触发刻板印象威胁的情况下被构建。
- **但提示内容会把偏见迁移进学生作品。** [[gender-bias-transfer-llm-writing|一项有 123 名参与者的对照研究]]让学生在仅性别不同的配对画像下撰写职业规划作文，分无 AI、中立 AI 与性别偏见 AI 三种条件；偏见条件把性别分化的语言迁移进学生写作，并不对称地压制了女性[[agency]]。研究者先在 1,600 篇生成的作文上确认了这一效应。
- **空间与框架和工具同样重要。** [[all-girls-genai-makerspace-gender-equity-2026|一项全女生生成式 AI 创客空间案例研究]]发现，女生认为单一性别环境更安全、更放松，并警告不要"女孩化"——那种不动权力关系的表面化改造。
- **模型敏感性是模型的属性，不是常数。** 在[[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]]中，从 7B 到 70B 的五个辅导系统在九个人口统计层级上被审计：Qwen2.5-7B 在 12 个领域×维度格子中的 7 个超过了 |r| ≥ 0.10 的偏见阈值，而 LLaMA-3.1-8B 只超过了一次。针对教学法的训练减少了某些偏见，也增加了另一些。
- **单轴修补可能让某个群体处境更糟：** 被归入"Unknown Gender"类别的性别多元学生在每一种公平性方法下的真正例率都最低，且没有任何单轴方法改善了他们的待遇——即上面提到的群体标签差异，只不过发生在预测性预警模型而非辅导系统中（[[fairness-theatre-early-warning-systems-2026|McConvey 等人（2026）]]）。

## 种族、族裔与少数族裔学生

这条分支文章数少但机制强，因为证据是关于 AI 一旦拿到人口统计属性后会对它做什么。

- **[[personalized-learning|个性化]]是一条偏见向量。** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]显示，当反馈用学生的种族、语言、残障、成绩或[[motivation|动机]]进行个性化时，[[llm]]写作反馈工具会转向符合刻板印象的赞扬并扣留批评——而这些作文是完全相同的。
- **人口统计线索可以是隐式的。** 上文的反事实审计发现，对话历史而不仅是显式人格改变了评分和反馈行为——即[[demographic-signals-llm-student-assessment-2026|192,480 次推理调用]]的同一结果，这也说明仅就*声明的*人口统计制定披露规则是不够的。
- **迁移与语言差距可能占主导。** 在 EduFair-Bench 中，70B 模型把最大的语言与移民差距和最小的教学法差距配在一起，所以一个看起来教学上很强的辅导系统，可能恰是对"学生看起来是谁"最敏感的那个。
- **认识论排斥，而不仅是错误：** 见上文的[[genai-minoritized-knowledges-disability|少数化知识的边缘化]]。

## 社会经济地位、地理与年龄

- **数字素养，而非 AI 使用量，是中介变量。** [[ai-divide-ses-personality-primary-education-2026|Wang 及同事（2026）]]对荷兰 4,497 名六年级学生的调查与全国登记册数据建模，发现人格特质与学业表现之间的联系经由数字素养而非 AI 使用强度起作用，且数字素养的差异更多由人格而非社会经济地位驱动——而 SES 优势是独立于 AI 参与之外运作的。经典的只看 SES 的框架是不完整的。
- **地理可能是硬约束。** [[arc-hubs-k12-ai-robotics-rural-2026|ARC 的记述]]关于[[k-12]]机器人与 AI 教育报告：农村 FIRST LEGO League 参与度在 2020 年远程赛季下降后再未恢复，而城市参与度逐渐恢复；并指出持久的本地技术指导——而非套件或[[curriculum-design|课程]]——才是按地理分布不均的那个约束。
- **成年学习者是独立的设计案例，** 由[[adult-learning|Adult Learning]]及知识库的成人教育学工作覆盖，而非由 K-12 研究覆盖。
- **获取仍然制约其他一切：** 见[[digital-divide|Digital Divide]]，以及[[access-not-enough-ai-tutoring-2026|没有[[pedagogy|教学法]]整合，仅有 AI 辅导的获取是不够的]]这一发现。

## 证据缺失之处

本次调查的诚实结论是：有些群体极其薄弱。以下每一项都是证据基础中的真实缺口，而非本页的缺口。

- **第一代大学生：** 一项研究报告了使用差异而非效应。在[[student-ai-inquiry-types-cs2-2026|一项 CS2 探究研究]]中，延续代大学生把 AI 当作活跃的[[problem-solving]]伙伴，而第一代大学生采取了确认性、验证取向的角色，总体上提出的问题更少。
- **第一代大学生：首个效应估计，而方向是错的。** [[liu-course-integrated-ai-tutoring-rct-2026|Liu 等人（2026）]]对一门课程整合的[[intelligent-tutoring|AI 辅导系统]]做的[[rct|随机试验]]补上了上面这条所缺的东西——一个测量到的差异，而非使用模式。在全样本中，辅导系统获取对期末成绩的影响对第一代大学生多出负向 2.87 分（0.28 SDs），即他们为 −5.10 分（−0.50 SDs）而同伴为 −2.23 分（−0.22 SDs）；这一差异在精确匹配样本中更大（−3.89 分，−0.35 SDs），且第一代大学生在作业得分和平台页面浏览量上也损失更多。该研究未报告机制，其精度也因结果而异，但方向与"缩小差距"的叙事相反：先前最少接触学业支持的学生承担了最大的可测量代价。
- **国际学生：** 一项[[mixed-methods-research|混合方法]]研究（调查 n = 60，访谈 n = 14）关于[[international-students-conversational-ai-adaptation|跨文化适应支持]]。
- **资优与高成就学生：** 在本语料库中作为群体实际上未被研究。
- **难民、移民与流离失所的学习者：** 没有研究。
- **性别在多数上述工作中仍按二元分析**，且残障类别在不同研究间各异，因此对"同一个"群体的跨研究比较存在局限。

## 如何在不把群体标签套死的前提下使用这些证据

- **把群体均值当作关于某个总体的假设，永远不要当作关于某个人的预测。** 上述每一个差异论断都是一个分布性陈述。
- **在信任一个工具宣称的包容性之前，先问你的学习者是否根本在验证样本里。** 神经多样性与语言两条分支都显示，开发中的代表性是例外而非常态。
- **在证据允许时优先选择拉平式设计。** ADHD 视频切分的结果——人人进步、差距缩小——相比针对群体的附加模块，是更适合普通课堂的目标。
- **对消耗人口统计属性的个性化保持谨慎。** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked pedagogies]]的发现正是关于这一机制，且它适用于[[well-being|wellbeing]]签到、[[affective-computing|情感型辅导系统]]以及为学习者画像的[[recommender-systems-and-learning-paths|推荐系统]]。
- **在本地、就你关心的群体、用不依赖该工具测量的结果做测试。** 参见[[interpreting-and-applying-aied-research|Interpreting and Applying AIEd Research]]以了解评估习惯，以及[[research-methods-aied|Research Methods in AI in Education]]以了解使本地测试站得住脚的那些设计。

## 关联概念

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## 关联文章

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 项关于面向残障学生的 AI 的研究：g = 0.588，偏倚调整后为 g = 0.269
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 从 766 条记录到 40 项研究，其中 15 项使用生成式 AI
- [[adhd-video-segmentation-computing-education]] — 一项让 ADHD 参与者达到与同伴持平的普适设计改动
- [[neurodivergent-computing-students]] — 24 名神经多样性学生谈结构、模糊性与协作
- [[genai-minoritized-knowledges-disability]] — AI 中的认识论边缘化，以残障为案例
- [[robot-assisted-language-learning-meta-analysis-2026]] — 小规模 L2 证据基础中的 g = 0.83 与 I² = 84.4%
- [[structural-silence-underrepresented-language-ai-2026]] — 孟加拉语占网络内容不足 0.5%，而英语占 49.5%
- [[hadra-ai-detector-accuracy-efl-2026]] — 检测器误分类 EFL 写作，却把专业文本评得完美
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — 一项 195 名学生的女性编码榜样测试，无性别差异
- [[gender-bias-transfer-llm-writing]] — 性别偏见的提示迁移进学生作文
- [[all-girls-genai-makerspace-gender-equity-2026]] — 单一性别空间受到重视，同时警告不要"女孩化"
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — 辅导系统的公平性随模型、领域与行为维度变化
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — 对相同作文给出符合刻板印象的反馈
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 次调用：显式人格与隐式历史都会改变模型
- [[student-attention-estimation-fairness-2026]] — 未能泛化的公平性正则化
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 名学生：数字素养而非 AI 使用中介了差距
- [[arc-hubs-k12-ai-robotics-rural-2026]] — 再未恢复的农村参与度，以及作为约束的指导
- [[ai-tutoring-micro-rct-gcse-science-2026]] — 一个置信区间跨零的子群交互项
- [[student-ai-inquiry-types-cs2-2026]] — 本语料库中唯一一项关于第一代大学生的使用发现
- [[international-students-conversational-ai-adaptation]] — 本语料库中唯一一项关于国际学生的研究
- [[liu-course-integrated-ai-tutoring-rct-2026]] — 本语料库中关于第一代大学生的首个效应估计：辅导系统获取让他们损失 0.50 SDs 的期末成绩，而同伴为 0.22（Liu et al. 2026）
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems
