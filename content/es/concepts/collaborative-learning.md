---
title: Aprendizaje colaborativo
created: "2026-09-28T21:06:00-04:00"
updated: "2026-10-02T21:24:48-04:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/collaborative-learning
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

> **El aprendizaje colaborativo** — enfoques instruccionales en los que el estudiantado trabaja junto para resolver problemas, completar tareas o construir conocimiento, con el apoyo o la mediación de herramientas de IA. En la [[ai-education|IA en la educación]], la [[research-methods-aied|investigación]] sobre aprendizaje colaborativo abarca la IA como compañera de colaboración, la IA como mediadora de la colaboración humana y el diseño de sistemas colaborativos de tutoría con IA.

## Preguntas para reflexionar

- Piense en una ocasión en la que aprendió algo en profundidad en grupo. ¿Qué hizo que funcionara? Ahora imagine que un [[conversational-ai|chatbot]] de IA se suma a ese grupo: ¿cómo podría reforzar o socavar en silencio lo que usted vivió?
- La investigación encuentra una disyuntiva: delegar el razonamiento en la IA produce el mejor rendimiento en la tarea pero el menor compromiso autorregulador, mientras que el modo que construye la [[self-regulated-learning|autorregulación]] rinde peor en la tarea. Si tuviera que elegir, ¿qué protegería: el resultado o el esfuerzo?
- El marco ICAP sitúa la colaboración «interactiva» como la forma más profunda de implicación. ¿Podría una IA que responde por el grupo degradar en realidad la colaboración de interactiva a meramente pasiva, incluso si el estudiantado se siente más satisfecho?
- Un estudio encontró que se confía en los mediadores de IA solo mientras se mantienen neutrales; cuando la IA pasa a aconsejar o a cuestionar, esa confianza se erosiona. ¿Qué grado de neutralidad debería tener realmente el mediador de IA de un grupo?
- Cuando quienes aprenden usan la IA para producir un artefacto pulido, pueden saltarse el esfuerzo epistémico que construye la comprensión. ¿Cómo diseñaría una compañera de IA que saque a la luz el desacuerdo y el conflicto en lugar de suavizarlos?
- El estudiantado neurodivergente informa de que necesita tareas estructuradas, equipos pequeños y estables y roles explícitos. Si las herramientas de colaboración con IA se construyen para quien aprende «medio», ¿a quién podrían dejar fuera, y cómo diseñaría de otro modo?

## Introducción

El aprendizaje colaborativo se fundamenta en las [[sociocultural-learning|teorías socioculturales]] del aprendizaje, que sitúan la construcción del conocimiento como algo fundamentalmente social. La IA introduce dinámicas nuevas: la IA puede actuar como par, como facilitadora o como participante en procesos colaborativos. Los artículos de esta base de conocimiento exploran cómo la colaboración mediada por IA afecta a los [[learning-gains|resultados de aprendizaje]], al compromiso epistémico y a la [[equity-in-ai-education|equidad]], y cómo deben diseñarse las estructuras colaborativas para dar cabida a perfiles diversos de quienes aprenden.

**La colaboración como constructo frente al trabajo en grupo como estructura.** El aprendizaje colaborativo es la teoría más amplia: el conocimiento se coconstruye mediante la actividad y el diálogo conjuntos. El [[group-work|trabajo en grupo]] es su implementación formal más concreta: un equipo que produce un resultado compartido y, a menudo, una calificación compartida. Ambos están estrechamente relacionados pero no son idénticos: un grupo puede funcionar sin colaboración genuina (tarea dividida en partes independientes, trabajo simplemente fusionado), y la colaboración puede darse sin grupos formales (parejas, diálogo con toda la clase o interacción humano–[[student-ai-interaction|IA]]). La IA presiona con más fuerza precisamente en esta brecha: [[chen-zou-genai-group-assessment-agency-2026|Chen y Zou (2026)]] encontraron grupos cuyo uso individual de la [[generative-ai|IA generativa]] nunca se convirtió en capacidad colectiva porque la tarea nunca exigió trabajo conjunto, junto a grupos en los que la calificación compartida convirtió el uso de IA generativa en un problema de coordinación. La página sobre el [[group-work|trabajo en grupo]] examina estas dinámicas en profundidad; esta página mantiene una mirada más amplia sobre el aprendizaje colaborativo en su conjunto.

