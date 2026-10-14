---
title: Seguimiento del conocimiento
created: "2026-09-28T18:19:10-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

> **Seguimiento del conocimiento** — modelar lo que quienes aprenden saben a lo largo del tiempo registrando su desempeño en los ejercicios y prediciendo el dominio futuro. Es el hilo de modelado más rico de la base de conocimientos, y abarca enfoques bayesianos, de aprendizaje profundo y [[llm|mejorados con LLM]] para seguir el conocimiento del estudiantado a medida que evoluciona.

## Preguntas para reflexionar

- El seguimiento del conocimiento modela lo que usted sabe a lo largo del tiempo a partir de su desempeño en los ejercicios, y registra cuándo se adquiere el conocimiento y cuándo se deteriora. ¿Qué pueden revelar sus respuestas sobre si de verdad «sabe» algo, frente a si simplemente acertó esta vez?
- La página advierte que «el dominio no es la corrección»: quien aprende puede parecer que domina algo y, aun así, aplicar mal de forma sistemática una habilidad cuando se infringe una condición oculta. ¿Cuándo ha visto que alguien (o usted mismo) pareciera entender algo sin entenderlo en realidad?
- Si el seguimiento del conocimiento alimenta sistemas adaptativos que deciden qué enseñar después, ¿qué sale mal cuando el modelo confunde respuestas correctas con dominio real y hace avanzar al estudiantado demasiado pronto?
- El seguimiento del conocimiento adopta muchas formas: bayesiana, neuronal, hipergráfica, basada en el diálogo, mejorada con LLM. ¿Qué compensaciones cabría esperar entre un modelo transparente que se puede explicar y uno potente pero opaco?
- La página conecta el seguimiento del conocimiento con los estudiantes simulados: generar los estados de conocimiento que el seguimiento normalmente infiere a partir de datos reales. ¿Cómo podría ayudar simular a quien aprende a la hora de probar un tutor antes de que se encuentre con estudiantado real?
- Dado que el conocimiento se deteriora con el tiempo, ¿qué debería hacer un sistema adaptativo con el «dominio» pasado de un estudiante una vez que lo ha olvidado? ¿Cómo diseñaría para el olvido en lugar de suponer que el conocimiento persiste?

## Introducción

El seguimiento del conocimiento transforma las respuestas brutas a los ejercicios en estimaciones de lo que un estudiante ha dominado y de lo que todavía necesita aprender. A diferencia del simple registro de la corrección, el seguimiento del conocimiento modela la dinámica temporal del aprendizaje: cuándo se adquiere el conocimiento, cuándo se deteriora y cómo se relacionan los conceptos entre sí.

### Enfoques representados en la base de conocimientos

