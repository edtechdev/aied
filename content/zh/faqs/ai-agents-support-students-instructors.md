---
title: "人工智能智能体如何支持学生与教师？"
created: "2026-09-22T20:06:03-04:00"
updated: "2026-10-29T09:20:28-04:00"
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/ai-agents-support-students-instructors
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

一场厂商演示跑了四十分钟。这个智能体读了教学大纲，起草了下周的测验，标出了三名还没打开阅读材料的学生，并提议给他们发邮件。你的教务长希望月底之前就采购作出决定。

一个[[agentic-ai|智能体]]会规划、调用工具、保持上下文、把工作拆成子任务并在多轮之间调整，这比一个[[conversational-ai|聊天机器人]]做的更多。由此打开的学生侧与教师侧角色是真实的。证据并没有显示更多的自主性带来更多的学习：在本文引用的唯一一项正面对比研究里，智能体与聊天机器人打平。把自主性放在有人检查输出的地方，把规划留给学习者，并对照你自己的量规给教学质量打分。

## 简版要点

**1.** 先命名任务，再选产品。

**2.** 从教师侧开始，那里已经有老师在检查工作。

**3.** 把新增的自主性当作一项成本，直到证据说不是。

**4.** 把规划与判断留给学习者，因为这份作业存在的目的就是建立这两样东西。

**5.** 对照你的量规给智能体打分，并在试点结束前安排一次无辅助检查。

## 先挑任务，再挑智能体

[[agentic-workflows-education|教育中的智能体工作流]]列出了四项反复出现的能力：反思、规划、工具使用与多智能体协作。每一项在带来可能性的同时也加上一项成本，涉及[[explainable-ai|可解释性]]、协调、[[trust-calibration|信任]]、延迟与监督。

学生侧的角色从[[adaptive-learning|自适应]]辅导与学习规划，到[[formative-assessment|形成性]]反馈、有引导的[[problem-solving|问题解决]]与练习生成，再到先修知识推荐与反思性的[[metacognition|元认知]][[prompt-engineering|提示]]。教师侧的角色涵盖材料开发、[[automated-question-generation|题目生成]]与验证、反馈分流、课程[[learning-analytics|分析]]、教学设计、资源检索，以及专用子智能体的编排。

其中有两者在早期更安全，因为二者产出的都是有人在学生之前先读过的成品：一个配了验证器的题目生成器，以及由教师编辑的草稿。

## 从已经有人在检查工作的地方开始

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]]是第一个在实时辅导中测试人—AI 系统的[[rct|随机对照试验]]，它把从有经验辅导者的推理中提炼出的实时指导给到新手辅导者，覆盖 900 名辅导者与大约 1,800 名学生。有权限的辅导者所带的学生，掌握知识点的可能性高出 4 个百分点，在评分最低的辅导者中升到 9 个百分点，他们的学生在对照组里追上了评分更好的辅导者所带的学生。它每年每位辅导者约花 \$20，而对 550,000+ 条辅导消息的分析显示，辅导者的行为从给答案转向提引导性问题。这是 AI 在增强[[teacher-role|教师]]。

智能体并没有教那个学生。它在对话中途给人提供信息，由人决定说什么。回路里有一个人，加上一个贴近这项工作的结果，才是这个结果能迁移到另一门课的原因。

## 不要假定更多自主性就能买到更多学习

[[ilieva-agentic-genai-higher-education-2026|一项针对一门电子商务课程 130 名学生的研究]]发现，[[generative-ai|生成式 AI]]聊天机器人与智能体优于传统的[[online-teaching-and-learning|在线学习]]，在学习与[[personalized-learning|个性化]]两方面都是如此，而聊天机器人与智能体之间没有显著差异。自主性增加了，在这些测量上没有带来增加值。

那项研究的框架把智能体当作有边界、有人监督的学习伙伴，目标、检查点与最终决定都留给人。[[beyond-agent-label-agentic-ai-governance-2026|超越“智能体”这个标签]]把它变成一条[[governance|治理]]规则：自主性不应超过证据的成熟度或可问责的人类控制的强度，而证据在成品层面的结果上最强，在持久[[learning-gains|学习]]与[[equity-in-ai-education|公平]]上最弱。

