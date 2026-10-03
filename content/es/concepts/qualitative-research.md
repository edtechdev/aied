---
title: Investigación cualitativa
created: "2026-09-28T21:14:31-04:00"
updated: "2026-10-02T22:23:30-04:00"
type: concept
research_method: [interviews, case study]
confidence: high
methods: [qualitative-research, research-methods-aied]
translation_of: concepts/qualitative-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La investigación cualitativa** — la familia de métodos empíricos que estudian cómo las personas *experimentan, interpretan y dotan de significado* los fenómenos, típicamente a través de palabras, observaciones y artefactos en lugar de números. En la [[ai-education|IA en la educación]], los métodos cualitativos revelan *cómo* experimentan de verdad el estudiantado y el profesorado las [[generative-ai|herramientas de IA]]: los significados, tensiones, daños y mecanismos que las medidas estandarizadas pasan por alto. Como la IA en la educación avanza muy rápido y sus efectos suelen estar mediados por el contexto, la percepción y constructos disputados como la [[trust|confianza]] y la [[agency|agencia]], el trabajo cualitativo es esencial junto a los diseños [[quantitative-research|cuantitativos]] (véase [[research-methods-aied|métodos de investigación en IA y educación]]).

## Preguntas para reflexionar

- Una encuesta le dice que el 40% del estudiantado desconfía de un [[intelligent-tutoring|tutor de IA]]; un grupo focal le dice *por qué* desconfía. ¿Qué dato le resulta más accionable y qué añade el «por qué» que el porcentaje no puede aportar?
- Los hallazgos cualitativos normalmente no son generalizables en términos estadísticos, pero a menudo sí son «conceptualmente generalizables»: mecanismos y dinámicas que se transfieren a otros contextos. Antes de leer, ¿qué significa que un hallazgo sea generalizable en concepto pero no en estadística?
- La página advierte de que la *coincidencia* entre la codificación humana y la de un LLM no es lo mismo que la *calidad* de la codificación cuando el consenso humano no es la verdad de referencia. ¿Ha tratado alguna vez «dos revisores coincidieron» como prueba de que algo era correcto? ¿Cuándo es la coincidencia una señal de verdad y cuándo es solo un error compartido?
- Si la IA puede ahora asistir la codificación cualitativa a escala, ¿amenaza eso la profundidad interpretativa que hace valiosa la investigación cualitativa o solo automatiza su trabajo tedioso? ¿Cómo decidiría cuál de las dos cosas está ocurriendo en un estudio concreto?
- El trabajo cualitativo pone en el centro voces infrarrepresentadas — estudiantado de minorías étnicas, personas no usuarias y escépticas — que las encuestas grandes suelen pasar por alto. Piense en una afirmación sobre IA en la educación que haya oído. ¿De quién es la experiencia que probablemente *no* recoge la cifra titular?
- Elija un constructo disputado que le importe — la confianza, la agencia o el daño —. Antes de leer, esboce cómo lo estudiaría con palabras y observaciones en lugar de números, y anote qué perdería al hacerlo.

## Introducción

La investigación cualitativa no es un único método, sino una familia organizada por *qué* estudian sus miembros y *cómo* se reúne y analiza la evidencia. Lo que las une es el énfasis en la construcción de significado, el contexto y la profundidad por encima de la amplitud y el control causal. Los hallazgos cualitativos típicamente **no** son generalizables en el sentido estadístico, pero a menudo son *conceptualmente generalizables*: revelan mecanismos, categorías y dinámicas que se transfieren a otros entornos. En el corpus de la base de conocimiento, el trabajo cualitativo es prominente para estudiar la aceptación de la IA, la confianza, el daño, la práctica [[teacher-role|docente]] y los procesos de aprendizaje.

## Principales enfoques cualitativos

