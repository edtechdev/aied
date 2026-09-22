---
title: "¿Cuáles son las buenas prácticas para desarrollar un tutor de IA eficaz?"
created: "2026-09-22T18:57:28-04:00"
updated: "2026-09-22T18:57:28-04:00"
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

# ¿Cuáles son las buenas prácticas para desarrollar un tutor de IA eficaz?

Un tutor de IA eficaz debería diseñarse como un **sistema de aprendizaje, no como un [[conversational-ai|chatbot]] generador de respuestas**. El tema más recurrente en esta base de conocimiento es que la estructura [[pedagogy|pedagógica]] (diagnóstico, andamiaje, retroalimentación, agencia del estudiante y evaluación) importa al menos tanto como el modelo subyacente. Los dos ejemplos desarrollados a continuación (un tutor de cálculo y un coach de escritura) muestran cómo una misma arquitectura central debe adaptarse a lo que la disciplina exige de quien aprende.

## 1. Empiece con objetivos de aprendizaje explícitos y defina la tarea de quien aprende

Antes de elegir un modelo, especifique:

- Qué debería saber o ser capaz de hacer el estudiantado después.
- Qué trabajo cognitivo debe realizar por sí mismo.
- En qué puede ayudar el tutor.

Un tutor optimizado para «terminar el problema» puede socavar fácilmente a un tutor optimizado para «aprender a resolver el problema». El concepto [[intelligent-tutoring|tutoría inteligente]] subraya que la eficacia depende del diseño pedagógico y no solo de la capacidad del modelo.

## 2. Diagnostique antes de prescribir

Mantenga un modelo del estudiante basado en evidencia como el conocimiento demostrado, las [[misconceptions|ideas erróneas]], los intentos recientes, el comportamiento de búsqueda de ayuda y la confianza cuando proceda. Adapte la dificultad y la asistencia a partir de esa evidencia, en lugar de limitarse a reaccionar a la última indicación de quien aprende. Sea prudente a la hora de permitir que un [[llm|LLM]] realice el diagnóstico por sí solo: la [[benchmark|evaluación comparativa]] encontró que los tutores LLM podían reconocer razonamientos claramente correctos y, a la vez, rechazar a veces alternativas válidas o aceptar razonamientos incorrectos. Para dominios con consecuencias, una arquitectura útil es **diagnóstico estructurado + diálogo flexible con el LLM**. Véase [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]].

## 3. Use una escalera de pistas en lugar de dar la solución de inmediato

Una secuencia de tutoría útil es: pedir un intento, sondear el razonamiento de quien aprende, dar una pequeña pista, dar una pista conceptual más fuerte, demostrar un paso parcial, ofrecer una solución desarrollada solo cuando esté justificado y, por último, pedir al estudiante que explique o aplique la idea de forma independiente. El apoyo debería **desvanecerse a medida que crece la competencia**. Esto es central en el concepto de [[scaffolding|andamiaje]]. Un experimento de campo clave encontró que una interfaz GPT sin salvaguardas aumentó el rendimiento asistido en matemáticas pero redujo el rendimiento posterior en el examen sin ayuda, mientras que un tutor que daba pistas eliminó en gran medida esa penalización de aprendizaje: véase [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]].

Un experimento de campo aleatorizado más amplio, con más de 6,000 estudiantes de secundaria en una plataforma de práctica basada en el dominio, encontró la misma firma con más detalle: el estudiantado asignado al apoyo con IA progresó más despacio e intentó menos preguntas, pero respondió con más precisión y (el mecanismo más claro) mejoró la corrección de su siguiente intento después de los errores, necesitando menos intentos para volver a una respuesta correcta. Eso es una **ralentización productiva**, no un arrebato de respuestas, y es la conducta que una escalera de pistas debería producir. El mismo estudio aporta una advertencia sobre los indicadores indirectos: exigir tres respuestas correctas seguidas elevó mucho el dominio definido por la plataforma sin producir ganancias detectables en una prueba diferida una semana después, y la evidencia más sólida en la prueba diferida apareció solo donde la IA estaba dentro del flujo de trabajo de dominio (coeficiente 0.085) y no como acceso independiente. Véase [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]].

