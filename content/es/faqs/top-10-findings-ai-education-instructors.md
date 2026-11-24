---
title: "¿Cuáles son los 10 hallazgos principales de la investigación sobre IA en educación que el profesorado debería conocer?"
created: "2026-09-22T18:29:07-04:00"
updated: "2026-11-14T18:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
contributors: [editor]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Estos diez estudios inciden directamente en decisiones que toma el profesorado: qué encargar, cómo evaluarlo, qué herramientas comprar, cómo construirlas y cómo saber si hubo aprendizaje. Cada entrada presenta el estudio, su resultado y la práctica que cambia.

## Los diez estudios

**1. El simple acceso a un chatbot redujo las notas de examen un 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Casi 1.000 estudiantes de secundaria en Turquía, en unas 50 clases, trabajaron tres sesiones de matemáticas con el mismo contenido. Un grupo tuvo una ventana de chat GPT-4 sin más durante la práctica. Otro tuvo un tutor construido sobre el mismo modelo con [[guardrails|salvaguardas]] escritas por el profesorado: pistas en lugar de respuestas, con la solución correcta y los errores habituales incrustados en el mensaje. El grupo de control no tuvo IA. Cada sesión terminaba con un [[summative-assessment|examen a libro cerrado]] sobre problemas similares, sin la herramienta.

El grupo del chat sin más obtuvo un 48% más que el control durante la práctica y un 17% menos en el examen. Los estudiantes que nunca tocaron la IA superaron a ese grupo. El grupo con salvaguardas ganó un 127% en la práctica y quedó igualado en el examen. El daño desapareció y no apareció ninguna ventaja de aprendizaje en su lugar. Los registros de chat explican la diferencia: el grupo sin salvaguardas pedía respuestas y se detenía, mientras que el grupo con salvaguardas intentaba resolver los problemas, pedía pistas y mejoraba dentro de la primera sesión.

Para el profesorado, «se permite la IA» no es una política. La interfaz decide si la herramienta se convierte en un canal de pistas o en una máquina de respuestas, y un chatbot general opta por lo segundo. Una ventana de chat abierta durante la práctica perjudica a los estudiantes que más se apoyan en ella.

Los equipos directivos pueden oponer el mismo resultado al argumento de compras de que un modelo más potente arregla la pedagogía. El modelo era idéntico en ambos brazos.

Ver también: [[training-ai-tutors-to-guide-rather-than-answer|Formar a un tutor para que guíe en lugar de responder]]

**2. Un tutor construido sobre la pedagogía del propio curso superó a la clase de aprendizaje activo, en menos tiempo ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 es el curso introductorio de física de Harvard para estudiantes de ciencias de la vida. Durante el otoño de 2023, 194 estudiantes en un ensayo cruzado cursaron dos lecciones dos veces, una en la clase de [[active-learning|aprendizaje activo]] del curso y otra mediante un tutor construido para el curso, con pruebas previas y posteriores alrededor de cada versión.

Los estudiantes aprendieron más con el tutor. La mediana de la prueba posterior fue 4.5 frente a 3.5, las [[learning-gains|ganancias de aprendizaje]] medianas fueron más del doble que las de la clase, y las estimaciones por cuantiles del efecto fueron de 0.73 a 1.3 desviaciones estándar. Pasaron una mediana de 49 minutos con el tutor frente a unos 60 minutos en clase, y el 83% valoró sus explicaciones como igual de buenas o mejores que las de sus docentes. Las valoraciones de implicación y motivación subieron. El disfrute y la mentalidad de crecimiento no difirieron.

El resultado descansa en el diseño. El tutor ejecutó los mismos movimientos que la clase: ejemplos resueltos, pistas graduadas, indicaciones de autoexplicación y una secuencia que sigue la investigación sobre cómo se aprende física. La comparación fue con aprendizaje activo, no con clase magistral, así que no se aplica la objeción habitual de que cualquier cosa supera una clase magistral.

