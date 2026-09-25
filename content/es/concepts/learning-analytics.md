---
title: Analítica del aprendizaje
created: "2026-09-25T04:30:56-04:00"
updated: "2026-09-25T04:30:56-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
translation_of: concepts/learning-analytics
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

> **La analítica del aprendizaje**: la medición, la recogida, el análisis y la comunicación de datos sobre quien aprende y sus contextos con el fin de comprender y optimizar el aprendizaje. La IA ha transformado la analítica del aprendizaje, de los cuadros de mando descriptivos a sistemas predictivos y prescriptivos.

## Preguntas para reflexionar

- La mayoría de la gente da por sentado que recoger más datos de aprendizaje mejora automáticamente la educación. La página sostiene que la analítica solo adquiere sentido cuando retroalimenta una intervención; de lo contrario, se limita a describir o a señalar sin cambiar el aprendizaje. ¿Dónde ha visto que se recojan datos que nunca llevaron a ninguna acción?
- Imagine que un cuadro de mando le dice que un estudiante está «en riesgo», es decir, una predicción. ¿Qué separa eso de una orientación realmente accionable que un docente o una institución puedan llevar a cabo de verdad? La página sugiere que la predicción por sí sola no basta.
- La página señala que la IA ha llevado la analítica del aprendizaje de describir lo que ocurrió a predecir lo que ocurrirá y prescribir qué hacer a continuación. ¿Cuál de estas tres generaciones ha experimentado usted, y qué faltaba en las otras?
- En un estudio, tres modelos de IA distintos produjeron planes de apoyo muy diferentes para los mismos datos de un estudiante, y los vínculos entre los indicadores analíticos y la ayuda recomendada eran en su mayoría débiles. ¿Qué sugiere esto sobre confiar en el consejo de una IA sin más?
- La analítica del aprendizaje se sitúa en una tensión de privacidad: cuanto más granular es el dato, más revelador resulta, y más potente es la intervención. ¿Dónde trazaría usted la línea sobre lo que se recoge sobre usted o sobre su estudiantado, y quién debería decidirlo?

## Introducción

### La analítica mejorada con IA

