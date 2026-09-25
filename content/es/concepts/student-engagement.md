---
title: Implicación del estudiantado
created: "2026-09-25T04:03:10-04:00"
updated: "2026-09-25T04:03:10-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-regulated-learning, student-engagement]
technology: [generative-ai, learning-analytics]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
translation_of: concepts/student-engagement
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La implicación del estudiantado**: el grado y la calidad de la participación activa de quien aprende en el proceso de aprendizaje, descompuesta con mayor frecuencia en dimensiones conductual, cognitiva y [[affective-computing|afectiva]]. En la investigación sobre [[ai-education|IA en la educación]], la implicación del estudiantado es a la vez un resultado clave (¿mantiene una herramienta de IA al estudiantado implicado?) y un mecanismo (¿media la implicación entre el diseño de la IA y el aprendizaje?). Se distingue conceptualmente del aprendizaje en sí, porque la implicación es participación en el aprendizaje y no prueba de una ganancia cognitiva, y también de las métricas concretas que se usan para medirla.

## Preguntas para reflexionar

- La página insiste en que la implicación no es lo mismo que el aprendizaje: el estudiantado puede estar conductualmente activo (haciendo clics, dedicando tiempo) y a la vez ser cognitivamente superficial. ¿Dónde ha visto usted una «implicación» alta que produjera poco aprendizaje, y cómo se dio cuenta?
- Piense en un momento en el que estuvo profundamente implicado en lo cognitivo con algo, luchando de verdad con una idea. ¿Qué tenía de distinto respecto a las veces en que solo estaba ocupado o entretenido, y podría una herramienta de IA crear ese estado de forma fiable?
- La implicación se descompone en dimensiones conductual, cognitiva y afectiva que pueden divergir. ¿Por qué cree que quienes investigan insisten en tratarlas por separado en lugar de como una sola cosa, y qué mediría usted para distinguirlas?
- La investigación sugiere que la implicación cognitiva profunda con la IA predice el aprendizaje, mientras que la implicación superficial predice la dependencia excesiva. Si una herramienta «implica» pero de forma superficial, ¿de quién es la culpa: del diseño, de la tarea o de quien aprende?
- ¿Cómo podría una herramienta de IA satisfacer la [[agency|autonomía]], la competencia y la vinculación (las necesidades que hay detrás de la implicación) sin que esas características se conviertan en entretenimiento superficial que desplace el aprendizaje real?

## Introducción

La implicación es un constructo multidimensional arraigado en la psicología educativa. La **implicación conductual** se refiere a la participación, el esfuerzo, la persistencia y la actividad centrada en la tarea. La **implicación cognitiva** se refiere a la profundidad del procesamiento mental: la elaboración, el [[critical-thinking|análisis crítico]], la [[regulation|autorregulación]] y la inversión de esfuerzo mental. La **implicación afectiva** se refiere a reacciones emocionales como el interés, el disfrute, la ansiedad y la identificación con el aprendizaje. Estas dimensiones pueden divergir: el estudiantado puede estar conductualmente activo (haciendo clics, dedicando tiempo) y a la vez ser cognitivamente superficial (aceptando pasivamente la salida), o estar afectivamente interesado y conductualmente distraído. Esa multidimensionalidad es la razón por la que la implicación no debe equipararse con ninguna conducta observable concreta.

### Cómo aparece la implicación del estudiantado en la investigación

- **La implicación como resultado del diseño de IA:** la [[genai-motivation-engagement-2026|investigación sobre la motivación con IA generativa]] muestra que la implicación en el aprendizaje apoyado por [[generative-ai|IA generativa]] sigue a la satisfacción de las necesidades psicológicas básicas ([[self-determination-theory|autonomía, competencia y vinculación]]), de modo que la implicación es el resultado posterior al apoyo motivacional y no de la mera disponibilidad de la tecnología. La implicación suele medirse mediante [[self-report-measures|autoinforme]], mientras que la implicación conductual procede de registros de interacción, y ambas cosas no son intercambiables.