### Análisis temático
El análisis temático identifica, codifica e interpreta patrones («temas») en datos cualitativos, típicamente transcripciones de entrevistas o grupos focales, respuestas abiertas de encuestas o documentos. Es el enfoque más utilizado en los estudios cualitativos de la base de conocimiento. Las entrevistas y las respuestas abiertas son en sí mismas [[self-report-measures|datos autoinformados]], así que comparten los límites sobre lo que puede afirmarse respecto a la conducta: véase esa página para saber dónde la evidencia autoinformada es sólida y dónde se rompe. [[fouad-bentley-trust-utility-gap-physics-2026|Un estudio de la brecha entre confianza y utilidad en física]] usa el análisis temático de datos de entrevistas con estudiantes para sacar a la luz escepticismo y preferencias de adopción [[discipline-specific-aied|específicos de la disciplina]]; [[genai-teacher-feedback-comparison|una comparación entre la retroalimentación de la IA generativa y la del profesorado]] analiza las percepciones del estudiantado sobre utilidad y fiabilidad; y [[ai-adult-learning-guidelines-dis2026|las directrices para el aprendizaje de adultos con IA]] derivan principios de diseño de una codificación temática de aportaciones de especialistas y de personas que aprenden. [[ai-changing-teaching-workflows|Cómo cambia la IA los flujos de trabajo docentes]] se apoya en el análisis temático de relatos de educadores.
La fiabilidad de la codificación puede convertirse en un procedimiento continuo en lugar de una comprobación puntual. [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codifican 304 enunciados de observación con un α de Krippendorff de .803, monitorizan el acuerdo en cinco casos solapados (κ agrupada = 0,937) y recodifican los enunciados disputados siempre que el acuerdo caía por debajo de un umbral de recalibración de 0,85 antes de reanudar; los enunciados codificados pasan entonces a un análisis de redes epistémicas que modela qué dimensiones coocurren en lugar de una lista plana de temas.

### Teoría fundamentada
La teoría fundamentada construye una teoría *a partir de los datos* en lugar de poner a prueba un marco a priori, mediante una codificación iterativa (abierta → axial → selectiva) hasta la saturación teórica. Es idónea para construir teoría nueva sobre fenómenos emergentes de la IA en la educación. [[liu-tool-tutor-crutch-programming-2026|Liu et al.]] desarrollan una teoría fundamentada de *herramienta, tutor o muleta* — una tipología de tres modos de cómo el estudiantado [[scaffolding|andamia]] o descarga cognitivamente en la IA en la [[cs-education|enseñanza de la programación]] — que teoriza directamente el [[cognitive-offloading|desplazamiento cognitivo]]. [[favero-critical-ai-tutors-empower-enslave-2025|Un estudio de teoría fundamentada sobre tutores críticos de IA]] examina si esos tutores empoderan o esclavizan a quienes aprenden. [[genai-feedback-design-multisite-experiment|El diseño de retroalimentación con IA generativa centrado en las personas]] usa un análisis fundamentado en un estudio multisitio. Véase también [[theory-development-aied|desarrollo de teoría en IA y educación]] para saber cómo esas teorías fundamentadas alimentan la construcción teórica del campo.

### Fenomenología y fenomenografía
Los enfoques fenomenológicos estudian la *experiencia vivida* de un fenómeno — cómo es aprender con IA —, mientras que la fenomenografía estudia las *formas cualitativamente distintas* en que las personas experimentan y comprenden un fenómeno (produciendo «categorías de descripción»). [[absent-cognitive-baseline-2026|La línea base cognitiva ausente]] se apoya en las experiencias vividas del estudiantado con la autoevaluación bajo IA para teorizar una brecha estructural; [[metacognitively-discordant-completion-genai-2026|un estudio fenomenológico]] captura la experiencia de completar un trabajo con IA sin entenderlo a sabiendas; y [[genai-runaway-object-math-higher-ed|un estudio sociocultural e interpretativo]] analiza cómo la IA generativa se convierte en un «objeto desbocado» en la práctica académica de las [[math-education|matemáticas]].

### Análisis del discurso
El análisis del discurso examina cómo el lenguaje en uso construye significado, identidades y poder, analizando el habla en el aula, el texto escrito o secuencias interaccionales. [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]] realiza un *análisis del discurso* de aula de largo alcance (aquí con asistencia computacional) para mitigar el sesgo dialectal al comprender la interacción en el aula; [[scaffolding-critical-engagement-genai-minority-students|un estudio con estudiantes de preparatoria de minorías étnicas]] analiza el *discurso* colaborativo en tareas de [[prompt-engineering|ingeniería de prompts]]. El análisis del discurso tiende un puente entre la interpretación cualitativa y los métodos computacionales cuando se combina con el [[educational-nlp|procesamiento de lenguaje natural educativo]].
[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]] muestra cómo la codificación del discurso se vuelve auditable cuando se convierte en reglas contables: en 366 resúmenes y 91.405 tokens una asociación cuenta solo cuando un actor precede a un predicado dentro de seis palabras intermedias, y se excluye la proximidad nominal para que «gobernanza de la IA» no cuente nunca como evidencia de que la IA gobierna; una aproximación basada en reglas, no un análisis de dependencias, cuyos límites declara el diseño.

