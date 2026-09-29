---
title: Investigación sobre usabilidad
created: "2026-09-28T19:11:16-04:00"
updated: "2026-09-28T19:11:16-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
translation_of: concepts/usability-research
source_updated: "2026-09-14T06:35:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La investigación sobre usabilidad** — el estudio empírico de cómo las personas usuarias interactúan con un sistema de software, y de su usabilidad, utilidad y experiencia de usuario (UX). Tomada de la interacción persona-ordenador (HCI), la investigación sobre usabilidad evalúa si una herramienta educativa de IA es usable, aprendible, eficiente y satisfactoria, las cualidades que determinan si el estudiantado la adopta y se beneficia de ella de verdad. Es distinta de, pero complementaria a, la [[qualitative-research|indagación cualitativa]] sobre los fenómenos de aprendizaje y la [[quantitative-research|eficacia cuantitativa]]: la investigación sobre usabilidad se centra en la *interacción entre la persona y el sistema*, y no en los resultados de aprendizaje en sí.

## Preguntas para reflexionar

- ¿Recuerda alguna herramienta de software —educativa o no— que fuera pedagógicamente sólida o realmente potente, pero que dejó de usar porque era confusa o frustrante? Ese fallo es exactamente lo que la investigación sobre usabilidad intenta explicar antes de que cueste aprendizaje.
- Un supuesto habitual es que la eficacia educativa de una herramienta puede juzgarse por si mejoran las ganancias de aprendizaje. Pero la página sostiene que una herramienta puede ser inusable y aun así parecer que «funciona» en un ensayo, o ser usable y no conseguir enseñar. ¿Por qué podría un estudio que muestra ganancias de aprendizaje pasar por alto que la herramienta es un fastidio de usar en la práctica?
- Antes de leer los métodos, ¿cómo averiguaría si un tutor de IA resulta confuso, frustrante o propenso a errores para el estudiantado? ¿Qué haría u observaría realmente, y qué se perdería el propio informe de satisfacción de una persona usuaria que una observación cuidadosa sí captaría?
- El pensamiento en voz alta es un método central: las personas usuarias verbalizan sus pensamientos mientras trabajan, exponiendo confusiones y modelos mentales en tiempo real. Si usted fuera una persona que aprende usando una herramienta de IA, ¿qué podría articular sobre su confusión que una simple encuesta de «¿te gustó?» nunca capturaría?
- La página señala que la satisfacción autoinformada puede divergir del rendimiento objetivo: la gente puede decir que adora una herramienta que en secreto la frena, o infravalorar una que de verdad ayuda. ¿Dónde ha visto esa brecha entre lo que la gente dice y lo que muestra su conducta?
- La investigación sobre usabilidad le dice si una herramienta es usable, no si enseña. Si está evaluando una herramienta de aprendizaje con IA, ¿cómo combinaría la evidencia de usabilidad con la evidencia de aprendizaje, y qué podría seguir sin lograr una herramienta que supere ambas?

## Introducción

La investigación sobre usabilidad y UX responde a preguntas como: ¿puede el estudiantado averiguar cómo usar este tutor de IA? ¿La herramienta de IA es confusa, frustrante o propensa a errores? ¿Encaja en el flujo de trabajo del profesorado o del estudiantado? Estas preguntas son un requisito previo para —y a veces la causa oculta de— las [[learning-gains|ganancias de aprendizaje]] (o su ausencia) medidas en los estudios de eficacia. Una herramienta de IA pedagógicamente sólida pero inusable fracasará en la práctica; la evidencia de usabilidad explica por qué.

## Métodos centrales

- **Protocolos de pensamiento en voz alta.** Las personas usuarias verbalizan sus pensamientos mientras realizan tareas, revelando comprensión, confusión y modelos mentales en tiempo real. [[code-anchor-multi-view-visualization|Un estudio de visualizaciones de código con múltiples vistas]] y [[learn-framework-responsible-genai-pbl-2026|el marco LEARN]] usan el pensamiento en voz alta para entender cómo el estudiantado da sentido a las herramientas asistidas por IA; [[feedback-futures-genai|el futuro de la retroalimentación]] examina cómo procesa el estudiantado la retroalimentación generada por IA.
- **Estudios con usuarios.** Las evaluaciones estructuradas basadas en tareas miden la eficiencia, las tasas de error, la satisfacción y la finalización. [[rhaimi-productivemath-2025|ProductiveMath]] evalúa la usabilidad de una aplicación de IA generativa para apoyar la enseñanza por fallo productivo; [[supplynet-visual-exploratory-learning|SupplyNet]] realiza un estudio con usuarios de una herramienta de aprendizaje exploratorio visual; [[llm-chatbots-cs-multiple-choice|los chatbots LLM para preguntas de elección múltiple de informática]] evalúan la calidad de la interacción.
- **Entrevistas y observación.** Las entrevistas cualitativas de usabilidad y la observación capturan la experiencia, las preferencias y los puntos de dolor de las personas usuarias. [[icub-humanoid-storytelling-llm-hri-2025|Un estudio de usabilidad de un robot humanoide narrador]] usa una evaluación estructurada para preguntar si las familias dejarían que el robot interactuara con un niño; [[genai-architectural-design-studios|la IA en los talleres de diseño]] observa y entrevista al estudiantado que usa IA en trabajo de diseño auténtico.
- **Evaluación sistemática de la usabilidad.** La evaluación heurística, el recorrido cognitivo y las medidas de UX basadas en cuestionarios (por ejemplo, SUS) evalúan la usabilidad de forma sistemática frente a criterios establecidos.

