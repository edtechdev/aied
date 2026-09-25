---
title: Métodos de investigación en AIED
created: "2026-09-25T03:54:15-04:00"
updated: "2026-09-25T03:54:15-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
translation_of: concepts/research-methods-aied
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

> **Los métodos de investigación en AIED**: el conjunto de diseños empíricos, estrategias de recogida de datos y técnicas analíticas que usa quien investiga para estudiar la [[ai-education|IA en la educación]]: si las herramientas de IA apoyan (o dañan) el aprendizaje y cómo lo hacen, y en qué condiciones. El corpus de la base de conocimiento abarca métodos experimentales, de encuesta, cualitativos, basados en el diseño, de evaluación computacional con puntos de referencia y de revisión. Cada uno tiene fortalezas y limitaciones propias, y elegir entre ellos implica compensaciones entre la validez interna (la confianza en las afirmaciones causales), la validez externa (la generalizabilidad), la validez ecológica (la autenticidad del mundo real) y la viabilidad de estudiar herramientas de IA que cambian muy rápido.

## Preguntas para reflexionar

- La tensión central de la página: los diseños más sólidos para la inferencia causal (los experimentos aleatorizados) son los más difíciles de llevar a cabo en aulas reales, mientras que los entornos más auténticos ofrecen un control causal más débil. Si tuviera que decidir si un [[intelligent-tutoring|tutor de IA]] ayuda a aprender, ¿con cuál de esos dos fallos preferiría convivir, y por qué?
- Antes de leer, ¿sabría nombrar la diferencia entre validez interna, externa y ecológica? La página sostiene que todo diseño las compensa entre sí. ¿Cómo podría un estudio rigurosamente causal seguir diciéndole casi nada útil sobre un aula real?
- Un punto de referencia muestra que una IA obtiene una precisión alta, pero la página insiste en que una precisión alta en un punto de referencia no implica eficacia educativa. ¿Por qué un sistema que «pasa la prueba» podría seguir sin ayudar al estudiantado a aprender, y qué tipo de evidencia falta?
- La investigación basada en el diseño itera sobre una intervención real, pero no puede atribuir las ganancias a un mecanismo concreto, mientras que un ensayo controlado aleatorizado aísla las causas pero se ejecuta en condiciones artificiales. Dado el ritmo rápido del cambio en la IA, ¿cuánto tiempo cree que un ensayo controlado aleatorizado riguroso sigue siendo relevante antes de que la herramienta que evaluó quede obsoleta?
- El consenso de expertos por método Delphi establece acuerdo entre expertos, no un efecto empírico. ¿Cuándo es legítimo construir un marco de competencias a partir de lo que creen los expertos, y cuándo a partir de datos sobre lo que funciona, y cómo distinguiría la diferencia en la práctica?
- La página aboga por la triangulación: combinar la evaluación con puntos de referencia, los experimentos, la medición y el trabajo cualitativo para juzgar tanto si una herramienta funciona como de qué manera. Antes de leer, en una afirmación como «esta IA mejora el aprendizaje», ¿en qué punto haría falta cada método para que usted se convenciera?

## Introducción

La tensión central de la investigación en AIED es que los diseños más sólidos para la inferencia causal (los experimentos aleatorizados) suelen ser los más difíciles de llevar a cabo con herramientas de IA auténticas en aulas reales, mientras que los entornos más auténticos (despliegues sobre el terreno, estudios de caso, análisis de datos de registro) ofrecen un control causal más débil. Ningún método resuelve esto por sí solo; el campo avanza triangulando entre métodos y siendo explícito sobre qué tipo de afirmación puede sostener cada diseño. Todo método arrastra además limitaciones transversales (la generalizabilidad, la validez de la medición, el ritmo rápido del cambio en la IA, la reproducibilidad y un uso débil de la teoría) que quien lee debe sopesar; véase [[limitations-in-aied-research]].

El tema de esta página es el método y no los hallazgos. Las [[learning-sciences|ciencias del aprendizaje]] son el campo sustantivo al que sirven estos métodos: donde esta página cubre cómo debería diseñarse, medirse y comunicarse un estudio, aquella cubre lo que el campo ha establecido sobre cómo aprende la gente y cómo deberían diseñarse los entornos de aprendizaje, y trata los métodos basados en el diseño y los mixtos como los enfoques característicos de las ciencias del aprendizaje y no como dos opciones entre muchas.

### Rigor en la comunicación de resultados y el modelo TEP-AIED

