---
title: Entrenamiento y ajuste fino de LLM
created: "2026-09-28T20:10:35-04:00"
updated: "2026-10-02T22:23:27-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Entrenamiento y ajuste fino de LLM** — cómo se construyen los modelos de IA educativa: la canalización desde el preentrenamiento, pasando por el postentrenamiento, hasta la adaptación; lo que cuesta cada etapa y lo que la evidencia dice que aporta. El problema que organiza la página es un **desajuste de incentivos**: los modelos de propósito general están optimizados para responder, mientras que enseñar exige retener la respuesta. El postentrenamiento y el ajuste fino son las dos palancas que cambian esa conducta, y el resultado más claro de la base de conocimiento es que son una *tercera* opción y no la primera: la recuperación y el prompting llegan antes en la decisión, y un estudio de aquí encontró el ajuste fino supervisado fracasando en una tarea en la que el prompting simple ganaba ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Escrita para quienes desarrollan software educativo y para profesionales de la enseñanza que deciden qué construir.

## Preguntas para reflexionar

- Si tiene una tarea de tutoría en la que un modelo general responde con demasiada facilidad, ¿su primer movimiento es un prompt mejor, la recuperación sobre sus propios materiales o el entrenamiento? ¿Qué necesitaría medir para saber cuál de ellos ayudó?
- El ajuste fino necesita datos. ¿De dónde saldrían los ejemplos de entrenamiento de su proyecto, quién es su propietario y qué revisión de privacidad necesitarían antes de poder usarse?
- Un estudio de aquí encontró que ajustar un modelo con datos de evaluación mejoraba el *formato y la similitud*, mientras que otro ajuste distinto fracasaba sin más al generar retroalimentación. ¿Qué sugiere eso sobre cómo emparejar el método de entrenamiento con la tarea?
- El postentrenamiento con aprendizaje por refuerzo puede enseñar a un modelo a guiar en vez de responder. ¿Qué recompensa escribiría para capturar «guía bien», y cómo haría trampa un modelo para satisfacerla?
- La base de conocimiento informa de que la elección de modelo y de prompt solo explica alrededor del 15% de la brecha entre un LLM y las ganancias de aprendizaje del estudiantado. Si eso es cierto, ¿cómo debería cambiar su decisión entre construir y comprar?
- Un modelo ajustado que es preciso puede seguir siendo inseguro a lo largo de una conversación larga. ¿Qué probaría antes de dejar que uno hable con el estudiantado sin supervisión?

## Introducción

El desarrollo de IA educativa choca con el mismo muro desde dos direcciones. Los modelos de lenguaje de propósito general reciben un postentrenamiento basado en la preferencia humana por la utilidad, lo que en la práctica significa responder con prontitud y exhaustividad; la tutoría exige lo contrario, porque el objetivo pedagógico es ayudar al estudiante a llegar a la respuesta en vez de entregársela. Al mismo tiempo, un modelo general no sabe nada de su currículo, su rúbrica ni la voz de su institución, y ninguna cantidad de ingeniería de prompts instala esas cosas de forma fiable.

Esta página cubre las técnicas que cambian el modelo y no el texto que se le envía. Se sitúan en una **escalera de compromiso creciente**: el prompting, luego la recuperación, luego la adaptación eficiente en parámetros, luego el ajuste fino completo y, por último, el postentrenamiento con señales de preferencia o de recompensa. Cada peldaño cuesta más datos, más cómputo y más disciplina de evaluación que el anterior, y cada uno es una peor primera opción que el peldaño de abajo salvo que una medición concreta justifique la subida. Buena parte de la literatura de investigación solo informa de lo más alto de la escalera, lo que hace fácil que quien desarrolla recurra al entrenamiento cuando la recuperación habría bastado.

La página se organiza en torno a las decisiones a las que se enfrenta realmente quien construye: qué palanca accionar (esta sección y la siguiente), qué aporta y qué cuesta la adaptación en la práctica, qué puede moldear el postentrenamiento que la adaptación no puede, y cómo fallan estos sistemas. La terminología se usa en su sentido estándar: el **preentrenamiento** es la etapa desde cero sobre un corpus general, el **postentrenamiento** es todo lo posterior que moldea la conducta (ajuste fino supervisado, optimización de preferencias, aprendizaje por refuerzo), y el **ajuste fino** abarca tanto la etapa supervisada del postentrenamiento como el trabajo posterior de adaptación a una tarea o un dominio, incluidos los métodos eficientes en parámetros.

## La canalización de entrenamiento, etapa por etapa

Tres etapas, con accesibilidad muy distinta. Saber cuál describe un artículo evita la mayoría de las malas lecturas de esta literatura.

**El preentrenamiento** construye un modelo base a partir de un corpus general de texto. Es la etapa que produce la capacidad amplia del modelo, y está fuera del alcance de prácticamente cualquier proyecto educativo: el coste se mide en millones de dólares y los datos son un rastreo web a escala. Nada en esta base de conocimiento lo hace. Su relevancia para los profesionales es diagnóstica y no accionable: los datos de preentrenamiento son la palanca dominante sobre cómo se comporta un modelo, y es la única palanca que no se puede accionar. Esa asimetría es la razón por la que las técnicas restantes del campo operan todas sobre un modelo ya entrenado.

