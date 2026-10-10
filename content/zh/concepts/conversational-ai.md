---
title: 对话式人工智能
created: "2026-08-22T04:44:37-04:00"
updated: "2026-10-09T18:39:26-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, pedagogical-agent]
confidence: medium
translation_of: concepts/conversational-ai
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

> **对话式人工智能（CAI）智能体**——由 AI 驱动的语音或文本智能体，模拟并自动化对话，从基于规则的聊天机器人到 NLP/ML 与[[multimodal]]基于 LLM 的助手——是教育中被最广泛使用的 AI 界面之一，因其在[[teacher-role|教学]]、心理与元认知方面的支持而受重视，即便技术、认知与[[ethics|伦理]]方面的顾虑持续存在。

## 值得思考的问题

- 当你使用过一个聊天机器人或 AI 助手时，你把它当成老师、搜索引擎，还是别的什么？这种框定如何塑造了你从它那里真正学到多少？
- 对话式人工智能描述的是一个智能体*如何*说话，而不是它被造来做什么。一个聊天机器人可能只是对话式的、却在教学上一无是处吗——什么能告诉你两者的区别？
- 一项研究发现，预测学生是否愿意并能够使用聊天机器人的是 AI 素养——而非一般的技术娴熟度。为什么"懂 AI 如何运作"可能比"会用电脑"更要紧？
- 一个原生的通用聊天机器人会通过立即作答而短路推理，而一个结构化的导学系统则通过扣留答案保全生产性挣扎。什么样的设计选择决定了学生遇到的是哪一种智能体？
- 使用法律课程聊天机器人的学生有三分之一的交互发生在工作时间之后——证据表明 24/7 可用性是一项真实的好处。但全天候访问是否也带着你希望设计防范的风险？
- 在一项研究中，采用聊天机器人的最大障碍是一个设计糟糕的弹窗，而非不信任或对学术诚信的担忧。这说明教育 AI 的投资究竟会在哪里失败？

## 引言

对话式人工智能（CAI）是承载口头或书面对话的 AI 驱动智能体的总括术语，最常见的形式是聊天机器人，以及较新的[[generative-ai|生成式]][[llm]]助手，如 ChatGPT、Claude 与多模态的教育化化身。现代 CAI 智能体分为基于[[machine-learning]]的、基于 NLP 的以及混合的几类，其中文本型智能体在教育中最普遍。作为学习工具，它们充当[[intelligent-tutoring|智能导学系统]]、[[feedback]]提供者、[[student-ai-interaction|交互伙伴]]与行政助手——与[[pedagogical-agent|教学法智能体]]重叠，而横跨更广的一组应用。

## 对话式人工智能在本知识库中的呈现

**一项总括综述的综合。** [[conversational-ai-agents-umbrella-review-2026|CAI 智能体的总括综述]]（34 篇综述文章）显示，CAI 的使用集中在教学与学习支持（97.1% 的综述）、心理与动机支持（91.2%）以及[[metacognition|元认知]]与个人发展（88.2%），而行政支持、[[research-methods-aied|研究]]管理与健康照护教育则落后。该综述记录了人—AI 关系方面的顾虑跨越所有 CAI 世代持续存在，[[academic-integrity]]与数据[[privacy]]是较新的伦理议题，并呼吁以 HCI 为根基、基于证据的设计，以及更强的[[ai-literacy]]支持。

**从聊天机器人到导学智能体。** 本知识库追溯 CAI 从基于规则的 FAQ 聊天机器人向[[intelligent-tutoring|导学取向的]][[pedagogical-agent|智能体]]的演化。[[conversational-ai-tutors-framework|对话式 AI 导学系统框架]]论证，成熟的 ITS[[ai-technologies|技术]]（[[knowledge-tracing]]、情感检测、[[student-modeling|学生建模]]）应当锚定生成式导学系统，而[[generative-ai]]提供灵活的对话。关于[[measuring-llm-tutors-teach-vs-solve|LLM 导学系统是教还是解]]与[[stanford-evidence-base-ai-k12-2026|导学专用 AI vs. 通用 AI]]的研究表明，精心设计的[[guardrails]]是要紧的：原生的通用聊天机器人可能短路推理，而结构化的导学系统保全[[desirable-difficulties|生产性挣扎]]。

