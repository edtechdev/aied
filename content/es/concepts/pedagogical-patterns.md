---
title: Patrones pedagógicos
created: "2026-09-30T16:48:24-04:00"
updated: "2026-09-30T16:48:24-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
translation_of: concepts/pedagogical-patterns
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-30"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Patrones pedagógicos** — las *secuencias ordenadas* de actividad que la investigación de esta base de conocimiento ha probado, con atención a dónde entra la [[generative-ai|IA generativa]] en la secuencia y dónde tiene que permanecer el [[human-in-the-loop-ai|juicio humano]]. Donde [[pedagogy]] cataloga enfoques ([[active-learning|aprendizaje activo]], [[problem-based-learning|aprendizaje basado en problemas]], [[collaborative-learning|aprendizaje colaborativo]]) y [[learning-design]] describe cómo se diseña un curso, esta página cataloga lo que estudiantes y docentes *hacen* realmente, en qué orden, y qué ocurrió cuando se probó. PAIRR — borrador, revisión entre pares, revisión con IA, reflexión, revisión — es el ejemplo mejor documentado, y el patrón que hay detrás de él reaparece en todas las disciplinas: esfuerzo primero, IA después, juicio humano en lo que está en juego.

## Preguntas para reflexionar

- Un patrón es una *secuencia*, no una herramienta. Tome una tarea que enseñe y escriba el orden de los movimientos que hace un estudiante. ¿Dónde ayudaría la IA en ese orden, y dónde haría el trabajo que se supone que debe hacer el estudiante?
- Varios patrones de aquí dan deliberadamente a la IA un papel *débil* — pistas en lugar de respuestas, preguntas en lugar de correcciones. ¿Por qué un tutor deliberadamente menos servicial produciría mejor aprendizaje, y qué implica eso sobre las herramientas de IA que su institución está comprando?
- El patrón con mejor evidencia de esta página ([[learning-by-teaching|aprender enseñando]] a una IA) pide a los estudiantes que expliquen, y mejora la calidad de la explicación y de las preguntas pero *no* el recuerdo objetivo. Si lo adoptara, ¿qué cambiaría en su forma de evaluar?
- Cuando la [[ai-feedback-quality|retroalimentación con IA]] fue de mayor calidad que la retroalimentación docente, los estudiantes no revisaron más. ¿Qué sugiere eso sobre la diferencia entre producir retroalimentación y lograr que los estudiantes la usen?
- Los contextos cambian la respuesta: algunos patrones se probaron en línea y asíncronos, otros presencialmente con un laboratorio. ¿Cuáles de estos podría ejecutar en su propio entorno sin herramientas nuevas, y cuáles necesitarían infraestructura que no tiene?
- Casi todos los patrones de aquí mantienen a una persona en el punto de juicio — calificar, verificar o interpretar. ¿Es eso una decisión de diseño, una necesidad basada en la evidencia, o una limitación de lo que se ha probado hasta ahora?

## Introducción

La pedagogía responde a *cómo deberíamos enseñar*; esta página responde a una pregunta más estrecha y más operativa: **¿en qué orden deberían ocurrir los movimientos, y dónde encaja la IA en ese orden?** La distinción importa porque la misma herramienta produce resultados opuestos según su posición en una secuencia. Un asistente de IA generativa colocado antes de que un estudiante intente un problema deprime de forma fiable el rendimiento posterior sin ayuda; colocado después de un intento, con pistas en lugar de respuestas, la misma clase de sistema elimina ese daño.

Todos los patrones siguientes se presentan con un estado de evidencia, porque la cobertura de la base de conocimiento es desigual y la diferencia importa a quien decide qué adoptar:

- **Probada** — al menos un artículo informa de una prueba controlada o comparativa.
- **Mixta** — probada, pero sin control, con resultados contradictorios, o con la variable probada entrelazada con otra cosa.
- **Propuestas de diseño** — la idea aparece solo como propuesta o marco, sin ninguna prueba informada. Estas se recogen por separado al final de la página, en *Propuestas de diseño (aún no probadas)*, y no son evidencia.

Los patrones se agrupan por la función que cumplen en una lección: colocar el esfuerzo antes de la ayuda, emparejar la retroalimentación con IA con la retroalimentación humana, verificar la comprensión en lugar del resultado, convertir a quien aprende en docente, estructurar la colaboración y confrontar un [[misconceptions|error de concepto]] concreto. Los contextos (en línea, presencial, semipresencial) y las disciplinas se informan con cada uno, y se resumen al final.

## Patrones que colocan el esfuerzo antes de la ayuda

Estos patrones comparten una afirmación estructural: quien aprende debe comprometerse con un intento antes de que la IA contribuya. Es la regla de diseño más apoyada de forma consistente en la base de conocimiento.

### Recuperar o intentar antes de que la IA responda

