---
title: "DeepTutor"
created: "2026-10-13T20:34:00-04:00"
type: resource
summary: "Открытый релиз рамки агентного тьюторства DeepTutor: одно рабочее пространство для тьюторства, генерации вопросов, практики на овладение материалом, исследований и визуализации, с прозрачной памятью учащегося."
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
translation_note: "Автоматический перевод данной английской страницы, не проверенный носителем языка."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---
*Автоматический перевод данной английской страницы, не проверенный носителем языка.*

**DeepTutor** — открытая реализация рамки тьюторства, оценённой в [[intelligent-tutoring|исследовании DeepTutor]], и она выросла далеко за рамки той статьи, превратившись в общее агентное рабочее пространство для обучения. Тьюторство, решение задач, генерация тестов, практика на овладение материалом, исследование и визуализация используют общую среду выполнения и общий контекст сессии, поэтому профиль учащегося, построенный во время решения задач, обуславливает объяснения и практические задания, которые следуют за ними.

## Что можно с ним делать

Десять режимов — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading и Immersive Watching — работают на одной среде выполнения, опираясь на переиспользуемые базы знаний, книги, черновики, блокноты, банки вопросов и персоны. Поиск намеренно многодвижковый: версионированные библиотеки RAG на LlamaIndex, PageIndex, GraphRAG, LightRAG или удалённый сервер LightRAG, плюс самостоятельно размещённая база WeKnora, библиотека Tencent IMA или MarginNote, или связанное хранилище Obsidian. Память прозрачна, а не непроницаема: следы L1, сводки поверхности L2 и синтез L3 видимы и редактируемы, а Граф памяти (Memory Graph) связывает каждую сводку с доказательствами, лежащими в её основе. Бинарный файл `deeptutor` даёт терминальный REPL и передаёт поток NDJSON для любого агента, который хочет управлять им как инструментом, а сообщество EduHub распространяет устанавливаемые навыки.

## Для кого это

Для преподавателей и исследователей в высшем образовании, которые хотят развёртываемую версию рамки, описанной в статье, для разработчиков, строящих на основе подключаемой среды выполнения, и для самостоятельных учащихся, готовых запускать собственный экземпляр. Документация находится по адресу deeptutor.info.

## Примечания

Лицензия Apache 2.0, версия 1.6.9 на сентябрь 2026 года, примерно 40 000 звёзд на GitHub. Опубликованная оценка, лежащая в его основе, — в среднем на 10,8% лучше по персонализированным метрикам по сравнению с сильными базовыми моделями и на 29,4% сильнее по общему агентному рассуждению на пяти базовых моделях на бенчмарке TutorBench — обобщена на [[deeptutor|странице статьи]], чьи ограничения действуют и здесь. Как и в случае любого стека ИИ с открытым кодом, вы сами предоставляете ключи провайдеров моделей, а развёртывание настольного или серверного варианта ожидает наличия Python 3.11 и Node.

## Связанные концепции
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
