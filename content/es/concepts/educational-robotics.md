---
title: Robots en la educación
created: "2026-09-28T19:11:29-04:00"
updated: "2026-09-28T19:11:29-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-09-23T09:34:44-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Los robots en la educación (robótica educativa)** — el uso de robots físicos o simulados como herramientas para la [[teacher-role|enseñanza]] y el aprendizaje. La robótica educativa abarca un espectro amplio: desde kits programables que enseñan pensamiento computacional y programación hasta robots sociales de asistencia y humanoides que tutorizan, cuentan historias, modelan la lengua de signos o ensayan habilidades sociales. Se valora por fomentar la [[problem-solving|resolución de problemas]], el [[critical-thinking|pensamiento crítico]], la [[creativity|creatividad]] y la implicación con STEAM, y por hacer tangibles los conceptos informáticos abstractos mediante la interacción corporeizada. El corpus sobre robótica de esta base de conocimiento abarca la programación integrada en el [[curriculum-design|currículo]], los tutores conversacionales impulsados por LLM, los robots de [[storytelling-in-education|narración]] socialmente asistenciales y el juego de roles para el aprendizaje socioemocional. Se sustenta en dos áreas estrechamente relacionadas que aquí se absorben: los **robots sociales** (robots diseñados para la interacción social y la creación de vínculos) y la **interacción persona–robot (HRI)** (el estudio de cómo las personas perciben, confían y aprenden con robots).

## Preguntas para reflexionar

- Un robot en el aula aporta una [[community-of-inquiry|presencia social]] corporeizada que un chatbot en una pantalla no puede ofrecer. ¿Qué cree usted que cambian el cuerpo físico y las señales sociales de un robot en cómo el estudiantado aprende, confía y se implica, y de qué podrían distraerle?
- Los robots sociales usan habla, gestos y personalidad similares a los humanos para enseñar, contar historias o ensayar habilidades sociales. ¿Es intrínsecamente mejor para el aprendizaje un robot que se parece y actúa como un humano, o podría esa presencia social traer riesgos (desinformación, dependencia excesiva, privacidad) que las herramientas solo de software no tienen?
- Los LLM permiten ahora que los robots sociales conversen con fluidez. Si un robot puede hablar como un tutor, ¿qué sigue dependiendo de su corporeización física, y dónde importa de verdad añadir un «cuerpo» para el aprendizaje, frente a ser solo una novedad?
- Piense en alguna ocasión en que aprendió algo manipulando físicamente un objeto o viendo que sus acciones producían un resultado visible. ¿Cómo podría programar un robot físico fundamentar mejor las ideas abstractas (como la lógica de programa) que escribir código en una pantalla?

## Introducción

La robótica educativa es una aplicación distinta pero estrechamente relacionada con la [[ai-education|IA en la educación]]. A diferencia de la [[intelligent-tutoring|tutoría inteligente]] o los chatbots [[llm|LLM]] que son solo software, los robots añaden una presencia **corporeizada** y a menudo **social**: un agente físico que el estudiantado puede ver, manipular y (cada vez más) con el que puede conversar. Esa corporeización es central para su valor [[pedagogy|pedagógico]]: fundamenta la lógica abstracta de programa en un comportamiento observable y puede sostener la creación de vínculos y la implicación emocional que los sistemas incorpóreos no pueden ofrecer.

### Robots sociales e interacción persona–robot

Dos corrientes configuran la vertiente social de la robótica en la educación.

Los **robots sociales** son robots diseñados para relacionarse con las personas mediante la interacción social, usando señales similares a las humanas —habla, gestos, expresión facial y personalidad— para comunicar, enseñar, asistir o acompañar. En la educación, los robots sociales (humanoides como iCub, Pepper, Reachy y robots de compañía) se usan para la tutoría, la narración, el juego de roles, el apoyo lingüístico y como compañeros de estudio. Su presencia social es el diferenciador clave frente a los [[agentic-ai|agentes de IA]] basados en software, pues permite crear vínculos e implicación emocional. Los avances en [[llm|grandes modelos de lenguaje]] han ampliado drásticamente lo que los robots sociales pueden decir y hacer, habilitando una tutoría conversacional fluida y adaptativa, a la vez que introducen riesgos como la desinformación, la [[cognitive-offloading|dependencia excesiva]] y las vulneraciones de la [[privacy|privacidad]], lo que motiva enfoques de diseño basados en el conocimiento.

