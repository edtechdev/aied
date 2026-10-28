---
title: "¿Cómo entrenamos a un tutor de IA para que guíe a los estudiantes en lugar de responderles?"
created: "2026-10-02T09:08:04-04:00"
updated: "2026-10-28T13:39:43-04:00"
weight: 72
type: faq
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
source_updated: "2026-10-28T11:26:02-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
reviewed_by: [editor]
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

Su tutor regala la respuesta. La demostración no lo mostró, porque la pregunta era fácil y el estudiante colaboraba. Los registros del pilotaje sí: un estudiante pregunta dos veces, el modelo reformula el método y luego lo resuelve. Un docente observa una sesión y dice que es un chatbot con voz amable. Ahora usted decide si dedicar un cuarto del tiempo de ingeniería al post-entrenamiento o lanzar el producto con un mejor prompt de sistema.

La respuesta breve: las indicaciones no eliminan el tirón hacia responder, porque la utilidad es lo que el modelo base fue entrenado para producir. Si el comportamiento de guiar es el producto, hay que entrenarlo, y la variable que decide el resultado es la **recompensa**. Escriba la recompensa contra un benchmark, incluya razonamiento a nivel de paso en los datos de entrenamiento y juzgue el entrenamiento por el siguiente movimiento pedagógico que elige el modelo.

## La versión breve

**1.** Compruebe si la indicación sobrevive a la presión antes de concluir que basta con indicaciones. El fallo que hay que buscar es que el modelo dé la razón a un estudiante equivocado.

**2.** Escriba la recompensa como una especificación del comportamiento que quiere, con los negativos duros excluidos, y luego compruebe qué optimizó en realidad.

**3.** Entrene con trazas a nivel de paso. Un corpus de pares de pregunta y respuesta correcta no puede enseñar a un modelo a ver dónde se equivocó un estudiante.

**4.** Prefiera el aprendizaje por refuerzo a la imitación cuando importa el juicio, y conserve las puntuaciones de las etapas intermedias.

**5.** Haga que la recompensa sea lo bastante densa para activarse en la mayoría de las respuestas, y ejecute la evaluación sobre conversaciones completas.

## Compruebe si la indicación sobrevive a la presión

El [[prompt-engineering|prompting]] y el entrenamiento general de alineación dejan un tirón hacia el acuerdo. La [[contextual-sycophancy-ai-literacy|sycophancy contextual]] persiste después de ambos, y los errores del estudiantado siguen propagándose al consejo de la IA.

EduFrameTrap añade el detalle que importa para una decisión de producto. Los modelos que resisten ataques de cambio de contexto se rinden igualmente ante la presión de autoridad o socioafectiva y omiten la retroalimentación correctiva, y por eso sus autores sostienen que el comportamiento "amable pero correcto" debería ser un **requisito explícito de entrenamiento** y no una preferencia ([[eduframetrap-llm-sycophancy-educational-safety]]).

Si el fallo de su tutor es dar la razón a una respuesta equivocada, pedirle que no lo haga es una mitigación. Ejecute primero la prueba de presión, registre dónde se rompe y use esa transcripción como argumento para el presupuesto de entrenamiento.

## Escriba la recompensa antes de recoger los datos

Una recompensa es una especificación comprimida de lo que usted quiere, y los modelos optimizan lo que realmente se escribió. Eso convierte el diseño de la recompensa en la decisión que fija el techo de todo lo que viene después.

El modelo de recompensa de EduQwen **priorizó las respuestas que guían frente a las respuestas directas**, con minería de negativos duros para excluir las preguntas que el modelo base ya resolvía, y con trayectorias de muestreo ampliadas de 5 a 8 pasos para que se capturaran las decisiones pedagógicas de varios pasos. Su canalización de tres etapas, primero RL, después SFT sintético y una ronda final de RL, alcanzó el **96,52%** en el benchmark CDPK frente al **90,55%** de Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