El profesorado que desarrolla docencia tiene aquí el argumento más sólido disponible de que diseñar un tutor es trabajo curricular, no de compras. Para los equipos de producto el listón es concreto: igualar un aula de aprendizaje activo, en menos tiempo, con los mismos movimientos instruccionales.

Ver también: [[developing-ai-tutor|Buenas prácticas para desarrollar un tutor de IA]]

**3. La tutoría con IA igualó a tutores humanos expertos ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench agrupó 2.469 sesiones de tutoría con 2.383 adultos que preparaban el GRE, usando 13 tutores de IA construidos sobre 12 modelos, tutores humanos en vivo y un control de vídeo. El resultado fue la ganancia de aprendizaje en ítems cuantitativos y verbales.

La tutoría con IA agrupada fue estadísticamente equivalente a la tutoría humana experta, dentro de un cuarto de desviación estándar, y ambas superaron al control en unos seis puntos porcentuales: 6.86 en cuantitativo y 5.47 en verbal, o aproximadamente entre una y media y dos respuestas correctas adicionales por sección. Los tutores de IA fueron valorados como más débiles en la planificación de lecciones y en la creación de problemas de práctica, en lo que los tutores humanos lo hicieron mejor.

Para los equipos directivos, la aritmética de personal cambia en la preparación de exámenes bien especificada. Cuando un tutor con licencia iguala a un tutor humano en un cuarto de desviación estándar, la decisión trata de coste y cobertura, y la eficacia deja de ser la pregunta. Los investigadores señalarán el límite: la equivalencia no es superioridad, y un examen estandarizado es el resultado más fácil de igualar para una máquina.

El profesorado que desarrolla docencia puede mirar dónde mantuvieron ventaja los tutores humanos: diagnosticar qué necesita el estudiante a continuación y construir la secuencia que se deriva de ello.

Ver también: [[intelligent-tutoring|Tutoría inteligente]]

**4. Tomar apuntes superó a preguntar a un chatbot, tres días después ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes y sus colegas realizaron un experimento preregistrado en siete centros de secundaria ingleses. 405 estudiantes de 10.º curso trabajaron con dos de tres condiciones sobre un pasaje de historia: un chatbot que podía responder preguntas sobre él, tomar apuntes, o ambas cosas. Tres días después hicieron pruebas a libro cerrado de retención literal, comprensión y [[retrieval-spacing-interleaving|recuerdo libre]].

Los apuntes superaron al chatbot en las tres medidas, por aproximadamente media desviación estándar en retención y cerca de cuatro décimas en comprensión. Apuntes más chatbot superaron al chatbot solo en dos de las tres y no hicieron nada por el recuerdo libre, y los apuntes solos fueron más fuertes que la combinación. En la condición combinada, alrededor de una cuarta parte de los estudiantes copió la salida del chatbot en sus apuntes. Los estudiantes siguieron valorando el chatbot como más fácil, más útil y más agradable que escribir.

El profesorado tiene aquí evidencia directa de que un asistente de lectura puede reemplazar la lectura. Si el propósito de la tarea es comprender un texto, [[writing-education|la escritura es la comprensión]], y una herramienta que responde preguntas sobre el pasaje elimina la práctica. Conserve los apuntes. Si permite el chatbot, pida algo que no pueda aportar: una comparación, una impugnación del texto o un resumen escrito después de cerrar la herramienta.

Ver también: [[ai-support-reading-comprehension|Apoyo de la IA a la comprensión lectora]]

**5. El tiempo de estudio cayó un 27%, y la retención cayó con él ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Un panel de diez años de la plataforma ALEKS, que cubre 3.2 millones de interacciones de aprendizaje y 12.2 millones de tiempos de respuesta en evaluaciones de nivel, muestra lo que hicieron los estudiantes tras la llegada de ChatGPT. El diseño compara tipos de problema que pueden pegarse en un chatbot (problemas verbales basados en texto) con tipos que exigen manipular un gráfico dentro de la plataforma, dentro del mismo currículo.

