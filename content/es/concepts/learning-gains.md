---
title: Mejoras en el aprendizaje
created: "2026-09-25T04:31:08-04:00"
updated: "2026-10-28T00:51:33-04:00"
type: concept
assessment: [assessment]
audience: [learners]
level: [higher ed, k 12]
page_kind: [evaluation]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods]
confidence: high
methods: [ai-ed-evaluation]
reviewed_by: [editor]
translation_of: concepts/learning-gains
source_updated: "2026-10-28T00:51:33-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-04"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

> Las **mejoras en el aprendizaje** (learning gains) son mejoras medibles en el conocimiento, las habilidades o las competencias del estudiantado que resultan de intervenciones educativas, incluida la instrucción asistida por IA. En la investigación sobre [[ai-education|la IA en la educación]], las mejoras en el aprendizaje sirven como medida de resultado principal para evaluar si las herramientas de IA mejoran de verdad el aprendizaje, y no solo la [[student-engagement|implicación]] o la satisfacción.

## Preguntas para reflexionar

- ¿Ha sentido alguna vez que aprendió mucho con una actividad, para luego suspender un examen que medía algo distinto? La página distingue el rendimiento inmediato con apoyo de IA del aprendizaje duradero: ¿cómo podrían divergir esos dos en su propia experiencia?
- Un hallazgo central es que la IA generativa puede inflar las puntuaciones en los deberes asistidos por IA y a la vez bajar las puntuaciones en medidas supervisadas y sin apuntes. Si usted evaluara si una herramienta de IA ayuda de verdad al estudiantado a aprender, ¿en qué resultado confiaría y por qué?
- La investigación muestra que la dependencia no guiada de la IA predice peores mejoras en el aprendizaje, mientras que el uso estructurado predice mejores: la misma herramienta, resultados opuestos. ¿Qué distingue el uso «estructurado» del uso «no guiado» en un aula real?
- Los botones de pista se correlacionan con un menor aprendizaje: cuantas más pistas, menos aprendizaje. ¿Se ha sentido alguna vez tentado de recurrir a una pista o a una respuesta en el mismo momento en que se quedaba atascado? ¿Qué sugiere eso sobre cuánta dificultad es realmente necesaria para aprender?
- Un metaanálisis de gran tamaño agrupó muchos estudios y encontró que la [[edtech-platform|EdTech]] con IA elevaba el aprendizaje en una cantidad modesta, sin ventaja de la IA generativa sobre las herramientas adaptativas anteriores. ¿Cómo debería esta estimación agrupada y cautelosa cambiar la forma en que usted lee afirmaciones entusiasmadas sobre la eficacia de un producto de IA concreto?

## Introducción

Las mejoras en el aprendizaje son la prueba última de cualquier tecnología educativa. En la investigación de la base de conocimientos, aparecen como variables dependientes en [[rct|ensayos controlados aleatorizados]], comparaciones de antes y después en estudios cuasiexperimentales, y análisis correlacionales que vinculan el uso de herramientas de IA con los resultados académicos.

**Terminología.** El sentido de *resultado* del logro —logro del estudiante, logro académico, logro de aprendizaje, logro previo, brechas de logro— se trata aquí como sinónimo de mejoras en el aprendizaje, y esas expresiones enlazan con esta página. El sentido de *vivencia* («una sensación de logro») es una experiencia motivacional más que un resultado medido; véanse [[motivation]] y [[self-efficacy]]. La teoría de las metas de logro («metas de logro», orientaciones a metas) es asimismo un constructo motivacional y enlaza con [[motivation]].

Hallazgos clave de la base de conocimientos:

- La investigación sobre el [[adaptive-pretesting-retention|pretesting adaptativo]] examina si el [[retrieval-spacing-interleaving|pretesting]] con [[generative-ai|IA generativa]] produce mejoras de aprendizaje duraderas que persistan más allá de la prueba inmediata.
- Los [[genai-meta-analysis-programming-learning|metaanálisis sobre la IA generativa en programación]] encuentran mejoras de aprendizaje derivadas del uso estructurado de la IA, pero efectos negativos derivados de la dependencia no guiada: una distinción clave entre productividad y aprendizaje duradero.
- La investigación sobre el [[lak2026-hint-button-unproductive-use|botón de pista]] muestra asociaciones negativas entre el abuso de pistas y las mejoras en el aprendizaje: cuantas más pistas, menos aprendizaje.
- Los estudios sobre la [[instructional-guidance-genai-learning|orientación didáctica]] demuestran que las mejoras en el aprendizaje dependen de CÓMO se usa la IA, y no solo de SI está disponible.
- El [[burneo-can-edtech-close-learning-gaps-2026|metaanálisis del Banco Mundial]] agrupa 191 tamaños del efecto de 14 ECA para estimar que la EdTech adaptativa y con IA eleva el aprendizaje en unos ~0,125 sd por término medio —por encima de la mediana de los ECA educativos—, a la vez que no encuentra ventaja de la IA generativa sobre las herramientas adaptativas anteriores.
- **Las mejoras son interacciones contenido-tratamiento, no constantes.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit et al. (2025)]] muestran que la proporción óptima entre ejemplos y problemas depende del contenido de conocimiento: la [[retrieval-spacing-interleaving|práctica de recuperación]] pura produce mayores mejoras para los datos literales, mientras que la práctica integrada con ejemplos (alternar ejemplos resueltos y problemas) produce mayores mejoras para las habilidades generalizables —una prueba directa de que «más práctica» no siempre es mejor y de que las mejoras dependen de ajustar el calendario de entrenamiento al componente de conocimiento que se está aprendiendo—.

