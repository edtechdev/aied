---
title: Búsqueda de ayuda
created: "2026-09-28T20:10:39-04:00"
updated: "2026-10-02T21:28:30-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/help-seeking
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Búsqueda de ayuda** — el proceso por el cual quien aprende reconoce que necesita asistencia y la solicita de forma estratégica, y cómo se desarrolla ese proceso en entornos de aprendizaje apoyados por IA. En la [[ai-education|IA en la educación]], la búsqueda de ayuda es central para determinar si las herramientas de IA apoyan o socavan el aprendizaje: la *calidad* de la búsqueda de ayuda (cuándo, cómo y qué pide quien aprende) moldea con fuerza los resultados, y los tutores de IA, las pistas y los [[pedagogy|agentes pedagógicos]] están diseñados precisamente para suscitar una búsqueda de ayuda productiva en lugar de una búsqueda de respuestas.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])


El contacto proactivo puede aumentar la búsqueda de ayuda sin ningún cambio en los materiales de aprendizaje. Un experimento preregistrado en asignaturas de grado con matrícula numerosa envió mensajes al estudiantado a través de un chatbot académico y encontró una mayor adopción de la tutoría y de la instrucción complementaria; el análisis de mediación atribuyó el 17,8% del efecto sobre la calificación a ese aumento de la búsqueda de ayuda (p = 0,041) ([[chatbot-outreach-course-performance-2026]]).

## Preguntas para reflexionar

- Cuando se atasca, ¿tiende a pedir una respuesta directa o una orientación que le ayude a resolverlo por sí mismo? ¿Qué cree que hace cada elección con lo que de verdad retiene?
- La investigación muestra que el estudiantado suele tener la intención de aprender con IA, pero acaba pidiendo la respuesta: una «brecha entre intención y conducta» vinculada a un peor rendimiento. ¿Por qué las buenas intenciones se derrumban tan fácilmente en una búsqueda de respuestas?
- Un «botón de pistas» permanente puede convertir una tarea de aprendizaje en un ejercicio de copia al señalar que la ayuda siempre está ahí. ¿Recuerda alguna ocasión en que tener la ayuda demasiado a mano le hizo saltarse el razonamiento que necesitaba hacer?
- Un estudio encontró que simplemente advertir al estudiantado de que una IA podía equivocarse aumentaba de hecho su búsqueda de ayuda. ¿Cómo podría un escepticismo saludable cambiar la forma en que el estudiantado se relaciona con un tutor frente a la confianza ciega?
- El estudiantado con dificultades suele ser el menos propenso a buscar ayuda sin que se la pidan. Si quienes más necesitan apoyo no lo piden, ¿cómo deberían responder las herramientas de IA y el profesorado?
- La página propone retrasar las pistas y trasladar la pregunta de diseño de «si» a «cómo» ofrecer la ayuda. ¿Cómo sería una experiencia de ayuda bien diseñada para sus estudiantes, y qué haría que la adoptaran de verdad?

## Introducción