- **Enfoques bayesianos:** [[stanbkt-bayesian-knowledge-tracing]] estandariza las implementaciones de BKT, mientras que [[mbp-kt-meta-behavioral-knowledge-tracing]] incorpora señales metacomportamentales
- **BKT de evidencia blanda con una función de observación basada en LLM:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] conserva la estructura de la BKT, pero sustituye la observación binaria de correcto o incorrecto — la entrada de la BKT estándar — por una continua: un calificador basado en [[llm]] emite evidencia de dominio graduada junto a un peso de confianza, que se mezcla en una posterior encogida por la confianza y se condiciona de modo que una respuesta claramente errónea no pueda elevar la estimación, lo que convierte la actualización en una variante que generaliza la BKT estándar en lugar de reducirse a ella estrictamente. Que esa función de observación sea fiable depende de quien aprende: la evidencia media separó limpiamente los niveles de capacidad (0,25 débil / 0,67 mixto / 0,77 fuerte), mientras que la correlación dentro de cada nivel con el dominio real fue de apenas r ≈ 0,15 / 0,48 / 0,41, lo que deja el estado trazado como una creencia del agente sobre quien aprende más que como una medición calibrada.
- **Modelos neuronales e híbridos:** [[neural-symbolic-knowledge-tracing]] combina el razonamiento simbólico con [[machine-learning|redes neuronales]]; [[explainable-probabilistic-kt]] impulsa los modelos probabilísticos interpretables
- **Redes de memoria hipergráficas:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] aumenta el seguimiento basado en memoria (DKVMN) con razonamiento hipergráfico temporal, modelando interacciones dinámicas de orden superior entre conceptos que coaparecen dentro de preguntas multihabilidad
- **Seguimiento del conocimiento basado en el diálogo:** [[huang-interpretable-knowledge-tracing-2026]] adapta el seguimiento del conocimiento a la tutoría conversacional
- **Mejorado con LLM:** [[xie-hillm-cd-2026|HiLLM-CD]] usa LLM para la construcción automatizada de árboles de conceptos y la inferencia jerárquica de competencia
- **Seguimiento del conocimiento semántico y orientado a la recomendación:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel y Sachan, 2025)]] fundamenta la *entrada* más que la arquitectura: un LLM anota cada pregunta con pasos de solución y conceptos de conocimiento alineados con los Common Core State Standards for Mathematics, el aprendizaje contrastivo alinea las incrustaciones de pregunta, de paso de solución y de concepto (con los falsos negativos eliminados mediante preagrupamiento de variantes de conceptos como «interpretar un gráfico de barras» y «leer información de un gráfico de barras»), y una pérdida de calibración sobre componentes de conocimiento permite al trazador predecir directamente un estado de conocimiento a nivel de concepto en lugar de inferirlo ejecutando el modelo sobre todas las preguntas de ese concepto. El trazador calibrado sirve después como entorno de aprendizaje por refuerzo para la recomendación de ejercicios, donde una estimación de valor basada en modelo inicializa el crítico a partir del propio trazador. En cuatro tareas sobre XES3G5M promediadas sobre 2.048 estudiantes de prueba, las líneas base sin RL dieron ganancias de conocimiento marginales o negativas, los métodos continuos basados en valor superaron a los basados en políticas, y la estimación de valor basada en modelo los mejoró de forma constante, de forma más aguda en la tarea del concepto más débil, donde el objetivo cambia en cada paso. Las ganancias comunicadas son porcentajes de mejora máxima del conocimiento, no resultados de aprendizaje, y la cadena de proceso depende de los pasos de solución generados, cuya calidad hereda el trazador.
- **Seguimiento del conocimiento basado en resultados (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] rastrean el conocimiento del estudiantado dentro de sistemas de Educación Basada en Resultados (EBR) tratando los **resultados de la asignatura como los propios conceptos de conocimiento**, y sustituyen las relaciones conceptuales derivadas de la atención o de grafos por «mapeos de afinidad» de EBR validados por personas expertas entre los resultados de la asignatura y los del programa. Una red neuronal aumentada con memoria (MANN) modela cómo el logro de cada resultado afecta a los demás, y un ajuste fino con BERT adaptado al dominio enriquece las incrustaciones de resultados (con una red troncal GRU que supera a la LSTM). Con datos reales del LMS de un programa de [[engineering-education|ingeniería]] (2.416 estudiantes, 966 resultados), el OKT alcanzó un 89,81% de AUC, superando a DKT, DKVMN, EKT y SimpleKT, a la vez que daba solo resultados competitivos en ASSISTments, lo que confirma que la ventaja está ligada a la estructura [[curriculum-design|curricular]] propia de la EBR.

- **Un único escalar de recencia capta la mayor parte de lo que compra un modelo de secuencia.** Sobre 1.927.265 respuestas de matemáticas de 8.996 estudiantes finlandeses, la identidad del ítem por sí sola alcanzó un AUC de 0,8362; añadir una única medida de recencia relativa a la dificultad del ítem la elevó a 0,8669, recuperando el 93,5% de la ganancia de 0,8690 de un transformador condicionado por la consulta, mientras que un resumen de 128 dimensiones del historial alcanzó solo 0,8687 ([[knowledge-tracing-compression-math-2026|Lahtinen y McMullen (2026)]]).
- **Seguimiento solo con instantáneas.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] inducen un orden pseudotemporal a partir de las relaciones de inclusión entre los conjuntos de habilidades de quienes aprenden, tratando los conjuntos de habilidades en expansión como progresión de aprendizaje, de modo que las instantáneas de un único momento siguen siendo trazables; pero la formulación supone que las habilidades nunca se pierden, así que los despliegues para quienes aprenden y experimentan regresión necesitan primero un mecanismo explícito de olvido.