### El problema de medición en la era de la IA

Un tema central en la investigación de la base de conocimientos sobre las mejoras en el aprendizaje es que **la IA generativa puede inflar el rendimiento aparente sin producir mejoras en el aprendizaje** —y que la elección de la medida de resultado determina si esto resulta visible—. La [[generative-ai-reduced-study-time-math|investigación]] y los [[stromberg-generative-ai-learning-penalty-secondary-2026|datos de campo a gran escala]] muestran una divergencia marcada: el uso de la IA mejora las puntuaciones en los deberes asistidos por IA, mientras que *baja* las puntuaciones en medidas supervisadas, sin apuntes y sin asistencia. La [[genai-performance-vs-learning|investigación sobre rendimiento frente a aprendizaje]] y las [[young-people-learning-generative-ai-rapid-review-2026|revisiones rápidas]] distinguen por tanto el rendimiento inmediato con apoyo de IA del aprendizaje duradero, y tratan las medidas sumativas sin asistencia (véase [[summative-assessment]]) como la señal fiable de mejoras de aprendizaje genuinas.

### Lo que muestra la investigación sobre eficacia

A lo largo de los [[rct|ECA]], los [[meta-analysis-systematic-review|metaanálisis]] y los estudios de campo de la base de conocimientos, emerge un panorama coherente de **eficacia en el aprendizaje** (qué intervenciones de IA producen realmente mejoras de aprendizaje, y de qué magnitud):

- **La evidencia metaanalítica es ampliamente positiva, pero condicional.** [[genai-educational-outcomes-meta-analysis|Un metaanálisis exhaustivo de 53 estudios]] (Dong, 2026) encuentra que la IA generativa supera en general a los enfoques tradicionales en logro académico, [[critical-thinking|pensamiento de orden superior]] y escritura —con una [[ai-feedback-quality|retroalimentación de la IA]] especialmente eficaz—, aunque la IA generativa asistida por juegos no muestra un beneficio añadido significativo y las mejoras varían según el país y el resultado. [[genai-meta-analysis-programming-learning|El metaanálisis sobre la IA generativa y la programación]] encuentra grandes mejoras de productividad, pero ninguna mejora de aprendizaje significativa (g ≈ 0), separando la eficiencia en las tareas del aprendizaje duradero. [[robot-assisted-language-learning-meta-analysis-2026|Un metaanálisis sobre aprendizaje de idiomas]] encuentra mejoras de aprendizaje positivas pero modestas derivadas de robots [[embodied-learning|encarnados]] potenciados con IA. Para la [[ai-literacy|alfabetización en IA]] en concreto, [[liu-ai-literacy-interventions-meta-analysis-2026|un metaanálisis de tres niveles sobre 59 estudios]] estima un efecto global grande (g = 0,837) —pero el amplio intervalo de predicción y el hallazgo de que las intervenciones centradas en el conocimiento superaron a las dirigidas a habilidades, actitudes o [[ethics]] advierten de que el *resultado medido* moldea la mejora aparente, lo que ecoa el punto más amplio de que las mejoras relacionadas con la IA dependen de qué se evalúa y de cómo—.
- **Los [[intelligent-tutoring|tutores de IA]] bien diseñados producen mejoras reales.** Un ECA de conglomerados de dos años ([[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]]) encontró que la tutoría con IA elevó el logro en matemáticas en ~1,3 rangos percentiles nacionales por trimestre (~0,06-0,08 DE por año escolar, ~0,14 DE para un año completo), unas mejoras semejantes a las de la práctica sin IA —lo que demuestra que la *implicación*, y no la capacidad del modelo, es la restricción vinculante—. [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] mostró que el apoyo de la IA mejoraba la corrección en el intento siguiente tras los errores, con más tiempo por pregunta —una «ralentización productiva» que construye dominio duradero—. La [[virtual-tutoring-computer-assisted-learning-takeup-2026|tutoría virtual]] encontró que la restricción vinculante es la adopción y la participación sostenida, no la calidad del tutor.
- **Un tutor construido a partir de la pedagogía propia de la clase superó al aprendizaje activo, no solo a la clase magistral.** En un [[rct]] cruzado en el curso introductorio de física de Harvard, los estudiantes que aprendieron con un tutor de IA personalizado obtuvieron una mediana de 4,5 en la prueba posterior frente a 3,5 de las sesiones de aprendizaje activo en clase del curso (mediana inicial de 2,75), con un tamaño del efecto de regresión lineal de 0,63, y dedicaron una mediana de 49 minutos a la tarea frente a 60 en clase ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]). Como el control fue el aprendizaje activo basado en investigación y no una clase magistral, el ensayo mide al tutor frente a un comparador exigente —el diseño que los autores atribuyen a haber construido el tutor a partir de las mismas prácticas basadas en investigación que la clase, más retroalimentación personalizada a demanda y ritmo autoguiado—.
- **La IA puede igualar la ayuda humana.** La [[chatgpt-hints-human-tutor-learning-gains-2024|ayuda generada por ChatGPT]] produce mejoras de aprendizaje equivalentes a la ayuda escrita por tutores humanos en habilidades de [[math-education|matemáticas]] —una prueba de que la IA generativa puede ser tan eficaz como el [[scaffolding]] humano cuando se usa adecuadamente—.
- **Las mejoras dependen de quién enseña con ella.** Los tutores de baja experiencia a los que se dio apoyo de IA elevaron las tasas de aprobado del estudiantado en 9 puntos porcentuales, con mejoras menores para los tutores más experimentados —un patrón de aumento que impulsa más a quienes tienen menos experiencia— ([[oecd-digital-education-outlook-2026|OCDE, 2026]]).
- **La IA sin protección puede perjudicar el aprendizaje.** El ECA de guardarraíles ([[generative-ai-guardrails-harm-learning|PNAS 2025]]) encontró que un tutor de estilo ChatGPT sin protección elevó la práctica asistida un +48 %, pero *redujo* las puntuaciones en exámenes sin asistencia un −17 %, mientras que un tutor con guardarraíles (pistas, no respuestas) eliminó el daño. Esta es la demostración más contundente de que **la eficacia en el aprendizaje depende del diseño**: la misma clase de herramienta puede ser una fuerte mejora de aprendizaje o un daño neto según cómo se configure.
- **Pero el acceso sin protección también puede ayudar, de forma duradera.** Un ECA con una cuenta de ChatGPT de venta libre encontró que las pruebas sin ayuda puntuaban 0,27 DE más alto mientras los estudiantes tenían acceso, y la mejora se mantuvo una semana después —más del doble de la mediana de 0,10 DE en 747 ECA educativos— ([[contractor-learning-impact-generative-ai-2026|Contractor y Reyes, 2026]]).
- **La eficacia percibida y la eficacia real divergen.** [[ai-literacy-assessment-misalignment|El rendimiento autoinformado no se corresponde con el rendimiento medido]], y [[absent-cognitive-baseline-2026|la línea de base cognitiva ausente]] muestra que los estudiantes nativos digitales con IA sobreestiman su aprendizaje —por lo que las afirmaciones de eficacia basadas en el autoinforme no son fiables sin medidas de resultado objetivas—. [[self-report-measures]] reúne los casos en que los resultados informados y los medidos se separan.
- **Las mejoras pueden provenir de reasignar el tiempo del profesorado, no de la calificación por IA.** En un experimento aleatorizado en 178 escuelas brasileñas (~19.000 estudiantes de último curso), la calificación de redacciones por IA y por humanos produjo mejoras idénticas en los exámenes, pero las aulas con IA vieron ~35 % más de conversaciones individuales del profesorado sobre escritura, y el cuartil inferior no mejoró en ninguna de las dos condiciones ([[ai-changing-teaching-workflows|Ler, 2026]]).
- **En la IA mediada por el profesorado, la mejora la movió la preparación y no la herramienta.** A lo largo de 19 clases de numeración de escuelas públicas brasileñas, el estudiantado enseñado por docentes formados superó al grupo de control, pero añadir el sistema AIED-U a esa formación no produjo ninguna mejora adicional en el aprendizaje, y la carga de trabajo del profesorado se asoció negativamente con las mejoras ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al. (2026)]]).

