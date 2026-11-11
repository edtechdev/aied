---
title: Aprendizaje basado en casos
created: "2026-11-07T13:00:00-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
translation_of: concepts/case-based-learning
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Síntesis**: El aprendizaje basado en casos enseña a través de casos particulares: una presentación clínica, una disputa jurídica, una decisión empresarial, un episodio de aula o un par de ejemplos contrastantes. El caso aporta el contexto, los hechos y la ambigüedad; el docente diseña las preguntas y la discusión que lo convierten en aprendizaje. El enfoque es una [[pedagogy|pedagogía]] emblemática de la educación jurídica y empresarial, donde el método de casos y el [[socratic-method|interrogatorio socrático]] han organizado durante mucho tiempo el aula, y de la [[medical-education|educación de las profesiones de la salud]], donde los casos clínicos y los pacientes simulados ofrecen práctica controlada. Su mecanismo de aprendizaje se solapa con el [[problem-based-learning|aprendizaje basado en problemas]] y el [[productive-failure|fracaso productivo]], pero no es lo mismo: los casos suelen ser narrativas acotadas con un espacio de problema diseñado, mientras que el aprendizaje basado en problemas parte de un problema mal estructurado que el estudiantado investiga. La nueva evidencia sobre IA es prometedora pero limitada. Un estudio de viabilidad perioperatorio de cinco casos encontró que un [[llm|LLM]] fundamentado respondió adecuadamente al 99,3% (543/547) de las preguntas de las personas en formación y no produjo contenido fabricado. Un estudio de viabilidad en enfermería encontró que [[generative-ai|ChatGPT]] redujo el tiempo de creación de casos de 106 a 71 minutos sin un cambio medible en la calidad de la discusión. Un [[meta-analysis-systematic-review|metaanálisis]] de seis ensayos aleatorizados encontró que el aprendizaje basado en problemas y en casos apoyado por IA mejoró el conocimiento y la satisfacción, pero solo dos ensayos evaluaron el aprendizaje basado en casos y la revisión nunca analizó los formatos por separado. El corpus sigue careciendo de un estudio que aísle la calidad del caso, la facilitación de la discusión y los resultados de aprendizaje en un mismo diseño.

## Preguntas para reflexionar

- ¿Qué hace que un caso sea un caso, y no un problema verbal largo o un relato con un cuestionario adjunto?
- ¿En qué se diferencia el aprendizaje basado en casos del aprendizaje basado en problemas, y por qué importa esa diferencia para el modo en que debería usarse la IA?
- ¿Qué partes de una discusión de casos deberían planificarse de antemano y cuáles deberían quedar al juicio en vivo del docente?
- Cuando la IA genera un caso, ¿qué hay que comprobar antes de que el estudiantado lo vea? Cuando el estudiantado discute un caso con un [[intelligent-tutoring|tutor de IA]], ¿qué hay que proteger?
- ¿Por qué son tan comunes los casos en la educación jurídica y empresarial, y qué perderían esas disciplinas si los casos se sustituyeran por resúmenes o simulaciones?
- ¿Qué evidencia mostraría que la enseñanza basada en casos funciona, y no solo que el estudiantado disfrutó del caso o valoró muy bien la discusión?

## Introducción

Un caso es un particular acotado. Ofrece a quienes aprenden una situación con actores, hechos, restricciones y, por lo general, una decisión o un diagnóstico al que llegar. El caso no lleva su propia lección. La lección proviene de las preguntas que formula el docente, las comparaciones que hacen quienes aprenden y el razonamiento que exteriorizan en la discusión. Por eso la enseñanza basada en casos es una práctica de diseño, y no solo un género de material de lectura.

El término abarca una familia de técnicas. El **aprendizaje basado en casos** suele referirse a casos estructurados que se usan para aplicar conocimientos y desarrollar razonamiento clínico o profesional. El **método de casos** es la tradición jurídica y empresarial de enseñar mediante sentencias judiciales o situaciones de gestión, a menudo con interrogatorio socrático. Los **estudios de caso** pueden significar casos de enseñanza, pero la misma expresión también nombra un [[research-methods-aied|diseño de investigación]]; un estudio de caso de una escuela no es una lección basada en casos. Los **casos contrastantes** agudizan la percepción al pedir a quienes aprenden que comparen dos o más ejemplos que difieren en un rasgo que el docente quiere que noten. La **discusión de casos** es la capa de facilitación que convierte un caso escrito en razonamiento colectivo.

