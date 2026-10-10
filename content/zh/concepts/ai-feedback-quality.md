---
title: AI 反馈质量
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:25-04:00"
connected_faqs: [ai-save-instructor-time, ai-feedback-at-scale, checking-whether-educational-ai-works]
type: concept
foundations: [ai-literacy]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, formative-assessment]
confidence: high
translation_of: concepts/ai-feedback-quality
source_updated: "2026-10-04T05:15:29-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **AI 反馈质量** —— AI 系统为学习者生成的反馈在准确性、有用性、及时性与 [[pedagogy|教学法]]价值上的表现。随着 AI 生成的反馈在教育中变得无处不在，理解是什么让反馈有效——以及它何时失效——对于确保 AI 支持而非损害学习至关重要。

## 值得思考的问题

- 什么让反馈"好"——只有准确性，还是也包括及时、具体、可操作，并与你已经掌握的内容相校准？这些之中你会最先注意到哪一个缺失？
- 研究发现，学生体验到的 AI 生成反馈与教师的相当——但可接受性并不保证 [[learning-gains|学习有效性]]。为什么感觉还不错的反馈，仍可能无法帮助你进步？
- 即便是高质量的 AI 反馈，若没有"具备反馈素养"的接收者也是无效的——研究表明，低反馈素养可能让 AI 反馈几乎无用，甚至产生负面作用。培养这种素养是谁的责任？
- 反馈质量与修改深度相关联：对学生如何与 AI 反馈互动做支架化，会把他们推向论证层面的改进，而非表层编辑。你接收反馈的方式，如何改变你对它做的事？
- 谄媚式反馈把支持与认同混为一谈——一个认可你答案而非挑战它的 AI，破坏了反馈的纠正功能。什么时候反馈需要挑战你，而不是安慰你？
- 置信度校准很重要：一个知道自己不确定的系统，比一个自信地出错的系统给出更好的反馈。一个工具应该如何向你传达它的不确定性，而你又该如何使用那个信号？

## 引言

AI 反馈质量不只是关于正确性。有效的反馈必须及时、具体、可操作，并与学习者当前的理解相校准。本知识库中的研究从多个维度考察 AI 反馈质量：准确性（反馈正确吗？）、有用性（它帮助学生进步吗？）与教学法对齐（它促进学习，而不只是完成任务吗？）。

### 反馈质量在研究中的体现

