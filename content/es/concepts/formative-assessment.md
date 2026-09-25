---
title: Evaluación formativa
created: "2026-09-25T04:31:09-04:00"
updated: "2026-09-25T04:31:09-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
confidence: high
translation_of: concepts/formative-assessment
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

> **La evaluación formativa**: la evaluación diseñada para informar la enseñanza y el aprendizaje en curso, en contraposición a la evaluación [[summative-assessment|sumativa]]. En la educación con IA, la evaluación formativa es a la vez transformada por la IA y esencial para ella: los sistemas de IA pueden generar, validar y adaptar ítems y retroalimentación formativos a escala, mientras que la retroalimentación formativa es un mecanismo primario por el que los [[intelligent-tutoring|tutores de IA]] y los [[adaptive-learning|sistemas adaptativos]] apoyan el aprendizaje. La [[research-methods-aied|investigación]] de la base de conocimiento examina los ítems formativos generados por IA, la retroalimentación generada por IA y el diseño y la evaluación de estos sistemas.

## Preguntas para reflexionar

- La evaluación formativa está pensada para cerrar el bucle: sacar a la luz lo que el estudiantado no sabe y darle una retroalimentación sobre la que pueda actuar *mientras el aprendizaje todavía está en curso*. ¿En qué se diferencia eso de forma fundamental de la evaluación sumativa, y cuándo pueden confundirse ambas en la práctica?
- La IA puede generar preguntas de opción múltiple con una precisión impresionante en las dimensiones verificables, pero es más débil en las dimensiones que exigen juicio didáctico. Si una máquina es buena con las respuestas correctas pero más débil en el juicio [[pedagogy|pedagógico]], ¿qué debería confiársele y qué deberían seguir haciendo las personas?
- La retroalimentación generada por IA solo ayuda cuando el estudiantado la pone realmente en práctica: la condición de «retroalimentación puesta en práctica», en la que el estudiantado selecciona, evalúa y aplica las sugerencias, superó a simplemente recibir retroalimentación. Si la puesta en práctica importa más que la retroalimentación misma, ¿qué significa eso para cómo debería diseñarse la retroalimentación formativa?
- La retroalimentación se describe no como una transferencia de información sino como una práctica [[ethics|ética]] y relacional. ¿Qué se pierde cuando la evaluación formativa se produce en masa como «basura de IA», y qué pueden preservar los bancos de comentarios humanos y el cuidado relacional?

## Introducción

La evaluación formativa es central para la [[ai-education|IA en la educación]] porque se sitúa en la confluencia de la [[assessment|evaluación]] y la [[feedback|retroalimentación para el aprendizaje]]. Su propósito es cerrar el bucle: sacar a la luz lo que el estudiantado sabe y no sabe, y ofrecer retroalimentación sobre la que pueda actuar para mejorar. La IA hace esto viable a escala (generar ítems, puntuar respuestas y ofrecer retroalimentación individualizada), pero la investigación de la base de conocimiento muestra que la calidad varía enormemente según el tipo de ítem y que la retroalimentación solo ayuda cuando el estudiantado la pone realmente en práctica.

## Ítems formativos generados por IA

Los sistemas de IA generan ítems de evaluación formativa en distintas modalidades, con una fiabilidad que varía según el tipo:

