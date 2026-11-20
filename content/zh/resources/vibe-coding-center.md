---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "一份面向教育工作者的实地指南，教你用 AI 编码助手搭建一个静态教育网站：三份分别关于设计、安全与学生隐私的 Markdown 指令文件，配以可读的指南和一个可下载的完整包。"
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "本页是英文页面的机器翻译，尚未经母语者审校。"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*本页是英文页面的机器翻译，尚未经母语者审校。*

**The Vibe-Coding Center** 是 Miguel Guhlin 的一份免费实地指南，面向想用 AI 编码助手[[vibe-coding|氛围编程]]出一个小型静态教育站点的教师——一张出门条、一个测验、一个班级作品集——同时又不会把暴露的 API 密钥或学生数据一起发布出去。

## 你可以用它做什么

三份指令文件承载了这些指引：`WEB_DESIGN.md`、`EDU_COMPLIANCE.md` 和 `securevcc.md`。把它们下载到项目根目录，填好项目简报模板，然后请助手阅读并应用全部三份；指南明确指出，文件存在不等于生效，所以必须在请求里点名这些文件。可读的指南逐一解释每一份，其中包括一段「分享前的三项必要检查」的演示：少收集学生数据、检查暴露的 API 密钥、让工具的设计贴合其学习任务。完整包还加上站点本身、提示词包、发布前审查和重建脚本，并附有供下载使用的 SHA-256 清单。

配套的 [EduSynth Hub 示例](https://mguhlin.github.io/funquiz/examples.html)页面把结果呈现为可运行的静态工具，而不是截图：一个按选定的 SOLO 分类层级出题的出门条生成器、一个就是 GitHub Pages 上单个 HTML 文件的学生作品集，以及一个可搜索的专业发展资源库，全部在客户端运行，不需要 LMS 登录。

## 适用对象

能够描述自己想要什么工具、并愿意检查助手产出的 K-12 与高等教育教师和[[learning-design|教学设计者]]。它也适合这样的院系：希望在任何人发布面向学生的工具之前有一份共同的检查清单；也适合通过动手构建而不是通过批判来教授[[ai-literacy|AI 素养]]的教师。

## 说明与注意事项

这个中心提供的是指引，不是合规产品：站点不为自己的 WCAG 2.2 AA 目标作符合性声明，对「使用这些文件能让我的站点合规吗？」的回答是不能，并说明工程审查不能替代学校授权或法律审查。安全书架指向 axe-core、Gitleaks、ZAP 和 Playwright；这些是参考资料而不是随附软件，其中具有侵入性的那些要针对一次性或明确授权的目标使用。阅读不需要账号。重建 HTML 页面需要 Python 和 `markdown-it-py`，这是构建依赖，不是访客依赖。仓库以 MIT 许可发布，而第三方美术作品与所链接的项目保留各自的条款，记录在 `CREDITS.md` 中。