La calidad de la comunicación de resultados de los estudios sobre IA en la educación es en sí misma una preocupación de investigación. [[tep-aied-model-reporting-2026|El modelo TEP-AIED (Hwang, Xie, Wah y Gasevic, 2026)]] ofrece un marco estructurado para presentar con rigor la investigación sobre IA en la educación, organizando los componentes esenciales de un informe de estudio (el encuadre del problema teórico, tecnológico y educativo, el diseño, los datos, el análisis y los resultados) para que quien lee y quien revisa puedan evaluar si las afirmaciones están respaldadas y si el trabajo es reproducible. Responde a las debilidades crónicas del campo en la comunicación de resultados (descripciones vagas de las herramientas, versiones de modelo sin declarar, detalles de evaluación omitidos) que documenta la página de [[limitations-in-aied-research|límites]]. Los marcos de comunicación como TEP-AIED se sitúan junto a las listas de verificación consolidadas (por ejemplo, las orientaciones al estilo [[rct|CONSORT]] para los ensayos y las orientaciones al estilo PRISMA para las revisiones) como parte del giro más amplio del campo hacia la [[educational-measurement|transparencia metodológica]] y la reproducibilidad.

[[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] aborda el mismo problema desde la dirección opuesta: como una lista de verificación y no como una estructura narrativa. Establece **30 ítems repartidos en diez dominios temáticos** (justificación educativa y fundamentación teórica, especificación del sistema de IA, papel de la IA e interacción, [[accessibility|accesibilidad]] y adecuación cultural, entorno y participantes, intervención humana, diseño del estudio y evaluación, ética y fiabilidad, transparencia y reproducibilidad, y limitaciones e implicaciones), con una versión editable y una **Matriz de ética y riesgo** complementaria que cubre la agencia de quien aprende, la [[equity-in-ai-education|equidad]] de acceso, la [[governance|gobernanza]] de los datos y la transparencia algorítmica. Los dos marcos se dirigen directamente el uno al otro: TEP-AIED caracteriza a RAISE como exhaustivo, pero critica su amplitud, sosteniendo que «su amplitud y granularidad pueden volverlo complejo y menos accesible para aplicaciones empíricas rutinarias», mientras que el propio encuadre de RAISE es que no impone ningún método ni modelo y solo exige que las decisiones se hagan visibles. Leídos juntos, marcan la compensación propia de esta literatura (la lista de verificación de auditoría más completa frente a la narrativa más ligera de tres dimensiones) y convergen en los mismos puntos no negociables: nombrar y versionar el sistema de IA, declarar las indicaciones y el diseño de la interacción, definir las condiciones de tratamiento y de comparación, informar de la revisión ética y de la mitigación de riesgos, y decir si los resultados miden el rendimiento, la retención o la transferencia. Para que un estudio pueda juzgarse en esos términos, el instrumento de comunicación debe adoptarse en la fase de diseño y no ensamblarse en la fase de manuscrito, que es el punto en el que insisten ambos marcos. El análisis histórico a escala de corpus es en sí mismo una decisión metodológica con obligaciones de transparencia: [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian y Doroudi]] sitúan cada artículo en su marco AI×Ed a partir del juicio de los autores sobre los resúmenes y los textos completos, reconocen explícitamente que no es una categorización sistemática ni escalable basada en datos, y publican su conjunto de datos completo como material suplementario para su replicación.

### Diseños experimentales y cuasi experimentales

Un **estudio de eficacia** evalúa si una intervención produce el efecto de aprendizaje que pretende, normalmente mediante diseños experimentales o cuasi experimentales que comparan los resultados con y sin la intervención. Los experimentos asignan aleatoriamente a quien aprende a distintas condiciones (por ejemplo, tutor de IA frente a tutor humano, o con andamiaje de IA frente a sin asistencia) para estimar efectos causales en resultados como las ganancias de aprendizaje, la [[student-engagement|implicación]] o la motivación. Los **ensayos controlados aleatorizados** son el estándar de referencia para la validez interna. [[access-not-enough-ai-tutoring-2026|Un estudio de campo aleatorizado sobre el apoyo humano junto a la tutoría con IA]] y [[genai-can-harm-teaching-rct-2026|un ensayo controlado aleatorizado sobre la IA generativa en la enseñanza]] usan la asignación para aislar efectos causales. Los diseños **cuasi experimentales** (pre/post, entre sujetos o grupos emparejados sin aleatorización) son más viables en aulas intactas, pero más débiles para las afirmaciones causales.

