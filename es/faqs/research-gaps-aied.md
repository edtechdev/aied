---
title: "¿Cuáles son las lagunas notables en la literatura de investigación sobre la IA en la educación?"
created: "2026-09-22T18:29:05-04:00"
updated: "2026-09-22T18:29:05-04:00"
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/research-gaps-aied
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Cuáles son las lagunas notables en la literatura de investigación sobre la IA en la educación?

Las lagunas más trascendentes en la IA en la educación (AIEd) se refieren a **si determinados diseños educativos producen beneficios duraderos, para quién, mediante qué mecanismos y en qué condiciones, y no simplemente a si la IA puede realizar tareas educativas**. Esta base de conocimiento documenta intervenciones prometedoras junto con debilidades persistentes en medición, inferencia causal, generalizabilidad, implementación y reproducibilidad. A menudo son lagunas en la *fuerza, especificidad o aplicabilidad* de la evidencia, más que una ausencia total de investigación. Véase [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]].

Las lagunas también difieren dentro del campo. La evidencia sobre los sistemas consolidados de [[intelligent-tutoring|tutoría inteligente]], la [[learning-analytics|analítica]] predictiva, la [[generative-ai|IA generativa]] y los agentes autónomos no debería tratarse como intercambiable. Del mismo modo, usar la IA para apoyar el aprendizaje y enseñar a las personas *sobre* la IA implican preguntas de investigación relacionadas pero distintas, como explica la visión general [[ai-education|IA en la educación]].

## 1. Aislar qué añade la IA más allá de una buena enseñanza

Existen experimentos rigurosos en el aula, así que la laguna ya no se describe adecuadamente como "necesitamos ensayos aleatorizados". Una pregunta más precisa es **si el componente de IA añade valor más allá de la práctica adicional, los mejores materiales, la retroalimentación oportuna o un mayor apoyo instruccional**.

Por ejemplo, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment]] reporta ganancias moderadas de rendimiento en 18 escuelas de secundaria, junto con una implicación sustantiva limitada con el tutor. Los autores señalan que las ganancias se parecían a las asociadas con la práctica estructurada sin IA. Esto establece evidencia sobre un paquete instruccional implementado, pero no aísla con limpieza la contribución incremental de su componente de IA.

El problema de fondo es conceptual además de empírico. "ChatGPT" nombra una herramienta, no un método, y [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditan 19 comparaciones de ChatGPT en educación para mostrar lo que eso cuesta: solo 4 (21%) especifican las tres cosas a la vez, un tratamiento replicable, un control operacionalizado y una medida válida de aprendizaje (74% con tratamiento bien definido, 42% con control bien definido, 53% con un resultado de aprendizaje). Su punto más amplio es que cuando se introduce una IA nueva junto con nuevas actividades, retroalimentación o diseño de interfaz, el medio y el método quedan confundidos y ningún efecto puede atribuirse a la IA.

Por lo tanto, la investigación necesita más comparaciones con alternativas sin IA fuertes y realistas, manteniendo el currículo, las oportunidades de práctica y el apoyo lo más constante posible. Las replicaciones independientes deberían probar si los beneficios sobreviven a cambios de institución, docente, materia y modelo. Como subraya [[research-methods-aied|Métodos de investigación de eficacia]], distintos métodos responden a distintas preguntas: los estudios [[qualitative-research|cualitativos]] y de [[design-based-research|investigación basada en el diseño]] ayudan a explicar la implementación, mientras que los experimentos bien diseñados refuerzan las afirmaciones causales.

## 2. Seguir el aprendizaje duradero y la capacidad independiente a lo largo del tiempo

Un trabajo mejorado mientras se usa la IA no es necesariamente evidencia de un aprendizaje que persiste cuando termina la asistencia. Las síntesis de [[learning-gains|Ganancias de aprendizaje]] y [[cognitive-offloading|Delegación cognitiva]] distinguen una y otra vez el desempeño asistido del conocimiento retenido, el razonamiento independiente y la transferencia a tareas desconocidas.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] ilustra el problema de medición. En un experimento aleatorizado con más de 6.000 estudiantes de secundaria, una regla de dominio de tres aciertos consecutivos aumentó el éxito según la definición de la plataforma sin producir por sí misma ganancias de aprendizaje detectables una semana después. La evidencia más fuerte en la prueba diferida apareció cuando la IA se integró en el flujo de trabajo de dominio y se concentró en el material practicado.

