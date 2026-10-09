---
title: Limitaciones de la investigación en AIEd
created: "2026-09-28T20:10:35-04:00"
updated: "2026-10-09T17:40:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
translation_of: concepts/limitations-in-aied-research
source_updated: "2026-10-07T07:20:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Limitaciones de la investigación en AIEd** — las debilidades y restricciones recurrentes que afectan a cuánta confianza podemos depositar en los hallazgos sobre IA en la educación, y cómo deberían interpretarlos los lectores. Atraviesan los estudios individuales: limitaciones metodológicas (generalizabilidad, tamaño de muestra, validez, autoinforme), el problema de la velocidad (la IA y los hallazgos quedan obsoletos rápido mientras la publicación se retrasa), limitaciones de la relación entre investigación y práctica (reproducibilidad, prácticas FAIR, herramientas propietarias) y un uso débil de la teoría. Los límites metodológicos son medibles y no impresionistas: en una revisión crítica de 80 estudios de HCI sobre pensamiento crítico con IA, 42 (52%) no tenían grupo de control y la mayoría del resto se apoyaba en el autoinforme, así que los hallazgos positivos del campo descansan en diseños que no pueden separar el efecto de la IA del de la reflexión ordinaria ([[critical-review-critical-thinking-hci-research-ai-2026]]). La codificación de resultados es desigual de la misma manera: una revisión sistemática de 103 estudios de educación superior clasificó su corpus en una tipología de resultados de cuatro niveles y situó el 56% en un único patrón condicional, en el que la confianza y la motivación subían sin una ganancia correspondiente en competencia duradera ([[generative-ai-higher-education-systematic-review-2026]]).. Reconocer estos límites es esencial para leer la literatura con criterio y para diseñar estudios más sólidos.

## Preguntas para reflexionar

- ¿Cuánto confiaría en un titular como «la tutoría con IA mejora el aprendizaje un 30%» si supiera que proviene de 30 estudiantes de un solo curso en una sola institución? La página señala la generalizabilidad y las muestras pequeñas como límites recurrentes: ¿qué le gustaría saber antes de actuar a partir de un único hallazgo?
- Una limitación llamativa es el «problema de la velocidad»: la IA evoluciona más rápido de lo que se publican los hallazgos, así que un estudio de una generación de modelos puede describir ya un sistema obsoleto. ¿Cómo debería cambiar eso la confianza que deposita en la investigación sobre educación e IA?
- Muchos estudios se basan en actitudes y usos [[self-report-measures|autoinformados]], que están sesgados: las personas sobreestiman su competencia e infrainforman del mal uso. ¿Ha respondido alguna vez a una encuesta sobre sus propias habilidades o conducta de una forma que no coincidía con la realidad? ¿Por qué las medidas basadas en la percepción divergen tan a menudo del rendimiento objetivo?
- La página señala que marcos familiares como la taxonomía de Bloom se leen a menudo como escaleras estrictas, y que incluso teorías muy usadas como la teoría de la [[cognitive-offloading|carga cognitiva]] han sido cuestionadas. ¿Cuándo ha visto invocar una teoría como verdad establecida en un contexto donde su propia evidencia estaba en disputa?
- La mayor parte de la investigación sobre IA depende de modelos propietarios y opacos cuyos datos y actualizaciones no se pueden inspeccionar. Si no puede verificar exactamente qué modelo produjo un resultado, ¿cuánto puede confiar en las afirmaciones construidas sobre él, y qué haría que los hallazgos fueran más reproducibles?
- Si usted es docente o diseñador y no tiene tiempo para leer investigación primaria, ¿cómo decide qué afirmaciones sobre IA son lo bastante fiables como para cambiar su práctica, dado que la literatura es fragmentada, provisional y está escrita para investigadores?

## Introducción

La IA en la educación es un campo heterogéneo y de rápido movimiento, y su base de evidencia arrastra un conjunto característico de limitaciones que investigadores, profesionales y responsables de políticas deberían sopesar al usar cualquier hallazgo. Algunas son compartidas con la literatura más amplia de las ciencias del aprendizaje y la psicología; otras se amplifican o se vuelven únicas por la naturaleza de la propia IA. Esta página las organiza en cuatro áreas transversales.

