---
connected_resources: [process-feedback]
title: 人工智能检测
created: "2026-05-29T10:44:35-04:00"
updated: "2026-10-09T18:39:21-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment, assessment-validity, process-oriented-assessment]
ethics: [equity-in-ai-education]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reduce-ai-cheating, ai-guidance-children-under-13]
institutions: [educational-policy-ai]
translation_of: concepts/ai-detection
source_updated: "2026-10-04T02:59:54-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **人工智能检测（AI detection）**——用来识别学术提交中人工智能生成内容的[[ai-technologies|技术]]与方法，以及一个更宽的问题：机构应如何应对学生使用大语言模型（LLM）生产并非出自其本人之手的作业这一风险。它涵盖基于分类器的方法、潜在提示与似然技术、水印和文体分析——并且日益涉及关于检测之限度的争论，以及重新设计评估而非加以监管的价值。

## 值得思考的问题

- 如果一款人工智能检测器把一篇学生论文标记为人工智能生成，你对这一标记正确的把握有多大——在据以行事之前，你想看到什么证据？
- 有一种论证认为，人工智能检测不仅不可靠，而且在概念上就不成立："人机二元对立"忽略了学生的作业通常是*借助*而非*由*人工智能生成的。如果作业是混合的，"检测人工智能"究竟意味着什么？
- 检测工具可能对非母语写作者有偏见，产生不公平地惩罚学生的假阳性。你会如何权衡[[legal-issues-and-risks|错误指控]]的风险与抓住真正滥用之举的价值？
- 检测可能破坏而非保障诚信，营造一种侵蚀信任的猜疑氛围。被注视，如何改变你或一名学生在评估中的行为？
- 研究表明，检测应当是一种有限的、依情境而用的工具，而非首选策略，评估设计应当承认人工智能的角色。有哪些检测之外的替代方案，能更好地验证一名学生实际学到了什么？
- 人工智能检测器无法在真实提交物上被独立验证——被标记的文本是否真的由人工智能生成，没有基准真相。在诚信调查中依一个不可验证的概率行事，你有多自在？

## 引言

人工智能检测处于[[academic-integrity]]、[[generative-ai]]、[[llm|大语言模型]]与[[assessment]]的交汇处。它源于机构面对学生用大语言模型起草论文、代码和简答。这一领域有两条交织的线索：**技术性检测**（人工智能生成的内容能被多可靠地识别出来？）与**制度性回应**（鉴于其限度与公平问题，检测应当导致什么？）。

## 检测方法

知识库的研究说明了主要的技术家族：

- **零样本似然 / 潜在提示方法：**[[detecting-llm-generated-text-latent-prompt|EchoPrompt]]是一款无需训练的零样本检测器，它利用机器生成文本固有的潜在提示依赖性。通过恢复一个通用的助手回复前缀，并测量指令微调模型与基础模型之间的似然增益差异，它在不训练的情况下达到最先进的检测水平，且在领域偏移与改写攻击下保持稳健。这与忽略生成机制的纯概率统计检测器形成对比。
- **大语言模型自检测：**[[llm-detecting-llm-generated-content-education|Leinonen 与 Denny（2026）]]测试大语言模型能否可靠地检测自己生成的内容，覆盖编程、反思性写作和简答任务。检测被证明**高度依赖任务**：对编程和较长的反思性回复可靠，但对简答很差——大语言模型常把自己的输出判为比真实学生作业*更像*人写的。提示的微小变动会急剧降低准确率。
- **基于分类器与水印的方法：**统计分类器和水印在商业工具中被广泛部署，尽管随着大语言模型输出日益精致，其可靠性备受争议。
- **以观点来源（idea provenance）而非文字来源为准：**[[idealens-detecting-ai-ideas-2026|IdeaLens]]给分类器喂入的是话语角色提纲与改写后的内容，而非原文，从而预测一份文档承载的是谁的观点。随着人工智能撰写文本背后的人类计划越来越详细，其人工智能标记率从 94.9% 降到 6.8%，而 Pangram 4 保持在 92% 附近；它把 94.7% 的"人工智能润色过的人类文档"标为人类。作者声明其预测是统计估计，绝不可单独用作人工智能使用的确凿证据。

