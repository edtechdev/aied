---
title: 生成式人工智能
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-09T18:30:00-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
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

> **生成式人工智能**——能够生成文本、代码、图像及其他内容的 AI 系统，最突出的是像 GPT-4 与 Claude 这样的大语言模型。生成式人工智能是驱动当前这一波 [[ai-education|教育中的人工智能]][[research-methods-aied|研究]]浪潮的技术。

## 值得思考的问题

- 生成式人工智能按需产出流畅、自信的内容。流畅是否等于正确？你在哪里见过听起来自信却错误的输出——是什么让它难以被察觉？
- 与早期基于规则或检索的系统不同，生成式模型创造新内容，而不是检索已存的答案。这一转变如何改变风险——幻觉、过度依赖、学术诚信——与搜索引擎相比？
- 拥有 80 多篇文章，生成式人工智能是本知识库中最大的脉络，横跨导学、评估、内容生成与安全。你认为哪一种应用对学习最有前景，哪一种最危险——为什么？
- 同一项既能生成苏格拉底式教学的技术，也能产出鼓励抄袭的"正确答案陷阱"。哪些设计选择可以把支持学习的生成式人工智能与绕开学习的生成式人工智能区分开来？

## 引言

### 生成式人工智能对教育而言有何不同

与早期基于规则或检索的系统不同，生成式人工智能按需产出流畅且合乎语境的内容。这既创造了前所未有的机会，也带来了新的风险：

