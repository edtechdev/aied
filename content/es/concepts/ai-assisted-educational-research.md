---
title: Investigación educativa asistida por IA
created: "2026-10-05T12:43:08-04:00"
updated: "2026-10-05T12:43:08-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-05T11:23:36-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-05"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Síntesis:** La investigación educativa asistida por IA es el uso de la IA como instrumento del propio trabajo académico de la disciplina: buscar y recuperar bibliografía, cribar registros para revisiones, codificar datos cualitativos, analizar datos, redactar y editar manuscritos, y la reflexión que pregunta qué hacen esas herramientas con el conocimiento producido. Es distinta de la investigación *sobre* la IA en la educación: los diseños empleados para estudiar si la IA ayuda a quien aprende pertenecen a [[research-methods-aied]], la valoración de los sistemas de IA pertenece a [[ai-ed-evaluation]], y la lectura de un único estudio de AIED pertenece a [[interpreting-and-applying-aied-research]]. Esta página abarca el propio flujo de trabajo de quien investiga y la indagación de quien investiga y a la vez ejerce la docencia —la erudición de la enseñanza y el aprendizaje y la investigación en el aula— y las implicaciones epistémicas cuando la automatización entra en cualquiera de las dos. Su evidencia es escasa y reciente: una propuesta de marco, el relato reflexivo de un equipo de revisión, un pequeño estudio de grupo focal, una auditoría bibliométrica, un informe de taller y estudios de caso de un único investigador. Describe una dirección de viaje más que una práctica establecida, y la rama de la investigación del profesorado es la más débil de todas.

## Preguntas para reflexionar

- ¿Quién cuenta como investigador aquí: el académico financiado, el estudiante de posgrado, el docente que estudia su propia aula? ¿A cuál de ellos describe realmente la evidencia?
- Una criba de IA excluyó un estudio de su revisión. ¿Quién rinde cuentas por esa decisión: el proveedor, la herramienta, el protocolo o usted?
- Cuando un modelo resume fuentes que no ha leído, ¿qué parte del trabajo académico ha dejado de hacer?
- Un estudiante simulado puede poner a prueba a un tutor a través de muchos perfiles. ¿Qué comprobaría antes de creer su veredicto sobre estudiantes reales?
- La indagación del profesorado suele ser local y pequeña. ¿Debería su evidencia cumplir el umbral de un ensayo financiado, o ponderarse de otro modo porque el contexto es lo esencial?
- Si la IA ayudó a redactar un artículo, ¿qué debería decirse a los lectores y dónde debería figurar esa declaración?

## Introducción

La investigación educativa asistida por IA es la disciplina volviendo las herramientas de IA hacia su propio trabajo. El objeto de estudio no es un estudiante que usa un tutor de IA, sino un investigador que usa un modelo para buscar, cribar, extraer, codificar, analizar o escribir. Lo que cambia es el flujo de trabajo de quien investiga y, más silenciosamente, los criterios por los que su producción cuenta como evidencia.

Esta página no trata deliberadamente de la investigación *sobre* la IA en la educación. Las preguntas sobre si un tutor de IA mejora el aprendizaje las aborda [[research-methods-aied]], la valoración de los sistemas de IA [[ai-ed-evaluation]], y la lectura cautelosa de un único estudio [[interpreting-and-applying-aied-research]] y [[limitations-in-aied-research]]. Las dos literaturas se confunden a menudo, y las afirmaciones sobre herramientas de la segunda se toman prestadas con frecuencia para respaldar la primera.

El alcance va de la búsqueda bibliográfica a la criba, la codificación, el análisis y la escritura, e incluye la reflexión epistemológica que pregunta qué hace la automatización con el conocimiento que produce una disciplina. Incluye también la investigación del profesorado: la erudición de la enseñanza y el aprendizaje y la indagación en el aula, donde un docente estudia su propia práctica. Esa rama es la parte más débil de esta página, y las secciones siguientes lo dicen en lugar de disimularlo.

## Cómo entra la IA en el flujo de trabajo de la investigación

