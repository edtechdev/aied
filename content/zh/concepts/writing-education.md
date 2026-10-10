---
connected_resources: [clarity, writing-rhetoric-studies-in-the-loop]
title: 写作
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:39:20-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
pedagogy: [metacognition]
assessment: [ai-feedback-quality, automated-essay-scoring, peer-assessment]
discipline: [language learning, writing education]
level: [higher ed]
connected_faqs: [writing-instruction-ai-best-practices, developing-ai-tutor]
confidence: high
translation_of: concepts/writing-education
source_updated: "2026-10-06T02:05:50-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **写作** —— 在写作教学中使用人工智能工具、[[assessment]]、[[feedback]]，以及研究 [[generative-ai|生成式人工智能]] 如何重塑写作过程本身。写作教育是受人工智能影响最深的领域之一，因为大模型恰恰擅长写作教学所围绕的那些活动 —— 文本生成、修改与评估。这一领域的 [[research-methods-aied|研究]] 涵盖 [[automated-assessment|自动评分]]、人工智能反馈质量、写作过程支持、第二语言写作、学术诚信，以及一个更深的问题：人工智能如何改变写作与成为写作者意味着什么。

## 值得思考的问题

- 本页的核心论断是，写作不只是产出，而是一个认知的、社会的与修辞的过程 —— 而人工智能可以取代使写作成为学习活动的那种心智工作。当你写作时，你的思考中发生了什么，是人工智能产出的一段成文段落直接抹掉的？
- 一种常见框架是“人工智能作为工具”，或相反的极端“人工智能对作者身份的威胁”。本页提供第三种观点：写作是一种能动性分布的人机纠缠。这些框架中哪一个符合你自己带或不带人工智能写作的经验 —— 而每一种框架对你如何教学意味着什么？
- 研究发现，把写作中*更深* 的层次 —— 推理与论证逻辑 —— 委托出去，对你独立写作的损害大于委托表层层次（如语法）。想一想你上一篇有人工智能协助的写作。你实际委托了哪一层，这预测了你现在独自能做什么？
- 本页警告，人工智能的写作反馈不是语言中立的：用学生的种族、语言或残障来个性化反馈，可能使反馈朝符合刻板印象的方向偏移 —— 例如过度表扬或扣留批评。如果你收到过或给出过“个性化”的人工智能反馈，你如何察觉一件工具正在为某些学习者软化它的批评？
- 这里的设计指引是“做教练，不做代笔” —— 让人工智能提问、批评提纲，但要求学习者先写出成文。为什么让学习者在人工智能介入之前先起草，能以一种替人起草的工具做不到的方式保护作者归属与判断？
- 一项发现：学生常用“没关系，因为……”来为人工智能的使用做合理化，把问题从抄袭管控推向伦理与人工智能素养。如果你在设计一门写作课程，你会如何把关于人工智能的诚实与 [[ethics|伦理]] 判断建构进课程，而不是依赖检测或惩罚？

## 引言

写作不只是产出，而是一个认知的、社会的与修辞的过程。这正是人工智能对写作教育的影响如此重大且备受争议的原因：人工智能可以是一个 [[scaffolding|支架]]，帮助学生起草、修改并获得他们原本得不到的反馈，但它也可以取代使写作成为学习活动的 [[cognitive-offloading|认知工作]] —— 以及人类读者。本知识库的研究一贯把写作中的人工智能框定为写作的社会与认知过程的*以人为本的补充*，而非替代。当焦点是**英语 specifically** —— [[english-education|学术英语（EAP）]] 与英语语言 [[teacher-role|教学]]（EFL/ESL/L2） —— 见专门的 [[english-education]] 概念页面，它区分了英语特定与学术语域的研究和一般写作及一般语言学习。

### 人工智能在写作教育研究中的体现

