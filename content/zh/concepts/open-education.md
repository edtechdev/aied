---
title: "开放教育"
created: "2026-10-28T20:30:00-04:00"
updated: "2026-10-28T21:15:00-04:00"
type: concept
technology: [open-source, generative-ai]
pedagogy: [active-learning, collaborative-learning]
foundations: [curriculum-design]
institutions: [educational-policy-ai, governance]
ethics: [equity-in-ai-education]
audience: [instructors, administrators, policymakers, curriculum designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [okstate-ai-oer-case-studies-doers-2026]
translation_of: concepts/open-education
source_updated: "2026-10-28T21:15:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **开放教育（Open Education）**——用开放许可的内容进行教学的运动与实践，也是一种把学生当作内容生产者而非消费者的教学法。它的两件人工制品是开放教育资源与开放教学法作业；许可让再利用合法，而它的主张是既降低成本、又扩大作者的范围。生成式 AI 如今同时挤压这三者：它让制作内容的成本趋近于零，让一份被改写的资源究竟出自谁手变得模糊，也为机构提供了一个廉价替代品，去替代那些原本被要求出资维护的公地。

## 值得思考的问题

- 如果一个模型能在几分钟内写出一个课程单元的初稿，那么开放内容所携带的许可、署名链条与审校流程，还剩下什么理由？
- 一份资源可以在许可上是开放的，在实践中却是封闭的：文件可以下载，但它周围的课程假定了一间实验室、一种语言，或一条学生并不拥有的网络连接。当你报告采用情况时，你测量的是哪一种开放？
- 开放教学法要求学生发表自己的作品。学生用生成式工具做出的东西归谁所有，谁同意将其发布，而它出错时又由谁承担代价？
- 教师的 AI 素养能预测开放教学实践，但随着机构支持上升，这一关系反而减弱。对于一个建立在"支持只会带来帮助"这一假设之上的培训项目，这种反转意味着什么？
- 如果 AI 生成的文本不受版权保护，那么一本机器撰写的教科书是否自动就是开放的？这又如何影响为 OER 提供公共资金的理由？

## 引言

开放教育不是开源，混淆二者会让两边都受损失。开源关乎**开发者交付并许可的人工制品**，主要是代码、模型权重与数据集，目的是让一个系统可以被许可、审计、修改与再部署。开放教育关乎**教师布置什么、学生产出什么**，它的许可制度之所以存在，是为了让第二所机构无需请求许可就能替换、翻译、改写或纠正一份资源。两者共享一套法律机制（教育中的 Creative Commons，代码中的宽松软件许可）、一种生产模式（由志愿者与资助维持的社群），如今还共享同一个对手——生成式 AI：它近乎免费地生产人工制品的能力，动摇了二者的经济理由。

它们的分野在要紧之处。一次开源发布，评判标准是这个系统能否被重建和检视。一份开放资源，评判标准是一位学生不同、语言不同、预算不同的教师究竟能不能用；这是一个教学主张而非技术主张，也正是开放教育始终在许可论证之外带着一条实践论证的原因。[[deimann-rethinking-openness-ai-2026|Deimann 与 Lukács（2026）]]把这一点说得最锋利：在 25 年倡导开放之后，教育中层的制度安排依然原封不动，因为这场运动把力气集中在宣言与边缘项目上。

因此，本知识库中 AI 时代的文献同时谈三件事：资源、实践，以及当生成近乎免费时两者是否都还能存续。就资源而言，问题是：谁制作、谁许可，AI 写的东西算不算。就实践而言，问题是：开放教学法对学生要求什么，以及它是否教给了他们任何可测量的东西。

### 开放究竟覆盖了什么

开放教育资源是在允许再利用、修订、改写与再分发的许可下发布的内容。这一领域其余的一切都处于这项许可、以及为其署名之义务的下游。[[gonzalez-miy-active-learning-mentoring-ai-oer-2026|González Miy（2026）]]展示了一个小项目里这项义务的样子：11 名参与者在线上工作两周，产出一个 6 页的网站、一个聊天机器人、一本手册与 5 个视频教程，以 CC BY-NC-SA 发布；成品的资源包在透明性上得分很高，而在许可、可复现性、可适配性与可访问性上只得中等。名义上开放，使用上部分开放。

许可文献之所以细密，是因为失败也细密。[[ryu-developing-ai-literacy-oer-2026|Ryu（2026）]]依据一个目的抽样的语料——16 篇核心论文、17 篇扩展论文与 36 条定向参考文献——为评审开放许可的 AI 素养材料构建了一套 7 原则评分标准。[[atenas-oer-digital-public-goods-2026|Atenas、Farrow、Caldwell、Costello 与 Havemann（2026）]]主张，治理的单位应当从资源移到承载资源的基建设施，因为一堆没有受维护平台支撑的单个文件构成的公地，是碎片化问题而不是公地。

### 生成成本崩塌与数字公共产品的转向

课程生产是变化已经可测量的地方：[[mooc-to-maic|MAIC]]报告，在 LLM 驱动的多智能体生成之下，MOOC 的生产从每门课程约 \$25,000 与 60 小时，跌到不足 \$2 与 30 分钟。如果生产成本趋近于零，"OER 省钱"的论证就失去力量，剩下的只是许可自由、可验证性与质量保证。

[[tlili-double-edged-sword-oer-generative-ai-2026|Tlili、Farrow、Bozkurt、Amiel、Wiley 与 Downes（2026）]]把这一转向组织在 5 个框定问题周围，并得出一个令人不安的法律读法。由于美国版权局认为仅有提示词不足以构成作者身份，一份纯由 AI 生成的资源可能落入公有领域，按严格读法便默认合格为开放。他们对相反方向的失败所用的词是 openwashing（开放洗白）：一份人工制品被呈现为开放，而其训练数据、流水线或许可不开放。作者身份问题在成为许可问题之前先是一个法律问题，而[[legal-issues-and-risks|法律与版权的一面]]既贯穿所有权，也同样贯穿不当行为。

这批文献中的政策回应是重新分类。Atenas 及其同事提议把 OER 当作数字公共产品，这就把补救办法从生产更多内容，转向建设受公共治理的非商业基础设施。他们用 ROAM-X 原则与 FAIR 数据标准来衡量这套基础设施，并描绘了一个已经容纳逾 20 亿件开放许可作品与 303 项互联网普遍性指标的图景。对于一个在内容生产上花掉二十年的运动来说，这是一次站得住脚的转向。

开放的制度理由也从自主性一面提出。[[panda-editorial-digital-transformation-open-education-2026|Panda（2026）]]在一篇社论中主张，开放与灵活学习中的数字化转型是教学转型而非技术采纳，一项技术只有与本地语境中恰当的教学法相契合时才赢得可信度。[[rodes-paragarino-oer-generative-ai-framework-2026|Rodés-Paragarino 与 Atenas（2026）]]把它变成一套 7 支柱框架，用于 OER 与生成式 AI 的负责任整合，其构建依据是文献分析加上专家验证，以及 2025 年 12 月在毕尔巴鄂与 81 名参与者共同进行的参与式工作坊。

### 开放教学法与实践转向

开放教学法把学生从消费者变成贡献者：一份作业产出某种被发表、被许可、可再利用的东西。[[clinton-lisell-open-pedagogy-ai-tools-2026|Clinton-Lisell（2026）]]提供了这一理念在本领域最干净的检验。一门儿童发展入门课程的两个班更新同一本教材，其中一个班使用生成式 AI 工具。在 113 份作业中，两个班的学生都报告信息素养技能有所增长，且这一增长在两者之间统计上无法区分：时间效应为 F(1, 84) = 47.30, p < 0.001, partial η2 = 0.36，而时间与班级的交互为 F(1, 84) = 0.04, p = 0.85。AI 班完成的工作更多，得分略低，180 分制下为 174.73 对 173.86。

实践有它自己的成熟度文献。[[duan-open-educational-practices-evolution-2026|Duan（2026）]]按 PRISMA 2020 从 540 条记录中筛出 14 种开放教学实践模型，在 3 个维度上加以比较，结论是生成式 AI 位于既有模型的下层而非取代它们；论文把这一论证放在与 TPACK 相对的坐标上。[[ahmadfard-interactive-oer-review-2026|Ahmadfard（2026）]]在一项上溯至 1970 年的结构化综述中，就交互性得出类似结论：交互功能更像一个设计论证而非已被证明的效应，它报告的最强效应量借自早先的物理教育研究，而非在 OER 中测得。

另外两项研究显示实践层多快会变成治理层。[[patino-ai-international-cooperation-open-education-2026|Patiño、Martínez-Pérez、Ramírez-Montoya 与 Miranda（2026）]]记录了一次 UNESCO 与 ICDE 的驻留项目：来自 13 个国家的 110 名参与者、10 个团队；但他们的调查基础是来自 54 所机构的 72 份回答，且未给出应答率，对于一份瞄向联合国 2030 议程的路线图来说，这是薄弱的支撑。而[[guo-teachers-ai-literacy-open-education-practices-2026|Guo、Lu 与 Gao（2026）]]调查了中国 30 个省的 512 名教师，考察 AI 素养是否转化为开放教学实践，发现经由创新行为的中介路径在机构支持低时为 0.218，在支持高时降到不显著的 0.042。

### 公平、可持续性与全球南方

开放内容的公平论证是最古老的一个：没有价格的资源不会因价格而被排除在外。它也是最容易被断言、最少被检验的一个。AI 时代的版本更为谨慎。Atenas 及其同事把 OER 框定为边缘化社群以及有意义地参与数据收集的杠杆，同时警告过度依赖生成资源有贬低人类创造力与判断的风险。Tlili 及其同事点出了生成削弱这根杠杆的机制：翻译错误、训练数据偏差，以及一个幻觉循环——生成的内容被回收进训练下一个模型的语料。

可持续性两次出现，一次作为经费，一次作为能耗。数字公共产品的论证本质上是一个可持续性论证：一堆由资助产生的文件构成的碎片化公地活不过它的资助期，而受公共治理的基础设施或许可以。环境论证出现在更广阔的开放文献中，也出现在本知识库的[[sustainability|可持续性]]概念里，那里把模型推理成本的报告当作开放实践的一项义务，而非事后补记。

[[global-south|全球南方]]这一维度是证据最稀薄的地方。本批次的非西方案例真实但很少：一次拉丁美洲的合作驻留、中国开放大学的教师，以及把基础设施框定为参与前提的一种思路。开放会自动重新分配能力这一主张，并未得到这些研究的支持，其中若干篇自己就这么说。

### 写作与推荐系统同论证相遇之处

本批次有两篇论文谈的是生产系统而非政策。[[peng-personalized-recommendation-oer-2026|Peng（2026）]]为 OER 开发了一个混合深度推荐器，在 2,400 条交互记录上报告 93.6% 的准确率、92.5% 的精确率、91.0% 的召回率与 90.2 的 F1 值。它自己的对比表显示，BERT4Rec 基线在召回率相同的情况下 F1 为 90.8，而数据集一节把用户数、条目数与稀疏度留作占位符。建模上的主张是克制的；这个模式却似曾相识——相对一个强基线的改进，比标题所暗示的要小。

第二篇提醒我们，一个生成系统可以是开放的，而它的内容是封闭的。OATutor 把一个 MIT 代码库与 CC BY 的 OpenStax 代数教材配对，这意味着代码与内容的许可必须靠设计保持兼容。这一条技术义务，正是开源与开放教育关系最清晰的实践形态：对象不同，法律机制相同，而兼容性约束落在同时组装两者的人身上。

## 常见误解

**"开放教育与开源是同一种开放。"** 它们共享许可机制与生产模式，却不能互换。开源是关于一个可构建、可检视的系统的主张；开放教育是关于一份可用、可适配的教学资源的主张。一所学校完全可以在封闭教材之上运行全开源软件，许多学校正是如此。

**"开放意味着对学生免费，而这就是全部好处。"** 成本是可测量的那一半。另一半是许可：一份可以修订的资源，才是第二所机构能修正、翻译与本地化的资源。本批次的研究报告完成度与满意度的频率远高于适配，这也是适配主张大体仍未被检验的原因。

**"AI 让内容变得如此便宜，OER 已经过时。"** 相反的读法同样成立，而且得到更好的支持。如果生成近乎免费，那么稀缺之物就变成许可、署名链条、审校流程与受维护的平台。这正是这批文献汇聚于治理与基础设施而非生产的原因。

**"在开放作业里加入 AI 工具会改善学习。"** 此处唯一一项准实验检验发现，两个组都报告了技能增长，两者之间没有可检出的差异，同时 AI 班的完成率更高、得分略低。AI 改变了学生产出什么，却没有改变他们报告自己学到了什么。

## 关联概念

- [[open-source]]
- [[legal-issues-and-risks]]
- [[regulation]]
- [[generative-ai]]
- [[educational-policy-ai]]
- [[governance]]
- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[authentic-assessment]]
- [[sustainability]]
- [[global-south]]
- [[ai-literacy]]
- [[digital-divide]]
- [[accessibility]]
- [[change-management]]