Los relatos de uso son más consistentes que la evidencia de efecto. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai y Chan (2026)]] entrevistaron a 28 estudiantes de posgrado de investigación en siete grupos focales de una institución y encontraron que 27 de los 28 usaban IA generativa en algún punto de su investigación: ideación, revisión de la literatura, explicación, procesamiento de datos, programación, escritura académica, edición y traducción.

Sus participantes estaban calibrados y no eran crédulos. Emparejaban las herramientas con las tareas según los riesgos percibidos y las exigencias intelectuales, usaban la IA con más intensidad en el trabajo procedimental de bajo riesgo y se mantenían cautelosos allí donde la contribución académica era central. Además mantenían la supervisión humana en todo momento, tratando el modelo como un asistente que podía ser «engañoso» o «totalmente erróneo».

El hallazgo sobre políticas es el práctico. La orientación institucional existente abordaba la enseñanza, el aprendizaje y la evaluación, y los participantes la percibían como abstracta y desalineada con la práctica investigadora. Los autores proponen directrices orientadas a quienes investigan, construidas sobre un marco de alfabetización en IA de cuatro dimensiones, como andamiaje de desarrollo y no como reglamento.

El estudio abarca una única institución, un grupo autoseleccionado de 28 y relatos autoinformados; es posible que el estudiantado haya infrainformado su uso por razones de integridad. Describe cómo usa estas herramientas un grupo capacitado, no lo que produce ese uso.

## Búsqueda y recuperación de literatura

Un informe de taller traza una agenda en lugar de medirla. El Taller CHIIR 2026 sobre IA generativa y búsqueda académica reunió a investigadores en interacción humano-información y recuperación, y su informe describe sistemas construidos para la recuperación de documentos que ahora resumen, recomiendan, sintetizan y conversan —desestabilizando el supuesto de que el sistema localiza las fuentes mientras la interpretación permanece en el usuario.

Una charla relámpago puso a prueba cómo los modelos reconstruyen a los académicos. Frente a la verdad de referencia de OpenAlex y Google Scholar para 1.596 autores semilla de 10 disciplinas y 8 regiones globales, los investigadores altamente citados se reconstruyeron aproximadamente al doble de la tasa de sus pares menos citados, probando DeepSeek R1, Llama 4 Scout y Mixtral 8×7B.

Un bibliotecario informó de una «brecha de confianza»: el estudiantado solía confiar en exceso en la búsqueda generativa mientras el profesorado desconfiaba de ella, y los talleres de una sola sesión se juzgaban insuficientes para una alfabetización duradera. El hilo de diseño al que los participantes volvían más era la «fricción»: mantener a los usuarios implicados en el trabajo crítico, a veces incómodo, del que surge el aprendizaje.

El informe abarca un único evento autoseleccionado y en gran medida recoge opiniones, principios de diseño y preguntas de investigación. Sus cifras pertenecen a charlas individuales y no al taller, y nada en él muestra que la búsqueda académica con IA mejore o perjudique el aprendizaje.

## Automatización de la criba y de las revisiones sistemáticas

Las revisiones sistemáticas son donde la automatización ha avanzado más y donde se muestran sus límites. [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] reflexionan sobre la revisión de un equipo interdisciplinario y señalan que la automatización redujo la carga procedimental sobre todo en la criba de resúmenes —herramientas como ASReview, SWIFT-Review, Covidence, AIScreenR y MetaMate— mientras que la extracción de datos, la conciliación y la síntesis permanecieron en manos de los revisores humanos. La tutoría y el debate entre pares funcionaron como infraestructura metodológica, no como cortesía.

Su conclusión es una división del trabajo y no un traspaso: asignar la automatización a la carga procedimental, verificar cada resultado y mantener humanas las decisiones interpretativas. El relato es la reflexión de un único equipo sin condición de comparación, de modo que sus estrategias se describen en lugar de ponerse a prueba.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta y Lin (2026)]] cuantifican el problema de notificación en 888 artículos sobre automatización de revisiones que contienen 14.726 elementos de anotación. Desde 2023, el 38,0% de los artículos sobre software y productos no reportó ninguna evaluación, frente al 9,3% de los artículos sobre LLM. La brecha se mantiene tras estratificar: en la criba y la selección, los artículos sobre software promediaron 3,2 elementos de evaluación sustantivos con un 39,3% que no reportó ninguno, mientras que los artículos sobre LLM promediaron 7,3 elementos con una tasa de ausencia de evaluación del 3,8%.