**La laguna restante se refiere a las trayectorias de capacidad, no solo a un postest adicional.** Los estudios deberían examinar la retención durante meses, la transferencia entre tareas, el desempeño tras retirar la asistencia y la precisión del estudiantado al juzgar lo que sabe. También deberían distinguir el fracaso en adquirir una habilidad del deterioro de una habilidad ya establecida. La investigación sobre delegación debería probar cuándo la delegación apoya esas trayectorias y cuándo desplaza la práctica necesaria para desarrollarlas.

## 3. Explicar qué componentes instruccionales funcionan, y por qué

El "aprendizaje con apoyo de IA" suele combinar varios cambios: nueva retroalimentación, reflexión adicional, discusión entre pares, secuencias de tareas distintas e incentivos de evaluación alterados. Un paquete exitoso no establece qué componentes son necesarios ni qué mecanismo produjo el beneficio.

El experimento multisitio [[genai-feedback-design-multisite-experiment|Diseño de retroalimentación con IA generativa centrado en las personas en la educación superior]] ofrece un avance útil. Entre 1.176 estudiantes de grado de primer año, los diseños de retroalimentación reflexiva e híbrida superaron a la [[ai-feedback-quality|retroalimentación con IA]] directa en la transferencia diferida sin IA. La condición híbrida combinaba autoevaluación, [[peer-assessment|retroalimentación entre pares]] y crítica de la IA. Esto respalda investigar cómo se organiza y se usa la retroalimentación, en lugar de tratar el acceso como la intervención.

Otros estudios deberían aislar la contribución y el momento de los intentos iniciales independientes, la autoexplicación, la aportación de los pares, la retroalimentación correctiva, las pistas y el retiro gradual de la asistencia. Deberían probar cómo interactúan esos componentes con los [[prior-knowledge|conocimientos previos]] y la dificultad de la tarea.

La laguna teórica que los acompaña es igual de importante: **nombrar una [[learning-theories|teoría del aprendizaje]] no es lo mismo que ponerla a prueba**. La investigación debería conectar una predicción teórica con un comportamiento específico del sistema y un proceso de aprendizaje medible. La mediación estadística puede informar esa explicación, pero no establece por sí sola un mecanismo causal. Véanse [[theory-development-aied|Desarrollo de teoría en la IA en la educación]] y [[scaffolding|andamiaje]].

## 4. Validar las medidas, los juicios automatizados y los estudiantes simulados

Constructos como "implicación", "[[critical-thinking|pensamiento crítico]]", "alfabetización en IA" y "[[personalized-learning|personalización]]" se miden de forma inconsistente. Los autoinformes pueden describir percepciones y experiencias, pero no sustituyen a una competencia demostrada. La precisión técnica, la calidad del resultado valorada por expertos y el aprendizaje del estudiantado también representan objetivos de evaluación distintos. Estas distinciones son centrales en [[educational-measurement|Medición educativa]] y [[ai-ed-evaluation|Evaluación en educación con IA]].

Una laguna especialmente importante se refiere a los [[ai-technologies|sistemas de IA]] usados para evaluar otros sistemas de IA. En [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], los [[simulating-students|estudiantes simulados]] abandonaban con frecuencia los [[misconceptions|conceptos erróneos]] que se les habían asignado después de una retroalimentación correctiva, independientemente de si esta abordaba el concepto erróneo. Por lo tanto, sus respuestas podían hacer que una enseñanza ineficaz pareciera exitosa. Un entrenamiento específico mejoró la medida de fidelidad del estudio, pero mejorar esa medida no equivale a validarla contra el aprendizaje humano.

La investigación necesita establecer qué puntuaciones automatizadas y qué comportamientos simulados predicen resultados con estudiantes reales, incluidos estudiantes y entornos que no se usaron durante el desarrollo. Los juicios humanos también requieren escrutinio: el acuerdo entre evaluadores no es automáticamente evidencia de que se esté evaluando el constructo correcto.

**La laguna es la validación de la cadena de evaluación: del comportamiento del modelo al juicio [[pedagogy|pedagógico]], de ahí a la respuesta del estudiante y de ahí al resultado educativo.**

## 5. Establecer la validez de la evaluación cuando la IA puede producir y evaluar la evidencia

La IA crea dos problemas de evaluación conectados: puede ayudar a producir el trabajo que se evalúa y puede influir en cómo se puntúa ese trabajo.

