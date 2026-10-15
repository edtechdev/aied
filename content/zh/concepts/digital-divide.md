---
title: 数字鸿沟
created: "2026-08-13T18:07:54-04:00"
updated: "2026-10-09T18:58:14-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13]
type: concept
foundations: [ai-education, ai-literacy]
ethics: [accessibility, equity-in-ai-education]
confidence: high
reviewed_by: [editor]
translation_of: concepts/digital-divide
source_updated: "2026-10-14T14:35:00-04:00"
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

> **数字鸿沟** —— 个人、社群与国家之间在获取数字（以及日益增多的 AI）[[ai-technologies|技术]]、使用技能及其收益方面的不平等分配。在 AI 教育中，数字鸿沟是一个核心的公平关切：[[generative-ai|生成式 AI]]正在迅速重塑学习，而那些能够有效且批判性地使用它的人与做不到的人之间的差距，有可能加深既有的教育不平等。

## 值得思考的问题

- 数字鸿沟常被描述为三个层次：获取、技能，以及谁真正受益。当人们说"弥合数字鸿沟"时，你认为大多数人想的是哪个层次——为什么这可能是不完整的？
- 给每个学生设备与网络接入，并不自动意味着他们能有效或批判性地使用 AI。是什么把"拥有获取"与"能够受益"区分开来？
- AI 为不平等增添了新层面：算法偏见可能对边缘化的[[learners]]造成不成比例的伤害，而 AI 素养本身决定了这项技术会扩大还是缩小差距。这与早期技术造成的鸿沟有何不同？
- 鸿沟也延伸到 AI 系统所代表并服务的*是哪些*社群、语言与视角。代表性本身如何成为一种获取形式——或排斥形式？
- 如果弥合鸿沟是"一个正义与参与的问题"，那么责任由谁承担：平台、学校、政府，还是全部——以及 AI 收益的公平分配实际上会是什么样子？

## 引言

数字鸿沟通常被理解为在**三个层次**上运作（van Deursen & van Dijk，2014）：*第一层*鸿沟涉及技术与基础设施的获取（连接、设备、支持性环境）；*第二层*鸿沟涉及技能与能力（有效且有意义地使用工具的不均衡能力）；*第三层*鸿沟涉及结果与收益（谁真正从技术使用中受益，其中 AI 可能加剧社会、文化与经济差距）。通过这一视角来看[[framing-ai-use-for-students|Framing AI]]素养便会清楚：公平所要求的不仅是弥合设备与基础设施的差距——它还要求建立有效且批判性地使用 AI 的技能，使 AI 的收益得到公平分配，而不是强化既有不平等。

边缘推理的转向为第一层鸿沟增添了硬件维度。当辅导在浏览器而非云端运行时——通过 WebLLM 实现的[[browser-sized-agents-slm-webllm-tutor-2026|浏览器驻留 SLM 辅导系统]]——订阅成本障碍消失了，但取而代之的是能力障碍：在消费级笔记本上，同一系统每次试用约需 180 秒，而远程 API 为 10–58 秒，Chromebook 级别的设备根本无法运行 8B 模型。拥有现代硬件的学生获得快速无缝的生成，而使用旧设备的学生面临延迟或内存耗尽，因此"本地且廉价"并不等于"默认就是公平的"。

### 数字鸿沟在研究中的呈现

- **AI 素养作为公平的机制：** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL 框架]]被明确设计用于应对第二层与第三层鸿沟，提供一条分层的、不限年龄的路径，在教育各阶段实现公平的 AI 素养，其立论基础是 AI 素养与公平及参与不可分割。

