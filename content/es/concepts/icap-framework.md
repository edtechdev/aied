---
title: Marco ICAP
created: "2026-09-28T18:22:28-04:00"
updated: "2026-09-28T18:22:28-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-14T06:35:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El marco ICAP** (Interactivo–Constructivo–Activo–Pasivo) — una taxonomía de la implicación cognitiva desarrollada por Michelene Chi que clasifica la conducta de quien aprende en cuatro modos de cambio del conocimiento, ordenados de menor a mayor implicación cognitiva: *pasivo*, *activo*, *constructivo* e *interactivo*. En la IA en educación, ICAP proporciona a la vez un objetivo de diseño (construir herramientas que susciten una implicación constructiva e interactiva en lugar de un consumo pasivo) y una lente de evaluación (medir si quienes aprenden y los sistemas de IA están implicados de verdad en los modos superiores).([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Preguntas para reflexionar

- Piense en la última vez que «aprendió» algo viendo un vídeo o leyendo. El marco ICAP lo llamaría pasivo. ¿Qué retiene realmente de la exposición pasiva frente a lo que retiene al explicárselo a otra persona?
- ICAP ordena la implicación de pasiva a activa, constructiva e interactiva. ¿Dónde tienden a mantener a quienes aprenden las herramientas de IA que ha usado, y cuenta hacer clics en una práctica adaptativa como implicación real o solo como actividad?
- La página sostiene que el cambio más trascendental es el de Activo a Constructivo: generar explicaciones o artefactos nuevos en lugar de limitarse a aplicar el conocimiento. ¿Por qué producir algo nuevo podría ser el paso que cambia de verdad la comprensión?
- Un estudio encontró que las personas expertas superan con creces a los modelos de IA al etiquetar niveles de implicación. Si los sistemas automatizados subestiman sistemáticamente la implicación, ¿cómo deberíamos tratar las métricas de «implicación» generadas por IA?
- ICAP muestra que una herramienta que responde por usted lo mantiene pasivo, mientras que una que le pide y le pregunta lo empuja hacia una implicación constructiva e interactiva. ¿Qué decisión de diseño tomaría para su estudiantado?
- El marco se usa tanto como objetivo de diseño como lente de evaluación. ¿Cómo podría usar ICAP en su propia docencia o diseño para saber si quienes aprenden están implicados de verdad y no solo activos?

## Introducción

ICAP se basa en el supuesto de que *lo que hace quien aprende* determina cuánto y qué aprende. El marco de Chi postula que, a medida que la implicación pasa de pasiva a activa, constructiva e interactiva, la naturaleza del cambio del conocimiento se profundiza: de almacenar, a atender, a integrar el conocimiento nuevo con el previo, a cocrear conocimiento mediante el diálogo. Esto convierte a ICAP en una potente herramienta analítica para la IA en educación, donde la pregunta central de diseño es si la asistencia de la IA apoya o desplaza la implicación cognitiva de quien aprende.

## Los cuatro modos

| Modo | Conducta de quien aprende | Naturaleza del cambio del conocimiento |
|------|------------------|---------------------------|
| **Interactivo** | Diálogo con otra persona que aprende o con un agente, co-construyendo significado; p. ej., defender una postura, [[collaborative-learning|resolución colaborativa de problemas]] | Cocrear conocimiento nuevo mediante una actividad conjunta y recíproca |
| **Constructivo** | Generar una salida nueva más allá de lo dado; p. ej., autoexplicarse, comparar, reflexionar, dibujar | Integrar información nueva con el conocimiento previo para producir una comprensión novedosa |
| **Activo** | Manipular el material o actuar sobre él; p. ej., tomar apuntes, subrayar, hacer una pausa para pensar | Atender y almacenar información, a veces sin una integración profunda |
| **Pasivo** | Recibir información sin una acción manifiesta; p. ej., escuchar una clase, leer | Almacenar información, con un procesamiento adicional limitado |

## ICAP en la IA en la educación

### Un objetivo de diseño para las herramientas de IA