- **Fortalezas:** la inferencia causal más sólida; una medición limpia de los resultados; permite estimar tamaños del efecto y sostener afirmaciones de eficacia.
- **Limitaciones:** costosos y lentos; las condiciones artificiales pueden reducir la validez ecológica; las herramientas de IA que cambian rápido hacen que los experimentos largos queden desactualizados enseguida; las muestras pequeñas a menudo no alcanzan a detectar efectos significativos; las restricciones [[ethics|éticas]] a la hora de retener herramientas potencialmente útiles.
- **Ejemplos:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].

### Estudios de encuesta y de modelado de ecuaciones estructurales

Las encuestas transversales miden actitudes, percepciones, motivación, [[self-efficacy|autoeficacia]] y [[technology-acceptance-model|aceptación tecnológica]] autoinformadas, a menudo modeladas con regresión o con modelado de ecuaciones estructurales (SEM/PLS-SEM) para poner a prueba relaciones hipotetizadas y mediadores. Estas dominan el corpus de la base de conocimiento, en particular para las preguntas sobre aceptación, motivación y mecanismos psicológicos.

- **Fortalezas:** muestras grandes; una cobertura amplia y de bajo coste; permiten poner a prueba modelos mediacionales complejos de mecanismos psicológicos; viables para estudiar actitudes difíciles de observar.
- **Limitaciones:** los datos transversales no pueden establecer causalidad; sesgo de método común y de autoinforme; el muestreo por conveniencia limita la generalizabilidad; los mediadores se infieren de la covarianza y no de una manipulación.

El instrumento mismo merece un examen aparte. Lo que un cuestionario, una entrevista o un diario pueden y no pueden establecer, y la brecha documentada entre lo que la gente informa y lo que hace, se recoge en [[self-report-measures]].
- **Ejemplos:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Métodos cualitativos

Las entrevistas, los grupos de discusión y el análisis temático producen relatos ricos y contextuales de cómo el estudiantado y el profesorado viven las herramientas de IA, los significados que les atribuyen y las tensiones y los daños que las medidas estandarizadas pasan por alto. [[hazra-safetutors-pedagogical-safety-2026|La investigación sobre la seguridad de los tutores de IA]] y [[ai-changing-teaching-workflows|cómo la IA cambia los flujos de trabajo docentes]] se apoyan en gran medida en evidencia cualitativa. Véase la página de concepto específica de [[qualitative-research]] para el tratamiento completo de los enfoques cualitativos (el análisis temático, la teoría fundamentada, la fenomenología y la fenomenografía, el análisis del discurso, las observaciones y la etnografía, los estudios de caso y las entrevistas y grupos de discusión), cada uno con ejemplos de la base de conocimiento.

- **Fortalezas:** una comprensión ecológica y conceptual profunda; saca a la luz fenómenos, riesgos y mecanismos inesperados; esenciales para construir teoría y para estudiar constructos disputados como la confianza, la [[agency|autonomía]] y la autoría.
- **Limitaciones:** generalizabilidad limitada; interpretativos y dependientes de quien investiga; muestras pequeñas; apoyo más débil a las afirmaciones causales; los hallazgos pueden ser difíciles de sintetizar entre estudios.
- **Ejemplos:** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Diseños de métodos mixtos

Los estudios de métodos mixtos combinan ramas cuantitativas y cualitativas, a menudo de forma secuencial (por ejemplo, QUAL→QUAN→qual), de modo que los datos cualitativos expliquen o contextualicen los hallazgos cuantitativos. [[genai-over-reliance-learning-2026|Un estudio de métodos mixtos sobre la IA generativa y el aprendizaje sostenible]] combina encuestas de tres oleadas con entrevistas a docentes; [[t2i-competence-paradox-2026|el estudio de la paradoja de la competencia]] usa grupos de discusión con docentes, una encuesta al estudiantado y entrevistas de seguimiento.

- **Fortalezas:** la triangulación aumenta la confianza; amplitud cuantitativa más profundidad cualitativa; pueden explicar resultados inesperados y tender un puente entre el mecanismo y la magnitud.
- **Limitaciones:** complejos, intensivos en recursos y metodológicamente exigentes; la integración puede ser superficial si no se diseña con cuidado; heredan igualmente las debilidades de cada rama (por ejemplo, el autoinforme).
- **Ejemplos:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Investigación basada en el diseño (DBR)

