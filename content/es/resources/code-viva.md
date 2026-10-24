---
title: "Code Viva"
created: "2026-10-24T08:21:12-04:00"
updated: "2026-10-24T08:38:48-04:00"
type: resource
summary: "Una herramienta de navegador gratuita que aplica una versión escrita y cronometrada de una defensa oral de código a cada estudiante de un curso de programación, y propone puntuaciones con evidencia citada para que el profesorado las apruebe."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
source_updated: "2026-10-24T08:37:08-04:00"
translation_of: resources/code-viva
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-24"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Code Viva** — Una herramienta que aplica una versión escrita y cronometrada de una [[oral-assessment|viva oral]] a cada estudiante de un curso de programación, unos quince a veinte minutos por estudiante, sin un instructor en la sala.

Lee el código entregado y el historial de commits de un estudiante, escribe de cuatro a seis preguntas sobre las funciones, los nombres y los commits de ese mismo estudiante, y da a cada estudiante un enlace personal para responder.

## Qué se puede hacer con ella

Las entregas llegan desde una exportación de Gradescope, un zip descargado de Canvas, un zip con una carpeta por estudiante o GitHub Classroom con un token de lectura. El profesorado fija la duración de la sesión, el número de preguntas y la fecha límite, marca tiempo adicional de 1,25x a 3x, y lee, edita o reemplaza las preguntas generadas antes de enviar los enlaces. Las preguntas cubren casos base de recursión, guardas de borde, elecciones de estructuras de datos, nombres de variables opacos, escala y traza, frases de la especificación de la asignación y patrones de commits como un commit masivo o uno de madrugada. Las respuestas vuelven como un código de respuesta, y la pantalla de revisión muestra cada transcripción junto a una puntuación propuesta de 0 a 3 con las frases en las que se apoya, además de una cola de alertas ordenada por cuánto se justifica una conversación. Los resultados se exportan a CSV, y once cursos de demostración permiten a quien lee probar todo el ciclo con datos inventados.

## Para quién es

Profesorado de cursos de programación que quiere evidencia de que un estudiante puede explicar su propio código, y que prefiere hablar con una lista corta de estudiantes antes que con todos; las preguntas sobre commits lo convierten en una forma de [[process-oriented-assessment|evaluación orientada al proceso]].

## Notas y advertencias

Todo se ejecuta en el navegador: el curso vive en el almacenamiento local con una exportación JSON, las preguntas viajan en la parte de un enlace que los navegadores no envían a los servidores, y las respuestas solo vuelven como códigos que el estudiantado elige enviar, de modo que ningún dato del estudiantado llega a un tercero. El generador de preguntas se basa en reglas y no en un modelo. Según la propia herramienta, su lector de código es heurístico, así que un formato inusual o las macros pueden ocultar una función, y una puntuación puede premiar conocer el vocabulario en lugar de entender el código, por lo que las puntuaciones son propuestas que el profesorado aprueba y por lo que aconseja mantener las apuestas bajas. No se publica ninguna licencia ni repositorio de código, y como los enlaces llevan las preguntas ocupan unos pocos kilobytes, suficiente para desbordar un cuadro de mensaje de un sistema de gestión del aprendizaje.

## Conceptos conectados

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]