- **自动作文评分：** [[automated-essay-scoring]] 系统，如 [[choi-anchor-aes-prompting-2025|基于锚点的人工智能辅助评分]] 与 [[aiawe-automated-writing-evaluation|AIAWE]]，大规模评估学生写作，提出关于 [[assessment-validity|构念效度]] 与把写作还原为可测量特征的问题。对于西班牙语的简短议论文写作（约 150–200 词），人工智能评分的一致性随量规维度急剧变化（[[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al., 2026]]）：结构与语域取向的条目 —— 引言、结论、语域、名词一致性、主谓一致 —— 在 2025 版中达到了与人类评分者的中等机会校正一致性，而微观语言条目（词汇、句法、标点、连接词、论证）停留在轻微到一般的区间。这提示大模型协助对宏观话语特征最有辩护力，而低层语言规范应保留确定性工具或 [[human-in-the-loop-ai|人工复核]]。
- **评更多样本，而非更大的模型。** 在一项 3–6 年级的普遍筛查研究中，大模型比较判断分数与研究者量规收敛（r = .59–.73），把三轮筛查波平均提高了效标效度（ELA 量表 β = .68–.74，熟练度 AUC = .82–.86），而更强的模型能力或更高的成本增益甚微（[[llm-comparative-judgment-writing-screening-2026|Mercer & Reed (2026)]]）。

一致性是语料的属性，而非评分者的属性：[[automated-scoring-marketing-posts-agreement-2026|Li (2026)]] 用确定性规则、[[llm|大模型]] 与等权混合方法给 60 篇学生营销帖子评分 —— 大模型以 ICC(2,1) = .435 领先，而混合方法的 .266 保留了规则的负向偏误 —— 加入 15 个低质量锚定点把大模型抬到 .846。

