---
title: 职业教育与培训
created: "2026-09-17T14:04:23-04:00"
updated: "2026-10-09T19:07:10-04:00"
type: concept
technology: [human-in-the-loop-ai, intelligent-tutoring, simulation]
assessment: [authentic-assessment]
pedagogy: [career-development-and-readiness, professional-training]
discipline: [vocational education]
audience: [instructors, curriculum designers, institutions]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/vocational-education
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **职业教育与培训** —— 教育中为具名职业、工种和技术岗位做准备的区段，围绕贴近实务的能力而非学科知识来组织。职场学习描述的是对在职者的技能提升，而 VET 包含一项工种的初次准备；[[higher-ed|高等教育]]指学位学习，而 VET 往往非学位，并以国家资格框架来框定。它的定义性特征是：学习者就其能对设备做什么而被评估、教学发生在车间、模拟器或工地附近，以及承担实务教学的人类培训师常常是约束性的瓶颈。在 AI 研究中，VET 既作为一个独特的学习者群体出现 —— 其学业信心与被展示的技能和职业身份绑在一起 —— 也作为一个独特的证据基础出现，比学校或大学文献更稀薄、更碎片化。

## 值得思考的问题

- 如果一份资格证认证的是学习者能做什么，多少 AI 辅助的学习算作真实练习，又有多少替代了那构建能力的重复？
- 当一个 AI 智能体扮演人类培训师曾经扮演的对手方 —— 病人、飞行员、客户 —— 时，失去了什么？哪些判断是合成对手无法建模的？
- 口头评估难以随班级规模扩展。如果 AI 呈现证据但不做评判，哪些评估能力部分被解脱了，哪些只是被转移给了教师？
- AI-in-VET 证据基础中没有一项研究设定在工作场所，然而 VET 却是由工作本位的学习定义的。在学习真实发生的场所做可信的研究，需要什么？
- 欧盟 AI 法案把 AI 评估职业培训中的学习结果视为高风险，而一些司法辖区没有这样的规定。采购是否应当遵循可用的最严标准？

## 引言

职业教育与培训为特定职业做准备 —— 汽车技师、空中交通管制员、室内设计师、护理员 —— 而它的通货是被展示的能力，而非累积的学分。评估倾向于基于表现，教学与设备绑定，而监督练习的熟练培训师很稀缺。

它在本知识库中的邻居主要在范围上不同。[[professional-training]]涵盖职场和企业技能提升，多数面向已在职的人；VET 还涵盖初次职业准备。[[adult-learning]]命名的是学习者特征，而非职业特异性。[[higher-ed]]指授予学位的学习，而多数 VET 由诸如 NZQA 单元标准或 EQF 之类的资格框架组织。[[stem-education]]和 VET 在技术领域有重叠，但 STEM 教育旨在概念理解，而 VET 旨在可用程序。[[career-development-and-readiness]]命名 VET 项目被评判所依据的就业力倾向；VET 命名对产出它们负责的教学系统。

关于 VET 中的 AI，独特之处在于该领域说它想要的和它建造的之间存在差距：建构主义理论被广泛信奉，而行为主义的操练式系统占主导，学习者能动性的设计仍然罕见。反复出现的设计问题不是 AI 能否交付教学，而是它能否吸收职业学习中那些人员成本高昂的部分 —— 真实场景、及时反馈、角色扮演的对手方、口头证据 —— 而不挤走那产生能力的练习。

### AI 如何出现在职业教育与培训中

