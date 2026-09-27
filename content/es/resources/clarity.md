---
title: "Clarity"
created: "2026-09-27T03:02:13-04:00"
updated: "2026-09-27T03:02:13-04:00"
type: resource
summary: "Una Agent Skill de código abierto y un editor de navegador privado que convierten dieciocho reglas para escribir con más claridad en modos de borrador, reescritura y revisión para la prosa."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
source_updated: "2026-09-24T05:29:55-04:00"
translation_of: resources/clarity
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Clarity** combina una Agent Skill con un editor de navegador, ambos construidos en torno a dieciocho reglas para una escritura que «se gana a su lector». La habilidad se instala en agentes de programación como Claude Code y Codex con `npx skills add addyosmani/clarity`, y después funciona en tres modos: el modo de revisión critica un borrador y deja el archivo intacto, el modo de reescritura edita un borrador allí donde está, y el modo de entrevista plantea primero preguntas a quien escribe y coescribe a partir de las respuestas. La [[assessment|retroalimentación]] que recibe quien escribe apunta a la sustancia antes que al estilo. Las reglas preguntan para quién es el texto y qué sabe ya esa persona, insisten en las afirmaciones por encima de los temas y en lo concreto por encima de lo abstracto, y tratan el relleno como un problema de no saber para qué sirve el texto y no como un problema de vocabulario.

El editor de navegador se ejecuta localmente en la página y no sube ningún borrador. Informa de los indicios de la prosa escrita por máquinas, de la legibilidad y de los huecos de sustancia, lo que lo hace útil para revisar un texto que haya producido una [[generative-ai|IA generativa]] antes de que llegue a un lector. El proyecto afirma con claridad que el objetivo es una escritura que siga siendo reconociblemente de su propia persona autora y no una prosa diseñada para superar la [[ai-literacy|detección de IA]], una distinción que el profesorado reconocerá cuando fije una política sobre la [[writing-education|escritura]] asistida por IA.

## Qué saber antes de adoptarla

El repositorio publica un protocolo de evaluación, muestras de antes y después en `samples/` y archivos de referencia detrás de la habilidad, de modo que quien revisa puede inspeccionar cómo se comportan las reglas en lugar de aceptar una afirmación por confianza; la página que tiene aquí no repite ningún resultado medido. La persona autora es Addy Osmani, la licencia es MIT y el trabajo es independiente, no producto de ninguna institución. Es joven y activo: creado en agosto de 2026, 54 commits, tres versiones con la última en la versión 0.2.1 ese septiembre, y unas 250 estrellas cuando se comprobó en septiembre de 2026. Tres personas colaboradoras han incorporado cambios. Las instrucciones de la habilidad se cargan en un agente que quien lee ya ejecuta, así que aplican las advertencias habituales de la [[prompt-engineering|ingeniería de prompts]]: la calidad de la crítica depende del borrador que se le entregue.

## Conceptos conectados
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]