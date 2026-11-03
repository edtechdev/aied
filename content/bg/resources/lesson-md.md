---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Отворен текстов формат за блокови електронни уроци, плюс агентно умение, което пише уроци, оценявания и цели пакети за курсове в този формат."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика.*

**LESSON.md** е отворен формат за блоково електронно учебно съдържание: Markdown файл с YAML frontmatter и директиви `:::` за текст, изображения и проверки на знанията, четимо от човек и разбираемо за всеки инструмент. Съществува, защото съдържанието на курса обикновено е заключено в един инструмент за авторство и защото [[llm|големите езикови модели]] могат да помогнат само с уроци, които наистина могат да прочетат.

## Какво можете да правите с него
Напишете урок в който и да е текстов редактор и го внесете във всеки инструмент, който поддържа формата, без копиране и преформатиране. Интерактивните части — въпроси с избор на отговор с ограничения за опитите и обратна връзка на ниво отговор — се изразяват като прости свойства, а не чрез графичен интерфейс. Съпътстващ файл `ASSESSMENT.md` в корена на пакета става [[assessment|оценяването]] на курса с точки. Проектът предоставя и умение `lesson-md`, което учи Claude, Codex или друг [[agentic-ai|агент]] на формата, така че описание на курс на обикновен език връща уроци, оценявания и цял пакет.

## За кого е предназначен

Дизайнери на обучение и създатели на курсове, които искат съдържанието им да преживее смяна на инструмента; доставчици на електронно обучение, които искат формат за внасяне и изнасяне, който потребителите им вече разбират; и всеки, който изгражда писане с помощта на AI върху четим формат. Сред сътрудниците е Дан Башоу от LXD Integral, а форматът има публичен дневник на промените до v1.8.

## Свързани понятия

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
