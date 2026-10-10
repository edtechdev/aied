---
title: 信息技术教育
created: "2026-09-17T14:06:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
ethics: [equity-in-ai-education]
pedagogy: [professional-training]
discipline: [information technology, cs education]
audience: [administrators, curriculum designers, instructional designers, instructors, learners, policymakers]
level: [higher ed, adult learning]
confidence: high
institutions: [governance]
translation_of: concepts/information-technology
source_updated: "2026-09-17T14:06:00-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **信息技术教育**——计算教育中培养从业者去选择、部署、保障、管理和治理组织实际运行的社会技术系统的分支，而不是把计算当作一门独立学科来研究。它最近的邻居、也是多数边界混淆的来源，是[[cs-education]]：计算机科学教育以算法、编程和形式化基础为中心，而信息技术教育以应用性配置、网络安全、数据与信息管理、以及这些系统的组织[[governance]]为中心。[[generative-ai|生成式 AI]]从两个方向进入这个领域——既是学生必须学会评估、保障和规制的对象，也是辅导他们、对他们的提问分类、并悄悄改写他们被准备进入的[[professional-training|专业]]路径的工具。

## 值得思考的问题

- 如果 AI 压缩了历史上造就 IT 专长的"构建—失败—调试"循环，那么课程应当刻意保护哪些基础能力，哪些可以委托给工具？
- 学生知道自己机构的规则，却仍说不出自己的使用是否合规。这是沟通失败，还是一套基于规则的工具，对于一种在个人账户上私密进行的实践而言本身就是错的杠杆？
- 信息技术教育夹在计算机科学、商科和职业教育之间。谁应当拥有 AI 治理能力——一门课、一条课程线索，还是一个项目级的学习成果？
- 如果一个 transformer 分类器能以约 79% 的精确率区分高阶学习者提问，IT 项目还应当自动化提问方面的形成性反馈吗？
- 多数学生对生成式 AI 的心智模型是陈述性的且浅薄。这能预测[[ai-misuse-learning-harm|误用]]吗，还是只能预测他们无法解释自己其实做对了的决定？

## 引言

信息技术教育是计算的应用侧。它培养人们在组织内部让系统运转起来——网络、数据库、安全运营、健康信息管理、电子政务服务——其毕业生通常由专业机构和雇主来评估，而非仅由学术界。相对于[[cs-education]]的独特性在于分析单元。计算机科学教育把程序和算法当作对象；信息技术教育把已部署的系统以及从业者对其的判断当作对象。计算机科学界争论 AI 代码生成是否侵蚀编程技能，信息技术界则争论 AI 排障是否侵蚀诊断技能、AI 起草的政策文件对谁有约束力，以及毕业生能否治理他们管理的数据系统。

相邻学科以不同方式重叠。[[stem-education]]是母类别并共享其工具，但信息技术教育更常是一个专业硕士或应用型本科学位，其毕业生进入受监管的工作场所。[[business-education]]通过信息系统和电子政务项目与之相邻，这些项目常与 IT 课程共享课程和学生。[[vocational-education]]是另一个职业性邻居：两个领域都为实践而培训，但职业项目针对的是界定明确的行业中的技术员级能力，而信息技术教育假定抽象系统推理，培养出既写治理文件又执行它们的人。[[higher-ed]]命名的是层级而非领域，而这个领域带有认证与合规的表面——健康信息学认证、学生所处理数据的 HIPAA 与 FERPA 义务——这塑造了什么算作正当课程。

这个领域中 AI 的独特之处在于：同一项技术既是课程内容也是教学法。捆绑起来的证据收敛于一个令人不安的主题：信息技术教育当前的 AI 议程被诚信和工具采纳主导，而该领域自身工作场所所要求的治理、安全和数据伦理能力，大多出现在学生实际收到的文件之外。

### AI 如何出现在信息技术教育中

- **游戏化的网络安全培训。**Li 及其同事构建了若干短小、适合移动端的游戏，覆盖从密码安全到短信和电话诈骗识别，把基于测验、基于叙事和[[simulation]]基于模拟的设计与 TikTok 小游戏等交互形式结合起来，动因是传统视频培训参与度低、效果有限（[[ai-gamification-security-education-2026]]）。他们对 59 名大学生（9 名技术专家、50 名普通用户）做的两层评估，报告的是改善网络安全参与度和注意力的潜力，而非已证明的学习增益。
- **自我调节学习中生成式 AI 作为支架或捷径。**一项对澳大利亚 267 名研究生阶段 IT 学生的混合方法研究，区分了被支架化的[[cognitive-offloading]]（学习者澄清目标、生成想法、获得自己随后批判和改编的[[feedback]]，于是[[agency]]留在他们手中）与替代性的卸责（产出以极少验证被接受，控制转移到工具）（[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]）。信心塑造取向：自信的学生在目标设定和监控上行使自主，而信心较弱的同伴把生成式 AI 读成捷径或[[academic-integrity|不端行为]]。这一群体是有差异的，而非同质地面 AI 素养化；作者建议要求学生为 AI 产出做辩护或改编，作为一个明确的[[learning-design]]动作。
- **专业实践中被压缩的专长路径。**对 IT 从业者的 14 次半结构化访谈发现，生成式 AI 在排障、写脚本和系统验证中既充当类似导师的辅导员，又充当缩短阶梯的工具（[[genai-expertise-pathways-sysadmin]]）。在不熟悉领域被加速的表现，减少了接触历史上塑造专长的"构建—失败—调试"循环的机会；AI 辅助的速度还重置了团队和自我期望，产生一种双速文化和生产力愧疚。该研究把课堂对[[metacognition|元认知]]代价和技能衰退的关切带入[[professional-training]]和[[lifelong-learning|职场学习]]。

