---
title: "Quienes aprenden"
created: "2026-09-28T19:15:20-04:00"
updated: "2026-09-28T19:15:20-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
translation_of: concepts/learners
source_updated: "2026-09-19T06:35:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Síntesis:** quienes aprenden son el público principal de la [[ai-education|IA en la educación]]: el estudiantado de [[k-12|K-12]], [[higher-ed|educación superior]] y [[adult-learning|educación de personas adultas]] cuyo trabajo, comprensión y sentido de sí mismo moldea ahora la IA. Esta página es el paraguas de la cobertura de la base de conocimiento sobre el lado de quien aprende: lo que experimenta ([[student-experience|experiencia del estudiantado]]), en quién se está convirtiendo ([[learner-identity|identidad de quien aprende]]), qué sigue eligiendo ([[agency|agencia]]), cómo interactúa realmente con la herramienta ([[student-ai-interaction|interacción estudiantado-IA]]), si su esfuerzo y su [[self-regulated-learning|autorregulación]] resisten ante ella ([[cognitive-offloading|dependencia excesiva]]) y cómo lo modelan los sistemas de IA ([[student-modeling|modelado del estudiantado]]). El hallazgo recurrente en esa investigación es que la misma herramienta ayuda y perjudica de forma distinta a distintos aprendientes: las ganancias se concentran donde ya existen [[prior-knowledge|conocimientos previos]], [[ai-literacy|alfabetización en IA]] y hábitos de verificación, y la reversión se concentra donde la IA sustituye al pensamiento que la tarea debía construir.

## Preguntas para reflexionar

- ¿A qué aprendientes de su propio contexto llegaría antes una nueva herramienta de IA, y a cuáles dejaría atrás, y por qué cree que es así?
- La investigación informa a menudo de que el estudiantado *cree* que la IA le ayudó, mientras que las medidas sin asistencia no muestran ninguna ganancia, o muestran una pérdida. Si el propio relato de quien aprende es una evidencia poco fiable, ¿qué aceptaría usted como evidencia de que se produjo aprendizaje?
- Aquí se describe a quienes aprenden tanto como personas que usan la IA como objetos que la IA modela ([[student-modeling|modelos de quien aprende]], [[knowledge-tracing|traza de conocimiento]], [[simulating-students|estudiantes simulados]]). ¿Dónde debería un modelo de quien aprende informar la enseñanza, y dónde debería dejar de ser fiable?
- La [[self-regulated-learning|autorregulación]] y los [[prior-knowledge|conocimientos previos]] deciden si el apoyo de la IA se convierte en aprendizaje o en sustitución. ¿Es eso un déficit de quien aprende que haya que remediar, un problema de diseño que resolver o un problema de evaluación que corregir?
- Si a un grupo de aprendientes le va mal con una herramienta de IA, quienes la diseñaron suelen ser los últimos en enterarse. ¿Cómo sería en su institución una rutina para escuchar a quienes aprenden antes y después del despliegue?
- La [[agency|agencia de quien aprende]] y su [[learner-identity|identidad]] están en juego junto con el rendimiento. ¿Cuál de ellas se negaría a cambiar por [[learning-gains|ganancias de puntuación]] medibles, y haría su diseño de evaluación visible esa negativa?

## Introducción

Quienes aprenden aparecen en esta base de conocimiento bajo dos formas muy distintas, y confundirlas causa la mayor parte de la confusión del campo. En la primera, quienes aprenden son **personas que usan la IA**: hacen preguntas, aceptan o rechazan respuestas, pierden o mantienen el equilibrio y relatan experiencias de apoyo, culpa, ansiedad y dependencia. En la segunda, quienes aprenden son **objetos que los sistemas de IA modelan**: una estimación de habilidad en la [[knowledge-tracing|traza de conocimiento]], un estado latente en el [[cognitive-diagnosis|diagnóstico cognitivo]] o un [[simulating-students|estudiante simulado]] que sustituye a uno real. La evidencia sobre lo primero procede de encuestas, entrevistas, análisis de registros y experimentos; la evidencia sobre lo segundo procede de la maquinaria de medición misma, y un modelo de quien aprende es una afirmación, no una persona que aprende.

