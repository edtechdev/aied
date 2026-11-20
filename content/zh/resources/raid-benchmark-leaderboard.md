---
title: "RAID 基准排行榜"
created: "2026-11-18T03:23:03-05:00"
updated: "2026-11-18T03:23:03-05:00"
type: resource
summary: "一份 AI 文本检测器的公开排行榜，其分数来自 RAID——一个为测试模型、领域、解码设置与对抗攻击下的稳健性而构建的基准。"
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-18"
    agent: hermes-agent
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

RAID 是多数关于[[ai-detection|AI 文本检测]]的严肃主张背后的那个基准，而它的排行榜是检验一个检测器已发表的准确率能否经受住模型、领域、解码设置或刻意攻击变化的地方。条目在测试集上评分，任何遵循仓库提交流程的人都可以提交。

## 你可以用它做什么

按领域筛选——摘要、书籍、新闻、诗歌、食谱、Reddit、评论、维基——按解码策略（贪心或采样）、按重复惩罚、按对抗攻击筛选，攻击类型包括空白字符、同形字符、同义词替换、改写、零宽空格和文章删除。然后跨多个指标比较一个检测器：AUROC、5% 假阳性率下的 TPR，以及 1% 下的 TPR。

这组筛选器正是重点。一个在总体上接近 1.000 的检测器，一旦文本被改写或源模型换了，就可能塌下去，而排行榜让你在院校拿它去立一桩[[academic-integrity|学术不端]]案之前就看到这个塌陷。1% 假阳性那一列在教育中最要紧，因为在学校这种体量上，1% 的错误率意味着数以百计被误指的学生。

## 适用对象

评估检测方法的研究者，撰写可能引用某个检测器的政策的行政人员，以及想在教学大纲里说「这能被检测出来吗」之前先拿到一个具体答案的教师。

## 说明与注意事项

这项基准衡量的是机器生成文本的检测，而不是不端行为：一个用 AI 来构思、列提纲或修改的学生，产出的文本本就不是检测器为捕捉而造的，而一个[[language-learning|用第二语言写作]]的学生是排行榜无法显示的已知假阳性风险。RAID 是由一个学术团队维护的研究产物；覆盖范围跟随其测试集中的生成模型，因此在基准刷新之前，更新的模型可能被代表不足。排行榜给检测器排位，而不是给其厂商的数据处理实践排位，高 AUROC 也不说明把学生作业提交给那个服务在你的法域里是否合法或合乎伦理。
