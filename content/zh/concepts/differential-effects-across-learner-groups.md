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
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **不同学习者群体间的差异效应** —— [[ai-education|AI 在教育中的应用]]研究发现的关于 AI 的*使用*及其*效应*如何在不同类型的学习者之间有所不同：[[special-education|残障学生]]与[[neurodiversity|神经多样性学生]]、第二语言与[[multilingual-learning|多语言学习者]]、女孩与男孩、少数群体学生、来自较低收入家庭的学生、农村学生、第一代大学生、国际学生，以及[[adult-learning|成人学习者]]。值得记住的模式是同时在两个方向上都不均衡：一些分支拥有真实证据（残障、语言），而另一些几乎空白（第一代、国际、难民）；即便在证据较强的分支中，也很少能证明某个*群体*存在差异——它们证明的是某个工具帮助或损害了该群体的一个样本，这是两种不同的主张。本页梳理了现有的研究、它们揭示了什么，以及为什么群体均值不能作为对某个学习者的预测的方法论原因。

## 值得思考的问题

- 你的工具对班上的大多数学生都有效，但有一个五人小组遇到了困难。这样规模的小组差异在这类研究中是否根本就能被检测出来——你会愿意仅凭这一点证据就为整个班级更换工具吗？
- 关于残障学生的研究报告的效应因残障类别而异。如果两类残障在同一个[[meta-analysis-systematic-review|元分析]]中处于非常不同的效应量水平，这对把"残障"当作设计决策中的一个群体意味着什么？
- 多项研究发现 AI 工具的效应*并不*因性别而异，而另一些研究显示[[ai-feedback-quality|AI 反馈]]与 AI 辅助写作*确实*会在人设或提示词带有偏见时复制性别刻板印象。这两者如何能同时成立？
- 大多数公平性研究测试的是模拟的学生人设而非真实学习者，因为在多数部署中模型在推理时无法获得真实的人口统计属性。反事实人设审计能够确立什么，又无法确立什么？
- 浏览本页的各条研究线索：你的工具验证背后的研究中，实际上有哪些学习者群体被代表了——如果某个群体缺席，你会怎么做？
- 一个为所有人提升成绩、但同时缩小了差距（帮助落后的学生最多）的干预，其公平性叙事与一个只提升均值的干预不同。当你评估试点时，你测量的是差距还是均值？

## 引言

"AI 对*这类*学生有效吗？"这个问题内部藏着两个问题。第一个是关于效应的：工具是否对不同群体产生不同结果。第二个是关于使用的：不同群体是否以不同方式采纳、获取或与同一工具互动，即使没有任何差异效应，这也会塑造结果。本页逐一覆盖这两个方面，并坦率说明文献止步之处。

它刻意不与相邻页面重复。[[equity-in-ai-education|AI 教育中的公平]]承载规范性与结构性框架——获取、代表性与结果公平，以及 AI 教育*应当*做什么的论证。[[inclusive-learning|全纳学习]]承载设计框架，包括[[universal-design-for-learning|通用学习设计]]。[[digital-divide|数字鸿沟]]覆盖获取与技能层面。[[neurodiversity]]、[[special-education|特殊教育]]、[[accessibility]]与[[multilingual-learning|多语言学习]]深入单一群体。留给本页的是跨群体证据地图与评判问题：这些效应如何被估计、哪些群体真正被研究过，以及一个群体层面的发现能赋予你什么。

## 群体差异如何被报告，以及为何其中大部分无法说明问题

**单一群体研究不是差异效应研究。** 该领域的大部分文献在没有对照组的情况下测量一个群体。[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等（2024）]]汇总了 29 项针对 AI 用于残障学生的（准）实验研究，发现中等强度的正效应（Hedges' g = 0.588，95% CI [0.349, 0.826]）——但没有神经典型对照组。这告诉你的是干预有帮助，而不是它以不同方式帮助了这个群体。

**亚组分析通常规模过小，无法回答问题。** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE 科学微随机对照试验]]异常明确：其"处理 × 身份"交互效应为 0.57 分（95% CI −2.25 至 3.39），分层估计一组为 g = 0.28（95% CI −0.04 至 0.59），另一组为 g = 0.35（95% CI 0.18 至 0.52）。与零重叠的亚组区间是留给本地试点的问题，而非全班规则的基础。

