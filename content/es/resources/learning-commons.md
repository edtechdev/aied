---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-05T16:05:16-05:00"
type: resource
summary: "Infraestructura de IA abierta de la iniciativa educativa de Mark Zuckerberg y Priscilla Chan: un grafo de conocimiento de estándares, currículos y datos de la ciencia del aprendizaje, evaluadores para juzgar la salida de los LLM y agent skills agnósticas del modelo para los flujos de trabajo docentes."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Learning Commons** publica tres herramientas abiertas para incorporar funciones de IA sobre contenido curricular real —un **[[knowledge-graph|grafo de conocimiento]]** de estándares académicos, currículos e investigación en ciencia del aprendizaje, una biblioteca de **Evaluators** para juzgar texto generado y **[[agentic-ai|Agent Skills]]** agnósticas del modelo para flujos de trabajo docentes habituales— y gestiona una plataforma que añade Curriculum Sync para cargar currículos en un [[edtech-platform|sistema de gestión del aprendizaje]].

## Qué se puede hacer con ello

**Alinee el contenido generado con un estándar.** El Knowledge Graph modela estándares, [[curriculum-design|currículos]] e investigación como entidades y relaciones bajo un esquema compartido. Un producto puede consultar el estándar al que debería apuntar un ítem, recorrer relaciones de prerrequisito o fundamentar el contenido de un tutor en el currículo que se supone que enseña, sin construir ni mantener su propia canalización de datos.

**Puntúe la salida generada antes de que el estudiantado la vea.** Los **Evaluators** miden atributos de la [[llm|salida de un LLM]] —complejidad del texto, [[feedback]], alineación con estándares y habilidades duraderas— y se distribuyen como SDK de Python y TypeScript en npm y PyPI. En la práctica funcionan como una comprobación de regresión cuando cambia un prompt o un modelo, como una comparación entre modelos candidatos o como un filtro sobre ítems y explicaciones generados.

**Empaquete un flujo de trabajo docente.** **Agent Skills** agrupa instrucciones, referencias y barandillas en un formato abierto y agnóstico del modelo: una comprobación de comprensión, diferenciación de lecciones por niveles, un plan de lección alineado con estándares y preparación de clases. Pueden incorporarse a un marco de agentes o leerse como plantillas resueltas sobre cuánta estructura necesita un flujo de trabajo de aula fiable.

**Lleve un currículo a un sistema de gestión del aprendizaje.** Curriculum Sync es el paso de plataforma que convierte un mapa de estándares en algo que un curso puede usar realmente en el LMS.

## Para quién es

Desarrolladores que incorporan funciones de IA a productos de currículo y [[assessment|evaluación]], y los equipos de currículo o de estándares que aportan los datos con los que esos productos se alinean. El [[teacher-role|profesorado]] puede usar las Agent Skills por su cuenta, pero el propio encuadre del repositorio es el de infraestructura para quienes publican herramientas.

## Notas y advertencias

Que el [[open-source|código]] sea abierto no vuelve abiertos los datos. El código del Knowledge Graph y de los Evaluators es MIT y el de Agent Skills es Apache-2.0, mientras que cada conjunto de datos lleva su propia etiqueta de acceso —Open, Open + Gated o Gated— y el contenido Gated no está cubierto por las licencias abiertas que cita el repositorio, así que conviene consultar el catálogo de conjuntos de datos antes de dar por hecho el derecho de reutilización. El contenido de los prompts de los evaluadores es CC BY 4.0, pero los corpus anotados CLEAR y PERSUADE 2.0 que utiliza son CC BY-NC-SA 4.0. La plataforma y los conjuntos de datos que hay detrás necesitan una cuenta.

## Conceptos conectados

- [[curriculum-design]] — el grafo existe para alinear el contenido generado con estándares y currículos
- [[open-source]] — código MIT y Apache-2.0 con licencias de datos por conjunto
- [[educational-nlp]] — los evaluadores son una capa de medición de texto sobre la salida de un LLM
- [[agentic-ai]] — skills que empaquetan un flujo de trabajo para que un modelo lo ejecute
- [[edtech-platform]] — Curriculum Sync carga currículos en un sistema de gestión del aprendizaje
- [[llm]] — el objetivo de la evaluación y el consumidor de las skills
