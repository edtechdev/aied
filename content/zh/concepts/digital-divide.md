---
title: 数字鸿沟
created: "2026-08-13T18:07:54-04:00"
updated: "2026-10-09T18:58:14-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13]
type: concept
foundations: [ai-education, ai-literacy]
ethics: [accessibility, equity-in-ai-education]
confidence: high
translation_of: concepts/digital-divide
source_updated: "2026-10-04T16:06:05-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **数字鸿沟（digital divide）** — 个人、社区和国家之间在数字（以及日益增多的 AI）[[ai-technologies|技术]]的获取、技能和受益上的不平等分布。在 AI 教育中，数字鸿沟是核心的公平关切：[[generative-ai|生成式 AI]]正迅速重塑学习，能有效且批判地使用它的人与不能的人之间的差距，威胁着深化既有的教育不平等。

## 值得思考的问题

- 数字鸿沟常被描述为三个层次：获取、技能，以及谁真正受益。当人们说"弥合数字鸿沟"时，你认为多数人心里想的是哪个层次——为什么这可能是不完整的？
- 给每个学生设备和网络接入，并不自动意味着他们能有效或批判地使用 AI。什么把"拥有获取"与"能够受益"区分开？
- AI 给不平等增添了新的层次：算法偏见可能对边缘化的[[learners]]造成不成比例的伤害，而 AI 素养本身决定了这项技术是扩大还是缩小差距。这与早期技术的鸿沟有何不同？
- 鸿沟还延伸到哪些社区、语言和视角在 AI 系统中被代表和服务。代表性本身如何成为一种获取——或排斥？
- 如果弥合鸿沟是"一个正义与参与的问题"，谁承担这个责任：平台、学校、政府，还是全部——而 AI 收益的公平分配实际会是什么样子？

## 引言

数字鸿沟通常被理解为运作于**三个层次**（van Deursen & van Dijk, 2014）：*第一层*鸿沟关乎技术与基础设施的获取（连通性、设备、支持性环境）；*第二层*鸿沟关乎技能与能力（有效而有意义地使用工具的不均衡能力）；*第三层*鸿沟关乎结果与收益（谁真正从技术使用中受益，AI 可能加剧社会、文化和经济差距）。通过这一视角看[[framing-ai-use-for-students|AI 使用框架]]素养可以看清：公平需要的不只是弥合设备与基础设施差距——它还需要建立有效且批判地使用 AI 的技能，使收益被公平分配，而不是强化既有不平等。

### 数字鸿沟在研究中的呈现

- **AI 素养作为公平的机制：**[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL 框架]]被明确设计来针对第二层和第三层鸿沟，为贯穿教育各阶段的公平 AI 素养提供有脚手架、不分年龄的路径，其依据是 AI 素养与公平和参与不可分割这一论证。

- **政策与基础设施：**[[oecd-digital-education-outlook-2026|OECD 数字教育展望 2026]]把数字鸿沟置于国家[[educational-policy-ai|教育政策]]之中，考察数字与 AI 技术的获取如何变化、系统能做些什么来弥合差距。
- **负责任使用与[[prompt-engineering|提示]]素养：**[[aaai2026-prompting-literacy-k12|K-12 提示素养研究]]通过[[teacher-role|教]]学生负责任地使用 AI[[conversational-ai|聊天机器人]]的技能来针对第二层鸿沟，认识到单有获取并不能带来[[ai-literacy|用好 AI]]的能力。
- **措辞技能本身就是第二层鸿沟。** 在 MedQA 上，准确率随提示的精致程度上升（低素养措辞 82.4% 对专家措辞 83.4%），而一个提示公平变压器把请求改写为等价、更清晰的措辞，弥合了这个差距——把有效提示的负担从学习者转给了系统（[[prompt-privilege-equitable-ai-access-2026|Jin 等（2026）]]）。
- **代表性与结构性沉默：**[[structural-silence-underrepresented-language-ai-2026|关于代表性不足语言的研究]]凸显数字鸿沟如何延伸到 AI 系统所代表和服务的*是哪些*社区、语言和视角——这是不平等的文化与认识论维度。
- **语码转换本身就是一种排斥。** 多数 LLM 讲义工具假定单语英语音频和可靠网络，排除了混用英语和家庭语言的课堂；印度 UDISE+ 数据显示学校互联网接入接近 54%，城乡差距 24 个百分点，而一个双语伴侣用设备端转写和本地优先存储作答（[[bilingual-llm-lecture-companion-srl-2026|Malhotra, 2026]]）。

