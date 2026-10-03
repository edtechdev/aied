---
title: Agente pedagógico
created: "2026-09-28T19:10:59-04:00"
updated: "2026-10-02T22:23:27-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Síntesis**: los agentes [[pedagogy|pedagógicos]] son interfaces conversacionales impulsadas por IA integradas en entornos de aprendizaje que emplean estrategias pedagógicas (inducir, explicar, andamiar) para apoyar la [[student-engagement|implicación de quien aprende]], la reflexión y la metacognición. Los diseños varían desde simples proveedores de información hasta interlocutores de diálogo interactivo que se adaptan a los estados de quien aprende.

## Preguntas para reflexionar

- Piense en alguna ocasión en que un chatbot o un tutor le dio una respuesta perfecta que no le dejó más sabio. ¿Qué hace que una IA «enseñe» en lugar de limitarse a «resolver», y por qué una puntuación de un punto de referencia podría no captar esa diferencia?
- La página constata que las puntuaciones de «resolución» y las de «pedagogía» solo se correlacionan débilmente entre modelos. ¿Qué debería decirle eso sobre evaluar a un tutor de IA por su capacidad de responder preguntas?
- Algunos diseños asignan a la IA roles diferenciados —docente, compañero de clase, mentor— e incluso mantienen a un progenitor implicado de forma central (como en ParaTutor). Según su experiencia, ¿cambia en algo el modo en que [[learners|aprenden]] las personas interactuar con un agente cuando se le da un rol claro?
- El estudiantado real suele «saltarse» el encuadre pedagógico de un chatbot cuando los objetivos del agente chocan con los suyos. ¿Por qué alguien podría ignorar racionalmente un buen andamiaje, y qué implica eso para el supuesto «si lo construimos, se implicarán»?
- ¿Preferiría aprender de una IA que le explica cosas, de una que le hace preguntas o de una que media en un debate grupal? ¿Cómo moldea su preferencia lo que usted cree que debería ser un «agente pedagógico»?
- Desde un simple proveedor de información hasta una flota de agentes especializados que orquestan un curso entero: ¿dónde cree que reside realmente el valor (y el riesgo) de la tutoría con IA conversacional?

## Introducción

Un agente pedagógico es un componente interactivo de IA dentro de un sistema de aprendizaje que implica a quien aprende mediante el diálogo, preguntas o prompts para apoyar los procesos cognitivos y [[metacognition|metacognitivos]]. A diferencia de los [[visualization|paneles]] pasivos o de la retroalimentación estática, los agentes pedagógicos emplean estrategias de tutoría basadas en la evidencia —como inducir auto[[assessment|evaluaciones]] de quien aprende antes de ofrecer [[feedback|retroalimentación]], o [[scaffolding|andamiar]] la [[problem-solving|resolución de problemas]] mediante el diálogo socrático—. El paraguas abarca hoy desde un único [[intelligent-tutoring|tutor inteligente]] conversacional hasta flotas de [[agentic-ai|agentes]] especializados por rol que imparten clase, ejercen de mentores, facilitan la colaboración e incluso orquestan la generación de cursos, todo ello fundamentado en décadas de [[research-methods-aied|investigación]] sobre sistemas de tutoría inteligente.

## Cómo se estudian los agentes pedagógicos en la base de conocimiento

**Diseño y arquitectura de los agentes conversacionales.** Un hilo recurrente es cómo se estructuran los agentes, y no solo qué modelos los impulsan. El [[conversational-ai-tutors-framework|marco de tutores de IA conversacional]] sostiene que las [[ai-technologies|tecnologías]] probadas de los sistemas de tutoría inteligente —[[knowledge-tracing|seguimiento del conocimiento]], detección del afecto, [[student-modeling|modelado del estudiantado]]— deberían anclar a los tutores generativos, conservando la columna vertebral diagnóstica mientras la [[generative-ai|IA generativa]] aporta un diálogo flexible. Los diseños multiagente llevan esto más lejos: [[mooc-to-maic|MAIC]] sustituye el «un vídeo para N estudiantes» del [[online-teaching-and-learning|MOOC]] por un aula impulsada por un [[llm|LLM]] con agentes de Docente, Asistente, Compañero de clase y Analizador para ofrecer [[personalized-learning|aprendizaje personalizado]] a escala, mientras que [[lecturaagents-multi-agent-teaching|LecturaAgents]] añade un ProfessorAgent [[embodied-learning|corporeizado]] cuyo algoritmo TASA alinea las acciones visibles de [[teacher-role|enseñanza]] (escritura a mano, resaltado) con los perfiles de quien aprende. Incluso la tutoría entre progenitor e hijo se convierte en un problema de dos agentes en [[paratutor-parent-child-tutoring|ParaTutor]], donde un andamiaje con roles separados mantiene al progenitor implicado de forma central en lugar de dejar que un chatbot genérico lo desplace. La misma lógica basada en roles aparece en [[instructional-agents-multi-agent-course-gen|Instructional Agents]], donde agentes con los roles de profesorado docente, diseñador, ayudante y coordinador de programa colaboran a lo largo de ADDIE para generar materiales de curso.

