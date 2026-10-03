---
connected_resources: [teacherserver]
title: Generación automática de preguntas
created: "2026-09-28T18:15:33-04:00"
updated: "2026-10-02T21:36:16-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La generación automática de preguntas (AQG)** — el uso de IA, en especial la PLN y los [[llm|grandes modelos de lenguaje (LLM)]], para generar ítems de [[assessment|evaluación educativa]] (preguntas de opción múltiple, de respuesta corta, de rellenar huecos, de programación y de desempeño) de forma automática a partir de material fuente u objetivos de aprendizaje. La AQG permite evaluar a escala —producir cuestionarios [[formative-assessment|formativos]], ejercicios adaptativos e ítems de práctica—, pero la calidad varía enormemente según el tipo de ítem y exige validación para evitar preguntas alucinadas o mal calibradas. Es un componente central de la [[automated-assessment|evaluación automatizada]] y un habilitador clave del [[adaptive-learning|aprendizaje adaptativo]] y el [[personalized-learning|aprendizaje personalizado]].

## Preguntas para reflexionar

- La generación automática de preguntas produce ítems de evaluación a partir de material fuente y a escala, pero esta página advierte de que la calidad varía enormemente según el tipo de ítem. Antes de leer, ¿qué tipo de ítem diría usted que la IA genera de forma más fiable: opción múltiple, respuesta corta o código, y por qué?
- El reto central es el control de calidad: los LLM pueden generar preguntas factualmente incorrectas. Una cadena de procesamiento redujo la alucinación en 62% añadiendo un bucle de generar, validar y refinar. ¿Por qué cree que pedirle a la IA que valide sus propias preguntas las mejoraría de forma significativa, en lugar de limitarse a aprobar su propia salida?
- La [[research-methods-aied|investigación]] muestra que las preguntas generadas pueden inclinarse hacia el pensamiento de orden inferior (recuerdo) salvo que se diseñen explícitamente para resultados de orden superior. Si usted usara IA para crear ítems de práctica, ¿cómo sabría si estaban entrenando una comprensión genuina o solo la memorización?
- La calibración de la dificultad importa: las estimaciones de dificultad de la IA correlacionan fuertemente con el desempeño del estudiantado, pero la página advierte contra su mal uso en contextos de alta exigencia. ¿Cuándo una pregunta que la IA juzga «de dificultad adecuada» seguiría siendo la pregunta equivocada para un estudiante concreto?
- La generación con conciencia de [[accessibility|accesibilidad]] construye preguntas ajustadas para quienes aprenden y son personas sordas o con hipoacusia, refinadas en colaboración con la comunidad destinataria. ¿Qué sugiere este ejemplo sobre por qué la generación de preguntas no puede tratarse como un problema puramente técnico ni solo de contenido?

## Introducción

La generación automática de preguntas importa porque crear ítems de evaluación a mano es caro, y la IA puede producirlos con rapidez y a escala. Sin embargo, la investigación de la base de conocimiento muestra que los ítems generados deben validarse en cuanto a corrección, pertinencia y dificultad, y que los distintos tipos de ítem (opción múltiple, respuesta corta, código) varían en la fiabilidad con que pueden generarse. La AQG se sitúa, por tanto, en la intersección de la [[generative-ai|IA generativa]], la [[educational-nlp|PLN educativa]] y la [[educational-measurement|medición educativa]].

## Enfoques para la generación de preguntas

La investigación de la base de conocimiento ilustra varios enfoques:

- **Cadenas de generar y validar:** [[generate-then-validate-question-gen|Generate-Then-Validate]] presenta un bucle de generación → validación → refinamiento que reduce la alucinación del LLM en 62% frente a la generación directa, alcanza 89% de precisión en conjuntos de datos de [[stem-education|STEM]] y una mejora de 23% en pertinencia. El paso de validación filtra los ítems inválidos o de baja calidad, y los ítems fallidos activan una regeneración con consignas correctivas.
- **Generación basada en el seguimiento del conocimiento:** [[kt4eqg-personalized-question-generation|KT4EQG]] genera preguntas de ejercicio personalizadas guiadas por el [[knowledge-tracing|seguimiento del conocimiento]], ajustando los ítems al estado de conocimiento de cada estudiante en lugar de generar preguntas genéricas.
- **Distractores ligados a concepciones erróneas como etiquetas diagnósticas:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] asocia cada distractor a una única concepción errónea extraída y marca exactamente una opción correcta, de modo que el ítem se genera con sus objetivos diagnósticos incorporados y después puede calificarse de forma determinista sin ninguna llamada al [[llm]]: unos 7,6 segundos y aproximadamente \$0,005 por ronda en el despliegue real de los autores, frente a unos 32 segundos y \$0,015 por una ronda de respuesta corta calificada con un LLM. El vínculo es tan bueno como las etiquetas de concepciones erróneas que hay detrás, ya que las [[misconceptions|concepciones erróneas]] extraídas coincidían con las concepciones erróneas objetivo con F1 ≈ 0,56, y sus opciones de ítem atendían a una habilidad realmente débil 0,72 de las veces.
- **Generación con conciencia de la profundidad cognitiva:** [[llm-educational-question-cognitive-depth|Evaluating the cognitive depth of LLM-generated questions]] examina si los ítems generados apelan al [[critical-thinking|pensamiento de orden superior]] (creación, evaluación) o solo a la memorización, en conexión con la taxonomía de Bloom y la [[educational-measurement|medición educativa]].
- **Problemas de caso con errores incorporados para la evaluación repetida:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] generaron nuevos problemas de razonamiento diagnóstico jerárquico (HDR) —casos breves que llevan errores deliberadamente incorporados y que el estudiantado debe encontrar y explicar— y encontraron que los ítems redactados por GPT-4o igualaban a los redactados por personas en consistencia interna (α de Cronbach = 0,78 en ambos) y en dificultad, sin que las pruebas exactas de Fisher encontraran diferencias significativas en la distribución de puntuaciones entre 100 participantes. El formato combina una exigencia de [[critical-thinking|pensamiento de orden superior]] con una respuesta acotada, de modo que las respuestas convergen y la calificación se vuelve reproducible. La motivación generativa es la reutilización de ítems: reutilizar un caso invita a reutilizar el recuerdo y las respuestas, mientras que casos generados estructuralmente equivalentes pero contextualmente distintos suprimen el sesgo de ítem en la remedición.
- **Cadenas [[pedagogy|pedagógicas]]:** [[slidesqaqa-pedagogical-question-generation|Slide-deck Q&A generation]] usa una cadena de varias etapas para generar preguntas pedagógicamente sólidas a partir de materiales de curso.
- **Generación con conciencia de la accesibilidad:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] diseñan un sistema de generación de preguntas impulsado por LLM para [[inclusive-learning|quienes aprenden y son personas sordas o con hipoacusia]], introduciendo estrategias de preguntas visuales y emocionales que apuntan a los momentos de dificultad visual o emocional de un vídeo, y refinando iterativamente las preguntas con la comunidad destinataria para garantizar la accesibilidad lingüística.
- **Sistemas basados en RAG y con intervención humana:** [[code-gen|CODE-GEN]] combina la [[rag|generación aumentada por recuperación]] con la revisión [[human-in-the-loop-ai|con intervención humana]] para generar [[automated-assessment|evaluaciones de opción múltiple]].
- **[[benchmark|Puntos de referencia]] y evaluación:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] proporciona un punto de referencia de acertijos científicos y matemáticos para evaluar sistemas de generación de preguntas y de razonamiento.

## Validación y calidad

El reto central de la AQG es el **control de calidad**:
- **Evalúe el proceso de resolución, no el enunciado:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] sostiene que la revisión de la calidad de un ítem debe seguir lo que hace una persona experta —simular la solución— y construye un árbol de razonamiento generado por LLM para cada ítem, verificado en cuanto a corrección matemática en 90,38–97,80%, y después codifica su estructura de dependencias con una [[machine-learning|red neuronal]] de grafos junto a una vista solo del enunciado. Informa de ganancias medias sobre el segundo mejor método de 7,5% en evaluación de conceptos, 6,3% en estimación de dificultad y 19,5% en evaluación de competencias, y su análisis de errores nombra un modo de fallo que conviene vigilar: un árbol de razonamiento lógicamente correcto pero estructuralmente superficial deja un ítem difícil con apariencia de fácil.

- **Riesgo de alucinación:** los LLM pueden generar preguntas factualmente incorrectas. [[generate-then-validate-question-gen|Generate-Then-Validate]] muestra que una fase de validación dedicada reduce esto de forma marcada, y el [[hallucination-risk|riesgo de alucinación]] es una preocupación reconocida en todo el ámbito.
- **Calibración de la dificultad:** las preguntas generadas deben calibrarse a una dificultad adecuada. [[llm-difficulty-calibration-programming-exams-2026|La investigación sobre calibración de la dificultad]] muestra que las estimaciones de dificultad de la IA correlacionan fuertemente con el desempeño del estudiantado (p. ej., rho ≈ −0,87), lo que permite seleccionar mejores ítems, a la vez que advierte contra el [[ai-misuse-learning-harm|mal uso]] en contextos de alta exigencia. [[razavi-powers-item-difficulty-llm-2026|Razavi y Powers (2026)]] extienden esto a ítems de matemáticas y lectura de K-5 (N = 5170) calibrados con el modelo de teoría de respuesta al ítem de Rasch: las valoraciones de dificultad de GPT-4o sin ejemplos previos correlacionaron de moderada a fuertemente con las dificultades reales (r = 0,83 en matemáticas, r = 0,81 en lectura) pero variaron según el curso, mientras que un enfoque basado en características —características cognitivas y lingüísticas extraídas por LLM e introducidas en modelos de árboles— alcanzó correlaciones de hasta r = 0,87. La extracción estructurada de características del estudio (p. ej., complejidad sintáctica, [[cognitive-offloading|carga cognitiva]], dificultad de los distractores) y su flujo de trabajo práctico de siete pasos ofrecen una plantilla para calibrar ítems generados, mientras que su hallazgo de restricción del rango en los primeros cursos y sus advertencias de generalizabilidad aconsejan cautela ante usos de alta exigencia.

