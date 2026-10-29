---
title: "¿Cómo podemos hacer que la IA apoye mejor el aprendizaje en nuestra propia materia?"
created: "2026-10-02T09:08:04-04:00"
updated: "2026-10-28T13:32:35-04:00"
weight: 74
type: faq
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
source_updated: "2026-10-28T11:21:19-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-02"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

El ticket dice "ajuste fino del modelo con los materiales de nuestro curso". El presupuesto está aprobado, hay una GPU reservada para el mes que viene y se le ha pedido a un estudiante de posgrado que reúna un conjunto de datos. Nadie en la llamada ha preguntado qué puntúa un prompt simple, ni qué puntúa una búsqueda por palabras clave, en las mismas preguntas.

Haga esas dos preguntas primero. En esta base de conocimiento, la brecha entre un modelo general y uno competente en el curso es sobre todo un problema de anclaje y de prompting, y la evidencia de ese orden es inusualmente directa: un estudio de asistente de curso encontró que la recuperación, y no el modelo, era la decisión de primer orden, y un modelo general sin anclaje puntuó *por debajo* de una línea base simple de TF-IDF.

El entrenamiento es real y a veces necesario. Es la tercera o la cuarta cosa que probar, y el trabajo de abajo está ordenado para que usted averigüe qué peldaño necesita de verdad antes de gastar el cómputo del trimestre.

## La versión breve

**1.** Registre qué puntúa un prompt simple y qué puntúa un método léxico trivial antes de cambiar nada. Ese segundo número es el que lo mantiene honesto.

**2.** Ponga la recuperación sobre sus propios materiales delante del modelo. Es la mayor ganancia única que se reporta aquí en relación con su costo, y es reversible.

**3.** Diseñe el prompt contra su rúbrica e itere hasta que la mejora se detenga. La meseta es la señal de que el entrenamiento podría añadir algo.

**4.** Adapte los pesos con [[llm-training-and-fine-tuning|LoRA]] cuando el objetivo sea estable y estrecho: un formato, una rúbrica, un nivel de lectura, un vocabulario de dominio.

**5.** Haga postentrenamiento cuando el problema sea de comportamiento y no de contenido, y escriba la recompensa contra un benchmark del que espere que se abuse.

**6.** Construya el conjunto de entrenamiento a nivel de paso. Los datos de solo respuesta no enseñan un concepto erróneo.

## Consiga una línea base que pueda superar de verdad

Antes de cambiar nada, registre qué devuelve un prompt simple. Después registre qué devuelve un método trivial.

El estudio del [[shen-sustainable-ai-knowledge-base-cs-education-2026|asistente de base de conocimiento del curso]] merece leerse solo por esto. Un LLM local sin recuperación alcanzó una exactitud del **52,3%**. Una línea base de TF-IDF, un método léxico de hace décadas, alcanzó el **55,4%**. El modelo era peor que el método clásico.

Sáltese este paso y no podrá saber si su ajuste fino ayudó. Peor aún, puede poner en producción un sistema al que una búsqueda por palabras clave supera y enterarse solo cuando un ayudante de cátedra lo mencione. Dos números en una hoja de cálculo, tomados en una tarde, protegen el resto del presupuesto.

## Ancle el modelo en sus propios materiales

Añadir [[rag|generación aumentada por recuperación]] sobre los materiales del curso, sin ningún ajuste fino, elevó ese mismo sistema del 52,3% al **66,6%**. Esa ganancia vino de un índice, y trae una propiedad que un entrenamiento no tiene: cuando sus documentos cambian, usted reindexa.

