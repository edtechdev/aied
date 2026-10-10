---
title: 学术诚信
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:45:12-04:00"
connected_faqs: [writing-instruction-ai-best-practices, should-we-use-ai-detectors, redesign-assessment-ai-era, reduce-ai-cheating, addressing-common-misconceptions-ai-education, course-ai-policy, verify-ai-output, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy]
assessment: [ai-detection, assessment-validity, authentic-assessment]
level: [higher ed, k 12]
confidence: high
institutions: [educational-policy-ai, regulation]
connected_resources: [fpds-apps-and-resources, institutional-ai-readiness-pack, process-feedback, student-guide-to-ai]
translation_of: concepts/academic-integrity
source_updated: "2026-10-07T08:00:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **学术诚信（academic integrity）** — 在 AI 时代规范诚实学术工作的伦理框架。知识库记录了这一概念如何被 [[generative-ai|生成式 AI]] 重新定义：从一个 [[ai-detection|识别不诚实产出]]的问题，变成一个让诚实工作可见、可验证、值得去做的设计问题。这一领域的 [[research-methods-aied|研究]]已从以检测为中心的方法，演进到根本性的考核设计改革、由教学主导的治理，以及 [[ai-literacy|教学生如何用好 AI]]，而不仅仅是盯着他们是否用了。

## 值得思考的问题

- 回想你最近一次听到"AI 作弊"的讨论。那次谈话是关于抓住学生，还是关于设计出学生愿意诚实完成的作业？哪一种强调让你觉得更熟悉，为什么？
- 一份打磨过、看起来可信的作业现在几秒钟就能生成。如果你再也无法通过学生交上来的产品来判断其能力，你需要看到或听到什么，才会确信他们真的学会了？
- 研究发现，学生常常为自己的 AI 使用做合理化辩护（"复制 AI 文本没有受害者"），而不是出于恶意滥用它。一个纯粹的惩罚性诚信政策对学生动机做了哪些假设——这些假设可能错在哪里？
- 一条研究路线把学生的 AI 使用当作协调问题：当同伴预期和考核激励改变时，行为才会改变，而重复规则并不会。在你自己所处的环境里，有哪些同伴因素或设计因素可能在悄悄塑造 AI 使用是否诚实？
- 研究表明，对处罚的恐惧会驱使学生隐藏 AI 使用，而坦诚的学生甚至可能引来怀疑。如果你要设计一份"AI 使用披露"表格，什么会让学生真的愿意如实填写？
- 同一份机构 AI 政策会被不同文化背景的学生做出不同解读——决定"什么感觉不对"的是文化，而不是政策措辞。一份诚信政策应当如何传达给文化多元的学生群体，才能让预期真正被理解？

## 引言

生成式 AI 的到来并没有创造对学术诚信的需求——它只是让既有方法的弱点更难以忽视。一份打磨过、看起来可信的产品现在几秒钟就能生成，因此**产品外观是越来越不可靠的能力信号**。这把诚信问题从*"我们能抓住 AI 使用吗？"*转向*"我们的 [[assessment|考核]]还能否支撑我们对学生学习的推断？"*

### 从检测到重新设计的演进

