---
title: Interpretar y aplicar la investigación en AIED
created: "2026-09-28T18:15:36-04:00"
updated: "2026-10-09T17:40:00-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied]
translation_of: concepts/interpreting-and-applying-aied-research
source_updated: "2026-10-05T11:23:36-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Interpretar y aplicar la investigación en AIED** — cómo decidir si un hallazgo sobre la IA en la educación merece que se actúe en consecuencia, tanto si usted enseña, dirige un programa, diseña un curso o desarrolla software. No necesita estadística para usar esta página. Empieza por la pregunta que realmente tiene quien ejerce la práctica —*¿debería hacer esto?*—, recorre las pocas cosas que la responden y deja el detalle técnico para una sección posterior, para quien lo quiera o lo necesite. La versión breve: un hallazgo merece que se actúe en consecuencia cuando se sabe con qué se comparó, qué se midió, a quién se estudió y si la herramienta sigue existiendo en la forma en que se estudió. La mayoría de las afirmaciones que llegan al profesorado, a la administración y a quienes desarrollan software fallan en uno de esos cuatro puntos.

## Preguntas para reflexionar

- Un proveedor, una noticia o un colega dice que una herramienta de IA mejoró el aprendizaje. ¿Qué es lo único que querría ver antes de probarla en su propio curso, y sabría dónde buscarlo?
- Todas las páginas de artículo de esta base de conocimiento tienen ahora una sección **Qué significa esto para la práctica**, y la mayoría tiene una sección **Limitaciones**. Leyendo las dos juntas, ¿qué le dice cada una que no le diga la otra?
- El estudiantado practica con una herramienta de IA y mejora en el trabajo de práctica, pero luego empeora en el [[summative-assessment|examen a libro cerrado]]. ¿Cuál de las dos cifras es el resultado de aprendizaje que le importa a su curso, y detectarían sus evaluaciones actuales la diferencia?
- Un estudio promete una mejora enorme, pero siguió a 30 estudiantes de un curso en una sola institución, y la versión de la herramienta estudiada ya no es la que usa nadie. ¿Cuál de esos dos hechos le preocupa más y por qué?
- Muchas herramientas de IA aumentan cuánto las usa el estudiantado sin aumentar cuánto aprende. Si tuviera que elegir entre una herramienta que eleva la implicación y otra que eleva el rendimiento sin ayuda, ¿qué evidencia lo resolvería?
- Le piden que apruebe o compre una herramienta basándose en las cifras de eficacia del propio proveedor. ¿Qué querría que se revelara sobre cómo se produjeron esas cifras?

## Introducción

Esta página es para quienes tienen que decidir algo: profesorado que se pregunta si cambiar una tarea, [[administrator|administración]] que sopesa un proyecto piloto, diseñadores del aprendizaje que construyen un curso, desarrolladores de software que deciden qué debe hacer una función, o investigadores que explican un hallazgo a cualquiera de ellos.

Dos hábitos marcan la diferencia, y ninguno requiere formación en investigación.

**Lea primero las dos secciones escritas para usted.** Todas las páginas de artículo de este sitio incluyen ahora una sección **Qué significa esto para la práctica** —normalmente de tres a cinco acciones concretas derivadas de ese estudio— y la mayoría incluye una sección **Limitaciones** que indica qué no puede sostener el estudio. Léalas antes que los hallazgos del estudio, no después. La sección de práctica le dice para qué sirve el estudio; la de limitaciones le dice dónde se detiene. Si la sección de práctica falta o es vaga, trate esa página como inacabada y no como evidencia.

**Juzgue la afirmación, no la seguridad con que se afirma.** Las afirmaciones sobre la [[ai-education|IA en la educación]] suelen ser exactas respecto a *algo* y engañosas respecto a lo que a usted le importa, porque un estudio y su aula difieren en cuatro aspectos: con qué se comparó, qué midió, quién participó y qué versión de la herramienta se usó. El resto de esta página le da las comprobaciones en lenguaje llano y, después, la evidencia que respalda cada una, para quien la quiera.

Lo que sigue tampoco sustituye a sus páginas vecinas. [[research-methods-aied|Métodos de investigación en la IA en la educación]] cubre cómo se construyen los diseños; [[limitations-in-aied-research|Limitaciones de la investigación en AIED]] cataloga las debilidades recurrentes de la literatura; [[ai-ed-evaluation|Evaluación en AIED]] cubre cómo se evalúan los sistemas y sus resultados, y [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de estudiantes]] cubre a quién incluye y a quién no incluye un hallazgo.

## Cuatro preguntas que resuelven la mayoría de las afirmaciones

