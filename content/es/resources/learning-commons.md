---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Learning Commons** es la iniciativa educativa de Mark Zuckerberg y Priscilla Chan, lanzada en 2025 para llevar el trabajo de ciencia del aprendizaje de la Chan Zuckerberg Initiative a la infraestructura sobre la que realmente se construyen los productos edtech. Su argumento es infraestructural más que pedagógico: la investigación existe, los estándares académicos existen y los currículos de calidad existen, pero están en sistemas separados, así que los desarrolladores construyen sobre lo que resulta más fácil de alcanzar. La organización publica tres herramientas abiertas en GitHub — un Knowledge Graph, un conjunto de Evaluators y [[agentic-ai|Agent Skills]] — y opera una plataforma que añade Curriculum Sync para cargar currículos en un [[edtech-platform|sistema de gestión del aprendizaje]].

## Qué se puede hacer con ello

El **Knowledge Graph** modela los estándares académicos, los currículos y la investigación en ciencia del aprendizaje como entidades y relaciones bajo un esquema compartido, de modo que una herramienta puede alinear el contenido generado con un estándar sin construir su propia canalización de datos. Los **Evaluators** miden atributos de la [[llm|salida de un LLM]] con la lente de la ciencia del aprendizaje — complejidad del texto, [[feedback]], alineación con estándares académicos y habilidades duraderas — y se distribuyen con SDK de Python y TypeScript, publicados en npm y PyPI, para puntuar contenido generado o comparar modelos candidatos. **Agent Skills** empaqueta instrucciones, referencias y barandillas para flujos de trabajo docentes habituales en un formato abierto y agnóstico del modelo: una comprobación de comprensión, diferenciación de lecciones por niveles, planes de lección alineados con estándares y preparación de clases. En la práctica, el grafo hace creíbles a las otras dos: la alineación de contenidos es la afirmación, y el grafo es la referencia contra la que se comprueba.

## Para quién es

Desarrolladores que incorporan funciones de IA a productos de [[curriculum-design|diseño curricular]] y evaluación, y los equipos de currículo o de estándares que aportan los datos con los que esos productos se alinean. El profesorado puede usar las agent skills por su cuenta, pero el propio encuadre del repositorio es el de infraestructura para quienes publican herramientas.

## Notas y advertencias

Que el [[open-source|código]] sea abierto no vuelve abiertos los datos. El código del Knowledge Graph es MIT, mientras que cada conjunto de datos lleva su propia etiqueta de acceso — Open, Open + Gated o Gated — y el contenido Gated no está cubierto explícitamente por las licencias abiertas que cita el repositorio, así que conviene consultar el catálogo antes de dar por hecho el derecho de reutilización. El código de los evaluadores es MIT y el contenido de sus prompts CC BY 4.0, pero los corpus anotados CLEAR y PERSUADE 2.0 que utiliza son CC BY-NC-SA 4.0. La plataforma y los conjuntos de datos que hay detrás necesitan una cuenta. Actividad de los repositorios al 2026-11-04: 167 estrellas para el Knowledge Graph, 88 para Evaluators, 41 para Agent Skills. La iniciativa está financiada por CZI, y su planteamiento del problema es el del propio financiador.

## Conceptos conectados

- [[curriculum-design]] — el grafo existe para alinear el contenido generado con estándares y currículos
- [[open-source]] — código MIT y Apache-2.0 con licencias de datos por conjunto
- [[educational-nlp]] — los evaluadores son una capa de medición de texto sobre la salida de un LLM
- [[agentic-ai]] — skills que empaquetan un flujo de trabajo para que un modelo lo ejecute
- [[edtech-platform]] — Curriculum Sync carga currículos en un sistema de gestión del aprendizaje
- [[llm]] — el objetivo de la evaluación y el consumidor de las skills
