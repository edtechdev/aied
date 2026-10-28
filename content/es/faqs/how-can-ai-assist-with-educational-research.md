---
title: "¿Cómo puede la IA ayudar en la investigación educativa?"
created: "2026-10-05T12:43:10-04:00"
updated: "2026-10-28T13:36:06-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
source_updated: "2026-10-28T11:26:02-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-05"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Su coautor quiere un párrafo en la sección de métodos sobre las herramientas de IA que usó el equipo. O la pila de cribado es más larga de lo que permite el plazo. O un revisor ha preguntado, con amabilidad, si una persona leyó las transcripciones, y usted no tiene claro cuál es la respuesta honesta.

La respuesta breve para esa reunión: la IA puede encargarse de la búsqueda, de una primera pasada de cribado, del triaje de la codificación y de la redacción, pero no puede asumir la responsabilidad de lo que concluye el proyecto. Decida qué tareas quedan abiertas a la IA antes de que empiece el proyecto, verifique los resultados contra un estándar humano con una persona designada que dirima, y registre lo suficiente para que alguien de fuera pueda reconstruir lo que ocurrió. La mayoría de los equipos descubre que las horas de verificación y de registro son trabajo añadido, no trabajo ahorrado.

## La versión breve

**1.** Anote qué tareas de investigación pueden usar IA y cuáles no, antes de que se ejecute la primera búsqueda. Ordene según lo que está en juego, no según la herramienta.

**2.** Ponga la automatización en el cribado. Deje la extracción de datos, la conciliación y la síntesis en manos de personas.

**3.** Fije el libro de códigos y la rúbrica antes de que una pasada automatizada toque los datos.

**4.** Decida qué significa verificar y quién lo firma. La concordancia entre un modelo y quien codifica es una medida de similitud, no un resultado de calidad.

**5.** Verifique a mano cada referencia, empezando por los autores, siempre que la IA haya tocado la redacción.

**6.** Registre los prompts, las versiones del modelo y las versiones del corpus, y presupueste las horas que eso exige.

## Decida qué puede tocar la IA antes de que empiece el proyecto

La decisión sobre el alcance corresponde al expediente del proyecto, no a la memoria de alguien. En [[dai-chan-responsible-genai-research-ai-literacy-2026|el estudio de grupos focales de Dai y Chan (2026)]], los investigadores que se lo habían planteado calibraban el uso según lo que estaba en juego y según la centralidad intelectual: más uso en el trabajo procedimental de bajo riesgo, cautela donde la contribución académica era central. Veintisiete de los 28 investigadores de posgrado de ese estudio habían usado IA generativa en algún punto del flujo de trabajo, incluida la escritura académica y la traducción, así que para la mayoría de los equipos la pregunta es dónde queda la línea, no si existe.

Escriba esa línea como una lista con un veredicto para cada tarea: búsqueda bibliográfica, cribado de resúmenes, extracción, codificación cualitativa, análisis estadístico, redacción, formato de referencias. Lea ese estudio como un mapa de lo que los investigadores decían hacer. Es un testimonio de grupos focales, no un resultado de eficacia.

## Ponga la automatización en el cribado y mantenga la síntesis en el equipo

Las revisiones sistemáticas son el terreno donde la automatización ha avanzado más. Herramientas como ASReview, SWIFT-Review, Covidence, AIScreenR y MetaMate reducen la carga procedimental sobre todo en el cribado de resúmenes, mientras que la extracción de datos, la conciliación y la síntesis siguieron en manos de revisores humanos en el único equipo que describió su flujo de trabajo ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

La mayor parte del beneficio procede de dos decisiones de diseño. Escriba reglas de decisión para los casos de zona gris antes de que empiece el cribado, y mantenga una categoría de "quizá" con un registro de adjudicación compartido, de modo que el mismo juicio se aplique al mismo tipo de registro. Sin ese registro, la regla de quien revisa en segundo lugar y la de quien revisa en primero divergen en silencio, y la lista de exclusiones deja de ser reproducible.

## Fije el libro de códigos antes de que el modelo lea nada