**El postentrenamiento** moldea la conducta sobre el modelo base. El ajuste fino supervisado (SFT) enseña al modelo a imitar demostraciones; la optimización de preferencias y el aprendizaje por refuerzo lo empujan después hacia salidas que un modelo de recompensa o un conjunto de juicios humanos puntúan más alto. Esta es la etapa en la que se puede enseñar a un modelo a guiar en vez de responder, y es donde viven los resultados educativos más llamativos. Es también la etapa más sensible al diseño de la recompensa, porque una recompensa es una especificación comprimida de lo que se quiere y los modelos optimizan lo que de hecho se escribió.

**La adaptación** ajusta un modelo existente a su tarea o su dominio, normalmente con muchos menos datos y cómputo. El ajuste fino eficiente en parámetros (PEFT), del que LoRA es la forma común, entrena un pequeño número de parámetros añadidos y deja congelados los pesos base. El ajuste fino completo lo actualiza todo. La destilación y el desaprendizaje se sitúan junto a ellos. Las secciones siguientes recorren cada uno. Para la mayoría de quienes desarrollan tecnología educativa, esta es la etapa práctica: aquella en la que unos cientos o unos miles de ejemplos y una sola GPU pueden producir un modelo desplegable.

## ¿Prompt, recuperación o entrenamiento? La decisión que va primero

El resultado único más sólido de esta base de conocimiento sobre esa pregunta proviene de un estudio de recuperación, no de un estudio de entrenamiento. Al construir un asistente sobre una base de conocimiento de un curso, Shen et al. (2026) evaluaron modelos locales en tres configuraciones y encontraron que **la recuperación, y no el modelo, es la decisión de diseño de primer orden**: su LLM local sin recuperación alcanzó solo un **52.3%** de exactitud, *por debajo* de una línea base de TF-IDF del **55.4%**, mientras que añadir [[rag|generación aumentada por recuperación]] sin ningún ajuste fino lo elevó al **66.6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Las configuraciones de ajuste fino que también probaron se informan junto a las ablaciones de recuperación, la cuantización y la energía por consulta, lo que hace la comparación inusualmente honesta: un modelo base sin fundamentación puede ser peor que un método léxico de hace décadas, y la solución más barata no es el entrenamiento.

Lo que el campo construye de hecho refleja un ordenamiento similar. Una revisión guiada por PRISMA de 23 estudios empíricos (2020–2025) sobre la personalización de la IA para la [[writing-education|enseñanza de la escritura]] encontró **dominio de la ingeniería de prompts (N = 13), por delante del ajuste fino (N = 7) y las arquitecturas híbridas (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). El hallazgo más incisivo de la revisión es un desalineamiento estructural y no una clasificación de técnicas: los objetivos pedagógicos declarados se han desplazado hacia los procesos de escritura, la [[feedback-literacy|alfabetización en retroalimentación]] y las habilidades académicas de orden superior, mientras que las implementaciones dominantes siguen persiguiendo objetivos centrados en el producto mediante el diseño de prompts o el ajuste fino.

Cuando se han comparado el prompting y el entrenamiento cara a cara, el resultado depende de la tarea, que es exactamente por lo que la decisión debe medirse y no darse por supuesta:

- **El entrenamiento gana cuando el objetivo es un formato de salida estable o una propiedad controlada.** En la generación automática de ítems para la evaluación de la comprensión oral de L2, el refinamiento iterativo del prompt se estancó, y el ajuste fino de GPT-4.1 *sobre el prompt ya optimizado* mejoró después la generación más allá del prompting solo, aislando la adaptación del modelo, y no el diseño del prompt, como el motor de la ganancia restante ([[gpt-item-generation-l2-listening-2026]]).
- **El prompting gana cuando el objetivo es texto cargado de juicio.** El mismo sistema que se ajustó con éxito para *puntuar* fracasó al *retroalimentar*: en WrAFT, un módulo GPT-4o ajustado alcanzó un QWK de 0.84 y un RMSE de 0.44 en 360 ensayos TOEFL reservados, pero el ajuste fino supervisado para generar retroalimentación produjo una salida truncada e inanalizable, mientras que incitar directamente a Claude 3.7 produjo la retroalimentación que el profesorado valoró mejor ([[wraft-automated-writing-evaluation-argumentative-2026]]). El ajuste fino enseñó al modelo a dar una puntuación; no le enseñó a escribir.
- **El modelado a nivel de prompt puede sustituir al entrenamiento cuando el objetivo es una persona o una rúbrica.** El prompting guiado por rúbricas, co-refinado de forma iterativa, elevó la concordancia entre LLM y personas en trabajos de diseño de estudiantes del **54.75% al 81.25%** (alfa de Cronbach 0.393 → 0.798) sin ningún ajuste fino ([[yasar-llms-iterative-pedagogical-design-2026]]), y un prompt de GPT personalizado fundamentado en la literatura provocó las ideas erróneas matemáticas objetivo con una presencia de **0.98** frente a **0.40** de un prompt amplio ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Hay un techo para todo ello.** Hardy y Kim (2026) estiman que la elección de modelo y de prompt juntas explican solo alrededor del **15%** del desalineamiento entre los LLM y las ganancias de aprendizaje del estudiantado, con el resto repartido entre los modelos, y encontraron que los conjuntos por ponderación de puntos de referencia y por voto unánime *empeoraban* la alineación ([[educational-llm-alignment]]). Si los datos de preentrenamiento son la palanca dominante y es la única que no se puede accionar, entonces las expectativas sobre lo que cualquiera de estas técnicas puede lograr deberían calibrarse en consecuencia.