### AI 加深（也能弥合）鸿沟

AI 给技术的公平含义增添了新的层次。算法偏见可能对边缘化社区的学习者造成不成比例的影响，而[[ai-literacy|AI 素养]]——理解、批判评价并缓解 AI 偏见与风险的能力——本身就是决定 AI 是扩大还是缩小差距的关键因素。[[research-methods-aied|研究]]显示，AI 素养较高的教育者更能识别和缓解有偏见的结果。因此 AI 时代的数字鸿沟不只是一个技术供给问题，而是一个正义与参与的问题：谁能获取 AI，谁能批判地使用它，谁受益。

一条由来已久的文献脉络追溯了这一概念本身如何从获取转向**数字公平**，后者现被定义为四个维度——数字素养、可负担性、群体敏感的内容和基础设施可得性——并把消费级 AI 读作数字鸿沟的新一波，偏向那些已有能力审计机器输出的用户（[[mechanical-compliance-human-flourishing-ai-literacy-2026|Rose（2026）]]）。

**塑造 AI 时代鸿沟的不只是社会经济地位，还有人格。**[[ai-divide-ses-personality-primary-education-2026|Wang 等（2026）]]分析了荷兰**4,497 名六年级学生**的调查与全国登记数据，区分出两条中介路径——AI 使用与数字素养——它们把学生背景和人格与[[learning-gains|学业表现]]相连。他们的关键发现重新框定了经典鸿沟：**起中介作用的是数字素养，而非 AI 使用强度**，连接人格与表现，且一种新的数字技能鸿沟浮现出来，其驱动力更多来自**人格特质而非社会经济地位**。社会经济地位在表现上的优势独立于 AI[[student-engagement|投入]]而运作。这使数字鸿沟的"获取与社会经济地位"框架复杂化，指出技能形成与倾向性支持是与设备和工具获取并列的、与公平相关的杠杆。

**鸿沟有一个元认知层次。** 因为富有成效地利用 AI 需要先备知识和自我调节，已经具备这些的学生受益最多，而那些最需要练习的学生则把学习本身外包出去——这是一种"元认知公平差距"，即使在获取相等的情况下也能扩大成就差距（[[lodge-loble-cognitive-offloading-2026|Lodge & Loble（2026）]]）。

结构化的学校 AI 教学是心理催化剂，但不是认知均衡器：在 752 名香港初中生中，为期一年的课程缩小了信心与动机差距，却使高主体性与低主体性学习者之间客观 AI 素养的差异原样保留（[[school-ai-education-readiness-gaps-agency-2026|Liang 等（2026）]]）。

**鸿沟也在机构层面运作。**[[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye 等（2026）]]显示，在尼日利亚的高等教育系统中，AI 整合能力集中于较老的、西南地区的机构，并通过相互强化的网络联系（国际合作 × 产业伙伴关系，r = 0.74）复合放大——这意味着机构的"无产者"（通常是较新的州立大学）面临结构性障碍，无法进入那些本该帮助它们追赶的网络。因此数字不平等不仅在个体学习者之间被再生产，也在塑造谁能在被 AI 改造的知识经济中参与的[[governance|机构]]结构中被再生产。

