---
title: "¿Cuáles son las buenas prácticas para desarrollar un tutor de IA eficaz?"
created: "2026-09-22T18:57:28-04:00"
updated: "2026-10-28T13:06:12-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
source_updated: "2026-10-28T11:21:07-04:00"
translation_of: faqs/developing-ai-tutor
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Su tutor está a tres semanas de un pilotaje. El chat funciona, el modelo explica una derivada con claridad y la demostración interna arrancó aplausos. Entonces alguien del centro de enseñanza hace la pregunta para la que su especificación no tiene ningún campo: después de un semestre con este sistema, ¿resolverán los estudiantes un problema cuando el tutor no esté en la sala? Lo que tiene es una lista de funciones. Lo que no tiene es una sola frase que diga qué debe ser capaz de hacer el estudiante por su cuenta al final.

Un tutor es una política envuelta alrededor de un [[conversational-ai|chatbot]], y la política decide si hay aprendizaje. Nombre el trabajo cognitivo que debe hacer el estudiante, haga que el sistema lo exija (un intento antes de la ayuda, una escalera de pistas que se retira, una comprobación que el modelo no pueda falsear) y evalúe con el tutor apagado. La calidad del modelo determina lo bien que se siente la conversación. La política decide qué sabrá hacer el estudiante en junio.

## La versión breve

**1.** Escriba el objetivo como una afirmación sobre el desempeño sin ayuda y derive de ella cada función. Si una función no se puede rastrear hasta esa frase, es una función de demostración.

**2.** Construya el modelo del estudiante a partir de evidencia que pueda registrar, y guarde cada diagnóstico como una hipótesis con un valor de confianza en lugar de como un hecho.

**3.** Fije la escalera de ayuda en el código, con peldaños con nombre, y haga que la interfaz le cobre algo al estudiante por cada paso hacia abajo.

**4.** Ancle el contenido en sus propios materiales y entregue la aritmética, el álgebra y la comprobación de código a herramientas deterministas que no puedan alucinar.

**5.** Pruebe los fallos de enseñanza a lo largo de conversaciones completas: filtración de respuestas, adulación, refuerzo de concepciones erróneas, deriva instruccional.

**6.** Mida con una fase de retirada y una prueba diferida, no con una puntuación de satisfacción.

## Escriba el objetivo como una afirmación sobre el desempeño sin ayuda

Tres listas, escritas antes de que nadie elija un modelo:

- Lo que los estudiantes deberían saber o poder hacer después.
- El trabajo cognitivo que deben realizar ellos mismos.
- Lo que el tutor puede hacer por ellos.

La literatura sobre [[intelligent-tutoring|tutoría inteligente]] señala que la eficacia depende del diseño [[pedagogy|pedagógico]] y no solo de la capacidad del modelo, y el fallo es fácil de construir por accidente. Un tutor optimizado para "terminar el problema" socavará a un tutor optimizado para "aprender a resolver el problema" mientras aprueba todas las pruebas funcionales que escriba, porque ambos producen respuestas finales correctas. La diferencia está en lo que hizo el estudiante entre la pregunta y la respuesta.

La segunda lista es donde los equipos de desarrollo se vuelven concretos. Tome una etiqueta de dominio como "dominio de la derivada" y niéguese a que signifique producir la derivada correcta. Divídela en reconocer cuándo una derivada es apropiada, interpretarla como tasa de cambio instantánea, seleccionar la regla, ejecutar el procedimiento, explicar por qué la elección era correcta, comprobar la razonabilidad y aplicarla a un problema desconocido. Cada uno de esos elementos es algo distinto que registrar, y cada uno implica una respuesta diferente cuando falta. Esta descomposición es también la defensa contra la [[correct-answer-trap-misconceptions|trampa de la respuesta correcta]], en la que un estudiante llega a la respuesta correcta mediante un razonamiento defectuoso y su analítica registra un éxito. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] y [[zhang-tutormoments-2026|When Help is Unhelpful]] describen ambos versiones de ese fallo en producción.

## Construya el modelo del estudiante antes de la conversación

El modelo del estudiante contiene dos tipos de estado: estimaciones por concepto (límite: en desarrollo, regla de la potencia: dominada, regla del producto: en desarrollo, regla de la cadena: no demostrada) e hipótesis de concepciones erróneas con la evidencia y la confianza que respaldan cada una. Manténgalos separados. La estimación por concepto es lo que impulsa la selección de dificultad. La hipótesis es lo que impulsa la siguiente pregunta.