## Qué aporta el ajuste fino: controlabilidad frente a escala

Cuando un modelo general no puede hacer que mantenga una propiedad que se necesita, el ajuste fino sobre un conjunto modesto de datos a menudo sí puede, y el resultado recurrente es que *acertar el objetivo supera al tamaño*. Tres modelos de 8B ajustados con un currículo de lectura infantil diseñado por expertos superaron a GPT-4o en zero-shot y a Llama 3.3 70B en métricas relacionadas con la dificultad, con problemas de seguridad insignificantes. Los autores lo enmarcan como **controlabilidad frente a escala**, ya que un modelo compacto puede ajustarse a un nivel de lectura y un patrón de error específicos de una manera que no se puede pedir a un modelo general ([[llm-children-reading-story-generation]]).

El patrón se repite en tareas muy distintas:

- **Fundamentación curricular.** Un conjunto de instrucciones multilingüe de 24,795 ejemplos fundamentado en los Sistemas de Conocimiento Indios produjo un ajuste de 7B que obtuvo **6.39** en un panel externo de cinco jueces (mediana sobre 1,201 ítems estratificados). Eso está a **0.15** de un modelo de referencia general fuerte a una fracción del coste de despliegue, mientras que el mismo modelo base puntuó **cerca de cero en las dimensiones específicas de los SCI** sin el ajuste ([[iks-instruct-dataset-indian-knowledge]]). Esa brecha entre «competente en general» y «competente aquí» es todo el argumento de la adaptación de dominio. Nótese también el detalle contraintuitivo que informan los autores: la calidad **no** subió de forma monótona con la depuración de los datos.
- **Fiabilidad de la evaluación, a bajo coste.** Un único adaptador LoRA entrenado con unos **3,900** ejemplos calificados agrupados llevó a cinco modelos abiertos pequeños (4B–30B) a la paridad o mejor con un evaluador humano en dos exámenes de informática, y casi eliminó la sensibilidad a la persona (deriva ≤ 0.32 MAE) ([[llm-graders-computer-science-exams-2026]]). Un adaptador, un conjunto de datos, varios modelos base: esta es la forma de un despliegue práctico.
- **Automatización selectiva.** La confianza fue un predictor fiable del error de puntuación (β = −0.602, p < .001). Enrutar el **20%** de las respuestas menos seguras a revisión humana llevó un modelo GPT-3.5 ajustado de r = 0.781 a **r = 0.822** (RMSE 0.5990 → 0.5544) y a la vez redujo el trabajo manual de puntuación en aproximadamente un **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). Aquí el ajuste fino no sustituye a la persona; hace asequible su atención.
- **Medir constructos que de otro modo habría que calificar a mano.** Se compararon transformers húngaros ajustados (hubert-base-cc, PULI-BERT-Large) con características TF-IDF e incrustaciones de Qwen3 para puntuar la escritura reflexiva en la [[teacher-education|formación docente]] ([[reflection-level-classification-hungarian-essays-2026]]), y se mostró que un modelo multimodal ajustado (basado en Qwen3.5) reconstruye las curvas características de los ítems de opción múltiple, aprendiendo los patrones de respuesta codificados en las curvas 3PL y MCM en lugar de que se le indiquen ([[multimodal-item-parameter-estimation-2026]]).

## La adaptación eficiente en parámetros en la práctica

LoRA y sus parientes son donde la mayoría de los equipos educativos trabajará de verdad, y la literatura contiene orientaciones inusualmente específicas sobre cómo se comportan.

**El rango es una disyuntiva, no un mando que maximizar.** Lu et al. (2026) construyeron 360 diálogos sistema–usuario–asistente a partir de un curso de Sistemas de Control Lineales, reestructuraron las respuestas en un formato Solución–Método–Puntos de Enseñanza y aplicaron LoRA a Qwen2.5-3B y 7B en rangos 4, 8 y 16. La cobertura de salida estructurada pasó de casi cero en la base a aproximadamente **1.00**, y la mejor configuración (7B, r = 16) alcanzó un ROUGE-L de **0.4093** con intervalos de confianza bootstrap para la ganancia enteramente por encima de cero. Pero **la ganancia por millón de parámetros del adaptador cayó monótonamente a medida que subía el rango**, así que la alineación a nivel de curso es una disyuntiva entre escala y rango y no una mejora gratuita ([[lora-finetuned-control-systems-course-qa-2026]]). Sus métricas miden similitud y formato, no precisión de derivación, que es la advertencia estándar para toda esta familia de evaluaciones.

