---
title: "中等教育"
created: "2026-11-18T03:22:45-05:00"
updated: "2026-11-18T03:22:45-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: concepts/secondary-education
source_updated: "2026-11-15T06:35:09-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
connected_concepts: [k-12, primary-education, undergraduate-education, intelligent-tutoring, academic-integrity, ai-detection, automated-assessment, assessment-validity, ai-literacy, help-seeking]
connected_articles: [one-click-away-khanmigo-two-year-school-experiment-2026, ai-tutoring-micro-rct-gcse-science-2026, leite-its-k12-meta-analysis-2025, ai-supported-instruction-stem-meta-analysis-2026, genai-learning-motivation-meta-analysis-2026, kreijkes-llm-note-taking-reading-comprehension-2026, jansen-argumentative-writing-feedback-receptivity-2026, chang-shared-epistemic-agency-gai-scientific-writing-2026, clerc-ai-literacy-workshop-llm-regulation-2026, cuenca-rodriguez-genai-use-caution-trajectories-2026, schaller-ai-text-detection-authentic-writing-2026, chan-rethinking-aigiarism-secondary-integrity-2026, ai-marking-accuracy-gcse-physics-2026, porcaro-ai-grading-benchmark-2026, wu-genai-scientific-literacy-china-2026, student-motivation-need-satisfaction-genai-sdt-2026, perez-montesdeoca-genai-secondary-systematic-review-2026, wu-genai-secondary-innovation-digital-literacy-2026, zhang-ai-learning-tools-tpb-high-school-2026, schicchi-high-school-genai-attitudes-scale-2026, torres-peralta-perceived-learning-engagement-homework-2026, cho-chatgpt-high-school-gpa-2025]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **综述：** 中等教育是[[generative-ai|生成式人工智能]]的使用已属寻常、而实测的[[learning-gains|学习增益]]小于为其所做宣称的那一个学段。在普通初中的一项为期两年的试验产生了每年约 0.06–0.08 SD 的效应，而 K-12 [[intelligent-tutoring|智能辅导]][[meta-analysis-systematic-review|元分析]]约为 g = 0.27，因为限定效应的是[[student-engagement|投入]]与[[help-seeking|求助]]，而非模型能力。学生偏爱替他们承担更多认知工作的工具，而[[ai-detection|检测器]]能分开整篇文章却分不开句子。证据从考试复习，经由[[writing-education|写作]]与作者身份，延伸到评分、检测，以及使用跑在怀疑之前的初中岁月。

## 值得思考的问题

- 一位导师就在一键之遥，然而中位学生只在 17% 的含错误会话中向它求助。在你的课堂上，是什么让开口去问比跳过去更省力？
- 学生偏爱[[conversational-ai|聊天机器人]]甚于做笔记，而从它那里学到更少。你会在考试替你发现这个陷阱之前，怎样把它抓住？
- 检测器在整篇文章上达到 F1 0.96、在句子上 0.88，并在一次改写后损失三分之一的召回率。什么样的诚信政策能经受住这一点？
- 几乎每一项中等教育试验都是四到十二周、以单元测验收尾。什么能为一个整学年的教研组采用提供理由？
- 报告的使用率从 12 岁升到 17 岁，而对输出的[[trust]]持平不变。你会在 6–9 年级的哪里教核验？

## 引言

中等教育大致覆盖 11 到 18 岁——初中或初级中学，然后是高中——而这一场景的三个特征塑造了人工智能在那里能做什么。就学是强制的，教师是学科专任者、一周可能见到 150 名学生，而真正有后果的[[assessment|评估]]是外部的：GCSE、全国[[summative-assessment|考试]]，以及 15 岁时的 PISA。

同一批学生采用得也最快。在瑞士，84% 的 14–19 岁青少年报告经常使用生成式人工智能，这一比例高于任何成年年龄段。近乎普遍的使用、外部考试，以及一位成年人要负责好几个班，解释了为什么这批文献集中在复习、评分、作业与诚信上，而不是在[[curriculum-design|课程]]重设计上。

## 研究测量了什么