**Evidencia: probada.** La secuencia es: intentar de memoria, recibir instrucción o un ejemplo, practicar en sesiones espaciadas, consultar la IA solo después de comprometerse con un intento, recibir retroalimentación contingente a la respuesta que sondea el error de concepto, y avanzar solo cuando la respuesta muestra una implicación adecuada.

Una condición de recuperación espaciada adaptativa produjo las puntuaciones postest más altas (M = 78.19) y superó significativamente el estudio con IA dirigido por quien aprende (M = 67.28, d = 0.92, p = .003) en 89 estudiantes de un curso de estadística semipresencial, mientras que el espaciado fijo fue estadísticamente indistinguible del adaptativo ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). El caso de contraste es decisivo: en un [[rct|ensayo aleatorizado]] de 120 estudiantes, el grupo que estudió *con* ChatGPT sin restricciones retuvo menos en un examen sorpresa 45 días después — 57.5% correctas frente a 68.5% de quienes aprendieron de forma tradicional, t(83) = −3.19, p = .002, d = 0.68 — y además había estudiado aproximadamente 45% menos, con la desventaja sobreviviendo a una covariante de tiempo de estudio ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Un experimento de campo aleatorizado preregistrado en un MBA en línea encontró que las ganancias seguían las *semanas completadas* y no los minutos de exposición (+2.00 puntos por cada semana adicional de tutoría completada, p = .018), lo que se lee como que la [[retrieval-spacing-interleaving|práctica espaciada]] importa más que el tiempo total ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Fracaso productivo: intentar antes de la instrucción

**Evidencia: mixta, y más delgada que su reputación.** Los estudiantes intentan un problema dirigido a un concepto que no se les ha enseñado, el tutor retiene la solución y provoca múltiples intentos, la ayuda llega solo cuando es estrictamente necesaria, y la consolidación sigue con comparación e instrucción directa.

El único estudio de campo que prueba la secuencia completa con un tutor guiado usó 17 estudiantes de secundaria en Singapur: la condición guiada alcanzó una puntuación de fracaso productivo más alta, significativa para la consistencia del problema (p = .046), y los estudiantes produjeron en promedio 2.6 representaciones por sesión (p = .05), pero **no se midió ningún resultado de aprendizaje** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). El apoyo más fuerte es indirecto y procede de un experimento aleatorizado intra-sujetos con 26 estudiantes, donde el [[scaffolding|andamiaje]] de respuesta inmediata rindió significativamente *peor* que los roles de par, ayudante y tutor en la abstracción de modelos (β = −0.692, p = .015; β = −1.039, p < .001; β = −0.769, p = .005) aunque los estudiantes *prefirieron* al tutor directivo — la preferencia iba en contra de la competencia ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Análisis de errores y ejemplos erróneos

**Evidencia: mixta.** Los estudiantes diagnostican un error en un artefacto — un diagrama generado por IA que viola la integridad referencial, una consulta que elimina una unión, un fragmento de código [[llm]] —, reciben pistas que les obligan a inferir la corrección en lugar de que se les entregue, la reparan y reflexionan sobre qué partes del resultado no eran fiables.

Un estudio pre-post de 13 estudiantes en un curso de bases de datos en línea subió de 4.25 a 6.83 sobre 7 (t(12) ≈ 5.10, p < .001, d = 1.49) usando ciclos semanales de crítica y refinamiento construidos sobre casos deliberados de fallo de la IA, pero sin grupo de control la ganancia no puede separarse del [[curriculum-design|currículo]] ni del docente ([[pedagogy-ai-mistakes|Hosseini, 2026]]). Una [[meta-analysis-systematic-review|revisión sistemática]] de 72 estudios de educación en informática informa de que el análisis de errores es una *competencia distinta*: los estudiantes rindieron significativamente peor al corregir código generado por un LLM que en tareas tradicionales de examen de programación ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Ningún artículo de la base de conocimiento informa de una prueba controlada de la instrucción con ejemplos erróneos como tal.

### Ejemplos resueltos con autoexplicación

**Evidencia: mixta — las dos mitades divergen.** Se presenta un ejemplo resuelto con justificaciones faltantes que completar, o con errores que encontrar; el estudiante lo completa o lo repara, explica su razonamiento y luego intenta el siguiente problema.