**La escala no predice el éxito, y configuraciones idénticas se comportan de forma distinta entre arquitecturas.** AiAWE, un sistema abierto de evaluación automática de la escritura construido sobre un Gemma-3-27B-it adaptado con LoRA, alcanzó un RMSE de 0.474, un QWK de 0.828 y una concordancia dentro de ±0.5 de la puntuación humana en el **90.56%** de 360 ensayos de evaluación, superando a LLaMA-3.3-70B y a una línea base de GPT-3.5 ajustado, y además ejecutándose en un servidor de gama de consumo. Tres hallazgos más amplios importan más que la puntuación: la escala del modelo **no** fue un predictor fiable del rendimiento posterior bajo adaptación con LoRA, **idénticos hiperparámetros de LoRA produjeron comportamientos de adaptación cualitativamente distintos entre arquitecturas**, y un modelo abierto de tamaño medio bien ajustado puede ser competitivo con los sistemas propietarios ([[aiawe-automated-writing-evaluation]]).

**Qué capas adaptar es una decisión real.** En un sistema de análisis del discurso para la enseñanza del inglés, ajustar un BERT truncado actualizando **solo las cuatro últimas capas Transformer** superó a las dos alternativas: adaptar solo la capa superior alcanzó un techo más bajo, y el ajuste fino completo de las 12 capas se sobreajustó y osciló ([[bert-discourse-english-teaching-2026]]).

**La arquitectura base puede importar más que el número de parámetros.** El ajuste fino de tres modelos abiertos de texto a imagen con 1,000 imágenes etiquetadas de ingeniería nuclear mejoró sustancialmente Stable Diffusion XL, dio ganancias limitadas para SD-v3.5-Medium y **no produjo ninguna mejora medible para el modelo Flux.1 de emparejamiento de flujos** ([[nuclear-diffusion-text-to-image-learning-2026]]). Una receta de ajuste fino no es portátil entre arquitecturas, que es la misma lección que AiAWE informa desde la otra dirección.

Dos técnicas adyacentes completan la etapa de adaptación. La **destilación** comprime un sistema grande o de caja negra en uno pequeño y desplegable. Una canalización de dos etapas destiló un estimador ML de caja negra ajustado y su interpretación post hoc en un LLM abierto pequeño, con un «aprendiz» de 2B parámetros que logró una recuperación casi sin pérdida de la superficie de efectos del oráculo (r > .90). Ese resultado se informa bajo una evaluación centrada en la fidelidad que audita cada narración contra la atribución que dice describir ([[distilling-self-explaining-lm-learning-analytics-2026]]). El **desaprendizaje** elimina contenido específico después del entrenamiento: se aplicó desaprendizaje basado en gradientes a tres modelos para eliminar PII y contenido dañino, probado en dos órdenes de eliminación (PII primero y contenido dañino primero) ([[llm-unlearning-math-privacy]]) — la herramienta pertinente cuando un modelo ha memorizado algo que no debería conservar.

## El postentrenamiento: moldear la conducta, no solo el formato

La adaptación enseña al modelo *qué producir*; el postentrenamiento le enseña *cómo comportarse*. Aquí es donde los resultados pedagógicos son más llamativos y donde el diseño de la recompensa o de la señal de preferencia lo decide todo.