Tenga cuidado con dejar que un [[llm]] haga el diagnóstico por su cuenta. [[benchmark|Benchmarking]] encontró que los tutores basados en LLM podían reconocer razonamiento claramente correcto y a la vez rechazar alternativas válidas o aceptar razonamiento incorrecto. Un modelo que detecta el caso bueno y malinterpreta el ambiguo falla precisamente con los estudiantes que necesitan la ayuda. En dominios con consecuencias, la arquitectura que sobrevive es el **diagnóstico estructurado más diálogo flexible con el LLM**, el arreglo que describe [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]]: su propio detector establece lo que el estudiante probablemente hizo, y el modelo escribe la conversación alrededor de ese hallazgo.

Dé al diagnóstico una secuencia explícita que el modelo no pueda saltarse: detectar, verificar, responder. El modelo puede proponer una [[misconceptions|concepción errónea]] como hipótesis, y luego debe verificarla contra el trabajo real del estudiante o una pregunta dirigida antes de que el tutor responda a ella. Sin ese paso, el sistema inventa evidencia y después tutoriza al estudiante sobre un error que no cometió, lo cual es inútil y ligeramente insultante.

Evidencia que vale la pena registrar, en orden aproximado de utilidad: intentos recientes con sus pasos intermedios, conocimiento demostrado por concepto, conducta de búsqueda de ayuda (que es en sí misma una señal sobre la confianza) y confianza autoinformada cuando la recojas. Adapta la dificultad y la asistencia a partir de ese registro, y trata el último mensaje del estudiante como una entrada más entre varias. Un solo mensaje es un mal estimador de lo que sabe un estudiante, y un tutor que reacciona a él oscilará sin rumbo.

## Fije la escalera de ayuda y después haga que la interfaz la cobre

Escriba los peldaños antes de escribir un prompt, porque la escalera es una decisión de producto con estados con nombre, y un ajuste de tono no puede expresarla. Una secuencia viable:

1. Intento independiente.
2. Pregunta metacognitiva sobre lo que el estudiante ya intentó.
3. Pista conceptual.
4. Identificar la regla pertinente.
5. Plantear una parte del problema.
6. Paso intermedio resuelto.
7. Solución resuelta.
8. El estudiante explica la solución.
9. El estudiante resuelve un problema comparable sin ayuda.

El apoyo se desvanece a medida que aumenta la competencia, que es el mecanismo en el centro del [[scaffolding|andamiaje]]. Ver una solución resuelta no demuestra dominio, así que cualquier sesión que llegue al peldaño siete le debe el peldaño nueve antes de contar como completa.

La evidencia causal para construir la escalera proviene de un experimento de campo en el que una interfaz GPT sin protecciones aumentó el desempeño en matemáticas con asistencia y redujo el desempeño posterior en el examen sin ayuda. Un tutor que daba pistas eliminó en gran medida esa penalización en el aprendizaje ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). La restricción es arquitectónica. El mismo modelo, con una conducta de ayuda diferente, produjo resultados opuestos en la medida que importa.

Un experimento de campo aleatorizado más amplio, con más de 6.000 estudiantes de secundaria en una plataforma de práctica basada en el dominio, muestra cómo se ve la escalera en los registros. Los estudiantes asignados al apoyo con IA avanzaron más despacio e intentaron menos preguntas, y respondieron con más precisión. El mecanismo más claro fue la corrección en el siguiente intento tras un error: se necesitaron menos intentos para volver a una respuesta correcta. Ese patrón es una ralentización productiva, y es la firma que se supone que deja una escalera de pistas ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

El mismo estudio aporta una advertencia sobre sus propios paneles. Exigir tres respuestas correctas seguidas elevó marcadamente el dominio definido por la plataforma sin producir mejoras detectables en una prueba diferida una semana después. La evidencia más sólida en la prueba diferida apareció solo donde la IA estaba dentro del flujo de trabajo de dominio (coeficiente 0,085), no donde estaba disponible como acceso independiente. Si su métrica de éxito es un contador de rachas, enviará un sistema que optimiza la racha.

La fricción en la interfaz pertenece a la misma pasada de diseño. Las pistas ilimitadas detrás de un botón visible convierten toda la escalera en un atajo, y las solicitudes prematuras de pistas con una lectura superficial se asocian con menores [[learning-gains|ganancias de aprendizaje]]. Sustituir `[Hint][Hint][Hint][Show Answer]` por las preguntas "¿qué ha intentado?" y "¿qué parte le está bloqueando?" (elegir una regla, plantear la ecuación, hacer el álgebra, entender el concepto) cuesta una pantalla y encamina al estudiante al peldaño que realmente necesita. También le da los datos de registro que le dicen qué peldaño se salta por costumbre.

