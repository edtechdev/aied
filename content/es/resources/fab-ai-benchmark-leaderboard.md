---
title: "Clasificación de Fab AI benchmark"
created: "2026-11-17T15:00:00-05:00"
updated: "2026-11-17T15:00:00-05:00"
type: resource
summary: "Una clasificación de modelos para conjuntos de referencia educativos orientados a países de renta baja y media, que abarca pedagogía, alfabetización inicial, educación especial, matemáticas visuales y rendimiento multilingüe, con columnas de precio y de pesos abiertos."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
source_updated: "2026-11-17T13:05:00-05:00"
translation_of: resources/fab-ai-benchmark-leaderboard
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-17"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Fab AI evalúa modelos en tareas educativas que importan donde los presupuestos, el ancho de banda y la cobertura lingüística están limitados en los [[global-south|países de renta baja y media]] para los que se construyó el conjunto de referencia, y publica los resultados como una clasificación ordenable en lugar de un artículo. La tabla principal puntúa un conjunto de referencia de pedagogía junto con educación especial, matemáticas visuales y razonamiento visual, con pestañas separadas para pedagogía multilingüe, alfabetización inicial y evaluación de lectura en voz alta.

## Qué puede hacer con él

Compare unos 300 modelos en puntuaciones de pedagogía que actualmente van desde los noventa y pocos hasta el 21%, y luego ordene por lo que un ministerio de educación tiene realmente que sopesar: precio por millón de tokens, número de parámetros, pesos abiertos y fecha de publicación. La dispersión en la parte baja es lo útil. Los modelos abiertos de menos de 2B se sitúan entre el 21% y el 43% en el conjunto de referencia de pedagogía, mientras que los modelos frontera están en los noventa y pocos, lo que convierte «¿podemos ejecutar esto sin conexión en hardware barato?» en una disyuntiva cuantificada en lugar de una conjetura.

La pestaña de pedagogía [[multilingual-learning|multilingüe]] es la razón para guardar la página en marcadores. La mayoría de los conjuntos de referencia educativos son solo en inglés, y la cuestión de si la pedagogía de un modelo sobrevive a la traducción es exactamente la pregunta que un ministerio de un sistema multilingüe necesita responder. Los datos se pueden descargar en CSV, de modo que las comparaciones pueden repetirse localmente.

## Para quién es

Responsables de políticas y equipos de compras que eligen modelos para sistemas nacionales, investigadores que estudian [[digital-divide|la brecha de acceso]] en la educación apoyada por IA, y desarrolladores que necesitan un objetivo de pedagogía que no sea un examen en lengua inglesa.

## Notas y advertencias

Una clasificación mide modelos en las tareas propias del conjunto de referencia: una puntuación alta de pedagogía es evidencia sobre esos ítems, no sobre un aula. La columna de precio combina los precios de tokens de entrada y de salida en una proporción de 3:1, lo que es una decisión de modelización y no lo que costará ningún despliegue concreto. La cobertura de lenguas y de modelos alojados localmente cambia a medida que aparecen modelos nuevos, y las puntuaciones bajas de los modelos pequeños reflejan en parte el formato de la tarea tanto como la capacidad. El encuadre de Fab AI trata explícitamente de países de renta baja y media, por lo que el conjunto de ítems del conjunto de referencia refleja ese contexto y no debe leerse como una clasificación educativa general. Compruebe las fechas de publicación: varias entradas son anteriores a la generación actual de modelos.
