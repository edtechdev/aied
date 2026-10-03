---
title: Evaluación oral
created: "2026-09-28T21:03:34-04:00"
updated: "2026-10-02T22:23:33-04:00"
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale]
type: concept
foundations: [academic-integrity, critical-thinking]
pedagogy: [scaffolding, metacognition]
technology: [generative-ai, llm, speech-and-voice-technologies]
assessment: [assessment, assessment-validity, authentic-assessment, automated-assessment, ai-detection]
ethics: [trust]
audience: [instructors, administrators]
level: [higher ed]
confidence: medium
translation_of: concepts/oral-assessment
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La evaluación oral** — la evaluación en la que quien aprende debe explicar, defender o demostrar su comprensión hablando, en directo o grabado: la viva voce, el examen oral, la defensa oral, la entrevista de revisión de código, la consulta clínica. Como el intercambio es en tiempo real y las preguntas no tienen por qué conocerse de antemano, el formato resiste la sustitución de la comprensión por texto generado de una forma que las [[authentic-assessment|tareas auténticas]] para llevar a casa no pueden. También conlleva un problema de validez característico: los exámenes orales miden la fluidez y la confianza junto con el conocimiento, así que lo que certifican depende en gran medida de cómo se diseñen, de quién pregunte y de cómo se trate el habla de quien aprende como evidencia.

## Preguntas para reflexionar

- Los exámenes orales se promueven en la era de la IA porque una máquina no puede sentarse en la sala y responder por usted. Sin embargo, el corpus que defiende esto no contiene ningún ensayo aleatorizado de la evaluación oral frente a la escrita. ¿Qué necesitaría ver antes de dar ese argumento por zanjado?
- El mismo conjunto de trabajos informa de dos mecanismos distintos para reducir la ansiedad: eliminar la observación en directo del profesorado y familiarizarse con el formato mediante la práctica. Implican diseños diferentes. ¿Cuál encaja en su contexto y en cuál confiaría para generalizar?
- Una puntuación basada solo en el habla puede confundir la fluidez verbal con la comprensión conceptual. Si quien aprende gesticula correctamente pero dice la palabra equivocada, o dice la palabra correcta sin entenderla, ¿qué mide exactamente su evaluación?
- Todos los diseños orales de este corpus chocan con el mismo muro: el tiempo de personal y de aula. Si la restricción son veintiocho horas de contacto por semestre para quince estudiantes, ¿la respuesta honesta es un número menor de tareas defendidas, un equipo docente más amplio o un formato distinto?

## Introducción

La evaluación oral es uno de los formatos de evaluación más antiguos y, durante buena parte del siglo pasado, uno de los menos de moda: difícil de escalar, difícil de estandarizar y difícil de defender en un proceso de apelación. La IA generativa ha invertido su suerte. Cuando un modelo puede producir a demanda una entrega escrita, el valor evaluativo del artefacto se derrumba y la atención se desplaza a la evaluación de la persona. Quien aprende y debe responder en voz alta a una pregunta desconocida, en tiempo real, al menos demuestra estar presente y pensando.

Ese giro es ahora visible en todo el corpus de investigación, pero de forma desigual. Parte del trabajo trata el examen oral como una respuesta de política a la [[academic-integrity|integridad académica]], parte diseña un sistema automatizado para impartir o puntuar el desempeño oral a escala, y parte se pregunta qué puede y qué no puede mostrar el propio habla sobre la comprensión. Las páginas conectadas más abajo discrepan sobre cuánto demuestran en realidad los exámenes orales. Leídas en conjunto, respaldan una afirmación más estrecha y más defendible que la que suele hacerse sobre ellos.

## Qué puede certificar un desempeño en directo