- **与人类反馈的可比性：** [[ai-generated-feedback-higher-ed|高等教育中的研究]]发现，AI 生成的反馈被体验为可接受且具支持性——与教师反馈相当。但可接受性并不保证学习有效性。一项 PRISMA 引导的 [[meta-analysis-systematic-review|系统综述]]（覆盖 2023—2025 年 42 项实证研究）同样发现，[[llm]] 评分与反馈的质量是依任务而变的——在简短、结构良好且有详细评分标准的答案上与人类评分者相当，但在复杂、开放式或 [[multilingual-learning|多语]]的工作上会退化，反馈有时过于笼统或与分数不对齐——并认定提示质量、评分标准细节、模型版本与评估语言是评分与反馈质量的主导决定因素（[[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]）。


学生感知的质量比可接受性所暗示的更为混杂：93 名本科生中有 77 人认为 AI 反馈易懂，却有 68 人认为它重复，79 人认为它自相矛盾；只有 31 人同意它能评判复杂或创造性写作，81.7% 的人对一篇占总成绩 40% 的期末论文更偏好人类评分（[[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al.（2026）]]）。
- **反馈机制的一个合并锚点。** 一项对 53 项研究的元分析发现，GenAI 反馈产出了该研究中最大的效应（g = 1.27），而成就为 g = 0.40，被归功于理解性、及时性与客观性——尽管学生可能不信任 AI 反馈，而它缺乏情感回应可能抬高认知负荷（[[genai-educational-outcomes-meta-analysis|Dong（2026）]]）。


一项受控比较把反馈组件从自适应系统中分离出来：使用同一个诊断性 [[intelligent-tutoring|辅导]]系统时，接受自动化实时反馈的学习者在四点数学评估上从 1.90 升到 3.54，而未接受者为从 1.90 到 2.85（F(1, 76) = 9.24，p = .003，d = 0.73）（[[intelligent-tutoring-mathematics-education-review-2026|Ogunsakin et al.（2026）]]）。

- **一个支持性的反馈序列仍可能损害学习。** [[sequenced-ai-feedback-learning|Cao et al.（2026）]] 发现，"鼓励 → 提示 → 正确答案"这一序列降低了后测分数（B = −0.83，p = .02），尽管它提高了被感知到的鼓励程度，且频繁的重新提交预示着更差的表现（B = −0.33，p = .001），因此投入度与满意度并不是 [[learning-gains|学习]]的代理指标。
- **反馈分类 [[benchmark|基准]]：** [[teaching-feedback-classification-benchmark|跨语言反馈基准]]评估反馈质量分类能否跨语言与教育情境迁移，并与 [[ai-ed-evaluation]] 相关联。
- **协作式反馈系统：** [[becerra-aicofe-feedback-2026|AICoFE]] 在 [[higher-ed|高等教育]]中实现并部署了基于 AI 的协作反馈，同时评估系统表现与学生接受度。
- **个性化可能编码偏差。** 在保持文章不变的情况下，把反馈条件化于学生的种族、语言或残障，使四个 LLM 都朝正向反馈偏差（过度表扬）与反馈保留偏差（实质批评更少）移动——这正是个性化反馈变成歧视的机制（[[marked-pedagogies-linguistic-bias-writing-feedback|Tan、Phalen 与 Demszky（2026）]]）。
- **自动评分反馈：** [[automated-assessment|自动评分]]与 [[formative-assessment]] 研究考察 AI 评分的 [[assessment|评估]]所提供的反馈，能否匹配或超过人类评分质量。
- **作文评分反馈：** [[cong-confidence-asag-2026|置信度感知的 ASAG]] 与 [[choi-anchor-aes-prompting-2025|基于锚点的 AES]] 探索置信度校准与 [[prompt-engineering|提示]]设计如何影响写作评估的反馈质量。
- **受证据约束、按风险自适应的反馈：** [[risk-adaptive-genai-feedback-programming-2026|Wang（2026）]] 把反馈研究通常合并评估的三个功能分离开来——预测哪种失败状态会持续、决定有限的支持容量应在何时投入、以及生成其主张始终落在已记录证据之内的反馈。在来自 215 名学生的 2,993 个失败提交状态中，一个校准过的风险模型选中了 17.8% 的合格测试状态，并捕捉到 25.2% 的已观察到的持续失败；经过一次标准化的修复处理后，544 条生成消息中有 519 条包含了全部必需组件。因此时机与 grounding 与语言质量和可检索性并列，成为评判一个反馈系统的维度。
- **酌情提供的反馈：** [[ai-assistance-discretionary-feedback|关于高等教育中 AI 辅助反馈的研究]] 考察 AI 是否提高了教师所提供反馈的数量与质量。
- **关系层抗拒被委派：** 在 21 位使用 AI 反馈工具的高校教师中，12 位改写了模型的文本，修改集中在语气与鼓励上（学生—教师关系 f = 24），而更有经验的教师点出了编辑负担、信任与误信息风险，新手教师则顺从于工具（[[learner-centered-feedback-ai|Aldino et al.（2026）]]）。
- **推动 AI 优势的是可靠供给，而非先天优越性：** [[gpt4-feedback-student-activation-2026|Geschwind et al.（2026）]] 一项为期一学期的实地实验发现，GPT-4 反馈胜过 [[peer-assessment|同伴反馈]]，因为它被*持续地*交付——几乎所有收到 AI 反馈的受访者（369/398）都同时收到文本与数字反馈，而收到同伴反馈的学生中不到三分之二什么都没收到，且许多同伴反馈是非针对性的表扬。当确实收到高质量文本同伴反馈时，同伴的结果与 AI 的相当——这表明 AI 的优势在于可靠性，而非边际上的质量。学生还把同伴反馈在感知效度与情感上评得略高（轻微的 [[trust|算法厌恶]]），却仍然更多地从 AI 中激活并学习，显示出感知质量与行为结果可能分歧。
- **质量对等可能被轮次取代。** 在一份共同的评分标准上，同伴小组的反馈在第一轮与 ChatGPT-4o 在五个维度上相当，但模型在第二轮于建设性、准确性与具体性上领先——他们把这一转变归因于与评分标准对齐的提示与练习，而非一个固定的模型属性（[[peer-group-vs-ai-feedback-2026|Li et al.（2026）]]）。
- **优势可能来自一个范例，而非纠正性反馈。** 用 AI 练习写求职信，在之后一项无辅助的任务上胜过经验丰富的人类编辑的反馈（d = .20），而仅仅浏览一封由 AI 修改过的信，就与用该工具练习效果相当，因此增益追随的是那个范例（[[coach-not-crutch-ai-writing|Lira et al.（2025）]]）。

- **来源标签与反馈质量：** [[perceptions-teacher-vs-ai-feedback-bias-2026|Mertens et al.（2026）]] 在保持内容不变的前提下，把反馈的*来源*与其质量分离开来——401 位教师对反馈信息评分，它们全部由 GPT-4-turbo 生成，却被随机标注为教师生成或 [[generative-ai|ChatGPT]] 生成；仅标签一项就移动了可信度（b = 0.21）、有用性（b = 0.47）与公平性（b = 0.48，全部 p < .001），73% 的人更偏好标注为教师的信息，t(400) = 15.55，d = 0.78。指向提供者的条目移动最多——被感知的努力（b = 1.34）与依赖意愿（b = 1.45）——而一段关于 ChatGPT 如何运作的书面解释没有改变任何东西（交互 ps ≥ .399），这指向评分者身上的 [[trust]]、[[teacher-role|职业身份]]与 [[bias-mitigation|内群体偏差]]，而非反馈本身的任何缺陷。因此感知质量可能仅因来源而被折损，即便内容完全相同——这意味着一个真正好的工具仍可能在使用的那一点上卡住。
- **来源标签与反馈质量，在学生一侧：** [[nazaretsky-feedback-source-bias-2025|Nazaretsky et al.（2025）]] 做了学生一侧的对应实验：472 名来自六门课程的 EPFL 学生在不知来源的情况下为自己作业的反馈评分，披露后再评一次，多数人无法区分两个版本（472 人中有 287 人猜对）。随后评分朝相反方向移动——在真诚性上尤其显著（p < .01）——人类提供者被评为更可信（μ = 3.28，σ = 0.77），AI 则更低（μ = 2.25，σ = 0.85，Cohen's d = 0.57）。这种误归因大多朝一个方向发生：219 例被评为低分的人类反馈中，有 205 例被读作 AI，因此感知质量与感知身份在双向地相互重塑，而非标签仅仅对相同的文本打了折扣。
- **反馈素养是采纳一侧的边界：** [[liu-deris-ai-feedback-literacy-uptake|Liu 与 Deris（2025）]] 验证了一份 **AI 反馈素养（AIFL）量表**（16 个条目、态度／实践两因素），它能预测学生对 AI 反馈的实际采纳；[[mendoza-ai-feedback-feedback-literacy-srl|Mendoza et al.（2026）]] 则表明 [[feedback-literacy|反馈素养]]调节着 AI 反馈是否改善 [[self-regulated-learning]]——高素养带来收益，低素养带来的效果极小甚至为负。反馈质量与反馈素养是同一个系统的两面：即便是高质量的 AI 反馈，若没有具备素养的接收者也是无效的。
- **反馈质量驱动修改深度：** [[rethinking-ai-writing-feedback-literacy|反馈素养脚本]]与 [[feedback-literacy-scripts-eap-writing|第二评分者机制]]表明，对学生如何与 AI 反馈互动做 [[scaffolding]] 支架化，会把修改推向论证层面的改进而非表层编辑——能促成更深修改的反馈，就是质量更高的反馈。学生*如何*处理评论也取决于评论的种类，而不只是数量。在一项为期八周的 L2 写作比较中，教师那种更宽泛、能自我调整的错误纠正带来了第一项任务上更大的增益，但一旦工作要求结构上的突破，第二项任务上便下降了约三分之一；而 [[peer-assessment|AI 辅助的同伴反馈]]那种更窄却更稳的焦点保住了自己的改进，并在第二项任务的修改均值上略微超过了教师班——作者报告这一组间差距在统计上并不显著。作者把权威性、错误密集的纠正解读为鼓励被动的、回避错误的修改，并把两种模式当作互补的 [[scaffolding|异质支架]]而非替代品（[[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang、Li 与 Luo（2026）]]）；两种模式都没有推动句法复杂性，因此反馈质量也受限于它所能作用的技能层级。
- **谄媚作为一种反馈失效：** [[ai-sycophancy|谄媚式]]反馈把支持与认同混为一谈——一个认可学生答案而非挑战它的 AI，破坏了反馈的纠正功能，即使它让人感到受肯定，质量仍然下降。[[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]] 展示了 [[intelligent-tutoring|辅导工具]]在社会压力下保留纠正性反馈的情形，而 [[contextual-sycophancy-ai-literacy|情境性谄媚]]会把错误传播到后续的建议中；有效的反馈有时必须挑战学习者。
- **诊断准确性只部分决定反馈质量——而 LLM 的 [[self-assessment|自评]]与 [[human-in-the-loop-ai|人类判断]]不对齐：** [[reddig-maclellan-personalized-feedback-llm-2026|Reddig、Arora 与 MacLellan（2025）]] 发现，GPT-4 在一个大学代数辅导工具中约 66% 的时候产出针对错误的提示，但约 35% 过于笼统、不正确或泄露了答案；即便诊断错误，模型也常常以相关、笼统但正确的反馈挽回，尽管几乎所有不正确的反馈都跟在误诊之后。他们用模拟学生做的自动质量检查，在两项测试上都只通过 21.4% 的提示，拒绝了约 70% 的针对性反馈，并偏好那些直接揭示答案的提示——这鲜明地证明了自动化的 [[ai-ed-evaluation|评估]]可能与人类对有用性的判断严重分歧，必须据此加以校准。
- **稳定的输出不等于有效的反馈。** 在 12 段 TEACH 框架的课堂视频中，信度与准确性分道扬镳——八个 LLM 端点中最稳定的那个，在面对持证专家时属于最弱之列（完全一致 0.31），且每个模型都偏重言语线索而非隐性的教学法证据，在缺少指令性言语的地方打分很低（[[melo-llm-classroom-observation-teach-2026|Melo et al.（2026）]]）。
- **AI 教学评论的语言与感知质量：** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang、Du 与 Jin（2026）]] 从词性构成、3-gram 多样性、Zipf 定律符合度、可读性、主题相关性（TF-IDF 与 BERTScore）以及学习者评分等维度，把 ChatGPT 生成的视频内支架评论与教师评论作对比。生成的评论*更*复杂、形容词更丰富，却*更*缺乏变化且更难读，在主题对齐上落后于人类评论（知识支持上 BERTScore 为 0.607 对 0.747），在被感知的时机与有用性上也落后——这表明 AI 反馈质量必须依据语言 [[accessibility]]可及性与 [[affective-computing|情感]]契合来评判，而不只是相关性。他们提出把这套分析组合作为一份可复用的 [[learning-analytics]] 管线，用于审计 AI 生成的教学内容。
- **提示设计与模型选择作为质量的可测预测因子：** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al.（2026）]] 用层级回归分解 AI 反馈质量的来源，数据来自为 153 位职前教师的备课目标生成的反馈。在四个系统变化的提示下、由三个模型生成的 240 条反馈中，仅模型一项就解释了九类质量评分中 26.9% 的方差，加入提示后把模型提升到 42.8%（ΔR² = 15.9%）；在一次使用最强模型—提示组合的复制中（345 条反馈），模型解释 18.4%，提示再解释 5.7%。最大的单一提示效应是负向的：把领域特定的技术术语替换为日常化转述，显著降低了反馈质量（β = −0.412），而在第一项研究中，加入具体示例与移除思维链指令并不显著。因此质量并不是"那个 AI"的固定属性——它由选择了哪个模型与任务如何被表述共同产出，而两者都是可教的。


