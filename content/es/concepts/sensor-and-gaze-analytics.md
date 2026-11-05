---
title: Analítica de sensores y de la mirada
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-04T16:09:41-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Analítica de sensores y de la mirada** — el uso del seguimiento ocular, la electroencefalografía, la actividad electrodérmica, la variabilidad de la frecuencia cardíaca y la postura derivada de cámara para inferir estados de quien aprende, como la atención, la implicación, la carga cognitiva y el afecto. En la [[ai-education|IA en la educación]], estas señales prometen una visión continua y no verbal del aprendizaje que los cuestionarios y las autoevaluaciones no pueden ofrecer. También están en el centro del problema de inferencia más difícil del campo: un sensor registra un cuerpo, no una mente, y toda afirmación sobre lo que alguien piensa o siente es una interpretación superpuesta a ese registro ([[kim-ai-embodied-learning-review-2026|Kim y Han, 2026]]).

## Preguntas para reflexionar

- Una webcam puede mostrar que sus ojos permanecieron dentro del reproductor de vídeo durante toda una clase. ¿Significa eso que estaba prestando atención?
- Si un tutor pudiera estimar su carga cognitiva en tiempo real, ¿debería actuar sobre esa estimación sin preguntárselo primero?
- La mirada de un estudiante puede abandonar la pantalla por un tic, una discapacidad visual o una norma cultural. ¿Qué significa una marca de «atención baja» para ese estudiante?
- ¿Debería permitirse a una universidad recoger datos cerebrales y cardíacos para mejorar un curso, y qué exigiría un consentimiento real?
- Una cifra de «75% de exactitud en implicación» suena precisa. ¿A qué capa de la implicación llegó realmente el sensor y cuál se perdió?
- La supervisión de exámenes ya lee la postura y el movimiento de la cabeza. ¿Dónde está la línea entre detectar una conducta indebida y juzgar un cuerpo?

## Introducción

La analítica de sensores y de la mirada agrupa métodos que convierten mediciones físicas de quien aprende en inferencias educativas. Las mediciones incluyen dónde se posan los ojos y durante cuánto tiempo, la actividad eléctrica del cuero cabelludo, las respuestas de las glándulas sudoríparas, la variación latido a latido de la frecuencia cardíaca y la posición y el movimiento de la cabeza y el torso. Las inferencias incluyen atención, implicación, carga cognitiva, confusión, estrés y, en contextos de evaluación, sospecha.

El atractivo es directo. Las [[self-report-measures|autoevaluaciones]] son retrospectivas y gruesas, y los cuestionarios muestrean el aprendizaje en pocos momentos. Los sensores funcionan de forma continua y exigen poco esfuerzo consciente. Esa combinación ha hecho de la sensorización un elemento central de la [[learning-analytics|analítica del aprendizaje]] y del [[student-modeling|modelado del estudiantado]], y ha producido una literatura amplia en la que la sensorización es técnicamente impresionante y la interpretación es delgada.

Una [[meta-analysis-systematic-review|revisión sistemática]] de 23 estudios que emparejan IA con [[embodied-learning|aprendizaje corporalizado]] hace concreta esa desproporción. El análisis y la evaluación supusieron el 40,0% de los roles de IA codificados, y el reconocimiento y la detección el 22,5%, mientras que la retroalimentación y el acompañamiento ocuparon el 15,0%. Los roles de sensorización sumaron el 62,5% de las etiquetas de rol frente al 35,0% de los participativos ([[kim-ai-embodied-learning-review-2026|Kim y Han, 2026]]). El campo es mejor observando a quien aprende que cambiando lo que ocurre después.

## Qué mide realmente cada señal

