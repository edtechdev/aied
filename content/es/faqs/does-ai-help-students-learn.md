---
title: "¿Usar IA ayuda de verdad a que mi estudiantado aprenda?"
created: "2026-09-22T18:32:58-04:00"
updated: "2026-10-28T13:25:03-04:00"
connected_faqs: [evaluating-ai-interventions-methods, how-ai-impacts-students, top-10-findings-ai-education-instructors]
weight: 90
audience: [instructors]
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
source_updated: "2026-10-28T11:06:17-04:00"
translation_of: faqs/does-ai-help-students-learn
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

Un estudiante le dice que el tutor de IA es la razón por la que por fin entendió el material, y usted no tiene forma de comprobarlo. O un piloto llega a su escritorio con una encuesta de satisfacción y una captura de pantalla de notas de tareas en alza, y alguien quiere una decisión sobre la licencia antes de que termine el mes. O usted está frente a una clase preguntándose si la herramienta que acaba de decirles que abran les está ayudando a practicar o les está ayudando a evitar la práctica.

La respuesta breve: sí, la IA puede ayudar a los estudiantes a aprender, y ninguna de las cosas que usted es más probable que vea establece que lo hizo: mejores tareas, entregas más rápidas, estudiantes contentos o un producto llamado tutor. Lo que separa los casos en los que el aprendizaje mejora de los casos en los que no es el diseño de la actividad y el resultado que usted eligió medir.

## La versión breve

**1.** Nombre primero la capacidad y después decida qué evidencia mostraría que cambió.

**2.** Mida la misma capacidad más tarde, con la herramienta retirada, porque esa es la única medida que responde a su pregunta.

**3.** Coloque el intento propio del estudiante antes de la ayuda y exija una respuesta a la ayuda después.

**4.** Califique la verificación: qué comprobaron, qué rechazaron, qué cambiaron.

**5.** Mire los resultados por conocimiento previo, porque el promedio esconde a los estudiantes a los que el diseño está fallando.

## Decida qué entiende por aprendizaje antes de mirar cualquier evidencia

"¿Ayuda la IA a que los estudiantes aprendan?" no es una sola pregunta. Agrupa al menos tres: si la herramienta eleva el desempeño mientras está abierta, si construye una capacidad que persiste cuando se cierra y si cambia quién termina con esa capacidad. Un informe de proveedor, una encuesta de piloto y un ensayo aleatorizado pueden ser todos honestos y aun así responder a preguntas distintas.

Escriba la capacidad antes de la actividad. "Producir un informe pulido" es un resultado distinto de "seleccionar evidencia apropiada", "explicar una relación causal" o "detectar una conclusión no sustentada". La evaluación tiene que revelar la capacidad que usted pretende desarrollar, que es el argumento de la [[educational-measurement|medición educativa]] y el punto de partida de la [[ai-ed-evaluation|evaluación de la IA educativa]].

El corpus sostiene dos afirmaciones a la vez, y sostener ambas es la disciplina que esta página pide. Una síntesis del Banco Mundial, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], agrupó 14 estudios aleatorizados en diez economías y estimó un efecto medio positivo en el aprendizaje de 0,125 desviaciones estándar para la tecnología educativa adaptativa y habilitada por IA. También combinó [[adaptive-learning|sistemas adaptativos]] anteriores con herramientas de [[generative-ai|IA generativa]], no encontró ninguna ventaja estadísticamente establecida para las herramientas generativas más nuevas y reconoció una incertidumbre considerable en esa comparación. El resultado respalda el potencial de estas intervenciones, no la afirmación de que cualquier [[conversational-ai|chatbot]] mejorará el aprendizaje. Un promedio positivo, en otras palabras, es compatible con mucha variación y con ninguna ventaja demostrada para lo que usted está considerando realmente.

