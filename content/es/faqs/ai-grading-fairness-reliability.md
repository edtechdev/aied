---
title: "¿Puedo usar la IA para calificar el trabajo de los estudiantes de forma justa y fiable?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Tiene una rúbrica en la que cree, más entregas que horas y una herramienta que devuelve una nota y varios párrafos seguros de sí mismos en el tiempo que tarda en leer un ensayo. La prueba con trabajo que ya calificó. La mitad de las notas parecen correctas. Una es extrañamente generosa, otra extrañamente dura, y todavía no puede saber si eso es la herramienta o el ensayo.

Respuesta breve para dar a un colega: la calificación con IA se gana un lugar como asistente supervisado o como segundo lector, en tareas donde la ha contrastado con trabajo que ya había puntuado. La concordancia no se traslada entre tipos de evaluación. En un examen de farmacia con dieciséis estudiantes, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] encontraron una concordancia casi perfecta en los tipos de ítem objetivos y una concordancia no fiable en las respuestas abiertas. En tres universidades inglesas, [[opraise-automated-marking-ai-assessment-2026|el proyecto OpRaise]] encontró que evaluadores de IA y humanos coincidían en la banda de grado entre el 35% y el 65% de las veces según la institución, con las notas comprimidas hacia el centro. Una justificación fluida no es evidencia de que se hayan aplicado sus criterios. Si el resultado es [[assessment-validity|válido para su decisión]] es una pregunta local que tiene que responder usted mismo, y [[human-in-the-loop-ai|una persona sigue siendo responsable]] de todo lo que se convierta en una nota registrada.

## La versión breve

**1.** Nombre el papel antes de ejecutar nada: asistente de retroalimentación, segundo lector o calificador principal. Cada uno exige cantidades distintas de evidencia.

**2.** Empiece por el papel menos consecuente que resuelva su problema real. Si una clave determinista bastaría, un LLM añade riesgo en lugar de valor.

**3.** Calibre con trabajo que ya calificó, incluidos envíos sólidos, débiles, limítrofes y con una estructura poco habitual. Los ejemplos cómodos no demuestran nada.

**4.** Mantenga separado el conjunto de calibración del conjunto de prueba, o estará midiendo lo bien que ajustó la herramienta a ensayos familiares.

**5.** Informe de la concordancia exacta, de las diferencias de puntuación y de la dirección del sesgo, no de una correlación. Revise específicamente los umbrales de aprobado y suspenso.

**6.** Diga a los estudiantes qué papel desempeña la herramienta, quién decide la nota y cómo pedir una revisión.

## Decida qué se le permite hacer a la IA

Hay tres arreglos que se llaman "calificación con IA" y conllevan obligaciones distintas.

Un **asistente de retroalimentación** redacta comentarios o señala posibles omisiones para que usted los acepte, reescriba o descarte. El riesgo se limita a la calidad del comentario, y usted lee todo antes de que llegue a un estudiante. Un **segundo lector** propone puntuaciones por criterio o señala desacuerdos para estructurar su propia corrección. Sus errores tienen que ser útiles y no solo equivocados: una señal que le devuelve a un envío que habría corregido con descuido vale la pena. Un **calificador principal** produce puntuaciones que se convierten en notas registradas. Ese es el arreglo que la evidencia de esta base de conocimiento no respalda más allá de casos estrechos y validados localmente.

Elija el peldaño más bajo que atienda su restricción real. Si su carga de corrección viene de comprobar una clave de respuestas fija, una puntuación determinista ordinaria es más transparente y auditable que un modelo de lenguaje, y el estudio de farmacia sugiere que la ventaja del LLM en los ítems objetivos era en parte un artefacto de haberle entregado las respuestas correctas durante la calificación. Reserve el modelo para el trabajo que necesita interpretación y después revise esa interpretación.

[[automated-assessment|La evaluación automatizada]] abarca la maquinaria más amplia de puntuación, moderación y generación de retroalimentación. Esta página es la pregunta de juicio que hay debajo.

## Lo que la evidencia muestra en realidad

