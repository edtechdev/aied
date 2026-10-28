---
connected_resources: [drawsplat]
title: IA multimodal
created: "2026-09-28T21:03:34-04:00"
updated: "2026-10-28T13:32:35-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
source_updated: "2026-10-27T07:23:49-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **IA multimodal**: [[ai-technologies|sistemas de IA]] que procesan, entienden o generan contenido en varias modalidades (texto, imágenes, audio, vídeo y datos estructurados) y las cuestiones educativas que estos sistemas plantean. En la [[ai-education|educación con IA]], la IA multimodal aparece en tres papeles distintos: como el *contenido de aprendizaje* que los estudiantes crean y con el que trabajan ([[multimodal-learning-genai|aprendizaje multimodal]]), como la *frontera de capacidad* de los sistemas de tutoría que deben interpretar diagramas y gráficos ([[syal-multimodal-dialogue-stem-2026|tutoría multimodal]]), y como la *señal de evaluación* que se usa para valorar la comprensión ([[multimodal-item-parameter-estimation-2026|medición multimodal]]).

## Preguntas para considerar

- Piense en un gráfico, un diagrama de fuerzas o un esquema que alguna vez le haya costado explicar con palabras. ¿Qué sugiere esa experiencia sobre los límites de un [[intelligent-tutoring|tutor de IA]] que solo maneja texto cuando intenta ayudar con problemas ricos en imágenes?
- Un tutor de [[physics-education|física]] responde a los problemas basados en texto en torno al 96% de las veces, pero baja a cerca del 74% en problemas que esconden significado en diagramas. Antes de leer, ¿qué cree que causa esta "interferencia multimodal"? ¿Y se le ocurre una solución que no implique reentrenar el modelo?
- Es probable que haya generado texto e imágenes con herramientas de IA. ¿Ha notado que el "[[prompt-engineering|prompting]] para imágenes" es distinto del prompting para texto? ¿Qué habilidades podrían necesitar los estudiantes para traducir una idea abstracta en un prompt visual preciso?
- La IA multimodal puede calificar ensayos, generar retroalimentación con narración de audio e incluso reconstruir las estadísticas de los ítems de un examen a partir de ítems de imagen y texto. ¿Qué señala (o qué arriesga) el paso de la evaluación solo de texto a la evaluación multimodal en materia de [[bias-mitigation|equidad]] y validez?
- ¿Cómo podría el hecho de que el apoyo de la IA sea menos fiable justo en los problemas cargados de diagramas que construyen una comprensión profunda de [[stem-education|STEM]] crear una brecha de [[equity-in-ai-education|equidad]] entre estudiantes? ¿A quién afecta más?
- Los sistemas multimodales pueden traducir texto a audio o contenidos visuales para apoyar un aprendizaje inclusivo, pero también permiten una sensorización fina del aula. ¿Dónde está la línea entre un acceso multimodal útil y la vigilancia?

## Introducción

La multimodalidad en la IA se refiere a la capacidad de trabajar con distintas formas de representación y no solo con texto. Los sistemas modernos de [[generative-ai|IA generativa]] y de [[llm|LLM]] aceptan y producen cada vez más imágenes, audio y vídeo además de texto, lo que abre posibilidades nuevas y riesgos nuevos para la educación. Anclada en la teoría sociosemiótica, según la cual el significado se construye a través de los modos y no solo de las palabras, la IA multimodal cambia cómo se diseñan y se evalúan la [[teacher-role|enseñanza]], el aprendizaje y la evaluación.([[multimodal-learning-genai]])

## Tres caras de la IA multimodal en la educación

### 1. Aprendizaje multimodal y creación de contenido

La IA multimodal permite a los estudiantes producir contenido y trabajar con él en texto, imagen, audio y vídeo. Una guía para docentes sobre el aprendizaje multimodal con IA generativa presenta estas herramientas como un socio "ciberosocial": complementan, pero no pueden sustituir, la construcción humana de significado.([[multimodal-learning-genai]])