### 评估与 IT 中 AI 使用的学习者侧

- **把学习者提问当作诊断信号。**Lee、Atif 与 Kang 把来自 12 门 IT 课程的真实学生提问分类为三种建构主义教学角色——知识传递者、促进者和共同学习者——在[[human-in-the-loop-ai|人在回路]]的复核下达成一致标注（Fleiss' kappa 从 0.60 升到 0.83），并把语料扩充到 582 个均衡的提问（[[lee-learner-question-types-ai-education-2026]]）。DeBERTa 在事实性提问上以 86.36% 的准确率和 96.67% 的精确率领先，但促进者的精确率跌到 78.79%，而微调后的 BERT 在共同学习者条目上达到 92.00% 的召回率，精确率只有 74.19%。错误来自角色间的概念相似、学习者意图的歧义，以及领域措辞被误读为认知深度；作者警告扩充可能引入了词汇捷径，且 11 名学生、仅限 IT 的语料还不能推广到其他领域。
- **广而浅的心智模型。**从 86 名本科生在一门必修技术伦理课上绘制的 64 张可用概念图中，浮现出五类心智模型：基于技术过程、基于教育工具、过渡型、后果觉察型和整合型（[[student-mental-models-genai]]）。每张图都显示陈述性知识，25 张显示程序性知识，17 张显示条件性知识，只有 9 张把三者整合起来。技术簇与社会监管簇相距很远，作者将其解读为[[ai-literacy]]和[[ethics|伦理]]觉察在各自独立发展；他们论证，以诚信为中心的指南只触及学生如何概念化这个工具的一个维度。
- **规则已知，合规未定。**一项对 151 名商业信息系统和电子政务项目本科生的调查发现，多数学生在积极使用生成式 AI，但超过半数不确定自己的使用是否符合机构规定，[[regulation|监管]]觉察与实际行为之间只有弱到中等的关联，且依赖大多在私密访问的工具而非机构提供的工具上（[[student-regulatory-awareness-genai]]）。知道规则并不能强烈预测学生做什么。

### 制度政策与治理缺口

- **是指导，不是政策。**对全部 48 个经认证的健康信息学与健康信息管理硕士项目的环境扫描发现，40 个（83%）至少有一份公开可得的 AI 文件，但最主要的形态是咨询性指导（21 个，53%）而非正式政策（7 个，18%）（[[institutional-ai-policy-health-informatics-2026]]）。学术诚信主导了词汇（n = 139），排在引用（n = 59）和[[assessment]]（n = 50）之前，而 HIPAA（n = 5）、FERPA（n = 11）、公平可及（n = 2）和披露要求（n = 1）几乎缺席，电子健康档案则完全未被提及。潜在狄利克雷分配产出四个主题：诚信、学生使用生成式 AI、大学研究工具和 ChatGPT 接触。由于只分析了公开文件，作者把隐私和公平语言的缺席当作关于已发布指导的发现，而非关于机构实践的。
- **公平盲点。**包容（n = 9）、无障碍（n = 9）、便利安排（n = 4）和公平可及（n = 2）出现的比率，不足以支持任何"[[equity-in-ai-education]]已被处理"的主张，尽管若干项目要求在课程作业中使用 AI。这与专业[[governance]]能力受到的稀薄处理一起，构成了这批证据留下的最清晰的设计任务：把诚信规则连接到那些毕业生将要负责执行的可及、隐私和数据治理条款。

## 关联概念

- [[cs-education]]
- [[stem-education]]
- [[business-education]]
- [[vocational-education]]
- [[higher-ed]]
- [[professional-training]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[governance]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]

## 关联文章

- [[ai-gamification-security-education-2026]]
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]
- [[genai-expertise-pathways-sysadmin]]
- [[institutional-ai-policy-health-informatics-2026]]
- [[lee-learner-question-types-ai-education-2026]]
- [[student-mental-models-genai]]
- [[student-regulatory-awareness-genai]]