Una valoración favorable no implicaba idoneidad para la delegación. Entre 118 artículos sobre LLM con evaluaciones solo positivas, el 52% seguía reportando al menos una preocupación de que el flujo de trabajo quedaba por debajo del umbral exigido para su función. El acceso a los modelos era abrumadoramente propietario: el 84,1% del uso de LLM dependía de sistemas propietarios o alojados, el 11,0% era mixto y solo el 4,9% era de pesos abiertos.

A partir de estos patrones los autores derivan PRISMA-LLM, un marco de tres capas cuyos cinco niveles de implementación son niveles de divulgación y no niveles de riesgo. Es una propuesta ofrecida para su puesta a prueba, no una extensión oficial respaldada por el Comité Ejecutivo de PRISMA. El silencio a nivel de artículo, advierten, no es prueba de que falte la validación: puede residir en un informe de producto, un protocolo o un repositorio.

## Codificación y análisis cualitativos

El análisis cualitativo es la etapa en la que la interpretación es el producto, lo que hace más difícil defender la delegación. La página [[qualitative-research|Investigación cualitativa]] reúne la evidencia del corpus sobre la codificación asistida por IA, incluidos estudios que muestran que el acuerdo humano-modelo no es lo mismo que la calidad de la codificación y que los errores pueden propagarse en cascada a través del análisis temporal. Esa literatura trata el modelo como una ayuda de escalado cuyos resultados exigen verificación contra el juicio humano.

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]] describen directamente el cambio de rol. A medida que se aplican modelos de codificación automatizada, quien investiga pasa de codificar datos de estudiantes a validar los resultados del modelo; cuando los modelos no supervisados agrupan el razonamiento, el algoritmo realiza el análisis exploratorio inicial. Quienes investigan, sostienen, necesitan cada vez más habilidades de ciencia de datos junto con pericia cualitativa, cuantitativa y teórica.

Su marco aporta además la comprobación que importa aquí: la IA explicable puede revelar si la codificación automatizada sigue la comprensión semántica o solo las palabras clave. Un pipeline de codificación que coincide con las etiquetas humanas puede estar leyendo igualmente lo incorrecto.

## Análisis de datos y las implicaciones epistémicas

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen y Graulich (2026)]] apremian la propia producción de conocimiento de la disciplina, y su artículo es la columna vertebral de esta página. Anclados en el relato de Hasok Chang (2004) sobre la iteración epistémica —etapas sucesivas de conocimiento que se apoyan unas en otras hacia objetivos epistémicos—, trazan un paralelismo con los aproximadamente 150 años de desarrollo del termómetro y sostienen que la disciplina puede estar ahora dentro de una iteración comparable.

Su preocupación central es epistémica y no técnica. El problema de la medición nómica de Chang sostiene que medir una cantidad requiere una ley que la relacione con algo observable, pero esa ley no puede ponerse a prueba empíricamente sin conocer ya la cantidad. Las funciones de medición derivadas de la IA, que emergen de los datos de entrenamiento y la optimización y no de quien investiga, pueden intensificar esto en lugar de resolverlo, porque pueden parecer precisas y predictivas mientras permanecen opacas.

El marco tiene siete fases: enmarcar el problema; instrumentación y medición; experimentación e inferencia basada en evidencia; comparaciones y replicación; construcción de normas y consenso; implementación y sus consecuencias; y refinamiento continuo. Los autores las presentan como dimensiones analíticas que pueden repetirse, solaparse o estar ausentes, no como una secuencia validada.

La comparabilidad es la fase con el filo de equidad más agudo. El principio de Regnault exige que un instrumento dé la misma lectura en las mismas condiciones y que los instrumentos de un mismo tipo coincidan, pero la comparabilidad debe extenderse a través de las poblaciones estudiantiles, y el aprendizaje automático tiende a codificar mejor las ideas canónicas que las diversas formas en que el estudiantado expresa las más débiles.