Los estudios más útiles son los que varían el diseño dentro de un mismo experimento. [[genai-feedback-design-multisite-experiment|Un estudio aleatorizado multisitio]] con 1.176 estudiantes de primer año de grado comparó la [[peer-assessment|retroalimentación entre pares]], la retroalimentación directa de la IA, la autoevaluación seguida de retroalimentación de la IA y una secuencia híbrida de autoevaluación, retroalimentación entre pares y crítica de la IA. Las condiciones reflexiva e híbrida produjeron una [[transfer-of-learning|transferencia diferida sin IA]] más fuerte que la retroalimentación directa de la IA: los estudiantes rindieron mejor en una nueva tarea de argumentación científica, no solo en el ensayo que estaban revisando. Esas condiciones también exigían más trabajo evaluativo y probablemente más tiempo, así que el estudio respalda el diseño completo de retroalimentación y no uno de sus componentes.

## Compruebe si la ganancia sobrevive a la retirada de la herramienta

Esta es la comprobación más informativa de la que usted dispone, y es fácil dejarla fuera de un piloto.

La advertencia más clara del corpus es un experimento de campo aleatorizado con casi 1.000 estudiantes de secundaria, [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]. Una interfaz de estilo generalista elevó las puntuaciones de práctica asistida en un 48% respecto al control, y esos mismos estudiantes obtuvieron después un 17% menos en exámenes sin asistencia. Un tutor configurado con orientación y pistas diseñadas por el docente evitó en gran medida esa penalización. No produjo una mejora estadísticamente significativa en el desempeño en exámenes sin asistencia respecto al grupo control. Evitar un daño y demostrar aprendizaje adicional son logros distintos.

A escala nacional la misma división aparece con retraso. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] siguió a 26.811 estudiantes chinos de secundaria de los grados 7 a 12 durante 30 meses usando una adopción escalonada. Las puntuaciones de tareas subieron un 18% y el tiempo de realización cayó un 30%, de 64 a 45 minutos. Las puntuaciones de los exámenes mensuales a libro cerrado cayeron un 20% en seis meses, y las puntuaciones de los exámenes de ingreso de alto riesgo cayeron entre un 18% y un 24% de la línea base, pero solo después de unos dos años. Las pérdidas se concentraron en el 81% aproximado de usuarios cuyo comportamiento indicaba externalización de las tareas, mientras que los estudiantes que mantuvieron un tiempo de tarea comparable al de los no usuarios aprendieron con una eficiencia similar. De ahí se siguen dos cosas para su curso: la divergencia entre el desempeño en tareas y en exámenes es la [[learning-gains|brecha entre desempeño y aprendizaje]] en una cohorte nacional, y el retraso de dos años significa que una evaluación de un semestre subestimará sistemáticamente el costo.

La enseñanza de la computación muestra la misma estructura. La [[kumar-genai-computing-education-systematic-review-2026|revisión sistemática de 72 estudios]] encontró que la IA generativa elevó de forma fiable la finalización a corto plazo y redujo el tiempo en la tarea en 36 estudios, sin que un solo estudio del corpus documentara un efecto negativo en el desempeño inmediato, y esas ganancias "no se transfieren al desempeño independiente" en 21 estudios. Los estudiantes asistidos por Codex completaron el doble de tareas durante el aprendizaje y no rindieron mejor que los controles en pruebas posteriores sin IA.

Está además la cuestión de si los estudiantes usan la ayuda. Un experimento escolar aleatorizado de dos años en 18 escuelas medias, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], encontró modestas ganancias de rendimiento en [[math-education|matemáticas]], y los estudiantes rara vez se involucraron en conversaciones de tutoría sustantivas. Los autores señalaron que las ganancias se parecían a las reportadas para la práctica estructurada sin IA, y el diseño combinaba práctica individualizada con [[intelligent-tutoring|tutoría con IA]], así que no aislaba la contribución del componente de IA. Que un tutor capaz esté disponible es un hecho distinto de que los estudiantes lo usen de forma productiva.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] añade una lección más nítida a partir de más de 6.000 estudiantes de escuela media que usaban NUMI. El apoyo de IA mejoró la recuperación después de los errores y ralentizó el avance por las preguntas. Una regla de dominio de tres aciertos consecutivos elevó el éxito definido por la plataforma sin mejorar, por sí sola, el aprendizaje una semana después. La señal más fuerte de aprendizaje diferido apareció cuando la IA se integró en el flujo de trabajo de dominio, y esas ganancias eran marginalmente significativas desde el punto de vista estadístico y se concentraban en material practicado concreto. Es evidencia sugerente de un enfoque estructurado, no una receta probada.