La concordancia depende del tipo de ítem. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] calificaron un examen de farmacia de formato mixto completado por 16 estudiantes e informaron de una concordancia con la calificación del profesorado de entre 0,935 y 1,000 en ítems de opción múltiple, de selección múltiple y de rellenar espacios. La concordancia en las respuestas subjetivas abiertas no fue fiable. Dos detalles importan más que el titular. Se proporcionaron las respuestas correctas durante la calificación, lo que favorece artificialmente los resultados en ítems objetivos, y añadir una rúbrica no mejoró la concordancia de forma consistente, lo que socava la suposición común de que una buena rúbrica convierte un LLM en un calificador consistente. Dieciséis estudiantes no sostienen una afirmación sobre su curso. La variación dentro de un mismo examen es el hallazgo transferible: un sistema que maneja su sección de opción múltiple no dice nada sobre sus ensayos.

La concordancia por bandas es moderada y desigual. [[opraise-automated-marking-ai-assessment-2026|El informe OpRaise]] examinó ensayos auténticos de psicología de grado y encontró una concordancia entre evaluadores de IA y humanos en la banda de grado del Reino Unido del 63% en Cambridge, el 53% en Nottingham y el 35% en Manchester Metropolitan. Las notas se comprimieron hacia el centro, con las colas calificadas con menos precisión: un ensayo que un humano puntuó con 75 recibió varios puntos menos de todos los sistemas de IA, y un ensayo puntuado con 50, varios puntos más. Esa compresión es el fallo que hay que vigilar, porque daña exactamente a los estudiantes de arriba y de abajo de su distribución mientras deja el centro con buen aspecto. Se trata de un informe de proyecto y no de un ensayo revisado por pares, y es la advertencia más útil de la base de evidencia.

Sus propias notas son una referencia imperfecta. Los docentes discrepan entre sí, y su puntuación anterior en un ensayo similar es un juicio, no una verdad de referencia. La concordancia con un evaluador establece consistencia con ese evaluador, lo que no es lo mismo que equidad. Donde las consecuencias lo justifiquen, use un segundo evaluador cualificado para arbitrar los casos difíciles, y trate un desacuerdo entre la IA y un evaluador humano como un motivo para releer el trabajo y no como un veredicto sobre qué parte tiene razón.

Consistencia y buen juicio divergen. Un modelo puede devolver puntuaciones casi idénticas en una nueva ejecución mientras aplica mal sus criterios, porque la repetibilidad mide estabilidad, no validez. Las colas de OpRaise muestran el patrón: el sistema era estable y estaba equivocado en los ensayos que más importaban.

## Valide el procedimiento antes de que toque una nota

Trabaje esto con envíos ya evaluados y debidamente protegidos que cubran las respuestas que recibe de verdad: sólidas, débiles, limítrofes, incompletas, con una estructura poco habitual y respuestas correctas expresadas de forma desconocida.

**1. Especifique criterios y exija evidencia.** Dé el encargo, la rúbrica, las reglas de puntuación y ejemplos de cómo las respuestas alternativas legítimas obtienen crédito. Pida justificaciones concisas por criterio, ligadas a pasajes identificables. Después revise usted mismo esas justificaciones contra el envío.

**2. Separe la calibración de la evaluación.** Ajuste con un conjunto y pruebe con otro. Sin esa separación no puede distinguir un procedimiento validado de uno bien ajustado.

**3. Mida las decisiones que importan.** Registre la concordancia exacta, el tamaño y la dirección de las diferencias de puntuación, y si el modelo otorga sistemáticamente notas más altas o más bajas. Examine por separado los umbrales de aprobado y suspenso y otros límites consecuentes. Una correlación alta puede convivir con un desplazamiento sistemático.

**4. Pruebe la repetibilidad y el comportamiento por subgrupos.** Vuelva a ejecutar un subconjunto con ajustes idénticos. Busque errores por criterio y que el idioma, el formato o un estilo legítimo se tomen por una comprensión más débil. Recuentos pequeños de subgrupos respaldan la cautela, no una afirmación de equidad.

**5. Escriba la regla de escalado.** Decida qué casos reciben siempre calificación humana y cómo se resuelven los desacuerdos. No deje que lo decida la confianza declarada por el modelo; la confianza necesita validarse contra los errores observados antes de poder pesar.

**6. Proteja el flujo de trabajo.** Use un entorno aprobado, minimice la información identificativa y mantenga la rúbrica y las instrucciones separadas del contenido entregado. Esa separación hace más difícil ocultar una manipulación. No la vuelve imposible.

