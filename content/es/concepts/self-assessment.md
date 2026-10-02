---
title: Autoevaluación
created: "2026-09-28T20:10:38-04:00"
updated: "2026-09-28T20:10:38-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition, self-regulated-learning, scaffolding]
assessment: [assessment-validity, evaluative-judgment, feedback-literacy, formative-assessment, peer-assessment, self-report-measures]
ethics: [trust-calibration]
audience: [learners, instructors]
level: [higher ed]
connected_faqs: [ai-feedback-at-scale, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education]
confidence: high
translation_of: concepts/self-assessment
source_updated: "2026-09-21T12:50:58-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La autoevaluación** — juzgar el propio trabajo, la propia competencia o el propio progreso con arreglo a criterios, y las prácticas e instrumentos construidos sobre ese acto. El término tiene dos caras que es fácil fundir en una. Como **técnica instruccional** es la autocalificación, la autorrevisión con rúbricas, la autocomprobación y la reflexión guiada: actividades destinadas a desarrollar la [[metacognition|monitorización]] y el [[evaluative-judgment|juicio]] sobre los que funciona el [[self-regulated-learning|aprendizaje autorregulado]]. Como **medida educativa** es un [[self-report-measures|instrumento de autoinforme]], en el que la estimación que hace quien aprende de su propia destreza, confianza o aprendizaje sustituye a una observación que nadie hizo. Se sitúa junto a la [[peer-assessment|evaluación entre pares]] como la otra mitad del estudiantado como evaluador, y hereda la misma dependencia del [[scaffolding|andamiaje]] y de criterios explícitos. Ambas caras giran sobre la misma facultad y ambas fallan en la misma dirección: la estimación es sistemáticamente generosa, y cuanto más pueda producir un trabajo entregado por una herramienta de [[generative-ai|IA generativa]], menos dice ese trabajo sobre si la facultad existe siquiera.

## Preguntas para reflexionar

- Cuando termina un trabajo propio, ¿qué le dice si es bueno: los criterios que le dieron, los criterios que ha interiorizado o cómo se siente? ¿Sabría decir cuál usó en realidad?
- En un estudio con 288 docentes de K-12, una medida autoinformada de [[ai-literacy|alfabetización en IA]] correlacionaba con una medida objetiva de la misma destreza solo entre r = 0,07 y r = 0,24. ¿Dónde, en su propia práctica, sería más probable que una autoestimación divergiera de una prueba de la misma destreza, y por qué ahí y no en otro lugar?
- La autocalificación puede ahorrar tiempo al profesorado y construir juicio, y también puede otorgar una nota que el estudiante no se ha ganado. ¿Qué tendría que ser cierto sobre la tarea, la rúbrica y la formación para que una autocalificación llevara crédito?
- Si una herramienta puede producir el ensayo, ¿qué le queda a un estudiante por evaluar sobre su propio aprendizaje? ¿Qué le pediría que estimara en su lugar?
- El estudiantado que evalúa el trabajo de un par y el que se evalúa a sí mismo están haciendo cosas distintas. ¿Cuál de las dos se transfiere mejor a la tarea siguiente, y qué evidencia lo zanjaría?

## Introducción

La autoevaluación es una de las ideas más antiguas de la educación y una de las más confusas en la práctica, porque bajo ese nombre viajan dos cosas distintas. La primera es una técnica: el estudiantado revisa su propio trabajo con arreglo a criterios, lo califica, lo comprueba, reflexiona sobre él. La segunda es una medición: la valoración que hace quien aprende de su propia destreza, confianza o aprendizaje, usada como dato. La técnica se juzga por lo que desarrolla en quien aprende; la medición se juzga por si se puede confiar en el número.

Ambas importan en un [[assessment|diseño de la evaluación]] de la era de la IA, y lo hacen por razones distintas. La técnica es donde se entrena el [[evaluative-judgment|juicio evaluativo]], y el juicio evaluativo es exactamente la capacidad que se vuelve escasa cuando un [[llm|modelo de lenguaje]] puede producir trabajo de aspecto competente a demanda. La medición es donde el campo exagera habitualmente lo que sabe, porque un autoinforme no puede medir el aprendizaje: solo puede registrar lo que alguien dice sobre él.

## La autoevaluación como técnica instruccional