### Observaciones y etnografía
Los estudios de observación miran la conducta en contexto; la etnografía extiende esto a un estudio sostenido e inmersivo de un entorno, a menudo con quien investiga como observador participante. [[trio-ethnography-llm-programming-education|Una trio-etnografía]] de la enseñanza de la programación apoyada en LLM rastrea cómo evolucionan las interpretaciones del estudiantado; [[zha-ai-literacy-biology-case-study|un estudio de caso de aula]] observa la integración de la [[ai-literacy|alfabetización en IA]] en [[biology-education|biología]]. Los métodos observacionales capturan la conducta *real* (lo que quienes aprenden hacen con la IA) y no la conducta declarada, y complementan así las encuestas autoinformadas que dominan la [[educational-measurement|medición cuantitativa]] de las actitudes.

### Estudios de caso
Un estudio de caso es una investigación en profundidad de un caso delimitado (un curso, una institución, una persona que aprende) con múltiples fuentes de datos. [[drummond-genai-business-schools-framework-2026|Un estudio de caso de una escuela de negocios]] genera un marco de enseñanza y aprendizaje informado por el estudiantado para la IA generativa; [[zha-ai-literacy-biology-case-study|un estudio de caso de biología]] documenta la integración de la alfabetización en IA. Los estudios de caso cambian amplitud por profundidad y son sólidos para generar teoría y obtener ideas transferibles más que para generalizar. [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] ofrecen un estudio de caso cualitativo con 21 estudiantes universitarios con discapacidad visual de tres universidades palestinas, usando análisis temático de entrevistas semiestructuradas para mostrar cómo la IA generativa funciona como [[assistive-technology|tecnología de asistencia]] para el [[inclusive-learning|aprendizaje inclusivo]]: un ejemplo de investigación de estudio de caso que saca a la luz mecanismos (adaptación personalizada, aumento del profesorado, paridad educativa) que las medidas cuantitativas pasan por alto.
[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] triangula vídeo, los propios registros del sistema de alertas y entrevistas de recuerdo estimulado de un docente y ocho estudiantes, y muestra que una señal afectiva adquirió significado solo a través de la respuesta del docente; la codificación de episodios en dos etapas por una sola autora, sin codificación independiente ni detección afectiva validada, marca el límite de lo que puede justificar un análisis de caso con un único codificador.

### Entrevistas y grupos focales
Las **entrevistas** semiestructuradas y los **grupos focales** son los instrumentos principales de recogida de datos en todos los enfoques anteriores. Elicitan relatos ricos y contextuales. El corpus cualitativo de la base de conocimiento se construye en buena medida sobre entrevistas (por ejemplo, [[genai-expertise-pathways-sysadmin|trayectorias de experiencia]]) y grupos focales (por ejemplo, [[t2i-competence-paradox-2026|la paradoja de la competencia en texto a imagen]], [[ai-adult-learning-guidelines-dis2026]]). La calidad depende de un diseño cuidadoso de las preguntas, de un muestreo orientado a la variación y de un análisis riguroso.

## Cómo aparece la investigación cualitativa en la base de conocimiento