La asignación adaptativa de ejemplos guiados y erróneos superó a la asignación aleatoria por tipo de problema en un estudio de aula con 113 estudiantes (postest M = 72.3 y 72.5 frente a 65.7 del control, A = .58, p = .005 y p = .002), y la variante de [[knowledge-tracing|traza de conocimiento]] redujo la brecha de rendimiento en 77.1% para estudiantes de bajo [[prior-knowledge|conocimiento previo]] (β = 9.4, p = .001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Pero *añadir* el paso de autoexplicación a la retroalimentación elaborada de la IA perdió en todas las medidas en un experimento preregistrado con 302 participantes: duplicó el tiempo de retroalimentación (4.1 frente a 2.1 min, p < .001), redujo en 40% los problemas completados (2.0 frente a 3.4, p < .001), no produjo ninguna ganancia por episodio (OR = 1.03, p = .486) y bajó el dominio al final de la sesión (65% frente a 79%, d = .41, p < .001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## Patrones que emparejan la retroalimentación con IA con la retroalimentación humana

El hallazgo más replicado de la base de conocimiento sobre la retroalimentación con IA es que funciona mejor *combinada* con la retroalimentación humana que sola — y que su calidad no es lo que determina si los estudiantes la usan.

### PAIRR: revisión entre pares y con IA con reflexión

**Evidencia: mixta (ampliamente implementada, no controlada).** Los estudiantes leen y reflexionan sobre cómo funcionan la IA y la retroalimentación, redactan un borrador, dan y reciben revisión entre pares, piden a la IA retroalimentación guiada por criterios sobre el mismo borrador, comparan críticamente ambas, escriben un plan de revisión, revisan y reflexionan sobre qué retroalimentación cambió qué.

El mayor estudio hasta la fecha sobre el uso de la retroalimentación con IA por parte de estudiantes universitarios siguió a 654 estudiantes en diez cursos de escritura y tres cursos de [[stem-education|educación STEM]] intensivos en escritura: 58% prefirió ChatGPT combinado con [[peer-assessment|retroalimentación entre pares]], 36% solo entre pares y únicamente 6% solo IA; 75% encontró las dos similares y mutuamente reforzantes; la retroalimentación de la IA fue calificada de "demasiado general" por 31%, mientras que la retroalimentación entre pares fue más específica para 28%; y solo 5.3% mostró exceso de confianza en la retroalimentación de la IA ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). El modelo también se aplicó en un curso de escritura empresarial de nivel superior con 34 estudiantes, donde alrededor de un cuarto de las reflexiones codificadas expresaban escepticismo sobre la retroalimentación de la IA o señalaban sus inexactitudes ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Ambos informan de datos de percepción; ninguno tiene condición de control, por lo que el patrón es *mixto* y no *probado*.

### Retroalimentación combinada de pares y de IA

**Evidencia: probada.** La evidencia comparativa procede de fuera del programa PAIRR. Un cuasiexperimento con 122 estudiantes chinos de inglés como lengua extranjera encontró que la retroalimentación integrada de IA más pares elevó la [[student-engagement|implicación]] conductual, afectiva y cognitiva frente a la de solo pares (todas p < .001; η² parcial = 0.28, 0.28, 0.32) y mejoró la escritura en las cuatro dimensiones del IELTS (F(1,119) = 42.68, p < .001, η² parcial = 0.26), mayor en el logro de la tarea (d = 1.41) — sin postest diferido, por lo que la durabilidad no se mide ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). En un estudio aleatorizado con 45 futuros docentes en 12 grupos, la retroalimentación entre pares apoyada por IA generativa superó a la retroalimentación entre pares sin más en argumentación, y la variante *con andamiaje de prompt* rindió mejor en elementos avanzados como los datos de refutación y el abordaje de la visión opuesta ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### Crítica de la IA y luego revisión

**Evidencia: probada — con un nulo importante.** Redactar un borrador, pedir a la IA retroalimentación guiada por la rúbrica, evaluar críticamente esa retroalimentación frente a la rúbrica y las fuentes, escribir un plan de revisión, revisar y reflexionar.

Un experimento factorial 2 × 2 controlado con 120 estudiantes de filología inglesa encontró que la ganancia de calidad de escritura fue mayor para el grupo entrenado tanto en el filtrado como en la valoración (M = 7.92), frente a 6.10, 4.56 y 3.10 de las otras condiciones, con la revisión profunda subiendo de 28% a 48% y la ventaja persistiendo en un tema nuevo y después de retirar el apoyo de la IA ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). El nulo es la parte instructiva: en un experimento aleatorizado de tres grupos con 70 estudiantes, la retroalimentación de la IA con prompting de cadena de pensamiento fue significativamente de *mayor calidad* que tanto la retroalimentación de la IA de cero disparos (p = .01) como la retroalimentación docente (p = .008), y sin embargo esa ventaja de calidad **no se tradujo en mayores ganancias de revisión** — la retroalimentación docente produjo una mejora comparable ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Revisión con humanos en el bucle del resultado de la IA

**Evidencia: mixta — el paso de revisión rara vez es la variable probada.** La IA genera un borrador, agentes verificadores automatizados lo comprueban en busca de realismo, legibilidad o [[hallucination-risk|alucinación]], las comprobaciones fallidas vuelven atrás para refinarse, y un docente revisa, edita y acepta o descarta antes de que nada llegue a los estudiantes.

