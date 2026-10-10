---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-10-09T19:11:12-04:00"
type: resource
summary: "一套开源 Agent Skill 与本地浏览器编辑器，把十八条让写作『值得读者读』的规则变成草稿、改写和审阅三种模式的写作辅助工具。"
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
contributors: [editor]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**Clarity** 把一个 Agent Skill 和一个浏览器编辑器配成一对，二者都围绕"写出的东西配得上读者"的十八条规则构建。这个 Skill 通过 `npx skills add addyosmani/clarity` 安装进 Claude Code、Codex 等编程代理，然后以三种模式工作：审阅模式（review mode）批评一份草稿且不动原文件；改写模式（rewrite mode）直接就地编辑草稿；访谈模式（interview mode）先向作者提问，再根据回答共同写作。写作者得到的 [[feedback|反馈]]（feedback）首先针对内容实质而非文字风格。这些规则追问文章写给谁、读者已经知道什么，要求观点胜过话题、具体胜过抽象，并把啰嗦视为"还没想清楚文章是为什么而写"的问题，而不是词汇量的问题。

浏览器编辑器完全在页面本地运行，不上传草稿。它会报告机器写作腔调的痕迹、可读性以及内容实质上的缺口，因此在文本送达读者之前审阅 [[generative-ai|生成式 AI]]（generative AI）产出的内容时很有用。项目明确声明其目标是保持"读起来仍然是作者本人"的写作，而不是为通过 [[ai-literacy|AI 检测]]（AI detection）而工程化的文字——教师们在制定 AI 辅助 [[writing-education|写作]]（writing）政策时会认得这一区分。

## 采用之前需要了解什么

仓库发布了一套评估协议、`samples/` 目录下的前后对照样例，以及 Skill 背后的参考文件，因此审阅者可以亲自检查这些规则的实际行为，而不必凭宣传就采信；本页不复述任何实测结果。作者是 Addy Osmani，许可证为 MIT，这份工作是个人独立成果，而非任何机构的产物。它年轻而活跃：创建于 2026 年 8 月，54 次提交，三个版本，最新版为同年 9 月的 0.2.1，2026 年 9 月查看时约 250 stars，已有三位贡献者提交过改动。Skill 指令加载进用户已经在运行的代理，因此通常的 [[prompt-engineering|提示工程]]（prompt engineering）注意事项同样适用：批评的质量取决于交给它的草稿。

## 关联概念
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