- **Ganancia de implicación sin ganancia de aprendizaje, en un ensayo de aula aleatorizado por conglomerados:** [[domain-specific-chatbot-stem-enthusiasm-2025|Rücker y Becker-Genschow (2025)]] aleatorizaron 195 clases de noveno grado (grupo experimental de 102 estudiantes) a un chatbot de matemáticas específico del dominio o a materiales de diferenciación convencionales para una sola clase sobre el método de Herón para estimar raíces cuadradas. El interés situacional aumentó notablemente en la condición del chatbot (M = 2.63 frente a 2.43, p = 0.00005, d de Cohen = 0.63) y la aceptación en las cuatro dimensiones del [[technology-acceptance-model|Modelo de Aceptación Tecnológica]] fue alta, pero la comparación de rendimiento antes y después no encontró una interacción grupo por tiempo significativa (F(1194) = 2.84, p = 0.094) y la carga cognitiva extrínseca fue ligeramente mayor. El estudio es una de las pocas pruebas aleatorizadas por conglomerados de un chatbot personalizado en [[math-education|matemáticas]] de [[k-12|secundaria]], y su resultado dividido es lo importante: el interés y el [[learning-gains|rendimiento]] avanzaron a ritmos distintos, así que un hallazgo sobre la implicación no es evidencia de aprendizaje.

- **La calidad por encima de la cantidad:** [[critical-engagement-code-completion|La implicación crítica en el autocompletado de código con IA]], [[icap-cognitive-engagement-llm-agents|el análisis del discurso sobre implicación cognitiva]] y [[scaffolding-critical-engagement-genai-minority-students|el andamiaje de la implicación crítica]] muestran que la implicación *profunda* (cognitiva) con la IA predice el aprendizaje, mientras que la implicación *superficial* (conductual) predice la [[cognitive-offloading|dependencia excesiva]] y el desplazamiento del aprendizaje que dominan la literatura sobre riesgos de la base de conocimiento.

- **Frágil y dependiente del contexto:** [[polished-artifacts-fragile-engagement-2026|Artefactos pulidos, implicación frágil]] y [[genai-tutor-engagement-patterns|patrones de implicación en varias instituciones]] encuentran que la implicación varía según la tarea, el contexto y quien aprende: una herramienta de IA que implica profundamente a un estudiante puede producir una conducta superficial de persecución de la salida en otro.

- **Antecedentes motivacionales:** [[ai-availability-student-motivation|La disponibilidad de la IA y la motivación]] muestra que saber que la IA está disponible puede reducir el valor percibido del esfuerzo implicado, en particular en quien aprende de forma novata: la implicación está moldeada por la expectativa, el valor y la competencia percibida tanto como por las características de la herramienta. **[[wang-goal-setting-ai-engagement-2026|Wang y Wang (2026)]]** amplían esto con una explicación desde la teoría del establecimiento de metas sobre **758 estudiantes universitarios de inglés** en aprendizaje asistido por IA, que muestra que el **apoyo del profesorado** mejora directamente la implicación y opera a través de las **metas de aproximación al dominio y de aproximación al rendimiento** del estudiantado (y no de las metas de evitación). Por tanto, la implicación en contextos de IA no es solo un resultado individual o de diseño: también está **andamiada socialmente** por el profesorado y por las orientaciones de meta que se anima a adoptar a quien aprende.

- **La competencia y la emoción como motores de la implicación:** [[chatbot-engagement-genai-competency-emotion-2026|Zhao et al. (2026)]] modelan **871 estudiantes universitarios** que interactúan con un chatbot de [[llm|LLM]] y encuentran que la **competencia en IA generativa** predice la implicación con el chatbot tanto directamente como indirectamente a través de las **emociones positivas** (la vía afectiva), y que tanto la competencia como la emoción positiva predicen la implicación y las emociones positivas de aprendizaje. La implicación es, por tanto, a la vez un resultado de *habilidad* y un resultado *afectivo*: quien aprende que carece de [[teacher-ai-competency|competencia en IA]] y experimenta ansiedad o frustración se desimplica, lo que tiene implicaciones para la formación en [[ai-literacy|alfabetización en IA]] como intervención sobre la implicación y no solo como meta de habilidad.

- **Implicación cognitiva asociada a la disciplina en el chat entre estudiantado e IA.** [[student-ai-conversations-cognitive-engagement-2026|Chang y Li (2026)]] muestran que las indicaciones del estudiantado a la IA codifican en promedio ~62% más de demanda cognitiva de orden superior, pero los perfiles de implicación según los niveles de Bloom difieren marcadamente por disciplina ([[stem-education|STEM]] con predominio de Aplicar 20.8%, lenguas con predominio de Comprender 31.7%, ciencias sociales con predominio de Crear 33.8%). Con un diseño intraindividual, encontraron que los mismos estudiantes produjeron significativamente más indicaciones de orden superior en asignaturas de ciencias sociales que en las de STEM (p < .001), con una variación a nivel de asignatura superior a la variación a nivel de estudiante, evidencia de que la implicación cognitiva con la IA está moldeada por el contexto disciplinar y no solo por el estilo individual.