El [[ai-agents-complete-lms-assessment-validity-2026|estudio de esta base de conocimiento sobre agentes de IA que completan tareas evaluadas en un LMS]] documenta agentes que navegan por un curso de grado en vivo y completan actividades evaluadas. Estas demostraciones establecen una capacidad que desafía las suposiciones sobre la evidencia producida por el estudiantado; no establecen la prevalencia de ese uso ni invalidan toda evaluación asíncrona.

La pregunta de investigación es **qué diseños de evaluación siguen permitiendo conclusiones defendibles sobre quien aprende**. Los [[eportfolio|portafolios]], las reflexiones, las entregas por etapas y los registros de actividad deberían validarse ellos mismos en lugar de darse por sentados como prueba de autoría o de comprensión. Los estudios deberían examinar combinaciones de evidencia frente a una competencia observada de forma independiente, teniendo en cuenta la accesibilidad, la carga de trabajo, la privacidad y la ansiedad del estudiantado. Véase [[assessment-validity|Validez de la evaluación]].

Para la [[automated-assessment|puntuación automatizada]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] reporta desacuerdos sistemáticos entre modelos listos para usar y evaluadores humanos. Sus hallazgos son específicos de una configuración, pero demuestran por qué la consistencia interna es insuficiente.

Una distinción conceptual útil proviene de [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]]: evaluar lo que quien aprende debe hacer de forma independiente, lo que puede lograr con IA y lo que debe verificar y defender. Ese es un marco propuesto que requiere validación empírica, no una solución de evaluación establecida.

[[karr-ai-detection-humanization-2026|Karr et al. (2026)]] cuantifican por qué la detección es un callejón sin salida. En 642 resúmenes publicados en inglés, dos detectores comerciales de IA con τ = 0,50 marcaron como sospechosa la edición ligera con IA conforme a las directrices en el 38–80% de los casos, marcaron originales de 2023–25 sin modificar en el 9–15% (mucho más en áreas no [[stem-education|STEM]] que en STEM, p < 0,001), y tras la humanización detectaron menos del 4% de las reescrituras etiquetadas como IA (tasa de falsos negativos > 96%). Una puntuación que penaliza la asistencia honesta y a la vez deja pasar la evasión no puede ser la base de una conclusión defendible sobre quien aprende; la laguna que expone son diseños y evidencia de proceso que no dependan de esa puntuación.

## 6. Mostrar que la alfabetización en IA se traduce en un comportamiento responsable

La investigación sobre intervenciones de alfabetización en IA es lo bastante sustantiva como para permitir una síntesis. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators]] incluye 59 estudios y 7.211 participantes. Reporta un efecto promedio positivo, pero una variación sustancial entre estudios y un intervalo de predicción amplio que abarca el cero. Los resultados centrados en el conocimiento mostraron efectos más fuertes que los de habilidades, actitudes o ética.

La laguna más marcada, por lo tanto, no es simplemente desarrollar más marcos de competencia. Es determinar **si la enseñanza de la alfabetización cambia cómo actúan las personas cuando usan IA**.

¿Puede el estudiantado reconocer afirmaciones sin respaldo, verificar fuentes, rechazar sugerencias engañosas, identificar una aquiescencia inapropiada y elegir cuándo no delegar? ¿Persisten esos comportamientos bajo presión de tiempo y se transfieren a sistemas y disciplinas desconocidos?

La investigación debería combinar evaluaciones basadas en el desempeño con observaciones de decisiones reales y seguimiento diferido. Debería distinguir el conocimiento conceptual, la competencia operativa y el juicio crítico en lugar de tratarlos como intercambiables. Las síntesis de [[ai-literacy|Alfabetización en IA]] y [[trust-calibration|Calibración de la confianza]] ofrecen puntos de partida útiles para estas distinciones.

## 7. Entender la generalizabilidad y los resultados equitativos, no solo el acceso equitativo

Los hallazgos de un curso, una institución, una lengua o una población de estudiantes a menudo ofrecen fundamentos limitados para tomar decisiones en otros contextos. La síntesis [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]] identifica esto como un problema recurrente. Se necesita más evidencia sobre cómo varían los efectos instruccionales según la etapa de desarrollo, la disciplina, los conocimientos previos, la discapacidad, la lengua y las condiciones de recursos.