Esta página es el punto de entrada para ambas. Reúne los conceptos del lado de quien aprende que cubre la base de conocimiento, explica cómo se relacionan y enlaza los estudios que hay detrás. [[stakeholders|Partes interesadas]] cubre el otro lado del mismo campo —[[teacher-role|profesorado]], [[administrator|administración]], diseñadores y responsables de políticas— y las dos páginas están pensadas para leerse juntas.

## Quién cuenta como persona que aprende

La base de conocimiento aborda a quienes aprenden a lo largo de todo el arco de la educación formal: alumnado de [[k-12|K-12]], [[higher-ed|estudiantado universitario]], aprendientes de [[vocational-education|formación profesional]] y de [[professional-training|formación para el trabajo]], y aprendientes [[adult-learning|adultos]] y a lo largo de la [[lifelong-learning|vida]], incluidos [[special-education|aprendientes con discapacidad]], [[neurodiversity|aprendientes neurodivergentes]] y [[multilingual-learning|aprendientes multilingües]]. Importan dos convenciones. La primera: «quienes aprenden» y «estudiantado» no son intercambiables de forma útil; *estudiantado* nombra un rol institucional, *quienes aprenden* nombra una actividad, y una persona puede ser lo uno sin ser lo otro (una empleada en [[professional-training|formación en el puesto de trabajo]] es una persona que aprende, pero no estudiantado). La segunda: quienes aprenden no son un grupo homogéneo, y la heterogeneidad es justo lo que la investigación no deja de sacar a la luz: los [[prior-knowledge|conocimientos previos]], la [[self-regulated-learning|autorregulación]], la lengua, el acceso y la situación de discapacidad cambian todos si una herramienta de IA ayuda.

## Qué experimentan quienes aprenden

La [[student-experience|experiencia del estudiantado]] es una de las dimensiones más investigadas de la IA en la educación, y su lección central es que los efectos son mixtos y no uniformes. [[student-perceptions-ai-study-productivity-2026|El trabajo de encuesta sobre la productividad del estudio]] encuentra que quienes aprenden relatan ganancias de eficiencia genuinas —el 92,3% dijo que la IA mejoró su comprensión— junto a una brecha que las cifras principales ocultan: solo el 38,5% dijo que redujo su tiempo total de estudio, y la mitad relató que a veces dependía de la IA en lugar de intentar aprender de forma independiente. [[uneven-impact-generative-ai-student-learning-2026|Los análisis de los patrones de dependencia]] van más lejos: el estudiantado con distintos niveles de [[ai-literacy|alfabetización en IA]] y de habilidad de evaluación acaba en relaciones cualitativamente distintas con la herramienta, de modo que la misma política de curso produce resultados distintos para distintos aprendientes: apoyo para unos, sustitución para otros. [[genai-student-experiences-uk-he-survey-2026|El estudiantado describe la atracción del mínimo esfuerzo]] con sus propias palabras, algo que las páginas de [[academic-integrity|integridad académica]] y de [[misconceptions|ideas erróneas]] tratan como un problema de diseño y de política y no como uno moral.

Lo afectivo va en paralelo al relato cognitivo: la [[anxiety-and-stress|ansiedad y el estrés]] y el [[well-being|bienestar]] documentan la ansiedad por quedar rezagado, por ser acusado de mala conducta y por el valor del título que se está cursando. Los modelos mentales que quienes aprenden tienen de la IA —qué creen que es y para qué creen que sirve— son anteriores a que la usen bien, y por eso las [[misconceptions|ideas erróneas]] y el [[framing-ai-use-for-students|encuadre del uso de la IA para el estudiantado]] aparecen a lo largo de toda la investigación sobre el lado de quien aprende.

Los relatos de quienes aprenden también complican el relato de integridad que enmarca buena parte de la política sobre el lado de quien aprende. [[mulisa-students-genai-integrity-perspectives-2026|Las entrevistas con 27 estudiantes de grado de una universidad etíope]] encuentran un uso de la IA generativa casi universal junto a una lectura [[ethics|ética]] genuinamente dividida: la mayoría atribuye a las herramientas una mejora de su rendimiento, una minoría califica de mala conducta su uso en los trabajos de curso, y casi todos relatan un terreno de juego desigual en el que quienes usan IA obtienen mejores notas que quienes trabajan de forma diligente e independiente, y uno describe el efecto como la muerte de su sentido de la diligencia. El lado estudiantil del procedimiento de mala conducta está menos desarrollado en la literatura que el lado estudiantil del uso, pero [[munoz-misconduct-allegation-evidence-2026|el análisis de los expedientes de 1.162 acusaciones de IA generativa]] muestra a qué se enfrentan quienes aprenden cuando llega la respuesta institucional: la evidencia más citada es la del tipo peor valorado, ningún umbral probatorio mínimo rige si un caso avanza, y el estudiantado cuyos casos se apoyan en evidencia débil se ve empujado hacia los recursos de apelación.