## 检测的限度与风险

研究一贯告诫不要单独依赖检测：

- **效度与公平的失败：**检测工具可能对非母语写作者有偏见，产生不公平地惩罚学生的假阳性，这一关切连接到[[bias-mitigation]]与[[equity-in-ai-education]]。
- **显著的错误率与信任侵蚀：**不可靠的检测破坏学生[[trust]]和评估过程的诚信。
- **任务依赖性：**如自检测研究所示，准确率因任务类型而剧烈变化，因此没有单一检测器在所有评估中都可依赖。
- **即便一个经验证的检测器也以历史基线为基：**一项为期六年的 CS2 研究对照前大语言模型基线验证了其检测器：H 分数在大语言模型公开前接近于零，到 2026 年上升到均值 11.9（[[argus-academic-integrity-genai-2026|Racovan 等（2026）]]）。
- **被量化的诚信两难。**[[karr-ai-detection-humanization-2026|一项对 642 篇已发表摘要的对照研究（Karr 等，2026）]]显示，[[educational-policy-ai|政策]]失败不只是概念性的，而且已被测出：符合规范的轻度人工智能编辑被标记的比例为 38–80%，未经修改的近期原创文本为 9–15%（非 STEM 远高于 STEM），而经"人性化工具"处理的人工智能文本有 >96% 逃避检测。由于检测器盯的是表层文体（长词元与学术词汇密度）而非作者意图，诚实的人工智能协助招致处罚，而刻意的人性化规避却溜之大吉——作者主张，检测器分数绝不应当作独立的 misconduct（不当行为）证据。

最新的实证评估把这些错误率变得具体而非笼统。[[hadra-ai-detector-accuracy-efl-2026|Hadra、Cambridge 与 Mesbah（2026）]]在一个由真实 EFL 课程作业、专业写作、人工智能输出与 50/50 混合文本组成的、经平衡的 192 篇语料上运行 Turnitin 与 Originality：宏平均准确率分别只有 0.69 与 0.61，两者都低于 0.55 的宏平均 F1，且对混合文本实际上毫无用处（Originality 的灵敏度为 0.02），随文本变长准确率显著下降，在科学写作上再次下降，并对正当的 EFL 学生作业表现出接近显著的误分类倾向。[[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer、Van Droogenbroeck 与 Spruyt（2026）]]用一个有基准真相对照的 160 篇硕士论文语料测试了四款商业工具：其中三款（Turnitin、GPTZero、Copyleaks）对完全由人工智能生成的论文几乎完全失效，只有 Pangram 表现令人信服——而当它被用于 1,163 篇真实提交的论文时，标记了其中 45.5%，作者坚称这不是一个发生率，因为真实提交没有基准真相。两项研究得出同一个程序性结论：检测器分数可以提示更仔细的审查，但它不是一个发现。校准问题也反向成立：由于 GPTZero 的高置信标签在 2020–2022 年带有 0.7%、0.5% 与 1.4% 的申请人级别假阳性率，[[ai-written-admissions-essays-penalized-2026|Isley、Gaebler 与 Goel（2026）]]把它的标记解读为一个美国公共政策硕士项目六轮招生周期中的保守发生率序列——至少提交一篇被标记论文的申请人比例，在签署禁令的情况下仍从 2023 年的 21.8% 升至 2024 年的 45.1%、2025 年的 56.1%，国际申请人达 69.3%，本国申请人为 38.6%。人类审读者是更弱的工具：五位招生官区分 50 篇人类论文与 50 篇人工智能论文，达到 AUC 0.70（95% CI [0.65, 0.75]），高于随机但远低于商业检测器。

即便一款表现良好的可解释检测器，也把它的错误保留在文档层面。[[detecting-gpt-assisted-writing-stylometric-2026|Kumar、Siddiqui 与 Fuchsberger（2026）]]用九个可解释的文体测量特征——类符/形符比、hapax 比、词熵、非停用词比、词性比与句长变异性——训练了窗口级分类器：90 名参与者先独立撰写同一批提示，再通过改写 GPT 输出来写作，把每位参与者的所有窗口保持在同一折中，并在 18 位未见过的写作者上测试。随机森林在 36 篇留出文档上达到 ROC-AUC 0.870 与 F1 0.842，却把 18 篇独立撰写的文档中的 4 篇标记为 GPT 辅助，假阳性率 22.2%（95% CI 9.0–45.2%）；[[explainable-ai|SHAP]]归因把最大权重给了 hapax 比。作者把这个模型框定为决策支持，应当促使依情境的审查，而非自动的不当行为筛查；而它确实达到的准确率，并不降低其错误的分量——每一个假阳性都是一篇被指控受过 GPT 协助的独立撰写文档，这是一个效度问题而非调参问题。

