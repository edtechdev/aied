---
title: 幻觉风险
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T18:39:30-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
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

> **幻觉风险**——人工智能系统在教育情境中生成看似合理但事实上错误或凭空编造的内容的危险，此类错误可能误导[[learners|学习者]]、损害[[trust|信任]]，并导致无效的评估。幻觉在教育中后果尤其严重，因为学生可能缺乏发现人工智能错误的领域知识，而教师可能依赖那些听起来权威实则毫无依据的人工智能生成诊断或反馈。

## 值得思考的问题

- 学生往往缺乏领域知识去发现人工智能的错误，教师也可能信任那些听起来权威的人工智能诊断。人工智能与学习者之间这种知识不对称，如何让幻觉在教育中格外危险？
- 有一项研究发现，一个诊断学生手写数学的人工智能会编造并不存在的证据引文，同时声称自己有把握。当一个人工智能语气确定并引用“证据”时，什么应当让你停下来去核验？
- 如果一个[[intelligent-tutoring|人工智能导学系统]]过度认可错误的解法、过度拒绝正确但非最优的推理，长期来看，对那些信任它的学生和教师会产生什么影响？
- 本页提出人在回路的复核、证据感知的置信度校准，以及锚定于已验证的来源，作为缓解措施。其中哪一项在你自己的情境中最为可行，它又可能漏掉什么？
- 幻觉可能如何与过度依赖相互作用：为什么当用户不加批判地信任输出时，人工智能的错误最危险，而当他们持怀疑态度时反而没那么危险？
- 如果你要为自己的学生设计一个[[ai-feedback-quality|人工智能反馈]]工具，你会坚持哪些具体 safeguards 来防范“看似合理却错误”的输出——你又会如何知道这些措施真的在起作用？

## 引言

本知识库的文章记录了教育人工智能中的幻觉有若干形式：[[assessment|学生评估]]中的编造证据、对学习者知识的过度自信误判，以及那些听起来合理却被学生当作真理接受的错误解释。这一风险在教育中被放大，因为人工智能与学习者之间的知识不对称使学习者难以核验人工智能的输出。还有一种情境是用人工智能生成的课程读物替代教科书：在一门这样做的研究生课程中，4,487 个记录页面里只有约 0.80% 带有 APA 式的文内引用，DOI 字符串基本缺席，因此多数主张无法从材料内部得到审计（[[sidorkin-ai-generated-course-readings-2026|Sidorkin，2026]]）。这种可追溯性缺口与答错不同，因为文本读起来权威，却只提供有限的内部确认手段。

一项覆盖 125 项研究的综述给出了发生率与检测缺口的区间：幻觉率为 10–40%，而医学学生只能发现 44–55% 的人工智能错误（[[genai-higher-education-systematic-review-2026|Rathnayake（2026）]]）。

**评估中的幻觉**尤其有害。**[[llm-cognitive-diagnosis-handwritten-math|MathCog]]**发现，LLM 在诊断认知技能时会编造学生手写中并不存在的证据引文，且 58.5% 的错误诊断伴随着虚假的“有证据支撑”的自信声明。**[[llm-fallacy-misattribution]]**记录了[[llm]]推理中系统性的证据过度归因——模型声称有证据支持，而实际上并不存在。二者都与[[ai-ed-evaluation]]和[[knowledge-tracing]]所关注的[[assessment-validity]]问题相关。[[ivory-psychology-assessment-integrity-2026|Ivory 等（2026）]]补充了两种在人工智能输出被批改而非被审视时才看得见的失效模式：经得起评分而存活的编造细节——一篇并不存在的论文，配一个无法解析的 DOI，以及一处把来源 329 报成 378 的样本量——以及单一回答内部的自我矛盾，模型推理出正确选项，却在结语里报告了另一个。由于参考文献表目前只被检查格式而不检查准确性，这类错误能以及格分数通过，同时误导那些用同一工具复习的学生。

在一项评估设计试点中，[[authentic-assessments-generative-ai-pilot-2026|Paula 等（2026）]]发现了经反复提示仍存活、并需要大量学术修订的编造参考文献和不切实际的时间估计——这是出现在面向教育者的起草工具中的幻觉，而非学生作业中的幻觉。