También nombran un problema de rendición de cuentas. Quienes investigan usan modelos preentrenados cuyos datos de entrenamiento, ajuste fino y objetivos pueden desconocer, añadiendo una capa de dependencia epistémica; como estos sistemas emergen de redes sociotécnicas, la responsabilidad se vuelve difícil de asignar: un «problema de muchas manos».

La honestidad necesaria es que el artículo no reporta datos y no establece ningún efecto de aprendizaje. No muestra que las metodologías de IA mejoren la investigación ni produzcan conclusiones más válidas; esa comparación se plantea como trabajo futuro, y los autores admiten que su hipótesis «bien podría resultar incorrecta».

## Escritura, citación e integridad de la investigación

La escritura es donde la asistencia de IA es más visible y donde sus fallos son más consecuentes, porque una referencia es una afirmación de responsabilidad. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] auditaron toda la ACM Digital Library —723.930 publicaciones y 15.872.533 referencias— y rastrearon 113.588 referencias de 5.225 artículos de educación en informática publicados desde 2021 en adelante.

Verificaron manualmente 828 registros sospechosos y encontraron 30 referencias que contenían información bibliográfica verificablemente fabricada en 14 artículos, todos de 2025 y 2026. En el SIGCSE Technical Symposium el recuento pasó de 3 en las actas de 2025 a 17 en 2026, apareciendo en el 2,3% de los artículos de las actas de 2026. Diecisiete de las 30 eran híbridos que emparejaban un título real con autores fabricados o incorrectos.

Su recuento es un límite inferior deliberado, y presentan el problema como compartido y no resuelto por el software. Los autores deberían verificar cada obra citada, sobre todo cuando se usó IA generativa en la escritura; los revisores no pueden auditar cada referencia, así que las sedes adoptan comprobaciones específicas; las editoriales deberían mejorar los metadatos. La detección automatizada hereda los defectos de los metadatos que trata como verdad de referencia.

Los efectos de escala de la escritura con IA aparecen en un segundo estudio bibliométrico. [[ai-assisted-writing-research-teams|Wang et al. (2026)]] analizaron 147.074 publicaciones de revistas del grupo PLoS y Nature desde 2020 y asociaron la escritura asistida por IA con equipos más pequeños e inclinados a lo júnior. En el cambio extremo de ninguna a plena asistencia de IA, el tamaño del equipo fue un 22,1% menor en PLoS y un 45,5% menor en Nature (β de Poisson = −0,250 y −0,607, ambos p < 0,01).

El impacto no se resintió de forma evidente. Alrededor del 7,34% de los artículos de PLoS asistidos por IA y el 7,40% de los de Nature alcanzaron el 5% superior del FWCI, por encima de ambos grupos de comparación escritos por humanos, y las comparaciones emparejadas mostraron una probabilidad 3,0% y 2,7% mayor de FWCI del 5% superior (ambos p < 0,01). Los datos son observacionales, así que los autores declinan afirmaciones causales fuertes.

## Agentes persistentes en el entorno de investigación

Más allá de los prompts únicos, se están incorporando agentes persistentes en el propio espacio de trabajo de la investigación. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] reporta un estudio de caso de 115 días y un único investigador sobre un agente con memoria duradera, archivos locales, herramientas externas, rutinas programadas y roles delegados, ejecutándose en el espacio de trabajo de un médico-científico.

Los resultados descriptivos son cuantiosos. La telemetría recuperable del agente principal contenía 75.671 registros desduplicados a lo largo de 96 días activos, una fracción de días activos de 0,835; el espacio de trabajo contenía 502 archivos relacionados con la memoria, 17 directorios de agentes configurados y 57 archivos de habilidades. Un subconjunto estricto de 25 días de mayo contenía 627 eventos completados por el modelo y 73.950.305 tokens registrados, de los cuales el 82,9% eran lecturas de caché, con aproximadamente US\$1.961 en gasto de sistema observado.

