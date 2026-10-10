---
connected_resources: [pressing-prompts, student-guide-to-ai]
title: 批判性思维
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [ai-education, ai-literacy, cognitive-offloading]
pedagogy: [scaffolding, socratic-method]
technology: [generative-ai]
connected_faqs: [verify-ai-output]
level: [higher ed]
confidence: medium
translation_of: concepts/critical-thinking
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

> **批判性思维**——分析、评价与综合信息的能力——既是一项人工智能工具可以帮助发展的技能，也是学生在使用人工智能时必须运用的胜任力。在[[ai-education|人工智能教育]][[research-methods-aied|研究]]中，批判性思维以两种相互关联的形式出现：作为学习目标（[[teacher-role|教]]学生批判地思考）和作为对不加批判的人工智能依赖的屏障。

## 值得思考的问题

- 你对自己识别虚假或误导性人工智能回答的能力有多大把握？研究表明，[[self-report-measures|自陈]]的人工智能胜任力远超实际的评价能力——你会怎么测试自己？
- 这里的批判性思维有两种形式：一种要教的技能，以及对不加批判地依赖人工智能的屏障。你能想到一种情形：某个"教"批判性思维的工具，实际训练的是它的反面？
- 一项研究发现，让学生审问人工智能生成的错误，带来了高阶思维上的大幅增益。刻意暴露错误——而不是藏起它们——怎么会是一个比你预想更有力的教学动作？
- 轻松获得人工智能答案，能在学生意识到之前就挤掉批判性的[[student-engagement|投入]]。什么样的*设计特征*（而非政策或禁令），能让认知努力保持存活？
- 已有研究表明，人工智能的建议会压制说"我不知道"的意愿——即使建议是错的。这如何改变"营造一个提问是安全的课堂文化"这件事的含义？

## 引言

批判性思维是[[ai-literacy]]的核心——无法批判地评价人工智能输出的学生，容易受[[cognitive-offloading|过度依赖]]、[[hallucination-risk|幻觉信息]]与带偏见的推荐之害。关于[[cognitive-offloading]]的研究表明，轻松获得人工智能答案会挤掉批判性投入，而[[socratic-method|苏格拉底式]]方法通过拒绝给出直接答案，保全了更深思考所需的认知努力。

把谬误导师（fallacy tutor）与辩论聊天机器人区分开的，是结构化的对话控制，而非更好的提示：把每一轮对话经由基于 Toulmin 模型的意图检测、固定的策略顺序与一个验证器代理来路由，使一个苏格拉底系统通过了 84.5% 的对话质量指标，而启发式基线为 61.5%（[[lftutor-logical-fallacy-education-2026|Shi 等（2026）]]）。

### 人工智能教育研究中的批判性思维

知识库的文章通过[[design-based-research|设计型]]与实证的透镜探索批判性思维。[[ai-agents-constructive-conflict-design-education-2026|对抗性人工智能代理]]在新手设计师中实施建设性冲突，以促使重新考量——一个强迫批判性再评估的苏格拉底变体。[[genai-can-harm-teaching-rct-2026|关于教学中生成式人工智能的 RCT 研究]]提出了一个问题：那些为表层结果做优化的人工智能工具，是否可能在无意中压制导向更深学习的批判性思维。实测证据使这一点更锐利：批判性思维是否移动，取决于人工智能中介的反馈与任务如何设计，以及学习者的[[metacognition|元认知]]调节，而不取决于能否接触到某个模型。

生成式人工智能使用与自陈批判性思维之间的关联，几乎完全经由生成式人工智能[[feedback-literacy]]传导：在 421 名中国本科生中，反馈素养中介了总关联的 71.98%（β=0.185），而剩余的直接路径只对反思性较低的学生为正（β=0.177），对反思性较高的学生不显著（[[genai-use-critical-thinking-moderation-2026|Yan 等（2026）]]）。

