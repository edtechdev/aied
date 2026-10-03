---
title: Modelado del estudiantado e instrucción adaptativa
created: "2026-09-28T18:15:36-04:00"
updated: "2026-10-02T21:16:54-04:00"
connected_faqs: [making-simulated-students-behave-like-learners]
type: concept
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
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

> **El modelado del estudiantado y la instrucción adaptativa** — el paraguas de cómo la IA representa a quien aprende (qué sabe, qué siente y qué necesita) y de cómo usa esas representaciones para adaptar la [[teacher-role|enseñanza]]. La familia abarca la capa de *modelado* —el **modelado del estudiantado**, el [[knowledge-tracing|seguimiento del conocimiento]], el [[cognitive-diagnosis|diagnóstico cognitivo]] y la [[simulating-students|simulación del estudiantado]]— y los *sistemas adaptativos* que consumen esos modelos: la [[intelligent-tutoring|tutoría inteligente]], el [[adaptive-learning|aprendizaje adaptativo]] y el [[personalized-learning|aprendizaje personalizado]]. La pregunta compartida: *¿cómo sabe un sistema lo que sabe quien aprende, y qué debería enseñarle después?*

## Preguntas para reflexionar

- La pregunta paraguas que plantea esta página es: ¿cómo sabe un sistema lo que sabe quien aprende, y qué debería enseñarle después? Antes de seguir leyendo, ¿cómo empezaría siquiera a representar «lo que sabe quien aprende» en una máquina?
- El modelado del estudiantado abarca el seguimiento del conocimiento (rastrear el conocimiento a lo largo del tiempo), el diagnóstico cognitivo (mapear las habilidades dominadas) y la simulación del estudiantado (estudiantes sintéticos). ¿En qué cree que es bueno cada enfoque, y en qué corre el riesgo de equivocarse cada uno?
- Toda IA adaptativa depende de algún modelo de quien aprende. Si un modelo vale solo lo que vale la evidencia que lo alimenta, ¿qué evidencia cree que tienen realmente los sistemas de IA sobre un estudiante, y qué cosas importantes sobre él siguen siendo invisibles?
- Un modelo puede capturar lo que un estudiante acierta y falla, pero no por qué, ni cómo se siente. ¿Cómo podría un modelo del estudiantado engañar a un sistema adaptativo de formas que perjudiquen al estudiante en lugar de ayudarle?
- Si diseñara un tutor adaptativo, ¿qué querría que incluyera su modelo de usted, y qué querría que tuviera explícitamente prohibido dar por supuesto?

## Introducción

El modelado del estudiantado es la representación computacional de quien aprende; la instrucción adaptativa es lo que los sistemas hacen con esa representación. Toda IA adaptativa en la educación depende de algún modelo de quien aprende —aunque sea ligero—, y todo modelo del estudiantado existe para informar alguna decisión instruccional. Esta página es el paraguas de ese flujo de trabajo: los métodos de modelado, los sistemas que actúan sobre los modelos y cómo se relacionan.

## La capa de modelado

Estos conceptos responden a «¿qué sabe, qué siente y qué necesita esta persona que aprende?»: el lado de la representación dentro de la familia.

- **modelado del estudiantado** — la práctica amplia de representar en forma computacional las características de quien aprende (conocimiento, habilidades, estados [[affective-computing|afectivos]], [[student-engagement|implicación]], preferencias). Es el término paraguas dentro de esta capa y abarca todas las formas de representar a quien aprende.
- **[[knowledge-tracing]]** — la práctica específica de modelar el conocimiento cognitivo *a lo largo del tiempo* rastreando el rendimiento en ejercicios y prediciendo el dominio futuro. Formaliza la dinámica temporal del aprendizaje: cuándo se adquiere y se deteriora el conocimiento y cómo se relacionan los conceptos.
- **[[cognitive-diagnosis]]** — la [[assessment|evaluación]] de grano fino de qué habilidades o componentes de conocimiento concretos ha dominado quien aprende, que produce un perfil de dominio que apoya la remediación focalizada.
- **[[simulating-students|simulación del estudiantado]]** — generar estudiantes *sintéticos* a demanda, en lugar de representar a uno real, para que la [[pedagogy|pedagogía]] y los sistemas de IA puedan probarse o entrenarse fuera de línea.
- **Un formalismo causal para los modelos del estudiantado.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] sustituyen las redes bayesianas de puerta ruidosa por modelos causales estructurales elicitados de expertos, haciendo de las pistas variables endógenas explícitas para que el modelo pueda preguntar qué habría respondido un estudiante sin la ayuda que usó: algo menos predictivo, pero capaz de contrafactuales que los modelos asociativos no pueden expresar.