Un uso complementario de los agentes basados en roles se dirige a la práctica del [[teacher-education|profesorado]] más que al aprendizaje del estudiantado: [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] combinan personas pedagógicas de estudiantado, memoria fundamentada en el material real del curso y un oráculo de hablante con LLM como juez para que el profesorado novel ensaye una sección de grupo pequeño — 254 sesiones opcionales de una media de unos 16 minutos cada una, a un coste aproximado de \$0,05–\$0,10 por sesión.

**Enseñar frente a resolver.** Un hallazgo empírico central es que producir respuestas no es apoyar el aprendizaje. [[measuring-llm-tutors-teach-vs-solve|Medir si los tutores LLM enseñan o resuelven]] muestra que las puntuaciones de resolución y de pedagogía en los puntos de referencia de tutoría solo se correlacionan débilmente (r = 0,421 en ocho modelos), y sostiene que los puntos de referencia deben informar por separado de los criterios orientados a la pedagogía: preguntas guía, pistas calibradas y andamiaje que no desvela la respuesta. Esto concuerda con la evidencia de [[stanford-evidence-base-ai-k12-2026|IA específica para tutoría frente a IA de propósito general]]: los tutores diseñados pedagógicamente y con [[guardrails|barandillas]] mitigan las caídas en las notas de examen y la supresión del razonamiento que producen los chatbots de propósito general sin más, preservando las [[desirable-difficulties|dificultades deseables]] y el esfuerzo productivo en lugar de cortocircuitarlos. Ahora bien, los puntos de referencia pueden sobreestimar lo bien que funcionan incluso los tutores con andamiaje en condiciones reales. [[rethinking-scaffolding-llm-tutors|Repensar el andamiaje en los tutores LLM]] encuentra que el estudiantado real se salta con frecuencia el encuadre pedagógico de un chatbot, una respuesta racional a un desajuste entre los objetivos del agente y los de quien aprende, de modo que la adopción debe evaluarse, no darse por supuesta.

**Papel en la tutoría y la colaboración.** Los agentes se posicionan cada vez más no como dadores de respuestas, sino como facilitadores y mediadores. [[niari-ai-pedagogical-mediator-collaborative-learning|El marco de mediador pedagógico de Niari]] replantea la IA en el [[collaborative-learning|aprendizaje colaborativo]] como un mediador interaccional, epistémico y regulador, que andamia la participación y la [[regulation|regulación]] compartida sin desplazar al profesorado ni la [[agency|agencia]] de quien aprende. En concreto, [[golrang-propact-pair-programming-2026|la tutoría colaborativa con IA (ProPACT)]] trata la colaboración misma como objeto de la enseñanza, anticipa rupturas diádicas hasta 30 segundos antes y ofrece andamiajes mínimamente intrusivos que preservan la [[metacognition|metacognición]]. [[embodied-inquiry-ai-facilitator-physics-2026|La indagación corporeizada con la IA como facilitadora]] muestra que una IA puede complementar la construcción manual de modelos facilitando la aplicación de un modelo ya construido, mientras que el [[robot-assisted-language-learning-meta-analysis-2026|metaanálisis sobre aprendizaje de lenguas asistido por robots]] encuentra que los resultados dependen más de cómo se posiciona al agente robótico en la enseñanza (interacción en grupo) que de su sofisticación técnica. Que el *rol* que desempeña un agente sea suficiente, o que además deba *adaptar su conducta*, lo cuestiona [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]: un estudio de «tertulia literaria» en [[k-12|primaria]] encontró que un compañero fijo con el rol de «igual» sostenía interacciones más largas pero suprimía la agencia del estudiantado y chocaba con un «techo [[affective-computing|afectivo]]» (reflexión emocional y orientada al futuro débil), lo que sostiene que *etiquetar* un rol debe ir acompañado de una lógica de interacción *adaptativa* al rol y no de un diseño monolítico de rol único.

