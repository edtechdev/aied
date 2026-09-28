---
title: "Educación ambiental"
created: "2026-09-28T18:15:49-04:00"
updated: "2026-09-28T18:15:49-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

## Preguntas para reflexionar

- «IA y educación ambiental» puede significar dos cosas muy distintas: usar la IA para enseñar *sobre* el clima y la sostenibilidad, y reducir el coste ambiental de *usar IA* en las aulas. ¿Cuál de las dos se oye en su institución, y cuál tiene una partida presupuestaria asignada?
- Si una universidad enseña ciencia del clima con un [[llm|modelo de lenguaje grande]] intensivo en energía en el portátil de cada estudiante, ¿ha impulsado la educación ambiental o la ha socavado? ¿Qué tendría que ser cierto para que la respuesta fuera «ambas»?
- [[ai-assisted-inquiry-ssi-climate|Un experimento]] encontró que la indagación asistida por IA mejoraba la toma de decisiones sobre el clima respecto de la indagación sola, con las ganancias concentradas en los pasos más débiles. ¿Confiaría en una unidad sobre el clima apoyada por IA en su aula, y qué necesitaría ver antes?
- Casi ningún artículo de [[ai-education|AIED]] informa de su cómputo o su huella de carbono. ¿Es el impacto no declarado sobre la [[sustainability|sostenibilidad]] un problema de investigación, un problema de contratación, un problema de enseñanza o ninguno de ellos?

## Introducción

La **educación ambiental** desarrolla la comprensión de quien aprende sobre los sistemas ecológicos, el clima y la interdependencia entre las personas y el medio ambiente, junto con las disposiciones y competencias para actuar al respecto; a menudo se enmarca institucionalmente como Educación para el Desarrollo Sostenible (EDS) o «educación verde». En un contexto de IA en la educación, el término conlleva una tensión con la que el corpus se topa sin nombrarla siempre: **la IA como herramienta para la educación ambiental** (enseñar contenidos de clima y sostenibilidad con herramientas generativas) y **la huella ambiental de la propia IA** (el coste en carbono, agua y energía de los modelos que despliegan las instituciones). Son preguntas distintas, con evidencias, actores y remedios distintos; confundirlas —como hacen varios artículos y la mayoría de los documentos de estrategia— hace imposible decir quién responde de qué.([[daniel-ai-sustainability-scoping-review-2026]])([[aied-carbon-footprint-reporting]])

## Dos cosas llamadas «educación ambiental con IA»

- **La IA para la educación ambiental**: usar la IA para enseñar contenidos ambientales, construir conciencia de sostenibilidad o apoyar competencias verdes. Esta mitad tiene marcos, un estudio de encuesta a [[teacher-role|profesorado]] y un experimento de aula.
- **La huella de la IA en la educación**: emisiones y uso de recursos de los modelos y la infraestructura empleados para enseñar, sea cual sea la materia. Esta mitad tiene una revisión de las prácticas de reporte, un [[benchmark|referente]] de ingeniería y un pequeño estudio de interfaz, y nada sobre la huella de la IA usada específicamente para la educación ambiental.

Una tercera línea, más débil, trata el «aprendizaje sostenible» como una propiedad [[pedagogy|pedagógica]] y no ambiental: un aprendizaje que persiste y se transfiere en lugar de quedar cortocircuitado por la [[cognitive-offloading|descarga cognitiva]]. Comparte el vocabulario de la sostenibilidad, pero no es una afirmación ambiental.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])

## Enseñar temas ambientales y climáticos con IA

La evidencia más sólida es un cuasi-experimento de tres grupos que usa el cambio climático como cuestión sociocientífica. El estudiantado que trabajó con un socio de IA dentro de una tarea estructurada de [[inquiry-based-learning|indagación]] superó a sus pares de solo indagación (d = 0,69) y a la instrucción tradicional (d = 1,88) en una rúbrica de toma de decisiones, con las mayores ganancias en los pasos con los que el estudiantado llegaba más débil: la monitorización y la gestión adaptativa, y la generación de alternativas. La condición con IA era *adicional a* la indagación, no un sustituto, y la recogida y el análisis de datos no separaron en absoluto a los grupos, lo que sugiere que la IA apoyó el razonamiento sobre los compromisos mutuos y no la recopilación de pruebas.([[ai-assisted-inquiry-ssi-climate]])

