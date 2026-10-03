---
title: Seguimiento del conocimiento
created: "2026-09-28T18:19:10-04:00"
updated: "2026-10-02T21:20:37-04:00"
connected_faqs: [making-simulated-students-behave-like-learners]
type: concept
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-02T08:36:43-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El seguimiento del conocimiento** (*knowledge tracing*) — modelar lo que quien aprende sabe a lo largo del tiempo registrando su desempeño en los ejercicios y prediciendo su dominio futuro. Es el hilo de modelado más rico de la base de conocimiento, y abarca enfoques bayesianos, de aprendizaje profundo y [[llm|mejorados con LLM]] para seguir el conocimiento del estudiantado a medida que evoluciona.

## Preguntas para reflexionar

- El seguimiento del conocimiento modela lo que usted sabe a lo largo del tiempo a partir de su desempeño en los ejercicios, y registra cuándo se adquiere el conocimiento y cuándo se deteriora. ¿Qué pueden revelar sus respuestas sobre si de verdad «sabe» algo, frente a si simplemente acertó esta vez?
- La página advierte que «el dominio no es la corrección»: quien aprende puede parecer que domina algo y, aun así, aplicar mal de forma sistemática una habilidad cuando se infringe una condición oculta. ¿Cuándo ha visto que alguien (o usted mismo) pareciera entender algo sin entenderlo en realidad?
- Si el seguimiento del conocimiento alimenta sistemas adaptativos que deciden qué enseñar después, ¿qué sale mal cuando el modelo confunde respuestas correctas con dominio real y hace avanzar al estudiantado demasiado pronto?
- El seguimiento del conocimiento adopta muchas formas: bayesiana, neuronal, hipergráfica, basada en diálogo, mejorada con LLM. ¿Qué compensaciones cabría esperar entre un modelo transparente que se puede explicar y uno potente pero opaco?
- La página conecta el seguimiento del conocimiento con los estudiantes simulados: generar los estados de conocimiento que el seguimiento normalmente infiere a partir de datos reales. ¿Cómo podría ayudar simular a quien aprende a la hora de probar un tutor antes de que se encuentre con estudiantado real?
- Dado que el conocimiento se deteriora con el tiempo, ¿qué debería hacer un sistema adaptativo con el «dominio» pasado de un estudiante una vez que lo ha olvidado? ¿Cómo diseñaría para el olvido en lugar de suponer que el conocimiento persiste?

## Introducción

El seguimiento del conocimiento transforma las respuestas brutas a los ejercicios en estimaciones de lo que un estudiante ha dominado y de lo que todavía necesita aprender. A diferencia del simple registro de la corrección, el seguimiento del conocimiento modela la dinámica temporal del aprendizaje: cuándo se adquiere el conocimiento, cuándo se deteriora y cómo se relacionan los conceptos entre sí.

### Enfoques representados en la base de conocimiento