**鸿沟也有地理，导师制是它的机制。**[[arc-hubs-k12-ai-robotics-rural-2026|Jacobson 等（2026）]]记录了印第安纳 FIRST LEGO League 参与中的一种恢复不对称：城乡参与在 2020 远程赛季双双下降，但只有城市参与恢复了，而农村参与到 2025–2026 年一直停留在后 2020 水平附近。他们指名的机制是技术导师的获取——那些掌握足够编程和[[educational-robotics|机器人]]知识、能组建并维持一支队伍的人——农村学校即使师生有兴趣也可能缺少这种人，这使导师成为机器人学和 AI 路径的前提，而非其附带特征。他们的应对是刻意设计这种导师制的传播：大学初级枢纽培养本科生并主办工作坊，成熟的学校项目成为次级枢纽、辅导邻近学校，而对印第安纳 1,925 所公立学校的空间马尔可夫模拟预测，在温和假设下 40 年后有 992 个项目，而没有 ARC 则只有 161 个，其中包括 341 个农村项目对 60 个。与上面机构—网络的结果并读，图景是：鸿沟通过*谁能在哪里提供专门知识这一结构*而持续，而刻意地供给这种专门知识——而不是假定邻近一所大学——才是政策杠杆。

**获取与认识论等级是不同的两个问题。**[[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole（2026）]]从对两所南非历史弱势院校中[[educational-development|学术发展人员]]的访谈中把这一区分划得十分清楚：数字不平等是分配性的——设备、连通性、预算、数字素养——原则上可以通过再分配来回答，而**算法殖民性**是认识论的，即使在完全获取的条件下依然存在，因为它内在于系统所编码的东西和它们以谁的知识为中心。这项研究的参与者同时经历两者，被描述为"被要求在模拟的基础上建数字未来"：基础命名的是鸿沟的物质层面，而引入的未来预先装载了设计它的那些语境的认识论假设。对公平工作的实践启示是：弥合一个获取差距本身并不能动摇这个等级——两种现象在不同的层面上运作，需要不同的应对。

**一项设计可以绕开设备差距，而不必等它弥合。**[[rodrigues-aied-unplugged-numeracy-2026|Rodrigues 等（2026）]]检验从未碰过电脑的学生是否仍能获得智能辅导式支持，使用他们称为"AIED 无插电"的范式，其中教师是学习者与系统之间的代理：学生继续用纸笔做题，教师用智能手机拍下他们的解答，系统返回个性化的练习清单、自动评分和针对错误的反馈。他们在 19 个巴西公立学校班级中做的集群准实验，据他们自己说，是首次对这类系统在真实课堂而非原型中做的准实验评价，且应用运行在教师自己的手机上，处于这些学校典型的间断连通条件下。因此这项设计是与上述几种不同的公平策略：它不是先弥合设备与带宽的第一层鸿沟才让 AI 辅导抵达任何人，也不是把第二层技能作为入门券来提升，它抵达的是 AI 从不直接交互的学生。然而同一项研究也显示，这条路并不免受它所绕开的鸿沟之苦。超过常规做法的学习优势归因于教师培训而非技术——培训组与全套系统条件在增益上没有差异——且系统对学习的正向间接效应是通过*教师努力的减少*运作的，工作量越重，增益越低。绕开获取差距因此并没有消解公平问题；它把约束瓶颈重新安置到教师能力和时间上。

