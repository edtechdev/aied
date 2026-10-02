---
title: Evaluación de la IA en educación
created: "2026-09-28T19:10:33-04:00"
updated: "2026-09-28T19:10:33-04:00"
type: concept
foundations: [agentic-ai, teacher-role]
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment, assessment-validity, educational-measurement, formative-assessment]
audience: [researchers, instructors, administrators]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods, reporting-interpreting-aied-research]
confidence: high
methods: [benchmark]
translation_of: concepts/ai-ed-evaluation
source_updated: "2026-09-25T09:57:33-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La evaluación de la IA en educación** — el conjunto de métodos, puntos de referencia y criterios que se usan para valorar si las herramientas de [[ai-education|IA en la educación]] (tutores basados en [[llm|LLM]], [[automated-assessment|calificadores automáticos]], sistemas de retroalimentación, agentes) funcionan de verdad: no solo en la precisión titular, sino en la fiabilidad, la calidad [[pedagogy|pedagógica]], la validez y el impacto real en el aprendizaje. Un tema recurrente en la investigación de esta base de conocimiento es que la evaluación debe ser específica de dominio, consciente de la fiabilidad y anclada en el juicio humano y en los resultados educativos, y no en cifras únicas de precisión agregada.

## Preguntas para reflexionar

- ¿Cómo decidiría si una herramienta de tutoría con IA «funciona»? ¿Qué evidencia —más allá de una cifra de precisión titular— le convencería de que mejora realmente el aprendizaje?
- Un hallazgo clave es que la fiabilidad no garantiza la validez: un sistema puede ser muy coherente y aun así juzgar mal qué es una buena enseñanza. ¿Por qué podría equivocarse una IA estable y repetible?
- La evaluación debe ser específica de dominio: un punto de referencia que funciona para una asignatura puede inducir a error en otra. Cuando ve un resultado brillante de un punto de referencia para una herramienta de IA, ¿qué querría comprobar sobre el contexto?
- Los sistemas de «verdad de referencia» con los que se juzga suelen ser discutidos: qué cuenta como respuesta o calificación correcta varía entre especialistas y disciplinas. ¿Cómo complica esa incertidumbre la confianza en cualquier evaluación?
- La investigación muestra que los evaluadores de texto basados en LLM privilegian las conductas verbalizadas explícitamente y ponderan poco el contexto implícito: un «sesgo hacia las señales explícitas». ¿Qué tipos de buena enseñanza podría pasar por alto de forma sistemática una máquina que solo busca lo obvio?
- La evaluación moderna también sopesa el coste ambiental y de infraestructura —energía, hardware— y no solo la calidad de la salida. ¿Debería la [[sustainability|sostenibilidad]] influir en cómo juzga el valor de una herramienta de IA?

## Introducción

La evaluación de la IA en educación abarca varios objetos de valoración distintos. Puede evaluar la **salida** (¿son correctas y fiables la respuesta, la calificación o la retroalimentación de la IA?), el **proceso** (¿apoya la herramienta una evaluación y un aprendizaje válidos y defendibles?) y el **agente** (¿enseña eficazmente y se comporta de forma apropiada un tutor o agente de IA?). Cada uno exige métodos distintos y plantea preguntas de validez distintas.

### Cómo aparece la evaluación de la IA en educación en la investigación

- **Fiabilidad de la salida y verdad de referencia:** [[ground-truth-reliability-aied|Modernizar la verdad de referencia]] sostiene que los problemas de fiabilidad en la evaluación de la IA educativa a menudo se remontan a los propios datos de referencia —las etiquetas de «verdad de referencia» con las que se juzga a los sistemas— y propone cuatro cambios para mejorar la fiabilidad y la validez. [[calibrating-trustworthiness-llm-education-2026|Calibrar la confiabilidad]] codiseña métricas y visualizaciones de evaluación con las partes interesadas para que la confianza en una herramienta de IA se apoye en evidencia demostrada e interpretable.