La búsqueda de ayuda es un constructo bien establecido en la investigación sobre el aprendizaje, estrechamente ligado al [[self-regulated-learning|aprendizaje autorregulado]] y a la [[metacognition|metacognición]]: exige que quienes aprenden supervisen su propia comprensión, reconozcan una laguna, decidan que necesitan ayuda y formulen una petición eficaz. Con el auge de los tutores de [[generative-ai|IA generativa]], la búsqueda de ayuda ha cobrado nueva importancia, y también nuevos modos de fallo. Quienes aprenden a menudo *pretenden* usar la IA para aprender, pero acaban pidiendo respuestas directas, una brecha que la investigación recogida en esta base de conocimiento documenta en distintos dominios y grupos de edad. El modelo clásico da por supuesto que una petición busca conocimiento que quien pregunta no tiene. La demanda de apoyo operativo complica ese supuesto: de 4,093 consultas, al menos el 20.4% preguntaba por el estado de una entrega pendiente y no por conocimiento, una clase que un asistente limitado a la recuperación sirvió solo el 1.3% de las veces [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Búsqueda de ayuda productiva frente a improductiva

La distinción central en la literatura es entre la búsqueda de ayuda que apoya el aprendizaje y la que lo elude.

### Comportamientos improductivos de búsqueda de ayuda

La investigación recogida en esta base de conocimiento identifica patrones concretos y observables de búsqueda de ayuda improductiva, sobre todo en los [[intelligent-tutoring|sistemas de tutoría inteligente]]:

- **Peticiones prematuras de pistas** — pedir ayuda antes de intentar resolver nada. Incluso el estudiantado inseguro aprende más si lo intenta primero.([[lak2026-hint-button-unproductive-use]])
- **Lectura superficial de las pistas** — avanzar por las pistas con demasiada rapidez para leerlas (se marca a partir de una referencia de ~4 palabras por segundo), a menudo saltando directamente a la pista final que revela la respuesta.([[lak2026-hint-button-unproductive-use]])
- **Buscar respuestas en lugar de buscar aprendizaje** — pedir a la IA que produzca la respuesta en vez de que explique u oriente. En un estudio con 98 estudiantes de 9.º grado que usaban un tutor de IA generativa, las interacciones estuvieron dominadas por peticiones instrumentales, con casi ninguna supervisión ni evaluación de su propio aprendizaje, pese a que el estudiantado había elegido previamente un apoyo con andamiaje. Esta **brecha entre intención y conducta** se asoció con un rendimiento *menor* en el postest y con una mayor carga cognitiva extrínseca.([[regulating-ai-tutor-adolescent-srl]])
- **Consultar la IA antes de cualquier intento independiente o fuente humana.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. (2026)]] miden directamente este orden como **dependencia temprana** —consultar la IA generativa antes de pensar por cuenta propia, de una búsqueda tradicional o de acudir a una persona docente— y encuentran que se asocia con un mayor impacto negativo (β = 0,402, p = 0,004), así como con un beneficio académico (β = 0,301, p < 0,001), entre 118 estudiantes de asignaturas relacionadas con la IA. La asociación con el daño estaba ausente en niveles bajos de [[ai-literacy|alfabetización evaluativa]] y era más fuerte en niveles altos (b = 0,688 con +1 DE, p < 0,001), de modo que el estudiantado más capaz de juzgar la salida de la IA fue el que declaró un mayor coste por consultarla primero: la elección de *a quién preguntar primero* conlleva un inconveniente que la destreza para evaluar la respuesta no compensa. También muestra que usar la IA para organizar, evaluar y descomponer problemas —lo **cognitivo**, y no la dependencia temprana— es el patrón asociado con un impacto positivo, así que el modo de fallo de la búsqueda de ayuda es de secuenciación y no de preguntar en absoluto.
- **Preguntar de forma sostenida sin recuperación** — Preguntar es productivo al principio, pero no indefinidamente: las peticiones de ayuda son el tipo de bloqueo más recuperable al inicio (47.0%) pero caen más al fallar la asistencia (12.5% a partir de la sexta profundidad o más), así que lo que merece seguimiento es la persistencia y no la petición en sí [[guided-ai-tutor-impasse-resolution-2026|Ahtisham et al. (2026)]].
- **El estudiantado con dificultades es el menos propenso a buscar ayuda sin que se la pidan** — el lado de la implicación en la búsqueda de ayuda. En [[one-click-away-khanmigo-two-year-school-experiment-2026|un ensayo controlado aleatorizado de dos años con Khanmigo (Oreopoulos y Low, 2026)]], incluso con acceso gratuito y tiempo de práctica obligatorio, el estudiante medio con dificultades escribió al tutor de IA en solo ~17% de las sesiones con errores, en su mayoría con respuestas escuetas o clics, lo que concuerda con el hallazgo de la economía de la educación de que las intervenciones que dependen de la iniciativa llegan a menos estudiantes de los que más se beneficiarían. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al., 2026)]] muestra que la adopción responde mucho a reducir la fricción (la adopción en la primera sesión pasó del 45% al 83% tras simplificar la inscripción), pero entrar no es lo mismo que participar de forma sostenida (la asistencia siguió siendo intermitente).

