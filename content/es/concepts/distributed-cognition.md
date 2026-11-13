---
title: Cognición distribuida
created: "2026-09-28T20:10:35-04:00"
updated: "2026-11-07T13:00:00-05:00"
type: concept
foundations: [agency, cognitive-offloading, human-ai-collaboration]
pedagogy: [distributed-cognition, embodied-learning, learning-theories, metacognition, situated-learning]
confidence: high
translation_of: concepts/distributed-cognition
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Cognición distribuida** — la perspectiva teórica según la cual la cognición no se limita a una mente individual, sino que se distribuye entre personas, herramientas, artefactos y entornos. En la [[research-methods-aied|investigación]] sobre IA en la educación, este marco se ha vuelto central para comprender la [[human-ai-collaboration|colaboración entre personas e IA]]: en lugar de considerar la IA una herramienta neutral que apoya a un estudiante por lo demás autosuficiente, la cognición distribuida entiende el pensamiento como algo que emerge de la interacción entre quienes aprenden, los sistemas de IA, sus pares y su contexto compartido. Reformula las cuestiones de [[agency|agencia]], responsabilidad y [[learning-gains|resultados de aprendizaje]] en términos de cómo se reparte el trabajo cognitivo dentro de un sistema humano–IA.

## Preguntas para reflexionar

- La cognición distribuida sostiene que el pensamiento no se limita a una sola mente, sino que se reparte entre personas, herramientas y entornos. Cuando usa una calculadora, una aplicación de notas o un asistente de IA, ¿dónde ocurre realmente el «pensamiento»?
- Si la cognición se distribuye entre una persona y una IA, ¿quién es responsable cuando el resultado es erróneo, y quién rinde cuentas por el aprendizaje?
- Un marco distingue la «agencia funcional» de la IA (su capacidad de influir en los resultados) de la «responsabilidad moral» (que sigue siendo humana). ¿Se sostiene esa distinción en la práctica, o se difumina la responsabilidad cuando las personas no pueden entender lo que hizo el sistema?
- Los sistemas humano–IA que distribuyen el razonamiento con más eficiencia tienden a producir el mejor rendimiento en la tarea pero el menor [[self-regulated-learning|aprendizaje autorregulado]]. ¿Por qué hacer «más inteligente» un sistema a nivel de grupo debilitaría al estudiante individual?
- El argumento de los «bienes cognitivos comunes» sostiene que el dominio distribuido depende de una pericia interiorizada: no se puede supervisar eficazmente un sistema de IA que no se entiende en profundidad. ¿Cómo cuestiona eso la idea de que la IA nos permite saltarnos el trabajo duro de aprender?

## Introducción

Este es un concepto de teoría del aprendizaje dentro de la línea de [[learning-theories|teorías del aprendizaje]], estrechamente relacionado con el [[embodied-learning|aprendizaje encarnado]], el [[situated-learning|aprendizaje situado]] y la [[cognitive-offloading|descarga cognitiva]]. La cognición distribuida (DCog), que se origina en el trabajo de Edwin Hutchins y sus colegas, describe cómo procesos cognitivos como la memoria, el razonamiento y la [[problem-solving|resolución de problemas]] se reparten entre múltiples agentes y sistemas materiales en lugar de residir en una sola cabeza. En la [[ai-education|educación con IA]] esto importa porque los sistemas de IA funcionan cada vez más como auténticos socios cognitivos que asumen parte de la carga del pensamiento, lo que plantea la pregunta de *dónde* ocurre realmente el aprendizaje y *quién* es responsable.

## Cómo la IA desplaza la distribución de la cognición

Los sistemas de IA generativa e interactiva redistribuyen el trabajo cognitivo de formas que las herramientas anteriores no permitían. Hay varias dimensiones de este desplazamiento:

- **El volumen de uso de IA no revela qué forma de trabajo distribuido está ocurriendo:** [[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]] encontraron que los perfiles basados en volumen de 97 estudiantes diferían en [[prior-knowledge|conocimiento previo]] y autoría, pero no en los [[prompt-engineering|prompts]] de rol activo o de nivel de comprensión, así que una misma cantidad de uso puede acompañar a actividades compartidas y a una división del trabajo distintas.
- **La IA como socio cognitivo y corregulador.** La IA puede actuar como [[scaffolding|andamiaje]], apoyo metacognitivo, sistema de memoria externa y socio en la toma de decisiones dentro de la co-[[regulation|regulación]] del pensamiento y el aprendizaje.([[ai-cognitive-partner-co-regulation-learning]]) Esto sitúa la cognición como algo corregulado entre quien aprende y el sistema, en lugar de gestionado individualmente.
- **Redistribución de la agencia y la responsabilidad.** Marcos como la **cognición en conjunto** reconceptualizan el pensamiento como algo que emerge de la dinámica [[student-ai-interaction|interacción entre el estudiantado y la IA]], y distinguen la *agencia funcional* de la IA (su capacidad de influir en los resultados sin consciencia) de la *responsabilidad moral* (que sigue siendo humana).([[ensemble-cognition-philosophy-ai-education]]) La cognición distribuida reformula así quién rinde cuentas por el aprendizaje.
- **La tensión entre eficiencia y regulación.** El trabajo empírico muestra una disyuntiva: los sistemas humano–IA que distribuyen el razonamiento con más eficiencia (por ejemplo, mediante razonamiento delegado) logran un mayor rendimiento en la tarea, pero pueden reducir la [[student-engagement|implicación]] autorreguladora de quienes aprenden.([[hao-human-ai-collaborative-problem-solving-cognition]]) Esta es la cara empírica de los riesgos de [[cognitive-offloading|descarga cognitiva]] y [[cognitive-offloading|dependencia excesiva]].
- **La mediación en la colaboración.** La IA puede actuar como *mediador [[pedagogy|pedagógico]]* que orquesta la interacción, la construcción de sentido epistémica y los procesos regulatorios en el [[collaborative-learning|aprendizaje colaborativo]], redistribuyendo la agencia, la autoridad y la responsabilidad entre actores humanos y no humanos.([[niari-ai-pedagogical-mediator-collaborative-learning]])
- **La configuración del acceso distribuye la cognición dentro del grupo.** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] muestran que *cómo* comparte un equipo la IA generativa determina la distribución de la cognición: el trabajo sincrónico en una única interfaz compartida sostiene un modelo cognitivo común (prompts colectivos, memoria externa compartida), mientras que el uso privado asincrónico lo fragmenta, con salidas que se reetiquetan selectivamente antes de compartirse. La IA generativa funciona así a la vez como participante cognitivo distribuido y como espacio colaborativo interactivo cuya permeabilidad debe diseñarse (el contexto compartido entra, las intuiciones privadas no vuelven automáticamente).
- **El profesorado también experimenta una distribución dominada por la IA frente a una complementaria.** La misma lógica de eficiencia y regulación se aplica al [[teacher-role|lado docente]] del diseño de clases: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] encontraron que el profesorado novel delega en el sistema de IA una gran parte de la carga cognitiva del diseño instruccional (una distribución dominada por la IA, que acepta en gran medida las respuestas), mientras que el profesorado con experiencia y competencia en IA alcanza una distribución complementaria en la que la pericia pedagógica y el apoyo computacional de la IA se refuerzan mutuamente; y como la [[generative-ai|IA generativa]] genera y coconstruye en lugar de limitarse a almacenar información, enmarcan esto como *cognición compartida participativa* y no como un simple uso de herramientas.
- **Los tipos de interacción, y no los resultados, como unidad.** [[cognitive-distribution-student-genai-interaction-2026|Willcox, Lane y Arikan (2026)]] construyeron el **Marco de Distribución Cognitiva** a partir de 53 registros de [[self-directed-learning|uso autodirigido]] de ChatGPT: cinco tipos de interacción (extensión, externalización, alineación, transformación y desacoplamiento) y cuatro roles de usuario, de modo que un mismo estudiante puede externalizar en un intercambio y pensar conjuntamente en el siguiente.
- **La memoria transactiva da a la distribución un mecanismo medido.** Entre 891 estudiantes universitarios de Estados Unidos y Türkiye, ni la capacidad de pensamiento autoevaluada ni la confianza en la asociación con la IA predijeron directamente el [[critical-thinking|pensamiento crítico]]. Ambas actuaron a través de la experiencia acumulada con IA generativa, que solo fue relevante mediante la especialización y la coordinación del trabajo (b = 0,636) y la transformación reflexiva de la salida (b = 0,367) ([[akgun-toker-genai-critical-thinking-transactive-memory-2026|Akgun y Toker, 2026]]). Esos dos mediadores predijeron después el pensamiento crítico (b = 0,230 y 0,175) sin que quedara ninguna ruta directa, así que aquello con lo que piensa un sistema humano–IA es la organización del trabajo, y no la cantidad de uso.