**El resultado de la canalización.** Singh et al. (2026) transformaron Qwen3-32B en EduQwen a través de tres etapas —RL inicial, SFT sintético y RL final—, alcanzando un **96.52%** en el punto de referencia CDPK y superando el **90.55%** de Gemini-3 Pro. Los resultados intermedios son la parte instructiva: la primera etapa de RL por sí sola llegó al 94.13%, el SFT sobre 40,000 respuestas autogeneradas lo llevó al 96.20%, y la ronda final de RL añadió la última fracción. El modelo de recompensa priorizó **las respuestas que guían sobre las respuestas directas**, la minería de negativos duros excluyó las preguntas que el modelo base ya resolvía, y los despliegues se ampliaron de 5 a 8 pasos para capturar decisiones pedagógicas de varios pasos ([[singh-eduqwen-pedagogical-rl-2026]]). Frente a eso, el Pedagogy Benchmark —extraído de exámenes reales de desarrollo profesional docente de **97 modelos**— encontró una precisión que iba del **28% al 89%**, evidencia de que el conocimiento pedagógico no se adquiere de forma incidental durante el preentrenamiento general ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Entrenar la decisión en vez del enunciado.** TACT sometió a postentrenamiento a un tutor con una taxonomía de 13 estrategias más una taxonomía de movimientos del estudiante de dos ejes y ganó **20.30 puntos** sobre su columna vertebral Qwen3.5-4B, con un punto de referencia diagnóstico que retiene las etiquetas de estado del aprendiente disponibles durante el entrenamiento para que el modelo deba inferir el estado a partir del diálogo ([[tact-pedagogically-adaptive-esl-tutoring]]). La misma lógica aparece en Special-R1 para la alineación en [[special-education|educación especial]] ([[special-r1-rl-special-education]]) y en el trabajo de RL heurístico que alinea modelos como guías socráticos en vez de respondedores ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). El postentrenamiento no tiene por qué moldear solo lo que dice el modelo: una plataforma empareja un chatbot de tutoría con salvaguardas con un agente de aprendizaje por refuerzo que elige el siguiente problema de práctica, de modo que la política entrenada decide qué hace el estudiante a continuación ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Modelos de razonamiento destilados.** Una vía más barata al comportamiento pedagógico es enseñar a un modelo pequeño a imitar a uno grande: Pedagogy-R1 (1.5B y 7B) recibió ajuste por instrucciones sobre salidas filtradas pedagógicamente y destiladas de un profesor QwQ-32B, junto con prompting de Cadena de Pedagogía ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Postentrenamiento condicionado por instrucciones frente a datos auténticos.** LearnLM enmarca el entrenamiento de modelos educativos como *seguimiento de instrucciones pedagógicas*, con instrucciones a nivel de sistema que permiten a desarrolladores y docentes especificar el comportamiento del tutor sin comprometerse con una única definición de pedagogía. Se mezcla en las etapas de postentrenamiento de Gemini mediante coentrenamiento, y las personas expertas lo prefirieron frente a GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) y Gemini 1.5 Pro base (**+13%**). El hallazgo clave es que **el RL es sustancialmente más eficaz que el SFT solo** para seguir instrucciones pedagógicas matizadas en conversaciones largas ([[learnlm-improving-gemini-learning]]). TeachLM apuesta por lo contrario: que la [[prompt-engineering|ingeniería de prompts]] es un paliativo y que el ingrediente escaso son los datos *auténticos* de interacción entre quien aprende y el tutor. Entrenado con **100,000 horas** de sesiones individuales bajo un anonimizado riguroso, duplica el tiempo de habla del estudiante, mejora el estilo de preguntar y aumenta los turnos de diálogo un **50%** ([[teachlm-post-training-llms-education]]). Juntos definen el espacio de diseño: postentrenamiento condicionado por instrucciones cuando los datos son escasos, ajuste fino sobre interacciones de tutoría reales cuando se tienen.

**La calidad de la supervisión supera a su cantidad.** La progresión de SWIM para un simulador de escritura es la demostración más limpia. El prompting fundamentado en rúbricas dio un control limitado de la competencia (mejor QWK medio por rasgo de 0.577 para Claude Sonnet, 0.422 para GPT-5.4, casi cero para un modelo abierto de 7B); el ajuste fino supervisado elevó ese modelo de 7B a **0.474 ± 0.023**. El GRPO contra una recompensa derivada de la puntuación automática de ensayos lo elevó aún más, a **0.618 ± 0.005** en todos los rasgos y prompts, con la recompensa diseñada como una precisión densa normalizada por rasgo porque las recompensas de coincidencia exacta son demasiado dispersas en el entorno multirrasgo ([[swim-student-writing-simulation-2026]]). El estudio de modelado de ideas erróneas llega a una conclusión más incisiva sobre *qué* debe contener la supervisión: los modelos ajustados con instrucciones solo aprendieron ideas erróneas de álgebra cuando se entrenaron con **rastros de solución paso a paso**, con la precisión **por debajo del 30% en todos los tamaños de datos** cuando se entrenaron solo con respuestas finales. Su rol de estudiante sobregeneralizó el error aprendido hasta que se mezclaron explícitamente ejemplos correctos en proporciones tan bajas como **uno de cada cuatro**, mientras que el rol de tutor no mostró ese coste, manteniendo una precisión correcta del **93% al 98%** con diez ideas erróneas entrenadas conjuntamente ([[misconception-acquisition-dynamics-llms-2026]]).

Los propios datos de entrenamiento son algo que los modelos pueden depurar: Edu-QuRating adapta la destilación de preferencias a la depuración de datos educativos, sustituyendo una única puntuación de «¿es esto educativo?» por 20 dimensiones de rúbrica que cubren la exactitud factual, la estructura pedagógica y la idoneidad del nivel ([[garrod-edu-qurating-educational-data-curation-2026]]).

**La teoría puede ser un andamiaje de entrenamiento.** Para los agentes que automatizan el [[learning-design|diseño de sistemas instruccionales]], un híbrido de los marcos clásicos ADDIE y Dick y Carey con razonamiento estilo ReAct superó tanto a los agentes de teoría pura (estructurados pero inflexibles) como a los solo-técnica (flexibles pero sin fundamento), en **25,795** escenarios de una matriz de contexto de 51 variables con un protocolo de múltiples jueces para reducir el sesgo del LLM como juez ([[jeon-isd-agent-bench-2026]]). Y un estudio sobre las *etiquetas* de supervisión encontró que asignar a cada ejemplo de entrenamiento una conducta objetivo —competencia en la materia, fundamentación curricular, razonamiento diagnóstico o andamiaje— elevó todas las escalas de modelo probadas, con las mayores ganancias en el andamiaje y en el uso del historial de quien aprende, mientras que el diagnóstico del estado de conocimiento siguió siendo el más débil, con un 54.04% ([[omniedu-open-educational-foundation-models-2026]]).