## Cómo aparece la investigación sobre usabilidad en la base de conocimiento

- **Evaluación de herramientas de aprendizaje con IA.** [[rhaimi-productivemath-2025|ProductiveMath]], [[supplynet-visual-exploratory-learning|SupplyNet]] y [[anvil-ai-educational-animations|las animaciones educativas]] se evalúan en cuanto a usabilidad y UX.
- **Interacción persona-robot y [[conversational-ai|IA conversacional]].** [[icub-humanoid-storytelling-llm-hri-2025|El estudio del humanoide narrador]] es un estudio de usabilidad explícito de la interacción impulsada por [[llm|LLM]]; [[conversational-ai-agents-umbrella-review-2026|una revisión paraguas de agentes de IA conversacional]] identifica la usabilidad y la calidad de la interacción como un tema recurrente.
- **Diseño y refinamiento.** Los hallazgos de usabilidad alimentan el diseño iterativo (véase el [[design-thinking|pensamiento de diseño]] y el [[learning-design|diseño del aprendizaje]]), mejorando las herramientas antes o junto a las pruebas de eficacia.

## Relación con otras familias de investigación

La investigación sobre usabilidad comparte métodos de recogida de datos con la [[qualitative-research|investigación cualitativa]] (entrevistas, observación, pensamiento en voz alta), pero difiere en su *objetivo*: la investigación cualitativa interpreta el significado y la experiencia para construir comprensión y teoría, mientras que la investigación sobre usabilidad evalúa un artefacto frente a criterios de usabilidad y UX. También se solapa con la [[ai-ed-evaluation|evaluación de la IA en la educación]] (valorar si un sistema funciona) y con la [[educational-measurement|medición]] (cuantificar constructos de usabilidad). La base de conocimiento trata la usabilidad como una línea metodológica distinta pero conectada, relevante para la [[human-ai-collaboration|colaboración persona-IA]], la [[student-experience|experiencia del estudiantado]] y el diseño de herramientas de aprendizaje con IA eficaces. Véase [[research-methods-aied|los métodos de investigación en educación con IA]] para saber cómo encaja en el panorama metodológico más amplio.

## Fortalezas y limitaciones

- **Fortalezas:** identifica directamente las barreras de usabilidad que bloquean la adopción y el aprendizaje; produce orientaciones de diseño accionables; complementa la investigación de eficacia y la cualitativa al explicar *por qué* una herramienta funciona o falla en su uso; es relativamente rápida y barata en comparación con los experimentos grandes.
- **Limitaciones:** los hallazgos de usabilidad no establecen efectos de aprendizaje (una herramienta usable puede aun así no enseñar); las muestras pequeñas y los contextos específicos de tarea limitan la generalizabilidad; la satisfacción autoinformada puede divergir del rendimiento objetivo; y existe dependencia del personal investigador y del diseño de la tarea.

## Conceptos conectados

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## Artículos conectados

- [[icub-humanoid-storytelling-llm-hri-2025]] — Un estudio de usabilidad de un humanoide narrador impulsado por LLM
- [[rhaimi-productivemath-2025]] — ProductiveMath: usabilidad de una aplicación de IA generativa
- [[supplynet-visual-exploratory-learning]] — Estudio con usuarios de SupplyNet
- [[anvil-ai-educational-animations]] — Usabilidad de animaciones educativas generadas por IA
- [[code-anchor-multi-view-visualization]] — Estudio de pensamiento en voz alta sobre visualizaciones de código con múltiples vistas
- [[learn-framework-responsible-genai-pbl-2026]] — El marco LEARN y la evaluación por pensamiento en voz alta
- [[feedback-futures-genai]] — Cómo procesa el estudiantado la retroalimentación generada por IA
- [[llm-chatbots-cs-multiple-choice]] — Chatbots LLM para preguntas de elección múltiple de informática
- [[conversational-ai-agents-umbrella-review-2026]] — Revisión paraguas de agentes de IA conversacional