La **interacción persona–robot (HRI)** es el estudio interdisciplinar de cómo interactúan las personas y los robots, y abarca la percepción, la comunicación, la colaboración y las dinámicas sociales, cognitivas y [[ethics|éticas]] de esa interacción. En la educación, la HRI subyace a cómo el estudiantado percibe, confía y aprende con robots, ya sea programando un robot, conversando con un robot tutor o ensayando escenarios sociales. La [[research-methods-aied|investigación]] en HRI examina cómo la apariencia, el comportamiento, el contexto de la tarea y la corporeización del robot configuran la [[usability-research|experiencia de uso]], la confianza, la agencia y el aprendizaje. Entre las preocupaciones clave de la HRI educativa están preservar la [[agency|agencia]] humana, construir la [[trust|confianza]], apoyar la [[self-efficacy|autoeficacia]] y asegurar que la interacción con robots apoye, y no socave, la autonomía y el aprendizaje social. Conecta la robótica con la [[human-ai-collaboration|colaboración persona-IA]] y el [[social-emotional-learning|aprendizaje socioemocional]].

### Cómo se usan los robots en la educación

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]] añaden una tipología de roles en lugar de una lista de tecnologías: sus cinco tipos de robot de aula, derivados de un taller, difieren por *función pedagógica y nivel de abstracción*, no por el hardware. El tipo a ejecuta una demostración no interactiva de patrones sociales genéricos (un teatro de emociones guionizado seguido de una discusión sobre dinámicas como la escalada o el malentendido); el tipo b es un robot interactivo reactivo al tacto que apoya un teatro físico participativo, el [[embodied-learning|aprendizaje corporeizado]], la conciencia de los límites y la regulación emocional; el tipo c es un interlocutor de lengua hablada que muestra empatía y recuerda las interacciones con un único alumno, creando un entorno protegido uno a uno para la autorrevelación; el tipo d está guiado externamente por un especialista oculto, como un títere con grados de libertad adicionales, con el objetivo de aplanar la jerarquía social; y el tipo e es un robot no interactivo que reproduce acciones observadas recientemente en la escuela para que el alumnado reflexione sobre el comportamiento situado, siendo el contraste con el tipo a exactamente su abstracción específica de contexto en lugar de generalizada. La tipología declara explícitamente ser un espacio de diseño no validado y basado en un único programa nacional de salud mental, así que es un menú para diseñar y evaluar roles de robots, no una prueba de que ninguno de ellos funcione.

- **Pensamiento computacional y programación:** los robots programables (por ejemplo, LEGO, plataformas basadas en bloques) ayudan a quien aprende a conectar el código con resultados reales. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] vincula el pensamiento computacional con los currículos STEAM de secundaria, y [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] combina la programación por bloques con un agente de [[conversational-ai|IA conversacional]] y la retroalimentación corporeizada de un robot. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] permite a quienes empiezan controlar robots simulados con lenguaje natural.

- **Tutoría y transmisión de conocimiento:** [[knowledge-based-design-generative-social-robots-2026|la investigación sobre diseño basado en el conocimiento]] y [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] desarrollan robots sociales generativos impulsados por LLM que tutorizan a estudiantado de educación superior, abordando riesgos como la desinformación y la [[cognitive-offloading|dependencia excesiva]]. [[task-context-trust-educational-hri-2026|La investigación sobre la confianza]] muestra que lo que hace un robot (el contexto de la tarea) configura la confianza de quien aprende más que su apariencia, con la confianza más alta durante las tareas instruccionales.

- **Narración e implicación:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] y [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] usan robots sociales interactivos impulsados por LLM para la narración de historias con el fin de aumentar la motivación y la implicación, mientras que [[icub-humanoid-storytelling-llm-hri-2025|el estudio de HRI narrativa con iCub]] explora la narración cocreativa entre personas y humanoides.

- **Aprendizaje socioemocional e [[inclusive-learning|inclusión]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] usa el juego de roles mediado por robots para ensayar la intervención de testigos ante el acoso, y [[pepper-robot-sign-language-lis-2025|el trabajo con el robot Pepper]] explora la comunicación en lengua de signos con robots para apoyar al estudiantado sordo. [[pepper-social-robot-formal-education-scoping-review-2026|Una revisión de alcance]] mapea el uso de Pepper en la educación formal.

- **Autonomía y agencia:** [[human-autonomy-agency-hri-review-2025|Una revisión sistemática]] sintetiza cómo la HRI afecta la autonomía humana y el sentido de agencia, tendiendo puentes entre los marcos de diseño y las exigencias [[regulation|regulatorias]] (la Ley de IA de la UE, el diseño éticamente alineado del IEEE). [[social-robot-study-companions|Los robots sociales como compañeros de estudio]] y [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|la integración robot–LLM en la escritura creativa]] exploran más a fondo los roles de los robots.

- **Enfoques por proyectos y basados en juegos:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] presenta un curso de robótica por proyectos, y [[game-based-gamified-robotics-education-review-2026|una revisión sistemática]] compara el aprendizaje basado en juegos y la gamificación en la educación en robótica.