**策略性[[misconceptions|迷思概念]]**是显性幻觉更微妙的一个近亲。[[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević 等（2026）]]提示七个开放权重模型为 35 个计算机科学核心概念各生成一个“[[socratic-method|苏格拉底式]]陷阱”——一段流畅而权威、却建立在一个微妙的领域专属错误之上的解释——三位领域专家确认 241 个被提示的片段中有 221 个（91.7%）属于策略性迷思，且各计算机科学领域之间没有显著差异。这些错误以概念性为主而非事实性（66.5% 对 33.5%），且没有一个是纯逻辑的；它们被评为具有中等偏高的说服力（五点量表上 M = 3.71），模型身份解释了 43% 的方差。由于单个陈述可以正确而陈述之间的关系是错的，仅靠事实核查并不够；作者主张[[ai-literacy|学习者]]需要概念核验与心理模型验证。他们同时提醒，该比率衡量的是对抗性[[prompt-engineering|提示]]下的能力，而非此类错误在日常使用中的发生率，且没有对学生做测试，因此没有测量到任何欺骗或学习结果。

**被操纵的而非编造的证据。**[[automated-assessment|自动评分]]中一种相关的失效模式是把输出从外部改掉。[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]]对一个例行的人工智能评分工作流做红队测试，发现隐藏在提交文件内部的指令在没有任何可见警示的情况下抬高了不及格作文的分数：一种策略 9 次迭代全部成功，另一种 17 次中有 17 次成功。两点与[[trust-calibration|信任]]有关：一次检测到的注入是通过静默禁用对话来拦截的，从未报告给用户；而在一次工具声明将只遵循官方作业指令的运行中，同一文件重跑六次仍然抬高了分数。这样得到的分数不携带任何[[assessment-validity|效度]]主张，并且由于操纵不留下持久痕迹，[[human-in-the-loop-ai|教师]]仍然是唯一真正的检查，而那些输出被刻意设计成不可见。

针对此类操纵的防御自身带有权衡：一套多层护栏流水线让 46.34% 的注入成功，Prompt Guard 为 38.48%，而 NeMo Guardrails 挡住了每一次攻击，却把 16.22% 的良性学生查询标记为攻击——在一个导学系统中，这个假阳性率本身就是教学伤害（[[prompt-injection-defenses-educational-llm-tutors|Maiorano（2026）]]）。

**导学中的幻觉**直接影响学习。**[[yasir-llm-tutoring-agents-2026]]**发现 LLM 过度认可错误解法，同时过度拒绝正确但非最优的推理——这些系统性失效会同时误导学生和教师。**[[eduframetrap-llm-sycophancy-educational-safety]]**与**[[eduguard-safe-rag-llm-tutor]]**针对教育 LLM 的安全机制展开讨论。这些风险与[[pedagogical-safety]]和[[human-in-the-loop-ai]]的要求相关。

**缓解方法**包括让[[human-in-the-loop-ai|人在回路]]的设计，即人工智能支持而非取代[[teacher-role|教师]]的判断；证据感知的架构，基于证据质量校准置信度（如 MathCog 所主张）；以及把 LLM 输出约束在已验证来源上的基于[[rag]]的锚定。[[cognitive-offloading|过度依赖]]概念与此密切相关——当用户不加批判地信任人工智能输出时，幻觉最危险。[[sidorkin-ai-generated-course-readings-2026|Sidorkin（2026）]]补充了一种缓解栈未能完全覆盖的失效模式：过度具体的机构性主张，约 1.03% 的记录页面把一个具名校区（如“Sacramento State”）与关于修订后的留任、终身教职与晋升规则或 CSU 行政命令的断言性动词搭配在一起，而它们无一能从文本中得到核验。正是具体性使其代价高昂，因为一个编造的本地细节看起来足够精确，能通过读者的合理性检查；该研究提出的补救是程序性而非技术性的：把生成当作教师复核下的草稿生产，然后把来源策展进检索增强的设计。

## 关联概念

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]
## 关联文章

- [[ivory-psychology-assessment-integrity-2026]] — 编造引用与自相矛盾的输出出现在能及格的学生作业中（Ivory 等，2026）
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS：流畅而看似合理、却在概念层面错误的解释（Miličević 等，2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 隐藏的提示注入在无人察觉的情况下抬高人工智能评分，而检测到的攻击未被上报（Humble，2026）

- [[authentic-assessments-generative-ai-pilot-2026]] — 用生成式人工智能设计真实评估：一项关于高等教育评估真实性的试点研究