Las prácticas que caen bajo este epígrafe son conocidas: la autocalificación con arreglo a una rúbrica, la autorrevisión de un borrador antes de entregarlo, la autocomprobación de las soluciones de un problema, los prompts de reflexión que preguntan qué haría distinto quien aprende y las tareas de predicción en las que un estudiante estima su rendimiento y luego lo compara. Su propósito es desarrollador. Un estudiante que revisa su propio borrador con arreglo a criterios está ensayando la valoración que también entrenan la revisión entre pares y la retroalimentación del profesorado, y está construyendo el estándar interno que usará cuando nadie mire.

La evidencia de que la técnica funciona, y de qué versión funciona, viene sobre todo de la escritura y de la investigación sobre aprendizaje autorregulado. En un estudio comparativo sobre alfabetización en retroalimentación, estudiantes de primer año de grado (N = 118 en China, 56 en un grupo con IA generativa y 62 en un grupo de pares) recorrieron tres ciclos de autoevaluación a lo largo de un semestre. La ventaja del grupo con IA generativa sobre el grupo de pares fue pequeña, solo 0,17 puntos de escala (eta cuadrado parcial = 0,03), y la conclusión práctica del estudio es la que se repite: la autoevaluación necesita andamiaje. Las rúbricas preentrenadas, las directrices para los prompts y las hojas de trabajo son lo que separa un ciclo de autoevaluación que construye [[feedback-literacy|alfabetización en retroalimentación]] de uno que produce [[cognitive-offloading|descarga cognitiva]].

La autoevaluación es también donde el ciclo del [[self-regulated-learning|aprendizaje autorregulado]] se hace visible como destreza y no como disposición. En un estudio de estadística de grado, el estudiantado que recibió formación explícita en andamiaje centrado en el razonamiento (pistas paso a paso y prompts de verificación) rindió mejor en una tarea posterior intentada sin asistencia del modelo y mostró una mejor calibración de su autoevaluación que el estudiantado que se apoyó en el modelo sin sentido crítico. La parte interesante es la segunda medida: las estimaciones de su propia comprensión del grupo entrenado se alineaban mejor con lo que de verdad podían hacer. Una técnica orientada a la reflexión cambió una propiedad de medición de quien aprende.

### Formación en calibración

La técnica más directa es la formación en calibración, en la que un estudiante predice su puntuación o su confianza antes de ver un resultado y luego compara la predicción con el desenlace. En un estudio de escritura asistida por IA, un guion de alfabetización en retroalimentación mejoró la calidad de la escritura, la incorporación de la retroalimentación y la revisión profunda, mientras que una actividad de calibración entre evaluación y rendimiento mejoró sobre todo la exactitud de la autoevaluación del estudiantado y redujo el exceso de confianza. Combinar las dos produjo las mayores ganancias en escritura y la retención más sólida tras retirarse el apoyo de IA, aunque la actividad de calibración por sí sola siguió siendo la mejor ruta hacia autoestimaciones exactas. Esa división del trabajo es el punto práctico: la alfabetización en retroalimentación mejora lo que un estudiante hace con los comentarios, la calibración mejora cuánto conoce su propia situación, y no son la misma intervención.

Un artículo a nivel de ensayo sobre el uso [[ethics|ético]] de la IA en una universidad australiana trató la autoevaluación guiada como el vehículo y no como el tema: en cohortes de enfermería, ciencias de la salud, ingeniería y ciencias desde 2021 hasta 2025, las autoevaluaciones de antes y después del semestre combinaban ítems de confianza tipo Likert con un prompt abierto de reflexión, y los autores sostenían que la práctica [[ethics|ética]] es una capacidad en desarrollo que se construye mediante la reflexión y no una regla de cumplimiento que haya que hacer cumplir.

### Qué añade la IA a la técnica

La IA cambia tres cosas de la técnica. Puede generar los ítems y las rúbricas, lo que abarata los ciclos repetidos de autoevaluación. Puede ser lo evaluado, que es como se entrena el [[evaluative-judgment|juicio evaluativo]]: un estudiante que juzga un borrador de IA practica la valoración con un suministro ilimitado de material. Y puede hacer visible el juicio de quien aprende como evidencia de proceso. En los paneles de aprendizaje interactivos, un panel analítico convencional se amplió con una función de autoevaluación de Juicio del Aprendizaje y un agente conversacional, con el argumento de que provocar el propio juicio de quien aprende hace más por la implicación que decirle lo que muestran los datos. Los marcos institucionales han empezado a tratar esos mismos rastros de proceso, incluidas las autoevaluaciones estructuradas y los prompts metacognitivos, como evidencia de capacidades adaptativas que un expediente no puede mostrar.