- **Preguntas de opción múltiple:** [[code-gen]] muestra que la [[agentic-ai|IA agéntica]] puede generar de forma fiable preguntas de opción múltiple para la comprensión de código cuando se validan en siete dimensiones pedagógicas: las tasas de éxito alcanzan el **98,6%** en alineación conceptual y el **79,9%** en calidad de la retroalimentación, lo que sugiere que la IA es más fuerte en las dimensiones verificables y más débil en las dimensiones que exigen juicio didáctico. Esto conecta con la [[automated-question-generation|generación automática de preguntas]] en un sentido más amplio.
- **Corrección automática de ensayos:** los marcos multiagente (por ejemplo, MASS) mejoran la consistencia respecto a los [[llm|LLM]] aislados en la [[automated-essay-scoring|corrección de ensayos]], aunque la [[explainable-ai|interpretabilidad]] de las decisiones de puntuación multiagente sigue siendo un reto abierto.
- **Flujos de puntuación formativa:** [[cotal-formative-assessment-scoring-2026|CoTAL]] combina los prompts de cadena de pensamiento con el [[active-learning|aprendizaje activo]] y el diseño centrado en la evidencia para producir una puntuación formativa generalizable con [[prompt-engineering|ingeniería de prompts]] con intervención humana.
- **Evaluaciones de alta frecuencia y [[automated-assessment|corregidas automáticamente]]:** [[automated-formative-assessments-a-level-sciences|las evaluaciones formativas automatizadas en ciencias de nivel A]] examinan el efecto de una evaluación formativa de alta frecuencia y corregida automáticamente sobre los [[learning-gains|resultados de aprendizaje]]. Una revisión de alcance sobre la corrección automática de respuestas cortas en [[science-education|ciencias]] (de 2017 a principios de 2024) confirma que este caso de uso formativo de respuestas cortas es un campo con un impulso real: los modelos de la familia BERT dominaron la corrección automática hasta 2021, antes de la llegada del prompting de [[llm|LLM]] más grandes a partir de aproximadamente 2022, y los modelos aumentados con el dominio, conscientes de la rúbrica y de cadena de pensamiento obtuvieron los mejores resultados; sin embargo, las peticiones de la revisión de una evaluación exhaustiva y las brechas no resueltas de [[bias-mitigation|equidad]] y de explicabilidad aconsejan no extender estos sistemas a usos [[summative-assessment|sumativos]] o de alto riesgo no mediados ([[auto-marking-short-answer-science-2026]]).

## Retroalimentación generada por IA

Un amplio conjunto de investigaciones de la base de conocimiento examina la retroalimentación formativa generada por IA:

- **El problema de la puesta en práctica:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13.037 estudiantes; 51.296 recursos) muestra que el valor de la retroalimentación depende de si el estudiantado la *pone en práctica*: la condición de **retroalimentación puesta en práctica**, en la que el estudiantado selecciona, evalúa y aplica las sugerencias de retroalimentación de la IA, superó a la retroalimentación dirigida simple.
- **La retroalimentación no es una transferencia de información:** [[care-full-feedback-genai|The care-full craft of feedback]] sostiene que la retroalimentación es una práctica ética y relacional, y no una transmisión de información: la retroalimentación solo constituye retroalimentación cuando el estudiantado le da sentido y actúa a partir de ella, y contrasta la «basura de IA» producida en masa con los atajos de los bancos de comentarios humanos.
- **La retroalimentación secuenciada puede volverse en contra:** [[sequenced-ai-feedback-learning|la retroalimentación secuenciada con IA]] (ánimo, después pistas, después respuesta correcta, diseñada para promover la autonomía) **perjudicó el aprendizaje** en un experimento aleatorizado (N=199) pese a aumentar la [[student-engagement|implicación]] y las percepciones positivas, un hallazgo de cautela sobre el diseño de la retroalimentación.
- **Herramientas centradas en quien aprende:** [[learner-centered-feedback-ai|PolyFeed]] combina modelos de sugerencias de aprendizaje automático con la práctica del [[teacher-role|profesorado]] y muestra cómo adopta y adapta el profesorado las sugerencias de retroalimentación de la IA; la [[ai-internal-feedback-evaluative-judgments|retroalimentación interna apoyada por IA]] ayuda al estudiantado de grado a desarrollar el [[evaluative-judgment|juicio evaluativo]].
- **Prompts guiados por rúbrica y retroalimentación sensible al papel:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraron que el refinamiento iterativo y conjunto de la rúbrica (aclarar los descriptores de desempeño y aceptar explícitamente los indicadores implícitos de aprendizaje) elevó el acuerdo entre los LLM y las personas sobre el trabajo de diseño del estudiantado del 54,75% al 81,25% (el alfa de Cronbach subió de 0,393 a 0,798), con las mayores ganancias en la categoría cognitivamente exigente de Iteración y Reflexión. Dar el mismo modelo bajo los papeles de instructor, revisor entre pares y evaluador de subvenciones produjo retroalimentación evaluativa distinta, y los LLM posteriores a la revisión fueron más consistentes que algunas personas evaluadoras al aplicar los umbrales de desempeño, lo que sitúa a los LLM guiados por rúbrica como socios de calibración y codiseño en entornos de retroalimentación formativa, con la supervisión humana en el bucle todavía como esencial.
- **La retroalimentación con IA sostiene la participación y produce ganancias a escala:** el experimento de campo de un semestre de [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] en tutorías de grado encontró que la retroalimentación formativa individual de GPT-4 (que abarca las tres dimensiones de Hattie y Timperley: Feed-Back, Feed-Up, Feed-Forward) mantuvo la participación más alta a lo largo de ocho tareas abiertas, alargó las respuestas del estudiantado y produjo las mayores ganancias de aprendizaje de contenido, un efecto impulsado por un suministro de IA fiable y consistente, ya que cuando se recibió de verdad una retroalimentación textual entre pares de alta calidad, los resultados de los pares igualaron a los de la IA.
- **El futuro de la retroalimentación:** [[feedback-futures-genai|Feedback Futures]] sintetiza un número especial y sostiene que la cuestión no es *si* la [[generative-ai|IA generativa]] puede producir retroalimentación, sino cómo diseñar una retroalimentación que apoye el aprendizaje, y destila las tensiones recurrentes del campo.
- **Retroalimentación con el diagnóstico primero para problemas cuantitativos abiertos:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] ofrece retroalimentación formativa personalizada en tiempo real sobre preguntas de fórmula calculada de economía de la ingeniería, un dominio en el que las soluciones manuscritas y no estructuradas habían bloqueado hasta entonces el apoyo de la IA. Una base de [[machine-learning|XGBoost]] por pregunta diagnostica los errores probables etiquetados por rúbrica a partir de las respuestas numéricas entregadas por el estudiantado (precisión media 0,81, exhaustividad 0,79), y un esquema basado en el diálogo solicita respuestas intermedias solo cuando la confianza de la predicción es baja, lo que equilibra la precisión de la retroalimentación con la eficiencia de la recogida de datos dentro de una interfaz web de banco de preguntas.
- **Escala y límites de la retroalimentación formativa con LLM (evidencia sistemática):** una [[meta-analysis-systematic-review|revisión sistemática]] guiada por PRISMA de 42 estudios empíricos (de 2023 a 2025) encuentra que los LLM pueden reducir la carga de trabajo del profesorado y ofrecer retroalimentación rápida y personalizada a escala, sobre todo en cohortes grandes o de [[higher-ed|educación superior]], pero que esa retroalimentación es a veces demasiado genérica o está desalineada con la calificación asignada, y que la fiabilidad baja en tareas más largas, [[multilingual-learning|multilingües]] o matizadas, lo que refuerza que la retroalimentación formativa con IA se despliega mejor bajo la supervisión del personal docente ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **La adaptatividad es un ingrediente separable, no un adorno:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod y Breitwieser (2026)]] aportan la prueba causal directa que la mayoría de los estudios sobre retroalimentación con LLM dan por supuesta, y enfrentan la retroalimentación contingente a la respuesta de GPT-4 con orientaciones genéricas escritas por personas expertas y emparejadas en estructura, tono, longitud y formulación [[motivation|motivacional]] (verificado con una rúbrica de calidad de cinco dimensiones, κ = 0,76 a 1,00). En un experimento prerregistrado intrasujeto, 155 estudiantes alemanes de quinto y sexto curso (M = 12,08 años) revisaron seis planes condicionales: la calidad de los planes subió de una mediana de **2 → 5** con retroalimentación adaptativa frente a **2 → 3** con orientaciones genéricas (V intrapersonal = 10.440, p < .001, r = .86; estimación de la interacción condición × tiempo = 1,68, EE = 0,14, p < .001, sin diferencias previas al apoyo). El estudiantado valoró la retroalimentación adaptativa como más útil (r = .67) y más motivadora (r = .74), y las percepciones a nivel de ensayo predijeron el tamaño de las ganancias de revisión, lo que convierte la [[technology-acceptance-model|utilidad percibida]] en parte de la vía y no en un subproducto afectivo. Como el control estaba a su vez bien diseñado, el estudio muestra un valor añadido *más allá* de una buena orientación no contingente, y no la diferencia entre recibir retroalimentación y no recibirla: la orientación genérica es un sustituto genuino pero limitado que se estanca en su propia mediana. La planificación sirvió como caso de prueba por ser una estrategia central del [[self-regulated-learning|aprendizaje autorregulado]] con criterios de calidad explícitos, lo que hace que la contingencia, la propiedad que distingue el [[scaffolding|andamiaje]] del apoyo estático, sea directamente medible en una respuesta de una sola frase. Las autorías definen la adaptatividad en sentido estricto como la adaptación del contenido de la retroalimentación a la respuesta concreta de quien aprende, y la distinguen de la interactividad conversacional, del tono y del [[adaptive-learning|aprendizaje adaptativo]] de rasgo estable.
- **La utilidad percibida sigue a la accionabilidad:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] hicieron que 144 estudiantes de programación valoraran 893 instancias de retroalimentación generadas por LLM en cinco dimensiones y 237 informes consolidados en seis, manteniendo constantes el dominio, la tarea y el instrumento mientras variaba el nivel educativo. Las valoraciones fueron favorables en todos los casos, con medias a nivel de estudiante de 4,24 a 4,43 para las respuestas individuales y de 4,11 a 4,38 para los informes, pero la accionabilidad y la utilidad recibieron las valoraciones más bajas, aun cuando la accionabilidad y la precisión percibida tenían los mayores pesos relativos (32,6% y 29,0%) en un modelo que explicaba el 76% de la varianza de la utilidad percibida, y la motivación y la personalización encabezaban un modelo a nivel de informe de la intención de uso que explicaba el 53%. Como la accionabilidad es la dimensión que la investigación sobre [[feedback]] considera más difícil de ofrecer, el patrón se lee como [[technology-acceptance-model|aceptación tecnológica]] aplicada a la retroalimentación: la utilidad sigue a si quien aprende puede actuar, y no a lo pulida que suene la retroalimentación.