学习者侧的风险朝同一个方向。一个替学生规划并监控的智能体，拿走了建立[[self-regulated-learning|自我调节]]的那种练习，并招来[[cognitive-offloading|卸载]]。[[agentic-ai-pedagogical-best-practice-2026|最佳实践指引]]要求有意的阻力、会逐渐退出的[[scaffolding|脚手架]]与[[human-in-the-loop-ai|人的监督]]。[[desirable-difficulties|有产出的困难]]有可用的例子。在所综述的研究中，与一个薄弱设计争辩的建设性冲突型智能体改善了设计结果。[[simulating-students|模拟同伴]]支持[[collaborative-learning|协作学习]]与[[socratic-method|苏格拉底式]]追问，而[[medical-education|临床]][[simulation|模拟]]让学习者在犯错代价很低的地方排练。

对其中任何一个的检验是：这次会话之后，学生能做哪件之前由智能体在做的事？把判断交出去，学生就失去了使用判断的[[agency|练习]]。

## 用你自己的判断来检查智能体

[[zhang-platform-scores-miss-ai-teaching-agents-2026|八个部署在一套医学课程中的 AI 教学智能体]]，被平台生成的分数与一套独立专家量规排出了不同的名次。平台上排名第三的智能体在教学质量上排在最后。平台分数反映的是学生表现，而学生表现变动的原因与教学毫无关系。

要问一个仪表盘数字数的是什么、它背后那套量规是谁写的、以及一个低分在学生作业里会是什么样子。[[pedagogical-safety|教学安全]]属于同一次复核，因为一串[[pedagogical-agent|智能体]]会让“当一个答案是错的时，哪个组件该负责”变得难以回答。

## 为关停做计划

随机试验显示，短暂的 AI 帮助可能压低随后无辅助的表现，而帮助撤除之后的那段区间，[[cognitive-washout-ai-skill-decay-2026|认知冲刷]]，几乎完全没有被测量。本页背后的综述建立在一项覆盖 474 项研究的[[meta-analysis-systematic-review|范围综述]]之上，并发现这些工作集中在[[higher-ed|高等教育]]、[[stem-education|STEM]]、短期设计与基于文本的辅导，只有少数明确扎根于教育理论。一个在许可证到期时就结束的试点，测量的是错误的窗口。

## 管理者会弄错的地方

智能体是升级版的聊天机器人，所以升级应当体现在结果上。在那项 130 名学生的对比里，两个 AI 条件都优于在线学习，而两者都没能胜过对方。

仪表盘给教学质量排名。它排的是学生表现，而八个智能体产生的排名，把第三名与最后一名相对于专家量规颠倒了过来。

自主性是要买的那个特性。比例原则指向相反的方向，而证据恰恰在自主性最大的地方最薄。

可及性会弥合公平差距。对有能力使用的智能体系统的获取不平等会扩大这个差距，而智能体会在规模上复制训练数据里的偏见。

## 会回来的那些话

**“学生只会让它把活干完。”** 有些人会，而架构决定这有多容易。替学生规划并起草的智能体会招来这件事。要求先有一次尝试、然后才提问的智能体不会。

**“厂商的评估说它有效。”** 问那个数字数的是什么。如果是平台测量的学生表现，它测的是学生，和测智能体一样多。

**“在一串链条里没人能说清哪个智能体该负责。”** 对多数当前部署来说这是真的。为这条链指定一个负责人，记录哪个组件产出了哪份输出，并在任何东西进入学生记录之前设一个人工检查点。

## 本周可以做的事

**1.** 在下一次厂商电话会议之前，写下任务，以及你将用来评判它的结果，各一句话。

**2.** 用你的量规给一个智能体在十份真实学生作业上的输出打分，并把分数留下来。

**3.** 在试点计划里加一项有日期、有负责人的无辅助任务。

## 接下来可以去哪里

[[developing-ai-tutor|开发 AI 辅导系统]]讲的是面向学生的构建，从目标到帮助阶梯，而[[evaluating-ai-interventions-methods|评估 AI 干预的方法]]讲的是这东西是否奏效。[[intelligent-tutoring|智能辅导]]与[[ai-literacy|AI 素养]]提供本页所假定的设计词汇。