- **智能辅导的增益不大，且随距离而缩小。** 18 项美国实验、11 个系统合并为 g = 0.271，在小学（0.266）与初中（0.256）几乎相同。在纳入农村学校的样本中效应降至 0.146，而在六个月之后降至不显著的 0.110；学年末成果（0.155）是即时后测（0.460）的三分之一（[[leite-its-k12-meta-analysis-2025|Leite 等（2025）]]）。

- **STEM 综述在质量控制较弱的情况下报告了更大的效应。** 35 项实验与准实验研究合并为 g = 0.670，其中高中为 1.099、初中为 0.392。作者没有使用任何正式的评价工具，固定效应异质性达 I² = 82.98%（[[ai-supported-instruction-stem-meta-analysis-2026|Doğan 等（2026）]]）。

- **[[motivation|动机]]增益在这里小于大学。** 在 42 项对照研究（56 个效应量、6,059 名学生）中，合并的动机效应为 g = 0.764，但中等教育研究平均为 0.360，而[[higher-ed|高等教育]]为 0.886，I² = 93.7%（[[genai-learning-motivation-meta-analysis-2026|Fang 等（2026）]]）。

- **典型的试验很短，并使用一份本地编制的测验。** 一项 GCSE 科学评估在三个科目中随机分配了 929 名学生，在后测时保留了 644 名，并在一份 35 分制、与课程对齐的测验上报告 g = 0.33，作者称该测验为暂定性的（[[ai-tutoring-micro-rct-gcse-science-2026|Harrison 等（2026）]]）。

## 辅导、复习与投入问题

- **可获得不等于被使用。** 在 18 所田纳西州初中，Khanmigo 每年把数学成绩提高 0.06–0.08 SD，每名学生约 \$15，接近同样的可汗学院练习在没有人工智能时的增益。96% 的学生试用过它，但中位学生只在 17% 的含错误会话中向它发过消息（[[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos 与 Low（2026）]]）。

- **房间里有人会改变困难的体验。** 在 149 名在课程水平之上学习的 sixth-form（高中毕业班）学生中，报告压力的比例在开放网络搜索者中为 32.0%、在 GenAI 导师使用者中为 19.2%、在有真人导师者中为 5.8%。未测量任何学习结果（[[ennion-human-tutoring-genai-tutoring-search-2026|Ennion 与 McLellan（2026）]]）。

- **情绪感知的支持可能抬高它所要缓解的[[anxiety-and-stress|焦虑]]。** 在两个运行同样 16 周实验序列的九年级[[chemistry-education|化学]]班上，焦虑随人工智能的情绪化[[feedback|反馈]]上升（F = 4.60，p = 0.035），而在只有教师在场的条件下持平。学生无法分辨究竟是系统的安抚建议还是教师的操作程序在起作用（[[liu-chemistry-lab-emotional-feedback-2026|Liu、Li 与 Zhang（2026）]]）。

## 写作、阅读与作者身份

- **学生偏爱替他们做事的那个活动。** 在七所英格兰学校，405 名十年级学生读了两篇历史文章，三天后闭卷测验。做笔记在保持上比使用聊天机器人高约 0.5 SD、在理解上高 0.4，然而学生评价聊天机器人更容易、更有趣（[[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes 等（2026）]]）。

- **反馈只对那些有意愿据此行动的学生改变写作。** 1,507 名中等教育学生每人收到一条标准化消息与十分钟修改时间；行为投入与工具性态度把表现从第 46 百分位推到第 54 百分位，而[[technology-acceptance-model|感知有用性]]没有中介任何效应（[[jansen-argumentative-writing-feedback-receptivity-2026|Jansen 等（2026）]]）。

- **受约束的助手能让学生继续思考。** 在一个双语光合作用单元中，122 名七年级学生与一个被提示扣留答案的助手产生了 6,788 轮对话；59% 达到共享的认识能动性，而在 1,049 个经审计的轮次中，它一次都没有给出直接答案。约 20% 的互动涉及复制文本或套取答案（[[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang 等（2026）]]）。

## 评估、诚信与考试压力