**Conclusión:** el peso de la evidencia respalda unas **mejoras de aprendizaje modestas, condicionales y dependientes del diseño** derivadas de la IA —reales cuando la IA se estructura para entrenar en lugar de responder, cuando tiene guardarraíles y cuando se empareja con medidas de resultado sin asistencia, y ausentes o negativas cuando sustituye el esfuerzo propio de quien aprende—. Por eso las mejoras en el aprendizaje como resultado deben medirse con instrumentos válidos y resistentes a la IA, y por eso [[ai-ed-evaluation]] empareja las afirmaciones de eficacia con el escrutinio [[research-methods-aied|metodológico]].

- **La tutoría con IA puede igualar la tutoría humana experta en mejoras de pruebas estandarizadas.** En una evaluación con 2.383 participantes, la tutoría con IA agrupada fue estadísticamente equivalente a la tutoría humana experta en mejoras de aprendizaje del GRE (p = 0,015), con ambas por encima de un control sin tutoría; los autores proponen el coste por punto porcentual de mejora como unidad para comparar tutores ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).

### Un mapa de campo de los efectos de la IA sobre el aprendizaje y el logro

El corpus de la base de conocimientos —metaanálisis, ECA, cuasiexperimentos y estudios de campo— respalda un panorama matizado y a veces contradictorio. Los hallazgos se agrupan en efectos positivos, negativos y condicionales.

**Efectos positivos (la IA puede producir mejoras de aprendizaje genuinas):**