[[qualitative-research|El análisis cualitativo]] es la etapa en la que la interpretación es el producto. Los constructos, las rúbricas de codificación y los datos de entrenamiento son decisiones humanas y no resultados del modelo ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), lo que significa que el libro de códigos tiene que estar cerrado antes de que una pasada automatizada recorra el corpus. La alternativa es un esquema de codificación escrito en torno a lo que el modelo resultó destacar, y entonces los temas describen la lectura que la herramienta hace de sus datos.

La delegación puede ser más fina que todo o nada. [[agreement-not-quality-llm-coding-verification|Un estudio de verificación a ciegas]] clasificó 15 de 72 ítems del libro de códigos como casos que demuestran requerir experiencia humana, 12 como mejor atendidos por un modelo y 16 como aptos para un triaje basado en la confianza. Ordene sus propios ítems de esa manera y el ahorro de trabajo recaerá donde es seguro.

## Decida qué significa verificar y quién lo firma

Una concordancia alta entre un modelo y una persona que codifica se presenta como si estableciera que la codificación es correcta. No lo hace. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] hicieron que un experto independiente juzgara 855 pares de conjuntos de códigos sin conocer su origen. La concordancia entre personas y LLM (media de Jaccard 0,30) quedó muy por debajo de la concordancia entre personas (0,52), y aun así el verificador a ciegas prefirió la codificación humana y la de máquina a tasas que no pudo distinguir (51,5% frente a 48,5%, p = 0,537). En algunos casos el consenso humano codificaba un sesgo compartido que el verificador rechazó en favor del modelo.

Así que el paso de verificación necesita un patrón de referencia que no sea ni la salida del modelo ni la concordancia de quien codifica con ella, además de una persona designada que dirimiera las discrepancias. Informe de ambas cosas. Un estadístico de similitud describe hasta qué punto coinciden dos lecturas y no dice nada sobre si alguna de las dos es correcta.

## Busque rápido y luego compruebe cada fuente usted mismo

La búsqueda generativa resume, recomienda, sintetiza y conversa, lo que desestabiliza el arreglo anterior en el que el sistema localizaba y la persona lectora interpretaba ([[genai-academic-search-workshop]]). Trátela como una herramienta de descubrimiento. El informe del taller recoge dos advertencias: la capacidad es desigual, y los académicos muy citados se reconstruían a un ritmo aproximadamente el doble que el de sus colegas menos citados, y una bibliotecaria describió una brecha de confianza en la que el estudiantado confiaba demasiado en la búsqueda generativa mientras que el profesorado desconfiaba de ella.

La verificación de referencias es el punto en el que esto se vuelve innegociable, y los fallos se concentran en el campo de autoría, el que atribuye el mérito. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] auditaron 723.930 publicaciones y 15.872.533 referencias y verificaron 30 referencias fabricadas en 14 artículos de educación en computación, todas de 2025 y 2026. Diecisiete de las 30 eran híbridos: un título real asociado a autores fabricados o incorrectos. El recuento verificado en un simposio técnico pasó de 3 en 2025 a 17 en 2026, en el 2,3% de las ponencias de ese año. Su total es deliberadamente un límite inferior, y los verificadores automatizados heredan los defectos de los metadatos que tratan como verdad de referencia. Compruebe primero los autores.

## Trate una puntuación automatizada como una hipótesis que hay que probar

Las funciones de medición automatizadas pueden parecer precisas y predictivas mientras siguen siendo opacas. [[ai-methodologies-science-education-research-2026|Martin et al.]] lo enmarcan con el problema de la medición nómica de Chang: medir una magnitud exige una ley que la relacione con algo observable, y esa ley no puede ponerse a prueba sin conocer ya la magnitud. Las funciones de medición derivadas de la IA surgen de los datos de entrenamiento y de la optimización, no de quien investiga, así que el trabajo de explicabilidad importa para mostrar si un modelo sigue la comprensión semántica o solo las palabras clave.