Un bucle de cuatro agentes con 8 docentes produjo 212 problemas de los cuales 166 se aceptaron tal cual, y las comprobaciones de realismo funcionaron según lo previsto (10 problemas de realismo señalados, 20 ediciones de cantidad o unidades, ningún error matemático encontrado en un problema final) — pero el ajuste al interés fue el punto débil, con los estudiantes rechazando el tema en 160 de 422 respuestas ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). Una herramienta de retroalimentación con educador en el bucle evaluada por 30 docentes nunca cayó por debajo de 4.1/5 en nueve ítems y redujo el tiempo mediano por tarea de 10–30 minutos a menos de 5, pero los autores reconocen que no hay evaluación del estudiantado, por lo que no se apoya ninguna afirmación sobre el aprendizaje ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Un experimento de equipo rojo hace concreto lo que está en juego: 2 de 5 inyecciones de prompt cambiaron una nota sin ser detectadas, con 100% (9/9) y 94% (17/18), dejando al docente como la única comprobación real sobre el resultado de la [[automated-assessment|evaluación automatizada con IA]] ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Patrones que verifican la comprensión en lugar del resultado

Como la IA puede producir un artefacto competente, estos patrones desplazan la evaluación hacia la evidencia que el artefacto no puede aportar por sí solo.

### Verificación oral y viva voce

**Evidencia: probada como formato, pero los resultados son sobre puntuaciones y afecto, no sobre aprendizaje.** Se entrega una tarea de programación con la IA permitida, seguida en un plazo de 48 horas de una revisión oral de código obligatoria de 15 minutos en la que el estudiante explica el programa y ejecuta pruebas de integración en directo, calificada 70% por la revisión y 30% por la rúbrica.

Un cuasiexperimento de tres semestres con 96 estudiantes no encontró ningún cambio estadísticamente significativo en el rendimiento de examen a pesar de las nuevas políticas (~2% de mejora en un examen), mientras que los caracteres pegados sobre el total subieron de 61.0% a 68.1% (p < 0.0001); 90% de los estudiantes dijo que las revisiones les motivaron a comprender mejor su código y 65% que les ayudaron a evitar la dependencia excesiva ([[code-review-genai-cs1|Fowles et al., 2026]]). Las respuestas orales grabadas asíncronas produjeron puntuaciones significativamente más altas que las de opción múltiple presenciales (parcial Md = 92.5 frente a 70, p < .001; final Md = 94.2 frente a 86.4, p = .002) con solo correlaciones moderadas entre formatos (τ = .44 y .25) — y los autores advierten de que son *diferencias de puntuación por formato, no evidencia de ganancias de aprendizaje*, con la conducta de copia sin medir ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). La dirección no es uniformemente positiva: los estudiantes estuvieron más tranquilos en una viva basada en chat (M = 6.50 frente a 5.86, p = .028) pero valoraron significativamente mejor la viva presencial para comprender su propio trabajo (p = .004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Puntos de control por etapas y evidencia del proceso

**Evidencia: mixta — ninguna prueba controlada del mecanismo en sí.** El trabajo del curso se organiza en módulos por etapas, cada uno terminando en un punto de control que verifica tanto el resultado *como* el enfoque — un resultado correcto alcanzado codificando en duro se rechaza —, con una comprobación previa al avance que devuelve a quien aprende a los pasos omitidos.

Un estudio de caso de 5 estudiantes de posgrado en un curso de información cuántica a ritmo propio registró 75 interacciones y confirmó que el punto de control dual de resultado y enfoque funcionó según lo previsto, sin grupo de control ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). Un piloto de 27 participantes con puntos de control de bloqueo informó de ganancias significativas de [[self-efficacy|autoeficacia]] en las diez áreas de habilidad evaluadas (p < 0.001) en un diseño intra-sujetos pre-post donde las ganancias no pueden separarse de los efectos de la práctica ([[agentic-education-coding|Naboulsi, 2026]]). Un cuasiexperimento de tres años con 248 estudiantes de [[engineering-education|ingeniería biomédica]] encontró tasas de sobresaliente más altas tras añadir un aprendizaje basado en problemas de cuatro módulos con hitos y rúbricas (66.4% frente a 39.1%, Δ = +27.3 puntos, p = 0.042), persistiendo tras excluir el año afectado por la pandemia, pero la comparación es histórica y no aleatorizada ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Patrones que convierten a quien aprende en docente

### Aprender enseñando a un alumno IA

**Evidencia: probada, y el patrón con mejor evidencia de esta página.** El estudiante estudia el contenido y luego lo explica a una IA a la que se instruye para mantener una postura de novato que nunca revela la explicación objetivo; la IA pide explicaciones, ejemplos y razonamiento de verificación, secuenciados de orden inferior a superior, y persiste hasta que la explicación es satisfactoria.