- **对检测的怀疑：** [[ai-detection]] 研究与 [[governance|机构]]层面的分析越来越多地发现，AI 检测工具不可靠且程序上不公平。[[detecting-llm-generated-text-latent-prompt|LLM 文本检测]]面临根本性局限。完全由 AI 生成的提交物可以在考试监控系统中基本不被察觉地通过，而有经验的阅卷人也无法可靠地识别出 GenAI 撰写的作品。检测至多是一种有限的、情境性的工具——不是首选策略。然而它被要求处理的体量远非边缘：对一门大规模注册的 CS2 课程长达六年的分析发现，45.7% 的 2026 年春季学生因与 LLM 辅助编程一致的模式而被标记（[[argus-academic-integrity-genai-2026|Racovan et al.（2026）]]）。
- **检测的狭窄余量，以及作为计划行为的作弊：** [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray、Edsall 与 Parapadakis（2025）]]汇集证据指出，AI 放大了这个行业本就存在的脆弱性。AI 生成文本在高达 80% 的案例中被当作人写作的文本通过，而他们引用的证据显示机器检测率约为 80%，人工审阅为 78.4%，余量过于狭窄，不足以支撑一项不当行为的认定。他们更具独特性的贡献是动机分析：以 Ajzen 的计划行为理论和 Bandura 的自我效能理论为出发点，他们报告 Krou 等（2021）的元分析发现，[[self-efficacy]] 与作弊负相关，而实际能力与之完全不相关。因此一个有能力、有信心的学生，如果认为某项考核不公平，就可能通过作弊来夺回控制权。结论遵循了本页在别处记录的同一个反转——一份模型能有说服力回答的考核，是一份智力上毫无分量的考核，失败属于考核，而不属于学生。
- **考核重新设计：** [[authentic-assessment]]、[[beyond-detection-authentic-assessment-ai-2025|超越检测的方法]]与 [[ai-assessment-scale-reform|AI 评估量表]]把焦点从抓住 AI 使用，转移到设计出使 AI 使用变得无关紧要、透明、或为展示某项特定能力而必需的考核。
- **评分的结构性脆弱：** [[biology-degree-integrity-genai-cheating-2026|Chan et al.]]提供了一个具体案例，说明现行评分如何在结构上暴露于 AI 中介的不诚实。在一个 [[biology-education|生物学]]系，教师认为只有线下监考考试是脆弱性最小的；课外作业被视为高度脆弱，这使得学生成绩中约三分之一高度脆弱、80% 至少在某种程度上脆弱。这把诚信问题框定为部分是一个*评分设计*问题，推动重新平衡，向监考或课堂内考核以及更难外包的 [[authentic-assessment|真实性考核]]设计倾斜。[[ivory-psychology-assessment-integrity-2026|Ivory et al.（2026）]]提供了学科层面的对应案例，覆盖一整个三年制心理学项目：16 类共 40 项考核中，有 36 项只需最小努力就能产出可通过的内容，而未通过的四项是那些需要现场出席、视觉媒体或学生自有数据集的。他们的解读中最具普适性的部分是"为何它能通过"——奖励流畅结构和善意使用正确分析方法的评分，会纵容编造的数值和幻觉出的参考文献，因此决定 AI 产出是否被计为学业成就的是及格线，而非检测；考核的脆弱性"不能 solely 归咎于学生的使用"。
- **提交物作为攻击面：针对 [[automated-assessment|AI 评分]]的提示注入。** [[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]]对一个日常评分工作流做了红队测试，显示学生提交物可以携带隐藏指令，改变 AI 工具给出的成绩：嵌入提交物文件中的五种间接注入策略中有两种，把一篇不及格的文章提为及格，且对用户没有任何可见警告，报告的攻破成功率分别为 100%（9/9）和 94%（17/18），两者都结合了指令操纵、角色扮演，并横跨 docx、pdf 与 htm 格式实现混淆。最基础的那次攻击彻底失败，而其拒绝是静默的——工具直接禁用了对话且未报告这次尝试；而一次被检测到的注入则先给出"将仅依据官方作业要求评分"的安抚，随后对同一文件的六次运行仍一次次提高了成绩。诚信后果是双向的：被隐藏指令抬高的成绩不带任何 [[assessment-validity|效度]]主张，同一技术也可以用来压低一份提交物而在产出中不留下持久痕迹，而人工阅卷人成了对"被设计为不可见"的操纵的唯一实质检查。
- **效度作为组织框架：** [[assessment-validity]] 把诚信重新框定为一个证据问题。[[authentic-products-authenticated-processes-2026|真实性考核研究]]引入了**构念替代（construct substitution）**——一件 AI 生成的产品被归因于学生，于是考核推断的是工具的能力而非学生的能力。无论 AI 政策为何，证据问题都依然成立：无论使用是被禁止、允许还是必需，考核仍必须产生能支撑所做推断的证据。
- **规模化变异作为一种无监控的诚信机制：** [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA（Lee 2026）]] [[benchmark]]了"AI 整合真实性考核（AIAA）"背后的前提——以逐学生的任务变异取代基于监控的监考，使抄袭在结构上失效。诚信保证以 LLM 能生成表层不同且 [[assessment-validity|构念等价]]的变体为条件；VARIA 的 600 变体试点发现，前沿模型只在边缘上满足这一点（联合得分 0.81–0.88），而非前沿模型则崩塌（0.50–0.55），因此"规模化变异无法仅靠 [[prompt-engineering|提示]]解决"。这给"检测与重新设计之争"提供了一个经验的、可否证的检验：真实性、任务变异考核的无监控承诺，如今取决于一种被测量过（且仍然狭窄）的生成能力，而非一种被默认的能力。
- **针对 GenAI 对学生反思的认证：** [[5p-reflection-model-genai-2026|Kadel et al.（2026）]]论证，一旦 GenAI 能够撰写反思性文字，传统反思模型就无法再认证学生的反思，并把诚信直接嵌入反思模型之中——5P 框架的 Pitfalls（陷阱）阶段明确处理抄袭、[[hallucination-risk|幻觉]]与过度依赖，而其 Process（过程）与 Product（产品）阶段要求记录提示并验证产出，使 [[learners]]自身的推理可与 AI 生成的贡献区分开来。
- **政策发展：** [[genai-policies-higher-ed-computing|机构 AI 政策]]与 [[educational-policy-ai]] 研究考察大学如何制定与传达诚信预期——以及为何抽象的政策陈述如此经常失效。
- **诚信是一个治理问题，而非检测问题。** [[coates-governing-academic-integrity-indicators-2025|Coates、Croucher 与 Calderon（2025）]]把约束条件从学生行为转移到学术 [[governance]]，他们称后者有韧性，但"并未处于良好位置或准备就绪"以应对 GenAI 对学生考核认证的威胁。他们的答案是一个覆盖八个维度、共 130 项的诚信指标框架，从 Designing（设计，19 项）到 Improving（改进，6 项），由治理问题而非心理计量量表构成——机构的最高董事会是否收到考核质量更新，考核中有多少比例贴近相关且有意义的问题，有多少比例的学生被评估他们的教师个人认识。该框架通过多年的研究综述、五个澳大利亚大学案例、原型设计、来自六大世界区域的 60 位受邀专家确认以及 [[quantitative-research|定量]]试点开发而成，并与治理架构、人员、技术与资源方面的改革配套；作者预期这些改革只有在 [[regulation]]、基准比较与跨机构竞争的外部压力下才会兑现；他们将框架定位为形成性的，并呼吁在用于比较或 [[educational-measurement|测量]]之前先做心理计量验证。
- **文件实际上说了什么：诚信主导机构 AI 政策。** [[institutional-ai-policy-health-informatics-2026|Eldredge et al.（2026）]]分析了美国全部 48 个 CAHIIM 认证的健康信息学与健康信息管理硕士项目的 AI 政策与指导文件：其中 40 个（83%）至少有一份合格文件，这些文件压倒性地把 AI 框定为防止课程中学生滥用的问题，以学术诚信与可接受使用为中心。学术诚信是出现频率最高的关键词（n = 139，高于引用 59、考核 50、抄袭 38），而隐私、知识产权与监管主题虽存在但较少见（HIPAA n = 5，FERPA n = 11，IRB 指导 n = 8）。对同一语料的主题建模返回四个主题，第一个即学术诚信与恰当 AI 使用，其余为教学中的生成式 AI、研究中的 AI 与数据工具使用，以及学生与对话式 AI 系统的互动。本页的证据价值在于量化：以诚信为中心的框定不只是机构 AI 政策的口头默认，它在经验上是其主导内容。作者最尖锐的观察在于这种注意力止步何处：相对较少的指导覆盖了应用学习、研究与模拟环境中的 AI 使用，而这些正是课程与数据治理关切的交汇处，于是文件治理着课程作业，而学位正在为学生准备的场景却基本未被触及。
- **诚信框定正在让位于基于任务的规制：** [[chirikov-regulate-ai-syllabi-2026|Chirikov（2026）]]对 31,000+ 份课程大纲的纵向研究显示，教师的 AI 政策正在脱离纯粹的诚信框架：教学大纲中提及学术诚信的比例从 63%（2023 春）降至 49%（2025 秋），而提及 AI 对学习影响的比例从 1% 升至 29%。教师越来越多地**按任务类型**规制 AI——在起草/推理（AI 会取代学习之处）限制它，在编辑/校对与学习支持上允许它——而非施加一揽子的诚信禁令。这把诚信政策重新框定为一项任务层面的设计决策，而非一条二元规则。

### 不当行为程序及其证据基础的崩塌