## Entregue las partes comprobables a un verificador

Ancla la generación en material aprobado por el docente: secciones de libros de texto, apuntes del curso, ejemplos resueltos, terminología, métodos aprobados, notación, reglas de las tareas, políticas y recursos [[curriculum-design|curriculares]]. La generación aumentada por recuperación contra ese corpus reduce el [[hallucination-risk|riesgo de alucinación]] y no lo elimina, como expone [[rag]]. Muestra citas o procedencia en la interfaz allí donde un estudiante podría comprobar una afirmación, porque la cita es lo que hace que el anclaje sea auditable a posteriori.

El anclaje también cumple una función que las métricas de precisión pasan por alto. Un curso tiene métodos aprobados, y un tutor que introduce una técnica matemáticamente válida que el curso no usa le ha enseñado al estudiante algo por lo que le bajarán la nota. La recuperación desde la capa del curso es la forma en que el tutor se mantiene dentro del conjunto de métodos.

Para dominios con respuestas formalmente comprobables, añada herramientas deterministas: calculadoras, sistemas de matemática simbólica, ejecución de código, grafos de conocimiento, validadores basados en reglas y solucionadores [[discipline-specific-aied|específicos del dominio]]. La división del trabajo es la parte importante. El LLM se encarga de la explicación y el diálogo. El motor simbólico verifica equivalencia algebraica, derivadas, integrales, soluciones de ecuaciones, puntos críticos y aproximaciones numéricas. Un paso intermedio equivocado que el verificador detecta se convierte en un momento de tutoría. Un paso intermedio equivocado que nada detecta se convierte en una concepción errónea que el estudiante lleva al examen.

## Exija que el estudiante actúe sobre la retroalimentación

La retroalimentación que dice "Correcto", "Incorrecto" o "Buen trabajo" es un evento de calificación disfrazado de enseñanza. La base de conocimiento trata la [[feedback|retroalimentación]] como un bucle de provisión y aprovechamiento: la retroalimentación apoya el aprendizaje cuando los estudiantes la entienden y actúan sobre ella, y la segunda mitad es la que los sistemas suelen saltarse. Construye el tutor para que nombre el paso de razonamiento implicado, diga qué hay que reconsiderar, dé una acción siguiente concreta y pida al estudiante que prediga o explique antes de revelar la retroalimentación.

La secuencia que sostiene esto es estudiante primero, IA después, estudiante otra vez. El estudiante genera, elige, justifica, evalúa o reflexiona; el tutor responde; el estudiante hace algo con esa respuesta. Diseñe la estructura de los turnos para que esto no sea opcional. Un sistema en el que el modelo puede producir tres párrafos en respuesta a una pregunta enseña al estudiante a preguntar y a leer.

El objetivo a largo plazo es la interiorización. Los estudiantes deberían acabar ejecutando por sí mismos el cuestionamiento y las estrategias de [[problem-solving|resolución de problemas]] del tutor, que es el argumento de la [[agency|agencia]] y la razón por la que la escalera tiene un peldaño superior en el que el tutor calla.

## Diseñe para lo que ocurre en el turno cuarenta

La seguridad pedagógica es una batería de pruebas distinta de la seguridad convencional de un chatbot, y la mayoría de los equipos lanza solo con la segunda. La toxicidad y la resistencia a los jailbreaks no le dicen nada sobre si el tutor entregará una respuesta a un estudiante que la pide dos veces, si dará la razón a un método equivocado porque el estudiante sonaba seguro, si se saldrá del conjunto de métodos del curso a lo largo de una sesión larga o si empujará al estudiante hacia la [[cognitive-offloading|dependencia excesiva]]. La [[ai-sycophancy|adulación]] es la que pasa primero, porque dar la razón se lee como amabilidad y sus datos de preferencia la recompensan.

