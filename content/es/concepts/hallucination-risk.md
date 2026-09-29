---
title: Riesgo de alucinación
created: "2026-09-28T20:16:26-04:00"
updated: "2026-09-28T21:21:51-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-09-28T21:46:01-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Riesgo de alucinación** — el peligro de que los sistemas de IA generen contenido verosímil pero factualmente incorrecto o fabricado en contextos educativos, donde esos errores pueden engañar a quienes [[learners|aprenden]], socavar la [[trust|confianza]] y producir evaluaciones inválidas. La alucinación tiene consecuencias especialmente graves en educación porque el estudiantado puede carecer del conocimiento de dominio necesario para detectar los errores de la IA, y el profesorado puede confiar en diagnósticos o retroalimentaciones generados por IA que parecen autorizados pero carecen de fundamento.

## Preguntas para reflexionar

- El estudiantado a menudo carece del conocimiento de dominio para detectar un error de la IA, y el profesorado puede confiar en diagnósticos de IA que suenan autorizados. ¿Cómo hace esta asimetría de conocimiento entre la IA y quien aprende que la alucinación sea especialmente peligrosa en educación?
- Un estudio encontró que una IA que diagnosticaba matemáticas manuscritas del estudiantado podía fabricar citas de evidencia que no existían, mientras afirmaba confianza. Cuando una IA suena segura y cita «evidencia», ¿qué debería hacerle parar y verificar?
- Si un [[intelligent-tutoring|tutor de IA]] valida en exceso soluciones incorrectas y rechaza en exceso razonamientos válidos pero subóptimos, ¿cuál sería el efecto a largo plazo en el estudiantado y el profesorado que confían en él?
- La página sugiere la revisión humana en el circuito, la calibración de la confianza atenta a la evidencia y el anclaje en fuentes verificadas como mitigaciones. ¿Cuál de ellas parece más viable en su propio contexto, y qué podría seguir sin detectar?
- ¿Cómo podría interactuar la alucinación con la dependencia excesiva: por qué un error de la IA es más peligroso cuando quienes la usan confían en su salida sin sentido crítico que cuando son escépticos?
- Si diseñara una herramienta de [[ai-feedback-quality|retroalimentación con IA]] para su estudiantado, ¿qué salvaguardas concretas exigiría para protegerlo de salidas verosímiles pero erróneas, y cómo sabría que están funcionando?

## Introducción

La alucinación en la IA educativa adopta varias formas documentadas en los artículos de esta base de conocimiento: evidencia fabricada en la [[assessment|evaluación del estudiantado]], sobrediagnóstico seguro del conocimiento de quien aprende, y explicaciones verosímiles pero incorrectas que el estudiantado acepta como verdad. El riesgo se amplifica en educación porque la asimetría de conocimiento entre la IA y quien aprende hace que este último esté mal situado para verificar las salidas de la IA. Otro escenario son las lecturas de curso generadas por IA que sustituyen a un manual: en un curso de posgrado que reemplazó así su texto comercial, solo alrededor del 0,80% de 4.487 páginas registradas llevaba una cita en el texto de estilo APA y las cadenas de DOI eran prácticamente inexistentes, de modo que la mayoría de las afirmaciones no podían auditarse desde dentro del propio artefacto ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Esa brecha de trazabilidad es distinta de una respuesta incorrecta, porque el texto se lee como autorizado mientras ofrece medios internos limitados de confirmación.

**La alucinación en la evaluación** es especialmente dañina. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** encontró que los LLM fabrican citas de evidencia que no están presentes en la escritura manuscrita del estudiantado al diagnosticar habilidades cognitivas, con un 58,5% de diagnósticos incorrectos acompañados de afirmaciones falsas de confianza probatoria. **[[llm-fallacy-misattribution|El trabajo sobre la atribución errónea de falacias]]** documentó una sobreatribución sistemática de evidencia en el razonamiento de los [[llm|LLM]]: los modelos afirman un respaldo probatorio donde no existe. Ambos conectan con las preocupaciones de [[ai-ed-evaluation|evaluación educativa con IA]] y [[knowledge-tracing|traza de conocimiento]] sobre la [[assessment-validity|validez de la evaluación]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] añaden dos modos de fallo visibles cuando la salida de la IA se califica en lugar de inspeccionarse: particularidades fabricadas que sobreviven a la calificación —un artículo revisado que no existe, con un DOI irresoluble, y un tamaño de muestra reportado como 378 cuando la fuente decía 329— y autocontradicción dentro de una misma respuesta, donde el modelo razonó hasta la opción correcta y luego informó de otra distinta en su resumen final. Como las listas de referencias se califican actualmente por su formato y no por su exactitud, esta clase de error alcanza una nota de aprobado mientras engaña al estudiante que usa la misma herramienta para revisar.

