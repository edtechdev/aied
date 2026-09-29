---
title: Educación STEM
created: "2026-09-28T20:10:39-04:00"
updated: "2026-09-28T20:10:39-04:00"
type: concept
foundations: [computational-thinking]
technology: [intelligent-tutoring]
assessment: [automated-assessment]
discipline: [cs education, math education, physics education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/stem-education
source_updated: "2026-09-17T02:26:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Educación STEM** — la educación en ciencia, tecnología, ingeniería y matemáticas es el dominio más común de la [[research-methods-aied|investigación]] sobre la [[ai-education|IA en la educación]] en esta base de conocimiento. El conocimiento estructurado de STEM, sus respuestas claras de correcto/incorrecto y su naturaleza computacional lo convierten en un banco de pruebas ideal para la [[intelligent-tutoring|tutoría con IA]] y la evaluación.

## Preguntas para reflexionar

- STEM es el dominio más común de la investigación sobre IA en educación porque su conocimiento está estructurado y tiene respuestas claras de correcto/incorrecto. ¿Cree que eso hace de STEM el lugar más fácil para enseñar con IA, o quizá el lugar donde los límites de la IA se enmascaran con más facilidad?
- La página cita investigación que muestra que la adopción de la IA en las escuelas está «estratificada por disciplina»: normalizada en informática, muy prohibida en matemáticas. ¿Por qué cree que la cultura de la asignatura moldea tan intensamente la aceptación de la IA, y cuáles son las consecuencias para el estudiantado?
- Si un estudiante de matemáticas usa la IA sobre todo para comprobar soluciones y obtener explicaciones, ¿es un andamiaje o una muleta? ¿Qué determina la diferencia y dónde pondría la línea?
- Dado que los problemas de STEM suelen tener respuestas verificables, ¿qué tipos de uso de la IA en STEM cree que construyen de verdad comprensión y cuáles solo producen resultados que parecen correctos?
- ¿Cómo podrían precisamente las cualidades que hacen de STEM un dominio ideal para la tutoría con IA —respuestas claras, corrección computable— infravalorar las partes de la ciencia y la ingeniería que son desordenadas, abiertas y basadas en el juicio?

## Introducción

### STEM como dominio principal de la AIED

- **Matemáticas:** la investigación sobre [[math-education|educación matemática]] abarca el [[generative-ai-reduced-study-time-math|impacto de la IA generativa en el aprendizaje de las matemáticas]], la [[ai-powered-personalized-learning-elementary-fractions-2026|tutoría de fracciones en primaria]] y la [[student-math-competence-clustering|agrupación por competencia]].
- **Física:** la [[physics-education|educación en física]] incluye [[becker-chatgpt-typology-physics-2026|estudios de tipología de ChatGPT]], [[hashmi-socratic-physics-chatbot-2025|chatbots socráticos de física]] y [[ai-scoring-language-bias-physics|análisis del sesgo de puntuación]].
- **Informática:** la [[cs-education|educación en informática]] es el subcampo de STEM más investigado: [[code-review-genai-cs1|revisión de código]], [[debugtracker-classroom-debugging|herramientas de depuración]] y [[prompt-problems-nl-programming-mistakes|estudios sobre prompts]].
- **Ingeniería:** los [[concept-catalyst-engineering-scaffolds|andamiajes de ingeniería]], las [[structured-ai-demonstrations-engineering-mechanics|demostraciones de mecánica]] y el [[ai-engineering-education-balancing-act|equilibrio curricular]] llevan la IA a la [[engineering-education|educación en ingeniería]].
- **Andamiar la investigación de grado:** [[ai-information-extraction-undergraduate-thesis-2026|An y sus colegas (2026)]] pilotan un sistema de IA que convierte publicaciones de investigación en conjuntos de datos estructurados y comparables para la realización de trabajos de fin de grado en cuatro facultades de STEM. Los resultados (20 estudiantes, 80 documentos) mostraron una extracción de parámetros experimentales superior al 90%, una reducción de ~65% del tiempo de revisión de literatura y un aumento del 50% en la capacidad del estudiantado para identificar variables experimentales influyentes, evidencia de cómo la [[higher-ed|investigación de grado]] andamiada con [[generative-ai|IA]] puede reforzar la alfabetización investigadora y la cognición epistémica en la educación STEM.
- **Instrucción apoyada en simulación:** en la educación STEM basada en drones, se evaluaron andamiajes de [[simulation|simulación]] codiseñados por [[teacher-role|docentes]] e IA frente a un [[curriculum-design|currículo]] práctico idéntico con 30 estudiantes de secundaria, para comprobar si la instrucción apoyada en simulación produce mejores [[learning-gains|resultados de aprendizaje]]. El papel de la IA generativa era acelerar la creación de contenidos, mientras que la participación docente preservaba la validez pedagógica y la relevancia contextual.
- **Planificación asistida por IA en la educación artística STEAM:** un estudio experimental con docentes de artes STEAM de educación infantil ([[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo y Tahir, 2025]]) encontró que los planes de clase asistidos por ChatGPT superaron a los generados por el profesorado en calidad valorada por expertos (mediana 20,5 frente a 17,6, p = 0,002, efecto grande, seis profesores evaluadores), y el profesorado informó de mejoras en eficiencia e integración interdisciplinar (el 61% las valoró con 4 o más). El resultado se produjo a través del método de delegación del profesorado —lo más útil fue pedir a ChatGPT que rellenara lagunas de contenido en una clase esbozada por el propio docente—, lo que refuerza el punto recurrente de que la IA mejora el trabajo STEM/STEAM cuando el profesorado estructura la tarea y evalúa críticamente la salida, en lugar de entregar todo el plan al modelo.

### Qué eficaz es la instrucción apoyada por IA en STEM, en conjunto

La mayor síntesis cuantitativa de este dominio hasta la fecha —35 estudios experimentales y cuasiexperimentales publicados entre 2005 y 2025 ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan, Kılıç, Kalınkara y Talan, 2026]])— sitúa la instrucción apoyada por IA en STEM en g de Hedges = 0,670 (IC del 95% [0,491, 0,848]), con la varianza entre estudios tratada mediante un modelo de efectos aleatorios. El desglose por nivel educativo es la parte informativa: los efectos fueron mayores en secundaria superior (g = 1,099) y progresivamente menores en la universidad (0,578), primaria (0,465) y [[k-12|secundaria inferior]] (0,392), mientras que las diferencias por área de conocimiento que cabría predecir según la autoimagen de STEM —ciencias (0,676) y matemáticas (0,650) por delante de tecnología e ingeniería (0,501)— no fueron estadísticamente significativas (Q = 4,85, df = 2, p = 0,088). La duración no se comportó como una dosis: la banda más fuerte fue de uno a dos meses (g = 0,833), las intervenciones más cortas de cinco horas o menos aún alcanzaron 0,621, y la banda más débil (g = 0,256) no fue significativa. Leído junto al escepticismo documentado en [[learning-gains|Resultados de aprendizaje]], la lectura razonable es que la instrucción STEM apoyada por IA produce un efecto moderado, real pero dependiente del nivel educativo, y no un efecto uniforme.

