---
title: 图书馆员
created: "2026-09-20T12:40:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, academic-integrity, human-ai-collaboration]
pedagogy: [scaffolding, inquiry-based-learning, collaborative-learning, metacognition]
technology: [generative-ai, llm, knowledge-graph, recommender-systems-and-learning-paths, human-in-the-loop-ai, educational-nlp]
ethics: [trust, trust-calibration, ethics]
institutions: [governance, educational-policy-ai]
audience: [librarians, learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/librarians
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **图书馆员** —— 那些教授信息素养、承担研究咨询、建设馆藏与检索系统，并日益作为 AI 搜索与推荐工具的人类对应方的图书馆与信息专业人员。在知识库的研究中，他们是这样一些人：处理模型无法裁定的可信性问题——一项专利、一份技术标准或一份行业报告是否值得被依赖——并作为课程与政策共同设计的伙伴。他们在 [[ai-education|教育中的 AI]] 的位置因此是双重的：既是教授来源评价与检索策略的教育者，又是构建于 AI 检索之上的系统内部的 [[human-in-the-loop-ai|人类层]]。

## 值得思考的问题

- AI 现在能在几秒内回答图书馆员过去要受理的事实性参考问题。那份工作里哪一部分曾经是*那个答案*——哪一部分又是关于一个来源是否值得被相信的判断？
- 在嵌入式图书馆员研究中，来源评价问题恰好在 AI 最不自信的那些案例里主导了咨询（38.5%）。这是一个要修的设计失败，还是可信性判断抗拒自动化的证据？
- [[genai-academic-search-workshop|CHIIR 2026 研讨会]] 报告了一个信任缺口——学生对 GenAI 过度 [[trust-calibration|信任]]，而教师不信任它。谁来弥合这样的缺口：图书馆员、教师，还是一个展示其来源与信心的界面？
- [[ithaka-sr-ai-skills-college-graduates-2026|Ithaka S+R]] 发现，机构既缺乏关于什么是 AI 技能的共识，也缺乏评估它们的框架。信息素养教学是这项工作天然的归宿吗——这样说，是否是在要求图书馆承担一份与其人员编制不匹配的负荷？

## 引言

图书馆员是坐在学习者问题与学术记录之间的专业人员：参考与学科联络馆员、学科专家、讲授信息素养教学的教学馆员，以及管理馆藏与机构知识库的工作人员。在 [[ai-education|教育中的 AI]] 里，他们被点名的频率远低于 [[teacher-role|教师]]和 [[administrator|行政人员]]，然而语料库赋予了他们一个具体、可检验的角色。他们是 [[generative-ai]] 所造成的可信性问题的答案，是教授 [[evaluative-judgment|评价判断]]与检索策略而不只是提供来源的教师，并且——在知识库最强的那个案例中——是一个 AI 系统的设计组件，而不是它旁边的一项服务。

本页把这个角色当作与其邻居不同的来对待。[[educational-technology-developers]] 建造检索与推荐系统；图书馆员决定那些系统不应被信任去得出结论。[[academic-integrity]] 把 AI 使用框定为作者身份与披露；图书馆员的框架——署名、来源、获取——与之相邻但更具体。

## 信息素养作为教学，而不只是协助

知识库中关于这个角色最详细的证据来自 [[ai-assisted-seminar-learning-information-literacy-2026|Huang 的嵌入式图书馆员研讨平台]]，它为一支准实验中的工程研究团队而建，60 名来自三个项目的学生、历时八周（30 人在整合平台上，30 人接受常规图书馆教学）。整合组在一份基于 ACRL 的五点信息素养量表上增益 0.78 分，对照组 0.25 分，组内最大增益在检索技能（+0.87）与来源评价（+0.83），其次为信息综合（+0.73）与伦理使用意识（+0.70）。值得注意的是，仅表现型题目也产生了大效应，所以增益不纯粹是信心。所教的内容映射到图书馆工作：检索策略形成、来源鉴定、引用与知识库导航——正是后来主导咨询记录的四个类别。

更广的语料库补上了一个人员编制与交付问题。[[genai-academic-search-workshop|CHIIR 2026 研讨会报告]] 描述了一位图书馆员基于对 2,076 名学生与 101 名图书馆员的调查而建的长 15 周的数字素养 [[curriculum-design|课程]]，并记录了报告人的判断：单次研讨会给学生留下一个被误解的基础；同一报告把一位图书馆员的教学覆盖计为约 1,700 名一年级学生。

## 在 AI 最弱的地方，图书馆员扛起了负荷

研讨平台刻意地分工：算法大规模处理检索，人类在不确定下处理评价——而记录显示这个分工在起作用。跨 312 次咨询（每位参与者 10.4 次），来源评价与质量占 38.5%，检索策略形成 29.2%，引用管理 18.6%，知识库导航 13.7%，73.4% 在六小时内得到答复。作者把这直接连到模型表现：[[recommender-systems-and-learning-paths|推荐引擎]]达到精确率 0.68 与召回率 0.61，高于布尔关键词基线（0.52 与 0.48），但对专利与标准的可信性判断仍然不足，自然语言查询处理正确回答了 72.8% 的工程专属查询。满意度遵循同样的次序——馆员协助最高，为 5.0 中的 4.3，高于推荐（4.1）、查询（3.9）、研讨会（3.8）、学习路径（3.6）与 [[knowledge-graph|知识图谱]]（3.4）——而访谈记录了 30 名学生中 21 人提到对图书馆员在场的信任。使用是异质的——30 人中 11 人依赖 AI，8 人依赖馆员，11 人两者都用。

张力是双向的。AI 处理最差的案例是可信性问题，而平台自己的作者得出结论：在可信性决策点上保留一位人类专家，是实在的教训。但这项研究是单站点、非随机的，它的三个组件从未被分离，作者称结果"仅仅是初步的"，并指出从未测试过图书馆员支持撤出后的持续性。人类层是增益的原因，还是一个 0.68 精确率推荐器周围的安全网，仍然悬而未决。

## 共同设计、伙伴关系，以及谁来为验证付费

图书馆员也作为共同设计者而非服务提供者出现。[[maybee-disruptive-partnerships-sap-2025|Maybee、LeGrand 与 Fundator]] 记录了普渡大学的 Algorithmic Literacy Partners——一个由学术图书馆员促成、为期六周的学生—教师学习共同体，本科生与教师在此共同产出 AI 课程 [[educational-policy-ai|政策]]和 AI 整合的 [[group-work|小组项目]]。作者把它框定为针对学生 [[ai-misuse-learning-harm|AI 滥用]]之缺陷叙事的替代方案，而 SPIRaL 项目的学生反思显示出信息素养被重新学习：参与者起初把它等同于来源评价，随后转向把它读作一种与 [[agency|主体性]]相连的分层学术实践。那个转变——从检查来源到判断知识生产——正是图书馆员被定位去促成的。

另外两条线索设定了这个角色的边界。[[pearls-epistemic-verification-2026|PEARLS 框架]] 把获取（Access）、正当性（Legitimacy）与来源（Source）列为其六个验证维度之三，并指出验证要消耗数据库访问、学科语言，有时还有付费工具——因此资源较少的学习者要为证明负责任的使用承担更重的负担，而图书馆员被点名为共同设计所需要的各方之一。[[aarc-ai-research-competency-2026|AARC 框架]] 把教学目标讲得明确：验证、引用与反思，作为通过研究过程来评估的反复承诺——包括检出捏造与偏见——而不是通过制品。[[hingle-collaborative-ai-literacy-2025|Hingle 与 Johri]] 的综述显示，图书馆已经在用的那些设计同样可迁移：小组工作对信息素养的益处在 [[ai-literacy|AI 素养]]学习中泛化，包括与 [[agentic-ai|AI 智能体]]作为伙伴的情形。

## 对教育中 AI 的启示

- **在可信性决策点上保留人类。** 约 0.68 的精确率留下大约三分之一的被呈现材料未经核对，而来源评价是最常被请求的咨询类型——这是任何 AI 搜索或推荐层的一条设计线索。
- **把信息素养当作教学。** 在表现型题目上站得住的增益是检索策略与来源鉴定，这正是教学馆员已经在教的，也是归因与验证 AI 输出所需要的（[[academic-integrity]]、[[critical-thinking]]）。
- **为异质路径设计。** 在偏好 AI、馆员或两者的几近均等的群体下，按学科与工作量路由咨询，以每位参与者 10.4 次的速率吸收了 312 次；一条单一的强制路线会让一些学习者得不到充分服务。
- **让信心与来源可见。** 研讨会的"搜索即学习"线索追问哪些认知过程不应被外包，并呼吁保留决策点的界面——一份图书馆员可以从他们平常的"来源可见"工作标准来具体说明的 [[scaffolding|脚手架]]。
- **为人类层做预算，而不只是为模型。** 咨询在数小时内得到答复、达到规模，是因为工作人员被刻意地路由；假定学习者会独自处理可信性判断，就是把那份代价转移给最无力承担的人。

## 关联概念

- [[ai-literacy]]
- [[evaluative-judgment]]
- [[critical-thinking]]
- [[academic-integrity]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[scaffolding]]
- [[inquiry-based-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[learners]]

## 关联文章

- [[ai-assisted-seminar-learning-information-literacy-2026]] — 嵌入式图书馆员研讨平台；312 次咨询以来源评价为首
- [[genai-academic-search-workshop]] — CHIIR 2026 关于 GenAI 与学术检索的研讨会；馆员信任缺口
- [[maybee-disruptive-partnerships-sap-2025]] — 学术图书馆员与学生作为伙伴共同设计 AI 素养
- [[aarc-ai-research-competency-2026]] — 验证、引用、反思作为可教的研究承诺
- [[pearls-epistemic-verification-2026]] — 六维验证协议；获取与正当性作为闸门
- [[hingle-collaborative-ai-literacy-2025]] — 面向 AI 素养的协作学习；信息素养的益处的迁移
- [[ithaka-sr-ai-skills-college-graduates-2026]] — 教师把归因与负责任使用排得最高，但 26 项技能中只教少数几项
- [[bird-multimodal-educational-literature-2026]] — 为英语教师与图书馆员等非技术用户构建的文本复杂度工具
- [[cognitive-offloading-llm-synthesis-writing]] — 当 AI 为学习者综合来源时，学习者外包了什么
- [[citation-errors-hallucinations-computing-education-2026]] — 被捏造与错误的引用作为验证问题