Hágaselas antes de gastar tiempo, dinero o un semestre en algo.

**1. ¿Con qué se comparó, y fue justa esa comparación?** «El estudiantado que usó la IA obtuvo mejores resultados que el que no la usó» solo dice algo si los otros estudiantes estaban haciendo algo real. Si la comparación era la práctica habitual —o nada—, entonces el hallazgo mezcla la herramienta con tiempo extra, atención extra y novedad. Qué buscar: un **grupo de control** que recibió una alternativa creíble y una asignación aleatoria a las dos condiciones.

**2. ¿Qué midieron exactamente?** Aquí es donde fracasan silenciosamente la mayoría de las afirmaciones emocionantes. Las puntuaciones de exámenes, la calidad de los deberes, la [[motivation|motivación]], las actitudes y la [[student-engagement|implicación]] se agrupan en una única cifra de «rendimiento», o una medida del rendimiento *con la herramienta presente* se presenta como aprendizaje. El aprendizaje que depende de que la herramienta esté ahí no es lo mismo que el aprendizaje que perdura. Qué buscar: qué midió el instrumento, si estaba validado para esa población y si algún resultado se midió **sin** la IA presente.

**3. ¿A quién se estudió, cuántos eran y durante cuánto tiempo?** Treinta estudiantes en un curso son una señal, no un resultado. Una intervención de cuatro semanas no puede decirle nada sobre un año. Y un estudio con estudiantes distintos a los suyos sigue siendo útil: es una hipótesis sobre su contexto, no una predicción. Qué buscar: el tamaño de la muestra, cómo se reclutó a los participantes, si era un solo sitio, la duración y si algún subgrupo era lo bastante grande para analizarlo.

**4. ¿La herramienta sigue siendo la que se estudió?** La capacidad de la IA avanza más rápido que la publicación. Un hallazgo de 2025 describe la generación de modelos de 2025 —a veces una versión concreta, a veces una configuración que ya nadie usa—. Eso no vuelve falso el hallazgo; lo vuelve desactualizado, y significa que la afirmación debería volver a comprobarse en lugar de heredarse. Qué buscar: la versión del modelo y la ventana de recogida de datos.

## Qué dice la evidencia sobre las afirmaciones acerca de la IA en general

Si recuerda una sola cosa de esta página, que sea que la cifra titular suele estar inflada y la comparación suele ser débil. No es una opinión marginal: es lo que informan las auditorías del propio campo. Varios estudios bien diseñados sí muestran ganancias reales; la cuestión es que la carga de la prueba recae sobre quien afirma.

- **Alrededor de dos tercios del efecto medio desaparecen** cuando se corrige el hecho de que los resultados llamativos se publican y los que no lo son, no. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] agruparon 1.840 tamaños del efecto de 67 revisiones y encontraron que el promedio corregido era aproximadamente un tercio de la mediana publicada: SMD 0,196 frente a 0,67.
- **Un nombre de producto no es un método de enseñanza.** Al auditar las comparaciones que hay detrás de un metaanálisis destacado, [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] encontraron que solo el **21%** tenía un tratamiento bien definido, un grupo de control y una medida válida de aprendizaje, y que la ventaja reportada para «usar ChatGPT» resultó mayor que para los [[intelligent-tutoring|sistemas de tutoría inteligente]] diseñados a propósito (g = 0,7 frente a 0,66), lo cual es una señal de alarma y no un triunfo.
- **El rendimiento con la herramienta se confunde sistemáticamente con aprendizaje.** En un estudio de matemáticas de [[k-12|K-12]], el estudiantado que practicó con un [[conversational-ai|chatbot]] de propósito general obtuvo mejores notas de práctica y luego puntuó **alrededor de un 17% peor** que sus compañeros sin acceso a IA en el examen final a libro cerrado ([[stanford-evidence-base-ai-k12-2026|la base de evidencia de Stanford sobre la IA en K-12]]).
- **Las propias revisiones del campo no superan la auditoría.** La auditoría de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] de **14 metaanálisis revisados por pares** que afirmaban que la IA mejora la educación encontró que **ninguno** ofrecía una base válida para las afirmaciones que sostenía, y entre 46 estudios primarios seleccionados al azar, el **61%** presentaba problemas de validez. El problema no es un artículo malo; es una cultura de reporte.
- **Los autoinformes favorecen a todo el mundo.** Las personas califican sus propias [[ai-literacy|competencias en IA]] alrededor de un **40%** por encima de lo que muestran las medidas de rendimiento, y por eso las encuestas de satisfacción y confianza son la evidencia más débil sobre la que se puede actuar ([[self-report-measures|medidas de autoinforme]], [[educational-measurement|medición educativa]]).
- **La mayoría de los productos que ya están en las aulas no tienen ninguna evidencia independiente.** [[instruction-partners-ai-in-action-learning-tour-2026|el recorrido de aprendizaje de Instruction Partners de 2025–26]] perfiló 20 productos de IA dirigidos al estudiantado y encontró que, de los 16 con perfiles completos, solo siete tenían una revisión independiente que examinara el rendimiento del estudiantado entre grupos en Estados Unidos; dos se estudiaron solo en el extranjero, cuatro tenían estudios en curso y tres se basaban únicamente en datos internos. Los autores sostienen que los estudios causales independientes que cubran los grupos prioritarios deberían ser la expectativa para todos los productos dirigidos al estudiantado, algo que todavía no es la norma para las herramientas que las escuelas ya usan.

