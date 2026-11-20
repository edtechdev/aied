---
title: "Educación de grado"
created: "2026-11-15T10:10:19-05:00"
updated: "2026-11-15T10:10:19-05:00"
type: concept
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
assessment: [formative-assessment, assessment, learning-gains]
technology: [generative-ai, conversational-ai, intelligent-tutoring, llm]
level: [undergraduate, higher ed]
confidence: medium
translation_of: concepts/undergraduate-education
source_updated: "2026-11-15T06:35:59-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-15"
    agent: hermes-agent
contributors: [editor]
connected_concepts: [scaffolding, help-seeking, feedback-literacy, self-regulated-learning, desirable-difficulties, process-oriented-assessment, self-report-measures, ai-detection, learning-analytics, student-support-and-success, equity-in-ai-education, writing-education, stem-education]
connected_articles: [guardrails-ai-teaching-assistants-programming-2026, genai-use-changing-institutional-policy-physics-2026, caeai-chatgpt-interdisciplinary-stem-nonstem-2026, li-who-benefits-llms-prompt-engineering-equity-2026, llm-math-homework-offloading-traces-2026, patrick-ai-higher-order-thinking-systematic-review-2025, genai-reliance-human-agency-collaborative-learning-2026, genai-cognitive-offloading-learner-agency-review-2026, ai-enabled-course-development-first-year-adjustment-2026, thulin-chatbot-mental-health-students-2026, torres-peralta-perceived-learning-engagement-homework-2026, kumar-chatgpt-academic-assignments-2025, zaripova-genai-self-regulation-neuroai-competence-2026]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Síntesis:** La educación de grado es donde la IA se encuentra con las clases más numerosas y la [[assessment|evaluación]] más estandarizada: cursos de acceso en primero y segundo año en los que un docente enseña a varios cientos de estudiantes con una rúbrica compartida. Los ensayos en este nivel se dividen por el diseño, no por el modelo. Un tutor construido a partir de la propia pedagogía de un curso superó al [[active-learning|aprendizaje activo]] en el aula, mientras que un asistente de curso bien fundamentado pero desplegado sin integración instruccional bajó las notas y la participación. La evidencia más sólida se refiere a la [[feedback|retroalimentación]] a escala, a los [[scaffolding|andamiajes]] para la [[help-seeking|búsqueda de ayuda]], a los materiales de estudio verificados y a la divulgación que mueve plazos administrativos; la más débil, a las afirmaciones de que un asistente general eleva lo que el alumnado puede hacer sin ayuda.

## Preguntas para reflexionar

- Si un tutor eleva las notas de los deberes en dos puntos y medio pero el examen no se mueve, ¿qué ha comprado el curso?
- Las notas cayeron en un curso donde seis de cada siete estudiantes nunca abrieron el [[conversational-ai|chatbot]]. ¿Qué cambió la disponibilidad por sí sola?
- ¿Qué es más defendible en un curso de 600 estudiantes: detectar entregas escritas por IA o cambiar lo que la entrega debe contener?
- ¿Qué puede suponer un curso de primer año sobre los hábitos de IA que el alumnado aprendió en la secundaria?
- Cuando la unidad de diseño es una cohorte de 900 y no un solo aprendiz, ¿qué afirmaciones de [[personalized-learning|personalización]] sobreviven?

## Introducción

Los estudios de grado son la formación de licenciatura: clases magistrales, secciones, laboratorios y cursos de servicio, evaluados de forma continua y sumados en una credencial. El alumnado son adultos que eligen su propio tiempo de estudio, enseñados en cohortes mucho mayores que cualquier clase escolar. Todavía no son investigadores, y ningún supervisor es responsable de formar su juicio, lo que separa esta franja de los estudios de posgrado.

La escala es la restricción que la define. Un curso introductorio de [[physics-education|física]], economía o [[cs-education|programación]] puede matricular de varios cientos a algunos miles de estudiantes, atendido por ayudantes docentes que cada uno califica docenas de ensayos o demostraciones. El volumen de retroalimentación, la disponibilidad de ayuda y el costo de advertir a un estudiante en dificultades son los problemas de diseño recurrentes. La pregunta que decide si la IA ayudó no es si el sistema produjo una respuesta, sino qué hizo todavía el alumnado cuando la produjo.