风格是一个有代价的质量维度：使用同一个模型时，指令式反馈在"优先处理关键特征"与具体性上得分更高，而苏格拉底式反馈提升了理解监控——且指令式反馈伴随更高的认知负荷（[[agent-type-feedback-style-self-directed-learning-2026|Han et al.（2026）]]）。

反馈*如何被生成*也应列入那张清单。在一个面向议论文的模块化自动写作评估系统中，对 90 篇教师标注作文的有监督微调产出了不可用的反馈——微调后的 GPT-4o 在每次推理时都超出其 8,000 token 的上下文窗口，而微调后的 LLaMA-3.3-70B 输出了无法解析的 JSON——而直接提示 Claude 3.7 则在 40 篇作文上生成了 630 条微评论，教师评判其中 94.69% 是必要且有效的，使作者得出结论：对于非确定性的生成任务，提示可以胜过微调（[[wraft-automated-writing-evaluation-argumentative-2026|Labib et al.，2026]]）。

### 质量维度

AI 反馈质量横跨知识库所记录的多个维度：
- **准确性：** 反馈是否正确识别了错误与优点？（[[automated-assessment|自动评分]]、[[automated-essay-scoring]]）
- **证据的可检索性：** 系统是否真的能触达它所评判的证据？[[ai-assisted-physics-lab-report-assessment-2026|Abreu、Stari 与 Martí（2026）]] 把提交材料中存在的证据与处理后仍可用的证据区分开来——一个公式、图或单位可能被写进了报告，却从未被检索到，于是关于该标准的反馈毫无根据——这使得可检索性成为一个与准确性或校准相区分的质量维度。他们的回应是要求每项分数都引用报告中的具体证据，使任何无法回溯到文本的观察都显现为缺乏支撑。
- **有用性：** 反馈是否引导了改进？（[[feedback|反馈回路]]、[[becerra-aicofe-feedback-2026]]）
- **及时性：** 反馈是否在学习者还能据以行动的时候送达？（[[formative-assessment]]）
- **可对照客观测量验证：** 当目标是机器可测的时，反馈可以对照一次物理测量（而非一份评分标准）来检验。[[ai-feedback-violin-intonation-2026|Aksoy（2026）]] 提取了 2,208 个音符级的音分（cents）音高偏差，并把这些表格交给模型，使它的主张有了可测量的指涉。
- **偏差：** 反馈在不同学生群体之间是否公平？（[[bias-mitigation]]、[[equity-in-ai-education]]）

