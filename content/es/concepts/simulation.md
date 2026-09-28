---
connected_resources: [openmaic]
title: Simulación
created: "2026-09-28T18:23:55-04:00"
updated: "2026-09-28T18:23:55-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
translation_of: concepts/simulation
source_updated: "2026-09-23T12:14:06-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Simulación**: el uso de entornos, agentes o escenarios modelados para apoyar el aprendizaje mediante la práctica y la retroalimentación en contextos que son seguros, repetibles y a menudo inaccesibles por otras vías. Las simulaciones permiten a quien aprende actuar, cometer errores y ver las consecuencias sin coste en el mundo real, y cada vez están más impulsadas por la IA y el modelado basado en agentes.

## Preguntas para reflexionar

- Recuerde una ocasión en que aprendió algo haciéndolo en un entorno seguro y de bajo riesgo: un laboratorio, un ejercicio simulado, un simulador de vuelo o de juego. ¿Qué hizo eficaz esa práctica, y qué podría perderse si la simulación fuera demasiado realista o no lo bastante realista?
- La página sostiene que las simulaciones permiten a quien aprende cometer errores y ver las consecuencias «sin coste en el mundo real». ¿Qué cree que se gana y qué podría perderse cuando el coste de un error baja hasta casi cero?
- Si una IA puede simular pacientes, estudiantes o interlocutores para practicar, ¿dónde trazaría la línea entre un ensayo valioso y una práctica que no se transfiere a la interacción humana real?
- ¿Por qué la conciencia de quien aprende sobre los límites de una simulación —su [[trust|fiabilidad]]— podría importar tanto como la fidelidad con que modela la realidad?
- ¿Cómo podría la misma tecnología de simulación que ayuda a alguien a aprender también inducirle a error, y qué necesitaría saber para distinguir esos dos desenlaces?

## Introducción

La simulación ocupa el núcleo de las [[pedagogy|pedagogías]] [[experiential-learning|experienciales]] y de [[active-learning|aprendizaje activo]]. Aporta la práctica deliberada, el [[productive-failure|fallo productivo]] y los [[feedback|bucles de retroalimentación]] que construyen habilidad y criterio. La IA ha transformado la simulación de dos maneras: impulsa entornos simulados más realistas y adaptativos, y genera [[simulating-students|estudiantado simulado]], pacientes o interlocutores que hacen escalable la práctica. La evidencia conductual muestra que *cómo* se implica quien aprende con una simulación varía de forma sistemática y no uniforme: al trazar el trabajo de estudiantes en línea que construían modelos ecológicos en VERA, [[an-goel-self-directed-modeling-2026|An, Hammock y Goel (2025)]] clasificaron la [[student-engagement|implicación]] en Observación (ejecuciones frecuentes y ajuste de parámetros con poca construcción de modelos), Construcción (construcción práctica con poca simulación) y Exploración (ciclos completos de construir–parametrizar–simular), con quienes exploran produciendo los modelos más complejos y diversos y quienes se centran en observar copiando en gran medida los existentes, un argumento para diseñar entornos de simulación que empujen a quien aprende hacia la actividad de ciclo completo.

### La IA y la simulación

- **Entornos impulsados por IA:** las simulaciones adaptativas ajustan la dificultad y los escenarios al estado de quien aprende, lo que enlaza con el [[adaptive-learning|aprendizaje adaptativo]] y con el entrenamiento basado en el [[reinforcement-learning|aprendizaje por refuerzo]].
- **Agentes simulados:** la IA puede simular pacientes (para la formación médica), estudiantes (para la práctica de [[teacher-role|docencia]]) o interlocutores, lo que hace accesible y repetible la práctica interpersonal de alto riesgo. En la [[teacher-education|formación del profesorado]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang y Zhang (2025)]] construyeron *Student GPT*, un [[conversational-ai|chatbot]] personalizado de ChatGPT que interpretaba el papel de un estudiante de [[k-12|secundaria]] con [[misconceptions|concepciones erróneas]] habituales sobre el razonamiento de proporciones, y que daba al profesorado de [[math-education|matemática]] en formación una práctica asequible y específica del contenido para diagnosticar el pensamiento del estudiantado; además usaron un marco de codificación Afectivo, Comunicativo y Técnico (ACT) de [[affective-computing|computación afectiva]] para evaluar sistemáticamente los puntos fuertes de la interpretación del estudiante simulado (claridad, relevancia, coherencia de los errores) y sus debilidades de autenticidad (tono propio de docente, confusión de rol).
- **La interpretación de roles pone a quien aprende en el papel.** Donde los agentes simulados aportan la contraparte, la interpretación de roles da ese papel a quien aprende. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari y sus colegas (2026)]] hicieron que 18 niños de 9 a 10 años observaran una escena de acoso representada por robots sociales, razonaran sobre la posición de cada personaje y luego ensayaran la defensa manejando un avatar robótico, y comunicaron ganancias en la [[self-efficacy|autoeficacia]] percibida para defender y creencias mejor calibradas sobre si enfrentarse a quien acosa realmente lo detiene. Su enfoque, el drama aplicado mediado por robots, mantiene a una persona facilitadora en el papel del Teatro Foro y limita la automatización al control narrativo, un recordatorio útil de que la parte exigente de la interpretación de roles es la reflexión y no la maquinaria. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga y Johnson (2025)]] sitúan la interpretación de roles junto a la simulación entre las estrategias de las que se sirve el aprendizaje en línea apoyado por IA.