De ahí se siguen dos cosas. Cuente con que la recompensa se exploite, porque especifica menos de lo que usted quería, así que escríbala contra un benchmark y no contra una intuición. Y conserve los números intermedios: solo la primera etapa de RL llegó al 94,13%, el SFT sobre 40.000 respuestas autogeneradas la llevó al 96,20%, y la ronda final añadió la última fracción. La mayor parte de la ganancia llegó pronto, lo cual es útil cuando alguien pregunta si la última etapa valió su costo.

## Haga que la recompensa se active con la frecuencia suficiente para enseñar

Una recompensa de coincidencia exacta es demasiado escasa cuando lo que le importa tiene varias dimensiones. El simulador de escritura de SWIM muestra la progresión con claridad: la indicación anclada en rúbrica alcanzó un QWK medio del mejor rasgo de **0,577** con Claude Sonnet y de **0,422** con GPT-5.4, casi cero en un modelo abierto de 7B; el ajuste fino supervisado llegó a **0,474 ± 0,023** con ese modelo de 7B; y GRPO con una recompensa densa de exactitud normalizada por rasgo llegó a **0,618 ± 0,005** en todos los rasgos y prompts ([[swim-student-writing-simulation-2026]]).

El diseño de la recompensa produjo esa brecha. Una señal densa normalizada por rasgo supera a la coincidencia exacta en un entorno de varios rasgos, y si su recompensa solo se activa con una respuesta perfecta, la mayor parte de su señal de entrenamiento es silencio.

## Ponga el razonamiento en los ejemplos

El hallazgo más accionable de este ámbito tiene que ver con lo que deben contener los datos de entrenamiento. Los modelos ajustados con instrucciones aprendieron concepciones erróneas de álgebra solo cuando se entrenaron con **trazas de solución a nivel de paso**. Entrenados solo con respuestas finales, la exactitud se mantuvo **por debajo del 30% en todos los tamaños de datos** ([[misconception-acquisition-dynamics-llms-2026]]).

Dos detalles de ese estudio importan a quien construye cualquiera de los dos roles de un tutor. El rol de estudiante sobregeneralizó el error aprendido hasta que se mezclaron ejemplos correctos en proporciones tan bajas como **uno de cada cuatro**. El rol de tutor no mostró ese costo y mantuvo una exactitud correcta **del 93% al 98%** en diez concepciones erróneas entrenadas conjuntamente.

Un conjunto de datos de pares de pregunta y respuesta correcta no puede enseñar a un modelo a advertir dónde se equivocó un estudiante. Si usted entrena un tutor para diagnosticar, los ejemplos necesitan el razonamiento.

## Elija la señal de entrenamiento que corresponda al juicio

El ajuste fino supervisado enseña al modelo a imitar sus demostraciones. Eso basta para el formato y no basta para el juicio. LearnLM formula el hallazgo de manera explícita: **el RL es sustancialmente más eficaz que el SFT por sí solo para seguir instrucciones pedagógicas matizadas en conversaciones largas** ([[learnlm-improving-gemini-learning]]).

Su enfoque condicionado por instrucciones permite que desarrolladores y docentes especifiquen el comportamiento del tutor sin comprometerse con una única definición de pedagogía, y el co-entrenamiento lo mezcla en las etapas de post-entrenamiento de Gemini. Los expertos lo prefirieron frente a GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) y Gemini 1.5 Pro base (**+13%**).

La lectura práctica: si su fallo es un tono equivocado o un formato ausente, el SFT es la vía barata. Si su fallo es elegir el movimiento pedagógico equivocado en el turno doce, la señal tiene que recompensar esa elección.

## Etiquete cada ejemplo con el comportamiento que enseña

Si la supervisión tiene que contener razonamiento, el esquema de etiquetado es una decisión de currículo. Un estudio sobre etiquetas de supervisión encontró que asignar a cada ejemplo de entrenamiento un único comportamiento objetivo, entre competencia en la materia, anclaje curricular, razonamiento diagnóstico y andamiaje, elevó las puntuaciones en todos los tamaños de modelo probados, con las mayores ganancias en andamiaje y en el uso del historial del estudiante. El diagnóstico del estado de conocimiento siguió siendo el comportamiento más débil, con **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). El diagnóstico es el elemento más difícil de esa lista, así que presupueste para él.