La DBR diseña, implementa y refina iterativamente una intervención educativa en contextos auténticos, alternando entre la teoría, el diseño y la práctica real. Destaca en la base de conocimiento por el desarrollo de entornos de aprendizaje con IA y de modelos [[pedagogy|pedagógicos]]. Véase la página de concepto específica de [[design-based-research]] para el ciclo completo de la DBR, sus ejemplos y sus fortalezas y limitaciones. Un ejemplo canónico de la AIED es el estudio del modelo de [[collaborative-learning|aprendizaje colaborativo]] asistido por IA ([[ai-assisted-collaborative-learning-model-dbr|Putra et al.]]), que ejecutó un ciclo de DBR de cuatro fases (análisis de necesidades, diseño del modelo, implementación en el aula durante ocho semanas y refinamiento del modelo), iterando sobre un ciclo de aprendizaje de cuatro etapas (identificación del problema → indagación colaborativa asistida por IA → [[problem-solving|resolución de problemas]] colaborativa → reflexión y presentación). Otros ejemplos desarrollan la formación del [[teacher-education|profesorado]] en [[ai-literacy|alfabetización en IA]] ([[genai-literacy-training-teacher-education-dbr-2026]]) y el [[scaffolding|andamiaje]] de [[generative-ai|IA generativa]] para el [[critical-thinking|pensamiento crítico]] ([[critical-thinking-genai-scaffolding]]).

- **Fortalezas:** alta validez ecológica y relevancia práctica; produce a la vez artefactos utilizables y teoría; responde a la complejidad de las aulas reales y de las herramientas de IA en evolución; muy adecuada para desarrollar un modelo y refinarlo a partir de evidencia de implementación auténtica.
- **Limitaciones:** validez interna débil (pocos grupos de control o ninguno); los hallazgos están atados al contexto y son difíciles de generalizar; plazos largos; difícil aislar qué elemento del diseño causó un resultado: la DBR demuestra viabilidad y mejora, pero no puede atribuir las ganancias de aprendizaje a un mecanismo concreto.
- **Ejemplos:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

La DBR cambia el control causal de los [[rct|experimentos]] por autenticidad ecológica y refinamiento iterativo: es la herramienta adecuada para preguntas del tipo «¿cómo diseñamos este entorno de aprendizaje con IA para que funcione en la práctica?», y su evidencia es más sólida como prueba de concepto y orientación de diseño que como eficacia causal. Leer las ganancias de aprendizaje de la DBR exige la misma [[limitations-in-aied-research|precaución]] que otros diseños: sin una medida de resultado controlada y sin asistencia, las ganancias pueden reflejar el mismo factor de confusión del rendimiento inflado por la IA que se documenta en [[learning-gains|ganancias de aprendizaje]].

### Revisiones sistemáticas y metaanálisis

Las revisiones sintetizan el corpus de evidencia en lugar de ejecutar un experimento nuevo. Las revisiones sistemáticas y de alcance aplican un protocolo transparente para buscar, cribar, valorar y sintetizar un conjunto de estudios; los metaanálisis agrupan además los tamaños del efecto de varios estudios para producir una estimación resumen ponderada y poner a prueba moderadores. [[zerkouk-comprehensive-review-its-2025|Una revisión exhaustiva de los ITS]] y [[genai-higher-education-systematic-review-2026|una revisión sistemática de la IA generativa en la educación superior]] ejemplifican el enfoque.

- **Fortalezas:** síntesis eficiente de una literatura amplia y fragmentada; el metaanálisis produce estimaciones del efecto agrupadas y detecta moderadores; esenciales para la práctica basada en la evidencia y para identificar lagunas.
- **Limitaciones:** dependen de la calidad de los estudios incluidos (entra basura, sale basura); sesgo de publicación; los métodos y las medidas de resultado heterogéneos dificultan la síntesis; envejecen rápido dado el ritmo del cambio en la IA.
- **Advertencia de metainvestigación (2026):** las críticas a la base de síntesis de la AIED muestran que muchos de los primeros metaanálisis se ven socavados por la incoherencia de los constructos, la heterogeneidad sin resolver, la dependencia no tratada entre los tamaños del efecto y una evaluación inválida del sesgo de publicación, lo que infla los tamaños del efecto de titular de la IA (véanse [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]] y [[weidlich-chatgpt-effect-search-cause-2025]]). Trate los tamaños del efecto agrupados de la AIED como cotas superiores.
- **Ejemplos:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Véase la página de concepto específica de [[meta-analysis-systematic-review]] para un tratamiento más completo de la revisión sistemática y el metaanálisis en la IA en la educación, incluida su relación con los diseños primarios, la comunicación conforme a PRISMA y sus fortalezas y limitaciones.

