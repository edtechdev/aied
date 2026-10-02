---
title: Punto de referencia
created: "2026-09-28T21:03:34-04:00"
updated: "2026-10-02T09:09:37-04:00"
type: concept
technology: [generative-ai, llm]
assessment: [assessment]
connected_faqs: [reporting-interpreting-aied-research, checking-whether-educational-ai-works]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark]
translation_of: concepts/benchmark
source_updated: "2026-09-28T22:17:25-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Punto de referencia (benchmark)**: conjuntos de pruebas estandarizadas y marcos de evaluación que se utilizan para medir el rendimiento de los modelos de IA en tareas educativas. Los puntos de referencia permiten una comparación reproducible entre modelos y enfoques, y son esenciales para evaluar la fiabilidad, la equidad y la calidad [[pedagogy|pedagógica]] de la IA en los sistemas educativos.

## Preguntas para reflexionar

- Un punto de referencia es un conjunto de pruebas estandarizadas para medir el rendimiento de los modelos de IA en tareas educativas. Antes de leer, ¿qué cree que miden realmente la mayoría de los puntos de referencia de IA, y por qué podría ser algo distinto de lo que necesita un buen tutor?
- Esta página destaca un Punto de Referencia Pedagógico que evalúa el conocimiento pedagógico —[[teacher-role|estrategias de enseñanza]], métodos de evaluación, pedagogía de la educación especial— y no el conocimiento de contenidos. ¿Por qué una IA que domina brillantemente una materia podría seguir fracasando al enseñarla, y por qué un punto de referencia que ignora la pedagogía no lo detectaría?
- Una lección de esta página es [[research-methods-aied|metodológica]]: cómo se valida un punto de referencia cambia drásticamente los resultados, y una validación ingenua informa de un rendimiento mucho mayor que los métodos rigurosos independientes del ensayo. ¿Cómo podría un desarrollador o un proveedor de modelos sentirse tentado de diseñar la validación para que quede bien, y cómo lo detectaría usted?
- El rendimiento en un punto de referencia a menudo no se traslada a la utilidad en el mundo real. ¿Se le ocurre un escenario en el que una IA «gana» un punto de referencia pero fracasa en un aula real? ¿Qué le dice esa brecha sobre confiar únicamente en las puntuaciones de los puntos de referencia?
- La página señala que el diseño de un punto de referencia puede a su vez codificar o amplificar sesgos. Si un punto de referencia se compone de ciertas tareas, en ciertos idiomas y de ciertas poblaciones, ¿el aprendizaje de quién acaba midiendo, y el de quién ignora?

## Introducción

Los puntos de referencia constituyen la base probatoria de la [[ai-education|investigación sobre IA en la educación]]. Proporcionan conjuntos de datos, tareas y métricas estandarizados que permiten a quien investiga comparar modelos, seguir el progreso e identificar modos de fallo. En la investigación de esta base de conocimiento, los puntos de referencia aparecen en múltiples dominios:

- **[[cstutorbench-slm-tutors|CSTutorBench]]** evalúa modelos de lenguaje pequeños en tareas de tutoría de informática.
- **[[anvil-ai-educational-animations|ANVIL]]** compara animaciones educativas generadas por IA frente a alternativas creadas por humanos.
- **[[teaching-feedback-classification-benchmark|Puntos de referencia de retroalimentación docente]]** evalúan la transferencia entre idiomas de la clasificación de la [[ai-feedback-quality|calidad de la retroalimentación]].
- **[[cdpk-pedagogy-benchmark-llms|El Punto de Referencia Pedagógico (CDPK + SEND)]]** evalúa el conocimiento pedagógico —estrategias de enseñanza, [[assessment|métodos de evaluación]] y [[special-education|pedagogía de la educación especial]]— en lugar del conocimiento de contenidos, e informa de una «frontera de valor» entre coste y precisión en 97 modelos (la mayoría de los puntos de referencia generales miden conocimiento de contenidos; la pedagogía es una dimensión distinta y crítica para la educación).
- **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** evalúa agentes de [[learning-design|diseño instruccional]] basados en [[llm|LLM]] en 25.795 escenarios de diseño instruccional, y muestra que los agentes híbridos fundamentados en marcos clásicos de ISD (ADDIE, Dick & Carey, prototipado rápido) superan a los puramente teóricos o puramente técnicos: un resultado de punto de referencia con implicaciones directas para el diseño de [[agentic-ai|IA agéntica]] en educación.

