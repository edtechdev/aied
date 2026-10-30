---
title: "¿Cómo compruebo si las preguntas de cuestionario y examen generadas por IA son realmente buenas?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Pide veinte preguntas a partir de sus apuntes de clase. Vuelven con claves de respuesta, explicaciones, etiquetas de dificultad y categorías de la taxonomía de Bloom, en un documento formateado que parece terminado. Su nombre está a punto de ir en él.

Respuesta breve para dar a un colega: las preguntas generadas son candidatas, no una evaluación. Resuelva cada una usted mismo, compruebe qué tiene que hacer realmente un estudiante para responderla y averigüe cómo responden los estudiantes antes de que cuente. En los dos estudios más grandes de esta base de conocimiento, la señal interesante no es que la generación funcione, sino dónde falla. La generación iterativa dentro de un flujo de trabajo específico del curso produjo exámenes de opción múltiple utilizables en 71 clases universitarias ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). En una auditoría de ciencia de datos de 311 preguntas desplegadas, las etiquetas de dificultad del modelo siguieron casi a la perfección los niveles de Bloom que había generado junto a ellas (ρ de Spearman = 0,90), mientras que siguieron lo que los estudiantes puntuaron de verdad con ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An y Wang, 2026]]). La etiqueta era una descripción del prompt, no una medición del ítem.

## La versión breve

**1.** Escriba el resultado de aprendizaje y la evidencia que proporcionaría una respuesta satisfactoria antes de generar nada.

**2.** Construya un plano de evaluación para ver qué resultados muestrea el conjunto y con qué frecuencia.

**3.** Resuelva cada ítem usted mismo antes de fiarse de la clave, y lea la explicación como una afirmación que hay que comprobar.

**4.** Pregunte qué tiene que hacer un estudiante para responder. Una pregunta que dice "analice" y exige recordar es una pregunta de recuerdo.

**5.** Trate las etiquetas de dificultad como metadatos del prompt, no como psicometría.

**6.** Pilote los ítems y examine cómo funcionan; después revise los débiles.

## Empiece por el aprendizaje del que quiere evidencia

La generación es lo bastante barata como para que el formato de salida se convierta en la especificación sin que nadie lo decida. Si sus apuntes producen ítems de opción múltiple ordenados, acabará midiendo si los estudiantes saben elegir entre afirmaciones plausibles, sea cual sea el resultado que declare el programa.

Especifique primero el resultado, después la evidencia que aportaría una respuesta satisfactoria y luego el conocimiento que se espera que traigan los estudiantes. Incluya los materiales del curso, las concepciones erróneas que prevé, las herramientas permitidas y el formato de respuesta. Si quiere que los estudiantes interpreten evidencia, el ítem tiene que exigir interpretación, y añadir la palabra a una pregunta de definición no lo consigue. Un escenario largo puede seguir siendo respondible mediante una única frase familiar que lo delata.

Un plano de evaluación es una tabla de resultados frente a ítems, y su valor es que expone las lagunas antes que los estudiantes. También hace visible el intercambio: cada ítem que genera a partir del material más fácil es un ítem que no dedicó al resultado que más le importa.

## Revise cada ítem en seis dimensiones

Empiece por la clave. ¿Es defendible frente al contenido autorizado del curso, y se sostiene la explicación cuando la comprueba de forma independiente? La clave y la explicación suelen venir del mismo paso defectuoso, así que comprobar una no comprueba la otra.

Después pregunte qué exige realmente responder el ítem a un estudiante entre leer y elegir. Es donde fallan más a menudo los ítems generados y donde la etiqueta es menos fiable.

Revise a continuación la alineación: ¿responder aporta evidencia del resultado previsto, o de algo adyacente y más fácil de evaluar?

Lea la redacción como lo haría un estudiante. ¿Está presente la información necesaria, y se ha eliminado la ambigüedad ajena a su constructo?

Mire las opciones y las reglas de puntuación juntas. ¿Son los distractores plausibles y distintos entre sí y de la clave, y reconoce la clave las respuestas alternativas legítimas que su rúbrica acreditaría?