**La IA como compañera de colaboración** explora el papel de la IA en el aprendizaje en grupo. **[[polished-artifacts-fragile-engagement-2026|Kimmerle]]** conceptualiza el riesgo de reducción del esfuerzo epistémico cuando quienes aprenden usan la IA para producir artefactos de conocimiento pulidos, y aboga por una IA estructurada como compañera argumentativa que preserve el conflicto cognitivo. Al probar esto a escala de aula, [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash y Connell Pensky (2025)]] hicieron que estudiantes de introducción a las ciencias sociales (n = 154) escribieran ensayos argumentativos, recibieran críticas de [[llm|LLM]] como ChatGPT, Gemini o Claude y después las incorporaran o las rebatieran; codificadores ciegos encontraron reflexión en el 92,7% y réplica activa a las afirmaciones del LLM en el 87,8% de las respuestas (κ interevaluador = 0,81–0,89), evidencia de que quienes aprenden se comportaron como consumidores [[critical-thinking|críticos]] que conservaron en lugar de rendir el conflicto cognitivo de la crítica. **[[epistemic-emotions-collaborative-problem-solving]]** examina cómo las emociones moldean la [[problem-solving|resolución de problemas]] colaborativa con IA. **[[hingle-collaborative-ai-literacy-2025]]** explora enfoques colaborativos para el desarrollo de la [[ai-literacy|alfabetización en IA]].
El respaldo de quien facilita es la palanca observada más fuerte sobre si el estudiantado acepta a un agente contrario: en doce equipos interprofesionales, quienes contaban con un facilitador docente que influía en su integración de la IA lo valoraron más como parte del equipo (M = 3,08 frente a 2,64) y su retroalimentación como más útil (M = 3,44 frente a 2,93) ([[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]]).

**La colaboración entre pares mediada por IA** examina cómo la IA [[scaffolding|andamia]] la colaboración entre personas. **[[golrang-propact-pair-programming-2026]]** y **[[agent-voice-accents-k12-group-learning]]** exploran cómo las características de los agentes de IA afectan a la dinámica de grupo. **[[ai-agents-peer-learning-discourse]]** documenta cómo los [[agentic-ai|agentes de IA]] que se enseñan entre sí producen patrones de discurso que se asemejan al aprendizaje entre pares humano. Los sistemas que abarcan toda el aula extienden esto a la dimensión *relacional* de la colaboración: **[[breideband-community-builder-cobi-2026|CoBi]]** usa reconocimiento de voz y comprensión del lenguaje para detectar discurso «elevador» en grupos pequeños (ser respetuoso, equitativo, comprometido con la comunidad, hacer avanzar el pensamiento) y devuelve [[visualization|visualizaciones]] no evaluativas de nivel de aula para apoyar la construcción de comunidad y las habilidades de colaboración, reteniendo deliberadamente la retroalimentación de nivel individual o de grupo para proteger la [[privacy|privacidad]] y la [[trust|confianza]].

**Perspectivas neurodivergentes sobre la colaboración** revelan requisitos de diseño críticos. **[[neurodivergent-computing-students|Zastudil et al.]]** encontraron que el estudiantado neurodivergente necesita tareas estructuradas, equipos pequeños y estables con roles definidos explícitamente y patrones de interacción predecibles, requisitos que las herramientas de colaboración con IA deben asumir. Esto conecta el aprendizaje colaborativo con el [[inclusive-learning|aprendizaje inclusivo]] y la [[neurodiversity|neurodiversidad]].

**La colaboración entre docentes e IA** examina cómo trabajan juntos el profesorado y la IA. **[[teacher-student-agency-orchestration]]** y **[[teacher-ai-teaming-five-levels]]** exploran marcos para la enseñanza colaborativa entre personas y IA, y conectan con el [[teacher-role|rol docente]] y el [[human-in-the-loop-ai|humano en el bucle]].

**La IA como mediadora [[pedagogy|pedagógica]]** reconceptualiza el papel de la IA en la colaboración más allá de la herramienta o el par. Partiendo de la teoría sociocultural y de la [[distributed-cognition|cognición distribuida]], **[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]** sitúa la IA como participante activa en la orquestación de la interacción, la construcción de sentido epistémica y los procesos reguladores, redistribuyendo agencia, autoridad y responsabilidad entre actores humanos y no humanos sin desplazar la agencia de quienes aprenden ni del profesorado. Esto fundamenta el aprendizaje colaborativo en una visión socialmente mediada y corregulada de la IA, y no individualista.

