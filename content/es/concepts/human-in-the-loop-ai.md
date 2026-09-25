---
title: IA con intervención humana (HITL)
created: "2026-09-25T04:31:15-04:00"
updated: "2026-09-25T04:31:15-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
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

> **La IA con intervención humana (HITL)**: el patrón de diseño en el que los [[ai-technologies|sistemas de IA]] educativos intercalan de forma estratégica la generación automatizada con el juicio de personas expertas, y preservan así la calidad y la seguridad [[pedagogy|pedagógicas]] mientras escalan la producción. En lugar de automatizar por completo la evaluación, la retroalimentación o la instrucción, la HITL mantiene a una persona (docente, especialista en la materia o quien aprende) en el bucle de decisión allí donde su juicio tiene el mayor valor marginal: para evaluar la calidad, dirimir los casos límite y proteger la [[agency|agencia de quien aprende]] y la seguridad. La pregunta central de diseño no es *si* incluir a las personas, sino *dónde* en el flujo de trabajo su supervisión es más valiosa y menos reemplazable.

## Preguntas para reflexionar

- La pregunta central del diseño HITL no es si incluir a las personas, sino dónde en el flujo de trabajo su juicio es más valioso. En un sistema de evaluación o de retroalimentación con IA, ¿en qué punto insistiría usted en que una persona permanezca en el bucle?
- Los estudios sobre la [[automated-question-generation|generación automática de preguntas]] con IA encontraron que los ordenadores manejan bien la claridad y la validez, pero que las personas siguen siendo necesarias para los distractores significativos y una buena retroalimentación. ¿Por qué algunas partes del juicio educativo podrían resistirse a la automatización?
- Una evaluación encontró que tres LLM dieron recomendaciones de apoyo al estudiantado inconsistentes e insensibles, y concluyó que el juicio humano sigue siendo necesario antes de que la IA asesore sobre el estudiantado. Cuando una IA «recomienda» apoyo para un estudiante con dificultades, ¿qué podría salir mal si ninguna persona lo revisa?
- La página sugiere que las personas y los algoritmos detectan tipos distintos de problemas: automatizar lo que es verificable con precisión y preservar el juicio donde el matiz es irreemplazable. ¿Dónde está, en su propia práctica, la frontera entre ambos?
- Mantener a una persona en el bucle se enmarca como una protección de la agencia y la seguridad de quien aprende, y no solo de la calidad. ¿Cómo podría la automatización total cambiar de forma sutil la percepción que el estudiantado tiene de quién es responsable de su aprendizaje?
- Si la IA se vuelve más autónoma, la supervisión HITL se describe como una barrera de seguridad central. ¿A qué nivel de autonomía de la IA se sentiría incómodo, y qué le dice esa incomodidad sobre dónde corresponde la supervisión?

## Introducción

La HITL es una respuesta a los límites y los riesgos de la [[ai-education|IA en la educación]] totalmente autónoma: los sistemas automatizados pueden generar a escala, pero carecen del juicio contextual, [[ethics|ético]] y pedagógico que aportan el profesorado y las personas expertas. Dos implementaciones recientes ilustran arquitecturas distintas:

El apoyo prescriptivo es un ámbito en el que cada vez se sostiene más que la supervisión humana no es opcional. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] comprobaron si tres LLM podían recomendar planes de apoyo al estudiantado a partir de indicadores de [[learning-analytics|analítica del aprendizaje]] y encontraron una sensibilidad limitada a la necesidad y una fuerte inconsistencia entre modelos, por lo que concluyeron que el juicio con intervención humana sigue siendo necesario antes de que el asesoramiento prescriptivo con [[llm|LLM]] pueda desplegarse de forma segura y ética.

Una tercera arquitectura sitúa el juicio humano *antes* del modelo en lugar de en su salida. En el estudio de [[lee-learner-question-types-ai-education-2026|Lee, Atif y Kang (2026)]] sobre la clasificación de las preguntas del estudiantado, tres personas expertas de nivel doctoral gobernaron todo el flujo de trabajo: refinaron las definiciones operativas de cada papel [[constructivist|constructivista]], etiquetaron de forma independiente hasta que el kappa de Fleiss subió de 0,60 a 0,83 tras resolver las discrepancias, y validaron los ítems retrotraducidos y parafraseados que se usaron para equilibrar el conjunto de entrenamiento.

## CODE-GEN: generación de preguntas de opción múltiple con intervención humana