- **Estudiantado simulado:** los modelos de comportamiento del estudiantado permiten a [[research-methods-aied|investigadores]] y diseñadores probar sistemas de tutoría y [[curriculum-design|currículo]] antes del despliegue real, y fundamentan el [[student-modeling|modelado del estudiantado]] y el [[knowledge-tracing|seguimiento del conocimiento]].
- **Confianza y fidelidad:** el valor de una simulación depende de la fidelidad con que modela el contexto real, y de la conciencia de quien aprende sobre sus límites, lo que conecta con la [[trust-calibration|calibración de la confianza]].
- **La [[generative-ai|IA generativa]] en el aprendizaje basado en simulación.** [[genai-scenario-based-healthcare-education-2026|Neto y sus colegas (2026)]] [[meta-analysis-systematic-review|revisan sistemáticamente]] la IA generativa en el aprendizaje basado en escenarios, casos, problemas y simulación en la educación sanitaria, y encuentran resultados positivos en habilidades cognitivas de orden superior pero resultados inconsistentes en lo demás, con la [[human-ai-collaboration|colaboración híbrida entre personas y IA]] superando a los enfoques totalmente automatizados. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger y Liening (2026)]] desarrollan agentes conversacionales de IA para el apoyo adaptativo en juegos de simulación empresarial, y abordan la carencia habitual de retroalimentación [[formative-assessment|formativa]] y de reflexión estructurada en el aprendizaje basado en simulación.
- **La «brecha de autenticidad» acota lo que la simulación con IA puede sustituir.** En la simulación [[medical-education|clínica]], la revisión sistemática de [[mixed-methods-research|métodos mixtos]] de [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]] sobre simulación de enfermería impulsada por IA (19 estudios, N = 1.253) encuentra que la IA es eficaz para el conocimiento cognitivo y los resultados afectivos, pero inconsistente para las habilidades psicomotoras complejas. Su concepto de **brecha de autenticidad** —una carencia percibida por quien aprende en resonancia emocional, reconocimiento de señales no verbales y dimensiones táctiles o de exploración física— explica *por qué* la simulación con IA es mejor para objetivos muy estructurados (comunicación básica, anamnesis) y por qué debería situarse en un **continuo escalonado de simulación** que entregue los escenarios psicomotores avanzados y emocionalmente complejos a pacientes estandarizados humanos y a la práctica clínica. La inestabilidad técnica (por ejemplo, los retrasos del reconocimiento de voz) también puede añadir [[cognitive-offloading|carga cognitiva]] superflua y ansiedad, así que la fidelidad y la estabilidad son en sí mismas palancas de diseño. Esto es paralelo al hallazgo de [[genai-scenario-based-healthcare-education-2026|Neto et al.]] de que los enfoques híbridos entre personas y IA superan a los totalmente automatizados.
- **Simulaciones codiseñadas por profesorado e IA.** Las simulaciones interactivas que apoyan a la vez el aprendizaje conceptual y el desarrollo de competencias son escasas en los ámbitos prácticos, y la producción de la IA generativa a menudo carece de validez pedagógica. En la [[stem-education|educación STEM con drones]], se evaluaron simulaciones codiseñadas por profesorado e IA, integradas en un currículo práctico por lo demás idéntico, con un diseño cuasiexperimental de pretest y postest en 30 estudiantes de secundaria, para examinar si la instrucción apoyada por simulación produce mejores [[learning-gains|resultados de aprendizaje]] ([[simulation-assisted-drone-learning-stem-2026]]). Por separado, las [[benchmark|referencias]] de tutoría [[agentic-ai|multiagente]] como ASTRA usan agentes simulados socialmente inteligentes para estudiar la colaboración con participación equilibrada en la [[cs-education|programación introductoria]] ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **El control de quien aprende en la simulación se ejerce, no se concede.** Un experimento 2 × 2 en una simulación de bandadas ([[learner-agency-ai-simulation-2026|Su, Nair y Nagashima 2026]]) dio a algunos estudiantes controles deslizantes de parámetros, a otros un agente conversacional opcional y a otros ambos; todas las condiciones mejoraron, pero ninguna de las dos prestaciones produjo una diferencia fiable una vez controlado el conocimiento previo (p = 0,849 y p = 0,108). Lo que predijo las [[learning-gains|ganancias]] fue dónde y durante cuánto tiempo manipulaba el estudiantado los parámetros: el uso sostenido de los controles en la lección conceptualmente más compleja se asoció positivamente con las ganancias, y el mismo comportamiento en la lección más fácil, negativamente. Para quienes construyen simulaciones, la implicación es que ofrecer controles no es la intervención: lo es ayudar a quien aprende a decidir qué cambiar y a registrar qué cambió.

