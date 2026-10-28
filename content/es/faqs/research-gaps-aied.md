---
title: "¿Cuáles son las lagunas notables en la literatura de investigación sobre la IA en la educación?"
created: "2026-09-22T18:29:05-04:00"
updated: "2026-10-28T13:25:03-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
source_updated: "2026-10-28T11:47:13-04:00"
translation_of: faqs/research-gaps-aied
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Una convocatoria de financiación vence en ocho días y la sección de antecedentes necesita una frase sobre lo que este campo todavía no sabe. O un colega le ha dicho a un comité que la tutoría con IA eleva el rendimiento, citando un experimento de dos años en 18 escuelas de secundaria, y usted es la persona a la que le toca decir qué puede sostener ese estudio. O está eligiendo una pregunta de tesis y todas las versiones que se le ocurren parecen ya hechas.

Las lagunas que importan tienen que ver con la solidez, la especificidad y la aplicabilidad. La IA puede realizar tareas educativas; las preguntas abiertas son si un diseño concreto produce un beneficio duradero, para quién, mediante qué mecanismo y en qué condiciones. Esa distinción decide dos cosas sobre su mesa: qué estudiar a continuación y qué dejar de afirmar mientras tanto. [[limitations-in-aied-research|Limitaciones de la investigación sobre IA en educación]] es el catálogo que hay detrás de esta página. La evidencia sobre los [[intelligent-tutoring|sistemas de tutoría inteligente]], la [[learning-analytics|analítica]] predictiva, la [[generative-ai|IA generativa]] y los agentes autónomos tampoco es intercambiable, y la investigación sobre el uso de la IA para apoyar el aprendizaje difiere de la investigación sobre enseñar a las personas acerca de la IA, como explica la visión general de la [[ai-education|IA en educación]].

## La versión breve

**1.** Compare la IA con una alternativa sólida sin IA que mantenga constantes el currículo, la práctica y el apoyo, y diga qué añadió la IA.

**2.** Mida el desempeño diferido y sin ayuda, y afirme que el desempeño asistido no es una ganancia de aprendizaje.

**3.** Informe qué componente del paquete hizo el trabajo y qué mecanismo afirma.

**4.** Valide cada puntuación automatizada y cada estudiante simulado contra estudiantes reales, incluidos los que quedan fuera de su muestra de desarrollo.

**5.** Declare el límite poblacional, porque un promedio agrupado no responde a una pregunta de equidad.

**6.** Describa el dispositivo con suficiente detalle como para que otra persona pueda reconstruirlo.

## Elija una comparación que aísle la IA

Existen experimentos rigurosos en el aula, así que "necesitamos ensayos aleatorizados" ya no nombra la laguna. La pregunta más fina es si el componente de IA aporta valor más allá de la práctica adicional, los mejores materiales, la retroalimentación oportuna o un mayor apoyo instruccional.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] informa de ganancias modestas de rendimiento en 18 escuelas de secundaria junto con una implicación sustantiva limitada con el tutor, y los autores señalan que las ganancias se parecían a las de la práctica estructurada sin IA. Eso es evidencia sobre un paquete implementado, y no puede aislar qué añadió la IA que contenía.

El problema de fondo es conceptual además de empírico. "ChatGPT" nombra una herramienta, no un método. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditaron 19 comparaciones de ChatGPT en educación: solo 4 (21%) especificaban las tres cosas a la vez, un tratamiento replicable, un control operacionalizado y una medida de aprendizaje válida (74% con tratamiento bien definido, 42% con control bien definido, 53% con una medida de resultado de aprendizaje). Cuando la IA nueva llega junto con actividades, retroalimentación o diseño de interfaz nuevos, el medio y el método se confunden y ningún efecto pertenece a la IA.

Lo que lo resolvería: comparaciones con alternativas realistas sin IA, manteniendo el currículo, las oportunidades de práctica y el apoyo lo más constantes posible, más réplicas independientes en distintas instituciones, docentes, materias y modelos. Los métodos responden aquí a preguntas distintas. El trabajo [[qualitative-research|cualitativo]] y el [[design-based-research|basado en diseño]] explica la implementación, mientras que los experimentos bien diseñados sostienen las afirmaciones causales, como expone [[research-methods-aied|Métodos de investigación sobre eficacia]].

