---
title: Metacognición
created: "2026-09-25T03:54:17-04:00"
updated: "2026-09-25T03:54:17-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/metacognition
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> La metacognición (pensar sobre el propio pensamiento) es a la vez un objetivo de la [[research-methods-aied|investigación]] en [[ai-education|educación con IA]] (¿pueden las herramientas de IA desarrollar las habilidades metacognitivas del estudiantado?) y un factor de riesgo (que la IA complete las tareas puede suprimir la práctica metacognitiva).([[stanford-evidence-base-ai-k12-2026]])([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Preguntas para reflexionar

- La «metacognición» es pensar sobre el propio pensamiento: saber qué se sabe, monitorizarse y ajustar las propias estrategias. Cuando estudia o resuelve un problema, ¿qué conciencia tiene en el momento de si de verdad comprende o solo reconoce el material?
- Un hallazgo llamativo: el estudiantado que usó asistencia de IA para redactar ensayos a menudo no podía recordar citas de sus propios ensayos, porque no se había implicado con el contenido durante la producción. Cuando una herramienta produce la salida, ¿qué práctica pierde quien aprende, y es importante esa práctica?
- La página enmarca la metacognición a la vez como objetivo (¿puede la IA construirla?) y como riesgo (¿puede la IA suprimirla?). ¿Podría la misma herramienta de IA fortalecer o debilitar la metacognición de quien aprende según cómo se diseñe o se use? ¿Qué determina hacia dónde se inclina la balanza?
- Las indicaciones estructuradas que piden al estudiantado autoexplicarse, evaluar estrategias o identificar lagunas preservan la exigencia metacognitiva, mientras que la IA que simplemente completa tareas la desplaza. Si usted diseñara una herramienta de estudio con IA, ¿qué construiría para que invite a la reflexión en lugar de sustituirla?
- La página concluye que que el uso de la IA sea metacognitivamente rico depende de la motivación y la postura de quien aprende tanto como de la tecnología. ¿Ha usado alguna vez una herramienta de forma superficial y luego se ha dado cuenta de que no aprendió nada, y en qué se diferenciaban las veces en que la usó en profundidad?

## Introducción

La metacognición en la educación se refiere a la conciencia, la monitorización y la [[regulation]] que quien aprende hace de sus propios procesos cognitivos:

- **Conocimiento metacognitivo:** comprender qué sabe uno, qué estrategias tiene disponibles y cuándo desplegarlas
- **Regulación metacognitiva:** planificar, monitorizar y evaluar el propio aprendizaje en tiempo real

Dentro de los marcos del [[self-regulated-learning|aprendizaje autorregulado]], la metacognición es el mecanismo central que permite a quien aprende adaptar estrategias, reconocer la confusión y buscar ayuda de forma adecuada.([[scheu-mobile-chatbot-journaling-motivation-2026]])

Cómo despliega realmente quien aprende la metacognición en torno a la IA está moldeado por algo más que la herramienta misma: [[cui-motivation-roles-metacognitive-genai-2026|Cui et al.]] encuentran que la motivación del estudiantado y el papel de interacción que adopta moldean su [[student-engagement|implicación]] metacognitiva con la [[generative-ai|IA generativa]], lo que significa que que el uso de la IA sea metacognitivamente rico depende de la postura de quien aprende tanto como de la tecnología. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran y Arar (2026)]] añaden la propia [[student-ai-interaction|interacción con la IA]] como objeto de esa reflexión: el paso final de su ciclo de [[prompt-engineering|alfabetización en prompts]] pide a quien aprende examinar qué reveló el proceso sobre cómo funcionan los prompts y qué supuestos dieron forma a la respuesta, y convierten la reflexión y la revisión en la fase en la que se desarrollan la autoría y el juicio crítico.

## Cómo afectan las herramientas de IA a la metacognición

### El riesgo de supresión (Stanford SCALE, 2026)

Cuando la IA completa tareas de razonamiento por el estudiantado (resolver problemas de matemáticas, escribir ensayos, generar código), este pierde práctica en monitorizar su propia comprensión y en seleccionar estrategias.([[stanford-evidence-base-ai-k12-2026]])