**Modos de colaboración y la disyuntiva eficiencia–regulación.** La investigación empírica sobre estudiantes universitarios que colaboran con IA en la resolución de problemas complejos identifica tres modos distintos: *razonamiento delegado*, *interpretación concertada* y *elaboración delegada*. El modo más eficiente (razonamiento delegado) produce el mayor rendimiento en la tarea pero el menor compromiso autorregulador de quienes aprenden, mientras que el modo con mayor autorregulación (interpretación concertada) rinde peor en los resultados de la tarea.([[hao-human-ai-collaborative-problem-solving-cognition]]) Esto revela una tensión de diseño central: los entornos de aprendizaje colaborativo deben equilibrar la eficiencia del sistema distribuido de personas e IA con la profundidad del compromiso [[self-regulated-learning|regulador]] de quienes aprenden.
El único contraste metaanalítico disponible para el trabajo colaborativo apoyado por IA se sitúa dentro de las intervenciones de ABP/ABPr apoyadas por IA generativa, donde la colaboración entre pares se agrupó en g = 0,885 frente a g = 0,416 para el trabajo individual, pero la diferencia solo alcanzó una tendencia marginal (QM = 3,675, p = .055) y el lado del trabajo individual se apoya en dos estudios, así que la evidencia agrupada de que la colaboración supera al trabajo en solitario con IA generativa es sugerente y no concluyente ([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et al. 2026]]).

Una revisión de alcance de 18 estudios mapea la misma disyuntiva en el trabajo en grupo: la IA generativa apoyó el desarrollo del conocimiento, la generación de ideas y la eficiencia comunicativa, a la vez que reducía la demanda de interacción entre pares, negociación y construcción colectiva de sentido, y la evidencia aleatorizada encontró sugerencias de IA más innovadoras sin una ganancia significativa en la innovación global de quienes participaban ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei y Perkins (2026)]]).

**El diseño de roles es una palanca sobre la calidad, y no el volumen, de la construcción colaborativa de conocimiento.** [[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al. (2026)]] asignaron roles rotativos de moderador, analista y argumentador a 58 [[higher-ed|estudiantes de posgrado]] y a su compañera de IA en 16 grupos, y encontraron que la estructura elevó el *contenido* de los mapas mentales grupales casi una banda completa de SOLO (M = 3,65 a 4,59, z = 3,771, p < 0,001) mientras que el número de nodos y ramas se mantuvo plano —organización en lugar de cobertura—, a costa de un aumento moderado de la [[cognitive-offloading|carga cognitiva]] colaborativa (p = 0,023). El [[network-analysis|análisis secuencial de retardos]] añadió una autotransición de evaluación y una ruta de conflicto a defensa que la herramienta por sí sola no había producido, lo que sitúa la [[human-ai-collaboration|colaboración persona–IA]] como un problema de diseño y no de herramienta.

**La IA generativa como agente y como espacio en grupos pequeños: el modo importa.** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] observan que *cómo* accede un equipo a la IA generativa da forma a la colaboración: con una única interfaz compartida en trabajo síncrono, los equipos coconstruyen «prompts colectivos», ejecutan un ciclo de superficiar–evaluar–incorporar y tratan el chat como memoria compartida; en trabajo asíncrono, la formulación privada de prompts y el «desetiquetado» de la salida fragmentan la [[explainable-ai|transparencia]] y elevan el coste de sostener un modelo cognitivo compartido. Su lente de trabajo cooperativo apoyado por IA generativa (GSCW) enmarca la IA generativa como un agente configurable (de asistente individual a miembro del equipo) y como un espacio colaborativo interactivo, lo que conecta directamente la configuración del acceso con la calidad de la implicación interactiva relevante para el [[icap-framework|marco ICAP]].