### Evaluación computacional y con puntos de referencia

La evaluación computacional evalúa los [[ai-technologies|sistemas de IA]] directamente (frente a puntos de referencia, etiquetas de referencia o juicios humanos) en lugar de estudiar a personas que aprenden. Esto incluye los [[benchmark|puntos de referencia]] y los enfoques de [[llm]] como juez. Es el método más cercano a la [[ai-ed-evaluation|evaluación de la IA educativa]] (véase la distinción más abajo).

- **Fortalezas:** rápidos, escalables y reproducibles; permiten comparaciones directas entre modelos y entre versiones de un sistema; esenciales para el desarrollo de sistemas y el aseguramiento de la calidad.
- **Limitaciones:** miden la salida del sistema, no el aprendizaje: una precisión alta en un punto de referencia no implica eficacia educativa; la calidad de la referencia y de la rúbrica es en sí misma objeto de disputa; pueden pasar por alto una calidad pedagógica que las personas perciben. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian y Doroudi]] sostienen que la flexibilidad del lenguaje natural de los LLM hace insuficientes las métricas puramente técnicas, y exige enfoques de evaluación inspirados en lo humano ([[simulating-students|estudiantes simulados]], pruebas de IA como [[teacher-role|docente]] y análisis de ciencias del comportamiento antes reservados a sujetos humanos) para juzgar la calidad relevante para el aprendizaje, y que estudiar los LLM con cautela puede generar conocimiento sobre el aprendizaje humano.
- **Ejemplos:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Estándares de comunicación para flujos de trabajo automatizados y puntos de referencia auditados.** Dos artículos de 2026 amplían la responsabilidad metodológica más allá del estudio mismo. PRISMA-LLM mapea 888 artículos sobre automatización de revisiones y 14.726 anotaciones, y encuentra que el 38,0% de los artículos sobre software o productos no informaba de ninguna evaluación, frente al 9,3% de los artículos sobre LLM, y que el 52% de las evaluaciones de LLM solo positivas dejaba sin resolver una preocupación de alto umbral, y propone una comunicación que identifique en qué punto del flujo de trabajo de revisión actuó la automatización ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Una auditoría de recalificación por expertos de seis puntos de referencia de [[physics-education|física]] muestra el mismo problema en el plano del instrumento: de 250 rechazos auditados, solo 12 (4,80%) eran errores genuinos del modelo, mientras que 143 eran defectos del ítem y 95 eran errores del calificador ([[frontier-models-physics-benchmark-audit-2026]]). Ambos sostienen que las evaluaciones computacionales necesitan un presupuesto de error auditado antes de que sus resultados se lean como hallazgos sobre quien aprende o sobre los modelos.

### Otros diseños: estudios longitudinales, de caso y de simulación

Más allá de las grandes familias, la base de conocimiento usa diseños **longitudinales** que siguen a quien aprende a lo largo del tiempo ([[ai-lms-middle-school-longitudinal|un estudio longitudinal de un LMS]]), estudios **de caso y en condiciones reales** sobre un uso auténtico ([[ai-in-the-wild-college|un análisis a gran escala de interacciones reales del estudiantado]]) y estudios de **simulación** en los que los LLM hacen las veces de estudiantes o de pacientes ([[llm-student-simulation-teacher-insights|los LLM como estudiantes simulados]], [[simulation|simulación]]). Estos cambian amplitud o control por realismo y por acceso a fenómenos que de otro modo son difíciles de observar.

### Métodos de consenso de expertos: la técnica Delphi

El método Delphi es una técnica estructurada para establecer un **consenso de expertos** sobre una cuestión cuya respuesta todavía no se conoce empíricamente; se usa sobre todo en la base de conocimiento para desarrollar marcos, listas de competencias y definiciones con los que puedan estar de acuerdo quienes ejercen la práctica y quienes investigan. En un estudio Delphi, un panel de expertos responde a rondas sucesivas de cuestionarios; tras cada ronda se devuelve un resumen anonimizado de las respuestas del grupo, y los expertos revisan sus respuestas hasta que el grupo converge en un acuerdo (definido normalmente por un umbral preestablecido, por ejemplo el 75%). Es una forma de construir validez de constructo y consenso profesional mediante una consulta iterativa y anonimizada, y no mediante una única encuesta o votación.

