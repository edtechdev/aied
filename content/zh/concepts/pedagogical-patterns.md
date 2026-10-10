---
title: 教学法模式
created: "2026-09-30T16:20:00-04:00"
updated: "2026-10-09T19:07:03-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
translation_of: concepts/pedagogical-patterns
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **教学法模式** —— 本知识库的研究所检验过的、有**次序的活动序列**，关注 [[generative-ai|生成式 AI]] 在序列中的介入位置，以及哪里必须保留 [[human-in-the-loop-ai|人的判断]]。[[pedagogy]] 罗列各种教学取向（[[active-learning|主动学习]]、[[problem-based-learning|问题导向学习]]、[[collaborative-learning|协作学习]]），[[learning-design]] 描述一门课程如何被设计，而本页罗列的是学生和教师实际*做什么*、按什么顺序做，以及尝试之后发生了什么。PAIRR——起草、同伴互评、AI 评阅、反思、修改——是文献最充分的例子，其背后的模式在各学科反复出现：先付出努力，AI 其次，关键判断由人来做。

## 值得思考的问题

- 模式是*序列*，不是工具。挑一个你布置的作业，写下学生做出一连串动作的顺序。在这个顺序中，AI 在哪些环节会有帮助，哪些环节会替学生完成本该由他完成的工作？
- 这里有些模式刻意让 AI 扮演*弱*角色——给提示而不是给答案，提问而不是纠正。为什么刻意"不太有用"的辅导者反而能带来更好的学习，这对你所在机构正在采购的 AI 工具有何启示？
- 本页证据最充分的模式（[[learning-by-teaching|向 AI 传授]]）要求学生解释，它改善了解释质量和提问质量，却*不能*改善客观回忆。如果你采用它，你会如何调整评估方式？
- 当 [[ai-feedback-quality|AI 反馈]]的质量高于教师反馈时，学生并没有更多地修改。这对"产出反馈"与"让学生使用反馈"之间的差别说明了什么？
- 情境会改变答案：有些模式是在线上异步环境下检验的，有些是带实验室的面对面环境。哪些模式你能在自己的环境中不借助新工具运行，哪些需要你没有的基础设施？
- 本页几乎所有模式都在判断点——评分、核验或解读——保留人的位置。这是一种设计选择、基于证据的必要性，还是迄今被检验范围的局限？

## 引言

教育学回答的是*我们该如何教学*；本页回答一个更窄、更具操作性的问题：**这些动作应按什么顺序发生，AI 在这个顺序中处于什么位置？** 这个区分很重要，因为同一个工具在序列中的位置不同，会产生截然相反的结果。在学生尝试解决问题*之前*放置生成式 AI 助手，会稳定地压低其后续无辅助表现；而放在尝试*之后*、给提示而非答案时，同类系统就能消除这种损害。

下面每个模式都标注了证据状态，因为本知识库的覆盖并不均衡，而对任何决定采用什么的人来说，这个差别很重要：

- **已检验** —— 至少有一篇文章报告了受控或比较性试验。
- **结果混杂** —— 经过检验，但没有对照组、结果相互冲突，或被检验变量与其他因素纠缠在一起。
- **设计提案** —— 该想法仅作为提案或框架出现，没有报告任何检验。它们集中收录在本页末尾的*设计提案（尚未检验）*中，不构成证据。

这些模式按其在课堂中所承担的功能分组：把努力放在帮助之前、把 AI 反馈与人类反馈配对、核验理解而非核验产出、让学习者成为教师、结构化协作，以及直面某个具体的 [[misconceptions|迷思概念]]。每种模式都报告了其情境（线上、面对面、混合）和学科，并在文末汇总。

## 把努力放在帮助之前的模式

这些模式共享一个结构性主张：学习者必须先承诺一次尝试，AI 才能介入。这是本知识库中支持最一致的设计规则。

### 在 AI 作答之前先回忆或尝试

**证据：已检验。** 序列是：凭记忆尝试，接受指导或范例，在分散的时段中练习，只有在承诺尝试之后才咨询 AI，接收探查迷思概念的应对性反馈，并且只有当反应显示出足够投入时才向前推进。

