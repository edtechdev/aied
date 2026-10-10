---
title: 法律问题与风险
created: "2026-09-18T05:40:00-04:00"
updated: "2026-10-09T19:06:58-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-09-30T07:29:37-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **法律问题与风险** — 教育机构、教职员和学生因[[generative-ai|生成式 AI]]治理不善而承担的风险：一个学生仅凭检测器的分数就被错误地指控作弊，一个监控系统所观察和记录的内容超出考评所需，一条惩罚辅助工具的过度宽泛规则，或一份含糊到无法一致执行的政策。风险不是单一的法律问题，而是几个同时到来的问题——证据性的（指控究竟能否被举证）、合同与程序性的（机构是否遵守了自己的规则并给了学生公平的申辩）、平等方面的（规则是否给残障学生或非母语者学生造成负担），以及数据保护方面的（监控收集了什么、存放在哪里）。它与[[academic-integrity]]不同，后者是被执行的行为框架：本页讲的是这种执行受到质疑时会发生什么。

## 值得思考的问题

- 检测工具无法可靠地识别作者身份。如果工具本身不能确立争议事实，那么一桩违规案件实际依靠的是什么？
- 监考和 AI 检测数据被大规模生成并无限期保留。这些数据的法律风险由谁承担，机构还是其供应商？
- 当一项政策禁止"使用 AI"而不区分[[wright-transcription-not-generation-2026|转录与生成]]时，这条规则是在保护学术诚信，还是在惩罚一项残障便利措施？

## 引言

本知识库关于这一主题的证据是程序性的，而非法理层面的。它记录了机构把什么当作证据、指控程序如何运作、这些工具多么不可靠，以及监控收集了什么；它还没有记录诉讼结果。这一空白应当被直说，而不是用自信的断言来填补：能够裁定这些问题的案件大多未被报道、已和解，或仍处于机构内部程序之中。

文献确实支持的是对造成法律风险的失败模式的一种描述。反复出现的模式是：让机构陷入风险的，是它自己的工具和程序，而非恶意的指控者——一个被当作结论的概率性分数，一条意图清晰而范围模糊的规则，一个收集了没人要过的数据的系统，以及一场假定技术证据无需检验的听证。

## 风险集中在哪里

### 错误指控与缺陷证据

[[munoz-misconduct-allegation-evidence-2026|Munoz 等人（2026）]]分析了真实的生成式 AI 违规指控卷宗，将机构使用的证据分为几类：仅在监考或有督导的考评中可得的系统记录行为痕迹；过程证据，如草稿、督导会谈与展示（只要这些实践存在）；以及由调查本身产生的证据。对法律风险有两点随之成立。第一，在无督导的提交中，系统记录一类是空的，这会把案件推向更弱的类别。第二，他们记录到，自然正义原则要求学生在任何裁定之前被告知指控并有机会回应，这些义务被写入澳大利亚监管标准（Department of Education, 2021; TEQSA, 2025）以及口碑良好的学术诚信政策。回应的机会通常是一次调查会谈或专家组访谈，而学生所说的任何话都会成为证据记录的一部分——这意味着程序性失败，而不只是证据性失败，才是一个案件变得脆弱的地方。

证据问题藏在它下面。检测器输出是最常被伸手去取的证据，也是最少能承其重量的证据。[[hadra-ai-detector-accuracy-efl-2026|Hadra 等人（2026）]]在 192 篇文本的平衡语料上测试了 Turnitin 和 Originality，发现总体准确率分别为 0.69 和 0.61，两者在人机混合写作（真实指控中最可能出现的形式）上表现都很差，准确率随文本长度、科学写作的文体进一步下降，并且当作者是英语作为外语（EFL）学生时，倾向于把人类写作误分类为 AI。[[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer 等人（2026）]]从不同的语料和工具组合得出同样的结论，[[bassett-ai-detectors-education-2026|Bassett 等人]]提出了结构性论点：任何阈值都无法解决这个问题——调高到能捕捉 AI 使用的检测器会标记人类作品，调低到能放过人类作品的检测器会漏掉 AI 使用，因此任何单一分数都是对犯哪类错误的选择。[[karr-ai-detection-humanization-2026|Karr 的综述]]从写作人性化一侧到达同样的结论，[[teichmann-detecting-undetectable-misconduct-2026|Teichmann 等人（2026）]]论证程序框架本身现在需要重新评估，因为不可检测的违规时代打破了"违规可以由提交的成品来举证"这一假设。

