---
title: Ingeniería de prompts
created: "2026-09-25T03:54:13-04:00"
updated: "2026-09-25T03:54:13-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems]
translation_of: concepts/prompt-engineering
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

> **La ingeniería de prompts**: la práctica de diseñar y refinar las entradas a los grandes modelos de lenguaje para obtener los resultados deseados. En la educación, la ingeniería de prompts cumple dos papeles: como habilidad de quien aprende (el estudiantado debe aprender a formular indicaciones eficaces) y como palanca de diseño del sistema (quienes desarrollan crean indicaciones que dan forma al comportamiento de la [[intelligent-tutoring|tutoría con IA]]).

## Preguntas para reflexionar

- Es probable que haya escrito una indicación en una herramienta de IA hace poco. Ahora fíjese en esto: la forma en que la formuló no es neutra; puede revelar cómo planificó, pensó y distribuyó su esfuerzo. ¿Qué podrían decir sus propios hábitos al formular indicaciones sobre cómo aborda los problemas?
- Un estudio encontró que las personas usuarias que formulan sus peticiones con destreza obtienen sistemáticamente mejores resultados que quienes expresan la misma intención con menos habilidad. Si acepta que el «privilegio de las indicaciones» es real, ¿se arregla mejor el acceso justo a la IA [[teacher-role|enseñando]] a todo el mundo a formular mejores indicaciones, o rediseñando el sistema para que no exija esa habilidad, y cuáles son las contrapartidas de cada opción?
- ¿Formular indicaciones es un «truco» que se memoriza o una habilidad intelectual genuina? Una línea de [[research-methods-aied|investigación]] lo trata como juicio profesional dentro de una disciplina (periodismo, derecho, [[medical-education|medicina]]); otra lo trata como un núcleo de la alfabetización en IA. ¿Qué visión se ajusta a su propia experiencia de lo que de verdad separa una buena indicación de una mala?
- Las indicaciones bien diseñadas pueden andamiar el pensamiento del estudiantado, mientras que las mal usadas pueden fomentar la descarga cognitiva. ¿Recuerda algún momento en que una respuesta de IA pensó por usted? ¿Qué aspecto de la indicación, o de su intención, lo provocó, y podría haberse diseñado para lograr lo contrario?
- Formular indicaciones es a la vez una habilidad de quien aprende y una palanca de diseño del sistema: algunos tutores ya enrutan y seleccionan indicaciones automáticamente para la persona usuaria. A medida que la formulación de indicaciones se traslada de la persona al sistema, ¿qué pierde el estudiantado y qué gana?
- Fíjese una meta pequeña antes de leer: después de aprender sobre la ingeniería de prompts, decida una forma concreta de cambiar cómo escribe sus indicaciones en su propio trabajo y qué resultado comprobará para saber que funcionó.

## Introducción

La ingeniería de prompts es central para un uso eficaz de la [[generative-ai|IA generativa]] en la educación. A diferencia de las interfaces de programación tradicionales, los LLM responden al lenguaje natural, pero la calidad, la exactitud y el valor [[pedagogy|pedagógico]] de esas respuestas dependen en gran medida del diseño de las indicaciones. La investigación de esta base de conocimiento revela que formular indicaciones no es un acto neutro: refleja cómo piensa, planifica y distribuye el esfuerzo cognitivo el estudiantado. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran y Arar (2026)]] precisan qué abarca el término al distinguir la ingeniería de prompts, la optimización técnica de las entradas para el rendimiento, de la alfabetización en indicaciones, el trabajo retórico, ético y reflexivo de clarificar el propósito, leer la salida de forma crítica y revisarla con razones explícitas. Su Ciclo de alfabetización en indicaciones (Clarify Purpose, Craft the Prompt, Engage with Output, Refine the Prompt, Reflect) y una rúbrica de proceso de ejemplo hacen enseñable esa distinción, y sostienen que una instrucción que solo optimiza las salidas deja intactas las dimensiones éticas y epistemológicas del uso de los LLM.

### Cómo aparece la ingeniería de prompts en la investigación