定义性与程序性的问题与统计性的问题并存。[[wright-transcription-not-generation-2026|Wright（2026）]]论证，对"人工智能使用"的一刀切禁令是围绕平台身份而非功能起草的，因此连非生成性的格式转换——语音转文本听写、OCR、纯文本转 LATEX——也一并被禁，更不用说它们本意要禁止的生成式起草；由于检测器把低困惑度写作读作机器作者身份，由此产生的假阳性对残障学生与[[equity-in-ai-education|公平]]上处于弱势的学生打击最重。[[sharma-judgment-visible-genai-assessment-2026|Sharma（2026）]]得出了同一结论的设计侧版本，把检测最多定位为诚信基础设施的一个补充层，因为它只问"是否使用了生成式人工智能"，而不问"决定是如何做出的"。

检测研究还承载着一个比准确率之问更持久的效度论证。[[weidlich-inference-at-risk-assessment-validity-2026|Weidlich（2026）]]把检测器输出当作一个条件的、概率性的信号，它可以促使进一步探究，但本身既不能确立 misconduct（不当行为）也不能确立胜任力，这使以检测为中心的治理成为维护[[assessment-validity|评估效度]]的不充分基础。分类表现随工具、任务类型、学科、模型版本和人机编辑实践而系统变化，公式化的 STEM 写作尤其易受算法偏见之害。那么，试图通过检测来恢复评估安全性，就有引入构念无关方差的风险，威胁公平与分数的解释。

## 为何不要（或尽量不要）使用人工智能检测器

[[bassett-ai-detectors-education-2026|Bassett 等（2026）]]论证，生成式人工智能检测在教育中根本**不应被使用**，其理由超越了"谨慎为上"而到了"这在概念上就不成立"。他们的论证整合了反对依赖人工智能检测器的理由：

1. **不可验证的概率估计。**人工智能检测器输出的是"文本由人工智能生成"的概率，依据是语言学标记（困惑度、突发性）。与别的概率工具（垃圾邮件过滤器、医学诊断）不同，它们的结果**无法被独立验证**：在现实条件下，被标记文本是否真的由人工智能生成没有基准真相，因此验证沦为循环论证。信号检测指标（假阳/假阴率）只在受控测试中适用，不适用于真实提交物。
2. **训练与测试数据可疑。**检测器在生成式人工智能之前的人类写作上训练与验证（例如 Turnitin 用 70 万篇 2019 年之前的论文测试）。这类文本反映了当代学生写作——而学生如今是在被人工智能塑造的情况下写作的——这一假设未经验证，且表现随模型、提示与平台而变。
3. **"语言学标记彼此互斥"是一个有缺陷的假设。**没有原则性的理由说人不能以归于人工智能的语言学特征写作（或人工智能不能以人的特征写作），因此标记的基础本身就不牢。
4. **虚假的二元对立。**把文本分类为"人写对人工智能生成"忽略了学生的作业常是*借助*而非*由*人工智能生成这一现实——一个混合的连续体。这种二元对立不仅不充分，而且没有意义，使检测从一开始就在概念上有缺陷。
5. **程序性不公与证据不充分。**学术诚信调查必须达到"盖然性权衡"（balance of probabilities）标准；人工智能检测器分数——无论单独还是与语言学标记、文体比较、大语言模型的说法或学生的沉默相结合——都达不到该标准。受调查的学生也保有沉默权，而检测驱动的程序侵蚀之。
6. **安全与隐私风险。**检测器把学生作业存储在服务器上（有时在海外、[[privacy]]保护更弱之处），带来泄露、滥用与商业剥削的风险。
7. **检测破坏而非保障诚信。**依赖检测器与监控会营造猜疑氛围，侵蚀学生[[trust]]与评估本身的诚信。