- **Las etiquetas de dificultad generadas pueden ser un fallo de validez de constructo, no un error de calibración.** En 378 ítems generados, las etiquetas Fácil/Medio/Difícil del modelo seguían el nivel de Bloom cogenerado con ellas (ρ=0,90) y la forma superficial —la longitud media del enunciado subió de 15,9 a 22,1 y a 30,2 palabras—, pero correlacionaban con la dificultad empírica del ítem solo en ρ=0,06 sobre 7.888 respuestas de 54 estudiantes, lo que aboga por calibrar los metadatos generados contra los datos de respuesta en lugar de fiarse de las etiquetas cogeneradas ([[student-llm-use-ai-question-difficulty-data-science-2026|An y Wang (2026)]]).
- **Validación psicométrica de campo a gran escala:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] valida una cadena de AQG de refinamiento iterativo (generar→juzgar→revisar, al estilo Self-Refine) en 91 clases universitarias reales (~1.686 estudiantes). El análisis bayesiano jerárquico [[item-response-theory|IRT]] de 2PL muestra que las preguntas generadas por IA rinden a la par que los ítems de exámenes estandarizados escritos por expertos: algo más fáciles (β̄ = −0,45 frente a 0,35) pero ligeramente más discriminativas (ᾱ = 1,3 frente a 1,2), con una información máxima del test más alta (fiabilidad 0,79 frente a 0,72), lo que demuestra que la AQG puede producir evaluaciones adaptadas al curso y psicométricamente sólidas a escala.

- La paridad psicométrica media puede ocultar carencias a nivel de ítem: una revisión de alcance de 153 informes de educación médica encontró que la generación de ítems con IA a veces igualaba la dificultad y la discriminación humanas, pero en una comparación de fisiología solo 9 de 40 ítems de ChatGPT cumplían todos los criterios ideales frente a 19 de 40 ítems del profesorado ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Reconocibilidad en un examen real, y lo que la revisión elimina de verdad:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] introdujeron 30 ítems de opción múltiple generados por IA y 30 del Examen Nacional de Licencia en un examen calificado en tableta realizado por 119 [[medical-education|estudiantes de medicina]] de quinto curso, con los ítems de IA redactados a partir de los propios materiales del curso por ChatGPT-4o y Gemini 1.5 Pro mediante un panel de expertos que aceptó el 82% de ellos y eliminó el 18,2% por inutilizables. La atribución de fuente del estudiantado no difirió entre los dos tipos de ítem, y la dificultad del ítem, la distribución de distractores y la alineación curricular percibida fueron estadísticamente indistinguibles: un resultado de *reconocimiento* y no de calidad, y la razón por la que los autores describen el beneficio del flujo de trabajo como un traslado del esfuerzo docente de la redacción a la revisión, y no como su eliminación. Sobrevivió una diferencia exploratoria: los ítems de Gemini eran más difíciles que los del examen de licencia (p = 0,028), mientras que los de ChatGPT no lo eran (p = 0,984).
- **Dependencia de la tarea:** la fiabilidad de la generación varía según el tipo de ítem. [[cong-confidence-asag-2026|La calificación de respuesta corta]] y [[self-referential-l2-writing-llm-assessment|la evaluación analítica de la escritura]] muestran que los ítems de respuesta abierta y de escritura son más difíciles de generar y calificar de forma fiable que los ítems estructurados.
- **Calidad cognitiva:** [[llm-educational-question-cognitive-depth|la evaluación de la profundidad cognitiva]] muestra que los ítems generados pueden inclinarse hacia el pensamiento de orden inferior salvo que se diseñen explícitamente para resultados de orden superior.