**人口统计属性通常是模拟的。** 真实学习者的人口统计信息很少被附加到模型输入上，因此审计改用人设。[[demographic-signals-llm-student-assessment-2026|Rooein、Benedetto 与 Hovy（2026）]]在三个教育任务上、在模型默认、显式人设与隐式历史三种条件下运行了六个指令微调模型——共 192,480 次推理调用——发现显式人设与*隐式*对话历史都会改变模型行为。他们的区分值得保留：意识到学习者差异可能是可取的（为学习者的第一语言调整反馈），而当同样的敏感性改变了对相同作业的判断时，它就是一种伤害。

**公平性修正未必可泛化。** [[student-attention-estimation-fairness-2026|Fragkiadakis 等（2026）]]在[[assessment-validity|验证]]数据上缩小了学生注意力估计中针对性别与年龄的误差差距，但这些提升未能一致地迁移到留出学科或重复的学科级划分上。

**群体标签掩盖了其内部的变异。** 在同一残障元分析中，特定学习障碍、智力与发育障碍或失聪学生的效应更大（g = 0.952），高于自闭症谱系障碍学生（g = 0.368）——作者报告这一差异在 41 个独立样本的 239 个效应量上并不具统计显著性。"残障"不是一个群体，"二语学习者"也不是。

## 残障与神经多样性

这是知识库中最深的一条线索，也是报告最扎实的一条。

- **效应真实存在，但在不同结果上分布不均。** 在[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang 等（2024）]]中，[[learning-gains|学业表现]]显示最大效应（k = 80，g = 0.929），高于日常生活及其他技能（g = 0.766）与社会情感技能（k = 144，g = 0.382）。存在发表偏倚（Egger 检验 β = 2.837，p < .001）；剪补法将汇总估计降至 g = 0.2694，仍具统计显著性。请把头条效应与偏倚校正后的效应一并阅读。
- **该领域已围绕[[generative-ai|生成式 AI]]重组。** [[assistive-tech-neurodivergent-higher-ed-review-2026|面向神经多样性学生的数字辅助技术范围综述]]筛查了 766 条记录，纳入 40 项实证研究，其中 15 项使用生成式 AI，11 项使用沉浸式形式。这条线索小而新，尚未成熟。
- **一些 AI 支持是拉平差距而非制造差异。** [[adhd-video-segmentation-computing-education|Pimenova、Begel 及同事]]在一项被试内研究（17 名 ADHD、10 名非 ADHD）中将[[video-education|教学视频]]切分为单条指令的片段并设置固定停顿；所有人都提升了，ADHD 参与者的错误与犹豫降至与其非 ADHD 同伴持平。这是通过自动化内容转换实现[[universal-design-for-learning|通用学习设计]]的现有最强证据形态：一项弥合差距的通用改动，而非针对群体的修补。
- **神经多样性学生所说的需求往往很平凡。** [[neurodivergent-computing-students|一项对 24 名神经多样性计算机专业学生与 20 名神经典型同伴的调查]]（含四次访谈）发现，对缺乏清晰结构或期望含糊的作业存在显著不适——而这种调整的提供成本为零。
- **设计选择也可能在认识论上排斥人。** [[genai-minoritized-knowledges-disability|Tali-Otmani（2026）]]论证，以英语为中心、西方中心的训练数据将非主流认知方式边缘化，并把残障学习者的处境置于该批判的核心。

## 语言：第二语言、多语言与英语学习者

按文章数量这是最大的线索，它清晰地分为工具效应与工具危害两类。