La selección de datos es un problema de entrenamiento en sí mismo. Edu-QuRating adapta la destilación de preferencias a la curación de datos educativos y sustituye una única puntuación de "¿esto es educativo?" por **20 dimensiones de rúbrica** que cubren exactitud fáctica, estructura pedagógica e idoneidad de nivel ([[garrod-edu-qurating-educational-data-curation-2026]]). Si usted está reuniendo un corpus a partir de texto web, ese filtro decide cómo va a sonar su modelo.

## Elija la apuesta de datos que pueda costear

Dos apuestas opuestas definen el espacio, y cuál tome depende de lo que ya tenga.

Cuando sus datos son escasos, el post-entrenamiento condicionado por instrucciones sostiene el comportamiento. LearnLM usa instrucciones de nivel de sistema que permiten a docentes y desarrolladores especificar el comportamiento del tutor, y se apoya en el co-entrenamiento en lugar de en un gran corpus de transcripciones de tutoría.

Cuando tiene datos de interacción auténticos, el ajuste fino sobre ellos gana. TeachLM apuesta a que la [[prompt-engineering|ingeniería de indicaciones]] es un paliativo y que el ingrediente escaso es la interacción real entre estudiante y tutor. Entrenado con **100.000 horas** de sesiones individuales bajo un anonimizado riguroso, duplica el tiempo de habla del estudiante, mejora el estilo de preguntar y aumenta los turnos de diálogo en un **50%** ([[teachlm-post-training-llms-education]]).

Una vía más barata es la destilación. Pedagogy-R1, con 1.5B y 7B, se ajustó con instrucciones sobre salidas filtradas pedagógicamente y destiladas de un maestro QwQ-32B, junto con prompts de Cadena de Pedagogía ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Entrene la decisión con la que se encuentra el estudiante a continuación

El post-entrenamiento no tiene por qué moldear solo lo que dice el modelo. TACT post-entrenó a un tutor con una taxonomía de 13 estrategias más una taxonomía de movimientos del estudiante de dos ejes y ganó **20,30 puntos** sobre su modelo base Qwen3.5-4B, con un benchmark de diagnóstico que **oculta las etiquetas de estado del estudiante** disponibles durante el entrenamiento, de modo que el modelo tiene que inferir el estado a partir del diálogo ([[tact-pedagogically-adaptive-esl-tutoring]]).

La misma lógica recorre la alineación en [[special-education|educación especial]] ([[special-r1-rl-special-education]]) y el trabajo de RL heurístico que alinea modelos como guías socráticos en lugar de respondedores ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Una plataforma va más lejos y entrena la política en lugar de la prosa: un agente de aprendizaje por refuerzo elige el siguiente problema de práctica, de modo que lo que el estudiante hace después lo decide el modelo entrenado ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Ese último caso es la prueba de si usted ha diseñado un tutor o un generador de texto. Si la única salida del modelo es prosa, la pedagogía vive en su código de orquestación. Si el modelo elige la siguiente tarea, la pedagogía está en los pesos.

## Pruébelo a la longitud de una conversación

El entrenamiento no hace que un modelo sea seguro a lo largo de una conversación larga. SafeTutors muestra que incluso los modelos pedagógicos especializados se degradan en el diálogo sostenido y pueden incurrir en daños por divulgación excesiva de respuestas ([[hazra-safetutors-pedagogical-safety-2026]]). La [[pedagogical-safety|seguridad pedagógica]] tiene que medirse a la longitud de una conversación, incluidos los turnos en los que el estudiante se equivoca, insiste o presiona.

## En qué se equivocan los equipos de entrenamiento

Más indicaciones acabarán funcionando. La sycophancy persiste después de las indicaciones y de la alineación, y la presión de autoridad reabre el comportamiento que una prueba de cambio de contexto había cerrado. La transcripción de su propia prueba de presión es la evidencia de esto en su producto.

