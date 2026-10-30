---
title: 幻觉风险
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-30T01:22:08-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **幻觉风险**——人工智能系统在教育情境中生成看似合理但事实上错误或凭空编造的内容的危险，此类错误可能误导[[learners|学习者]]、损害[[trust|信任]]，并导致无效的评估。幻觉在教育中后果尤其严重，因为学生可能缺乏发现人工智能错误的领域知识，而教师可能依赖那些听起来权威实则毫无依据的人工智能生成诊断或反馈。

## 值得思考的问题

- 学生往往缺乏领域知识去发现人工智能的错误，教师也可能信任那些听起来权威的人工智能诊断。人工智能与学习者之间这种知识不对称，如何让幻觉在教育中格外危险？
- 一项研究发现，一个诊断学生手写数学的人工智能可能编造出并不存在的证据引文，同时还声称有信心。当人工智能听起来确定并引用\"证据\"时，什么应当让你停下来去核查？
- 如果一个[[intelligent-tutoring|AI导师]]过度肯定错误的解答、过度否定有效但非最优的推理，那么对信任它的学生与教师，长期影响会是什么？
- 本页建议的缓解措施包括人在回路审查、证据感知的置信度校准，以及以已核实来源为基础。其中哪一种在你自己的情境中最可行？它又可能漏掉什么？
- 幻觉会如何与过度依赖相互作用：为什么当用户不加批判地信任输出时，人工智能的错误比在他们持怀疑态度时更危险？
- 如果你要为自己的学生设计一个[[ai-feedback-quality|AI反馈]]工具，你会坚持哪些具体保障措施来防止看似合理却错误的输出——你又如何知道它们确实在起作用？

## 引言