基准测试可能高估脚手架被采纳的程度：在九个数据集的 9,490 次聊天中，真实部署里的学生绕过聊天机器人的教学法框定，几乎不付人际代价地把交互推向自己的目标——这是一种工具性的[[help-seeking]]动作，而非脱离（[[rethinking-scaffolding-llm-tutors|Neagu 等（2026）]]）。

**交互与协作。** 对话式智能体日益被框定为交互伙伴而非答案给予者。[[student-ai-interaction]]捕捉学习者如何在实践中提示、提问与验证 CAI。在[[collaborative-learning]]中，智能体中介参与与共享[[regulation]]；在[[language-learning]]中，它们提供实时的对话练习。[[human-ai-collaboration]]脉络考察的是这种伙伴关系何时保全、何时取代学习者的认知工作。作为批评伙伴的 LLM 具体展示了保全的一面：[[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer、Cash 与 Connell Pensky（2025）]]让 ChatGPT、Gemini 或 Claude 在一学期内批评学生的议论文，学习者在写作、[[prompt-engineering|提示工程]]与对反馈的回应上都有进步，并评价这些交流有用、吸引人且愉快——其中对模型主张的主动反驳（87.8%）表明他们把对话伙伴批判性地对待，而非被动接受。

对话式智能体被用于评分，而其评价行为与人的不同：ChatGPT 是同一批 52 个本科项目的三个评分者中最宽松的（M = 91.46，教师为 83.13），且与同伴不共享任何评分逻辑（r = 0.05），尽管学生看重其对话式交互性（[[usher-faraon-who-grades-best-2026|Usher 与 Faraon（2026）]]）。

**为学生一侧的对话搭脚手架。** [[helpcoach-ai-help-seeking-scaffolding-2026|Jin 等（2026）]]在聊天界面中加入一个提问具体度监测器与一个修订模板，且仅在提问含糊时介入：在一项有 40 名学习 Web 编程的大学生的组间研究中，HelpCoach 用户写出的首个提问明显更具体（57.3% 对 40.5%），一周后保持的知识也更多（平均增益 1.9 对 0.3，满分 6，d = 1.100）。这一保持收益并非经由更定向的聊天机器人回复，后者不因条件而不同——使机制仍是一个开放的假设，而非一条已证实的通路。

**智能体扮演的角色塑造交互。** CAI 设计对其人格并非中立：[[liao-role-adaptive-ai-companion-book-talk-2026|Liao（2026）]]发现，一个固定的"学生同伴"伙伴在小学读书谈话中维持了更长的交互，却主导了对话（学生的词/句占比更低），并触到一种"情感天花板"——在事实回忆上与人类教师相当，却在情感性与面向未来的反思上不足——论证 CAI 应当调整其角色（同伴、教师助手、家长顾问），而非保持单一。[[xu-genai-collaborative-space-2026|Xu 等]]把这一点延伸到小组，表明生成式 AI 在同步与异步的协作动态中既是*智能体*也是*协作空间*，交互设计决定它是脚手架化还是取代群体认知。语气也可以由外部分类器而非对话本身设定：[[culturally-aware-student-stress-chatbot-2026|Sukoon（Bashir 与 Afzal，2026）]]在 20 项调查特征上训练一个随机森林来判定低、中或高的压力水平，该输出从三档受阶梯照护模式启发的回应层级中选取一档——低压力时温暖鼓励，高压力时沉静且不作评判——然后由一个[[open-source]] LLM（经由 OpenRouter 的 GLM-4.5-Air）携带完整对话历史接手对话，并在每一轮重发一份经文化适配的系统提示。作者刻意选择一个免费访问的[[multilingual-learning|多语言]]模型，以便在区域性大学中保持部署可行，并指出乌尔都语是通过提示工程而非真正的双语流水线出现的——只要文化适当性被当作系统属性而非经评价的结果来主张，这一局限就值得重视。