- **Calificación y puntuación automatizadas:** [[cong-confidence-asag-2026|la calificación de respuestas cortas con LLM]], [[cong-confidence-asag-2026|la calificación automática de respuestas cortas consciente de la confianza]], [[cotal-formative-assessment-scoring-2026|la ingeniería de prompts con la persona en el bucle de CoTAL]] y el [[llm-cognitive-diagnosis-handwritten-math|diagnóstico cognitivo de matemáticas manuscritas]] muestran que los LLM pueden calificar y diagnosticar, pero que la fiabilidad depende de la [[human-in-the-loop-ai|supervisión humana]], del anclaje específico de dominio y de la calibración de la confianza, y no del tamaño bruto del modelo.

- **Calidad pedagógica y alineación:** [[machines-misread-pedagogical-quality|Por qué las máquinas malinterpretan la calidad pedagógica]] documenta el desalineamiento entre personas y máquinas al juzgar qué hace buena a la instrucción, y [[tutoring-effectiveness-index|el Índice de Eficacia de la Tutoría]] predice la calidad del tutor a partir de su conducta docente. [[responsible-assessment-ai-era-stanford-2026|La evaluación responsable en la era de la IA]] y los [[authentic-products-authenticated-processes-2026|procesos autenticados]] sostienen que la evaluación debe ir más allá de las respuestas correctas y preguntarse si la evaluación sigue siendo auténtica, válida y defendible cuando la IA puede producir los «productos» del aprendizaje.
- **Monitorización en producción y calibración de jueces:** [[llm-judge-evaluation-educational-ai-2026|Rohlfs et al. (2026)]] informan de lo que ocurre cuando la evaluación con LLM como juez se ejecuta a escala de producto, a partir de una suite de K-12 que sirve millones de mensajes de docentes y estudiantado cada mes. A medida que el programa maduraba, los falsos positivos pasaron a dominar las alertas de los evaluadores y desviaron la atención del personal analítico hacia fallos que no justificaban un cambio de producto. Tres cambios —paneles de fallo unánime con ejecuciones repetidas del juez, elección del modelo juez por evaluador y rúbricas suavizadas— redujeron los falsos positivos confirmados en un 99% y elevaron la precisión por alerta del 0,6% al 49% en 21 evaluadores desplegados, mientras que un conjunto de fallos flagrantes mantuvo la captura en el 100%. La lección para la práctica evaluativa es que es el punto de operación de un evaluador, y no su precisión titular, lo que decide si una alerta es accionable.

### Por qué es difícil la evaluación de la IA educativa

La evaluación de la IA educativa es difícil por varias razones. Primero, **la fiabilidad no basta**: un sistema puede coincidir con una rúbrica y aun así juzgar mal la pedagogía, como muestra la [[machines-misread-pedagogical-quality|investigación sobre alineación entre personas y máquinas]]. Segundo, **la verdad de referencia es discutida**: qué cuenta como respuesta «correcta», calificación o movimiento docente es en sí mismo un juicio que varía entre disciplinas y especialistas, según la [[ground-truth-reliability-aied|modernización de la verdad de referencia]]. Tercero, **la validez educativa es multidimensional**: la [[assessment-validity|validez de la evaluación]], la [[formative-assessment|evaluación formativa]] y la [[authentic-assessment|evaluación auténtica]] imponen criterios distintos que una única métrica de precisión no puede capturar. Por último, **el objetivo no deja de moverse**: la IA agéntica y los modelos [[multimodal|multimodales]] exigen marcos de evaluación ([[agentic-ai|IA agéntica]], [[tool-invariant-framework-agentic-ai|evaluación invariante respecto a la herramienta]]) en lugar de reutilizar puntos de referencia de modelos de texto. Los hallazgos de evaluación también están sujetos a las mismas limitaciones transversales que afectan a toda la investigación sobre IA educativa: envejecen a medida que la IA mejora, dependen de la reproducibilidad y de prácticas FAIR y pueden apoyarse en sistemas propietarios, así que los resultados de evaluación deben leerse con las salvedades de [[limitations-in-aied-research|limitaciones en la investigación sobre IA educativa]]. Una dimensión adicional y emergente es la **sostenibilidad de recursos**: los despliegues locales informan cada vez más del consumo energético y de los requisitos de hardware (por ejemplo, VRAM, mWh por consulta) junto con la precisión —véanse los [[shen-sustainable-ai-knowledge-base-cs-education-2026|asistentes sostenibles de base de conocimiento locales]]—, de modo que una evaluación completa sopesa el coste ambiental y de infraestructura, y no solo la calidad de la salida.