## Diseño fundamentado en el currículo y con el personal docente en el bucle

[[ai-learning-tools-engineering-education-needs|LearnLens]] aborda tres problemas persistentes de la evaluación formativa con IA: la **evaluación consciente de los errores** (capturar errores de razonamiento matizados y no fallos superficiales), las **cadenas de memoria vinculadas a los temas** (sustituir la [[rag]] ruidosa basada en similitud por una recuperación estructurada y fundamentada en el [[curriculum-design|currículo]]) y el diseño **con el personal docente en el bucle** (personalización y supervisión por parte del profesorado, y no automatización total). Esto conecta con la tensión más amplia de la [[human-in-the-loop-ai|IA con intervención humana]]: automatización escalable con validación experta.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl y Leuders (2026)]] afinan qué significa tener al personal docente en el bucle cuando una herramienta produce sus propias afirmaciones y no observaciones en bruto. Su análisis conceptual sostiene que las inferencias diagnósticas generadas por IA son evidencia cualitativamente distinta, porque ya son el producto de una interpretación algorítmica, de modo que el profesorado necesita una capa adicional que las autorías llaman **metadiagnóstico**: aceptar, rechazar o modificar deliberadamente una inferencia e integrarla con su propio conocimiento contextual. Especificar el marco DiaCoM para esto trata las inferencias generadas por IA como una característica de la situación y la decisión de aceptar, rechazar o modificar como conducta diagnóstica, a la vez que amplía las características personales que necesita el profesorado para incluir el conocimiento de cómo funcionan de verdad los sistemas de IA. Como los sistemas actuales se apoyan sobre todo en datos de desempeño, como la corrección de la tarea y el tiempo de finalización, los estados motivacionales y la dinámica del aula siguen en gran medida ausentes, así que el artículo mantiene al profesorado, y no al cuadro de mando, como el agente reflexivo responsable, y enmarca el juicio sobre las afirmaciones algorítmicas como un objetivo de desarrollo profesional.

## Compensaciones de diseño

| Dimensión | Idoneidad de la IA | Requisito humano |
|---|---|---|
| Corrección factual | Alta | Bajo |
| Alineación conceptual | Alta | Medio |
| Calidad de los distractores | Baja | Alto |
| Profundidad de la retroalimentación | Baja | Alto |
| Consistencia de la rúbrica | Media | Medio |