## Construya la actividad para que el estudiante haga el pensamiento que importa

El [[learning-design|diseño instruccional]] importa más que el modelo que usted ejecute. El diseño que sobrevive a estos resultados tiene cuatro giros: un intento, ayuda dirigida a la dificultad, algo que el estudiante hace con la ayuda y una nueva aplicación con el apoyo retirado.

**1.** Pida un intento inicial, una predicción, un borrador, una explicación o una interpretación.

**2.** Ofrezca asistencia específica: una pista, una explicación, un ejemplo contrastante o retroalimentación centrada en el punto donde se atascaron.

**3.** Exija una respuesta a la asistencia. Que la expliquen, la usen para revisar, la verifiquen o justifiquen aceptarla y rechazarla.

**4.** Compruebe un problema comparable o un contexto distinto con el apoyo retirado.

Eso es un punto de partida instruccional y no una secuencia validada, y la cantidad y el momento adecuados del apoyo dependen de los estudiantes y de la tarea. Refleja lo que subrayan las síntesis sobre el [[scaffolding|andamiaje]] y el [[active-learning|aprendizaje activo]]: un apoyo que ayuda a quien aprende a comprender, practicar, evaluar y finalmente desempeñarse con menos.

Aplique el principio al objetivo, no mecánicamente a cada función. "Andamiar, no sustituir" es una buena regla con una trampa dentro. Un ejemplo resuelto completo puede ser algo de lo que los estudiantes aprenden, y una secuencia de pistas puede seguir siendo algo por lo que hacen clic sin pensar. Lo que importa es qué hace quien aprende con la asistencia, y por eso la [[cognitive-offloading|descarga cognitiva]] y la [[help-seeking|búsqueda de ayuda]] se sitúan en extremos opuestos de lo que una misma herramienta puede producir.

Vale la pena mantener a la vista el contraejemplo, porque impide convertir el esfuerzo en un indicador indirecto del aprendizaje. En los experimentos prerregistrados que se reportan en [[coach-not-crutch-ai-writing|Coach not crutch]], los adultos que practicaron la revisión de cartas de presentación con IA produjeron después una escritura sin IA mejor que quienes practicaron solos, y emplearon menos esfuerzo en hacerlo. Los beneficios persistieron en un seguimiento de un día, y un segundo experimento encontró que ver un ejemplo revisado por IA producía beneficios comparables a practicar con la herramienta. Eran tareas de escritura breves y acotadas, no evidencia de una mejora duradera en toda la escritura. Sí muestran que menos esfuerzo no es automáticamente menos aprendizaje y que el objetivo es preservar la actividad de aprendizaje, no maximizar la dificultad.

## Haga visible en lo que califica el pensamiento retenido

Cómo usan los estudiantes la herramienta importa más que si la tienen. En [[yan-cognitive-outsourcing-genai-assessments-2026|un estudio cualitativo con 38 estudiantes de grado]] en evaluaciones de ensayo sin supervisión, el compromiso iba de la [[cognitive-offloading|descarga cognitiva]] a la reasignación cognitiva, el desplazamiento del esfuerzo desde la recuperación de bajo nivel hacia la [[critical-thinking|evaluación crítica]]. La mayoría de los estudiantes, 31 de los 38, pretendían usar la IA generativa como asistente de aprendizaje. En la práctica, el 76,32% se apoyó en el diálogo de un solo turno, preguntar, obtener la respuesta y parar, y el 78,94% usó la herramienta antes o después de redactar en lugar de a lo largo de la tarea. Solo 8 estudiantes trabajaron como socios cognitivos mediante un diálogo sostenido e iterativo. Ese espectro, de la externalización a la reasignación, es lo que describe la [[student-ai-interaction|interacción estudiante-IA]]. Un participante describió el efecto como "la velocidad a la que se te olvida también es muy rápida".