Un cuasiexperimento con 68 futuros docentes encontró que explicar a un aprendiz novato de IA generativa puntuó más alto al definir el aula invertida (M = 4.18 frente a 3.29, p < 0.001, r = 0.474) y sus actividades (M = 4.91 frente a 3.06, p < 0.001, r = 0.642), generó más preguntas y de mayor calidad (ambas p < 0.001) — pero no mostró **ninguna diferencia de grupo en las preguntas objetivas** (M = 23.18 frente a 21.57, p = 0.416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). Un experimento de laboratorio aleatorizado con 41 estudiantes encontró puntuaciones más altas en el test de conocimiento (ajustada 11.86 frente a 10.53, F = 35.54, η² = 0.74) y código más claro y legible, pero **ninguna diferencia en la corrección del código** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). Un despliegue de 11 semanas en 546 estudiantes encontró que cada acto adicional de aprendizaje profundo se asociaba con una disminución del 2.7% en los intentos de cuestionario esperados (IRR 0.973, p < .001), con la comparación confundida por el tiempo en la tarea y con la elusión tardía de semestre subiendo hasta un 30–35% de reutilización de contenido externo ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). La forma consistente: ganancias en la explicación y el trabajo generativo, no en el recuerdo objetivo.

## Patrones que estructuran la colaboración

### Roles guionizados con una IA compartida

**Evidencia: probada, pero en entornos controlados o no controlados más que en aulas ordinarias.** Dos aprendices comparten una IA y se les asignan roles explícitos con reglas de rotación; la IA se configura para adoptar un rol según sea necesario y su resultado va a todo el grupo. En una variante de programación en parejas, la IA compartida modela la atención y el esfuerzo conjuntos de la díada, pronostica una ruptura con hasta 30 segundos de antelación y escala los andamiajes en niveles, desde no hacer nada hasta una pista directiva.

Un experimento intra-sujetos con 26 díadas encontró que la condición de retroalimentación logró mayor éxito de depuración (t[49.96] = −13.51, p < .0001) y terminó más rápido (t[44.70] = 4.39, p < .0001), aunque requería hardware de seguimiento ocular dual y pupilometría y no probó la transferencia al trabajo en parejas sin supervisión ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). Un cuasiexperimento con 58 estudiantes de posgrado en 16 grupos encontró que el diseño de roles elevó las puntuaciones de contenido del mapa mental de 3.65 a 4.59 en una escala SOLO de 1–5 (z = 3.771, p < 0.001) mientras que los recuentos de nodos y ramas se mantuvieron planos — pero sin grupo de control, no pueden descartarse los efectos de la práctica ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### Discusión asistida por IA

**Evidencia: mixta — la única implementación directa es una descripción de caso.** Los estudiantes analizan un escenario y responden a preguntas guiadas de forma independiente, piden a ChatGPT con un prompt estandarizado sobre las mismas preguntas, evalúan las respuestas de la IA en cuanto a precisión frente a las suyas, refinan su respuesta y cierran con una discusión de toda la clase.

La actividad de economía explota deliberadamente un error de la IA — ChatGPT llama "perfectamente elástica" a la demanda del comportamiento representado en la canción cuando la respuesta correcta es inelástica —, convirtiendo la validación del resultado de la IA en la discusión ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). Informa de impresiones del docente, no de un resultado medido. Una secuencia de discusión colaborativa probada con 67 estudiantes de formación docente encontró que el grupo experimental superó a un control de clase magistral (M = 51.45 frente a 43.89, p = 0.001, g = 0.839) con la corregulación subiendo (p = 0.043, g = 0.512) — pero la IA se usó para *diseñar* la técnica, no para mediar la discusión ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Patrones que confrontan un error de concepto concreto

### Refutación y cambio conceptual

**Evidencia: probada — con resultados directamente contradictorios.** Se elicita la creencia concreta de quien aprende, se presenta un [[refutation-text|texto de refutación]] o un diálogo personalizado con IA que la confronta, se trabaja con la contraevidencia y la explicación correcta, se reformula la concepción correcta y luego se vuelve a evaluar tras un retraso.

Un experimento preregistrado con 375 adultos encontró que el diálogo personalizado con IA sobre el error de concepto produjo reducciones de creencia inmediatas significativamente mayores que tanto la refutación al estilo de libro de texto como el diálogo neutral con IA, persistiendo a los 10 días pero convergiendo con la refutación de libro de texto a los 2 meses ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). Un cuasiexperimento de cuatro grupos de Solomon con 413 estudiantes de décimo grado encontró lo *contrario*: los textos de cambio conceptual escritos por expertos y generados por IA fueron ambos significativamente más eficaces que el diálogo interactivo con ChatGPT, que no mostró ninguna ventaja significativa sobre el control, y las ganancias se limitaron casi exclusivamente a los estudiantes de alto rendimiento ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). El segundo artículo señala el conflicto explícitamente y lo atribuye al [[prompt-engineering|diseño de prompts]] y al dominio. El texto de refutación en sí superó al control en ambos.

