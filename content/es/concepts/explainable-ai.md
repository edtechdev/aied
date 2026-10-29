---
title: IA explicable
created: "2026-09-28T19:10:33-04:00"
updated: "2026-10-29T04:40:26-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-10-27T10:05:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent


---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La IA explicable (XAI) en educación** es el diseño y el estudio de hacer legibles las decisiones de un sistema de IA para sus partes interesadas educativas: [[learners|estudiantes]], docentes, [[administrator|administradores]], [[parents-and-families|familias]], investigadores y [[stakeholders|responsables de políticas]]. La distinción central en la que insiste el campo: explicar la **materia** (por qué un hecho es verdadero) no es lo mismo que explicar la **decisión de un sistema de IA** (por qué a este estudiante se le asignó esta actividad, por qué esta respuesta se marcó como incorrecta, qué evidencia respalda una predicción de riesgo). La educación aporta necesidades de explicabilidad distintivas: datos de aprendizaje ruidosos, explicaciones que pueden apoyar directamente la [[metacognition|metacognición]] y el [[self-regulated-learning|aprendizaje autorregulado]], y partes interesadas que requieren tipos de explicación fundamentalmente distintos. La pregunta operativa de diseño es la **calidad de la explicación**, y no su mera disponibilidad: una explicación técnicamente presente pero ilegible, engañosa o desalineada con su audiencia puede hacer más daño que ninguna explicación.

## Preguntas para considerar

- Cuando un [[intelligent-tutoring|tutor de IA]] le dice por qué dio una pista, ¿está explicando la *materia* o la *decisión del sistema*? ¿Puede nombrar tres ejemplos de cada una en su propio uso de la IA educativa?
- ¿Quién necesita explicaciones en educación, y necesitan el *mismo* tipo los estudiantes, los docentes y los responsables de políticas? ¿Para qué usaría cada uno una explicación?
- Una IA marca a un estudiante como en riesgo de abandono. ¿Qué necesita saber un [[teacher-role|docente]] para actuar en consecuencia, frente a lo que necesita saber el estudiante? ¿Es apropiada la misma explicación para ambos?
- La página sostiene que la *calidad* de la explicación importa más que su *disponibilidad*. ¿Qué hace que una explicación técnicamente presente fracase? ¿Puede recordar alguna vez en la que la explicación estaba ahí pero era inútil, o algo peor, engañosa?
- [[trust-calibration|Confianza]] y explicación están vinculadas pero no son idénticas. ¿Por qué una explicación segura y fluida podría crear una confianza *falsa* en un sistema defectuoso, y cómo detectaría que eso está ocurriendo?

## Introducción

La [[ai-education|IA explicable en educación]] nombra la expectativa creciente de que los sistemas de IA en las aulas no sean cajas negras. Como la IA en educación afecta decisiones consecuentes (calificaciones, alertas de riesgo, [[recommender-systems-and-learning-paths|rutas de aprendizaje]], recomendaciones de recursos), las partes interesadas exigen cada vez más saber no solo *qué* concluyó el sistema sino *por qué*. La educación afina esto en dos preguntas distintas: explicar la materia que se aprende y explicar la toma de decisiones del propio sistema de IA. Confundirlas es un error de categoría con consecuencias prácticas: una IA que explica perfectamente una respuesta de [[physics-education|física]] sigue sin dar al estudiante ni al docente ninguna idea de por qué el *sistema* lo clasificó como en riesgo, le recomendó cierta actividad o marcó una respuesta como incorrecta.

## Explicar la materia frente a explicar la decisión del sistema

La contribución fundacional del campo, el [[xai-education-framework|marco XAI-ED]] (Khosravi et al., 2022), insiste en que la educación tiene necesidades de explicabilidad *distintivas* más allá de la XAI de propósito general. La principal de ellas es la división entre dos objetivos de explicación:

- **Explicaciones de la materia:** aclaran el *contenido*: por qué una pista aborda un [[misconceptions|concepto erróneo]], por qué una respuesta es incorrecta, cómo un resultado de física se sigue de sus principios. Son explicaciones [[pedagogy|pedagógicas]] que apoyan el [[scaffolding|andamiaje]], la [[feedback|retroalimentación]] y la [[metacognition|metacognición]].
- **Explicaciones de la decisión del sistema:** aclaran *el modelo*: por qué a este estudiante se le asignó esta actividad, por qué el sistema predice que este estudiante está en riesgo, qué evidencia respalda un rastreo del conocimiento o una predicción de [[learning-analytics|analítica del aprendizaje]]. Son explicaciones de transparencia que apoyan la [[trust-calibration|calibración de la confianza]], la [[bias-mitigation|mitigación del sesgo]] y la rendición de cuentas.

La distinción importa porque sirven a partes interesadas distintas y con propósitos distintos. Un estudiante que responde a "¿por qué está mal esto?" necesita sobre todo la explicación de la materia; un docente que decide si actuar ante una alerta de riesgo, o un responsable de políticas que audita en busca de sesgo, necesita la explicación de la decisión del sistema. Diseñar una sola explicación que sirva a ambas rara vez es posible, y por eso el diseño con múltiples partes interesadas es un tema central del XAI-ED.

## Quién necesita explicaciones: diseño con múltiples partes interesadas

- **Estudiantes:** necesitan explicaciones que apoyen su propio aprendizaje y su autorregulación: por qué se dio una pista, por qué su respuesta se marcó como incorrecta, por qué se recomienda este recurso (apoyando el [[self-regulated-learning|aprendizaje autorregulado]]). La [[student-perspectives-ai-writing-grading-2026|evidencia sobre la perspectiva del estudiantado]] muestra que los estudiantes trazan una línea nítida entre aceptar la *retroalimentación* de la IA (útil para revisar) y ceder la *autoridad de calificación* (reservada al docente humano), una postura calibrada y ajustada a la función que se activa con la transparencia sobre la participación de la IA. El [[ko-hughes-vsd-student-centered-its-2026|trabajo de diseño sensible a los valores con estudiantes de colegios comunitarios]] afina el punto: los estudiantes preferían explicaciones *colaborativas y humanizadas* (por ejemplo, "la IA puede estar insegura aquí, así que vamos a comprobarlo juntos") a la confianza bruta del modelo o a la transparencia técnica, porque la transparencia por sí sola tiene poco valor si no apoya directamente su aprendizaje. El estudio sacó a la superficie una tensión entre transparencia e interpretabilidad que empuja el diseño de explicaciones hacia una semántica dirigida al estudiante y no hacia la salida de importancia de características.
- **Docentes:** necesitan explicaciones que informen la intervención: qué estudiantes están en riesgo y *por qué*, con qué evidencia. [[xai-teachers-trust-edtech-recommendations-2026|Los estudios sobre explicabilidad con docentes]] muestran que las explicaciones [[discipline-specific-aied|específicas del dominio]], en lenguaje [[curriculum-design|curricular]], construyen aceptación y confianza calibrada con más eficacia que las genéricas de importancia de características; aun así, los docentes quieren experiencia real de aula antes de confiar del todo, y la explicación por sí sola no confiere [[trust-calibration|calibración]].
- **Desarrolladores e investigadores:** necesitan explicaciones para depurar el comportamiento del modelo y detectar [[bias-mitigation|sesgo]], sacando a la superficie qué características impulsan las predicciones.
- **Administradores y responsables de políticas:** necesitan explicaciones para la rendición de cuentas, el cumplimiento de [[privacy|privacidad]] y [[regulation|normativa]] (por ejemplo, el derecho a la explicación), y para auditar si las decisiones impulsadas por IA son justas y [[equity-in-ai-education|equitativas]].

## Enfoques y formatos

El marco XAI-ED cataloga las principales modalidades de explicación: **visual** (mapas de calor, árboles de decisión), **textual** (justificaciones en lenguaje natural), **basada en ejemplos** (contrafactuales, vecinos más cercanos), **clasificaciones por importancia de características**, **extracción de reglas** y **simplificación del modelo**. También mapea los enfoques a clases de modelo:

- Los modelos de **caja blanca** (árboles de decisión, modelos lineales, basados en reglas) son interpretables de forma inherente.
- Los modelos de **caja negra** ([[machine-learning|redes neuronales]], conjuntos) requieren métodos de explicación a posteriori.
- Los enfoques de **caja de cristal** intentan equilibrar exactitud y transparencia.