Pruebe la filtración de respuestas, el refuerzo de concepciones erróneas, el acuerdo excesivo, la dificultad inadecuada, la descarga cognitiva, el trato sesgado, la pérdida de agencia del estudiante, la deriva instruccional y el exceso de confianza en explicaciones incorrectas. Ejecute las pruebas sobre conversaciones extensas, no sobre turnos sueltos, porque los fallos pedagógicos se acumulan: los primeros diez turnos pueden ser ejemplares y el undécimo puede deshacer la sesión. Un tutor debe ser amable y correcto a la vez, incluso cuando el estudiante insiste en una concepción errónea. [[pedagogical-safety|Seguridad pedagógica]] y [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] despliegan la taxonomía de fallos.

## Ponga la arquitectura de datos en el mismo documento de diseño

Recoja solo datos del estudiante que sean pedagógicamente necesarios, y sea capaz de decir por qué existe cada campo. Cuando guarde memoria persistente o un [[student-modeling|modelo del estudiante]], haga visible su propósito para el estudiante, dele un control apropiado sobre él, proteja la información sensible, defina la retención y derive las decisiones con consecuencias a un docente u otro punto de control [[human-in-the-loop-ai|humano]]. Un modelo del estudiante que acumula en silencio una estimación de confianza que el estudiante nunca ve es un problema de protección de datos y también un problema pedagógico.

Audite el comportamiento entre orígenes lingüísticos, niveles de habilidad, contextos culturales, necesidades de [[accessibility|accesibilidad]] y niveles de [[prior-knowledge|conocimiento previo]] y de experiencia con la IA. Un desempeño diferencial ante el mismo objetivo es un error con un estudiante adosado, y no aparecerá en su número agregado de precisión.

Una decisión de accesibilidad merece su propia línea: no convierta el [[prompt-engineering|diseño de prompts]] sofisticado en un requisito para recibir buena instrucción. Si el tutor solo enseña bien cuando el estudiante escribe un prompt cuidadoso, ha construido un sistema que favorece a los estudiantes que ya saben cómo hablarles a los modelos. El tutor debería ayudar a los estudiantes a formular preguntas productivas, que es además una habilidad de [[metacognition|metacognición]] que vale la pena tener.

## Instrumente el intervalo de retirada

Las métricas de sesión no le dirán si la cosa funciona. La precisión de las respuestas, la duración de la conversación, la preferencia del estudiante, la satisfacción, la finalización de tareas y el [[student-engagement|compromiso]] suben todos en sistemas que no enseñan nada, porque a los estudiantes les gusta la ayuda y la ayuda es fácil de medir. Evalúe el desempeño sin ayuda, la retención diferida, la transferencia a problemas nuevos, la corrección de concepciones erróneas, la independencia del estudiante, el aprovechamiento de la retroalimentación y los [[differential-effects-across-learner-groups|efectos diferenciales entre grupos de estudiantes]]. [[ai-ed-evaluation|La evaluación de la IA en educación]] tiene los métodos, y [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] sostiene que el comportamiento es el constructo.

Dos estudios afinan la regla contra las [[self-report-measures|medidas autoinformadas]] y los horizontes cortos. Un pilotaje con 38 estudiantes novatos de programación encontró una asociación fuerte entre el uso de [[generative-ai|IA generativa]] y el aprendizaje *percibido* (rs=0,802, p<0,001), mientras que los indicadores de progreso autónomo sin apoyo del docente obtuvieron las puntuaciones más bajas. Los autores llaman a esa brecha ilusión de competencia y deuda epistémica, y es precisamente la brecha que una métrica de satisfacción recompensa ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

De manera más fundamental, la mayoría de las evaluaciones se detienen en el momento en que termina la asistencia. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] nombra el intervalo posterior a la retirada que nadie mide y formaliza cuatro resultados: rebote elástico, meseta parcial, andamio latente y sobrerrecuperación. Su curva de desgaste lleva una constante de tiempo de recuperación, un término de completitud de la recuperación y un índice de histéresis que compara el esfuerzo de reaprendizaje con el esfuerzo original. Dado que la reversibilidad determina la gravedad, el marco sostiene que la práctica programada sin ayuda debería dosificarse según la curva de recuperación en lugar de debatirse como cuestión de principio. Su plan de evaluación necesita una fase de retirada además de un postest inmediato, y [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|la evidencia aleatorizada de que la asistencia breve deprime el desempeño posterior sin ayuda]] es la razón para programarla pronto.

## Dé a los docentes algo que editar