本知识库的文章记录了教育人工智能中幻觉的几种形式：在[[assessment|学生评估]]中编造证据、对学习者知识的过度自信误诊，以及被学生当作真相接受的看似合理却不正确的解释。这一风险在教育中被放大，因为人工智能与学习者之间的知识不对称使学习者难以验证人工智能的输出。还有一个场景是替代教科书的AI生成课程读物：在一门以这种方式替换了商用教材的研究生课程中，4,487 个记录页面里仅约 0.80% 带有APA式文内引注，DOI字符串基本缺席，因此大多数说法无法从该文本自身内部得到审计（[[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]）。这种可追溯性缺口不同于答错，因为文本读起来权威，却只提供有限的内部确认手段。

一项涵盖 125 项研究的综述给出了流行率与检测缺口的范围：幻觉率 10–40%，而医学生只有 44–55% 的时候能发现人工智能的错误（[[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]）。

**评估中的幻觉**尤其有害。**[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** 发现，LLM在诊断认知技能时会编造学生笔迹中并不存在的证据引文，58.5% 的错误诊断伴随对证据可信度的虚假声明。**[[llm-fallacy-misattribution]]** 记录了 [[llm]] 推理中系统性的证据过度归因——模型在并不存在证据支持之处声称有证据支持。两者都与 [[ai-ed-evaluation]] 以及关于 [[assessment-validity]] 的 [[knowledge-tracing]] 关切相关。[[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] 补充了人工智能输出被评分而非被审查时可见的两种失效模式：经得起评分而存活的编造细节——一篇不存在的论文，带着一个无法解析的DOI，以及样本量被报为 378 而来源写的是 329——以及单次回应内部的自我矛盾，模型推理出正确选项却在结尾总结里报告了另一个。由于目前参考文献列表是按格式而非按准确性评分，这类错误可以拿到及格分数，同时误导用同一工具复习的学生。

在一项评估设计试点中，[[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] 发现了经反复提示仍存活、需要大量学术修订的编造参考文献与不切实际的时间估计——这是教育者使用的起草工具中的幻觉，而非学生作业中的幻觉。

**策略性[[misconceptions|误解]]** 是显性幻觉更隐蔽的近亲。[[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] 提示七个开放权重模型，为 35 个核心计算机科学概念各生成一个\"[[socratic-method|苏格拉底]]陷阱\"——一种流畅而权威、却建立在一个微妙的领域特定错误之上的解释——三位领域专家确认 241 个被提示片段中有 221 个（91.7%）为策略性误解，且不同CS领域之间无显著差异。错误以概念性为主而非事实性（66.5% 对 33.5%），没有一个是纯粹逻辑性的；它们被评为中等到高度有说服力（五点量表上 M = 3.71），模型身份解释了 43% 的方差。由于单个陈述可以正确而陈述之间的关系错误，事实核查并不够；作者主张 [[ai-literacy|学习者]]需要概念验证与心智模型校验。他们还告诫，该比率衡量的是对抗性[[prompt-engineering|提示]]下的能力，而非此类错误在日常使用中的流行率，且未测试任何学生，因此未测量任何欺骗或学习结果。

**被操纵而非被编造的证据。** [[automated-assessment|自动评分]]中一个相关的失效模式是输出被从外部挪动。[[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] 对一个常规AI评分工作流做了红队测试，发现藏在提交文件内的指令能在没有任何可见警告的情况下把一篇不及格论文的分数抬高：一种策略 9/9 次，另一种 17/18 次。两个细节关系到 [[trust-calibration|信任]]：一次被检出的注入通过静默禁用聊天被拦截，且从未向用户报告；另一次运行中工具宣称只遵循正式作业要求，同一文件重跑六次分数仍然被抬高。以这种方式得到的分数不带有任何 [[assessment-validity|效度]]主张，且由于操纵不留持久痕迹，[[human-in-the-loop-ai|教师]]仍是对抗那些设计上就不被看见的输出的唯一真实检查。

针对此类操纵的防御自带权衡：一个多层护栏流水线让 46.34% 的注入成功，Prompt Guard 为 38.48%，而 NeMo Guardrails 拦截了每次攻击却标记了 16.22% 的良性学生提问——这种假阳性率在导师身上本身就是一种教学伤害（[[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]）。

**辅导中的幻觉**直接影响学习。**[[yasir-llm-tutoring-agents-2026]]** 发现，LLM过度肯定错误解答，同时过度否定有效但非最优的推理——这些系统性失效会同时误导学生与教师。**[[eduframetrap-llm-sycophancy-educational-safety]]** 与 **[[eduguard-safe-rag-llm-tutor]]** 处理教育LLM的安全机制。这些风险与 [[pedagogical-safety]] 和 [[human-in-the-loop-ai]] 要求相关。

**缓解方法**包括 [[human-in-the-loop-ai]] 设计（人工智能支持而非取代[[teacher-role|教师]]判断）、基于证据质量的证据感知架构以校准置信度（如MathCog所主张），以及将LLM输出约束在已核实来源内的 [[rag]] 落地。[[cognitive-offloading|过度依赖]]概念与此密切相关——当用户不加批判地信任人工智能输出时，幻觉最危险。[[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] 补充了一个缓解技术栈未完全覆盖的失效模式：过度具体的机构声明，约 1.03% 的记录页面把一个具名校区（如"Sacramento State"）与关于修订后的留任、终身教职与晋升规则或CSU行政命令的断言式政策动词搭配，而这些都无法从文本中得到核实。正是具体性使其代价高昂，因为一个编造的本地细节看起来足够精确，能通过读者的合理性检查；该研究提出的补救是程序性的而非技术性的：把生成当作教师在审阅下的草稿产出，然后把来源策展进检索增强的设计中。

**标注为不可靠降低了报告出的依赖而非提高了它。** 当 546 名参与者阅读同一个GAI对话——一段被标注为包含编造信息，另一段被标注为经核实准确——时，被标注为编造的版本产生了更低的 [[trust|信任]] 与感知可控性、更高的认知失调与挫败，同时伴随 *更低* 的依赖得分（M = 2.935 对 3.254）（[[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]]）。这一结果对本页的过度依赖逻辑构成了限定：看到输出可能是编造的，与继续依赖它并不是一回事。

**可信度线索反而会放大顺从。**当一个不可靠的输出被装扮起来时，出现了相反的动向：在 ARMADA 辩论界面上加入引注与可信度信号，把参与者从正确的初始判断转向错误的 AI 立场的比例抬高了 112%（31.8% 对 15.0%），而人工核查发现一些被引用的案例被错误归因给无关或虚构的参考文献（[[tuo-armada-multi-agent-debate-overreliance-2026|Tuo 等，2026]]）。

## 常见误解

- **“学生会注意到错误。”** 一项 **125 项研究的综述**把幻觉率定在 **10-40%**，而**医学生，高等教育中最严格筛选的学习者之一，只有 44-55% 的时候能发现 AI 错误**。远低于可靠水平的检出率意味着负担不能落在读者身上。
- **“错误一出现就很明显。”** 一个诊断手写数学的 AI 可以**编造并不存在的证据引文，同时声称有信心**。失效不是一个看似合理但错误的答案，而是以确定性呈现的虚构支持，这是最难捕捉的一类，因为它读起来恰是一个仔细的读者会想要的那种证据。
- **“没有引注的输出是一个格式问题。”** 在一门用 AI 生成读物取代商用教材的研究生课程中，**4,487 个记录页面里只有约 0.80% 带有 APA 式文内引注**。这是语料层面对来源的缺失，而不是偶发的遗漏，且意味着核验没有起点。
- **“幻觉是更新模型就能解决的模型生成问题。”** 这一比率在 **125 项研究**中横跨 10-40%，这既是任务的属性，也是部署的属性，同样也是模型的属性。降低比率是真实的进步，但并不改变读者必须能够核查这一点。

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
- [[frontiers-gai-hallucination-dependence-2026]] — 把GAI对话标注为编造的，同时降低了信任与依赖
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — 可信度线索抬高了对 AI 输出的顺从，一些被引案例被错误归因或系虚构
- [[ivory-psychology-assessment-integrity-2026]] — 可及格的学生作业内部出现的编造引注与自相矛盾的输出（Ivory et al. 2026）
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS：概念层面错误的流畅貌似合理的解释（Miličević et al. 2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 隐藏的提示注入在未被发现的情况下抬高AI评分，被检出的攻击也未被上报（Humble 2026）

- [[authentic-assessments-generative-ai-pilot-2026]] — 用生成式AI设计真实性评估：高等教育中 Assessment Authentifire 的试点研究