建立在诚信政策之上的执行机器本身就是一个设计决策，而生成式 AI 已经拆掉了它的证据地基。[[teichmann-detecting-undetectable-misconduct-2026|Teichmann（2026）]]论证，大学从抄袭处理中继承的不当行为程序假定被禁止的使用可以被检测和证明——而技术消解了这一前提。与文本匹配软件不同，后者可以指出一份被抄袭的来源，AI 文本分类器识别不出来源（来源并不存在）；它输出的是关于风格的或然性判断，在改写下退化，系统性地误标非英语母语写作，且无法被解释或交叉质证，而熟练或轻度编辑过的使用则完全不留痕迹。仍然坚持这一程序，等于颠倒了举证责任（学生被要求证明否定），拉紧了程序正义的每一个要素，并把错误指控的伤害最重地压在已经处于劣势的人身上。提出的补救是双重的：确立一条证据标准，即检测器分数 alone 永远不构成认定依据，并配以渐进式的、教育优先的回应；以及把机构精力转向以效度为中心和 [[authentic-assessment|真实性考核]]的设计——应对不可检测的 AI 的答案是更好的考核，而非更好的监控。极限情形则完全没有机器：[[ai-written-admissions-essays-penalized-2026|Isley、Gaebler 与 Goel（2026）]]记录了一个美国公共政策硕士项目，它在签署声明中禁止生成式 AI 辅助，却不筛选任何提交物，其中 56.1% 的 2025 年申请人至少提交了一篇被商业检测器归类为主要由 AI 撰写的文书，且每篇被标记的文书与 1.5 个百分点的更低录取概率相关（p < .01），在控制文书质量后升至 2.6 个百分点（p < .001）。在规则与结果之间没有检测、裁定或执行环节，处罚完全通过录取审阅人的不成文判断交付——禁令加上无辅助的审阅人判断，复制了公平程序本应防止的那种自由裁量、不作解释的处罚。

[[munoz-misconduct-allegation-evidence-2026|Munoz et al.（2026）]]提供了经验层面的对应物：他们对一所澳大利亚区域性大学三年来每一个 GenAI 不当行为案件逐一编码：1,162 个案件携带 1,855 项证据，每项证据就相关性、可信度与推断力评级。检测器产出是最常被取用、最不堪重负的证据——Turnitin 或相似度报告携带 100% 弱的推断力，独立的检测器产出则 100% 低可信度，检测器证据到 2025 年已降至各项证据的 0.5%，因为机构逐渐认清了它无法证明什么——而最强的证据类型是那些不依赖或然性文本分类的：学生自认、观察到的违禁考试行为，以及经独立核实的编造参考文献，后者是最大的结构性变化，占各项证据的 22.3%。他们最尖锐的批评是结构性的而非证据性的，因为"没有任何要求调查者在推进指控之前评估证据的证明力，流程的任何阶段都没有最低证据门槛"，于是证据质量与案件结果之间不存在可靠关系。他们还记录了政策如何追赶实践：2024 年全年生效的考核政策对 AI 只字未提，而自 2025 年 1 月起，修订后的政策允许经批准的真实性核查软件，同时禁止将学生作业上传至第三方 AI 检测工具。

第二类失败是范围问题，而非证明问题。[[wright-transcription-not-generation-2026|Wright（2026）]]显示，写在平台身份层面而非功能层面的禁令，会把非生成性的格式转换——语音转文字转录、OCR、纯文本转 LATEX——与它们本想禁止的生成式起草一并捕获，尽管经同行评议的计算机科学文献把识别与生成视为不同操作。代价落得不均：有影响精细运动控制、手写可辨性或打字准确性状况的学生，恰恰依赖这些工具，而随着独立语音转文字产品被停产或降级，AI 驱动的转录正在填补这一功能缺口，于是一条过度包含的规则会移除产出清晰文字的主要手段，使争议在成为诚信争议之前先成为一个 [[accessibility]] 与 [[equity-in-ai-education|公平]]问题。Wright 的补救是给出一个基于功能的生成式 AI 定义，外加四项操作标准——保真度、非增强、可追溯性与声明——让学生有一条结构化路径去反驳一项"仅涉转录"的指控，同时把举证责任留给机构。

检测的证据问题同时也是效度问题。因为 AI 辅助是迭代的、与起草交织在一起的，而非整体外包的，作者身份与意义的所有权脱开了，而一份可靠的提交产品未必能证明学生行使了任务本意所针对的判断。检测器表现随任务、学科与模型版本而变化，而披露或被怀疑的 AI 使用可能成为阅卷人的偏误线索，于是检测式回应是增加了与构念无关的方差，而非移除它。诚信之争问的是谁写出了这些文字，而效度视角问的是这一表现支撑了关于学生的什么主张。

### 合理化问题

学生一般并非出于恶意而 [[ai-misuse-learning-harm|滥用]] AI；他们对其做合理化。[[student-rationalization-ai-writing|访谈研究]]识别出至少**五处脱节点**，学生在那里对 AI 政策的解读偏离教师意图，以及一套**20+ 种互不相同的合理化**——从"复制 AI 文本没有受害者"到"反映我信念的文本就是我自己的写作"。这些合理化是临时的、事后的、内部不一致的，它们描述了一条"陡峭的伦理滑坡"，学生沿着它滑到 [[pedagogy|教学]]目标之外很远的地方。这就是为何 [[misconceptions|学生对 AI 的误解]]是诚信违规的上游原因，也是为何诚信教育必须处理 [[ethics|伦理推理]]，而非仅仅技术技能。

[[ji-student-voices-academic-integrity-scoping-2026|Ji（2026）]]对 38 项学生声音实证研究的范围综述，提供了本节所依赖的综合。其四个主题为：模糊性（生成整个任务被视为作弊，语法检查与头脑风暴大体可接受，而改写、列提纲与翻译处于灰色地带）、伦理 [[agency]]（学生在被解读为对其行为的默许的指导真空中建立个人规则）、伦理意识与实践之间的落差，以及按性别、层级、学科与文化的差异。意识与实践的落差就是合理化问题在规模上的度量：Huang et al. 的伦理失调指数（Ethical Dissonance Index）把 522 名中国学生分为四个簇，其中一个簇频繁做着他们认为不正当的事；而 Ofem et al. 对 4,679 名尼日利亚学生的结构方程建模发现，对 ChatGPT 的积极感知预测不诚实使用，而积极的诚信态度则是一个显著的负向中介。Ji 把学生解读为既非 GenAI 的被动接受者，也非无道德约束的违规者，而是在伦理灰色地带中航行的能动者，这也解释了为何所评研究一致收敛于共同创建、具教育性且情境敏感的回应，而非惩罚性回应。

### 为何政策单独失效：协调问题

[[ethical-ai-higher-ed-game-theory|一个协调博弈框架]]提供了机制层面的解释，说明政策宣示为何很少改变行为：学生的 AI 使用是一个**协调问题**，个人选择取决于同伴预期与考核设计。该模型的关键发现是**非线性阈值动态**——对反思性考核激励做出小而校准良好的改变，可以触发整个群体迅速转向负责任使用，而薄弱或错位的激励则让机会主义实践延续。就实践而言，温和的重新设计（例如要求学生反思其 AI 互动）在抽象规则毫无作用之处可能产生不成比例的效果。