[[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] presenta la forma más fuerte del argumento. Partiendo de la literatura sobre la [[authentic-assessment|evaluación auténtica]], el caso que el artículo hace a favor del examen oral se apoya en su interactividad: las preguntas pueden retenerse hasta el momento del examen, las preguntas de seguimiento pueden improvisarse y quien aprende no puede ensayar una respuesta a una pregunta que no ha visto. El formato también bloquea la memorización mecánica, porque el recuerdo se comprueba mediante la explicación y no mediante la reproducción. El artículo es una revisión y una toma de posición en *Educational Researcher*, no un estudio empírico, y termina con trece recomendaciones de implementación numeradas en lugar de con evidencia de mejores resultados.

La versión honesta de la afirmación sobre la integridad es más estrecha de como se formula a menudo. Los exámenes orales hacen que la sustitución sea más difícil de ocultar; el corpus no muestra que reduzcan el uso de IA. En [[code-review-genai-cs1|el estudio de revisión oral de código en CS1]], las entrevistas semanales de quince minutos cargaban con el setenta por ciento de la nota de cada tarea, y los caracteres pegados sobre el total siguieron subiendo del 61,0% al 68,1% (p < 0,0001) a lo largo de tres semestres, mientras que las notas de examen variaron un dos por ciento estadísticamente no significativo. El noventa por ciento del estudiantado dijo que las revisiones le motivaron a entender mejor su código y el sesenta y cinco por ciento que le ayudaron a evitar la dependencia excesiva de la IA, pero la conducta medida no acompañó. La evaluación oral cambió lo que podía ocultarse, no lo que hizo el estudiantado.

## El espacio de diseño que cubre realmente el corpus

Los formatos del corpus abarcan una amplia gama de automatización y sincronía, y cada uno resuelve una parte distinta del problema.

**En directo, humana y sincrónica.** La viva voce examinada por [[aivaluate-anxiety-assessment-2026|un estudio de viva voce con treinta y cinco estudiantes de preuniversitario]] es la línea de base: el mismo profesorado, las mismas preguntas, una administración cara a cara y otra mediada por un sistema de IA. La viva doctoral aparece en [[pgr-students-genai-uses-qualitative-2026|un estudio cualitativo con quince investigadores de posgrado]], en el que quienes participaron abogaron por trasladar peso evaluativo hacia ella con el razonamiento de que una tesis es más fácil de falsificar y que la viva debe celebrarse en persona. Los autores aceptan ese razonamiento solo en parte, ya que una viva no es en sí misma una prueba contra la asistencia de la IA.

**Grabada y asíncrona.** Las [[asynchronous-oral-assessment-2026|evaluaciones orales asíncronas]] sustituyen el aula por una respuesta con cámara web de tiempo limitado y no revisable, con unos treinta segundos de preparación y dos o tres minutos de habla. En el piloto descrito, las puntuaciones superaron las de las pruebas de opción múltiple presenciales: mediana del parcial 92,5 frente a 70 (p < 0,001) y mediana del examen final 94,2 frente a 86,4 (p = 0,002), con correlaciones entre formatos solo moderadas. Los autores atribuyen explícitamente la diferencia al formato y no al aprendizaje, y el diseño cargaba con el 7,5% de la nota del curso.

**Administración y puntuación automatizadas.** [[ai-supported-oral-assessment-tvet-2026|Un sistema basado en la voz probado en clases de automoción e ingeniería de formación profesional]] evaluó a treinta y tres estudiantes, de los cuales veintiuno coincidieron en que la tarea de voz en directo resultaba realista y ninguno discrepó de que hablar en tiempo real encajaba mejor en la tarea que un portafolio escrito. Los recuentos de palabras para preguntas idénticas variaron entre cinco y ocho veces de unos estudiantes a otros, la fluidez no aportó ninguna ventaja de precisión en los ítems cerrados, y una calificación preliminar de un agente coincidió con la del tutor humano en el noventa y cinco por ciento de los ensayos adyacentes de horticultura y lácteos. [[socratic-tests-conversational-assessment|Una prueba socrática conversacional]] toma la ruta de diseño opuesta, orientada al cuestionamiento conceptual; su evidencia es una encuesta de autoinforme con noventa y ocho estudiantes, en la que el 80,6% coincidió en que la IA andamiaba con eficacia y el cincuenta y dos por ciento informó de menos estrés que con los exámenes tradicionales. Ambos artículos miden la aceptación y no el aprendizaje.

**La evidencia oral como defensa y no como examen.** [[tool-invariant-framework-agentic-ai|Un marco de evaluación invariable respecto a la herramienta]] combina pruebas en clase sin IA con defensas orales de diez minutos de trabajos asistidos por IA a los que se han quitado los comentarios, puntuadas por comprensión del código, entendimiento del método, terminología, interpretación y verificación, con la verificación exigida para aprobar independientemente del total. El diseño se argumenta más que se valida; la propia aritmética del artículo para quince estudiantes son dos horas y media de contacto por tarea y unas veintiocho horas de contacto por semestre repartidas en once tareas defendidas.

## Ansiedad, sesgo y a quién perjudica el formato

Se defienden los exámenes orales por motivos de inclusión, porque una respuesta hablada es más difícil de comprar que una escrita, y se critican por los mismos motivos. [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton]] cataloga los retos directamente: carga de programación, ansiedad y sesgo por género, origen étnico, lengua y velocidad de respuesta, además de los efectos de una calificación no anónima. Frente a ello, la evidencia que cita el artículo sugiere que los exámenes orales pueden ser tan inclusivos como los escritos, incluso para estudiantado con dislexia, y que es la falta de familiaridad, y no el formato en sí, lo que impulsa la mayor parte de la ansiedad declarada; el estudiantado de un estudio citado estaba menos ansioso en sus exámenes orales posteriores.

