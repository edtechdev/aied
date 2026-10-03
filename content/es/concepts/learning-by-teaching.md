---
title: Aprender enseñando
created: "2026-09-28T19:11:16-04:00"
updated: "2026-10-02T23:51:29-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
translation_of: concepts/learning-by-teaching
source_updated: "2026-10-01T18:49:55-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Aprender enseñando (LbT, por learning by teaching)** — el marco instruccional, fundamentado en el efecto protégé, en el que el estudiantado profundiza su comprensión explicando el material a un par, a una persona tutorada o a un agente. Décadas de trabajo en LbT y tutoría entre pares muestran que explicar conceptos, anticipar malentendidos y responder a preguntas consolida la comprensión y favorece la transferencia. En la era de la IA, los **agentes enseñables** —y cada vez más los **LLM configurados como personas tutoradas novatas**— operacionalizan el LbT a escala, situando al estudiantado como instructor que debe explicar, corregir y rellenar lagunas.

## Preguntas para reflexionar

- Recuerde alguna vez en que entendió algo de verdad solo después de explicárselo a otra persona. ¿Qué ocurría mentalmente y por qué cree que enseñar produce una comprensión más profunda que estudiar en solitario?
- Una idea común es que enseñar es cosa de expertos y que quien es novato no tiene nada que aportar. Sin embargo, «aprender enseñando» se apoya en la premisa contraria: prepararse para enseñar obliga a organizar el conocimiento y a encontrar las propias lagunas. ¿Cómo replantea eso quién se beneficia de enseñar?
- La página describe «agentes enseñables»: software al que el estudiantado enseña como parte de su aprendizaje. Con un LLM, se puede configurar un chatbot como una persona tutorada novata y falible que hace preguntas y comete errores. ¿Qué habría que diseñar en esa persona tutorada para que realmente mejore el aprendizaje y no sea solo una charla?
- Un reto es la «falibilidad de ingeniería»: los modelos de IA están entrenados para dar respuestas expertas y fluidas, lo contrario del novato que lucha, que es lo que quiere el paradigma de aprender enseñando. ¿Por qué podría ser más eficaz para el aprendizaje una persona tutorada propensa a errores que una correcta?
- Un agente enseñable basado en ChatGPT mejoró el aprendizaje, pero su tendencia a generar código correcto limitó la práctica de corrección de errores. ¿Cómo podría una herramienta que siempre da la respuesta correcta perjudicar precisamente a quien aprende y necesita practicar la detección y la corrección de errores?
- Si tuviera que diseñar una actividad de aprender enseñando para su propia clase, ¿qué haría que la tarea de enseñar fuera lo bastante *consecuente* como para que el estudiantado se esforzara de verdad en lugar de copiar y pegar una respuesta?

## Introducción

Aprender enseñando es el hallazgo, que suele remontarse al efecto protégé, de que prepararse para enseñar —y explicar de verdad a otra persona o a un agente enseñable— produce un procesamiento más profundo que estudiar en solitario. Las exigencias de la enseñanza obligan a quienes aprenden a organizar el conocimiento, anticipar [[misconceptions|malentendidos]] y generar explicaciones, lo que saca a la luz lagunas en su propia comprensión y refuerza la [[metacognition|metacognición]]. La IA entra en la idea desde ambas direcciones: los [[intelligent-tutoring|sistemas de tutoría]] y los agentes enseñables pueden hacer de estudiante, mientras que una literatura creciente se pregunta qué ocurre con el aprendizaje cuando es la máquina, y no quien aprende, la que aporta la explicación ([[generative-ai|IA generativa]], [[cs-education|enseñanza de la informática]]).

## El efecto protégé