- **硬件约束或许正在消解，而非获取差距正在弥合。**[[llmersion-local-first-language-learning-2026|Guo 等（2026）]]论证，[[equity-in-ai-education|公平]]语言学习上的约束性瓶颈现在是软件而非硬件：完整的合成—识别—翻译栈装得进 4 GB，社区测量显示一个 3B 模型在一台 \\$80 的单板计算机上达到 4–9 tokens per second，而五年的每日练习约耗 \\$18 电费，相对云订阅的 \\$1,200 和每周辅导的 \\$2,600。
- **模型压缩是通往受限硬件的另一条路。** 一个在 416,343 条语料上微调的尼日利亚皮钦语自适应辅导器在 8 位下保持了语义结构与连贯性，而 4 位和 5 位版本在教学质量仅有极轻微下降的情况下降低了推理延迟，且母语者检查的是文化可接受性而不只是指标（[[multilingual-adaptive-learning-nigeria-2026|Nwogo 等, 2026]]）。
- **一个模拟实验室可以重现它本意避免的设备账单。** 一项针对 STEM 高等教育中 11 项数字孪生研究的[[meta-analysis-systematic-review|系统综述]]发现，四项研究中每个可用工作站节点的硬件成本为 \\$2000-\\$15,000，五项研究中物理实体把并发访问限制在 1-3 名学生，且没有一项纳入的研究产出投资回报分析（[[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-Gonzalez 等（2026）]]）。该综述把这一入门成本与 \\$30,000 到超过 \\$150,000 的物理表征装置作对标。

### 与相关概念的联系

数字鸿沟是[[equity-in-ai-education]]研究的核心关切，与[[ai-literacy]]（被定位为处理结构性障碍的中心机制）以及[[ethics]]和[[bias-mitigation]]（因为算法偏见对边缘化群体影响不成比例）紧密相连。它与[[ai-education]]和[[higher-ed]]相连，作为获取与能力差距显现的场域，并与[[student-experience]]相关，因为它塑造谁能真正参与被 AI 塑造的学习。

## 关联概念

- [[differential-effects-across-learner-groups]]
- [[remote-proctoring]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[ethics]]
- [[bias-mitigation]]
- [[ai-education]]
- [[higher-ed]]
- [[student-experience]]
- [[parents-and-families]]

## 关联文章
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — 尼日利亚高等教育中的机构结构、数字不平等与 AI 整合
- [[ai-divide-ses-personality-primary-education-2026]] — 小学教育中的社会经济地位、人格与 AI 鸿沟（Wang 等 2026）
- [[rodrigues-aied-unplugged-numeracy-2026]] — AIED 无插电：以教师为代理的辅导抵达没有设备的学生（Rodrigues 等 2026）
- [[school-ai-education-readiness-gaps-agency-2026]] — 学校 AI 教育缩小心理而非认知的准备差距
- [[prompt-privilege-equitable-ai-access-2026]] — 提示特权：测量并缓解 LLM 获取中的可及性差异
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — 有脚手架的 AI 素养（SAIL）框架
- [[oecd-digital-education-outlook-2026]] — OECD 数字教育展望 2026
- [[aaai2026-prompting-literacy-k12]] — 教 K-12 学生负责任地使用 AI 聊天机器人
- [[structural-silence-underrepresented-language-ai-2026]] — 结构性沉默与代表性不足的语言
- [[sec-ai-literacy-narrative-review-2026]] — AI 素养中的社会情感能力
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — 面向多语言低资源情境的基于 AI 的自适应学习平台
- [[ai-science-chemistry-education-systematic-review-2025]] — AI 在科学/化学教育中的系统综述
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI 指南译入化学教育；认识论漂移
- [[lodge-loble-cognitive-offloading-2026]] — AI、认知外包及其对教育的启示（Lodge & Loble 2026）
- [[mechanical-compliance-human-flourishing-ai-literacy-2026]] — 社会主义人本主义 AI 素养 + 合理使用
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC：农村机器人学获取追随导师的地理，而非设备的获取（Jacobson 等 2026）
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — 南非历史弱势院校中作为分配性问题的数字不平等与作为认识论问题的算法殖民性
- [[llmersion-local-first-language-learning-2026]] — LLMersion：面向教育公平的低成本家庭语言学习本地优先 AI 智能体框架
- [[caee-digital-twins-stem-education-systematic-review-2026]] — 数字孪生实验室背负限制并发访问的设备账单