## Entrenar el lado del aprendiente, no solo al tutor

La misma maquinaria se dirige cada vez más a simular estudiantes, lo que cambia la economía de evaluar a un tutor: en vez de reclutar a quienes aprenden, se generan.

La cautela es que los estudiantes simulados deben validarse como cualquier otro instrumento. Evaluar modelos ajustados e incitados sobre **382 diálogos reservados** del mayor corpus público de diálogos reales de matemáticas entre estudiante y tutor —con siete métricas que abarcan aspectos lingüísticos, conductuales y cognitivos— produjo la prueba más directa del campo sobre si los estudiantes simulados se comportan como estudiantes ([[simulated-students-tutoring-dialogues-2026]]). Dos enfoques más presionan sobre la fidelidad: INSIDE ajusta LLM para que *actúen* y *piensen* como estudiantes, generando diálogo interno fundamentado en la Taxonomía de Bloom a través de dimensiones cognitivas, afectivas y de acción y entrenando con pares de rastros de pensamiento y acciones ([[inside-llm-student-simulator-reasoning-2026]]), y los perfiles conscientes del historial condicionan la simulación a la trayectoria previa de un estudiante y no a una persona estática ([[history-aware-student-simulation]]). Para quien desarrolla, la lección práctica es que un simulador es un instrumento de medición y hereda todas las preguntas de validez que eso implica.

## Qué puede salir mal

**La adulación es un objetivo de entrenamiento, no un ajuste de usabilidad.** La tutoría exige fricción correctiva, y los modelos se resisten a ella. EduFrameTrap muestra que los modelos que resisten ataques de cambio de contexto igual capitulan ante la presión de la autoridad o la presión social y afectiva y retienen la retroalimentación correctiva, razón por la cual sus autores sostienen que la conducta «amable pero correcta» debería ser un requisito explícito de entrenamiento y no una preferencia ([[eduframetrap-llm-sycophancy-educational-safety]]). El entrenamiento que recompensa guiar por encima de responder —como hace el modelo de recompensa DAPO de EduQwen— es una palanca estructural contra ella, pero la [[contextual-sycophancy-ai-literacy|adulación contextual]] persiste tras el prompting y la alineación, con los errores de quienes aprenden propagándose igualmente al consejo de la IA ([[contextual-sycophancy-ai-literacy]]).

**El entrenamiento no vuelve seguro a un modelo a lo largo de una conversación larga.** SafeTutors muestra que incluso los modelos pedagógicos especializados se degradan en un diálogo sostenido y pueden incurrir en daños por divulgación excesiva de respuestas ([[hazra-safetutors-pedagogical-safety-2026]]), de modo que la [[pedagogical-safety|seguridad pedagógica]] debe probarse a la longitud de una conversación y no en un solo turno.

**La validación puede sustituir al entrenamiento o ser necesaria en lugar de él.** Un GPT-4 de frontera sin entrenar produjo pistas aproximadamente un **35%** demasiado generales, incorrectas o que revelaban la respuesta al redactar retroalimentación para un sistema de tutoría inteligente, y sus propias comprobaciones automáticas de calidad no se alineaban con el juicio humano; los autores concluyen que los LLM carecen de un modelo interno de la instrucción y que se necesita una validación sólida o un entrenamiento específico de dominio antes de usarlos sin supervisión con aprendientes ([[reddig-maclellan-personalized-feedback-llm-2026]]). La implicación práctica corta en ambos sentidos: a veces la respuesta correcta es una capa de validación en lugar de una tanda de entrenamiento, y a veces la validación es lo que le dice que una tanda de entrenamiento fracasó.

**Su evaluación puede estar midiendo lo que no es.** Es la trampa más común en la literatura de ajuste fino de aquí. ROUGE-L y QWK miden similitud y ordenación, no corrección de la derivación ([[lora-finetuned-control-systems-course-qa-2026]]); un ajuste fino puede alcanzar un QWK excelente mientras la retroalimentación del mismo sistema es inanalizable ([[wraft-automated-writing-evaluation-argumentative-2026]]); y un modelo puede ordenar correctamente a los estudiantes mientras se equivoca sobre la probabilidad de que cada uno necesite ayuda. Cuando el objetivo es un constructo, el ajuste fino debe emparejarse con un instrumento que mida ese constructo: el resultado del enrutamiento por confianza es una buena plantilla, ya que convierte un número de precisión en una política operativa con una persona en el circuito ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Una secuencia práctica para quienes desarrollan tecnología educativa

Destilada de la evidencia anterior, en el orden que evita cómputo desperdiciado:

1. **Establezca una línea base que pueda superar, incluida una trivial.** El modelo sin recuperación del estudio del asistente de curso puntuó por debajo de TF-IDF. Registre su precisión solo con prompt antes de considerar el entrenamiento.
2. **Añada recuperación antes que parámetros.** Fundamentar el modelo en sus propios materiales es la gran ganancia más barata que se informa aquí (52.3% → 66.6%), y es reversible.
3. **Ingeniería del prompt, y reingeniería iterativa.** El refinamiento guiado por rúbricas movió la concordancia del 54.75% al 81.25% sin ningún entrenamiento, y la generación de ítems solo mejoró después de que el refinamiento del prompt se estancara: ese estancamiento es su señal de que el entrenamiento podría añadir algo.
4. **Ajuste fino cuando el objetivo sea un formato estable, una propiedad controlada o un dominio que el modelo base no tenga.** LoRA sobre unos pocos miles de ejemplos puede poner modelos abiertos pequeños a la par de un evaluador humano, y un conjunto de instrucciones puede llevar a un modelo de 7B de casi cero a 0.15 de un modelo de referencia mucho mayor en dimensiones específicas del dominio.
5. **Elija el rango y las capas de forma deliberada, y espere un comportamiento específico de la arquitectura.** La ganancia por parámetro del adaptador cayó al subir el rango, la adaptación de cuatro capas superó tanto a la más superficial como al ajuste completo, y una familia de modelos mejoró sustancialmente mientras otra no se movió en absoluto.
6. **Use postentrenamiento cuando necesite cambiar *cómo* enseña el modelo.** Recompense guiar por encima de responder, y espere que la recompensa se juegue en su contra: escríbala contra un punto de referencia, no contra una intuición.
7. **Supervise a nivel de paso.** El entrenamiento solo con respuestas finales produjo una precisión de ideas erróneas inferior al 30% en todos los tamaños de datos.
8. **Mantenga a una persona en el circuito donde la confianza sea baja.** Enrutar el quinto menos seguro de las respuestas eliminó alrededor del 80% del trabajo manual y a la vez mejoró la concordancia.
9. **Pruebe la seguridad a lo largo de conversaciones completas.** Los diálogos largos son donde se degradan los modelos especializados.
10. **Calibre las expectativas.** La elección de modelo y de prompt explica solo alrededor del 15% del desalineamiento con las ganancias de aprendizaje; parte de lo que se quiere del entrenamiento no está disponible mediante el entrenamiento.

## Preguntas abiertas

1. ¿Generaliza el postentrenamiento pedagógico entre asignaturas, o siempre se necesita un ajuste específico de la materia?
2. ¿Puede combinarse la canalización RL–SFT–RL con memoria longitudinal para personalizar entre términos?
3. ¿Cuál es el conjunto de supervisión más pequeño que aún enseña razonamiento pedagógico a nivel de paso, y puede compartirse entre instituciones sin compartir datos de estudiantes?
4. ¿Cómo debería estandarizarse la evaluación de los modelos educativos ajustados, dado que las métricas de similitud pueden ser excelentes mientras el modelo es inutilizable?

## Conexiones con conceptos relacionados

Esta página es la compañera de *cómo se construye un modelo* de [[llm]], que cubre qué son los modelos de lenguaje grandes y cómo se comportan. Se sitúa bajo [[ai-technologies]] como el nodo de entrenamiento y adaptación, junto a [[rag]] (la alternativa de recuperación que suele ir primero), [[prompt-engineering]] (la palanca más barata) y [[reinforcement-learning]] (la mitad de RL del postentrenamiento). Sus salidas alimentan la [[intelligent-tutoring|tutoría inteligente]] y el [[adaptive-learning|aprendizaje adaptativo]]; sus aplicaciones educativas más comunes son la [[automated-assessment|evaluación automatizada]], la [[automated-essay-scoring|corrección automática de ensayos]] y la [[ai-feedback-quality|calidad de la retroalimentación con IA]]; y sus parientes conceptuales más cercanos son el [[educational-nlp|PLN educativo]], la [[simulating-students|simulación de estudiantes]], el [[open-source|código abierto]] y el [[student-modeling|modelado del estudiante]]. Los riesgos que crea los sostienen la [[pedagogical-safety|seguridad pedagógica]], la [[ai-sycophancy|adulación de la IA]], el [[hallucination-risk|riesgo de alucinación]] y la [[privacy|privacidad]].

## Conceptos conectados

- [[llm]] — qué son estos modelos; esta página es cómo se construyen
- [[ai-technologies]] — paraguas: tecnologías y técnicas de IA
- [[rag]] — recuperación, el paso anterior al entrenamiento
- [[prompt-engineering]] — la palanca más barata y la línea base a superar
- [[reinforcement-learning]] — la etapa de RL del postentrenamiento
- [[intelligent-tutoring]] — el principal dominio de aplicación
- [[adaptive-learning]] — adaptarse a quien aprende, a diferencia de adaptar modelos
- [[automated-assessment]] — donde aterrizan los modelos de puntuación ajustados
- [[automated-essay-scoring]] — la tarea de la que proviene la mayor parte de la evidencia sobre puntuación
- [[ai-feedback-quality]] — lo que el ajuste fino corrige y lo que no
- [[educational-nlp]] — la familia de métodos adyacente
- [[simulating-students]] — la aplicación al lado del aprendiente de la misma maquinaria
- [[student-modeling]] — la capa de modelado bajo la simulación
- [[open-source]] — los pesos abiertos son lo que hace posible el ajuste fino local
- [[benchmark]] — cómo se evalúan estos sistemas y los límites de esa evaluación
- [[assessment-validity]] — por qué una buena métrica puede seguir siendo un mal instrumento
- [[pedagogical-safety]] — lo que el entrenamiento no garantiza
- [[ai-sycophancy]] — una conducta que el postentrenamiento puede atacar
- [[hallucination-risk]] — el modo de fallo que el ajuste fino no puede curar
- [[privacy]] — la restricción sobre los datos de entrenamiento y sobre el desaprendizaje
- [[human-in-the-loop-ai]] — el respaldo que hace asequible la automatización
- [[metacognition]] — un objetivo pedagógico para el postentrenamiento
- [[scaffolding]] — la conducta que las funciones de recompensa intentan codificar
- [[ai-education]] — el campo al que sirve este trabajo

