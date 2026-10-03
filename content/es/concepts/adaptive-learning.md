---
title: Aprendizaje adaptativo
created: "2026-09-28T19:11:03-04:00"
updated: "2026-10-02T21:25:27-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Aprendizaje adaptativo** — sistemas educativos impulsados por IA que ajustan el contenido, el ritmo y las estrategias didácticas en función de las características y el desempeño individuales de cada estudiante. El aprendizaje adaptativo es el objetivo operativo de buena parte de la [[ai-education|IA en la educación]] [[research-methods-aied|investigación]]: usar [[student-modeling|modelos del estudiante]] para personalizar la enseñanza.

## Preguntas para reflexionar

- El aprendizaje «adaptativo», «personalizado», «individualizado» y «a medida» se usan a menudo como sinónimos, pero la investigación sugiere que no son lo mismo. ¿Qué supone usted que significa cada palabra y dónde podrían estar equivocadas esas suposiciones?
- Un sistema adaptativo ajusta el contenido y la dificultad a partir de un modelo de lo que usted sabe. ¿Qué podría salir mal si ese modelo se apoya en señales superficiales o poco fiables sobre su aprendizaje?
- Un hallazgo clave es que los sistemas que infieren el dominio a partir de respuestas correctas pueden detener la práctica demasiado pronto, antes de que usted aprenda cuándo debe abstenerse de actuar. ¿Se le ocurre alguna habilidad en la que acertar una y otra vez lo dejara aun así sin preparación para una situación real?
- La sobre-adaptación puede eliminar el esfuerzo productivo que el estudiantado necesita para aprender en profundidad. Si la IA facilita las cosas en cuanto usted se atasca, ¿qué pierde exactamente quien aprende?
- El metaanálisis sugiere que lo que impulsa las [[learning-gains|ganancias de aprendizaje]] es el mecanismo de adaptación y no la generación concreta de herramientas. Si el «cómo» importa más que el «con qué herramienta», ¿qué debería buscar al elegir software adaptativo?
- Los tutores basados en LLM ya pueden adaptar el lenguaje y el estilo de explicación, y no solo la dificultad. ¿Cuándo ayuda al aprendizaje personalizar la forma en que se explica algo y cuándo puede socavar en silencio la propia agencia de quien aprende?

## Introducción

### Mecanismos centrales

- **Bucle medir-modelar-adaptar:** el [[knowledge-tracing|seguimiento del conocimiento]] estima lo que sabe el estudiante, el [[student-modeling|modelado del estudiante]] representa a quien aprende y el sistema adapta la dificultad, el contenido y la [[feedback|retroalimentación]] en consecuencia.
- **Personalización a escala:** los sistemas de [[personalized-learning|aprendizaje personalizado]] usan algoritmos adaptativos para ofrecer rutas de aprendizaje únicas a cada estudiante. [[deeptutor|DeepTutor]] y los [[ai-powered-personalized-learning-elementary-fractions-2026|tutores de fracciones de primaria]] demuestran la personalización adaptativa en la práctica.
- **Secuenciación del contenido:** el [[adaptive-pretesting-retention|pretest adaptativo]] y los [[adapt-adaptive-lesson-plan-transformer|transformadores de planes de clase]] optimizan el orden y el tipo de contenido que se presenta.
- **Integración de los ITS:** los [[intelligent-tutoring|sistemas de tutoría inteligente]] son la plataforma canónica del aprendizaje adaptativo, ya que combinan el diagnóstico con la adaptación.
- **Perfilado y diagnóstico impulsados por AutoML:** los modelos educativos tradicionales tienen dificultades para procesar datos heterogéneos de conducta de aprendizaje procedentes de múltiples fuentes, lo que limita el perfilado de quien aprende y el desarrollo de modelos de diagnóstico. Un marco de búsqueda personalizada de arquitecturas cognitivas neuronales impulsado por [[reinforcement-learning|aprendizaje automático]] automatizado integra datos educativos [[multimodal|multimodales]] con métodos heterogéneos, genera modelos de diagnóstico adaptados a perfiles heterogéneos de estudiantes y sostiene un análisis dinámico y no estático de los procesos de aprendizaje.

### Evidencia sobre la eficacia

La base de conocimiento documenta evidencia mixta: los sistemas adaptativos mejoran los resultados cuando la adaptación se apoya en [[student-modeling|modelos del estudiante]] fiables, pero una adaptación mal calibrada puede perjudicar el aprendizaje. La [[personalized-learning|investigación sobre personalización]] distingue la adaptación eficaz de la personalización superficial. [[khalifeh-redefining-personalized-learning-ai-2026|Las revisiones sistemáticas]] encuentran que el aprendizaje «adaptativo», «personalizado», «individualizado» y «a medida» se usa de forma inconsistente, así que los tamaños del efecto dependen en gran medida de cómo se operacionalice la adaptación, y el campo reclama un marco unificado.