### Conexiones

La simulación se conecta con el [[active-learning|aprendizaje activo]], el [[adaptive-learning|aprendizaje adaptativo]] y el [[pedagogical-agent|agente pedagógico]]. Es un mecanismo para el aprendizaje experiencial y [[constructivist|constructivista]] y se amplifica por la capacidad de la IA de generar entornos de práctica adaptativos y realistas.

## Conceptos conectados
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Educación en química e IA: laboratorios, evaluación formativa, límites de los LLM, filosofía de la experimentación
- [[biology-education]] — Educación en biología e IA: asistentes de laboratorio, alfabetización en IA en biología, pensamiento crítico, herramientas especializadas
- [[ai-technologies]] — Marco general: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, IA agéntica)
- [[virtual-and-augmented-reality]] — el modelo, no la modalidad: los entornos inmersivos normalmente representan una simulación

## Artículos conectados
- [[learner-agency-ai-simulation-2026]] — Control de parámetros y un agente de IA opcional en una simulación de sistemas complejos: las ganancias siguieron a la ejecución, no al acceso
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[genai-simulate-patient-history-pbl-2026]]
- [[alrazeeni-transforming-nursing-education-ai-2026]] — IA en la educación en enfermería: revisión sistemática (simulación, evaluación)
- [[adaptive-virtual-patient-psychotherapy-training]] — Pacientes virtuales adaptativos para la formación en psicoterapia
- [[ai-enabled-serious-games]] — Juegos serios habilitados por IA
- [[anvil-ai-educational-animations]] — ANVIL: analogías y vídeos para el profesorado
- [[astra-atco-training-simulator]] — ASTRA: simulador de formación para controladores de tránsito aéreo
- [[supplynet-visual-exploratory-learning]] — SupplyNet: aprendizaje exploratorio visual
- [[medeasy-ai-standardized-patients]] — MedEASY: pacientes estandarizados con IA
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Juego de interpretación de roles mediado por robots para la intervención de testigos (drama aplicado)
- [[hdr-brachytherapy-agentic-ai-simulation-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[ai-science-chemistry-education-systematic-review-2025]] — Revisión sistemática de la IA en la educación científica y química
- [[context-based-ai-secondary-chemistry-2026]] — Instrucción 7E contextualizada con IA en química de secundaria
- [[chatgpt-virtual-lab-teaching-assistant-biology-2026]] — ChatGPT como asistente virtual de laboratorio en biología
- [[educasim-cs1-instructional-practice]] — EducaSim: sección simulada de grupo pequeño para la práctica docente
- [[genai-scenario-based-healthcare-education-2026]] — Revisión sistemática de la IA generativa en la educación sanitaria basada en escenarios (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — Marco CAIS-GBL para agentes conversacionales de IA en juegos de simulación empresarial (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Agentes LLM ajustados y específicos de cada participante que reproducen diálogos de resolución colaborativa de problemas (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Referencia sintética ASTRA para tutoría multiagente y colaboración con participación equilibrada
- [[simulation-assisted-drone-learning-stem-2026]] — Aprendizaje con drones apoyado por simulación y andamiajes codiseñados por profesorado e IA
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — Simulación impulsada por IA en enfermería: revisión sistemática de métodos mixtos (brecha de autenticidad, continuo escalonado)
- [[sophie-clinical-communication-ai-assessment-2026]] — Formación escalable en comunicación clínica con IA y evaluación automatizada
- [[shi-genai-experiential-learning-management-education-2026]] — una simulación empresarial dinámica en la que el modelo genera eventos disruptivos en medio de la decisión
