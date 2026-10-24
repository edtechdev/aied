---
title: IA con intervención humana (HITL)
created: "2026-09-25T04:31:15-04:00"
updated: "2026-10-24T08:22:32-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-24T06:14:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

> **IA con intervención humana** — el patrón de diseño en el que los [[ai-technologies|sistemas de IA]] educativos intercalan de forma estratégica la generación automatizada con el juicio experto humano, preservando la calidad y la seguridad [[pedagogy|pedagógicas]] mientras se escala la producción. En lugar de automatizar por completo la evaluación, la retroalimentación o la instrucción, la HITL mantiene a una persona (docente, especialista en la materia o estudiante) en el bucle de decisión allí donde su juicio tiene el mayor valor marginal: para evaluar la calidad, dirimir los casos límite y proteger la [[agency|agencia del estudiante]] y la seguridad. La pregunta central de diseño no es *si* incluir a las personas, sino *dónde* en la cadena de proceso su supervisión es más valiosa y menos reemplazable.

## Preguntas para reflexionar

- La pregunta central de diseño de la HITL no es si incluir a las personas, sino dónde en la cadena de proceso su juicio es más valioso. En un sistema de evaluación o retroalimentación con IA, ¿en qué punto insistiría usted en que una persona permanezca en el bucle?
- Los estudios sobre la [[automated-question-generation|generación de preguntas]] con IA hallaron que los ordenadores manejan bien la claridad y la validez, pero que las personas siguen siendo necesarias para los distractores significativos y para una buena retroalimentación. ¿Por qué algunas partes del juicio educativo podrían resistirse a la automatización?
- Una evaluación halló que tres LLM daban recomendaciones de apoyo al estudiantado inconsistentes e insensibles, y concluyó que el juicio humano sigue siendo necesario antes de que la IA asesore sobre el estudiantado. Cuando una IA «recomienda» apoyo para un estudiante con dificultades, ¿qué podría salir mal si ninguna persona lo revisa?
- La página sugiere que las personas y los algoritmos detectan tipos distintos de problemas: automatizar lo que es verificable con precisión y preservar el juicio allí donde el matiz es irreemplazable. ¿Dónde está, en su propia práctica, la frontera entre ambas cosas?
- Mantener a una persona en el bucle se enmarca como una protección de la agencia y la seguridad de quien aprende, y no solo de la calidad. ¿Cómo podría la automatización plena cambiar de forma sutil la percepción que el estudiantado tiene de quién es responsable de su aprendizaje?
- Si la IA se vuelve más autónoma, la supervisión HITL se describe como una barrera de seguridad nuclear. ¿A qué nivel de autonomía de la IA se sentiría usted incómodo, y qué le dice esa incomodidad sobre dónde corresponde la supervisión?

## Introducción

La HITL es una respuesta a los límites y los riesgos de la [[ai-education|IA en educación]] plenamente autónoma: los sistemas automatizados pueden generar a escala, pero carecen del juicio contextual, [[ethics|ético]] y pedagógico que aportan el profesorado y las personas expertas. Dos implementaciones recientes ilustran arquitecturas distintas:

- **La intervención humana es insuficiente si la persona solo aprueba.** [[learning-analytics-genai-learning-design|Rienties, Divjak y Law (2026)]] sostienen que una agencia significativa exige la capacidad de comprender, contestar, rediseñar y a veces rechazar las recomendaciones apoyadas por IA, y no simplemente aprobar decisiones moldeadas en otra parte.

El apoyo prescriptivo es un ámbito en el que se sostiene cada vez más que la supervisión humana no es opcional. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] comprobaron si tres LLM podían recomendar planes de apoyo al estudiantado a partir de indicadores de [[learning-analytics]] y hallaron una sensibilidad limitada a la necesidad y una acusada inconsistencia entre modelos, por lo que concluyeron que el juicio con intervención humana sigue siendo necesario antes de que el asesoramiento prescriptivo con [[llm]] pueda desplegarse de forma segura y ética.

Retener la respuesta preferida por el sistema es protector y no correctivo: en un debate multiagente que nunca revelaba una posición recomendada, el cambio perjudicial hacia una respuesta de IA incorrecta cayó del 42,0–60,5% al 5,7–8,2%, a la vez que también cayó la adopción de consejos correctos ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