## Identidad, agencia y autoría

La investigación sobre el lado de quien aprende no trata solo de resultados. La [[learner-identity|identidad de quien aprende]] pregunta en quién se está convirtiendo una persona que aprende en relación con una disciplina y con la IA, y la evidencia va en ambas direcciones: un uso bien diseñado puede andamiar la pertenencia disciplinar, mientras que la externalización puede erosionar la sensación de que el trabajo es propio. La [[agency|agencia]] pregunta qué sigue controlando quien aprende. La base de conocimiento considera que ambas están genuinamente en juego, y no como añadidos blandos al rendimiento: quien aprende y produce una salida correcta con una IA y ya no reconoce el razonamiento que hay detrás ha perdido algo que la nota no registra. La cuestión de la autoría es donde quienes aprenden tienen más dificultades: [[mulisa-students-genai-integrity-perspectives-2026|el estudiantado entrevistado sobre la IA generativa y la integridad]] reclamaba originalidad porque no existía ningún otro autor («si no es mi idea original, ¿de quién es?»), mientras que otros concluían que el trabajo no los representaba, y uno razonaba hasta reconocer en la herramienta un coautor que no podía serlo, dado que la IA no es una persona.

## Interactuar con la IA: qué hacen en realidad quienes aprenden

La página de [[student-ai-interaction|interacción estudiantado-IA]] reúne qué le piden a la IA quienes aprenden, cómo evolucionan sus prompts y sus diálogos, y por qué la calidad de la interacción predice los [[learning-gains|resultados de aprendizaje]] mejor que el acceso. [[student-llm-interaction-taxonomy-review-2026|Una revisión rápida de alcance de 46 categorizaciones extraídas de 33 estudios]] encuentra esa base de evidencia conceptualmente fragmentada: los estudios difieren en la fuente de datos, el esquema de categorías y la unidad de análisis, de modo que la «interacción de calidad» todavía no es un constructo comparable entre ellos, y lo que pide la revisión es una taxonomía convergente del uso del [[llm|LLM]] orientado al aprendizaje, no la afirmación de que ya exista. [[student-ai-conversations-cognitive-engagement-2026|Los estudios sobre el contenido de los chats]] encuentran que el estudiantado se disciplina de formas características, con una implicación que va desde sondear y poner a prueba las afirmaciones hasta aceptar la primera respuesta verosímil. La [[help-seeking|búsqueda de ayuda]] aporta el marco más antiguo: pedir ayuda es una habilidad, y pedírsela al ayudante equivocado de la forma equivocada es un modo de fallo conocido que la IA no elimina.

## Esfuerzo, autorregulación y la brecha entre rendimiento y aprendizaje

Aquí es donde la evidencia sobre el lado de quien aprende es más consecuente, porque separa lo que quienes aprenden *pueden hacer con IA* de lo que *pueden hacer sin ella*.
La [[cognitive-offloading|dependencia excesiva]] reúne la evidencia sobre el exceso de confianza en la IA; [[genai-performance-vs-learning|el rendimiento con IA generativa frente al aprendizaje]] enuncia el punto metodológico central de que el rendimiento asistido y la capacidad sin asistencia deben medirse por separado; [[layer-sensitive-cognitive-offloading-writing-2026|los estudios sensibles a capas sobre la escritura]] separan la descarga superficial, estructural, de ideas y de razonamiento, y encuentran el rendimiento asistido más alto en la condición menos acotada junto al rendimiento independiente más bajo ocho semanas después; y [[shaw-nave-cognitive-surrender-2026|el relato de la rendición cognitiva de Shaw y Nave]] nombra la disposición que hace que delegar sea habitual y no estratégico. La [[metacognitively-discordant-completion-genai-2026|discordancia metacognitiva]] documenta el incómodo caso intermedio —quienes aprenden que se dan cuenta de que no entienden y entregan de todos modos— y la [[verification-quality-reliance-calibration-genai-2026|investigación sobre la verificación]] muestra que «comprobar» es en sí mismo una habilidad graduada y no un hábito binario. En el lado del diseño, la [[desirable-difficulties|dificultad productiva]] y [[reducing-ai-misuse|reducir el mal uso de la IA]] reúnen las intervenciones que restauran el esfuerzo que la tarea debía exigir.

