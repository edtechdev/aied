---
title: "Clasificación de RAID Benchmark"
created: "2026-11-17T15:00:00-05:00"
updated: "2026-11-17T15:00:00-05:00"
type: resource
summary: "Una clasificación pública de detectores de texto generado por IA evaluados con RAID, un conjunto de referencia diseñado para poner a prueba la robustez frente a modelos, dominios, ajustes de decodificación y ataques adversarios."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan y el equipo de RAID (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
source_updated: "2026-11-17T13:05:00-05:00"
translation_of: resources/raid-benchmark-leaderboard
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-17"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

RAID es el conjunto de referencia que respalda la mayoría de las afirmaciones serias sobre la [[ai-detection|detección de texto generado por IA]], y su clasificación es el lugar donde comprobar si la precisión publicada de un detector sobrevive a un cambio de modelo, de dominio, de ajuste de decodificación o a un ataque deliberado. Las entradas se puntúan sobre el conjunto de prueba y puede enviarlas cualquiera que siga el proceso de envío del repositorio.

## Qué puede hacer con él

Filtre por dominio —resúmenes, libros, noticias, poesía, recetas, Reddit, reseñas, wiki—, por estrategia de decodificación (voraz o por muestreo), por penalización de repetición y por ataque adversario, incluidos espacios en blanco, homoglifos, sustitución de sinónimos, paráfrasis, espacios de ancho cero y eliminación de artículos. Después compare un detector entre métricas: AUROC, TPR con una tasa de falsos positivos del 5% y TPR con una del 1%.

Ese conjunto de filtros es lo esencial. Un detector que puntúa cerca de 1,000 en el agregado puede desplomarse una vez que el texto ha sido parafraseado o cambia el modelo de origen, y la clasificación permite ver el desplome antes de que una institución apueste un caso de [[academic-integrity|falta de integridad]] a ese detector. La columna del 1% de falsos positivos es la que más importa en educación, porque a escala institucional una tasa de error del 1% significa cientos de estudiantes acusados injustamente.

## Para quién es

Investigadores que evalúan métodos de detección, administradores que redactan políticas que podrían mencionar un detector, y docentes que quieren una respuesta concreta a «¿esto se puede detectar?» antes de afirmarlo en un programa de estudios.

## Notas y advertencias

El conjunto de referencia mide la detección de texto generado por máquinas, no la mala conducta: un estudiante que usa IA para planificar, esquematizar o revisar produce un texto que los detectores no fueron diseñados para captar, y un estudiante que [[language-learning|escribe en una segunda lengua]] es un riesgo conocido de falso positivo que una clasificación no puede mostrar. RAID es un artefacto de investigación mantenido por un equipo académico; su cobertura sigue a los modelos generadores de su conjunto de prueba, por lo que los modelos más nuevos pueden estar infrarrepresentados hasta que se actualice el conjunto de referencia. La clasificación ordena detectores, no las prácticas de tratamiento de datos de sus proveedores, y un AUROC alto no dice nada sobre si enviar trabajos de estudiantes a ese servicio es legal o ético en su jurisdicción.