## Evaluación, retroalimentación y aprendizaje

La evaluación formativa en la educación con IA conecta con el propio proceso de aprendizaje:

- **Bucles de retroalimentación:** los [[feedback|bucles de retroalimentación]] son el mecanismo por el que la evaluación formativa informa al aprendizaje; los tutores de IA y los sistemas adaptativos cierran estos bucles a escala.
- **Aprendizaje autorregulado:** la retroalimentación formativa apoya el [[self-regulated-learning|aprendizaje autorregulado]] cuando el estudiantado monitoriza su progreso y se ajusta; la retroalimentación con IA debería cultivar el [[ai-internal-feedback-evaluative-judgments|juicio evaluativo]], y no desplazarlo.
- **La puntuación automatizada llega a algunas fases del ciclo, no a todas:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen y Liu (2026)]] realizaron un cuasiexperimento de 14 semanas en el que 46 estudiantes de interpretación entregaron versiones semanales a un sistema de puntuación automatizada que devolvía una puntuación inmediata, una transcripción, los errores marcados y una versión de referencia, mientras que un grupo de control solo recibió retroalimentación del profesorado para toda la clase. El grupo automatizado mejoró más en conjunto (d = 1,03), pero la ganancia se quedó donde el déficit era descomponible, la señal fiable y la escala sensible: la precisión lingüística y la coherencia lógica subieron, mientras que la fidelidad de la información (acuerdo con las personas evaluadoras r = 0,12) y la fluidez de la entrega no se movieron. El [[self-regulated-learning|aprendizaje autorregulado]] fue desigual de forma paralela, con la ejecución y la monitorización correlacionando con las ganancias de puntuación (r = 0,42) mientras que la planificación y la motivación emocional quedaron cerca del punto medio de la escala, y varios estudiantes aplazaron su implicación tras puntuaciones bajas en lugar de analizar las causas. El sistema llegó a la fase de desempeño del ciclo, y no a la planificación que la precede.
- **Del diagnóstico automatizado a la práctica generada:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo y Li (2026)]] conectan la alineación entre audio y partitura, la cuantificación de errores y una capa de optimización de política proximal en un único bucle cerrado para la educación musical, convierten las señales de error rítmico (91,2% de exhaustividad, 98,4% de especificidad) en recompensas que guían las pistas de práctica generadas, y comunican una interacción significativa de Grupo x Tiempo favorable al grupo del sistema (beta = 0,52) en un cuasiexperimento de 12 semanas con 120 estudiantes de grado de música. Las autorías lo enmarcan como viabilidad técnica, y la lectura práctica es de triaje y no de evaluación: una precisión del 89,7% significa que aproximadamente uno de cada diez errores rítmicos señalados es una falsa alarma, y las personas expertas que revisaron el estudio valoraron el apoyo a la expresión musical como el área más débil, así que los bucles automatizados sirven para los ejercicios técnicos mientras el juicio expresivo permanece en manos del profesorado.
- **Andamiaje:** el [[scaffolding|andamiaje]] y la evaluación formativa funcionan juntos; la IA puede ofrecer pistas y avisos en el momento oportuno, aunque la investigación sobre retroalimentación secuenciada advierte contra una estructuración excesiva.
- **Validez y calidad:** hay que evaluar la [[ai-feedback-quality|calidad]] y la [[assessment-validity|validez]] de los ítems formativos y de la retroalimentación generados por IA; la [[ai-ed-evaluation|evaluación de la IA educativa]] aporta los métodos.

## Riesgo: la evaluación como vigilancia

Los sistemas de evaluación formativa pueden pasar de ser herramientas de apoyo al aprendizaje a ser infraestructura de monitorización del comportamiento. Los mismos flujos de datos que permiten la tutoría adaptativa pueden permitir un seguimiento punitivo si la [[governance|gobernanza]] es débil. Esto conecta con la [[privacy|privacidad]] y el [[well-being|bienestar del estudiantado]], y aboga por sistemas formativos que apoyen el aprendizaje en lugar de vigilarlo.

## Implicaciones para la IA en la educación