El tiempo en los problemas susceptibles a la IA cayó un 2.8% por trimestre entre estudiantes universitarios, un 26.9% en once trimestres. Los estudiantes de secundaria cayeron un 31.3%, los de educación media un 9.0%, y los de quinto grado no mostraron cambio detectable. La caída desapareció por completo bajo [[remote-proctoring|supervisión remota]], que es la prueba decisiva: con la herramienta no disponible, los estudiantes dedicaron la cantidad de tiempo anterior. Los ítems de retención supervisados mostraron una caída acumulada del 25% en las probabilidades de una respuesta correcta.

El gradiente por edad es una señal de diseño para los equipos de producto. El tiempo de práctica es la variable que se mueve, y se mueve más donde la tarea es más fácil de delegar. Para el profesorado, el tiempo en la tarea es una alerta temprana barata: una cohorte que termina los mismos problemas mucho más rápido probablemente no está aprendiendo lo mismo.

Ver también: [[reducing-over-reliance|Reducir la dependencia excesiva de la IA]]

**6. Las notas de deberes subieron un 18% mientras los exámenes a libro cerrado cayeron un 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26.811 estudiantes de 7.º a 12.º curso en China, seguidos durante 30 meses, con la IA generativa adoptada en momentos distintos según la cohorte. Las notas de deberes subieron un 18% y el tiempo de finalización cayó un 30%, de 64 a 45 minutos. Los exámenes mensuales a libro cerrado cayeron un 20% de la media de referencia en seis meses, y los exámenes de acceso de alta exigencia cayeron entre un 18% y un 24% tras unos dos años.

El calendario muestra el mecanismo. Alrededor del 81% de los usuarios de IA terminaban los deberes más rápido que el estudiante sin IA más rápido y luego rendían mal en los exámenes. La minoría que mantuvo un tiempo de deberes comparable al de los no usuarios aprendió tan bien como cualquiera. Las pérdidas fueron mayores en ciencias sociales, luego en STEM y luego en lenguas, y mayores entre estudiantes de alto rendimiento.

Completar los deberes es un mal indicador del rendimiento, y la brecha aparece en seis meses, mucho antes de que se muevan los resultados de los exámenes de acceso. El profesorado puede actuar antes: mantenga la evidencia calificada a libro cerrado y trate el trabajo para casa como práctica cuyo tiempo de finalización sea visible.

Ver también: [[checking-whether-educational-ai-works|Comprobar si la IA educativa funciona]]

**7. Todos los tutores evaluados fallaron en pedagogía, y fallaron peor a lo largo de una conversación ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors evaluó 11 tutores, de modelos de pesos abiertos de 3.8B a 72B más GPT-5-mini, en matemáticas, física y química, frente a una taxonomía de 11 dimensiones y 48 subriesgos extraídos de la [[learning-theories|ciencia del aprendizaje]]. Sus categorías de fallo son pedagógicas: revelación excesiva de respuestas, refuerzo de ideas erróneas y abandono del [[scaffolding|andamiaje]]. Cada una parece útil en el momento, porque el estudiante obtiene rápido una respuesta correcta.

Todos los modelos mostraron un daño pedagógico amplio. Los modelos más grandes no fueron de forma fiable más seguros, y la utilidad general se correlacionó solo débilmente con la seguridad pedagógica. Las tasas de daño subieron del 17.7% en intercambios de un turno al 77.8% en conversaciones de cinco a ocho turnos.

Las evaluaciones de un solo turno no son evidencia de un tutor seguro, y los equipos de producto deberían diseñar sus pruebas en consecuencia. Un modelo que supera una comprobación de utilidad y seguridad de una sola vez puede fallar en la mayor parte de una conversación real. Los equipos directivos que compran un tutor necesitan tres respuestas: ¿retiene las soluciones?, ¿sondea las ideas erróneas?, ¿se mantiene durante una sesión? Una demostración de proveedor con un solo intercambio no ofrece ninguna de las tres.