La investigación sobre equidad también debe distinguir el acceso, las habilidades y los resultados. La síntesis sobre la [[digital-divide|brecha digital]] deja claro que proporcionar dispositivos o acceso a herramientas no establece una capacidad igual de beneficiarse.

Por ejemplo, [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] siguió a 752 estudiantes de secundaria inferior de Hong Kong. Las brechas de preparación psicológica se redujeron, mientras que las diferencias en una prueba objetiva de alfabetización en IA persistieron. Todos los grupos mejoraron, pero la mejora general no eliminó la desigualdad. Como los perfiles de aprendizaje previo no se asignaron al azar, el estudio no establece sus efectos causales.

La propia cobertura de esta base de conocimiento muestra dónde la evidencia a nivel de grupo es escasa y desigual. [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de estudiantes]] cuenta la literatura según a quién estudia: el estudiantado de segunda lengua y multilingüe y el estudiantado con discapacidad son las líneas más profundas, el género y la neurodiversidad vienen después, mientras que el estudiantado de primera generación y el estudiantado internacional tienen un solo estudio cada uno en este corpus, el estudiantado con altas capacidades y alto rendimiento está prácticamente sin estudiar como grupo, y quienes son refugiados, inmigrantes o desplazados no aparecen en ninguno. Una base de evidencia con esa forma no puede responder a preguntas de equidad por agregación; hay que muestrearla de forma deliberada.

**La prioridad de investigación es identificar qué diseños reducen las diferencias en capacidad demostrada, participación y capacidad de acción.** Los estudios deberían examinar los resultados y las cargas de los subgrupos, no solo las ganancias promedio. La investigación sobre accesibilidad debería distinguir eliminar barreras a la participación de sustituir una capacidad que se pretende que quien aprende desarrolle. Véanse [[equity-in-ai-education|Equidad en la educación con IA]] y [[accessibility|accesibilidad]].

La capacidad también varía dentro de un mismo sistema nacional de maneras que las categorías de gobernanza no capturan. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] puntuaron la integración de la IA en 45 universidades nigerianas y encontraron solo una adopción general moderada (M = 4,79, rango 1,83–7,83 en una escala de 10 puntos), y el tipo de institución no predijo la integración una vez controladas la edad y la geografía (edad β = 0,43; ubicación en el suroeste β = 0,31). Las capacidades internas se intercorrelacionaban en r = 0,79–0,80 y las colaboraciones internacionales con las alianzas con la industria en r = 0,74, así que las instituciones bien conectadas acumulan ventajas compuestas. La laguna consiste en probar qué diseños de desarrollo de capacidades cambian los resultados en instituciones más nuevas y menos conectadas.

## 8. Determinar cómo debe repartirse el control entre estudiantes, docentes y agentes

A medida que los sistemas de IA planifican, inician acciones, mantienen memoria y coordinan herramientas, la pregunta educativa se vuelve más específica que si la colaboración entre humanos y IA es beneficiosa: **quién debería controlar qué partes del proceso de aprendizaje, y cuándo debería cambiar ese control?**

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] mapea 474 estudios e identifica una validación longitudinal limitada, concentraciones en la [[higher-ed|educación superior]] y en STEM, y una integración débil de la teoría educativa. Solo el 29% de los estudios revisados se apoyaba explícitamente en teoría educativa, un hallazgo sobre ese corpus y no sobre toda la investigación en AIED.

La investigación debería comparar configuraciones en las que quienes aprenden o los agentes inician la ayuda, fijan metas, seleccionan estrategias, supervisan el progreso y toman las decisiones finales. Debería probar si el apoyo puede retirarse gradualmente a medida que se desarrolla la competencia y si quienes aprenden conservan la capacidad de cuestionar el sistema.

Las síntesis sobre [[agentic-ai|IA agéntica]] y [[human-ai-collaboration|Colaboración entre humanos e IA]] también plantean preguntas sobre la intervención y la rendición de cuentas del [[teacher-role|profesorado]] en entornos multiagente. Una mayor autonomía debería evaluarse como una elección de diseño pedagógico, no darse por supuesta como representación de progreso educativo.

## 9. Conectar la seguridad pedagógica y relacional con consecuencias educativas reales