Bassett 等得出结论：人工智能检测是一个无法成立的问题的一个不可行的解法——这个问题不可能通过监控与惩罚来解决；焦点必须转向承认人工智能在学习中的角色、并承认无监督评估无法被保密的[[assessment|评估设计]]。这整合了知识库的[[beyond-detection-authentic-assessment-ai-2025|超越检测]]立场，为让检测工具退场提供了一个直接的、以证据为基础的论证。

在涵盖 16 种类型的 40 项心理学评估中，有 36 项（90%）产出的 ChatGPT 输出被判为足以及格，而四项失败的都是需要现场出席、视觉制品或学生自有数据集的任务——证据是：决定人工智能作业是否算作学业成就的，是及格边界而非检测（[[ivory-psychology-assessment-integrity-2026|Ivory 等（2026）]]）。

### 检测器偏见与军备竞赛的机制

检测不只是不精确，它的错误是有模式的。[[teichmann-detecting-undetectable-misconduct-2026|Teichmann（2026）]]汇集了反对把检测器分数当作证据的累积理由：在最全面的早期[[benchmark]]中，没有任何工具达到 80% 准确率；简单的改写或"人性化"大致把这一水平再砍半；在现实基准率下，假阳性超过真阳性；非母语英语使用者被系统性地误分类，因为被检测器当作人工智能信号的那些特征，同样刻画了有能力的第二语言写作。由人判断也补不上这个缺口——专家级与新手级的评分者都无法区分人工智能与学生散文，且在犯错时都自信满满；而错误的不对称意味着粗心但诚实者被抓住，蓄意不诚实者却溜掉——因为检测器还是不透明的（无阈值、无训练数据、无独立复制），因而在听证会上无法被质询或盘问。

另两点使实践风险更为尖锐。第一，随着模型被优化得越来越像人类散文，底层统计信号不断缩小，因此这场军备竞赛是机构无法取胜的。第二，实证的极限案例很刺眼：在一项隐蔽的现场研究中，94% 完全由人工智能生成的提交物，在五个心理学模块的实时在线[[summative-assessment|考试]]系统中未被察觉地通过，而且人工智能作业的平均得分高于真实学生。[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed 与 Temimi（2026）]]补充了那个反直觉的推论，它决定了监控何时才划得来：因为提高灵敏度会同时提高假阳与真阳，理性的威慑是*区分度*——标记隐蔽使用与标记正当作业之间的差距。当额外灵敏度带来的新假阳性多于新真阳性时，更多监控会使隐瞒相对更具吸引力，惩罚诚实学生比识别隐蔽使用者更快。其设计后果是：检测器、规则与披露程序不应被分开建设。

- **五款工具、一份手稿、互不相容的答案——以及已经停用它们的机构。**[[angelier-ai-detection-pitfalls-inclusive-assessment-2026|Angelier（2026）]]在同一天把一份人类撰写的手稿提交给五款商业检测器，得到的分类从"0% 人类"（Winston AI）一直到"人类生成"（GPTZero 的分类标签，印在它 42% 的人工智能数值旁边），Copyleaks 为 80.4% 人工智能，Originality.ai 为"81% 可能为人工智能"，第五款工具为 34% 人工智能 / 66% 人类——同一文本上，三个输出偏人工智能、两个偏人类，而把跨专有系统的多数投票当作来源证据并没有经验证的依据。同一论文还记录了机构层面的退却：Vanderbilt 于 2023 年 8 月停用了 Turnitin 的人工智能检测器，其算盘是约 75,000 篇论文上 1% 的假阳性率；Curtin University 于 2025 年宣布类似停用；University of Waterloo 在 2025 年 9 月停用 Turnitin 的人工智能检测功能，此前一次内部审计中人类撰写的作业被判为 100% 人工智能生成；University of Cape Town 自 2025 年 10 月起停用人工智能分数；University of the Free State 于 2026 年 7 月跟进；University of the Witwatersrand 报告称从未采用过此类工具；而纽约一家法院撤销了一项以检测器分数为依据的 misconduct 裁定。两项程序性发现完成了这个案例：一份严重损坏的 PDF 提取件仍返回了距干净文本结果仅五个百分点的分类；而一份存档的检测器输出能确立某个界面报告了什么，却无法复现产生它的专有模型状态。
- **检测器输出是卷宗里最弱的证据，而证据质量并不决定案件结果。**在对 1,162 项生成式人工智能 misconduct 指控的编码中，检测器输出获得的证明力评分最低，到 2025 年降至各项目的 0.5%。证据质量与结果无关，因为该流程未设任何证据门槛（[[munoz-misconduct-allegation-evidence-2026|Munoz 等，2026]]）。
- **学生为了在检测中存活而改动的是作业本身，而不只是答案。**该报告记录了学生为避免错误指控而把自己的答案改得平庸，以及教师一旦市售检测器被证明不可靠就退回非正式判断——他们称之为 AI-DAR（[[tench-ai-policy-isnt-a-playbook-2026|Tench、Weinstein 与 James，2026]]）。

