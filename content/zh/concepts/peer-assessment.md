---
title: 同伴互评
created: "2026-08-13T17:54:24-04:00"
updated: "2026-10-09T18:58:08-04:00"
type: concept
connected_faqs: [writing-instruction-ai-best-practices, group-work-ai]
pedagogy: [collaborative-learning, metacognition, self-regulated-learning]
assessment: [ai-feedback-quality, formative-assessment, group-work]
confidence: high
discipline: [writing education]
audience: [learners, instructors]
translation_of: concepts/peer-assessment
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **同伴互评（peer assessment）**——学生相互评价、打分或就彼此的作品给出[[feedback|反馈]]的做法，形式包括书面同伴评阅、同伴打分、代码同伴审查，以及小组或团队评估。在[[writing-education|写作]][[pedagogy|教学法]]中，它是一项由来已久的最佳实践：学生既从收到基于标准的反馈中学习，也从给出反馈中学习，而围绕共同作品展开的同伴对话与更深的学习、读者意识以及社会性发展相关。在人工智能时代，它正被重新审视为一种[[assessment|评估设计]]选择，而非单一活动——它是[[ai-feedback-quality|AI 生成的反馈]]的人类补充、[[feedback-literacy|反馈素养]]的训练场，也是[[academic-integrity|学术诚信]]与[[agency|学生能动性]]被重新协商的场域。

## 值得思考的问题

- 回想一次你的作品被同伴评价、或你评价同伴作品的经历。你从哪一边学到更多：给出反馈还是接受反馈？为什么？
- 为什么同伴的反馈可能比 AI 反馈更贴合情境、更具情感支持，即便 AI 反馈更一致、更由评分标准驱动？两者如何互补？
- 同伴倾向于给高质量作品打偏低的分数，而 AI 倾向于抬高低质量作品的分数。如果两者在整个质量区间上都不够可靠，那么来自任一来源的分数应当被用来做什么？
- 同伴互评严重依赖[[scaffolding|脚手架]]和清晰的标准，而友谊偏见与社交[[anxiety-and-stress|焦虑]]可能使未经训练的同侪评阅比没有评阅更糟。在你的情境中，充分的训练实际上是什么样子？
- 如果 AI 能够就组织与结构起草评语，这是否让同伴互评变得多余——还是它反而把同伴解放出来，去给出只有他们能给出的、针对具体受众的反馈？
- 在一项研究中，有生成式 AI 支持的同侪反馈优于普通同伴反馈，但只有在加入提示脚手架之后才如此。那里被搭建脚手架的是谁——AI、学生，还是评估本身？
- 批判性地评价 AI 生成的反馈被描述为在建立 AI 素养与写作者能动性。当机器越来越多地评点你的作品时，"对自己作品的能动性"意味着什么？

## 引言

同伴互评是一种评估设计选择，其中学生承担起通常留给教师的评价工作的一部分。其形式因学生产出什么、以及利害关系是什么而不同：同伴反馈（对草稿的评语，通常是[[formative-assessment|形成性]]的、低利害的）、同伴打分（计入成绩的分数）、代码同伴审查，以及小组或团队评估（同伴评价集体产品或彼此的贡献）。形式决定了学生练习什么——给出基于标准的评语所建立的[[evaluative-judgment|评价性判断]]，与给出一个数字所建立的并不相同，而口头为自己的代码辩护所建立的又不一样。[[self-assessment|自我评估]]这一姊妹实践，则把同样的基于标准的审视转向学习者自己的作品，而同伴互评把它指向同伴的提交物以及随之而来的读者意识。

研究界一致认为同伴互评能带来学习，但在多大程度上取决于设计这一点上存在分歧。它赋予学生真实的读者，通过基于标准的回应发展评价性判断，并建立支持[[student-engagement|投入]]与[[motivation|动机]]的社会情境。其质量高度依赖[[scaffolding|脚手架]]——它被组织得如何，以及学生是否获得清晰的标准和训练。这种依赖正是 AI 进入的地方：它既是一致、由标准驱动的、对同伴所给出的具体而贴合情境的反馈的补充，也越来越成为一个内建于同伴互评过程本身的脚手架。

## 学生从评价同伴中学到什么

支持同伴互评最强的论据是：评价者本人在学习。[[code-review-genai-cs1|Fowles 等（2026）]]让每一份 CS1 提交都接受一次由受训助教主持的 15 分钟口头代码审查访谈，权重占作业成绩的 70%。复制粘贴字符占总字符的比例从 61.0% 升至 68.1%（p < 0.0001），而考试成绩并未下降，任务上的用时也保持稳定；90% 的学生表示这些审查激励他们更好地理解自己的代码，65% 表示审查帮助他们避免[[cognitive-offloading|过度依赖]]AI。要求学生向受训同伴解释自己的作品，把潜在的认知卸载转化成了[[self-regulated-learning|自我调节]]的练习机会。

