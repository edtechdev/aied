---
connected_resources: [lesson-md, liascript, onmicro-ai]
title: Plataforma edtech
created: "2026-09-28T21:09:18-04:00"
updated: "2026-10-03T02:57:43-04:00"
connected_faqs: [designing-educational-ai-software]
type: concept
foundations: [ai-education]
pedagogy: [online-teaching-and-learning]
technology: [adaptive-learning, generative-ai, llm, personalized-learning, edtech-platform]
ethics: [equity-in-ai-education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/edtech-platform
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Plataforma edtech** — los sistemas digitales, los sistemas de gestión del aprendizaje (LMS), los sistemas de tutoría y los entornos de aprendizaje en línea a través de los cuales la IA llega a quienes aprenden y a quienes enseñan. En la IA en la educación, la plataforma es la *capa de infraestructura* que determina si una capacidad de IA llega al estudiantado, cómo se despliega (abierta o propietaria, integrada o independiente) y quién puede acceder a ella, adaptarla y evaluarla. La investigación de esta base de conocimiento examina las plataformas desde varios ángulos: su diseño, sus restricciones de adopción y de implicación, su gobernanza institucional y sus implicaciones de equidad.([[access-not-enough-ai-tutoring-2026]]) ([[oatutor-open-source-adaptive-tutor-2023]])

## Preguntas para reflexionar

- Piense en la última herramienta de tutoría o de retroalimentación con IA con la que se topó. Ahora piense dónde «vivía» en realidad: el LMS, la plataforma o la aplicación que la empaquetaba. ¿Ese contenedor le parece un vehículo de entrega neutro, o sus decisiones de diseño (abierta o propietaria, integrada o independiente, en la nube o local) podrían haber cambiado lo que usted podía hacer con él?
- Un estudio encontró que casi la mitad del estudiantado nunca usó una plataforma de tutoría con IA bien diseñada, y que el uso intensivo se inclinaba hacia el estudiantado de mayor rendimiento. Si una herramienta es eficaz «en principio» pero el estudiantado no la usa, ¿el problema real es la capacidad o la plataforma? ¿Qué significaría eso para cómo evalúa usted la tecnología educativa?
- Las plataformas de IA propietarias pueden confinar a quien investiga a un puñado de sistemas cerrados, mientras que plataformas abiertas como OATutor permiten a cualquiera bifurcar, experimentar y publicar. ¿Qué podría perderse —para la investigación, la equidad y la autonomía institucional— cuando la educación con IA se entrega a través de plataformas cerradas y opacas?
- ¿Cuánto moldea el aprendizaje que realmente ocurre en una plataforma su modelo de negocio —quién paga, quién es dueño de los datos, qué se optimiza—? ¿Dónde buscaría usted para ver esa influencia?
- Algunas plataformas nuevas «nativas de IA» sustituyen el modelo MOOC de un vídeo para muchos estudiantes por un aula multiagente construida en torno a cada persona que aprende. Antes de seguir leyendo, ¿qué le preocuparía perder cuando la instrucción pasa a ser uno a uno con agentes en lugar de uno a muchos con docentes?

## Introducción

La plataforma se sitúa entre un modelo o una capacidad de IA y quien aprende. Es el contenedor que empaqueta la tutoría, la evaluación, la retroalimentación y la administración en algo utilizable y, de forma decisiva, moldea los resultados de aprendizaje a través de sus decisiones de diseño, su accesibilidad y su modelo de negocio subyacente. El concepto abarca sistemas de gestión del aprendizaje como Moodle, plataformas en línea a gran escala como los MOOC, sistemas dedicados de [[intelligent-tutoring|tutoría inteligente]] y plataformas de curso emergentes, agénticas o nativas de IA. Nombrar el contenedor no equivale a nombrar a sus autores: la plataforma es el sistema desplegado, mientras que el actor que decide qué hace es [[educational-technology-developers|quien desarrolla tecnología educativa]], lo que importa aquí porque los hallazgos sobre adopción, sesgo de equidad y contratación que siguen son normalmente consecuencias de decisiones de diseño tomadas antes de que la plataforma llegara siquiera a un aula.

## Qué hace una plataforma en la IA en la educación

Las plataformas de la IA en la educación desempeñan varias funciones distintas:

- **Entregar instrucción y tutoría** — el contenedor de los sistemas de [[intelligent-tutoring|tutoría con IA]] y de [[intelligent-tutoring|tutoría inteligente]], desde tutores integrados en el LMS hasta plataformas independientes de tutoría adaptativa.
- **Gestionar el entorno de aprendizaje** — la organización de cursos, la matriculación, el seguimiento del progreso y la administración que ofrecen los LMS tradicionales.
- **Alojar la evaluación y la retroalimentación** — donde se ejecutan la [[automated-assessment|evaluación automatizada]], la [[formative-assessment|evaluación formativa]] y los [[feedback|bucles de retroalimentación]].
- **Recoger y analizar datos de aprendizaje** — el sustrato de la [[learning-analytics|analítica del aprendizaje]] y del [[student-modeling|modelado del estudiantado]].
- **Gobernar el acceso y el despliegue** — decisiones sobre [[open-source|código abierto]] frente a propietario, local frente a nube, y qué instituciones y qué estudiantes pueden usarla.

## Hallazgos clave de los artículos de la base de conocimiento

### La adopción, y no la capacidad, es a menudo la restricción vinculante

Una plataforma puede ser eficaz en principio y fracasar en la práctica si quien aprende no la usa. Dos [[rct|ensayos controlados aleatorizados]] de una plataforma de tutoría en [[ai-literacy|alfabetización en IA]] (lectura) encontraron que **casi la mitad del estudiantado del grupo de control nunca usó la plataforma** y que quienes la usaban promediaban solo 2–5 minutos por semana, muy por debajo de la dosis necesaria para obtener mejoras en lectura. Un tutor de implicación presencial elevó sustancialmente el uso y la implicación, pero aun así no produjo mejoras en el rendimiento, y quienes la usaban se inclinaban hacia el estudiantado de mayor rendimiento, lo que suscita preocupaciones de equidad.([[access-not-enough-ai-tutoring-2026]])

La secuenciación importa tanto como la capacidad: una revisión de más de 100 estudios sobre IA en la educación (2020-2025) sitúa las plataformas de extremo a extremo en la cima de una pila de adopción, y sostiene que las instituciones deberían resolver la evaluación formativa, la capacidad de liderazgo y las normas compartidas antes de comprar las plataformas que las escalan ([[raza-farooq-aied-review-2020-2025|Raza y Farooq (2025)]]).

La brecha está en el nivel del mensaje, no en los inicios de sesión: en un ensayo controlado aleatorizado por conglomerados de dos años, el 96% del estudiantado probó Khanmigo, pero el estudiante mediano le envió mensajes en solo el 17% de las sesiones en las que cometió un error, y ~14,5% de los mensajes contenían una pregunta o un paso de razonamiento matemático genuino — a \$15 por estudiante al año ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos y Low, 2026]]).

