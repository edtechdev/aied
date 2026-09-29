---
connected_resources: [liascript]
title: Enseñanza de la informática
created: "2026-09-28T19:11:56-04:00"
updated: "2026-09-28T19:11:56-04:00"
type: concept
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment]
discipline: [stem education, cs education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/cs-education
source_updated: "2026-09-25T09:57:33-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Enseñanza de la informática** — la educación en [[science-education|ciencias de la computación]] es la subdisciplina STEM más investigada de la base de conocimiento, beneficiada por una alineación natural entre las herramientas de IA y las tareas de programación. La generación de código, la asistencia a la depuración y la revisión automática de código son sus principales aplicaciones de IA. Como el estudiantado aprende a construir las mismas herramientas que utiliza, la enseñanza de la informática ocupa el centro de los debates sobre alfabetización en IA, rediseño curricular, ingeniería de software agéntica y la frontera entre el aprendizaje genuino y la [[cognitive-offloading|dependencia excesiva]].

## Preguntas para reflexionar

- Si la IA ya puede escribir código que aprueba exámenes reales de programación, ¿qué debería seguir aprendiendo a hacer a mano el estudiantado, y qué debería dejar de enseñar el currículo?
- La [[research-methods-aied|investigación]] encontró que una mayor confianza en un asistente de programación con IA predecía una PEOR capacidad de distinguir las sugerencias correctas de las engañosas. ¿En qué se diferencia la confianza de la dependencia apropiada, y cómo enseñaría esta última?
- En la coprogramación entre estudiantado e IA, casi el 80% de las interacciones se apoyaban en estrategias no orientadas al aprendizaje, como externalizar las respuestas, y solo alrededor de 1 de cada 9 mostraba una [[student-engagement|implicación]] epistémica profunda. ¿Por qué el aprendizaje genuino rara vez ocurre por defecto cuando la IA está disponible?
- Un agente de [[learning-by-teaching|aprendizaje mediante la enseñanza]] que era demasiado competente socavó la práctica de depuración del estudiantado. ¿Haría deliberadamente falible a un tutor de IA, y si es así, cómo?
- A medida que la IA automatiza la implementación, los currículos pasan de escribir código a verificar y dirigir artefactos generados por IA. ¿Qué competencias nuevas exige eso y qué podría perderse en ese cambio?
- El estudiantado construye las mismas herramientas que utiliza. ¿Cómo cambia el ser a la vez constructor y usuario de la IA lo que debería aprender sobre sus límites, y sobre su ética?

## Introducción

### La IA en la enseñanza de la informática

- **Generación y completado de código:** [[code-review-genai-cs1|la revisión de código de CS1]], [[dura-llm-cs2|DURA para CS2]] y [[prompt-problems-nl-programming-mistakes|los errores de programación en lenguaje natural]] examinan cómo el estudiantado usa la IA para generar código y qué aprende de ello.
- **Agentes conversacionales para principiantes ([[meta-analysis-systematic-review|revisión de alcance]]):** [[conversational-agents-novice-programmers-scoping-2025|Barzanji y Loitsch (2025)]] mapean 23 estudios (2019–junio de 2024) sobre [[conversational-ai|agentes conversacionales]] para programadores principiantes y documentan un giro desde los chatbots basados en reglas hacia agentes basados en [[llm|LLM]] y en [[rag|RAG]] (con la [[rag|generación aumentada por recuperación]] reduciendo la [[hallucination-risk|alucinación]]) y hacia el apoyo a la tutoría personalizada (por ejemplo, InfoBot, ProbSol-Bot, Lint Bot, Profe Alex). Destaca que solo 4 de los 23 estudios fundamentan su diseño en la [[learning-theories|teoría del aprendizaje]] y que 17 de los 23 prototipos son solo en inglés pese a que la mayor parte de la investigación proviene de países no anglófonos, lo que señala una base [[pedagogy|pedagógica]] débil y una brecha de inclusión para el diseño futuro de agentes conversacionales en la programación introductoria.
- **Apoyo a la depuración:** [[debugtracker-classroom-debugging|las herramientas de depuración]], [[chat-debugging-human-ai-collaboration-circuits|la colaboración humano-IA para la depuración]] y [[golrang-propact-pair-programming-2026|el modelado diádico de la programación en parejas]] aprovechan la IA para identificar y reparar errores.
- **Evaluación automatizada:** [[automated-grading-linux-bash-examinations-large-language-models|la calificación de Linux Bash]], [[llm-automated-grading-programming-comparison-2026|una comparación de calificación a gran escala con 18 modelos]] y [[llm-intervention-design-cs-review|la revisión de intervenciones con LLM]] evalúan la evaluación automática de código. La seguridad de ese flujo de trabajo es una cuestión aparte: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] hizo un ejercicio de equipo rojo sobre una tarea rutinaria de calificación con IA y encontró que las instrucciones ocultas dentro de un archivo entregado elevaron la nota de un ensayo suspenso sin ninguna advertencia visible, en 9 de 9 iteraciones con una estrategia y en 17 de 18 con otra, evidencia de que la robustez de quien califica pertenece a la lista de comprobación de la [[assessment-validity|validez de la evaluación]] junto con la precisión.
- **Medios de aprendizaje generados por IA:** [[ai-generated-traces-novice-programmers|los rastros animados generados]] muestran que las visualizaciones generadas por IA pueden ayudar al aprendizaje inmediato, pero deben personalizarse: el estudiantado con implicación media experimentó un descenso de rendimiento consistente con el efecto de inversión por expertise.
- **La crítica de analogías con IA generativa como recurso didáctico:** [[student-reception-genai-analogies-computing-2026|Bernstein y Sibia (2026)]] fundamentan la recepción de analogías con IA generativa en CS2: diez estudiantes que ya habían cursado CS2 auditaron analogías generadas por IA sobre listas enlazadas y recursión y rechazaron las correspondencias que fallaban estructuralmente, como una analogía de ruta entre islas que mapeaba a una lista circular en lugar de a una simplemente enlazada, o un peloteo de bádminton ofrecido para la recursión pese a no tener un input que se reduzca garantizadamente, ante lo cual un estudiante propuso el golf. El trabajo sostiene que la crítica de analogías es en sí misma una comprobación de la comprensión de conceptos, lo que convierte las analogías de IA defectuosas en un recurso didáctico utilizable y no en un peligro que haya que filtrar, y recomienda asignarlas como objetos que hay que inspeccionar y reparar.
- **Modelado de [[misconceptions|ideas erróneas]]:** [[student-misconceptions-conditionals-loops-taxonomy|una taxonomía de ideas erróneas sobre condicionales y bucles]] da a los sistemas automatizados un vocabulario preciso para diagnosticar errores de principiantes.
- **Ideas erróneas estratégicas generadas por modelos:** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] construyeron SocraticTrap-CS en torno a 35 conceptos del currículo CS2023 de la ACM/IEEE —algoritmos, lenguajes de programación, bases de datos, redes y sistemas operativos— y pidieron a siete modelos de pesos abiertos una explicación fluida y autorizada que descansara en un error sutil. Seis de los siete produjeron una idea errónea estratégica confirmada por especialistas para el 91% o más de los conceptos consultados (221 de 241 segmentos, 91,7%), sin diferencias significativas entre dominios de la informática; dominaron los errores conceptuales (66,5% conceptuales frente a 33,5% fácticos, y ninguno puramente lógico), y tanto la persuasividad como el tipo de error variaron por dominio. Los autores recomiendan por ello contramedidas sensibles al dominio —comprobaciones centradas en el razonamiento en cursos con mucha programación, contraste con las especificaciones de protocolo en redes— y evaluar la [[automated-question-generation|generación automática de preguntas]] y las explicaciones escritas por IA por su [[trust|fiabilidad]] pedagógica y no solo por su corrección.
- **Rendimiento en [[authentic-assessment|evaluaciones auténticas]]:** [[genai-oop-programming-assessments-2026|Lepp y Kaimre (2026)]] muestran que los sistemas de [[generative-ai|IA generativa]] de 2026 superan a la cohorte media de estudiantes en [[assessment|evaluaciones]] auténticas de programación orientada a objetos de nivel introductorio y a menudo obtienen la puntuación máxima en tareas de programación más largas, pero siguen teniendo dificultades con las interfaces, las clases abstractas, la herencia y las preguntas basadas en imágenes, patrones de error recurrentes que el profesorado puede aprovechar al diseñar evaluaciones.
- **Modelado predictivo para el apoyo a estudiantes en riesgo:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries y Koprinska (2025)]] muestran que los árboles de decisión intrínsecamente interpretables entrenados con características de los registros de interacción con el contenido predicen con precisión el progreso a nivel de módulo en cursos de programación en línea a gran escala (85–91% de precisión en cuatro cursos de K-12) y señalan resultados de abandono por «no entrega», lo que da al profesorado una ventana de 7–8 días para [[teacher-role|intervenir]] con [[learners|estudiantes]] con dificultades y desconectados antes de los plazos de los módulos, complementando el trabajo sobre calificación automatizada y predicción de abandono anterior.