Antes del despliegue, haga que docentes prueben perfiles realistas de estudiantes, concepciones erróneas comunes, casos límite, prompts adversariales, respuestas ambiguas y conversaciones de tutoría largas. Registre los fallos pedagógicos y devuélvelos a los prompts del sistema, las políticas de tutoría, las fuentes de conocimiento, las [[guardrails|protecciones]], las reglas del modelo del estudiante y la selección de modelo. Una respuesta fluida puede seguir siendo pedagógicamente incorrecta, y un docente es el único revisor que puede verlo.

[[teacher-intervention-k12-ai-based-instruction-2026|La revisión sistemática de Lee sobre 29 estudios de K-12]] describe en qué consiste esa supervisión y dónde se rompe. La intervención del [[teacher-role|docente]] es un ciclo repetido de cuatro fases: monitoreo, juicio, intervención y orquestación. Las alertas de IA, los [[visualization|paneles]] y las puntuaciones automatizadas "no conducen automáticamente a la acción pedagógica". La estrategia docente más sólida que encuentra la revisión es la traducción pedagógica: seleccionar, revisar, complementar, resumir o eliminar la retroalimentación del chatbot en lugar de dejarla pasar tal cual.

De ahí se siguen dos advertencias de diseño, y ambas contradicen la hoja de ruta habitual. Más información de la IA no es mejor: los sistemas que emiten diagnósticos de forma continua sobrecargaron a los docentes y desviaron su atención de su propia observación. Priorice lo que merece actuación, hágalo interpretable y ofrezca recomendaciones en una forma que un docente pueda aceptar, modificar, aplazar o rechazar. Más apoyo docente tampoco es mejor: retrasar la intervención para que los estudiantes trabajen de forma independiente es en sí mismo pericia. Las condiciones estructurales, es decir, tiempo para revisar datos, tamaño de la clase y capacidad de llegar físicamente a los grupos que necesitan ayuda, forman parte de la intervención y no son logística de fondo. Un panel construido para un docente sin hora libre no se abre.

## Caso uno: un tutor de cálculo, donde la verificación es barata

Un tutor de cálculo de primer semestre de universidad debería elevar lo que los estudiantes pueden resolver y explicar de forma independiente una vez que se lo retira, no maximizar los problemas completados correctamente. La tutoría de matemáticas es especialmente vulnerable al andamiaje excesivo, al uso prematuro de pistas y al diagnóstico incorrecto del razonamiento del estudiante, y los tres son visibles en sus registros si mira ([[math-education|educación matemática]]).

**Anclaje y verificación.** Una construcción de seis capas: materiales del curso y políticas del docente, luego una capa de recuperación, luego un motor de problemas y un modelo del estudiante junto a un verificador simbólico y un motor de diagnóstico, luego una capa de política pedagógica, luego la generación conversacional, luego el estudiante, y de vuelta al modelo del estudiante. El verificador es la razón por la que este diseño es viable. Decide si una expresión es equivalente, si una derivada es correcta, si una integral está evaluada, si se encontró un punto crítico, y lo hace sin preguntar la opinión del modelo.

**Una interacción.** Para derivar $f(x)=(x^2+1)\sin x$, un chatbot convencional revela la respuesta. Un tutor orientado al aprendizaje razona internamente que el estudiante derivó ambos componentes pero multiplicó los resultados, una posible [[misconceptions|concepción errónea]] de la regla del producto como $f'g'$, y hace primero una pregunta de diagnóstico: ¿qué regla se aplica cuando se multiplican dos funciones? Después el estudiante escribe la regla del producto simbólicamente, plantea $u$ y $v$, y solo entonces el tutor verifica la expresión final. Observe cuánta de la tutoría ocurrió antes de que llegara al estudiante cualquier prosa del modelo.

**Múltiples representaciones.** Conecte los procedimientos simbólicos con la fórmula, la gráfica, la tabla, una interpretación verbal y un contexto físico de tasa de cambio. La fluidez procedimental y la comprensión conceptual se ven idénticas en una hoja de respuestas correctas y divergen en el problema de transferencia.

**El panel.** Exponga evidencia agregada en lugar de juicios opacos: "regla del producto, 62% de dominio demostrado; patrones comunes, 18% omite un término, 11% multiplica las derivadas". Los diagnósticos individuales salen como hipótesis con su evidencia de apoyo, que es también lo que los hace revisables por un docente (la [[explainable-ai|explicabilidad]] importa más al docente que al estudiante en este punto).