## Quienes aprenden como modelos

Los conceptos del lado de quien aprende con el linaje técnico más largo son los que representan a quien aprende ante el sistema. El [[student-modeling|modelado del estudiantado]] cubre la familia: la [[knowledge-tracing|traza de conocimiento]], que estima la adquisición de habilidades a lo largo del tiempo; el [[cognitive-diagnosis|diagnóstico cognitivo]], que localiza ideas erróneas concretas; y los sistemas adaptativos y de [[personalized-learning|aprendizaje personalizado]] que consumen esas estimaciones. [[simulating-students|Los estudiantes simulados]] y [[simulating-students-llm-review-2026|su revisión]] tratan la [[simulation|simulación]] como una forma de probar [[intelligent-tutoring|tutores]] y de generar datos cuando no hay aprendientes reales disponibles: un sustituto explícitamente provisional, no un reemplazo. Dos cautelas recorren esta literatura: las estimaciones del modelo son inferencias a partir de la conducta que son sensibles a cómo se construyen los ítems y las interfaces, y [[demographic-signals-llm-student-assessment-2026|los estudios sobre señales demográficas]] muestran que los sistemas de evaluación pueden captar indicios indirectos de la identidad de quien aprende (lengua, origen) que nunca debían formar parte del constructo. Las [[self-report-measures|medidas de autoinforme]] cubren el problema especular en el lado de la investigación: lo que quienes aprenden dicen sobre su propio aprendizaje a menudo diverge de lo que son capaces de hacer.

## Equidad entre quienes aprenden

Como los beneficios siguen a la ventaja previa, el trabajo sobre el lado de quien aprende es inseparable de la [[equity-in-ai-education|equidad en la IA educativa]]. La [[digital-divide|brecha digital]] y el acceso a niveles de pago de los modelos determinan quién obtiene las herramientas más potentes; las consideraciones de [[bias-mitigation|equidad]] rigen cómo tratan los modelos entrenados a distintos grupos; el [[inclusive-learning|aprendizaje inclusivo]], la [[accessibility|accesibilidad]], la [[special-education|educación especial]] y la [[neurodiversity|neurodiversidad]] cubren a quienes aprenden cuyas necesidades ignora el diseño por defecto. La lección práctica de esta investigación es que «la IA ayuda al estudiantado» no es un hallazgo: el hallazgo es siempre *qué* estudiantado, en *qué* condiciones, con *qué* conocimientos previos y acceso. Dos grupos soportan una parte característica de ese riesgo. [[wright-transcription-not-generation-2026|Wright (2026)]] sostiene que las prohibiciones redactadas en torno a la «[[generative-ai|IA generativa]]» y no en torno a la función capturan herramientas de transcripción que convierten el formato de un trabajo que quien aprende ya había autorado, de modo que los falsos positivos resultantes recaen con más fuerza sobre aprendientes con discapacidad que dependen del dictado a texto y del OCR, incluidos los casos en que el OCR impulsado por IA ha sustituido a software de apoyo descontinuado; [[harerimana-remote-proctoring-nursing-scoping-2026|una revisión de alcance sobre la supervisión remota de exámenes]] plantea el punto paralelo sobre las condiciones de evaluación, al encontrar que la conectividad, el coste de los datos y los fallos de los dispositivos deciden quién puede ser evaluado siquiera, un hallazgo de equidad y no técnico, y concentrado en entornos de renta baja y media.

## Dónde se sitúa esta página

Léase junto con [[stakeholders|partes interesadas]] para las personas que rodean a quien aprende, y con la [[pedagogy|pedagogía]] y el [[learning-design|diseño del aprendizaje]] para lo que el profesorado hace con estos hallazgos. La [[assessment|evaluación]] determina qué capacidades de quien aprende se hacen visibles alguna vez; [[limitations-in-aied-research|las limitaciones de la investigación en IAEd]] explica por qué buena parte de la evidencia sobre el lado de quien aprende es a corto plazo, autoinformada y realizada con muestras de conveniencia; y las [[misconceptions|ideas erróneas]] son el punto de entrada habitual para quienes aprenden.