- **工具效应有前景但噪声大。** [[robot-assisted-language-learning-meta-analysis-2026|Wang、Zhang 与 Zou（2026）]]元分析了 11 项关于机器人辅助[[language-learning|语言学习]]的研究（17 个效应量，N = 595），发现总体为正效应（g = 0.83，95% CI [0.46, 1.21]）且异质性高（I² = 84.4%）；在六个被检验的调节变量中，只有"机器人—学习者互动类型"显著。这一规模的证据基础支持一个暂定的[[benchmark]]，而非采购决策。
- **在任何工具被使用之前，基础设施本身就是不均衡的。** [[structural-silence-underrepresented-language-ai-2026|Roy 与 Roy（2026）]]以孟加拉语为案例记录语料缺口：占全球网络内容不到 0.5%，而英语约为 49.5%，尽管孟加拉语使用者接近世界人口的 4%。
- **教学语言会改变结果，覆盖 294 名高等教育学生。** 同一综述报告，外语内容产生的结果低于母语教学，且双语[[cs-education|编程]]教学优于纯英语教学。
- **检测器惩罚第二语言写作者。** [[hadra-ai-detector-accuracy-efl-2026|Hadra、Cambridge 与 Mesbah（2026）]]在 192 篇文本上测试了 Turnitin 与 Originality：其中一个检测器将 48 篇专业作者文本全部正确分类，却把 48 篇 EFL 学生文本中的 4 篇误分类（91.6%）。不对称正是要点——错误落在了其写作本已受到审视的那个群体上。

## 性别

此处的性别研究分为两类：工具是否区别对待学习者，以及学习者是否接触到充满刻板印象的工具。

- **一个刻意性别中立的设计未显示性别差异。** [[ada-female-coded-chatbot-gender-stereotypes-2026|一项对 195 名九年级学生的准实验研究]]测试了 ADA——一个植根于 Ada Lovelace 的女性化编码[[conversational-ai|聊天机器人]]：情境兴趣在两个性别上都上升，而在情绪反应、认知负荷或学业表现上没有性别差异。可以构建榜样型人设而不触发刻板印象威胁。
- **但提示词内容会把偏见转移到学生作业中。** [[gender-bias-transfer-llm-writing|一项有 123 名参与者的对照研究]]让学生在无 AI、中性 AI 与性别偏见 AI 三种条件下，为仅性别不同的配对人设撰写职业规划作文；偏见条件将性别分化的语言转移进学生写作，并不对称地抑制了女性[[agency]]。研究者先在 1,600 篇生成作文上确认了这一效应。
- **空间与框架与工具本身同样重要。** [[all-girls-genai-makerspace-gender-equity-2026|一项全女生生成式 AI 创客空间案例研究]]发现女孩重视单一性别环境带来的更安全、更放松的感受，并警告"女孩化"——那种不动权力关系的表面适配。
- **模型敏感性是模型属性，不是常数。** 在[[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]]中，五个从 7B 到 70B 的辅导模型在九个人口统计层级上被审计：Qwen2.5-7B 在 12 个"领域 × 维度"单元中的 7 个超过了 |r| ≥ 0.10 的偏见阈值，而 LLaMA-3.1-8B 只超过了一次。教学导向的训练减少了某些偏见，也增加了另一些。
- **单轴修正可能让某个群体处境更糟：** 被归入"未知性别"类别的性别多样学生在每一种公平方法下的真正例率都最低，且没有任何单轴方法改善了他们的待遇——即上述群体标签变异，只是出现在预测性早期预警模型中而非辅导模型中（[[fairness-theatre-early-warning-systems-2026|McConvey 等（2026）]]）。

## 种族、族裔与少数群体学生

这条线索按文章数量很少，但在机制上很强，因为证据涉及的是 AI 在获得人口统计属性*之后*对它做了什么。

- **[[personalized-learning|个性化]]是一条偏见通道。** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]显示[[llm]]写作反馈工具在用学生的种族、语言、残障、成绩或[[motivation|动机]]进行个性化时，转向与刻板印象一致的赞扬并保留批评意见——针对的是完全相同的作文。
- **人口统计线索可能是隐性的。** 上述反事实审计发现，不仅是显式人设，对话历史也会改变评分与反馈行为——即同一个[[demographic-signals-llm-student-assessment-2026|192,480 次推理调用]]结果，也是"只针对*声明*人口统计信息的披露规则并不充分"的理由。
- **迁移与语言差距可能占主导。** 在 EduFair-Bench 中，70B 模型将最大的语言与移民差距与最小的教学差距配对在一起，因此一个看起来教学很强的辅导模型，可能恰恰是对"学生看起来是谁"最敏感的那个。
- **认识论排斥，而不仅是错误：** 见上文[[genai-minoritized-knowledges-disability|对少数群体知识的边缘化]]。

