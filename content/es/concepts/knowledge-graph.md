---
title: Grafo de conocimiento
created: "2026-09-28T19:11:29-04:00"
updated: "2026-10-03T00:17:27-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
translation_of: concepts/knowledge-graph
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Grafo de conocimiento** — una representación estructurada de conceptos y sus relaciones, usada para modelar el conocimiento de un dominio, la comprensión del estudiantado y las dependencias de aprendizaje en los sistemas de [[ai-education|IA en la educación]]. Los grafos de conocimiento permiten a los sistemas de IA razonar sobre lo que el estudiantado sabe, lo que necesita aprender a continuación y cómo se relacionan los conceptos entre sí.

## Preguntas para reflexionar

- Un grafo de conocimiento captura no solo los conceptos, sino también sus relaciones: prerrequisitos, similitud, jerarquía. ¿Por qué podría ser más útil para un sistema adaptativo saber cómo se relacionan los conceptos que una lista plana de habilidades?
- ¿Cómo son las relaciones de prerrequisito en un dominio como el suyo? ¿Se le ocurre algún tema en el que el estudiantado tropiece habitualmente por carecer de un concepto fundacional que el grafo revelaría?
- La página describe el uso de grafos de conocimiento para detectar lagunas de conocimiento, allí donde a quien aprende le faltan conceptos fundacionales. ¿Cómo podría cambiar lo que un tutor de IA decide enseñar a continuación el hecho de sacar a la luz esa laguna?
- Los grafos de conocimiento pueden construirse a mano o automáticamente por LLM a partir de texto educativo. ¿Cuáles son los riesgos de dejar que una IA construya la estructura conceptual sobre la que luego razonará un tutor?
- Si los grafos de conocimiento aportan la estructura de dominio sobre la que razonan los agentes de IA, ¿qué ocurre con la confianza y la precisión cuando el propio grafo contiene un error o una relación sesgada?
- Se describe el grafo de conocimiento como la columna vertebral estructural que habilita el diagnóstico fino y los itinerarios personalizados. En su propia [[teacher-role|docencia]] o diseño, ¿qué necesitaría que capturara un grafo de conocimiento de su materia, y qué dejaría fuera?

## Introducción

Los grafos de conocimiento aportan la columna vertebral estructural de muchos sistemas educativos inteligentes. A diferencia de las listas planas de habilidades o conceptos, los grafos de conocimiento capturan relaciones de prerrequisito, similitud y organización jerárquica, algo esencial para el [[adaptive-learning|aprendizaje adaptativo]], el [[knowledge-tracing|seguimiento del conocimiento]] y el [[student-modeling|modelado del estudiantado]].

## Cómo se usan los grafos de conocimiento en AIED

Los grafos de conocimiento son un mecanismo estructural recurrente en la [[research-methods-aied|investigación]] en AIED recogida en esta base de conocimiento, y cumplen varias funciones distintas:

- Los modelos de **[[knowledge-tracing|seguimiento del conocimiento]]** usan grafos de conceptos para propagar las estimaciones de dominio del estudiantado entre habilidades relacionadas, mejorando la precisión de la predicción cuando los datos son escasos.
- Los sistemas de **[[student-modeling|modelado del estudiantado]]** aprovechan los grafos de conocimiento para representar lo que quien aprende sabe de forma semánticamente significativa, habilitando un diagnóstico fino.
- Las plataformas de **[[adaptive-learning|aprendizaje adaptativo]]** usan grafos de prerrequisitos para secuenciar el contenido y recomendar itinerarios de [[personalized-learning|aprendizaje personalizado]].
- **La elección de algoritmo sobre el grafo cambia los resultados.** En G4L, propagar el dominio a través de un Evolving Knowledge Space Graph con propagación bayesiana del conocimiento produjo un +24% de conocimiento medido (0.717 → 0.887), frente a un +5% de la Knowledge Space Theory y un +1% de la Weighted Distance Dependent Induction ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes y Kovács, 2026]]).
- Los marcos de **[[cognitive-diagnosis|diagnóstico cognitivo]]** como [[xie-hillm-cd-2026|HiLLM-CD]] construyen árboles de conceptos a partir de texto educativo usando LLM, eliminando la anotación manual.
- **Tutoría aumentada con grafos de conocimiento:** [[quantum-education-its|ITAS]] usa un grafo de conocimiento de conceptos de física cuántica (con relaciones de prerrequisito explícitas) para impulsar un sistema de tutoría multiagente, recorriendo el grafo para seleccionar los siguientes temas de material contraintuitivo.
- **Modelado de currículos y cursos:** [[coursegraph-cs-course-comparison-2026|CourseGraph]] compara estructuras de cursos de informática entre instituciones usando representaciones de grafo; los [[learnity-graphs-lifelong-learning-framework-2026|grafos Learnity]] modelan itinerarios de [[lifelong-learning|aprendizaje a lo largo de la vida]].
- **Aprendizaje de relaciones de prerrequisito:** [[proprl-prerequisite-relation-learning|ProPrL]] aprende relaciones de prerrequisito entre conceptos, formalizando las aristas que codifican los grafos de conocimiento.
- **Detección de lagunas de conocimiento:** [[knowledge-gap-detection-ai-tas|la detección de lagunas de conocimiento]] usa razonamiento basado en grafos en asistentes docentes de IA para identificar dónde carece quien aprende de conceptos fundacionales.
- **Razonamiento [[multimodal|multimodal]] y explicable:** los [[multimodal-knowledge-graph-educational-reasoning|grafos de conocimiento multimodales]] extienden la estructura de grafo a través de las modalidades de contenido; las [[fair-explainable-edu-recommendations|recomendaciones justas y explicables]] combinan incrustaciones de grafos de conocimiento con modelado secuencial (un marco híbrido HKG-GRU).
- **Grafos con estructura instruccional para la recomendación de recursos:** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun y Song (2026)]] descomponen cada entidad de recurso didáctico en cuatro dimensiones instruccionales (contexto de enseñanza, nivel cognitivo, característica tecnológica, adaptabilidad cultural), calculan sobre esas dimensiones una similitud semántica dependiente de la persona usuaria y la fusionan con el filtrado colaborativo mediante un coeficiente sensible a la capacidad y al progreso, codificando la estructura pedagógica directamente en la señal de recomendación en lugar de tratar los recursos como artículos de consumo.
- **Bases de conocimiento basadas en ontologías:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] propone una arquitectura de base de conocimiento híbrida y por capas, fundamentada en la lógica de descripción, que sustituye los modelos clásicos de ontología única de los STI por **sistemas de ontologías mapeadas**, añadiendo conocimiento procedimental (basado en reglas), probabilístico/difuso y conocimiento implícito extraído por aprendizaje automático, además de un marco de metadatos para describir, descubrir y reutilizar ontologías educativas.
- **[[scaffolding|Andamiaje]] y escritura:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] y [[visual-query-tracer-declarative-logic-learning|el trazado visual de consultas]] aplican estructuras basadas en grafos a la redacción narrativa y al aprendizaje de la lógica declarativa.
- **Grafos literarios curados por personas, y lo que revela una auditoría:** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] representa gráficamente premisas literarias —1.455 registros de axiomas, 1.464 mapeos a 149 obras y 472 relaciones tipadas— con [[llm|modelos de lenguaje]] que proponen formulaciones candidatas que curadores humanos seleccionaron y fundamentaron. Su auditoría recalculada es tan instructiva como su estructura: todos los extremos se resuelven y no queda ningún enlace duplicado ni autorreferente, pero 1.448 de los 1.455 axiomas se mapean a exactamente una obra (por lo que la reutilización entre obras es escasa), la taxonomía de contextos no logra separar sus dos tipos de contexto y no sobrevive ningún registro de procedencia, lo que deja la instantánea incapaz de reconstruir su propia canalización. La validez estructural no es calidad interpretativa, y un grafo curado sin procedencia no puede auditarse ni actualizarse.