La lección [[pedagogy|pedagógica]] es que los permisos generales y las prohibiciones generales dejan por igual a los estudiantes adivinando. Lo que cambió la conducta, según el relato de ese estudio, fue una orientación específica para la tarea sobre qué trabajo cognitivo debían retener los estudiantes y qué asistencia era apropiada, la dirección de diseño que se desarrolla en [[reduce-ai-cheating|¿Cómo puedo reducir las trampas con IA en mi curso?]] y [[reducing-ai-misuse|reducir el mal uso de la IA]].

Así que convierta el pensamiento retenido en un artefacto que pueda calificar. En matemáticas, pida la solución intentada antes de que se solicite ayuda, y luego haga que los estudiantes usen un prompt como "identifica el primer paso que debería reconsiderar, dame una pista útil y pídeme que lo intente de nuevo", y exija una nueva solución más una explicación en lugar de una reproducción de la respuesta de la IA. En escritura, haga que los estudiantes evalúen su borrador con la rúbrica antes de pedir crítica, y luego expliquen qué sugerencias aceptaron, modificaron o rechazaron. Si la construcción de argumentos es el objetivo, la prosa de la IA no puede sustituir la evidencia de que el estudiante puede construir un argumento. Si evaluar revisiones alternativas es el objetivo, comparar ejemplos completos es apropiado. Las páginas de [[writing-education|enseñanza de la escritura]] y [[feedback-literacy|alfabetización en retroalimentación]] llevan el detalle.

El requisito de diseño de la revisión es el mismo movimiento a nivel de curso: la verificación, es decir, leer, probar, modificar, explicar y criticar la salida de la IA, convertida en un componente calificado y observable en lugar de una aspiración dejada a la discreción del estudiante. Y no todo resultado legítimo tiene que demostrarse sin IA. Un curso puede enseñar deliberadamente el trabajo eficaz asistido por IA, y en ese caso evalúa la capacidad del estudiante de seleccionar, verificar, revisar y defender su uso de la herramienta junto con los fundamentos independientes que exija la disciplina. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propone esa distinción triple entre capacidad independiente, desempeño aumentado por IA y responsabilidad de verificación. Es un marco conceptual, no un instrumento validado.

## Compruebe a quién ayuda la herramienta y a quién abandona en silencio

Una mejora promedio puede ocultar a estudiantes que no ganaron nada o que chocaron con una barrera nueva. La síntesis sobre la [[digital-divide|brecha digital]] separa el acceso a una herramienta de la habilidad necesaria para usarla y de quién termina con un resultado útil, y las tres cosas importan para un curso.

El [[prior-knowledge|conocimiento previo]] modera todo en la revisión sobre computación: los estudiantes bien preparados convierten la asistencia en habilidad duradera, mientras que los estudiantes con menos preparación corren el riesgo de usarla como muleta que elimina la práctica que necesitan. El estudio de cohorte nacional muestra la misma concentración a su manera, con las pérdidas de aprendizaje situadas en el 81% cuyo comportamiento de tareas indicaba externalización.

Para una evaluación de aula, desglose los resultados por conocimiento previo, necesidades lingüísticas y requisitos de accesibilidad en lugar de reportar una media del curso. Enseñar a los estudiantes cómo obtener y evaluar retroalimentación útil es parte de la [[ai-literacy|alfabetización en IA]], y no llega con la licencia. Cuando evalúe el aprendizaje independiente, retire la asistencia que aporta el pensamiento objetivo y deje las adaptaciones que dan acceso a la tarea, que es la distinción de la que dependen tanto la [[accessibility|accesibilidad]] como la [[equity-in-ai-education|equidad en la educación con IA]].

Inspeccione también la retroalimentación que los estudiantes reciben de hecho. Una respuesta fluida puede diagnosticar mal la dificultad, reforzar un error o entregar una respuesta donde se necesitaba otro tipo de apoyo. Use materiales alineados con el curso, mantenga una vía hacia la ayuda humana y no recoja más información del estudiante de la que la actividad requiere. [[ai-feedback-quality|La calidad de la retroalimentación de IA]], la [[pedagogical-safety|seguridad pedagógica]] y la [[privacy|privacidad]] cubren los detalles.

## No confíe en el panel de control, incluido el suyo