## 4. Haga que la retroalimentación sea específica, inmediata, accionable y conectada con el razonamiento

Evite la retroalimentación que se limita a decir «Correcto», «Incorrecto» o «Buen trabajo». En su lugar, el tutor debería identificar el paso de razonamiento implicado, explicar qué hay que reconsiderar, dar a quien aprende algo concreto que hacer a continuación y pedirle que prediga o explique antes de revelar la retroalimentación cuando proceda. Esta base de conocimiento trata la [[feedback|retroalimentación]] como un **bucle completo de provisión y aprovechamiento**: la retroalimentación solo apoya el aprendizaje cuando el estudiantado la entiende y actúa en consecuencia.

## 5. Ancle el contenido factual en fuentes en lugar de confiar en la memoria del LLM

Use la generación aumentada por recuperación con materiales fiables como libros de texto aprobados por el profesorado, apuntes del curso, ejemplos resueltos, políticas y recursos [[curriculum-design|curriculares]], y exponga las citas o la procedencia cuando sea útil. Para dominios con respuestas verificables formalmente, añada herramientas deterministas como calculadoras, sistemas de matemática simbólica, ejecución de código, grafos de conocimiento, validadores basados en reglas y solucionadores [[discipline-specific-aied|específicos del dominio]]. La RAG puede reducir el [[hallucination-risk|riesgo de alucinación]], aunque no lo elimina: véase [[rag|Retrieval-Augmented Generation]].

## 6. Diseñe para la metacognición y la agencia de quien aprende

Exija con regularidad que quien aprende genere, elija, justifique, evalúe o reflexione. Un principio de diseño útil es **primero quien aprende → después la IA → de nuevo quien aprende**. El objetivo a largo plazo es que el estudiantado interiorice el cuestionamiento del tutor y sus estrategias de [[problem-solving|resolución de problemas]], en lugar de volverse dependiente del tutor. Véanse [[agency|agencia del estudiante]] y [[scaffolding|andamiaje]].

## 7. Trate la seguridad pedagógica como algo distinto de la seguridad habitual de un chatbot

Las pruebas de seguridad de un tutor educativo deberían incluir más que la toxicidad y la resistencia a los jailbreak. Compruébelo con filtraciones de respuestas, refuerzo de ideas erróneas, acuerdo excesivo o [[ai-sycophancy|adulación]], dificultad inapropiada, [[cognitive-offloading|delegación cognitiva]], trato sesgado, pérdida de agencia del estudiante, deriva instruccional y exceso de confianza en explicaciones incorrectas. Un tutor debería ser **amable pero correcto**, incluso cuando quien aprende insiste en una idea errónea, y las pruebas deberían incluir conversaciones extensas, porque los fallos pedagógicos pueden acumularse a lo largo de varias interacciones. Véanse [[pedagogical-safety|seguridad pedagógica]] y [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]].

## 8. Integre la privacidad, la accesibilidad y la equidad en la arquitectura

Recopile únicamente los datos del estudiante que sean pedagógicamente necesarios. Cuando se use memoria persistente o [[student-modeling|modelado del estudiante]], haga transparente su finalidad, dé al estudiantado un control adecuado, proteja la información sensible, defina políticas de retención y ofrezca supervisión del profesorado o [[human-in-the-loop-ai|supervisión humana]] en situaciones con consecuencias. Audite el comportamiento del tutor en distintos antecedentes lingüísticos, niveles de capacidad, contextos culturales, necesidades de [[accessibility|accesibilidad]] y distintos niveles de [[prior-knowledge|conocimientos previos]] y de experiencia con la IA. No convierta el [[prompt-engineering|diseño de indicaciones]] sofisticado en un requisito para una buena instrucción: el propio tutor debería ayudar al estudiantado a formular preguntas productivas.