La base de evidencia concreta de AIED abarca todo esto. El **[[knowledge-tracing|rastreo del conocimiento]] interpretable** hace que los modelos de conocimiento del estudiante sean inspeccionables directamente ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). Los **sustitutos autoexplicativos** destilan un modelo de caja negra en un [[llm|modelo de lenguaje]] pequeño e interpretable para la [[learning-analytics|analítica del aprendizaje]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). Las **explicaciones contrafactuales**, "qué tendría que cambiar para obtener un resultado distinto", sustentan la ayuda a la decisión educativa y el recurso o reparación ([[sc2r-counterfactual-recourse-educational-2026]]). La **analítica del aprendizaje federada y explicable** muestra que la calidad de la explicación puede derivar (la calibración se degrada) incluso cuando se mantiene la estabilidad del ranking, lo que subraya que las explicaciones no son una propiedad fija sino una salida del sistema que debe medirse ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Y los **ITS [[affective-computing|afectivos]] interpretables** demuestran explicaciones en tutoría [[affective-tutoring|consciente de las emociones]] ([[multimodal-affective-its-presentation]]).
- **La medición externa esquiva el problema del relato infiel.** Los registros de decisión filtrados reconstruyen las trazas de la herramienta en un árbol de procedencia y clasifican la evidencia con cuatro señales deterministas, de modo que la puntuación de influencia se puede verificar con independencia de la recomendación, y la eliminación contrafactual de herramientas confirmó que el ranking seguía la dependencia ([[filtered-decision-logs-transparency-genai-2026|Anbalagan et al. (2026)]]).

## Calidad de la explicación, no disponibilidad

Una lección recurrente en toda la evidencia: **tener una explicación no basta**; la explicación tiene que ser adecuada para su audiencia, exacta y calibrada a lo que está en juego. El marco XAI-ED nombra los escollos de forma explícita:

- **Sobrecarga de explicaciones:** demasiada información desborda al usuario y anula el beneficio.
- **Explicaciones engañosas:** las explicaciones a posteriori pueden no reflejar el razonamiento real del modelo y dar una confianza falsa.
- **Sesgo de confirmación:** los usuarios atienden de forma selectiva a las explicaciones que confirman sus creencias previas.
- **Confianza excesiva:** las explicaciones fluidas pueden crear una confianza falsa en sistemas defectuosos y alimentar la [[cognitive-offloading|dependencia excesiva]] (el reverso de la [[trust-calibration|calibración de la confianza]]).
- **Jugar con el sistema:** los estudiantes pueden explotar las explicaciones para sortear el aprendizaje real.

La calidad de la explicación tiene también una dimensión de equidad: una explicación técnicamente presente pero ilegible para una parte interesada concreta, o que oscurece el [[bias-mitigation|sesgo]] de una predicción, fracasa en su propósito. Por eso la pregunta de diseño es la de *calidad y ajuste*, y por eso el diseño de explicaciones centrado en las personas y específico para cada parte interesada es inseparable de la generación técnica de explicaciones. Una XAI eficaz es un acto de comunicación diseñado para las necesidades cognitivas del receptor, y no meramente un artefacto técnico.


La explicación no siempre nivela el terreno. En un experimento de viñetas de 2 × 2 con 250 estudiantes de séptimo grado, una justificación escrita de una calificación de matemáticas elevó la aceptación y la justicia percibida en ambas condiciones, pero amplió en lugar de cerrar la brecha entre las decisiones tomadas por el [[teacher-role|docente]] y las tomadas por la IA ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Las citas se comportan como una señal de credibilidad y no como evidencia de corrección: adjuntar citas y señales de autoridad a una interfaz de debate elevó el abandono de un juicio correcto en favor de la posición de la IA del 15,0% al 31,8%, y los casos citados a veces estaban mal atribuidos o eran ficticios ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