Otros dos resultados apuntan en el mismo sentido. Una revisión PRISMA de 23 estudios empíricos sobre la personalización de la IA para la [[writing-education|enseñanza de la escritura]] encontró **dominio de la ingeniería de prompts (N = 13), por delante del ajuste fino (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Cuando una base de conocimiento tiene que mantenerse actualizada, la recuperación es la única palanca que se mantiene actualizada sin volver a ejecutar un entrenamiento.

La recuperación también tiene una forma pedagógica. Anclar un modelo en sus propios ejemplos resueltos y rúbricas es lo que lo mantiene dentro del [[scaffolding|andamiaje]] que usted diseñó, respondiendo al nivel que usted fijó en lugar de derivar hacia consejos genéricos. Esa deriva es la queja más común sobre los tutores comerciales, y es un problema de recuperación más a menudo que un problema de pesos.

## Escriba el prompt contra su rúbrica y vigile la meseta

El trabajo de prompts no es un preliminar que se hace mientras se espera la GPU. Dos resultados muestran lo que logra por sí solo:

- **El prompting guiado por rúbrica, co-refinado de forma iterativa, elevó la concordancia entre el LLM y el humano en trabajos de diseño de estudiantes del 54,75% al 81,25%** (alfa de Cronbach de 0,393 a 0,798), sin ningún ajuste fino ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Un prompt personalizado anclado en la literatura provocó los [[misconceptions|conceptos erróneos]] matemáticos objetivo con una presencia de **0,98**, frente a **0,40** de un prompt amplio ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

La señal práctica es la **meseta**. En el estudio de generación de ítems, el refinamiento iterativo del prompt dejó de mejorar, y el ajuste fino de GPT-4.1 *sobre el prompt optimizado* añadió entonces la ganancia restante ([[gpt-item-generation-l2-listening-2026]]). Una meseta tras un trabajo real de prompts es evidencia de que el entrenamiento tiene margen para añadir algo. Recurrir al entrenamiento antes de llegar a una es adivinar, y adivinar cuesta un mes.

Fíjese en lo que el resultado de generación de ítems implica sobre la secuencia. El ajuste fino se construyó sobre el prompt optimizado, así que el trabajo de prompts no se desperdició cuando el equipo acabó entrenando. El peldaño barato es también la especificación del caro.

## Adapte los pesos cuando el objetivo sea estable y estrecho

La adaptación compensa cuando usted necesita que el modelo mantenga una propiedad de forma fiable: un nivel de lectura, un formato de salida, un dominio que le falta. El resultado recurrente es que **apuntar bien vence al tamaño**.

- Tres modelos de **8B** ajustados con un currículo de lectura infantil diseñado por expertos superaron a GPT-4o y Llama 3.3 70B en modo zero-shot en las métricas relacionadas con la dificultad, con problemas de seguridad insignificantes. Los autores lo enmarcan como **controlabilidad por encima de la escala** ([[llm-children-reading-story-generation]]).
- Un conjunto de datos de instrucciones de **24.795 ejemplos**, anclado en los Sistemas de Conocimiento Indios, produjo un ajuste fino de **7B** que puntuó **6,39** en un panel externo de cinco jueces, a **0,15** de un modelo de referencia general potente y por una fracción del costo de despliegue. El mismo modelo base puntuó **cerca de cero en las dimensiones específicas del dominio** sin el ajuste fino ([[iks-instruct-dataset-indian-knowledge]]). Esa brecha entre ser competente en general y ser competente aquí es todo el argumento a favor de la adaptación al dominio.
- Un único adaptador de [[llm-training-and-fine-tuning|LoRA]] entrenado con unos **3.900** ejemplos calificados agrupados llevó a cinco modelos abiertos pequeños (de 4B a 30B) a la paridad o a superar a un calificador humano en dos exámenes de informática ([[llm-graders-computer-science-exams-2026]]). Un adaptador, un conjunto de datos, varios modelos base: esa es la forma de despliegue que un equipo pequeño puede sostener.

La palabra *estable* del encabezado es la que carga el peso. El formato, la rúbrica, el nivel de lectura y el vocabulario del dominio son objetivos estables. La prosa cargada de juicio no tiene un objetivo así, y ahí es donde falla la adaptación, como muestran las dos secciones siguientes.

## Cambie el comportamiento cuando las respuestas son el problema

La adaptación enseña al modelo *qué producir*. El postentrenamiento le enseña *cómo comportarse*. Para la tutoría esa distinción es todo el problema: los modelos generales se postentrenan con la preferencia humana por la utilidad, lo que significa responder con prontitud, y enseñar exige retener la respuesta.

Los resultados educativos más sólidos de este corpus están aquí. El modelo de recompensa de EduQwen priorizó explícitamente **las respuestas que guían frente a las respuestas directas**, y su canalización de tres etapas alcanzó el **96,52%** en el benchmark CDPK frente al **90,55%** de Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). El simulador de escritura de SWIM pasó del prompting anclado en rúbrica (mejor QWK **0,577**) al ajuste fino supervisado (**0,474 ± 0,023**) y al aprendizaje por refuerzo (**0,618 ± 0,005**) en todos los rasgos y prompts ([[swim-student-writing-simulation-2026]]).