**La fiabilidad no garantiza la validez.** [[melo-llm-classroom-observation-teach-2026|La validación de la observación de aula basada en LLM]] muestra que un modelo puede ser muy estable en evaluaciones repetidas y seguir desalineado con el juicio experto, y a la inversa, que los modelos que se alinean bien con los especialistas suelen ser más variables: la fiabilidad y la precisión se desacoplan, así que una cifra de precisión de una sola pasada puede exagerar la confiabilidad. El mismo estudio documenta un **sesgo hacia las señales explícitas**: los evaluadores de texto basados en LLM privilegian las conductas verbalizadas explícitamente y ponderan poco la evidencia implícita o contextual (por ejemplo, la [[self-regulated-learning|autorregulación]] sostenida del estudiantado allí donde una rúbrica permite puntuaciones altas en criterios tolerantes a la ausencia), lo que produce un desacuerdo sistemático y no aleatorio. Esto subraya que la fiabilidad de la medición es un requisito previo para una interpretación válida, y no un sustituto de ella, y que la evaluación debe incluir comprobaciones de estabilidad con medidas repetidas junto con la precisión anclada en especialistas.

**La precisión agregada oculta a quién se atiende mal.** [[drawedumath-vlm-struggling-students-2026|Las evaluaciones de modelos de visión y lenguaje en DrawEduMath]] muestran que la precisión global oculta una debilidad sistemática: los modelos rinden peor precisamente con el trabajo del estudiantado que más ayuda pedagógica necesita (trabajo erróneo, de estudiantes con dificultades), así que desagregar la evaluación por competencia del estudiante y estado de error es necesario para no exagerar la capacidad y no ampliar las brechas de rendimiento.
- **Los errores de los puntos de referencia y de los calificadores se confunden con fallos del modelo.** Una recalificación experta de seis puntos de referencia de [[physics-education|física]] muy usados auditó 250 ítems rechazados y atribuyó 143 (57,20%) a defectos del punto de referencia y 95 (38,00%) a errores de los calificadores, dejando solo 12 (4,80%) como errores genuinos del modelo, de modo que el 95,20% de la brecha medida no era atribuible al modelo. Reparar los ítems movió la media@4 de HLE-Physics del 47,28% al 78,66% y la media@5 de CritPt del 32,29% a un 87,50% corregido, convirtiendo una aparente debilidad de los modelos de frontera en una cuasi saturación. La auditoría sostiene que una puntuación reportada es una propiedad conjunta del modelo, el banco de ítems y el calificador, y que la adjudicación experta debe preceder a cualquier afirmación de capacidad extraída de un punto de referencia. ([[frontier-models-physics-benchmark-audit-2026]])

La velocidad de los sistemas que se evalúan es otra restricción. [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] describen el problema temporal directamente: cuando un ensayo a gran escala ya se ha diseñado, impartido, analizado y publicado, la tecnología estudiada puede haber cambiado materialmente, lo que empuja la práctica hacia datos observacionales o de uso débiles justo en el momento en que se necesita evidencia más sólida. Su respuesta no es aceptar diseños más débiles, sino acortar el bucle: microensayos aleatorizados liderados por docentes en ejercicio que conservan el contraste causal y lo repiten a medida que la plataforma evoluciona.


- **La fidelidad de los datos es un problema de evaluación distinto del de la calidad de la salida.** Las cohortes educativas sintéticas que reproducen los estadísticos resumen de cada variable pueden seguir describiendo mal la estructura de los datos: un grafo semanal de proximidad entre estudiantes varió entre 2,6 y 4,9 veces menos a lo largo de un trimestre en las versiones sintéticas que en las cohortes reales, de modo que una puntuación de fidelidad no predice qué análisis sobreviven con datos reales ([[synthetic-educational-data-structural-fidelity-2026|Inoue y Yasutake, 2026]]).