- **Analítica predictiva:** el [[reinforcement-learning|aprendizaje automático]] sobre datos de interacción de quien aprende predice resultados, desde la [[at-risk-students-ml-prediction|identificación del riesgo]] hasta la [[knowledge-tracing|estimación del estado de conocimiento]].
- **La validación importa tanto como la predicción.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan y Carvalho (2025)]] muestran que los modelos predictivos del estado de conocimiento (BKT, BKT con olvido, AFM) parecen precisos cuando se ajustan retrospectivamente a un historial completo de sesión, pero bajo una **validación cruzada basada en el tiempo** (predecir la sesión siguiente a partir de las anteriores, que es como se despliega de verdad la analítica) sobreestiman el rendimiento de quien aprende, pasan por alto la dinámica de espaciado y olvido, y pueden ordenar mal las condiciones de práctica. La advertencia para la analítica es que un ajuste retrospectivo puede enmascarar una mala validez predictiva prospectiva en datos longitudinales, así que los modelos de indicadores y de cuadros de mando deberían validarse de forma progresiva (walk-forward).
- **Analítica predictiva anclada en el [[curriculum-design|currículo]]:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] estiman estados de conocimiento dentro de la educación basada en resultados (OBE) trazando los resultados del curso directamente a partir de datos de interacción y de logro del LMS, usando mapeos de afinidad OBE (relaciones entre resultados de curso y de programa) para estructurar los enlaces entre conceptos y una red aumentada con memoria para modelar el impacto entre resultados, y alcanzan un AUC del 89,81% y superan a DKT, DKVMN, EKT y SimpleKT con datos vivos de ingeniería universitaria, aunque se mantienen solo competitivos (no superiores) con los datos de propósito general de ASSISTments.
- **Predicción interpretable del progreso con una ventana de acción:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries y Koprinska (2025)]] predicen el progreso del estudiantado a nivel de módulo en cursos de [[cs-education|programación]] en línea a gran escala a partir de características de los registros de interacción con el contenido, usando árboles de decisión de caja de cristal que igualan la precisión de la caja negra (85-91%) y a la vez señalan los resultados de abandono por «sin entrega» hasta 7-8 días antes de las fechas límite del módulo, una ventana explícita y en tiempo real para la [[teacher-role|intervención]] en lugar de una mera señal de riesgo, además de una tipología exploratoria de perfiles de desimplicado en riesgo, desimplicado pero exitoso y de alto rendimiento implicado.
- **Modelado federado y explicable del riesgo entre instituciones (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] amplían el modelado del riesgo más allá de la predicción en una sola institución al entrenar un modelo multitarea (rendimiento + abandono) en instituciones simuladas mediante aprendizaje federado, de modo que los datos brutos del estudiantado nunca salen de cada institución. Bajo una heterogeneidad controlada (sesgo de etiquetas, desequilibrio de clases, deriva temporal, datos faltantes estructurales), el modelo conserva la precisión del ordenamiento (AUC de 0,918 en OULAD) y un orden de importancia de las variables estructuralmente estable, pero la calibración probabilística se desplaza, lo que desacopla el rendimiento del ordenamiento de la fiabilidad de las probabilidades. Para los sistemas de alerta temprana, esto es una advertencia de que las intervenciones basadas en umbrales pueden necesitar una calibración por institución, y un argumento a favor de evaluar la analítica a la vez en discriminación, calibración, robustez y explicabilidad.
- **Analítica de la implicación:** la [[student-engagement|medición de la implicación]] y el [[engagement-intensity-learner-modeling|modelado de la intensidad]] cuantifican cómo interactúa el estudiantado con los sistemas de IA.
- **Analítica de la retroalimentación:** la [[teaching-feedback-classification-benchmark|clasificación de la retroalimentación]] y la [[ai-feedback-quality|evaluación de su calidad]] analizan la retroalimentación que recibe el estudiantado.
- **Análisis de redes:** el [[misiejuk-cognitive-offloading-prompting-2026|análisis de redes de coocurrencia]] y el [[epistemic-emotions-collaborative-problem-solving|análisis de redes epistémicas]] revelan patrones de interacción.
- **Tensiones de privacidad:** las preocupaciones por la [[privacy|privacidad]] crecen a medida que la analítica se vuelve más granular y más impulsada por la IA.

### El ciclo de la analítica del aprendizaje

La analítica del aprendizaje se enmarca canónicamente como un ciclo que comienza con la actividad de quien aprende, que produce datos, los cuales se procesan en medidas e indicadores que luego se traducen en **intervenciones**, y la intervención retroalimenta la actividad de quien aprende para cerrar el bucle. El paso de la intervención es lo que distingue la analítica de la mera monitorización o predicción: sin él, la analítica describe y señala, pero nunca cambia el aprendizaje. Este ciclo es el marco organizador para entender dónde se sitúan las herramientas de IA (cuadros de mando, generadores de retroalimentación, recomendadores prescriptivos) en la cadena y qué paso automatizan.

### De la descripción a la intervención

La analítica del aprendizaje ha evolucionado a través de tres generaciones en la base de conocimiento: descriptiva (¿qué ocurrió?), predictiva (¿qué ocurrirá?) y prescriptiva (¿qué deberíamos hacer?). La IA habilita la capa prescriptiva, es decir, una analítica que desencadena directamente [[feedback|intervenciones didácticas]]. Una frontera clave es la **brecha de accionabilidad**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel y Laforge 2026)]] muestra que la predicción por sí sola es insuficiente para apoyar decisiones, y que el recurso contrafactual solo adquiere sentido operativo cuando las recomendaciones son semánticamente factibles y verificables por máquina, limitadas por el momento, el presupuesto, la inmutabilidad y la disponibilidad mediante validación SHACL, y no meramente válidas para el modelo. Esto lleva el campo más allá de las puntuaciones de riesgo hacia recomendaciones que las instituciones pueden aplicar de verdad, preservando la [[human-in-the-loop-ai|supervisión humana]].

Una prueba empírica directa de la capa prescriptiva proviene de [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]], que pidieron a tres LLM que recomendaran planes de apoyo para 4.500 viñetas de [[simulating-students|estudiantado sintético]].