- **Enfoques bayesianos:** [[stanbkt-bayesian-knowledge-tracing]] estandariza las implementaciones de BKT, mientras que [[mbp-kt-meta-behavioral-knowledge-tracing]] incorpora señales metaconductuales
- **BKT con evidencia blanda y una función de observación basada en LLM:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] conserva la estructura del BKT pero sustituye la observación binaria correcto/incorrecto —la entrada del BKT estándar— por una continua: un evaluador [[llm]] emite evidencia de dominio graduada más un peso de confianza, que se combinan en una posterior encogida por la confianza y se condicionan de modo que una respuesta claramente incorrecta no pueda elevar la estimación, lo que convierte la actualización en una variante que generaliza el BKT estándar en lugar de ser una reducción estricta de él. Que esa función de observación sea fiable depende de quien aprende: la evidencia media separó con claridad los niveles de habilidad (0,25 débil / 0,67 mixto / 0,77 fuerte), mientras que la correlación dentro de cada nivel con el dominio real fue de solo r ≈ 0,15 / 0,48 / 0,41, lo que deja el estado trazado como una creencia de un agente sobre quien aprende, más que como una medición calibrada.
- **Modelos neuronales e híbridos:** [[neural-symbolic-knowledge-tracing]] combina el razonamiento simbólico con [[machine-learning|redes neuronales]]; [[explainable-probabilistic-kt]] avanza modelos probabilísticos interpretables
- **Redes de memoria hipergráficas:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] amplía el seguimiento basado en memoria (DKVMN) con razonamiento hipergráfico temporal, y modela interacciones dinámicas de orden superior entre conceptos que coocurren en preguntas de varias habilidades
- **KT basado en diálogo:** [[huang-interpretable-knowledge-tracing-2026]] adapta el seguimiento del conocimiento a la tutoría conversacional
- **Mejorado con LLM:** [[xie-hillm-cd-2026|HiLLM-CD]] usa LLM para la construcción automática de árboles de conceptos y la inferencia jerárquica de competencia
- **KT semántico orientado a la recomendación:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel y Sachan, 2025)]] fundamenta la *entrada* en lugar de la arquitectura: un LLM anota cada pregunta con pasos de solución y conceptos de conocimiento alineados con los Common Core State Standards for Mathematics, el aprendizaje contrastivo alinea las incrustaciones de pregunta, paso de solución y concepto (con los falsos negativos eliminados mediante el preagrupamiento de variantes de conceptos como «interpretar un gráfico de barras» y «leer información de un gráfico de barras»), y una pérdida de calibración de KC permite al trazador predecir directamente un estado de conocimiento a nivel de concepto en lugar de inferirlo ejecutando el modelo sobre cada pregunta de ese concepto. El trazador calibrado sirve entonces como entorno de aprendizaje por refuerzo para la recomendación de ejercicios, donde una estimación de valor basada en modelo inicializa el crítico a partir del propio trazador. En cuatro tareas sobre XES3G5M promediadas sobre 2.048 estudiantes de prueba, las líneas de base sin RL dieron ganancias de conocimiento marginales o negativas, los métodos continuos basados en valor superaron a los basados en política, y la estimación de valor basada en modelo los mejoró de forma consistente, sobre todo en la tarea del concepto más débil, donde el objetivo cambia en cada paso. Las ganancias reportadas son porcentaje de mejora máxima del conocimiento, no resultados de aprendizaje, y la cadena de procesamiento depende de pasos de solución generados cuya calidad el trazador hereda.
- **Seguimiento del conocimiento basado en resultados (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] siguen el conocimiento del estudiantado dentro de sistemas de educación basada en resultados tratando los **resultados de curso como los propios conceptos de conocimiento**, y sustituyen las relaciones de conceptos derivadas de la atención o de grafos por «asignaciones de afinidad» de la OBE validadas por expertos entre resultados de curso y de programa. Una red neuronal con memoria aumentada (MANN) modela cómo la consecución de cada resultado afecta a los demás, y el ajuste fino de BERT adaptado al dominio enriquece las incrustaciones de resultados (con un núcleo GRU que supera a LSTM). Sobre datos reales del LMS de un programa de [[engineering-education|ingeniería]] (2.416 estudiantes, 966 resultados), el OKT alcanzó un AUC del 89,81%, por encima de DKT, DKVMN, EKT y SimpleKT, mientras que en ASSISTments solo dio resultados competitivos, lo que confirma que la ventaja está ligada a la estructura de [[curriculum-design|currículo]] específica de la OBE.
- **Seguimiento solo con instantáneas.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] inducen un orden pseudotemporal a partir de las relaciones de inclusión entre los conjuntos de habilidades de quienes aprenden, tratando los conjuntos de habilidades en expansión como progresión de aprendizaje, de modo que las instantáneas de un solo momento siguen siendo trazables; pero la formulación supone que las habilidades nunca se pierden, así que los despliegues para quienes aprenden que retroceden necesitan antes un mecanismo explícito de olvido.

### Relación con otros conceptos

El seguimiento del conocimiento está estrechamente relacionado con el [[student-modeling]]: mientras que el seguimiento del conocimiento modela específicamente el conocimiento cognitivo a lo largo del tiempo, el modelado del estudiantado es la práctica más amplia de representar todos los aspectos de quien aprende (estado [[affective-computing|afectivo]], [[student-engagement|implicación]], preferencias). El seguimiento del conocimiento alimenta los sistemas de [[adaptive-learning]] y [[personalized-learning]] que necesitan saber qué enseñar después, y las plataformas de [[intelligent-tutoring]] que usan las estimaciones de dominio para seleccionar problemas adecuados. Se conecta con la [[learning-analytics]] para el diseño de paneles e intervenciones, y con el [[cognitive-diagnosis]] para la [[assessment]] de habilidades de grano fino. Los constructos del seguimiento del conocimiento también informan a los [[simulating-students|estudiantes simulados]]: el estado cognitivo de quien aprende simulado suele formalizarse con las mismas dinámicas de dominio y deterioro que modela el seguimiento del conocimiento, de modo que la [[simulation]] es una forma de *generar* los estados de conocimiento que los métodos de seguimiento normalmente *infieren* a partir de datos de respuesta reales.

**Una advertencia de alcance: el seguimiento estima el dominio del ámbito, no la cognición de orden superior.** Una revisión de 15 años y 127 estudios de tutoría inteligente encuentra que el seguimiento bayesiano y el de aprendizaje profundo mejoraron durante el periodo, pero siguen sin poder modelar procesos cognitivos de orden superior, la metacognición o la motivación, los estados que un sistema adaptativo más necesitaría abordar ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]])).

**Una advertencia: el dominio no es la corrección.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] muestran que el supuesto de dos estados (aprendido/no aprendido) del BKT puede verse infringido por la *sobregeneralización engañosa*: quien aprende puede parecer que domina algo y, aun así, aplicar mal de forma sistemática una habilidad cuando se infringe una restricción de aplicación oculta. Esto aboga por seguir la comprensión condicional (saber *cuándo abstenerse* de una acción), y no solo la corrección de la acción, cuando las estimaciones de dominio gobiernan reglas de parada [[adaptive-learning|adaptativas]].