Duan et al. (2026) construyeron un sistema [[rag|RAG]] [[agentic-ai|agéntico]] con dos agentes:
- **Agente generador**: produce preguntas de programación de opción múltiple alineadas con los objetivos de aprendizaje del curso
- **Agente validador**: evalúa la calidad en siete dimensiones pedagógicas

**Evaluación:** 6 especialistas en la materia juzgaron 288 preguntas generadas por IA. Tasas de éxito validadas por personas: **79,9%-98,6%** en las distintas dimensiones.

**Dimensiones en las que la IA es fuerte (baja carga humana):**
- Claridad de la pregunta, validez del código, alineación con los conceptos, validez de la respuesta correcta

**Dimensiones que requieren personas (alta carga humana):**
- Diseño de distractores pedagógicamente significativos
- [[feedback|Retroalimentación]] explicativa de alta calidad

Idea estratégica: el esfuerzo humano debería concentrarse allí donde el juicio didáctico es irreemplazable; la verificación computacional puede automatizarse por completo.

## MAIC: generación de guiones con intervención humana

Yu et al. (2024) desplegaron un aula multiagente (agente [[teacher-role|docente]], agente de ayudante y arquetipos de compañeros de clase) en la Universidad de Tsinghua con más de 500 estudiantes y más de 100.000 registros de aprendizaje. El profesorado participa en la generación de los guiones y en su supervisión, lo que garantiza que el aumento de la IA a gran escala no desplace la experiencia pedagógica.

## PedaCo: doble control de acceso para la generación de vídeo con IA

Kim, Baek y Kwak (2026) amplían la HITL al [[video-education|vídeo didáctico generado por IA]] mediante **PedaCo** (cocreación pedagógica), un flujo de trabajo con dos capas complementarias de control que hacen realidad una *resistencia fundamentada* anclada en la teoría cognitiva del aprendizaje multimedia (CTML) de Mayer. La **primera capa** sitúa a la persona en la fase de guion: un LLM redacta un guion, un revisor de IA señala posibles infracciones de la CTML (por ejemplo, «la escena 3 introduce términos técnicos sin explicación previa») y el profesorado decide aceptar, revisar o regenerar. La **segunda capa** ejecuta métricas automatizadas tras la síntesis sobre la coherencia, la redundancia, la contigüidad temporal, la modalidad y la calidad de la imagen, que el profesorado revisa. En un estudio intrasujeto (23 docentes), el enfoque basado en la revisión mejoró todos los principios de la CTML (valoración media de 3,07 a 3,86, p<.01), y el profesorado valoró la eficiencia de producción con un 4,26/5: una fricción percibida como productiva y no como una carga. El principio de diseño se hace eco de la síntesis sobre HITL de esta base de conocimiento: las personas y los algoritmos detectan *distintos* tipos de problemas, así que los sistemas más eficaces automatizan donde la verificación computacional es precisa (la sincronización temporal) y preservan el juicio humano donde el matiz pedagógico es irreemplazable (el tono, la adecuación al público).

## Por qué importa la HITL en la era de la IA