- **La evidencia metaanalítica es ampliamente positiva, pero condicional.** [[genai-educational-outcomes-meta-analysis|Un metaanálisis de 53 estudios]] (Dong, 2026) encuentra que la IA generativa supera en general a los enfoques tradicionales en logro académico, pensamiento de orden superior y escritura, con una [[feedback]] de la IA especialmente eficaz. Un metaanálisis de 29 experimentos ([[zhao-genai-higher-order-thinking-meta-2026]]) encuentra un efecto positivo moderado sobre el pensamiento de orden superior, más fuerte para la [[problem-solving]], pero limitado para la [[creativity]].
- **La IA específica de tutoría supera de forma fiable a la IA de propósito general.** [[stanford-evidence-base-ai-k12-2026|La revisión Stanford SCALE]] y la revisión general ([[genai-higher-education-systematic-review-2026]]) convergen: los agentes con diseño pedagógico, con pistas y andamiaje paso a paso, producen mejoras reales donde a menudo no las producen los [[conversational-ai|chatbots]] abiertos.
- **Los tutores de IA bien diseñados producen mejoras reales y medibles.** El ECA de dos años de Khanmigo ([[one-click-away-khanmigo-two-year-school-experiment-2026]]) elevó el logro en matemáticas en ~1,3 rangos percentiles nacionales por trimestre; [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] mejoró la corrección en el intento siguiente tras los errores; la [[virtual-tutoring-computer-assisted-learning-takeup-2026|tutoría virtual]] mostró que la adopción es la restricción vinculante.
- **La IA puede igualar la ayuda humana.** La [[chatgpt-hints-human-tutor-learning-gains-2024|ayuda generada por ChatGPT]] produce mejoras de aprendizaje equivalentes a la ayuda escrita por tutores humanos en habilidades matemáticas.
- **La IA centrada en la retroalimentación funciona.** La [[genai-educational-outcomes-meta-analysis|retroalimentación de la IA]] se encuentra entre las aplicaciones de IA generativa más eficaces; la [[ai-feedback-critical-thinking-writing-2026|retroalimentación de la IA para la escritura]] mejora el pensamiento crítico cuando se acopla con instrucción. En un experimento de campo, [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] encontraron que los estudiantes que recibían retroalimentación individual de GPT-4 en tareas abiertas mostraron las mayores mejoras de aprendizaje de contenido (~0,11, p < 0,10; en aumento hasta 0,16 entre quienes realmente habían recibido retroalimentación previa) —un efecto impulsado por la provisión fiable y consistente de la IA más que por una superioridad inherente, ya que los resultados de los pares igualaron a la IA cuando realmente se entregaba una [[peer-assessment|retroalimentación de los pares]] de alta calidad—. Los compañeros de crítica basados en LLM en la escritura extienden esto a una retroalimentación iterativa y colaborativa: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash y Connell Pensky (2025)]] encontraron mejoras significativas a lo largo de un semestre en la escritura argumentativa, la [[prompt-engineering|ingeniería de prompts]] y la calidad de la respuesta a la retroalimentación de la IA (todas con p < 0,001, aproximadamente una desviación típica completa por dimensión), con mejoras que aparecían incluso en las redacciones escritas sin apoyo de LLM —una prueba de habilidad duradera más que de mera dependencia de la herramienta, aunque la ausencia de una condición de control limita la atribución causal—.
- **Los andamiajes estructurados producen mejoras.** La [[scaffolding-srl-feedback-genai-human-peers|retroalimentación autorregulada con andamiaje]] y el [[learner-ai-interaction-patterns-oop|diseño de la interacción]] muestran mejoras pequeñas pero significativas cuando la IA se diseña para entrenar.
- **La IA en contextos colaborativos y basados en problemas ayuda cuando se estructura.** El [[ai-enhanced-pbl-chatgpt-scaffolding-2026|ABP potenciado con IA]], el [[ai-assisted-collaborative-learning-model-dbr|aprendizaje colaborativo asistido por IA]] y las [[ccct-cooperative-learning-technique|técnicas cooperativas diseñadas por IA]] reportan mejoras significativas.

**Efectos negativos (la IA puede reducir o no mejorar el aprendizaje):**

- **La IA sin protección puede perjudicar el aprendizaje.** El ECA de guardarraíles de PNAS ([[generative-ai-guardrails-harm-learning]]) encontró que un tutor de estilo ChatGPT sin protección elevó la práctica asistida un +48 %, pero *redujo* las puntuaciones en exámenes sin asistencia un −17 %; los [[guardrails]] eliminaron el daño.
- **Completar más rápido no es aprender.** La [[generative-ai-reduced-study-time-math|IA generativa redujo el tiempo de estudio]] en problemas de matemáticas y el conocimiento que estos construyen; la [[genai-performance-vs-learning|investigación sobre rendimiento frente a aprendizaje]] muestra que la IA infla el rendimiento asistido por IA mientras baja las puntuaciones supervisadas, sin apuntes y sin asistencia.
- **Externalizar los deberes perjudica el aprendizaje.** Los [[stromberg-generative-ai-learning-penalty-secondary-2026|datos de campo]] muestran una penalización de aprendizaje de la IA generativa cuando el estudiantado externaliza los deberes.
- **La dependencia de los [[llm]] se correlaciona con notas más bajas.** [[jost-llm-programming-education-learning-outcomes|Jošt et al.]] encontraron correlaciones negativas significativas entre el uso de LLM para la generación de código (rho = −0,305) y para la depuración (rho = −0,360) y las notas finales.
- **La IA puede perjudicar la [[teacher-role|enseñanza]] y el logro de algunos.** [[genai-can-harm-teaching-rct-2026|Un ECA de IA generativa dirigido al profesorado]] encontró que los estudiantes del profesorado por debajo de la mediana perdieron terreno (−0,129 DE).
- **El abuso de pistas se correlaciona con menos aprendizaje.** La investigación sobre el [[lak2026-hint-button-unproductive-use|botón de pista]] muestra que cuantas más pistas, usadas de forma improductiva, menos aprendizaje.
- **Las mejoras metaanalíticas en programación son ilusorias.** [[genai-meta-analysis-programming-learning|El metaanálisis sobre la IA generativa y la programación]] encuentra grandes mejoras de productividad, pero ninguna mejora de aprendizaje significativa (g ≈ 0), separando la eficiencia en las tareas del aprendizaje duradero.

