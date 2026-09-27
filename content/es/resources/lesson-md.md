---
title: "LESSON.md"
created: "2026-09-27T02:33:51-04:00"
updated: "2026-09-27T02:33:51-04:00"
type: resource
summary: "Un formato abierto y de texto plano para lecciones de aprendizaje en línea basadas en bloques, además de una habilidad de agente que escribe lecciones, evaluaciones y paquetes de curso completos en ese formato."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
source_updated: "2026-09-20T13:49:11-04:00"
translation_of: resources/lesson-md
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**LESSON.md** es un formato abierto para contenido de aprendizaje en línea basado en bloques: un archivo Markdown con frontmatter YAML y directivas `:::` para texto, imágenes y comprobaciones de conocimiento, legible por una persona y analizable por cualquier herramienta. Existe porque el contenido de los cursos suele quedar encerrado dentro de una única herramienta de autoría, y porque los grandes modelos de lenguaje solo pueden ayudar con las lecciones que pueden leer de verdad.

## Qué puede hacer con ella
Escriba una lección en cualquier editor de texto e impórtela en cualquier herramienta que admita el formato, sin copiar y pegar ni volver a dar formato. Las piezas interactivas (comprobaciones de conocimiento de opción múltiple con límites de intentos y retroalimentación a nivel de respuesta) se expresan como propiedades sencillas en lugar de mediante una interfaz gráfica. Un archivo `ASSESSMENT.md` complementario en la raíz de un paquete se convierte en la evaluación puntuada del curso. El proyecto incluye además una habilidad `lesson-md` que enseña el formato a Claude, Codex u otro agente: describir un curso en lenguaje natural devuelve lecciones, evaluaciones y un paquete completo.

## Para quién es
Diseñadores instruccionales y creadores de cursos que quieren que su contenido sobreviva a un cambio de herramienta, proveedores de aprendizaje en línea que quieren un formato de importación y exportación que sus usuarios ya entiendan, y cualquiera que construya autoría asistida por IA sobre un formato legible. Entre los colaboradores está Dan Bashaw, de LXD Integral, y el formato tiene un registro de cambios público hasta la v1.8.

## Conceptos conectados
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]