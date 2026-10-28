---
title: Diagnóstico cognitivo
created: "2026-09-28T18:17:50-04:00"
updated: "2026-10-28T13:36:06-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-10-27T10:05:00-04:00"
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

> **Diagnóstico cognitivo**: la inferencia del estado de conocimiento latente de quien aprende, es decir, los conceptos, las habilidades y las ideas erróneas concretos que tiene o le faltan, a partir de sus respuestas o de su comportamiento. Es la contraparte, del lado de la evaluación, de [[knowledge-tracing]], y se centra en caracterizar *qué* sabe un estudiante en lugar de limitarse a predecir su próximo desempeño.

## Preguntas para considerar

- El diagnóstico cognitivo infiere el estado de conocimiento latente de quien aprende (los conceptos, las habilidades y las ideas erróneas concretos que tiene o le faltan) a partir de sus respuestas, en lugar de limitarse a predecir su próxima calificación. Antes de leer, ¿qué diferencia esperaría entre 'predecir la nota de un estudiante' y 'diagnosticar qué es lo que en realidad no entiende'?
- Una idea clave es la 'trampa de la respuesta correcta', en la que una respuesta acertada oculta un razonamiento defectuoso. ¿Alguna vez ha estado convencido de que un estudiante entendía algo porque acertó, para descubrir después que debajo había una idea errónea? ¿Cómo podría un diagnóstico sacar eso a la luz donde una calificación no puede?
- La página distingue el diagnóstico cognitivo (una instantánea estática y de grano fino de lo que quien aprende sostiene en este momento) del seguimiento del conocimiento (la dinámica temporal del dominio a lo largo del tiempo). ¿Por qué necesitaría un tutor inteligente ambos, saber qué está mal y saber qué enseñar después?
- Un principio de diseño aquí es separar el diagnóstico de la retroalimentación: los tutores basados en LLM confirman los pasos correctos, pero rechazan en exceso razonamientos válidos y validan en exceso los errores, y un diagnóstico preciso no produce de forma fiable una retroalimentación accionable. ¿Por qué saber qué está mal puede aun así no dar lugar a un paso siguiente útil?
- El diagnóstico de la era de los LLM se extiende desde las preguntas de opción múltiple hasta el trabajo abierto, manuscrito y conversacional. ¿Qué podría salir mal si una IA diagnostica una idea errónea a partir de un trabajo que no comprende del todo, y cómo verificaría usted que el propio diagnóstico es fiable?

## Introducción

Mientras que el seguimiento del conocimiento suele estimar un dominio escalar a lo largo del tiempo, el diagnóstico cognitivo produce un perfil más granular: qué componentes de conocimiento están dominados, cuáles son frágiles y qué ideas erróneas están presentes. Este perfil es el sustrato de [[personalized-learning|aprendizaje personalizado]], [[intelligent-tutoring|tutoría inteligente]] y [[adaptive-learning|aprendizaje adaptativo]].

### Cómo funciona el diagnóstico cognitivo