Una prueba complementaria y centrada en el profesorado sobre cómo llega la analítica al aula proviene de [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]], que diseñaron un cuadro de mando de analítica del aprendizaje (DashED) para comunicar al profesorado perfiles de [[self-regulated-learning|aprendizaje autorregulado]] derivados del aprendizaje automático en dos contextos semipresenciales. Su estudio con 100 docentes muestra que la *presentación* de la analítica es en sí misma una barrera para la acción: el profesorado prefirió sistemáticamente gráficos más simples y tradicionales (barras, sectores) incluso cuando diseños más complejos (por ejemplo, mapas de calor) ofrecían ideas más ricas, y una mayor [[visualization|alfabetización en visualización]] predecía una interpretación más profunda y detallada (por ejemplo, más docentes que identificaban tendencias en datos de series temporales). Para la comparación de grupos, el profesorado prefirió la superposición a la yuxtaposición y los gráficos con toda la información a la codificación explícita de diferencias. Las acciones que propusieron los docentes estuvieron moldeadas por el contenido representado y por su nivel de [[teacher-role|docencia]] más que por el tipo de gráfico: el profesorado universitario prefirió pruebas semanales y adaptación a nivel de curso, mientras que el de formación profesional propuso tutoría directa e individualizada, lo que subraya que el paso prescriptivo depende tanto de cómo se visualizan y se contextualizan los datos como del modelo subyacente. Su hallazgo es una advertencia: las correlaciones entre los indicadores de analítica del aprendizaje y el apoyo recomendado eran en su mayoría débiles, las recomendaciones divergían marcadamente entre modelos para el mismo estudiante, y el apoyo se asignaba con frecuencia independientemente de quién lo necesitaba más. Los autores concluyen que los LLM actuales **aún no son fiables como modelos prescriptivos para el apoyo al estudiantado a escala**, lo que refuerza que el paso prescriptivo sigue exigiendo validación, ajuste fino y supervisión humana, y no una automatización lista para usar.

### Métodos y análisis de redes

Los métodos de redes son centrales para la analítica del aprendizaje: el [[network-analysis|análisis de redes de transición (TNA)]] modela secuencias temporales de acciones de quien aprende (por ejemplo, los bucles de revisión y de chat en la escritura andamiada por [[conversational-ai|chatbot]]), y el [[network-analysis|análisis de redes epistémicas (ENA)]] mapea cómo coocurren los códigos y constructos a lo largo de la actividad, y juntos revelan el *proceso* del aprendizaje y de la [[student-ai-interaction|interacción entre el estudiantado y la IA]] y no solo su producto.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Análisis de secuencias y de cadenas de Markov de la conducta autodirigida.** [[an-goel-self-directed-modeling-2026|An, Hammock y Goel (2025)]] combinaron el análisis de secuencias de actividad, la agrupación jerárquica y modelos de cadenas de Markov sobre los flujos de clics de 315 estudiantes en línea que construyeron 822 modelos ecológicos en VERA, y destilaron nueve clústeres conductuales finos basados en transiciones en tres patrones más amplios (observación, construcción y exploración). Su trabajo demuestra que combinar el análisis de secuencias con el modelado de cadenas de Markov puede descubrir conducta significativa en tareas no estructuradas y [[self-directed-learning|autodirigidas]], incluso en ausencia total de datos demográficos o contextuales.

- **La analítica del aprendizaje y la IA generativa dan forma al diseño del aprendizaje de maneras distintas (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]] usaron ENA sobre 11 grupos focales de docentes para comparar cómo la analítica del aprendizaje y la [[generative-ai|IA generativa]] informan la toma de decisiones de [[learning-design|diseño del aprendizaje]]. Las conversaciones sobre analítica del aprendizaje se centraron en información contextual, el diseño a nivel de curso y la [[problem-solving|resolución de problemas]] creativa (analítica para diagnosticar la implicación y focalizar el apoyo), mientras que las conversaciones sobre IA generativa se centraron en el [[assessment|diseño de la evaluación]] y en diseñar para la [[self-determination-theory|autodeterminación]] del estudiantado (IA generativa para la ideación y el desarrollo de evaluaciones). El contexto y la [[creativity|creatividad]] fueron centrales en ambas, un recordatorio de que la analítica informa el diseño solo dentro de un contexto [[pedagogy|pedagógico]] y de la autonomía del profesorado.