同伴问责并不总是指向诚信，正如 [[chen-zou-genai-group-assessment-agency-2026|Chen 与 Zou（2026）]]在计分的 [[group-work|小组考核]]中发现的：15 个学生小组中有 7 个故意减少其 GenAI 使用，部分是为避免搭组员的便车，因为小组后果是共享而非自我封闭的；然而在 5 个小组中，一种宽松的集体氛围——"我组里每个人都在用 GenAI"——降低了被感知的 [[ai-misuse-learning-harm|滥用风险]]，并把小组作业本应创造的问责机制反转过来。同一研究还发现学生把原创性重新框定为忠于同学们共同建立的理解，其实际建议也直接由此得出：把"何为可接受的 AI 使用"的协商做成一项明确的、有记录的、可考核的成果，而不是让规范从同伴压力或被感知的风险中自行浮现。

机构内政策不一致，恰好产生了协调理论所预测的那种猜测。[[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al.（2026）]]的 11 位受访者中有 9 位，把自己课程明确允许使用生成式 AI 表述为一种可能的"陷阱"——一种用来识别哪些学生禁不住诱惑的诱饵——尽管政策是公开的，且写进了考核指南；学生从别处遭遇的禁令与警告中做泛化，而不是就自身课程规则本身去解读。作者的结论追随机制而非措辞：课程层面的清晰不够，需要 [[educational-policy-ai|项目或机构层面]]的一致性，学生才能不再从周遭文化中推断意图。

**同样的行为，不同的裁决——以及什么也没改变的披露。** [[genai-governance-australian-higher-ed-2026|Poudyal（2026）]]把 15 个标准化情境应用于 20 所澳大利亚大学的政策环境，产出 300 项分类：120 项（40.0%）明确禁止，56 项（18.7%）不确定，没有一项明确允许，而具约束力的文书在 100 种组合上对生成式 AI 保持沉默，这些组合由指导文件在 88 处做出解决。披露并不决定结果——同一披露状态依许可规则与任务指令而产生不同分类，披露字段记录了 117 项满足要求与 80 项虚假声明。

程序与政策同等重要，而其证据基础已因 AI 而崩塌。[[teichmann-detecting-undetectable-misconduct-2026|Teichmann（2026）]]论证，大学从抄袭处理中继承的不当行为程序建立在一个被生成式 AI 拆毁的前提上：被禁止的使用可以被检测和证明。与文本匹配软件不同，后者可以指出被抄袭的来源，AI 文本分类器识别不出来源，因为来源并不存在——它们输出关于风格的或然性判断，在改写下退化，系统性地误分类非母语者，且无法被解释或交叉质证，而熟练或轻度编辑过的使用则完全不留痕迹。仍然坚持，等于颠倒了举证责任（学生被要求证明否定），拉紧程序正义的每一个要素，并把错误指控的伤害最重地压在已经处于劣势的人身上。提出的补救是双重的：公布一条证据标准，检测器产出 alone 永远不构成认定依据，并配以渐进式的、教育优先的回应；以及把机构精力转向以效度为中心的考核设计与真实性考核设计。[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed 与 Temimi（2026）]]从学生一侧提供了机制层面的对应物：因为每个考核环境都使某种回应变得最具吸引力，在验证薄弱时禁令使隐瞒具有吸引力，监控让隐藏使用更昂贵却不使披露变得安全，而唯有重新设计——降低外包的回报、提高可见推理的价值——才能把学生移向负责任使用。他们最尖锐的结果是：威慑是通过检测器对隐藏使用与正当作业的区分能力发挥作用的，而非通过它的抓取率，于是当假阳性增长快于真阳性时，更强的监控会使隐瞒相对更具吸引力。

- **诚信义务可以被重写为个人能力。** 在 366 篇 GenAI 高等教育摘要中，"integrity"一词出现 461 次，但 166 个义务表达中只有 6 个点名学生，于是验证与披露呈现为学生被期望具备的技能，而非机构强制执行的义务（[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal, 2026]]）。

- **诚信政策的规范性程度，并不能揭示考核暴露的程度。** 在审计 15,587 条单元记录后，[[villanueva-ai-vulnerability-assessment-audit-2026|Villanueva（2026）]]发现，持有全机构改革授权的高校与采用宽泛框架的高校，落在同一区间的考核暴露上——这是协调博弈关于"宣示为何很少改变行为"之解释的经验对应物。

### 社会情感维度

诚信执行有一项被忽视的情感代价。[[shame-guilt-ai-regulation-computing-education|羞耻与内疚研究]]与学生一起显示，这些情绪调节着 AI 使用何时以及如何变得可见，产出**隐藏行为与选择性披露**——并且它们与持续使用共存，形成能动性降低与道德紧张加剧的循环，而非行为改变。这就是为何 [[social-norms-ai-use|围绕 AI 使用的规范]]调节可见性的效果好过调节使用。学生甚至用成瘾的语言描述自己的 AI 使用。其含义是：以检测为重、以监控为导向的政策，有把 [[ai-misuse-learning-harm|滥用]]推向地下的风险，而非解决它，从而破坏生产性使用所必需的坦诚协商。

隐藏的反面是拒绝，而拒绝自带情感代价。在 [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al.（2026）]]调查的 85 名师范生中——他们面对的考核政策明确允许生成式 AI——62.4%（53 人）选择完全不用，而使用者的使用是浅层且纠正性的：校对（43.8%）与清晰度检查（34.4%）远多于文本生成（18.8%）与头脑风暴（12.5%）。对 [[legal-issues-and-risks|错误指控]]的恐惧，而非技术困难，做了大量工作：41.5% 的非使用者点名它，而 13.2% 提到知识或技能缺失，同时 77.4% 把不使用简单框定为偏好独自工作。当一份宽松政策被读作陷阱时，安全的回应是拒绝这份邀请——而这让机构付出它本想邀请的那种 AI 整合工作。

### AI 使用披露声明

[[ai-use-disclosure|AI 使用与披露声明]]是把诚信预期落到操作层面的具体机制——而研究显示，当它被当作中立的合规表格对待时，它经常失效。[[gonsalves-student-non-compliance-ai-declarations-2025|Gonsalves（2025）]]发现 74% 的学生在强制性的课程作业封面页上未声明 AI 使用，驱动力是对处罚的恐惧、指南的模糊、执法的不一致以及同伴规范。[[kirsanov-beyond-detection-ai-online-assessments-2026|Kirsanov et al.（2026）]]与 [[vetter-hidden-cost-disclosure-genai-2026|Vetter et al.（2026）]]确认，对报复的恐惧与政策不清冷却了披露——而坦诚的学生甚至可能引来怀疑。[[chang-should-i-tell-my-teacher-ai-disclosure-2026|Chang et al.（2026）]]把披露重新框定为一种 [[help-seeking]]/[[self-regulated-learning|自我调节]]行为，焦虑把它重定向到同伴身上。集体教训是：披露政策必须处理 [[affective-computing|情感]]与社会障碍，必须清晰且一致，并把披露当作 [[formative-assessment|形成性]]教学而非监控。**[[luo-dawson-value-judgments-grading-2026|Luo & Dawson（2026）]]**补上了教师这一侧：教师对 GenAI 辅助作业的评分，由关于学生诚实、勤勉与信任的价值判断驱动，许多教师惩罚（或想惩罚）披露了 GenAI 使用的学生——即使作业质量很高。这就是"双向 [[explainable-ai|透明度]]"问题：学生被期望声明使用，但教师很少澄清该声明将如何影响成绩，于是诚实的披露可能带来一项未言明的评分惩罚。该研究把披露问题锚定在教师评分充满价值判断的现实之中，并论证透明度必须双向运行。