## 超越检测：评估重构

知识库中的一个关键主题是：检测应当是一种**有限的、依情境而用的工具——而非首选策略**。[[beyond-detection-authentic-assessment-ai-2025|Kickbusch 等（2025）]]论证，监控与检测**误诊了问题**：在一个人工智能中介的世界里，真实性无法靠监管被逼出来；它必须被重新设计。他们把真实性重构为在人工智能被预期、被声明、被细查之处被建构出来的东西，并提供学科中立的学习设计模式，把人工智能定位为协作者而非作弊应用。这把检测连接到[[authentic-assessment]]、[[assessment-validity]]、[[responsible-assessment-ai-era-stanford-2026|负责任的评估]]与[[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|共同作者诚信]]。

建设性的问题从"我们如何阻止学生使用人工智能"转向"我们如何让他们在镜像其未来工作的情境中，深思熟虑地、负责任地、有效地使用人工智能"。因此，检测连接到[[ai-literacy]]（帮助学生[[reducing-ai-misuse|负责任地使用人工智能]]）、[[cognitive-offloading|过度依赖]]（理解人工智能的使用何时破坏学习），以及支持真实学习而非监管提交物这一更宽的目标。它还连接到学生侧的现象，如[[student-rationalization-ai-writing|学生对人工智能写作的合理化]]，以及[[socially-fluent-ai-identity-detection]]中的身份–检测难题。

- **可检测性是作业设计的属性，而不只是检测器的属性。**[[student-llm-code-detection-cs1-2026|Ye 等（2026）]]发现，生成代码的跨模型一致性为 87.79–88.14%，但在约束严格的函数上，每 1,000 个文件只有 1–14 个不同的抽象语法树，而 2021 年的学生提交中为 151–804 个。

## 对人工智能教育的启示

- **检测是依情境的：**机构应少用检测工具，并清楚其错误率、公平限度与任务依赖性——而非作为自动的、独立的关卡。
- **评估设计比监管更重要：**投资于[[authentic-assessment|真实性]]的与[[process-oriented-assessment|基于过程]]的评估——其中人工智能的使用被预期、被声明——比单靠检测更有效地解决诚信问题。
- **公平与平等：**惩罚非母语写作者或产生假阳性的检测工具，有放大既有不平等的风险。
- **人工智能素养是互补的：**帮助学生理解恰当的人工智能使用与[[ai-misuse-learning-harm|有害的人工智能使用]]之别，比依赖监控更有成效。
- **检测可靠性的告诫。**一项关于人工智能与学术诚信的[[meta-analysis-systematic-review|系统综述]]得出结论：抄袭/人工智能检测工具不能靠它们来识别人工智能生成的内容，应与多种评估方法和人工审查配合使用——这再次确认检测是一种有限的、依情境而用的工具。（[[ssaho-ai-academic-integrity-review-2025]]）
- **超越检测：对话胜过监控。**一份关于 Grand Canyon University 学习验证框架的实践者叙述（[[best-response-student-ai-dialog-2026|Mandernach，2026]]）论证，对[[student-ai-interaction|学生的人工智能使用]]最好的回应是对话而非检测。由于检测器不可靠（且对非母语写作者有偏见），GCU 不再问"学生是否用了人工智能"，而是请学生在一段简短对话中展示理解——这是[[authentic-assessment|评估重构]]的延伸，它把检测当作死胡同、把验证当作好的教学。
- **依赖跑在信心前面，代价是教学。**在一项对 20 位高等教育专业人士的调查中，15 人报告其机构重度依赖人工智能检测软件，而只有 4 人对它表示信心；受访者描述了来自"监管"的"教学倦怠"（pedagogical burnout），它挤占了教学设计与学生辅导（[[evaluation-age-ai-output-evidence-2026|Chowdhury 与 Khan（2026）]]）。