## Limitaciones metodológicas

La página de [[research-methods-aied|métodos de investigación]] de la base de conocimiento detalla las fortalezas y limitaciones de cada diseño. Varios límites se repiten entre diseños y merecen atención especial:

- **Generalizabilidad.** Los hallazgos de un solo curso, institución, disciplina o contexto nacional pueden no transferirse. Las muestras pequeñas, de conveniencia o de una sola institución limitan la validez externa; los resultados de una herramienta de IA rara vez se extienden a otra herramienta o contexto.

- **Las comparaciones de creencias entre países conllevan un riesgo de medición.** Una encuesta en cinco países a 1.405 docentes de K-12 usó traducción automática sin retrotraducción ni pruebas de invariancia de medición y midió la preocupación por el plagio y la creatividad con ítems únicos, así que sus contrastes entre países no pueden leerse como constructos equivalentes ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **El rigor de la síntesis es un eje distinto del rigor del estudio primario.** Un metaanálisis puede cumplir sus propios criterios de inclusión y aun así agrupar estudios que difieren en diseño, fidelidad de implementación y medida de resultado sin ponderar nada de eso: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan y sus colegas (2026)]] afirman con claridad que no usaron ninguna herramienta formal de evaluación de la calidad y que trataron los criterios de inclusión como el umbral de rigor, de modo que un estudio cuasiexperimental y uno aleatorizado contribuyeron por igual a la estimación combinada de [[stem-education|STEM]]. La misma revisión muestra un riesgo de notificación relacionado: su heterogeneidad se cita como I² = 82,98% bajo un modelo de efectos fijos y I² = 15,75% bajo el modelo de efectos aleatorios, lo que significa que los lectores que toman una sola cifra de heterogeneidad sin su modelo no pueden saber cuán inconsistente es realmente el corpus. Evalúe una síntesis por cómo manejó los tamaños del efecto dependientes, la calidad y la heterogeneidad, y no solo por si siguió un protocolo de búsqueda.

- **El diseño de la recuperación fija las cifras estrella de una síntesis.** En una revisión de alcance de 195 estudios de formación docente, la competencia digital y el [[tpack|TPACK]] eran descriptores de búsqueda explícitos mientras que el diseño instruccional y la evaluación no tenían equivalente, así que el 46,5% y el 1,9% informados describen el corpus recuperado y no el campo ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Tamaños de muestra pequeños.** Muchos estudios de AIEd tienen potencia insuficiente: demasiado pocos participantes para detectar de forma fiable efectos significativos o para sostener las afirmaciones fuertes que a veces se extraen de ellos.

- **El diseño de la validación puede fabricar la cifra estrella.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara y Halloluwa (2026)]] comparan quince modelos en familiaridad basada en EEG y muestran que la validación cruzada estratificada estándar permite fuga temporal e informa de hasta 0,9853 de F1, mientras que la validación Group K-Fold independiente del ensayo rebaja el pico a 0,6038 de F1 —todavía por encima del azar, pero lejos del resultado citado.
- **Los puntos de referencia pueden aportar los fallos que informan.** La recalificación experta de 250 ítems de física rechazados atribuyó 238 (95,20%) a errores del punto de referencia o del evaluador y solo 12 (4,80%) a errores genuinos del modelo, así que la tasa de error medida de un modelo no puede caer por debajo de la tasa de defectos del instrumento.([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]])
- **Validez y medición.** La [[assessment-validity|validez de constructo]] suele ser débil: los indicadores indirectos de «aprendizaje», «[[student-engagement|implicación]]» o «alfabetización» varían mucho, y los instrumentos no siempre están validados para la población o el constructo que se estudia. La precisión de un [[benchmark|punto de referencia]] no equivale a eficacia educativa.
- **Autoinforme y datos de encuesta.** Una gran parte del corpus se apoya en actitudes, motivación y uso autoinformados. El autoinforme está sujeto a sesgo —quienes responden sobreestiman su competencia, infrainforman del [[ai-misuse-learning-harm|mal uso]] y juzgan mal su propia conducta—, así que las medidas basadas en la percepción divergen con frecuencia del rendimiento objetivo (véanse [[ai-literacy-assessment-misalignment]] y [[educational-measurement]]).
- **La notificación de contexto y validación puede cuantificarse en toda una literatura.** Una revisión PRISMA-ScR de 421 estudios sobre NLP en comentarios de evaluación docente encontró el país sin resolver en 221 estudios, alcances de una sola institución en 232 de 284 casos resueltos (81,7%), validación externa en 33 (7,8%) y acuerdo entre anotadores en 54 (12,8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher y da Silva (2026)]]).
- **La riqueza de la notificación es medible, y el tipo de método la predice.** En 888 artículos sobre automatización de revisiones, el 38,0% de los artículos de software o producto desde 2023 no informaba de ninguna evaluación frente al 9,3% de los artículos sobre LLM, y el 52% de 118 artículos sobre LLM solo positivos aun así señalaba un listón de fiabilidad no cumplido, el patrón que subyace a los cinco niveles de divulgación de PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta y Lin (2026)]]).
- **Estandarizar dentro de cada conjunto de datos puede ocultar una tergiversación de la dispersión.** Cuando se estandarizaron cohortes educativas sintéticas por su propia dispersión, el hecho de que su estructura semanal variara entre 2,6 y 4,9 veces menos que la de las cohortes reales se volvió invisible para las estadísticas informadas: un preprocesamiento rutinario, en palabras de los autores, no una preocupación hipotética ([[synthetic-educational-data-structural-fidelity-2026|Inoue y Yasutake, 2026]]).

