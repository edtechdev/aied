---
title: Aprendizaje autorregulado
created: "2026-09-25T03:07:36-04:00"
updated: "2026-10-29T05:05:47-04:00"
type: concept
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm, personalized-learning]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/self-regulated-learning
source_updated: "2026-10-28T19:24:33-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
connected_resources: [process-feedback]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> El aprendizaje autorregulado (AAR) describe a quien aprende como un participante activo capaz de dar forma y desarrollar de manera exitosa sus acciones cognitivas y conductuales. Las herramientas de IA pueden [[scaffolding|andamiar]] el desarrollo del AAR o, sin proponérselo, cortocircuitarlo al eliminar las exigencias regulatorias que construyen la pericia.([[scheu-mobile-chatbot-journaling-motivation-2026]])([[stanford-evidence-base-ai-k12-2026]]) La evidencia longitudinal afina la distinción: el uso reflexivo en torno a una herramienta de IA predijo el pensamiento crítico (β = 0,43), pero no la ganancia de conocimiento, y el acceso a la herramienta por sí solo no cambió ninguna de las dos cosas.([[melanou-genai-learning-dynamics-longitudinal-2026]])

## Preguntas para reflexionar

- El AAR describe a quien aprende gestionando activamente su aprendizaje a través de tres fases: previsión (fijación de metas, planificación, autoeficacia), desempeño (estrategia, autoobservación) y autorreflexión (evaluación, adaptación). Antes de leer, ¿qué fase hace usted bien de verdad, y cuál se salta aunque sabe que le convendría hacerla?
- La tensión central de la página: la IA puede andamiar la autorregulación o cortocircuitarla al eliminar las exigencias regulatorias que construyen la pericia. ¿Cómo puede una herramienta que facilita una tarea volverlo a usted un regulador más débil de su propio aprendizaje, y puede notar la diferencia en su propio uso?
- El estudiantado muestra a menudo un «déficit de producción»: posee conocimiento sobre la autorregulación, pero no lo despliega de forma espontánea, por ejemplo pidiendo a un chatbot que «extraiga las ideas principales» y omitiendo por completo la planificación y la monitorización. ¿Se ha sorprendido haciendo el equivalente cognitivo de esto, aun sabiendo cuál es la estrategia mejor?
- Cuando hay apoyo disponible, su propio juicio puede quedar fuera de escena: en un estudio con datos de trazas, lo que determinó la estrategia de revisión elegida fue el apoyo disponible, y no la precisión metacognitiva de quien aprende. Si la ayuda externa se impone a su lectura de su propio aprendizaje, ¿qué juicio mantendría deliberadamente en sus propias manos?
- La investigación encontró una «brecha de [[trust-calibration|mala calibración]]»: el estudiantado puede *percibir* más aprendizaje con IA generativa mientras retiene menos, y prefiere la IA a tomar apuntes pese a una retención más débil. Si se siente productivo mientras usa una herramienta, ¿cómo llegaría a descubrir que en realidad no está aprendiendo más?
- Que la IA generativa funcione como andamiaje, atajo o socio depende más de la capacidad regulatoria de quien aprende que de la herramienta misma. Pero la página también muestra que la autorregulación amortigua, aunque no anula, el daño de la descarga cognitiva profunda. ¿Qué significa esa salvedad de «amortigua pero no anula» para diseñar mejores herramientas de IA?
- Fíjese una meta antes de leer: elija una tarea en la que use IA con regularidad y decida de antemano cuál de las tres fases del AAR (previsión, desempeño, reflexión) protegerá deliberadamente de ser automatizada. ¿Qué resultado le dirá que funcionó?

## Introducción

El AAR es el proceso mediante el cual quien aprende gestiona activamente su propio aprendizaje a través de tres fases interrelacionadas:

1. **Previsión:** fijación de metas, planificación estratégica, creencias de [[self-efficacy|autoeficacia]]
2. **Desempeño:** despliegue de estrategias, autoobservación, focalización de la [[cognitive-psychology|atención]]
3. **Autorreflexión:** [[self-assessment]], atribución causal, adaptación

Quien aprende autorregulándose con pericia emplea estrategias cognitivas para mejorar su éxito y utiliza la [[metacognition]] para refinar continuamente sus procesos de aprendizaje.([[scheu-mobile-chatbot-journaling-motivation-2026]])

El trabajo empírico en un curso mediado por tecnología confirma los vínculos entre fases: en un estudio adaptativo de estocástica de ocho semanas (194 estudiantes), el valor de la tarea, la autoeficacia, la orientación a metas y las emociones positivas en la fase preaccional predijeron la conducta regulatoria accional, mientras que las emociones negativas la obstaculizaron, y la satisfacción postaccional se retroalimentó hacia la siguiente fase preaccional ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh y Fromm (2026)]]).

Un mapeo sistemático de 84 estudios sobre IA y AAR encontró que la investigación se concentra en estudiantado de educación superior y en los aspectos metacognitivos y cognitivos de la autorregulación, con la dimensión motivacional poco explorada y más de un tercio de los estudios sin especificar ninguna teoría del AAR ([[banihashem-ai-srl-systematic-mapping-review-2025|Banihashem et al. (2025)]]).

Un punto decisivo es que el AAR en torno a la IA está moldeado por la *percepción* tanto como por la conducta: [[yilmaz-genai-feedback-srl-online-higher-ed-2026|Yilmaz et al.]] demuestran que percibir la retroalimentación como procedente de una IA o de una persona humana afecta significativamente al aprendizaje autorregulado y a la conducta de revisión, un recordatorio de que el marco social de la IA, y no solo su contenido, cambia cómo regula quien aprende en torno a ella.

Un modo de fallo se sitúa antes de que empiece la regulación: la procrastinación del aprendizaje asistido por IA generativa —un retraso innecesario en empezar el trabajo apoyado por IA generativa pese a una intención genuina de usarla. Entre 1.243 estudiantes universitarios chinos, un uso más frecuente de IA generativa se asoció con menos de ella (β = −0,195), y la ansiedad por aprender con IA generativa reforzó el vínculo entre intención y retraso ([[genai-learning-procrastination-planned-behavior-2026|Li et al. (2026)]]).