El diseño con intervención humana se ha vuelto central en los debates de esta base de conocimiento sobre la [[agentic-ai|IA agéntica]] y el [[reducing-ai-misuse|uso responsable de la IA]] por varias razones convergentes:
- **Seguridad pedagógica.** La [[pedagogical-safety]] exige que la IA con autoridad didáctica real mantenga la supervisión humana, de modo que los errores, los sesgos o las salidas dañinas se detecten antes de llegar a quien aprende. Esto es especialmente importante para los agentes autónomos que [[agentic-ai|persiguen objetivos de forma proactiva]].
- **Validez y control de calidad.** La HITL es una puerta de calidad para la [[automated-assessment|evaluación automatizada]] y la generación: las personas dirimen allí donde la puntuación automatizada no es fiable (véase la [[llms-do-not-grade-essays-like-humans-2026|investigación sobre la calificación de ensayos con LLM]] en [[research-methods-aied|métodos de investigación]]) y validan los ítems generados. Una [[meta-analysis-systematic-review|revisión sistemática]] guiada por PRISMA de 42 estudios sobre calificación y retroalimentación (2023–2025) llega explícitamente a la misma conclusión: los LLM igualan a los evaluadores humanos en tareas cortas y bien estructuradas, pero no pueden sustituir por completo el juicio humano en trabajos complejos, abiertos o subjetivos, y la máxima eficacia de calificación se alcanza en sistemas híbridos que combinan la calificación impulsada por IA con la supervisión y la verificación del profesorado ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] muestran de forma concreta dónde cae esa frontera: ChatGPT-5 igualó al profesorado en ítems objetivos de exámenes de farmacia (CCC 0,935-1,000), pero no fue fiable en ítems de respuesta corta ni de ensayo incluso cuando se le dio una rúbrica, lo que llevó a los autores a recomendar una calificación híbrida con revisión humana para evaluaciones complejas, subjetivas o de alto riesgo.
- **Agencia de quien aprende.** Mantener a una persona en el bucle preserva la [[agency|agencia]] y sostiene el [[self-regulated-learning|aprendizaje autorregulado]], y contrarresta la [[cognitive-offloading|dependencia excesiva]] que puede inducir una asistencia totalmente autónoma.
- **Confianza y calibración.** Una supervisión humana transparente sostiene la [[trust-calibration|calibración de la confianza]]: quien aprende y quien enseña saben que hay una persona cualificada detrás del sistema.
- **La agencia acotada como arquitectura, no como advertencia legal.** El marco AGAI-HE de [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] para el apoyo al aprendizaje [[agentic-ai|agéntico]] incorpora la supervisión al propio modelo, como una tercera capa junto a las capas de flujo de trabajo pedagógico y de apoyo agéntico: define el uso aceptable de la IA, los límites pedagógicos, las reglas de [[privacy|privacidad]], los [[ai-use-disclosure|requisitos de declaración]], la verificación de fuentes, los puntos de control del profesorado, los mecanismos de [[academic-integrity|integridad]] y la responsabilidad humana final, y exige que cada función agéntica se remonte a un requisito de aprendizaje, un propósito de evaluación o un control de gobernanza. Es una concreción del principio de que la HITL es una propiedad del diseño del sistema y no una declaración de política, y el estudio de percepción con 130 estudiantes de los autores recuerda que añadir orquestación agéntica bajo esa supervisión no se registró, por sí solo, como un mejor apoyo al aprendizaje que un chatbot.
- **Con qué frecuencia mira la persona es en sí mismo una decisión de diseño.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] separa la *frecuencia* de la supervisión de su ubicación: la HITL de alta frecuencia, que revisa cada salida de la IA antes de que llegue al estudiantado, aporta control de calidad, detección rápida de errores, responsabilidad y calibración continua, pero puede anular la eficiencia que motivó la automatización y convertirse en un cuello de botella en los picos de corrección; la HITL de baja frecuencia, que comprueba muestras y revisa solo los casos señalados, escala y acorta los plazos, pero corre el riesgo de que los errores se propaguen sin detectarse entre entregas, debilita la responsabilidad y crea un problema de [[equity-in-ai-education|equidad]] si parte del estudiantado recibe una revisión humana más exhaustiva que el resto. En lugar de prescribir una respuesta universal, el marco exige que la disyuntiva se decida de forma explícita en función de las tolerancias disciplinares al error, de si la evaluación es [[formative-assessment|formativa]] o [[summative-assessment|sumativa]], del tamaño de la cohorte y de los recursos institucionales, y fija un valor por defecto en la dirección opuesta al argumento habitual de eficiencia: empezar con una supervisión de alta frecuencia y reducirla solo cuando pruebas sustanciales demuestren una fiabilidad, una seguridad y una justicia aceptables, de modo que la carga de la prueba recae en demostrar que una supervisión *menor* es segura. El artículo también advierte de que los principios que sustentan esa supervisión pueden desplazar el esfuerzo del personal en lugar de reducirlo, lo que deja las ganancias netas de eficiencia como una cuestión empírica abierta.