- **评分一致度可以很高却仍然有偏。** 一个商用[[llm]]评分器在 71 个有争议的题目上与 AQA GCSE [[physics-education|物理]]分数达到二次加权 κ = 0.885，但平均多给 0.30 分，在一道题上多给 6 分（[[ai-marking-accuracy-gcse-physics-2026|Bozdag 与 Qiu（2026）]]）。

- **kappa 不能说明一个评分器能否被钻空子。** 在 22 个被提示的模型中，14 个在答案带有说明时把分数提高了超过量表 5%，其中一个提高了 83.2%，而把学生描述为优秀在 66 个模型—任务配对中的 28 个里抬高了分数（[[porcaro-ai-grading-benchmark-2026|Porcaro（2026）]]）。

- **检测定位的是文章，不是句子。** 借助 2,429 名德国 15 岁学生的击键与剪贴板日志，分类器以 macro-F1 0.96 区分人工智能文本与人类文本，但句子层面的 F1 降至 0.88，人工智能的召回率在一次学生风格的改写后从 0.92 降到 0.60（[[schaller-ai-text-detection-authentic-writing-2026|Schaller 等（2026）]]）。

- **学生对诚信的推理是有条件的。** 在 133 名 14–16 岁的香港学生中，可接受性取决于使用目的（62.4%）、对学习的影响（54.1%）与意图（51.9%），而不取决于是否使用人工智能本身（[[chan-rethinking-aigiarism-secondary-integrity-2026|Chan（2026）]]）。

## 采用与证据的错配，以及评估重设计

在这一层级，使用近乎普遍；证据大多只是对它的一种描述。[[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca 等（2026）]]综合了 33 项研究：26 项描述技术如何被使用，对 7 项考察了学生的变化，而只有 21 项收集了原创的课堂数据。几乎全部由教师发起并孤立进行，这正是 84% 的采用率所掩盖的模式——个别教师在试验，而不是教研组在重设计。

该综述确实确立的东西是有条件的。反馈是最强的应用，其中一项纳入的研究里，定制化的词汇反馈几乎使分数翻倍，而完全委托会收窄学习，比较或拒斥输出则加深学习。准确性随任务难度而非学科变化：BingChat 与 Bard 在基础生物学问题上达到 92.11%，每个工具在高阶题目上都低于 20%，自动评分与人工评估者的一致率为 50.8%。调查研究指向深度而非剂量，因为在[[wu-genai-secondary-innovation-digital-literacy-2026|Wu 与 Zhang（2025）]]的一项横断面研究里，使用的深度与自评创新能力相关而频率不相关，而该设计中的路径只是在重述这些相关。

采用追随意向；焦虑在其后起作用。[[zhang-ai-learning-tools-tpb-high-school-2026|Zhang 与 An（2026）]]发现[[anxiety-and-stress|人工智能焦虑]]与意向无关（β = 0.056，p = 0.123），却对三种行为都是负向的，其中最强烈地作用于应用输出（β = −0.247），在这个模型中有用性居首，而成年人的期望胜过能力。测量本身也是试点级别的：[[schicchi-high-school-genai-attitudes-scale-2026|Schicchi 与 Taibi（2026）]]在 93 名学生身上从一份 19 题的态度量表中保留了三个因子，且没有验证性模型。

这就是为什么评估问题变成了：一个完成的产品仍然证明什么。[[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta 等（2026）]]发现感知学习与一个由阅读、修改和补充输出构成的投入指数几乎无关（合并相关 0.052），而[[cho-chatgpt-high-school-gpa-2025|Cho（2025）]]综述了写作中 0.31、数学中 0.18 的 GPA 关联，而这些大多是使用者与非使用者的比较。收集提示、初稿回应与修改，评的是过程而不是那一页纸。

## 初中与青春期早期

- **使用在怀疑形成之前就已固结。** 在 1,598 名 12–25 岁的学生中，平均使用从 12 岁到 17 岁在 0–4 量表上从 1.24 升到 1.77，被大量使用的活动数从 1.76 升到 3.48，而感知可靠性没有变化（[[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez 等（2026）]]）。

