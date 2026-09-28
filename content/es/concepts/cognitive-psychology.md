---
title: Psicología cognitiva
created: "2026-09-28T18:22:10-04:00"
updated: "2026-09-28T18:22:10-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Psicología cognitiva / cognitivismo** — la familia de teorías que explican el aprendizaje a través de procesos mentales internos —atención, percepción, memoria, razonamiento y metacognición— y no solo a través de la conducta observable. En la [[ai-education|IA en educación]], los supuestos cognitivistas sustentan las aportaciones más características del campo: los sistemas de [[intelligent-tutoring]] que modelan el conocimiento de quien aprende, el [[knowledge-tracing]] y el [[cognitive-diagnosis]] que registran lo que una persona sabe, los diseños de [[feedback]] basados en el diagnóstico de errores y toda la familia del [[student-modeling|modelado del estudiante y la instrucción adaptativa]]. El cognitivismo es el punto intermedio entre el [[behaviorism]] (el aprendizaje como cambio conductual) y el [[constructivist|constructivismo]] (el aprendizaje como construcción activa de significado), y es la lente teórica más estrechamente ligada a la metáfora computacional de la mente que animó la AIED temprana.

## Preguntas para reflexionar

- Cuando piensa en el «aprendizaje», ¿se imagina un cambio en lo que alguien hace, o un cambio en lo que sabe y puede recuperar? ¿Cómo podría esa distinción cambiar la forma en que juzga si una herramienta de tutoría con IA funciona de verdad?
- La tutoría con IA se apoya en una «metáfora computacional»: tratar la mente como un sistema de procesamiento de información con límites de memoria. ¿Dónde resulta poderosa esa metáfora y dónde podría pasar por alto algo importante sobre cómo aprenden las personas?
- Una herramienta de IA hace que una tarea parezca sencilla: explica el siguiente paso, reduce la fricción y quien aprende rinde de maravilla mientras la usa. ¿Cuenta eso como [[teacher-role|enseñanza]] exitosa? ¿Cómo sabría si la persona puede hacerlo ahora sin la herramienta?
- La Teoría de la Carga Cognitiva distingue entre carga intrínseca, extrínseca y pertinente. Si estuviera diseñando un asistente de IA, ¿qué tipo de carga intentaría reducir deliberadamente y qué tipo tendría cuidado de NO eliminar?
- Si quien aprende sabe que puede delegar la memoria y el razonamiento en una IA, ¿cuándo es eso una estrategia inteligente y cuándo un atajo que impide el aprendizaje en silencio? ¿Qué determina la diferencia?
- El cognitivismo supone que el conocimiento puede descomponerse en componentes y rastrearse a lo largo del tiempo. ¿Qué podría perderse cuando reducimos la comprensión de una persona a un conjunto de componentes de conocimiento rastreables?

## Introducción

La psicología cognitiva es la tradición teórica del aprendizaje que lo trata como un cambio en representaciones mentales internas —conceptos, esquemas y procedimientos almacenados en la memoria— en lugar de un cambio en la conducta observable. Su vocabulario de procesamiento de información (atención, codificación, recuperación, memoria de trabajo limitada) aportó tanto el lenguaje diagnóstico de la dificultad de aprendizaje como la arquitectura que hay detrás de la [[intelligent-tutoring]] y el [[knowledge-tracing]]: sistemas que infieren el estado interno de quien aprende y se adaptan a él. Sigue siendo el marco de referencia para la [[metacognition]], las [[desirable-difficulties]] y el [[self-regulated-learning]] en toda esta base de conocimiento.

## Ideas centrales