**La IA generativa como infraestructura de coordinación del grupo, y el riesgo de cooperación aplanada.** [[chen-zou-genai-group-assessment-agency-2026|Chen y Zou (2026)]] muestran cómo quince grupos de futuros docentes manejaron la IA generativa en una presentación grupal calificada, y la división va en contra del supuesto habitual de que la presión del grupo aumenta la dependencia de la IA. Cinco grupos intensificaron su uso para resolver un problema de colaboración conocido —no saber qué contenían las secciones de sus compañeros— alimentando ese trabajo a un chatbot para hacerlo inteligible y alinear su propia parte, y un grupo reconstruyó su ciclo como *discusión → externalización a la IA generativa → revisión colectiva → nueva discusión*. Los autores leen esto como algo más que [[cognitive-offloading|carga cognitiva delegada]], ya que el estudiantado conservó el juicio mientras la herramienta absorbía la coordinación, pero advierten que el flujo de trabajo más fluido puede saltarse el desacuerdo mediante el cual se construye convencionalmente la cohesión, lo que convierte el trabajo relacional en la cuestión abierta. Siete grupos redujeron su uso de la IA generativa, protegiendo el conocimiento [[situated-learning|situado]] construido en aulas compartidas («la IA solo sabe ese momento en que escribes»), la [[bias-mitigation|justicia]] hacia los compañeros de grupo, la originalidad entre grupos y la diversidad de perspectivas que el grupo ya tenía. Tres grupos no experimentaron ningún cambio: con la tarea dividida en secciones independientes, una práctica individual sofisticada con IA generativa nunca se convirtió en capacidad colectiva, aunque la coherencia era un criterio explícito. El patrón sugiere que son las normas del grupo, y no la herramienta, las que deciden qué hace un grupo con la IA, y que la adopción colectiva puede reducir el [[ai-misuse-learning-harm|riesgo percibido de mal uso]] en lugar de aumentar el compromiso.

**La colaboración como objeto de la enseñanza.** [[golrang-propact-pair-programming-2026|ProPACT]] es un [[intelligent-tutoring|tutor adaptativo]] impulsado por IA para la programación por parejas que trata la *díada* —y no al individuo— como unidad de análisis, modelando en tiempo real la atención visual conjunta, el esfuerzo mental conjunto y las señales pupilares para predecir rupturas de la colaboración con hasta 30 segundos de antelación e intervenir antes de que ocurran. Las díadas que recibieron retroalimentación proactiva lograron un éxito de depuración sustancialmente mayor y completaron las tareas con más eficiencia, y mostraron ganancias sostenidas en la regulación colaborativa después, evidencia de que la IA puede enseñar la colaboración misma y no solo apoyar una tarea. Medir la competencia colaborativa plantea el reto complementario de evaluar a escala la habilidad de resolución colaborativa de problemas (CPS), que tradicionalmente exige codificar manualmente los datos de proceso de tareas simuladas en conductas de CPS, algo que consume mucho tiempo y resulta poco práctico a escala; el [[prompt-engineering|prompting sensible al contexto]] de modelos de lenguaje preentrenados automatiza esta codificación modelando dependencias contextuales y fusionando habilidades cognitivas y sociales, con un rendimiento superior a bases de referencia sólidas.
**Andamiar el orden del habla del grupo, no su frecuencia.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela y Cukurova (2026)]] analizaron las secuencias de diálogo de tríadas de 65 estudiantes y encontraron que un orden —parafrasear, luego proponer, luego preguntar— acompañaba la mejora mientras que el inverso no lo hacía; el andamiaje máximo elevó la conducta centrada en la tarea pero también el guionizado y menos indicadores de resolución de problemas.

**La IA como mediadora neutral, y la tensión cuando deja de serlo.** [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] es una sonda [[llm]] basada en Discord que media en los límites disciplinares de equipos estudiantiles interdisciplinarios sacando a la luz supuestos implícitos y devolviendo síntesis anonimizadas a la discusión compartida. El estudiantado la valoró tanto como apoyo cognitivo como por su función de amortiguador relacional, pero surgió una tensión central: la neutralidad percibida de la IA era portante, y se erosionó una vez que la IA pasó de mediadora neutral a asesora o a cuestionadora, una restricción de diseño clave para los [[pedagogical-agent|agentes]] que median la colaboración preservando la [[human-ai-collaboration|colaboración persona–IA]] y la [[trust-calibration|calibración de la confianza]].

**Un protocolo estructurado de facilitación, y su riesgo de sicofancia.** [[ethics-training-agents-group-ethics-discussion-2026|Seo et al. (2026)]] amplían el [[learning-design|diseño del aprendizaje]] colaborativo con un protocolo estructurado de divergencia–deliberación–convergencia: un facilitador basado en LLM encadena turnos de palabra, cronometra las fases y resume de forma incremental, un formato que 45 estudiantes consideraron sencillo y similar a una discusión y que redujo la necesidad de facilitación externa. El diseño gira en torno a una tensión que el estudio midió directamente: los agentes apoyaron la amplitud de la toma de perspectiva (los grupos produjeron conjuntos de partes interesadas y de soluciones más amplios y divergentes, y los agentes dieron voz de forma sistemática a puntos de vista minoritarios), pero el acuerdo [[ai-sycophancy|sicofántico]] y sin razonamiento aplanó el conflicto cognitivo que hace que la colaboración profundice el pensamiento. Quienes participaron pidieron una salida de los agentes que expusiera los pasos intermedios de deliberación y no solo las conclusiones, y contraargumentos que preservaran el desacuerdo genuino.