### Por qué domina STEM

La representación estructurada del conocimiento en STEM, sus respuestas verificables y su alineación con el pensamiento computacional lo convierten en el encaje más natural para la tutoría con IA. La [[computational-thinking|investigación sobre pensamiento computacional]] explora explícitamente esta alineación.

### Nueva evidencia de la investigación de 2025-26 en el IJ STEM Education

Un conjunto concentrado de estudios de 2026 del *International Journal of STEM Education* afina cómo funciona la IA en los subcampos y niveles de STEM:

- **La [[governance|gobernanza]] [[discipline-specific-aied|específica de cada asignatura]] moldea el [[student-ai-interaction|uso de la IA por parte del estudiantado]].** Un estudio transversal con 416 estudiantes checos de secundaria ([[lnenicka-secondary-students-genai-stem-2026]]) encontró que la adopción de la IA está *estratificada por disciplina* en lugar de unificada: la informática y la economía normalizan la [[generative-ai|IA generativa]] como recurso colaborativo, mientras que las matemáticas (65,9% la prohíben) y las ciencias naturales (55,3%) muestran una alta prohibición percibida que coexiste con una escasa claridad de las normas y un uso clandestino persistente. El estudiantado usa la IA sobre todo como andamiaje instrumental (explicación, comprobación de soluciones) y no como sustituto, pero emerge una laguna de [[critical-thinking|evaluación crítica]]: la modificación intensiva de prompts eclipsa la verificación factual externa, desplazando la conducta hacia la [[cognitive-offloading|dependencia excesiva]]. Esto aboga por orientaciones *sensibles a la asignatura* en lugar de prohibiciones generales.