El fallo es concreto. En [[zhang-platform-scores-miss-ai-teaching-agents-2026|una evaluación de ocho agentes docentes de IA]], el agente que la puntuación de la propia plataforma situaba en tercer lugar quedó en último lugar en una rúbrica validada por expertos. La discrepancia entre personas y máquinas es sistemática y no aleatoria, y la operacionalización de la rúbrica suele importar más que la pericia en el diseño de prompts ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Antes de que una puntuación automatizada se convierta en su instrumento, valídela contra una medida ligada a la capacidad que pretende estudiar. Para las medidas en sí, véase [[evaluating-ai-interventions-methods]].

## Escriba la sección de métodos de modo que alguien de fuera pueda auditarla

La adopción ha ido por delante de la notificación. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta y Lin (2026)]] analizaron 888 artículos sobre automatización de revisiones: desde 2023, el 38,0% de los artículos sobre software y productos no informaba de ninguna evaluación, frente al 9,3% de los artículos sobre LLM, y el acceso a los modelos era abrumadoramente propietario (84,1%). Una valoración global favorable tampoco implicaba idoneidad para delegar, ya que el 52% de 118 artículos sobre LLM con resultados solo positivos seguía señalando la preocupación de que el flujo de trabajo quedaba por debajo del umbral que exigía su función. Su marco PRISMA-LLM separa la divulgación de la implementación de la evaluación sensible a las consecuencias y trata sus cinco niveles como niveles de divulgación y no como niveles de riesgo.

La versión práctica: nombre el sistema y su versión, los prompts, la versión del corpus, qué comprobó una persona y dónde falló. Conserve registros de prompts y respuestas, porque una lista de temas generada con fluidez parece inevitable mucho antes de que su trabajo probatorio haya empezado ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Presupueste también las horas. [[persistent-ai-agents-academic-research|Un estudio de caso de 115 días con un solo investigador]] sobre un agente de investigación persistente encontró que el patrón más sólido era la ampliación de la capacidad y no una sustitución de trabajo demostrada: a medida que se acumulaban memoria y procedimientos, el alcance del trabajo delegado crecía mientras que la aportación humana no se reducía.

## Realice indagación docente con las mismas reglas a menor escala

Si usted es docente y estudia su propio curso, trabaja en el hilo más delgado del corpus. [[ai-assisted-educational-research|La investigación educativa asistida por IA]] lo plantea como una laguna y no como un hallazgo: la indagación docente asistida por IA es probablemente muy extendida y está casi sin documentar, y la evidencia sobre automatización de revisiones y la bibliométrica no resuelven cómo debería un docente estudiar su propia enseñanza.

Lo que se traslada es un conjunto de disposiciones:

Use la IA allí donde su contexto local no sea la variable. Buscar la literatura de su campo, transcribir y resumir sus propias grabaciones y redactar instrumentos o textos de consentimiento entran en esa categoría.

Conserve los movimientos interpretativos. Qué cuenta como tema, qué significa el comentario de un estudiante y qué permite concluir su evidencia de aula son decisiones suyas, y el texto debería decir qué movimientos hizo el modelo y cuáles hizo usted ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Defina sus criterios por adelantado y manténgalos visibles. Un estudio local pequeño no puede recuperarse de un constructo definido después de que llegaran los datos.

Informe del papel de la IA, de la verificación que hizo y de los límites de un diseño de un solo curso y un solo investigador. Un relato de flujo de trabajo no es un resultado de eficacia.

Trate la simulación de una cohorte como una opción avanzada y no como la opción por defecto. Quienes aprenden simulados tienden a cubrir el cuadrante más fácil del comportamiento real del estudiantado y rara vez se validan después del uso ([[simulating-students]]). Lea [[making-simulated-students-behave-like-learners]] antes de fiarse del veredicto de un simulador.

## Qué se suele entender mal sobre esto

La concordancia con una persona que codifica significa que la codificación es correcta. La concordancia entre personas y LLM en el estudio a ciegas fue de 0,30 de Jaccard frente a 0,52 entre personas, y el verificador a ciegas no pudo distinguir las dos fuentes de codificación, con un 51,5% frente a un 48,5%. La concordancia registra que dos lecturas convergieron, incluso cuando convergieron en el mismo sesgo.

