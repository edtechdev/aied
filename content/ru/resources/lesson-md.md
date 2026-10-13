---
title: "LESSON.md"
created: "2026-10-13T21:14:00-04:00"
type: resource
summary: "An open, plain-text format for block-based eLearning lessons, plus an agent skill that writes lessons, assessments and whole course bundles in that format."
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
reviewed_by: [editor]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "Автоматический перевод данной английской страницы, не проверенный носителем языка."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Автоматический перевод данной английской страницы, не проверенный носителем языка.*

**LESSON.md** — это открытый формат блочного контента электронного обучения: файл Markdown с YAML-метаданными и директивами `:::` для текста, изображений и проверочных заданий, читаемый человеком и разбираемый любым инструментом. Он существует потому, что контент курса обычно оказывается заперт внутри одного инструмента создания курсов, и потому что [[llm|большие языковые модели]] могут помогать с уроками только тогда, когда они действительно могут их прочитать.

## Что с ним можно делать

Написать урок в любом текстовом редакторе и импортировать его в любой инструмент, поддерживающий формат, без копирования-вставки и переформатирования. Интерактивные элементы — проверочные задания с выбором варианта, ограничением числа попыток и обратной связью на уровне ответа — выражаются простыми свойствами, а не элементами графического интерфейса. Сопутствующий файл `ASSESSMENT.md` в корне набора превращается в оцениваемую часть курса [[assessment]]. Проект также поставляет навык `lesson-md`, который обучает формату Claude, Codex или другой [[agentic-ai|агент]], так что описание курса на обычном языке возвращает уроки, задания для оценивания и полный набор.

## Для кого он предназначен

Для дизайнеров обучения и создателей курсов, которые хотят, чтобы их контент пережил смену инструмента, для поставщиков электронного обучения, которым нужен формат импорта и экспорта, понятный их пользователям, и для всех, кто строит авторство с помощью ИИ поверх читаемого формата. Среди участников — Дэн Башо из LXD Integral; формат имеет публичный журнал изменений вплоть до версии v1.8.

## Связанные концепции
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