Dónde entra la IA generativa en el ciclo decide su efecto: al mapear las fases de previsión, desempeño y reflexión de Zimmerman sobre entornos mediados por IA, un marco de co-agencia sostiene que el punto de entrada determina si la herramienta amplifica o erosiona el sentido de control de quien aprende, y que la externalización solo apoya el aprendizaje transformador cuando la decisión es intencional y no rutinaria ([[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]]).

Una encuesta transversal de 434 estudiantes universitarios de educación especial mide una de esas cadenas: la alfabetización en [[generative-ai|IA generativa]] se asoció positivamente con las conductas de aprendizaje autorregulado asistidas por IA generativa (B total = 0,701), operando principalmente a través de la [[agency|agencia]] de aprendizaje (B = 0,345) y no de las emociones de desafío (B = 0,061) ([[genai-literacy-srl-special-education-2026|Yang et al. (2026)]]).

La autorregulación metacognitiva es un resultado medido y no un supuesto en [[shao-ai-vr-flipped-classroom-efl-2026|Shao, Tang y Ju (2026)]], que encontraron que un aula invertida de IA y RV la elevó junto con el rendimiento, y que quienes aprenden con mayor alfabetización tecnológica se beneficiaron más.

## Apoyo digital al AAR

### Diarios de aprendizaje

Los diarios de aprendizaje son una intervención prometedora para el AAR: al reflexionar sobre sus procesos de aprendizaje, el estudiantado aumenta la conciencia sobre su cognición y refuerza su capacidad regulatoria. Consideraciones clave de diseño:

- **La estructura importa:** los diarios abiertos producen a menudo entradas superficiales; las indicaciones guiadas y los modelos de ejemplo mejoran la profundidad
- **Deterioro de la motivación:** las aplicaciones móviles de diario suelen registrar un rápido descenso de la [[student-engagement|implicación]] tras unos pocos días
- **Compensación del andamiaje:** la asistencia de IA que escribe las reflexiones por el estudiantado socava la práctica del AAR; la asistencia que estructura las indicaciones sin redactar el contenido la preserva

### Cuadros de mando que comunican perfiles de AAR al profesorado