- **Modelos diagnósticos:** los modelos psicométricos (a menudo dentro de [[item-response-theory|teoría de respuesta al ítem]] y de [[educational-measurement|medición educativa]]) infieren estados latentes de habilidad a partir de patrones de respuestas correctas e incorrectas, en ocasiones mediante modelos de diagnóstico cognitivo que asignan los ítems a múltiples componentes de conocimiento.
- **Búsqueda automatizada de modelos:** dado que ningún modelo diagnóstico se ajusta a todos los aprendices, los enfoques impulsados por [[machine-learning|AutoML]] (por ejemplo, la búsqueda personalizada de arquitecturas cognitivas neuronales) generan modelos diagnósticos para perfiles heterogéneos de aprendices, integrando datos educativos [[multimodal|multimodales]] para permitir un análisis dinámico de los procesos de aprendizaje y un diagnóstico cognitivo por aprendiz, en lugar de depender de resultados estáticos de [[summative-assessment|exámenes]] e indicadores estadísticos simples ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Datos de respuesta:** el diagnóstico se apoya en las respuestas a las evaluaciones, en las pistas, en la [[help-seeking|búsqueda de ayuda]] y en el tiempo en la tarea, señales más ricas que las puntuaciones brutas.
- **Diagnóstico basado en LLM:** los enfoques más recientes usan [[llm|grandes modelos de lenguaje]] para diagnosticar a partir de trabajo abierto o manuscrito y para identificar las [[misconceptions|ideas erróneas]] concretas que hay detrás de un error (por ejemplo, la "trampa de la respuesta correcta", en la que una respuesta acertada oculta un razonamiento defectuoso). Dos resultados de 2026 acotan hasta dónde llega ese diagnóstico. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] supervisó el razonamiento diagnóstico como una de las cuatro capacidades de una familia abierta de 4B/9B/27B, y el diagnóstico del estado de conocimiento siguió siendo su capacidad medida más débil: 54,04% en 27B y 53,55% en 9B, lo bastante cerca como para que el triple de parámetros no cerrara la brecha, mientras que el calificador LLM de [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] se correlacionó con el dominio real en r = 0,68 sobre las respuestas agrupadas, pero solo en r ≈ 0,15 dentro del nivel de habilidad más débil (r ≈ 0,48 en el mixto, 0,41 en el fuerte), de modo que la fiabilidad diagnóstica depende tanto del nivel de habilidad de quien aprende como del modelo.
- **Diagnosticar errores comunes a escala de cohorte, no una respuesta a la vez.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] invierten la dirección habitual: en lugar de diagnosticar el error de un solo aprendiz, un [[llm]] propone transformaciones candidatas de corrección de errores que llevan formalizaciones incorrectas a formalizaciones correctas en todo un conjunto de datos educativos, y cada candidata se valida algorítmicamente antes de conservarla. Sobre 6.106 pares de formalizaciones correctas e incorrectas de lógica proposicional, el flujo de trabajo descubrió 248 agrupaciones de transformaciones que explicaban 5.156 pares (84,44%), frente a 4.370 (71,57%) de los errores escogidos a mano por el estado del arte anterior, y recuperó los errores que un experto del dominio había identificado manualmente en la literatura. La agrupación ordena las candidatas en grupos de transformación única, de transformación equivalente y jerárquicos, y el grafo de correlación resultante puede visualizarse para el profesorado; el mismo proceso se trasladó a la lógica modal y a las expresiones regulares, donde una sola transformación de disyunción por conjunción cubrió el 98,80% de su grupo de 334 pares. Es una vía hacia el inventario de ideas erróneas que un modelo diagnóstico necesita antes de poder ajustarse.
- **La recuperación de la solución correcta, no la simulación del error, es el cuello de botella.** Los modelos construyeron una solución en el 95,2% de las trazas de distractores y simularon una idea errónea concreta de Eedi con una exactitud de 0,92, y aun así proporcionar la respuesta correcta aumentó la coincidencia con los distractores humanos (0,52 → 0,56): el fallo está aguas arriba, en la recuperación de la solución ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Diagnóstico a nivel de resultado en currículos OBE:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] diagnostican qué resultados de curso ha alcanzado un aprendiz en la educación basada en resultados (OBE) tratando los resultados como los conceptos de conocimiento, aportando relaciones entre conceptos mediante asignaciones de afinidad OBE validadas por expertos entre resultados de curso y de programa (una alternativa explícita a las relaciones de atención o de grafo aprendidas de forma implícita) y usando un módulo aumentado con memoria para estimar cómo el logro de un resultado repercute en los demás; superan a las líneas base DKT, DKVMN, EKT y SimpleKT (89,81% de AUC) con datos reales de un programa de ingeniería.
- **Diagnosticar con instrumentos concebidos para otra cosa.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] muestran que un modelo de diagnóstico cognitivo puede extraer información a nivel de objetivo de ítems que nunca se escribieron para diagnosticar. Al asignar ítems del FCI, el FMCE y el EMCS a 14 objetivos de aprendizaje de grano fino en mecánica introductoria y ajustar DINA sobre 24.394 respuestas de postest de 807 cursos, encontraron un buen ajuste para dos de los tres instrumentos (FCI RMSEA² = 0,033; EMCS = 0,022) y una exactitud de clasificación igual o superior al punto de referencia formativo de bajo riesgo en 19 de las 22 combinaciones de objetivo y evaluación. La estructura de atributos, y no la calidad de los ítems, era la restricción determinante: la codificación experta sobrevivió casi intacta al escrutinio del modelo (DINA propuso revisar solo el 14% de 754 codificaciones ítem-objetivo y los codificadores adoptaron 20 de ellas, el 2,7%), pero el modelo no pudo separar tres objetivos de energía *conceptualmente anidados* (Energía potencial 0,675; Conservar la energía 0,705; Energía cinética 0,745) porque dos cualesquiera compartían alrededor del 70% de sus ítems (solapamiento de Jaccard 0,67-0,73), lo que viola el supuesto de independencia conjuntiva de DINA, mientras que los objetivos de momento en el mismo instrumento alcanzaron 0,820-0,917. Los atributos más finos también se ajustaron mejor y no peor: la estructura de 14 objetivos mejoró el ajuste del modelo respecto a la estructura anterior de cuatro habilidades amplias del mismo equipo en los tres instrumentos. El solapamiento de ítems, y no el error de codificación, es lo que limita la finura con que puede separarse el dominio.
- **DINA bayesiano para rutas de aprendizaje personalizadas:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng y Huang (2026)]] integran un modelo DINA bayesiano (entrenado con el conjunto de datos EdNet, N=5.000) con la teoría de espacios de conocimiento y un algoritmo de ruta de remediación más corta para generar rutas de aprendizaje personalizadas, y comprueban empíricamente el papel mediador de la [[cognitive-offloading|carga cognitiva]] mediante transiciones de estado de modelos ocultos de Markov (validadas con 120 estudiantes), abordando tanto el problema de convergencia por dispersión de los modelos DINA tradicionales como el mecanismo psicológico no comprobado que hay detrás de la eficacia de las rutas personalizadas.
- **Diagnóstico anclado en el lenguaje en lugar de incrustaciones de identificadores.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] sustituyen los identificadores discretos de estudiante, ejercicio y concepto por esquemas de conceptos construidos con LLM y evidencia anclada en procesos, y calibran el estado posterior de cada estudiante a partir de sus registros de respuesta. En tres conjuntos de datos de [[math-education|educación matemática]] de [[online-teaching-and-learning|plataformas de enseñanza en línea]], el marco alcanza 83,51% de ACC y 85,37% de AUC en XES3G5M, y 87,16% de ACC en MOOC, con la mejora concentrada exactamente donde se degradan los modelos clásicos de diagnóstico cognitivo: conceptos nuevos (+4,60 de ACC frente a KCD) y entradas ausentes en la matriz Q (+4,52). Al ablacionar la evidencia estructurada, la exactitud en MOOC cae del 87,16% al 78,95%, así que la mejora proviene de la estructura derivada del lenguaje y no de la escala del modelo. ([[process-grounded-language-cognitive-diagnosis-2026]])
- **Las tareas culturalmente situadas pueden preceder al análisis con IA.** [[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]] hicieron que 178 estudiantes de secundaria en Indonesia completaran tareas abiertas con contexto cultural antes del análisis de respuestas con IA; los diagnósticos de la IA coincidieron con la evaluación de expertos (ICC = 0,81), mientras que la contextualización cultural se asoció con el desempeño matemático simbólico (β = 0,42) y con la implicación (β = 0,37).
- **La configuración de estrategias puede diagnosticarse, no solo el estado de conocimiento.** Cinco dimensiones estimadas a partir de 36.234 acciones de un juego de gramática predijeron el éxito siguiente con un AUC de 0,826 excluyendo los recuentos de errores actuales, y variaron dentro de los estudiantes (ICC = 0,14) y no entre ellos ([[configuration-aware-diagnostic-adaptive-scaffolding-2026|Geoffre et al. (2026)]]).