- **伦理与透明性：** 50 所排名最前的大学中只有 14 所对教师用 AI 做反馈有具体指引，而学生把未披露的 AI 反馈描述为"不真诚"——透明性与同意塑造反馈是否被接受，而不只是它是否准确（[[luo-eaton-ai-student-feedback-ethics-2026|Luo & Eaton（2026）]]）。
- **校准：** 系统知道自己何时不确定吗？（[[automated-assessment|置信度感知的 AI 评估]]）

- **由验证器评分的发布标准。** LearnLens 从科学准确性、清晰度与具体性上为生成的反馈打分，并迭代一个验证—修改回路，直到每项标准都越过阈值；它使用一个与生成器*相分离*的基础模型，以避免模型家族的偏差；其打分在 MSE（3.190）上比每个基线低 8–13%（[[zhao-learnlens-feedback-educators-loop|Zhao et al.（2025）]]）。
- **以学习者自己的语言可理解。** 反馈只有让学习者能跟上解释（而不只是看到标记）才能弥合差距。Kwara-STEM AI Tutor 是一个基于国家技术教育课程微调的本地化模型，它轻推学生而非直接把答案交出，并提供了一个"Clarify"功能，把复杂的技术术语翻译成约鲁巴语或努佩语，使实时纠正落在学习者自己的语言情境中（[[real-time-ai-feedback-technical-skills-2026|Muritala、Ahmed 与 Olumorin（2026）]]）。用自己的语言解释，是同步反馈有用性的一个条件，而非装饰性的附加项。
- **覆盖不等于对齐。** 六个 LLM 在三种提示策略下各自产出了七类反馈焦点中的多数，但它们在这些类型上的分布却与教师的分布相背离（最优 Jensen-Shannon 散度 0.134，最差 0.270），因此覆盖的广度与分布上的契合是两个独立的质量信号（[[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al.，2026）]]）。