## 社会经济地位、地理与年龄

- **中介因素是数字素养，而非 AI 使用。** [[ai-divide-ses-personality-primary-education-2026|Wang 及同事（2026）]]建模了荷兰 4,497 名六年级学生的调查与全国登记数据，发现人格特质与学业表现之间的联系经由数字素养而非 AI 使用强度起作用，数字素养的差异更多由人格而非社会经济地位驱动——而 SES 优势独立于 AI 参与发挥作用。经典的"只讲 SES"的框架是不完整的。
- **地理可能是约束性因素。** [[arc-hubs-k12-ai-robotics-rural-2026|ARC 的记述]]关于[[k-12]]机器人与 AI 教育的报告指出，农村 FIRST LEGO League 参与率在 2020 远程赛季下降且再未恢复，而城市参与率逐步回升，并指出持续性的本地技术指导——而非器材或[[curriculum-design|课程]]——才是那个按地理分布不均的约束。
- **成人学习者是独立的设计案例，** 由[[adult-learning|成人学习]]及知识库的成人教育工作覆盖，而非由 K-12 研究覆盖。
- **获取仍然制约其他一切：** 见[[digital-divide|数字鸿沟]]，以及[[access-not-enough-ai-tutoring-2026|仅有 AI 辅导的获取是不够的]]——还需要[[pedagogy|教学法]]整合这一发现。

## 学科背景

学科背景是这条群体—群体地图尚未承载的一条差异轴：同一工具的收益可能在不同学科间而非在不同学生人口统计群体间分布不均。

- **一个工具可能激发一个学科而挫伤另一个。** 在一项为期两周、130 名跨学科团队本科生的准实验中，[[generative-ai|ChatGPT]]提升了 STEM 学生的身体性[[student-engagement|参与]]，却降低了非 STEM 学生的参与（Q = 9.87，p < .05），且未使用 ChatGPT 撰写的笔记在学科观点的多样性与整合度上得分更高（[[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu 等（2026）]]）。

## 证据缺失之处

本综述的诚实结论是某些群体有多么单薄。以下每一条都是证据库的真实缺口，而非本页的缺口。

- **第一代大学生：** 一项研究报告的是使用差异而非效应。在[[student-ai-inquiry-types-cs2-2026|一项 CS2 探究研究]]中，续代学生把 AI 当作积极的[[problem-solving]]伙伴，而第一代学生采取确认式的、以验证为导向的角色，总体提问更少。
- **第一代大学生：首个效应估计，而它指向错误的方向。** [[liu-course-integrated-ai-tutoring-rct-2026|Liu 等（2026）]]对一门课程整合式[[intelligent-tutoring|AI 辅导系统]]的[[rct|随机试验]]补上了前述条目所缺的——一个被测量的差异而非使用模式。在全体样本中，辅导访问权对期末成绩的效应对第一代大学生多 2.87 分（0.28 个标准差）的负面效应，即他们为 −5.10 分（−0.50 个标准差），同伴为 −2.23 分（−0.22 个标准差）；该差异在精确匹配样本中更大（−3.89 分，−0.35 个标准差），第一代学生也损失了更多作业分与平台页面浏览量。该研究未报告机制，且其精度随结果而异，但方向与"缩小差距"的叙事相反：那些先前最缺乏学业支持的学生承担了最大的被测成本。
- **国际学生：** 一项[[mixed-methods-research|混合方法]]研究（问卷 n = 60，访谈 n = 14），关于[[international-students-conversational-ai-adaptation|跨文化适应支持]]。
- **国际学生：一个被测量的参与模式，而非效应估计。** 在七所英国[[business-education|商学院]]的 270 名少数族裔国际学生中，自报[[generative-ai]]使用与全部四条[[student-engagement|参与]]线索正相关——其中能动性参与最强（β = 0.429）——而促进条件（β = 0.369）是使用意愿最强的预测因子（[[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya 等（2026）]]）。
- **资优与高成就学生：** 在本语料库中实际上未作为群体被研究过。
- **难民、移民与流离失所的学习者：** 没有研究。
- **性别在大多数上述研究中仍被当作二元变量分析，** 且残障类别因研究而异，因此"同一"群体的跨研究比较存在局限。