## 9. Mida el aprendizaje, no solo la calidad del chatbot

Métricas como la precisión de las respuestas, la longitud de la conversación, la preferencia del estudiantado, la satisfacción, la finalización de tareas y la [[student-engagement|implicación]] son insuficientes por sí solas. Evalúe en su lugar el rendimiento sin ayuda, la retención diferida, la transferencia a problemas nuevos, la corrección de ideas erróneas, la independencia de quien aprende, el aprovechamiento de la retroalimentación y los [[differential-effects-across-learner-groups|efectos diferenciales entre grupos de estudiantes]]. La pregunta crítica es si el estudiantado puede rendir con éxito una vez retirado el tutor. Véanse [[ai-ed-evaluation|evaluación en IA educativa]] y [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]].

Dos estudios recientes afinan esa regla frente a las [[self-report-measures|medidas autoinformadas]] y a horizontes cortos. Un piloto con 38 estudiantes novatos de programación encontró una asociación fuerte entre el uso de [[generative-ai|IA generativa]] y el aprendizaje *percibido* (rs=0.802, p<0.001), mientras que los indicadores de progreso autónomo sin apoyo del profesorado obtuvieron las puntuaciones más bajas: la brecha que, según advierten los autores, produce una ilusión de competencia y una deuda epistémica, y exactamente la brecha que premian las métricas de satisfacción. Véase [[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]].

De forma más fundamental, la mayoría de las evaluaciones se detienen en el momento en que termina la asistencia. [[cognitive-washout-ai-skill-decay-2026|La dinámica de desgaste cognitivo]] da nombre al intervalo posterior a la retirada, que no se mide, y formaliza cuatro resultados posibles (rebote elástico, meseta parcial, andamiaje latente y sobrerrecuperación) con un modelo de curva de desgaste cuyos parámetros incluyen la constante de tiempo de recuperación, la completitud de la recuperación y un índice de histéresis que compara el esfuerzo de reaprendizaje con el esfuerzo original. Como la reversibilidad determina la gravedad, el marco sostiene que la práctica programada sin ayuda debería dosificarse según la curva de recuperación en lugar de discutirse en términos morales. Un plan de evaluación de un tutor debería incluir, por tanto, una fase de retirada y no solo una prueba posterior inmediata. Véase [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|la evidencia aleatorizada de que una asistencia breve deprime el rendimiento posterior sin ayuda]].

## 10. Mantenga al profesorado o a los expertos de dominio en el bucle de aseguramiento de la calidad

Antes del despliegue, haga que el personal docente pruebe perfiles realistas de estudiantes, ideas erróneas comunes, casos límite, indicaciones adversarias, respuestas ambiguas y conversaciones de tutoría extensas. Registre los fallos pedagógicos y úselos para revisar las indicaciones del sistema, las políticas de tutoría, las fuentes de conocimiento, las [[guardrails|salvaguardas]], las reglas del modelo del estudiante y la selección de modelo. La supervisión humana sigue siendo importante porque una respuesta de tutoría fluida puede ser aun así pedagógicamente inapropiada o incorrecta.

[[teacher-intervention-k12-ai-based-instruction-2026|La revisión sistemática de Lee de 29 estudios de K-12]] muestra en qué consiste realmente esa supervisión y dónde falla. La intervención del [[teacher-role|profesorado]] es un ciclo repetido de cuatro fases (monitorización, juicio, intervención y orquestación); las alertas de IA, los [[visualization|paneles de control]] y las puntuaciones automatizadas «no conducen automáticamente a una acción pedagógica»; y la estrategia docente predominante es la *traducción pedagógica*: seleccionar, revisar, complementar, resumir o eliminar la retroalimentación del chatbot en lugar de transmitirla sin cambios. De ahí se derivan dos advertencias de diseño. Más información de la IA no es mejor: los sistemas que emiten diagnósticos de forma continua sobrecargaban al profesorado y desviaban su atención de su propia observación, así que priorice lo que merece la pena atender, hágalo interpretable y ofrezca recomendaciones en una forma que el profesorado pueda aceptar, modificar, aplazar o rechazar. Más apoyo al profesorado tampoco es mejor: retrasar la intervención para que el estudiantado trabaje de forma independiente es en sí mismo una pericia, y las condiciones estructurales (tiempo para revisar datos, tamaño de la clase, capacidad de llegar físicamente a los grupos que necesitan ayuda) forman parte de la intervención y no son logística de fondo.