## Qué mide la evidencia en este nivel

Los ensayos de grado son fáciles de contar y difíciles de comparar. El resultado suele ser una nota de curso, una prueba escrita por el docente o una rúbrica aplicada a un solo artefacto.

- **El efecto agrupado es positivo y depende de la duración.** Treinta y cinco estudios experimentales y cuasiexperimentales que cubren 175 tamaños del efecto produjeron g = 0.53 para estudiantes de grado y g = 0.46 para el [[learning-gains|rendimiento académico]] ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]]). El efecto académico cayó de g = 5.07 en intervenciones de cuatro semanas o menos a g = 0.01 más allá de las doce semanas, frente a una heterogeneidad superior al 96 %.

- **La [[educational-measurement|medición]] diferida es la excepción.** Una prueba sorpresa 45 días después de un curso de negocios de 120 estudiantes es una de las pocas medidas de retención que hay aquí: el alumnado asistido por IA obtuvo 57.5 % frente a 68.5 %, d = 0.68, tras haber estudiado 3.2 horas frente a 5.8 ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]]).

- **El artefacto calificado es la unidad habitual de evidencia.** Eso importa para la [[assessment-validity|validez de la evaluación]]: un ensayo puntuado con rúbrica o una suite de pruebas aprobada puede mejorar mientras la capacidad que el curso existe para construir no lo hace.

## Tutoría y ayuda con matrícula numerosa

El mayor resultado positivo proviene de un tutor construido a partir de la propia pedagogía de un curso, no de un asistente general.

- **Un tutor diseñado superó al aprendizaje activo del propio curso.** En Physical Sciences 2 de Harvard, 194 estudiantes cursaron las mismas dos lecciones dos veces, una en clase y otra con un tutor a medida. La mediana del postest fue 4.5 frente a 3.5, el tiempo en la tarea 49 minutos frente a unos 60, y el efecto modelado 0.63 ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025]]). El tutor codificaba siete prácticas instruccionales y usaba soluciones escritas por el docente.

- **La misma tecnología sin integración instruccional perdió terreno.** Un asistente GPT-4o fundamentado en el curso llegó a 2,379 estudiantes con 30 [[teacher-role|docentes]]. En secciones del mismo curso, las notas finales cayeron 4.12 puntos (0.37 DE) y las participaciones registradas unos 0.90 DE; el 15 % del alumnado lo usó, durante unas cuatro sesiones ([[liu-course-integrated-ai-tutoring-rct-2026]]). El alumnado de primera generación perdió 0.50 DE frente a 0.22 de sus pares.

- **Un chatbot de recuperación a medida puede no producir nada.** En un curso de marketing de 454 estudiantes aleatorizado dentro de las secciones, no apareció ningún efecto grupo por tiempo en interés, [[self-efficacy|autoeficacia]], compromiso ni nota de la prueba. El alumnado inició sesión 0.89 veces por semana y valoró el disfrute en 80/100 ([[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]]).

- **El diseño de la interacción mueve los resultados más que la elección del modelo.** HelpCoach intervenía solo en preguntas vagas: el 57.3 % de los primeros borradores planteaba una pregunta específica frente al 40.5 %, y la retención una semana después fue de 1.9 frente a 0.3 sobre 6 ([[helpcoach-ai-help-seeking-scaffolding-2026]]).

## La brecha entre la nota y el aprendizaje

Cuatro diseños separan la nota en la tarea apoyada de lo que el alumnado podía hacer sin ayuda, y coinciden en la dirección.

- **CS1: las notas del ejercicio subieron, el conocimiento conceptual no.** En un curso de Java de 275 estudiantes, quienes usaban [[generative-ai|ChatGPT]] obtuvieron 71.84 % en el ejercicio frente al 29.85 % de quienes usaban recursos web ordinarios, mientras las ganancias de conocimiento antes-después fueron de 0.71, 0.85 y 0.83 puntos sin interacción tiempo por grupo ([[bassner-performance-learning-dissociation-ai-programming-2026]]).