Hallazgos clave:
- **Kosmyna et al. (2025):** el estudiantado que usó asistencia de IA para redactar ensayos fue **un 83% incapaz de recordar citas** de sus propios ensayos, frente al 11% de quienes no usaron IA, lo que indica que no se implicó con el contenido durante la producción.
- **Stadler et al. (2024):** la IA de propósito general redujo la carga cognitiva pero produjo un **razonamiento de menor calidad** que la búsqueda tradicional, lo que sugiere que la implicación metacognitiva quedó desplazada.
- **Lehmann et al. (2025):** la IA de propósito general para la [[cs-education|programación]] perjudicó la comprensión del estudiantado con pocos [[prior-knowledge|conocimientos previos]]; el que más necesitaba andamiaje metacognitivo recibió respuestas en su lugar.

### La oportunidad de aumento (Scheu et al., 2026)

Cuando la IA se diseña para apoyar la reflexión en lugar de sustituirla, la metacognición puede fortalecerse:

- **Los diarios de aprendizaje** son una práctica metacognitiva clásica: al reflexionar sobre los procesos de aprendizaje, el estudiantado aumenta la conciencia sobre su cognición
- **Las indicaciones estructuradas** que piden al estudiantado autoexplicarse, evaluar estrategias o identificar lagunas de conocimiento preservan la exigencia metacognitiva. CoMeT (Hou et al. 2026) da a esa expresión una definición y un aval empírico: trata la exigencia metacognitiva como una cantidad distinta de la [[cognitive-offloading|carga cognitiva]], es decir, lo que quien aprende debe decidir, afirmar o juzgar antes de que llegue la ayuda, y no simplemente lo que queda cuando se retiene la ayuda, y la mantuvo estadísticamente equivalente a la de un tutor que retenía las respuestas por diseño (p_TOST = .004) mientras su propio apoyo escalaba y se desvanecía peldaño a peldaño. El desvanecimiento se mantuvo cuando el turno de quien aprende apuntaba a la decisión bajo apoyo: los turnos dirigidos a otra cosa recibieron una concesión posterior el 40.3% de las veces frente al 28.8% de los turnos dirigidos, una diferencia de 11.5 puntos, de modo que lo que un tutor debe leer es dónde está la atención de quien aprende y no cuánto esfuerzo muestra el turno.
- El **curso basado en ejemplos** del [[conversational-ai|chatbot]] de Scheu et al. aumentó la **competencia percibida** (una [[self-assessment|autoevaluación]] metacognitiva) incluso cuando el asistente de [[llm|LLM]] por sí solo no lo hizo

- **Sacar a la luz patrones de interacción que quien aprende no puede ver.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li y Weng (2026)]] siguieron los movimientos oculares, la toma de apuntes y el habla de 22 estudiantes de interpretación mientras trabajaban con un sistema de reconocimiento de voz y traducción automática, y encontraron que el modo en que el estudiantado repartía la [[cognitive-psychology|atención]] entre la salida de la IA y sus propias notas era invisible para ellos: el 58.3% cambió de perfil entre etapas de la tarea, y quienes más leían la salida de la IA obtuvieron las puntuaciones más bajas en fluidez de la entrega y en calidad de la lengua meta. La consecuencia pedagógica es que la reflexión tiene que estar andamiada por evidencia externa, porque la estrategia de quien aprende no es introspectable; los autores abogan por guiar al estudiantado a describir y evaluar por qué trabajó de una manera dada en cada etapa.

## La distinción entre implicación y motivación

Scheu et al. (2026) encontraron una división crítica:

| Dimensión | Efecto del asistente de LLM | Efecto del curso |
|---|---|---|
| **Motivación intrínseca** (disposición a implicarse) | **Sin efecto** | **Positivo** |
| **Implicación conductual** (cantidad escrita) | **Creciente con el tiempo** ([[feedback|bucle de retroalimentación]]) | **Positivo constante** |

