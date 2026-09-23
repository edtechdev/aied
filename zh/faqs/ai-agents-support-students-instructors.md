---
title: "人工智能智能体如何支持学生与教师？"
created: "2026-09-22T20:06:03-04:00"
updated: "2026-09-22T20:06:03-04:00"
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

# 人工智能智能体如何支持学生与教师？

**人工智能智能体能够超越单轮问答**：它们可以规划、使用工具、记住相关的上下文、协调子任务，并在一连串互动中调整支持方式。对学生来说，可能承担的角色包括自适应辅导、学习规划、[[formative-assessment|形成性]]反馈、有引导的[[problem-solving|问题解决]]、练习生成、模拟、先修建议，以及反思性或元认知式的[[prompt-engineering|提示]]。对教师来说，智能体可以协助开发材料、[[automated-question-generation|生成问题]]并加以验证、对反馈进行分诊、做课程[[learning-analytics|分析]]、支持教学设计流程、检索资源，以及统筹各类专门化的智能体。

## 反复出现的智能体能力

文章[[agentic-workflows-education|教育中的智能体工作流]]描述了四项反复出现的智能体能力：**反思、规划、工具使用与多智能体协作**。每一类能力都带来了新的可能，同时也引入了[[explainable-ai|可解释性]]、协调、信任、延迟以及监督方面的挑战。

## 人工智能智能体擅长做什么（正面意义）

- **持续且自适应的支持。** 与单轮的[[conversational-ai|聊天机器人]]不同，智能体可以跨许多轮次维持一段学习对话：记住学习者已经知道什么、调整难度，并为多步[[scaffolding]]排序。这有助于大规模实现[[adaptive-learning|自适应]]学习与[[personalized-learning|个性化]]学习。
- **为教师减负。** 智能体可以起草材料、生成并验证问题（例如生成器与验证器配对）、对反馈进行分诊，并统筹专门化的子智能体，从而把教师的精力释放到价值更高的互动上。
- **丰富的互动与[[desirable-difficulties|有产出的摩擦]]。** 多智能体课堂与模拟同伴会制造出多样的动态：同伴式的论说、建设性的分歧、角色扮演，这些都有助于[[collaborative-learning|协作学习]]与[[socratic-method|苏格拉底式追问]]。被设计成提出质疑而非一味认同的智能体，可以推动学习者进行更深入的重新考虑（在研究中，建设性冲突型智能体改善了设计成果）。
- **低风险的练习与模拟。** 基于智能体的[[simulation|模拟]]（[[simulating-students|模拟学生]]、[[medical-education|临床]]情境）让学习者可以在安全、可重复的环境中先练习，然后再应用于真实世界。

## 主要风险与提醒（负面意义）

- **过度自动化会掏空学习。** 智能体自动化得越多，学习者所做的认知工作就越少。主动式的智能体可能使学生变成被动的消费者，削弱那些能够建立持久学习的费力过程，并提高[[cognitive-offloading|过度依赖]]的风险。
- **元认知参与度下降。** 如果规划与监控都由智能体代劳，学习者可能无法发展出教育本应培养的[[metacognition]]与[[self-regulated-learning|自我调节]]能力。智能体应当引出这些过程，而不是取代它们。
- **错误的信任与验证缺口。** 自主智能体可能产出看似合理却未经核实的输出，学习者与教师可能对它[[trust-calibration|过度信任]]。稳健的核实与[[ai-literacy]]会变得更加重要，因为智能体获得了[[agency|自主性]]。
- **不透明与问责。** 多智能体系统使[[human-in-the-loop-ai|人工监督]]变得复杂：哪个智能体为一个错误负责，人又在哪里介入？协调失败与人格漂移会削弱可靠性与[[pedagogical-safety]]。
- **[[equity-in-ai-education|公平]]与偏见。** 智能体可能大规模复制训练数据中的偏见，而能够使用强大智能体系统的机会不均会扩大不公平。

## 目前证据显示了什么

具体的结果，以及种种告诫，正在不断积累。[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]]是在真实辅导场景中针对人机系统的首个[[rct|随机对照试验]]，它把资深辅导者的推理提炼成实时指导，交给新手辅导者：在 **900 名辅导者与约 1,800 名学生**中，能够使用该系统的辅导者所带的学生**掌握知识点的可能性高出 4 个百分点**；而在评分最低的辅导者那里，这一幅度升至 **9 个百分点**，其学生在对照组中追平了评分更高的辅导者所带的学生。它的成本约为**每位辅导者每年 \$20**，而对 **550,000 条以上辅导消息**的分析显示，辅导者转向提出引导性问题，而不是直接把答案给出去：这是一个清晰的案例，说明人工智能是在增强[[teacher-role|教师]]，而不是取代他们。

但“智能体式”并不自动意味着更好。[[ilieva-agentic-genai-higher-education-2026|一项针对电子商务课程 130 名学生的研究]]发现，[[generative-ai]]聊天机器人与 GAI 智能体在传统[[online-teaching-and-learning|在线学习]]之上，在学习增强与[[personalized-learning|个性化]]两方面都得到更高的评分，然而**聊天机器人条件与智能体条件之间没有统计上显著的差异**，因此增加的自主性并没有转化为额外的学习价值。据此，所提出的“智能体式 GAI 支持的学习框架”把智能体定位为**有边界的、由人监督的学习伙伴**，目标、检查点与最终决定都保留给人。

还有两点告诫值得注意。第一，**能力回退**：随机试验显示，即便短暂的智能辅助也可能压低随后无辅助状态下的表现，而这一撤除辅助之后的区间，也就是所谓的[[cognitive-washout-ai-skill-decay-2026|认知消退]]，几乎没有得到测量，因此由智能体辅助获得的[[learning-gains|学习收益]]能维持多久尚不清楚。第二，**评价**：[[zhang-platform-scores-miss-ai-teaching-agents-2026|在一套医学课程中部署八个 AI 教学智能体]]时，平台生成的分数对智能体的排名与独立的专家评分量规给出的排名不同（平台排名第三的智能体在教学质量的排名上垫底），因为平台分数反映的是学生表现，而不是[[pedagogical-agent|智能体]]的教学质量。而[[governance]]综述[[beyond-agent-label-agentic-ai-governance-2026|《超越智能体标签》]]又加上一条比例原则：**自主性不应超过证据的成熟程度，也不应超过可问责的人类控制的强度**，并指出证据在成品层面的结果上最强，在持久学习与公平方面最弱。想知道如何搭建一个智能体，参见[[developing-ai-tutor]]；想知道如何评价它是否有效，参见[[evaluating-ai-interventions-methods]]。

## 证据的现状

证据基础仍在形成之中。本知识库的[[agentic-ai|教育中的智能体式人工智能]]综合了针对 474 项研究的[[meta-analysis-systematic-review|范围综述]]，但指出研究显著集中在[[higher-ed|高等教育]]、[[stem-education|STEM]]、短期设计与基于文本的辅导上；经审阅的文献中只有少数明确把系统建立在教育理论之上，而严格的长期课堂验证仍然有限。

因此关键的设计警告是：不要把更大的自主性等同于更好的学习。[[agentic-ai-pedagogical-best-practice-2026|智能体式人工智能与教学最佳实践]]建议采用有意的摩擦、动态的脚手架与人的监督，使智能体的主动性不会剥夺学习者自己的规划、监控、判断与努力。另见[[intelligent-tutoring|智能辅导]]与[[human-in-the-loop-ai|人在回路中的人工智能]]。