- **一场两小时的工坊改变了自我报告看不见的行为。** 在 116 名 8–9 年级的法国学生中，参加过工坊的人更少接受欠明确的提示（51.5% 对 66.7%），并且在一个薄弱回答之后有 59.2% 的时间会追问，对照组为 27.9%；他们的人工智能素养自我报告对两者都没有预测力（[[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc 等（2026）]]）。

- **使用目的承载的东西比频率更多。** 在中国四个地区的 12,191 名 15 岁学生中，在频率固定时转向以学习为导向的使用值 5.8 个 PISA 分，而转向摘要与起草则损失 6.6 分（[[wu-genai-scientific-literacy-china-2026|Wu 等（2026）]]）。

- **青春期早期的动机增益带有关系上的代价。** 在 2,464 名 7–8 年级的德国学生中，基于能力的学习中的 ChatGPT 与更多的自主与胜任满足相关，但关系性更弱（[[student-motivation-need-satisfaction-genai-sdt-2026|Schweder 等（2026）]]）。

## 关联

中等教育位于[[primary-education]]与[[undergraduate-education]]之间，并共享[[k-12]]对[[teacher-role|教师能力]]与[[equity-in-ai-education|公平]]的关切。把两者区分开来的，是外部考试与学科专任教学的组合，它把人工智能推向复习、评分与课程作业支持。这使[[assessment-validity|效度]]与[[automated-assessment|自动评分]]在这里比在小学阶段更居于中心，因为在小学阶段主导的是[[developmental-psychology|发展适宜性]]。另一条有区分度的线索是[[self-regulated-learning]]：青少年先拿到工具，之后才拿到使用它的判断力，因此决定增益是否出现的是[[metacognition|元认知]]与[[cognitive-offloading|卸载]]。

## 实践启示

**面向教师**

- 把导师放在错误发生的地方。17% 这个数字是一个设计问题，不是学生的缺陷：要求在做下一题之前提出一个问题或要求一次解释，并检查那段对话而不是登录记录。
- 把写作工具排序而不是同时呈现：先查询，再关闭聊天机器人，然后写作。当两者同时打开时，四分之一的学生会复制。
- 在课前决定：当情绪感知系统与你的操作程序冲突时，以谁的建议为准，并告诉学生。

**面向学校领导者**

- 按实现的使用量做预算。一份 \$15 的许可证不是一个项目；效果取决于排课、教师的[[prompt-engineering|提示]]与进度监测。
- 把普通课堂中辅导的期望值定在每年 0.06–0.08 SD，智能辅导约 0.27。不要承诺其中任何一项能弥合差距。
- 把检测器的输出排除在违规认定之外。要求草稿、版本历史或[[oral-assessment|口头答辩]]，因为整篇文章的分数在一次改写后就会移动。

**面向研究者**

- 在文本层面之外也报告句子层面的检测，并把探针结果与一致度统计并列报告。
- 测量学生用工具做什么，而不只是多频繁。在频率相同时，用途划出了 12 个 PISA 分的差距。
- 检验四周之后的持久性，用学年末或外部结果。即时后测把辅导效应高估了大约三倍。

## 常见误解

- **"人工智能导师只要学生能用就会教学。"** 96% 的学生试用过 Khanmigo；中位学生只在 17% 的发生错误的会话中向它求助。可得性与剂量是不同的变量。

- **"与阅卷人的高一致度意味着评分器可靠。"** 22 个模型中有 14 个可以因答案里的一句说明而移动超过量表的 5%，而一句关于学生的标签在 66 个模型—任务配对中的 28 个里抬高了分数。

- **"检测能告诉你哪些句子是人工智能写的。"** 句子层面的 F1 降到 0.88，召回率在一次学生风格的改写后降到 0.60，而在使用聊天机器人之后、没有复制材料的文本有 94.6% 被读作人类所写。

- **"批判性的[[ai-literacy|人工智能素养]]可以等到大学再学。"** 使用率从 12 岁到 17 岁逐年上升，而感知可靠性持平，并且 8–9 年级的一场两小时工坊在两天后改变了提示与追问行为。