Una tercera arquitectura sitúa el juicio humano *antes* del modelo en lugar de en su salida. En el estudio de [[lee-learner-question-types-ai-education-2026|Lee, Atif y Kang (2026)]] sobre la clasificación de las preguntas del estudiantado, tres personas expertas de nivel doctoral gobernaron toda la cadena de proceso: refinaron las definiciones operativas de cada rol [[constructivist]], etiquetaron de forma independiente hasta que el kappa de Fleiss subió de 0,60 a 0,83 tras la resolución de discrepancias, y validaron los ítems retrotraducidos y parafraseados que se usaron para equilibrar el conjunto de entrenamiento.

## CODE-GEN: generación de preguntas de opción múltiple con intervención humana

Duan et al. (2026) construyeron un sistema [[rag]] [[agentic-ai|agéntico]] con dos agentes:
- **Agente generador** — produce preguntas de programación de opción múltiple alineadas con los objetivos de aprendizaje del curso
- **Agente validador** — evalúa la calidad en siete dimensiones pedagógicas

**Evaluación:** 6 personas expertas en la materia juzgaron 288 preguntas generadas por IA. Tasas de éxito validadas por personas: **79,9%–98,6%** según la dimensión.

**Dimensiones en las que la IA es fuerte (carga humana baja):**
- Claridad de la pregunta, validez del código, alineación con los conceptos, validez de la respuesta correcta

**Dimensiones que requieren personas (carga humana alta):**
- Diseño de distractores pedagógicamente significativos
- [[feedback]] explicativa de alta calidad

Idea estratégica: el esfuerzo humano debe concentrarse allí donde el juicio didáctico es irreemplazable; la verificación computacional puede automatizarse por completo.

## MAIC: generación de guiones con intervención humana

Yu et al. (2024) desplegaron un aula multiagente (agente [[teacher-role|docente]], agente de ayudantía y arquetipos de compañeros de clase) en la Universidad de Tsinghua con más de 500 estudiantes y más de 100.000 registros de aprendizaje. El profesorado participa en la generación de guiones y en su supervisión, lo que garantiza que el aumento con IA a gran escala no desplace la experiencia pedagógica.

## PedaCo: doble control para la generación de vídeo con IA

Kim, Baek y Kwak (2026) extienden la HITL al [[video-education|vídeo didáctico generado por IA]] mediante **PedaCo** (cocreación pedagógica), una cadena de proceso con dos capas de control complementarias que hacen efectiva una *resistencia fundamentada* anclada en la teoría cognitiva del aprendizaje multimedia (CTML) de Mayer. La **primera capa** sitúa a la persona en la fase de guion: un LLM redacta un guion, un revisor con IA señala posibles vulneraciones de la CTML (por ejemplo, «la escena 3 introduce términos técnicos sin explicación previa»), y el profesorado decide aceptar, revisar o regenerar. La **segunda capa** ejecuta métricas automatizadas tras la síntesis sobre coherencia, redundancia, contigüidad temporal, modalidad y calidad de la imagen, que el profesorado revisa. En un estudio intrasujeto (23 docentes), el enfoque basado en la revisión mejoró todos los principios de la CTML (valoración media de 3,07→3,86, p<0,01), y el profesorado puntuó la eficiencia de producción con 4,26/5: una fricción percibida como productiva y no como gravosa. El principio de diseño se hace eco de la síntesis sobre HITL de esta base de conocimientos: las personas y los algoritmos detectan *distintos* tipos de problemas, de modo que los sistemas más eficaces automatizan allí donde la verificación computacional es precisa (la sincronización temporal) y preservan el juicio humano allí donde el matiz pedagógico es irreemplazable (el tono, la adecuación al público).

La ubicación puede importar más que la presencia: el personal profesional valoró una herramienta de autoría de historias sociales como muy usable (SUS 86,8), pero informó de que la revisión llegaba demasiado tarde, porque las restricciones culturales y clínicas fijadas antes de la generación — un abaya en lugar de ropa urbana occidental — son más difíciles de recuperar editando la salida después ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Por qué importa la HITL en la era de la IA