### Pedagogía de la programación: de los bloques al aprendizaje corporeizado y basado en juegos

La enseñanza de la programación abarca desde la programación introductoria basada en bloques hasta el desarrollo de software avanzado, y fundamenta cada vez más el código abstracto en resultados concretos y observables.

- **Programación visual basada en bloques:** entornos como Scratch y Blockly permiten a los principiantes encajar bloques gráficos en lugar de escribir texto, eliminando los errores de sintaxis y haciendo visible la estructura del programa, algo especialmente valioso para el estudiantado más joven y para controlar [[educational-robotics|robots educativos]]. En la era de la IA se combinan cada vez más con agentes conversacionales de IA (por ejemplo, [[microbit-robotics-machine-learning-teacher-training-2026|Micro:bit + MakeCode en la formación docente]], [[cstutorbench-slm-tutors|tutores con modelos de lenguaje pequeños]]).
- **Programación por bloques [[embodied-learning|corporeizada]]:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] combina la programación basada en bloques con un agente conversacional de IA para la enseñanza y con la ejecución corporeizada de un robot, creando un bucle iterativo de creación, ejecución, observación y revisión que preserva la [[agency|agencia]] de quien aprende.
- **Control robótico en lenguaje natural:** [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] permite a los principiantes controlar robots simulados mediante instrucciones en lenguaje natural, lo que rebaja la barrera para programar robots sin exigir conocimientos de código de bajo nivel.
- **Robótica y pensamiento computacional:** [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] vincula el pensamiento computacional con la robótica educativa en los currículos STEAM de secundaria, y [[microbit-robotics-machine-learning-teacher-training-2026|la investigación sobre formación docente]] sostiene que las actividades de robótica y aprendizaje automático deberían integrarse en la [[teacher-education|formación del profesorado]].
- **Aprendizaje basado en juegos y gamificado:** [[game-based-gamified-robotics-education-review-2026|una revisión sistemática]] compara el aprendizaje basado en juegos (adecuado para entornos informales) y la gamificación (adecuada para aulas formales) en la educación en robótica, que hace hincapié en la programación introductoria y los kits modulares.
- **Robótica basada en proyectos:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] enseña programación de robótica mediante un [[project-based-learning|proyecto]] ágil que abarca todo un semestre y aborda la brecha entre teoría y práctica en la educación superior.
- **Impacto de los LLM en los [[learning-gains|resultados de aprendizaje]]:** [[jost-llm-programming-education-learning-outcomes|Jošt et al. (2024)]] y [[genai-meta-analysis-programming-learning|un metaanálisis sobre la IA generativa y el aprendizaje de la programación]] examinan si las herramientas asistidas por IA ayudan o socavan el rendimiento en programación.