## 关联文章

- [[tlili-double-edged-sword-oer-generative-ai-2026]] — 生成式 AI 进入生产之后 OER 的五种框定（Tlili et al. 2026）
- [[atenas-oer-digital-public-goods-2026]] — 作为数字公共产品的 OER 与受治理基础设施的论证（Atenas et al. 2026）
- [[deimann-rethinking-openness-ai-2026]] — 25 年的开放为何让教育中层的制度原封不动（Deimann and Lukács 2026）
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — 两个班里有 AI 工具与没有 AI 工具的开放教学法（Clinton-Lisell 2026）
- [[duan-open-educational-practices-evolution-2026]] — 十四种开放教学实践模型以及 AI 在其中的位置（Duan 2026）
- [[guo-teachers-ai-literacy-open-education-practices-2026]] — 中国 30 个省的教师 AI 素养与开放教学实践（Guo et al. 2026）
- [[rodes-paragarino-oer-generative-ai-framework-2026]] — OER 与 AI 负责任整合的七支柱框架（Rodés-Paragarino and Atenas 2026）
- [[gonzalez-miy-active-learning-mentoring-ai-oer-2026]] — 虚拟实验室中的导师指导与 AI-OER 生产（González Miy 2026）
- [[ryu-developing-ai-literacy-oer-2026]] — 评审 AI 素养 OER 的七原则评分标准（Ryu 2026）
- [[ahmadfard-interactive-oer-review-2026]] — 作为设计论证而非发现的 OER 交互性（Ahmadfard 2026）
- [[patino-ai-international-cooperation-open-education-2026]] — 作为工具性案例的开放教育国际合作（Patiño et al. 2026）
- [[peng-personalized-recommendation-oer-2026]] — 在比所宣称更强的基线上检验的 OER 混合推荐器（Peng 2026）
- [[panda-editorial-digital-transformation-open-education-2026]] — 作为教学转型的开放学习中的数字化转型（Panda 2026）