## Mida el aprendizaje cuando la herramienta ya no está

Un trabajo mejor mientras se usa IA no es evidencia de un aprendizaje que sobreviva al fin de la asistencia. Las síntesis sobre [[learning-gains|ganancias de aprendizaje]] y [[cognitive-offloading|descarga cognitiva]] trazan una y otra vez la misma línea entre desempeño asistido, conocimiento retenido, razonamiento independiente y transferencia.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] muestra el problema de medición en un experimento aleatorizado con más de 6.000 estudiantes de secundaria. Una regla de maestría de tres aciertos consecutivos elevó el éxito definido por la plataforma sin producir, por sí sola, ganancias de aprendizaje detectables una semana después. La evidencia más sólida en la prueba diferida apareció cuando la IA se situó dentro del flujo de trabajo de maestría y se concentró en el material practicado.

La laguna que queda tiene que ver con trayectorias de capacidad, y un postest añadido no la cierra. Nadie ha establecido la retención a lo largo de meses, la transferencia entre tareas, el desempeño tras el retiro de la ayuda ni la exactitud con que los estudiantes juzgan lo que saben, y el campo no ha separado el fracaso en adquirir una habilidad del deterioro de una ya establecida. La investigación sobre descarga cognitiva aún debe mostrar cuándo la delegación sostiene esas trayectorias y cuándo desplaza la práctica que las construye.

## Averigüe qué parte del paquete hizo el trabajo

"El aprendizaje apoyado por IA" suele agrupar varios cambios: retroalimentación nueva, reflexión añadida, discusión entre pares, secuencias de tareas distintas, incentivos de evaluación alterados. Un paquete que tiene éxito no le dice qué componentes eran necesarios.