这一机制在文献中反复出现。在对 203 篇筛选文献中的 22 篇文章所做的 PRISMA 2020[[meta-analysis-systematic-review|系统综述]]中，[[llm-critical-thinking-teamwork-review|Martínez-Peláez 等（2025）]]发现大语言模型部分地通过辅助同伴反馈和模拟基于标准的评价来支持[[collaborative-learning|协作]]，并且验证与修正模型输出的学生会发展批判性思维。[[learning-by-teaching|教学相长]]甚至在机器之间也出现：超过 240 万个[[agentic-ai|AI 智能体]]之间的类同伴学习话语多为断言而非探究（陈述与提问之比为 11.4:1，在 28,683 篇帖子的编码分类中[[metacognition|元认知]]反思仅占 7%），[[ai-agents-peer-learning-discourse|Chen 等（2026）]]将此视为一种警示——表层话语并不能证明学到了什么。

## 训练、校准与反馈素养

同伴互评在学生未受训练时会以可预期的方式失败。[[scaffolding-srl-feedback-genai-human-peers|Gu、Chen 与 Yan（2026）]]开展了一项[[mixed-methods-research|混合方法]]准实验，对象是中国 118 名一年级[[higher-ed|本科生]]，比较预训练评分标准下的 ChatGPT-4o 与附带高质量范例的结构化同伴评阅工作表。反馈素养在生成式 AI 组上升得略多（ANCOVA p = 0.049，η²p = 0.03），但[[qualitative-research|质性]]发现更为重要：同伴组的学生按社交便利性选择反馈来源——身边的同伴、同专业的同伴、室友——很少持有具体的反馈目标，并在寻求反馈时面临社交焦虑。同伴评价更常受友谊偏见和所感知的同伴水平扭曲，同伴反思常常被推迟到后来的考试才进行。作者建议采用多阶段设计并配以匿名同伴反馈，因为同伴评阅仍能通过给出反馈独特地建立读者意识与评价性判断。

设计框架瞄准了这些瓶颈。[[irwin-muller-efl-peer-feedback-literacy|Irwin 与 Muller（2026）]]提出了生成式 AI 在 EFL/ESL 口语同伴反馈中的两种角色——他们认为这一情形比写作更难，因为存在时间压力、口语表现转瞬即逝且情感强度更高：一种是**培训师（Trainer）**，通过基于范例的校准与"对反馈的反馈"支持反馈给出者；另一种是**综合者（Synthesizer）**，把同伴评语聚合成一份与标准挂钩的吸收报告，统一格式、保留少数意见并标出矛盾之处。他们的原则是：注意时机与排序、使用短而重复的培训单元、保留反馈给出者的声音，以及把[[teacher-role|教师]]留在回路中且不做[[automated-assessment|自动评分]]的[[guardrails|护栏]]。该论文是概念性的，没有新的实证数据。

## 效度、公平与评分准确性：同伴、AI 与教师之比

在同伴互评产出成绩的地方，问题在于这个分数是否站得住。[[usher-faraon-who-grades-best-2026|Usher 与 Faraon（2026）]]发现同伴与教师之间的一致性在低质量作品上最强（低质量档 r = 0.51），而在高质量项目上减弱——同伴倾向于给高质量作品打偏低的分数，这或许反映了不愿批评优秀作品。ChatGPT 呈现出相反的模式：在高质量作品上一致性更好，但对低质量的提交物给出偏高的分数。学生感知到同伴的分数与同伴自己写下的评语更为一致，并珍视同伴那种顾及关系背景的判断，以及 ChatGPT 中立的稳定性。同伴的准确性依质量而定、依关系而定，没有任何单一来源在整个区间上都可靠。

这限制了同伴分数应当被用来做什么。在分布中段校准过的分数，在顶端或底端未必同样校准，因此同伴分数作为经调节的决策之输入、或作为评价者判断的证据，比作为对优秀作品的最终分数更站得住。[[multimodal-affective-its-presentation|Suen 与 Hung（2026）]]说明了机构为何不断寻求可规模化的替代方案：同伴反馈与专家辅导耗时、昂贵，且难以一致地规模化。他们的闭环系统用一个接近专家评分者可靠性的 XGBoost 主干（ρ = 0.69–0.78）为 204 名[[adult-learning|成人学习者]]的演示技巧打分，前后测增益为 Cohen's d = 0.39–0.90——这是一项前后测现场研究，而非与同伴互评的比较，是用机器判断替代同伴判断，而非增强同伴判断。