### La transformación del currículo en la era de la IA

La pregunta «¿qué debería seguir aprendiendo a hacer a mano el estudiantado?» está reconfigurando los programas de informática.

- **De la implementación a la verificación:** [[reshaping-cs-education-genai|Reshaping Undergraduate CS Education]] sostiene que, a medida que la IA generativa automatiza la programación, la depuración y las pruebas de nivel de implementación, los currículos deben girar hacia *comprender y verificar artefactos generados por IA*, preservando el diseño de sistemas, la abstracción y la [[critical-thinking|evaluación crítica]] mientras se resta peso a los detalles de implementación de bajo nivel. Esto se alinea con los marcos de [[ai-literacy|alfabetización en IA]] que priman la evaluación sobre la generación.
- **La ingeniería de software agéntica como disciplina:** [[ase-26-agentic-software-engineering-curriculum|ASE-26]] formaliza dirigir agentes en lugar de escribir código —enseñando auditabilidad, ingeniería de contexto, verificación, flujos de trabajo multiagente y AgentOps— y sitúa la competencia en [[agentic-ai|IA agéntica]] como un currículo estructurado y andamiado y no como un dominio de la sintaxis.
- **Nuevas pedagogías y modelos de evaluación:** [[test-driven-ai-assisted-learning|el aprendizaje asistido por IA guiado por pruebas]] sustituye las clases magistrales por el estudio [[self-directed-learning|autodirigido]] asistido por IA, con pruebas semanales a libro cerrado como puerta de acceso, preservando la responsabilidad individual mientras los agentes de IA escalan la producción de materiales y la corrección bajo [[human-in-the-loop-ai|supervisión humana]].
- **Qué predice el éxito en la [[vibe-coding|programación por instinto]] y qué conviene seguir enseñando:** [[vibe-coding-writing-cs-achievement-2026|un estudio preregistrado de CHI 2026 (N=100)]] sobre programación por instinto puramente «sin código» encontró que tanto el rendimiento en informática (r = .39) como la competencia en comunicación escrita (r = .29) predecían de forma independiente el desempeño, y que el rendimiento en informática seguía siendo significativo incluso tras controlar la capacidad cognitiva general y aportaba aproximadamente el doble de varianza única que la habilidad de escritura. Como el entorno ocultaba el código generado, el conocimiento de informática solo podía ayudar de forma indirecta (descomposición de problemas, pensamiento algorítmico), lo que convierte la estimación de informática en un *límite inferior* para los flujos de trabajo asistidos por IA que además permiten editar. Los autores sostienen que los currículos deberían ponderar la comunicación escrita junto con los fundamentos de informática, en lugar de tratar la programación por instinto como el dominio de la sintaxis vuelto obsoleto.