### Conexiones con conceptos relacionados

La evaluación de la IA en educación se sitúa en el centro de los métodos y los riesgos de la base de conocimiento. Operacionaliza la [[assessment-validity|validez de la evaluación]], la [[educational-measurement|medición educativa]] y el [[benchmark|punto de referencia]] dentro de la [[assessment|evaluación]] y la [[automated-assessment|evaluación automatizada]]. Su llamada a la supervisión humana conecta con la [[human-in-the-loop-ai|IA con la persona en el bucle]] y el [[teacher-role|rol docente]], mientras que su atención a la fiabilidad conecta con el [[hallucination-risk|riesgo de alucinación]], la [[automated-assessment|evaluación con IA consciente de la confianza]] y la [[trust-calibration|calibración de la confianza]]. La distinción entre evaluar el rendimiento y evaluar el aprendizaje enlaza con [[genai-performance-vs-learning|rendimiento frente a aprendizaje]] y con el [[student-modeling|modelado del estudiante]]; y la evaluación de agentes pedagógicos conecta con la [[intelligent-tutoring|tutoría inteligente]], el [[llm-training-and-fine-tuning|entrenamiento pedagógico de LLM]] y la [[pedagogical-safety|seguridad pedagógica]].

### Evaluación de las mejoras de aprendizaje

Un objeto central de la evaluación de la IA en educación es la **mejora de aprendizaje**: la mejora medible en conocimiento o habilidad que produce una herramienta de IA (véase [[learning-gains|mejoras de aprendizaje]]). Evaluar las mejoras con rigor exige elegir la medida de resultado adecuada, porque [[genai-performance-vs-learning|el rendimiento y el aprendizaje divergen]]: la IA puede inflar el rendimiento inmediato en tareas asistidas por IA y dejar intacto o reducido el aprendizaje duradero y sin asistencia (véanse [[generative-ai-reduced-study-time-math]] y [[stromberg-generative-ai-learning-penalty-secondary-2026]]). Por eso una evaluación eficaz de las mejoras:

- **Usa medidas de resultado sin asistencia y resistentes a la IA.** La [[generative-ai-guardrails-harm-learning|evidencia sobre salvaguardas]] y la [[summative-assessment|investigación sobre evaluación sumativa]] muestran que las medidas supervisadas, a libro cerrado y sin asistencia —y no los deberes asistidos por IA o el trabajo para llevar a casa— revelan [[learning-gains|mejoras de aprendizaje]] genuinas.
- **Distingue el rendimiento asistido del aprendizaje duradero.** El [[genai-meta-analysis-programming-learning|metaanálisis]] muestra que la IA puede producir grandes ganancias de productividad sin una mejora de aprendizaje significativa (g ≈ 0), así que las evaluaciones deben informar de ambas.
- **Combina medidas pre/post con comprobaciones de validez.** La [[assessment-validity|validez de la evaluación]] y la [[educational-measurement|medición educativa]] fundamentan la medición de las mejoras; la [[genai-educational-outcomes-meta-analysis|revisión metaanalítica]] agrupa tamaños del efecto entre estudios para establecer la evidencia de mejoras del campo.
- **Desagrega por estudiante y por contexto.** Como las [[learning-gains|mejoras de aprendizaje]] varían según la población, el dominio y la configuración de la IA, la evaluación debe informar de mejoras para distintos subgrupos de estudiantes (por ejemplo, por competencia previa, como revelan las [[drawedumath-vlm-struggling-students-2026|evaluaciones de VLM]] según el estado de error) en lugar de un único agregado, y debe conectar los hallazgos de mejoras con la [[meta-analysis-systematic-review|revisión sistemática y metaanálisis]] para situarlos en la base de evidencia más amplia.