### Relación con otros conceptos

El seguimiento del conocimiento está estrechamente relacionado con el [[student-modeling]] — mientras que el seguimiento del conocimiento modela específicamente el conocimiento cognitivo a lo largo del tiempo, el modelado del estudiante es la práctica más amplia de representar todos los aspectos de una persona que aprende (el estado [[affective-computing|afectivo]], la [[student-engagement|implicación]], las preferencias). El seguimiento del conocimiento alimenta los sistemas de [[adaptive-learning]] y de [[personalized-learning]] que necesitan saber qué enseñar después, y las plataformas de [[intelligent-tutoring]] que usan las estimaciones de dominio para seleccionar los problemas adecuados. Conecta con la [[learning-analytics]] para el diseño de paneles e intervenciones, y con el [[cognitive-diagnosis]] para la [[assessment]] detallada de habilidades. Las construcciones del seguimiento del conocimiento también informan a los [[simulating-students|estudiantes simulados]]: el estado cognitivo de un estudiante simulado suele formalizarse con la misma dinámica de dominio y deterioro que modela el seguimiento del conocimiento, de modo que la [[simulation]] es una forma de *generar* los estados de conocimiento que los métodos de seguimiento normalmente *infieren* a partir de datos de respuesta reales.

**Una advertencia de alcance: el seguimiento estima el dominio de un dominio, no la cognición de orden superior.** Una revisión de 15 años de 127 estudios de tutoría inteligente halla que el seguimiento bayesiano y el de aprendizaje profundo mejoraron a lo largo del periodo, pero siguen sin poder modelar los procesos cognitivos de orden superior, la metacognición ni la motivación, es decir, los estados que un sistema adaptativo más necesitaría abordar ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

**Una advertencia: el dominio no es la corrección.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] muestran que la suposición de dos estados de la BKT (aprendido o no aprendido) puede vulnerarse por la *sobre-generalización engañosa*: quienes aprenden pueden parecer que dominan algo y, aun así, aplicar mal una habilidad de forma sistemática cuando se vulnera una restricción oculta de aplicación. Esto aboga por rastrear la comprensión condicional (saber *cuándo abstenerse* de una acción), y no solo la corrección de la acción, cuando las estimaciones de dominio gobiernan reglas de parada [[adaptive-learning|adaptativas]].

**Una advertencia emparentada se refiere a *cómo* se validan los modelos de seguimiento frente a cómo se despliegan.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan y Carvalho (2025)]] ajustaron la BKT, la BKT con olvido y el modelo de factores aditivos a un conjunto de datos de reaprendizaje sucesiva en varias sesiones, y hallaron que reproducen las tendencias de aprendizaje cuando se ajustan de forma retrospectiva a todas las sesiones (AUC aceptable de ≈ 0,74 a 0,79); pero bajo una **validación cruzada basada en el tiempo** — entrenar en una sesión para predecir la siguiente, el escenario aplicado realista — los tres sobrestiman el rendimiento futuro entre un 47% y un 58% aproximadamente, no logran capturar el [[desirable-difficulties|efecto de espaciado]] e incluso pueden predecir el orden ordinal equivocado entre condiciones de práctica. Lo revelador es que los modelos *sin* un mecanismo explícito de olvido funcionaron aproximadamente tan bien como las versiones aumentadas con olvido a medida que se acumulaban las sesiones, lo que sugiere que el olvido quedó en parte absorbido por otros parámetros (por ejemplo, las constantes por estudiante en el AFM) en lugar de modelarse de verdad. Los autores relacionan esto con la distinción entre aprendizaje y rendimiento: los modelos populares confunden un rendimiento alto en el momento con una alta probabilidad de retención a largo plazo. La implicación práctica es que un trazador que parece bueno en el ajuste retrospectivo puede inducir a error a los sistemas adaptativos que consumen sus estimaciones de dominio, lo que aboga por la evaluación con ventana deslizante (walk-forward) y por modelos que tengan en cuenta el intervalo de retención, el espaciado y el olvido entre sesiones.

