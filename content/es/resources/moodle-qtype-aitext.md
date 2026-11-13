---
title: "Tipo de pregunta de texto con IA para Moodle"
created: "2026-11-12T20:15:00-05:00"
updated: "2026-11-13T14:15:00-05:00"
type: resource
summary: "Un tipo de pregunta de Moodle de código abierto (GPL v3) que califica respuestas de texto libre con un modelo de lenguaje grande contra una instrucción por pregunta y un esquema de calificación opcional, usando OpenAI, Azure o un modelo Ollama autoalojado y mostrando la retroalimentación de la IA a una persona que califica."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: resources/moodle-qtype-aitext
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

La mayoría de las integraciones de cuestionarios con IA envían cada respuesta a una llamada de calificación fija. Este tipo de pregunta de Moodle hace lo contrario: el profesorado escribe la rúbrica. Cada pregunta lleva una **instrucción** que dice al modelo cómo evaluar la respuesta y un **esquema de calificación** opcional que describe cómo se otorgan los puntos, de modo que un ítem como «escriba una frase en pasado» puede especificar diez puntos sin errores, cero por gramática rota y un punto menos por cada falta de ortografía. El modelo devuelve una nota y [[feedback|retroalimentación]], y el profesorado puede ver esa retroalimentación junto a la respuesta cuando califica a mano.

## Qué puede hacer con él

Añada una pregunta AIText a cualquier cuestionario de Moodle, escriba la instrucción y el esquema de calificación, y pruebe las instrucciones con un **probador de instrucciones** AJAX en el formulario de edición en lugar de ir pasando por intentos de vista previa. La calificación se ejecuta mediante dos comportamientos de pregunta complementarios (inmediato y diferido) que deben instalarse junto con el tipo de pregunta, lo que mantiene la calificación por IA aislada de los comportamientos centrales de Moodle; los intentos existentes que usaban el comportamiento heredado `interactivecountback` migran al actualizar. Si el modelo no está accesible, la calificación se degrada en lugar de dar error, así que no se pierde un intento. Como la pregunta es un tipo nativo del cuestionario, los resultados llegan al libro de calificaciones como cualquier otro ítem, que es lo que un equipo de curso necesita antes de tratar la [[automated-assessment|calificación automatizada]] como piloto y no como demostración.

El diseño también pone la rúbrica donde se decide la [[ai-feedback-quality|calidad de la retroalimentación]]: en la instrucción, escrita por el profesorado, y no en un valor predeterminado del proveedor. Los criterios se pueden inspeccionar y revisar, aunque el techo de calidad es la propia rúbrica, y una instrucción vaga produce una calificación vaga. Las instituciones recurren a ella en las comprobaciones frecuentes y de bajo riesgo de las que depende la [[formative-assessment|evaluación formativa]], donde una persona tendría que leer de otro modo cuarenta respuestas cortas cada noche.

## Para quién es

Administraciones y desarrolladores de Moodle que ya operan el sitio, profesorado que quiere calificación con IA sin una plataforma separada ni una licencia comercial, e investigadores que necesitan un flujo de calificación controlable para estudiar. Requiere Moodle 4.5 o posterior y acceso a la API de un modelo, ya sea OpenAI o Azure a través del subsistema de IA de Moodle, o una instancia Ollama autoalojada mediante Local AI Manager, que mantiene el texto del estudiantado en infraestructura local. El plugin lo mantiene Marcus Green, está en el mercado de plugins de Moodle y tenía 33 estrellas y 36 bifurcaciones en el momento de escribir esto.

## Notas y advertencias

Código abierto bajo GPL v3 o posterior, pero gratis no significa gratis de ejecutar: alguien paga la API del modelo, y la calidad de la calificación depende de la elección del modelo y del diseño de la instrucción. Las respuestas de texto libre salen del servidor de Moodle cuando se usa un proveedor remoto, así que el acuerdo de datos de la institución rige lo que se puede enviar; la vía Ollama autoalojada existe para sitios que no pueden enviar el trabajo del estudiantado fuera. El repositorio no declara ningún estudio publicado de precisión o concordancia, así que el plugin no debería adoptarse suponiendo que la calificación por LLM equivale a la calificación humana. La [[assessment-validity|validez]] tiene que establecerse localmente frente a puntuaciones humanas antes de que cualquier nota tenga peso. Los comportamientos complementarios son una dependencia dura: instalar el tipo de pregunta solo deja las preguntas sin calificar.

## Conceptos conectados

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