La restricción vinculante es dónde se sitúa la IA dentro de la plataforma: en un ensayo con 6.000 estudiantes de secundaria, el efecto medido provino de puntos de contacto estructurados dentro del entorno de práctica — 2,0 usos de «ayúdame a empezar», 2,3 recorridos posteriores al error y 3,2 explicaciones de pasos por estudiante que alcanzó el dominio — mientras que el acceso a la IA por sí solo aportó poco ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).

### Qué herramientas dice el profesorado que usa, y qué condiciona el acceso

Un censo poco habitual de la elección de plataforma según el profesorado procede de una tipología de 2026 construida a partir de 211 docentes de nueve países: las herramientas que llegan a las aulas son desproporcionadamente las que tienen un plan gratuito, porque disponer de una versión gratuita públicamente disponible fue un criterio de inclusión, y las entradas más nominadas son asistentes de uso general y generadores de medios, no plataformas creadas a propósito. Aproximadamente la mitad de las cincuenta herramientas listadas producen imágenes, audio, vídeo o presentaciones, mientras que los asistentes fundamentados en documentos (NotebookLM, Elicit, SciSpace, Humata, Research Rabbit) forman el grupo más coherente de la categoría de investigación. Los sistemas dedicados de [[intelligent-tutoring|tutoría]] aparecen como un grupo pequeño y específico de una materia, y no como el centro del uso declarado, lo que enmarca el problema de adopción anterior en un entorno más amplio, donde una plataforma compite por la atención con herramientas de uso general que el estudiantado y el profesorado ya tienen abiertas.([[typology-generative-ai-tools-education-2026]])