### 与更宏观概念的联系

AI 反馈质量从根本上与 [[formative-assessment]] 和 [[feedback|反馈回路]]相连——高质量的反馈弥合当前表现与期望表现之间的差距。它与 [[automated-assessment|自动评分]]（生成反馈所基于的分数）、[[ai-literacy]]（学生必须批判地评估反馈质量）以及 [[cognitive-offloading|过度依赖]]（不加批判地接受 AI 反馈可能取代学习）相交。对 [[writing-education]] 而言，鉴于 AI 在写作评估中日益重要的作用，反馈质量尤为关键。

## 关联概念
- [[pedagogical-patterns]] — 质量不能预测修改：那些使 AI 反馈可用的序列
- [[formative-assessment]]
- [[automated-assessment]]
- [[feedback]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[bias-mitigation]]
- [[automated-essay-scoring]]
- [[assessment-validity]]
- [[writing-education]]
- [[higher-ed]]
- [[teacher-role]]
- [[feedback-literacy]]
- [[ai-sycophancy]]
- [[trust-calibration]]

## 关联文章
- [[ai-feedback-violin-intonation-2026]] — 对照 2,208 个机器测量的音高偏差检验的音准 AI 反馈（Aksoy 2026）
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — 评估 ChatGPT 的视频内评论：语言、语义与感知质量（Wang、Du 与 Jin 2026）
- [[luo-eaton-ai-student-feedback-ethics-2026]]
- [[coach-not-crutch-ai-writing]] — AI 写作反馈在练习信函上胜过人类编辑（Lira et al. 2025）
- [[zhao-learnlens-feedback-educators-loop]] — LearnLens: LLM feedback generation with educators in the loop (Zhao et al. 2025)
- [[melo-llm-classroom-observation-teach-2026]] — LLM 课堂观察反馈的信度与局限（Melo et al. 2026）
- [[learner-centered-feedback-ai]] — Teachers' practices and perceptions of AI learner-centered feedback (PolyFeed)
- [[ai-generated-feedback-higher-ed]] — AI-Generated Feedback in Higher Education
- [[teaching-feedback-classification-benchmark]] — Teaching Feedback Classification Benchmark
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Collaborative Feedback
- [[cong-confidence-asag-2026]] — Confidence-Aware Short Answer Grading
- [[choi-anchor-aes-prompting-2025]] — Anchor-Based AES Prompting
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Feedback
- [[sequenced-ai-feedback-learning]] — Sequenced AI Feedback and Learning
- [[eduframetrap-llm-sycophancy-educational-safety]] — 谄媚是一种教育安全风险：为什么 LLM 辅导工具需要谄媚基准
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: an AI Literacy Intervention
- [[genai-educational-outcomes-meta-analysis]]
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated writing feedback
- [[gpt4-feedback-student-activation-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — 提示工程与模型选择作为 AI 反馈质量的预测因子（Jacobsen et al. 2026）
- [[perceptions-teacher-vs-ai-feedback-bias-2026]] — 在相同 GPT-4 反馈上的随机来源标签：教师折损被归于 AI 的反馈（Mertens et al. 2026）
- [[peer-group-vs-ai-feedback-2026]] — Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[risk-adaptive-genai-feedback-programming-2026]] — A Risk-Adaptive and Evidence-Constrained Framework for Generative AI Feedback in Programming Education
- [[real-time-ai-feedback-technical-skills-2026]] — 实时辅导工具中的"用自己的语言解释"与支架式轻推：是什么让同步反馈可用（Muritala、Ahmed 与 Olumorin 2026）
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — 教师与 AI 辅助的同伴反馈：权威性错误纠正会衰减，稳定的焦点得以保持，以及学生对两者各自做了什么（Tang、Li 与 Luo 2026）
- [[nazaretsky-feedback-source-bias-2025]] — 相同反馈上"先盲评后披露"的来源标签：学生给标为 AI 的反馈更低分，并把低分的人类反馈读作 AI
- [[intelligent-tutoring-mathematics-education-review-2026]] — 数学中 AI 辅导的叙事综述：实时反馈的增益与实施条件
- [[agent-type-feedback-style-self-directed-learning-2026]] — 苏格拉底式与指令式反馈风格：理解监控对优先处理，以及认知负荷的代价
- [[when-students-prefer-ai-scoring-feedback-2026]] — 学生感知的 AI 反馈质量：易懂却重复，在技巧上受信任而在解读上不受信任