- **Formular indicaciones como huella cognitiva:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] muestran que los patrones de indicaciones revelan la [[cognitive-offloading|descarga cognitiva]]: el trabajo de alta calidad usa indicaciones ricas en contexto, corteses e instructivas; el de baja calidad muestra un desacuerdo reactivo sin fundamento disciplinar
- **Formular indicaciones como alfabetización:** la investigación sobre la [[tracing-genai-literacy-interaction-patterns|alfabetización en IA generativa en los patrones de interacción]] y sobre la [[aaai2026-prompting-literacy-k12|alfabetización en indicaciones en K-12]] enmarca la formulación de indicaciones como un componente central de la [[ai-literacy|alfabetización en IA]]
- **Formular indicaciones como diseño del sistema:** [[cotal-formative-assessment-scoring-2026|CoTAL]] usa la ingeniería de prompts con [[human-in-the-loop-ai|intervención humana]] para la puntuación en la [[formative-assessment|evaluación formativa]]; [[choi-anchor-aes-prompting-2025|las indicaciones ancladas]] mejoran la [[automated-essay-scoring|corrección automática de ensayos]]
- **Enrutamiento adaptativo de indicaciones:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] trata la selección de indicaciones como parte del propio sistema de tutoría: enrutamiento de indicaciones consciente de la asignatura sobre 14 características pedagógicas, en el que un enrutador estocástico selecciona la mejor indicación para cada conversación. Esto desplaza la formulación de indicaciones de una habilidad de quien aprende a una palanca adaptativa de diseño del sistema, y mejora la [[student-engagement|implicación]] y la eficiencia (28.1% frente a 19.6% de conversión de ejercicios en una prueba A/B del mundo real).
- **Modalidades de indicaciones:** la [[voice-text-prompt-problems-computing-education|investigación sobre la entrada de voz frente a la de texto]] examina si la modalidad de la indicación afecta a las [[learning-gains|mejoras en el aprendizaje]]
- **Indicaciones andamiadas:** el [[guided-llm-scaffolding-independent-learning|andamiaje guiado con LLM]] y el [[scaffolding-critical-engagement-genai-minority-students|andamiaje para la implicación crítica]] enseñan la formulación estructurada de indicaciones como intervención de aprendizaje
- **El privilegio de las indicaciones y la equidad:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] muestran que la pericia al formular indicaciones se distribuye de forma desigual: las personas usuarias que formulan sus peticiones con destreza obtienen sistemáticamente mejores resultados que quienes expresan la misma intención con menos habilidad. Su Prompt Equity Transformer traslada la optimización de las indicaciones de la persona usuaria al sistema de IA, y sostiene que una salida [[equity-in-ai-education|equitativa]] debería estar integrada por diseño en el modelo en lugar de exigirse a los novatos.

- **Formular indicaciones como juicio profesional [[situated-learning|situado]].** Más allá de la alfabetización y del diseño del sistema, la formulación de indicaciones puede enmarcarse como una *práctica disciplinar*. La [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|taxonomía de Dierickx et al.]] para el periodismo trata la definición de tareas y la formulación de indicaciones como una forma de juicio profesional ejercido dentro de las normas epistémicas y éticas de un dominio: traducir el trabajo periodístico a tareas explícitas (recolección de noticias → construcción de sentido → edición → publicación/distribución) hace visibles los supuestos, las prioridades y las [[ethics|consideraciones éticas]], y convierte la formulación de indicaciones en una herramienta pedagógica para la alfabetización crítica en IA. Su lógica se traslada a otras profesiones intensivas en conocimiento (derecho, medicina, políticas públicas).
- **El diseño de indicaciones como especificación instruccional.** Neto y sus colegas (2026) encuentran en su [[meta-analysis-systematic-review|revisión sistemática]] de la IA generativa en la educación sanitaria que el diseño de indicaciones funciona como una forma de especificación instruccional, que codifica los objetivos cognitivos y los criterios de calidad implícitos en la autoría experta; sin embargo, solo el 34.8% de los estudios alineaba el contenido generado con marcos instruccionales y solo el 34.8% describía la formulación de indicaciones con detalle suficiente para reproducirla. Looi, Liu y Sun (2026) muestran además cómo la arquitectura de las indicaciones puede incorporar reglas pedagógicas (puertas de corrección, límites contra adelantar respuestas, puertas de despedida) para restringir el comportamiento tutorial del [[llm|LLM]] en dominios procedimentales.
- **Indicaciones guiadas por rúbrica y conscientes del rol.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraron que las indicaciones guiadas por rúbrica, que tratan la rúbrica como una interfaz semántica entre la intención pedagógica humana y la inferencia de la máquina, elevaron la concordancia entre el LLM y las personas en el trabajo de diseño del estudiantado del 54.75% al 81.25% (alfa de Cronbach 0.393 → 0.798). Las rúbricas diseñadas para los LLM deben equilibrar precisión y flexibilidad: una demasiado vaga invita a la interpretación libre y una demasiado rígida reduce el modelo a la coincidencia de patrones. Las indicaciones conscientes del rol, es decir, evaluar el mismo artefacto con indicaciones de docente, de revisor entre pares y de evaluador de subvenciones, produjeron retroalimentación cualitativamente distinta y epistémicamente diferente, lo que muestra que el diseño de las indicaciones da forma no solo a la exactitud, sino a la postura evaluativa de la salida.
- **Indicaciones conscientes del contexto para la evaluación.** Las indicaciones conscientes del contexto en modelos de lenguaje preentrenados automatizan la codificación de habilidades de [[collaborative-learning|resolución colaborativa de problemas]] a partir de datos de proceso, modelan dependencias entre códigos de comportamiento y fusionan capacidades cognitivas y sociales. Esto permite un análisis estructurado de la RCP a escala y en tiempo real, y supera la intensidad de trabajo de los esquemas de codificación manual.
- **Plantillas basadas en roles y rúbricas de calidad para la planificación docente.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo y Tahir (2025)]] desarrollan empíricamente un marco de indicaciones para la [[curriculum-design|planificación de lecciones]] de artes STEAM para la infancia que combina una plantilla de Rol (R), Instrucciones (I) y Meta final (E) (adaptada de RISEN) con una rúbrica de optimización de «cuatro puntos y una línea»: estandarizada, práctica, atractiva y completa, además de una dimensión de extensión. Aplicar la rúbrica para criticar y refinar las indicaciones mantuvo los planes generados aceptables para el profesorado de arte en ejercicio (valoraciones medias por encima de 4/5), a la vez que expuso carencias recurrentes ([[personalized-learning|personalización]], restricciones de [[pedagogical-safety|seguridad infantil]], sesgo cultural) que la formulación simple de una sola indicación dejaba sin resolver, lo que muestra que las plantillas de indicaciones junto con criterios explícitos de evaluación funcionan como un andamiaje de control de calidad para la generación en el aula.