Esto sugiere que **el apoyo metacognitivo y la [[motivation|motivación]] no son idénticos**. El [[scaffolding|andamiaje]] de las entradas de diario que ofrecía el asistente de LLM aumentó cuánto escribía el estudiantado (implicación conductual), pero no hizo que *quisiera* escribir más (motivación intrínseca).([[scheu-mobile-chatbot-journaling-motivation-2026]])

## La distinción entre creencias y experiencias

[[cognitive-offloading-metacognitive-review-2026|Guo y Ye (2026)]] ofrecen una explicación teóricamente más precisa de cómo la metacognición gobierna la selección de estrategias, distinguiendo dos componentes que operan en fases distintas:

- **Creencias metacognitivas:** autoconcepciones estables y autorreferenciales almacenadas en la memoria a largo plazo (por ejemplo, creencias sobre la propia capacidad de memoria o sobre la fiabilidad de una herramienta). Anclan las elecciones de estrategia *antes* de iniciar la tarea.
- **Experiencias metacognitivas:** sentimientos dinámicos y específicos de la tarea (dificultad percibida, confianza, carga mental) que impulsan la *actualización* de las creencias durante la ejecución de la tarea.

Esta distinción da lugar al principio del **emparejamiento entre momento y componente**: la retroalimentación que apunta a las creencias (por ejemplo, clasificaciones comparativas) es más eficaz en la fase de preparación previa a la tarea, mientras que la retroalimentación que apunta a las experiencias (por ejemplo, indicadores inmediatos de corrección) es más eficaz durante la ejecución de la tarea. La retroalimentación de clasificación abstracta puede quedar separada de las experiencias específicas de la tarea que dominan la toma de decisiones inmediata, o ser anulada por ellas, lo que explica por qué algunas intervenciones de retroalimentación no consiguen cambiar la conducta. Esto da al [[teacher-role|profesorado]] una justificación contingente a la fase para diseñar andamiajes metacognitivos en torno a las herramientas de IA: calibrar las creencias antes del uso y ofrecer retroalimentación inmediata y específica de la tarea durante el uso.

### La calibración se puede entrenar: predicción y retroalimentación

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai y Gilbert (2026)]] aportan evidencia causal directa de que la calibración metacognitiva es una habilidad *entrenable*. En dos experimentos prerregistrados (N=164, N=416), **solo cinco ensayos de práctica que emparejaban una predicción de rendimiento con retroalimentación verídica** mejoraron la calibración y redujeron el sesgo. Un diseño aditivo de cuatro grupos aisló el componente causal: **hacer predicciones por sí solo fue ineficaz; añadir retroalimentación de rendimiento impulsó la mejora; etiquetar explícitamente el exceso o el defecto de confianza no añadió nada más**. En lo esencial, la mejora actuó sobre la calibración *absoluta* (elevando la confianza de quienes tenían poca y bajándola en quienes tenían demasiada), de modo que corrigió la [[trust-calibration|mala calibración]] en ambas direcciones en lugar de desplazar a todos en un mismo sentido (por eso los efectos con signo o direccionales fueron nulos). Esto refuerza la explicación de «experiencias y no creencias» anterior y muestra el *entrenamiento metacognitivo mínimo viable*: predicción más retroalimentación inmediata y específica de la tarea.

- **Una indicación de reflexión breve afina la monitorización durante las decisiones apoyadas por IA.** [[ren-metacognitive-awareness-genai-reliance-2026|Ren (2026)]] añadió tres indicaciones de reflexión antes de finalizar las respuestas en un experimento de tres condiciones con 342 estudiantes de grado: la aceptación de consejos incorrectos de ChatGPT cayó del 62.4% al 39.7% (*OR* = 0.40) y la calibración de la conciencia subió (0.59 frente a 0.41), mientras que la precisión de las recomendaciones y la alineación con los consejos correctos se mantuvieron altas. La reflexión hizo la confianza más discriminativa en lugar de uniformemente defensiva, lo que respalda tratar la confianza como un problema de monitorización y no como una cuestión de cuánta IA se usa.

## Implicaciones para el diseño de herramientas