Cuando la ansiedad baja de verdad, importa el motivo. En la viva mediada por IA, la calma autoinformada fue significativamente mayor que en la versión cara a cara (medias 6,50 frente a 5,86, t(34) = −1,97, p = 0,028), y la usabilidad se valoró como buena. Pero la condición cara a cara puntuó significativamente más alto en ayudar al estudiantado a entender su propio trabajo (p = 0,004). Eliminar la observación en directo del profesorado dejó al estudiantado más tranquilo y, según su propio informe, menos esclarecido para sí mismo.

Lo que cuenta como evidencia oral también es más estrecho de lo que parece. [[multimodal-embodied-cognition-oral-explanations-2026|Un estudio sobre la evidencia corporeizada en las explicaciones orales]] sostiene que puntuar solo el habla confunde la fluidez verbal con el conocimiento conceptual y perjudica a quien aprende con dificultades relacionadas con el lenguaje, ya que el gesto transmite una comprensión que la transcripción pierde. Su demostración es pequeña: dos estudiantes de ingeniería explicando conceptos estadísticos, con gestos de alta confianza agrupados en ideas concretas, formas cuadradas y rectangulares en torno al cincuenta y cuatro por ciento y al sesenta y uno por ciento, y una coordinación gesto–habla más estrecha acompañando a explicaciones más coherentes.

## Puntuación, validez y el problema de la escala

Tres hallazgos van en contra de leer las puntuaciones orales como ganancias de aprendizaje. [[asynchronous-oral-assessment-2026|El estudio del formato asíncrono]] renuncia a atribuirse ganancias de aprendizaje por su propia ventaja de puntuación, e informa de una concordancia al repuntuar entre docente y modelo de ICC 0,73 en el parcial y 0,60 en el final, lo que acota hasta dónde puede confiarse en la puntuación automática. En [[ai-standardized-patient-scaffolding-medical-2026|un ECA con cien estudiantes de tercer año de medicina]] que comparaba un sistema de paciente simulado con material de casos de divulgación progresiva, el desempeño en el examen final subió (71,8 frente a 55,6 por ciento, g de Hedges = −0,81) y las valoraciones de comunicación del OSCE subieron (3,53 frente a 2,64 en una escala de cinco puntos), mientras que la precisión diagnóstica binaria fue estadísticamente idéntica (84 frente a 86 por ciento, P = 1,000). Una lectura basada solo en la precisión llamaría nula a la intervención; una lectura basada solo en la comunicación la llamaría transformadora.