El diseño con intervención humana se ha vuelto central en los debates de esta base de conocimientos sobre la [[agentic-ai|IA agéntica]] y el [[reducing-ai-misuse|uso responsable de la IA]] por varias razones convergentes:
- **Seguridad pedagógica.** La [[pedagogical-safety]] exige que la IA con autoridad didáctica real mantenga supervisión humana, de modo que los errores, sesgos o salidas dañinas se detecten antes de llegar a quienes aprenden. Esto es especialmente importante en el caso de los agentes autónomos que [[agentic-ai|persiguen objetivos de forma proactiva]].
- **La supervisión es rara en la práctica, no solo en la teoría.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] hallaron que la gobernanza integrada robusta y la supervisión con intervención humana rara vez se manifestaban en 474 sistemas educativos de IA agéntica, incluso mientras crecían la autonomía de tarea única y la colaboración multiagente: la brecha entre el principio de diseño y la práctica desplegada.
- **La pregunta crítica es cómo se hace accionable el bucle, no cuánto participan las personas.** Una visión desde las ciencias del aprendizaje sostiene que organizar el aprendizaje en torno a la captura de datos, la interpretación computacional y la respuesta probable hace que la acción pedagógica dependa de lo que los sistemas pueden detectar y sobre lo que pueden actuar, y que las alertas y las clasificaciones de implicación interpretan a quien aprende antes de que actúe ningún docente ni estudiante ([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **Validez y control de calidad.** La HITL es una puerta de calidad para la [[automated-assessment|evaluación automatizada]] y la generación: las personas dirimen allí donde la puntuación automatizada no es fiable (véase la [[llms-do-not-grade-essays-like-humans-2026|investigación sobre la calificación de ensayos con LLM]] en [[research-methods-aied|métodos de investigación]]) y validan los ítems generados. Una revisión [[meta-analysis-systematic-review|sistemática]] guiada por PRISMA de 42 estudios sobre calificación y retroalimentación (2023–2025) llega explícitamente a la misma conclusión: los LLM igualan a los evaluadores humanos en tareas cortas y bien estructuradas, pero no pueden sustituir plenamente el juicio humano en el trabajo complejo, abierto o subjetivo, y la máxima eficacia de calificación se alcanza en sistemas híbridos que combinan la calificación impulsada por IA con la supervisión y la verificación del profesorado ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] muestran de forma concreta dónde cae esa frontera: ChatGPT-5 igualó al profesorado en los ítems objetivos de exámenes de farmacia (CCC 0,935–1,000), pero no fue fiable en los ítems de respuesta corta y de ensayo incluso cuando se le proporcionaba una rúbrica, lo que llevó a los autores a recomendar una calificación híbrida con revisión humana para las evaluaciones complejas, subjetivas o de altas consecuencias.
 La repetición no sustituye a esa supervisión: al recalificar entregas idénticas en cinco días distintos, el mismo modelo reprodujo sus propios resultados con un alfa de Krippendorff de solo 0,625, con la variación concentrada en las notas intermedias y las notas A y F ausentes de los recuentos de las cinco sesiones ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Agencia de quien aprende.** Mantener a una persona en el bucle preserva la [[agency]] y sostiene el [[self-regulated-learning]], contrarrestando la [[cognitive-offloading|dependencia excesiva]] que puede inducir una asistencia plenamente autónoma.

- **El propio estudiantado sitúa a la persona en el extremo de altas consecuencias.** Entre 93 estudiantes de grado, el 81,7% prefirió la calificación humana para un trabajo final que valía el 40% de la nota, 75 de 93 querían que la IA asistiera en lugar de reemplazar a quienes califican, y 69 querían que la calificación con IA fuera siempre revisada por una persona ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Confianza y calibración.** La supervisión humana transparente sostiene la [[trust-calibration]]: quienes aprenden y quienes enseñan saben que una persona cualificada respalda el sistema.
- **Los criterios visibles antes de la revisión elevan la concordancia.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] hallaron que mostrar las métricas de fiabilidad a quienes revisaban mientras comparaban respuestas de LLM elevaba la concordancia entre evaluadores de un alfa de Krippendorff de 0,3987 a 0,4931, mientras que añadir más medidas añadía carga cognitiva sin contrapartida.
- **La agencia acotada como arquitectura, no como advertencia.** El marco AGAI-HE de [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] para el apoyo al aprendizaje [[agentic-ai|agéntico]] integra la supervisión en el propio modelo, como una tercera capa junto a las capas de flujo de trabajo pedagógico y de apoyo agéntico: define el uso aceptable de la IA, los límites pedagógicos, las reglas de [[privacy]], los [[ai-use-disclosure|requisitos de divulgación]], la verificación de fuentes, los puntos de control del profesorado, los mecanismos de [[academic-integrity|integridad]] y la responsabilidad humana final, y exige que cada función agéntica se remita a un requisito de aprendizaje, a un propósito de evaluación o a un control de gobernanza. Es una concreción del principio de que la HITL es una propiedad del diseño de sistemas y no una declaración de política, y el estudio de percepción de los autores con 130 estudiantes recuerda que añadir orquestación agéntica bajo esa supervisión no se registró, por sí solo, como un mejor apoyo al aprendizaje que un chatbot.
- **La frecuencia con que mira la persona es en sí misma una decisión de diseño.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] separa la *frecuencia* de la supervisión de su ubicación: la HITL de alta frecuencia, que revisa cada salida de la IA antes de que llegue al estudiantado, compra control de calidad, detección rápida de errores, rendición de cuentas y calibración continua, pero puede anular la eficiencia que motivó la automatización y convertirse en un cuello de botella en los picos de corrección; la HITL de baja frecuencia, que comprueba muestras y revisa solo los casos marcados, escala y acorta los plazos de entrega, pero corre el riesgo de que los errores se propaguen sin detectarse entre entregas, debilita la rendición de cuentas y crea un problema de [[equity-in-ai-education|equidad]] si una parte del estudiantado recibe una revisión humana más exhaustiva que el resto. En lugar de prescribir una respuesta universal, el marco exige que el compromiso se decida de forma explícita frente a las tolerancias disciplinarias al error, frente a si la evaluación es [[formative-assessment|formativa]] o [[summative-assessment|sumativa]], y frente al tamaño de la cohorte y los recursos institucionales, y establece un valor por defecto en la dirección opuesta al argumento habitual de la eficiencia: empezar con una supervisión de alta frecuencia y reducirla solo cuando pruebas sustanciales demuestren una fiabilidad, una seguridad y una justicia aceptables, de modo que la carga de la prueba recaiga en demostrar que una supervisión *menor* es segura. El artículo advierte además de que los principios que sustentan dicha supervisión pueden desplazar el esfuerzo del personal en lugar de reducirlo, lo que deja las ganancias netas de eficiencia como una cuestión empírica abierta.
- La supervisión humana desplegada puede significar enrutamiento de aprobaciones en lugar de juicio de calidad: en un sistema híbrido de consultas, el campo de aceptación codificaba únicamente si quien resolvía difería de quien preguntaba, y ninguna medida evaluaba la calidad de la respuesta ([[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]]).