[[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] extienden el apoyo digital al AAR al lado docente: su cuadro de mando de [[learning-analytics]] (DashED) comunica al profesorado perfiles de aprendizaje autorregulado derivados del aprendizaje automático en aulas semipresenciales, y el modo en que el profesorado actúa sobre esos perfiles depende del contexto. En uso, el profesorado de aula invertida (universidad) siguió una exploración secuencial y prefirió la adaptación a nivel de curso y mostrar los [[visualization|cuadros de mando]] en clase, mientras que el profesorado de formación profesional revisó páginas de resumen y usó la herramienta sobre todo para sesiones de tutoría individual. Las acciones que propusieron los docentes estuvieron moldeadas por el contenido representado y por su nivel de enseñanza más que por el tipo de gráfico: el profesorado universitario prefirió pruebas semanales y adaptación del curso, y el de formación profesional, tutoría directa e individualizada. Esto sitúa el cuadro de mando como un andamiaje para la regulación de la enseñanza por parte del profesorado, con necesidades de diseño que varían según el contexto y no una única interfaz óptima.

La contraparte orientada al estudiantado es más escasa: un cuadro de mando que mostraba a 46 estudiantes de secundaria sus propios prompts de IA generativa y su solapamiento de texto con las respuestas del modelo fue abierto por solo alrededor de un tercio de la clase, lo que hace de la exposición voluntaria, y no de la visualización en sí, la restricción vinculante ([[learning-analytics-genai-secondary-writing-2026|Fong et al. (2026)]]).

### El experimento 2×2 de Scheu et al. (2026)

En un experimento de campo aleatorizado con 179 estudiantes a lo largo de 22 días, se compararon dos principios de diseño:

| Principio | Mecanismo | Efecto en el AAR | Efecto en la motivación | Efecto en la implicación |
|---|---|---|---|---|
| **Curso basado en ejemplos** | Diario reflexivo de 7 días sobre el [[curriculum-design|diseño curricular]] y el [[teacher-role]] mediante respuestas modeladas | Aumentó la competencia y el disfrute percibidos | **Positivo** | Positivo constante |
| **[[llm|Asistente de diario con LLM]]** | GPT-3.5 resume borradores, hace preguntas aclaratorias y sugiere reformulaciones | No se midió ningún efecto directo en las habilidades de AAR | **Sin efecto** | Creciente con el tiempo ([[feedback|bucle de retroalimentación]]) |

**Idea clave:** el curso mejoró las habilidades de AAR *y* la motivación intrínseca mediante la [[transfer-of-learning|transferencia de habilidades]], mientras que el asistente mejoró la implicación sin afectar a la motivación.([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Las herramientas de IA y el bucle recíproco entre AAR y motivación

Un principio fundacional de la teoría del AAR es que las habilidades de [[regulation]] y la [[motivation|motivación]] forman una **relación recíproca**:

- Un AAR mejor → un aprendizaje más exitoso → una autoeficacia mayor → una motivación más fuerte
- Una motivación mayor → una implicación con más esfuerzo → una mejor práctica de AAR

Las herramientas de IA pueden entrar en este bucle en distintos puntos:

- **Diseño centrado primero en el AAR** (por ejemplo, cursos estructurados, pistas graduadas, indicaciones de reflexión): refuerza el bucle al construir habilidades genuinas
- **Diseño centrado primero en la implicación** (por ejemplo, autocompletado, generación de contenido): puede impulsar la implicación conductual sin entrar en el bucle de la motivación, con el riesgo de generar dependencia de la herramienta

### La regulación estratégica de la IA generativa como AAR

[[ai-anxiety-strategic-regulation-writing-2026|Kim (2026)]] reenmarca el uso eficaz de la [[generative-ai|IA generativa]] en la [[writing-education|escritura académica]] como **regulación estratégica**: una práctica de AAR puesta en acto que consiste en verificar, revisar, adoptar selectivamente o rechazar la salida de la IA. En un estudio de [[mixed-methods-research|métodos mixtos]] con 107 estudiantes, una mayor [[anxiety-and-stress|ansiedad ante la IA]] se asoció positivamente con la verificación y la revisión (β=0,24), mientras que la capacidad evaluativa predijo la revisión activa y la integración selectiva (β=0,46). El estudiantado se agrupó en cuatro tipos regulatorios, Dependencia acrítica (18,7%), Integración selectiva (34,6%), Transformación evaluativa (31,8%) y Rechazo estratégico (14,9%), lo que muestra que la [[ai-literacy|alfabetización en IA]] en la [[higher-ed|educación superior]] funciona menos como aceptación que como competencia regulatoria anclada en el [[evaluative-judgment|juicio evaluativo]] y en la responsabilidad [[ethics|ética]]. Esto sitúa el AAR como el mecanismo central que distingue el uso crítico del uso acrítico de la IA.

La gobernanza de la herramienta es en sí misma una faceta medible: una validación de dos olas con estudiantes chinos de inglés como lengua extranjera (EFA N = 305; CFA N = 342) separa seis dimensiones regulatorias y nombra la *regulación ambiental* —comprobar la exactitud de la salida generada, filtrar los recursos sugeridos y fijar límites a la dependencia— como una dimensión en sí misma ([[genai-srl-l2-writing-scale-2026|Wang, Zhang y Zhang (2026)]]).


Clasifique antes de delegar: [[scan-framework-task-assignment-generative-ai-2025|Tsim y Gutoreva (2025)]] convierten la autorregulación en un protocolo por tarea —etiquetar cada subtarea como Sustituir, Complementar, Ayudar o No negociable, justificarlo en una breve nota metacognitiva y mantener un rastro de auditoría de prompts, borradores y revisiones humanas—, con el ciclo repitiéndose de modo que la asignación de una tarea informa a la siguiente.
**Cada prompt como traza regulatoria.** Leer 429 prompts de 23 estudiantes como eventos de aprendizaje autorregulado mostró que la mezcla de estructura cambiaba con el diseño de la tarea, mientras que 53 de 59 entregas se mantuvieron cerca de la salida del modelo, lo que sitúa la regulación en el intercambio y no en el artefacto ([[llm-math-homework-offloading-traces-2026|Kontorovich y Wallach (2026)]]).
**La interacción misma como objeto de regulación.** [[brunnstrom-ai-interaction-literacy-srl-2026|Brunnström y Palmqvist (2026)]] documentan la misma exigencia de regulación desde la dirección opuesta: en una demostración de ocho rondas con un chatbot para preparar la respuesta a un [[summative-assessment|examen]] para llevar a casa, la salida por defecto de la IA se mantuvo en el extremo *[[quantitative-research|cuantitativo]]* y multiestructural de la taxonomía SOLO, pulida, lista para entregar y pedagógicamente delgada, y solo alcanzó un bucle de aprendizaje utilizable de tres pasos tras repetidas intervenciones de nivel meta («esto es abrumador, ¿puedes condensarlo?»). Su conclusión es que el uso productivo exigía «las mismas habilidades autorreguladoras que la herramienta debía sostener»: quien aprende debe fijar metas incrementales, solicitar ajustes de dificultad y reflexionar sobre lo que todavía no comprende, además del contenido disciplinar mismo. Dan a esta capacidad el nombre de [[ai-literacy|alfabetización en la interacción con IA]] y tratan desvincularse de la herramienta como una decisión regulatoria legítima y no como un fallo de persistencia ([[metacognition]]).

- **La satisfacción no es autorregulación.** [[aigc-affordance-student-self-regulation-2026|Liang et al. (2026)]] encuestaron a 689 estudiantes de grado en programas de integración industria-educación y probaron un modelo de mediación serial en el que las posibilidades percibidas del contenido generado por IA elevan la [[self-efficacy|autoeficacia]] frente al AIGC (beta = 0,583) y, a través de ella, la [[motivation|motivación]] para aprender (beta = 0,565) y el aprendizaje autorregulado (beta = 0,250), con la motivación como el predictor individual más fuerte del AAR (beta = 0,527). Los resultados negativos que sostienen el argumento conviven con esas rutas: la calidad de la retroalimentación de la evaluación con IA predijo fuertemente la satisfacción (beta = 0,712), pero no la autoeficacia (beta = 0,131), y la satisfacción no tuvo un efecto significativo en el aprendizaje autorregulado (beta = 0,032). Un asistente apreciado y que funciona bien no es, por tanto, evidencia de que la regulación haya mejorado: el mecanismo pasa por la confianza y la motivación, no por la experiencia que quien aprende tiene de la herramienta.

### La reflexión consciente de la IA generativa como AAR

[[5p-reflection-model-genai-2026|El modelo de reflexión 5P (Kadel et al. 2026)]] vuelve a poner la reflexión estructurada en el centro en la era de la IA generativa como una práctica de AAR puesta en acto. Como quien aprende coconstruye cada vez más significado con la IA, los modelos de reflexión tradicionales tienen dificultades para autenticar la reflexión del estudiantado, así que el modelo 5P (Purpose, Process, Product, Pitfalls, Plan) fusiona la fijación de metas impulsada por la previsión, la reflexión en la acción (documentar las indicaciones y las iteraciones), la reflexión sobre la acción (validar la salida probabilística contra fuentes externas), una etapa explícita de riesgos para la [[hallucination-risk|alucinación]], el [[academic-integrity|plagio]] y la [[cognitive-offloading|dependencia excesiva]], y un plan prospectivo, e integra la monitorización emocional en todo el proceso. Su filosofía de «el proceso por encima del producto» trata la documentación estructurada de la [[human-ai-collaboration|interacción entre personas y IA]] como la exigencia regulatoria que preserva la autenticidad, la [[agency|agencia]] y la profundidad [[metacognition|metacognitiva]], y sitúa la reflexión consciente de la IA generativa como un andamiaje de la autorregulación y no como un sustituto de ella.

## Relación con el diseño específico de tutoría

[[stanford-evidence-base-ai-k12-2026|La IA específica de tutoría]] se alinea con un diseño centrado primero en el AAR: ofrece andamiajes graduados que preservan la [[agency|agencia]] y exigen una autorregulación estratégica. La IA de propósito general elimina a menudo por completo las exigencias regulatorias.([[stanford-evidence-base-ai-k12-2026]])

Por ejemplo:
- El [[conversational-ai|chatbot]] de tutoría específica de Bastani et al. preservó el razonamiento paso a paso (exigencia de AAR)
- La variante de GPT de propósito general simplemente dio las respuestas (omisión del AAR)

## Evidencia en distintos contextos

- **Evidencia mixta y la brecha de mala calibración.** Una revisión rápida de la investigación sobre IA generativa en PreK-12 encuentra que las ganancias metacognitivas durante tareas asistidas a menudo no persisten cuando se retira el apoyo, y que la IA generativa puede aumentar el [[self-report-measures|aprendizaje percibido]] incluso cuando el aprendizaje duradero está ausente (la brecha de mala calibración: el estudiantado prefirió la IA generativa a tomar apuntes pese a una retención más débil). El estudiantado necesita formación explícita y adecuada a su etapa para decidir qué delegar y cuándo importa el esfuerzo independiente.([[young-people-learning-generative-ai-rapid-review-2026]])

- **El AAR rara vez es el objetivo activo.** En los 394 estudios de IA generativa en educación superior, el aprendizaje autorregulado y la reflexión estuvieron entre los usos menos puestos en práctica y entre los resultados menos abordados ([[mapping-genai-higher-ed-scoping-review|Lin et al. (2026)]]).
- **La tensión entre iniciativa [[agentic-ai|agéntica]] y autorregulación.** [[agentic-ai-pedagogical-best-practice-2026|Woollaston et al. (2026)]] señalan que cuanto más automatiza un agente una tarea, menos trabajo cognitivo autorregulado realiza quien aprende, de modo que los diseños deberían dar a quien aprende control sobre la iniciación del agente (andamiaje dinámico y que se desvanece) para preservar su capacidad autorreguladora en lugar de externalizarla.
- **La autorregulación da forma al uso de asistentes de IA para programar.** [[computational-thinking-aica-2026|Un estudio sobre asistentes de IA para programación]] encontró que el estudiantado con alto [[computational-thinking]] mostró una coherencia autorreguladora más fuerte (planificación, ejecución y autorreflexión) y usó el AICA para comprender el código, mientras que el estudiantado con bajo pensamiento computacional lo usó para obtener respuestas inmediatas.
- **El AAR se da junto con una menor distracción digital en el [[online-teaching-and-learning|aprendizaje en línea]].** [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]], mediante minería de datos no supervisada en 530 estudiantes universitarios, encontraron que las estrategias de AAR (fijación de metas, estructuración del entorno y gestión del tiempo) se daban conjuntamente, y de la forma más consistente, con una menor distracción digital en el [[online-teaching-and-learning|aprendizaje en línea]], junto con la implicación estudiante-docente y estudiante-contenido. El hallazgo sitúa la formación concreta en AAR como una intervención de alto impacto para el estudio en línea con concentración.
- **La conciencia metacognitiva, y no el acceso a la herramienta, es el motor más fuerte del rendimiento adaptativo en STEM.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai y Alshahri (2026)]] construyeron y validaron el AI-STEM-MLCS con 649 estudiantes de secundaria en Arabia Saudí (CFI = 0,983, RMSEA = 0,019; ω de McDonald = 0,888 a 0,905) y encontraron que sus cuatro dimensiones explicaban el 68 % de la varianza del rendimiento en aprendizaje autorregulado (R² = 0,68). La conciencia metacognitiva basada en IA fue el predictor más fuerte (β = 0,38, p < 0,001), seguida de la transferencia cognitiva y la adaptabilidad (β = 0,29, p = 0,008) y del aprendizaje autorregulado potenciado por IA (β = 0,21, p = 0,040), mientras que el razonamiento creativo y crítico en STEM con IA no predijo el criterio (β = 0,14, p = 0,135). Los autores leen el patrón como evidencia de que la retroalimentación [[adaptive-learning|adaptativa]] eleva el rendimiento en STEM sobre todo al incitar a quien aprende a examinar los errores, recalibrarse y reutilizar estrategias, de modo que el instrumento funciona mejor como un diagnóstico que localiza lagunas de metaaprendizaje que como una única puntuación global. Es una medida de [[self-report-measures|autoinforme]] validada en un solo sistema nacional, así que los coeficientes son provisionales.
- **El apoyo externo puede saltarse el propio juicio metacognitivo de quien aprende.** [[iqbal-human-genai-support-essay-revision-2026|Iqbal et al. (2026)]] siguieron a 87 estudiantes de inglés como lengua extranjera que revisaban un ensayo con apoyo de [[generative-ai|IA generativa]] (ChatGPT 4.0), con apoyo de personas expertas o sin apoyo. La condición de apoyo fue con diferencia el correlato más fuerte de la estrategia de revisión que elegía el estudiantado (V de Cramér = 0,668), muy por delante del arrastre de la tarea de escritura anterior (V = 0,333), mientras que la precisión del juicio metacognitivo (p = 0,172), la habilidad de escritura (p = 0,261) y la [[motivation|motivación]] (p = 0,683) no mostraron asociación. El juicio metacognitivo siguió a la estrategia solo cuando no había apoyo disponible (prueba de permutación p = 0,0460). El estudiantado con apoyo de IA generativa fue el que más ganó (unos 4 puntos de media con la estrategia de búsqueda de ayuda decreciente, frente a −0,5 puntos para la misma estrategia con apoyo de personas expertas), pero ninguna estrategia de revisión se asoció con el cambio de puntuación (H(3) = 3,895, p = 0,273), así que las ganancias vinieron de la herramienta y no de una mejor autorregulación. La orientación de los autores es que la IA generativa debería propiciar la reflexión sobre la propia estrategia de revisión en lugar de suministrar ayuda directa.
- **El uso reflexivo se asocia con el pensamiento crítico, no con la ganancia de conocimiento.** [[melanou-genai-learning-dynamics-longitudinal-2026|Melanou et al. (2026)]] siguieron tres clases paralelas de estudiantes de informática empresarial (N = 87) a lo largo de un curso de nueve semanas, con un aumento del conocimiento en todos los grupos (F(1, 50) = 29,87, p < 0,001, η²p = 0,374) y sin ventaja de la IA, sin interacción Tiempo × Grupo y sin efecto Mateo (F(1, 48) = 2,46, p = 0,124; BF01 = 8,70). El uso reflexivo (comprobar las fuentes y verificar la salida de la IA antes de adoptarla) fue notablemente mayor en la condición con IA (3,72 frente a 2,82; F(1, 40) = 20,21, p < 0,001) y predijo el pensamiento crítico (β = 0,43, p < 0,001), pero no la ganancia de conocimiento, que sí predijo la carga cognitiva pertinente (β = 0,51, p = 0,001). La lectura práctica es que el acceso a la IA no es una intervención en sí mismo y que su rédito metacognitivo aparece antes en la calidad del razonamiento que en las puntuaciones de las pruebas.