### Por qué los puntos de referencia importan en la IAED

Los puntos de referencia se conectan con la [[ai-ed-evaluation|evaluación de la IA educativa]] y la [[assessment-validity|validez de la evaluación]]: sin puntos de referencia rigurosos, las afirmaciones sobre la eficacia de la [[intelligent-tutoring|tutoría con IA]] no son verificables. También se cruzan con la [[bias-mitigation|mitigación de sesgos]], ya que el diseño de un punto de referencia puede codificar o amplificar sesgos. La tensión entre el rendimiento en puntos de referencia y la utilidad en el mundo real se explora en varios artículos, y conecta con las preocupaciones sobre la [[transfer-of-learning|transferencia del aprendizaje]] en aplicaciones de [[generative-ai|IA generativa]].

- **Cuando el fallo está en la métrica y no en el sistema:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]] obtuvo BLEU-4 = 0,0000 en las 179 preguntas teóricas de examen de [[cs-education|informática]], mientras que una rúbrica pedagógica de seis criterios dio 0,7620, porque demostraciones lógicamente equivalentes difieren habitualmente en notación, nombres de variables y estrategia de demostración. Una puntuación de cero dice más sobre el solapamiento de n-gramas que sobre la calidad de la respuesta, que es el argumento general contra tratar las métricas superficiales como la cifra principal para los sistemas de IAED en dominios formales.
- **Puntos de referencia contrafactuales a nivel de constructo.** CFES-P24 expresa principios del aprendizaje multimedia como transformaciones deterministas y reversibles de diapositivas, para auditar si los MLLM responden a constructos específicos de diseño instruccional en lugar de producir valoraciones holísticas plausibles. Un piloto congelado mostró reconocimiento de constructos (operación, principio, reparación, localización de evidencia) de 8/8, mientras que el juicio comparativo (dirección 6/8) y la calibración de la severidad (0/8) fallaron, lo que aboga por tarjetas de puntuación por capas en lugar de puntuaciones compuestas.([[cfes-p24-multimodal-slide-auditing-2026]])
- **Evaluación independiente del ensayo en puntos de referencia fisiológicos.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara y Halloluwa (2026)]] comparan 15 modelos de ML/DL para la predicción de familiaridad basada en EEG y muestran que la elección del esquema de validación cambia drásticamente los resultados principales: la validación cruzada estratificada estándar permite fugas temporales e informa de hasta 0,9853 de F1, mientras que la validación Group K-Fold independiente del ensayo baja el máximo a 0,6038 de F1. La lección —la evaluación consciente de la temporalidad y de las fugas es esencial para que los puntos de referencia educativos sean creíbles— se extiende más allá del EEG a cualquier punto de referencia que use datos secuenciales o estructurados en el tiempo.
- **Puntos de referencia sintéticos para la tutoría con IA.** Los conjuntos de datos abiertos y reproducibles para evaluar la tutoría con IA siguen siendo escasos. ASTRA (Adaptive Socially-intelligent Team Reasoning Agents) es un prototipo de tutoría multiagente y un marco de referencia para estudiar la programación colaborativa con agentes socialmente diferenciados, con configuraciones de tutor individual, tutor en pareja y pareja multiagente (N = 540; 360 sesiones; 1.440 episodios) y un esquema listo para trazas que permite un análisis reproducible de la interacción, el equilibrio de participación y la verificación.
- **Auditar puntos de referencia es ya una contribución de investigación por derecho propio.** Tres artefactos de 2026 llevan el trabajo sobre puntos de referencia más allá de la agregación de clasificaciones. EduFair-Bench mantiene fijo a un estudiante simulado y varía los atributos demográficos, convirtiendo un punto de referencia de tutoría en una auditoría de equidad con métricas pedagógicas a nivel de turno ([[edufair-bench-pedagogical-fairness-llm-tutors-2026]]). GeoVAD-Bench diagnostica las construcciones visuales intermedias —percepción, calidad auxiliar, utilización— en lugar de la corrección final en 600 problemas de [[math-education|geometría]] ([[geovad-bench-visual-chain-of-thought-geometry-2026]]). La recalificación por expertos de seis puntos de referencia de [[physics-education|física]] cuantificó el error que arrastran esas puntuaciones: el 57,20% de los rechazos auditados eran defectos de los ítems, el 38,00% errores de quien calificaba y solo el 4,80% fallos reales del modelo ([[frontier-models-physics-benchmark-audit-2026]]). En conjunto sostienen que una puntuación de punto de referencia debería leerse siempre junto con su propio presupuesto de error auditado, que es la misma disciplina que la [[assessment-validity|validez de la evaluación]] exige a los instrumentos de aula.
- **La anotación y la generación de preguntas desacopladas como paradigma de construcción.** La mayoría de los puntos de referencia construyen pares pregunta-respuesta específicos por tarea para cada ítem o imagen, lo que encarece extenderlos a nuevas tareas, dificulta reutilizar los datos entre tareas y deja un control limitado sobre la forma y la complejidad de las preguntas. MUSE invierte el orden: anota cada obra de arte una sola vez en una representación estructurada y reutilizable de su contenido visual y semántico, y después instancia 12 tareas a partir de reglas de generación predefinidas, de modo que una imagen produce una instancia de evaluación multivista en la que la dificultad y el formato se tratan como variables de diseño explícitas y no como subproductos ([[muse-vlm-artistic-image-benchmark-2026]]). Su evidencia correlacional es un segundo argumento a favor del diseño: las 12 tareas miden capacidades relacionadas pero no redundantes (el rompecabezas correlaciona débilmente con la mayoría de las demás, ρ = 0,25 a −0,10), y en seis puntos de referencia externos las puntuaciones multimodales generales se transfieren de forma desigual a las imágenes artísticas educativas (BLINK Jigsaw frente a MUSE Jigsaw ρ = −0,20), que es el argumento de cobertura de constructo contra leer cualquier puntuación agregada única como representación de una capacidad educativamente relevante ([[muse-vlm-artistic-image-benchmark-2026]]).

