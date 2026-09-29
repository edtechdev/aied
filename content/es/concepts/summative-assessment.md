---
title: Evaluación sumativa
created: "2026-09-28T19:11:07-04:00"
updated: "2026-09-28T21:41:14-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-09-28T21:41:14-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La evaluación sumativa** — la evaluación que se usa para valorar y certificar lo que quien aprende ha aprendido al final de una unidad, un curso o un programa, en contraste con la [[formative-assessment|evaluación formativa]], que apoya el aprendizaje durante la enseñanza. La evaluación sumativa suele adoptar la forma de exámenes de alto riesgo —escritos, orales, supervisados o con libros cerrados— que asignan notas, condicionan la progresión y certifican la competencia. En la era de la IA, la evaluación sumativa se ha convertido en un campo de batalla central en torno a la [[academic-integrity|integridad académica]] y la validez: la [[generative-ai|IA generativa]] puede inflar el rendimiento en tareas no supervisadas o para hacer en casa, lo que convierte la elección del formato sumativo —y su resistencia a la sustitución por IA— en una decisión de diseño fundamental.

## Preguntas para reflexionar

- La evaluación sumativa certifica lo que el estudiantado ha aprendido al final de un curso, mientras que la evaluación formativa apoya el aprendizaje durante el curso. ¿Dónde ha visto difuminarse la línea entre ambas, y por qué puede importar que cumplan funciones distintas?
- La página enmarca la IA generativa como una fuerza que remodela la evaluación sumativa en dos direcciones a la vez: la IA puntúa exámenes y el estudiantado usa la IA para eludir la medición basada en exámenes. ¿Cuál de estas dos presiones cree usted que es la mayor amenaza para la validez, y por qué?
- Si las tareas no supervisadas o para hacer en casa pierden validez porque la IA puede producir las respuestas, ¿qué implica eso para cómo deberían diseñarse las evaluaciones, y qué podría sacrificarse en el proceso?
- La [[research-methods-aied|investigación]] citada en la página encuentra que los LLM no califican los ensayos como lo hacen las personas. Si la puntuación automatizada es rápida y consistente pero califica de otra manera, ¿es un problema de [[bias-mitigation|equidad]], una oportunidad o ambas cosas?
- ¿Qué significa un resultado de alto riesgo (una nota, una credencial, la admisión) si el trabajo que hay detrás podría haber sido producido por IA? ¿Cómo diseñaría usted una evaluación en la que pudiera confiar de verdad?

## Introducción

La evaluación sumativa cumple una función fundamentalmente distinta de la evaluación formativa: mide y certifica el logro en lugar de orientar los siguientes pasos. Incluye pruebas de final de unidad, exámenes finales, pruebas estandarizadas y de alto riesgo (por ejemplo, exámenes de admisión), defensas orales y evaluaciones acumulativas del desempeño. Como los resultados sumativos conllevan consecuencias reales (notas, progresión, credenciales, admisión a la universidad), afrontan presiones particulares en la era de la IA, tanto como *objetivos* de la puntuación automatizada como en calidad de medidas *vulnerables* que el estudiantado puede intentar burlar con IA generativa.

## Lo que está en juego en la era de la IA: validez e integridad

La investigación de la base de conocimiento documenta cómo la IA generativa ha remodelado de raíz el panorama de la evaluación sumativa en dos direcciones: la IA se usa para **puntuar** exámenes a escala, y el estudiantado puede usar la IA para **eludir** la medición basada en exámenes de su propio aprendizaje.