**对调节主张的一个元分析锚点。**在 29 项实验中，生成式人工智能使高阶思维适度提高（g = 0.609），其中批判性思维为 ES = 0.691——低于问题解决（0.745），高于创造力（0.444）——在 8–16 周的干预中最强（0.759），对高 SRL 学习者最强（0.863 对 0.284）（[[zhao-genai-higher-order-thinking-meta-2026|Zhao 等（2025）]]）。

[[chatgpt-critical-creative-thinking-review|对 ChatGPT 影响思维的综述]]记录了混杂的发现：刻意使用时，人工智能可以[[scaffolding|为]]批判性分析搭支架（例如让学生批判人工智能生成的论证），但当作答案引擎使用时，它也能把思维短路。这一张力连接到[[ai-literacy-assessment-misalignment]]研究——它显示自陈的人工智能胜任力远超实际的批判性评价能力。一项对 80 项关于人工智能与批判性思维的 HCI 研究的批判性综述发现，这个领域在测量它很少定义的东西：80 项中只有 23 项说明了他们如何理解批判性思维，49 项（61%）用自陈而非表现来评估，42 项（52%）没有对照组（[[critical-review-critical-thinking-hci-research-ai-2026]]）。

[[critical-thinking-paradox-genai-learning-2026|Lin 与 Al-Hada（2026）]]把这幅混杂图景解读为一种产物–过程分离：生成式人工智能可以提高作业的质量，同时压低其背后未经辅助的、延迟的迁移，因此学习应当以未经辅助的延迟表现来评判，而非以人工智能辅助的产物来评判。