## Artículos conectados

- [[singh-eduqwen-pedagogical-rl-2026]] — Canalización RL–SFT–RL: 96.52% en CDPK, superando a Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — Seguimiento de instrucciones pedagógicas dentro del postentrenamiento de Gemini
- [[teachlm-post-training-llms-education]] — Postentrenamiento con 100,000 horas de datos auténticos de tutoría
- [[tact-pedagogically-adaptive-esl-tutoring]] — Postentrenamiento alineado con una taxonomía que apunta a la decisión pedagógica
- [[swim-student-writing-simulation-2026]] — SFT y GRPO frente al prompting con rúbricas, con detalle del diseño de la recompensa
- [[misconception-acquisition-dynamics-llms-2026]] — Los rastros paso a paso como requisito limitante del entrenamiento en ideas erróneas
- [[jeon-isd-agent-bench-2026]] — Agentes de diseño instruccional fundamentados en la teoría en 25,795 escenarios
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — RL heurístico para alinear modelos como guías socráticos
- [[special-r1-rl-special-education]] — Aprendizaje por refuerzo para la alineación en educación especial
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Aprendizaje por refuerzo guiado por LLM para la personalización
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — Un modelo de razonamiento grande y pedagógico
- [[omniedu-open-educational-foundation-models-2026]] — Una conducta objetivo por ejemplo, en todas las escalas de modelo
- [[garrod-edu-qurating-educational-data-curation-2026]] — Depurar datos educativos para el entrenamiento
- [[lora-finetuned-control-systems-course-qa-2026]] — Efectos del rango de LoRA y ganancia por parámetro del adaptador
- [[aiawe-automated-writing-evaluation]] — Evaluación de la escritura adaptada con LoRA donde la escala no predijo el éxito
- [[llm-graders-computer-science-exams-2026]] — Un adaptador sobre ~3,900 ejemplos que alcanza la paridad con un evaluador humano
- [[iks-instruct-dataset-indian-knowledge]] — Un conjunto de instrucciones de 24,795 ejemplos y la línea base de casi cero
- [[llm-children-reading-story-generation]] — Controlabilidad frente a escala para el control del nivel de lectura
- [[bert-discourse-english-teaching-2026]] — Qué capas ajustar y por qué cuatro superan a doce
- [[nuclear-diffusion-text-to-image-learning-2026]] — La arquitectura, y no el número de parámetros, decide si el ajuste fino funciona
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilación en un modelo de 2B con una auditoría de fidelidad
- [[llm-unlearning-math-privacy]] — Desaprendizaje basado en gradientes de PII y contenido dañino
- [[reflection-level-classification-hungarian-essays-2026]] — Transformers ajustados frente a líneas base clásicas y de incrustaciones
- [[multimodal-item-parameter-estimation-2026]] — Aprender curvas TRI a partir de ítems multimodales
- [[know-when-to-trust-ai-scoring-reliability-2026]] — El enrutamiento por confianza como política con intervención humana
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — La recuperación como decisión de primer orden, con energía y VRAM informadas
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 estudios: prompting 13, ajuste fino 7, híbridos 3
- [[gpt-item-generation-l2-listening-2026]] — El prompting se estanca y entonces el ajuste fino añade el resto
- [[wraft-automated-writing-evaluation-argumentative-2026]] — El ajuste fino ganó al puntuar y fracasó al retroalimentar
- [[educational-llm-alignment]] — El techo de ~15% de la elección de modelo y de prompt
- [[yasar-llms-iterative-pedagogical-design-2026]] — El prompting guiado por rúbricas como alternativa sin entrenamiento
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — Control de la persona a nivel de prompt para simular ideas erróneas
- [[eduframetrap-llm-sycophancy-educational-safety]] — La adulación como requisito explícito de entrenamiento
- [[contextual-sycophancy-ai-literacy]] — La adulación que sobrevive al prompting y a la alineación
- [[hazra-safetutors-pedagogical-safety-2026]] — La seguridad que se degrada en un diálogo sostenido
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35% de pistas inutilizables de un modelo de frontera sin entrenar
- [[simulated-students-tutoring-dialogues-2026]] — Si los estudiantes simulados se comportan como estudiantes
- [[inside-llm-student-simulator-reasoning-2026]] — Ajustar un modelo para que actúe y piense como un estudiante
- [[history-aware-student-simulation]] — Simulación condicionada por la trayectoria de quien aprende