## Dónde aparece la HITL en la investigación de la base de conocimiento
- **Evaluación y calificación automatizadas:** los sistemas HITL combinan la generación y la puntuación con IA con la validación humana en la calificación de respuestas cortas ([[cong-confidence-asag-2026]]), la evaluación de autoexplicaciones ([[llm-automated-assessment-student-self-explanations]]) y la [[automated-essay-scoring|corrección automática de ensayos]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros y Kortemeyer]] lo concretan en la calificación manuscrita de [[chemistry-education|química]] general, una situación de alto riesgo: como la fiabilidad de un LLM [[multimodal]] varía según el formato de la respuesta (las respuestas textuales y de reacciones químicas son fiables, mientras que el dibujo y las gráficas puntúan peor que el azar) y el estudiantado no detecta los falsos positivos, convierten las puntuaciones brutas de la IA en una política selectiva de aceptación o aplazamiento mediante filtros de confianza (umbrales de crédito parcial, un umbral de riesgo basado en la [[item-response-theory|teoría de respuesta al ítem]] y la exclusión por tipo de problema) que remiten a las personas los ítems inciertos y gráficos, un enfoque que los autores vinculan a los marcos de [[regulation|regulación]] que designan la IA en la [[assessment|evaluación educativa]] como de alto riesgo y exigen una supervisión humana documentada.
- **Sistemas de retroalimentación:** se exige una supervisión humana documentada.
- **Puntuación HITL operativa en una evaluación nacional (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] concretan la HITL a escala institucional en el examen Acredita EB de Uruguay. Como los errores del calificador LLM son sistemáticamente conservadores (puntúan por debajo), el flujo de trabajo usa una lógica de puntos de decisión que dirige la revisión humana exactamente a los candidatos cuyo resultado de apto o no apto depende de la sección de escritura: las respuestas marcadas como aptas por la IA se aceptan con confianza, mientras que las marcadas como no aptas (15,3%-16,5% de los casos) las verifican evaluadores expertos, lo que reduce la carga de calificación completa al menos un 50% con un riesgo residual de aprobar por un error de la IA de solo el 0,2%-0,6%. Esto es la HITL como estrategia de asignación de recursos: las personas dirimen precisamente allí donde el sesgo conservador de la IA alteraría de otro modo resultados de alto riesgo.
- **Sistemas de retroalimentación:** el diseño de retroalimentación con intervención humana aparece en los [[becerra-aicofe-feedback-2026|sistemas de retroalimentación colaborativa]] y en la [[cong-confidence-asag-2026|calificación de respuestas cortas consciente de la confianza]].
- **Apoyo a la colaboración en el aula.** [[breideband-community-builder-cobi-2026|CoBi]] mantiene al profesorado como la persona revisora de un sistema de IA que detecta discurso en grupos pequeños que resulta edificante: el profesorado prefirió explícitamente la revisión antes y después de la acción a una pantalla en tiempo real que los pondría «en evidencia», y la retroalimentación agregada a nivel de aula (y no individual) del sistema es precisamente lo que le permite navegar la tensión entre la [[privacy|privacidad]], la vigilancia y la [[agency|agencia]] del estudiantado.
- **Generación de preguntas y de contenido:** más allá de CODE-GEN, la HITL guía la generación de preguntas para la evaluación y el [[scaffolding|andamiaje]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Sistemas agénticos y multiagente:** a medida que la IA se vuelve más autónoma, la supervisión HITL es una [[agentic-ai|barrera de seguridad de diseño]] central ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Enrutar por la consecuencia de la decisión, no por la incertidumbre del modelo (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Un estudio operativo de 2026]] sobre la prueba nacional de acreditación Acredita EB de Uruguay (dos ediciones, de unos 5.000 a 6.000 candidatos cada una) muestra cómo es el diseño con intervención humana cuando lo guía la consecuencia de la decisión y no la incertidumbre del modelo. Un calificador GPT-5 coincidió con los evaluadores expertos en el 60-80% de los 15 ítems de la rúbrica, pero fue sistemáticamente conservador, y produjo discrepancias de aprobado humano y suspenso de la IA en el 15,3% (2024) y el 16,5% (2025) de las comparaciones de apto o no apto, y casi nunca al revés. El marco, por tanto, acepta los resultados de aprobado de la IA sin más y remite a revisión experta todos los resultados de suspenso de la IA que podrían cambiar el resultado de un candidato, después de descartar primero a los candidatos cuyo apto o no apto no puede depender de la sección de escritura, lo que reduce al menos un 50% las respuestas que necesitan una puntuación humana completa. Un segundo diseño de 2026 traza la frontera desde el otro lado: en una plataforma multiagente de pacientes estandarizados con IA ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), la supervisión humana se reserva para lo que se juzga que la IA no es apta para decidir, con el profesorado y pacientes estandarizados humanos aportando la interpretación contextual, la remediación y los juicios de preparación, y el sistema no puede determinar de forma autónoma la competencia [[medical-education|clínica]].

## Síntesis