## AI 增强的同伴互评：PAIRR 与培训师／综合者之分

主流设计模式让同伴居于中心，把 AI 环绕其外。Peer and AI Review + Reflection 模型是记录最充分的实例。[[pairr-ai-peer-review-2025|Sperber 等（2025）]]在 10 门写作课程和 3 门写作密集的[[stem-education|STEM]]课程中实施了 PAIRR，共 654 名学生（37% 为家中第一代大学生，13% 为国际学生，68%[[multilingual-learning|多语背景]]）。学生起草、交换同伴评阅、就同一份草稿提示 ChatGPT 给出基于标准的反馈、批判性地评估两者、规划修改并进行反思。58% 偏好组合反馈，36% 偏好单独的同伴反馈，只有 6% 偏好单独的 AI 反馈。两个来源常常相似（75% 报告了相似之处，被描述为相互确认与加强），而在不一致时则互补：AI 反馈常被指过于笼统（31%），但在组织与结构上给出可操作的修改策略，同伴反馈则更具体、更细致（28%），并借助对作业的情境性了解。批判性地[[ai-ed-evaluation|评价 AI]]输出建立了[[ai-literacy|AI 素养]]，只有 5.3% 的学生对它表现出过度自信。

这一模式推广到了专业写作。[[gift-ai-pairr-business-writing-2025|MacArthur 等（2025）]]把 PAIRR 应用于一门高年级商务写作课程，其中五项主要作业每项都要求草稿、受众分析、由 2–3 位同伴进行的评阅和修改（46 名注册学生中有 34 人参与；69% 为多语背景）。学生珍视 AI 反馈，但有时觉得它过于笼统，也珍视同伴的情境性知识——"我的同伴是从雇主的角度看它的……ChatGPT 没那么做。"在更大规模的 PAIRR 研究中，有四分之一的编码反思表达了对 AI 反馈的怀疑或指出其不准确之处，作者将其解读为 AI 素养的发展。该研究是描述性的，且局限于特定课程。

## 生成式 AI 作为同伴反馈与小组评估内部的脚手架

关于设计有多重要的最严格检验，是一项多中心整群随机实验。[[genai-feedback-design-multisite-experiment|Ateş（2026）]]把分布在 4 所大学的 48 个班级——1,176 名[[biology-education|生物学]]、[[chemistry-education|化学]]和[[physics-education|物理学]]的一年级本科生——随机分配到科学论证的四种条件：仅有同伴反馈、直接的生成式 AI 反馈、反思式生成式 AI 反馈（先自评再接受 AI 批评）、以及自评 → 同伴反馈 → 生成式 AI 批评的混合条件。直接生成式 AI 在即时论证质量上优于同伴反馈，但[[transfer-of-learning|迁移]]表现更弱；反思式与混合设计带来了更强的反馈吸收和自我调节学习；混合条件在概念学习上优势最明显；两者在延迟的、无 AI 的迁移上都优于直接生成式 AI。作者的结论是：生成式 AI 的价值不取决于能否获得，而取决于环境是否在修改过程中保全了学生的能动性与所有权。

把 AI 反馈排在同伴讨论之前而非之后，也提高了结果：与仅有同伴反馈相比，122 名获得"AI 加同伴"整合式反馈的中国 EFL 学生在情感、行为与认知三个维度的投入上都更高（partial η² = 0.29、0.28、0.32），并在雅思写作全部四个维度上表现更优，其中任务完成度增幅最大（d = 1.41）（[[ai-peer-feedback-l2-writing-engagement-2026|Liu（2026）]]）。

当比较对象是教师反馈与 AI 辅助的同伴反馈（而非单独的生成式 AI）时，同样的模式——早期优势未能保持——再次出现。[[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang、Li 与 Luo（2026）]]开展了一项为期八周的准实验，61 名中文二语写作者（244 篇评分文本）依据同一份五维清单工作，一个班接受教师书面反馈，另一个班接受 AI 辅助的同伴反馈。教师反馈产出的评语多得多——首个任务中 316 条对 185 条，集中于词汇与技术细节——即时增益也略大，但其改善到第二个任务时急剧下降，而 AI 辅助同伴班保持稳定并以更高的修改得分收尾。AI 辅助的同伴评语更少，但始终锚定在内容与结构上，其早期的词汇多样性优势未能持续；两种模式都未推动句法复杂度。作者将两者解读为互补的[[scaffolding|脚手架]]，并提出 AI–同伴–教师混合模式：AI 在起草阶段标记表层错误，同伴在修改阶段协商内容，教师针对两者都未触及之处。

