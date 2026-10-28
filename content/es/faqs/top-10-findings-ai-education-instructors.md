---
title: "¿Cuáles son los 10 hallazgos principales de la investigación sobre IA en educación que el profesorado debería conocer?"
created: "2026-09-22T18:29:07-04:00"
updated: "2026-10-28T13:12:16-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
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

Es la semana antes del inicio del semestre, o la semana después de la primera entrega importante, y alguien le ha preguntado algo que usted no puede responder desde la experiencia: qué pueden hacer los estudiantes con la IA en esta tarea, y qué demuestra entonces la nota. Quizá un ensayo para casa volvió pulido de una manera que no coincide con el trabajo anterior del estudiante. Quizá su departamento está redactando una política de IA y quiere que su curso se ajuste para el viernes. Quizá un estudiante apela una calificación y usted no puede mostrar qué demuestra el trabajo.

La conclusión de la investigación que ha reunido esta base de conocimiento: cómo integra usted la [[generative-ai|IA generativa]] en la actividad decide si fortalece el pensamiento o lo reemplaza. La palanca que usted controla es el diseño de la tarea. La prueba de cualquier diseño es qué pueden seguir haciendo los estudiantes cuando la herramienta desaparece. Los diez hallazgos a los que esta página debe su nombre están abajo, ordenados por la decisión a la que informa cada uno.

## La versión breve

**1.** Nombre el pensamiento que la tarea existe para producir y después dele a la IA un trabajo que no realice ese pensamiento.

**2.** Fije la norma sobre la IA por tarea y no por curso, y escriba la razón junto a ella, donde los estudiantes la lean.

**3.** Ponga al menos un paso calificado en cada unidad que el estudiante complete sin ninguna IA presente.

**4.** Juzgue la actividad por lo que los estudiantes pueden hacer semanas después, sin ayuda, y no por la calidad de lo que entregan.

**5.** Pregunte cómo usaron los estudiantes la herramienta y califique la verificación, no los inicios de sesión.

**6.** Mire a qué estudiantes ayuda el diseño, porque un promedio esconde a los que deja fuera.

## Decida para qué sirve la tarea

Escriba una frase que nombre la capacidad antes de tocar la herramienta: ¿qué debería poder hacer un estudiante al final de esta unidad que no podía hacer al principio? La respuesta podría ser: construir un argumento a partir de evidencia, escribir una demostración, llegar a un diagnóstico, tomar una decisión de diseño bajo restricciones. Si no puede nombrarla, la norma sobre la IA será arbitraria y los estudiantes lo notarán.

Dos líneas de trabajo explican por qué esto va primero. El [[productive-failure|fracaso productivo]] es el hallazgo de que los estudiantes suelen retener más cuando intentan un problema antes de que se les muestre cómo, de modo que la fricción es a veces el mecanismo y no un obstáculo que haya que eliminar. El [[icap-framework|marco ICAP]] predice aprendizajes distintos según el uso pasivo, activo, constructivo o interactivo del mismo material. Ambos apuntan a una misma pregunta de diseño: ¿qué está haciendo el estudiante mientras la herramienta está abierta?

La ilustración más clara del corpus viene de una comparación entre un chatbot informado por la teoría que andamiaba las explicaciones de los estudiantes, ChatGPT corriente y la enseñanza habitual. Las diferencias inmediatas no fueron significativas. Cuatro semanas después, el grupo andamiado retenía más conocimiento conceptual. Es un solo estudio y no un efecto universal, y su contenido útil es la forma del resultado: el diseño puede pesar más que la capacidad del modelo, porque lo que separó las condiciones fue lo que la actividad pedía hacer a los estudiantes.

La [[kumar-genai-computing-education-systematic-review-2026|revisión sistemática de 72 estudios revisados por pares sobre educación en informática]] llega a la misma capa desde la otra dirección. Llama al compromiso crítico con la salida de la IA "el mecanismo común que vincula toda intervención eficaz del corpus" y recomienda un [[scaffolding|acceso gradual]], introduciendo la IA generativa solo después de que se haya demostrado una competencia fundacional. Ninguna de las dos afirmaciones trata de qué producto contrata.

## Dele a la IA un trabajo que no sea el pensamiento que califica