- **La estructura, y no la IA por sí sola, impulsa las ganancias de AAR.** Mapear las fases de Zimmerman sobre la instrucción híbrida basada en proyectos con la IA como [[scaffolding|andamiaje metacognitivo]] produjo una N-Ganancia de 0,72 frente a 0,28 para la instrucción convencional (t = 8,47, p < 0,001, [[ai-project-hybrid-learning-self-regulated-2026|Priyambudi et al. (2026)]]), quienes sostienen que la IA fortalece la autorregulación solo dentro de la estructura de la tarea: el uso no estructurado corre el riesgo de provocar pereza metacognitiva.

- **El andamiaje emocional mueve fases del AAR medidas por trazas que el andamiaje cognitivo por sí solo no mueve, y el autoinforme apenas lo capta.** Un experimento prerregistrado con 144 estudiantes de secundaria comparó un ChatGPT simple, un agente de andamiaje del AAR y una versión emocional que preguntaba por los sentimientos en tres momentos y adaptaba el tono y el desafío conforme a la teoría control-valor. La codificación de trazas encontró efectos grandes de condición en las tres fases (ε2 = 0,44 previsión, 0,34 desempeño, 0,34 autorreflexión). Las indicaciones de AAR por sí solas elevaron la fijación de metas y la planificación al nivel de la versión emocional, mientras que la capa emocional añadió más actividad en la fase de desempeño (r = 0,22) y de autorreflexión (r = 0,31). El AAR autoinformado solo separó las condiciones en la fase de desempeño; las correlaciones entre traza y autoinforme fueron de 0,313 allí, 0,22 en la previsión y 0,04 en la autorreflexión. Los autores leen las diferencias de trazas como una puesta en acto corregulada y no como capacidad regulatoria independiente ([[diordiev-emotional-scaffolding-genai-srl-2026|Diordiev, Stenberdt y Makransky, 2026]]).

