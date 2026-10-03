---
title: IA explicable
created: "2026-09-28T19:10:33-04:00"
updated: "2026-10-02T21:24:48-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La IA explicable (XAI) en educación** es el diseño y el estudio de hacer legibles las decisiones de un sistema de IA para sus partes interesadas educativas — [[learners|quienes aprenden]], el profesorado, [[administrator|quienes administran]], [[parents-and-families|las familias]], el personal investigador y [[stakeholders|quienes elaboran políticas]]. La distinción central en la que insiste el campo es esta: explicar la **materia de estudio** (por qué un hecho es verdadero) no es lo mismo que explicar la **decisión de un sistema de IA** (por qué a esta persona que aprende se le asignó esta actividad, por qué se marcó esta respuesta como incorrecta, qué evidencia respalda una predicción de riesgo). La educación aporta necesidades de explicabilidad distintivas — datos de aprendizaje ruidosos, explicaciones que pueden apoyar directamente la [[metacognition|metacognición]] y el [[self-regulated-learning|aprendizaje autorregulado]], y partes interesadas que requieren tipos de explicación fundamentalmente distintos. La pregunta de diseño operativa es la **calidad de la explicación**, y no la mera disponibilidad de explicaciones: una explicación que está técnicamente presente pero es ilegible, engañosa o está desalineada con su audiencia puede hacer más daño que ninguna explicación.

## Preguntas para reflexionar

- Cuando un [[intelligent-tutoring|tutor de IA]] te dice por qué te dio una pista, ¿está explicando la *materia de estudio* o la *decisión del sistema*? ¿Puedes nombrar tres ejemplos de cada cosa en tu propio uso de la IA educativa?
- ¿Quién necesita explicaciones en educación, y necesitan el *mismo* tipo quienes aprenden, el profesorado y quienes elaboran políticas? ¿Para qué usaría cada uno una explicación?
- Una IA marca a un estudiante como en riesgo de abandono. ¿Qué necesita saber un [[teacher-role|docente]] para actuar en consecuencia, frente a lo que necesita saber el estudiante? ¿Es apropiada la misma explicación para ambos?
- La página sostiene que la *calidad* de la explicación importa más que su *disponibilidad*. ¿Qué hace que una explicación técnicamente presente fracase? ¿Puedes recordar alguna vez en que la explicación estaba ahí pero era inútil o, peor, engañosa?
- La [[trust-calibration|confianza]] y la explicación están vinculadas, pero no son idénticas. ¿Por qué una explicación fluida y segura de sí misma podría crear una confianza *falsa* en un sistema defectuoso, y cómo detectarías que eso está ocurriendo?

## Introducción

La [[ai-education|IA explicable en educación]] nombra la expectativa creciente de que los sistemas de IA en las aulas no sean cajas negras. Como la IA en educación afecta a decisiones trascendentales — calificaciones, alertas de riesgo, [[recommender-systems-and-learning-paths|rutas de aprendizaje]], recomendaciones de recursos —, las partes interesadas exigen cada vez más saber no solo *qué* concluyó el sistema, sino *por qué*. La educación afina esto en dos preguntas distintas: explicar la materia de estudio que se aprende y explicar la toma de decisiones del propio sistema de IA. Confundirlas es un error de categoría con consecuencias prácticas: una IA que explica perfectamente una respuesta de [[physics-education|física]] sigue sin dar al estudiantado ni al profesorado ninguna idea de por qué el *sistema* lo clasificó como en riesgo, le recomendó cierta actividad o marcó una respuesta como incorrecta.

## Explicar la materia de estudio frente a explicar la decisión del sistema

La contribución fundacional del campo — el [[xai-education-framework|marco XAI-ED]] (Khosravi et al., 2022) — insiste en que la educación tiene necesidades de explicabilidad *distintivas* más allá de la XAI de propósito general. La principal de ellas es la separación entre dos objetos de explicación:

- **Explicaciones de la materia de estudio:** aclaran el *contenido*: por qué una pista aborda una [[misconceptions|idea errónea]], por qué una respuesta es incorrecta, cómo un resultado de física se sigue de sus principios. Son explicaciones [[pedagogy|pedagógicas]] que sostienen el [[scaffolding|andamiaje]], la [[feedback|retroalimentación]] y la [[metacognition|metacognición]].
- **Explicaciones de la decisión del sistema:** aclaran *el modelo*: por qué a esta persona que aprende se le asignó esta actividad, por qué el sistema predice que este estudiante está en riesgo, qué evidencia respalda una predicción de trazado de conocimiento o de [[learning-analytics|analítica del aprendizaje]]. Son explicaciones de transparencia que sostienen la [[trust-calibration|calibración de la confianza]], la [[bias-mitigation|mitigación del sesgo]] y la rendición de cuentas.