Ver también: [[pedagogical-safety|Seguridad pedagógica]]

**8. Los casos de conducta indebida se apoyan en evidencia más débil de lo que sugieren las acusaciones ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz y sus colegas codificaron todos los casos de conducta indebida relacionada con IA generativa en una universidad australiana durante tres años: 1.162 casos con 1.855 elementos de evidencia, cada uno valorado por relevancia, credibilidad y fuerza inferencial.

Las acusaciones de IA generativa subieron del 11.9% de los casos de conducta indebida en 2023 al 36.9% en 2025, mientras el volumen total de casos se mantuvo plano. 58 casos, el 5% del total de IA generativa, se apoyaban solo en una afirmación sin ningún elemento de evidencia. La salida de detectores fue rara y débil: los informes de Turnitin o de similitud no tuvieron fuerza inferencial en 73 elementos, y la salida aislada de GPTZero tuvo baja credibilidad en 69. La evidencia más fuerte vino de la investigación y no de la acusación, con admisiones orales en entrevista en 410 elementos, un 97.2% fuertes. Las [[hallucination-risk|referencias fabricadas]] fueron el mayor cambio estructural, el 22.3% de los elementos, subiendo del 10.4% en 2023 al 30.0% en 2025.

Para los equipos directivos, la lección es procedimental. Un caso construido sobre la puntuación de un detector no sobrevivirá a una apelación, y una investigación que empieza por la herramienta en lugar de la entrevista produce expedientes débiles. El profesorado puede actuar sobre el artefacto que no deja de aparecer: las referencias fabricadas son frecuentes, y comprobar una referencia es barato.

Ver también: [[should-we-use-ai-detectors|Uso de detectores de IA]]

**9. La confianza del profesorado en su alfabetización en IA apenas acompaña a su habilidad medida ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 docentes de primaria y secundaria completaron una encuesta de autoinforme sobre alfabetización en IA y una medida objetiva de desempeño construida sobre el mismo marco: Concepto, Uso, Evaluación y Ética. Las correlaciones entre ambas fueron de 0.07 a 0.24.

El análisis de perfiles latentes encontró seis grupos. 43 docentes se valoraron de forma consistentemente alta mientras puntuaban más bajo en la medida objetiva. 59 mostraron lo contrario. El resto se agrupó cerca de la media o se dividió según la experiencia previa con IA.

Para quienes desarrollan al profesorado, la [[self-assessment|autoevaluación]] no es un análisis de necesidades. Una encuesta que pregunta a los docentes cuánta confianza tienen financiará de más a los confiados y atenderá de menos a los callados, y esos grupos no son los competentes y los que tienen dificultades. Tareas breves de desempeño los separan. Los investigadores deberían tratar las correlaciones bajas como una advertencia de medición: cualquier estudio de [[ai-literacy|alfabetización en IA]] basado en [[self-report-measures|autoinforme]] mide confianza.

Ver también: [[faculty-development-ai|Desarrollo del profesorado que cambia la práctica]]

**10. La puntuación con IA penaliza a los estudiantes que escriben peor ([[ai-scoring-language-bias-physics|Feser y Tschisgale, 2026]]).**

Las explicaciones de física de 116 estudiantes de secundaria fueron puntuadas por 9 enfoques de aprendizaje automático y 2 enfoques de modelos de lenguaje grandes, y luego comparadas con puntuaciones de expertos humanos. La concordancia con los expertos fue del 67.2% al 78.4%, lo que suena aceptable hasta que se desglosan los errores.

Todos los enfoques subestimaron la comprensión conceptual en explicaciones de menor calidad lingüística. El sesgo fue en una dirección: la escritura más fuerte no se infló. El patrón refleja lo que se ha informado para los propios profesores de física, lo que sugiere que la dificultad está en inferir la comprensión a partir de la prosa, tanto para las personas como para los modelos.