**Una advertencia relacionada se refiere a *cómo* se validan los modelos de seguimiento frente a cómo se despliegan.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan y Carvalho (2025)]] ajustaron BKT, BKT con olvido y el Modelo de Factores Aditivos a un conjunto de datos de reaprendizaje sucesivo de varias sesiones y encontraron que reproducen las tendencias de aprendizaje cuando se ajustan de forma retrospectiva a todas las sesiones (AUC aceptable ≈ 0,74–0,79); pero bajo **validación cruzada basada en el tiempo** —entrenar con una sesión para predecir la siguiente, el escenario aplicado realista—, los tres sobreestiman el desempeño futuro en aproximadamente un 47–58%, no logran capturar el [[desirable-difficulties|efecto de espaciado]] y pueden incluso predecir el orden ordinal equivocado entre condiciones de práctica. De manera reveladora, los modelos *sin* un mecanismo explícito de olvido rindieron de forma parecida a las versiones aumentadas con olvido a medida que se acumulaban las sesiones, lo que sugiere que el olvido quedó en parte absorbido por otros parámetros (por ejemplo, las intersecciones por estudiante en el AFM) en lugar de modelarse de verdad. Los autores vinculan esto a la distinción entre aprendizaje y desempeño: los modelos populares confunden un alto desempeño momentáneo con una alta probabilidad de retención a largo plazo. La implicación práctica es que un trazador que se ve bien en un ajuste retrospectivo puede inducir a error a los sistemas adaptativos que consumen sus estimaciones de dominio, lo que aboga por una evaluación progresiva (*walk-forward*) y por modelos que tengan en cuenta el intervalo de retención, el espaciado y el olvido entre sesiones.

**Otra advertencia más se refiere a la regla de evidencia que alimenta la actualización.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] aplicó cuatro reglas de actualización sobre secuencias de eventos idénticas de ASSISTments 2012–13, que solo diferían en cómo puntuaban las filas completadas con ayuda, sobre una mitad confirmatoria de 12.716 estudiantes y 985.813 eventos puntuados. Leer una fila con pista o reintento como un primer intento fallido predijo mejor el desempeño posterior sin ayuda (AUC agrupado 0,658); acreditar cualquier finalización lo predijo peor (0,604), apenas por encima de una constante que solo conoce la dificultad de la habilidad (0,595). La misma elección gobierna el recuento de dominio: acreditar las finalizaciones declaró dominados el 93,9% de 113.428 pares estudiante–habilidad, frente al 72,8% con la regla estricta, y los pares que la regla indulgente declaró por delante de la estricta alcanzaron después un 70,9% de precisión sin ayuda, frente al 85,7% donde ambas coincidían, por debajo de la tasa base de 0,744. Un estado trazado es, por tanto, en parte función de la convención de puntuación y no solo de quien aprende, de modo que una estimación de dominio consumida por una compuerta [[adaptive-learning|adaptativa]] debería llevar consigo la regla que la produjo.

**Una advertencia de capacidad: los modelos de lenguaje generales siguen el conocimiento apenas por encima de una línea de base trivial.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] publicaron FoundationalASSIST, que restaura el texto completo de las preguntas, las respuestas que el estudiantado dio realmente y sus opciones de distractor que los conjuntos de datos de seguimiento anteriores descartaban, y probaron cuatro [[llm|LLM]] de frontera como trazadores de cero disparos. El mejor, GPT-OSS-120B, alcanzó 56,2 por ciento frente al 51,3 por ciento que ya consigue una regla de predecir siempre correcto (AUC-ROC 0,559), sin mejora con historiales más largos, y Llama-3.3-70B acertó el 85,4 por ciento de las veces que un estudiante respondió correctamente, pero solo el 12,6 por ciento cuando se equivocó, evidencia de que un modelo listo para usar sigue el optimismo y no la comprensión, así que la habilidad aparente de un trazador debe leerse frente a la línea de base trivial que su tarea permite.

## Conceptos conectados

- [[learners]] — Estudiantes: el marco general de los conceptos del lado de quien aprende
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
- [[student-support-and-success]] — estimación de dominio de grano fino que alimenta las decisiones de apoyo
## Artículos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobregeneralización engañosa: el dominio adaptativo puede detener la práctica antes de que quien aprende sepa cuándo abstenerse de una acción (An, McLaren y Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Seguimiento del conocimiento basado en resultados con asignación de afinidad
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Seguimiento fundamentado semánticamente con estados calibrados por KC, usado como entorno de RL para la recomendación
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende de quien aprende en un bucle de coaprendizaje humano-IA
- [[crediting-assisted-work-inflates-mastery-2026]] — Qué regla de evidencia decide una afirmación de dominio (Srivastava 2026)