Un verificador de referencias sustituye la comprobación de referencias. Las 30 referencias fabricadas de la auditoría de Denny incluyen 17 híbridos en los que el título era real y los autores no, que es exactamente el caso que peor maneja un verificador entrenado con metadatos, ya que los metadatos son lo que está mal.

Una evaluación favorable hace que un flujo de trabajo sea idóneo para su función. De 118 artículos sobre LLM con resultados solo positivos, el 52% seguía señalando la preocupación de que el flujo de trabajo quedaba por debajo del umbral que exigía su función. Lea la profundidad de la evaluación a la luz del trabajo que le está asignando.

La pericia en el diseño de prompts es la palanca principal de la calidad. La operacionalización de la rúbrica suele importar más que la pericia en el diseño de prompts en la concordancia entre personas y máquinas, y la evaluación de ocho agentes situó al mismo sistema en tercer y en último lugar según cuya rúbrica se aplicara.

La IA quita trabajo del proyecto. El estudio de caso de 115 días encontró que el alcance delegado crecía a medida que se acumulaba la memoria del agente. La verificación, la adjudicación y el registro son las horas que crecen con él.

## Lo que le van a objetar

**"Mi coautor ya hace esto y nadie se ha quejado."** Que nadie se queje no es un hallazgo sobre la validez. La cuestión de la divulgación es distinta de la cuestión de la calidad, y la cifra del 38,0% de artículos sobre software sin evaluar indica que el silencio del campo está muy extendido.

**"Dos modelos coincidieron entre sí, así que la codificación está resuelta."** Dos modelos que comparten datos de entrenamiento comparten sus errores. El verificador a ciegas del estudio de Liu prefirió la codificación de máquina en el 48,5%, y lo que hizo interpretable esa cifra fue un juez independiente, no la concordancia en sí.

**"No podemos auditar un modelo propietario, así que no hay nada que informar."** PRISMA-LLM pide la divulgación de la implementación como un nivel separado de la profundidad de la evaluación. El sistema, la versión, los prompts, qué comprobaron las personas y dónde falló son todos informables para un modelo cerrado.

**"El comité de ética nunca va a aprobar esto."** El acceso a los modelos era propietario en el 84,1% de los artículos examinados, lo que significa que los textos del estudiantado salen normalmente de su institución. Recoja solo lo que exige la finalidad educativa, compruebe si los datos de quienes aprenden entrenan los modelos del proveedor y prefiera datos locales o sintéticos donde la sensibilidad sea alta. [[equity-ethics-pedagogical-safety-research]] cubre las obligaciones por completo.

**"Esto será más lento que hacerlo a mano."** En un proyecto pequeño, a menudo lo es. El argumento a favor se apoya en el alcance a escala, y el argumento contra exagerarlo se apoya en el mismo relato de 115 días.

## Qué hacer esta semana

**1.** Escriba la lista de tareas con un veredicto junto a cada una y póngala donde todo el equipo pueda verla.

**2.** Añada las reglas de decisión para zonas grises y el registro de adjudicación a su protocolo de cribado antes de que empiece el siguiente lote.

**3.** Elija un resultado automatizado en el que ya confíe y valídelo contra un juicio humano en una muestra que todavía no haya mirado.

**4.** Lea el último manuscrito que envió y compruebe a mano cada nombre de autor en la lista de referencias.

**5.** Añada una línea sobre "dónde falló la IA" a su plantilla de métodos, para que el hábito de divulgar quede escrito una sola vez.

## Adónde ir ahora

Las preguntas complementarias son [[evaluating-ai-interventions-methods]], sobre cómo medir una intervención, [[reporting-interpreting-aied-research]], sobre cómo informar del sistema y de su propio uso de la IA, y [[research-gaps-aied]], sobre dónde es escasa la literatura. [[equity-ethics-pedagogical-safety-research]] cubre los datos del estudiantado, y [[ai-assisted-educational-research]] es la página conceptual completa que hay detrás de esta.