## Una arquitectura útil de tutor de IA

Una arquitectura de producción sólida puede representarse así: objetivo de aprendizaje → evidencia del estudiante / modelo del estudiante → política pedagógica → contenido anclado y validado → generación conversacional → respuesta de quien aprende → modelo del estudiante actualizado (volviendo al inicio). La seguridad, la privacidad, la accesibilidad, la supervisión del profesorado y la evaluación deberían rodear todo el bucle.

## El criterio de éxito más importante

La métrica de desarrollo más importante no es «¿resolvió la IA el problema?», sino **«después de interactuar con la IA, ¿puede quien aprende resolver un problema comparable de forma independiente?»**. La evidencia de este principio es más sólida en dominios de aprendizaje estructurados como las matemáticas y la programación; la generalización a dominios más abiertos sigue siendo menos segura, lo que hace esencial la evaluación específica del dominio.

Para saber dónde se sitúa un tutor dentro de la secuencia de un curso en lugar de funcionar por sí solo, véase [[designing-ai-into-learning]]; para las reglas de diseño a nivel de software que debe cumplir un tutor, véase [[designing-educational-ai-software]]; y para cómo evaluar la intervención resultante, véase [[evaluating-ai-interventions-methods]].

---

## Ejemplo 1: diseñar un tutor de IA para cálculo

Piense en un tutor de cálculo para el primer semestre de universidad. Su objetivo debería ser aumentar lo que el estudiantado puede resolver y explicar **de forma independiente una vez retirado el tutor**, y no maximizar los problemas completados correctamente. La tutoría de matemáticas es especialmente vulnerable al exceso de andamiaje, al uso prematuro de pistas y al diagnóstico incorrecto del razonamiento del estudiante. Véanse [[math-education|educación matemática]], [[zhang-tutormoments-2026|When Help is Unhelpful]], [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] y [[scaffolding|andamiaje]].

**Objetivos de aprendizaje.** El tutor podría mantener un mapa de conceptos (funciones y gráficas → tasas de cambio → límites → derivada como límite → reglas de derivación → aplicaciones → primitivas → integrales definidas → teorema fundamental). Para cada concepto debería distinguir varios tipos de dominio. Por ejemplo, «dominar la derivada» no debería significar simplemente producir la derivada correcta; podría incluir reconocer cuándo una derivada es apropiada, interpretarla como una tasa de cambio instantánea, seleccionar la regla correcta, ejecutar el procedimiento, explicar por qué es apropiada, comprobar si es razonable y aplicarla a un problema desconocido. Esto ayuda a prevenir la [[correct-answer-trap-misconceptions|trampa de la respuesta correcta]], en la que quien aprende llega a la respuesta correcta mediante un razonamiento defectuoso.

**Arquitectura del sistema.** Un diseño práctico de seis capas: materiales del curso + políticas del profesorado → capa de recuperación/RAG → (motor de problemas → modelo del estudiante) y (verificador simbólico → motor de diagnóstico) → política pedagógica → LLM conversacional → estudiante → modelo del estudiante actualizado.