加入生成式 AI 也能提升同伴反馈本身的质量，但显然只有在有提示支持时才如此。[[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang 等（2026）]]在四轮协作论证中比较了 12 个小组中 45 名师范生的三种条件：普通同伴反馈、有生成式 AI 的同伴反馈、以及有提示脚手架支持的生成式 AI 同伴反馈。有生成式 AI 的小组在论证表现上优于普通同伴反馈，而有提示脚手架的小组在"反驳数据与依据""回应对立观点"等高阶要素上表现最好。有生成式 AI 的小组产出更多解释、建议和中立或负面的反馈，脚手架组则把负面情绪与更高阶的反馈内容配对——是[[critical-thinking|批判性评价]]而非被动接受。这是一项小规模的单一实验，但它把提示脚手架孤立出来作为活性成分。

[[group-work|小组评估]]改变了问题，因为学生必须就谁的 AI 使用可接受展开协商。[[chen-zou-genai-group-assessment-agency-2026|Chen 与 Zou（2026）]]访谈了 52 名职前教师的 15 个焦点小组，课程中一项占总成绩 30% 的小组展示要求整合与连贯。出现了三种模式：五个小组表现出合作取向的能动性，他们加强生成式 AI 的使用以把作品维系起来并保护共同成绩；七个小组表现出规范取向的能动性，他们约束使用以保护真实性与公平——一名学生推理说，用 AI 生成一部分会"对其他组员不公平"；三个小组表现出未实现的能动性，其实践从未从个人作业中改变。作者论证，个体能力不会自动变成集体能动性，对可接受的 AI 使用的协商本身应当成为一个可评估的结果，并让同伴评阅任务反哺最终产品。

## 反馈架构、披露与同伴互评的社会条件

同伴互评同样取决于学生能看到彼此多少、以及他们愿意承认什么。[[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao 与 Cukurova（2026）]]在三轮迭代中检验了一种 AI 生成摘要的[[learning-design|学习设计]]，覆盖八周内的 128 名学生。有 AI 支持的迭代中的学生，其标准化出度中心性显著高于基线（β = 0.547 与 β = 0.438，均 p < 0.001）：他们浏览或互动了更多同伴。访谈把摘要描述为一张导航地图，减少了在命名混乱的帖子里寻找贡献的费力，而学生关注的是那些因观点相反而被选中的活跃贡献者，而非朋友。该设计并未阻止浏览量在工作量上升时下滑，因此单靠技术可供性无法维持投入。

同伴规范也塑造诚实，这在同伴评价受 AI 影响的作品的任何地方都重要。[[qu-wang-disclose-or-not-genai-2026|Qu 与 Wang（2026）]]调查了 409 名新加坡本科生，探究尽管有披露要求，学生为何隐瞒生成式 AI 的使用，并发现关系性变量占主导：所感知的同龄人披露程度和与教师相处的自在感是披露最强的预测因子，而道德推脱较弱。不披露是对所感知的同龄人规范和低[[trust|解释性信任]]的策略性适应，而非道德疏忽。因此，同伴规范既可能支持诚实——如小组评估中的学生出于对组员的责任而约束 AI 使用——也可能压制诚实——如集体采用降低了所感知的滥用风险。作者论证，透明更多取决于信任与积极的规范氛围，而非合规——这是一种关系性条件，而同伴互评的设计要么创造它、要么摧毁它。

## 设计启示与开放问题

有几项设计措施随之而来。在评价之前给评价者培训、范例和标准，因为未经训练的同伴互评容易受友谊偏见、基于便利的来源选择和社交焦虑所害。把工作排序成自评先于同伴反馈与 AI 批评，因为混合条件产生了最强的概念学习和最好的延迟迁移。在生成式 AI 进入之处，搭建学生如何提示它的脚手架。对任何计入成绩的环节把教师留在回路中，把同伴分数视为依质量而定的证据而非统一的分数，并让 AI 的使用本身成为小组协商和记录的事项。

生成式 AI 中介的评阅也继承了该工具的语言规范：世界英语对话的贡献者论证，使用生成式 AI 的评阅者会暴露于与模型相同的、偏向主流英语变体的偏见，并建议编辑或重写生成的文本以反映写作者自身的语言身份（[[genai-linguistic-diversity-academic-writing|Ugwuanyi 等（2026）]]）。