Décadas de [[intelligent-tutoring|investigación sobre tutoría inteligente]] describen el patrón que funciona: diagnosticar qué entiende el estudiante, hacer preguntas, dar pistas graduadas, pedirle que explique, dar retroalimentación. Todo excepto entregar la solución. El trabajo actual sobre [[pedagogical-agent|agentes pedagógicos]] traza la misma línea entre conducta docente y producción de respuestas, y la [[thermomix-genai-education-analogy-2026|analogía del Thermomix]] lo hace concreto. Un electrodoméstico puede cocinar por usted, y entonces usted pierde la habilidad, o puede actuar como compañero de pruebas para ideas que todavía tiene que comprender. Esos modos se corresponden con ICAP: pasivo, activo, constructivo, interactivo.

Las herramientas estrechas muestran el mismo principio. Un [[structrag-diagram-reasoning-ai-tutoring|tutor que lee diagramas de ingeniería de forma estructural]] alcanzó un F1 a nivel de arista del 93,0% frente a una exactitud del 89,3% en el diagrama completo, lo que significa que puede nombrar las conexiones faltantes o mal leídas incluso cuando todo el diagrama está mal. Eso es retroalimentación sobre la que un estudiante puede actuar, en lugar de un aprobado o un suspenso.

La pregunta más difícil es qué puede recomendar el tutor. Cuando un [[tuo-armada-multi-agent-debate-overreliance-2026|debate multiagente]] sustituyó el "aquí está la respuesta de la IA" por una discusión cuya posición preferida se ocultaba, el cambio perjudicial hacia una posición incorrecta de la IA cayó del 42-60,5% al 5,7-8,2%. La adopción de una posición correcta de la IA también cayó, del 61,1-72,3% al 22,1-33,3%. Retener una recomendación protege el juicio inicial del estudiante y deja la corrección a la deliberación, así que el diseño cambia corrección de errores por menos giros equivocados con confianza. Decida cuál de las dos cosas quiere de ese intercambio antes de escribir la indicación.

En clase esto es barato de implementar. Una secuencia [[socratic-method|socrática]] es el patrón al que apuntar, con la herramienta preguntando en lugar de respondiendo. Diga a los estudiantes que pidan "una pista", "hazme preguntas" o "critica mi razonamiento", y haga de "resuélvelo" el caso inusual. Usted está cambiando el verbo por defecto de la interacción, que es la parte que los estudiantes controlan de verdad.

Un límite que conviene decir con claridad. La mayor parte de esta evidencia viene de tareas cortas en un puñado de cursos, y nada de ella promete que un tutor que da pistas eleve las notas de examen en su grupo. Para esa pregunta necesita el ensayo aleatorizado que se discute más abajo, y su resultado es aleccionador.

## Fije la norma en la tarea y explique por qué

Un marco útil separa tres casos. Restrinja la IA cuando lo que mide es la competencia independiente. Andamíela cuando la ayuda acotada no compromete esa competencia. Exíjala cuando la colaboración competente entre humano e IA es en sí misma lo que los estudiantes deben aprender. La mayoría de los cursos contiene los tres, en semanas distintas, y por eso una única norma a nivel de curso falla siempre en los bordes.

El [[zou-is-this-a-trap-student-teachers-genai-2026|estudio de métodos mixtos con 85 docentes en formación]] muestra qué produce una norma sin razón. El 62,4% de la muestra se negó a usar IA generativa incluso donde estaba permitida, y el 41,5% de quienes se negaron citó el miedo a ser acusados de [[academic-integrity|plagio]]. 9 de 11 entrevistados leyeron la política permisiva misma como una trampa. En el mismo estudio solo el 37,6% llegó a usar IA generativa permitida, sus decisiones siguieron la cultura del programa y el [[assessment|diseño de la evaluación]] más que el permiso de un curso concreto, y sus propias declaraciones de divulgación subregistraron el uso real en todos los cursos.

Lea esas cifras como un encargo de diseño. Un permiso sin propósito declarado parece una encerrona, y una prohibición sin propósito declarado parece un obstáculo que hay que rodear. A lo que los estudiantes responden es al razonamiento unido a esta tarea. Ponga la norma en la hoja de la tarea, en una línea, y haga la línea lo bastante específica para que un estudiante pueda saber si la ayuda que está a punto de aceptar socava lo que usted califica.