- **Aprendizaje por refuerzo y simulación a realidad en un flujo de trabajo robótico completo.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao y Wang (2026)]] convierten un flujo de trabajo de investigación en robótica de extremo a extremo —montaje, comprobaciones eléctricas, entrenamiento de políticas en simulación y despliegue físico— en un curso de [[k-12|secundaria]] construido sobre un único humanoide abierto (un ToddlerBot, con un coste de piezas declarado inferior a 6.000 USD) a lo largo de ocho sesiones de tres horas. Las parejas comparten un robot y entrenan una [[reinforcement-learning|política de marcha]] en [[simulation|simulación]] antes de desplegarla en el hardware, con controles de seguridad (superar una prueba de mantenerse de pie antes de caminar) que hacen visible el orden de dependencias. Como el artefacto compartido recompensa al equipo y no a la persona, el marco separa el rendimiento del robot de la comprensión individual: el estudiantado rota roles, cada cual entrega una predicción y una explicación separadas en cada punto de control, y la ayuda para dar pasos no se trata explícitamente como prueba de dominio conceptual, que es la advertencia de los autores: superar un hito con el robot no es entenderlo.

- **La robótica de competición como problema de ecosistema, no de kit.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] sitúan la restricción vinculante de la robótica en K-12 menos en el currículo o el hardware que en la mentoría técnica local sostenida, y muestran que está distribuida geográficamente: en Indiana, la participación en la FIRST LEGO League se hundió en la temporada remota de 2020, la participación urbana se recuperó gradualmente y la rural no, manteniéndose cerca de su nivel posterior a 2020 hasta 2025–2026. Su marco ARC convierte la mentoría en el objeto diseñado: las universidades imparten un curso con créditos que prepara a estudiantes de grado como mentores de talleres para equipos cercanos, y los programas escolares maduros se convierten en nodos secundarios cuyos estudiantes con experiencia pasan a ser mentores de pares para más escuelas, de modo que el alcance se propaga más allá de la zona de captación de cualquier universidad mediante un bucle que se refuerza a sí mismo. Un ensayo en una universidad creó tres equipos rurales de FLL y movió la conexión comunitaria de los estudiantes de grado de 1,86 a 4,00 en una escala de cinco puntos (el mayor de todos los cambios medidos, por delante de la confianza para enseñar conceptos técnicos, con +1,29), mientras que una simulación de Markov espacialmente explícita de las 1.925 escuelas públicas de Indiana proyectó 992 programas escolares tras 40 años con supuestos moderados, frente a 161 sin ARC. La evidencia es de nivel de viabilidad —siete mentores y cuatro progenitores, autoinformes retrospectivos, sin grupo de control—, pero el encuadre es trasladable a cualquier programa de robótica: lo que escala o no escala es la capacidad de mentoría y la geografía de los nodos, no el robot ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **Desarrollo infantil y aprendices pequeños:** [[ai-toys-child-development-2026|los juguetes con IA y el desarrollo infantil]] desplazan la mirada hacia los juguetes comerciales con IA en la primera infancia, examinando cómo los juguetes habilitados con IA afectan el desarrollo y el juego infantil. Esto extiende la robótica educativa más allá de los robots de aula hacia los juguetes de consumo que el alumnado encuentra en casa, y plantea preguntas sobre los [[pedagogical-agent|agentes]] en el juego, la [[trust-calibration|calibración de la confianza]], la [[agency|agencia]] y el [[well-being|bienestar]] de los aprendices más pequeños, un ámbito donde las orientaciones de diseño son más escasas que para los currículos de robótica en edad escolar.
- **Codificación tangible y robots sociales en la [[ai-literacy|alfabetización en IA]] de preescolar.** Lee (2026) integra el juego desconectado, la codificación tangible (Bee-Bot, Ozobot) y el diálogo guiado con un robot social de IA en el currículo Play With AI (PL-AI) para preescolar y jardín de infancia. La [[design-based-research|investigación basada en el diseño]] documenta cómo estas actividades de robótica corporeizadas y tangibles apoyan el razonamiento emergente del alumnado sobre conceptos de IA, con cuatro principios de diseño —juego corporeizado, codificación tangible, diálogo guiado y codiseño con el profesorado— que ofrecen un modelo evolutivamente adecuado para la robótica y la educación en IA en [[early-childhood-elementary-ai-education|la primera infancia y la educación primaria]].