Las métricas de plataforma son la evidencia más fácil de llevar a una decisión de compra y la más fácil de sobreinterpretar. En [[zhang-platform-scores-miss-ai-teaching-agents-2026|una evaluación de ocho agentes de enseñanza con IA]] en [[medical-education|educación médica]], las clasificaciones según la puntuación propia de la plataforma divergían de una rúbrica de calidad docente validada por expertos. El agente clasificado en tercer lugar por la plataforma quedó último en calidad según la rúbrica, porque la puntuación de la plataforma seguía el desempeño del estudiante durante la interacción y no la conducta docente del agente. Una métrica integrada es una hipótesis que hay que validar.

El mismo escepticismo se aplica a la evidencia que usted mismo genera. Una encuesta de satisfacción mide satisfacción, y el aprendizaje percibido es una [[self-report-measures|medida de autoinforme]] que el corpus documenta alejándose mucho del aprendizaje medido. Las notas de las tareas miden la tarea. Ninguna de las dos le dice qué puede hacer un estudiante en tres semanas con la herramienta cerrada, y [[evaluating-ai-interventions-methods|Cómo evaluar intervenciones de IA]] expone los diseños de comparación que lo acercan más.

## En qué se equivocan los docentes sobre esto

**"Notas más altas en la tarea significan que aprendieron más."** Las dos cosas pueden moverse en direcciones opuestas. El experimento de las salvaguardas elevó la práctica asistida un 48% mientras los exámenes sin asistencia cayeron un 17%, y la cohorte nacional vio subir las notas de tareas un 18% mientras las de exámenes a libro cerrado caían un 20% en seis meses. Ninguno de los dos patrones aparecería en un libro de notas que registra solo la entrega final.

**"Es un tutor, así que es seguro."** Tutor es una etiqueta, y los resultados detrás de la etiqueta son mixtos. El tutor configurado por el docente evitó la penalización en el examen y no superó al control en los exámenes sin asistencia. Khanmigo produjo ganancias modestas que se parecían a la práctica estructurada, con poca tutoría sustantiva. La IA de NUMI ralentizó el avance por las preguntas. Un tutor puede retener las soluciones y aun así absorber la práctica.

**"Si se siente más fácil, no les está enseñando nada."** Falso en ambas direcciones, y por eso el esfuerzo es un mal indicador indirecto. Coach not crutch encontró menos esfuerzo con mejor escritura sin IA un día después, así que la facilidad no es la señal. Lo que separa los casos es si el estudiante hizo el pensamiento que nombra el objetivo, y eso es una cuestión de diseño y no un ajuste de dificultad.

**"Una regla general, o un prompt mejor, arregla cómo lo usan."** El estudio con 38 estudiantes encontró a la mayoría en el modo de preguntar y parar de un solo turno justo en las condiciones en que se les había dicho que la IA era una asistente de aprendizaje. Lo que movió la conducta fue una orientación específica para la tarea y un requisito calificado de verificación. Una línea de política y un prompt ingenioso son ambos insumos para eso, y ninguno lo sustituye.

**"La puntuación de la plataforma, o la encuesta de satisfacción, me dice que funciona."** La evaluación de ocho agentes encontró una clasificación de plataforma que se invertía bajo una rúbrica experta. La satisfacción y el aprendizaje percibido son autoinformes. Ambos vale la pena recogerlos como información de proceso, y ninguno es una medida de aprendizaje.

**"El acceso es el problema de equidad, y ya hemos resuelto el acceso."** El acceso es una de tres líneas, junto con la habilidad y quién obtiene un resultado útil. El conocimiento previo decide si la ayuda se convierte en habilidad o en muleta, y las pérdidas de la cohorte nacional se concentraron en el grupo cuyo comportamiento sugería sustitución y no en el grupo sin dispositivos.

## Lo que le van a responder

**"Mis estudiantes dicen que les ayuda."** Probablemente sí ayuda con el trabajo que tienen delante, y ese es el hallazgo, no una refutación de él. Pregunte qué pueden hacer en una tarea similar con la herramienta cerrada, y obtendrá la respuesta que importa.