- **La [[ai-feedback-quality|retroalimentación con IA]] sostiene la activación conductual.** El experimento de laboratorio de campo de un semestre de [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] encontró que el estudiantado que recibió retroalimentación individual de GPT-4 sobre tareas abiertas mantuvo la participación más alta a lo largo de ocho tareas semanales (~50% en la última, frente a ~30% en los grupos de retroalimentación del profesorado o entre pares) y escribió ~29 caracteres más por respuesta: la retroalimentación individual con IA activó la implicación tanto en el margen extensivo (participación) como en el intensivo (esfuerzo por respuesta), aunque el estudiantado valoró ligeramente mejor la [[peer-assessment|retroalimentación entre pares]].

- **Predecir el uso académico de la IA a partir de constructos de aprendizaje.** Un marco exploratorio de [[reinforcement-learning|aprendizaje automático]] analizó datos de encuesta de 166 estudiantes universitarios para identificar constructos relacionados con el aprendizaje asociados al uso académico previsto de ChatGPT, usando análisis SHAP para mantener la [[explainable-ai|interpretabilidad]]. Los hallazgos informan de cómo la implicación, el apoyo al aprendizaje y otros constructos dan forma a la incorporación de herramientas de IA al trabajo académico por parte del estudiantado.

### Medir la implicación: el problema de la elección de la métrica

La implicación se operacionaliza mediante una serie de señales observables. Las **métricas conductuales** miden lo que quien aprende *hace* (tiempo en la tarea, recuentos de actividad, frecuencia de interacción, persistencia); las **métricas cognitivas** miden cómo *piensa* (profundidad del procesamiento, implicación crítica, análisis del discurso); las **métricas afectivas** miden cómo se *siente* (emoción, motivación, interés); y las **métricas contextuales** capturan la multitarea y la atención. La investigación sobre IA en la educación combina cada vez más estas métricas y trata la implicación como un mecanismo mediador entre el diseño de la herramienta de IA y los [[learning-gains|resultados de aprendizaje]], en lugar de como un resultado en sí mismo.

- **Seis familias de aplicaciones de IA y medición multimétodo:** [[ai-student-engagement-online-learning-review-2025|la revisión sistemática de Zhou (2025)]] de 24 estudios de WoS mapea seis aplicaciones de IA para la implicación: los [[conversational-ai|chatbots]] en el diseño de cursos, el reconocimiento de emociones, facial y de voz y el seguimiento ocular, el aprendizaje automático para el análisis de datos, el apoyo a la interacción entre profesorado y estudiantado, la retroalimentación y las recomendaciones personalizadas, y los bots impulsados por IA en entornos de aprendizaje inteligentes. Encuentra que integrar varias modalidades de IA y varias fuentes de datos produce una visión más precisa y en tiempo real de la implicación cognitiva, emocional y conductual que los enfoques de una sola fuente, lo que refuerza el problema de la elección de métrica anterior.

La elección de la métrica es definitoria: un estudio que mide la implicación como *tiempo en la tarea* puede concluir que una herramienta de IA mejora la implicación cuando el estudiantado pasa más tiempo interactuando con ella, mientras que un estudio que mide la implicación como *procesamiento crítico* puede llegar a la conclusión opuesta con la misma herramienta. Por eso la investigación de la base de conocimiento distingue la implicación (participación) del aprendizaje (ganancia cognitiva real), véase [[genai-performance-vs-learning|rendimiento frente a aprendizaje]], y por eso las métricas de implicación deben validarse contra aquello que afirman medir.

- **La implicación como señal frágil y dependiente de la situación:** [[polished-artifacts-fragile-engagement-2026|Artefactos pulidos, implicación frágil]] y [[genai-tutor-engagement-patterns|patrones de implicación en varias instituciones]] encuentran que la implicación varía según el contexto, la tarea y quien aprende: la misma herramienta produce una implicación fuerte en algunos estudiantes y una conducta superficial de persecución de la salida en otros.