1. **Capa de anclaje en el curso:** recupera de materiales aprobados por el profesorado (secciones del libro de texto, apuntes de clase, ejemplos resueltos, terminología, métodos aprobados, notación, reglas de las tareas), de modo que el tutor nunca introduzca técnicas matemáticamente válidas pero inapropiadas para el curso.
2. **Capa de verificación matemática:** usa un sistema de álgebra computacional para verificar equivalencia algebraica, derivadas, integrales, soluciones de ecuaciones, puntos críticos y aproximaciones numéricas: el LLM se encarga de la explicación y el diálogo, mientras que el sistema determinista se encarga de la comprobación matemática.
3. **Capa del modelo del estudiante:** mantiene estimaciones por concepto (por ejemplo, límite: en desarrollo; regla de la potencia: dominada; regla del producto: en desarrollo; regla de la cadena: no demostrada) además de hipótesis de ideas erróneas con evidencia y confianza. La IA debería tratar una idea errónea como una **hipótesis** y no como un hecho establecido, porque los LLM pueden alucinar evidencia o inferir ideas erróneas de forma incorrecta: se necesita un proceso de **detectar → verificar → responder**.

**Una interacción de tutoría.** Para derivar $f(x)=(x^2+1)\sin x$, un chatbot convencional podría revelar de inmediato la respuesta. Un tutor orientado al aprendizaje razona en cambio internamente: el estudiante derivó ambos componentes, pero parece haber multiplicado sus derivadas (una posible idea errónea de la regla del producto como $f'g'$), así que plantea primero una pregunta de diagnóstico («¿qué regla usas cuando se multiplican dos funciones?»), luego pide al estudiante que escriba la regla del producto de forma simbólica, después plantea $u$ y $v$, y solo verifica la expresión final una vez que el estudiante la ha reconstruido.

**Una política de ayuda gradual.** La asistencia puede adaptarse mediante una escalera de niveles: intento independiente → pregunta [[metacognition|metacognitiva]] → indicio conceptual → identificar la regla pertinente → plantear parte del problema → paso intermedio desarrollado → solución desarrollada → el estudiante explica → el estudiante resuelve de forma independiente un problema de transferencia. Ver una solución desarrollada no demuestra dominio, así que después de una ayuda sustancial el tutor debería hacer que quien aprende intente un problema comparable sin ayuda.

**Evitar el uso improductivo de las pistas.** La interfaz no debería convertir las pistas ilimitadas en un atajo sin fricción, ya que las peticiones prematuras de pistas y la lectura superficial de las mismas se asocian con menores [[learning-gains|ganancias de aprendizaje]]. En lugar de `[Pista][Pista][Pista][Mostrar respuesta]`, el sistema podría preguntar «¿qué has intentado?» y «¿qué parte te bloquea?» (elegir una regla, plantear la ecuación, hacer el álgebra, entender el concepto, otra cosa) y ofrecer una asistencia específica.

**Apoyar el cálculo conceptual.** El tutor debería conectar los procedimientos simbólicos con múltiples representaciones (fórmula, gráfica, tabla, interpretación verbal, contexto físico de tasa de cambio) para distinguir la fluidez procedimental de la comprensión conceptual.

**Panel para el profesorado.** El sistema debería mostrar evidencia agregada en lugar de juicios opacos de la IA (por ejemplo, «regla del producto: 62% con dominio demostrado; patrones comunes: 18% omiten un término, 11% multiplican las derivadas»), con los diagnósticos individuales presentados como hipótesis respaldadas por evidencia.

**Plan de evaluación.** Mida el rendimiento mientras se usa el tutor, el rendimiento en problemas comparables sin él, la retención diferida, la transferencia a problemas desconocidos, la [[explainable-ai|calidad de las explicaciones]] conceptuales, la corrección de ideas erróneas, la [[help-seeking|búsqueda de ayuda]] apropiada frente a la prematura, la filtración de respuestas, las tasas de falsos positivos y falsos negativos del diagnóstico y los [[differential-effects-across-learner-groups|resultados diferenciales]]. La comparación clave es el rendimiento **con** el tutor frente al rendimiento **sin** él después: un estudiante que pasa del 60% al 95% con asistencia pero se queda en el 60% de forma independiente no ha recibido una tutoría eficaz.