Se necesitan puntos de referencia condicionados por el contexto: [[zhang-tutormoments-2026|Zhang et al. (2026)]] sostienen que los puntos de referencia previos de tutoría (MathTutorBench, MRBench, LearnLM) premian un lado del dilema de la asistencia o dan una orientación poco especificada. TutorMoments, en cambio, reproduce puntos de decisión pedagógica identificados por docentes y evalúa si la ayuda del tutor es apropiada para el momento de aprendizaje concreto: [[scaffolding|andamiaje]] frente a rigor.
- **La métrica que elija puede invertir sus conclusiones.** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang et al. (2026)]], al evaluar agentes de enseñanza con IA en la [[medical-education|educación médica]], encontraron que las puntuaciones agregadas no divulgadas de una [[edtech-platform|plataforma educativa]] ordenaban a los agentes casi al contrario que una rúbrica transparente y validada por especialistas de 8 dimensiones de calidad docente (precisión del conocimiento médico, orientación pedagógica, cobertura del conocimiento, calidad del juego de roles, dificultad adaptativa, seguridad médica, implicación y retroalimentación). Las puntuaciones de la plataforma indexan el rendimiento del estudiantado; la rúbrica indexa la conducta docente del agente: elegir la métrica equivocada determina qué agentes se adoptan o se refinan. También encontraron que la indulgencia del LLM como evaluador varía según el modelo (algunos son demasiado indulgentes para discriminar), así que la puntuación automatizada necesita calibración humana y es más fiable en las dimensiones de proceso cognitivo.
- **Ancle las suites de evaluación al aprendizaje medido, no a sus sustitutos.** Los puntos de referencia de capacidad docente, las rúbricas de pedagogía conversacional y la latencia del tutor deben validarse contra mejoras de aprendizaje reales en lugar de tratarse como sustitutos de ellas, y la latencia es en sí misma un eje de evaluación porque determina si el estudiantado se implica siquiera ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).

## Conceptos conectados