**Otra advertencia se refiere a la regla de evidencia que alimenta la actualización.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] ejecutó cuatro reglas de actualización sobre secuencias idénticas de eventos de ASSISTments 2012–13, que diferían solo en cómo puntúan las filas completadas con ayuda, sobre una mitad confirmatoria de 12.716 estudiantes y 985.813 eventos puntuados. Leer una fila con pista o reintentada como un primer intento fallido predijo mejor el desempeño posterior sin ayuda (AUC agrupado de 0,658); otorgar crédito a cualquier compleción lo predijo peor (0,604), apenas por encima de una constante que solo conoce la dificultad de la habilidad (0,595). La misma elección gobierna el recuento de dominio: otorgar crédito a las compleciones declaraba dominadas el 93,9% de 113.428 pares estudiante-habilidad frente al 72,8% con la regla estricta, y los pares que la regla indulgente declaraba por delante de la estricta acabaron con un 70,9% de precisión sin ayuda frente al 85,7% donde ambas coincidían, por debajo de la tasa base del 0,744. Un estado trazado es, por tanto, en parte una función de la convención de puntuación y no solo de quien aprende, de modo que una estimación de dominio consumida por una puerta [[adaptive-learning|adaptativa]] debería llevar consigo la regla que la produjo.

**Una advertencia de capacidad: los modelos de lenguaje generales rastrean el conocimiento apenas por encima de una línea base trivial.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] publicaron FoundationalASSIST, que restaura el texto completo de las preguntas, las respuestas que el estudiantado dio de verdad y sus elecciones de distractores que los conjuntos de datos de seguimiento anteriores descartaban, y pusieron a prueba cuatro [[llm|LLM]] de frontera como trazadores sin ejemplos previos. El mejor, GPT-OSS-120B, alcanzó un 56,2% frente al 51,3% que ya puntúa una regla que siempre predice «correcto» (AUC-ROC de 0,559), sin mejora con historiales más largos, y Llama-3.3-70B acertó el 85,4% de las veces que un estudiante respondía correctamente, pero solo el 12,6% cuando se equivocaba, una prueba de que un modelo de catálogo rastrea optimismo más que comprensión, de modo que la aparente habilidad de un trazador debe leerse frente a la línea base trivial que su tarea permite.
- **Un LLM de una sola pasada puede rastrear el conocimiento antes de que se registre ninguna persona que aprenda.** Consultado como una única pregunta tipada, sin datos de la plataforma objetivo, Jev alcanzó un AUC medio de 0,706, por encima del mejor de 28 modelos de seguimiento profundo entrenados con 8 personas que aprenden (0,689), y por delante hasta que el seguimiento supervisado lo alcanza con 64–128 personas que aprenden ([[system-one-llm-knowledge-tracing-2026|Lee y Park, 2026]]).

## Conceptos conectados

- [[learners]] — Learners: el paraguas de los conceptos del lado de quien aprende
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — estimación detallada del dominio que alimenta las decisiones de apoyo

## Artículos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobre-generalización engañosa: el dominio adaptativo puede detener la práctica antes de que quienes aprenden sepan cuándo abstenerse de una acción (An, McLaren y Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Seguimiento del conocimiento basado en resultados con mapeo de afinidad
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — seguimiento fundamentado semánticamente con estados calibrados por componentes de conocimiento, usado como entorno de RL para la recomendación
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[crediting-assisted-work-inflates-mastery-2026]] — Qué regla de evidencia decide una afirmación de dominio (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — Un LLM de una sola pasada rastrea el conocimiento por encima de los modelos profundos entrenados con 8 personas que aprenden, a una fracción del coste (Lee y Park 2026)
- [[knowledge-tracing-compression-math-2026]] — Comprimir el historial del estudiante en el seguimiento del conocimiento en matemáticas