### Alfabetización en IA, agencia y el riesgo de dependencia excesiva

Como la programación es donde la asistencia de la IA es más potente, es también donde los modos de fallo son más visibles.

- **Confianza ≠ dependencia apropiada:** [[trust-reliance-ai-education-2026|La confianza y la dependencia de la IA (Pitts et al.)]] encuentran que una mayor confianza en un asistente de IA predecía una discriminación *peor* entre sugerencias correctas y engañosas durante la [[problem-solving|resolución de problemas]] en Python, moderada por la [[ai-literacy|alfabetización en IA]] y la necesidad de cognición. El objetivo es la calibración, no la confianza.
- **Alfabetización epistémica en IA:** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]] muestra que, en la coprogramación entre estudiantado e IA, el 78,8% de las interacciones se apoyaban en objetivos no orientados al dominio y en estrategias poco fiables (externalizar, buscar verificación), y solo el 11,1% mostraba una implicación epistémica alta; el aprendizaje genuino rara vez emerge sin un apoyo deliberado del diseño.
- **Intervenciones estructurales contra la dependencia excesiva del copiar y pegar:** [[soft-barriers-copying-ai-programming-2026|las barreras blandas contra el copiado en la programación asistida por IA]] evalúan intervenciones de diseño ligeras (por ejemplo, mecanismos que desincentivan el copiar y pegar a ciegas la salida de la IA) y encuentran que pueden reducir la dependencia excesiva sin bloquear la asistencia de la IA, evidencia de que el riesgo de [[cognitive-offloading|dependencia excesiva]] en la enseñanza de la informática es sensible a arreglos de diseño didáctico, no solo a la formación del estudiantado o a las prohibiciones.
- **Agentes enseñables y práctica productiva:** [[chatgpt-teachable-agent-programming-lbt-2024|el aprendizaje mediante la enseñanza con ChatGPT]] mejoró las ganancias de conocimiento y la calidad del código, pero socavó la práctica de corrección de errores porque el agente es demasiado competente; una lección de diseño: hacer a los agentes *deliberadamente falibles* para preservar la depuración.
- **Gobernanza de la asistencia:** [[llm-programming-support-governance-cs-education|una revisión de alcance de 90 sistemas]] presenta el **marco PEA** (Política, Aplicación, Autoridad) para acotar y controlar la asistencia de los LLM, un vocabulario comparativo para diseñar [[scaffolding|andamiaje]] que limite la dependencia excesiva.
- **Contexto conductual para la tutoría adaptativa con IA:** [[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] presentan **TutorTrace**, un conjunto de datos y un flujo de procesamiento que hace computable en tiempo real el contexto conductual de quien aprende a partir de la telemetría del IDE en cursos de Python asistidos por IA (N=480). Deriva una taxonomía de la actividad antes, entre y a través de las consultas a la IA, y puede clasificar si una consulta inminente refleja una [[help-seeking|búsqueda de ayuda]] guiada o dependiente (AUROC=.717) y predecir consultas inminentes (AUROC=.726); los prompts conscientes del comportamiento redujeron los intervalos de consulta sin trabajo independiente del 50,0% al 20,7% en una evaluación preliminar. Esto muestra cómo la telemetría conductual puede hacer que los [[intelligent-tutoring|tutores de programación con IA]] se adapten al esfuerzo real de quien aprende y no solo a sus peticiones explícitas.
- **La dualidad de construir lo que uno usa:** la posición única del estudiantado de informática crea a la vez conciencia [[metacognition|metacognitiva]] de los límites de la IA y un riesgo real de [[cognitive-offloading|dependencia excesiva]] del código generado por IA. [[code-review-genai-cs1|Las entrevistas sobre revisión de código]] y [[critical-engagement-code-completion|los estudios sobre implicación crítica]] abordan directamente esta tensión.

- **Programación agéntica y comprensión en el aprendizaje basado en proyectos en equipo:** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka et al. (2026)]] introdujeron el desarrollo guiado por especificaciones con [[agentic-ai|agentes de IA]] en un curso de proyecto de ingeniería de software de grado y encontraron que el caudal de implementación (líneas de código añadidas) creció entre 2022 y 2025, mientras que el uso intensivo de IA coincidió con caídas en la comprensión del código que solo se recuperaron tras comprobaciones individuales con el profesorado: evidencia directa de que las ganancias de caudal no garantizan la comprensión y de que la [[cognitive-offloading|dependencia excesiva]] en la programación asistida por IA es sensible a la supervisión didáctica.