- **Analítica del diseño: minar secuencias de actividad planificadas en lugar de rastros (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec y Horvat (2026)]] aplicaron cadenas de Markov y minería de patrones secuenciales a la secuencia *diseñada* de 29.064 actividades de enseñanza y aprendizaje en 554 cursos planificados en una herramienta abierta de diseño del aprendizaje. La matriz de transición alcanzó su máximo en la transición de evaluación a discusión (0,332), las autotransiciones dominaron la práctica (0,317) y la adquisición (0,292), y la regla consecutiva más fuerte fue adquisición, evaluación, práctica y práctica (confianza 0,743, lift 1,449), mientras que la ruta de cuatro pasos más frecuente fue adquisición, práctica, práctica, evaluación (120 apariciones). La discusión y la evaluación fueron los tipos más alcanzables y la producción el más distante y esporádico. El estudio recuerda que la analítica del aprendizaje no tiene por qué empezar con rastros del LMS: los datos de diseño pueden exponer la gramática pedagógica de un curso antes de que llegue ningún estudiante, aunque los autores insisten en que el parecido con diseños invertidos, basados en la indagación o [[project-based-learning|basados en proyectos]] no es prueba de intención.

- **LLM destilados que se autoexplican (2026):** una cadena de dos etapas destila un estimador de analítica del aprendizaje de caja negra y su interpretación posterior al hecho en un [[llm|LLM]] pequeño y de pesos abiertos que devuelve tanto una estimación a nivel individual como una explicación en lenguaje natural. Una auditoría centrada en la fidelidad evalúa si las narraciones coinciden con las atribuciones que describen; la [[simulation|simulación]] muestra una recuperación casi sin pérdida (r > 0,90) con un mentor oráculo, lo que ofrece una vía más transparente y desplegable para la analítica ([[distilling-self-explaining-lm-learning-analytics-2026]]).

- **Facilitadores de las intervenciones educativas basadas en la analítica del aprendizaje (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak y Kadoić (2026)]] identifican y priorizan siete facilitadores de intervenciones educativas basadas en la analítica del aprendizaje que sean dignas de confianza mediante Delphi + AHP + SNAP: la orientación estratégica [[governance|institucional]], los fundamentos pedagógicos y de otra índole de [[research-methods-aied|investigación]], los recursos disponibles, el apoyo pedagógico, la ética y la gobernanza de datos, la participación de los actores y el aseguramiento de la calidad. La orientación estratégica institucional obtuvo la puntuación más alta (y la mayor influencia sobre los demás facilitadores), con los recursos disponibles en segundo lugar. La [[trust|confiabilidad]] (cumplimiento ético, algoritmos transparentes y sin sesgos, validez pedagógica) se enmarca como el requisito previo sin el cual las intervenciones basadas en la analítica del aprendizaje no tienen sentido.
- **La profundidad de interacción con el LLM predice la calidad de la tarea, pero no el recuerdo (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] vincula la telemetría conversacional del LLM a nivel de turno (profundidad, volumen y ritmo) con las [[learning-gains|mejoras en el aprendizaje]]: la «profundidad» de búsqueda de explicaciones predijo la calidad de la tarea evaluada de forma independiente (β = 6,27), pero no el recuerdo inmediato, una disociación entre la comprensión impulsada por la elaboración y la consolidación impulsada por la recuperación que tiene implicaciones para cómo se mide y se evalúa la interacción con el [[llm|LLM]] en la analítica del aprendizaje.
- **Simulación del discurso colaborativo para la analítica del aprendizaje.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]] usa agentes LLM ajustados y específicos de cada participante para reproducir diálogos de resolución colaborativa de problemas, validados con el análisis de redes epistémicas (distancia ENA de 0,17, p de permutación = 0,65). El enfoque ofrece a quienes investigan la analítica del aprendizaje una forma escalable de generar discurso colaborativo auténtico para estudiar la dinámica de la interacción, los turnos de palabra y las trayectorias de los códigos temáticos sin recoger nuevos datos humanos.
- **Datos abiertos y reproducibles y analítica lista para rastros.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] publica un [[benchmark|punto de referencia]] sintético con un esquema listo para rastros (N=540; 360 sesiones; 1.440 episodios) para analizar la interacción y el equilibrio de participación en la programación colaborativa. Los datos de registros y de rastros son el contrapeso natural de las [[self-report-measures|medidas de autoinforme]] en esta literatura: a menudo se mide dos veces el mismo constructo, una preguntando y otra observando, y las dos no siempre coinciden. Por separado, un marco exploratorio de aprendizaje automático con análisis SHAP identificó los constructos relacionados con el aprendizaje más asociados con el uso académico previsto de ChatGPT entre estudiantes universitarios, dando prioridad a la [[explainable-ai|interpretabilidad]] ([[determinants-chatgpt-use-higher-education-2026]]).