- **Curso de demostraciones: las ganancias en los deberes no llegaron al examen.** En Carnegie Mellon, 153 estudiantes con acceso a un chatbot y a una interfaz de retroalimentación de demostraciones obtuvieron 2.56 puntos más en los deberes. El examen siguiente, hecho sin IA, no mostró diferencias significativas, y cada 100 mensajes adicionales al chatbot se asociaron con 3.02 puntos menos en el examen siguiente ([[ai-proof-learning-cognitive-offloading-2026]]).

- **Retroalimentación: mejores revisiones, postest plano.** En un curso de economía de 354 estudiantes, la retroalimentación mediada por IA mejoró la calidad de la revisión en d = 0.50 en 1,366 ensayos, y el postest a ciegas fue de 0.59 frente a 0.56 ([[lu-ai-mediated-feedback-feedbackwriter-rct-2026]]).

- **El patrón de uso decidió si la ganancia sobrevivía a la retirada.** Un chatbot comercial elevó las notas de pruebas sin ayuda en 6.7 puntos (0.27 DE) entre 211 estudiantes de Middlebury, y el efecto persistió. El 32 % que lo usó para automatizar el trabajo ganó 0.54 DE en los ensayos mientras estuvo disponible y 0.02 DE una vez que desapareció ([[contractor-learning-impact-generative-ai-2026]]).

El mecanismo que suele ofrecerse es la [[cognitive-offloading|descarga cognitiva]]: la herramienta realiza el proceso que la tarea estaba diseñada para provocar. Lo que sigue es un orden, no una prohibición: primero un intento, después la ayuda, y un juicio calificado sin la herramienta.

## Qué declara el alumnado sobre sí mismo

Las encuestas en este nivel preguntan al alumnado qué ganó, y sus respuestas se relacionan de forma laxa con lo que dicen haber hecho. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] encuestaron a 1,477 personas en Sonora, México, incluidos 765 estudiantes universitarios. Su índice de compromiso se apoya en tres conductas declaradas —leer, modificar y añadir ideas propias— y apenas se movió con una única autovaloración del aprendizaje de 0 a 10, con una correlación agrupada de 0.052. El alumnado universitario usó ChatGPT más que el de bachillerato y valoró su aprendizaje solo ligeramente más alto. Los autores leen el resultado como una advertencia sobre la [[assessment-validity|validez de la evaluación]] y no como un veredicto sobre el aprendizaje, ya que no se midió ningún resultado.

Cuando los predictores también son autodeclarados, un modelo describe un estado mental más que un mecanismo. [[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]] modelaron las rutas hacia el rendimiento autodeclarado en las tareas de 304 estudiantes de dos universidades de Karnataka. La alfabetización digital alcanzó β = 0.393 y la utilidad percibida β = 0.259, mientras la conciencia ética no predijo el rendimiento (β = −0.006, p = .924). El rendimiento, la alfabetización y la ética eran todos autoevaluados, así que la ruta más fuerte dice que quien se valora como más alfabetizado digitalmente también valora más alto su trabajo. El resultado nulo en ética sigue siendo el útil: los autores lo leen como que la ética moldea la conducta y no las notas, y recomiendan evaluar directamente la declaración y la citación.

La comparación entre niveles hace que el lado de grado parezca desigual y no uniformemente bajo. [[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]] compararon a 381 estudiantes de una universidad técnica de Uzbekistán en una submuestra equilibrada de 302. Los estudiantes de grado promediaron 3.527 en la escala de ética frente a 4.627 de los de posgrado, con d = 1.47 para ética y autonomía académica. La carga cognitiva percibida no difirió por nivel (p = .296). Las distribuciones sostienen el argumento de diseño: las desviaciones estándar de posgrado en ética y autorregulación eran aproximadamente un tercio de los valores de grado, mientras los estudiantes de grado alcanzaban el mínimo de la escala. Una cohorte de primer año reúne, por tanto, a estudiantes que evalúan críticamente la salida junto a otros que declaran casi nada de esa disposición.