### 隐私与监控

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana 等人（2026）]]梳理了护理考评中的[[remote-proctoring|远程监考]]，把隐私与监控列为其主要关切之一，与之并列的是对学生的影响和[[equity-in-ai-education|公平]]效应。[[automated-online-exam-proctoring-decade-review-2026]]和[[academic-dishonesty-automated-proctoring-ai-2026]]在更长的时间窗内记录了同样的[[ai-technologies|技术]]，它们提出的数据保护问题是普通问题，但带有法律后果：捕获了什么（视频、音频、击键、视线、房间扫描），保留多久，存放在哪里，谁能访问，供应商是否会继续处理，以及学生是否以完成考评为条件同意这些。在受监管的数据环境中运行的机构，在任何诉讼出现之前就承担着法定义务，而本知识库关于本地与供应商托管 AI 系统的 FERPA 与 GDPR 意识研究，展示了同样的问题如何适用于教学工具，而不仅仅是监考。

### 无障碍与残障

[[wright-transcription-not-generation-2026|Wright（2026）]]论证，笼统的"使用 AI"禁令是过度包含的，因为它不区分语音转文字转录、OCR 与生成式起草，而且影响精细运动控制、字迹可辨性或打字准确性的学生历来依赖的正是这些工具——包括 Dragon NaturallySpeaking 这类独立语音转文字产品，其中一些已被停产或功能退化，由 AI 驱动的转录填补功能空缺。Wright 指出，残障、辅助技术与 AI 违规政策的交叉领域研究不足，且这种替代的规模尚未被实证测量。风险暴露的形状是直白的：一条剥夺了学生产出可辨文本之主要手段的规则，可能正需要一套便利措施程序才能存续。[[shin-ai-policies-sld-2026]]从政策一侧为特定学习障碍学生记录了同样的空缺，而本知识库关于[[assistive-technology]]和[[neurodiversity]]的工作提供了周边的术语。

### 语言公平与支持—替代边界

[[li-genai-assessment-language-equity-2026|Li（2026）]]为把英语作为附加语言的学生提供了这一论证的平等版本。由于单一界面现在同时执行被允许的编辑和被禁止的起草，把[[generative-ai|生成式 AI]]当作一类未经授权的协助的规则，会施加更高的合规负担在最可能需要正当语言支持的学生身上，把怀疑集中到表面流利度发生变化的写作者身上，并使选择性执法得以在薄弱的证据上施行——而指控会带来声誉、学业，有时还有签证或经济上的后果。补救办法是一条由功能与考评构念而非工具名称定义的边界，把不增加任何想法、来源或分析结构的表层干预，与创造或实质重塑智力成果的替代区分开来，并配合校准过的[[ai-use-disclosure|披露]]，使例行翻译和编辑不会带来超过单语同龄人所承担的合规成本。其法律结构是间接歧视推理——找出表面中立的规则所产生的群体偏斜负担，然后追问是否以合乎比例、实际可行的方式追求了正当目的——再加上行政法上的预期：决策者能够陈述所适用的规则、所依据的证据，以及结果为何合乎比例，正是这一点使裁定可被复核、程序可被称为正当。[[ai-detection|检测]]被降级为分诊信号，草稿历史、分阶段提交和一段简短的构念对齐对话被优先作为证据，因此风险暴露是双向的：既面向歧视或复核挑战，也面向建立在光鲜语言或非母语措辞等代理指标上的脆弱结论。