- **La [[ai-literacy|alfabetización en IA]] en contextos multimodales** es estratificada: conciencia básica de las plataformas multimodales, cocreación intermedia y [[critical-thinking|evaluación crítica]] de los resultados, y diseño avanzado de actividades y evaluaciones multimodales.([[multimodal-learning-genai]])
- **El prompting multimodal** es en sí mismo una práctica epistémica exigente. Los estudiantes que hacen prompts para imágenes y también para texto descubren que "la alfabetización en prompting es distinta cuando se hace prompting para texto que cuando se hace para imágenes": traducir significado abstracto en prompts multimodales legibles por máquina exige un vocabulario visual preciso y deja a la vista las limitaciones y los sesgos del sistema.([[multimodal-prompting-ai-literacy]])
- **La evaluación multimodal** pasa de los ensayos a artefactos que combinan texto, imagen, audio y vídeo, con docentes que usan la IA para dar [[scaffolding|andamiaje]] a la creación y la retroalimentación en lugar de sustituir la producción del propio estudiante.([[multimodal-learning-genai]])
- **La elección de modalidad es un juicio educativo, no un envase.** [[elkington-human-centred-assessment-value-2026|Elkington (2026)]] sostiene que elegir entre formatos escritos, orales, digitales y multimodales decide qué se vuelve posible para los estudiantes y visible para los evaluadores, y cuenta la elección controlada entre modalidades como una restricción generativa y no como un detalle administrativo.
- **La composición multimodal del estudiante como andamiaje del pensamiento crítico conlleva un intercambio.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] muestran que hacer que estudiantes de primaria superior conviertan narraciones escritas en imágenes generadas por IA y vídeos cortos sostuvo ganancias sostenidas en interpretación, análisis, evaluación y explicación, pero no en inferencia. Como los elementos visuales hacían explícito el significado del relato, los estudiantes informaron de que necesitaban inferir menos el significado implícito a partir del texto solo; fue la colaboración entre pares, y no la herramienta multimodal, la que restauró las ocasiones de inferir. El valor de la IA multimodal como socio en la construcción de significado es, por tanto, específico de cada dimensión y depende de un [[learning-design|diseño instruccional]] que reintroduzca deliberadamente el trabajo inferencial y de [[self-regulated-learning|autorregulación]] que la externalización en el artefacto puede cortocircuitar.
- **La [[writing-education|composición]] multimodal del estudiante como alfabetización crítica en IA.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] analizan los anuncios de servicio público en vídeo, de entre 90 segundos y 3 minutos, de 22 estudiantes de undécimo grado sobre cuestiones de [[ethics|ética]] de la IA elegidas por ellos mismos (vigilancia mediante portátiles regulados por la escuela y "pases" electrónicos, [[privacy|consentimiento informado]] y acusación algorítmica punitiva) como [[ai-literacy|alfabetización crítica en IA]] puesta en práctica al componer con imagen en movimiento, sonido, texto y los propios cuerpos de los estudiantes. En las siete películas el daño aparecía como surgido del entrelazamiento entre humanos y máquinas y no de la herramienta sola (un "acosador de IA" antropomorfizado fue interpretado por un actor humano en tres de las siete), y 15 de las 18 respuestas de final de unidad decían que componer había cambiado su comprensión de la ética de la IA. Los autores sostienen que los productos multimodales tanto *demuestran* como *comunican* la competencia crítica: artefactos productivos, reflexiones y discurso cívico pueden servir como evidencia de [[assessment|evaluación]] que las escalas de alfabetización solo de texto estructuralmente no captan.

### 2. Tutoría multimodal y la frontera de capacidad

Cuando los tutores basados en LLM tienen que resolver problemas que esconden significado en gráficos, diagramas de fuerzas, esquemas o tablas, su exactitud se degrada bruscamente: el **Efecto de Interferencia Multimodal**.([[syal-multimodal-dialogue-stem-2026]])