Leídas en conjunto, las encuestas muestran qué puede y qué no puede establecer la [[self-report-measures|autodeclaración]]. Establecen distribución y autoconcepto —cuán dispersa es una cohorte, cómo se valora el alumnado— y no aprendizaje. La evidencia de rendimiento anterior es lo que separa ambas cosas, desde la prueba de retención de 57.5 % frente a 68.5 % hasta la ganancia de 0.54 DE que se desvaneció al retirar el chatbot. Las ganancias autodeclaradas y los predictores autodeclarados necesitan, por tanto, la misma cautela en direcciones opuestas. Una ganancia medida por autovaloración puede ser competencia o confianza, y un predictor medido del mismo modo puede seguir al resultado porque un solo instrumento produjo ambos. La prueba es si un diseño cambia algo que el estudiante hace: un borrador revisado, una fuente verificada, un uso declarado.

## Escritura, retroalimentación e integridad

La escritura es donde el uso de IA es más visible y el contrato de evaluación más débil, porque una entrega fluida no lleva rastro del proceso que hay detrás.

- **La [[ai-feedback-quality|retroalimentación con IA]] igualó al profesorado en el ensayo y perdió en la relación.** En 312 escritores de primer año, la calidad del ensayo revisado subió d = 0.60 con retroalimentación de IA y d = 0.59 con retroalimentación del docente, equivalentes dentro de un margen preestablecido. La [[motivation|motivación intrínseca]] fue 4.90 frente a 5.16, una brecha de d = 0.31 mediada por la relación percibida ([[liu-ai-generated-teacher-feedback-writing-motivation-rct-2026]]).

- **Los requisitos de proceso aumentaron la adopción y dejaron intacta la calidad.** En un curso de computación de primer año de unos 570 estudiantes, la adopción voluntaria se mantuvo cerca de dos tercios hasta que un flujo de borrador antes de la IA con una [[reflection|reflexión]] marcada y un formulario de declaración la elevó al 93 %. El uso de IA no predijo la calidad del ensayo una vez controlada la escritura previa ([[shakil-scaffolding-genai-ethical-essay-2026]]).

- **La salida de los detectores funciona como triaje, no como juicio.** Argus puntuó seis ofertas de un curso CS2 de Purdue: H-score medio 1.1 en 2020 frente a 11.9 en 2026, y el 45.7 % de 584 estudiantes fueron señalados tras revisión manual. Los estudiantes señalados promediaron 61.9 % en exámenes vigilados frente a 73.5 %, con una mediana de 1.5 minutos de revisión del personal por estudiante ([[argus-academic-integrity-genai-2026]]).

- **El error del detector descalifica la adjudicación.** Siete detectores aplicados a 91 ensayos TOEFL de escritores no nativos de inglés promediaron una tasa de falsos positivos del 61.22 %, y el 97 % fueron señalados por al menos uno ([[ragab-ai-integrity-verification-model-2026]]). Lo que sigue es una evaluación de competencia supervisada en los puntos de progresión, que traslada la carga a la política de [[academic-integrity|integridad académica]] y no al software.

## El primer año: transición, tutoría académica y apoyo

El alumnado de primer año llega con hábitos formados en la escuela y poca autoridad para cuestionar una respuesta plausible. Las herramientas dirigidas a él hacen sobre todo trabajo administrativo.

- **Los hábitos llegan antes que el escepticismo.** En 1,598 estudiantes de 12 a 25 años, el uso declarado pasó de 1.24 a 1.77 en una escala de 0-4 entre los 12 y los 17 años mientras la fiabilidad juzgada no se movió. En la universidad, el uso se aplanó y se desplazó hacia la traducción; la cautela fuerte en tareas de investigación llegó al 23.3 % en el cuarto año frente al 10.1 % en el primero ([[cuenca-rodriguez-genai-use-caution-trajectories-2026]]).

- **El material verificado ayudó a quienes lo necesitaban.** En un curso de economía de primer año, 170 estudiantes con acceso a pódcasts y guías de estudio generados por IA y verificados por ayudantes docentes obtuvieron 2.34 puntos más en un examen de 50. Tres cuartas partes de esa ganancia se situaron en el quintil inferior, la proporción por debajo del 60 % cayó 24.7 puntos, y la verificación costó 1.8 minutos de tiempo del personal por estudiante ([[verified-study-materials-learning-gains-2026]]).