[[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] es un avance real sobre esa pregunta. Entre 1.176 estudiantes de primer año de grado, los diseños reflexivos e híbridos superaron a la [[ai-feedback-quality|retroalimentación de IA]] directa en transferencia diferida sin IA. La condición híbrida combinaba autoevaluación, [[peer-assessment|retroalimentación entre pares]] y crítica de la IA. Eso separa cómo se organiza y se usa la retroalimentación de si los estudiantes tienen acceso a ella o no.

Sigue abierto: la contribución y el momento de los intentos independientes iniciales, la autoexplicación, el aporte de los pares, la retroalimentación correctiva, las pistas y el desvanecimiento de la ayuda, y cómo interactúa cada uno con el [[prior-knowledge|conocimiento previo]] y la dificultad de la tarea.

La laguna teórica corre en paralelo. Nombrar una [[learning-theories|teoría del aprendizaje]] no es ponerla a prueba. Un estudio necesita una predicción teórica ligada a una conducta específica del sistema y a un proceso de aprendizaje medible, y la mediación estadística informa esa explicación sin establecer un mecanismo causal. [[theory-development-aied|Desarrollo teórico en la IA en educación]] y [[scaffolding]] llevan el argumento más lejos.

## Valide la medida antes de interpretarla

Constructos como la implicación, el [[critical-thinking|pensamiento crítico]], la alfabetización en IA y la [[personalized-learning|personalización]] se miden de forma inconsistente en esta literatura. Los autoinformes describen percepciones; no pueden sustituir a una competencia demostrada. La exactitud técnica, la calidad de la producción valorada por expertos y el aprendizaje del estudiante son tres objetivos de evaluación distintos. [[educational-measurement|Medición educativa]] y [[ai-ed-evaluation|Evaluación de la IA en educación]] tratan esas distinciones como fundamentales.

Una laguna se sitúa dentro del problema de medición: [[ai-technologies|sistemas de IA]] usados para evaluar otros sistemas de IA. En [[llm-student-simulation-misconception-faithfulness|¿Simular estudiantes o resolver problemas con adulación?]], los [[simulating-students|estudiantes simulados]] abandonaban con frecuencia las [[misconceptions|concepciones erróneas]] asignadas tras la retroalimentación correctiva, abordara o no la retroalimentación esa concepción errónea, de modo que sus respuestas podían hacer que una instrucción ineficaz pareciera exitosa. El entrenamiento específico mejoró la medida de fidelidad del estudio, y mejorar en esa medida no es validar contra el aprendizaje humano.

Lo que falta es la validación de toda la cadena de evaluación, desde la conducta del modelo hasta el juicio [[pedagogy|pedagógico]], la respuesta del estudiante y el resultado educativo, en estudiantes y entornos no usados durante el desarrollo. El juicio humano necesita el mismo escrutinio, porque el acuerdo entre evaluadores no es evidencia de que se evaluara el constructo correcto.

## Decida qué puede certificar aún una evaluación

La IA crea dos problemas de evaluación conectados: ayuda a producir el trabajo que se evalúa y puede influir en cómo se puntúa ese trabajo.

El [[ai-agents-complete-lms-assessment-validity-2026|estudio de la base de conocimiento sobre agentes de IA que completan tareas evaluadas en un LMS]] documenta agentes que navegan un curso de grado real y terminan actividades evaluadas. Eso demuestra una capacidad que cuestiona los supuestos sobre la evidencia producida por el estudiante. No establece cuán común es ese uso y no invalida la evaluación asíncrona como categoría.

La pregunta de investigación es qué diseños siguen sosteniendo conclusiones defendibles sobre el estudiante. Los [[eportfolio|portafolios]], las reflexiones, las entregas por etapas y los registros de actividad necesitan validarse como evidencia en lugar de darse por sentado que establecen autoría o comprensión. Los estudios deberían probar combinaciones de evidencia contra competencia observada de forma independiente, teniendo en cuenta la accesibilidad, la carga de trabajo, la privacidad y la ansiedad de los estudiantes. [[assessment-validity|Validez de la evaluación]] contiene el detalle.

Para la [[automated-assessment|puntuación automatizada]], [[llms-do-not-grade-essays-like-humans-2026|Los LLM no califican ensayos como los humanos]] informa de un desacuerdo sistemático entre modelos sin ajuste previo y evaluadores humanos. Los hallazgos son específicos de cada configuración y muestran por qué la consistencia interna no puede sostener una afirmación de validez.

[[human-capability-test-learning-outcomes-ai-2026|Una prueba de capacidad humana para los resultados de aprendizaje en la era de la IA]] propone evaluar por separado qué deben hacer los estudiantes de forma independiente, qué pueden lograr con IA y qué deben verificar y defender. Es un marco que espera validación empírica.

La detección es el callejón sin salida más claro en este terreno. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] aplicaron dos detectores comerciales con τ = 0,50 a 642 resúmenes publicados en inglés. La edición ligera con IA conforme a las directrices se marcó en el 38-80% de los casos. Los originales sin modificar de 2023-25 se marcaron en el 9-15%, con el trabajo no [[stem-education|STEM]] muy por encima del STEM con p < 0,001. Tras la humanización, las herramientas detectaron menos del 4% de las reescrituras etiquetadas como IA, una tasa de falsos negativos superior al 96%. Una puntuación que castiga la ayuda honesta y deja pasar la evasión no puede fundamentar una conclusión sobre un estudiante.

## Deje de leer las puntuaciones de alfabetización como evidencia de conducta

La investigación sobre intervenciones de alfabetización en IA es lo bastante sustancial para sintetizarse. [[liu-ai-literacy-interventions-meta-analysis-2026|Intervenciones de alfabetización en IA en educación]] abarca 59 estudios y 7.211 participantes, informa de un efecto medio positivo y también de una variación sustancial con un intervalo de predicción amplio que cruza el cero. Los resultados centrados en el conocimiento salieron más fuertes que los de habilidades, actitudes o ética.

La laguna más fina es si la enseñanza de la alfabetización cambia lo que las personas hacen cuando usan IA, y otro marco de competencias no la cerraría. ¿Pueden los estudiantes reconocer afirmaciones sin respaldo, verificar fuentes, rechazar sugerencias engañosas, notar un acuerdo inapropiado y elegir cuándo no delegar? ¿Se sostiene algo de eso bajo presión de tiempo, y se transfiere a sistemas y disciplinas desconocidos?