**7. Registre qué invalidaría la comprobación.** Guarde el modelo y su versión, el prompt, la rúbrica y los ajustes. Una actualización del modelo o una revisión de la rúbrica son motivo para repetir las comprobaciones representativas en lugar de suponer continuidad.

## Haga visible el arreglo para los estudiantes

Los estudiantes tienen derecho a saber qué papel desempeña la herramienta, quién decide y cómo impugnar un resultado. Una divulgación vaga produce sospecha; los detalles producen una relación viable. Algo así: «Una herramienta de IA aprobada puede redactar comentarios de rúbrica sobre su borrador. Yo reviso cada comentario y determino su nota. Escríbame si un comentario representa mal su trabajo». Después haga que eso sea cierto.

Dos direcciones de fallo necesitan atención por separado. Las deducciones excesivas son las que los estudiantes denuncian y dominan las reclamaciones. El crédito inmerecido es el que pasa sin mención y corrompe el registro en silencio. Muestree ambos, e incluya sus horas de verificación cuando juzgue si el flujo de trabajo le ahorró algo.

## Lo que le van a responder

**«Los humanos también tienen sesgos».** Los tienen, y por eso la comparación necesita criterios explícitos en lugar de la puntuación de un solo evaluador como estándar. La dispersión institucional de OpRaise es el argumento: si evaluadores humanos de tres universidades produjeron concordancias por banda tan distintas con los mismos sistemas, la referencia humana es parte de lo que hay que especificar, no un rasero fijo.

**«La rúbrica lo vuelve objetivo».** Una rúbrica hace explícitas las expectativas. Aplicarla sigue siendo interpretación, y el estudio de farmacia encontró que proporcionar una rúbrica no mejoró la concordancia de forma consistente. Lo que la rúbrica le compra es un estándar comprobable para las justificaciones, no una garantía de las puntuaciones.

**«Tendría que revisarlo todo, y eso anula el propósito».** Para algunas tareas esa es la conclusión correcta, y la respuesta es acotar el trabajo. Redactar comentarios a partir de sus propias notas de puntuación deja el juicio en sus manos y elimina el tecleo. Las señales de segundo lector en los envíos limítrofes concentran su atención donde cambia un resultado.

**«Mi colega lo probó y funcionó bien».** Pregúntele qué midió. Las valoraciones positivas conviven con errores en esta literatura de forma rutinaria, y un colega que leyó unas cuantas salidas sensatas ha hecho una demostración, no una validación. La pregunta es qué haría su procedimiento con los ensayos que usted notaría menos.

## Qué hacer esta semana

**1.** Elija una evaluación y escriba el único papel que desempeñaría la IA. Escriba qué evidencia le permitiría subirla un peldaño.

**2.** Pásela por cinco envíos que ya haya calificado, elegidos para incluir uno sólido, uno débil, uno limítrofe y uno con una estructura poco habitual pero legítima.

**3.** Registre cada desacuerdo con el trabajo y el criterio, y nombre los errores que consideraría inaceptables y no solo equivocados.

**4.** Compruebe si las diferencias de puntuación van en una dirección consistente y revise por separado su umbral de aprobado y suspenso.

**5.** Redacte el párrafo de divulgación para el estudiante y la vía de revisión, y compare su tiempo de verificación con el tiempo de corrección que se ahorró.

## Adónde ir después

[[assessment-validity|La validez de la evaluación]] es el concepto que decide estas preguntas: si la evidencia respalda la inferencia que quiere hacer. [[automated-assessment]] cubre la tecnología y su rendimiento medido en distintos formatos, y [[ai-feedback-at-scale]] aborda el problema adyacente de los comentarios generados y si los estudiantes actúan sobre ellos.

Para qué debería representar una nota una vez que los estudiantes usan IA, incluida la sustitución del constructo y la evidencia de proceso autenticada, consulte [[redesign-assessment-ai-era|rediseñar la evaluación en la era de la IA]]. Para si la detección puede sustituir a un diseño de tarea defendible, consulte [[should-we-use-ai-detectors|si conviene usar detectores de IA]]. Para la pregunta de evaluación que hay debajo de todo ello, consulte [[checking-whether-educational-ai-works|comprobar si una IA educativa funciona]].