- **一份年轻的、碎片化的、地理上集中的证据基础。** 对 VET 中 AI 的首个系统综述（[[ai-vocational-education-training-review]]）依 PRISMA 指南通过 ERIC、Web of Science 和 Elicit 识别出 2015–2026 年发表的 26 项实证研究：九项技术领域、九项领域通用、五项工商管理、三项健康。场景为六个教室、八个在线、四个混合、八个基于模拟 —— 而没有一个在工作场所，尽管 VET 具有工作本位的特性。26 项中有 17 项源自亚洲；只有九项研究共享至少一条参考文献，且没有一项互相引用。五项是随机实验，21 项使用前实验或准实验设计，多数在干预后立即测量结果，而只有三项在学习者对 AI 赋能设计中给予主动角色。作者警告一种教育性的"图灵陷阱" —— 用 AI 复制人类教学，而非增强[[human-in-the-loop-ai|人类判断]] —— 并呼吁以失败案例和边界条件取代主导的成功叙事。
- **模拟吸收了稀缺的角色扮演者。** [[astra-atco-training-simulator]]针对空中交通管制培训中的一个能力约束：*simpilots*，即在模拟空域中同时扮演飞行员和管制员的专门人类培训师。ASTRA 以自主的、LLM 驱动的模拟飞行员取而代之，在移除人员瓶颈的同时保持场景复杂度，并使[[adaptive-learning|自适应]]练习能够规模化。它是一个系统描述而非效力试验，但它命名了一种在 AI-in-VET 中反复出现的机制：在稀缺投入是一个扮演对手方的熟练人类之处，一个智能体可以担住角色，让练习得以扩展。
- **沉浸式、智能体支持的项目工作可以有选择地提升设计能力。** [[ai-ive-pbl-vocational-design-creativity-2026]]规定了 AI-IVE-PBL，一个四维五阶段模型（发现、设想、建模、沟通、精炼），在一所中国职业院校的一年级室内设计课程中运行于 VR，配一个 LLM 支撑的数字人助手。在一项 12 周两组准实验（63 份有效回答；31 对 32）中，沉浸-智能体条件在设计能力上得分更高（η²p = .138），在创造能力上更高（η²p = .111）（ANCOVA），认知参与 d = 0.90，行为参与 d = 0.75，动机 d = 0.74，满意度 d = 0.69，认知负荷更低（d = −0.52）。创新思维和情感参与未达显著，作者将其归因于对根深蒂固的认知模式的短期上限。每个结果都是[[self-report-measures|自陈]]，没有设计产物或专家评分。对照[[genai-xr-architectural-design-education-2026]] —— 那里一条生成式 AI 加 XR 的流水线产生了下降的设计[[self-efficacy]]且无盲审小组优势 —— 这种差别看起来不像硬件，而更像谁掌握着阶段结构和评分量规。
- **评估是真实性问题最尖锐之处。** [[ai-supported-oral-assessment-tvet-2026]]记录了 AkoVoice，在两个 3 级汽车班和一个 3 级工程班中试用，设计使 AI 呈现量规证据而由人类评估员评判。在 33 名受访学习者中，21 人（64%）认为语音任务真实，同样比例的人说它给出了一种清晰的传达所知内容的方式；没有人不同意实时口语比书面作品集更适合这种[[authentic-assessment|真实评估]]。同一问题不同学习者的词数相差五到八倍，却未提高基于事实问题上的准确率，而以 2 到 13 个词作答的九名学习者全部判对，最短的是两个词"3500 kgs"，按数值匹配。一个完整的采集、存储、AI 判断起草和教师报告周期离线运行于一台带 8 GB 显存的 Windows 笔记本（Mistral 7B 经 Ollama，faster-whisper，Chatterbox），在钢结构框架击败 wifi 的车间中一次评估多达 12 名学习者，录音加密并在 90 天后删除。论文指出，欧盟 AI 法案把 AI 评估职业培训中的学习结果视为高风险，而新西兰没有针对 TVET 的部门特定框架。
- **有边界的陪伴而非替代。** [[ai-pedagogical-accompaniment-amico]]主张，AI 在技术和职业情境中的价值取决于可问责的[[pedagogy|教学]]中介，而非像人。它的 Amico 原型把 AmicoMio（面向技术清晰度和逐步任务指导）与 AmicoTuo（面向反思对话和产婆式提问）配对。设计原则是一条*关系桥*：互动刻意是临时的、朝人际接触有方向的，并以保障措施为边界，成年人保留人在指挥的责任。探索性试点（N = 30，意大利和中国，20 次有边界的会话）发现参与者把系统当作有边界的支持工具，没有报告出对替代或依赖的期望。
- **当 AI 替代努力时，辅助学习带有心理代价。** [[ai-autonomous-learning-accomplishment-2026]]用结构方程模型调查了中国 1,264 名职业院校学生，发现 AI 辅助的自主学习与坚毅性（承诺、控制、挑战）负相关，与学业成就感下降（负面自我评价这一倦怠维度）正相关。坚毅性部分中介了该关系。该设计是横断面的、自陈的、单一机构的，所以因果未获确立，但这一框定对 VET 要紧：在信心经由反复练习建立之处，作为替代的 AI 可能同时削弱坚持的倾向和精通的感受体验。
- **在不放弃核验的前提下加速课程生产。** [[crewscaler-ai-upskilling-framework]]把 AI 应用于专业技能提升的全部五个阶段 —— 知识获取、内容开发、评审与核验、[[intelligent-tutoring|导师辅导]]和评估开发 —— 同时把蓝图设计、学科评审和误解编写保留在人类手中。它的外部验证包括 NASBA CPE 认证、三名学习者中三名仅使用该框架的知识库就通过了 NVIDIA 认证考试，以及一个绑到 53 技能蓝图上的 530 题题库。它属于这里，是因为它把核验当作一个一等公民的阶段：[[hallucination-risk|幻觉]]检测在教育流水线中大体缺席，而该论文报告默认 LLM 辅导只达到 52–70% 正确的教学行动。

## 关联概念

- [[professional-training]]
- [[adult-learning]]
- [[higher-ed]]
- [[career-development-and-readiness]]
- [[simulation]]
- [[authentic-assessment]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[self-efficacy]]

## 关联文章

- [[ai-vocational-education-training-review]] —— 首个 VET 中 AI 的系统综述：目的、理论与实证效力
- [[ai-ive-pbl-vocational-design-creativity-2026]] —— AI-IVE-PBL：沉浸式项目式学习与设计创造力
- [[ai-supported-oral-assessment-tvet-2026]] —— AkoVoice：TVET 中离线 AI 支持的口头评估
- [[ai-pedagogical-accompaniment-amico]] —— Amico 双模原型：设计原则与可观察指标
- [[ai-autonomous-learning-accomplishment-2026]] —— AI 辅助的自主学习与成就感下降，由坚毅性中介
- [[astra-atco-training-simulator]] —— 可规模化的 ATCO 训练的自主模拟飞行员
- [[crewscaler-ai-upskilling-framework]] —— 用于快速专业技能提升的 AI 加速端到端框架
- [[genai-xr-architectural-design-education-2026]] —— 反例：生成式 AI 加多人 XR，设计自我效能感下降