[[ethics-training-agents-group-ethics-discussion-2026|Los agentes de formación en ética (Seo et al., 2026)]] muestran qué ocurre cuando se pide a un agente pedagógico que modere en lugar de enseñar: un facilitador LLM que gestionaba los turnos de palabra (con ventanas de 15 segundos para levantar la mano), el tiempo (avanzando automáticamente una etapa hacia el cierre tras 9 minutos) y resúmenes incrementales por lotes redujo la carga cognitiva de los participantes y les dio la sensación de que la discusión iba «por buen camino»; un participante lo contrastó favorablemente con ChatGPT, que «a menudo puede sentirse desorganizado o dificultar ver el progreso de las ideas». El mismo estudio expone el techo de los agentes basados en personajes: los tres agentes con orientaciones [[ethics|éticas]] distintas fueron valorados significativamente por debajo de los pares humanos en contribución, diversidad e influencia (Kruskal-Wallis p < .001), y los participantes pidieron resultados orientados al proceso («cómo razona el agente») y no a las conclusiones.

**Dónde se usan (y dónde no) los agentes conversacionales: el panorama de la revisión paraguas.** La [[conversational-ai-agents-umbrella-review-2026|revisión paraguas de los agentes de IA conversacional]] (Ganguly et al. 2025, 34 revisiones) cuantifica la utilización de la IAC: el apoyo a la enseñanza y el aprendizaje (97,1% de las revisiones), el apoyo psicológico y [[motivation|motivacional]] (91,2%) y el desarrollo metacognitivo y personal (88,2%) van a la cabeza, mientras que el apoyo administrativo (50%), la investigación y la gestión de la información (52,9%) y el apoyo sanitario o médico (41,2%) se quedan atrás. También señala que la investigación sobre [[conversational-ai|IAC]] carece de orientaciones de diseño de extremo a extremo, de métodos de [[usability-research|usabilidad]] específicos de la IAC y de estrategias concretas de orquestación del aula para el papel del profesorado, lo que refuerza que el diseño de agentes pedagógicos debe estar fundamentado en la interacción persona-ordenador, basarse en la evidencia y atender a la [[ai-literacy|alfabetización en IA]].([[conversational-ai-agents-umbrella-review-2026]])

**La orientación de rol es una variable de diseño, no una elección estilística.** La [[wang-teacher-student-centered-agents-physics-2026|comparación de agentes de física]] (Wang et al. 2026, 59 personas aprendientes) aísla el rol especificado en el prompt manteniendo fijos el modelo, la plataforma y la temperatura: un agente centrado en el docente, anclado en una fuente acotada del libro de texto y que responde desde la perspectiva del profesorado, frente a un agente centrado en el estudiantado, configurado con conocimiento de la comprensión del alumnado y guiado por un guion para diagnosticar ideas erróneas, nombrar el concepto y [[transfer-of-learning|transferir]] a un caso análogo. El rol centrado en el estudiantado ganó en todos los resultados medidos —rendimiento en el postest, menor carga cognitiva extrínseca y mayor carga germánica, experiencia de flujo y empatía percibida— aunque el agente centrado en el docente era el optimizado para la exactitud y la fidelidad al libro de texto. Esto convierte el *rol y el patrón de interacción* en un parámetro de diseño de primer orden junto con la [[prompt-engineering|ingeniería de prompts]] y la elección de modelo, y muestra que la empatía puede diseñarse a partir de la estructura conversacional y no de un modelo entrenado de otra manera ([[affective-computing]]).