**对话行为跟随提供方，而非调参。** 在 1,971 份 AI 与 135 份人类转录上按六条源自学习科学的固定规则打分，同一提供方的模型聚在一起，家族范围之间没有重叠，作者把这读作教学行为遵循全提供方的训练实践，而非单个模型的调参（[[studentbench-ai-human-tutoring-gre-2026|Northcutt 等（2026）]]）。

回应一致性是基础设施问题，而非提示问题：同模型内的回复相似度为 0.715–0.795，而跨模型之间为 0.443–0.604，且加入聊天历史会改变回复内容，即使针对同一个焦点消息（[[semantic-variability-llm-conversation-assessment-2026|Hao（2026）]]）。

**学生视角。** 真实世界的使用表明，采纳取决于[[ai-literacy]]与[[usability-research|用户体验]]，而非技术能力。一项对"Jordan 聊天机器人"（一个基于 GPT-4o 的[[pedagogy|教学法]]智能体，用于一门澳大利亚法律课程）的以人为中心的[[mixed-methods-research|混合方法]]研究发现，学生持正面态度并感知到知识增益，同时强烈支持[[academic-integrity]]要求；超过三分之一的交互发生在工作时间之后，确认了 24/7 可用性的价值（[[colbran-student-perspectives-genai-chatbots-2026|Colbran、Jha 与 Schiavone（2026）]]）。值得注意的是，预测使用意愿与信心的是 AI 素养——而非一般技术熟练度——而在非使用者中，可用性（一个侵入式弹窗设计）是最大障碍，排在信任、偏好工作人员与学术诚信担忧之前。（[[colbran-student-perspectives-genai-chatbots-2026]]）该研究建议以人为中心的设计、明确的 AI 政策与评估标签、教职员与学生培训，以及持续的错误监测——证据表明，有效的 CAI 部署既是一个设计与素养问题，也是一个技术问题。在年龄谱系的另一端，[[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed 与 Martin（2025）]]研究了 6–14 岁儿童与 AMA（一个主题受限、按年龄裁剪的聊天机器人：天文学、球鞋与鞋、恐龙）的交互，发现他们对 AI 作为信息来源普遍开放且高度信任——儿童甚至用已知答案的问题测试它的可信度——同时批判性投入与数字安全意识方面存在缺口，这论证了需要按年龄敏感、信任感知的对话式 AI 设计以及明确的[[privacy]]教学。

谁在使用智能体也有差异：在 97 名统计学研究生中，超过四分之一从未使用过 StatBot 聊天机器人，而女生显著更常用（W = 679.5，p = .015），作者把这读作对话式 AI 降低了提问的感知社会风险（[[lee-wu-gender-motivation-genai-achievement-2026|Lee 与 Wu（2026）]]）。

采纳并非同质：对 192 份学生与教育者的回应做聚类，得到四种画像——谨慎成就者、怀疑功利者、脱离怀疑者与投入热情者——它们被平均效应式的采纳模型所掩盖，学生优先看即时[[feedback]]，教育者优先看内容准确性与[[academic-integrity]]（[[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi 与 Ahmed（2026）]]）。

**持久性已在一个机构部署中被观察到。** 对加州州立大学北岭分校一个非生成式知识库聊天机器人的四年随机评价（N = 8,708）发现，学生在八个学期中保持接纳——年度退出率从未超过 4%——而影响集中在时效性强的行政任务上，如早选课（更可能在截止日期前注册的比例高 34 个百分点），而 GPA、学分或持续就读上没有出现统计显著效应（[[mata-sustaining-ai-enabled-student-support-2026|Mata、Russell 与 Page（2026）]]，工作论文）。它的测量教训关乎 CAI 投入如何被计数：退出率近乎为零、而互动活动的主动投入约 5%，关于持续投入的结论就取决于一项研究只计直接回复、还是也计被动投入——即学生依信息行动而不回复。