## El AAR mediado por LLM: ¿andamiaje, atajo o socio?

Un conjunto de estudios de Learning Letters (2026) converge en una tensión central: la [[generative-ai|IA generativa]] puede andamiar, cortocircuitar o acompañar la autorregulación según el diseño y según cómo quien aprende regule su uso. La evidencia apunta al propio AAR, y no a la herramienta, como la variable decisiva.

- **[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al.]]** encuentran que los LLM se integran en un *ecosistema de [[help-seeking]] por capas* en lugar de sustituir el apoyo humano: el estudiantado intenta las tareas por su cuenta primero, luego consulta ChatGPT como primer paso de bajo coste, a sus pares para negociar conceptos y al profesorado para cuestiones de alta importancia. Prefieren la **búsqueda de ayuda instrumental** (pistas, orientación paso a paso) a la **búsqueda de ayuda ejecutiva** (soluciones directas), ejercen una [[trust|confianza]] selectiva y verifican las salidas contra los materiales del curso, un proceso de cuatro etapas (decidir si se necesita ayuda, elegir a quién preguntar, determinar el tipo de ayuda y juzgar la ayuda recibida) que puede medirse y enseñarse.
- **[[atif-dickson-deane-scaffold-shortcut-genai-srl-2026|Atif y Dickson-Deane]]** enmarcan el uso de la IA generativa como **[[cognitive-offloading|descarga cognitiva]]** que puede ser *andamiada* (quien aprende critica y adapta las salidas de la IA, conservando la [[agency|agencia]] y la construcción de sentido) o *sustitutiva* (quien aprende acepta las salidas con una verificación mínima, desplazando el control a la herramienta). En un estudio con 267 estudiantes de posgrado en tecnología de la información, la misma herramienta podía andamiar o cortocircuitar el AAR según la estrategia de quien aprende: el estudiantado con más confianza mostró agencia al fijar metas y monitorizar; el menos confiado vio en la IA generativa un atajo o una falta de integridad.
- **[[lim-bannert-student-regulation-genai-chatbot-2026|Lim y Bannert]]** muestran el riesgo de forma concreta: el estudiantado usó voluntariamente un chatbot de IA generativa (73%) y obtuvo puntuaciones más altas en sus ensayos, pero externalizó la comprensión y la síntesis (pidiendo al chatbot que «extraiga solo las ideas principales») y apenas realizó planificación ni monitorización, delegando decisiones regulatorias clave. Esto refleja un **déficit de producción**: el estudiantado posee conocimiento sobre el AAR, pero no lo despliega de forma espontánea, por lo que las herramientas de IA generativa deberían propiciar la reflexión (un andamiaje de monitorización) cuando las consultas indican una externalización.
- **[[song-genai-learning-partner-srl-over-time-2026|Song et al.]]** demuestran que el AAR es a la vez una **aptitud estable y un estado dinámico**: las líneas base individuales son consistentes, pero el conocimiento metacognitivo y el [[well-being|bienestar]] disminuyen de forma sistémica a lo largo de un semestre, impulsados por las fechas límite de la evaluación. Muestran que la IA generativa puede actuar como un **[[pedagogical-agent|socio de aprendizaje]]** sensible al contexto cuando recibe datos personales, temporales y contextuales, apoyando al estudiantado sin sustituir su esfuerzo. Esto argumenta en contra de una [[personalized-learning|personalización]] «única para todos» basada solo en la aptitud de partida.
- **[[de-barba-srl-genai-2026|de Barba]]** amplía teóricamente el AAR y sostiene que el campo se ha estrechado hacia la regulación centrada en la tarea y hacia indicadores conductuales optimizables en la tecnología educativa. El artículo propone una explicación multiescala de la **agencia de quien aprende**: la regulación (dentro de las tareas), la integración (a lo largo del tiempo y de los contextos) y el posicionamiento (crítico en relación con las condiciones que enmarcan el aprendizaje), como orientación de diseño para entornos mediados por algoritmos.
- **La autorregulación amortigua, pero no anula, el daño de la externalización.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] muestra que la escritura autorregulada atenúa, aunque no elimina, la asociación negativa entre la [[cognitive-offloading|descarga cognitiva]] profunda y los resultados independientes sin IA en la escritura asistida por IA generativa: la interacción entre la descarga y el AAR fue positiva (B = 0,22), lo que aplana el daño de una pendiente de −0,54 (AAR bajo) a −0,33 (AAR alto), pero no lo anula. Una condición de apoyo acotado que combinaba límites de delegación con reflexión obligatoria produjo el mejor rendimiento independiente, evidencia de que la regulación metacognitiva protege parcialmente a quien aprende, pero no puede compensar por completo la delegación del trabajo cognitivo en sí.