- **Las etiquetas generadas por modelos no son verdad de referencia.** Cuando las etiquetas que entrenan o evalúan un sistema las producen los propios modelos de lenguaje, el acuerdo entre anotadores no puede establecer validez: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] nunca validaron sus anotaciones de aserciones contra etiquetas de referencia humanas, y los 49 clasificadores de codificador que publican heredan esa procedencia y pueden no ser válidos donde las aplicaciones difieren en dimensiones significativas. Su esquema además rindió estrictamente por debajo del clasificador ajustado finamente entrenado con datos anotados por expertos (macro-F1 0,673 frente a 0,76), lo que deja los corpus etiquetados por expertos como algo que merece la pena cuando se requiere alta confianza.

## El problema de la velocidad: la IA evoluciona más rápido que los hallazgos

La IA cambia de forma continua, y las conclusiones extraídas de un modelo o sistema dado pueden quedar **obsoletas rápidamente**. Un estudio de una generación de [[llm|LLM]] puede no describir la siguiente; las puntuaciones de los puntos de referencia, la calidad de la tutoría e incluso la utilidad práctica de un hallazgo cambian a medida que mejoran los modelos. A esto se suma que el **proceso de publicación es lento** —desde el diseño del estudio hasta la publicación revisada por pares puede pasar un año o más—, así que un resultado publicado puede describir ya un sistema obsoleto. Quienes revisan y quienes leen deberían, por tanto, tratar los hallazgos de AIEd como afirmaciones provisionales y sensibles a la fecha, y no como verdades estables, y preferir trabajos recientes, orientados a la replicación y explícitos sobre la versión.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni y Fryer (2026)]] hacen concreta la consecuencia para una literatura: como los sistemas basados en RAG solo estuvieron disponibles públicamente en noviembre de 2023, sostienen que los hallazgos sobre [[intelligent-tutoring|tutoría inteligente]] anteriores a 2023 —que se apoyaban en sistemas de NLP basados en reglas, coincidencia de palabras clave o heurísticas, con poca semejanza funcional con los grandes modelos de lenguaje actuales— deberían tratarse como contexto histórico y no como evidencia directamente comparable, e informan de que su revisión no encontró ningún ECA publicado que examinara un chatbot de IA basado en RAG en educación de grado a lo largo de un curso académico completo. La implicación es que quizá haya que volver a plantear las preguntas fundacionales sobre cómo afecta la IA generativa al aprendizaje frente a cada nueva generación de modelos, en lugar de darlas por resueltas agrupando resultados más antiguos.

## Limitaciones de la investigación y la práctica

Varias limitaciones se refieren a la realización y la infraestructura de la propia investigación:

- **Falta de reproducibilidad.** Los estudios a menudo no informan de suficientes detalles (prompts, versiones de modelo, hiperparámetros, datos, código de análisis) para que otros reproduzcan o verifiquen los resultados, un problema particular dada la sensibilidad de la salida de los LLM a los prompts y a la configuración.
- **Prácticas de investigación FAIR.** La práctica abierta y reproducible —datos y código **F**indables, **A**ccesibles, **I**nteroperables y **R**eutilizables, preregistro y puntos de referencia compartidos— se adopta de forma desigual en AIEd. El débil cumplimiento de los principios FAIR dificulta reutilizar, comparar y construir sobre los estudios.
- **Herramientas y modelos propietarios.** Mucha investigación depende de [[ai-technologies|sistemas de IA]] cerrados y propietarios cuyo comportamiento interno, datos de entrenamiento y actualizaciones son opacos y pueden cambiar sin aviso. Esto limita la reproducibilidad, hace imposible la replicación exacta y puede atar los hallazgos a la hoja de ruta de un proveedor. También plantea dudas sobre la independencia de la evaluación (véase [[ai-ed-evaluation]]).

## Uso débil o limitado de la teoría

Una crítica recurrente es que muchos artículos empíricos tienen un **marco teórico limitado o desactualizado**. Los investigadores pueden:

- **Adoptar teorías sin sentido crítico.** Se toman marcos prestados porque resultan familiares, sin abordar plenamente sus supuestos, su alcance o su base de evidencia.
- **Interpretar los marcos como secuencias fijas.** Varios marcos ampliamente usados se tratan como escaleras ordenadas que el estudiantado debe subir de una etapa «baja» a una «alta», pero la evidencia no respalda empezar siempre por abajo. Por ejemplo:
    - **La taxonomía de Bloom** se lee a menudo como una jerarquía estricta (recordar → aplicar → evaluar), pero los objetivos de orden superior no exigen primero ejercitar los de orden inferior; las tareas pueden diseñarse para implicar la evaluación o la creación desde el principio (véase [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** y otros modelos de diseño instruccional se tratan a veces como fases lineales rígidas en lugar de las heurísticas de planificación iterativas y flexibles que pretenden ser (véase [[learning-design]]).
- **Pasar por alto teorías contestadas.** Algunas teorías muy usadas en AIEd han sido cuestionadas ellas mismas. La **teoría de la carga cognitiva**, por ejemplo, ha sido criticada y sus afirmaciones empíricas refutadas o discutidas en estudios previos, pero se sigue invocando como fundamento establecido en trabajos nuevos de AIEd.

La implicación no es que las teorías y los marcos sean inútiles, sino que deben usarse atendiendo a su base de evidencia real, a su alcance previsto y a sus críticas conocidas, y no como [[scaffolding|andamiajes]] evidentes por sí mismos ni como secuencias procedimentales rígidas.

## La crisis de la evidencia metaanalítica

Un cuerpo creciente de metainvestigación —revisiones que escudriñan las revisiones— sostiene que las afirmaciones estrella del campo sobre ganancias de aprendizaje impulsadas por la IA se apoyan en una base de evidencia mucho más débil de lo que parece. Tres críticas complementarias lo argumentan con una fuerza inusual:

- **El sesgo de síntesis positiva es grave y cuantificable.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]], en un metametaanálisis a nivel de estudio de 1.840 tamaños del efecto procedentes de 67 metaanálisis, encontraron evidencia sólida de sesgo de publicación (todas las pruebas de Egger *p* < 0,0001) y una heterogeneidad extrema entre estudios (τ = 0,869). Los efectos ajustados por sesgo de publicación eran aproximadamente **un tercio** de la magnitud que se suele informar (SMD = 0,196 frente a una mediana de 0,67 en la literatura publicada), con un intervalo de predicción que abarca de −1,521 a +1,908, desde un daño grande hasta un beneficio grande. Ningún subgrupo por resultado, campo, nivel o papel de la IA mostró ganancias consistentes, y no hubo diferencia entre estudios anteriores y posteriores a 2023. Su veredicto: las afirmaciones amplias de ganancias de aprendizaje generalizadas son prematuras.
- **Los métodos metaanalíticos se están aplicando mal de forma sistemática.** La auditoría forense de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] sobre 14 metaanálisis de AIEd de alto impacto encontró que *ninguno* aportaba una base válida para sus afirmaciones: ninguno tenía un constructo coherente (tratar la herramienta «ChatGPT» como si fuera una única intervención, y agrupar puntuaciones de pruebas, motivación, [[self-efficacy|autoeficacia]] y actitudes en un solo número de «[[learning-gains|rendimiento académico]]»); la heterogeneidad informada era grave, con I² entre 77,2% y 94,4% en los 13 metaanálisis que la informaban y 12 de esos 13 por encima del 80%, y nunca se resolvió (ninguno alcanzó el tamaño mínimo de subgrupo de diez estudios, cinco se apoyaban en subgrupos de un solo estudio y otros tres en subgrupos de dos); doce trataron tamaños del efecto dependientes del mismo estudio como independientes, inflando la evidencia aparente; y ninguno evaluó válidamente el sesgo de publicación (eran comunes las métricas desacreditadas de N a prueba de fallos y las pruebas de Egger mal aplicadas). Como el I² depende de la precisión, no puede por sí solo establecer cuán separados están los efectos verdaderos, y la notificación que lo mostraría faltaba en gran medida: solo cuatro metaanálisis informaron de la varianza entre estudios (τ²) y solo dos de un intervalo de predicción, ambos de los cuales incluía el cero. Una mayoría (61%) de los estudios primarios verificados al azar eran problemáticos, y un estudio con referencias fabricadas fue incluido por seis de los 14 metaanálisis.
- **El «tratamiento» es una caja negra.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] reavivan el debate sobre medios y métodos para sostener que «ChatGPT» es una herramienta y no un método: preguntar si «mejora el aprendizaje» es un non sequitur. Al auditar un subconjunto de los estudios que sustentan el metaanálisis de Deng et al. (2025), encontraron que solo el 21% de las comparaciones tenía un tratamiento bien definido, un grupo de control *y* una medida de aprendizaje válida; los tamaños del efecto informados (g = 0,7) incluso superaban los de los [[intelligent-tutoring|Sistemas de Tutoría Inteligente]] diseñados a propósito (0,66), una señal de alarma de que el «tratamiento» era una «salsa secreta» heterogénea.