- **La IA como puntuadora.** La evaluación sumativa depende cada vez más de la [[automated-assessment|puntuación automatizada]] de exámenes, ensayos y respuestas breves. La [[llms-do-not-grade-essays-like-humans-2026|investigación sobre la calificación de ensayos con LLM]] encuentra que los [[llm|LLM]] no califican los ensayos como lo hacen las personas, lo que plantea cuestiones de validez y equidad para la puntuación automatizada de alto riesgo. Los [[llm-automated-assessment-student-self-explanations|LLM que evalúan las autoexplicaciones del estudiantado]] y la [[cong-confidence-asag-2026|calificación automática de respuestas breves]] exploran la fiabilidad de la puntuación con LLM en contextos sumativos, mientras que los [[psyscore-essay-scoring-zpd-feedback|marcos con conciencia psicométrica]] buscan que la puntuación automatizada siga siendo fiable y adaptativa. Un examen manuscrito de química general con 296 estudiantes ilustra por qué se requiere una supervisión selectiva: la concordancia de la puntuación total de un LLM multimodal con la calificación de los ayudantes fue alta (R² = 0,91), pero la fiabilidad a nivel de ítem varió mucho según el formato, y los falsos positivos (la IA que da por buenas respuestas realmente incorrectas) tienden a pasar desapercibidos porque el estudiantado rara vez los impugna, así que un puntuador de IA uniforme que «califique todo» no es defendible para un uso de alto riesgo sin una deferencia basada en la confianza hacia las personas ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **La IA como evasión.** Como la IA generativa puede producir respuestas a preguntas escritas, las tareas sumativas no supervisadas y para hacer en casa pierden validez: [[generative-ai-reduced-study-time-math|las medidas supervisadas y sin asistencia son esenciales]] porque la IA infla el rendimiento no supervisado, y las [[generative-ai-guardrails-harm-learning|herramientas con barreras de protección (que dan pistas y no respuestas)]] pueden eliminar la penalización en el examen que causa la IA sin barreras. El cuasiexperimento de [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] sobre más de 500.000 notas concreta el mecanismo: tras el lanzamiento de ChatGPT, los cursos con más tareas expuestas a la IA vieron subir la proporción de notas A en 13 puntos porcentuales, y el efecto se concentró en los **cursos con mucha carga de deberes** (16 puntos porcentuales adicionales en la estimación de triples diferencias), evidencia directa de que es en los deberes no supervisados, y no en [[learning-gains|ganancias de aprendizaje]] genuinas, donde la IA infla los resultados sumativos.
- **Exámenes generados por IA.** [[assessing-quality-ai-generated-exams-field-2025|Un estudio de campo a gran escala]] y la [[ai-vs-human-assessment-efl-tpck-2026|investigación sobre la evaluación de inglés como lengua extranjera]] examinan si la IA puede *generar* exámenes y tareas de evaluación de alta calidad: un uso emergente de la IA en el diseño sumativo.

## Formatos sumativos resistentes a la IA

Un tema clave de la base de conocimiento es que **el formato sumativo determina la resistencia a la IA**: cuanto más exige una tarea un desempeño en vivo, presencial e indagado individualmente, más difícil le resulta al estudiantado sustituir con IA su propio aprendizaje.

- **Exámenes y evaluaciones orales.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] sostiene que el examen oral es un formato sumativo de baja tecnología e intrínsecamente resistente a la IA: su diálogo interactivo en tiempo real evalúa la comprensión, el [[critical-thinking|pensamiento crítico]] y el razonamiento en lugar de la memorización, impide que el estudiantado use la IA para generar y memorizar respuestas, y refleja la práctica profesional. Las [[socratic-tests-conversational-assessment|pruebas socráticas]] y las [[code-review-genai-cs1|entrevistas de revisión de código]] amplían esto a una evaluación sumativa dinámica, conversacional y basada en entrevistas.
- **Medidas con libros cerrados, supervisadas y sin asistencia.** La [[generative-ai-reduced-study-time-math|evidencia]] y los [[stromberg-generative-ai-learning-penalty-secondary-2026|datos de campo a gran escala]] muestran que los exámenes supervisados y con libros cerrados —y no los deberes inflados o el trabajo para hacer en casa— son la señal fiable del aprendizaje real cuando el estudiantado usa IA. Los marcos de [[responsible-assessment-ai-era-stanford-2026|evaluación responsable]] integran estas medidas sin asistencia en un rediseño guiado por la validez. Cuando los exámenes siguen siendo en línea, la [[remote-proctoring|supervisión remota]] asume ese papel, y las dos revisiones del corpus sobre supervisión automatizada encuentran preocupaciones de privacidad y [[bias-mitigation|equidad]] junto a mejoras en la detección ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

## Evaluación sumativa de alto riesgo y estandarizada

La evaluación sumativa de alto riesgo —exámenes de admisión, pruebas estandarizadas y certificación— conlleva consecuencias desproporcionadas y es un foco de preocupación en la era de la IA. [[stromberg-generative-ai-learning-penalty-secondary-2026|El estudio sobre la penalización de aprendizaje de la IA generativa]] midió los resultados en los exámenes de admisión de secundaria (Zhongkao) y de acceso a la universidad (Gaokao), y encontró que las puntuaciones de admisión cayeron entre un 18% y un 24% tras un uso prolongado de la IA. [[brcic-effortless-trap-productive-struggle-2026|La trampa sin esfuerzo]] y la [[genai-performance-vs-learning|investigación sobre rendimiento frente a aprendizaje]] advierten de que las ganancias en tareas asistidas por IA no se transfieren a las medidas de alto riesgo sin asistencia.

## Sumativa frente a formativa en la era de la IA