La distinción importa porque sirven a partes interesadas distintas y a propósitos distintos. Quien aprende y pregunta «¿por qué está mal esto?» necesita sobre todo la explicación de la *materia de estudio*; un docente que decide si actuar ante una alerta de riesgo, o quien elabora políticas y audita en busca de sesgo, necesita la explicación de la *decisión del sistema*. Diseñar una única explicación que sirva a ambos es rara vez posible, y por eso el diseño para múltiples partes interesadas es un tema central del XAI-ED.

## Quién necesita explicaciones: diseño para múltiples partes interesadas

- **Quienes aprenden** necesitan explicaciones que sostengan su propio aprendizaje y su autorregulación: por qué se dio una pista, por qué se marcó su respuesta como incorrecta, por qué se recomienda este recurso (apoyando el [[self-regulated-learning|aprendizaje autorregulado]]). La [[student-perspectives-ai-writing-grading-2026|evidencia sobre la perspectiva del estudiantado]] muestra que quienes aprenden trazan una línea tajante entre aceptar la *retroalimentación* de la IA (útil para revisar) y cederle la *autoridad de calificar* (reservada al docente humano): una postura calibrada y ajustada a la función, que se activa con la transparencia sobre la participación de la IA. [[ko-hughes-vsd-student-centered-its-2026|El trabajo de diseño sensible a los valores con estudiantado de colegios comunitarios]] afina el punto: el estudiantado prefería explicaciones *colaborativas y humanizadas* (por ejemplo, «la IA puede estar insegura aquí, así que comprobémoslo juntos») a la confianza bruta del modelo o a la transparencia técnica, porque la transparencia por sí sola tiene poco valor si no sostiene directamente su aprendizaje. El estudio sacó a la luz una tensión entre transparencia e interpretabilidad que empuja el diseño de explicaciones hacia una semántica dirigida a quien aprende y no hacia una salida de importancia de características.
- **El profesorado** necesita explicaciones que informen la intervención: qué estudiantes están en riesgo y *por qué*, sobre qué evidencia. [[xai-teachers-trust-edtech-recommendations-2026|Los estudios de explicabilidad con docentes]] muestran que las explicaciones [[discipline-specific-aied|específicas del dominio]] y formuladas en el lenguaje del [[curriculum-design|currículo]] generan aceptación y confianza calibrada de forma más eficaz que las explicaciones genéricas de importancia de características; aun así, el profesorado quiere experiencia real de aula antes de confiar plenamente: la explicación por sí sola no confiere [[trust-calibration|calibración]].
- **El personal de desarrollo e investigación** necesita explicaciones para depurar el comportamiento del modelo y detectar [[bias-mitigation|sesgo]], sacando a la luz qué características impulsan las predicciones.
- **Quienes administran y elaboran políticas** necesitan explicaciones para la rendición de cuentas, la [[privacy|privacidad]] y el cumplimiento de la [[regulation|regulación]] (por ejemplo, el derecho a la explicación), y para auditar si las decisiones impulsadas por IA son justas y [[equity-in-ai-education|equitativas]].

## Enfoques y formatos

El marco XAI-ED cataloga las principales modalidades de explicación: **visual** (mapas de calor, árboles de decisión), **textual** (justificaciones en lenguaje natural), **basada en ejemplos** (contrafactuales, vecinos más cercanos), clasificaciones de **importancia de características**, **extracción de reglas** y **simplificación de modelos**. También mapea los enfoques según las clases de modelo:

- Los modelos de **caja blanca** (árboles de decisión, modelos lineales, basados en reglas) son intrínsecamente interpretables.
- Los modelos de **caja negra** ([[machine-learning|redes neuronales]], conjuntos) requieren métodos de explicación a posteriori.
- Los enfoques de **caja de cristal** intentan equilibrar la precisión con la transparencia.

La base de evidencia concreta del AIED abarca todos ellos. El **[[knowledge-tracing|trazado de conocimiento]] interpretable** hace que los modelos de conocimiento de quien aprende sean inspeccionables directamente ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). Los **sustitutos autoexplicativos** destilan un modelo de caja negra en un [[llm|modelo de lenguaje]] pequeño e interpretable para la [[learning-analytics|analítica del aprendizaje]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). Las **explicaciones contrafactuales** — «qué tendría que cambiar para obtener un resultado distinto» — sostienen el apoyo a la decisión educativa y el recurso ([[sc2r-counterfactual-recourse-educational-2026]]). La **analítica del aprendizaje federada y explicable** muestra que la calidad de la explicación puede desviarse (la calibración se degrada) incluso cuando se mantiene la estabilidad del orden, lo que subraya que las explicaciones no son una propiedad fija sino una salida del sistema que hay que medir ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Y los **ITS [[affective-computing|afectivos]] interpretables** demuestran la explicación en la tutoría [[affective-tutoring|consciente de las emociones]] ([[multimodal-affective-its-presentation]]).