- **Dos paradigmas para los aprendices pequeños: robots de codificación y robots sociales generativos.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li y Lee (2025)]] enmarcan la robótica en la primera infancia como el emparejamiento de dos paradigmas [[pedagogy|pedagógicos]], cada uno con una base teórica distinta. Los **robots de codificación** (Bee-Bot, KIBO, Matatalab) descienden del LOGO de Papert y encarnan el [[constructivist|construccionismo]]: el alumnado aprende haciendo y construye el [[computational-thinking|pensamiento computacional]] mediante la programación tangible. Los **robots sociales generativos**, impulsados por [[generative-ai|IA generativa]], se fundamentan en el [[sociocultural-learning|constructivismo social]] y actúan como pares o tutores conversacionales que [[scaffolding|andamian]] el aprendizaje dentro de la Zona de Desarrollo Próximo del alumnado y apoyan el desarrollo socioemocional. Su **Enfoque de Proyecto Creativo** de cinco pasos para integrar ambos tipos de robot en el Enfoque de Proyectos mantiene al profesorado como facilitador que guía la interacción alumnado–robot, equilibra la automatización con la [[creativity|creatividad]] y preserva la [[agency|agencia]] del alumnado.

### Corporeización y pedagogía

Un tema definitorio es que los robots son eficaces cuando apoyan objetivos de aprendizaje genuinos, no como ejercicios técnicos aislados. El valor de un robot depende del contexto pedagógico: enseñar pensamiento computacional ([[computational-thinking|pensamiento computacional]]), apoyar STEAM ([[stem-education|educación STEAM]]), construir habilidades de [[cs-education|programación]], motivar a quien aprende ([[motivation|motivación]], [[student-engagement|implicación]]) o apoyar el [[social-emotional-learning|aprendizaje socioemocional]] y la [[equity-in-ai-education|inclusión]]. La robótica también conecta con el [[project-based-learning|aprendizaje por proyectos]], el [[game-based-learning|aprendizaje basado en juegos]] y el [[experiential-learning|aprendizaje experiencial]]. Entre las consideraciones clave de diseño están preservar la [[agency|agencia]] de quien aprende, construir la [[trust|confianza]], apoyar la [[self-efficacy|autoeficacia]] y fundamentar el aprendizaje en la [[embodied-learning|interacción corporeizada]]. En el [[language-learning|aprendizaje de idiomas]], [[robot-assisted-language-learning-meta-analysis-2026|la evidencia metaanalítica]] apunta a la eficacia del aprendizaje de idiomas asistido por robots corporeizados.

- **Itinerarios hacia el aprendizaje de la robótica con IA.** [[educational-robotics-pathways-2026|Un estudio cualitativo]] con estudiantado de secundaria en un currículo de robótica + IA encontró aprendizaje a través de la práctica del mundo real, el diseño y la expresión creativa lúdica (con una lente construccionista y epistemológicamente pluralista).

## Conceptos conectados
- [[early-childhood-elementary-ai-education]] — Educación en IA en la primera infancia y la educación primaria
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Paraguas: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agéntica)

## Artículos conectados

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Revisión de alcance del robot Pepper en la educación formal
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metaanálisis del aprendizaje de idiomas asistido por robots corporeizados y mejorado con IA
- [[white-wu-robotics-ai-education-2026]] — Robótica e IA en la educación
- [[computational-thinking-educational-robotics-secondary-2026]] — Pensamiento computacional y robótica educativa
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Diseño basado en el conocimiento para robots sociales generativos
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Contexto de la tarea y confianza en la HRI educativa
- [[human-autonomy-agency-hri-review-2025]] — Autonomía humana y agencia en la HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — HRI narrativa con iCub
- [[pepper-robot-sign-language-lis-2025]] — Pepper y la lengua de signos
- [[social-robot-study-companions]] — Los robots sociales como compañeros de estudio
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Integración robot-LLM en la escritura creativa
- [[game-based-gamified-robotics-education-review-2026]] — Educación en robótica basada en juegos y gamificada
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Itinerarios hacia el aprendizaje de la robótica educativa con IA (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Pensamiento computacional mediado por robots en el jardín de infancia
- [[ai-toys-child-development-2026]] — Juguetes habilitados con IA y desarrollo infantil
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): currículo de alfabetización en IA centrado en el juego para preescolar y jardín de infancia (Lee 2026)
- [[creative-project-approach-ai-early-childhood-2025]] — El Enfoque de Proyecto Creativo: integrar robots de codificación y robots sociales generativos en los proyectos de la primera infancia (Yang, Li y Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Cinco tipos funcionalmente distintos de robot de aula, de la demostración guionizada al diálogo empático uno a uno (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: un marco basado en nodos que trata la capacidad de mentoría técnica y la geografía de los nodos, y no el hardware, como la restricción de los programas rurales de robótica en K-12 (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Enseñar aprendizaje por refuerzo y robótica humanoide a estudiantado de secundaria: un diseño curricular validado por expertos sobre una plataforma abierta de bajo coste