## Convertir un hallazgo en una decisión

La secuencia que ahorra más esfuerzo desperdiciado, en orden.

1. **Escriba primero su resultado.** No «usar más IA», sino «el estudiantado puede hacer X sin la herramienta». Si su resultado es el rendimiento sin ayuda, entonces un estudio que midió el rendimiento con ayuda es evidencia adyacente, no evidencia directa.
2. **Encuentre la comparación y la medida** —en el estudio o en la sección de práctica de su página de artículo—. Si falta cualquiera de las dos, trate la afirmación como una demostración y no como un hallazgo.
3. **Lea la sección de limitaciones como instrucciones, no como advertencias legales.** «Un solo curso, resultados autoinformados, cuatro semanas» le dice exactamente cuál de sus supuestos no cubre el estudio.
4. **Compruebe la versión y la fecha.** Si el estudio usó una generación de modelos de hace dos años, planifique volver a probar en lugar de dar por sentado.
5. **Nombre las condiciones habilitantes.** El coste, las licencias, el tiempo del personal, las reglas sobre datos y si el estudiantado debe pagar el nivel que realmente funciona. Los estudios rara vez recogen esto, y es lo que decide si una intervención sobrevive un semestre. En [[chick-faculty-development-ethical-ai-2026|un estudio de desarrollo del profesorado con diez participantes]], todos dijeron que seguirían usando IA, mientras esas mismas personas describían suscripciones personales para acceder a las herramientas y ninguna disponibilidad de tiempo para los rediseños que habían planificado.
6. **Haga un piloto pequeño y mida la condición sin apoyo.** Un breve pre/post con una evaluación hecha sin la herramienta supera a una encuesta de satisfacción. Pequeño y honesto supera a grande y retórico. Consulte [[learning-design|Diseño del aprendizaje]] para ver dónde encaja esto en el diseño de un curso.
7. **Anote una fecha de revisión y esté dispuesto a abandonar la afirmación.** Cuando la premisa de un estudio es una capacidad que ya no existe, lo honesto es retirar la afirmación en lugar de citarla indefinidamente: la misma disciplina que esta base de conocimiento aplica a sus propias páginas.

## Palabras que encontrará en la investigación

Traducciones llanas, para que pueda hojear un estudio o la página de un proveedor sin formación en métodos.

- **Tamaño del efecto** — cuán grande fue la diferencia, en una escala donde 0 es nada. Trate los valores pequeños como «un empujoncito», no como «una transformación».
- **Estadísticamente significativo** — improbable que sea puro azar *en esta muestra*. No dice nada sobre si el efecto es grande ni sobre si ocurrirá en su clase.
- **Intervalo de confianza** — el rango de resultados que los datos no pueden descartar. Si el rango incluye el cero, el hallazgo puede no ser nada, por interesante que sea el titular.
- **[[meta-analysis-systematic-review|Metaanálisis]]** — un estudio que agrupa muchos estudios. Es potente y solo vale lo que vale lo que agrupó, y por eso las revisiones se auditan.
- **Sesgo de publicación** — los resultados interesantes se publican y los aburridos no, así que el promedio de la literatura parece más halagüeño que la realidad.
- **Autoinforme** — personas describiéndose a sí mismas. Útil para las actitudes, débil para la competencia o la conducta.
- **Grupo de control** — la condición de comparación. Lo más importante que hay que buscar.
- **Pre/post** — medido antes y después sin grupo de comparación. Sugerente, nunca concluyente.
- **Análisis de subgrupos** — resultados de una porción de la muestra. Normalmente con poca potencia estadística, así que trátelo como una hipótesis.
- **Replicación** — otra persona obtuvo el mismo resultado. Poco frecuente, y la evidencia más sólida disponible.
- **[[benchmark|Benchmark]]** — un conjunto fijo de tareas para puntuar sistemas. Las puntuaciones se mueven cuando se mueve el objetivo, así que compruebe la fecha.

