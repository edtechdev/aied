---
title: Diagnóstico cognitivo
created: "2026-09-28T18:17:50-04:00"
updated: "2026-10-02T21:28:55-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El diagnóstico cognitivo** — la inferencia del estado de conocimiento latente de quien aprende —los conceptos, las habilidades y las ideas erróneas concretas que domina o le faltan— a partir de sus respuestas o su comportamiento. Es la contraparte, del lado de la evaluación, de [[knowledge-tracing]]: se centra en caracterizar *qué* sabe un estudiante y no solo en predecir su próximo desempeño.

## Preguntas para reflexionar

- El diagnóstico cognitivo infiere el estado de conocimiento latente de quien aprende —los conceptos, las habilidades y las ideas erróneas concretas que domina o le faltan— a partir de sus respuestas, en lugar de limitarse a predecir su próxima calificación. Antes de leer, ¿qué diferencia esperaría entre «predecir la nota de un estudiante» y «diagnosticar qué es lo que realmente no entiende»?
- Una idea clave es la «trampa de la respuesta correcta», en la que una respuesta acertada oculta un razonamiento defectuoso. ¿Alguna vez ha estado convencido de que un estudiante entendía algo porque acertó, para luego descubrir una idea errónea debajo? ¿Cómo podría un diagnóstico sacar eso a la luz allí donde una calificación no puede?
- La página distingue el diagnóstico cognitivo (una instantánea estática y detallada de lo que quien aprende sostiene en un momento dado) del seguimiento del conocimiento (la dinámica temporal del dominio a lo largo del tiempo). ¿Por qué necesitaría un tutor inteligente ambos: saber qué está mal y saber qué enseñar después?
- Un principio de diseño aquí es separar el diagnóstico de la retroalimentación: los tutores basados en LLM confirman los pasos correctos, pero rechazan en exceso razonamientos válidos y validan en exceso los errores, y un diagnóstico preciso no produce de forma fiable una retroalimentación accionable. ¿Por qué saber qué está mal podría aun así no dar lugar a un paso siguiente útil?
- El diagnóstico de la era de los LLM se extiende de las preguntas de opción múltiple al trabajo abierto, manuscrito y conversacional. ¿Qué podría salir mal si una IA diagnostica una idea errónea a partir de un trabajo que no comprende del todo, y cómo verificaría que el diagnóstico mismo es fiable?

## Introducción

Mientras que el seguimiento del conocimiento suele estimar un dominio escalar a lo largo del tiempo, el diagnóstico cognitivo produce un perfil más granular: qué componentes de conocimiento están dominados, cuáles son frágiles y qué ideas erróneas están presentes. Este perfil es el sustrato de [[personalized-learning]], [[intelligent-tutoring]] y [[adaptive-learning]].

### Cómo funciona el diagnóstico cognitivo