- **Ajuste el tipo de ítem a la fiabilidad de la IA:** use la IA para las dimensiones verificables (alineación conceptual, corrección) y reserve el juicio humano para las dimensiones didácticas (calidad de los distractores, profundidad de la retroalimentación).
- **Diseñe para la puesta en práctica, no solo para el suministro:** la retroalimentación con IA solo ayuda cuando el estudiantado la selecciona, la evalúa y la aplica; estructure flujos de trabajo que apoyen esa puesta en práctica.
- **El diseño de la retroalimentación importa más que el volumen:** la retroalimentación secuenciada o demasiado estructurada puede volverse en contra; priorice la retroalimentación que apoya la construcción de sentido y la autonomía del estudiantado.
- **Mantenga al personal docente en el bucle:** los sistemas fundamentados en el currículo y con el personal docente en el bucle mejoran la pertinencia y reducen el ruido.
- **Evalúe la calidad y la validez:** valore los ítems y la retroalimentación generados por IA por su calidad, su validez y su [[equity-in-ai-education|equidad]], y no solo por la velocidad de generación.
- **Trate la evaluación formativa como una filosofía, no como un conjunto de herramientas.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais y Galy (2026)]] sintetizan la literatura más amplia sobre educación superior en un paradigma de «evaluación para el aprendizaje» que enmarca la [[feedback|retroalimentación]] formativa, continua e individualizada como una filosofía general y no como un mero conjunto de herramientas, que equilibra los propósitos formativos con los [[summative-assessment|sumativos]] y pone en primer plano la [[agency|agencia del estudiantado]], la autorregulación y la habilidad [[metacognition|metacognitiva]]. Identifican cinco prácticas que se refuerzan mutuamente (la [[authentic-assessment|evaluación auténtica]], la autoevaluación y la [[peer-assessment|evaluación entre pares]], la reevaluación, la [[mastery-learning|calificación basada en estándares]] y la descalificación) mediante las cuales puede ponerse en práctica esta filosofía, y señalan que su adopción sigue siendo muy desigual entre las áreas de la educación superior.

## Conceptos conectados

- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Evaluación sumativa: formatos resistentes a la IA (exámenes orales, supervisados y con libros cerrados)

## Artículos conectados
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[nicola-richmond-programwide-assessment-genai-2025]] — Program-wide approaches to redesigning assessment in the GenAI era
- [[ni-lam-multiliteracies-ai-portfolio-2026]] — Students' perceptions of multiliteracies development with AI-assisted portfolio assessment
- [[ai-feedback-enactment-workflow-2026]] — Making AI-generated feedback matter: from provision to enactment
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of GenAI
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[sequenced-ai-feedback-learning]] — Impact and pathways of sequenced AI feedback
- [[learner-centered-feedback-ai]] — Enhancing learner-centered feedback with AI
- [[ai-internal-feedback-evaluative-judgments]] — Developing evaluative judgments through AI-supported internal feedback
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: formative assessment scoring with human-in-the-loop prompting
- [[automated-formative-assessments-a-level-sciences]] — High-frequency automated formative assessment
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: curriculum-grounded AI feedback
- [[genai-teacher-feedback-comparison]] — GenAI vs. teacher feedback comparison
- [[chatgpt-feedback-engagement-genai]] — ChatGPT feedback and engagement
- [[becerra-aicofe-feedback-2026]] — AI-coffee feedback framework
- [[code-gen]] — CODE-GEN: validated MCQ generation
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Designing for authentic assessment
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated grading of Linux/bash exams
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Instructor and AI roles in ChatGPT-enhanced formative assessment
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering oral exams as authentic, AI-resistant assessment
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity in the age of GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: AI assessment rubric generation
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive ICAP scaffolding in an ITS (BKT vs DRL)
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[llm-adaptive-programming-error-explanations-2026]] — LLM adaptive explanations of programming errors
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivity makes feedback effective: evidence from AI-generated feedback on children's plans
- [[peer-group-vs-ai-feedback-2026]] — Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Automated scoring, interpreting performance, and self-regulated learning (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Teachers' diagnostic skills in AI-supported formative assessment: from diagnosis to meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Perceived usefulness and intention to use LLM-generated feedback in programming across three educational levels
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Adaptive teaching assistance combining generative AI and big data analytics in music education
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