## Contextos y disciplinas

El patrón determina lo que requiere el contexto, y varios patrones se probaron en un único entorno:

- **En línea y asíncrono.** La recuperación y el espaciado, las variantes socráticas, los ejemplos resueltos con autoexplicación, el uso con andamiaje de prompt, la [[oral-assessment|evaluación oral]] asíncrona y los despliegues de aprender enseñando. Los entornos asíncronos hacen que la *secuenciación* sea determinante, porque el sistema no puede ver si el estudiante intentó primero.
- **Presencial y semipresencial.** El [[productive-failure|fracaso productivo]], el análisis de errores, las variantes de aula invertida, la revisión oral de código, la colaboración guionizada y los estudios de cambio conceptual. El tiempo de clase a menudo se reasigna en lugar de reemplazarse — en el patrón de revisión oral, las clases magistrales se pasaron a vídeo para que el tiempo de clase pudiera albergar las entrevistas.
- **Disciplinas representadas en la evidencia probada.** La [[writing-education|escritura]] y el [[language-learning|aprendizaje de idiomas]] (PAIRR, retroalimentación combinada de pares y de IA, crítica de la IA y luego revisión), las [[math-education|matemáticas]] (recuperación y espaciado, fracaso productivo, ejemplos resueltos, análisis de errores), la [[cs-education|informática]] (asistentes socráticos, análisis de errores, revisión oral de código, aprender enseñando, trabajo en parejas guionizado), la [[medical-education|medicina]] (andamiaje socrático en entrevistas clínicas), la [[teacher-education|formación docente]] (argumentación guionizada, aprender enseñando), los [[business-education|negocios]] (tutoría de MBA en aula invertida), y entornos de [[physics-education|física]], [[science-education|ciencia]] y [[vocational-education|formación profesional]] para los estudios de cambio conceptual y evaluación oral.

## Lo que la evidencia aún no apoya

Dicho sin rodeos, porque son los hallazgos que más probablemente se abandonen en silencio:

- **Una mejor retroalimentación de la IA no produce más revisión.** La retroalimentación de mayor calidad con cadena de pensamiento superó a la retroalimentación docente en calidad y no produjo ninguna ventaja de revisión (Farrokhnia et al., 2026).
- **El [[socratic-method|cuestionamiento socrático]] no es automáticamente mejor.** Un ensayo aleatorizado con 132 estudiantes encontró que el asistente socrático con contexto completo fue valorado significativamente *peor* para apoyar la finalización de tareas que todas las demás configuraciones (rango medio 48.63, μ = 3.53, frente a 4.27, 4.16 y 4.12; χ²(3) = 12.14, p = .007), con el mayor uso de LLM externo (23%) y el menor número de respuestas de comprensión plena (48% frente a 67%) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — mientras que un ensayo clínico aleatorizado médico encontró que un sistema [[agentic-ai|multiagente]] que contenía un tutor socrático superó a su control en puntuaciones de examen y de comunicación ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Los estudiantes prefieren el rol menos eficaz.** Se prefirió la tutoría directiva mientras que el andamiaje de respuesta inmediata deprimía la abstracción de modelos (Zhu et al., 2026).
- **Los formatos de verificación cambian las puntuaciones sin demostrar aprendizaje.** Los formatos orales elevaron las puntuaciones y redujeron la [[anxiety-and-stress|ansiedad]] mientras que un estudio encontró que el presencial era mejor para la comprensión, y ningún estudio midió la copia.
- **Ninguna prueba controlada aísla la revisión humana del resultado de la IA**, y el mecanismo de puntos de control nunca se ha probado como la variable manipulada.
- **El fracaso productivo y el análisis de errores se apoyan en estudios pequeños y no controlados** (n = 17 y n = 13) que miden la fidelidad de la estrategia o el [[self-report-measures|autoinforme]] en lugar de resultados de aprendizaje.

## Propuestas de diseño (aún no probadas)

Los patrones siguientes proceden de una guía para el profesorado facilitada por quien mantiene la base de conocimiento (*AI-Ready Course Design*, septiembre de 2026). Esa guía afirma explícitamente que sus ejemplos son **propuestas de diseño, no intervenciones probadas**, y ningún artículo de esta base de conocimiento las prueba. Se registran aquí como ideas de diseño que vale la pena probar y evaluar, y no deben leerse como evidencia.