## Por qué importa

Un diagnóstico preciso permite que la instrucción se dirija a las lagunas reales en lugar de a una puntuación global de "habilidad", lo que hace posible una [[automated-assessment|evaluación automatizada]] que explique *por qué* se equivocó un estudiante y sistemas de [[feedback|retroalimentación]] que remedien [[student-modeling|estados de conocimiento]] concretos. Un diagnóstico deficiente produce lo contrario: instrucción dirigida a los conceptos equivocados. Por eso [[psychometrically-aware-ai]] hace hincapié en la validez diagnóstica junto con la exactitud predictiva.

### Relación con el seguimiento del conocimiento y la tutoría inteligente

El diagnóstico cognitivo ocupa el centro de la arquitectura de [[intelligent-tutoring|tutoría inteligente]] y es la contraparte, del lado de la evaluación, del [[knowledge-tracing|seguimiento del conocimiento]]:

- **Diagnóstico frente a seguimiento: visiones temporales complementarias.** El [[knowledge-tracing|seguimiento del conocimiento]] rastrea la *dinámica temporal* del dominio, estimando cómo evoluciona un estado de conocimiento escalar a lo largo de los ejercicios y prediciendo la respuesta siguiente. El diagnóstico cognitivo produce la *instantánea estática y de grano fino* de qué componentes de conocimiento, habilidades o ideas erróneas sostiene actualmente un aprendiz. Un tutor necesita ambos: el seguimiento para secuenciar qué enseñar después y el diagnóstico para saber *qué* está mal en realidad. Los modelos diagnósticos basados en la [[item-response-theory|TRI]] y en la [[educational-measurement|medición]], y los modelos de diagnóstico cognitivo que asignan ítems a múltiples componentes, materializan el lado diagnóstico.
- **Diagnóstico en la era de los LLM.** Los [[llm|LLM]] extienden el diagnóstico desde las respuestas de opción múltiple hasta el trabajo abierto, manuscrito y conversacional, identificando las [[misconceptions|ideas erróneas]] concretas que hay detrás de un error (por ejemplo, la "trampa de la respuesta correcta", en la que una respuesta acertada oculta un razonamiento defectuoso). [[xie-hillm-cd-2026|HiLLM-CD]] usa LLM para la construcción automatizada de árboles de conceptos y la inferencia jerárquica de competencia, tendiendo un puente entre el diagnóstico y el seguimiento. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] llevan esto más lejos al federar el diagnóstico entre varias API comerciales de LLM con privacidad diferencial local ε, mostrando que un diagnóstico preciso y respetuoso con la privacidad es viable sin que ningún modelo vea datos brutos de estudiantes.
- **Separar el diagnóstico de la retroalimentación es un principio de diseño.** Los tutores basados en LLM confirman de forma fiable los pasos correctos, pero rechazan en exceso razonamientos válidos y validan en exceso los errores, y un diagnóstico preciso no produce de forma fiable una [[feedback|retroalimentación]] accionable. El diseño de los ITS debería, por tanto, separar un componente diagnóstico del componente de retroalimentación y [[scaffolding|andamiaje]] ([[yasir-llm-tutoring-agents-2026]]).