Lea con cuidado los números de SWIM, porque el paso intermedio fue hacia atrás. El ajuste fino supervisado con demostraciones empeoró al simulador respecto del prompt con el que partió, y solo la señal de recompensa recuperó la pérdida y luego superó la línea base. Si su plan se detiene en el ajuste fino supervisado, el plan puede ser un desvío.

## Supervise a nivel de paso

Hay un hallazgo fácil de pasar por alto y caro de ignorar: **la calidad de la supervisión vence a la cantidad de supervisión**. Los modelos ajustados con instrucciones aprendieron conceptos erróneos de álgebra solo cuando se entrenaron con **trazas de solución a nivel de paso**. Entrenados solo con las respuestas finales, la exactitud se mantuvo **por debajo del 30% en todos los tamaños de datos** ([[misconception-acquisition-dynamics-llms-2026]]).

Si sus ejemplos de entrenamiento son pares de pregunta y respuesta correcta, está entrenando algo distinto de lo que necesita, y añadir ejemplos no lo reparará. Lo que necesita es el trabajo intermedio: el giro equivocado, el paso en el que el estudiante se desvió, la corrección. Recoger eso es un problema de ingeniería de datos con una restricción pedagógica, y normalmente significa registrar sesiones en lugar de extraer claves de respuestas.

## Dónde falla la adaptación en silencio

Esta es la parte que el entusiasmo se salta.

**Texto cargado de juicio.** En WrAFT, el mismo proyecto que se ajustó con éxito para *puntuar* ensayos (QWK 0,84) produjo una salida truncada e ininterpretable cuando se ajustó para la *retroalimentación*, mientras que preguntar directamente a Claude 3.7 produjo la retroalimentación que los docentes valoraron mejor ([[wraft-automated-writing-evaluation-argumentative-2026]]). El ajuste fino enseñó al modelo a dar con una puntuación, y puntuar fue lo único que aprendió.

**Transferencia entre modelos.** La escala no es un predictor fiable del rendimiento posterior bajo adaptación LoRA, y **unos hiperparámetros idénticos produjeron comportamientos cualitativamente distintos entre arquitecturas** ([[aiawe-automated-writing-evaluation]]). Una receta que funcionó en un modelo no es una receta.

**La arquitectura pesa más que el número de parámetros.** El ajuste fino de tres modelos abiertos de texto a imagen con 1.000 imágenes de ingeniería nuclear con leyenda mejoró sustancialmente Stable Diffusion XL, dio ganancias limitadas con SD-v3.5-Medium y no produjo **ninguna mejora medible en Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**El problema era la validación.** Un GPT-4 de frontera sin entrenar produjo aproximadamente un **35%** de pistas demasiado generales, incorrectas o que revelaban la respuesta al redactar retroalimentación de tutoría, y sus propias comprobaciones automáticas de calidad discreparon del juicio humano ([[reddig-maclellan-personalized-feedback-llm-2026]]). Eso es un problema de filtrado, y un LoRA no lo resolverá.