- **El aprendizaje es un cambio en las representaciones mentales internas.** El cognitivismo sostiene que aprender implica la adquisición, el almacenamiento y la reorganización del conocimiento en la memoria —conceptos, esquemas y procedimientos— y no solo un cambio en la respuesta observable. Lo que quien aprende *sabe y puede recuperar* importa, no solo lo que hace.
- **La metáfora del procesamiento de información (la metáfora computacional).** La mente se trata como un sistema de procesamiento de información con capacidades y cuellos de botella —[[item-response-theory|medición]] de la habilidad latente, límites de la memoria de trabajo, codificación y recuperación—, que es precisamente el modelo que hizo de la tutoría con IA (un programa informático que modela y se adapta a la cognición de quien aprende) un ajuste natural.
- **La atención y la memoria son limitadas.** La memoria de trabajo tiene capacidad limitada; el aprendizaje duradero exige codificar en la memoria a largo plazo mediante el repaso, la elaboración y la [[retrieval-spacing-interleaving|práctica de recuperación]]. Esto conecta el cognitivismo con la [[research-methods-aied|investigación]] sobre la [[cognitive-offloading]] (delegar la memoria o el procesamiento en herramientas externas) y con la «brecha entre rendimiento y aprendizaje» cuando la IA evita la recuperación y la práctica.
- **La metacognición regula la cognición.** La [[metacognition]] —supervisar y controlar el propio pensamiento— es un constructo claramente cognitivista, y explica por qué la calibración de cuándo apoyarse en la IA por parte de quien aprende importa para el aprendizaje (véanse [[cognitive-offloading]] y [[self-regulated-learning]]).
- **El conocimiento es descomponible y rastreable.** La AIED cognitivista supone que el conocimiento de quien aprende puede representarse como componentes y rastrearse a lo largo del tiempo: el fundamento del [[knowledge-tracing]], el [[cognitive-diagnosis]] y la [[item-response-theory]].

## El cognitivismo y la IA en educación

### El linaje cognitivista de la AIED

Puede decirse que el cognitivismo es la teoría más responsable de que la IA en educación exista. Los primeros tutores cognitivos (por ejemplo, los tutores de Anderson basados en ACT-R) [[embodied-learning|encarnaron]] el supuesto de que el aprendizaje podía modelarse como reglas de producción y de que un sistema podía rastrear qué reglas había dominado quien aprendía. Esto produjo la arquitectura canónica que todavía define el campo: un modelo de dominio, un [[student-modeling|modelo del estudiante]] que registra el estado de conocimiento de quien aprende y un modelo [[pedagogy|pedagógico]] que adapta la instrucción, todo ello de origen cognitivista. El [[knowledge-tracing]] moderno (bayesiano, de aprendizaje profundo y basado en TRI) y el [[cognitive-diagnosis]] continúan esta tradición. El mismo supuesto sostiene la [[intelligent-tutoring]], el [[adaptive-learning]] y el [[personalized-learning]], agrupados en la base de conocimiento bajo el paraguas del [[student-modeling|Modelado del estudiante e instrucción adaptativa]].

### La carga cognitiva y el diseño de la instrucción

La Teoría de la Carga Cognitiva (TCC) es el marco cognitivista más ampliamente aplicado en el [[learning-design|diseño instruccional]]: distingue entre la carga intrínseca (la complejidad de la tarea), la carga extrínseca (la fricción de la presentación) y la carga pertinente (el esfuerzo de construcción de esquemas). Una IA bien diseñada debería reducir la carga extrínseca preservando el procesamiento pertinente; una IA mal integrada reduce las tres y deja tareas completadas con un aprendizaje vacío. El encuadre de la memoria de trabajo de la TCC también es central en los debates sobre la [[cognitive-offloading]]: si la IA reduce la carga extrínseca nociva o cortocircuita el procesamiento pertinente que produce aprendizaje.

La Teoría Cognitiva del Aprendizaje Multimedia de Mayer (CTML, por sus siglas en inglés) aplica los mismos supuestos sobre la memoria de trabajo a los propios materiales, y sus prescripciones son inusualmente concretas: quien aprende rinde mejor con palabras e imágenes juntas que solo con palabras, cuando se excluye el material extrínseco, cuando la lección se segmenta y se ajusta al ritmo del usuario en lugar de presentarse como una unidad continua, cuando las palabras y las imágenes correspondientes aparecen cerca y al mismo tiempo, y cuando la narración es conversacional y con una voz humana cercana en lugar de formal o generada por máquina.

### Cognitivismo frente a conductismo y constructivismo