## Califique algo que el estudiante hizo sin la herramienta

Este es el paso que hace el trabajo, y la evidencia aquí es la menos ambigua de la página.

La revisión de 72 estudios encontró que la IA generativa elevó de forma fiable la finalización a corto plazo y recortó el tiempo en la tarea en 36 estudios, lo que los autores tratan como el resultado mejor replicado del corpus, y que esas ganancias de eficiencia "no se transfieren al rendimiento independiente" en 21 estudios. Un [[yan-cognitive-outsourcing-genai-assessments-2026|estudio de pensamiento en voz alta con 38 estudiantes de grado]] muestra cómo ocurre eso en el caso corriente. La [[cognitive-offloading|descarga cognitiva]] daña más el aprendizaje cuando la IA realiza el razonamiento que el estudiante debía practicar. Allí, el 76,32% se quedó en un patrón de un solo turno de preguntar, responder y parar, y solo el 21,06% alternó el uso de la IA con lectura y escritura independientes. El grupo más grande, 31 de 38, describió metas de dominio, trabajó en turnos únicos fragmentados y luego informó de dependencia excesiva, complacencia mental y olvido rápido; uno de ellos lo expresó así: "la velocidad a la que se te olvida también es muy rápida". Un [[critical-thinking-paradox-genai-learning-2026|artículo de marco de 2026]] le da nombre al patrón. Las notas y los productos suben mientras el trabajo mental que produce aprendizaje duradero baja.

El ensayo aleatorizado zanja la discusión para al menos un contexto. Un [[bassner-performance-learning-dissociation-ai-programming-2026|ECA de tres brazos con 275 estudiantes de CS1]] comparó un tutor que daba pistas y retenía las soluciones completas, ChatGPT sin restricciones y recursos web tradicionales. Las puntuaciones de los ejercicios se separaron con nitidez: 71,84% para ChatGPT frente a 29,85% para el control sin IA, con el tutor de pistas en 57,50%. Las ganancias de conocimiento conceptual no difirieron en absoluto entre los tres brazos, con 0,83, 0,71 y 0,85 puntos (tiempo × grupo p = 0,773). Ambas condiciones con IA redujeron la frustración y la carga extrínseca, y solo el tutor de pistas elevó la motivación intrínseca. La herramienta que los estudiantes valoraron como más útil y más fácil fue también la que más redujo el procesamiento que produce aprendizaje.

Fíjese en lo que ese diseño no puede sostener. Es un curso, un semestre, un idioma, y las puntuaciones de los ejercicios son rendimiento asistido por construcción, que es precisamente la medida contra la que advierte el estudio. No muestra que los tutores sean inútiles. Muestra que el resultado que usted elige medir decide la respuesta que obtiene, y que la preferencia de los estudiantes no es una medida de aprendizaje.

Así que califique la versión sin ayuda. Una tarea por unidad en la que los estudiantes recuperen, expliquen, resuelvan o defiendan ideas sin ninguna IA presente, y póngale puntos reales. El argumento de validez que sostiene esto está en la [[assessment-validity|validez de la evaluación]]: un artefacto pulido para casa ya no muestra que quien lo entregó tenga la competencia que el artefacto exhibe. [[redesign-assessment-ai-era]] desarrolla la arquitectura completa, incluido el paso autenticado y barato para cursos grandes.

## Cambie la tarea que ya tiene, no todo el curso

La mayoría de los docentes que hacen esta pregunta no están construyendo un curso nuevo. Tienen un trabajo de fin de curso, un informe de laboratorio o una hoja de problemas que ha funcionado durante años, y quieren saber dónde poner la costura. Desmonte la tarea paso a paso, pregunte por cada paso qué está evaluando ahí y deje que la respuesta fije el límite. Ese es el método a nivel de tarea documentado en [[mccorkle-aligned-genai-course-policy-2025|el trabajo de McCorkle sobre políticas de curso alineadas]], y una pasada por su tarea más discutida suele bastar para ver su forma.