### Equidad, cultura y quién accede a la informática

- **Ampliar la participación:** [[suacode-african-students-motivations|SuaCode]] documenta las motivaciones para programar desde el teléfono móvil entre estudiantes africanos (menos del 1% de quienes terminan la secundaria tiene habilidades fundamentales de programación), lo que informa MOOC accesibles y con apoyo de IA para [[equity-in-ai-education|contextos de bajos recursos]].
- **Neurodivergencia y colaboración:** [[neurodivergent-computing-students|el estudiantado de informática neurodivergente]] informa de incomodidad con estructuras de colaboración ambiguas; las tareas estructuradas, los equipos pequeños y estables y los roles explícitos mejoran la [[accessibility|accesibilidad]], lecciones de diseño para las herramientas de IA que entran en las aulas de informática.
- **La cultura moldea la ética percibida:** [[cross-cultural-student-perceptions-genai-computing|estudiantes de informática canadienses y surcoreanos]] juzgaron de forma distinta prácticas idénticas de programación asistida por IA pese a políticas funcionalmente idénticas: la armonización de políticas no produce una armonización de percepciones, una preocupación de [[academic-integrity|integridad académica]] y de [[equity-in-ai-education|equidad]].
- **[[explainable-ai|Transparencia]] en la colaboración:** [[student-perception-ai-use-collaboration|Graf et al.]] encuentran que las creencias desalineadas de las parejas sobre el uso de IA del otro predicen puntuaciones de proyecto más bajas, especialmente en el estudiantado con menor rendimiento; puede que hagan falta mecanismos de transparencia (declaraciones, registros compartidos) en la programación colaborativa.

### La educación ética y el mundo laboral