Resolverlo requiere evaluación basada en el desempeño combinada con la observación de decisiones reales y un seguimiento diferido, manteniendo separados el conocimiento conceptual, la destreza operativa y el juicio crítico en lugar de agruparlos. [[ai-literacy|Alfabetización en IA]] y [[trust-calibration|Calibración de la confianza]] aportan las distinciones.

## Informe a quién deja fuera el hallazgo

Los hallazgos de un curso, una institución, una lengua o una población de estudiantes rara vez autorizan decisiones en otro lugar, un problema que la síntesis [[limitations-in-aied-research|Limitaciones de la investigación sobre IA en educación]] trata como recurrente. Cómo varían los efectos según la etapa de desarrollo, la disciplina, el conocimiento previo, la discapacidad, la lengua y las condiciones de recursos sigue en gran medida sin medirse.

La investigación sobre equidad también tiene que separar acceso, habilidades y resultados. La síntesis sobre la [[digital-divide|brecha digital]] deja claro que los dispositivos y el acceso a herramientas no establecen una capacidad igual de beneficiarse. [[school-ai-education-readiness-gaps-agency-2026|¿Reduce la educación escolar en IA las brechas de preparación?]] siguió a 752 estudiantes de secundaria básica de Hong Kong: las brechas de preparación psicológica se estrecharon mientras persistían las diferencias en una prueba objetiva de alfabetización en IA. Todos los grupos mejoraron y la desigualdad no se cerró. Los perfiles de aprendizaje previo no se asignaron al azar, así que su papel causal sigue siendo desconocido.

La cobertura es escasa en lugares concretos. [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de estudiantes]] cuenta la literatura por población: los estudiantes de segunda lengua y multilingües y los estudiantes con discapacidad son los hilos más profundos, el género y la neurodivergencia vienen después, los estudiantes de primera generación e internacionales tienen un estudio cada uno en este corpus, los estudiantes dotados y de alto rendimiento están efectivamente sin estudiar, y los estudiantes refugiados, inmigrantes y desplazados no aparecen en ninguno. Una base de evidencia con esa forma no puede responder a una pregunta de equidad por agregación.

La capacidad también varía dentro de un mismo sistema nacional. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] puntuaron la integración de la IA en 45 universidades nigerianas y encontraron una adopción general moderada (M = 4,79, rango 1,83-7,83 en una escala de 10 puntos), sin que el tipo de institución predijera la integración una vez controladas la antigüedad y la geografía (antigüedad β = 0,43; ubicación en el suroeste β = 0,31). Las capacidades internas se correlacionaban entre sí en r = 0,79-0,80 y las colaboraciones internacionales con las alianzas industriales en r = 0,74, de modo que las instituciones conectadas acumulan ventajas compuestas. Qué diseños de desarrollo de capacidades cambian los resultados en instituciones más nuevas y menos conectadas no se ha probado.

La prioridad de investigación es identificar diseños que reduzcan las diferencias en capacidad demostrada, participación y [[agency|agencia]], informando los resultados y las cargas de los subgrupos junto con las ganancias promedio. La accesibilidad lleva su propia pregunta sin resolver: si un diseño elimina una barrera a la participación o sustituye una capacidad que el estudiante debe desarrollar. Véanse [[equity-in-ai-education|Equidad en la educación con IA]] y [[accessibility]].

## Diga quién tiene el control y cuándo cambia

A medida que los sistemas planifican, inician acciones, retienen memoria y coordinan herramientas, la pregunta educativa pasa a ser quién debería controlar qué partes del proceso de aprendizaje y cuándo debería desplazarse ese control.

[[agentic-ai-education-scoping-review|IA agéntica en educación: una revisión de alcance]] mapea 474 estudios y encuentra una validación longitudinal limitada, concentración en la [[higher-ed|educación superior]] y en STEM, y una integración débil de la teoría educativa: solo el 29% de los estudios revisados se apoyaba explícitamente en teoría educativa, un hallazgo sobre ese corpus y no sobre todo el trabajo en IA en educación.