El patrón en los cuatro casos: la adaptación mueve de forma fiable un modelo hacia un objetivo que usted puede especificar y puntuar. No añade juicio, y una canalización que carece de una comprobación seguirá entregando salidas malas.

## Presupueste la adaptación con honestidad

Para el peldaño de adaptación el listón es más bajo de lo que la mayoría de los equipos supone: **unos cientos o unos miles de ejemplos y una sola GPU**. LoRA entrena un número pequeño de parámetros añadidos y deja congelados los pesos base, así que se pueden servir varios modelos desde un solo adaptador.

El rango es un compromiso y no un dial que haya que maximizar. La ganancia por millón de parámetros del adaptador caía de forma monótona a medida que subía el rango, y la alineación a nivel de curso era una decisión de escala y rango y no una mejora gratuita ([[lora-finetuned-control-systems-course-qa-2026]]).

Qué capas adapta también es una elección real. Actualizar **solo las cuatro últimas capas Transformer** de un analizador de discurso basado en BERT superó tanto a adaptar solo la capa superior como al ajuste fino a profundidad completa ([[bert-discourse-english-teaching-2026]]). Tres configuraciones, tres resultados distintos, y ganó la más barata.

El costo fácil de subestimar es la evaluación, que es mayor que la factura de cómputo. Véase [[checking-whether-educational-ai-works|¿Cómo sabemos que una IA educativa funciona correctamente y no solo que puntúa bien?]]

## Calibre lo que espera

La elección de modelo y de prompt juntas explican solo alrededor del **15%** del desajuste entre los LLM y las ganancias de aprendizaje del estudiantado, y en ese estudio la ponderación por benchmark y los conjuntos de voto unánime hicieron la alineación *peor* ([[educational-llm-alignment]]). Los datos de preentrenamiento son la palanca dominante sobre cómo se comporta un modelo, y es la única palanca que usted no puede mover.

Nada de eso argumenta contra el trabajo anterior. Argumenta contra esperar que un ajuste fino arregle un problema de diseño. Si el problema es que su tutor responde con demasiada facilidad, el entrenamiento puede abordarlo. Si el problema es que sus estudiantes no se implican con él, el entrenamiento no lo hará, y la cifra del 15% dice que el dinero está mejor empleado en otra parte.

## En qué se equivocan los equipos

El ajuste fino es cómo se le enseña a un modelo su curso. La recuperación sobre sus propios materiales llevó al mismo sistema del 52,3% al 66,6% sin entrenamiento alguno, y un prompt refinado contra una rúbrica movió la concordancia del 54,75% al 81,25%. El entrenamiento enseña comportamiento y formato con mucha más fiabilidad que contenido.

Un modelo base más grande elimina la necesidad de todo esto. Un modelo de 8B ajustado con un currículo de lectura infantil venció a GPT-4o y Llama 3.3 70B en modo zero-shot en las métricas de dificultad, y un ajuste fino de 7B quedó a 0,15 de una referencia general potente por una fracción del costo de despliegue. Tamaño y ajuste son ejes distintos, y solo uno de ellos se vende por token.

Más datos arreglarán un conjunto de entrenamiento mal construido. La supervisión solo con respuestas dejó la exactitud por debajo del 30% en todos los tamaños de datos del estudio sobre conceptos erróneos. La escala no repara un objetivo al que le falta la información que el modelo necesita.

Una receta que funcionó en un modelo funcionará en el siguiente. Unos hiperparámetros idénticos produjeron comportamientos cualitativamente distintos entre arquitecturas, y el mismo método de ajuste fino mejoró sustancialmente un modelo de imagen y no hizo nada medible con otro. Vuelva a ejecutar la receta en su modelo base o está adivinando.