El número de la tabla de clasificación es el resultado. El 96,52% en CDPK describe el desempeño en las tareas pedagógicas de un benchmark. Sus estudiantes se encuentran con su currículo, su notación y un estudiante que lleva veinte minutos atascado.

Más datos son la respuesta cuando las trazas son escasas. Las respuestas finales, con cualquier tamaño de datos, mantuvieron la exactitud en concepciones erróneas por debajo del 30%. Lo que cambió el resultado fue el razonamiento a nivel de paso en los ejemplos; el tamaño del corpus nunca lo movió.

El rol de estudiante es la parte difícil, así que entrénelo al final. El estudiante sobregeneralizó los errores aprendidos hasta que aparecieron ejemplos correctos en uno de cada cuatro. El rol de tutor se mantuvo entre el 93% y el 98% en las mismas condiciones, lo que sugiere que el tutor es la mitad más fácil de entrenar y el simulador es lo que hay que comprobar.

El punto de control final es el resultado. La primera etapa de RL llegó al 94,13% y el SFT la llevó al 96,20%, así que la mayor parte del movimiento ocurrió antes de la última ronda. Conserve las puntuaciones por etapa: dicen qué etapa se ganó la mejora y cuál podría recortar la próxima vez.

## Lo que le van a responder

**"No podemos costear el RL."** Entonces empiece por las partes que no cuestan nada: trazas a nivel de paso en sus datos, una etiqueta de comportamiento objetivo por ejemplo y una recompensa que haya escrito en palabras antes de escribirla en código. La comparación de SWIM muestra que el SFT por sí solo lleva un modelo de 7B a 0,474, lo que es una ganancia real y aún está por debajo de 0,618.

**"El modelo de nuestro proveedor ya se niega a dar respuestas."** El post-entrenamiento del proveedor optimiza la utilidad, y negarse a responder no es lo que las puntuaciones de utilidad recompensan. Pruebe el comportamiento en sus propias conversaciones; la respuesta está en la transcripción, no en la ficha del modelo.

**"La destilación nos lleva casi hasta el final."** Pedagogy-R1 es una destilación de 1.5B y 7B y es un punto de partida razonable. Lo que hereda es la pedagogía del maestro, incluido todo aquello en lo que ese maestro se equivocó, y necesitará un benchmark para ver qué partes se transfirieron.

**"Probar conversaciones largas es demasiado caro para hacerlo a menudo."** Hágalo una vez por cada cambio de modelo, con un guion fijo y un conjunto fijo de turnos adversarios, y compare las transcripciones. El costo está en escribir el guion la primera vez.

**"El docente dijo que parece un chatbot."** Eso es un informe sobre la forma de la conversación, y la forma de la conversación es una política. Cuente cuántos turnos pasan antes de que el modelo entregue un paso.

## Qué hacer esta semana

**1.** Ejecute la prueba de presión: respuesta equivocada, el estudiante insiste, el estudiante cita a una autoridad, el estudiante pide la respuesta. Guarde la transcripción.

**2.** Escriba su recompensa como tres frases en lenguaje natural y luego compruebe si su código mide esas tres cosas.

**3.** Audite una muestra de sus ejemplos de entrenamiento en busca de razonamiento a nivel de paso. Informe de la proporción que contiene un paso equivocado y un diagnóstico de él.

**4.** Añada una etiqueta de comportamiento objetivo por ejemplo, empezando por el andamiaje, y registre la distribución.

**5.** Ponga las puntuaciones de las etapas intermedias en la ficha del modelo junto a la final.

## Adónde ir después

[[making-ai-better-at-supporting-learning|¿Cómo podemos hacer que la IA apoye mejor el aprendizaje en nuestra propia materia?]] pregunta si el entrenamiento es siquiera la palanca adecuada, y [[developing-ai-tutor]] cubre la contraparte de diseño de la interacción, que consigue el mismo comportamiento de guiar a partir del andamiaje y las escaleras de pistas en lugar de los gradientes. [[checking-whether-educational-ai-works]] cubre la medición de si el comportamiento cambió realmente, y [[llm-training-and-fine-tuning]] es la página de concepto que hay detrás de todo esto.