- En problemas de física de OpenStax, la exactitud con solo texto, en torno al 96%, baja a **cerca del 74%** en problemas ricos en imágenes, de forma consistente entre familias de modelos.([[syal-multimodal-dialogue-stem-2026]])
- **Los errores de procesamiento visual**, es decir, los fallos al extraer información de gráficos o diagramas, dominan la taxonomía de errores y son el modo de fallo más corregible.
- Una intervención sencilla de diálogo estructurado (pedir al modelo que describa lo que ve, corregir solo las lecturas erróneas *observables* sin desvelar la física y volver a preguntar) restaura la exactitud hasta **cerca del 95%** sin reentrenamiento alguno.([[syal-multimodal-dialogue-stem-2026]])
- Esto es un **problema de equidad**: los estudiantes que trabajan con problemas ricos en imágenes, precisamente los problemas que construyen una comprensión conceptual profunda en STEM, reciben hoy un apoyo de IA menos fiable que quienes trabajan con ejercicios solo de texto.
- **Construir una ayuda visual es más difícil que leerla.** En GeoVAD-Bench, proporcionar un diagrama auxiliar experto elevó la exactitud (de +3,3 a +7,0 puntos), pero dejar que los modelos construyeran su propia línea auxiliar amplió la brecha entre 10,0 y 13,5 puntos: dos modelos puntuaron peor que sin ningún razonamiento visual ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **La frontera es un perfil, no un nivel, y la imaginería artística queda fuera de la región que los modelos manejan bien.** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] evalúa 30 VLM abiertos y propietarios en 12 tareas sobre 1.174 obras de arte encargadas, y la dispersión de capacidad entre dimensiones es mayor de lo que sugiere cualquier puntuación agregada: la clasificación de escenas está casi madura (23 de 30 modelos por encima de 75,0, mediana 81,0), mientras que la detección de emociones se queda en 39,5 y las tareas abiertas que exigen a los modelos *articular* su evidencia puntúan 50,90 (identificación de indicios visuales) y 49,18 (inferencia de la causa de una emoción) en similitud semántica. El razonamiento composicional y el dependiente del punto de vista son los que peor fallan: donde la verdad de referencia no especifica ninguna relación lateral o vertical definida, el 90,0% y el 73,3% de los modelos afirman una de todos modos, solo el 43,3% sitúa correctamente a la niña en profundidad, y ningún modelo resuelve las tres dimensiones de un mismo ítem. Los fallos además se encadenan: un personaje mal anclado se justifica después con una argumentación fluida construida a partir de la semántica visual cercana (mariposas, pájaros), que es el desenlace más peligroso en tutoría porque la explicación se lee como competente. Para el [[language-learning|aprendizaje de idiomas]] basado en imágenes, esto aboga por una validación a nivel de dimensión sobre las imágenes que un curso usa realmente, en lugar de importar una puntuación multimodal general, y por extender el punto de control de anclaje descrito más abajo (describir qué se ve y dónde antes de razonar a partir de ello) al contenido artístico [[situated-learning|situado]] ([[muse-vlm-artistic-image-benchmark-2026]]).

La implicación práctica de diseño es un **punto de control de anclaje visual** en la tutoría multimodal: un paso deliberado en el que el sistema describe lo que ve antes de intentar una solución, lo que da al estudiante o a un supervisor humano la oportunidad de corregir errores perceptivos.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] añaden una restricción previa: una ecuación, un gráfico o una unidad pueden aparecer en un informe y nunca ser recuperados del documento procesado, de modo que un desacuerdo con el docente puede ser un fallo de extracción y no de razonamiento, lo que convierte el formato de entrega en parte del diseño de la evaluación.

### 3. Evaluación y medición multimodales

La IA multimodal amplía tanto el *contenido* de la evaluación como la *señal* que se usa para puntuarla.

- **Los sistemas de retroalimentación multimodal** integran texto estructurado, referencias a diapositivas y narración de audio en streaming. En un estudio, la [[ai-feedback-quality|retroalimentación multimodal con IA]] igualó a la retroalimentación del docente en aprendizaje mientras *superaba significativamente* a esta en las percepciones de los estudiantes.([[multimodal-ai-feedback-learning]])
- **La estimación multimodal de parámetros de ítems** usa LLM multimodales ajustados finamente para reconstruir las curvas características de los ítems (IRT / 3PL) directamente a partir de las probabilidades predichas por opción en ítems de imagen y texto, lo que conecta la IA multimodal con la [[educational-measurement|medición educativa]] y la [[item-response-theory|teoría de respuesta al ítem]].([[multimodal-item-parameter-estimation-2026]])
- **La evaluación de modelos visión-lenguaje educativos** y la [[mllm-scientific-visualization-literacy|alfabetización en LLM multimodales]] amplían el conjunto de herramientas de evaluación del campo al razonamiento multimodal y la [[visualization|visualización]].([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **La calificación multimodal de [[chemistry-education|química]] escrita a mano revela una frontera de capacidad dependiente del formato:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros y Kortemeyer]] calificaron página a página un examen final de química general escrito a mano de 296 estudiantes frente a imágenes de rúbricas con un LLM multimodal y de razonamiento, y puntuaron con fiabilidad las respuestas textuales y las ecuaciones de reacción química (F1 normalizado más alto), pero el dibujo y la representación gráfica *peor que el azar*: las cuadrículas de fondo distraen visualmente a la visión de la IA y los diagramas científicos y las estructuras químicas siguen siendo difíciles de interpretar. Esto refuerza que la visión de la IA multimodal no es robusta ante trabajo con alta carga de representación y que conviene desplegarla con [[human-in-the-loop-ai|deferencia humana]] en los ítems gráficos ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **El reconocimiento de constructos y el juicio comparativo son habilidades separables.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] expresan seis principios del aprendizaje multimedia como ediciones reversibles de diapositivas más controles simulados de equivalencia visual, y encuentran que ambos modelos recuperaron cada operación, principio y reparación (8/8) mientras la calibración de la severidad fallaba por completo (0/8): una puntuación compuesta ocultaría qué capa falla.