La seguridad educativa va más allá de la precisión factual, el contenido ofensivo o las solicitudes prohibidas. Un tutor puede dar una respuesta correcta y a la vez socavar la oportunidad de razonar de quien aprende, reforzar un concepto erróneo subyacente o fomentar una dependencia inapropiada. Véase [[pedagogical-safety|Seguridad pedagógica]].

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors: Pedagogical Safety in AI Tutoring]] identifica fallos como la revelación excesiva de respuestas y el abandono del andamiaje, con bastantes más fallos en las pruebas de varios turnos. Son hallazgos de [[benchmark|referencia]] bajo condiciones de prueba especificadas, no estimaciones de la prevalencia o la gravedad del daño en las aulas.

La cuestión no resuelta es cómo afectan esos fallos a estudiantes reales durante un uso sostenido. ¿Cuáles producen confusión temporal, conceptos erróneos persistentes, motivación reducida o una capacidad independiente debilitada? ¿Qué salvaguardas reducen esos riesgos sin una negativa excesiva ni frustración?

La investigación a más largo plazo debería examinar también la confianza, la disposición a buscar ayuda humana, la [[agency|capacidad de acción de quien aprende]] y las relaciones con pares y docentes. Estas preguntas son especialmente importantes en la infancia y requieren estudios adecuados al desarrollo que conecten el comportamiento del sistema con resultados educativos y relacionales.

## 10. Explicar cómo la implementación, el desarrollo docente y los costos determinan los resultados

La capacidad técnica no establece que una herramienta se vaya a usar de forma productiva ni que el desarrollo profesional vaya a mejorar el aprendizaje del estudiantado. El eslabón que falta suele ir de la **formación docente, a través de un cambio en la práctica de aula, hasta los resultados del estudiantado**.

En [[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]], un estudio multinivel con 46 docentes y 2.832 estudiantes encontró que el conocimiento pedagógico de la IA se asociaba con las percepciones y las intenciones del estudiantado, pero ninguno de los componentes medidos del conocimiento docente se asociaba directamente con las ganancias de conocimiento sobre IA del estudiantado. Estas asociaciones no establecen que una intervención de formación concreta vaya a causar un mejor aprendizaje.

La investigación debería indagar qué combinaciones de acompañamiento, [[curriculum-design|alineación curricular]], rutinas de revisión, programación y apoyo institucional producen mejoras sostenidas. Debería observar la enseñanza efectivamente impartida, no solo la confianza del profesorado o su intención de adoptar. Véanse [[teacher-ai-competency|Competencia docente en IA]] y [[educational-development|Desarrollo educativo]].

La costo-efectividad comparativa es otra prioridad. Las evaluaciones deberían incluir la verificación, la corrección, la formación, la supervisión, el mantenimiento y el tiempo de implementación, y no solo los costos de suscripción o de uso del modelo, y comparar la provisión con apoyo de IA frente a alternativas realistas. La pregunta pertinente es qué beneficio educativo ofrece el dispositivo completo para los recursos que exige.

## 11. Evaluar la gobernanza, la privacidad y la participación significativa

Los principios [[ethics|éticos]] y los marcos de gobernanza son necesarios, pero su existencia no establece que cambien la práctica ni que protejan a quienes aprenden.

[[agarwal-ethical-values-norms-aied-2026|Identifying the Ethical Values and Norms for Artificial Intelligence in Education]] revisa 25 artículos y encuentra que las personas usuarias finales son en gran medida pasivas en la literatura ética revisada, con las voces del estudiantado prácticamente ausentes. También identifica tensiones entre valores y asimetrías de poder entre las partes interesadas. Esto describe la literatura revisada; no debería generalizarse a la afirmación de que el estudiantado nunca participa en el diseño de AIEd.

La laguna de investigación se refiere a **qué arreglos de gobernanza marcan una diferencia medible**. ¿La participación de estudiantes y docentes cambia la contratación, el diseño de las herramientas, las reglas de evaluación o las reparaciones después de los errores? ¿Los procedimientos de revisión humana detectan errores trascendentes? ¿Existen de verdad alternativas al uso de la IA?

La investigación sobre privacidad debería examinar de forma similar el valor educativo de la recogida adicional de datos en lugar de dar por supuesto que una vigilancia más detallada del estudiantado está justificada. Los estudios pueden comparar diseños que minimizan los datos con alternativas más intrusivas, evaluando a la vez el aprendizaje y la autonomía de quien aprende. Véanse [[governance|Gobernanza de la IA]] y [[privacy|privacidad]].