学生自己的报告量化了这一信息传达到底有多差。在一项对 504 名社会学本科生的调查中，81% 的人说其教师或助教给过 AI 使用指导，但只有 46% 的人称这些指示非常清晰；19% 报告说完全没有收到指导，其余则描述为至多还算清楚（[[student-genai-use-views-writing|Kuznetsov、Sheely & Baker，2026]]）。对犯下学术过失的恐惧是学生提出的第二常见关切（28%）——这项代价由模糊性而非执法施加，因为只有 3% 报告用 GenAI 生成作业文本、2% 生成完整草稿。其实际含义是：沟通的清晰性本身就是一项诚信机制，而一个无法分辨什么被允许的学生，承担着机构从未打算施加的风险。

课程层面的许可同样不解决披露困境。在 [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al.（2026）]]对 85 名师范生的研究中——他们的考核明确允许生成式 AI——自我声明总计 28 位使用者，匿名调查中为 32 位，且两个来源按课程朝相反方向分歧：课程 A 记录了 14 位调查使用者但仅 8 项声明，而课程 C 反转了这一模式（调查 8，声明 12）。作者把这种分歧读作计分后果塑造了学生愿意让什么可见，为"声明系统测量披露行为，其程度不亚于测量使用"增添了师范生证据。

### 文化与情境变异

政策文本不等于政策感知。[[cross-cultural-student-perceptions-genai-computing|跨国研究]]发现，尽管机构政策在功能上相同，不同大学的学生对同一批 AI 辅助实践给出不同评价——**决定被感知的"错"的是文化，而非政策措辞**。政策协调并不产生感知协调，于是文化多元的群体对同一规则做不同解读，这是执法与评分中的一项公平关切，主张以情境化说明取代抽象规则陈述。

语言背景而非文化是第二个变异轴。[[li-genai-assessment-language-equity-2026|Li（2026）]]论证，由于同一界面既执行被允许的语言编辑，又执行被禁止的实质性起草，把 GenAI 当作一类未授权协助的诚信规则，会把语言劣势转化为诚信风险：彻底禁止会移除一种可规模化的语言支持，"允许但须披露"的体制则把合规工作量压给使用更频繁、更迭代的 EAL 学生，而对超出小改动的编辑的禁令，则把怀疑集中到流畅度变化最大的写作者身上。Li 提出的界线是基于目的的而非基于工具的——被允许的支持不添加新想法、新来源，也不对分析做实质重排，而替代则创造或实质重塑被评估的智力工作——且它锚定在考核构念上，因为对流畅与地道表达加分的评分量表，会为 EAL 写作者引入与构念无关的方差（[[assessment-validity]]）。该框架把 [[ai-detection|检测器]]产出降格为一种很少构成证明的分诊信号，更偏好通过分阶段提交、草稿历史、可验证的来源链和一场简短的、与构念一致的对话来做三角验证；它并校准 [[ai-use-disclosure|披露]]，使常规支持不带来超过单语同伴所承担成本的合规成本。

### 从 policing 到教学

知识库记录了一次范式转变：从把 AI 当作要被 policed 的诚信威胁，转向把 AI 当作一种工具，其恰当使用必须被教授。这是 [[ai-literacy]] 的伦理维度，并在实践设计中 [[embodied-learning|具身]]：

- **任务特定的 AI 使用声明：** [[genai-declaration-frameworks-higher-education|领域特定的声明框架]]以结构化声明取代"我用了 AI"式通用复选框，把使用映射到认知阶段（例如结构规划与内容生成），强制反思，把焦点从 policing 移向专业实践。
- **过程透明的考核：** [[credential-cognitive-stewardship-ai-assessment|cognitive stewardship]]、分阶段提交、口头答辩，以及 [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|AI Viva]]（一个探查学生是否理解其提交物的 [[conversational-ai|对话式智能体]]）等架构，使 [[human-in-the-loop-ai|人的判断]]、验证与责任可见。[[miles-prompt-literacy-human-centered-genai-framework-2026|Miles、Haber-Curran 与 Arar（2026）]]把同一逻辑推到提示本身：他们的样例评分量表评估迭代精炼、对产出的批判性解读与反思性修订，于是被评估的是学生与工具的互动，而非它产出的制品，并论证只教学生优化产出，会让使用的伦理与认识论维度 untouched。
- **[[reducing-ai-misuse|减少滥用]]：**诚信与 [[ai-misuse-learning-harm]]（滥用的学习代价）和 [[reducing-ai-misuse]]（预防它的干预）并列，把诚实与真实学习而非规则遵循绑定在一起。
- **把透明度作为一项诚信策略，而非仅是一种礼貌：** [[mccorkle-aligned-genai-course-policy-2025|McCorkle（2025）]]的设计案例，把每一项被允许或不被允许的 GenAI 使用背后的*理由*当作诚信机制本身。忽略禁令政策后受访谈的学生解释说，他们并不认为自己行为不诚实，这把失败重新框定为模糊而非不合规——于是重新设计通过为每项限制给出它所保护的具体 [[assessment]] 来回应这一点，并为 McCabe 的"20-60-20"可说服中间层而非少数顽固者而设计。该案例还点名了模糊政策的公平代价：预期不清且跨教师不均，正是把政策失败转化为纪律处分的东西（[[equity-in-ai-education]]）。

- **是设计，而非检测：Bochum 案例。** 波鸿鲁尔大学对核物理与粒子 [[physics-education|物理]]导论课程的重新设计（[[ai-particle-physics-education-redesign-2026|Mikhasenko et al.，2026]]），把其 AI 政策连接到一项实际的诚信失败，而非连接到检测：因为习题提前公开，一些学生准备了 AI 生成的解答并抄写到黑板上，而未参与本应进行的推理。作者把这当作设计问题处理——把习题移到准备好的课堂讨论中，并让笔试成为成绩决定因素——而非 policing 问题，同时明确允许 AI 用于学习，解释为何验证是学生的责任，并注意到开放的、允许 AI 的家庭作业也带来了依赖加剧、对付费模型的不均等获取，以及助教工作量问题。