- **Las ganancias de equidad se pueden validar hasta hacerlas existir.** Un estimador multimodal de atención superó solo modestamente a una línea base solo visual, y su regularizador de brecha de MAE dirigido al género redujo la brecha de validación de 0,02 a 0,005 pero aumentó la brecha y el error del peor grupo en sujetos reservados, de modo que se requiere una validación repetida a nivel de sujeto y sensible a los subgrupos antes del despliegue ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **La calificación multimodal puede reproducir un resultado de selección incluso cuando la puntuación a nivel de ítem va por detrás.** Al calificar 10.364 páginas manuscritas de olimpiadas y de universidad, un LLM igualó los totales de los examinadores con r = 0,93-0,96 y situó a los mismos cinco estudiantes en el equipo de la olimpiada, y aun así la concordancia por partes llegó al 70%: evidencia de segundo lector, no un calificador de referencia ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **La generación de diagramas es una frontera de capacidad, no un problema resuelto.** En un banco de 15.246 preguntas de física que puntúa resultados multimodales, sintetizar o editar diagramas estructurados de física resultó más difícil que responder, y los modelos líderes se quedaron por debajo del 70% de dominio estricto, lo que es evidencia de que la *producción* visual va por detrás de la *comprensión* visual ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## IA multimodal para el aprendizaje de idiomas y el aprendizaje accesible

Los sistemas multimodales también amplían el acceso y la [[personalized-learning|personalización]]. Las herramientas de [[video-education|aprendizaje en audio y vídeo]] guiadas por IA adaptan la velocidad de reproducción, producen resúmenes de vídeo multimodales y apoyan la práctica de la pronunciación.([[ai-guided-learning-audiovideo-2026]]) Los grafos de conocimiento multimodales razonan sobre imágenes y texto para tareas educativas,([[multimodal-knowledge-graph-educational-reasoning]]) y las representaciones multimodales mejoran el [[inclusive-learning|aprendizaje inclusivo]] al traducir información entre modos (por ejemplo, de texto a audio o a visual). Entre las aplicaciones de dominio están la calificación y el diagnóstico de matemáticas escritas a mano,([[llm-cognitive-diagnosis-handwritten-math]]) la [[affective-tutoring|tutoría afectiva]] con señales multimodales,([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) el aprendizaje de texto a imagen en campos especializados([[nuclear-diffusion-text-to-image-learning-2026]]) y la sensorización multimodal del aula respetuosa con la privacidad.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) demuestra una forma interna al texto de multimodalidad: fusionar un transformador ELECTRA ajustado finamente con un análisis de características de lingüística computacional para clasificar literatura inglesa por Key Stage del Reino Unido, donde el modelo fusionado (F1 0,996) superó con creces a todas las líneas base unimodales, lo que es evidencia de que combinar formas de representación, incluso dentro del texto, puede superar a los enfoques de un solo modelo.

## Desafíos e implicaciones de diseño

1. **Cerrar la brecha multimodal.** Los sistemas de tutoría multimodal deberían incluir andamiajes de anclaje visual y de diálogo estructurado en lugar de dar por hecho que las capacidades de visión son robustas.([[syal-multimodal-dialogue-stem-2026]])
2. **Tratar el prompting multimodal como una habilidad enseñable.** Los currículos de alfabetización en IA deben abordar el prompting específico de cada modalidad, la coherencia entre modos y la evaluación crítica de los resultados multimodales.([[multimodal-prompting-ai-literacy]])
3. **Preservar la construcción humana de significado.** La IA multimodal debería aumentar, no sustituir, la construcción y evaluación de significado que hace el propio estudiante a través de los modos.([[multimodal-learning-genai]])
4. **Extender la evaluación a la validez multimodal.** La [[assessment-validity|validez de la evaluación]], el sesgo y la fiabilidad deben examinarse cuando la IA puntúa o genera artefactos multimodales.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Vigilar la equidad y la privacidad.** El apoyo poco fiable en problemas ricos en imágenes y las exigencias de datos de la sensorización multimodal conllevan implicaciones tanto de equidad como de privacidad.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Ajustar el proceso al contenido.** El LLM multimodal de un asistente de laboratorio de ciberseguridad manejaba mejor las diapositivas visuales densas, mientras que un proceso de OCR más LLM ofrecía un valor instruccional comparable en diapositivas centradas en texto con un coste computacional significativamente menor.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])