1. **Preservar la «fricción» del pensamiento:** si la IA escribe la reflexión, el estudiantado no construye habilidad metacognitiva. Los asistentes de diario deberían andamiar, no redactar.
2. **Modelar el lenguaje metacognitivo:** el curso basado en ejemplos funcionó en parte porque expuso al estudiantado al diálogo interno metacognitivo de modelos expertos.
3. **Separar el apoyo a la motivación del apoyo a la habilidad:** el desarrollo de habilidades metacognitivas (estructurado por el curso) y la mejora de la productividad (asistida por IA) pueden requerir estrategias de diseño distintas.

La IA puede alterar el **umbral metacognitivo** para decidir que uno sabe lo suficiente para responder: [[ai-advice-suppresses-ikt-suspension-2026|Marcoccia et al. (2026)]] encontraron que el mero acceso a consejos de IA suprimía la disposición de las personas a suspender el juicio ante la incertidumbre, incluso con consejos incorrectos y con incentivos de precisión, un efecto que sobrevivió a la salida de IA no solicitada y a incentivos monetarios.

La [[agentic-ai|IA agéntica]] proactiva puede desplazar el propio bucle metacognitivo de quien aprende: [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] sostienen que, cuando los agentes precargan, inician y se autocorrigen, la planificación, la monitorización y la evaluación del agente sustituyen las de quien aprende, eliminando la [[retrieval-spacing-interleaving|práctica de recuperación]] y la automonitorización de las que dependen las [[desirable-difficulties|dificultades deseables]] y el entrenamiento metacognitivo.

- **La [[pedagogy|pedagogía]] basada en errores como entrenamiento metacognitivo:** [[pedagogy-ai-mistakes|Hosseini (2026)]] muestra que exponer deliberadamente al estudiantado a errores generados por IA en un curso de diseño de bases de datos activa la monitorización metacognitiva: el estudiantado inspeccionó las salidas, identificó errores y revisó diseños en lugar de aceptar la salida de la IA sin más. La [[ai-literacy|alfabetización en IA]] [[self-report-measures|autoinformada]] correlacionó débil y negativamente con la competencia objetiva (*r*=−0.39), una brecha de calibración que el ciclo de crítica y refinamiento está diseñado para reducir.
- **El [[productive-failure|fallo productivo]] activa la monitorización metacognitiva.** [[kim-ai-productive-failure-adult-2026|Kim et al. (2026)]] muestran que el aprendizaje basado en el fallo productivo activa la reflexión sobre los propios intentos; las tareas de [[lukesova-clue-before-correction-2026|pista antes de la corrección]] exigen a quien aprende diagnosticar y corregir sus propios errores, una actividad metacognitiva en la que la IA da pistas en lugar de respuestas.
- **La autorregulación amortigua el daño de la externalización, pero no puede anularlo.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] muestra que la regulación metacognitiva (la escritura autorregulada) atenúa la asociación negativa entre la [[cognitive-offloading|descarga cognitiva]] profunda y los resultados independientes sin IA en la escritura asistida por IA generativa (interacción B = 0.22), pero no la elimina; una condición de apoyo acotado que combinaba límites de delegación con reflexión obligatoria sobre cómo se aceptaron o rechazaron las sugerencias de la IA produjo el mejor rendimiento independiente.
- **La profundidad de la búsqueda de explicaciones predice la calidad de la tarea, no el recuerdo.** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] muestra que las indicaciones que buscan explicaciones (profundidad) en la interacción con LLM predicen la calidad de la tarea pero no el recuerdo inmediato, e interpreta la disociación mediante la elaboración (comprensión) frente a la práctica de recuperación (consolidación), y sugiere que la búsqueda de explicaciones correlaciona con la monitorización metacognitiva, aunque hay que añadir exigencias de recuperación para una retención duradera.