对教学倒置最清晰的表述来自 [[ai-agents-joyful-assessment-third-space-2026|El Khoury 与 Ma（2026）]]，他们论证，从怀疑出发的改革会把教育想象收窄到控制、合规与监控之上，而诚信应当是"为参与而设计的考核"的**后果**，而非其起点。他们支撑性的观察是一个在本知识库别处已可见的机制：不投入是使不诚实更可能出现的条件之一，于是那些压力测试考核、或在不处理参与的情况下约束 AI 使用的议程，会把问题的一部分 untouched。

英语世界以外高等教育中的学生，用自己的话描述同样的张力。[[mulisa-students-genai-integrity-perspectives-2026|Mulisa 与 Mezgebu（2026）]]访谈了一所埃塞俄比亚大学的 27 名本科生，发现学生群体自我分裂：几乎所有人都用过 GenAI 或看到同伴用过，多数人认为它提升了学业成就，少数人径直称这种使用是不当行为，而几乎所有人都描述了一个不平坦的赛场，其中 AI 辅助的作业比诚实努力拿到更好的成绩，独立工作者则失去了勤勉感。这一记述最尖锐之处是学生对抄袭的定义，它在技术上站得住却不完整——如果抄袭意味着复现他人的文字，那么一篇未复制任何东西的机器写成文本就不是抄袭——这也是为何作者论证该定义必须扩展到复制粘贴之外，遵循 Ka 与 Chan（2025）的"AI 抄袭（AI-plagiarism）"，以及为何他们把学生自身的信念，而非仅机构规则，置于伦理使用的中心。

[[sharma-judgment-visible-genai-assessment-2026|Sharma（2026）]]通过把 Eaton 的后抄袭框架从伦理取向扩展进考核设计，把教学倒置又推进了一步。在这一论述中，诚信是通过 [[evaluative-judgment|评价性判断]]——学习者权衡选项、为学术选择辩护、并在认识论不确定下承担责任的能力——来 enact 的，并通过四种实践变得可见：带注释的决策轨迹、验证与问责实践、口头答辩与对话式问责，以及带版本历史的草稿差异。检测只被保留为一个补充层，用于明显的虚假陈述或对智力劳动的有意外包，从不作为诚信的首要基础设施，因为它问的是"是否用了 GenAI"，而不是"作品背后的决策是如何做出的"；该论证还点名了检测中心模式带来的公平风险：它落在最依赖生成式工具以获得语言或认知 [[scaffolding]] 的学习者身上最重。

第三条路线介于检测与重新设计之间。[[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar（2026）]]用学期初的 [[learning-analytics|LMS 痕迹]]预测 AI 辅助作弊风险，AUC 为 0.763，并把输出框定为低利害的学业指导——提醒、作业跟进、简短 check-in——而非不当行为的证据，坚持该分数与评分及纪律记录分开。

### 关联

学术诚信与 [[assessment-validity]]、[[ai-literacy]]、[[ai-detection]]、[[authentic-assessment]]、[[assessment]]、[[educational-policy-ai]]、[[regulation]]、[[ethics]] 和 [[equity-in-ai-education]] 相连。它是 [[ai-education|教育中的 AI]] 的伦理维度，与 [[cognitive-offloading|过度依赖]]不可分离，也与 [[generative-ai]] 如何重塑 [[higher-ed]] 与 [[k-12]] 学习这一更大问题不可分离。

- **系统性综述综合。** 一项对 25 项研究的 PRISMA 综述（Balalle & Pannilage 2025）发现，AI 既是一种威胁（AI 生成写作、改写工具），又是一种检测工具（Turnitin AI 分数），检测软件对 AI 生成工作并不可靠，机构必须通过清晰政策、考核重新设计与伦理训练来建立学术诚信文化，而非仅靠 policing。([[ssaho-ai-academic-integrity-review-2025]])
- **从 policing 到对话：学习验证。** 一项对大峡谷大学全机构框架的实践者记述（[[best-response-student-ai-dialog-2026|Mandernach 2026]]）论证，检测不可靠而正式诚信程序很少达成解决，留给教师的是"无从申诉的怀疑"。GCU 转而采纳**学习验证**——请学生在一场简短对话中展示对其提交工作的理解——把诚信从合规问题重新框定为考核问题。它恢复了教师权威，把学生从"如何不被抓到"移向真正的 [[student-engagement|参与]]，并把 AI 使用视为在学生能展示学习时可接受的；学生最初对验证的焦虑说明，以监控为重的政策会侵蚀 [[trust]]。

- **GenAI 击败了自动评分作业（2026）：** ChatGPT 在刻意加固、可自动评分的 Qiskit（量子计算）作业设计的全部 150 次测试会话中通过——[[personalized-learning|个性化]]、隐藏参考文献、反思、[[simulation|模拟器]]执行——显示基于量表的评分者无法可靠区分 AI 完成与学生完成的工作，并主张直接评估理解（[[chatgpt-qiskit-homework-autogradable-2026]]）。
- **AI 时代的评估——产出作为证据（2026）：** 一项大学层面的分析论证，AI 考核危机是考核设计与 [[learning-gains|学习成果]]之间的错位，而非仅仅是不诚实；它记录了监控的危害（锁定浏览器、眼动追踪）、一个"披露陷阱"（学生害怕声明 AI 使用会降低分数）、一种给社会经济地位打分的成绩差距（付费与免费 [[llm]] 层级），以及教师在 policing AI 中的"教学倦怠"——主张以过程为基础的评估取代检测（[[evaluation-age-ai-output-evidence-2026]]）。

### 更新的证据：伦理推理、检测极限、AI 营销与幽灵学生

一波近期研究锐化了生成式 AI 时代学术诚信的图景：