La principal contribución del estudio es un marco de medición —PARE-M— construido porque los resultados que un agente persistente debe apoyar, como la gobernanza y el coste por artefacto, son invisibles a los benchmarks episódicos. Su hallazgo negativo central es que el volumen agregado de interacción no demostró una reducción de la aportación humana: a medida que se acumulaban la memoria y los procedimientos, se ampliaba el alcance del trabajo delegado, de modo que el patrón más sólido es la expansión de la capacidad y no una sustitución de trabajo probada.

Las limitaciones son las que invita un único caso autoobservado. Un investigador era usuario, diseñador, fuente de datos, analista y beneficiario, sin grupo de control, sin período de referencia y sin codificador independiente para los eventos de gobernanza.

## Estudiantes simulados como instrumentos de investigación y evaluación

[[simulating-students|Simular estudiantes]] es la página de la base de conocimiento sobre la técnica y el fenómeno: cómo construir un estudiante sintético cuyo estado de conocimiento y errores sean lo bastante fieles para representar a una persona. Esta página trata el mismo aparato como instrumento de investigación y evaluación: para qué sirve un estudiante sintético cuando una intervención, un instrumento, un benchmark o un tutor debe probarse a una escala o en condiciones que los estudiantes reales no pueden proporcionar.

El uso más claro es evaluar un tutor a lo largo del tiempo. [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] sitúan a un agente tutor en una relación de 30 días con un estudiante simulado cuyo dominio, procedente de un modelo de trazado de conocimiento entrenado con datos de estudiantes reales, impulsa sus respuestas. Al evaluar 10 adaptadores de agente, todos los adaptadores se estancaron en un plazo de 5 a 10 días muy por debajo de una referencia de aprendizaje ideal, un resultado que la evaluación de una sola sesión no puede alcanzar. Una comprobación de calibración frente a la precisión observada en las sondas se ajusta a la diagonal (ECE 0,049, Brier 0,033 sobre 1,19 millones de intentos).

La fidelidad es la condición previa, y es medible. [[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]] reportan una divergencia conductual respecto a las trazas de estudiantes reales de DKL = 0,31 frente a 0,53 del mejor baseline, y en una prueba de Turing con 71 evaluadores sus trazas fueron estadísticamente indistinguibles de los datos de estudiantes reales (52,8% de precisión, d′ = 0,15). El fallo que hay que evitar es el sesgo de competencia: los modelos con prompting resuelven la tarea demasiado bien para representar a personas novatas.

El estado de creencia es la parte fácil de falsificar. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar y Sachan (2026)]] mostraron que, en siete modelos de 4B a 120B parámetros, los simuladores abandonaban una concepción errónea asignada y volvían a resolver desde el conocimiento interno a tasas casi uniformes bajo retroalimentación dirigida, desalineada y genérica. Cuantifican esto con una Puntuación de Cambio Selectivo y elevan la fidelidad hasta +0,56 mediante entrenamiento, que es la cuestión: hacer prompting de una persona no construye a un aprendiz.

Los estudiantes simulados sirven también como banco de pruebas controlado para los propios instrumentos de evaluación. [[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]] emparejaron cada una de tres bases de tutores con un estudiante simulado débil fijo bajo un protocolo preregistrado y encontraron que las rúbricas de utilidad de propósito general aportan poca señal pedagógica, con siete políticas que abarcan 2,3 puntos de pedagogía juzgada dentro de una banda de 0,25 puntos de utilidad juzgada. Los turnos que revelaban respuestas iban seguidos de menos trabajo independiente del estudiantado en todas las bases.

La cautela corresponde a esta página. El veredicto de un simulador solo es tan bueno como el simulador, y su cobertura tiende a los aprendices más fáciles.

## Investigación del profesorado: SoTL e indagación en el aula

Esta es la rama que el corpus documenta menos. La erudición de la enseñanza y el aprendizaje y la investigación en el aula son indagaciones del profesorado —un docente que estudia su propio curso, a menudo a pequeña escala, a menudo como autoestudio— y las páginas aquí reunidas no ofrecen un relato investigado del uso de la IA en ese modo.