Una revisión PRISMA 2020 que cribó 959 registros hasta quedarse con 22 intervenciones en educación superior sitúa las rutas adaptativas y los sistemas de recomendación entre las principales aplicaciones de la IA, pero la mayoría de los estudios mejoraron la práctica existente en lugar de transformarla ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

**Lo que impulsa la adaptación es la fundamentación pedagógica, no la capacidad técnica.** Una revisión de 15 años sobre 127 estudios de tutoría inteligente encuentra que la mayoría de los sistemas se construyeron en torno a lo que la tecnología puede hacer y no a un principio pedagógico declarado, y sitúa la ganancia media de los ITS en torno al 20% frente a hasta un 98% en la tutoría humana ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

La adopción, y no el mecanismo de adaptación, fue la restricción vinculante en un ECA de distrito de dos años: reducir la inscripción a un solo paso elevó la adopción en la primera sesión de alrededor del 45% al 83% solo con cambios de diseño, y las ganancias por intención de tratar crecieron a medida que subía la adopción ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos et al. (2026)]]).


Una revisión alineada con PRISMA de 44 estudios encuentra que la literatura sobre implicación está sesgada hacia la implicación conductual y es más delgada en la implicación agéntica, e informa de un efecto de novedad —la implicación decae con el tiempo en estudios longitudinales de ALEKS y W-Pal una vez que se desvanece la novedad de la herramienta ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng y Fryer (2026)]]).

### La era de la IA: la adaptación basada en LLM y sus riesgos

La [[generative-ai|IA generativa]] ha ampliado lo que pueden hacer los sistemas adaptativos: los tutores conversacionales [[agentic-ai|agénticos]], el contenido fundamentado en [[rag|RAG]] y la [[intelligent-tutoring|tutoría]] impulsada por [[llm|LLM]] adaptan no solo la dificultad de los problemas, sino también el lenguaje y el estilo de explicación (por ejemplo, [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor|DeepTutor]], [[chudziak-ai-math-tutoring-platform|tutoría adaptativa multiagente]]). Sin embargo, la adaptación basada en LLM introduce riesgos nuevos: sin [[student-modeling|modelos del estudiante]] fiables, la adaptación puede apoyarse en señales superficiales; la sobre-adaptación puede reducir el esfuerzo productivo que el estudiantado necesita (véanse [[desirable-difficulties|dificultades deseables]] y [[cognitive-offloading|dependencia excesiva]]); y el equilibrio entre personalizar y preservar la [[agency|agencia]] de quien aprende es una pregunta de diseño abierta (véase [[agentic-ai|IA agéntica]]). Una variante de adaptación solicitada por quien aprende funciona sin [[student-modeling|modelo del estudiante]] alguno: en el curso de posgrado de Sidorkin (2026) las lecturas se ajustaban solo cuando el estudiantado hacía preguntas de seguimiento para reformularlas, profundizarlas, simplificarlas o localizarlas, y las peticiones orientadas a la comprensión producían de forma fiable un andamiaje más denso (entre 3,4 y 8,7 veces más marcadores definicionales que el texto de referencia), razón por la cual exigir al menos tres preguntas de seguimiento por lectura convirtió el material en una interacción. También traslada la carga adaptativa a quien aprende: aquí la adaptación solo ocurre si el estudiante sabe qué pedir.

### Relación con el aprendizaje personalizado y la tutoría inteligente

El aprendizaje adaptativo se confunde con frecuencia con el [[personalized-learning|aprendizaje personalizado]], pero son distintos. El **aprendizaje adaptativo** es el *mecanismo*: el ajuste en tiempo real del contenido, el ritmo y la dificultad a partir de un modelo de quien aprende. El **aprendizaje personalizado** es el *objetivo más amplio* de adaptar toda la experiencia de aprendizaje a una persona, y la adaptación en tiempo real es una de sus implementaciones. Los sistemas adaptativos son el *medio* canónico hacia la personalización. La [[intelligent-tutoring|tutoría inteligente]] es la *plataforma* clásica: los ITS combinan el diagnóstico (modelado del estudiante, seguimiento del conocimiento) con la adaptación, y los tutores basados en LLM se adaptan de forma conversacional. Junto con el [[personalized-learning|aprendizaje personalizado]], el aprendizaje adaptativo es un miembro del lado aplicado de la familia del [[student-modeling|modelado de quien aprende y la instrucción adaptativa]], ya que consume las representaciones del estudiantado que producen el [[student-modeling|modelado del estudiante]], el [[knowledge-tracing|seguimiento del conocimiento]] y el [[cognitive-diagnosis|diagnóstico cognitivo]].