**"Los estudios se contradicen, así que ¿por qué actuar sobre alguno?"** Rara vez se contradicen una vez que alinea el resultado que midió cada uno. Los resultados positivos tienden a medir desempeño asistido, satisfacción o una actividad bien estructurada con comprobaciones diferidas; los negativos miden el desempeño sin asistencia más tarde. La síntesis de Burneo hace explícita la incertidumbre: 0,125 desviaciones estándar en promedio en 14 ensayos, sin ventaja establecida para las herramientas generativas más nuevas. Una mejora de antes y después no puede mostrar que la IA causó la ganancia, ya que los estudiantes mejoran a lo largo del resto de la [[teacher-role|enseñanza]], y [[research-methods-aied|los métodos de investigación sobre eficacia]] exponen los diseños de comparación que lo acercan más. Actúe sobre las afirmaciones de diseño, que se replican, y manténgase abierto sobre el tamaño del efecto, que no.

**"Tengo 200 estudiantes. No puedo hacer evaluaciones diferidas."** Necesita una tarea breve de línea base y un ítem diferido, no un estudio. Use el mismo tipo de tarea tres semanas después sin la herramienta, conserve la versión del examen del año anterior como comparación aproximada y muestree el trabajo que parezca inconsistente con entregas anteriores. Eso basta para ver una ganancia asistida del 48% junto con una pérdida sin asistencia del 17% si está ocurriendo en su curso.

**"Khanmigo obtuvo un resultado positivo, así que la tutoría funciona."** Obtuvo modestas ganancias en matemáticas en 18 escuelas medias, en un diseño que combinaba práctica individualizada con tutoría de IA, mientras los estudiantes rara vez mantenían conversaciones de tutoría sustantivas. Léalo como evidencia de que un entorno de práctica bien estructurado puede producir ganancias pequeñas, no como evidencia de que el componente de IA las causó.

**"No puedo prohibirla y no puedo vigilarla."** Correcto en ambos puntos, y ninguno de los dos es necesario. La pregunta de diseño es qué facilita su actividad. Si la verificación está calificada, la declaración no cuesta nada y la comprobación sin ayuda existe, la mayoría de los estudiantes toma el camino que usted construyó.

**"Yo no enseño IA. Esta no es mi asignatura."** La interferencia ocurre dentro de su asignatura, en el paso donde la IA realiza la práctica que su curso existe para proporcionar. Por eso la solución es un cambio en la tarea y no una unidad nueva.

## Qué hacer esta semana

**1.** Tome una actividad que ya realiza y escriba la frase de la capacidad: qué debería poder hacer un estudiante después, con la herramienta cerrada.

**2.** Añada una línea base de dos minutos al inicio y el mismo tipo de ítem tres semanas después. Puntúe ambos sin IA en la sala.

**3.** Cambie un prompt que da a los estudiantes de "explícame esto" a "dame una pista y luego hazme una pregunta", y exija un intento revisado antes de que sigan adelante.

**4.** Añada un artefacto de verificación calificado: una nota breve sobre qué comprobaron, qué rechazaron y qué cambiaron.

**5.** Desglose el resultado por conocimiento previo para los estudiantes que ya sabe que están teniendo dificultades, y lea la retroalimentación de IA que recibió una muestra de ellos.

## Adónde ir después

[[evaluating-ai-interventions-methods|Cómo evaluar intervenciones de IA]] cubre las medidas y los diseños de comparación que hay detrás de las comprobaciones anteriores, y [[ai-ed-evaluation|Evaluación de la IA educativa]] es la guía práctica de evaluación. [[how-ai-impacts-students|Cómo afecta la IA al estudiantado]] toma el lado de la experiencia del estudiante, [[top-10-findings-ai-education-instructors|Los diez hallazgos principales para el profesorado]] comprime la misma evidencia en decisiones docentes, y [[limitations-in-aied-research|Limitaciones de la investigación en IA educativa]] es el relato honesto de lo que esta literatura todavía no puede decirle. Si su pregunta se ha convertido en una pregunta de evaluación, la siguiente página es [[reduce-ai-cheating|¿Cómo puedo reducir las trampas con IA en mi curso?]].