**Mirada y fijación.** Los rastreadores oculares informan de hacia dónde apunta el ojo, cuánto se detiene, cuándo hace sacadas y cuánto se dispersa. Los sistemas de pantalla, como WebGazer, estiman la mirada desde una webcam; las gafas rastrean el ojo directamente. TutorLoop convierte la mirada en dos cantidades: atención como el porcentaje de puntos de mirada dentro del área de contenido, y carga de trabajo como entropía de la mirada, sobre el supuesto de que la mirada dispersa indica carga cognitiva ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ollie, un asistente para niños basado en la mirada, define áreas de interés en una imagen y activa la narración cuando el niño mira una ([[gaze-informed-ai-children|Wu et al., 2026]]).

**Electroencefalografía.** La EEG registra fluctuaciones de voltaje en el cuero cabelludo con alta resolución temporal. Es la única señal de esta familia que llega directamente a la actividad cortical, y por eso atrae a la investigación en evaluación. Los sistemas educativos prácticos usan electrodos secos y pocos canales: E3Sense tomó cuatro canales EEG secos a 125 Hz y analizó dos frontales ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Los equipos de investigación hacen lo contrario: Kosmyna et al. (2025) usaron EEG de 32 canales para comparar a estudiantes que escribían con un [[llm|LLM]], con un buscador o sin herramienta, y encontraron la conectividad neuronal más débil en el grupo del LLM ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna et al., 2025]]). Ese estudio es también la advertencia más clara sobre la evidencia de un solo canal, ya que su afirmación central descansa en una sesión cruzada opcional a la que solo asistieron 18 de 54 participantes.

**Actividad electrodérmica.** La EDA mide la conductancia de las glándulas sudoríparas, un índice de activación simpática. Responde al estrés, al esfuerzo y a la intensidad emocional, y no los distingue entre sí. El mismo constructo aparece en pulseras y en electrodos frontales fijados a pocos centímetros de distancia por el marco de un rastreador ocular ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

**Frecuencia cardíaca y variabilidad de la frecuencia cardíaca.** La frecuencia cardíaca sigue la activación; la variabilidad entre latidos indexa la recuperación autonómica. En un año de estudio con 458 estudiantes con anillos Oura, el lenguaje de agotamiento emocional siguió a una menor eficiencia del sueño y a una menor variabilidad de la frecuencia cardíaca ([[affective-text-wearable-student-health|Texto afectivo y sensorización wearable, 2026]]). Ninguna de las dos medidas identifica una causa.

**Postura y movimiento basados en cámara.** Un sistema de supervisión de exámenes puede extraer diecisiete puntos corporales por fotograma y derivar desviación postural, tendencia del movimiento de la cabeza y movimiento del tren superior ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Eso mide movimiento; llamarlo conducta sospechosa es un paso aparte y no respaldado.

Estas señales difieren en frecuencia de muestreo, ruido y carga instrumental. E3Sense alineó doce ventanas de EEG, seis oculares y tres de EDA en una representación común de 120 segundos con 166 dimensiones ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage hizo funcionar siete tipos de dispositivo a la vez y concluyó que las combinaciones ligeras concentraban la mayor parte de la señal utilizable ([[engagement-assessment-video|Leng et al., 2026]]).

## Para qué se usan las señales

**Detección de implicación en el [[video-education|aprendizaje con vídeo]].** E3Sense pidió a 30 universitarios que valoraran cinco segmentos por vídeo, lo que produjo 450 valoraciones. Un modelo fusionado alcanzó 75,0% de exactitud equilibrada dentro de un nivel frente a una línea base del 63,0% en participantes reservados ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). EduGage informó de un MAE de 0,81 y un 83,75% de exactitud dentro de un nivel en 16 participantes y 715 ventanas de sondeo ([[engagement-assessment-video|Leng et al., 2026]]). Ambos tratan la estimación como aproximada.

**Estimación de la atención en aulas.** Un [[multimodal|transformador multimodal]] fusionó imágenes faciales con señales wearable en DIPSER, un conjunto naturalista de 57 sujetos, y alcanzó un MAE de 0,283. Su ventaja sobre una línea base solo visual fue modesta, y los autores concluyen que los rasgos faciales fueron la fuente principal ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]).