### Conexiones

La analítica del aprendizaje se conecta con el [[knowledge-tracing|seguimiento del conocimiento]] (la analítica central), la [[formative-assessment|evaluación formativa]] (la evaluación basada en la analítica), el [[student-modeling|modelado del estudiantado]] (la representación de quien aprende que puebla la analítica), la [[privacy|privacidad]] (la restricción [[ethics|ética]]) y las [[edtech-platform|plataformas de tecnología educativa]] (donde se despliega la analítica). Como la analítica prescriptiva se evalúa cada vez más con [[simulating-students|estudiantado simulado]], es decir, cohortes sintéticas que sustituyen a las cohortes reales en pruebas controladas, la analítica del aprendizaje también se conecta con la simulación del estudiantado.

- **Lo que los cuadros de mando hacen visible decide sobre qué actúa el profesorado.** [[ai-supported-lecturer-decision-making-2026|Köroğlu et al. (2026)]] revisaron 27 estudios empíricos (2016-2025) y construyeron una taxonomía sociotécnica de la toma de decisiones del profesorado apoyada por IA en ocho tipos de decisión: didáctica, curricular, de evaluación, de retroalimentación, de entorno de aprendizaje, emocional, administrativa y ética. Los cuadros de mando de analítica del aprendizaje fueron el sistema más frecuentemente reportado, y la codificación muestra que el apoyo se concentra en las decisiones didácticas, de retroalimentación y de evaluación que los datos textuales y de registros de conducta pueden informar, mientras que las decisiones emocionales, éticas, curriculares y de entorno de aprendizaje rara vez recibieron apoyo. Los autores lo leen como un efecto de atención y no como un límite de capacidad: como los sistemas hacían visible y accionable la conducta del estudiantado, la motivación, la [[metacognition|metacognición]], la emoción y el entorno quedaron fuera de lo que los datos invitaban a considerar al profesorado.

El instrumental a nivel de proceso es el siguiente escalón hacia abajo de la capa descriptiva. [[pulla-parsons-problem-tool-2026|Prol et al. (2026)]] ampliaron una plataforma de problemas de Parsons de [[open-source|código abierto]] para registrar cada colocación, retirada y entrega de bloque como un rastro cronológico, emparejar cada entrega con un coloreado de corrección por bloque y un historial de intentos, y pasar opcionalmente los rastros por una cadena de [[llm|LLM]] que etiqueta patrones de dificultad recurrentes para su revisión por parte del profesorado. En 68 estudiantes de un curso superior de diseño de software en Java y 36 de un curso introductorio de Python, el análisis sacó a la luz las mismas tres dificultades (elegir el tipo de excepción equivocado, sustituir `return` por `throw` y un orden incorrecto del flujo de control), que los recuentos de corrección e intentos no pueden exponer, porque responden a *si* la disposición era correcta y no a *cuál fue el proceso*. La IA actúa como intérprete para el [[teacher-role|profesorado]] y no como evaluadora del estudiantado, y su salida se enmarca como una hipótesis revisable sobre las dificultades de una clase y no como una calificación.

## Conceptos conectados

- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]

## Artículos conectados

- [[ai-supported-lecturer-decision-making-2026]] — AI-Supported Lecturer Decision-Making in Higher Education
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Markov chain and pattern mining of 29,064 planned activities in 554 courses, revealing a design grammar led by Acquisition and consolidating Practice
- [[pulla-parsons-problem-tool-2026]] — Pulla: process-level behavioral tracing and instructor-facing difficulty analysis in Parsons problems (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[league-ethical-governance-student-data-2026]]
- [[precision-education-student-digital-twins-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