- **Mecanismo y proceso.** El trabajo cualitativo revela *por qué* la IA ayuda o perjudica. [[same-ai-different-pathways|La misma IA, caminos distintos]] usa líneas cualitativas para desentrañar mecanismos de aprendizaje [[sociocultural-learning|mediado]] por IA en distintos contextos
- **Confianza, agencia e identidad.** Los constructos disputados y subjetivos suelen estudiarse mejor de forma cualitativa. [[t2i-competence-paradox-2026|La paradoja de la competencia en texto a imagen]] saca a la luz cómo el estudiantado de arte y diseño negocia la facilidad, el riesgo y la identidad creativa; [[genai-runaway-object-math-higher-ed|La IA generativa como objeto desbocado en las matemáticas de educación superior]] captura el papel de la IA en la remodelación de la identidad y la práctica académicas.
- **Equidad y voces infrarrepresentadas.** El trabajo cualitativo pone en el centro perspectivas que a menudo quedan excluidas de las encuestas grandes: [[scaffolding-critical-engagement-genai-minority-students|estudiantado de minorías étnicas]], [[becker-chatgpt-typology-physics-2026|personas no usuarias y escépticas]]. Esto conecta con la [[equity-in-ai-education|equidad en la educación con IA]].
- **Construcción de tipologías y taxonomías.** [[becker-chatgpt-typology-physics-2026|Una tipología cualitativa de la adopción de ChatGPT]] distingue a las personas usuarias pragmáticas de las no usuarias escépticas, categorías que informan el diseño posterior de instrumentos de encuesta.
- **Codificación comparable entre documentos.** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]] aplica 15 viñetas fijas a las políticas públicas de 20 universidades para obtener 300 clasificaciones comparables, e informa de que un segundo codificador independiente coincidió solo en el 57,3% de ellas (κ = 0,395), lo que hace visible la fragilidad del esquema de codificación en lugar de dejar el acuerdo sin declarar.

## La IA y el análisis cualitativo

Un desarrollo reciente distintivo es el uso de [[llm|LLM]] para asistir la codificación cualitativa. La evidencia de la base de conocimiento es cautelosa: [[human-vs-llm-ordered-coding|Comparar la codificación ordenada humana y con LLM]] muestra que la codificación del LLM y la humana divergen, con errores que se propagan en cascada por el análisis temporal; [[agreement-not-quality-llm-coding-verification|La coincidencia no es calidad]] muestra que la *coincidencia* entre la codificación humana y la del LLM no es lo mismo que la *calidad* de la codificación cuando el consenso humano no es la verdad de referencia. La codificación asistida por LLM puede escalar y acelerar el análisis cualitativo, pero sus resultados exigen verificación frente al [[human-in-the-loop-ai|juicio humano]]: una intersección importante entre la investigación cualitativa, el [[educational-nlp|procesamiento de lenguaje natural educativo]] y la [[ai-ed-evaluation|evaluación de la IA en la educación]].

**El problema de la salida fluida y la justificabilidad.** [[chain-behind-claim-warrantability-2026|Holster (2026)]] afina por qué la exactitud y la divulgación son estándares insuficientes para el trabajo cualitativo asistido por IA. Como los LLM reorganizan corpus en minutos en temas, citas y afirmaciones de prevalencia fluidos, pueden ocultar la ruta analítica que los produjo, y las personas tienden a valorar como más verdadera la salida fluida y fácil de procesar. Holster propone la **justificabilidad** como complemento de la exactitud y la divulgación: una interpretación asistida por IA es justificable cuando la ruta desde los datos de origen hasta la afirmación permanece *inspeccionable, contestable y revisable*. Su maquinaria constructiva son las **lentes semánticas** (reorganizaciones documentadas de un corpus a distintos niveles de abstracción) y un repertorio de **artefactos de justificación** relativo a cada afirmación — tablas de temas vinculadas a las fuentes, pilas de lentes y ríos de evidencia —, diseñados dentro de las herramientas para que el análisis fluido produzca también un registro de ruta retrazable. Esto extiende la tradición de la pista de auditoría del campo a la era generativa y da a quienes revisan algo concreto que contestar más allá de una interpretación final.
- **La fiabilidad no es la exactitud en la codificación con LLM [[agentic-ai|multiagente]].** Una canalización informada por la literatura en la que dos codificadores de IA codificaron de forma independiente, debatieron y reconciliaron los desacuerdos produjo una coincidencia entre codificadores por encima de un kappa de Cohen de 0,85 en todos los conjuntos de datos y etiquetas, mientras que la F1 de criterio osciló entre 0,31 y 0,89 (media 0,68, DE 0,16): una coincidencia alta entre agentes que estaban equivocados los dos. Los libros de códigos más largos (t = -11,702) y los extractos más similares (t = -9,249) redujeron la exactitud inicial, y los turnos de discusión se correlacionaron positivamente con la exactitud (t = 7,997) mientras que los conflictos resueltos correctamente y los modos de colaboración se correlacionaron negativamente (t = -9,720 y -8,420), así que la convergencia es un indicador débil de corrección. La implicación práctica es que la codificación asistida por IA necesita una adjudicación a nivel de lista de comprobación frente a una referencia humana, y no la coincidencia entre agentes como señal de calidad. ([[llm-qualitative-coding-consensus-2026]])