## 关联概念

- [[academic-integrity]]
- [[llm]]
- [[generative-ai]]
- [[assessment]]
- [[assessment-validity]]
- [[authentic-assessment]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[higher-ed]]
- [[ai-education]]
- [[legal-issues-and-risks]]

## 关联文章

- [[tench-ai-policy-isnt-a-playbook-2026]] — 一项关于美国教师与校长的人工智能政策覆盖度、能动性与五种课堂打法（plays）的全国代表性调查（Tench、Weinstein 与 James，2026）
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the Age of AI
- [[best-response-student-ai-dialog-2026]]
- [[detecting-llm-generated-text-latent-prompt]] — EchoPrompt：潜在提示恢复检测器
- [[ivory-psychology-assessment-integrity-2026]] — 检测是错误的杠杆：及格边界决定了人工智能作业是否被评为学业成就（Ivory 等，2026）
- [[llm-detecting-llm-generated-content-education]] — Evaluating LLMs for Detecting LLM-Generated Content
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Authentic Assessment
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible Assessment in the AI Era
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Coauthorship Integrity and Assessment Validity
- [[student-rationalization-ai-writing]] — Student Rationalization of AI Writing
- [[socially-fluent-ai-identity-detection]] — Socially Fluent AI Identity Detection
- [[ssaho-ai-academic-integrity-review-2025]] — 对基于人工智能的抄袭/人工智能内容检测可靠性的综述
- [[bassett-ai-detectors-education-2026]] — 我们赢则你输：教育中的人工智能检测器（Bassett 等，2026）
- [[teichmann-detecting-undetectable-misconduct-2026]] — 检测器输出为何不能支撑 misconduct 裁定
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — 要看区分度而非捕获率，以及监控何时反噬
- [[hadra-ai-detector-accuracy-efl-2026]] — Turnitin 与 Originality 在 192 篇文本上：两者均低于 0.55 的宏平均 F1，对混合写作近乎无用
- [[van-vlasselaer-ai-detector-reliability-2026]] — 四款检测器对 160 篇有基准真相的论文；只有 Pangram 表现合格，却标记了 45.5% 的真实论文
- [[munoz-misconduct-allegation-evidence-2026]] — 检测器输出是 1,162 个真实 misconduct 案例卷宗中评分最低的证据类型
- [[wright-transcription-not-generation-2026]] — 一刀切的"人工智能使用"规则把转写与生成混为一谈
- [[sharma-judgment-visible-genai-assessment-2026]] — 检测被降格为可见判断之后的补充层
- [[weidlich-inference-at-risk-assessment-validity-2026]] — 检测作为条件性信号，以及安全回应为何引入构念无关方差（Weidlich，2026）
- [[ai-written-admissions-essays-penalized-2026]] — 人工智能撰写的招生论文很普遍却受到惩罚
- [[detecting-gpt-assisted-writing-stylometric-2026]] — 九个可解释的文体测量特征：ROC-AUC 0.870，但 18 篇独立撰写的文档中有 4 篇被标记（Kumar 等，2026）
- [[angelier-ai-detection-pitfalls-inclusive-assessment-2026]] — 一份人类手稿、五款检测器，从"0% 人类"到"人类生成"的分类，外加有记录的机构弃用检测之举（Angelier，2026）
- [[argus-academic-integrity-genai-2026]] — Argus: Academic Integrity in the Era of Generative AI
- [[student-llm-code-detection-cs1-2026]] — 大语言模型生成的代码在约束严格的作业上收敛（每 1,000 个文件 1–14 个 AST 形态）而在自由作业上不收敛——可检测性随任务设计而定
