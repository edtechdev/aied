---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Una aplicación de escritorio gratuita y de código abierto (AGPL-3.0) en la que agentes de IA miden lo que el estudiante ya comprende, planifican un mapa de dependencias hasta el objetivo, enseñan un paso de razonamiento cada vez y adaptan la práctica, con un grafo de conocimiento persistente de proposiciones y cadenas de razonamiento que las sesiones posteriores leen en lugar de empezar de cero."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
source_updated: "2026-11-02T07:40:00-05:00"
translation_of: resources/learnharness
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**LearnHarness** es una aplicación de escritorio para el aprendizaje [[agentic-ai|asistido por agentes]] que organiza una lección en torno a [[prior-knowledge|lo que el estudiante ya comprende]] y no en torno a una lista de temas. El proyecto describe cuatro movimientos: **medir**, sondear las ideas de las que depende el objetivo para encontrar dónde termina la comprensión; **planificar**, derivar un mapa de dependencias hasta el objetivo y mostrarlo como un mapa de la lección; **enseñar**, avanzar un paso de razonamiento cada vez mediante un ritmo de predecir–explicar–comprobar, de modo que las confusiones se reparen antes de construir nada sobre ellas; y **practicar**, un flujo de problemas dirigidos a las dificultades propias del estudiante.

## Qué se puede hacer con él

La entrada distintiva es el campo de pensamiento: el estudiantado escribe o dicta su razonamiento y su incertidumbre en lugar de limitarse a responder, algo que el proyecto trata como la manera en que el agente se figura el razonamiento y no como un registro de aciertos y errores. También puede investigar preguntas en segundo plano, generar explicaciones visuales y construir demostraciones interactivas.

Lo que se acumula es un [[knowledge-graph|grafo de conocimiento]] de proposiciones y cadenas de razonamiento, vinculado a sus sesiones de origen y leído por los agentes de enseñanza y práctica posteriores como contexto; se pueden importar notas. El proyecto afirma que el grafo almacena ideas y conexiones, no valoraciones de la capacidad.

## Para quién es

Estudiantes independientes que trabajan con material difícil, y docentes o desarrolladores que quieren ver cómo es un [[intelligent-tutoring|tutor de IA]] nativo de agentes cuando sus prompts y su estado son inspeccionables. Está escrito en TypeScript, se ejecuta desde el código fuente y sus pruebas se documentan como deterministas, sin llamadas a modelos.

## Notas y advertencias

Gratuito cubre el software, no la inferencia: el estudiantado aporta sus claves de proveedor, una suscripción, una CLI local de Claude Code o cualquier endpoint compatible con OpenAI, y paga al proveedor sin recargo; un medidor en vivo estima solo los costes de API conocidos. Los registros, los chats y las claves permanecen en la máquina como archivos de texto plano, pero el proyecto advierte que el almacenamiento local no significa procesamiento sin conexión, ya que las solicitudes a los modelos, el dictado opcional y la investigación web llegan a servicios externos. El instalador para Windows x64 no está firmado, así que Windows mostrará una advertencia. No se informa de ningún estudio de eficacia, por lo que el caso se apoya en la justificación declarada y no en resultados medidos; el repositorio tenía unas 4.800 estrellas cuando se comprobó el 2 de noviembre de 2026.

## Conceptos conectados

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