## Fortalezas y limitaciones

- **Fortalezas:** comprensión ecológica y conceptual profunda; saca a la luz fenómenos, riesgos y mecanismos inesperados; esencial para la construcción de teoría (véase [[theory-development-aied|desarrollo de teoría en IA y educación]]); captura significado, contexto y constructos disputados; pone en el centro perspectivas infrarrepresentadas; es sólida para estudiar fenómenos que avanzan muy rápido y ante los que las medidas estandarizadas van por detrás.
- **Limitaciones:** generalizabilidad estadística limitada; interpretativa y dependiente de quien investiga (problemas de fiabilidad); muestras pequeñas; apoyo más débil a las afirmaciones causales; los hallazgos pueden ser difíciles de sintetizar entre estudios; exige mucho tiempo y trabajo.

Los métodos cualitativos y los cuantitativos son complementarios, no rivales: véase [[research-methods-aied|métodos de investigación en IA y educación]] para saber cómo contrastan y triangulan, y [[mixed-methods-research|métodos mixtos]] para diseños que los combinan.

## Conceptos conectados

- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]
- [[self-report-measures]]

## Artículos conectados
- [[chain-behind-claim-warrantability-2026]] — estándar de justificabilidad para el análisis cualitativo asistido por IA
- [[liu-tool-tutor-crutch-programming-2026]] — Herramienta, tutor o muleta: una teoría fundamentada de la programación asistida por IA
- [[trio-ethnography-llm-programming-education]] — Una trio-etnografía de la evolución de la interpretación en la programación apoyada en LLM
- [[absent-cognitive-baseline-2026]] — Teorizar una brecha estructural en la autoevaluación del estudiantado nativo en IA
- [[t2i-competence-paradox-2026]] — La paradoja de la competencia en el uso de IA generativa de texto a imagen
- [[fouad-bentley-trust-utility-gap-physics-2026]] — La brecha entre confianza y utilidad en la educación física
- [[genai-teacher-feedback-comparison]] — Comparar la retroalimentación de la IA generativa y la del profesorado: percepciones del estudiantado
- [[hazra-safetutors-pedagogical-safety-2026]] — Seguridad de los tutores de IA y daños pedagógicos
- [[zha-ai-literacy-biology-case-study]] — Estudio de caso de la integración de la alfabetización en IA en una clase de biología
- [[becker-chatgpt-typology-physics-2026]] — Una tipología cualitativa de la adopción de ChatGPT en física
- [[scaffolding-critical-engagement-genai-minority-students]] — Discurso colaborativo en la ingeniería de prompts entre estudiantado de minorías étnicas
- [[human-vs-llm-ordered-coding]] — Comparar la codificación ordenada humana y con LLM de datos cualitativos
- [[agreement-not-quality-llm-coding-verification]] — La coincidencia no es calidad en la codificación cualitativa con LLM
- [[same-ai-different-pathways]] — Desentrañar los mecanismos del aprendizaje mediado por IA en distintos contextos
- [[drummond-genai-business-schools-framework-2026]] — Marco de IA generativa informado por el estudiantado mediante estudio de caso
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Tutores críticos de IA: empoderar o esclavizar
- [[genai-runaway-object-math-higher-ed]] — La IA generativa como objeto desbocado en las matemáticas de educación superior
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA generativa de asistencia para estudiantes con discapacidad visual