- **Argumento + rastro de revisión** (composición, humanidades). Sustituir una entrega solo de ensayo por una tesis inicial, dos pasajes de fuente anotados, un ensayo revisado y una nota de decisión de 150 palabras; permitir la crítica de la IA tras el primer borrador. Evaluar la conexión afirmación-evidencia y una sugerencia aceptada o rechazada justificada frente a las fuentes.
- **Datos + afirmación razonada** (ciencia, cursos de laboratorio). Sustituir un informe de laboratorio pulido por observaciones en bruto, un gráfico, una nota de incertidumbre y una explicación que vincule los resultados con una afirmación; la IA puede criticar una interpretación aportada, y los estudiantes verifican esa crítica frente a sus datos.
- **Intento + análisis de errores** (precálculo, cálculo). Sustituir los deberes solo de respuesta por un intento inicial, el análisis de una solución resuelta defectuosa y una explicación corregida; las pistas se permiten solo después del intento. Esta es la forma de diseño del patrón de análisis de errores anterior, y hereda la débil base de evidencia de ese patrón.
- **Posición + desafío + reconsideración** (psicología, sociología). Sustituir "publica una vez, responde dos" por una afirmación basada en un caso usando un concepto del curso; un par aporta un contraejemplo y el autor revisa o defiende con evidencia.
- **Proyecto + comprobación vinculada** (negocios, profesiones de la salud). Emparejar una recomendación con IA permitida para una organización ficticia o un caso de paciente con una breve explicación de dos decisiones clave y una respuesta a una restricción cambiada; publicar la relación de calificación entre los dos componentes.
- **Plan + intento + adaptación** (éxito universitario). Sustituir una reflexión genérica sobre gestión del tiempo por un plan de estudio de una semana, un breve registro de haberlo intentado y una revisión ligada a lo que ocurrió; la IA puede sugerir opciones de programación después de que el estudiante identifique las restricciones.

Las advertencias de la propia guía se aplican: el vídeo grabado, las reflexiones y los registros pueden estar ellos mismos asistidos por IA, así que en cursos totalmente asíncronos una grabación no debería tratarse como verificación del dominio independiente. Dos de sus enfoques — los gemelos de evaluación y la evaluación oral asíncrona como disuasión de la copia — siguen siendo marcos a la espera de validación; los estudios de evaluación oral asíncrona citados arriba midieron puntuaciones de formato y no midieron la copia en absoluto.

## Conceptos conectados

- [[pedagogy]] — el paraguas de enfoques de enseñanza que esta página operacionaliza en secuencias
- [[learning-design]] — donde se eligen, secuencian e incorporan los patrones en un curso
- [[scaffolding]] — el principio de apoyo y retirada que gobierna dónde encaja la ayuda de la IA
- [[feedback]] — el sistema que los patrones de retroalimentación de esta página instancian
- [[formative-assessment]] — el propósito de evaluación al que sirven la mayoría de estos patrones
- [[peer-assessment]] — la mitad humana de los patrones PAIRR y de retroalimentación combinada
- [[ai-feedback-quality]] — por qué la calidad de la retroalimentación por sí sola no determina la revisión
- [[evaluative-judgment]] — el juicio valorativo que los estudiantes deben ejercer sobre el resultado de la IA
- [[feedback-literacy]] — la capacidad que construyen los pasos de valoración crítica
- [[human-in-the-loop-ai]] — la estructura de supervisión de los patrones de revisión
- [[oral-assessment]] — el formato que subyace a los patrones de verificación
- [[process-oriented-assessment]] — la lógica detrás de los puntos de control por etapas
- [[productive-failure]] — el concepto detrás de intentar antes de la instrucción
- [[retrieval-spacing-interleaving]] — la base de evidencia de los patrones de recuperación espaciada
- [[desirable-difficulties]] — por qué las secuencias esforzadas superan a las fluidas
- [[misconceptions]] — a lo que apuntan los patrones de cambio conceptual
- [[refutation-text]] — la forma textual de la confrontación de errores de concepto
- [[learning-by-teaching]] — la pedagogía detrás del patrón del alumno IA
- [[socratic-method]] — el patrón de cuestionamiento y su evidencia contradictoria
- [[collaborative-learning]] — el contexto para el trabajo guionizado con IA compartida
- [[cognitive-offloading]] — el riesgo que todo patrón de esfuerzo primero está diseñado para evitar
- [[metacognition]] — lo que los pasos de reflexión de estas secuencias pretenden desencadenar
- [[prompt-engineering]] — la capa de andamiaje en los patrones de uso estructurado
- [[transfer-of-learning]] — el resultado por el que en última instancia se juzgan la mayoría de los patrones
- [[assessment-validity]] — la razón por la que se propone la evidencia de proceso
- [[academic-integrity]] — el motor detrás de la verificación oral y de proceso
- [[ai-literacy]] — la capacidad desarrollada al criticar el resultado de la IA
- [[online-teaching-and-learning]] — el contexto que hace determinante la secuenciación
- [[higher-ed]] — el nivel donde se generó la mayor parte de esta evidencia
- [[k-12]] — el nivel de los estudios de fracaso productivo, cambio conceptual y evaluación oral

