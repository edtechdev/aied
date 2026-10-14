---
title: "DeepTutor"
created: "2026-10-13T21:50:00-04:00"
type: resource
summary: "Випуск рамки агентного тьюторства DeepTutor з відкритим кодом: одне робоче простір для тьюторства, генерації запитань, практики на оволодіння матеріалом, досліджень і візуалізації, із прозорою для перегляду пам’яттю здобувача."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
reviewed_by: [editor]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---
*Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови.*

**DeepTutor** — реалізація з відкритим кодом рамки тьюторства, оціненої в [[intelligent-tutoring|дослідженні DeepTutor]], і вона значно виросла за межі охоплення тієї статті, перетворившись на загальне робоче навчальне простори, орієнтоване на агентів. Тьюторство, розв’язування задач, генерація тестів, практика на оволодіння матеріалом, дослідження й візуалізація спільно використовують одне середовище виконання можливостей і один контекст сесії, тому профіль здобувача, побудований під час розв’язування задач, обумовлює пояснення та практичні завдання, що за ними ідуть.

## Що з ним можна робити

Десять режимів — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading і Immersive Watching — працюють на тому ж середовищі виконання, спираючись на багаторазові бази знань, книги, чернетки, блокноти, банки запитань і персони. Пошук свідомо є багатодвижковим: версійовані бібліотеки RAG на LlamaIndex, PageIndex, GraphRAG, LightRAG або віддалений сервер LightRAG, плюс самостійно розміщена база WeKnora, бібліотека Tencent IMA або MarginNote, чи пов’язане сховище Obsidian. Пам’ять доступна для перегляду, а не непрозора: сліди L1, поверхневі підсумки L2 і синтез L3 є видимими та редагованими, а Memory Graph пов’язує кожен підсумок із доказами, що стоять за ним. Виконуваний файл `deeptutor` надає термінальний REPL і передає потік NDJSON для будь-якого агента, який хоче керувати ним як інструментом, а спільнота EduHub розповсюджує встановлювані навики.

## Для кого він

Викладачі вищої освіти та дослідники, які хочуть розгортальну версію рамки, про яку повідомляє стаття; розробники, які будують на базі розширюваного середовища виконання; і здобувачі з самокеруванням, готові запускати власний екземпляр. Документація розміщена на deeptutor.info.

## Зауваження

Ліцензія Apache 2.0, версія 1.6.9 станом на вересень 2026 року, приблизно 40 000 зірок на GitHub. Опубліковане оцінювання, що стоїть за ним — покращення на 10,8% у середньому за персоналізованими метриками порівняно з сильними базовими рівнями та на 29,4% сильніше загальне агентне міркування на п’яти основних моделях на бенчмарку TutorBench — узагальнено на [[deeptutor|сторінці статті]], обмеження якої поширюються і тут. Як і в разі будь-якого стека ШІ з відкритим кодом, ключі до постачальників моделей ви надаєте самі, а розгортання на комп’ютері чи сервері очікує Python 3.11 і Node.

## Пов’язані поняття

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
