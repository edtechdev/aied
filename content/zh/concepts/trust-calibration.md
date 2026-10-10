---
title: 信任校准
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading, human-ai-collaboration]
pedagogy: [metacognition]
ethics: [hallucination-risk, trust-calibration]
audience: [learners]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education, reducing-over-reliance, verify-ai-output, study-with-ai]
translation_of: concepts/trust-calibration
source_updated: "2026-10-09T01:55:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **信任校准** —— 一种元认知能力，使自己对某个 AI 系统在特定情境下实际可靠性的信心与之对齐，知道何时该信任、何时该质疑它的输出。信任校准是 [[cognitive-offloading|过度依赖]]的直接解药：它是一种让信任与证据匹配、而非与 AI 那种自信的流畅度匹配的技能。

## 值得思考的问题

- 你是否曾经接受过一个听起来自信而合理的 AI 回答，后来却发现它是错的？当时是呈现方式（而非内容）的哪一点赢得了你的信任？本页讲的正是那个瞬间。
- 多数人以为风险在于过度信任 AI。但本页认为，信任不足——完全回避一个能干的工具——同样是校准的失败。你倾向于接受还是回避 AI 输出？而这个默认选择又可能让你错过什么？
- 一个流畅、自信的 AI 回答"读起来就可信，无论它是否真的可信"。在继续阅读之前，你会用什么标准来判断一个听起来自信的输出是否真的值得信任——而这些标准在一个你一无所知、又高风险的冷门话题上还站得住吗？
- 本页指出，校准取决于情境：在错误代价高的地方多验证，在错误无害的地方少验证。在你自己的工作或学习中，答错的代价在哪里最高？你会如何据此调整验证的投入？
- [[research-methods-aied|研究]]把信任建模为不仅受个体判断塑造，也受你的社会环境——同伴与网络的行为——所塑造。回想一次同学、同事或线上社群让你相信某个 AI（不）可靠的经历。你当时是基于证据校准，还是基于那个社会信号？
- 一项发现：告诉学生一个 [[intelligent-tutoring|AI 辅导工具]]可能会犯错，实际上增加了他们对它的使用。为什么被警告"会犯错"反而可能让人*更*愿意参与？这又对"诚实地说明 AI 的局限"应如何影响你自己使用这些工具，有何启示？

## 引言

[[llm|语言模型]]流畅而自信的文字，读起来就是可信的，无论事实是否如此。信任校准正是对这种错觉的制衡——即 [[ai-ed-evaluation|评估 AI]] 输出的可验证性与任务的风险，而不是凭其呈现的分量就接受它。由于信任通常是通过询问来测量的，校准的主张也就继承了 [[self-report-measures]] 的局限——报告出来的信任与被观察到的验证行为可能出现分歧，正如 [[fouad-bentley-trust-utility-gap-physics-2026|一项物理学研究]]所发现的那样。

工具开发正开始直接回应这一测量缺口：[[nazaretsky-trust-instrument-ai-edtech-2025|Nazaretsky et al.（2025）]] 验证了一份四因素量表（感知有用性、障碍、就绪度与信任，共 21 个条目、665 名学生），其关键动作是把工具被感知到的可信赖性与信任它的那个学生的倾向区分开来，从而使有用性与障碍可以与"愿意信任"分开计分。他们的结构模型把信任置于感知有用性的上游，而不是像 [[technology-acceptance-model]] 通常解读采纳时那样置于下游；而两个均值也朝着校准所关心的方向分化——信任（3.31）低于有用性（3.62）。

### 为什么信任需要被校准

未经校准的信任有两种形态。**过度信任**（不做验证就接受 AI 输出）产生了 [[cognitive-offloading|过度依赖]]与 [[cognitive-offloading]] 研究所记录的那种不加批判的接受，并放大了自信出错的 [[hallucination-risk]]。**信任不足**（完全回避 AI）则放弃了正当的收益。两者同根同源：信任建立在表象而非证据之上。关于 [[misconceptions]] 的研究表明，学生常常默认过度信任，因为他们假定"听起来对"的 AI 就是对的。