## La autoevaluación como medida

Usada como medida, la autoevaluación suele llegar disfrazada de otra cosa: una valoración de confianza en una escala Likert, una puntuación predicha, un ítem de Juicio del Aprendizaje o un inventario de destrezas percibidas basado en una taxonomía. Es una familia dentro del conjunto más amplio de los [[self-report-measures|instrumentos de autoinforme]], y hereda el límite categórico de esa familia. Un autoinforme no puede medir el aprendizaje ni la conducta; solo puede medir lo que una persona está dispuesta a decir sobre su aprendizaje o su conducta, y esas dos cosas se separan con la suficiente frecuencia en esta base de investigación como para ser un hallazgo por derecho propio.

### Qué exactas son las estimaciones

La exactitud es el problema principal, y la dirección es coherente. La evidencia más limpia viene de un estudio que construyó medidas paralelas autoinformadas y objetivas de la [[ai-literacy|alfabetización en IA]] docente dentro de un único marco. En 288 docentes de K-12, las correlaciones entre los factores objetivos y los autoinformados iban de r = 0,07 a r = 0,24, y el análisis de perfiles latentes encontró seis perfiles: 43 docentes se valoraban de forma consistentemente alta mientras puntuaban más bajo en la medida objetiva, 59 mostraban el patrón inverso, y los perfiles restantes se agrupaban cerca de la media o se dividían según la experiencia previa con IA. Dos medidas de una misma destreza, construidas por el mismo equipo sobre el mismo constructo, comparten casi nada.

El panorama a nivel de campo coincide con ese único estudio. [[assessing-teachers-ai-literacy-measurement-tools-2026|La revisión de Zainal, Mohd Matore y Maat (2026) sobre los instrumentos de medición de la alfabetización en IA docente]] evaluó 33 instrumentos publicados entre 2019 y 2025 y encontró que 31 (93,9%) eran escalas de autoinforme sobre la confianza percibida, solo dos (6,1%) medían el conocimiento de forma objetiva y ninguno usaba tareas basadas en el rendimiento. La lectura de los autores es aquella sobre la que gira la cara de medición de esta página: una puntuación de autoinforme registra la confianza declarada y no la capacidad, así que no puede sustituir a la competencia, y abogan por tareas de rendimiento y análisis de teoría de respuesta al ítem junto a la autoevaluación para separar la capacidad validada de la confianza declarada.

La exactitud depende también de qué se esté estimando. Un análisis psicométrico de una autoevaluación de alfabetización en IA generativa basada en una taxonomía con 158 miembros del personal y estudiantes universitarios encontró un perfil invertido, con las personas encuestadas declarando dominio de la creación antes que de los fundamentos conceptuales que la sustentan, y solo una correlación débil (r = 0,188) entre los perfiles del estudiantado y del personal académico. Una encuesta a estudiantes de formación docente encontró la misma forma desde el otro lado: casi todos (97,8%) valoraban como importante el análisis crítico de medios, mientras que solo el 13,8% decía que su plan de estudios lo abordaba, y menos de la mitad (44,9%) creía tener las destrezas para analizar información mediática de forma crítica. La competencia mediática autoevaluada iba por detrás de la importancia autoevaluada.

Dos mecanismos explican la generosidad. El primero es motivacional y está bien documentado fuera de esta literatura: las personas se valoran con generosidad, y quienes son menos competentes son los que más se sobreestiman. El segundo es específico de las cohortes nativas de IA. Un artículo teórico de 2026 sobre la **línea base cognitiva ausente** sostiene que el uso sustitutivo sostenido de la IA durante los años formativos de secundaria reduce los encuentros cognitivos independientes de los que depende toda autoevaluación académica. La afirmación es estructural y no individual: la autoevaluación funciona comparando un rendimiento actual con un registro de rendimientos previos, y donde ese registro nunca se construyó, la estimación no tiene contra qué calibrarse. Eso se presenta como distinto de la [[cognitive-offloading|descarga cognitiva]] y la [[cognitive-surrender|rendición cognitiva]], que describen procesos durante el uso de la IA, porque la brecha persiste cuando la herramienta está ausente.