## Dónde aparece la HITL en la investigación de la base de conocimientos

- **Evaluación y calificación automatizadas:** los sistemas HITL combinan la generación y la puntuación con IA con la validación humana en la calificación de respuestas cortas ([[cong-confidence-asag-2026]]), la evaluación de autoexplicaciones ([[llm-automated-assessment-student-self-explanations]]) y la [[automated-essay-scoring|calificación de ensayos]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros y Kortemeyer]] hacen concreta esta idea en la calificación manuscrita de [[chemistry-education|química]] general, con altas consecuencias: como la fiabilidad de un LLM [[multimodal]] varía según el formato de la respuesta (las respuestas textuales y de reacciones químicas son fiables, mientras que el dibujo y las gráficas puntúan peor que el azar) y los falsos positivos pasan inadvertidos para el estudiantado, convierten las puntuaciones brutas de la IA en una política selectiva de aceptación o aplazamiento mediante filtros de confianza — umbrales de crédito parcial, un umbral de riesgo basado en la [[item-response-theory|teoría de respuesta al ítem]] y la exclusión por tipo de problema — que remite a las personas los ítems inciertos y gráficos, un enfoque que los autores vinculan a los marcos de [[regulation|regulación]] que designan la IA en la [[assessment|evaluación educativa]] como de alto riesgo y exigen una supervisión humana documentada.
- **Sistemas de retroalimentación:** se exige una supervisión humana documentada.
- **Calificación HITL operativa en una evaluación nacional (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] hacen concreta la HITL a escala institucional en el examen Acredita EB de Uruguay. Como los errores del calificador LLM son sistemáticamente conservadores (califican por debajo), el flujo de trabajo emplea una lógica de puntos de decisión que dirige la revisión humana exactamente a los candidatos cuyo resultado de apto o no apto depende de la sección de escritura: las respuestas marcadas como aptas por la IA se aceptan con confianza, mientras que las marcadas como no aptas (15,3%–16,5% de los casos) las verifican evaluadores expertos, lo que reduce la carga de calificación completa en al menos un 50% con un riesgo residual de aprobar por un error de la IA de solo 0,2%–0,6%. Esto es la HITL como estrategia de asignación de recursos: las personas dirimen precisamente allí donde el sesgo conservador de la IA alteraría de otro modo resultados de altas consecuencias.