- **El diseño de roles y restricciones como variable independiente.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] comparan dos agentes construidos sobre el mismo modelo y la misma plataforma a temperatura 0.3 cuya única diferencia es cómo la indicación especifica el rol, las habilidades y las restricciones: un agente docente experto que responde a partir de una fuente de conocimiento acotada del libro de texto frente a un agente empático centrado en el estudiantado y programado para diagnosticar [[misconceptions|ideas erróneas]] y comprobar la comprensión. Solo la diferencia de rol ya modificó el rendimiento de aprendizaje, la carga cognitiva, la experiencia de flujo y la empatía percibida, lo que muestra que especificar el rol es una decisión de diseño instruccional con efectos medibles y no un adorno estilístico ([[pedagogical-agent]]).

### Conexiones con conceptos más amplios

La ingeniería de prompts se conecta con el [[scaffolding|andamiaje]]: las indicaciones bien diseñadas pueden andamiar el pensamiento del estudiantado en lugar de saltárselo. Intersecta con la [[metacognition|metacognición]] y la [[ai-literacy|alfabetización en IA]], ya que formular indicaciones eficaces exige comprender tanto las capacidades de la IA como las propias metas de aprendizaje. La investigación sobre la [[cognitive-offloading|descarga cognitiva]] vincula directamente la calidad de las indicaciones con que el uso de la IA sostenga o socave el aprendizaje.

- **La habilidad de escritura impulsa la formulación de indicaciones, y ambas predicen el éxito en el [[vibe-coding|vibe coding]].** En un estudio preregistrado de CHI 2026 (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann y Su]] encontraron que la competencia en comunicación escrita predecía el rendimiento en vibe coding orientado a la interfaz gráfica (r = .29), con la calidad de las indicaciones, valorada por personas, *mediando* esa relación: evidencia de proceso de respuesta de que una prosa clara y estructurada se traduce en mejores indicaciones de programación en lenguaje natural. Tanto la habilidad de escritura como el [[cs-education|rendimiento en informática]] fueron predictores independientes, y el rendimiento en informática (r = .39) aportó aproximadamente el doble de varianza única, así que mejorar solo la formulación de indicaciones difícilmente sustituirá por completo los fundamentos de programación en el desarrollo nativo de LLM.
- **La estrategia de indicaciones predice el rendimiento.** Un [[isaza-chatgpt-engineering-prompting-2026|estudio empírico con 128 estudiantes de ingeniería]] encontró que la eficiencia de las consultas a la IA (indicaciones claras y bien estructuradas) y la [[problem-solving|resolución de problemas]] impulsada por la IA (la integración estratégica de la salida de la IA en el razonamiento) eran los predictores más fuertes del éxito académico, incluso tras controlar el expediente académico, lo que indica que formular indicaciones es una habilidad enseñable que da forma a la eficacia con que el estudiantado aprende con IA.
- **Una taxonomía utilizable y qué categorías de indicaciones compensan de verdad.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] traducen estrategias técnicas al modelo 3K (*Kontext, Kernauftrag, Klarheit*: contexto, tarea central, claridad): once categorías orientadas a la práctica, cada una con una rúbrica de buena, media y subóptima, y cada una probada como variación experimental de la retroalimentación generada para las metas de aprendizaje del profesorado en formación. El lenguaje técnico específico del dominio fue la categoría decisiva: sustituir la terminología de la materia por paráfrasis cotidianas redujo significativamente la calidad de la retroalimentación en tres modelos (β = −0.412), mientras que añadir ejemplos concretos y eliminar la instrucción de cadena de pensamiento no produjo diferencias significativas respecto a la línea base en el primer estudio; los ejemplos sí ayudaron cuando el análisis se repitió con las combinaciones de modelo e indicación de mejor rendimiento (β = 0.52). La calidad de las indicaciones y la elección del modelo explicaron juntas el 42.8% de la varianza en la calidad de la retroalimentación valorada, que es el argumento del artículo de que la ingeniería de prompts es una competencia medible y enseñable y no una preferencia estilística, y de que sus categorías no son intercambiables en tamaño del efecto.