### El modelo de plataforma importa: abierta frente a propietaria

- **Las plataformas propietarias** crean barreras para la investigación: quien quiere replicar o ampliar experimentos de [[adaptive-learning|aprendizaje adaptativo]] suele quedar confinado a un pequeño número de plataformas cerradas.
- **Las plataformas abiertas** rebajan esa barrera. **OATutor** es el primer sistema de tutoría adaptativa de código abierto construido sobre principios de STI: una base de código con licencia MIT con una biblioteca de contenido de álgebra en Creative Commons, estimación de dominio mediante [[knowledge-tracing|seguimiento del conocimiento]] y pruebas A/B integradas, que permite a quien investiga bifurcar, experimentar y publicar el sistema completo de extremo a extremo.([[oatutor-open-source-adaptive-tutor-2023]])
- **La transparencia está concentrada al principio.** En la misma auditoría de 48 políticas de plataformas, la recogida de datos y la cesión a terceros se declaraban relativamente bien, mientras que la divulgación y la rendición de cuentas específicas de la IA iban por detrás, y 16 de 48 plataformas (el 33%) no hacían ninguna divulgación significativa sobre IA pese a tener funciones de IA visibles ([[edtech-privacy-deferral-2026|Nair y Greenstadt, 2026]]).

- **La API del LMS acota lo que una plataforma integrada con un juego puede evaluar.** Un piloto de hipergamificación que generaba un mundo jugable a partir de contenido de Blackboard no pudo mostrar preguntas de opción múltiple ni de respuesta abierta, porque los tokens con alcance de estudiante no devolvían contenido de preguntas y no existía ningún endpoint para publicar respuestas en tiempo de ejecución ([[hypergamification-game-engine-lms|Yusubov et al., 2026]]).

- **El aislamiento y el coste son variables de diseño de la plataforma.** VISMATIC combina contenedores sin raíz —que, a diferencia de JupyterHub, impiden el movimiento lateral y el compromiso del host— con telemetría de procesos a nivel de API, ejecutando 19 estudiantes y 1.880 eventos registrados en un único nodo Raspberry Pi 5 calificado para 10 a 20 ([[vismatic-secure-sandbox-cs-education|Arroyo et al. (2026)]]).

### Las plataformas nativas de IA están reconfigurando la educación en línea