## 12. Construir estudios reproducibles y evidencia acumulativa fiable

La AIEd se enfrenta a un problema de reproducibilidad inusualmente difícil. Los estudios pueden omitir las indicaciones, las versiones de los modelos, la configuración, el código o los detalles instruccionales; los sistemas propietarios también pueden cambiar durante una intervención o después de ella. Estos problemas están documentados en [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]].

La reproducibilidad exige describir el dispositivo instruccional además del modelo: tareas de aprendizaje, fuentes de contenido, acciones permitidas, interfaz, apoyo docente, condiciones de evaluación y cambios durante el despliegue. La investigación debería distinguir reproducir una configuración de probar si su principio pedagógico se transfiere a otra. La discusión sobre el reporte en [[research-methods-aied|Métodos de investigación de eficacia]] aborda esta necesidad de descripciones transparentes.

La síntesis de evidencia exige un cuidado comparable. La página [[meta-analysis-systematic-review|Metaanálisis y revisión sistemática]] destaca los estudios primarios débiles, el sesgo de publicación, las intervenciones heterogéneas y los resultados incompatibles como límites de las conclusiones agrupadas.

Un único "efecto de la IA" promedio puede ocultar las distinciones que el profesorado más necesita. Las revisiones deberían separar el desempeño asistido del aprendizaje independiente, distinguir los tipos de intervención y las condiciones de comparación, y hacer auditables las decisiones de codificación y análisis. Los resultados nulos, las implementaciones fallidas y las condiciones límite son contribuciones esenciales a esta base de evidencia acumulativa.

La literatura de síntesis es en sí misma una laguna. [[oneill-presumed-effective-meta-analysis-2026|La auditoría forense de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metaanálisis]] de alto impacto encontró que ninguno ofrecía una base válida para sus afirmaciones: ningún constructo coherente (una herramienta tratada como una sola intervención y resultados multidimensionales agrupados), una evaluación inválida del sesgo de publicación en los 14, un I² reportado entre 77,2% y 94,4% en todos los análisis que lo reportaban (12 de los 13 por encima del 80%) y el 61% de los estudios primarios verificados al azar con problemas de validez. Esos 14 análisis habían acumulado más de 2.000 citas en aproximadamente 16 meses, y un metaanálisis retractado seguía citándose como autorizado en el 60% de los artículos que lo citaban tras la retractación, sin reconocerla. La adopción acrítica no se limita al trabajo retractado: en una muestra de 14 artículos que citaban otro metaanálisis auditado, cuyo resumen anunciaba un efecto grande de la "educación en IA" que en realidad medía la enseñanza al estudiantado sobre la IA, solo 2 lo citaban de forma adecuada, mientras que 8 lo leían como evidencia de que integrar la IA mejora el aprendizaje y 4 eran incorrectos de otras maneras. Las recomendaciones de la auditoría apuntan directamente a esa cadena: piden a las revistas que exijan plena transparencia de datos para los metaanálisis (protocolos de búsqueda, características codificadas de los estudios, estadísticas extraídas y código de análisis), que los editores no traten un historial de publicación como prueba de competencia revisora, y que las retractaciones sean visibles allí donde se descubre, se exporta o se cita un artículo. La reproducibilidad abarca, por lo tanto, la integridad de la cadena de síntesis, y no solo la de los estudios individuales.

El profesorado que quiera la versión de aula de estas preocupaciones (qué medidas y qué diseños de comparación usar) puede seguir la orientación metodológica de [[evaluating-ai-interventions-methods]].

## Conclusión general

La necesidad central de investigación no es simplemente más estudios que muestren que al estudiantado le gusta la IA, que el profesorado ahorra tiempo o que el trabajo con apoyo de IA obtiene puntuaciones más altas. Es evidencia más sólida que responda a:

> ¿Qué diseño educativo, para qué estudiantes, en qué contexto, mediante qué mecanismo, produce qué capacidades humanas duraderas, y con qué distribución de beneficios, costos y daños?

Responder a esa pregunta requiere métodos complementarios: experimentos bien especificados, seguimiento longitudinal, evaluaciones validadas, investigación cualitativa y basada en el diseño, muestreo centrado en la equidad y síntesis transparente. El objetivo es una base de evidencia que explique no solo si una intervención funcionó, sino por qué funcionó, dónde puede fallar y qué puede llevar el profesorado de forma responsable a otro contexto.
