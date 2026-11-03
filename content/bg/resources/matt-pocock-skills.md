---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Отворената колекция на Мат Покок от малки, композируеми агентни умения, включително умение за преподаване в няколко сесии, умение за безжалостно разпитване и насоки за писане на документи за агенти."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Автоматичен машинен превод на тази английска страница, който още не е проверен от носител на езика.*

**Skills for Real Engineers** е публикуваният от Мат Покок указател с агентни умения: малки, композируеми файлове с инструкции, които се инсталират в Claude Code, Codex или друг агент и са написани така, че да бъдат адаптирани, а не приети наготово. По-голямата част от колекцията служи за софтуерна работа, но няколко умения са образователни инструменти, създадени за преподаване и разпитване, а не за код.

Най-ясният пример е `teach`, който работи в няколко сесии и третира работната директория като работно пространство за преподаване със състояние, така че напредъкът и отворените въпроси на учащия остават между разговорите, вместо да започват отначало всеки път. `grill-me` и лежащият под него примитив `grilling` разпитват потребителя безмилостно за даден план, докато всеки клон бъде решен — [[socratic-method|сократичното разпитване]] като процедура за преизползване, а не като разговорно настроение. `wait-what` реагира в момента, в който съобщение не стигне до целта, като го представя наново с прости думи и липсващия контекст — ход, който всеки преподавател познава от наблюдението как едно обяснение се проваля от първия път. `writing-for-agents` покрива как да се пишат документи, които [[prompt-engineering|агент]] може да следва, което днес е практическата форма на писане на инструкции за учебен материал, създаден от [[pedagogical-agent|AI]]. `to-questionnaire` превръща решение във въпросник за този, който може да отговори; `handoff` сгъстява разговор в документ, от който друг агент може да продължи; а `wizard` генерира интерактивно преминаване за стъпки, които само човек може да изпълни.

## Какво да знаете, преди да го възприемете

Всичко е [[open-source|с отворен код]] под MIT и безплатно за вземане като отправна точка за местна [[ai-literacy|AI грамотност]] или [[self-directed-learning|самостоятелно учене]]. Приемането е голямо и бързо движещо се: около 270 000 звезди и 23 000 разклонения при проверка през септември 2026 г., с най-скорошен комит на 18 септември 2026 г. Уговорката е обхватът. Уменията предполагат работния контекст на [[human-ai-collaboration|инженер]], организирани са в кофи „инженерство“, „продуктивност“, „отпаднали“ и „в процес на работа“, така че някои записи са изрично незавършени или оттеглени, а README служи и като абонамент за бюлетин. Третирайте преподавателските и разпитващите умения като преносимата част и очаквайте да пренапишете всяко от тях, преди да го поставите пред студенти.

## Свързани понятия
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
