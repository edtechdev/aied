---
title: "Claw-ED"
created: "2026-09-27T02:33:57-04:00"
updated: "2026-09-27T02:33:57-04:00"
type: resource
summary: "Un asistente docente local-first que convierte su propio currículo en borradores de lecciones editables, materiales para el estudiantado y diapositivas, usando un modelo que usted elija."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
source_updated: "2026-09-23T21:05:00-04:00"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Claw-ED** es un asistente docente local-first que redacta lecciones a partir de sus propios materiales curriculares. El profesorado importa sus fuentes, pide una lección y obtiene borradores editables junto con materiales para el estudiantado y diapositivas, generados con el modelo que el propio docente elija y no con el de un único proveedor.

## Qué puede hacer con ella

El flujo de trabajo va de la importación al borrador, la revisión y la exportación, y los borradores se tratan como puntos de partida que el profesorado edita, y no como materiales listos para repartir. Las tareas de lección se ponen en cola y son recuperables, de modo que una generación larga que falla puede reanudarse en lugar de reiniciarse, y los artefactos generados pueden descargarse. También expone sus herramientas a un agente mediante un servidor MCP y puede conectarse a Google Drive, así que un centro puede integrarlo en su almacenamiento y su planificación ya existentes.

El proyecto es deliberadamente agnóstico respecto al modelo. Documenta en paralelo modelos locales de Ollama, rutas económicas de OpenRouter y opciones alojadas, y su guía de modelos está fechada, lo que deja claro que las recomendaciones son puntos de partida basados en catálogos y no juicios de calidad puntuados por el profesorado.

## Notas

El software es gratuito y de código abierto bajo la licencia MIT para su código original, aunque los componentes de terceros conservan sus propios términos, y ejecutarlo implica pagar su propia inferencia de modelo si usa un modelo alojado. El proyecto se etiqueta a sí mismo como una beta revisada por docentes y dice sin rodeos en su README que superar su CI no demuestra calidad docente con modelos en producción, que es la forma correcta de leer un conjunto de pruebas en verde en este ámbito: verifica el software, no la pedagogía. Lo mantiene MacxLabs y acepta lecciones de muestra revisadas por docentes como contribuciones.

## Conceptos conectados
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]