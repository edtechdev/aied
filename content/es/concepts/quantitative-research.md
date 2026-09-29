---
title: Investigación cuantitativa
created: "2026-09-28T19:11:02-04:00"
updated: "2026-09-28T19:11:02-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
translation_of: concepts/quantitative-research
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Investigación cuantitativa**: la familia de métodos empíricos que recogen y analizan datos *numéricos* para describir patrones, poner a prueba relaciones y estimar efectos causales. En la [[ai-education|IA en la educación]], los métodos cuantitativos cuantifican si las herramientas de IA afectan a los [[learning-gains|resultados de aprendizaje]], la [[student-engagement|implicación]], la [[motivation|motivación]] y la [[self-efficacy|autoeficacia]], y cómo lo hacen, y modelan los mecanismos psicológicos y conductuales del uso de la IA. Aportan la amplitud, la precisión y la potencia de inferencia causal a las que los [[qualitative-research|métodos cualitativos]] renuncian a cambio de profundidad y contexto.

## Preguntas para reflexionar

- «El estudiantado que usa un tutor de IA obtiene mejores notas»: antes de seguir leyendo, ¿es una afirmación sobre causalidad o sobre correlación, y qué única evidencia convertiría una en la otra?
- Una encuesta transversal puede poner a prueba un modelo mediacional complejo y aun así no establecer nunca causalidad. ¿Por qué podrían estar correlacionadas dos variables en una encuesta aunque ninguna cause a la otra? ¿Se le ocurre alguna forma de dejarse engañar de verdad por esa correlación en educación?
- Los instrumentos cuantitativos valen tanto como aquello que miden, y la página señala que un instrumento puede medir el constructo equivocado. Cuando usted rellena una encuesta de autoinforme sobre la «confianza» o la «implicación», ¿qué podría estar capturando en realidad, y cómo lo averiguaría?
- Un ensayo controlado aleatorizado asigna aleatoriamente a quienes aprenden a distintas condiciones para estimar un efecto causal. ¿Qué hace poderosa a la asignación aleatoria, y qué problemas prácticos y éticos surgen cuando el «tratamiento» es una herramienta de IA posiblemente útil que se niega a parte del estudiantado?
- Los diseños longitudinales siguen a las mismas personas que aprenden a lo largo del tiempo, algo esencial para distinguir el rendimiento inflado por la IA del aprendizaje duradero. ¿Por qué una única instantánea de puntuaciones altas no revelaría si el aprendizaje se produjo de verdad?
- El trabajo cuantitativo aporta amplitud y potencia causal; el cualitativo, profundidad y significado. Antes de leer el emparejamiento, ¿dónde cree que los números por sí solos le han llevado más probablemente a error sobre una afirmación de aprendizaje, y qué método añadiría para comprobarlo?

## Introducción

La investigación cuantitativa abarca los diseños descriptivos (medir la prevalencia y los patrones), los diseños correlacionales u observacionales (poner a prueba relaciones entre variables) y los diseños experimentales y cuasiexperimentales (estimar efectos causales). Lo que los unifica es la reducción sistemática de las observaciones a números, analizados con estadística, y la prioridad que se concede a la **fiabilidad, la validez y la generalizabilidad**, las preocupaciones centrales de la [[educational-measurement|medición educativa]].

## Principales enfoques cuantitativos

### Investigación por encuesta y correlacional
Las encuestas transversales miden actitudes, percepciones, motivación, [[self-efficacy|autoeficacia]] y aceptación tecnológica autoinformadas, a menudo modeladas con regresión o modelos de ecuaciones estructurales (SEM/PLS-SEM) para poner a prueba relaciones hipotetizadas y mediadores. Dominan el corpus de la base de conocimiento, en particular para las cuestiones de aceptación, motivación y mecanismos psicológicos. [[acceptance-ai-english-tools-2026|La aceptación de herramientas de inglés asistidas por IA]] parte del [[technology-acceptance-model|TAM]] con SEM; [[tian-genai-learning-adoption-pathways-2026|las vías de adopción de la IA generativa]] usan PLS-SEM, fsQCA y mapeo de importancia-rendimiento; [[teacher-education-ai-literacy-sdt-2026|la alfabetización en IA del profesorado]] usa encuestas validadas factorialmente y ancladas en la [[self-determination-theory|teoría de la autodeterminación]].

- **Fortalezas:** muestras grandes; cobertura amplia y de bajo coste; permite probar modelos mediacionales complejos; viable para actitudes difíciles de observar.
- **Limitaciones:** los datos transversales no pueden establecer causalidad; sesgo de autoinforme; el muestreo por conveniencia limita la generalizabilidad; los mediadores se infieren de la covarianza y no de la manipulación. Véase [[self-report-measures|medidas de autoinforme]] para el tratamiento de estos límites desde el lado del instrumento.

### Investigación experimental y cuasiexperimental
Los experimentos asignan aleatoriamente a quienes aprenden a distintas condiciones (por ejemplo, tutor de IA frente a tutor humano, o con andamiaje de IA frente a sin asistencia) para estimar efectos causales sobre los resultados. Los **ensayos controlados aleatorizados ([[rct|ECA]]s)** son el patrón de referencia para la validez interna. [[access-not-enough-ai-tutoring-2026|Un estudio de campo aleatorizado sobre el apoyo humano más la tutoría con IA]] y [[genai-can-harm-teaching-rct-2026|un ECA sobre la IA generativa en la enseñanza]] usan la asignación para aislar efectos causales. Los diseños **cuasiexperimentales** (pre/post, grupos emparejados sin aleatorización) son más viables en aulas intactas, pero más débiles para las afirmaciones causales.