Estas técnicas se solapan con el [[problem-based-learning|aprendizaje basado en problemas]], el [[inquiry-based-learning|aprendizaje basado en la indagación]], la [[simulation|simulación]] y el [[productive-failure|fracaso productivo]], y los límites no siempre son nítidos en la práctica. La distinción que mantiene esta página es funcional: un diseño basado en casos parte de un caso seleccionado o escrito con un propósito de enseñanza, y el docente lo usa para hacer visible una forma particular de razonar.

## Qué se considera aprendizaje basado en casos

La primera distinción es con el aprendizaje basado en problemas. El ABP parte de un problema mal estructurado y pide al estudiantado que identifique lo que necesita aprender, lo investigue y vuelva con una solución. El problema puede ser un caso, pero el rasgo definitorio es la indagación dirigida por quien aprende. El aprendizaje basado en casos suele comenzar con un caso preparado y un conjunto definido de objetivos de aprendizaje; el docente puede conducir el análisis, asignar roles o usar el caso para ilustrar una decisión. El ABP y el aprendizaje basado en casos comparten la facilitación y el contexto, pero distribuyen el control de manera distinta. Eso importa para la IA: una IA que genera un caso apoya un diseño de aprendizaje basado en casos, mientras que una IA que tutoriza al estudiantado a través de un problema abierto se acerca más al ABP.

La segunda distinción es con el estudio de caso como investigación. Un estudio de caso [[qualitative-research|cualitativo]] es un método para estudiar un sistema acotado. Un caso de enseñanza es un artefacto diseñado. La misma palabra aparece en ambos, y el corpus contiene muchos artículos que usan el estudio de caso como método de investigación sin enseñar mediante casos. Una página de concepto tiene que mantener separado el sentido de enseñanza, o el recuento de evidencia se infla.

La tercera distinción es entre formatos de caso. Un caso narrativo completo puede ocupar varias páginas y exigir una preparación sustancial. Una viñeta breve puede caber en una sola clase o en una evaluación. Un conjunto de casos contrastantes empareja deliberadamente ejemplos que difieren en un rasgo objetivo. Un caso simulado puede ser interactivo, con un paciente estandarizado, un [[conversational-ai|chatbot]] o un [[virtual-and-augmented-reality|entorno virtual]] que responde a quien aprende. El formato cambia el trabajo cognitivo: los casos largos exigen síntesis y priorización, las viñetas ponen a prueba el reconocimiento, los casos contrastantes favorecen la discriminación y las simulaciones añaden toma de decisiones en tiempo real.

## Por qué funcionan los casos

Los casos son un puente entre el conocimiento abstracto y el juicio situado. Dan a quienes aprenden un contexto en el que los conceptos tienen consecuencias y hacen visible el [[prior-knowledge|conocimiento previo]]: el estudiantado tiene que notar qué ofrece el caso, qué deja ambiguo y qué principios se aplican. En la educación profesional, ese es el punto. La [[legal-education|educación jurídica]] usa casos y diálogo socrático para enseñar a leer la autoridad, distinguir los fallos y razonar desde el precedente. La [[business-education|educación empresarial]] usa casos para practicar el análisis bajo incertidumbre, a menudo con una decisión que no tiene una única respuesta correcta. La educación de las profesiones de la salud usa casos clínicos para ensayar el diagnóstico, el manejo y la comunicación antes de que haya pacientes reales en riesgo.

El mecanismo no es simplemente «ejemplos del mundo real». Un caso puede ser realista y enseñar muy poco si la discusión nunca pide al estudiantado discriminar, justificar o comparar. Los diseños más sólidos usan casos para crear un espacio de problema antes de la explicación, que es el vínculo con el [[productive-failure|fracaso productivo]]: el estudiantado intenta un caso, encuentra los límites de su modelo actual y luego recibe instrucción que aborda esa brecha. Los casos contrastantes agudizan esto aún más. Cuando dos casos difieren en un rasgo que importa, quienes aprenden pueden ver el rasgo y no la historia superficial. El estudio existente de un curso de IA generativa de tres semanas para 78 estudiantes de minorías étnicas de un programa preparatorio usó el [[teacher-role|modelado docente]] con casos contrastantes para llevar al estudiantado de la copia eficiente a la cocreación crítica ([[scaffolding-critical-engagement-genai-minority-students]]). Es un diseño de comparación de casos, no una prueba del aprendizaje basado en casos en derecho o en administración de empresas, pero muestra el mecanismo en un aula real.