La evidencia más cercana es adyacente y no pertinente. Los estudiantes de posgrado de [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai y Chan (2026)]] estaban aprendiendo a ser investigadores, no estudiando su propia enseñanza. El equipo de [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] realizó una revisión interdisciplinaria formal, no un proyecto local. Los estudios bibliométricos describen disciplinas y editoriales, no aulas.

La afirmación honesta es, por tanto, una laguna y no un hallazgo. La indagación del profesorado asistida por IA es plausiblemente generalizada y casi indocumentada en este corpus; una página que presentara la evidencia de automatización de revisiones y bibliométrica como si resolviera cómo debería usar un docente la IA para estudiar su propia enseñanza estaría extralimitándose.

Lo que puede trasladarse es una disposición y no un resultado: nombrar el papel de la IA en los métodos, mantener humanas las decisiones interpretativas y reportar qué se verificó y qué no.

## Lo que la evidencia aún no establece

- **Ninguna comparación directa.** Martin et al. plantean la comparación entre métodos asistidos por IA y tradicionales como trabajo futuro. Ningún artículo ancla muestra que una metodología de IA produzca conclusiones más válidas.
- **Diseños débiles en todo el conjunto.** Los anclas son una propuesta de marco, el relato reflexivo de un equipo, un informe de taller, un estudio de grupo focal y bibliometría observacional. Ninguno es un ensayo controlado de un método asistido por IA.
- **Una laguna de notificación, no una auditoría de la práctica.** PRISMA-LLM lee el silencio a nivel de artículo; un flujo de trabajo sin evaluación en su artículo aún puede estar validado en otro lugar.
- **La investigación del profesorado está infrarrepresentada.** Solo un puñado de páginas aquí mencionan el SoTL o la investigación en el aula, así que el corpus no puede fundamentar afirmaciones sobre docentes que estudian su propia práctica.
- **Un blanco móvil.** Las herramientas mejoran más rápido que la publicación, así que un hallazgo sobre un flujo de trabajo de 2025 describe una generación de sistemas que puede que ya no exista en esa forma.

## Conceptos conectados

- [[research-methods-aied]] — el paraguas de los diseños empleados para estudiar la IA en la educación
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Artículos conectados

- [[ai-methodologies-science-education-research-2026]] — un marco reflexivo de siete fases sobre cómo las metodologías de IA pueden transformar la investigación en educación científica (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — el relato de un equipo de revisión interdisciplinario sobre la tutoría y la integración selectiva de la IA (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — cómo 28 estudiantes de posgrado usaron la IA generativa en el flujo de trabajo de investigación, y las directrices que sugieren (Dai y Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — una auditoría a escala de disciplina de las referencias fabricadas en la literatura de educación en informática (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — un marco de notificación para revisiones sistemáticas asistidas por IA, y la laguna de rendición de cuentas que documenta (Zabaleta y Lin, 2026)
- [[genai-academic-search-workshop]] — un informe del taller CHIIR 2026 sobre IA generativa y búsqueda académica (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — un estudio de caso de un único investigador sobre un agente persistente en un espacio de trabajo de investigación (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — evidencia bibliométrica de que la escritura asistida por IA acompaña a equipos de investigación más pequeños y jóvenes (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — un benchmark de 30 días que evalúa agentes tutores frente a un estudiante simulado (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — un simulador neurosimbólico que reproduce la dificultad genuina de las personas novatas (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — por qué los simuladores abandonan una concepción errónea ante cualquier retroalimentación, y cómo el entrenamiento lo corrige (Do, Sonkar y Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — una auditoría preregistrada que usa un estudiante simulado fijo para comprobar si las medidas de utilidad miden la pedagogía (Fan et al., 2026)

## Cita

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). Preimpresión de arXiv.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). Preimpresión de arXiv.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). Preimpresión de arXiv.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). Preimpresión de arXiv.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). Preimpresión de arXiv.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). Preimpresión de arXiv.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). Preimpresión de arXiv.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). Preimpresión de arXiv.