- **政策与基础设施：** [[oecd-digital-education-outlook-2026|OECD 数字教育展望 2026]]把数字鸿沟置于国家[[educational-policy-ai|教育政策]]之中，考察数字与 AI 技术的获取如何变化，以及系统可以采取哪些措施弥合差距。
- **负责任使用与[[prompt-engineering|提示]]素养：** [[aaai2026-prompting-literacy-k12|K-12 提示素养研究]]通过[[teacher-role|教]]学生负责任地使用 AI [[conversational-ai|聊天机器人]]的技能来应对第二层鸿沟，认识到仅有获取并不能带来[[ai-literacy|善用 AI]]的能力。
- **措辞技能本身就是一条第二层鸿沟。** 在 MedQA 上，准确率随提示的精细程度上升（低素养措辞 82.4%，专家措辞 83.4%），而一个 Prompt Equity Transformer 把请求改写成等价且更清晰的表述，弥合了这一差距——把有效提示的负担从学习者转移到系统（[[prompt-privilege-equitable-ai-access-2026|Jin 等（2026）]]）。

- **代表性与结构性沉默：** [[structural-silence-underrepresented-language-ai-2026|关于代表性不足语言的研究]]揭示了数字鸿沟如何延伸到 AI 系统所代表并服务的*是哪些*社群、语言与视角——一种不平等在文化与认识论层面的维度。
- **语码转换本身就是一种排斥。** 大多数 LLM 讲座工具假设单一语言的英语音频与可靠的网络，从而排除了混用英语与家庭语言的课堂；印度的 UDISE+ 数据显示学校网络接入接近 54%，城乡差距 24 个百分点，而一个双语伴随应用以设备端转录与本地优先存储作答（[[bilingual-llm-lecture-companion-srl-2026|Malhotra，2026]]）。

### AI 加深（也能够弥合）鸿沟

AI 为技术的公平意涵增添了新的层面。算法偏见可能对来自边缘化社群的学习者造成不成比例的影响，而[[ai-literacy|AI 素养]]——理解、批判性评估并缓解 AI 的偏见与风险的能力——本身就是决定 AI 会扩大还是缩小差距的关键因素。[[research-methods-aied|研究]]表明，AI 素养较高的教育者在识别与缓解偏见结果方面更有效。因此 AI 时代的数字鸿沟并不只是一个技术供给问题，而是一个正义与参与的问题：谁能获取 AI，谁能批判性地使用它，以及谁从中受益。


一条长期存在的文献脉络追踪了这一概念本身如何从获取转向**数字公平**——如今被定义为四个维度：数字素养、可负担性、群体敏感内容与基础设施可用性——并把消费级 AI 解读为一场新的鸿沟浪潮，它偏爱那些已能审计机器输出的用户（[[mechanical-compliance-human-flourishing-ai-literacy-2026|Rose（2026）]]）。

**塑造 AI 时代鸿沟的不只是 SES，还有人格。** [[ai-divide-ses-personality-primary-education-2026|Wang 等（2026）]]分析了荷兰 **4,497 名六年级学生**的调查与全国登记数据，将学生背景与人格连接到[[learning-gains|学业表现]]的两条中介路径——AI 使用与数字素养——分离开来。他们的关键发现重构了经典的鸿沟叙事：**数字素养而非 AI 使用强度**中介了人格与表现之间的联系，并且出现了一条新的数字技能鸿沟，它更多由**人格特质而非社会经济地位**驱动。SES 在表现上的优势独立于 AI [[student-engagement|参与]]发挥作用。这使数字鸿沟的"获取—SES"框架变得复杂，指向技能形成与倾向性支持是与设备和工具获取并列的、与公平相关的杠杆。

**鸿沟还有一个元认知层面。** 由于富有成效地利用 AI 需要既有知识与自我调节，已经具备这些的学生受益最多，而那些最需要练习的学生则把学习本身交了出去——这是一种"元认知公平差距"，即使获取均等，它也能扩大成绩差距（[[lodge-loble-cognitive-offloading-2026|Lodge & Loble（2026）]]）。