## Conexiones

El diagnóstico cognitivo se conecta con [[knowledge-tracing]], [[student-modeling]], [[educational-measurement]] y [[assessment]]. Sus hallazgos alimentan la [[intelligent-tutoring|tutoría inteligente]] y el [[adaptive-learning|aprendizaje adaptativo]], y el trabajo de la era de los LLM lo vincula con la identificación de ideas erróneas en la [[intelligent-tutoring|tutoría con IA]].

## Concepciones erróneas comunes

- **"El diagnóstico es una capacidad resuelta para los modelos."** [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] supervisó el razonamiento diagnóstico como una de las cuatro capacidades de una familia abierta de 4B/9B/27B, y **el diagnóstico del estado de conocimiento siguió siendo el más débil** de los cuatro. El diagnóstico es la capacidad que resistió el entrenamiento que produjo las demás.
- **"Los modelos pueden simular los errores de los estudiantes, así que pueden diagnosticarlos."** El cuello de botella es el inverso. Los modelos construyeron una solución en el **95,2% de las trazas de distractores** y simularon una idea errónea concreta de Eedi con una **exactitud de 0,92**, y aun así **proporcionar la solución correcta**, y no simular el error, fue lo que los limitó. Generar una respuesta incorrecta verosímil es más fácil que reconocer una.
- **"El diagnóstico requiere un catálogo de ideas erróneas construido a mano."** Sobre **6.106 pares** de formalizaciones correctas e incorrectas de lógica proposicional, un flujo de trabajo descubrió **248 agrupaciones de transformaciones que explicaban 5.156 pares (84,44%)**, frente a **4.370 (71,57%)** de los errores escogidos a mano del conjunto de referencia. El descubrimiento igualó o superó la curaduría experta y se trasladó a la lógica modal, así que el catálogo es un punto de partida y no un techo.
- **"Un diagnóstico solo es útil si nombra una idea errónea."** Diagnosticar qué resultados de curso ha alcanzado un aprendiz trata los resultados como los conceptos de conocimiento, aportando las relaciones entre conceptos mediante asignaciones de afinidad validadas por expertos. Para los programas basados en resultados, esa es la unidad más accionable, aunque sea más gruesa.

