---
title: "¿Cómo hacemos que un estudiante simulado se comporte como un estudiante real?"
created: "2026-10-02T09:08:04-04:00"
updated: "2026-10-28T13:36:06-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
source_updated: "2026-10-28T11:26:02-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-02"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Tiene una demostración el jueves. El estudiante simulado que aparece en ella falla un problema de fracciones, recibe una pista y después produce la respuesta correcta con la explicación correcta. Alguien en la sala pregunta por qué haría eso un aprendiz con dificultades, y usted no tiene respuesta.

Antes de la siguiente demostración, necesita tener claro esto: pedirle a un modelo que haga de estudiante produce el sonido de un aprendiz. Lo que produce el comportamiento es una restricción sobre lo que el simulador sabe, estructura en los turnos y validación con registros de aprendices reales. Solo el 3% de los estudios que simulan aprendices validan su simulador después de usarlo, así que nadie va a comprobarlo por usted.

## La versión breve

**1.** Escriba qué aprendices no está simulando y ponga esa frase donde sus usuarios la lean.

**2.** Pruebe el estado de creencias, no la prosa. Pregunte qué dice el simulador después de una corrección.

**3.** Restrinja el conocimiento de forma deliberada: especifique el estado epistémico o elimine el conocimiento.

**4.** Guionice la interacción turno a turno. Un prompt de persona mejor redactado no corrige la deriva.

**5.** Puntúe por separado la fidelidad conductual y la capacidad de respuesta a la guía, frente a registros de aprendices reales.

## Decidir qué pregunta responde el simulador

Bajo "estudiante simulado" se confunden tres tareas, y cada una necesita maquinaria distinta. Ensayar con un docente o un tutor requiere un interlocutor que se comporte de forma verosímil bajo presión. Auditar cómo trata una IA a distintos perfiles de aprendices requiere cubrir los perfiles que le importan. Predecir resultados para un curso requiere una distribución de aprendices y no un individuo convincente. Un simulador construido para la primera tarea le decepcionará en la tercera, y la evidencia que sigue insiste en separarlas.

## Nombrar a los aprendices que no está cubriendo

El hallazgo más útil para quien está a punto de confiar en un simulador tiene que ver con la cobertura. Doce docentes que tutoraron a estudiantes LLM informaron de un lenguaje demasiado complejo, ausencia de emoción, una atención poco natural y saltos de conocimiento inexplicados, y las simulaciones representaban solo uno de los cuatro cuadrantes reales de comportamiento estudiantil ([[llm-student-simulation-teacher-insights|Martynova et al., 2026]]). El cuadrante que cubrían era el más fácil de simular.

Eso importa porque casi nadie lo comprueba. Solo el 3% de los estudios que simulan aprendices validan su simulador después de usarlo. Si construye uno y se salta la validación, está en la inmensa mayoría, y también es la razón por la que esa estadística sigue siendo citable.

## Restringir lo que el simulador sabe

Un modelo capaz no puede fingir con facilidad ser un conocedor parcial. La investigación llama a esto la **paradoja de la competencia**: los modelos ampliamente capaces a los que se pide emular a aprendices con conocimiento parcial producen patrones de error y dinámicas de aprendizaje poco realistas.

La deriva tiene una dirección y apunta a los aprendices que más necesidad tienen de ser simulados. Frente a ideas de estudiantes extraídas de 49 lecciones de ciencias alineadas con NGSS, seis modelos mantuvieron la mayoría de las ideas dentro del alcance de conocimiento esperado y alrededor de dos tercios en un nivel de lectura igual o inferior al objetivo, y luego se pasaron de largo justo donde el aprendiz era más joven. Las ideas de primaria y secundaria superaban con más frecuencia el alcance de conocimiento y el nivel de lectura del curso objetivo, y el corpus se inclinaba hacia un razonamiento más amplio, un vocabulario más técnico y menos marcadores de incertidumbre ("quizá", "parece") que las ideas reales de las lecciones ([[llm-simulating-student-scientific-thinking-2026|Nguyen y Cao, 2026]]).

Dos notas de ese estudio. La elección de modelo no es unidimensional, ya que un sistema que se ajusta de cerca a las ideas de la lección puede aun así situarlas por encima del curso. Y la reparación suele ser instruccional: un nuevo prompt explícito con el nivel de curso devolvió a la mayoría de los modelos al rango.