Un trabajo de fin de curso de diez páginas suele separarse así. La elección del tema y la recuperación de fuentes es donde vive el juicio, así que una herramienta que propone una tesis o arma la lista de lecturas ha realizado la parte que usted califica. La síntesis y la argumentación son el constructo mismo. El formato de las citas, la comprobación de referencias y la edición del lenguaje son pasos en los que el uso de la herramienta es invisible para su constructo, y prohibirlo ahí no le compra nada excepto resentimiento. Dígalo en la hoja de la tarea, paso a paso, en una tabla breve si quiere.

Después haga visible el paso intermedio. Pida una justificación anotada de una página, entregada con el trabajo, que nombre dos fuentes que el estudiante rechazó y por qué, una afirmación que revisó tras comprobar y un punto donde decidió no seguir una sugerencia. Califíquela con la misma especificidad que aplica a la prosa. Una justificación solo pesa si un estudiante que se la salta pierde más de lo que gana al saltársela, así que dele puntos suficientes para que la aritmética sea obvia.

Una hoja de problemas es más fácil y la costura queda en otro sitio. Las respuestas no son el constructo; la selección del método y el diagnóstico de errores sí lo son. Exija el primer paso de cada problema, en palabras del propio estudiante, antes de abrir ninguna herramienta, y resuelva un problema de la hoja en clase sin nada disponible. Es un cambio más pequeño de lo que suena, y convierte la hoja de un producto que usted no puede verificar en un registro de cómo pensó el estudiante.

Para un informe de laboratorio, la costura suele ser la interpretación de los datos y el análisis de errores. Deje que la herramienta formatee la tabla y compruebe las unidades. Mantenga en manos del estudiante la interpretación, la elección de qué cuenta como anómalo y la explicación del desacuerdo con el resultado esperado, y califique esas partes con puntos asignados.

El patrón se generaliza: localice el paso donde vive la capacidad, proteja ese paso, libere el resto y ponga la evidencia del proceso donde están los puntos. Lo que usted evita es el rediseño que cambia cómo se produce el trabajo sin cambiar qué puede sostener la nota.

## Juzgue las herramientas de retroalimentación y calificación por el rendimiento posterior

La [[ai-feedback-quality|retroalimentación de IA]] puede ser puntual, específica, escalable y aceptable para los estudiantes, incluso en la [[higher-ed|educación superior]]. Que enseñe depende de la exactitud, del ajuste [[pedagogy|pedagógico]] y de la [[feedback-literacy|alfabetización en retroalimentación]] de los estudiantes, es decir, de su capacidad para juzgar la retroalimentación y actuar sobre ella. Si está sopesándola para retroalimentar o calificar, las cifras de abajo son las que hay que llevar a la conversación de compra.

Un [[mcinnes-salvaging-constructive-alignment-genai-2026|análisis crítico de 14 documentos de orientación institucional]] encontró que las indicaciones genéricas producen resultados, actividades y evaluaciones aislados. La herramienta no puede saber cuán interconectado está un tema, así que su retroalimentación se queda en general en lugar de ser diagnósticamente precisa.

La configuración sí mueve la calidad, de forma medible. En un [[teacher-ai-literacy-prompt-feedback-quality-2026|estudio sobre retroalimentación de IA para metas de aprendizaje]], el modelo por sí solo explicó el 26,9% de la variación en la calidad de la retroalimentación y añadir la indicación la elevó al 42,8%, un 15,9% adicional. El único rasgo de la indicación que importó fue la terminología específica de la materia; cambiarla por paráfrasis cotidianas empeoró significativamente la retroalimentación. La elección del modelo también importó: Claude 3 y Gemini Advanced produjeron retroalimentación valorada significativamente más baja que ChatGPT-4.

La calificación es aún más frágil. Una [[llm-automated-grading-programming-comparison-2026|comparación de 18 modelos de lenguaje calificando 6.081 entregas de programación]] encontró notas medias de 0,290 a 0,608 según el modelo, con tasas de concordancia exacta tan bajas como 0,20 en algunos y 0,74 en el mejor caso. Dos estudiantes con trabajo idéntico pueden recibir notas distintas según el modelo que haya contratado el departamento.