La etapa de desarrollo marca un límite a la exactitud, y es entre quienes aprenden más pequeños donde un instrumento de autoevaluación validado es más escaso. [[ai-literacy-self-assessment-questionnaire-primary-2025|El estudio de validación de Thianwan y Srikoon (2025) de un cuestionario de autoevaluación de la alfabetización en IA para estudiantes de primaria alta]] construyó una medida de 15 ítems para los grados 4 a 6 en torno a Aprender sobre la IA, Aprender cómo funciona la IA y Aprender para la vida con IA, y confirmó una estructura de tres factores en muestras de 335 y 579 estudiantes con un alfa de Cronbach global de 0,934. Los autores son explícitos sobre el límite del género: la exactitud de la autoevaluación depende de una capacidad metacognitiva que todavía está madurando en la infancia, así que las puntuaciones indican comprensión percibida y no competencia demostrada, y el instrumento está pensado para el diagnóstico formativo.

### La autoevaluación como variable de resultado

La cara de medición también aparece en el diseño de evaluaciones, donde los instrumentos de autoevaluación se usan como medidas de resultado. Un estudio sobre la evaluación asistida por IA de informes complejos en educación superior evalúa explícitamente el aprendizaje con instrumentos validados de alfabetización en retroalimentación y autoevaluación, junto con el rendimiento posterior y la comparación con un grupo de control. Eso es defendible cuando el instrumento mide una creencia sobre la que trata de verdad el estudio, como la [[self-efficacy|autoeficacia]] o la competencia percibida, y engañoso cuando se trata como sustituto del logro. La crítica recurrente a los [[ai-ed-evaluation|estudios de intervención con IA]] se aplica aquí con toda su fuerza.

## Qué cambia la IA generativa

Las dos caras convergen bajo la IA generativa, porque la herramienta ataca el vínculo del que dependen ambas: que el trabajo entregado por quien aprende sea evidencia sobre quien aprende.

Donde el trabajo puede producirse a demanda, un ensayo sólido ya no demuestra el juicio que hay detrás, y pedir a un estudiante que evalúe un borrador que no escribió es una tarea distinta de evaluar uno propio. Por eso los argumentos sobre la [[assessment-validity|validez de la evaluación]] se han desplazado de la detección al rediseño, y por eso la autoevaluación pasa de ser una ayuda de estudio a ser un componente del propio diseño de la evaluación: el juicio que un estudiante hace sobre una pieza de salida de IA, registrado y con razones, es evidencia de un modo en que la salida no lo es.

También introduce un riesgo de denominación que conviene enunciar con claridad. La **autoevaluación de la IA** no es este concepto. Cuando un artículo informa de que un modelo evalúa su propio razonamiento o califica su propia salida, eso es evaluación de modelos y corresponde a la [[automated-assessment|evaluación automatizada]] y al estudio del [[llm-training-and-fine-tuning|entrenamiento de modelos]] y de los aprendices simulados; un estudio de tutoría plantea la versión práctica del punto al sostener que la retroalimentación debería condicionarse a un clasificador diagnóstico separado y no a la validez del razonamiento autoevaluada por el modelo. La autoevaluación de quien aprende y la autoevaluación de un modelo comparten un vocabulario y nada más.

## Implicaciones para la práctica

- **Andamie la técnica.** Las rúbricas, las directrices para los prompts y las hojas de trabajo son lo que hace desarrollador un ciclo de autoevaluación. La autoevaluación desnuda, como la retroalimentación desnuda de la IA, tiende a producir tranquilidad y no juicio.
- **Entrene la calibración por separado del uso de la retroalimentación.** Las actividades de predicción y comparación cambian la exactitud de las autoestimaciones; el trabajo de alfabetización en retroalimentación cambia lo que el estudiantado hace con los comentarios. Si el objetivo es la exactitud, aplique la actividad de calibración.
- **Mantenga las autocalificaciones de bajo riesgo a menos que la formación sea real.** Una autocalificación es una afirmación sobre el aprendizaje hecha por la persona a la que beneficia, y los perfiles de sobreestimación del estudio sobre alfabetización en IA no son un sesgo pequeño que absorber en una nota sumativa.
- **Use el autoinforme donde sea honesto.** La confianza, la competencia percibida y la disposición a declarar el uso de IA son cosas legítimas que medir preguntando. El logro no lo es.
- **Pida juicio, no opinión.** La autoevaluación de la era de la IA más defendible pide a un estudiante que valore una pieza concreta de trabajo con arreglo a criterios y justifique su valoración, lo que es entrenable, inspeccionable y está conectado con el [[evaluative-judgment|juicio evaluativo]].
- **Vigile el efecto de cohorte.** Para el estudiantado cuyos años formativos incluyeron un uso sustitutivo de la IA, una autoestimación exacta puede estar no disponible en lugar de ser meramente optimista, lo que desplaza la tarea instruccional de corregir el exceso de confianza a reconstruir el registro experiencial que necesita.