**Dónde encaja el alquiler dentro de los modelos de Winne.** [[rented-self-decoupling-performance-becoming-2026|de Barba (2026)]] mapea el mecanismo sobre el AAR como operaciones que el sistema realiza en lugar de quien aprende: la observación, la monitorización y el juicio evaluativo los ejerce la herramienta; un bloqueo se resuelve mediante búsqueda y no mediante el propio «si-entonces, si no» de quien aprende; y los criterios con los que la persona juzga son prestados y no construidos. Una capacidad que quien aprende cree tener mientras la tiene la herramienta, el *alquiler oculto*, suprime la señal de error que de otro modo impulsaría la regulación, y diez proposiciones especifican qué comprobar, incluidos unos costes mayores en la aclimatación al dominio y unos criterios que se desplazan hacia los puntos de referencia del propio modelo.

La lección colectiva: **el AAR es el mecanismo central que distingue el uso crítico del uso acrítico de la IA.** Que la IA generativa funcione como andamiaje, atajo o socio depende de la capacidad regulatoria de quien aprende y de si las herramientas están diseñadas para preservar (y no eliminar) las exigencias regulatorias que construyen la pericia.

Qué apoyo está en juego decide qué mediador carga la asociación: entre 3.003 docentes chinos en formación inicial, el apoyo percibido de las herramientas de IA llegó a la competencia innovadora principalmente a través de la [[self-efficacy|autoeficacia]] en IA (60,88% del efecto total de esa ruta), mientras que el apoyo percibido del entorno inteligente escolar llegó principalmente a través del aprendizaje autorregulado (29,64% frente a 18,60%) ([[preservice-teachers-ai-support-innovative-competence-2026|Liu et al. (2026)]]).

## Implicaciones

- **Para las herramientas de diario y de chatbot:** combine la instrucción sobre AAR (basada en un curso) con apoyo opcional a la escritura para obtener ganancias tanto de motivación como de implicación
- **Para quienes diseñan herramientas:** haga de la evaluación un paso obligatorio y no opcional. Iqbal et al. encontraron que fue el apoyo disponible, y no el juicio metacognitivo de quien aprende, lo que decidió la estrategia de revisión que usaba el estudiantado, y que las ganancias de puntuación con IA generativa no provinieron de una mejor regulación, mientras que Melanou et al. encontraron que el uso reflexivo predecía el pensamiento crítico allí donde el mero acceso a la herramienta no lo hacía. Las interacciones que piden a quien aprende verificar, comparar y reestrategizar son las que llevan el valor de aprendizaje.
- **Para el profesorado:** trate la conciencia metacognitiva basada en IA como la primera palanca y compruébela de forma explícita. Alatoai y Alshahri la encontraron el predictor más fuerte del rendimiento adaptativo en STEM (β = 0,38) y que la transferencia y la adaptabilidad quedaban en segundo lugar (β = 0,29), así que las actividades que llevan al estudiantado a examinar errores y a trasladar una estrategia a un nuevo contexto de problema hacen más que las indicaciones genéricas de razonamiento crítico o creativo.
- **Para la [[educational-policy-ai|política sobre IA]]:** los criterios de adquisición deberían preguntar si una herramienta desarrolla o desplaza la autorregulación
- **Para quienes [[research-methods-aied|investigan]]:** son esenciales los estudios a largo plazo que midan resultados de AAR (y no solo el rendimiento inmediato); Melanou et al. muestran el rédito de esa paciencia, ya que el uso reflexivo de un semestre movió el pensamiento crítico (β = 0,43) sin mover la ganancia de conocimiento.


## Agentes conversacionales y AAR en juegos de simulación

- **Agentes conversacionales que apoyan el aprendizaje autorregulado en juegos.** Wenzel, Geiger y Liening (2026) muestran que un agente conversacional de IA (Lara) en un juego de [[simulation|simulación]] de empresa puede apoyar el aprendizaje autorregulado mediante retroalimentación [[formative-assessment|formativa]] basada en métricas, orientación a demanda y reflexión estructurada, lo que aborda la limitación habitual de que los juegos de simulación ofrecen una retroalimentación formativa y unas indicaciones de reflexión limitadas. Las evaluaciones con profesorado en formación y participantes del BSG informaron de percepciones positivas de la presencia cognitiva y [[community-of-inquiry|social]] del agente y de su apoyo a la autorregulación.

## Detección automatizada de AAR: qué se transfiere y qué no