Después está la pregunta que importa a los estudiantes: si la retroalimentación cambia lo que pueden hacer más adelante. Un [[llm-feedback-handwritten-mathematics-exam-performance-2026|despliegue de un semestre en un curso universitario de matemáticas]] con 343 estudiantes de inglés y 236 de neerlandés generó comentarios individualizados y ejercicios de práctica a partir de hojas de respuesta fotografiadas. Los evaluadores valoraron como más fuertes los ejercicios de práctica y como más débiles la especificidad diagnóstica y la claridad. El cruce aleatorizado sobre preguntas de examen vinculadas no encontró diferencias estadísticamente significativas tras el ajuste (pHolm = 0,104), y la asistencia siguió las notas de examen con mucha más claridad que la exposición a la retroalimentación (ρ = 0,49 y 0,54, ambos p < 0,001). Una retroalimentación que los estudiantes valoran y sobre la que actúan no es lo mismo que una retroalimentación que produce aprendizaje medible.

Hay una trampa más si deja que un modelo califique. En un [[llm-grading-self-preference-bias-2026|estudio de 1.426 tesis de psicología que abarcan diez años académicos]], los cuatro calificadores de IA puntuaron más bajo el trabajo escrito por estudiantes y más alto el escrito por IA. 10 de 16 comparaciones fueron lo bastante grandes como para que diferencias de ese tamaño sean raras en la investigación educativa, hasta la mayor brecha observada, y el sesgo fue más fuerte con el texto totalmente generado por IA. Un calificador puede recompensar un texto por parecer de máquina incluso cuando sus instrucciones dicen juzgar el contenido.

## Separe a los estudiantes a los que el diseño ayuda de los que deja fuera

Una mejora promedio puede esconder un curso donde los fuertes se hacen más fuertes y los débiles quedan peor. La [[digital-divide|brecha digital]] corre ahora por al menos tres líneas: el acceso a las herramientas, la habilidad para usarlas y quién obtiene de verdad un resultado útil. La habilidad para formular indicaciones produce por sí sola un "privilegio de indicación" en el que los usuarios más experimentados obtienen mejor salida del mismo sistema.

La revisión de 72 estudios separa dos mecanismos. Una brecha de habilidad aparece donde los estudiantes con más [[prior-knowledge|conocimiento previo]] convierten la ayuda en ganancias duraderas mientras los estudiantes con menos preparación la sustituyen por la práctica. Una brecha de recursos aparece donde la internet fiable y el acceso de pago sostienen un mejor uso de las herramientas entre instituciones. Solo seis estudios del corpus examinaron directamente la equidad, lo que los autores tratan como el problema y no como una nota al pie; la [[equity-in-ai-education|equidad en la educación con IA]] es donde se desarrolla ese argumento.

La ayuda puede cerrar una brecha cuando los estudiantes que la necesitan son los que se implican. Un [[co-learning-ai-agent-hidden-rules-2026|estudio de cuatro experimentos sobre estudiantes que descubren reglas ocultas con la ayuda de un agente de IA]] encontró que la ayuda redujo los movimientos necesarios entre un 33 y un 52%, y que el beneficio se concentró en los de peor rendimiento mientras los estudiantes más fuertes quedaron en gran medida sin afectar. Esa es la versión esperanzadora, y depende de que los estudiantes que más necesitan la ayuda sean los que la usan bien, cosa que, según sugiere la brecha de habilidad, no lograrán sin enseñanza.

## Deje las decisiones consecuentes en manos de una persona

La alfabetización en IA del profesorado no está donde la conversación sobre políticas supone. Entre [[science-educators-ai-literacy-postqualification-2026|docentes de ciencias que ya habían completado formación en IA]], la alfabetización media en IA fue de 16,7 sobre 30, por debajo del 18,79 de la muestra de referencia, y no guardaba relación con la edad, el género, los años de servicio ni cuánto habían usado la IA. Una [[ai-tpack-mathematics-teacher-education-2026|encuesta a 412 futuros docentes de matemáticas]] encontró una preparación en fase temprana, con las creencias pedagógicas más altas en una media de 5,24 en una escala de 7 puntos y el conocimiento técnico de la IA más bajo en 4,23.