- **Telemetría conductual de las plataformas de aprendizaje:** [[engagement-forecasting-its|La previsión del esfuerzo y el progreso]], [[learning-engagement-assistant-lea|el asistente de implicación en el aprendizaje]], [[engagement-assessment-video|la evaluación de la implicación en vídeo]] y [[interactive-learning-dashboards-engagement|los cuadros de mando de aprendizaje]] traducen señales conductuales y fisiológicas (atención, actividad, persistencia) en métricas de implicación que se usan para la retroalimentación adaptativa y la intervención del profesorado.

- **La detección fisiológica añade una modalidad, y un problema de línea base.** [[e3sense-multimodal-learner-engagement-sensing-2026|E3Sense]] coloca conjuntamente EEG con electrodos secos, gafas de seguimiento ocular y electrodos electrodérmicos en la frente y predice 450 valoraciones de implicación a nivel de segmento de 30 participantes universitarios en una escala ordinal de cinco niveles: AdaBoost sobre la representación [[multimodal]] fusionada alcanzó un 75.0% de precisión equilibrada dentro de un nivel, frente al 63.0% de predecir siempre la valoración más común. Lo estrecho de esa diferencia es lo importante: el crédito de dentro de un nivel entrega a una línea base sin sensores la mayor parte de su puntuación cuando las valoraciones están sesgadas, y preguntar al estudiantado qué significa para él la implicación movió la misma medida del 64.6% al 71.5%, evidencia de que la etiqueta de [[self-report-measures|autoinforme]], y no solo el sensor, decide qué pueden afirmar esas analíticas.

- **La implicación como señal de modelado del estudiantado:** [[engagement-intensity-learner-modeling|La intensidad de la implicación como señal de modelado del estudiantado]] usa la fuerza de la implicación para informar sistemas de IA adaptativos, y sitúa las métricas de implicación como entradas del [[student-modeling|modelado del estudiantado]] y del [[adaptive-learning|aprendizaje adaptativo]], y no solo como salidas de evaluación.

### Implicación frente a aprendizaje

Un tema central en la investigación de la base de conocimiento es que la implicación y el aprendizaje deben distinguirse. Las herramientas de IA que generan una implicación alta (tiempo en la tarea, volumen de interacción) pueden no producir aprendizaje si esa implicación es pasiva o sustituye el [[cognitive-offloading|trabajo cognitivo]] de comprender, véase [[genai-performance-vs-learning|rendimiento frente a aprendizaje]]. A la inversa, el esfuerzo productivo y las [[desirable-difficulties|dificultades deseables]] pueden producir aprendizaje incluso cuando la implicación superficial parece menor. Por tanto, lo mejor es tratar la implicación como un *mecanismo*, valioso en la medida en que refleja o habilita un [[cognitive-psychology|procesamiento cognitivo]] significativo, y no como un resultado terminal.

La distinción no es académica. [[pramod-agentic-ai-motivational-pathways-2026|Pramod y Patil (2026)]] sitúan la implicación en el centro de su modelo PLS-SEM, entre la motivación y la presencia social por un lado y el rendimiento *percibido* por el otro: el coeficiente más grande de su modelo, y aun así una percepción y no una medida del aprendizaje.

### La pedagogía media en el efecto de la IA sobre la implicación

Una síntesis sistemática sobre la [[higher-ed|IA en la educación superior]] ([[long-ai-higher-ed-engagement-teaching-methods-2026|Long et al., 2026]]) subraya que **el método de [[teacher-role|enseñanza]] en el que se inserta una herramienta de IA es el mediador decisivo** de si esta implica al estudiantado. Los chatbots, los sistemas adaptativos y la analítica predictiva mejoran la implicación sobre todo cuando se despliegan dentro de pedagogías interactivas (aulas invertidas, [[project-based-learning|aprendizaje basado en proyectos]] y [[feedback|bucles de retroalimentación]] andamiados) y no como herramientas aisladas. La revisión lo formaliza como el **modelo PMAISE** (mediación [[pedagogy|pedagógica]] de la IA para la implicación del estudiantado), que mapea la alineación entre las [[ai-technologies|tecnologías]] de IA, las estrategias pedagógicas y las dimensiones afectiva, conductual y cognitiva de la implicación. La implicación resultante es, por tanto, coproducida por la herramienta *y* por el [[learning-design|diseño instruccional]] que la rodea: la misma IA puede amplificar la implicación en una pedagogía e inhibirla en otra.