- **Modelos diagnósticos:** los modelos psicométricos (a menudo dentro de [[item-response-theory]] y [[educational-measurement]]) infieren estados de habilidad latentes a partir de patrones de respuestas correctas e incorrectas, en ocasiones mediante modelos de diagnóstico cognitivo que asignan los ítems a múltiples componentes de conocimiento.
- **Búsqueda automatizada de modelos:** como ningún modelo diagnóstico se ajusta a todos los estudiantes, los enfoques basados en [[machine-learning|AutoML]] (por ejemplo, la búsqueda personalizada de arquitecturas cognitivas neuronales) generan modelos diagnósticos para perfiles de estudiantes heterogéneos, integrando datos educativos [[multimodal|multimodales]] para permitir un análisis dinámico de los procesos de aprendizaje y un diagnóstico cognitivo por estudiante, en lugar de depender de resultados estáticos de [[summative-assessment|examen]] e indicadores estadísticos simples ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Datos de respuesta:** el diagnóstico se apoya en las respuestas a las evaluaciones, las pistas, la [[help-seeking]] y el tiempo en la tarea, señales más ricas que las puntuaciones brutas.
- **Diagnóstico basado en LLM:** los enfoques más recientes usan [[llm|grandes modelos de lenguaje]] para diagnosticar a partir de trabajo abierto o manuscrito y para identificar las [[misconceptions]] concretas que hay detrás de un error (por ejemplo, la «trampa de la respuesta correcta», en la que una respuesta acertada oculta un razonamiento defectuoso). Dos resultados de 2026 delimitan hasta dónde llega ese diagnóstico. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] supervisó el razonamiento diagnóstico como una de las cuatro capacidades de una familia abierta de 4B/9B/27B, y el diagnóstico del estado de conocimiento siguió siendo su capacidad medida más débil: 54,04% con 27B y 53,55% con 9B, tan cerca que triplicar los parámetros no cerró la brecha; mientras que el evaluador LLM de [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] correlacionó con el dominio real en r = 0,68 sobre respuestas agrupadas, pero solo en r ≈ 0,15 dentro del nivel de habilidad más bajo (r ≈ 0,48 en el nivel mixto, 0,41 en el alto), de modo que la fiabilidad diagnóstica sigue el nivel de habilidad de quien aprende tanto como el del modelo.
- **Diagnosticar los errores comunes a escala de cohorte, y no una respuesta a la vez.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] invierten la dirección habitual: en lugar de diagnosticar el error de un solo estudiante, un [[llm]] propone transformaciones correctoras candidatas que llevan las formalizaciones incorrectas hacia las correctas en todo un conjunto de datos educativos, y cada candidata se valida algorítmicamente antes de conservarla. Sobre 6.106 pares de formalizaciones correctas e incorrectas de lógica proposicional, el flujo de trabajo descubrió 248 agrupaciones de transformaciones que explican 5.156 pares (84,44%), frente a 4.370 (71,57%) de los errores seleccionados a mano por el estado del arte anterior, y recuperó los errores que un experto del dominio había identificado a mano en la literatura. La agrupación ordena las candidatas en grupos de transformación única, transformación equivalente y jerárquicos, y el grafo de correlación resultante puede visualizarse para el profesorado; el mismo procedimiento se trasladó a la lógica modal y a las expresiones regulares, donde una sola transformación de disyunción por conjunción cubrió el 98,80% de su grupo de 334 pares. Es una vía hacia el inventario de ideas erróneas que un modelo diagnóstico necesita antes de poder ajustarse.
- **El cuello de botella es recuperar la solución correcta, no simular el error.** Los modelos construyeron una solución en el 95,2% de las trazas de distractores y simularon una idea errónea concreta de Eedi con una precisión de 0,92, pero aun así proporcionar la respuesta correcta elevó la coincidencia con los distractores humanos (0,52 → 0,56): el fallo está aguas arriba, en recuperar la solución ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Diagnóstico a nivel de resultado en currículos basados en competencias:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] diagnostican qué resultados de curso ha alcanzado quien aprende en la educación basada en resultados (OBE) tratando los resultados como los conceptos de conocimiento, aportando relaciones entre conceptos mediante asignaciones de afinidad OBE validadas por expertos entre los resultados de curso y de programa (una alternativa explícita a las relaciones de atención o de grafo aprendidas implícitamente) y usando un módulo con memoria aumentada para estimar cómo la consecución de un resultado incide en los demás, superando a las líneas base DKT, DKVMN, EKT y SimpleKT (89,81% de AUC) sobre datos reales de programas de ingeniería.