- **El etiquetado automático del nivel cognitivo no se transfiere a los ítems generados.** Un clasificador de la taxonomía de Bloom entrenado con un banco de ítems curado se derrumbó ante las preguntas generadas por IA —la F1 macro pasó de 0,88 dentro de la distribución a 0,48 y 0,20 fuera de ella— porque los ítems generados promedian muchas más palabras (18,2 frente a 9,3) y comparten solo una mediana del 10,5% de sus verbos desencadenantes de Bloom con el corpus curado, frente al 35,1% de un conjunto más cercano; reentrenar con datos etiquetados fuera de la distribución fue la mayor ganancia individual, con un umbral de aproximadamente N > 1.000 muestras etiquetadas ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Papel en el aprendizaje adaptativo y personalizado

La AQG es un habilitador clave del aprendizaje [[adaptive-learning|adaptativo]] y [[personalized-learning|personalizado]]: produce los grandes bancos de ítems de los que se nutren los tutores adaptativos y, combinada con el [[knowledge-tracing|seguimiento del conocimiento]] o el [[student-modeling|modelado del estudiantado]], puede generar ítems ajustados al estado de conocimiento de cada estudiante ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|La personalización basada en intereses]] muestra que la AQG también puede adaptar las preguntas a los intereses del estudiantado, y no solo a la dificultad.

## Implicaciones para la IA en la educación

- **Genere y después valide:** empareje siempre la generación con una etapa de validación y refinamiento para controlar la alucinación y asegurar la pertinencia.
- **Empareje el tipo de ítem con la fiabilidad:** use la AQG para los tipos de ítem estructurados (opción múltiple, rellenar huecos, código), donde es más fiable, y aplique una validación cuidadosa a los ítems de respuesta abierta y de escritura.
- **Diseñe para la profundidad cognitiva:** las consignas y las cadenas deben apuntar al pensamiento de orden superior, y no solo al recuerdo, para apoyar un aprendizaje genuino.
- **Calibre la dificultad:** use las estimaciones de dificultad de la IA para seleccionar ítems con un reto adecuado, con una validación sólida antes de usos de alta exigencia.
- **Personalice mediante modelos del estudiantado:** combine la AQG con el seguimiento del conocimiento y los modelos de interés para generar ítems adaptativos e individualizados.

## Conceptos conectados

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Artículos conectados

- [[genai-medical-education-transformation-review-2026]] — Revisión de alcance de 153 informes de educación médica sobre la generación de ítems con IA frente a la calidad de los ítems del profesorado

- [[assessing-quality-ai-generated-exams-field-2025]] — Validación de campo a gran escala de la calidad de exámenes generados por IA mediante IRT
- [[generate-then-validate-question-gen]] — Generación de preguntas Generate-Then-Validate
- [[kt4eqg-personalized-question-generation]] — Generación personalizada de preguntas mediante seguimiento del conocimiento
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Generación de preguntas con LLM para quienes aprenden y son personas sordas o con hipoacusia
- [[llm-educational-question-cognitive-depth]] — Profundidad cognitiva de las preguntas generadas por LLM
- [[slidesqaqa-pedagogical-question-generation]] — Generación pedagógica de preguntas y respuestas a partir de diapositivas
- [[code-gen]] — CODE-GEN: generación de preguntas basada en RAG y con intervención humana
- [[nsmq-riddles-science-math-benchmark]] — Punto de referencia NSMQ Riddles
- [[taklif-ai-interest-based-personalized-assignments]] — Tareas personalizadas basadas en intereses
- [[llm-difficulty-calibration-programming-exams-2026]] — Calibración de la dificultad basada en LLM
- [[self-referential-l2-writing-llm-assessment]] — Evaluación analítica autorreferencial de la escritura
- [[cross-dataset-bloom-question-classification]] — Clasificación de preguntas de Bloom entre conjuntos de datos
- [[llm-chatbots-cs-multiple-choice]] — Chatbots con LLM e ítems de opción múltiple de informática
- [[socratic-tests-conversational-assessment]] — Pruebas socráticas: evaluación conversacional
- [[llm-turing-test-italian-legal-exams-2026]] — Test de Turing con LLM en exámenes jurídicos italianos
- [[razavi-powers-item-difficulty-llm-2026]] — Estimación de la dificultad de los ítems con LLM y aprendizaje automático basado en árboles
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: evaluación de la calidad de ítems de matemáticas basada en el proceso
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende de su estudiante en un bucle de coaprendizaje persona-IA
- [[automated-constructive-assessment-hdr-llm-2026]] — Automatizar la evaluación constructiva con grandes modelos de lenguaje: hacia una evaluación escalable y repetida de la competencia práctica
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — El uso de LLM por parte del estudiantado y los límites de la dificultad de las preguntas generadas por IA en cursos de ciencia de datos
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de nuevas preguntas educativas asistidas por IA
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — El estudiantado no pudo distinguir los ítems de opción múltiple generados por IA de los de un examen de licencia en un examen calificado, y el 18,2% de los ítems generados se eliminaron en la revisión (Vogt et al. 2026)