### Conexiones con conceptos relacionados

La implicación del estudiantado se conecta con la [[motivation|motivación]] y la [[self-determination-theory|teoría de la autodeterminación]] como sus motores psicológicos, y con la [[student-experience|experiencia del estudiantado]] como el contexto vivido. Su medición se apoya en la [[learning-analytics|analítica del aprendizaje]] y la [[educational-measurement|medición educativa]], que aportan las herramientas [[quantitative-research|cuantitativas]] para operacionalizar las dimensiones anteriores. La distinción entre implicación profunda y superficial se vincula directamente con el [[self-regulated-learning|aprendizaje autorregulado]] (quien se autorregula se implica de forma estratégica), con la [[cognitive-offloading|descarga cognitiva]] y la [[cognitive-offloading|dependencia excesiva]] (la dependencia superficial como modo de fallo) y con la [[metacognition|metacognición]]. En el diseño de sistemas, las señales de implicación alimentan el [[student-modeling|modelado del estudiantado]] y el [[adaptive-learning|aprendizaje adaptativo]], y los resultados de implicación aparecen en las evaluaciones de [[research-methods-aied|métodos de investigación]] de las intervenciones de IA en la educación.

- **Las características de quien aprende moderan las clases dialógicas con TTS (2026):** en clases dialógicas de docente-estudiantado, estudiantado-estudiantado y docente-docente generadas con LLM+TTS, el estilo de [[experiential-learning|aprendizaje experiencial]] y la disposición al pensamiento crítico interactuaron significativamente con el formato dialógico en la motivación basada en el modelo ARCS, lo que indica que el contenido dialógico generado por IA motiva de forma diferencial según el perfil de quien aprende ([[tts-dialogue-lessons-learner-characteristics-2026]]).

- **Ganancias específicas de cada dimensión en primaria (2026):** un programa de nueve semanas de [[writing-education|escritura]] en L2 apoyado en IA generativa con 301 estudiantes de 5.º y 6.º de primaria aumentó la implicación conductual y emocional, pero dejó sin cambios la implicación cognitiva y metacognitiva, y sus autores señalan la reducción de la automonitorización durante la escritura como un riesgo permanente ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]). El patrón es un caso concreto de la distinción entre implicación y aprendizaje anterior: más actividad y más disfrute no se tradujeron en un procesamiento más profundo.

- **La disociación puede ir en la dirección contraria (2026):** en un curso vocacional de diseño de interiores de 12 semanas, un estudio inmersivo de RV con un asistente docente LLM integrado elevó la implicación cognitiva (d = 0.90) y conductual (d = 0.75) frente a la instrucción tradicional [[project-based-learning|basada en proyectos]], mientras que la implicación afectiva no difirió de forma significativa (d = 0.38), justo lo inverso del caso de escritura en L2 anterior ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). Las ganancias cognitivas y conductuales vinieron aquí acompañadas de una carga cognitiva declarada *menor*, que los autores atribuyen a que el asistente absorbió el esfuerzo de búsqueda e integración interdisciplinar. Leídos junto al caso de escritura, los dos estudios sugieren que qué dimensión de la implicación mueve una intervención apoyada en IA es una propiedad del diseño ([[collaborative-learning|colaboración]] inmersiva con mucho discurso frente a apoyo individual a la escritura) y no de la asistencia con IA en general, y que no puede darse por supuesta una ventaja afectiva a partir de una retroalimentación de alta fidelidad o inteligente.

- **La alfabetización en IA actúa sobre la implicación a través de recursos psicológicos (2026):** un estudio de mediación moderada con 1,198 estudiantes de grado en Zhengzhou (China) ([[ai-literacy-learning-engagement-psych-capital-2026|Wang, 2026]]) modeló la implicación como resultado de la [[ai-literacy|alfabetización en IA]] y no como un subproducto del uso de la herramienta. La alfabetización en IA predijo la implicación en el aprendizaje directamente y también indirectamente al construir capital psicológico, con la vía indirecta aportando aproximadamente la mitad del efecto total: mediación parcial, de modo que una competencia tecnológica se convierte en implicación solo en parte a través de los recursos psicológicos que genera. El compromiso profesional, una variable basada en la identidad, moderó el vínculo entre capital psicológico e implicación sin tener ningún efecto directo propio, y la traducción del capital psicológico en implicación fue marcadamente más fuerte en el estudiantado que se veía encaminado a la profesión. El patrón es el caso disponible más claro del punto anterior de que las características de quien aprende condicionan cómo la IA afecta a la implicación.