**Carga cognitiva y momento de la retroalimentación.** TutorLoop usó la atención y la carga de trabajo derivadas de la mirada para elegir entre cuatro [[feedback|tipos de retroalimentación]] con un agente de aprendizaje por refuerzo. En 187 participantes, el sistema completo intervino menos que las líneas base y aun así mejoró la atención y redujo la carga de trabajo ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**Supervisión de exámenes e integridad.** La supervisión basada en pose informa de un rendimiento casi perfecto en su propio conjunto etiquetado de escenarios: 99,56% de exactitud y un AUC de 0,9957 ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). La IA wearable cambia el mismo problema desde el otro lado. Las gafas inteligentes eliminan la caída de la mirada y el cambio de postura en los que se apoya la vigilancia, una condición que Corbin y colegas llaman doble transparencia ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**Afecto y [[well-being|bienestar]].** Las señales fisiológicas recogidas en exámenes predijeron categorías de calificación, y el bosque aleatorio alcanzó de media 0,96 en 30 réplicas ([[physiological-signals-exam-outcomes-ml|Yamazaki y Rimal, 2026]]). Los predictores principales fueron la actividad electrodérmica, el movimiento del acelerómetro y la temperatura de la piel. Eso es activación y movimiento, no comprensión.

**Investigación en evaluación.** La EEG se ha probado como medida directa de familiaridad y de representación mental. Ambas líneas son prometedoras y ambas siguen siendo exploratorias, algo que aborda la sección siguiente.

## La brecha inferencial

Todos los usos anteriores dependen de una cadena: un evento fisiológico o conductual, un rasgo calculado a partir de él, un modelo entrenado con etiquetas y una afirmación sobre un estado mental. Cada eslabón tiene fugas.

La etiqueta suele ser el eslabón más débil. E3Sense predijo las valoraciones de los propios estudiantes por segmento, y el 63% de esas valoraciones se situaba en los dos niveles de implicación. Un modelo puede puntuar bien aprendiendo la distribución en lugar del estado. Cuando los investigadores añadieron las definiciones de implicación de los propios estudiantes, la exactitud subió del 64,6% al 71,5%, lo que sugiere que las etiquetas y las señales medían en parte cosas distintas ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]).

La [[assessment-validity|validación]] puede inflar el modelo. Un banco de pruebas de quince modelos para la predicción de familiaridad con EEG alcanzó un F1 de 0,9853 con validación cruzada estratificada. El Group K-Fold independiente del ensayo, que respeta la estructura temporal, hizo caer el máximo a un F1 de 0,6038 frente a un nivel de azar del 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara y Halloluwa, 2026]]). El primer número describe fuga de información; el segundo describe aprendizaje.

Un correlato neural no es una puntuación. Las imágenes reconstruidas a partir de EEG correlacionaron con el rendimiento en la prueba con R² = 0,79 en 55 observaciones participante-vídeo. Los ítems respondidos correctamente mostraron además mayor similitud semántica que los incorrectos. Aun así, un participante produjo reconstrucciones de alta calidad y respondió incorrectamente, de modo que la calidad de la reconstrucción no puede leerse como corrección ([[seeing-cognitive-representations-eeg-reconstruction|Su et al., 2026]]).

La atención no es aprendizaje. En TutorLoop, la atención correlacionó con el aprendizaje con r = 0,017, mientras que la carga de trabajo correlacionó negativamente con r = -0,168 ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Un sistema que maximizara la señal de atención habría optimizado algo cercano al ruido.

Un perfil fisiológico no es un diagnóstico. Los modelos de estrés en exámenes predicen una categoría de calificación a partir de la activación y el movimiento, y los autores insisten en que la salida pertenece junto a las circunstancias personales y el contexto de salud mental, no dentro de una decisión de alto impacto ([[physiological-signals-exam-outcomes-ml|Yamazaki y Rimal, 2026]]).