Siguen preguntas abiertas. ¿Produce la ayuda iniciada por el estudiante resultados distintos de la ayuda iniciada por el agente? ¿Puede retirarse el apoyo a medida que se desarrolla la competencia sin pérdida? ¿Conservan los estudiantes la capacidad de cuestionar el sistema? Las síntesis sobre [[agentic-ai|IA agéntica]] y [[human-ai-collaboration|colaboración humano-IA]] añaden la intervención y la rendición de cuentas del [[teacher-role|docente]] en entornos multiagente, donde nadie ha establecido quién responde por la decisión de un agente. Una mayor autonomía es una decisión de diseño pedagógico con una base de evidencia aún por construir.

## Pruebe los fallos de seguridad con estudiantes reales

La seguridad educativa va más allá de la exactitud factual y las solicitudes prohibidas. Un tutor puede dar una respuesta correcta a la vez que elimina la oportunidad de razonar del estudiante, refuerza una concepción errónea o crea dependencia. [[pedagogical-safety|Seguridad pedagógica]] cubre el constructo.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifica fallos como la divulgación excesiva de respuestas y el abandono del andamiaje, con bastantes más fallos en pruebas de varios turnos. Son hallazgos de [[benchmark]] en condiciones especificadas, no estimaciones de la frecuencia con que ocurre el daño en las aulas.

Se desconoce qué ocurre cuando esos fallos se encuentran con estudiantes reales en un uso sostenido. No se ha medido cuáles producen confusión temporal, cuáles producen concepciones erróneas persistentes, cuáles reducen la motivación y cuáles debilitan la capacidad independiente. Tampoco ha establecido nadie qué salvaguardas reducen esos riesgos sin producir una negativa excesiva o frustración. El trabajo a más largo plazo también necesita la confianza, la disposición a buscar ayuda humana, la [[agency|agencia del estudiante]] y las relaciones con pares y docentes como resultados. Para los niños, eso exige estudios adecuados a su desarrollo que conecten la conducta del sistema con resultados educativos y relacionales.

## Separe la adopción de la implementación

La capacidad técnica no establece que una herramienta se use bien, y el desarrollo profesional no llega automáticamente a los estudiantes. El eslabón que falta suele ir de la formación docente, a través de la práctica de aula modificada, hasta los resultados de los estudiantes.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Primero la pedagogía, después la tecnología]] es un estudio multinivel de 46 docentes y 2.832 estudiantes. El conocimiento pedagógico de la IA se asociaba con las percepciones y las intenciones de los estudiantes, y ninguno de los componentes medidos del conocimiento docente se asociaba directamente con las ganancias de conocimiento sobre IA de los estudiantes. Asociaciones de ese tipo no establecen que una intervención de formación causaría un mejor aprendizaje.

La pregunta abierta es qué combinaciones de acompañamiento, [[curriculum-design|alineación curricular]], rutinas de revisión, programación y apoyo institucional producen mejoras sostenidas, y los estudios necesitan observar la enseñanza efectivamente impartida y no la confianza del docente ni su intención de adoptar. [[teacher-ai-competency|Competencia docente en IA]] y [[educational-development|Desarrollo educativo]] cubren el terreno.

La comparación de costo-efectividad es una segunda laguna. Las evaluaciones deberían contabilizar el tiempo de verificación, corrección, formación, supervisión, mantenimiento e implementación junto con los costos de suscripción y de uso de modelos, y comparar la provisión apoyada por IA con alternativas realistas. La pregunta que vale la pena responder es qué beneficio educativo entrega el dispositivo completo para los recursos que consume.

## Cuente los documentos de gobernanza como intenciones

Los principios [[ethics|éticos]] y los marcos de gobernanza son necesarios, y su existencia no establece que cambien la práctica ni protejan a los estudiantes.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] revisaron 25 artículos y encontraron a los usuarios finales en gran medida pasivos en la literatura sobre ética, con las voces de los estudiantes prácticamente ausentes, junto con tensiones entre valores y asimetrías de poder entre las partes interesadas. Eso describe la literatura revisada. No es una afirmación de que los estudiantes nunca participen en el diseño de la IA en educación.