## 在使用这些证据时避免过度拟合群体标签

- **把群体均值当作关于总体的假设，绝不是关于个人的预测。** 上述每一条差异主张都是分布性陈述。
- **在信任工具声称的全纳性之前，先问你的学习者是否根本就在验证样本中**；神经多样性与语言两条线索都表明，开发中的代表性是例外而非常态。
- **在证据允许时优先选择拉平差距的设计。** ADHD 视频切分的结果——所有人提升、差距缩小——比针对群体的附加模块更适合作为通用课堂的目标。
- **谨慎对待消费人口统计属性的个性化。** [[marked-pedagogies-linguistic-bias-writing-feedback|marked pedagogies]]的发现直接针对该机制，它同样适用于[[well-being|身心健康]]签到、[[affective-computing|情感辅导]]，以及[[recommender-systems-and-learning-paths|推荐系统]]这类会为学习者建档的做法。
- **在本地测试，针对你关心的群体，且用不依赖该工具测量的结果。** 关于评估习惯见[[interpreting-and-applying-aied-research|解读与应用 AIEd 研究]]，关于使本地测试站得住脚的设计见[[research-methods-aied|AI 教育中的研究方法]]。

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

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 项 AI 用于残障学生的研究：g = 0.588，偏倚校正后 g = 0.269
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPT 在跨学科学习中对 STEM 与非 STEM 学生的收益不均
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — 少数族裔国际学生中的生成式 AI 使用与四线索参与
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 条记录筛出 40 项研究，其中 15 项使用生成式 AI
- [[adhd-video-segmentation-computing-education]] — 一项使 ADHD 参与者达到与同伴持平的通用设计改动
- [[neurodivergent-computing-students]] — 24 名神经多样性学生谈结构、模糊性与协作
- [[genai-minoritized-knowledges-disability]] — AI 中的认识论边缘化，以残障为案例
- [[robot-assisted-language-learning-meta-analysis-2026]] — 小型二语证据库中 g = 0.83、I² = 84.4%
- [[structural-silence-underrepresented-language-ai-2026]] — 孟加拉语占网络内容不到 0.5%，而英语为 49.5%
- [[hadra-ai-detector-accuracy-efl-2026]] — 检测器误分类 EFL 写作，却对专业文本给出完美评分
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — 195 名学生测试女性化榜样，无性别差异
- [[gender-bias-transfer-llm-writing]] — 性别偏见提示词转移进学生作文
- [[all-girls-genai-makerspace-gender-equity-2026]] — 单一性别空间受重视，附对"女孩化"的警告
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — 辅导模型公平性随模型、领域与行为维度而变
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — 相同作文上的刻板印象化反馈
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 次调用：显式人设与隐式历史都会影响模型
- [[student-attention-estimation-fairness-2026]] — 未能泛化的公平性正则化
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 名学生：数字素养而非 AI 使用中介了差距
- [[arc-hubs-k12-ai-robotics-rural-2026]] — 再未恢复的农村参与率，以及作为约束的指导
- [[ai-tutoring-micro-rct-gcse-science-2026]] — 一个置信区间跨越零的亚组交互效应
- [[student-ai-inquiry-types-cs2-2026]] — 语料库中唯一一项第一代学生使用发现
- [[international-students-conversational-ai-adaptation]] — 语料库中唯一一项国际学生研究
- [[liu-course-integrated-ai-tutoring-rct-2026]] — 语料库对第一代学生的首个效应估计：辅导访问权使他们期末成绩损失 0.50 个标准差，而同伴为 0.22（Liu 等，2026）
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre：评估厂商控制的早期预警系统中的事后公平性干预