El personal de evaluación y los equipos de producto necesitan informar las tasas de subestimación por calidad lingüística, no solo la concordancia global con expertos, porque el promedio oculta al grupo perjudicado. Para quien puntúe a [[multilingual-learning|estudiantes multilingües]], derive las respuestas de baja calidad lingüística a [[human-in-the-loop-ai|revisión humana]] o diseñe tareas que no dependan de la prosa.

Ver también: [[ai-grading-fairness-reliability|Calificación con IA justa y fiable]]

## Qué tienen en común los diez

Tres de los estudios miden dos cosas a la vez: lo que los estudiantes producen con la herramienta y lo que pueden hacer sin ella. Bastani, Rismanchian y Strömberg encuentran que ambas divergen, y solo la medida sin ayuda se comporta como aprendizaje. Cuatro dependen de una decisión de diseño y no del modelo: las salvaguardas de Bastani, la pedagogía incorporada al tutor de Kestin, la escritura que Kreijkes mantuvo en la tarea y el entorno multiturno que evaluó SafeTutors. Tres examinan el sistema alrededor de la herramienta, es decir, la evidencia usada en casos de conducta indebida, la forma de medir la competencia docente y los supuestos lingüísticos de la [[automated-assessment|calificación automatizada]]. StudentBench establece paridad en un examen estandarizado, el único resultado donde una máquina puede igualar más fácilmente a una persona. Bastani aparece en dos grupos porque aporta tanto la brecha como la corrección de diseño.

Quedan tres preguntas que vale la pena llevar a cualquier decisión de curso o de producto. ¿Qué debería poder hacer el estudiante cuando la herramienta no esté? ¿Qué le pide la actividad que haga mientras está abierta? ¿Qué evidencia mostraría la diferencia un mes después?

## Dónde es débil esta evidencia

Estos estudios comparten las [[limitations-in-aied-research|limitaciones de la investigación en IA educativa]] en su conjunto. Dos de los más grandes se sitúan en Turquía y China, tres en Estados Unidos, uno en Inglaterra, uno en Australia y el estudio de puntuación en Alemania. Uno es una comparación de modelos comerciales y no un estudio de campo. Domina la matemática de secundaria, con física e informática después. Muy pocos estudios examinan la [[humanities-education|escritura en humanidades]] a escala, la formación profesional o a estudiantes con discapacidad.

Solo el panel chino y el panel de ALEKS observan estudiantes durante más de dos años tras la adopción, y los autores chinos sostienen que los estudios más cortos subestiman sistemáticamente la penalización a largo plazo. Seis de estos resultados son preprints o documentos de trabajo que no han completado la revisión por pares: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang y Feser. Los estudios de Bastani, Kestin, Kreijkes y Munoz están publicados en revistas con revisión por pares.

Los resultados nulos y negativos son raros en esta literatura, así que el registro publicado probablemente exagera la frecuencia con que la IA ayuda. Estos estudios son la mejor orientación actual sobre diez decisiones, y ninguno de ellos zanja una pregunta.

## A dónde ir después

[[does-ai-help-students-learn|¿Ayuda la IA a los estudiantes a aprender?]] es la revisión de evidencia más amplia que hay detrás de estas afirmaciones. [[redesign-assessment-ai-era|¿Cómo debería rediseñarse la evaluación para la era de la IA?]] profundiza en la mitad de evaluación. Para los casos de integridad, [[reduce-ai-cheating|¿Cómo reduzco el engaño con IA?]] cubre la evidencia de proceso y la política. Para los hallazgos de desarrollo profesional, [[faculty-ai-competencies|¿Qué competencias en IA necesita el profesorado?]] es la página complementaria, y [[addressing-common-misconceptions-ai-education|¿Cómo podemos abordar las ideas erróneas comunes sobre la IA en educación?]] atiende las objeciones que probablemente oirá de sus colegas.