- [[interpreting-and-applying-aied-research]]
- [[assessment-validity]] — Validez de la interpretación en la evaluación de la IA en educación
- [[educational-measurement]] — Teoría de la medición para evaluar el aprendizaje
- [[psychometrically-aware-ai]] — Aplicar la psicometría a la evaluación basada en IA
- [[benchmark]] — Puntos de referencia estandarizados para evaluar sistemas de IA
- [[automated-assessment]] — Sistemas de calificación y puntuación basados en IA
- [[learning-analytics]] — Análisis de la conducta de aprendizaje basado en datos
- [[research-methods-aied]] — Métodos de investigación para la IA en educación
- [[learning-gains]] — Medir las mejoras de aprendizaje de las herramientas de IA
- [[formative-assessment]] — Evaluación continua para guiar la instrucción
- [[summative-assessment]] — Evaluación sumativa: formatos resistentes a la IA (oral, supervisada, a libro cerrado)
- [[authentic-assessment]] — Evaluación del rendimiento real y transferible
- [[human-in-the-loop-ai]] — Supervisión humana de la evaluación con IA
- [[trust-calibration]] — Calibrar la confianza en los sistemas de IA
- [[hallucination-risk]] — Riesgo de contenido fabricado en las salidas de IA
- [[intelligent-tutoring]] — Evaluar los sistemas de tutoría con IA
- [[agentic-ai]] — Evaluar la conducta de agentes de IA autónomos
## Artículos conectados
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — Lo que se pierden las puntuaciones de plataforma: evaluación multidimensional de agentes de enseñanza con IA
- [[assessment-latent-structure-human-llm-2026]] — ¿Miden lo mismo los instrumentos de evaluación para las personas y para los LLM? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Evaluar la calidad de exámenes generados por IA: un estudio de campo a gran escala
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Alineación pedagógica neurosimbólica (NSPA)
- [[yasir-llm-tutoring-agents-2026]] — Punto de referencia de clasificación triple para agentes de tutoría con LLM (Yasir et al. 2026)
- [[drawedumath-vlm-struggling-students-2026]] — Evaluar VLM en DrawEduMath: el contenido erróneo es lo más difícil (Lucy et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Evaluar el conocimiento pedagógico de los LLM (CDPK + SEND)
- [[melo-llm-classroom-observation-teach-2026]] — Validación de la observación de aula con LLM: fiabilidad frente a precisión (Melo et al. 2026)
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asistentes locales de base de conocimiento con IA sobre recursos educativos abiertos: evaluación multidimensional
- [[ground-truth-reliability-aied]] — Modernizar la verdad de referencia: cuatro cambios para mejorar la fiabilidad y la validez
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrar la confiabilidad: codiseño de métricas y visualizaciones
- [[teachbench-llm-teaching-evaluation]] — TeachBench: evaluar la capacidad docente de los LLM
- [[machines-misread-pedagogical-quality]] — Por qué las máquinas malinterpretan la calidad pedagógica: alineación entre personas y máquinas
- [[cong-confidence-asag-2026]] — Calificación automática de respuestas cortas con LLM
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: ingeniería de prompts con la persona en el bucle para la evaluación formativa
- [[llm-cognitive-diagnosis-handwritten-math]] — Evaluar LLM para diagnosticar las habilidades cognitivas del estudiantado
- [[tutoring-effectiveness-index]] — El Índice de Eficacia de la Tutoría: predecir la calidad de los tutores de matemáticas con LLM
- [[jeon-isd-agent-bench-2026]] — Punto de referencia de agentes de diseño instruccional
- [[tool-invariant-framework-agentic-ai]] — Un marco invariante respecto a la herramienta para enseñar y evaluar métodos computacionales
- [[valid-student-simulation-llm-2026]] — Hacia una simulación válida del estudiantado con modelos de lenguaje grandes
- [[llm-difficulty-calibration-programming-exams-2026]] — De modelos evaluados a ayudas para la evaluación
- [[socratic-tests-conversational-assessment]] — El fundamento teórico de las pruebas socráticas
- [[responsible-assessment-ai-era-stanford-2026]] — Evaluación responsable en la era de la IA
- [[authentic-products-authenticated-processes-2026]] — De productos auténticos a procesos autenticados
- [[zerkouk-comprehensive-review-its-2025]] — Revisión integral de los sistemas de tutoría inteligente
- [[genai-educational-outcomes-meta-analysis]] — Metaanálisis de los resultados educativos de la IA generativa
- [[zhang-tutormoments-2026]] — Cuando la ayuda no ayuda: evaluar tutores de IA para el esfuerzo productivo
- [[elbench-education-llm-benchmark-2026]] — ELBench: punto de referencia de LLM educativos
- [[teaching-monster-pck-benchmark-2026]] — Teaching Monster: punto de referencia de conocimiento pedagógico del contenido
- [[ai-grading-handwritten-physics-2026]] — Calificación con IA de evaluaciones de física manuscritas (Olimpiada)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilar un modelo de lenguaje autoexplicativo para la analítica del aprendizaje
- [[burneo-can-edtech-close-learning-gaps-2026]] — Evaluación metaanalítica de tecnología educativa adaptativa con IA
- [[xiong-ai-educational-measurement-review-2026]] — El papel de la IA en la puntuación, la psicometría y la evaluación
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Evaluación metaanalítica de los resultados de alfabetización en IA
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluar la tutoría con IA al ritmo de la innovación: microensayos aleatorizados liderados por docentes en una plataforma de tutoría con IA en ciencias de GCSE
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: evaluación de la calidad de ítems de matemáticas basada en procesos
- [[durable-skills-measurement-ai-teammates-2026]] — Hacia una medición escalable de las habilidades duraderas
- [[pivot-generative-video-tutors-stem-2026]] — De la generación de contenido al apoyo al aprendizaje: tutores de vídeo generativo guiados por la pedagogía para el aprendizaje STEM
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen mejoras de aprendizaje equivalentes en el GRE
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que se pierden las métricas de fidelidad: una comprobación estructural de datos educativos sintéticos
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de nuevas preguntas educativas asistidas por IA
- [[llm-judge-evaluation-educational-ai-2026]] — Cuando los evaluadores gritan «que viene el lobo»: lecciones de la evaluación con LLM como juez en producción en IA educativa