**Estructuras colaborativas para la educación en IA.** [[academic-league-of-ai-2026|La Liga Académica de IA]] organiza la educación en IA mediante [[governance|gobernanza]] estudiantil democrática y equipos de proyecto, incorporando el [[active-learning|aprendizaje activo]] y el [[project-based-learning|aprendizaje basado en proyectos]] en una estructura colaborativa y conectada con la comunidad.

### El marco ICAP: la colaboración como el modo de implicación más profundo

El aprendizaje colaborativo ocupa la cima del [[icap-framework|marco ICAP]] (interactivo–constructivo–activo–pasivo): el modo *interactivo* —coconstruir significado mediante el diálogo, defender una posición o resolver de forma conjunta— produce el cambio de conocimiento más profundo en la taxonomía de Chi. Esto convierte el ICAP tanto en una justificación de las pedagogías colaborativas como en una restricción de diseño para la IA. Una IA que media la discusión (como hacen [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] o [[golrang-propact-pair-programming-2026|ProPACT]]) es valiosa precisamente cuando sostiene la implicación *interactiva*; una IA que responde por el grupo o suaviza el conflicto cognitivo puede degradar la colaboración a un modo meramente *activo* o *pasivo*. La anotación basada en ICAP (véase [[icap-cognitive-engagement-llm-agents|la medición extendida del ICAP del diálogo colaborativo]]) y la investigación sobre el momento de la facilitación tratan ambas la calidad del discurso interactivo como el resultado de interés, lo que fundamenta el aprendizaje colaborativo en la [[student-engagement|implicación del estudiantado]] y en la jerarquía del ICAP.([[icap-cognitive-engagement-llm-agents]])([[llm-facilitation-timing-online-discussions]])

## Orientaciones prácticas

- **Modelar la colaboración, no solo al individuo.** Las herramientas que siguen el estado diádico o grupal (como hace [[golrang-propact-pair-programming-2026|ProPACT]]) pueden andamiar la colaboración misma, prediciendo y previniendo rupturas en lugar de reaccionar ante ellas.
- **Preservar el conflicto cognitivo.** Estructure la IA como compañera argumentativa que saque a la luz el desacuerdo y los supuestos implícitos, evitando el problema de los artefactos pulidos en el que la IA suaviza un compromiso epistémico frágil.
- **Los personajes contrarios tienen costes afectivos.** En 97 tríadas, la IA contraria empujó el discurso hacia el reto y la reflexión pero redujo la satisfacción con el trabajo en equipo (ε² = .062) y la seguridad psicológica (ε² = .114) sin aumentar la producción creativa ([[jin-emergent-learner-agency-implicit-hai-2026|Jin et al. (2026)]]).

- **Ajuste la función del agente al resultado que pretende.** Una revisión de 46 estudios sobre agentes de IA en el aprendizaje colaborativo apoyado por ordenador encontró ganancias cognitivas informadas de forma consistente, mientras que los resultados conductuales, sociales y emocionales se mantenían dependientes del contexto, con la alineación más fuerte entre la función del agente y el resultado dentro del mismo dominio ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