## Especificar el estado o quitar el conocimiento

Si el modelo sabe demasiado, puede nombrar el estado en el que debería estar o restar el conocimiento que no debería tener.

**Condicionar a un estado epistémico.** Un marco sin entrenamiento construye el prototipo cognitivo de cada estudiante a partir de un [[knowledge-graph|grafo de conocimiento]] y puntúa candidatos de búsqueda por haces contra él, e informa de una mejora del 100% en la exactitud de la simulación ([[simulating-students-diverse-cognitive-levels-2025|Wu et al., 2025]]). Su calidad aumenta con el nivel cognitivo del estudiante, de modo que los aprendices más débiles siguen siendo el caso difícil, lo cual es desafortunado dado que suelen ser el objetivo. Modelar la dinámica cognitiva en lugar de una persona estática va más lejos: las actualizaciones de estado de CogEvolution basadas en ICAP alcanzaron R²LC = 0,92 donde los agentes estáticos llegan a 0,45, y cayeron a 0,58 sin su módulo ICAP ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang et al., 2026]]).

**Quitar el conocimiento.** Suprimir 16 componentes de conocimiento concretos en Mistral-7B hizo caer la exactitud de unos 0,75 con una tasa de olvido del 10% a por debajo de 0,5 con el 40%, mientras que el modelo base se mantuvo cerca de 0,85. El conocimiento suprimido resultó recuperable mediante reaprendizaje supervisado y diálogo guiado por un coach ([[simulating-novice-students-machine-unlearning-2026|Song, Guo y Lin, 2026]]). Esto es lo más parecido a fabricar directamente un novato, y la recuperabilidad se convierte en una ventaja si quiere que el simulador aprenda durante una sesión.

## Guionizar los turnos, no la persona

La estabilidad de la persona resulta ser un problema de diseño de la interacción y no de elección de modelo. Al cruzar cinco LLM con tres diseños de prompt y cuatro personas de intensidad de TDAH, las interacciones guionizadas y ancladas en tareas eliminaron la deriva conductual calificada por observadores, hasta en un 97% frente al diálogo sin guion. Sin instrucciones explícitas de persona, la representación estudiantil de base se sesgó hacia síntomas altos de TDAH ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase y Leins, 2026]]).

Si su simulador se desvía, mire lo que le pide turno a turno antes de cambiar de modelo o de reescribir la descripción del estudiante.

## Puntuar dos cosas, no una

StudentSim exige que se mantengan juntas dos propiedades: la **fidelidad conductual**, que mide cuánto se ajusta el simulador a las respuestas propias de un estudiante, y la **capacidad de respuesta a la guía**, que mide con qué fiabilidad se actualiza hacia donde lleva la guía del tutor. Su punto de referencia convierte corpus públicos de aprendices (ajedrez, escritura en inglés como segunda lengua, matemáticas) en un protocolo por estudiante sobre el que se ajusta cualquier simulador y se puntúa con registros reservados. El seguimiento de estado específico del dominio resultó débil en capacidad de respuesta, y el juego de rol con LLM basado solo en prompts resultó débil en fidelidad ([[studentsim-llm-student-simulators|Yang et al., 2026]]). Un simulador puede superar una prueba y fallar la otra, así que informe de ambas.

Como prueba de concepto, un StudentSim congelado usado como recompensa en un bucle de [[reinforcement-learning|aprendizaje por refuerzo]] de tutoría de ajedrez produjo tutores que los expertos calificaron como más exactos, mejor guiados y más personalizados que los entrenados con la recompensa de un simulador de LLM de frontera o sin aprendizaje por refuerzo alguno. Un buen simulador puede ser la señal de entrenamiento y también la medida.

La fidelidad a nivel de acción tiene su propio límite. Los simuladores de estudiantes reproducen acciones observables sin el razonamiento latente que hay detrás, e [[inside-llm-student-simulator-reasoning-2026|INSIDE]] ajusta modelos para generar un diálogo interno antes de cada acción, alcanzando la mayor alineación entre razonamiento generado y ediciones de código reales, con un 51,8% en problemas conocidos y un 57,9% en problemas no vistos, sin perder fidelidad de acción (Niousha et al., 2026). Si le importa por qué su estudiante simulado hizo algo, coincidir en la acción no basta.