- **La divulgación desde la tutoría académica mueve plazos, no notas.** Un chatbot de texto en dos cursos [[online-teaching-and-learning|en línea]] grandes elevó la proporción que obtenía A o B en 4 puntos y la asistencia a tutorías en 2, en 2,483 estudiantes ([[chatbot-outreach-course-performance-2026]]). Con 8,708 estudiantes a lo largo de ocho semestres, un servicio similar movió la matrícula en 34 puntos y dejó el GPA y la persistencia sin cambios ([[mata-sustaining-ai-enabled-student-support-2026]]).

- **Los modelos de alerta temprana pertenecen a la tutoría académica, no a la disciplina.** Las trazas del LMS de las primeras ocho semanas de 52 estudiantes de programación predijeron eventos de riesgo posteriores durante el examen con AUC 0.763; el autor enmarca la puntuación como una señal para ofrecer apoyo ([[akcapinar-ai-cheating-risk-lms-prediction-2026]]).

## Conexiones

La educación de grado se sitúa entre dos franjas estudiadas con métodos distintos. La [[secondary-education|educación secundaria]] supone asistencia obligatoria, un adulto que media la herramienta y el aula como unidad de despliegue. La enseñanza de grado supone aprendices que fijan sus propios horarios y trata el curso como unidad. [[higher-ed]] es el marco más amplio —[[governance|gobernanza]], [[educational-development|desarrollo del profesorado]], contratación y programas profesionales— y allí se sitúa la mayor parte de la evidencia sobre precisión de la calificación y [[educational-policy-ai|política institucional]]. La [[graduate-education|educación de posgrado]] desplaza la unidad de trabajo del curso a la investigación supervisada, donde la pregunta pasa a ser el juicio. [[education-levels]] expone el conjunto completo de franjas.

## Implicaciones para la práctica

**Para el profesorado**

- **Enseñe la interacción, no la herramienta.** Una sola sesión de 45 minutos sobre en qué se equivoca el modelo elevó la proporción de respuestas erróneas revisadas hasta acertar del 41.3 % al 69.3 % ([[structured-genai-training-physics-problem-solving-rct-2026]]).
- **Asigne peso calificado al rendimiento sin ayuda.** Todos los diseños que separaron ambas cosas encontraron que el artefacto apoyado mejora primero; califique una pieza de trabajo sin IA.
- **Exija un intento antes de la ayuda.** La interfaz de intento primero del curso de demostraciones de Carnegie Mellon no conllevó penalización en el examen; el chatbot abierto sí.

**Para la dirección de cursos y programas**

- **Trate un chatbot de curso como una intervención [[pedagogy|pedagógica]].** La misma tecnología no produjo ningún efecto medible en un curso aleatorizado y bajó las notas en otro.
- **Presupueste el trabajo de verificación.** El material de estudio verificado costó 1.8 minutos de tiempo del personal por estudiante y produjo su mayor ganancia entre el alumnado más débil.
- **Vigile los [[differential-effects-across-learner-groups|efectos por subgrupo]] antes de escalar.** La diferencia de primera generación en el ensayo de 2,379 estudiantes fue el mayor daño y resultaba invisible en el promedio del curso.

**Para la investigación**

- **Informe un resultado sin ayuda y otro diferido,** o un efecto sobre el artefacto se leerá como un efecto de aprendizaje.
- **Preespecifique un margen de equivalencia** cuando afirme que la retroalimentación de IA es tan buena como la del docente.

## Concepciones erróneas

- **«Un chatbot de curso es infraestructura neutral».** En el ensayo de 2,379 estudiantes, el 15 % usó la herramienta y las notas cayeron 0.37 DE, con la participación 0.90 DE por debajo.
- **«Una nota más alta en el ejercicio significa más aprendizaje».** Los usuarios de ChatGPT obtuvieron 71.84 % frente a 29.85 % en un ejercicio de CS1 mientras las ganancias conceptuales fueron estadísticamente idénticas entre los grupos.
- **«Los detectores pueden resolver un caso de integridad».** Siete detectores promediaron 61.22 % de falsos positivos en ensayos de escritores no nativos de inglés, y el 97 % fue señalado por al menos uno.
- **«El uso diario significa que se puede dar por supuesta la [[ai-literacy|alfabetización en IA]]».** El uso declarado subió cada año de la secundaria mientras la fiabilidad juzgada se mantuvo plana; la cautela en tareas de investigación apareció solo en el cuarto año.