El propio paradigma de plataforma está evolucionando. **MAIC** (Massive AI-empowered Course) sustituye el modelo MOOC de «un vídeo para N estudiantes» por un aula multiagente impulsada por LLM —«N agentes para 1 estudiante»— usando agentes especializados de Docente, Asistente, Compañero de clase y Analizador para ofrecer aprendizaje personalizado y adaptativo a escala, y reduciendo la producción de un curso de ~\$25K/60 horas a menos de 2 \$/30 minutos.([[mooc-to-maic]]) De forma similar, los diseños de LMS integrados con IA proponen ir más allá de las plataformas dedicadas solo al flujo de trabajo, hacia un apoyo instruccional en tiempo real con IA acotada por la política, sugerencias formativas, repaso espaciado y paneles para el profesorado.([[ai-lms-middle-school-longitudinal]]) En el otro extremo del espectro de despliegue, la IA integrada en el aula debe demostrar su viabilidad en entornos físicos reales. El Community Builder ([[breideband-community-builder-cobi-2026|CoBi]]) —una plataforma para toda el aula que usa reconocimiento de voz y comprensión del lenguaje para visualizar el discurso colaborativo en grupos pequeños— se desplegó con éxito en aulas ruidosas de secundaria usando micrófonos corrientes y una canalización en la nube escalable, lo que muestra que la infraestructura de IA de voz en tiempo real puede funcionar en entornos auténticos de K-12 incluso cuando los desajustes de interfaz (las vistas del profesorado frente a las del estudiantado sobre si la retroalimentación era de grupo o de clase) generaban fricción en el despliegue.

### Funciones de plataforma basadas en intereses y sensibles al contexto

Las plataformas pueden personalizar más allá de los datos de rendimiento. **Taklif.AI** es una plataforma impulsada por LLM que genera tareas universitarias a partir de los **intereses extracurriculares y los contextos culturales** del estudiantado, en línea con la [[culturally-relevant-pedagogy|pedagogía culturalmente relevante]] y alejándose de las tareas idénticas para todos hacia una implicación impulsada por los intereses.([[taklif-ai-interest-based-personalized-assignments]])

## Implicaciones para el diseño y la investigación

1. **Diseñe para la adopción, no solo para la capacidad.** La eficacia de una plataforma depende de si quien aprende se implica de verdad con ella; las estructuras de apoyo, la incorporación inicial y la programación importan tanto como la propia IA.([[access-not-enough-ai-tutoring-2026]])
2. **Trate la estructura de la plataforma como una palanca de equidad.** Quién se beneficia de una plataforma depende del acceso, la infraestructura y las restricciones de implicación, de modo que el diseño de la plataforma debe examinarse con la lente de la [[equity-in-ai-education|equidad]].([[access-not-enough-ai-tutoring-2026]])
3. **Prefiera plataformas abiertas y replicables para la investigación.** Las plataformas de código abierto como OATutor permiten una investigación reproducible sobre aprendizaje adaptativo y una base de evidencia compartida.([[oatutor-open-source-adaptive-tutor-2023]])
4. **Diseñe plataformas nativas de IA con gobernanza y límites.** Una arquitectura que priorice la privacidad, la minimización de datos, los registros auditables y el acceso basado en roles son fundamentales a medida que las plataformas se integran con IA, lo que conecta con las preocupaciones sobre [[privacy|privacidad]] y [[governance|gobernanza]].([[ai-lms-middle-school-longitudinal]])
La privacidad puede incorporarse a la canalización en lugar de a la política: un detector de incidentes en el aula entrenado con trayectorias de postura anonimizadas mantiene fuera del sistema las señales faciales y de apariencia de los menores, aunque todos los métodos perdieron precisión en la transferencia de cero ejemplos a aulas reales, donde la mejor precisión del modelo propuesto fue del 63,41% ([[privacy-aware-classroom-incident-recognition-2026|Parmar et al. (2026)]]).
5. **Explique las recomendaciones en el lenguaje propio del dominio del profesorado.** Las funciones de IA de una plataforma se ganan la confianza y la adopción cuando sus explicaciones son comprensibles y pedagógicamente significativas: en un experimento intrasujeto con una herramienta de recomendación de agrupamientos con IA (GrouPer), [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] encontraron que las explicaciones guiadas por el dominio y formuladas en el lenguaje curricular aumentaban la comprensibilidad, la confianza y la aceptación del profesorado mucho más que las explicaciones basadas en la importancia bruta de las variables, y que el uso real en el aula seguía siendo decisivo para lograr la aceptación plena.([[xai-teachers-trust-edtech-recommendations-2026]])
6. **Separe el sistema que produce la evidencia del que la califica.** Cuando los agentes pueden completar un curso en nombre de quien aprende, [[credentials-carry-evidence-ai-agents-2026|Srivastava (2026)]] sostiene que una plataforma debe emitir evidencia contemporánea e inspeccionable del razonamiento de quien aprende y no debe ser su único evaluador: el entorno, el emisor y el verificador deberían ser independientes.([[credentials-carry-evidence-ai-agents-2026]])
7. **Genere representaciones en tiempo de diseño, no en tiempo de ejecución.** [[edtech-design-time-generative-ui|Neshaei et al. (2026)]] sostienen que la adaptación en tiempo de ejecución no puede verificarse a escala y proponen codificar el contenido como tarjetas semánticas agnósticas a la modalidad, a partir de las cuales se generan variantes interactivas, de audio, de texto simplificado y de bajo ancho de banda que el profesorado aprueba antes de su publicación, lo que elimina el coste de inferencia por estudiante, aunque no se informa de ningún prototipo.