---

## Ejemplo 2: diseñar un coach de escritura con IA

Un coach de escritura con IA requiere un diseño distinto, porque la escritura no tiene una única respuesta objetivamente correcta. El objetivo es ayudar a quien aprende a mejorar en la planificación, la redacción, la evaluación y la revisión de su propia escritura. Esta base de conocimiento enmarca la escritura como un **proceso cognitivo, social y retórico**, lo que significa que un sistema de escritura con IA puede apoyar el aprendizaje, pero también puede eliminar exactamente el pensamiento que la tarea pretendía desarrollar. Véanse [[writing-education|educación en escritura]], [[ai-writing-support-stage-ownership-2026|From Planning to Revision]], [[coach-not-crutch-ai-writing|Coach not Crutch]] y [[feedback|retroalimentación]].

**Objetivos de aprendizaje.** El modelo del estudiante del coach podría hacer seguimiento de la argumentación (especificidad de la tesis, alineación entre afirmación y evidencia, contraargumento), la organización (enfoque del párrafo, progresión lógica, transiciones), la evidencia (pertinencia de las fuentes, integración de la evidencia, interpretación), la revisión (revisión global y a nivel de frase, evaluación de la retroalimentación) y el estilo (claridad de la frase, gramática, voz autoral), siguiendo **capacidades** de escritura y no solo la nota de un ensayo.

**Ancle el coach en la tarea.** Recupere las instrucciones de la tarea, la rúbrica del profesorado, las lecturas del curso, los requisitos de citación, las convenciones del género, los ejemplos del profesorado y la política de uso de la IA, de modo que la retroalimentación pueda referirse a la tarea real («la rúbrica de tu profesor pide conectar cada afirmación importante con evidencia de al menos dos lecturas del curso») en lugar de inventar expectativas genéricas.

**Trate de forma distinta las etapas de la escritura.** La implicación de la IA en distintas etapas afecta de manera diferente a la percepción de autoría: el apoyo en la planificación reduce menos la autoría que el apoyo en la redacción, y la redacción generada por IA produce la mayor pérdida de autoría. Así, un coach puede conceder permisos distintos por etapa: en la planificación puede hacer preguntas, comparar posturas, cuestionar supuestos y criticar esquemas, pero evitar generar todo el argumento; en la redacción, quien aprende produce primero la prosa (el coach ayuda a desarrollar, no a apropiarse); en la revisión, el coach puede identificar afirmaciones poco claras, señalar evidencia ausente, comprobar si la evidencia respalda una afirmación, detectar problemas de organización y comparar un borrador con la rúbrica, **diagnosticando antes de reescribir**; y en la edición (después de la revisión) puede apoyar la gramática, la puntuación, la concisión y el formato de las citas.

**Ejemplo de interacción.** Para un ensayo sobre exigir [[online-teaching-and-learning|cursos en línea]], un sistema genérico podría reescribir el párrafo del estudiante en una prosa pulida, haciendo el trabajo intelectual. Un coach de escritura dice en cambio qué funciona, nombra el problema principal (el párrafo da razones, pero no explica por qué justifican un mandato para toda la universidad), plantea una pregunta de revisión y pide al estudiante que complete una frase con sus propias palabras, dejando la construcción del argumento a quien aprende.

**La retroalimentación debe estar priorizada.** Cada ronda de retroalimentación podría contener un punto fuerte que conservar, un problema de alto impacto, una pregunta que exija el juicio de quien escribe y un objetivo de revisión concreto, en lugar de abrumar a quien aprende con decenas de comentarios.

**Haga que el estudiante evalúe la [[ai-feedback-quality|retroalimentación de la IA]].** La [[feedback-literacy|alfabetización en retroalimentación]] es en sí misma un objetivo de aprendizaje; el coach debería preguntar periódicamente si quien aprende está de acuerdo con una sugerencia y por qué, y permitirle rechazar la retroalimentación de la IA, desarrollando el **[[evaluative-judgment|juicio evaluativo]]** y no la obediencia.