### Por qué la búsqueda de ayuda improductiva perjudica el aprendizaje

La **perspectiva de las affordances** explica un mecanismo clave: cuando una interfaz hace que la ayuda esté disponible de forma constante y destacada (por ejemplo, un «botón de pistas» permanente), envía a quienes aprenden la señal de que la ayuda siempre está ahí, creando una affordance no prevista que puede convertir la tarea en un ejercicio de copia. Acceder rápidamente a las pistas finales elude la construcción activa de esquemas que exige el aprendizaje.([[lak2026-hint-button-unproductive-use]])

### La calidad de la búsqueda de ayuda es medible

Dos indicadores simples e interpretables —las peticiones prematuras de pistas y la lectura superficial de las pistas— pueden calcularse a partir de los registros estándar de tutoría y se asocian de forma consistente con [[learning-gains|resultados de aprendizaje]] reducidos a lo largo de los semestres, incluso tras controlar el [[prior-knowledge|conocimiento previo]]. Esto los hace prácticos para los [[visualization|paneles]] de [[learning-analytics|analítica del aprendizaje]] y para la intervención en tiempo real, a diferencia de los complejos detectores de «juego del sistema» basados en aprendizaje automático.([[lak2026-hint-button-unproductive-use]])

## Diseñar sistemas de IA que promuevan una búsqueda de ayuda productiva

### Andamiar cómo pide ayuda el estudiantado

El entrenamiento explícito en una **búsqueda de ayuda centrada en el razonamiento** —pedir pistas paso a paso y verificación en lugar de respuestas finales— produce mejores resultados que la dependencia acrítica. En un estudio cuasiexperimental de estadística de grado, el acceso guiado al LLM (con entrenamiento en búsqueda de ayuda orientada al razonamiento) condujo a un rendimiento independiente más sólido y a una mejor calibración de la autoevaluación que el acceso irrestricto al LLM. La lección es que **el acceso al LLM por sí solo es una intervención incompleta**; el reto de diseño es andamiar *cómo* usa el estudiantado la IA para que funcione como un compañero de razonamiento y no como una herramienta para obtener respuestas.([[guided-llm-scaffolding-independent-learning]])

El coste de la interacción forma parte de la misma cuestión. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] identifican una **barrera referencial** y una **barrera expresiva** que impiden por completo que quienes aprenden con lápiz óptico pregunten algo a un [[llm|LLM]]: señalar una región de un diagrama o un término de una ecuación no puede expresarse en prosa escrita, y el esfuerzo de formulación recae justo cuando una pregunta es más frágil. Su sistema Penquiry resuelve la referencia ajustando las marcas de tinta a los elementos del documento y amplía las escasas palabras clave escritas a mano a consultas completas mediante autocompletado; dos estudios iterativos de 16 participantes cada uno encontraron que la carga cognitiva y física de la consulta se redujo significativamente. Queda abierto si un menor coste de preguntar produce una búsqueda de ayuda *mejor* o simplemente más frecuente, y los autores proponen un autocompletado temporalmente adaptativo —verificación básica al principio de la sesión y sugerencias de nivel superior después— como vía desde la reducción de la fricción hacia un [[scaffolding|andamiaje que se retira]] y no hacia una muleta permanente.
El andamiaje también puede ofrecerse dentro de la tarea y no antes de ella. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] construyeron HelpCoach, un complemento de las interfaces de chat que evalúa con qué especificidad pide ayuda un estudiante y propone una revisión cuando la pregunta es demasiado vaga, haciendo explícitos el componente de conocimiento y el tipo de andamiaje. En un estudio entre sujetos con 40 estudiantes universitarios que aprendían programación web, quienes usaron HelpCoach escribieron una proporción significativamente mayor de preguntas específicas en sus primeros borradores que una línea base con entrenamiento previo a la tarea (57,3% frente a 40,5%) y retuvieron significativamente más conocimiento una semana después (d = 1,100), mientras que la diferencia de especificidad en la tercera tarea dejó de ser significativa (43,7% frente a 32,1%). Los autores advierten de que la mejora en la retención todavía no puede atribuirse a respuestas más específicas del chatbot.