- **La IA como coinvestigadora en STEM basado en la indagación.** Un cuasiexperimento con 97 estudiantes de tercero de primaria ([[dai-chatbots-problem-posing-primary-2026]]) mostró que los [[conversational-ai|chatbots]] de IA generativa superaron significativamente a los motores de búsqueda en la [[problem-based-learning|formulación de problemas]] de ciencias en el [[inquiry-based-learning|aprendizaje basado en la indagación]], mejorando la calidad de las preguntas, produciendo una [[network-analysis|estructura de red]] epistémica más integrada (ENA) y reduciendo la carga cognitiva. Una [[meta-analysis-systematic-review|revisión sistemática]] sobre ChatGPT para el aprendizaje basado en la indagación en STEAM ([[jiang-chatgpt-inquiry-steam-review-2026]], 24 estudios) confirma que ChatGPT apoya la formulación de preguntas, el diseño de indagaciones, la [[problem-solving|resolución de problemas]] y la reflexión, pero conlleva riesgos de dependencia excesiva, [[hallucination-risk|alucinación]] y conclusiones superficiales cuando las salidas se tratan como autorizadas.

- **STEAM es una vía desigual hacia la alfabetización en IA.** Una revisión sistemática PRISMA de 39 estudios ([[niri-steam-ai-literacy-review-2026]]) encontró que las implementaciones STEAM desarrollan principalmente alfabetizaciones técnicas (conceptos fundamentales de IA, pensamiento computacional, alfabetización de datos), mientras que dejan poco desarrolladas la conciencia [[ethics|ética]], la imaginación creativa y la creación, gestión y diseño con IA. Las disciplinas tecnológicas van por delante; las artes, la ingeniería y el STEAM integrado se quedan atrás, lo que indica que la alfabetización en IA en STEM está actualmente desequilibrada hacia la habilidad técnica y no hacia la configuración responsable de la IA.

- **Los programas STEM adaptativos basados en IA pueden apoyar el aprendizaje profundo.** Un piloto aleatorizado por conglomerados en ciencias de sexto de primaria ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026]], N = 30) encontró que un programa STEM adaptativo basado en IA (contenido personalizado, dominio basado en reglas, retroalimentación en tiempo real) produjo tamaños de efecto grandes a favor del grupo experimental en explicación, interpretación, aplicación y generación de ideas, aunque el diseño de dos aulas exige una interpretación cautelosa.

- **La aceptación docente es heterogénea y está moldeada por la disciplina.** Un análisis de perfiles latentes con 128 docentes en formación ([[chen-preservice-teachers-chatgpt-lpa-2026]]) encontró cuatro perfiles de aceptación de ChatGPT (evaluadores pragmáticos, pioneros tecnológicos, escépticos resistentes, observadores del entorno), con el profesorado de STEM concentrado en los pioneros tecnológicos y el de otras áreas en los perfiles resistentes, y los escépticos resistentes mostrando una alta facilidad de uso pero una baja intención, lo que exige formación diferenciada en [[ai-literacy|alfabetización en IA]].

- **Evaluación y procesos cognitivos en STEM integrado con IA.** El [[zhang-ct-ai-training-test-2026|CTAT]] (34 ítems, validado con TRI) proporciona un instrumento válido para evaluar el [[computational-thinking|pensamiento computacional]] en contextos de formación con IA, y revela que el estudiantado tiene más dificultades con la representación de datos, la secuenciación de operadores lógicos y las estructuras de bucle. Un estudio de teoría fundamentada sobre programación asistida por IA ([[liu-tool-tutor-crutch-programming-2026]]) muestra que quienes aprenden oscilan entre el «dominio del ámbito» y el «dominio de la herramienta» a través de bucles de [[scaffolding|andamiaje]] y de descarga cognitiva, con una calibración [[metacognition|metacognitiva]] atenuada bajo la descarga rutinaria: un relato a nivel de proceso de la tensión entre rendimiento y aprendizaje.

## Implicaciones para el profesorado de STEM