## Construcción de grafos de conocimiento impulsada por LLM

La investigación reciente explora el uso de [[llm|LLM]] para construir automáticamente grafos de conocimiento a partir de contenido educativo. El marco [[xie-hillm-cd-2026|HiLLM-CD]] usa canalizaciones de LLM multiagente para generar vínculos ejercicio-concepto y árboles jerárquicos de conceptos, reduciendo la dependencia de la anotación experta. Esto conecta con aplicaciones más amplias de la [[generative-ai|IA generativa]] en el diseño curricular y la organización automatizada de contenido, y con el [[rag|RAG]] (generación aumentada por recuperación), donde el conocimiento estructurado en grafo puede mejorar la calidad de la recuperación frente a la búsqueda de similitud plana.

## Relación con otros conceptos

Los grafos de conocimiento conectan con el [[learning-design|diseño del aprendizaje]] (definir qué enseñar), el [[curriculum-design|diseño curricular]] (cómo secuenciarlo) y la [[learning-analytics|analítica del aprendizaje]] (extraer conclusiones de los datos de interacción del estudiantado). Son fundacionales para los sistemas de [[intelligent-tutoring|tutoría inteligente]] que necesitan representaciones estructuradas de los dominios educativos. A medida que los agentes de IA se vuelven más comunes en la educación, los grafos de conocimiento aportan la estructura de dominio sobre la que razonan los [[agentic-ai|sistemas agénticos]], un patrón que se observa en [[quantum-education-its|ITAS]] y en los asistentes docentes de detección de lagunas de conocimiento.

## Conceptos conectados

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Paraguas: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agéntica)
- [[recommender-systems-and-learning-paths]]
## Artículos conectados
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — Un grafo de 1.455 axiomas literarios construido por curadores, con una auditoría estructural y sin registro de procedencia (Liu y Zhao 2026)
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Modelo de conocimiento híbrido y por capas basado en ontologías para el aprendizaje electrónico personalizado
- [[learnity-graphs-lifelong-learning-framework-2026]] — Grafos Learnity para el aprendizaje a lo largo de la vida
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: andamiajes para la redacción narrativa
- [[quantum-education-its]] — Tutoría inteligente en educación cuántica (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Grafos de conocimiento multimodales para el razonamiento educativo
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: comparación de cursos de informática
- [[proprl-prerequisite-relation-learning]] — ProPrL: aprendizaje de relaciones de prerrequisito
- [[knowledge-gap-detection-ai-tas]] — Detección de lagunas de conocimiento en asistentes docentes de IA
- [[visual-query-tracer-declarative-logic-learning]] — Trazador visual de consultas para el aprendizaje de la lógica declarativa
- [[fair-explainable-edu-recommendations]] — Recomendaciones educativas justas y explicables
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — Recomendación cruzada híbrida FC–GC para recursos didácticos multimodales
- [[xie-hillm-cd-2026]] — HiLLM-CD: diagnóstico cognitivo impulsado por LLM
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol: generación de entornos de aprendizaje