- **Derivar el umbral de aplazamiento de la propia resolución de la rúbrica (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] fijan la tolerancia entre la IA y el docente en 0,5 puntos — la mayor discrepancia que no puede mover una entrega a través de una banda de anclaje — y escalan los valores atípicos a 0,8 puntos, enviando 11 de 362 entregas (3,0%) a revisión humana antes de liberar la retroalimentación.

- **La concordancia entre anotadores no es la verdad de referencia humana.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] llevan la anotación del modelo a la capa de auditoría sin validarla nunca frente a etiquetas humanas de referencia, lo que deja la concordancia entre modelos (mediana 0,401) como un indicador indirecto de la calidad de las aserciones que puede sobrevivir a los errores compartidos del modelo. Su diseño mantiene la supervisión como diagnóstica y no como decorativa: como los juicios intermedios son explícitos, quien revisa puede ver qué comportamientos se activaron y separar un comportamiento mal interpretado de una regla que codifica mal el constructo.
- **Sistemas de retroalimentación:** el diseño de retroalimentación con intervención humana aparece en los [[becerra-aicofe-feedback-2026|sistemas de retroalimentación colaborativa]] y en la [[cong-confidence-asag-2026|calificación de respuestas cortas consciente de la confianza]].
- **Apoyo a la colaboración en el aula.** [[breideband-community-builder-cobi-2026|CoBi]] mantiene al profesorado como la persona que revisa en un sistema de IA que detecta el discurso enriquecedor en los grupos pequeños: el profesorado prefirió explícitamente la revisión antes y después de la acción frente a una visualización en tiempo real que les pondría «en evidencia», y la retroalimentación agregada del sistema a nivel de aula (en lugar de individual) es precisamente lo que le permite navegar la tensión entre la [[privacy]], la vigilancia y la [[agency]] del estudiantado.
- **Generación de preguntas y de contenido:** más allá de CODE-GEN, la HITL guía la generación de preguntas para la evaluación y el [[scaffolding]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Sistemas agénticos y multiagente:** a medida que la IA se vuelve más autónoma, la supervisión HITL es una [[agentic-ai|barrera de diseño]] nuclear ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Enrutar por la consecuencia de la decisión, no por la incertidumbre del modelo (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Un estudio operativo de 2026]] sobre la prueba nacional de acreditación Acredita EB de Uruguay (dos ediciones, de unos 5.000 a 6.000 candidatos cada una) muestra qué aspecto tiene el diseño con intervención humana cuando lo guía la consecuencia de la decisión y no la incertidumbre del modelo. Un calificador GPT-5 coincidió con los evaluadores expertos en el 60%–80% de los 15 ítems de la rúbrica, pero fue sistemáticamente conservador, y produjo discrepancias de apto humano y no apto de la IA en el 15,3% (2024) y el 16,5% (2025) de las comparaciones de apto o no apto, y casi nunca a la inversa. El marco, por tanto, acepta los resultados de apto de la IA tal cual y remite a revisión experta todos los resultados de no apto de la IA que podrían cambiar el resultado de un candidato, tras descartar primero a los candidatos cuyo apto o no apto no puede depender de la sección de escritura, lo que reduce en al menos un 50% las respuestas que necesitan una calificación humana completa. Un segundo diseño de 2026 traza la frontera desde el otro lado: en una plataforma multiagente de pacientes estandarizados con IA ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), la supervisión humana se reserva para aquello que se juzga que la IA no es apta para decidir, con el profesorado y pacientes estandarizados humanos aportando la interpretación contextual, la remediación y los juicios de preparación, y el sistema no puede determinar de forma autónoma la competencia [[medical-education|clínica]].
- **Instrumentación de la investigación: las personas validan etiquetas, no puntuaciones.** Codificadores de ciencias del aprendizaje y de informática juzgaron segmentos de conducta generados por LLM sobre una línea temporal sincronizada con κ = 0,703, y sus desacuerdos se convirtieron en el propio análisis de errores del estudio ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles et al., 2026]]).
- **El modelo resume y quien investiga etiqueta.** Un estudio de modelado colaborativo usó GPT-3.5-Turbo para escribir un resumen sensible al contexto de la tarea de cada uno de los 394 segmentos de discurso, hizo que quienes investigaban verificaran cada resumen y los codificaran hasta κ ≥ 0,7, y entrenó los detectores con esas etiquetas, de modo que el modelo nunca hizo el juicio por sí mismo. La supervisión se desplazó entonces hacia fuera: cuatro docentes con experiencia revisaron un segmento etiquetado, tres reconocieron las conductas y uno sostuvo que dos etiquetas sobre un mismo segmento oscurecían lo que el estudiantado estaba haciendo, una objeción de usabilidad que los autores registraron en lugar de resolver ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).
- **La HITL como arquitectura de toda una disciplina, no de un solo flujo de trabajo.** [[zhai-science-literacy-generative-ai-coherence-2026|Zhai et al. (2026)]] especifican cuatro capas interconectadas, infraestructura de datos, desarrollo de modelos, interfaz pedagógica y gobernanza humana, sostenidas por tres principios: supervisión y agencia humanas, inteligencia coadaptativa y capacidad de respuesta al contexto.