Por último, recoger no es integrar. Kim y Han encontraron que la mayoría de los estudios multimodales reunían los flujos en paralelo, uno alineaba afecto facial, mirada y detección de rostro a posteriori, y ninguno fusionó sus entradas en vivo mientras una persona usaba el sistema ([[kim-ai-embodied-learning-review-2026|Kim y Han, 2026]]). Una página de canales sincronizados puede parecer un modelo de quien aprende cuando solo es un registro.

## Ética de la sensorización del estudiantado

**El consentimiento se debilita por el poder institucional.** Un estudiante que debe asistir a clase o presentarse a un examen no puede rechazar libremente una cámara o un dispositivo wearable. Es posible que los atributos demográficos ni siquiera se aporten voluntariamente: las etiquetas de género, edad y etnia de DIPSER fueron inferidas de las imágenes por modelos de visión por computador en lugar de ser proporcionadas por los participantes ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Inferir quién es alguien para comprobar si un modelo lo trata con justicia es en sí mismo un acto de perfilado.

**Los datos biométricos no son datos analíticos ordinarios.** La EEG, la EDA y la variabilidad de la frecuencia cardíaca son afines a la salud y, en muchas jurisdicciones, datos de categoría especial. Pueden revelar sueño, estrés y condiciones médicas más allá de lo que un curso necesita. Un sistema basado en la mirada para niños recibió una objeción de [[privacy|privacidad]] de un padre incluso en un piloto pequeño ([[gaze-informed-ai-children|Wu et al., 2026]]).

**La desviación de función es el camino normal.** El seguimiento del bienestar se convierte en marcado de riesgo, y este en evidencia para calificar. Corbin y colegas muestran la versión evaluativa de esa deriva: cuando la exclusión física falla, la inspección pasa de los artefactos a los cuerpos, y el estudiantado debe probar que sus gafas son correctivas y sus dispositivos terapéuticos ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al., 2026]]).

**Los fallos de equidad se agrupan en cuerpos distintos.** La estimación de atención por rostro depende del tono de piel, las gafas y la iluminación. La atención basada en la mirada penaliza a quienes evitan el contacto visual, incluidas algunas personas autistas y [[neurodiversity|estudiantes neurodivergentes]]. La supervisión basada en pose marca tics, stimming y normas culturales de movimiento. El estudio de supervisión no comprueba si la postura marcada corresponde a una conducta indebida, ni si el detector trata con justicia a [[special-education|estudiantes con discapacidad]] o las diferencias culturales en la mirada ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). La regulación no es una solución aquí; es una forma de blanquear el error convirtiéndolo en regla.

**Las afirmaciones de equidad necesitan evidencia a nivel de sujeto.** Un regularizador dirigido al género redujo la brecha de MAE de validación de 0,02 a 0,005 y luego aumentó tanto la brecha como el error del peor grupo en sujetos reservados ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). Informar de una única partición como prueba de equidad es un fallo de diseño con un costo de equidad.

**La privacidad se puede diseñar.** TutorLoop ejecutó WebGazer en el lado del cliente, de modo que la mirada sin procesar nunca salió del navegador ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Esa elección muestra que parte del costo es arquitectónico y no inherente. La pregunta más difícil es si la inferencia debería existir siquiera.

## Concepciones erróneas

**«El seguimiento ocular dice dónde está la atención.»** Dice hacia dónde apuntan los ojos. La mirada puede posarse en una diapositiva mientras quien aprende piensa en otra cosa, y puede abandonar la pantalla por razones ajenas a la atención. La medida de atención de TutorLoop correlacionó con el aprendizaje con r = 0,017, lo que está cerca de ninguna relación ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**«Una señal fisiológica es una lectura directa de un estado mental.»** La EDA indexa la activación simpática y la variabilidad de la frecuencia cardíaca indexa la recuperación autonómica. Ninguna distingue el estrés del esfuerzo ni de la excitación. Un modelo que predice calificaciones de examen a partir de EDA, movimiento y temperatura de la piel ha aprendido la firma de activación del cuerpo, no la comprensión del estudiante ([[physiological-signals-exam-outcomes-ml|Yamazaki y Rimal, 2026]]).

