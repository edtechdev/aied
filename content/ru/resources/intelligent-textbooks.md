---
title: "Создание интеллектуальных учебников"
created: "2026-10-13T21:16:00-04:00"
type: resource
summary: "Dan McCreary's open-source guide to building intelligent textbooks — online textbooks with search, navigation, glossaries, quizzes, concept graphs and embedded simulations — using MkDocs Material and generative AI, with a companion library of AI-generated interactive MicroSims."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Автоматический перевод данной английской страницы, не проверенный носителем языка."
---

*Автоматический перевод данной английской страницы, не проверенный носителем языка.*

Сайт **Intelligent Textbooks** — это пошаговое руководство Дэна Маккрири по созданию *интеллектуальных учебников*: онлайновых учебников, которые выходят за рамки статичных PDF за счёт поиска, навигации по сайту, глоссария терминов, оглавления, управления проверочными заданиями, отображаемых формул, превью для социальных сетей, проверки ссылок и легко визуализируемого **графа концепций**, показывающего все концепции курса и их зависимости. В руководстве утверждается, что многие современные курсы могут выиграть от качественных онлайновых учебников с такими возможностями, и показывается, как их создавать, используя систему сборки [MkDocs](http://mkdocs.com/) в сочетании с темой Material и генеративным ИИ для создания и поддержания контента.

Ключевой приём состоит в том, что учебник *создаётся в Markdown и генерируется с помощью ИИ* — это конкретный случай шаблона [[vibe-coding|авторства с помощью ИИ]], применённого к [[curriculum-design|контенту курса]]: вместо ручного сопровождения большого сайта вы описываете курс и позволяете генеративному ИИ создавать и поддерживать страницы, а инструментарий берёт на себя навигацию, поиск и граф концепций. Сопутствующая библиотека [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) заявляет об автоматизации более 90% задач, необходимых для создания учебника второго уровня из описания курса.

## Дополнительный ресурс: MicroSims

Естественным дополнением этого руководства является библиотека Маккрири **MicroSims** по адресу <https://dmccreary.github.io/microsims/> (исходный код: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), которая предоставляет интерактивные симуляции, встраиваемые в интеллектуальный учебник. *MicroSim* (микросимуляция) — это простая интерактивная симуляция, сгенерированная с помощью ИИ для помощи преподавателям в объяснении концепции; её можно встроить в интеллектуальный учебник или на любой сайт, принимающий элемент `iframe`. MicroSims отличаются тремя особенностями: **генерацией с помощью ИИ** (стандартизированные шаблоны проектирования превращают описание симуляции на естественном языке в распространяемый объект), **универсальностью встраивания** (один HTML-элемент `iframe` позволяет поместить симуляцию на любую страницу) и **прозрачным, изменяемым кодом** (никакого чёрного ящика — одним щелчком симуляция открывается в веб-редакторе, а лицензия Creative Commons позволяет большинству преподавателей использовать её без лицензионных отчислений). Термин был предложен Валери Локхарт в 2023 году, после того как она обнаружила, что преподаватели и студенты могут создавать симуляции с помощью JavaScript-библиотеки p5.js практически без обучения.

Проект также публикует JSON-схему метаданных MicroSim, чтобы инструменты ИИ могли генерировать пригодные для поиска дескрипторы; фасетный реестр MicroSim находится в планах. Исследовательская статья, описывающая этот подход, — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — размещена на arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Примеры симуляций включают Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula и график доходности фондового рынка; каждая работает в режиме реального времени на сайте.

## Для кого он предназначен

Для преподавателей и дизайнеров обучения, которые хотят создать или поддерживать учебник курса, особенно в высшем образовании и профессиональном обучении, а также для разработчиков преподавательского потенциала и всех, кто использует генеративный ИИ для создания образовательного контента. Он подходит педагогам, которым удобен рабочий процесс на основе Markdown и Git (или которые готовы его освоить) и которые хотят, чтобы ИИ занимался технической инфраструктурой сайта — поиском, навигацией, графом концепций, — позволяя сосредоточиться на педагогике.

## Примечания и оговорки

Это руководство практика и инструментарий, а не рецензированное исследование: оно представляет рабочий процесс и собственное педагогическое обоснование («интеллектуальные учебники ведут студентов через концепции в их поиске знания»), а не доказательства результатов обучения. Наиболее близким к эмпирическому обоснованию является исследовательская статья о MicroSims, и она самостоятельно опубликована на arXiv. Оба проекта имеют открытый исходный код (репозиторий intelligent-textbooks сообщает о лицензии MIT и 38 звёздах; MicroSims сообщает о лицензии Creative Commons и 13 звёздах) и активно поддерживаются. Графы концепций и структура, начинающаяся с глоссария, действительно полезны для обнаруживаемости материалов, однако руководство предполагает довольно технический процесс авторства — MkDocs, Git и инструменты генеративного ИИ, — что может стать препятствием для части преподавателей. На момент включения в базу знаний реестр MicroSims всё ещё был лишь в планах, поэтому поиск конкретной существующей симуляции опирается на собственный поиск и навигацию по сайту.

## Связанные концепции

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