## Artículos conectados

- [[pairr-ai-peer-review-2025]] — Revisión entre pares y con IA + reflexión (PAIRR): la secuencia emblemática, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR aplicado en un curso de escritura empresarial (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — La retroalimentación integrada de IA más pares elevó la implicación y las cuatro dimensiones del IELTS (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Retroalimentación entre pares con IA generativa y andamiaje de prompt en la argumentación colaborativa (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Formar a los estudiantes para filtrar y valorar la retroalimentación de la IA: las condiciones FRAC y APCA
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Una retroalimentación con IA de mayor calidad no produjo mayores ganancias de revisión (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — El asistente socrático con contexto completo fue valorado peor que cualquier otra configuración (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Andamiaje socrático activado por necesidades en la formación de entrevista clínica, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Chatbot socrático en mecánica introductoria: la especificidad de las preguntas subió de 10–15% a 100% (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Retroalimentación de agentes socráticos frente a directivos, con el orden no contrabalanceado (Han et al. 2026)
- [[adaptive-pretesting-retention]] — La recuperación espaciada adaptativa superó al estudio con IA dirigido por quien aprende (Akgun & Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — El ChatGPT sin restricciones durante el estudio redujo la retención a 45 días (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Las ganancias de la tutoría estructurada siguieron las semanas completadas, no los minutos (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Los ejemplos frente a la práctica se cruzan según el tipo de conocimiento (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Ejemplos guiados y erróneos adaptativos en un tutor inteligente de lógica (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Añadir autoexplicación a la retroalimentación de la IA perdió en todas las medidas (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — La tutoría con barreras eliminó el daño en el examen que causaba el GPT sin barreras, ~1,000 estudiantes (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Uso guiado frente a uso sin restricciones del LLM en estadística (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — El andamiaje de respuesta inmediata deprimió la abstracción de modelos a la vez que era preferido (Zhu et al. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Guiar a un tutor LLM para retener las soluciones en el fracaso productivo (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Ciclos semanales de crítica y refinamiento construidos sobre casos deliberados de fallo de la IA (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — El análisis de errores como competencia distinta, en 72 estudios de educación en informática (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Pistas guiadas en lugar de corrección directa de errores en la revisión de L2 (Lukešová & Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Explicar a un aprendiz novato de IA, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Prueba aleatorizada de enseñar a programar a un agente ChatGPT (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — Aprender enseñando desplegado en 546 estudiantes durante 11 semanas (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Estudiantes que diseñan preguntas que un LLM no puede responder (Yang et al. 2025)
- [[code-review-genai-cs1]] — Entrevistas orales obligatorias de revisión de código como respuesta a la IA generativa en CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Evaluación oral grabada asíncrona frente a opción múltiple presencial (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — La viva basada en chat redujo la ansiedad mientras que la presencial fue valorada mejor para la comprensión (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — La IA sacando a la luz evidencia de rúbrica para el juicio docente en talleres de formación profesional (Adams 2026)
- [[quantum-education-its]] — Puntos de control de resultado y enfoque en un curso de posgrado a ritmo propio (Elhaimeur & Chrisochoides 2026)
- [[agentic-education-coding]] — Puntos de control de bloqueo y una comprobación previa al avance, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Aprendizaje basado en problemas de cuatro módulos con hitos y rúbricas (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — Un bucle de revisión de cuatro agentes con docentes, y dónde falló el ajuste al interés (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Retroalimentación con educador en el bucle con puntuaciones de verificador (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Inyecciones de prompt que cambiaron notas sin ser detectadas, dejando al docente como la única comprobación (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — Una IA compartida que pronostica la ruptura de la colaboración en programación en parejas (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Roles guionizados de aprendiz e IA en la construcción grupal de conocimiento (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Apoyo de IA con roles separados en la tutoría padre-hijo (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — El diálogo personalizado con IA superó a la refutación de libro de texto de inmediato, convergiendo a los dos meses (Corbett & Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Los textos de cambio conceptual superaron al diálogo interactivo con IA, el resultado inverso (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — Indagación guiada con IA y comprensión conceptual (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Comparación de tres cohortes de aula tradicional, invertida e invertida mejorada con IA (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Curso de estudio invertido con andamiaje de prompt guiado por parámetros (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — El modelo de enseñanza moderó los resultados: invertido g = 1.96 frente a tradicional g = 0.46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — El uso semanal de un tutor de deberes predijo las puntuaciones de tareas de transferencia en un curso invertido (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — Una discusión de crítica de la IA en cinco pasos construida sobre un error de la IA (Beck & Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — Una secuencia probada de aprendizaje cooperativo con roles asignados y un paseo por la galería (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Módulo de seminario y discusión entre pares con un recomendador de recuperación con IA (Huang 2026)