**«Una exactitud de clasificación alta significa que el sistema detecta el estado.»** La exactitud depende de las etiquetas, la partición y la tasa base. La predicción de familiaridad con EEG cayó de un F1 de 0,9853 a 0,6038 cuando la validación respetó los límites de ensayo ([[eeg-familiarity-automated-assessment-2026|Nanayakkara y Halloluwa, 2026]]). El 99,56% de la supervisión describe un conjunto etiquetado de escenarios hecho a medida, no exámenes reales ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]).

**«La implicación es una sola cosa, así que una puntuación puede representarla.»** El constructo tiene tres vertientes, y un sensor llega sobre todo a la primera. E3Sense encontró que quienes aprenden la definían mediante indicadores cognitivos, conductuales y emocionales en proporciones distintas, y esas definiciones cambiaban la predicción ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan et al., 2026]]). Un único número esconde qué capa se midió.

**«Si el modelo es justo en la partición de validación, es justo en el aula.»** Un regularizador que igualó el error de validación entre grupos de género empeoró la brecha en los datos reservados ([[student-attention-estimation-fairness-2026|Fragkiadakis et al., 2026]]). La equidad es una propiedad de un despliegue, no de un punto de control.

## Conceptos conectados
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Artículos conectados
- [[gaze-informed-ai-children]] — La narración con LLM activada por la mirada mantuvo a los niños en una región narrada 6,48 s frente a 1,67 s, pero el estudio midió atención y no comprensión (Wu et al., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG montado en la cabeza, seguimiento ocular y EDA frontal predijeron la implicación autoinformada con un 75,0% de exactitud dentro de un nivel frente a una línea base del 63,0% (Anupkrishnan et al., 2026)
- [[engagement-assessment-video]] — EduGage fusionó siete flujos de dispositivos wearable y cámara en estimaciones de implicación por segmento (MAE 0,81) y aboga por una instrumentación más ligera (Leng et al., 2026)
- [[student-attention-estimation-fairness-2026]] — Un modelo multimodal de atención alcanzó un MAE de 0,283, y sus mejoras de equidad en validación se invirtieron en sujetos reservados (Fragkiadakis et al., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — La IA wearable es doblemente transparente, así que la exclusión física falla y la aplicación deriva hacia el enjuiciamiento de los cuerpos del estudiantado (Corbin et al., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — Quince modelos de predicción de familiaridad con EEG cayeron de un F1 de 0,9853 a 0,6038 con validación independiente del ensayo (Nanayakkara y Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — Las imágenes reconstruidas a partir de EEG siguieron el rendimiento en la prueba con R² = 0,79, con un participante de alta reconstrucción que respondió incorrectamente (Su et al., 2026)
- [[physiological-signals-exam-outcomes-ml]] — El bosque aleatorio predijo categorías de calificación de examen a partir de EDA, movimiento y temperatura de la piel, señales que indexan activación y no comprensión (Yamazaki y Rimal, 2026)
- [[affective-text-wearable-student-health]] — En 458 estudiantes con anillo Oura, el registro emocional y no el tema de preocupación siguió al sueño y a la variabilidad de la frecuencia cardíaca (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — La mirada de una webcam guio la retroalimentación por aprendizaje por refuerzo de 187 estudiantes; la atención correlacionó con el aprendizaje con r = 0,017 mientras que la carga de trabajo correlacionó negativamente (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — Los rasgos de pose de YOLOv11 marcaron conducta sospechosa con un 99,56% en un conjunto etiquetado hecho a medida, sin probar la conducta indebida ni la equidad (Arif et al., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — La conectividad EEG disminuyó con el apoyo externo a la escritura en 54 participantes, lo que enmarca la dependencia como deuda cognitiva acumulada (Kosmyna et al., 2025)
- [[kim-ai-embodied-learning-review-2026]] — En 23 estudios, los roles de sensorización dominaron con el 62,5% de las etiquetas y ningún sistema revisado fusionó flujos multimodales en vivo (Kim y Han, 2026)