La restricción vinculante es de personal y de hardware, y no de pedagogía, y el corpus es inusualmente sincero sobre la aritmética: veintiocho horas de contacto por semestre para quince estudiantes, once ayudantes docentes para una clase de más de cien en el diseño de CS1, y un portátil que atiende a doce estudiantes simultáneos en el despliegue offline de formación profesional. No existe ningún ensayo aleatorizado de evaluación oral frente a escrita en todo este conjunto de trabajos, y todos los estudios que miden la diferencia son diseños de una sola institución sin grupo de control. La evaluación oral está bien respaldada como respuesta a la sustitución asistida por IA, y débilmente respaldada como mejora del aprendizaje.

- **El techo de escala es la restricción de diseño.** En un taller con 73 docentes de [[cs-education|informática]], la evaluación oral e interactiva se señaló como la evidencia más sólida disponible del entendimiento individual y el remedio menos escalable; las mitigaciones que describieron quienes participaron fueron la distribución y el muestreo: bolsas compartidas de ayudantes docentes, evaluación entre pares con menos peso que un examen final y preguntar a un subconjunto rotatorio de estudiantes ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

## Conceptos conectados

- [[pedagogical-patterns]] — Secuencias de verificación oral y de viva, y lo que demuestran y no demuestran
- [[assessment]] — el campo más amplio en el que se sitúa este formato
- [[authentic-assessment]] — la tradición de diseño que sostiene el argumento de integridad
- [[assessment-validity]] — lo que un formato puede y no puede pretender medir
- [[academic-integrity]] — la presión que devolvió protagonismo a los exámenes orales
- [[automated-assessment]] — administración y puntuación automáticas del desempeño oral
- [[ai-detection]] — la respuesta alternativa, y por qué es más débil
- [[speech-and-voice-technologies]] — la canalización de habla sobre la que funciona un sistema oral
- [[multimodal]] — el gesto y el habla como evidencia combinada
- [[anxiety-and-stress]] — el coste afectivo del desempeño en directo
- [[feedback]] — lo que una viva dice a quien aprende sobre su propia comprensión
- [[higher-ed]] — el contexto del que procede casi toda esta evidencia

## Artículos conectados

- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsiderar el uso de los exámenes y las evaluaciones orales (Fenton 2025)
- [[asynchronous-oral-assessment-2026]] — Evaluaciones orales asíncronas: integridad, implicación y comunicación profesional
- [[ai-supported-oral-assessment-tvet-2026]] — Diseñar una evaluación oral con apoyo de IA en la formación profesional
- [[aivaluate-anxiety-assessment-2026]] — Ansiedad y experiencia en la evaluación de desempeño mediada por IA
- [[code-review-genai-cs1]] — Entrevistas orales de revisión de código en un curso introductorio de programación
- [[multimodal-embodied-cognition-oral-explanations-2026]] — El gesto como evidencia al evaluar explicaciones orales
- [[socratic-tests-conversational-assessment]] — Pruebas conversacionales automatizadas como evaluación oral
- [[tool-invariant-framework-agentic-ai]] — Defensas orales de trabajos asistidos por IA
- [[ai-standardized-patient-scaffolding-medical-2026]] — Entrevistas clínicas habladas bajo un sistema de paciente simulado
- [[pgr-students-genai-uses-qualitative-2026]] — La viva doctoral bajo la IA generativa
- [[computing-assessment-genai-workshop-report-2026]] — La IA puede hacer tus deberes. ¿Y ahora qué? Informe de un taller en línea sobre la evaluación en informática en la era de la IA generativa