## Conceptos conectados

- [[ai-ed-evaluation]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[automated-essay-scoring]]

## Artículos conectados
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[assessment-latent-structure-human-llm-2026]] — ¿Miden los instrumentos de evaluación lo mismo para los humanos y para los LLM? (Strugatski et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — El Punto de Referencia Pedagógico: conocimiento pedagógico de los LLM (CDPK + SEND)
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: evaluación de agentes de diseño instruccional basados en LLM
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asistentes de base de conocimiento con IA sobre REA en local: punto de referencia multidimensional
- [[authentic-products-authenticated-processes-2026]] — De productos auténticos a procesos autenticados: la evaluación auténtica en la educación superior rica en IA
- [[llm-cognitive-diagnosis-handwritten-math]] — Evaluación de grandes modelos de lenguaje para diagnosticar las habilidades cognitivas del estudiantado a partir de trabajo matemático manuscrito
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: un punto de referencia de horizonte largo para agentes pedagógicos LLM con estudiantes simulados
- [[responsible-assessment-ai-era-stanford-2026]] — Evaluación responsable en la era de la IA: ideas clave de una conferencia orientada al futuro
- [[anvil-ai-educational-animations]] — ANVIL: analogías y vídeos para el profesorado
- [[icle-plus-plus-essay-scoring]] — ICLE++: modelado de rasgos finos para la calificación holística de ensayos
- [[elbench-education-llm-benchmark-2026]]
- [[teaching-monster-pck-benchmark-2026]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: evaluación de LLM multimodales para la auditoría de diapositivas
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: punto de referencia para evaluar diagramas matemáticos generados
- [[eeg-familiarity-automated-assessment-2026]] — Automatizar la evaluación del estudiantado: predicción de familiaridad basada en EEG
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilación de un LM autoexplicativo para la analítica del aprendizaje
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA: punto de referencia sintético para la tutoría multiagente y la colaboración con participación equilibrada
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: generación aumentada por recuperación para la enseñanza teórica de la informática -- un marco de evaluación integral para el análisis de algoritmos y la teoría de la complejidad
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: construcción de puntos de referencia con anotación primero y generación de tareas, y no redundancia a nivel de dimensión en 12 tareas de imágenes artísticas (Zhu et al. 2026)
- [[mental-health-literacy-students-llms-2026]] — Alfabetización en salud mental en estudiantes de psicología y grandes modelos de lenguaje
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes para el GRE
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluación del enfoque de la retroalimentación y de la adaptatividad pedagógica en la retroalimentación generada por LLM sobre la escritura del estudiantado
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas basados en aserciones para una codificación auditable de diálogos educativos
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de nuevas preguntas educativas asistidas por IA