El diseño con intervención humana no es solo una medida de seguridad: es una **estrategia de asignación de recursos**. La pregunta de frontera no es *si* incluir a las personas, sino *dónde* en el flujo de trabajo su juicio tiene el mayor valor marginal. Los sistemas HITL más eficaces concentran la experiencia humana escasa allí donde los sistemas automatizados son más débiles (el diseño de distractores, la retroalimentación explicativa, la resolución de casos límite, el juicio ético) y automatizan el resto: preservan la calidad, la seguridad y la confianza mientras escalan la producción.
- **La supervisión humana persiste en el trabajo asistido por IA.** [[scaffolding-systematic-reviews-2026|La investigación sobre revisiones sistemáticas]] encontró que las herramientas de automatización con IA reducían las cargas procedimentales (por ejemplo, el cribado), pero que las decisiones interpretativas seguían exigiendo una supervisión humana sustancial; [[kim-ai-andragogy-2026|la investigación sobre andragogía]] convierte la intervención humana en el bucle (modelos mentales compartidos, cocreación) en un principio central del diseño de IA.
- **La intervención humana a escala institucional.** Qin (2026) describe cómo la Universidad de Lingnan desarrolló un modelo educativo con intervención humana que pone en primer plano el razonamiento ético, el juicio crítico y la responsabilidad social a la vez que democratiza el acceso a la [[generative-ai|IA generativa]]. El modelo sitúa a las personas como el lugar del juicio y de los valores incluso cuando la IA se integra en todo el [[curriculum-design|currículo]]: una concreción [[governance|institucional]] concreta de los principios de intervención humana en la [[higher-ed|educación superior]].
- **Quien aprende como la persona en el bucle de su propia tutoría.** El [[ko-hughes-vsd-student-centered-its-2026|diseño sensible a los valores]] con estudiantes de colegios comunitarios produjo toda una familia de funciones HITL orientadas a quien aprende en un sistema de tutoría inteligente (control sobre la reevaluación y la revisión, metas y ritmo personalizados, marcadores para repasar, confirmación de la confianza por encima del dominio y un control del nivel de participación de la asistencia de IA), lo que sitúa al estudiante como un controlador activo del bucle de tutoría y no como un consumidor pasivo de decisiones adaptativas. El estudio también encontró al profesorado dividido sobre si ese control de quien aprende podía socavar la integridad de la ruta de aprendizaje guiada por el sistema, un caso de la pregunta más amplia de asignación de recursos sobre dónde el juicio humano (del estudiantado o del profesorado) aporta más valor.
- **Supervisión del asesoramiento sobre adopción de IA.** Como los sistemas de [[conversational-ai|IA conversacional]] consultados por usuarios escépticos pueden estar predispuestos a fomentar la adopción, la supervisión humana y la evaluación independiente son esenciales. Una auditoría que mostró que la mayoría de los modelos de frontera redirigen al personal escéptico de [[k-12]] hacia la [[student-engagement|implicación]] subraya la necesidad de un asesoramiento con IA transparente y auditable en lugar de una confianza acrítica.

## Conceptos conectados
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

## Artículos conectados
- [[lee-learner-question-types-ai-education-2026]] — Clasificación de preguntas etiquetada por personas expertas: las personas gobiernan el etiquetado, el aumento de datos y el análisis de errores (Lee, Atif y Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — La supervisión y la gobernanza humanas como tercera capa del diseño de cursos con IA generativa agéntica (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Diseño sensible a los valores de un sistema de tutoría inteligente centrado en el estudiantado (quien aprende en el bucle de tutoría)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Puntuación asistida por IA con intervención humana en una evaluación nacional de escritura a gran escala (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Marco SCAN: repensar el reparto de tareas con IA en la formación médica (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[shaw-nave-cognitive-surrender-2026]] — La teoría de los tres sistemas y la rendición cognitiva: cómo la IA reconfigura el razonamiento humano (Shaw y Nave 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pedagogical Steering of LLMs for Productive Failure
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Scaffolding Systematic Reviews with Mentoring and AI (Wang 2026)
- [[ai-ethics-bibliometric-2026]] — La ética de la IA y el juicio profesional: un análisis bibliométrico (Mazlan et al. 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Calificación y retroalimentación asistidas por IA y supervisadas por el profesorado
- [[lopez-pernas-llm-appropriate-student-support-2026]] — ¿Puede la IA ofrecer un apoyo adecuado a perfiles de estudiantado diversos? Una evaluación a gran escala
- [[ai-digital-transformation-liberal-arts-lingnan-2026]] — Digital transformation of a liberal arts university toward a research-intensive model in the GenAI era (Qin 2026)
- [[frontier-ai-redirect-skeptical-rural-staff-2026]] — Algorithmic audit: how frontier LLMs redirect skeptical rural K-12 staff
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[tripartite-feedback-framework-ai-assessment-2026]] — Marco tripartito: clasificar la retroalimentación por su estatus epistémico y los cinco principios límite para la implicación de la IA (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Open Questions Towards Skill-Sustaining Reliance in Reflective AI Engagement