- **Diagnosticar a partir de instrumentos concebidos para otra cosa.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] muestran que un modelo de diagnóstico cognitivo puede extraer información a nivel de objetivo de ítems que nunca se escribieron para diagnosticar. Al mapear los ítems del FCI, el FMCE y el EMCS sobre 14 objetivos de aprendizaje finos de mecánica introductoria y ajustar DINA sobre 24.394 respuestas de postest de 807 cursos, encontraron un buen ajuste para dos de los tres instrumentos (FCI RMSEA² = 0,033; EMCS = 0,022) y una precisión de clasificación igual o superior a la referencia formativa de bajo impacto en 19 de las 22 combinaciones de objetivo y evaluación. La restricción limitante era la estructura de atributos, no la calidad de los ítems: la codificación experta resistió casi intacta el escrutinio del modelo —DINA propuso revisar solo el 14% de 754 codificaciones de ítem y objetivo, y los codificadores adoptaron 20 de ellas (2,7%)— y aun así el modelo no pudo separar tres objetivos de energía *conceptualmente anidados* (Energía potencial 0,675, Conservación de la energía 0,705, Energía cinética 0,745) porque dos cualesquiera compartían alrededor del 70% de sus ítems (solapamiento de Jaccard 0,67–0,73), lo que viola el supuesto de independencia conjuntiva de DINA, mientras que los objetivos de momento sobre el mismo instrumento alcanzaron 0,820–0,917. Los atributos más finos también ajustaron mejor, no peor: la estructura de 14 objetivos mejoró el ajuste del modelo respecto de la estructura anterior de cuatro habilidades amplias del mismo equipo en los tres instrumentos. El solapamiento de ítems, y no el error de codificación, es lo que limita la finura con que puede separarse el dominio.
- **DINA bayesiano para trayectorias de aprendizaje personalizadas:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng y Huang (2026)]] integran un modelo DINA bayesiano (entrenado con el conjunto de datos EdNet, N=5.000) con la teoría de espacios de conocimiento y un algoritmo de trayectoria de remediación más corta para generar trayectorias de aprendizaje personalizadas, y comprueban empíricamente el papel mediador de la [[cognitive-offloading|carga cognitiva]] mediante transiciones de estado de un modelo oculto de Markov (validadas con 120 estudiantes), abordando tanto el problema de convergencia por dispersión de los modelos DINA tradicionales como el mecanismo psicológico no comprobado que hay detrás de la eficacia de las trayectorias personalizadas.
- **Diagnóstico anclado en el lenguaje en lugar de incrustaciones de identificadores.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] sustituyen los identificadores discretos de estudiante, ejercicio y concepto por esquemas de conceptos construidos con LLM y evidencia anclada en el proceso, calibrando el estado posterior de cada estudiante a partir de sus registros de respuesta. En tres conjuntos de datos de [[online-teaching-and-learning|plataformas]] de [[math-education|matemáticas]] el marco alcanza 83,51% de ACC / 85,37% de AUC en XES3G5M y 87,16% de ACC en MOOC, con la mejora concentrada exactamente donde los modelos clásicos de diagnóstico cognitivo se degradan: conceptos nuevos (+4,60 de ACC frente a KCD) y entradas ausentes en la matriz Q (+4,52). Ablacionar la evidencia estructurada hunde la precisión en MOOC de 87,16% a 78,95%, de modo que la mejora proviene de la estructura derivada del lenguaje y no de la escala del modelo. ([[process-grounded-language-cognitive-diagnosis-2026]])

## Por qué importa

Un diagnóstico preciso permite que la enseñanza apunte a las lagunas reales en lugar de a una puntuación global de «capacidad», lo que habilita una [[automated-assessment|evaluación automatizada]] que explique *por qué* se equivocó un estudiante y sistemas de [[feedback|bucle de retroalimentación]] que remedien [[student-modeling|estados de conocimiento]] concretos. Un diagnóstico deficiente produce lo contrario: enseñanza dirigida a los conceptos equivocados. Por eso [[psychometrically-aware-ai]] pone el énfasis en la validez diagnóstica junto con la precisión predictiva.

### Relación con el seguimiento del conocimiento y la tutoría inteligente

El diagnóstico cognitivo ocupa el centro de la arquitectura de la [[intelligent-tutoring|tutoría inteligente]] y es la contraparte, del lado de la evaluación, de [[knowledge-tracing]]:

- **Diagnóstico frente a seguimiento: dos vistas temporales complementarias.** [[knowledge-tracing|El seguimiento del conocimiento]] sigue la *dinámica temporal* del dominio: estima cómo evoluciona un estado de conocimiento escalar a lo largo de los ejercicios y predice la siguiente respuesta. El diagnóstico cognitivo produce la *instantánea estática y detallada* de qué componentes de conocimiento, habilidades o ideas erróneas sostiene quien aprende en ese momento. Un tutor necesita ambos: el seguimiento del conocimiento para secuenciar qué enseñar después y el diagnóstico cognitivo para saber *qué* está mal en realidad. Los modelos diagnósticos basados en [[item-response-theory|IRT]] y en la [[educational-measurement|medición educativa]], y los modelos de diagnóstico cognitivo que asignan los ítems a múltiples componentes, instancian el lado diagnóstico.