更高的信任并不能换来更好的判断：在 432 名使用准确与故意误导性 AI 建议求解 Python 问题的本科生中，更高的信任预测了*更低*的恰当依赖（r = -.42），学生接受了 86.03% 的误导性建议，且该关系受 [[ai-literacy|AI 素养]]与认知需求所调节（[[trust-reliance-ai-education-2026|Pitts、Rani 与 Mildort（2026）]]）。

### 校准如何起作用

- **验证习惯：** 把 AI 的说法与一手来源核对，遵循"AI 提议，你验证"的规则，而不是接受听起来合理的输出。
- **基于风险的验证协议：** [[pearls-epistemic-verification-2026|Wang（2026）]] 规定了六个相互依存的维度来检视——过程、证据、访问、可复现性、合法性与来源——并把验证导向那些处于核心、令人意外、含数字或难以逆转的说法，从而使投入与出错的代价挂钩，而非与回答的流畅度挂钩。
- **情境意识：** 认识到 [[trust|可信赖性]]因任务而异——一个模型大量见过的成熟话题，比一个冷门、高风险或快速变化的话题更安全。
- **风险调整：** 在错误代价高的地方（提交的作业、医疗或法律主张）施加更多审视，在错误无害的地方少一些。
- **元认知监控：** 追踪自己何时、为何会过度信任，这把校准与 [[metacognition]] 和 [[self-regulated-learning]] 联系起来。

### 依赖的界限究竟在哪里

校准研究通常把信任当作单一判断。[[bounded-reliance-ai-writing-feedback-2026|Serpil 与 Mor（2026）]] 表明，这一评估会分裂成若干约束力并不相等的维度。他们在访谈了 17 名使用 GROK 一个学期来获得写作反馈的英语作为外语的本科生后发现，被感知的*专业能力*很高——学生认可该工具在词汇、语法、结构与连贯性上的改进，并把其对修改建议的解释视为能力的证据——而*可信赖性*（主要涉及他们的数据遭遇了什么）与*善意*（反馈被体验为没有人情味，有时还令人沮丧）仍然很低。依赖跟随的是弱维度而非强维度：学生授权该工具处理宽泛的语言反馈，而把个性化的、关系性的指导留给教师。这对校准的含义是：提升准确率并不会抬高使用的天花板；数据透明度与围绕工具的教学框架，本身就是校准干预。

[[du-yuan-epistemic-dependence-2026|Du 与 Yuan（2026）]] 用六个诊断标准——可争辩性、可恢复性、可迁移性、可追溯性、分布式责任与认识多元性——把*生产性依赖*与*有害依赖*区分开来，并把工具性协助（帮助产出输出）与承载判断的协助（提供据以评判输出的标准）区分开来，后者正是依赖变得具有教育后果的地方。

### 校准作为一个设计问题

把校准失当纯粹当作使用者的缺陷——一个靠教人们去检查 AI 输出就能修好的问题——可能是一个范畴错误。[[trust-calibration-chatbots-design-problem-2026|Jaidka 与 Cai（2026）]] 论证说，透明性设计是*惰性*的：它们等待使用者去采取行动，而大多数人不会。在一项对 900 名美国成年人的被动追踪研究中，看到 AI 生成摘要的读者，只有 1% 的访问会点击其中引用的来源，点击任何结果链接的频率约为没看到摘要的读者的一半。调查证据在规模上显示出同样的缺口——在一项覆盖 159 个国家、81,000 人的研究中，不可靠是人们最常提到的对 AI 的担忧，而 47 个国家中超过 48,000 名受访者基本上每天使用 AI，即便他们说自己并不信任它。信任与依赖已经漂移，而论文把原因定位在表层线索上：流畅度、自信与速度取代了可验证性，于是信心与正确性脱钩。值得注意的是，机器署名反而可能抬高可信度——读者在摘要由 GPT 而非人类撰写时，把它评为更可信、更值得信任，主要是因为模型写得更简单。