- **Elija IA adecuada a la disciplina.** STEM abarca matemáticas (tutoría), física ([[socratic-method|diálogo socrático]], [[simulation|simulación]]), informática (generación y revisión de código) e ingeniería (diseño, mundo laboral); seleccione herramientas ajustadas a la [[pedagogy|pedagogía]] característica de cada subcampo en lugar de dar por supuesto que un chatbot general sirve para todo.
- **Aproveche la ventaja del ajuste estructurado de STEM, pero proteja el razonamiento.** Las respuestas verificables de STEM lo convierten en el dominio más tratable con IA; proteja frente a la dependencia excesiva y la sustitución de respuestas integrando la IA en flujos de trabajo estructurados y orientados al dominio.
- **Incorpore la alfabetización en IA en todas las asignaturas STEM.** Los estudios ([[zha-ai-literacy-biology-case-study|biología]], [[ai-tpack-preservice-math-teachers|formación de docentes de matemáticas]]) muestran que el contexto STEM apoya el aprendizaje sobre IA; integre los conceptos de IA allí donde surgen de forma natural en lugar de aislarlos.
- **Vigile la [[equity-in-ai-education|equidad]] y el acceso en la adopción de la IA.** Las herramientas de IA para STEM no son neutras; supervise el sesgo de puntuación, el acceso y la [[digital-divide|brecha digital]], y el diseño [[culturally-relevant-pedagogy|culturalmente relevante]] al desplegarlas.

## Conceptos conectados
- [[learner-identity]] — identidades de quien aprende en evolución: disciplinares, profesionales, creativas y académicas
- [[business-education]]
- [[cs-education]]
- [[math-education]]
- [[physics-education]]
- [[computational-thinking]]
- [[k-12]]
- [[higher-ed]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[llm]]
- [[discipline-specific-aied]]
- [[teacher-education]]
- [[chemistry-education]] — Educación en química e IA: laboratorios, evaluación formativa, límites de los LLM, filosofía de la experimentación
- [[biology-education]] — Educación en biología e IA: asistentes docentes de laboratorio, alfabetización en IA en biología, pensamiento crítico, herramientas especializadas

## Artículos conectados
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[mechanical-engineering-ai-curriculum-2026]] — Currículo de educación en IA basado en proyectos para ingeniería térmica
- [[ai-pedagogical-accompaniment-amico]] — Acompañamiento pedagógico habilitado por IA que apoya la identidad STEM
- [[lnenicka-secondary-students-genai-stem-2026]] — Qué hacen de verdad los estudiantes de secundaria con las herramientas de IA generativa en STEM
- [[dai-chatbots-problem-posing-primary-2026]] — Chatbots de IA generativa y formulación de problemas en ciencias de primaria
- [[jiang-chatgpt-inquiry-steam-review-2026]] — ChatGPT para el aprendizaje basado en la indagación en STEAM
- [[niri-steam-ai-literacy-review-2026]] — Educación STEAM para la alfabetización en IA: revisión sistemática
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Programa STEM adaptativo basado en IA para el aprendizaje profundo
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Perfiles de aceptación de ChatGPT en docentes en formación
- [[zhang-ct-ai-training-test-2026]] — Test de pensamiento computacional en la formación con IA (CTAT)
- [[liu-tool-tutor-crutch-programming-2026]] — Herramienta, tutor o muleta: teoría fundamentada de la programación asistida por IA
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Marco de nivel de preparación laboral para la fabricación inteligente en la era de la IA
- [[becker-chatgpt-typology-physics-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[concept-catalyst-engineering-scaffolds]]
- [[generative-ai-reduced-study-time-math]]
- [[ai-metacognition-stem-review]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[avraamidou-ai-colonization-science-education]]
- [[ai-science-chemistry-education-systematic-review-2025]] — Revisión sistemática de la IA en la educación científica y química
- [[astor-computational-thinking-meta-review-2026]] — El pensamiento computacional como competencia del siglo 21 en STEM
- [[ai-information-extraction-undergraduate-thesis-2026]] — Extracción de información con IA que apoya el trabajo de fin de grado y el aprendizaje basado en la investigación (An et al. 2026)
- [[simulation-assisted-drone-learning-stem-2026]] — Aprendizaje con drones asistido por simulación con andamiajes codiseñados por docentes e IA
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Efecto agrupado de la instrucción STEM apoyada por IA en 35 estudios, con las mayores ganancias en secundaria superior (Doğan et al. 2026)