Eso es un argumento a favor de herramientas acotadas, no autónomas. El análisis de documentos de orientación propone un agente [[rag|aumentado por recuperación]] configurado institucionalmente que guía el pensamiento sin dar respuestas, señala desalineaciones y escala a una persona en los bordes, con una autoridad descrita como "derivada y acotada". Hay evidencia directa de mantener a las personas en el bucle y no delante de él: un [[instructional-agents-multi-agent-course-gen|sistema de generación de material de curso]] puntuó mejor cuando las personas siguieron implicadas, y el modo con más aportación humana mejoró las puntuaciones de los evaluadores entre 0,5 y 0,9 puntos respecto al modo totalmente autónomo. Sus evaluadores autónomos se agruparon estrechamente en torno a 2,9-3,1 mientras los evaluadores humanos se dispersaron y discriminaron más, así que los autores mantuvieron el juicio humano como señal de calidad primaria.

La versión práctica para un curso: deje que la IA redacte, ordene y señale. Mantenga la exactitud, la justicia, la privacidad y cualquier decisión sobre la progresión de un estudiante bajo una [[human-in-the-loop-ai|supervisión humana significativa]]. Los riesgos que hacen esto necesario son el conjunto conocido: sesgo, privacidad, transparencia, [[agency|autonomía]] del estudiante, responsabilidad y [[pedagogical-safety|seguridad pedagógica]]. Esa lista es la razón por la que la [[teacher-ai-competency|competencia pedagógica en IA]] importa más que la familiaridad técnica.

## En qué se equivocan los docentes con esto

**"El trabajo pulido que tengo delante es prueba de que el estudiante puede hacerlo."** Es prueba de que el trabajo está pulido. La diferencia de 71,84% frente a 29,85% en las puntuaciones de los ejercicios, con ganancias conceptuales planas en el mismo ensayo, y los 36 estudios de la revisión que encontraron eficiencia sin transferencia, describen todos la distancia entre rendimiento asistido y capacidad. Si el artefacto es lo único que califica, el artefacto es todo lo que ha medido.

**"Si la IA es un tutor, está del lado correcto de la línea."** La etiqueta no trae la garantía. En el ensayo de CS1 el tutor que daba pistas evitó el daño que ChatGPT sin restricciones hizo en los ejercicios, y aun así no produjo ninguna ventaja conceptual frente a no tener IA. Retener la respuesta final no es lo mismo que retener el razonamiento, y un tutor puede hacer lo segundo mientras parece hacer solo lo primero.

**"Un detector, o una norma más estricta, resuelve el problema de la integridad."** La detección aborda una respuesta entre varias. El estudio con docentes en formación encontró que el miedo a la acusación suprimió el uso permitido, que la cultura del programa predijo la conducta mejor que cualquier política de curso y que las autodeclaraciones subregistraron el uso en todos los cursos. Una norma más estricta cambia lo que los estudiantes ocultan, no lo que aprenden.

**"Una norma de IA para todo el curso es más justa y más simple."** Más simple, sí. La evidencia favorece normas fijadas por tarea, porque los tres casos, restringir, andamiar y exigir, coexisten en la mayoría de los cursos y el mismo permiso significa cosas distintas en un informe de laboratorio y en una reflexión. Las posturas generales son además las que los estudiantes rodean con más facilidad.

**"Los estudiantes que dicen que la herramienta ayuda están aprendiendo con ella."** La satisfacción es una [[self-report-measures|medida de autoinforme]], y en el ensayo de CS1 la condición mejor valorada fue la que más redujo el procesamiento que hay detrás del aprendizaje. El despliegue de matemáticas encontró la misma escisión: una retroalimentación que los estudiantes valoraban, ninguna diferencia significativa en el examen.

**"La alfabetización en IA es habilidad para las indicaciones, y los estudiantes la adquieren usando la herramienta."** Los marcos tratan la [[ai-literacy|alfabetización en IA]] como comprensión conceptual, habilidad operativa, [[critical-thinking|evaluación crítica]], juicio [[ethics|ético]] y conciencia de los límites. La revisión es explícita en que la [[prompt-engineering|ingeniería de indicaciones]], la verificación de la salida y el análisis de errores de la IA son habilidades enseñables que no se desarrollan por exposición. Los docentes de ciencias formados que puntúan 16,7 sobre 30 son la versión empírica de esa afirmación.

**"El problema de equidad es el acceso."** El acceso es una de tres líneas. La habilidad y quién obtiene un resultado útil son las otras dos, y solo seis estudios del corpus examinaron algo de esto directamente. Dar una licencia a cada estudiante resuelve el tercio más fácil.