El estudio de [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries y Koprinska (2025)]] ilustra que una representación fiel no exige la familia de modelos más compleja: un modelo del estudiantado ligero e intrínsecamente interpretable, basado en árboles de decisión y construido a partir de características de interacción con el contenido del curso en lugar de telemetría rica, predice el progreso a nivel de módulo en cursos de [[cs-education|programación]] en línea a gran escala (85–91% de exactitud) y separa perfiles de [[student-engagement|implicación]] de riesgo desimplicado, desimplicado pero exitoso y alto rendimiento implicado, lo que apoya la alerta temprana de la [[learning-analytics|analítica del aprendizaje]] a escala.

Un modelo predictivo del estudiantado puede apoyarse en la estructura de matrícula y no en datos de trazas: TRACE codifica cada semestre como una cesta no ordenada de cursos y predice juntos el conjunto de cursos y las calificaciones, reduciendo el error de predicción de calificaciones a 0,1339 MAE —un 46,4% por debajo de un modelo solo de calificaciones— en 5.326 estudiantes y diez años ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Los modelos del estudiantado también pueden construirse únicamente a partir de rastros conductuales y aun así sostener la adaptación. [[an-goel-self-directed-modeling-2026|An, Hammock y Goel (2025)]] derivaron tres perfiles de implicación —Observación, Construcción y Exploración— a partir de los clics de 315 personas que aprendían en línea y construían 822 modelos ecológicos en VERA, sin ningún dato demográfico ni contextual, y mostraron que estos perfiles predicen la calidad del modelo (la Exploración produce los modelos más complejos y diversos, mientras que en la Observación predominan los modelos copiados en lugar de los originales). Estas caracterizaciones a nivel de implicación son los modelos del estudiantado de grano grueso que la capa de [[adaptive-learning|instrucción adaptativa]] puede consumir para orientar la retroalimentación.
El modelado afectivo del estudiantado es una dimensión adicional: un tutor de matemáticas infirió la emoción a partir del texto conversacional y la expresión facial y asignó el estado agregado a estrategias de tutoría, pero la fusión multimodal alcanzó solo un 60% de exactitud frente a las propias anotaciones de los participantes, lo que convierte la lectura afectiva en el eslabón más débil del flujo ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).
[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] encontraron que una señal de inicio demorado registrada durante la práctica de matemáticas predijo resultados de inglés, con quienes se demoran de forma crónica (más de 13 minutos) mostrando menores ganancias (ELA β = -.11 SD) incluso tras controlar el [[prior-knowledge|conocimiento previo]] y el tiempo en la tarea, así que los modelos conductuales del estudiantado pueden transferirse entre asignaturas sin reentrenamiento por curso, aunque sus puntos de corte deben rederivarse.

## La capa de instrucción adaptativa

Estos conceptos responden a «¿qué debería enseñarse después?»: el lado de la aplicación que consume los modelos del estudiantado.

- **[[intelligent-tutoring]]** — sistemas que usan modelos del estudiantado y estimaciones de dominio para seleccionar problemas y ofrecer orientación paso a paso, la aplicación clásica del modelado del estudiantado.
- **[[adaptive-learning]]** — sistemas que ajustan el contenido, el ritmo o la dificultad en respuesta al modelo del estudiantado.
- **[[personalized-learning]]** — la adaptación más amplia de la instrucción, el contenido y las trayectorias a las características y preferencias de cada persona que aprende.

## Cómo se relacionan sus miembros

Los conceptos forman un flujo de trabajo y no competidores: el **modelado del estudiantado** es la representación paraguas; el [[knowledge-tracing|seguimiento del conocimiento]] y el [[cognitive-diagnosis|diagnóstico cognitivo]] son métodos de modelado concretos que la nutren; la [[simulating-students|simulación]] *genera* estudiantes en lugar de representar a reales; y la [[intelligent-tutoring|tutoría inteligente]], el [[adaptive-learning|aprendizaje adaptativo]] y el [[personalized-learning|aprendizaje personalizado]] son los sistemas que consumen estos modelos para adaptar la instrucción.