- **Un rol de Facilitador separado reduce el dominio, no la capacidad de respuesta.** En el punto de referencia simulado de [[astra-multi-agent-tutoring-benchmark-2026|Oyelere (2026)]], añadir un agente Facilitador junto al Tutor redujo el desequilibrio diádico de turnos y palabras (M = 0,103 y 0,105 frente a 0,183 y 0,182) sin cambiar la implicación recíproca, aunque quienes aprendían eran personajes sintéticos y no díadas reales.
- **Equilibrar la eficiencia con la autorregulación.** Una IA colaborativa que maximiza la eficiencia en la tarea (razonamiento delegado) puede socavar el compromiso regulador de quienes aprenden; el diseño debería proteger deliberadamente un espacio para la interpretación concertada.
- **Respetar la restricción de neutralidad.** Se confía en los mediadores de IA mientras son neutrales; pasar a roles de asesoramiento o de cuestionamiento desestabiliza esa confianza, así que los cambios de rol deberían ser explícitos y configurables.
- **Dar cabida al estudiantado neurodivergente.** Las tareas estructuradas, los equipos pequeños y estables y las definiciones explícitas de roles son requisitos que las herramientas de colaboración con IA deben sostener.
- **Preferir retroalimentación no evaluativa y de nivel de aula.** Al apoyar la dimensión relacional de la colaboración, la retroalimentación agregada de nivel de clase protege la [[privacy|privacidad]] y la [[agency|agencia del estudiantado]] allí donde la puntuación individual se sentiría como vigilancia; el estudiantado de [[breideband-community-builder-cobi-2026|CoBi]] prefirió [[qualitative-research|visualizaciones cualitativas]] (un árbol orgánico) a las [[quantitative-research|cuantitativas]] (un gráfico de radar), y el profesorado valoró más usar las observaciones del sistema para suscitar reflexión que la visualización en directo.
- **Diseñar para la lectura y la atención que preceden a la contribución.** El aprendizaje colaborativo en los foros de [[online-teaching-and-learning|enseñanza y aprendizaje en línea]] depende no solo de publicar, sino de la lectura que lo precede. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao y Cukurova (2026)]] muestran que los resúmenes de discusión y las publicaciones de ejemplo generados por LLM pueden actuar como [[scaffolding|andamiajes]] de navegación que amplían la exposición del estudiantado a las contribuciones de sus pares y las condiciones de red para el capital social de puente (vínculos débiles), un apoyo que debería complementar, y no sustituir, las estrategias sociopedagógicas para sostener el compromiso bajo la carga de trabajo académica.

## Conceptos conectados
- [[pedagogical-patterns]] — Colaboración con IA compartida y guionizada y sus diseños de roles probados
- [[pedagogical-partnerships]] — Alianzas pedagógicas
- [[group-work]] — Trabajo en grupo
- [[problem-based-learning]]
- [[online-teaching-and-learning]] — Enseñanza y aprendizaje en línea
- [[active-learning]]
- [[icap-framework]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[inclusive-learning]]
- [[neurodiversity]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[project-based-learning]]
- [[human-ai-collaboration]]
- [[trust-calibration]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[student-engagement]]
- [[pedagogy]] — Marco general: pedagogías y estrategias de enseñanza en la educación con IA

## Artículos conectados
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — El aprendizaje basado en problemas y en proyectos como marcos prometedores para la educación apoyada por IA generativa: evidencia emergente de una revisión sistemática y un metaanálisis de tres niveles
- [[jin-emergent-learner-agency-implicit-hai-2026]] — La agencia emergente de quien aprende en la colaboración implícita persona–IA: personajes de apoyo frente a personajes contrarios
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[polished-artifacts-fragile-engagement-2026]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[neurodivergent-computing-students]]
- [[teacher-student-agency-orchestration]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[golrang-propact-pair-programming-2026]] — ProPACT: tutor adaptativo colaborativo proactivo con IA para la programación por parejas
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Spritz: mediación disciplinar con IA en equipos de proyecto estudiantiles
- [[academic-league-of-ai-2026]] — La Liga Académica de IA: educación en IA colaborativa y basada en proyectos
- [[icap-cognitive-engagement-llm-agents]] — Marco ICAP extendido para medir la implicación en el diálogo colaborativo
- [[llm-facilitation-timing-online-discussions]] — El momento de la facilitación con LLM en discusiones colaborativas en línea
- [[ba-ai-agents-cscl-review-2026]] — Revisión sobre agentes de IA en el aprendizaje colaborativo apoyado por ordenador
- [[wei-perkins-genai-student-collaboration-scoping-2026]] — La IA generativa y el trabajo en grupo del estudiantado: una revisión de alcance (Wei y Perkins 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Punto de referencia sintético ASTRA para la tutoría multiagente y una colaboración con participación equilibrada
- [[xu-genai-collaborative-space-2026]] — La IA generativa como agente y espacio colaborativo en la dinámica de grupos pequeños (Xu et al. 2026)
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — Diseño del aprendizaje impulsado por resúmenes generados por IA en foros de discusión en línea
- [[chen-zou-genai-group-assessment-agency-2026]] — La IA generativa como infraestructura de coordinación en grupos estudiantiles: uso intensificado, contenido y no puesto en práctica
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agentes de formación ética: facilitar la educación ética grupal con juego de roles y discusión para la reflexión y la exploración éticas