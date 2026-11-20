---
title: "GradeBench"
created: "2026-11-17T15:00:00-05:00"
updated: "2026-11-17T15:00:00-05:00"
type: resource
summary: "Una clasificación pública para modelos frontera que califican respuestas manuscritas reales de estudiantes universitarios de áreas STEM según los ítems de rúbrica que seleccionó el docente."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
source_updated: "2026-11-17T13:05:00-05:00"
translation_of: resources/gradebench
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-17"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

GradeBench plantea una pregunta estrecha y útil sobre la [[automated-assessment|evaluación automatizada]]: dada una respuesta manuscrita de un estudiante, la rúbrica del docente, una solución de referencia y los ítems de la rúbrica que el docente seleccionó realmente, ¿un modelo frontera selecciona los mismos ítems? Las etiquetas de referencia son selecciones reales de rúbrica hechas por docentes y asistentes de docencia en exámenes y pruebas cortas, no resultados de modelos recalificados.

## Qué puede hacer con él

Consulte la clasificación antes de fiarse de la afirmación de precisión de cualquier proveedor de calificación, y examine la construcción de la tarea antes de fiarse de la clasificación. El [[benchmark|conjunto de referencia]] contiene 464 tareas extraídas de 125 preguntas de 45 cursos [[higher-ed|universitarios]] en más de diez instituciones, restringidas a ítems de examen y de prueba corta de respuesta libre que un profesor o un asistente de docencia revisó línea por línea, y sesgadas hacia el crédito parcial: las tareas de puntuación completa y de cero puntos están limitadas al 5% cada una porque los modelos las encuentran fáciles.

La clasificación actual se queda muy por debajo de la concordancia humana: el mejor modelo alcanza un 57,3% de coincidencia exacta de rúbrica, y el sitio representa gráficamente la precisión frente al coste por cada 1.000 respuestas, donde un modelo 0,8 puntos por detrás cuesta alrededor de una séptima parte. Ese eje de coste es la parte prácticamente útil, ya que la calificación es una operación de volumen.

Para un segundo instrumento construido de forma independiente, véase el [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) de Learning Design Alliance, que se distribuye como un repositorio abierto en lugar de una clasificación alojada y se resume en [[porcaro-ai-grading-benchmark-2026|el estudio de Porcaro]].

## Para quién es

Docentes que deciden si permitir que una herramienta de calificación publique notas sin revisión, profesionales de la evaluación que redactan requisitos de compra, e investigadores que necesitan un objetivo a nivel de rúbrica en lugar de una correlación de puntuación de ensayos.

## Notas y advertencias

GradeBench lo publica Pensive, una plataforma comercial de calificación con IA, de modo que el conjunto de referencia y el producto comparten propietario; la construcción de la tarea está documentada y es defendible, pero conviene tratar el encuadre como el del proveedor. Cubre exámenes STEM con rúbricas de al menos cuatro ítems, lo que excluye ensayos, respuestas breves y publicaciones de debate, los formatos donde ocurre la mayor parte de la calificación en [[humanities-education|humanidades]]. La coincidencia exacta de rúbrica es una métrica estricta: dos calificadores pueden discrepar sobre un ítem y ambos tener razón respecto al estudiante. Las puntuaciones describen versiones de modelos disponibles en noviembre de 2026 y cambiarán.