**Las [[misconceptions|ideas erróneas]] estratégicas** son un pariente más sutil de la alucinación manifiesta. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] pidieron a siete modelos de pesos abiertos que produjeran una «trampa [[socratic-method|socrática]]» para 35 conceptos centrales de informática —una explicación fluida y autorizada que se apoya en un error sutil y específico del dominio— y tres especialistas del dominio confirmaron 221 de 241 segmentos inducidos (91,7%) como ideas erróneas estratégicas, sin diferencias significativas entre las áreas de la informática. Los errores fueron predominantemente conceptuales y no factuales (66,5% frente a 33,5%) y ninguno fue puramente lógico, y se valoraron como moderada o altamente persuasivos (M = 3,71 en una escala de cinco puntos), con la identidad del modelo explicando el 43% de la varianza. Como las afirmaciones individuales pueden ser correctas mientras la relación entre ellas es errónea, la verificación de datos es insuficiente; los autores sostienen que quienes [[ai-literacy|aprenden]] necesitan verificación conceptual y validación de modelos mentales. También advierten de que la tasa mide la capacidad bajo [[prompt-engineering|prompting]] adversario y no la prevalencia de tales errores en el uso ordinario, y de que no se evaluó a ningún estudiante, así que no se midió ningún engaño ni resultado de aprendizaje.

**Evidencia manipulada en lugar de fabricada.** Un modo de fallo relacionado en la [[automated-assessment|calificación automatizada]] es la salida movida desde fuera. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] hizo un ejercicio de equipo rojo sobre un flujo de trabajo rutinario de calificación con IA y encontró que instrucciones ocultas dentro del archivo entregado elevaron la nota de un ensayo suspenso sin ninguna advertencia visible en 9 de 9 iteraciones para una estrategia y en 17 de 18 para otra. Dos detalles inciden en la [[trust-calibration|calibración de la confianza]]: una inyección detectada se bloqueó desactivando el chat en silencio y nunca se informó a la persona usuaria, y en una ejecución en la que la herramienta anunció que seguiría solo las instrucciones oficiales de la tarea, seis repeticiones del mismo archivo siguieron subiendo la nota. Una nota obtenida así no conlleva ninguna pretensión de [[assessment-validity|validez]], y como la manipulación no deja rastro duradero, quien [[human-in-the-loop-ai|está en el circuito]] sigue siendo el único control real sobre una salida diseñada para no ser visible.

**Alucinación en la tutoría** afecta directamente al aprendizaje. **[[yasir-llm-tutoring-agents-2026|El estudio sobre agentes de tutoría con LLM]]** encontró que los LLM validaban en exceso soluciones incorrectas mientras rechazaban en exceso razonamientos válidos pero subóptimos, fallos sistémicos que engañarían tanto al estudiantado como al profesorado. **[[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]]** y **[[eduguard-safe-rag-llm-tutor|EduGuard]]** abordan mecanismos de seguridad para LLM educativos. Estos riesgos conectan con los requisitos de [[pedagogical-safety|seguridad pedagógica]] y de [[human-in-the-loop-ai|humano en el circuito]].

**Los enfoques de mitigación** incluyen diseños de [[human-in-the-loop-ai|humano en el circuito]] en los que la IA apoya en lugar de sustituir el juicio [[teacher-role|docente]], arquitecturas atentas a la evidencia que calibran la confianza según la calidad probatoria (como defiende MathCog), y anclaje basado en [[rag|generación aumentada por recuperación]] que restringe las salidas de los LLM a fuentes verificadas. El concepto de [[cognitive-offloading|dependencia excesiva]] está estrechamente relacionado: la alucinación es más peligrosa cuando quienes usan la IA confían en sus salidas sin sentido crítico. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] añade un modo de fallo que el conjunto de mitigaciones no cubre del todo: afirmaciones institucionales demasiado específicas, con aproximadamente el 1,03% de las páginas registradas que emparejan un campus con nombre, como «Sacramento State», con verbos de política asertivos sobre normas revisadas de permanencia, titularidad y promoción u órdenes ejecutivas de la CSU, ninguna de ellas verificable desde el texto. La especificidad es lo que hace costoso este fallo, ya que un detalle local fabricado parece lo bastante exacto para superar la comprobación de verosimilitud de quien lee, y el remedio que propone el estudio es procedimental y no técnico: tratar la generación como producción de borradores bajo revisión docente y luego curar las fuentes en un diseño aumentado por recuperación.

## Conceptos conectados

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Artículos conectados
- [[ivory-psychology-assessment-integrity-2026]] — Citas fabricadas y salidas autocontradictorias dentro de trabajo estudiantil aprobable (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: explicaciones fluidamente verosímiles que son erróneas en el plano conceptual (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Inyecciones de prompt ocultas suben las notas calificadas por IA sin ser detectadas, y los ataques detectados no se reportan (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Diseñar evaluaciones auténticas con IA generativa: un estudio piloto de Assessment Authentifire en educación superior
- [[mental-health-literacy-students-llms-2026]] — Alfabetización en salud mental en estudiantes de psicología y modelos de lenguaje grandes