其设计含义是一个二维的使用者类型学——验证 [[conversational-ai|聊天机器人]]输出的*能力*与这样做的*动机*——它预测了哪类使用者会在哪个方向上校准失当。作者把它与两类必须协同运作的干预配对：[[explainable-ai|可解释性]]设计（理由、引用、不确定性信号）使评估成为可能，以及参与机制使评估真正发生，再通过 Reason 的瑞士奶酪模型层叠为八项可检验的命题。[[ai-literacy]] 被定位为两者之下持久的层次，让使用者在类型学各单元之间移动。这种重新框定对教育很重要，因为它转移了责任：如果普通人群根本不点击透明的引用，那么仅仅让学生接触 AI 的解释并不能校准他们——该设计必须被设计得能迫使人去核查。

[[calibrating-trustworthiness-llm-education-2026|Coscia et al.（2026）]] 提供了一个确实推动了校准的设计杠杆：让评审者在比较 LLM 回应时看到共同设计的可信赖性标准，使评分者间一致性从 Krippendorff's alpha 0.3987 提升到 0.4931，尽管合并后的一致性仍低于 0.67，且额外的措施带来了额外开销。

随着自主智能体的出现，校准的对象发生了变化。[[agentic-literacy-debt|Nama（2026）]] 论证说，使用者变成了一个委托人，把权力授予了一个行为基本不被观察且不可逆转的系统，于是所需能力从"评判输出"转向"理解被授权了什么、监督它，并在伤害发生时归因问责"。

### 关联

信任校准是 [[ai-literacy]] 的核心，并与 [[reducing-ai-misuse]] 并列作为一种技能型干预：当学生能判断 AI 的输出何时值得信任时，他们 [[ai-misuse-learning-harm|滥用]] AI 的情况就更少。它同时也是一个设计目标——[[pedagogical-safety]] 与透明性工具旨在让 AI 的可靠性变得可读，使 [[learners]] 能更准确地校准。当人工制品本身无从核查时，校准也可以被转移到别处：在 Sidorkin（2026）的研究生课程中，每周的阅读材料由 AI 生成，只有约 0.80% 的页面出现文内引用，837 个被记录的学生发言中只有约 2.7% 包含风险感知的举动（例如纠正 AI 的一个假设或要求一个可核查的例证），而调查评论中报告的有限信任，与 24 名受访者中有四人使用依赖语言、一人点名需要"[[teacher-role|教师]]监督"相伴出现。因此，一个无法审计的人工制品把验证的责任转移给任何能审计它的人，而该研究的设计回应是把这种监督制度化，而不是假定批判立场会自行出现。

- **过度依赖与校准作为群体过程（2026）：** 一个关于 AI 依赖的复杂适应系统模型表明，任务难度与 AI 质量为过度依赖和校准遗憾都设定了基线，而网络连通性与社会证明塑造了依赖是否会级联。这表明校准不仅是一种个体特质，也会被社会与信息环境所调节（[[ai-overreliance-complex-adaptive-system-2026]]）。
- **校准作为 ML 教育的明确目标（2026）：** [[icet-ml-education-trust-2026|ICE-T]] 论证说，对 AI 的恰当依赖本身就是 [[machine-learning]]教育的一项被教授的结果。它整合了模态间的 [[transfer-of-learning|迁移]]（Bruner 的动作—图像—符号模式）、经由 Use-Modify-Create 进程的 [[computational-thinking]]，以及解释性思维，为学习者提供校准信任、并同时对抗 [[cognitive-offloading|过度依赖]]与算法厌恶所需的表征模型与错误情境化——把 ML 教学定位为一种校准干预，而不只是技能训练。
- **[[discipline-specific-aied|领域特异]]的解释可以支持教师的校准（2025）：** 在一项使用 AI 推荐工具的在职 [[chemistry-education|化学]]教师被试内实验中，[[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al.（2025）]] 发现 [[explainable-ai|可解释性]]通过使系统表现更*可理解*而间接帮助教师校准信任，且用 [[curriculum-design|课程]]语言表达的领域驱动解释，比数据驱动的特征重要性解释更能显著提高习得的信任与接受度。然而仍有几位教师表示，在完全依赖该工具之前需要真实的课堂经验——这凸显了校准最终要通过 [[situated-learning|情境化]]的使用与实践来验证，而不是仅靠解释就被赋予。
- **[[personalized-learning|个性化]]并不会单调地移动信任；专业知识预测审计行为（2026）：** 在 [[student-reception-genai-analogies-computing-2026|Bernstein 与 Sibia（2026）]] 的研究中，对 [[generative-ai|GenAI]] 解释的信任在个性化之下并没有朝单一方向移动：一位参与者报告说更信任一个量身定制的类比并更少审视它，另一位则报告说恰恰因为它被重度个性化而更少信任。始终能预测审计行为的是领域专业知识，而非相关性——这支持了"校准后的依赖取决于学习者能带到核查中的知识，而非输出感觉有多亲切"这一观点，并支持把专业知识拆分为来源领域知识与目标领域知识。

