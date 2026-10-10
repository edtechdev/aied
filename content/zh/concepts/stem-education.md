---
title: STEM 教育
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:25-04:00"
type: concept
foundations: [computational-thinking]
technology: [intelligent-tutoring]
assessment: [automated-assessment]
discipline: [cs education, math education, physics education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/stem-education
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

> **STEM 教育** —— 科学、技术、工程与数学教育，是知识库中 [[ai-education|教育中的 AI]] [[research-methods-aied|研究]]最常见的领域。STEM 结构化的知识、清晰的对错答案与可计算的性质，使它成为 [[intelligent-tutoring|AI 辅导]]与评估的理想试验场。

## 值得思考的问题

- STEM 是 AI 教育研究最常见的领域，因为它的知识结构化、有清晰的对错答案。你认为这让 STEM 成为最容易用 AI 教的地方——还是可能成为 AI 的局限最容易被掩盖的地方？
- 本页引用的研究表明，学校里 AI 的采用"按学科分层"——在计算机科学中被常态化，在数学中被严令禁止。你认为为什么学科文化对 AI 的接受度塑造得如此之强，这对学生又有何后果？
- 如果一个数学学生主要用 AI 来核对解答、获得解释，那是支架还是拐杖？是什么决定了区别？你会把界线画在哪里？
- 鉴于 STEM 问题往往有可验证的答案，你认为 STEM 中哪些 AI 用法真正建立理解，哪些只是产出看似正确的输出？
- 那些使 STEM 成为 AI 辅导理想领域的特质——清晰的答案、可计算的正确性——又如何可能贬低了科学与工程中那些混乱、开放、依赖判断的部分？

## 引言

### STEM 作为 AIED 的首要领域

- **数学：** [[math-education|数学教育]]研究横跨 [[generative-ai-reduced-study-time-math|GenAI 对数学学习的影响]]、[[ai-powered-personalized-learning-elementary-fractions-2026|小学分数辅导]]与 [[student-math-competence-clustering|胜任力聚类]]。
- **物理：** [[physics-education|物理教育]]包括 [[becker-chatgpt-typology-physics-2026|ChatGPT 类型学研究]]、[[hashmi-socratic-physics-chatbot-2025|苏格拉底式物理聊天机器人]]与 [[ai-scoring-language-bias-physics|评分偏差分析]]。
- **计算机科学：** [[cs-education|计算机科学教育]]是被研究最多的 STEM 子领域——[[code-review-genai-cs1|代码评审]]、[[debugtracker-classroom-debugging|调试工具]]与 [[prompt-problems-nl-programming-mistakes|提示研究]]。
- **工程：** [[concept-catalyst-engineering-scaffolds|工程支架]]、[[structured-ai-demonstrations-engineering-mechanics|力学演示]]与 [[ai-engineering-education-balancing-act|课程平衡]]把 AI 带进 [[engineering-education|工程教育]]。
- **为本科生科研做支架：** [[ai-information-extraction-undergraduate-thesis-2026|An 及同事（2026）]] 试点了一个 AI 系统，把研究出版物转换成结构化、可比较的数据集，供四个 STEM 学院的本科生完成论文。结果（20 名学生、80 份文档）显示实验参数的提取率超过 90%，文献综述时间减少约 65%，学生识别有影响力的实验变量的能力提高 50%——这是 [[generative-ai|AI]]支架化的 [[higher-ed|本科生科研]]如何能加强 STEM 教育中研究素养与认识认知的证据。
- **模拟支持的教学：** 在基于无人机的 STEM 教育中，[[teacher-role|教师]]与 AI 共同设计的 [[simulation]] 支架被与一门完全相同的动手 [[curriculum-design|课程]]作对照，涉及 30 名中学生，检验模拟支持的教学是否产出更优的 [[learning-gains|学习结果]]。GenAI 的角色是加速内容创作，而教师的参与保住了教学法效度与情境相关性。
- **STEAM 艺术教育中 AI 辅助的规划：** 一项针对儿童 STEAM 艺术教师的实验研究（[[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo 与 Tahir 2025]]）发现，ChatGPT 辅助的教案在专家评定的质量上胜过教师生成的教案（中位数 20.5 对 17.6，p = .002，效应大，六位教授评分），教师报告了在效率与跨学科整合上的增益（61% 评为 4 分及以上）。这一结果是通过教师的委派方法实现的——最有用的方式是让 ChatGPT 在一份自行勾勒的教案中填补内容缺口——强化了那个反复出现的论点：当教师构建任务并批判地评估输出，而不是把整份教案交给模型时，AI 才抬升 STEM／STEAM 的工作。

### 汇总来看，AI 支持的教学在 STEM 中的效果如何

迄今为止该领域最大的定量综合——2005 至 2025 年间发表的 35 项实验与准实验研究（[[ai-supported-instruction-stem-meta-analysis-2026|Doğan、Kılıç、Kalınkara 与 Talan（2026）]]）——把 STEM 中的 AI 支持教学置于 Hedges' g = 0.670（95% CI [0.491, 0.848]），研究间方差由随机效应模型处理。层级分解是其中最有信息量的部分：效应在高中最大（g = 1.099），之后在大学（0.578）、小学（0.465）与 [[k-12|初中]]（0.392）依次变小；而 STEM 自我形象所预测的学科差异——科学（0.676）与数学（0.650）领先于技术与工程（0.501）——在统计上并不显著（Q = 4.85，df = 2，p = 0.088）。时长并不像剂量那样起作用：最强的区间是一至两个月（g = 0.833），最短的干预（五小时或以下）仍达到 0.621，而最弱的区间（g = 0.256）并不显著。与 [[learning-gains|学习收益]]上所记录的怀疑态度并读，合理的解读是：AI 支持的 STEM 教学产生一个中等的、真实但依层级而变化的效应，而非一个整齐划一的效应。

一项针对 18 项研究（2014—2024）的学科综述，把那些效应所测的对象进一步厘清：AI 在科学与化学教育中的结果集中于学习过程的测量（n = 9）而非成就，且证据基础偏向师范生（44.4%），只有一项初中和两项高中研究（[[ai-science-chemistry-education-systematic-review-2025|Erümit 与 Özdemir Sarıalioğlu（2025）]]）。

### 为什么 STEM 占主导

STEM 结构化的知识表征、可验证的答案与计算思维上的对齐，使它成为 AI 辅导最自然的契合点。[[computational-thinking|计算思维研究]]显式地探索了这种对齐。

### 来自 2025—26 年 IJ STEM Education 研究的新证据

一批集中的 2026 年 *International Journal of STEM Education* 研究，厘清了 AI 如何在 STEM 的各子领域与各层级上发挥作用：

- **[[discipline-specific-aied|学科特异]]的 [[governance]]塑造 [[student-ai-interaction|学生的 AI 使用]]。** 一项对 416 名捷克中学生的横断面研究（[[lnenicka-secondary-students-genai-stem-2026]]）发现，AI 的采用*按学科分层*而非统一：计算机科学与经济学把 [[generative-ai|GenAI]] 常态化为一种协作资源，而数学（65.9% 禁止）与自然科学（55.3%）显示出高感知的禁止，与糟糕的规则清晰度和持续的地下使用相伴出现。学生大多把 AI 当作工具性支架（解释、核对解答）而非替代品，但出现了一个 [[critical-thinking|批判性评估]]缺口——频繁的提示修改盖过了外部的事实核查，使行为朝 [[cognitive-offloading]] 偏移。这主张采取*对学科敏感*的指引，而非一刀切的禁令。
- **AI 作为探究式 STEM 中的共同探究者。** 一项针对 97 名三年级学生的准实验（[[dai-chatbots-problem-posing-primary-2026]]）表明，GenAI [[conversational-ai|聊天机器人]]在 [[inquiry-based-learning|探究式学习]]中，就科学 [[problem-based-learning|问题提出]]而言显著胜过搜索引擎，改善了问题的质量，产出了更整合的认识 [[network-analysis|网络结构]]（ENA），并降低了认知负荷。一项关于 STEAM 中探究式学习里 ChatGPT 的 [[meta-analysis-systematic-review|系统综述]]（[[jiang-chatgpt-inquiry-steam-review-2026]]，24 项研究）确认，ChatGPT 支持问题表述、探究设计、[[problem-solving]]与反思——但当输出被当作权威时，也带来过度依赖、[[hallucination-risk|幻觉]]与浅层结论的风险。
- **STEAM 是通往 AI 素养的不平坦路径。** 一项对 39 项研究的 PRISMA 系统综述（[[niri-steam-ai-literacy-review-2026]]）发现，STEAM 的实施主要发展技术素养（基础 AI 概念、计算思维、数据素养），却对 [[ethics|伦理]]意识、创造性想象，以及用 AI 进行创造／管理／设计发展不足。技术学科领先；艺术、工程与整合式 STEAM 落后——这表明 STEM 中的 AI 素养目前偏向技术技能，而非负责任地塑造 AI。
- **自适应的 AI 型 STEM 项目能支持深层学习。** 一项六年级科学中的整群随机试点（[[bin-bakheet-adaptive-ai-stem-deep-learning-2026]]，N = 30）发现，一个自适应的 AI 型 STEM 项目（个性化内容、基于规则的掌握、实时反馈）在解释、解读、应用与想法生成上都产出了有利于实验组的大效应量——尽管两班设计需要谨慎解读。
- **教师的接受度是异质的，且受学科塑造。** 一项对 128 名职前教师的潜在剖面分析（[[chen-preservice-teachers-chatgpt-lpa-2026]]）发现了四种 ChatGPT 接受度剖面（务实的评估者、技术先驱、抵制的怀疑者、环境的观察者），其中 STEM 教师集中于技术先驱，非 STEM 教师集中于抵制的剖面——而抵制的怀疑者表现出高易用性但低使用意图，需要差异化的 [[ai-literacy]] 培训。
- **AI 整合的 STEM 中的评估与认知过程。** [[zhang-ct-ai-training-test-2026|CTAT]]（34 个条目、经 IRT 验证）为在 AI 训练情境中评估 [[computational-thinking]] 提供了一份有效工具，揭示学生在数据表示、逻辑运算符排序与循环结构上最为吃力。一项关于 AI 辅助编程的扎根理论研究（[[liu-tool-tutor-crutch-programming-2026]]）表明，学习者在"领域掌握"与"工具掌握"之间经由 [[scaffolding]] 与外包循环而摆动，在常规外包下 [[metacognition|元认知]]校准被削弱——这是对"表现—学习"张力的过程性说明。

## 对 STEM 教师的启示

- **选择与学科相称的 AI。** STEM 横跨数学（辅导）、物理（[[socratic-method|苏格拉底式对话]]、[[simulation]]）、计算机（代码生成、评审）与工程（设计、劳动力）——选择与各子领域标志性 [[pedagogy]] 相匹配的工具，而不是假定一个通用聊天机器人适合所有领域。
- **利用 AI 在结构化契合上的优势，但保护推理。** STEM 可验证的答案使它成为 AI 最易处理的领域；应通过把 AI 嵌入结构化的、以掌握为导向的工作流，来防范过度依赖与答案替换。
- **在 STEM 课程中嵌入 AI 素养。** 研究（[[zha-ai-literacy-biology-case-study|生物]]、[[ai-tpack-preservice-math-teachers|数学教师培养]]）表明，STEM 情境支持 AI 学习——在 AI 概念自然出现之处整合它们，而不是把它们孤立起来。
- **在 AI 采用中关注 [[equity-in-ai-education|公平]]与可及性。** STEM 的 AI 工具并非中立；在部署它们时，监测评分偏差、[[digital-divide]]可及性与 [[culturally-relevant-pedagogy|文化相关]]的设计。

## 关联概念
- [[learner-identity]] — 不断演化的学科性、职业性、创造性与学术性学习者身份
- [[business-education]]
- [[cs-education]]
- [[math-education]]
- [[physics-education]]
- [[computational-thinking]]
- [[k-12]]
- [[higher-ed]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[llm]]
- [[discipline-specific-aied]]
- [[teacher-education]]
- [[chemistry-education]] — 化学教育与 AI：实验室、形成性评估、LLM 的局限、实验哲学
- [[biology-education]] — 生物教育与 AI：实验室教学助手、生物中的 AI 素养、批判性思维、专门工具

## 关联文章
- [[ai-pedagogical-accompaniment-amico]] — 支持 STEM 身份的 AI 使能教学陪伴
- [[lnenicka-secondary-students-genai-stem-2026]] — 中学生实际用 GenAI 工具做什么（横跨 STEM）
- [[dai-chatbots-problem-posing-primary-2026]] — GenAI 聊天机器人与小学科学中的问题提出
- [[jiang-chatgpt-inquiry-steam-review-2026]] — STEAM 中探究式学习的 ChatGPT
- [[niri-steam-ai-literacy-review-2026]] — 面向 AI 素养的 STEAM 教育：系统综述
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — 支持深层学习的自适应 AI 型 STEM 项目
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — 职前教师 ChatGPT 接受度剖面
- [[zhang-ct-ai-training-test-2026]] — 计算思维在 AI 训练测试（CTAT）中的表现
- [[liu-tool-tutor-crutch-programming-2026]] — 工具、辅导者还是拐杖：AI 辅助编程的扎根理论
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — AI 时代的智能制造劳动力就绪等级框架
- [[becker-chatgpt-typology-physics-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[concept-catalyst-engineering-scaffolds]]
- [[generative-ai-reduced-study-time-math]]
- [[avraamidou-ai-colonization-science-education]]
- [[ai-science-chemistry-education-systematic-review-2025]] — 科学／化学教育中 AI 的系统综述
- [[astor-computational-thinking-meta-review-2026]] — 作为 21 世纪技能、横跨 STEM 的计算思维
- [[ai-information-extraction-undergraduate-thesis-2026]] — 支持本科论文与研究式学习的 AI 驱动信息提取（An et al. 2026）
- [[simulation-assisted-drone-learning-stem-2026]] — 采用教师—AI 共同设计支架的模拟辅助无人机学习
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[ai-supported-instruction-stem-meta-analysis-2026]] — 35 项研究中 AI 支持的 STEM 教学的合并效应，增益在高中最大（Doğan et al. 2026）