Lo que falta es evidencia sobre qué arreglos de gobernanza marcan una diferencia medible. ¿Cambia la participación de estudiantes y docentes la contratación, el diseño de herramientas, las reglas de evaluación o los remedios tras un error? ¿Detectan las revisiones humanas los errores consecuentes? ¿Están realmente disponibles alternativas al uso de IA para quienes se les dice que la usen? La investigación sobre privacidad tiene una laguna paralela: el valor educativo de recopilar más datos suele darse por supuesto, y los diseños que minimizan datos rara vez se han comparado con otros más intrusivos tanto en aprendizaje como en autonomía del estudiante. Véanse [[governance|Gobernanza de la IA]] y [[privacy]].

## Haga que el estudio sea reconstruible

La IA en educación tiene un problema de reproducibilidad inusualmente difícil. Los estudios omiten prompts, versiones de modelo, configuraciones, código y detalles instruccionales, y los sistemas propietarios pueden cambiar durante o después de una intervención. [[limitations-in-aied-research|Limitaciones de la investigación sobre IA en educación]] documenta el patrón.

Reconstruir un estudio significa describir el dispositivo instruccional además del modelo: tareas de aprendizaje, fuentes de contenido, acciones permitidas, interfaz, apoyo docente, condiciones de evaluación y cualquier cosa que cambiara durante el despliegue. Reproducir una configuración y probar si su principio pedagógico se transfiere a otra son logros separados, y la guía de reporte de [[research-methods-aied|Métodos de investigación sobre eficacia]] aborda ambos.

La síntesis necesita el mismo cuidado. [[meta-analysis-systematic-review|Metanálisis y revisión sistemática]] enumera los estudios primarios débiles, el sesgo de publicación, las intervenciones heterogéneas y los resultados incompatibles como límites de las conclusiones agrupadas, y un único "efecto de la IA" promedio oculta las distinciones que los educadores necesitan. Las revisiones deberían separar el desempeño asistido del aprendizaje independiente, distinguir tipos de intervención y condiciones de comparación, y hacer auditables las decisiones de codificación.

La literatura de síntesis es en sí misma una laguna. La [[oneill-presumed-effective-meta-analysis-2026|auditoría forense de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metanálisis]] de alto impacto encontró que ninguno ofrecía una base válida para sus afirmaciones. Ningún constructo coherente: una herramienta tratada como una sola intervención, resultados multidimensionales agrupados. El sesgo de publicación se evaluó de forma inválida en los 14. El I² reportado iba del 77,2% al 94,4% en cada análisis que lo informaba, con 12 de los 13 por encima del 80%. El 61% de los estudios primarios examinados al azar presentaba problemas de validez. Esos 14 análisis acumularon más de 2.000 citas en unos 16 meses, y un metanálisis retractado seguía citándose como autoridad en el 60% de los artículos que lo citaban tras la retractación, sin mención alguna. De 14 artículos que citaban otro metanálisis auditado cuyo resumen anunciaba un gran efecto de la "educación en IA" que en realidad medía enseñar a los estudiantes sobre IA, solo 2 lo citaban de forma apropiada, 8 lo leían como evidencia de que integrar la IA mejora el aprendizaje y 4 se equivocaban de otras maneras. La auditoría pide a las revistas que exijan transparencia total de datos en los metanálisis (protocolos de búsqueda, características codificadas de los estudios, estadísticos extraídos, código analítico), pide a los editores que no traten un historial de publicaciones como prueba de competencia en revisión, y pide que las retractaciones sean visibles allí donde se descubre, exporta o cita un artículo. La reproducibilidad abarca la cadena de síntesis, no solo el estudio individual.

Los docentes que quieran la versión a nivel de aula pueden seguir [[evaluating-ai-interventions-methods]].

## Qué entienden mal los investigadores y los docentes

**Al campo le faltan estudios.** Le faltan estudios especificados. Hay experimentos multi-sede, ensayos aleatorizados con miles de estudiantes y 14 metanálisis de alto impacto. Solo el 21% de las comparaciones auditadas definía tratamiento, control y resultado con la suficiente claridad como para atribuir un efecto.