**Modelado del estudiantado frente a simulación del estudiantado** es la distinción clave que hay que mantener clara. El modelado del estudiantado consiste en **representar a una persona real que aprende**: construir un modelo *a partir* de los datos de un estudiante real para que un sistema adaptativo pueda actuar sobre esa persona. La simulación del estudiantado, en cambio, **genera a demanda una persona sintética que aprende** para suplir a las reales, de modo que la pedagogía y la IA puedan evaluarse o entrenarse fuera de línea. Los dos están estrechamente relacionados, pero no son intercambiables: la simulación del estudiantado normalmente *incorpora* un modelo del estudiantado (un estado epistémico, un conjunto de [[misconceptions|concepciones erróneas]] o un perfil de implicación) y se apoya en los mismos constructos que formalizan el [[knowledge-tracing|seguimiento del conocimiento]] y el [[cognitive-diagnosis|diagnóstico cognitivo]]. Sus propósitos divergen: el modelado del estudiantado sirve a la adaptación en vivo al informar decisiones sobre una persona real, mientras que la [[simulation|simulación]] fabrica estudiantes para probar sistemas (y, cada vez más, para auditar la IA, por ejemplo [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) y no para actuar sobre ninguna persona real.

**Seguimiento del conocimiento frente a modelado del estudiantado** es la otra confusión habitual. El seguimiento del conocimiento modela específicamente el conocimiento cognitivo a lo largo del tiempo; el modelado del estudiantado es la práctica más amplia que cubre todos los aspectos de quien aprende (estado afectivo, implicación, preferencias). El seguimiento del conocimiento es un *tipo de* modelado del estudiantado centrado en la dimensión cognitivo-temporal. Los constructos del seguimiento del conocimiento también informan a los [[simulating-students|estudiantes simulados]]: el estado cognitivo de quien aprende simulado suele formalizarse con las mismas dinámicas de dominio y olvido que modelan el seguimiento del conocimiento, de modo que la simulación es una forma de *generar* los estados de conocimiento que los métodos de seguimiento normalmente *infieren* a partir de datos de respuesta reales.

**Anclar el seguimiento al [[curriculum-design|currículo]] fortalece el modelo.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] muestran que un modelo del estudiantado gana fidelidad cuando el seguimiento se ata a una estructura curricular explícita en lugar de aprenderse solo a partir de los datos: su seguimiento del conocimiento basado en resultados (OKT) trata los resultados de curso de la educación basada en resultados como los conceptos de conocimiento que hay que seguir, aporta relaciones entre conceptos mediante «mapeos de afinidad» de la educación basada en resultados, validados por expertos, entre los resultados de curso y de programa (una alternativa explícita a la atención implícita o al paso de mensajes en grafos) y usa un módulo aumentado con memoria para modelar cómo el logro de un resultado afecta a los demás. En datos reales de un programa de ingeniería superó a las referencias DKT, DKVMN, EKT y SimpleKT (89,81% de AUC), lo que ilustra que la capa de modelado puede explotar la estructura del propio currículo para representar a quien aprende con más fidelidad.

**Tutoría inteligente frente a aprendizaje adaptativo y personalizado** se sitúa en el lado de la aplicación: la tutoría inteligente es el sistema que selecciona problemas y guía paso a paso; el aprendizaje adaptativo ajusta el contenido y el ritmo; el aprendizaje personalizado es la adaptación más amplia de toda la experiencia de aprendizaje. Los tres son los «consumidores» de la capa de modelado.

## El reto de validez compartido

En toda la familia, el reto de validez que la define es el mismo: la representación de quien aprende debe **reflejar fielmente su estado real** y no los supuestos por defecto del sistema. Para el **modelado del estudiantado** y el [[knowledge-tracing|seguimiento del conocimiento]], esto significa que el modelo debe capturar de verdad lo que sabe quien aprende ([[ai-ed-evaluation|evaluación]] y [[assessment-validity|validez de la medición]]). Para la [[simulating-students|simulación]], significa que la persona sintética que aprende debe mostrar una imperfección realista y no la competencia plena del modelo ni su acuerdo [[ai-sycophancy|adulador]]. Los sistemas adaptativos que consumen modelos defectuosos heredan y propagan ese error.

Los modelos que infieren el estado del estudiantado a partir del juego alcanzaron AUC de 0,848–0,913, pero solo dos de los 55 estudios revisados los auditaron en busca de sesgo demográfico y solo uno examinó resultados diferenciales según la capacidad del estudiantado ([[ai-game-based-learning-systematic-review-2026|Kaşarcı y Yurt (2026)]]).
Puede que algunas señales pretendidas no puedan recuperarse en absoluto del diálogo: el piloto del marco Learning Context recuperó concepciones erróneas al 91,4% y ansiedad al 100%, pero responsabilidad solo al 68,6% y competencia lingüística al 60%, así que un modelo consciente del contexto debería capturar rasgos que tardan en aflorar en lugar de esperar a que el diálogo los exponga ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] exponen una circularidad en cómo se validan esos estudiantes sintéticos: sus agentes EduMirror administran cuestionarios psicométricos a posteriori y leen la concordancia con la representación interna de valores del agente como validez psicológica, pero como el Surveyor mide dimensiones ya codificadas en ese sistema de valores, la comprobación es una comprobación de consistencia y no una validación independiente.