## Síntesis

El diseño con intervención humana no es meramente una medida de seguridad: es una **estrategia de asignación de recursos**. La pregunta de frontera no es *si* incluir a las personas, sino *dónde* en la cadena de proceso su juicio tiene el mayor valor marginal. Los sistemas HITL más eficaces concentran la experiencia humana escasa allí donde los sistemas automatizados son más débiles (el diseño de distractores, la retroalimentación explicativa, la resolución de casos límite, el juicio ético) y automatizan el resto, preservando la calidad, la seguridad y la confianza mientras se escala la producción.
- **La supervisión humana persiste en el trabajo asistido por IA.** La [[scaffolding-systematic-reviews-2026|investigación sobre revisiones sistemáticas]] halló que las herramientas de automatización con IA reducían las cargas procedimentales (por ejemplo, el cribado), pero que las decisiones interpretativas seguían exigiendo una supervisión humana sustancial; la [[kim-ai-andragogy-2026|investigación sobre andragogía]] convierte la intervención humana en el bucle (modelos mentales compartidos, cocreación) en un principio nuclear del diseño de IA.
- **La intervención humana a escala institucional.** Qin (2026) describe cómo la Universidad de Lingnan desarrolló un modelo educativo con intervención humana que pone en primer plano el razonamiento ético, el juicio crítico y la responsabilidad social a la vez que democratiza el acceso a la [[generative-ai|IA generativa]]. El modelo sitúa a las personas como el lugar del juicio y de los valores incluso cuando la IA se integra en todo el [[curriculum-design|currículo]]: una concreción [[governance|institucional]] de los principios de intervención humana en la [[higher-ed|educación superior]].
- **Quienes aprenden como la persona en el bucle de su propia tutoría.** El [[ko-hughes-vsd-student-centered-its-2026|diseño sensible a los valores]] con estudiantes de colegios comunitarios produjo toda una familia de funciones HITL orientadas a quien aprende para un ITS (control sobre la reevaluación y la revisión, metas y ritmo personalizados, marcadores para repasar, confirmación de la confianza por encima del dominio y un control del nivel de participación de la asistencia de IA), lo que sitúa al estudiante como controlador activo del bucle de tutoría y no como consumidor pasivo de decisiones adaptativas. El estudio halló también al profesorado dividido sobre si dicho control por parte de quien aprende podría socavar la integridad de la ruta de aprendizaje guiada por el sistema — un caso de la pregunta más amplia sobre la asignación de recursos: dónde aporta más valor el juicio humano (del estudiante o del docente).
- **La escalada de la IA al experto es un movimiento de intervención humana.** El marco SCAN asigna tareas a cuatro modos de IA generativa según la distancia del estudiante, e interpreta la [[student-engagement|implicación]] pasiva dentro de una tarea de IA correctamente asignada como una señal de desajuste de competencias que desplaza al estudiante de la asistencia de IA a la asistencia experta, con una persona como auditor epistémico ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Supervisión del asesoramiento sobre la adopción de IA.** Dado que los sistemas de [[conversational-ai|IA conversacional]] que consultan usuarias escépticas pueden estar predispuestos a fomentar la adopción, la supervisión humana y la evaluación independiente son esenciales. Una auditoría que muestra que la mayoría de los modelos de frontera redirigen al personal escéptico de [[k-12]] hacia la [[student-engagement|implicación]] subraya la necesidad de un asesoramiento con IA transparente y auditable en lugar de una confianza acrítica.