En el plano del [[curriculum-design|currículo]], el marco AI-SEE integra la IA en todo un [[engineering-education|currículo de ingeniería]] en cuatro pilares (impulsado por la inteligencia, empoderado por lo verde, liderazgo responsable, integrado con la práctica) en lugar de como un módulo de sostenibilidad añadido; un piloto con 144 estudiantes informó de mejoras en la conciencia de sostenibilidad y en la [[student-engagement|implicación]] conductual en los niveles personal, académico, profesional y social. Los autores advierten de que se trata de evidencia de entrevistas de una sola institución, autoinformada y en un único punto temporal, de un programa chino de transporte.([[liu-ai-sustainable-engineering-education-2026]])

Dos estudios más pequeños cubren el lado del diseño. El [[learning-design|diseño instruccional]] asistido por IA bajo restricciones de Pedagogía del Desarrollo Sostenible mejoró los planes de clase del profesorado en formación con un efecto inverosímilmente grande (d = 2,80, 28 equipos, sin grupo de control). Por separado, un estudio de ecuaciones estructurales con 122 docentes en activo encontró que el uso *práctico* de la IA en tareas de ciencia y energía verde, más la participación en el desarrollo de materiales alineados con la EDS, predecía la capacidad de integración de la IA, mientras que el conocimiento y las actitudes abstractas sobre la IA no lo hacían, aunque un [[self-report-measures|cuestionario]] dicotómico y un constructo débil de conocimiento limitan hasta dónde puede generalizarse.([[talebzadeh-ai-green-education-2026]])([[riandi-teacher-ai-green-energy-education-2026]])

## La huella ambiental de la IA en la educación

Esta mitad es donde el corpus está más vacío. Una revisión de los 396 artículos de las actas de AIED 2025 encontró «adopción de LLM sin divulgación»: la mayoría de los proyectos usan [[llm|LLM]], 85 artículos informaron de algún coste computacional y solo 57 mencionaron el impacto ambiental, usando métricas incompatibles, de modo que el campo no puede agregar su propia evidencia. Los autores sostienen que no informar del coste ambiental es en sí mismo una preocupación [[ethics|ética]] y proponen un método de [[open-source|código abierto]] (CodeCarbon más una estimación de FLOPs de dos parámetros para modelos propietarios).([[aied-carbon-footprint-reporting]])

En el lado de quien aprende, se estudió una interfaz de retroalimentación ecológica que expone el compromiso entre latencia y carbono durante el uso de LLM en vivo con 89 estudiantes de grado en informática en un curso de ética computacional: el estudiantado eligió el modo de menor carbono en aproximadamente el 45 % de las interacciones de baja latencia, pero en menos del 5 % con latencia alta, y la conciencia de sostenibilidad elevó significativamente esa elección. La muestra es pequeña y excepcionalmente informada en lo técnico, pero es la única evidencia directa del corpus de que la información sobre la huella mueve a quien aprende, y sugiere que la restricción vinculante es la paciencia, no los valores.([[llm-environmental-impact-student-usage-2026]])

La evidencia de mitigación proviene de un asistente de base de conocimiento de [[cs-education|informática]] en local, sobre una única GPU de consumo (12 GB de VRAM) con contenido de licencia abierta: 1,8 mWh por consulta en el mejor caso —unos 0,54 Wh para una clase de 30 estudiantes que envían diez consultas cada uno— con un ajuste fino consciente de la cuantización que contuvo tanto la pérdida de precisión como el aumento de [[hallucination-risk|alucinaciones]] que provocaba la compresión por sí sola. Es un referente de ingeniería, no un estudio de aprendizaje, pero muestra que la cuestión de la huella tiene palancas de diseño (anclaje, cuantización, ubicación del despliegue), no solo palancas de disciplina de uso.([[shen-sustainable-ai-knowledge-base-cs-education-2026]])

## Competencias verdes, conciencia de sostenibilidad y capacidad docente

En conjunto, estos estudios describen una agenda de competencias verdes aplicada de forma desigual: la conciencia de sostenibilidad como resultado curricular, el desarrollo de materiales alineados con la EDS como mecanismo para la capacidad docente y la toma de decisiones climáticas como habilidad de razonamiento medible. La línea crítico-valorativa aporta la advertencia: un análisis conceptual sostiene que la contribución de la IA a la educación sostenible es **condicional y mediada por la gobernanza**, y solo apoya la sostenibilidad cuando la adopción se subordina a valores educativos explícitos y a propósitos centrados en las personas, lo que sitúa la [[governance|gobernanza]] y la [[critical-pedagogy|pedagogía crítica]] dentro de la educación ambiental y no al lado de ella.([[alsuhaymi-sustainable-education-ai-digitalization-2026]])