**La corrección no siempre es una señal fiel.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] muestran que un modelo del estudiantado que infiere el dominio a partir de acciones correctas puede representar mal el estado real de quien aprende: quien muestra *sobregeneralización engañosa* parece haber dominado, pero omite una restricción de aplicación crítica, de modo que los sistemas adaptativos pueden detener la práctica antes de tiempo. Los modelos del estudiantado deberían evaluar la comprensión condicional —incluido si quien aprende sabe cuándo abstenerse de actuar— y no solo la corrección de las acciones.
Las concepciones erróneas ocultas muestran el mismo fallo desde el otro lado: [[correct-answer-trap-misconceptions|Imran y Bulathwela (2026)]] encontraron que un clasificador ajustado detectó el 57,4% de las respuestas correctas alcanzadas mediante un razonamiento defectuoso, y con una prevalencia del 1,6% incluso un modelo de razonamiento con un 83,6% de exactitud dejó 8 falsas alarmas por detección, así que las señales de dominio basadas en la corrección son a la vez incompletas y caras de reparar.

**Cómo se valida un modelo es en sí mismo una cuestión de validez.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan y Carvalho (2025)]] muestran que los modelos del estudiantado populares (BKT, BKT con olvido, AFM) parecen capturar el aprendizaje humano solo cuando se ajustan retroactivamente a un conjunto de datos completo de varias sesiones; bajo una validación cruzada temporal (hacia delante), que predice una sesión futura a partir de las anteriores —es decir, como se despliegan realmente estos modelos—, sobreestiman el rendimiento, no captan el [[retrieval-spacing-interleaving|efecto de espaciamiento]] y ordenan mal las condiciones de práctica. Como los modelos con olvido y sin olvido rindieron de forma parecida entre sesiones, los autores concluyen que el olvido suele absorberse en los parámetros del estudiantado en lugar de representarse de verdad. La lección para la familia es que una representación fiel de quien aprende debe validarse tal como se usa, y que confundir el rendimiento del momento con la retención a largo plazo produce modelos que parecen exactos pero representan mal a quien aprende.

## El modelado en la era de los LLM

Los avances recientes usan [[llm|LLM]] para un modelado más rico. El [[xie-hillm-cd-2026|marco HiLLM-CD]] representa al estudiantado como árboles de competencia; los [[multimodal-knowledge-graph-educational-reasoning|enfoques multimodales]] construyen representaciones de conocimiento fundamentadas en evidencia a partir de fuentes de datos diversas; [[inside-llm-student-simulator-reasoning-2026|los LLM ya simulan estudiantes con razonamiento]]. Los LLM permiten la construcción automatizada de modelos a partir de texto educativo y una [[simulating-students|simulación del estudiantado]] de mayor fidelidad, lo que reduce la dependencia de la anotación por expertos, a la vez que agudiza las preocupaciones de fidelidad anteriores. Las señales del modelo del estudiantado también *fundamentan* el razonamiento de los LLM: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora y MacLellan (2025)]] encontraron que dar a GPT-4 la estimación bayesiana de la habilidad de un estudiante procedente del [[knowledge-tracing|seguimiento del conocimiento]], junto con la estructura de la interfaz del tutor, mejoró marcadamente su diagnóstico de errores (la identificación de errores lógicos subió del 40% al 81% en factorización y a ~87,8% en general), mientras que los problemas de varios pasos y las respuestas con varios errores siguieron siendo los casos más débiles: evidencia de que acoplar un modelo formal del estudiantado a un LLM fortalece, pero no garantiza, una inferencia sólida sobre un estudiante real. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] muestra cómo es una versión persistente de ese acoplamiento: el dominio y las concepciones erróneas extraídas se almacenan por (persona que aprende, materia) y no como registros por sesión, de modo que la evidencia se acumula entre sesiones, y la memoria la escribe una función de observación calificada por un LLM mientras permanece inspeccionable para quien aprende mediante barras de dominio y una etiqueta que nombra qué se propuso sondear con cada pregunta generada. Sus controles explicitan el paso de escritura: con la memoria leída pero ya no actualizada, la proporción de ítems dirigidos a una habilidad genuinamente débil cayó de 0,72 a 0,57, y mantiene intacta la matización de esta página: el dominio almacenado es la creencia del agente sobre quien aprende, no una medición de su conocimiento.