**风险与伦理。** CAI 智能体带有[[cognitive-offloading|过度依赖]]与[[cognitive-offloading|认知卸载]]的持续风险（总括综述中的首要伦理关切），加上技术局限、[[hallucination-risk|幻觉]]、偏见、[[ai-detection|抄袭]]与[[equity-in-ai-education|公平]]障碍。这些关切激发着[[ai-literacy]]与[[reducing-ai-misuse]]，并要求[[educational-policy-ai|政策]]与伦理[[governance]]的回应。另一种信任关切出现在教职员日益收到的采纳建议周围：教职员被敦促就"是否要采纳 AI"去咨询对话式 AI，而这类系统是由在采纳中有商业利害的组织建造的。对十个前沿 LLM 的审计发现，多数会先承认怀疑用户的关切，再把话题引向投入框架，这令人质疑 AI 采纳建议的中立性。

**游戏化的对话式智能体。** 除导学之外，对话式智能体正被嵌入数字化的游戏式学习。Wenzel、Geiger 与 Liening（2026）用行动设计研究推导出**CAIS-GBL**框架——四项设计原则与十五项设计特征，面向数字游戏式学习中的 AI 对话式智能体——以横跨认知、动机、[[affective-computing|情感]]与[[sociocultural-learning|社会文化]][[student-engagement|投入]]的理论驱动元需求为基础，秉持公平设计的立场。他们在商业[[simulation]]游戏中实例化的智能体（Lara）因认知性与[[community-of-inquiry|社会性临场]]以及对[[self-regulated-learning|自我调节学习]]的支持而获正面评价，以师范生为对象评价并在实地研究中检验——这是一份通过[[game-based-learning|严肃游戏中的对话式智能体]]实现[[adaptive-learning|自适应教学支持]]的实用蓝图。

## 与教学法智能体和智能导学的关系

对话式人工智能最好被理解为一个**交互模态**，它与本知识库中两个更成熟的构念重叠——但并不与之重合：[[pedagogical-agent|教学法智能体]]与[[intelligent-tutoring|智能导学系统（ITS）]]。

**对话式人工智能是媒介，而非教学法。** CAI 命名的是智能体*如何*沟通（自然语言对话，口头或文本）。它本身几乎不谈智能体被造来*做什么*。相比之下，教学法智能体由其**教学角色**定义——一个通过对话、提问或提示吸引学习者、以支持[[metacognition|元认知过程]]、[[feedback]]与[[scaffolding]]的 AI 组件。[[intelligent-tutoring|智能导学系统]]由其**架构与建模**定义——一个由[[knowledge-tracing]]、[[student-modeling|学生建模]]与教学决策逻辑构成的诊断骨干，追踪学习者知道什么并据此调整教学。一个智能体可以同时是三者：例如一个[[conversational-ai-tutors-framework|对话式 AI 导学系统]]就是一个 CAI 智能体（对话界面），它发挥教学法智能体的功能（导学策略），并建立在 ITS 基础（学生建模）之上。这一区分之所以要紧，是因为一个 CAI 智能体完全可以没有教学法根基——一个普通的 FAQ 聊天机器人就是对话式人工智能，而不是教学法智能体或导学系统。

**教学法智能体的透镜。** 教学法智能体用对话媒介来施行教学策略——引出自我评估、[[socratic-method|苏格拉底式提问]]、在[[agentic-ai|多智能体]]设计中的角色专门化引导（教师、助手、同伴、分析者）。并非每个 CAI 智能体都是教学法智能体，但两者高度重叠：CAI 智能体的总括综述发现，教学与学习支持（97.1%）与元认知发展（88.2%）主导着 CAI 应用，意味着大多数面向教育的 CAI 智能体都在发挥教学功能。[[conversational-agents-novice-programmers-scoping-2025|新手程序员范围综述]]把这一点说得更尖锐：23 个对话式智能体中只有 4 个明确地把设计锚定在[[learning-theories|学习理论]]之上——多数在教学意图上如此，但不在根基上如此。