## Conceptos conectados
- [[pedagogical-patterns]] — Dónde se sitúa la revisión humana en las secuencias probadas, y qué nunca se ha probado de forma aislada
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — el juicio humano dentro de un flujo de apoyo automatizado

## Artículos conectados
- [[zhai-science-literacy-generative-ai-coherence-2026]] — Arquitectura HITL de cuatro capas para la IA generativa en la educación científica (Zhai et al. 2026)
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Codificadores que validan segmentos de conducta de LLM como instrumentación de investigación (Fonteles et al. 2026)
- [[lee-learner-question-types-ai-education-2026]] — Clasificación de preguntas etiquetada por personas expertas: las personas gobiernan el etiquetado, el aumento de datos y el análisis de errores (Lee, Atif y Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — La supervisión y la gobernanza humanas como tercera capa del diseño de cursos con IA generativa agéntica (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Diseño sensible a los valores de un ITS centrado en el estudiante (quien aprende en el bucle de tutoría)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Calificación asistida por IA con intervención humana en una evaluación nacional de escritura a gran escala (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Marco SCAN: repensar la distribución de tareas con IA en la formación médica (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Andamiar revisiones sistemáticas con mentoría e IA (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Calificación y retroalimentación asistidas por IA y supervisadas por el profesorado
- [[lopez-pernas-llm-appropriate-student-support-2026]] — ¿Puede la IA ofrecer un apoyo adecuado a perfiles de estudiantado diversos? Una evaluación a gran escala
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[tripartite-feedback-framework-ai-assessment-2026]] — Marco tripartito: clasificar la retroalimentación por su estatus epistémico y los cinco principios de frontera para la implicación de la IA (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — Intervención con historias sociales asistida por IA para educación especial: el diseño de AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas basados en aserciones para una codificación auditable de diálogos educativos
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — De la clasificación de sentimiento a la retroalimentación accionable y responsable: revisión de alcance y mapa de evidencia del PLN en la evaluación del profesorado por el estudiantado, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — Recalificaciones idénticas con LLM en días distintos reproducen solo un alfa de Krippendorff de 0,625
- [[when-students-prefer-ai-scoring-feedback-2026]] — El estudiantado de grado prefiere la calificación humana para el trabajo de altas consecuencias y la IA como asistente, no como sustituto
- [[student-query-demand-hybrid-ai-support-2026]] — Qué pregunta realmente el estudiantado: estructura de la demanda y potencial de automatización en un sistema de apoyo híbrido
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Repensar los enfoques «in-the-loop» en la IA educativa: una perspectiva de las ciencias del aprendizaje
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Retener la respuesta preferida por el sistema redujo la deferencia hacia consejos de IA incorrectos, de forma protectora y no correctiva