- **学生与人工智能聊天中的高阶认知投入。**Chang 与 Li（2026）发现，约 62% 的学生提示编码了高阶认知需求，且 Bloom 层级画像因学科而异（[[stem-education|STEM]]以"应用"为主，20.8%；语言学科以"理解"为主，31.7%；社会科学以"创造"为主，33.8%）。他们的被试内设计显示，同一批学生在社会科学课程中产出的高阶提示显著多于 STEM 课程（p < .001），表明学科情境塑造了与人工智能的批判性、高阶投入。
- **互动模式按 Bloom 层级与先前知识聚集。**在一项基于探究的数据科学写作任务中，19 名学生产出了 14 种大语言模型互动模式，其差异随先前知识水平而变，设计启示是把支架瞄准特定的高阶思维阶段，而非笼统地瞄准大语言模型的使用（[[luo-ibl-patterns-llm-bloom-2026|Luo 等（2026）]]）。
- **人工智能作为儿童批判性媒介素养的催化剂。**Demir 与 Akar（2026）评估了一个面向四年级土耳其学生的、18 小时的 5E 模型批判性媒介素养项目，其中[[generative-ai|生成式人工智能]]（ChatGPT、Grammarly）扮演分阶段嵌入的[[pedagogical-agent|教学代理]]，而非附加物。配对样本比较显示，媒介阅读（+3.50）、写作（+1.67）与总媒介素养（+5.17，全部 p < .01）均有大幅增益，组间后测效应量为 Cohen's *d* = 1.12（阅读）、1.18（写作）与 1.31（总素养），均偏向人工智能支持组。[[qualitative-research|质性]]分析（访谈、学生的海报/图画/口号、课堂观察）浮现出批判性媒介素养成长的六个领域——数字自我保护与[[privacy|数据隐私]]、有目的且负责任的媒介使用、安全沟通与边界意识、批判性评价与虚假信息意识、在线风险意识，以及媒介[[ethics]]/数字公民——表明刻意审问人工智能中介的内容，能在年幼学习者中培育批判性分析与反思。
- **小学多模态写作中维度特异的批判性思维增益。**[[lu-ai-multimodal-writing-critical-thinking-2026|Lu 等（2027）]]跟踪了 60 名[[k-12|五年级]]学生完成为期八周的[[conversational-ai]]支持的多模态写作练习——他们把叙事变成人工智能生成的图像与短视频。对六个批判性思维维度的重复测量分析发现，解释、分析、评价与论证在 T1→T2 与 T1→T3 上有持续增益，自我[[regulation]]的增益是短期的，而**推断毫无变化**——这是一种聚合的批判性思维分数会掩盖的、不均衡的维度级模式。作者论证，人工智能生成的视觉材料*外化*了意义，从而降低了写作通常施加的推断需求，而[[collaborative-learning|同伴协作]]（迫使学生推断他人解读的同伴提问）则补给了单独的[[student-ai-interaction|人工智能互动]]未能提供的推断契机。其设计教训是：[[multimodal|多模态人工智能]]创作支持了批判性思维的若干侧面，但应与持续的[[scaffolding]]和结构化的同伴交流相配合，以保住推断与[[self-regulated-learning|自我调节]]。
- **人工智能搭支架与认知卸载把批判性思维拉向相反方向。**Davor、Larbi 与 Boateng（2026）调查了加纳 533 名大学生，发现人工智能任务支架预测更高的批判性思维（β = .185），而[[cognitive-offloading|认知卸载]]倾向预测更低的批判性思维（-.240）；人工智能验证素养对批判性思维没有直接效应，只通过[[metacognition|元认知自我调节]]起作用——这是一个完全中介模式，作者解读为证据：教学生核查人工智能事实本身是不够的。（[[davor-ai-supported-learning-higher-order-outcomes-2026|Davor 等，2026]]）
- **限定高阶思维的是卸载的深度，而非使用与否。**在写作中把推理层——论据、反驳、证据解读——委派出去，与独立的高阶思维有最强的负向关联（ab = −0.34），而自我调节式写作削弱了它但从未逆转它（[[layer-sensitive-cognitive-offloading-writing-2026|Chen（2026）]]）。
- **关联发生转折之处是依赖，而非使用。**Shojaei 及同事（2026）调查了阿曼 412 名商科学生，发现[[generative-ai|生成式人工智能]]使用与自陈批判性思维倾向的双变量相关接近于零（r = 0.050），依赖预测更低的倾向（β = -0.389），并削弱了从使用到倾向的关联（β = -0.239），使简单斜率从低依赖时的 0.424 降到高依赖时的 -0.054。（[[shojaei-genai-dependence-critical-thinking-employability-2026|Shojaei 等，2026]]）

一项更大的横断面调查指向相反方向：在 1,157 名中国研究生中，[[generative-ai|生成式人工智能]]依赖与批判性思维正相关（β = 0.492），而批判性思维承载了从功能依赖到研究创造力路径的约 85.0%（[[genai-dependence-research-creativity-2026|Yin 等（2026）]]）。