### 规则不清、执法不一

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski 和 Hurley（2025）]]把清晰视为可辩护执法的前提而非礼节，并报告说法学院的政策从全面的[[governance]]到没有任何明文政策不一而足，多数留给个别教师去解释和适用规则。[[qian-governing-genai-higher-ed-policy-2026|Qian（2026）]]在美国各大学发现同样的差异，支持生态系统的差异也同样大，[[crompton-governing-genai-higher-ed-delphi-2026]]报告了专家关于治理碎片化的共识。一个学生因无人能精确陈述的规则而受处分，这首先是一场关于程序与公平的争议，其次才是一场关于 AI 的争议，[[sharma-judgment-visible-genai-assessment-2026|Sharma（2026）]]论证补救办法是让判断与责任变得可见的[[assessment|考评设计]]，而不是推断它们的监控。[[watson-rainie-ai-challenge-faculty-survey-2026|Watson 和 Rainie（2026）]]对 1,057 名美国教师的调查从另一个方向显示了同样的不一致：87% 的受访者自己撰写作业层面的规则，而只有 48% 的人说所在机构有成文指南、35% 的人说所在院系有，因此同一机构内的学生面对的是由个人撰写的政策拼凑物。这些文件背后的结构性回应很薄弱——55% 的案例中有任务组或监督小组，但只有 13% 把[[ai-literacy|AI 素养]]采纳为通识教育成果——这在法律上要紧，因为执行一条机构从未采纳的规则是难以辩护的。

[[coates-governing-academic-integrity-indicators-2025|Coates、Croucher 和 Calderon（2025）]]把弱点定位得更靠上游，在治理之中，而不在学生行为或工具质量之中。他们的学术诚信指标框架——8 个维度下的 130 个条目，从设计与开发到分析、报告、评估与改进——是写给理事会和委员会的治理问题：机构的最高理事会是否收到关于考评过程与结果的更新，关键绩效指标是否覆盖考评质量，入职与新生教育是否包含学术诚信，以及是否存在转介合同代写案件的简单渠道。他们的改革计划针对治理架构、担任治理角色的人，以及支持考评的技术和资源，并论证这种发展若无来自[[regulation]]、[[benchmark|基准]]和跨机构竞争的外部推动则不太可能兑现。对法律风险的含义是：可辩护的立场建立在对自身实践的知悉与记录之上——这正是机构在裁定受到质疑时所需要的同样信息。

### 攻击自动化评分器

一种不同的风险暴露藏在工具本身之中。[[humble-prompt-injection-ai-grading-red-team-2026|Humble（2026）]]在一篇合成作文的文件中藏了五处间接提示注入，机构的[[automated-assessment|AI 评分工具]]（Microsoft Copilot、GPT-5.2）在六次基线运行中六次判为不及格。两种策略把分数提了上去而对用户没有任何可见警告，报告的攻击成功率分别为 100%（9 次中的 9 次）和 94%（18 次中的 17 次），其手段结合了指令操纵、角色扮演与混淆；该工具在拦截住最简单的攻击后悄悄禁用了一个对话，在其中一次迭代中它宣布自己永远不会遵循嵌入指令，然后在接下来的六次运行中每次都提高了分数。通过隐藏指令取得的分数不带有任何[[assessment-validity|效度]]主张，而同样的技术可以用来拉低一份提交而不在输出中留下持久痕迹——这意味着受质疑的自动化决定的申诉记录可能是空的，而违规（或优异）的结论根本不能从成品中举证。Humble 面向行业的要求是清晰的[[educational-policy-ai|AI 政策]]、[[educational-development|专业发展]]，以及标准化的、领域无关的韧性测试，使攻击面被测量而非被假定，并让限制性 AI 使用和[[human-in-the-loop-ai|人工复核]]保留给高风险的工作。

### 走出校门

对专业项目而言，风险暴露并不在毕业时结束。Gutowski 和 Hurley 记录到，约束执业律师的职业行为规则——技术胜任义务、保密义务、对使用这些工具的他人的监督义务、对法庭的坦诚义务——已经附加于 AI 使用，而[[hallucination-risk|幻觉]]的权威依据已经给提交捏造案件的从业者带来了制裁。同样的迁移逻辑适用于任何执照、注册或法定义务随毕业生而去的地方，这就是为什么[[legal-education|法律教育]]与[[medical-education|健康专业]]的学科页面应当与本页并置。