**Efectos condicionales y mixtos (el contexto determina la dirección):**

- **El diseño es decisivo.** La misma clase de herramienta puede ser una mejora fuerte o un daño neto según la configuración ([[generative-ai-guardrails-harm-learning]], [[stanford-evidence-base-ai-k12-2026]]).
- **El cómo se usa la IA importa más que el si se usa.** [[jost-llm-programming-education-learning-outcomes|El uso para explicaciones era inocuo; el uso para la generación de código era perjudicial]]; la [[genai-over-reliance-learning-2026|dependencia excesiva]] erosiona las mejoras.
- **La duración y la autorregulación ([[regulation]]) moderan los efectos.** [[zhao-genai-higher-order-thinking-meta-2026|Los efectos fueron más fuertes a las 8-16 semanas]] y para quienes aprenden con mayor [[self-regulated-learning]].
- **El nivel de pensamiento computacional modera las mejoras asistidas por IA.** En un curso de cuatro semanas de asistente de programación con IA para 8.º curso, los estudiantes con pensamiento computacional alto superaron a sus pares con pensamiento computacional bajo en la prueba posterior (72,54 frente a 61,73, p = 0,031) a pesar de un conocimiento previo de programación comparable, usando el asistente para entender el código mientras que los de pensamiento computacional bajo recuperaban respuestas ([[computational-thinking-aica-2026|Zhao et al. (2026)]]).
- **El aprendizaje basado en la indagación (IBL) apoyado por IA favorece la creatividad, pero no necesariamente la resolución de problemas.** [[mujib-ai-ibl-creative-math-2026|Mujib et al.]] mejoraron el rendimiento creativo y las actitudes, pero no la resolución crítica de problemas.
- **La [[student-experience|experiencia del estudiantado]] diverge de las mejoras medidas.** [[absent-cognitive-baseline-2026|Los estudiantes nativos digitales con IA sobreestiman su aprendizaje]], y [[ai-literacy-assessment-misalignment|el autoinforme no se corresponde con el rendimiento]] —las percepciones de mejora no son una prueba fiable de ellas—.

### Las estimaciones metaanalíticas de las mejoras de aprendizaje están infladas: léalas con cautela

Las cifras de mejoras de aprendizaje que dominan el resumen de eficacia de esta página —especialmente los tamaños del efecto agrupados de los metaanálisis— deben leerse con una advertencia firme: una ola de metainvestigación muestra que las estimaciones de síntesis positivas del campo están infladas por el sesgo de publicación, la incoherencia de constructos y los atajos metodológicos.