开放问题关乎证据的强度，而不只是设计。同伴加 AI 的证据大多规模小且受情境限制：一个课程中的 45 名师范生、一门商务写作课程中的 34 名学生、15 个焦点小组中的 52 名职前教师。PAIRR 调查是此处最大的数据集，而它测量的是学生感知，而非学生所评判的 AI 输出的质量。只有多中心实验的 1,176 名本科生接近因果比较的规模，而它检验的是科学论证的反馈设计，而非同伴互评本身。与此同时，[[oneill-presumed-effective-meta-analysis-2026|O'Neill（2026）]]审计了 14 项声称 AI 改善教育的同行评议元分析，发现没有一项为其主张提供了有效依据——除两项之外，全部把"处理"定义为一件工具而非教学干预，凡报告 I² 的元分析异质性都很高（77.2% 至 94.4%），而对 59 项原始研究的审计发现 61% 存在[[assessment-validity|效度问题]]，最常见的是所测量的结果与所做主张之间的错配。关于 AI 在同伴互评中起何作用的主张，应当被当作关于一项被设计出来的活动的主张，并按该活动的条件加以检验。

## 关联概念

- [[pedagogical-patterns]] — PAIRR 与"同伴加 AI"的组合反馈：这些序列及其比较性证据
- [[writing-education]]
- [[formative-assessment]]
- [[self-assessment]]
- [[ai-feedback-quality]]
- [[ai-literacy]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[student-experience]]
- [[collaborative-learning]]
- [[academic-integrity]]
- [[feedback-literacy]]
- [[feedback]]
- [[group-work]]
- [[assessment]]
- [[scaffolding]]

## 关联文章

- [[ai-peer-feedback-l2-writing-engagement-2026]] — 整合式"AI 加同伴"反馈提升了全部三个投入维度与雅思写作全部四个维度

- [[usher-faraon-who-grades-best-2026]] — 跨项目质量水平比较 ChatGPT、同伴与教师评分（Usher & Faraon 2026）
- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection（PAIRR）
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[ai-internal-feedback-evaluative-judgments]] — Unravelling Undergraduates' Development of Evaluative Judgments
- [[learner-centered-feedback-ai]] — Enhancing Learner-Centered Feedback With AI
- [[genai-linguistic-diversity-academic-writing]] — Generative AI and Linguistic Diversity in Academic Writing
- [[gift-ai-pairr-business-writing-2025]] — PAIRR 在商务写作课程中的应用：同伴评阅、聊天机器人反馈与反思（MacArthur et al. 2025）
- [[scaffolding-srl-feedback-genai-human-peers]] — 生成式 AI 与人类同伴在为自我调节的反馈与反馈素养搭建脚手架上的比较（Gu et al. 2026）
- [[irwin-muller-efl-peer-feedback-literacy]] — 生成式 AI 作为 EFL 口语同伴反馈中的培训师与综合者（Irwin & Muller 2026）
- [[genai-feedback-design-multisite-experiment]] — 比较仅有同伴、直接式、反思式与混合式生成式 AI 反馈的多中心实验（Ateş 2026）
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — 协作论证中有提示脚手架支持的生成式 AI 同伴反馈（Chang et al. 2026）
- [[chen-zou-genai-group-assessment-agency-2026]] — 生成式 AI 中介的小组评估中的能动性：合作、约束与未实现（Chen & Zou 2026）
- [[code-review-genai-cs1]] — 口头代码审查访谈作为 CS1 中应对生成式 AI 的危害消减手段（Fowles et al. 2026）
- [[multimodal-affective-its-presentation]] — 自动化多模态演示辅导作为同伴反馈的可规模化替代（Suen & Hung 2026）
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — AI 生成的讨论摘要在在线论坛中扩大同伴接触面（Hao & Cukurova 2026）
- [[qu-wang-disclose-or-not-genai-2026]] — 学生披露生成式 AI 使用中的同伴影响与关系性信任（Qu & Wang 2026）
- [[llm-critical-thinking-teamwork-review]] — 大语言模型在批判性思维、团队协作与问题解决上的系统综述（Martínez-Peláez et al. 2025）
- [[ai-agents-peer-learning-discourse]] — 240 万个 AI 智能体之间的类同伴学习话语（Chen et al. 2026）
- [[oneill-presumed-effective-meta-analysis-2026]] — 对 14 项 AIED 元分析与 59 项原始研究的审计（O'Neill 2026）
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — 教师反馈与 AI 辅助同伴反馈在二语写作中的比较：两个任务上的数量、焦点与改进轨迹（Tang, Li & Luo 2026）