## Calidad de la explicación, no disponibilidad

Una lección recurrente en toda la evidencia: **tener una explicación no basta**; la explicación debe ser la adecuada para su audiencia, precisa y calibrada a lo que está en juego. El marco XAI-ED nombra explícitamente sus trampas:

- **Sobrecarga de explicaciones** — demasiada información desborda a la persona usuaria y anula el beneficio.
- **Explicaciones engañosas** — las explicaciones a posteriori pueden no reflejar el razonamiento real del modelo, lo que genera una confianza falsa.
- **Sesgo de confirmación** — las personas usuarias atienden de forma selectiva a las explicaciones que confirman sus creencias previas.
- **Exceso de confianza** — las explicaciones fluidas pueden crear una confianza falsa en sistemas defectuosos, alimentando la [[cognitive-offloading|dependencia excesiva]] (el reverso de la [[trust-calibration|calibración de la confianza]]).
- **Jugar con el sistema** — el estudiantado puede explotar las explicaciones para eludir el aprendizaje real.

La calidad de la explicación tiene también una dimensión de equidad: una explicación que está técnicamente presente pero es ilegible para una parte interesada concreta — o que oculta el [[bias-mitigation|sesgo]] de una predicción — fracasa en su propósito. Por eso la pregunta de diseño es la *calidad y la adecuación*, y por eso el diseño de explicaciones centrado en las personas y específico para cada parte interesada es inseparable de la generación técnica de explicaciones. Una XAI eficaz es un acto de comunicación diseñado para las necesidades cognitivas de quien lo recibe, y no un mero artefacto técnico.

La explicación no siempre nivela. En un experimento de viñetas 2 × 2 con 250 estudiantes de séptimo curso, una justificación escrita de una puntuación de matemáticas elevó la aceptación y la equidad percibida en ambas condiciones, pero amplió en lugar de cerrar la brecha entre las decisiones tomadas por el [[teacher-role|docente]] y las tomadas por la IA ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Dos cautelas afinan esto aún más, y la contribución más reciente de este wiki sobre el tema las hace centrales. En primer lugar, la maquinaria de explicación no es neutral en sí misma: métodos a posteriori como LIME y SHAP pueden ser infieles al comportamiento real del modelo, de modo que una explicación técnicamente presente puede engañar en lugar de informar ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], a partir de Chuan et al. 2024). En segundo lugar, **explicación no es rendición de cuentas**. Un relato de qué características impulsaron una predicción no revela si esas características eran apropiadas de usar, si los datos de entrenamiento eran representativos ni si el diseño del sistema reflejaba un juicio sólido; las explicaciones pueden crear la apariencia de transparencia mientras dejan intactas las condiciones estructurales que produjeron la decisión (Mittelstadt et al. 2019). Para la educación esto significa que la pregunta que hay que seguir haciendo no es si se produjo una explicación, sino si la persona que la recibe — un estudiante, un docente, un asesor — podía entenderla, actuar a partir de ella o impugnar la decisión que hay detrás. El mismo fallo de legibilidad aparece en el lado de seguridad de la [[automated-assessment|evaluación automatizada]]: [[humble-prompt-injection-ai-grading-red-team-2026|el equipo rojo de Humble (2026) sobre una herramienta de calificación con IA]] encontró que esta desactivaba silenciosamente el chat tras bloquear una inyección de prompts y que — después de anunciar que nunca seguiría instrucciones incrustadas — las siguió en seis ejecuciones más sobre el mismo archivo, sin dejar a la persona usuaria ninguna señal fiable en la que basar su confianza.