- **Fortalezas:** produce consenso a partir de un panel diverso de expertos sin las presiones de un grupo presencial (el anonimato reduce los efectos de dominancia); muy adecuados para definir constructos, competencias y marcos cuando no existe una medida validada; las rondas iterativas permiten a los expertos refinar y converger; viables cuando los experimentos completos o las muestras grandes no son prácticos.
- **Limitaciones:** el consenso refleja el juicio de los expertos y no evidencia empírica: establece acuerdo, no efecto; los resultados dependen de la [[writing-education|composición]] del panel y del umbral de consenso (subjetivo); pueden ser lentos a lo largo de varias rondas; el juicio de un solo panel puede no generalizarse.
- **Ejemplos:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|el estudio del marco SAIL]] (tres rondas, 17 expertos, refinando niveles de competencia en alfabetización en IA), [[hcap-human-centric-ai-pedagogy-framework-2026|el estudio del marco HCAP]] (tres rondas, 30 docentes, definiendo 25 competencias docentes en IA), [[ai-literacy-heptagon-2026|el heptágono de la alfabetización en IA]] (que usó aportaciones y consenso de expertos junto a una revisión guiada por PRISMA), y.

El Delphi se combina a menudo con otros métodos: por ejemplo, el consenso de expertos puede usarse para validar un marco (como en SAIL y HCAP) que después se pone a prueba o se implementa mediante investigación basada en el diseño o estudios de encuesta. Convive con los enfoques cualitativos y de juicio experto y contribuye a la [[educational-measurement|validez]] de los instrumentos basados en marcos.

### Investigación frente a evaluación: conexiones y distinciones

La investigación y la evaluación están muy relacionadas, pero son distintas. La **investigación** plantea preguntas generalizables sobre cómo afecta la IA al aprendizaje («¿mejora el andamiaje los resultados de aprendizaje?») y aspira a construir teoría y evidencia que se transfiera más allá del estudio concreto. La **evaluación** (véase [[ai-ed-evaluation]]) valora si una herramienta o un sistema de IA *concreto* funciona (si es preciso, fiable, pedagógicamente sólido y adecuado a su propósito) frente a puntos de referencia, rúbricas o criterios definidos por los actores implicados. La investigación hace hincapié en la validez interna y la generalización; la evaluación, en la calidad del sistema y la toma de decisiones local.

Los límites se difuminan: los estudios con puntos de referencia son evaluación que puede alimentar la investigación, y los instrumentos de evaluación (rúbricas, conjuntos de referencia, marcos de validez) dependen de las cuestiones de [[educational-measurement]] y [[assessment-validity]] que la investigación aclara. A la inversa, los hallazgos de la investigación sobre qué apoya el aprendizaje deberían orientar cómo se [[ai-ed-evaluation|evalúan]] las herramientas de IA. La base de conocimiento las trata como complementarias: la evaluación computacional y con puntos de referencia ([[benchmark]], [[ai-ed-evaluation]]) nos dice si un sistema de IA es técnicamente sólido, mientras que la investigación de eficacia y de encuesta ([[rct]]) nos dice si ayuda a la gente a aprender.

### Cómo elegir entre métodos

La elección del método sigue a la pregunta de investigación. Las preguntas sobre efectos causales favorecen los experimentos ([[rct]]); las preguntas sobre mecanismos y percepciones, las encuestas y el trabajo cualitativo; las preguntas sobre la calidad de un sistema, la evaluación computacional ([[benchmark]], [[ai-ed-evaluation]]); las preguntas de síntesis, las revisiones y los metaanálisis; las preguntas de diseño, la DBR; y las preguntas sobre qué debería contener un constructo, una competencia o un marco según el acuerdo entre expertos favorecen métodos de consenso de expertos como la técnica Delphi. Dada la heterogeneidad del campo y la velocidad del cambio en la IA, el corpus de la base de conocimiento refleja un giro deliberado hacia la triangulación: combinar la evaluación computacional con evidencia de eficacia, cualitativa y de consenso de expertos para juzgar tanto si una herramienta funciona como si ayuda a aprender.