- **La cognición extendida como elección de diseño, no como propiedad de la herramienta.** [[rivera-novoa-genai-extended-cognition-2026|Rivera-Novoa y Duarte Arias (2026)]] sostienen que la IA generativa es sustitutiva por defecto porque realiza la tarea cognitiva, pero el mismo sistema se vuelve complementario cuando critica un borrador o aporta retroalimentación que quien aprende debe evaluar. Su marco de la mente extendida convierte la unidad de análisis en el artefacto junto con su uso, que es la versión normativa de la pregunta sobre la distribución.

## La cognición distribuida y perspectivas afines

La cognición distribuida se sitúa junto a tradiciones teóricas vecinas, que se solapan pero no son idénticas:

- **El [[situated-learning|aprendizaje situado y la cognición situada]]** subraya que la cognición y el aprendizaje son inseparables del contexto auténtico y las comunidades de práctica en que ocurren, un complemento al foco de la DCog en la *distribución* cognitiva entre sistemas.
- **La [[embodied-learning|cognición encarnada]]** destaca el papel del cuerpo y de la interacción sensoriomotora, y sostiene que el pensamiento se ancla en la implicación corporal y no en la manipulación abstracta de símbolos.
- **La [[cognitive-offloading|descarga cognitiva]]** es el mecanismo práctico por el que el trabajo cognitivo se traslada a sistemas externos (incluida la IA), y es la contraparte cargada de riesgo del relato descriptivo de la DCog.
- **La cognición extendida y la tesis de la mente extendida** (usadas en trabajos posthumanistas) sostienen que los artefactos externos pueden ser partes *constitutivas* de un sistema cognitivo y no meros instrumentos: una afirmación más fuerte de que la IA forma parte de la propia mente de quien aprende.([[elsayed-pedagogical-symbiosis-posthuman-learner]])

## ¿De quién es la cognición? El problema de la unidad de análisis

[[schlauch-sociomaterial-literacy-postdigital-design-2026|Schlauch (2026)]] lleva esa pregunta por la unidad de análisis más lejos que la mayor parte del trabajo de esta tradición. Su tesis es que la alfabetización no es una posesión individual sino algo que se pone en acto con materiales y máquinas, lo que convierte a quien aprende individualmente en la unidad de análisis equivocada. Un marco de competencias centrado en la persona no puede, por tanto, registrar contribuciones infraestructurales o no humanas, y el campo sigue nombrando la distribución para luego resolverla de nuevo sobre quien aprende. El borde de equidad es su argumento sobre la dificultad: la reflexividad depende de la experiencia vivida y de las relaciones de poder, así que el estudiantado cuya lengua o prácticas de escritura se sitúan más lejos de la norma codificada soporta el mayor coste. El argumento es teórico y no informa de ningún conjunto de datos, y sus orientaciones de diseño siguen siendo propuestas no probadas.

## Por qué importa para el diseño y la evaluación de la IA

La cognición distribuida aporta a la vez una lente de diseño y una lente de evaluación. Para el diseño, pregunta cómo repartir el trabajo cognitivo entre quienes aprenden y la IA para preservar (y no erosionar) la agencia, la [[metacognition|metacognición]] y la autorregulación de la persona que aprende. Para la evaluación, reformula las métricas de éxito: en lugar de preguntar solo «¿mejoró el rendimiento?», la DCog pregunta si la distribución de la cognición sostiene un aprendizaje duradero, la agencia epistémica y la justicia educativa, una perspectiva que conecta con las preocupaciones de [[ai-ed-evaluation|evaluación de la IA en educación]] y de [[learning-theories|teorías del aprendizaje]].