El ajuste fino supervisado es el paso intermedio seguro antes del aprendizaje por refuerzo. En SWIM la etapa supervisada puntuó 0,474 frente a 0,577 del prompt al que reemplazó, y solo la señal de recompensa la recuperó. El paso intermedio puede costarle un mes y una regresión.

## Lo que le van a responder

**"El presupuesto está aprobado para el ajuste fino, así que hagamos el ajuste fino."** Dedique una semana primero a la línea base y al índice. Si la recuperación mueve el número, el ajuste fino es una decisión posterior tomada con mejor información, y tendrá un caso más sólido para hacerlo o una buena razón para devolver la GPU.

**"Nuestro problema es que los estudiantes no lo usan."** El entrenamiento cambia lo que produce el modelo. La cifra del 15% describe cuánto explican la elección de modelo y de prompt en el desajuste con las ganancias de aprendizaje, y la implicación queda fuera de eso. Mida dónde abandonan los estudiantes antes de comprar cómputo.

**"No podemos enviar el trabajo del estudiantado a la API de un proveedor."** El resultado de LoRA más sólido de esta página vino de modelos abiertos en el rango de 4B a 30B, y un solo adaptador sirvió a varios de ellos. Esa forma de despliegue está al alcance de un equipo con una GPU y sin un acuerdo de procesamiento de datos.

**"El prompting es un truco; el trabajo de verdad es entrenar."** La revisión de 23 estudios de enseñanza de la escritura encontró que el prompting era el enfoque dominante y que el ajuste fino iba por detrás, y la mayor ganancia reportada en esta página vino de un índice. Tanto la revisión como el estudio del asistente de curso ordenaron esos peldaños por ganancia medida.

**"Probamos el prompting y se estancó, así que necesitamos entrenamiento."** Esa es la lectura correcta, y es el único caso en el que la subida está justificada. Lleve el prompt optimizado al ajuste fino como hizo el equipo de generación de ítems, y espere que la ganancia sea menor de lo que fue el trabajo de prompts.

**"Nuestros materiales de curso son inconsistentes, así que la recuperación devolverá basura."** Lo hará, y la recuperación hereda la calidad del corpus. Limpiar el corpus es más barato que entrenar un modelo para sortearlo, y la ganancia del 52,3% al 66,6% se midió sobre materiales de curso ordinarios y no sobre un conjunto curado.

## Qué hacer esta semana

**1.** Ejecute una línea base solo de prompt y una línea base de palabras clave sobre 50 preguntas reales de su curso, y anote ambos números.

**2.** Apunte la recuperación a los materiales que ya tiene y vuelva a ejecutar las mismas 50, para que la ganancia se mida contra su propia línea base.

**3.** Ponga la rúbrica en el prompt del sistema e itere durante una semana. Pare cuando dos rondas no añadan nada.

**4.** Audite su conjunto de entrenamiento en busca de trazas a nivel de paso. Si son pares de pregunta y respuesta, el conjunto de datos no está listo.

**5.** Escriba la única propiedad que necesita que se mantenga de forma fiable, y decida si es comportamiento o contenido. Esa decisión elige el peldaño.

## Adónde ir después

[[training-ai-tutors-to-guide-rather-than-answer|¿Cómo entrenamos a un tutor de IA para que guíe a los estudiantes en lugar de responderles?]] cubre en detalle la mitad del postentrenamiento. [[checking-whether-educational-ai-works|¿Cómo sabemos que una IA educativa funciona correctamente?]] cubre cómo saber si algo de esto funcionó. [[developing-ai-tutor|¿Cuáles son las mejores prácticas para desarrollar un tutor de IA eficaz?]] es el lado del diseño de la interacción del mismo objetivo, y [[designing-educational-ai-software|¿Cuáles son las mejores prácticas para diseñar software de IA educativa?]] cubre el sistema que lo rodea. La página de concepto completa es [[llm-training-and-fine-tuning]].