ICAP replantea la pregunta central de diseño para la IA en la educación: una herramienta de IA que *responde por* quien aprende lo mantiene en los modos pasivo/activo, mientras que una herramienta que *pide, pregunta y [[scaffolding|andamia]]* puede empujar a quien aprende hacia una implicación constructiva e interactiva. Esto alinea ICAP con la pedagogía [[constructivist|constructivista]] y con la investigación sobre [[active-learning|aprendizaje activo]].([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Una lente de evaluación para los agentes de IA

ICAP también sirve como marco de medición. En un estudio, los investigadores ampliaron ICAP a una escala de 7 puntos para caracterizar la implicación cognitiva en el diálogo colaborativo y después compararon anotadores humanos entrenados con el etiquetado basado en LLM (aprendizaje en contexto, prompting de cero ejemplos y agentes reflexivos). La fiabilidad interevaluador humana (kappa = 0,906–0,998) superó con creces la anotación con LLM (kappa = 0,541–0,609), lo que destaca el papel de ICAP —y sus límites actuales— en la medición automatizada de la implicación para flujos de trabajo de [[learning-analytics|analítica del aprendizaje]].([[icap-cognitive-engagement-llm-agents]])

### Guiar la facilitación del diálogo colaborativo

Como la implicación interactiva es el modo más alto de ICAP, el marco ayuda a localizar el valor de la facilitación con IA en la [[collaborative-learning|discusión colaborativa en línea]]. [[llm-facilitation-timing-online-discussions|La investigación sobre el momento de la facilitación con LLM]] muestra que *cuándo* interviene una IA en una discusión determina si apoya o interrumpe la cocreación interactiva de conocimiento: una advertencia informada por ICAP de que los agentes de moderación autónomos necesitan una calibración hacia una contención parecida a la humana en lugar de una facilitación demasiado entusiasta.

### ICAP y el diseño de la analítica del aprendizaje

ICAP subyace a las críticas de las métricas superficiales de «implicación»: interactuar con un panel haciendo clic en filtros es una implicación *activa*, no *interactiva*. Los diseños eficaces de analítica del aprendizaje suscitan autoevaluación y diálogo bidireccional en lugar de limitarse a mostrar datos: una implicación extraída directamente del marco de Chi.([[interactive-learning-dashboards-engagement]])

### La transición Activo→Constructivo como paso clave

Aunque ICAP describe una jerarquía, el cambio más trascendental para el aprendizaje es el salto de los modos *Activo* a *Constructivo* (Chi y Boucher, 2023). La implicación activa (aplicar el conocimiento a escenarios parecidos pero no idénticos) prepara a quien aprende, pero es la implicación constructiva —generar explicaciones, resúmenes o artefactos nuevos— la que lo capacita para crear conocimiento nuevo. Aquí está el quid para la IA en la educación: una herramienta que mantiene a quien aprende en el modo Activo (p. ej., hacer clic en una práctica adaptativa) puede parecer productiva pero nunca lo empuja a la generación constructiva que produce una comprensión duradera. Las intervenciones colaborativas y centradas en la alfabetización que andamian deliberadamente el salto Activo→Constructivo tienden a mostrar las ganancias más fuertes.([[hingle-collaborative-ai-literacy-2025]])

### ICAP como señal de andamiaje adaptativo en un STI

Los modos de ICAP pueden operacionalizarse como *estados objetivo* entre los que un tutor adaptativo elige para andamiar la implicación cognitiva a partir de un modelo del estudiante en evolución. En un STI de lógica, [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al.]] eligieron dinámicamente entre un modo *Activo* de ejemplo resuelto «Guiado» y un modo *Constructivo* de ejemplo «Con errores». Al comparar el Seguimiento del Conocimiento Bayesiano (BKT) con el Aprendizaje por Refuerzo Profundo (DRL) y una línea base no adaptativa con 113 estudiantes, ambas políticas adaptativas mejoraron el rendimiento en el postest, pero de forma diferenciada: el BKT dio las mayores ganancias a quienes tenían menos conocimiento previo (ayudándoles a ponerse al día), mientras que el DRL produjo las puntuaciones más altas en el postest entre quienes tenían más conocimiento previo. Es una demostración concreta de que *personalizar* eficazmente el modo ICAP de un tutor inteligente depende de modelar el conocimiento actual de quien aprende, y de que ningún modo ni método adaptativo único sirve para todo el estudiantado. Conecta la jerarquía de ICAP directamente con el diseño de [[adaptive-learning|aprendizaje adaptativo]] y de [[knowledge-tracing|seguimiento del conocimiento]].

### ICAP como modelo de estado cognitivo para generar agentes parecidos a los humanos

Más allá de seleccionar modos de tarea, ICAP se ha integrado directamente en el *modelo cognitivo* de un agente educativo generativo. [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] construye un «perceptrón de profundidad cognitiva» basado en ICAP que mapea las entradas a una distribución de probabilidad sobre los cuatro niveles de ICAP, y lo fusiona con actualizaciones de estado de inspiración evolutiva y con la recuperación de memoria mediante la teoría de respuesta al ítem para simular la evolución cognitiva de un estudiante (incluidas transiciones como confusión → comprensión). Las ablaciones muestran que eliminar el módulo de percepción de ICAP colapsa la capacidad del agente de distinguir el aprendizaje superficial del profundo, evidencia de que la taxonomía ICAP puede servir como medida interna y de grano fino de la implicación cognitiva para [[simulating-students|simular estudiantes]], y no solo como una lente de evaluación externa.

### ICAP ancla la evaluación de la interacción reflexiva con IA generativa

El énfasis de ICAP en una implicación generativa y a nivel de proceso lo han adoptado marcos de evaluación que valoran *cómo* aprende el estudiantado con IA generativa. [[assessing-student-drive-framework-2025|El marco DRIVE]] alinea explícitamente su constructo central —la interacción reflexiva profunda con la salida de la IA generativa— con el tipo de implicación generativa que ICAP identifica como conducente a un aprendizaje más profundo, y lo usa para distinguir el consumo superficial del retrabajo reflexivo y esforzado del contenido generado por IA. Esto sitúa a ICAP como ancla teórica para diseñar y medir interacciones de aprendizaje significativas con [[generative-ai|IA generativa]] en lugar de limitarse a registrar su uso.

## Implicaciones para el diseño y la investigación

1. **Diseñe para los modos superiores.** Las herramientas de IA deberían pedir a quien aprende que genere, explique y dialogue —actividad constructiva e interactiva— en lugar de entregar contenido pasivo o actuar como máquinas de respuestas.([[multimodal-learning-genai]])
2. **Implique a quien aprende en varios modos.** Una instrucción eficaz en [[ai-literacy|alfabetización en IA]] implica a quien aprende en múltiples niveles de ICAP —exposición pasiva, manipulación activa, generación constructiva y diálogo interactivo— y elige el modo que encaja con el objetivo de aprendizaje.([[hingle-collaborative-ai-literacy-2025]])
3. **Mida la implicación con honestidad.** ICAP da a investigadores y diseñadores un vocabulario común para distinguir la implicación cognitiva genuina de la mera actividad: un correctivo frente a una [[student-engagement|implicación del estudiantado]] superficial.([[icap-cognitive-engagement-llm-agents]])
4. **Vigile la brecha de anotación entre humanos y LLM.** Si se usan sistemas automatizados para codificar la implicación, hay que tener en cuenta su déficit sistemático respecto a las personas entrenadas.([[icap-cognitive-engagement-llm-agents]])

## Conceptos conectados

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Artículos conectados

- [[icap-cognitive-engagement-llm-agents]] — Marco ICAP ampliado para medir la implicación con anotación humana frente a la de LLM
- [[hingle-collaborative-ai-literacy-2025]] — Alfabetización colaborativa en IA a través de los cuatro modos de ICAP
- [[interactive-learning-dashboards-engagement]] — ICAP como crítica de una implicación superficial en la analítica del aprendizaje
- [[multimodal-learning-genai]] — ICAP y la implicación cognitiva en el diseño de aprendizaje multimodal
- [[llm-facilitation-timing-online-discussions]] — El momento de la facilitación con LLM en las discusiones colaborativas en línea
- [[adaptive-scaffolding-cognitive-engagement-its]] — Andamiaje adaptativo con ICAP en un STI (BKT frente a DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — Modelo de profundidad cognitiva basado en ICAP en un agente generativo de simulación de estudiantes
- [[assessing-student-drive-framework-2025]] — Evaluación anclada en ICAP de la interacción reflexiva con IA generativa
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: marco construccionista para la construcción de artefactos