- **一则简短的反思提示，使对人工智能建议的依赖更具辨识力。**在一项有 342 名本科生的三条件实验中，Ren（2026）发现，开放式的 ChatGPT 支持使学生在 62.4% 的试次中接受了错误的人工智能推荐，加上一则简短的元认知反思提示后降至 39.7%（OR = 0.40，95% CI [0.28, 0.56]）；反思还改善了意识校准（0.59 对 0.41），把人工智能专属归因偏差指数从 0.42 降到 0.21，且没有降低推荐准确率，也没有引发对有用建议的一概拒绝。（[[ren-metacognitive-awareness-genai-reliance-2026|Ren，2026]]）
- **信心可能上升而准确率下降。**[[shaw-nave-cognitive-surrender-2026|Shaw 与 Nave（2026）]]发现，咨询人工智能助手在它正确时把准确率提高了 25 个百分点，在它出错时降低了 15 个百分点，然而即便出错后，调用它仍提高了信心，且 73.2% 的错误–人工智能试次以"投降"而非策略性卸载告终。
- **教师策展的 ChatGPT 反馈通过高阶修订提高批判性思维。**Chen 及同事（2026）做了一项为期 18 周的准实验，对象是 64 名本科生（全部为职前化学、物理或数学教师），在两个议论文写作任务上比较常规教师反馈（n = 32）与 ChatGPT 辅助的教师反馈（n = 32）。两组起点相当，只有辅助组有显著改善（p < 0.001），Cohen's *d* 从前测的 0.25 升到后测的 3.74。机制在于反馈的种类，而非模型是否在场：辅助组收到更多示范（33.1% 对 10.9%）与紧逼追问（21.5% 对 6.0%）的反馈，修订了 91.00%（478 中的 435）的反馈单元，对照组为 85.21%（284 中的 242）；[[network-analysis|认知网络分析]]把这些修订与"分析、评价、创造"相联，而非与"再认与理解"相联，而只有教师指令与评价反馈的情况大多产生再认与理解式修订。教师把模型的输出当作草稿材料来处理——扩展、修订或弃用（14% 弃用，9% 需要纠正），八位受访者中仍有六位指出其不精确或不专业。其设计教训是：批判性思维的增益来自那些示范替代方案、并审问学生推理的反馈，且由一位[[teacher-role|教师]]策展模型所产出的东西；小样本、单学期的性质意味着这个极大的效应量应当谨慎解读。（[[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026|Chen 等，2026]]）
- **一学期的人工智能使用让批判性思维持平，而反思性使用追踪了它。**Melanou、Beege 与 Kimmig（2026）在三个平行条件（导师框架的人工智能、无引导的人工智能、无人工智能）下跟踪 87 名商业信息学学生完成为期九周的课程，测量三次。各组知识都上升，两种人工智能条件均无优势，也无马太效应（BF01 = 8.70），而自陈的批判性思维与[[motivation]]保持稳定。区分学生的是反思性使用——在采纳人工智能输出前核查来源并加以验证的实践：它在人工智能条件中高于对照组（均值 3.72 对 2.82），并预测了末次测量时的批判性思维（R² = 0.183，β = 0.43，p < 0.001）。这一结果限定了任何"一学期的人工智能使用本身就能推动批判性思维"的预期：关联存在于[[metacognition|元认知]]调节之中，而非工具访问权之中；作者也指出，一个学期大概太短，看不到持久的变化。（[[melanou-genai-learning-dynamics-longitudinal-2026|Melanou 等，2026]]）

### 与其他概念的关联

批判性思维与[[scaffolding]]（设计维持认知需求的人工智能支持）、[[prompt-engineering]]（提出能引出批判性分析的问题）以及[[cognitive-offloading|过度依赖]]（知道何时信任、何时质疑人工智能）相交。它是[[academic-integrity]]的根基，也是[[ai-literacy]]框架的一个关键维度，横跨[[k-12]]与[[higher-ed]]两种情境。