**ITS 的透镜。** 智能导学贡献的是原始对话模型所缺的*[[cognitive-diagnosis|认知诊断]]机制*。[[conversational-ai-tutors-framework|对话式 AI 导学系统框架]]论证，成熟的 ITS 技术应当锚定生成式导学系统：知识追踪、情感检测与学生建模提供结构，而[[generative-ai]]与[[llm|LLM]]提供灵活的对话。这是关键的设计张力——对话式人工智能提供自然、可扩展的交互，但若没有 ITS 式的结构，它有[[cognitive-offloading|过度脚手架化]]、幻觉或绕过学习者生产性挣扎的风险。诸如[[measuring-llm-tutors-teach-vs-solve]]与[[stanford-evidence-base-ai-k12-2026]]的研究表明，以教学为导向的判据（引导性问题、校准过的提示）必须被明确地设计进去。

**简言之：** 对话式人工智能是**界面/媒介**，教学法智能体是**角色**，智能导学是**底层的建模与教学逻辑**。在教育上有价值的 CAI 智能体位于三者的交汇处——界面上是对话式的，意图上是教学性的，在对学习者的建模上是导学式的。

## 实践指引

选择对话式智能体是为了支持教学、[[motivation]]与[[metacognition]]，而不只是为了回答问题，并为以 HCI 为根基、参与式、以用户为中心的交互而设计。通过把 CAI 与[[ai-literacy]]教学以及让学习者保持认知产出的[[feedback]]配对，来防范[[cognitive-offloading|过度依赖]]。明确关注 AI 素养与可用性——因为这些——而非一般数字技能——驱动采纳与弃用（[[colbran-student-perspectives-genai-chatbots-2026|Colbran、Jha 与 Schiavone（2026）]]）——并把部署与明确的 AI 使用政策、评估标签与培训配对。在教学产出上评价 CAI——而不只是任务完成——并且从一开始就为公平与[[accessibility]]做规划，而非事后补。

## 关联概念

- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[llm]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[cognitive-offloading]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]
- [[speech-and-voice-technologies]]
- [[parents-and-families]]

## 关联文章

- [[mata-sustaining-ai-enabled-student-support-2026]] — 维持 AI 赋能的学生支持：一个机构聊天机器人的四年实施与影响研究（Mata、Russell 与 Page 2026）
- [[usher-faraon-who-grades-best-2026]] — 跨项目质量层级比较 ChatGPT、同伴与教师评分（Usher 与 Faraon 2026）
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents with 5E framework for ESL grammar acquisition (Yang et al. 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[colbran-student-perspectives-genai-chatbots-2026]] — 学生对 GenAI 聊天机器人的看法（混合方法）
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — AI 聊天机器人的采纳画像
- [[conversational-ai-agents-umbrella-review-2026]] — 教育中对话式 AI 智能体的总括综述
- [[conversational-ai-tutors-framework]] — 对话式 AI 导学系统框架
- [[measuring-llm-tutors-teach-vs-solve]] — 测量 LLM 导学系统是教还是解
- [[stanford-evidence-base-ai-k12-2026]] — 导学专用 AI vs. 通用 AI
- [[rethinking-scaffolding-llm-tutors]] — 重新思考 LLM 导学系统中的脚手架
- [[conversational-agents-novice-programmers-scoping-2025]] — 面向新手程序员的对话式智能体范围综述
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[lee-wu-gender-motivation-genai-achievement-2026]] — GenAI 成就中的性别与动机
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — 面向小学读书谈话的角色自适应 AI 伙伴；固定角色智能体的情感天花板（Liao 2026）
- [[xu-genai-collaborative-space-2026]] — GenAI 作为小组动态中的智能体与协作空间（Xu 等 2026）
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[culturally-aware-student-stress-chatbot-2026]] — An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving

## 引用

Ganguly, A., Mehjabin, N., Malik, A., & Johri, A. (2025). [*Conversational AI agents in education: an umbrella review*](https://doi.org/10.1007/s43681-025-00916-0). *AI and Ethics*, 6, 72.