Aprender enseñando se apoya en el hallazgo de que prepararse para enseñar y explicar de verdad a otra persona produce un procesamiento más profundo que estudiar en solitario. Las exigencias de la enseñanza —articular ideas, anticipar malentendidos y responder preguntas— obligan a quienes aprenden a organizar el conocimiento, identificar lagunas en su propia comprensión y generar explicaciones que favorecen la retención y la transferencia. Los beneficios son más evidentes en contextos de [[collaborative-learning|aprendizaje colaborativo]] y en dominios bien estructurados que admiten agentes enseñables (por ejemplo, Betty's Brain). El efecto protégé nombra el mecanismo: el estudiantado se esfuerza más y reflexiona más profundamente cuando se siente responsable de enseñar algo, de modo que aclara sus [[misconceptions|ideas erróneas]] y rellena lagunas mediante la explicación y la [[metacognition|metacognición]].

## Agentes enseñables: de basados en reglas a conversacionales

Los **agentes enseñables** son los sistemas de software mediante los cuales se operacionaliza el aprender enseñando: quien aprende enseña a un sistema como parte de su aprendizaje. Los agentes enseñables tradicionales se basaban en reglas o en recuperación y solo podían responder a comandos limitados; su limitación clave era la incapacidad de mantener un diálogo en lenguaje natural. Los [[llm|grandes modelos de lenguaje]] cambian esto: pueden adoptar roles de forma flexible mediante [[prompt-engineering|prompts]], incluido el rol de una «persona tutorada» que hace preguntas o comete errores, y mantener un diálogo abierto, lo que hace posible el LbT en dominios menos estructurados (escritura, vocabulario) de lo que antes era posible.

La base de evidencia de la base de conocimiento sitúa este giro en los **agentes enseñables conversacionales basados en LLM**:

- **ChatGPT como agente enseñable** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al.]]) apoya el LbT en programación y mejora las ganancias de conocimiento, la capacidad de programación y el [[self-regulated-learning|aprendizaje autorregulado]], aunque su tendencia a generar código correcto limita la práctica de corrección de errores.
- **Explique a escala** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al.]]) desplegó un agente enseñable de IA (Algorithm Apprentice) con 546 estudiantes a lo largo de un semestre de 11 semanas y encontró que el diálogo orientado a la explicación predice menos envíos incorrectos de cuestionarios, mientras que la reutilización de contenido externo predice más.
- **Enseñanza de vocabulario** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et al.]]) usó un LLM como estudiante para generar preguntas dinámicas, mejorando la retención a los 3 y a los 7 días.

## La falibilidad de ingeniería: los LLM como personas tutoradas novatas

Un reto central de diseño para los agentes enseñables basados en LLM es que los LLM están entrenados para producir por defecto respuestas fluidas de nivel experto, lo contrario del novato falible que quiere el paradigma del LbT. Convertir un LLM en una buena persona tutorada exige **falibilidad de ingeniería**:

- **Los errores generados pueden pasar por auténticos.** En un estudio de anotación a ciegas, especialistas clasificaron erróneamente 164 de 196 (83,7%) entregas de Java generadas por LLM como escritas por personas, de modo que una persona tutorada puede aportar errores realistas para depurar en lugar de solo código correcto ([[simulating-students-java-programming-errors-llms|Keramati et al. (2026)]]).

- **[[prompting-teachability-novice-personas-lbt-2026|Prompts para la enseñabilidad]]** (Miller y Bosch) encontró que los prompts basados en restricciones que fuerzan explícitamente la producción de errores (por ejemplo, «responde de forma incorrecta» o «equivócate en 2–3 cosas») provocan un comportamiento propio de novato de forma mucho más fiable que los prompts basados en personajes, en ideas erróneas o en incertidumbre.
- **[[socrates-students-instructors-llms-lbt-2025|Lagunas de conocimiento de ingeniería]]** (Yang et al.) diseñan problemas que el LLM no puede resolver sin un conocimiento que solo posee el estudiante, lo que convierte la enseñanza en una necesidad y contrarresta la dependencia excesiva y pasiva del uso del LLM como tutor.
- **Las restricciones del aprendiz de Explique** (Wang et al.) instruyen a la persona tutorada para que (a) siga siendo novata, (b) siga pidiendo aclaraciones hasta que la explicación del estudiante sea precisa y (c) nunca revele la explicación objetivo, y para que *resista* a quienes intentan invertir los roles y hacer que la persona tutorada explique a cambio.
- **El desaprendizaje como vía al nivel de pesos para la falibilidad.** El desaprendizaje automático suprime 16 componentes de conocimiento objetivo en Mistral-7B, y la precisión cae de alrededor de 0,75 con una ratio de olvido del 10% a por debajo de 0,5 con el 40%, mientras que el modelo base se mantenía cerca de 0,85. El conocimiento suprimido reapareció mediante reaprendizaje supervisado y diálogo guiado por la persona que enseña, así que el nivel de conocimiento de la persona tutorada es un dial y no una afirmación ([[simulating-novice-students-machine-unlearning-2026|Song, Guo y Lin, 2026]]).

## Preguntar, autorregulación y aprendizaje activo

Dos prestaciones más se repiten en toda la base de conocimiento:

- **Las preguntas identifican lagunas de conocimiento.** Los sistemas de LbT usan preguntas generadas por quien aprende para exponer lagunas y reforzar la comprensión, y [[teaching-ai-vocabulary-lbt-llms-2026|las preguntas generadas por LLM]] sustituyen a los generadores rígidos basados en plantillas.
- **La explicación inversa saca a la luz lo que la aclaración pasa por alto.** En un sistema de repaso posterior a la clase con 22 participantes, la explicación inversa reflexiva de un agente par expuso de forma consistente las brechas entre lo que quienes aprendían creían entender y lo que podían articular, algo que la aclaración anclada en la clase por sí sola no había revelado ([[knowloop-confusion-to-consolidation-2026|Fang y Reidsma (2026)]]).
- **El LbT ofrece [[scaffolding|andamiaje]] para la autor[[regulation|regulación]].** Enseñar a un [[conversational-ai|agente conversacional]] fomenta la [[self-efficacy|autoeficacia]] y la puesta en práctica de estrategias de aprendizaje autorregulado, y conecta el LbT con las [[desirable-difficulties|dificultades deseables]]: el acto esforzado de explicar y corregir es en sí mismo una lucha productiva que la eliminación de fricción de la IA borraría de otro modo.
- **Lo que predice el aprendizaje de quien tutoriza es la construcción de conocimiento, no el conocimiento previo.** En 23 tutorizadores de secundaria, la proporción de respuestas que construían conocimiento en lugar de repetirlo predijo las puntuaciones del postest conceptual (β = .138, p < 0,05), mientras que las puntuaciones previas no predijeron quién las producía, y los tutorizadores con conocimientos previos bajos que construían conocimiento terminaron a la par que sus pares con conocimientos previos altos ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).

## Por qué importa en la educación con IA

Aprender enseñando es la contraparte constructiva y de [[active-learning|aprendizaje activo]] del patrón dominante del LLM como tutor. Donde un tutor da respuestas (y arriesga una [[cognitive-offloading|dependencia excesiva]]), una configuración de LbT convierte al estudiante en docente, forzando la explicación, la detección de lagunas y la construcción de conocimiento. Esto sitúa el LbT como una estrategia clave para convertir la [[generative-ai|IA generativa]] de una muleta en una herramienta para un aprendizaje más profundo, y lo conecta con las [[desirable-difficulties|dificultades deseables]], el [[active-learning|aprendizaje activo]] y la [[pedagogy|pedagogía]] [[constructivist|constructivista]].

## Poner en práctica el aprender enseñando

### Patrones de diseño para una persona tutorada de IA

La [[research-methods-aied|investigación]] anterior converge en unos pocos patrones reutilizables para convertir un LLM de experto por defecto en una persona tutorada productiva:

- **Prompts de novato basados en restricciones (los más fiables).** En lugar de pedir al modelo que «finja ser un estudiante confundido», fuerce explícitamente la falibilidad y un bucle de enseñanza, por ejemplo: *«Eres un estudiante novato que aprende sobre [concepto]. Pídeme que te lo enseñe. Haz preguntas de aclaración y equivócate deliberadamente en 2–3 cosas durante nuestra conversación. Nunca digas tú la respuesta correcta: espera a que yo explique y luego dime si tiene sentido.»*
- **La salvaguarda contra la enseñanza inversa.** Añada una regla según la cual la persona tutorada debe *negarse* a explicar la respuesta cuando el estudiante intente invertir los roles: *«Si te pido que resuelvas el problema o que expliques el concepto, recuérdame que yo soy el profesor y pídeme que lo explique yo.»* Explique muestra que esta resistencia es lo que preserva la interacción de LbT.
- **Lagunas de conocimiento de ingeniería.** Estructure la tarea para que el modelo *no pueda* responder sin información que solo posee el estudiante: su conocimiento se vuelve genuinamente necesario, no opcional. Esto convierte la interacción de una charla opcional en una enseñanza obligatoria.
- **Un criterio de éxito externo.** Dé a la enseñanza una consecuencia real: un cuestionario de control que solo se desbloquea después de que el estudiante enseñe con éxito (Explique), o una plataforma de evaluación de código que el estudiante deba hacer pasar a la salida del agente (Chen). La rendición de cuentas es lo que sostiene el esfuerzo genuino y evita que todo el ejercicio se convierta en una casilla que marcar.

### Consejos para el profesorado