结构化的学校 AI 教学是心理催化剂，但不是认知拉平器：在 752 名香港初中生中，为期一年的课程缩小了信心与动机差距，却让高能动性与低能动学习者之间客观 AI 素养的差异原样保留（[[school-ai-education-readiness-gaps-agency-2026|Liang 等（2026）]]）。
**鸿沟也在机构层面运作。** [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye 等（2026）]]表明，在尼日利亚的高等教育体系中，AI 整合能力集中于更老、地处西南地区的机构，并通过相互强化的网络联系（国际合作 × 产业合作，r = 0.74）不断复合——这意味着机构中的"无产者"（通常是较新的州立大学）面临结构性的壁垒，难以进入那些本可以帮助它们追赶的网络。因此数字不平等不仅在个体学习者之间被再生产，也在塑造谁能参与 AI 转型知识经济的[[governance|制度]]结构之间被再生产。

**鸿沟也有它的地理，而指导是其机制。** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson 等（2026）]]记录了印第安纳 FIRST LEGO League 参与中的恢复不对称：城市与农村参与率都在 2020 远程赛季下降，但只有城市参与率恢复，农村参与率在 2025–2026 年间一直停留在 2020 后的水平。他们指名的机制是获得技术指导的机会——那些拥有足够编程与[[educational-robotics|机器人]]知识来创办并维持一支队伍的人——而农村学校即使学生和教师有兴趣，也可能缺乏这种指导，使它成为机器人与 AI 路径的前提条件，而非其附带特征。他们的应对之策是刻意设计这种指导的传播：大学一级枢纽培养本科生并主办工作坊，成熟的学校项目成为二级枢纽，指导邻近学校，而对印第安纳州 1,925 所公立学校的空间马尔可夫模拟预测，在中等假设下 40 年后会有 992 个项目，而若无 ARC 则为 161 个，其中包括 341 个农村项目对 60 个。与上述机构网络结果并读，模式是：鸿沟通过*谁能在何地供给专业知识的结构*而延续，而刻意供给这种专业知识——而非假设毗邻一所大学——才是政策杠杆。

**获取与认识论等级是两个不同的问题。** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole（2026）]]从对两所南非历史上处于不利地位的机构的[[educational-development|学术发展者]]访谈中把这一区分刻画得很尖锐：数字不平等是分配性的——设备、连接、预算、数字素养——原则上可以通过再分配解决，而**算法殖民性**是认识论层面的，即使在完全获取的条件下依然持续，因为它内在于系统所编码的内容以及它们以谁的知识为中心。该研究的参与者同时经历这两者，被描述为"被要求在类比式的地基上建造数字未来"：地基指认了鸿沟的物质层面，而输入的"未来"预装了设计它的那些语境的认识论预设。对公平工作的实际意涵是：弥合一个获取差距本身并不会动摇等级结构——这两种现象在不同的层面上运作，需要不同的应对。

**一个设计可以绕过设备差距，而不是等它弥合。** [[rodrigues-aied-unplugged-numeracy-2026|Rodrigues 等（2026）]]测试那些从未碰过计算机的学生是否仍能获得智能辅导式的支持，使用一种他们称为"AIED unplugged"的范式，其中教师是学习者与系统之间的代理：学生继续用纸和笔作答，教师用智能手机拍下他们的解法，系统返回个性化练习列表、自动评分以及针对具体错误的反馈。按他们的说法，他们在 19 个巴西公立学校班级上做的这种聚类准实验，是这类系统在真实课堂（而非原型）中首次准实验评估，而该应用运行在教师自己的手机上，适用于这些学校典型的间歇性连接。因此该设计与上述那些是一种不同的公平策略：它不是先弥合设备与带宽的第一层鸿沟才能让 AI 辅导到达任何人，也不是把第二层技能提高到成为入场券，而是抵达那些 AI 从不直接互动的学生。然而同一研究也表明，这条路径并不免于它所绕过的鸿沟。相对通常做法的学习优势可追溯到教师培训而非技术本身——培训与完整系统条件在收益上没有差异——而系统对学习的正向间接效应通过*减少的教师工作量*起作用，工作负荷越重收益越低。因此绕过获取差距并没有消解公平问题；它把约束性瓶颈重新安置到了教师能力与时间上。
- **硬件约束可能正在消解，而获取差距未必在弥合。** [[llmersion-local-first-language-learning-2026|Guo 等（2026）]]论证，[[equity-in-ai-education|公平的]]语言学习现在的主要约束是软件而非硬件：完整的合成—识别—翻译栈可以装进 4 GB 以下，社群测量显示 3B 模型在 \\$80 的单板计算机上可达每秒 4–9 个 token，而每天练习五年的电费约为 \\$18，对比云订阅的 \\$1,200 和每周辅导的 \\$2,600。

