---
title: "LiaScript"
created: "2026-09-27T02:33:52-04:00"
updated: "2026-09-27T02:33:52-04:00"
type: resource
summary: "Un dialecto abierto de Markdown que convierte un archivo de texto plano en un curso interactivo en el navegador, con cuestionarios y código ejecutable, además de un agente de enseñanza multiagente para crear cursos con él."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
source_updated: "2026-09-24T04:57:47-04:00"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**LiaScript** es un dialecto de Markdown extendido junto con un intérprete para él. Un único archivo de texto plano se convierte en un curso interactivo: el mismo documento puede leerse como una narración, reproducirse como diapositivas o recorrerse como un curso, todo ello en el navegador. No hay que instalar nada para escribir ni para leer uno.

## Qué puede hacer con ella
Los cuestionarios adoptan las formas que espera el profesorado, incluidas la elección múltiple, las preguntas matriciales, la entrada de texto, los menús desplegables y los textos con huecos, escritos directamente en Markdown. Los bloques de código pueden hacerse editables y ejecutables para tutoriales de programación, y un sistema de macros envuelve bibliotecas de JavaScript en bloques reutilizables, de modo que los diagramas interactivos no exigen código a cada autor. Un curso se aloja donde quien lo crea ya guarda texto, sin un servicio al que quedar atado, y todo se ejecuta en el lado del cliente, así que un curso cargado funciona sin conexión. El exportador de LiaScript empaqueta un curso como SCORM para Moodle, ILIAS y otros sistemas de gestión del aprendizaje.

## El agente de enseñanza para crear cursos
El proyecto también publica un **[agente de enseñanza](https://github.com/LiaScript/teaching-agent)** para crear cursos de LiaScript, con licencia Boost Software License 1.0. Cuatro agentes para la docencia, el diseño visual, la revisión por parte de quien aprende y la publicación trabajan en torno a un único archivo de proyecto que contiene el estado del curso, con un flujo de trabajo que define primero: los objetivos, el público y la didáctica se fijan antes de escribir cualquier material, y después siguen las puertas de validación. Un borrador puede revisarse desde la perspectiva de una persona aprendiente concreta para comprobar la carga cognitiva y los conocimientos previos presupuestos. El agente es agnóstico respecto al editor, ya que genera configuraciones para Claude Code, Copilot, Codex, Cursor o un chat web a partir de una única especificación, y el repositorio sirve además como ejemplo trabajado, pues contiene un curso de seis unidades sobre la Directiva NIS2 de la UE y un documento que describe cómo se produjo.

## Notas
LiaScript es gratuito, sin nivel de pago ni necesidad de cuenta, y se desarrolla abiertamente bajo BSD-3-Clause, de modo que las instituciones pueden alojarlo por su cuenta y modificarlo. La función de aula en vivo merece una revisión antes de confiar en ella a escala, ya que la sincronización en tiempo real usa un servicio compartido en lugar de un renderizado puramente local. El agente de enseñanza es joven y poco adoptado, así que conviene tratarlo como un prototipo funcional y no como un producto con soporte.

## Conceptos conectados
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