La convergencia de estas tres críticas independientes es en sí misma evidencia: a través de métodos, corpus y enfoques distintos, llegan a la misma conclusión: que los tamaños del efecto positivos en AIEd, especialmente los de los primeros metaanálisis, probablemente reflejan **sesgo de publicación, incoherencia de constructo y atajos metodológicos** tanto como (o más que) ganancias de aprendizaje genuinas. Esto no significa que las herramientas de IA no tengan valor educativo; más bien significa que la evidencia *a nivel de campo* sobre su valor está actualmente inflada y debe leerse en consecuencia. También desplaza la responsabilidad hacia la [[meta-analysis-systematic-review|calidad de la síntesis]]: un metaanálisis es tan fiable como la coherencia de sus constructos, la independencia de sus tamaños del efecto, la adecuación de su análisis de moderadores y heterogeneidad, y la validez de su evaluación del sesgo de publicación, cada uno de los cuales, según muestran las críticas, se incumple de forma habitual.

## Leer la literatura de AIEd con criterio

En conjunto, estas limitaciones abogan por una lectura crítica y multiseñal de la investigación en AIEd: comprobar si un hallazgo es generalizable y tiene potencia adecuada; verificar cómo se midieron los constructos (y si las afirmaciones se apoyan en el autoinforme); preferir trabajos recientes, explícitos sobre la versión y reproducibles; e interrogar el marco teórico en lugar de dar por sentados los marcos familiares. Esto complementa la [[research-methods-aied|elección rigurosa de métodos]] y la [[ai-ed-evaluation|evaluación]]: los buenos métodos y la buena evaluación son necesarios, pero leer atendiendo a las limitaciones es lo que convierte la evidencia en decisiones defendibles.

## De la investigación a la práctica

Una limitación adicional y práctica es el **desafío de aplicar la investigación a la [[teacher-role|docencia]] y al diseño instruccional**. Quienes ejercen —docentes, [[stakeholders|diseñadores instruccionales]] y responsables de desarrollo del profesorado— a menudo carecen del tiempo o de la pericia especializada para leer, valorar y traducir la investigación primaria en decisiones concretas de aula. La literatura es extensa, fragmentada y está escrita para investigadores; los hallazgos se informan con un detalle estadístico y metodológico que no es inmediatamente accionable; y como las afirmaciones son provisionales (véase el problema de la velocidad más arriba), quien ejerce no puede simplemente tomar un único estudio al pie de la letra. Esto crea una brecha entre lo que la evidencia respalda y lo que realmente llega a la [[pedagogy|práctica docente]].

