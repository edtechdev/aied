---
title: "idstack"
created: "2026-10-13T21:10:00-04:00"
type: resource
summary: "An open-source set of eleven Claude Code skills that audit a course against the instructional-design evidence base, tagging every recommendation with its evidence tier."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Автоматический перевод данной английской страницы, не проверенный носителем языка."
---

*Автоматический перевод данной английской страницы, не проверенный носителем языка.*

**idstack** — это открытая коллекция из одиннадцати навыков для основанного на доказательствах [[learning-design|инструкционального дизайна]], распространяемая как плагин Claude Code с сопутствующим расширением-боковой панелью для Chrome. Вместо того чтобы создавать курс, эти навыки проводят его аудит: они классифицируют цели по пересмотренной таксономии Блума, проверяют конструктивную согласованность между целями, активностями и оцениванием, выявляют проблемы когнитивной нагрузки и анализируют доступность в соответствии с WCAG 2.1 AA и Universal Design for Learning. Каждая рекомендация снабжена уровнем доказательности — от T1 для метаанализов и рандомизированных испытаний до T5 для экспертного мнения. Проект утверждает, что его цитаты опираются на 108 рецензированных исследований из одиннадцати исследовательских областей; это число является собственным заявлением проекта, а его библиография опубликована в Markdown, чтобы рецензент мог её проверить.

Курсы поступают через подключение к Canvas API, файл IMS Common Cartridge, пакет SCORM, экспорт в PDF из инструмента создания курсов или вставленные документы. Общий манифест проекта сохраняет курс между сессиями, а навык-конвейер связывает этапы проектирования, пропуская уже завершённую работу. Отчёты по проверке составляются по восьми стандартам Quality Matters и рамках Community of Inquiry с разделением преподавательского, социального и когнитивного присутствия, после чего рекомендации ранжируются по степени серьёзности.

## Что нужно знать перед внедрением

Для установки плагина требуются Claude Code и оболочка bash; PowerShell и cmd не могут запустить скрипт установки, а Python 3 рекомендуется для отслеживания динамики оценок. Данные курса остаются в папке проекта на собственном компьютере пользователя и покидают её только через интеграцию, которую он сам инициирует, например через вызов Canvas API. Для инференса в режиме реального времени в расширении Chrome необходим собственный бесплатный ключ API Google AI Studio пользователя, хотя режим симуляции демонстрирует работу и без него. Проект называет себя бета-версией 3.5.1.0 и предупреждает о ломающих изменениях между минорными версиями, а публикуется он в аккаунте savvides на GitHub, а не конкретно названным автором.

## Связанные концепции
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