**El plan de evaluación.** Desempeño con el tutor, desempeño en problemas comparables sin él, retención diferida, transferencia a problemas desconocidos, calidad de la explicación conceptual, corrección de concepciones erróneas, [[help-seeking|búsqueda de ayuda]] adecuada frente a prematura, filtración de respuestas, tasas de falsos positivos y falsos negativos del diagnóstico y resultados diferenciales. La comparación que decide el proyecto es la del desempeño con asistencia frente al posterior sin ayuda. Un estudiante que pasa del 60% al 95% con el tutor y se queda en el 60% solo no ha recibido tutoría.

## Caso dos: un entrenador de escritura, donde la etapa decide el permiso

La escritura no tiene una única respuesta correcta, así que la verificación es juicio y el trabajo de diseño se traslada al escalonamiento por etapas. La base de conocimiento enmarca la escritura como un proceso cognitivo, social y retórico, lo que significa que un sistema de escritura con IA puede apoyar el aprendizaje y también eliminar exactamente el pensamiento que la tarea existía para desarrollar ([[writing-education|educación en escritura]], [[coach-not-crutch-ai-writing|coach, no muleta]]).

**Un modelo de capacidades.** Rastrea argumentación (especificidad de la tesis, alineación entre afirmación y evidencia, contraargumento), organización (foco del párrafo, progresión lógica, transiciones), evidencia (pertinencia de las fuentes, integración, interpretación), revisión (revisión global y a nivel de frase, evaluación de la retroalimentación) y estilo (claridad, gramática, voz). Cada uno se convierte en una señal separada en el modelo del estudiante, que es lo que hace posible la retroalimentación focalizada.

**Ancle el entrenador en la tarea.** Recupere las instrucciones, la rúbrica del docente, las lecturas del curso, los requisitos de citación, las convenciones del género, los ejemplos del docente y la política de uso de IA, de modo que la retroalimentación pueda decir "la rúbrica de su docente le pide conectar cada afirmación principal con evidencia de al menos dos lecturas del curso" en lugar de inventar expectativas genéricas. El consejo genérico es el fallo por defecto de una herramienta de escritura sin anclaje, y los estudiantes lo notan en dos sesiones.

**Fije permisos por etapa.** La participación de la IA en distintas etapas afecta de manera diferente la percepción de autoría. El apoyo en la planificación reduce menos la autoría que el apoyo en el borrador, y el borrador generado por IA produce la mayor disminución ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). Ese hallazgo se convierte directamente en una tabla de permisos. En la planificación, el entrenador hace preguntas, compara posturas, cuestiona supuestos y critica esquemas, y no genera el argumento. En el borrador, el estudiante produce primero la prosa y el entrenador desarrolla en lugar de apropiarse. En la revisión, el entrenador diagnostica y se detiene ahí: afirmaciones poco claras, evidencia faltante, evidencia que no sostiene la afirmación, problemas de organización, el borrador frente a la rúbrica. En la edición, después de la revisión, se ocupa de la gramática, la puntuación, la concisión y el formato de las citas.

**Una interacción resuelta.** Para un ensayo sobre exigir [[online-teaching-and-learning|cursos en línea]], un sistema genérico reescribe el párrafo del estudiante en prosa pulida y hace el trabajo intelectual. Un entrenador dice qué está funcionando, nombra el problema principal (el párrafo da razones pero nunca explica por qué justifican un mandato para toda la universidad), plantea una pregunta de revisión y pide al estudiante que complete una frase con sus propias palabras. El argumento se queda donde corresponde.

**Retroalimentación priorizada.** Una fortaleza que preservar, un problema de alto impacto, una pregunta que exija juicio del autor, un objetivo de revisión concreto. No cuarenta comentarios. Un estudiante que recibe cuarenta comentarios los clasifica por longitud, y esa clasificación no tiene nada que ver con lo que importa.

**Haga que el estudiante juzgue la retroalimentación.** La [[feedback-literacy|alfabetización en retroalimentación]] es un objetivo de aprendizaje por derecho propio. Pregunte periódicamente si el estudiante está de acuerdo con una sugerencia y por qué, y déjele rechazarla. El resultado es [[evaluative-judgment|juicio evaluativo]] en lugar de cumplimiento, y es también la única defensa contra un entrenador que se equivoca con seguridad.

**Preserve la voz.** Distinga errores, problemas de claridad, elecciones retóricas y preferencias de estilo, y deje en paz las dos últimas. Un entrenador que "corrige" elecciones retóricas homogeniza la escritura hacia el estilo que el modelo prefiere, y hace más daño a los escritores [[multilingual-learning|multilingües]] y a las tradiciones retóricas no estándar (la [[ai-feedback-quality|calidad de la retroalimentación de la IA]] es la versión general de este problema).