- [[bartos-ai-learning-meta-meta-analysis-2026|Un metametaanálisis a nivel de estudio de 1.840 tamaños del efecto de 67 metaanálisis]] encuentra que el efecto medio de la IA ajustado por sesgo de publicación es aproximadamente **un tercio** de la magnitud reportada (SMD ≈ 0,196 frente a una mediana de 0,67), con un intervalo de predicción que abarca desde un daño grande hasta un beneficio grande y sin que ningún moderador produzca mejoras consistentes. Incluso un único estudio extremo aporta casi ninguna información dada la heterogeneidad —lo que significa que *más estudios del tipo actual no zanjarán la cuestión*; solo lo harán ensayos de alta calidad, preinscritos y orientados a la replicación—.
- **Un metaanálisis de segundo orden de la propia capa de síntesis.** [[ai-education-effects-second-order-meta-analysis-2026|Emslander et al. (2026)]] invierten la unidad de análisis habitual: al tratar 45 metaanálisis como sus datos y corregir el solapamiento entre estudios (818 estudios primarios únicos, ponderados por unicidad en lugar de descartados), agrupan 129 tamaños del efecto metaanalíticos en g = 0,57 [0,50, 0,65], con conglomerados de resultados que van de 0,35 para el rendimiento en STEM a 0,68 para los resultados académicos generales. Dos resultados afectan a las cifras anteriores. El tipo de IA no moderó el efecto (p = 0,63) —los [[intelligent-tutoring|sistemas de tutoría inteligente]], los [[conversational-ai|chatbots]] y ChatGPT son estadísticamente indistinguibles en esta capa, por lo que las mejoras agrupadas del campo no están siendo impulsadas por la IA generativa como tal— y el único moderador claro fue el nivel educativo (terciario 0,61 frente a 0,30 para las muestras más jóvenes), lo que es en parte un artefacto del diseño de los estudios, dado que el 74 % del corpus evaluó a estudiantes de nivel terciario y la evidencia de [[k-12|K-12]] es comparativamente escasa. Su valoración de la calidad es la más aguda del corpus: los 45 metaanálisis obtuvieron una media de 9,3 de 17 en una escala adaptada de AMSTAR, ninguno estaba preinscrito, y solo 23 de 45 tenían una potencia del 80 % para detectar el efecto que ellos mismos reportaban. Sus dos pruebas de sesgo de publicación tampoco coinciden —un gráfico de embudo simétrico (τ de Kendall = −0,01, p = 0,868) frente a PET-PEESE (B = 0,9, p = 0,009) que indica inflación—, por lo que el efecto medio del propio metametaanálisis de segundo orden llega con una nube de sesgo sin resolver sobre él.
- [[oneill-presumed-effective-meta-analysis-2026|Una auditoría forense de 14 metaanálisis de AIED de alto impacto]] encuentra que ninguno aportó una base válida para su afirmación de mejoras de aprendizaje agrupadas: ninguno tenía un constructo de resultado coherente, todos presentaban una heterogeneidad extrema sin resolver (I² osciló entre el 77,2 % y el 94,4 % en los 13 metaanálisis que la reportaron, y 12 de esos 13 superaban el 80 %), doce trataron tamaños del efecto dependientes como independientes, y ninguno evaluó válidamente el sesgo de publicación. Una mayoría de los estudios primarios revisados al azar no se correspondían con la afirmación metaanalítica. Los errores llegaron a la política: dos de los metaanálisis auditados trataron el tamaño muestral del estudio como el tamaño de la clase y, sobre la base de un estudio primario mal calculado, concluyeron que entre 21 y 40 estudiantes es el tamaño ideal de intervención y recomendaron que las intervenciones de IA generativa se diseñaran para ese número.
- **Una síntesis de 2026 sobre [[stem-education|STEM]] que corrige dos de los defectos auditados —y que todavía ilustra un tercero.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan y colegas (2026)]] agruparon 35 estudios experimentales y cuasiexperimentales sobre STEM con un tamaño del efecto por estudio para evitar el problema de los tamaños del efecto dependientes, y ejecutaron una batería completa de pruebas de sesgo de publicación (gráfico de embudo, pruebas de Begg y Egger, trim-and-fill, N a prueba de fallo de Rosenthal = 2404) en lugar de afirmar la simetría —los dos atajos que la auditoría anterior encontró en todos los metaanálisis que examinó—. Dos advertencias sobreviven. Primero, los autores no aplicaron ninguna valoración formal de la calidad y trataron los criterios de inclusión como el umbral de rigor, por lo que estudios de diseños muy distintos entraron en el conjunto sin ponderar por calidad. Segundo, la heterogeneidad del titular depende por completo del modelo que se lea: los mismos 35 estudios se reportan como I² = 82,98 % bajo el modelo de efectos fijos e I² = 15,75 % bajo el modelo de efectos aleatorios, por lo que un lector que se encuentre con las cifras sin la etiqueta del modelo puede concluir que el corpus es homogéneo cuando no lo es. Su estimación agrupada (g = 0,670, IC del 95 % [0,491, 0,848]) es por tanto el tipo de cifra que describe la sección anterior: mejor construida que la mayoría, y aun así una cota superior.
- [[weidlich-chatgpt-effect-search-cause-2025|Una crítica mediática y metodológica]] muestra que muchas «mejoras de aprendizaje» no se midieron de forma válida —los resultados eran a menudo habilidades autoinformadas o rendimiento medido *durante* la asistencia de la IA en lugar de aprendizaje duradero y sin asistencia—.
- **La primera ola de síntesis sobre ChatGPT midió rendimiento, no aprendizaje.** [[epistemological-audit-genai-meta-analyses-2026|Fütterer et al. (2026)]] reconstruyeron la base de evidencia de los cinco metaanálisis que agruparon los efectos educativos de ChatGPT: entre 69 estudios primarios clasificables, el 79,7 % midió exclusivamente rendimiento y solo el 11,6 % midió aprendizaje. Su estimación agrupada reproducida (g = 0,83, IC del 95 % [0,68, 0,97], I² = 94,06 %) describe por tanto el rendimiento en pruebas, y su intervalo de predicción [−0,75, 2,41] cruza el cero.

**Conclusión sobre las cifras de mejoras anteriores:** tratar los tamaños del efecto agrupados grandes de la IA como cotas superiores, no como estimaciones puntuales. Preferir la evidencia de mejoras de aprendizaje proveniente de [[rct|ECA]] y estudios de campo bien diseñados con medidas de resultado estandarizadas y sin asistencia (el ECA de guardarraíles, los experimentos de Khanmigo y NUMI, y el metaanálisis de EdTech del Banco Mundial citados arriba), y leer las mejoras metaanalíticas como provisionales y probablemente sobreestimadas hasta que mejore la calidad de la síntesis. El problema también sobrevive a la corrección: de los artículos publicados después de que se retirara uno de los metaanálisis auditados, el 60 % todavía lo citaba como respaldo autorizado de grandes mejoras de aprendizaje con ChatGPT y ninguno reconocía la retractación, por lo que una estimación retirada sigue propagándose. Es por eso que la página [[limitations-in-aied-research|Limitaciones en la investigación en AIEd]] documenta ahora en detalle la crisis de la evidencia metaanalítica.

### Medir lo que importa

Las mejoras en el aprendizaje se conectan con la [[assessment-validity]] —si las [[assessment|evaluaciones]] no captan una comprensión más profunda, las medidas de mejora de aprendizaje inducen a error—. También se cruzan con la [[cognitive-offloading|dependencia excesiva]] y con la [[cognitive-offloading]], donde las mejoras aparentes de rendimiento pueden enmascarar pérdidas de aprendizaje, y con el [[rct]] (los ensayos aleatorizados como diseño de referencia para detectar mejoras de aprendizaje causales), y con el [[meta-analysis-systematic-review]] (agrupar tamaños del efecto entre estudios para establecer la evidencia de eficacia del campo).