- **条件性信任：反馈的有用性与评价权威（2026）：** [[student-perspectives-ai-writing-grading-2026|AlGhamdi（2026）]] 表明，当沙特的计算专业学生知道自己的写作分数由 ChatGPT 生成时，他们在接受 [[ai-feedback-quality|AI 反馈]]与把评分权让给 AI 之间划出一条清晰的界线——为表层修改接受前者，同时始终把评价权威保留给人类教师。这一"[[feedback]]有用性／评价权威"的区分，是 [[assessment]] 情境中校准的一个具体案例：学生把信任与 AI 的*功能*（有用的反馈对有后果的评分）匹配，而不是整体地接受或拒绝它；而对 AI 参与的透明化似乎激活了这种更校准、更具批判性的立场。
- **一个先压制、后自相矛盾地发出警告的工具（2026）：** [[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]] 用藏在学生提交内容里的指令对一个 [[automated-assessment|AI 评分]]工具做了红队测试。五次注入中有两次在没有可见警告的情况下把不及格的成绩抬高（成功率 100% 与 94%），文档正文中一处白色文字的注入在全部九次迭代中都失败了——而工具没有告诉使用者它捕获了什么，而是静默地禁用了聊天。最刺眼的案例是一份 pdf 运行，它*确实*声明只按官方作业要求评分：重新运行同一文件又把成绩抬高了六次，且没有任何警告，作者把这种安抚描述为能够制造虚假安全感的东西。前后不一且自相矛盾的信号，让使用者失去了判断何时可以依赖该工具的可靠依据；而该论文明确表示它并未测量信任——论证是从操纵与报告行为推导出来的。
- **置于推理路径内部的信任控制（2025）：** [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li、Yang 与 Fang（2025）]] 把校准当作架构而非报告来处理：把蒙特卡洛 dropout 校准与对抗式 [[bias-mitigation|去偏]]、以及一个在 dropout 方差超过学习到的阈值时拒发分数的"拒绝—转介"门结合起来，在 TeacherEval-2023 上达到期望校准误差 0.032、1.8% 的公平性差距，并把 [[human-in-the-loop-ai|人工复核]]工作量降低 41%。他们自己的局限部分正是适用于任何此类指标的校准告诫：仅凭表现指标很难量化信任，教师的采纳取决于被感知的可靠性、公平性与 [[pedagogy|教学法]]相关性，而纵向的采纳试验与感知调查正是缺失的证据。
- **信任构念碎片化，且大多以自报方式测量（2026）：** 一项系统综述筛出 1,565 篇文章并纳入 33 项关于 AI 使能系统中信任的实证研究，发现 21 项（63.64%）报告的定义来自九个不同来源，24 项（72.73%）仅通过自报测量信任，只有两项仅依赖行为测量。可解释性是被研究最多的设计因素（20 项研究），但其效果是混杂的，因为叠加多种解释类型会抬高认知负荷，有时还让信任不变。该综述的建议是，为校准后的信任而非最大化的信任而设计，其判据是一个设计是否帮助使用者把可靠的输出与不可靠的输出区分开——这与本页应用于个体验证行为的标准相同（[[abramson-trust-interaction-design-ai-enabled-systems-review-2026|Abramson et al.（2026）]]）。