在一门混合式统计学课程中，针对 89 名学生，适应性分散回忆条件取得了最高的后测成绩（M = 78.19），并显著优于学习者自主的 AI 学习（M = 67.28, d = 0.92, p = .003），而固定间隔与适应性安排在统计上无法区分（[[adaptive-pretesting-retention|Akgun & Toker, 2026]]）。对照案例具有决定性：在一项针对 120 名学生的 [[rct|随机试验]]中，*使用*不受限制的 ChatGPT 学习的那组在 45 天后的突击测验中保持得更少——正确率 57.5%，而传统学习者为 68.5%，t(83) = −3.19, p = .002, d = 0.68——并且他们的学习时间也少了约 45%，这种劣势在学习时间协变量校正后依然存在（[[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]）。一项在线 MBA 课程中的预注册随机实地实验发现，增益追踪的是*已完成的周数*而非接触的分钟数（每多完成一个辅导周 +2.00 分，p = .018），读作 [[retrieval-spacing-interleaving|分散练习]]比总时间更重要（[[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]）。

### 生产性失败：先尝试，后指导

**证据：混杂，且比它的名声更薄弱。** 学生尝试一个针对尚未教授的概念的问题，辅导系统扣留解答并引出多次尝试，只在严格必要时才提供帮助，随后以比较和直接指导进行巩固。

唯一一项以被引导的辅导者检验完整序列的实地研究使用了新加坡的 17 名高中生：被引导条件取得了更高的生产性失败得分，在问题一致性上显著（p = .046），学生每次课平均产出 2.6 种表征（p = .05），但**没有测量任何学习结果**（[[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]）。最强的支持是间接的，来自一项针对 26 名学生的随机被试内实验：即时答案式 [[scaffolding]] 在模型抽象上显著*差于*同伴、助教和辅导角色（β = −0.692, p = .015; β = −1.039, p < .001; β = −0.769, p = .005），尽管学生*偏好*指令式辅导者——偏好与能力背道而驰（[[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]）。

### 错误分析与错误示例

**证据：混杂。** 学生诊断一件作品中的错误——违反引用完整性的 AI 生成图表、丢掉连接的查询、一段 [[llm]] 代码片段——获得迫使他们推断修正方式而非直接被告知纠正的线索，修复它，并反思产出中哪些部分不可信。

一项针对 13 名学生的在线数据库课程前后测研究，使用基于刻意 AI 失败案例的每周"批判—精炼"循环，成绩从 7 分制中的 4.25 升到 6.83（t(12) ≈ 5.10, p < .001, d = 1.49），但由于没有对照组，增益无法与 [[curriculum-design|课程]]或教师分离（[[pedagogy-ai-mistakes|Hosseini, 2026]]）。一项对 72 项计算教育研究的 [[meta-analysis-systematic-review|系统综述]]报告，错误分析是一种*独立的胜任力*：学生在纠正 LLM 生成的代码上显著差于传统编程考试任务（[[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]）。本知识库中没有文章报告对错误示例教学本身的受控检验。

### 带自我解释的样例

**证据：混杂——两半结果背离。** 样例以缺失待补的理由或待找的错误呈现；学生补全或修复它，解释自己的推理，然后尝试下一题。

在一项针对 113 名学生的课堂研究中，自适应分配引导式与含错样例优于随机分配题型（后测 M = 72.3 和 72.5 对对照组 65.7，A = .58, p = .005 和 p = .002），且 [[knowledge-tracing]] 变体把低 [[prior-knowledge]] 学生的成就差距缩小了 77.1%（β = 9.4, p = .001）（[[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]）。但在一项针对 302 名参与者的预注册实验中，把自我解释步骤*加入*详尽 AI 反馈后，在每一项指标上都输了：反馈时间翻倍（4.1 对 2.1 分钟，p < .001），完成题数减少 40%（2.0 对 3.4，p < .001），每个片段没有增益（OR = 1.03, p = .486），会话结束时的掌握度降低（65% 对 79%，d = .41, p < .001）（[[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]）。

## 把 AI 反馈与人类反馈配对的模式

本知识库中关于 AI 反馈被重复最多的发现是：它*与人类反馈结合*时比单独使用效果更好——而决定学生是否使用它的，并不是反馈的质量。

### PAIRR：同伴与 AI 评阅加反思

**证据：混杂（实施广泛，未经对照）。** 学生阅读并反思 AI 与反馈如何运作，起草，给予并接受同伴评阅，就同一草稿向 AI 征求按标准驱动的反馈，批判性地比较两者，撰写修改计划，修改，并反思哪些反馈改变了什么。

迄今规模最大的大学生使用 AI 反馈的研究跟踪了 10 门写作课和 3 门写作密集型 [[stem-education|STEM]] 课中的 654 名学生：58% 偏好 ChatGPT 与 [[peer-assessment|同伴反馈]]结合，36% 只要同伴反馈，仅 6% 只要 AI；75% 认为两者相似且相互强化；31% 的人称 AI 反馈"过于笼统"，而 28% 认为同伴反馈更具体；仅 5.3% 表现出对 AI 反馈的过度自信（[[pairr-ai-peer-review-2025|Sperber et al., 2025]]）。该模式还在一门 34 名学生的商务写作高年级课程中运行，约四分之一的编码反思表达了对 AI 反馈的怀疑或指出其不准确之处（[[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]）。两者报告的都是感知数据，都没有对照条件，这就是该模式是*混杂*而非*已检验*的原因。

### 同伴与 AI 反馈结合

**证据：已检验。** 比较性证据来自 PAIRR 项目之外。一项针对 122 名中国 EFL 学生的准实验发现，AI 加同伴整合反馈在行为、情感和认知 [[student-engagement|投入]]上均优于仅同伴反馈（全部 p < .001；偏 η² = 0.28, 0.28, 0.32），并在 IELTS 全部四个维度上改善了写作（F(1,119) = 42.68, p < .001，偏 η² = 0.26），其中任务完成维度最大（d = 1.41）——但没有延迟后测，因此持续性未测（[[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]）。在一项针对 12 组 45 名师范生的随机研究中，GenAI 支持的同伴反馈在论证上优于普通同伴反馈，而*提示支架*变体在反驳数据和回应反方观点等高阶要素上表现最好（[[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]）。

### AI 批评然后修改

**证据：已检验——伴随一个重要的零结果。** 起草，向 AI 征求按评分标准驱动的反馈，对照标准和来源批判性地评估该反馈，撰写修改计划，修改，并反思。

一项针对 120 名英语专业学生的 2 × 2 因子对照实验发现，同时接受过滤与评估训练的组写作质量增益最高（M = 7.92），其他条件分别为 6.10、4.56 和 3.10，深度修改从 28% 升到 48%，且优势在新题目上、在移除 AI 支持后依然保持（[[rethinking-ai-writing-feedback-literacy|Dai, 2026]]）。零结果才是最有教益的部分：在一项针对 70 名学生的随机三组实验中，思维链提示的 AI 反馈在质量上显著*高于*零样本 AI 反馈（p = .01）和教师反馈（p = .008），但这一质量优势**并未转化为更大的修改增益**——教师反馈带来了相当的改善（[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]）。

### 人对 AI 产出的事后审阅

**证据：混杂——审阅步骤很少是被检验的变量。** AI 生成草稿产出，自动化核验智能体检查其真实性、可读性或 [[hallucination-risk|幻觉]]，失败的检查回到循环中进行精炼，教师在一切到达学生之前审阅、编辑，并接受或丢弃。

一个四智能体循环在 8 名教师参与下产出了 212 道题，其中 166 道原样被接受，真实性检查按预期工作（标记了 10 道真实性问题，20 处数量或单位修改，最终题目中未发现数学错误）——但兴趣契合是薄弱环节，学生在 422 次回应中有 160 次拒绝了该主题（[[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]）。一个由 30 名教师评分的教师在场反馈工具，在九项指标上从未低于 4.1/5，并把每次作业的中位时间从 10–30 分钟压到 5 分钟以下，但作者承认没有学生评估，因此不支持任何学习主张（[[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]）。一个红队实验让利害关系变得具体：5 次提示注入中有 2 次在无人察觉的情况下改变了成绩，成功率为 100%（9/9）和 94%（17/18），使教师成为 [[automated-assessment|AI 评分]]产出唯一的真正检查（[[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]）。

## 核验理解而非核验产出的模式

由于 AI 能产出一件像样的作品，这些模式把评估转向作品本身无法独自提供的证据。

### 口头与答辩核验

**证据：作为一种格式已检验，但结果关乎分数与情感而非学习。** 提交一份允许使用 AI 的编程作业，随后在 48 小时内进行一次强制性的 15 分钟口头代码评审，学生解释程序并现场运行集成测试，评审占 70%，评分标准占 30%。

一项为期三个学期、针对 96 名学生的准实验发现，尽管有新政策，考试成绩没有统计显著变化（一门考试上约 2% 的改善），而粘贴字符占总字符的比例从 61.0% 升到 68.1%（p < 0.0001）；90% 的学生说评审激励他们更好地理解自己的代码，65% 说这帮助他们避免过度依赖（[[code-review-genai-cs1|Fowles et al., 2026]]）。异步录制的口头回答取得了显著高于面对面选择题的成绩（期中 Md = 92.5 对 70, p < .001；期末 Md = 94.2 对 86.4, p = .002），而跨格式相关仅为中等（τ = .44 和 .25）——作者提醒，这些是*格式分数差异，不是学习增益的证据*，且作弊行为未测（[[asynchronous-oral-assessment-2026|Pentland et al., 2026]]）。方向并非一致为正：学生在基于聊天的答辩中更平静（M = 6.50 对 5.86, p = .028），但在理解自己作品方面把面对面的答辩评得显著更好（p = .004）（[[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]）。

### 分阶段检查点与过程证据

**证据：混杂——机制本身没有受控检验。** 课程作业以分阶段模块运行，每个模块以一个检查点结束，同时核验产出*和*方法——用硬编码得出的正确结果会被拒绝——并有一个进阶前检查，把学习者送回被跳过的步骤。

一项针对 5 名研究生、自定进度量子信息课程的案例研究记录了 75 次互动，确认双重的产出加方法检查点按预期运作，但没有对照组（[[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]）。一项 27 名参与者的试点使用"停—阻"检查点，报告在全部十个受评技能领域上 [[self-efficacy]] 有显著增益（p < 0.001），而这是被试内前后测设计，增益无法与练习效应分离（[[agentic-education-coding|Naboulsi, 2026]]）。一项为期三年、针对 248 名 [[engineering-education|生物医学工程]]学生的准实验发现，加入带里程碑和评分标准的四模块问题导向学习后，A 率更高（66.4% 对 39.1%，Δ = +27.3 分，p = 0.042），在剔除受疫情影响的一年后依然保持，但比较是历史性的、非随机的（[[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]）。

## 让学习者成为教师的模式

### 向 AI 被教者传授

**证据：已检验，且是本页证据最充分的模式。** 学生学习内容，然后向一个被提示持有新手立场、绝不透露目标解释的 AI 解释；AI 要求解释、例子和核验推理，从低阶到高阶依次进行，直到解释令人满意为止。

一项针对 68 名职前教师的准实验发现，向 GAI 新手学习者解释，在界定翻转课堂（M = 4.18 对 3.29, p < 0.001, r = 0.474）及其活动（M = 4.91 对 3.06, p < 0.001, r = 0.642）上得分更高，产生了更多、质量更高的提问（两项均 p < 0.001）——但在客观题上**没有组间差异**（M = 23.18 对 21.57, p = 0.416）（[[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]）。一项针对 41 名学生的随机实验室实验发现，知识测试分数更高（校正后 11.86 对 10.53, F = 35.54, η² = 0.74），代码更清晰、更可读，但**代码正确性没有差异**（[[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]）。一项在 546 名学生中持续 11 周的部署发现，每多一次深度学习行为，预期测验尝试减少 2.7%（IRR 0.973, p < .001），而对照组被任务耗时和学期末规避行为混淆，后者上升到 30–35% 的外部内容复用（[[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]）。一致的形态：解释性和生成性工作有增益，客观回忆没有。

## 结构化协作的模式

### 有脚本的角色共用一台 AI

**证据：已检验，但在受控或非受控环境中，而非普通课堂。** 两名学习者共用一台 AI，被分配有轮换规则的显式角色；AI 按需承担一个角色，其产出发给全组。在结对编程变体中，共用 AI 对二人组的共同注意和努力建模，最多提前 30 秒预测关系破裂，并把支架从"什么都不做"到指令式提示分层升级。

一项针对 26 个二人组的被试内实验发现，反馈条件的调试成功率更高（t[49.96] = −13.51, p < .0001），完成更快（t[44.70] = 4.39, p < .0001），尽管它需要双眼眼动和瞳孔测量硬件，且没有检验向无监督结对工作的迁移（[[golrang-propact-pair-programming-2026|Golrang et al., 2026]]）。一项针对 16 组 58 名研究生的准实验发现，角色设计把思维导图内容分数从 1–5 级 SOLO 量表上的 3.65 提到 4.59（z = 3.771, p < 0.001），而节点和分支数持平——但由于没有对照组，无法排除练习效应（[[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]）。

### AI 辅助的讨论

**证据：混杂——唯一直接的实施是一个案例描述。** 学生分析一个情境并独立回答引导性问题，用标准化提示就同样的问题向 ChatGPT 提问，对照自己的答案评估 AI 回答的准确性，精炼自己的答案，并以全班讨论收尾。

该经济学活动刻意利用了一个 AI 错误——ChatGPT 把歌曲所描绘的行为称为"完全弹性"需求，而正确答案是非弹性——把对 AI 产出的核验变成讨论本身（[[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]）。它报告的是教师印象，不是测量到的结果。一项针对 67 名师范生的受测协作讨论序列发现，实验组优于讲座对照组（M = 51.45 对 43.89, p = 0.001, g = 0.839），共同调节上升（p = 0.043, g = 0.512）——但 AI 被用于*设计*该技术，而非中介讨论（[[ccct-cooperative-learning-technique|Tutal, 2026]]）。

## 直面某个具体迷思概念的模式

### 驳斥与概念转变

**证据：已检验——结果直接冲突。** 引出学习者具体的信念，呈现一段 [[refutation-text|驳斥文本]]或一段直面它的个性化 AI 对话，与反证和正确解释交锋，重述正确概念，然后延迟后再测。

一项针对 375 名成年人的预注册实验发现，个性化迷思 AI 对话在即时的信念削减上显著大于教科书式驳斥和中性 AI 对话，在 10 天后依然保持，但到两个月时与教科书式驳斥收敛（[[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]）。一项针对 413 名十年级学生的 Solomon 四组准实验发现了*相反*的结果：专家撰写和 AI 生成的概念转变文本都显著优于互动式 ChatGPT 对话，后者相对对照组没有显著优势，且增益几乎只限于高成就学生（[[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]）。第二篇论文明确指出了这一冲突，并将其归因于 [[prompt-engineering|提示设计]]和领域。驳斥文本本身在两项研究中都优于对照组。

## 情境与学科

模式决定情境需要什么，而若干模式只在一种环境中被检验：

- **线上与异步。** 回忆与间隔、苏格拉底式变体、带自我解释的样例、提示支架的使用、异步 [[oral-assessment|口头评估]]，以及向 AI 传授的部署。异步环境使*排序*成为承重结构，因为系统无法看到学生是否先尝试过。
- **面对面与混合。** [[productive-failure|生产性失败]]、错误分析、翻转变体、口头代码评审、有脚本的协作，以及概念转变研究。课堂时间往往被重新分配而非被取代——在口头评审模式中，讲座改为视频，从而让课堂时间容纳访谈。
- **受检验证据中出现的学科。** [[writing-education|写作]]与 [[language-learning|语言学习]]（PAIRR、同伴与 AI 反馈结合、AI 批评然后修改）、[[math-education|数学]]（回忆与间隔、生产性失败、样例、错误分析）、[[cs-education|计算机科学]]（苏格拉底助手、错误分析、口头代码评审、向 AI 传授、有脚本的结对）、[[medical-education|医学]]（临床访谈中的苏格拉底支架）、[[teacher-education|教师教育]]（有脚本的论证、向 AI 传授）、[[business-education|商科]]（翻转 MBA 辅导），以及概念转变和口头评估研究中的 [[physics-education|物理]]、[[science-education|科学]]和 [[vocational-education|职业]]情境。

## 证据尚不支持什么

直说，因为这些是最容易被悄悄丢掉的研究发现：

- **更好的 AI 反馈并不会产生更多修改。** 更高质量的思维链反馈在质量上胜过教师反馈，却没有带来修改优势（Farrokhnia et al., 2026）。
- **[[socratic-method|苏格拉底式提问]]并不自动更好。** 一项针对 132 名学生的随机试验发现，带完整上下文的苏格拉底助手在支持任务完成上被评为显著*更差*，差于所有其他配置（平均秩 48.63, μ = 3.53，对 4.27、4.16 和 4.12；χ²(3) = 12.14, p = .007），外部 LLM 使用最多（23%），完全理解式回应最少（48% 对 67%）（[[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]）——而一项医学 RCT 发现，含苏格拉底辅导者的 [[agentic-ai|多智能体]]系统在考试和沟通分数上胜过其对照组（[[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]）。
- **学生偏好效果更差的角色。** 指令式辅导被偏好，而即时答案支架压低了模型抽象（Zhu et al., 2026）。
- **核验格式改变分数而不证明学习。** 口头格式提高了分数、降低了 [[anxiety-and-stress|焦虑]]，同时一项研究发现面对面更利于理解，且没有研究测量作弊。
- **没有受控检验隔离人对 AI 产出的审阅**，且检查点机制从未作为被操纵变量被检验。
- **生产性失败和错误分析依赖小型、非受控研究**（n = 17 和 n = 13），测量的是策略忠实度或 [[self-report-measures|自陈]]，而非学习结果。

## 设计提案（尚未检验）

下面的模式来自知识库维护者提供的一份教师指南（*AI-Ready Course Design*，2026 年 9 月）。该指南明确声明其例子是**设计提案，而非经过检验的干预**，本知识库中也没有文章检验它们。它们在此作为值得尝试和评估的设计想法被记录下来，不得被当作证据阅读。

- **论证 + 修改轨迹**（写作、人文学科）。把只交论文改为：一份初始论点、两段带注释的引文、一篇修改后的论文和一条 150 字的决策说明；允许在第一稿之后进行 AI 批评。评估的是论断—证据连接，以及一条对照来源加以论证的、被接受或被拒绝的建议。
- **数据 + 有理由的论断**（科学、实验课程）。把一份打磨过的实验报告改为：原始观察、一张图、一条不确定性说明和一段把结果与论断联系起来的解释；AI 可以批评提供的解释，学生对照数据核验该批评。
- **尝试 + 错误分析**（微积分预备、微积分）。把只交答案的作业改为：一份初始尝试、对一个有缺陷样例解答的分析和一段修正后的解释；只有在尝试之后才允许提示。这是上面错误分析模式的设计形态，继承了该模式薄弱的证据基础。
- **立场 + 挑战 + 再思**（心理学、社会学）。把"发一次帖、回两次帖"改为：一个使用课程概念的、基于案例的论断；一名同伴提供一个反例，作者用证据修改或辩护。
- **项目 + 关联检查**（商科、健康专业）。把一个允许使用 AI、针对虚构组织或病案的推荐，与一段对两个关键决策的简短说明和对一个改变后的约束的回应配对；公布两个组成部分之间的评分关系。
- **计划 + 尝试 + 调整**（大学成功课程）。把一次泛泛的时间管理反思改为：一份为期一周的学习计划、一段尝试它的简要记录和一段与所发生的事情挂钩的修订；只有学生识别出约束之后，AI 才可以建议排课方案。

指南自身的告诫同样适用：录制的视频、反思和日志本身也可能有 AI 辅助，因此在完全异步的课程中，一段录制不应被视为对独立掌握度的核验。它的两种框架——"评估孪生"和把异步口头评估当作防作弊手段——仍是等待验证的框架；上文引用的异步口头评估研究测量的是格式分数，根本没有测量作弊。

## 关联概念

- [[pedagogy]] —— 本页将其操作化为序列的教学取向总览
- [[learning-design]] —— 模式被选择、排序并嵌入课程之处
- [[scaffolding]] —— 支配 AI 帮助应在何处的支持—淡出原则
- [[feedback]] —— 本页反馈模式所实例化的系统
- [[formative-assessment]] —— 这些模式大多服务的评估目的
- [[peer-assessment]] —— PAIRR 与组合反馈模式中人的那一半
- [[ai-feedback-quality]] —— 为什么反馈质量本身不能决定修改
- [[evaluative-judgment]] —— 学生必须对 AI 产出施加的评判
- [[feedback-literacy]] —— 批判性评估步骤正在培养的能力
- [[human-in-the-loop-ai]] —— 审阅模式的监督结构
- [[oral-assessment]] —— 核验模式所依托的格式
- [[process-oriented-assessment]] —— 分阶段检查点背后的逻辑
- [[productive-failure]] —— 先尝试后指导背后的概念
- [[retrieval-spacing-interleaving]] —— 分散回忆模式的证据基础
- [[desirable-difficulties]] —— 为什么付出努力的序列胜过流畅的序列
- [[misconceptions]] —— 概念转变模式所针对的对象
- [[refutation-text]] —— 直面迷思的文本形态
- [[learning-by-teaching]] —— AI 被教者模式背后的教学法
- [[socratic-method]] —— 提问模式及其相互冲突的证据
- [[collaborative-learning]] —— 有脚本共用 AI 工作的情境
- [[cognitive-offloading]] —— 每个"努力优先"模式都旨在规避的风险
- [[metacognition]] —— 这些序列中的反思步骤意在触发的东西
- [[prompt-engineering]] —— 结构化使用模式中的支架层
- [[transfer-of-learning]] —— 大多数模式最终被评判的结果
- [[assessment-validity]] —— 提出过程证据的全部理由
- [[academic-integrity]] —— 口头与过程核验背后的驱动力
- [[ai-literacy]] —— 通过批评 AI 产出而发展的能力
- [[online-teaching-and-learning]] —— 使排序成为承重结构的情境
- [[higher-ed]] —— 本证据大多生成所处的层级
- [[k-12]] —— 生产性失败、概念转变和口头评估研究所处的层级

## 关联文章

- [[pairr-ai-peer-review-2025]] —— 同伴与 AI 评阅加反思（PAIRR）：旗舰序列，N = 654（Sperber et al. 2025）
- [[gift-ai-pairr-business-writing-2025]] —— PAIRR 在商务写作课程中的应用（MacArthur et al. 2025）
- [[ai-peer-feedback-l2-writing-engagement-2026]] —— AI 加同伴整合反馈提升了投入度和 IELTS 全部四个维度（Liu 2026）
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] —— 协作论证中的提示支架 GenAI 同伴反馈（Chang et al. 2026）
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] —— 训练学生过滤与评估 AI 反馈：FRAC 与 APCA 条件
- [[farrokhnia-genai-feedback-student-revisions-2026]] —— 更高质量的 AI 反馈没有带来更大修改增益（Farrokhnia et al. 2026）
- [[guardrails-ai-teaching-assistants-programming-2026]] —— 苏格拉底加完整上下文被评为差于所有其他助手配置（Eastwood et al. 2026）
- [[ai-standardized-patient-scaffolding-medical-2026]] —— 临床访谈训练中的需求触发式苏格拉底支架，N = 100（Yang et al. 2026）
- [[hashmi-socratic-physics-chatbot-2025]] —— 入门力学中的苏格拉底聊天机器人：提问具体性从 10–15% 升到 100%（Hashmi et al. 2025）
- [[agent-type-feedback-style-self-directed-learning-2026]] —— 苏格拉底式与指令式智能体反馈，顺序未经平衡（Han et al. 2026）
- [[adaptive-pretesting-retention]] —— 适应性分散回忆胜过学习者自主 AI 学习（Akgun & Toker 2026）
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] —— 学习期间不受限制地使用 ChatGPT 降低了 45 天保持率（Barcaui 2025）
- [[ai-tutor-modality-randomized-field-experiment-2026]] —— 结构化辅导增益追踪已完成的周数，而非分钟数（Yang et al. 2026）
- [[rachatasumrit-example-problem-ratio-2026]] —— 例题与练习之比随知识类型而交叉（Rachatasumrit et al. 2025）
- [[adaptive-scaffolding-cognitive-engagement-its]] —— 智能逻辑导师中的适应性引导式与含错样例（Dey Tithi et al. 2026）
- [[structured-reflection-ai-explanatory-feedback-2026]] —— 给 AI 反馈加上自我解释后在每一项指标上都输（Asher et al. 2025）
- [[generative-ai-guardrails-harm-learning]] —— 有护栏的辅导消除了无护栏 GPT 造成的考试损害，约 1,000 名学生（Bastani et al. 2025）
- [[guided-llm-scaffolding-independent-learning]] —— 统计学中有引导与不受限制的 LLM 使用（Amanlou et al. 2026）
- [[preferred-scaffolding-ai-mathematical-modeling]] —— 即时答案支架压低了模型抽象却受到偏好（Zhu et al. 2026）
- [[puech-pedagogical-steering-llm-productive-failure-2025]] —— 引导 LLM 辅导者扣留解答以促成生产性失败（Puech et al. 2025）
- [[pedagogy-ai-mistakes]] —— 基于刻意 AI 失败案例的每周批判—精炼循环（Hosseini 2026）
- [[kumar-genai-computing-education-systematic-review-2026]] —— 作为独立胜任力的错误分析，跨 72 项计算教育研究（Kumar et al. 2026）
- [[lukesova-clue-before-correction-2026]] —— L2 修改中的引导线索而非直接纠错（Lukešová & Jennings 2026）
- [[wang-genai-novice-learner-learning-by-teaching-2026]] —— 向 AI 新手学习者解释，N = 68（Wang et al. 2026）
- [[chatgpt-teachable-agent-programming-lbt-2024]] —— 教一个 ChatGPT 智能体编程的随机检验（Chen et al. 2024）
- [[explique-teachable-agent-algorithms-546-students-2026]] —— 向 546 名学生部署 11 周的"传授式学习"（Wang et al. 2026）
- [[socrates-students-instructors-llms-lbt-2025]] —— 学生设计 LLM 无法回答的问题（Yang et al. 2025）
- [[code-review-genai-cs1]] —— 作为对 CS1 中 GenAI 的回应而设的强制口头代码评审访谈（Fowles et al. 2026）
- [[asynchronous-oral-assessment-2026]] —— 异步录制口头评估对面对面选择题（Pentland et al. 2026）
- [[aivaluate-anxiety-assessment-2026]] —— 基于聊天的答辩降低了焦虑，而面对面被评为更利于理解（Yusuf et al. 2026）
- [[ai-supported-oral-assessment-tvet-2026]] —— AI 为职业工作坊中的教师判断浮现评分标准证据（Adams 2026）
- [[quantum-education-its]] —— 自定进度研究生课程中的产出加方法检查点（Elhaimeur & Chrisochoides 2026）
- [[agentic-education-coding]] —— 停—阻检查点与进阶前检查，N = 27（Naboulsi 2026）
- [[pbl-biomedical-engineering-genai-2026]] —— 带里程碑与评分标准的四模块问题导向学习（Nnamdi et al. 2026）
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] —— 四智能体教师审阅循环，以及兴趣契合失效之处（Walkington et al. 2026）
- [[zhao-learnlens-feedback-educators-loop]] —— 带核验分数的教师在场反馈（Zhao et al. 2025）
- [[humble-prompt-injection-ai-grading-red-team-2026]] —— 在无人察觉下改变成绩的提示注入，使教师成为唯一检查（Humble 2026）
- [[golrang-propact-pair-programming-2026]] —— 结对编程中预测协作破裂的共用 AI（Golrang et al. 2026）
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] —— 群体知识建构中有脚本的学习者与 AI 角色（Cheng et al. 2026）
- [[paratutor-parent-child-tutoring]] —— 亲子辅导中角色分离的 AI 支持（Luo et al. 2026）
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] —— 个性化 AI 对话在即时时胜过教科书式驳斥，两个月内收敛（Corbett & Tangen 2026）
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] —— 概念转变文本胜过互动式 AI 对话，结果相反（Akdogan 2025）
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] —— AI 支持的引导探究与概念理解（Aydin 2026）
- [[ai-enhanced-flipped-classroom-three-year-2026]] —— 传统、翻转与 AI 增强翻转的三组比较（Liu et al. 2026）
- [[flipped-learning-genai-design-education-2026]] —— 带参数引导提示支架的翻转工作室课程（Qu et al. 2026）
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] —— 教学模式调节结果：翻转 g = 1.96 对传统 g = 0.46（Jing et al. 2026）
- [[ai-tutor-statistical-programming-adoption-2026]] —— 翻转课程中每周使用作业辅导预测迁移任务分数（Préau et al. 2026）
- [[beck-genai-literacy-economics-hands-on]] —— 基于一个 AI 错误构建的五步 AI 批评讨论（Beck & Brodersen 2025）
- [[ccct-cooperative-learning-technique]] —— 带分配角色与画廊漫步的受测协作学习序列（Tutal 2026）
- [[ai-assisted-seminar-learning-information-literacy-2026]] —— 带 AI 检索推荐器的研讨与同伴讨论模块（Huang 2026）
