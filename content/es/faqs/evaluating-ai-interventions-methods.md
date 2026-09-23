---
title: "¿Qué medidas y métodos de investigación puede usar un docente para evaluar intervenciones relacionadas con la IA?"
created: "2026-09-22T18:29:05-04:00"
updated: "2026-09-22T18:29:05-04:00"
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/evaluating-ai-interventions-methods
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Qué medidas y métodos de investigación puede usar un docente para evaluar intervenciones relacionadas con la IA?

**Ajuste el método a la afirmación.** Si quiere saber si una actividad con IA *gustó* al estudiantado, una encuesta puede ayudar. Si quiere saber si *aprendieron*, use medidas de desempeño. Una encuesta es una [[self-report-measures|medida autoinformada]]: el instrumento correcto para las actitudes y el equivocado para el aprendizaje, por las razones reunidas en esa página. Si quiere saber si la IA *causó* una mejora, necesita una condición de comparación creíble y, preferiblemente, asignación aleatoria.

## Opciones de método

La página [[research-methods-aied|Métodos de investigación en AIED]] distingue varias opciones útiles:

- **Los experimentos aleatorizados** ofrecen la inferencia causal más fuerte.
- Los diseños **cuasiexperimentales** de tipo pre/post o con grupos emparejados suelen ser más prácticos en clases intactas, pero solo respaldan afirmaciones causales más débiles.
- Las entrevistas, los grupos focales, las observaciones y el análisis de artefactos de tipo **[[qualitative-research|cualitativo]]** revelan mecanismos y experiencias inesperadas.
- El **análisis cualitativo asistido por IA** puede reorganizar corpus de entrevistas u observaciones en minutos, así que la [[chain-behind-claim-warrantability-2026|justificabilidad]] importa tanto como la precisión o la declaración de uso: registre las reorganizaciones documentadas que permiten a quien lee inspeccionar, cuestionar y revisar el camino que va de los datos a la afirmación.
- Los **[[mixed-methods-research|métodos mixtos]]** combinan la evidencia de resultados con explicaciones de por qué ocurrieron los efectos.
- La **[[design-based-research|investigación basada en el diseño]]** es útil cuando el profesorado desarrolla y refina una intervención de forma iterativa en un curso auténtico.

Sea cual sea el canal que use, solo tres condiciones hacen interpretable una afirmación causal: un **tratamiento descrito con precisión**, una **condición de comparación bien definida** y una **medida válida de aprendizaje duradero**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditan 19 comparaciones de ChatGPT en educación exactamente contra estos criterios y encuentran que solo 4 (21%) cumplen los tres: el 74% tenía un tratamiento bien definido, el 42% un grupo de control bien definido y el 53% un resultado que calificaba como aprendizaje. Una [[generative-ai|herramienta de propósito general]] introducida junto con nuevas actividades, retroalimentación o diseño de interfaz confunde el medio con el método, así que un resultado significativo no puede atribuirse a la IA.

## Una evaluación de aula manejable

Para una evaluación de aula manejable, un mínimo útil es una **medida de línea base, la intervención, una postmedida inmediata y una medida posterior sin ayuda**. Siempre que sea posible, incluya una condición de comparación, como la práctica existente, sin IA, IA sin restricciones frente a IA con andamiaje, o dos diseños alternativos. Mida por separado el desempeño asistido y el aprendizaje independiente.

La síntesis [[ai-ed-evaluation|Evaluación en educación con IA]] recomienda resultados como la ganancia de aprendizaje sin ayuda, la retención diferida, la transferencia a una tarea nueva, la calidad del razonamiento, los [[misconceptions|conceptos erróneos]], la incorporación de la retroalimentación y el desempeño de los subgrupos. El compromiso, la satisfacción, los registros de uso de IA, la autoeficacia y la [[technology-acceptance-model|utilidad percibida]] pueden ser medidas secundarias valiosas, pero no deberían tratarse como sustitutos del aprendizaje. La carga de trabajo del docente y el ahorro de tiempo también son resultados legítimos de implementación.

Se aplican dos cautelas a la forma de leer los resultados. Primero, un efecto promedio de la literatura es una guía débil para una sola aula: [[oneill-presumed-effective-meta-analysis-2026|la auditoría de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metaanálisis]] de alto impacto encontró que ninguno ofrecía una base válida para sus afirmaciones; el [[learning-gains|"rendimiento académico"]] combinado mezclaba puntuaciones de exámenes, motivación, [[self-efficacy|autoeficacia]] y actitudes en una sola estimación, la heterogeneidad reportada era extrema (I² oscilaba entre 77,2% y 94,4% en los 13 análisis que la reportaban, con 12 de esos 13 por encima del 80%), los 14 evaluaban el [[limitations-in-aied-research|sesgo de publicación]] de forma inválida, y el 61% de los estudios primarios verificados al azar presentaba problemas de validez, mientras que faltaban en gran medida las estadísticas que mostrarían cuánto se dispersan realmente los resultados individuales (solo cuatro análisis reportaban varianza entre estudios y solo dos reportaban un intervalo de predicción, ambos de los cuales incluían el cero). Segundo, una puntuación cómoda puede medir el constructo equivocado: en [[zhang-platform-scores-miss-ai-teaching-agents-2026|una evaluación de ocho agentes de enseñanza con IA]], el agente clasificado en tercer lugar por la puntuación de la propia plataforma quedó último en una rúbrica validada por expertos, porque las puntuaciones de la plataforma indexaban el desempeño del estudiante durante la interacción y no la calidad docente del agente. Trate cualquier métrica única de un panel como una hipótesis que hay que validar contra una medida ligada a la capacidad que pretende desarrollar.

Sobre lo que la evidencia actual muestra y no muestra, y sobre dónde sigue siendo escasa, véanse [[does-ai-help-students-learn]] y [[research-gaps-aied]].