- **写作反馈：** [[ai-feedback-quality|人工智能反馈质量]] 研究（[[genai-teacher-feedback-comparison|生成式人工智能与教师反馈]]、[[care-full-feedback-genai|care-full 反馈]]、[[repeated-ai-writing-feedback-semester|反复的人工智能反馈]]）考察人工智能反馈是否改善写作，以及它与人类反馈相比如何。PAIRR 模型（[[pairr-ai-peer-review-2025|同伴与人工智能评审加反思]]）把人工智能与 [[peer-assessment]] 结合，发现人工智能反馈在以人为中心的过程中最有用。一项针对 61 名中文二语写作者、为期 8 周的准实验（[[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang et al., 2026]]）给了这一以人为中心的论断一个具体形状：教师反馈给出的条目远多（第一个任务 316 对 185），并重新优先指向组织与论证，但它在修改后的优势从 4.06 降至 2.73，一旦第二个任务要求结构性改变；而 [[peer-assessment|人工智能辅助的同伴反馈]] 保持更窄、更稳的焦点并略占上风（3.89 分，任务 2 的修改均值为 89.82 对对照组的 88.35 —— 一个未达显著的微小差异）。两种模式都没有改变句法复杂度，因此作者主张一种混合的“人工智能—同伴—教师”劳动分工：人工智能负责标注错误与内容指引，同伴负责协商修改，教师负责复杂句法与论证。
- **人工智能反馈不像教师那样适应写作阶段。** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] 发现，教师在草稿阶段之间显著改变了五种反馈焦点类型 —— 表扬从初稿的 26.9% 升到终稿的 84.9% —— 而最接近的模型只在三种类型上变动，最小的则一种都没有，且没有模型复现教师对高、低表现学生的区分。
- **修改与对话性定位：** 在多数写作反馈研究问一项修改是否改善了文本之处，[[zhao-ji-appraisal-human-ai-revisions-2026|Zhao and Ji (2026)]] 问的是被修改的文本采取了什么立场。用评价理论对 168 篇 EFL 议论文编码 —— 初稿、[[peer-assessment|同伴反馈]] 后的修改、以及同一批初稿的 ChatGPT-4 修改 —— 他们发现三种条件在使用多少 Engagement 语言上统计上无法区分，但配置不同：同伴反馈的修改变得更收缩（更多 Counter 与 Endorse，更少 Entertain），而人工智能的修改保持了更平衡的 Contract/Expand 混合，把更强的反主张与持续的 hedging 结合起来。他们的解读是：人工智能的修改作为学生对照自己修改的比较文本最有用，而不是作为范本答案；且对论证的 [[ai-feedback-quality|人工智能反馈]] 可以在改善行文的同时悄悄关闭写作者的对话空间 —— 这是现有量规都不捕捉的一个维度。
- **写作过程支持与能动性：** [[agency-gap-ai-writing|能动性差距研究]] 与 [[ai-writing-support-stage-ownership-2026|阶段归属研究]] 探索人工智能如何改变从规划到修改的写作过程，以及当人工智能在不同阶段参与时学生的 [[agency]] 如何受影响。
- **后人类主义视角：** [[posthumanist-ai-literacy-2025|一种后人类主义的人工智能素养路径]] 把写作重新框定为 [[agency]] 分布的人机纠缠，既挑战对人工智能不加批判的拟人化，也挑战把它当作纯粹工具的贬斥 —— 一种关系的而非交易的人工智能素养观。
- **二语／[[multilingual-learning|多语]] 写作：** [[self-referential-l2-writing-llm-assessment|二语写作评估]]、[[genai-linguistic-diversity-academic-writing|语言多样性研究]] 与 [[ai-writing-support-stage-ownership-2026|阶段归属研究]] 处理人工智能如何支持（或约束）二语与多语写作者，包括强化标准学术英语规范的风险。本知识库最年幼的二语样本来自华东地区一项为期九周、301 名 5 年级和 6 年级学生的生成式人工智能支持的观点写作项目（[[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]），它提升了理想的二语写作自我与学业韧性，并改善了按量规评分的语言使用，但组织与总分未变 —— 人工智能支持移动的是写作的特定维度，而非写作能力整体。
- **个性化反馈中的偏误（Marked Pedagogies）：** [[marked-pedagogies-linguistic-bias-writing-feedback|Tan et al. (2026)]] 表明，[[llm]] 写作反馈工具不是语言中立的：用学生的种族、族裔、ELL 身份、学习障碍、成绩或动机来个性化反馈，会系统性地使反馈朝符合刻板印象的方向偏移 —— 包括正向反馈偏误与扣留反馈偏误（过度使用表扬、更少的实质性批评、假定能力有限），适用于被种族、语言或残障标记的学生，即便作文完全相同。这使“[[personalized-learning|个性化]]”本身成为一个偏误向量，写作反馈工具必须审计并控制它。
- **学术诚信：** 调查证据直接使管控框架复杂化：在 504 名社会学学生中（[[student-genai-use-views-writing|Kuznetsov et al., 2026]]），65% 曾为课程作业使用生成式人工智能，但只有 3% 用于生成作业文本，2% 用于产出完整草稿，而害怕学术违规是第二常见的关切（28%），约四分之一报告完全没有指引（19%）或认为指引不清楚。据此证据，写作教育的问题是允许使用上的模糊，而非广泛的文本生成。[[nash-preservice-teachers-classroom-ai-policies-2026|Nash and Burriss (2026)]] 展示了这种模糊如何在课堂层面被生产出来。对 27 名 [[teacher-education|职前]] 英语语言艺术教师自己的课堂 [[educational-policy-ai|人工智能政策]] 编码，他们发现 27 人中有 26 人允许某些 [[generative-ai|生成式人工智能]] 使用，但压倒性地在教师规定的条件下，27 人中有 22 人允许人工智能用于构思与头脑风暴，而不允许人工智能组句、成段或成文。限制很少被操作化 —— 一位参与者允许人工智能“帮你开始思考”，并宣称“界线应该划在这里”却没有说划在哪里 —— 而许多政策同时禁止提交人工智能文本，又让学生为他们提交的人工智能文本负责，这是一个使学生无法合规的矛盾。27 份政策中有 22 份对阅读完全沉默，把人工智能支持的阅读理解工作交给完全没有指引。
- **政策在五个场域上分化。** 访谈 20 名本科生，Kim 与同事们定位出五个人工智能政策场域 —— 教师意图、正式政策、学生解读、自我政策与实践 —— 并编目了 23 条合理化，多为临时与事后，解释为何一个场域上的规则很少塑造另一个场域上的行为（[[student-rationalization-ai-writing|Kim et al. (2026)]]）。
- **合规可以掩盖缺席的探究（学术抹除）。** 从 49 份教育者记述中，[[academic-erasure-complexity-ai-writing-2026|Nwagboso & Atuba (2026)]] 命名了*学术抹除* —— 满足每一条表层标准却绕过论证的认识劳动的流畅性 —— 并把它的驱动因素追溯到评估文化，在那里奖励打磨的量规使人工智能使用成为理性回应，而非不当行为。

### 写作即思考

因为写作是认知过程，写作中的人工智能研究连接到 [[cognitive-offloading]]（人工智能写作支持是否绕过思考？）、[[metacognition]]（人工智能反馈是否改善 [[self-assessment]]？）、[[self-regulated-learning]]（学生是否调节自己对人工智能反馈的使用？）与 [[ai-literacy]]（学生能否批判性地评估人工智能生成的写作？）。[[critical-thinking-genai-scaffolding|批判性思维支架]] 与 [[ai-feedback-critical-thinking-writing-2026|人工智能反馈以促进批判性思维]] 的研究表明，人工智能在写作中的 [[pedagogy|教学]] 价值取决于它是否提示反思与判断，而非替代答案。

一项对中文 EFL 学习者的两波验证（EFA N = 305；CFA N = 342）分离出六个调节维度，并加入了*环境调节* —— 检查生成的内容、筛选被建议的资源、限制依赖 —— 这是既有二语写作量表未承载的一个侧面（[[genai-srl-l2-writing-scale-2026|Wang, Zhang and Zhang (2026)]]）。

[[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] 用一个对生成式人工智能辅助学术写作中 [[cognitive-offloading|认知卸载]] 的**层次敏感** 解释深化了这一点：委托*更深* 的层次（推理、论证逻辑）与独立的无人工智能写作质量和 [[critical-thinking|高阶思维]] 的负向关联，强于委托表层层次（语法、词汇）。开放式的人工智能协作出产了支持最好的成品，却带来最差的独立结果，而带反思的有界支持保住了能力 —— 这表明生成式人工智能写作支持并非一致有害，其效果取决于学生委托了哪一层认知。

- **把人工智能输出 gate 在先前的参与上，会把努力移回写作者。** 在 398 名参与者中，[[engage-to-unlock-productive-friction-genai-2026|Su et al. (2026)]] 发现写作者写作了 28.02 分钟，而开放式聊天机器人为 23.26 分钟，随后评估段落更快（17.41 对 22.21 分钟），准确度相当且未增加任务时间。在 Chen 把代价定位在*委托了哪一层* 之处，这个设计决定的是模型*何时*才可以说话。

[[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] 把这种思考延伸到年幼写作者的*多模态* 创作。让 60 名 [[k-12|5 年级]] 学生把自己的叙事外化为人工智能生成的图像与短视频，在解读、分析、评估与解释 —— 多模态再符号化所锻炼的侧面 —— 上产生了持续的 [[self-report-measures|自陈]] 增益，但在**推断上没有增益**。把意义在视觉上显化，降低了从文本推断隐含意义的要求，正是 Chen 所描述的卸载机制；只有结构化的同伴讨论恢复了推断的契机。该研究告诫，[[multimodal|多模态人工智能]] 创作可以帮助年幼写作者反思清晰性与连贯性，却可能削去纯文本写作所保留的推断工作 —— 这是写作教师在把人工智能 [[visualization|视觉]] 与同伴 [[peer-assessment|反馈]] 配对时的一个设计考量。

一个维度特定的模式在这份文献中反复出现，它是一个有用的诊断。在小学阶段的二语写作项目中，情感与行为 [[student-engagement|参与]] 上升，而认知与元认知参与没有，作者把写作过程中自我监控的减弱命名为生成式人工智能支持的一项明确风险（[[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]）。因此，享受感与在任务活动不是更深加工正在发生的证据 —— 这与卸载研究在问学生委托了哪一层认知工作时所做的区分相同。

一项 2026 年的 [[meta-analysis-systematic-review|元分析]]（[[genai-writing-performance-meta-analysis-2026|Teng, 2026]]）分析了来自 31 项研究的 11 个研究级效应，从相反方向强化了这一诊断。它报告生成式人工智能支持的写作教学具有大幅的平均优势（g = 0.80），但异质性高到一次新的实施完全可能显示不出任何益处，而唯一稳健的调节变量是偏误风险分类，而非任何教学特征 —— 研究质量，而非教学设计，解释了大部分方差。同一综述发现，生成式人工智能在低阶特征（语法、词汇多样性、句子流畅性）上始终更强，而对论证与连贯性的高阶效应仍不一致，这恰是本页视为核心设计问题的层次差距。

### 设计人工智能写作支持：做教练，不做代笔

因为写作没有唯一正确答案，人工智能写作工具需要与可验证答案的导师不同的设计。本知识库的设计指引（见 [[developing-ai-tutor|设计人工智能导师]] 常见问题中列出的**人工智能写作教练** 实例）以保全作者归属与 [[evaluative-judgment|评估判断]] 为中心，而非产出成文：

- **追踪写作能力，而不只是作文分数。** 写作教练的 [[student-modeling|学习者模型]] 可以追踪论证（论点具体性、主张—证据对齐、反驳）、组织、证据整合、修改与风格 —— 使反馈指向跨作文持续存在的能力。
- **把反馈扎根在作业上。** 检索实际的题目提示、量规、课程阅读材料、引用与体裁规范，以及人工智能使用政策，使反馈参照具体作业，而不是发明通用期望。
- **区别对待写作阶段。** 人工智能在规划阶段的参与比在起草阶段减少感知的作者归属更少，而人工智能生成的起草造成最大的归属下降。因此教练可以在规划时提问、批评提纲，同时在起草时要求学习者先写出成文。
- **让反馈有优先次序且引发反思。** 每一轮可以给出一个值得保留的优点、一个高影响问题、一个需要写作者判断的问题，以及一个具体的修改目标 —— 而教练应当请学习者评估自己是否同意某个建议，发展 [[feedback-literacy|评估判断]] 而非服从。
- **保全作者声音，并防范同质化。** 教练应当区分错误、清晰度问题、修辞选择与风格偏好 —— 而不自动“纠正”后者，尤其对 [[multilingual-learning|多语]] 写作者与非标准修辞风格。

两项近期的综述限定了这套设计指引在实践中被遵循得如何。一项对 23 项经验性定制研究的综述（[[customizing-ai-writing-pedagogy-systematic-review-2026|Luo, 2026]]）发现，尽管目标已移向写作过程与高阶技能，主导的技术路线仍是 [[prompt-engineering|提示工程]]（23 项中有 13 项），旨在优化输出质量，而 [[learning-theories|学习理论]] 被局限于界面，使系统“基本不感知理论” —— 这一错配有助于解释同一批研究所报告的 [[cognitive-offloading|过度依赖]] 与表层修改。它的重新框定是把定制当作架构而非措辞：对阶段排序、扣留答案、并把修改循环建进去。一个结构化的五部分工作流在 53 名沙特 EFL 本科生上测试了 11 周（[[human-ai-collaboration-academic-writing-2026|Alshehri et al., 2026]]），展示了实践中的替代方案 —— 学生框定问题并设计提示、起草、修改、对照学术数据库核验主张与引用，并调节自己的依赖，记录他们接受或拒绝了什么及原因。写作熟练度与数字 [[critical-thinking|批判性思维]] 在该条件下共同上升（后测 15.23 对 11.91 与 89.84 对 56.18），而无人工智能对照组几乎未动，尽管这一单点、部分 [[self-report-measures|自陈]] 的结果是一个初步的上界，而非已确立的效应。

这种“做教练不做代笔”立场，是本知识库 overarching 的“[[coach-not-crutch-ai-writing|教练优于拐杖]]”边界在写作领域的表达：识别产生学习的认知活动（规划、起草、评估、修改），并设计人工智能去支持它而不把它从学习者那里拿走。

### 关联

写作教育连接到 [[automated-essay-scoring]]、[[ai-feedback-quality]]、[[academic-integrity]]、[[cognitive-offloading]]、[[ai-literacy]]、[[language-learning]]、[[formative-assessment]]、[[peer-assessment]]、[[metacognition]]、[[self-regulated-learning]] 与 [[higher-ed]]。这是一个人工智能的能力与风险都高度可见的领域，使它成为研究人工智能如何转变教学法、[[assessment]] 以及作者身份与 [[agency]] 之本质的富饶场域。

## 给写作教师的启示

- **把人工智能框定为写作过程的补充，而非替代。** 本知识库的研究一贯把人工智能当作起草、修改与反馈的支架，同时保护使写作成为学习活动的认知工作与人类读者 —— [[coach-not-crutch-ai-writing|教练优于拐杖]]。
- **在以人为中心的过程中使用人工智能反馈。** [[pairr-ai-peer-review-2025|PAIRR]] 发现人工智能反馈与同伴评审及反思结合时最有用；设计让教师与同伴读者保持中心的反馈循环。
- **审计自动反馈中的偏误。** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] 表明，用学生属性个性化时，大模型反馈朝符合刻板印象的方向偏移 —— 监控正向／扣留偏误，并明确个性化可能是一个偏误向量。
- **守护写作的认知工作。** 警惕绕过规划、修改与自我评估的 [[cognitive-offloading|过度依赖]]；在选定的阶段使用人工智能（[[ai-writing-support-stage-ownership-2026|基于阶段的归属]]）以保护学生能动性。
- **为赋能而非为执行而设计。** 一项对 327 名中文 EFL 本科生的 PLS-SEM 研究
  （[[empowerment-ai-assisted-deep-revision-efl-writing-2026|Li & Zhang, 2026]]）测试了写作教师实际握有的两根杠杆，发现只有一根有效。人工智能 [[prompt-engineering|提示]] 素养强烈预测感知胜任力、
  心理安全与 [[motivation|内在动机]]，这三种心理需要部分中介了它与
  深度修改参与的关联，其中内在动机是深度修改的最强单一驱动因素。外部要求完全没有直接
  效应。其实践翻译是：要求深度修改并不会产生它 —— 强制性的要求也许是
  使修改发生所必需的，但深度来自培养学生的提示能力，以及随之而来的内在
  动机与心理安全。
- **建设性地处理学术诚信。** 从管控人工智能使用转向建立 [[ai-literacy]] 与合乎伦理的使用框架，让学生使用人工智能而不造成无意的违规。
- **检测不是写作的诚信策略。** [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] 论证，检测器分数无法满足诚信案件所需的“可能性平衡”标准，而“人或人工智能”的二分误读了*借助*而非*由*人工智能创作的作品，建议机构把预算从检测与监控转向 [[authentic-assessment|评估设计]] 与 [[ai-literacy]]。

## 关联概念

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[academic-integrity]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[language-learning]]
- [[higher-ed]]
- [[metacognition]]
- [[llm]]
- [[generative-ai]]
- [[formative-assessment]]
- [[peer-assessment]]
- [[self-regulated-learning]]
- [[student-experience]]
- [[feedback-literacy]]
- [[feedback]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[assessment]]
- [[agency]]

## 关联文章

- [[nash-preservice-teachers-classroom-ai-policies-2026]] — Preservice teachers' classroom AI policies: tensions and entanglements
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[llm-comparative-judgment-writing-screening-2026]] — Validity of Large Language Model Comparative Judgment for Universal Writing Screening
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Layer-sensitive cognitive offloading in GenAI-assisted writing (Chen 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[coach-not-crutch-ai-writing]] — AI writing tools can improve writing skill despite reducing effort (Lira et al. 2025)
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[pairr-ai-peer-review-2025]] — Peer and AI Review + Reflection (PAIRR)
- [[posthumanist-ai-literacy-2025]] — A Posthumanist Approach to AI Literacy
- [[choi-anchor-aes-prompting-2025]] — Anchor-Based Automated Essay Scoring
- [[aiawe-automated-writing-evaluation]] — AIAWE: Automated Writing Evaluation
- [[agency-gap-ai-writing]] — The Agency Gap in AI-Supported Writing
- [[ai-writing-support-stage-ownership-2026]] — From Planning to Revision: AI Writing Support at Different Stages
- [[genai-teacher-feedback-comparison]] — Comparing Generative AI and Teacher Feedback
- [[student-rationalization-ai-writing]] — "It's OK Because...": The Wild West of Student Rationalization
- [[care-full-feedback-genai]] — Care-Full Feedback Approaches
- [[self-referential-l2-writing-llm-assessment]] — Self-Referential L2 Writing Assessment
- [[becerra-aicofe-feedback-2026]] — AI Peer Feedback Systems
- [[repeated-ai-writing-feedback-semester]] — Student Evaluation of Repeated AI Feedback
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge: Narrative Drafting Scaffolding
- [[ai-feedback-critical-thinking-writing-2026]] — Using AI-Generated Feedback to Improve Critical Thinking
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: linguistic biases in personalized automated writing feedback
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[academic-erasure-complexity-ai-writing-2026]] — Academic erasure: the disappearance of complexity under AI-supported writing
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: constraint in AI-supported writing (Konradt, Boote & Taub 2026)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing (Lu et al. 2027)
- [[student-genai-use-views-writing]] — Student use of and views on GenAI for writing (Kuznetsov, Sheely & Baker 2026)
- [[genai-writing-program-primary-l2-motivation-engagement]] — A GenAI-supported writing program for primary L2 motivation, engagement and performance (Lu et al. 2026)
- [[automated-scoring-marketing-posts-agreement-2026]] — Agreement and error in automated scoring of student marketing posts
- [[empowerment-ai-assisted-deep-revision-efl-writing-2026]] — Prompting literacy and intrinsic motivation drive deep revision while external mandates have no direct effect (Li & Zhang 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — Teacher feedback vs. AI-assisted peer feedback as heterogeneous L2 scaffolds in an 8-week quasi-experiment (Tang et al. 2026)
- [[genai-writing-performance-meta-analysis-2026]] — Meta-analysis of GenAI writing performance: large pooled effect, fragile magnitude, methodology over pedagogy (Teng 2026)
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — Systematic review of AI writing customization and the theory–design mismatch (Luo 2026)
- [[human-ai-collaboration-academic-writing-2026]] — Structured human–AI collaboration in academic writing and digital critical thinking (Alshehri et al. 2026)
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Human and AI revisions of the same draft take different dialogic stances: peer feedback closes dialogic space, AI revision keeps it balanced (Zhao & Ji 2026)
- [[engage-to-unlock-productive-friction-genai-2026]] — Engage-to-Unlock: gating AI output on prior engagement redistributed effort to writing without costing time or accuracy (N = 398)
- [[genai-srl-l2-writing-scale-2026]] — A six-dimension GenAI-SRL scale for L2 writing, with environmental regulation (tool governance) as a distinct dimension