- **中学生对 AI 抄袭的推理是情境性的，而非固定规则。** [[chan-rethinking-aigiarism-secondary-integrity-2026|Chan（2026）]]显示，中学生对"AI 抄袭"的伦理推理是细致且依赖情境的——许多人认为 AI 辅助的工作在支持理解时可接受，在替代自己的努力时有问题——挑战了"学生只是缺乏诚信"或"单一政策能覆盖其伦理"的假设。
- **仅靠真实性考核无法保障诚信。** [[kofinas-generative-ai-authentic-assessment-integrity-2025|Kofinas et al.（2025）]]发现，阅卷人通常**无法区分**有 GenAI 输入与无 GenAI 输入的考核，且考核真实性水平**没有影响**防范或检测 GenAI 使用的能力。高等教育界"不能仅靠真实性考核来控制 GenAI 的影响"——这是对 [[authentic-assessment|考核重新设计]]策略的直接挑战，后者必须与其他措施配对。
- **诚信指导必须延伸进研究过程，而不仅是 [[teacher-role|教学]]。** [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai & Chan（2026）]]发现，研究生在研究任务中 enact [[ai-literacy]]，并论证目前聚焦教学与考核的负责任使用政策，必须 [[scaffolding|为 GenAI 在研究中的伦理维度提供脚手架]]——那里的关切集中在原创性、作者身份、[[privacy|数据隐私]]与技能退化，而非仅是抄袭。
- **目的必须先于政策。** [[taylor-lacroix-purpose-before-policy-academic-integrity-2026|Taylor & LaCroix（2026）]]论证，GenAI 使用是否构成不当行为，取决于大学的*目的*。违规案件上升反映了新自由主义大学中的结构性不连贯，技术热情、企业影响与政策执行相互冲突——把学生留作对其行为负责的一方，而这些行为是被机构隐性地塑造的。大学若在明示使命、教学与技术实践之间缺乏一致性，就无法可信地执行诚信。
- **心理与行为决定因素。** [[psychological-mechanisms-academic-integrity-ai-2026|Frontiers 研究]]梳理了 AI 下学术诚信的心理机制与行为决定因素——态度、自我效能、规范与被感知的后果如何塑造诚实使用——把诚信与 [[motivation]]、[[self-efficacy]] 和 [[ai-literacy]] 作为行为构念而非纯粹规则遵循相连。[[predictors-ethical-genai-use-higher-ed-2026|Tabares-Cruz et al.（2026）]]在对 980 名厄瓜多尔大学生的 SEM 中将其量化，排序为：学术诚信与透明度倾向在前，随后是 AI 素养、[[critical-thinking|批判性验证]]、机构指导、自我调节与数据保护——诚信倾向与 [[ai-literacy]] 一起解释了伦理 GenAI 使用的可观份额，并超过机构规则 alone。

- **AI 营销使使用常态化，并框出"作弊与竞争"。** [[sobo-cheating-competing-ai-marketing-literacy-2025|Sobo et al.（2025）]]显示，AI 被作为实用必需品营销给学生（"让你的写作听起来更自然，以免被误标"），学生即便在担忧依赖与丧失学习时，也感到必须采用它以保持竞争力——一种内化的创业式命令。这指向把 [[reducing-ai-misuse|营销素养]]纳入 AI 诚信教育的需要。
- **AI 人化器暴露了检测的表演性循环。** [[roe-ai-humanizers-legitimacy-assessment-2026|Roe et al.（2026）]]编目了 55 个 AI 人化器网站，它们改写 AI 生成文本以逃避检测，并以 Goffman 的拟剧论框定。人化器使不当行为在话语上缺席、并表演正当性，说明"检测与规避"的军备竞赛在结构上没有终点——强化了从 [[ai-detection|policing]] 向考核设计与 [[ai-literacy]] 的转移。
- **执法而非检测，才是对话所在之处。** 在跨越三年半、来自 26 个教育相关 subreddit 的 270,929 条 AI 相关记录中，学术诚信簇占据了 37.1% 的讨论，不当行为执法是最大的单一主题，占 12.1%，而 32.3% 的师生讨论帖落在检测与执法争议之中（[[reddit-genai-education-discourse-analysis-2026|Yüce et al.（2026）]]）。
- **幽灵学生与智能体式 AI 的验证缺口。** [[bozkurt-ghost-students-agentic-ai-2026|Bozkurt、Crompton & Fell Kurban（2026）]]引入了**"幽灵学生"**：一种通过把 LLM（"心智"）与智能体式 AI 浏览器（"身体"）耦合而创造的数字替身，它能导航 LMS、参与内容，并以拟人模仿完成考核，使真实学习者的出席成为可选项。这创造了一个**验证缺口**，传统监考与检测在结构上无法弥合——一种随 AI 变得 [[agentic-ai|智能体式]]而增长的诚信威胁，而非仅仅生成式。

对"重新设计优于检测"最清晰的学科案例来自计算教育。对计算与 [[cs-education|编程教育]]中生成式 AI 的 72 项研究的 [[meta-analysis-systematic-review|系统性综述]]（[[kumar-genai-computing-education-systematic-review-2026|Kumar、Wongsirichot 与 Nanthaamornphong 2026]]）发现，只有**三项**研究考察 AI 检测机制——这是它整合的 14 个主题中最薄的证据基础——而课程与考核重新设计则由 25 项研究支撑。该综述把这种不平衡当作诊断而非偶然：机构基本更新了政策文件，却没有重新设计考核，多数教师处于*容忍*而非*转变*的整合层级，某一国别教师样本中有 70% 明确要求就"抗 AI 考核设计"接受培训。其建议的回应很具体：在每门课程至少一项高利害考核中加入口头成分或其他使过程可见的要素，并把与 AI 产出的批判性互动（阅读、测试、修改、解释、批评）做成学生工作中被计分、可观察的成分，而非留给学生自行裁量的愿景（[[assessment-validity]]）。

- **编造参考文献已进入已发表的计算教育记录。** [[citation-errors-hallucinations-computing-education-2026|Denny et al.（2026）]]把 ACM 数字图书馆 5,225 篇计算教育论文的 113,588 条参考文献与全部 723,930 篇出版物、15,872,533 条参考文献的语料做了比对，人工核实了 828 条可疑记录，确认 14 篇论文中有 30 条参考文献包含可证实的编造书目信息，全部发表于 2025 或 2026 年。在 SIGCSE Technical Symposium 上，核实数从 2025 年的 3 条升至 2026 年的 17 条，落在 2026 年会议论文的 2.3% 中，而幻觉参考文献在 2025 年出现在五个 SIGCSE 主办或协作的会议上。这个数字只有配上它的配重才完整：被标记的多数参考文献是良性的——229 条是 ACM 元数据不匹配而 PDF 正确，188 条是有效的书目变体——所以会议数字是一个刻意给出的下界。它落在作者身上，而不仅在 [[peer-assessment]] 身上，因为核对参考文献列表的审稿人无法核实每一条，而 [[llm]] 辅助的起草使编造一条看似可信的引用变得廉价。

- **清晰而不重新设计，会把滥用推向侧面而非移除。** [[petricini-zipf-ai-use-ethics-matrix-2026|Petricini & Zipf（2026）]]把 AI 使用画在两条轴上——学生的意图与努力对环境所提供的清晰与支持——并报告其访谈数据中最稠密的象限是*焦虑式合规*，学生在那里隐藏正当帮助（语法支持、概念解释、组织自己的想法）以避免 [[legal-issues-and-risks|错误指控]]。他们的警告是有方向的：在规则变清晰但 [[assessment]] 仍奖励速度与产品之处，意识到政策的学生会转入*高效规避*，而非转入*良性的工具使用*。[[austin-ai-agents-assignment-redesign-2026|Austin（2026）]]从作业一侧到达同一结论——当智能体在无可视推理的情况下满足每一项量表标准时，对决策轨迹（信心校准、被否决的 AI 建议、课程特定约束）评分取代了检测，她指出后者双向失准。