## Conceptos conectados

- [[evaluative-judgment]]
- [[self-report-measures]]
- [[peer-assessment]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[self-efficacy]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[trust-calibration]]
- [[assessment]]
- [[learning-gains]]
- [[educational-measurement]]
- [[ai-literacy]]

## Artículos conectados

- [[pedlow-genai-selfassessment-2026]] — Autoevaluaciones de antes y después del semestre sobre el uso ético de la IA generativa en cohortes de enfermería, ciencias de la salud, ingeniería y ciencias (Pedlow et al. 2026)
- [[rethinking-ai-writing-feedback-literacy]] — Guiones de alfabetización en retroalimentación frente a formación en calibración en la escritura asistida por IA (2026)
- [[scaffolding-srl-feedback-genai-human-peers]] — Tres ciclos de autoevaluación que comparan la retroalimentación andamiada de IA generativa con la retroalimentación entre pares, N = 118 (2026)
- [[guided-llm-scaffolding-independent-learning]] — El andamiaje centrado en la verificación mejoró el rendimiento independiente y la calibración de la autoevaluación en estadística (2026)
- [[absent-cognitive-baseline-2026]] — Autoevaluación académica sin el registro experiencial con el que calibrarse (2026)
- [[ai-literacy-assessment-misalignment]] — Las medidas autoinformadas y objetivas de la alfabetización en IA docente solo correlacionan débilmente, r = 0,07 a 0,24 (Zhang et al. 2026)
- [[genai-skill-bypass-literacy]] — Análisis de Rasch de 158 autoevaluaciones de alfabetización en IA generativa: un perfil de destrezas invertido (2026)
- [[self-directed-growth-generative-ai-learning-analytics]] — La autoevaluación situada en el centro de un marco de crecimiento autodirigido (2026)
- [[tripartite-feedback-framework-ai-assessment-2026]] — Instrumentos de autoevaluación validados usados como resultados de aprendizaje en la evaluación asistida por IA (2026)
- [[ai-feedback-enactment-workflow-2026]] — Poner en acto la retroalimentación de IA elevó la incorporación y la confianza en la autoevaluación (2026)
- [[interactive-learning-dashboards-engagement]] — Una función de autoevaluación de Juicio del Aprendizaje dentro de un panel interactivo (2026)
- [[lodge-adaptive-capabilities-genai-future-2026]] — Autoevaluaciones estructuradas como evidencia de proceso de capacidades adaptativas (Lodge et al. 2026)
- [[critical-media-literacy-education-2026]] — La competencia mediática autoevaluada va por detrás de la importancia percibida (2026)
- [[age-tiered-ai-literacy-guidebooks-2026]] — Materiales de alfabetización en IA graduados por etapa de desarrollo, con medición de aceptación y validez (2026)
- [[chatgpt-critical-creative-thinking-review]] — Triangular la retroalimentación de IA con la evaluación entre pares, del profesorado y la autoevaluación (2026)
- [[yasir-llm-tutoring-agents-2026]] — Por qué la retroalimentación no debería apoyarse en la validez del razonamiento autoevaluada por un modelo (Yasir et al. 2026)
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — Un cuestionario validado de 15 ítems de autoevaluación de la alfabetización en IA para los grados 4 a 6, con los límites metacognitivos del autoinforme infantil (Thianwan y Srikoon 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 31 de 33 instrumentos de alfabetización en IA docente son de autoinforme, dos miden el conocimiento de forma objetiva y ninguno usa tareas de rendimiento (Zainal, Mohd Matore y Maat 2026)