- **Mejoras significativas de antes y después a partir de una [[pedagogy]] de IA basada en errores:** [[pedagogy-ai-mistakes|Hosseini (2026)]] en su curso de diseño de bases de datos (n=13) mostró mejoras de aprendizaje grandes y significativas en ítems idénticos de antes y después (media 4,25→6,83/7, *d* de Cohen = 1,49, *p* < 0,001), con mejoras no correlacionadas con la confianza previa en la IA o en las bases de datos —el diseño de crítica-refinación integrado con IA benefició al estudiantado con independencia de sus percepciones iniciales—.

## Concepciones erróneas

**«Las puntuaciones subieron, así que la intervención produjo aprendizaje.»** Este es el error de definición que la página existe para prevenir, y los datos de campo muestran las dos direcciones a la vez: el uso de la IA mejora las puntuaciones en los deberes asistidos por IA mientras *baja* las puntuaciones en medidas supervisadas, a libro cerrado y sin asistencia ([[generative-ai-reduced-study-time-math]]; [[stromberg-generative-ai-learning-penalty-secondary-2026]]). La elección de la medida determina si la inflación es visible, de modo que una mejora en una tarea donde se permite la IA es una afirmación sobre el rendimiento en esa tarea y no sobre el [[genai-performance-vs-learning|aprendizaje]].

**«El metaanálisis lo zanja: el efecto es grande.»** La dirección de la agregación y su magnitud son hechos distintos, y la magnitud rara vez sobrevive al escrutinio. [[genai-meta-analysis-programming-learning|El metaanálisis sobre IA generativa en programación]] encuentra grandes ganancias de *productividad* junto con **ninguna ganancia de aprendizaje significativa** (g ≈ 0). [[burneo-can-edtech-close-learning-gaps-2026|El metaanálisis del Banco Mundial]], que agrupa 191 tamaños del efecto de 14 ensayos aleatorizados, estima ~0,125 desviaciones estándar para la tecnología educativa adaptativa y habilitada por IA —respetable frente al ensayo educativo mediano, pero **sin ventaja de la IA generativa sobre herramientas adaptativas anteriores**—. Citar estudios de la era de GPT como un salto de categoría exagera lo que muestra la evidencia agrupada.

**«Más práctica y más personalización siempre ayudan.»** Las ganancias son interacciones contenido-tratamiento, no constantes. [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit et al. (2025)]] muestran que la proporción óptima de ejemplos y problemas depende de lo que se aprende: la práctica de recuperación gana en hechos literales, la práctica integrada con ejemplos gana en habilidades generalizables. Y [[lak2026-hint-button-unproductive-use|la investigación sobre el botón de pista]] encuentra que el volumen de pistas se asocia negativamente con el aprendizaje. El mismo «apoyo» que ayuda a un componente de conocimiento puede desperdiciar el otro.

**«Un resultado de postest diferido es automáticamente un resultado de aprendizaje duradero.»** El diferimiento es necesario y no suficiente. Lo que distingue el aprendizaje duradero en este corpus es la medición *sin asistencia* en condiciones diferidas, junto con la evidencia de que el efecto no lo sostiene el andamiaje que estará ausente en la transferencia.

## Implicaciones para la práctica

**Para el profesorado**

- Separe la nota que pone de la afirmación que hace. Un trabajo de curso asistido por IA puede evaluar con justicia la calidad del producto y no decirle nada sobre la capacidad sin asistencia; si necesita lo segundo, tiene que medirlo por separado.
- Empareje el formato de la práctica con el tipo de conocimiento. Use recuperación para los hechos y alternancia con ejemplos resueltos para los procedimientos transferibles, en lugar de un único formato por defecto para ambos.
- Vigile el volumen de pistas como diagnóstico, no solo como apoyo. Un uso creciente de pistas con un rendimiento sin asistencia plano es la firma de una dependencia que parece productiva.

**Para quienes desarrollan**

- Informe la productividad y los resultados de aprendizaje como métricas distintas, ya que el corpus encuentra una y otra vez la primera y no logra encontrar los segundos (g ≈ 0 en el metaanálisis sobre programación). Un panel que las confunda se leerá como evidencia de aprendizaje.
- No dé por hecho que su sistema generaliza entre componentes de conocimiento. El resultado sobre la proporción de ejemplos y problemas implica que el calendario óptimo es una propiedad del contenido y no de la plataforma.
- Haga visibles para el profesorado el uso de pistas y de andamiaje, porque el volumen es una de las pocas señales conductuales vinculadas empíricamente con peores resultados.

**Para quienes investigan**

- Prerregistre la medida de resultado y declare si permite la IA o es sin asistencia. La dirección del hallazgo puede invertirse solo con esta elección.
- Informe los tamaños del efecto frente a una comparación nombrada, no frente a «enfoques tradicionales» en abstracto. El resultado del Banco Mundial solo es interpretable porque nombra su clase de comparación.
- Distinga explícitamente la inflación del rendimiento del desplazamiento del aprendizaje, ya que las dos implican remedios distintos: rediseñar la tarea o volver a enseñar.