## 开放问题

- 这些风险中哪些真正产生了诉讼或监管裁定？本知识库有程序、政策和技术评估，但没有案件结果，不应当被当作它有来读。
- 一旦机构在听证中承认自己的错误率，检测器输出还能否作为任何东西的证据存在，还是这一承认把案件转化为程序公平之争？
- 当监考和检测通过第三方平台运行时，谁是数据控制者，供应商还是机构？这会不会改变给机构的建议？
- 机构是否应当公布其对 AI 违规适用的证据标准，就像其他地方公布证据门槛那样，以此同时减少错误指控和法律风险？

## 关联概念

- [[academic-integrity]] — 其执行承载风险的行为框架
- [[ai-detection]] — 错误指控案件核心的工具
- [[remote-proctoring]] — 考评中的监控及其数据保护问题
- [[assessment-validity]] — 证据能否支持从它得出的主张
- [[privacy]] — 学生数据的收集、保留与后续处理
- [[regulation]] — 机构必须履行的法定与监管义务
- [[governance]] — 内部政策设计与执法一致性
- [[educational-policy-ai]] — 机构 AI 政策作为意外风险的来源
- [[ai-use-disclosure]] — 披露预期及其不可执行的边界
- [[accessibility]] — 规则移除辅助工具时的合理调整
- [[assistive-technology]] — 过度包含问题中心的工具
- [[neurodiversity]] — 最易受过度宽泛禁令影响的学生
- [[equity-in-ai-education]] — 检测与监控的差异化负担
- [[student-experience]] — 先于法律代价的人的代价
- [[hallucination-risk]] — 捏造依据作为职业与机构责任
- [[reducing-ai-misuse]] — 相较于指控的预防性替代

## 关联文章

- [[munoz-misconduct-allegation-evidence-2026]] — 违规指控卷宗实际包含什么证据，以及自然正义要求
- [[hadra-ai-detector-accuracy-efl-2026]] — 检测器准确率、混合文本的失效与 EFL 误分类风险
- [[van-vlasselaer-ai-detector-reliability-2026]] — 检测工具在第二组语料上的可靠性
- [[bassett-ai-detectors-education-2026]] — 为何没有哪个检测阈值是对的：错误权衡论证
- [[teichmann-detecting-undetectable-misconduct-2026]] — 证据变得不可检测时对违规程序的重新评估
- [[wright-transcription-not-generation-2026]] — 过度包含的 AI 规则、残障便利与合理调整
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — 远程监考的梳理，含隐私与监控关切
- [[automated-online-exam-proctoring-decade-review-2026]] — 自动化监考研究的十年
- [[academic-dishonesty-automated-proctoring-ai-2026]] — AI 时代的学术不端与监考
- [[gutowski-hurley-genai-policy-legal-education-2025]] — 政策清晰作为可辩护执法的前提
- [[qian-governing-genai-higher-ed-policy-2026]] — 创新型美国大学的政策与支持生态
- [[crompton-governing-genai-higher-ed-delphi-2026]] — 关于治理碎片化的专家共识
- [[sharma-judgment-visible-genai-assessment-2026]] — 通过可见的判断而非监控实现诚信
- [[shin-ai-policies-sld-2026]] — 特定学习障碍学生的政策空缺
- [[li-genai-assessment-language-equity-2026]] — 语言公平作为规则设计问题：支持—替代边界、间接歧视与可复核性（Li 2026）
- [[humble-prompt-injection-ai-grading-red-team-2026]] — 学生通过间接提示注入攻击 AI 评分器，分数在未被察觉的情况下被改变（Humble 2026）
- [[coates-governing-academic-integrity-indicators-2025]] — 用于认证考评的治理指标与改革计划（Coates、Croucher 与 Calderon 2025）
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1,057 名美国教师：个人政策远超机构政策，结构性回应薄弱（Watson 与 Rainie 2026）