Una tercera palanca sobre el coste de preguntar es *de dónde* procede la ayuda. [[course-specific-rag-help-seeking-higher-ed-2026|Gray y Hobbs (2026)]] construyeron Beacon, un asistente específico de asignatura basado en [[rag|generación aumentada por recuperación]] y anclado en los materiales aprobados de un módulo de programación, y lo evaluaron con 15 estudiantes de informática y cuatro académicos. El 89% de los participantes valoró sus respuestas como muy alineadas con los materiales del curso y el 66,7% dijo que apoyaba su aprendizaje en lugar de sustituirlo, aunque solo alrededor del 50% al 60% informó de mejoras en la comprensión o la confianza. La motivación es la barrera que documenta esta sección: el 62,5% de esos estudiantes dijo que a veces evitaba pedir ayuda cuando la necesitaba y el 75% informó de ansiedad cuando un tema no tenía sentido, así que se ofrece un canal privado y anclado en el módulo como primer peldaño antes de acudir al profesorado. Los académicos entrevistados mantuvieron vivo el contraargumento: valoraban que Beacon retuviera las soluciones completas y les preocupaba que las herramientas sin restricciones permitieran al estudiantado saltarse una etapa de desarrollo, que es la razón por la que el diseño se gana su lugar al negarse a completar el trabajo.

### Calibrar la confianza mediante la transparencia

Un experimento de aula con 252 estudiantes encontró que **advertir al estudiantado de la falibilidad de la IA aumentó la búsqueda de ayuda** en un sistema de tutoría de matemáticas. La transparencia sobre posibles errores del sistema mejoró la implicación de quienes aprenden con el sistema, lo que vincula la búsqueda de ayuda con la [[trust-calibration|calibración de la confianza]] y el [[hallucination-risk|riesgo de alucinación]].([[ai-fallibility-warning-help-seeking]])

### Repensar la entrega de pistas y andamiajes

Más que eliminar la ayuda, la investigación recomienda rediseñar cómo se ofrece:

- **Disponibilidad retrasada de las pistas** — exigir un tiempo mínimo de implicación o intentos de solución antes de que las pistas (especialmente las finales) sean accesibles.([[lak2026-hint-button-unproductive-use]])
- **Pasar de *si* a *cómo*** — la pregunta clave de diseño es cómo estructurar la entrega de pistas conforme a los principios del esfuerzo productivo, y no si se deben ofrecer pistas.([[lak2026-hint-button-unproductive-use]])

### El problema de la adopción en los tutores basados en LLM

En contextos reales, el estudiantado con frecuencia **se salta el [[scaffolding|andamiaje]] de un [[conversational-ai|chatbot]]**, no necesariamente de forma perjudicial, sino a menudo porque hay un desajuste entre el encuadre pedagógico del chatbot y los propios objetivos de aprendizaje del estudiante. Por eso las canalizaciones de evaluación deben medir no solo si un tutor ofrece andamiaje, sino si el estudiantado *adopta* ese andamiaje, en lugar de dar por supuesto que lo hará.([[rethinking-scaffolding-llm-tutors]])

## Búsqueda de ayuda y aprendizaje autorregulado