- **Los clasificadores de AAR basados en embeddings cruzan idiomas dentro de un dominio, pero no entre dominios.** Un estudio con 26 estudiantes (química y lógica formal; protocolos de pensamiento en voz alta codificados con el modelo de Winne y Hadwin) encontró que los modelos basados en embeddings (text-embedding-3-small) entrenados en inglés clasifican el AAR en alemán con un AUC de ~0,8 y una degradación de ~0,1, salvo en la puesta en acto (~0,7). La transferencia entre dominios falla: de química a lógica cae a ~0,6, y la puesta en acto, al azar (~0,5): la frontera del dominio, y no el idioma, es la que limita.
- **Tres modos de fallo explican dónde se rompe la transferencia.** (1) La resolución de conceptos en su acepción cotidiana en lugar de la acepción propia del dominio —«cancel» frente al «kürzen» de la química— rompe la clasificación enactiva. (2) La antropomorfización: el estudiantado alemán no familiarizado con un tutor muy andamiado se dirigió a él como a una persona, lo que produjo enunciados fuera de distribución; la transferencia fue mejor en plataformas menos andamiadas. (3) La ambigüedad entre la lectura de pistas y la formulación de planes: los modelos no pueden distinguir la lectura de una pista metacognitiva de la planificación sin datos de registro. Darse cuenta de los errores es robusto en todas las condiciones: notar que uno se equivoca es independiente del contexto. Soluciones: diccionarios de personas expertas o ajuste fino para los términos del dominio; datos de registro para las pistas. ([[borchers-srl-language-generalization-2025]])
- **Las señales superficiales sobre-atribuyen autorregulación en el mapeo curricular.** Dadas las descripciones de evaluación, GPT-o3-mini leyó las menciones a plazos o a la programación de tareas como evidencia de una habilidad autorreguladora; la Autogestión se sobre-identificó de este modo, con su acuerdo frente a los pesos expertos entre 0,53 y −0,03 ([[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al., 2026]]).
- **Las cadenas de preguntas estructuradas convierten el prompting en regulación.** En un cuasiexperimento con 83 estudiantes de grado, ambas condiciones de cadena de preguntas produjeron más conducta de estrategia de aprendizaje y de monitorización que el cuestionamiento de forma libre (χ² = 6,551, p = 0,038) y puntuaron más alto en conciencia metacognitiva y rendimiento (F = 3,406, p = 0,038; F = 3,807, p = 0,035), sin diferencias entre las formas de cadena ([[question-chain-prompting-srl-metacognition-2026|Lin et al., 2026]]). La secuenciación es lo que hace el trabajo.
- **La detección a nivel de grupo sigue la misma división, y el habla aporta más que los registros.** En díadas que modelaban el movimiento de un camión en C2STEM, se etiquetaron 394 segmentos de contexto de tarea de 36 estudiantes de secundaria con siete códigos de regulación socialmente compartida y se predijeron a partir de resúmenes del LLM de cada segmento: los embeddings solo de texto alcanzaron un AUC medio de 0,650, mientras que los rasgos derivados de registros por sí solos alcanzaron 0,526, cerca del azar para un constructo en buena medida social. La planificación era invisible dentro de un único segmento (0,5036) y se volvió detectable al concatenar los dos segmentos contiguos (0,6711), mientras que la reflexión fue mejor al añadir los registros (0,5862), la misma ambigüedad entre leer pistas y planificar que esta sección registra para quien aprende individualmente ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).
- **Las etiquetas automáticas de AAR se sostienen en la puesta en acto y fallan en la planificación.** En una clase de ciencias de cuarto curso con realidad mixta, una cadena que fusionaba mirada, gesto, habla y registros del juego etiquetó 75 segmentos verificados por personas con un 74,67 % global, desde un 93,3 % en la puesta en acto y la interacción hasta un 46,7 % en la planificación ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles et al., 2026]]).

## Concepciones erróneas

- **«La autorregulación es un rasgo de quien aprende.»** El aprendizaje regulado se descompone en **autorreflexión, atribución causal y adaptación**, y quienes aprenden con soltura **emplean estrategias cognitivas para mejorar su éxito**. Son procesos entrenables que un diseño puede sostener o socavar.
- **«Cualquier diseño adaptativo apoya la regulación por igual.»** El **experimento de campo aleatorizado 2x2 con 179 estudiantes durante 22 días** de [[scheu-mobile-chatbot-journaling-motivation-2026|Scheu et al.]] comparó dos principios de diseño y encontró que diferían en mecanismo, así que «adaptativo» no es un único tratamiento.
- **«La ansiedad socava la regulación.»** En un estudio de métodos mixtos con **107 estudiantes**, una mayor [[anxiety-and-stress|ansiedad ante la IA]] se asoció **positivamente con la verificación y la recomprobación**. La ansiedad funcionó como un acicate para verificar, lo que es regulación y no su ausencia.
- **El AAR metacognitivo predijo la carga relevante para el aprendizaje donde la retroalimentación de la IA no lo hizo.** En un estudio de campo de cinco semanas con **234 estudiantes y 1.147 observaciones**, la autorregulación metacognitiva fue un predictor positivo sustancial de la **carga cognitiva relevante** (β = 0,363, p < 0,001 por intención de tratar; 0,346, p < 0,001 basado en el uso) y no predijo de forma significativa la carga extrínseca, mientras que el mero acceso a la retroalimentación de IA conversacional no predijo ninguna de las dos. Solo la implicación **sostenida** con la retroalimentación separó al estudiantado en carga relevante, y el uso irregular no lo hizo (β = −0,219, p = 0,116), lo que sitúa el ingrediente activo en la regulación del procesamiento por parte de quien aprende y no en el suministro de retroalimentación ([[wenzel-conversational-ai-feedback-cognitive-load-game-2026|Wenzel, Geiger y Liening, 2026]]).

## Conceptos conectados