### Evidencia de la investigación

- **Evidencia [[meta-analysis-systematic-review|metaanalítica]] sobre herramientas adaptativas + IA.** [[burneo-can-edtech-close-learning-gaps-2026|Un metaanálisis del Banco Mundial]] de 14 [[rct|ECA]] agrupa el aprendizaje adaptativo asistido por computador, la tutoría inteligente y la IA generativa en una misma escala y estima una ganancia de aprendizaje media de ~0,125 sd sin diferencias significativas entre las dos generaciones tecnológicas, lo que indica que lo que impulsa las ganancias es el mecanismo de adaptación y no la generación concreta de herramientas.
- **Comparación de algoritmos adaptativos en dominios dinámicos.** [[graph-its-adaptive-algorithms-2026|La investigación sobre ITS basados en grafos]] compara varios algoritmos de aprendizaje adaptativo (incluidos la propagación bayesiana del conocimiento y la lógica difusa intuicionista) en un marco de representación del conocimiento basado en grafos para currículos dinámicos.

- **El aprendizaje por refuerzo como mecanismo de adaptación, mapeado empíricamente.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper y Lugrin (2025)]] sintetizan 89 estudios sobre aprendizaje por refuerzo en educación y encuentran que la adaptación se divide en mecanismos relacionados con el contenido (secuenciación didáctica y programación de contenidos, n = 53) y relacionados con la orientación (pistas, [[feedback|retroalimentación]], selección de actividades, n = 36), y que el aprendizaje por refuerzo muestra superioridad estadísticamente significativa frente a las líneas base con más frecuencia en la adaptación orientativa que en la programación de contenidos. Recomiendan el aprendizaje por refuerzo sin modelo para el aprendizaje adaptativo y advierten de que el aprendizaje por refuerzo clásico superó al aprendizaje por refuerzo profundo en los estudios revisados.

- **La adaptatividad basada en la corrección puede detener la práctica demasiado pronto.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] encontraron que los sistemas adaptativos que infieren el dominio a partir de la corrección corren el riesgo de terminar la práctica antes de que quien aprende se enfrente a contextos en los que debería abstenerse de la acción aprendida, lo que deja sin detectar la sobre-generalización engañosa. Recomiendan incluir tareas detectoras de «no actuar» antes de que se activen las reglas de parada por dominio, de modo que la adaptación ponga a prueba la comprensión condicional (saber cuándo abstenerse de actuar) y no solo la corrección.

- **Una racha de dominio no es aprendizaje duradero.** En un experimento de campo de 6.000 estudiantes de secundaria, una regla de dominio de tres aciertos consecutivos apoyada por IA elevó el rendimiento definido por la plataforma en alrededor de 28,7 puntos porcentuales sin mejorar una prueba diferida una semana después, así que las métricas de dominio necesitan validarse contra el aprendizaje diferido en lugar de sustituirlo ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).
- **Adapte el *tipo* de implicación cognitiva, no solo la dificultad.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] encontraron que las políticas de BKT y de aprendizaje por refuerzo profundo que asignaban ejemplos resueltos guiados (activos) o con errores (constructivos) superaron ambas a la asignación aleatoria en un tutor de lógica con 113 estudiantes (postest 72,3 y 72,5 frente a 65,7), sirviendo el BKT mejor al estudiantado con bajo conocimiento previo y el DRL al de conocimiento alto.

- **Más retroalimentación no es mejor retroalimentación.** En un curso adaptativo de estocástica de ocho semanas (194 estudiantes), la retroalimentación directiva, informativa y transformadora se adoptaron de forma distinta, y la transformadora se asoció con sobrecarga cognitiva en lugar de con una mejor regulación: la adaptatividad tiene que encajar con la fase y la necesidad de quien aprende, no maximizar la densidad de la retroalimentación ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh y Fromm (2026)]]).

- **Los perfiles de implicación como objetivos de adaptación.** [[an-goel-self-directed-modeling-2026|An, Hammock y Goel (2025)]] siguieron a 315 estudiantes en línea que construyeron 822 modelos en VERA y clasificaron su implicación en perfiles de Observación, Construcción y Exploración, y encontraron que el estudiantado tiende a pasar de una conducta centrada en la construcción hacia una Exploración más plena y guiada por hipótesis, mientras que la Observación persiste en todas las fases. Sostienen que el diseño adaptativo y personalizado debería reconocer estos perfiles y orientar la retroalimentación (por ejemplo, recomendando modelos similares o apoyando una comprensión conceptual más profunda) para llevar a quienes observan de forma superficial hacia un modelado más integrador y de ciclo completo.
- **Una memoria que se lee pero no se escribe no es adaptación.** El control de memoria congelada de CoLearn servía elementos fijos mientras seguía leyendo el perfil de quien aprende, y la proporción de elementos dirigidos a una habilidad genuinamente débil cayó de 0,72 a 0,57, con el error de dominio final elevándose por encima de la condición adaptativa ([[colearn-agentic-tutor-co-learning-loop-2026|He et al. (2026)]]).