- **内容生成：** [[llm|大语言模型]]可以创建教学材料、示例与解释。[[book-level-synthetic-textbook-organization|合成教科书]]、[[courseblueprint-adaptive-video-generation|自适应视频]]与[[ai-generated-instructional-videos-computing-ed|教学视频]]展示了教育内容生成的范围。
- **依赖平台与语言的教案草稿。**专家对 AI 生成科学教案的[[ai-ed-evaluation|评价]]表明，内容质量既不统一也不中立。[[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu、Surmeli 与 Yildirim（2026）]]让十一位[[science-education|科学教育]]专家对照六年级工程设计学习的阶段，对 ChatGPT-4 与一个面向教育的工具（Teacher's Buddy）评分：面向教育的平台在全部八项质量标准上都优于通用平台，但 11 位专家中仍有 7 位认为教案"需经修改才能适用"。两个平台在要求为土耳其梅尔辛本地化时，用英文提示产出的教学上更丰富的内容多于土耳其语提示——一个提示语塑造教学质量的[[digital-divide|数字公平]]问题。
- **导学与对话：**[[intelligent-tutoring|AI 导学系统]]用生成式人工智能进行对话式教学。[[socratic-method|苏格拉底式对话]]与[[golrang-propact-pair-programming-2026|协作式导学]]把生成能力用于[[pedagogy|教学法]]层面的互动。
- **模拟患者与病例一致性。**来自 MeduAI-SP 平台的 4.815 条学生—AI 消息的多专家标注语料（[[ai-standardized-patient-scaffolding-medical-2026|Yang 等，2026））发现，只有约 0.68% 的 LLM 生成标准化患者回答包含明显的保真度问题，渐进式披露在约 99.3% 的患者消息中被评为临床上适当。这支持了生成式 AI 模拟患者能在结构化 YAML 脚本（qwen-max）下维持病例一致性与依赖询问、不早熟披露的断言，使其成为结果研究的足够稳定环境，而不只是可信性演示——同时系统在学习期间有意扣留诊断与[[summative-assessment|终结性]]评分。
- **评估：**[[automated-essay-scoring|作文评分]]、[[automated-assessment|自动评分]]与[[formative-assessment]]日益依赖生成式模型。[[benchmark|基准测试]]为开放式工作的这一转变提供了依据：[[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova、Benko 与 Drlik（2025）]]发现，上下文敏感的 GenAI 模型（GPTo1 与人工评分接近完美一致）在对开放式学生回答评分时显著优于早期的句子嵌入方法，后者依赖僵化的参考答案匹配，会误判措辞不同但有效的回答。[[olvet-genai-scoring-open-ended-medical-2026|Olvet 等（2026）]]把它延伸到预临床期的[[medical-education|医学]]教育，GPT-4 对开放式问题的评分与教职员达到实质性到接近完美的一致（加权 kappa 高达 0.94）——但只有在人类经三轮迭代精炼评分标准并留在环路中裁决分歧之后——而最综合、整体标准的问题停留在中等水平（κw = 0.54）。这说明生成式评估的可靠性既取决于人的评分标准工程与错误模式分析，也取决于原始模型。然而同样的流畅性并不能跨题型推广：[[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat 等（2026）]]发现 ChatGPT-5 与人工教师在客观药学考题上一致（CCC 0.935–1.000），但在简答题（≈0）与作文题（0.341–0.854）上不一致，结构化评分标准并未可靠地缩小这一差距。
- **风险：**[[hallucination-risk|幻觉]]、[[cognitive-offloading|过度依赖]]、[[cognitive-offloading]]与[[academic-integrity]]方面的担忧，尤其源自生成式人工智能的流畅性与[[accessibility]]。

- **超出输出质量之外的学习安全问题。**[[ssail-safe-sound-ai-learning-2026|Rahimi（2026）]]主张，生成式人工智能能提升学习者工作的质量，同时代劳了他们需要亲历的认知工作，因此安全应按人的发展轨迹来判断——学习安全保护能力，学习健全支持其发展——而不是按准确性、偏见或隐私。
- **效能主张衡量的是表现，不是学习。**该领域最大的估计——对 69 项研究的[[meta-analysis-systematic-review|元分析]]报告 ChatGPT 及类似工具的 *g* = 0.7——汇总的是即时任务成功，而不是延迟的、无协助的保持，所以它不是生成式人工智能产生[[learning-gains|学习]]的证据（[[genai-performance-vs-learning|Yan 等，2025））。
- **学习环境生成：**专门的生成式模型现在把一份课程简介直接变成完成的学习制品。[[cogevol-learning-environment-generation-2026|CogEvol（Tu 等 2026）]]，一个为单次生成结构化幻灯片与自包含交互式 HTML 页面而训练的模型族，中位用时 17 秒完成一张幻灯片、59 秒完成一个交互页面——取代了耗时数分钟的多次[[agentic-ai|智能体]][[scaffolding]]。可靠性通过一条把真实失败转化为 53.687 条已验证 SFT 样本、外加用于 GRPO 强化学习的混合规则加 VLM 奖励的生产管线来强制。这把生成式人工智能定位为内容创作引擎，牵涉[[teacher-role|教师]]与[[curriculum-design|课程]]生产工作流，也牵涉如何评价 AI 生成的学习环境是否功能与教学上可靠，而不只是视觉上漂亮。
- 一项教育者工具使用普查显示注意力集中在生产而非教学：图像、音频、视频与演示工具约占 211 位来自九国的教育者提名的 50 个工具的一半，而导学与聊天机器人工具构成面向教学的最小群体（[[typology-generative-ai-tools-education-2026|Bower、Torrington 与 Lai（2026）]]）。

### 本知识库对生成式人工智能的覆盖

拥有 80 多篇文章，生成式人工智能是本知识库最大的技术脉络。研究横跨效能研究（[[genai-meta-analysis-programming-learning|元分析]]）、安全担忧（[[hazra-safetutors-pedagogical-safety-2026|导学危害]]、[[eduguard-safe-rag-llm-tutor|护栏]]）与设计原则（[[instructional-guidance-genai-learning|教学指引]]）。

在 53 项研究中汇总，GenAI 辅助的教育在成绩（g = 0.40）、高阶思维（g = 0.72）、动机（g = 0.81）与写作（g = 0.76）上优于非 GenAI 方法，但游戏辅助的 GenAI 未带来显著收益（g = 0.24）（[[genai-educational-outcomes-meta-analysis|Dong（2026）]]）。

另一项仅针对动机的 42 项研究元分析给出的汇总效应更低（g = 0.764），并报告 95% 预测区间跨度为 [−0.689, 2.217]，因此动机优势对新情境而言并非可靠为正（[[genai-learning-motivation-meta-analysis-2026|Fang 等，2026]]）。

生成式 UI 是这一脉络中最新的能力：发出可工作的交互制品——滑块、可操作的模拟——而不是文字的模型。[[generative-ui-education-learning-interactives-2026|Kovshov 等（2026）]]，一个 Google Research 团队，报告现成的生成式 UI 对复杂构念尚不够教学上精确，但把学习目标分解为递进的层级化目标、并把生成包裹在批评与自我改进环路中，产出的交互制品被专家教师评为可接受。他们的是一种编排设计：教师陈述目标、批准目标并在候选模拟之间选择，于是定制[[simulation|交互式学习材料]]的约束从生产转移到规范，[[guardrails|教学护栏]]嵌入生成管线而非留给教师事后警觉。

除这些核心脉络外，近期工作把证据基础延伸到[[governance|制度]]、交互与学科情境。Qin（2026）记录了岭南大学如何把 GenAI 素养制度化为全体本科生的数字博雅转型的一部分。Chang 与 Li（2026）表明学生—AI 对话编码了与学科相关的认知[[student-engagement|投入]]，约 62% 的提示反映高阶认知要求。Neto 及同事（2026）[[meta-analysis-systematic-review|系统综述]]了情境化医疗教育中的 GenAI，发现[[prompt-engineering|提示设计]]起教学规范的作用，但很少与教学框架对齐（34.8%）或以可复现的细节报告（34.8%）。GenAI 还为基于实践的[[teacher-education|教师培训]]驱动学习者角色扮演模拟：[[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang 与 Zhang（2025）]]构建了 *Student GPT*，一个模拟[[k-12|初中生]]、持有常见比例推理[[misconceptions|误解]]的定制 ChatGPT 聊天机器人，让职前数学教师获得负担得起、针对内容的诊断学生思维练习——证据表明提示设计（有文献依据的提示可靠地引出目标概念错误，0.98 对 0.40）可以把一个现成的生成模型引导成有用的教学角色。

对[[li-language-educators-genai-review-2026|语言教育者的系统综述]]（Li 等 2026）发现，教育者最看重 GenAI 的是备课内容工作——教案、材料制作与写作支持——而对课堂实时使用犹豫，担忧集中在[[academic-integrity|学术诚信]]（抄袭与[[assessment-validity|评估效度]]）、职业替代与技术压力；采用受专业认同、教学法、技术、制度与诚信因素塑造，能力缺口映射到 episteme、techne 与 phronesis。

内容生成同样越出[[math-education|数学]]，延伸到与教师共同设计学习资源——例如为[[stem-education|无人机 STEM]]学习共同设计的教师—AI 协作[[simulation]]脚手架，保持了教学效度与情境相关性。在儿童 STEAM[[arts-design-and-media-education|艺术教育]]中，[[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo 与 Tahir（2025）]]实验量化了 ChatGPT 辅助教案相对教师生成教案的增益（专家评分中位 20.5 对 17.6，p = .002，效应大）——但同一研究记录了流畅输出对课堂生成确有真实失败模式：理想化或对日常教学不切实际的教案、遗漏儿童安全约束（例如为[[early-childhood-elementary-ai-education|幼儿]]建议雕刻刀）、以西方为中心的文化偏见，以及逻辑有缺陷或无关的图像/资源生成。其贡献是一个提示框架（角色—指令—最终目标加"四点一线"质量标准），把可靠性问题从模型能否生成，转成提示与评价标准必须如何在教学用途上约束它。[[equity-in-ai-education|公平]]导向的用途仍属探索不足；欧洲一项全女生 GenAI 创客空间倡议把两种 GenAI 工具与女性主义教学法结合，以应对计算参与中持续存在的性别不平等，分析了女生的 GenAI 生成图像与利益相关者反思。辅助与包容应用是增长中的一条脉络：[[khlaif-assistive-genai-visually-impaired-2026|Khlaif 等（2026）]]——对巴勒斯坦 21 名视障本科生的[[qualitative-research|质性]]案例研究——发现 GenAI 按个体学习画像调节节奏、内容与传递，简化复杂学术文本，并跨模态转换内容，学习者视其为补充而非替代。

- **作为小学批判性媒介素养[[pedagogical-agent|教学智能体]]的生成式人工智能。**Demir 与 Akar（2026）在一个为土耳其四年级学生设计、对接土耳其语言与社会研究课程的 18 小时批判性媒介素养项目中，把生成式人工智能工具（ChatGPT 用于反思性提问与问答，Grammarly 与 Canva AI 用于内容精炼，Padlet 用于[[peer-assessment|同伴反馈]]）分阶段嵌入 5E 教学模式，而非作为孤立附加。AI 支持组在媒介阅读（+3.50）、写作（+1.67）与总媒介素养（+5.17，均 p < .01）上取得大幅增益，组间效应量 Cohen's *d* 分别为 1.12（阅读）、1.18（写作）与 1.31（总素养），而对照组仅小幅前进。质性分析浮现批判性媒介素养成长的六个域——数字自我保护与[[privacy|数据隐私]]、有目的且负责任的媒介使用、安全沟通与边界意识、[[critical-thinking|批判性评价]]与错误信息意识、在线风险意识、媒介[[ethics]]/数字公民身份——说明了生成式人工智能如何被设计进课程，成为一个培养批判性评价而非绕开它的脚手架化教学智能体。

### 生成式人工智能在专门领域：阅读障碍支持

一项 2026 年跨学科系统综述（Dabaghi、D'Urso 与 Sciarrone，PRISMA 引导，2018–2024，n=72）发现**生成式人工智能在阅读障碍支持领域被利用不足**。GAI 研究（全部来自 2024 年）聚集为智能[[conversational-ai|聊天机器人]]、[[teacher-role|教师培训]]支持与探索性研究，并迅速超越古典[[machine-learning|机器学习]]成为首选工具——但严谨实验与现实世界验证仍基本缺失。综述的未来趋势分析指向 GAI 驱动的个性化材料与实时自适应反馈、整合眼动追踪、EEG 与行为[[learning-analytics|分析]]的[[multimodal|多模态]]诊断模型、NLP 驱动的[[intelligent-tutoring|智能导学系统]]与对话智能体，以及面向教育者的支持工具。这既说明了生成式人工智能在专门的高需求领域用于内容生成与交互支持的前景，也说明了其采用超出证据基础的风险。

## 关联概念

- [[llm]] — 支撑生成式人工智能的模型类别
- [[prompt-engineering]] — 输出如何被塑造
- [[rag]] — 检索增强的接地
- [[ai-literacy]] — 有效使用它所需的能力
- [[ai-education]] — 更广阔的领域
- [[intelligent-tutoring]] — 对话式与生成式导学系统
- [[cognitive-offloading]] — 生成式人工智能放大的过度依赖风险
- [[hallucination-risk]] — 生成内容的一项核心可靠性风险
- [[academic-integrity]] — 流畅生成带来的诚信问题
- [[automated-assessment]] — 评分与反馈中的生成式模型
- [[ai-technologies]] — AI 技术与模型的总括
- [[higher-ed]] — 一个主要部署情境
- [[k-12]] — 一个主要部署情境

## 关联文章
- [[genai-learning-motivation-meta-analysis-2026]] — 对 GenAI 学习动机效应的元分析，预测区间横跨从损害到收益

- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[generative-ui-education-learning-interactives-2026]] — Harnessing Generative UI for Education: Tailored Learning Interactives
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of GenAI learning outcomes
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI in programming learning
- [[genai-performance-vs-learning]] — Performance vs. learning with GenAI
- [[hazra-safetutors-pedagogical-safety-2026]] — Harms of AI tutoring agents
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing a safe RAG LLM tutor
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