La búsqueda de ayuda es parte integral del [[self-regulated-learning|aprendizaje autorregulado]]: una búsqueda de ayuda productiva exige que quienes aprenden supervisen su comprensión, juzguen cuándo se necesita ayuda y seleccionen fuentes adecuadas. En contextos de IA generativa, esto es aún más exigente, ya que el estudiantado también debe ejercer [[agency|agencia]] sobre la IA y mantener una vigilancia epistémica en lugar de deferir a ella. La investigación de esta base de conocimiento respalda la necesidad de [[scaffolding|andamiajes]] que promuevan un uso de la IA más [[agentic-ai|agéntico]] y epistémicamente proactivo, y señala el riesgo de la [[cognitive-offloading|dependencia excesiva]] y de la [[cognitive-offloading|descarga cognitiva]] cuando la búsqueda de ayuda degenera en una búsqueda incondicional de respuestas.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### La búsqueda de ayuda mediada por LLM como proceso de cuatro etapas

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] muestran que, en el estudio cotidiano de materias STEM, la búsqueda de ayuda con LLM no es un acto único, sino un proceso estratificado y dependiente del contexto con cuatro etapas: (1) *decidir si se necesita ayuda* —el estudiantado intenta primero las tareas por su cuenta para preservar el valor de aprendizaje—; (2) *elegir a quién preguntar* —ChatGPT como primer paso de bajo umbral, luego los compañeros para negociar conceptos y después el profesorado para cuestiones complejas o de alto riesgo—; (3) *determinar el tipo de ayuda* —desde pistas y explicaciones hasta andamiar la [[problem-solving|resolución de problemas]], agilizar el trabajo rutinario y ampliar el aprendizaje—; y (4) *juzgar la ayuda recibida* —ejerciendo una confianza selectiva y verificando las salidas de la IA contra el material del curso o con personas—. De forma crucial, el estudiantado prefirió la **búsqueda de ayuda instrumental** (mejorar la comprensión) a la **búsqueda de ayuda ejecutiva** (obtener soluciones), una distinción que los autores proponen adaptar como nuevos ítems de medición del aprendizaje autorregulado para LLM.

En la [[english-education|composición]] totalmente en línea, la disponibilidad de la herramienta no es el cuello de botella. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] observó que los estudiantes que tenían dificultades no eran los que carecían de apoyo, sino los que no reconocían cuándo se necesitaba ayuda, qué recurso encajaba con la tarea o cómo juzgar la retroalimentación una vez recibida; y una salida fluida de [[generative-ai|IA generativa]] se confunde fácilmente con un apoyo autorizado. Su respuesta fue hacer que la búsqueda de ayuda fuera *estructurada* y no solo disponible: puntos de contacto obligatorios que descifran las exigencias de la tarea, mapean los recursos con su justificación, comparan fuentes de retroalimentación y cierran el ciclo con la reflexión.

### Hacer visible el contexto conductual: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] abordan el precursor conductual de la búsqueda de ayuda en la [[cs-education|educación en programación asistida por IA]]: los tutores humanos se adaptan a la conducta observable de quienes aprenden, y no solo a sus peticiones explícitas, pero los tutores de IA carecen de ese contexto. **TutorTrace** es un conjunto de datos y una canalización que hacen computable en tiempo real el contexto conductual de quienes aprenden a partir de la telemetría de bajo nivel del IDE (cuatro despliegues, N=480; ~180.000 eventos, 13.633 segmentos conductuales, 27 métricas), y derivan una taxonomía de la actividad del estudiantado *antes* de la primera consulta a la IA, *entre* consultas consecutivas y *a lo largo* de la sesión. Esto permite a los sistemas clasificar si una consulta refleja una búsqueda de ayuda **guiada** (precedida de trabajo independiente) o **dependiente** (sin trabajo independiente) —AUROC = 0,717 en predicción sobre datos reservados— y predecir consultas inminentes (AUROC = 0,726). Una evaluación preliminar en el aula encontró que las indicaciones conscientes de la conducta redujeron los intervalos entre consultas sin trabajo independiente del 50,0% al 20,7%. Esto conecta la telemetría de [[learning-analytics|analítica del aprendizaje]] con la [[intelligent-tutoring|tutoría adaptativa]] y muestra que el contexto conductual puede operacionalizarse a escala para andamiar *cómo* busca ayuda el estudiantado, en lugar de limitarse a responder a sus preguntas explícitas.

## Implicaciones para el diseño y la investigación