- **校准 AI 生成的推断，而非原始数据（2026）：** [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe、Loibl 与 Leuders（2026）]] 论证说，AI 支持的评估改变了教师校准的对象：仪表盘上的推断是算法解释的结果，而非教师观察到的线索，因此必须先判断其合理性，再有意识地接受、拒绝或修改——他们把这一认知过程称为"元诊断"。由于当前系统主要建立在正确率与完成时间等表现数据之上，投入度与动机线索仍须来自教师自己的观察；作者把训练目标框定为在校准的信任（而非不加批判的信任），并与数据和 AI 素养一并建立。这是一项概念分析，因此其主张是被论证的，而非被检验的。
- **一段简短的反思提示可测量地移动校准（2026）：** [[ren-metacognitive-awareness-genai-reliance-2026|Ren（2026）]] 把 342 名本科生随机分配到独立决策、开放的 ChatGPT 支持、或同样的支持加一段简短的反思提示。开放支持提高了最终信心（76.1 对 68.4），并产生了 62.4% 对不正确 AI 建议的接受率，而反思把这一接受率降到 39.7%（OR = 0.40），并改善了感知依赖与行为依赖之间的意识校准（0.59 对 0.41），同时没有降低建议的准确率，因此剩下的依赖更具区分度，而非一味地防御。把校准当作监控问题来处理，支持了本页的观点：改变行为的是元认知提示，而不只是让人接触到模型的局限。
- **AI 的可得性可能瓦解承认无知的意愿（2026）：** 在五项实验中（N = 3,132），有 AI 建议可用时，一项研究中的判断悬置从 0.36 降到 0.06，信心几乎翻倍，而汇总的正确率从 27.5% 降到 9.2%——发生变化的是作答的门槛。([[ai-advice-suppresses-ikt-suspension-2026|Marcoccia et al.，2026]])
- **校准作为通向迁移的链条中的中介（2026）：** [[trust-calibration-genai-collaborative-regulation-2026|Bu 与 Li（2026）]] 把信任校准检验为情境支持与 [[transfer-of-learning|迁移]]结果之间的桥梁，而不是一种一般态度。在一项探索性序贯 [[mixed-methods-research|混合方法]]设计（先访谈，再用一份 22 个条目的量表，最终分析样本为 642 名学生，CFI = 0.953）中，情境支持预测了信任校准（β = 0.56）与协作调节（β = 0.18），信任校准预测了协作调节（β = 0.49）与感知的迁移增益（β = 0.22），而协作调节是感知迁移增益最强的近端驱动因素（β = 0.54），同时从情境支持到迁移的直接路径并不显著（β = 0.07）。由于结果是感知的而非测量到的迁移，且数据是横断面的，其价值在于诠释：它把校准框定为一个过程构念，把情境支持转化为受调节的、有效的 GenAI 使用。
- **焦虑作为素养转化为信任的边界条件（2026）：** 在一项对 450 名已在使用 ChatGPT 的中国大陆大学生的调查中，[[hu-psychological-predictors-continued-chatgpt-use-2026|Hu（2026）]] 发现 AI 素养到信任的路径是模型中最大的关联（beta = 0.50），且 [[anxiety-and-stress|AI 焦虑]]削弱了这一关联（交互 beta = -0.25），简单斜率从焦虑均值下一个标准差处的 0.76 降到高于一个标准差处的 0.25，而从素养到信任再到自我效能再到持续使用的序列路径是显著的。因此校准部分是情感性的：同样的知识在更焦虑的学生那里转化为更少的信任；而横断面设计使"焦虑究竟是阻断了把知识转化为依赖的那种评估，还是反映了学生选择不据以行动的那种评估"这一问题悬而未决。
- **角色轮换作为练习批判的结构（2026）：** 在一项针对 62 名职前教育心理学者的设计型研究中，[[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al.（2026）]] 让参与者在八周内轮换四种专业角色，把 AI 生成的建议与心理学理论作比较，并修改或拒绝那些不符合个案的建议，但仍记录到对看似权威的 AI 回应的过度依赖，有些学生在后面的循环中甚至在给出自己的解释之前还要寻求 AI 的确认。轮换为"接受或拒绝"的判断创造了反复的机会，却不能保证它发生；而该研究报告的是干预期间的投入度，而非测量到的胜任力增益。
- **表层身份线索独立于能力地移动信任。** 在两项实验中（N = 396），学习者把 White 头像——以及 STEM 中的亚洲男性头像——评为更可信、更能干，在每一项测量上都对年长的黑人女性头像施加惩罚，并更 readily 采纳同种族群体的引导（[[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis 与 Kyriakidou-Zacharoudiou（2026）]]）。