- **模型压缩是通往受限硬件的另一条路。** 一个在 416,343 条语料上微调的尼日利亚皮钦语自适应辅导系统在 8 位下保持了语义结构与连贯性，而 4 位与 5 位版本在教学质量仅有极小退化的情况下削减了推理延迟，且由母语者检查了文化可接受性而非只看指标（[[multilingual-adaptive-learning-nigeria-2026|Nwogo 等，2026]]）。

- **一个模拟实验室可以重现它本想避免的设备账单。** 一项对 11 项 STEM 高等教育数字孪生研究的[[meta-analysis-systematic-review|系统综述]]发现，四项研究中每个功能性工作站节点的硬件成本为 \\$2000–\\$15,000，五项中物理实体把并发访问限制在 1–3 名学生，且没有任何一项纳入研究产出投资回报分析（[[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-Gonzalez 等（2026）]]）。该综述把这一进入成本对标为价值 \\$30,000 至超过 \\$150,000 的物理表征设备。

### 与相关概念的联系

数字鸿沟是[[equity-in-ai-education]]研究的核心关切，与[[ai-literacy]]（被定位为应对结构性壁垒的核心机制）以及[[ethics]]和[[bias-mitigation]]（因为算法偏见对边缘化群体影响不成比例）紧密相关。它连接到[[ai-education]]和[[higher-ed]]——获取与能力差距显现的场所——并与[[student-experience]]相关，因为它塑造了谁能切实参与被 AI 塑造的学习。

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
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — 尼日利亚高等教育中的制度结构、数字不平等与 AI 整合
- [[ai-divide-ses-personality-primary-education-2026]] — 小学教育中的 SES、人格与 AI 鸿沟（Wang 等，2026）
- [[rodrigues-aied-unplugged-numeracy-2026]] — AIED unplugged：以教师为代理的辅导触及无设备学生（Rodrigues 等，2026）
- [[school-ai-education-readiness-gaps-agency-2026]] — 学校 AI 教育缩小了心理差距但未缩小认知准备度差距
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege：测量并缓解 LLM 获取中的可及性差异
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — 分层式 AI 素养（SAIL）框架
- [[oecd-digital-education-outlook-2026]] — OECD 数字教育展望 2026
- [[aaai2026-prompting-literacy-k12]] — 教 K-12 学生负责任地使用 AI 聊天机器人
- [[structural-silence-underrepresented-language-ai-2026]] — 结构性沉默与代表性不足的语言
- [[sec-ai-literacy-narrative-review-2026]] — AI 素养中的社会情感能力
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — 面向多语言低资源环境的 AI 自适应学习平台
- [[ai-science-chemistry-education-systematic-review-2025]] — AI 在科学／化学教育中的系统综述
- [[unesco-ai-guidelines-chemical-education-2026]] — UNESCO AI 指南在化学教育中的转译；认识论漂移
- [[lodge-loble-cognitive-offloading-2026]] — AI、认知外包及其教育意涵（Lodge & Loble，2026）
- [[mechanical-compliance-human-flourishing-ai-literacy-2026]] — 社会主义人文主义 AI 素养 + 合理使用
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC：农村机器人获取跟随的是指导地理，而非设备获取（Jacobson 等，2026）
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — 南非历史上处于不利地位的机构中，数字不平等作为分配性问题、算法殖民性作为认识论性问题

- [[llmersion-local-first-language-learning-2026]] — LLMersion：面向教育公平的低成本家庭语言学习本地优先 AI 代理框架
- [[caee-digital-twins-stem-education-systematic-review-2026]] — 数字孪生实验室背负着一笔限定并发访问的设备账单