## Conceptos conectados
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Marco: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agéntica)

## Artículos conectados
- [[wang-teacher-student-centered-agents-physics-2026]] — Los roles y las restricciones en las indicaciones de los agentes como variable de diseño en el aprendizaje de la física (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Formular indicaciones frente al ajuste fino en la generación de ítems de comprensión auditiva en L2 con GPT (Aryadoust y Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Lo que pregunta el estudiantado importa: profundidad de la interacción con el LLM, calidad de la tarea y recuerdo inmediato (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: entrenamiento en tiempo real para formular indicaciones educativas con LLM
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Una taxonomía de tareas con LLM basada en tareas para la alfabetización crítica en IA en el periodismo
- [[benali-genai-academic-writing-2026]]
- [[ying-genai-journalism-assessment-2026]]
- [[enright-staff-perspectives-genai-2026]]
- [[prompt-privilege-equitable-ai-access-2026]] — El privilegio de las indicaciones: medir y mitigar las disparidades de accesibilidad en el acceso a los LLM
- [[principal-trait-analysis-human-ai-skills-2026]] — Análisis de rasgos principales: rasgos derivados de los datos en la colaboración entre personas y IA
- [[llms-text-linguistics-teaching-2026]] — Los LLM en la enseñanza de la lingüística textual
- [[idea-framework-metacognitive-genai-2026]] — El marco IDEA para el uso de la IA generativa regulado metacognitivamente
- [[lin-llm-interactive-lesson-generation]] — Generación con LLM de lecciones interactivas para la formación de tutores (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ai-adoption-training-public-sector]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[llm-intervention-design-cs-review]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[unesco-ai-guidelines-chemical-education-2026]] — Las directrices de IA de la UNESCO traducidas a la educación química; deriva epistémica
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: cocreación con IA justo a tiempo en todas las disciplinas
- [[student-ai-inquiry-types-cs2-2026]] — Análisis de los tipos de consultas en la interacción entre el estudiantado y la IA
- [[learnlm-improving-gemini-learning]] — LearnLM: el seguimiento de instrucciones pedagógicas frente a la ingeniería de prompts
- [[teachlm-post-training-llms-education]] — TeachLM: la ingeniería de prompts como solución provisional
- [[li-dbagent-llm-educational-agent-cs-2026]] — Un agente educativo basado en LLM (DBagent) en la educación en informática
- [[pedagogy-ai-mistakes]] — La pedagogía de los errores de la IA: fomentar el pensamiento de orden superior (Hosseini 2026)
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT resuelve los deberes de Qiskit; diseño autocalificable
- [[isaza-chatgpt-engineering-prompting-2026]] — Las conductas al formular indicaciones predicen el rendimiento del estudiantado de ingeniería
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Andamiaje guiado por reglas frente a andamiaje improvisado en un sistema de tutoría con LLM para matemáticas de primaria (Looi et al. 2026)
- [[genai-scenario-based-healthcare-education-2026]] — Revisión sistemática de la IA generativa en la educación sanitaria basada en escenarios (Neto et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Implicación cognitiva asociada a la disciplina y a los niveles de Bloom en las conversaciones entre el estudiantado y la IA (Chang y Li 2026)
- [[context-aware-prompting-cps-skill-identification-2026]] — Indicaciones conscientes del contexto para la codificación automática de habilidades de resolución colaborativa de problemas
- [[yasar-llms-iterative-pedagogical-design-2026]] — Los LLM como agentes del diseño pedagógico iterativo
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Ingeniería de prompts frente a alfabetización en indicaciones: un marco de compromiso con la IA generativa centrado en las personas con un Ciclo de alfabetización en indicaciones de cinco fases (Miles, Haber-Curran y Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — La ingeniería de prompts y la selección de modelo como predictores de la calidad de la retroalimentación con IA (Jacobsen et al. 2026)
- [[context-prompts-physics-assignments-2026]] — Tareas de física impulsadas por inteligencia artificial mediante indicaciones de contexto
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluar el foco de la retroalimentación y la adaptabilidad pedagógica en la retroalimentación generada por LLM sobre la escritura del estudiantado