## Concepciones erróneas comunes

**"Un modelo multimodal resuelve los problemas multimodales."** La exactitud se degrada bruscamente cuando el significado lo lleva la figura y no el texto. Un tutor de [[physics-education|física]] responde a los problemas basados en texto en torno al **96%** de las veces, pero baja a cerca del **74%** en problemas que esconden significado en diagramas: el **Efecto de Interferencia Multimodal**. Veintidós puntos de capacidad desaparecen justo donde vive el contenido disciplinar.

**"Añadir una imagen al prompt resuelve el problema de los diagramas."** La modalidad de entrada no es el cuello de botella; la interferencia sí. Un modelo que recibe el diagrama y aun así razona desde la prosa que lo rodea ha recibido la información y no la ha usado, y por eso el fallo es invisible salvo que alguien compare los dos formatos de problema.

**"La capacidad multimodal es una sola escalera, así que el mejor modelo en general es el mejor para la tarea rica en imágenes."** La capacidad es específica de cada tarea, y un modelo que lidera en los bancos de referencia generales puede ir por detrás en diagramas de fuerzas. Para las disciplinas ricas en imágenes, la prueba relevante es la que tiene el significado incrustado en la figura.

**"Los límites de la tutoría solo de texto son una molestia y no un problema de currículo."** En disciplinas donde el diagrama *es* el problema (física, química, geometría, ingeniería, medicina), la frontera de competencia de un tutor solo de texto cae sobre el contenido evaluado y no en sus márgenes.

## Conceptos conectados
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Marco general: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agentes)
- [[virtual-and-augmented-reality]] — gesto, voz y entrada espacial como canales de aprendizaje
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]
## Artículos conectados
- [[elkington-human-centred-assessment-value-2026]] — Evaluación centrada en la persona, ensamblajes y restricciones generativas (Elkington 2026)
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Composición de anuncios de servicio público en vídeo sobre ética de la IA como pedagogía de alfabetización crítica en IA (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Modelado transaccional multimodal sensible a la equidad para la estimación de la atención del estudiante en tiempo real
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — Desempeño de los VLM en el trabajo matemático manuscrito de estudiantes (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Guía para docentes sobre el aprendizaje multimodal con IA generativa (modelo MMLD-AI)
- [[syal-multimodal-dialogue-stem-2026]] — El Efecto de Interferencia Multimodal y la recuperación mediante diálogo estructurado en STEM
- [[multimodal-ai-feedback-learning]] — La retroalimentación multimodal con IA iguala a los docentes en aprendizaje y los supera en percepciones
- [[multimodal-prompting-ai-literacy]] — El prompting multimodal de los estudiantes como trabajo epistémico en la alfabetización en IA
- [[multimodal-item-parameter-estimation-2026]] — Estimación de parámetros de ítems IRT con LLM multimodales
- [[ai-guided-learning-audiovideo-2026]] — Apoyo al aprendizaje en audio y vídeo guiado por IA
- [[multimodal-knowledge-graph-educational-reasoning]] — Grafos de conocimiento multimodales para el razonamiento educativo
- [[mllm-scientific-visualization-literacy]] — Alfabetización en LLM multimodales para la visualización científica
- [[multimodal-affective-its-presentation]] — Señales multimodales en la tutoría inteligente afectiva
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tutoría matemática afectiva multimodal
- [[llm-cognitive-diagnosis-handwritten-math]] — Diagnóstico cognitivo con LLM de matemáticas manuscritas
- [[nuclear-diffusion-text-to-image-learning-2026]] — Aprendizaje de texto a imagen en la educación en ingeniería nuclear
- [[privacy-aware-classroom-incident-recognition-2026]] — Sensorización multimodal del aula respetuosa con la privacidad
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Instrucción multimodal con OCR en la educación en ciberseguridad
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: evaluación comparativa de LLM multimodales para la auditoría de diapositivas
- [[ai-grading-handwritten-physics-2026]] — Calificación con IA de evaluaciones de física manuscritas (olimpiada)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Composición multimodal con IA y pensamiento crítico en la escritura en primaria (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Más allá de la generación y la exactitud: diagnóstico y mejora de la cadena de pensamiento visual para la resolución de problemas de geometría
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 12 tareas sobre 1.174 obras de arte muestran la capacidad de los VLM como un perfil específico por dimensión, más débil en interpretación afectiva y razonamiento espacial dependiente del punto de vista (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — Evaluación asistida por IA de informes de laboratorio de física experimental: potencial, limitaciones y apoyo a la práctica docente