**Explicable por diseño** es una respuesta al problema de la fidelidad a posteriori. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang y Fang (2025)]] parametrizan un decodificador de explicaciones con la misma representación fusionada y la misma puntuación predicha que deciden la [[assessment|evaluación]], de modo que una puntuación baja en el cuestionamiento [[formative-assessment|formativo]] produce una justificación que nombra preguntas de sondeo insuficientes, y lo acompañan de una atención de doble lente sobre los estándares curriculares y los movimientos de rúbrica específicos de la materia. La alineación atención-rúbrica alcanza el 78.0% frente al 41.7% de GPT-4 en cero disparos y el 32.1% de BERT, y la fidelidad se sondea mediante eliminación contrafactual de fragmentos críticos para la rúbrica junto con valoraciones humanas sobre una lista de comprobación anclada en la rúbrica, lo que da una puntuación de credibilidad de la explicación de 0.78: un aumento de 0.31 sobre BERT-base. La auditoría muestra además dónde se adelgaza la afirmación arquitectónica: ante señales emocionales el modelo asigna el 28.4% del peso de atención frente al 15.2% de un experto (alineación 0.53), con un caso de fallo que asigna el 28% al token «frustrated», que los autores leen como sobreajuste al afecto más que a la pedagogía y señalan como área de refinamiento. Incrustar las explicaciones en la ruta de decisión las hace más fieles que las justificaciones a posteriori; no las hace correctas.

## Enseñar la explicabilidad como práctica de rendición de cuentas

Si la calidad de la explicación decide si la XAI es útil, entonces producir explicaciones tiene que enseñarse como un hábito profesional y no demostrarse como una capacidad. [[lund-socially-accountable-data-science-xai-2026|Lund y sus colegas (2026)]] proponen hacerlo a través de cuatro pilares: **capacidad de respuesta** (la obligación de dar razones a quienes se ven afectados), **responsabilidad** (el daño anticipado a lo largo del ciclo de vida, no defendido a posteriori), **aplicación** (consecuencias dentro del curso) y **reflexividad** (examen documentado de los propios supuestos), cada uno con sus propias tareas y su propio coste de aula.

Para la explicabilidad en concreto, las tareas que importan son las que obligan a sacar la explicación del cuaderno: tarjetas de modelo calificadas y ponderadas junto a las métricas de precisión, y auditorías estructuradas de explicaciones en las que el estudiantado aplica herramientas de interpretabilidad a sus propios modelos y luego presenta los resultados a una audiencia sin formación técnica compartida. La aplicación es el pilar que falta con más frecuencia en los cursos afines a la ética y el que hace que el resto sea algo más que simbólico: rúbricas que premian la documentación responsable, proyectos que pueden devolverse para revisión por motivos [[ethics|éticos]] y [[peer-assessment|revisión entre pares]] realizada contra criterios de rendición de cuentas y no solo técnicos. El artículo reconoce con franqueza que las herramientas difieren mucho en coste: las tarjetas de modelo y las declaraciones de posicionalidad no necesitan software nuevo y solo arriesgan un cumplimiento superficial, mientras que los paneles entre pares y la implicación de las partes interesadas exigen coordinación y respaldo institucional, y por eso recomienda una adopción por etapas en lugar de un compromiso de todo o nada. Véase [[curriculum-design|diseño curricular]] para saber dónde encajan en un programa.

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
- [[lund-socially-accountable-data-science-xai-2026]] — Un marco de cuatro pilares (capacidad de respuesta, responsabilidad, aplicación y reflexividad) para enseñar la XAI como práctica de rendición de cuentas (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Diseño sensible a los valores de un ITS centrado en el estudiantado (explicaciones colaborativas frente a explicaciones brutas)
- [[xai-education-framework]] — XAI-ED: el marco fundacional de la IA explicable en educación (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Las explicaciones específicas del dominio construyen la confianza y la aceptación del profesorado (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Perspectivas del estudiantado sobre la evaluación transparente asistida por IA (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Trazado de conocimiento interpretable
- [[explainable-probabilistic-kt]] — Trazado de conocimiento explicable mediante incrustaciones probabilísticas
- [[neural-symbolic-knowledge-tracing]] — Trazado de conocimiento neurosimbólico
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilar modelos de caja negra en modelos de lenguaje autoexplicativos para la analítica del aprendizaje
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analítica del aprendizaje federada y explicable para el modelado de riesgo con preservación de la privacidad
- [[sc2r-counterfactual-recourse-educational-2026]] — Recurso contrafactual con restricciones semánticas para el apoyo a la decisión educativa
- [[fair-explainable-edu-recommendations]] — Recomendaciones educativas justas y explicables
- [[multimodal-affective-its-presentation]] — ITS de bucle cerrado interpretable para la retroalimentación afectiva multimodal
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explicar la adopción de ChatGPT en la educación superior
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Marco de LLM explicable por diseño: atención de doble lente y explicaciones parametrizadas por la puntuación para la evaluación docente automatizada (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Inyección de prompts en la calificación mediada por IA, donde la detección nunca se comunicó a la persona usuaria (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de preguntas educativas novedosas asistidas por IA

- [[decision-making-agent-student-decision-acceptance-2026]] — Decisiones de calificación del docente frente a las tomadas por IA: una justificación escrita amplió la brecha de equidad