- **El diagnóstico en la era de los LLM.** Los [[llm|LLM]] extienden el diagnóstico de las respuestas de opción múltiple al trabajo abierto, manuscrito y conversacional, identificando las [[misconceptions]] concretas que hay detrás de un error (por ejemplo, la «trampa de la respuesta correcta», en la que una respuesta acertada oculta un razonamiento defectuoso). [[xie-hillm-cd-2026|HiLLM-CD]] usa LLM para la construcción automatizada de árboles de conceptos y la inferencia jerárquica de competencia, tendiendo un puente entre el diagnóstico y el seguimiento. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] llevan esto más lejos al federar el diagnóstico entre varias API comerciales de LLM con privacidad diferencial ε-local, mostrando que un diagnóstico preciso y respetuoso con la privacidad es viable sin que ningún modelo vea datos brutos del estudiantado.
- **Separar el diagnóstico de la retroalimentación es un principio de diseño.** Los tutores basados en LLM confirman de forma fiable los pasos correctos, pero rechazan en exceso razonamientos válidos y validan en exceso los errores, y un diagnóstico preciso no produce de forma fiable una [[feedback|retroalimentación]] accionable. El diseño de los ITS debería por tanto separar un componente diagnóstico del componente de retroalimentación y [[scaffolding|andamiaje]] ([[yasir-llm-tutoring-agents-2026]]).

## Conexiones

El diagnóstico cognitivo se conecta con [[knowledge-tracing]], [[student-modeling]], [[educational-measurement]] y [[assessment]]. Sus hallazgos alimentan la [[intelligent-tutoring|tutoría inteligente]] y el [[adaptive-learning|aprendizaje adaptativo]], y el trabajo de la era de los LLM lo vincula con la identificación de ideas erróneas en la [[intelligent-tutoring|tutoría con IA]].

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
- [[llm-misconception-difficulty-easy-trap]] — La trampa fácil: por qué los LLM subestiman la dificultad provocada por las ideas erróneas
- [[llm-student-misconception-identification]] — Identificación de ideas erróneas del estudiantado mediante LLM
- [[student-math-competence-clustering]] — Agrupamiento para modelar la competencia matemática del estudiantado
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Compilación de agentes cognitivos para el modelado explícito de resolutores de problemas
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnóstico a partir de estudiantes simulados
- [[huang-interpretable-knowledge-tracing-2026]] — Seguimiento interpretable del conocimiento
- [[xie-hillm-cd-2026]] — HiLLM-CD: árboles de conceptos con LLM e inferencia jerárquica de competencia
- [[yasir-llm-tutoring-agents-2026]] — Separar el diagnóstico de la retroalimentación en los tutores basados en LLM
- [[zhang-ct-ai-training-test-2026]] — Pensamiento computacional en la prueba de formación en IA (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnóstico cognitivo bayesiano para trayectorias de aprendizaje personalizadas
- [[personalized-neural-cognitive-architecture-search-2026]] — Búsqueda AutoML personalizada de arquitecturas cognitivas neuronales para perfiles de estudiantes
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Seguimiento del conocimiento basado en resultados con asignación de afinidad
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnóstico federado heterogéneo con múltiples LLM y preservación de la privacidad
- [[llm-common-modeling-mistakes-formalisms-2026]] — Minería de errores de modelado comunes a escala con transformaciones correctoras generadas por LLM y validadas algorítmicamente (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: diagnóstico con DINA de 14 objetivos de aprendizaje a partir de inventarios de conceptos de física existentes (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Anotación de conceptos de conocimiento con LLM y estados de conocimiento calibrados a nivel de concepto
- [[llm-distractor-generation-student-reasoning-2026]] — Distractores basados en ideas erróneas como tarea de diseño diagnóstico de ítems
- [[misconception-acquisition-dynamics-llms-2026]] — dónde entra el error en la solución es el cuello de botella diagnóstico
- [[pivot-generative-video-tutors-stem-2026]] — De la generación de contenido al apoyo al aprendizaje: tutores de vídeo generativos guiados por la pedagogía para el aprendizaje STEM
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: un tutor agéntico que aprende a su estudiante en un bucle de coaprendizaje humano-IA
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: modelos fundacionales abiertos para el aprendizaje y la enseñanza