- **把人工智能的错误当作高阶思维的挑衅：**[[pedagogy-ai-mistakes|Hosseini（2026）]]通过让学生在数据库课程中审问人工智能生成的错误，把 Bloom 的高阶层级（分析、评价、创造）付诸操作，在学科胜任力上取得显著的前后测增益（Cohen's *d*=1.49）。
- **对人工智能输出的批判是一种可搭支架的技能，而非解题的副产品。**只解了一道相关物理题的组，或接受了一道打磨过的人工智能解答，或基于自己的迷思概念去批判它；而以 MAPS 量规引导的反思，则产出了与专家一致的批判——指出缺失的积分与未定义的符号（[[probing-ai-generated-physics-solutions-2026|Borse 等（2026）]]）。
- **约束人工智能以保全认知自主性。**E3-HOT 蓝图把三条具身路径——情境嵌入、具身参与、认知创造——映射到分析、评价与创造，并把人工智能限定在提示、批判与策略建议之内，使学生在某个主张被接受之前必须先阐明理由并引证（[[zhu-e3-hot-embodied-intelligence-sustainable-learning|Zhu 等（2026）]]）。
- **对人工智能解释的双向审计。**Bernstein 与 Sibia（2026）以 Paul–Elder 标准（准确性、清晰性、假设、观点）作为访谈探针，访谈了十位已完成 CS2 的学生，发现他们对[[generative-ai|生成式人工智能]]解释的机制级审视：学生找出某个类比的映射在哪里失效（一个暗示了环形的链表海岛航线类比，一个没有保证输入收缩的递归羽毛球对拉类比），要求精确措辞而非含糊其辞，并把解释当作携带观点的论证来处理。关键在于，这种审视追踪的是来源域或目标域的专长，而非个人兴趣——这把对人工智能输出的批判性[[ai-ed-evaluation|评价]]重新框定为一个知识问题（"双向类比审计"），而非一种性情问题——并提示：把有缺陷的人工智能类比当作待检视与待修复的对象来布置，比读一份成形的解释是对概念理解的更严格的检验。（[[student-reception-genai-analogies-computing-2026]]）
- **批判性思维作为不可外包的投入。**Xie（2026）从道家自我修养补充了一个[[philosophy-of-ai-in-education|哲学]]对应物：因为人工智能是不透明的"黑箱"，一个取向于调和不确定性、而非以绝对方式裁定真相的框架，更适合当下的认识格局，批判性思维由此成为对现实的、持续的、第一人称的、不可外包的投入，而非一种可演示的理性程序。在内丹（內丹）实践中"没有认知捷径"，因此人工智能被定位为"不是认知的替身，而是工具性的辅助"。（[[daoism-ai-education-philosophy-2026]]）
- **角色轮换作为批判性人机互动的结构。**Kenzhebayeva 及同事（2026）报告了一项设计型研究：62 名职前教育心理学家轮换四种专业角色（案例建构者、研究分析师、实践–干预者、反思型研究者），使生成的推荐成为讨论的对象：参与者把人工智能输出与心理学理论相比较，并修改或拒绝不符合案例的推荐；后续循环中出现了更多要求理论论证的请求，而对看似权威的回复的过度依赖依然存在。（[[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva 等，2026]]）
- **一个学科中以验证为中心的整合。**一篇关于大学[[chemistry-education|化学教育]]中[[generative-ai|生成式人工智能]]的批判性综述（Vega-Baudrit 与 Rivera Álvarez，2026）论证，由于化学推理必须在宏观、微观与符号三种表征之间被协调，学生无法验证自己不理解的东西，因此[[prior-knowledge]]与[[scaffolding]]先行，而验证应当被设计进[[assessment]]之中、作为一项被评估的活动：识别一个错误假设、纠正一个单位或机理错误，或论证为何拒绝一个生成的答案，并保留提示日志与修订历史作为推理轨迹。（[[vega-baudrit-genai-university-chemistry-education-review-2026|Vega-Baudrit 与 Rivera Álvarez，2026]]）
- **验证作为一种学习活动，而不只是一种屏障。**[[pearls-epistemic-verification-2026|Wang（2026）]]把对人工智能产物的评价组织为六个相互依存的维度——过程（Process）、证据（Evidence）、获取（Access）、可复现性（Reproducibility）、正当性（Legitimacy）与来源（Source）——并把组装这套论据、而非产出的流畅度，当作建构学科专长的东西。

**知识库中专家评定的最大脆弱点是批判性思维。**在 30 位专家评定的 65 项学习过程中，"批判性思维"与"批判性–分析性思维"获得了本报告最高的破坏评分（均值 4.00，满分 5；96% 的评分者给到 3 分及以上），而增强低于门槛（2.40，43%）（[[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou、Greene 与 Nixon 等，2026]]）。18 项高阶过程中有 10 项只在"脆弱"上达成共识，报告把这解读为一种单侧风险，而非一种权衡。

## 关联概念