## Qué significa esto para la práctica

**Para el profesorado**

- Trate el diagnóstico de un sistema como una hipótesis que hay que comprobar, no como un veredicto. El diagnóstico del estado de conocimiento fue la capacidad más débil de una familia entrenada para ello.
- Pregunte si el diagnóstico nombra un constructo sobre el que usted pueda actuar. Un diagnóstico a nivel de resultado que se corresponde con su programa suele ser más útil que una etiqueta de grano fino sobre una idea errónea.
- Cuando su materia tenga reglas, espere que el descubrimiento basado en transformaciones encuentre patrones de error que no previó; las 248 agrupaciones descubiertas son prueba de que los catálogos curados están incompletos.

**Para quienes desarrollan**

- Instrumente ambas direcciones: reconocer una respuesta incorrecta y producir la correcta. La cifra del 95,2% en recuperación de soluciones sugiere que la generación es la mitad fácil y que el modo de fallo está en el reconocimiento.
- Prefiera el descubrimiento a un catálogo estático cuando la estructura del dominio lo permita, e informe de la cobertura frente a un conjunto de referencia para que la comparación sea legible.
- No publique una puntuación diagnóstica sin indicar qué constructo mide y cómo se validó con independencia de la señal que la produjo.

## Conceptos conectados

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## Artículos conectados

- [[llm-cognitive-diagnosis-handwritten-math]] — Evaluación comparativa de LLM para diagnosticar habilidades cognitivas a partir de matemáticas manuscritas
- [[correct-answer-trap-misconceptions]] — La trampa de la respuesta correcta
- [[llm-misconception-difficulty-easy-trap]] — La trampa fácil: por qué los LLM subestiman la dificultad que generan las ideas erróneas
- [[llm-student-misconception-identification]] — Identificación de ideas erróneas del estudiantado mediante LLM
- [[student-math-competence-clustering]] — Agrupamiento para modelar la competencia matemática del estudiantado
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Compilación de agentes cognitivos para modelar explícitamente al resolutor de problemas
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosticar a partir de aprendices simulados
- [[huang-interpretable-knowledge-tracing-2026]] — Seguimiento del conocimiento interpretable
- [[xie-hillm-cd-2026]] — HiLLM-CD: árboles de conceptos con LLM e inferencia jerárquica de competencia
- [[yasir-llm-tutoring-agents-2026]] — Separar el diagnóstico de la retroalimentación en tutores basados en LLM
- [[zhang-ct-ai-training-test-2026]] — Prueba de pensamiento computacional en formación en IA (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnóstico cognitivo bayesiano para rutas de aprendizaje personalizadas
- [[personalized-neural-cognitive-architecture-search-2026]] — Búsqueda personalizada de arquitecturas cognitivas neuronales con AutoML para perfiles de aprendices
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Seguimiento del conocimiento basado en resultados con asignación de afinidad
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnóstico federado con múltiples LLM que preserva la privacidad
- [[llm-common-modeling-mistakes-formalisms-2026]] — Minería de errores de modelado comunes a escala con transformaciones de corrección generadas por LLM y validadas algorítmicamente (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Diagnóstico cognitivo de mecánica: diagnóstico basado en DINA de 14 objetivos de aprendizaje a partir de inventarios de conceptos de física existentes (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Anotación de conceptos de conocimiento con LLM y estados de conocimiento calibrados a nivel de concepto
- [[llm-distractor-generation-student-reasoning-2026]] — Distractores basados en ideas erróneas como tarea de diseño de ítems diagnósticos
- [[misconception-acquisition-dynamics-llms-2026]] — dónde entra el error en la solución es el cuello de botella diagnóstico
- [[pivot-generative-video-tutors-stem-2026]] — De la generación de contenido al apoyo al aprendizaje: tutores de vídeo generativos guiados por la pedagogía para el aprendizaje STEM
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende de su aprendiz en un bucle de coaprendizaje humano-IA
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: modelos fundacionales abiertos para el aprendizaje y la enseñanza
- [[culturally-embedded-ai-diagnostic-assessment-2026]] — Repensar la evaluación diagnóstica mediante IA culturalmente situada para un aprendizaje significativo