1. **Diseñar deliberadamente las affordances de la búsqueda de ayuda.** Los botones de ayuda permanentes y destacados pueden habilitar estrategias de elusión; retrase el acceso y estructure la entrega para apoyar el [[desirable-difficulties|esfuerzo productivo]].([[lak2026-hint-button-unproductive-use]])
2. **Andamiar la propia búsqueda de ayuda.** Entrene al estudiantado en peticiones centradas en el razonamiento (pistas paso a paso, verificación) en lugar de dar por supuesto que el acceso equivale a un buen uso.([[guided-llm-scaffolding-independent-learning]])
3. **Usar la transparencia para calibrar la confianza.** Advertir de la falibilidad de la IA puede aumentar la búsqueda de ayuda adecuada y la implicación.([[ai-fallibility-warning-help-seeking]])
4. **Medir la adopción, y no solo el andamiaje.** Evalúe si el estudiantado se implica de verdad con el encuadre pedagógico, y no solo si el tutor lo ofrece.([[rethinking-scaffolding-llm-tutors]])
5. **Apoyar la supervisión y la agencia.** Los andamiajes de la búsqueda de ayuda deben reforzar la [[metacognition|metacognición]] y el [[self-regulated-learning|aprendizaje autorregulado]], y proteger frente a la [[cognitive-offloading|dependencia excesiva]].

## Conceptos conectados

- [[learners]] — Quienes aprenden: el paraguas de los conceptos del lado del estudiantado
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — Divulgación y asignación de apoyos institucionales, más allá de la búsqueda de ayuda dentro del curso

## Artículos conectados

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: un sistema interactivo de preguntas y respuestas in situ con lápiz óptico que aprovecha los LLM
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — La búsqueda de ayuda mediada por LLM en STEM: estratificada, instrumental y verificada
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — A un clic de distancia: Khanmigo en un experimento escolar de dos años
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoría virtual con aprendizaje asistido por ordenador: un experimento sobre adopción y aprendizaje
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — El conjunto de datos StudyChat de diálogos entre estudiantado y LLM en un curso de IA
- [[lak2026-hint-button-unproductive-use]] — Las peticiones prematuras de pistas y la lectura superficial de las pistas predicen menores resultados de aprendizaje en un sistema de tutoría inteligente
- [[ai-fallibility-warning-help-seeking]] — Advertir de la falibilidad de la IA aumenta la búsqueda de ayuda en un sistema de tutoría de matemáticas
- [[regulating-ai-tutor-adolescent-srl]] — La brecha entre intención y conducta en la búsqueda de ayuda con IA generativa y el aprendizaje autorregulado de adolescentes
- [[guided-llm-scaffolding-independent-learning]] — El andamiaje guiado con LLM mejora la búsqueda de ayuda centrada en el razonamiento y el aprendizaje independiente
- [[rethinking-scaffolding-llm-tutors]] — El desajuste entre el andamiaje y su adopción por el estudiantado en despliegues reales de tutores basados en LLM
- [[uneven-impact-generative-ai-student-learning-2026]] — Dependencia temprana: consultar la IA generativa antes de pensar por cuenta propia, buscar o acudir a una persona docente predice tanto beneficio como daño (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Alfabetización en recursos en la composición en línea: el cuello de botella es reconocer cuándo se necesita ayuda (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Reducir las barreras al apoyo académico: evaluación de un sistema RAG específico de asignatura para abordar las disparidades en la búsqueda de ayuda en la educación superior
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — El andamiaje adaptativo necesita contingencia: un tutor de IA que escala y se retira según lo que hace quien aprende
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: andamiar una búsqueda de ayuda específica con IA durante la resolución de problemas
- [[guided-ai-tutor-impasse-resolution-2026]] — Examinar la variación en cómo los tutores de IA guiados resuelven los bloqueos del estudiantado
- [[student-query-demand-hybrid-ai-support-2026]] — Qué pide de verdad el estudiantado: estructura de la demanda y potencial de automatización en un sistema de apoyo híbrido
