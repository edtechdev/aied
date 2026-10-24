---
title: "LESSON.md"
created: "2026-10-13T21:46:00-04:00"
type: resource
summary: "Відкритий формат простого тексту для блокових уроків електронного навчання, а також навичка агента, яка пише уроки, завдання оцінювання та цілі набори курсів у цьому форматі."
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
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови.*

**LESSON.md** — відкритий формат блокового контенту для електронного навчання: файл Markdown із YAML-заголовком і директивами `:::` для тексту, зображень і перевірок знань, який може прочитати людина і який може розібрати будь-який інструмент. Він існує тому, що контент курсу зазвичай замкнений усередині одного інструмента авторствування, і тому що [[llm|великі мовні моделі]] можуть допомагати з уроками лише тоді, коли можуть їх фактично прочитати.

## Що з цим можна робити

Напишіть урок у будь-якому текстовому редакторі та імпортуйте його в будь-який інструмент, що підтримує формат, без копіювання та переформатування. Інтерактивні елементи — перевірки знань із вибором кількох варіантів відповіді, обмеженням кількості спроб і зворотним зв’язком на рівні відповідей — виражаються простими властивостями, а не графічним інтерфейсом. Супутній файл `ASSESSMENT.md` у корені набору стає оцінюваною частиною курсу — [[assessment]]. Проєкт також постачає навичку `lesson-md`, яка вчить Claude, Codex або інший [[agentic-ai|агент]] цьому формату, тож опис курсу простою мовою повертає уроки, завдання оцінювання та повний набір.

## Для кого це

Дизайнери навчання та автори курсів, які хочуть, щоб їхній контент пережив зміну інструмента; постачальники електронного навчання, яким потрібен формат імпорту та експорту, зрозумілий уже їхнім користувачам; і всі, хто будує авторствування з підтримкою ШІ на основі придатного для читання формату. Серед учасників — Dan Bashaw із LXD Integral, а формат має публічний журнал змін аж до версії v1.8.

## Пов’язані поняття

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]