Dos advertencias afinan esto aún más, y ambas son centrales en la contribución más reciente de esta wiki sobre el tema. Primero, la maquinaria de explicación no es neutral en sí misma: los métodos a posteriori como LIME y SHAP pueden ser infieles al comportamiento real del modelo, de modo que una explicación técnicamente presente puede engañar en lugar de informar ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], a partir de Chuan et al. 2024). Segundo, **la explicación no es rendición de cuentas**. Un relato de qué características impulsaron una predicción no revela si esas características eran apropiadas de usar, si los datos de entrenamiento eran representativos o si el diseño del sistema reflejaba un juicio sólido; las explicaciones pueden crear la apariencia de transparencia mientras dejan intactas las condiciones estructurales que produjeron una decisión (Mittelstadt et al. 2019). Para la educación esto significa que la pregunta que hay que seguir haciendo no es si se produjo una explicación, sino si la persona que la recibe (un estudiante, un docente, un asesor) pudo entenderla, actuar sobre ella o impugnar la decisión que hay detrás. El mismo fallo de legibilidad aparece en el lado de la seguridad de la [[automated-assessment|evaluación automatizada]]: [[humble-prompt-injection-ai-grading-red-team-2026|el red team de Humble (2026) sobre una herramienta de calificación con IA]] descubrió que desactivaba el chat en silencio tras bloquear una inyección de prompt y, después de haber anunciado que nunca seguiría instrucciones incrustadas, las siguió en seis ejecuciones más sobre el mismo archivo, sin dejar al usuario ninguna señal fiable en la que basar su confianza.

**Explicable por diseño** es una respuesta al problema de la fidelidad a posteriori. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang y Fang (2025)]] parametrizan un decodificador de explicaciones con la misma representación fusionada y la misma puntuación predicha que deciden la [[assessment|evaluación]], de modo que una puntuación baja en el cuestionamiento [[formative-assessment|formativo]] produce una justificación que nombra preguntas de sondeo insuficientes, y lo emparejan con atención de doble lente sobre los estándares curriculares y los movimientos de rúbrica específicos de la materia. La alineación entre atención y rúbrica alcanza el 78,0% frente al 41,7% de GPT-4 en zero-shot y el 32,1% de BERT, y la fidelidad se sondea mediante la eliminación contrafactual de tramos críticos de la rúbrica junto con valoraciones humanas en una lista de verificación anclada en la rúbrica, lo que da una puntuación de credibilidad de la explicación de 0,78, un aumento de 0,31 sobre BERT-base. La auditoría también muestra dónde se adelgaza la afirmación arquitectónica: ante señales emocionales el modelo asigna el 28,4% del peso de atención frente al 15,2% de un experto (alineación 0,53), con un caso de fallo que asigna el 28% al token "frustrated", que los autores leen como sobreajuste a lo afectivo y no a la pedagogía, y que señalan como un área de refinamiento. Incrustar las explicaciones en la ruta de decisión las hace más fieles que las justificaciones a posteriori; no las hace correctas.

## Enseñar la explicabilidad como práctica de rendición de cuentas

Si la calidad de la explicación decide si la XAI es útil, entonces producir explicaciones tiene que enseñarse como un hábito profesional y no demostrarse como una capacidad. [[lund-socially-accountable-data-science-xai-2026|Lund y sus colegas (2026)]] proponen hacerlo en torno a cuatro pilares: **capacidad de respuesta** (la obligación de dar razones a quienes se ven afectados), **responsabilidad** (el daño anticipado a lo largo del ciclo de vida y no defendido a posteriori), **exigibilidad** (consecuencias dentro del curso) y **reflexividad** (examen documentado de los propios supuestos), cada uno con sus propias tareas y su propio costo en el aula.

Para la explicabilidad en concreto, las tareas que importan son las que obligan a sacar la explicación del cuaderno: tarjetas de modelo calificadas y ponderadas junto a las métricas de exactitud, y auditorías de explicación estructuradas en las que los estudiantes aplican herramientas de interpretabilidad a sus propios modelos y luego presentan los resultados a una audiencia sin formación técnica compartida. La exigibilidad es el pilar que más a menudo falta en los cursos cercanos a la ética y el que hace que los demás sean algo más que simbólico: rúbricas que recompensan la documentación responsable, proyectos que pueden devolverse para revisión por razones [[ethics|éticas]] y [[peer-assessment|revisión entre iguales]] realizada contra criterios de rendición de cuentas y no solo técnicos. El artículo es franco en que las herramientas difieren mucho en costo: las tarjetas de modelo y las declaraciones de posicionalidad no necesitan software nuevo y solo arriesgan un cumplimiento superficial, mientras que los paneles de iguales y la participación de las partes interesadas requieren coordinación y adhesión institucional, y por eso recomienda una adopción por etapas y no un compromiso de todo o nada. Véase [[curriculum-design]] para ver dónde encajan en un programa.