**Preserve la voz autoral.** El coach debería distinguir entre errores, problemas de claridad, elecciones retóricas y preferencias de estilo, y no debería «corregir» automáticamente las dos últimas, pues corre el riesgo de homogeneizar la escritura hacia el estilo que prefiera el modelo, sobre todo en el caso de quienes escriben en [[multilingual-learning|varios idiomas]] y de estilos retóricos no estándar.

**Un modelo del estudiante basado en el historial de revisiones.** En lugar de almacenar solo los ensayos finales, el sistema puede aprender de las revisiones del estudiante (por ejemplo, un patrón repetido de «se introduce evidencia pero no se interpreta» que mejora de un ensayo a otro), adaptándose a partir de la evidencia de aprendizaje.

**Participación del profesorado.** El profesorado controla la rúbrica, los objetivos de la tarea, las formas de asistencia con IA permitidas, la colección de fuentes, las expectativas de citación, si se permite la redacción generativa y cuándo se requiere revisión humana. Un panel para el profesorado podría mostrar patrones a nivel de clase (por ejemplo, el 41% necesita apoyo en la conexión entre afirmación y evidencia) como señal de [[formative-assessment|evaluación formativa]].

**Evaluar el coach de escritura.** Mida la calidad de la escritura asistida por IA y de la escritura posterior sin ayuda, la capacidad de identificar debilidades en textos desconocidos, la calidad de la revisión, el aprovechamiento de la retroalimentación, la capacidad de explicar las revisiones, la autoría del estudiante, la dependencia de la prosa de la IA, la preservación de la voz, el sesgo entre dialectos, escritores multilingües y grupos, la alineación con el juicio del profesorado y la transferencia diferida. Un experimento revelador compara un grupo que escribe de forma independiente, un grupo en el que la IA genera o revisa el texto y un grupo con coach, todos ellos completando después un ensayo nuevo sin IA: si el grupo con texto generado por IA rinde mejor en la práctica pero mal sin IA, el sistema mejoró el rendimiento y no el aprendizaje.

---

## Comparación de los dos diseños

| Pregunta de diseño | Tutor de cálculo | Coach de escritura |
|---|---|---|
| Objeto de aprendizaje principal | Conceptos y resolución de problemas matemáticos | Argumentación y proceso de escritura |
| Verificación | A menudo verificable objetivamente | Normalmente requiere juicio contextual |
| Herramientas deterministas | Motor de matemática simbólica / calculadora | Comprobaciones de gramática, citas y rúbrica |
| Papel principal de la IA | Diagnosticar y andamiar el razonamiento | Diagnosticar y andamiar la revisión |
| Riesgo principal | Regalar la solución | Escribir el texto por quien aprende |
| Acción importante de quien aprende | Resolver y explicar | Redactar, evaluar y revisar |
| Modelo del estudiante | Conceptos, procedimientos, ideas erróneas | Argumento, evidencia, organización, revisión |
| Salvaguarda clave | Intento antes de la solución | Prosa del estudiante antes de la reescritura con IA |
| Prueba de transferencia | Problemas nuevos de cálculo sin IA | Tarea nueva de escritura sin IA |
| Criterio de éxito | Razonamiento matemático independiente | Escritura independiente y juicio evaluativo |

Los dos sistemas usan muchas de las mismas [[ai-technologies|tecnologías]] de IA, pero encarnan **políticas pedagógicas distintas porque las disciplinas exigen tipos de pensamiento diferentes**. El principio común: **identifique la actividad cognitiva que produce aprendizaje y diseñe la IA para apoyar esa actividad sin quitársela a quien aprende**, preservando el razonamiento matemático en el caso del cálculo, y la autoría, la toma de decisiones retóricas, la evaluación y la revisión en el de la escritura. Ese principio es más fundamental que cualquier modelo, indicación, marco de agentes o interfaz de usuario concretos.