## Cuándo ir más despacio de todos modos

- **La afirmación viene del proveedor, con las métricas del proveedor.** Aun así puede ser informativa —un proveedor de [[intelligent-tutoring|tutoría con IA]] informa de una métrica de implicación calibrada contra expertos humanos con un F1 de 0,83, con mejoras procedentes de más de 40 experimentos en cinco meses ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al., 2026]])—, pero el constructo, los evaluadores y la métrica son elecciones del proveedor. Pida el grupo de comparación y el resultado sin ayuda.
- **Se da por resuelta la calificación automatizada.** Una alta concordancia con evaluadores humanos es fiabilidad, no calidad. En un estudio de calificación, los evaluadores humanos coincidieron con el consenso de varios evaluadores en torno a r = 0,88, de modo que las puntuaciones automatizadas cercanas a r = 0,85 ya estaban en el propio techo de medición de la tarea ([[know-when-to-trust-ai-scoring-reliability-2026|Cuándo confiar en la calificación con IA]]).
- **La lista de referencias hace un trabajo pesado.** Se confirmaron treinta entradas de referencia con información bibliográfica verificablemente fabricada en 14 artículos de [[cs-education|educación en informática]], todos de 2025 y 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny et al., 2026]]). Si una afirmación se apoya en una cita, compruebe la cita.
- **Nadie midió la conducta de la que depende su política.** En 493 registros deduplicados y 14 estudios prioritarios, ningún estudio midió si la verificación tuvo éxito *y* qué hizo después quien aprendía con ella, juzgado contra un estándar independiente de calidad del resultado ([[verification-quality-reliance-calibration-genai-2026|verificación y calibración de la dependencia]]). Las políticas de curso dependen exactamente de esa conducta.

## Si está construyendo o comprando una herramienta

Las mismas comprobaciones se invierten y se convierten en requisitos de diseño, y las páginas de evaluación de la base de conocimiento contienen el detalle ([[ai-ed-evaluation|Evaluación en AIED]], [[automated-assessment|Evaluación automatizada]]).

- **Incorpore la comparación a la especificación de la función.** Decida qué estaría haciendo quien aprende en caso contrario y sea capaz de decir por qué su herramienta supera eso, y no por qué supera a nada.
- **Mida la condición sin apoyo.** Si su resultado es el aprendizaje, incluya una tarea completada sin la herramienta; el rendimiento con ayuda por sí solo le engañará tanto como engaña a sus compradores.
- **Informe de cómo se validaron sus juicios automatizados** —el estándar de oro, el objetivo de calibración, quién resolvió los desacuerdos— e infórmelo como fiabilidad y no como calidad.
- **Nombre la versión y la fecha** en cualquier afirmación de eficacia, porque su próxima versión la invalida.
- **Muestre los contrapesos:** coste por estudiante, [[accessibility|accesibilidad]], tratamiento de los datos y qué ocurre con quien aprende en el nivel gratuito. Consulte [[ai-use-disclosure|Divulgación del uso de IA]], [[privacy|privacidad]] y [[governance|gobernanza]].

## Para quienes quieren la evidencia

Las comprobaciones anteriores no son sabiduría popular; proceden de fallos documentados en esta literatura. Esta sección conserva el detalle para quien revise un artículo, defienda una decisión o sostenga que una herramienta debería evaluarse como es debido.

**Los fallos de validez tienen una distribución, no solo una presencia.** En los 46 estudios auditados por [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]], el problema más común fue el desajuste de la variable dependiente (n = 15) —la medida no capturaba lo que afirmaba la afirmación—, seguido del desajuste de la variable independiente (n = 11), problemas de diseño experimental (n = 7), problemas de extracción de datos (n = 6), ausencia de grupo de control (n = 6) y asignación no aleatoria de los grupos (n = 6). De los 14 metaanálisis, doce trataron como independientes varios tamaños del efecto extraídos de un mismo estudio primario, lo que infla la base de evidencia aparente.

**Las afirmaciones sobre subgrupos suelen ser indecidibles en los estudios que las formulan.** El [[ai-tutoring-micro-rct-gcse-science-2026|microensayo controlado aleatorizado de ciencias de GCSE]] informa de una interacción tratamiento-por-estatus de **0,57 puntos (IC del 95%: -2,25 a 3,39)**, con estimaciones estratificadas de **g = 0,28 (IC del 95%: -0,04 a 0,59)** para un grupo y **g = 0,35 (IC del 95%: 0,18 a 0,52)** para el otro. Un intervalo que cruza el cero no es un hallazgo de [[equity-in-ai-education|equidad]]; es una pregunta para un piloto local.