- **La metacognición autoinformada es un proxy débil de la regulación *con* un LLM.** [[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al. (2026)]] dieron a 116 estudiantes de [[k-12|secundaria]] un taller de alfabetización en IA de dos horas y luego midieron su interacción con el LLM durante problemas de ciencias: el estudiantado formado aceptó con menos frecuencia indicaciones poco especificadas (51.5% frente a 66.7%), hizo preguntas de seguimiento tras una respuesta débil mucho más a menudo (59.2% frente a 27.9%, *d* = 0.80) y juzgó la corrección de las respuestas con más sensibilidad a la calidad del prompt (OR de interacción = 2.52). Ni una escala general de conciencia metacognitiva (Jr. MAI) ni los autoinformes sobre IA generativa predijeron esas conductas ni el rendimiento final (*r* = .04 y *r* = .01); la monitorización y el control durante el uso de la [[generative-ai|IA generativa]] son específicos de la tarea, y la conducta observable aporta más información que los instrumentos de autoinforme construidos para capturarla.

- **La puntuación automatizada llegó a la fase de desempeño, no a la planificación que la precede.** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen y Liu (2026)]] dieron a 46 estudiantes de interpretación 14 semanas de puntuación automatizada semanal con una puntuación devuelta, los errores marcados y una versión de referencia: el grupo automatizado ganó más en conjunto (*d* = 1.03), pero solo la monitorización durante la práctica correlacionó con las ganancias de puntuación (*r* = 0.42), mientras que la planificación previa al aprendizaje quedó cerca del punto medio de la escala (M = 3.01). La evaluación y la reflexión obtuvieron la segunda media más alta (3.87 de 5) pero mostraron un vínculo casi nulo con las ganancias (*r* = 0.10), así que una puntuación de reflexión alta no debería leerse como reflexión productiva.
- **La alfabetización en verificación solo rinde a través de la autorregulación metacognitiva.** [[davor-ai-supported-learning-higher-order-outcomes-2026|Davor, Larbi y Boateng (2026)]] encuestaron a 533 estudiantes universitarios y encontraron que la alfabetización en verificación de la IA no tenía asociación directa con el pensamiento crítico ni con la resolución de problemas técnicos; solo importaba de forma indirecta, a través de la autorregulación metacognitiva (un patrón de mediación completa). La tendencia a la [[cognitive-offloading|descarga cognitiva]] iba en la dirección opuesta, y predecía una menor autorregulación (-.294) junto con un menor pensamiento crítico (-.240) y una menor resolución de problemas (-.312).
- **La propia monitorización de quien evalúa también es trabajo metacognitivo.** [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl y Leuders (2026)]] sostienen que una inferencia diagnóstica generada por IA no es evidencia en bruto sino una interpretación ya hecha, así que el profesorado debe integrarla con sus propias observaciones en un proceso que llaman *metadiagnóstico*, decidiendo deliberadamente si aceptarla, rechazarla o modificarla. Eso sitúa un segundo bucle metacognitivo junto al de quien aprende: no solo cómo regula el estudiantado su pensamiento con la IA, sino cómo evalúa el profesorado lo que el sistema afirma sobre ese pensamiento.

## Conceptos conectados

- [[learners]] — El estudiantado: el paraguas de los conceptos del lado de quien aprende
- [[self-regulated-learning]]
- [[self-assessment]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[agentic-ai]]
- [[formative-assessment]]
- [[ai-literacy]]
- [[retrieval-spacing-interleaving]] — los juicios de aprendizaje y la ilusión de fluidez que corrige la práctica de recuperación
- [[cognitive-surrender]]