- **Haga que la tarea de enseñar sea consecuente, no un relleno.** La evidencia más sólida de [[student-engagement|implicación]] procede de actividades que importan: Explique puso un cuestionario calificado detrás del ejercicio de enseñanza; Chen vinculó la salida de la persona tutorada con aprobar una plataforma de evaluación. Si enseñar es puramente opcional, el estudiantado se saltará racionalmente la parte difícil.
- **Dé al estudiantado un protocolo de enseñanza, no solo una ventana de chat.** Andamie la interacción con una estructura —«explica el concepto → da un ejemplo concreto → responde a las preguntas de la persona tutorada → comprueba la comprensión»— para que el diálogo abierto se convierta en una secuencia de enseñanza deliberada y no en una conversación sin rumbo.
- **Aborde de frente el volcado de contenido.** Explique encontró que el copiado y pegado directo de contenido externo pasó de menos del 15% a entre el 30% y el 35% de las interacciones al final del semestre. Explique al estudiantado por qué pegar frustra el propósito y considere un paso de rendición de cuentas (por ejemplo, «explica con tus propias palabras el malentendido del agente»).
- **Combine el LbT con la práctica de depuración.** Como la IA escribe código correcto, el estudiantado puede perder la práctica de corrección de errores. Pida deliberadamente a la persona tutorada que *implemente mal* algo, o siga la sesión de enseñanza con una tarea de búsqueda de errores, para que la depuración siga en el bucle.
- **Vigile el gradiente de esfuerzo.** Espere que la novedad se desvanezca; planifique variar los conceptos objetivo, añadir desafío o rotar qué estudiantes asumen el [[teacher-role|rol docente]] para sostener el esfuerzo cognitivo a lo largo de un curso.

### Consejos para quienes desarrollan

- **Prefiera restricciones duras antes que un personaje por sí solo.** Hacer prompts para «incertidumbre» o «un personaje de estudiante» no es fiable; fuerce explícitamente los errores y un bucle de aclaración. (Véase [[prompting-teachability-novice-personas-lbt-2026|los prompts para la enseñabilidad]].)
- **Construya un criterio de finalización.** Defina *cuándo ha explicado bastante el estudiante* (Explique usó una función de herramienta LLM ligada a los objetivos de aprendizaje del concepto) para que la interacción termine en comprensión y no en un límite de tiempo o un número fijo de turnos.
- **Registre y codifique el diálogo.** Explique usó detección de palabras por minuto más codificación semántica con LLM para clasificar las interacciones como detalladas, mínimas o con uso de contenido externo; esa señal es la forma de detectar la elusión y la caída de la implicación antes de que se conviertan en un problema.
- **Dé al profesorado un panel.** Las tasas de finalización y los patrones [[qualitative-research|cualitativos]] en las interacciones de enseñanza permiten a una persona intervenir cuando baja el esfuerzo (el profesorado de Explique supervisaba exactamente esto).

### Implicaciones y preguntas abiertas

- **El LbT es un antídoto escalable contra la dependencia excesiva de la IA**: invierte el rol de tutor y estudiante y mantiene a quien aprende cognitivamente activo, lo que importa más a medida que la IA se vuelve más fluida y más «servicial».
- **La falibilidad es una característica, no un defecto.** Una persona tutorada *demasiado* correcta elimina la corrección de errores y la detección de lagunas que hacen funcionar el LbT; diseñe para la lucha productiva y no en su contra.
- **Quedan preguntas abiertas:** ¿Cómo se sostienen las interacciones de LbT más allá de un semestre cuando la novedad se desvanece por completo? ¿Se transfiere el LbT a dominios no informáticos y menos estructurados a la misma escala? ¿Puede la codificación automatizada del diálogo convertirse en un monitor práctico de implicación en tiempo real para el profesorado? ¿Y cómo mantenemos el rol docente significativo para *cada* estudiante y no solo para unos pocos motivados?

## Conceptos conectados

- [[pedagogical-patterns]] — Explicar a una persona tutorada de IA: la secuencia mejor evidenciada de la base de conocimiento
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Marco general: pedagogías y estrategias de enseñanza en la educación con IA

## Artículos conectados

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT como agente enseñable en programación
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: agente enseñable para 546 estudiantes
- [[prompting-teachability-novice-personas-lbt-2026]] — Diseñar personajes novatos para la enseñabilidad
- [[socrates-students-instructors-llms-lbt-2025]] — Estudiantes como instructores de LLM (Sócrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Aprendizaje de vocabulario enseñando a la IA
- [[knowloop-confusion-to-consolidation-2026]] — Consolidación por explicación inversa en un sistema conversacional de repaso
- [[simulating-novice-students-machine-unlearning-2026]] — Desaprendizaje automático para mantener a una persona tutorada en un nivel de conocimiento novato, y reaprendizaje mediante el diálogo de enseñanza
- [[simulating-students-java-programming-errors-llms]] — Simular errores del estudiantado con LLM
- [[knowledge-building-tutor-learning-2026]] — las respuestas que construyen conocimiento, y no el conocimiento previo, predicen el aprendizaje de quien tutoriza