**诚信政策正从"谁写了这些文字"转向"谁有了这些想法"，而检测器正被重建以匹配。** IdeaLens 从大纲而非行文预测想法的来源：在 50 个按 AI 生成的方案从零写就的故事上，它把 68% 标为 AI，而 Pangram 4 为 8%、其行文训练的对照为 0%；它把 94.7% 经 AI 润色的人写文本标为人类（[[idealens-detecting-ai-ideas-2026|Rajendhran et al.（2026）]]）。其自身的伦理声明称，该输出是一个统计估计，不得单独用作 AI 使用的确证证据。

## 关联概念

- [[pedagogical-patterns]] — 为应对生成式 AI 而采用的验证序列
- [[ai-use-disclosure]] — AI 使用与披露声明
- [[assessment-validity]]
- [[ai-literacy]]
- [[ai-detection]]
- [[authentic-assessment]]
- [[assessment]]
- [[educational-policy-ai]]
- [[regulation]]
- [[ethics]]
- [[equity-in-ai-education]]
- [[cognitive-offloading]]
- [[ai-misuse-learning-harm]]
- [[reducing-ai-misuse]]
- [[misconceptions]]
- [[generative-ai]]
- [[higher-ed]]
- [[k-12]]
- [[ai-education]]
- [[legal-issues-and-risks]]
- [[social-norms-ai-use]] — 正式政策之下不成文的规则

## 关联文章

- [[ivory-psychology-assessment-integrity-2026]] — 一整个只需最小努力就能通过的心理学项目，以及放它过关的评分标准（Ivory et al. 2026）
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — 师范生在宽松政策下拒绝 GenAI；"陷阱"框架与调查–声明落差
- [[ai-agents-joyful-assessment-third-space-2026]] — AI 智能体、愉悦的考核与第三空间
- [[kumar-genai-computing-education-systematic-review-2026]] — 检测证据很薄（72 项中 3 项）；重新设计承担重量
- [[mccorkle-aligned-genai-course-policy-2025]] — 对齐的 GenAI 课程政策：由考核推导的许可与透明理由（McCorkle 2025）
- [[varia-construct-equivalent-assessment-variant-generation-2026]] — 构念等价的考核变体生成（Lee 2026）
- [[chirikov-regulate-ai-syllabi-2026]] — 教师如何在 31,000 份课程大纲中规制 AI；诚信框架式微（Chirikov 2026）
- [[biology-degree-integrity-genai-cheating-2026]] — 学生能靠作弊拿到生物学学位吗？生成式 AI 时代生物学课程成绩对学术不诚实的脆弱性案例研究
- [[gonsalves-student-non-compliance-ai-declarations-2025]] — 学生对 AI 使用声明的不合规
- [[detecting-llm-generated-text-latent-prompt]] — 检测 LLM 生成文本
- [[beyond-detection-authentic-assessment-ai-2025]] — 超越检测：AI 中介世界中的真实性考核
- [[ai-assessment-scale-reform]] — AI 评估量表与考核改革
- [[authentic-products-authenticated-processes-2026]] — 从真实性产品到被认证的过程
- [[student-rationalization-ai-writing]] — 没关系，因为……：学生对 AI 使用的合理化
- [[ethical-ai-higher-ed-game-theory]] — 伦理 AI 使用的协调博弈框架
- [[shame-guilt-ai-regulation-computing-education]] — 羞耻与内疚作为 AI 使用的社会调节器
- [[cross-cultural-student-perceptions-genai-computing]] — Alice 做错了吗？AI 使用的跨文化感知
- [[luo-dawson-value-judgments-grading-2026]] — GenAI 辅助作业评分中的价值判断：诚实、信任、效度与双向透明度（Luo & Dawson 2026）
- [[chen-zou-genai-group-assessment-agency-2026]] — GenAI 中介的小组考核中的同伴问责与原创性
- [[teichmann-detecting-undetectable-misconduct-2026]] — 检测的证据崩塌，以及程序正义、比例原则与设计的理由
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — 不完全信息下，威慑、披露与重新设计作为一项考核设计问题
- [[munoz-misconduct-allegation-evidence-2026]] — 1,162 份 GenAI 不当行为档案实际依据了什么证据，以及缺失的证据门槛
- [[wright-transcription-not-generation-2026]] — 过度包含的 AI 规则与转录–生成之分
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — 基于 AI 的数字作弊与预防式伦理教学法：183 到 27 的不当行为案例与五项学科特定重新设计（Leaton Gray、Edsall & Parapadakis 2025）
- [[coates-governing-academic-integrity-indicators-2025]] — 诚信作为治理问题：一个面向学术治理者的 130 项指标框架（Coates、Croucher & Calderon 2025）
- [[ji-student-voices-academic-integrity-scoping-2026]] — 38 项关于高校学生学术诚信与 GenAI 声音研究的范围综述（Ji 2026）
- [[li-genai-assessment-language-equity-2026]] — 为 EAL 写作者画出支持与替代之线，以及无视语言背景的规则之不公（Li 2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 针对 AI 中介评分的提示注入：不可察觉地改变成绩的隐藏指令（Humble 2026）
- [[petricini-zipf-ai-use-ethics-matrix-2026]] — AI 使用伦理矩阵：焦虑式合规，以及为何仅靠清晰会把学生推入高效规避（Petricini & Zipf 2026）
- [[austin-ai-agents-assignment-redesign-2026]] — 当 AI 智能体能完成作业时，对推理轨迹评分（Austin 2026）
- [[ai-written-admissions-essays-penalized-2026]] — AI 写成的申请文书普遍存在却受到处罚
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — 谁行动、谁知道、谁回答？生成式 AI 高等教育研究中能动性、认识责任与问责的语料辅助话语分析

- [[genai-governance-australian-higher-ed-2026]] — 划定授权边界：澳大利亚高等教育中生成式 AI 治理的比较式政策情境研究
- [[argus-academic-integrity-genai-2026]] — Argus：生成式 AI 时代的学术诚信
- [[villanueva-ai-vulnerability-assessment-audit-2026]] — 行业审计发现：持授权者与持框架者的大学在考核暴露上无差异，即协调问题的经验对应物
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar（2026）——从 LMS 痕迹早期预测 AI 辅助作弊风险，框定为学业指导而非不当行为证据
- [[reddit-genai-education-discourse-analysis-2026]] — 三年半的教育 Reddit：执法主导，诚信争议是师生互动的主要场所（Yüce et al. 2026）