- **Brecha entre ética y conducta:** [[cost-of-ethics-crisis-cs-ethics-education|la «crisis del coste de la ética»]] muestra que el estudiantado de informática, pese a la educación ética contemporánea, prioriza la remuneración, la ubicación y la cultura por encima de las preocupaciones [[ethics|éticas]] al buscar empleo, una brecha crítica en cómo la enseñanza de la ética se traslada a la conducta.
- **Reconfiguración del mundo laboral:** [[ai-engineering-computing-workforce-grey-literature-2026|una revisión sistemática de la literatura gris estadounidense]] enmarca el «problema del doble tren» —el rápido cambio de la IA compitiendo con la adaptación [[governance|institucional]]— y urge competencias duraderas en IA, ética y gobernanza, y credenciales basadas en habilidades alineadas con roles emergentes (por ejemplo, la [[prompt-engineering|ingeniería de prompts]], la auditoría de IA, la [[educational-policy-ai|política de IA]]).

### Conexiones

La enseñanza de la informática se conecta con [[computational-thinking|el pensamiento computacional]], [[stem-education|la educación STEM]], [[automated-assessment|la calificación automatizada]], [[prompt-engineering|la ingeniería de prompts]], [[ai-literacy|la alfabetización en IA]], [[agentic-ai|la IA agéntica]], [[curriculum-design|el diseño curricular]], [[human-ai-collaboration|la colaboración humano-IA]], [[higher-ed|la educación superior]], [[k-12|la educación K-12]] y [[professional-training|la formación profesional]]. Su vecina aplicada más cercana es [[information-technology|la tecnología de la información]]: la enseñanza de la informática toma como objeto el programa y el algoritmo, mientras que la enseñanza de TI toma el sistema organizativo desplegado y el juicio del profesional sobre él; por eso ambos campos debaten daños distintos de la IA —si la generación de código erosiona la habilidad de programar frente a si la resolución de problemas con IA erosiona la habilidad de diagnóstico— y piden cosas distintas a sus egresados: si saben construir un sistema frente a si saben gobernar los sistemas que administran. Es el dominio donde las herramientas de [[ai-education|AIED]] se usan y se construyen a la vez, lo que lo convierte en un banco de pruebas para la [[intelligent-tutoring|tutoría inteligente]], la [[educational-robotics|robótica educativa]], el [[collaborative-learning|aprendizaje colaborativo]], el [[game-based-learning|aprendizaje basado en juegos]] y los riesgos de la [[cognitive-offloading|dependencia excesiva]].

**Una síntesis de 72 estudios y el marco VIE.** [[kumar-genai-computing-education-systematic-review-2026|Kumar, Wongsirichot y Nanthaamornphong (2026)]] revisaron la literatura empírica sobre IA generativa en la enseñanza de la informática y la programación (enero de 2022 – abril de 2026, 72 estudios, 33 sedes) y ponen en primer plano exactamente el rasgo estructural que hace distintiva la disciplina: la IA genera el propio artefacto evaluable, de modo que usar la herramienta, aprender la habilidad y ser evaluado se colapsan en una sola pulsación. Su síntesis de 14 temas encuentra que el efecto más replicado del campo —las ganancias de eficiencia y de finalización a corto plazo (36 estudios)— es también el más engañoso: esas ganancias no se [[transfer-of-learning|transfieren]] al desempeño sin ayuda (21 estudios), y el [[prior-knowledge|conocimiento previo]] modera si la asistencia se convierte en habilidad duradera o en una muleta. La investigación sobre [[ai-detection|detección]] es escasa (3 estudios), mientras que el rediseño de cursos está comparativamente bien respaldado (25 estudios), y la revisión consolida el corpus en tres requisitos de diseño interdependientes —Verificación, Implementación y Equidad— según los cuales la implicación crítica con la salida de la IA debe ser un componente calificado y observable del trabajo del estudiantado y no una aspiración dejada a su discreción ([[scaffolding|andamiaje]], [[assessment-validity|validez de la evaluación]]).

## Implicaciones para el profesorado de informática