Los casos también tienen una dimensión social. Una discusión de casos hace público el razonamiento: el estudiantado propone interpretaciones, escucha alternativas y revisa. Las preguntas del docente hacen el trabajo que un libro de texto no puede hacer. Por eso sustituir un caso por un resumen o una clase magistral puede conservar el contenido y perder el aprendizaje. También por eso una IA que responde las preguntas del caso por el estudiante puede cortocircuitar la discusión incluso cuando sus respuestas son correctas.

## Qué cambia la IA

La nueva evidencia se agrupa en torno a tres usos: generar casos, impartir casos y sintetizar la evidencia.

**Generar casos.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka y Watanabe (2025)]] compararon la creación manual de casos y la asistida por ChatGPT por parte de ocho docentes de enfermería. El tiempo medio de creación cayó de 106,0 a 71,0 minutos, una diferencia estadísticamente significativa, mientras que la carga percibida y la calidad de la discusión no mostraron cambios significativos. El estudio es un ensayo de viabilidad con nueve estudiantes y un diseño cruzado no aleatorizado y cegado, así que respalda un ahorro de tiempo plausible, no una equivalencia. La pregunta de diseño importante no es si un modelo puede producir un caso. Es si el caso generado conserva el razonamiento clínico que el docente pretendía y si alguien lo revisa antes de que el estudiantado lo use.

**Impartir casos.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren y colegas (2026)]] construyeron cinco casos perioperatorios, los cargaron en una plataforma de LLM personalizada y pidieron a cuatro residentes de anestesia que interrogaran los casos como evaluaciones de pacientes. De 547 pares de pregunta y respuesta, el 99,3% (543/547) se consideró adecuado y ninguno fue fabricado; los cuatro fallos consistieron en negarse a informar información que el caso contenía. Esto es evidencia de que un modelo fundamentado puede sostener un caso bajo interrogatorio. No es evidencia de que quienes se forman aprendieran más de lo que aprenderían con una discusión de casos convencional, y el estudio no comparó ambas modalidades.

**Sintetizar la evidencia.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei y colegas (2025)]] revisaron seis ensayos controlados aleatorizados de ABP y aprendizaje basado en casos apoyados por IA en educación médica y odontológica. Cuatro ensayos entraron en el metaanálisis de conocimientos, que reportó una mejora del 46% con heterogeneidad baja; tres produjeron una puntuación de satisfacción agrupada de 0,7. El razonamiento clínico no pudo agruparse porque los ensayos usaron instrumentos diferentes. Solo dos de los seis ensayos evaluaron el aprendizaje basado en casos, y la revisión no analizó el ABP y el aprendizaje basado en casos por separado. El resultado es alentador para los diseños de casos y problemas apoyados por IA, pero no nos dice qué rasgos del caso produjeron la ganancia.

Las revisiones que rodean el tema añaden contexto sin añadir una estimación limpia del aprendizaje basado en casos. [[hardie-genai-nursing-scoping-review-2026|Hardie y colegas (2026)]] encontraron el aprendizaje basado en casos dentro del tema de simulación de una revisión de enfermería de 103 estudios, no como una de sus cuatro categorías con nombre. [[lorteau-sarro-ai-legal-education-2025|Lorteau y Sarro (2025)]] describen la IA como un complemento de la enseñanza socrática y las simulaciones jurídicas interactivas, pero su revisión de 82 trabajos no analiza el método de casos como intervención. [[csaszar-ai-management-education-2026|Csaszar y colegas (2026)]] no discuten explícitamente la enseñanza basada en casos; sus únicas referencias a casos son incidentales, y señalan que algunos estudios de caso han sido sustituidos por simulaciones empresariales. La educación empresarial y la jurídica aportan, por tanto, la justificación institucional de los casos, no la evidencia de resultados. Entre los diseños adyacentes parecidos a casos están los [[ai-standardized-patient-scaffolding-medical-2026|pacientes estandarizados con andamiaje de LLM]] y la [[genai-medical-education-transformation-review-2026|revisión de la educación médica]] que cuenta el aprendizaje basado en casos entre sus categorías de aplicación.

## Diseñar y facilitar casos con IA