## Lo que le van a responder

**"Mis estudiantes dicen que la IA les ayuda."** Normalmente sí ayuda con el trabajo que tienen delante, y el hallazgo trata de lo que queda después. Pregunte qué pueden seguir haciendo sin ayuda y obtendrá otra respuesta, que es la razón por la que existe el paso calificado sin ayuda.

**"Enseño a 200 estudiantes. No puedo leer borradores ni hacer comprobaciones orales."** No tiene que leerlo todo. Una aplicación en clase o una explicación grabada breve en la tarea de mayor riesgo, más una comprobación por muestreo del trabajo que parece incoherente con entregas anteriores, cubre la mayor parte del riesgo. Las entregas por etapas, las justificaciones anotadas y los [[eportfolio|portafolios]] de proceso escalan; también escala calificar la verificación de una salida de IA deliberadamente defectuosa.

**"La detección es todo lo que tenemos."** Los detectores tienen problemas documentados de fiabilidad y justicia, y la validez es el problema más difícil: un producto pulido para casa ya no muestra que quien lo entregó tenga la competencia. La evidencia de proceso es más barata que una carrera armamentística y produce algo que usted puede defender en una apelación.

**"Prohibirlo es más simple."** Más simple, y normalmente falla. La adopción en el estudio con docentes en formación siguió la cultura del programa y no la política de un curso concreto, y la divulgación subregistró el uso real en todos los cursos. Una prohibición también le quita la posibilidad de ver cómo usarían los estudiantes la herramienta cuando salgan.

**"Yo no enseño IA. Esta no es mi materia."** Los hallazgos son sobre su materia. Cuando la IA realiza la práctica que su curso existe para ofrecer, es exactamente cuando interfiere, y la interferencia aparece en sus evaluaciones se mencione o no la herramienta.

**"La evidencia es demasiado nueva para actuar sobre ella."** En parte es cierto, y corta en ambos sentidos. Buena parte del corpus son intervenciones cortas, estudios de [[self-report-measures|autoinforme]], disciplinas únicas o trabajo de 2025 y 2026, y las afirmaciones de la madura investigación sobre [[intelligent-tutoring|tutoría inteligente]] son más sólidas que las afirmaciones sobre [[conversational-ai|chatbots]] de propósito general sin restricciones. Donde una afirmación tiene ahora un ensayo aleatorizado detrás, la disociación entre rendimiento y aprendizaje en el ensayo de CS1 y el resultado de retroalimentación en el despliegue de matemáticas, ese ensayo se cita aquí. Donde no lo tiene, trate el hallazgo como la mejor orientación disponible y no como ley firme, y sea más escéptico con los resultados que solo muestran satisfacción, velocidad de la tarea, calidad de la salida o rendimiento asistido inmediato.

## Qué hacer esta semana

**1.** Elija la tarea que menos cómodo le resulta defender. Escriba la frase de la capacidad en la parte superior de la hoja de la tarea.

**2.** Añada un paso que se desarrolle sin ninguna IA presente: una aplicación de cinco minutos en clase, una explicación grabada breve o un párrafo escrito en el aula. Deles puntos reales.

**3.** Declare la condición de uso de IA para esa tarea y añada una línea con la razón. Si la tarea mezcla pasos, diga qué pasos son cuáles.

**4.** Reescriba una indicación que dé a los estudiantes, de "resuelve esto" a "dame una pista y hazme una pregunta", y dígales por qué.

**5.** Antes de que empiece el semestre, lleve el cambio a su coordinador de programa y a quien aprueba las adaptaciones, para que la primera apelación no sea también la primera conversación.

## A dónde ir después

Para la versión de estos malentendidos actor por actor, véase [[addressing-common-misconceptions-ai-education]]. Para los requisitos de diseño que implican los hallazgos sobre equidad y juicio humano, véase [[equity-ethics-pedagogical-safety-research]]. [[redesign-assessment-ai-era]] lleva más lejos la mitad de evaluación, y [[does-ai-help-students-learn]] es la revisión de evidencia que sostiene las afirmaciones de esta página. Si está eligiendo entre rediseño y aplicación coercitiva, [[reduce-ai-cheating]] y [[course-ai-policy]] son las páginas compañeras.