- [[learners]] — El estudiantado: el paraguas de los conceptos del lado de quien aprende
- [[metacognition]] — la monitorización cognitiva en la que se apoya el AAR
- [[self-assessment]]
- [[self-efficacy]] — una creencia de la fase de previsión que impulsa el esfuerzo
- [[scaffolding]] — apoyo graduado que preserva la exigencia regulatoria
- [[feedback]] — la información en torno a la cual regula quien aprende
- [[feedback-literacy]] — la capacidad de actuar a partir de la retroalimentación
- [[help-seeking]] — una conducta estratégica del AAR
- [[motivation]] — el socio recíproco de la autorregulación
- [[cognitive-offloading]] — el riesgo cuando la IA elimina el trabajo regulatorio
- [[generative-ai]] — la tecnología que puede andamiar o cortocircuitar el AAR
- [[ai-literacy]] — competencia regulatoria en el uso de la IA
- [[self-directed-learning]] — el constructo más amplio de autonomía
- [[agency]] — la capacidad de quien aprende para actuar con intención, central en la regulación, la integración y el posicionamiento
- [[adaptive-learning]] — personalización que puede sostener la regulación
- [[formative-assessment]] — retroalimentación continua para la regulación
- [[learning-by-teaching]] — una estrategia que construye autorregulación
- [[intelligent-tutoring]] — sistemas que andamian el AAR
- [[llm]] — el modelo subyacente de las herramientas de IA
- [[retrieval-spacing-interleaving]] — planificación, autoevaluación y elecciones de estrategia de estudio que hace quien aprende
- [[cognitive-surrender]]

## Artículos conectados
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Precisión por categoría del AAR segmentado por LLM en un aula corporal (Fonteles et al. 2026)
- [[llm-math-homework-offloading-traces-2026]] — Lo que la entrega no muestra: la descarga cognitiva complejizadora en el trabajo matemático del estudiantado con LLM (Kontorovich y Wallach 2026)
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Sobre-atribución por parte del modelo de la autorregulación a partir de señales superficiales en el mapeo curricular (Jayalath et al. 2026)
- [[aigc-affordance-student-self-regulation-2026]] — Afordancias de la IA generativa de contenidos y autorregulación del estudiantado
- [[brunnstrom-ai-interaction-literacy-srl-2026]] — Alfabetización en la interacción con IA: dirigir un chatbot exigía el AAR que debía sostener (Brunnström y Palmqvist 2026)
- [[5p-reflection-model-genai-2026]] — El modelo de reflexión 5P para la era de la IA generativa (Kadel et al. 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — La descarga cognitiva sensible a las capas en la escritura asistida por IA generativa (Chen 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[de-barba-srl-genai-2026]] — La agencia de quien aprende a través de escalas: regulación, integración y posicionamiento
- [[rented-self-decoupling-performance-becoming-2026]] — El yo alquilado: el alquiler proyectado sobre los modelos de autorregulación de Winne, con diez proposiciones e índices intrasujeto
- [[song-genai-learning-partner-srl-over-time-2026]] — La IA generativa como socio de aprendizaje sensible al contexto a lo largo del tiempo
- [[lim-bannert-student-regulation-genai-chatbot-2026]] — Cómo regula el estudiantado su aprendizaje con un chatbot de IA generativa
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — ¿Andamiaje o atajo? El doble papel de la IA generativa en el AAR
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — La búsqueda de ayuda mediada por LLM en STEM: por capas, instrumental y verificada
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[banihashem-ai-srl-systematic-mapping-review-2025]]
- [[yilmaz-genai-feedback-srl-online-higher-ed-2026]] — Retroalimentación con IA generativa y AAR: importa la fuente percibida
- [[ai-anxiety-strategic-regulation-writing-2026]] — De la ansiedad ante la IA a la regulación estratégica
- [[young-people-learning-generative-ai-rapid-review-2026]] — Evidencia mixta sobre metacognición y autorregulación con IA generativa
- [[agentic-ai-pedagogical-best-practice-2026]] — La IA agéntica y la tensión de la autorregulación
- [[decreasing-digital-distraction-college-online-learning-2026]] — El AAR y una menor distracción digital en el aprendizaje en línea (Shi et al. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Hacer accesibles al profesorado los hallazgos del aprendizaje automático en aulas semipresenciales
- [[scan-framework-task-assignment-generative-ai-2025]] — SCAN: un bucle orientado a quien aprende para identificar la tarea, justificarla y reflexionar después
- [[learning-analytics-genai-secondary-writing-2026]] — Uso de analíticas de aprendizaje para apoyar la escritura del alumnado de secundaria con IA generativa
- [[alatoai-ai-learning-environments-self-regulation-2026]] — Un instrumento validado para la autorregulación apoyada por IA en el aprendizaje adaptativo en STEM, con la conciencia metacognitiva como el predictor más fuerte
- [[iqbal-human-genai-support-essay-revision-2026]] — La condición de apoyo, y no el juicio metacognitivo, decidió la elección de estrategia de revisión en un experimento de revisión de ensayos
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Estudio longitudinal: el uso reflexivo de la IA predijo el pensamiento crítico, pero no la ganancia de conocimiento, sin efecto Mateo

- [[genai-literacy-srl-special-education-2026]] — La alfabetización en IA generativa se relacionó con las conductas de aprendizaje autorregulado principalmente a través de la agencia de aprendizaje
- [[preservice-teachers-ai-support-innovative-competence-2026]] — El tipo de apoyo invierte el mediador: autoeficacia en IA frente a aprendizaje autorregulado
- [[genai-learning-procrastination-planned-behavior-2026]] — La procrastinación del aprendizaje asistido por IA generativa: una brecha intención-conducta que la ansiedad refuerza
- [[genai-srl-l2-writing-scale-2026]] — Una escala validada de autorregulación de la IA generativa en seis dimensiones para la escritura en L2, con la regulación ambiental como dimensión propia y una forma corta de 12 ítems optimizada por colonias de hormigas
- [[borchers-srl-language-generalization-2025]] — Los grandes modelos de lenguaje generalizan la predicción del AAR a nuevos idiomas dentro de un mismo dominio, pero no entre dominios (Borchers et al. 2025)
- [[ai-project-hybrid-learning-self-regulated-2026]] — Un modelo de aprendizaje híbrido basado en proyectos que utiliza la inteligencia artificial para mejorar el aprendizaje autorregulado del estudiantado