- **Diseñe evaluaciones por las que la IA no pueda pasar sin esfuerzo.** Aproveche los patrones de fallo recurrentes de la IA generativa (interfaces, clases abstractas, herencia, tareas basadas en imágenes) en lugar de prohibir las herramientas sin más: [[genai-oop-programming-assessments-2026|los sistemas de IA generativa siguen teniendo dificultades ahí]].
- **Calibre la confianza, no se limite a construirla.** [[trust-reliance-ai-education-2026|La investigación sobre confianza y dependencia]] muestra que una mayor confianza predecía una discriminación *peor* de las sugerencias engañosas de la IA; enseñe verificación y evaluación crítica, moderadas por la alfabetización en IA y la necesidad de cognición.
- **Mantenga viva la depuración y el [[desirable-difficulties|esfuerzo productivo]].** Elija herramientas o agentes deliberadamente falibles ([[chatgpt-teachable-agent-programming-lbt-2024|aprendizaje mediante la enseñanza]]) que preserven la práctica de corrección de errores, y personalice los medios generados por IA para evitar los efectos de inversión por expertise ([[ai-generated-traces-novice-programmers|inversión por expertise]]).
- **Gobierne explícitamente la asistencia de la IA.** Defina política, aplicación y autoridad para el apoyo con LLM ([[llm-programming-support-governance-cs-education|PEA]]) en lugar de dejar los límites implícitos.
- **Oriente los currículos hacia la verificación y la dirección de agentes.** A medida que la IA generativa automatiza la implementación, enseñe a comprender y verificar artefactos de IA ([[reshaping-cs-education-genai|reformar los currículos]]) y habilidades estructuradas de ingeniería de software agéntica ([[ase-26-agentic-software-engineering-curriculum|ASE-26]]).
- **Estructura la colaboración para todo el estudiantado.** Los equipos más pequeños y estables, los roles explícitos y la transparencia en el uso de IA apoyan al estudiantado [[neurodiversity|neurodivergente]] y una colaboración justa, sobre todo donde las creencias desalineadas sobre el uso de IA bajan las puntuaciones de los proyectos.

- **Explicaciones adaptativas de los errores de programación con LLM (2026):** un estudio de crowdsourcing (N=103) encontró que los mensajes de error reescritos por LLM mejoran la legibilidad, pero que el rendimiento objetivo en la depuración depende de ajustar el estilo de la explicación (pragmática o contingente) a la habilidad de quien programa; una idea de andamiaje para la enseñanza de la programación asistida por IA ([[llm-adaptive-programming-error-explanations-2026]]).

## Conceptos conectados

- [[computational-thinking]]
- [[vibe-coding]]
- [[stem-education]]
- [[information-technology]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[k-12]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[teacher-education]]
- [[professional-training]]
- [[ai-education]]
- [[collaborative-learning]]
- [[prior-knowledge]]
- [[scaffolding]]
- [[assessment-validity]]