El lenguaje puede reemplazar a las incrustaciones de ID como representación: PLCD construye esquemas conceptuales derivados de LLM y grafos de procesos de ejercicios como priors, alcanzando un 83,51% de exactitud en XES3G5M, con las mayores ganancias en arranque en frío —4,60 puntos de ACC sobre KCD para conceptos nuevos y 4,00 para ejercicios nuevos— donde los modelos basados en ID no tienen historial ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

La calidad del simulador se separa en dos ejes: un flujo de agrupar y luego especializar que entrena patrones conductuales compartidos antes de un adaptador por estudiante alcanzó una fidelidad conductual de 0,51 y una capacidad de respuesta a la orientación de 0,91 en ajedrez, frente a 0,23 y 0,72 de una línea base de juego de roles de frontera, lo que muestra que un simulador debe tanto igualar a un estudiante como ser orientable ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Las puntuaciones de riesgo pueden ser exactas pero no estar respaldadas: [[at-risk-students-ml-prediction|Gheisari y Salarian (2026)]] alcanzaron un 99% de exactitud al predecir el abandono a partir de registros de matrícula y rendimiento, pero sobre 1.027 registros depurados de una sola institución, sin validación externa, sin ninguna intervención probada y con las auditorías de equidad señaladas como trabajo futuro: la puntuación respalda el triaje, no un veredicto sobre un estudiante.

Un modelo del estudiantado que solo predice el riesgo no basta para el apoyo a la decisión: acoplar un modelo de riesgo calibrado con una recurrencia de programación entera sobre acciones discretas —validada frente a restricciones de tiempo, presupuesto, inmutabilidad y disponibilidad— produjo planes de intervención compactos allí donde la optimización por sí sola aceptaba otros inejecutables ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel y Laforge (2026)]]).

Un estimador de caja negra también puede destilarse en un modelo pequeño que se autoexplica: un flujo de dos etapas convierte un estimador ajustado y su interpretación a posteriori en un «aprendiz» de 2B parámetros que devuelve una estimación junto a una narración, auditada por su fidelidad y no por su fluidez ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Conexiones con otros conceptos

El modelado del estudiantado y la instrucción adaptativa alimentan la [[learning-analytics|analítica del aprendizaje]] ([[visualization|paneles]] e intervenciones), la [[formative-assessment|evaluación formativa]] (evaluación guiada por analítica) y la [[feedback|retroalimentación]] (lo que el sistema dice a quien aprende). Se conecta con la [[ai-education|IA en la educación]] como línea central de la IA para la educación.

## Conceptos conectados

- [[learners]] — Estudiantado: el paraguas de los conceptos del lado de quien aprende
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — los modelos que subyacen a la predicción de riesgo y a la focalización del apoyo
## Artículos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobregeneralización engañosa: el dominio adaptativo puede detener la práctica antes de que quien aprende sepa cuándo abstenerse de actuar (An, McLaren y Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Modelado causal de intervenciones de apoyo para la evaluación de competencias del estudiantado
- [[turano-ai-tutoring-not-a-monolith-2026]] — La tutoría con IA no es un monolito: qué sabemos realmente (informe de Stanford SCALE/NSSA)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — Los tutores con LLM rechazan en exceso alternativas válidas y validan en exceso lo incorrecto (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — De la predicción de riesgo del estudiantado a SC2R: recurso contrafactual
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilación de un LM autoexplicativo para la analítica del aprendizaje
- [[studentsim-llm-student-simulators]] — StudentSim: entrenamiento de simuladores del estudiantado basados en LLM
- [[predicting-attrition-competitive-programming]] — Predicción del abandono del estudiantado en programación competitiva
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Seguimiento del conocimiento basado en resultados con mapeo de afinidad
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Más allá de las incrustaciones de ID: modelado del lenguaje fundamentado en procesos para el diagnóstico cognitivo
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — estado compacto de quien aprende más un trazador calibrado como entorno de recomendación
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende de su estudiante en un bucle de coaprendizaje entre humano e IA

- [[ai-game-based-learning-systematic-review-2026]] — La evaluación encubierta alcanzó AUC de 0,848–0,913, pero las auditorías de sesgo estuvieron casi ausentes en 55 estudios