- **Frente al [[behaviorism]]:** el conductismo explica el aprendizaje como un cambio conductual observable mediante el refuerzo y la repetición mecánica; el cognitivismo insiste en las representaciones internas y rastrea los estados mentales. La práctica con IA suele mostrar una brecha de «constructivismo de nombre, conductismo de hecho», pero los diseños cognitivistas (modelado del estudiante, seguimiento del conocimiento) se distinguen de la mera práctica conductista de ejercicios y retroalimentación porque *representan el conocimiento inferido de quien aprende y se adaptan a él*, en lugar de limitarse a reforzar respuestas.
- **Frente al [[constructivist|constructivismo]]:** el constructivismo sostiene que quienes [[learners]] construyen activamente significado a través de la experiencia; el cognitivismo enfatiza la codificación precisa de un conocimiento y una habilidad (a menudo ya estructurados). El linaje cognitivista de la AIED (dominios estructurados, componentes de conocimiento explícitos) es a veces criticado como demasiado conductista o demasiado transmisivo por parte de los constructivistas, mientras que el cognitivismo responde que representar y rastrear el conocimiento es lo que hace posible una instrucción genuinamente adaptativa.
- **Frente a las [[learning-sciences|ciencias del aprendizaje]]:** el cognitivismo aporta los mecanismos con los que ese campo diseña —memoria de trabajo, codificación, recuperación, componentes de conocimiento descomponibles—, pero no está orientado al diseño en sí mismo. Explica cómo ocurre el aprendizaje; las ciencias del aprendizaje preguntan cómo construir entornos en los que ocurra y someten esos diseños a prueba empírica.

### La tensión de la era de la IA: la frontera del cognitivismo está bajo presión

La [[generative-ai|IA generativa]] a la vez amplía y cuestiona el cognitivismo. Lo amplía al hacer más potentes las representaciones del conocimiento (los LLM como motores de conocimiento que pueden rastrearse mediante el [[knowledge-tracing]] y adaptarse mediante el [[student-modeling]]). Lo cuestiona al complicar dónde «está» la cognición: cuando la IA realiza razonamiento, memoria e incluso funciones similares a la metacognición, el supuesto cognitivista de que el aprendizaje es procesamiento interno en la mente individual queda en entredicho, como argumentan la [[distributed-cognition]], la [[ai-cognitive-partner-co-regulation-learning|corregulación]] y los encuadres posthumanos, según los cuales la cognición puede distribuirse entre sistemas humanos y artificiales. Aun así, la pregunta cognitivista sigue siendo la central del campo: *¿interioriza el conocimiento quien aprende, o lo retiene la herramienta?* Esta es la cuestión de la descarga cognitiva y la brecha entre rendimiento y aprendizaje en su forma más pura.

## Implicaciones para el diseño y la investigación

1. **Diseñar para la interiorización, no solo para el rendimiento.** La AIED cognitivista debería evaluarse por si quien aprende puede recuperar y aplicar el conocimiento *sin* la herramienta, y no por el rendimiento asistido. Esta es la [[ai-misuse-learning-harm|brecha entre rendimiento y aprendizaje]] y la razón para medir la [[transfer-of-learning|transferencia]] sin asistencia.
2. **Representar a quien aprende, no solo responder.** Vincular un [[student-modeling]] y un [[knowledge-tracing]] estructurados al diálogo con la IA, de modo que el sistema se adapte al conocimiento inferido en lugar de responder con fluidez pero a ciegas.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Respetar los límites de la memoria de trabajo.** Aplicar la Teoría de la Carga Cognitiva a la experiencia de usuario con IA: reducir la carga extrínseca (fricción, interfaces sobrecargadas) preservando el procesamiento pertinente ([[desirable-difficulties|esfuerzo productivo]], práctica de recuperación) en lugar de minimizar toda demanda cognitiva.
4. **Calibrar la metacognición.** Como la [[metacognition]] gobierna cuándo eligen las personas descargar, enseñar la calibración (saber qué puede hacer uno de verdad sin ayuda) es una respuesta cognitivista a la dependencia excesiva (véase [[cognitive-offloading]]).

## Conceptos conectados

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — los hallazgos sobre retención en los que se apoya esta familia de prácticas

## Artículos conectados

- [[cognitive-shift-ai-education]] — El giro cognitivo en la educación con IA
- [[cogtax-cognitive-taxonomy]] — Una taxonomía cognitiva para el uso de la IA
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Agentes LLM pedagógicos fundamentados en el seguimiento del conocimiento
- [[nie-personavlm-long-term-personalization-2026]] — Modelado del estudiante con LLM y memoria
- [[ai-cognitive-partner-co-regulation-learning]] — La IA como socio cognitivo en el aprendizaje corregulado
- [[ensemble-cognition-philosophy-ai-education]] — Cognición de conjunto: el pensamiento como interacción humano-IA