**Aprenda de las revisiones.** Guarde el historial de revisiones en lugar de solo los ensayos finales. Un patrón repetido de "evidencia introducida pero no interpretada" que mejora a lo largo de tres ensayos es la señal más útil que puede tener un sistema de escritura, y es gratis.

**Evaluación.** Calidad de la escritura con asistencia de IA y posterior sin ella, capacidad de encontrar debilidades en escritura desconocida, calidad de la revisión, aprovechamiento de la retroalimentación, capacidad de explicar las revisiones, autoría, dependencia de la prosa de la IA, preservación de la voz, sesgo entre dialectos y escritores multilingües, alineación con el juicio del docente y transferencia diferida. El diseño que responde a esto tiene tres brazos: escribir de forma independiente, IA generando el texto y un entrenador. Los tres grupos escriben después un ensayo nuevo sin IA. Si el grupo con IA generada gana en la práctica y pierde sin ella, el sistema mejoró el desempeño y no el aprendizaje. Los patrones a nivel de clase del panel (41% necesita apoyo en la conexión entre afirmación y evidencia) son una señal de [[formative-assessment|evaluación formativa]] para el docente.

## Comparación de las dos construcciones

| Pregunta de diseño | Tutor de cálculo | Entrenador de escritura |
|---|---|---|
| Objeto principal de aprendizaje | Conceptos matemáticos y resolución de problemas | Argumentación y proceso de escritura |
| Verificación | A menudo comprobable objetivamente | Normalmente requiere juicio contextual |
| Herramientas deterministas | Motor de matemática simbólica, calculadora | Comprobaciones de gramática, citas y rúbrica |
| Papel principal de la IA | Diagnosticar y andamiar el razonamiento | Diagnosticar y andamiar la revisión |
| Riesgo principal | Regalar la solución | Escribir el texto por el estudiante |
| Acción del estudiante que importa | Resolver y explicar | Redactar, evaluar y revisar |
| Modelo del estudiante | Conceptos, procedimientos, concepciones erróneas | Argumento, evidencia, organización, revisión |
| Protección clave | Intento antes de la solución | Prosa del estudiante antes de la reescritura de la IA |
| Prueba de transferencia | Problemas nuevos de cálculo sin IA | Tarea nueva de escritura sin IA |
| Criterio de éxito | Razonamiento matemático independiente | Escritura independiente y juicio evaluativo |

Ambos sistemas usan el mismo conjunto de [[ai-technologies|tecnologías de IA]] y encarnan políticas pedagógicas distintas, porque las disciplinas exigen tipos de pensamiento distintos. La regla que generaliza es identificar la actividad cognitiva que produce el aprendizaje y diseñar la IA para apoyar esa actividad sin realizarla. Esa regla está por encima de cualquier modelo, prompt, marco de agentes o interfaz concreta.

## En qué se equivocan los equipos de desarrollo

La pedagogía vive en el prompt del sistema, así que un prompt cuidadoso es un diseño pedagógico. Un prompt es una capa de una política que también incluye qué evidencia recoge, qué peldaño ofrece la interfaz, qué verifica el verificador y qué muestra el panel. Un prompt bien escrito sobre un modelo del estudiante que no guarda nada producirá un tutor fluido sin memoria del estudiante, y la escalera se reiniciará en cada sesión.

Un modelo mejor arreglará el diagnóstico. El resultado de benchmarking anterior encontró tutores LLM que reconocían razonamiento correcto y a la vez rechazaban alternativas válidas y aceptaban incorrectas, que es un patrón de error que la escala no repara de forma evidente. El diagnóstico estructurado existe porque el juicio del modelo es la parte que no puede auditar.

La satisfacción y la finalización demuestran que el diseño funciona. Demuestran que los estudiantes recibieron ayuda. El pilotaje con 38 estudiantes de programación encontró aprendizaje percibido fuertemente asociado al uso mientras el progreso autónomo obtenía la puntuación más baja, y el estudio de dominio encontró que un requisito de racha elevaba el dominio de la plataforma sin ganancia en la prueba diferida. Incorpore la medida de retirada al pilotaje o aprenderá la lección equivocada con eficiencia.

La recuperación hace que las respuestas sean fiables. Reduce el [[hallucination-risk|riesgo de alucinación]] y deja intacto el resto de la superficie de fallo: un pasaje recuperado puede malinterpretarse, una técnica válida puede ser incorrecta para el curso, y el modelo puede seguir equivocándose con seguridad sobre un paso que derivó por su cuenta. La recuperación es un piso, no un techo.