## Validar con aprendices reales e informar de la línea base

Dos comparaciones muestran cuánto cuesta validar.

Al comparar nueve métodos de simulación con siete métricas basadas en referencias sobre 382 diálogos reservados del mayor corpus público de diálogos reales entre estudiantes y tutores de matemáticas, el uso de prompts quedó por detrás del ajuste fino en actos de diálogo (0,4998 frente a 0,6840), ROUGE-L (0,1648 frente a 0,3212) y similitud coseno (0,5460 frente a 0,7390). El mejor método probado, la optimización de preferencias sobre un modelo de 8B, superó al ajuste fino supervisado solo de forma marginal y fue peor en errores, y una evaluación humana con tres tutores reprodujo ese orden ([[simulated-students-tutoring-dialogues-2026|Scarlatos et al., 2026]]). La cima de esta escala queda cerca del medio, así que la línea base que informe decide lo impresionante que parece su propia cifra.

SWIM es la comparación más clara entre prompts, ajuste fino y aprendizaje por refuerzo, porque puntúa cada ensayo generado contra un perfil de rasgo objetivo en lugar de juzgarlo de forma impresionista. El uso de prompts anclado en rúbricas dio un control limitado incluso en modelos propietarios fuertes, con un mejor promedio de QWK de rasgo de 0,577 (Claude Sonnet) y 0,422 (GPT-5.4), y casi nulo en un modelo abierto de 7B. El ajuste fino supervisado con pares reales de puntuación y ensayo alcanzó 0,474 ± 0,023 en ese modelo de 7B. GRPO con una recompensa derivada de la puntuación automatizada de ensayos alcanzó 0,618 ± 0,005, con ganancias que se mantuvieron en dos evaluadores independientes con los que la política nunca se entrenó ([[swim-student-writing-simulation-2026]]).

El uso de prompts produjo además una población idealizada y no realista: una puntuación general normalizada media de 0,74 frente a 0,58 de los estudiantes reales, y una longitud mediana de 304 palabras frente a 167. Los modelos entrenados recuperaron las distribuciones humanas de puntuación y longitud sin supervisión alguna de longitud. Una cosa siguió siendo difícil: la forma auténtica de baja competencia. Los modelos entrenados recuperaron la sintaxis pero escribieron demasiado pocos errores ortográficos y gramaticales, mientras que los prompts simulaban la debilidad mediante corrupción superficial, faltas de ortografía esparcidas sobre una prosa por lo demás competente.

El realismo superficial es una prueba débil en ambas direcciones. En un estudio ciego, anotadores expertos clasificaron erróneamente 164 de 196 (83,7%) envíos de Java generados por LLM como escritos por humanos, porque los errores eran funcionalmente indistinguibles de los auténticos, y la alineación con los errores reales cayó después a medida que aumentaba la dificultad del problema ([[simulating-students-java-programming-errors-llms|Keramati et al., 2026]]). En siete modelos de 4B a 120B parámetros, los simuladores cambiaron a la respuesta correcta a tasas casi uniformes fuera cual fuera la retroalimentación que recibieran, así que la similitud de la salida no dice nada sobre el estado de creencias que hay detrás. Entrenar contra el **Selective Flip Score** elevó la fidelidad hasta en +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar y Sachan, 2026]]).

## Comprobar si bastaría con una descripción

Antes de construir una cohorte, compruebe la opción más barata. Para evaluar una experiencia de aprendizaje en línea antes de que los estudiantes participen, predecir el abandono y la finalización y dar retroalimentación de diseño, un único agente web "descriptor" que recorre la lección y produce una descripción rica de la experiencia superó a simular directamente una población de estudiantes.

Los estudiantes simulados de esa comparación mostraron un rango conductual mucho menor que los aprendices reales: en 100 agentes con cinco lecciones de prueba reprodujeron solo alrededor del 4% de los caminos que tomaron los estudiantes reales, y costaron bastante más cómputo. El proceso de describir y luego predecir logró la mejor predicción de la distribución de abandono en un curso CS1 global masivo, con una JSD media de 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell y Piech, 2025]]).

El límite que traza es práctico. Simular una distribución de estudiantes puede ser innecesario, o contraproducente, cuando el objetivo es predecir resultados o criticar un diseño. La simulación justifica su coste cuando importa cubrir la variación real de los aprendices, como auditar el trato que da una IA a perfiles diversos o dar a un docente algo contra lo que ensayar.