## Conceptos conectados

- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[ai-literacy]]
- [[student-experience]]
- [[teacher-role]]
- [[k-12]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[culturally-relevant-pedagogy]]
- [[stem-education]]
- [[educational-technology-developers]]

## Artículos conectados
- [[typology-generative-ai-tools-education-2026]] — Qué dijeron usar 211 educadores: 50 herramientas en nueve categorías
- [[making-ai-tutoring-productive-mastery-math-2026]] — Hacer productiva la tutoría con IA: práctica de matemáticas basada en el dominio
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — A un clic de distancia: Khanmigo en un experimento escolar de dos años
- [[access-not-enough-ai-tutoring-2026]] — La adopción y la implicación son las restricciones vinculantes de las plataformas de tutoría con IA
- [[oatutor-open-source-adaptive-tutor-2023]] — Una plataforma de tutoría adaptativa de código abierto para una investigación replicable
- [[mooc-to-maic]] — Del MOOC a las aulas de IA multiagente impulsadas por LLM
- [[ai-lms-middle-school-longitudinal]] — Un LMS integrado con IA para secundaria con apoyo acotado y centrado en la privacidad
- [[taklif-ai-interest-based-personalized-assignments]] — Plataforma de tareas personalizadas basadas en intereses
- [[edusim-llm-robotic-simulation-education-2026]] — Una plataforma de simulación robótica con LLM para la educación
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Una plataforma docente de robot social generativo en educación superior
- [[hypergamification-game-engine-lms]] — Un LMS basado en motor de juego que integra gamificación
- [[edtech-design-time-generative-ui]] — Diseñar tecnología educativa para la interfaz generativa
- [[lata-ferpa-compliant-local-llm-autograder]] — Plataforma de calificación automática con LLM local conforme a FERPA
- [[vismatic-secure-sandbox-cs-education]] — Una plataforma de entorno aislado seguro para la enseñanza de la informática
- [[learnmate2-llm-adaptive-learning]] — Plataforma de aprendizaje adaptativo personalizado impulsada por LLM
- [[privacy-aware-classroom-incident-recognition-2026]] — Visión por computador respetuosa con la privacidad en plataformas de aula
- [[raza-farooq-aied-review-2020-2025]] — Revisión exhaustiva de la investigación y los sistemas en AIED
- [[credentials-carry-evidence-ai-agents-2026]] — Credenciales que llevan consigo su evidencia para el trabajo de agentes de IA
- [[breideband-community-builder-cobi-2026]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[edtech-privacy-deferral-2026]] — «Ya lo arreglaremos»: la educación, la IA y el aplazamiento de la privacidad del estudiantado en la tecnología educativa
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que los métricos de fidelidad pasan por alto: una comprobación estructural de los datos educativos sintéticos