- **Escriba el caso en torno a una decisión o una discriminación.** Un caso sin una elección con consecuencias se convierte en una lectura. Especifique qué debería notar, decidir o justificar el estudiantado y luego construya los hechos y las ambigüedades en torno a ese objetivo.
- **Compruebe los casos generados contra el razonamiento previsto.** La IA puede producir detalles clínicos o jurídicos bien redactados que son estructuralmente erróneos. Haga que una persona experta en la materia revise los hechos, las omisiones y la ruta de razonamiento antes de que el caso llegue al estudiantado.
- **Conserve la ambigüedad del caso.** Un caso generado que resuelve todas las tensiones enseña reconocimiento, no juicio. Preserve la información incompleta y las interpretaciones en competencia que hacen necesaria la discusión.
- **Use casos contrastantes cuando el objetivo sea la discriminación.** Empareje casos que difieran en el rasgo que el estudiantado debe notar y pídale que explique la diferencia en lugar de limitarse a clasificar cada uno.
- **Proteja la discusión de la entrega de respuestas.** Si hay un tutor de IA disponible durante el trabajo con el caso, restrínjalo a preguntas, pistas o juego de roles. Una IA que proporciona el diagnóstico o la conclusión jurídica elimina el trabajo cognitivo que el caso existe para crear.
- **Evalúe el razonamiento, no el recuerdo del caso.** Pida una justificación, un diagnóstico diferencial, una comparación o un memorando de decisión. Un cuestionario sobre los hechos del caso puede aprobarse mientras el razonamiento subyacente sigue ausente.
- **Trate la facilitación del docente como parte del diseño.** La secuencia de preguntas, el momento de la explicación y el manejo de un giro equivocado no son decoración. Determinan si el caso se convierte en un fracaso productivo o en uno confuso.

## Límites y lagunas de evidencia

La evidencia es escasa de una manera específica. El estudio perioperatorio evalúa si un modelo fundamentado puede responder preguntas sobre cinco casos, no si la enseñanza basada en casos mejora el aprendizaje. El estudio de enfermería evalúa el tiempo de creación de casos y la calidad de la discusión con nueve estudiantes. El metaanálisis agrupa seis ensayos, solo dos de los cuales evaluaron el aprendizaje basado en casos, y su resultado de conocimientos mezcla ABP y aprendizaje basado en casos. Las revisiones jurídica y empresarial describen usos y contextos institucionales; no aíslan los efectos del método de casos. El estudio sobre casos contrastantes es una evaluación de curso, no una comparación controlada de formatos de caso.

También hay un riesgo conceptual. Un caso puede ser memorable porque es vívido, no porque haya producido comprensión. Una discusión puede parecer productiva porque el estudiantado habló, no porque razonara. El campo necesita diseños que separen el caso de la facilitación, el formato de la materia y la implicación inmediata de la transferencia diferida. Hasta entonces, la afirmación honesta es que los casos son una pedagogía profesional bien establecida con un apoyo plausible de la IA, no que los casos apoyados por IA tengan una ventaja de aprendizaje demostrada.

## Concepciones erróneas

- **«El aprendizaje basado en casos es solo el aprendizaje basado en problemas con una historia.»** El ABP es indagación dirigida por quien aprende a partir de un problema mal estructurado. El aprendizaje basado en casos suele partir de un caso preparado y un objetivo instruccional más definido.
- **«Un caso realista enseña por sí solo.»** El realismo aporta contexto. Las preguntas, las comparaciones y las tareas de justificación aportan el aprendizaje.
- **«Los casos generados por IA están listos para usarse.»** Los casos generados pueden ser fluidos, plausibles y erróneos. Necesitan revisión experta y una comprobación del razonamiento al que invitan.
- **«Si el estudiantado disfruta de la discusión, el caso funcionó.»** La implicación no es transferencia. El resultado tiene que medirse en una tarea que el estudiantado no pudiera completar antes.

## Conceptos conectados

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Artículos conectados

- [[trewren-ai-perioperative-case-based-learning-2026]] — Un LLM fundamentado sostuvo cinco casos perioperatorios sin fabricar contenido
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT redujo el tiempo de creación de casos de enfermería sin una diferencia de calidad medida
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — Seis ECA de ABP y aprendizaje basado en casos apoyados por IA; solo dos evaluaron el aprendizaje basado en casos
- [[scaffolding-critical-engagement-genai-minority-students]] — Modelado docente con casos contrastantes en un curso de IA generativa
- [[ai-standardized-patient-scaffolding-medical-2026]] — El aprendizaje basado en casos junto a pacientes virtuales y simulados
- [[genai-medical-education-transformation-review-2026]] — El aprendizaje basado en casos y el razonamiento clínico entre las categorías de aplicación de la revisión
- [[hardie-genai-nursing-scoping-review-2026]] — El aprendizaje basado en casos dentro del tema de simulación de una revisión de enfermería
- [[lorteau-sarro-ai-legal-education-2025]] — La IA complementa la enseñanza socrática y las simulaciones jurídicas
- [[csaszar-ai-management-education-2026]] — Los estudios de caso y las simulaciones de la educación empresarial, sin un análisis del método de casos