## Qué hacen mal quienes construyen esto

El realismo superficial es el objetivo. Una tasa de clasificación errónea del 83,7% en código escrito por máquinas y un cambio de respuesta casi uniforme en siete modelos dicen ambos que un juez humano que lee la salida no puede ver la propiedad que usted afirma. Pruebe en cambio la respuesta a una corrección.

Un prompt de persona mejor redactado corrige la deriva. Los turnos guionizados y anclados en tareas redujeron la deriva calificada por observadores hasta en un 97% en cinco modelos y tres diseños de prompt. El trabajo lo hizo el diseño de los turnos.

Un modelo base más fuerte cierra la brecha de competencia. Un modelo propietario fuerte obtuvo 0,422 en QWK de rasgo con prompts, mientras que un 7B ajustado fino alcanzó 0,474, y la misma comparación de seis modelos se pasó de largo más gravemente en los niveles de curso más bajos. La elección de modelo intercambia un eje de fidelidad por otro.

Validar significa que un colega leyó una transcripción y le pareció correcta. El resultado de Java muestra hasta dónde llega ese juicio. Validar significa registros reservados de aprendices reales y una línea base que usted pueda nombrar.

Simular una población es la opción minuciosa. En 100 agentes, las simulaciones cubrieron alrededor del 4% de los caminos que tomaron los estudiantes reales, con un cómputo sustancialmente mayor que el agente descriptor.

## Lo que le van a objetar

**"Los docentes no distinguían nuestro simulador de un estudiante."** En el estudio ciego de Java, los anotadores expertos clasificaron erróneamente el 83,7% de los envíos de máquina como humanos. Eso mide a los anotadores y deja el estado de creencias sin examinar.

**"El ajuste fino está fuera del alcance de nuestro equipo."** Entonces acote la afirmación a lo que los prompts permiten y dígalo. El uso de prompts fijó un techo de 0,577 para el modelo más fuerte probado y casi nulo para un 7B abierto, y produjo una distribución de puntuaciones idealizada.

**"No tenemos acceso a datos de aprendices reales."** El protocolo de StudentSim se construye a partir de corpus públicos de aprendices en ajedrez, escritura en segunda lengua y matemáticas. Los datos públicos limitan lo que puede afirmar sobre su propia población, y le dan una línea base, que es justo lo que más informes omiten.

**"GRPO superó al ajuste fino supervisado, así que deberíamos entrenar con RL."** Lo hizo, con 0,618 frente a 0,474. La forma de baja competencia siguió siendo difícil en ambos casos, con demasiado pocos errores ortográficos y gramaticales, y en otro punto de referencia la optimización de preferencias superó al ajuste fino solo marginalmente y perdió en errores. Compruebe de qué propiedad depende su caso de uso.

**"Los aprendices más débiles son una porción pequeña de nuestros usuarios."** Son el caso más difícil para todos los métodos de esta página, y el hallazgo sobre cobertura dice que las simulaciones se agrupan en el cuadrante más fácil. Si su simulador se va a usar para extraer conclusiones sobre estudiantes con dificultades, esa brecha debe constar en el informe.

## Qué hacer esta semana

**1.** Escriba la frase sobre cobertura: qué aprendices no representa este simulador. Póngala en el README y en las notas de la demostración.

**2.** Añada a su conjunto de pruebas una sonda que corrija al simulador y compruebe si sigue equivocado.

**3.** Sustituya el chat libre con una persona por turnos anclados en tareas en un flujo, y compare la deriva.

**4.** Puntúe un simulador existente frente a registros reales reservados en fidelidad y en capacidad de respuesta, e informe de las dos cifras por separado.

**5.** Ejecute la comprobación con el agente descriptor sobre la pregunta que realmente necesita responder antes de financiar una cohorte.

## Adónde ir después

[[simulating-students]] es la página de concepto completa. [[checking-whether-educational-ai-works]] cubre la evaluación de los sistemas con los que usted prueba frente a un simulador, y [[making-ai-better-at-supporting-learning]] cubre los métodos de entrenamiento que hay detrás de los resultados de ajuste fino de esta página. [[addressing-common-misconceptions-ai-education]] aborda si los estudiantes simulados pueden sustituir a los aprendices reales en la investigación.