## Conceptos conectados

- [[rct]]
- [[meta-analysis-systematic-review]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[cognitive-offloading]]
- [[math-education]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[theory-development-aied]] — Theory Development in AI in Education
- [[self-report-measures]]
- [[research-methods-aied]] — Research Methods in AIED (DBR section)
- [[social-emotional-learning]] — Social-Emotional Learning
- [[student-support-and-success]] — administrative outcomes (task completion, credits, persistence, graduation) as distinct from learning gains

## Artículos conectados

- [[epistemological-audit-genai-meta-analyses-2026]] — Una auditoría epistemológica crítica de las primeras síntesis de evidencia en la investigación educativa sobre IA generativa (Fütterer et al. 2026)
- [[contractor-learning-impact-generative-ai-2026]] — El acceso a un chatbot comercial elevó las puntuaciones en pruebas sin ayuda, que se mantuvieron una semana (Contractor y Reyes 2026)
- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — La tutoría con IA supera al aprendizaje activo en clase: un ensayo aleatorizado que introduce un diseño novedoso basado en investigación en un contexto educativo auténtico (Kestin et al. 2025)
- [[genai-performance-vs-learning]] — por qué el rendimiento asistido no es un resultado de aprendizaje (Yan et al. 2025)
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoría virtual con aprendizaje asistido por ordenador: un experimento sobre adopción y aprendizaje
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[ai-literacy-assessment-misalignment]] — AI Literacy Assessment: Self-Reported vs Performance Misalignment
- [[generative-ai-reduced-study-time-math]] — Terminar antes, aprender menos: la IA generativa redujo el tiempo de estudio en problemas de matemáticas y el conocimiento que construyen
- [[genai-meta-analysis-programming-learning]] — Un metaanálisis del efecto de la IA generativa en la productividad y el aprendizaje de la programación
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Metaanálisis de los efectos de las intervenciones en alfabetización en IA
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT help produces learning gains equivalent to human tutor help
- [[generative-ai-guardrails-harm-learning]] — La IA generativa sin salvaguardas puede perjudicar el aprendizaje (ensayo aleatorizado de PNAS 2025)
- [[absent-cognitive-baseline-2026]] — La línea base cognitiva ausente: teorizar una brecha estructural en la autoevaluación académica del estudiantado universitario nativo en IA
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[ai-changing-teaching-workflows]] — Cómo la IA está cambiando los flujos de trabajo docente
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metaanálisis del aprendizaje de lenguas asistido por robots corpóreos mejorados con IA
- [[genai-educational-outcomes-meta-analysis]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Immediate performance vs durable learning distinction
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — La penalización de aprendizaje de la IA generativa: delegar las tareas perjudica el aprendizaje
- [[ai-assisted-collaborative-learning-model-dbr]] — Modelo de aprendizaje colaborativo asistido por IA con investigación basada en diseño (pensamiento crítico +24,1%, ganancias en resolución de problemas)
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs general AI
- [[jost-llm-programming-education-learning-outcomes]] — Dependencia de los LLM y calificaciones en programación (correlaciones negativas)
- [[genai-can-harm-teaching-rct-2026]] — La IA generativa puede perjudicar la enseñanza (ensayo aleatorizado)
- [[zhao-genai-higher-order-thinking-meta-2026]] — Metaanálisis sobre IA generativa y pensamiento de orden superior
- [[mujib-ai-ibl-creative-math-2026]] — Aprendizaje basado en indagación con apoyo de IA y desempeño matemático creativo
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — AI-enhanced PBL scaffolding gains
- [[ccct-cooperative-learning-technique]] — AI-designed cooperative learning technique
- [[scaffolding-srl-feedback-genai-human-peers]] — Scaffolded self-regulated feedback gains
- [[learner-ai-interaction-patterns-oop]] — Patrones de interacción y ganancias de aprendizaje en programación orientada a objetos
- [[ai-feedback-critical-thinking-writing-2026]] — Retroalimentación de IA y pensamiento crítico en la escritura
- [[pedagogy-ai-mistakes]] — La pedagogía de los errores de la IA: fomentar el pensamiento de orden superior (Hosseini 2026)
- [[computational-thinking-aica-2026]] — Niveles de pensamiento computacional y asistentes de programación con IA (2026)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analysis: adaptive/AI EdTech raises learning ~0.125 sd
- [[gpt4-feedback-student-activation-2026]]
- [[rachatasumrit-example-problem-ratio-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (media-comparison critique of gains measures)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metametaanálisis: los efectos de ganancia de aprendizaje con IA ajustados por sesgo equivalen a ~1/3 del tamaño reportado
- [[oneill-presumed-effective-meta-analysis-2026]] — Presuntamente eficaz: auditoría de metaanálisis defectuosos sobre IA en educación
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Una síntesis STEM que controló tamaños de efecto dependientes y evaluó el sesgo de publicación, pero no aplicó valoración de calidad (Doğan et al. 2026)
- [[ai-education-effects-second-order-meta-analysis-2026]] — Metaanálisis de segundo orden de 45 metaanálisis sobre IA en educación, con efectos corregidos por solapamiento y una valoración de calidad de la capa de síntesis (Emslander et al. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes en el GRE
- [[rodrigues-aied-unplugged-numeracy-2026]] — En la IA mediada por el profesorado, la mejora la movió la preparación y no la herramienta
