---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Отворен набор от единадесет умения за Claude Code, които одитират курс спрямо доказателствената база на дизайна на обучение и маркират всяка препоръка с нивото на доказателството си."
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика.*

**idstack** е колекция с отворен код от единадесет умения за основан на доказателства [[learning-design|дизайн на обучение]], разпространявана като плъгин за Claude Code с придружаващо разширение за страничен панел в Chrome. Вместо да създава курс, уменията одитират такъв: класифицират целите по ревизираната таксономия на Блум, проверяват конструктивното съответствие между цели, дейности и оценяване, отбелязват проблеми с когнитивното натоварване и преглеждат достъпността срещу WCAG 2.1 AA и Универсалния дизайн за учене. Всяка препоръка носи ниво на доказателство — от T1 за метаанализи и рандомизирани изпитвания до T5 за експертно мнение. Проектът заявява, че цитатите му черпят от 108 рецензирани изследвания в единадесет изследователски области; този брой е собствено твърдение на проекта, а библиографията му е публикувана в Markdown, така че рецензентът да я провери.

Курсовете влизат през връзка с API на Canvas, файл IMS Common Cartridge, пакет SCORM, PDF експорт от инструмент за авторство или поставени документи. Споделен манифест на проекта помни курса между сесиите, а умение за поточна обработка свързва етапите на дизайна и пропуска завършената работа. Прегледите се отчитат срещу осемте стандарта Quality Matters и рамката Community of Inquiry, разделяйки преподавателско, социално и когнитивно присъствие, после подреждат препоръките по тежест.

## Какво да знаете, преди да го възприемете

Плъгинът изисква Claude Code и bash обвивка за инсталиране; PowerShell и cmd не могат да изпълнят скрипта за настройка, а Python 3 се препоръчва за тенденциите в оценките. Данните за курса остават в папката на проекта на машината на читателя и я напускат само чрез интеграция, която потребителят извика, например заявка към API на Canvas. Живият извод на разширението за Chrome изисква собствения безплатен ключ за API на Google AI Studio на читателя, макар режим за симулация да го демонстрира и без него. Проектът се обозначава като бета, версия 3.5.1.0, и предупреждава за промени, които чупят съвместимостта между минорните версии, а е публикуван под GitHub акаунта savvides, а не от посочен автор.

## Свързани понятия
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
