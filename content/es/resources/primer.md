---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Un sistema de autoría de código abierto de Generative AI Labs de Wharton que convierte una entrevista estructurada con un docente en una simulación de aprendizaje ejecutable y adaptativa, con sus propios agentes mentor, de práctica y de retroalimentación."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Primer es un [[open-source|sistema de código abierto]] para construir una [[simulation|simulación]] educativa describiendo una lección a una IA en lugar de programarla. El criterio del docente determina qué enseña la simulación: una entrevista extrae lo que el profesorado sabe de la lección y del estudiantado, un documento de diseño hace revisable ese conocimiento y nada se construye hasta que el docente lo aprueba.

## Qué puede hacer con él

La entrevista avanza una pregunta a la vez: la lección, el nivel y los conocimientos previos del estudiantado, los errores de concepto habituales, el enfoque del docente y cómo se evaluará el éxito. El profesorado puede hablar o escribir, y subir programas, planes de clase o rúbricas. Lo que vuelve es un documento de diseño que cubre objetivos, flujo del escenario, personajes, lo que está en juego y lógica de adaptación, que el docente revisa y aprueba como aprobaría un plan de clase. Después lo construyen cinco agentes: Intake, Design, Casting Director, Image Generation y Experience Builder, que ensambla el resultado para un estudiante o para una clase entera.

En tiempo de ejecución, tres agentes se enfrentan al estudiantado. Un mentor activa los conocimientos previos y saca a la luz los errores de concepto. Un agente de práctica hace de contraparte en un juego de rol o de alumno en un teachback, donde el estudiante explica un concepto y revisa la explicación cuando se le pregunta. Un agente de retroalimentación trabaja desde la transcripción, comentando momentos concretos y cómo lo aprendido va más allá del escenario. Cada agente tiene un personaje dentro del mundo y una capa instructiva que sigue objetivos y reúne pruebas, y el docente recibe informes individuales y agregados.

## Para quién es

El profesorado, los diseñadores instruccionales y los responsables de desarrollo docente pueden describir una lección con detalle sin querer escribir código para ella. Quien investiga el diseño con el docente en el bucle o los [[agentic-ai|flujos de trabajo multiagente]] obtiene un sistema funcional que inspeccionar, y los desarrolladores pueden ampliarlo, porque los prompts, las plantillas, las listas de verificación, los patrones de orquestación y el código TypeScript son todos de código abierto.

## Notas y advertencias

Los autores presentan Primer como un prototipo experimental y no como un producto de aula validado. No se ha evaluado como intervención de aprendizaje en aulas, y nadie lo ha revisado conforme a FERPA, COPPA, las leyes estatales de privacidad del estudiantado o la política de un distrito, así que la institución que lo use con estudiantado asume esa revisión. El software tiene licencia MIT y es gratuito, pero ejecutar una simulación requiere acceso a un modelo, que cuesta dinero. Como es independiente del modelo y funciona con modelos locales o de pesos abiertos, puede desplegarse donde las reglas de privacidad son más estrictas. En la página del proyecto se enlaza un libro blanco sobre la arquitectura y los prompts. El repositorio tenía 98 estrellas y 16 forks cuando se comprobó en noviembre de 2026.

## Conceptos conectados

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