Igual de importante es leer cualquier estudio con conciencia de los **límites transversales** que afectan a la investigación en AIED en su conjunto: las restricciones metodológicas, el ritmo rápido del cambio en la IA frente a una publicación lenta, las carencias de reproducibilidad y de prácticas FAIR, la dependencia de herramientas propietarias y un uso débil o acrítico de la teoría. Véase [[limitations-in-aied-research]].

## Contraste entre las principales tradiciones de investigación

Las tres grandes tradiciones de investigación (la [[quantitative-research|cuantitativa]], la [[qualitative-research|cualitativa]] y la experimental) difieren en lo fundamental en lo que pueden afirmar, lo que sacrifican y cuándo es apropiada cada una. Comprender estos contrastes es esencial tanto para diseñar como para leer investigación sobre IA en la educación.

### Qué establece cada tradición

| Dimensión | Cuantitativa / encuesta | Cualitativa | Experimental |
|---|---|---|---|
| Pregunta central | ¿Cuánto? ¿Cómo se relaciona? | ¿Qué significa? ¿Cómo se vive? | ¿X causa Y? |
| Datos primarios | Números, escalas, autoinforme | Palabras, observaciones, artefactos | Medidas de resultado entre condiciones asignadas |
| Objetivo de la inferencia | Patrones, correlaciones, mediación | Significado, mecanismos, categorías | Efectos causales |
| Validez interna | Débil (correlacional) | Débil (sin control) | Fuerte (asignación aleatoria) |
| Validez externa | Fuerte (muestras grandes) | Limitada (pequeña, atada al contexto) | Moderada (condiciones controladas) |
| Validez ecológica | Moderada | Alta | Más baja (condiciones artificiales) |

- **La [[quantitative-research|investigación cuantitativa]]** mide y modela relaciones entre variables: encuestas, SEM/PLS-SEM, medición, seguimiento longitudinal. Aporta amplitud, precisión y generalizabilidad, pero no puede establecer causalidad a partir de datos transversales y hereda las limitaciones de la [[educational-measurement|medición]] (incluido el sesgo de autoinforme).
- **La [[qualitative-research|investigación cualitativa]]** interpreta el significado y la experiencia: entrevistas, grupos de discusión, análisis temático, teoría fundamentada, fenomenografía, análisis del discurso, observación y etnografía, estudios de caso. Aporta profundidad, mecanismo y construcción de teoría (véase [[theory-development-aied]]) pero una generalizabilidad limitada y un apoyo causal débil.
- **Los diseños experimentales y cuasi experimentales** (véase [[rct]]) estiman efectos causales mediante asignación aleatoria o comparación emparejada: el estándar de referencia para la validez interna, a costa del coste, la velocidad y la validez ecológica.

### Los vínculos con la medición y los métodos mixtos

El trabajo cuantitativo depende de la [[educational-measurement|medición educativa]]: instrumentos fiables y válidos para los constructos que se estudian. El trabajo cualitativo revela los mecanismos y los significados que esos instrumentos pueden pasar por alto. El trabajo **experimental** estima si una intervención *causa* los resultados que miden los instrumentos. Las tres son capas complementarias: los instrumentos cuantifican constructos, los experimentos establecen causalidad y el trabajo cualitativo explica el *cómo y el porqué* que hay detrás de las cifras.

Los [[mixed-methods-research|diseños de métodos mixtos]] combinan deliberadamente ramas cuantitativas y cualitativas para que sus fortalezas compensen las debilidades de la otra: amplitud cuantitativa más profundidad cualitativa, con la triangulación aumentando la confianza.

### Investigación sobre usabilidad y IHC

Una rama metodológica distinta, la [[usability-research|investigación sobre usabilidad e IHC]], evalúa cómo interactúan las personas usuarias con un sistema de IA: su usabilidad, su utilidad, su facilidad de aprendizaje y su experiencia de uso, mediante protocolos de pensamiento en voz alta, estudios estructurados con usuarios, entrevistas y observación. Es la más cercana a la [[ai-ed-evaluation|evaluación de la IA educativa]] y responde a una pregunta *previa*: incluso una herramienta pedagógicamente sólida fracasa si es inutilizable. La investigación sobre usabilidad comparte métodos de recogida de datos con la investigación cualitativa, pero aspira a evaluar un artefacto y no a interpretar un significado.

### Beneficios y limitaciones entre tradiciones