Fowlin et al. (2026) operacionalizan ese reparto como una secuencia de dos fases: construir primero las competencias centrales sin IA y después introducir la IA como un socio cognitivo cuyas sugerencias el estudiantado evalúa críticamente, para prevenir la pérdida de habilidades asociada a la automatización ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Dominio interiorizado frente a dominio distribuido.** El marco de los bienes cognitivos comunes ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]) distingue el dominio interiorizado (conocimiento profundo del dominio en mentes individuales) del dominio distribuido (orquestar sistemas humano–IA) y sostiene que este último depende del primero mediante una «atadura de validación»: la supervisión eficaz de sistemas distribuidos o de IA presupone la pericia interiorizada que esos sistemas pueden socavar. Esto agudiza la pregunta de diseño de la DCog: la distribución de la cognición no debe hacerse a costa de la pericia que la valida.

## Concepciones erróneas

- **«Un documento compartido significa cognición compartida.»** Los perfiles basados en volumen de **97 estudiantes** diferían en **conocimiento previo y autoría**, pero **no en los prompts de rol activo ni de nivel de comprensión**. El volumen de participación medía la exposición, no la distribución del trabajo cognitivo, así que la [[learning-analytics|analítica]] de uso de una herramienta colaborativa dice poco sobre quién estaba pensando.
- **«Todo el mundo descarga en la IA por igual.»** El profesorado novel **delega en el sistema de IA una gran parte de la carga cognitiva del diseño instruccional**, hasta llegar a una **distribución dominada por la IA** en la que acepta en gran medida las respuestas, mientras que el profesorado con experiencia y competencia en IA distribuye de otro modo. La pericia se manifiesta en dónde se coloca la carga, no solo en cuánta IA se usa.
- **«Más implicación de la IA significa más apoyo.»** La distribución dominada por la IA es el patrón que hay que vigilar, porque la parte humana del trabajo cognitivo se reduce mientras el volumen de producción aumenta. El sistema puede parecer más capaz precisamente cuando el usuario está haciendo menos.

## Conceptos conectados

- [[learning-theories]]
- [[cognitive-offloading]]
- [[embodied-learning]]
- [[situated-learning]]
- [[human-ai-collaboration]]
- [[agency]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[constructivist]]
- [[collaborative-learning]]
- [[ai-education]]

## Artículos conectados

- [[hao-human-ai-collaborative-problem-solving-cognition]] — Estudio empírico de la resolución colaborativa de problemas entre personas e IA desde una lente de cognición distribuida y corregulación
- [[niari-ai-pedagogical-mediator-collaborative-learning]] — La IA como mediador pedagógico que redistribuye la cognición entre actores humanos y no humanos
- [[ai-cognitive-partner-co-regulation-learning]] — La IA como socio cognitivo en el pensamiento corregulado
- [[ensemble-cognition-philosophy-ai-education]] — El marco de la cognición en conjunto, que reconceptualiza el pensamiento como interacción humano–IA
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — El estudiante posthumano, con la cognición distribuida entre sistemas biológicos y artificiales
- [[fowlin-operationalizing-learning-principles-ai]] — Operacionalizar la cognición distribuida junto al aprendizaje experiencial y situado
- [[cognitive-commons-ai-expertise-regeneration]] — La tragedia de los bienes cognitivos: la IA y la regeneración de la pericia
- [[choi-teacher-ai-interaction-lesson-design-2026]] — La interacción docente-IA en el diseño de clases: cognición distribuida dominada por la IA frente a complementaria según experiencia y competencia (Choi et al. 2026)
- [[xu-genai-collaborative-space-2026]] — La IA generativa como agente y espacio colaborativo: cómo la configuración del acceso distribuye la cognición del grupo (Xu et al. 2026)
- [[cognitive-distribution-student-genai-interaction-2026]] — Marco de Distribución Cognitiva: cinco tipos de interacción y cuatro roles a partir del uso autodirigido de ChatGPT
- [[akgun-toker-genai-critical-thinking-transactive-memory-2026]] — Memoria transactiva con IA generativa: la división del trabajo y la transformación reflexiva median el pensamiento crítico (Akgun y Toker 2026)
- [[schlauch-sociomaterial-literacy-postdigital-design-2026]] — Por qué quien aprende individualmente es la unidad de análisis equivocada
- [[rivera-novoa-genai-extended-cognition-2026]] — Cognición extendida en el aprendizaje de las ciencias: la IA generativa es sustitutiva por defecto y complementaria por diseño (Rivera-Novoa y Duarte Arias 2026)