El propósito de esta base de conocimiento es ayudar a cerrar esa brecha —facilitar seguir, interpretar y aplicar la investigación sobre IA en la educación a la práctica— mediante la curación de hallazgos de acceso abierto en resúmenes estructurados y accesibles, la conexión de trabajos relacionados a través de [[ai-education|páginas de conceptos]] y la señalización de las limitaciones que los lectores deberían sopesar. Pretende apoyar una práctica informada por la evidencia en la docencia y el diseño instruccional, y al hacerlo también sacar a la luz vacíos y preguntas que puedan orientar nueva investigación y desarrollo. Comprender los límites de la investigación no es, por tanto, un fin en sí mismo: es lo que permite a quienes ejercen aplicar los hallazgos de forma adecuada y a quienes investigan diseñar estudios más sólidos que sirvan mejor a la práctica.

## Conceptos conectados

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — El desarrollo de la teoría en la IA en la educación

## Artículos conectados
- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — Chatbots de IA en la educación superior: comparar las expectativas con la evidencia (Thoeni y Fryer 2026)

- [[ground-truth-reliability-aied]] — Fiabilidad y validez de la verdad de referencia en la evaluación
- [[ai-literacy-assessment-misalignment]] — Alfabetización en IA autoinformada frente a basada en el desempeño
- [[machines-misread-pedagogical-quality]] — Por qué las máquinas malinterpretan la calidad pedagógica
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Límites críticos de los tutores de IA y del uso de la teoría
- [[cross-dataset-bloom-question-classification]] — La taxonomía de Bloom y la clasificación de preguntas
- [[eeg-familiarity-automated-assessment-2026]] — Automatizar la evaluación de quienes aprenden: predicción de familiaridad basada en EEG
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT en la educación: un efecto en busca de una causa (crítica de la comparación de medios)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metametaanálisis: los efectos de la IA ajustados por sesgo de publicación son ~1/3 del tamaño informado
- [[oneill-presumed-effective-meta-analysis-2026]] — Presuntamente eficaz: auditoría forense de 14 metaanálisis de AIEd
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: un marco empírico de notificación para revisiones sistemáticas asistidas por IA
- [[frontier-models-physics-benchmark-audit-2026]] — ¿Qué tan buenos son los modelos de frontera en física? La recalificación experta revela evaluaciones rotas y una saturación casi total de los principales puntos de referencia
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Los criterios de inclusión usados como umbral de rigor, y una cifra de heterogeneidad que cambia con el modelo (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Un ensayo de aula aleatorizado por conglomerados cuyo resultado de desempeño no alcanzó significación (Rücker y Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes en el GRE
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluar el enfoque de la retroalimentación y la adaptatividad pedagógica en la retroalimentación generada por LLM sobre la escritura del estudiantado
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas basados en aserciones para la codificación auditable de diálogos educativos
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — De la clasificación de sentimiento a la retroalimentación accionable y responsable: revisión de alcance y mapa de evidencia del NLP en la evaluación docente por parte del estudiantado, 2015-2026
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que las métricas de fidelidad pasan por alto: una comprobación estructural de los datos educativos sintéticos

- [[digital-competence-ai-responsive-pedagogy-2026]] — Revisión de alcance de 195 estudios de formación docente donde el diseño de la cadena de búsqueda da forma a las frecuencias informadas
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Encuesta transnacional a docentes de K-12: ítems traducidos automáticamente, medidas de preocupación de un solo ítem, sin pruebas de invariancia
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Revisión sistemática de 103 estudios de IA generativa en educación superior: 56% de ganancias condicionales, con las notas enmascarando el cambio de proceso (Hawi y Samaha 2026)
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Revisión sistemática de 103 estudios de IA generativa en educación superior: 56% de ganancias condicionales, con las notas enmascarando el cambio de proceso (Hawi y Samaha 2026)