## Conceptos conectados

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — Cómo percibe, vive y recibe la IA quien aprende
- [[learner-identity]] — En quién se está convirtiendo quien aprende en relación con una disciplina y con la IA
- [[agency]] — Qué sigue controlando y eligiendo quien aprende
- [[student-ai-interaction]] — Qué le pide realmente a la IA quien aprende y cómo evolucionan los diálogos
- [[cognitive-offloading]] — La dependencia excesiva y la sustitución del pensamiento por la IA
- [[self-regulated-learning]] — Planificar, supervisar y ajustar el propio aprendizaje
- [[help-seeking]] — Pedir ayuda bien, y los modos de fallo cuando no se hace
- [[metacognition]] — Saber qué entiende uno y qué no
- [[motivation]] — Por qué quien aprende persiste o se detiene
- [[self-efficacy]] — La confianza de quien aprende en su propia capacidad
- [[student-engagement]] — La implicación conductual, emocional y cognitiva
- [[prior-knowledge]] — Los conocimientos previos que deciden si el apoyo se convierte en aprendizaje
- [[student-modeling]] — Representar a quien aprende dentro del sistema
- [[knowledge-tracing]] — Estimar la adquisición de habilidades a lo largo del tiempo
- [[simulating-students]] — Aprendientes simulados con LLM como sustitutos provisionales
- [[ai-literacy]] — La capacidad que decide si quien aprende usa bien la IA
- [[equity-in-ai-education]] — Quién se beneficia y quién queda fuera
- [[well-being]] — Ansiedad, estrés y el coste afectivo del estudio mediado por IA
- [[misconceptions]] — Los modelos mentales que quien aprende trae a la IA
- [[stakeholders]] — El otro lado del mismo campo: profesorado, líderes, diseñadores
- [[assessment]] — Qué capacidades de quien aprende se hacen visibles alguna vez

## Artículos conectados

- [[uneven-impact-generative-ai-student-learning-2026]] — Los patrones de dependencia y la alfabetización evaluativa dividen los resultados del estudiantado
- [[student-perceptions-ai-study-productivity-2026]] — Quienes aprenden relatan ganancias de eficiencia junto a preocupaciones por la dependencia
- [[student-llm-interaction-taxonomy-review-2026]] — Una taxonomía de la interacción estudiantado-LLM orientada al aprendizaje
- [[student-ai-conversations-cognitive-engagement-2026]] — Patrones específicos de cada disciplina en los chats entre estudiantado e IA
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Ganancias de rendimiento asistido sin capacidad independiente
- [[genai-performance-vs-learning]] — Por qué el rendimiento asistido y el aprendizaje sin asistencia deben medirse por separado
- [[shaw-nave-cognitive-surrender-2026]] — La rendición cognitiva como disposición, no como accidente
- [[metacognitively-discordant-completion-genai-2026]] — Quienes aprenden que se dan cuenta de que no entienden y entregan de todos modos
- [[verification-quality-reliance-calibration-genai-2026]] — Calidad de la verificación y calibración de la dependencia
- [[simulating-students-llm-review-2026]] — Estudiantes simulados: arquitectura, mecanismos y límites
- [[stanbkt-bayesian-knowledge-tracing]] — Estimación de parámetros en la traza de conocimiento bayesiana
- [[demographic-signals-llm-student-assessment-2026]] — Señales demográficas implícitas y explícitas en la evaluación basada en LLM
- [[ai-literacy-learning-engagement-psych-capital-2026]] — Alfabetización en IA, implicación y capital psicológico
- [[genai-student-experiences-uk-he-survey-2026]] — El estudiantado describe la atracción del mínimo esfuerzo
- [[mulisa-students-genai-integrity-perspectives-2026]] — El estudiantado sobre si la IA generativa es una herramienta de trampa o un compañero de aprendizaje
- [[munoz-misconduct-allegation-evidence-2026]] — Qué contienen realmente como evidencia los expedientes de acusaciones de mala conducta
- [[wright-transcription-not-generation-2026]] — Reglas sobre IA demasiado amplias y el estudiantado al que atrapan
- [[sharma-judgment-visible-genai-assessment-2026]] — La integridad como juicio evaluativo y no como cumplimiento
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Los costes emocionales y de equidad de la supervisión remota para el estudiantado
