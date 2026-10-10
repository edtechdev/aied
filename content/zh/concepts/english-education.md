---
title: 英语教育（EAP / EFL / ESL）
created: "2026-08-21T12:30:00-04:00"
updated: "2026-10-09T19:06:59-04:00"
type: concept
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment]
ethics: [equity-in-ai-education]
discipline: [english education, language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/english-education
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

> **英语教育**——把 AI 应用于英语的[[teacher-role|教学]]与学习，尤其是**学术英语（English for Academic Purposes, EAP）**以及更广义的英语语言教学（EFL/ESL/L2）。这是一条[[discipline-specific-aied|学科特定的]][[ai-education|AIEd]]支线，既区别于一般的[[language-learning]]（任何语言的二语/外语习得），也区别于[[writing-education]]（作为一种通用技能的写作）：它以英语这一目标语言和学术语域为中心，拥有自己的标志性教学法——交际能力、基于体裁的学术写作、纠正性反馈，以及在学术语域中的读与写——这些都塑造了 AI 被如何设计、使用和评估。

## 值得思考的问题

- 英语是大语言模型处理得最好的语言。这给了英语学习者强大的学术写作支架——但它是否也可能悄然固化一种对标准学术英语的偏好，从而边缘化[[multilingual-learning|多语的]]和世界英语写作者？你认为哪种结果占主导？
- 学术英语（EAP）以基于体裁的学术写作、纠正性反馈和学术语域为中心，区别于一般语言学习或一般写作教学。学术英语的特定语域，为什么可能改变 AI 工具需要做的事，相对于通用写作支持而言？
- 如果帮你修改英语的 AI 本身就在你想掌握的那套"标准学术英语"上最强，那么它何时帮得上忙，何时又会压平你自己的声音或方言？你如何分辨二者的区别？
- 自动反馈和 AI 导师在英语写作与口语教学中越来越常见。关于交际能力、语域和受众，AI 反馈可能漏掉什么，而一位人类教师或同伴会捕捉到？

## 引言

英语是受 AI 影响最深的学科支线之一，因为[[llm|LLM]]以英语为主导：它们最擅长生成、修改和评估英语文本，而这正是 EAP 与 EFL/ESL 教学的中心。这种英语优势造成了一种独特的双刃效应——一方面是对学术英语的强大[[scaffolding]]，另一方面是可能边缘化多语学习者的、对标准学术英语的固化偏好。

## 范围与焦点

本概念组织的是**英语教育**中的 AI [[research-methods-aied|研究]]——语言学习中目标语言为英语的那一部分（包括 EFL/ESL/L2 语境）以及学术英语语域（EAP）。核心主题：

- **学术英语（EAP）：** 对高等教育写作、阅读和反馈中使用的、基于体裁的学科特定英语的 AI 支持——区别于一般写作教学。
- **英语语言教学（EFL/ESL/L2）：** 面向英语学习者的[[intelligent-tutoring|AI 导师]]、对话伙伴和[[feedback]]工具。
- **英语特定的[[assessment]]：** 对英语写作与口语的自动评估和反馈，包括 EAP 写作修改和 L2 写作评估。
- **阅读与文学可读性：**[[bird-multimodal-educational-literature-2026|Bird（2026）]]把 transformer 文本分类与计算语言学特征融合，按英国 Key Stage 对英国文学进行分类，达到 0.996 的 F1——这是对基于体裁的 EAP 阅读支持和阅读水平对齐的一种可扩展的、数据驱动的补充。
- **语言公平：** AI 的英语主导与多语及世界英语写作者需求之间的张力。

## 英语教育如何区别于语言学习

[[language-learning]]是习得任何第二/外语的更广的伞形概念——口头的、书面的、识字层面的——经由 AI 对话伙伴、发音工具和会话练习。英语教育是**英语特定**的情形，而在其中 EAP 又是**语域特定**的情形：

| 维度 | [[language-learning]] | **英语教育（本页）** |
|-----------|----------------------|-----------------------------------|
| 目标语言 | 任何 L2（法语、西班牙语、日语……） | 专指英语 |
| 焦点 | 一般性的 L2 习得：口语对话、发音、识字 | 英语作为目标语言 + 学术英语语域 |
| 标志性语境 | 会话、发音、一般流利度 | **EAP**：学术写作、阅读、反馈、体裁 |
| 代表性 AI | L2 对话伙伴、[[speech-and-voice-technologies|发音反馈]]、机器人辅助 L2 | EAP 写作工具、EFL 同伴反馈、英语学术写作评估 |

两者大量重叠（多数英语学习也是 L2 习得），但英语教育把英语作为目标语言和学术语域推到前台——例如，[[alharbi-ethical-genai-eap-2026|EAP 中符合伦理的生成式 AI 整合]]、[[feedback-literacy-scripts-eap-writing|生成式 AI 的 EAP 写作修改]]和[[genai-differentiated-eap-reading-materials-2026|EAP 阅读材料改编]]，其 EAP 特定性都是一般语言学习研究所不具备的。

## 英语教育如何区别于写作教育

[[writing-education]]关乎作为一种通用认知与修辞技能的写作——跨所有语言和学科，从作文到学术诚信。英语教育专聚焦于**英语**，而在 EAP 内又聚焦于**学术语域**：

| 维度 | [[writing-education]] | **英语教育（本页）** |
|-----------|----------------------|-----------------------------------|
| 范围 | 一般性写作（任何语言、任何体裁） | 英语作为目标语言 + 学术英语语域 |
| 标志性关切 | 作文、修改、[[agency]]、作者身份 | EAP 体裁、学术语域、L2/EFL 写作、英语中的[[feedback-literacy|反馈素养]] |
| 评估角度 | [[automated-essay-scoring|自动作文评分]]、广义写作反馈 | 英语特定评估（EAP 写作、EFL[[peer-assessment|同伴反馈]]、L2 写作评估） |
| 公平角度 | 写作反馈中的偏见 | 偏见 + 英语主导/多语张力（世界英语） |

许多写作教育文章也是英语优先的（例如[[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]），但它们被框定为一般写作研究；英语教育把**英语作为目标语言**和**学术英语**这两个维度重新置于中心，而通用的写作页和通用的语言学习页都对它们重视不足。

## 本聚类中的文章

- **EAP 特定：**[[alharbi-ethical-genai-eap-2026|EAP 中符合伦理的生成式 AI 整合]]、[[feedback-literacy-scripts-eap-writing|生成式 AI 的 EAP 写作修改]]、[[genai-differentiated-eap-reading-materials-2026|EAP 阅读材料改编]]。
- **EFL/ESL/L2：**[[tact-pedagogically-adaptive-esl-tutoring|TACT ESL 辅导]]、[[sutama-chatgpt-eportfolio-speaking-2026|ChatGPT EFL 电子档案袋口语]]、[[irwin-muller-efl-peer-feedback-literacy|EFL 同伴反馈素养]]、[[ai-vs-human-assessment-efl-tpck-2026|AI 与人类 EFL 评估之比]]、[[acceptance-ai-english-tools-2026|AI 英语工具的接受度]]、[[ai-tools-arab-english-classrooms|阿拉伯大学英语课堂中的 AI]]、[[zhao-ji-appraisal-human-ai-revisions-2026|对同伴与 AI 修改的 EFL 议论文的评价分析]]。
- **L2 英语写作/评估：**[[self-referential-l2-writing-llm-assessment|自参照 L2 写作评估]]、[[ai-interlocutor-l2-spoken-dialogue|L2 口语对话伙伴]]。
- **语言公平 / 世界英语：**[[genai-linguistic-diversity-academic-writing|生成式 AI 与学术写作中的语言多样性]]、[[governing-unseen-ai-literacy-language-teachers-2026|语言教师中的 AI 素养]]、[[structural-silence-underrepresented-language-ai-2026|AI 基础设施中代表性不足的语言]]。

## 为何重要

AI 的英语主导性是这条支线的定义性特征。因为模型在英语中、尤其在标准学术英语中最强，英语教育既受益超常（强大的 EAP 支架），也承担独特风险（单语偏见、对世界英语和多语写作者的歧视）。这里的研究连接到[[equity-in-ai-education|公平]]、[[bias-mitigation|偏见缓解]]、[[automated-assessment|自动评估]]、[[ai-feedback-quality|AI 反馈质量]]和[[academic-integrity|学术诚信]]。

## 对英语 / EAP / EFL-ESL 教师的启示

- **刻意利用 AI 在学术英语上的强项。**因为模型在英语和标准学术英语中最强，EAP 教师可以把 AI 用于基于体裁的写作、阅读材料分层（[[genai-differentiated-eap-reading-materials-2026|EAP 材料]]）和修改反馈——但应把 AI 框定为起草/反馈伙伴，而非答案引擎。
- **保护学术英语语域与反馈素养。**[[feedback-literacy-scripts-eap-writing|EAP 写作修改]]显示，反馈只有在学习者的反馈素养支撑下才有生产力——教学生解读、评判和依 AI 反馈行动，并用第二评分者机制核查 AI 质量。
- **留意英语主导的公平张力。**模型偏袒标准学术英语，边缘化世界英语和多语写作者（[[genai-linguistic-diversity-academic-writing|世界英语]]、[[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]）——审计反馈中的单语偏见和降低的期望。
- **把 AI 合乎伦理地整合进 EAP。**[[alharbi-ethical-genai-eap-2026|EAP 中符合伦理的生成式 AI]]呼吁在[[higher-ed]]英语教学中透明、负责任地使用，以维护学术诚信。
- **预期谨慎的、先准备后进课堂的采纳路径。**一项对 23 项研究的[[li-language-educators-genai-review-2026|系统综述]]（Li et al. 2026）发现，语言教师最看重[[generative-ai|生成式 AI]]在幕后准备上的价值——备课、材料制作和写作支持/反馈——而对直接的课堂使用犹豫不决，主要关切集中在[[academic-integrity|学术诚信]]（抄袭和[[assessment-validity|评估效度]]）。采纳受专业身份认同、[[pedagogy|教学]]、技术、[[governance|制度]]和诚信因素塑造，能力缺口则映射到 episteme（理解 AI 的能力与局限）、techne（[[prompt-engineering]]、AI 增强的任务/评估设计、识别 AI 生成文本）和 phronesis（[[ethics|伦理]]判断、偏见/隐私处理）——因此 EAP/EFL 教师应当刻意培养这些能力，并规划一条"先后台、后课堂"的实施路径。
- **按熟练度和需求做区分。**[[ai-vs-human-assessment-efl-tpck-2026|EFL 评估]]和适应性辅导研究支持按学习者水平定制 AI 支持和评估，而非一刀切。

- **把技术权重向产出性技能倾斜。**一项对 33 项 TEFL 研究的元分析发现了小到中等的总体效应（g = 0.38，经剪补法后降为 0.28），该效应随教育层级上升而增强，且更利于产出性技能——说与写——而非接受性技能（[[liu-emerging-tech-tefl-review-2026|Liu、Hashim 与 Sulaiman（2026）]]）。

## 关联概念

- [[language-learning]]
- [[writing-education]]
- [[multilingual-learning]]
- [[higher-ed]]
- [[k-12]]
- [[generative-ai]]
- [[llm]]
- [[automated-assessment]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[discipline-specific-aied]]

## 关联文章

- [[alharbi-ethical-genai-eap-2026]] — Ethical Generative AI Integration in EAP within Higher Education
- [[feedback-literacy-scripts-eap-writing]] — Feedback Literacy Scripts and a Second-Rater Mechanism in GenAI EAP Writing Revision
- [[genai-differentiated-eap-reading-materials-2026]] — From Unified to Differentiated Materials: GenAI-Supported Adaptation of EAP Reading Materials
- [[tact-pedagogically-adaptive-esl-tutoring]] — TACT: Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring
- [[sutama-chatgpt-eportfolio-speaking-2026]] — Aligning ChatGPT with E-Portfolio Assessment as EFL Learning Model
- [[irwin-muller-efl-peer-feedback-literacy]] — Positioning Generative AI in EFL Peer Feedback
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-Generated versus Human-Developed Assessment Tasks in EFL Context
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI-Assisted English Language Learning Tools in Higher Education
- [[ai-tools-arab-english-classrooms]] — AI tools in Arab University English classrooms
- [[self-referential-l2-writing-llm-assessment]] — Toward Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? L2 Spoken Dialogue
- [[genai-linguistic-diversity-academic-writing]] — Generative AI and Linguistic Diversity in Academic Writing and Publishing
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governing the Unseen: AI Literacy among Language Teachers
- [[structural-silence-underrepresented-language-ai-2026]] — Structural Silence: Underrepresented Languages in AI Infrastructure
- [[liu-emerging-tech-tefl-review-2026]] — Emerging technologies for TEFL
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[bird-multimodal-educational-literature-2026]] — Multimodal fusion for classifying educational literature
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Peer and AI revisions of EFL argumentative essays differ in dialogic positioning (Zhao & Ji 2026)