- **La ganancia vino de la secuenciación y no de un tutor más listo.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung et al. (2026)]] entrenaron un tutor personalizado con aprendizaje por refuerzo guiado por LLM y lo desplegaron en un curso de Python de cinco meses en diez [[k-12|institutos]] de Taipéi, aleatorizando a 770 estudiantes entre secuencias de problemas adaptativas y secuencias fijas de fácil a difícil. La secuenciación adaptativa elevó la puntuación del [[summative-assessment|examen final]] presencial y sin ayuda en 0,156 SD (0,150 SD con controles), mientras que el análisis de mediación atribuyó el efecto casi por completo a la implicación (0,185 SD por el tiempo dedicado a la tarea, 0,149 SD por los intentos) y no a un material más fácil o más difícil, y las ganancias fueron mayores para principiantes y centros de nivel más bajo. La palanca adaptativa fue el orden de la práctica y no la calidad del chat.

- **Mantenga las decisiones de dominio basadas en reglas y confine el aprendizaje automático a la monitorización.** Un programa adaptativo de STEM de ocho semanas para 30 estudiantes de sexto grado gobernó las rutas mediante dominio basado en reglas mientras el aprendizaje automático seguía el rendimiento, manteniendo la adaptación auditable, pero sin pretest y con una sola aula por condición, sus ganancias son una plantilla piloto para validar localmente ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet et al., 2026]]).
- **Adapte el atributo cuello de botella, no el promedio débil.** Un modelado de transiciones de los estados de conocimiento clasificó el pensamiento analítico como el más difícil de adquirir y el más fácil de perder —probabilidad de transición hacia delante más baja 0,31 y hacia atrás más alta 0,22-0,23—, lo que convierte la nueva práctica del atributo señalado en un objetivo de adaptación más preciso que el dominio global ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng y Huang, 2026]]).
- **Adaptación a partir de secuencias de proceso, no de puntuaciones agregadas.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela y Cukurova (2026)]] derivaron reglas de andamiaje minando el *orden* de los turnos de diálogo de 65 estudiantes en tríadas, desplazando el aprendizaje adaptativo de las medidas agregadas de conducta o rendimiento hacia las secuencias de proceso individuales; el máximo andamiaje elevó la conducta centrada en la tarea pero también el guionizado, y el diseño no está probado.

## Conceptos conectados

- [[online-teaching-and-learning]] — Enseñanza y aprendizaje en línea
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — General: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agéntica)
- [[recommender-systems-and-learning-paths]]
## Artículos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobre-generalización engañosa: el dominio adaptativo puede detener la práctica antes de que quien aprende sepa cuándo abstenerse de actuar (An, McLaren y Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — La tutoría con IA no es un monolito: lo que realmente sabemos (informe de Stanford SCALE/NSSA)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Revisión sistemática de la implicación del estudiantado en plataformas de aprendizaje adaptativo
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoría virtual con aprendizaje asistido por computador: un experimento sobre adopción y aprendizaje
- [[making-ai-tutoring-productive-mastery-math-2026]] — Hacer productiva la tutoría con IA: práctica de matemáticas basada en el dominio
- [[chudziak-ai-math-tutoring-platform]] — Tutoría matemática multiagente adaptativa y personalizada (Chudziak y Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefinir el aprendizaje personalizado: revisión sistemática
- [[deeptutor]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — IA específica para tutoría calibrada a la preparación de quien aprende frente a chatbots generales
- [[context-based-ai-secondary-chemistry-2026]] — Instrucción contextual 7E + IA en química de secundaria
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Programa STEM adaptativo basado en IA para el aprendizaje profundo
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnóstico cognitivo bayesiano para rutas de aprendizaje personalizadas
- [[adaptive-scaffolding-cognitive-engagement-its]] — Andamiaje adaptativo ICAP en un ITS (BKT frente a DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Metaanálisis que agrupa herramientas adaptativas y habilitadas por IA en 14 ECA
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Revisión sistemática: las rutas adaptativas entre los principales casos de uso de la integración de la IA en educación superior
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — La secuenciación adaptativa de problemas supera a la secuenciación fija: +0,156 SD en un examen sin ayuda, mediado por la implicación y no por la dificultad (Chung et al. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende de quien aprende en un bucle de coaprendizaje humano-IA