**Una síntesis puede satisfacer su propio protocolo y aun así agrupar calidad sin ponderar.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al. (2026)]] afirman claramente que no usaron ninguna herramienta formal de valoración de la calidad y que trataron sus criterios de inclusión como el umbral de rigor, de modo que un estudio cuasiexperimental y uno aleatorizado contribuyeron por igual; y su heterogeneidad se lee como **I² = 82,98% bajo un modelo de efectos fijos pero 15,75% bajo el modelo de efectos aleatorios**, y por eso una cifra de heterogeneidad citada sin su modelo no puede decirle cuán inconsistente es el corpus.

**La [[assessment-validity|validación]] del juicio automatizado forma parte del resultado.** La concordancia con codificadores humanos es una afirmación de fiabilidad, y el techo mostrado arriba explica por qué no equivale a calidad ([[machines-misread-pedagogical-quality|las máquinas malinterpretan la calidad pedagógica]]).

**La antigüedad de la herramienta es una limitación de primer orden.** Una revisión sobre la evaluación asistida por IA señala que sus propios hallazgos reflejan versiones concretas de modelos en momentos concretos y que el movimiento del campo hace que cualquier descripción de las capacidades de los modelos pueda quedar obsoleta en meses ([[ai-assisted-assessment-instruction-higher-ed-2026|Evaluación e instrucción asistidas por IA en la educación superior]]). Acote las afirmaciones a su generación: «la [[generative-ai|IA generativa]] mejoró X» no es trasladable, mientras que «herramientas de la era GPT-4, en esta tarea, con este [[scaffolding|andamiaje]]» sí lo es.

**Los objetivos de los benchmarks se mueven**, así que un resultado que un sistema satura o falla hoy puede invertirse con la próxima versión; las comprobaciones de saturación y contaminación van junto a cualquier afirmación basada en un benchmark.

**Leer esta literatura junto a sus propios críticos es práctica habitual aquí.** Las listas de comprobación del lado del reporte para autores y revisores están en [[reporting-interpreting-aied-research|las preguntas frecuentes sobre reportar e interpretar la investigación en IA]], y los hábitos de valoración de esta página se combinan con [[theory-development-aied|Desarrollo teórico en la IA en la educación]] cuando una afirmación es teórica y no empírica.

## Una lista de comprobación breve

1. Formule su resultado en una frase, incluido si la herramienta está presente en él.
2. Encuentre la comparación. Sin una comparación creíble, no hay decisión.
3. Haga coincidir la medida con su afirmación y prefiera un resultado sin ayuda.
4. Desinfle la cifra: lea el efecto corregido por sesgo, no el titular.
5. Compruebe la versión del modelo y las fechas del estudio.
6. Lea la sección de limitaciones como instrucciones sobre lo que todavía no sabe.
7. Calcule el coste: licencias, niveles, tiempo del personal, reglas sobre datos.
8. Haga un piloto pequeño con una medida sin ayuda y luego decida.
9. Anote una fecha de revisión a un año vista y esté listo para retirar la afirmación.

## Conceptos conectados

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]
- [[ai-assisted-educational-research]] — Investigación educativa asistida por IA

## Artículos conectados

- [[oneill-presumed-effective-meta-analysis-2026]] — Presunto eficaz: auditoría forense de 14 metaanálisis en AIED
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Efectos de la IA ajustados por sesgo de publicación, alrededor de un tercio del tamaño reportado
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT en la educación: un efecto en busca de una causa
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Los criterios de inclusión usados como umbral de rigor, y una heterogeneidad que cambia con el modelo
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Cuando la fiabilidad de la calificación automatizada toca el techo de medición de la tarea
- [[verification-quality-reliance-calibration-genai-2026]] — Lo que la literatura sobre verificación y dependencia no mide
- [[citation-errors-hallucinations-computing-education-2026]] — Referencias fabricadas que llegaron a imprenta en 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Ganancias en la práctica, pérdidas en el examen: el problema de retirar la ayuda en matemáticas de K-12
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Efectos de subgrupo cuyos intervalos de confianza cruzan el cero
- [[chick-faculty-development-ethical-ai-2026]] — Condiciones habilitantes: señales de política, suscripciones personales, falta de tiempo
- [[ai-tutoring-quality-k12-methodologies-2026]] — Métricas de proveedor con su calibración y su número de experimentos declarados
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Hallazgos ligados a versiones de modelos, y la agitación del campo
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Recuentos de evidencia independiente para 16 productos de IA dirigidos al estudiantado que ya están en uso