**La intención de autoría no garantiza la pedagogía enactada.** Cuando 27 docentes de secundaria configuraron una herramienta de autoría de chatbots orientada al profesorado, una evaluación de 108 valoraciones de criterios a nivel de bot encontró que las respuestas generadas se alineaban mucho mejor con la capacidad de respuesta (88,9%) y la persona (81,5%) que con las reglas (70,4%) o el propósito declarado (59,3%), lo que los autores enmarcan a través de formas pedagógicas de la Fosa de Ejecución y la Fosa de Evaluación de Norman: los controles configurables por sí solos no hicieron visible la intención instruccional del profesorado en la conducta del bot ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Agentes en entornos inmersivos y de realidad extendida.** [[aclime-pedagogical-agents-extended-reality-2026|Ross y Kaspar (2026)]] extienden el concepto a la [[virtual-and-augmented-reality|realidad extendida]] (RA, virtualidad aumentada y RV) con ACLIME, un marco conceptual que —a diferencia de CAMIL, CATLM-VR y TICOL— mantiene al agente dentro del modelo. Nombra dos modos de interacción tomados de la literatura: el tutor, que ofrece orientación, ánimo, preguntas reflexivas y explicaciones, y el compañero de rol, que ocupa un papel definido dentro de un escenario, como un lugareño en una salida de campo sobre el cambio climático o una contraparte negociadora en formación corporativa. El cuerpo del agente (desde solo la cabeza hasta el cuerpo completo) y su conducta se tratan como superficies de diseño: realismo visual frente a conductual, control flexible por IA frente a guiones fijos basados en reglas, habla sintetizada frente a pregrabada, y canales no verbales como la mirada, el gesto y la proxemia. Se sostiene que la inmersión y la interactividad basada en el cuerpo multiplican las señales sociales que sustentan la [[community-of-inquiry|presencia social]] —se propone el realismo conductual, y no el visual, como predictor decisivo—, mientras que el propio cuerpo virtual de quien aprende añade una dimensión de [[embodied-learning|corporeización]] (propiedad corporal, agencia del propio cuerpo virtual, autolocalización) y el efecto Proteo. El equilibrio que el marco explicita es cognitivo: la inmersión y la mera presencia del agente pueden elevar la carga cognitiva incluso cuando la interacción social con el agente la reduce por el efecto de memoria de trabajo colectiva, y a las variables de diseño habituales se añade una capa temporal (familiarización, maduración de la relación humano-agente, declive de la novedad, aparición del cibermareo). Su estatus es deliberadamente provisional: apenas hay trabajo empírico que ponga a prueba agentes pedagógicos en medios inmersivos, y tanto los [[learning-gains|resultados de aprendizaje]] a largo plazo como las características de quien aprende quedan fuera del modelo.

**Evaluación y puntos de referencia.** Medir un agente pedagógico exige poner a prueba la pedagogía, no el contenido. [[teaching-monster-pck-benchmark-2026|El Teaching Monster Challenge]] evalúa el conocimiento pedagógico del contenido pidiendo a los agentes que adapten una lección a un perfil de estudiante especificado, y encuentra sistemas fuertes en contenido pero débiles al adaptarlo, además de revelar que los jueces LLM clasifican mal a los sistemas sólidos. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] evalúa a los agentes en juicio pedagógico profesional, tutoría multiturno [[situated-learning|situada]] y finalización de flujos de trabajo tipo lienzo, y muestra que los modelos se quedan cortos respecto a los estándares profesionales de enseñanza. [[ai-generated-interactive-fiction-education-2026|La ficción interactiva generada por IA]] añade un ángulo de evaluación de diseño: lo que limita su utilidad para la [[student-experience|experiencia del estudiantado]] es la coherencia y la integración de cuestionarios, no la capacidad de generación.
**Poner a prueba la robustez de la persona a lo largo de varios turnos.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] lanzaron seis ataques de intensidad creciente contra agentes de juego de roles con un juez automatizado: las pruebas con múltiples estrategias redujeron la robustez en 0,17–0,20 frente a una línea base de una sola estrategia, y los fallos críticos se concentraron después del turno 5–6, así que las evaluaciones cortas o de un solo turno sobreestiman la estabilidad de la persona y la adherencia ética.

## Orientaciones prácticas

Diseñe para la agencia de quien aprende, no para la comodidad del modelo. Prefiera las barandillas específicas de la tutoría —[[scaffolding|andamiaje]], pistas, [[socratic-method|preguntas socráticas]], focalización en [[misconceptions|ideas erróneas]]— frente a la generación directa de respuestas, ya que resolver y enseñar divergen. Distribuya el apoyo según el rol de la persona usuaria (progenitor frente a hijo, igual frente a igual) y no mediante una única interfaz genérica, y trate la colaboración como un objetivo legítimo de andamiaje. No dé por supuesto que el estudiantado adoptará el andamiaje; evalúe la adopción en contextos reales. Integre la [[human-in-the-loop-ai|supervisión humana]] en la autoría —como hace [[ai-tutor-authoring-promptdecipher|PromptDecipher]] al convertir la revisión docente de las respuestas del bot en una actividad de primer orden— y elija motores más baratos donde la calidad se mantenga. Informe por separado de las puntuaciones de enseñanza y de resolución, y valide el contenido generado con las personas usuarias en lugar de suponer que generar equivale a ser útil.
La preferencia de quien aprende es un mal indicador de la calidad del andamiaje: el estudiantado que trabajó la modelización matemática asistida por IA rindió mejor con los roles de Igual y Ayudante, pero valoró los roles más directivos de Tutor y Estudiante Excelente como los más útiles y con mayor autoeficacia ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang y Yang (2026)]]).
Una revisión de 46 estudios sobre agentes de IA en el aprendizaje colaborativo apoyado por ordenador distingue el andamiaje cognitivo, la facilitación social y la orquestación instruccional, y encuentra que las ganancias cognitivas son consistentes mientras que los resultados conductuales, sociales y emocionales dependen del contexto, de modo que la función del agente debe elegirse en función del resultado que se pretende producir ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Conexiones con conceptos relacionados