## Concepciones erróneas comunes

- **"Las citas hacen fiable una explicación."** Las citas se comportan como una **señal de credibilidad y no como evidencia de corrección**: adjuntar citas y señales de autoridad a una interfaz de debate **elevó el abandono de un juicio correcto en favor de la posición de la IA del 15,0% al 31,8%**. La procedencia hizo más persuasiva la respuesta equivocada, que es lo contrario del efecto buscado.
- **"Una explicación que satisface a los usuarios ha explicado el sistema."** El mismo fallo de legibilidad aparece en el lado de la seguridad de la [[automated-assessment|evaluación automatizada]]: [[humble-prompt-injection-ai-grading-red-team-2026|el red team de Humble (2026)]] encontró que un flujo de calificación cotidiano podía manipularse con instrucciones inyectadas. Una narrativa plausible y una auditable son artefactos distintos.
- **"La práctica general de XAI se traslada a la educación."** El [[xai-education-framework|marco XAI-ED]] (Khosravi et al., 2022) insiste en que la educación tiene **necesidades de explicabilidad distintivas** más allá de la XAI general, porque la audiencia incluye estudiantes que deben actuar sobre la explicación y no auditores que deben certificarla.
- **"La fidelidad es una propiedad que se puede afirmar sin sondearla."** La fidelidad medida requiere la **eliminación contrafactual de tramos críticos de la rúbrica** junto con valoraciones humanas. Que la alineación entre atención y rúbrica alcance el **78,0% frente al 41,7% de GPT-4 en zero-shot y el 32,1% de BERT** es un resultado comparativo de ese tipo de sondeo, no de una afirmación sobre interpretabilidad.

## Cita

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.

## Conceptos conectados

- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## Artículos conectados

- [[lund-socially-accountable-data-science-xai-2026]] — Un marco de cuatro pilares (capacidad de respuesta, responsabilidad, exigibilidad, reflexividad) para enseñar la XAI como práctica de rendición de cuentas (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Diseño sensible a los valores de un ITS centrado en el estudiante (explicaciones colaborativas frente a explicaciones brutas)
- [[xai-education-framework]] — XAI-ED: el marco fundacional de la IA explicable en educación (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Las explicaciones específicas del dominio construyen la confianza y la aceptación de los docentes (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Perspectivas del estudiantado sobre la evaluación asistida por IA transparente (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Rastreo del conocimiento interpretable
- [[explainable-probabilistic-kt]] — Rastreo del conocimiento explicable mediante incrustaciones probabilísticas
- [[neural-symbolic-knowledge-tracing]] — Rastreo del conocimiento neurosimbólico
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilar modelos de caja negra en modelos de lenguaje autoexplicativos para la analítica del aprendizaje
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analítica del aprendizaje federada y explicable para un modelado de riesgo que preserva la privacidad
- [[sc2r-counterfactual-recourse-educational-2026]] — Recurso contrafactual con restricciones semánticas para el apoyo a la decisión educativa
- [[fair-explainable-edu-recommendations]] — Recomendaciones educativas justas y explicables
- [[multimodal-affective-its-presentation]] — ITS de bucle cerrado interpretable para retroalimentación afectiva multimodal
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explicar la adopción de ChatGPT en la educación superior
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Marco LLM explicable por diseño: atención de doble lente y explicaciones parametrizadas por la puntuación para la evaluación docente automatizada (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Inyección de prompt en la calificación mediada por IA, donde la detección nunca se comunicó al usuario (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de preguntas educativas novedosas asistidas por IA

- [[decision-making-agent-student-decision-acceptance-2026]] — Decisiones de calificación tomadas por docentes frente a las tomadas por la IA: una justificación escrita amplió la brecha de justicia
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Las citas y las señales de autoridad elevaron la deferencia hacia salidas incorrectas, con algunas referencias mal atribuidas o ficticias