La literatura sobre evaluación de la base de conocimiento insiste en que la [[assessment|evaluación]] es más eficaz cuando combina funciones [[formative-assessment|formativas]] y sumativas, pero la era de la IA agudiza la distinción. Como la IA infla el rendimiento en tareas de bajo riesgo, no supervisadas y con el proceso oculto, las **medidas sumativas (especialmente las supervisadas, con libros cerrados y presenciales) se convierten en la comprobación crucial** de si el aprendizaje se produjo de verdad. Esto motiva un rediseño de la evaluación que mantenga tareas sumativas auténticas y resistentes a la IA (exámenes orales, entrevistas de revisión de código, exámenes supervisados, [[eportfolio|portafolios]] basados en el proceso) como ancla de la [[academic-integrity|integridad]], a la vez que usa la evaluación formativa para apoyar el aprendizaje por el camino. Véase [[authentic-assessment|evaluación auténtica]] para la respuesta de diseño constructiva.

## Implicaciones para la IA en la educación

- **El formato sumativo es una palanca de validez e integridad:** los formatos sumativos resistentes a la IA (orales, supervisados, con libros cerrados, presenciales) preservan la conexión entre el desempeño evaluado y el aprendizaje real.
- **Las medidas supervisadas y sin asistencia son la señal fiable:** cuando el estudiantado usa IA, los exámenes sumativos sin asistencia —y no los deberes— revelan el aprendizaje genuino.
- **La puntuación automatizada necesita escrutinio psicométrico:** usar LLM para calificar exámenes de alto riesgo exige evaluar la fiabilidad, la equidad y la validez, y no solo la exactitud.
- **La IA también puede generar exámenes:** la generación de exámenes y tareas asistida por IA es una aplicación emergente del diseño sumativo que a su vez necesita evaluación de calidad.
- **Replantear el propósito de la calificación, no solo el formato.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais y Galy (2026)]] critican la calificación sumativa tradicional y referida a la norma por fomentar un aprendizaje superficial y fragmentado, dar al estudiantado poco control o transparencia, dañar la [[motivation|motivación]] intrínseca, alimentar el estrés y la [[well-being|ansiedad]] y perpetuar desigualdades, mientras evalúa en gran medida el recuerdo y no la aplicación en el mundo real. Sitúan la reevaluación, la [[mastery-learning|calificación basada en estándares]] y la descalificación como innovaciones centradas en la calificación que pueden suavizar una práctica muy cargada de sumativa, aunque reconocen que siguen siendo marginales en la educación en gestión por barreras normativas —la calificación en curva, la señalización externa (rankings, prácticas, acreditación) y la mentalidad instrumental del estudiantado— y recomiendan una experimentación incremental con apoyo institucional.

## Conceptos conectados

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Artículos conectados

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Replantear los exámenes orales como evaluación sumativa auténtica y resistente a la IA
- [[ivory-psychology-assessment-integrity-2026]] — El 90% de las evaluaciones de psicología se aprueban con un esfuerzo mínimo (Ivory et al. 2026)
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — La penalización de aprendizaje de la IA generativa: evidencia de exámenes supervisados y con libros cerrados
- [[chirikov-ai-grade-inflation-2026]] — El desplazamiento de tareas hacia la IA como mecanismo de inflación de notas; cursos con mucha carga de deberes (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Finalización más rápida, menos aprendizaje: las medidas supervisadas son esenciales
- [[generative-ai-guardrails-harm-learning]] — La IA generativa sin barreras de protección daña el aprendizaje
- [[assessing-quality-ai-generated-exams-field-2025]] — Evaluar la calidad de los exámenes generados por IA
- [[llms-do-not-grade-essays-like-humans-2026]] — Los LLM no califican los ensayos como las personas
- [[llm-automated-assessment-student-self-explanations]] — LLM para la evaluación automatizada de las autoexplicaciones del estudiantado
- [[cong-confidence-asag-2026]] — Calificación automática de respuestas breves
- [[psyscore-essay-scoring-zpd-feedback]] — Puntuación de ensayos adaptativa por rasgo con conciencia psicométrica
- [[socratic-tests-conversational-assessment]] — Pruebas socráticas: evaluación dinámica, conversacional y multimodal
- [[code-review-genai-cs1]] — Entrevistas de revisión de código en CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Evaluación responsable en la era de la IA
- [[test-driven-ai-assisted-learning]] — Aprendizaje asistido por IA guiado por pruebas
- [[genai-oop-programming-assessments-2026]] — Rendimiento de la IA generativa en evaluaciones de programación orientada a objetos
- [[brcic-effortless-trap-productive-struggle-2026]] — La trampa sin esfuerzo: el esfuerzo productivo y la ilusión de aprendizaje
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tareas de evaluación generadas por IA frente a desarrolladas por personas en inglés como lengua extranjera
- [[roe-assessment-twins-2026]] — Gemelos de evaluación para reforzar la validez de la evaluación en la era de la IA generativa (Roe, Perkins y Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — Calificación con IA de evaluaciones manuscritas de física (Olimpiada)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