La [[meta-analysis-systematic-review|revisión de alcance]] que organiza esta literatura ofrece el propio veredicto del campo sobre la escala: las aplicaciones se agrupan en torno a la gestión de la energía, la monitorización del clima y los programas de campus verdes, pero son limitadas en escala, a menudo carecen de directrices éticas o ambientales y buena parte de la investigación sigue siendo conceptual o piloto pequeña. La cobertura está sesgada hacia América del Norte y Europa, con casi nada del [[global-south|Sur Global]] más allá de unos pocos estudios sudafricanos.([[daniel-ai-sustainability-scoping-review-2026]])

## Lo que la evidencia aún no establece

- **No hay evidencia de huella para la educación ambiental en concreto.** Las cifras de carbono y energía provienen de estudios generales sobre LLM y de un referente en contexto de informática; nada mide el coste ambiental de un currículo climático o de EDS apoyado por IA.
- **No hay evidencia de ganancias de aprendizaje para las intervenciones sobre la huella.** La retroalimentación ecológica cambió las elecciones en un estudio de laboratorio; nada muestra que cambie hábitos, resultados de evaluación o contratación.
- **No hay evidencia causal para los marcos curriculares.** AI-SEE es un caso autoinformado de un solo sitio y E3-HOT un plan de diseño sin estudio implementado; el resultado de diseño de clases de la SDP no tiene grupo de control.
- **No hay evidencia a gran escala ni entre contextos.** Todos los resultados empíricos que aparecen aquí son de un solo sitio, y los estudios sobre profesorado se apoyan en muestras intencionales pequeñas con instrumentos débiles.
- **Las dos mitades rara vez se estudian juntas**, aunque ambas inciden en la misma aula.

## Implicaciones para la IA en la educación

1. **Nombre qué pregunta está respondiendo.** Las estrategias que usan «sostenibilidad» tanto para la IA al servicio de la enseñanza del clima como para la huella de la propia IA ocultan la brecha de responsabilidad que identifican [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]]; mantenga las agendas separadas, con responsables separados.
2. **Trate la divulgación de la huella como infraestructura del campo.** Informar del cómputo y el carbono junto a la precisión —con una declaración de sostenibilidad incluso cuando la medición sea imperfecta— es la única salida al problema de las métricas incompatibles.
3. **Diseñe para quien aprende con prisa.** Si la opción de menor carbono cuesta latencia percibida, la mayoría del estudiantado no la elegirá: mantenga la latencia baja, exponga los controles y describa el impacto en términos concretos de resultados, no en unidades abstractas de carbono.
4. **Prefiera despliegues más ligeros cuando la pedagogía lo permita.** Anclar un modelo en un corpus local con licencia y cuantizarlo con ajuste fino dio una precisión utilizable con una fracción de la energía: reutilice ese patrón antes de escalar la inferencia en la nube.
5. **Construya la capacidad docente mediante el desarrollo de materiales, no con campañas de concienciación,** y cubra la brecha del [[global-south|Sur Global]] en lugar de importar evidencia de contextos norteamericanos y europeos.

## Conceptos conectados
- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## Artículos conectados
- [[daniel-ai-sustainability-scoping-review-2026]] — Separa la IA para la sostenibilidad de la IA sostenible; la brecha del Sur Global
- [[ai-assisted-inquiry-ssi-climate]] — Indagación climática asistida por IA, d = 0,69 respecto de la indagación sola
- [[aied-carbon-footprint-reporting]] — Revisión de la divulgación en AIED 2025 más un método de huella de código abierto
- [[llm-environmental-impact-student-usage-2026]] — Retroalimentación ecológica sobre los compromisos latencia–carbono con 89 estudiantes de informática
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asistente cuantizado en local a 1,8 mWh por consulta
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: conciencia de sostenibilidad en la educación en ingeniería
- [[riandi-teacher-ai-green-energy-education-2026]] — El uso práctico de la IA y el desarrollo de materiales de EDS predicen la integración
- [[talebzadeh-ai-green-education-2026]] — Diseño asistido por IA bajo restricciones de Pedagogía del Desarrollo Sostenible
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — La contribución de la IA a la educación sostenible como mediada por la gobernanza
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — El «aprendizaje sostenible» como agencia cognitiva duradera, no como afirmación ambiental