Por último, pregunte a quién excluye el ítem. La carga de lectura, el contexto cultural, los elementos visuales y el formato pueden imponer exigencias ajenas al resultado. Para un estudiante multilingüe o con discapacidad, un ítem que premia la lectura rápida está midiendo algo que usted no pretendía, y el [[differential-effects-across-learner-groups|rendimiento por subgrupos]] es donde eso aparece.

Un segundo modelo puede ayudarle a detectar problemas, y la coincidencia entre dos modelos no es una verificación independiente de la corrección. Comparten datos de entrenamiento y modos de fallo. Resuelva el ítem y después haga que una persona cualificada revise los que vayan a contar.

## No deje que la etiqueta de dificultad decida

La literatura sobre [[automated-question-generation|generación de preguntas]] es más útil sobre el fracaso de las etiquetas que sobre el éxito de la generación. [[student-llm-use-ai-question-difficulty-data-science-2026|An y Wang (2026)]] examinaron 378 preguntas creadas por autores en cursos de ciencia de datos, de las cuales 311 se desplegaron con 54 estudiantes en 7.888 respuestas. Las etiquetas de fácil, medio y difícil del modelo correlacionaron con sus propios niveles de Bloom cogenerados en ρ = 0,90 y con la dificultad empírica del ítem en ρ = 0,06. Alrededor del 70% de los ítems desplegados fueron respondidos correctamente por todos los estudiantes, lo que dejó casi ninguna variación para que una etiqueta de dificultad la siguiera, ni siquiera en principio.

De ahí se siguen dos lecciones. Primera, la dificultad es una propiedad de la interacción entre un ítem y una población, así que ninguna etiqueta producida antes de administrar el ítem puede tomarse como un valor medido. Segunda, un banco de ítems que todos responden correctamente no es una evaluación fácil, es una evaluación inútil: apenas aporta información sobre quién sabe qué.

El caso positivo es más estrecho que lo que afirman los proveedores y vale la pena conocerlo con precisión. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] generaron exámenes de opción múltiple de diez preguntas para 71 clases universitarias, unos 1.200 estudiantes, con un bucle que genera, juzga y revisa cada ítem condicionado por los materiales que el propio docente de cada curso aporta, y después compararon los ítems con exámenes escritos por humanos. Eso es un flujo de trabajo con un revisor dentro, ejecutado por curso, no un único prompt sobre contenido genérico. El respaldo es para el flujo de trabajo en esas condiciones, y no se extiende a lo que el mismo modelo produzca a partir de un pegado de apuntes sin editar.

## Ejecute un ciclo de generar, revisar, pilotar y revisar de nuevo

Genere contra un plano de evaluación y pida el resultado previsto, la clave, una solución concisa y la concepción errónea que cada distractor pretende capturar. Las anotaciones hacen inspeccionable el diseño. No son evidencia de que el diseño sea sólido.

Repare antes de acumular. Elimine las afirmaciones sin respaldo, los ítems duplicados, las pistas accidentales en el enunciado, las claves múltiples defendibles y la complejidad ajena al constructo, y anote qué cambió, porque el patrón de reparaciones le dice qué parte del prompt hay que arreglar.

Pilote donde el pilotaje sea proporcionado. La práctica de bajo riesgo, o un pilotaje gestionado dentro de la evaluación, le da datos de respuesta. Diga a los estudiantes cómo informar de una pregunta ambigua o errónea y lea esos informes, porque son su señal de error más informativa.

Después examine cómo funcionan los ítems: la proporción que responde correctamente, qué distractores atraen respuestas y si el acierto en el ítem va junto con el rendimiento en el resto de la evaluación. Un ítem en el que los estudiantes fuertes fallan y los débiles aciertan es un defecto y no una pregunta difícil. En una clase pequeña estas estadísticas son inestables, así que combínelas con la revisión de contenido y con las explicaciones de los estudiantes en lugar de tratar un porcentaje como un veredicto.

Revise y guarde el registro: la versión aprobada, el resultado al que sirve, la clave, la justificación, las notas de revisión y el historial de administraciones. Para bancos grandes o de alto riesgo, es aquí donde tienen su lugar los especialistas en evaluación y los métodos psicométricos apropiados, y la experiencia en [[educational-measurement|medición]] no es algo que una lectura cuidadosa pueda sustituir.