- [[metacognition]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[generative-ai]]
- [[higher-ed]]
- [[problem-based-learning]]
- [[intelligent-tutoring]]
- [[educational-development]]
- [[teacher-role]]
- [[student-experience]]
- [[chemistry-education]] — 化学教育与人工智能：实验、形成性评估、大语言模型的限度、实验哲学
- [[biology-education]] — 生物教育与人工智能：实验助教、生物学中的人工智能素养、批判性思维、专用工具
- [[cognitive-surrender]]

## 关联文章

- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — 一项 30 位专家的共识：批判性思维获得本报告最高的破坏评分（均值 4.00）
- [[pearls-epistemic-verification-2026]] — 面向认知能动性与验证人工智能输出的 PEARLS 框架（Wang，2026）
- [[layer-sensitive-cognitive-offloading-writing-2026]] — 生成式人工智能辅助写作中的层次敏感型认知卸载（Chen，2026）
- [[critical-thinking-paradox-genai-learning-2026]] — 生成式人工智能整合学习中的批判性思维悖论
- [[pedagogy-ai-mistakes]] — 人工智能错误的教学法：培育高阶思维（Hosseini，2026）
- [[shaw-nave-cognitive-surrender-2026]] — 三系统理论与认知投降：人工智能如何重塑人类推理（Shaw 与 Nave，2026）
- [[cognitive-commons-ai-expertise-regeneration]] — 认知公地的悲剧：人工智能与专长再生
- [[zhao-genai-higher-order-thinking-meta-2026]] — 生成式人工智能与高阶思维的元分析
- [[avraamidou-ai-colonization-science-education]] — 颠覆科学教育中的人工智能殖民
- [[li-mroziak-reorienting-critical-ai-literacy]] — 重新定向批判性人工智能素养
- [[luo-ibl-patterns-llm-bloom-2026]] — 大语言模型驱动环境中的 IBL 模式（Bloom 的视角）
- [[probing-ai-generated-physics-solutions-2026]] — 让学生为批判人工智能生成的物理解题做准备
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[daoism-ai-education-philosophy-2026]] — Alternative AI Philosophy: Daoism as Method for AI in Education
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[ai-overreliance-complex-adaptive-system-2026]] — 把人工智能过度依赖建模为复杂适应系统
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — 人工智能支持的多模态写作中维度特异的批判性思维增益（Lu 等，2027）
- [[lftutor-logical-fallacy-education-2026]] — 通过结构化多轮对话教授谬误识别
- [[caeai-ai-companions-learning-over-performance-2026]] — 学习优于表现：同伴（companion）应当被优化和测量的东西
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — 经由元认知自我调节的人工智能支架、卸载与验证素养（Davor 等，2026）
- [[shojaei-genai-dependence-critical-thinking-employability-2026]] — 生成式人工智能依赖限定了商科学生中"使用→批判性思维"的关联（Shojaei 等，2026）
- [[ren-metacognitive-awareness-genai-reliance-2026]] — 反思提示降低了对错误人工智能建议的接受度与归因偏差（Ren，2026）
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — 角色轮换作为批判性人机互动的结构（Kenzhebayeva 等，2026）
- [[vega-baudrit-genai-university-chemistry-education-review-2026]] — 大学化学教育中以验证为中心的生成式人工智能整合（Vega-Baudrit 与 Rivera Álvarez，2026）
- [[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026]] — 教师策展的 ChatGPT 反馈通过高阶修订提高了批判性思维（Chen 等，2026）
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — 一学期的人工智能使用让批判性思维持平；反思性使用预测了它（Melanou 等，2026）
- [[genai-dependence-research-creativity-2026]] — 在 1,157 名研究生中，生成式人工智能依赖与批判性思维正相关
- [[genai-use-critical-thinking-moderation-2026]] — 经由反馈素养的生成式人工智能使用→批判性思维，且直接路径只对反思性较低的学生存在