## Artículos conectados
- [[kumar-genai-computing-education-systematic-review-2026]] — Revisión sistemática de 72 estudios: ganancias de eficiencia que no se transfieren, y el marco VIE
- [[vibe-coding-writing-cs-achievement-2026]] — El rendimiento en informática y las habilidades de escritura predicen la competencia en programación por instinto (CHI 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[mechanical-engineering-ai-curriculum-2026]] — Currículo de educación en IA basado en proyectos en ingeniería térmica
- [[zhan-chapman-genai-cs-education-2026]] — La IA generativa en la enseñanza de la informática
- [[code-review-genai-cs1]] — Revisión de código de CS1 de código generado por IA
- [[dura-llm-cs2]] — DURA: asistentes con LLM para CS2
- [[reshaping-cs-education-genai]] — reformar los currículos universitarios de informática para la IA generativa
- [[ase-26-agentic-software-engineering-curriculum]] — Currículo de ingeniería de software agéntica ASE-26
- [[test-driven-ai-assisted-learning]] — Aprendizaje asistido por IA guiado por pruebas
- [[genai-oop-programming-assessments-2026]] — Rendimiento de la IA generativa en evaluaciones auténticas de programación orientada a objetos de nivel introductorio (Lepp y Kaimre 2026)
- [[trust-reliance-ai-education-2026]] — confianza frente a dependencia apropiada durante la resolución de problemas en Python
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — alfabetización epistémica en IA en la coprogramación entre estudiantado e IA
- [[chatgpt-teachable-agent-programming-lbt-2024]] — aprendizaje mediante la enseñanza con ChatGPT
- [[llm-programming-support-governance-cs-education]] — marco PEA para acotar la asistencia de los LLM
- [[conversational-agents-novice-programmers-scoping-2025]] — Revisión de alcance de agentes conversacionales para programadores principiantes
- [[debugtracker-classroom-debugging]] — Depuración en el aula con DebugTracker
- [[llm-automated-grading-programming-comparison-2026]] — Comparación de calificación automatizada con 18 modelos
- [[ai-generated-traces-novice-programmers]] — rastros animados generados por IA
- [[student-misconceptions-conditionals-loops-taxonomy]] — taxonomía de ideas erróneas sobre condicionales y bucles
- [[jost-llm-programming-education-learning-outcomes]] — impacto de los LLM en los resultados de aprendizaje de la programación (Jošt et al.)
- [[genai-meta-analysis-programming-learning]] — metaanálisis de la IA generativa y el aprendizaje de la programación
- [[golrang-propact-pair-programming-2026]] — modelado diádico de la programación en parejas
- [[critical-engagement-code-completion]] — implicación crítica con el completado de código
- [[suacode-african-students-motivations]] — SuaCode: programación desde el teléfono móvil en África
- [[cross-cultural-student-perceptions-genai-computing]] — percepciones transculturales de la programación asistida por IA
- [[neurodivergent-computing-students]] — estudiantado de informática neurodivergente
- [[microbit-robotics-machine-learning-teacher-training-2026]] — Micro:bit + aprendizaje automático en la formación docente
- [[computational-thinking-educational-robotics-secondary-2026]] — pensamiento computacional y robótica educativa
- [[roboblockly-conversational-block-robotics-ct-2026]] — programación por bloques corporeizada con RoboBlockly
- [[edusim-llm-robotic-simulation-education-2026]] — control robótico en lenguaje natural con EduSim-LLM
- [[llm-computational-thinking-physics-2026]] — apoyo de los LLM al pensamiento computacional en física
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — El conjunto de datos StudyChat de diálogos entre estudiantado y LLM en un curso de IA
- [[student-ai-inquiry-types-cs2-2026]] — Análisis de los tipos de consultas en la interacción entre estudiantado e IA
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT resuelve deberes de Qiskit; diseño calificable automáticamente
- [[llm-adaptive-programming-error-explanations-2026]] — Explicaciones adaptativas de los errores de programación con LLM
- [[astor-computational-thinking-meta-review-2026]] — Meta-revisión que sitúa el pensamiento computacional en la enseñanza de la informática
- [[soft-barriers-copying-ai-programming-2026]] — Resistencia al copiar y pegar en la programación asistida por IA
- [[predicting-attrition-competitive-programming]] — Predicción del abandono del estudiantado en la programación competitiva
- [[zhang-ml-student-progress-programming-2026]]
- [[spec-driven-development-ai-agents-sdpbl-2026]] - Desarrollo guiado por especificaciones con agentes de IA en un curso de aprendizaje basado en proyectos de software; caudal frente a comprensión
- [[genai-cognitive-tutor-programming-2026]] — La IA generativa como tutor cognitivo informal en el aprendizaje de la programación para principiantes
- [[student-reception-genai-analogies-computing-2026]] — Defectuosas pero memorables: recepción crítica del estudiantado de las analogías con IA generativa personalizadas por interés en la enseñanza de la informática
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: evaluación de la capacidad de los modelos para generar ideas erróneas estratégicas en todo el currículo de informática
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Equipo rojo de inyección de prompts en la calificación mediada por IA: instrucciones ocultas que mueven la nota sin ser detectadas
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: generación aumentada por recuperación para la enseñanza de la informática teórica: un marco integral de evaluación para el análisis de algoritmos y la teoría de la complejidad
- [[llms-unplugged-teaching-resources-2026]] — LLM desenchufados: recursos didácticos para un mundo con ChatGPT
- [[instructional-governance-design-computing-education-2026]] — Gobernanza didáctica por diseño: un marco para la IA en la enseñanza de la informática

- [[judgment-centred-software-engineering-education-2026]] — Una revisión poshype y un marco para la educación en ingeniería de software aumentada por IA
- [[llm-graders-computer-science-exams-2026]] — Dónde aciertan y dónde fallan los calificadores con LLM: evidencia de dos exámenes de informática