Los agentes pedagógicos se sitúan en la intersección entre la [[intelligent-tutoring|tutoría inteligente]] (su columna vertebral diagnóstica de [[knowledge-tracing|seguimiento del conocimiento]] y modelado del estudiantado) y la [[generative-ai|IA generativa]] o el [[llm|LLM]] (su motor de entrega). Operacionalizan el [[scaffolding|andamiaje]] y la [[feedback|retroalimentación]], apuntan a la [[metacognition|metacognición]] y al [[self-regulated-learning|aprendizaje autorregulado]], y se orientan cada vez más al [[collaborative-learning|aprendizaje colaborativo]]. Las preocupaciones de seguridad reaparecen en la [[pedagogical-safety|seguridad pedagógica]], la calidad de la autoría y el riesgo de que los agentes [[cognitive-offloading|descarguen]] el aprendizaje en lugar de apoyarlo. Todo ello se evalúa mediante la [[ai-ed-evaluation|evaluación de la IA en educación]] y [[benchmark|puntos de referencia]] que deben medir la enseñanza, no solo la resolución.

Lo decisivo es que los agentes pedagógicos se juzgan por sus [[learning-gains|ganancias de aprendizaje]], no por la fluidez con que responden. La evidencia de la base de conocimiento es que los agentes producen ganancias duraderas cuando se diseñan como entrenadores específicos de tutoría con barandillas —[[stanford-evidence-base-ai-k12-2026|la IA específica para tutoría supera sistemáticamente a los chatbots de propósito general]]— y pueden perjudicar el aprendizaje cuando sustituyen el esfuerzo de quien aprende ([[generative-ai-guardrails-harm-learning|el ensayo aleatorizado sobre barandillas]], [[jost-llm-programming-education-learning-outcomes|dependencia del LLM y notas]]). Medir las [[learning-gains|ganancias de aprendizaje]] de un agente exige, por tanto, medidas de resultado transferibles y sin asistencia, y no el rendimiento dentro de la herramienta.

Mejor retroalimentación no es lo mismo que mejor aprendizaje: personalizar un agente con bases de conocimiento y un flujo de trabajo elevó la exactitud y la especificidad de la retroalimentación, pero dejó sin cambios las conductas autorregulatorias, las experiencias de aprendizaje y los resultados, y su ventaja en ganancias apareció solo con retroalimentación directiva ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Conceptos conectados

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Artículos conectados
- [[wang-teacher-student-centered-agents-physics-2026]] — El rol de agente centrado en el estudiantado supera al centrado en el docente en rendimiento, carga, flujo y empatía (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: marco conceptual para agentes pedagógicos en RA/RV — tutor frente a compañero de rol, realismo, presencia, carga cognitiva (Ross y Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: agentes generativos de estudiantado para la práctica docente
- [[conversational-ai-agents-umbrella-review-2026]] — Revisión paraguas de los agentes de IA conversacional en educación
- [[conversational-agents-novice-programmers-scoping-2025]] — Revisión de alcance de los agentes conversacionales para programadores noveles
- [[ba-ai-agents-cscl-review-2026]] — Revisión de los agentes de IA en el aprendizaje colaborativo apoyado por ordenador
- [[kim-ai-productive-failure-adult-2026]] — Diseñar sistemas de IA para apoyar el aprendizaje basado en el fracaso productivo
- [[preferred-scaffolding-ai-mathematical-modeling]] — Andamiaje preferido en la modelización matemática asistida por IA
- [[llm-adaptive-programming-error-explanations-2026]] — Explicaciones adaptativas de errores de programación con LLM
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Compañero de IA adaptativo al rol para la tertulia literaria en primaria; el techo afectivo de los agentes de rol fijo (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agentes de formación en ética: facilitar la educación ética grupal con juego de roles y discusión para la reflexión y la exploración éticas

- [[teachers-configure-educational-chatbots-2026]] — ¿Enseñará como está previsto? Cómo configura el profesorado los chatbots educativos de IA

- [[agent-type-feedback-style-self-directed-learning-2026]] — Un agente personalizado elevó la calidad de la retroalimentación, pero no la autorregulación ni los resultados; su ventaja en ganancias apareció solo con retroalimentación directiva