## Conceptos conectados

- [[learners]] — El estudiantado: el paraguas de los conceptos del lado de quien aprende
- [[pedagogical-partnerships]] — Alianzas pedagógicas
- [[community-of-inquiry]] — Comunidad de indagación (la implicación agéntica como dimensión de la CoI)
- [[eportfolio]]
- [[online-teaching-and-learning]] — Enseñanza y aprendizaje en línea
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[student-modeling]]
- [[adaptive-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[framing-ai-use-for-students]]
- [[stakeholders]] — Paraguas: las personas y los públicos de la educación con IA (estudiantado, profesorado, diseñadores, administración, responsables de políticas)
- [[self-report-measures]]
- [[productive-failure]]

## Artículos conectados

- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG confinado en la cabeza, seguimiento ocular y EDA predicen valoraciones de implicación de cinco niveles, mientras que las definiciones del propio estudiantado desplazan el mapeo (Anupkrishnan et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-online-education-engagement-satisfaction-2026]]
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — La IA en la educación superior: revisión sistemática de la implicación y papel mediador de los métodos de enseñanza
- [[genai-motivation-engagement-2026]] — Impact of Generative AI on Student Motivation and Engagement
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Measuring Critical Engagement in AI Code Completion
- [[icap-cognitive-engagement-llm-agents]] — Measuring Cognitive Engagement in Collaborative Discourse
- [[genai-tutor-engagement-patterns]] — Not All Students Engage Alike: Multi-Institution Patterns
- [[polished-artifacts-fragile-engagement-2026]] — Polished Artifacts, Fragile Engagement
- [[ai-availability-student-motivation]] — "Why Put in This Much Effort?": How AI Availability Shapes Motivation
- [[genai-performance-vs-learning]] — Distinguishing Performance Gains From Learning
- [[scaffolding-critical-engagement-genai-minority-students]] — Scaffolding Critical Engagement With GenAI
- [[engagement-intensity-learner-modeling]] — Engagement Intensity as a Learner-Modeling Signal
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant
- [[engagement-assessment-video]] — Engagement Assessment in Video Learning
- [[engagement-forecasting-its]] — From Heuristics to Analytics: Forecasting Effort and Progress
- [[interactive-learning-dashboards-engagement]] — Interactive Learning Dashboards and Engagement
- [[young-people-learning-generative-ai-rapid-review-2026]] — Las ganancias afectivas son comunes pero son indicadores débiles del aprendizaje
- [[adaptive-scaffolding-cognitive-engagement-its]] — Andamiaje ICAP adaptativo en un ITS (BKT frente a DRL)
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Interacciones entre las características de quien aprende y el formato dialógico con TTS
- [[wang-goal-setting-ai-engagement-2026]] — Teoría del establecimiento de metas: apoyo del profesorado, metas de logro e implicación en el aprendizaje del inglés asistido por IA (758 estudiantes chinos)
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — La motivación del estudiantado y la satisfacción de necesidades en aulas con IA generativa (Schweder, Hagenauer y Raufelder 2026)
- [[chatbot-engagement-genai-competency-emotion-2026]] — La competencia en IA generativa y la emoción como motores de la implicación con chatbots (Zhao et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Implicación cognitiva asociada a la disciplina según los niveles de Bloom en las conversaciones entre estudiantado e IA (Chang y Li 2026)
- [[determinants-chatgpt-use-higher-education-2026]] — Determinantes de ML/SHAP del uso futuro de ChatGPT en la educación superior
- [[gpt4-feedback-student-activation-2026]]
- [[genai-writing-program-primary-l2-motivation-engagement]] — Ganancias de implicación específicas de cada dimensión en primaria (Lu et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Implicación cognitiva y conductual al alza, implicación afectiva plana, en un estudio inmersivo de RV con ABP (Jin et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Ensayo de matemáticas de secundaria aleatorizado por conglomerados: el interés situacional subió con un chatbot personalizado mientras que el rendimiento en la prueba no (Rücker y Becker-Genschow 2025)
- [[ai-literacy-learning-engagement-psych-capital-2026]] — La alfabetización en IA impulsa la implicación directamente y a través del capital psicológico, amplificado por el compromiso profesional (Wang 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