**Nombrar una teoría es probarla.** Citar una teoría del aprendizaje es una decisión de encuadre. Una prueba necesita una predicción, una conducta del sistema que la implemente y una medida de proceso que pudiera salir al revés.

**Una puntuación automatizada validada es un resultado validado.** El acuerdo con codificadores humanos establece consistencia con esos codificadores. Los estudiantes simulados mejoraron en una medida de fidelidad sin validarse contra el aprendizaje humano, y la cadena de la conducta del modelo al resultado sigue sin construirse.

**El acceso es equidad.** En el estudio de Hong Kong, las brechas de preparación psicológica se estrecharon mientras se mantenían las diferencias en la prueba objetiva, y todos los grupos mejoraron sin que la desigualdad se cerrara. Los dispositivos y las licencias cambian quién puede llegar a la herramienta.

**Más autonomía es progreso.** Con un 29% de 474 estudios sobre IA agéntica apoyados en teoría educativa y una validación longitudinal limitada, nadie ha demostrado que desplazar el control al sistema mejore el aprendizaje.

## Las objeciones que va a escuchar

**"La laguna es solo que necesitamos más ensayos aleatorizados."** Ya existen muchos, y el problema está antes de las etiquetas de diseño: un ensayo de un paquete que reúne retroalimentación nueva, tareas nuevas y una interfaz nueva no puede atribuir nada a la IA. La condición de comparación es donde está el trabajo.

**"No puedo hacer un seguimiento de varios años."** Entonces mida una ocasión diferida y sin ayuda y diga qué intervalo cubre. Una semana es un hallazgo real, y el estudio de la regla de maestría obtuvo su resultado a una semana integrando la IA en el flujo de trabajo y concentrándose en el material practicado.

**"La aleatorización es imposible en mi curso."** El trabajo basado en diseño y el cualitativo responden preguntas de implementación que los ensayos no pueden, y el campo necesita ambos. Donde la asignación aleatoria es posible, sigue siendo la que sostiene la afirmación causal.

**"El tamaño del efecto agrupado ya me dice qué funciona."** Los 14 metanálisis auditados definieron el tratamiento como una herramienta, agruparon resultados incompatibles e informaron un I² superior al 80% en 12 de los 13 análisis que lo daban. El número agrupado describe un conjunto de estudios con un problema de constructo.

**"Los estudiantes simulados son más baratos, así que validarlos puede esperar."** En el estudio de adulación, los estudiantes simulados abandonaban las concepciones erróneas abordara o no la retroalimentación esas concepciones, que es el modo de fallo que hace que un tutor ineficaz parezca eficaz.

## Qué hacer esta semana

**1.** Escriba en una frase la condición de comparación del estudio que está planificando. Si es "lo de siempre", revísela antes de revisar cualquier otra cosa.

**2.** Añada al diseño una medida diferida y sin ayuda, y nombre el intervalo en la sección de método.

**3.** Escriba el límite poblacional en la declaración de diseño y luego en el resumen, para que la afirmación no pueda viajar más lejos que la muestra.

**4.** Tome la afirmación más fuerte de su borrador actual y elimine la versión que su medida no puede sostener. Conserve la frase sobre el techo.

**5.** Para cualquier puntuación automatizada o estudiante simulado del estudio, nombre el estándar humano y al adjudicador antes de que empiece la recogida de datos.

## Adónde ir después

[[reporting-interpreting-aied-research]] es la contraparte de esta página en materia de reporte, y [[research-methods-aied|Métodos de investigación en la IA en educación]] cubre las decisiones de diseño que hay detrás de cada laguna. [[evaluating-ai-interventions-methods]] trata las medidas y los diseños de comparación, [[checking-whether-educational-ai-works]] es la versión breve de la pregunta sobre la eficacia, y [[does-ai-help-students-learn]] reúne lo que se sabe sobre el aprendizaje duradero. [[theory-development-aied]] y [[equity-ethics-pedagogical-safety-research]] llevan más lejos los hilos de teoría y equidad.