- **Fortalezas:** la inferencia causal más sólida; medición limpia de los resultados; permite estimar tamaños del efecto y sostener afirmaciones de eficacia.
- **Limitaciones:** costosa y lenta; las condiciones artificiales reducen la validez ecológica; las herramientas de IA que cambian rápido dejan obsoletos los experimentos enseguida; las muestras pequeñas tienen poca potencia para detectar efectos; restricciones éticas a la hora de retener herramientas útiles.

### Investigación longitudinal
Los diseños longitudinales siguen a las mismas personas que aprenden a lo largo del tiempo y capturan el cambio, el crecimiento y el aprendizaje duradero que se escapan a una medición en un único momento. [[ai-lms-middle-school-longitudinal|Un estudio longitudinal de un LMS]] sigue al estudiantado a lo largo de un curso escolar. Los diseños longitudinales son esenciales para distinguir el rendimiento inflado por la IA del [[genai-performance-vs-learning|aprendizaje duradero]].

### Cuantificación computacional y psicométrica
Los métodos cuantitativos también incluyen la medición directa de constructos mediante instrumentos, el dominio de la [[educational-measurement|medición educativa]] y la [[item-response-theory|teoría de la respuesta al ítem]]. El [[jin-glat-genai-literacy-assessment|GLAT]] de la base de conocimiento es un instrumento cuantitativo de 20 ítems validado con TRI; los [[educational-measurement|instrumentos de medición]] de la [[ai-literacy|alfabetización en IA]], la aceptación y la autoeficacia proporcionan las escalas validadas de las que dependen la investigación por encuesta y la experimental.

## Cómo aparece la investigación cuantitativa en la base de conocimiento

- **Afirmaciones de eficacia y causales.** Los ECA y los cuasiexperimentos prueban si las herramientas de IA mejoran el aprendizaje ([[access-not-enough-ai-tutoring-2026|un estudio de campo aleatorizado sobre apoyo humano más tutoría con IA]], [[genai-can-harm-teaching-rct-2026|un ECA sobre la IA generativa en la enseñanza]], [[adaptive-pretesting-retention|preprueba adaptativa y retención]]).
- **Modelado de mecanismos.** El SEM/PLS-SEM prueba mediadores y moderadores de la adopción de la IA y del aprendizaje ([[tian-genai-learning-adoption-pathways-2026|las vías de adopción de la IA generativa]], [[acceptance-ai-english-tools-2026|la aceptación de herramientas de inglés asistidas por IA]], [[teacher-education-ai-literacy-sdt-2026|la alfabetización en IA del profesorado]]).
- **Medición y desarrollo de escalas.** La base de conocimiento documenta el desarrollo y la validación de instrumentos cuantitativos ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement|medición educativa]]).

## Fortalezas y limitaciones

- **Fortalezas:** precisión y potencia estadística; generalizabilidad a poblaciones definidas; inferencia causal (con diseños experimentales); cobertura eficiente de muestras grandes; acumulativa y comparable entre estudios.
- **Limitaciones:** captura lo que es medible y a menudo se pierde el proceso, el significado y el contexto (véase [[qualitative-research|investigación cualitativa]]); sesgo de autoinforme; los instrumentos pueden medir el constructo equivocado (véase [[educational-measurement|problemas de medición]]); correlación sin causalidad; puede ser artificial y lenta en relación con el ritmo de cambio de la IA.

Los métodos cuantitativos y los [[qualitative-research|cualitativos]] son complementarios: el trabajo cuantitativo aporta amplitud y potencia causal, y el cualitativo, profundidad y significado. Los [[mixed-methods-research|diseños de métodos mixtos]] los combinan. Véase [[research-methods-aied|métodos de investigación]] para la comparación completa de métodos y los contrastes entre diseños experimentales, de encuesta, cualitativos y otros.

## Conceptos conectados

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## Artículos conectados

- [[access-not-enough-ai-tutoring-2026]] — Un estudio de campo aleatorizado sobre el apoyo humano más la tutoría con IA
- [[genai-can-harm-teaching-rct-2026]] — La IA generativa puede perjudicar la enseñanza: un ECA
- [[acceptance-ai-english-tools-2026]] — La aceptación de herramientas de aprendizaje de inglés asistidas por IA
- [[tian-genai-learning-adoption-pathways-2026]] — Vías de adopción de la IA generativa (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — La alfabetización en IA del profesorado a través de la teoría de la autodeterminación
- [[jin-glat-genai-literacy-assessment]] — GLAT: una prueba de alfabetización en IA generativa validada con TRI
- [[ai-lms-middle-school-longitudinal]] — Un estudio longitudinal de un LMS integrado con IA
- [[genai-over-reliance-learning-2026]] — De la mejora a la dependencia excesiva (métodos mixtos)
- [[adaptive-pretesting-retention]] — Preprueba adaptativa y retención
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas basados en aserciones para la codificación auditable de diálogos educativos
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que las métricas de fidelidad pasan por alto: una comprobación estructural de los datos educativos sintéticos