Aprobar la batería de seguridad significa que es seguro para los estudiantes. Las pruebas de seguridad ordinarias cubren toxicidad y jailbreaks. Los fallos pedagógicos que importan aquí, la filtración de respuestas, la adulación y la deriva, son invisibles para ellas, y se acumulan a lo largo de una conversación en lugar de aparecer en un solo turno.

El compromiso es el objetivo. La duración de la conversación y el número de sesiones son las métricas más baratas de instrumentar, y por eso se promueven a objetivos. El argumento del [[scaffolding|andamiaje]] dice que la sesión ideal se acorta a medida que el estudiante mejora, así que un aumento del compromiso es igual de probable como síntoma.

## Lo que le van a responder

**"Lanzamos en seis semanas y esto es un trimestre de trabajo."** La mayor parte de la arquitectura es barata. Una puerta de intento, una escalera configurada, recuperación sobre apuntes que ya tiene y un esquema de registro con un campo de retirada son días de trabajo. Los elementos caros (modelo del estudiante, verificador, panel) pueden empezar detrás de una bandera de funcionalidad para un solo curso, y el pilotaje es más informativo con las partes baratas hechas.

**"A los estudiantes les encanta y la finalización subió."** Ambos hechos son compatibles con un sistema que responde bien las preguntas y no enseña nada. El estudio de 6.000 estudiantes encontró progreso más lento y menos preguntas intentadas junto con mejor precisión, así que una caída en la finalización tampoco es automáticamente una mala noticia. Informe el desempeño sin ayuda junto a los números de compromiso y deje que los dos discrepen en público.

**"No podemos hacer un ensayo aleatorizado."** Puede hacer una comparación intraestudiante sin él: el mismo objetivo, con asistencia durante la unidad, evaluado sin ayuda dos semanas después, con la puntuación asistida informada al lado. Ese diseño responde a la pregunta de producto y no necesita grupo de control. Lo que no puede decirle es el contrafactual de los estudiantes que nunca usaron el tutor.

**"El modelo es una API de un proveedor, así que la conducta de ayuda no está en nuestras manos."** Los peldaños viven en su capa de orquestación, y el resultado del experimento de protecciones vino de cambiar lo que el tutor tenía permitido decir, no de cambiar de modelo. Espera que el postentrenamiento del proveedor empuje hacia responder con prontitud, porque para eso se ajustó, y ponga la contención en su propio código.

**"Los docentes no van a usar otro panel."** No usarán uno que emita diagnósticos continuos, que según la revisión de K-12 desviaba su atención de su propia observación. Deles un número pequeño de señales interpretables, una forma de aceptar o rechazar cada recomendación y tiempo en la semana para mirarlas.

**"No tenemos expertos de disciplina en la plantilla."** Entonces el tutor enseñará método genérico y la notación del curso se desviará en un semestre. Un experto de la materia durante dos días en la fase de diseño, escribiendo la lista de concepciones erróneas y la lista de métodos aprobados, es la partida más barata del proyecto y la primera que los equipos recortan.

## Qué hacer esta semana

**1.** Escriba la frase sobre el desempeño sin ayuda para el pilotaje y póngala en la especificación, por encima de la lista de funciones.

**2.** Añada una puerta de intento y regístrela. Registre si el estudiante intentó antes de la primera pista y a qué peldaño llegó.

**3.** Sustituya el botón de pistas por la pregunta sobre el punto de bloqueo, y registre la respuesta como categoría.

**4.** Programe una comprobación sin ayuda dos semanas después de la unidad y póngala en el calendario con un responsable.

**5.** Reserve dos días con un docente de la materia para escribir la lista de concepciones erróneas y la lista de métodos aprobados.

## Adónde ir ahora

[[designing-educational-ai-software]] cubre las reglas a nivel de software que un tutor debe cumplir, y [[designing-ai-into-learning]] cubre dónde se sitúa el tutor en una secuencia de curso. [[evaluating-ai-interventions-methods]] y [[checking-whether-educational-ai-works]] abordan si la cosa funciona. Si su problema es que el modelo responde con demasiada facilidad, [[making-ai-better-at-supporting-learning]] y [[training-ai-tutors-to-guide-rather-than-answer]] trabajan el lado de entrenamiento de la misma pregunta.