## 关联概念

- [[explainable-ai]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[hallucination-risk]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[human-ai-collaboration]]
- [[misconceptions]]
- [[reducing-ai-misuse]]
- [[pedagogical-safety]]
- [[self-report-measures]]
- [[ai-misuse-learning-harm]]
- [[cognitive-surrender]]

## 关联文章
- [[student-perspectives-ai-writing-grading-2026]] — 学生对透明的 AI 辅助写作评估的看法（AlGhamdi 2026）
- [[du-yuan-epistemic-dependence-2026]] — 区分生产性依赖与有害依赖的六项诊断标准（Du & Yuan 2026）
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[pearls-epistemic-verification-2026]] — PEARLS：认识能动性与验证 AI 输出的框架（Wang 2026）
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[agentic-literacy-debt]] — 智能体素养债：自主智能体带来的结构性 AI 素养缺口（Nama 2026）
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics for LLMs in Education
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[ai-partner-science-epistemic-vigilance]] — Epistemic Vigilance as the Key to Productive Augmentation
- [[ai-advice-suppresses-ikt-suspension-2026]]
- [[ai-overreliance-complex-adaptive-system-2026]] — 作为复杂适应系统建模的 AI 过度依赖
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[trust-calibration-chatbots-design-problem-2026]] — 信任校准被重新框定为设计问题：一个二维使用者类型学与八项设计命题（Jaidka & Cai 2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — AI 中介评分中的提示注入：一个先压制、后自相矛盾地发出警告的工具（Humble 2026）
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — 受信任门控的推理与"可解释即设计"的评估，其中信任未被测量（Li et al. 2025）
- [[gpt4-handwritten-math-exam-grading-2026]] — AI 成绩的置信度过滤及其假阳性率
- [[bounded-reliance-ai-writing-feedback-2026]] — Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback
- [[abramson-trust-interaction-design-ai-enabled-systems-review-2026]] — AI 使能系统中的信任：33 项实证研究中的定义、测量与设计因素（Abramson et al. 2026）
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — 从诊断到元诊断：教师评估 AI 生成的诊断性推断（Hoppe et al. 2026）
- [[ren-metacognitive-awareness-genai-reliance-2026]] — 一段反思提示降低了对不正确 AI 建议的接受率（Ren 2026）
- [[trust-calibration-genai-collaborative-regulation-2026]] — 信任校准作为从情境支持到感知迁移增益链条中的中介（Bu & Li 2026）
- [[hu-psychological-predictors-continued-chatgpt-use-2026]] — 信任作为从 AI 素养到持续使用的枢轴，并被 AI 焦虑削弱（Hu 2026）
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — 角色轮换作为批判性处理 AI 建议的结构（Kenzhebayeva et al. 2026）
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[nazaretsky-trust-instrument-ai-edtech-2025]] — 面向学生的量表：把 AI-EdTech 中的信任验证为四个因素，且信任位于感知有用性的上游（Nazaretsky et al. 2025）
