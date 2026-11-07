---
title: "AI 如何帮助支持学生的阅读与阅读理解？"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-07T17:28:19-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

如果你教任何学科，你都要挑选读物、改编文本，并判断一份来源对学生是否太难。AI 可以在这些任务上帮忙，但它给你的难度数字并不是难度的测量 —— 它们是对一段平均文本与一个平均读者的估计，而你实际教的学生可能远非平均。本 FAQ 告诉你工具真正在哪里有用、在哪里失效，以及该拿它怎么办。

## AI 真正能做什么

**大规模地查找与改编文本。** AI 擅长定位来源、简化词汇、生成词汇表，以及把一段文字变成[[study-with-ai|学习指南或摘要]]。把它用在阅读准备的机械部分 —— 扫描、分级、抽取关键术语 —— 而在要紧之处保留人工核查。

**为读者建模，而不是为文本建模。** 由于读者变量承载了一段文本感觉有多难的大部分信号，为读者做画像的工具比任何公式都更好地预测感知难度。在知识库规模最大的研究中，193 名德国高中学生为 3,954 个句子评分，基于画像的模型（最佳集成 RMSE 0.822，均值基线为 1.070）胜过文本的 Flesch 分数，后者把同一材料评得远难于学生的体验 —— 72.8% 的标注为容易或很容易（[[thome-perceived-text-complexity-student-profiles-2025|Thome、Hertweck 与 Conrad，2025]]）。实践版本是：几个学生对一段文字的评分胜过任何公式的标签。

## AI 在哪里不够

**难度标签不是测量。** 像“中级”这样的标签或一个 Flesch 分数描述的是文本表层，而不是你学生的体验。在上文那项研究中，读者特征 —— 家庭所用语言、自评技能，甚至性别 —— 承载的信号多于文本统计，而标注者间一致性很低（Krippendorff's alpha = 0.23），恰恰因为感知难度因人而异。把公式与标签当作假设，并用必须阅读该文本的学生来校准它们。

**让 AI 代替你的学生也不行。** 在同一项研究中，角色扮演提示的 ChatGPT 与 Claude 即使给出了带标签的示例，也无法复现学生对难度的感知 —— 一个 LLM 无法[[simulating-students|模拟读者]]到足以替你判断一段文本（[[thome-perceived-text-complexity-student-profiles-2025|Thome、Hertweck 与 Conrad，2025]]）。

**AI 撰写的文本读起来不同于人类散文。** 在 14 个模型中，与体裁匹配的人类写作相比，AI 语言过度使用罕见的低频词与名词堆叠、省略可选词，并形成更长的依存；这些效应在多轮对话中强于单轮作文，作者将其与迭代对话的压力联系起来（[[clark-ai-generated-language-readability-2026|Clark、Martin 与 Mahowald，2026]]）。生成的解释与生成的阅读材料都带有这一剖面，因此一段 AI 起草的文本可能比其测得阅读水平所显示的更难加工。

**AI 摘要可能取代阅读。** 把一篇文章变成摘要的工具对分诊有用，但如果摘要替代了文本，学生就失去了这项作业本要建立的理解练习 —— 与别处 [[reducing-over-reliance|过度依赖]] 相同的陷阱。

## 该拿它怎么办

**在布置一段文本之前，** 在工具之外再找一个意见：自己略读一遍，如果它是生成的，注意上面那个 AI 散文剖面，并且 —— 最强的证据 —— 请一两个学生试读。与真实读者做一次 5 分钟的试点，胜过任何难度算法。

**当你用 AI 改编文本时，** 让改编保持可见、可复核。把原文与简化版并排放置，让学生（和你）看到改了什么，并给多语学习者一个不隐藏原文的支架（[[ai-multilingual-learners|AI 如何对待多语学习者]] 覆盖了语言适切性的风险）。

**当你评估一个阅读工具或界面时，** 问它是在为个体读者建模，还是盖上一个全局标签。对第二语言读者而言，这个差别往往就是全部。对研究者而言，未决的问题是测量：[[reading-education|阅读教育]] 页面描绘了四条研究线索 —— 阅读中的支持、评估阅读、自适应文本，以及三者之下的测量问题（[[educational-measurement|测量]] 是这条链上的薄弱环节）—— 并把证据报告为有前景但不均衡，因此关于某工具阅读收益的强主张，理应受到与任何 [[checking-whether-educational-ai-works|AI 学习主张]] 同样的怀疑。