## Cómo se ve esto en un curso

En un curso introductorio de sociología el resultado podría ser distinguir una explicación estructural de una individual. Un ítem débil pide a los estudiantes definir "estructural", lo que mide reconocimiento de vocabulario. Un candidato más fuerte ofrece un escenario breve sobre una familia y una decisión laboral, y después pregunta qué explicación identifica mejor una restricción estructural, con distractores que representan interpretaciones plausibles pero distintas.

El docente comprueba que el escenario sostiene de verdad la clave, que no hay dos opciones que expresen la misma idea y que responder no depende de terminología que el curso nunca presentó. Una pregunta de seguimiento de una línea, «¿qué detalle respalda su elección?», saca a la luz el razonamiento que la opción elegida oculta. La adaptación no está probada como formato de ítem, y su valor es más estrecho: las preguntas de revisión anteriores pueden responderse antes de administrar un ítem, y una clave mala puede repararse antes de que los estudiantes la vean.

Para los estudiantes que generan sus propias preguntas de práctica, la misma regla se aplica en su nivel: intente el ítem, contraste la explicación con las fuentes del curso y lleve los casos irresolubles a alguien que domine la materia. La [[study-with-ai|práctica de estudio]] que entrena a los estudiantes a aceptar claves generadas sin espíritu crítico enseña el hábito equivocado.

## Lo que le van a responder

**«Dio una respuesta y una explicación».** Ambas pueden repetir un mismo error, y la explicación genera confianza precisamente porque es fluida. Verifique el razonamiento contra sus materiales, no contra su propia reformulación.

**«Estas son solo preguntas de práctica».** La práctica enseña concepciones erróneas cuando las claves erróneas no se corrigen, y los estudiantes ensayan el error con la misma facilidad que la respuesta correcta. Un riesgo menor cambia cuánta revisión es proporcionada. No cambia si la exactitud importa.

**«A los estudiantes les gustó el cuestionario».** El disfrute es evidencia sobre la experiencia. Un cuestionario fácil que todos terminan cómodamente se siente bien y mide poco, y la auditoría de ciencia de datos encontró que la popularidad de los ítems no iba acompañada de ninguna señal de dificultad utilizable.

**«La rúbrica o las etiquetas de Bloom muestran que alcanza los resultados».** Las etiquetas de Bloom aportadas por el mismo paso de generación son la evidencia menos independiente disponible. El ρ = 0,90 frente a las etiquetas y el ρ = 0,06 frente al rendimiento de los estudiantes es exactamente cómo se ve eso cuando se mide.

## Qué hacer esta semana

**1.** Elija un resultado y escriba la evidencia que aportaría una respuesta satisfactoria. Después genere cinco ítems contra él, pidiendo la clave, la solución y la concepción errónea prevista detrás de cada distractor.

**2.** Resuelva los cinco sin mirar las claves y anote aquellos en los que usted y el modelo discrepan.

**3.** Pida a un colega que inspeccione los dos candidatos más fuertes en alineación y ambigüedad, y elimine todo lo que ninguno de los dos pueda defender.

**4.** Pilote los supervivientes con un seguimiento breve que pregunte a los estudiantes qué detalle respalda su elección.

**5.** Registre qué cambió y por qué, para que el siguiente lote parta de un prompt mejor y no del mismo.

## Adónde ir después

[[automated-question-generation]] es la página de concepto para los métodos de generación y su calidad medida, y [[educational-measurement]] cubre el análisis de ítems, la fiabilidad y la psicometría que un pilotaje solo apunta. Ambas quedan bajo [[assessment-validity|la validez de la evaluación]], que es el estándar al que sirve todo el ciclo.

El lado del juicio del mismo problema corresponde a [[ai-grading-fairness-reliability|la calificación con IA]], ya que un buen ítem calificado mal no es mejor que un ítem malo calificado bien. Para la pregunta más amplia de qué debería representar una nota cuando los estudiantes pueden usar IA, consulte [[redesign-assessment-ai-era|rediseñar la evaluación en la era de la IA]].