- **Cuantitativa / encuesta:** beneficios: muestras grandes, cobertura amplia, pone a prueba mediadores complejos, eficiente. Limitaciones: nada de causalidad, sesgo de autoinforme, muestreo por conveniencia, los instrumentos pueden medir el constructo equivocado.
- **Cualitativa:** beneficios: comprensión profunda, saca a la luz fenómenos y daños inesperados, esencial para construir teoría, sitúa en el centro voces poco representadas. Limitaciones: generalizabilidad limitada, dependencia de quien investiga, muestras pequeñas, apoyo causal débil, difícil de sintetizar.
- **Experimental:** beneficios: la inferencia causal más sólida, una medición limpia de los resultados, estimación del tamaño del efecto. Limitaciones: costosa y lenta, condiciones artificiales, el cambio rápido de la IA deja obsoletos los resultados, muestras pequeñas con potencia insuficiente, restricciones éticas.
- **Métodos mixtos:** beneficios: triangulación, amplitud más profundidad, explica resultados inesperados. Limitaciones: complejos, intensivos en recursos, la integración puede ser superficial, heredan las debilidades de cada rama.
- **Usabilidad / IHC:** beneficios: identifica barreras de adopción, orientación de diseño accionable, rápida y barata. Limitaciones: no establece efectos sobre el aprendizaje, muestras pequeñas, la satisfacción autoinformada puede engañar.

En la práctica, la investigación sobre IA en la educación rara vez encaja limpiamente en una sola tradición. La evidencia más sólida triangula: una evaluación computacional o de usabilidad establece que un sistema funciona, un experimento establece que causa aprendizaje, los instrumentos cuantitativos miden los constructos y el trabajo cualitativo revela los mecanismos y los significados, respondiendo en conjunto tanto *si* una herramienta ayuda a aprender como *cómo y por qué*.

## Conceptos conectados

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — El desarrollo teórico en la IA en la educación
- [[qualitative-research]] — Investigación cualitativa
- [[quantitative-research]] — Investigación cuantitativa
- [[mixed-methods-research]] — Investigación de métodos mixtos
- [[design-based-research]] — Investigación basada en el diseño
- [[usability-research]] — Investigación sobre usabilidad
- [[self-report-measures]]
- [[learning-sciences]]

## Artículos conectados

- [[access-not-enough-ai-tutoring-2026]] — El acceso no basta: el apoyo humano mejora la implicación con la tutoría con IA
- [[genai-can-harm-teaching-rct-2026]] — La IA generativa puede dañar la enseñanza
- [[genai-over-reliance-learning-2026]] — De la mejora a la dependencia excesiva: un estudio de métodos mixtos
- [[acceptance-ai-english-tools-2026]] — Aceptación de las herramientas de aprendizaje del inglés asistidas por IA
- [[hazra-safetutors-pedagogical-safety-2026]] — La seguridad de los tutores de IA y los daños pedagógicos
- [[zerkouk-comprehensive-review-its-2025]] — Revisión exhaustiva de los sistemas de tutoría inteligente
- [[ai-assisted-collaborative-learning-model-dbr]] — Investigación basada en el diseño para un modelo de aprendizaje colaborativo asistido por IA
- [[teachbench-llm-teaching-evaluation]] — TeachBench: evaluar la capacidad docente de los LLM
- [[ground-truth-reliability-aied]] — Modernizar la referencia: cuatro giros hacia la fiabilidad y la validez
- [[llm-student-simulation-teacher-insights]] — ¿Pueden los LLM simular eficazmente a personas que aprenden?
- [[raise-framework-ai-education-reporting-2026]] — RAISE: 30 ítems en diez dominios para una comunicación transparente de los estudios sobre IA en la educación (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — Sistema de gestión del aprendizaje integrado con IA: un estudio longitudinal
- [[ai-in-the-wild-college]] — La IA en condiciones reales: análisis a gran escala de interacciones auténticas
- [[same-ai-different-pathways]] — La misma IA, caminos distintos: desentrañar los mecanismos
- [[tep-aied-model-reporting-2026]] — El modelo TEP-AIED para comunicar con rigor la investigación sobre IA en la educación (Hwang, Xie, Wah y Gasevic 2026)
- [[t2i-competence-paradox-2026]] — La paradoja de la competencia: la IA generativa de texto a imagen en arte y diseño
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT en la educación: un efecto en busca de una causa
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metametaanálisis del efecto de la IA en el aprendizaje
- [[oneill-presumed-effective-meta-analysis-2026]] — Presuntamente eficaz: auditoría de un metaanálisis de AIED defectuoso
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que las métricas de fidelidad pasan por alto: una comprobación estructural de datos educativos sintéticos