## Artículos conectados
- [[powerful-learning-with-emerging-technology-2025]] — La explicabilidad y el esfuerzo productivo como diseño metacognitivo
- [[genai-performance-vs-learning]] — la distinción entre rendimiento y aprendizaje, y la pereza metacognitiva como evaluación externalizada (Yan et al. 2025)
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — un taller de alfabetización en IA de dos horas cambió la regulación de la interacción con el LLM de estudiantes de secundaria, a diferencia de su metacognición autoinformada (Clerc et al. 2026)
- [[student-ai-interaction-consecutive-interpreting-2026]] — Student-AI Interaction in Computer-Assisted Consecutive Interpreting
- [[du-yuan-epistemic-dependence-2026]] — La dependencia epistémica en el aprendizaje mediado por IA (Du y Yuan 2026)
- [[pearls-epistemic-verification-2026]] — El marco PEARLS para la agencia epistémica y la verificación de la salida de la IA (Wang 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Lo que pregunta el estudiantado importa: profundidad de la interacción con el LLM, calidad de la tarea y recuerdo inmediato (Tsiligkiris 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — La descarga cognitiva sensible a las capas en la escritura asistida por IA generativa (Chen 2026)
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — Cómo regula el estudiantado su aprendizaje con un chatbot de IA generativa
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — La búsqueda de ayuda mediada por LLM en STEM: por capas, instrumental y verificada
- [[cui-motivation-roles-metacognitive-genai-2026]] — La motivación y los papeles en la implicación metacognitiva con IA generativa
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — El entrenamiento metacognitivo facilita una descarga cognitiva óptima (Ngai y Gilbert 2026)
- [[cognitive-offloading-metacognitive-review-2026]] — Perspectivas metacognitivas sobre la descarga cognitiva: mecanismos, intervenciones e implicaciones educativas (Guo y Ye 2026)
- [[idea-framework-metacognitive-genai-2026]] — El marco IDEA para el uso de la IA generativa regulado metacognitivamente
- [[haiml-human-centered-ai-metacognitive-model-2026]] — HAIML: un modelo metacognitivo de aprendizaje con IA centrado en las personas (agencia y aprendizaje reflexivo)
- [[metacognitively-discordant-completion-genai-2026]] — La finalización metacognitivamente discordante y el paso consciente por la no comprensión
- [[ai-metacognition-stem-review]] — Las herramientas de IA que andamian la metacognición en STEM
- [[ai-making-us-stupid]] — ¿Nos está volviendo estúpidos la IA? Una crítica de la descarga cognitiva
- [[stanford-evidence-base-ai-k12-2026]] — La IA de propósito general suprime la metacognición al completar el razonamiento
- [[young-people-learning-generative-ai-rapid-review-2026]] — La brecha de mala calibración y la inequidad metacognitiva con la IA generativa
- [[ai-advice-suppresses-ikt-suspension-2026]] — Los consejos de IA suprimen la disposición a decir «no lo sé», incluso con consejos incorrectos e incentivos de precisión
- [[agentic-ai-pedagogical-best-practice-2026]] — La IA agéntica y las buenas prácticas pedagógicas: la tensión entre automatización y aprendizaje
- [[cognitive-offloading-speedup-illusion]] — La descarga cognitiva y la ilusión de aceleración en la interacción entre personas y IA
- [[lodge-loble-cognitive-offloading-2026]] — La IA, la descarga cognitiva y sus implicaciones para la educación (Lodge y Loble 2026)
- [[shaw-nave-cognitive-surrender-2026]] — La teoría de los tres sistemas y la rendición cognitiva: cómo la IA reconfigura el razonamiento humano (Shaw y Nave 2026)
- [[pedagogy-ai-mistakes]] — La pedagogía de los errores de la IA: fomentar el pensamiento de orden superior (Hosseini 2026)
- [[kim-ai-productive-failure-adult-2026]] — Diseñar sistemas de IA para apoyar el aprendizaje basado en el fallo productivo
- [[lukesova-clue-before-correction-2026]] — Pista antes de la corrección: ChatGPT para el aprendizaje autónomo de idiomas
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — La reflexión sobre el proceso de prompting y el desarrollo de la autoría en el ciclo de alfabetización en prompts (Miles, Haber-Curran y Arar 2026)
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — El andamiaje adaptativo necesita contingencia: un tutor de IA que escala y se desvanece según lo que hace quien aprende
- [[ren-metacognitive-awareness-genai-reliance-2026]] — Una indicación de reflexión redujo la aceptación de consejos de IA incorrectos y mejoró la calibración de la conciencia (Ren 2026)
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — La puntuación automatizada reforzó la monitorización pero no la planificación, y la reflexión autoinformada siguió siendo improductiva (Chen y Liu 2026)
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — La alfabetización en verificación que actúa solo a través de la autorregulación metacognitiva (Davor, Larbi y Boateng 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Del diagnóstico al metadiagnóstico: el profesorado juzga las inferencias generadas por IA (Hoppe, Loibl y Leuders 2026)
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Open Questions Towards Skill-Sustaining Reliance in Reflective AI Engagement
